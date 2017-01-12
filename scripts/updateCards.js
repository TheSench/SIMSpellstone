"use strict";

var DATA_UPDATER = (function () {

    var baseUrl = "https://spellstone.synapse-games.com";


    var lastUpdate = null;
    function updateCards(callback) {
        $("body").addClass("loading");
        $("#loadingSplash").html("Checking for New Cards...");
        // Don't update more than once per minute
        var now = Date.now();
        if (!lastUpdate || lastUpdate - now > 60000) {
            lastUpdate = now;
            doUpdateCards(callback);
        } else {
            if(callback) callback();
        }
    }

    function doneLoading() {
        $("body").removeClass("loading");
    }


    var cardFiles = [
        "cards_heroes.xml",
        "cards_premium_aether.xml",
        "cards_premium_chaos.xml",
        "cards_premium_wyld.xml",
        "cards_reward.xml",
        "cards_special.xml",
        "cards_standard.xml",
        "cards_story.xml"
    ];
    function doUpdateCards(callback, file) {
        file = (file || 0);
        jQuery.ajax({
            url: baseUrl + "/assets/" + cardFiles[file],
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
                onloaded(file, callback);
            },
            error: function (response) {
                onloaded(file, callback);
            },
            async: false,
            cache: false,
        });
    }

    var onloaded = function (file, callback) {
        file++;
        if (file < cardFiles.length) {
            doUpdateCards(callback, file);
        } else {
            if (callback) callback();
        }
    }

    function getUnitFromXML(node) {
        var hidden_until = (getValue(node, "hidden_until") || getValue(node, "hidden_until_time"));
        if (hidden_until) hidden_until += "000";
        var unit = {
            id: getValue(node, "id"),
            name: getValue(node, "name"),
            desc: getValue(node, "desc"),
            picture: getValue(node, "picture") || prefix(getValue(node, "asset_prefab"), "prefab_"),
            hidden_until: hidden_until,
            rarity: getValue(node, "rarity"),
            set: getValue(node, "set"),
            card_type: getValue(node, "card_type"),
            type: getValue(node, "type"),
            sub_type: (getValues(node, "sub_type") || []),
            health: getNumeric(node, "health"),
            skill: getSkillsFromXML(node),
            upgrades: getUpgradesFromXML(node)
        };
        if (!unit.picture) {
            var portrait = getValue(node, "portrait");
            if (portrait) {
                unit.picture = "portrait_" + portrait.toLowerCase().replace("portrait_", "");
            } else {
                unit.picture = "NotFound";
            }
        }
        if (unit.card_type != "1") {
            addNumericField(unit, node, "attack");
            addNumericField(unit, node, "cost");
        }
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

    function prefix(value, prefix) {
        if (value) {
            return prefix + value;
        } else {
            return value;
        }
    }

    function getValues(node, name, isAtt) {
        var values = null;
        var tags = node.getElementsByTagName(name);
        if (tags.length > 0) {
            values = [];
            for (var i = 0; i < tags.length; i++) {
                values.push(tags[i].innerHTML);
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