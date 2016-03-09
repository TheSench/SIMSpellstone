"use strict";

function buyGoldPack() {
    InventoryAPI.buyStoreItem("1000", "2", "3", processInventory);
}

function processInventory(response) {
    var inventory = InventoryAPI.getInventoryFromDeckInfo(response).deck;
    units = [];
    unitsShown = [];

    for (var i = 0; i < inventory.length; i++) {
        addInventoryUnit(inventory[i]);
    }

    deck.commander = removeFromInventory(deck.commander);
    for (var i = 0; i < deck.deck.length; i++) {
        deck.deck[i] = removeFromInventory(deck.deck[i]);
    }

    var sortField = document.getElementById("sortField");
    if (sortField.value != "id" || fromInventory) {
        sortCards(sortField);
    }

    applyFilters();
}

function vaporizeBulk() {
    var unitsToVaporize = [];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (!is_commander(unit.id) && CARDS[unit.id].rarity <= 2 && unit.level == 1) {
            unitsToVaporize.push(unit.index);
        }
    }
    if (unitsToVaporize.length > 0) {
        unitsToVaporize = "[" + unitsToVaporize.join() + "]";
        InventoryAPI.vaporizeUnits(unitsToVaporize, processVaporizeResults);
    }
}

function processVaporizeResults(response) {
    deck = InventoryAPI.getDeckFromDeckInfo(response.user_decks[1]);
    processInventory(response);
}

function upgradeInventoriedCard(optionsDialog) {
    var unit = optionsDialog.unit;
    var original = unit.baseStats;

    var fusions = ~~(unit.id / 10000) - original.fusion + 1;

    var rarity = CARDS[unit.id].rarity;

    var dust = 0;
    var costs = levelCosts[rarity];
    if (optionsDialog.fused) {
        var confirmed = confirm("Fuse these cards?");
        if (confirmed) {
            doFusion(optionsDialog.unit, optionsDialog.fused);
        }
    } else {
        var count = 0;
        for (var i = original.level; i < unit.level; i++) {
            dust += costs[i];
            count++;
        }
        if (dust > 0) {
            var confirmed = confirm("This will cost " + dust + " dust!");
            if (confirmed) {
                var upgrades = [];
                for (var i = 0; i < count; i++) {
                    upgrades.push(unit.index);
                }
                doUpgrades(upgrades, 0);
            }
        }
    }
}

function doUpgrades(upgrades, i) {
    if (!i) i = 0;
    var next = upgrades[i++];
    if (next) {
        InventoryAPI.upgradeCard(next, function () {
            doUpgrades(upgrades, i);
        });
    }
}

function doFusion(unit1, unit2) {
    var fusion = unit1.id;
    var index1 = unit1.index;
    var index2 = unit2.index;
    InventoryAPI.fuseCards(fusion, index1, index2, processVaporizeResults);
}