var BATTLE_PROCESSOR = (function () {
    var cachedField;

    var module = {};

    module.getDecksFromJSON = function (field) {
        var data = JSON.parse(field.value);
        field.value = '';
        var action = data.request.message;
        switch (action) {
            case 'playCard':
                playTurns(data, false);
                break;
            case 'getBattleResults':
            default:
                startBattle(data);
                playTurns(data, true);
                break;
        }
    }

    function resetField() {
        field = {
            cpu: {
                assaults: []
            },
            player: {
                assaults: []
            },
            uids: {}
        };
    }

    function startBattle(data) {
        var deck_player = { deck: [] };
        var deck_cpu = { deck: [] };
        var card_map = data.battle_data.card_map;

        resetField();

        try {
            var commander = data.battle_data.attack_commander;
            deck_player.commander = makeUnitInfo(commander.unit_id, commander.level);
            commander = get_card_by_id(deck_player.commander);
            commander.health_left = commander.health;
            field.player.commander = commander;
            field.uids[-1] = commander;

            commander = data.battle_data.defend_commander;
            deck_cpu.commander = makeUnitInfo(commander.unit_id, commander.level);
            commander = get_card_by_id(deck_cpu.commander);
            commander.health_left = commander.health;
            field.cpu.commander = commander;
            field.uids[-2] = commander;

            for (var key in card_map) {
                var unit = card_map[key];
                var runes = unit.runes;
                unit = makeUnitInfo(unit.unit_id, unit.level);
                for (var r in runes) {
                    unit.runes.push({ id: runes[r].item_id });
                }
                if (key <= 15) {
                    deck_player.deck.push(unit);
                } else {
                    deck_cpu.deck.push(unit);
                }
                field.uids[key] = get_card_by_id(unit);
            }
        }
        catch (err) {
        }

        drawField();

        deck_player = hash_encode(deck_player);
        deck_cpu = hash_encode(deck_cpu);
        document.getElementById("deck").value = deck_player;
        document.getElementById("deck2").value = deck_cpu;
        var d = document.getElementById("exactorder");
        if (d) d.checked = true;
        d = document.getElementById("exactorder2");
        if (d) d.checked = true;
    }

    function playTurns(data, playTurn0) {
        try {
            var turns = data.battle_data.turn;
            for (var turn in turns) {
                if (turn == 0 && !playTurn0) continue;
                var turnInfo = turns[turn];
                var p = (turn % 2 == 1 ? 'player' : 'cpu');
                for (phase in turnInfo) {
                    processTurnPhase(phase, p, turnInfo[phase]);
                }
            }
        }
        catch (err) {
            alert(err);
        }
        drawField();
    }

    function processTurnPhase(phase, p, turnData) {
        switch (phase.toLowerCase()) {
            case 'begin':
                updateFlags(turnData);
            case 'draws':
                break;
            case 'plays':
                processPlay(p, turnData);
                break;
            case 'upkeep':
            case 'actions':
                doActions(turnData);
                break;
            case 'end':
                updateFlags(turnData);
                break;
            case 'attack_kill':
            case 'defend_kill':
                processRemoval(turnData);
                break;
        }
    }

    function updateFlags(turnData) {
        for (var key in turnData) {
            var status = turnData[key];
            updateStatusFlag(status);
        }
    }

    function updateStatusFlag(status) {
        var card = field.uids[status.card_uid];
        var status_flag = status.status_flag;
        if (status_flag) {
            if (status_flag.indexOf("_") >= 0) {
                if (status_flag.indexOf("enhance") >= 0) {
                    card.enhanced = 0;
                    return;
                } else if (status_flag.indexOf("flurry") >= 0) {
                    card.flurry.countdown = status.value;
                    return;
                } else if (status_flag == "attack_boost") {
                    if (status.value == 0) {
                        card.attack_rally = 0;
                        card.attack_weaken = 0;
                    }
                    return;
                } else if (status_flag.indexOf("cooldown") >= 0) {
                    countdownSkill(card, status_flag, status.value);
                    return;
                }
                card[status_flag] = status.value;
            } else if (status_flag == "protect") {
                card.protected = status.value;
            } else if (status_flag == "poison") {
                card.poisoned = status.value;
            } else if (status_flag == "poisoner") {
                // Ignore
            } else if (status_flag == "burn") {
                card['scorched'] = { 'amount': status.value, 'timer': 2 };
            } else if (status_flag == "burn_timer") {
                // Ignore
            } else {
                card[status_flag] = status.value;
            }
        }
    }

    function countdownSkill(card, status_flag, value) {
        var skillIndex = status_flag.substring(0, status_flag.indexOf("_"));
        var skills = CARDS[card.id].skill;
        var skillType = skills[skillIndex].id;
        var instances = 0;
        for (var i = 0; i <= skillIndex; i++) {
            var skill = skills[i];
            if (skill.id == skillType) {
                instances++;
            }
        }
        countdownSkillInner(card, skillType, instances, value);
    }

    function countdownSkillInner(card, skillType, instances, value) {
        var skills;
        if (skillType == 'rally' || skillType == 'legion' || skillType == 'fervor') {
            skills = card.empowerSkills
        } else {
            skills = card.skill;
        }
        for (var i = 0; i < skills.length; i++) {
            var skill = skills[i];
            if (skill.id == skillType) {
                instances--;
                if (!instances) {
                    if (value != undefined) {
                        skill.countdown = value;
                    } else {
                        skill.countdown = skill.c - 1;
                    }
                }
            }
        }
    }

    function doActions(actions) {
        jamTracking = {};
        for (var i = 0; i < actions.length; i++) {
            var action = actions[i];
            switch (action.skill_id.toString()) {
                // Passives
                case 'pierce':
                case 'flurry':
                    // Ignore
                    break;

                case 'evade':
                    decrementField(action, 'evade');
                    break;

                case 'berserk':
                    setStatus(action, 'attack_berserk');
                    break;

                case 'fervor':
                case 'rally':
                case 'legion':
                    setStatus(action, 'attack_rally');
                    break;

                case 'weaken':
                    doWeaken(action);
                    break;

                case 'jam':
                    trackJam(action);
                case 'enfeeble':
                case 'enhance':
                case 'pierce':
                case 'protect':
                case 'protect_ice':
                    updateFlags(action.status);
                    break;

                case 'leech':
                    doLeech(action);
                    break;

                case 'heal':
                    doHeal(action);
                    break;

                case '0': // Attack
                case 'burn':
                case 'counter':
                case 'frost':
                case 'poison':
                case 'strike':
                    doDamage(action);
                    break;
            }
        }
    }

    var jamTracking = {};
    function trackJam(action) {
        var uid = action.card_uid;
        var targets = action.target_values;
        for (var key in targets) {
            jamTracking[uid] = (jamTracking[uid] + 1 | 1);
            if (targets[key].x) {
                var card = field.uids[uid];
                countdownSkillInner(card, "jam", jamTracking[uid]);
            }
        }
    }

    function resetFlurry(action) {
        var targets = action.targets;
        for (var key in targets) {
            var target = targets[key];
            var card = field.uids[target];
            var dualStrike = card.flurry;
            dualStrike.countdown = dualStrike.c;
        }
    }

    function decrementField(action, statusName) {
        var targets = action.targets;
        for (var key in targets) {
            var target = targets[key];
            var card = field.uids[target];
            card[statusName]--;
        }
    }

    function setStatus(action, statusName) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = field.uids[target.t];
                card[statusName] = target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = field.uids[target];
                card[statusName] += value;
            }
        }
    }

    function doWeaken(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = field.uids[target.t];
                doWeakenTarget(card, target.x);
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = field.uids[target];
                doWeakenTarget(card, value);
            }
        }
    }

    function doWeakenTarget(card, value) {
        card.attack_weaken += value;
        if( card.attack_weaken > (card.attack + card.attack_berserk)) {
            card.attack_weaken = card.attack + card.attack_berserk;
        }
    }

    function doHeal(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = field.uids[target.t];
                card.health_left += target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = field.uids[target];
                card.health_left += value;
            }
        }
        updateFlags(action.status);
    }

    function doLeech(action) {
        var target = action.card_uid;
        var value = action.value;
        var card = field.uids[target];
        card.health_left += value;
    }

    function doDamage(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = field.uids[target.t];
                card.health_left -= target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = field.uids[target];
                card.health_left -= value;
            }
        }
        updateFlags(action.status);
    }

    function processPlay(p, turnData) {
        var assaults = field[p].assaults;
        for (var i = 0; i < assaults.length; i++) {
            var card = assaults[i];
            if (card.timer) card.timer--;
        }

        for (var key in turnData) {
            var play = turnData[key];
            playCard(play.card_uid);
        }
    }

    function playCard(uid) {
        var p = (uid <= 15 ? 'player' : 'cpu');
        var card = field.uids[uid];
        card.health_left = card.health;
        card.timer = card.cost;
        card.uid = uid;
        field[p].assaults.push(card);
    }

    function processRemoval(turnData) {
        for (var dead = 0; dead < turnData.length; dead++) {
            var uid = turnData[dead];
            var p = (uid <= 15 ? 'player' : 'cpu');
            var assaults = field[p].assaults;
            for (var i = 0; i < assaults.length; i++) {
                var card = assaults[i];
                if (card.uid == uid) {
                    assaults.splice(i, 1);
                    break;
                }
            }
        }
    }

    function drawField() {
        clearCardSpace();
        var copy_field = copyField();
        draw_fields(copy_field);
    }

    function copyField() {
        var copy_field = {
            cpu: { assaults: [] },
            player: { assaults: [] },
            uids: {}
        };
        for (var i in field.uids) {
            var copy = {};
            copy_field.uids[i] = $.extend(copy, field.uids[i]);
        }
        copy_field.cpu.commander = field.uids[-2];
        copy_field.player.commander = field.uids[-1];

        copyPlayerField(field, copy_field, 'cpu');
        copyPlayerField(field, copy_field, 'player');

        return copy_field;
    }

    function copyPlayerField(original_field, copy_field, player) {
        var originalAssaults = original_field[player].assaults;
        var copyAssaults = copy_field[player].assaults;
        var uids = copy_field.uids;
        for (var i = 0; i < originalAssaults.length; i++) {
            var uid = originalAssaults[i].uid;
            var copy = uids[uid];
            if (player == 'player') {
                // Count down skills/timer for player's cards in GUI
                if (copy.timer) {
                    copy.timer--;
                } else if (!copy.jammed) {
                    countDownSkills(copy.skill);
                    countDownSkills(copy.empowerSkills);
                }
            }
            copyAssaults.push(copy);
        }
    }

    function countDownSkills(skills) {
        for (var i = 0; i < skills.length; i++) {
            var skill = skills[i];
            if (skill.countdown) skill.countdown--;
        }
    }

    return module;
}())