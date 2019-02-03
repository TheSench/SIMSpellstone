"use strict";

var cardApi = require('cardApi');

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