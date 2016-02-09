var BATTLE_PROCESSOR = (function () {
    var cachedField;
    var cachedHands;
    var cachedDraws;

    var trackPlays = _DEFINED("trackPlays");
    var trackedPlays = {};
    var statPlays = {};

    var module = {};

    BattleAPI.beginBattle = processJSONResponse;
    BattleAPI.continueBattle = processJSONResponse;

    module.getDecksFromJSON = function (field) {
        var jsonText = field.value;
        field.value = '';
        processDeckFromJSON(jsonText);
    }

    function processDeckFromJSON(jsonText) {
        DeckRetriever.getFieldsFromRequest(jsonText);
        var data = JSON.parse(jsonText);
        processJSONResponse(data);
    }

    var lastModified;
    module.watchFile = function () {
        var file;

        if (typeof window.FileReader !== 'function') {
            return;
        }

        var input = document.getElementById('responseFiles');
        if (!input) {
        } else if (!input.files) {
        } else if (!input.files[0]) {
        } else {
            file = input.files[0];
            lastModified = file.lastModifiedDate;
            setInterval(tick, 250);
        }
    }

    function tick() {
        var input = document.getElementById('responseFiles');
        var file = input.files && input.files[0];
        if (file && lastModified && file.lastModifiedDate.getTime() !== lastModified.getTime()) {
            lastModified = file.lastModifiedDate;

            var reader = new FileReader();
            reader.onload = function (e) {
                processDeckFromJSON(e.target.result);
            };
            reader.readAsText(file);
        }
    }

    var lastID = 0;
    var continues = 0;
    module.fight = function (isContinue) {
        var baseRequest = DeckRetriever.baseRequest;
        var targetID = document.getElementById("targetUserID").value;
        if (baseRequest) {
            var battleType = document.getElementById("battleType").value;
            if (battleType == "fightGuildMember" && _DEFINED("spam")) {
                targetID = getTarget();
                if (!isContinue) {
                    continues = 20;
                } else {
                    continues--;
                }
                if (!targetID) {
                    DeckRetriever.getFactionMemberIDs();
                    lastID = 0;
                    return;
                }
            }

            BattleAPI[battleType](targetID);
        }
    }

    function getTarget() {
        var target = DeckRetriever.factionMemberIDs[lastID];
        if (target && target == DeckRetriever.baseRequest.user_id) {
            lastID++;
            target = getTarget();
        }
        return target;
    }

    function processJSONResponse(data) {
        var action = data.request.message;
        switch (action) {
            case 'playCard':
                playTurns(data, false);
                break;
            case 'getBattleResults':
            default:
                setupBattlegrounds();
                startBattle(data);
                playTurns(data, true);
                break;
        }
    }

    function getDeck(data) {
        var card_map = data.battle_data.card_map;
        var deck = {
            commander: {},
            deck: []
        };

        deck.commander = getUnitFromCardMapInfo(data.battle_data.defend_commander);
        for (var uid in card_map) {
            if (uid > 15 || uid == -2) {
                var unit = card_map[uid];
                deck.deck.push(getUnitFromCardMapInfo(unit));
            }
        }
        return deck;
    }

    function getUnitFromCardMapInfo(unit) {
        var runes = unit.runes;
        unit = makeUnitInfo(unit.unit_id, unit.level);
        for (var r in runes) {
            unit.runes.push({ id: runes[r].item_id });
        }
        return unit;
    }

    function makeUnitList(deck) {
        var unitList = [];
        unitList.push(makeUnitString(deck.commander));
        deck = deck.deck;
        for(var i = 0; i < deck.length; i++) {
            unitList.push(makeUnitString(deck[i]));
        }
        return unitList.join(",");
    }

    function makeUnitString(unit) {
        var unit2 = {
            id: unit.id,
            level: unit.level,
            rune: ""
        };
        if (unit.runes.length) unit2.rune = unit.runes[0].id;
        var unitString = JSON.stringify(unit2).replace(/"/g, "");
        return unitString;
    }


    function makeStatString(unit) {
        var rarity = CARDS[unit.id].rarity;
        var unitString = "{ " + getFusion(unit.id) + " " + getRarity(rarity) + " " + getLevel(rarity, unit.level) + " }"
        return unitString;
    }

    function setupBattlegrounds() {

        if (BATTLEGROUNDS) {
            getbattleground = [];
            var bgCheckBoxes = document.getElementsByName("battleground");
            for (var i = 0; i < bgCheckBoxes.length; i++) {
                var checkbox = bgCheckBoxes[i];
                if (checkbox && checkbox.checked) {
                    getbattleground.push(i);
                }
            }
            getbattleground = getbattleground.join();
        }

        // Set up battleground effects, if any
        battlegrounds = {
            onCreate: [],
            onTurn: [],
        };
        if (getbattleground) {
            var selected = getbattleground.split(",");
            for (i = 0; i < selected.length; i++) {
                var id = selected[i];
                var battleground = BATTLEGROUNDS[id];
                if (battleground.effect.skill) {
                    battlegrounds.onTurn.push(MakeBattleground(battleground.name, battleground.effect.skill));
                } else if (battleground.effect.evolve_skill || battleground.effect.add_skill) {
                    battlegrounds.onCreate.push(MakeSkillModifier(battleground.name, battleground.effect));
                }
            }
        }
    }

    function resetField() {
        cachedField = {
            cpu: {
                assaults: []
            },
            player: {
                assaults: []
            },
            uids: {}
        };
        cachedHands = {
            cpu: [],
            player: []
        };
        cachedDraws = {};
    }

    function startBattle(data) {

        suppressOutput = true;
        setupField = function (field) { copyField(field, false); };
        setupDecks = function () { doSetupDecks(); setDeckCaches(); };
        setupWorkerField = function (worker) { postField(worker); }
        end_sims_callback = function () {
            document.getElementById('ui').style.display = 'none';
            drawField();
            if (_DEFINED("auto")) {
                checkBest();
            }
        }
        document.getElementById('ui').style.display = 'none';
        var deck_player = { deck: [] };
        var deck_cpu = { deck: [] };
        var card_map = data.battle_data.card_map;

        resetField();

        try {
            var commander = data.battle_data.attack_commander;
            deck_player.commander = makeUnitInfo(commander.unit_id, commander.level);
            commander = get_card_apply_battlegrounds(deck_player.commander);
            commander.health_left = commander.health;
            commander.owner = 'player';
            commander.uid = -1;
            cachedField.player.commander = commander;
            cachedField.uids[-1] = commander;

            commander = data.battle_data.defend_commander;
            if (!commander) commander = data.battle_data.attack_commander
            deck_cpu.commander = makeUnitInfo(commander.unit_id, commander.level);
            commander = get_card_apply_battlegrounds(deck_cpu.commander);
            commander.health_left = commander.health;
            commander.owner = 'cpu';
            commander.uid = -2;
            cachedField.cpu.commander = commander;
            cachedField.uids[-2] = commander;

            for (var uid in card_map) {
                var unit = card_map[uid];
                var runes = unit.runes;
                unit = makeUnitInfo(unit.unit_id, unit.level);
                for (var r in runes) {
                    unit.runes.push({ id: runes[r].item_id });
                }
                if (uid <= 15) {
                    deck_player.deck.push(unit);
                } else if (uid <= 115) {
                    deck_cpu.deck.push(unit);
                }
                var cachedCard = get_card_apply_battlegrounds(unit);
                if (uid >= 0 && uid <= 15) {
                    cachedCard.owner = 'player';
                } else if (uid > 15) {
                    cachedCard.owner = 'cpu';
                }
                cachedCard.uid = uid;
                cachedField.uids[uid] = cachedCard;
            }
        }
        catch (err) {
        }

        drawField(1);

        deck_player = hash_encode(deck_player);
        deck_cpu = hash_encode(deck_cpu);
        document.getElementById("deck").value = deck_player;
        document.getElementById("deck2").value = deck_cpu;
        var d = document.getElementById("exactorder");
        if (d) d.checked = true;
        d = document.getElementById("exactorder2");
        if (d) d.checked = true;
    }

    function checkBest() {
        var avgPoints = -99;
        var hash;
        var name;
        for (var i = 0; i < cardStats.keys.length; i++) {
            var key = cardStats.keys[i];
            var stats = cardStats[key];
            if (stats.avgPoints > avgPoints) {
                avgPoints = stats.avgPoints;
                hash = key;
                name = stats.card;
            }
        }

        choice = 0;

        if (hash) {
            var card = hash_decode(hash).deck[0];
            var hand = cachedHands.player;
            for (var i = 0; i < hand.length; i++) {
                var cardInHand = hand[i];
                if (cardInHand.id == card.id && cardInHand.level == card.level) {
                    if (cardInHand.runes.length == card.runes.length) {
                        if (cardInHand.runes.length) {
                            if (cardInHand.runes[0].id == card.runes[0].id) {
                                choice = i;
                                break;
                            }
                        } else {
                            choice = i;
                            break;
                        }
                    }
                }
            }
        }

        var card = cachedHands.player[choice];
        var uid = card.uid;
        BattleAPI.playCard(uid, 1);
    }

    function playTurns(data, playTurn0) {
        var lastTurn = 0;
        /*try {*/
            var turns = data.battle_data.turn;
            for (var turn in turns) {
                if (turn > lastTurn) lastTurn = turn;
                if (turn == 0 && !playTurn0) continue;
                var turnInfo = turns[turn];
                var p = (turn % 2 == 1 ? 'player' : 'cpu');
                for (phase in turnInfo) {
                    processTurnPhase(phase, p, turnInfo[phase]);
                }
                drawField(lastTurn);
            }
        /*}
        catch (err) {
            alert(err);
        }*/
        if (areCommandersAlive()) {
            resetKeys();
            startsim();
        } else {
            drawField(lastTurn, true);
            document.getElementById('ui').style.display = 'block';
            end_sims_callback = null;

            if (!cachedField.uids[-1].isAlive()) {
                outp('<br><h1>LOSS</h1><br>');
            } else if (!cachedField.uids[-2].isAlive()) {
                outp('<br><h1>WIN</h1><br>');
            } else {
                outp('<br><h1>DRAW</h1><br>');
            }

            if (trackPlays) {
                //outputTrackedCards();
                //outputTrackedStats();
            }

            if (_DEFINED("spam")) {
                if (continues > 0) {
                    module.fight(true);
                } else {
                    lastID++;
                    module.fight(false);
                }
            }
        }
    }


    function pausecomp(millis) {
        var date = new Date();
        var curDate = null;
        do { curDate = new Date(); }
        while (curDate - date < millis);
    }

    function areCommandersAlive() {
        var commander = cachedField.uids[-1];
        if (!commander.isAlive()) {
            return false;
        }
        var commander = cachedField.uids[-2];
        if (!commander.isAlive()) {
            return false;
        }
        return true;
    }

    function processTurnPhase(phase, p, turnData) {
        switch (phase.toLowerCase()) {
            case 'begin':
                updateFlags(turnData);
                break;
            case 'draws':
                processDraws(p, turnData);
                break;
            case 'plays':
                processPlay(p, turnData);
                doSetEvade(p);
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

    function processDraws(p, draws) {
        var hand = cachedHands[p];
        for (var i = 0; i < draws.length; i++) {
            var uid = draws[i];
            if (!cachedDraws[uid]) {
                cachedDraws[uid] = true;
                var card = cachedField.uids[uid];
                hand.push(card);
            }
        }
    }

    function updateFlags(turnData) {
        for (var key in turnData) {
            var status = turnData[key];
            updateStatusFlag(status);
        }
    }

    function updateStatusFlag(status) {
        var card = cachedField.uids[status.card_uid];
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
        var skills = get_skills(card.id, card.level);
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
                    decrementField(action, 'invisible');
                    break;

                case 'berserk':
                    incrementField(action, 'attack_berserk');
                    break;

                case 'fervor':
                case 'rally':
                case 'legion':
                    incrementField(action, 'attack_rally');
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
                var card = cachedField.uids[uid];
                countdownSkillInner(card, "jam", jamTracking[uid]);
            }
        }
    }

    function resetFlurry(action) {
        var targets = action.targets;
        for (var key in targets) {
            var target = targets[key];
            var card = cachedField.uids[target];
            var dualStrike = card.flurry;
            dualStrike.countdown = dualStrike.c;
        }
    }

    function decrementField(action, statusName) {
        var targets = action.targets;
        for (var key in targets) {
            var target = targets[key];
            var card = cachedField.uids[target];
            card[statusName]--;
        }
    }

    function incrementField(action, statusName) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                card[statusName] += ~~target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                card[statusName] += ~~value;
            }
        }
    }

    function setStatus(action, statusName) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                card[statusName] = ~~target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                card[statusName] = ~~value;
            }
        }
    }

    function doWeaken(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                doWeakenTarget(card, target.x);
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                doWeakenTarget(card, value);
            }
        }
    }

    function doWeakenTarget(card, value) {
        card.attack_weaken += value;
        if (card.attack_weaken > (card.attack + card.attack_berserk)) {
            card.attack_weaken = card.attack + card.attack_berserk;
        }
    }

    function doHeal(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                card.health_left += ~~target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                card.health_left += ~~value;
            }
        }
        updateFlags(action.status);
    }

    function doLeech(action) {
        var target = action.card_uid;
        var value = action.value;
        var card = cachedField.uids[target];
        card.health_left += value;
    }

    function doDamage(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                damageCard(card, ~~target.x);
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                damageCard(card, ~~value);
            }
        }
        updateFlags(action.status);
    }

    function damageCard(card, damage) {
        card.health_left -= damage;
        if (card.health_left < 0) card.health_left = 0;
    }

    function processPlay(p, turnData) {
        var assaults = cachedField[p].assaults;
        for (var i = 0; i < assaults.length; i++) {
            var card = assaults[i];
            if (card.timer) card.timer--;
        }

        for (var key in turnData) {
            var play = turnData[key];
            playCard(play.card_uid);
        }
    }

    function doSetEvade(p) {
        var assaults = cachedField[p].assaults;
        for (var i = 0; i < assaults.length; i++) {
            var card = assaults[i];
            if (card.evade) card.invisible = card.evade;
        }
    }

    function playCard(uid) {
        var p = (uid <= 15 ? 'player' : 'cpu');
        var card = cachedField.uids[uid];
        var assaults = cachedField[p].assaults;
        initializeCard(card, p, assaults.length);
        card.played = true;
        assaults.push(card);

        var hand = cachedHands[p];

        if (trackPlays && p == 'cpu') {
            trackPlay(card, hand);
        }

        for (var i = 0; i < hand.length; i++) {
            var card = hand[i];
            if (card.uid == uid) {
                hand.splice(i, 1);
                break;
            }
        }
    }

    function trackPlay(card, hand) {
        var picked = makeUnitInfo(card.id, card.level, card.runes);
        //var pickedKey = makeUnitString(picked);
        var pickedStatsKey = makeStatString(picked);
        //var pickedChoiceInfo = getChoices(pickedKey, picked);
        var pickedStatChoiceInfo = getStatChoices(pickedStatsKey);
        //var skipped = false;
        for (var i = 0; i < hand.length; i++) {
            var card = hand[i];
            var unitInfo = makeUnitInfo(card.id, card.level, card.runes);
            //var unitKey = makeUnitString(unitInfo);
            var unitStatsKey = makeStatString(unitInfo);
            /*if (pickedKey == unitKey && !skipped) {
                skipped = true; // Don't mark this card against itself, but do track it against other copies.
            } else*/ {
                /*
                var cardChoiceInfo = getChoices(unitKey, unitInfo);
                var pickedBefore = pickedChoiceInfo.chosenBefore[unitKey];
                if (pickedBefore) {
                    pickedBefore.times++;
                } else {
                    pickedChoiceInfo.chosenBefore[unitKey] = {
                        cardName: cardChoiceInfo.cardName,
                        times: 1
                    }
                }
                
                var pickedAfter = cardChoiceInfo.chosenAfter[pickedKey];
                if (pickedAfter) {
                    pickedAfter.times++;
                } else {
                    cardChoiceInfo.chosenAfter[pickedKey] = {
                        cardName: pickedChoiceInfo.cardName,
                        times: 1
                    }
                }
                */
                if (pickedStatsKey != unitStatsKey) {
                    var pickedBefore = pickedStatChoiceInfo.chosenBefore[unitStatsKey];
                    if (pickedBefore) {
                        pickedBefore.times++;
                    } else {
                        pickedStatChoiceInfo.chosenBefore[unitStatsKey] = {
                            times: 1
                        }
                    }
                    var statChoiceInfo = getStatChoices(unitStatsKey);
                    var pickedAfter = statChoiceInfo.chosenAfter[pickedStatsKey];
                    if (pickedAfter) {
                        pickedAfter.times++;
                    } else {
                        statChoiceInfo.chosenAfter[pickedStatsKey] = {
                            times: 1
                        }
                    }
                }
            }
        }
    }

    function getChoices(key, unitInfo) {
        var choices = trackedPlays[key];
        var card = get_card_by_id(unitInfo);
        var cardName = card.name + " {" + getFusion(unitInfo.id) + "} (" + card.level + "/" + card.maxLevel + ")" + (card.runes.length ? "*" : "");
        if (!choices) {
            choices = {
                cardName: cardName,
                chosenBefore: {},
                chosenAfter: {}
            };
            trackedPlays[key] = choices;
        }
        return choices;
    }

    function getStatChoices(key) {
        var choices = statPlays[key];
        if (!choices) {
            choices = {
                chosenBefore: {},
                chosenAfter: {}
            };
            statPlays[key] = choices;
        }
        return choices;
    }

    var fusionStrings = ["S", "D", "Q"];
    //var fusionStrings = ["Single", "Dual", "Quad"];
    function getFusion(cardID) {
        var fusion = (cardID.length > 4 ? parseInt(cardID[0]) : 0);
        return fusionStrings[fusion];
    }

    var rarityStrings = ["None", "Common", "Rare", "Epic", "Legendary", "Mythic"];
    function getRarity(rarity) {
        return rarityStrings[rarity];
    }

    function getLevel(rarity, level) {
        return "(" + level + "/" + (2 + parseInt(rarity)) + ")";
    }

    function outputTrackedCards() {
        var trackedPlayRows = [];
        var plays = [];
        for (var key in trackedPlays) {
            plays.push(key);

            var play = trackedPlays[key];
            play.beforeCount = getChoiceCount(play.chosenBefore);
            play.afterCount = getChoiceCount(play.chosenAfter);
        }
        plays.sort(function (keyA, keyB) {
            var compare = trackedPlays[keyA].afterCount - trackedPlays[keyB].afterCount;
            if(compare != 0) return compare;
            return trackedPlays[keyB].beforeCount - trackedPlays[keyA].beforeCount;
        })
        for (var i = 0; i < plays.length; i++) {
            var key = plays[i];
            var play = trackedPlays[key];
            var output = "<b>" + play.cardName + "</b>";
            var chosenAfter = [];
            for (var key in play.chosenAfter) {
                var choice = play.chosenAfter[key];
                chosenAfter.push(choice.cardName);// + " x" + choice.times);
            }
            chosenAfter.sort();
            var chosenBefore = [];
            for (var key in play.chosenBefore) {
                var choice = play.chosenBefore[key];
                chosenBefore.push(choice.cardName);// + " x" + choice.times);
            }
            chosenBefore.sort();

            if (play.afterCount > 0) output += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;<strong>chosen after (" + play.afterCount + "):</strong> " + chosenAfter.join(", ");
            if (play.beforeCount > 0) output += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;<strong>chosen before (" + play.beforeCount + "):</strong> " + chosenBefore.join(", ");
            trackedPlayRows.push(output);
        }
        trackedPlayRows = trackedPlayRows.join("<br/>");
        document.getElementById("results_table").innerHTML = trackedPlayRows;
    }

    function outputTrackedStats() {
        var trackedPlayRows = [];
        var plays = [];
        for (var key in statPlays) {
            plays.push(key);

            var play = statPlays[key];
            play.beforeCount = getChoiceCount(play.chosenBefore);
            play.afterCount = getChoiceCount(play.chosenAfter);
        }
        plays.sort(function (keyA, keyB) {
            var compare = statPlays[keyA].afterCount - statPlays[keyB].afterCount;
            if (compare != 0) return compare;
            return statPlays[keyB].beforeCount - statPlays[keyA].beforeCount;
        })
        for (var i = 0; i < plays.length; i++) {
            var key = plays[i];
            var play = statPlays[key];
            var output = "<b>" + key + "</b>";

            var chosenAfter = [];
            var equivalent = [];
            for (var key in play.chosenAfter) {
                var choice = play.chosenAfter[key];
                if (play.chosenBefore[key]) equivalent.push(key)
                else chosenAfter.push(key);// + " x" + choice.times);
            }
            chosenAfter.sort();
            var chosenBefore = [];
            for (var key in play.chosenBefore) {
                var choice = play.chosenBefore[key];
                if (play.chosenAfter[key]) equivalent.push(key)
                else chosenBefore.push(key);// + " x" + choice.times);
            }
            equivalent = equivalent.filter(function (item, pos) {
                return equivalent.indexOf(item) == pos;
            });

            chosenBefore.sort();
            var newLine = "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            if (chosenBefore.length > 0) output += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Better than (" + chosenBefore.length + "):</strong>" + newLine + chosenBefore.join(newLine);
            if (equivalent.length > 0) output += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Same As (" + equivalent.length + "):</strong>" + newLine + equivalent.join(newLine);
            if (chosenAfter.length > 0) output += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Worse than (" + chosenAfter.length + "):</strong>" + newLine + chosenAfter.join(newLine);
            trackedPlayRows.push(output);
        }
        trackedPlayRows = trackedPlayRows.join("<br/>");
        document.getElementById("results_table").innerHTML = '<br/><br/>' + trackedPlayRows;
    }

    function getChoiceCount(choices) {
        var count = 0;
        for (var key in choices) {
            count++;// += choices[key].times;
        }
        return count;
    }

    function processRemoval(turnData) {
        for (var dead = 0; dead < turnData.length; dead++) {
            var uid = turnData[dead];
            var p = (uid <= 15 ? 'player' : 'cpu');
            var assaults = cachedField[p].assaults;
            for (var i = 0; i < assaults.length; i++) {
                var card = assaults[i];
                if (card.uid == uid) {
                    assaults.splice(i, 1);
                    break;
                }
            }
        }
    }

    function resetKeys() {
        resetKeysForPlayer('player');
        resetKeysForPlayer('cpu');
    }

    function resetKeysForPlayer(p) {
        var assaults = cachedField[p].assaults;
        for (var i = 0; i < assaults.length; i++) {
            assaults[i].key = i;
        }
    }

    function drawField(turn, matchEnded) {
        clearCardSpace();
        var copy_field = {};
        copyField(copy_field, true);
        if (matchEnded) {
            draw_cards(copy_field, null, pickCard, turn);
        } else if (!_DEFINED("nodraw")) {
            draw_cards(copy_field, cachedHands.player, pickCard, turn);
        }
    }

    function pickCard() {
        var card = cachedHands.player[choice];
        var uid = card.uid;
        BattleAPI.playCard(uid);
    }

    function postField(worker) {
        worker.postMessage(
            {
                'cmd': 'setupField',
                'data': JSON.stringify(cachedField)
            });
    }

    function copyField(copy_field, doCountdowns) {
        copy_field.cpu = { assaults: [] };
        copy_field.player = { assaults: [] };
        copy_field.uids = {};

        for (var i in cachedField.uids) {
            var copy = {};
            copy_field.uids[i] = $.extend({}, cachedField.uids[i]);
        }
        copy_field.cpu.commander = copy_field.uids[-2];
        copy_field.player.commander = copy_field.uids[-1];

        copyPlayerField(cachedField, copy_field, 'cpu', doCountdowns);
        copyPlayerField(cachedField, copy_field, 'player', doCountdowns);
    }

    function setDeckCaches() {
        setDeckCache('player');
        setDeckCache('cpu');
    }

    function setDeckCache(p) {
        var deck_cache = {
            commander: null,
            deck: []
        };
        var assaults = cachedField.uids;
        for (var key in assaults) {
            var card = assaults[key];
            if (card.owner != p || card.played) continue;
            if (card.isCommander()) continue;
            deck_cache.deck.push(card);
        }
        if (p == 'player') {
            cache_player_deck_cards = deck_cache;
        } else {
            cache_cpu_deck_cards = deck_cache;
        }
    }

    function copyPlayerField(original_field, copy_field, player, doCountdowns) {
        var originalAssaults = original_field[player].assaults;
        var copyAssaults = copy_field[player].assaults;
        var uids = copy_field.uids;
        for (var i = 0; i < originalAssaults.length; i++) {
            var uid = originalAssaults[i].uid;
            var copy = uids[uid];
            if (doCountdowns && player == 'player') {
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

function setFightButtonText(textField) {
    var fightButton = document.getElementById("btn_fightSelf");
    if (textField.value) {
        fightButton.value = "Fight";
    } else {
        fightButton.value = "Fight Self";
    }
}