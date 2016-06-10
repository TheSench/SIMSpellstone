"use strict";

var DATA_UPDATER = (function () {

    var baseUrl = /*"https://crossorigin.me/*/"https://spellstone.synapse-games.com/assets/";

    function makeYql(file) {
        return 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + baseUrl + file + '"') + '&format=xml&callback=?';
    }

    var lastUpdate = null;
    var updateCards = (function () {
        var onCardsRetrieved = function (data) {
            var doc = jQuery.parseXML(data.results[0]);
            var units = doc.getElementsByTagName("unit");
            for (var i = 0; i < units.length; i++) {
                var unit = units[i];
                var id = getValue(units[i], "id");
                if (!CARDS[id]) {
                    CARDS[id] = getUnitFromXML(units[i]);
                }
            }
        }
        
        return function () {
            // Don't update more than once per minute
            var now = Date.now();
            if (!lastUpdate || lastUpdate - now > 60000) {
                lastUpdate = now;

                var url = makeYql("cards.xml");
                $.getJSON(yql, onCardsRetrieved);
            }
        }
    }());

    var updateCampaigns = (function() {
        var onCampaignsRetrieved = function (data) {
            var doc = jQuery.parseXML(data.results[0]);
            var campaigns = doc.getElementsByTagName("campaign");
            for (var i = 0; i < campaigns.length; i++) {
                var campaign = campaigns[i];
                var id = getValue(campaign, "id");
                if (!CAMPAIGNS[id]) {
                    CAMPAIGNS[id] = getCampaignFromXML(campaign);
                }
            }
        }

        return function () {
            var url = makeYql("campaigns.xml");
            $.getJSON(yql, onCampaignsRetrieved);
        }
    }());

    var updateMissions = (function () {
        var doUpdateMissions = function (file) {
            var url = makeYql(file);
            $.getJSON(yql, onMissionsRetrieved);
        }

        var onMissionsRetrieved = function (data) {
            var doc = jQuery.parseXML(data.results[0]);
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
        }

        return function () {
            doUpdateMissions("missions.xml");
            doUpdateMissions("missions_event.xml");
        }
    }());

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

    function getUnitFromXML(node) {
        var unit = {
            id: getValue(node, "id"),
            name: getValue(node, "name"),
            picture: "NotFound",
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
            upgrades[i + 2] = getUpgradeFromXML(nodes[i]);
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

    function getNumeric(node, tagName, isAtt) {
        var value = getValue(node, tagName, isAtt);
        if (value != null) {
            return Number(value);
        } else {
            return -1;
        }
    }

    return {
        updateCards: updateCards,
        updateCampaigns: updateCampaigns,
        updateMissions: updateMissions
    };
})();