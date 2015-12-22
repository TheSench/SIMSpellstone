"use strict";

if (simulator_thread) {

    //50% proc function
    var roll_proc = function () {
        return Math.round(Math.random() * 1) == 1;
    };

    // Get assault card by key
    // - Don't rely on array keys! Use ['key'] field instead!
    var get_assault_by_key = function (assaults, key) {
        for (var assault_key = 0, len = assaults.length; assault_key < len; assault_key++) {
            var assault = assaults[assault_key];
            if (assault && assault['key'] == key) {
                return assault;
            }
        }
        return 0;
    };

    // Play card
    var play_card = function (card, p, quiet) {
        var field_p_assaults = field[p]['assaults'];

        // Not a valid card
        if (!card.id) return 0;

        var newKey = field_p_assaults.length;
        card.owner = p;
        // Setup status effects
        card.attack_rally = 0;
        card.attack_weaken = 0;
        card.poisoned = 0;
        card.scorched = 0;
        card.enfeebled = 0;
        card.protected = 0;
        card.augmented = 0;
        card.jammed = false;
        card.key = newKey;

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
        var len = targets.length
        if (len == 0) return [];

        var target = targets[Math.floor(Math.random() * len)];

        if (!target) return [];

        return [target];
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

    // Augment
    // - Can target specific faction
    // - Targets allied unjammed, active assaults
    // - Target must be active this turn (for activation skills only)
    // - Target must not have specific "augmentable skill"
    // - Cannot be augmented
    var augment = function (src_card, skill) {
        if (skill['id'] != 'enhance') return;

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
            if (/*!target.isAlive() ||*/ !target.isUnjammed()) continue;
            if (!target.isInFaction(faction)) continue;
            if (require_active_turn && !target.isActive()) continue;
            if(target.hasSkill(s))
            {
                targets.push(target);
            }
        }

        // No Targets
        if (!targets.length) return;

        // Check All
        if (!all) {
            targets = choose_random_target(targets);
        }

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];
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
    };

    var getAugment = function (card, s) {
        var augments = card['augmented'];
        if (augments && augments[s]) return augments[s];
        else return 0;
    };

    // Enfeeble
    // - Can target specific faction
    // - Targets enemy assaults
    // - Can be evaded
    // - Can be augmented
    var enfeeble = function (src_card, skill) {
        if (skill['id'] != 'enfeeble') return;

        var faction = skill['y'];

        var p = get_p(src_card);
        var o = get_o(src_card);

        var enfeeble = skill['x'];
        var augment = getAugment(src_card, skill.id);
        if (augment && augment > 0) {
            enfeeble += augment;
        }

        var all = skill['all'];

        var field_x_assaults = field[o]['assaults'];

        var targets = [];
        for (var key = 0, len = field_x_assaults.length; key < len; key++) {
            var target = field_x_assaults[key];
            if (target.isAlive()
            && target.isInFaction(faction)) {
                targets.push(target);
            }
        }

        // No Targets
        if (!targets.length) return;

        // Check All
        if (!all) targets = choose_random_target(targets);

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];
            // Check Evade
            if (target['invisible']) {
                target['invisible']--;
                if (debug) echo += debug_name(src_card) + ' hexes ' + debug_name(target) + ' but it is invisible!<br>';
                continue;
            }

            target['enfeebled'] += enfeeble;
            if (debug) echo += debug_name(src_card) + ' hexes ' + debug_name(target) + ' by ' + enfeeble + '<br>';
        }
    };

    // Heal
    // - Can target specific faction
    // - Targets allied damaged assaults
    // - Can be augmented
    var heal = function (src_card, skill) {
        if (skill['id'] != 'heal') return;

        if (skill['coundown']) {
            skill['coundown']--;
            if (skill['coundown'] > 0) return;
            skill['coundown'] = skill['c'];
        }

        var faction = skill['y'];

        var p = get_p(src_card);
        var o = get_o(src_card);

        var heal = skill['x'];
        var augment = getAugment(src_card, skill.id);
        if (augment && augment > 0) {
            heal += augment;
        }
        var all = skill['all'];

        var field_p_assaults = field[p]['assaults'];

        var targets = [];
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var target = field_p_assaults[key];
            if (target.isAlive()
            && target.isDamaged()
            && target.isInFaction(faction)) {
                targets.push(target);
            }
        }

        // No Targets
        if (!targets.length) return;

        if (!all) targets = choose_random_target(targets);

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];

            var heal_amt = heal;
            if (!heal_amt) {
                var mult = skill.mult;
                heal_amt = Math.floor(target.health * mult);
            }

            if (heal_amt > target['health'] - target['health_left']) heal_amt = target['health'] - target['health_left'];
            target['health_left'] += heal_amt;
            if (debug) {
                if (augment && augment > 0) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                echo += debug_name(src_card) + ' heals ' + debug_name(target) + ' by ' + heal_amt + '<br>';
            }
        }
    };

    // Jam
    // - Has cooldown timer (only fires every x turns)
    // - Can target specific faction
    // - Targets active_next_turn, unjammed enemy assaults
    // - Can be evaded
    // - Ff evaded, cooldown timer is not reset (tries again next turn)
    var jam = function (src_card, skill) {
        if (skill['id'] != 'jam') return;

        if (skill['coundown']) {
            skill['coundown']--;
            if (skill['coundown'] > 0) return;
        }

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
                targets.push(target);
            }
        }

        // No Targets
        if (!targets.length) return;

        // Check All
        if (!all) targets = choose_random_target(targets);

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];
            // Check Evade
            if (target['invisible']) {
                target['invisible']--;
                if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(target) + ' but it is invisible!<br>';
                continue;
            }

            // If we got a valid target, reset the timer
            if (skill['c']) skill['coundown'] = skill['c'];

            target['jammed'] = true;
            if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(target) + '<br>';
        }
    };

    // Protect
    // - Can target specific faction
    // - Targets allied assaults
    // - Can be augmented
    var protect = function (src_card, skill) {
        if (skill['id'] != 'protect') return;

        var faction = skill['y'];

        var p = get_p(src_card);
        var o = get_o(src_card);

        var protect = skill['x'];
        var augment = getAugment(src_card, skill.id);
        if (augment && augment > 0) {
            protect += augment;
        }
        var all = skill['all'];

        var field_p_assaults = field[p]['assaults'];

        var targets = [];
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var target = field_p_assaults[key];
            if (target.isAlive()
            && target.isInFaction(faction)) {
                targets.push(target);
            }
        }

        // No Targets
        if (!targets.length) return;

        // Check All
        if (!all) {
            targets = choose_random_target(targets);
        }

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];

            target['protected'] += protect;
            // Bug 27344 - Damage capped at most recently applied Barrier 
            target['barrier_ice'] = protect;
            if (debug) {
                if (augment && augment > 0) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                echo += debug_name(src_card) + ' barriers ' + debug_name(target) + ' by ' + protect + '<br>';
            }
        }
    };

    // Strike
    // - Can target specific faction
    // - Targets enemy assaults
    // - Can be evaded
    // - Must calculate enfeeble/protect
    // - Can be augmented
    var strike = function (src_card, skill) {
        if (skill['id'] != 'strike') return;

        var faction = skill['y'];

        var o = get_o(src_card);

        var strike = skill['x'];
        var augment = getAugment(src_card, skill.id);

        var all = skill['all'];

        var field_x_assaults = field[o]['assaults'];

        var targets = [];
        for (var key = 0, len = field_x_assaults.length; key < len; key++) {
            var target = field_x_assaults[key];
            if (target.isAlive()
            && target.isInFaction(faction)) {
                targets.push(target);
            }
        }

        // No Targets
        if (!targets.length) return;

        // Check All
        if (!all) targets = choose_random_target(targets);

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];

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
            var shatter = 0;
            if (protect) {
                if (strike_damage >= protect) {
                    shatter = target['protected'];
                    target['protected'] = 0;
                }  else  {
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
                iceshatter(target, field[src_card.owner], shatter);
            }
        }
    };

    var iceshatter = function (src_card, field, amount) {
        if (amount) {
            // Bug 27344 - Damage capped at most recently applied Barrier 
            if (amount > src_card.barrier_ice) amount = src_card.barrier_ice;
            var target = field.assaults[src_card.key];
            if (!target || !target.isAlive()) target = field.commander;

            do_damage(target, amount);

            if (debug) {
                echo += debug_name(src_card) + "'s barrier shatters and hits " + debug_name(target) + ' for ' + amount + ' damage';
                echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
            }
        }
    }

    // Weaken
    // - Can target specific faction
    // - Targets active_next_turn, unjammed, enemy assaults with attack > 0
    // - Can be evaded
    // - Can be augmented
    var weaken = function (src_card, skill) {
        if (skill['id'] != 'weaken') return;

        var faction = skill['y'];

        var p = get_p(src_card);
        var o = get_o(src_card);

        var weaken = skill['x'];
        var augment = getAugment(src_card, skill.id);
        if (augment && augment > 0) {
            weaken += augment;
        }

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
                targets.push(target);
            }
        }

        // No Targets
        if (!targets.length) return;

        // Check All
        if (!all) targets = choose_random_target(targets);

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];

            // Check Evade
            if (target['invisible']) {
                target['invisible']--;
                if (debug) echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' but it is invisible!<br>';
                continue;
            }

            target['attack_weaken'] += weaken;
            if (debug) {
                if (augment && augment > 0) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' by ' + weaken + '<br>';
            }
        }
    };

    // Empower, Legion, and Fervor all activate at the beginning of the turn, after commander
    var empower_skills = function (field_p) {
        doEmpower(field_p.commander);
        var field_p_assaults = field_p.assaults;
        for (var unit_key = 0, unit_len = field_p_assaults.length; unit_key < unit_len; unit_key++) {
            var current_unit = field_p_assaults[unit_key];
            if (current_unit.isActive()) {
                doEmpower(current_unit);
            }
        }
    };

    var doEmpower = function (source_card) {
        var skills = source_card.empowerSkills;
        for (var key in skills) {
            var skill = skills[key];
            var empowerSkill;
            switch (skill.id) {
                case 'rally':
                    empowerSkill = rally;
                    break;
                case 'legion':
                    empowerSkill = legion;
                    break;
                case 'fervor':
                    empowerSkill = fervor;
                    break;
            }
            if (empowerSkill) {
                var dualStrike = skills.flurry;
                if (dualStrike && source_card.hasAttack()) {
                    if (!dualStrike.coundown) {
                        // Let main attack loop deal with resetting timer
                        if (debug) echo += debug_name(source_card) + ' activates dualstrike<br>';
                        empowerSkill(source_card, skill);
                    }
                }
                empowerSkill(source_card, skill);
            }
        }
    }

    // Rally
    // - Can target specific faction
    // - Targets allied unjammed, active assaults
    // - Can be augmented
    var rally = function (src_card, skill) {
        if (skill['id'] != 'rally') return;

        var faction = skill['y'];

        var p = get_p(src_card);
        var o = get_o(src_card);

        var rally = skill['x'];
        var augment = getAugment(src_card, skill.id);
        if (augment && augment > 0) {
            rally += augment;
        }
        var all = skill['all'];

        var field_p_assaults = field[p]['assaults'];

        var targets = [];
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var target = field_p_assaults[key];
            if (/*target.isAlive() &&*/ target.isActive() && target.isUnjammed() && target.isInFaction(faction)) {
                targets.push(target);
            }
        }

        // No Targets
        if (!targets.length) return;

        // Check All
        if (!all) {
            targets = choose_random_target(targets);
        }

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];
            if (!target) return;

            target['attack_rally'] += rally;
            if (debug) {
                if (augment && augment > 0) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                echo += debug_name(src_card) + ' empowers ' + debug_name(target) + ' by ' + rally + '<br>';
            }
        }
    };

    // Legion
    // - Targets specific faction
    // - Targets allied adjacent unjammed, active assaults
    // - Can be augmented?
    var legion = function (src_card, skill) {

        if (skill['id'] != 'legion') return;

        var p = get_p(src_card);
        var field_p_assaults = field[p]['assaults'];

        var rally = skill['x'];
        var augment = getAugment(src_card, skill.id);
        if (augment && augment > 0) {
            rally += augment;
        }
        var faction = skill['y'];

        var src_position = src_card['key'];
        var targets = [];
        if (src_position > 0) {
            // Check left
            var target = get_assault_by_key(field_p_assaults, src_position - 1);
            if (target) targets.push(target);
        }
        // Check right
        var target = get_assault_by_key(field_p_assaults, src_position + 1);
        if (target) targets.push(target);

        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];
            if (/*target.isAlive() &&*/ target.isActive() && target.isInFaction(faction)) {
                target['attack_rally'] += rally;
                if (debug) {
                    if (augment && augment > 0) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                    echo += debug_name(src_card) + ' activates legion and empowers ' + debug_name(target) + ' by ' + rally + '<br>';
                }
            }
        }
    };

    // Fervor
    // - Targets self for each adjacent unjammed, active assault in specific faction
    // - Can be augmented?
    var fervor = function (src_card, skill) {

        if (skill['id'] != 'fervor') return;

        var p = get_p(src_card);
        var field_p_assaults = field[p]['assaults'];

        var rally = skill['x'];
        var augment = getAugment(src_card, skill.id);
        if (augment && augment > 0) {
            rally += augment;
        }
        var faction = skill['y'];

        var src_position = src_card['key'];
        var targets = [];
        if (src_position > 0) {
            // Check left
            var target = get_assault_by_key(field_p_assaults, src_position - 1);
            if (target) targets.push(target);
        }
        // Check right
        var target = get_assault_by_key(field_p_assaults, src_position + 1);
        if (target) targets.push(target);

        // No Targets
        if (!targets.length) return;

        var fervorAmount = 0;
        for (var key = 0, len = targets.length; key < len; key++) {
            var target = targets[key];
            if (/*target.isAlive() &&*/ target.isInFaction(faction)) {
                fervorAmount += rally;
            }
        }
        if (fervorAmount) {
            src_card['attack_rally'] += fervorAmount;
            if (debug) {
                if (augment && augment > 0) echo += '<u>(Enhance: +' + augment + ')</u><br>';
                echo += debug_name(src_card) + ' activates fervor for ' + fervorAmount + '<br>';
            }
        }
    };

    // Activation Skills
    // - Must traverse through skills from top to bottom
    var activation_skills = function (src_card) {

        var skills = src_card.skill;

        for (var key in skills) {
            var skill = skills[key];

            // Delegate to skill functions
            switch (skill.id) {
                case 'enhance':
                    augment(src_card, skill);
                    break;
                case 'enfeeble':
                    enfeeble(src_card, skill);
                    break;
                case 'heal':
                    heal(src_card, skill);
                    break;
                case 'jam':
                    jam(src_card, skill);
                    break;
                case 'protect':
                    protect(src_card, skill);
                    break;
                case 'strike':
                    strike(src_card, skill);
                    break;
                case 'weaken':
                    weaken(src_card, skill);
                    break;
            }
        }
    };

    // Simulate one game
    var simulate = function () {
        simulating = true;

        // Shuffle decks
        if (!getexactorder || !getordered) shuffle(deck['player']['deck']);
        if (!getexactorder2 || !getordered2) shuffle(deck['cpu']['deck']);

        // Initialize player Commander on the field
        var field_player = field['player'];
        var field_player_commander = get_card_by_id(deck['player']['commander']);
        field_player['commander'] = field_player_commander;
        field_player_commander.owner = 'player';
        field_player_commander['health_left'] = field_player_commander['health'];
        // Initialize cpu Commander on the field
        var field_cpu = field['cpu'];
        var field_cpu_commander = get_card_by_id(deck['cpu']['commander']);
        field_cpu['commander'] = field_cpu_commander;
        field_cpu_commander.owner = 'cpu';
        field_cpu_commander['health_left'] = field_cpu_commander['health'];

        // Set up players
        var first_player = 'player';
        var second_player = 'cpu';
        if (surge) {
            first_player = 'cpu';
            second_player = 'player';
        }

        if (getsiege) {
            var tower = { id: 601 + parseInt(tower_type), level: parseInt(tower_level)-1 };
            var towerCard = get_card_by_id(tower);
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
            if ((field.player.commander['health_left'] < 1) || (field.cpu.commander['health_left'] < 1)) {
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
            } else if ((field.player.commander['health_left'] < 1) || (field.cpu.commander['health_left'] < 1)) {
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
        var deck_p_deck = deck_p['deck'];
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
                    card = get_slim_card_by_id(card, true);
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
                play_card(get_card_by_id(deck_p_deck[card_picked]), p);
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
                        play_card(get_card_by_id(cardInHand), p);
                        break;
                    }
                }
            } else {
                // Play first card in hand
                play_card(get_card_by_id(deck_p_deck[0]), p);
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

    var play_turn = function (p, o, field) {

        var field_p = field[p];
        var field_p_commander = field_p['commander'];
        var field_p_assaults = field_p['assaults'];

        var field_o = field[o];
        var field_o_commander = field_o['commander'];
        var field_o_assaults = field_o['assaults'];

        // Activate battleground effects
        for (var key in battlegrounds) {
            var battleground = battlegrounds[key];
            battleground.owner = p;
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
            var dualStrike = current_assault['skill']['flurry'];
            if (dualStrike && current_assault.hasAttack()) {
                if (dualStrike['coundown']) {
                    dualStrike['coundown']--;
                } else if (current_assault.hasAttack()) {
                    dualStrike['coundown'] = dualStrike['c'] - 1;
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
                if ((field_o_commander['health_left'] < 1) || (field_p_commander['health_left'] < 1)) {
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

            current_assault['jammed'] = false;
            current_assault['enfeebled'] = 0;
            current_assault['attack_rally'] = 0;
            current_assault['attack_weaken'] = 0;
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
            if (current_assault.attack_weaken) echo += ' Weaken: -' + current_assault.attack_weaken;
            if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
        }

        // Pierce
        // var pierce = current_assault['skill']['pierce'];
        var pierce = current_assault.pierce;
        if (pierce) {
            var augment = getAugment(current_assault, 'pierce');
            if (augment && augment > 0) {
                pierce += augment;
            }
        } else {
            pierce = 0;
        }

        // Damage reduction
        var protect = target.protected;
        var shatter = 0;
        var armor = target.armored; //0;
        if(armor) {
        /*if (target.skill.armored) {
            //armor = target.skill.armored.x;*/
            var augment = getAugment(target, 'armored');
            if (augment && augment > 0) {
                armor += augment;
            }
        }

        // Bug 23216
        //-- Begin Bug
        if (protect) {
            if (debug) {
                echo += ' Barrier: -' + protect;
            }
            // Remove pierce from Barrier
            if (pierce) {
                if (pierce >= protect) {
                    if (debug) echo += ' Pierce: +' + protect;
                    protect = 0;
                    target.protected = 0;
                } else {
                    if (debug) echo += ' Pierce: +' + pierce;
                    protect -= pierce;
                    target.protected -= pierce;
                }
            }
            if (protect) {
                if (damage >= protect) {
                    shatter = protect;
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

        /*
        var totalReduction = armor + protect;
        if (totalReduction > 0) {
            if (debug) {
                if (protect) echo += ' Barrier: -' + protect;
                if (armor) echo += ' Armor: -' + armor;
            }
            // Remove pierce from total damage reduction
            if (pierce) {
                if (pierce > totalReduction) {
                    if (debug) echo += ' Pierce: +' + totalReduction;
                    totalReduction = 0;
                } else {
                    if (debug) echo += ' Pierce: +' + pierce;
                    totalReduction -= pierce;
                }
            }
            // Remove damaged protect (even if damage is blocked by armor)
            if (protect) {
                pierce += damage;
                if (pierce > protect) {
                    target.protected = 0;
                } else {
                    target.protected -= pierce;
                }
            }
            damage -= totalReduction;
        }
        */
        //-- End Bug

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
        if (field_o_commander['health_left'] < 1) {
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

        if (shatter > 0) {
            iceshatter(target, field[current_assault.owner], shatter);
        }

        // Leech
        // - Must have done some damage to an assault unit
        // - Cannot leech more than damage dealt
        // - Cannot leech more health than damage sustained
        // - Leecher must not be already dead
        // - Leecher must not be at full health
        // - Increases attack too during Invigorate battleground effect
        if (damage > 0 && target.isAssault() && current_assault['health_left'] > 0 &&
        current_assault['health_left'] < current_assault['health'] && current_assault['skill']['leech']) {

            var leech_health = current_assault['skill']['leech']['x'];
            leech_health += getAugment(current_assault, 'leech');
            if (leech_health > damage) leech_health = damage;
            if (leech_health > current_assault['health'] - current_assault['health_left']) leech_health = current_assault['health'] - current_assault['health_left'];

            current_assault['health_left'] += leech_health;
            if (debug) echo += debug_name(current_assault) + ' siphons ' + leech_health + ' health<br>';
        }

        // Counter
        // - Target must have received some amount of damage
        // - Attacker must not be already dead
        if (damage > 0 && target.counter /*target['skill']['counter']*/) {

            var counter_damage = 0 + target.counter;//target['skill']['counter']['x'];
            var augment = getAugment(target, 'counter');
            if (augment && augment > 0) {
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

            echo += '<u>(Counter: +' + target.counter;
            if (augment) echo += ' Enhance: +' + augment;
            if (protect) echo += ' Barrier: +' + protect;
            echo += ') = ' + counter_damage + ' damage</u><br>';

            do_damage(current_assault, counter_damage);

            if (debug) {
                echo += debug_name(current_assault) + ' takes ' + counter_damage + ' vengeance damage';
                echo += (!current_assault.isAlive() ? ' and it dies' : '') + '<br>';
            }
        }

        // -- CHECK STATUS INFLICTION --

        // Scorch
        // - Attacker must not have died to Vengeance
        // - Target must be an assault
        if (target.isAssault() && current_assault.burn && target.isAlive() && current_assault.isAlive()) {
            var scorch = current_assault.burn;
            scorch += getAugment(current_assault, 'poison');
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

    var deck = [];
    var number_of_summons = [];
    var field = [];
    var simulation_turns = 0;
    var time_start_batch = 0;
    var simulating = false;
}
