define('cardApi', [
    'cardInfo',
    'skillApi',
    'runeApi'
], function (
    cardInfo,
    skillApi,
    runeApi
) {
    var api = {
        byId: getCardByID,
        byIdSlim: getSlimCardByID,
        byIdWithBgeApplied: getCardWithBgeEffects,
        makeBattleground: makeBattleground,
        applyDefaultStatuses: applyDefaultStatuses
    };

    function applyDefaultStatuses(card) {
        card.removeImbue();
        card.enhanced = {};
        // Attack Modifiers
        card.attack_berserk = 0;
        card.attack_valor = 0;
        card.attack_rally = 0;
        card.attack_weaken = 0;
        card.attack_corroded = 0;
        card.corrosion_timer = 0;
        // Mark
        card.mark_target = 0;
        // Other Statuses
        // Numeric-Statuses
        card.corroded = 0;
        card.enfeebled = 0;
        card.enraged = 0;
        card.envenomed = 0;
        card.heartseeker = 0;
        card.imbued = 0;
        card.invisible = 0;
        card.nullified = 0;
        card.poisoned = 0;
        card.protected = 0;
        card.scorched = 0;
        card.warded = 0;
        // Boolean-Status
        card.jammed = false;
        card.jammedSelf = false;
        card.silenced = false;
        card.valor_triggered = false;
        card.dualstrike_triggered = false;
        card.ondeath_triggered = false;
        card.reanimated = false;
    }

    function addRunes(card, runes) {
        if (!card.runes) card.runes = [];
        for (var i = 0, len = runes.length; i < len; i++) {
            var runeID = runes[i].id;
            var statBoost = runeApi.getRune(runeID).stat_boost;
            card.runes.push({
                id: runeID,
                stat_boost: statBoost
            });
    
            for (var key in statBoost) {
                var boost = statBoost[key];
                if (key === "skill") {
                    // Handled by addRunesToSkills()
                } else {
                    if (isNaN(boost)) {
                        boost = Math.max(Math.ceil(card[key] * boost.mult), (boost.min_bonus || 1));
                    }
                    card[key] += boost;
                }
            }
        }
    }

    function getCardByID(unit, skillModifiers, skillMult, isToken) {

        var current_card = cardInfo.loadCard(unit.id);

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

    function getSlimCardByID(unit, getDetails) {

        var current_card = cardInfo.loadCard(unit.id);
        var new_card = {};
        if (current_card.card_type === "1") {
            new_card.isCommander = function () { return true; };
            new_card.isAssault = function () { return false; };
        } else {
            new_card.isCommander = function () { return false; };
            new_card.isAssault = function () { return true; };
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
            if (getDetails) new_card.skill = [];
        } else {
            new_card.id = current_card.id;
            new_card.name = current_card.name;
            new_card.rarity = current_card.rarity;
            new_card.maxLevel = current_card.maxLevel;
            new_card.level = Math.min((unit.level || 1), new_card.maxLevel);
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
                        var upgradeLevel = parseInt(key);
                        var upgrade = current_card.upgrades[key];
                        if (upgrade.cost !== undefined) new_card.cost = upgrade.cost;
                        if (upgrade.health !== undefined) new_card.health = upgrade.health;
                        if (upgrade.attack !== undefined) new_card.attack = upgrade.attack;
                        if (upgrade.desc !== undefined) new_card.desc = upgrade.desc;
                        if (upgrade.skill.length > 0) new_card.skill = upgrade.skill;
                        if (upgradeLevel === new_card.level) break;
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

    function getCardWithBgeEffects(id, battlegrounds, isToken) {
        battlegrounds = battlegrounds || SIMULATOR.battlegrounds.onCreate;
        return getCardByID(id, battlegrounds, null, isToken);
    }

    function addRunesToSkills(skills, runes, runeMult) {
        if (!runes) return;
        for (var i = 0, len = runes.length; i < len; i++) {
            var runeID = runes[i].id;
            var statBoost = runeApi.getRune(runeID).stat_boost;
            for (var key in statBoost) {
                var boost = statBoost[key];
                if (key === "skill") {
                    var skillID = boost.id;
                    var amount = boost.x;
                    var mult = boost.mult;
                    for (var s = 0; s < skills.length; s++) {
                        var skill = skills[s];
                        if (skill.id === skillID && ((skill.all || '0') === (boost.all || '0'))) {
                            skill = skillApi.copySkill(skill);
                            if (!amount && mult) amount = Math.ceil(skill.x * mult);
                            if (boost.min_bonus) amount = Math.max(amount, boost.min_bonus);
                            if (amount) skill.x += (amount * runeMult);
                            if (boost.c) skill.c -= Math.min(skill.c, (boost.c * runeMult));
                            skill.boosted = true;
                            skills[s] = skill;
                            break;
                        }
                    }
                }
            }
        }
    }

    var makeUnit = (function () {
        var CardPrototype;

        function modifySkillsPreRune(new_card, original_skills, skillModifiers, isToken) {
            new_card.highlighted = [];
            for (var i = 0; i < skillModifiers.length; i++) {
                var skillModifier = skillModifiers[i];
                if (skillModifier.modifierType === "statChange" && !isToken) {
                    for (var j = 0; j < skillModifier.effects.length; j++) {
                        var statChange = skillModifier.effects[j];
                        if (new_card.isInFaction(statChange.y)) {
                            Object.keys(statChange).forEach(function (stat) {
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
                            if (skill.id === evolution.id && skill.all === evolution.all) {
                                skill = skillApi.copySkill(skill);
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
                        if (new_card.isInFaction(addedSkill.y)) {
                            if (addedSkill.rarity && new_card.rarity !== addedSkill.rarity) continue;

                            var new_skill = {};
                            new_skill.id = addedSkill.id;
                            new_skill.x = addedSkill.x || 0;
                            if (addedSkill.mult) {
                                if (addedSkill.base) {
                                    var base = getStatBeforeRunes(new_card, addedSkill.base);
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
                            if (addedSkill.mult && addedSkill.base &&  new_skill.x === 0) continue;
                            original_skills.push(new_skill);
                            new_card.highlighted.push(new_skill.id);
                        }
                    }
                } else if (skillModifier.modifierType === "scale_attributes" && !isToken) {
                    for (var j = 0; j < skillModifier.effects.length; j++) {
                        var scaling = skillModifier.effects[j];
                        if (new_card.isInFaction(scaling.y)) {
                            var mult = scaling.mult;
                            var plusAttack = Math.ceil(new_card.attack * mult);
                            new_card.attack += plusAttack;
                            var plusHealth = Math.ceil(new_card.health * mult);
                            new_card.health += plusHealth;
                            scaleSkills(new_card, original_skills, mult);
                        }
                    }
                } else if (skillModifier.modifierType === "scale_stat" && !isToken) {
                    for (var j = 0; j < skillModifier.effects.length; j++) {
                        var scaling = skillModifier.effects[j];
                        if (new_card.isInFaction(scaling.y)) {
                            new_card[skillModifier.scaledStat] += Math.ceil(getStatBeforeRunes(new_card, scaling.base) * scaling.mult);
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
                    skill = skillApi.copySkill(skill);
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
            isCommander: function () {
                return (this.card_type === "1");
            },

            isAssault: function () {
                return (this.card_type === "2");
            },

            isTrap: function () {
                return (this.card_type === "3");
            },

            // Alive
            // -.health_left > 0
            isAlive: function () {
                return (this.health_left > 0);
            },

            // Alive
            // -.health_left > 0
            isDamaged: function () {
                return (this.health_left < this.health);
            },

            // Active
            // - timer = 0
            isActive: function () {
                return (this.timer === 0);
            },

            // Active Next Turn
            // - timer <=1
            isActiveNextTurn: function () {
                return (this.timer <= 1);
            },

            // Inactive
            // - timer >=1
            isInactive: function () {
                return this.timer >= 1;
            },

            // Unjammed
            isUnjammed: function () {
                return !(this.jammed);
            },

            // Unsilenced
            isUnsilenced: function () {
                return !(this.silenced);
            },

            imbue: function (skill) {
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

            scorch: function (amount) {
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

            removeImbue: function () {
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
            hasSkill: function (s, all) {
                var target_skills;
                var skillType = SKILL_DATA[s].type;
                switch (skillType) {
                    case 'toggle':
                    case 'passive':
                    case 'flurry':
                        return this[s];

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
                    if (typeof all !== "undefined" && skill.all !== all) continue;
                    return true;
                }
                return false;
            },

            // Has Attack power
            // - attack > 0
            hasAttack: function () {
                return (this.adjustedAttack() > 0);
            },

            attackPlusBuffs: function () {
                return (this.attack + this.attack_rally + this.attack_berserk + this.attack_valor);
            },

            adjustedAttack: function () {
                return (this.attack + this.attack_rally + this.attack_berserk + this.attack_valor - this.attack_weaken - this.attack_corroded);
            },

            permanentAttack: function () {
                return (this.attack + this.attack_berserk + this.attack_valor);
            },

            // Filters by faction
            isInFaction: function (faction) {
                if (faction === undefined) return 1;
                var factions = faction.split(',');
                if (factions.length <= 1) {
                    if (this.type === faction) return 1;
                    if (this.sub_type.indexOf(faction) >= 0) return 1;
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

            resetTimers: function () {
                for (var i = 0, len = this.skillTimers.length; i < len; i++) {
                    this.skillTimers[i].countdown = 0;
                }
            },

            addRunes: function (runes) {
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

        return (function (original_card, unit_level, runes, skillModifiers, skillMult, isToken) {
            if (!unit_level) unit_level = 1;
            var card = Object.create(CardPrototype);

            card.id = original_card.id;
            card.name = original_card.name;
            card.attack = original_card.attack;
            card.health = original_card.health;
            card.maxLevel = original_card.maxLevel;
            card.level = Math.min(unit_level, card.maxLevel);
            card.cost = original_card.cost;
            card.rarity = original_card.rarity;
            card.card_type = original_card.card_type;
            card.type = original_card.type;
            card.sub_type = original_card.sub_type || [];
            card.set = original_card.set;
            var original_skills = original_card.skill;
            if (card.level > 1) {
                for (var key in original_card.upgrades) {
                    var upgrade = original_card.upgrades[key];
                    // Upgrade levels only contain attack/health/delay if they changed at that level.
                    if (upgrade.cost !== undefined) card.cost = upgrade.cost;
                    if (upgrade.health !== undefined) card.health = upgrade.health;
                    if (upgrade.attack !== undefined) card.attack = upgrade.attack;
                    if (upgrade.desc !== undefined) card.desc = upgrade.desc;
                    if (upgrade.skill.length > 0) original_skills = upgrade.skill;
                    if (parseInt(key) === card.level) break;
                }
            }

            original_skills = original_skills.slice();

            if (skillModifiers && skillModifiers.length) {
                modifySkillsPreRune(card, original_skills, skillModifiers, isToken);
            }

            if (runes) {
                card.addRunes(runes);
                var runeMult = 1;
                if (skillModifiers) {
                    skillModifiers.forEach(function (skillModifier) {
                        if (skillModifier.modifierType === "runeMultiplier") {
                            skillModifier.effects.forEach(function (effect) {
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

            skillApi.copySkills(card, original_skills);

            return card;
        });
    }());

    var makeBattleground = (function () {
        var Battleground = function (name, original_skills, mult) {
            this.name = name;
            skillApi.copySkills(this, [original_skills], mult);
        };

        Battleground.prototype = {
            p: null,
            name: null,
            runes: [],

            //Card ID is ...
            isCommander: function () {
                return false;
            },

            isAssault: function () {
                return false;
            },

            resetTimers: function () {
                for (var i = 0, len = this.skillTimers.length; i < len; i++) {
                    this.skillTimers[i].countdown = 0;
                }
            }
        };

        return (function (name, skill, mult) {
            return new Battleground(name, skill, mult);
        });
    }());

    return api;
});