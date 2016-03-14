"use strict";

var initDialog;

$(document).ready(function () {
    initDialog = $("#initDialog").dialog({
        autoOpen: false,
        width: 250,
        minHeight: 20,
        modal: true,
        resizable: false,
        buttons: {
            OK: function () {
                DeckRetriever.getFieldsFromRequest(document.getElementById("jsonResponse").value);
                InventoryAPI.loadPlayerInfo(getDeckAndInventory);
                initDialog.dialog("close");
            },
            Cancel: function () {
                initDialog.dialog("close");
            }
        },
    });
});

function showInitDialog() {
    initDialog.dialog("open");
    initDialog.dialog("option", "position", { my: "center", at: "center", of: window });;
}

function buyGoldPack() {
    InventoryAPI.buyStoreItem("1000", "2", "3", processInventory);
}

function updateResources() {
    var resources = InventoryAPI.resources;
    document.getElementById("buyGoldPack").innerHTML = "Buy Gold Pack (" + resources.gold + " gold)";
    document.getElementById("vaporizeBulk").innerHTML = "Vaporize Bulk (" + resources.dust + " dust)";
}

function getCurrentDeck(response) {
    var activeDeck = response.user_decks[response.user_data.active_deck];
    deck = InventoryAPI.getDeckFromDeckInfo(activeDeck);
    drawDeck();
}

function createRareRune() {
    InventoryAPI.createRune("1", showNewRune);
}

function createEpicRune() {
    InventoryAPI.createRune("2", showNewRune);
}

function showNewRune(response) {
    var new_items = response.new_items;
    if (new_items) {
        var new_runes = [];
        for (var i = 0; i < new_items.length; i++) {
            var rune = RUNES[new_items[i].id];
            new_runes.push(rune.desc);
        }
        alert(new_runes.join(", \r\n"));
    } else {
        alert("Not enough components.");
    }
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
        InventoryAPI.vaporizeUnits(unitsToVaporize, getDeckAndInventory);
    }
}

function getDeckAndInventory(response) {
    updateResources();
    getCurrentDeck(response);
    processInventory(response);
}

function upgradeInventoriedCard(optionsDialog) {
    var unit = optionsDialog.unit;
    var original = unit.baseStats;

    var fusions = ~~(unit.id / 10000) - original.fusion + 1;

    var rarity = CARDS[unit.id].rarity;

    var dust = 0;
    var costs = levelCosts[rarity];
    embedRune(optionsDialog);
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
    InventoryAPI.fuseCards(fusion, index1, index2, getDeckAndInventory);
}

function embedRune(optionsDialog) {
    var newRune = optionsDialog.unit.runes;
    var oldRune = optionsDialog.unit.baseStats.runes;
    if (newRune.length) {
        oldRune = (oldRune.length ? oldRune[0].id : 0);
        newRune = newRune[0].id;
        if (newRune != oldRune) {
            var confirmed = confirm("Embed this rune?");
            if (confirmed) {
                InventoryAPI.equipRune(optionsDialog.unit.index, newRune, getDeckAndInventory);
            }
        }
    }
}