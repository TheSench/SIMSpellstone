var loadDeck = (function () {
    var api = {
        mission: loadMissionDeck,
        raid: loadRaidDeck
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
            var card = getCardByID(unit);
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
        } else if (level > 1 && is_commander(cardID)) {
            var maxUpgrades = (Number(loadCard(cardID).rarity) + 1);
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
        var maxLevel = (parseInt(loadCard(unitInfo.id).rarity) + 2);
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
        } else if (is_commander(cardID)) {
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

    return api;
})();