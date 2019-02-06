(function () {
    var modules = {};

    window.define = function define(name, moduleDefinition) {
        if (typeof moduleDefinition === "function") {
            modules[name] = moduleDefinition();
        } else {
            modules[name] = moduleDefinition;
        }
    };

    window.require = function require(name) {
        var module = modules[name];
        if (module) {
            return module;
        } else {
            throw "Module '" + name + "' is not defined yet.";
        }
    };
})();;if (typeof Object.assign !== 'function') {
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

/*
window.parseInt = function parseInt(value) {
    return value >> 0;
};
*/

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
};;define('factions', {
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
});;define('skillApi', function () {

    var api = {
        setSkill: setSkill,
        copySkill: copySkill,
        copySkills: copySkills,
        nameFromId: skillNameFromID
    };

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

    function skillNameFromID(skillID) {
        var skillData = SKILL_DATA[skillID];
        return (skillData ? skillData.name : skillID);
    }

    return api;
});;define('runeApi', function () {
    var api = {
        addRunes: addRunes,
        canUseRune: canUseRune,
        getRune: getRune
    };

    function getRune(rune_id) {
        return RUNES[rune_id];
    }

    function canUseRune(card, runeID) {
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
    }

    function addRunes(card, runes) {
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
    }

    return api;
});;define('cardInfo', function() {
    var api = {
        loadCard: loadCard,
        isCommander: isCommander,
        isAssault: isAssault,
        isTrap: isTrap
    };

    function loadCard(id) {
        var card = CARDS[id];
        return card;
    }

    function isCommander(id) {
        var card = loadCard(id);
        return (card && card.card_type == '1');
    }
    
    function isAssault(id) {
        var card = loadCard(id);
        return (card && card.card_type == '2');
    }
    
    function isTrap(id) {
        var card = loadCard(id);
        return (card && card.card_type == '3');
    }

    return api;
});;define('matchTimer', function() {
    var api = {
        elapsed: elapsed,
        batchElapsed: batchElapsed,
        startBatch: startBatch,
        stop: stopTimer,
        reset: resetTimer
    };

    function elapsedSeconds(start, end) {
        return ((end - start) / 1000).toFixed(3);
    }

    function timeSince(start) {
        return elapsedSeconds(start, Date.now());
    }

    function elapsed() {
        var end = (this.timeStop || Date.now());
        return elapsedSeconds(this.timeStart, end);
    }

    function batchElapsed(start) {
        return timeSince(start || this.batchStarted);
    }

    function startBatch() {
        this.batchStarted = Date.now();
    }

    function stopTimer() {
        this.timeStop = Date.now();
    }

    function resetTimer() {
        this.timeStart = Date.now();
        this.timeStop = 0;
    }

    return api;
});;define('urlHelpers', function () {
    var api = {
        paramDefined: paramDefined,
        paramValue: paramValue,
        getCurrentPage: getCurrentPage
    };

    // GET variables
    function paramValue(variable) {
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

    function paramDefined(variable) {
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

    function getCurrentPage() {
        var currentPage = window.location.href;
        var pageEnd = currentPage.indexOf(".html");
        currentPage = currentPage.substring(0, pageEnd);
        var pageStart = currentPage.lastIndexOf("/") + 1;
        currentPage = currentPage.substring(pageStart).toLowerCase();
        return currentPage;
    }

    return api;
});;define('debugLog', function() {
    var api = {
        enabled: false,
        write: write,
        writeLine: writeLine
    };

    function write(message) {
        echo += message;
    }

    function writeLine(message) {
        echo += message + '</br>';
    }

    return api;
});;define('log', function() {
    var api = {
        skill: logSkill,
        name: logCardName
    };
    
    var factions = require('factions');
    var skillApi = require('skillApi');

    function truncate(value) {
        if (value > Math.floor(value)) {
            value = value.toFixed(1);
        }
        return value;
    }

    function logSkill(skill) {
        var output = skillApi.nameFromId(skill.id);
        if (skill.all) output += ' all';
        if (skill.y) output += ' ' + factions.names[skill.y];
        if (skill.s) output += ' ' + skillApi.nameFromId(skill.s);
        if (skill.c) output += ' every ' + skill.c + ' turns';
        else if (skill.x) output += ' ' + skill.x;
        return output;
    }

    function logCardName(card, hideStats) {
        if (card.owner === 'cpu') {
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
                if (card.health_left !== undefined) output += truncate(card.health_left);
                else output += card.health;
                output += ' HP]';
            } else if (card.isAssault()) {
                output += ' [';
                var atk = card.adjustedAttack();
                if (isNaN(atk) || atk == undefined) atk = card.attack;
                output += atk;
                output += '/';
                if (card.health_left !== undefined) output += truncate(card.health_left);
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

    return api;
});;define('base64', function () {
    "use strict";
    
	var cardInfo = require('cardInfo');

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
    function unitInfoToBase64(unitInfo) {
    
        var baseID = parseInt(unitInfo.id);
        var level = (parseInt(unitInfo.level) - 1);
    
        if (noFusionInHash[baseID]) {
            var fusion = Math.floor(level / 7);
            var level = level % 7;
        } else {
            var fusion = Math.floor(baseID / 10000);
            baseID %= 10000;
        }
    
        var runeID = 0;
        if (unitInfo.runes.length) {
            runeID = parseInt(unitInfo.runes[0].id);
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
    
        var unitInfo = makeUnitInfo(unitID, level);
        if (runeID > 0) {
            unitInfo.runes.push({
                id: runeID + 5000
            });
        }
    
        return unitInfo;
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
        var unitInfo;
        var entryLength = 5;
        
        for (var i = 0; i < hash.length; i += entryLength) {
            var unitHash = hash.substr(i, entryLength);
            unitInfo = base64ToUnitInfo(unitHash);

            if (unitInfo) {
                if (cardInfo.loadCard(unitInfo.id)) {
                    // Repeat previous card multiple times
                    if (!current_deck.commander && cardInfo.isCommander(unitInfo.id)) {
                        current_deck.commander = unitInfo;
                        // Add to deck
                    } else {
                        current_deck.deck.push(unitInfo);
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
    
    return api;
});;define('cardApi', function () {
    var api = {
        byId: getCardByID,
        byIdSlim: getSlimCardByID,
        byIdWithBgeApplied: getCardWithBgeEffects,
        makeBattleground: makeBattleground,
        applyDefaultStatuses: applyDefaultStatuses
    };

	var cardInfo = require('cardInfo');
    var skillApi = require('skillApi');
	var runeApi = require('runeApi');

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
                    // Will be handled later
                } else {
                    if (isNaN(boost)) {
                        boost = Math.max(Math.ceil(card[key] * boost.mult), (boost.min_bonus || 1));
                    }
                    card[key] += parseInt(boost);
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
                            skill = skillApi.copySkill(skill);
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
});;define('loadDeck', function () {
	var cardInfo = require('cardInfo');
    var cardApi = require('cardApi');
    
    var api = {
        mission: loadMissionDeck,
        raid: loadRaidDeck,
        defaultDeck: getDefaultDeck,
        copyCardList: copyCardList,
        copyDeck: copyDeck,
        getDeckCards: getDeckCards
    };

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

    function baseFusion(unit) {
        var baseID = unit.id;
        var id;
        do {
            id = baseID;
            baseID = REVERSE_FUSIONS[id];
        } while (typeof baseID !== "undefined");
        return id;
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

    function getMaxUpgradePoints(deck) {
        var maxUpgradePoints = 0;
        for (var i = 0; i < deck.length; i++) {
            var unit = deck[i];
            var card = cardApi.byId(unit);
            var maxFusions = getMaxFusions(card);
            var maxLevel = card.maxLevel;
            maxUpgradePoints += ((maxFusions + 1) * maxLevel - 1);
        }
        return maxUpgradePoints;
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
            unitLevel = 7;
            if (canFuse(cardID)) {
                cardID = fuseCard(cardID);
            }
        } else if (level > 1 && cardInfo.isCommander(cardID)) {
            var maxUpgrades = (Number(cardInfo.loadCard(cardID).rarity) + 1);
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

    function upgradeCard(unitInfo) {
        var maxLevel = (parseInt(cardInfo.loadCard(unitInfo.id).rarity) + 2);
        if (unitInfo.level == maxLevel) {
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
        } else if (cardInfo.isCommander(cardID)) {
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
                do {
                    var fused = doFuseCard(cardID);
                    cardID = fused;
                } while (cardID !== fused);
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

    var DoNotFuse = ["8005", "8006", "8007", "8008", "8009", "8010"];
    function load_preset_deck(deckInfo, level, upgradeLevels) {

        var maxedAt = upgradeLevels + 1;
        if (!level) level = maxedAt;

        var current_deck = [];
        current_deck.deck = [];
        var commanderInfo = getPresetCommander(deckInfo, level);
        var commander = getPresetUnit(commanderInfo, level, maxedAt);   // Set commander to max level
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

    // Load mission deck
    function loadMissionDeck(id, level) {
        var missionInfo = MISSIONS[id];
        if (missionInfo) {
            return load_preset_deck(missionInfo, level, 6);
        } else {
            return 0;
        }
    }

    function loadRaidDeck(id, level, maxedAt) {
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

    function getDefaultDeck() {
        return {
            commander: elariaCaptain,
            deck: []
        };
    }

    function copyCardList(original_card_list) {
        var new_card_list = [];
        for (var key = 0, len = original_card_list.length; key < len; key++) {
            new_card_list[key] = original_card_list[key];
        }
        return new_card_list;
    }

    function copyDeck(original_deck) {
        var new_deck = {};
        new_deck.commander = original_deck.commander;
        new_deck.deck = copyCardList(original_deck.deck);
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

    return api;
});;define('unitInfo', function () {
    var api = {
        areEqual: areEqual,
        getEnhancement: getEnhancement,
        initializeUnit: initializeUnit,
        isImbued: isImbued
    };
    
    var base64 = require('base64');
    var cardApi = require('cardApi');

    function areEqual(unitInfo1, unitInfo2) {
        if ((!unitInfo1) !== (!unitInfo2)) return false; // Silly null-check
        var hash1 = base64.fromUnitInfo(unitInfo1);
        var hash2 = base64.fromUnitInfo(unitInfo2);
        return (hash1 === hash2);
    }

    function initializeUnit(unit, p, newKey) {
        unit.owner = p;
        unit.timer = unit.cost;
        unit.health_left = unit.health;
        // Setup status effects
        cardApi.applyDefaultStatuses(unit);
        unit.key = newKey;
        if (!unit.reusableSkills) unit.resetTimers();
    }

    function getEnhancement(unit, s, base) {
        var enhancements = unit.enhanced;
        var enhanced = (enhancements ? (enhancements[s] || 0) : 0);
        if (enhanced < 0) {
            enhanced = Math.ceil(base * -enhanced);
        }
        return enhanced;
    }

    function isImbued(unit, skillID, i) {
        var imbueSkillsKey;
        var skillType = SKILL_DATA[skillID].type;
        switch (skillType) {
            case 'flurry':
            case 'toggle':
                return unit.imbued[skillID];
    
            case 'passive':
                return (unit[skillID] === unit.imbued[skillID]);
    
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
        if (unit.imbued[imbueSkillsKey] !== undefined) {
            return (i >= unit.imbued[imbueSkillsKey]);
        } else {
            return false;
        }
    }
    
    return api;
});;define('bgeApi', function () {
    var api = {
        getBattlegrounds: getBattlegrounds
    };

    var log = require('log');
    var cardApi = require('cardApi');
    var debugLog = require('debugLog');

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
    
                        if (debugLog.enabled) {
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

    function getBattlegrounds(getbattleground, selfbges, enemybges, mapbges, campaignID, missionlevel, raidID, raidlevel) {

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
    }

    return api;
});;define('cardUI', function () {
	"use strict";

	var cardApi = require('cardApi');
	var cardInfo = require('cardInfo');
	var runeApi = require('runeApi');
	var factions = require('factions');
	var unitInfo = require('unitInfo');

	var assetsRoot = '';

	function clearCardSpace() {
		$("#cardSpace").empty();
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
		var commander = cardApi.byId(deck.commander);
		cards.push(create_card_html(commander, false, false));
		for (var i = 0, len = deck.deck.length; i < len; i++) {
			var deckEntry = deck.deck[i];
			if (battlegrounds) {
				var unit = cardApi.byIdWithBgeApplied(deckEntry, battlegrounds);
			} else {
				var unit = cardApi.byId(deckEntry);
			}
			cards.push(create_card_html(unit, false, false));
		}
		if (!noblanks) for (; i < 15; i++) {
			cards.push(createDiv("card blank"));
		}
		return cards;
	}

	function makeCardListHTML(deck, onclick, onrightclick) {
		var listHTML = createDiv("float-left");
		for (var i = 0, len = deck.deck.length; i < len; i++) {
			var deckEntry = deck.deck[i];
			var unit = cardApi.byId(deckEntry);
			var htmlCard = create_card_html(unit, false, false, onclick, onrightclick, null, i);
			if (deckEntry.index !== undefined) {
				htmlCard.setAttribute("data-index", deckEntry.index);
			}
			listHTML.appendChild(htmlCard);
		}
		return listHTML;
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
			var unit = cardApi.byId(listEntry);
			if (unitInfo.areEqual(unit, lastUnit)) {
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
		if (units) for (var i = 0, len = units.length; i < len; i++) {
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
				htmlCard.addEventListener("click", (function (inner) {
					return function () {
						choice = inner;
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
			var rune = runeApi.getRune(runeID);
			for (var key in rune.stat_boost) {
				if (key == "skill") {
					key = rune.stat_boost.skill.id;
				}
				boosts[key] = true;
			}
		}
		var highlighted = card.highlighted;
		if (highlighted) for (var i = 0; i < highlighted.length; i++) {
			var key = highlighted[i];
			boosts[key] = true;
		}
		htmlCard.setAttribute("data-runeids", runeIDs.join(","));

		var picture = cardInfo.loadCard(card.id).picture;
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
		if (card.earlyActivationSkills) getSkillsHtml(card, divSkills, skillsShort, card.earlyActivationSkills, onField);
		getSkillsHtml(card, divSkills, skillsShort, card.skill, onField);
		if (card.onDeathSkills) getSkillsHtml(card, divSkills, skillsShort, card.onDeathSkills, onField);
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
			htmlCard.addEventListener("click", (function (inner) {
				return function () {
					return onclick(htmlCard, state);
				};
			})(htmlCard, state));
		}
		if (onrightclick) {
			htmlCard.oncontextmenu = (function (inner) {
				return function () {
					return onrightclick(htmlCard, state);
				};
			})(htmlCard, state);
		}
		if (onmouseover) {
			htmlCard.onmouseover = (function (inner) {
				return function () {
					return onmouseover(htmlCard, state);
				};
			})(htmlCard, state);
		}
		return htmlCard;
	}

	function getSkillsHtml(card, divSkills, skillsShort, skills, onField) {
		for (var i = 0; i < skills.length; i++) {
			var skill = skills[i];
			divSkills.appendChild(getSkillHtml(card, skill, onField, i));
			divSkills.appendChild(document.createElement('br'));
			skillsShort.appendChild(getSkillIcon(skill.id));
		}
	}

	function getPassiveSkills(divSkills, skillsShort, card, onField, boosts) {
		var passiveSkills = Object.getOwnPropertyNames(SKILL_DATA).filter(function (skillID) {
			return ["passive", "toggle"].indexOf(SKILL_DATA[skillID].type) >= 0;
		}).forEach(function (skill) {
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
		var imbued = unitInfo.isImbued(card, skill.id, i);
		var enhancement = unitInfo.getEnhancement(card, skill.id, skill.x);
		if (imbued) {
			htmlSkill.classList.add("imbued");
		} else if (skill.boosted || enhancement) {
			htmlSkill.classList.add("increased");
		}
		if (skill.all) htmlSkill.innerHTML += (" All ");
		if (skill.y) htmlSkill.appendChild(getFactionIcon(skill.y));
		if (skill.s) htmlSkill.appendChild(getSkillIcon(skill.s));
		var x = (skill.x | 0) + enhancement;
		if (x) htmlSkill.innerHTML += (" " + x + " ");
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

	function createImg(src, className) {
		return $("<img>").addClass(className).attr("src", src)[0];
	}

	function createDiv(className, value) {
		return $("<div>").addClass(className).html(value)[0];
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
		9999: "StoryElements"
	};

	var api = {
		clearCardSpace: clearCardSpace,
		clearDeckSpace: clearDeckSpace,
		draw_deck: draw_deck,
		create_card_html: create_card_html,
		makeDeckHTML: makeDeckHTML,
		makeCardListHTML: makeCardListHTML,
		draw_card_list: draw_card_list,
		draw_cards: draw_cards,
		doDrawField: doDrawField,
		draw_inventory: draw_inventory,
		draw_hand: draw_hand,
		createItemHTML: createItemHTML,
		addMult: addMult,
		addWeight: addWeight
	};

	Object.defineProperties(api, {
		assetsRoot: {
			get: function () {
				return assetsRoot;
			},
			set: function (value) {
				assetsRoot = value;
			}
		}
	});

	return api;
});;define('animations', function () {
    
    var cardUI = require('cardUI');

    var api = {
        drawField: drawField,
        clearFrames: clearFrames
    };

    var frames = [];
    var frameInterval = null;
    var disabledInterval = false;

    function drawField(field, hand, callback, turn, activeUnit) {
        var newFrame = cardUI.doDrawField(field, hand, callback, turn, activeUnit);
        frames.push(newFrame);
        if (!frameInterval) {
            drawFrames();
            frameInterval = setInterval(drawFrames, 500);
        }
    }

    function clearFrames() {
        frames = [];
        clearInterval(frameInterval);
        frameInterval = null;
    }

    function drawFrames() {
        if (frames.length === 0) {
            if (disabledInterval) {
                clearInterval(frameInterval);
                frameInterval = null;
            } else {
                disabledInterval = true;
            }
        } else {
            var frame = frames.splice(0, 1)[0];
            $("#cardSpace").children().remove().end().append(frame);
            disabledInterval = false;
        }
    }

    return api;
});;// Convert skills to 1.0 version
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

var DATA_UPDATER = (function () {

    var baseUrl = "https://spellstone.synapse-games.com";

    var newCards = {};
    var newBGEs = {};
    var newFusions = {};
    var lastUpdate = null;

    function updateData(callback, forceUpdate) {

        $("body").addClass("loading");
        $("#loadingSplash").html("Checking for New Cards...");
        // Don't update more than once per minute
        var now = Date.now();
        if (!lastUpdate || lastUpdate - now > 60000 || forceUpdate) {
            lastUpdate = now;
            newCards = {};
            var promises = [];
            promises.push(updateCards());
            //promises.push(updateBGEs());
            //promises.push(updateCampaignData());
            var finishedLoading = function finishedLoading() {
                saveCardCache();
                doneLoading();
                callback && callback();
            };
            $.when.apply($, promises).then(finishedLoading, finishedLoading);
        } else {
            if (callback) callback();
        }
    }

    function updateBGEs() {
        newBGEs = {};
        return jQuery.ajax({
            url: baseUrl + "/assets/battleground_effects.xml",
            success: function (doc) {
                var battlegrounds = doc.getElementsByTagName("battleground");
                for (var i = 0; i < battlegrounds.length; i++) {
                    var battleground = battlegrounds[i];
                    var id = getValue(battleground, "id");
                    var battlegroundData = getBattlegroundFromXML(battleground);

                    if (JSON.stringify(BATTLEGROUNDS[id]) !== JSON.stringify(battlegroundData)) {
                        newBGEs[id] = battlegroundData;
                        BATTLEGROUNDS[id] = battlegroundData;
                    }
                }
            },
            async: true,
            cache: false
        });
    }

    function doneLoading() {
        $("body").removeClass("loading");
    }

    var cardFiles = [
        //"cards.xml"
        "cards_heroes.xml",
        "cards_premium_aether.xml",
        "cards_premium_chaos.xml",
        "cards_premium_wyld.xml",
        "cards_reward.xml",
        "cards_shard.xml",
        "cards_special.xml",
        "cards_standard.xml",
        "cards_story.xml",
        "fusion_recipes_cj2.xml"
    ];
    function updateCards() {
        var promises = [];
        for (var file = 0; file < cardFiles.length; file++) {
            var promise = jQuery.ajax({
                url: baseUrl + "/assets/" + cardFiles[file],
                success: function (doc) {
                    var trackNewCards = (typeof spoilers !== "undefined");
                    var units = doc.getElementsByTagName("unit");
                    for (var i = 0; i < units.length; i++) {
                        var unit = units[i];
                        var id = getValue(units[i], "id");
                        var cardData = getUnitFromXML(units[i]);
                        var newInfo = false;
                        if (!CARDS[id]) {
                            newInfo = true;
                        } else if (JSON.stringify(CARDS[id]) !== JSON.stringify(cardData)) {
                            newInfo = true;
                        }
                        if (newInfo) {
                            if (trackNewCards) {
                                spoilers[id] = true;
                            }
                            newCards[id] = cardData;
                        }
                        CARDS[id] = cardData;
                    }
                    var fusions = doc.getElementsByTagName("fusion_recipe");
                    for (var i = 0; i < fusions.length; i++) {
                        var node = fusions[i];
                        var fusion = getValue(node, "card_id", false);
                        var resource = node.getElementsByTagName("resource")[0];
                        if (resource) {
                            var base = getValue(resource, "card_id", true);
                            if (!FUSIONS[base] || FUSIONS[base] != fusion) {
                                newFusions[base] = fusion;
                                FUSIONS[base] = fusion;
                            }
                        }
                    }
                },
                async: true,
                cache: false
            });
            promises.push(promise);
        }

        return $.when.apply($, promises);
    }

    function saveCardCache() {
        if (typeof storageAPI !== "undefined") {
            var cardData = storageAPI.getField("GameData", "CardCache");

            if (cardData) {
                cardData.newCards = (cardData.newCards || {});
                cardData.newFusions = (cardData.newFusions || {});
                $.extend(cardData.newCards, newCards);
                $.extend(cardData.newFusions, newFusions);
            } else {
                cardData = {
                    newCards: newCards,
                    newFusions: newFusions
                };
            }
            cardData.lastUpdated = Date.now();

            storageAPI.setField("GameData", "CardCache", cardData);
        }
    }

    function getUnitFromXML(node) {
        var unit = {};
        unit.id = getValue(node, "id");
        unit.name = getValue(node, "name");
        addField(unit, node, "desc");
        unit.picture = getValue(node, "picture") || prefix(getValue(node, "asset_prefab"), "prefab_");
        if (!unit.picture) {
            var portrait = getValue(node, "portrait");
            if (portrait) {
                unit.picture = "portrait_" + portrait.toLowerCase().replace("portrait_", "");
            } else {
                unit.picture = "NotFound";
            }
        }
        var hidden_until = (getValue(node, "hidden_until") || getValue(node, "hidden_until_time"));
        if (hidden_until) unit.hidden_until = hidden_until + "000";
        unit.rarity = getValue(node, "rarity");
        unit.set = getValue(node, "set");
        unit.card_type = getValue(node, "card_type");
        addNumericField(unit, node, "shard_card");
        unit.type = getValue(node, "type") || 0;
        unit.sub_type = (getValues(node, "sub_type") || []);

        addNumericField(unit, node, "health");
        if (unit.card_type != "1") {
            addNumericField(unit, node, "attack");
            addNumericField(unit, node, "cost");
        }
        var upgrades = getUpgradesFromXML(node);
        unit.maxLevel = 1 + Object.keys(upgrades).length;

        unit.skill = getSkillsFromXML(node);
        unit.upgrades = upgrades;

        return unit;
    }

    function getSkillsFromXML(node) {
        var children = node.childNodes;
        var skills = [];
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.nodeName === "skill") {
                skills.push(getSkillFromXML(child));
            }
        }
        return skills;
    }

    function getSkillFromXML(node) {
        var skill = {
            id: getValue(node, "id", true)
        };
        addNumericField(skill, node, "x", true);
        addNumericField(skill, node, "mult", true);
        addNumericField(skill, node, "on_delay_mult", true);
        addField(skill, node, "y", true);
        addNumericField(skill, node, "z", true);
        addNumericField(skill, node, "c", true);
        addField(skill, node, "s", true);
        addField(skill, node, "all", true);
        return skill;
    }

    function getUpgradesFromXML(node) {
        var nodes = node.getElementsByTagName("upgrade");
        var upgrades = {};
        for (var i = 0; i < nodes.length; i++) {
            upgrades[i + 2] = getUpgradeFromXML(nodes[i]);
        }
        return upgrades;
    }

    function getUpgradeFromXML(node) {
        var upgrade = {};
        addNumericField(upgrade, node, "attack");
        addNumericField(upgrade, node, "health");
        addNumericField(upgrade, node, "cost");
        addField(upgrade, node, "desc");
        upgrade.skill = getSkillsFromXML(node);
        return upgrade;
    }

    function getBattlegroundFromXML(node) {
        var battleground = {};
        battleground.id = getValue(node, "id");
        battleground.name = getValue(node, "name");
        battleground.desc = getValue(node, "desc");
        battleground.desc = getBool(node, "enemy_only");
        addField(battleground, node, "scale_with_level");
        addField(battleground, node, "starting_level");

        return battleground;
    }

    function addField(object, node, field, isAtt) {
        var value = getValue(node, field, isAtt);
        if (value != null && value.length > 0) {
            object[field] = value;
        }
    }

    function addNumericField(object, node, field, isAtt) {
        var value = getNumeric(node, field, isAtt);
        if (value >= 0) {
            object[field] = value;
        }
    }

    function getValue(node, name, isAtt) {
        if (isAtt) {
            return node.getAttribute(name);
        } else {
            var values = getValues(node, name);
            return (values ? values[0] : null);
        }
    }

    function getBool(node, name, isAtt) {
        var val;
        if (isAtt) {
            val = node.getAttribute(name);
        } else {
            var values = getValues(node, name);
            val = (values ? values[0] : null);
        }
        return (val == 1);
    }

    function prefix(value, prefix) {
        if (value) {
            return prefix + value;
        } else {
            return value;
        }
    }

    function getValues(node, name) {
        var values = null;
        var tags = $(node).children(name);
        if (tags.length > 0) {
            values = [];
            for (var i = 0; i < tags.length; i++) {
                values.push(tags[i].textContent);
            }
        }
        return values;
    }

    function getNumeric(node, tagName, isAtt) {
        var value = getValue(node, tagName, isAtt);
        if (value != null) {
            return Number(value);
        } else {
            return -1;
        }
    }

    function updateCampaignData() {
        var promises = [];
        promises.push(updateCampaigns());
        promises.push(updateMissions("/assets/missions.xml"));
        promises.push(updateMissions("/assets/missions_event.xml"));
        return $.when.apply($, promises);
    }

    function updateCampaigns() {
        jQuery.ajax({
            url: baseUrl + "/assets/campaigns.xml",
            success: function (doc) {
                var campaigns = doc.getElementsByTagName("campaign");
                for (var i = 0; i < campaigns.length; i++) {
                    var campaign = campaigns[i];
                    var id = getValue(campaign, "id");
                    if (!CAMPAIGNS[id]) {
                        CAMPAIGNS[id] = getCampaignFromXML(campaign);
                    }
                }
            },
            async: false,
            cache: false
        });
    }

    function getCampaignFromXML(node) {
        var campaign = {
            id: getValue(node, "id"),
            name: getValue(node, "name"),
            missions: getCampaignMissionsFromXML(node)
        };
        return campaign;
    }

    function getCampaignMissionsFromXML(node) {
        var nodes = node.getElementsByTagName("mission_id");
        var missions = [];
        for (var i = 0; i < nodes.length; i++) {
            missions.push(nodes[i].innerHTML);
        }
        return missions;
    }

    function updateMissions(fileURL) {
        jQuery.ajax({
            url: baseUrl + fileURL,
            success: function (doc) {
                var missions = doc.getElementsByTagName("mission");
                for (var i = 0; i < missions.length; i++) {
                    var mission = missions[i];
                    var id = getValue(mission, "id");
                    if (!MISSIONS[id]) {
                        MISSIONS[id] = {
                            id: id,
                            name: getValue(mission, "name")
                        };
                    }
                }
            },
            async: false,
            cache: false
        });
    }

    return {
        updateData: updateData
    };
})();;"use strict";

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


;"use strict";

var SIM_CONTROLLER = (function () {
    var matchTimer = require('matchTimer');
    var debugLog = require('debugLog');

    function getConfiguration() {
        getdeck = $('#deck1').val();
        getordered = $('#ordered').is(':checked');
        getexactorder = $('#exactorder').is(':checked');

        getdeck2 = $('#deck2').val();
        getcampaign = $('#campaign').val();
        getmission = $('#mission').val();
        missionlevel = $('#mission_level').val();
        getraid = $('#raid').val();
        raidlevel = $('#raid_level').val();
        getordered2 = $('#ordered2').is(':checked');
        getexactorder2 = $('#exactorder2').is(':checked');
        surge = $('#surge').is(':checked');

        getsiege = $('#siege').is(':checked');
        tower_level = $('#tower_level').val();
        tower_type = $('#tower_type').val();

        if (BATTLEGROUNDS) {
            getbattleground = getSelectedBattlegrounds();
            selfbges = getSelectedBattlegrounds("self-");
            enemybges = getSelectedBattlegrounds("enemy-");
            mapbges = (getmission ? getSelectedMapBattlegrounds() : "");
        }

        sims_left = $('#sims').val() || 1;

        debugLog.enabled = $('#debug').is(':checked');
        play_debug = debugLog.enabled && $('#play_debug').is(':checked');
        if (play_debug) debugLog.enabled = false;
        mass_debug = $('#mass_debug').is(':checked');
        win_debug = $('#win_debug').is(':checked');
        loss_debug = $('#loss_debug').is(':checked');
        showAnimations = $('#animations').is(':checked');

        if ($('#auto_mode').length) {
            auto_mode = $('#auto_mode').is(':checked');
            SIMULATOR.user_controlled = !auto_mode;
        }

        // Not currently in UI - attacker's first card has +1 delay
        tournament = $("#tournament").is(":checked");
    }

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end(result) {

        var result = SIM_CONTROLLER.processSimResult();

        sims_left = 0;
        matchTimer.stop();


        var msg;
        var points = "";
        if (getdeck2) {
            points = " (" + SIMULATOR.calculatePoints() + " points)";
        }
        if (result == 'draw') {
            msg = '<br><h1>DRAW' + points + '</h1><br>';
        } else if (result) {
            msg = '<br><h1>WIN' + points + '</h1><br>';
        } else {
            msg = '<br><h1>LOSS' + points + '</h1><br>';
        }

        if (echo) {
            outputTurns(echo);
        }
        setSimStatus(msg);

        showUI();

        if (SIMULATOR.sendBattleUpdate) SIMULATOR.sendBattleUpdate(SIMULATOR.simulation_turns);

        if (SIM_CONTROLLER.end_sims_callback) SIM_CONTROLLER.end_sims_callback();
    }

    return {
        getConfiguration: getConfiguration,
        debug_end: debug_end,

        end_sims_callback: null,
        stop_sims_callback: null
    };
})();;"use strict";

(function () {
    var bgeApi = require('bgeApi');
    var matchTimer = require('matchTimer');
    var urlHelpers = require('urlHelpers');
    var debugLog = require('debugLog');

    // Initialize simulation loop - runs once per simulation session
    SIM_CONTROLLER.startsim = function () {
        total_turns = 0;
        matchTimer.reset();
        echo = '';
        games = 0;
        run_sims_batch = 0;

        SIM_CONTROLLER.getConfiguration();

        // Set up battleground effects, if any
        SIMULATOR.battlegrounds = bgeApi.getBattlegrounds(getbattleground, selfbges, enemybges, mapbges, getcampaign, missionlevel, getraid, raidlevel);

        hideUI();

        SIMULATOR.setupDecks();

        wins = 0;
        losses = 0;
        draws = 0;
        points = 0;

        outp(""); // Clear display
        if (!SIMULATOR.user_controlled) {
            hideTable();
            setSimStatus("Initializing simulations...");
        } else {
            setSimStatus("");
        }

        window.ga('send', 'event', 'simulation', 'start', 'single-threaded', sims_left);
        current_timeout = setTimeout(run_sims);

        return false;
    };

    // Interrupt simulations
    SIM_CONTROLLER.stopsim = function () {
        matchTimer.stop();
        var elapse = matchTimer.elapsed();
        var simpersec = games / elapse;
        simpersec = simpersec.toFixed(2);
        SIMULATOR.simulating = false;

        // Stop the recursion
        if (current_timeout) clearTimeout(current_timeout);
        if (!SIMULATOR.user_controlled) {
            setSimStatus("Simulations interrupted.", elapse, simpersec);
            showWinrate();
        }
        showUI();

        if (SIM_CONTROLLER.stop_sims_callback) SIM_CONTROLLER.stop_sims_callback();
    };

    function run_sims() {
        if (SIMULATOR.user_controlled) {
            if (run_sim(true)) {
                SIM_CONTROLLER.debug_end();
            }
        } else if ((debugLog.enabled || play_debug) && !mass_debug && !loss_debug && !win_debug) {
            run_sim(true);
            SIM_CONTROLLER.debug_end();
        } else if (sims_left > 0) {
            // Interval output - speeds up simulations
            if (run_sims_count >= run_sims_batch) {
                var simpersecbatch = 0;
                if (run_sims_batch > 0) { // Use run_sims_batch == 0 to imply a fresh set of simulations
                    run_sims_count = 0;
                    var temp = games / (games + sims_left) * 100;
                    temp = temp.toFixed(2);

                    var elapse = matchTimer.elapsed();

                    var batch_elapse = matchTimer.batchElapsed();
                    if (batch_elapse == 0) {
                        simpersecbatch = 0;
                    } else {
                        simpersecbatch = run_sims_batch / batch_elapse;
                    }

                    setSimStatus("Running simulations...", elapse, simpersecbatch.toFixed(1));
                    showWinrate();
                }
                run_sims_batch = 1;
                if (simpersecbatch > run_sims_batch) // If we can run more at one time, then var's try to
                    run_sims_batch = Math.ceil(simpersecbatch / 8);
                if (run_sims_batch > sims_left) // Also limit by how many sims are left
                    run_sims_batch = sims_left;

                // Batch messes up mass debug and loss debug! var's disable batch!
                if ((debugLog.enabled || play_debug) && (mass_debug || loss_debug || win_debug)) run_sims_batch = 1;

                matchTimer.startBatch();
                current_timeout = setTimeout(run_sims, 1);
                for (var i = 0; i < run_sims_batch; i++) {  // Start a new batch
                    run_sim();
                }
            }
        } else {
            run_sims_count = 0;
            run_sims_batch = 0;
            matchTimer.stop();

            var elapse = matchTimer.elapsed();
            var simpersec = games / elapse;
            simpersec = simpersec.toFixed(2);

            if (echo) {
                outp(echo);
            }
            setSimStatus("Simulations complete.", elapse, simpersec);
            showWinrate();

            showUI();

            if (SIM_CONTROLLER.end_sims_callback) SIM_CONTROLLER.end_sims_callback();
        }
    }

    // Initializes a single simulation - runs once before each individual simulation
    // - needs to reset the decks and fields before each simulation
    var seedtest = (urlHelpers.paramValue("seedtest") || 0);
    function run_sim(skipResults) {
        if (seedtest) {
            Math.seedrandom(seedtest++);
        }
        if (!SIMULATOR.simulate()) return false;
        if (!skipResults) SIM_CONTROLLER.processSimResult();
    }

    SIM_CONTROLLER.processSimResult = function () {

        var result;
        if (!SIMULATOR.field.player.commander.isAlive()) {
            result = false;
        }
        else if (!SIMULATOR.field.cpu.commander.isAlive()) {
            result = true;
        }
        else {
            result = 'draw';
        }

        if (run_sims_batch > 0) {
            if (sims_left > 0) sims_left--;
            run_sims_count++;
        }

        // Increment wins/losses/games
        if (result == 'draw') {
            draws++;
        } else if (result) {
            wins++;
        } else {
            losses++;
        }
        points += SIMULATOR.calculatePoints();
        games++;

        // Increment total turn count
        total_turns += SIMULATOR.simulation_turns;

        if (debugLog.enabled || play_debug) {
            if (loss_debug) {
                if (result == 'draw') {
                    echo = 'Draw found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>DRAW</h1><br>';
                    sims_left = 0;
                } else if (result) {
                    if (!sims_left) {
                        echo = 'No losses found after ' + games + ' games. No debug output to display.<br><br>';
                        sims_left = 0;
                    } else {
                        echo = '';
                    }
                } else {
                    echo = 'Loss found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>LOSS</h1><br>';
                    sims_left = 0;
                }
            } else if (win_debug) {
                if (result && result != 'draw') {
                    echo = 'Win found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>WIN</h1><br>';
                    sims_left = 0;
                } else {
                    if (!sims_left) {
                        echo = 'No wins found after ' + games + ' games. No debug output to display.<br><br>';
                        sims_left = 0;
                    } else {
                        echo = '';
                    }
                }
            } else if (mass_debug) {
                if (result == 'draw') {
                    echo += '<br><h1>DRAW</h1><br>';
                } else if (result) {
                    echo += '<br><h1>WIN</h1><br>';
                } else {
                    echo += '<br><h1>LOSS</h1><br>';
                }
            }

            if (mass_debug && sims_left) echo += '<br><hr>NEW BATTLE BEGINS<hr><br>';
        }

        return result;
    };

    // Global variables used by single-threaded simulator
    var run_sims_count = 0;
    var run_sims_batch = 0;
})();;var SIMULATOR = {};
(function () {
	
    var log = require('log');
	var cardApi = require('cardApi');
    var skillApi = require('skillApi');
	var base64 = require('base64');
	var unitInfo = require('unitInfo');
	var loadDeck = require('loadDeck');
	var debugLog = require('debugLog');
	var animations = require('animations');

	"use strict";

	// Play card
	function playCard(card, p, turn, quiet) {
		var field_p_assaults = field[p]['assaults'];

		// Not a valid card
		if (!card.id) return 0;

		var newKey = field_p_assaults.length;
		unitInfo.initializeUnit(card, p, newKey);
		card.played = true;

		if (card.isAssault()) {
			field_p_assaults[newKey] = card;
		}

		if ((debugLog.enabled || play_debug) && !quiet) {
			debugLog.writeLine(log.name(field[p].commander) + ' plays ' + log.name(card));
		}

		if (card.isTrap()) {
			doEarlyActivationSkills(card);
			activation_skills(card);
		} else {
			// Activate trap/onPlay battlegrounds
			for (var i = 0; i < battlegrounds.onCardPlayed.length; i++) {
				var battleground = battlegrounds.onCardPlayed[i];
				var o = (p === 'player' ? 'cpu' : 'player');

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
		if (showAnimations) {
			animations.drawField(field, null, null, turn);
		}
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
				if (debugLog.enabled) {
					debugLog.writeLine(log.name(current_assault) + ' <strong>is removed from field</strong>');
				}
				var newkey = key;	// Store the new key value for the next alive unit
				for (key++; key < len; key++) {
					current_assault = units[key];
					// If this unit is dead, don't update newkey, we still need to fill that slot
					if (!current_assault.isAlive()) {
						if (debugLog.enabled){
							debugLog.writeLine(log.name(current_assault) + ' <strong>is removed from field</strong>');
						}
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
		if (card.owner == 'cpu') return 'player';
		if (card.owner == 'player') return 'cpu';
	}

	function getOpposingField(card) {
		return field[getOpponent(card)];
	}

	// Deal damage to card
	// and keep track of cards that have died this turn
	function doDamage(sourceUnit, targetUnit, damage, shatter, logFn) {
		if (damage >= targetUnit.health_left) {
			targetUnit.health_left = 0;
		} else {
			targetUnit.health_left -= damage;
		}

		if (debugLog.enabled) logFn(sourceUnit, targetUnit, damage);

		if (shatter) {
			iceshatter(targetUnit);
		}
		if (!targetUnit.isAlive() && sourceUnit) {
			doOnDeathSkills(targetUnit, sourceUnit);
		}
	}

	function iceshatter(sourceUnit) {
		// Bug 27391 - If Barrier is partially reduced before being completely depleted, Iceshatter still deals full damage
		var amount = sourceUnit.barrier_ice;
		//if (amount > sourceUnit.barrier_ice) amount = sourceUnit.barrier_ice;
		var opposingField = getOpposingField(sourceUnit);
		var targetUnit = opposingField.assaults[sourceUnit.key];
		if (!targetUnit || !targetUnit.isAlive()) targetUnit = opposingField.commander;

		doDamage(sourceUnit, targetUnit, amount, null, function (source, target, amount) {
			debugLog.write(log.name(source) + "'s barrier shatters and hits " + log.name(target) + ' for ' + amount + ' damage');
			debugLog.writeLine(!target.isAlive() ? ' and it dies' : '');
		});
	}

	function getActivatedSkill(skillMap, skillId) {
		return (skillMap[skillId] || notImplemented);
	}

	function notImplemented(sourceUnit, skill) {
		if (debugLog.enabled) {
			var skillName = (SKILL_DATA[skill.id] ? SKILL_DATA[skill.id].name : skill.id);
			debugLog.writeLine(log.name(sourceUnit) + ' attempts to use ' + skillName + ', but it is not implemented.');
		}

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
			if (debugLog.enabled) {
				debugLog.writeLine(log.name(sourceCard) + " is silenced and cannot use skills");
			}
			return;
		}

		var dualstrike = sourceCard.dualstrike_triggered;
		if (debugLog.enabled && dualstrike) {
			// var main attack loop deal with resetting timer
			debugLog.writeLine(log.name(sourceCard) + ' activates dualstrike');
		}

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

					if (showAnimations) {
						animations.drawField(field, null, null, turn, sourceCard);
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
		var skills = dying.onDeathSkills;
		var len = skills.length;
		if (len == 0) return;

		for (var i = 0; i < len; i++) {
			var skill = skills[i];
			onDeathSkills[skill.id](dying, killer, skill);

			if (showAnimations) {
				animations.drawField(field, null, null, turn, dying);
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
			var enhancement = unitInfo.getEnhancement(defender, 'backlash', baseDamage);
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
			if (debugLog.enabled) echo += log.name(sourceUnit) + ' inflicts scorch(' + scorch + ') on itself<br>';

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
			var enhanced = unitInfo.getEnhancement(sourceUnit, 'burn', scorch);
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
				if (debugLog.enabled) echo += log.name(sourceUnit) + ' inflicts scorch(' + scorch + ') on ' + log.name(target) + '<br>';

				affected++;
			}

			return affected;
		},

		// Protect (Barrier)
		// - Can target specific faction
		// - Targets allied assaults
		// - Can be enhanced
		protect_ice: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, "barrier_ice");
		},
		protect_seafolk: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, null, null, true);
		},
		evadebarrier: function (sourceUnit, skill) {
			return activationSkills.protect(sourceUnit, skill, "invisible", function (target, amount) {
				return ' and imbues it with invisible ' + amount;
			});
		},
		protect: function (sourceUnit, skill, additional, additionalDebug, onlyOnDelay) {

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
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, protect);
			protect += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' protects ' + log.name(target) + ' but it is nullified!<br>';
					continue;
				}

				affected++;

				var protect_amt = protect;
				if (!protect_amt) {
					var mult = skill.mult;
					if (!target.isActive()) {
						mult += (skill.on_delay_mult || 0);
					}
					protect_amt = Math.ceil(target.health * mult);
				}

				target.protected += protect_amt;
				if (additional) {
					target[additional] = (target[additional] || 0) + protect_amt;
				}
				if (debugLog.enabled) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += log.name(sourceUnit) + ' barriers ' + log.name(target) + ' by ' + protect_amt;
					if (typeof additionalDebug === "function") {
						echo += additionalDebug(target, protect_amt);
					}
					echo += '<br>';
				}
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
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, heal);
			heal += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' heals ' + log.name(target) + ' but it is nullified!<br>';
					continue;
				}

				affected++;

				var heal_amt = heal;
				if (!heal_amt) {
					var mult = skill.mult;
					heal_amt = Math.ceil(target.health * mult);
				}

				if (heal_amt > target['health'] - target['health_left']) heal_amt = target['health'] - target['health_left'];
				target['health_left'] += heal_amt;
				if (debugLog.enabled) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += log.name(sourceUnit) + ' heals ' + log.name(target) + ' by ' + heal_amt + '<br>';
				}
			}

			return affected;
		},

		// Strike (Bolt)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Must calculate enfeeble/protect
		// - Can be enhanced
		poisonstrike: function (sourceUnit, skill, poison) {
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
				var target = field_x_assaults[key];
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

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, strike);
			strike += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' bolts ' + log.name(target) + ' but it is invisible!<br>';
					continue;
				}

				affected++;

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

				doDamage(sourceUnit, target, strike_damage, shatter, function (source, target, amount) {
					echo += '<u>(Strike: +' + skill.x;
					if (enhanced) echo += ' Enhance: +' + enhanced;
					echo += damageInfo.echo;
					echo += ') = ' + amount + ' damage</u><br>';
					echo += log.name(source) + ' bolts ' + log.name(target) + ' for ' + amount + ' damage';
					if (!target.isAlive()) {
						echo += ' and it dies';
					} else if (poisonDamage) {
						echo += ' and inflicts poison(' + poisonDamage + ') on it';
					}
					echo += '<br>';
				});

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		// Intensify
		// - Can target specific faction
		// - Targets poisoned/scorched enemy assaults
		// - Can be evaded
		// - Can be enhanced
		intensify: function (sourceUnit, skill, poison) {

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

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, intensify);
			intensify += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				var intensifiedFields = (target.scorched ? "scorch" : "");
				intensifiedFields += (target.poisoned ? (intensifiedFields ? " and poison" : "poison") : "");

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' intensifies ' + intensifiedFields + ' on ' + log.name(target) + ' but it is invisible!<br>';
					continue;
				}

				affected++;

				if (target.scorched) {
					target.scorched.amount += intensify;
				}
				if (target.poisoned) {
					target.poisoned += intensify;
				}

				if (debugLog.enabled) echo += log.name(sourceUnit) + ' intensifies ' + intensifiedFields + ' on ' + log.name(target) + ' by ' + intensify + '<br>';

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
		ignite: function (sourceUnit, skill, poison) {

			var o = getOpponent(sourceUnit);

			var ignite = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
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

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, ignite);
			ignite += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' ignites ' + log.name(target) + ' but it is invisible!<br>';
					continue;
				}

				affected++;

				target.scorch(ignite);
				if (debugLog.enabled) echo += log.name(sourceUnit) + ' ignites(' + ignite + ') ' + log.name(target) + '<br>';

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		// Jam (Freeze)
		// - Has cooldown timer (only fires every x turns)
		// - Can target specific faction
		// - Targets active_next_turn, unjammed enemy assaults
		// - Can be evaded
		// - If evaded, cooldown timer is not reset (tries again next turn)
		jamself: function jamself(sourceUnit, skill) {

			sourceUnit.jammed = true;
			sourceUnit.jammedSelf = true;
			if (debugLog.enabled) echo += log.name(sourceUnit) + ' freezes itself<br>';

			return 1;
		},
		jam: function jam(sourceUnit, skill) {

			var p = getOwner(sourceUnit);
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
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' freezes ' + log.name(target) + ' but it is invisible!<br>';
					continue;
				}

				affected++;

				target.jammed = true;
				if (debugLog.enabled) echo += log.name(sourceUnit) + ' freezes ' + log.name(target) + '<br>';

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

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var frost = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, frost);
			frost += enhanced;

			var all = skill.all;

			var field_x_assaults = field[o]['assaults'];

			var targets = [];

			var i = sourceUnit['key'] - 1;
			var end = i + 2;
			for (; i <= end; i++) {
				var target = field_x_assaults[i];
				if (target && target.isAlive()) {
					targets.push(i);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' breathes frost at ' + log.name(target) + ' but it is invisible!<br>';
					continue;
				}

				affected++;

				var frost_damage = frost;

				// Check Protect/Enfeeble
				// Check Protect/Enfeeble
				var damageInfo = modifySkillDamage(target, frost_damage);
				frost_damage = damageInfo.damage;
				var shatter = damageInfo.shatter;

				doDamage(sourceUnit, target, frost_damage, shatter, function (source, target, amount) {
					echo += '<u>(Frostbreath: +' + skill.x;
					if (enhanced) echo += ' Enhance: +' + enhanced;
					echo += damageInfo.echo;
					echo += ') = ' + amount + ' damage</u><br>';
					echo += log.name(source) + ' breathes frost at ' + log.name(target) + ' for ' + amount + ' damage';
					echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
				});

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		},

		heartseeker: function (sourceUnit, skill) {

			var faction = skill['y'];

			var o = getOpponent(sourceUnit);

			var heartseeker = skill.x;

			var target = field[o].assaults[sourceUnit.key];

			// No Targets
			if (!target) return 0;

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, heartseeker);
			heartseeker += enhanced;

			target.heartseeker += heartseeker;
			target.enfeebled += heartseeker;
			if (debugLog.enabled) echo += log.name(sourceUnit) + ' inflicts heartseeker ' + heartseeker + ' on ' + log.name(target) + '<br>';

			return 1;
		},
		// Enfeeble (Hex)
		// - Can target specific faction
		// - Targets enemy assaults
		// - Can be evaded
		// - Can be enhanced
		enfeeble: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var enfeeble = skill.x;

			var all = skill.all;

			var field_x_assaults = field[o]['assaults'];

			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
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
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, enfeeble);
			enfeeble += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' hexes ' + log.name(target) + ' but it is invisible!<br>';
					continue;
				}

				affected++;

				target['enfeebled'] += enfeeble;
				if (debugLog.enabled) echo += log.name(sourceUnit) + ' hexes ' + log.name(target) + ' by ' + enfeeble + '<br>';

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
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

			var weaken = skill.x;

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

			// No Targets
			if (!targets.length) return 0;

			// Check All
			if (!all) {
				targets = chooseRandomTarget(targets);
			}
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, weaken);
			weaken += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				// Check Evade
				if (target.invisible) {
					target.invisible--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' weakens ' + log.name(target) + ' but it is invisible!<br>';
					continue;
				}

				affected++;

				target.attack_weaken += weaken;
				if (debugLog.enabled) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += log.name(sourceUnit) + ' weakens ' + log.name(target) + ' by ' + weaken + '<br>';
				}

				if (target.backlash) {
					backlash(sourceUnit, target);
				}
			}

			return affected;
		}
	};

	var earlyActivationSkills = {
		// Rally
		// - Targets self
		// - Can be enhanced
		// - Cannot be nullified
		enlarge: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);

			var rally = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, rally);
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

				var rally_amt = rally;
				if (!rally_amt) {
					var mult = skill.mult;
					rally_amt = Math.ceil(target.attack * mult);
				}

				target.attack_rally += rally_amt;
				if (debugLog.enabled) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += log.name(sourceUnit) + ' enlarges ' + log.name(target) + ' by ' + rally_amt + '<br>';
				}

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
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {

				var target = field_p_assaults[targets[key]];

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' empowers ' + log.name(target) + ' but it is nullified!<br>';
					continue;
				}

				affected++;

				var rally_amt = rally;
				if (!rally_amt) {
					var mult = skill.mult;
					rally_amt = Math.ceil(target.attack * mult);
				}

				target.attack_rally += rally_amt;
				if (debugLog.enabled) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += log.name(sourceUnit) + ' empowers ' + log.name(target) + ' by ' + rally_amt + '<br>';
				}
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

			var rally = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, rally);
			rally += enhanced;

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
						if (debugLog.enabled) echo += log.name(sourceUnit) + ' activates legion and empowers ' + log.name(target) + ' but it is nullified!<br>';
					} else {
						affected++;
						target.attack_rally += rally;
						if (debugLog.enabled) {
							if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
							echo += log.name(sourceUnit) + ' activates legion and empowers ' + log.name(target) + ' by ' + rally + '<br>';
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
		fervor: function (sourceUnit, skill) {

			var p = getOwner(sourceUnit);
			var field_p_assaults = field[p]['assaults'];

			var rally = skill.x;
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, rally);
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
				if (debugLog.enabled) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += log.name(sourceUnit) + ' activates fervor for ' + fervorAmount + '<br>';
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
		barrage: function (sourceUnit, skill) {

			var o = getOpponent(sourceUnit);

			var barrages = skill.x;
			var faction = skill.y;
			var all = skill.all;

			var field_x_assaults = field[o].assaults;

			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, barrages);
			barrages += enhanced;
			for (var i = 0; i < barrages; i++) {
				var targets = [];
				for (var key = 0, len = field_x_assaults.length; key < len; key++) {
					var target = field_x_assaults[key];
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

				var affected = 0;

				var strike = 1;
				for (var key = 0, len = targets.length; key < len; key++) {
					var target = field_x_assaults[targets[key]];

					// Check Evade
					if (target.invisible) {
						target.invisible--;
						if (debugLog.enabled) echo += log.name(sourceUnit) + ' throws a bomb at ' + log.name(target) + ' but it is invisible!<br>';
						continue;
					}

					affected++;

					var strike_damage = strike;

					// Check Protect/Enfeeble
					var damageInfo = modifySkillDamage(target, strike_damage, { enfeeble: true });
					strike_damage = damageInfo.damage;
					var shatter = damageInfo.shatter;

					doDamage(sourceUnit, target, strike_damage, shatter, function (source, target, amount) {
						echo += '<u>(Barrage: +1';
						echo += damageInfo.echo;
						echo += ') = ' + amount + ' damage</u><br>';
						echo += log.name(source) + ' throws a bomb at ' + log.name(target) + ' for ' + amount + ' damage';
						echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
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
			var o = getOpponent(sourceUnit);

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
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' enhances ' + log.name(target) + ' but it is nullified!<br>';
					continue;
				}

				affected++;

				var enhancements = target.enhanced;
				if (x > 0) {
					enhancements[s] = (enhancements[s] || 0) + x;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' enhances ' + s + ' of ' + log.name(target, false) + ' by ' + x + '<br>';
				} else if (mult > 0) {
					// temporarily use negatives for multiplier
					enhancements[s] = -mult;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' enhances ' + s + ' of ' + log.name(target, false) + ' by ' + (mult * 100) + '%<br>';
				}
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
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, enrage);
			enrage += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_p_assaults[targets[key]];
				var amount = enrage;

				// Check Nullify
				if (target.nullified) {
					target.nullified--;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' enrages ' + log.name(target) + ' but it is nullified!<br>';
					continue;
				}

				affected++;

				if (skill.mult) {
					amount = Math.ceil(skill.mult * target.health);
				}

				target['enraged'] += amount;
				if (debugLog.enabled) {
					if (enhanced) echo += '<u>(Enhance: +' + enhanced + ')</u><br>';
					echo += log.name(sourceUnit) + ' enrages ' + log.name(target) + ' by ' + amount + '<br>';
				}
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

			var faction = skill['y'];

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var x = skill.x;
			var c = skill['c'];
			var s = skill['s'];
			var all = skill.all;

			var field_p_assaults = field[p]['assaults'];
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
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' enhances ' + log.name(target) + ' but it is nullified!<br>';
					continue;
				}

				affected++;


				if (target.hasSkill(s)) {
					var enhancements = target.enhanced;
					enhancements[s] = (enhancements[s] || 0) + x;
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' imbues ' + log.name(target, false) + ' existing ' + log.skill(skill) + ' by ' + x + '<br>';
				} else {
					target.imbue(skill);
					if (debugLog.enabled) echo += log.name(sourceUnit) + ' imbues ' + log.name(target, false) + ' with ' + log.skill(skill) + '<br>';
				}
			}

			return affected;
		},

		mark: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);
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
			var enhanced = unitInfo.getEnhancement(sourceUnit, skill.id, mark);
			mark += enhanced;

			var affected = 0;

			for (var key = 0, len = targets.length; key < len; key++) {
				var target = field_x_assaults[targets[key]];

				affected++;

				target.enfeebled += mark;
				sourceUnit.mark_target = target.uid;

				if (debugLog.enabled) echo += log.name(sourceUnit) + ' marks ' + log.name(target) + ' by ' + mark + '<br>';

				// Set countdown so Mark can't trigger twice on dual-strike turn
				skill.countdown = 1;
			}

			return affected;
		},

		snaretongue: function (sourceUnit, skill) {

			var faction = skill['y'];

			var p = getOwner(sourceUnit);
			var o = getOpponent(sourceUnit);

			var field_x_assaults = field[o]['assaults'];

			var markTarget = sourceUnit.mark_target;
			var targets = [];
			for (var key = 0, len = field_x_assaults.length; key < len; key++) {
				var target = field_x_assaults[key];
				if (target.isAlive()
					&& target.isInFaction(faction)) {
					targets.push(key);
				}
			}

			// No Targets
			if (!targets.length) return 0;

			// Find weakest
			var target = field_x_assaults[targets.reduce(function (weakest, target) {
				return ((field_x_assaults[target].health_left < field_x_assaults[weakest].health_left) ? target : weakest);
			}, targets[0])];

			var toKey = sourceUnit.key;
			var fromKey = target.key;
			if (toKey === toKey) {
				// No change in position
				if (debugLog.enabled) echo += log.name(sourceUnit) + ' activates snaretongue and keeps ' + log.name(target) + ' in front of it<br>';
				return false;
			}

			field_x_assaults.splice(target.key, 1);
			if (field_x_assaults.length < toKey) {
				CARDS[0] = CARDS[0] || {
					"id": "0",
					"name": "Filler",
					"picture": "",
					"rarity": "0",
					"set": "9999",
					"card_type": "0",
					"type": "0",
					"sub_type": [],
					"health": 1,
					"attack": 0,
					"cost": 0,
					"maxLevel": 1,
					"skill": []
				};
				var filler = cardApi.byId({ id: 0, level: 1 });
				filler.name = "filler";
				filler.health_left = 0;
				for (var i = field_x_assaults.length; i < toKey; i++) {
					field_x_assaults.push(filler);
				}
			}
			field_x_assaults.splice(toKey, 0, target);
			for (var i = Math.min(toKey, fromKey), end = Math.max(toKey, fromKey); i <= end; i++) {
				field_x_assaults[i].key = i;
			}

			if (debugLog.enabled) echo += log.name(sourceUnit) + ' activates snaretongue and pulls ' + log.name(target) + ' in front of it<br>';

			// Set countdown so skill can't trigger twice on dual-strike turn
			skill.countdown = 1;

			return 1;
		}
	};

	var onPlaySkills = {

		ambush: function (sourceUnit, target, skill) {

			var x = skill.x;
			var base = skill.base;
			var mult = skill.mult;

			var damage = x;
			if (!damage) {
				var mult = skill.mult;
				damage = Math.ceil(target[base] * mult);
			}

			doDamage(sourceUnit, target, damage, null, function (source, target, amount) {
				echo += log.name(source) + ' ambushes ' + log.name(target) + ' for ' + amount + ' damage';
				echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
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

			if (debugLog.enabled) {
				echo += log.name(sourceUnit) + ' slows ' + log.name(target) + ' by ' + slow + '<br>';
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
			var unearthedCard = cardApi.byIdWithBgeApplied(unearthedUnit, null, true);
			unearthedCard.isToken = true;

			var mult = skill.mult;
			if (mult) {
				// Unearthed card has scaled stats based on original card
				unearthedCard.attack = Math.floor(dying.attack * mult);
				unearthedCard.health = Math.floor(dying.health * mult);
			}

			playCard(unearthedCard, dying.owner, true);

			if (debugLog.enabled) {
				echo += log.name(unearthedCard) + ' is unearthed</br>';
			}

			return 1;
		},

		reanimate: function (dying, killer, skill) {

			// Only trigger once
			if (dying.reanimated) {
				return 0;
			}

			dying.health_left = skill.x;
			dying.reanimated = true;

			if (debugLog.enabled) {
				echo += ' and is reanimated</br>';
			}

			return 1;
		}
	};

	// Activation Skills
	// - Must traverse through skills from top to bottom
	function activation_skills(sourceUnit) {

		if (sourceUnit.silenced) {
			if (debugLog.enabled) echo += log.name(sourceUnit) + " is silenced and cannot use skills</br>";
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

			if (showAnimations) {
				animations.drawField(field, null, null, turn, sourceUnit);
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
			deck['player'] = loadDeck.copyDeck(cache_player_deck_cards);
		}

		// Load enemy deck
		if (getmission && missionlevel > 1 && missionlevel < 7) {
			cache_cpu_deck = loadDeck.mission(getmission, missionlevel);
			cache_cpu_deck_cards = loadDeck.getDeckCards(cache_cpu_deck, 'cpu');
		} else if (getraid) {
			cache_cpu_deck = loadDeck.raid(getraid, raidlevel);
			cache_cpu_deck_cards = loadDeck.getDeckCards(cache_cpu_deck, 'cpu');
		}
		if (cache_cpu_deck_cards) {
			deck['cpu'] = loadDeck.copyDeck(cache_cpu_deck_cards);
		}

		// Set up deck order priority reference
		if (getordered && !getexactorder) deck.player.ordered = loadDeck.copyCardList(deck.player.deck);
		if (getordered2 && !getexactorder2) deck.cpu.ordered = loadDeck.copyCardList(deck.cpu.deck);

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
				var towerCard = cardApi.byIdWithBgeApplied(tower);
				var uid = 150;
				towerCard.uid = uid;
				field.uids[uid] = towerCard;
				playCard(towerCard, 'cpu', -1, true);
			}
		}

		return performTurns(0);
	}

	function setupDecks() {
		// Cache decks where possible
		// Load player deck
		if (getdeck) {
			cache_player_deck = base64.decodeHash(getdeck);
		} else {
			cache_player_deck = loadDeck.defaultDeck();
		}
		cache_player_deck_cards = loadDeck.getDeckCards(cache_player_deck, 'player');

		// Load enemy deck
		pvpAI = true;
		if (getdeck2) {
			cache_cpu_deck = base64.decodeHash(getdeck2);
			if (getmission) pvpAI = false;
		} else if (getmission) {
			cache_cpu_deck = loadDeck.mission(getmission, missionlevel);
			pvpAI = false;    // PvE decks do not use "Smart AI"
		} else if (getraid) {
			cache_cpu_deck = loadDeck.raid(getraid, raidlevel);
			pvpAI = false;    // PvE decks do not use "Smart AI"
		} else {
			cache_cpu_deck = loadDeck.defaultDeck();
		}
		cache_cpu_deck_cards = loadDeck.getDeckCards(cache_cpu_deck, 'cpu');
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
		animations.clearFrames();
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
				if (debugLog.enabled) echo += '<u>Turn ' + turn + ' ends</u><br><br></div>';
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
			return commander + ' draws ' + log.name(card, true) + '<br/>';
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

		if (debugLog.enabled) {
			var commander_p = log.name(field[p]['commander']);
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
					if (debugLog.enabled) echo += log.name(current_assault) + ' reduces its timer<br>';
				}
			}

			// Check valor
			if (current_assault.valor) {
				var enemy = field_o_assaults[i];
				if (enemy && current_assault.adjustedAttack() < enemy.adjustedAttack()) {
					current_assault.attack_valor += current_assault.valor;
					if (debugLog.enabled) echo += log.name(current_assault) + ' activates valor, boosting its attack by ' + current_assault.valor + '<br/>';
				} else if (debugLog.enabled) {
					echo += log.name(current_assault) + ' activates valor but ';
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
						playCard(card.trap, p, turn);
						card.trap = false;
					}
					if (i === 2) break;
				}
				card_picked = deck_p.chooseCard(p, deck_p_deck, deck_p_ordered, turn, drawCards);
			}

			if (card_picked < 0) return false;

			playCard(deck_p_deck[card_picked], p, turn);

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
			animations.drawField(field, null, performTurns, turn);
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
			animations.drawField(field, drawableHand, onCardChosen, turn);
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
				if (unitInfo.areEqual(desiredCard, cardInHand)) {
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
		// Each rarity level is worth 6 points
		var rarity = parseInt(card.rarity) * 6;
		// Each fusion is worth half of a rarity
		var fusion = (cardID.length > 4 ? parseInt(cardID[0]) : 0) * 3;
		// Subtract a point for every missing upgrade level
		var level = parseInt(card.level) - parseInt(card.maxLevel);

		var ranking = rarity + fusion + level;

		return ranking;
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
			setPassiveStatus(current_assault, 'evade', 'invisible');
			setPassiveStatus(current_assault, 'absorb', 'warded');
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
				continue;
			}

			// Check jammed ("frozen")
			if (current_assault['jammed']) {
				if (debugLog.enabled) echo += log.name(current_assault) + ' is frozen and cannot attack<br>';
				continue;
			}

			var activations = 1;
			if (current_assault.dualstrike_triggered) {
				activations++;
				if (debugLog.enabled) echo += log.name(current_assault) + ' activates dualstrike<br>';
			}

			for (; activations > 0; activations--) {

				// Activation skills
				activation_skills(current_assault);

				// See if unit died from Backlash/Iceshatter
				if (!current_assault.isAlive()) {
					continue;
				}

				// Check attack
				// - check rally and weaken
				if (!current_assault.hasAttack()) {
					if (debugLog.enabled && current_assault.permanentAttack() > 0) echo += log.name(current_assault) + ' is weakened and cannot attack<br>';
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
		removeDead();

		if (debugLog.enabled) echo += '<u>Turn ' + turn + ' ends</u><br><br></div>';
	}

	function setPassiveStatus(assault, skillName, statusName) {
		var statusValue = 0;

		if (assault[skillName]) {
			statusValue = assault[skillName];
			var enhanced = unitInfo.getEnhancement(assault, skillName, statusValue);
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

		damage += enfeeble - shrouded;
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
		if (debugLog.enabled) {
			if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
			if (shrouded) echo += ' Stasis: -' + shrouded;
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

			if (debugLog.enabled) {
				if (dualStrike.countdown) {
					echo += log.name(unit) + ' charges  dualstrike (ready in ' + dualStrike.countdown + ' turns)<br/>';
				} else {
					echo += log.name(unit) + ' readies dualstrike<br/>';
				}
			}
		}
	}

	function doSkillCountDowns(unit, skills) {
		for (var i = 0, len = skills.length; i < len; i++) {
			var skill = skills[i];
			if (skill.countdown) {
				skill.countdown--;
				if (debugLog.enabled) {
					if (skill.countdown) {
						echo += log.name(unit) + ' charges ' + skillApi.nameFromId(skill.id) + ' (ready in ' + skill.countdown + ' turns)<br/>';
					} else {
						echo += log.name(unit) + ' readies ' + skillApi.nameFromId(skill.id) + '<br/>';
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
			current_assault.nullified = 0;
			current_assault.dualstrike_triggered = false;
			current_assault.silenced = false;

			// Regenerate
			if (current_assault.regenerate && current_assault.isDamaged()) {

				var regen_health = current_assault.regenerate;
				var enhanced = unitInfo.getEnhancement(current_assault, 'regenerate', regen_health);
				regen_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (regen_health >= healthMissing) {
					regen_health = healthMissing;
				}

				current_assault.health_left += regen_health;
				if (debugLog.enabled) echo += log.name(current_assault) + ' regenerates ' + regen_health + ' health<br>';
			}

			// Poison
			var amount = current_assault.poisoned;
			if (amount) {
				var warded = current_assault.warded;
				if (warded) {
					amount -= applyDamageReduction(current_assault, 'warded', amount);
				}
				doDamage(null, current_assault, amount, null, function (source, target, amount) {
					echo += log.name(target) + ' takes ' + amount;
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
				doDamage(null, current_assault, amount, null, function (source, target, amount) {
					echo += log.name(target) + ' takes ' + amount;
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
				doDamage(null, current_assault, amount, null, function (source, target, amount) {
					echo += log.name(target) + ' takes ' + amount;
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
					if (debugLog.enabled) {
						echo += log.name(current_assault) + ' recovers from corrosion<br>';
					}
				} else {
					var corrosion = corroded.amount;
					current_assault.attack_corroded = corrosion;
					if (debugLog.enabled) {
						echo += log.name(current_assault) + ' loses ' + corrosion + ' attack to corrosion<br>';
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
			if (taunted && debugLog.enabled) echo += log.name(target) + ' taunts ' + log.name(current_assault);
		}

		// -- CALCULATE DAMAGE --
		var damage = current_assault.adjustedAttack(); // Get base damage + rally/weaken

		// Enfeeble
		var enfeeble = target.enfeebled;
		damage += enfeeble;

		if (debugLog.enabled) {
			echo += '<u>(Attack: +' + current_assault.attack;
			if (current_assault.attack_berserk) echo += ' Berserk: +' + current_assault.attack_berserk;
			if (current_assault.attack_valor) echo += ' Valor: +' + current_assault.attack_valor;
			if (current_assault.attack_rally) echo += ' Rally: +' + current_assault.attack_rally;
			if (current_assault.attack_weaken) echo += ' Weaken: -' + current_assault.attack_weaken;
			if (current_assault.attack_corroded) echo += ' Corrosion: -' + current_assault.attack_corroded;
			if (enfeeble) echo += ' Enfeeble: +' + enfeeble;
		}

		// Pierce
		// var pierce = current_assault['skill']['pierce'];
		var pierce = current_assault.pierce;
		if (pierce) {
			var enhanced = unitInfo.getEnhancement(current_assault, 'pierce', pierce);
			pierce += enhanced;
		} else {
			pierce = 0;
		}

		// Damage reduction
		var protect = target.protected;
		var shatter = false;
		var armor = target.armored;
		var shrouded = checkShroud(target);
		// Barrier is applied BEFORE Armor
		if (protect) {
			if (debugLog.enabled) {
				echo += ' Barrier: -' + protect;
			}
			// Remove pierce from Barrier
			if (pierce) {
				if (pierce >= protect) {
					if (debugLog.enabled) echo += ' Pierce: +' + protect;
					pierce -= protect;
					protect = 0;
					target.protected = 0;
				} else {
					if (debugLog.enabled) echo += ' Pierce: +' + pierce;
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
			shrouded += unitInfo.getEnhancement(target, 'stasis', shrouded);
			if (debugLog.enabled) {
				echo += ' Shroud: -' + shrouded;
			}
			// Remove pierce from Shroud
			if (pierce) {
				if (pierce > shrouded) {
					if (debugLog.enabled) echo += ' Pierce: +' + shrouded;
					shrouded = 0;
				} else {
					if (debugLog.enabled) echo += ' Pierce: +' + pierce;
					shrouded -= pierce;
				}
			}
			damage -= shrouded;
		}
		if (armor) {
			armor += unitInfo.getEnhancement(target, 'armored', armor);
			if (debugLog.enabled) {
				echo += ' Armor: -' + armor;
			}
			// Remove pierce from Armor
			if (pierce) {
				if (pierce > armor) {
					if (debugLog.enabled) echo += ' Pierce: +' + armor;
					armor = 0;
				} else {
					if (debugLog.enabled) echo += ' Pierce: +' + pierce;
					armor -= pierce;
				}
			}
			damage -= armor;
		}

		if (damage < 0) damage = 0;

		if (debugLog.enabled) echo += ') = ' + damage + ' damage</u><br>';

		// -- END OF CALCULATE DAMAGE --

		// Deal damage to target
		doDamage(current_assault, target, damage, null, function (source, target, amount) {
			echo += log.name(source) + ' attacks ' + log.name(target) + ' for ' + amount + ' damage';
			echo += (!target.isAlive() ? ' and it dies' : '') + '<br>';
		});

		if (showAnimations) {
			animations.drawField(field, null, null, turn, current_assault);
		}

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
				var enhanced = unitInfo.getEnhancement(current_assault, 'poison', poison);
				poison += enhanced;
				if (poison > target.poisoned) {
					target.poisoned = poison;
					if (debugLog.enabled) echo += log.name(current_assault) + ' inflicts poison(' + poison + ') on ' + log.name(target) + '<br>';
				}
			}

			// Venom
			// - Target must have taken damage
			// - Target must be an assault
			// - Sets poisioned to greater of target's current poisioned or new poison
			// - Sets envenomed to greater of target's current envenomed or new venom
			if (current_assault.venom) {
				var venom = current_assault.venom;
				var enhanced = unitInfo.getEnhancement(current_assault, 'venom', venom);
				venom += enhanced;

				if (venom > target.envenomed) {
					var hexIncrease = venom - target.envenomed;
					target.envenomed = venom;
					target.enfeebled += hexIncrease;
					if (debugLog.enabled) echo += log.name(current_assault) + ' inflicts venom(' + venom + ') on ' + log.name(target) + '<br>';
				}
			}

			// Nullify
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.nullify) {
				var nullify = current_assault.nullify;
				var enhanced = unitInfo.getEnhancement(current_assault, 'nullify', nullify);
				nullify += enhanced;
				target.nullified += nullify;
				if (debugLog.enabled) echo += log.name(current_assault) + ' inflicts nullify(' + nullify + ') on ' + log.name(target) + '<br>';
			}

			// Silence
			// - Attacker must have taken damage
			// - Target must be an assault
			if (current_assault.silence) {
				target.silenced = true;
				if (debugLog.enabled) echo += log.name(current_assault) + ' inflicts silence on ' + log.name(target) + '<br>';
			}

			// Daze
			// - Target must have taken damage
			// - Target must be an assault
			if (current_assault.daze) {

				var dazed = current_assault.daze;
				var enhanced = unitInfo.getEnhancement(current_assault, 'daze', dazed);
				dazed += enhanced;

				target.attack_weaken += dazed;
				if (debugLog.enabled) echo += log.name(current_assault) + ' dazed ' + log.name(target) + ' for ' + dazed + '<br>';
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
			if (current_assault.leech && current_assault.isDamaged()) {

				var leech_health = current_assault.leech;
				var enhanced = unitInfo.getEnhancement(current_assault, 'leech', leech_health);
				leech_health += enhanced;
				var healthMissing = current_assault.health - current_assault.health_left;
				if (leech_health >= healthMissing) {
					leech_health = healthMissing;
				}

				current_assault.health_left += leech_health;
				if (debugLog.enabled) echo += log.name(current_assault) + ' siphons ' + leech_health + ' health<br>';
			}

			if (current_assault.reinforce) {
				var reinforce = current_assault.reinforce;
				var enhanced = unitInfo.getEnhancement(current_assault, 'reinforce', reinforce);
				reinforce += enhanced;

				current_assault.protected += reinforce;
				if (debugLog.enabled) echo += log.name(current_assault) + ' reinforces itself with barrier ' + reinforce + '<br>';
			}

			// Counter
			// - Target must have received some amount of damage
			// - Attacker must not be already dead
			if (target.counter) {

				var counterBase = 0 + target.counter;
				var counterEnhancement = unitInfo.getEnhancement(target, 'counter', counterBase);

				doCounterDamage(current_assault, target, 'Vengance', counterBase, counterEnhancement);
			}

			// Counterburn
			// - Target must have received some amount of damage
			if (target.counterburn) {
				var scorch = target.counterburn || 0;
				var enhanced = unitInfo.getEnhancement(target, 'counterburn', scorch);
				scorch += enhanced;
				if (!current_assault.scorched) {
					current_assault.scorched = { 'amount': scorch, 'timer': 2 };
				} else {
					current_assault.scorched.amount += scorch;
					current_assault.scorched.timer = 2;
				}
				if (debugLog.enabled) echo += log.name(target) + ' inflicts counterburn(' + scorch + ') on ' + log.name(current_assault) + '<br>';
			}

			// Counterpoison
			// - Target must have received some amount of damage
			if (target.counterpoison) {
				var poison = target.counterpoison || 0;
				var enhanced = unitInfo.getEnhancement(target, 'counterpoison', poison);
				poison += enhanced;

				if (poison > current_assault.poisoned) {
					current_assault.poisoned = poison;
					if (debugLog.enabled) echo += log.name(target) + ' inflicts counterpoison(' + poison + ') on ' + log.name(current_assault) + '<br>';
				}
			}

			// Fury
			// - Target must have received some amount of damage
			if (target.fury) {
				var furyBase = target.fury;
				var furyEnhancement = unitInfo.getEnhancement(target, 'counter', furyBase);

				if (target.isAlive()) {
					var fury = furyBase + furyEnhancement;
					target.attack_berserk += fury;
					if (debugLog.enabled) {
						echo += log.name(target) + ' activates fury and gains ' + fury + ' attack<br>';
					}
				}

				doCounterDamage(current_assault, target, 'Fury', furyBase, furyEnhancement);
			}

			if (target.enraged > 0) {
				target.attack_berserk += target.enraged;
				if (debugLog.enabled) echo += log.name(target) + " is enraged and gains " + target.enraged + " attack!</br>";
			}

			// Berserk
			// - Must have done some damage to an assault unit
			if (current_assault.berserk) {

				var berserk = current_assault.berserk;
				var enhanced = unitInfo.getEnhancement(current_assault, 'berserk', berserk);
				berserk += enhanced;

				current_assault.attack_berserk += berserk;
				if (debugLog.enabled) echo += log.name(current_assault) + ' activates berserk and gains ' + berserk + ' attack<br>';
			}
		}

		// -- CHECK STATUS INFLICTION --

		// Corrosion
		// - Target must have received some amount of damage
		if (target.corrosive) {
			var corrosion = target.corrosive || 0;
			var enhanced = unitInfo.getEnhancement(target, 'corrosive', corrosion);
			corrosion += enhanced;
			if (current_assault.corroded) {
				current_assault.corroded.amount += corrosion;
				current_assault.corroded.timer = 2;
			} else {
				current_assault.corroded = { amount: corrosion, timer: 2 };
			}
			if (debugLog.enabled) echo += log.name(target) + ' inflicts corrosion(' + corrosion + ') on ' + log.name(current_assault) + '<br>';
			current_assault.attack_corroded = corrosion;
			if (debugLog.enabled) {
				echo += log.name(current_assault) + ' loses ' + corrosion + ' attack to corrosion<br>';
			}
		}

		if (!current_assault.isAlive()) {
			doOnDeathSkills(current_assault, target);
		}

		if (showAnimations) {
			animations.drawField(field, null, null, turn, current_assault);
		}
		// -- END OF STATUS INFLICTION --
	}

	function doCounterDamage(attacker, defender, counterType, counterBase, counterEnhancement) {

		var counterDamage = counterBase + counterEnhancement;

		// Protect
		var damageInfo = modifySkillDamage(attacker, counterDamage, { enfeeble: true });
		counterDamage = damageInfo.damage;
		var shatter = damageInfo.shatter;

		if (debugLog.enabled) {
			echo += '<u>(' + counterType + ': +' + counterBase;
			if (counterEnhancement) echo += ' Enhance: +' + counterEnhancement;
			echo += damageInfo.echo;
			echo += ') = ' + counterDamage + ' damage</u><br>';
		}

		doDamage(defender, attacker, counterDamage, null, function (source, target, amount) {
			echo += log.name(target) + ' takes ' + amount + ' ' + counterType.toLowerCase() + ' damage';
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
		healthStats.player.percent = stats.taken / stats.total;
		healthStats.cpu.percent = stats.taken / stats.total;

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
})();;(function (angular) {
    'use strict';

    var filterByParent = function (unfiltered, parentID, parentIDField) {
        return unfiltered.filter(function (entry) {
            return entry[parentIDField] == parentID;
        });
    };

    var filterChildren = function (unfiltered, parentID, parents, childrenField, childIDField) {
        var parent = parents.filter(function (parent) { return parent.id == parentID; })[0];
        if (parent) {
            var children = parent[childrenField];
            var filtered = unfiltered.filter(function (child) {
                var childID = child[childIDField];
                var isChildOfParent = children.indexOf(childID) >= 0;
                return isChildOfParent;
            });
            return filtered;
        } else {
            return [];
        }
    };

    angular.module('core', [])
        .filter('forMissions', function () {
            return function (campaigns, missions) {
                if (!campaigns || !missions) return campaigns;

                var newCampaigns = [];
                for (var i = 0, len = campaigns.length; i < len; i++) {
                    var campaign = campaigns[i];
                    var missionsInCampaign = campaign.missions;
                    var inCampaign = true;

                    for (var j = 0; j < missionsInCampaign.length; j++) {
                        var mission = missionsInCampaign[j];
                        if (!missions[mission]) {
                            inCampaign = false;
                            break;
                        }
                    }
                    if (inCampaign) {
                        newCampaigns.push(campaign);
                    }
                }
                return newCampaigns;
            };
        })
        .filter('filterByParent', function () {
            return filterByParent;
        })
        .filter('filterChildren', function () {
            return filterChildren;
        });

    angular.module('simulatorApp', ['core'])
        .controller('SimulatorCtrl', ['$scope', '$window', SimulatorCtrl]);

    function SimulatorCtrl($scope, $window) {
        $scope.locations = [];
        $scope.campaigns = [];
        $scope.missions = $window.TITANS;
        $scope.raids = $window.RAIDS;
        $scope.battlegrounds = $window.BATTLEGROUNDS;
        $scope.mapBattlegrounds = toArray($window.MAP_BATTLEGROUNDS);

        $scope.campaignBGEs = [];

        $scope.tower = false;
        $scope.auto = false;

        $scope.debugMode = false;

        $scope.selections = {
            location: '',
            campaign: '',
            mission: '',
            raid: ''
        };

        $scope.titans = function () {
            $scope.campaigns = toArray($window.CAMPAIGNS);
            $scope.missions = $window.TITANS;
        };

        $scope.campaignSections = function () {
            $scope.locations = ToArray($window.LOCATIONS).sort(function (locationA, locationB) {
                return Number(locationA.id) - Number(locationB.id);
            });
            $scope.missions = ToArray($window.MISSIONS);
            $scope.campaigns = ToArray($window.CAMPAIGNS);
        };

        function ToArray(table) {
            var IDs = Object.keys(table);
            IDs.sort(function (a, b) {
                return Number(a) - Number(b);
            });
            var list = [];
            for (var i = 0; i < IDs.length; i++) {
                var key = IDs[i];
                var entry = table[key];
                list.push(entry);
            }
            return list;
        }

        $scope.filteredRaids = function () {
            var filtered = {};
            toArray($scope.raids)
                .sort(function (raidA, raidB) {
                    return Number(raidB.id) - Number(raidA.id);
                })
                .forEach(function (raid) {
                    if (!filtered[raid.name]) {
                        filtered[raid.name] = raid;
                    }
                });
            return toArray(filtered)
                .sort(function (raidA, raidB) {
                    return Number(raidA.id) - Number(raidB.id);
                });
        };

        $scope.getLocationClass = function (location) {
            if (!location) {
                var selected = $scope.selections.location;
                location = $scope.locations.filter(function (location) {
                    return location.id == selected;
                })[0];
            }
            if (!location) {
                return "grey";
            } else {
                var id = Number(location.id);
                if (id === 0) {
                    return "heroUpgrade";
                } else if (id >= 100) {
                    return "event";
                } else {
                    return "black";
                }
            }
        };

        $scope.getCampaignClass = function (campaign) {
            if (!campaign) {
                var selected = $scope.selections.campaign;
                campaign = $scope.campaigns.filter(function (campaign) {
                    return campaign.id == selected;
                })[0];
            }
            if (!campaign) {
                return "grey";
            } else if (campaign.side_mission) {
                return (campaign.location_id == 0 ? "heroUpgrade" : "mythic");
            } else if (campaign.isLocation) {
                return "location";
            } else {
                return "black";
            }
        };

        $scope.$watch("selections.location", function (newValue, oldValue) {
            $scope.selections.campaign = '';
        });

        $scope.$watch("selections.campaign", function (newValue, oldValue) {
            $scope.selections.mission = '';
        });

        function toArray(object) {
            var ary = [];
            for (var key in object) {
                ary.push(object[key]);
            }
            return ary;
        }

        $scope.towerTypes = ["Castle Tower", "Cannon Tower", "Tree of Life"];

        $scope.selectableBattlegrounds = function () {
            var selectable = [];
            for (var id in $scope.battlegrounds) {
                var BGE = $scope.battlegrounds[id];
                if (!(BGE.hidden || BGE.isTower)) selectable.push(BGE);
            }
            selectable.sort(function (a, b) { return a.id - b.id; });
            return selectable;
        };

        $scope.personalBattlegrounds = function () {
            var selectable = [];
            for (var id in $scope.battlegrounds) {
                var BGE = $scope.battlegrounds[id];
                var bgeID = Number(BGE.id);
                if (bgeID > 1000 && bgeID < 2000) selectable.push(BGE);
            }
            selectable.sort(function (a, b) { return a.id - b.id; });
            return selectable;
        };

        $scope.towerTypes = function () {
            var towerTypes = [];
            for (var id in $scope.battlegrounds) {
                var BGE = $scope.battlegrounds[id];
                if (BGE.isTower) towerTypes.push(BGE);
            }
            towerTypes.sort(function (a, b) { return a.id - b.id; });
            return towerTypes;
        };

        $scope.$watch("debugMode", function (newValue, oldValue) {
        });
    }

}(angular));
;var storageAPI = {};

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
        var urlHelpers = require('urlHelpers');
        
        var SaveFields = {
            decks: "SavedDecks",
            tutorial: "Tutorial"
        };

        storageAPI.initialize = function () {
            var currentPage = urlHelpers.getCurrentPage();

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
}());;'use strict';

var loadDeckDialog;
var mapBGEDialog;

$(function () {
    var bgeApi = require('bgeApi');
    var base64 = require('base64');
    var urlHelpers = require('urlHelpers');
    var loadDeck = require('loadDeck');
    var cardUI = require('cardUI');
    
    $("#deck1").change(function () {
        this.value = this.value.trim();
        deckChanged("attack_deck", base64.decodeHash(this.value), 'player');
    });

    $("#deck2").change(function () {
        this.value = this.value.trim();
        deckChanged("defend_deck", base64.decodeHash(this.value), 'cpu');
    });

    $("#battleground").change(function () {
        $("#deck1").change();
        if ($("#deck2").val()) {
            $("#deck2").change();
        } else if ($("#mission").val()) {
            $("#mission").change();
        } else if ($("#raid").val()) {
            $("#raid").change();
        }
    });

    var bges = $('label[bge-desc]');
    for (var i = 0; i < bges.length; i++) {
        var lblBge = $(bges[i]);
        lblBge.hover(showTooltip, hideTooltip);
        /*
        var tooltip = $('<div class="tooltip">' + lblBge.attr("bge-desc") + '</div>');
        var parent = lblBge.parent();
        parent.append($('<div></div>').append([lblBge.prev(), lblBge, tooltip]));
        */
    }

    function showTooltip(event) {
        var $container = $("#tooltip");
        var $text = $("#tooltip-text");

        $text.html($(event.target).attr('bge-desc'));
        $text.width(200);
        $container.show();

        $("#tooltip .arrow")
            .css("borderTopWidth", 0)
            .css("borderBottomWidth", 0);

        var offset = $(event.target).offset();
        offset.left -= 230;
        offset.top -= ($container.outerHeight() / 2) - 10;
        $container.offset(offset);

        var arrowHeight = $text.innerHeight() / 2 - 4;

        $("#tooltip .arrow")
            .css("borderTopWidth", arrowHeight)
            .css("borderBottomWidth", arrowHeight);
    }

    function hideTooltip(event) {
        $("#tooltip").hide();
    }

    function deckChanged(deckID, newDeck, owner) {
        var $deck = $("#" + deckID);
        $deck.children().remove();
        if (!urlHelpers.paramDefined("seedtest")) {
            SIM_CONTROLLER.getConfiguration();
            var battlegrounds = bgeApi.getBattlegrounds(getbattleground, selfbges, enemybges, mapbges, getcampaign, missionlevel, getraid, raidlevel);
            battlegrounds = battlegrounds.onCreate.filter(function (bge) {
                return !((owner === 'player' && bge.enemy_only) || (owner === 'cpu' && bge.ally_only));
            });

            $deck.append(cardUI.makeDeckHTML(newDeck, false, battlegrounds));
        }
    }
    var accordions = $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    }).filter(".start-open").accordion('option', 'active', 0);

    $("#raid, #raid_level").change(function () {
        var newDeck;
        var selectedRaid = $("#raid").val();
        var raidlevel = $('#raid_level');
        if (selectedRaid) {
            newDeck = loadDeck.raid(selectedRaid, raidlevel.val());
            if (RAIDS[selectedRaid].type === "Dungeon") {
                raidlevel.attr("max", 150);
            } else {
                raidlevel.attr("max", 40);
            }
        } else {
            newDeck = base64.decodeHash('');
            raidlevel.attr("max", 40);
        }

        deckChanged("defend_deck", newDeck, 'cpu');
    });

    $("#location, #campaign").change(function () {
        $("#mission").change();
    });

    $("#mission, #mission_level").change(function () {
        var newDeck;
        var missionID = $('#mission').val();
        if (missionID) {
            var missionLevel = $('#mission_level').val();
            newDeck = loadDeck.mission(missionID, missionLevel);
        } else {
            newDeck = base64.decodeHash('');
        }
        deckChanged("defend_deck", newDeck, 'cpu');
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
                onDeckLoaded(newHash, loadDeckDialog.hashField);
                loadDeckDialog.dialog("close");
            },
            Cancel: function () {
                loadDeckDialog.dialog("close");
            }
        }
    });
    mapBGEDialog = $("#bgeDialog").dialog({
        autoOpen: false,
        minWidth: 320,
        modal: true,
        resizable: false,
        buttons: {
            OK: function () {
                mapBGEDialog.dialog("close");
            },
            Cancel: function () {
                mapBGEDialog.dialog("close");
            }
        }
    });

    deckChanged("attack_deck", base64.decodeHash(''));
    deckChanged("defend_deck", base64.decodeHash(''));

    setDeckSortable("#attack_deck", '#deck1');
    setDeckSortable("#defend_deck", '#deck2');

    if (urlHelpers.paramDefined("latestCards")) {
        var callback = null;
        if (urlHelpers.paramDefined("autostart")) {
            callback = function () {
                SIM_CONTROLLER.startsim(1);
            };
        }
        updateGameData(callback);
    } else {
        loadCardCache();
    }

    processQueryString();
});

function doneLoading() {
    $("body").removeClass("loading");
    checkTutorial();
}

function updateGameData(callback) {
    var done = doneLoading;
    if (callback) {
        done = function () {
            doneLoading();
            callback();
        };
    }
    DATA_UPDATER.updateData(done, true);
}

function setDeckSortable(deckField, associatedHashField) {
    $(deckField).sortable({
        items: '.card:not(.commander):not(.blank)',
        tolerance: "intersect",
        helper: function (event, ui) {
            return ui.clone();
        },
        start: function (event, ui) {
            var origPos = ui.placeholder.index() - 1;
            ui.item.data('origPos', origPos);
            $(ui.item).hide();
        },
        stop: function (event, ui) {
            var origPos = ui.item.data('origPos') - 1;
            var newPos = ui.item.index() - 1;

            var hashField = $(associatedHashField);
            var deck = base64.decodeHash(hashField.val());
            var array = deck.deck;
            array.splice(newPos, 0, array.splice(origPos, 1)[0]);
            var hash = base64.encodeHash(deck);
            hashField.val(hash);
        }
    });
}

function showMapBGEs() {
    mapBGEDialog.dialog("open");
    mapBGEDialog.dialog("option", "position", { my: "center", at: "center", of: window });
}

function loadDeck(hashField) {
    $('label[for="loadDeckName"]').html('<strong>Deck:</strong>');
    loadDeckDialog.dialog("open");
    loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });

    loadDeckDialog.hashField = hashField;
}

function onDeckLoaded(newHash, hashField) {
    $(hashField).val(newHash).change();
}

var dark = false;
function toggleTheme() {
    if (dark) {
        $("#theme").attr("href", "dist/light.min.css");
        $("#toggleTheme").val("Dark Theme");
    } else {
        $("#theme").attr("href", "dist/dark.min.css");
        $("#toggleTheme").val("Light Theme");
    }
    dark = !dark;
};"use strict";

var deckPopupDialog;
var base64 = require('base64');
var urlHelpers = require('urlHelpers');
var loadDeck = require('loadDeck');
var debugLog = require('debugLog');

window.addEventListener('error', function (message, url, lineNumber) {
	var errorDescription = "JavaScript error:\n " + message + "\n on line " + lineNumber + "\n for " + url;

	window.sa('send', 'exception', {
		'exDescription': errorDescription,
		'exFatal': false
	});

	if (lineNumber === 0) {
		var msg = "<br><br><i>Error Message:</i><br><br>" +
			"<i>It appears you're having trouble loading SimSpellstone. " +
			"Thanks.</i><br><br>";
		if (outp) {
			outp(msg);
		} else {
			document.write(msg);
		}
		return 1;
	}

	errorDescription += "\n";
	errorDescription += "Browser CodeName: " + navigator.appCodeName + "\n";
	errorDescription += "Browser Name: " + navigator.appName + "\n";
	errorDescription += "Browser Version: " + navigator.appVersion + "\n";
	errorDescription += "Cookies Enabled: " + navigator.cookieEnabled + "\n";
	errorDescription += "Platform: " + navigator.platform + "\n";
	errorDescription += "User-agent header: " + navigator.userAgent + "\n";
	errorDescription += "SimSpellstone version: " + text_version + "\n";

	if (getdeck) errorDescription += "Deck hash: " + getdeck + "\n";
	if (getcardlist) errorDescription += "Card list: " + getcardlist + "\n";
	if (getordered) errorDescription += "Ordered: Yes\n";
	if (getexactorder) errorDescription += "Exact-order: Yes\n";
	if (surge) errorDescription += "Surge: Yes\n";
	if (getdeck2) errorDescription += "Enemy deck hash: " + getdeck2 + "\n";
	if (getcardlist2) errorDescription += "Enemy Card list: " + getcardlist2 + "\n";
	if (getordered2) errorDescription += "Enemy Ordered: Yes\n";
	if (getexactorder2) errorDescription += "Enemy Exact-order: Yes\n";
	if (getmission) errorDescription += "Mission ID: " + getmission + "\n";
	if (getraid) errorDescription += "Raid ID: " + getraid + "\n";
	if (getbattleground) errorDescription += "Battleground ID: " + getbattleground + "\n";
	if (games) errorDescription += "Sims run so far: " + games + "\n";

	outp("<br><br><i>Error Message:</i><br><textarea cols=50 rows=6 onclick=\"this.select()\"><blockquote>" + errorDescription + "</blockquote></textarea>" + echo);

	// Stop the recursion if any
	if (current_timeout) clearTimeout(current_timeout);
});

// When Page Loads...
function processQueryString() {

	$("#header").load("templates/header.html", function () {
		if (typeof showTutorial !== "undefined") {
			$("#help").click(showTutorial);
		}
	});
	$.holdReady(true);
	$("#footer").load("templates/footer.html", function () {
		$.holdReady(false);
	});

	var ui = document.getElementById('ui');
	if (!ui) return 0;

	var $scope = angular.element(document.getElementById('ui')).scope();

	$("#generate_link").on("click", display_generated_link);

	$("#btn_simulate").on("click", SIM_CONTROLLER.startsim);
	$("#btnStop").on("click", SIM_CONTROLLER.stopsim);

	$("#display_history").on("click", display_history);

	$('#deck1').val(urlHelpers.paramValue('deck1')).change();
	$('#deck2').val(urlHelpers.paramValue('deck2')).change();

	$('#surge').prop("checked", urlHelpers.paramDefined("surge"));
	$('#siege').prop("checked", urlHelpers.paramDefined("siege"));
	var tower_level = Math.min(Math.max(urlHelpers.paramValue('tower_level') || 18, 0), 18);
	$('#tower_level').val(tower_level);

	var tower_type = (urlHelpers.paramValue('tower_type') || 501);
	$("#tower_type").val(tower_type);

	$('#auto_mode').prop("checked", urlHelpers.paramDefined("auto_mode"));
	$('#tournament').prop("checked", urlHelpers.paramDefined("tournament"));
	$('#ordered').prop("checked", urlHelpers.paramDefined("ordered"));
	$('#exactorder').prop("checked", urlHelpers.paramDefined("exactorder"));

	$('#ordered2').prop("checked", urlHelpers.paramDefined("ordered2"));
	$('#exactorder2').prop("checked", urlHelpers.paramDefined("exactorder2"));
	if (urlHelpers.paramDefined("randomAI")) {
		pvpAI = false;
	}

	var locationID = urlHelpers.paramValue('location');
	var campaignID = urlHelpers.paramValue('campaign');
	var missionID = urlHelpers.paramValue('mission');
	var raidID = urlHelpers.paramValue('raid');
	if (locationID) $('#location').val(locationID).change();
	if (campaignID) {
		if (!locationID) {
			locationID = CAMPAIGNS[campaignID].location_id;
			$('#location').val(locationID).change();
		}
		$('#campaign').val(campaignID).change();
	}
	if (missionID) {
		$('#mission_level').val(urlHelpers.paramValue('mission_level') || 7);
		$('#mission').val(missionID).change();
	}
	if (raidID) {
		$('#raid_level').val(urlHelpers.paramValue('raid_level') || 25);
		$('#raid').val(raidID).change();
	}

	if (urlHelpers.paramDefined("bges")) {
		var bges = urlHelpers.paramValue('bges');
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64.toDecimal(bges.substring(i, i + 2));
			$("#battleground_" + bge).prop('checked', true);
		}
	} else {
		// Load current battlegrounds
		var bgCheckBoxes = document.getElementsByName("battleground");
		for (var i = 0; i < current_bges.length; i++) {
			$("#battleground_" + current_bges[i]).prop('checked', true);
		}
	}
	var bges = urlHelpers.paramValue('selfbges');
	if (bges) {
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64.toDecimal(bges.substring(i, i + 2)) + 10000;
			$("#self-battleground_" + bge).prop('checked', true);
		}
	}
	var bges = urlHelpers.paramValue('enemybges');
	if (bges) {
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64.toDecimal(bges.substring(i, i + 2)) + 10000;
			$("#enemy-battleground_" + bge).prop('checked', true);
		}
	}

	var mapBges = urlHelpers.paramValue("mapBges");
	if (mapBges) {
		setSelectedMapBattlegrounds(mapBges);
	}

	$("#battleground").change();

	$('#sims').val(urlHelpers.paramValue('sims') || 10000);

	if (urlHelpers.paramDefined("debug")) $('#debug').click();
	if (urlHelpers.paramDefined("mass_debug")) $('#mass_debug').click();
	if (urlHelpers.paramDefined("loss_debug")) $('#loss_debug').click();
	if (urlHelpers.paramDefined("win_debug")) $('#win_debug').click();
	if (urlHelpers.paramDefined("play_debug")) $('#play_debug').click();

	document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

	if (urlHelpers.paramDefined('autostart') && !urlHelpers.paramDefined("latestCards")) {
		SIM_CONTROLLER.startsim(1);
	} else if (urlHelpers.paramDefined('unit_tests')) {
		var body = document.getElementsByTagName("body")[0];
		var script = document.createElement("script");
		script.src = "scripts/unit_tests.js";
		body.appendChild(script);
		script.onload = function () {
			var script = document.createElement("script");
			script.src = "scripts/unit_test_runner.js";
			body.appendChild(script);
		};
	}

	if (document.getElementById("missionDeckDialog")) {
		deckPopupDialog = $("#missionDeckDialog").dialog({
			autoOpen: false,
			minWidth: 500,
			minHeight: 20,
			modal: true,
			resizable: false,
			draggable: false,
			buttons: {
				Close: function () {
					deckPopupDialog.dialog("close");
				}
			},
			open: function (event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); }
		});
	}
}

var style;
var u_black = false;
function toggle_u() {
	var append = false;
	if (typeof style === 'undefined') {
		append = true;
		style = document.createElement('style');
	} else {
		while (style.hasChildNodes()) {
			style.removeChild(style.firstChild);
		}
	}
	var head = document.getElementsByTagName('head')[0];
	var rules;
	if (!u_black) {
		u_black = true;
		rules = document.createTextNode(
			'u { text-decoration: none; font-style:normal; color: #000000; font-weight: normal; }'
		);
	} else {
		u_black = false;
		rules = document.createTextNode(
			'u { text-decoration: none; font-style:normal; color: #dddddd; font-weight: normal; }'
		);
	}

	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = rules.nodeValue;
	} else {
		style.appendChild(rules);
	}
	if (append === true) head.appendChild(style);
}

function toggleUI(display) {
	if (display) {
		$("#ui").show();
	} else {
		$("#ui").hide();
	}
}

function showUI() {
	// Show interface
	toggleUI(true);
	// Hide stop button
	document.getElementById('stop').style.display = 'none';
}

function hideUI() {
	$(".accordion").accordion('option', 'active', null);
	// Hide interface
	toggleUI(false);
	// Display stop button
	document.getElementById('stop').style.display = 'block';
}

function getSelectedBattlegrounds(prefix) {
	prefix = (prefix || "");
	var getbattleground = [];
	var bgCheckBoxes = document.getElementsByName(prefix + "battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		var checkbox = bgCheckBoxes[i];
		if (checkbox && checkbox.checked) {
			getbattleground.push(checkbox.value);
		}
	}
	getbattleground = getbattleground.join();
	return getbattleground;
}

function getSelectedMapBattlegrounds() {
	var getbattleground = [];
	var locationID = $("#location").val();
	var selects = document.getElementsByName("map-battleground");
	for (var i = 0; i < selects.length; i++) {
		var select = selects[i];
		if (select.value > 0) {
			getbattleground.push(locationID + "-" + i + "-" + select.value);
		}
	}
	getbattleground = getbattleground.join();
	return getbattleground;
}

function setSelectedMapBattlegrounds(mapBgeString) {
	var selects = document.getElementsByName("map-battleground");
	for (var i = 0; i < mapBgeString.length && i < selects.length; i++) {
		selects[i].value = mapBgeString[i];
	}
}

// Modify HTML to output simulation results
function outp(text) {
	$("#content").html(text);
}

function outputTurns(turnData) {
	if (closeDiv) {
		turnData += "</div>";
		closeDiv = false;
	}
	turnData = "<input id='show-turns' type='button' value='Show All' /> <div id='turn-container'>Turn: <select id='turn-picker'></select></div> <div>" + turnData + "</div>";
	outp(turnData);
	var numTurns = $(".turn-info").hide().length;
	var options = [];
	for (var i = 0; i < numTurns; i++) {
		var turn = i + 1;
		options.push("<option value='" + i + "'>" + turn + "</option>");
	}
	var lastTurn = i - 1;
	if (lastTurn && closeDiv) lastTurn--;
	$("#turn-picker").append(options).change(function (event) {
		var turn = event.target.selectedIndex;
		$(".turn-info").hide().eq(turn).show();
	}).val(lastTurn).change();
	var hidden = true;
	$("#show-turns").click(function () {
		hidden = !hidden;
		if (hidden) {
			var turn = $("#turn-picker").val();
			$(".turn-info").hide().eq(turn).show();
			$("#turn-container").show();
			this.value = "Show All";
		} else {
			$(".turn-info").show();
			$("#turn-container").hide();
			this.value = "Show One";
		}
	});
}

// Return table of simulation results
function showWinrate() {

	if (suppressOutput) {
	} else if (debugLog.enabled || sims_left == 0) {
		// Generate links
		var links = '';
		links += '<br>' +
			'<br>' +
			'<i>Non-autostart link</i>' +
			'<br>' +
			'<a href="' + generate_link() + '">' + generate_link() + '</a>' +
			'<br>' +
			'<br>' +
			'<i>Autostart link</i>' +
			'<br>' +
			'<a href="' + generate_link(1) + '">' + generate_link(1) + '</a>' +
			'<br>' +
			'<br>';
		if (debugLog.enabled) return links;
	}
	// Win/Loss ratios
	var winPercent = wins / games;
	var winrate = (winPercent * 100).toFixed(2) + "%";
	$("#wins").html(wins);
	$("#winrate").html(winrate);

	var lossrate = losses / games * 100;
	lossrate = lossrate.toFixed(2) + "%";
	$("#losses").html(losses);
	$("#lossrate").html(lossrate);

	var drawrate = draws / games * 100;
	drawrate = drawrate.toFixed(2) + "%";
	$("#draws").html(draws);
	$("#drawrate").html(drawrate);

	var mErr = marginOfError(wins, games);
	$("#marginGames").html((mErr * games).toFixed(0));
	mErr = mErr.toFixed(2) + "%";
	$("#marginPercent").html(mErr);

	var totalSims = games + sims_left;
	var percentComplete = (games * 100 / totalSims).toFixed("2") + "%";
	$(".battleCount").html(games);
	$("#percentComplete").html(percentComplete);

	// Calculate Average length of battle
	$("#avgLength").html((total_turns / games).toFixed(1));

	$("#avgPoints").html((points / games).toFixed(2));

	$("#winrateTable").show();
	// Final output
	var full_table = "";
	if (sims_left == 0) {
		// Add generated links to final output
		full_table += links;

		// Append results to history

		var current_deck = '';
		var deck = [];
		var deck1Hash = document.getElementById('deck1').value;

		// Load player deck
		if (deck1Hash) {
			deck.player = base64.decodeHash(deck1Hash);
		}
		if (deck.player) {
			current_deck = base64.encodeHash(deck.player);
		}

		//battle_history += winrate + '% (+/- ' + stdDev + '%) &nbsp; &nbsp; ' + current_deck + '<br>';
		battle_history += winrate + ' (+/- ' + mErr + ') &nbsp; &nbsp; ' + current_deck + '<br>';
	}

	return full_table;
}

function hideTable() {
	$("#winrateTable").hide();
}

function setSimStatus(simStatusMsg, elapse, simsPerSec) {
	$("#simStatusMsg").html(simStatusMsg);
	if (elapse && simsPerSec) {
		var totalSims = games + sims_left;
		var percentComplete = (games * 100 / totalSims).toFixed("2") + "%";
		var progress = ('(' + games + '/' + totalSims + ') ' + percentComplete);
		$("#progress").html(progress);
		$("#speed").show();
		$("#elapsed").html(elapse);
		$("#simsPerSec").html(simsPerSec);
	} else {
		$("#progress").html("");
		$("#speed").hide();
	}
	$("#simulationStatus").show();
}

function winrateDev(wins, games) {
	if (games <= 1) return 1;

	var p = wins / games;
	var N = games;
	var dev = Math.sqrt(N * p * (1 - p));
	return dev;
}

// http://onlinestatbook.com/2/estimation/proportion_ci.html
function marginOfError(wins, games) {
	if (games <= 1) return 1;

	var p = wins / games;
	var N = games;
	var stdErr = Math.sqrt((p * (1 - p)) / N);
	var Z95 = 1.96;
	return ((stdErr * Z95) + 0.5 / N) * 100;
}

// Generate a link from current settings and input
function generate_link(autostart) {

	var d = 0;
	var deck = [];

	var url_base = document.URL;
	var index_of_query = url_base.indexOf('?');
	if (index_of_query > 0) {
		url_base = url_base.substring(0, index_of_query);
	}

	var parameters = [];
	addValueParam(parameters, "deck1");
	addValueParam(parameters, "deck2");

	addValueParam(parameters, "location");
	addValueParam(parameters, "campaign");
	addValueParam(parameters, "mission");
	addValueParam(parameters, "mission_level");
	addValueParam(parameters, "raid");
	addValueParam(parameters, "raid_level");
	var mapBges = $('select[name=map-battleground]').toArray().reduce(function (acc, val) { return acc + val.value; }, "");
	if (mapBges.length) {
		parameters.push('mapBges=' + mapBges);
	}

	addBoolParam(parameters, "surge");

	if (addBoolParam(parameters, "siege")) {
		addValueParam(parameters, "tower_level");
		addValueParam(parameters, "tower_type");
	}

	addBoolParam(parameters, "auto_mode");
	addBoolParam(parameters, "tournament");
	addBoolParam(parameters, "ordered");
	addBoolParam(parameters, "exactorder");
	addBoolParam(parameters, "ordered2");
	addBoolParam(parameters, "exactorder2");

	var bges = '';
	var bgCheckBoxes = document.getElementsByName("battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		d = bgCheckBoxes[i];
		if (d.checked) bges += base64.fromDecimal(d.value, 2);
	}
	parameters.push('bges=' + bges);

	var bges = '';
	var bgCheckBoxes = document.getElementsByName("self-battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		d = bgCheckBoxes[i];
		if (d.checked) bges += base64.fromDecimal(d.value - 10000, 2);
	}
	if (bges) {
		parameters.push('selfbges=' + bges);
	}

	var bges = '';
	var bgCheckBoxes = document.getElementsByName("enemy-battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		d = bgCheckBoxes[i];
		if (d.checked) bges += base64.fromDecimal(d.value - 10000, 2);
	}
	if (bges) {
		parameters.push('enemybges=' + bges);
	}


	addValueParam(parameters, "sims");

	addBoolParam(parameters, "debug");
	addBoolParam(parameters, "mass_debug");
	addBoolParam(parameters, "loss_debug");
	addBoolParam(parameters, "win_debug");
	addBoolParam(parameters, "play_debug");

	if (autostart) {
		parameters.push('autostart');
	}

	if (parameters.length > 0) {
		return url_base + '?' + parameters.join('&');
	} else {
		return url_base;
	}
}

function addValueParam(params, paramName, fieldName) {
	var value = $("#" + (fieldName || paramName)).val();
	if (value) {
		params.push(paramName + "=" + value);
		return true;
	} else {
		return false;
	}
}

function addBoolParam(params, paramName) {
	var checked = $("#" + paramName).is(":checked");
	if (checked) {
		params.push(paramName);
		return true;
	} else {
		return false;
	}
}

var deckBuilders = {};
function load_deck_builder(player) {
	if (player === 'player') {
		var getdeck = $('#deck1').val();
		var getmission;
		var missionlevel;
		var getraid;
		var raidlevel;
	} else {
		var getdeck = $('#deck2').val();
		var getmission = $('#mission').val();
		var missionlevel = $('#mission_level').val();
		var getraid = $('#raid').val();
		var raidlevel = $('#raid_level').val();
	}

	// Load player deck
	if (getdeck) {
		deck = base64.decodeHash(getdeck);
	} else if (getmission) {
		deck = loadDeck.mission(getmission, missionlevel);
	} else if (getraid) {
		deck = loadDeck.raid(getraid, raidlevel);
	} else {
		deck = loadDeck.defaultDeck();
	}
	var hash = base64.encodeHash(deck);

	var name = (player == 'player' ? 'Player Deck' : 'Enemy Deck');
	var deckHashField = (player ? $("#" + (player == 'player' ? 'deck1' : 'deck2')) : null);

	var currentDeckBuilder = deckBuilders[player];
	if (currentDeckBuilder == null || currentDeckBuilder.closed) {
		deckBuilders[player] = open_deck_builder(name, hash, null, deckHashField);
	}
	else {
		currentDeckBuilder.focus();
	}
}

function open_deck_builder(name, hash, inventory, deckHashField) {
	var parameters = ["nosort"];
	if (hash) {
		parameters.push("hash=" + hash);
	}
	if (inventory) {
		parameters.push("inventory=" + inventory);
	}

	if (name) {
		parameters.push("name=" + name);
	}
	if (urlHelpers.paramDefined("ajax")) {
		parameters.push("ajax");
	}
	parameters.push("fromSim");

	var url = "DeckBuilder.html?" + parameters.join('&');

	var width = Math.min(screen.width, 1000);
	var height = Math.min(screen.height, 700);
	var left = Number((screen.width - width) / 2);
	var top = Number((screen.height - height) / 2);

	var windowFeatures = 'scrollbars,left=' + left + 'top=' + top + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
	var win = window.open(url, '', windowFeatures);

	// Push values to window once it has loaded
	$(win).load((function (deckHashField) {
		return function () {
			// Tie deck-builder back to the hash field in the simulator.
			if (deckHashField) win.updateSimulator = function (hash) { deckHashField.val(hash).change(); };
		};
	})(deckHashField));

	return win;
}

function display_generated_link() {
	outp('' +
		'<br>' +
		'<i>Non-autostart link</i>' +
		'<br>' +
		'<a href="' + generate_link() + '">' + generate_link() + '</a>' +
		'<br>' +
		'<br>' +
		'<i>Autostart link</i>' +
		'<br>' +
		'<a href="' + generate_link(1) + '">' + generate_link(1) + '</a>' +
		'<br>' +
		'<br>' +
		'');
}

function clear_history() {
	battle_history = '';
	display_history();
}

function display_history() {
	outp('' +
		'<br>' +
		'<hr>' +
		(battle_history || 'No history available.') +
		'<hr>' +
		'<br>' +
		'<br>' +
		'<input type="button" value="Clear History" onclick="clear_history();" style="text-align: center; font-weight: normal;">' +
		'<br>' +
		'<br>' +
		'');
}

// Initialize global variables
var battle_history = '';
var max_turns = 100;
var mass_debug = false;
var loss_debug = false;
var win_debug = false;
var found_desired = false;
var play_debug = false;
var showAnimations = false;
var getdeck = '';
var getdeck2 = '';
var getcardlist = '';
var getcardlist2 = '';
var getordered = false;
var getordered2 = false;
var getexactorder = false;
var getexactorder2 = false;
var getcampaign = 0;
var getmission = 0;
var missionlevel = 0;
var getraid = false;
var raidlevel = 0;
var getbattleground = '';
var enemybges = '';
var selfbges = '';
var mapbges = '';
var getsiege = 0;
var tower_level = 0;
var tower_type = 0;
var pvpAI = true;
var echo = '';
var closeDiv = false;
var wins = 0;
var losses = 0;
var draws = 0;
var games = 0;
var points = 0;
var num_sims = 0;
var last_games = [];
var sims_left = 0;
var current_timeout;
var surge = false;
var battleground = [];
var total_turns = 0;
var cache_player_deck;
var cache_cpu_deck;
var cache_player_deck_cards;
var cache_cpu_deck_cards;
var choice = undefined;
var auto_mode = false;
var tournament = false;
var suppressOutput = false;
var orders = {};
var cardStats = {};;function getTutorialScript() {
    var urlHelpers = require('urlHelpers');
    
    var tutorialParts = [
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Simulator."
       },
       {
           ui: "#setup-container",
           msg: 'Here is where you set everything up for a simulation.',
           actions: [showSetup]
       },
       {
           ui: "#setup-container",
           msg: 'When you are done, you can click the "Setup" bar to hide this section.',
           actions: [hideSetup]
       },
       {
           ui: "#setup-container",
           msg: 'Clicking it again will open it back up.',
           actions: [showSetup]
       },
       {
           ui: "#attacker-container",
           msg: 'Use this section to set up the deck for the attacker.'
       },
       {
           ui: "#edit-player",
           msg: 'Click "Edit" to open the DeckBuilder and create a deck.'
       },
       {
           ui: "#load-player",
           msg: 'Click "Load" to choose a deck from the ones you have saved in the DeckBuilder.'
       },
       {
           ui: "#attacker-hash-container",
           msg: 'If you have a deck hash, you can simply paste it here as well.'
       },
       {
           ui: "#attacker-advanced",
           msg: 'This section contains some additional settings for the attacker that determine how their deck is played.'
       },
       {
           ui: "#auto-container",
           msg: 'Check this to have fights run on auto, rather than playing them yourself.',
           showFor: "battle"
       },
       {
           ui: "#auto-container",
           msg: 'Setting the attacker to "auto" also enables the "Ordered" and "Do Not Shuffle" options.',
           showFor: "battle"
       },
       {
           ui: "#ordered-container",
           msg: 'Check this to have the AI attempt to play the attacker\'s deck as close as possible to the order that the cards are listed.'
       },
       {
           ui: "#exactorder-container",
           msg: 'Check this to disable shuffling of the attacker\'s deck.'
       },
       {
           ui: "#defender-container",
           msg: 'Use this section to set up the deck for the defender.'
       },
       {
           ui: "#defender-hash-container",
           msg: 'You can manually create a deck for the defender here.'
       },
       {
           ui: "#pve-container",
           msg: 'Or you can choose a PvE deck to sim against.',
           actions: [clearCampaign]
       },
       {
           ui: "#campaign-container",
           msg: 'To choose a campaign mission, first pick a Campaign from the dropdown...',
           actions: [chooseCampaign]
       },
       {
           ui: "#mission-container",
           msg: '... then pick a Mission from the mission dropdown.',
           actions: [clearRaid, chooseCampaign, chooseMission]
       },
       {
           ui: "#raid-container",
           msg: 'To fight against a raid boss, pick the desired Raid from the dropdown',
           actions: [clearCampaign, chooseRaid]
       },
       {
           ui: "#defender-advanced",
           msg: 'This section contains some additional settings for the defender that determine how their deck is played.',
           actions: [clearRaid]
       },
       {
           ui: "#surge-container",
           msg: 'Check this to have the defender go first.',
           showFor: "battle"
       },
       {
           ui: "#tower-container",
           msg: 'Use these fields to set up a tower for the defender.'
       },
       {
           ui: "#siege-container",
           msg: 'Check this field to turn the tower on.'
       },
       {
           ui: "#tower_level",
           msg: 'This field determines the BR of the defender.  The tower\'s level is one less than the defender\'s BR.'
       },
       {
           ui: "#tower_type",
           msg: 'This field determines which type of tower the defender will have.'
       },
       {
           ui: "#bge-container",
           msg: 'Check/uncheck boxes here to set active battleground effects.',
           actions: [hideView, showSetup]
       },
       {
           ui: "#view-container",
           msg: 'Click "View" to display the currently set decks for the attacker and defender.',
           actions: [hideSetup, showView]
       },
       {
           ui: "#view-container",
           msg: 'Click it again to hide it.',
           actions: [hideView]
       },
       {
           ui: "#sims-container",
           msg: 'This field determines how many fights to run.',
           showFor: "titans"
       },
       {
           ui: "#btn_simulate",
           msg: 'Click "Simulate" to run a batch of fights.',
           showFor: "titans"
       },
       {
           ui: "#btn_simulate",
           msg: 'Click "Battle" to start a fight.',
           showFor: "battle"
       },
       {
           ui: "#generate_link",
           msg: 'Click "Generate Link" to create a link that will open this tool with all of the current settings.'
       },
       {
           msg: 'To view this tutorial again at any time, you can click the "Help" button.  (Note: this will reset the Simulator.)'
       }
    ];

    var currentPage = urlHelpers.getCurrentPage();
    for (var i = 0; i < tutorialParts.length; i++) {
        var part = tutorialParts[i];
        if (part.showFor && part.showFor !== currentPage) {
            tutorialParts.splice(i--, 1);
        }
    }

    function hideSetup() {
        $("#setup-container").accordion('option', 'active', null);
    }

    function showSetup() {
        $("#setup-container").accordion('option', 'active', 0);
    }

    function hideView() {
        $("#view-container").accordion('option', 'active', null);
    }

    function showView() {
        $("#view-container").accordion('option', 'active', 0);
    }

    function chooseCampaign() {
        $('#campaign').val(1).change();
    }

    function chooseMission() {
        $('#mission').val(11).change();
    }

    function clearCampaign() {
        $('#campaign').val('').change();
    }

    function chooseRaid() {
        $('#raid').val(24005).change();
    }

    function clearRaid() {
        $('#raid').val('').change();
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
});;"use strict";

(function () {
    var cardUI = require('cardUI');

    SIM_CONTROLLER.end_sims_callback = function () {
        hideUI();   // Cheap hack to keep Setup hidden
        draw_match_end();
    };

    SIM_CONTROLLER.stop_sims_callback = draw_match_end;

    function draw_match_end() {
        cardUI.draw_cards(SIMULATOR.field);   // Draw battlefield with no hand
    }
})();

var battle_sim = true;;function getTutorialScript() {
    var urlHelpers = require('urlHelpers');
    
    var tutorialParts = [
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Live PvP functions.",
           actions: [showSetup, clearID]
       },
       {
           ui: "#attacker-hash-container",
           msg: 'First, set up your deck.'
       },
       {
           ui: "#self-battleground",
           msg: 'Then add any personal BGEs (totems) you want to use.',
           actions: [showSetup]
       },
       {
           ui: "#btn_simulate",
           msg: 'If you wish to be the defender, you\'re almost done.  Click "Ready" to start waiting for a battle request.',
           actions: [clickReady, clickStop, hideSetup]
       },
       {
           ui: "#myPeerID",
           msg: 'Then copy your ID and send it to your opponent (they will need this to connect to you).',
           actions: [clickReady]
       },
       {
           ui: "#btnStop",
           msg: 'Click "Stop" at any time to stop waiting and edit your settings again.',
           actions: [clickReady, hideSetup]
       },
       {
           msg: 'If you want to be the attacker, you are in charge of choosing the match type(s) and battleground effects.',
           actions: [clickStop, showSetup]
       },
       {
           ui: "#first-player-advantage-container",
           msg: 'This section lets you pick various options for dealing with "First-Player Advantage".'
       },
       {
           ui: "#surge-container",
           msg: 'This setting makes the defender go first.'
       },
       {
           ui: "#tournament-container",
           msg: 'This setting causes the attacker\'s first card to not tick down right away.'
       },
       {
           ui: "#tower-container",
           msg: 'These settings will provide the defender with the specified tower.'
       },
       {
           ui: "#battlefield-container",
           msg: 'Configure the desired battleground effects for the match here.'
       },
       {
           msg: "When you configured have the desired match settings, it is time to start the match.",
           actions: [clearID, showSetup]
       },
       {
           ui: "#enemyPeerID",
           msg: 'Paste your opponent\'s ID into the ID field.',
           actions: [setID, hideSetup]
       },
       {
           ui: "#btn_simulate",
           msg: 'Finally, click "Connect!" to start the fight.'
       }
    ];

    var currentPage = urlHelpers.getCurrentPage();
    for (var i = 0; i < tutorialParts.length; i++) {
        var part = tutorialParts[i];
        if (part.showFor && part.showFor !== currentPage) {
            tutorialParts.splice(i--, 1);
        }
    }
    
    function clickReady() {
        $("#btn_simulate").click();
    }

    function clickStop() {
        $("#btnStop").click();
    }

    function showSetup() {
        $("#setup-container").accordion('option', 'active', 0);
    }

    function hideSetup() {
        $("#setup-container").accordion('option', 'active', null);
    }

    function clearID() {
        $("#enemyPeerID").val("").change();
    }

    function setID() {
        var peerID = $("#myPeerID").val();
        peerID = peerID.split("").reverse().join("");
        $("#enemyPeerID").val(peerID).change();
    }

    return tutorialParts;
};/*! peerjs build:0.3.13, production. Copyright(c) 2013 Michelle Bu <michelle@michellebu.com> */!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){b.exports.RTCSessionDescription=window.RTCSessionDescription||window.mozRTCSessionDescription,b.exports.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,b.exports.RTCIceCandidate=window.RTCIceCandidate||window.mozRTCIceCandidate},{}],2:[function(a,b){function c(a,b,g){return this instanceof c?(e.call(this),this.options=d.extend({serialization:"binary",reliable:!1},g),this.open=!1,this.type="data",this.peer=a,this.provider=b,this.id=this.options.connectionId||c._idPrefix+d.randomToken(),this.label=this.options.label||this.id,this.metadata=this.options.metadata,this.serialization=this.options.serialization,this.reliable=this.options.reliable,this._buffer=[],this._buffering=!1,this.bufferSize=0,this._chunkedData={},this.options._payload&&(this._peerBrowser=this.options._payload.browser),void f.startConnection(this,this.options._payload||{originator:!0})):new c(a,b,g)}var d=a("./util"),e=a("eventemitter3"),f=a("./negotiator"),g=a("reliable");d.inherits(c,e),c._idPrefix="dc_",c.prototype.initialize=function(a){this._dc=this.dataChannel=a,this._configureDataChannel()},c.prototype._configureDataChannel=function(){var a=this;d.supports.sctp&&(this._dc.binaryType="arraybuffer"),this._dc.onopen=function(){d.log("Data channel connection success"),a.open=!0,a.emit("open")},!d.supports.sctp&&this.reliable&&(this._reliable=new g(this._dc,d.debug)),this._reliable?this._reliable.onmessage=function(b){a.emit("data",b)}:this._dc.onmessage=function(b){a._handleDataMessage(b)},this._dc.onclose=function(){d.log("DataChannel closed for:",a.peer),a.close()}},c.prototype._handleDataMessage=function(a){var b=this,c=a.data,e=c.constructor;if("binary"===this.serialization||"binary-utf8"===this.serialization){if(e===Blob)return void d.blobToArrayBuffer(c,function(a){c=d.unpack(a),b.emit("data",c)});if(e===ArrayBuffer)c=d.unpack(c);else if(e===String){var f=d.binaryStringToArrayBuffer(c);c=d.unpack(f)}}else"json"===this.serialization&&(c=JSON.parse(c));if(c.__peerData){var g=c.__peerData,h=this._chunkedData[g]||{data:[],count:0,total:c.total};return h.data[c.n]=c.data,h.count+=1,h.total===h.count&&(delete this._chunkedData[g],c=new Blob(h.data),this._handleDataMessage({data:c})),void(this._chunkedData[g]=h)}this.emit("data",c)},c.prototype.close=function(){this.open&&(this.open=!1,f.cleanup(this),this.emit("close"))},c.prototype.send=function(a,b){if(!this.open)return void this.emit("error",new Error("Connection is not open. You should listen for the `open` event before sending messages."));if(this._reliable)return void this._reliable.send(a);var c=this;if("json"===this.serialization)this._bufferedSend(JSON.stringify(a));else if("binary"===this.serialization||"binary-utf8"===this.serialization){var e=d.pack(a),f=d.chunkedBrowsers[this._peerBrowser]||d.chunkedBrowsers[d.browser];if(f&&!b&&e.size>d.chunkedMTU)return void this._sendChunks(e);d.supports.sctp?d.supports.binaryBlob?this._bufferedSend(e):d.blobToArrayBuffer(e,function(a){c._bufferedSend(a)}):d.blobToBinaryString(e,function(a){c._bufferedSend(a)})}else this._bufferedSend(a)},c.prototype._bufferedSend=function(a){(this._buffering||!this._trySend(a))&&(this._buffer.push(a),this.bufferSize=this._buffer.length)},c.prototype._trySend=function(a){try{this._dc.send(a)}catch(b){this._buffering=!0;var c=this;return setTimeout(function(){c._buffering=!1,c._tryBuffer()},100),!1}return!0},c.prototype._tryBuffer=function(){if(0!==this._buffer.length){var a=this._buffer[0];this._trySend(a)&&(this._buffer.shift(),this.bufferSize=this._buffer.length,this._tryBuffer())}},c.prototype._sendChunks=function(a){for(var b=d.chunk(a),c=0,e=b.length;e>c;c+=1){var a=b[c];this.send(a,!0)}},c.prototype.handleMessage=function(a){var b=a.payload;switch(a.type){case"ANSWER":this._peerBrowser=b.browser,f.handleSDP(a.type,this,b.sdp);break;case"CANDIDATE":f.handleCandidate(this,b.candidate);break;default:d.warn("Unrecognized message type:",a.type,"from peer:",this.peer)}},b.exports=c},{"./negotiator":5,"./util":8,eventemitter3:9,reliable:12}],3:[function(a){window.Socket=a("./socket"),window.MediaConnection=a("./mediaconnection"),window.DataConnection=a("./dataconnection"),window.Peer=a("./peer"),window.RTCPeerConnection=a("./adapter").RTCPeerConnection,window.RTCSessionDescription=a("./adapter").RTCSessionDescription,window.RTCIceCandidate=a("./adapter").RTCIceCandidate,window.Negotiator=a("./negotiator"),window.util=a("./util"),window.BinaryPack=a("js-binarypack")},{"./adapter":1,"./dataconnection":2,"./mediaconnection":4,"./negotiator":5,"./peer":6,"./socket":7,"./util":8,"js-binarypack":10}],4:[function(a,b){function c(a,b,g){return this instanceof c?(e.call(this),this.options=d.extend({},g),this.open=!1,this.type="media",this.peer=a,this.provider=b,this.metadata=this.options.metadata,this.localStream=this.options._stream,this.id=this.options.connectionId||c._idPrefix+d.randomToken(),void(this.localStream&&f.startConnection(this,{_stream:this.localStream,originator:!0}))):new c(a,b,g)}var d=a("./util"),e=a("eventemitter3"),f=a("./negotiator");d.inherits(c,e),c._idPrefix="mc_",c.prototype.addStream=function(a){d.log("Receiving stream",a),this.remoteStream=a,this.emit("stream",a)},c.prototype.handleMessage=function(a){var b=a.payload;switch(a.type){case"ANSWER":f.handleSDP(a.type,this,b.sdp),this.open=!0;break;case"CANDIDATE":f.handleCandidate(this,b.candidate);break;default:d.warn("Unrecognized message type:",a.type,"from peer:",this.peer)}},c.prototype.answer=function(a){if(this.localStream)return void d.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");this.options._payload._stream=a,this.localStream=a,f.startConnection(this,this.options._payload);for(var b=this.provider._getMessages(this.id),c=0,e=b.length;e>c;c+=1)this.handleMessage(b[c]);this.open=!0},c.prototype.close=function(){this.open&&(this.open=!1,f.cleanup(this),this.emit("close"))},b.exports=c},{"./negotiator":5,"./util":8,eventemitter3:9}],5:[function(a,b){var c=a("./util"),d=a("./adapter").RTCPeerConnection,e=a("./adapter").RTCSessionDescription,f=a("./adapter").RTCIceCandidate,g={pcs:{data:{},media:{}},queue:[]};g._idPrefix="pc_",g.startConnection=function(a,b){var d=g._getPeerConnection(a,b);if("media"===a.type&&b._stream&&d.addStream(b._stream),a.pc=a.peerConnection=d,b.originator){if("data"===a.type){var e={};c.supports.sctp||(e={reliable:b.reliable});var f=d.createDataChannel(a.label,e);a.initialize(f)}c.supports.onnegotiationneeded||g._makeOffer(a)}else g.handleSDP("OFFER",a,b.sdp)},g._getPeerConnection=function(a,b){g.pcs[a.type]||c.error(a.type+" is not a valid connection type. Maybe you overrode the `type` property somewhere."),g.pcs[a.type][a.peer]||(g.pcs[a.type][a.peer]={});{var d;g.pcs[a.type][a.peer]}return b.pc&&(d=g.pcs[a.type][a.peer][b.pc]),d&&"stable"===d.signalingState||(d=g._startPeerConnection(a)),d},g._startPeerConnection=function(a){c.log("Creating RTCPeerConnection.");var b=g._idPrefix+c.randomToken(),e={};"data"!==a.type||c.supports.sctp?"media"===a.type&&(e={optional:[{DtlsSrtpKeyAgreement:!0}]}):e={optional:[{RtpDataChannels:!0}]};var f=new d(a.provider.options.config,e);return g.pcs[a.type][a.peer][b]=f,g._setupListeners(a,f,b),f},g._setupListeners=function(a,b){var d=a.peer,e=a.id,f=a.provider;c.log("Listening for ICE candidates."),b.onicecandidate=function(b){b.candidate&&(c.log("Received ICE candidates for:",a.peer),f.socket.send({type:"CANDIDATE",payload:{candidate:b.candidate,type:a.type,connectionId:a.id},dst:d}))},b.oniceconnectionstatechange=function(){switch(b.iceConnectionState){case"disconnected":case"failed":c.log("iceConnectionState is disconnected, closing connections to "+d),a.close();break;case"completed":b.onicecandidate=c.noop}},b.onicechange=b.oniceconnectionstatechange,c.log("Listening for `negotiationneeded`"),b.onnegotiationneeded=function(){c.log("`negotiationneeded` triggered"),"stable"==b.signalingState?g._makeOffer(a):c.log("onnegotiationneeded triggered when not stable. Is another connection being established?")},c.log("Listening for data channel"),b.ondatachannel=function(a){c.log("Received data channel");var b=a.channel,g=f.getConnection(d,e);g.initialize(b)},c.log("Listening for remote stream"),b.onaddstream=function(a){c.log("Received remote stream");var b=a.stream,g=f.getConnection(d,e);"media"===g.type&&g.addStream(b)}},g.cleanup=function(a){c.log("Cleaning up PeerConnection to "+a.peer);var b=a.pc;!b||"closed"===b.readyState&&"closed"===b.signalingState||(b.close(),a.pc=null)},g._makeOffer=function(a){var b=a.pc;b.createOffer(function(d){c.log("Created offer."),!c.supports.sctp&&"data"===a.type&&a.reliable&&(d.sdp=Reliable.higherBandwidthSDP(d.sdp)),b.setLocalDescription(d,function(){c.log("Set localDescription: offer","for:",a.peer),a.provider.socket.send({type:"OFFER",payload:{sdp:d,type:a.type,label:a.label,connectionId:a.id,reliable:a.reliable,serialization:a.serialization,metadata:a.metadata,browser:c.browser},dst:a.peer})},function(b){a.provider.emitError("webrtc",b),c.log("Failed to setLocalDescription, ",b)})},function(b){a.provider.emitError("webrtc",b),c.log("Failed to createOffer, ",b)},a.options.constraints)},g._makeAnswer=function(a){var b=a.pc;b.createAnswer(function(d){c.log("Created answer."),!c.supports.sctp&&"data"===a.type&&a.reliable&&(d.sdp=Reliable.higherBandwidthSDP(d.sdp)),b.setLocalDescription(d,function(){c.log("Set localDescription: answer","for:",a.peer),a.provider.socket.send({type:"ANSWER",payload:{sdp:d,type:a.type,connectionId:a.id,browser:c.browser},dst:a.peer})},function(b){a.provider.emitError("webrtc",b),c.log("Failed to setLocalDescription, ",b)})},function(b){a.provider.emitError("webrtc",b),c.log("Failed to create answer, ",b)})},g.handleSDP=function(a,b,d){d=new e(d);var f=b.pc;c.log("Setting remote description",d),f.setRemoteDescription(d,function(){c.log("Set remoteDescription:",a,"for:",b.peer),"OFFER"===a&&g._makeAnswer(b)},function(a){b.provider.emitError("webrtc",a),c.log("Failed to setRemoteDescription, ",a)})},g.handleCandidate=function(a,b){var d=b.candidate,e=b.sdpMLineIndex;a.pc.addIceCandidate(new f({sdpMLineIndex:e,candidate:d})),c.log("Added ICE candidate for:",a.peer)},b.exports=g},{"./adapter":1,"./util":8}],6:[function(a,b){function c(a,b){return this instanceof c?(e.call(this),a&&a.constructor==Object?(b=a,a=void 0):a&&(a=a.toString()),b=d.extend({debug:0,host:d.CLOUD_HOST,port:d.CLOUD_PORT,key:"peerjs",path:"/",token:d.randomToken(),config:d.defaultConfig},b),this.options=b,"/"===b.host&&(b.host=window.location.hostname),"/"!==b.path[0]&&(b.path="/"+b.path),"/"!==b.path[b.path.length-1]&&(b.path+="/"),void 0===b.secure&&b.host!==d.CLOUD_HOST&&(b.secure=d.isSecure()),b.logFunction&&d.setLogFunction(b.logFunction),d.setLogLevel(b.debug),d.supports.audioVideo||d.supports.data?d.validateId(a)?d.validateKey(b.key)?b.secure&&"0.peerjs.com"===b.host?void this._delayedAbort("ssl-unavailable","The cloud server currently does not support HTTPS. Please run your own PeerServer to use HTTPS."):(this.destroyed=!1,this.disconnected=!1,this.open=!1,this.connections={},this._lostMessages={},this._initializeServerConnection(),void(a?this._initialize(a):this._retrieveId())):void this._delayedAbort("invalid-key",'API KEY "'+b.key+'" is invalid'):void this._delayedAbort("invalid-id",'ID "'+a+'" is invalid'):void this._delayedAbort("browser-incompatible","The current browser does not support WebRTC")):new c(a,b)}var d=a("./util"),e=a("eventemitter3"),f=a("./socket"),g=a("./mediaconnection"),h=a("./dataconnection");d.inherits(c,e),c.prototype._initializeServerConnection=function(){var a=this;this.socket=new f(this.options.secure,this.options.host,this.options.port,this.options.path,this.options.key),this.socket.on("message",function(b){a._handleMessage(b)}),this.socket.on("error",function(b){a._abort("socket-error",b)}),this.socket.on("disconnected",function(){a.disconnected||(a.emitError("network","Lost connection to server."),a.disconnect())}),this.socket.on("close",function(){a.disconnected||a._abort("socket-closed","Underlying socket is already closed.")})},c.prototype._retrieveId=function(){var a=this,b=new XMLHttpRequest,c=this.options.secure?"https://":"http://",e=c+this.options.host+":"+this.options.port+this.options.path+this.options.key+"/id",f="?ts="+(new Date).getTime()+Math.random();e+=f,b.open("get",e,!0),b.onerror=function(b){d.error("Error retrieving ID",b);var c="";"/"===a.options.path&&a.options.host!==d.CLOUD_HOST&&(c=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),a._abort("server-error","Could not get an ID from the server."+c)},b.onreadystatechange=function(){return 4===b.readyState?200!==b.status?void b.onerror():void a._initialize(b.responseText):void 0},b.send(null)},c.prototype._initialize=function(a){this.id=a,this.socket.start(this.id,this.options.token)},c.prototype._handleMessage=function(a){var b,c=a.type,e=a.payload,f=a.src;switch(c){case"OPEN":this.emit("open",this.id),this.open=!0;break;case"ERROR":this._abort("server-error",e.msg);break;case"ID-TAKEN":this._abort("unavailable-id","ID `"+this.id+"` is taken");break;case"INVALID-KEY":this._abort("invalid-key",'API KEY "'+this.options.key+'" is invalid');break;case"LEAVE":d.log("Received leave message from",f),this._cleanupPeer(f);break;case"EXPIRE":this.emitError("peer-unavailable","Could not connect to peer "+f);break;case"OFFER":var i=e.connectionId;if(b=this.getConnection(f,i))d.warn("Offer received for existing Connection ID:",i);else{if("media"===e.type)b=new g(f,this,{connectionId:i,_payload:e,metadata:e.metadata}),this._addConnection(f,b),this.emit("call",b);else{if("data"!==e.type)return void d.warn("Received malformed connection type:",e.type);b=new h(f,this,{connectionId:i,_payload:e,metadata:e.metadata,label:e.label,serialization:e.serialization,reliable:e.reliable}),this._addConnection(f,b),this.emit("connection",b)}for(var j=this._getMessages(i),k=0,l=j.length;l>k;k+=1)b.handleMessage(j[k])}break;default:if(!e)return void d.warn("You received a malformed message from "+f+" of type "+c);var m=e.connectionId;b=this.getConnection(f,m),b&&b.pc?b.handleMessage(a):m?this._storeMessage(m,a):d.warn("You received an unrecognized message:",a)}},c.prototype._storeMessage=function(a,b){this._lostMessages[a]||(this._lostMessages[a]=[]),this._lostMessages[a].push(b)},c.prototype._getMessages=function(a){var b=this._lostMessages[a];return b?(delete this._lostMessages[a],b):[]},c.prototype.connect=function(a,b){if(this.disconnected)return d.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError("disconnected","Cannot connect to new Peer after disconnecting from server.");var c=new h(a,this,b);return this._addConnection(a,c),c},c.prototype.call=function(a,b,c){if(this.disconnected)return d.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError("disconnected","Cannot connect to new Peer after disconnecting from server.");if(!b)return void d.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");c=c||{},c._stream=b;var e=new g(a,this,c);return this._addConnection(a,e),e},c.prototype._addConnection=function(a,b){this.connections[a]||(this.connections[a]=[]),this.connections[a].push(b)},c.prototype.getConnection=function(a,b){var c=this.connections[a];if(!c)return null;for(var d=0,e=c.length;e>d;d++)if(c[d].id===b)return c[d];return null},c.prototype._delayedAbort=function(a,b){var c=this;d.setZeroTimeout(function(){c._abort(a,b)})},c.prototype._abort=function(a,b){d.error("Aborting!"),this._lastServerId?this.disconnect():this.destroy(),this.emitError(a,b)},c.prototype.emitError=function(a,b){d.error("Error:",b),"string"==typeof b&&(b=new Error(b)),b.type=a,this.emit("error",b)},c.prototype.destroy=function(){this.destroyed||(this._cleanup(),this.disconnect(),this.destroyed=!0)},c.prototype._cleanup=function(){if(this.connections)for(var a=Object.keys(this.connections),b=0,c=a.length;c>b;b++)this._cleanupPeer(a[b]);this.emit("close")},c.prototype._cleanupPeer=function(a){for(var b=this.connections[a],c=0,d=b.length;d>c;c+=1)b[c].close()},c.prototype.disconnect=function(){var a=this;d.setZeroTimeout(function(){a.disconnected||(a.disconnected=!0,a.open=!1,a.socket&&a.socket.close(),a.emit("disconnected",a.id),a._lastServerId=a.id,a.id=null)})},c.prototype.reconnect=function(){if(this.disconnected&&!this.destroyed)d.log("Attempting reconnection to server with ID "+this._lastServerId),this.disconnected=!1,this._initializeServerConnection(),this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error("Peer "+this.id+" cannot reconnect because it is not disconnected from the server!");d.error("In a hurry? We're still trying to make the initial connection!")}},c.prototype.listAllPeers=function(a){a=a||function(){};var b=this,c=new XMLHttpRequest,e=this.options.secure?"https://":"http://",f=e+this.options.host+":"+this.options.port+this.options.path+this.options.key+"/peers",g="?ts="+(new Date).getTime()+Math.random();f+=g,c.open("get",f,!0),c.onerror=function(){b._abort("server-error","Could not get peers from the server."),a([])},c.onreadystatechange=function(){if(4===c.readyState){if(401===c.status){var e="";throw e=b.options.host!==d.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",a([]),new Error("It doesn't look like you have permission to list peers IDs. "+e)}a(200!==c.status?[]:JSON.parse(c.responseText))}},c.send(null)},b.exports=c},{"./dataconnection":2,"./mediaconnection":4,"./socket":7,"./util":8,eventemitter3:9}],7:[function(a,b){function c(a,b,d,f,g){if(!(this instanceof c))return new c(a,b,d,f,g);e.call(this),this.disconnected=!1,this._queue=[];var h=a?"https://":"http://",i=a?"wss://":"ws://";this._httpUrl=h+b+":"+d+f+g,this._wsUrl=i+b+":"+d+f+"peerjs?key="+g}var d=a("./util"),e=a("eventemitter3");d.inherits(c,e),c.prototype.start=function(a,b){this.id=a,this._httpUrl+="/"+a+"/"+b,this._wsUrl+="&id="+a+"&token="+b,this._startXhrStream(),this._startWebSocket()},c.prototype._startWebSocket=function(){var a=this;this._socket||(this._socket=new WebSocket(this._wsUrl),this._socket.onmessage=function(b){try{var c=JSON.parse(b.data)}catch(e){return void d.log("Invalid server message",b.data)}a.emit("message",c)},this._socket.onclose=function(){d.log("Socket closed."),a.disconnected=!0,a.emit("disconnected")},this._socket.onopen=function(){a._timeout&&(clearTimeout(a._timeout),setTimeout(function(){a._http.abort(),a._http=null},5e3)),a._sendQueuedMessages(),d.log("Socket open")})},c.prototype._startXhrStream=function(a){try{var b=this;this._http=new XMLHttpRequest,this._http._index=1,this._http._streamIndex=a||0,this._http.open("post",this._httpUrl+"/id?i="+this._http._streamIndex,!0),this._http.onerror=function(){clearTimeout(b._timeout),b.emit("disconnected")},this._http.onreadystatechange=function(){2==this.readyState&&this.old?(this.old.abort(),delete this.old):this.readyState>2&&200===this.status&&this.responseText&&b._handleStream(this)},this._http.send(null),this._setHTTPTimeout()}catch(c){d.log("XMLHttpRequest not available; defaulting to WebSockets")}},c.prototype._handleStream=function(a){var b=a.responseText.split("\n");if(a._buffer)for(;a._buffer.length>0;){var c=a._buffer.shift(),e=b[c];try{e=JSON.parse(e)}catch(f){a._buffer.shift(c);break}this.emit("message",e)}var g=b[a._index];if(g)if(a._index+=1,a._index===b.length)a._buffer||(a._buffer=[]),a._buffer.push(a._index-1);else{try{g=JSON.parse(g)}catch(f){return void d.log("Invalid server message",g)}this.emit("message",g)}},c.prototype._setHTTPTimeout=function(){var a=this;this._timeout=setTimeout(function(){var b=a._http;a._wsOpen()?b.abort():(a._startXhrStream(b._streamIndex+1),a._http.old=b)},25e3)},c.prototype._wsOpen=function(){return this._socket&&1==this._socket.readyState},c.prototype._sendQueuedMessages=function(){for(var a=0,b=this._queue.length;b>a;a+=1)this.send(this._queue[a])},c.prototype.send=function(a){if(!this.disconnected){if(!this.id)return void this._queue.push(a);if(!a.type)return void this.emit("error","Invalid message");var b=JSON.stringify(a);if(this._wsOpen())this._socket.send(b);else{var c=new XMLHttpRequest,d=this._httpUrl+"/"+a.type.toLowerCase();c.open("post",d,!0),c.setRequestHeader("Content-Type","application/json"),c.send(b)}}},c.prototype.close=function(){!this.disconnected&&this._wsOpen()&&(this._socket.close(),this.disconnected=!0)},b.exports=c},{"./util":8,eventemitter3:9}],8:[function(a,b){var c={iceServers:[{url:"stun:stun.l.google.com:19302"}]},d=1,e=a("js-binarypack"),f=a("./adapter").RTCPeerConnection,g={noop:function(){},CLOUD_HOST:"0.peerjs.com",CLOUD_PORT:9e3,chunkedBrowsers:{Chrome:1},chunkedMTU:16300,logLevel:0,setLogLevel:function(a){var b=parseInt(a,10);g.logLevel=isNaN(parseInt(a,10))?a?3:0:b,g.log=g.warn=g.error=g.noop,g.logLevel>0&&(g.error=g._printWith("ERROR")),g.logLevel>1&&(g.warn=g._printWith("WARNING")),g.logLevel>2&&(g.log=g._print)},setLogFunction:function(a){a.constructor!==Function?g.warn("The log function you passed in is not a function. Defaulting to regular logs."):g._print=a},_printWith:function(a){return function(){var b=Array.prototype.slice.call(arguments);b.unshift(a),g._print.apply(g,b)}},_print:function(){var a=!1,b=Array.prototype.slice.call(arguments);b.unshift("PeerJS: ");for(var c=0,d=b.length;d>c;c++)b[c]instanceof Error&&(b[c]="("+b[c].name+") "+b[c].message,a=!0);a?console.error.apply(console,b):console.log.apply(console,b)},defaultConfig:c,browser:function(){return window.mozRTCPeerConnection?"Firefox":window.webkitRTCPeerConnection?"Chrome":window.RTCPeerConnection?"Supported":"Unsupported"}(),supports:function(){if("undefined"==typeof f)return{};var a,b,d=!0,e=!0,h=!1,i=!1,j=!!window.webkitRTCPeerConnection;try{a=new f(c,{optional:[{RtpDataChannels:!0}]})}catch(k){d=!1,e=!1}if(d)try{b=a.createDataChannel("_PEERJSTEST")}catch(k){d=!1}if(d){try{b.binaryType="blob",h=!0}catch(k){}var l=new f(c,{});try{var m=l.createDataChannel("_PEERJSRELIABLETEST",{});i=m.reliable}catch(k){}l.close()}if(e&&(e=!!a.addStream),!j&&d){var n=new f(c,{optional:[{RtpDataChannels:!0}]});n.onnegotiationneeded=function(){j=!0,g&&g.supports&&(g.supports.onnegotiationneeded=!0)},n.createDataChannel("_PEERJSNEGOTIATIONTEST"),setTimeout(function(){n.close()},1e3)}return a&&a.close(),{audioVideo:e,data:d,binaryBlob:h,binary:i,reliable:i,sctp:i,onnegotiationneeded:j}}(),validateId:function(a){return!a||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.exec(a)},validateKey:function(a){return!a||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.exec(a)},debug:!1,inherits:function(a,b){a.super_=b,a.prototype=Object.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})},extend:function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},pack:e.pack,unpack:e.unpack,log:function(){if(g.debug){var a=!1,b=Array.prototype.slice.call(arguments);b.unshift("PeerJS: ");for(var c=0,d=b.length;d>c;c++)b[c]instanceof Error&&(b[c]="("+b[c].name+") "+b[c].message,a=!0);a?console.error.apply(console,b):console.log.apply(console,b)}},setZeroTimeout:function(a){function b(b){d.push(b),a.postMessage(e,"*")}function c(b){b.source==a&&b.data==e&&(b.stopPropagation&&b.stopPropagation(),d.length&&d.shift()())}var d=[],e="zero-timeout-message";return a.addEventListener?a.addEventListener("message",c,!0):a.attachEvent&&a.attachEvent("onmessage",c),b}(window),chunk:function(a){for(var b=[],c=a.size,e=index=0,f=Math.ceil(c/g.chunkedMTU);c>e;){var h=Math.min(c,e+g.chunkedMTU),i=a.slice(e,h),j={__peerData:d,n:index,data:i,total:f};b.push(j),e=h,index+=1}return d+=1,b},blobToArrayBuffer:function(a,b){var c=new FileReader;c.onload=function(a){b(a.target.result)},c.readAsArrayBuffer(a)},blobToBinaryString:function(a,b){var c=new FileReader;c.onload=function(a){b(a.target.result)},c.readAsBinaryString(a)},binaryStringToArrayBuffer:function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=255&a.charCodeAt(c);return b.buffer},randomToken:function(){return Math.random().toString(36).substr(2)},isSecure:function(){return"https:"===location.protocol}};b.exports=g},{"./adapter":1,"js-binarypack":10}],9:[function(a,b){"use strict";function c(a,b,c){this.fn=a,this.context=b,this.once=c||!1}function d(){}d.prototype._events=void 0,d.prototype.listeners=function(a){if(!this._events||!this._events[a])return[];for(var b=0,c=this._events[a].length,d=[];c>b;b++)d.push(this._events[a][b].fn);return d},d.prototype.emit=function(a,b,c,d,e,f){if(!this._events||!this._events[a])return!1;var g,h,i,j=this._events[a],k=j.length,l=arguments.length,m=j[0];if(1===k){switch(m.once&&this.removeListener(a,m.fn,!0),l){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,b),!0;case 3:return m.fn.call(m.context,b,c),!0;case 4:return m.fn.call(m.context,b,c,d),!0;case 5:return m.fn.call(m.context,b,c,d,e),!0;case 6:return m.fn.call(m.context,b,c,d,e,f),!0}for(h=1,g=new Array(l-1);l>h;h++)g[h-1]=arguments[h];m.fn.apply(m.context,g)}else for(h=0;k>h;h++)switch(j[h].once&&this.removeListener(a,j[h].fn,!0),l){case 1:j[h].fn.call(j[h].context);break;case 2:j[h].fn.call(j[h].context,b);break;case 3:j[h].fn.call(j[h].context,b,c);break;default:if(!g)for(i=1,g=new Array(l-1);l>i;i++)g[i-1]=arguments[i];j[h].fn.apply(j[h].context,g)}return!0},d.prototype.on=function(a,b,d){return this._events||(this._events={}),this._events[a]||(this._events[a]=[]),this._events[a].push(new c(b,d||this)),this},d.prototype.once=function(a,b,d){return this._events||(this._events={}),this._events[a]||(this._events[a]=[]),this._events[a].push(new c(b,d||this,!0)),this},d.prototype.removeListener=function(a,b,c){if(!this._events||!this._events[a])return this;var d=this._events[a],e=[];if(b)for(var f=0,g=d.length;g>f;f++)d[f].fn!==b&&d[f].once!==c&&e.push(d[f]);return this._events[a]=e.length?e:null,this},d.prototype.removeAllListeners=function(a){return this._events?(a?this._events[a]=null:this._events={},this):this},d.prototype.off=d.prototype.removeListener,d.prototype.addListener=d.prototype.on,d.prototype.setMaxListeners=function(){return this},d.EventEmitter=d,d.EventEmitter2=d,d.EventEmitter3=d,"object"==typeof b&&b.exports&&(b.exports=d)},{}],10:[function(a,b){function c(a){this.index=0,this.dataBuffer=a,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}function d(){this.bufferBuilder=new g}function e(a){var b=a.charCodeAt(0);return 2047>=b?"00":65535>=b?"000":2097151>=b?"0000":67108863>=b?"00000":"000000"}function f(a){return a.length>600?new Blob([a]).size:a.replace(/[^\u0000-\u007F]/g,e).length}var g=a("./bufferbuilder").BufferBuilder,h=a("./bufferbuilder").binaryFeatures,i={unpack:function(a){var b=new c(a);return b.unpack()},pack:function(a){var b=new d;b.pack(a);var c=b.getBuffer();return c}};b.exports=i,c.prototype.unpack=function(){var a=this.unpack_uint8();if(128>a){var b=a;return b}if(32>(224^a)){var c=(224^a)-32;return c}var d;if((d=160^a)<=15)return this.unpack_raw(d);if((d=176^a)<=15)return this.unpack_string(d);if((d=144^a)<=15)return this.unpack_array(d);if((d=128^a)<=15)return this.unpack_map(d);switch(a){case 192:return null;case 193:return void 0;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return void 0;case 213:return void 0;case 214:return void 0;case 215:return void 0;case 216:return d=this.unpack_uint16(),this.unpack_string(d);case 217:return d=this.unpack_uint32(),this.unpack_string(d);case 218:return d=this.unpack_uint16(),this.unpack_raw(d);case 219:return d=this.unpack_uint32(),this.unpack_raw(d);case 220:return d=this.unpack_uint16(),this.unpack_array(d);case 221:return d=this.unpack_uint32(),this.unpack_array(d);case 222:return d=this.unpack_uint16(),this.unpack_map(d);case 223:return d=this.unpack_uint32(),this.unpack_map(d)}},c.prototype.unpack_uint8=function(){var a=255&this.dataView[this.index];return this.index++,a},c.prototype.unpack_uint16=function(){var a=this.read(2),b=256*(255&a[0])+(255&a[1]);return this.index+=2,b},c.prototype.unpack_uint32=function(){var a=this.read(4),b=256*(256*(256*a[0]+a[1])+a[2])+a[3];return this.index+=4,b},c.prototype.unpack_uint64=function(){var a=this.read(8),b=256*(256*(256*(256*(256*(256*(256*a[0]+a[1])+a[2])+a[3])+a[4])+a[5])+a[6])+a[7];return this.index+=8,b},c.prototype.unpack_int8=function(){var a=this.unpack_uint8();return 128>a?a:a-256},c.prototype.unpack_int16=function(){var a=this.unpack_uint16();return 32768>a?a:a-65536},c.prototype.unpack_int32=function(){var a=this.unpack_uint32();return a<Math.pow(2,31)?a:a-Math.pow(2,32)},c.prototype.unpack_int64=function(){var a=this.unpack_uint64();return a<Math.pow(2,63)?a:a-Math.pow(2,64)},c.prototype.unpack_raw=function(a){if(this.length<this.index+a)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+a+" "+this.length);var b=this.dataBuffer.slice(this.index,this.index+a);return this.index+=a,b},c.prototype.unpack_string=function(a){for(var b,c,d=this.read(a),e=0,f="";a>e;)b=d[e],128>b?(f+=String.fromCharCode(b),e++):32>(192^b)?(c=(192^b)<<6|63&d[e+1],f+=String.fromCharCode(c),e+=2):(c=(15&b)<<12|(63&d[e+1])<<6|63&d[e+2],f+=String.fromCharCode(c),e+=3);return this.index+=a,f},c.prototype.unpack_array=function(a){for(var b=new Array(a),c=0;a>c;c++)b[c]=this.unpack();return b},c.prototype.unpack_map=function(a){for(var b={},c=0;a>c;c++){var d=this.unpack(),e=this.unpack();b[d]=e}return b},c.prototype.unpack_float=function(){var a=this.unpack_uint32(),b=a>>31,c=(a>>23&255)-127,d=8388607&a|8388608;return(0==b?1:-1)*d*Math.pow(2,c-23)},c.prototype.unpack_double=function(){var a=this.unpack_uint32(),b=this.unpack_uint32(),c=a>>31,d=(a>>20&2047)-1023,e=1048575&a|1048576,f=e*Math.pow(2,d-20)+b*Math.pow(2,d-52);return(0==c?1:-1)*f},c.prototype.read=function(a){var b=this.index;if(b+a<=this.length)return this.dataView.subarray(b,b+a);throw new Error("BinaryPackFailure: read index out of range")},d.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()},d.prototype.pack=function(a){var b=typeof a;if("string"==b)this.pack_string(a);else if("number"==b)Math.floor(a)===a?this.pack_integer(a):this.pack_double(a);else if("boolean"==b)a===!0?this.bufferBuilder.append(195):a===!1&&this.bufferBuilder.append(194);else if("undefined"==b)this.bufferBuilder.append(192);else{if("object"!=b)throw new Error('Type "'+b+'" not yet supported');if(null===a)this.bufferBuilder.append(192);else{var c=a.constructor;if(c==Array)this.pack_array(a);else if(c==Blob||c==File)this.pack_bin(a);
else if(c==ArrayBuffer)this.pack_bin(h.useArrayBufferView?new Uint8Array(a):a);else if("BYTES_PER_ELEMENT"in a)this.pack_bin(h.useArrayBufferView?new Uint8Array(a.buffer):a.buffer);else if(c==Object)this.pack_object(a);else if(c==Date)this.pack_string(a.toString());else{if("function"!=typeof a.toBinaryPack)throw new Error('Type "'+c.toString()+'" not yet supported');this.bufferBuilder.append(a.toBinaryPack())}}}this.bufferBuilder.flush()},d.prototype.pack_bin=function(a){var b=a.length||a.byteLength||a.size;if(15>=b)this.pack_uint8(160+b);else if(65535>=b)this.bufferBuilder.append(218),this.pack_uint16(b);else{if(!(4294967295>=b))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(b)}this.bufferBuilder.append(a)},d.prototype.pack_string=function(a){var b=f(a);if(15>=b)this.pack_uint8(176+b);else if(65535>=b)this.bufferBuilder.append(216),this.pack_uint16(b);else{if(!(4294967295>=b))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(b)}this.bufferBuilder.append(a)},d.prototype.pack_array=function(a){var b=a.length;if(15>=b)this.pack_uint8(144+b);else if(65535>=b)this.bufferBuilder.append(220),this.pack_uint16(b);else{if(!(4294967295>=b))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(b)}for(var c=0;b>c;c++)this.pack(a[c])},d.prototype.pack_integer=function(a){if(a>=-32&&127>=a)this.bufferBuilder.append(255&a);else if(a>=0&&255>=a)this.bufferBuilder.append(204),this.pack_uint8(a);else if(a>=-128&&127>=a)this.bufferBuilder.append(208),this.pack_int8(a);else if(a>=0&&65535>=a)this.bufferBuilder.append(205),this.pack_uint16(a);else if(a>=-32768&&32767>=a)this.bufferBuilder.append(209),this.pack_int16(a);else if(a>=0&&4294967295>=a)this.bufferBuilder.append(206),this.pack_uint32(a);else if(a>=-2147483648&&2147483647>=a)this.bufferBuilder.append(210),this.pack_int32(a);else if(a>=-0x8000000000000000&&0x8000000000000000>=a)this.bufferBuilder.append(211),this.pack_int64(a);else{if(!(a>=0&&0x10000000000000000>=a))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(a)}},d.prototype.pack_double=function(a){var b=0;0>a&&(b=1,a=-a);var c=Math.floor(Math.log(a)/Math.LN2),d=a/Math.pow(2,c)-1,e=Math.floor(d*Math.pow(2,52)),f=Math.pow(2,32),g=b<<31|c+1023<<20|e/f&1048575,h=e%f;this.bufferBuilder.append(203),this.pack_int32(g),this.pack_int32(h)},d.prototype.pack_object=function(a){var b=Object.keys(a),c=b.length;if(15>=c)this.pack_uint8(128+c);else if(65535>=c)this.bufferBuilder.append(222),this.pack_uint16(c);else{if(!(4294967295>=c))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(c)}for(var d in a)a.hasOwnProperty(d)&&(this.pack(d),this.pack(a[d]))},d.prototype.pack_uint8=function(a){this.bufferBuilder.append(a)},d.prototype.pack_uint16=function(a){this.bufferBuilder.append(a>>8),this.bufferBuilder.append(255&a)},d.prototype.pack_uint32=function(a){var b=4294967295&a;this.bufferBuilder.append((4278190080&b)>>>24),this.bufferBuilder.append((16711680&b)>>>16),this.bufferBuilder.append((65280&b)>>>8),this.bufferBuilder.append(255&b)},d.prototype.pack_uint64=function(a){var b=a/Math.pow(2,32),c=a%Math.pow(2,32);this.bufferBuilder.append((4278190080&b)>>>24),this.bufferBuilder.append((16711680&b)>>>16),this.bufferBuilder.append((65280&b)>>>8),this.bufferBuilder.append(255&b),this.bufferBuilder.append((4278190080&c)>>>24),this.bufferBuilder.append((16711680&c)>>>16),this.bufferBuilder.append((65280&c)>>>8),this.bufferBuilder.append(255&c)},d.prototype.pack_int8=function(a){this.bufferBuilder.append(255&a)},d.prototype.pack_int16=function(a){this.bufferBuilder.append((65280&a)>>8),this.bufferBuilder.append(255&a)},d.prototype.pack_int32=function(a){this.bufferBuilder.append(a>>>24&255),this.bufferBuilder.append((16711680&a)>>>16),this.bufferBuilder.append((65280&a)>>>8),this.bufferBuilder.append(255&a)},d.prototype.pack_int64=function(a){var b=Math.floor(a/Math.pow(2,32)),c=a%Math.pow(2,32);this.bufferBuilder.append((4278190080&b)>>>24),this.bufferBuilder.append((16711680&b)>>>16),this.bufferBuilder.append((65280&b)>>>8),this.bufferBuilder.append(255&b),this.bufferBuilder.append((4278190080&c)>>>24),this.bufferBuilder.append((16711680&c)>>>16),this.bufferBuilder.append((65280&c)>>>8),this.bufferBuilder.append(255&c)}},{"./bufferbuilder":11}],11:[function(a,b){function c(){this._pieces=[],this._parts=[]}var d={};d.useBlobBuilder=function(){try{return new Blob([]),!1}catch(a){return!0}}(),d.useArrayBufferView=!d.useBlobBuilder&&function(){try{return 0===new Blob([new Uint8Array([])]).size}catch(a){return!0}}(),b.exports.binaryFeatures=d;var e=b.exports.BlobBuilder;"undefined"!=typeof window&&(e=b.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder),c.prototype.append=function(a){"number"==typeof a?this._pieces.push(a):(this.flush(),this._parts.push(a))},c.prototype.flush=function(){if(this._pieces.length>0){var a=new Uint8Array(this._pieces);d.useArrayBufferView||(a=a.buffer),this._parts.push(a),this._pieces=[]}},c.prototype.getBuffer=function(){if(this.flush(),d.useBlobBuilder){for(var a=new e,b=0,c=this._parts.length;c>b;b++)a.append(this._parts[b]);return a.getBlob()}return new Blob(this._parts)},b.exports.BufferBuilder=c},{}],12:[function(a,b){function c(a,b){return this instanceof c?(this._dc=a,d.debug=b,this._outgoing={},this._incoming={},this._received={},this._window=1e3,this._mtu=500,this._interval=0,this._count=0,this._queue=[],void this._setupDC()):new c(a)}var d=a("./util");c.prototype.send=function(a){var b=d.pack(a);return b.size<this._mtu?void this._handleSend(["no",b]):(this._outgoing[this._count]={ack:0,chunks:this._chunk(b)},d.debug&&(this._outgoing[this._count].timer=new Date),this._sendWindowedChunks(this._count),void(this._count+=1))},c.prototype._setupInterval=function(){var a=this;this._timeout=setInterval(function(){var b=a._queue.shift();if(b._multiple)for(var c=0,d=b.length;d>c;c+=1)a._intervalSend(b[c]);else a._intervalSend(b)},this._interval)},c.prototype._intervalSend=function(a){var b=this;a=d.pack(a),d.blobToBinaryString(a,function(a){b._dc.send(a)}),0===b._queue.length&&(clearTimeout(b._timeout),b._timeout=null)},c.prototype._processAcks=function(){for(var a in this._outgoing)this._outgoing.hasOwnProperty(a)&&this._sendWindowedChunks(a)},c.prototype._handleSend=function(a){for(var b=!0,c=0,d=this._queue.length;d>c;c+=1){var e=this._queue[c];e===a?b=!1:e._multiple&&-1!==e.indexOf(a)&&(b=!1)}b&&(this._queue.push(a),this._timeout||this._setupInterval())},c.prototype._setupDC=function(){var a=this;this._dc.onmessage=function(b){var c=b.data,e=c.constructor;if(e===String){var f=d.binaryStringToArrayBuffer(c);c=d.unpack(f),a._handleMessage(c)}}},c.prototype._handleMessage=function(a){var b,c=a[1],e=this._incoming[c],f=this._outgoing[c];switch(a[0]){case"no":var g=c;g&&this.onmessage(d.unpack(g));break;case"end":if(b=e,this._received[c]=a[2],!b)break;this._ack(c);break;case"ack":if(b=f){var h=a[2];b.ack=Math.max(h,b.ack),b.ack>=b.chunks.length?(d.log("Time: ",new Date-b.timer),delete this._outgoing[c]):this._processAcks()}break;case"chunk":if(b=e,!b){var i=this._received[c];if(i===!0)break;b={ack:["ack",c,0],chunks:[]},this._incoming[c]=b}var j=a[2],k=a[3];b.chunks[j]=new Uint8Array(k),j===b.ack[2]&&this._calculateNextAck(c),this._ack(c);break;default:this._handleSend(a)}},c.prototype._chunk=function(a){for(var b=[],c=a.size,e=0;c>e;){var f=Math.min(c,e+this._mtu),g=a.slice(e,f),h={payload:g};b.push(h),e=f}return d.log("Created",b.length,"chunks."),b},c.prototype._ack=function(a){var b=this._incoming[a].ack;this._received[a]===b[2]&&(this._complete(a),this._received[a]=!0),this._handleSend(b)},c.prototype._calculateNextAck=function(a){for(var b=this._incoming[a],c=b.chunks,d=0,e=c.length;e>d;d+=1)if(void 0===c[d])return void(b.ack[2]=d);b.ack[2]=c.length},c.prototype._sendWindowedChunks=function(a){d.log("sendWindowedChunks for: ",a);for(var b=this._outgoing[a],c=b.chunks,e=[],f=Math.min(b.ack+this._window,c.length),g=b.ack;f>g;g+=1)c[g].sent&&g!==b.ack||(c[g].sent=!0,e.push(["chunk",a,g,c[g].payload]));b.ack+this._window>=c.length&&e.push(["end",a,c.length]),e._multiple=!0,this._handleSend(e)},c.prototype._complete=function(a){d.log("Completed called for",a);var b=this,c=this._incoming[a].chunks,e=new Blob(c);d.blobToArrayBuffer(e,function(a){b.onmessage(d.unpack(a))}),delete this._incoming[a]},c.higherBandwidthSDP=function(a){var b=navigator.appVersion.match(/Chrome\/(.*?) /);if(b&&(b=parseInt(b[1].split(".").shift()),31>b)){var c=a.split("b=AS:30"),d="b=AS:102400";if(c.length>1)return c[0]+d+c[1]}return a},c.prototype.onmessage=function(){},b.exports.Reliable=c},{"./util":13}],13:[function(a,b){var c=a("js-binarypack"),d={debug:!1,inherits:function(a,b){a.super_=b,a.prototype=Object.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})},extend:function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},pack:c.pack,unpack:c.unpack,log:function(){if(d.debug){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a.unshift("Reliable: "),console.log.apply(console,a)}},setZeroTimeout:function(a){function b(b){d.push(b),a.postMessage(e,"*")}function c(b){b.source==a&&b.data==e&&(b.stopPropagation&&b.stopPropagation(),d.length&&d.shift()())}var d=[],e="zero-timeout-message";return a.addEventListener?a.addEventListener("message",c,!0):a.attachEvent&&a.attachEvent("onmessage",c),b}(this),blobToArrayBuffer:function(a,b){var c=new FileReader;c.onload=function(a){b(a.target.result)},c.readAsArrayBuffer(a)},blobToBinaryString:function(a,b){var c=new FileReader;c.onload=function(a){b(a.target.result)},c.readAsBinaryString(a)},binaryStringToArrayBuffer:function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=255&a.charCodeAt(c);return b.buffer},randomToken:function(){return Math.random().toString(36).substr(2)}};b.exports=d},{"js-binarypack":10}]},{},[3]);;var emptyFunction = SIMULATOR.sendBattleUpdate = function () { };

var cardInfo = require('cardInfo');
var base64 = require('base64');
var cardUI = require('cardUI');

$(document).ready(function () {
    // Connect to PeerJS, have server assign an ID instead of providing one
    // Showing off some of the configs available with PeerJS :).
    var peer = new Peer({
        // Set API key for cloud server (you don't need this if you're running your
        // own.
        key: '12gvgzijkheka9k9',

        debug: 3,

        // Set a logging function:
        logFunction: function () {
            var copy = Array.prototype.slice.call(arguments).join(' ');
            log(copy);
        }
    });
    var connectedPeer = null;
    var ready = false;
    var origSurge = false;

    $("#debug").prop("checked", true);

    // Show this peer's ID.
    peer.on('open', function (id) {
        $('#myPeerID').val(id);
    });

    // Await connections from others
    peer.on('connection', receiveConnection);

    peer.on('error', function (err) {
        console.log(err);
        disconnect();
    });

    function sendConnection(c) {
        connect(c);
        origSurge = $("#surge").is(":checked");


        var message = {
            type: 'requestFight',
            data: {
                hash: $("#deck1").val(),
                bges: getBGEs(),
                tournament: $("#tournament").is(":checked"),
                surge: !origSurge
            }
        };
        c.send(JSON.stringify(message));
    }

    function receiveConnection(c) {
        connect(c);
    }

    // Handle a connection object.
    function connect(c) {
        c.on('data', function (data) {
            processMessage(c, data);
        });
        c.on('close', function () {
            SIMULATOR.sendBattleUpdate = emptyFunction;
            SIMULATOR.livePvP = false;
            endFight();
        });
        connectedPeer = c.peer;
    }

    function sendBattleUpdate(turn) {
        var message = {
            type: 'updateField',
            data: {
                field: SIMULATOR.field,
                turn: turn,
                echo: echo
            }
        };
        activeConnection().send(JSON.stringify(message));
    }

    function processMessage(c, json) {
        var message = JSON.parse(json);
        switch (message.type) {
            case 'requestFight':
                fightRequested(c, message.data);
                break;

            case 'accepted':
                startFight(message.data);
                break;

            case 'rejected':
                cardUI.clearCardSpace();
                outp('Opponent is not ready');
                disconnect();
                break;

            case 'updateField':
                updateField(message.data);
                break;
        }
    }

    function fightRequested(c, data) {
        var message;

        if (ready) {
            message = {
                type: 'accepted',
                data: $("#deck1").val()
            };
            $("#deck2").val(data.hash);
            setBGEs(data.bges);
            origSurge = $("#surge").prop("checked");
            $("#surge").prop("checked", data.surge);
            $("#tournament").prop("checked", data.tournament);
            SIMULATOR.sendBattleUpdate = sendBattleUpdate;
            SIMULATOR.waiting = true;
            SIMULATOR.pause = true;//$("#surge").is(":checked");
            SIMULATOR.livePvP = true;
            SIM_CONTROLLER.startsim();
            SIM_CONTROLLER.end_sims_callback = endFight;
            $("#btnStop").off("click").on("click", endFight);
        } else {
            message = {
                type: 'rejected'
            };
        }

        c.send(JSON.stringify(message));
    }

    function startFight(enemyHash) {
        $("#deck2").val(enemyHash);
        $('#btnStop').off("click").on("click", endFight);
        SIMULATOR.livePvP = true;
        SIMULATOR.sendBattleUpdate = sendBattleUpdate;
        SIM_CONTROLLER.startsim();
        SIM_CONTROLLER.end_sims_callback = endFight;
    }

    function endFight() {
        setTimeout(disconnect, 1);
        if (SIMULATOR.simulating) {
            SIM_CONTROLLER.stopsim();
        }
        $("#surge").prop("checked", origSurge);
    }

    function updateField(data) {
        if (SIMULATOR.waiting) {
            var field = SIMULATOR.field = data.field;
            var turn = SIMULATOR.simulation_turns = data.turn;
            echo = data.echo;
            echo = echo.replace(/<b>/g, '<z>').replace(/<\/b>/g, '<\/z>');
            echo = echo.replace(/<i>/g, '<b>').replace(/<\/i>/g, '<\/b>');
            echo = echo.replace(/<z>/g, '<i>').replace(/<\/z>/g, '<\/i>');

            // Convert JSON cards to actual Units
            convert(field.player.commander);
            var assaults = field.player.assaults;
            for (var i = 0; i < assaults.length; i++) {
                convert(assaults[i]);
            }

            convert(field.cpu.commander);
            var assaults = field.cpu.assaults;
            for (var i = 0; i < assaults.length; i++) {
                convert(assaults[i]);
            }

            // Swap player/cpu
            var player = field.player;
            field.player = field.cpu;
            field.cpu = player;

            cardUI.draw_cards(field);

            SIMULATOR.performTurns(turn, true);
        }
    }

    function convert(cardInfo) {
        cardInfo.__proto__ = CardPrototype;
        // Swap ownership
        cardInfo.owner = (cardInfo.owner === "player" ? "cpu" : "player");
    }

    function log(msg) {
        $('.log').append(msg + '<br/>');
        console.log(msg);
    }

    // Connect to a peer
    $('#btn_simulate').off("click").on("click", setReady);

    $("#enemyPeerID").on("change", setStartButton).on("keyup", setStartButton.debounce(50));

    function setStartButton() {
        var peerID = $("#enemyPeerID").val();
        if (peerID) {
            $('#btn_simulate').off("click")
                .on("click", requestFight)
                .val("Connect!");
        } else {
            $('#btn_simulate').off("click")
                .on("click", setReady)
                .val("Ready!");
        }
    }

    function setReady() {
        hideUI();

        wins = 0;
        losses = 0;
        draws = 0;
        points = 0;

        outp(""); // Clear display
        setSimStatus("");
        cardUI.clearCardSpace();

        ready = true;

        $("#btnStop").off("click").on("click", setUnready);
    }

    function setUnready() {
        ready = false;
        showUI();
    }

    function requestFight() {
        var requestedPeer = $('#enemyPeerID').val();
        if (!connectedPeer) {
            // Create 2 connections, one labelled chat and another labelled file.
            var c = peer.connect(requestedPeer, {
                label: 'chat',
                serialization: 'none',
                metadata: { message: 'hi i want to chat with you!' }
            });
            c.on('open', function () {
                sendConnection(c);
            });
            c.on('error', function (err) { alert(err); });
            connectedPeer = requestedPeer;
        }
    }

    // Send a chat message to all active connections.
    $('#send').submit(function (e) {
        e.preventDefault();
        sendMsg();
    });

    function activeConnection() {
        return peer.connections[connectedPeer][0];
    }

    function disconnect() {
        if (connectedPeer !== null) {
            activeConnection().close();
            delete peer.connections[connectedPeer];
            connectedPeer = null;
        }
        ready = false;
    }

    function getBGEs() {
        var bges = '';
        var bgCheckBoxes = document.getElementsByName("battleground");
        for (var i = 0; i < bgCheckBoxes.length; i++) {
            d = bgCheckBoxes[i];
            if (d.checked) bges += base64.fromDecimal(d.value, 2);
        }
        return bges;
    }

    function setBGEs(bges) {
        $("#battleground input").prop("checked", false);
        for (var i = 0; i < bges.length; i += 2) {
            var bge = base64.toDecimal(bges.substring(i, i + 2));
            $("#battleground_" + bge).prop('checked', true);
        }
    }

    // Make sure things clean up properly.

    window.onunload = window.onbeforeunload = function (e) {
        if (!!peer && !peer.destroyed) {
            peer.destroy();
        }
    };
});