"use strict";

var DATA_UPDATER = (function () {

    var baseUrl = "https://spellstone.synapse-games.com";


    var lastUpdate = null;
    function updateCards(callback) {
        $("body").addClass("loading");
        $("#loadingSplash").html("Checking for New Cards...");
        // Don't update more than once per minute
        var now = Date.now();
        if (!_DEFINED("spoilers")) {
            // Temp fix
            if (callback) callback();
        }else if (!lastUpdate || lastUpdate - now > 60000) {
            lastUpdate = now;
            $("#loadingSplash").html("Checking for New Cards...");
            setTimeout(doUpdateCards, 0, callback);
        } else {
            if(callback) callback();
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
        "cards_special.xml",
        "cards_standard.xml",
        "cards_story.xml"
    ];
    function doUpdateCards(callback, file) {
        file = (file || 0);
        jQuery.ajax({
            url: baseUrl + "/assets/" + cardFiles[file],
            success: function (doc) {
                var trackNewCards = (typeof spoilers !== "undefined");
                var units = doc.getElementsByTagName("unit");
                for (var i = 0; i < units.length; i++) {
                    var unit = units[i];
                    var id = getValue(units[i], "id");
                    var cardData = getUnitFromXML(units[i]);
                    if (trackNewCards) {
                        if (!CARDS[id]) {
                            spoilers[id] = true;
                        } else if (JSON.stringify(CARDS[id]) !== JSON.stringify(cardData)) {
                            console.log(id + " has changed");
                            spoilers[id] = true;
                        }
                    }
                    CARDS[id] = cardData
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
        unit.type = getValue(node, "type");
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
            upgrades[i+2] = getUpgradeFromXML(nodes[i]);
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