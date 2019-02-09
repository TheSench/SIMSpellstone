define('base64', [
    'cardInfo',
    'unitInfo'
], function (
    cardInfo,
    unitInfo
) {
    "use strict";

    var api = {
        encodeHash: encode,
        decodeHash: decode,
        fromDecimal: decimalToBase64,
        toDecimal: base64ToDecimal,
        fromUnitInfo: unitInfoToBase64
    };

    var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!~";
    
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
    function unitInfoToBase64(unit) {
    
        var baseID = parseInt(unit.id);
        var level = (parseInt(unit.level) - 1);
    
        if (noFusionInHash[baseID]) {
            var fusion = Math.floor(level / 7);
            var level = level % 7;
        } else {
            var fusion = Math.floor(baseID / 10000);
            baseID %= 10000;
        }
    
        var runeID = 0;
        if (unit.runes.length) {
            runeID = parseInt(unit.runes[0].id);
            runeID %= 5000; // Runes IDs are all in the range of 5001 - 5500
        }
    
        var dec = baseID;
        dec = dec * 3 + fusion;
        dec = dec * 7 + level;
        dec = dec * maxRuneID + runeID;
    
        return decimalToBase64(dec, 5);
    }
    
    function base64ToUnitInfo(base64) {
    
        var dec = base64ToDecimal(base64);
    
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
    
        var unit = unitInfo.create(unitID, level);
        if (runeID > 0) {
            unit.runes.push({
                id: runeID + 5000
            });
        }
    
        return unit;
    }
    
    function decimalToBase64(dec, len) {
        var base64 = '';
        for (var i = 0; i < len; i++) {
            var part = dec % 64;
            base64 += base64chars[part];
            dec = (dec - part) / 64;
        }
        return base64;
    }
    
    function base64ToDecimal(base64) {
        var dec = 0;
        for (var i = base64.length - 1; i >= 0; i--) {
            dec *= 64;
            var part = base64chars.indexOf(base64[i]);
            dec += part;
        }
        return dec;
    }

    function encode(deck) {
        var base64Units = [];

        if (deck.commander) {
            base64Units.push(deck.commander);
        }
        return base64Units.concat(deck.deck)
            .map(unitInfoToBase64)
            .join("");
    }
    
    function decode(hash) {

        var current_deck = { deck: [] };
        var unit;
        var entryLength = 5;
        
        for (var i = 0; i < hash.length; i += entryLength) {
            var unitHash = hash.substr(i, entryLength);
            unit = base64ToUnitInfo(unitHash);

            if (unit) {
                if (cardInfo.loadCard(unit.id)) {
                    // Repeat previous card multiple times
                    if (!current_deck.commander && cardInfo.isCommander(unit.id)) {
                        current_deck.commander = unit;
                        // Add to deck
                    } else {
                        current_deck.deck.push(unit);
                    }
                } else {
                    console.log("Could not decode '" + unitHash + "' (" + unit.id + ")");
                }
            }
        }

        // Default commander to Elaria Captain if none found
        if (!current_deck.commander) {
            current_deck.commander = unitInfo.defaultCommander;
        }

        return current_deck;
    }
    
    return api;
});