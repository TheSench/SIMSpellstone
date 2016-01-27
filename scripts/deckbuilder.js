var fromInventory = false;
var deck = [];
deck.commander = elariaCaptain;
deck.deck = [];

// Filters
var attackHidden = [];
var attackRanges = [];
var healthHidden = [];
var healthRanges = [];
var delayHidden = [];
var delayRanges = [];
var skillFilters = [];
var skillHidden = [];
var skillFiltersAdv = [];
var skillHiddenAdv = [];
var factionHidden = [];
var subfactionHidden = [];
var rarityFilters = [];
var rarityHidden = [];
var typeFilters = [];
var typeHidden = [];
var setFilters = [];
var setHidden = [];
var fusionFilters = [];
var fusionHidden = [];
var nameHidden = [];

var allCards = CARDS;

var showUpgrades = false;

var units = [];
var unitsShown = [];
var advancedFilters;
var optionsDialog;
var form;

var initDeckBuilder = function () {
    setupPopups();
    adjustHeight();

    $("body").addClass("loading");

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
        width: 100,
        minHeight: 20,
        modal: true,
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
        buttons: {
            OK: function () {
                setRune(optionsDialog);
                optionsDialog.dialog("close");
            },
            Cancel: function () {
                optionsDialog.dialog("close");
            }
        },
    });
}

var drawAllCards = function () {
    
    var hash = _GET('hash');
    if (hash) {
        deck = hash_decode(hash);
    } else if (_DEFINED('spoilers')) {
        deck = spoilers;
    }
    sortDeck(deck);

    units = [];
    unitsShown = [];

    var inventory = _GET('inventory');
    if (inventory) {
        fromInventory = true;
        inventory = hash_decode(inventory).deck;
        for (var i = 0; i < inventory.length; i++) {
            addInventoryUnit(inventory[i]);
        }
    } else {
        for (var id in allCards) {
            if (id < 10000) {
                addUnit(allCards[id]);
            }
        }
    }

    var name = _GET('name');
    if (name) {
        setDeckName(name);
    }

    var sortField = document.getElementById("sortField");
    if (sortField.value != "id") {
        sortCards(sortField);
    }

    draw_deck(deck, removeFromDeck, showRunePicker);
    draw_card_list(unitsShown, false, addToDeck);
    if (inventory) {
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
    }
    updateHash();
};

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

    if (fromInventory) {
        var pickedCards = document.getElementsByClassName("picked");
        while (pickedCards.length > 0) {
            pickedCards[0].classList.remove("picked");
        }
    }

    if (hash) {
        document.getElementById("hash").value = hash;
        if (typeof simulatorDeckHashField !== 'undefined') simulatorDeckHashField.value = hash;
    }
    deck = hash_decode(document.getElementById("hash").value);
    sortDeck(deck);

    if (fromInventory) {
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
    }

    draw_deck(deck, removeFromDeck, showRunePicker);
}

var sortDeck = function (deck) {
    deck.deck.sort(function (unitA, unitB) {
        var cardA = get_card_by_id(unitA);
        var cardB = get_card_by_id(unitB);
        var compare;
        compare = (cardA.rarity - cardB.rarity);
        if (compare) return compare;
        compare = (cardA.type - cardB.type);
        if (compare) return compare;
        compare = sortByID(unitA, unitB);
        if (compare) return compare;
        compare = unitA.level - unitB.level;
        if (compare) return compare;
        compare = (unitA.runes.length ? unitA.runes[0].id : 0) - (unitB.runes.length ? unitB.runes[0].id : 0);
        return compare;
    });
}

var addToDeck = function (htmlCard) {
    var unit = getUnitFromCard(htmlCard);
    if (is_commander(unit.id)) {
        deck.commander = unit;
    } else {
        if (deck.deck.length == 15) return;
        deck.deck.push(unit);
    }
    sortDeck(deck);
    if (fromInventory) htmlCard.classList.add("picked");
    draw_deck(deck, removeFromDeck, showRunePicker);
    updateHash();
};

var removeFromDeck = function (htmlCard, index) {
    if (htmlCard.classList.contains('commander')) {
        deck.commander = elariaCaptain;
    } else {
        deck.deck.splice(index, 1);
    }
    if(fromInventory) {
        var unit = getUnitFromCard(htmlCard);
        var cards = $("#cardSpace [data-id=" + unit.id + "][data-level=" + unit.level + "]");
        for(var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (card.classList.contains('picked')) {
                card.classList.remove("picked");
                break;
            }
        }
    }
    draw_deck(deck, removeFromDeck, showRunePicker);
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
    skillHiddenAdv = [];

    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        for (var s = 0; s < skillFiltersAdv.length; s++) {
            if (!hasSkillAdvanced(unit, skillFiltersAdv[s])) {
                skillHiddenAdv.push(makeUnitKey(unit));
            }
        }
    }
    for (var key in skillFiltersAdv) {
        var info = skillFiltersAdv[key];
    }
    applyFilters();
}

var filterSkill = function (button, skill) {
    skillHidden = [];
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
                skillHidden.push(makeUnitKey(unit));
                break;
            }
        }
    }
    applyFilters();
}

var filterFaction = function (button, faction) {
    factionHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
    } else {
        button.classList.add("selected");
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            if (!isInFaction(unit, faction)) {
                factionHidden.push(makeUnitKey(unit));
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
    nameHidden = [];
    var filter = field.value.toLowerCase();
    if (filter) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var card = get_slim_card_by_id(unit, true);
            if (card.name.toLowerCase().indexOf(filter) == -1) {
                nameHidden.push(makeUnitKey(unit));
            }
        }
    }
    applyFilters();
}

var filterSubfaction = function (button, faction) {
    subfactionHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
    } else {
        button.classList.add("selected");
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            if (!isInSubfaction(unit, faction)) {
                subfactionHidden.push(makeUnitKey(unit));
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
    attackHidden = [];
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
            if (hide) attackHidden.push(makeUnitKey(unit));
        }
    }
    applyFilters();
}

var filterHealth = function (button, min, max) {
    healthHidden = [];
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
            if (hide) healthHidden.push(makeUnitKey(unit));
        }
    }
    applyFilters();
}

var filterDelay = function (button, delay) {
    delayHidden = [];
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
            if (hide) delayHidden.push(makeUnitKey(unit));
        }
    }
    applyFilters();
}

var filterType = function (button, type) {
    typeHidden = [];
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
            if (hide) typeHidden.push(makeUnitKey(unit));
        }
    }
    applyFilters();
}

var filterFusion = function (button, fusion) {
    fusionHidden = [];
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
            if (hide) fusionHidden.push(makeUnitKey(unit));
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

var showRunePicker = function (htmlCard, index) {
    var unit = getUnitFromCard(htmlCard);
    var card = get_card_by_id(unit);
    optionsDialog.hiddenOptions = [];

    var select = document.getElementById("runeChoices");
    select.innerHTML = '<option value=""></option>';

    var upgradeLevel = document.getElementById("upgrade");
    upgradeLevel.max = card.maxLevel;
    upgradeLevel.value = card.level;

    var showUnreleased = document.getElementById("showUnreleased").checked;

    if(card.rarity >= 3 && !card.isCommander()) {
        $("#runeChoicesDiv").show();
        for (var key in RUNES) {
            var rune = RUNES[key];
            if (canUseRune(card, rune.id)) {
                var option = document.createElement('option');
                option.appendChild(document.createTextNode(rune.desc));
                option.value = rune.id;
                select.appendChild(option);
                if (rune.rarity > 2) {
                    optionsDialog.hiddenOptions.push(option);
                    option.hidden = !showUnreleased;
                }
            }
        }

        if (card.runes.length) {
            document.getElementById("runeChoices").value = card.runes[0].id;
        } else {
            document.getElementById("runeChoices").value = '';
        }
    } else {
        $("#runeChoicesDiv").hide();
    }

    optionsDialog.dialog("open");
    if ((htmlCard.offsetLeft + htmlCard.offsetWidth / 2 - ($("#unitOptions")[0].offsetWidth / 2)) < 10) {
        optionsDialog.dialog("option", "position", { my: "left", at: "left", of: htmlCard });;
    } else {
        optionsDialog.dialog("option", "position", { my: "center", at: "center", of: htmlCard });;
    }
    optionsDialog.index = index;

    return false;
}

var toggleUnreleasedRunes = function (checkbox) {
    var runesToToggle = optionsDialog.hiddenOptions;
    for (var i = 0, len = runesToToggle.length; i < len; i++) {
        runesToToggle[i].hidden = !checkbox.checked;
    }
}

var setRune = function (optionsDialog) {
    var index = optionsDialog.index;
    if (index !== undefined) {
        var unit = deck.deck[index];
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

    draw_deck(deck, removeFromDeck, showRunePicker);
    updateHash();
}

var filterSet = function (button, set) {
    setHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < setFilters.length; i++) {
            if (setFilters[i] == set) {
                setFilters.splice(i, 1);
                break;
            }
        }
        if(set == "1000") {
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
            if (hide) setHidden.push(makeUnitKey(unit));
        }
    }
    applyFilters();
}

var filterRarity = function (button, rarity) {
    rarityHidden = [];
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
            if (hide) rarityHidden.push(makeUnitKey(unit));
        }
    }
    applyFilters();
}

var applyFilters = function () {
    var cards = document.getElementById("cardSpace").getElementsByClassName("card");
    for (var i = 0, len = cards.length; i < len; i++) {
        var card = cards[i];
        var unit = makeUnitKey(getUnitFromCard(card));
        if (skillHidden.indexOf(unit) > -1 || factionHidden.indexOf(unit) > -1 || subfactionHidden.indexOf(unit) > -1
             || attackHidden.indexOf(unit) > -1 || healthHidden.indexOf(unit) > -1 || delayHidden.indexOf(unit) > -1
             || typeHidden.indexOf(unit) > -1 || fusionHidden.indexOf(unit) > -1 || setHidden.indexOf(unit) > -1
             || nameHidden.indexOf(unit) > -1 || rarityHidden.indexOf(unit) > -1 || skillHiddenAdv.indexOf(unit) > -1) {
            card.style.display = "none";
        } else {
            card.style.display = "";
        }
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
            if (skillInfo.all > -1 && (skill.all | "0") != skillInfo.all) return false;
            return true;
        }
    }
    return false;
}

var clearFilters = function () {
    attackHidden = [];
    attackRanges = [];
    healthHidden = [];
    healthRanges = [];
    delayHidden = [];
    delayRanges = [];

    skillFilters = [];
    skillHidden = [];

    skillFiltersAdv = [];
    skillHiddenAdv = [];

    factionHidden = [];
    subfactionHidden = [];

    rarityFilters = [];
    rarityHidden = [];

    typeFilters = [];
    typeHidden = [];

    setFilters = [];
    setHidden = [];

    fusionFilters = [];
    fusionHidden = [];

    nameHidden = [];

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
    if (min >= 0 && value < min) return false;
    if (max >= 0 && value > max) return false;
    return true;
}

var toggleSkillDetails = function (checkbox) {
    draw_card_list(unitsShown, checkbox.checked, addToDeck);
}

var toggleUpgrades = function (checkbox) {
    showUpgrades = checkbox.checked;
    clearCardSpace();

    $("body").addClass("loading");

    setTimeout(function () {
        drawAllCards();
        $("body").removeClass("loading");
        applyFilters();
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

var sortCards = function (select) {
    var sortField = select.value;
    unitsShown.sort(function (unitA, unitB) {
        // Always sort by commander/unit first
        var comparison = is_commander(unitB.id) - is_commander(unitA.id);
        if(comparison != 0) return comparison;

        if (sortField == "id") {
            return sortByID(unitA, unitB);
        } else {
            var cardA = get_card_by_id(unitA);
            var cardB = get_card_by_id(unitB);
            comparison = (cardA[sortField] | 0) - (cardB[sortField] | 0);
            if (comparison != 0) return comparison;
            // Fall back on sorting by ID
            return sortByID(unitA, unitB);
        }
    });
    draw_card_list(unitsShown, document.getElementById("skillDetails").checked, addToDeck);
    applyFilters();
}

var sortByID = function (unitA, unitB) {
    var baseIDA = unitA.id.toString();
    var baseIDB = unitB.id.toString();
    var fusionA = 0;
    var fusionB = 0;
    if (baseIDA.length > 4) {
        fusionA = baseIDA.substring(0, 1);
        baseIDA = parseInt(baseIDA.substring(1, 5));
    } else {
        baseIDA = parseInt(baseIDA);
    }
    if (baseIDB.length > 4) {
        fusionB = baseIDB.substring(0, 1);
        baseIDB = parseInt(baseIDB.substring(1, 5));
    } else {
        baseIDB = parseInt(baseIDB);
    }
    var comparison = baseIDA - baseIDB;
    if (comparison != 0) return comparison;
    return fusionA - fusionB;
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
    unit.runes = runes;
    return unit;
}

var updateDeck = function () {
    var deck = $(".picked");
    if (deck.length == 16) {
        var newDeck = [];
        var newCommander;
        for (var i = 0; i < deck.length; i++) {
            var htmlCard = deck[i];
            if (htmlCard.classList.contains("commander")) {
                newCommander = htmlCard.attributes.getNamedItem("data-index").value;
            } else {
                newDeck.push(htmlCard.attributes.getNamedItem("data-index").value)
            }

        }
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

function init(name, deckHashField, baseRequest) {
    if (name) setDeckName(name);
    if (deckHashField) simulatorDeckHashField = deckHashField;
    $.extend(DeckRetriever.baseRequest, baseRequest);
}