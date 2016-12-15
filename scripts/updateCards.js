"use strict";

var DATA_UPDATER = (function () {

    var baseUrl = "https://spellstone.synapse-games.com";


    var lastUpdate = null;
    function updateCards(callback) {
        // Don't update more than once per minute
        var now = Date.now();
        if (!lastUpdate || lastUpdate - now > 60000) {
            lastUpdate = now;
            doUpdateCards(callback);
        } else {
            if (callback) callback();
        }
    }

    function doUpdateCards(callback) {
        jQuery.ajax({
            url: baseUrl + "/assets/cards.xml",
            success: function (doc) {
                var units = doc.getElementsByTagName("unit");
                var newCards = {};
                for (var i = 0; i < units.length; i++) {
                    var unit = units[i];
                    var id = getValue(units[i], "id");
                    if (!CARDS[id]) {
                        newCards[id] = true;
                    }
                    CARDS[id] = getUnitFromXML(units[i]);
                }
                if (Object.keys(newCards).length > 0 && typeof spoilers !== "undefined") {
                    spoilers = newCards;
                }
                if (callback) callback();
            },
            error: function (response) {
                if (callback) callback();
            },
            async: false,
            cache: false,
        });
    }

    function getUnitFromXML(node) {
        var hidden_until = (getValue(node, "hidden_until") || getValue(node, "hidden_until_time"));
        if (hidden_until) hidden_until += "000";
        var unit = {
            id: getValue(node, "id"),
            name: getValue(node, "name"),
            picture: getValue(node, "picture") || getValue(node, "portrait") || getValue(node, "asset_prefab") || "NotFound",
            hidden_until: hidden_until,
            rarity: getValue(node, "rarity"),
            set: getValue(node, "set"),
            card_type: getValue(node, "card_type"),
            type: getValue(node, "type"),
            health: getNumeric(node, "health"),
            skill: getSkillsFromXML(node),
            upgrades: getUpgradesFromXML(node)
        };
        addField(unit, node, "sub_type"),
        addNumericField(unit, node, "attack");
        addNumericField(unit, node, "cost");
        return unit;
    }

    function getSkillsFromXML(node) {
        var children = node.childNodes;
        var skills = [];
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.nodeName == "skill") {
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
        addField(skill, node, "s", true);
        addField(skill, node, "y", true);
        addNumericField(skill, node, "c", true);
        addNumericField(skill, node, "z", true);
        addField(skill, node, "all", true);
        return skill;
    }

    function getUpgradesFromXML(node) {
        var nodes = node.getElementsByTagName("upgrade");
        var upgrades = {};
        for (var i = 0; i < nodes.length; i++) {
            upgrades[i+2] = getUpgradeFromXML(nodes[i]);
        }
        return upgrades;
    }

    function getUpgradeFromXML(node) {
        var upgrade = {
            skill: getSkillsFromXML(node)
        };
        addNumericField(upgrade, node, "attack");
        addNumericField(upgrade, node, "health");
        addNumericField(upgrade, node, "cost");
        return upgrade;
    }

    function addField(object, node, field, isAtt) {
        var value = getValue(node, field, isAtt);
        if (value != null) {
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
        var value = null;
        if (isAtt) {
            value = node.getAttribute(name);
            return value;
        } else {
            var tags = node.getElementsByTagName(name);
            if (tags.length > 0) {
                value = tags[0].innerHTML;
            }
        }
        return value;
    }

    function getValues(node, name, isAtt) {
        var values = null;
        var tags = node.getElementsByTagName(name);
        if (tags.length > 0) {
            values = [];
            for (var i = 0; i < tags.length; i++) {
                values.push(tags[0].innerHTML);
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

    return {
        updateCards: updateCards
    };
})();