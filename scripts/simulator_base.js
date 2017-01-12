"use strict";

var SIMULATOR = {};
(function () {

    // Play card
    function play_card(card, p, quiet) {
        var field_p_assaults = field[p]['assaults'];

        // Not a valid card
        if (!card.id) return 0;

        var newKey = field_p_assaults.length;
        initializeCard(card, p, newKey);

        if (card.isAssault()) {
            field_p_assaults[newKey] = card;
        }

        if ((debug || play_debug) && !quiet) echo += debug_name(field[p].commander) + ' plays ' + debug_name(card) + '<br>';

        if (card.isTrap()) {
            doEarlyActivationSkills(card);
            activation_skills(card);
        } else {
            // Activate trap battlegrounds
            for (var i = 0; i < battlegrounds.onCardPlayed.length; i++) {
                var battleground = battlegrounds.onCardPlayed[i];
                if (battleground.enemy_only && p != 'cpu') continue;
                battleground.owner = p;
                var o = (p === 'player' ? 'cpu' : 'player');
                battleground.onCardPlayed(card, deck[p].deck, deck[o].deck);
            }
        }
        if (showAnimations) {
            drawField(field, null, null, turn);
        }
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
                if (debug) echo += debug_name(current_assault) + ' <strong>is removed from field</strong><br>';
                if (current_assault.owner == 'player') damage_taken += current_assault.health;
                else damage_dealt += current_assault.health;
                var newkey = key;	// Store the new key value for the next alive unit
                for (key++; key < len; key++) {
                    current_assault = units[key];
                    // If this unit is dead, don't update newkey, we still need to fill that slot
                    if (!current_assault.isAlive()) {
                        if (debug) echo += debug_name(current_assault) + ' <strong>is removed from field</strong><br>';
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
    function doEarlyActivations(field_p) {
        var field_p_assaults = field_p.assaults;
        for (var unit_key = 0, unit_len = field_p_assaults.length; unit_key < unit_len; unit_key++) {
            var current_unit = field_p_assaults[unit_key];

            if (current_unit.isActive() && current_unit.isUnjammed()) {

                // Check for Dualstrike
                var dualstrike = current_unit.flurry;
                if (dualstrike && dualstrike.countdown === 0) {
                    // Dual-strike does not activate if unit has 0 attack
                    if (current_unit.hasAttack()) {
                        dualstrike.countdown = dualstrike.c;
                        current_unit.dualstrike_triggered = true;
                    }
                }

                doEarlyActivationSkills(current_unit);
            }
        }
    };

    function doEarlyActivationSkills(source_card) {

        var skills = source_card.earlyActivationSkills;
        var len = skills.length;
        if (len == 0) return;

        var dualstrike = source_card.dualstrike_triggered;
        if (debug && dualstrike) {
            // var main attack loop deal with resetting timer
            echo += debug_name(source_card) + ' activates dualstrike<br>';
        }

        var activations = (dualstrike ? 2 : 1);
        for (var a = 0; a < activations; a++) {
            for (var i = 0; i < len; i++) {
                var skill = skills[i];
                if (!skill.countdown) {
                    var affected = earlyActivationSkills[skill.id](source_card, skill);
                    if (skill.c && affected > 0) {
                        skill.countdown = skill.c;
                    }

                    if (showAnimations) {
                        drawField(field, null, null, turn, source_card);
                    }
                }
            }
        }
    };

    var activationSkills = {

        // Protect (Barrier)
        // - Can target specific faction
        // - Targets allied assaults
        // - Can be enhanced
        protect_ice: function (src_card, skill) {
            return activationSkills.protect(src_card, skill, true);
        },
        protect_seafolk: function (src_card, skill) {
            return activationSkills.protect(src_card, skill);
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
            if (!targets.length) return 0;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(protect * -enhanced);
                    }
                    protect += enhanced;
                }
            }

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];

                // Check Nullify
                if (target.nullified) {
                    target.nullified--;
                    if (debug) echo += debug_name(src_card) + ' protects ' + debug_name(target) + ' but it is nullified!<br>';
                    continue;
                }

                affected++;
                
                var protect_amt = protect;
                if (!protect_amt) {
                    var mult = skill.mult;
                    if (!target.isActive()) {
                        mult += (skill.on_delay_mult || 0);
                    }
                    protect_amt = Math.ceil(target.health * mult);
                }

                target.protected += protect_amt;
                if (ice) {
                    target.barrier_ice += protect_amt;
                }
                if (debug) {
                    if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                    echo += debug_name(src_card) + ' barriers ' + debug_name(target) + ' by ' + protect_amt + '<br>';
                }
            }

            return affected;
        },

        // Heal
        // - Can target specific faction
        // - Targets allied damaged assaults
        // - Can be enhanced
        heal: function (src_card, skill) {

            var p = get_p(src_card);
            var o = get_o(src_card);

            var faction = skill.y;
            var heal = skill.x;
            var all = skill.all;

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
            if (!targets.length) return 0;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(heal * -enhanced);
                    }
                    heal += enhanced;
                }
            }

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];

                // Check Nullify
                if (target.nullified) {
                    target.nullified--;
                    if (debug) echo += debug_name(src_card) + ' heals ' + debug_name(target) + ' but it is nullified!<br>';
                    continue;
                }

                affected++;

                var heal_amt = heal;
                if (!heal_amt) {
                    var mult = skill.mult;
                    heal_amt = Math.ceil(target.health * mult);
                }

                if (heal_amt > target['health'] - target['health_left']) heal_amt = target['health'] - target['health_left'];
                target['health_left'] += heal_amt;
                if (debug) {
                    if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                    echo += debug_name(src_card) + ' heals ' + debug_name(target) + ' by ' + heal_amt + '<br>';
                }
            }

            return affected;
        },

        // Strike (Bolt)
        // - Can target specific faction
        // - Targets enemy assaults
        // - Can be evaded
        // - Must calculate enfeeble/protect
        // - Can be enhanced
        poisonstrike: function (src_card, skill, poison) {
            return activationSkills.strike(src_card, skill, true);
        },
        strike: function (src_card, skill, poison) {

            var o = get_o(src_card);

            var strike = skill.x
            var faction = skill.y;
            var all = skill.all;

            var field_x_assaults = field[o].assaults;

            var targets = [];
            for (var key = 0, len = field_x_assaults.length; key < len; key++) {
                var target = field_x_assaults[key];
                if (target.isAlive()
                && target.isInFaction(faction)) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) return 0;

            // Check All
            if (!all) {
                targets = choose_random_target(targets);
            }

            var enhanced = getEnhancement(src_card, skill.id);
            if (enhanced) {
                if (enhanced < 0) {
                    enhanced = Math.ceil(strike * -enhanced);
                }
                strike += enhanced;
            }

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];

                // Check Evade
                if (target.invisible) {
                    target.invisible--;
                    if (debug) echo += debug_name(src_card) + ' bolts ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                affected++;

                var strike_damage = strike;

                // Check Protect/Enfeeble
                var enfeeble = 0;
                if (target['enfeebled']) enfeeble = target['enfeebled'];
                var protect = 0;
                if (target['protected']) protect = target['protected'];

                if (enfeeble) {
                    strike_damage += enfeeble;
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

                var poisonDamage = 0;
                if (strike_damage < 0) {
                    strike_damage = 0;
                } else {
                    do_damage(target, strike_damage);
                    if (poison && target.isAlive()) {
                        if (strike > target['poisoned']) {
                            poisonDamage = strike;
                            target['poisoned'] = poisonDamage;
                        }
                    }
                }
                if (debug) {
                    echo += '<u>(Strike: +' + strike;
                    if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
                    if (enhanced) echo += ' Enhance: +' + enhanced;
                    if (protect) echo += ' Barrier: -' + protect;
                    echo += ') = ' + strike_damage + ' damage</u><br>';
                    echo += debug_name(src_card) + ' bolts ' + debug_name(target) + ' for ' + strike_damage + ' damage';
                    if (poisonDamage) echo += ' and inflicts poison(' + poisonDamage + ') on it';
                    echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
                }
                if (shatter) {
                    iceshatter(target);
                }
            }

            return affected;
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
                return 0;
            }

            // Check All
            if (!all) targets = choose_random_target(targets);

            var affected = 0;

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

                affected++;

                target.jammed = true;
                if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(target) + '<br>';
            }

            return affected;
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
            if (enhanced) {
                if (enhanced < 0) {
                    enhanced = Math.ceil(frost * -enhanced);
                }
                frost += enhanced;
            }

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
            if (!targets.length) return 0;

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];

                // Check Evade
                if (target['invisible']) {
                    target['invisible']--;
                    if (debug) echo += debug_name(src_card) + ' breathes frost at ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                affected++;

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
                    echo += '<u>(Frostbreath: +' + frost;
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

            return affected;
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
            if (!targets.length) return 0;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(enfeeble * -enhanced);
                    }
                    enfeeble += enhanced;
                }
            }

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];

                // Check Evade
                if (target['invisible']) {
                    target['invisible']--;
                    if (debug) echo += debug_name(src_card) + ' hexes ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                affected++;

                target['enfeebled'] += enfeeble;
                if (debug) echo += debug_name(src_card) + ' hexes ' + debug_name(target) + ' by ' + enfeeble + '<br>';
            }

            return affected;
        },

        // Weaken
        // - Can target specific faction
        // - Targets active_next_turn, unjammed, enemy assaults with attack > 0
        // - Can be evaded
        // - Can be enhanced
        weakenself: function (src_card, skill) {
            return activationSkills.weaken(src_card, skill, true);
        },
        weaken: function (src_card, skill, self) {

            var faction = skill['y'];

            if (self) {
                var o = get_p(src_card);
            } else {
                var o = get_o(src_card);
            }

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
            if (!targets.length) return 0;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(weaken * -enhanced);
                    }
                    weaken += enhanced;
                }
            }

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_x_assaults[targets[key]];

                // Check Evade
                if (target['invisible']) {
                    target['invisible']--;
                    if (debug) echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' but it is invisible!<br>';
                    continue;
                }

                affected++;

                target.attack_weaken += Math.min(weaken, target.adjustedAttack());
                if (debug) {
                    if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                    echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' by ' + weaken + '<br>';
                }
            }

            return affected;
        },
    };

    var earlyActivationSkills = {
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
            if (!targets.length) return 0;

            // Check All
            if (all) {
                var enhanced = 0;
            } else {
                targets = choose_random_target(targets);
                var enhanced = getEnhancement(src_card, skill.id);
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(rally * -enhanced);
                    }
                    rally += enhanced;
                }
            }

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {

                var target = field_p_assaults[targets[key]];

                // Check Nullify
                if (target.nullified) {
                    target.nullified--;
                    if (debug) echo += debug_name(src_card) + ' empowers ' + debug_name(target) + ' but it is nullified!<br>';
                    continue;
                }

                affected++;

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

            return affected;
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
            if (enhanced) {
                if (enhanced < 0) {
                    enhanced = Math.ceil(rally * -enhanced);
                }
                rally += enhanced;
            }

            var faction = skill['y'];

            var target_key = src_card['key'] - 1;
            var len = target_key + 2;
            if (target_key < 0) target_key += 2;

            var affected = 0;

            while (target_key <= len) {
                // Check left
                var target = field_p_assaults[target_key];
                if (target && target.isActive() && target.isInFaction(faction)) {
                    // Check Nullify
                    if (target.nullified) {
                        target.nullified--;
                        if (debug) echo += debug_name(src_card) + ' activates legion and empowers ' + debug_name(target) + ' but it is nullified!<br>';
                    } else {
                        affected++;
                        target.attack_rally += rally;
                        if (debug) {
                            if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
                            echo += debug_name(src_card) + ' activates legion and empowers ' + debug_name(target) + ' by ' + rally + '<br>';
                        }
                    }
                }
                target_key += 2;
            }

            return affected;
        },

        // Fervor
        // - Targets self for each adjacent unjammed, active assault in specific faction
        // - Can be enhanced?
        fervor: function (src_card, skill) {

            var p = get_p(src_card);
            var field_p_assaults = field[p]['assaults'];

            var rally = skill['x'];
            var enhanced = getEnhancement(src_card, skill.id);
            if (enhanced) {
                if (enhanced < 0) {
                    enhanced = Math.ceil(rally * -enhanced);
                }
                rally += enhanced;
            }

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
                return 1;
            } else {
                return 0;
            }
        },

        // Barrage (Barrage X => X Bolt 1)
        // - Can target specific faction
        // - Targets enemy assaults
        // - Can be evaded
        // - Must calculate enfeeble/protect
        // - Can be enhanced
        barrage: function (src_card, skill) {

            var o = get_o(src_card);

            var barrages = skill.x
            var faction = skill.y;
            var all = skill.all;

            var field_x_assaults = field[o].assaults;

            var enhanced = getEnhancement(src_card, skill.id);
            if (enhanced) {
                if (enhanced < 0) {
                    enhanced = Math.ceil(barrages * -enhanced);
                }
                barrages += enhanced;
            }
            for (var i = 0; i < barrages; i++) {
                var targets = [];
                for (var key = 0, len = field_x_assaults.length; key < len; key++) {
                    var target = field_x_assaults[key];
                    if (target.isAlive()
                    && target.isInFaction(faction)) {
                        targets.push(key);
                    }
                }

                // No Targets
                if (!targets.length) return 0;

                // Check All
                if (!all) {
                    targets = choose_random_target(targets);
                }

                var affected = 0;

                var strike = 1;
                for (var key = 0, len = targets.length; key < len; key++) {
                    var target = field_x_assaults[targets[key]];

                    // Check Evade
                    if (target.invisible) {
                        target.invisible--;
                        if (debug) echo += debug_name(src_card) + ' throws a bomb at ' + debug_name(target) + ' but it is invisible!<br>';
                        continue;
                    }

                    affected++;

                    var strike_damage = strike;

                    // Check Protect/Enfeeble
                    var enfeeble = 0;
                    if (target['enfeebled']) enfeeble = target['enfeebled'];
                    var protect = 0;
                    if (target['protected']) protect = target['protected'];

                    if (enfeeble) {
                        strike_damage += enfeeble;
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
                        echo += '<u>(Barrage: +1';
                        if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
                        if (enhanced) echo += ' Enhance: +' + enhanced;
                        if (protect) echo += ' Barrier: -' + protect;
                        echo += ') = ' + strike_damage + ' damage</u><br>';
                        echo += debug_name(src_card) + ' throws a bomb at ' + debug_name(target) + ' for ' + strike_damage + ' damage';
                        echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
                    }
                    if (shatter) {
                        iceshatter(target);
                    }
                }
            }

            return affected;
        },

        // Enhance
        // - Can target specific faction
        // - Targets allied, units
        // - Target must be active this turn (for activation skills only)
        // - Target must not be frozen (for activation skills only)
        // - Target must have specific "enhanceable skill"
        enhance: function (src_card, skill) {

            var faction = skill['y'];

            var p = get_p(src_card);
            var o = get_o(src_card);

            var x = skill.x;
            var faction = skill.y;
            var s = skill.s;
            var mult = skill.mult;
            var all = skill.all;

            var field_p_assaults = field[p]['assaults'];
            var require_active_turn = (s != 'counter' && s != 'counterburn' && s != 'armored' && s != 'evade');
            var targets = [];
            for (var key = 0, len = field_p_assaults.length; key < len; key++) {
                var target = field_p_assaults[key];
                if (!target.isUnjammed()) continue;
                if (!target.isInFaction(faction)) continue;
                if (require_active_turn && !target.isActive()) continue;
                if (target.hasSkill(s, 0) || target.hasSkill(s, 1)) {
                    targets.push(key);
                }
            }

            // No Targets
            if (!targets.length) {
                return 0;
            }

            // Check All
            if (!all) {
                targets = choose_random_target(targets);
            }

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];

                // Check Nullify
                if (target.nullified) {
                    target.nullified--;
                    if (debug) echo += debug_name(src_card) + ' enhances ' + debug_name(target) + ' but it is nullified!<br>';
                    continue;
                }

                affected++;

                var enhancements = target.enhanced;
                if (!enhancements) {
                    enhancements = {};
                    target.enhanced = enhancements;
                }
                if (x > 0) {
                    enhancements[s] = (enhancements[s] || 0) + x;
                    if (debug) echo += debug_name(src_card) + ' enhances ' + s + ' of ' + debug_name(target, false) + ' by ' + x + '<br>';
                } else if (mult > 0) {
                    // temporarily use negatives for multiplier
                    enhancements[s] = -mult;
                    if (debug) echo += debug_name(src_card) + ' enhances ' + s + ' of ' + debug_name(target, false) + ' by ' + (mult * 100) + '%<br>';
                }
            }

            return affected;
        },

        // Enhance
        // - Can target specific faction
        // - Targets allied, units
        // - Target must be active this turn (for activation skills only)
        // - Target must not be frozen (for activation skills only)
        // - Target must have specific "enhanceable skill" ("all" versions aren't counted)
        imbue: function (src_card, skill) {

            var faction = skill['y'];

            var p = get_p(src_card);
            var o = get_o(src_card);

            var x = skill['x'];
            var c = skill['c'];
            var s = skill['s'];
            var all = skill['all'];

            var field_p_assaults = field[p]['assaults'];
            var require_active_turn = (s != 'counter' && s != 'counterburn' && s != 'armored' && s != 'evade');
            var targets = [];
            for (var key = 0, len = field_p_assaults.length; key < len; key++) {
                var target = field_p_assaults[key];
                if (!target.isUnjammed()) continue;
                if (!target.isInFaction(faction)) continue;
                if (require_active_turn && !target.isActive()) continue;

                targets.push(key);
            }

            // No Targets
            if (!targets.length) {
                return 0;
            }

            var skill = {
                id: s,
                x: x
            }

            // Check All
            if (!all) {
                targets = choose_random_target(targets);
            }

            var affected = 0;

            for (var key = 0, len = targets.length; key < len; key++) {
                var target = field_p_assaults[targets[key]];

                // Check Nullify
                if (target.nullified) {
                    target.nullified--;
                    if (debug) echo += debug_name(src_card) + ' enhances ' + debug_name(target) + ' but it is nullified!<br>';
                    continue;
                }

                affected++;

                target.imbue(skill);
                if (debug) echo += debug_name(src_card) + ' imbues ' + debug_name(target, false) + ' with ' + debug_skill(skill) + '<br>';
            }

            return affected;
        },
    };

    // Activation Skills
    // - Must traverse through skills from top to bottom
    function activation_skills(src_card) {

        var skills = src_card.skill;

        for (var i = 0, len = skills.length; i < len; i++) {
            var skill = skills[i];

            if (skill.countdown) {
                continue;
            }

            // Delegate to skill function
            var affected = activationSkills[skill.id](src_card, skill);

            if (skill.c && affected > 0) {
                skill.countdown = skill.c;
            }
            
            if (showAnimations) {
                drawField(field, null, null, turn, src_card);
            }
        }
    };

    function initializeBattle() {

        SIMULATOR.simulation_turns = 0;
        
        // Set up empty decks
        var deck = {
            cpu: {
                deck: []
            },
            player: {
                deck: []
            }
        }

        SIMULATOR.deck = deck;

        // Set up empty field
        var field = {
            cpu: {
                assaults: []
            },
            player: {
                assaults: []
            }
        };
        SIMULATOR.field = field;

        // Load player deck
        if (cache_player_deck_cards) {
            deck['player'] = copy_deck(cache_player_deck_cards);
        }

        // Load enemy deck
        if (getmission && missionlevel > 1 && missionlevel < 7) {
            cache_cpu_deck = load_deck_mission(getmission, missionlevel);
            cache_cpu_deck_cards = getDeckCards(cache_cpu_deck);
        } else if (getraid) {
            cache_cpu_deck = load_deck_raid(getraid, raidlevel);
            cache_cpu_deck_cards = getDeckCards(cache_cpu_deck);
        }
        if (cache_cpu_deck_cards) {
            deck['cpu'] = copy_deck(cache_cpu_deck_cards);
        }

        // Set up deck order priority reference
        if (getordered && !getexactorder) deck.player.ordered = copy_card_list(deck.player.deck);
        if (getordered2 && !getexactorder2) deck.cpu.ordered = copy_card_list(deck.cpu.deck);

        deck.player.chooseCard = (user_controlled ? chooseCardUserManually  // User_controlled mode has the player choose a card manually
                                 : getordered ? chooseCardOrdered           // Ordered mode tries to pick the card closest to the specified ordering
                                 : chooseCardRandomly);                     // Player AI falls back on picking a random card

        deck.cpu.chooseCard =   (/*livePvP ? waitForOpponent                  // If this is "Live PvP" - wait for opponent to choose a card
                                : */getordered2 ? chooseCardOrdered           // Ordered mode tries to pick the card closest to the specified ordering
                                : pvpAI ? chooseCardByPoints                // PvP defenders have a special algorithm for determining which card to play
                                : getexactorder2 ? chooseCardRandomly       // If deck is not shuffled, but we're not playing "ordered mode", pick a random card from hand
                                : chooseFirstCard);                         // If none of the other options are true, this is the standard PvE AI and it just picks the first card in hand
    }

    // Simulate one game
    function simulate() {
        simulating = true;
        damage_taken = 0;
        damage_dealt = 0;
        plays = [];

        initializeBattle();

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
            var towerBGE = BATTLEGROUNDS[tower_type];
            var tower = towerBGE.effect[tower_level];
            if (tower) {
                tower = makeUnitInfo(tower.id, tower.level);
                var towerCard = get_card_apply_battlegrounds(tower);
                play_card(towerCard, 'cpu', true);
            }
        }

        return performTurns(0);
    };

    function setupDecks() {
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

        // Load enemy deck
        pvpAI = true;
        if (getdeck2) {
            cache_cpu_deck = hash_decode(getdeck2);
            if (getmission) pvpAI = false;
        } else if (getcardlist2) {
            cache_cpu_deck = load_deck_from_cardlist(getcardlist2);
        } else if (getmission) {
            cache_cpu_deck = load_deck_mission(getmission, missionlevel);
            pvpAI = false;    // PvE decks do not use "Smart AI"
        } else if (getraid) {
            cache_cpu_deck = load_deck_raid(getraid, raidlevel);
            pvpAI = false;    // PvE decks do not use "Smart AI"
        } else {
            cache_cpu_deck = load_deck_from_cardlist();
        }
        cache_cpu_deck_cards = getDeckCards(cache_cpu_deck);
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

    SIMULATOR.pause = false;

    function onCardChosen(turn, drawCards) {
        clearFrames();
        performTurns(turn, drawCards);
    }

    function performTurns(turn, drawCards) {
        if (SIMULATOR.pause) {
            SIMULATOR.pause = false;
            return false;
        }
        var done = performTurnsInner(turn, drawCards);
        if (done && user_controlled) {
            SIM_CONTROLLER.debug_end();
        }
        return done;
    }
    SIMULATOR.performTurns = performTurns;

    function performTurnsInner(turn, drawCards) {
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
            if (livePvP) {
                if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
                    simulating = false;
                    return true;
                }
            }
            // Retry this turn - don't bother doing setup all over again
            if (!performTurn(turn, field, first_player, second_player, drawCards)) {
                // Try this turn again
                return false;
            }
            if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
                simulating = false;
                return true;
            }
        } else if (!surge && SIMULATOR.sendBattleUpdate) {
            SIMULATOR.sendBattleUpdate(turn);
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
                if (debug) echo += '<u>Turn ' + turn + ' ends</u><br><br></div>';
                return true;
            }
        }
        simulating = false;
        return true;
    }

    function performTurn(turn, field, first_player, second_player, drawCards) {
        if (turn % 2) {
            var p = first_player;
            var o = second_player;
        } else {
            var p = second_player;
            var o = first_player;
        }

        closeDiv = false;
        if (!choose_card(p, turn, drawCards)) {
            return false;
        } else {
            play_turn(p, o, field, turn);
            return true;
        }
    }

    function setup_turn(turn, first_player, second_player, field) {
        simulation_turns = turn;

        choice = undefined;

        if (turn % 2) {
            var p = first_player;
            var o = second_player;
        } else {
            var p = second_player;
            var o = first_player;
        }

        if (debug) echo += '<div id="turn_"' + turn + ' class="turn-info"><hr/><br/><u>Turn ' + turn + ' begins for ' + debug_name(field[p]['commander']) + '</u><br>';

        var field_p = field[p];
        var field_o = field[o];
        var field_p_assaults = field_p.assaults;
        var field_o_assaults = field_o.assaults;

        // countdown any skills with timers
        doCountDowns(field_p.commander);

        // Count down timer on your field
        // Remove from your field: Enfeeble, Protect
        for (var i = 0, len = field_p_assaults.length; i < len; i++) {
            var current_assault = field_p_assaults[i];

            if (current_assault.timer > 0) {
                if (turn !== 3 || !tournament) {
                    current_assault.timer--;
                    if (debug) echo += debug_name(current_assault) + ' reduces its timer<br>';

                    // Check valor
                    if (current_assault.valor && current_assault.isActive()) {
                        var enemy = field_o_assaults[i];
                        if (enemy && current_assault.adjustedAttack() < enemy.adjustedAttack()) {
                            current_assault.attack_valor = current_assault.valor;
                            if (debug) echo += debug_name(current_assault) + ' activates valor, boosting its attack by ' + current_assault.valor + '<br/>';
                        } else if (debug) {
                            echo += debug_name(current_assault) + ' activates valor but ';
                            if (!enemy) {
                                echo += 'there is no opposing enemy.<br/>'
                            } else {
                                echo += 'enemy is not strong enough.<br/>'
                            }
                        }
                    }
                }
            }

            current_assault.enfeebled = 0;
            current_assault.protected = 0;
            current_assault.barrier_ice = 0;
            current_assault.enhanced = 0;
            current_assault.removeImbue();

            // countdown any skills with timers
            doCountDowns(current_assault);
        }
    }

    function choose_card(p, turn, drawCards) {

        var deck_p = deck[p];
        var deck_p_deck = deck_p.deck;
        var deck_p_ordered = deck_p['ordered'];
        var isOrdered = (p == 'player' ? getordered : getordered2);

        if (livePvP && p === 'cpu' && drawCards) {
            waitForOpponent(p, deck_p_deck, deck_p_ordered, turn, drawCards);
            return false;
        } else if (deck_p_deck[0]) {
            // Deck not empty yet
            SIMULATOR.waiting = false;
            var card_picked = 0;

            if (deck_p_deck.length == 1) {
                card_picked = chooseFirstCard(p, deck_p_deck, deck_p_ordered, turn, drawCards);
            } else {
                for (var i = 0; i < deck_p_deck.length; i++) {
                    var card = deck_p_deck[i];
                    if (card.trap) {
                        play_card(card.trap, p);
                        card.trap = false;
                    }
                    if (i === 2) break;
                }
                card_picked = deck_p.chooseCard(p, deck_p_deck, deck_p_ordered, turn, drawCards);
            }

            if (card_picked < 0) return false;

            play_card(deck_p_deck[card_picked], p);

            removeFromDeck(deck_p_deck, card_picked);
        }
        return true;
    };

    function removeFromDeck(deck, index) {
        var key = index;
        var len = deck.length - 1;
        while (key < len) {
            deck[key] = deck[++key];
        }
        deck.length = key;

    }

    function waitForOpponent(p, shuffledDeck, orderedDeck, turn, drawCards) {

        SIMULATOR.waiting = true;
        closeDiv = true;

        if (drawCards) {
            hideTable();
            outputTurns(echo);
            drawField(field, null, performTurns, turn);
            SIMULATOR.sendBattleUpdate(turn);
        }

        return -1;
    }
    SIMULATOR.waitForOpponent = waitForOpponent;

    function chooseCardUserManually(p, shuffledDeck, orderedDeck, turn, drawCards) {
        // Prepare 3-card hand
        var hand = shuffledDeck.slice(0, 3);
        closeDiv = true;
        var cardsInHand = [];
        var drawableHand = [];
        for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
            var card = hand[handIdx];
            var text = handIdx + ": " + card['name'];
            if (card.maxLevel > 1) text += '{' + card.level + '/' + card.maxLevel + '}';
            cardsInHand.push(text);
            drawableHand.push(card);
        }
        if (drawCards) {
            hideTable();
            outputTurns(echo);
            drawField(field, drawableHand, onCardChosen, turn);
        }
        if (choice === undefined) {
            return -1;
            
        } else {
            var card_picked = choice;
            if (!card_picked) card_picked = 0;
            return card_picked;
        }
    }

    function chooseCardOrdered(p, shuffledDeck, orderedDeck, turn, drawCards) {
        // If deck isn't shuffled, just play the first card
        if (typeof orderedDeck === "undefined") {
            return 0;
        }

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
                if (areEqual(desiredCard, cardInHand)) {
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
                return handIdx;
            }
        }
        return -1;
    }

    function chooseCardRandomly(p, shuffledDeck, orderedDeck, turn, drawCards) {
        // Prepare 3-card hand
        var hand = shuffledDeck.slice(0, 3);

        var card_picked = (~~(Math.random() * hand.length));
        return card_picked;
    }

    function chooseCardByPoints(p, shuffledDeck, orderedDeck, turn, drawCards) {
        // Prepare 3-card hand
        var hand = shuffledDeck.slice(0, 3);

        // Play card in hand with most upgrade points (first card is picked in the case of ties)
        var card_picked = -1;
        var bestRank = -1;
        for (var i = 0; i < hand.length; i++) {
            var card = hand[i];
            var rank = getCardRanking(card);
            if (rank > bestRank) {
                bestRank = rank;
                card_picked = i;
            }
        }
        return card_picked;
    }

    function chooseFirstCard(p, shuffledDeck, orderedDeck, turn, drawCards) {
        return 0;
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

    function play_turn(p, o, field, turn) {

        var field_p = field[p];
        var field_p_commander = field_p['commander'];
        var field_p_assaults = field_p['assaults'];

        var field_o = field[o];
        var field_o_commander = field_o['commander'];
        var field_o_assaults = field_o['assaults'];

        // Activate battleground effects
        for (var i = 0; i < battlegrounds.onTurn.length; i++) {
            var battleground = battlegrounds.onTurn[i];
            if (battleground.enemy_only && p !== 'cpu') continue;
            if (battleground.self_only && p !== 'player') continue;
            battleground.owner = p;
            doEarlyActivationSkills(battleground);
            activation_skills(battleground);
        }

        // Do Commander Early Activation Skills
        doEarlyActivationSkills(field_p.commander);
        
        // Reset invisibility count after enhance has had a chance to fire
        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var current_assault = field_p_assaults[key];
            if (current_assault.evade) {
                current_assault.invisible = current_assault.evade;
                var enhanced = getEnhancement(current_assault, 'evade');
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(current_assault.invisible * -enhanced);
                    }
                    current_assault.invisible += enhanced;
                }
            }
        }

        // Do Unit Early Activation Skills
        doEarlyActivations(field_p);

        // Commander
        // - activation skills after units do early activation skills
        activation_skills(field_p_commander);

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

            var activations = 1;
            if (current_assault.dualstrike_triggered) {
                activations++;
                if (debug) echo += debug_name(current_assault) + ' activates dualstrike<br>';
            }

            for (; activations > 0; activations--) {

                // Activation skills
                activation_skills(current_assault);

                // Check attack
                // - check rally and weaken
                if (!current_assault.hasAttack()) {
                    if (debug && current_assault.permanentAttack() > 0) echo += debug_name(current_assault) + ' is weakened and cannot attack<br>';
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

        // Remove from your field: Chaos, Jam, Enfeeble, Rally, Weaken, Enhance, Nullify
        // Process Scorch, Poison, and Corrosion
        processDOTs(field_p_assaults);

        // Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
        remove_dead();

        //debug_dump_field(field);
        if (debug) echo += '<u>Turn ' + turn + ' ends</u><br><br></div>';
    };

    function doCountDowns(unit) {
        doSkillCountDowns(unit, unit.skill);
        doSkillCountDowns(unit, unit.earlyActivationSkills);

        var dualStrike = unit.flurry;
        if (dualStrike && dualStrike.countdown) {
            dualStrike.countdown--;

            if (debug) {
                if (dualStrike.countdown) {
                    echo += debug_name(unit) + ' charges  dualstrike (ready in ' + dualStrike.countdown + ' turns)<br/>';
                } else {
                    echo += debug_name(unit) + ' readies dualstrike<br/>';
                }
            }
        }
    }

    function doSkillCountDowns(unit, skills) {
        for (var i = 0, len = skills.length; i < len; i++) {
            var skill = skills[i];
            if (skill.countdown) {
                skill.countdown--;
                if (debug) {
                    if (skill.countdown) {
                        echo += debug_name(unit) + ' charges ' + convertName(skill.id) + ' (ready in ' + skill.countdown + ' turns)<br/>';
                    } else {
                        echo += debug_name(unit) + ' readies ' + convertName(skill.id) + '<br/>';
                    }
                }
            }
        }
    }

    function processDOTs(field_p_assaults) {

        for (var key = 0, len = field_p_assaults.length; key < len; key++) {
            var current_assault = field_p_assaults[key];

            current_assault.jammed = false;
            current_assault.enfeebled = 0;
            current_assault.attack_rally = 0;
            current_assault.attack_weaken = 0;
            current_assault.nullified = 0;
            current_assault.dualstrike_triggered = false;

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


            // Corrosion
            var corroded = current_assault.corroded;
            if (corroded) {
                corroded.timer--;
                // TODO: Is this a bug in the game?
                if (corroded.timer < 0) {
                    current_assault.corroded = false;
                    current_assault.attack_corroded = 0;
                    if (debug) {
                        echo += debug_name(current_assault) + ' recovers from corrosion<br>';
                    }
                } else {
                    var corrosion = Math.min(current_assault.permanentAttack(), corroded.amount);
                    current_assault.attack_corroded = corrosion;
                    if (debug) {
                        echo += debug_name(current_assault) + ' loses ' + corrosion + ' attack to corrosion<br>';
                    }
                }
            }
        }
    };

    function doAttack(current_assault, field_o_assaults, field_o_commander) {

        // -- START ATTACK SEQUENCE --
        var target = field_o_assaults[current_assault.key];
        if (!target || !target.isAlive()) {
            target = field_o_commander;
        } else {
            // Check for taunt; if unit has taunt, attacks directed at it can't be "taunted" elsewhere
            var taunted = false;
            if (!target.taunt) {
                // Check left first, then right
                var adjacent = field_o_assaults[current_assault.key - 1];
                if (adjacent && adjacent.taunt) {
                    target = adjacent;
                    taunted = true;
                } else {
                    var adjacent = field_o_assaults[current_assault.key + 1];
                    if (adjacent && adjacent.taunt) {
                        target = adjacent;
                        taunted = true;
                    }
                }
            }
            if (taunted && debug) echo += debug_name(target) + ' taunts ' + debug_name(current_assault);
        }

        // -- CALCULATE DAMAGE --
        var damage = current_assault.adjustedAttack(); // Get base damage + rally/weaken

        // Enfeeble
        var enfeeble = target['enfeebled'];
        damage += enfeeble;

        if (debug) {
            echo += '<u>(Attack: +' + current_assault.attack;
            if (current_assault.attack_berserk) echo += ' Berserk: +' + current_assault.attack_berserk;
            if (current_assault.attack_valor) echo += ' Valor: +' + current_assault.attack_valor;
            if (current_assault.attack_rally) echo += ' Rally: +' + current_assault.attack_rally;
            if (current_assault.attack_weaken) echo += ' Weaken: -' + current_assault.attack_weaken;
            if (current_assault.attack_corroded) echo += ' Corrosion: -' + current_assault.attack_corroded;
            if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
        }

        // Pierce
        // var pierce = current_assault['skill']['pierce'];
        var pierce = current_assault.pierce;
        if (pierce) {
            var enhanced = getEnhancement(current_assault, 'pierce');
            if (enhanced) {
                if (enhanced < 0) {
                    enhanced = Math.ceil(pierce * -enhanced);
                }
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
                if (enhanced < 0) {
                    enhanced = Math.ceil(armor * -enhanced);
                }
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

        if (showAnimations) {
            drawField(field, null, null, turn, current_assault);
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
            var enhanced = getEnhancement(current_assault, 'poison');
            if (enhanced) {
                if (enhanced < 0) {
                    enhanced = Math.ceil(poison * -enhanced);
                }
                poison += enhanced;
            }
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
            // - Must have dealt damage
            // - Cannot leech more than damage dealt
            // - Cannot leech more health than damage sustained
            // - Leecher must not be already dead
            // - Leecher must not be at full health
            // - Increases attack too during Invigorate battleground effect
            if (current_assault.leech && current_assault.isAlive() && current_assault.isDamaged()) {

                var leech_health = current_assault.leech;
                var enhanced = getEnhancement(current_assault, 'leech');
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(leech_health * -enhanced);
                    }
                    leech_health += enhanced;
                }
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

                var counterBase = 0 + target.counter;
                var counterEnhancement = getEnhancement(target, 'counter');
                if (counterEnhancement) {
                    if (counterEnhancement < 0) {
                        counterEnhancement = Math.ceil(counterBase * -counterEnhancement);
                    }
                }

                doCounterDamage(current_assault, 'Vengance', counterBase, counterEnhancement);
            }

            // Counterburn
            // - Target must have received some amount of damage
            if (target.counterburn) {
                var scorch = target.counterburn || 0;
                var enhanced = getEnhancement(target, 'counterburn');
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(scorch * -enhanced);
                    }
                    scorch += enhanced;
                }
                if (!current_assault.scorched) {
                    current_assault.scorched = { 'amount': scorch, 'timer': 2 };
                } else {
                    current_assault.scorched.amount += scorch;
                    current_assault.scorched.timer = 2;
                }
                if (debug) echo += debug_name(target) + ' inflicts counterburn(' + scorch + ') on ' + debug_name(current_assault) + '<br>';
            }

            // Fury
            // - Target must have received some amount of damage
            if (target.fury) {
                var furyBase = target.fury;
                var furyEnhancement = getEnhancement(target, 'counter');
                if (furyEnhancement) {
                    if (furyEnhancement < 0) {
                        furyEnhancement = Math.ceil(furyBase * -furyEnhancement);
                    }
                }

                if (target.isAlive()) {
                    var fury = furyBase + furyEnhancement;
                    target.attack_berserk += fury;
                    if (debug) {
                        echo += debug_name(target) + ' activates fury and gains ' + fury + ' attack<br>';
                    }
                }

                doCounterDamage(current_assault, 'Fury', furyBase, furyEnhancement);
            }

            // Berserk
            // - Must have done some damage to an assault unit
            if (current_assault.berserk && current_assault.isAlive()) {

                var berserk = current_assault.berserk;
                var enhanced = getEnhancement(current_assault, 'berserk');
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(berserk * -enhanced);
                    }
                    berserk += enhanced;
                }

                current_assault.attack_berserk += berserk;
                if (debug) echo += debug_name(current_assault) + ' activates berserk and gains ' + berserk + ' attack<br>';
            }
        }

        // -- CHECK STATUS INFLICTION --

        // Corrosion
        // - Target must have received some amount of damage
        if (target.corrosive) {
            var corrosion = target.corrosive || 0;
            var enhanced = getEnhancement(target, 'corrosive');
            if (enhanced) {
                if (enhanced < 0) {
                    enhanced = Math.ceil(corrosion * -enhanced);
                }
                corrosion += enhanced;
            }
            if (current_assault.corroded) {
                current_assault.corroded.amount += corrosion;
                current_assault.corroded.timer = 2;
            } else {
                current_assault.corroded = { amount: corrosion, timer: 2 };
            }
            if (debug) echo += debug_name(target) + ' inflicts corrosion(' + corrosion + ') on ' + debug_name(current_assault) + '<br>';
        }

        if (target.isAssault() && target.isAlive() && current_assault.isAlive()) {
            // Scorch
            // - Attacker must not have died to Vengeance
            // - Target must be an assault
            if (current_assault.burn) {
                var scorch = current_assault.burn;
                var enhanced = getEnhancement(current_assault, 'burn');
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(scorch * -enhanced);
                    }
                    scorch += enhanced;
                }
                if (!target['scorched']) {
                    target['scorched'] = { 'amount': scorch, 'timer': 2 };
                } else {
                    target['scorched']['amount'] += scorch;
                    target['scorched']['timer'] = 2;
                }
                if (debug) echo += debug_name(current_assault) + ' inflicts scorch(' + scorch + ') on ' + debug_name(target) + '<br>';
            }
            // Nullify
            // - Attacker must not have died to Vengeance
            // - Target must be an assault
            if (current_assault.nullify) {
                var nullify = current_assault.nullify;
                var enhanced = getEnhancement(current_assault, 'nullify');
                if (enhanced) {
                    if (enhanced < 0) {
                        enhanced = Math.ceil(nullify * -enhanced);
                    }
                    nullify += enhanced;
                }
                target.nullified += nullify;
                if (debug) echo += debug_name(current_assault) + ' inflicts nullify(' + nullify + ') on ' + debug_name(target) + '<br>';
            }
        }
        
        if (showAnimations) {
            drawField(field, null, null, turn, current_assault);
        }
        // -- END OF STATUS INFLICTION --
    };

    function doCounterDamage(attacker, counterType, counterBase, counterEnhancement) {

        var counterDamage = counterBase + counterEnhancement;

        // Protect
        var protect = (attacker.protected || 0);
        if (counterDamage >= protect) {
            attacker.protected = 0;
            counterDamage -= protect;
        } else {
            attacker.protected -= counterDamage;
            counterDamage = 0;
        }

        if (debug) {
            echo += '<u>(' + counterType + ': +' + counterBase;
            if (counterEnhancement) echo += ' Enhance: +' + counterEnhancement;
            if (protect) echo += ' Barrier: -' + protect;
            echo += ') = ' + counterDamage + ' damage</u><br>';
        }

        do_damage(attacker, counterDamage);

        if (debug) {
            echo += debug_name(attacker) + ' takes ' + counterDamage + ' ' + counterType.toLowerCase() + ' damage';
            echo += (!attacker.isAlive() ? ' and it dies' : '') + '<br>';
        }
    }

    var deck = {};
    var field = {};
    var battlegrounds;
    var simulation_turns = 0;
    var simulating = false;
    var user_controlled = false;
    var livePvP = false;
    var turn = 0;
    var damage_taken = 0;
    var damage_dealt = 0;
    var plays = [];
    var totalDeckHealth = 0;
    var totalCpuDeckHealth = 0;

    // public functions
    SIMULATOR.simulate = simulate;
    // public variables
    Object.defineProperties(SIMULATOR, {
        setupDecks: {
            get: function () {
                return setupDecks;
            },
            set: function (value) {
                setupDecks = value;
            }
        },
        setupField: {
            get: function () {
                return setupField;
            },
            set: function (value) {
                setupField = value;
            }
        },
        deck: {
            get: function () {
                return deck;
            },
            set: function (value) {
                deck = value;
            }
        },
        field: {
            get: function () {
                return field;
            },
            set: function (value) {
                field = value;
            }
        },
        battlegrounds: {
            get: function () {
                return battlegrounds;
            },
            set: function (value) {
                battlegrounds = value;
            }
        },
        simulation_turns: {
            get: function () {
                return simulation_turns;
            },
            set: function (value) {
                simulation_turns = value;
            }
        },
        simulating: {
            get: function () {
                return simulating;
            },
            set: function (value) {
                simulating = value;
            }
        },
        totalDeckHealth: {
            get: function () {
                return totalDeckHealth;
            },
            set: function (value) {
                totalDeckHealth = value;
            }
        },
        totalCpuDeckHealth: {
            get: function () {
                return totalCpuDeckHealth;
            },
            set: function (value) {
                totalCpuDeckHealth = value;
            }
        },
        user_controlled: {
            get: function () {
                return user_controlled;
            },
            set: function (value) {
                user_controlled = value;
            }
        },
        livePvP: {
            get: function () {
                return livePvP;
            },
            set: function (value) {
                livePvP = value;
            }
        },
    });
})();