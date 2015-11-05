"use strict";

if (simulator_thread) {

//50% proc function
var roll_proc = function () {
	return Math.round(Math.random()*1) == 1;
}

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
}

// Play card
var play_card = function (card, p, quiet) {
	var current_card = card;
	var id = card['id'];
	var field_p_assaults = field[p]['assaults'];

	// Not a valid card
	if (!current_card['id']) return 0;

	if (quiet) current_card['summoned'] = true;

	var newKey = field_p_assaults.length;
	current_card.owner = p;
	current_card['health_left'] = current_card['health'];
	current_card['timer'] = current_card['cost'];
	current_card['attack_rally'] = 0;
	current_card['attack_weaken'] = 0;
	current_card['poisoned'] = 0;
	current_card['scorched'] = 0;
	current_card['enfeebled'] = 0;
	current_card['protected'] = 0;
	current_card['augmented'] = 0;
	current_card['jammed'] = false;
	current_card['key'] = newKey;

	field_p_assaults[newKey] = current_card;

	if (debug && !quiet) echo += debug_name(field[p]['commander']) + ' plays ' + debug_name(current_card) + '<br>';
}

// Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
var remove_dead = function () {
	remove_dead_cards('player','assaults');
	remove_dead_cards('cpu','assaults');
}

// Shift over to the left if there are any gaps.
var remove_dead_cards = function (p, type) {
	var units = field[p][type];
	// Find first dead unit (don't need to update the keys of any units before this one)
	for (var key = 0, len = units.length; key < len; key++) {
		var current_assault = units[key];
		if (current_assault['health_left'] < 1) {
			if (debug) echo += debug_name(current_assault) + ' is removed from field<br>';
			var newkey = key;	// Store the new key value for the next alive unit
			// Starting at the first dead unit, start shifting.
			for (key++; key < len; key++) {
				current_assault = units[key];
				// If this unit is dead, don't update newkey, we still need to fill that slot
				if (current_assault['health_left'] < 1) {
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
}

// Filter targets

// Prepare array of targets using reference pointers
// - Targets must be alive
var filterize = function (targets) {
	var retval = [];
	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];
		if (target.isAlive()) retval.push(target);
	}
	return retval;
}

// Picks one target by random
var choose_random_target = function (targets) {
	var len = targets.length
	if (len == 0) return [];

	var target = targets[Math.floor(Math.random() * len)];

	if (!target) return [];

	return [target];
}

var get_p = function (card) {
	return card.owner;
}

var get_o = function (card) {
	if (card.owner == 'cpu') return 'player';
	if (card.owner == 'player') return 'cpu';
}

// Deal damage to card
// and keep track of cards that have died this turn
var do_damage = function (card, damage) {
	card['health_left'] -= damage;
	if (card['health_left'] <= 0) {
		card['health_left'] = 0;
		just_died.push(card);
	}
}

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
		if (!target.isAlive() || !target.isUnjammed()) continue;
		if( !target.isAugmentable(s) || !target.isInFaction(faction)) continue;
		if (require_active_turn && !target.isActive()) continue;
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
        if(s == 'armored') s = 'armor'
		if (debug) echo += debug_name(src_card) + ' enhances ' + s + ' of ' + debug_name(target, false) + ' by ' + augment + '<br>';
	}
}


function getAugment(card, s) {
    var augments = card['augmented'];
    if (augments) return augments[s];
    else return 0;
}

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
		if(target.isAlive()
		&& target.isInFaction(faction) )
		{
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
}

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
	if (src_card['fusion']) {
		heal *= 2;
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

		if (heal_amt > target['health'] - target['health_left']) heal_amt = target['health'] - target['health_left'];
		target['health_left'] += heal_amt;
		if (augment && augment > 0 && debug) echo += '<u>(Enhance: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' heals ' + debug_name(target) + ' by ' + heal_amt + '<br>';
	}
}

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
        if(skill['c']) skill['coundown'] = skill['c'];

		target['jammed'] = true;
		if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(target) + '<br>';
	}
}

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
		if( target.isAlive()
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
		if (augment && augment > 0 && debug) echo += '<u>(Enhance: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' protects ' + debug_name(target) + ' by ' + protect + '<br>';
	}
}

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
		if( target.isAlive()
		&& target.isInFaction(faction)) {
		    targets.push(target);
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) targets = choose_random_target(targets);

	var strike_deaths = [];
	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

	    // Check Evade
		if (target['invisible']) {
		    target['invisible']--;
		    if (debug) echo += debug_name(src_card) + ' strikes ' + debug_name(target) + ' but it is invisible!<br>';
		    continue;
		}

		var strike_damage = 0 + strike;

		if (debug) echo += '<u>(Strike: +' + strike_damage;

		// Check Protect/Enfeeble
		var enfeeble = 0;
		if (target['enfeebled']) enfeeble = target['enfeebled'];
		var protect = 0;
		if (target['protected']) protect = target['protected'];

		if (src_card['fusion']) {
			if (debug) echo += ' Fusion: +' + strike_damage;
			strike_damage *= 2;
		}

		if (enfeeble) {
		    strike_damage += enfeeble;
		    if (debug) echo += ' Enfeeble: +' + enfeeble;
		}
		if (augment) {
		    strike_damage += augment;
		    if (debug) echo += ' Enhance: +' + augment;
		}
		if (protect) {
		    if (strike_damage > protect) target['protected'] = 0;
		    else target['protected'] -= strike_damage;
		    strike_damage -= protect;
		    if (debug) echo += ' Barrier: -' + protect;
		}

		if (strike_damage < 0) strike_damage = 0;
		if (debug) echo += ') = ' + strike_damage + ' damage</u><br>';

		do_damage (target, strike_damage);

		if (debug) echo += debug_name(src_card) + ' strikes ' + debug_name(target) + ' for ' + strike_damage + ' damage';
		if (debug && target['health_left'] < 1) echo += ' and it dies<br>';
		else if (debug) echo += '<br>';

		if (target['health_left'] < 1) strike_deaths.push(key);
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
		if(target.isUnjammed()
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
		if (augment && augment > 0 && debug) echo += '<u>(Enhance: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' by ' + weaken + '<br>';
	}
}

// Empower, Legion, and Fervor all activate at the beginning of the turn, after commander
var empower_skills = function (field_p_assaults) {
    for (var unit_key = 0, unit_len = field_p_assaults.length; unit_key < unit_len; unit_key++) {
        var current_unit = field_p_assaults[unit_key];
        if (current_unit && current_unit.isAlive() && current_unit.isActive()) {
            var skills = current_unit['skill'];
            for (var key in skills) {
                var skill = skills[key];
                if (skill.id == 'rally') {
                    rally(current_unit, skill);
                }
                if (skill.id == 'legion') {
                    legion(current_unit, skill);
                }
                if (skill.id == 'fervor') {
                    fervor(current_unit, skill);
                }
            }
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
        if (target.isAlive() && target.isActive() && target.isUnjammed() && target.isInFaction(faction)) {
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
        if (augment && augment > 0 && debug) echo += '<u>(Enhance: +' + augment + ')</u><br>';
        if (debug) echo += debug_name(src_card) + ' empowers ' + debug_name(target) + ' by ' + rally + '<br>';
    }
}

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
        targets.push(get_assault_by_key(field_p_assaults, src_position - 1));   // Check left
    }
    targets.push(get_assault_by_key(field_p_assaults, src_position + 1));       // Check right

    for (var key = 0, len = targets.length; key < len; key++) {
        var target = targets[key];
        if (target && target.isAlive() && target.isActive() && target.isInFaction(faction)) {
            target['attack_rally'] += rally;
            if (augment && augment > 0 && debug) echo += '<u>(Enhance: +' + augment + ')</u><br>';
            if (debug) echo += debug_name(src_card) + ' activates legion and empowers ' + debug_name(target) + ' by ' + rally + '<br>';
        }
    }
}

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
        targets.push(get_assault_by_key(field_p_assaults, src_position - 1));   // Check left
    }
    targets.push(get_assault_by_key(field_p_assaults, src_position + 1));       // Check right

    var fervorAmount = 0;
    for (var key = 0, len = targets.length; key < len; key++) {
        var target = targets[key];
        if (target && target.isAlive() && target.isInFaction(faction)) {
            fervorAmount += rally;
        }
    }
    if (fervorAmount) {
        src_card['attack_rally'] += fervorAmount;
        if (augment && augment > 0 && debug) echo += '<u>(Enhance: +' + augment + ')</u><br>';
        if (debug) echo += debug_name(src_card) + ' activates fervor for ' + fervorAmount + '<br>';
    }
}

// Activation Skills
// - Must traverse through skills from top to bottom
var activation_skills = function (src_card) {

	var skills = src_card['skill'];

	for (var key in skills) {
		var skill = skills[key];

		// Delegate to skill functions
		var id = skill['id'];
		switch (id) {
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
		    case 'rally':
		        if (!src_card.isAssault()) {
		            rally(src_card, skill);
		        }
				break;
			case 'strike':
				strike(src_card, skill);
				break;
			case 'weaken':
				weaken(src_card, skill);
				break;
		}
	}
}

// Simulate one game
var simulate = function () {

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
	    var towerCard = get_card_by_id("601", tower_level);
	    play_card(towerCard, 'cpu', true);
	}

	just_died = [];

	// Start simulation
	for (turn = 1; turn <= max_turns + 1; turn++) {
		if (turn == max_turns + 1) {
			// WINNING CONDITION
			return 'draw';
		}

		simulation_turns = turn;

		if (turn % 2) {
			var p = first_player;
			var o = second_player;
		} else {
			var p = second_player;
			var o = first_player;
		}

		// Allow functions to learn whose turn it is!
		field['whose_turn'] = p;

		var field_p = field[p];
		var field_p_commander = field_p['commander'];
		var field_p_assaults = field_p['assaults'];

		var field_o = field[o];
		var field_o_commander = field_o['commander'];
		var field_o_assaults = field_o['assaults'];

		var deck_p = deck[p];
		var deck_p_deck = deck_p['deck'];
		var deck_p_ordered = deck_p['ordered'];

		field_p['died_this_turn'] = false;
		field_o['died_this_turn'] = false;

		if (debug) echo += '<u>Turn ' + turn + ' begins for ' + debug_name(field_p_commander) + '</u><br>';

	    // Count down timer on your field
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];

			if (current_assault['timer'] > 0) {
				current_assault['timer']--;
				if (debug) echo += debug_name(current_assault) + ' reduces its timer<br>';
			}
		}

		// Remove from your field: Enfeeble, Protect
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];

			current_assault['enfeebled'] = 0;
			current_assault['protected'] = 0;
			delete current_assault.augmented;
		}

		// Deck not empty yet
		if (deck_p_deck[0]) {

			var card_picked = 0;

			if (deck_p_ordered) {
			    // Prepare 3-card hand
			    var hand = deck_p_deck.slice(0,3);

				// Play highest priority card
				var played = false;
				for (var orderIdx = 0, deck_len = deck_p_ordered.length; orderIdx < deck_len; orderIdx++) {
				    var desiredCard = deck_p_ordered[orderIdx];

					// Get advanced priority
					var priority_id = 0;
					if (isNaN(desiredCard) && desiredCard.indexOf(',') != -1) {
					    priority_id = desiredCard.split(',');
					    desiredCard = (priority_id[0]);
						priority_id = parseInt(priority_id[1]);
					}

					var samePriority = -1;
					var cardInHand
					for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
					    cardInHand = hand[handIdx];
					    var b_priority
					    if (isNaN(cardInHand)) {
					        b_priority = cardInHand.split(',');
					        cardInHand = b_priority[0];
					        b_priority = parseInt(b_priority[1]);
					    }

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
			for (var len = deck_p_deck.length-1; key < len; key++) {
				deck_p_deck[key] = deck_p_deck[key+1];
			}
			deck_p_deck.length = key;
		}

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
		    if (current_assault.skill.evade) {
		        current_assault['invisible'] = current_assault.skill.evade.x;
		        var augment = getAugment(current_assault, 'evade');
		        if (augment && augment > 0) {
		            current_assault['invisible'] += augment;
		        }
		    }
		}

	    // Units
        // - empower skills
		empower_skills(field_p_assaults);

		// Assaults
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {

			var current_assault = field_p_assaults[key];

			if (!current_assault) continue;

			// Check if dead
			if (!current_assault.isAlive()) {
			    // This assault is already dead and can't do anything!
			    continue;
			}

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
			    } else {
			        dualStrike['coundown'] = dualStrike['c'] - 1;
			        activations++;
			        if(debug) echo += debug_name(current_assault) + ' activates dualstrike<br>';
			    }
			}

			for (; activations > 0; activations--) {

                // Check if we are Jammed
			    if (current_assault['jammed']) {
			        if (debug) echo += debug_name(current_assault) + ' is frozen and cannot attack<br>';
			        return;
			    }

			    // Activation skills
			    activation_skills(current_assault);

			    // Check attack
			    // - check rally and weaken
			    if (!current_assault.hasAttack()) {
			        if (current_assault['attack_weaken'] && debug) echo += debug_name(current_assault) + ' is weakened and cannot attack<br>';
			        continue;
			    }

			    doAttack(current_assault, field_o_assaults, field_o_commander);

			    // WINNING CONDITION (in case of backfire or shock)
			    if (field_o_commander['health_left'] < 1) {
			        return p == 'player';
			    }
			    if (field_p_commander['health_left'] < 1) {
			        return p == 'cpu';
			    }

			    // If died from counter, don't attack!
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
	}
}

var processDOTs = function (field_p_assaults) {

    // Poison/Scorch damage
    for (var key = 0, len = field_p_assaults.length; key < len; key++) {
        var current_assault = field_p_assaults[key];

        if (current_assault['poisoned']) {
            var amount = current_assault['poisoned'];
            do_damage(current_assault, amount);
            if (debug) echo += debug_name(current_assault) + ' takes ' + amount + ' poison damage';
            if (debug && current_assault['health_left'] < 1) echo += ' and it dies<br>';
            else if (debug) echo += '<br>';
        }

        if (current_assault['scorched']) {
            var scorch = current_assault['scorched'];
            var amount = scorch['amount'];
            do_damage(current_assault, amount);
            scorch['timer']--;
            if (debug) echo += debug_name(current_assault) + ' takes ' + amount + ' scorch damage';
            if (debug && current_assault['health_left'] < 1) echo += ' and it dies<br>';
            else if (debug) echo += '<br>';
            if (!scorch['timer']) current_assault['scorched'] = 0;
        }
    }
}

var doAttack = function (current_assault, field_o_assaults, field_o_commander) {
    
    // -- START ATTACK SEQUENCE --
    var target = field_o_assaults[current_assault.key];
    if (!target || !target.isAlive()) target = field_o_commander;

    // -- CALCULATE DAMAGE --
    var damage = current_assault['attack'];

    // Rally
    var rally = current_assault['attack_rally'];
    damage += rally;

    // Weaken
    var weaken = current_assault['attack_weaken'];
    damage -= weaken;

    // Enfeeble
    var enfeeble = target['enfeebled'];
    damage += enfeeble;

    if (debug) echo += '<u>(Attack: +' + current_assault['attack'];
    if (debug && rally) echo += ' Rally: +' + rally;
    if (debug && weaken) echo += ' Weaken: -' + weaken;
    if (debug && enfeeble) echo += ' Enfeeble: +' + enfeeble;

    // Pierce
    var pierce = 0;
    if (current_assault['skill']['pierce']) pierce = current_assault['skill']['pierce']['x'];
    if (pierce > 0) {
        var augment = getAugment(current_assault, 'pierce');
        if (augment && augment > 0) {
            pierce += augment;
        }
    }

    // Protect (triggered before armor)
    var protect = target['protected'];
    if (debug && protect) echo += ' Barrier: -' + protect;
    if (pierce) {
        if (pierce > protect) {
            pierce -= protect;
            protect = 0;
        } else {
            protect -= pierce;
            pierce = 0;
        }

        // Remove pierced barrier
        target['protected'] = protect;
    }

    if (damage > protect) {
        target['protected'] = 0;
    } else {
        target['protected'] -= damage;
    }
    damage -= protect;

    // Armor
    var armor = 0;
    if (target['skill']['armored']) {
        armor = target['skill']['armored']['x'];
        var augment = getAugment(target, 'armor');
        if (augment && augment > 0) {
            armor += augment;
        }
        if (pierce) {
            if (pierce > armor) {
                pierce -= armor;
                armor = 0;
            } else {
                var tmp_armor = armor;
                armor -= pierce;
                pierce -= tmp_armor;
                if (pierce < 1) pierce = 0;
            }
        }
    }
    damage -= armor;
    if (debug && target['skill']['armored']) echo += ' Armor: -' + target['skill']['armored']['x'];


    // Pierce (debug text)
    if (debug && current_assault['skill']['pierce'] && pierce < current_assault['skill']['pierce']['x']) {
        echo += ' Pierce: +' + (current_assault['skill']['pierce']['x'] - pierce);
    }

    if (damage < 0) damage = 0;

    if (debug) echo += ') = ' + damage + ' damage</u><br>';

    // -- END OF CALCULATE DAMAGE --

    // Deal damage to target
    do_damage(target, damage);

    if (debug) echo += debug_name(current_assault) + ' attacks ' + debug_name(target) + ' for ' + damage + ' damage';
    if (debug && target['health_left'] < 1) echo += ' and it dies<br>';
    else if (debug) echo += '<br>';

    // WINNING CONDITION
    if (field_o_commander['health_left'] < 1) {
        return field_o_commander.owner == 'cpu';
    }

    // Counter
    // - Target must have received some amount of damage
    // - Attacker must not be already dead
    if (damage > 0 && current_assault['health_left'] > 0 && target['skill']['counter']) {

        var counter_damage = 0 + target['skill']['counter']['x'];
        var augment = getAugment(target, 'counter');
        if (augment && augment > 0) {
            counter_damage += augment;
        }

        // Enfeeble
        var enfeeble = 0;
        if (current_assault['enfeebled']) enfeeble = current_assault['enfeebled'];
        counter_damage += 0 + enfeeble;

        // Protect
        var protect = 0;
        if (current_assault['protected']) protect = current_assault['protected'];
        counter_damage -= protect;

        if (counter_damage < 0) counter_damage = 0;

        do_damage(current_assault, counter_damage);

        if (debug) echo += debug_name(current_assault) + ' takes ' + counter_damage + ' counter damage';
        if (debug && current_assault['health_left'] < 1) echo += ' and it dies<br>';
        else if (debug) echo += '<br>';
    }

    // -- CHECK STATUS INFLICTION --

    // Poison
    // - Target must have taken damage
    // - Target must be an assault
    // - Target must not be already poisoned of that level
    if (damage > 0 && target.isAssault() && current_assault['skill']['poison']) {
        var poison = current_assault['skill']['poison']['x'];
        poison += getAugment(current_assault, 'poison');
        if (poison > target['poisoned']) {
            target['poisoned'] = poison;
            if (debug) echo += debug_name(current_assault) + ' inflicts poison(' + poison + ') on ' + debug_name(target) + '<br>';
        }
    }

    // Scorch
    // - Attacker must not have died to Vengeance
    // - Target must be an assault
    if (target.isAssault() && current_assault['skill']['burn'] && current_assault.isAlive()) {
        var scorch = current_assault['skill']['burn']['x'];
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
}

var deck = [];
var number_of_summons = [];
var field = [];
var simulation_turns = 0;
var just_died = [];
var time_start_batch = 0;
var card_cache = {};
}