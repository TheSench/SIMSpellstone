"use strict";

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
        unit.card_type = getValue(node, "card_type") || "2";
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
})();