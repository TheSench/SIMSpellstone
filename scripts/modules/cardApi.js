define('cardApi', function () {
    var api = {
        byId: getCardByID,
        byIdSlim: getSlimCardByID,
        byIdWithBgeApplied: getCardWithBgeEffects,
        makeBattleground: makeBattleground,
        applyDefaultStatuses: applyDefaultStatuses
    };

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
        barrier_ice: 0,
        corroded: 0,
        enfeebled: 0,
        enraged: 0,
        envenomed: 0,
        heartseeker: 0,
        imbued: 0,
        invisible: 0,
        nullified: 0,
        poisoned: 0,
        protected: 0,
        scorched: 0,
        warded: 0,
        // Boolean-Status
        jammed: false,
        jammedSelf: false,
        silenced: false,
        valor_triggered: false,
        dualstrike_triggered: false,
        ondeath_triggered: false,
        reanimated: false
    };

    function applyDefaultStatuses(card) {
        card.removeImbue();
        card.enhanced = {};
        for (var status in defaultStatusValues) {
            card[status] = defaultStatusValues[status];
        }
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

    function getSlimCardByID(unit, getDetails) {

        var current_card = loadCard(unit.id);
        var new_card = {};
        if (current_card.card_type == "1") {
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

    function getCardWithBgeEffects(id, battlegrounds, isToken) {
        battlegrounds = battlegrounds || SIMULATOR.battlegrounds.onCreate;
        return getCardByID(id, battlegrounds, null, isToken);
    }

    function addRunesToSkills(skills, runes, runeMult) {
        if (!runes) return;
        for (var i = 0, len = runes.length; i < len; i++) {
            var runeID = runes[i].id;
            var statBoost = RUNES[runeID].stat_boost;
            for (var key in statBoost) {
                var boost = statBoost[key];
                if (key === "skill") {
                    var skillID = boost.id;
                    var amount = boost.x;
                    var mult = boost.mult;
                    for (var s = 0; s < skills.length; s++) {
                        var skill = skills[s];
                        if (skill.id === skillID && (skill.all || 0) == (boost.all || 0)) {
                            skill = copySkill(skill);
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

    function copySkill(original_skill) {
        var new_skill = {};
        new_skill.id = original_skill.id;
        new_skill.x = original_skill.x;
        new_skill.mult = original_skill.mult;
        new_skill.on_delay_mult = original_skill.on_delay_mult;
        new_skill.all = original_skill.all;
        new_skill.y = original_skill.y;
        new_skill.z = original_skill.z;
        new_skill.c = original_skill.c;
        new_skill.s = original_skill.s;
        return new_skill;
    }

    function copySkills(new_card, original_skills, mult) {
        new_card.skill = [];
        new_card.earlyActivationSkills = [];
        new_card.onDeathSkills = [];
        var skillTimers = [];
        var reusable = true;
        for (var key in original_skills) {
            var newSkill = original_skills[key];
            if (newSkill.c) {   // If skill has a timer, we need to clone it
                var copiedSkill = copySkill(newSkill);
                setSkill(new_card, copiedSkill);
                skillTimers.push(copiedSkill);
                reusable = false;
            } else if (mult) {
                var copiedSkill = copySkill(newSkill);
                //copySkill.x = ~~(copySkill.x * mult);   // Floor the results
                copiedSkill.x = Math.ceil(copiedSkill.x * mult);
                setSkill(new_card, copiedSkill);
            } else {            // If skill has no timer, we can use the same instance
                setSkill(new_card, newSkill);
            }
        }
        new_card.reusableSkills = reusable;
        new_card.skillTimers = skillTimers;
    }

    var makeUnit = (function () {
        var CardPrototype;

        function modifySkillsPreRune(new_card, original_skills, skillModifiers, isToken) {
            new_card.highlighted = [];
            for (var i = 0; i < skillModifiers.length; i++) {
                var skillModifier = skillModifiers[i];
                if (skillModifier.modifierType == "statChange" && !isToken) {
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
                            if (skill.id == evolution.id && skill.all == evolution.all) {
                                skill = copySkill(skill);
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
                            if (addedSkill.rarity && new_card.rarity != addedSkill.rarity) continue;

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
                            if (addedSkill.mult && addedSkill.base && new_skill.x == 0) continue;
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
                    skill = copySkill(skill);
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
                return (this.card_type == "1");
            },

            isAssault: function () {
                return (this.card_type == "2");
            },

            isTrap: function () {
                return (this.card_type == "3");
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
                return (this.timer == 0);
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
                    if (typeof all !== "undefined" && (skill.all || 0) != all) continue;
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
            card.level = ((unit_level > card.maxLevel) ? card.maxLevel : unit_level);
            card.cost = original_card.cost;
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

            original_skills = original_skills.slice();

            if (skillModifiers && skillModifiers.length) {
                modifySkillsPreRune(card, original_skills, skillModifiers, isToken);
            }

            if (runes) {
                card.addRunes(runes);
                var runeMult = 1;
                if (skillModifiers) {
                    skillModifiers.forEach(function (skillModifier) {
                        if (skillModifier.modifierType == "runeMultiplier") {
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

            copySkills(card, original_skills);

            return card;
        });
    }());

    var makeBattleground = (function () {
        var Battleground = function (name, original_skills, mult) {
            this.name = name;
            copySkills(this, [original_skills], mult);
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