"use strict";

var SIMULATOR = {};
if (simulator_thread) (function () {

    //50% proc function
    function roll_proc() {
        return Math.round(Math.random() * 1) == 1;
    };

    // Play card
    function play_card(card, p, quiet) {
        var field_p_assaults = field[p]['assaults'];

        // Store plays
        //if (trackStats && p == 'player' && plays.length == 0) {
        if (trackStats && plays.length < 3) {
            plays.push(makeUnitInfo(card.id, card.level, card.runes));
        }

        // Not a valid card
        if (!card.id) return 0;

        var newKey = field_p_assaults.length;
        initializeCard(card, p, newKey);

        field_p_assaults[newKey] = card;

        if (debug && !quiet) echo += debug_name(field[p].commander) + ' plays ' + debug_name(card) + '<br>';
    };
    
    // Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
    function remove_dead() {
        remove_dead_cards('player');
        remove_dead_cards('cpu');
    };

    // Shift over to the left if there are any gaps.
    function remove_dead_cards(p) {
        var units = field[p].assaults
        // Find first dead unit (don't need to update the keys of any units before this one)
        for (var key = 0, len = units.length; key < len; key++) {
            var current_assault = units[key];
            // Starting at the first dead unit, start shifting.
            if (!current_assault.isAlive()) {
                if (debug) echo += debug_name(current_assault) + ' is removed from field<br>';
                if (current_assault.owner == 'player') damage_taken += current_assault.health;
                else damage_dealt += current_assault.health;
                var newkey = key;	// Store the new key value for the next alive unit
                for (key++; key < len; key++) {
                    current_assault = units[key];
                    // If this unit is dead, don't update newkey, we still need to fill that slot
                    if (!current_assault.isAlive()) {
                        if (debug) echo += debug_name(current_assault) + ' is removed from field<br>';
                        if (current_assault.owner == 'player') damage_taken += current_assault.health;
                        else damage_dealt += current_assault.health;
                    }
                        // If this unit is alive, set its key to newkey, and then update newkey to be the next slot
                    else {
                        current_assault['key'] = newkey;
                        units[newkey] = current_assault;
                        newkey++;
                    }
                }
                // We are done shifting slots, so set the length of the array (to get rid of the extra indices on the end)
                // and break out of the for-loop.
                units.length = newkey;
                break;
            }
        }
    };

    // Picks one target by random
    function choose_random_target(targets) {
        var targetIndex = ~~(Math.random() * targets.length)
        return [targets[targetIndex]];
    };

    function get_p(card) {
        return card.owner;
    };

    function get_o(card) {
        if (card.owner == 'cpu') return 'player';
        if (card.owner == 'player') return 'cpu';
    };

    // Deal damage to card
    // and keep track of cards that have died this turn
    function do_damage(card, damage) {
        if (damage >= card.health_left) {
            card.health_left = 0;
        } else {
            card.health_left -= damage;
        }
    };

    function getEnhancement(card, s) {
        var enhancements = card.enhanced;
        return (enhancements ? (enhancements[s] | 0) : 0);
    };

    function iceshatter(src_card) {
        // Bug 27391 - If Barrier is partially reduced before being completely depleted, Iceshatter still deals full damage
        var amount = src_card.barrier_ice;
        //if (amount > src_card.barrier_ice) amount = src_card.barrier_ice;
        var o = get_o(src_card);
        var field_o = field[o];
        var target = field_o.assaults[src_card.key];
        if (!target || !target.isAlive()) target = field_o.commander;

        do_damage(target, amount);

        if (debug) {
            echo += debug_name(src_card) + "'s barrier shatters and hits " + debug_name(target) + ' for ' + amount + ' damage';
            echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
        }
    };

    // Empower, Legion, and Fervor all activate at the beginning of the turn, after commander
    function empower_skills(field_p) {
        doEmpower(field_p.commander);
        var field_p_assaults = field_p.assaults;
        for (var unit_key = 0, unit_len = field_p_assaults.length; unit_key < unit_len; unit_key++) {
            var current_unit = field_p_assaults[unit_key];
            if (current_unit.empowerSkills.length && current_unit.isActive()) {
                doEmpower(current_unit);
            }
        }
    };

    function doEmpower(source_card) {

        var dualStrike = source_card.flurry && !source_card.flurry.countdown && source_card.hasAttack();
        if (debug && dualStrike) {
            // Let main attack loop deal with resetting timer
            echo += debug_name(source_card) + ' activates dualstrike<br>';
        }

        var skills = source_card.empowerSkills;
        for (var i = 0, len = skills.length; i < len; i++) {
            var skill = skills[i];
            if (skill.c) {
                if (skill.countdown) {
                    skill.countdown--;
                    continue;
                } else {
                    skill.countdown = skill.c - 1;
                }
            }
            empowerSkills[skill.id](source_card, skill);
            if (dualStrike) {
                empowerSkills[skill.id](source_card, skill);
            }
        }
    };

    var activationSkills = {

        // Protect (Barrier)
        // - Can target specific faction
        // - Targets allied assaults
        // - Can be enhanced
        protect_ice: function (src_card, skill) {
            activationSkills.protect(src_card, skill, true);
        },
        protect: function (src_card, skill, ice) {

            var faction = skill['y'];

            var p = get_p(src_card);
            var o = get_o(src_card);

            var protect = skill['x'];
            var all = skill['all'];

            var field_p_assaults = field[p]['assaults'];

            var targets = [];
            for (var key = 0, len = field_p_assaults.length; key < len; key++) {
                var target = field_p_assaults[key];
                if (target.isAlive()
                && target.isInFaction(faction)) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) return;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    protect += enhanced;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];

                target.protected += protect;
                if (ice) {
                    target.barrier_ice += protect;
                }
                if (debug) {
                    if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                    echo += debug_name(src_card) + ' barriers ' + debug_name(target) + ' by ' + protect + '<br>';
                }
            }
        },

        // Enhance
        // - Can target specific faction
        // - Targets allied, units
        // - Target must be active this turn (for activation skills only)
        // - Target must not be frozen (for activation skills only)
        // - Target must have specific "enhanceable skill" ("all" versions aren't counted)
        enhance: function (src_card, skill) {

            var faction = skill['y'];

            var p = get_p(src_card);
            var o = get_o(src_card);

            var x = skill['x'];
            var s = skill['s'];
            var all = skill['all'];

            var field_p_assaults = field[p]['assaults'];
            var require_active_turn = (s != 'counter' && s != 'armored' && s != 'evade');
            var targets = [];
            for (var key = 0, len = field_p_assaults.length; key < len; key++) {
                var target = field_p_assaults[key];
                if (!target.isUnjammed()) continue;
                if (!target.isInFaction(faction)) continue;
                if (require_active_turn && !target.isActive()) continue;
                if (target.hasSkill(s, 0)) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) return;

            // Check All
            if (!all) {
                targets = choose_random_target(targets);
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];
                var enhancements = target.enhanced;
                if (!enhancements) {
                    enhancements = {};
                    target.enhanced = enhancements;
                }
                enhancements[s] = (enhancements[s] | 0) + x;
                if (debug) echo += debug_name(src_card) + ' enhances ' + s + ' of ' + debug_name(target, false) + ' by ' + x + '<br>';
            }
        },

        // Heal
        // - Can target specific faction
        // - Targets allied damaged assaults
        // - Can be enhanced
        heal: function (src_card, skill) {

            var faction = skill['y'];

            var p = get_p(src_card);
            var o = get_o(src_card);

            var heal = skill['x'];
            var all = skill['all'];

            var field_p_assaults = field[p]['assaults'];

            var targets = [];
            for (var key = 0, len = field_p_assaults.length; key < len; key++) {
                var target = field_p_assaults[key];
                if (target.isAlive()
                && target.isDamaged()
                && target.isInFaction(faction)) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) return;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    heal += enhanced;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];

                var heal_amt = heal;
                if (!heal_amt) {
                    var mult = skill.mult;
                    heal_amt = ~~(target.health * mult);
                }

                if (heal_amt > target['health'] - target['health_left']) heal_amt = target['health'] - target['health_left'];
                target['health_left'] += heal_amt;
                if (debug) {
                    if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                    echo += debug_name(src_card) + ' heals ' + debug_name(target) + ' by ' + heal_amt + '<br>';
                }
            }
        },

        // Strike (Bolt)
        // - Can target specific faction
        // - Targets enemy assaults
        // - Can be evaded
        // - Must calculate enfeeble/protect
        // - Can be enhanced
        strike: function (src_card, skill) {

            var faction = skill['y'];

            var o = get_o(src_card);

            var strike = skill['x'];

            var all = skill['all'];

            var field_x_assaults = field[o]['assaults'];

            var targets = [];
            for (var key = 0, len = field_x_assaults.length; key < len; key++) {
                var target = field_x_assaults[key];
                if (target.isAlive()
                && target.isInFaction(faction)) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) return;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    strike += enhanced;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];

                // Check Evade
                if (target['invisible']) {
                    target['invisible']--;
                    if (debug) echo += debug_name(src_card) + ' bolts ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                var strike_damage = strike;


                // Check Protect/Enfeeble
                var enfeeble = 0;
                if (target['enfeebled']) enfeeble = target['enfeebled'];
                var protect = 0;
                if (target['protected']) protect = target['protected'];

                if (enfeeble) {
                    strike_damage += enfeeble;
                }
                if (enhanced) {
                    strike_damage += enhanced;
                }
                var shatter = false;
                if (protect) {
                    if (strike_damage >= protect) {
                        shatter = target.barrier_ice;
                        target['protected'] = 0;
                    } else {
                        target['protected'] -= strike_damage;
                    }
                    strike_damage -= protect;
                }

                if (strike_damage < 0) {
                    strike_damage = 0;
                } else {
                    do_damage(target, strike_damage);
                }
                if (debug) {
                    echo += '<u>(Strike: +' + strike;
                    if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
                    if (enhanced) echo += ' Enhance: +' + enhanced;
                    if (protect) echo += ' Barrier: -' + protect;
                    echo += ') = ' + strike_damage + ' damage</u><br>';
                    echo += debug_name(src_card) + ' bolts ' + debug_name(target) + ' for ' + strike_damage + ' damage';
                    echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
                }
                if (shatter) {
                    iceshatter(target);
                }
            }
        },

        // Jam (Freeze)
        // - Has cooldown timer (only fires every x turns)
        // - Can target specific faction
        // - Targets active_next_turn, unjammed enemy assaults
        // - Can be evaded
        // - If evaded, cooldown timer is not reset (tries again next turn)
        jam: function (src_card, skill) {

            var p = get_p(src_card);
            var o = get_o(src_card);

            var all = skill['all'];

            var field_x_assaults = field[o]['assaults'];

            var targets = [];

            for (var key = 0, len = field_x_assaults.length; key < len; key++) {
                var target = field_x_assaults[key];
                if (!target.isAlive()) continue;
                if (!target.isActiveNextTurn()) continue;
                if (target.isUnjammed()) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) {
                // No targets - retry next turn
                skill.countdown = 0;
                return;
            }

            // Check All
            if (!all) targets = choose_random_target(targets);

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];

                // Check Evade
                if (target.invisible) {
                    target.invisible--;
                    // Missed - retry next turn
                    skill.countdown = 0;
                    if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                target.jammed = true;
                if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(target) + '<br>';
            }
        },

        // Frostbreath
        // - Targets opposing enemy unit and any adjacent enemy units
        // - Can be evaded
        // - Must calculate enfeeble/protect
        // - Can be enhanced
        frost: function (src_card, skill) {

            var p = get_p(src_card);
            var o = get_o(src_card);

            var frost = skill['x'];
            var enhanced = getEnhancement(src_card, skill.id);
            if (enhanced) frost += enhanced;

            var all = skill['all'];

            var field_x_assaults = field[o]['assaults'];

            var targets = [];

            var i = src_card['key'] - 1;
            var end = i + 2
            for (; i <= end; i++) {
                var target = field_x_assaults[i];
                if (target && target.isAlive()) {
                    targets.push(i);
                }
            }

            // No Targets
            if (!targets.length) return;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];

                // Check Evade
                if (target['invisible']) {
                    target['invisible']--;
                    if (debug) echo += debug_name(src_card) + ' breathes frost at ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                var frost_damage = frost;


                // Check Protect/Enfeeble
                var enfeeble = 0;
                if (target['enfeebled']) enfeeble = target['enfeebled'];
                var protect = 0;
                if (target['protected']) protect = target['protected'];

                if (enfeeble) {
                    frost_damage += enfeeble;
                }
                if (enhanced) {
                    frost_damage += enhanced;
                }
                var shatter = false;
                if (protect) {
                    if (frost_damage >= protect) {
                        shatter = target.barrier_ice;
                        target['protected'] = 0;
                    } else {
                        target['protected'] -= frost_damage;
                    }
                    frost_damage -= protect;
                }

                if (frost_damage < 0) {
                    frost_damage = 0;
                } else {
                    do_damage(target, frost_damage);
                }
                if (debug) {
                    echo += '<u>(Strike: +' + frost;
                    if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
                    if (enhanced) echo += ' Enhance: +' + enhanced;
                    if (protect) echo += ' Barrier: -' + protect;
                    echo += ') = ' + frost_damage + ' damage</u><br>';
                    echo += debug_name(src_card) + ' breathes frost at ' + debug_name(target) + ' for ' + frost_damage + ' damage';
                    echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
                }
                if (shatter) {
                    iceshatter(target);
                }
            }
        },

        // Enfeeble (Hex)
        // - Can target specific faction
        // - Targets enemy assaults
        // - Can be evaded
        // - Can be enhanced
        enfeeble: function (src_card, skill) {

            var faction = skill['y'];

            var p = get_p(src_card);
            var o = get_o(src_card);

            var enfeeble = skill['x'];

            var all = skill['all'];

            var field_x_assaults = field[o]['assaults'];

            var targets = [];
            for (var key = 0, len = field_x_assaults.length; key < len; key++) {
                var target = field_x_assaults[key];
                if (target.isAlive()
                && target.isInFaction(faction)) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) return;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    enfeeble += enhanced;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];
                // Check Evade
                if (target['invisible']) {
                    target['invisible']--;
                    if (debug) echo += debug_name(src_card) + ' hexes ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                target['enfeebled'] += enfeeble;
                if (debug) echo += debug_name(src_card) + ' hexes ' + debug_name(target) + ' by ' + enfeeble + '<br>';
            }
        },

        // Weaken
        // - Can target specific faction
        // - Targets active_next_turn, unjammed, enemy assaults with attack > 0
        // - Can be evaded
        // - Can be enhanced
        weaken: function (src_card, skill) {

            var faction = skill['y'];

            var p = get_p(src_card);
            var o = get_o(src_card);

            var weaken = skill['x'];

            var all = skill['all'];

            var field_x_assaults = field[o]['assaults'];

            var targets = [];

            for (var key = 0, len = field_x_assaults.length; key < len; key++) {
                var target = field_x_assaults[key];
                if (!target.isAlive()) continue;
                if (!target.isActiveNextTurn()) continue;
                if (target.isUnjammed()
                && target.hasAttack()
                && target.isInFaction(faction)) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) return;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    weaken += enhanced;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];

                // Check Evade
                if (target['invisible']) {
                    target['invisible']--;
                    if (debug) echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                target.attack_weaken += weaken;
                var maxWeaken = target.permanentAttack();
                if (target.attack_weaken > maxWeaken) target.attack_weaken = maxWeaken;
                if (debug) {
                    if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                    echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' by ' + weaken + '<br>';
                }
            }
        },
    };

    var empowerSkills = {
        // Rally
        // - Can target specific faction
        // - Targets allied unjammed, active assaults
        // - Can be enhanced
        rally: function (src_card, skill) {

            var faction = skill['y'];

            var p = get_p(src_card);

            var rally = skill['x'];
            var all = skill['all'];

            var field_p_assaults = field[p]['assaults'];

            var targets = [];
            for (var key = 0, len = field_p_assaults.length; key < len; key++) {
                var target = field_p_assaults[key];
                if (target.isActive() && target.isInFaction(faction) && target.isUnjammed()) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) return;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    rally += enhanced;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {

                var target = field_p_assaults[targets[key]];

                var rally_amt = rally;
                if (!rally_amt) {
                    var mult = skill.mult;
                    rally_amt = Math.ceil(target.attack * mult);
                }

                target.attack_rally += rally_amt;
                if (debug) {
                    if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                    echo += debug_name(src_card) + ' empowers ' + debug_name(target) + ' by ' + rally_amt + '<br>';
                }
            }
        },

        // Legion
        // - Targets specific faction
        // - Targets allied adjacent unjammed, active assaults
        // - Can be enhanced?
        legion: function (src_card, skill) {

            var p = get_p(src_card);
            var field_p_assaults = field[p]['assaults'];

            var rally = skill['x'];
            var enhanced = getEnhancement(src_card, skill.id);
            if (enhanced) rally += enhanced;

            var faction = skill['y'];

            var target_key = src_card['key'] - 1;
            var len = target_key + 2;
            if (target_key < 0) target_key += 2;

            while (target_key <= len) {
                // Check left
                var target = field_p_assaults[target_key];
                if (target && target.isActive() && target.isInFaction(faction)) {
                    target.attack_rally += rally;
                    if (debug) {
                        if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                        echo += debug_name(src_card) + ' activates legion and empowers ' + debug_name(target) + ' by ' + rally + '<br>';
                    }
                }
                target_key += 2;
            }
        },

        // Fervor
        // - Targets self for each adjacent unjammed, active assault in specific faction
        // - Can be enhanced?
        fervor: function (src_card, skill) {

            var p = get_p(src_card);
            var field_p_assaults = field[p]['assaults'];

            var rally = skill['x'];
            var enhanced = getEnhancement(src_card, skill.id);
            if (enhanced) rally += enhanced;

            var faction = skill['y'];

            var fervorAmount = 0;

            var target_key = src_card['key'] - 1;
            var len = target_key + 2;
            if (target_key < 0) target_key += 2;

            while (target_key <= len) {
                var target = field_p_assaults[target_key];
                if (target && target.isInFaction(faction)) {
                    fervorAmount += rally;
                }
                target_key += 2
            }

            if (fervorAmount) {
                src_card['attack_rally'] += fervorAmount;
                if (debug) {
                    if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                    echo += debug_name(src_card) + ' activates fervor for ' + fervorAmount + '<br>';
                }
            }
        },
    };

    // Activation Skills
    // - Must traverse through skills from top to bottom
    function activation_skills(src_card) {

        var skills = src_card.skill;

        for (var i = 0, len = skills.length; i < len; i++) {
            var skill = skills[i];

            if (skill.c) {
                if (skill.countdown) {
                    skill.countdown--;
                    continue;
                } else {
                    skill.countdown = skill.c - 1;
                }
            }

            // Delegate to skill function
            activationSkills[skill.id](src_card, skill);
        }
    };

    // Simulate one game
    function simulate() {
        simulating = true;
        damage_taken = 0;
        damage_dealt = 0;
        plays = [];

        // Shuffle decks
        if (getexactorder) {
            if (!getordered) {
                deck.player.shuffleHand = true;
            }
        } else {
            shuffle(deck.player.deck);
        }
        if (getexactorder2) {
            if (!getordered2) {
                deck.cpu.shuffleHand = true;
            }
        } else {
            shuffle(deck.cpu.deck);
        }

        setupField(field);

        if (getsiege) {
            var tower = makeUnitInfo(601 + parseInt(tower_type), parseInt(tower_level) - 1);
            var towerCard = get_card_apply_battlegrounds(tower);
            play_card(towerCard, 'cpu', true);
        }

        return performTurns(0);
    };
    
    function setupDecks() {
        doSetupDecks();
    }
    
    function doSetupDecks() {
        // Cache decks where possible
        // Load player deck
        if (getdeck) {
            cache_player_deck = hash_decode(getdeck);
        } else if (getcardlist) {
            cache_player_deck = load_deck_from_cardlist(getcardlist);
        } else {
            cache_player_deck = load_deck_from_cardlist();
        }
        cache_player_deck_cards = getDeckCards(cache_player_deck);

        totalDeckHealth = 0;
        totalDeckHealth += cache_player_deck_cards.commander.health;
        for (var i = 0; i < cache_player_deck_cards.deck.length; i++) {
            totalDeckHealth += cache_player_deck_cards.deck[i].health;
        }

        // Load enemy deck
        if (getdeck2) {
            cache_cpu_deck = hash_decode(getdeck2);
        } else if (getcardlist2) {
            cache_cpu_deck = load_deck_from_cardlist(getcardlist2);
        } else if (getmission) {
            cache_cpu_deck = load_deck_mission(getmission);
        } else if (getraid) {
            cache_cpu_deck = load_deck_raid(getraid, raidlevel);
        } else {
            cache_cpu_deck = load_deck_from_cardlist();
        }
        cache_cpu_deck_cards = getDeckCards(cache_cpu_deck);

        totalCpuDeckHealth = 0;
        totalCpuDeckHealth += cache_cpu_deck_cards.commander.health;
        for (var i = 0; i < cache_cpu_deck_cards.deck.length; i++) {
            totalCpuDeckHealth += cache_cpu_deck_cards.deck[i].health;
        }
    }

    function setupField(field) {
        // Initialize player Commander on the field
        var field_player = field.player;
        var field_player_commander = deck.player.commander;
        field_player.commander = field_player_commander;
        field_player_commander.owner = 'player';
        field_player_commander.health_left = field_player_commander.health;
        if (!field_player_commander.reusableSkills) field_player_commander.resetTimers();

        // Initialize cpu Commander on the field
        var field_cpu = field.cpu;
        var field_cpu_commander = deck.cpu.commander;
        field_cpu.commander = field_cpu_commander;
        field_cpu_commander.owner = 'cpu';
        field_cpu_commander.health_left = field_cpu_commander.health;
        if (!field_cpu_commander.reusableSkills) field_cpu_commander.resetTimers();
    }

    function performTurns(turn) {
        var done = performTurnsInner(turn);
        if (done && user_controlled) {
            debug_end();
        }
        return done;
    }

    function performTurnsInner(turn) {
        // Set up players
        var first_player, second_player;
        if (surge) {
            first_player = 'cpu';
            second_player = 'player';
        } else {
            first_player = 'player';
            second_player = 'cpu';
        }

        if (turn > 0) {
            // Retry this turn - don't bother doing setup all over again
            if (!performTurn(turn, field, first_player, second_player, false)) {
                // Try this turn again
                return false;
            }
            if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
                simulating = false;
                return true;
            }
        }

        turn++;
        // Continue simulation
        for (; turn <= max_turns + 1; turn++) {
            if (turn == max_turns + 1) {
                // Ended in draw
                simulating = false;
                return true;
            }

            var setup = setup_turn(turn, first_player, second_player, field);

            if (!performTurn(turn, field, first_player, second_player, true)) {
                // Try this turn again
                return false;
            } else if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
                simulating = false;
                return true;
            }
        }
        simulating = false;
        return true;
    }

    function performTurn(turn, field, first_player, second_player, redraw) {
        if (turn % 2) {
            var p = first_player;
            var o = second_player;
        } else {
            var p = second_player;
            var o = first_player;
        }

        if (!choose_card(p, turn, redraw)) {
            return false;
        } else {
            play_turn(p, o, field);
            return true;
        }
    }

    function setup_turn(turn, first_player, second_player, field) {
        simulation_turns = turn;

        if (user_controlled) choice = (auto_mode ? 0 : undefined);

        if (turn % 2) {
            var p = first_player;
        } else {
            var p = second_player;
        }

        if (debug) echo += '<u>Turn ' + turn + ' begins for ' + debug_name(field[p]['commander']) + '</u><br>';

        var field_p_assaults = field[p]['assaults'];
        // Count down timer on your field
        // Remove from your field: Enfeeble, Protect
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var current_assault = field_p_assaults[key];

            if (current_assault.timer > 0) {
                current_assault.timer--;
                if (debug) echo += debug_name(current_assault) + ' reduces its timer<br>';
            }

            current_assault.enfeebled = 0;
            current_assault.protected = 0;
            current_assault.barrier_ice = 0;
            current_assault.enhanced = 0;;
        }
    }

    function choose_card(p, turn, redraw) {

        var deck_p = deck[p];
        var deck_p_deck = deck_p.deck;
        var deck_p_ordered = deck_p['ordered'];

        // Deck not empty yet
        if (deck_p_deck[0]) {

            var card_picked = 0;

            if (deck_p_deck.length == 1) {
                // Play first card in hand
                card_picked = 0;
            } else if (user_controlled && p == 'player') {
                card_picked = chooseCardUserManually(p, deck_p_deck, deck_p_ordered, turn, redraw);
            } else if (deck_p_ordered) {
                card_picked = chooseCardOrdered(p, deck_p_deck, deck_p_ordered, turn, redraw);
            } else {
                // Play random card in hand
                var hand = deck_p_deck.slice(0, 3);
                if (p == 'player' || !smartAI) {
                    card_picked = chooseCardRandomly(p, deck_p_deck, deck_p_ordered, turn, redraw);
                } else {
                    card_picked = chooseCardByPoints(p, deck_p_deck, deck_p_ordered, turn, redraw);
                }
            }

            if (card_picked < 0) return false;

            // Remove from deck
            var key = card_picked;
            for (var len = deck_p_deck.length - 1; key < len; key++) {
                deck_p_deck[key] = deck_p_deck[key + 1];
            }
            deck_p_deck.length = key;
        }
        return true;
    };

    function chooseCardUserManually(p, shuffledDeck, orderedDeck, turn, redraw) {
        // Prepare 3-card hand
        var hand = shuffledDeck.slice(0, 3);
        var cardsInHand = [];
        var drawableHand = [];
        for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
            var card = hand[handIdx];
            var text = handIdx + ": " + card['name'];
            if (card.maxLevel > 1) text += '{' + card.level + '/' + card.maxLevel + '}';
            cardsInHand.push(text);
            drawableHand.push(card);
        }
        if (redraw) {
            outp(echo);
            CARD_GUI.draw_cards(field, drawableHand, performTurns, turn);
            scroll_to_end();
        }
        if (choice === undefined) {
            return -1;
        } else {
            var card_picked = choice;
            if (!card_picked) card_picked = 0;
            play_card(shuffledDeck[card_picked], p);
            return card_picked;
        }
    }

    function chooseCardOrdered(p, shuffledDeck, orderedDeck, redraw) {
        // Prepare 3-card hand
        var hand = shuffledDeck.slice(0, 3);

        // Play highest priority card
        var played = false;
        for (var orderIdx = 0, deck_len = orderedDeck.length; orderIdx < deck_len; orderIdx++) {
            var desiredCard = orderedDeck[orderIdx];

            // Get advanced priority
            var priority_id = desiredCard.priority;

            var samePriority = -1;
            var cardInHand
            for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
                cardInHand = hand[handIdx];
                var b_priority = cardInHand.priority;

                // If this is the exact card at this spot
                if (desiredCard == cardInHand) {
                    played = true;
                    break;
                }
                    // Compare advanced priority field
                else if (priority_id > 0) {
                    if (priority_id == b_priority) {
                        samePriority = handIdx;
                    }
                }
            }
            // If we didnt' find exact card, but found one of the same priority, pick that one
            if (!played && samePriority >= 0) {
                played = true;
                handIdx = samePriority;
                cardInHand = hand[handIdx];
            }
            // If we found the desired card, play it, otherwise move on to the next desired card
            if (played) {
                for (var len = orderedDeck.length - 1; orderIdx < len; orderIdx++) {
                    orderedDeck[orderIdx] = orderedDeck[orderIdx + 1];
                }
                orderedDeck.length = orderIdx;
                play_card(cardInHand, p);
                return handIdx;
            }
        }
        return -1;
    }

    function chooseCardRandomly(p, shuffledDeck, orderedDeck, redraw) {
        // Prepare 3-card hand
        var hand = shuffledDeck.slice(0, 3);

        var card_picked = (~~(Math.random() * hand.length));
        play_card(shuffledDeck[card_picked], p);
        return card_picked;
    }

    function chooseCardByPoints(p, shuffledDeck, orderedDeck, redraw) {
        // Prepare 3-card hand
        var hand = shuffledDeck.slice(0, 3);

        // Play card in hand with most upgrade points
        var best = [];
        var bestRank = 0;
        for (var i = 0; i < hand.length; i++) {
            var card = hand[i];
            var rank = getCardRanking(card);
            if (!bestRank) {
                bestRank = rank;
                best.push(i);
            } else if (rank == bestRank) {
                best.push(i);
            } else if (rank > bestRank) {
                bestRank = rank;
                best = [i];
            }
        }
        var card_picked = (best[~~(Math.random() * best.length)]);
        play_card(shuffledDeck[card_picked], p);
        return card_picked;
    }

    function getCardRanking(card) {
        var cardID = card.id.toString();
        // Each rarity level is worth 6 points
        var rarity = parseInt(card.rarity) * 6;
        // Each fusion is worth half of a rarity
        var fusion = (cardID.length > 4 ? parseInt(cardID[0]) : 0) * 3;
        // Subtract a point for every missing upgrade level
        var level = parseInt(card.level) - parseInt(card.maxLevel);

        var ranking = rarity + fusion + level;

        return ranking;
    }

    function play_turn(p, o, field) {

        var field_p = field[p];
        var field_p_commander = field_p['commander'];
        var field_p_assaults = field_p['assaults'];

        var field_o = field[o];
        var field_o_commander = field_o['commander'];
        var field_o_assaults = field_o['assaults'];

        // Activate battleground effects
        for (var i = 0; i < battlegrounds.onTurn.length; i++) {
            var battleground = battlegrounds.onTurn[i];
            if (battleground.enemy_only && p != 'cpu') continue;
            battleground.owner = p;
            doEmpower(battleground);
            activation_skills(battleground);
        }

        // Commander
        // - all activation skills
        activation_skills(field_p_commander);

        // Reset invisibility count after enhance has had a chance to fire
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var current_assault = field_p_assaults[key];
            if (current_assault.evade) {
                current_assault.invisible = current_assault.evade;
                var enhanced = getEnhancement(current_assault, 'evade');
                if (enhanced) {
                    current_assault.invisible += enhanced;
                }
            }
        }

        // Units
        // - empower skills
        empower_skills(field_p);

        // Assaults
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {

            var current_assault = field_p_assaults[key];

            // Check Timer
            if (!current_assault.isActive()) {
                continue;
            }

            // Check jammed ("frozen")
            if (current_assault['jammed']) {
                doCountDowns(current_assault);  // Still countdown any skills with timers
                if (debug) echo += debug_name(current_assault) + ' is frozen and cannot attack<br>';
                continue;
            }

            // Dual-strike does not activate if unit has 0 attack
            var activations = 1;
            var dualStrike = current_assault.flurry;
            if (dualStrike && current_assault.hasAttack()) {
                if (dualStrike.countdown) {
                    dualStrike.countdown--;
                } else if (current_assault.hasAttack()) {
                    dualStrike.countdown = dualStrike.c - 1;
                    activations++;
                    if (debug) echo += debug_name(current_assault) + ' activates dualstrike<br>';
                }
            }

            for (; activations > 0; activations--) {

                // Activation skills
                activation_skills(current_assault);

                // Check attack
                // - check rally and weaken
                if (!current_assault.hasAttack()) {
                    if (debug && current_assault['attack_weaken']) echo += debug_name(current_assault) + ' is weakened and cannot attack<br>';
                    continue;
                }

                doAttack(current_assault, field_o_assaults, field_o_commander);

                // WINNING CONDITION
                if (!field_o_commander.isAlive() || !field_p_commander.isAlive()) {
                    return;
                }

                // If died from counter, make sure dualstrike doesn't do make it swing again!
                if (!current_assault.isAlive()) {
                    // This assault is already dead and can't do anything!
                    break;
                }

            } // -- END ACTIVATIONS --

            // -- END ATTACK SEQUENCE --
        }
        // End of Assaults

        processDOTs(field_p_assaults);

        // Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
        remove_dead();

        field_p_assaults = field_p['assaults'];

        // Remove from your field: Chaos, Jam, Enfeeble, Rally, Weaken, Enhance
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var current_assault = field_p_assaults[key];

            current_assault.jammed = false;
            current_assault.enfeebled = 0;
            current_assault.attack_rally = 0;
            current_assault.attack_weaken = 0;
        }

        //debug_dump_field(field);
        if (debug) echo += '<u>Turn ' + turn + ' ends</u><br><br><hr><br>';
    };

    function doCountDowns(unit) {
        doSkillCountDowns(unit.skill);
        doSkillCountDowns(unit.empowerSkills);

        var dualStrike = unit.flurry;
        if (dualStrike && dualStrike.countdown) dualStrike.countdown--;
    }
    
    function doSkillCountDowns(skills) {
        for (var i = 0, len = skills.length; i < len; i++) {
            var skill = skills[i];
            if (skill.countdown) {
                if (skill.countdown) {
                    skill.countdown--;
                }
            }
        }
    }

    function processDOTs(field_p_assaults) {
        // Poison/Scorch damage
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var current_assault = field_p_assaults[key];

            var amount = current_assault['poisoned'];
            if (amount) {
                do_damage(current_assault, amount);
                if (debug) {
                    echo += debug_name(current_assault) + ' takes ' + amount + ' poison damage';
                    echo += (!current_assault.isAlive() ? ' and it dies' : '') + '<br>';
                }
            }

            var scorch = current_assault['scorched'];
            if (scorch) {
                amount = scorch['amount'];
                do_damage(current_assault, amount);
                if (debug) {
                    echo += debug_name(current_assault) + ' takes ' + amount + ' scorch damage';
                    echo += (!current_assault.isAlive() ? ' and it dies' : '') + '<br>';
                }
                if (scorch['timer'] > 1) {
                    scorch['timer']--;
                } else {
                    current_assault['scorched'] = 0;
                }
            }
        }
    };

    function doAttack(current_assault, field_o_assaults, field_o_commander) {

        // -- START ATTACK SEQUENCE --
        var target = field_o_assaults[current_assault.key];
        if (!target || !target.isAlive()) target = field_o_commander;

        // -- CALCULATE DAMAGE --
        var damage = current_assault.adjustedAttack(); // Get base damage + rally/weaken

        // Enfeeble
        var enfeeble = target['enfeebled'];
        damage += enfeeble;

        if (debug) {
            echo += '<u>(Attack: +' + current_assault.attack;
            if (current_assault.attack_rally) echo += ' Rally: +' + current_assault.attack_rally;
            if (current_assault.attack_berserk) echo += ' Berserk: +' + current_assault.attack_berserk;
            if (current_assault.attack_weaken) echo += ' Weaken: -' + current_assault.attack_weaken;
            if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
        }

        // Pierce
        // var pierce = current_assault['skill']['pierce'];
        var pierce = current_assault.pierce;
        if (pierce) {
            var enhanced = getEnhancement(current_assault, 'pierce');
            if (enhanced) {
                pierce += enhanced;
            }
        } else {
            pierce = 0;
        }

        // Damage reduction
        var protect = target.protected;
        var shatter = false;
        var armor = target.armored;
        if (armor) {
            var enhanced = getEnhancement(target, 'armored');
            if (enhanced) {
                armor += enhanced;
            }
        }

        // Barrier is applied BEFORE Armor
        if (protect) {
            if (debug) {
                echo += ' Barrier: -' + protect;
            }
            // Remove pierce from Barrier
            if (pierce) {
                if (pierce >= protect) {
                    if (debug) echo += ' Pierce: +' + protect;
                    pierce -= protect;
                    protect = 0;
                    target.protected = 0;
                } else {
                    if (debug) echo += ' Pierce: +' + pierce;
                    protect -= pierce;
                    target.protected -= pierce;
                    // Bug 27415 - Pierce does NOT reduce potential Iceshatter damage unless protect is completely removed by it
                    //target.barrier_ice -= pierce;
                    pierce = 0;
                }
            }
            if (protect) {
                if (damage >= protect) {
                    shatter = target.barrier_ice;
                    damage -= protect;
                    target.protected = 0;
                } else {
                    target.protected -= damage;
                    damage = 0;
                }
            }
        }
        if (armor) {
            if (debug) {
                echo += ' Armor: -' + armor;
            }
            // Remove pierce from Armor
            if (pierce) {
                if (pierce > armor) {
                    if (debug) echo += ' Pierce: +' + armor;
                    armor = 0;
                } else {
                    if (debug) echo += ' Pierce: +' + pierce;
                    armor -= pierce;
                }
            }
            damage -= armor;
        }

        if (damage < 0) damage = 0;

        if (debug) echo += ') = ' + damage + ' damage</u><br>';

        // -- END OF CALCULATE DAMAGE --

        // Deal damage to target
        do_damage(target, damage);

        if (debug) {
            echo += debug_name(current_assault) + ' attacks ' + debug_name(target) + ' for ' + damage + ' damage';
            echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
        }

        // WINNING CONDITION
        if (!field_o_commander.isAlive()) {
            return;
        }

        // Poison
        // - Target must have taken damage
        // - Target must be an assault
        // - Target must not be already poisoned of that level
        if (damage > 0 && target.isAssault() && current_assault.poison && target.isAlive()) {
            var poison = current_assault.poison;
            poison += getEnhancement(current_assault, 'poison');
            if (poison > target['poisoned']) {
                target['poisoned'] = poison;
                if (debug) echo += debug_name(current_assault) + ' inflicts poison(' + poison + ') on ' + debug_name(target) + '<br>';
            }
        }

        if (shatter) {
            iceshatter(target);
        }

        if (damage > 0) {
            // Leech
            // - Must have done some damage to an assault unit
            // - Cannot leech more than damage dealt
            // - Cannot leech more health than damage sustained
            // - Leecher must not be already dead
            // - Leecher must not be at full health
            // - Increases attack too during Invigorate battleground effect
            if (current_assault.leech && target.isAssault() && current_assault.isAlive() && current_assault.isDamaged()) {

                var leech_health = current_assault.leech;
                leech_health += getEnhancement(current_assault, 'leech');
                leech_health = Math.min(leech_health, damage);
                var healthMissing = current_assault.health - current_assault.health_left;
                if (leech_health >= healthMissing) {
                    leech_health = healthMissing;
                }

                current_assault.health_left += leech_health;
                if (debug) echo += debug_name(current_assault) + ' siphons ' + leech_health + ' health<br>';
            }

            // Counter
            // - Target must have received some amount of damage
            // - Attacker must not be already dead
            if (target.counter) {

                var counter_damage = 0 + target.counter;
                var enhanced = getEnhancement(target, 'counter');
                if (enhanced) {
                    counter_damage += enhanced;
                }

                // Protect
                var protect = 0;
                if (current_assault['protected']) protect = current_assault['protected'];
                if (counter_damage >= protect) {
                    current_assault['protected'] = 0;
                    counter_damage -= protect;
                } else {
                    current_assault['protected'] -= counter_damage;
                    counter_damage = 0;
                }

                if (debug) {
                    echo += '<u>(Counter: +' + target.counter;
                    if (enhanced) echo += ' Enhance: +' + enhanced;
                    if (protect) echo += ' Barrier: -' + protect;
                    echo += ') = ' + counter_damage + ' damage</u><br>';
                }

                do_damage(current_assault, counter_damage);

                if (debug) {
                    echo += debug_name(current_assault) + ' takes ' + counter_damage + ' vengeance damage';
                    echo += (!current_assault.isAlive() ? ' and it dies' : '') + '<br>';
                }
            }

            // Berserk
            // - Must have done some damage to an assault unit
            if (damage > 0 && current_assault.berserk && current_assault.isAlive()) {

                var berserk = current_assault.berserk;
                berserk += getEnhancement(current_assault, 'berserk');

                current_assault.attack_berserk += berserk;
                if (debug) echo += debug_name(current_assault) + ' activates berserk and gains ' + berserk + ' attack<br>';
            }
        }

        // -- CHECK STATUS INFLICTION --

        // Scorch
        // - Attacker must not have died to Vengeance
        // - Target must be an assault
        if (target.isAssault() && current_assault.burn && target.isAlive() && current_assault.isAlive()) {
            var scorch = current_assault.burn;
            scorch += getEnhancement(current_assault, 'burn');
            if (!target['scorched']) {
                target['scorched'] = { 'amount': scorch, 'timer': 2 };
            } else {
                target['scorched']['amount'] += scorch;
                target['scorched']['timer'] = 2;
            }
            if (debug) echo += debug_name(current_assault) + ' inflicts scorch(' + scorch + ') on ' + debug_name(target) + '<br>';
        }

        // -- END OF STATUS INFLICTION --
    };

    function updateStats(result, points) {
        var hash = hash_encode({ commander: cache_player_deck.commander, deck: plays }, false);
        var order_stats = orders[hash];
        if (!order_stats) {
            order_stats = {
                wins: 0,
                losses: 0,
                draws: 0,
                games: 0,
                points: 0
            }
            orders[hash] = order_stats;
        }
        order_stats.games++;

        var result;
        if (result == 'draw') {
            order_stats.draws++;
        } else if (result) {
            order_stats.wins++;
        } else {
            order_stats.losses++;
        }
        order_stats.points += points;
    };
    
    function CalculatePoints() {
        var uids = field.uids;
        if (uids) {
            for (var i in uids) {
                var assault = uids[i];
                if (assault.owner == 'player') {
                    damage_taken += (assault.health - assault.health_left);
                } else {
                    damage_dealt += (assault.health - assault.health_left);
                }
            }
        }
        var assaults = field.player.assaults;
        for (var i = 0, len = assaults.length; i < len; i++) {
            var assault = assaults[i];
            if (uids && uids[assault.uid]) continue;    // Already counted this card
            damage_taken += (assault.health - assault.health_left);
        }
        var assaults = field.cpu.assaults;
        for (var i = 0, len = assaults.length; i < len; i++) {
            var assault = assaults[i];
            if (uids && uids[assault.uid]) continue;    // Already counted this card
            damage_dealt += (assault.health - assault.health_left);
        }
        var commander = field.cpu.commander;
        damage_dealt += (commander.health - commander.health_left);
        var commander = field.player.commander;
        damage_taken += (commander.health - commander.health_left);
        if (getraid) {
            if (field.cpu.commander.isAlive()) {
                var points = Math.floor((damage_dealt / totalCpuDeckHealth) / 0.02);
                points = Math.max(5, points);
            } else {
                var points = 200 - Math.floor((damage_taken / totalDeckHealth) / 0.02);
            }
        } else {
            var points = (field.cpu.commander.isAlive() ? 25 : 130) - Math.floor((damage_taken / totalDeckHealth) / 0.05);
        }
        return points;
    }

    var deck = [];
    var field = [];
    var battlegrounds;
    var simulation_turns = 0;
    var simulating = false;
    var user_controlled = false;
    var turn = 0;
    var damage_taken = 0;
    var damage_dealt = 0;
    var plays = [];
    var totalDeckHealth = 0;
    var totalCpuDeckHealth = 0;

    // public functions
    SIMULATOR.simulate = simulate;
    SIMULATOR.updateStats = updateStats;
    SIMULATOR.CalculatePoints = CalculatePoints;
    // public variables
    Object.defineProperties(SIMULATOR, {
        "setupDecks": { 
            get: function() { 
                return setupDecks; 
            }, 
            set: function(value) {
                setupDecks = value;
            }
        },
        "setupField": { 
            get: function() { 
                return setupField; 
            }, 
            set: function(value) {
                setupField = value;
            }
        },
        "deck": { 
            get: function() { 
                return deck; 
            }, 
            set: function(value) {
                deck = value;
            }
        },
        "field": {
            get: function() { 
                return field;
            }, 
            set: function(value) {
                field = value;
            }
        },
        "battlegrounds": {
            get: function() { 
                return battlegrounds;
            }, 
            set: function(value) {
                battlegrounds = value;
            }
        },
        "battlegrounds": {
            get: function() { 
                return battlegrounds;
            }, 
            set: function(value) {
                battlegrounds = value;
            }
        },
        "simulation_turns": {
            get: function() { 
                return simulation_turns;
            }, 
            set: function(value) {
                simulation_turns = value;
            }
        },
        simulating: {
            get: function() { 
                return simulating;
            }, 
            set: function(value) {
                simulating = value;
            }
        },
        "totalDeckHealth": {
            get: function() { 
                return totalDeckHealth;
            }, 
            set: function(value) {
                totalDeckHealth = value;
            }
        },
        "totalCpuDeckHealth": {
            get: function() { 
                return totalCpuDeckHealth;
            }, 
            set: function(value) {
                totalCpuDeckHealth = value;
            }
        },
        user_controlled: {
            get: function() { 
                return user_controlled;
            }, 
            set: function(value) {
                user_controlled = value;
            }
        }
    });
})();