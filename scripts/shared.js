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


// Convert card list into an actual deck
// - assume that first card is always commander
// - possible delimiters include ; , :
// - sometimes name is not compvare
// - include common abbreviations, such as EMP, BoD, EQG, etc.
// - case-insensitive
// - recognize multiple copies of cards
// - if can't figure out what card it is, ignore it and move on
// - support raid-only and mission-only cards by using Dracorex[1042] notation


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


