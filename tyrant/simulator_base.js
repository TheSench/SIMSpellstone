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
		if (assault && assault.key == key) {
			return assault;
		}
	}
	return 0;
}

// Play card
var play_card = function (card, p, o, quiet) {
	var current_card = card;
	var id = card.id;
	var field_p_assaults = field[p]['assaults'];

	// Not a valid card
	if (!current_card.id) return 0;

	// Play achievement counting
	if (cache_achievement) {
		if (p == 'player' && !quiet) achievement_played.push(get_slim_card_by_id(id));
	}

	if (quiet) current_card.summoned = true;

	if (is_assault(id)) {
		var newKey = field_p_assaults.length;
		current_card.p = p;
		current_card.health_left = current_card.health;
		current_card.timer = current_card.cost;
		current_card.attack_rally = 0;
		current_card.attack_weaken = 0;
		current_card.attack_berserk = 0;
		current_card.poisoned = 0;
		current_card.enfeebled = 0;
		current_card.protected = 0;
		current_card.augmented = 0;
		current_card.immobilized = false;
		current_card.stunned = false;
		current_card.frozen = false;
		current_card.jammed = false;
		current_card.diseased = false;
		current_card.sundered = false;
		current_card.phased = false;
		current_card.chaosed = false;
		current_card.blitz = false;
		current_card.key = newKey;

		if (battleground) {
			switch(battleground) {
				// Decay
				// - all assault cards are diseased and poisoned
				case 'decay':
					current_card.diseased = true;
					current_card.poisoned = 1;
					break;

				// Quicksilver battleground effect
				// - all assault cards gain evade
				case 'quicksilver':
					if (!current_card.skill.evade) {
						current_card.skill.evade = [];
						current_card.skill.evade.id = 'evade';
					}
					break;

				// Friendly Fire battleground effect
				// - all assault cards without strike gain strike 1
				case 'friendly_fire':
					if (!current_card.skill.strike) {
						current_card.skill.strike = [];
						current_card.skill.strike.id = 'strike';
						current_card.skill.strike.x = 1;
					}
					break;

				// Photon Shield battleground effect
				// - All of Defending Player's units that do not have Armor gain the skill "Armor 2"
				case 'photon_shield':
					if (p == 'cpu' && !current_card.skill.armored) {
						current_card.skill.armored = [];
						current_card.skill.armored.id = 'armored';
						current_card.skill.armored.x = 2;
					}
					break;

				// Harsh Conditions
				// - All Assault cards enter play with an extra cooldown
				case 'slow_assault':
					current_card.timer++;
					break;

				// United Front
				case 'legion_all':
					current_card.skill.legion = [];
					current_card.skill.legion.id = 'legion';
					current_card.skill.legion.x = current_card.cost;
					break;

				// Toxic battleground effect
				// - all assault cards are poisoned
				case 'poison_all':
					current_card.poisoned = 1;
					break;

				// Haunt battleground effect
				// - All non-Bloodthirsty assaults/structures will summon random bloodthirsty on death (replaces any existing summon on death skill)
				case 'haunt':
					if (current_card.type != 3) {
						// Remove any existing summon on death
						if (current_card.skill.summon && current_card.skill.summon.died) {
							if (current_card.skill.summon.played) {
								current_card.skill.summon.died = false;
							} else {
								current_card.skill.summon = 0;
							}
						}

						// Add summon random BT on death
						current_card.skill.summon_haunt = [];
						current_card.skill.summon_haunt.id = 'summon';
						current_card.skill.summon_haunt.x = 'haunt';
						current_card.skill.summon_haunt.died = true;
					}
					break;
			}
		}

		field_p_assaults[newKey] = current_card;

	} else if (is_structure(id)) {
		current_card.p = p;
		current_card.health_left = current_card.health;
		current_card.timer = current_card.cost;
		current_card.key = field[p]['structures'].length;

		// Haunt battleground effect
		// - All non-Bloodthirsty assaults/structures will summon random bloodthirsty on death (replaces any existing summon on death skill)
		if (battleground == 'haunt' && current_card.type != 3) {
			// Remove any existing summon on death
			if (current_card.skill.summon && current_card.skill.summon.died) {
				if (current_card.skill.summon_haunt.played) {
					current_card.skill.summon.died = false;
				} else {
					current_card.skill.summon = 0;
				}
			}

			// Add summon random BT on death
			current_card.skill.summon_haunt = [];
			current_card.skill.summon_haunt.id = 'summon';
			current_card.skill.summon_haunt.x = 'haunt';
			current_card.skill.summon_haunt.died = true;
		}

		field[p]['structures'][field[p]['structures'].length] = current_card;
	} else if (is_action(id)) {
		current_card.p = p;
		field[p]['action'] = current_card;
	}

	if (debug && !quiet) echo += debug_name(field[p]['commander']) + ' plays ' + debug_name(current_card) + '<br>';

	// Blitz
	// - opposing assault unit must be alive and active at start of turn
	// - if card is summoned after structure activation phase, do not Blitz!
	var opposing = get_assault_by_key(field[o]['assaults'], current_card.key);
	if (!assaults_not_done_yet && current_card.skill.blitz && opposing && opposing.health_left > 0 && opposing.timer < 1) {
		current_card.blitz = true;
		if (debug) echo += debug_name(current_card) + ' activates Blitz!<br>';

		// Skill achievement counting
		if (current_card.p == 'player') achievement_skill.push('blitz');
	}

	// Legion on your assault units
	if (!quiet) legion(field_p_assaults);

	// On play
	// - activation skills
	activation_skills(current_card, 'played');

	// Action
	// - activation skills
	if (is_action(id)) {
		activation_skills(current_card);
	}
}

// Find the first wall
// - Return 0 if none
var get_wall = function (structures) {
	for (var key = 0, len = structures.length; key < len; key++) {
		var current_structure = structures[key];
		if (current_structure.health_left > 0 && current_structure.skill.wall) {
			return current_structure;
		}
	}
	return 0;
}

// Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
var remove_dead = function () {
	remove_dead_cards('player','assaults');
	remove_dead_cards('player','structures');
	remove_dead_cards('cpu','assaults');
	remove_dead_cards('cpu','structures');
}

// Shift over to the left if there are any gaps.
var remove_dead_cards = function (p, type) {
	var units = field[p][type];
	// Find first dead unit (don't need to update the keys of any units before this one)
	for (var key = 0, len = units.length; key < len; key++) {
		var current_assault = units[key];
		if (current_assault.health_left < 1) {
			if (debug) echo += debug_name(current_assault) + ' is removed from field<br>';
			var newkey = key;	// Store the new key value for the next alive unit
			// Starting at the first dead unit, start shifting.
			for (key++; key < len; key++) {
				current_assault = units[key];
				// If this unit is dead, don't update newkey, we still need to fill that slot
				if (current_assault.health_left < 1) {
					if (debug) echo += debug_name(current_assault) + ' is removed from field<br>';
				}
				// If this unit is alive, set its key to newkey, and then update newkey to be the next slot
				else {
					current_assault.key = newkey;
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
		if (target.isAlive()) retval[retval.length] = target;
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
	return card.p;
}

var get_o = function (card) {
	if (card.p == 'cpu') return 'player';
	if (card.p == 'player') return 'cpu';
}

// Deal damage to card
// and keep track of cards that have died this turn
var do_damage = function (card, damage) {
	card.health_left -= damage;
	if (card.health_left <= 0) {
		card.health_left = 0;
		just_died.push(card);
	}
}

// Augment
// - Can target specific faction
// - Targets allied unjammed, unfrozen active assaults
// - If Augment on Attacked/Death, active-next-turn assaults are valid targets too
// - Target must not have attacked already this turn
// - Target must not have at least one "augmentable skill"
// - Augment on Kill cannot target the attacker! (Not tested, only assumed.)
// - Can be tributed
// - Cannot be augmented
// - Can be emulated
var augment = function (src_card, skill) {
	if (skill.id != 'augment') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var augment = skill.x;
	var all = skill.all;

	var field_p_assaults = field[p]['assaults'];
	var filter_active_turn_flag = ((skill.died && field.whose_turn == o) || skill.attacked);

	var targets = [];
	for (var key = 0, len = field_p_assaults.length; key < len; key++) {
		var target = field_p_assaults[key];
		if (!target.isAlive()) continue;
		if (filter_active_turn_flag) {
			if (!target.isActiveNextTurn()) continue;
		} else {
			if (!target.isActive()) continue;
		}
		if (skill.kill && target.attacking_now) continue;
		if( target.isUnjammed()
		&& !target.attacked_already
		&& !!target.phased
		&& target.isAugmentable()
		&& target.isInFaction(faction) )
		{
			targets[targets.length] = target
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		targets = choose_random_target(targets);
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		target.augmented += augment;
		if (debug) echo += debug_name(src_card) + ' augments ' + debug_name(target) + ' by ' + augment + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Emulate
		// - emulator must be unjammed and active next turn
		// - emulator must have at least one augmentable skill
		// - emulator must be alive
		var opp_card = get_assault_by_key(field[o]['assaults'], target.key);

		if (skill.attacked && opp_card.timer > 0) {
			// Do not allow emulation of Augment on Attacked on timer of 1.
		} else if ( opp_card.isAlive()
		&& opp_card.isActiveNextTurn()
		&& opp_card.isUnjammed()
		&& opp_card.isAugmentable() ) {
			if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0) {
				// Skill achievement counting
				if (src_card.p == 'cpu') achievement_skill.push('emulate');

				opp_card.augmented += augment;
				if (debug) echo += debug_name(opp_card) + ' emulates augment by ' + augment + '<br>';
			}
		}

		// Check Tribute
		// - source must be different than target
		// - source must be an assault
		// - source must be alive
		// - source must have at least one augmentable skill
		// - 50% proc
		if (src_card.isAssault() && src_card.isAugmentable()) {
			if (target.key != src_card.key && target.skill.tribute && src_card.health_left > 0 && roll_proc()) {

				// Skill achievement counting
				if (src_card.p == 'player') achievement_skill.push('tribute');

				src_card.augmented += augment;
				if (debug) echo += debug_name(target) + ' tributes augment on ' + debug_name(src_card) + ' by ' + augment + '<br>';

				// Check Emulate
				// - emulator must be unjammed and active next turn
				// - emulator must have at least one augmentable skill
				// - emulator must be alive
				var opp_card = get_assault_by_key(field[o]['assaults'], src_card.key);

				if (skill.attacked && opp_card.timer > 0) {
					// Do not allow emulation of Augment on Attacked on timer of 1.
				} else if ( opp_card.isAlive()
				&& opp_card.isActiveNextTurn()
				&& opp_card.isUnjammed()
				&& opp_card.isAugmentable() ) {
					if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0) {
						// Skill achievement counting
						if (src_card.p == 'cpu') achievement_skill.push('emulate');

						opp_card.augmented += augment;
						if (debug) echo += debug_name(opp_card) + ' emulates augment by ' + augment + '<br>';
					}
				}

			}
		}
	}
}

// Backfire
// - DEPRECATED: Backfire damage is not taken into account for ANP calculations
// - EDIT: Backfire damage is taken into account for ARD calculations
var backfire = function (src_card, skill) {
	if (skill.id != 'backfire') return;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var backfire = skill.x;

	var commander = field[p]['commander'];
	do_damage(commander, backfire);

	// Calculate ARD
	if (p == 'cpu') {
		// Damage achievement counting
		achievement_damage += backfire;
	}

	if (debug) echo += debug_name(src_card) + ' backfires on ' + debug_name(commander) + ' for ' + backfire + ' damage';
	if (debug && commander.health_left < 1) echo += ' and it dies<br>';
	else if (debug) echo += '<br>';
}

// Chaos
// - Can target specific faction
// - Interceptable
// - Targets active_next_turn, unjammed, unchaosed enemy assaults
// - Target must not have attacked already this turn (unless chaosed!)
// - Can be chaosed
// - Can be evaded
// - Can be paybacked
// - Chaos on Attacked cannot target the attacker!
var chaos = function (src_card, skill) {
	if (skill.id != 'chaos') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var all = skill.all;

	// Check Chaos
	if (src_card.chaosed) {
		t = p;
//		if (debug) echo += debug_name(src_card) + ' is chaosed!<br>';
		var field_x_assaults = field[p]['assaults'];
	} else {
		t = o;
		var field_x_assaults = field[o]['assaults'];
	}

	var targets = [];
	var filter_on_death_flag = skill.died;
	var filter_active_turn_flag = ((filter_on_death_flag && field.whose_turn == o) || skill.attacked);

	for (var key = 0, len = field_x_assaults.length; key < len; key++) {
		var target = field_x_assaults[key];
		if (skill.attacked && target.attacking_now) continue;
		if (!target.isAlive()) continue;
		if (filter_active_turn_flag) {
			if (!target.isActive()) continue;
		} else {
			if (!target.isActiveNextTurn()) continue;
		}
		if (skill.attacked && t == p) {
			if (!target.hasNotAttackedAlready3(field.current_attacker)) continue;
		} else if (filter_on_death_flag) {
			if (!target.hasNotAttackedAlready2(src_card)) continue;
		} else {
			if (!!target.attacked_already && t != p) continue;
		}

		if(target.isUnjammed()
		&& target.chaosed
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		var interceptors = targets;
		targets = choose_random_target(targets);
		var original_target = targets[0];

		// Check Intercept
		// - Cannot intercept chaosed Chaos
		if (t != p) {
			var intercept_targets = [];
			for (var key = 0, len = interceptors.length; key < len; key++) {
				var intercept_target = interceptors[key];
				if( intercept_target.canIntercept(original_target) ) {
					intercept_targets[intercept_targets.length] = intercept_target;
					break;
				}
			}

			if (intercept_targets.length) {
				targets = intercept_targets;
				if (debug) echo += debug_name(src_card) + ' chaoses ' + debug_name(original_target) + ' but ' + debug_name(targets[0]) + ' intercepts!<br>';

				// Skill achievement counting
				if (targets[0]['p'] == 'player') achievement_skill.push('intercept');
			}
		}
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		// Check Evade
		// - Cannot evade chaosed Chaos
		// - 50% proc
		if (t != p && target.skill.evade && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('evade');

			if (debug) echo += debug_name(src_card) + ' chaoses ' + debug_name(target) + ' but it evades!<br>';
			continue;
		}

		target.chaosed = true;
		if (debug) echo += debug_name(src_card) + ' chaoses ' + debug_name(target) + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Payback
		// - source must be an assault
		// - source must be alive
		// - Source must be active_next_turn, unjammed, unchaosed
		// - Cannot payback chaosed Chaos
		// - Can evade paypacked Chaos
		// - 50% proc
		if (t != p && target.skill.payback && src_card.isAssault() && src_card.health_left > 0 && !src_card.chaosed && !src_card.jammed && !src_card.frozen && (src_card.timer <= 1 || src_card.blitz) && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('payback');

			src_card.chaosed = true;
			if (debug) echo += debug_name(target) + ' paybacks chaos on ' + debug_name(src_card) + '<br>';
		}
	}
}

// Cleanse
// - Can target specific faction
// - Targets allied assaults with status ailments (cannot target inactive frozen assaults unless they have other status ailments or during enemy's turn)
// - Can be tributed
// - Cannot activate during Decay battleground effect
// - Can be emulated
var cleanse = function (src_card, skill) {
	if (skill.id != 'cleanse') return;

	// Decay
	if (battleground == 'decay') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var all = skill.all;

	var field_p_assaults = field[p]['assaults'];
	if (skill.died || skill.attacked) {
		// all frozen assaults are cleansible during the opponent's turn!
		var ailmentsFlag = true;
	} else {
		// frozen inactive assaults are not cleansible during the your own turn!
		var ailmentsFlag = false;
	}

	var targets = [];
	for (var key = 0, len = field_p_assaults.length; key < len; key++) {
		var target = field_p_assaults[key];
		if( target.isAlive()
		&& !!target.phased
		&& target.hasAilments(ailmentsFlag)
		&& target.isInFaction(faction) )
		{
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	if (!all) {
		targets = choose_random_target(targets);
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		target.immobilized = false;
		target.stunned = false;
		target.chaosed = false;
		target.jammed = false;
		target.frozen = false;
		target.diseased = false;
		target.sundered = false;
		target.poisoned = 0;
		target.enfeebled = 0;
		if (debug) echo += debug_name(src_card) + ' cleanses ' + debug_name(target) + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Emulate
		// - emulator must have ailments
		// - emulator must be alive
		var opp_card = get_assault_by_key(field[o]['assaults'], target.key);
		if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 &&
		(opp_card.immobilized || opp_card.stunned || opp_card.chaosed || opp_card.jammed || opp_card.frozen || opp_card.diseased || opp_card.sundered || opp_card.poisoned || opp_card.enfeebled)) {
			// Skill achievement counting
			if (src_card.p == 'cpu') achievement_skill.push('emulate');

			opp_card.immobilized = false;
			opp_card.stunned = 0;
			opp_card.chaosed = false;
			opp_card.jammed = false;
			opp_card.frozen = false;
			opp_card.diseased = false;
			opp_card.sundered = false;
			opp_card.poisoned = 0;
			opp_card.enfeebled = 0;
			if (debug) echo += debug_name(opp_card) + ' emulates cleanse<br>';
		}

		// Check Tribute
		// - source must be different than target
		// - source must be an assault
		// - source must be alive
		// - source must have ailments
		// - 50% proc
		if (src_card.isAssault() && target.key != src_card.key && target.skill.tribute && src_card.health_left > 0 && roll_proc() &&
		(src_card.immobilized || src_card.stunned || src_card.chaosed || src_card.jammed || src_card.frozen || src_card.diseased || src_card.sundered || src_card.poisoned || src_card.enfeebled)) {
			src_card.immobilized = false;
			src_card.stunned = 0;
			src_card.chaosed = false;
			src_card.jammed = false;
			src_card.frozen = false;
			src_card.diseased = false;
			src_card.sundered = false;
			src_card.poisoned = 0;
			src_card.enfeebled = 0;

			// Skill achievement counting
			if (src_card.p == 'player') achievement_skill.push('tribute');

			if (debug) echo += debug_name(target) + ' tributes cleanse on ' + debug_name(src_card) + '<br>';

			// Check Emulate
			// - emulator must have ailments
			// - emulator must be alive
			var opp_card = get_assault_by_key(field[o]['assaults'], src_card.key);
			if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 &&
			(opp_card.immobilized || opp_card.stunned || opp_card.chaosed || opp_card.jammed || opp_card.frozen || opp_card.diseased || opp_card.sundered || opp_card.poisoned || opp_card.enfeebled)) {
				// Skill achievement counting
				if (src_card.p == 'cpu') achievement_skill.push('emulate');

				opp_card.immobilized = false;
				opp_card.stunned = false;
				opp_card.chaosed = false;
				opp_card.jammed = false;
				opp_card.frozen = false;
				opp_card.diseased = false;
				opp_card.sundered = false;
				opp_card.poisoned = 0;
				opp_card.enfeebled = 0;
				if (debug) echo += debug_name(opp_card) + ' emulates cleanse<br>';
			}
		}
	}
}

// Enfeeble
// - Can target specific faction
// - Interceptable
// - Targets enemy assaults
// - Can be chaosed
// - Can be evaded
// - Can be paybacked
// - Can be augmented
var enfeeble = function (src_card, skill) {
	if (skill.id != 'enfeeble') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var enfeeble = skill.x;
	var augment = src_card.augmented;
	if (augment && augment > 0) {
		enfeeble += augment;
	}

	var all = skill.all;

	// Check Chaos
	if (src_card.chaosed) {
		t = p;
//		if (debug) echo += debug_name(src_card) + ' is chaosed!<br>';
		var field_x_assaults = field[p]['assaults'];
	} else {
		t = o;
		var field_x_assaults = field[o]['assaults'];
	}

	var targets = [];
	for (var key = 0, len = field_x_assaults.length; key < len; key++) {
		var target = field_x_assaults[key];
		if(target.isAlive()
		&& target.isInFaction(faction) )
		{
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		var interceptors = targets;
		targets = choose_random_target(targets);
		var original_target = targets[0];

		// Check Intercept
		// - Cannot intercept chaosed enfeeble
		if (t != p) {
			var intercept_targets = [];
			for (var key = 0, len = interceptors.length; key < len; key++) {
				var intercept_target = interceptors[key];
				if( intercept_target.canIntercept(original_target) ) {
					intercept_targets[intercept_targets.length] = intercept_target;
					break;
				}
			}

			if (intercept_targets && intercept_targets.length) {
				targets = intercept_targets;
				if (debug) echo += debug_name(src_card) + ' enfeebles ' + debug_name(original_target) + ' but ' + debug_name(targets[0]) + ' intercepts!<br>';

				// Skill achievement counting
				if (targets[0]['p'] == 'player') achievement_skill.push('intercept');
			}
		}
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		// Check Evade
		// - Cannot evade chaosed enfeeble
		// - 50% proc
		if (t != p && target.skill.evade && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('evade');

			if (augment && augment > 0 && debug) echo += '<u>(Augment: +' + augment + ')</u><br>';
			if (debug) echo += debug_name(src_card) + ' enfeebles ' + debug_name(target) + ' but it evades!<br>';
			continue;
		}

		target.enfeebled += enfeeble;
		if (debug) echo += debug_name(src_card) + ' enfeebles ' + debug_name(target) + ' by ' + enfeeble + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Payback
		// - source must be an assault
		// - source must be alive
		// - Cannot payback chaosed enfeeble
		// - Can evade paypacked enfeeble
		// - 50% proc
		if (t != p && target.skill.payback && src_card.isAssault() && src_card.health_left > 0 && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('payback');

			src_card.enfeebled += enfeeble;
			if (debug) echo += debug_name(target) + ' paybacks enfeeble on ' + debug_name(src_card) + ' by ' + enfeeble + '<br>';
		}
	}
}

// Freeze
// - Can target specific faction
// - Interceptable
// - Targets unjammed, unfrozen enemy assaults
// - Can be chaosed
// - Can be evaded
// - Can be paybacked
var freeze = function (src_card, skill) {
	if (skill.id != 'freeze') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var all = skill.all;

	// Check Chaos
	if (src_card.chaosed) {
		t = p;
//		if (debug) echo += debug_name(src_card) + ' is chaosed!<br>';
		var fied_x_assaults = field[p]['assaults'];
	} else {
		t = o;
		var fied_x_assaults = field[o]['assaults'];
	}

	var targets = [];
	for (var key = 0, len = fied_x_assaults.length; key < len; key++) {
		var target = fied_x_assaults[key];
		if( target.isAlive()
		&& target.isUnjammed()
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		var interceptors = targets;
		targets = choose_random_target(targets);
		var original_target = targets[0];

		// Check Intercept
		// - Cannot intercept chaosed Freeze
		if (t != p) {
			var intercept_targets = [];
			for (var key = 0, len = interceptors.length; key < len; key++) {
				var intercept_target = interceptors[key];
				if( intercept_target.canIntercept(original_target) ) {
					intercept_targets[intercept_targets.length] = intercept_target;
					break;
				}
			}

			if (intercept_targets.length) {
				targets = intercept_targets;
				if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(original_target) + ' but ' + debug_name(targets[0]) + ' intercepts!<br>';

				// Skill achievement counting
				if (targets[0]['p'] == 'player') achievement_skill.push('intercept');
			}
		}
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		// Check Evade
		// - Cannot evade chaosed freeze
		// - 50% proc
		if (t != p && target.skill.evade && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('evade');

			if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(target) + ' but it evades!<br>';
			continue;
		}

		target.frozen = true;
		if (debug) echo += debug_name(src_card) + ' freezes ' + debug_name(target) + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Payback
		// - source must be an assault
		// - source must be alive
		// - Source must be unjammed, unfrozen
		// - Cannot payback chaosed Freeze
		// - Can evade paypacked Freeze
		// - 50% proc
		if (t != p && target.skill.payback && src_card.isAssault() && src_card.health_left > 0 && !src_card.jammed && !src_card.frozen && (src_card.timer <= 1 || src_card.blitz) && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('payback');

			src_card.frozen = true;
			if (debug) echo += debug_name(target) + ' paybacks freeze on ' + debug_name(src_card) + '<br>';
		}
	}
}

// Fusion
// - No targets
// - Only activates if 3 or more active units have the Fusion skill
var fusion = function (src_card, skill) {
	if (skill.id != 'fusion') return;

	var p = get_p(src_card);
	var o = get_o(src_card);
	var fusion = false;

	var field_p_structures = field[p]['structures'];
	for (var key = 0, len = field_p_structures.length; key < len; key++) {
		var current_structure = field_p_structures[key];
		if (current_structure && current_structure.skill.fusion && current_structure.timer < 1) fusion++;
	}

	var field_p_assaults = field[p]['assaults'];
	for (var key = 0, len = field_p_assaults.length; key < len; key++) {
		var current_assault = field_p_assaults[key];
		if (current_assault && current_assault.skill.fusion && current_assault.timer < 1) fusion++;
	}

	if (fusion < 3) return;

	// Skill achievement counting
	if (src_card.p == 'player') achievement_skill.push(skill.id);

	src_card.fusion = true;
	if (debug) echo += debug_name(src_card) + ' activates fusion<br>';
}

// Heal
// - Can target specific faction
// - Targets allied non-diseased damaged assaults
// - Can be tributed
// - Can be fusioned
// - Attack increases too during Invigorate battleground effect
// - Can be augmented
// - Can be emulated
var heal = function (src_card, skill) {
	if (skill.id != 'heal') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var heal = skill.x;
	var augment = src_card.augmented;
	if (augment && augment > 0) {
		heal += augment;
	}
	if (src_card.fusion) {
		heal *= 2;
	}
	var all = skill.all;

	var field_p_assaults = field[p]['assaults'];

	var targets = [];
	for (var key = 0, len = field_p_assaults.length; key < len; key++) {
		var target = field_p_assaults[key];
		if (target.isAlive()
		&& target.isDamaged()
		&& !target.diseased
		&& !target.phased
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	if (!all) {
		targets = choose_random_target(targets);
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		var heal_amt = heal;

		if (heal_amt > target.health - target.health_left) heal_amt = target.health - target.health_left;
		target.health_left += heal_amt;
		if (augment && augment > 0 && debug) echo += '<u>(Augment: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' heals ' + debug_name(target) + ' by ' + heal_amt + '<br>';

		// Invigorate
		// - target cannot be sundered
		if (battleground == 'invigorate' && !target.sundered) {
			target.attack_berserk += heal_amt;
			if (debug) echo += debug_name(target) + ' invigorates by ' + heal_amt + '<br>';
		}

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Emulate
		// - emulator must be damaged
		// - emulator must be alive
		// - emulator must not be diseased
		var opp_card = get_assault_by_key(field[o]['assaults'], target.key);
		if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 && opp_card.health_left < opp_card.health && !opp_card.diseased) {
			// Skill achievement counting
			if (src_card.p == 'cpu') achievement_skill.push('emulate');

			var heal_amt = heal;

			if (heal_amt > opp_card.health - opp_card.health_left) heal_amt = opp_card.health - opp_card.health_left;
			opp_card.health_left += heal_amt;
			if (debug) echo += debug_name(opp_card) + ' emulates heal by ' + heal_amt + '<br>';

			// Invigorate
			if (battleground == 'invigorate' && !src_card.sundered) {
				src_card.attack_berserk += heal_amt;
				if (debug) echo += debug_name(opp_card) + ' invigorates by ' + heal_amt + '<br>';
			}
		}

		// Check Tribute
		// - source must be different than target
		// - source must be an assault
		// - source must be alive
		// - source must be damaged
		// - source must not be diseased
		// - 50% proc
		if (src_card.isAssault() && target.key != src_card.key && target.skill.tribute && src_card.health_left > 0 && !src_card.diseased && src_card.health_left < src_card.health && roll_proc()) {
			var heal_amt = heal;

			// Skill achievement counting
			if (src_card.p == 'player') achievement_skill.push('tribute');

			if (heal_amt > src_card.health - src_card.health_left) heal_amt = src_card.health - src_card.health_left;
			src_card.health_left += heal_amt;
			if (debug) echo += debug_name(target) + ' tributes heal on ' + debug_name(src_card) + ' by ' + heal_amt + '<br>';

			// Invigorate
			if (battleground == 'invigorate' && !src_card.sundered) {
				src_card.attack_berserk += heal_amt;
				if (debug) echo += debug_name(src_card) + ' invigorates by ' + heal_amt + '<br>';
			}

			// Check Emulate
			// - emulator must be damaged
			// - emulator must be alive
			// - emulator must not be diseased
			var opp_card = get_assault_by_key(field[o]['assaults'], src_card.key);
			if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 && opp_card.health_left < opp_card.health && !opp_card.diseased) {
				// Skill achievement counting
				if (src_card.p == 'cpu') achievement_skill.push('emulate');

				var heal_amt = heal;

				if (heal_amt > opp_card.health - opp_card.health_left) heal_amt = opp_card.health - opp_card.health_left;
				opp_card.health_left += heal_amt;
				if (debug) echo += debug_name(opp_card) + ' emulates heal by ' + heal_amt + '<br>';

				// Invigorate
				if (battleground == 'invigorate' && !src_card.sundered) {
					src_card.attack_berserk += heal_amt;
					if (debug) echo += debug_name(opp_card) + ' invigorates by ' + heal_amt + '<br>';
				}
			}
		}
	}
}

// Infuse
// - Changes race to Bloodthirsty and race-specific skills that target allied units to target allied Bloodthirsty units
// - Targets allied and enemy non-bloodthirsty assaults
// - Can be evaded
// - Interceptable
// - Cannot target "all"
var infuse = function (src_card, skill) {
	if (skill.id != 'infuse') return;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var all_assaults = field[p]['assaults'];
	all_assaults = all_assaults.concat(field[o]['assaults']);

	var targets = [];
	for (var key = 0, len = all_assaults.length; key < len; key++) {
		var target = all_assaults[key];
		if( target.isAlive()
		&& target.isNonBloodthirsty() ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	targets = choose_random_target(targets);

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];
		var t = target.p;

		// Skill achievement counting
		// if (src_card.p == 'player') achievement_skill.push(skill.id);

		// Check Intercept
		// - Cannot intercept friendly Infuse
		// - Cannot intercept during Copycat battleground effect
		if (t != p && battleground != 'copycat') {
			var original_target = target;
			var interceptors = field[o]['assaults'];
			var intercept_targets = [];

			for (var intercept_key = 0, assaults_len = interceptors.length; intercept_key < assaults_len; intercept_key++) {
				var intercept_target = interceptors[intercept_key];
				if ( intercept_target.isAlive()
				&& intercept_target.isNonBloodthirsty()
				&& intercept_target.canIntercept(original_target) ) {
					intercept_targets[intercept_targets.length] = intercept_target;
					break;
				}
			}

			if (intercept_targets.length) {
				targets = intercept_targets;
				target = targets[0];
				if (debug) echo += debug_name(src_card) + ' infuses ' + debug_name(original_target) + ' but ' + debug_name(targets[0]) + ' intercepts!<br>';

				// Skill achievement counting
				if (targets[0]['p'] == 'player') achievement_skill.push('intercept');
			}
		}

		// Check Evade
		// - 50% proc
		// - Cannot evade friendly Infuse
		if (t != p && target.skill.evade && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('evade');

			if (debug) echo += debug_name(src_card) + ' infuses ' + debug_name(target) + ' but it evades!<br>';
			continue;
		}

		// Change race to Bloodthirsty
		target.type = 3;

		// Change race-specific skills to target Bloodthirsty
		var skills = target.skill;
		for (var key in skills) {
			var skill = skills[key];

			// Ignore skills that target enemy units
			if (skill.id == 'weaken' || skill.id == 'jam' || skill.id == 'strike' || skill.id == 'mimic' || skill.id == 'chaos' || skill.id == 'enfeeble') {
				continue;
			}
			if (skill.y) {
				skill.y = 3;
			}
		}

		if (debug) echo += debug_name(src_card) + ' infuses ' + debug_name(target) + '<br>';
	}
}

// Jam
// - Can target specific faction
// - Interceptable
// - Targets active_next_turn, unjammed enemy assaults
// - Target must not have attacked already this turn (unless chaosed!)
// - Can be chaosed
// - Can be evaded
// - Can be paybacked
// - 50% proc
// - Jam on Attacked cannot target the attacker!
var jam = function (src_card, skill) {
	if (skill.id != 'jam') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var all = skill.all;

	// Check Chaos
	if (src_card.chaosed) {
		t = p;
//		if (debug) echo += debug_name(src_card) + ' is chaosed!<br>';
		var field_x_assaults = field[p]['assaults'];
	} else {
		t = o;
		var field_x_assaults = field[o]['assaults'];
	}

	var targets = [];
	var filter_on_death_flag = skill.died;
	var filter_active_turn_flag = ((filter_on_death_flag && field.whose_turn == o) || skill.attacked);

	for (var key = 0, len = field_x_assaults.length; key < len; key++) {
		var target = field_x_assaults[key];
		if (skill.attacked && target.attacking_now) continue;
		if (!target.isAlive()) continue;
		if (filter_active_turn_flag) {
			if (!target.isActive()) continue;
		} else {
			if (!target.isActiveNextTurn()) continue;
		}
		if (skill.attacked && t == p) {
			if (!target.hasNotAttackedAlready3(field.current_attacker)) continue;
		} else if (filter_on_death_flag) {
			if (!target.hasNotAttackedAlready2(src_card)) continue;
		} else {
			if (!!target.attacked_already && t != p) continue;
		}
		if(target.isUnjammed()
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {

		// 50% proc for singular target
		if (roll_proc()) return;

		var interceptors = targets;
		targets = choose_random_target(targets);
		var original_target = targets[0];

		// Check Intercept
		// - Cannot intercept chaosed Jam
		if (t != p) {
			var intercept_targets = [];
			for (var key = 0, len = interceptors.length; key < len; key++) {
				var intercept_target = interceptors[key];
				if( intercept_target.canIntercept(original_target) ) {
					intercept_targets[intercept_targets.length] = intercept_target;
					break;
				}
			}

			if (intercept_targets.length) {
				targets = intercept_targets;
				if (debug) echo += debug_name(src_card) + ' jams ' + debug_name(original_target) + ' but ' + debug_name(targets[0]) + ' intercepts!<br>';

				// Skill achievement counting
				if (targets[0]['p'] == 'player') achievement_skill.push('intercept');
			}
		}
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		// 50% proc for each "all" target
		if (all && roll_proc()) continue;

		// Check Evade
		// - Cannot evade chaosed jam
		// - 50% proc
		if (t != p && target.skill.evade && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('evade');

			if (debug) echo += debug_name(src_card) + ' jams ' + debug_name(target) + ' but it evades!<br>';
			continue;
		}

		target.jammed = true;
		if (debug) echo += debug_name(src_card) + ' jams ' + debug_name(target) + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Payback
		// - source must be an assault
		// - source must be alive
		// - Source must be active_next_turn, unjammed
		// - Cannot payback chaosed Jam
		// - Can evade paypacked Jam
		// - 50% proc (100% chance of Jam)
		if (t != p && target.skill.payback && src_card.isAssault() && src_card.health_left > 0 && !src_card.jammed && (src_card.timer <= 1 || src_card.blitz) && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('payback');

			src_card.jammed = true;
			if (debug) echo += debug_name(target) + ' paybacks jam on ' + debug_name(src_card) + '<br>';

		}
	}
}

// Mimic
// - Can target specific faction
// - Interceptable
// - Targets enemy assaults
// - Can be chaosed
// - Can be evaded
// - cannot target "all"
// - Cannot mimic Split
// - Cannot mimic Mimic
// - Commanders and Structures cannot mimic Supply
// - Ignores faction restrictions
// - Targets allied units during Copycat battleground effect
var mimic = function (src_card, skill) {
	if (skill.id != 'mimic') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	// Check Chaos
	if (src_card.chaosed) {
		t = p;
//		if (debug) echo += debug_name(src_card) + ' is chaosed!<br>';
		var field_x_assaults = field[p]['assaults'];
	} else {
		t = o;
		if (battleground == 'copycat') {
			var field_x_assaults = field[p]['assaults'];
		} else {
			var field_x_assaults = field[o]['assaults'];
		}
	}

	var targets = [];
	for (var key = 0, len = field_x_assaults.length; key < len; key++) {
		var target = field_x_assaults[key];
		if(target.isAlive()
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No targets
	if (!targets.length) return;

	var original_target = targets[0];

	// Check Intercept
	// - Cannot intercept chaosed Mimic
	// - Cannot intercept during Copycat battleground effect
	if (t != p && battleground != 'copycat') {
		var interceptors = targets;
		targets = choose_random_target(targets);
		var original_target = targets[0];

		var intercept_targets = [];
		for (var key = 0, len = interceptors.length; key < len; key++) {
			var intercept_target = interceptors[key];
			if( intercept_target.canIntercept(original_target) ) {
				intercept_targets[intercept_targets.length] = intercept_target;
				break;
			}
		}

		if (intercept_targets.length) {
			targets = intercept_targets;
			if (debug) echo += debug_name(src_card) + ' mimics ' + debug_name(original_target) + ' but ' + debug_name(targets[0]) + ' intercepts!<br>';

			// Skill achievement counting
			if (targets[0]['p'] == 'player') achievement_skill.push('intercept');
		}
	} else {
		targets = choose_random_target(targets);
	}

	var target = targets[0];

	// Check Evade
	// - Cannot evade chaosed mimic
	// - Cannot evade during Copycat battleground effect
	// - 50% proc
	if (t != p && battleground != 'copycat' && target.skill.evade && roll_proc()) {

		// Skill achievement counting
		if (target.p == 'player') achievement_skill.push('evade');

		if (debug) echo += debug_name(src_card) + ' mimics ' + debug_name(target) + ' but it evades!<br>';
		return;
	}

	var mimic_skills = copy_skills(target.skill);
	if (mimic_skills.mimic) delete mimic_skills.mimic;
	if (mimic_skills.split) delete mimic_skills.split;
	if (mimic_skills.supply && (src_card.isCommander() || src_card.isStructure() || src_card.isAction())) delete mimic_skills.supply;
	for (var k in mimic_skills) {
		if (mimic_skills[k]['y']) {
			delete mimic_skills[k]['y'];
		}
	}

	if (debug) echo += debug_name(src_card) + ' mimics ' + debug_name(target) + '<br>';

	// Skill achievement counting
	if (src_card.p == 'player') achievement_skill.push(skill.id);

	// Failsafe to prevent looping
	if (!mimic_skills) {
		mimic_skills = true;
		if (debug) echo += '<u>Mimic: Failsafe activated.</u><br>';
	}

	activation_skills(src_card, 'normal', mimic_skills);
}

// Protect
// - Can target specific faction
// - Targets allied assaults
// - Can be tributed
// - Can be augmented
// - Can be emulated
var protect = function (src_card, skill) {
	if (skill.id != 'protect') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var protect = skill.x;
	var augment = src_card.augmented;
	if (augment && augment > 0) {
		protect += augment;
	}
	var all = skill.all;

	var field_p_assaults = field[p]['assaults'];

	var targets = [];
	for (var key = 0, len = field_p_assaults.length; key < len; key++) {
		var target = field_p_assaults[key];
		if( target.isAlive()
		&& !target.phased
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		targets = choose_random_target(targets);
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		target.protected += protect;
		if (augment && augment > 0 && debug) echo += '<u>(Augment: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' protects ' + debug_name(target) + ' by ' + protect + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Emulate
		// - emulator must be alive
		var opp_card = get_assault_by_key(field[o]['assaults'], target.key);
		if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0) {
			// Skill achievement counting
			if (src_card.p == 'cpu') achievement_skill.push('emulate');

			opp_card.protected += protect;
			if (debug) echo += debug_name(opp_card) + ' emulates protect by ' + protect + '<br>';
		}

		// Check Tribute
		// - source must be different than target
		// - source must be an assault
		// - source must be alive
		// - 50% proc
		if (src_card.isAssault() && target.key != src_card.key && target.skill.tribute && src_card.health_left > 0 && roll_proc()) {

			// Skill achievement counting
			if (src_card.p == 'player') achievement_skill.push('tribute');

			src_card.protected += protect;
			if (debug) echo += debug_name(target) + ' tributes protect on ' + debug_name(src_card) + ' by ' + protect + '<br>';

			// Check Emulate
			// - emulator must be alive
			var opp_card = get_assault_by_key(field[o]['assaults'], src_card.key);
			if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0) {
				// Skill achievement counting
				if (src_card.p == 'cpu') achievement_skill.push('emulate');

				opp_card.protected += protect;
				if (debug) echo += debug_name(opp_card) + ' emulates protect by ' + protect + '<br>';
			}
		}
	}
}

// Rally
// - Can target specific faction
// - Targets allied unimmobilized, unstunned, unjammed, active assaults
// - If Rally on Attacked/Death, active-next-turn assaults are valid targets too
// - Target must not have attacked already this turn
// - Rally on Kill cannot target the attacker!
// - Can be tributed
// - Can be augmented
// - Can be emulated
// - Must not be sundered
var rally = function (src_card, skill) {
	if (skill.id != 'rally') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var rally = skill.x;
	var augment = src_card.augmented;
	if (augment && augment > 0) {
		rally += augment;
	}
	var all = skill.all;

	var field_p_assaults = field[p]['assaults'];
	var filter_active_turn_flag = ((skill.died && field.whose_turn == o) || skill.attacked);

	var targets = [];
	for (var key = 0, len = field_p_assaults.length; key < len; key++) {
		var target = field_p_assaults[key];
		if(!target.isAlive()) continue;
		if (filter_active_turn_flag) {
			if(!target.isActiveNextTurn()) continue;
		} else {
			if(!target.isActive()) continue;
		}
		if (skill.kill && target.attacking_now) continue;
		if( target.isUnjammed()
		&& !target.immobilized
		&& !target.stunned
		&& !target.sundered
		&& !target.phased
		&& !target.attacked_already
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		targets = choose_random_target(targets);
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];
		if (!target) continue;

		target.attack_rally += rally;
		if (augment && augment > 0 && debug) echo += '<u>(Augment: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' rallies ' + debug_name(target) + ' by ' + rally + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Emulate
		// - emulator must be unimmobilized, unstunned, unjammed, unfrozen, active next turn
		// - emulator must be alive
		var opp_card = get_assault_by_key(field[o]['assaults'], target.key);
		if (skill.attacked && opp_card.timer > 0) {
			// Do not allow emulation of Rally on Attacked on timer of 1.
		} else if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 && !opp_card.immobilized && !opp_card.sundered && !opp_card.stunned && !opp_card.jammed && !opp_card.frozen && opp_card.timer <= 1) {
			// Skill achievement counting
			if (src_card.p == 'cpu') achievement_skill.push('emulate');

			opp_card.attack_rally += rally;
			if (debug) echo += debug_name(opp_card) + ' emulates rally by ' + rally + '<br>';
		}

		// Check Tribute
		// - source must be different than target
		// - source must be an assault
		// - source must be alive
		// - source must be unimmobilized, unstunned, unjammed, unfrozen, active
		// - 50% proc
		if (src_card.isAssault() && target.key != src_card.key && target.skill.tribute && src_card.health_left > 0 && !src_card.immobilized && !src_card.sundered && !src_card.stunned && !src_card.jammed && !src_card.frozen && (src_card.timer == 0 || src_card.blitz) && roll_proc()) {

			// Skill achievement counting
			if (src_card.p == 'player') achievement_skill.push('tribute');

			src_card.attack_rally += rally;
			if (debug) echo += debug_name(target) + ' tributes rally on ' + debug_name(src_card) + ' by ' + rally + '<br>';

			// Check Emulate
			// - emulator must be unimmobilized, unstunned, unjammed, unfrozen, active next turn
			// - emulator must be alive
			var opp_card = get_assault_by_key(field[o]['assaults'], src_card.key);
			if (skill.attacked && opp_card.timer > 0) {
				// Do not allow emulation of Rally on Attacked on timer of 1.
			} else if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 && !opp_card.immobilized && !opp_card.sundered && !opp_card.stunned && !opp_card.jammed && !opp_card.frozen && opp_card.timer <= 1) {
				// Skill achievement counting
				if (src_card.p == 'cpu') achievement_skill.push('emulate');

				opp_card.attack_rally += rally;
				if (debug) echo += debug_name(opp_card) + ' emulates rally by ' + rally + '<br>';
			}
		}
	}
}

// Repair
// - Targets allied damaged structures
// - Can be fusioned
// - Can be augmented
var repair = function (src_card, skill) {
	if (skill.id != 'repair') return;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var repair = skill.x;
	var augment = src_card.augmented;
	if (augment && augment > 0) {
		repair += augment;
	}
	if (src_card.fusion) {
		repair *= 2;
	}

	var all = skill.all;

	var field_p_structures = field[p]['structures'];

	var targets = [];
	for (var key = 0, len = field_p_structures.length; key < len; key++) {
		var target = field_p_structures[key];
		if( target.isAlive()
		&& target.isDamaged() ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	if (!all) {
		targets = choose_random_target(targets);
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		var repair_amt = repair;
		if (repair_amt > target.health - target.health_left) repair_amt = target.health - target.health_left;
		target.health_left += repair_amt;
		if (augment && augment > 0 && debug) echo += '<u>(Augment: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' repairs ' + debug_name(target) + ' by ' + repair_amt + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}
	}
}

// Rush
// - Can target specific faction
// - Targets inactive allied assaults
// - Can be emulated
var rush = function (src_card, skill) {
	if (skill.id != 'rush') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var all = skill.all;

	var field_p_assaults = field[p]['assaults'];

	var targets = [];
	for (var key = 0, len = field_p_assaults.length; key < len; key++) {
		var target = field_p_assaults[key];
		if( target.isAlive()
		&& target.isInactive()
		&& !target.phased
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	if (!all) {
		targets = choose_random_target(targets);
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		target.timer -= 1;
		if (debug) echo += debug_name(src_card) + ' rushes ' + debug_name(target) + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Emulate
		// - emulator must be inactive
		// - emulator must be alive
		var opp_card = get_assault_by_key(field[o]['assaults'], target.key);
		if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 && opp_card.timer > 0) {
			// Skill achievement counting
			if (src_card.p == 'cpu') achievement_skill.push('emulate');

			opp_card.timer -= 1;
			if (debug) echo += debug_name(opp_card) + ' emulates rush<br>';
		}
	}
}

// Shock
var shock = function (src_card, skill) {
	if (skill.id != 'shock') return;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var shock = skill.x;

	var commander = field[o]['commander'];
	do_damage(commander, shock);

	if (debug) echo += debug_name(src_card) + ' shocks ' + debug_name(commander) + ' for ' + shock + ' damage';
	if (debug && commander.health_left < 1) echo += ' and it dies<br>';
	else if (debug) echo += '<br>';

	// Damage achievement counting
	if (commander == field.cpu.commander) achievement_damage += shock;

	// Calculate ANP
	if (commander == field.cpu.commander) {
		points_this_turn += shock;
		if (turn >= turn_of_last_decision) {
			points_since_last_decision += shock;
		}
	}

	// Skill achievement counting
	if (src_card.p == 'player') achievement_skill.push(skill.id);
}

// Siege
// - Targets enemy structures
// - Can be chaosed
// - Can be evaded
// - Can be fusioned
// - Can be augmented
var siege = function (src_card, skill) {
	if (skill.id != 'siege') return;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var siege = skill.x;
	var augment = src_card.augmented;
	if (augment && augment > 0) {
		siege += augment;
	}
	if (src_card.fusion) {
		siege *= 2;
	}
	var all = skill.all;

	// Check Chaos
	if (src_card.chaosed) {
		t = p;
//		if (debug) echo += debug_name(src_card) + ' is chaosed!<br>';
		var targets = filterize(field[p]['structures']);
	} else {
		t = o;
		var targets = filterize(field[o]['structures']);
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		targets = choose_random_target(targets);
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		// Check Evade
		// - Cannot evade chaosed siege
		// - 50% proc
		if (t != p && target.skill.evade && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('evade');

			if (debug) echo += debug_name(src_card) + ' sieges ' + debug_name(target) + ' but it evades!<br>';
			continue;
		}

		do_damage(target, siege);

		if (augment && augment > 0 && debug) echo += '<u>(Augment: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' sieges ' + debug_name(target) + ' for ' + siege + ' damage';
		if (debug && target.health_left < 1) echo += ' and it dies<br>';
		else if (debug) echo += '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// On Death
		// - Must not be jammed or frozen!
		if (t == 'player') {
			var players = ['player','cpu'];
		} else {
			var players = ['cpu','player'];
		}
		var types = ['assaults','structures'];

		for (var player_key = 0, p_len = players.length; player_key < p_len; player_key++) {
			var player_val = players[player_key];
			for (var type_key = 0, t_len = types.length; type_key < t_len; type_key++) {
				var type_val = types[type_key];
				var field_x_units = field[player_val][type_val];
				for (var unit_key = 0, unit_len = field_x_units.length; unit_key < unit_len; unit_key++) {
					var current_unit = field_x_units[unit_key];
					if(!current_unit) continue;

					// Prevent looping
					if (current_unit == src_card) continue;

					// Check if dead, activate on death skills
					if (current_unit.health_left < 1) activation_skills(current_unit, 'died');
				}
			}
		}
	}

	// Regenerate
	regenerate();
}

// Split
// - No target
var split_skill = function (src_card, skill) {
	if (skill.id != 'split') return;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var summon_id = src_card.id;
	var summoned_card = get_card_by_id(summon_id);
	summoned_card.p = p;
	if (is_assault(summon_id)) summoned_card.key = field[p]['assaults'].length;
	else if (is_structure(summon_id)) summoned_card.key = field[p]['structures'].length;

	// Skill achievement counting
	if (src_card.p == 'player') achievement_skill.push(skill.id);

	if (debug) echo += debug_name(src_card) + ' splits &raquo; ' + debug_name(summoned_card) + '<br>';
	play_card(summoned_card, p, o, 1);
}

// Strike
// - Can target specific faction
// - Interceptable
// - Targets enemy assaults
// - Can be chaosed
// - Can be evaded
// - Can be paybacked
// - Can be fusioned
// - Must calculate enfeeble/protect
// - Can be augmented
var strike = function (src_card, skill) {
	if (skill.id != 'strike') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var strike = skill.x;
	var augment = src_card.augmented;

	var all = skill.all;

	// Check Chaos
	if (src_card.chaosed) {
		t = p;
//		if (debug) echo += debug_name(src_card) + ' is chaosed!<br>';
		var field_x_assaults = field[p]['assaults'];
	} else {
		t = o;
		var field_x_assaults = field[o]['assaults'];
	}

	var targets = [];
	for (var key = 0, len = field_x_assaults.length; key < len; key++) {
		var target = field_x_assaults[key];
		if( target.isAlive()
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		var interceptors = targets;
		targets = choose_random_target(targets);
		var original_target = targets[0];

		// Check Intercept
		// - Cannot intercept chaosed strike
		if (t != p) {
			var intercept_targets = [];
			for (var key = 0, len = interceptors.length; key < len; key++) {
				var intercept_target = interceptors[key];
				if( intercept_target.canIntercept(original_target) ) {
					intercept_targets[intercept_targets.length] = intercept_target;
					break;
				}
			}

			if (intercept_targets.length) {
				targets = intercept_targets;
				if (debug) echo += debug_name(src_card) + ' strikes ' + debug_name(original_target) + ' but ' + debug_name(targets[0]) + ' intercepts!<br>';

				// Skill achievement counting
				if (targets[0]['p'] == 'player') achievement_skill.push('intercept');
			}
		}
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	var strike_paybacks = [];
	var strike_deaths = [];
	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		// Check Evade
		// - Cannot evade chaosed strike
		// - 50% proc
		if (t != p && target.skill.evade && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('evade');

			if (debug) echo += debug_name(src_card) + ' strikes ' + debug_name(target) + ' but it evades!<br>';
			continue;
		}

		var strike_damage = 0 + strike;

		if (debug) echo += '<u>(Strike: +' + strike_damage;

		// Check Protect/Enfeeble
		var enfeeble = 0;
		if (target.enfeebled) enfeeble = target.enfeebled;
		var protect = false;
		if (target.protected) protect = target.protected;

		if (src_card.fusion) {
			if (debug) echo += ' Fusion: +' + strike_damage;
			strike_damage *= 2;
		}

		strike_damage += 0 + enfeeble;
		if (debug && enfeeble) echo += ' Enfeeble: +' + enfeeble;

		strike_damage -= protect;
		if (debug && protect) echo += ' Protect: -' + protect;

		if (augment && augment > 0) strike_damage += augment;
		if (augment && augment > 0 && debug) echo += ' Augment: +' + augment;

		if (strike_damage < 0) strike_damage = 0;
		if (debug) echo += ') = ' + strike_damage + ' damage</u><br>';

		do_damage (target, strike_damage);

		if (debug) echo += debug_name(src_card) + ' strikes ' + debug_name(target) + ' for ' + strike_damage + ' damage';
		if (debug && target.health_left < 1) echo += ' and it dies<br>';
		else if (debug) echo += '<br>';

		if (target.skill.payback) strike_paybacks.push(key);
		if (target.health_left < 1) strike_deaths.push(key);

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}
	}

	// Check Payback
	// - Cannot payback chaosed strike
	// - source must be an assault
	// - source must be alive
	// - 50% proc
	// - Must calculate enfeeble/protect
	if (t != p && src_card.isAssault() && src_card.health_left > 0) {
		for (var key = 0, len = strike_paybacks.length; key < len; key++) {
			var target = targets[strike_paybacks[key]];

			if (src_card.health_left > 0 && roll_proc()) {

				strike_damage = strike;

				if (debug) echo += '<u>strike damage = ' + strike_damage + '</u><br>';

				// Check Protect/Enfeeble
				var enfeeble = 0;
				if (src_card.enfeebled) enfeeble = src_card.enfeebled;
				var protect = false;
				if (src_card.protected) protect = src_card.protected;

				if (debug) echo += '<u>(Strike: +' + strike_damage;

				strike_damage += 0 + enfeeble;
				if (debug && enfeeble) echo += ' Enfeeble: +' + enfeeble;

				strike_damage -= protect;
				if (debug && protect) echo += ' Protect: -' + protect;

				if (augment && augment > 0) strike_damage += augment;
				if (augment && augment > 0 && debug) echo += ' Augment: +' + augment;

				if (strike_damage < 0) strike_damage = 0;
				if (debug) echo += ') = ' + strike_damage + ' damage</u><br>';

				do_damage (src_card, strike_damage);

				// Skill achievement counting
				if (target.p == 'player') achievement_skill.push('payback');

				if (debug) echo += debug_name(target) + ' paybacks strike on ' + debug_name(src_card) + ' for ' + strike_damage + ' damage';
				if (debug && src_card.health_left < 1) echo += ' and it dies<br>';
				else if (debug) echo += '<br>';
			}
		}
	}

	// On death
	for (var key = 0, len = strike_deaths.length; key < len; key++) {
		var current_assault = targets[strike_deaths[key]];
		activation_skills(current_assault, 'died');
	}

	// Regenerate
	regenerate();
}

// Summon
// - No target
var summon = function (src_card, skill) {
	if (skill.id != 'summon') return;

	var p = get_p(src_card);
	var o = get_o(src_card);

	// Summon Limit
	//   29 + decksize
	//   does not apply to summon on play/death/kill/attacked
	if (!skill.played) {
		if (number_of_summons[p] < cache_player_deck.deck.length + 29) {
			number_of_summons[p]++;
		} else {
			return;
		}
	}

	var summon_id = skill.x;

	// Haunt battleground effect - summon random Bloodthirsty assault on death
	if (skill.x == 'haunt') {
		// Get random bloodthirsty assault card
		var random_assault = Math.round(Math.random() * 1999);
		if (random_assault > 999) random_assault += 3000;
		var random_card = get_slim_card_by_id(random_assault);
		while (!random_card.name || !random_card.set || random_card.set == '9999' || random_card.type != 3) {
			random_assault = Math.round(Math.random() * 1999);
			if (random_assault > 999) random_assault += 3000;
			random_card = get_slim_card_by_id(random_assault);
		}

		summon_id = random_assault;
	}

	var summoned_card = get_card_by_id(summon_id);
	summoned_card.p = p;

	if (is_assault(summon_id)) summoned_card.key = field[p]['assaults'].length;
	else if (is_structure(summon_id)) summoned_card.key = field[p]['structures'].length;

	// Skill achievement counting
	if (src_card.p == 'player') achievement_skill.push(skill.id);

	if (debug) echo += debug_name(src_card) + ' summons ' + debug_name(summoned_card) + '<br>';
	if (debug && number_of_summons[p] == cache_player_deck.deck.length + 29) echo += '** Summon limit of ' + (cache_player_deck.deck.length + 29) + ' reached. Summon will no longer activate.<br>';

	play_card(summoned_card, p, o, 1);
	
}

// Supply
// - Targets allied non-diseased, damaged assaults in adjacent slots
// - Can be tributed
// - Cannot target "all"
// - Increases attack too during Invigorate battleground effect
// - Can be augmented
// - Can be emulated
var supply = function (src_card, skill) {
	if (skill.id != 'supply') return;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var supply = skill.x;
	var augment = src_card.augmented;
	if (augment && augment > 0) {
		supply += augment;
	}

	var field_p_assaults = field[p]['assaults'];

	var targets = [];
	for (var key = 0, len = field_p_assaults.length; key < len; key++) {
		var target = field_p_assaults[key];
		if(target.isAlive()
		&& target.isDamaged()
		&& !target.diseased
		&& !target.phased
		&& target.isAdjacent(src_card) ) {
			targets[targets.length] = target;
		}
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		var supply_amt = supply;

		if (supply_amt > target.health - target.health_left) supply_amt = target.health - target.health_left;
		target.health_left += supply_amt;
		if (augment && augment > 0 && debug) echo += '<u>(Augment: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' supplies ' + debug_name(target) + ' by ' + supply_amt + '<br>';

		// Invigorate
		if (battleground == 'invigorate' && !target.sundered) {
			target.attack_berserk += supply_amt;
			if (debug) echo += debug_name(target) + ' invigorates by ' + supply_amt + '<br>';
		}

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Emulate
		// - emulator must be damaged
		// - emulator must be alive
		// - emulator must not be diseased
		var opp_card = get_assault_by_key(field[o]['assaults'], target.key);
		if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 && opp_card.health_left < opp_card.health && !opp_card.diseased) {
			// Skill achievement counting
			if (src_card.p == 'cpu') achievement_skill.push('emulate');

			var supply_amt = supply;
			if (supply_amt > opp_card.health - opp_card.health_left) supply_amt = opp_card.health - opp_card.health_left;
			opp_card.health_left += supply_amt;
			if (debug) echo += debug_name(opp_card) + ' emulates supply by ' + supply_amt + '<br>';

			// Invigorate
			if (battleground == 'invigorate' && !opp_card.sundered) {
				opp_card.attack_berserk += supply_amt;
				if (debug) echo += debug_name(opp_card) + ' invigorates by ' + supply_amt + '<br>';
			}
		}

		// Check Tribute
		// - source must be different than target
		// - source must be an assault
		// - source must be alive
		// - source must be damaged
		// - source must not be diseased
		// - 50% proc
		if (src_card.isAssault() && target.key != src_card.key && target.skill.tribute && !src_card.diseased && src_card.health_left > 0 && src_card.health_left < src_card.health && roll_proc()) {
			var supply_amt = supply;

			// Skill achievement counting
			if (src_card.p == 'player') achievement_skill.push('tribute');

			if (supply_amt > src_card.health - src_card.health_left) supply_amt = src_card.health - src_card.health_left;
			src_card.health_left += supply_amt;
			if (debug) echo += debug_name(target) + ' tributes supply on ' + debug_name(src_card) + ' by ' + supply_amt + '<br>';

			// Invigorate
			if (battleground == 'invigorate' && !src_card.sundered) {
				src_card.attack_berserk += supply_amt;
				if (debug) echo += debug_name(src_card) + ' invigorates by ' + supply_amt + '<br>';
			}

			// Check Emulate
			// - emulator must be damaged
			// - emulator must be alive
			// - emulator must not be diseased
			var opp_card = get_assault_by_key(field[o]['assaults'], src_card.key);
			if (opp_card && opp_card.skill && opp_card.skill.emulate && opp_card.health_left > 0 && opp_card.health_left < opp_card.health && !opp_card.diseased) {
				// Skill achievement counting
				if (src_card.p == 'cpu') achievement_skill.push('emulate');

				var supply_amt = supply;
				if (supply_amt > opp_card.health - opp_card.health_left) supply_amt = opp_card.health - opp_card.health_left;
				opp_card.health_left += supply_amt;
				if (debug) echo += debug_name(opp_card) + ' emulates supply by ' + supply_amt + '<br>';

				// Invigorate
				if (battleground == 'invigorate' && !opp_card.sundered) {
					opp_card.attack_berserk += supply_amt;
					if (debug) echo += debug_name(opp_card) + ' invigorates by ' + supply_amt + '<br>';
				}
			}
		}
	}
}

// Weaken
// - Can target specific faction
// - Interceptable
// - Targets active_next_turn, unjammed, unimmobilized, unfrozen, unstunned enemy assaults with attack > 0
// - Target must not have attacked already this turn (unless chaosed!)
// - Can be chaosed
// - Can be evaded
// - Can be paybacked
// - Can be fusioned
// - Can be augmented
// - Weaken on Attacked cannot target the attacker!
// - Weaken on Death / on Attacked cannot target active_next_turn, only active!
var weaken = function (src_card, skill) {
	if (skill.id != 'weaken') return;

	var faction = skill.y;

	var p = get_p(src_card);
	var o = get_o(src_card);

	var weaken = skill.x;
	var augment = src_card.augmented;
	if (augment && augment > 0) {
		weaken += augment;
	}
	if (src_card.fusion) {
		weaken *= 2;
	}

	var all = skill.all;

	// Check Chaos
	if (src_card.chaosed) {
		t = p;
//		if (debug) echo += debug_name(src_card) + ' is chaosed!<br>';
		var field_x_assaults = field[p]['assaults'];
	} else {
		t = o;
		var field_x_assaults = field[o]['assaults'];
	}

	var targets = [];
	var filter_on_death_flag = skill.died;
	var filter_active_turn_flag = ((filter_on_death_flag && field.whose_turn == o) || skill.attacked);

	for (var key = 0, len = field_x_assaults.length; key < len; key++) {
		var target = field_x_assaults[key];
		if (skill.attacked && target.attacking_now) continue;
		if (!target.isAlive()) continue;
		if (filter_active_turn_flag) {
			if (!target.isActive()) continue;
		} else {
			if (!target.isActiveNextTurn()) continue;
		}
		if (skill.attacked && t == p) {
			if (!target.hasNotAttackedAlready3(field.current_attacker)) continue;
		} else if (filter_on_death_flag) {
			if (!target.hasNotAttackedAlready2(src_card)) continue;
		} else {
			if (!!target.attacked_already && t != p) continue;
		}
		if(target.isUnjammed()
		&& !target.immobilized
		&& !target.stunned
		&& target.hasAttack()
		&& target.isInFaction(faction) ) {
			targets[targets.length] = target;
		}
	}

	// No Targets
	if (!targets.length) return;

	// Check All
	if (!all) {
		var interceptors = targets;
		targets = choose_random_target(targets);
		var original_target = targets[0];

		// Check Intercept
		// - Cannot intercept chaosed strike
		if (t != p) {
			var intercept_targets = [];
			for (var key = 0, len = interceptors.length; key < len; key++) {
				var intercept_target = interceptors[key];
				if( intercept_target.canIntercept(original_target) ) {
					intercept_targets[intercept_targets.length] = intercept_target;
					break;
				}
			}

			if (intercept_targets.length) {
				targets = intercept_targets;
				if (debug) echo += debug_name(src_card) + ' weakens ' + debug_name(original_target) + ' but ' + debug_name(targets[0]) + ' intercepts!<br>';

				// Skill achievement counting
				if (targets[0]['p'] == 'player') achievement_skill.push('intercept');
			}
		}
	}

	// One or more successful activations counts as only one activation for achievement purposes!
	var achievement_skill_first = true;

	for (var key = 0, len = targets.length; key < len; key++) {
		var target = targets[key];

		// Check Evade
		// - Cannot evade chaosed weaken
		// - 50% proc
		if (t != p && target.skill.evade && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('evade');

			if (debug) echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' but it evades!<br>';
			continue;
		}

		target.attack_weaken += weaken;
		if (augment && augment > 0 && debug) echo += '<u>(Augment: +' + augment + ')</u><br>';
		if (debug) echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' by ' + weaken + '<br>';

		// Skill achievement counting
		if (src_card.p == 'player' && achievement_skill_first) {
			achievement_skill.push(skill.id);
			achievement_skill_first = false;
		}

		// Check Payback
		// - source must be an assault
		// - source must be alive
		// - Source must be active_next_turn, unjammed, unimmobilized, unfrozen, unstunned with attack > 0
		// - source must not have attacked already this turn
		// - Cannot payback chaosed weaken
		// - Can evade paypacked weaken
		// - 50% proc
		if (t != p && target.skill.payback && src_card.isAssault() && src_card.health_left > 0 &&
		src_card.attack+src_card.attack_rally-src_card.attack_weaken+src_card.attack_berserk > 0 &&
		!src_card.immobilized && !src_card.jammed && !src_card.stunned && !src_card.frozen && (src_card.timer <= 1 || src_card.blitz) && roll_proc()) {

			// Skill achievement counting
			if (target.p == 'player') achievement_skill.push('payback');

			src_card.attack_weaken += weaken;
			if (debug) echo += debug_name(target) + ' paybacks weaken on ' + debug_name(src_card) + ' by ' + weaken + '<br>';

		}
	}
}

// Defensive Skills

// Regenerate
// - Must be dead
// - Must not be diseased
// - 50% proc
// - Increases attack too during Invigorate battleground effect
var regenerate = function () {
	for (var key = 0, len = just_died.length; key < len; key++) {
		var current_unit = just_died[key];
		if (!current_unit.diseased && current_unit.skill.regenerate && !current_unit.regen_already) {
			if (roll_proc()) {
				var regenerate_amt = current_unit.skill.regenerate.x;
				current_unit.health_left = regenerate_amt;
				if (debug) echo += debug_name(current_unit) + ' regenerates with ' + regenerate_amt + ' health<br>';

				// Invigorate
				if (battleground == 'invigorate' && !current_unit.sundered) {
					current_unit.attack_berserk += regenerate_amt;
					if (debug) echo += debug_name(current_unit) + ' invigorates by ' + regenerate_amt + '<br>';
				}

				// Skill achievement counting
				if (current_unit.p == 'player') achievement_skill.push('regenerate');

				// Allow to run another "on death" event
				current_unit.died_already = false;

				// Mark this card as having regenerated at least once
				current_unit.regen_once = true;
			} else {
				// Mark as failed to regen already (don't let it attempt to regenerate again after failing once!)
				current_unit.regen_already = true;
				if (current_unit.isAssault()) field[current_unit.p]['died_this_turn'] += 1;
				
				if (cache_achievement) {
					// Kill achievement counting
					if (current_unit.p == 'cpu' && !current_unit.summoned) achievement_killed.push(get_slim_card_by_id(current_unit.id,1));
				}
			}
		} else {
			if (current_unit.isAssault()) field[current_unit.p]['died_this_turn'] += 1;

			if (cache_achievement) {
				// Kill achievement counting
				if (current_unit.p == 'cpu' && !current_unit.summoned) achievement_killed.push(get_slim_card_by_id(current_unit.id,1));
			}

		}
	}
	// Reset list
	just_died = [];
}

// Refresh
// - Must not be dead
// - Must have taken some damage
// - Must not be diseased
// - Structures cannot refresh during Impenetrable battleground effect
// - Increases attack too during Invigorate battleground effect
var refresh = function (p) {
	var types = ['assaults','structures'];
	if (battleground == 'impenetrable') types = ['assaults'];

	var player_val = p;
	for (var type_key = 0, t_len = types.length; type_key < t_len; type_key++) {
		var type_val = types[type_key];
		var field_x_units = field[player_val][type_val];
		for (var unit_key = 0, unit_len = field_x_units.length; unit_key < unit_len; unit_key++) {
			var current_unit = field_x_units[unit_key];
			if(!current_unit) continue;

			if (current_unit.skill && current_unit.skill.refresh && current_unit.health_left > 0 && current_unit.health_left < current_unit.health && !current_unit.diseased) {
				var heal_amt = current_unit.health - current_unit.health_left;
				current_unit.health_left = current_unit.health;
				if (debug) echo += debug_name(current_unit) + ' refreshes<br>';

				// Invigorate
				if (battleground == 'invigorate' && !current_unit.sundered) {
					current_unit.attack_berserk += heal_amt;
					if (debug) echo += debug_name(current_unit) + ' invigorates by ' + heal_amt + '<br>';
				}

				// Skill achievement counting
				if (current_unit.p == 'player') achievement_skill.push('refresh');
			}
		}
	}
	var current_commander = field[player_val]['commander'];
	if (current_commander.skill && current_commander.skill.refresh && current_commander.health_left > 0 && current_commander.health_left < current_commander.health && !current_commander.diseased) {
		current_commander.health_left = current_commander.health;
		if (debug) echo += debug_name(current_commander) + ' refreshes<br>';

		// Skill achievement counting
		if (current_commander.p == 'player') achievement_skill.push('refresh');
	}
}

// Legion
// - Must not be dead
// - Must have taken some damage to heal
// - Must not be diseased to heal
// - Must be active to rally
// - When healing, increases attack too during Invigorate battleground effect
// - Activates if at least one adjacent ally is alive and from the same faction
// - Activates 2x strength if both adjacent allies are alive and from the same faction
var legion = function (field_p_assaults) {
	for (var unit_key = 0, unit_len = field_p_assaults.length; unit_key < unit_len; unit_key++) {
		var current_unit = field_p_assaults[unit_key];
		if(!current_unit) continue;

		if (current_unit.skill && current_unit.skill.legion && current_unit.health_left > 0) {

			// Check adjacent allies to calculate strength of legion skill
			var legion_val = 0;
			var legion_multiplier = 0;
			var left_assault = false;
			var right_assault = false;
			var current_unit_key = current_unit.key;
			if (current_unit_key > 0) {
				left_assault = get_assault_by_key(field_p_assaults, current_unit_key - 1);
			}
			right_assault = get_assault_by_key(field_p_assaults, current_unit_key + 1);
			if (left_assault && left_assault.health_left > 0 && left_assault.type == current_unit.type) legion_multiplier++;
			if (right_assault && right_assault.health_left > 0 && right_assault.type == current_unit.type) legion_multiplier++;
			if (legion_multiplier) {
				legion_val = current_unit.skill.legion.x * legion_multiplier;
			}

			if (legion_val) {
				var legion_success = false;

				// Legion healing
				if (current_unit.health_left < current_unit.health && !current_unit.diseased) {

					var heal_amt = legion_val;
					if (heal_amt > current_unit.health - current_unit.health_left) heal_amt = current_unit.health - current_unit.health_left;
					current_unit.health_left += heal_amt;
					if (debug) echo += debug_name(current_unit) + ' legion-heals itself by ' + heal_amt + '<br>';

					// Invigorate
					if (battleground == 'invigorate' && !current_unit.sundered) {
						current_unit.attack_berserk += heal_amt;
						if (debug) echo += debug_name(current_unit) + ' invigorates by ' + heal_amt + '<br>';
					}

					// Skill achievement counting
					legion_success = true;
				}
				// Legion rallying
				if (!current_unit.sundered) {
					if (current_unit.timer == 0 || current_unit.blitz) {
	
						current_unit.attack_rally += legion_val;
						if (debug) echo += debug_name(current_unit) + ' legion-rallies itself by ' + legion_val + '<br>';
	
						// Skill achievement counting
						legion_success = true;
					}
				}

				// Skill achievement counting
				if (current_unit.p == 'player' && legion_success) achievement_skill.push('legion');

			}
		}
	}
}

// Activation Skills
// - Must traverse through skills from top to bottom
var activation_skills = function (src_card, on, mimic_skills) {

	var skills = src_card.skill;

	// If mimicking, run through skills of mimicked unit, not the skills of the source card!
	if (mimic_skills) {
		skills = mimic_skills;
	}

	if (on == 'died') {
		// Can only run On Death skills once per regeneration
		if (src_card.died_already) {
			return;
		}

		// Mark as run On Death already
		src_card.died_already = true;
	}

	for (var key in skills) {
		var skill = skills[key];

		if (!skill) continue;

		// On Play
		switch (on) {
			case 'played':
				// Only On Play skills
				if (!skill.played) {
					continue;
				}
				break;

			// On Death
			case 'died':
				// Only On Death skills
				if (!skill.died) {
					continue;
				}
				// Do not activate skills if jammed (note that frozen units can still activate on death!)
				if (src_card.jammed) {
					continue;
				}
				break;

			// On Attacked
			case 'attacked':
				// Only On Attacked skills
				if (!skill.attacked) {
					continue;
				}
				// Do not activate skills if jammed (note that frozen units can still activate on attacked!)
				if (src_card.jammed) {
					continue;
				}
				break;

			// On Kill
			case 'kill':
				// Only On Kill skills
				if (!skill.kill) {
					continue;
				}
				break;

			case 'normal':
			default:
				// Ignore on Death, On Play, On Attacked, On Kill
				if (skill.attacked || skill.died || skill.played || skill.kill) {
					continue;
				}
				// Do not activate skills if jammed or frozen (via Paybacked Jam or Jam on Death)
				if (src_card.jammed || src_card.frozen) {
					continue;
				}
		}

		// Delegate to skill functions
		var id = skill.id;
		switch (id) {
			case 'augment':
				augment(src_card, skill);
				break;
			case 'backfire':
				backfire(src_card, skill);
				break;
			case 'chaos':
				chaos(src_card, skill);
				break;
			case 'cleanse':
				cleanse(src_card, skill);
				break;
			case 'enfeeble':
				enfeeble(src_card, skill);
				break;
			case 'freeze':
				freeze(src_card, skill);
				break;
			case 'fusion':
				fusion(src_card, skill);
				break;
			case 'heal':
				heal(src_card, skill);
				break;
			case 'infuse':
				infuse(src_card, skill);
				break;
			case 'jam':
				jam(src_card, skill);
				break;
			case 'mimic':
				mimic(src_card, skill);
				break;
			case 'protect':
				protect(src_card, skill);
				break;
			case 'rally':
				rally(src_card, skill);
				break;
			case 'repair':
				repair(src_card, skill);
				break;
			case 'rush':
				rush(src_card, skill);
				break;
			case 'shock':
				shock(src_card, skill);
				break;
			case 'siege':
				siege(src_card, skill);
				break;
			case 'split':
				split_skill(src_card, skill);
				break;
			case 'strike':
				strike(src_card, skill);
				break;
			case 'supply':
				supply(src_card, skill);
				break;
			case 'summon':
				summon(src_card, skill);
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
	if (!getexactorder || !getordered) shuffle(deck.player.deck);
	if (!getexactorder2 || !getordered2) shuffle(deck.cpu.deck);

	// Initialize player Commander on the field
	var field_player = field.player;
	var field_player_commander = get_card_by_id(deck.player.commander);
	field_player.commander = field_player_commander;
	field_player_commander.p = 'player';
	field_player_commander.health_left = field_player_commander.health;
	// Initialize cpu Commander on the field
	var field_cpu = field.cpu;
	var field_cpu_commander = get_card_by_id(deck.cpu.commander);
	field_cpu.commander = field_cpu_commander;
	field_cpu_commander.p = 'cpu';
	field_cpu_commander.health_left = field_cpu_commander.health;

	// If Quest, remove any faction restrictions on Commander skills!
	if (getquest) {
		var c_skill = field_cpu_commander.skill;
		for (var key in c_skill) {
			var current_skill = c_skill[key];
			if (current_skill.y != undefined) delete(current_skill.y);
		}
	}

	// Set up battleground effects
	if (battleground) {
		switch (battleground) {
			// Time Surge
			case 'time_surge':
				var p_skill = field_player_commander.skill;
				var c_skill = field_cpu_commander.skill;
				p_skill.rush = [];
				p_skill.rush.id = 'rush';
				p_skill.rush.x = 1;
				c_skill.rush = [];
				c_skill.rush.id = 'rush';
				c_skill.rush.x = 1;
				break;
			// Friendly Fire
			case 'friendly_fire':
				var p_skill = field_player_commander.skill;
				var c_skill = field_cpu_commander.skill;
				p_skill.chaos = [];
				p_skill.chaos.id = 'chaos';
				p_skill.chaos.x = 1;
				p_skill.chaos.all = 1;
				c_skill.chaos = [];
				c_skill.chaos.id = 'chaos';
				c_skill.chaos.x = 1;
				c_skill.chaos.all = 1;
				break;
			// Chilling Touch
			case 'commander_freeze':
				var p_skill = field_player_commander.skill;
				var c_skill = field_cpu_commander.skill;
				p_skill.freeze = [];
				p_skill.freeze.id = 'freeze';
				c_skill.freeze = [];
				c_skill.freeze.id = 'freeze';
				break;
			// Decrepit
			case 'enfeeble_all':
				var p_skill = field_player_commander.skill;
				var c_skill = field_cpu_commander.skill;
				p_skill.enfeeble = [];
				p_skill.enfeeble.id = 'enfeeble';
				p_skill.enfeeble.x = 1;
				p_skill.enfeeble.all = 1;
				c_skill.enfeeble = [];
				c_skill.enfeeble.id = 'enfeeble';
				c_skill.enfeeble.x = 1;
				c_skill.enfeeble.all = 1;
				break;
			// Forcefield
			case 'protect_all':
				var p_skill = field_player_commander.skill;
				var c_skill = field_cpu_commander.skill;
				p_skill.protect = [];
				p_skill.protect.id = 'protect';
				p_skill.protect.x = 1;
				p_skill.protect.all = 1;
				c_skill.protect = [];
				c_skill.protect.id = 'protect';
				c_skill.protect.x = 1;
				c_skill.protect.all = 1;
				break;
		}
	}

	// Set up players
	var first_player = 'player';
	var second_player = 'cpu';
	if (surge) {
		first_player = 'cpu';
		second_player = 'player';
	}

	just_died = [];

	// Start simulation
	for (turn = true; turn <= max_turns + 1; turn++) {
		if (turn == max_turns + 1) {
			// WINNING CONDITION
			if (getraid) return 1;
			else return 'draw';
		}

		// Calculate ANP
		points_this_turn = false;

		// Turn achievement counter
		achievement_turns = turn;

		if (turn % 2) {
			var p = first_player;
			var o = second_player;
		} else {
			var p = second_player;
			var o = first_player;
		}

		// Allow functions to learn whose turn it is!
		field.whose_turn = p;

		var field_p = field[p];
		var field_p_commander = field_p.commander;
		var field_p_assaults = field_p.assaults;
		var field_p_structures = field_p.structures;

		var field_o = field[o];
		var field_o_commander = field_o.commander;
		var field_o_assaults = field_o.assaults;
		var field_o_structures = field_o.structures;

		var deck_p = deck[p];
		var deck_p_deck = deck_p.deck;
		var deck_p_ordered = deck_p.ordered;

		field_p.died_this_turn = false;
		field_o.died_this_turn = false;

		if (debug) echo += '<u>Turn ' + turn + ' begins for ' + debug_name(field_p_commander) + '</u><br>';

		// Count down timer on your field
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];

			// Check Freeze status
			if (current_assault.frozen) {
				if (debug) echo += debug_name(current_assault) + ' is frozen. Cannot reduce timer!<br>';
			} else {
				if (turn <= 3 && gettournament) {
					// Skip timer tick down
					if (current_assault.timer > 0) {
						if (debug) echo += debug_name(current_assault) + ' does not reduce its timer due to tournament mode<br>';
					}
				} else if (current_assault.timer > 0) {
					current_assault.timer--;
					if (debug) echo += debug_name(current_assault) + ' reduces its timer<br>';
				}
			}
		}
		for (var key = 0, len = field_p_structures.length; key < len; key++) {
			var current_structure = field_p_structures[key];

			// Check Freeze status
			if (current_structure.frozen) {
				if (debug) echo += debug_name(current_structure) + ' is frozen. Cannot reduce timer!<br>';
			} else {
				if (turn <= 3 && gettournament) {
					// Skip timer tick down
					if (current_structure.timer > 0) {
						if (debug) echo += debug_name(current_structure) + ' does not reduce its timer due to tournament mode<br>';
					}
				} else if (current_structure.timer > 0) {
					current_structure.timer--;
					if (debug) echo += debug_name(current_structure) + ' reduces its timer<br>';
				}
			}
		}

		// Remove from your field: Enfeeble, Protect
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];

			current_assault.enfeebled = 0;
			current_assault.protected = 0;
		}

		// Poison damage
		var poison_deaths = [];
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];

			if (current_assault.poisoned) {
				do_damage(current_assault, current_assault.poisoned);
				if (debug) echo += debug_name(current_assault) + ' takes ' + current_assault.poisoned + ' poison damage';
				if (debug && current_assault.health_left < 1) echo += ' and it dies<br>';
				else if (debug) echo += '<br>';

				if (current_assault.health_left < 1) poison_deaths.push(key);
			}
		}

		// On death
		for (var key = 0, len = poison_deaths.length; key < len; key++) {
			var current_assault = field_p_assaults[poison_deaths[key]];
			activation_skills(current_assault, 'died');
		}

		// Regenerate any dead poisoned assaults
		regenerate();

		// Clone Project
		// - Select random active, unjammed, unfrozen assault unit
		if (battleground == 'clone_project'
		|| (battleground == 'split_five' && (turn == 9 || turn == 10))) {
			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if ( target.isAlive()
				&& target.isActive() ) {
					targets[targets.length] = target;
				}
			}

			if (targets.length) {
				targets = choose_random_target(targets);
				targets[0]['skill']['split'] = [];
				targets[0]['skill']['split']['id'] = 'split';

				if (debug) echo += debug_name(targets[0]) + ' gains Split skill until end of turn<br>';
			}
		}

		// Deck not empty yet
		if (deck_p_deck[0]) {

			// Prepare 3-card hand
			var hand = [];
			hand[hand.length] = deck_p_deck[0];
			if (deck_p_deck[1]) hand[hand.length] = deck_p_deck[1];
			if (deck_p_deck[2]) hand[hand.length] = deck_p_deck[2];

			var card_picked = 0;

			if (deck_p_ordered) {
				// Play highest priority card
				var played = false;
				for (var k = false, deck_len = deck_p_ordered.length; k < deck_len; k++) {
					var v = deck_p_ordered[k];

					// Get advanced priority
					var priority_id = 0;
					if (isNaN(v) && v.indexOf(',') != -1) {
						priority_id = v.split(',');
						v = parseInt(priority_id[0]);
						priority_id = parseInt(priority_id[1]);
					}

					for (var a = false, hand_len = hand.length; a < hand_len; a++) {
						var b = hand[a];

						// Compare advanced priority field
						if (priority_id > 0) {
							if (!isNaN(b)) continue; // This card has no priority notated; skip to next card
							var b_priority = b.split(',');
							b = b_priority[0];
							b_priority = parseInt(b_priority[1]);
							if (priority_id == b_priority) {
								// Remove from deck
								var key = k;
								for (var len = deck_p_ordered.length-1; key < len; key++) {
									deck_p_ordered[key] = deck_p_ordered[key+1];
								}
								deck_p_ordered.length = key;
								card_picked = a;

								played = true;
								play_card(get_card_by_id(b), p, o);
								break;
							}

						// Regular ordered priority
						} else if (v == b) {
							// Remove from deck
							var key = k;
							for (var len = deck_p_ordered.length-1; key < len; key++) {
								deck_p_ordered[key] = deck_p_ordered[key+1];
							}
							deck_p_ordered.length = key;
							card_picked = a;

							played = true;
							play_card(get_card_by_id(v), p, o);
							break;
						}
					}
					if (played) break;
				}
			} else {
				// Play first card in hand
				play_card(get_card_by_id(deck_p_deck[0]), p, o);
			}

			// WINNING CONDITION (in case of shock action cards or shock on play!)
			if (field_o_commander.health_left < 1) {
				return p == 'player';
			}
			if (field_p_commander.health_left < 1) {
				return p == 'cpu';
			}

			// Recharge
			// - 50% proc
			var temp_id = deck_p_deck[card_picked];
			var temp_instance = get_card_by_id(temp_id);
			if (temp_instance && temp_instance.skill.recharge && roll_proc()) {
				// Return card to bottom of deck
				deck_p_deck[deck_p_deck.length] = temp_id;
				if (deck_p_ordered) deck_p_ordered[deck_p_ordered.length] = temp_id;

				if (debug) echo += debug_name(temp_instance) + ' activates Recharge!<br>';
			}

			// Remove from deck
			var key = card_picked;
			for (var len = deck_p_deck.length-1; key < len; key++) {
				deck_p_deck[key] = deck_p_deck[key+1];
			}
			deck_p_deck.length = key;
		} else {
			// Deck is empty (cannot play a card!)
			// Legion on your assault units
			legion(field_p_assaults);
		}

		// Artillery Strike
		// - On the Attacking Player's 5th turn, that Player's Commander gains
		// - the skill "Strike All 3" (replaces any other instance of Strike)
		if (battleground == 'artillery_strike' && p == 'player' && (turn == 9 || turn == 10)) {
			var p_skill = field_player_commander.skill;
			p_skill.strike = [];
			p_skill.strike.id = 'strike';
			p_skill.strike.x = 3;
			p_skill.strike.all = 1;
		}

		// Commander
		// - activation skills
		activation_skills(field_p_commander);

		// WINNING CONDITION (in case of commander with shock skill!)
		if (field_o_commander.health_left < 1) {
			return p == 'player';
		}
		if (field_p_commander.health_left < 1) {
			return p == 'cpu';
		}

		// Genesis
		// - At the beginning of each Player's turn that Player's Commander gains
		//   the skill "Summon X" until end of turn (where X is a random Assault card)
		if (battleground == 'genesis') {
			var skill = [];
			skill.id = 'summon';

			// Get random assault card
			var random_assault = Math.round(Math.random() * 1999);
			if (random_assault > 999) random_assault += 3000;
			var random_card = get_slim_card_by_id(random_assault);
			while (!random_card.name || !random_card.set || random_card.set == '9999') {
				random_assault = Math.round(Math.random() * 1999);
				if (random_assault > 999) random_assault += 3000;
				random_card = get_slim_card_by_id(random_assault);
			}

			skill.x = random_assault;
			summon(field_p_commander, skill);
		}

		// Regenerate any dead poisoned assaults
		regenerate();

		// Structures
		// - activation skills
		for (var key = 0, len = field_p_structures.length; key < len; key++) {
			var current_structure = field_p_structures[key];
			if (current_structure && current_structure.timer < 1) {
				activation_skills(current_structure);
			}
		}

		// WINNING CONDITION (in case of structure with shock skill!)
		if (field_o_commander.health_left < 1) {
			return p == 'player';
		}
		if (field_p_commander.health_left < 1) {
			return p == 'cpu';
		}

		// Assaults
		assaults_not_done_yet = true;
		while (assaults_not_done_yet) {

			// Assume we're done, set this flag to 1 when discovered to be otherwise
			assaults_not_done_yet = false;

			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var current_assault = field_p_assaults[key];

				if (!current_assault) continue;

				// Check if attacked already
				if (current_assault.attacked_already) {
					continue;
				}

				// Check if dead
				if (current_assault.health_left < 1) {
					// This assault is already dead and can't do anything!
					continue;
				}

				// Check Timer
				if (current_assault.timer > 0) {
					// Check Blitz
					if (current_assault.blitz) {
					} else {
						// Mark as "attacked already"
						current_assault.attacked_already = true;
						continue;
					}
				}

				// Check jammed or frozen
				if (current_assault.frozen) {
					if (debug) echo += debug_name(current_assault) + ' is frozen and cannot attack<br>';
					// Mark as "attacked already"
					current_assault.attacked_already = true;
					continue;
				}
				if (current_assault.jammed) {
					if (debug) echo += debug_name(current_assault) + ' is jammed and cannot attack<br>';
					// Mark as "attacked already"
					current_assault.attacked_already = true;
					continue;
				}

				// We're not done yet!
				assaults_not_done_yet = true;

				// Activation skills
				activation_skills(current_assault);

				// If died from Paybacked Strike or Strike On Death, don't attack!
  				if (current_assault.health_left < 1) {
					// This assault is already dead and can't do anything!
					continue;
				}

				// Check attack
				// - check berserk rally and weaken
				if (current_assault.attack + current_assault.attack_rally - current_assault.attack_weaken + current_assault.attack_berserk < 1) {
					// Mark as "attacked already"
					current_assault.attacked_already = true;
					continue;
				}

				// Mark as "attacking now"
				current_assault.attacking_now = true;

				// Allow functions to learn who is attacking now!
				field.current_attacker = current_assault;

				// -- START ATTACK SEQUENCE --

				// Flurry
				// - 50% proc
				var flurry = 0;
				var flurry_to_be_proc = false;
				if (current_assault.skill.flurry && roll_proc()) {
					flurry = current_assault.skill.flurry.x;
					if (debug) echo += debug_name(current_assault) + ' activates flurry(' + flurry + ')<br>';

					// Assuming we are not immobilized, frozen, stunned, or jammed before we start attacking,
					// we will count flurry to have proc'ed!
					flurry_to_be_proc = true;
				}

				for (var number_of_attacks = 0; number_of_attacks < flurry + 1; number_of_attacks++) {

					// If attacker is dead, stop attacking!
					if (current_assault.health_left < 1) break;

					// Swipe
					var swipe = -99;
					var swipe_to_be_proc = false;
					if (field_o_assaults[key] && field_o_assaults[key]['health_left'] > 0 &&
					current_assault.skill.swipe) {
						swipe = -1;
						if (debug) echo += debug_name(current_assault) + ' activates swipe<br>';

						// Assuming we are not immobilized, frozen, stunned, or jammed and
						// the opposing target is not dead before we start attacking,
						// we will count swipe to have proc'ed!
						swipe_to_be_proc = true;
					}

					// loop through 3 swipe positions or just attack once if not swiping
					for (swipe = swipe; swipe == -99 || swipe <= 1; swipe++) {

						// If attacker is dead, stop attacking!
						if (current_assault.health_left < 1) break;

						// Determine target
						var swipe_key = key;
						if (swipe > -10) {
							swipe_key = parseInt(swipe) + parseInt(key);
						} else {
							swipe_key = key;
							swipe = 99;
						}

						if (field_o_assaults[swipe_key] && field_o_assaults[swipe_key]['health_left'] > 0 && !current_assault.skill.fear) {
							// Target exists and we're not going to Fear through it.
							var target = field_o_assaults[swipe_key];
						} else {
							// No target exists or we intend to Fear through it.

							// Check if Fear and Swipe
							if (swipe != 99 && current_assault.skill.fear) {
								// Fear/Swipe a Wall!
								if (get_wall(field_o_structures)) {
									var target = get_wall(field_o_structures);
									// Skill achievement counting
									if (target.p == 'player') achievement_skill.push('wall');
								// Fear/Swipe the commander!
								} else {
									var target = field_o_commander;
								}
							// Check if we attack a Wall
							// - Cannot be swiping
							// - Must get a pointer reference from get_wall function!
							// - If opposing card suddenly died before Swipe hits it, attack wall, then continue swiping.
							} else if ((swipe == 99 || swipe == 0) && get_wall(field_o_structures)) {
								var target = get_wall(field_o_structures);
								// Skill achievement counting
								if (target.p == 'player') achievement_skill.push('wall');
							// Check if we attack the enemy Commander
							// - Cannot be swiping
							// - If opposing card suddenly died before Swipe hits it, attack commander, then continue swiping.
							} else if (swipe == 99 || swipe == 0) {
								var target = field_o_commander;
							// We are attempting to swipe-attack an empty slot - let's try the next swipe target
							} else {
								continue;
							}
						}

						// Check if we are Immobilized
						if (current_assault.immobilized) {
							if (debug) echo += debug_name(current_assault) + ' is immobilized and cannot attack<br>';
							continue;
						}

						// Check if we are Stunned
						if (current_assault.stunned) {
							if (debug) echo += debug_name(current_assault) + ' is stunned and cannot attack<br>';
							continue;
						}

						// Check if we are Jammed
						if (current_assault.jammed) {
							if (debug) echo += debug_name(current_assault) + ' is jammed and cannot attack<br>';
							continue;
						}

						// Check if we are Frozen
						if (current_assault.frozen) {
							if (debug) echo += debug_name(current_assault) + ' is frozen and cannot attack<br>';
							continue;
						}

						// Skill achievement counting
						if (flurry_to_be_proc && current_assault.p == 'player') {
							flurry_to_be_proc = false;
							achievement_skill.push('flurry');
						}

						// Skill achievement counting
						if (swipe_to_be_proc && swipe != 99 && current_assault.p == 'player') {
							swipe_to_be_proc = false;
							achievement_skill.push('swipe');
						}

						// Check if enemy Flying procs or not
						// - check our Antiair and our Flying
						// - check High Skies battleground effect
						if (target.skill.flying && !current_assault.skill.antiair && !current_assault.skill.flying && (roll_proc() || battleground == 'high_skies')) {

							// Skill achievement counting
							if (target.p == 'player') achievement_skill.push('flying');

							if (debug) echo += debug_name(current_assault) + ' misses ' + target.name + '<br>';
							continue;
						}

						// -- CALCULATE DAMAGE --
						var damage = current_assault.attack;

						// Berserk
						var berserk = false;
						if (current_assault.attack_berserk) berserk = current_assault.attack_berserk;
						damage += berserk;

						// Rally
						var rally = 0;
						if (current_assault.attack_rally) rally = current_assault.attack_rally;
						damage += rally;

						// Weaken
						var weaken = false;
						if (current_assault.attack_weaken) weaken = current_assault.attack_weaken;
						damage -= weaken;

						if (debug) echo += '<u>(Attack: +' + current_assault.attack;
						if (debug && current_assault.attack_rally) echo += ' Rally: +' + current_assault.attack_rally;
						if (debug && current_assault.attack_weaken) echo += ' Weaken: -' + current_assault.attack_weaken;
						if (debug && current_assault.attack_berserk) echo += ' Berserk: +' + current_assault.attack_berserk;

						// Pierce
						var pierce = 0;
						if (current_assault.skill && current_assault.skill.pierce) pierce = current_assault.skill.pierce.x;

						// Armor
						var armor = 0;
						if (target.skill.armored) {
							armor = target.skill.armored.x;
							if (current_assault.skill && current_assault.skill.pierce) {
								if (pierce > armor) {
									pierce -= armor;
									armor = 0;
								} else {
									var tmp_armor = armor;
									armor -= pierce;
									pierce -= tmp_armor;
									if (pierce < 1) pierce = 0;
								}
							} else {
								// Skill achievement counting
								if (current_assault.p == 'cpu') achievement_skill.push('armored');
							}
						}

						damage -= armor;
						if (debug && target.skill.armored) echo += ' Armor: -' + target.skill.armored.x;

						// Antiair
						var antiair = 0;
						if (target.skill.flying && current_assault.skill.antiair) {
							antiair = current_assault.skill.antiair.x;

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('antiair');
						}
						damage += antiair;
						if (debug && antiair) echo += ' Antiair: +' + antiair;

						// Burst
						// - Target must be an assault
						var burst = false;
						if (target.isAssault() && target.health_left == target.health && current_assault.skill && current_assault.skill.burst) {
							burst = current_assault.skill.burst.x;

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('burst');
						}
						damage += burst;
						if (debug && burst) echo += ' Burst: +' + burst;

						// Enfeeble
						var enfeeble = 0;
						if (target.enfeebled) enfeeble = target.enfeebled;
						damage += enfeeble;
						if (debug && enfeeble) echo += ' Enfeeble: +' + enfeeble;

						// Protect
						var protect = false;
						if (target.protected) protect = target.protected;
						if (current_assault.skill && current_assault.skill.pierce) {
							if (pierce > protect) {
								pierce -= protect;
								protect = false;
							} else {
								var tmp_protect = protect;
								protect -= pierce;
								pierce -= tmp_protect;
								if (pierce < 1) pierce = 0;
							}
						}
						damage -= protect;
						if (debug && target.protected) echo += ' Protect: -' + target.protected;

						// Valor
						// - Activates if enemy field has more assaults than allied field
						var valor = 0;
						if (field_o_assaults.length - field_o.died_this_turn > field_p_assaults.length - field_p.died_this_turn && current_assault.skill && current_assault.skill.valor) {
							valor = current_assault.skill.valor.x;

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('valor');
						}
						if (debug && valor) echo += ' Valor: +' + valor;
						damage += valor;

						// Pierce (debug text and achievement tallying)
						if (debug && current_assault.skill && current_assault.skill.pierce && pierce < current_assault.skill.pierce.x) {
							echo += ' Pierce: +';
							echo += (current_assault.skill.pierce.x - pierce);

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('pierce');
						}

						// Walls take no damage during Impenetrable battleground effect
						if (target.skill.wall && battleground == 'impenetrable') {
							damage = 0;
							if (debug) echo += ' Impenetrable: -999';
						}

						if (damage < 0) damage = 0;

						if (debug) echo += ') = ' + damage + ' damage</u><br>';

						// -- END OF CALCULATE DAMAGE --

						// -- CHECK STATUS INFLICTION --

						// Poison
						// - Target must be an assault
						// - Target must not be already poisoned of that level
						// - Must not be On Attacked
						if (damage > 0 && target.isAssault() && current_assault.skill && current_assault.skill.poison && target.poisoned < current_assault.skill.poison.x && !current_assault.skill.poison.attacked) {
							var poison = current_assault.skill.poison.x;
							target.poisoned = poison;
							if (debug) echo += debug_name(current_assault) + ' inflicts poison(' + poison + ') on ' + debug_name(target) + '<br>';

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('poison');
						}

						// Immobilize
						// - Target must be an assault
						// - Target must be active or will be active next turn
						// - Target must not be already immobilized
						// - Target must not be jammed
						// - 50% proc
						// - Must not be On Attacked
						if (damage > 0 && target.isAssault() && target.timer <= 1 && !target.immobilized && !target.jammed && !target.frozen && current_assault.skill && current_assault.skill.immobilize && !current_assault.skill.immobilize.attacked && roll_proc()) {
							target.immobilized = true;
							if (debug) echo += debug_name(current_assault) + ' inflicts immobilize on ' + debug_name(target) + '<br>';

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('immobilize');
						}

						// Disease
						// - Target must be an assault
						// - Target must not be already diseased
						// - Must not be On Attacked
						if (damage > 0 && target.isAssault() && !target.diseased && current_assault.skill && current_assault.skill.disease && !current_assault.skill.disease.attacked) {
							target.diseased = true;
							if (debug) echo += debug_name(current_assault) + ' inflicts disease on ' + debug_name(target) + '<br>';

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('disease');
						}

						// Sunder
						// - Target must be an assault
						// - Target must not be already sundered
						// - Must not be On Attacked
						if (damage > 0 && target.isAssault() && !target.sundered && current_assault.skill && current_assault.skill.sunder && !current_assault.skill.sunder.attacked) {
							target.sundered = true;
							if (debug) echo += debug_name(current_assault) + ' inflicts sunder on ' + debug_name(target) + '<br>';

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('sunder');
						}

						// Phase
						// - Target must be an assault
						// - Target must not be already phased
						// - Must not be On Attacked
						if (damage > 0 && target.isAssault() && !!target.phased && current_assault.skill && current_assault.skill.phase && !current_assault.skill.phase.attacked) {
							target.phased = true;
							if (debug) echo += debug_name(current_assault) + ' inflicts phase on ' + debug_name(target) + '<br>';

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('phase');
						}

						// -- END OF STATUS INFLICTION --

						// Check if we used Fear
						// - target must exist and be still alive
						// - attacker must have fear
						if (field_o_assaults[swipe_key] && field_o_assaults[swipe_key]['health_left'] > 0 && current_assault.skill.fear) {
							if (debug) echo += debug_name(current_assault) + ' activates fear against ' + debug_name(field_o_assaults[swipe_key]) + '<br>';

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('fear');
						}

						// Deal damage to target
						do_damage(target, damage);

						if (debug) echo += debug_name(current_assault) + ' attacks ' + debug_name(target) + ' for ' + damage + ' damage';
						if (debug && target.health_left < 1) echo += ' and it dies<br>';
						else if (debug) echo += '<br>';

						// Skill achievement counting
						if (current_assault.p == 'player') achievement_skill.push('0');

						// Damage achievement counting
						if (target == field_cpu_commander) achievement_damage += damage;
						if (damage > achievement_maxdamage) achievement_maxdamage = damage;

						// Calculate ANP
						if (target == field_cpu_commander) {
							points_this_turn += damage;
							if (turn >= turn_of_last_decision) {
								points_since_last_decision += damage;
							}
						}

						// WINNING CONDITION
						if (field_o_commander.health_left < 1) {
							return p == 'player';
						}

						// Crush
						// - Target an assault unit and must be dead
						// - If walls exist, Crush will hit the first wall
						// - Commander must be alive
						if (target.health_left < 1 && target.isAssault() && current_assault.skill && current_assault.skill.crush && field_o_commander.health_left > 0) {

							var crush = current_assault.skill.crush.x;

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('crush');

							// Check Walls
							// - Must get a pointer reference from get_wall function!
							if (get_wall(field_o_structures)) {
								var wall = get_wall(field_o_structures);
								do_damage (wall, crush);
								if (debug) echo += debug_name(wall) + ' takes ' + crush + ' crush damage';
								if (debug && wall.health_left < 1) echo += ' and it dies<br>';
								else if (debug) echo += '<br>';

								// Check if dead, activate on death skills
								if (wall.health_left < 1) activation_skills(wall, 'died');

							// Otherwise crush Commander
							} else {
								var commander = field_o_commander;
								do_damage (commander, crush);
								if (debug) echo += debug_name(commander) + ' takes ' + crush + ' crush damage';
								if (debug && commander.health_left < 1) echo += ' and it dies<br>';
								else if (debug) echo += '<br>';

								// Damage achievement counting
								if (commander == field_cpu_commander) achievement_damage += crush;

								// Calculate ANP
								if (commander == field_cpu_commander) {
									points_this_turn += crush;
									if (turn >= turn_of_last_decision) {
										points_since_last_decision += crush;
									}
								}

								// WINNING CONDITION
								if (commander.health_left < 1) {
									return p == 'player';
								}
							}
						}

						// -- ON KILL --
						// - Must be an assault!
						// - Cannot be jammed or frozen!
						if (target.health_left < 1 && target.isAssault() && current_assault.health_left > 0 && !current_assault.jammed && !current_assault.frozen) {
							activation_skills(current_assault, 'kill');
						}

						// -- ON ATTACKED --

						// On Attacked Activation skills
						// - Cannot be jammed! (Doesn't matter if frozen or not.)
						if (!target.jammed) activation_skills(target, 'attacked');

						// Poison on attacked
						// - Target must not be already poisoned of that level
						if (target.skill.poison && target.skill.poison.attacked && current_assault.poisoned < target.skill.poison.x) {
							var poison = target.skill.poison.x;
							current_assault.poisoned = poison;
							if (debug) echo += debug_name(target) + ' inflicts poison(' + poison + ') on ' + debug_name(current_assault) + '<br>';

							// Skill achievement counting
							if (target.p == 'player') achievement_skill.push('poison');
						}
						// Disease on attacked
						// - Target must not be already diseased
						if (target.skill.disease && target.skill.disease.attacked && !current_assault.diseased) {
							current_assault.diseased = true;
							if (debug) echo += debug_name(target) + ' inflicts disease on ' + debug_name(current_assault) + '<br>';

							// Skill achievement counting
							if (target.p == 'player') achievement_skill.push('disease');
						}
						// Sunder on attacked
						// - Target must not be already sundered
						if (target.skill.sunder && target.skill.sunder.attacked && !current_assault.sundered) {
							current_assault.sundered = true;
							if (debug) echo += debug_name(target) + ' inflicts sunder on ' + debug_name(current_assault) + '<br>';

							// Skill achievement counting
							if (target.p == 'player') achievement_skill.push('sunder');
						}
						// Phase on attacked
						// - Target must not be already phased
						if (target.skill.phase && target.skill.phase.attacked && !current_assault.phased) {
							current_assault.phased = true;
							if (debug) echo += debug_name(target) + ' inflicts phase on ' + debug_name(current_assault) + '<br>';

							// Skill achievement counting
							if (target.p == 'player') achievement_skill.push('phase');
						}
						// Berserk on attacked
						if (target.skill.berserk && target.skill.berserk.attacked && !target.sundered) {
							var berserk = target.skill.berserk.x;
							target.attack_berserk += berserk;
							if (debug) echo += debug_name(target) + ' activates berserk and gains ' + berserk + ' attack<br>';

							// Skill achievement counting
							if (target.p == 'player') achievement_skill.push('berserk');
						}
						// Stun
						if (damage > 0 && target.skill.stun) {
							current_assault.stunned = 2;
							if (debug) echo += debug_name(current_assault) + ' is stunned.<br>';

							// Skill achievement counting
							if (target.p == 'player') achievement_skill.push('stun');
						}

						// -- END OF ON ATTACKED --

						// Berserk
						// - Must not be On Attacked
						// - Berserk does not activate if Assault hits a wall during "Impenetrable" battleground effect
						// - Must not be sundered
						if (damage > 0 && current_assault.skill && current_assault.skill.berserk && !current_assault.skill.berserk.attacked && !current_assault.sundered) {
							if (target.skill.wall && battleground == 'impenetrable') {
								// Do not activate berserk!
							} else {
								var berserk = current_assault.skill.berserk.x;
								current_assault.attack_berserk += berserk;
								if (debug) echo += debug_name(current_assault) + ' activates berserk and gains ' + berserk + ' attack<br>';

								// Skill achievement counting
								if (current_assault.p == 'player') achievement_skill.push('berserk');
							}
						}

						// Counter
						// - Target must have received some amount of damage
						// - Attacker must not be already dead
						if (damage > 0 && current_assault.health_left > 0 && target.skill.counter) {

							var counter_damage = 0 + target.skill.counter.x;

							// Enfeeble
							var enfeeble = 0;
							if (current_assault.enfeebled) enfeeble = current_assault.enfeebled;
							counter_damage += 0 + enfeeble;

							// Protect
							var protect = false;
							if (current_assault.protected) protect = current_assault.protected;
							counter_damage -= protect;

							if (counter_damage < 0) counter_damage = 0;

							// Skill achievement counting
							if (target.p == 'player' && counter_damage > 0) achievement_skill.push('counter');

							do_damage(current_assault, counter_damage);

							if (debug) echo += debug_name(current_assault) + ' takes ' + counter_damage + ' counter damage';
							if (debug && current_assault.health_left < 1) echo += ' and it dies<br>';
							else if (debug) echo += '<br>';

							// On Death
							if (current_assault.health_left < 1) activation_skills(current_assault, 'died');
						}

						// Leech
						// - Must not be diseased
						// - Must have done some damage to an assault unit
						// - Cannot leech more than damage dealt
						// - Cannot leech more health than damage sustained
						// - Leecher must not be already dead
						// - Leecher must not be at full health
						// - Increases attack too during Invigorate battleground effect
						if (damage > 0 && target.isAssault() && !current_assault.diseased && current_assault.health_left > 0 &&
						current_assault.health_left < current_assault.health && current_assault.skill && current_assault.skill.leech) {

							var leech_health = current_assault.skill.leech.x;
							if (leech_health > damage) leech_health = damage;
							if (leech_health > current_assault.health - current_assault.health_left) leech_health = current_assault.health - current_assault.health_left;

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('leech');

							current_assault.health_left += leech_health;
							if (debug) echo += debug_name(current_assault) + ' leeches ' + leech_health + ' health<br>';

							// Invigorate
							if (battleground == 'invigorate' && !current_assault.sundered) {
								current_assault.attack_berserk += leech_health;
								if (debug) echo += debug_name(current_assault) + ' invigorates by ' + leech_health + '<br>';
							}
						}

						// Siphon
						// - Must have done some damage to an assault unit
						// - Cannot siphon more than damage dealt
						// - Cannot siphon more health than damage sustained
						// - Siphoned Commander must not be already dead
						// - Siphoned Commander must not be at full health
						if (damage > 0 && target.isAssault() && field_p_commander.health_left > 0 &&
						field_p_commander.health_left < field_p_commander.health && current_assault.skill && current_assault.skill.siphon) {

							var siphon_health = current_assault.skill.siphon.x;
							if (siphon_health > damage) siphon_health = damage;
							if (siphon_health > field_p_commander.health - field_p_commander.health_left) siphon_health = field_p_commander.health - field_p_commander.health_left;

							// Skill achievement counting
							if (current_assault.p == 'player') achievement_skill.push('siphon');

							// Damage achievement counting
							if (current_assault.p == 'cpu') achievement_damage -= siphon_health;

							field_p_commander.health_left += siphon_health;
							if (debug) echo += debug_name(current_assault) + ' siphons ' + siphon_health + ' health for ' + debug_name(field_p_commander) + '<br>';
						}

						// -- ON DEATH --
						if (target.health_left < 1) activation_skills(target, 'died');

						// WINNING CONDITION (in case of backfire or shock)
						if (field_o_commander.health_left < 1) {
							return p == 'player';
						}
						if (field_p_commander.health_left < 1) {
							return p == 'cpu';
						}

						// Regenerate
						regenerate();

					} // -- END SWIPE --

				} // -- END FLURRY --

				// -- END ATTACK SEQUENCE --

				// Mark as "attacked already"
				current_assault.attacked_already = true;

				// Unmark as "attacking now"
				current_assault.attacking_now = false;

			}
			// End of Assaults
		}

		// Refresh on your commander, structures, and assault units
		refresh(p);

		// Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
		remove_dead();

		field_p_assaults = field_p.assaults;
		field_p_structures = field_p.structures;

		// Remove from your field: Chaos, Jam, Freeze, Enfeeble, Immobilize, Stun, Rally, Weaken, Augment, Phase
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];

			// Blitz does not get removed if unit is jammed or frozen!
			if (!current_assault.jammed && !current_assault.frozen) current_assault.blitz = false;

			current_assault.chaosed = false;
			current_assault.jammed = false;
			current_assault.frozen = false;
			current_assault.enfeebled = 0;
			current_assault.immobilized = false;
			if (current_assault.stunned > 0) current_assault.stunned--;
			current_assault.attack_rally = 0;
			current_assault.attack_weaken = 0;
			current_assault.augmented = 0;
			current_assault.phased = false;

			// Unmark as "attacked already"
			current_assault.attacked_already = false;

			// Unmark as "attacking now"
			current_assault.attacking_now = false;

			// If clone project in effect, remove any existing split skills at end of each turn!
			if ( (battleground == 'clone_project' || battleground == 'split_five')
			&& current_assault.skill.split ) {
				delete current_assault.skill.split;
				if (debug) echo += debug_name(current_assault) + ' loses the Split skill!<br>';
			}
		}

		// Remove from your field: Fusion
		for (var key = 0, len = field_p_structures.length; key < len; key++) {
			var current_assault = field_p_structures[key];
			current_assault.fusion = false;
		}

		// Calculate ANP
		points_this_turn = false;

		//debug_dump_field();
		if (debug) echo += '<u>Turn ' + turn + ' ends</u><br><br><hr><br>';
	}
}

// Increment achievement rates if applicable
var tally_achievement = function (result) {
	// In order to get achievement, you must also win the mission!
	if (cache_achievement && result && result != 'draw') {
		var real_key = 0;
		var achievement_success = true;
		var achievement = cache_achievement;
		for (var key in achievement.req) {
			var current_req = achievement.req[key];
			real_key = key;
			if (key == 'attr') {
				current_req = achievement.req;
				real_key = 0;
			}
			if (achievement_wins[real_key] == undefined) achievement_wins[real_key] = 0;
			if (current_req == undefined) continue;

			// Skill requirements
			if (current_req.skill_id != undefined && current_req.num_used != undefined) {

				// Count number of uses of required skill
				var num_used = 0;
				for (var i in achievement_skill) {
					var skill = achievement_skill[i];
					if (skill == current_req.skill_id) {
						num_used++;
					}
				}

				// Increment the achievement rate for this requirement or mark as unsuccessful
				if (current_req.compare == 'less_equal') {
					if (num_used <= current_req.num_used) achievement_wins[real_key]++;
					else achievement_success = false;
				} else if (current_req.compare == 'equal') {
					if (num_used == current_req.num_used) achievement_wins[real_key]++;
					else achievement_success = false;
				} else {
					if (num_used >= current_req.num_used) achievement_wins[real_key]++;
					else achievement_success = false;
				}
			}

			// Skill Kill requirements
			if (current_req.skill_id != undefined && current_req.num_killed_with != undefined) {

				// Count number of units killed with required skill
				var num_killed = 0;
				for (var i in achievement_killed) {
					var card = achievement_killed[i];

					// This killed unit has the required skill
					if (card.skill[current_req.skill_id]) {
						num_killed++;
					}
				}

				// Increment the achievement rate for this requirement or mark as unsuccessful
				if (current_req.compare == 'less_equal') {
					if (num_killed <= current_req.num_killed_with) achievement_wins[real_key]++;
					else achievement_success = false;
				} else if (current_req.compare == 'equal') {
					if (num_killed == current_req.num_killed_with) achievement_wins[real_key]++;
					else achievement_success = false;
				} else {
					if (num_killed >= current_req.num_killed_with) achievement_wins[real_key]++;
					else achievement_success = false;
				}
			}

			// Play requirements
			if (current_req.num_played != undefined) {
				var num_played = 0;

				// Count number of units played that meet requirements
				for (var i in achievement_played) {
					var card = achievement_played[i];
					var unit_qualifies = true;

					if (current_req.unit_id != undefined) {
						if (card.id != current_req.unit_id && field.player.commander.id != current_req.unit_id) unit_qualifies = false;
					}
					if (current_req.unit_race != undefined) {
						if (card.type != current_req.unit_race) unit_qualifies = false;
					}
					if (current_req.unit_type != undefined) {
						if (!card.isAssault() && types[current_req.unit_type] == 'assault') unit_qualifies = false;
						if (!card.isStructure() && types[current_req.unit_type] == 'structure') unit_qualifies = false;
						if (!card.isAction() && types[current_req.unit_type] == 'action') unit_qualifies = false;
					}
					if (current_req.unit_rarity != undefined) {
						if (card.rarity != current_req.unit_rarity) unit_qualifies = false;
					}

					// This unit qualifies towards the achievement
					if (unit_qualifies) {
						num_played++;
					}
				}

				// Increment the achievement rate for this requirement or mark as unsuccessful
				if (current_req.compare == 'less_equal') {
					if (num_played <= current_req.num_played) achievement_wins[real_key]++;
					else achievement_success = false;
				} else if (current_req.compare == 'equal') {
					if (num_played == current_req.num_played) achievement_wins[real_key]++;
					else achievement_success = false;
				} else {
					if (num_played >= current_req.num_played) achievement_wins[real_key]++;
					else achievement_success = false;
				}
			}

			// Kill requirements
			if (current_req.num_killed != undefined) {
				var num_killed = 0;

				// Count number of units killed that meet requirements
				for (var i in achievement_killed) {
					var card = achievement_killed[i];
					var unit_qualifies = true;

					if (current_req.unit_id != undefined) {
						if (card.id != current_req.unit_id) unit_qualifies = false;
					}
					if (current_req.unit_race != undefined) {
						if (card.type != current_req.unit_race) unit_qualifies = false;
					}
					if (current_req.unit_type != undefined) {
						if (!card.isAssault() && types[current_req.unit_type] == 'assault') unit_qualifies = false;
						if (!card.isStructure() && types[current_req.unit_type] == 'structure') unit_qualifies = false;
						if (!card.isAction() && types[current_req.unit_type] == 'action') unit_qualifies = false;
					}
					if (current_req.unit_rarity != undefined) {
						if (card.rarity != current_req.unit_rarity) unit_qualifies = false;
					}

					// This unit qualifies towards the achievement
					if (unit_qualifies) {
						num_killed++;
					}
				}

				// Increment the achievement rate for this requirement or mark as unsuccessful
				if (current_req.compare == 'less_equal') {
					if (num_killed <= current_req.num_killed) achievement_wins[real_key]++;
					else achievement_success = false;
				} else if (current_req.compare == 'equal') {
					if (num_killed == current_req.num_killed) achievement_wins[real_key]++;
					else achievement_success = false;
				} else {
					if (num_killed >= current_req.num_killed) achievement_wins[real_key]++;
					else achievement_success = false;
				}
			}


			// Max Damage requirements
			if (current_req.damage != undefined) {
				// Increment the achievement rate for this requirement or mark as unsuccessful
				if (achievement_maxdamage >= current_req.damage) achievement_wins[real_key]++;
				else achievement_success = false;
			}

			// Commander Damage requirements
			if (current_req.com_total != undefined) {
				// Increment the achievement rate for this requirement or mark as unsuccessful
				if (achievement_damage >= current_req.com_total) achievement_wins[real_key]++;
				else achievement_success = false;
			}

			// Turns requirements
			if (current_req.num_turns != undefined) {

				// Increment the achievement rate for this requirement or mark as unsuccessful
				if (current_req.compare == 'less_equal') {
					if (achievement_turns <= current_req.num_turns) achievement_wins[real_key]++;
					else achievement_success = false;
				} else if (current_req.compare == 'equal') {
					if (achievement_turns == current_req.num_turns) achievement_wins[real_key]++;
					else achievement_success = false;
				} else {
					if (achievement_turns >= current_req.num_turns) achievement_wins[real_key]++;
					else achievement_success = false;
				}
			}
		}

		if (achievement_wins.all == undefined) achievement_wins.all = 0;
		if (achievement_success) achievement_wins.all++;
	}
}

var deck = [];
var number_of_summons = [];
var field = [];
var achievement_skill = [];
var achievement_killed = [];
var achievement_played = [];
var achievement_turns = 0;
var achievement_damage = 0;
var achievement_maxdamage = 0;
var turn_of_last_decision = false;
var points_since_last_decision = false;
var points_this_turn = false;
var just_died = [];
var total_manual_anp = 0;
var total_auto_anp = 0;
var boss_slay = 0;
var time_start_batch = 0;
var assaults_not_done_yet = false;

}