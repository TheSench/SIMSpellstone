// Convert skills to 1.0 version
for(var skillID in SKILL_DATA) {
	var skillInfo = SKILL_DATA[skillID];
	if(skillID === 'flurry') {
		skillInfo.type = 'flurry';
	} else if(['turnStart', 'onAttack', 'onDamaged', 'turnEnd'].indexOf(skillInfo.type) >= 0) {
		skillInfo.type = 'passive';
	}
}
// Create REVERSE_FUSIONS
var REVERSE_FUSIONS = {};
for(var id in FUSIONS) {
	var fusion = FUSIONS[id];
	REVERSE_FUSIONS[fusion] = id;
};"use strict";

if (typeof String.prototype.format !== 'function') {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] !== 'undefined' ?
                args[number] :
                match;
        });
    };
}

if (typeof Object.assign !== 'function') {
    Object.assign = function(target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}

function parseInt(value) {
    return value >> 0;
}


/* Inspired by https://davidwalsh.name/javascript-debounce-function */
Function.prototype.debounce = function(wait) {
    var func = this;
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
Function.prototype.throttle = (function() {
    return function(wait) {
        var func = this;
        var timeout;
        var fired = false;
        return function() {
            var context = this,
                args = arguments;
            if (timeout) {
                fired = false;
            } else {
                func.apply(context, args);
                fired = true;
                var later = function() {
                    timeout = null;
                    func.apply(context, args);
                };
                timeout = setTimeout(later, wait);
            }
        };
    };
}());

// GET variables
function _GET(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1] ? pair[1] : '');
        }
    }
    return undefined;
}

function _DEFINED(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return true;
        }
    }
    return false;
}

var matchTimer = {
    // Time elapsed
    elapsed: function elapsed() {
        var end = (this.timeStop || Date.now());
        return this.elapsedSeconds(this.timeStart, end);
    },
    timeSince: function timeSince(start) {
        return this.elapsedSeconds(start, Date.now());
    },
    elapsedSeconds: function elapsedSeconds(start, end) {
        return ((end - start) / 1000).toFixed(3);
    },
    batchElapsed: function batchElapsed(start) {
        return this.timeSince(start || this.batchStarted);
    },
    startBatch: function startBatch() {
        this.batchStarted = Date.now();
    },
    stop: function stopTimer() {
        this.timeStop = Date.now();
    },
    reset: function resetTimer() {
        this.timeStart = Date.now();
        this.timeStop = 0;
    }
};

function shuffle(list) {
    var i = list.length,
        j, tempi, tempj;
    if (i == 0) return false;
    while (--i) {
        j = ~~(Math.random() * (i + 1));
        tempi = list[i];
        tempj = list[j];
        list[i] = tempj;
        list[j] = tempi;
    }
}

function initializeCard(card, p, newKey) {
    card.owner = p;
    card.timer = card.cost;
    // Setup status effects
    applyDefaultStatuses(card);
    card.health_left = card.health;
    card.key = newKey;
    if (!card.reusableSkills) card.resetTimers();
}

function copy_deck(original_deck) {
    var new_deck = {};
    new_deck.commander = original_deck.commander;
    new_deck.deck = copy_card_list(original_deck.deck);
    return new_deck;
}

function getDeckCards(original_deck, owner) {
    var new_deck = {};
    new_deck.commander = getCardByID(original_deck.commander);
    new_deck.deck = [];
    var list = original_deck.deck;
    var battlegrounds = SIMULATOR.battlegrounds.onCreate.filter(function(bge) {
        return !((owner === 'player' && bge.enemy_only) || (owner === 'cpu' && bge.ally_only));
    });
    for (var i = 0, len = list.length; i < len; i++) {
        new_deck.deck.push(get_card_apply_battlegrounds(list[i], battlegrounds));
    }
    return new_deck;
}

function copy_card_list(original_card_list) {
    var new_card_list = [];
    for (var key = 0, len = original_card_list.length; key < len; key++) {
        new_card_list[key] = original_card_list[key];
    }
    return new_card_list;
}

var defaultStatusValues = {
    // Attack Modifiers
    attack_berserk: 0,
    attack_valor: 0,
    attack_rally: 0,
    attack_weaken: 0,
    attack_corroded: 0,
    corrosion_timer: 0,
    // Mark
    mark_target: 0,
    // Other Statuses
    // Numeric-Statuses
    attackIncreasePrevention: 0,
    barrier_ice: 0,
    corroded: 0,
    enfeebled: 0,
    enraged: 0,
    envenomed: 0,
    heartseeker: 0,
    imbued: 0,
    invigorated: 0,
    invisible: 0,
    nullified: 0,
    poisoned: 0,
    protected: 0,
    scorched: 0,
    warded: 0,
    // Boolean-Status
    confused: false,
    jammed: false,
    jammedSelf: false,
    silenced: false,
    bash_triggered: false,
    dualstrike_triggered: false,
    ondeath_triggered: false,
    reanimated: false
};

function applyDefaultStatuses(card) {
    // reset invigorate
    card.health -= card.invigorated;
    card.removeImbue();
    card.enhanced = {};
    for (var status in defaultStatusValues) {
        card[status] = defaultStatusValues[status];
    }
}

var CardPrototype;
var makeUnit = (function() {
    function modifySkillsPreRune(new_card, original_skills, skillModifiers, isToken) {
        new_card.highlighted = [];
        for (var i = 0; i < skillModifiers.length; i++) {
            var skillModifier = skillModifiers[i];
            if (skillModifier.modifierType === "statChange" && !isToken) {
                for (var j = 0; j < skillModifier.effects.length; j++) {
                    var statChange = skillModifier.effects[j];
                    if (new_card.isInFaction(statChange.y) && new_card.isTargetRarity(statChange.rarity) && new_card.isTargetDelay(statChange.delay)) {
                        Object.keys(statChange).forEach(function(stat) {
                            new_card[stat] = statChange[stat];
                        });
                    }
                }
            }
        }
    }

    function modifySkillsPostRune(new_card, original_skills, skillModifiers, isToken) {
        new_card.highlighted = [];
        for (var i = 0; i < skillModifiers.length; i++) {
            var skillModifier = skillModifiers[i];
            if (skillModifier.modifierType === "evolve_skill") {
                for (var j = 0; j < skillModifier.effects.length; j++) {
                    var evolution = skillModifier.effects[j];
                    for (var key in original_skills) {
                        var skill = original_skills[key];
                        if (skill.id === evolution.id && skill.all == evolution.all && new_card.isTargetRarity(evolution.rarity) && new_card.isTargetDelay(evolution.delay)) {
                            skill = copy_skill(skill);
                            skill.id = evolution.s;
                            skill.boosted = true;
                            original_skills[key] = skill;
                            new_card.highlighted.push(skill.id);
                        }
                    }
                }
            } else if (skillModifier.modifierType === "add_skill") {
                for (var j = 0; j < skillModifier.effects.length; j++) {
                    var addedSkill = skillModifier.effects[j];
                    if (new_card.isInFaction(addedSkill.y) && new_card.isTargetRarity(addedSkill.rarity) && new_card.isTargetDelay(addedSkill.delay)) {
                        var new_skill = {};
                        new_skill.id = addedSkill.id;
                        new_skill.x = addedSkill.x || 0;
                        if (addedSkill.mult) {
                            if (addedSkill.base) {
                                var base = getStatBeforeRunes(new_card, addedSkill.base);
                                base = isToken ? new_card[addedSkill.base] : base;
                                new_skill.x += Math.ceil(addedSkill.mult * base);
                            } else {
                                new_skill.mult = addedSkill.mult;
                            }
                        }
                        new_skill.z = addedSkill.z;
                        new_skill.c = addedSkill.c;
                        new_skill.s = addedSkill.s;
                        new_skill.all = addedSkill.all;
                        if (addedSkill.card) new_skill.card = addedSkill.card;
                        if (addedSkill.level) new_skill.level = addedSkill.level;
                        new_skill.boosted = true;
                        if (addedSkill.mult && addedSkill.base && new_skill.x == 0) continue;
                        original_skills.push(new_skill);
                        new_card.highlighted.push(new_skill.id);
                    }
                }
            } else if (skillModifier.modifierType === "scale_attributes" && !isToken) {
                for (var j = 0; j < skillModifier.effects.length; j++) {
                    var scaling = skillModifier.effects[j];
                    if (new_card.isInFaction(scaling.y) && new_card.isTargetRarity(scaling.rarity) && new_card.isTargetDelay(scaling.delay)) {
                        var mult = scaling.mult;
                        var plusAttack = Math.ceil(new_card.attack * mult);
                        new_card.attack += plusAttack;
                        new_card.highlighted.push('attack');
                        var plusHealth = Math.ceil(new_card.health * mult);
                        new_card.health += plusHealth;
                        new_card.highlighted.push('health');
                        scaleSkills(new_card, original_skills, mult);
                    }
                }
            } else if (skillModifier.modifierType === "scale_stat" && !isToken) {
                for (var j = 0; j < skillModifier.effects.length; j++) {
                    var scaling = skillModifier.effects[j];
                    if (new_card.isInFaction(scaling.y) && new_card.isTargetRarity(scaling.rarity && new_card.isTargetDelay(scaling.delay))) {
                        new_card[skillModifier.scaledStat] += Math.ceil(getStatBeforeRunes(new_card, scaling.base) * scaling.mult);
                        new_card.highlighted.push(skillModifier.scaledStat);
                    }
                }
            }
        }
    }

    function getStatBeforeRunes(card, statBase) {
        return getCardByID({ id: card.id, level: card.level })[statBase];
    }

    function scaleSkills(new_card, skillList, mult) {
        for (var key in skillList) {
            var skill = skillList[key];
            if (skill.x) {
                skill = copy_skill(skill);
                skill.x += Math.ceil(skill.x * mult);
                skill.boosted = true;
                skillList[key] = skill;
                new_card.highlighted.push(skill.id);
            }
        }
    }

    CardPrototype = {
        p: null,
        health_left: 0,
        timer: 0,
        key: undefined,

        //Card ID is ...
        isCommander: function() {
            return (this.card_type == "1");
        },

        isAssault: function() {
            return (this.card_type == "2");
        },

        isTower: function() {
            return false;
        },

        isTrap: function() {
            return (this.card_type == "3");
        },

        // Alive
        // -.health_left > 0
        isAlive: function() {
            return (this.health_left > 0);
        },

        // Alive
        // -.health_left > 0
        isDamaged: function() {
            return (this.health_left < this.health);
        },

        // Active
        // - timer = 0
        isActive: function() {
            return (this.timer == 0);
        },

        // Active Next Turn
        // - timer <=1
        isActiveNextTurn: function() {
            return (this.timer <= 1);
        },

        // Inactive
        // - timer >=1
        isInactive: function() {
            return this.timer >= 1;
        },

        // Unjammed
        isUnjammed: function() {
            return !(this.jammed);
        },

        // Unsilenced
        isUnsilenced: function() {
            return !(this.silenced);
        },

        imbue: function(skill) {
            if (!this.imbued) {
                this.imbued = {};
            }
            var imbued = this.imbued;

            var imbueSkillsKey;
            var skillID = skill.id;
            var skillType = SKILL_DATA[skillID].type;
            switch (skillType) {
                case 'toggle':
                    this[skillID] = true;
                    this.imbued[skillID] = 1;
                    return;

                case 'passive':
                    this[skillID] += parseInt(skill.x);
                    this.imbued[skillID] = (this.imbued[skillID] || 0) + skill.x;
                    return;

                case 'flurry':
                    if (!this.flurry) {
                        this.flurry = skill;
                        this.flurry.countdown = 0;
                        this.imbued.flurry = true;
                    }
                    return;

                case 'onDeath':
                    imbueSkillsKey = 'onDeathSkills';
                    break;

                case 'earlyActivation':
                    imbueSkillsKey = 'earlyActivationSkills';
                    break;

                case 'activation':
                default:
                    imbueSkillsKey = 'skill';
                    break;
            }

            // Mark the first added skill index
            if (imbued[imbueSkillsKey] === undefined) {
                var original = this[imbueSkillsKey];
                imbued[imbueSkillsKey] = original.length;
                this[imbueSkillsKey] = original.slice();
            }
            this[imbueSkillsKey].push(skill);
        },

        scorch: function(amount) {
            var scorched = this.scorched;
            if (!scorched) {
                this.scorched = {
                    amount: amount,
                    timer: 2
                };
            } else {
                scorched.amount += amount;
                scorched.timer = 2;
            }
        },

        removeImbue: function() {
            var imbue = this.imbued;
            if (imbue) {
                for (var key in imbue) {
                    var imbuement = imbue[key];
                    if (key === "skill" || key === "earlyActivationSkills" || key === "onDeathSkills") {
                        this[key] = this[key].slice(0, imbuement);
                    } else {
                        this[key] -= imbuement;
                    }
                }
                this.imbued = 0;
            }
        },

        // Has at least one Enhanceable Activation Skill
        // - strike, protect, enfeeble, rally, repair, supply, siege, heal, weaken (unless they have on play/death/attacked/kill)
        hasSkill: function(s, all) {
            var target_skills;
            var skillType = SKILL_DATA[s].type;
            switch (skillType) {
                case 'toggle':
                case 'passive':
                case 'flurry':
                    return this[s];
                    break;

                case 'onDeath':
                    target_skills = this.onDeathSkills;
                    break;

                case 'earlyActivation':
                    target_skills = this.earlyActivationSkills;
                    break;

                case 'activation':
                default:
                    target_skills = this.skill;
                    break;
            }
            for (var key in target_skills) {
                var skill = target_skills[key];
                if (skill.id !== s) continue;
                if (typeof all !== "undefined" && (skill.all || 0) != all) continue;
                return true;
            }
            return false;
        },

        // Has Attack power
        // - attack > 0
        hasAttack: function() {
            return (this.adjustedAttack() > 0);
        },

        attackPlusBuffs: function() {
            return (this.attack + this.attack_rally + this.attack_berserk + this.attack_valor);
        },

        adjustedAttack: function() {
            return (this.attack + this.attack_rally + this.attack_berserk + this.attack_valor - this.attack_weaken - this.attack_corroded);
        },

        permanentAttack: function() {
            return (this.attack + this.attack_berserk + this.attack_valor);
        },
        
        hasNegativeStatus: function() {
            // Poison, Hex, Burn, Freeze, Venom, Weaken, Silence and Confuse
            return this.poisoned ||
                this.enfeebled ||
                this.scorched ||
                this.jammed ||
                this.envenomed ||
                this.attack_weaken ||
                this.silenced ||
                this.confused;
        },

        // Filters by faction
        isInFaction: function(faction) {
            if (faction === undefined) return 1;
            var factions = faction.split(',');
            if (factions.length <= 1) {
                if (this.type == faction) return 1;
                if (this.sub_type.indexOf(faction.toString()) >= 0) return 1;
                return 0;
            } else {
                for (var i = 0; i < factions.length; i++) {
                    if (!this.isInFaction(factions[i])) {
                        return 0;
                    }
                }
                return 1;
            }
        },

        isTargetRarity: function(rarity) {
            return (rarity === undefined ? true : this.rarity === Number(rarity));
        },

        isTargetDelay: function(delay) {
            return (delay === undefined ? true : delay.indexOf(this.cost) >= 0);
        },

        resetTimers: function() {
            for (var i = 0, len = this.skillTimers.length; i < len; i++) {
                this.skillTimers[i].countdown = 0;
            }
        },

        addRunes: function(runes) {
            addRunes(this, runes);
        }
    };
    for (var id in SKILL_DATA) {
        var type = SKILL_DATA[id].type;
        if (type === "passive") {
            CardPrototype[id] = 0;
        } else if (type === "toggle") {
            CardPrototype[id] = false;
        }
    }
    applyDefaultStatuses(CardPrototype);

    return (function(original_card, unit_level, runes, skillModifiers, skillMult, isToken) {
        if (!unit_level) unit_level = 1;
        var card = Object.create(CardPrototype);

        card.id = original_card.id;
        card.name = original_card.name;
        card.attack = original_card.attack;
        card.health = original_card.health;
        card.maxLevel = original_card.maxLevel;
        card.level = ((unit_level > card.maxLevel) ? card.maxLevel : unit_level);
        card.cost = original_card.cost || 0;
        card.rarity = original_card.rarity;
        card.card_type = original_card.card_type;
        card.type = original_card.type;
        card.sub_type = original_card.sub_type || [];
        card.set = original_card.set;
        var original_skills = original_card.skill;
        if (card.level > 1) {
            var upgrade;
            for (var key in original_card.upgrades) {
                upgrade = original_card.upgrades[key];
                // Upgrade levels only contain attack/health/delay if they changed at that level.
                if (upgrade.cost !== undefined) card.cost = upgrade.cost;
                if (upgrade.health !== undefined) card.health = upgrade.health;
                if (upgrade.attack !== undefined) card.attack = upgrade.attack;
                if (upgrade.desc !== undefined) card.desc = upgrade.desc;
                if (upgrade.skill.length > 0) original_skills = upgrade.skill;
                if (key == card.level) break;
            }
        }

        if (isToken && isToken.newStats) {
            card.health = isToken.newStats.health;
            card.attack = isToken.newStats.attack;
        }

        card.base_health = card.health;

        original_skills = original_skills.slice();

        if (skillModifiers && skillModifiers.length) {
            modifySkillsPreRune(card, original_skills, skillModifiers, isToken);
        }

        if (runes) {
            card.addRunes(runes);
            var runeMult = 1;
            if (skillModifiers) {
                skillModifiers.forEach(function(skillModifier) {
                    if (skillModifier.modifierType === "runeMultiplier") {
                        skillModifier.effects.forEach(function(effect) {
                            if (card.isInFaction(effect.y)) {
                                runeMult = parseInt(effect.mult);
                            }
                        });
                    }
                });
            }
            addRunesToSkills(original_skills, runes, runeMult);
        } else {
            card.runes = [];
        }

        // Apply BGEs
        if (skillModifiers && skillModifiers.length) {
            modifySkillsPostRune(card, original_skills, skillModifiers, isToken);
        }

        if (skillMult) {
            scaleSkills(card, original_skills, skillMult);
        }

        copySkills(card, original_skills);

        return card;
    });
}());


var getEnhancement = function(card, s, base) {
    var enhancements = card.enhanced;
    var e = { x: 0, mult: 0 }; // Default value
    var enhanced = (enhancements ? (enhancements[s] || e) : e);
    enhanced = Math.ceil(base * enhanced.mult) + enhanced.x;
    return enhanced;
};

var adjustAttackIncrease = function(card, originalIncrease) {
    if (card.attackIncreasePrevention) {
        var adjustment = Math.min(card.attackIncreasePrevention, originalIncrease);
        card.attackIncreasePrevention -= adjustment;
        if (SIMULATOR.config.debug) { echo += '<u>(' + adjustment + ' attack increase prevented by weaken, ' + card.attackIncreasePrevention + ' prevention remains)</u><br/>'}
        return originalIncrease - adjustment;
    } else {
        return originalIncrease;
    }
}

var getSkillMult = function(skill, target, defaultBase) {
    var mult = skill.mult;
    if (mult) {
        var base = skill.base || defaultBase || 'health';
        return Math.ceil(mult * target[base]);
    } else {
        return 0;
    }
};

var isImbued = function(card, skillID, i) {
    var imbueSkillsKey;
    var skillType = SKILL_DATA[skillID].type;
    switch (skillType) {
        case 'flurry':
        case 'toggle':
            return card.imbued[skillID];

        case 'passive':
            return (card[skillID] === card.imbued[skillID]);

        case 'onDeath':
            imbueSkillsKey = 'onDeathSkills';
            break;

        case 'earlyActivation':
            imbueSkillsKey = 'earlyActivationSkills';
            break;

        case 'activation':
        default:
            imbueSkillsKey = 'skill';
            break;
    }


    // Mark the first added skill index
    if (card.imbued[imbueSkillsKey] !== undefined) {
        return (i >= card.imbued[imbueSkillsKey]);
    } else {
        return false;
    }
};

var addRunes = function(card, runes) {
    if (!card.runes) card.runes = [];
    for (var i = 0, len = runes.length; i < len; i++) {
        var runeID = runes[i].id;
        var statBoost = getRune(runeID).stat_boost;
        card.runes.push({
            id: runeID,
            stat_boost: statBoost
        });

        for (var key in statBoost) {
            var boost = statBoost[key];
            if (key == "skill") {
                // Will be handled later
            } else {
                if (isNaN(boost)) {
                    boost = Math.max(Math.ceil(card[key] * boost.mult), (boost.min_bonus || 1));
                }
                card[key] += parseInt(boost);
            }
        }
    }
};

function addRunesToSkills(skills, runes, runeMult) {
    if (!runes) return;
    for (var i = 0, len = runes.length; i < len; i++) {
        var runeID = runes[i].id;
        var statBoost = getRune(runeID).stat_boost;
        for (var key in statBoost) {
            var boost = statBoost[key];
            if (key == "skill") {
                var skillID = boost.id;
                var amount = boost.x;
                var mult = boost.mult;
                for (var s = 0; s < skills.length; s++) {
                    var skill = skills[s];
                    if (skill.id == skillID && (skill.all || 0) == (boost.all || 0)) {
                        skill = copy_skill(skill);
                        if (!amount && mult) amount = Math.ceil(skill.x * mult);
                        if (boost.min_bonus) amount = Math.max(amount, boost.min_bonus);
                        if (amount) skill.x += (parseInt(amount) * runeMult);
                        if (boost.c) skill.c -= Math.min(skill.c, (parseInt(boost.c) * runeMult));
                        skill.boosted = true;
                        skills[s] = skill;
                        break;
                    }
                }
            }
        }
    }
}

var getRune = function(rune_id) {
    return RUNES[rune_id] || { stat_boost: {} };
};

var canUseRune = function(card, runeID) {
    var rune = getRune(runeID);

    var statBoost = rune.stat_boost;
    if (rune.faction_req) {
        if (!card.isInFaction(rune.faction_req)) {
            return false;
        }
    }
    for (var key in statBoost) {
        if (key == "skill") {
            var skill = statBoost[key];
            var all = (skill.all ? 1 : 0);
            if (!card.hasSkill(skill.id, all)) return false;
        }
    }
    return true;
};

function MakeSkillModifier(name, effect) {
    return {
        name: name,
        modifierType: effect.effect_type,
        effects: [effect]
    };
}

function MakeStatScalar(name, effect) {
    return {
        name: name,
        modifierType: "scale_stat",
        scaledStat: effect.effect_type.replace("scale_", ""),
        effects: [effect]
    };
}

var MakeOnPlayBGE = (function() {
    var OnPlayBGE = function(name, effect) {
        this.p = null;
        this.name = name;
        this.effect = effect;
        this.runes = [];
    };

    OnPlayBGE.prototype = {
        onCardPlayed: function(card) {
            SIMULATOR.onPlaySkills[this.effect.id](this, card, this.effect);
        },

        //Card ID is ...
        isCommander: function() {
            return false;
        },

        isAssault: function() {
            return false;
        }

    };

    return (function(name, effects) {
        return new OnPlayBGE(name, effects);
    });
}());

var MakeTrap = (function() {
    var Trap = function(name, trap_card) {
        this.name = name;
        this.id = trap_card.id;
        this.base = trap_card.base;
        this.mult = trap_card.mult;
        this.target_deck = trap_card.target_deck;
        this.y = trap_card.y;
    };

    Trap.prototype = {
        onCardPlayed: function(card, p_deck, o_deck) {
            var deck = (this.target_deck === "opponent" ? o_deck : p_deck);
            if (card.isInFaction(this.y)) {

                var targets = [];
                for (var t = 0; t < deck.length; t++) {
                    var card = deck[t];
                    if (!card.trap) {
                        targets.push(card);
                    }
                }

                if (targets.length) {
                    // Create a trap card
                    var trapLevel = Math.ceil(card[this.base] * this.mult);
                    var trapInfo = makeUnitInfo(this.id, trapLevel);
                    var trap = getCardByID(trapInfo);

                    // Shuffle the trap into opponent's deck
                    var index = (~~(Math.random() * targets.length));
                    targets[index].trap = trap;

                    if (SIMULATOR.config.debug) {
                        echo += this.name + ' inserts ' + debug_name(trap) + ' into the opposing deck.<br/>';
                    }
                }
            }
        }
    };

    return (function(name, effects) {
        return new Trap(name, effects);
    });
}());

var getBattlegrounds = function(simConfig) {

    // Set up battleground effects, if any
    var battlegrounds = {
        onCreate: [],
        onTurn: [],
        onCardPlayed: []
    };
    addBgesFromList(battlegrounds, simConfig.getbattleground);
    addBgesFromList(battlegrounds, simConfig.selfbges, 'player');
    addBgesFromList(battlegrounds, simConfig.enemybges, 'cpu');
    addMapBGEs(battlegrounds, simConfig.mapbges, 'player');

    if (simConfig.campaignID) {
        addMissionBGE(battlegrounds, simConfig.campaignID, simConfig.missionLevel);
    } else if (simConfig.raidID) {
        addRaidBGE(battlegrounds, simConfig.raidID, simConfig.raidLevel);
    }
    return battlegrounds;
};

function addBgesFromList(battlegrounds, battlegroundsToAdd, player) {
    if (!battlegroundsToAdd) return null;
    var selected = battlegroundsToAdd.split(",");
    for (var i = 0; i < selected.length; i++) {
        var id = selected[i];
        var battleground = BATTLEGROUNDS[id];
        addBgeFromList(battlegrounds, battleground, player);
    }
}

function addMissionBGE(battlegrounds, campaignID, missionLevel) {
    var campaign = CAMPAIGNS[campaignID];
    if (campaign) {
        var id = campaign.battleground_id;
        if (id) {
            var battleground = BATTLEGROUNDS[id];
            var effectiveLevel = Math.min(missionLevel, Number(battleground.max_level) || Infinity);
            effectiveLevel = Number(effectiveLevel) - 1; // Convert to 0-based
            if (!battleground.starting_level || Number(battleground.starting_level) <= effectiveLevel) {
                if (battleground.scale_with_level) {
                    battleground = JSON.parse(JSON.stringify(battleground));
                    var levelsToScale = effectiveLevel - Number(battleground.starting_level);
                    for (var i = 0; i < battleground.effect.length; i++) {
                        var effect = battleground.effect[i];
                        effect.mult = effect.base_mult + effect.mult * levelsToScale;
                    }
                }
                addBgeFromList(battlegrounds, battleground, 'cpu');
            }
        }
    }
}

function addRaidBGE(battlegrounds, raidID, raidLevel) {
    var bge_id = RAIDS[raidID].bge;
    if (bge_id) {
        var battleground = BATTLEGROUNDS[bge_id];
        if (battleground && Number(raidLevel) >= Number(battleground.starting_level)) {
            var enemy_only = battleground.enemy_only;

            for (var j = 0; j < battleground.effect.length; j++) {
                var effect = battleground.effect[j];
                var effect_type = effect.effect_type;
                if (effect_type === "skill") {
                    if (battleground.scale_with_level) {
                        var mult = battleground.scale_with_level * (raidLevel - battleground.starting_level + 1);
                    } else {
                        var mult = 1;
                    }
                    var bge = MakeBattleground(battleground.name, effect, mult);
                    bge.enemy_only = enemy_only;
                    battlegrounds.onTurn.push(bge);
                } else if (["evolve_skill", "add_skill", "scale_attributes", "statChange", "runeMultiplier"].indexOf(effect_Type) >= 0) {
                    var bge = MakeSkillModifier(battleground.name, effect);
                    bge.enemy_only = enemy_only;
                    battlegrounds.onCreate.push(bge);
                } else if (["scale_attack", "scale_health"].indexOf(effect_Type) >= 0) {
                    var bge = MakeStatScalar(battleground.name, effect);
                    bge.enemy_only = enemy_only;
                    battlegrounds.onCreate.push(bge);
                } else if (effect_type === "trap_card") {
                    var bge = MakeTrap(battleground.name, effect);
                    bge.enemy_only = enemy_only;
                    battlegrounds.onCardPlayed.push(bge);
                }
            }
        }
    }
}

function addMapBGEs(battlegrounds, mapbges, player) {
    if (!mapbges) return null;
    var selected = mapbges.split(",");
    for (var i = 0; i < selected.length; i++) {
        var parts = selected[i].split("-");
        var location = parts[0];
        var index = parts[1];
        var value = parts[2];
        var mapBGE = Object.keys(MAP_BATTLEGROUNDS).filter(function(id) {
            return MAP_BATTLEGROUNDS[id].location_id == location;
        })[0];
        mapBGE = MAP_BATTLEGROUNDS[mapBGE];
        var battleground = mapBGE.effects[index].upgrades[value];
        addBgeFromList(battlegrounds, battleground, player);
    }
}

function addBgeFromList(battlegrounds, battleground, player) {
    for (var j = 0; j < battleground.effect.length; j++) {
        var effect = battleground.effect[j];
        var effect_type = effect.effect_type;
        if (effect_type === "skill") {
            var bge = MakeBattleground(battleground.name, effect);
            if (player === 'player') bge.ally_only = true;
            if (player === 'cpu') bge.enemy_only = true;
            battlegrounds.onTurn.push(bge);
        } else if (["evolve_skill", "add_skill", "scale_attributes", "statChange", "runeMultiplier"].indexOf(effect_type) >= 0) {
            var bge = MakeSkillModifier(battleground.name, effect);
            if (player === 'player') bge.ally_only = true;
            if (player === 'cpu') bge.enemy_only = true;
            battlegrounds.onCreate.push(bge);
        } else if (["scale_attack", "scale_health"].indexOf(effect_type) >= 0) {
            var bge = MakeStatScalar(battleground.name, effect);
            if (player === 'player') bge.ally_only = true;
            if (player === 'cpu') bge.enemy_only = true;
            battlegrounds.onCreate.push(bge);
        } else if (effect_type === "trap_card") {
            var bge = MakeTrap(battleground.name, effect);
            if (player === 'player') bge.ally_only = true;
            if (player === 'cpu') bge.enemy_only = true;
            battlegrounds.onCardPlayed.push(bge);
        } else if (effect_type === "on_play") {
            var bge = MakeOnPlayBGE(battleground.name, effect.effect);
            bge.attacker = effect.attacker;
            bge.defender = effect.defender;
            bge.first_play = effect.first_play;
            if (player === 'player') bge.ally_only = true;
            if (player === 'cpu') bge.enemy_only = true;
            battlegrounds.onCardPlayed.push(bge);
        }
    }
}

var MakeBattleground = (function() {
    var Battleground = function(name, original_skills, mult) {
        this.name = name;
        copySkills(this, [original_skills], mult);
    };

    Battleground.prototype = {
        p: null,
        name: null,
        runes: [],

        //Card ID is ...
        isCommander: function() {
            return false;
        },

        isAssault: function() {
            return false;
        },

        resetTimers: function() {
            for (var i = 0, len = this.skillTimers.length; i < len; i++) {
                this.skillTimers[i].countdown = 0;
            }
        }
    };

    return (function(name, skill, mult) {
        return new Battleground(name, skill, mult);
    });
}());

function copySkills(new_card, original_skills, mult) {
    new_card.skill = [];
    new_card.earlyActivationSkills = [];
    new_card.onDeathSkills = [];
    var skillTimers = [];
    var reusable = true;
    for (var key in original_skills) {
        var newSkill = original_skills[key];
        var copySkill = copy_skill(newSkill);
        if (newSkill.c) {
            setSkill(new_card, copySkill);
            skillTimers.push(copySkill);
            reusable = false;
        } else if (mult) {
            copySkill.x = Math.ceil(copySkill.x * mult);
            setSkill(new_card, copySkill);
        } else { // If skill has no timer, we can use the same instance
            setSkill(new_card, copySkill);
        }
    }
    new_card.reusableSkills = reusable;
    new_card.skillTimers = skillTimers;
}

function setSkill(new_card, skill) {
    // These skills could have multiple instances
    var skillID = skill.id;
    var skillType = SKILL_DATA[skillID].type;
    switch (skillType) {
        case 'toggle':
            new_card[skillID] = true;
            return;

        case 'passive':
            new_card[skill.id] = (new_card[skill.id] | 0) + skill.x;
            break;

        case 'flurry':
            new_card[skill.id] = skill;
            break;

        case 'onDeath':
            new_card.onDeathSkills.push(skill);
            break;

        case 'earlyActivation':
            new_card.earlyActivationSkills.push(skill);
            break;

        case 'activation':
        default:
            new_card.skill.push(skill);
            break;
    }
}

function copy_skill(original_skill) {
    var new_skill = {};
    new_skill.id = original_skill.id;
    new_skill.x = original_skill.x || 0;
    new_skill.mult = original_skill.mult;
    new_skill.on_delay_mult = original_skill.on_delay_mult;
    new_skill.all = original_skill.all;
    new_skill.y = original_skill.y;
    new_skill.z = original_skill.z;
    new_skill.c = original_skill.c;
    new_skill.s = original_skill.s;
    new_skill.ignore_nullify = original_skill.ignore_nullify;
    new_skill.card = original_skill.card;
    new_skill.level = original_skill.level;
    return new_skill;
}

//Debug functions

// Output formatted name of card
function debug_name(card, hideStats) {
    if (card.owner == 'cpu') {
        var tag = 'i';
    } else {
        var tag = 'b';
    }
    var output = '<' + tag + '>';
    output += card.name;
    if (card.runes.length) output += "*";
    if (card.maxLevel > 1) output += '{' + card.level + '/' + card.maxLevel + '}';
    if (card.key !== undefined) output += ' (' + card.key + ')';
    output += '</' + tag + '>';
    if (!hideStats) {
        output += '<u>';
        if (card.isCommander()) {
            output += ' [';
            if (card.health_left !== undefined) output += card.health_left;
            else output += card.health;
            output += ' HP]';
        } else if (card.isAssault()) {
            output += ' [';
            var atk = card.adjustedAttack();
            if (isNaN(atk) || atk == undefined) atk = card.attack;
            output += atk;
            output += '/';
            if (card.health_left !== undefined) output += card.health_left;
            else output += card.health;
            output += '/';
            if (card.timer !== undefined) output += card.timer;
            else output += card.cost;
            output += ']';
        }
        output += '</u>';
    }

    return output;
}

function debug_find_skill(target, s) {
    var skill;
    if (!target[s]) {
        skill = target.skill.concat(target.earlyActivationSkills);
        for (var i in skill) {
            if (skill[i].id == s) {
                skill = copy_skill(skill[i]);
                break
            }
        }
    } else {
        skill = { id: s, x: target[s] };
    }
    return debug_skill(target, skill);
}

function debug_skill(target, skill) {
    var output = convertName(skill.id);
    if (skill.all) output += ' all';
    if (skill.y) output += ' ' + factions.names[skill.y];
    if (skill.s) output += ' ' + convertName(skill.s);
    if (skill.c) output += ' every ' + skill.c + ' turns';
    else if (skill.x) output += ' ' + (skill.x + getEnhancement(target, skill.id, skill.x));
    return output;
}

function convertName(skillID) {
    var skillData = SKILL_DATA[skillID];
    return (skillData ? skillData.name : skillID);
}

var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!~";
var runeDelimiter = "/";
var indexDelimiter = '-';
var priorityDelimiter = '|';

var noFusionInHash = {};
for (var id in CARDS) {
    if (id < 10000) {
        var fusion = FUSIONS[id];
        if (!fusion || Number(fusion) < 10000) {
            noFusionInHash[id] = true;
        }
    }
}

// Used to determine how to hash runeIDs
var maxRuneID = 1000;

function unitInfo_to_base64(unit_info) {

    var baseID = parseInt(unit_info.id);
    var level = (parseInt(unit_info.level) - 1);

    if (noFusionInHash[baseID]) {
        var fusion = Math.floor(level / 7);
        var level = level % 7;
    } else {
        var fusion = Math.floor(baseID / 10000);
        baseID %= 10000;
    }

    var runeID = 0;
    if (unit_info.runes.length) {
        runeID = parseInt(unit_info.runes[0].id);
        runeID %= 5000; // Runes IDs are all in the range of 5001 - 5500
    }

    var priority = (unit_info.priority || 0);

    var dec = baseID;
    dec = dec * 3 + fusion;
    dec = dec * 7 + level;
    dec = dec * maxRuneID + runeID;

    return decimal_to_base64(dec, 5);
}

function base64_to_unitInfo(base64) {

    var dec = base64_to_decimal(base64);

    var runeID = dec % maxRuneID;
    dec = (dec - runeID) / maxRuneID;

    var level = dec % 7;
    dec = (dec - level++) / 7;
    var fusion = dec % 3;
    dec = (dec - fusion) / 3;
    var unitID = dec;

    if (noFusionInHash[unitID]) {
        level += fusion * 7;
    } else if (fusion > 0) {
        unitID = Number(fusion + '' + unitID);
    }

    var unit_info = makeUnitInfo(unitID, level);
    if (runeID > 0) {
        unit_info.runes.push({
            id: runeID + 5000
        });
    }

    return unit_info;
}

function decimal_to_base64(dec, len) {
    var base64 = '';
    //while (dec > 0) {
    for (var i = 0; i < len; i++) {
        var part = dec % 64;
        base64 += base64chars[part]; // + base64;
        dec = (dec - part) / 64;
    }
    return base64;
}

function base64_to_decimal(base64) {
    var dec = 0;
    var orig = dec;
    for (var i = base64.length - 1; i >= 0; i--) {
        dec *= 64;
        var part = base64chars.indexOf(base64[i]);
        dec += part;
    }
    return dec;
}

function runeID_to_decimal(runeID) {
    if (runeID == 0) return 0;
    runeID = parseInt(runeID) % 5000;
    var runeLevel = runeID % 10;
    var runeType = (runeID - runeLevel) / 10;
    runeID = (runeType * 5) + runeLevel - 1; // Make level 0-based
    runeID = (runeType * 5) + runeLevel - 1; // Make level 0-based
    return runeID;
}

function base64_to_runeID(base64) {
    var dec1 = base64chars.indexOf(base64[0]);
    var dec2 = base64chars.indexOf(base64[1]) * 64;
    var runeID = dec1 + dec2;
    return decimal_to_runeID(runeID);
}

function decimal_to_runeID(decimal) {
    var runeLevel = decimal % 5;
    var runeType = (decimal - runeLevel) / 5;
    if (runeType == 0) return 0;
    var runeID = (runeType * 10) + runeLevel + 5001; // Make level 0-based
    return runeID;
}

function numberToBase64(decimal) {
    var char1 = base64chars[Math.floor(decimal / 64)];
    var char2 = base64chars[decimal % 64];
    return char1 + char2;
}

function base64ToNumber(base64) {
    var dec1 = base64chars.indexOf(base64[0]) * 64;
    var dec2 = base64chars.indexOf(base64[1]);
    return dec1 + dec2;
}

//Returns hash built from deck array
function hash_encode(deck) {

    var current_hash = [];
    var has_priorities = false;
    var has_indexes = false;
    var indexes = [];

    if (deck.commander) {
        current_hash.push(unitInfo_to_base64(deck.commander));
    }
    for (var k in deck.deck) {
        var current_card = deck.deck[k];
        if (current_card.priority) {
            has_priorities = true;
        }
        if (current_card.index) {
            indexes.push(numberToBase64(current_card.index));
            has_indexes = true;
        }
        current_hash.push(unitInfo_to_base64(current_card));
    }

    if (has_priorities) {
        var priorities = priorityDelimiter;
        for (var k in deck.deck) {
            var current_card = deck.deck[k];
            if (current_card.priority) {
                priorities += current_card.priority;
            } else {
                priorities += '0';
            }
        }
        current_hash.push(priorities);
    }

    if (has_indexes) {
        indexes = indexDelimiter + indexes.join('');
        current_hash.push(indexes);
    }

    current_hash = current_hash.join("");

    return current_hash;
}

function areEqual(unitInfo1, unitInfo2) {
    if ((!unitInfo1) != (!unitInfo2)) return false; // Silly null-check
    var hash1 = unitInfo_to_base64(unitInfo1);
    var hash2 = unitInfo_to_base64(unitInfo2);
    return (hash1 == hash2);
}

//Returns deck array built from hash
function hash_decode(hash) {

    var current_deck = { deck: [] };
    var unitInfo;
    var indexes;
    var entryLength = 5;
    if (hash.indexOf(indexDelimiter) > 0) {
        // Ignore indices for now
        indexes = hash.substr(hash.indexOf(indexDelimiter) + 1).match(/.{1,2}/g);
        hash = hash.substr(0, hash.indexOf(indexDelimiter));
    }
    var unitidx = 0;
    for (var i = 0; i < hash.length; i += entryLength) {
        // Make sure we have valid characters
        var unitHash = hash.substr(i, entryLength);
        unitInfo = base64_to_unitInfo(unitHash);
        if (unitidx > 0 && indexes) unitInfo.index = base64ToNumber(indexes[unitidx - 1]); // Skip commander

        if (unitInfo) {
            if (loadCard(unitInfo.id)) {
                // Repeat previous card multiple times
                if (!current_deck.commander && is_commander(unitInfo.id)) {
                    current_deck.commander = unitInfo;
                    unitidx++;
                    // Add to deck
                } else {
                    current_deck.deck.push(unitInfo);
                    unitidx++;
                }
            } else {
                console.log("Could not decode '" + unitHash + "' (" + unitInfo.id + ")");
            }
        }
    }

    // Default commander to Elaria Captain if none found
    if (!current_deck.commander) {
        current_deck.commander = elariaCaptain;
    }

    return current_deck;
}


function createEmptyDeck() {
    return {
        deck: [],
        commander: elariaCaptain
    }
}

// Load mission deck
function load_deck_mission(id, level) {
    var missionInfo = MISSIONS[id];
    if (missionInfo) {
        return load_preset_deck(missionInfo, level, 6);
    } else {
        return 0;
    }
}

function load_deck_raid(id, level, maxedAt) {
    if (!maxedAt) maxedAt = 25;
    var raidInfo = RAIDS[id];
    if (raidInfo) {
        var newRaidInfo = {
            commander: raidInfo.commander,
            deck: raidInfo.deck.card
        };
        return load_preset_deck(newRaidInfo, level, Number(raidInfo.upgradeLevels));
    } else {
        return 0;
    }
}

var DoNotFuse = ["8005", "8006", "8007", "8008", "8009", "8010"];

function load_preset_deck(deckInfo, level, upgradeLevels) {

    var maxedAt = upgradeLevels + 1;
    if (!level) level = maxedAt;

    var current_deck = [];
    current_deck.deck = [];
    var commanderInfo = getPresetCommander(deckInfo, level);
    var commander = getPresetUnit(commanderInfo, level, maxedAt); // Set commander to max level
    if (commanderInfo.possibilities) {
        commander.randomInfo = { possibilities: commanderInfo.possibilities, level: level, maxedAt: maxedAt };
    }
    current_deck.commander = commander;
    var presetDeck = deckInfo.deck;

    var deck = current_deck.deck;
    for (var current_key in presetDeck) {
        var unitInfo = presetDeck[current_key];
        var unit = getPresetUnit(unitInfo, level, maxedAt);
        if (unit) {
            deck.push(unit);
        }
    }

    var maxUpgradePoints = getMaxUpgradePoints(deck);
    var upgradePoints = getUpgradePoints(level, maxedAt, maxUpgradePoints);
    if (level > 1 && level < maxedAt) {
        var canFuse = deck.slice();
        while (upgradePoints > 0 && canFuse.length > 0) {
            var index = Math.floor(Math.random() * canFuse.length);
            if (upgradeCard(canFuse[index])) {
                upgradePoints--;
            } else {
                canFuse.splice(index, 1);
            }
        }
    }

    return current_deck;
}

function update_preset_deck(deck) {

    var randomizationInfo = deck.commander.randomInfo;
    if (randomizationInfo) {
        var possibilities = randomizationInfo.possibilities;
        var newCommander = ~~(Math.random() * possibilities.length);
        var unit = getPresetUnit(possibilities[newCommander], randomizationInfo.level, randomizationInfo.maxedAt);
        unit.randomInfo = randomizationInfo;
        deck.commander = unit;
    }

    var cpu_cards = deck.deck;
    for (var i = 0, len = cpu_cards.length; i < len; i++) {
        var unit = cpu_cards[i];
        var randomizationInfo = unit.randomInfo;
        if (randomizationInfo) {
            unit = getPresetUnit(randomizationInfo.unitInfo, randomizationInfo.level, randomizationInfo.maxedAt);
            unit.randomInfo = randomizationInfo;
            cpu_cards[i] = unit;
        }
    }
    return getDeckCards(deck, 'cpu');
}

function getPresetCommander(deckInfo, level) {
    level = parseInt(level);
    var commander = deckInfo.commander;
    if (commander.card) {
        var possibilities = [];
        for (var i = 0; i < commander.card.length; i++) {
            var card = commander.card[i];
            var minLevel = parseInt(card.min_mastery_level) || 0;
            var maxedAt = parseInt(card.max_mastery_level) || 999;
            if (level >= minLevel && level <= maxedAt) {
                possibilities.push(card);
            }
        }
        var chosen = ~~(Math.random() * possibilities.length);
        commander = possibilities[chosen];
        commander.possibilities = possibilities;
    }
    return commander;
}

function getUpgradePoints(level, maxedAt, maxUpgradePoints) {
    var percentCompvare;
    if (maxedAt == 7) {
        percentCompvare = (level - 1) / (maxedAt - 1);
    } else {
        percentCompvare = (level / maxedAt);
    }
    var points = Math.ceil(maxUpgradePoints * percentCompvare);
    return points;
}

function getMaxUpgradePoints(deck) {
    var maxUpgradePoints = 0;
    for (var i = 0; i < deck.length; i++) {
        var unit = deck[i];
        var card = getCardByID(unit);
        var maxFusions = getMaxFusions(card);
        var maxLevel = card.maxLevel;
        maxUpgradePoints += ((maxFusions + 1) * maxLevel - 1);
    }
    return maxUpgradePoints;
}

function getMaxFusions(unit) {
    var id = baseFusion(unit);
    var fusion = -1;
    while (typeof id !== "undefined") {
        fusion++;
        id = FUSIONS[id];
    }
    return fusion;
}

function baseFusion(unit) {
    var baseID = unit.id;
    var id;
    do {
        id = baseID;
        baseID = REVERSE_FUSIONS[id];
    } while (typeof baseID !== "undefined");
    return id;
}

function getPresetUnit(unitInfo, level, maxedAt) {
    level = parseInt(level);
    if (unitInfo.mastery_level && level < parseInt(unitInfo.mastery_level)) return null;
    if (unitInfo.remove_mastery_level && level >= parseInt(unitInfo.remove_mastery_level)) return null;

    var cardID = unitInfo.id;
    var random = false;
    if (!cardID) {
        cardID = getRandomCard(unitInfo);
        random = true;
    }
    var unitLevel = (unitInfo.level || 1);

    if (level >= maxedAt) {
        unitLevel = CARDS[cardID].maxLevel;
        if (canFuse(cardID)) {
            cardID = fuseCard(cardID);
        }
    } else if (level > 1 && is_commander(cardID)) {
        var maxUpgrades = CARDS[cardID].maxLevel - 1;
        var upgradesPerLevel = maxUpgrades / (maxedAt - 1);
        var levelsFromBase = level - 1;
        unitLevel = Math.ceil(upgradesPerLevel * levelsFromBase);
    }

    var unit = makeUnitInfo(cardID, unitLevel);

    if (random) {
        unit.randomInfo = { unitInfo: unitInfo, level: level, maxedAt: maxedAt };
    }
    return unit;
}

function getRandomCard(unitInfo) {
    var possibilities = [];
    for (var id in CARDS) {
        if (REVERSE_FUSIONS[id]) continue;
        var card = CARDS[id];
        if (card.card_type == '1') {
            continue;
        }
        if (unitInfo.max_rarity && Number(unitInfo.max_rarity) < Number(card.rarity) ||
            unitInfo.min_rarity && Number(unitInfo.min_rarity) > Number(card.rarity)) {
            continue;
        }
        if (unitInfo.type && !(unitInfo.type == card.type || card.sub_type.indexOf(unitInfo.type.toString()) >= 0)) {
            continue;
        }
        if (unitInfo.set) {
            var sets = unitInfo.set.split(",");
            if (sets.indexOf(card.set) < 0) {
                continue;
            }
        }
        possibilities.push(id);
    }
    var chosen = ~~(Math.random() * possibilities.length);
    return possibilities[chosen];
}

function upgradeCard(unitInfo) {
    var maxLevel = CARDS[unitInfo.id].maxLevel;
    if (unitInfo.level === maxLevel) {
        if (canFuse(unitInfo.id)) {
            unitInfo.id = fuseCard(unitInfo.id, 1);
            unitInfo.level = 1;
        } else {
            return false;
        }
    } else {
        unitInfo.level++;
    }
    return true;
}

function canFuse(cardID) {
    if (DoNotFuse.indexOf(cardID) > -1) {
        return false;
    } else if (is_commander(cardID)) {
        return false;
    } else if (FUSIONS[cardID]) {
        return true;
    }
    return false;
}

function fuseCard(cardID, fusion) {
    if (DoNotFuse.indexOf(cardID) == -1) {
        // Fuse X number of times
        if (fusion) {
            for (var i = 0; i < fusion; i++) {
                cardID = doFuseCard(cardID);
            }
            // Max fusion
        } else {
            while (true) {
                var fused = doFuseCard(cardID);
                if (cardID === fused) {
                    break;
                }
                cardID = fused;
            }
        }
    }
    return cardID;
}

function doFuseCard(cardID) {
    var fused = FUSIONS[cardID];
    if (fused) {
        return fused;
    } else {
        return cardID;
    }
}

var reverseFusions;

function getFusion(cardID) {
    var fusion = 0,
        base;

    if (!reverseFusions) getReverseFusions();

    do {
        base = reverseFusions[cardID];
        fusion++;
    } while (base);
    return fusion;
}

function getReverseFusions() {
    reverseFusions = {};
    for (var key in FUSIONS) {
        reverseFusions[FUSIONS[key]] = key;
    }
}

// Output card array
var get_card_apply_battlegrounds = function(id, battlegrounds, isToken) {
    battlegrounds = battlegrounds || SIMULATOR.battlegrounds.onCreate;
    return getCardByID(id, battlegrounds, null, isToken);
};

function get_skills(id, level) {
    var card = loadCard(id);
    var skills = card.skill;
    if (level > 1) {
        var upgrade;
        for (var key in card.upgrades) {
            upgrade = card.upgrades[key];
            if (upgrade.skill.length > 0) skills = upgrade.skill;
            if (key == level) break;
        }
    }
    return skills;
}

function getCardByID(unit, skillModifiers, skillMult, isToken) {

    var current_card = loadCard(unit.id);

    // Not a valid card
    if (!current_card) {
        console.log(unit.id + " not found");
        current_card = {};
        current_card.id = unit.id;
        current_card.level = unit.level;
        current_card.name = undefined;
        current_card.health = undefined;
        current_card.skill = [];
        return current_card;
    } else {
        // Add empty skill array to prevent skill condition-checking errors
        if (!current_card.skill) {
            current_card.skill = [];
        }
        var card = makeUnit(current_card, unit.level, unit.runes, skillModifiers, skillMult, isToken);

        if (unit.priority) card.priority = unit.priority;
        return card;
    }
}

function get_slim_card_by_id(unit, getDetails) {

    var current_card = loadCard(unit.id);
    var new_card = {};
    if (current_card.card_type == "1") {
        new_card.isCommander = function() { return true; };
        new_card.isAssault = function() { return false; };
    } else {
        new_card.isCommander = function() { return false; };
        new_card.isAssault = function() { return true; };
    }
    // Not a valid card
    if (!current_card) {
        new_card.id = undefined;
        new_card.name = undefined;
        new_card.card_type = undefined;
        new_card.set = undefined;
        new_card.type = undefined;
        new_card.sub_type = [];
        new_card.level = undefined;
        new_card.maxLevel = undefined;
        if (getSkills) new_card.skill = [];
    } else {
        new_card.id = current_card.id;
        new_card.name = current_card.name;
        new_card.rarity = current_card.rarity;
        new_card.maxLevel = current_card.maxLevel;
        if (unit.level) {
            new_card.level = unit.level;
            if (new_card.level > new_card.maxLevel) new_card.level = new_card.maxLevel;
        } else new_card.level = 1;
        if (getDetails) {
            new_card.attack = current_card.attack;
            new_card.health = current_card.health;
            new_card.cost = current_card.cost;
            new_card.set = current_card.set;
            new_card.card_type = current_card.card_type;
            new_card.type = current_card.type;
            new_card.sub_type = current_card.sub_type || [];
            new_card.skill = current_card.skill;
            if (new_card.level > 1) {
                for (var key in current_card.upgrades) {
                    var upgrade = current_card.upgrades[key];
                    if (upgrade.cost !== undefined) new_card.cost = upgrade.cost;
                    if (upgrade.health !== undefined) new_card.health = upgrade.health;
                    if (upgrade.attack !== undefined) new_card.attack = upgrade.attack;
                    if (upgrade.desc !== undefined) new_card.desc = upgrade.desc;
                    if (upgrade.skill.length > 0) new_card.skill = upgrade.skill;
                    if (key == new_card.level) break;
                }
            }

            var runes = unit.runes;
            if (runes) {
                new_card.skill = new_card.skill.slice();
                addRunes(new_card, runes);
                addRunesToSkills(new_card.skill, runes);
            }
        }
    }

    return new_card;
}

function loadCard(id) {
    var card = CARDS[id];
    return card;
}

function getCardInfo(unit) {
    var id = unit.id;
    var level = unit.level;

    var original = CARDS[id];

    var card = Object.assign({}, original);
    if (level > 1) {
        if (level > 1) {
            for (var key in original.upgrades) {
                var upgrade = original.upgrades[key];
                if (upgrade.cost !== undefined) card.cost = upgrade.cost;
                if (upgrade.health !== undefined) card.health = upgrade.health;
                if (upgrade.attack !== undefined) card.attack = upgrade.attack;
                if (upgrade.desc !== undefined) card.desc = upgrade.desc;
                if (upgrade.skill.length > 0) card.skill = upgrade.skill;
                if (key == level) break;
            }
        }
    }
    card.level = level;
    card.maxLevel = original.maxLevel;
    return card;
}

// Output card name
function get_card_name_by_id(id) {
    var card = loadCard(id);
    if (!card) return 0;
    else return card.name;
}

function is_commander(id) {
    var card = loadCard(id);
    return (card && card.card_type == '1');
}

function is_assault(id) {
    var card = loadCard(id);
    return (card && card.card_type == '2');
}

function is_trap(id) {
    var card = loadCard(id);
    return (card && card.card_type == '3');
}

var makeUnitKey = function(unit) {
    var unitKey = unit.id + "_" + unit.level;
    if (unit.runes && unit.runes.length) {
        unitKey += "_" + unit.runes[0].id;
    }
    return unitKey;
};

function makeUnitInfo(id, level, runes) {
    var unit = {
        id: Number(id),
        level: Number(level),
        runes: []
    };
    if (runes) unit.runes = runes;
    return unit;
}

var elariaCaptain = makeUnitInfo(202, 1);

function getRarity(rarity) {
    return rarityStrings[rarity];
}

function getCurrentPage() {
    var currentPage = window.location.href;
    var pageEnd = currentPage.indexOf(".html");
    currentPage = currentPage.substring(0, pageEnd);
    var pageStart = currentPage.lastIndexOf("/") + 1;
    currentPage = currentPage.substring(pageStart).toLowerCase();
    return currentPage;
}

// Global arrays
var rarityStrings = [
    "",
    "Common",
    "Rare",
    "Epic",
    "Legendary",
    "Mythic"
];

var factions = {
    names: {
        0: 'Factionless',
        1: 'Aether',
        2: 'Chaos',
        3: 'Wyld',
        4: 'Frog',
        5: 'Elemental',
        6: 'Angel',
        7: 'Undead',
        8: 'Void',
        9: 'Dragon',
        10: 'Avian',
        11: 'Goblin',
        12: 'Seafolk',
        13: 'Insect',
        14: 'Bear',
        15: 'Token',
        16: 'Mecha',
        17: 'Knight',

        999: 'Tower'
    },
    IDs: {
        Factionless: 0,
        Aether: 1,
        Chaos: 2,
        Wyld: 3,
        Frog: 4,
        Elemental: 5,
        Angel: 6,
        Undead: 7,
        Void: 8,
        Dragon: 9,
        Avian: 10,
        Goblin: 11,
        Seafolk: 12,
        Insect: 13,
        Bear: 14,
        Token: 15,
        Mecha: 16,
        Knight: 17,

        Tower: 999
    }
};
;"use strict";
var CARD_GUI = {};
(function() {
    var assetsRoot = '';

    function clearCardSpace() {
        var cardSpace = $("#cardSpace").empty();
    }

    function clearDeckSpace() {
        var cardSpace = document.getElementById("deck");
        cardSpace.innerHTML = '';
    }

    function draw_deck(deck, noblanks) {
        var $deck = $("#deck");
        $deck.children().remove();
        $deck.append(makeDeckHTML(deck, noblanks));
        return $deck;
    }

    function makeDeckHTML(deck, noblanks, battlegrounds) {
        var cards = [];
        var commander = getCardByID(deck.commander);
        cards.push(create_card_html(commander, false, false));
        for (var i = 0, len = deck.deck.length; i < len; i++) {
            var deckEntry = deck.deck[i];
            if (battlegrounds) {
                var unit = get_card_apply_battlegrounds(deckEntry, battlegrounds);
            } else {
                var unit = getCardByID(deckEntry);
            }
            cards.push(create_card_html(unit, false, false));
        }
        if (!noblanks)
            for (; i < 15; i++) {
                cards.push(createDiv("card blank"));
            }
        return cards;
    }

    function draw_card_list(list, compactSkills, onclick, onrightclick, skip, end) {
        var cards = make_card_list(list, compactSkills, null, null, /*onclick, onrightclick,*/ skip, end);
        var $cardSpace = $("#cardSpace");
        $cardSpace.empty();
        $cardSpace.append(cards);

        return $cardSpace;
    }

    function draw_inventory(list) {
        var cards = make_card_list(list);
        var $cardSpace = $("#deck");
        $cardSpace.children().remove();
        $cardSpace.append(cards);
        return $cardSpace;
    }

    function draw_inventory(deck) {
        var cards = make_card_list(deck.deck);
        var $cardSpace = $("#deck");
        $cardSpace.children().remove();
        $cardSpace.append(make_card_list([deck.commander]));
        //$deck.find(".card").hide();
        $cardSpace.append(cards);
        return $cardSpace;
    }

    function make_card_list(list, compactSkills, onclick, onrightclick, skip, end) {
        skip = skip || 0;
        var htmlCard;
        var lastUnit;
        var multiplier;
        var uniqueCard = 0;
        var cards = [];
        for (var i = 0, len = list.length; i < len && (!end || uniqueCard < end); i++) {
            var listEntry = list[i];
            var unit = getCardByID(listEntry);
            if (areEqual(unit, lastUnit)) {
                multiplier++;
            } else {
                if ((uniqueCard >= skip)) {
                    addMult(htmlCard, multiplier);
                    multiplier = 1;
                    htmlCard = create_card_html(unit, compactSkills, false, onclick, onrightclick, null, i);
                    htmlCard.setAttribute("data-i", i);
                    if (listEntry.index !== undefined) {
                        htmlCard.setAttribute("data-index", listEntry.index);
                    }
                    cards.push(htmlCard);
                }
                lastUnit = unit;
                uniqueCard++;
            }
        }
        addMult(htmlCard, multiplier);
        return cards;
    }

    function doDrawField(field, drawableHand, callback, turn, activeUnit) {
        if (!drawableHand) drawableHand = [];
        var fieldHTML = [];
        if (turn) {
            var htmlTurnCounter = document.createElement("h1");
            htmlTurnCounter.innerHTML = "Turn: " + turn + " (Currently at " + SIMULATOR.calculatePoints(true) + " points)";
            fieldHTML.push(htmlTurnCounter);
        }

        var divField = createDiv("field");
        var activeUnitOwner = null;
        if (activeUnit) {
            var activeUnitOwner = activeUnit.owner;
            if (activeUnit.isCommander()) {
                activeUnit = -1;
            } else {
                activeUnit = activeUnit.key;
            }
        }
        if (activeUnitOwner === 'player') {
            divField.appendChild(draw_field(field.cpu));
            divField.appendChild(draw_field(field.player, activeUnit));
        } else {
            divField.appendChild(draw_field(field.cpu, activeUnit));
            divField.appendChild(draw_field(field.player));
        }
        fieldHTML.push(divField);
        fieldHTML.push(draw_hand(drawableHand, callback, turn));
        fieldHTML.push(document.createElement('br'));
        fieldHTML.push(document.createElement('br'));
        return fieldHTML;
    }

    function draw_cards(field, drawableHand, callback, turn) {
        var fieldHTML = doDrawField(field, drawableHand, callback, turn);
        $("#cardSpace").children().remove().end().append(fieldHTML);
    }

    function draw_field(field, activeUnit) {
        var cards = createDiv("float-left");
        var commander = field.commander;
        var htmlCard = create_card_html(commander, false, true);
        if (activeUnit === -1) {
            highlightCard(htmlCard);
        }
        cards.appendChild(htmlCard);
        var units = field.assaults;
        if (units)
            for (var i = 0, len = units.length; i < len; i++) {
                var unit = units[i];
                var htmlCard = create_card_html(unit, false, true);
                if (unit.timer) htmlCard.classList.add("inactive");
                if (activeUnit === i) {
                    highlightCard(htmlCard);
                }
                cards.appendChild(htmlCard);
            }
        return cards;
    }

    function draw_hand(hand, callback, state) {
        var cards = createDiv("float-left hand");
        for (var i = 0, len = hand.length; i < len; i++) {
            var unit = hand[i];
            if (!unit) continue;
            var htmlCard = create_card_html(unit, false);
            if (i === 0) htmlCard.classList.add("left");
            else if (i === 2) htmlCard.classList.add("right");
            else if (i > 2) htmlCard.classList.add("inactive");
            var cardidx = i;
            if (callback) {
                htmlCard.addEventListener("click", (function(inner) {
                    return function() {
                        SIMULATOR.choice = inner;
                        callback(state);
                    };
                })(i));
            }
            cards.appendChild(htmlCard);
        }
        return cards;
    }

    function highlightCard(htmlCard) {
        htmlCard.style.outline = "5px solid LawnGreen";
    }

    function addMult(htmlCard, multiplier) {
        // Handle range values
        var iMult = parseInt(multiplier);
        if (iMult == multiplier) {
            multiplier = (iMult > 1 ? iMult : null);
        }
        if (multiplier) {
            var multDiv = createDiv("multiplier", "x" + multiplier);
            multDiv.setAttribute("data-count", multiplier);
            var multIcon = createImg(getAssetPath("cardAssets") + "multiplier.png", "multiplier");
            htmlCard.appendChild(multIcon);
            htmlCard.appendChild(multDiv);
        }
    }

    function addWeight(htmlCard, weight) {
        if (weight > 0) {
            var weightDiv = createDiv("weight", (weight * 100).toFixed(2) + "%");
            weightDiv.setAttribute("data-count", weight);
            var weightIcon = createImg(getAssetPath("cardAssets") + "multiplier.png", "weight");
            htmlCard.appendChild(weightIcon);
            htmlCard.appendChild(weightDiv);
        }
    }

    function createItemHTML(name, quantity, image) {
        var htmlCard = createDiv("card item");

        var background = document.createElement("i");
        background.className = 'sprite sprite-Item';
        htmlCard.appendChild(background);
        if (image) {
            image = createImg(getAssetPath("items") + image + ".png");
            image.className = 'item-image';
            htmlCard.appendChild(image);
        }
        var divName = createDiv("card-name", name);
        htmlCard.appendChild(divName);
        htmlCard.classList.add('factionless');
        htmlCard.appendChild(createDiv("faction"));
        addMult(htmlCard, quantity);
        return htmlCard;
    }

    function create_card_html(card, compactSkills, onField, onclick, onrightclick, onmouseover, state) {
        var htmlCard = createDiv("card");
        // Add ID to card
        htmlCard.setAttribute("data-id", card.id);
        // Add level to card
        htmlCard.setAttribute("data-level", card.level);
        // Add Rune(s) to card
        var runes = card.runes;
        var runeIDs = [];
        var boosts = {};
        for (var i = 0, len = runes.length; i < len; i++) {
            var runeID = runes[i].id;
            runeIDs.push(runes[i].id);
            var rune = getRune(runeID);
            for (var key in rune.stat_boost) {
                if (key == "skill") {
                    key = rune.stat_boost.skill.id;
                }
                boosts[key] = true;
            }
        }
        var highlighted = card.highlighted;
        if (highlighted)
            for (var i = 0; i < highlighted.length; i++) {
                var key = highlighted[i];
                boosts[key] = true;
            }
        htmlCard.setAttribute("data-runeids", runeIDs.join(","));

        var picture = loadCard(card.id).picture;
        if (picture) {
            var icon = document.createElement("i");
            if (picture.indexOf("portrait_") == 0) {
                icon.className = 'portrait portrait-' + picture;
            } else {
                icon.className = 'sprite sprite-' + picture;
            }
            htmlCard.appendChild(icon);
        }
        if (card.isCommander()) {
            htmlCard.classList.add("commander");
        }
        htmlCard.classList.add(factions.names[card.type].toLowerCase());
        var cardName = (card.uid !== undefined ? "(" + card.uid + ") " : "") + card.name;
        var divName = createDiv("card-name", cardName);
        var divID = createDiv("card-id", "(" + card.id + ")");
        divName.appendChild(divID);
        htmlCard.appendChild(divName);
        if (!card.isCommander()) {
            if (card.attack >= 0) {
                if (onField) {
                    if (!card.isUnjammed()) htmlCard.classList.add("frozen");
                    var htmlAttack = createDiv("card-attack", card.adjustedAttack().toString());
                    if (card.adjustedAttack() > card.attack) htmlAttack.classList.add("increased");
                    else if (card.adjustedAttack() < card.attack) htmlAttack.classList.add("decreased");
                    else if (boosts.attack) htmlAttack.classList.add("increased");
                } else {
                    var htmlAttack = createDiv("card-attack", card.attack.toString());
                    if (boosts.attack) htmlAttack.classList.add("increased");
                }
                htmlCard.appendChild(createImg(getAssetPath("cardAssets") + "Attack.png", "attack"));
                htmlCard.appendChild(htmlAttack);
            }

            if (card.cost >= 0) {
                if (onField) {
                    if (card.timer) {
                        htmlCard.appendChild(createDiv("delay", card.timer));
                        htmlCard.appendChild(createImg(getAssetPath("cardAssets") + "Timer.png", "timer"));
                    }
                } else {
                    htmlCard.appendChild(createDiv("delay", card.cost));
                    htmlCard.appendChild(createImg(getAssetPath("cardAssets") + "Timer.png", "timer"));
                }
            }
        }
        if (card.health >= 0) {
            if (onField) {
                var htmlHealth = createDiv("card-health", card.health_left.toString());
                if (card.health_left < card.health) htmlHealth.classList.add("decreased");
                else if (boosts.health) htmlHealth.classList.add("increased");
            } else {
                var htmlHealth = createDiv("card-health", card.health.toString());
                if (boosts.health) htmlHealth.classList.add("increased");
            }
            htmlCard.appendChild(createImg(getAssetPath("cardAssets") + "Health.png", "health"));
            htmlCard.appendChild(htmlHealth);
        }
        var divSkills = createDiv("card-skills");
        var skillsShort = createDiv("card-skills-short");
        if (card.earlyActivationSkills) getSkillsHtml(card, divSkills, skillsShort, card.earlyActivationSkills, onField, boosts);
        getSkillsHtml(card, divSkills, skillsShort, card.skill, onField, boosts);
        if (card.onDeathSkills) getSkillsHtml(card, divSkills, skillsShort, card.onDeathSkills, onField, boosts);
        getPassiveSkills(divSkills, skillsShort, card, onField, boosts);
        var skillsDetail = divSkills.cloneNode(true);
        skillsDetail.className = "card-skills-detailed";
        if (skillsShort.hasChildNodes()) {
            if (compactSkills) {
                htmlCard.appendChild(skillsShort);
                htmlCard.appendChild(divSkills);
            } else {
                htmlCard.appendChild(skillsDetail);
            }
        }
        htmlCard.appendChild(createDiv("faction"));
        if (onField) {
            var statuses = getStatuses(card);
            if (statuses.length > 0) {
                htmlCard.appendChild(createDiv("hidden", "..."));
                var divStatuses = createDiv("card-statuses");
                for (var i = 0; i < statuses.length; i++) {
                    var status = statuses[i];
                    divStatuses.appendChild(status);
                }
                htmlCard.appendChild(divStatuses);
            }
        }
        if (card.set) {
            var htmlSet = getSetIcon(card.set);
            htmlSet.className = "set";
            htmlCard.appendChild(htmlSet);
        }
        var subFactions = card.sub_type;
        if (subFactions.length) {
            var subFactionsDiv = createDiv("subfaction");
            for (var i = 0; i < subFactions.length; i++) {
                var subFactionID = subFactions[i];
                if (subFactionID) {
                    var htmlSubfaction = getFactionIcon(subFactionID);
                    subFactionsDiv.appendChild(htmlSubfaction);
                }
            }
            htmlCard.appendChild(subFactionsDiv);
        }
        if (card.rarity > 0) {
            if (card.maxLevel > Number(card.rarity) + 2) {
                var htmlLevel = createImg(getAssetPath("cardAssets") + "Level_" + card.rarity + "_" + card.maxLevel + "_" + card.level + ".png");
            } else {
                var htmlLevel = createImg(getAssetPath("cardAssets") + "Level_" + card.rarity + "_" + card.level + ".png");
            }
            htmlLevel.className = "level";
            if (card.id > 9999) {
                var fusion = ((card.id.toString()[0] == "1") ? "Dualfuse" : "Quadfuse");
                fusion = createImg(getAssetPath("cardAssets") + fusion + ".png");
                fusion.className = "fusion";
                htmlCard.appendChild(fusion);
            }
            htmlCard.appendChild(htmlLevel);
        } else if (card.maxLevel > 1) {
            var htmlLevel = createImg(getAssetPath("cardAssets") + card.maxLevel + "_" + card.level + ".png");
            htmlLevel.className = "level";
            htmlCard.appendChild(htmlLevel);
        }
        if (onclick) {
            htmlCard.addEventListener("click", (function(inner) {
                return function() {
                    return onclick(htmlCard, state);
                };
            })(htmlCard, state));
        }
        if (onrightclick) {
            htmlCard.oncontextmenu = (function(inner) {
                return function() {
                    return onrightclick(htmlCard, state);
                };
            })(htmlCard, state);
        }
        if (onmouseover) {
            htmlCard.onmouseover = (function(inner) {
                return function() {
                    return onmouseover(htmlCard, state);
                };
            })(htmlCard, state);
        }
        return htmlCard;
    }

    function getSkillsHtml(card, divSkills, skillsShort, skills, onField, boosts) {
        for (var i = 0; i < skills.length; i++) {
            var origSkill = skills[i];
            var skill = {
                all: origSkill.all,
                boosted: origSkill.boosted,
                c: origSkill.c,
                countdown: origSkill.countdown,
                id: origSkill.id,
                s: origSkill.s,
                x: origSkill.x,
                y: origSkill.y,
                boosted: boosts[origSkill.id]
            };
            divSkills.appendChild(getSkillHtml(card, skill, onField, i));
            divSkills.appendChild(document.createElement('br'));
            skillsShort.appendChild(getSkillIcon(skill.id));
        }
    }

    function getPassiveSkills(divSkills, skillsShort, card, onField, boosts) {
        var passiveSkills = Object.getOwnPropertyNames(SKILL_DATA).filter(function(skillID) {
            return ["passive", "toggle"].indexOf(SKILL_DATA[skillID].type) >= 0;
        }).forEach(function(skill) {
            getNonActivatedSkill(divSkills, skillsShort, onField, card, skill, boosts);
        });
        var flurry = card.flurry;
        if (flurry) {
            divSkills.appendChild(getSkillHtml(card, flurry, onField));
            divSkills.appendChild(document.createElement('br'));
            skillsShort.appendChild(getSkillIcon(flurry.id));
        }
    }

    function getNonActivatedSkill(divSkills, skillsShort, onField, card, skillName, boosts) {
        var value = card[skillName];
        if (value) {
            var skill = {
                id: skillName,
                x: value,
                boosted: boosts[skillName]
            };
            divSkills.appendChild(getSkillHtml(card, skill, onField));
            divSkills.appendChild(document.createElement('br'));
            skillsShort.appendChild(getSkillIcon(skill.id));
        }
    }

    function getSkillHtml(card, skill, onField, i) {
        var htmlSkill = document.createElement("span");
        htmlSkill.className = "skill";
        htmlSkill.appendChild(getSkillIcon(skill.id));
        htmlSkill.innerHTML += ' ';
        var imbued = isImbued(card, skill.id, i);
        var enhancement = getEnhancement(card, skill.id, skill.x);
        if (imbued) {
            htmlSkill.classList.add("imbued");
        } else if (skill.boosted || enhancement) {
            htmlSkill.classList.add("increased");
        }
        if (skill.all) htmlSkill.innerHTML += ('All ');
        if (skill.y) {
            htmlSkill.appendChild(getFactionIcon(skill.y));
            htmlSkill.innerHTML += ' ';
        }
        if (skill.s) {
            htmlSkill.appendChild(getSkillIcon(skill.s));
            htmlSkill.innerHTML += ' ';
        }
        var x = (skill.x | 0) + enhancement;
        if (x) htmlSkill.innerHTML += (x + ' ');
        if (skill.c) {
            htmlSkill.innerHTML += (skill.c);
            if (onField) htmlSkill.innerHTML += " (" + (skill.countdown ? skill.countdown : "0") + ")";
        }
        return htmlSkill;
    }

    function getSkillIcon(skillID) {
        var src = getAssetPath("skills");

        var skillData = SKILL_DATA[skillID];
        var iconName = (skillData ? skillData.icon : skillID) + ".png";
        src += iconName;
        var icon = createImg(src);
        switch (skillID) {
            case 'weakenself':
            case 'enlarge':
                icon.classList.add("affect-self");
                break;
            default:
                break;
        }
        icon.title = (skillData ? skillData.name : skillID);
        return icon;
    }

    function getStatuses(card) {
        var debuffs = [];
        /*
        if (card.attack_weaken) {
        	var status = createStatus("weaken", card.attack_weaken);
        	debuffs.push(status);
        }
        */
        if (card.enfeebled) {
            var status = createStatus("enfeeble", card.enfeebled);
            debuffs.push(status);
        }
        if (card.envenomed) {
            var status = createStatus("venom", card.envenomed);
            debuffs.push(status);
        }
        if (card.marked) {
            var status = createStatus("enfeeble", card.marked);
            debuffs.push(status);
        }
        /*
        if (card.jammed) {
        	var status = createStatus("jam");
        	debuffs.push(status);
        }
        */
        if (card.nullified) {
            var status = createStatus("nullify", card.nullified);
            debuffs.push(status);
        }
        if (card.poisoned) {
            var status = createStatus("poison", card.poisoned);
            debuffs.push(status);
        }
        if (card.scorched && card.scorched.amount) {
            var status = createStatus("burn", card.scorched.amount);
            debuffs.push(status);
        }

        var buffs = [];
        /*
        if (card.attack_rally) {
        	var status = createStatus("rally", card.attack_rally);
        	buffs.push(status);
        }
        if (card.attack_berserk) {
        	var status = createStatus("berserk", card.attack_berserk);
        	buffs.push(status);
        }
        */
        if (card.enraged) {
            var status = createStatus("enrage", card.enraged);
            debuffs.push(status);
        }
        if (card.protected) {
            var status = createStatus("protect", card.protected);
            buffs.push(status);
        }
        if (card.invisible) {
            var status = createStatus("evade", card.invisible);
            buffs.push(status);
        }

        var statuses = [];
        if (debuffs.length > 0) {
            var divDebuffs = createDiv("card-debuffs");
            for (var i = 0, len = debuffs.length; i < len; i++) {
                divDebuffs.appendChild(debuffs[i]);
            }
            statuses.push(divDebuffs);
        }
        if (buffs.length > 0) {
            var divBuffs = createDiv("card-buffs");
            for (var i = 0, len = buffs.length; i < len; i++) {
                divBuffs.appendChild(buffs[i]);
            }
            statuses.push(divBuffs);
        }

        return statuses;
    }

    function createStatus(name, value) {
        var spanStatus = document.createElement("span");
        spanStatus.appendChild(getSkillIcon(name));
        if (value) spanStatus.innerHTML += (value);
        return spanStatus;
    }

    function getSetIcon(set) {
        var setName = setNames[set];
        return createImg(getAssetPath('cardAssets') + setName + '.png');
    }

    function getFactionIcon(factionID) {
        var factionName = factions.names[factionID];
        return createImg(getAssetPath('factions') + factionName + '.png');
    }

    function getAssetPath(subpath) {
        return assetsRoot + 'res/' + subpath + '/';
    }

    var setNames = {
        1000: "Basic",
        1100: "Legacy",
        7000: "Basic",
        2000: "Reward",
        2100: "Reward",
        3000: "Premium",
        4000: "BoxOnly",
        5000: "Champion",
        5100: "Champion",
        5200: "Champion",
        9999: "StoryElements"
    };

    CARD_GUI.clearCardSpace = clearCardSpace;
    CARD_GUI.clearDeckSpace = clearDeckSpace;
    CARD_GUI.draw_deck = draw_deck;
    CARD_GUI.create_card_html = create_card_html;
    CARD_GUI.makeDeckHTML = makeDeckHTML;
    CARD_GUI.draw_card_list = draw_card_list;
    CARD_GUI.draw_cards = draw_cards;
    CARD_GUI.doDrawField = doDrawField;
    CARD_GUI.draw_inventory = draw_inventory;
    CARD_GUI.draw_hand = draw_hand;
    CARD_GUI.createItemHTML = createItemHTML;
    CARD_GUI.addMult = addMult;
    CARD_GUI.addWeight = addWeight;
    CARD_GUI.setNames = setNames;

    Object.defineProperties(CARD_GUI, {
        assetsRoot: {
            get: function() {
                return assetsRoot;
            },
            set: function(value) {
                assetsRoot = value;
            }
        }
    });
})();

function createImg(src, className) {
    return $("<img>").addClass(className).attr("src", src)[0];
}

function createDiv(className, value) {
    return $("<div>").addClass(className).html(value)[0];
}

function createSpan(className, value) {
    return $("<span>").addClass(className).html(value)[0];
};"use strict";

// TODO: Add function for re-checking filters
var delayTutorial = true;

var fromInventory = false;
var deck = [];
deck.commander = elariaCaptain;
deck.deck = [];
var inventory;
var inventoryMode = false;

// Filters
var attackHidden = {};
var attackRanges = [];
var healthHidden = {};
var healthRanges = [];
var delayHidden = {};
var delayRanges = [];
var delayExclusions = [];
var skillFilters = [];
var skillExclusions = [];
var skillHidden = {};
var skillFiltersAdv = [];
var skillHiddenAdv = {};
var factionHidden = {};
var subfactionHidden = {};
var dualFactionHidden = {};
var rarityFilters = [];
var rarityHidden = {};
var typeFilters = [];
var typeHidden = {};
var setFilters = [];
var setExclusions = [];
var setHidden = {};
var fusionFilters = [];
var fusionHidden = {};
var nameHidden = {};

var allCards = CARDS;

var showUpgrades = false;

var units = [];
var unitsShown = [];
var unitsFiltered = [];
var advancedFilters;
var optionsDialog;
var saveDeckDialog;
var loadDeckDialog;
var detailsDialog;
var form;

var $nameFilter;
var $deck;
var $cardSpace;

var initDeckBuilder = function () {
	if (!_DEFINED("fromSim")) {
		$("#header").load("templates/header.html", function () {
			$("#header").show();
			if (typeof showTutorial !== "undefined") {
				$("#help").click(showTutorial);
			}
		});
		$.holdReady(true);
		$("#footer").load("templates/footer.html", function () {
			$("#footer").show();
			$.holdReady(false);
		});
	}

	setupPopups();

	stopPropagation("hash");

	$("body").addClass("loading");

	addDeckEventHandlers($("#deck"));
	addLibraryEventHandlers($("#cardSpace"));

	$(window).resize(onResize);

	window.onwheel = changePage;
	window.oncontextmenu = hideContext;

	$("#rows").val(storageAPI.getField("deckBuilder", "rows", 3));
	$("#rows").bind("change", function () {
		storageAPI.setField("deckBuilder", "rows", $("#rows").val());
	});

	$nameFilter = $('#nameFilter').keypress(function (event) {
		if (event.which == 13) {
			if (unitsFiltered.length == 1) {
				addUnitToDeck(unitsFiltered[0], $cardSpace.children()[0]);
			}
			event.preventDefault();
		}
	}).autocomplete({
		source: []
	});

	var dhtml = $("#deck").sortable({
		items: '.card:not(.commander):not(.blank)',
		tolerance: "intersect",
		helper: function (event, ui) {
			return ui.clone();
		},
		start: function (event, ui) {
			var lastPos = ui.placeholder.index() - 1;
			ui.item.data('last_pos', lastPos);
			$(ui.item).hide();
		},
		change: function (event, ui) {
			var origPos = ui.item.index();
			var lastPos = ui.item.data('last_pos') - 1;
			var newPos = ui.placeholder.index();
			if (origPos < newPos) newPos--;
			highlighted = newPos;
			ui.item.data('last_pos', newPos);
			newPos--;

			var array = deck.deck;
			array.splice(newPos, 0, array.splice(lastPos, 1)[0]);
			updateHash();
			updateHighlights();
		}
	});

	inventory = (_GET('inventory') || inventory);

	$("[name=rarity]").click(function (event) {
		onClickFilter(event, filterRarity, event.altKey);
	});
	$("[name=faction]").click(function (event) {
		onClickFilter(event, filterFaction, event.altKey);
	});
	$("[name=subfaction]").click(function (event) {
		onClickFilter(event, filterSubfaction, event.altKey);
	});
	$("[name=delay]").click(function (event) {
		onClickFilter(event, filterDelay, event.altKey);
	});
	$("[name=set]").click(function (event) {
		onClickFilter(event, filterSet, event.altKey);
	});
	$("#dualfaction").click(function (event) {
		onClickFilter(event, filterDualFaction, event.altKey);
	});

	setTimeout(loadCards, 1);

	if (_DEFINED("unlimited")) {
		$deck = $("#deck");
		toggleInventoryMode();
	}

	$("#graph-accordion").click(updateGraphs);
}

var loadCards = function () {
	allCards = CARDS;
	$("#loadingSplash").html("Loading...");
	drawAllCards();
	$("body").removeClass("loading");
	checkTutorial();
}

var setupPopups = function () {

	stopPropagation("advancedFilters");
	stopPropagation("unitOptions");

	$(".accordion").accordion({
		collapsible: true,
		heightStyle: "content",
	});

	$(".start-closed").accordion('option', 'active', false).show();

	if (_DEFINED("spoilers")) {
		$("#deck-container, #filter-container").accordion('option', 'active', false).show();
	}

	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {

	}

	advancedFilters = $("#advancedFilters").dialog({
		autoOpen: false,
		width: 150,
		minHeight: 20,
		modal: true,
		resizable: false,
		buttons: {
			OK: function () {
				filterAdvanced(advancedFilters.skill);
				advancedFilters.dialog("close");
			},
			Cancel: function () {
				advancedFilters.dialog("close");
			}
		},
		open: closeDialogOnOverlayClick
	});
	optionsDialog = $("#unitOptions").dialog({
		autoOpen: false,
		width: 250,
		minHeight: 20,
		modal: true,
		resizable: false,
		buttons: {
			OK: function () {
				disableTracking = false;
				modifyCard(optionsDialog);
				updateHash();
				optionsDialog.dialog("close");
				disableTracking = false;
			},
			Cancel: function () {
				resetCard(optionsDialog);
				optionsDialog.dialog("close");
				disableTracking = false;
			}
		},
		open: closeDialogOnOverlayClick
	}).bind("change", function () {
		modifyCard(optionsDialog);
	});

	var imageButtons = $('input[type="image"]:not(.skill-filter)');
	for (var i = 0; i < imageButtons.length; i++) {
		var imageButton = imageButtons[i];
		var toolTip = '<div class="tooltip">' + imageButton.getAttribute("title") + '</div>';
		imageButton.removeAttribute("title");
		var orig_html = imageButton.outerHTML;
		var new_html = '<div style="display:inline; position:relative; overflow:visible;">' + orig_html + toolTip + '</div>';
		imageButton.outerHTML = new_html;
	}

	saveDeckDialog = $("#saveDeckDialog").dialog({
		autoOpen: false,
		/*
		width: 250,
		minHeight: 20,
		*/
		modal: true,
		resizable: false,
		buttons: {
			Save: function () {
				var name = $("#saveDeckName").val();
				var hash = $("#hash").val();
				storageAPI.saveDeck(name, hash);
				saveDeckDialog.dialog("close");
			},
			Cancel: function () {
				saveDeckDialog.dialog("close");
			}
		},
		open: closeDialogOnOverlayClick
	});

	loadDeckDialog = $("#loadDeckDialog").dialog({
		autoOpen: false,
		minWidth: 320,
		/*
		minHeight: 20,
		*/
		modal: true,
		resizable: false,
		buttons: {
			Delete: function () {
				var name = $("#loadDeckName").val();
				var newHash = storageAPI.deleteDeck(name);
			},
			Load: function () {
				var name = $("#loadDeckName").val();
				var newHash = storageAPI.loadDeck(name);
				loadDeckDialog.onloaded(newHash);
				loadDeckDialog.dialog("close");
			},
			Cancel: function () {
				loadDeckDialog.dialog("close");
			}
		},
		open: closeDialogOnOverlayClick
	});

	detailsDialog = $("#detailedView").dialog({
		minWidth: 480,
		minHeight: 330,
		padding: 0,
		autoOpen: false,
		modal: true,
		resizable: false,
		open: closeDialogOnOverlayClick
	});
}

var closeDialogOnOverlayClick = function closeDialogOnOverlayClick() {
	var targetDialog = $(this);
	jQuery('.ui-widget-overlay')
		.bind('click contextmenu', function onClickOverlay(event) {
			targetDialog.dialog('close');
			event.preventDefault();
		});
};

var drawAllCards = function () {
	drawCardList();
	drawDeck();
}

var drawDeck = function () {

	var hash = _GET('hash') || $("#hash").val();
	if (hash) {
		hash_changed(hash);
	}

	var name = _GET('name');
	if (name) {
		setDeckName(name);
	}
	doDrawDeck();
}

function doDrawDeck() {
	/*if (inventoryMode) {
		$deck = CARD_GUI.draw_inventory(deck.deck);
	} else */ {
		$deck = CARD_GUI.draw_deck(deck, inventoryMode);
	}
	updateHash();
};

function addDeckEventHandlers($deck) {
	addCardEvent($deck, "mousedown", duplicate);
	//addCardEvent($deck, "mouseup", duplicate);
	addCardEvent($deck, "mouseover", highlight);
	addCardEvent($deck, "click", deckOnClick);
	addCardEvent($deck, "contextmenu", showCardOptions);
}

function addLibraryEventHandlers($cardSpace) {
	addCardEvent($cardSpace, "click", addToDeck);
	addCardEvent($cardSpace, "contextmenu", showDetails);
}

function addCardEvent($collection, eventName, callback) {
	if (callback) {
		$collection.on(eventName, function (event) {
			var htmlCard = event.target.closest('.card');
			if (htmlCard && !htmlCard.classList.contains('blank')) {
				var i = $(htmlCard).attr('data-i');
				return callback(event, htmlCard, i);
			}
		});
	}
}

var showDetails = function (event, htmlCard) {
	event.preventDefault();

	var unit = getUnitFromCard(htmlCard);

	cardDetailScope.setUnit(unit).$apply();

	detailsDialog.dialog("option", "position", { my: "center", at: "center", of: window });
	detailsDialog.dialog("open");

	detailsDialog.onloaded = setInventory;
}

function duplicate(event, htmlCard) {
	if (event.ctrlKey) {
		var $htmlCard = $(htmlCard);
		if (!inventoryMode) {
			var emptySpaces = $htmlCard.parent().find(".blank");
			if (!emptySpaces.length) {
				return;
			}
			emptySpaces.first().remove();
		}
		var index = $htmlCard.index();
		var unit = deck.deck[index - 1];
		var clone = $htmlCard.clone();
		clone.insertBefore($htmlCard.parent().children()[index]);
		deck.deck.splice(index, 0, makeUnitInfo(unit.id, unit.level, unit.runes || []));
		updateHash();
	}
}

function deckOnClick(event, htmlCard) {
	if (!event.ctrlKey) {
		removeFromDeck(htmlCard);
	}
}

var drawCardList = function () {
	units = [];
	unitsShown = [];
	if (inventory) {
		fromInventory = true;
		inventory = hash_decode(inventory);
		var commander = inventory.commander;
		inventory = inventory.deck;
		if (commander && !areEqual(commander, elariaCaptain)) {
			inventory.push(commander);
		}

		for (var i = 0; i < inventory.length; i++) {
			addInventoryUnit(inventory[i]);
		}
		deck.commander = removeFromInventory(deck.commander);
		for (var i = 0; i < deck.deck.length; i++) {
			var unit = deck.deck[i];
			deck.deck[i] = removeFromInventory(unit);
		}
	} else {
		if (_DEFINED('spoilers')) {
			for (var id in spoilers) {
				addUnitLevels(id);
			}
		} else {
			for (var id in allCards) {
				if (id < 10000) {
					addUnit(id);
				}
			}
		}
	}

	sortCards(document.getElementById("sortField"));

	applyFilters();
}

var page = 0;
var pages = 0;
function doDrawCardList(cardList, resetPage) {

	var detailedSkills = document.getElementById("skillDetails").checked;
	var cardspace = document.getElementById("cardSpace");

	if (resetPage) {
		page = 0;
	}

	var width = cardspace.offsetWidth;
	var rows = document.getElementById("rows").value;
	var cards = ~~(width / 90); // Each card is 84 pixels wide and has 2 pixels of padding and 1 pixel of border
	cards *= rows;
	var lastUnit = null;
	var unique = 0;
	for (var i = 0, len = cardList.length; i < len; i++) {
		var unit = cardList[i];
		if (!areEqual(unit, lastUnit)) unique++;
		lastUnit = unit;
	}
	pages = Math.max(Math.ceil(unique / cards), 1);
	if (pages > 1) {
		var start = cards * page;
		if (page >= pages) {
			page = pages - 1;
			start = cards * page;
		}
		CARD_GUI.draw_card_list(cardList, detailedSkills, addToDeck, hideContext, start, start + cards);
	} else {
		page = 0;
		CARD_GUI.draw_card_list(cardList, detailedSkills, addToDeck, hideContext);
	}
	document.getElementById("pageNumber").innerHTML = "Page " + (page + 1) + "/" + pages;
	$cardSpace = $("#cardSpace");
	var $cards = $cardSpace.find(".card");
	if ($cards.length) {
		var card = $cards[0];
		var $card = $(card);
		var minHeight = (card.offsetHeight + parseInt($card.css('marginTop')) + parseInt($card.css('marginBottom'))) * parseInt(rows);
		$cardSpace.css('min-height', minHeight + 'px');
	}
}

var onResize = (function () {
	//redrawCardList(true);
	applyFilters(true);
}).debounce(50);

function adjustTable(filler) {
	var currentRow = filler.parentElement;
	var table = currentRow.parentElement;
	if (filler.offsetWidth <= 2) {
		if (table.childElementCount == 1) {
			var siblings = [];
			var sibling = filler.nextElementSibling;
			while (sibling) {
				siblings.push(sibling);
				sibling = sibling.nextElementSibling
			}
			if (siblings.length) {
				var tr = document.createElement("tr");
				for (var i = 0; i < siblings.length; i++) {
					tr.appendChild(siblings[i]);
				}
				table.appendChild(tr);
			}
		}
	} else {
		if (table.childElementCount > 1) {
			var tr = currentRow.nextElementSibling;
			if (tr) {
				for (var i = 0; i < tr.childNodes.length; i++) {
					currentRow.appendChild(tr.childNodes[i]);
				}
				table.removeChild(tr);
			}
		}
	}
}

function changePage(event) {
	if (overInventory(event)) {
		if (event.deltaY < 0) {
			pageUp();
		} else if (event.deltaY > 0) {
			pageDown();
		}
		event.preventDefault();
	}
}

function overInventory(event) {
	var element = event.srcElement;
	while (element != null) {
		if (element.id === "cardSpace") {
			return true;
		}
		element = element.parentElement;
	}
}

function pageUp() {
	page--;
	if (page < 0) {
		page = 0;
	} else {
		//redrawCardList(true);
		applyFilters(true);
	}
}

function pageDown() {
	page++;
	if (page >= pages) {
		page--;
	} else {
		//redrawCardList(true);
		applyFilters(true);
	}
}

var redrawCardList = function (keepPaging) {
	sortCards(document.getElementById("sortField"));
	applyFilters(keepPaging);
}

var addInventoryUnit = function (unit) {
	units.push(unit);
	unitsShown.push(unit);
}

var addUnit = function (id, spoilers) {
	addUnitLevels(id);
	if (spoilers) {
		if (spoilers["1" + id]) addUnitLevels("1" + id);
		if (spoilers["2" + id]) addUnitLevels("2" + id);
	} else if (id > 999) {
		addUnitLevels("1" + id);
		addUnitLevels("2" + id);
	}
}

var addUnitLevels = function (id) {
	var card = allCards[id];
	if (card) {
		for (var level = 1; level <= card.maxLevel; level++) {
			var unit = makeUnitInfo(id, level);
			units.push(unit);
			if (showUpgrades || level == card.maxLevel) unitsShown.push(unit);
		}
	}
}

var resetDeck = function () {
	/*if (inventoryMode) {
		hash_changed('');
	} else */ {
		hash_changed('oZ0IB');
	}
}

var disableTracking = false;
var hash_changed = function (hash) {
	if (fromInventory) {
		if (!areEqual(deck.commander, elariaCaptain)) unitsShown.push(deck.commander);
		unitsShown.push.apply(unitsShown, deck.deck);
		redrawCardList(true);
	}
	if (hash === undefined) hash = document.getElementById("hash").value.trim();
	setHash(hash);

	updateSimulator(hash);

	deck = hash_decode(hash);

	if (!hash) deck.commander = null;

	if (fromInventory) {
		if (!areEqual(deck.commander, elariaCaptain)) removeFromInventory(deck.commander);
		for (var i = 0; i < deck.deck.length; i++) {
			removeFromInventory(deck.deck[i]);
		}
		applyFilters();
	}

	doDrawDeck();

	generateLink();
}

var setHash = function (hash) {
	$("#hash").val(hash);
	generateLink();
}

var sortDeck = function () {
	deck.deck.sort(function (unitA, unitB) {
		var cardA = getCardByID(unitA);
		var cardB = getCardByID(unitB);
		var compare;
		compare = (cardA.rarity - cardB.rarity);
		if (compare) return compare;
		compare = (cardA.type - cardB.type);
		if (compare) return compare;
		compare = compareByID(unitA, unitB);
		if (compare) return compare;
		compare = unitA.level - unitB.level;
		if (compare) return compare;
		compare = (unitA.runes.length ? unitA.runes[0].id : 0) - (unitB.runes.length ? unitB.runes[0].id : 0);
		return compare;
	});
	doDrawDeck();
}

var addToDeck = function (event, htmlCard) {
	var unit = getUnitFromCard(htmlCard);
	addUnitToDeck(unit, htmlCard);
}

var addUnitToDeck = function (unit, htmlCard) {
	var $htmlCard = $(htmlCard).clone().find(".multiplier").remove().end();

	if (!inventoryMode) {
		unit = Object.assign({}, unit);
	}

	var $deck = $("#deck");
	/*
	if (inventoryMode) {
		deck.deck.push(unit);
		//$deck.append($htmlCard);
		doDrawDeck();
	} else*/ if (is_commander(unit.id)) {

		if (areEqual(deck.commander, unit)) return;
		deck.commander = unit;
		replaceCard($deck.find(".card").first(), $htmlCard);
	} else {
		if (!inventoryMode && deck.deck.length == 15) return;
		deck.deck.push(unit);
		var emptySpaces = $deck.find(".blank");
		if (emptySpaces.length) {
			replaceCard(emptySpaces.first(), $htmlCard);
		} else {
			$deck.append($htmlCard)
		}
	}

	$htmlCard = $(htmlCard);
	if (fromInventory) {
		removeFromInventory(unit);
		var $mult = $htmlCard.find("div.multiplier");
		if ($mult.length > 0) {
			var count = Number($mult.attr("data-count")) - 1;
			if (count > 1) {
				$mult.attr("data-count", count);
				$mult.html("x" + count);
			} else {
				$htmlCard.find(".multiplier").remove();
			}
		} else {
			$htmlCard.remove();
		}
	} else {
		$htmlCard.stop().hide().fadeIn(100);
	}
	updateHash();
};

function replaceCard(oldCard, newCard) {
	var speed = (oldCard.hasClass("blank") ? 1000 : 600);
	$(oldCard).replaceWith(newCard);
	newCard.children().stop().hide().fadeIn(speed).promise();
}


function removeFromInventory(unit) {
	for (var i = 0; i < unitsShown.length; i++) {
		var unit_i = unitsShown[i];
		if (areEqual(unit, unit_i)) {
			var removed = unitsShown.splice(i, 1);
			return removed[0];
		}
	}
	return unit;
}

var removeFromDeck = function (htmlCard) {
	var unit;
	var $htmlCard = $(htmlCard)//$(event.delegateTarget)
	var index = $htmlCard.index();
	/*if (inventoryMode) {
		var inventory = deck.deck;
		var invIndex = 0;
		var i = 0;
		var lastUnit;
		for (var len = inventory.length; i < len; i++) {
			var unit = inventory[i];
			if (lastUnit) {
				if (!areEqual(unit, lastUnit)) {
					invIndex++;
				}
			}
			if (invIndex == index) {
				break;
			}
			lastUnit = unit;
		}
		unit = deck.deck.splice(i, 1)[0];
		//$htmlCard.remove();
		doDrawDeck();
	} else*/ if (index == 0) {
		unit = deck.commander;
		if (areEqual(unit, elariaCaptain)) return;
		deck.commander = elariaCaptain;
		var card = getCardByID(elariaCaptain);
		//$htmlCard.replaceWith(CARD_GUI.create_card_html(card));
		var captain = $(CARD_GUI.create_card_html(card));
		replaceCard($htmlCard, captain);
	} else {
		unit = deck.deck.splice(index - 1, 1)[0];

		$htmlCard.remove();
		if (deck.deck.length < 15) {
			$deck.append("<div class='card blank'></div>");
		}
	}


	if (fromInventory) {
		unitsShown.push(unit);
		redrawCardList(true);
	}

	updateHash();
};

var highlight = function (event, htmlCard) {
	highlighted = $(htmlCard).index();
	updateHighlights();
}

var highlighted = -1;
function updateHighlights() {
	var hash_highlighted = document.getElementById("hash");
	var deckHash = hash_highlighted.value;

	var start = highlighted * 5;
	var end = start + 5;
	var highlightedHash = deckHash.substring(0, start) + '<span>' + deckHash.substring(start, end) + '</span>' + deckHash.substring(end);

	var hash_highlighter = document.getElementById('hash_highlighter');
	hash_highlighter.innerHTML = highlightedHash;
	$(hash_highlighter).width($(hash_highlighted).width())
}

var updateHash = function () {
	var deckHash = hash_encode(deck);
	setHash(deckHash);

	updateHighlights();

	addChange(deckHash);

	updateSimulator(deckHash);

	updateGraphs();
}

var updateSimulator = function (deckHash) {
	// Placeholder function - set by Simulator
}

var updateGraphs = function () {
	var graphsContainer = $("#deckGraphs");
	if (!graphsContainer.is(":visible")) {
		return null;
	}
	var delays = [0, 0, 0, 0, 0];
	var attackStats = [];
	var healthStats = [];
	var delayStats = [];
	var types = {};
	var sub_types = {};
	for (var i = 0; i < deck.deck.length; i++) {
		var unit = deck.deck[i];
		var card = getCardByID(unit);
		delays[card.cost]++;
		types[card.type] = (types[card.type] || 0) + 1;
		attackStats.push(Number(card.attack));
		healthStats.push(Number(card.health));
		delayStats.push(Number(card.cost));

		var subFactions = card.sub_type;
		if (!subFactions.length) subFactions.push(0);
		for (var s = 0; s < subFactions.length; s++) {
			var subFaction = subFactions[s];
			sub_types[subFaction] = (sub_types[subFaction] || 0) + 1;
		}
	}
	var numericSort = function (a, b) { return a - b };
	attackStats.sort(numericSort);
	healthStats.sort(numericSort);
	delayStats.sort(numericSort);

	function sum(total, num) {
		return total + num;
	}
	function average(ary) {
		return (ary.length ? (ary.reduce(sum) / ary.length).toFixed(0) : 0);
	}
	var avgAttack = average(attackStats);
	var avgHealth = average(healthStats);
	var avgDelay = average(delayStats);

	var options = {
		width: 300,
		height: 200,
		axisY: {
			onlyInteger: true
		},
		plugins: [
			Chartist.plugins.legend(),
			Chartist.plugins.tooltip()
		],
		series: {
			'Attack': {
				lineSmooth: Chartist.Interpolation.simple()
			},
			'Health': {
				lineSmooth: Chartist.Interpolation.simple()
			},
			'Delay': {
				lineSmooth: Chartist.Interpolation.simple()
			}
		}
	};

	new Chartist.Line('#statChart', {
		series: [
			{ name: 'Attack', className: 'ct-series-attack', data: attackStats },
			{ name: 'Health', className: 'ct-series-health', data: healthStats },
			{ name: 'Delay', className: 'ct-series-delay', data: delayStats }
		]
	}, options);

	var options = {
		width: 300,
		height: 200,
		axisY: {
			onlyInteger: true
		},
		distributeSeries: true
	};
	var data = { labels: ['0', '1', '2', '3', '4'], series: delays };
	new Chartist.Bar('#delayChart', data, options);

	var data = {
		labels: ['Attack', 'Health', 'Delay'], series: [
			{ value: avgAttack, className: 'ct-series-attack' },
			{ value: avgHealth, className: 'ct-series-health' },
			{ value: avgDelay, className: 'ct-series-delay' }
		]
	};
	new Chartist.Bar('#averagesChart', data, options).on('draw', function (data) {
		var barHorizontalCenter, barVerticalCenter, label, value;
		if (data.type === "bar") {
			barHorizontalCenter = data.x1 + (data.element.width() * .5);
			barVerticalCenter = data.y1 + (data.element.height() * -1) - 10;
			value = data.element.attr('ct:value');
			if (value !== '0') {
				label = new Chartist.Svg('text');
				label.text(value);
				label.addClass("ct-barlabel");
				label.attr({
					x: barHorizontalCenter,
					y: barVerticalCenter,
					'text-anchor': 'middle'
				});
				return data.group.append(label);
			}
		}
	});

	var options = {
		width: 450,
		height: 200,
		labelInterpolationFnc: function (label, i) {
			return data.series[i].value;
		},
		plugins: [
			Chartist.plugins.legend()
		]
	};

	var labels = [];
	var data = [];
	for (var key in types) {
		var factionName = factions.names[key];
		labels.push(factionName);
		data.push({
			value: types[key],
			className: "ct-series-" + factionName
		});
	}
	var data = { labels: labels, series: data };
	new Chartist.Pie('#factionChart', data, options);

	options.labelInterpolationFnc = function (label, i) {
		return data2.series[i].value;
	};
	var labels = [];
	var data2 = [];
	for (var key in sub_types) {
		var factionName = factions.names[key];
		labels.push(factionName);
		data2.push({
			value: sub_types[key],
			className: "ct-series-" + factionName
		});
	}
	var data2 = { labels: labels, series: data2 };
	new Chartist.Pie('#subfactionChart', data2, options);


	var attackStats = [];
	var healthStats = [];
	var delayStats = [];
	var types = {};
	var sub_types = {};
	for (var i = 0; i < deck.deck.length; i++) {
		var unit = deck.deck[i];
		var card = getCardByID(unit);
		delays[card.cost]++;
		types[card.type] = (types[card.type] || 0) + 1;
		attackStats.push(Number(card.attack));
		healthStats.push(Number(card.health));
		delayStats.push(Number(card.cost));

		var subFactions = card.sub_type;
		if (!subFactions.length) subFactions.push(0);
		for (var s = 0; s < subFactions.length; s++) {
			var subFaction = subFactions[s];
			sub_types[subFaction] = (sub_types[subFaction] || 0) + 1;
		}
	}
	var numericSort = function (a, b) { return a - b };
	attackStats.sort(numericSort);
	healthStats.sort(numericSort);
	delayStats.sort(numericSort);

	function sum(total, num) {
		return total + num;
	}
	function average(ary) {
		return (ary.length ? (ary.reduce(sum) / ary.length).toFixed(0) : 0);
	}
	var avgAttack = average(attackStats);
	var avgHealth = average(healthStats);
	var avgDelay = average(delayStats);

	var options = {
		width: 300,
		height: 200,
		axisY: {
			onlyInteger: true
		},
		plugins: [
			Chartist.plugins.legend(),
			Chartist.plugins.tooltip()
		],
		series: {
			'Attack': {
				lineSmooth: Chartist.Interpolation.simple()
			},
			'Health': {
				lineSmooth: Chartist.Interpolation.simple()
			},
			'Delay': {
				lineSmooth: Chartist.Interpolation.simple()
			}
		}
	};

	new Chartist.Line('#statChart', {
		series: [
			{ name: 'Attack', className: 'ct-series-attack', data: attackStats },
			{ name: 'Health', className: 'ct-series-health', data: healthStats },
			{ name: 'Delay', className: 'ct-series-delay', data: delayStats }
		]
	}, options);

	var totalHealth = getCardByID(deck.commander).health + healthStats.reduce(function (prev, curr) { return prev + curr }, 0);
	var HPPL = totalHealth / 15;
	var labels = [];
	var healthNeeded = [];
	for (var i = 0; i <= 15; i++) {
		labels.push(130 - i);
		healthNeeded.push(Math.ceil(HPPL * i));
	}

	var options = {
		width: 500,
		height: 200,
		axisY: {
			onlyInteger: true
		},
		plugins: [
			Chartist.plugins.legend(),
			Chartist.plugins.tooltip()
		]
	};
	new Chartist.Line('#hpplChart', {
		labels: labels,
		series: [
			{ name: 'Health Lost', className: 'ct-series-attack', data: healthNeeded },
		]
	}, options);
}

var changeTracking = [];
var currentChange = -1;
function addChange(hash) {
	if (!disableTracking) {
		currentChange++;
		changeTracking[currentChange] = hash;
		changeTracking.length = currentChange + 1;
		if (currentChange > 100) {
			currentChange--;
			changeTracking.splice(0, 1);
		}
	}
}

function KeyPress(e) {
	var evtobj = window.event ? event : e
	if (evtobj.ctrlKey) {
		if (evtobj.keyCode == 90) {
			undo();
		} else if (evtobj.keyCode == 89) {
			redo();
		}
	}
}

document.onkeydown = KeyPress;

function stopPropagation(id) {
	document.getElementById(id).onkeydown = function (e) {
		e.stopPropagation();
	}
}

function undo() {
	if (currentChange > 0) {
		var $hash = $(document.getElementById("hash"));
		$hash.on("focus", preventFocus);

		disableTracking = true

		currentChange--;
		var hash = changeTracking[currentChange];
		setHash(hash);
		deck = hash_decode(hash);
		doDrawDeck();

		$hash.off("focus");
		disableTracking = false;
	}
}

function redo() {
	if (currentChange < changeTracking.length - 1) {
		var $hash = $(document.getElementById("hash"));
		$hash.on("focus", preventFocus);

		disableTracking = true;

		currentChange++;
		var hash = changeTracking[currentChange];
		setHash(hash);
		deck = hash_decode(hash);
		doDrawDeck();

		$hash.off("focus");
		disableTracking = false;
	}
}

var preventFocus = function (event) {
	$(this).blur();
	event.stopPropagation();
}

var onClickFilter = function (event, filterFunction, altKey) {
	var button = event.target;
	var filter = button.getAttribute("data-filter");
	filterFunction(button, filter, altKey);
}

var onContextMenu = function (event) {
	event.preventDefault();

	var button = event.target;
	var skill = button.getAttribute("data-filter");
	showAdvancedFilters(skill);
}

var filterAdvanced = function (skill) {
	var info = {
		id: skill,
		x: undefined,
		y: undefined,
		c: undefined,
		s: undefined,
		all: undefined,
	}

	for (var i = 0; i < skillFiltersAdv.length; i++) {
		if (skillFiltersAdv[i].id == skill) {
			skillFiltersAdv.splice(i, 1);
			break;
		}
	}

	if ($("div#amount")[0].style.display != "none") {
		var min = parseInt($("#amount-min")[0].value);
		var max = parseInt($("#amount-max")[0].value);
		if (isNaN(min)) min = 0;
		if (isNaN(max)) max = 99;
		info.x = { min: min, max: max };
	}
	if ($("div#timer")[0].style.display != "none") {
		var min = parseInt($("#timer-min")[0].value);
		var max = parseInt($("#timer-max")[0].value);
		if (isNaN(min)) min = 0;
		if (isNaN(max)) max = 99;
		info.c = { min: min, max: max };
	}
	if ($("div#faction")[0].style.display != "none") {
		var faction = $("select#faction")[0].value;
		info.y = (faction == "Generic") ? -1 : factions.IDs[faction];
	}
	if ($("div#skill")[0].style.display != "none") {
		if ($("select#skill")[0].value.length > 0) {
			info.s = $("select#skill")[0].value;
		}
	}
	if ($("label[for=all]")[0].style.display != "none") {
		info.all = $("select#all")[0].value;
	}

	var classList = $("input[name=skill][data-filter=" + skill + "]")[0].classList;

	classList.add("selected-advanced");
	skillFiltersAdv.push(info);

	if (classList.contains("selected")) {
		classList.remove("selected");
		skillFilters.splice(skillFilters.indexOf(skill), 1);
		checkBasicSkillFilters();
	}
	if (classList.contains("excluded")) {
		classList.remove("excluded");
		skillExclusions.splice(skillFilters.indexOf(skill), 1);
		checkBasicSkillFilters();
	}

	checkAdvancedFilters();
}

var checkAdvancedFilters = function () {
	skillHiddenAdv = {};

	for (var i = 0; i < units.length; i++) {
		var unit = units[i];
		for (var s = 0; s < skillFiltersAdv.length; s++) {
			if (!hasSkillAdvanced(unit, skillFiltersAdv[s])) {
				skillHiddenAdv[makeUnitKey(unit)] = true;
			}
		}
	}
	for (var key in skillFiltersAdv) {
		var info = skillFiltersAdv[key];
	}
	applyFilters();
}

var filterSkill = function (button, skill, exclude) {
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		skillFilters.splice(skillFilters.indexOf(skill), 1);
	} else if (button.classList.contains("excluded")) {
		button.classList.remove("excluded");
		skillExclusions.splice(skillFilters.indexOf(skill), 1);
	} else if (button.classList.contains("selected-advanced")) {
		button.classList.remove("selected-advanced");
		for (var i = 0; i < skillFiltersAdv.length; i++) {
			if (skillFiltersAdv[i].id == skill) {
				skillFiltersAdv.splice(i, 1);
				break;
			}
		}
		checkAdvancedFilters();
		return;
	} else if (exclude) {
		button.classList.add("excluded");
		skillExclusions.push(skill);
	} else {
		button.classList.add("selected");
		skillFilters.push(skill);
	}

	checkBasicSkillFilters();

	applyFilters();
};

function checkBasicSkillFilters() {
	skillHidden = {};
	if ((skillFilters.length + skillExclusions.length) > 0) {
		for (var i = 0; i < units.length; i++) {
			var unit = units[i];
			for (var s = 0; s < skillFilters.length; s++) {
				if (!hasSkill(unit, skillFilters[s])) {
					skillHidden[makeUnitKey(unit)] = true;
					break;
				}
			}
			for (var s = 0; s < skillExclusions.length; s++) {
				if (hasSkill(unit, skillExclusions[s])) {
					skillHidden[makeUnitKey(unit)] = true;
					break;
				}
			}
		}
	}
}

var filterFaction = function (button, faction) {
	factionHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
	} else {
		button.classList.add("selected");
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			if (!isInFaction(unit, faction)) {
				factionHidden[makeUnitKey(unit)] = true;
			}
		}
	}
	var filters = document.getElementsByName("faction");
	for (var i = 0; i < filters.length; i++) {
		var filter = filters[i];
		if (filter != button) {
			filter.classList.remove("selected");
		}
	}
	applyFilters();
};

var filterName = (function (field) {
	var filter = field.value.toLowerCase();
	nameHidden = {};
	if (filter) {
		if (filter.indexOf("[") === 0 || (filter.indexOf("]") - filter.length) === -1) {
			if (filter.indexOf("[") !== 0) filter = ".*" + filter;
			if (filter.indexOf("]") - filter.length !== -1) filter += ".*";
			var idRegex = new RegExp("^" + filter.replace("[", "").replace("]", "") + "$");
			for (var i = 0, len = units.length; i < len; i++) {
				var unit = units[i];
				var unit_id = unit.id;
				if (!idRegex.test(unit_id.toString())) {
					nameHidden[makeUnitKey(unit)] = true;
				}
			}
		} else {
			for (var i = 0, len = units.length; i < len; i++) {
				var unit = units[i];
				var card = get_slim_card_by_id(unit, true);
				if (!card.name || card.name.toLowerCase().indexOf(filter) == -1) {
					nameHidden[makeUnitKey(unit)] = true;
				}
			}
		}
	}
	applyFilters();
}).throttle(250);

var filterSubfaction = function (button, faction, exclude) {

	if (button.classList.contains("selected") || button.classList.contains("excluded")) {
		button.classList.remove("selected");
		button.classList.remove("excluded");
		button.checked = false;
	} else if (exclude) {
		button.classList.add("excluded");
		button.classList.remove("selected");
	} else {
		button.classList.remove("excluded");
		button.classList.add("selected");
	}

	subfactionHidden = {};
	var subfactions = $("[name=subfaction].selected").toArray().map(function (a) { return a.attributes["data-filter"].value; });
	var exclusions = $("[name=subfaction].excluded").toArray().map(function (a) { return a.attributes["data-filter"].value; });
	for (var i = 0, len = units.length; i < len; i++) {
		var unit = units[i];
		for (var s = 0; s < subfactions.length; s++) {
			if (!isInSubfaction(unit, subfactions[s])) {
				subfactionHidden[makeUnitKey(unit)] = true;
			}
		}
		for (var e = 0; e < exclusions.length; e++) {
			if (isInSubfaction(unit, exclusions[e])) {
				subfactionHidden[makeUnitKey(unit)] = true;
			}
		}
	}
	applyFilters();
}

var filterDualFaction = function (button, faction, exclude) {

	var show;
	if (button.classList.contains("selected") || button.classList.contains("excluded")) {
		button.classList.remove("selected");
		button.classList.remove("excluded");
		button.checked = false;
	} else if (exclude) {
		button.classList.add("excluded");
		button.classList.remove("selected");
		show = false;
	} else {
		button.classList.remove("excluded");
		button.classList.add("selected");
		show = true;
	}

	dualFactionHidden = {};
	if (typeof show !== "undefined") {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			if (isDualFaction(unit) !== show) {
				dualFactionHidden[makeUnitKey(unit)] = true;
			}
		}
	}
	applyFilters();
}

var filterAttack = function (button, min, max) {
	attackHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < attackRanges.length; i++) {
			if (attackRanges[i][0] == min) {
				attackRanges.splice(i, 1);
				break;
			}
		}
	} else {
		button.classList.add("selected");
		attackRanges.push([min, max]);
	}
	if (attackRanges.length > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			var hide = true;
			for (var j = 0; j < attackRanges.length; j++) {
				var range = attackRanges[j];
				if (isInRange(unit, "attack", range[0], range[1])) {
					hide = false;
					break;
				}
			}
			if (hide) attackHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

var filterHealth = function (button, min, max) {
	healthHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < healthRanges.length; i++) {
			if (healthRanges[i][0] == min) {
				healthRanges.splice(i, 1);
				break;
			}
		}
	} else {
		button.classList.add("selected");
		healthRanges.push([min, max]);
	}
	if (healthRanges.length > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			var hide = true;
			for (var j = 0; j < healthRanges.length; j++) {
				var range = healthRanges[j];
				if (isInRange(unit, "health", range[0], range[1])) {
					hide = false;
					break;
				}
			}
			if (hide) healthHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

var filterDelay = function (button, delay, exclude) {
	delayHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < delayRanges.length; i++) {
			if (delayRanges[i] == delay) {
				delayRanges.splice(i, 1);
				break;
			}
		}
	} else if (button.classList.contains("excluded")) {
		button.classList.remove("excluded");
		button.checked = false;
		for (var i = 0; i < delayExclusions.length; i++) {
			if (delayExclusions[i] == delay) {
				delayExclusions.splice(i, 1);
				break;
			}
		}
	} else {
		if (exclude) {
			button.classList.add("excluded");
			delayExclusions.push(delay);
		} else {
			button.classList.add("selected");
			delayRanges.push(delay);
		}
	}
	if (delayExclusions.length > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			var hide = false;
			for (var j = 0; j < delayExclusions.length; j++) {
				var delay = delayExclusions[j];
				if (isInRange(unit, "cost", delay, delay)) {
					hide = true;
					break;
				}
			}
			if (hide) delayHidden[makeUnitKey(unit)] = true;
		}
	}
	if (delayRanges.length > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			var hide = true;
			for (var j = 0; j < delayRanges.length; j++) {
				var delay = delayRanges[j];
				if (isInRange(unit, "cost", delay, delay)) {
					hide = false;
					break;
				}
			}
			if (hide) delayHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

var filterType = function (button, type) {
	typeHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < typeFilters.length; i++) {
			if (typeFilters[i] == type) {
				typeFilters.splice(i, 1);
				break;
			}
		}
	} else {
		button.classList.add("selected");
		typeFilters.push(type);
	}
	if (typeFilters.length > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			var hide = true;
			for (var j = 0; j < typeFilters.length; j++) {
				var type = typeFilters[j];
				if (isInRange(unit, "card_type", type, type)) {
					hide = false;
					break;
				}
			}
			if (hide) typeHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

var filterFusion = function (button, fusion) {
	fusionHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < fusionFilters.length; i++) {
			if (fusionFilters[i] == fusion) {
				fusionFilters.splice(i, 1);
				break;
			}
		}
	} else {
		button.classList.add("selected");
		fusionFilters.push(fusion);
	}
	if (fusionFilters.length > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			var id = unit.id.toString();
			var fusion = (id.length > 4 ? id[0] : '');
			var hide = true;
			for (var j = 0; j < fusionFilters.length; j++) {
				if (fusion == fusionFilters[j]) {
					hide = false;
					break;
				}
			}
			if (hide) fusionHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

var showAdvancedFilters = function (skill) {

	$("label[for=all]").hide();
	$("div#amount").hide();
	$("div#faction").hide();
	$("div#skill").hide();
	$("div#timer").hide();

	$("#amount-min")[0].value = 0;
	$("#amount-max")[0].value = 99;
	$("#timer-min")[0].value = 0;
	$("#timer-max")[0].value = 99;
	$("select#faction")[0].value = '';
	$("select#skill")[0].value = '';
	$("select#all")[0].value = -1;
	for (var i = 0; i < skillFiltersAdv.length; i++) {
		var skillInfo = skillFiltersAdv[i];
		if (skillInfo.id == skill) {
			if (skillInfo.x) {
				$("#amount-min")[0].value = skillInfo.x.min;
				$("#amount-max")[0].value = skillInfo.x.max;
			}
			if (skillInfo.c) {
				$("#timer-min")[0].value = skillInfo.c.min;
				$("#timer-max")[0].value = skillInfo.c.max;
			}
			if (skillInfo.y) {
				if (skillInfo.y == -1)
					$("select#faction")[0].value = "Generic";
			}
			if (skillInfo.s) $("select#skill")[0].value = skillInfo.s;
			if (skillInfo.all) $("select#all")[0].value = skillInfo.all;
			break;
		}
	}

	switch (skill) {
		// x="1" y="0" all="0" c="0" s="0"
		case 'absorb':
		case 'armored':
		case 'barrage':
		case 'backlash':
		case 'berserk':
		case 'burn':
		case 'corrosive':
		case 'counter':
		case 'counterburn':
		case 'counterpoison':
		case 'evade':
		case 'evadebarrier':
		case 'frost':
		case 'fury':
		case 'heartseeker':
		case 'ignite':
		case 'leech':
		case 'magicfield':
		case 'nullify':
		case 'pierce':
		case 'poison':
		case 'regenerate':
		case 'scorchbreath':
		case 'stasis':
		case 'taunt':
		case 'valor':
			$("div#amount").show();
			break;

		// x="1" y="1" all="0" c="0" s="0"
		case 'radiance':
		case 'silence':
			$("div#amount").show();
			$("div#faction").show();
			break;

		// x="1" y="1" all="0" c="0" s="0"
		case 'fervor':
		case 'legion':
		case 'reanimate':
		case 'resurrect':
			$("div#amount").show();
			$("div#faction").show();
			$("div#timer").show();
			break;

		// x="1" y="1" all="1" c="1" s="0"
		case 'enrage':
		case 'heal':
		case 'protect':
		case 'protect_ice':
		case 'rally':
			$("div#amount").show();
			$("label[for=all]").show();
			$("div#faction").show();
			break;

		// x="1" y="0" all="1" c="0" s="0"
		case 'cleanse':
		case 'enfeeble':
		case 'poisonstrike':
		case 'strike':
		case 'weaken':
		case 'weakenself':
			$("div#amount").show();
			$("label[for=all]").show();
			break;
		// x="1" y="1" all="1" c="1" s="1"
		case 'enhance':
		case 'imbue':
			$("div#amount").show();
			$("label[for=all]").show();
			$("div#faction").show();
			$("div#skill").show();
			$("div#timer").show();
			break;

		// x="0" y="0" all="1" c="1" s="0"
		case 'confuse':
		case 'jam':
			$("label[for=all]").show();
			$("div#timer").show();
			break;

		// x="0" y="0" all="0" c="1" s="0"
		case 'flurry':
			$("div#timer").show();
			break;
		
		// x="1" y="1" all="1" c="0" s="0"
		case 'invigorate':
			$("div#amount").show();
			$("label[for=all]").show();
			$("div#faction").show();
		default:
			return null;
	}
	advancedFilters.dialog("option", "position", { mw: "center", at: "center", of: $("[data-filter=" + skill + "]")[0] });;
	advancedFilters.dialog("open");
	advancedFilters.skill = skill;

	return false;
}

var showCardOptions = function (event, htmlCard) {
	event.preventDefault();

	var show = false;
	//var htmlCard = event.delegateTarget;
	var index = $(htmlCard).index() - 1;
	if (index < 0) {
		var unit = deck.commander;
	} else {
		var unit = deck.deck[index];
	}
	optionsDialog.index = index;
	var card = getCardByID(unit);

	$("#upgradeDiv").hide();
	var upgradeLevel = document.getElementById("upgrade");
	upgradeLevel.max = card.maxLevel;
	upgradeLevel.value = card.level;
	if (card.maxLevel > 1) {
		$("#upgradeDiv").show();
		show = true;
	}

	var fusionField = document.getElementById("fusion");
	fusionField.value = 0;
	$("#fusionDiv").hide();
	if (!card.isCommander()) {
		var fusion = 1;
		var baseID = card.id.toString();
		if (baseID.length > 4) {
			var fusion = parseInt(baseID[0]) + 1;
			var baseID = baseID.substring(1);
		}
		if (FUSIONS[baseID]) {
			fusionField.value = fusion;
			$("#fusionDiv").show();
			show = true;
		}
	}

	if ($("#upgradeDiv").css('display') == "none" || $("#fusionDiv").css('display') == "none") {
		$("#upgradeDiv").add("#fusionDiv").toggleClass("split", false);
	} else {
		$("#upgradeDiv").add("#fusionDiv").toggleClass("split", true);
	}

	if (showRunePicker(card)) {
		show = true;
	}

	if (show) {
		disableTracking = true;
		optionsDialog.dialog("option", "position", { my: "left", at: "right", of: htmlCard });;
		optionsDialog.dialog("open");
		optionsDialog.unit = unit;
		optionsDialog.originalUnit = $.extend({}, unit);
	}

	return false;
}

function hideContext(event) {
	event.preventDefault();
	return false;
}

var showRunePicker = function (card) {
	var select = document.getElementById("runeChoices");
	select.innerHTML = '<option value=""></option>';
	//var showUnreleased = document.getElementById("showUnreleased").checked;

	optionsDialog.hiddenOptions = [];


	$("#runeChoicesDiv").hide();
	if (card.rarity >= 3 && !card.isCommander()) {
		for (var key in RUNES) {
			var rune = RUNES[key];
			if (canUseRune(card, rune.id)) {
				var option = document.createElement('option');
				option.appendChild(document.createTextNode(rune.desc));
				option.value = rune.id;
				select.appendChild(option);
				/*
				if (rune.rarity > 3)
				{
					optionsDialog.hiddenOptions.push(option);
					option.hidden = !showUnreleased;
					option.disabled = !showUnreleased;
				}
				*/
			}
		}

		if (card.runes.length) {
			document.getElementById("runeChoices").value = card.runes[0].id;
		} else {
			document.getElementById("runeChoices").value = '';
		}
		if (select.childNodes.length > 0) {
			$("#runeChoicesDiv").show();
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

var toggleUnreleasedRunes = function (checkbox) {
	var runesToToggle = optionsDialog.hiddenOptions;
	for (var i = 0, len = runesToToggle.length; i < len; i++) {
		runesToToggle[i].hidden = !checkbox.checked;
		runesToToggle[i].disabled = !checkbox.checked;
	}
}

var modifyCard = function (optionsDialog) {
	var unit = optionsDialog.unit;
	if (unit !== undefined) {
		var runeID = document.getElementById("runeChoices").value;
		if (runeID) {
			unit.runes = [{ id: runeID }];
		} else {
			unit.runes = [];
		}
	} else {
		var unit = deck.commander;
	}

	unit.level = document.getElementById("upgrade").value;
	var fusion = document.getElementById("fusion").value;
	if (fusion) {
		fusion = (fusion - 1).toString();
		var unitID = unit.id.toString();
		if (unitID.length > 4) unitID = unitID.substring(1);
		if (fusion >= 0) unitID = fusion + unitID;
		unit.id = parseInt(unitID);
	}
	var card = getCardByID(unit);
	showRunePicker(card);
	setCard(optionsDialog.index, unit);
	setHash(hash_encode(deck));
}

var resetCard = function (optionsDialog) {
	setCard(optionsDialog.index, optionsDialog.originalUnit);
	setHash(hash_encode(deck));
}

var setCard = function (index, unit) {
	if (index < 0) {
		deck.commander = unit;
	} else {
		deck.deck[index] = unit;
	}
	var htmlCard = CARD_GUI.create_card_html(getCardByID(unit), false, false);
	$deck.find(".card").eq(index + 1).replaceWith(htmlCard);
}

var filterSet = function (button, sets, exclude) {
	setHidden = {};

	var clear = null;
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		clear = "selected";
	} else if (button.classList.contains("excluded")) {
		button.classList.remove("excluded");
		button.checked = false;
		clear = "excluded";
	} else if (exclude) {
		button.classList.add("excluded");
	} else {
		button.classList.add("selected");
	}

	sets.split(',').forEach(function (set) {
		switch (clear) {
			case "selected":
				setFilters.splice(setFilters.indexOf(set), 1);
				break;
			case "excluded":
				setExclusions.splice(setExclusions.indexOf(set), 1);
				break;
			default:
				if (exclude) {
					setExclusions.push(set);
				} else {
					setFilters.push(set);
				}
				break;
		}
	});

	if ((setFilters.length + setExclusions.length) > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];

			var show = (setFilters.length === 0);
			for (var j = 0; j < setFilters.length; j++) {
				var set = setFilters[j];
				if (isInRange(unit, "set", set, set)) {
					show = true;
					break;
				}
			}
			if (show) {
				var hide = false;
				for (var j = 0; j < setExclusions.length; j++) {
					var set = setExclusions[j];
					if (isInRange(unit, "set", set, set)) {
						hide = true;
						break;
					}
				}
			}
			if (!show || hide) setHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

var filterRarity = function (button, rarity) {
	rarityHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < rarityFilters.length; i++) {
			if (rarityFilters[i] == rarity) {
				rarityFilters.splice(i, 1);
				break;
			}
		}
	} else {
		button.classList.add("selected");
		rarityFilters.push(rarity);
	}
	if (rarityFilters.length > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			var hide = true;
			for (var j = 0; j < rarityFilters.length; j++) {
				var rarity = rarityFilters[j];
				if (isInRange(unit, "rarity", rarity, rarity)) {
					hide = false;
					break;
				}
			}
			if (hide) rarityHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

var applyFilters = function (keepPage, skipDraw) {
	unitsFiltered = [];
	var names = [];
	var addedNames = {};
	for (var i = 0, len = unitsShown.length; i < len; i++) {
		var unit = unitsShown[i];
		var key = makeUnitKey(unit);
		if (skillHidden[key] || factionHidden[key] || subfactionHidden[key]
			|| attackHidden[key] || healthHidden[key] || delayHidden[key]
			|| typeHidden[key] || fusionHidden[key] || setHidden[key]
			|| nameHidden[key] || rarityHidden[key] || skillHiddenAdv[key]
			|| dualFactionHidden[key]) {
		} else {
			unitsFiltered.push(unit);
			var card = getCardByID(unit);
			if (!addedNames[card.name]) {
				names.push(card.name);
				addedNames[card.name] = true;
			}
		}
	}
	$nameFilter.autocomplete("option", { source: names });

	if (!skipDraw) {
		doDrawCardList(unitsFiltered, !keepPage);
	}
}

var hasSkill = function (unit, skill) {
	var card = get_slim_card_by_id(unit, true);
	var skills = card.skill;
	for (var i = 0, len = skills.length; i < len; i++) {
		if (skill == skills[i].id) return true;
	}
	return false;
}

var hasSkillAdvanced = function (unit, skillInfo) {
	var card = get_slim_card_by_id(unit, true);
	var skills = card.skill;
	for (var i = 0, len = skills.length; i < len; i++) {
		var skill = skills[i];
		if (skillInfo.id == skill.id) {
			if (skillInfo.x && (skill.x < skillInfo.x.min || skill.x > skillInfo.x.max)) continue;
			if (skillInfo.c && (skill.c < skillInfo.c.min || skill.c > skillInfo.c.max)) continue;
			if (skillInfo.y == -1 && skill.y) continue;
			if (skillInfo.y > 0 && skill.y != skillInfo.y) continue;
			if (skillInfo.s && skill.s != skillInfo.s) continue;
			if (skillInfo.all > -1 && (skill.all || "0") != skillInfo.all) continue;
			return true;
		}
	}
	return false;
}

var clearFilters = function () {
	attackHidden = {};
	attackRanges = [];

	healthHidden = {};
	healthRanges = [];

	delayHidden = {};
	delayRanges = [];
	delayExclusions = [];

	skillFilters = [];
	skillExclusions = [];
	skillHidden = {};
	skillFiltersAdv = [];
	skillHiddenAdv = {};

	factionHidden = {};
	subfactionHidden = {};
	dualFactionHidden = {};

	rarityFilters = [];
	rarityHidden = {};

	typeFilters = [];
	typeHidden = {};

	setFilters = [];
	setExclusions = [];
	setHidden = {};

	fusionFilters = [];
	fusionHidden = {};

	nameHidden = {};

	$(".selected").removeClass("selected");
	$(".excluded").removeClass("excluded");
	$(".selected-advanced").removeClass("selected-advanced");
	$("#nameFilter").val("");

	applyFilters();
}

var isInFaction = function (unit, faction) {
	var factionID = factions.IDs[faction];
	var card = get_slim_card_by_id(unit, true);
	return (card.type == factionID);
}

var isInSubfaction = function (unit, faction) {
	var factionID = factions.IDs[faction];
	var card = get_slim_card_by_id(unit, true);
	if (typeof factionID === "undefined") {
		return (card.sub_type.length === 0);
	} else {
		return (card.sub_type.indexOf(factionID.toString()) >= 0);
	}
}

var isDualFaction = function (unit) {
	var card = get_slim_card_by_id(unit, true);
	return (card.sub_type.length > 1);
}

var isInRange = function (unit, field, min, max) {
	var card = get_slim_card_by_id(unit, true);
	var value = card[field];
	if (value === undefined) return false;
	if (min >= 0 && value < min) return false;
	if (max >= 0 && value > max) return false;
	return true;
}

var toggleSkillDetails = function () {
	applyFilters(true);
}

var toggleUpgrades = function (checkbox) {
	showUpgrades = checkbox.checked;
	$("body").addClass("loading");
	setTimeout(function () {
		drawCardList();
		$("body").removeClass("loading");
		applyFilters(false);
	}, 1);
}

function sortAndDraw(select) {
	doSort(select);
	applyFilters();
}

var sortCards = function (select) {
	doSort(select);
}

function doSort(select) {
	var sortField = select.value;
	unitsShown.sort(function (unitA, unitB) {
		// Always sort by commander/unit first
		var comparison = is_commander(unitB.id) - is_commander(unitA.id);
		if (comparison != 0) return comparison;

		if (sortField === 'id') {
			return compareByID(unitA, unitB);
		} else {
			var cardA = getCardByID(unitA);
			var cardB = getCardByID(unitB);
			if (sortField === 'sub_type') {
				comparison = compareBySubfactions(cardA, cardB);
			} else {
				comparison = (cardA[sortField] || 0) - (cardB[sortField] || 0);
			}
			if (comparison != 0) return comparison;
			// Fall back on sorting by ID
			return compareByID(unitA, unitB);
		}
	});
}

// TODO: Remove recursion (causes stack overflow in JavaScript)
function quicksort(arr, comparator) {
	//if array is empty
	if (arr.length === 0) {
		return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];
	//go through each element in array
	for (var i = 1; i < arr.length; i++) {
		if (comparator(arr[i], pivot) < 0) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quicksort(left, comparator).concat(pivot, quicksort(right, comparator));
}

var compareByID = function (unitA, unitB) {
	var unitIDA = unitA.id;
	var unitIDB = unitB.id;

	var keyA = (unitIDA % 10000);
	var keyB = (unitIDB % 10000);
	var comparison = keyA - keyB;
	if (comparison != 0) return comparison;

	var comparison = unitIDA - unitIDB;
	if (comparison != 0) return comparison;

	var comparison = unitA.level - unitB.level;
	if (comparison != 0) return comparison;

	return sortByRunes(unitA, unitB);
}

function compareBySubfactions(cardA, cardB) {
	var subfactionsA = cardA.sub_type;
	var subfactionsB = cardB.sub_type;
	var maxSubfactions = Math.max(subfactionsA.length, subfactionsB.length);
	for (var i = 0; i < maxSubfactions; i++) {
		var subfactionA = (subfactionsA[i] || -1);
		var subfactionB = (subfactionsB[i] || -1);
		var comparison = subfactionA - subfactionB;
		if (comparison) return comparison;
	}
	return 0;
}

function sortByRunes(unitA, unitB) {
	var comparison = unitA.runes.length - unitB.runes.length;
	if (comparison != 0) return comparison;
	if (!unitA.runes.length) return 0;
	return unitA.runes[0].id - unitB.runes[0].id;
}

var getUnitFromCard = function (htmlCard) {
	var unit = {
		id: htmlCard.attributes.getNamedItem("data-id").value,
		level: htmlCard.attributes.getNamedItem("data-level").value,
	};
	var runeIDs = htmlCard.attributes.getNamedItem("data-runeids").value.split(",");
	var runes = [];
	for (var i = 0, len = runeIDs.length; i < len; i++) {
		var runeID = runeIDs[i];
		if (runeID > 0) {
			runes.push({ id: runeID });
		}
	}
	var index = htmlCard.attributes.getNamedItem("data-index");
	if (index) {
		unit.index = index.value;
	}
	unit.runes = runes;
	return unit;
}

var skillStyle = document.createElement('style');
(function () {
	skillStyle.type = 'text/css';
	document.getElementsByTagName('head')[0].appendChild(skillStyle);
})();

function setDeckName(name) {
	var lbl = document.getElementById("version_label");
	lbl.innerText += " " + name;
}

function saveDeck() {
	var hash = $("#hash").val();
	$("#saveDeckName").val("");
	var savedDecks = storageAPI.getSavedDecks();
	for (var name in savedDecks) {
		var existing = savedDecks[name];
		if (hash == existing) {
			$("#saveDeckName").val(name);
			break;
		}
	}
	saveDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });
	saveDeckDialog.dialog("open");
}

function loadDeck() {
	$('label[for="loadDeckName"]').html('<strong>Deck:</strong>');
	loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });
	loadDeckDialog.dialog("open");

	loadDeckDialog.onloaded = hash_changed;
}

function loadInventory() {
	$('label[for="loadDeckName"]').html('<strong>Inventory:</strong>');
	loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });
	loadDeckDialog.dialog("open");

	loadDeckDialog.onloaded = setInventory;
}

function setInventory(hash) {
	inventory = hash;
	drawCardList();
	generateLink();
}

function toggleInventoryMode() {
	inventoryMode = !inventoryMode;
	if (inventoryMode) {
		$("#inventoryMode").val("Switch to Deck Builder");
		$deck.find(".card.blank").remove();
		$deck.sortable("disable");
		doDrawDeck();
	} else {
		$("#inventoryMode").val("Switch to Inventory Builder");
		for (var i = $deck.find(".card").length; i < 16; i++) {
			$deck.append("<div class='card blank'></div>");
		}
		$deck.sortable("enable");
		doDrawDeck();
	}
	generateLink();
}

function generateLink() {
	var params = [];
	var name = _GET('name');
	var hash = $("#hash").val();
	if (name) {
		params.push("name=" + name);
	}
	if (hash) {
		params.push("hash=" + hash);
	}
	if (inventory) {
		params.push("inventory=" + hash_encode({ commander: elariaCaptain, deck: inventory }));
	}
	if (inventoryMode) {
		params.push("unlimited");
	}
	if (_DEFINED("spoilers")) {
		params.push("spoilers");
	}
	var link = "http://thesench.github.io/SIMSpellstone/DeckBuilder.html";
	if (params.length) {
		link += "?" + params.join("&");
	}
	$("#link").attr("href", link).text(link);
}

function externalData(hash, inventoryHash) {
	setHash(hash);
	inventory = inventoryHash;
};var storageAPI = {};

(function (angular) {
    'use strict';

    var DeckStorageCtrl = function ($scope, $window) {
        $scope.getSavedDecks = $window.storageAPI.getSavedDecks;

        $scope.keys = function (obj) {
            return (obj ? Object.keys(obj) : []);
        };
    };
    var module;
    try {
        module = angular.module('simulatorApp');
    }
    catch (loadError) {
        module = angular.module('simulatorApp', []);
    }

    module.controller('DeckStorageCtrl', ['$scope', '$window', DeckStorageCtrl]);

}(angular));

// Set up StorageAPI based on feature availability
if (function (type) {
    // LocalStorage Suppotr Check : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}('localStorage')) {
    (function () {
        var SaveFields = {
            decks: "SavedDecks",
            tutorial: "Tutorial"
        };

        storageAPI.initialize = function () {
            var currentPage = getCurrentPage();

            convertSavedDecks();

            storageAPI.getField(SaveFields.decks, "savedDecks", {});
            storageAPI.shouldShowTutorial = storageAPI.getField(SaveFields.tutorial, currentPage, true)[currentPage];

            var cachedOnUpdate = storageAPI.onUpdateDecks;
            storageAPI.onUpdateDecks = function (savedDecks) {
                cachedOnUpdate();
                storageAPI.setField(SaveFields.decks, "savedDecks", savedDecks);
            };

            var cachedSetShowTutorial = storageAPI.setShowTutorial;
            storageAPI.setShowTutorial = function (value) {
                cachedSetShowTutorial(value);
                storageAPI.setField(SaveFields.tutorial, currentPage, value);
            };
        };

        storageAPI.getField = function (storageName, fieldName, defaultValue) {

            var storage = getStorage(storageName);

            var value = storage[fieldName];
            if (typeof value === 'undefined') {
                value = defaultValue;
                storageAPI.setField(storageName, fieldName, value);
            }

            return value;
        };

        storageAPI.setField = function (storageName, fieldName, newValue) {
            var storage = getStorage(storageName);
            storage[fieldName] = newValue;
            localStorage.setItem(storageName, JSON.stringify(storage));
        };

        function getStorage(storageName) {
            var storage = localStorage.getItem(storageName);
            if (storage) {
                try {
                    storage = JSON.parse(storage);
                } catch (err) {
                    storage = {};
                }
            } else {
                storage = {};
            }
            storageAPI.data[storageName] = storage;
            return storage;
        }

        function convertSavedDecks() {
            var storage = getStorage(SaveFields.decks);
            if (typeof storage.savedDecks === 'undefined') {
                storageAPI.setField(SaveFields.decks, "savedDecks", storage);
            }
        }

        window.addEventListener('storage', function (e) {
            if (e.key !== '__storage_test__') {
                var oldValue = localStorage.getItem(e.key);
                if (oldValue !== e.newValue) {
                    angular.element('#loadDeckDialog').scope().$apply(
                        localStorage.setItem(e.key, e.newValue)
                    );
                }
            }
        });
    }());
} else {
    (function () {
        storageAPI.initialize = function () {
            storageAPI.getSavedDecks = function () { return {}; };
            storageAPI.loadDeck = notSupported;
            storageAPI.deleteDeck = notSupported;
            storageAPI.clearDecks = notSupported;
            storageAPI.getField = function (storageName, fieldName, defaultValue) {
                return defaultValue;
            };
            storageAPI.setField = function () { };

            storageAPI.savedDecks = {};
            storageAPI.shouldShowTutorial = true;
        };

        var notSupported = function (name, hash) {
            alert("Your browser does not support this feature.");
        };
    }());
}

(function () {
    var SaveFields = {
        decks: "SavedDecks"
    };

    storageAPI.data = {};

    storageAPI.getSavedDecks = function () {
        return storageAPI.getField(SaveFields.decks, "savedDecks", {});
    };

    storageAPI.saveDeck = function (name, hash) {
        var savedDecks = storageAPI.getSavedDecks();
        savedDecks[name] = hash;
        storageAPI.onUpdateDecks(savedDecks);
    };

    storageAPI.loadDeck = function (name) {
        return storageAPI.getSavedDecks()[name];
    };

    storageAPI.deleteDeck = function (name) {
        var savedDecks = storageAPI.getSavedDecks();
        delete savedDecks[name];
        storageAPI.onUpdateDecks(savedDecks);
    };

    storageAPI.clearDecks = function (name) {
        var savedDecks = storageAPI.getSavedDecks();
        for (var name in savedDecks) {
            delete savedDecks[name];
        }
        storageAPI.onUpdateDecks(savedDecks);
    };

    storageAPI.onUpdateDecks = function () {
        if (!$loadDialogScope) {
            $loadDialogScope = angular.element('#loadDeckDialog').scope();
        }
        $loadDialogScope.$apply();
    };

    storageAPI.setShowTutorial = function (value) {
        shouldShowTutorial = value;
    };

    storageAPI.initialize();

    var $loadDialogScope;
}());;(function (angular) {
  'use strict';

  var CardDetailsCtrl = function ($scope, $window) {
    $window.cardDetailScope = $scope;
    if ($scope.id && $scope.level) {
      $scope.unit = $window.makeUnitInfo($scope.id, $scope.level),
        $scope.card = $window.getCardInfo($scope.unit);
    }

    $scope.setUnit = function (unit) {
      $scope.id = unit.id;
      $scope.level = unit.level;
      $scope.unit = $window.makeUnitInfo($scope.id, $scope.level),
        $scope.card = $window.getCardInfo($scope.unit);
      $scope.releaseDate = (function () {
        var hiddenUntil = $scope.card.hidden_until;
        if (hiddenUntil) {
          hiddenUntil = new Date(Number(hiddenUntil));
          hiddenUntil = (hiddenUntil.getMonth() + 1) + "/" + hiddenUntil.getDate() + "/" + hiddenUntil.getFullYear();
        } else {
          hiddenUntil = "";
        }
        return hiddenUntil;
      }());
      return this;
    };

    $scope.getCardImage = function () {
      var image = new Image();
      image.src = "res/cardImagesLarge/" + loadCard($scope.card.id).picture + ".jpg";

      image.onerror = function () {
        if (this.naturalHeight !== 330) {
          this.src = th.replace('ImagesLarge', 'Images');
          this.onload = null;
        }
        $modal.find('img').attr('src', this.src);
      };

      return "res/cardImagesLarge/" + loadCard($scope.card.id).picture + ".jpg";
    };

    var image;
    $scope.imageSrc = "res/cardImagesLarge/NotFound.jpg";
    $scope.$watch('card.id', function (newValue, oldValue) {
      if (newValue) {
        var extension = ".jpg";
        if (is_commander(newValue)) {
          extension = ".png";
        }
        image = new Image();
        image.onerror = function () {
          this.onerror = function () {
            this.onerror = null;
            this.src = "res/cardImagesLarge/NotFound.jpg";
          };
          this.src = this.src.replace('ImagesLarge', 'Images');
        };
        image.onload = function () {
          this.onerror = null;
          this.onload = null;
          $scope.imageSrc = image.src;
          $scope.$apply();
        };
        image.src = "res/cardImagesLarge/" + loadCard(newValue).picture + extension;
      }
      else {
        $scope.imageSrc = "res/cardImagesLarge/NotFound.jpg";
      }
    });

    $scope.isCommander = function () {
      return $window.is_commander($scope.id);
    };

    $scope.commanderClass = function () {
      if ($scope.isCommander()) {
        return "commander " + $scope.getFaction($scope.card.type).toLowerCase();
      } else {
        return '';
      }
    };

    $scope.getRarityString = function () {
      return $window.rarityStrings[$scope.card.rarity];
    };

    $scope.fontSize = function () {
      var rarityString = $("#rarity-string").text();
      var numChars = rarityString.length;
      var fontSize = Math.ceil(71000 / (numChars * numChars));
      return {
        "font-size": fontSize + "px"
      };
    };

    $scope.showRarity = function () {
      var card = $scope.card;
      if (card.rarity > 0) {
        return true;
      } else if (card.maxLevel > 1) {
        return true;
      } else {
        return false;
      }
    };
    $scope.getRarityIcon = function () {
      var card = $scope.card;
      if (card.rarity > 0) {
        var rarityType = card.rarity + ((card.maxLevel > Number(card.rarity) + 2) ? '_' + card.maxLevel : '');
        return "res/cardAssets/Level_" + rarityType + "_" + card.level + ".png";
      } else if (card.maxLevel > 1) {
        return "res/cardAssets/" + card.maxLevel + "_" + card.level + ".png";
      }
    };

    var previousFusion = $scope.previousFusion = function () {
      var fusions = $window.FUSIONS;
      for (var key in fusions) {
        if (fusions[key] === $scope.id) {
          return key;
        }
      }
      return false;
    };

    var nextFusion = $scope.nextFusion = function () {
      return $window.FUSIONS[$scope.id];
    };

    $scope.previousLevel = function () {
      return ($scope.card.level > 1);
    };

    $scope.nextLevel = function () {
      return ($scope.card.level < $scope.card.maxLevel);
    };

    var getFusion = $scope.getFusion = function () {
      var id = Number($scope.id);
      return (Math.floor(id / 10000) + 1);
    };

    $scope.fusionText = function () {
      var fusion = getFusion();
      return {
        1: 'Single',
        2: 'Dual',
        3: 'Quad'
      }[fusion];
    };

    $scope.keyPress = function (event) {
      var fn;
      switch (event.which) {
        case 37:
          fn = 'decrementLevel';
          break;
        case 38:
          fn = 'incrementFusion';
          break;
        case 39:
          fn = 'incrementLevel';
          break;
        case 40:
          fn = 'decrementFusion';
          break;
      }
      if (fn) {
        $scope[fn]();
        event.preventDefault();
        event.stopPropagation();
      }
    };

    $scope.isFused = function () {
      return (getFusion() > 1);
    };

    $scope.getFusionIcon = function () {
      var fusion = (getFusion() === 2 ? "Dualfuse" : "Quadfuse");
      return ("res/cardAssets/" + fusion + ".png");
    };

    $scope.getSkillIcon = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return "res/skills/" + (skillData ? skillData.icon : skillID) + ".png";
    };

    $scope.getSkillDescription = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return (skillData ? skillData.desc || skillData.name : skillID);
    };

    var setNames = {
      1000: "Basic",
      7000: "Basic",
      2000: "Reward",
      3000: "Premium",
      4000: "BoxOnly",
      9999: "StoryElements"
    };
    $scope.getSetIcon = function () {
      var setName = setNames[$scope.card.set];
      if (!setName) setName = setNames[9999];
      return ('res/cardAssets/' + setName + '_64x64.png');
    };

    $scope.getFaction = function (factionID) {
      var faction = $window.factions.names[factionID];
      if (faction === "Tower") {
        faction = "";
      }
      return faction;
    };

    $scope.decrementFusion = function () {
      var fused = previousFusion(Number($scope.id));
      if (fused) {
        $scope.id = fused;
        $scope.unit.id = $scope.id;
        $scope.card = $window.getCardInfo($scope.unit);
        if ($scope.level > $scope.card.maxLevel) {
          $scope.level = $scope.card.maxLevel;
          $scope.unit.level = $scope.level;
          $scope.card = $window.getCardInfo($scope.unit);
        }
      }
    };

    $scope.incrementFusion = function () {
      var fused = nextFusion(Number($scope.id));
      if (fused) {
        var max = ($scope.level == $scope.card.maxLevel);
        $scope.id = fused;
        $scope.unit.id = $scope.id;
        $scope.card = $window.getCardInfo($scope.unit);
        if (max && $scope.level < $scope.card.maxLevel) {
          $scope.level = $scope.card.maxLevel;
          $scope.unit.level = $scope.level;
          $scope.card = $window.getCardInfo($scope.unit);
        }
      }
    };

    $scope.decrementLevel = function () {
      $scope.level = Number($scope.level);
      if ($scope.level > 1) {
        $scope.level--;
      }
      $scope.unit.level = $scope.level;
      $scope.card = $window.getCardInfo($scope.unit);
    };

    $scope.incrementLevel = function () {
      $scope.level = Number($scope.level);
      if ($scope.level < $scope.card.maxLevel) {
        $scope.level++;
      }
      $scope.unit.level = $scope.level;
      $scope.card = $window.getCardInfo($scope.unit);
    };
  };

  var DeckBuilderCtrl = function ($scope, $window) {
    $scope.getSkillIcon = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return "res/skills/" + (skillData ? skillData.icon : skillID) + ".png";
    };

    $scope.supportedSkills = [
      'absorb',
      'armored',
      'backlash',
      'barrage',
      'berserk',
      'burn',
      //'burn2',
      'cleanse',
      'confuse',
      'corrosive',
      'counter',
      'counterburn',
      'counterpoison',
      'daze',
      'enfeeble',
      'enhance',
      //'enlarge',
      'enrage',
      'evade',
      'evadebarrier',
      'fervor',
      'flurry',
      'frost',
      'fury',
      'heal',
      'heartseeker',
      'ignite',
      'imbue',
      //'intensify',
      'invigorate',
      'jam',
      'leech',
      'legion',
      //'mark',
      'magicfield',
      'nullify',
      'pierce',
      'poison',
      'poisonstrike',
      'protect',
      //'protect_ice',
      //'protect_seafolk',
      'radiance',
      'rally',
      //'reanimate',
      //'resurrect',
      'regenerate',
      'scorchbreath',
      'silence',
      //'slow',
      'stasis',
      'strike',
      'taunt',
      'valor',
      //'venom',
      'weaken',
      'weakenself'
    ].sort(function (idA, idB) {
      return SKILL_DATA[idA].name.localeCompare(SKILL_DATA[idB].name);
    });

    $scope.getSkillName = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return (skillData ? skillData.name : skillID);
    };

    $scope.showAdvancedFilters = $window.showAdvancedFilters;

    $scope.filterSkill = function (event, skillID) {
      $window.filterSkill(event.target, skillID, event.altKey);
    };
  };

  angular.module('simulatorApp')
    .controller('CardDetailsCtrl', ['$scope', '$window', CardDetailsCtrl])
    .directive('ngRightClick', ['$parse', function ($parse) {
      return {
        link: function (scope, element, attrs) {
          var fn = $parse(attrs.ngRightClick);
          element.contextmenu(function (event) {
            scope.$apply(function () {
              event.preventDefault();
              fn(scope, { $event: event });
            });
          });
        }
      };
    }])
    .directive('cardDetails', function () {
      return {
        restrict: 'A',
        replace: true,
        templateUrl: 'templates/card-template.html',
        controller: 'CardDetailsCtrl'
      };
    })
    .directive('sssAutofocus', function () {
      return {
        link: function (scope, elem, attr) {
          elem.focus();
        }
      };
    })
    .filter('capitalize', function () {
      return function (input) {
        if (input) {
          var parts = input.split(' ');
          for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            parts[i] = part.charAt(0).toUpperCase() + part.substr(1);
          }
          return parts.join(" ");
        }
        else {
          return '';
        }
      };
    })
    .filter('convertName', function () {
      return window.convertName;
    })
    .controller('DeckBuilderCtrl', ['$scope', '$window', DeckBuilderCtrl]);

}(angular));
;function getTutorialScript() {
    var tutorialParts = [
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Deck Builder.",
       },
       {
           ui: "#deckContainer",
           msg: 'The "Deck" section contains your current deck.',
           actions: [clearHash, showDeck, clearFilters, hideFilters, hideCollection]
       },
       {
           ui: "#hash-container",
           msg: 'If you have a deck hash, you can paste it here to set the current deck.',
           actions: [clearHash]
       },
       {
           ui: "#deckContainer",
           msg: 'Manually modifying the deck hash will automatically update the deck.',
           actions: [setHash]
       },
       {
           ui: "#deckContainer",
           msg: 'Left-click on a card to remove it from your deck.',
           actions: [removeCard]
       },
       {
           ui: "#deckContainer",
           msg: 'Left-click on the commander will remove it and replace it with "Elaria Captain".',
           actions: [removeCommander]
       },
       {
           ui: "#deckContainer",
           msg: 'Pressing Ctrl-Z will undo the last change made to your deck.  (Ctrl-Y can be used to "redo" a change as well).',
           actions: [removeCard]
       },
       {
           ui: "#deckContainer",
           msg: 'Holding Ctrl and left-clicking on a card will add a copy of it to your deck.',
           actions: [setHash]
       },
       {
           ui: "#deckContainer",
           msg: 'You can drag-and-drop units in your deck to rearrange them (currently PC-only).',
           actions: [closeEditUnit, moveCard]
       },
       {
           ui: "#unitOptions",
           dialog: true,
           msg: 'Right-click on a card to bring up an edit dialog.',
           actions: [moveCard, editCard]
       },
       {
           ui: "#unitOptions",
           dialog: true,
           msg: 'Here, you can edit its level, fusion, and runes.',
           actions: [makeCardEdits]
       },
       {
           ui: "#deck .card:eq(1)",
           msg: 'Changes will made will be shown on the card, but will not be saved until you hit "OK".',
           actions: [editCard, makeCardEdits]
       },
       {
           ui: "#deckContainer",
           msg: 'Clicking "Cancel" will revert the unit back to its original stats.',
           actions: [closeEditUnit, moveCard]
       },
       {
           ui: "#link",
           msg: 'This link will load the DeckBuilder with your current deck to allow for easy sharing of decks.  It is automatically updated whenever you update the deck.'
       },
       {
           ui: "#resetDeck",
           msg: 'This will remove all cards from your deck and set the commander back to "Elaria Captain".',
           actions: [clearHash]
       },
       {
           ui: "#sortDeck",
           msg: 'This will sort all cards in your deck based on faction, rarity, and ID (the same way they are sorted in the game).'
       },
       {
           ui: "#saveDeck",
           msg: 'This will allow you to save a deck locally so that you can easily load it later.'
       },
       {
           ui: "#loadDeck",
           msg: 'If you have any saved decks, you can use this button to quickly load one of them into the DeckBuilder.',
           actions: [hideCollection, showDeck]
       },
       {
           ui: "#collection-container",
           msg: 'The "Cards" section contains all of the cards in the game.',
           actions: [hideDeck, showCollection]
       },
       {
           ui: "#collection-container",
           msg: 'Left-clicking on a card will add it to your deck.',
           actions: [closeDetails]
       },
       {
           ui: "#detailedView",
           dialog: true,
           msg: 'Right-clicking on a card will display a detailed view of the card.',
           actions: [showDetails, hideFilters]
       },
       /*
       {
           actions: [hideDeck, showDetails, hideFilters],
           msg: "Placeholder"
       },
       */
       {
           ui: "#filter-container",
           msg: 'The "Filters" section allows you to filter the cards in the collection.',
           actions: [closeDetails, showFilters]
       },
       {
           ui: "#filter-container",
           msg: 'Click on a filter to only show cards that match that filter.',
           actions: [clearFilters]
       },
       {
           ui: "[name=skill][data-filter=fervor]",
           msg: 'For instance, clicking the "Fervor" filter will only show units that have the skill "Fervor".',
           actions: [filter]
       },
       {
           ui: "#collection-container",
           msg: 'Now only units with "Fervor" are visible.',
           actions: [closeAdvancedFilters]
       },
       {
           ui: "#advancedFilters",
           dialog: true,
           msg: 'Right-clicking on a Skill filter will allow you to perform more advanced filtering.',
           actions: [advancedFilter]
       },
       {
           ui: "#advancedFilters",
           dialog: true,
           msg: 'Here you can specify specific Skill values to filter by.  Different skills have different advanced filters available.',
           actions: [filter, advancedFilter, setAdvancedFilter]
       },
       {
           ui: "[name=skill][data-filter=fervor]",
           dialog: true,
           msg: 'Clicking "OK" will apply the advanced filtering.',
           actions: [saveAdvancedFilters]
       },
       {
           ui: "#collection-container",
           msg: 'Now only units with at least "Fervor 4" are visible.'
       },
       {
           ui: "#filter-container",
           msg: 'Holding the "Alt" key while clicking on a filter while hide cards that match that filter (not supported by all filters).',
           actions: [removeExclusiveFilter]
       },
       {
           ui: "[name=skill][data-filter=enfeeble]",
           msg: 'For instance, holding "Alt" and clicking the "Hex" filter will hide all units that have the skill "Hex".',
           actions: [filterExclusive]
       },
       {
           ui: "#collection-container",
           msg: 'Now only units with no "Hex" and at least "Fervor 4" are visible.'
       },
       {
           ui: "#name-container",
           msg: 'You can also simply search for a unit by its name.',
           actions: [clearNameFilter]
       },
       {
           ui: "#name-container",
           msg: 'For instance, typing "hide" will filter down to just "Spikehide Dragon" and "Spearhide Dragon".',
           actions: [setNameFilter]
       },
       {
           ui: "#name-container",
           msg: 'Tip: If the collection is filtered down to a single card, pressing "Enter" while in the Name Filter will add that card to your deck.',
           actions: [setNameFilter, saveAdvancedFilters, filterExclusive]
       },
       {
           ui: "#clear-filters",
           msg: 'You can click the "Clear All" button to reset all filters.',
           actions: [clearFilters]
       },
       {
           msg: 'To view this tutorial again at any time, you can click the "Help" button.  (Note: this will reset the DeckBuilder.)'
       }
    ];

    var currentPage = getCurrentPage();
    for (var i = 0; i < tutorialParts.length; i++) {
        var part = tutorialParts[i];
        if (part.showFor && part.showFor !== currentPage) {
            tutorialParts.splice(i--, 1);
        }
    }

    function showDeck() {
        $("#deck-container").accordion('option', 'active', 0);
    }

    function hideDeck() {
        $("#deck-container").accordion('option', 'active', null);
    }

    function showFilters() {
        $("#filter-container").accordion('option', 'active', 0);
    }

    function hideFilters() {
        $("#filter-container").accordion('option', 'active', null);
    }

    function showCollection() {
        $("#collection-container").accordion('option', 'active', 0);
    }

    function hideCollection() {
        $("#collection-container").accordion('option', 'active', null);
    }

    function showDetails() {
        $("#collection-container").find(".card").first().contextmenu();
    }

    function closeDetails() {
        detailsDialog.dialog('close');
    }

    function filter() {
        var fervor = $("[name=skill][data-filter=fervor]");
        while (!fervor.hasClass("selected")) {
            fervor.click();
        }
    }

    function filterExclusive() {
        var vengeance = $("[name=skill][data-filter=enfeeble]");
        var e = jQuery.Event("click");
        e.altKey = true;
        while (!vengeance.hasClass("excluded")) {
            vengeance.trigger(e);
        }
    }

    function removeExclusiveFilter() {
        var fervor = $("[name=skill][data-filter=enfeeble]");
        while (fervor.hasClass("excluded") || fervor.hasClass("selected")) {
            fervor.click();
        }
    }

    function advancedFilter() {
        $("[name=skill][data-filter=fervor]").contextmenu();
        resetFocus();
    }

    function setAdvancedFilter() {
        $("#amount-min").val(4);
        resetFocus();
    }

    function saveAdvancedFilters() {
        advancedFilters.dialog('option', 'buttons')["OK"].apply(advancedFilters);
        resetFocus();
    }

    function closeAdvancedFilters() {
        advancedFilters.dialog("close");
    }

    function setNameFilter() {
        $("#nameFilter").val("hide").trigger(jQuery.Event("keyup"));
    }

    function clearNameFilter() {
        $("#nameFilter").val("").trigger(jQuery.Event("keyup"));
    }

    function clearFilters() {
        $("#clear-filters").click();
    }

    function setHash() {
        updateHash("g~pAAQwrxIQWkpBglFpBglFpB4jrBC4jrBC4jrBC");
    }

    function removeCard() {
        updateHash("g~pAAQwrxIQWkpBglFpB4jrBC4jrBC4jrBC");
    }

    function removeCommander() {
        updateHash("QpLQAQwrxIQWkpBglFpB4jrBC4jrBC4jrBC");
    }

    function moveCard() {
        updateHash("g~pAAQwrxIglFpBQWkpBglFpB4jrBC4jrBC4jrBC");
    }

    function editCard() {
        $("#deck .card").eq(1).contextmenu();
        resetFocus();
    }

    function makeCardEdits() {
        $("#fusion").val(3);
        $("#runeChoices").val("5102").change();
        resetFocus();
    }

    function closeEditUnit() {
        //updateHash("g~pAAQwrxIglFpBQWkpBglFpB4jrBC4jrBC4jrBC");
        optionsDialog.dialog("close");
    }

    function clearHash() {
        updateHash("QpLQA");
    }

    function resetFocus() {
        $(".ui-dialog-buttonset .ui-button:visible").first().focus();
    }

    function updateHash(hash) {
        $("#hash").val(hash).change();
    }

    return tutorialParts;
};$(document).ready(function () {

    var tutorialParts = getTutorialScript();

    var overlayHtml = $("<div></div>");
    $(document.body).append(overlayHtml);
    overlayHtml.load("templates/tutorial-overlay.html", null, function () {
        overlayHtml.replaceWith(function () {
            return $(this).contents();
        });
        $("#tutorial-show").prop("checked", storageAPI.shouldShowTutorial).change(function (event) {
            storageAPI.setShowTutorial(this.checked);
        });
        $("#help").click(showTutorial);
        $("#tutorial-close, #tutorial-skip").click(closeTutorial);
        $("#tutorial-next").click(nextTutorial);
        $("#tutorial-prev").click(previousTutorial);
        if (typeof delayTutorial === "undefined") {
            checkTutorial();
        }
    });

    function checkTutorial() {
        if (storageAPI.shouldShowTutorial) {
            showTutorial();
        } else {
            closeTutorial();
        }
    }

    function showTutorial() {
        tutorialIndex = 0;
        setTutorial();
        var tutorial = $("#tutorial").show();
    }


    var tutorialIndex = 0;
    function nextTutorial() {
        tutorialIndex++;
        setTutorial();
    }

    function previousTutorial() {
        tutorialIndex--;
        setTutorial();
    }

    function closeTutorial() {
        $("#tutorial").hide();
        if ($("#tutorial-permahide").is(":checked")) {
            storageAPI.hideTutorial();
        }
    }

    var uiTimer;
    function setTutorial() {
        clearTimeout(uiTimer);
        var tutorialPart = tutorialParts[tutorialIndex];

        var actions = tutorialPart.actions;
        if (actions) {
            for (var i = 0; i < actions.length; i++) {
                actions[i]();
            }
        }

        var msg = tutorialPart.msg;

        var uiFocus = tutorialPart.ui;
        if (uiFocus) {
            var target = $(uiFocus);
            if (tutorialPart.dialog) {
                target = target.parent();
            }
            showUI(target);
            if (actions) {
                uiTimer = setTimeout(showUI, 500, target);
            }
            if (msg.indexOf("{0}" >= 0)) {
                msg = msg.replace(/\{0\}/g, target.text());
            }
        } else {
            $(".overlay-fog").width(0).height(0);
        }

        $("#tutorialMessage").text(msg);

        if (tutorialIndex < tutorialParts.length - 1) {
            $("#tutorial-next").show();
            $("#tutorial-close").hide();
        } else {
            $("#tutorial-next").hide();
            $("#tutorial-close").show();
        }

        if (tutorialIndex > 0) {
            $("#tutorial-prev").removeClass("disabled");
        } else {
            $("#tutorial-prev").addClass("disabled");
        }
    }

    function showUI(target) {
        var position = target.offset();
        $(".overlay-fog").css({ top: (position.top - 2) + 'px', left: (position.left - 2) + 'px' }).width((target.outerWidth() + 4) + 'px').height((target.outerHeight() + 4) + 'px');
    }

    window.showTutorial = showTutorial;
    window.checkTutorial = checkTutorial;
});