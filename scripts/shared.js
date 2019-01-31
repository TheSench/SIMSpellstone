"use strict";

window.loadCardCache = function loadCardCache() {
    var cardData = storageAPI.getField("GameData", "CardCache");
    if (cardData && cardData.lastUpdated > DataUpdated) {
        if (cardData.newCards) {
            $.extend(CARDS, cardData.newCards);
            $.extend(FUSIONS, cardData.newFusions);
        }
        DataUpdated = cardData.lastUpdated;
    } else {
        // Clear cached info to reduce storage used
        var CARDS_cache = {
            newCards: {},
            newFusions: {},
            lastUpdated: Date.now()
        };
        storageAPI.setField("GameData", "CardCache", CARDS_cache);
    }
};

if (typeof String.prototype.format !== 'function') {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
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
Function.prototype.debounce = function debounce(wait) {
    var func = this;
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

Function.prototype.throttle = function throttle(wait) {
    var func = this;
    var timeout;
    
    return function () {
        var context = this, args = arguments;
        if (!timeout) {
            func.apply(context, args);
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            timeout = setTimeout(later, wait);
        }
    };
};

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
    var i = list.length, j, tempi, tempj;
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
    card.health_left = card.health;
    // Setup status effects
    applyDefaultStatuses(card);
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
    var battlegrounds = SIMULATOR.battlegrounds.onCreate.filter(function (bge) {
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

var CardPrototype;
var makeUnit = (function () {
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

        copy_skills_2(card, original_skills);

        return card;
    });
}());


var getEnhancement = function (card, s, base) {
    var enhancements = card.enhanced;
    var enhanced = (enhancements ? (enhancements[s] || 0) : 0);
    if (enhanced < 0) {
        enhanced = Math.ceil(base * -enhanced);
    }
    return enhanced;
};

var isImbued = function (card, skillID, i) {
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

var addRunes = function (card, runes) {
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
            if (key === "skill") {
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

var getRune = function (rune_id) {
    return RUNES[rune_id];
};

var canUseRune = function (card, runeID) {
    var rune = getRune(runeID);

    var statBoost = rune.stat_boost;
    if (rune.faction_req) {
        if (!card.isInFaction(rune.faction_req)) {
            return false;
        }
    }
    for (var key in statBoost) {
        if (key === "skill") {
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

var MakeOnPlayBGE = (function () {
    var OnPlayBGE = function (name, effect) {
        this.p = null;
        this.name = name;
        this.effect = effect;
        this.runes = [];
    };

    OnPlayBGE.prototype = {
        onCardPlayed: function (card) {
            SIMULATOR.onPlaySkills[this.effect.id](this, card, this.effect);
        },

        //Card ID is ...
        isCommander: function () {
            return false;
        },

        isAssault: function () {
            return false;
        }

    };

    return (function (name, effects) {
        return new OnPlayBGE(name, effects);
    });
}());

var MakeTrap = (function () {
    var Trap = function (name, trap_card) {
        this.name = name;
        this.id = trap_card.id;
        this.base = trap_card.base;
        this.mult = trap_card.mult;
        this.target_deck = trap_card.target_deck;
        this.y = trap_card.y;
    };

    Trap.prototype = {
        onCardPlayed: function (card, p_deck, o_deck) {
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

                    if (debug) {
                        echo += this.name + ' inserts ' + log.name(trap) + ' into the opposing deck.<br/>';
                    }
                }
            }
        }
    };

    return (function (name, effects) {
        return new Trap(name, effects);
    });
}());

var getBattlegrounds = function (getbattleground, selfbges, enemybges, mapbges, campaignID, missionlevel, raidID, raidlevel) {

    // Set up battleground effects, if any
    var battlegrounds = {
        onCreate: [],
        onTurn: [],
        onCardPlayed: []
    };

    addBgesFromList(battlegrounds, getbattleground);
    addBgesFromList(battlegrounds, selfbges, 'player');
    addBgesFromList(battlegrounds, enemybges, 'cpu');
    addMapBGEs(battlegrounds, mapbges, 'player');

    if (campaignID) {
        addMissionBGE(battlegrounds, campaignID, missionlevel);
    } else if (raidID) {
        addRaidBGE(battlegrounds, raidID, raidlevel);
    }
    return battlegrounds;
};

function addBgesFromList(battlegrounds, getbattleground, player) {
    if (!getbattleground) return null;
    var selected = getbattleground.split(",");
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
            missionLevel = Number(missionLevel) - 1; // Convert to 0-based
            if (!battleground.starting_level || Number(battleground.starting_level) <= missionLevel) {
                if (battleground.scale_with_level) {
                    battleground = JSON.parse(JSON.stringify(battleground));
                    var levelsToScale = missionLevel - Number(battleground.starting_level);
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
                } else if (["evolve_skill", "add_skill", "scale_attributes", "statChange", "runeMultiplier"].indexOf(effect_type) >= 0) {
                    var bge = MakeSkillModifier(battleground.name, effect);
                    bge.enemy_only = enemy_only;
                    battlegrounds.onCreate.push(bge);
                } else if (["scale_attack", "scale_health"].indexOf(effect_type) >= 0) {
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
        var mapBGE = Object.keys(MAP_BATTLEGROUNDS).filter(function (id) {
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

var MakeBattleground = (function () {
    var Battleground = function (name, original_skills, mult) {
        this.name = name;
        copy_skills_2(this, [original_skills], mult);
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

function copy_skills_2(new_card, original_skills, mult) {
    new_card.skill = [];
    new_card.earlyActivationSkills = [];
    new_card.onDeathSkills = [];
    var skillTimers = [];
    var reusable = true;
    for (var key in original_skills) {
        var newSkill = original_skills[key];
        if (newSkill.c) {   // If skill has a timer, we need to clone it
            var copySkill = copy_skill(newSkill);
            setSkill_2(new_card, copySkill);
            skillTimers.push(copySkill);
            reusable = false;
        } else if (mult) {
            var copySkill = copy_skill(newSkill);
            //copySkill.x = ~~(copySkill.x * mult);   // Floor the results
            copySkill.x = Math.ceil(copySkill.x * mult);
            setSkill_2(new_card, copySkill);
        } else {            // If skill has no timer, we can use the same instance
            setSkill_2(new_card, newSkill);
        }
    }
    new_card.reusableSkills = reusable;
    new_card.skillTimers = skillTimers;
}

function setSkill_2(new_card, skill) {
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

function copy_skills(new_card, original_skills, original_earlyActivation_Skills, original_onDeathSkills) {
    new_card.skill = [];
    new_card.earlyActivationSkills = [];
    new_card.onDeathSkills = [];
    if (!new_card.skillTimers) new_card.skillTimers = [];

    copy_Skill_lists(new_card, new_card.skill, original_skills);
    copy_Skill_lists(new_card, new_card.earlyActivationSkills, original_earlyActivation_Skills);
    copy_Skill_lists(new_card, new_card.onDeathSkills, original_onDeathSkills);
}

function copy_Skill_lists(new_card, new_skills, original_skills) {
    for (var i = 0; i < original_skills.length; i++) {
        var originalSkill = original_skills[i];
        if (originalSkill.c) {   // If skill has a timer, we need to clone it
            var newSkill = copy_skill(originalSkill);
            new_skills.push(newSkill);
            new_card.skillTimers.push(newSkill);
        } else {            // If skill has no timer, we can use the same instance
            new_skills.push(originalSkill);
        }
    }
}

function copy_skill(original_skill) {
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

function skillNameFromID(skillID) {
    var skillData = SKILL_DATA[skillID];
    return (skillData ? skillData.name : skillID);
}

function areEqual(unitInfo1, unitInfo2) {
    if ((!unitInfo1) !== (!unitInfo2)) return false; // Silly null-check
    var hash1 = base64.fromUnitInfo(unitInfo1);
    var hash2 = base64.fromUnitInfo(unitInfo2);
    return (hash1 === hash2);
}

// Convert card list into an actual deck
// - assume that first card is always commander
// - possible delimiters include ; , :
// - sometimes name is not compvare
// - include common abbreviations, such as EMP, BoD, EQG, etc.
// - case-insensitive
// - recognize multiple copies of cards
// - if can't figure out what card it is, ignore it and move on
// - support raid-only and mission-only cards by using Dracorex[1042] notation
function getDefaultDeck() {
    return {
        commander: elariaCaptain,
        deck: []
    };
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
var get_card_apply_battlegrounds = function (id, battlegrounds, isToken) {
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

var makeUnitKey = function (unit) {
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