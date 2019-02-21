define('simulatorBase', [
	'cardApi',
	'base64',
	'unitInfoHelper',
	'loadDeck',
	'simController'
], function (
	cardApi,
	base64,
	unitInfoHelper,
	loadDeck,
	simController
) {
	"use strict";

	var SIMULATOR = {};
	window.SIMULATOR = SIMULATOR;
	
	var max_turns = 100;
	var playerDeckCached;
	var cpuDeckCached;
	var cpuCardsCached;
	var playerCardsCached;

	// Play card
	function playCard(card, p, turn, quiet) {
		var field_p_assaults = field[p]['assaults'];

		// Not a valid card
		if (!card.id) return 0;

		var newKey = field_p_assaults.length;
		unitInfoHelper.initializeUnit(card, p, newKey);
		card.played = true;

		if (card.isAssault()) {
			field_p_assaults[newKey] = card;
		}

		if (!quiet) {
			simController.logger.logCardPlayed(field[p].commander, card);
		}

		if (card.isTrap()) {
			doEarlyActivationSkills(card);
			doActivationSkills(card);
		} else {
			// Activate trap/onPlay battlegrounds
			for (var i = 0; i < battlegrounds.onCardPlayed.length; i++) {
				var battleground = battlegrounds.onCardPlayed[i];
				var o = (p === 'player' ? 'cpu' : 'player');

				var surge = SIMULATOR.config.surgeMode;
				if (battleground.defender) {
					if (!surge && p !== 'cpu') continue;
					if (surge && p !== 'player') continue;
					battleground.owner = o;
				} else if (battleground.attacker) {
					if (!surge && p !== 'player') continue;
					if (surge && p !== 'cpu') continue;
					battleground.owner = p;
				} else {
					if (battleground.enemy_only && p !== 'cpu') continue;
					if (battleground.ally_only && p !== 'player') continue;
					battleground.owner = p;
				}

				if (turn > 1 && battleground.first_play) {
					continue;
				}

				battleground.onCardPlayed(card, deck[p].deck, deck[o].deck);
			}
		}
		events.onCardPlayed(field, turn);
	}

	// Dead cards are removed from both fields. Cards on both fields all shift over to the left if there are any gaps.
	function removeDead() {
		removeDeadUnits('player');
		removeDeadUnits('cpu');
	}

	// Shift over to the left if there are any gaps.
	function removeDeadUnits(p) {
		var units = field[p].assaults;
		// Find first dead unit (don't need to update the keys of any units before this one)
		for (var key = 0, len = units.length; key < len; key++) {
			var current_assault = units[key];
			// Starting at the first dead unit, start shifting.
			if (!current_assault.isAlive()) {
				simController.logger.logDead(current_assault);
				var newkey = key;	// Store the new key value for the next alive unit
				for (key++; key < len; key++) {
					current_assault = units[key];
					// If this unit is dead, don't update newkey, we still need to fill that slot
					if (!current_assault.isAlive()) {
						simController.logger.logDead(current_assault);
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
	function chooseRandomTarget(targets) {
		var targetIndex = ~~(Math.random() * targets.length);
		return [targets[targetIndex]];
	}

	function getOwner(card) {
		return card.owner;
	}

	function getAlliedField(card) {
		return field[getOwner(card)];
	}

	function getOpponent(card) {
		if (card.owner === 'cpu') return 'player';
		if (card.owner === 'player') return 'cpu';
	}

	function getOpposingField(card) {
		return field[getOpponent(card)];
	}

	// Deal damage to card
	// and keep track of cards that have died this turn
	function doDamage(sourceUnit, targetUnit, damage, logFn) {
		if (damage >= targetUnit.health_left) {
			targetUnit.health_left = 0;
		} else {
			targetUnit.health_left -= damage;
		}

		logFn();

		if (!targetUnit.isAlive() && sourceUnit) {
			doOnDeathSkills(targetUnit, sourceUnit);
		}
	}

	function getActivatedSkill(skillMap, skillId) {
		return (skillMap[skillId] || notImplemented);
	}

	function notImplemented(sourceUnit, skill) {
		simController.logger.logNotImplemented(sourceUnit, skill);
		return 0;
	}

	// Empower, Legion, and Fervor all activate at the beginning of the turn, after commander
	function doEarlyActivations(fieldOfActivePlayer) {
		var unitsOfActivePlayer = fieldOfActivePlayer.assaults;
		for (var unit_key = 0, unit_len = unitsOfActivePlayer.length; unit_key < unit_len; unit_key++) {
			var currentUnit = unitsOfActivePlayer[unit_key];

			if (currentUnit.isAlive() && currentUnit.isActive() && currentUnit.isUnjammed()) {

				// Check for Dualstrike
				var dualstrike = currentUnit.flurry;
				if (dualstrike && dualstrike.countdown === 0) {
					// Dual-strike does not activate if unit has 0 attack
					if (currentUnit.hasAttack()) {
						dualstrike.countdown = dualstrike.c;
						currentUnit.dualstrike_triggered = true;
					}
				}

				doEarlyActivationSkills(currentUnit);
			}
		}
	}

	function doEarlyActivationSkills(sourceCard) {
		var skills = sourceCard.earlyActivationSkills;
		var len = skills.length;
		if (!len) return;

		if (sourceCard.silenced) {
			simController.logger.logSilenced(sourceCard);
			return;
		}

		var dualstrike = sourceCard.dualstrike_triggered;
		simController.logger.logDualstrike(sourceCard);

		var activations = (dualstrike ? 2 : 1);
		var isAlive = makeLivenessCheck(sourceCard);
		for (var a = 0; a < activations; a++) {
			for (var i = 0; i < len && isAlive(); i++) {
				var skill = skills[i];
				if (!skill.countdown) {
					var skillFn = getActivatedSkill(earlyActivationSkills, skill.id);
					var affected = skillFn(sourceCard, skill);
					if (skill.c && affected > 0) {
						skill.countdown = skill.c;
					}

					events.onEarlyActivationSkills(field, turn, sourceCard);
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
		var skills = dying.onDeathSkills;
		var len = skills.length;
		if (len === 0) return;

		for (var i = 0; i < len; i++) {
			var skill = skills[i];
			onDeathSkills[skill.id](dying, killer, skill);

			events.onOnDeathSkills(field, turn, dying);
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
			var enhancement = unitInfoHelper.getEnhancement(defender, 'backlash', baseDamage);
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

		burnself: function burnself(sourceUnit, skill) {
			var scorch = skill.x;

			if (!sourceUnit.scorched) {
				sourceUnit.scorched = {
					amount: scorch,
					timer: 2
				};
			} else {
				sourceUnit.scorched.amount += scorch;
				sourceUnit.scorched.timer = 2;
			}
			simController.logger.logScorch(sourceUnit, scorch);

			return 1;
		},
		// Scorch
		// - cone-shaped scorch
		scorchbreath: function scorchbreath(sourceUnit, skill) {
			return activationSkills.burn(sourceUnit, skill);
		},
		// Scorch
		// - Target must be an assault
		burn: function burn(sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var field_o_assaults = field[o].assaults;

			var targets;
			switch (skill.id) {
				case 'scorchbreath':
					var startKey = Math.max(0, sourceUnit.key - 1);
					var endKey = Math.min(field_o_assaults.length, sourceUnit.key + 2);
					targets = field_o_assaults.slice(startKey, endKey);
					break;
				case 'burnself':
					targets = [sourceUnit];
					break;
				default:
					targets = field_o_assaults.slice(sourceUnit.key, sourceUnit.key + 1);
					break;
			}
			if (!targets.length) return 0;

			var scorch = skill.x;
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, 'burn', scorch);
			scorch += enhanced;

			var affected = 0;
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
				simController.logger.logScorch(sourceUnit, scorch, target);

				affected++;
			}

			return affected;
		},

		// Protect (Barrier)
		// - Can target specific faction
		// - Targets allied assaults
		// - Can be enhanced
		protect_seafolk: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, null, null, true);
		},
		evadebarrier: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, "invisible", function (target, amount) {
				return ' and imbues it with invisible ' + amount;
			});
		},
		protect: function (sourceUnit, skill, additionalStatus, additionalDebug, onlyOnDelay) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);

			var protect = skill.x;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (!onlyOnDelay || !target.isActive())) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, protect);
			protect += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					simController.logger.logNullified(sourceUnit, 'protects', target);
					continue;
				}

				affected++;

				var amount = protect;
				if (!amount) {
					var mult = skill.mult;
					if (!target.isActive()) {
						mult += (skill.on_delay_mult || 0);
					}
					amount = Math.ceil(target.health * mult);
				}

				target.protected += amount;
				if (additionalStatus) {
					target[additionalStatus] = (target[additionalStatus] || 0) + amount;
				}
				simController.logger.logStatusEffect(sourceUnit, 'barriers', target, enhanced, amount, additionalDebug);
			}

			return affected;
		},

		// Heal
		// - Can target specific faction
		// - Targets allied damaged assaults
		// - Can be enhanced
		heal: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);

			var faction = skill.y;
			var heal = skill.x;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (all || target.isDamaged())) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, heal);
			heal += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					simController.logger.logNullified(sourceUnit, 'heals', target);
					continue;
				}

				affected++;

				var amount = heal;
				if (!amount) {
					var mult = skill.mult;
					amount = Math.ceil(target.health * mult);
				}

				if (amount > target['health'] - target['health_left']) amount = target['health'] - target['health_left'];
				target['health_left'] += amount;
				simController.logger.logStatusEffect(sourceUnit, 'heals', target, enhanced, amount);
			}

			return affected;
		},

		// Strike (Bolt)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Must calculate enfeeble/protect
		// - Can be enhanced
		poisonstrike: function (sourceUnit, skill) {
			return activationSkills.strike(sourceUnit, skill, true);
		},
		strike: function (sourceUnit, skill, poison) {

			var o = getOpponent(sourceUnit);

			var strike = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var targetUnit = field_x_assaults[key];
				if (targetUnit.isAlive() && targetUnit.isInFaction(faction)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, strike);
			strike += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var targetUnit = field_x_assaults[targets[key]];

				// Check Evade
				if (targetUnit.invisible) {
					targetUnit.invisible--;
					simController.logger.logInvisibile(sourceUnit, 'bolts', targetUnit);
					continue;
				}

				affected++;

				var strike_damage = strike;

				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(targetUnit, strike_damage, enhanced);
				strike_damage = damageInfo.damage;

				var poisonDamage = 0;
				if (strike_damage > 0 && poison && targetUnit.isAlive()) {
					if (strike > targetUnit['poisoned']) {
						poisonDamage = strike;
						targetUnit['poisoned'] = poisonDamage;
					}
				}

				doDamage(sourceUnit, targetUnit, strike_damage, function () {
					simController.logger.logDamage(sourceUnit, targetUnit, 'Strike', 'bolts', damageInfo, function() {
						if (poisonDamage && !targetUnit.isAlive()) {
							return ' and inflicts poison(' + poisonDamage + ') on it';
						}
					});
				});

				if (targetUnit.backlash) {
					backlash(sourceUnit, targetUnit);
				}
			}

			return affected;
		},

		// Intensify
		// - Can target specific faction
		// - Targets poisoned/scorched enemy assaults
		// - Can be evaded
		// - Can be enhanced
		intensify: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var intensify = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (target.scorched || target.poisoned)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, intensify);
			intensify += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				var intensifiedFields = (target.scorched ? "scorch" : "");
				intensifiedFields += (target.poisoned ? (intensifiedFields ? " and poison" : "poison") : "");

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					simController.logger.logInvisibile(sourceUnit, 'intensifies ' + intensifiedFields + ' on', target);
					continue;
				}

				affected++;

				if (target.scorched) {
					target.scorched.amount += intensify;
				}
				if (target.poisoned) {
					target.poisoned += intensify;
				}

				simController.logger.logStatusEffect(sourceUnit, 'intensifies ' + intensifiedFields + ' on', target, enhanced, intensify);

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		// Ignite
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Can be enhanced
		ignite: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var faction = skill.y;

			var field_x_assaults = field[o].assaults;

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
					targets.push(key);
				}
			}

			var doApplyDebuff = function doApplyDebuff(target, skillValue) {
				target.scorch(skillValue);
			};
			return applyDebuff(sourceUnit, skill, 'ignites', targets, field_x_assaults, doApplyDebuff);
		},

		// Jam (Freeze)
		// - Has cooldown timer (only fires every x turns)
		// - Can target specific faction
		// - Targets active_next_turn, unjammed enemy assaults
		// - Can be evaded
		// - If evaded, cooldown timer is not reset (tries again next turn)
		jamself: function jamself(sourceUnit) {

			sourceUnit.jammed = true;
			sourceUnit.jammedSelf = true;
			simController.logger.logStatusEffect(sourceUnit, 'freezes', sourceUnit);

			return 1;
		},
		jam: function jam(sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var targets = [];

			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
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
			if (!all) targets = chooseRandomTarget(targets);

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					// Missed - retry next turn
					skill.countdown = 0;
					simController.logger.logInvisibile(sourceUnit, 'freezes', target);
					continue;
				}

				affected++;

				target.jammed = true;
				simController.logger.logStatusEffect(sourceUnit, 'freezes', target);

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		// Frostbreath
		// - Targets opposing enemy unit and any adjacent enemy units
		// - Can be evaded
		// - Must calculate enfeeble/protect
		// - Can be enhanced
		frost: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var frost = skill.x;
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, frost);
			frost += enhanced;

			var field_x_assaults = field[o]['assaults'];

			var targets = [];

			var i = sourceUnit['key'] - 1;
			var end = i + 2;
			for (; i <= end; i++) {
				var targetUnit = field_x_assaults[i];
				if (targetUnit && targetUnit.isAlive()) {
					targets.push(i);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var targetUnit = field_x_assaults[targets[key]];

				// Check Evade
				if (targetUnit.invisible) {
					targetUnit.invisible--;
					simController.logger.logInvisibile(sourceUnit, 'breathes frost at', targetUnit);
					continue;
				}

				affected++;

				var frost_damage = frost;

				// Check Protect/Enfeeble
				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(targetUnit, frost_damage, enhanced);
				frost_damage = damageInfo.damage;

				doDamage(sourceUnit, targetUnit, frost_damage, function () {
					simController.logger.logDamage(sourceUnit, targetUnit, 'Frostbreath', 'breathes frost at', damageInfo);
				});

				if (targetUnit.backlash) {
					backlash(sourceUnit, targetUnit);
				}
			}

			return affected;
		},

		heartseeker: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var heartseeker = skill.x;

			var target = field[o].assaults[sourceUnit.key];

			// No Targets
			if (!target) return 0;

			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, heartseeker);
			heartseeker += enhanced;

			target.heartseeker += heartseeker;
			target.enfeebled += heartseeker;
			simController.logger.logInflicts(sourceUnit, 'heartseeker', heartseeker, target);

			return 1;
		},
		// Enfeeble (Hex)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Can be enhanced
		enfeeble: function (sourceUnit, skill) {

			var faction = skill['y'];

			var o = getOpponent(sourceUnit);

			var field_x_assaults = field[o]['assaults'];

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
					targets.push(key);
				}
			}

			var doApplyDebuff = function (target, skillValue) {
				target.enfeebled += skillValue;
			};
			return applyDebuff(sourceUnit, skill, 'hexes', targets, field_x_assaults, doApplyDebuff);
		},

		// Weaken
		// - Can target specific faction
		// - Targets active_next_turn, unjammed, enemy assaults with attack > 0
		// - Can be evaded
		// - Can be enhanced
		weakenself: function (sourceUnit, skill) {
			return activationSkills.weaken(sourceUnit, skill);
		},
		weaken: function (sourceUnit, skill) {

			var faction = skill['y'];

			var o;
			switch (skill.id) {
				case 'weakenself':
					o = getOwner(sourceUnit);
					break;
				default:
					o = getOpponent(sourceUnit);
					break;
			}

			var all = skill.all;

			var field_x_assaults = field[o]['assaults'];

			var targets = [];
			var getTargets = function (include0Strength) {
				for (var key = 0, len = field_x_assaults.length; key < len; key++) {
					var target = field_x_assaults[key];
					if (target.isAlive() && target.isInFaction(faction)
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

			var doApplyDebuff = function (target, skillValue) {
				target.attack_weaken += skillValue;
			};
			return applyDebuff(sourceUnit, skill, 'weakens', targets, field_x_assaults, doApplyDebuff);
		}
	};

	function applyDebuff(sourceUnit, skill, skillVerb, targetKeys, targetField, doApplyDebuff) {

		// No Targets
		if (!targetKeys.length) return 0;

		var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, skill.x);
		var amount = skill.x + enhanced;

		// Check All
		if (!skill.all) {
			targetKeys = chooseRandomTarget(targetKeys);
		}

		var affected = 0;
		for (var key = 0, len = targetKeys.length; key < len; key++) {
			var target = targetField[targetKeys[key]];

			// Check Evade
			if (target.invisible) {
				target.invisible--;
				simController.logger.logInvisibile(sourceUnit, skillVerb, target);
				continue;
			}

			affected++;

			doApplyDebuff(target, amount);
			simController.logger.logStatusEffect(sourceUnit, skillVerb, target, enhanced, amount);

			if (target.backlash) {
				backlash(sourceUnit, target);
			}
		}

		return affected;
	}

	var earlyActivationSkills = {
		// Rally
		// - Targets self
		// - Can be enhanced
		// - Cannot be nullified
		enlarge: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);

			var rally = skill.x;
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (all || (target.isUnjammed() && target.isActive()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				var amount = rally;
				if (!amount) {
					var mult = skill.mult;
					amount = Math.ceil(target.attack * mult);
				}

				target.attack_rally += amount;
				simController.logger.logStatusEffect(sourceUnit, 'enlarges', target, enhanced, amount);

				affected++;
			}

			return affected;
		},

		// Rally
		// - Can target specific faction
		// - Targets allied unjammed, active assaults
		// - Can be enhanced
		rally: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);

			var rally = skill.x;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];

				if (target.isAlive() && target.isInFaction(faction)
					&& (all || (target.isActive() && target.isUnjammed()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {

				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					simController.logger.logNullified(sourceUnit, 'empowers', target);
					continue;
				}

				affected++;

				var amount = rally;
				if (!amount) {
					var mult = skill.mult;
					amount = Math.ceil(target.attack * mult);
				}

				target.attack_rally += amount;
				simController.logger.logStatusEffect(sourceUnit, 'empowers', target, enhanced, amount);
			}

			return affected;
		},

		// Legion
		// - Targets specific faction
		// - Targets allied adjacent unjammed, active assaults
		// - Can be enhanced?
		legion: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);
			var field_p_assaults = field[p]['assaults'];

			var amount = skill.x;
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, amount);
			amount += enhanced;

			var faction = skill['y'];

			var target_key = sourceUnit['key'] - 1;
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
						simController.logger.logNullified(sourceUnit, 'activates legion and empowers', target);
					} else {
						affected++;
						target.attack_rally += amount;
						simController.logger.logStatusEffect(sourceUnit, 'activates legion and empowers', target, enhanced, amount);
					}
				}
				target_key += 2;
			}

			return affected;
		},

		// Fervor
		// - Targets self for each adjacent unjammed, active assault in specific faction
		// - Can be enhanced?
		fervor: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);
			var field_p_assaults = field[p]['assaults'];

			var rally = skill.x;
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;

			var faction = skill['y'];

			var fervorAmount = 0;

			var target_key = sourceUnit['key'] - 1;
			var len = target_key + 2;
			if (target_key < 0) target_key += 2;

			while (target_key <= len) {
				var target = field_p_assaults[target_key];
				if (target && target.isInFaction(faction)) {
					fervorAmount += rally;
				}
				target_key += 2;
			}

			if (fervorAmount) {
				sourceUnit['attack_rally'] += fervorAmount;
				simController.logger.logStatusEffect(sourceUnit, 'fervors', target, enhanced, fervorAmount);
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
		barrage: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var barrages = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, barrages);
			barrages += enhanced;
			for (var i = 0; i < barrages; i++) {
				var targets = [];
				for (var key = 0, len = field_x_assaults.length; key < len; key++) {
					var targetUnit = field_x_assaults[key];
					if (targetUnit.isAlive() && targetUnit.isInFaction(faction)) {
						targets.push(key);
					}
				}

				// No Targets
				if (!targets.length) return 0;

				// Check All
				if (!all) {
					targets = chooseRandomTarget(targets);
				}

				var affected = 0;

				var strike = 1;
				for (var key = 0, len = targets.length; key < len; key++) {
					var targetUnit = field_x_assaults[targets[key]];

					// Check Evade
					if (targetUnit.invisible) {
						targetUnit.invisible--;
						simController.logger.logInvisibile(sourceUnit, 'throws a bomb at', targetUnit);
						continue;
					}

					affected++;

					var strike_damage = strike;

					// Check Protect/Enfeeble
					var damageInfo = modifySkillDamage(targetUnit, strike_damage, enhanced, { enfeeble: true });
					strike_damage = damageInfo.damage;

					doDamage(sourceUnit, targetUnit, strike_damage, function () {
						simController.logger.logDamage(sourceUnit, targetUnit, 'Barrage', 'throws a bomb at', damageInfo);
					});
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
		enhance: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);

			var x = skill.x;
			var faction = skill.y;
			var s = skill.s;
			var mult = skill.mult;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];
			var require_active_turn = requiresActiveTurn(s);
			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
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
				targets = chooseRandomTarget(targets);
			}

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					simController.logger.logNullified(sourceUnit, 'enhances', target);
					continue;
				}

				affected++;

				var enhancements = target.enhanced;
				var amountEnhanced = x;
				if (x > 0) {
					enhancements[s] = (enhancements[s] || 0) + x;
				} else if (mult > 0) {
					// temporarily use negatives for multiplier
					enhancements[s] = -mult;
					var amountEnhanced = (mult * 100) + '%';
				}
				simController.logger.logStatusEffect(sourceUnit, 'enhances ' + s + ' of ', target, 0, amountEnhanced);
			}

			return affected;
		},

		// Enrage
		// - Can target specific faction
		// - Targets allied assaults
		// - Can be enhanced
		enrage: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);

			var faction = skill.y;
			var enrage = skill.x;
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];

			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, enrage);
			enrage += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];
				var amount = enrage;

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					simController.logger.logNullified(sourceUnit, 'enrages', target);
					continue;
				}

				affected++;

				if (skill.mult) {
					amount = Math.ceil(skill.mult * target.health);
				}

				target['enraged'] += amount;
				simController.logger.logStatusEffect(sourceUnit, 'enrages', target, enhanced, amount);
			}

			return affected;
		},

		// Enhance
		// - Can target specific faction
		// - Targets allied, units
		// - Target must be active this turn (for activation skills only)
		// - Target must not be frozen (for activation skills only)
		// - Target must have specific "enhanceable skill" ("all" versions aren't counted)
		imbue: function (sourceUnit, skill) {

			var faction = skill.y;

			var p = getOwner(sourceUnit);

			var x = skill.x;
			var s = skill.s;
			var all = skill.all;

			var field_p_assaults = field[p].assaults;
			var require_active_turn = requiresActiveTurn(s);
			var targets = [];
			for (var key = 0, len = field_p_assaults.length; key < len; key++) {
				var target = field_p_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)
					&& (all || !require_active_turn || (target.isActive() && target.isUnjammed()))) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) {
				return 0;
			}

			var skill = {
				id: s,
				x: x
			};

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					simController.logger.logNullified(sourceUnit, 'enhances', target);
					continue;
				}

				affected++;

				if (target.hasSkill(s)) {
					var enhancements = target.enhanced;
					enhancements[s] = (enhancements[s] || 0) + x;
					simController.logger.logImbuesNew(sourceUnit, target, s, x);
				} else {
					target.imbue(skill);
					simController.logger.logImbuesExisting(sourceUnit, target, s, x);
				}
			}

			return affected;
		},

		mark: function (sourceUnit, skill) {

			var faction = skill['y'];

			var o = getOpponent(sourceUnit);

			var mark = skill.x;

			var all = skill.all;

			var field_x_assaults = field[o]['assaults'];

			var markTarget = sourceUnit.mark_target;
			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive() && target.isInFaction(faction)) {
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
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfoHelper.getEnhancement(sourceUnit, skill.id, mark);
			mark += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				affected++;

				target.enfeebled += mark;
				sourceUnit.mark_target = target.uid;

				simController.logger.logStatusEffect(sourceUnit, 'marks', target, enhanced, mark);

				// Set countdown so Mark can't trigger twice on dual-strike turn
				skill.countdown = 1;
			}

			return affected;
		}
	};

	var onPlaySkills = {

		ambush: function (sourceUnit, targetUnit, skill) {

			var x = skill.x;
			var base = skill.base;
			var mult = skill.mult;

			var damage = x;
			if (!damage) {
				var mult = skill.mult;
				damage = Math.ceil(targetUnit[base] * mult);
			}

			doDamage(sourceUnit, targetUnit, damage, function () {
				simController.logger.logDamage(sourceUnit, targetUnit, 'Ambush', 'ambushes', {
					originalDamage: damage,
					damage: damage
				});
			});

			return 1;
		},

		slow: function (sourceUnit, target, skill) {

			var x = skill.x;
			var base = skill.base;
			var mult = skill.mult;

			var slow = x;
			if (!slow) {
				var mult = skill.mult;
				slow = Math.ceil(target[base] * mult);
			}

			target.timer += slow;
			simController.logger.logStatusEffect(sourceUnit, 'slows', target, 0, slow);

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
			var unearthedUnit = unitInfoHelper.create((skill.card || dying.id), (skill.level || skill.x));
			var unearthedCard = cardApi.byIdWithBgeApplied(unearthedUnit, null, true);
			unearthedCard.isToken = true;

			var mult = skill.mult;
			if (mult) {
				// Unearthed card has scaled stats based on original card
				unearthedCard.attack = Math.floor(dying.attack * mult);
				unearthedCard.health = Math.floor(dying.health * mult);
			}

			playCard(unearthedCard, dying.owner, true);

			simController.logger.logAction(unearthedCard, 'is unearthed');

			return 1;
		},

		reanimate: function (dying, killer, skill) {

			// Only trigger once
			if (dying.reanimated) {
				return 0;
			}

			dying.health_left = skill.x;
			dying.reanimated = true;

			simController.logger.logReanimate(dying);

			return 1;
		}
	};

	// Activation Skills
	// - Must traverse through skills from top to bottom
	function doActivationSkills(sourceUnit) {

		if (sourceUnit.silenced) {
			simController.logger.logSilenced(sourceUnit);
			return;
		}

		var skills = sourceUnit.skill;

		var isAlive = makeLivenessCheck(sourceUnit);
		for (var i = 0, len = skills.length; i < len && isAlive(); i++) {
			var skill = skills[i];

			if (skill.countdown) {
				continue;
			}

			// Delegate to skill function
			var skillFn = getActivatedSkill(activationSkills, skill.id);
			var affected = skillFn(sourceUnit, skill);

			if (skill.c && affected > 0) {
				skill.countdown = skill.c;
			}

			events.onActivationSkills(field, turn, sourceUnit);
		}
	}

	function initializeBattle(config) {

		SIMULATOR.config = config;
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
		if (playerCardsCached) {
			deck['player'] = loadDeck.copyDeck(playerCardsCached);
		}

		// Load enemy deck
		if (config.selectedMission && config.missionLevel > 1 && config.missionLevel < 7) {
			cpuDeckCached = loadDeck.mission(config.selectedMission, config.missionLevel);
			cpuCardsCached = loadDeck.getDeckCards(cpuDeckCached, 'cpu');
		} else if (config.selectedRaid) {
			cpuDeckCached = loadDeck.raid(config.selectedRaid, config.raidLevel);
			cpuCardsCached = loadDeck.getDeckCards(cpuDeckCached, 'cpu');
		}
		if (cpuCardsCached) {
			deck['cpu'] = loadDeck.copyDeck(cpuCardsCached);
		}

		// Set up deck order priority reference
		if (config.playerOrdered && !config.playerExactOrder) deck.player.ordered = loadDeck.copyCardList(deck.player.deck);
		if (config.cpuOrdered && !config.cpuExactOrder) deck.cpu.ordered = loadDeck.copyCardList(deck.cpu.deck);

		deck.player.chooseCard = (config.userControlled ? chooseCardUserManually  // User_controlled mode has the player choose a card manually
			: config.playerOrdered ? chooseCardOrdered           			// Ordered mode tries to pick the card closest to the specified ordering
				: chooseCardRandomly);                     					// Player AI falls back on picking a random card

		deck.cpu.chooseCard = (config.cpuOrdered ? chooseCardOrdered    	// Ordered mode tries to pick the card closest to the specified ordering
			: config.pvpAI ? chooseCardByPoints                			// PvP defenders have a special algorithm for determining which card to play
				: config.cpuExactOrder ? chooseCardRandomly       		// If deck is not shuffled, but we're not playing "ordered mode", pick a random card from hand
					: chooseFirstCard);                         		// If none of the other options are true, this is the standard PvE AI and it just picks the first card in hand
	}

	function shuffle(list) {
		var i = list.length, j, tempi, tempj;
		if (i === 0) return false;
		while (--i) {
			j = ~~(Math.random() * (i + 1));
			tempi = list[i];
			tempj = list[j];
			list[i] = tempj;
			list[j] = tempi;
		}
	}

	// Simulate one game
	function simulate(config) {
		simulating = true;

		initializeBattle(config);

		// Shuffle decks
		if (config.playerExactOrder) {
			if (!config.playerOrdered) {
				deck.player.shuffleHand = true;
			}
		} else {
			shuffle(deck.player.deck);
		}
		if (config.cpuExactOrder) {
			if (!config.cpuOrdered) {
				deck.cpu.shuffleHand = true;
			}
		} else {
			shuffle(deck.cpu.deck);
		}

		setupField(field);

		if (config.siegeMode) {
			var towerBGE = BATTLEGROUNDS[config.towerType];
			var tower = towerBGE.effect[config.towerLevel];
			if (tower) {
				tower = unitInfoHelper.create(tower.id, tower.level);
				var towerCard = cardApi.byIdWithBgeApplied(tower);
				var uid = 150;
				towerCard.uid = uid;
				field.uids[uid] = towerCard;
				playCard(towerCard, 'cpu', -1, true);
			}
		}

		return performTurns(0);
	}

	function setupDecks(config) {
		// Cache decks where possible
		// Load player deck
		if (config.playerHash) {
			playerDeckCached = base64.decodeHash(config.playerHash);
		} else {
			playerDeckCached = loadDeck.defaultDeck();
		}
		playerCardsCached = loadDeck.getDeckCards(playerDeckCached, 'player');

		// Load enemy deck
		config.pvpAI = true;
		if (config.cpuHash) {
			cpuDeckCached = base64.decodeHash(config.cpuHash);
			if (config.selectedMission) config.pvpAI = false;
		} else if (config.selectedMission) {
			cpuDeckCached = loadDeck.mission(config.selectedMission, config.missionLevel);
			config.pvpAI = false;    // PvE decks do not use "Smart AI"
		} else if (config.selectedRaid) {
			cpuDeckCached = loadDeck.raid(config.selectedRaid, config.raidLevel);
			config.pvpAI = false;    // PvE decks do not use "Smart AI"
		} else {
			cpuDeckCached = loadDeck.defaultDeck();
		}
		cpuCardsCached = loadDeck.getDeckCards(cpuDeckCached, 'cpu');
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

	function onCardChosen(turn, chosenCard) {
		events.onCardChosen();
		performTurns(turn, makePlayChosenCard(chosenCard));
	}

	function performTurns(turn, resumeTurn) {
		if (SIMULATOR.pause) {
			SIMULATOR.pause = false;
			return false;
		}
		var done = performTurnsInner(turn, resumeTurn);
		if (done && user_controlled) {
			simController.debugEnd();
		}
		return done;
	}

	function performTurnsInner(turn, resumeTurn) {
		// Set up players
		var first_player, second_player;
		var surge = SIMULATOR.config.surgeMode;
		if (surge) {
			first_player = 'cpu';
			second_player = 'player';
		} else {
			first_player = 'player';
			second_player = 'cpu';
		}

		if (turn > 0) {
			// Retry this turn - don't bother doing setup all over again
			if (!resumeTurn(turn, field, first_player, second_player, false)) {
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
			if (turn === max_turns + 1) {
				// Ended in draw
				simulating = false;
				return true;
			}

			setupTurn(turn, first_player, second_player, field);

			if (!performTurn(turn, field, first_player, second_player)) {
				// Try this turn again
				return false;
			} else if (!field.player.commander.isAlive() || !field.cpu.commander.isAlive()) {
				simulating = false;
				simController.logger.logTurnEnd(turn);
				return true;
			}
		}
		simulating = false;
		return true;
	}

	function performTurn(turn, field, first_player, second_player) {
		if (turn % 2) {
			var p = first_player;
			var o = second_player;
		} else {
			var p = second_player;
			var o = first_player;
		}

		if (!chooseCard(p, turn)) {
			return false;
		} else {
			performTurnActions(p, o, field, turn);
			return true;
		}
	}

	function setupTurn(turn, first_player, second_player, field) {
		simulation_turns = turn;

		if (turn % 2) {
			var p = first_player;
			var o = second_player;
		} else {
			var p = second_player;
			var o = first_player;
		}

		simController.logger.logTurnStart(turn, p, field, deck);

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
				if (turn !== 3 || !SIMULATOR.config.tournamentMode) {
					current_assault.timer--;
					simController.logger.logAction(current_assault, 'reduces its timer');
				}
			}

			// Check valor
			var valor = current_assault.valor;
			if (valor) {
				var enemy = field_o_assaults[i];
				if (enemy && current_assault.adjustedAttack() < enemy.adjustedAttack()) {
					current_assault.attack_valor += valor;
					simController.logger.logGainAttack(current_assault, 'activates valor', valor);
				} else {
					simController.logger.logCannotValor(current_assault, enemy);
				}
			}

			current_assault.enfeebled = current_assault.envenomed + current_assault.heartseeker;
			current_assault.enraged = 0;
			current_assault.invisible = 0;
			current_assault.protected = 0;
			current_assault.warded = 0;
			current_assault.enhanced = {};
			current_assault.removeImbue();

			// countdown any skills with timers
			doCountDowns(current_assault);
		}
	}

	function chooseCard(p, turn) {

		var deck_p = deck[p];
		var deck_p_deck = deck_p.deck;
		var deck_p_ordered = deck_p.ordered;

		if (deck_p_deck[0]) {
			// Deck not empty yet
			SIMULATOR.waiting = false;
			var card_picked = 0;

			if (deck_p_deck.length === 1) {
				card_picked = chooseFirstCard(p, deck_p_deck, deck_p_ordered, turn);
			} else {
				for (var i = 0; i < deck_p_deck.length; i++) {
					var card = deck_p_deck[i];
					if (card.trap) {
						playCard(card.trap, p, turn);
						card.trap = false;
					}
					if (i === 2) break;
				}
				card_picked = deck_p.chooseCard(deck_p_deck, deck_p_ordered, turn);
			}

			if (card_picked < 0) return false;

			playCard(deck_p_deck[card_picked], p, turn);

			removeFromDeck(deck_p_deck, card_picked);
		}
		return true;
	}

	function makePlayChosenCard(chosenCard) {
		return function playChosenCard(turn, field, first_player, second_player) {
			if (turn % 2) {
				var p = first_player;
				var o = second_player;
			} else {
				var p = second_player;
				var o = first_player;
			}
			var deck_p_deck = deck[p].deck;
			playCard(deck_p_deck[chosenCard], p, turn);
			removeFromDeck(deck_p_deck, chosenCard);
			performTurnActions(p, o, field, turn);
			return true;
		};
	}

	function removeFromDeck(deck, index) {
		var key = index;
		var len = deck.length - 1;
		while (key < len) {
			deck[key] = deck[++key];
		}
		deck.length = key;

	}

	function chooseCardUserManually(shuffledDeck, orderedDeck, turn) {
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
		
		events.onPresentCardChoice(field, drawableHand, onCardChosen, turn);

		return -1;
	}

	// eslint-disable-next-line no-unused-vars
	function chooseCardOrdered(shuffledDeck, orderedDeck, turn) {
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

			var cardInHand;
			for (var handIdx = 0, hand_len = hand.length; handIdx < hand_len; handIdx++) {
				cardInHand = hand[handIdx];

				// If this is the exact card at this spot
				if (unitInfoHelper.areEqual(desiredCard, cardInHand)) {
					played = true;
					break;
				}
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

	// eslint-disable-next-line no-unused-vars
	function chooseCardRandomly(shuffledDeck, orderedDeck, turn) {
		// Prepare 3-card hand
		var hand = shuffledDeck.slice(0, 3);

		var card_picked = (~~(Math.random() * hand.length));
		return card_picked;
	}

	// eslint-disable-next-line no-unused-vars
	function chooseCardByPoints(shuffledDeck, orderedDeck, turn) {
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

	// eslint-disable-next-line no-unused-vars
	function chooseFirstCard(shuffledDeck, orderedDeck, turn) {
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

	function performTurnActions(p, o, field, turn) {

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
			doActivationSkills(battleground);
		}

		// Do Commander Early Activation Skills
		doEarlyActivationSkills(field_p.commander);

		// Set invisibile/ward/shrouded after enhance has had a chance to fire
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {
			var currentUnit = field_p_assaults[key];
			setPassiveStatus(currentUnit, 'evade', 'invisible');
			setPassiveStatus(currentUnit, 'absorb', 'warded');
		}

		// Do Unit Early Activation Skills
		doEarlyActivations(field_p);

		// Commander
		// - activation skills after units do early activation skills
		doActivationSkills(field_p_commander);

		// Assaults
		for (var key = 0, len = field_p_assaults.length; key < len; key++) {

			var currentUnit = field_p_assaults[key];

			if (!currentUnit.isAlive()) {
				continue;
			}

			// Check Timer
			if (!currentUnit.isActive()) {
				continue;
			}

			// Check jammed ("frozen")
			if (currentUnit['jammed']) {
				simController.logger.logFrozen(currentUnit);
				continue;
			}

			var activations = 1;
			if (currentUnit.dualstrike_triggered) {
				activations++;
				simController.logger.logDualstrike(currentUnit);
			}

			for (; activations > 0; activations--) {

				// Activation skills
				doActivationSkills(currentUnit);

				// See if unit died from Backlash
				if (!currentUnit.isAlive()) {
					continue;
				}

				// Check attack
				// - check rally and weaken
				if (!currentUnit.hasAttack()) {
					if (currentUnit.permanentAttack() > 0) simController.logger.logWeakened(currentUnit);
					continue;
				}

				doAttack(currentUnit, field_o_assaults, field_o_commander);

				// WINNING CONDITION
				if (!field_o_commander.isAlive() || !field_p_commander.isAlive()) {
					return;
				}

				// If died from counter, make sure dualstrike doesn't do make it swing again!
				if (!currentUnit.isAlive()) {
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
		removeDead();

		simController.logger.logTurnEnd(turn);
	}

	function setPassiveStatus(assault, skillName, statusName) {
		var statusValue = 0;

		if (assault[skillName]) {
			statusValue = assault[skillName];
			var enhanced = unitInfoHelper.getEnhancement(assault, skillName, statusValue);
			statusValue += enhanced;
		}

		assault[statusName] = statusValue;
	}

	function modifySkillDamage(target, originalDamage, enhanced, exclusions) {
		// Check Protect/Enfeeble
		exclusions = (exclusions || {});
		var enfeeble = (exclusions.enfeeble ? 0 : (target.enfeebled || 0));
		var shrouded = (exclusions.stasis ? 0 : checkShroud(target));
		var protect = (exclusions.protect ? 0 : (target.protected || 0));
		var warded = (exclusions.ward ? 0 : (target.warded || 0));

		var damage = originalDamage + enfeeble - shrouded;
		if (warded) {
			damage -= applyDamageReduction(target, 'warded', damage);
		}
		if (protect) {
			damage -= applyDamageReduction(target, 'protected', damage);
		}
		if (shrouded) {
			damage -= shrouded;
		}

		if (damage < 0) {
			damage = 0;
		}

		return {
			originalDamage: originalDamage,
			damage: damage,
			modifiers: {
				Enhance: enhanced,
				Enfeeble: enfeeble,
				Stasis: -shrouded,
				Barrier: -protect,
				Ward: -warded
			}
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
			simController.logger.logChargeSkill(unit, dualStrike);
		}
	}

	function doSkillCountDowns(unit, skills) {
		for (var i = 0, len = skills.length; i < len; i++) {
			var skill = skills[i];
			if (skill.countdown) {
				skill.countdown--;
				simController.logger.logChargeSkill(unit, skill);
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
			current_assault.nullified = 0;
			current_assault.dualstrike_triggered = false;
			current_assault.silenced = false;

			// Regenerate
			if (current_assault.regenerate && current_assault.isDamaged()) {

				var regen_health = current_assault.regenerate;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'regenerate', regen_health);
				regen_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (regen_health >= healthMissing) {
					regen_health = healthMissing;
				}

				current_assault.health_left += regen_health;
				simController.logger.logGainHealth(current_assault, 'regenerates', regen_health);
			}

			// Poison
			var amount = current_assault.poisoned;
			if (amount) {
				var warded = current_assault.warded;
				var damageInfo = {
					originalDamage: amount
				};
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
					damageInfo.damage = amount;
					damageInfo.modifiers = { Ward: warded };
				}
				doDamage(null, current_assault, amount, function () {
					simController.logger.logDamage(null, current_assault, 'Poison', 'poison damage', damageInfo);
				});
			}

			// Venom
			var amount = current_assault.envenomed;
			if (amount) {
				var warded = current_assault.warded;
				var damageInfo = {
					originalDamage: amount
				};
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
					damageInfo.damage = amount;
					damageInfo.modifiers = { Ward: warded };
				}
				doDamage(null, current_assault, amount, function () {
					simController.logger.logDamage(null, current_assault, 'Venom', 'venom damage', damageInfo);
				});
			}

			// Scorch
			var scorch = current_assault.scorched;
			if (scorch) {
				amount = scorch.amount;
				var damageInfo = {
					originalDamage: amount
				};
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
					damageInfo.damage = amount;
					damageInfo.modifiers = { Ward: warded };
				}
				doDamage(null, current_assault, amount, function () {
					simController.logger.logDamage(null, current_assault, 'Scorch', 'scorch damage', damageInfo, function() {
						if (current_assault.isAlive() && !current_assault.scorched) {
							return ' and scorch wears off';
						}
					});
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
					simController.logger.logAction(current_assault, 'recovers from corrosion');
				} else {
					var corrosion = corroded.amount;
					current_assault.attack_corroded = corrosion;
					simController.logger.logAction(current_assault, 'loses ' + corrosion + ' attack to corrosion');
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
			if (taunted) {
				simController.logger.logAction(target, 'taunts', current_assault);
			}
		}

		// -- CALCULATE DAMAGE --
		var damage = current_assault.adjustedAttack(); // Get base damage + rally/weaken

		var enfeeble = target.enfeebled;
		var pierce = current_assault.pierce;

		var damageInfo = {
			originalDamage: current_assault.attack,
			modifiers: {
				Berserk: current_assault.attack_berserk,
				Valor: current_assault.attack_valor,
				Rally: current_assault.attack_rally,
				Weaken: -current_assault.attack_weaken,
				Corrosion: -current_assault.attack_corroded,
				Enfeeble: enfeeble
			}
		};
		var damageModifiers = damageInfo.modifiers;

		damage += enfeeble;

		// Pierce
		if (pierce) {
			var enhanced = unitInfoHelper.getEnhancement(current_assault, 'pierce', pierce);
			pierce += enhanced;
		} else {
			pierce = 0;
		}

		// Damage reduction
		var protect = target.protected;
		var armor = target.armored;
		var shrouded = checkShroud(target);
		var remainingPierce = pierce;
		// Barrier is applied BEFORE Armor/Shroud
		if (protect) {
			damageModifiers.Barrier = -protect;
			// Remove pierce from Barrier
			if (remainingPierce) {
				damageModifiers.Pierce = pierce;
				if (remainingPierce >= protect) {
					remainingPierce -= protect;
					protect = 0;
					target.protected = 0;
				} else {
					protect -= remainingPierce;
					target.protected -= pierce;
					remainingPierce = 0;
				}
			}
			if (protect) {
				if (damage >= protect) {
					damage -= protect;
					target.protected = 0;
				} else {
					target.protected -= damage;
					damage = 0;
				}
			}
		}

		[
			{ logName: 'Shroud', status: 'stasis', value: shrouded },
			{ logName: 'Armor', status: 'armored', value: armor }
		].forEach(function(modifierInfo) {
			var value = modifierInfo.value;
			if (value) {
				value += unitInfoHelper.getEnhancement(target, modifierInfo.status, value);
				damageModifiers[modifierInfo.logName] = -value;
				// Remove pierce from Shroud
				if (remainingPierce) {
					damageModifiers.Pierce = pierce;
					if (remainingPierce > value) {
						value = 0;
					} else {
						value -= remainingPierce;
					}
				}
				damage -= value;
			}
		});

		if (damage < 0) damage = 0;

		// -- END OF CALCULATE DAMAGE --

		// Deal damage to target
		doDamage(current_assault, target, damage, function () {
			simController.logger.logDamage(current_assault, target, 'Attack', 'attacks', damageInfo);
		});

		events.onUnitAttacked(field, turn, current_assault);

		// WINNING CONDITION
		if (!field_o_commander.isAlive()) {
			return;
		}

		// Damage-dependent Status Inflictions
		if (damage > 0 && target.isAssault() && target.isAlive()) {
			// Poison
			// - Target must have taken damage
			// - Target must be an assault
			// - Target must not be already poisoned of that level
			if (current_assault.poison) {
				var poison = current_assault.poison;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'poison', poison);
				poison += enhanced;
				if (poison > target.poisoned) {
					target.poisoned = poison;
					simController.logger.logInflicts(current_assault, 'poison', poison, target);
				}
			}

			// Venom
			// - Target must have taken damage
			// - Target must be an assault
			// - Sets poisioned to greater of target's current poisioned or new poison
			// - Sets envenomed to greater of target's current envenomed or new venom
			if (current_assault.venom) {
				var venom = current_assault.venom;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'venom', venom);
				venom += enhanced;

				if (venom > target.envenomed) {
					var hexIncrease = venom - target.envenomed;
					target.envenomed = venom;
					target.enfeebled += hexIncrease;
					simController.logger.logInflicts(current_assault, 'venom', venom, target);
				}
			}

			// Nullify
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.nullify) {
				var nullify = current_assault.nullify;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'nullify', nullify);
				nullify += enhanced;
				target.nullified += nullify;
				simController.logger.logInflicts(current_assault, 'nullify', nullify, target);
			}

			// Silence
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.silence) {
				target.silenced = true;
				simController.logger.logInflicts(current_assault, 'silence', null, target);
			}

			// Daze
			// - Target must have taken damage
			// - Target must be an assault
			if (current_assault.daze) {

				var dazed = current_assault.daze;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'daze', dazed);
				dazed += enhanced;

				target.attack_weaken += dazed;
				simController.logger.logInflicts(current_assault, 'dazed', dazed, target);
			}
		}

		if (damage > 0 && current_assault.isAlive()) {
			// Leech
			// - Must have dealt damage
			// - Cannot leech more than damage dealt
			// - Cannot leech more health than damage sustained
			// - Leecher must not be already dead
			// - Leecher must not be at full health
			// - Increases attack too during Invigorate battleground effect
			if (current_assault.leech && current_assault.isDamaged()) {

				var leech_health = current_assault.leech;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'leech', leech_health);
				leech_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (leech_health >= healthMissing) {
					leech_health = healthMissing;
				}

				current_assault.health_left += leech_health;
				simController.logger.logSiphon(current_assault, 'siphons', leech_health);
			}

			if (current_assault.reinforce) {
				var reinforce = current_assault.reinforce;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'reinforce', reinforce);
				reinforce += enhanced;

				current_assault.protected += reinforce;
				simController.logger.logStatusEffect(current_assault, 'reinforces', current_assault, enhanced, reinforce);
			}

			// Counter
			// - Target must have received some amount of damage
			// - Attacker must not be already dead
			if (target.counter) {

				var counterBase = 0 + target.counter;
				var counterEnhancement = unitInfoHelper.getEnhancement(target, 'counter', counterBase);

				doCounterDamage(current_assault, target, 'Vengance', counterBase, counterEnhancement);
			}

			// Counterburn
			// - Target must have received some amount of damage
			if (target.counterburn) {
				var scorch = target.counterburn || 0;
				var enhanced = unitInfoHelper.getEnhancement(target, 'counterburn', scorch);
				scorch += enhanced;
				if (!current_assault.scorched) {
					current_assault.scorched = { 'amount': scorch, 'timer': 2 };
				} else {
					current_assault.scorched.amount += scorch;
					current_assault.scorched.timer = 2;
				}
				simController.logger.logInflicts(target, 'counterburn', scorch, current_assault);
			}

			// Counterpoison
			// - Target must have received some amount of damage
			if (target.counterpoison) {
				var poison = target.counterpoison || 0;
				var enhanced = unitInfoHelper.getEnhancement(target, 'counterpoison', poison);
				poison += enhanced;

				if (poison > current_assault.poisoned) {
					current_assault.poisoned = poison;
					simController.logger.logInflicts(target, 'counterpoison', poison, current_assault);
				}
			}

			// Fury
			// - Target must have received some amount of damage
			if (target.fury) {
				var furyBase = target.fury;
				var furyEnhancement = unitInfoHelper.getEnhancement(target, 'counter', furyBase);

				if (target.isAlive()) {
					var fury = furyBase + furyEnhancement;
					target.attack_berserk += fury;
					simController.logger.logGainAttack(target, 'activates fury', fury);
				}

				doCounterDamage(current_assault, target, 'Fury', furyBase, furyEnhancement);
			}

			if (target.enraged > 0) {
				target.attack_berserk += target.enraged;
				simController.logger.logGainAttack(target, 'is enraged', target.enraged);
			}

			// Berserk
			// - Must have done some damage to an assault unit
			if (current_assault.berserk) {

				var berserk = current_assault.berserk;
				var enhanced = unitInfoHelper.getEnhancement(current_assault, 'berserk', berserk);
				berserk += enhanced;

				current_assault.attack_berserk += berserk;
				simController.logger.logGainAttack(target, 'activates berserk', berserk);
			}
		}

		// -- CHECK STATUS INFLICTION --

		// Corrosion
		// - Target must have received some amount of damage
		if (target.corrosive) {
			var corrosion = target.corrosive || 0;
			var enhanced = unitInfoHelper.getEnhancement(target, 'corrosive', corrosion);
			corrosion += enhanced;
			if (current_assault.corroded) {
				current_assault.corroded.amount += corrosion;
				current_assault.corroded.timer = 2;
			} else {
				current_assault.corroded = { amount: corrosion, timer: 2 };
			}
			simController.logger.logInflicts(target, 'corrosion', corrosion, current_assault);
			current_assault.attack_corroded = corrosion;
			simController.logger.logAction(current_assault, 'loses ' + corrosion + ' attack to corrosion');
		}

		if (!current_assault.isAlive()) {
			doOnDeathSkills(current_assault, target);
		}

		events.onUnitDone(field, turn, current_assault);
		// -- END OF STATUS INFLICTION --
	}

	function doCounterDamage(attacker, defender, counterType, counterBase, counterEnhancement) {
		var counterDamage = counterBase + counterEnhancement;
		var damageInfo = modifySkillDamage(attacker, counterDamage, counterEnhancement, { enfeeble: true });

		doDamage(defender, attacker, damageInfo.damage, function () {
			simController.logger.logDamage(null, attacker, counterType, counterType.toLowerCase() + ' damage', damageInfo);
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
		healthStats.player.percent = stats.taken / stats.total;
		healthStats.cpu.percent = stats.taken / stats.total;

		var commander_o = field.cpu.commander;
		var matchPoints;
		if (SIMULATOR.config.cpuHash) {
			if (commander_o.isAlive() && !forceWin) {
				// 0-25 points, based on percentage of damage dealt to enemy
				matchPoints = Math.floor(healthStats.cpu.percent * 25);
			} else {
				// 115-130 points, based on percentage of damage taken
				matchPoints = 130 - Math.floor(healthStats.player.percent * 15);
			}
		} else {
			if (commander_o.isAlive() && !forceWin) {
				matchPoints = Math.floor(healthStats.cpu.percent / 0.02);
				matchPoints = Math.max(5, matchPoints);
			} else {
				matchPoints = 200 - Math.floor(healthStats.player.percent / 0.02);
			}
		}
		return matchPoints;
	}

	var noop = function noop() {};
	var events = {
		onCardPlayed: noop,
		onEarlyActivationSkills: noop,
		onActivationSkills: noop,
		onOnDeathSkills: noop,
		onPresentCardChoice: noop,
		onCardChosen: noop,
		onUnitAttacked: noop,
		onUnitDone: noop
	};

	var deck = {};
	var field = {};
	var battlegrounds;
	var simulation_turns = 0;
	var simulating = false;
	var user_controlled = false;
	var turn = 0;
	var totalDeckHealth = 0;
	var totalCpuDeckHealth = 0;

	// public functions
	SIMULATOR.simulate = simulate;
	SIMULATOR.setupDecks = setupDecks;
	SIMULATOR.onPlaySkills = onPlaySkills;
	SIMULATOR.calculatePoints = calculatePoints;
	// public variables
	Object.defineProperties(SIMULATOR, {
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
		events: {
			get: function () {
				return events;
			},
			set: function (value) {
				events = value;
			}
		}
	});

	return SIMULATOR;
});