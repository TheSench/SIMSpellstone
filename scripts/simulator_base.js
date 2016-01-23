"use strict";

if (simulator_thread) {

    //50% proc function
    var roll_proc = function () {
        return Math.round(Math.random() * 1) == 1;
    };

    // Play card
    var play_card = function (card, p, quiet) {
        var field_p_assaults = field[p]['assaults'];

        // Store plays
        if (trackStats && p == 'player') {
            plays.push(makeUnitInfo(card.id, card.level));
        }

        // Not a valid card
        if (!card.id) return 0;

        var newKey = field_p_assaults.length;
        card.owner = p;
        card.timer = card.cost;
        card.health_left = card.health;
        // Setup status effects
        card.attack_rally = 0;
        card.attack_weaken = 0;
        card.attack_berserk = 0;
        card.poisoned = 0;
        card.scorched = 0;
        card.enfeebled = 0;
        card.protected = 0;
        card.barrier_ice = 0;
        card.augmented = 0;
        card.jammed = false;
        card.key = newKey;
        if (!card.reusableSkills) card.resetTimers();

        field_p_assaults[newKey] = card;

        if (debug && !quiet) echo += debug_name(field[p].commander) + ' plays ' + debug_name(card) + '<br>';
    };

    // Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
    var remove_dead = function () {
        remove_dead_cards('player');
        remove_dead_cards('cpu');
    };

    // Shift over to the left if there are any gaps.
    var remove_dead_cards = function (p) {
        var units = field[p].assaults
        // Find first dead unit (don't need to update the keys of any units before this one)
        for (var key = 0, len = units.length; key < len; key++) {
            var current_assault = units[key];
            // Starting at the first dead unit, start shifting.
            if (!current_assault.isAlive()) {
                if (debug) echo += debug_name(current_assault) + ' is removed from field<br>';
                var newkey = key;	// Store the new key value for the next alive unit
                for (key++; key < len; key++) {
                    current_assault = units[key];
                    // If this unit is dead, don't update newkey, we still need to fill that slot
                    if (!current_assault.isAlive()) {
                        if (debug) echo += debug_name(current_assault) + ' is removed from field<br>';
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
    var choose_random_target = function (targets) {
        return [targets[Math.floor(Math.random() * targets.length)]];
    };

    var get_p = function (card) {
        return card.owner;
    };

    var get_o = function (card) {
        if (card.owner == 'cpu') return 'player';
        if (card.owner == 'player') return 'cpu';
    };

    // Deal damage to card
    // and keep track of cards that have died this turn
    var do_damage = function (card, damage) {
        if (damage >= card.health_left) {
            card.health_left = 0;
        } else {
            card.health_left -= damage;
        }
    };

    var getAugment = function (card, s) {
        var augments = card['augmented'];
        if (augments && augments[s]) return augments[s];
        else return 0;
    };

    var iceshatter = function (src_card) {
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
    var empower_skills = function (field_p) {
        doEmpower(field_p.commander);
        var field_p_assaults = field_p.assaults;
        for (var unit_key = 0, unit_len = field_p_assaults.length; unit_key < unit_len; unit_key++) {
            var current_unit = field_p_assaults[unit_key];
            if (current_unit.empowerSkills.length && current_unit.isActive()) {
                doEmpower(current_unit);
            }
        }
    };

    var doEmpower = function (source_card) {

        var dualStrike = source_card.flurry && !source_card.flurry.countdown && source_card.hasAttack();
        if (debug && dualStrike) {
            // Let main attack loop deal with resetting timer
            echo += debug_name(source_card) + ' activates dualstrike<br>';
        }

        var skills = source_card.empowerSkills;
        for (var i = 0, len = skills.length; i < len; i++) {
            var skill = skills[i];
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
        // - Can be augmented
        protect_ice: function(src_card, skill) {
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
                var augment = 0;
            } else {
                targets = choose_random_target(targets);
                var augment = getAugment(src_card, skill.id);
                if (augment) {
                    protect += augment;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];

                target.protected += protect;
                if (ice) {
                    target.barrier_ice += protect;
                }
                if (debug) {
                    if (augment) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                    echo += debug_name(src_card) + ' barriers ' + debug_name(target) + ' by ' + protect + '<br>';
                }
            }
        },

        // Enhance
        // - Can target specific faction
        // - Targets allied, units
        // - Target must be active this turn (for activation skills only)
        // - Target must not be frozen (for activation skills only)
        // - Target must have specific "augmentable skill" ("all" versions aren't counted)
        enhance: function (src_card, skill) {

            var faction = skill['y'];

            var p = get_p(src_card);
            var o = get_o(src_card);

            var augment = skill['x'];
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
                var augments = target['augmented'];
                if (!augments) {
                    augments = {};
                    target['augmented'] = augments;
                }
                var augmented_skill = augments[s];
                if (augmented_skill) augmented_skill += augment;
                else augments[s] = augment;
                if (debug) echo += debug_name(src_card) + ' enhances ' + s + ' of ' + debug_name(target, false) + ' by ' + augment + '<br>';
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
                var augment = 0;
            } else {
                targets = choose_random_target(targets);
                var augment = getAugment(src_card, skill.id);
                if (augment) {
                    heal += augment;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];

                var heal_amt = heal;
                if (!heal_amt) {
                    var mult = skill.mult;
                    heal_amt = Math.floor(target.health * mult);
                }

                if (heal_amt > target['health'] - target['health_left']) heal_amt = target['health'] - target['health_left'];
                target['health_left'] += heal_amt;
                if (debug) {
                    if (augment) echo += '<u>(Enhance: +' + augment + ')</u><br>';
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
                var augment = 0;
            } else {
                targets = choose_random_target(targets);
                var augment = getAugment(src_card, skill.id);
                if (augment) {
                    strike += augment;
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
                if (augment) {
                    strike_damage += augment;
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
                    if (augment) echo += ' Enhance: +' + augment;
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
            var augment = getAugment(src_card, skill.id);
            if (augment) frost += augment;

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
                if (augment) {
                    frost_damage += augment;
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
                    if (augment) echo += ' Enhance: +' + augment;
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
        // - Can be augmented
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
                var augment = 0;
            } else {
                targets = choose_random_target(targets);
                var augment = getAugment(src_card, skill.id);
                if (augment) {
                    enfeeble += augment;
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
                var augment = 0;
            } else {
                targets = choose_random_target(targets);
                var augment = getAugment(src_card, skill.id);
                if (augment) {
                    weaken += augment;
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

                target['attack_weaken'] += weaken;
                if (debug) {
                    if (augment) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                    echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' by ' + weaken + '<br>';
                }
            }
        },
    };

    var empowerSkills = {
        // Rally
        // - Can target specific faction
        // - Targets allied unjammed, active assaults
        // - Can be augmented
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
                var augment = 0;
            } else {
                targets = choose_random_target(targets);
                var augment = getAugment(src_card, skill.id);
                if (augment) {
                    rally += augment;
                }
            }

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];
                target.attack_rally += rally;
                if (debug) {
                    if (augment) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                    echo += debug_name(src_card) + ' empowers ' + debug_name(target) + ' by ' + rally + '<br>';
                }
            }
        },

        // Legion
        // - Targets specific faction
        // - Targets allied adjacent unjammed, active assaults
        // - Can be augmented?
        legion: function (src_card, skill) {

            var p = get_p(src_card);
            var field_p_assaults = field[p]['assaults'];

            var rally = skill['x'];
            var augment = getAugment(src_card, skill.id);
            if (augment) rally += augment;

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
                        if (augment) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                        echo += debug_name(src_card) + ' activates legion and empowers ' + debug_name(target) + ' by ' + rally + '<br>';
                    }
                }
                target_key += 2;
            }
        },

        // Fervor
        // - Targets self for each adjacent unjammed, active assault in specific faction
        // - Can be augmented?
        fervor: function (src_card, skill) {

            var p = get_p(src_card);
            var field_p_assaults = field[p]['assaults'];

            var rally = skill['x'];
            var augment = getAugment(src_card, skill.id);
            if (augment) rally += augment;

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
                    if (augment) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                    echo += debug_name(src_card) + ' activates fervor for ' + fervorAmount + '<br>';
                }
            }
        },
    };

    // Activation Skills
    // - Must traverse through skills from top to bottom
    var activation_skills = function (src_card) {

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
    var simulate = function () {
        simulating = true;
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

        // Set up players
        var first_player = 'player';
        var second_player = 'cpu';
        if (surge) {
            first_player = 'cpu';
            second_player = 'player';
        }

        if (getsiege) {
            var tower = makeUnitInfo(601 + parseInt(tower_type), parseInt(tower_level)-1);
            var towerCard = get_card_apply_battlegrounds(tower);
            play_card(towerCard, 'cpu', true);
        }

        return performTurns(0);
    };

    var performTurns = function (turn) {
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

    var performTurn = function (turn, field, first_player, second_player, redraw) {
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

    var setup_turn = function (turn, first_player, second_player, field) {
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
            current_assault.augmented = 0;;
        }
    }

    var choose_card = function (p, turn, redraw) {
        
        var deck_p = deck[p];
        var deck_p_deck = deck_p.deck;
        var deck_p_ordered = deck_p['ordered'];

        // Deck not empty yet
        if (deck_p_deck[0]) {

            var card_picked = 0;

            if (user_controlled && p == 'player') {
                // Prepare 3-card hand
                var hand = deck_p_deck.slice(0, 3);
                var cardsInHand = [];
                var drawableHand = [];
                for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++)
                {
                    var card = hand[handIdx];
                    var text = handIdx + ": " + card['name'];
                    if (card.maxLevel > 1) text += '{' + card.level + '/' + card.maxLevel + '}';
                    cardsInHand.push(text);
                    drawableHand.push(card);
                }
                if (redraw) {
                    outp(echo);
                    draw_cards(drawableHand, performTurns, turn);
                    scroll_to_end();
                }
                if (choice === undefined) return false;
                card_picked = choice;
                if (!card_picked) card_picked = 0;
                play_card(deck_p_deck[card_picked], p);
            } else if (deck_p_ordered) {
                // Prepare 3-card hand
                var hand = deck_p_deck.slice(0, 3);

                // Play highest priority card
                var played = false;
                for (var orderIdx = 0, deck_len = deck_p_ordered.length; orderIdx < deck_len; orderIdx++) {
                    var desiredCard = deck_p_ordered[orderIdx];

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
                        for (var len = deck_p_ordered.length - 1; orderIdx < len; orderIdx++) {
                            deck_p_ordered[orderIdx] = deck_p_ordered[orderIdx + 1];
                        }
                        deck_p_ordered.length = orderIdx;
                        card_picked = handIdx;
                        play_card(cardInHand, p);
                        break;
                    }
                }
            } else {
                // Play first card in hand
                if (deck_p_deck.length > 1 && deck_p.shuffleHand) {
                    card_picked = Math.floor(Math.random() * deck_p_deck.slice(0, 3).length);
                }
                play_card(deck_p_deck[card_picked], p);
            }

            // Remove from deck
            var key = card_picked;
            for (var len = deck_p_deck.length - 1; key < len; key++) {
                deck_p_deck[key] = deck_p_deck[key + 1];
            }
            deck_p_deck.length = key;
        }
        return true;
    };

    var get_card_apply_battlegrounds = function (id) {
        return get_card_by_id(id, battlegrounds.onCreate);
    }

    var play_turn = function (p, o, field) {

        var field_p = field[p];
        var field_p_commander = field_p['commander'];
        var field_p_assaults = field_p['assaults'];

        var field_o = field[o];
        var field_o_commander = field_o['commander'];
        var field_o_assaults = field_o['assaults'];

        // Activate battleground effects
        for (var i = 0; i < battlegrounds.onTurn.length; i++) {
            var battleground = battlegrounds.onTurn[i];
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
            /*if (current_assault.skill.evade) {
                current_assault['invisible'] = current_assault.skill.evade.x;*/
            if (current_assault.evade) {
                current_assault.invisible = current_assault.evade;
                var augment = getAugment(current_assault, 'evade');
                if (augment) {
                    current_assault.invisible += augment;
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

                // WINNING CONDITION (in case of backfire or shock)
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

        // Remove from your field: Chaos, Jam, Enfeeble, Rally, Weaken, Augment
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var current_assault = field_p_assaults[key];

            current_assault.jammed = false;
            current_assault.enfeebled = 0;
            current_assault.attack_rally = 0;
            current_assault.attack_weaken = 0;
        }

        //debug_dump_field();
        if (debug) echo += '<u>Turn ' + turn + ' ends</u><br><br><hr><br>';
    };

    var processDOTs = function (field_p_assaults) {
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

    var doAttack = function (current_assault, field_o_assaults, field_o_commander) {

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
            var augment = getAugment(current_assault, 'pierce');
            if (augment) {
                pierce += augment;
            }
        } else {
            pierce = 0;
        }

        // Damage reduction
        var protect = target.protected;
        var shatter = false;
        var armor = target.armored; //0;
        if(armor) {
        /*if (target.skill.armored) {
            //armor = target.skill.armored.x;*/
            var augment = getAugment(target, 'armored');
            if (augment) {
                armor += augment;
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
                    //target.iceshatter -= pierce;
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
            poison += getAugment(current_assault, 'poison');
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
                leech_health += getAugment(current_assault, 'leech');
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
                var augment = getAugment(target, 'counter');
                if (augment) {
                    counter_damage += augment;
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
                    if (augment) echo += ' Enhance: +' + augment;
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
                berserk += getAugment(current_assault, 'berserk');

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
            scorch += getAugment(current_assault, 'burn');
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

    var updateStats = function (result) {
        var hash = hash_encode({ commander: cache_player_deck.commander, deck: plays }, false);
        var order_stats = orders[hash];
        if (!order_stats) {
            order_stats = {
                wins: 0,
                losses: 0,
                draws: 0,
                games: 0,
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
    };

    var deck = [];
    var field = [];
    var battlegrounds;
    var simulation_turns = 0;
    var time_start_batch = 0;
    var simulating = false;
    var turn = 0;
    var plays = [];
}
