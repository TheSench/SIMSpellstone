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
        if (CARDS[unit.id].rarity <= 2 & unit.level == 1) {
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