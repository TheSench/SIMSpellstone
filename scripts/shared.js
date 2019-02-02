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
    cardApi.applyDefaultStatuses(card);
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
    new_deck.commander = cardApi.byId(original_deck.commander);
    new_deck.deck = [];
    var list = original_deck.deck;
    var battlegrounds = SIMULATOR.battlegrounds.onCreate.filter(function (bge) {
        return !((owner === 'player' && bge.enemy_only) || (owner === 'cpu' && bge.ally_only));
    });
    for (var i = 0, len = list.length; i < len; i++) {
        new_deck.deck.push(cardApi.byIdWithBgeApplied(list[i], battlegrounds));
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
                    var trap = cardApi.byId(trapInfo);

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
                    var bge = cardApi.makeBattleground(battleground.name, effect, mult);
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
            var bge = cardApi.makeBattleground(battleground.name, effect);
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