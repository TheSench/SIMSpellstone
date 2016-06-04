"use strict";

// TODO: Add function for re-checking filters

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
var form;

var $nameFilter;

(function ($) {
    // http://stackoverflow.com/a/26254025/1438242
    $.fn.detectFont = function () {
        var fontfamily = $(this).css('font-family');
        var fonts = fontfamily.split(',');
        if (fonts.length == 1) {
            return fonts[0];
        }

        var element = $(this);
        var detectedFont = null;
        fonts.forEach(function (font) {
            var clone = $('<span>wwwwwwwwwwwwwwwlllllllliiiiii</span>').css({ 'font-family': fontfamily, 'font-size': '70px', 'display': 'inline', 'visibility': 'hidden' }).appendTo('body');
            var dummy = $('<span>wwwwwwwwwwwwwwwlllllllliiiiii</span>').css({ 'font-family': font, 'font-size': '70px', 'display': 'inline', 'visibility': 'hidden' }).appendTo('body');
            //console.log(clone, dummy, fonts, font, clone.width(), dummy.width());
            if (clone.width() == dummy.width()) {
                detectedFont = font;
            }
            clone.remove();
            dummy.remove();
        });

        return detectedFont;
    }
}(jQuery));

var initDeckBuilder = function () {
    setupPopups();
    adjustHeight();

    stopPropagation("hash");

    $("body").addClass("loading");

    $(window).resize(onResize);

    window.onwheel = changePage;
    window.oncontextmenu = hideContext;

    $nameFilter = $('#nameFilter').keypress(function (event) {
        if (event.which == 13) {
            if (unitsFiltered.length == 1) {
                addUnitToDeck(unitsFiltered[0]);
            }
            event.preventDefault();
        }
    }).autocomplete({
        source: []
    });

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
    
    stopPropagation("advancedFilters");
    stopPropagation("unitOptions");

    $(".accordion").accordion({
        collapsible: true,
        heightStyle: "content",
    });
    
    $(".start-closed").accordion('option', 'active', false).show();

    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {

    }

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
                disableTracking = false;
                modifyCard(optionsDialog);
                optionsDialog.dialog("close");
                disableTracking = false;
            },
            Cancel: function () {
                resetCard(optionsDialog);
                optionsDialog.dialog("close");
                disableTracking = false;
            }
        },
    });
    $("#unitOptions").bind("change", function () {
        modifyCard(optionsDialog);
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

    var name = _GET('name');
    if (name) {
        setDeckName(name);
    }
    doDrawDeck();
}

function doDrawDeck() {
    CARD_GUI.draw_deck(deck, removeFromDeck, showCardOptions, highlight);
    updateHash();
};

var drawCardList = function () {

    units = [];
    unitsShown = [];

    var onlyNew = false;
    if (_DEFINED('spoilers')) {
        onlyNew = true;
        //toggleDeckDisplay(document.getElementById("collapseFilters"));
    }
    for (var id in allCards) {
        if (id < 10000) {
            if (!onlyNew) {
                addUnit(allCards[id]);
            } else if (spoilers[id]) {
                addUnit(allCards[id], spoilers);
            }
        }
    }

    var sortField = document.getElementById("sortField");
    if (sortField.value != "id") {
        sortCards(sortField);
    }

    applyFilters();
}

var page = 0;
function doDrawCardList(cardList, resetPage) {

    var detailedSkills = document.getElementById("skillDetails").checked;
    var cardspace = document.getElementById("cardSpace");

    if (resetPage) {
        page = 0;
    }

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
        CARD_GUI.draw_card_list(cardList, detailedSkills, addToDeck, hideContext, start, start + cards);
    } else {
        page = 0;
        CARD_GUI.draw_card_list(cardList, detailedSkills, addToDeck, hideContext);
    }
    document.getElementById("pageNumber").innerHTML = "Page " + (page + 1) + "/" + pages;
    var $cardSpace = $("#cardSpace");
    var cards = $cardSpace.find(".card");
    if (cards.length) {
        var card = cards[0];
        var $card = $(card);
        var minHeight = (card.offsetHeight + parseInt($card.css('marginTop')) + parseInt($card.css('marginBottom'))) * parseInt(rows);
        $cardSpace.css('min-height', minHeight +'px');

    }
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

function changePage(event) {
    if (overInventory(event)) {
        if (event.deltaY < 0) {
            pageUp();
        } else if (event.deltaY > 0) {
            pageDown();
        }
        event.preventDefault();
    }
}

function overInventory(event) {
    var element = event.srcElement;
    while (element != null) {
        if (element.id === "cardSpace") {
            return true;
        }
        element = element.parentElement;
    }
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
    applyFilters(keepPaging);
}

var addUnit = function (unit, spoilers) {
    var id = unit.id;
    var maxlevel = 1;
    if (unit.upgrades) for (var maxlevel in unit.upgrades) { }
    addUnitLevels(id, maxlevel);
    if (spoilers) {
        if (spoilers["1" + id]) addUnitLevels("1" + id, maxlevel);
        if (spoilers["2" + id]) addUnitLevels("2" + id, maxlevel);
    } else if (id > 999 && allCards["1" + id]) {
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

var disableTracking = false;
var hash_changed = function (hash) {

    hash = (hash || document.getElementById("hash").value.trim());
    document.getElementById("hash").value = hash;

    if (typeof simulatorDeckHashField !== 'undefined') simulatorDeckHashField.value = hash;
    deck = hash_decode(hash);

    doDrawDeck();
}

var sortDeck = function () {
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
    doDrawDeck();
}

var addToDeck = function (htmlCard) {
    var unit = getUnitFromCard(htmlCard);
    addUnitToDeck(unit);
}

var addUnitToDeck = function (unit) {
    if (is_commander(unit.id)) {
        deck.commander = unit;
    } else {
        if (deck.deck.length == 15 && !_DEFINED("unlimited")) return;
        deck.deck.push(unit);
    }
    doDrawDeck();
};

var removeFromDeck = function (htmlCard, index) {
    var unit;
    if (htmlCard.classList.contains('commander')) {
        unit = deck.commander;
        deck.commander = elariaCaptain;
    } else {
        unit = deck.deck.splice(index, 1)[0];
    }
    doDrawDeck();
};

var highlight = function (htmlCard, index) {
    if (index === undefined) {
        index = 0;
    } else {
        index++;
    }
    highlighted = index;
    updateHighlights();
}

var highlighted = -1;
function updateHighlights() {
    var deckHash = document.getElementById("hash").value;
    
    var start = highlighted * 5;
    var end = start + 5;
    var highlightedHash = deckHash.substring(0, start) + '<span>' + deckHash.substring(start, end) + '</span>' + deckHash.substring(end);
    
    document.getElementById('hash_highlighter').innerHTML = highlightedHash;
}

var updateHash = function () {
    var deckHash = hash_encode(deck);
    document.getElementById("hash").value = deckHash;

    updateHighlights();

    addChange(deckHash);

    if (typeof simulatorDeckHashField !== 'undefined') simulatorDeckHashField.value = deckHash;

    updateGraphs();
}

var updateGraphs = function () {

    var delays = [0, 0, 0, 0, 0];
    var attackStats = [];
    var healthStats = [];
    var delayStats = [];
    var types = {};
    var sub_types = {};
    for (var i = 0; i < deck.deck.length; i++) {
        var unit = deck.deck[i];
        var card = get_card_by_id(unit);
        delays[card.cost]++;
        types[card.type] = (types[card.type] || 0) + 1;
        attackStats.push(Number(card.attack));
        healthStats.push(Number(card.health));
        delayStats.push(Number(card.cost));
        var sub_type = (card.sub_type || 0);
        sub_types[sub_type] = (sub_types[sub_type] || 0) + 1;
    }
    var numericSort = function (a, b) { return a - b };
    attackStats.sort(numericSort);
    healthStats.sort(numericSort);
    delayStats.sort(numericSort);

    function sum(total, num) {
        return total + num;
    }
    function average(ary) {
        return (ary.length ? (ary.reduce(sum) / ary.length).toFixed(0) : 0);
    }
    var avgAttack = average(attackStats);
    var avgHealth = average(healthStats);
    var avgDelay = average(delayStats);
    
    var options = {
        width: 300,
        height: 200,
        axisY: {
            onlyInteger: true
        },
        plugins: [
            Chartist.plugins.legend(),
            Chartist.plugins.tooltip()
        ],
        series: {
            'Attack': {
                lineSmooth: Chartist.Interpolation.simple()
            },
            'Health': {
                lineSmooth: Chartist.Interpolation.simple()
            },
            'Delay': {
                lineSmooth: Chartist.Interpolation.simple()
            }
        }
    };

    new Chartist.Line('#statChart', {
        series: [
            { name: 'Attack', className: 'ct-series-attack', data: attackStats },
            { name: 'Health', className: 'ct-series-health', data: healthStats },
            { name: 'Delay', className: 'ct-series-delay', data: delayStats }
        ]
    }, options);

    var options = {
        width: 300,
        height: 200,
        axisY: {
            onlyInteger: true
        },
        distributeSeries: true
    };
    var data = { labels: ['0', '1', '2', '3', '4'], series: delays };
    new Chartist.Bar('#delayChart', data, options);

    var data = { labels: ['Attack', 'Health', 'Delay'], series: [
            { value: avgAttack, className: 'ct-series-attack' },
            { value: avgHealth, className: 'ct-series-health' },
            { value: avgDelay, className: 'ct-series-delay' }
    ]};
    new Chartist.Bar('#averagesChart', data, options).on('draw', function(data) {
        var barHorizontalCenter, barVerticalCenter, label, value;
        if (data.type === "bar") {
            barHorizontalCenter = data.x1 + (data.element.width() * .5);
            barVerticalCenter = data.y1 + (data.element.height() * -1) - 10;
            value = data.element.attr('ct:value');
            if (value !== '0') {
                label = new Chartist.Svg('text');
                label.text(value);
                label.addClass("ct-barlabel");
                label.attr({
                    x: barHorizontalCenter,
                    y: barVerticalCenter,
                    'text-anchor': 'middle'
                });
                return data.group.append(label);
            }
        }
    });

    var options = {
        width: 450,
        height: 200,
        labelInterpolationFnc: function (label, i) {
            return data.series[i].value;
        },
        plugins: [
            Chartist.plugins.legend()
        ]
    };

    var labels = [];
    var data = [];
    for (var key in types) {
        var factionName = factions.names[key];
        labels.push(factionName);
        data.push({
            value: types[key],
            className: "ct-series-" + factionName
        });
    }
    var data = { labels: labels, series: data };
    new Chartist.Pie('#factionChart', data, options);

    options.labelInterpolationFnc = function (label, i) {
        return data2.series[i].value;
    };
    var labels = [];
    var data2 = [];
    for (var key in sub_types) {
        var factionName = factions.names[key];
        labels.push(factionName);
        data2.push({
            value: sub_types[key],
            className: "ct-series-" + factionName
        });
    }
    var data2 = { labels: labels, series: data2 };
    new Chartist.Pie('#subfactionChart', data2, options);
}

var changeTracking = [];
var currentChange = -1;
function addChange(hash) {
    if (!disableTracking) {
        currentChange++;
        changeTracking[currentChange] = hash;
        changeTracking.length = currentChange + 1;
        if (currentChange > 100) {
            currentChange--;
            changeTracking.splice(0, 1);
        }
    }
}

function KeyPress(e) {
    var evtobj = window.event ? event : e
    if (evtobj.ctrlKey) {
        if (evtobj.keyCode == 90) {
            undo();
        } else if (evtobj.keyCode == 89) {
            redo();
        }
    }
}

document.onkeydown = KeyPress;

function stopPropagation(id) {
    document.getElementById(id).onkeydown = function (e) {
        e.stopPropagation();
    }
}

function undo() {
    if (currentChange > 0) {
        disableTracking = true
        currentChange--;
        var hash = changeTracking[currentChange];
        document.getElementById("hash").value = hash;
        deck = hash_decode(hash);
        doDrawDeck();
        disableTracking = false;
    }
}

function redo() {
    if (currentChange < changeTracking.length - 1) {
        disableTracking = true;
        currentChange++;
        var hash = changeTracking[currentChange];
        document.getElementById("hash").value = hash;
        deck = hash_decode(hash);
        doDrawDeck();
        disableTracking = false;
    }
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

var nameDebouncer = null;
var filterName = function (field) {
    var filter = field.value.toLowerCase();
    if (nameDebouncer !== null) {
        clearTimeout(nameDebouncer);
    }
    nameDebouncer = setTimeout(filterNameInner, 250, filter);
}

function filterNameInner(filter) {
    nameHidden = {};
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
        case 'armored':
        case 'berserk':
        case 'burn':
        case 'counter':
        case 'evade':
        case 'frost':
        case 'leech':
        case 'nullify':
        case 'pierce':
        case 'poison':
        case 'valor':
            $("div#amount").show();
            break;
            // x="1" y="1" all="0" c="0" s="0"
        case 'fervor':
        case 'legion':
        case 'reanimate':
        case 'resurrect':
            $("div#amount").show();
            $("div#faction").show();
            break;
            // x="1" y="1" all="1" c="0" s="0"
        case 'heal':
        case 'protect':
        case 'protect_ice':
        case 'rally':
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
        case 'imbue':
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
    optionsDialog.index = index;
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

    if ($("#upgradeDiv").css('display') == "none" || $("#fusionDiv").css('display') == "none") {
        $("#upgradeDiv").add("#fusionDiv").toggleClass("split", false);
    } else {
        $("#upgradeDiv").add("#fusionDiv").toggleClass("split", true);
    }

    if (showRunePicker(card)) {
        show = true;
    }

    if (show) {
        disableTracking = true;
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

var showRunePicker = function (card) {
    var select = document.getElementById("runeChoices");
    select.innerHTML = '<option value=""></option>';
    var showUnreleased = document.getElementById("showUnreleased").checked;

    optionsDialog.hiddenOptions = [];


    $("#runeChoicesDiv").hide();
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
                    option.disabled = !showUnreleased;
                }
            }
        }

        if (card.runes.length) {
            document.getElementById("runeChoices").value = card.runes[0].id;
        } else {
            document.getElementById("runeChoices").value = '';
        }
        if (select.childNodes.length > 0) {
            $("#runeChoicesDiv").show();
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
        runesToToggle[i].disabled = !checkbox.checked;
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
    var card = get_card_by_id(unit);
    showRunePicker(card);
    doDrawDeck();
}



var resetCard = function (optionsDialog) {
    var index = optionsDialog.index;
    if (index !== undefined) {
        deck.deck[index] = optionsDialog.originalUnit;
    } else {
        deck.commander = optionsDialog.originalUnit;
    }
    doDrawDeck();
}

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
    var names = [];
    var addedNames = {};
    for (var i = 0, len = unitsShown.length; i < len; i++) {
        var unit = unitsShown[i];
        var key = makeUnitKey(unit);
        if (skillHidden[key] || factionHidden[key] || subfactionHidden[key]
             || attackHidden[key] || healthHidden[key] || delayHidden[key]
             || typeHidden[key] || fusionHidden[key] || setHidden[key]
             || nameHidden[key] || rarityHidden[key] || skillHiddenAdv[key]) {
        } else {
            unitsFiltered.push(unit);
            var card = get_card_by_id(unit);
            if (!addedNames[card.name]) {
                names.push(card.name);
                addedNames[card.name] = true;
            }
        }
    }
    $nameFilter.autocomplete("option", { source: names });

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
            if (skillInfo.x && (skill.x < skillInfo.x.min || skill.x > skillInfo.x.max)) continue;
            if (skillInfo.c && (skill.c < skillInfo.c.min || skill.c > skillInfo.c.max)) continue;
            if (skillInfo.y == -1 && skill.y) continue;
            if (skillInfo.y > 0 && skill.y != skillInfo.y) continue;
            if (skillInfo.s && skill.s != skillInfo.s) continue;
            if (skillInfo.all > -1 && (skill.all || "0") != skillInfo.all) continue;
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
/*
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
*/
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

var skillStyle = document.createElement('style');
(function () {
    skillStyle.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(skillStyle);
})();

function setDeckName(name) {
    var lbl = document.getElementById("version_label");
    lbl.innerHTML += " " + name;
}

function getHashFromHTML(card) {
    var htmlDeck = card.item.parent().children();
    var newDeck = {
        commander: elariaCaptain,
        deck: []
    }
    for (var i = 0; i < htmlDeck.length; i++) {
        var htmlCard = htmlDeck[i];
        if (htmlCard.classList.contains("blank")) continue;

        var unit = getUnitFromCard(htmlCard);
        if (is_commander(unit.id)) {
            newDeck.commander = unit;
        } else {
            newDeck.deck.push(unit);
        }
    }
    deck = newDeck;

    doDrawDeck();
}