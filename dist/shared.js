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
});;define('storageAPI', function () {
    "use strict";

    var storageAPI = {};
    var SaveFields = {
        decks: "SavedDecks"
    };
    var $loadDialogScope;

    function localStorageSupported() {
        // LocalStorage Support Check : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
        try {
            var storage = window.localStorage,
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }

    function fullAPI() {
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

            storageAPI.setShowTutorial = function (value) {
                storageAPI.shouldShowTutorial = value;
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
    }

    function limitedAPI() {
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

            storageAPI.setShowTutorial = function (value) {
                storageAPI.shouldShowTutorial = value;
            };
            storageAPI.shouldShowTutorial = true;
        };

        var notSupported = function () {
            alert("Your browser does not support this feature.");
        };
    }

    // Set up StorageAPI based on feature availability
    if (localStorageSupported()) {
        fullAPI();
    } else {
        limitedAPI();
    }

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

    storageAPI.initialize();

    return storageAPI;
});;define('loadCardCache', function () {
    "use strict";

    var storageAPI = require('storageAPI');

    return function loadCardCache() {
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
});;"use strict";

define('dataUpdater', function () {
    var api = {
        updateData: updateData
    };

    var storageAPI = require('storageAPI');

    var baseUrl = "https://spellstone.synapse-games.com";

    var newCards = {};
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
                        var id = getValue(unit, "id");
                        var cardData = getUnitFromXML(unit);
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
                            if (!FUSIONS[base] || FUSIONS[base] !== fusion) {
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
        if (unit.card_type !== "1") {
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
});;define('unitInfo', function () {
    var api = {
        areEqual: areEqual,
        getEnhancement: getEnhancement,
        initializeUnit: initializeUnit,
        isImbued: isImbued,
        create: makeUnitInfo,
        defaultCommander: makeUnitInfo(202, 1) // Elaria Captain
    };

    var cardApi = require('cardApi');

    function makeUnitInfo(id, level, runes) {
        var unit = {
            id: Number(id),
            level: Number(level),
            runes: []
        };
        if (runes) unit.runes = runes;
        return unit;
    }

    function getRuneID(unit) {
        return (unit.runes.length && unit.runes[0].id) || 0;
    }

    function areEqual(unitInfo1, unitInfo2) {
        return (!unitInfo1) === (!unitInfo2) // Silly null-check
            && unitInfo1.id === unitInfo2.id
            && unitInfo1.level === unitInfo2.level
            && getRuneID(unitInfo1) === getRuneID(unitInfo2);
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
});;define('base64', function () {
    "use strict";
    
    var cardInfo = require('cardInfo');
    var unitInfo = require('unitInfo');

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