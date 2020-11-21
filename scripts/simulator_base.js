var SIMULATOR = {};
(function () {
	"use strict";

	// Play card
	function play_card(card, p, turn, quiet) {
		var field_p_assaults = field[p].assaults;

		// Not a valid card
		if (!card.id) return 0;

		var newKey = field_p_assaults.length;
		initializeCard(card, p, newKey);
		card.played = true;

		if (card.isAssault()) {
			field_p_assaults[newKey] = card;
		}

		if ((debug || play_debug) && !quiet) echo += debug_name(field[p].commander) + ' plays ' + debug_name(card) + '<br>';

		if (card.isTrap()) {
			doEarlyActivationSkills(card);
			activation_skills(card);
		} else {
			// Activate trap/onPlay battlegrounds
			for (var i = 0; i < battlegrounds.onCardPlayed.length; i++) {
				var battleground = battlegrounds.onCardPlayed[i];
				var o = (p === 'player' ? 'cpu' : 'player');

				if (battleground.defender) {
					if (!surge && p != 'cpu') continue;
					if (surge && p != 'player') continue;
					battleground.owner = o;
				} else if (battleground.attacker) {
					if (!surge && p != 'player') continue;
					if (surge && p != 'cpu') continue;
					battleground.owner = p;
				} else {
					if (battleground.enemy_only && p != 'cpu') continue;
					if (battleground.ally_only && p != 'player') continue;
					battleground.owner = p;
				}

				if (turn > 1 && battleground.first_play) {
					continue;
				}

				battleground.onCardPlayed(card, deck[p].deck, deck[o].deck);
			}
		}
		if (showAnimations) {
			drawField(field, null, null, turn);
		}
	}

	// Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
	function remove_dead() {
		remove_dead_cards('player');
		remove_dead_cards('cpu');
	}

	// Shift over to the left if there are any gaps.
	function remove_dead_cards(p) {
		var units = field[p].assaults;
		// Find first dead unit (don't need to update the keys of any units before this one)
		for (var key = 0, len = units.length; key < len; key++) {
			var current_assault = units[key];
			// Starting at the first dead unit, start shifting.
			if (!current_assault.isAlive()) {
				if (debug) echo += debug_name(current_assault) + ' <strong>is removed from field</strong><br>';
				var newkey = key;	// Store the new key value for the next alive unit
				for (key++; key < len; key++) {
					current_assault = units[key];
					// If this unit is dead, don't update newkey, we still need to fill that slot
					if (!current_assault.isAlive()) {
						if (debug) echo += debug_name(current_assault) + ' <strong>is removed from field</strong><br>';
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

	// Picks one target by random
	function choose_random_target(targets) {
		var targetIndex = ~~(Math.random() * targets.length);
		return [targets[targetIndex]];
	}

	function get_o(card) {
		if (card.owner === 'cpu') return 'player';
		if (card.owner === 'player') return 'cpu';
	}

	function getAlliedUnits(card, field) {
		return field[card.owner].assaults;
	}

	function getEnemyUnits(card, field) {
		if (card.owner === 'cpu') return field['player'].assaults;
		if (card.owner === 'player') return field['cpu'].assaults;
	}

	// Deal damage to card
	// and keep track of cards that have died this turn
	function do_damage(source, target, damage, shatter, logFn) {
		if (damage >= target.health_left) {
			target.health_left = 0;
		} else {
			target.health_left -= damage;
		}

		if (debug) logFn(source, target, damage);

		if (shatter) {
			iceshatter(target);
		}
		if (!target.isAlive() && source) {
			doOnDeathSkills(target, source);
		}
	}

	function iceshatter(src_card) {
		// Bug 27391 - If Barrier is partially reduced before being completely depleted, Iceshatter still deals full damage
		var amount = src_card.barrier_ice;
		//if (amount > src_card.barrier_ice) amount = src_card.barrier_ice;
		var o = get_o(src_card);
		var field_o = field[o];
		var target = field_o.assaults[src_card.key];
		if (!target || !target.isAlive()) target = field_o.commander;

		do_damage(src_card, target, amount, null, function (source, target, amount) {
			echo += debug_name(source) + "'s barrier shatters and hits " + debug_name(target) + ' for ' + amount + ' damage';
			echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
		});
	}

	function getActivatedSkill(skillMap, skillId) {
		return (skillMap[skillId] || notImplemented);
	}

	function notImplemented(src_card, skill) {
		if (debug) {
			var skillName = (SKILL_DATA[skill.id] ? SKILL_DATA[skill.id].name : skill.id);
			echo += debug_name(src_card) + ' attempts to use ' + skillName + ' (' + skill.id + '), but it is not implemented.<br>';
		}

		return 0;
	}

	// Empower, Legion, and Fervor all activate at the beginning of the turn, after commander
	function doEarlyActivations(field_p) {
		var field_p_assaults = field_p.assaults;
		for (var unit_key = 0, unit_len = field_p_assaults.length; unit_key < unit_len; unit_key++) {
			var current_unit = field_p_assaults[unit_key];

			if (current_unit.isAlive() && current_unit.isActive() && current_unit.isUnjammed()) {

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
	}

	function doEarlyActivationSkills(source_card) {

		var skills = source_card.earlyActivationSkills;
		var len = skills.length;
		if (len === 0) return;

		if (source_card.silenced) {
			if (debug) echo += debug_name(source_card) + " is silenced and cannot use skills</br>";
			return;
		}

		var dualstrike = source_card.dualstrike_triggered;
		if (debug && dualstrike) {
			// var main attack loop deal with resetting timer
			echo += debug_name(source_card) + ' activates dualstrike<br>';
		}

		var activations = (dualstrike ? 2 : 1);
		var isAlive = makeLivenessCheck(source_card);
		for (var a = 0; a < activations; a++) {
			for (var i = 0; i < len && isAlive(); i++) {
				var skill = skills[i];
				if (!skill.countdown) {
					var skillFn = getActivatedSkill(earlyActivationSkills, skill.id);
					var affected = skillFn(source_card, skill);
					if (skill.c && affected > 0) {
						skill.countdown = skill.c;
					}

					if (showAnimations) {
						drawField(field, null, null, turn, source_card);
					}
				}
			}
		}
	}

	function alwaysTrue() {
		return true;
	}
	function makeLivenessCheck(maybeUnit) {
		if (maybeUnit.isAlive) {
			return maybeUnit.isAlive.bind(maybeUnit);
		} else {
			return alwaysTrue;
		}
	}

	function doOnDeathSkills(dying, killer) {

		if (dying.ondeath_triggered) return; // Check to make sure we don't trigger this twice

		if(!dying.silenced) {
			var skills = dying.onDeathSkills;
			var len = skills.length;
			if (len === 0) return;

			for (var i = 0; i < len; i++) {
				var skill = skills[i];
				onDeathSkills[skill.id](dying, killer, skill);

				if (showAnimations) {
					drawField(field, null, null, turn, dying);
				}
			}
		}

		dying.ondeath_triggered = true;
	}

	var passiveSkills = ['backlash', 'counter', 'counterburn', 'counterpoison', 'armored', 'evade', 'stasis'];
	function requiresActiveTurn(skillName) {
		return passiveSkills.indexOf(skillName) === -1;
	}

	function backlash(attacker, defender) {
		if (attacker.isAssault() && defender.isAlive()) {
			var baseDamage = defender.backlash;
			var enhancement = getEnhancement(defender, 'backlash', baseDamage);
			doCounterDamage(attacker, defender, 'Backlash', baseDamage, enhancement);
		}
	}

	function checkShroud(unit) {
		if (unit.isActive() && unit.isUnjammed()) {
			return 0;
		} else {
			return (unit.stasis || 0);
		}
	}

	var activationSkills = {

		burnself: function burnself(src_card, skill) {
			var scorch = skill.x;

			if (!src_card.scorched) {
				src_card.scorched = {
					amount: scorch,
					timer: 2
				};
			} else {
				src_card.scorched.amount += scorch;
				src_card.scorched.timer = 2;
			}
			if (debug) echo += debug_name(src_card) + ' inflicts scorch(' + scorch + ') on itself<br>';

			return 1;
		},
		// Scorch
		// - cone-shaped scorch
		scorchbreath: function scorchbreath(src_card, skill) {
			return activationSkills.burn(src_card, skill);
		},
		// Scorch
		// - Target must be an assault
		burn: function burn(src_card, skill) {

			var enemyUnits = getEnemyUnits(src_card, field);

			var targets;
			switch (skill.id) {
				case 'scorchbreath':
					var startKey = Math.max(0, src_card.key - 1);
					var endKey = Math.min(enemyUnits.length, src_card.key + 2);
					targets = enemyUnits.slice(startKey, endKey);
					break;
				case 'burnself':
					targets = [src_card];
					break;
				default:
					targets = enemyUnits.slice(src_card.key, src_card.key + 1);
					break;
			}
			if (!targets.length) return 0;

			var scorch = skill.x;
			var enhanced = getEnhancement(src_card, 'burn', scorch);
			scorch += enhanced;

			for (var i = 0; i < targets.length; i++) {
				var target = targets[i];

				if (!target.scorched) {
					target.scorched = {
						amount: scorch,
						timer: 2
					};
				} else {
					target.scorched.amount += scorch;
					target.scorched.timer = 2;
				}
				if (debug) echo += debug_name(src_card) + ' inflicts scorch(' + scorch + ') on ' + debug_name(target) + '<br>';
			}

			return true;
		},

		// Protect (Barrier)
		// - Can target specific faction
		// - Targets allied assaults
		// - Can be enhanced
		protect_ice: function (src_card, skill) {
			return activationSkills.protect(src_card, skill, "barrier_ice");
		},
		protect_seafolk: function (src_card, skill) {
			return activationSkills.protect(src_card, skill, null, null, true);
		},
		evadebarrier: function (src_card, skill) {
			return activationSkills.protect(src_card, skill, "invisible", function (target, amount) {
				return ' and imbues it with invisible ' + amount;
			});
		},
		protect: function (src_card, skill, additional, additionalDebug, onlyOnDelay) {

			var faction = skill.y;
			var rarity = skill.z;

			var alliedUnits = getAlliedUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = alliedUnits.length; key < len; key++) {
				var target = alliedUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)
					&& (!onlyOnDelay || !target.isActive())) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			var all = skill.all;
			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var protect = (skill.x || 0);
			var enhanced = getEnhancement(src_card, skill.id, protect);
			protect += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = alliedUnits[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debug) echo += debug_name(src_card) + ' protects ' + debug_name(target) + ' but it is nullified!<br>';
					continue;
				}

				var protect_amt = protect;
				var mult = skill.mult;
				if (mult) {
					if (!target.isActive()) {
						mult += (skill.on_delay_mult || 0);
					}
					protect_amt += Math.ceil(target.health * mult);
				}

				target.protected += protect_amt;
				if (additional) {
					target[additional] = (target[additional] || 0) + protect_amt;
				}
				if (debug) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += debug_name(src_card) + ' barriers ' + debug_name(target) + ' by ' + protect_amt;
					if (typeof additionalDebug === "function") {
						echo += additionalDebug(target, protect_amt);
					}
					echo += '<br>';
				}
			}

			return true;
		},

		// Wing Guard
		// - Targets self and leftmost ally
		wingward: function (src_card, skill) {

			var alliedUnits = getAlliedUnits(src_card, field);

			// Targets self and leftmost ally
			var targets = [];
			for (var key = 0; key < src_card.key; key++) {
				var target = alliedUnits[key];
				if (target.isAlive()) {
					targets.push(key);
					break;
				}
			}
			targets.push(src_card.key);

			var wingward = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, wingward);
			wingward += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = alliedUnits[targets[key]];
				target.protected += wingward;
				target.invisible += Math.ceil(wingward/2);
				if (debug) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += debug_name(src_card) + ' wing guards ' + debug_name(target) + 
						', protecting it by ' + wingward + 
						' and imbuing it with invisible ' + wingward;
					echo += '<br>';
				}
			}

			return true;
		},

		invigorate: function (src_card, skill) {
			activationSkills.heal(src_card, skill, true);
		},
		// Heal
		// - Can target specific faction
		// - Targets allied damaged assaults
		// - Can be enhanced
		heal: function (src_card, skill, invigorate) {

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var alliedUnits = getAlliedUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = alliedUnits.length; key < len; key++) {
				var target = alliedUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)
					&& (all || target.isDamaged() 
						|| (invigorate && (!target.invigorated)))) {
					targets.push(key);
				}

			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var heal = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, heal);
			heal += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = alliedUnits[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debug) echo += debug_name(src_card) + ' ' + skill.id + 's ' + debug_name(target) + ' but it is nullified!<br>';
					continue;
				}

				var heal_amt = heal + getSkillMult(skill, target);

				var additionalMaxHealth = 0;
				if (invigorate) {
					// add invigorated if necessary
					if (!target.invigorated) {
						target.invigorated = 0;
					}

					// invigorate does not stack
					additionalMaxHealth = Math.max(0, heal_amt - target.invigorated);
					target.health += additionalMaxHealth;
					target.invigorated += additionalMaxHealth;
				}

				var missingHealth = target.health - target.health_left;
				if (heal_amt > missingHealth) {
					heal_amt = missingHealth;
				}
				target['health_left'] += heal_amt;
				if (debug) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += debug_name(src_card) + ' heals ' + debug_name(target) + ' by ' + heal_amt;
					if (additionalMaxHealth) echo += ' and increases its max health by ' + additionalMaxHealth;
					echo += '<br>';
				}
			}

			return true;
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

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var enemyUnits = getEnemyUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = enemyUnits.length; key < len; key++) {
				var target = enemyUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var strike = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, strike);
			strike += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = enemyUnits[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debug) echo += debug_name(src_card) + ' bolts ' + debug_name(target) + ' but it is invisible!<br>';
					continue;
				}

				var strike_damage = strike;

				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(target, strike_damage);
				strike_damage = damageInfo.damage;
				var shatter = damageInfo.shatter;

				var poisonDamage = 0;
				if (strike_damage > 0 && poison && target.isAlive()) {
					if (strike > target['poisoned']) {
						poisonDamage = strike;
						target['poisoned'] = poisonDamage;
					}
				}

				do_damage(src_card, target, strike_damage, shatter, function (source, target, amount) {
					echo += '<u>(Strike: +' + skill.x;
					if (enhanced) echo += ' Enhance: +' + enhanced;
					echo += damageInfo.echo;
					echo += ') = ' + amount + ' damage</u><br>';
					echo += debug_name(source) + ' bolts ' + debug_name(target) + ' for ' + amount + ' damage';
					if (!target.isAlive()) {
						echo += ' and it dies';
					} else if (poisonDamage) {
						echo += ' and inflicts poison(' + poisonDamage + ') on it';
					}
					echo += '<br>';
				});

				if (target.backlash) {
					backlash(src_card, target);
				}
			}

			return true;
		},

		// Intensify
		// - Can target specific faction
		// - Targets poisoned/scorched enemy assaults
		// - Can be evaded
		// - Can be enhanced
		intensify: function (src_card, skill, poison) {

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var enemyUnits = getEnemyUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = enemyUnits.length; key < len; key++) {
				var target = enemyUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)
					&& (target.scorched || target.poisoned)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var intensify = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, intensify);
			intensify += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = enemyUnits[targets[key]];

				var intensifiedFields = (target.scorched ? "scorch" : "");
				intensifiedFields += (target.poisoned ? (intensifiedFields ? " and poison" : "poison") : "");

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debug) echo += debug_name(src_card) + ' intensifies ' + intensifiedFields + ' on ' + debug_name(target) + ' but it is invisible!<br>';
					continue;
				}

				if (target.scorched) {
					target.scorched.amount += intensify;
				}
				if (target.poisoned) {
					target.poisoned += intensify;
				}

				if (debug) echo += debug_name(src_card) + ' intensifies ' + intensifiedFields + ' on ' + debug_name(target) + ' by ' + intensify + '<br>';

				if (target.backlash) {
					backlash(src_card, target);
				}
			}

			return true;
		},

		// Ignite
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Can be enhanced
		ignite: function (src_card, skill, poison) {

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var enemyUnits = getEnemyUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = enemyUnits.length; key < len; key++) {
				var target = enemyUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var ignite = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, ignite);
			ignite += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = enemyUnits[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debug) echo += debug_name(src_card) + ' ignites ' + debug_name(target) + ' but it is invisible!<br>';
					continue;
				}

				target.scorch(ignite);
				if (debug) echo += debug_name(src_card) + ' ignites(' + ignite + ') ' + debug_name(target) + '<br>';

				if (target.backlash) {
					backlash(src_card, target);
				}
			}

			return true;
		},

		// Jam (Freeze)
		// - Has cooldown timer (only fires every x turns)
		// - Can target specific faction
		// - Targets active_next_turn, unjammed enemy assaults
		// - Can be evaded
		// - If evaded, cooldown timer is not reset (tries again next turn)
		jamself: function jamself(src_card, skill) {

			src_card.jammed = true;
			src_card.jammedSelf = true;
			if (debug) echo += debug_name(src_card) + ' freezes itself<br>';

			return 1;
		},
		jam: function jam(src_card, skill) {

			var all = skill.all;

			var enemyUnits = getEnemyUnits(src_card, field);

			var targets = [];

			for (var key = 0, len = enemyUnits.length; key < len; key++) {
				var target = enemyUnits[key];
				if (target.isAlive()
					&& (all || (target.isActiveNextTurn() && target.isUnjammed()))) {
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
				var target = enemyUnits[targets[key]];

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

				if (target.backlash) {
					backlash(src_card, target);
				}
			}

			return affected;
		},

		// Frostbreath
		// - Targets opposing enemy unit and any adjacent enemy units
		// - Can be evaded
		// - Must calculate enfeeble/protect
		// - Can be enhanced
		frost: function (src_card, skill) {

			var enemyUnits = getEnemyUnits(src_card, field);

			var targets = [];

			var i = src_card.key - 1;
			var end = i + 2;
			for (; i <= end; i++) {
				var target = enemyUnits[i];
				if (target && target.isAlive()) {
					targets.push(i);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			var frost = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, frost);
			frost += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = enemyUnits[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debug) echo += debug_name(src_card) + ' breathes frost at ' + debug_name(target) + ' but it is invisible!<br>';
					continue;
				}

				var frost_damage = frost;

				// Check Protect/Enfeeble
				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(target, frost_damage);
				frost_damage = damageInfo.damage;
				var shatter = damageInfo.shatter;

				do_damage(src_card, target, frost_damage, shatter, function (source, target, amount) {
					echo += '<u>(Frostbreath: +' + skill.x;
					if (enhanced) echo += ' Enhance: +' + enhanced;
					echo += damageInfo.echo;
					echo += ') = ' + amount + ' damage</u><br>';
					echo += debug_name(source) + ' breathes frost at ' + debug_name(target) + ' for ' + amount + ' damage';
					echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
				});

				if (target.backlash) {
					backlash(src_card, target);
				}
			}

			return true;
		},

		heartseeker: function (src_card, skill) {

			var heartseeker = skill.x;

			var target = getEnemyUnits(src_card, field)[src_card.key];

			// No Targets
			if (!target) return 0;

			var enhanced = getEnhancement(src_card, skill.id, heartseeker);
			heartseeker += enhanced;

			target.heartseeker += heartseeker;
			target.enfeebled += heartseeker;
			if (debug) echo += debug_name(src_card) + ' inflicts heartseeker ' + heartseeker + ' on ' + debug_name(target) + '<br>';

			return 1;
		},
		// Enfeeble (Hex)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Can be enhanced
		enfeeblebge: function (src_card, skill) {
			// Alias for enfeeble
			return activationSkills.enfeeble(src_card, skill, true);
		},
		enfeeble: function (src_card, skill) {

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var enemyUnits = getEnemyUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = enemyUnits.length; key < len; key++) {
				var target = enemyUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var enfeeble = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, enfeeble);
			enfeeble += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = enemyUnits[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debug) echo += debug_name(src_card) + ' hexes ' + debug_name(target) + ' but it is invisible!<br>';
					continue;
				}

				target['enfeebled'] += enfeeble;
				if (debug) echo += debug_name(src_card) + ' hexes ' + debug_name(target) + ' by ' + enfeeble + '<br>';

				if (target.backlash) {
					backlash(src_card, target);
				}
			}

			return true;
		},

		// Weaken
		// - Can target specific faction
		// - Targets active_next_turn, unjammed, enemy assaults with attack > 0
		// - Can be evaded
		// - Can be enhanced
		weakenself: function (src_card, skill) {
			return activationSkills.weaken(src_card, skill);
		},
		weakenbge: function (src_card, skill) {
			// Alias for weaken
			return activationSkills.weaken(src_card, skill);
		},
		weaken: function (src_card, skill) {

			var faction = skill.y;
			var rarity = skill.z;

			var potentialTargets;
			switch (skill.id) {
				case 'weakenself':
					potentialTargets = getAlliedUnits(src_card, field);
					break;
				default:
					potentialTargets = getEnemyUnits(src_card, field);
					break;
			}

			var all = skill.all;

			var targets = [];
			var getTargets = function (include0Strength) {
				for (var key = 0, len = potentialTargets.length; key < len; key++) {
					var target = potentialTargets[key];
					if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)
						&& (all || (target.isActiveNextTurn() && target.isUnjammed() && (include0Strength || target.hasAttack())))) {
						targets.push(key);
					}
				}
			};
			getTargets(false);
			// Only target 0-strength units if there are no 1+ strength units left
			if (!targets.length) {
				getTargets(true);
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var weaken = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, weaken);
			weaken += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = potentialTargets[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debug) echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' but it is invisible!<br>';
					continue;
				}

				target.attack_weaken += weaken;
				target.attackIncreasePrevention += weaken;
				if (debug) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += debug_name(src_card) + ' weakens ' + debug_name(target) + ' by ' + weaken + '<br>';
				}
			}

			return true;
		},

		// Vampirism
		// - Reduced by Barrier, Ward, and Shroud
		// - Not blocked by Invisibility 
		// - Does not trigger Backlash
		// This is a pseudo-activation-skill: it is not triggered
		// in the same loop as the rest, and activates even
		// when the unit is frozen or on cooldown
		vampirism: function vampirism(sourceCard, enemyAssaults) {
			var target = enemyAssaults[sourceCard.key];
			
			if (target && target.isAlive()) {
				var vampirism = sourceCard.vampirism;
				var damageInfo = modifySkillDamage(target, vampirism, { enfeeble: true });
				var damageDealt = damageInfo.damage;

				do_damage(sourceCard, target, damageDealt, damageInfo.shatter, function (source, target, amount) {
					echo += '<u>(Vampirism: +' + vampirism;
					echo += damageInfo.echo;
					echo += ') = ' + amount + ' damage</u><br>';
					echo += debug_name(source) + ' activates vampirism, dealing ' + amount + ' damage to ' + debug_name(target);
					echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
				});

				if (damageDealt > 0) {
					var healthMissing = sourceCard.health - sourceCard.health_left;
					var healing = Math.min(sourceCard.vampirism, healthMissing);
					if (echo && healing) echo += debug_name(sourceCard) + ' recovers ' + healing + ' health from vampirism<br />';
					sourceCard.health_left += healing;
				}

				if (showAnimations) {
					drawField(field, null, null, turn, sourceCard);
				}
			}
		}
	};

	var earlyActivationSkills = {
		// Rally
		// - Targets self
		// - Can be enhanced
		// - Cannot be nullified
		enlarge: function (src_card, skill) {

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var alliedUnits = getAlliedUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = alliedUnits.length; key < len; key++) {
				var target = alliedUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)
					&& (all || (target.isUnjammed() && target.isActive()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var rally = (skill.x || 0);
			var enhanced = getEnhancement(src_card, skill.id, rally);
			rally += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = alliedUnits[targets[key]];

				var rally_amt = rally + getSkillMult(skill, target, 'attack');
				rally_amt = adjustAttackIncrease(target, rally_amt);

				target.attack_rally += rally_amt;
				if (debug) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += debug_name(src_card) + ' enlarges ' + debug_name(target) + ' by ' + rally_amt + '<br>';
				}
			}

			return true;
		},

		// Rally
		// - Can target specific faction
		// - Targets allied unjammed, active assaults
		// - Can be enhanced
		rally: function (src_card, skill) {

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var alliedUnits = getAlliedUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = alliedUnits.length; key < len; key++) {
				var target = alliedUnits[key];

				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)
					&& (all || (target.isActive() && target.isUnjammed()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}

			var rally = (skill.x || 0);
			var enhanced = getEnhancement(src_card, skill.id, rally);
			rally += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {

				var target = alliedUnits[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debug) echo += debug_name(src_card) + ' empowers ' + debug_name(target) + ' but it is nullified!<br>';
					continue;
				}

				var rally_amt = rally + getSkillMult(skill, target, 'attack');
				rally_amt = adjustAttackIncrease(target, rally_amt);

				target.attack_rally += rally_amt;
				if (debug) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += debug_name(src_card) + ' empowers ' + debug_name(target) + ' by ' + rally_amt + '<br>';
				}
			}

			return true;
		},

		// Legion
		// - Targets specific faction
		// - Targets allied adjacent unjammed, active assaults
		// - Can be enhanced?
		radiance: function (src_card, skill) {

			var alliedUnits = getAlliedUnits(src_card, field);

			var rally = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, rally);
			rally += enhanced;

			var faction = skill.y;
			var rarity = skill.z;

			var target_key = src_card.key - 1;
			var len = target_key + 2;
			if (target_key < 0) target_key += 2;

			while (target_key <= len) {
				// Check left
				var target = alliedUnits[target_key];
				if (target && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
					// Check Nullify
					if (target.nullified) {
						target.nullified--;
						if (debug) echo += debug_name(src_card) + ' activates ' + skill.id + ', empowering ' + debug_name(target) + ' but it is nullified!<br>';
					} else {
						var protectAmount = Math.ceil(rally * 0.5);
						var rally_amt = adjustAttackIncrease(target, rally);
						target.attack_rally += rally_amt;
						target.protected += protectAmount;
						if (debug) {
							if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
							echo += debug_name(src_card) + ' activates ' + skill.id +
								', empowering ' + debug_name(target) + ' by ' + rally_amt +
								' and protecting it by ' + protectAmount + '<br>';
						}
					}
				}
				target_key += 2;
			}

			return true;
		},
		legion: function (src_card, skill) {

			var alliedUnits = getAlliedUnits(src_card, field);

			var rally = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, rally);
			rally += enhanced;

			var faction = skill.y;
			var rarity = skill.z;

			var target_key = src_card.key - 1;
			var len = target_key + 2;
			if (target_key < 0) target_key += 2;

			var affected = 0;

			while (target_key <= len) {
				// Check left
				var target = alliedUnits[target_key];
				if (target && target.isActive() && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
					// Check Nullify
					if (target.nullified) {
						target.nullified--;
						if (debug) echo += debug_name(src_card) + ' activates ' + skill.id + ', empowering ' + debug_name(target) + ' but it is nullified!<br>';
					} else {
						affected++;
						var rally_amt = adjustAttackIncrease(target, rally);
						target.attack_rally += rally_amt;
						if (debug) {
							if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
							echo += debug_name(src_card) + ' activates ' + skill.id + ', empowering ' + debug_name(target) + ' by ' + rally_amt + '<br>';
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

			var alliedUnits = getAlliedUnits(src_card, field);

			var rally = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, rally);
			rally += enhanced;

			var faction = skill.y;
			var rarity = skill.z;

			var fervorAmount = 0;

			var target_key = src_card.key - 1;
			var len = target_key + 2;
			if (target_key < 0) target_key += 2;

			while (target_key <= len) {
				var target = alliedUnits[target_key];
				if (target && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
					fervorAmount += rally;
				}
				target_key += 2;
			}

			if (fervorAmount) {
				fervorAmount = adjustAttackIncrease(src_card, fervorAmount);
				src_card.attack_rally += fervorAmount;
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

			var barrages = skill.x;
			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var enemyUnits = getEnemyUnits(src_card, field);

			var enhanced = getEnhancement(src_card, skill.id, barrages);
			barrages += enhanced;
			for (var i = 0; i < barrages; i++) {
				var targets = [];
				for (var key = 0, len = enemyUnits.length; key < len; key++) {
					var target = enemyUnits[key];
					if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
						targets.push(key);
					}
				}

				// No Targets
				if (!targets.length) return 0;

				// Check All
				if (!all) {
					targets = choose_random_target(targets);
				}

				var strike = 1;
				for (var key = 0, len = targets.length; key < len; key++) {
					var target = enemyUnits[targets[key]];

					// Check Evade
					if (target.invisible) {
						target.invisible--;
						if (debug) echo += debug_name(src_card) + ' throws a bomb at ' + debug_name(target) + ' but it is invisible!<br>';
						continue;
					}

					var strike_damage = strike;

					// Check Protect/Enfeeble
					var damageInfo = modifySkillDamage(target, strike_damage, { enfeeble: true });
					strike_damage = damageInfo.damage;
					var shatter = damageInfo.shatter;

					do_damage(src_card, target, strike_damage, shatter, function (source, target, amount) {
						echo += '<u>(Barrage: +1';
						echo += damageInfo.echo;
						echo += ') = ' + amount + ' damage</u><br>';
						echo += debug_name(source) + ' throws a bomb at ' + debug_name(target) + ' for ' + amount + ' damage';
						echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
					});
				}
			}

			return true;
		},

		// Enhance
		// - Can target specific faction
		// - Targets allied, units
		// - Target must be active this turn (for activation skills only)
		// - Target must not be frozen (for activation skills only)
		// - Target must have specific "enhanceable skill"
		enhance: function (src_card, skill) {

			var faction = skill.y;
			var rarity = skill.z;
			var s = skill.s;
			var all = skill.all;

			var alliedUnits = getAlliedUnits(src_card, field);
			var require_active_turn = requiresActiveTurn(s);
			var targets = [];
			for (var key = 0, len = alliedUnits.length; key < len; key++) {
				var target = alliedUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)
					&& (all || !require_active_turn || (target.isActive() && target.isUnjammed()))
					&& target.hasSkill(s)) {
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

			var x = (skill.x || 0);
			var mult = skill.mult;
			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = alliedUnits[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debug) echo += debug_name(src_card) + ' enhances ' + debug_name(target) + ' but it is nullified!<br>';
					continue;
				}

				affected++;

				var enhancements = target.enhanced;
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

		// Enrage
		// - Can target specific faction
		// - Targets allied assaults
		// - Can be enhanced
		enrage: function (src_card, skill) {

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var alliedUnits = getAlliedUnits(src_card, field);

			var targets = [];
			for (var key = 0, len = alliedUnits.length; key < len; key++) {
				var target = alliedUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}
			
			var enrage = (skill.x || 0);
			var enhanced = getEnhancement(src_card, skill.id, enrage);
			enrage += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = alliedUnits[targets[key]];
				var amount = enrage;

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debug) echo += debug_name(src_card) + ' enrages ' + debug_name(target) + ' but it is nullified!<br>';
					continue;
				}

				if (skill.mult) {
					amount = Math.ceil(skill.mult * target.health);
				}

				target['enraged'] += amount;
				if (debug) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += debug_name(src_card) + ' enrages ' + debug_name(target) + ' by ' + amount + '<br>';
				}
			}

			return true;
		},

		// Enhance
		// - Can target specific faction
		// - Targets allied, units
		// - Target must be active this turn (for activation skills only)
		// - Target must not be frozen (for activation skills only)
		// - Target must have specific "enhanceable skill" ("all" versions aren't counted)
		imbue: function (src_card, skill) {

			var faction = skill.y;
			var rarity = skill.z;
			var s = skill['s'];
			var all = skill.all;

			var alliedUnits = getAlliedUnits(src_card, field);
			var require_active_turn = requiresActiveTurn(s);
			var targets = [];
			for (var key = 0, len = alliedUnits.length; key < len; key++) {
				var target = alliedUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)
					&& (all || !require_active_turn || (target.isActive() && target.isUnjammed()))) {
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

			var x = (skill.x || 0);
			var skill = {
				id: s,
				x: x
			};
			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = alliedUnits[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debug) echo += debug_name(src_card) + ' enhances ' + debug_name(target) + ' but it is nullified!<br>';
					continue;
				}

				affected++;

				if (target.hasSkill(s)) {
					var enhancements = target.enhanced;
					enhancements[s] = (enhancements[s] || 0) + x;
					if (debug) echo += debug_name(src_card) + ' imbues ' + debug_name(target, false) + ' existing ' + debug_skill(skill) + ' by ' + x + '<br>';
				} else {
					target.imbue(skill);
					if (debug) echo += debug_name(src_card) + ' imbues ' + debug_name(target, false) + ' with ' + debug_skill(skill) + '<br>';
				}
			}

			return affected;
		},

		mark: function (src_card, skill) {

			var faction = skill.y;
			var rarity = skill.z;
			var all = skill.all;

			var enemyUnits = getEnemyUnits(src_card, field);

			var markTarget = src_card.mark_target;
			var targets = [];
			for (var key = 0, len = enemyUnits.length; key < len; key++) {
				var target = enemyUnits[key];
				if (target.isAlive() && target.isInFaction(faction) && target.isTargetRarity(rarity)) {
					// Can only mark one target
					if (target.uid === markTarget) {
						targets = [key];
						break;
					}
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = choose_random_target(targets);
			}
			
			var mark = skill.x;
			var enhanced = getEnhancement(src_card, skill.id, mark);
			mark += enhanced;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = enemyUnits[targets[key]];

				target.enfeebled += mark;
				src_card.mark_target = target.uid;

				if (debug) echo += debug_name(src_card) + ' marks ' + debug_name(target) + ' by ' + mark + '<br>';

				// Set countdown so Mark can't trigger twice on dual-strike turn
				skill.countdown = 1;
			}

			return true;
		}
	};

	var onPlaySkills = {

		ambush: function (src_card, target, skill) {

			var damage = (skill.x || 0) + getSkillMult(skill, target);

			do_damage(src_card, target, damage, null, function (source, target, amount) {
				echo += debug_name(source) + ' ambushes ' + debug_name(target) + ' for ' + amount + ' damage';
				echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
			});

			return 1;
		},

		slow: function (src_card, target, skill) {

			var slow = skill.x + getSkillMult(skill, target);

			target.timer += slow;

			if (debug) {
				echo += debug_name(src_card) + ' slows ' + debug_name(target) + ' by ' + slow + '<br>';
			}

			return 1;
		}
	};

	var onDeathSkills = {
		unearth: function (dying, killer, skill) {

			// Only nontoken creatures can use unearth
			if (dying.isToken) {
				return;
			}

			// Get base card
			var unearthedUnit = makeUnitInfo((skill.card || dying.id), (skill.level || skill.x));
			var unearthedCard = get_card_apply_battlegrounds(unearthedUnit, null, true);
			unearthedCard.isToken = true;

			var mult = skill.mult;
			if (mult) {
				// Unearthed card has scaled stats based on original card
				unearthedCard.attack = Math.floor(dying.attack * mult);
				unearthedCard.health = Math.floor(dying.health * mult);
			}

			play_card(unearthedCard, dying.owner, true);

			if (debug) {
				echo += debug_name(unearthedCard) + ' is unearthed</br>';
			}

			return 1;
		},

		reanimate: function (dying, killer, skill) {

			// Only trigger once
			if (dying.reanimated) {
				return 0;
			}

			applyDefaultStatuses(dying);
			dying.health_left = skill.x;
			dying.reanimated = true;
			// TODO: Change art

			if (debug) {
				echo += ' and is reanimated</br>';
			}

			return 1;
		}
	};

	var onAttackSkills = {
		swarm: function (attacker, defender) {
			var alliedUnits = getAlliedUnits(attacker, field);

			var targets = [];
			for (var key = 0, len = alliedUnits.length; key < len; key++) {
				var target = alliedUnits[key];
				if (target.isAlive() && target.isActive() && !target.isTower()) {
					var adjustedAttack = target.adjustedAttack();
					if (!weakest || adjustedAttack < weakest) {
						targets = [target];
						weakest = adjustedAttack;
					} else if (adjustedAttack === weakest) {
						targets.push(target);
					}
				}
			}

			if(!targets.length) {
				return 0;
			}

			var swarm = attacker.swarm;
			var enhanced = getEnhancement(attacker, 'swarm', swarm);
			swarm += enhanced;

			var weakest = choose_random_target(targets)[0];
			swarm = adjustAttackIncrease(weakest, swarm);
			weakest.attack_berserk += swarm;

			if (debug) {
				echo += debug_name(attacker) + ' activates swarm, boosting the attack of ' + debug_name(attacker) + ' by ' + swarm + '</br>';
			}

			return 1;
		}
	};

	// Activation Skills
	// - Must traverse through skills from top to bottom
	function activation_skills(src_card) {

		if (src_card.silenced) {
			if (debug) echo += debug_name(src_card) + " is silenced and cannot use skills</br>";
			return;
		}

		var skills = src_card.skill;

		var isAlive = makeLivenessCheck(src_card);
		for (var i = 0, len = skills.length; i < len && isAlive(); i++) {
			var skill = skills[i];

			if (skill.countdown) {
				continue;
			}

			// Delegate to skill function
			var skillFn = getActivatedSkill(activationSkills, skill.id);
			var affected = skillFn(src_card, skill);

			if (skill.c && affected) {
				skill.countdown = skill.c;
			}

			if (showAnimations) {
				drawField(field, null, null, turn, src_card);
			}
		}
	}

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
		};

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
			cache_cpu_deck_cards = getDeckCards(cache_cpu_deck, 'cpu');
		} else if (getraid) {
			cache_cpu_deck = load_deck_raid(getraid, raidlevel);
			cache_cpu_deck_cards = getDeckCards(cache_cpu_deck, 'cpu');
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

		deck.cpu.chooseCard = (/*livePvP ? waitForOpponent                  // If this is "Live PvP" - wait for opponent to choose a card
								: */getordered2 ? chooseCardOrdered           // Ordered mode tries to pick the card closest to the specified ordering
				: pvpAI ? chooseCardByPoints                // PvP defenders have a special algorithm for determining which card to play
					: getexactorder2 ? chooseCardRandomly       // If deck is not shuffled, but we're not playing "ordered mode", pick a random card from hand
						: chooseFirstCard);                         // If none of the other options are true, this is the standard PvE AI and it just picks the first card in hand
	}

	// Simulate one game
	function simulate() {
		simulating = true;

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
				var uid = 150;
				towerCard.uid = uid;
				field.uids[uid] = towerCard;
				towerCard.isTower = function() { return true; };
				play_card(towerCard, 'cpu', -1, true);
			}
		}

		return performTurns(0);
	}

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
		cache_player_deck_cards = getDeckCards(cache_player_deck, 'player');

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
		cache_cpu_deck_cards = getDeckCards(cache_cpu_deck, 'cpu');
	}

	function setupField(field) {
		// Initialize Commander on the fields and set uids
		var uids = field.uids = {};
		['player', 'cpu'].forEach(function (player) {
			var pDeck = deck[player];
			var cards = pDeck.deck;
			var uidBase = (player === 'player' ? 1 : 101);
			for (var i = 0; i < cards.length; i++) {
				var uid = uidBase + i;
				var card = cards[i];
				card.owner = player;
				card.played = false;
				card.uid = uid;
				uids[uid] = card;
			}

			var commander = pDeck.commander;
			commander.owner = player;
			commander.health_left = commander.health;
			if (!commander.reusableSkills) commander.resetTimers();

			var uid = (player === 'player' ? -1 : -2);
			commander.uid = uid;
			uids[uid] = commander;
			field[player].commander = commander;
		});
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

	function debugDraw(commander, deck, i) {
		var card = deck[i];
		if (card) {
			return commander + ' draws ' + debug_name(card, true) + '<br/>';
		} else {
			return '';
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

		if (debug) {
			var commander_p = debug_name(field[p]['commander']);
			var deck_p = deck[p].deck;
			echo += '<div id="turn_"' + turn + ' class="turn-info"><hr/><br/><u>Turn ' + turn + ' begins for ' + commander_p + '</u><br>';

			if (turn <= 2) {
				echo += debugDraw(commander_p, deck_p, 0);
				echo += debugDraw(commander_p, deck_p, 1);
			}
			echo += debugDraw(commander_p, deck_p, 2);
		}

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
				}
			}

			// Check valor
			if (current_assault.valor) {
				var enemy = field_o_assaults[i];
				if (enemy && current_assault.adjustedAttack() < enemy.adjustedAttack()) {
					var valor = adjustAttackIncrease(current_assault, current_assault.valor);
					current_assault.attack_valor += valor;
					if (debug) echo += debug_name(current_assault) + ' activates valor, boosting its attack by ' + valor + '<br/>';
				} else if (debug) {
					echo += debug_name(current_assault) + ' activates valor but ';
					if (!enemy) {
						echo += 'there is no opposing enemy.<br/>';
					} else {
						echo += 'enemy is not strong enough.<br/>';
					}
				}
			}

			current_assault.enfeebled = current_assault.envenomed + current_assault.heartseeker;
			current_assault.enraged = 0;
			current_assault.invisible = 0;
			current_assault.protected = 0;
			current_assault.barrier_ice = 0;
			current_assault.warded = 0;
			current_assault.enhanced = {};
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
						play_card(card.trap, p, turn);
						card.trap = false;
					}
					if (i === 2) break;
				}
				card_picked = deck_p.chooseCard(p, deck_p_deck, deck_p_ordered, turn, drawCards);
			}

			if (card_picked < 0) return false;

			play_card(deck_p_deck[card_picked], p, turn);

			removeFromDeck(deck_p_deck, card_picked);
		}
		return true;
	}

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
			var cardInHand;
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
		if(card.maxLevel < 10) {
			// Each rarity level is worth 6 points
			var rarity = parseInt(card.rarity) * 6;
			// Each fusion is worth half of a rarity
			var fusion = (cardID.length > 4 ? parseInt(cardID[0]) : 0) * 3;
			// Subtract a point for every missing upgrade level
			var level = parseInt(card.level) - parseInt(card.maxLevel);
			return rarity + fusion + level;
		} else {
			var rarity = parseInt(card.rarity) * 5;
			var level = card.level;
			// Was 5 - may need to reconfirm
			return rarity + 6 + level;
		}
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
			if (battleground.ally_only && p !== 'player') continue;
			battleground.owner = p;
			doEarlyActivationSkills(battleground);
			activation_skills(battleground);
		}

		// Do Commander Early Activation Skills
		doEarlyActivationSkills(field_p.commander);

		// Set invisibile/ward/shrouded after enhance has had a chance to fire
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var current_assault = field_p_assaults[key];
			if(!current_assault.silenced) {
				setPassiveStatus(current_assault, 'evade', 'invisible');
				setPassiveStatus(current_assault, 'absorb', 'warded');
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

			if (!current_assault.isAlive()) {
				continue;
			}

			// Check Timer
			if (!current_assault.isActive()) {
				// Activate vampirism if on cooldown
				if (current_assault.vampirism) {
					activationSkills.vampirism(current_assault, field_o_assaults);
				}
				if (debug) echo += debug_name(current_assault) + ' is not active yet<br>';
				continue;
			}

			// Check jammed ("frozen")
			if (current_assault['jammed']) {
				// Activate vampirism if frozen
				if (current_assault.vampirism) {
					activationSkills.vampirism(current_assault, field_o_assaults);
				}
				if (debug) echo += debug_name(current_assault) + ' is frozen and cannot attack<br>';
				continue;
			}

			var activations = 1;
			if (current_assault.dualstrike_triggered) {
				activations++;
				if (debug) echo += debug_name(current_assault) + ' activates dualstrike<br>';
			}

			for (; activations > 0; activations--) {
				if (current_assault.vampirism) {
					activationSkills.vampirism(current_assault, field_o_assaults);
				}

				// Activation skills
				activation_skills(current_assault);

				// See if unit died from Backlash/Iceshatter
				if (!current_assault.isAlive()) {
					continue;
				}

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
	}

	function setPassiveStatus(assault, skillName, statusName) {
		var statusValue = 0;

		if (assault[skillName]) {
			statusValue = assault[skillName];
			var enhanced = getEnhancement(assault, skillName, statusValue);
			statusValue += enhanced;
		}

		assault[statusName] = statusValue;
	}

	function modifySkillDamage(target, damage, exclusions) {
		// Check Protect/Enfeeble
		exclusions = (exclusions || {});
		var enfeeble = (exclusions.enfeeble ? 0 : (target.enfeebled || 0));
		var shrouded = (exclusions.stasis ? 0 : checkShroud(target));
		var protect = (exclusions.protect ? 0 : (target.protected || 0));
		var warded = (exclusions.ward ? 0 : (target.warded || 0));

		damage += enfeeble;
		var shatter = false;
		if (warded) {
			damage -= applyDamageReduction(target, 'warded', damage);
		}
		if (protect) {
			damage -= applyDamageReduction(target, 'protected', damage);
			if (target.protected == 0) {
				shatter = target.barrier_ice;
			}
		}
		if (shrouded) {
			damage -= shrouded;
		}

		var echo = '';
		if (debug) {
			if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
			if (shrouded) echo += ' Shroud: -' + shrouded;
			if (protect) echo += ' Barrier: -' + protect;
			if (warded) echo += ' Ward: -' + warded;
		}

		if (damage < 0) {
			damage = 0;
		}

		return {
			damage: damage,
			shatter: shatter,
			echo: echo
		};
	}

	function applyDamageReduction(target, statusName, damage) {
		var statusValue = target[statusName];
		if (damage >= statusValue) {
			target[statusName] = 0;
			return statusValue;
		} else {
			target[statusName] -= damage;
			return damage;
		}
	}

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

			// Make sure jam-self doesn't wear off at end of turn it was applied
			if (current_assault.jammedSelf) {
				current_assault.jammedSelf = false;
			} else {
				current_assault.jammed = false;
			}
			current_assault.attack_rally = 0;
			current_assault.attack_weaken = 0;
			current_assault.attackIncreasePrevention = 0;
			current_assault.nullified = 0;
			current_assault.dualstrike_triggered = false;
			current_assault.bash_triggered = false;
			current_assault.silenced = false;

			// Regenerate
			if (current_assault.regenerate && current_assault.isDamaged() && !current_assault.silenced) {

				var regen_health = current_assault.regenerate;
				var enhanced = getEnhancement(current_assault, 'regenerate', regen_health);
				regen_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (regen_health >= healthMissing) {
					regen_health = healthMissing;
				}

				current_assault.health_left += regen_health;
				if (debug) echo += debug_name(current_assault) + ' regenerates ' + regen_health + ' health<br>';
			}

			// Poison
			var amount = current_assault.poisoned;
			if (amount) {
				var warded = current_assault.warded;
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
				}
				do_damage(null, current_assault, amount, null, function (source, target, amount) {
					echo += debug_name(target) + ' takes ' + amount;
					if (warded) echo += ' (Poison: +' + current_assault.poisoned + ' Ward: -' + warded + ')';
					echo += ' poison damage';
					echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
				});
			}

			// Venom
			var amount = current_assault.envenomed;
			if (amount) {
				var warded = current_assault.warded;
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
				}
				do_damage(null, current_assault, amount, null, function (source, target, amount) {
					echo += debug_name(target) + ' takes ' + amount;
					if (warded) echo += ' (Venom: +' + current_assault.envenomed + ' Ward: -' + warded + ')';
					echo += ' venom damage';
					echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
				});
			}

			// Scorch
			var scorch = current_assault.scorched;
			if (scorch) {
				amount = scorch.amount;
				var warded = current_assault.warded;
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
				}
				do_damage(null, current_assault, amount, null, function (source, target, amount) {
					echo += debug_name(target) + ' takes ' + amount;
					if (warded) echo += ' (Scorch: +' + scorch.amount + ' Ward: -' + warded + ')';
					echo += ' scorch damage';
					if (!target.isAlive()) echo += ' and it dies';
					else if (!target.scorched) echo += ' and scorch wears off';
					echo += '<br>';
				});

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
					var corrosion = corroded.amount;
					current_assault.attack_corroded = corrosion;
					if (debug) {
						echo += debug_name(current_assault) + ' loses ' + corrosion + ' attack to corrosion<br>';
					}
				}
			}

			if (!current_assault.isAlive()) {
				doOnDeathSkills(current_assault, null);
			}
		}
	}

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

		// Bash
		var bash = 0;
		if (!current_assault.bash_triggered) {
			bash = current_assault.bash;
			current_assault.bash_triggered = true;
		}
		damage += bash;

		// Enfeeble
		var enfeeble = target.enfeebled;
		damage += enfeeble;

		if (debug) {
			echo += '<u>(Attack: +' + current_assault.attack;
			if (current_assault.attack_berserk) echo += ' Berserk: +' + current_assault.attack_berserk;
			if (current_assault.attack_valor) echo += ' Valor: +' + current_assault.attack_valor;
			if (current_assault.attack_rally) echo += ' Rally: +' + current_assault.attack_rally;
			if (bash) echo += ' Bash: +' + bash;
			if (current_assault.attack_weaken) echo += ' Weaken: -' + current_assault.attack_weaken;
			if (current_assault.attack_corroded) echo += ' Corrosion: -' + current_assault.attack_corroded;
			if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
		}

		// Pierce
		// var pierce = current_assault['skill']['pierce'];
		var pierce = current_assault.pierce;
		if (pierce) {
			var enhanced = getEnhancement(current_assault, 'pierce', pierce);
			pierce += enhanced;
		} else {
			pierce = 0;
		}

		// Damage reduction
		var protect = target.protected;
		var shatter = false;
		var armor = (target.silenced ? 0 : target.armored);
		var shrouded = (target.silenced ? 0 : checkShroud(target));
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
		if (shrouded) {
			shrouded += getEnhancement(target, 'stasis', shrouded);
			if (debug) {
				echo += ' Shroud: -' + shrouded;
			}
			// Remove pierce from Shroud
			if (pierce) {
				if (pierce > shrouded) {
					if (debug) echo += ' Pierce: +' + shrouded;
					shrouded = 0;
				} else {
					if (debug) echo += ' Pierce: +' + pierce;
					shrouded -= pierce;
				}
			}
			damage -= shrouded;
		}
		if (armor) {
			armor += getEnhancement(target, 'armored', armor);
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
		do_damage(current_assault, target, damage, null, function (source, target, amount) {
			echo += debug_name(source) + ' attacks ' + debug_name(target) + ' for ' + amount + ' damage';
			echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
		});

		if (showAnimations) {
			drawField(field, null, null, turn, current_assault);
		}

		// WINNING CONDITION
		if (!field_o_commander.isAlive()) {
			return;
		}

		// Damage-dependent Status Inflictions
		if (damage > 0 && target.isAssault() && target.isAlive() && !current_assault.silenced) {
			// Poison
			// - Target must have taken damage
			// - Target must be an assault
			// - Target must not be already poisoned of that level
			if (current_assault.poison) {
				var poison = current_assault.poison;
				var enhanced = getEnhancement(current_assault, 'poison', poison);
				poison += enhanced;
				if (poison > target.poisoned) {
					target.poisoned = poison;
					if (debug) echo += debug_name(current_assault) + ' inflicts poison(' + poison + ') on ' + debug_name(target) + '<br>';
				}
			}

			// Venom
			// - Target must have taken damage
			// - Target must be an assault
			// - Sets poisioned to greater of target's current poisioned or new poison
			// - Sets envenomed to greater of target's current envenomed or new venom
			if (current_assault.venom) {
				var venom = current_assault.venom;
				var enhanced = getEnhancement(current_assault, 'venom', venom);
				venom += enhanced;

				if (venom > target.envenomed) {
					var hexIncrease = venom - target.envenomed;
					target.envenomed = venom;
					target.enfeebled += hexIncrease;
					if (debug) echo += debug_name(current_assault) + ' inflicts venom(' + venom + ') on ' + debug_name(target) + '<br>';
				}
			}

			// Nullify
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.nullify) {
				var nullify = current_assault.nullify;
				var enhanced = getEnhancement(current_assault, 'nullify', nullify);
				nullify += enhanced;
				target.nullified += nullify;
				if (debug) echo += debug_name(current_assault) + ' inflicts nullify(' + nullify + ') on ' + debug_name(target) + '<br>';
			}

			// Silence
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.silence) {
				target.silenced = true;
				// Remove passive statuses for this turn
				target.invisible = 0;
				target.warded = 0;
				if (debug) echo += debug_name(current_assault) + ' inflicts silence on ' + debug_name(target) + '<br>';
			}

			// Daze
			// - Target must have taken damage
			// - Target must be an assault
			if (current_assault.daze) {

				var dazed = current_assault.daze;
				var enhanced = getEnhancement(current_assault, 'daze', dazed);
				dazed += enhanced;

				target.attack_weaken += dazed;
				if (debug) echo += debug_name(current_assault) + ' dazed ' + debug_name(target) + ' for ' + dazed + '<br>';
			}
		}

		if (shatter) {
			iceshatter(target);
		}

		if (damage > 0 && current_assault.isAlive()) {
			// Leech
			// - Must have dealt damage
			// - Cannot leech more than damage dealt
			// - Cannot leech more health than damage sustained
			// - Leecher must not be already dead
			// - Leecher must not be at full health
			// - Increases attack too during Invigorate battleground effect
			if(!current_assault.silenced) {
				if (current_assault.leech && current_assault.isDamaged()) {

					var leech_health = current_assault.leech;
					var enhanced = getEnhancement(current_assault, 'leech', leech_health);
					leech_health += enhanced;
					var healthMissing = current_assault.health - current_assault.health_left;
					if (leech_health >= healthMissing) {
						leech_health = healthMissing;
					}

					current_assault.health_left += leech_health;
					if (debug) echo += debug_name(current_assault) + ' siphons ' + leech_health + ' health<br>';
				}

				if (current_assault.reinforce) {
					var reinforce = current_assault.reinforce;
					var enhanced = getEnhancement(current_assault, 'reinforce', reinforce);
					reinforce += enhanced;

					current_assault.protected += reinforce;
					if (debug) echo += debug_name(current_assault) + ' reinforces itself with barrier ' + reinforce + '<br>';
				}
			}

			if(!target.silenced) {
				// Counter
				// - Target must have received some amount of damage
				// - Attacker must not be already dead
				if (target.counter) {

					var counterBase = 0 + target.counter;
					var counterEnhancement = getEnhancement(target, 'counter', counterBase);

					doCounterDamage(current_assault, target, 'Vengance', counterBase, counterEnhancement);
				}

				// Counterburn
				// - Target must have received some amount of damage
				if (target.counterburn) {
					var scorch = target.counterburn || 0;
					var enhanced = getEnhancement(target, 'counterburn', scorch);
					scorch += enhanced;
					if (!current_assault.scorched) {
						current_assault.scorched = { 'amount': scorch, 'timer': 2 };
					} else {
						current_assault.scorched.amount += scorch;
						current_assault.scorched.timer = 2;
					}
					if (debug) echo += debug_name(target) + ' inflicts counterburn(' + scorch + ') on ' + debug_name(current_assault) + '<br>';
				}

				// Counterpoison
				// - Target must have received some amount of damage
				if (target.counterpoison) {
					var poison = target.counterpoison || 0;
					var enhanced = getEnhancement(target, 'counterpoison', poison);
					poison += enhanced;

					if (poison > current_assault.poisoned) {
						current_assault.poisoned = poison;
						if (debug) echo += debug_name(target) + ' inflicts counterpoison(' + poison + ') on ' + debug_name(current_assault) + '<br>';
					}
				}

				// Fury
				// - Target must have received some amount of damage
				if (target.fury) {
					var furyBase = target.fury;
					var furyEnhancement = getEnhancement(target, 'counter', furyBase);

					if (target.isAlive()) {
						var fury = furyBase + furyEnhancement;
						fury = adjustAttackIncrease(target, fury);
						target.attack_berserk += fury;
						if (debug) {
							echo += debug_name(target) + ' activates fury and gains ' + fury + ' attack<br>';
						}
					}

					doCounterDamage(current_assault, target, 'Fury', furyBase, furyEnhancement);
				}

				var enraged = target.enraged;
				if (enraged > 0) {
					enraged = adjustAttackIncrease(target, enraged);
					target.attack_berserk += enraged;
					if (debug) echo += debug_name(target) + " is enraged and gains " + enraged + " attack!</br>";
				}
			}

			if(!current_assault.silenced) {
				// Berserk
				// - Must have done some damage to an assault unit
				if (current_assault.berserk) {

					var berserk = current_assault.berserk;
					var enhanced = getEnhancement(current_assault, 'berserk', berserk);
					berserk += enhanced;
					berserk = adjustAttackIncrease(current_assault, berserk);

					current_assault.attack_berserk += berserk;
					if (debug) echo += debug_name(current_assault) + ' activates berserk and gains ' + berserk + ' attack<br>';
				}

				// Devour
				// - Must have done some damage to an assault unit
				if (current_assault.devour) {

					var devour = current_assault.devour;
					var enhanced = getEnhancement(current_assault, 'devour', devour);
					devour += enhanced;
					devour = adjustAttackIncrease(current_assault, devour);

					current_assault.attack_berserk += devour;

					var healing = Math.min(devour, current_assault.health - current_assault.health_left);
					if(healing) {
						current_assault.health_left += healing;
					}

					if (debug) {
						echo += debug_name(current_assault) + ' activates devour, gaining ' + devour + ' attack';
						if(healing) echo += ' and healing ' + healing + ' health';
						echo += '<br>';
					}
				}

				// Swarm
				// - Must have done some damage to an assault unit
				if (current_assault.swarm) {
					onAttackSkills.swarm(current_assault, target);
				}
			}
		}

		// -- CHECK STATUS INFLICTION --

		// Corrosion
		// - Target must have received some amount of damage
		if (target.corrosive && !target.silenced) {
			var corrosion = target.corrosive || 0;
			var enhanced = getEnhancement(target, 'corrosive', corrosion);
			corrosion += enhanced;
			if (current_assault.corroded) {
				current_assault.corroded.amount += corrosion;
				current_assault.corroded.timer = 2;
			} else {
				current_assault.corroded = { amount: corrosion, timer: 2 };
			}
			if (debug) echo += debug_name(target) + ' inflicts corrosion(' + corrosion + ') on ' + debug_name(current_assault) + '<br>';
			current_assault.attack_corroded = corrosion;
			if (debug) {
				echo += debug_name(current_assault) + ' loses ' + corrosion + ' attack to corrosion<br>';
			}
		}

		if (!current_assault.isAlive()) {
			doOnDeathSkills(current_assault, target);
		}

		if (showAnimations) {
			drawField(field, null, null, turn, current_assault);
		}
		// -- END OF STATUS INFLICTION --
	}

	function doCounterDamage(attacker, defender, counterType, counterBase, counterEnhancement) {

		var counterDamage = counterBase + counterEnhancement;

		// Protect
		var damageInfo = modifySkillDamage(attacker, counterDamage, { enfeeble: true });
		counterDamage = damageInfo.damage;
		var shatter = damageInfo.shatter;

		if (debug) {
			echo += '<u>(' + counterType + ': +' + counterBase;
			if (counterEnhancement) echo += ' Enhance: +' + counterEnhancement;
			echo += damageInfo.echo;
			echo += ') = ' + counterDamage + ' damage</u><br>';
		}

		do_damage(defender, attacker, counterDamage, null, function (source, target, amount) {
			echo += debug_name(target) + ' takes ' + amount + ' ' + counterType.toLowerCase() + ' damage';
			echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
		});
	}

	function calculatePoints(forceWin) {
		var uids = field.uids;
		var healthStats = {
			player: {
				total: 0,
				taken: 0
			},
			cpu: {
				total: 0,
				taken: 0
			}
		};

		for (var i in uids) {
			var unit = uids[i];
			var stats = healthStats[unit.owner];
			if (stats) {
				stats.total += unit.health;
				if (unit.played || unit.isCommander()) {
					stats.taken += (unit.health - unit.health_left);
				}
			}
		}
		healthStats.player.percent = healthStats.player.taken / healthStats.player.total;
		healthStats.cpu.percent = healthStats.cpu.taken / healthStats.cpu.total;

		var commander_o = field.cpu.commander;
		if (getdeck2) {
			if (commander_o.isAlive() && !forceWin) {
				// 0-25 points, based on percentage of damage dealt to enemy
				var points = Math.floor(healthStats.cpu.percent * 25);
			} else {
				// 115-130 points, based on percentage of damage taken
				var points = 130 - Math.floor(healthStats.player.percent * 15);
			}
		} else {
			if (commander_o.isAlive() && !forceWin) {
				var points = Math.floor(healthStats.cpu.percent / 0.02);
				points = Math.max(5, points);
			} else {
				var points = 200 - Math.floor(healthStats.player.percent / 0.02);
			}
		}
		return points;
	}

	var deck = {};
	var field = {};
	var battlegrounds;
	var simulation_turns = 0;
	var simulating = false;
	var user_controlled = false;
	var livePvP = false;
	var turn = 0;
	var totalDeckHealth = 0;
	var totalCpuDeckHealth = 0;

	// public functions
	SIMULATOR.simulate = simulate;
	SIMULATOR.onPlaySkills = onPlaySkills;
	SIMULATOR.calculatePoints = calculatePoints;
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
		}
	});
})();
