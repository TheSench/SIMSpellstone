"use strict";

// TODO: Add function for re-checking filters

var fromInventory = false;
var deck = [];
deck.commander = elariaCaptain;
deck.deck = [];

// Filters
var attackHidden = {};
var attackRanges = [];
var healthHidden = {};
var healthRanges = [];
var delayHidden = {};
var delayRanges = [];
var skillFilters = [];
var skillHidden = {};
var skillFiltersAdv = [];
var skillHiddenAdv = {};
var factionHidden = {};
var subfactionHidden = {};
var rarityFilters = [];
var rarityHidden = {};
var typeFilters = [];
var typeHidden = {};
var setFilters = [];
var setHidden = {};
var fusionFilters = [];
var fusionHidden = {};
var nameHidden = {};

var allCards = CARDS;

var showUpgrades = false;

var units = [];
var unitsShown = [];
var unitsFiltered = [];
var advancedFilters;
var optionsDialog;
var inventoryOptionsDialog;
var form;

var initDeckBuilder = function () {
    setupPopups();
    adjustHeight();

    $("body").addClass("loading");

    $(window).resize(onResize);

    var cs = $("#cardSpace");
    cs.mouseenter(enterInventory);
    cs.mouseleave(leaveInventory);
    window.onwheel = changePage;

    setTimeout(function () {
        drawAllCards();
        $("body").removeClass("loading");
    }, 1);
}

var adjustHeight = function () {
    var deckBuilderContainer = $("#deckBuilderContainer");
    var height = $(window).height();
    deckBuilderContainer.css('height', height);
    deckBuilderContainer.css('max-height', height);
}

var setupPopups = function () {
    advancedFilters = $("#advancedFilters").dialog({
        autoOpen: false,
        width: 150,
        minHeight: 20,
        modal: true,
        resizable: false,
        buttons: {
            OK: function () {
                filterAdvanced(advancedFilters.skill);
                advancedFilters.dialog("close");
            },
            Cancel: function () {
                advancedFilters.dialog("close");
            }
        },
    });
    optionsDialog = $("#unitOptions").dialog({
        autoOpen: false,
        width: 250,
        minHeight: 20,
        modal: true,
        resizable: false,
        buttons: {
            OK: function () {
                //modifyCard(optionsDialog);
                optionsDialog.dialog("close");
            },
            Cancel: function () {
                resetCard(optionsDialog);
                optionsDialog.dialog("close");
            }
        },
    });
    inventoryOptionsDialog = $("#inventoryOptions").dialog({
        autoOpen: false,
        width: 250,
        minHeight: 20,
        modal: true,
        resizable: false,
        buttons: {
            OK: function () {
                upgradeInventoriedCard(inventoryOptionsDialog);
                inventoryOptionsDialog.dialog("close");
            },
            Cancel: function () {
                resetInventoriedCard(inventoryOptionsDialog);
                inventoryOptionsDialog.dialog("close");
            }
        },
    });
    $("#unitOptions").bind("change", function () {
        modifyCard(optionsDialog);
    });
    $("#inventoryOptions").bind("change", function () {
        modifyInventoriedCard(inventoryOptionsDialog);
    });

    var imageButtons = $('input[type="image"]');
    for (var i = 0; i < imageButtons.length; i++) {
        var imageButton = imageButtons[i];
        var toolTip = '<div class="tooltip">' + imageButton.getAttribute("title") + '</div>';
        imageButton.removeAttribute("title");
        var orig_html = imageButton.outerHTML;
        var new_html = '<div style="display:inline; position:relative; overflow:visible;">' + orig_html + toolTip + '</div>';
        imageButton.outerHTML = new_html;
    }
}

var drawAllCards = function () {
    drawDeck();
    drawCardList();
}

var drawDeck = function () {

    var hash = _GET('hash');
    if (hash) {
        deck = hash_decode(hash);
    }
    sortDeck(deck);

    var name = _GET('name');
    if (name) {
        setDeckName(name);
    }

    CARD_GUI.draw_deck(deck, removeFromDeck, showCardOptions);
    updateHash();
};

var drawCardList = function () {

    units = [];
    unitsShown = [];

    var inventory = _GET('inventory');
    if (inventory) {
        fromInventory = true;
        inventory = hash_decode(inventory).deck;
        for (var i = 0; i < inventory.length; i++) {
            addInventoryUnit(inventory[i]);
        }
        deck.commander = removeFromInventory(deck.commander);
        for (var i = 0; i < deck.deck.length; i++) {
            var unit = deck.deck[i];
            deck.deck[i] = removeFromInventory(unit);
        }
    } else {
        var onlyNew = false;
        if (_DEFINED('spoilers')) {
            onlyNew = true;
            toggleDeckDisplay(document.getElementById("collapseFilters"));
        }
        for (var id in allCards) {
            if (id < 10000 && (!onlyNew || spoilers[id])) {
                addUnit(allCards[id]);
            }
        }
    }

    var sortField = document.getElementById("sortField");
    if (sortField.value != "id" || fromInventory) {
        sortCards(sortField);
    }

    applyFilters();
    //doDrawCardList(unitsShown);
    if (inventory) {
        /*
        deck.commander = removeFromInventory(deck.commander);
        for (var i = 0; i < deck.deck.length; i++) {
            deck.deck[i] = removeFromInventory(deck.deck[i]);
        }
        */
        /*
        var unitsToHide = deck.deck.slice();
        unitsToHide.push(deck.commander);
        for (var i = 0; i < unitsToHide.length; i++) {
            var unit = unitsToHide[i];
            var cards = $("#cardSpace [data-id=" + unit.id + "][data-level=" + unit.level + "]");
            for (var j = 0; j < cards.length; j++) {
                var htmlCard = cards[j];
                if (!htmlCard.classList.contains('picked')) {
                    htmlCard.classList.add("picked");
                    break;
                }
            }
        }
        */
    }
}

var page = 0;
function doDrawCardList(cardList, resetPage) {

    var detailedSkills = document.getElementById("skillDetails").checked;
    var cardspace = document.getElementById("cardSpace");

    if (resetPage) {
        page = 0;
    }

    var contextMenu = (fromInventory ? showInventoryOptions : hideContext);

    var width = cardspace.offsetWidth;
    var rows = document.getElementById("rows").value;
    var cards = ~~(width / 90); // Each card is 84 pixels wide and has 2 pixels of padding and 1 pixel of border
    cards *= rows;
    var lastUnit = null;
    var unique = 0;
    for (var i = 0, len = cardList.length; i < len; i++) {
        var unit = cardList[i];
        if (!areEqual(unit, lastUnit)) unique++;
        lastUnit = unit;
    }
    var pages = Math.ceil(unique / cards);
    if (pages > 1) {
        var start = cards * page;
        if (page >= pages) {
            page = pages - 1;
            start = cards * page;
        }
        CARD_GUI.draw_card_list(cardList, detailedSkills, addToDeck, contextMenu, start, start + cards);
    } else {
        CARD_GUI.draw_card_list(cardList, detailedSkills, addToDeck, contextMenu);
    }
    document.getElementById("pageNumber").innerHTML = "Page " + (page + 1) + "/" + pages;
}

var resizing = false;
function onResize() {
    /*
    if (!resizing) {
        resizing = true;
        var fillers = $("#filler");
        for (var i = 0; i < fillers.length; i++) {
            adjustTable(fillers[i]);
        }
        resizing = false;
    }
    */
}

function adjustTable(filler) {
    var currentRow = filler.parentElement;
    var table = currentRow.parentElement;
    if (filler.offsetWidth <= 2) {
        if (table.childElementCount == 1) {
            var siblings = [];
            var sibling = filler.nextElementSibling;
            while (sibling) {
                siblings.push(sibling);
                sibling = sibling.nextElementSibling
            }
            if (siblings.length) {
                var tr = document.createElement("tr");
                for (var i = 0; i < siblings.length; i++) {
                    tr.appendChild(siblings[i]);
                }
                table.appendChild(tr);
            }
        }
    } else {
        if (table.childElementCount > 1) {
            var tr = currentRow.nextElementSibling;
            if (tr) {
                for (var i = 0; i < tr.childNodes.length; i++) {
                    currentRow.appendChild(tr.childNodes[i]);
                }
                table.removeChild(tr);
            }
        }
    }
}

var overInventory = false;
function enterInventory() {
    overInventory = true;
}

function leaveInventory() {
    overInventory = false;
}

function changePage(event) {
    if (overInventory) {
        if (event.deltaY < 0) {
            pageUp();
            return false;
        } else if (event.deltaY > 0) {
            pageDown();
            return false;
        }
    }
    return true;
}

function pageUp() {
    page--;
    if (page < 0) {
        page = 0;
    }
    else {
        redrawCardList(true);
    }
}

function pageDown() {
    page++;
    redrawCardList(true);
}

function redrawCardList(keepPaging) {
    sortCards(document.getElementById("sortField"));
    //doDrawCardList(unitsShown);
    applyFilters(keepPaging);
}

var addInventoryUnit = function (unit) {
    units.push(unit);
    unitsShown.push(unit);
}

var addUnit = function (unit) {
    var id = unit.id;
    var maxlevel = 1;
    if (unit.upgrades) for (var maxlevel in unit.upgrades) { }
    addUnitLevels(id, maxlevel);
    if (id > 999 && allCards["1" + id]) {
        addUnitLevels("1" + id, maxlevel);
        addUnitLevels("2" + id, maxlevel);
    }
}

var addUnitLevels = function (id, maxlevel) {
    for (var level = 1; level <= maxlevel; level++) {
        var unit = makeUnitInfo(id, level);
        units.push(unit);
        if (showUpgrades || level == maxlevel) unitsShown.push(unit);
    }
}

var hash_changed = function (hash) {

    if (hash) {
        document.getElementById("hash").value = hash;
    } else {
        hash = document.getElementById("hash").value;
    }
    if (typeof simulatorDeckHashField !== 'undefined') simulatorDeckHashField.value = hash;
    deck = hash_decode(hash);
    sortDeck(deck);

    if (fromInventory) {
        /*
        var pickedCards = document.getElementsByClassName("picked");
        while (pickedCards.length > 0) {
            pickedCards[0].classList.remove("picked");
        }
        */
        // Reset which units show up in inventory
        unitsShown = [];
        for (var i = 0, len = units.length; i < len; i++) {
            unitsShown.push(units[i]);
        }
        deck.commander = removeFromInventory(deck.commander);
        for (var i = 0; i < deck.deck.length; i++) {
            deck.deck[i] = removeFromInventory(deck.deck[i]);
        }
        redrawCardList(true);
        /*
        var unitsToHide = deck.deck.slice();
        unitsToHide.push(deck.commander);
        for (var i = 0; i < unitsToHide.length; i++) {
            var unit = unitsToHide[i];
            var cards = $("#cardSpace [data-id=" + unit.id + "][data-level=" + unit.level + "]");
            for (var j = 0; j < cards.length; j++) {
                var htmlCard = cards[j];
                if (!htmlCard.classList.contains('picked')) {
                    htmlCard.classList.add("picked");
                    break;
                }
            }
        }
        */
    }

    CARD_GUI.draw_deck(deck, removeFromDeck, showCardOptions);
}

var sortDeck = function (deck) {
    if (_DEFINED("nosort")) return;

    deck.deck.sort(function (unitA, unitB) {
        var cardA = get_card_by_id(unitA);
        var cardB = get_card_by_id(unitB);
        var compare;
        compare = (cardA.rarity - cardB.rarity);
        if (compare) return compare;
        compare = (cardA.type - cardB.type);
        if (compare) return compare;
        compare = compareByID(unitA, unitB);
        if (compare) return compare;
        compare = unitA.level - unitB.level;
        if (compare) return compare;
        compare = (unitA.runes.length ? unitA.runes[0].id : 0) - (unitB.runes.length ? unitB.runes[0].id : 0);
        return compare;
    });
}

var addToDeck = function (htmlCard) {
    var unit = getUnitFromCard(htmlCard);
    if (fromInventory) {
        //htmlCard.classList.add("picked");
        unit = removeFromInventory(unit);
        redrawCardList(true);
    }
    if (is_commander(unit.id)) {
        deck.commander = unit;
    } else {
        if (deck.deck.length == 15) return;
        deck.deck.push(unit);
    }
    sortDeck(deck);
    CARD_GUI.draw_deck(deck, removeFromDeck, showCardOptions);
    updateHash();
};

function removeFromInventory(unit) {
    for (var i = 0; i < unitsShown.length; i++) {
        var unit_i = unitsShown[i];
        if (areEqual(unit, unit_i)) {
            var removed = unitsShown.splice(i, 1);
            return removed[0];
        }
    }
    return unit;
}

var removeFromDeck = function (htmlCard, index) {
    var unit;
    if (htmlCard.classList.contains('commander')) {
        unit = deck.commander;
        deck.commander = elariaCaptain;
    } else {
        unit = deck.deck.splice(index, 1)[0];
    }
    if (fromInventory) {
        unitsShown.push(unit);
        redrawCardList(true);
        /*
        var cards = $("#cardSpace [data-id=" + unit.id + "][data-level=" + unit.level + "]");
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (card.classList.contains('picked')) {
                card.classList.remove("picked");
                break;
            }
        }
        */
    }
    CARD_GUI.draw_deck(deck, removeFromDeck, showCardOptions);
    updateHash();
};

var updateHash = function () {
    var deckHash = hash_encode(deck);
    document.getElementById("hash").value = deckHash;
    if (typeof simulatorDeckHashField !== 'undefined') simulatorDeckHashField.value = deckHash;
}

var filterAdvanced = function (skill) {

    var info = {
        id: skill,
        x: undefined,
        y: undefined,
        c: undefined,
        s: undefined,
        all: undefined,
    }

    for (var i = 0; i < skillFiltersAdv.length; i++) {
        if (skillFiltersAdv[i].id == skill) {
            skillFiltersAdv.splice(i, 1);
            break;
        }
    }

    if ($("div#amount")[0].style.display != "none") {
        var min = parseInt($("#amount-min")[0].value);
        var max = parseInt($("#amount-max")[0].value);
        if (isNaN(min)) min = 0;
        if (isNaN(max)) max = 99;
        info.x = { min: min, max: max };
    }
    if ($("div#timer")[0].style.display != "none") {
        var min = parseInt($("#timer-min")[0].value);
        var max = parseInt($("#timer-max")[0].value);
        if (isNaN(min)) min = 0;
        if (isNaN(max)) max = 99;
        info.c = { min: min, max: max };
    }
    if ($("div#faction")[0].style.display != "none") {
        var faction = $("select#faction")[0].value;
        info.y = (faction == "Generic") ? -1 : factions.IDs[faction];
    }
    if ($("div#skill")[0].style.display != "none") {
        if ($("select#skill")[0].value.length > 0) {
            info.s = $("select#skill")[0].value;
        }
    }
    if ($("label[for=all]")[0].style.display != "none") {
        info.all = $("select#all")[0].value;
    }

    $("input#" + skill)[0].classList.add("selected-advanced");
    skillFiltersAdv.push(info);

    checkAdvancedFilters();
}

var checkAdvancedFilters = function () {
    skillHiddenAdv = {};

    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        for (var s = 0; s < skillFiltersAdv.length; s++) {
            if (!hasSkillAdvanced(unit, skillFiltersAdv[s])) {
                skillHiddenAdv[makeUnitKey(unit)] = true;
            }
        }
    }
    for (var key in skillFiltersAdv) {
        var info = skillFiltersAdv[key];
    }
    applyFilters();
}

var filterSkill = function (button, skill) {
    skillHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        skillFilters.splice(skillFilters.indexOf(skill), 1);
    } else if (button.classList.contains("selected-advanced")) {
        button.classList.remove("selected-advanced");
        for (var i = 0; i < skillFiltersAdv.length; i++) {
            if (skillFiltersAdv[i].id == skill) {
                skillFiltersAdv.splice(i, 1);
                break;
            }
        }
        checkAdvancedFilters();
        return;
    } else {
        button.classList.add("selected");
        skillFilters.push(skill);
    }
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        for (var s = 0; s < skillFilters.length; s++) {
            if (!hasSkill(unit, skillFilters[s])) {
                skillHidden[makeUnitKey(unit)] = true;
                break;
            }
        }
    }
    applyFilters();
}

var filterFaction = function (button, faction) {
    factionHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
    } else {
        button.classList.add("selected");
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            if (!isInFaction(unit, faction)) {
                factionHidden[makeUnitKey(unit)] = true;
            }
        }
    }
    var filters = document.getElementsByName("faction");
    for (var i = 0; i < filters.length; i++) {
        var filter = filters[i];
        if (filter != button) {
            filter.classList.remove("selected");
        }
    }
    applyFilters();
}

var filterName = function (field) {
    nameHidden = {};
    var filter = field.value.toLowerCase();
    if (filter) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var card = get_slim_card_by_id(unit, true);
            if (card.name.toLowerCase().indexOf(filter) == -1) {
                nameHidden[makeUnitKey(unit)] = true;
            }
        }
    }
    applyFilters();
}

var filterSubfaction = function (button, faction) {
    subfactionHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
    } else {
        button.classList.add("selected");
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            if (!isInSubfaction(unit, faction)) {
                subfactionHidden[makeUnitKey(unit)] = true;
            }
        }
    }
    var filters = document.getElementsByName("subfaction");
    for (var i = 0; i < filters.length; i++) {
        var filter = filters[i];
        if (filter != button) {
            filter.classList.remove("selected");
        }
    }
    applyFilters();
}

var filterAttack = function (button, min, max) {
    attackHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < attackRanges.length; i++) {
            if (attackRanges[i][0] == min) {
                attackRanges.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        attackRanges.push([min, max]);
    }
    if (attackRanges.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < attackRanges.length; j++) {
                var range = attackRanges[j];
                if (isInRange(unit, "attack", range[0], range[1])) {
                    hide = false;
                    break;
                }
            }
            if (hide) attackHidden[makeUnitKey(unit)] = true;
        }
    }
    applyFilters();
}

var filterHealth = function (button, min, max) {
    healthHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < healthRanges.length; i++) {
            if (healthRanges[i][0] == min) {
                healthRanges.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        healthRanges.push([min, max]);
    }
    if (healthRanges.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < healthRanges.length; j++) {
                var range = healthRanges[j];
                if (isInRange(unit, "health", range[0], range[1])) {
                    hide = false;
                    break;
                }
            }
            if (hide) healthHidden[makeUnitKey(unit)] = true;
        }
    }
    applyFilters();
}

var filterDelay = function (button, delay) {
    delayHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < delayRanges.length; i++) {
            if (delayRanges[i] == delay) {
                delayRanges.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        delayRanges.push(delay);
    }
    if (delayRanges.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < delayRanges.length; j++) {
                var delay = delayRanges[j];
                if (isInRange(unit, "cost", delay, delay)) {
                    hide = false;
                    break;
                }
            }
            if (hide) delayHidden[makeUnitKey(unit)] = true;
        }
    }
    applyFilters();
}

var filterType = function (button, type) {
    typeHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < typeFilters.length; i++) {
            if (typeFilters[i] == type) {
                typeFilters.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        typeFilters.push(type);
    }
    if (typeFilters.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < typeFilters.length; j++) {
                var type = typeFilters[j];
                if (isInRange(unit, "card_type", type, type)) {
                    hide = false;
                    break;
                }
            }
            if (hide) typeHidden[makeUnitKey(unit)] = true;
        }
    }
    applyFilters();
}

var filterFusion = function (button, fusion) {
    fusionHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < fusionFilters.length; i++) {
            if (fusionFilters[i] == fusion) {
                fusionFilters.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        fusionFilters.push(fusion);
    }
    if (fusionFilters.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var id = unit.id.toString();
            var fusion = (id.length > 4 ? id[0] : '');
            var hide = true;
            for (var j = 0; j < fusionFilters.length; j++) {
                if (fusion == fusionFilters[j]) {
                    hide = false;
                    break;
                }
            }
            if (hide) fusionHidden[makeUnitKey(unit)] = true;
        }
    }
    applyFilters();
}

var showAdvancedFilters = function (skill) {

    $("label[for=all]").hide();
    $("div#amount").hide();
    $("div#faction").hide();
    $("div#skill").hide();
    $("div#timer").hide();

    $("#amount-min")[0].value = 0;
    $("#amount-max")[0].value = 99;
    $("#timer-min")[0].value = 0;
    $("#timer-max")[0].value = 99;
    $("select#faction")[0].value = '';
    $("select#skill")[0].value = '';
    $("select#all")[0].value = -1;
    for (var i = 0; i < skillFiltersAdv.length; i++) {
        var skillInfo = skillFiltersAdv[i];
        if (skillInfo.id == skill) {
            if (skillInfo.x) {
                $("#amount-min")[0].value = skillInfo.x.min;
                $("#amount-max")[0].value = skillInfo.x.max;
            }
            if (skillInfo.c) {
                $("#timer-min")[0].value = skillInfo.c.min;
                $("#timer-max")[0].value = skillInfo.c.max;
            }
            if (skillInfo.y) {
                if (skillInfo.y == -1)
                    $("select#faction")[0].value = "Generic";
            }
            if (skillInfo.s) $("select#skill")[0].value = skillInfo.s;
            if (skillInfo.all) $("select#all")[0].value = skillInfo.all;
            break;
        }
    }

    switch (skill) {
        // x="1" y="0" all="0" c="0" s="0"
        case 'evade':
        case 'armored':
        case 'counter':
        case 'burn':
        case 'frost':
        case 'pierce':
        case 'poison':
        case 'leech':
        case 'berserk':
            $("div#amount").show();
            break;
            // x="1" y="1" all="0" c="0" s="0"
        case 'legion':
        case 'fervor':
        case 'reanimate':
        case 'resurrect':
            $("div#amount").show();
            $("div#faction").show();
            break;
            // x="1" y="1" all="1" c="0" s="0"
        case 'rally':
        case 'heal':
        case 'protect':
        case 'protect_ice':
            $("div#amount").show();
            $("label[for=all]").show();
            $("div#faction").show();
            break;
            // x="1" y="0" all="1" c="0" s="0"
        case 'enfeeble':
        case 'strike':
        case 'weaken':
            $("div#amount").show();
            $("label[for=all]").show();
            break;
            // x="1" y="1" all="1" c="1" s="1"
        case 'enhance':
            $("div#amount").show();
            $("label[for=all]").show();
            $("div#faction").show();
            $("div#skill").show();
            $("div#timer").show();
            break;
            // x="0" y="0" all="1" c="1" s="0"
        case 'jam':
            $("label[for=all]").show();
            $("div#timer").show();
            break;
            // x="0" y="0" all="0" c="1" s="0"
        case 'flurry':
            $("div#timer").show();
            break;
    }
    advancedFilters.dialog("option", "position", { mw: "center", at: "center", of: $("#" + skill)[0] });;
    advancedFilters.dialog("open");
    advancedFilters.skill = skill;

    return false;
}

var showCardOptions = function (htmlCard, index) {
    var show = false;
    if (index != undefined) {
        var unit = deck.deck[index];
    } else {
        var unit = deck.commander;
    }
    var card = get_card_by_id(unit);

    $("#upgradeDiv").hide();
    var upgradeLevel = document.getElementById("upgrade");
    upgradeLevel.max = card.maxLevel;
    upgradeLevel.value = card.level;
    if (card.maxLevel > 1) {
        $("#upgradeDiv").show();
        show = true;
    }

    var fusionField = document.getElementById("fusion");
    fusionField.value = 0;
    $("#fusionDiv").hide();
    if (!card.isCommander()) {
        var fusion = 1;
        var baseID = card.id.toString();
        if (baseID.length > 4) {
            var fusion = parseInt(baseID[0]) + 1;
            var baseID = baseID.substring(1);
        }
        if (FUSIONS[baseID]) {
            fusionField.value = fusion;
            $("#fusionDiv").show();
            show = true;
        }
    }

    if ($("#upgradeDiv").css('display') == "none" || $("#fusionDiv").css('display') == "none")
    {
        $("#upgradeDiv").add("#fusionDiv").toggleClass("split", false);
    } else {
        $("#upgradeDiv").add("#fusionDiv").toggleClass("split", true);
    }

    if (showRunePicker(card)) {
        show = true;
    }

    if (show) {
        optionsDialog.dialog("open");
        optionsDialog.dialog("option", "position", { my: "left", at: "right", of: htmlCard });;
        optionsDialog.unit = unit;
        optionsDialog.originalUnit = $.extend({}, unit);
    }

    return false;
}

function hideContext() {
    return false;
}

var showInventoryOptions = function (htmlCard, index) {
    var show = false;
    var unit = unitsFiltered[index];
    var card = get_card_by_id(unit);

    $("#invUpgradeDiv").hide();
    var upgradeLevel = document.getElementById("invUpgrade");
    upgradeLevel.max = card.maxLevel;
    upgradeLevel.value = card.level;
    if (card.maxLevel > 1 && card.level < card.maxLevel) {
        $("#invUpgradeDiv").show();
        show = true;
    }

    var fusionField = document.getElementById("invFusion");
    fusionField.value = 0;
    $("#invFusionDiv").hide();
    if (!card.isCommander()) {
        var fusion = 1;
        var baseID = card.id.toString();
        if (baseID.length > 4) {
            var fusion = parseInt(baseID[0]) + 1;
            var baseID = baseID.substring(1);
        }
        if (FUSIONS[baseID] && card.level == card.maxLevel) {
            fusionField.value = fusion;
            $("#invFusionDiv").show();
            show = true;
        }
        unit.baseStats = {
            fusion: fusion,
            level: unit.level,
            runes: unit.runes
        }
    } else {
        unit.baseStats = {
            fusion: 1,
            level: unit.level
        }
    }

    if (showRunePicker(card, true)) {
        show = true;
    }

    if (show) {
        inventoryOptionsDialog.dialog("open");
        inventoryOptionsDialog.dialog("option", "position", { my: "left", at: "right", of: htmlCard });;
        inventoryOptionsDialog.unit = unit;
        inventoryOptionsDialog.originalUnit = $.extend({}, unit);
    }

    return false;
}

var resetUnit = function () {
    var unit = optionsDialog.unit;
    if (unit !== undefined) {
        $.extend(unit, optionsDialog.originalUnit);
    }
}

var showRunePicker = function (card, inventory) {
    var divID = (inventory ? "#invRuneChoicesDiv" : "#runeChoicesDiv");
    var cmbID = (inventory ? "invRuneChoices" : "runeChoices");

    var select = document.getElementById(cmbID);
    select.innerHTML = '<option value=""></option>';
    var showUnreleased = document.getElementById("showUnreleased").checked;

    optionsDialog.hiddenOptions = [];


    $(divID).hide();
    if (card.rarity >= 3 && !card.isCommander()) {
        for (var key in RUNES) {
            var rune = RUNES[key];
            if (canUseRune(card, rune.id)) {
                var option = document.createElement('option');
                option.appendChild(document.createTextNode(rune.desc));
                option.value = rune.id;
                select.appendChild(option);
                if (rune.rarity > 3) {
                    optionsDialog.hiddenOptions.push(option);
                    option.hidden = !showUnreleased;
                }
            }
        }

        if (card.runes.length) {
            document.getElementById(cmbID).value = card.runes[0].id;
        } else {
            document.getElementById(cmbID).value = '';
        }
        if (select.childNodes.length > 0) {
            $(divID).show();
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

var toggleUnreleasedRunes = function (checkbox) {
    var runesToToggle = optionsDialog.hiddenOptions;
    for (var i = 0, len = runesToToggle.length; i < len; i++) {
        runesToToggle[i].hidden = !checkbox.checked;
    }
}

var modifyCard = function (optionsDialog) {
    var unit = optionsDialog.unit;
    if (unit !== undefined) {
        var runeID = document.getElementById("runeChoices").value;
        if (runeID) {
            unit.runes = [{ id: runeID }];
        } else {
            unit.runes = [];
        }
    } else {
        var unit = deck.commander;
    }

    unit.level = document.getElementById("upgrade").value;
    var fusion = document.getElementById("fusion").value;
    if (fusion) {
        fusion = (fusion - 1).toString();
        var unitID = unit.id.toString();
        if (unitID.length > 4) unitID = unitID.substring(1);
        if (fusion >= 0) unitID = fusion + unitID;
        unit.id = parseInt(unitID);
    }

    CARD_GUI.draw_deck(deck, removeFromDeck, showCardOptions);
    updateHash();
}

var modifyInventoriedCard = function (optionsDialog) {
    var unit = optionsDialog.unit;
    if (unit !== undefined) {
        var runeID = document.getElementById("invRuneChoices").value;
        if (runeID) {
            unit.runes = [{ id: runeID }];
        } else {
            unit.runes = [];
        }
    } else {
        var unit = deck.commander;
    }

    var fusion = document.getElementById("invFusion").value;
    var level = document.getElementById("invUpgrade").value;
    var baseFusion = unit.baseStats.fusion;

    if (fusion < baseFusion) {
        fusion = baseFusion;
        document.getElementById("invFusion").value = fusion;
    } else if (fusion == baseFusion) {
        var fused = optionsDialog.fused;
        if (fused) {
            var level = unit.baseStats.level;
            document.getElementById("invUpgrade").value = level;
            unitsShown.push(fused);
            optionsDialog.fused = null;
            var sortField = document.getElementById("sortField");
            sortCards(sortField);
            applyFilters(true, true);
        }
    } else if (fusion - baseFusion > 1) {
        fusion--;
        document.getElementById("invFusion").value = fusion;
    } else if (fusion > unit.baseStats.fusion) {
        var best;
        var index;
        for (var i = 0; i < unitsShown.length; i++) {
            var inventoryUnit = unitsShown[i];
            if (inventoryUnit.index == unit.index) {
                continue;
            }
            if (unit.id == inventoryUnit.id && unit.level == inventoryUnit.level) {
                best = inventoryUnit;
                index = i;
                break;
            }
        }
        if (best) {
            optionsDialog.fused = best;
            unitsShown.splice(index, 1);
            applyFilters(true, true);
            level = 1;
            document.getElementById("invUpgrade").value = level;
        } else {
            fusion = unit.baseStats.fusion;
            document.getElementById("invFusion").value = fusion;
        }
    } else if (fusion == unit.baseStats.fusion && level < unit.baseStats.level) {
        level = unit.baseStats.level;
        document.getElementById("invUpgrade").value = level;
    }

    unit.level = level;
    if (fusion) {
        fusion = (fusion - 1).toString();
        var unitID = unit.id.toString();
        if (unitID.length > 4) unitID = unitID.substring(1);
        if (fusion >= 0) unitID = fusion + unitID;
        unit.id = parseInt(unitID);
    }

    doDrawCardList(unitsFiltered, true);
}

var resetCard = function (optionsDialog) {
    var index = optionsDialog.index;
    deck.deck[index] = optionsDialog.originalUnit;
    CARD_GUI.draw_deck(deck, removeFromDeck, showCardOptions);
    updateHash();
}

var resetInventoriedCard = function (optionsDialog) {
    var index = optionsDialog.index;
    if (optionsDialog.fused) {
        unitsShown.push(optionsDialog.fused);
    }
    unitsFiltered[index] = optionsDialog.originalUnit;
    doDrawCardList(unitsFiltered, true);
}

var levelCosts = {
    1: [0, 5, 15],
    2: [0, 5, 15, 30],
    3: [0, 5, 15, 30, 75],
    4: [0, 5, 15, 30, 75, 150],
    5: [0, 5, 15, 30, 75, 150, 200]
};

var filterSet = function (button, set) {
    setHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < setFilters.length; i++) {
            if (setFilters[i] == set) {
                setFilters.splice(i, 1);
                break;
            }
        }
        if (set == "1000") {
            for (var i = 0; i < setFilters.length; i++) {
                if (setFilters[i] == "7000") {
                    setFilters.splice(i, 1);
                    break;
                }
            }
        }
    } else {
        button.classList.add("selected");
        setFilters.push(set);
        if (set == "1000") {
            setFilters.push("7000");
        }
    }
    if (setFilters.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < setFilters.length; j++) {
                var set = setFilters[j];
                if (isInRange(unit, "set", set, set)) {
                    hide = false;
                    break;
                }
            }
            if (hide) setHidden[makeUnitKey(unit)] = true;
        }
    }
    applyFilters();
}

var filterRarity = function (button, rarity) {
    rarityHidden = {};
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < rarityFilters.length; i++) {
            if (rarityFilters[i] == rarity) {
                rarityFilters.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        rarityFilters.push(rarity);
    }
    if (rarityFilters.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < rarityFilters.length; j++) {
                var rarity = rarityFilters[j];
                if (isInRange(unit, "rarity", rarity, rarity)) {
                    hide = false;
                    break;
                }
            }
            if (hide) rarityHidden[makeUnitKey(unit)] = true;
        }
    }
    applyFilters();
}

var applyFilters_old = function () {
    var cards = document.getElementById("cardSpace").getElementsByClassName("card");
    for (var i = 0, len = cards.length; i < len; i++) {
        var card = cards[i];
        var unit = makeUnitKey(getUnitFromCard(card));
        if (skillHidden[unit] || factionHidden[unit] || subfactionHidden[unit]
             || attackHidden[unit] || healthHidden[unit] || delayHidden[unit]
             || typeHidden[unit] || fusionHidden[unit] || setHidden[unit]
             || nameHidden[unit] || rarityHidden[unit] || skillHiddenAdv[unit]) {
            card.style.display = "none";
        } else {
            card.style.display = "";
        }
    }
}

var applyFilters = function (keepPage, skipDraw) {
    unitsFiltered = [];
    for (var i = 0, len = unitsShown.length; i < len; i++) {
        var card = unitsShown[i];
        var unit = makeUnitKey(card);
        if (skillHidden[unit] || factionHidden[unit] || subfactionHidden[unit]
             || attackHidden[unit] || healthHidden[unit] || delayHidden[unit]
             || typeHidden[unit] || fusionHidden[unit] || setHidden[unit]
             || nameHidden[unit] || rarityHidden[unit] || skillHiddenAdv[unit]) {
        } else {
            unitsFiltered.push(card);
        }
    }
    if (!skipDraw) {
        doDrawCardList(unitsFiltered, !keepPage);
    }
}

var hasSkill = function (unit, skill) {
    var card = get_slim_card_by_id(unit, true);
    var skills = card.skill;
    for (var i = 0, len = skills.length; i < len; i++) {
        if (skill == skills[i].id) return true;
    }
    return false;
}

var hasSkillAdvanced = function (unit, skillInfo) {
    var card = get_slim_card_by_id(unit, true);
    var skills = card.skill;
    for (var i = 0, len = skills.length; i < len; i++) {
        var skill = skills[i];
        if (skillInfo.id == skill.id) {
            if (skillInfo.x && (skill.x < skillInfo.x.min || skill.x > skillInfo.x.max)) return false;
            if (skillInfo.c && (skill.c < skillInfo.c.min || skill.c > skillInfo.c.max)) return false;
            if (skillInfo.y == -1 && skill.y) return false;
            if (skillInfo.y > 0 && skill.y != skillInfo.y) return false;
            if (skillInfo.s && skill.s != skillInfo.s) return false;
            if (skillInfo.all > -1 && (skill.all || "0") != skillInfo.all) return false;
            return true;
        }
    }
    return false;
}

var clearFilters = function () {
    attackHidden = {};
    attackRanges = [];

    healthHidden = {};
    healthRanges = [];

    delayHidden = {};
    delayRanges = [];

    skillFilters = [];
    skillHidden = {};
    skillFiltersAdv = [];
    skillHiddenAdv = {};

    factionHidden = {};
    subfactionHidden = {};

    rarityFilters = [];
    rarityHidden = {};

    typeFilters = [];
    typeHidden = {};

    setFilters = [];
    setHidden = {};

    fusionFilters = [];
    fusionHidden = {};

    nameHidden = {};

    $(".selected").removeClass("selected");
    $(".selected-advanced").removeClass("selected-advanced");
    $("#nameFilter").val("");

    applyFilters();
}

var isInFaction = function (unit, faction) {
    var factionID = factions.IDs[faction];
    var card = get_slim_card_by_id(unit, true);
    return (card.type == factionID);
}

var isInSubfaction = function (unit, faction) {
    var factionID = factions.IDs[faction];
    var card = get_slim_card_by_id(unit, true);
    return (card.sub_type == factionID);
}

var isInRange = function (unit, field, min, max) {
    var card = get_slim_card_by_id(unit, true);
    var value = card[field];
    if (value === undefined) return false;
    if (min >= 0 && value < min) return false;
    if (max >= 0 && value > max) return false;
    return true;
}

var toggleSkillDetails = function () {
    //doDrawCardList(unitsShown);
    applyFilters(true);
}

var toggleUpgrades = function (checkbox) {
    showUpgrades = checkbox.checked;
    /*
    CARD_GUI.clearCardSpace();

    $("body").addClass("loading");
    */
    setTimeout(function () {
        drawCardList();
        $("body").removeClass("loading");
        applyFilters(false);
    }, 1);
}

var toggleDeckDisplay = function (img) {
    var deckContainer = document.getElementById("deckContainer");
    if (deckContainer.classList.contains("collapsed")) {
        deckContainer.classList.remove("collapsed");
        img.src = "res/misc/Minus.png";
    } else {
        deckContainer.classList.add("collapsed");
        img.src = "res/misc/Plus.png";
    }
}

var toggleFilterDisplay = function (img) {
    var filters = document.getElementById("filters");
    if (filters.classList.contains("collapsed")) {
        filters.classList.remove("collapsed");
        img.src = "res/misc/Minus.png";
    } else {
        filters.classList.add("collapsed");
        img.src = "res/misc/Plus.png";
    }
}

var toggleCardDisplay = function (img) {
    var cardSpace = document.getElementById("cardSpace");
    if (cardSpace.classList.contains("collapsed")) {
        cardSpace.classList.remove("collapsed");
        img.src = "res/misc/Minus.png";
    } else {
        cardSpace.classList.add("collapsed");
        img.src = "res/misc/Plus.png";
    }
}

function sortAndDraw(select) {
    doSort(select);
    applyFilters();
}

var sortCards = function (select) {
    doSort(select);
    //doDrawCardList(unitsShown);
}

function doSort(select) {
    var sortField = select.value;
    unitsShown.sort(/* = quicksort(unitsShown, */function (unitA, unitB) {
        // Always sort by commander/unit first
        var comparison = is_commander(unitB.id) - is_commander(unitA.id);
        if (comparison != 0) return comparison;

        if (sortField == "id") {
            return compareByID(unitA, unitB);
        } else {
            var cardA = get_card_by_id(unitA);
            var cardB = get_card_by_id(unitB);
            comparison = (cardA[sortField] || 0) - (cardB[sortField] || 0);
            if (comparison != 0) return comparison;
            // Fall back on sorting by ID
            return compareByID(unitA, unitB);
        }
    });
}

function quicksort(arr, comparator) {
    //if array is empty
    if (arr.length === 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    //go through each element in array
    for (var i = 1; i < arr.length; i++) {
        if (comparator(arr[i], pivot) < 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quicksort(left, comparator).concat(pivot, quicksort(right, comparator));
}

var compareByID = function (unitA, unitB) {
    var unitIDA = unitA.id;
    var unitIDB = unitB.id;
    var keyA = (unitIDA % 10000) + "." + ~~(unitIDA / 10000) + unitA.level;
    var keyB = (unitIDB % 10000) + "." + ~~(unitIDB / 10000) + unitB.level;
    var comparison = keyA - keyB;
    if (comparison != 0) return comparison;
    return sortByRunes(unitA, unitB);
}

function sortByRunes(unitA, unitB) {
    var comparison = unitA.runes.length - unitB.runes.length;
    if (comparison != 0) return comparison;
    if (!unitA.runes.length) return 0;
    return unitA.runes[0].id - unitB.runes[0].id;
}

var makeUnitKey = function (unit) {
    return unit.id + "_" + unit.level;
}

var getUnitFromCard = function (htmlCard) {
    var unit = {
        id: htmlCard.attributes.getNamedItem("data-id").value,
        level: htmlCard.attributes.getNamedItem("data-level").value,
    };
    var runeIDs = htmlCard.attributes.getNamedItem("data-runeids").value.split(",");
    var runes = [];
    for (var i = 0, len = runeIDs.length; i < len; i++) {
        var runeID = runeIDs[i];
        if (runeID > 0) {
            runes.push({ id: runeID });
        }
    }
    var index = htmlCard.attributes.getNamedItem("data-index");
    if (index) {
        unit.index = index.value;
    }
    unit.runes = runes;
    return unit;
}

var updateDeck = function () {
    var newDeck = [];
    var newCommander = deck.commander.index;
    for (var i = 0; i < deck.deck.length; i++) {
        var unit = deck.deck[i];
        newDeck.push(unit.index);
    }
    if (newDeck.length == 15) {
        newDeck = "[" + newDeck.join() + "]";
        DeckRetriever.updateMyDeck(newCommander, newDeck);
    }
}

var skillStyle = document.createElement('style');
(function () {
    skillStyle.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(skillStyle);
})();

function setDeckName(name) {
    var lbl = document.getElementById("version_label");
    lbl.innerHTML += " " + name;
}