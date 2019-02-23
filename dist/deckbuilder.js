// Convert skills to 1.0 version
for(var skillID in SKILL_DATA) {
	var skillInfo = SKILL_DATA[skillID];
	if(skillID === 'flurry') {
		skillInfo.type = 'flurry';
	} else if(['turnStart', 'onAttack', 'onDamaged', 'turnEnd'].indexOf(skillInfo.type) >= 0) {
		skillInfo.type = 'passive';
	}
}
// Create REVERSE_FUSIONS
var REVERSE_FUSIONS = {};
for(var id in FUSIONS) {
	var fusion = FUSIONS[id];
	REVERSE_FUSIONS[fusion] = id;
}

// Remove Iceshatter Barrier
delete BATTLEGROUNDS[104];;'use strict';

var base64 = require('base64');
var cardApi = require('cardApi');
var runeApi = require('runeApi');
var cardInfo = require('cardInfo');
var factions = require('factions');
var unitInfoHelper = require('unitInfoHelper');
var urlHelper = require('urlHelper');
var cardUI = require('cardUI');
var storageAPI = require('storageAPI');
var dataUpdater = require('dataUpdater');
var loadCardCache = require('loadCardCache');

// TODO: Add function for re-checking filters
var delayTutorial = true;

var fromInventory = false;
var deck = [];
deck.commander = unitInfoHelper.defaultCommander;
deck.deck = [];
var inventory;
var inventoryMode = false;

// Filters
var attackHidden = {};
var attackRanges = [];
var healthHidden = {};
var healthRanges = [];
var delayHidden = {};
var delayRanges = [];
var delayExclusions = [];
var skillFilters = [];
var skillExclusions = [];
var skillHidden = {};
var skillFiltersAdv = [];
var skillHiddenAdv = {};
var factionHidden = {};
var subfactionHidden = {};
var dualFactionHidden = {};
var rarityFilters = [];
var rarityHidden = {};
var typeFilters = [];
var typeHidden = {};
var setFilters = [];
var setExclusions = [];
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
var saveDeckDialog;
var loadDeckDialog;
var detailsDialog;

var $nameFilter;
var $deck;
var $cardSpace;

$(function initDeckBuilder() {
	if (!urlHelper.paramDefined("fromSim")) {
		$("#header").load("templates/header.html", function () {
			$("#header").show();
			if (typeof showTutorial !== "undefined") {
				$("#help").click(showTutorial);
			}
		});
		$.holdReady(true);
		$("#footer").load("templates/footer.html", function () {
			$("#footer").show();
			$.holdReady(false);
		});
	}

	setupPopups();

	stopPropagation("hash");

	$("body").addClass("loading");

	addDeckEventHandlers($("#deck"));
	addLibraryEventHandlers($("#cardSpace"));

	$(window).resize(onResize);

	window.onwheel = changePage;
	window.oncontextmenu = hideContext;

	$("#rows").val(storageAPI.getField("deckBuilder", "rows", 3));
	$("#rows").bind("change", function () {
		storageAPI.setField("deckBuilder", "rows", $("#rows").val());
	});

	$nameFilter = $('#nameFilter').keypress(function (event) {
		if (event.which === 13) {
			if (unitsFiltered.length === 1) {
				addUnitToDeck(unitsFiltered[0], $cardSpace.children()[0]);
			}
			event.preventDefault();
		}
	}).autocomplete({
		source: []
	});

	$("#deck").sortable({
		items: '.card:not(.commander):not(.blank)',
		tolerance: "intersect",
		helper: function (event, ui) {
			return ui.clone();
		},
		start: function (event, ui) {
			var lastPos = ui.placeholder.index() - 1;
			ui.item.data('last_pos', lastPos);
			$(ui.item).hide();
		},
		change: function (event, ui) {
			var origPos = ui.item.index();
			var lastPos = ui.item.data('last_pos') - 1;
			var newPos = ui.placeholder.index();
			if (origPos < newPos) newPos--;
			highlighted = newPos;
			ui.item.data('last_pos', newPos);
			newPos--;

			var array = deck.deck;
			array.splice(newPos, 0, array.splice(lastPos, 1)[0]);
			updateHash();
			updateHighlights();
		}
	});

	inventory = (urlHelper.paramValue('inventory') || inventory);

	$("[name=rarity]").click(makeOnClickFilter(filterRarity));
	$("input[name=faction]").click(makeOnClickFilter(filterFaction));
	$("input[name=subfaction]").click(makeOnClickFilter(filterSubfaction));
	$("[name=delay]").click(makeOnClickFilter(filterDelay));
	$("[name=set]").click(makeOnClickFilter(filterSet));
	$("#dualfaction").click(makeOnClickFilter(filterDualFaction));
	$('input[name=CardType]').click(makeOnClickFilter(filterType));
	$('input[name=fusion]').click(makeOnClickFilter(filterFusion));

	if (urlHelper.paramDefined("spoilers") || urlHelper.paramDefined("latestCards")) {
		$("#loadingSplash").html("Checking for New Cards...");
		updateGameData();
	} else {
		loadCardCache();
		setTimeout(loadCards, 1);
	}

	if (urlHelper.paramDefined("unlimited")) {
		$deck = $("#deck");
		toggleInventoryMode();
	}

	$("#graph-accordion").click(updateGraphs);

	$('#hash').change(hash_changed.debounce(100))
		.on('paste', hash_changed);
	$('#resetDeck').click(resetDeck);
	$('#sortDeck').click(sortDeck);
	$('#saveDeck').click(saveDeck);
	$('#loadDeck').click(loadDeck);
	$('#updateGameData').click(updateGameData);
	$('#inventoryMode').click(toggleInventoryMode);

	$('#nameFilter').keyup(filterName);
	$('#clear-filters').click(clearFilters);

	$('#pageUp').click(pageUp);
	$('#pageDown').click(pageDown);
	$('#loadInventory').click(loadInventory);
	$('#toggleUpgrades').click(toggleUpgrades);
	$('#skillDetails').click(toggleSkillDetails);
	

	$('#sortField').change(sortAndDraw);
});

function makeUnitKey(unit) {
    var unitKey = unit.id + "_" + unit.level;
    if (unit.runes && unit.runes.length) {
        unitKey += "_" + unit.runes[0].id;
    }
    return unitKey;
}

function updateGameData() {
	setTimeout(dataUpdater.updateData, 1, loadCards, true);
}

function loadCards() {
	allCards = CARDS;
	$("#loadingSplash").html("Loading...");
	drawAllCards();
	$("body").removeClass("loading");
	checkTutorial();
}

function setupPopups() {

	stopPropagation("advancedFilters");
	stopPropagation("unitOptions");

	$(".accordion").accordion({
		collapsible: true,
		heightStyle: "content"
	});

	$(".start-closed").accordion('option', 'active', false).show();

	if (urlHelper.paramDefined("spoilers")) {
		$("#deck-container, #filter-container").accordion('option', 'active', false).show();
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
		open: closeDialogOnOverlayClick
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
				updateHash();
				optionsDialog.dialog("close");
				disableTracking = false;
			},
			Cancel: function () {
				resetCard(optionsDialog);
				optionsDialog.dialog("close");
				disableTracking = false;
			}
		},
		open: closeDialogOnOverlayClick
	}).bind("change", function () {
		modifyCard(optionsDialog);
	});

	var imageButtons = $('input[type="image"]:not(.skill-filter)');
	for (var i = 0; i < imageButtons.length; i++) {
		var imageButton = imageButtons[i];
		var toolTip = '<div class="tooltip">' + imageButton.getAttribute("title") + '</div>';
		imageButton.removeAttribute("title");
		var orig_html = imageButton.outerHTML;
		var new_html = '<div style="display:inline; position:relative; overflow:visible;">' + orig_html + toolTip + '</div>';
		imageButton.outerHTML = new_html;
	}

	saveDeckDialog = $("#saveDeckDialog").dialog({
		autoOpen: false,
		/*
		width: 250,
		minHeight: 20,
		*/
		modal: true,
		resizable: false,
		buttons: {
			Save: function () {
				var name = $("#saveDeckName").val();
				var hash = $("#hash").val();
				storageAPI.saveDeck(name, hash);
				saveDeckDialog.dialog("close");
			},
			Cancel: function () {
				saveDeckDialog.dialog("close");
			}
		},
		open: closeDialogOnOverlayClick
	});

	loadDeckDialog = $("#loadDeckDialog").dialog({
		autoOpen: false,
		minWidth: 320,
		/*
		minHeight: 20,
		*/
		modal: true,
		resizable: false,
		buttons: {
			Delete: function () {
				var name = $("#loadDeckName").val();
				storageAPI.deleteDeck(name);
			},
			Load: function () {
				var name = $("#loadDeckName").val();
				var newHash = storageAPI.loadDeck(name);
				loadDeckDialog.onloaded(newHash);
				loadDeckDialog.dialog("close");
			},
			Cancel: function () {
				loadDeckDialog.dialog("close");
			}
		},
		open: closeDialogOnOverlayClick
	});

	detailsDialog = $("#detailedView").dialog({
		minWidth: 480,
		minHeight: 330,
		padding: 0,
		autoOpen: false,
		modal: true,
		resizable: false,
		open: closeDialogOnOverlayClick,
		close: function () {
			cardDetailScope.visible = false;
		}
	});
}

function closeDialogOnOverlayClick() {
	var targetDialog = $(this);
	jQuery('.ui-widget-overlay')
		.bind('click contextmenu', function onClickOverlay(event) {
			targetDialog.dialog('close');
			event.preventDefault();
		});
}

function drawAllCards() {
	drawCardList();
	drawDeck();
}

function drawDeck() {

	var hash = urlHelper.paramValue('hash') || $("#hash").val();
	if (hash) {
		hash_changed(hash);
	}

	var name = urlHelper.paramValue('name');
	if (name) {
		setDeckName(name);
	}
	doDrawDeck();
}

function doDrawDeck() {
	/*if (inventoryMode) {
		$deck = cardUI.displayInventory(deck.deck);
	} else */ {
		$deck = cardUI.displayDeck(deck, inventoryMode);
	}
	updateHash();
}

function addDeckEventHandlers($deck) {
	addCardEvent($deck, "mousedown", duplicate);
	//addCardEvent($deck, "mouseup", duplicate);
	addCardEvent($deck, "mouseover", highlight);
	addCardEvent($deck, "click", deckOnClick);
	addCardEvent($deck, "contextmenu", showCardOptions);
}

function addLibraryEventHandlers($cardSpace) {
	addCardEvent($cardSpace, "click", addToDeck);
	addCardEvent($cardSpace, "contextmenu", showDetails);
}

function addCardEvent($collection, eventName, callback) {
	if (callback) {
		$collection.on(eventName, function (event) {
			var htmlCard = event.target.closest('.card');
			if (htmlCard && !htmlCard.classList.contains('blank')) {
				var i = $(htmlCard).attr('data-i');
				return callback(event, htmlCard, i);
			}
		});
	}
}

function showDetails(event, htmlCard) {
	event.preventDefault();

	var unit = getUnitFromCard(htmlCard);

	cardDetailScope.setUnit(unit).$apply();
	cardDetailScope.visible = true;

	detailsDialog.dialog("option", "position", { my: "center", at: "center", of: window });
	detailsDialog.dialog("open");

	detailsDialog.onloaded = setInventory;
}

function duplicate(event, htmlCard) {
	if (event.ctrlKey) {
		var $htmlCard = $(htmlCard);
		if (!inventoryMode) {
			var emptySpaces = $htmlCard.parent().find(".blank");
			if (!emptySpaces.length) {
				return;
			}
			emptySpaces.first().remove();
		}
		var index = $htmlCard.index();
		var unit = deck.deck[index - 1];
		var clone = $htmlCard.clone();
		clone.insertBefore($htmlCard.parent().children()[index]);
		deck.deck.splice(index, 0, unitInfoHelper.create(unit.id, unit.level, unit.runes || []));
		updateHash();
	}
}

function deckOnClick(event, htmlCard) {
	if (!event.ctrlKey) {
		removeFromDeck(htmlCard);
	}
}

function drawCardList() {
	units = [];
	unitsShown = [];
	if (inventory) {
		fromInventory = true;
		inventory = base64.decodeHash(inventory);
		var commander = inventory.commander;
		inventory = inventory.deck;
		if (commander && !unitInfoHelper.areEqual(commander, unitInfoHelper.defaultCommander)) {
			inventory.push(commander);
		}

		for (var i = 0; i < inventory.length; i++) {
			addInventoryUnit(inventory[i]);
		}
		deck.commander = removeFromInventory(deck.commander);
		for (var i = 0; i < deck.deck.length; i++) {
			var unit = deck.deck[i];
			deck.deck[i] = removeFromInventory(unit);
		}
	} else {
		if (urlHelper.paramDefined('spoilers')) {
			for (var id in spoilers) {
				addUnitLevels(id);
			}
		} else {
			for (var id in allCards) {
				if (id < 10000) {
					addUnit(id);
				}
			}
		}
	}

	sortCards();

	applyFilters();
}

var page = 0;
var pages = 0;
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
		if (!unitInfoHelper.areEqual(unit, lastUnit)) unique++;
		lastUnit = unit;
	}
	pages = Math.max(Math.ceil(unique / cards), 1);
	if (pages > 1) {
		var start = cards * page;
		if (page >= pages) {
			page = pages - 1;
			start = cards * page;
		}
		cardUI.displayCardList(cardList, detailedSkills, start, start + cards);
	} else {
		page = 0;
		cardUI.displayCardList(cardList, detailedSkills);
	}
	document.getElementById("pageNumber").innerHTML = "Page " + (page + 1) + "/" + pages;
	$cardSpace = $("#cardSpace");
	var $cards = $cardSpace.find(".card");
	if ($cards.length) {
		var card = $cards[0];
		var $card = $(card);
		var minHeight = (card.offsetHeight + parseInt($card.css('marginTop')) + parseInt($card.css('marginBottom'))) * parseInt(rows);
		$cardSpace.css('min-height', minHeight + 'px');
	}
}

var onResize = (function () {
	//redrawCardList(true);
	applyFilters(true);
}).debounce(50);

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
	} else {
		//redrawCardList(true);
		applyFilters(true);
	}
}

function pageDown() {
	page++;
	if (page >= pages) {
		page--;
	} else {
		//redrawCardList(true);
		applyFilters(true);
	}
}

function redrawCardList(keepPaging) {
	sortCards();
	applyFilters(keepPaging);
}

function addInventoryUnit(unit) {
	units.push(unit);
	unitsShown.push(unit);
}

function addUnit(id, spoilers) {
	addUnitLevels(id);
	if (spoilers) {
		if (spoilers["1" + id]) addUnitLevels("1" + id);
		if (spoilers["2" + id]) addUnitLevels("2" + id);
	} else if (id > 999) {
		addUnitLevels("1" + id);
		addUnitLevels("2" + id);
	}
}

function addUnitLevels(id) {
	var card = allCards[id];
	if (card) {
		for (var level = 1; level <= card.maxLevel; level++) {
			var unit = unitInfoHelper.create(id, level);
			units.push(unit);
			if (showUpgrades || level === card.maxLevel) unitsShown.push(unit);
		}
	}
}

function resetDeck() {
	/*if (inventoryMode) {
		hash_changed('');
	} else */ {
		hash_changed('oZ0IB');
	}
}

var disableTracking = false;
function hash_changed(hash) {
	if (fromInventory) {
		if (!unitInfoHelper.areEqual(deck.commander, unitInfoHelper.defaultCommander)) unitsShown.push(deck.commander);
		unitsShown.push.apply(unitsShown, deck.deck);
		redrawCardList(true);
	}
	if (hash === undefined) hash = document.getElementById("hash").value.trim();
	setHash(hash);

	updateSimulator(hash);

	deck = base64.decodeHash(hash);

	if (!hash) deck.commander = null;

	if (fromInventory) {
		if (!unitInfoHelper.areEqual(deck.commander, unitInfoHelper.defaultCommander)) removeFromInventory(deck.commander);
		for (var i = 0; i < deck.deck.length; i++) {
			removeFromInventory(deck.deck[i]);
		}
		applyFilters();
	}

	doDrawDeck();

	generateLink();
}

function setHash(hash) {
	$("#hash").val(hash);
	generateLink();
}

function sortDeck() {
	deck.deck.sort(function (unitA, unitB) {
		var cardA = cardApi.byId(unitA);
		var cardB = cardApi.byId(unitB);
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

function addToDeck(event, htmlCard) {
	var unit = getUnitFromCard(htmlCard);
	addUnitToDeck(unit, htmlCard);
}

function addUnitToDeck(unit, htmlCard) {
	var $htmlCard = $(htmlCard).clone().find(".multiplier").remove().end();

	if (!inventoryMode) {
		unit = Object.assign({}, unit);
	}

	var $deck = $("#deck");
	/*
	if (inventoryMode) {
		deck.deck.push(unit);
		//$deck.append($htmlCard);
		doDrawDeck();
	} else*/ if (cardInfo.isCommander(unit.id)) {

		if (unitInfoHelper.areEqual(deck.commander, unit)) return;
		deck.commander = unit;
		replaceCard($deck.find(".card").first(), $htmlCard);
	} else {
		if (!inventoryMode && deck.deck.length === 15) return;
		deck.deck.push(unit);
		var emptySpaces = $deck.find(".blank");
		if (emptySpaces.length) {
			replaceCard(emptySpaces.first(), $htmlCard);
		} else {
			$deck.append($htmlCard);
		}
	}

	$htmlCard = $(htmlCard);
	if (fromInventory) {
		removeFromInventory(unit);
		var $mult = $htmlCard.find("div.multiplier");
		if ($mult.length > 0) {
			var count = Number($mult.attr("data-count")) - 1;
			if (count > 1) {
				$mult.attr("data-count", count);
				$mult.html("x" + count);
			} else {
				$htmlCard.find(".multiplier").remove();
			}
		} else {
			$htmlCard.remove();
		}
	} else {
		$htmlCard.stop().hide().fadeIn(100);
	}
	updateHash();
}

function replaceCard(oldCard, newCard) {
	var speed = (oldCard.hasClass("blank") ? 1000 : 600);
	$(oldCard).replaceWith(newCard);
	newCard.children().stop().hide().fadeIn(speed).promise();
}


function removeFromInventory(unit) {
	for (var i = 0; i < unitsShown.length; i++) {
		var unit_i = unitsShown[i];
		if (unitInfoHelper.areEqual(unit, unit_i)) {
			var removed = unitsShown.splice(i, 1);
			return removed[0];
		}
	}
	return unit;
}

function removeFromDeck(htmlCard) {
	var unit;
	var $htmlCard = $(htmlCard);
	var index = $htmlCard.index();
	
	if (index === 0) {
		unit = deck.commander;
		if (unitInfoHelper.areEqual(unit, unitInfoHelper.defaultCommander)) return;
		deck.commander = unitInfoHelper.defaultCommander;
		var card = cardApi.byId(unitInfoHelper.defaultCommander);
		var captain = $(cardUI.cardToHtml(card));
		replaceCard($htmlCard, captain);
	} else {
		unit = deck.deck.splice(index - 1, 1)[0];

		$htmlCard.remove();
		if (deck.deck.length < 15) {
			$deck.append("<div class='card blank'></div>");
		}
	}


	if (fromInventory) {
		unitsShown.push(unit);
		redrawCardList(true);
	}

	updateHash();
}

function highlight(event, htmlCard) {
	highlighted = $(htmlCard).index();
	updateHighlights();
}

var highlighted = -1;
function updateHighlights() {
	var hash_highlighted = document.getElementById("hash");
	var deckHash = hash_highlighted.value;

	var start = highlighted * 5;
	var end = start + 5;
	var highlightedHash = deckHash.substring(0, start) + '<span>' + deckHash.substring(start, end) + '</span>' + deckHash.substring(end);

	var hash_highlighter = document.getElementById('hash_highlighter');
	hash_highlighter.innerHTML = highlightedHash;
	$(hash_highlighter).width($(hash_highlighted).width());
}

function updateHash() {
	var deckHash = base64.encodeHash(deck);
	setHash(deckHash);

	updateHighlights();

	addChange(deckHash);

	updateSimulator(deckHash);

	updateGraphs();
}

function updateSimulator() {
	// Placeholder function - set by Simulator
}

function updateGraphs() {
	var graphsContainer = $("#deckGraphs");
	if (!graphsContainer.is(":visible")) {
		return null;
	}
	var delays = [0, 0, 0, 0, 0];
	var attackStats = [];
	var healthStats = [];
	var delayStats = [];
	var types = {};
	var sub_types = {};
	for (var i = 0; i < deck.deck.length; i++) {
		var unit = deck.deck[i];
		var card = cardApi.byId(unit);
		delays[card.cost]++;
		types[card.type] = (types[card.type] || 0) + 1;
		attackStats.push(Number(card.attack));
		healthStats.push(Number(card.health));
		delayStats.push(Number(card.cost));

		var subFactions = card.sub_type;
		if (!subFactions.length) subFactions.push(0);
		for (var s = 0; s < subFactions.length; s++) {
			var subFaction = subFactions[s];
			sub_types[subFaction] = (sub_types[subFaction] || 0) + 1;
		}
	}
	function numericSort(a, b) { return a - b; }
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

	var data = {
		labels: ['Attack', 'Health', 'Delay'], series: [
			{ value: avgAttack, className: 'ct-series-attack' },
			{ value: avgHealth, className: 'ct-series-health' },
			{ value: avgDelay, className: 'ct-series-delay' }
		]
	};
	new Chartist.Bar('#averagesChart', data, options).on('draw', function (data) {
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

	options.labelInterpolationFnc = function labelInterpolationFnc(label, i) {
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


	var attackStats = [];
	var healthStats = [];
	var delayStats = [];
	var types = {};
	var sub_types = {};
	for (var i = 0; i < deck.deck.length; i++) {
		var unit = deck.deck[i];
		var card = cardApi.byId(unit);
		delays[card.cost]++;
		types[card.type] = (types[card.type] || 0) + 1;
		attackStats.push(Number(card.attack));
		healthStats.push(Number(card.health));
		delayStats.push(Number(card.cost));

		var subFactions = card.sub_type;
		if (!subFactions.length) subFactions.push(0);
		for (var s = 0; s < subFactions.length; s++) {
			var subFaction = subFactions[s];
			sub_types[subFaction] = (sub_types[subFaction] || 0) + 1;
		}
	}
	var numericSort = function numericSort(a, b) { return a - b; };
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

	var totalHealth = cardApi.byId(deck.commander).health + healthStats.reduce(function (prev, curr) { return prev + curr; }, 0);
	var HPPL = totalHealth / 15;
	var labels = [];
	var healthNeeded = [];
	for (var i = 0; i <= 15; i++) {
		labels.push(130 - i);
		healthNeeded.push(Math.ceil(HPPL * i));
	}

	var options = {
		width: 500,
		height: 200,
		axisY: {
			onlyInteger: true
		},
		plugins: [
			Chartist.plugins.legend(),
			Chartist.plugins.tooltip()
		]
	};
	new Chartist.Line('#hpplChart', {
		labels: labels,
		series: [
			{ name: 'Health Lost', className: 'ct-series-attack', data: healthNeeded }
		]
	}, options);
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
	var evtobj = window.event ? event : e;
	if (evtobj.ctrlKey) {
		if (evtobj.keyCode === 90) {
			undo();
		} else if (evtobj.keyCode === 89) {
			redo();
		}
	}
}

document.onkeydown = KeyPress;

function stopPropagation(id) {
	document.getElementById(id).onkeydown = function (e) {
		e.stopPropagation();
	};
}

function undo() {
	if (currentChange > 0) {
		var $hash = $(document.getElementById("hash"));
		$hash.on("focus", preventFocus);

		disableTracking = true;

		currentChange--;
		var hash = changeTracking[currentChange];
		setHash(hash);
		deck = base64.decodeHash(hash);
		doDrawDeck();

		$hash.off("focus");
		disableTracking = false;
	}
}

function redo() {
	if (currentChange < changeTracking.length - 1) {
		var $hash = $(document.getElementById("hash"));
		$hash.on("focus", preventFocus);

		disableTracking = true;

		currentChange++;
		var hash = changeTracking[currentChange];
		setHash(hash);
		deck = base64.decodeHash(hash);
		doDrawDeck();

		$hash.off("focus");
		disableTracking = false;
	}
}

function preventFocus(event) {
	$(this).blur();
	event.stopPropagation();
}

function makeOnClickFilter(filterFunction) {
	return function onClickFilter(event) {
		var button = event.target;
		var filter = button.getAttribute("data-filter");
		var altKey = event.altKey;
		filterFunction(button, filter, altKey);
	};
}

function filterAdvanced(skill) {
	var info = {
		id: skill,
		x: undefined,
		y: undefined,
		c: undefined,
		s: undefined,
		all: undefined
	};

	for (var i = 0; i < skillFiltersAdv.length; i++) {
		if (skillFiltersAdv[i].id === skill) {
			skillFiltersAdv.splice(i, 1);
			break;
		}
	}

	if ($("div#amount")[0].style.display !== "none") {
		var min = parseInt($("#amount-min")[0].value);
		var max = parseInt($("#amount-max")[0].value);
		if (isNaN(min)) min = 0;
		if (isNaN(max)) max = 99;
		info.x = { min: min, max: max };
	}
	if ($("div#timer")[0].style.display !== "none") {
		var min = parseInt($("#timer-min")[0].value);
		var max = parseInt($("#timer-max")[0].value);
		if (isNaN(min)) min = 0;
		if (isNaN(max)) max = 99;
		info.c = { min: min, max: max };
	}
	if ($("div#faction")[0].style.display !== "none") {
		var faction = $("select#faction")[0].value;
		info.y = (faction === "Generic") ? -1 : factions.IDs[faction];
	}
	if ($("div#skill")[0].style.display !== "none") {
		if ($("select#skill")[0].value.length > 0) {
			info.s = $("select#skill")[0].value;
		}
	}
	if ($("label[for=all]")[0].style.display !== "none") {
		info.all = $("select#all")[0].value;
	}

	var classList = $("input[name=skill][data-filter=" + skill + "]")[0].classList;

	classList.add("selected-advanced");
	skillFiltersAdv.push(info);

	if (classList.contains("selected")) {
		classList.remove("selected");
		skillFilters.splice(skillFilters.indexOf(skill), 1);
		checkBasicSkillFilters();
	}
	if (classList.contains("excluded")) {
		classList.remove("excluded");
		skillExclusions.splice(skillFilters.indexOf(skill), 1);
		checkBasicSkillFilters();
	}

	checkAdvancedFilters();
}

function checkAdvancedFilters() {
	skillHiddenAdv = {};

	for (var i = 0; i < units.length; i++) {
		var unit = units[i];
		for (var s = 0; s < skillFiltersAdv.length; s++) {
			if (!hasSkillAdvanced(unit, skillFiltersAdv[s])) {
				skillHiddenAdv[makeUnitKey(unit)] = true;
			}
		}
	}
	applyFilters();
}

function filterSkill(button, skill, exclude) {
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		skillFilters.splice(skillFilters.indexOf(skill), 1);
	} else if (button.classList.contains("excluded")) {
		button.classList.remove("excluded");
		skillExclusions.splice(skillFilters.indexOf(skill), 1);
	} else if (button.classList.contains("selected-advanced")) {
		button.classList.remove("selected-advanced");
		for (var i = 0; i < skillFiltersAdv.length; i++) {
			if (skillFiltersAdv[i].id === skill) {
				skillFiltersAdv.splice(i, 1);
				break;
			}
		}
		checkAdvancedFilters();
		return;
	} else if (exclude) {
		button.classList.add("excluded");
		skillExclusions.push(skill);
	} else {
		button.classList.add("selected");
		skillFilters.push(skill);
	}

	checkBasicSkillFilters();

	applyFilters();
}

function checkBasicSkillFilters() {
	skillHidden = {};
	if ((skillFilters.length + skillExclusions.length) > 0) {
		for (var i = 0; i < units.length; i++) {
			var unit = units[i];
			for (var s = 0; s < skillFilters.length; s++) {
				if (!hasSkill(unit, skillFilters[s])) {
					skillHidden[makeUnitKey(unit)] = true;
					break;
				}
			}
			for (var s = 0; s < skillExclusions.length; s++) {
				if (hasSkill(unit, skillExclusions[s])) {
					skillHidden[makeUnitKey(unit)] = true;
					break;
				}
			}
		}
	}
}

function filterFaction(button, faction) {
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
		if (filter !== button) {
			filter.classList.remove("selected");
		}
	}
	applyFilters();
}

var filterName = (function filterName(event) {
	var field = event.target;
	var filter = field.value.toLowerCase();
	nameHidden = {};
	if (filter) {
		if (filter.indexOf("[") === 0 || (filter.indexOf("]") - filter.length) === -1) {
			if (filter.indexOf("[") !== 0) filter = ".*" + filter;
			if (filter.indexOf("]") - filter.length !== -1) filter += ".*";
			var idRegex = new RegExp("^" + filter.replace("[", "").replace("]", "") + "$");
			for (var i = 0, len = units.length; i < len; i++) {
				var unit = units[i];
				var unit_id = unit.id;
				if (!idRegex.test(unit_id.toString())) {
					nameHidden[makeUnitKey(unit)] = true;
				}
			}
		} else {
			for (var i = 0, len = units.length; i < len; i++) {
				var unit = units[i];
				var card = cardApi.byIdSlim(unit, true);
				if (!card.name || card.name.toLowerCase().indexOf(filter) === -1) {
					nameHidden[makeUnitKey(unit)] = true;
				}
			}
		}
	}
	applyFilters();
}).throttle(250);

function filterSubfaction(button, faction, exclude) {

	if (button.classList.contains("selected") || button.classList.contains("excluded")) {
		button.classList.remove("selected");
		button.classList.remove("excluded");
		button.checked = false;
	} else if (exclude) {
		button.classList.add("excluded");
		button.classList.remove("selected");
	} else {
		button.classList.remove("excluded");
		button.classList.add("selected");
	}

	subfactionHidden = {};
	var subfactions = $("[name=subfaction].selected").toArray().map(function (a) { return a.attributes["data-filter"].value; });
	var exclusions = $("[name=subfaction].excluded").toArray().map(function (a) { return a.attributes["data-filter"].value; });
	for (var i = 0, len = units.length; i < len; i++) {
		var unit = units[i];
		for (var s = 0; s < subfactions.length; s++) {
			if (!isInSubfaction(unit, subfactions[s])) {
				subfactionHidden[makeUnitKey(unit)] = true;
			}
		}
		for (var e = 0; e < exclusions.length; e++) {
			if (isInSubfaction(unit, exclusions[e])) {
				subfactionHidden[makeUnitKey(unit)] = true;
			}
		}
	}
	applyFilters();
}

function filterDualFaction(button, faction, exclude) {

	var show;
	if (button.classList.contains("selected") || button.classList.contains("excluded")) {
		button.classList.remove("selected");
		button.classList.remove("excluded");
		button.checked = false;
	} else if (exclude) {
		button.classList.add("excluded");
		button.classList.remove("selected");
		show = false;
	} else {
		button.classList.remove("excluded");
		button.classList.add("selected");
		show = true;
	}

	dualFactionHidden = {};
	if (typeof show !== "undefined") {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			if (isDualFaction(unit) !== show) {
				dualFactionHidden[makeUnitKey(unit)] = true;
			}
		}
	}
	applyFilters();
}

var filterAttack = rangeFilter('attack', attackRanges, attackHidden, function () {
	attackHidden = {};
}, function(unit) {
	attackHidden[makeUnitKey(unit)] = true;
});

var filterHealth = rangeFilter('health', healthRanges, healthHidden, function () {
	healthHidden = {};
}, function(unit) {
	healthHidden[makeUnitKey(unit)] = true;
});

function rangeFilter(statName, statRanges, hiddenField, clearHidden, setHidden) {
	return function (button, min, max) {
		clearHidden();
		if (button.classList.contains("selected")) {
			button.classList.remove("selected");
			button.checked = false;
			for (var i = 0; i < statRanges.length; i++) {
				if (statRanges[i][0] === min) {
					statRanges.splice(i, 1);
					break;
				}
			}
		} else {
			button.classList.add("selected");
			statRanges.push([min, max]);
		}
		if (statRanges.length > 0) {
			for (var i = 0, len = units.length; i < len; i++) {
				var unit = units[i];
				var hide = true;
				for (var j = 0; j < statRanges.length; j++) {
					var range = statRanges[j];
					if (isInRange(unit, statName, range[0], range[1])) {
						hide = false;
						break;
					}
				}
				if (hide) setHidden(unit);
			}
		}
		applyFilters();
	};
}

function filterDelay(button, delay, exclude) {
	delayHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < delayRanges.length; i++) {
			if (delayRanges[i] === delay) {
				delayRanges.splice(i, 1);
				break;
			}
		}
	} else if (button.classList.contains("excluded")) {
		button.classList.remove("excluded");
		button.checked = false;
		for (var i = 0; i < delayExclusions.length; i++) {
			if (delayExclusions[i] === delay) {
				delayExclusions.splice(i, 1);
				break;
			}
		}
	} else {
		if (exclude) {
			button.classList.add("excluded");
			delayExclusions.push(delay);
		} else {
			button.classList.add("selected");
			delayRanges.push(delay);
		}
	}
	if (delayExclusions.length > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];
			var hide = false;
			for (var j = 0; j < delayExclusions.length; j++) {
				var delay = delayExclusions[j];
				if (isInRange(unit, "cost", delay, delay)) {
					hide = true;
					break;
				}
			}
			if (hide) delayHidden[makeUnitKey(unit)] = true;
		}
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

function filterType(button, type) {
	typeHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < typeFilters.length; i++) {
			if (typeFilters[i] === type) {
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

function filterFusion(button, fusion) {
	fusionHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < fusionFilters.length; i++) {
			if (fusionFilters[i] === fusion) {
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
				if (fusion === fusionFilters[j]) {
					hide = false;
					break;
				}
			}
			if (hide) fusionHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

function showAdvancedFilters(skill) {

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
		if (skillInfo.id === skill) {
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
		case 'absorb':
		case 'armored':
		case 'barrage':
		case 'backlash':
		case 'berserk':
		case 'burn':
		case 'corrosive':
		case 'counter':
		case 'counterburn':
		case 'evade':
		case 'evadebarrier':
		case 'frost':
		case 'fury':
		case 'heartseeker':
		case 'leech':
		case 'nullify':
		case 'pierce':
		case 'poison':
		case 'regenerate':
		case 'scorchbreath':
		case 'stasis':
		case 'taunt':
		case 'valor':
			$("div#amount").show();
			break;

		// x="1" y="1" all="0" c="0" s="0"
		case 'silence':
			$("div#amount").show();
			$("div#faction").show();
			break;

		// x="1" y="1" all="0" c="0" s="0"
		case 'fervor':
		case 'legion':
		case 'reanimate':
		case 'resurrect':
			$("div#amount").show();
			$("div#faction").show();
			$("div#timer").show();
			break;

		// x="1" y="1" all="1" c="1" s="0"
		case 'enrage':
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
		case 'poisonstrike':
		case 'strike':
		case 'weaken':
		case 'weakenself':
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
		default:
			return null;
	}
	advancedFilters.dialog("option", "position", { mw: "center", at: "center", of: $("[data-filter=" + skill + "]")[0] });
	advancedFilters.dialog("open");
	advancedFilters.skill = skill;

	return false;
}

function showCardOptions(event, htmlCard) {
	event.preventDefault();

	var show = false;
	//var htmlCard = event.delegateTarget;
	var index = $(htmlCard).index() - 1;
	if (index < 0) {
		var unit = deck.commander;
	} else {
		var unit = deck.deck[index];
	}
	optionsDialog.index = index;
	var card = cardApi.byId(unit);

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

	if ($("#upgradeDiv").css('display') === "none" || $("#fusionDiv").css('display') === "none") {
		$("#upgradeDiv").add("#fusionDiv").toggleClass("split", false);
	} else {
		$("#upgradeDiv").add("#fusionDiv").toggleClass("split", true);
	}

	if (showRunePicker(card)) {
		show = true;
	}

	if (show) {
		disableTracking = true;
		optionsDialog.dialog("option", "position", { my: "left", at: "right", of: htmlCard });
		optionsDialog.dialog("open");
		optionsDialog.unit = unit;
		optionsDialog.originalUnit = $.extend({}, unit);
	}

	return false;
}

function hideContext(event) {
	event.preventDefault();
	return false;
}

function showRunePicker(card) {
	var select = document.getElementById("runeChoices");
	select.innerHTML = '<option value=""></option>';
	//var showUnreleased = document.getElementById("showUnreleased").checked;

	optionsDialog.hiddenOptions = [];


	$("#runeChoicesDiv").hide();
	if (card.rarity >= 3 && !card.isCommander()) {
		for (var runeID in RUNES) {
			var rune = runeApi.getRune(runeID);
			if (runeApi.canUseRune(card, rune)) {
				var option = document.createElement('option');
				option.appendChild(document.createTextNode(rune.desc));
				option.value = rune.id;
				select.appendChild(option);
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

function modifyCard(optionsDialog) {
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

	unit.level = parseInt(document.getElementById("upgrade").value);
	var fusion = document.getElementById("fusion").value;
	if (fusion) {
		fusion = (fusion - 1).toString();
		var unitID = unit.id.toString();
		if (unitID.length > 4) unitID = unitID.substring(1);
		if (fusion >= 0) unitID = fusion + unitID;
		unit.id = parseInt(unitID);
	}
	var card = cardApi.byId(unit);
	showRunePicker(card);
	setCard(optionsDialog.index, unit);
	setHash(base64.encodeHash(deck));
}

function resetCard(optionsDialog) {
	setCard(optionsDialog.index, optionsDialog.originalUnit);
	setHash(base64.encodeHash(deck));
}

function setCard(index, unit) {
	if (index < 0) {
		deck.commander = unit;
	} else {
		deck.deck[index] = unit;
	}
	var htmlCard = cardUI.cardToHtml(cardApi.byId(unit), false, false);
	$deck.find(".card").eq(index + 1).replaceWith(htmlCard);
}

function filterSet(button, sets, exclude) {
	setHidden = {};

	var clear = null;
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		clear = "selected";
	} else if (button.classList.contains("excluded")) {
		button.classList.remove("excluded");
		button.checked = false;
		clear = "excluded";
	} else if (exclude) {
		button.classList.add("excluded");
	} else {
		button.classList.add("selected");
	}

	sets.split(',').forEach(function (set) {
		switch (clear) {
			case "selected":
				setFilters.splice(setFilters.indexOf(set), 1);
				break;
			case "excluded":
				setExclusions.splice(setExclusions.indexOf(set), 1);
				break;
			default:
				if (exclude) {
					setExclusions.push(set);
				} else {
					setFilters.push(set);
				}
				break;
		}
	});

	if ((setFilters.length + setExclusions.length) > 0) {
		for (var i = 0, len = units.length; i < len; i++) {
			var unit = units[i];

			var show = (setFilters.length === 0);
			for (var j = 0; j < setFilters.length; j++) {
				var set = setFilters[j];
				if (isInRange(unit, "set", set, set)) {
					show = true;
					break;
				}
			}
			if (show) {
				var hide = false;
				for (var j = 0; j < setExclusions.length; j++) {
					var set = setExclusions[j];
					if (isInRange(unit, "set", set, set)) {
						hide = true;
						break;
					}
				}
			}
			if (!show || hide) setHidden[makeUnitKey(unit)] = true;
		}
	}
	applyFilters();
}

function filterRarity(button, rarity) {
	rarityHidden = {};
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		button.checked = false;
		for (var i = 0; i < rarityFilters.length; i++) {
			if (rarityFilters[i] === rarity) {
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

function applyFilters(keepPage, skipDraw) {
	unitsFiltered = [];
	var names = [];
	var addedNames = {};
	for (var i = 0, len = unitsShown.length; i < len; i++) {
		var unit = unitsShown[i];
		var key = makeUnitKey(unit);
		if (skillHidden[key] || factionHidden[key] || subfactionHidden[key]
		|| attackHidden[key] || healthHidden[key] || delayHidden[key]
		|| typeHidden[key] || fusionHidden[key] || setHidden[key]
		|| nameHidden[key] || rarityHidden[key] || skillHiddenAdv[key]
		|| dualFactionHidden[key]) {
			// don't show
		} else {
			unitsFiltered.push(unit);
			var card = cardApi.byId(unit);
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

function hasSkill(unit, skill) {
	var card = cardApi.byIdSlim(unit, true);
	var skills = card.skill;
	for (var i = 0, len = skills.length; i < len; i++) {
		if (skill === skills[i].id) return true;
	}
	return false;
}

function hasSkillAdvanced(unit, skillInfo) {
	var card = cardApi.byIdSlim(unit, true);
	var skills = card.skill;
	for (var i = 0, len = skills.length; i < len; i++) {
		var skill = skills[i];
		if (skillInfo.id === skill.id) {
			if (skillInfo.x && (skill.x < skillInfo.x.min || skill.x > skillInfo.x.max)) continue;
			if (skillInfo.c && (skill.c < skillInfo.c.min || skill.c > skillInfo.c.max)) continue;
			if (skillInfo.y == -1 && skill.y) continue;
			if (skillInfo.y > 0 && skill.y != skillInfo.y) continue;
			if (skillInfo.s && skill.s !== skillInfo.s) continue;
			if (skillInfo.all > -1 && (skill.all || "0") !== skillInfo.all) continue;
			return true;
		}
	}
	return false;
}

function clearFilters() {
	attackHidden = {};
	attackRanges = [];

	healthHidden = {};
	healthRanges = [];

	delayHidden = {};
	delayRanges = [];
	delayExclusions = [];

	skillFilters = [];
	skillExclusions = [];
	skillHidden = {};
	skillFiltersAdv = [];
	skillHiddenAdv = {};

	factionHidden = {};
	subfactionHidden = {};
	dualFactionHidden = {};

	rarityFilters = [];
	rarityHidden = {};

	typeFilters = [];
	typeHidden = {};

	setFilters = [];
	setExclusions = [];
	setHidden = {};

	fusionFilters = [];
	fusionHidden = {};

	nameHidden = {};

	$(".selected").removeClass("selected");
	$(".excluded").removeClass("excluded");
	$(".selected-advanced").removeClass("selected-advanced");
	$("#nameFilter").val("");

	applyFilters();
}

function isInFaction(unit, faction) {
	var factionID = factions.IDs[faction].toString();
	var card = cardApi.byIdSlim(unit, true);
	return (card.type === factionID);
}

function isInSubfaction(unit, faction) {
	var factionID = factions.IDs[faction];
	var card = cardApi.byIdSlim(unit, true);
	if (typeof factionID === "undefined") {
		return (card.sub_type.length === 0);
	} else {
		return (card.sub_type.indexOf(factionID.toString()) >= 0);
	}
}

function isDualFaction(unit) {
	var card = cardApi.byIdSlim(unit, true);
	return (card.sub_type.length > 1);
}

function isInRange(unit, field, min, max) {
	var card = cardApi.byIdSlim(unit, true);
	var value = card[field];
	if (value === undefined) return false;
	if (min >= 0 && value < min) return false;
	if (max >= 0 && value > max) return false;
	return true;
}

function toggleSkillDetails() {
	applyFilters(true);
}

function toggleUpgrades(event) {
	showUpgrades = event.target.checked;
	$("body").addClass("loading");
	setTimeout(function () {
		drawCardList();
		$("body").removeClass("loading");
		applyFilters(false);
	}, 1);
}

function sortAndDraw(event) {
	doSort(event.target);
	applyFilters();
}

function sortCards() {
	doSort(document.getElementById("sortField"));
}

function doSort(select) {
	var sortField = select.value;
	unitsShown.sort(function (unitA, unitB) {
		// Always sort by commander/unit first
		var comparison = cardInfo.isCommander(unitB.id) - cardInfo.isCommander(unitA.id);
		if (comparison !== 0) return comparison;

		if (sortField === 'id') {
			return compareByID(unitA, unitB);
		} else {
			var cardA = cardApi.byId(unitA);
			var cardB = cardApi.byId(unitB);
			if (sortField === 'sub_type') {
				comparison = compareBySubfactions(cardA, cardB);
			} else {
				comparison = (cardA[sortField] || 0) - (cardB[sortField] || 0);
			}
			if (comparison !== 0) return comparison;
			// Fall back on sorting by ID
			return compareByID(unitA, unitB);
		}
	});
}

function compareByID(unitA, unitB) {
	var unitIDA = unitA.id;
	var unitIDB = unitB.id;

	var keyA = (unitIDA % 10000);
	var keyB = (unitIDB % 10000);
	var comparison = keyA - keyB;
	if (comparison !== 0) return comparison;

	var comparison = unitIDA - unitIDB;
	if (comparison !== 0) return comparison;

	var comparison = unitA.level - unitB.level;
	if (comparison !== 0) return comparison;

	return sortByRunes(unitA, unitB);
}

function compareBySubfactions(cardA, cardB) {
	var subfactionsA = cardA.sub_type;
	var subfactionsB = cardB.sub_type;
	var maxSubfactions = Math.max(subfactionsA.length, subfactionsB.length);
	for (var i = 0; i < maxSubfactions; i++) {
		var subfactionA = (subfactionsA[i] || -1);
		var subfactionB = (subfactionsB[i] || -1);
		var comparison = subfactionA - subfactionB;
		if (comparison) return comparison;
	}
	return 0;
}

function sortByRunes(unitA, unitB) {
	var comparison = unitA.runes.length - unitB.runes.length;
	if (comparison !== 0) return comparison;
	if (!unitA.runes.length) return 0;
	return unitA.runes[0].id - unitB.runes[0].id;
}

function getUnitFromCard(htmlCard) {
	var unit = {
		id: htmlCard.attributes.getNamedItem("data-id").value,
		level: htmlCard.attributes.getNamedItem("data-level").value
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

function saveDeck() {
	var hash = $("#hash").val();
	$("#saveDeckName").val("");
	var savedDecks = storageAPI.getSavedDecks();
	for (var name in savedDecks) {
		var existing = savedDecks[name];
		if (hash === existing) {
			$("#saveDeckName").val(name);
			break;
		}
	}
	saveDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });
	saveDeckDialog.dialog("open");
}

function loadDeck() {
	$('label[for="loadDeckName"]').html('<strong>Deck:</strong>');
	loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });
	loadDeckDialog.dialog("open");

	loadDeckDialog.onloaded = hash_changed;
}

function loadInventory() {
	$('label[for="loadDeckName"]').html('<strong>Inventory:</strong>');
	loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });
	loadDeckDialog.dialog("open");

	loadDeckDialog.onloaded = setInventory;
}

function setInventory(hash) {
	inventory = hash;
	drawCardList();
	generateLink();
}

function toggleInventoryMode() {
	inventoryMode = !inventoryMode;
	if (inventoryMode) {
		$("#inventoryMode").val("Switch to Deck Builder");
		$deck.find(".card.blank").remove();
		$deck.sortable("disable");
		doDrawDeck();
	} else {
		$("#inventoryMode").val("Switch to Inventory Builder");
		for (var i = $deck.find(".card").length; i < 16; i++) {
			$deck.append("<div class='card blank'></div>");
		}
		$deck.sortable("enable");
		doDrawDeck();
	}
	generateLink();
}

function generateLink() {
	var params = [];
	var name = urlHelper.paramValue('name');
	var hash = $("#hash").val();
	if (name) {
		params.push("name=" + name);
	}
	if (hash) {
		params.push("hash=" + hash);
	}
	if (inventory) {
		params.push("inventory=" + base64.encodeHash({ commander: unitInfoHelper.defaultCommander, deck: inventory }));
	}
	if (inventoryMode) {
		params.push("unlimited");
	}
	if (urlHelper.paramDefined("spoilers")) {
		params.push("spoilers");
	}
	var link = "http://thesench.github.io/SIMSpellstone/DeckBuilder.html";
	if (params.length) {
		link += "?" + params.join("&");
	}
	$("#link").attr("href", link).text(link);
};(function (angular) {
    'use strict';

    var storageAPI = require('storageAPI');

    var DeckStorageCtrl = function ($scope) {
        $scope.getSavedDecks = storageAPI.getSavedDecks;

        $scope.keys = function (obj) {
            return (obj ? Object.keys(obj) : []);
        };
    };
    var module;
    try {
        module = angular.module('simulatorApp');
    }
    catch (loadError) {
        module = angular.module('simulatorApp', []);
    }

    module.controller('DeckStorageCtrl', ['$scope', DeckStorageCtrl]);

}(angular));;(function (angular) {
  'use strict';
  
	var cardInfo = require('cardInfo');
  var factions = require('factions');
  var unitInfoHelper = require('unitInfoHelper');

  // Global arrays
  var rarityStrings = [
      "",
      "Common",
      "Rare",
      "Epic",
      "Legendary",
      "Mythic"
  ];

  function getCardInfo(unit) {
    var id = unit.id;
    var unitLevel = unit.level;

    var original = cardInfo.loadCard(id);

    var card = Object.assign({}, original);
    if (unitLevel > 1) {
      if (unitLevel > 1) {
        for (var key in original.upgrades) {
          var upgradeLevel = parseInt(key);
          var upgrade = original.upgrades[key];
          if (upgrade.cost !== undefined) card.cost = upgrade.cost;
          if (upgrade.health !== undefined) card.health = upgrade.health;
          if (upgrade.attack !== undefined) card.attack = upgrade.attack;
          if (upgrade.desc !== undefined) card.desc = upgrade.desc;
          if (upgrade.skill.length > 0) card.skill = upgrade.skill;
          if (upgradeLevel === unitLevel) break;
        }
      }
    }
    card.level = unitLevel;
    card.maxLevel = original.maxLevel;
    return card;
  }

  var CardDetailsCtrl = function ($scope, $window) {
    $window.cardDetailScope = $scope;
    if ($scope.id && $scope.level) {
      $scope.unit = unitInfoHelper.create($scope.id, $scope.level),
        $scope.card = getCardInfo($scope.unit);
    }

    $scope.setUnit = function (unit) {
      $scope.id = unit.id;
      $scope.level = unit.level;
      $scope.unit = unitInfoHelper.create($scope.id, $scope.level),
        $scope.card = getCardInfo($scope.unit);
      $scope.releaseDate = (function () {
        var hiddenUntil = $scope.card.hidden_until;
        if (hiddenUntil) {
          hiddenUntil = new Date(Number(hiddenUntil));
          hiddenUntil = (hiddenUntil.getMonth() + 1) + "/" + hiddenUntil.getDate() + "/" + hiddenUntil.getFullYear();
        } else {
          hiddenUntil = "";
        }
        return hiddenUntil;
      }());
      return this;
    };

    $scope.visible = false;

    var image;
    $scope.imageSrc = "res/cardImagesLarge/NotFound.jpg";
    $scope.$watch('card.id', function (newValue) {
      if (newValue) {
        var extension = ".jpg";
        if (cardInfo.isCommander(newValue)) {
          extension = ".png";
        }
        image = new Image();
        image.onerror = function () {
          this.onerror = function () {
            this.onerror = null;
            this.src = "res/cardImagesLarge/NotFound.jpg";
          };
          this.src = this.src.replace('ImagesLarge', 'Images');
        };
        image.onload = function () {
          this.onerror = null;
          this.onload = null;
          $scope.imageSrc = image.src;
          $scope.$apply();
        };
        image.src = "res/cardImagesLarge/" + cardInfo.loadCard(newValue).picture + extension;
      }
      else {
        $scope.imageSrc = "res/cardImagesLarge/NotFound.jpg";
      }
    });

    $scope.commanderClass = function () {
      if (cardInfo.isCommander($scope.id)) {
        return "commander " + $scope.getFaction($scope.card.type).toLowerCase();
      } else {
        return '';
      }
    };

    $scope.getRarityString = function () {
      return rarityStrings[$scope.card.rarity];
    };

    $scope.fontSize = function () {
      var rarityString = $("#rarity-string").text();
      var numChars = rarityString.length;
      var fontSize = Math.ceil(71000 / (numChars * numChars));
      return {
        "font-size": fontSize + "px"
      };
    };

    $scope.showRarity = function () {
      var card = $scope.card;
      if (card.rarity > 0) {
        return true;
      } else if (card.maxLevel > 1) {
        return true;
      } else {
        return false;
      }
    };
    $scope.getRarityIcon = function () {
      var card = $scope.card;
      if (card.rarity > 0) {
        var rarityType = card.rarity + ((card.maxLevel > Number(card.rarity) + 2) ? '_' + card.maxLevel : '');
        return "res/cardAssets/Level_" + rarityType + "_" + card.level + ".png";
      } else if (card.maxLevel > 1) {
        return "res/cardAssets/" + card.maxLevel + "_" + card.level + ".png";
      }
    };

    var previousFusion = $scope.previousFusion = function () {
      var fusions = $window.FUSIONS;
      for (var key in fusions) {
        if (fusions[key] === $scope.id) {
          return key;
        }
      }
      return false;
    };

    var nextFusion = $scope.nextFusion = function () {
      return $window.FUSIONS[$scope.id];
    };

    $scope.previousLevel = function () {
      return ($scope.card.level > 1);
    };

    $scope.nextLevel = function () {
      return ($scope.card.level < $scope.card.maxLevel);
    };

    var getFusion = $scope.getFusion = function () {
      var id = Number($scope.id);
      return (Math.floor(id / 10000) + 1);
    };

    $scope.fusionText = function () {
      var fusion = getFusion();
      return {
        1: 'Single',
        2: 'Dual',
        3: 'Quad'
      }[fusion];
    };

    $scope.keyPress = function (event) {
      var fn;
      switch (event.which) {
        case 37:
          fn = 'decrementLevel';
          break;
        case 38:
          fn = 'incrementFusion';
          break;
        case 39:
          fn = 'incrementLevel';
          break;
        case 40:
          fn = 'decrementFusion';
          break;
      }
      if (fn) {
        $scope[fn]();
        event.preventDefault();
        event.stopPropagation();
      }
    };

    $scope.isFused = function () {
      return (getFusion() > 1);
    };

    $scope.getFusionIcon = function () {
      var fusion = (getFusion() === 2 ? "Dualfuse" : "Quadfuse");
      return ("res/cardAssets/" + fusion + ".png");
    };

    $scope.getSkillIcon = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return "res/skills/" + (skillData ? skillData.icon : skillID) + ".png";
    };

    $scope.getSkillDescription = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return (skillData ? skillData.desc || skillData.name : skillID);
    };

    var setNames = {
      1000: "Basic",
      7000: "Basic",
      2000: "Reward",
      3000: "Premium",
      4000: "BoxOnly",
      9999: "StoryElements"
    };
    $scope.getSetIcon = function () {
      var setName = setNames[$scope.card.set];
      if (!setName) setName = setNames[9999];
      return ('res/cardAssets/' + setName + '_64x64.png');
    };

    $scope.getFaction = function (factionID) {
      var faction = factions.names[factionID];
      if (faction === "Tower") {
        faction = "";
      }
      return faction;
    };

    $scope.decrementFusion = function () {
      var fused = previousFusion(Number($scope.id));
      if (fused) {
        $scope.id = fused;
        $scope.unit.id = $scope.id;
        $scope.card = getCardInfo($scope.unit);
        if ($scope.level > $scope.card.maxLevel) {
          $scope.level = $scope.card.maxLevel;
          $scope.unit.level = $scope.level;
          $scope.card = getCardInfo($scope.unit);
        }
      }
    };

    $scope.incrementFusion = function () {
      var fused = nextFusion(Number($scope.id));
      if (fused) {
        var max = ($scope.level === $scope.card.maxLevel);
        $scope.id = fused;
        $scope.unit.id = $scope.id;
        $scope.card = getCardInfo($scope.unit);
        if (max && $scope.level < $scope.card.maxLevel) {
          $scope.level = $scope.card.maxLevel;
          $scope.unit.level = $scope.level;
          $scope.card = getCardInfo($scope.unit);
        }
      }
    };

    $scope.decrementLevel = function () {
      $scope.level = $scope.level;
      if ($scope.level > 1) {
        $scope.level--;
      }
      $scope.unit.level = $scope.level;
      $scope.card = getCardInfo($scope.unit);
    };

    $scope.incrementLevel = function () {
      $scope.level = $scope.level;
      if ($scope.level < $scope.card.maxLevel) {
        $scope.level++;
      }
      $scope.unit.level = $scope.level;
      $scope.card = getCardInfo($scope.unit);
    };
  };

  var DeckBuilderCtrl = function ($scope, $window) {
    $scope.getSkillIcon = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return "res/skills/" + (skillData ? skillData.icon : skillID) + ".png";
    };

    $scope.supportedSkills = [
      'absorb',
      'armored',
      'backlash',
      'barrage',
      'berserk',
      'burn',
      //'burn2',
      'corrosive',
      'counter',
      'counterburn',
      'daze',
      'enfeeble',
      'enhance',
      //'enlarge',
      'enrage',
      'evade',
      'evadebarrier',
      'fervor',
      'flurry',
      'frost',
      'fury',
      'heal',
      'heartseeker',
      //'ignite',
      'imbue',
      //'intensify',
      'jam',
      'leech',
      'legion',
      //'mark',
      'nullify',
      'pierce',
      'poison',
      'poisonstrike',
      'protect',
      //'protect_ice',
      //'protect_seafolk',
      'rally',
      //'reanimate',
      //'resurrect',
      'regenerate',
      'scorchbreath',
      'silence',
      //'slow',
      'stasis',
      'strike',
      'taunt',
      'valor',
      //'venom',
      'weaken',
      'weakenself'
    ].sort(function (idA, idB) {
      return SKILL_DATA[idA].name.localeCompare(SKILL_DATA[idB].name);
    });

    $scope.getSkillName = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return (skillData ? skillData.name : skillID);
    };

    $scope.showAdvancedFilters = $window.showAdvancedFilters;

    $scope.filterSkill = function (event, skillID) {
      $window.filterSkill(event.target, skillID, event.altKey);
    };
  };

  angular.module('simulatorApp')
    .controller('CardDetailsCtrl', ['$scope', '$window', CardDetailsCtrl])
    .directive('ngRightClick', ['$parse', function ($parse) {
      return {
        link: function (scope, element, attrs) {
          var fn = $parse(attrs.ngRightClick);
          element.contextmenu(function (event) {
            scope.$apply(function () {
              event.preventDefault();
              fn(scope, { $event: event });
            });
          });
        }
      };
    }])
    .directive('cardDetails', function () {
      return {
        restrict: 'A',
        replace: true,
        templateUrl: 'templates/card-template.html',
        controller: 'CardDetailsCtrl'
      };
    })
    .directive('sssAutofocus', function () {
      return {
        link: function (scope, elem) {
          elem.focus();
        }
      };
    })
    .filter('capitalize', function () {
      return function (input) {
        if (input) {
          var parts = input.split(' ');
          for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            parts[i] = part.charAt(0).toUpperCase() + part.substr(1);
          }
          return parts.join(" ");
        }
        else {
          return '';
        }
      };
    })
    .filter('skillApi.nameFromId', function () {
      return window.skillApi.nameFromId;
    })
    .controller('DeckBuilderCtrl', ['$scope', '$window', DeckBuilderCtrl]);

}(angular));
;define('tutorialScript', [
    'simTutorial'
], function getTutorialScript(
    simTutorial
) {
    'use strict';

    simTutorial.registerTutorial([
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Deck Builder."
       },
       {
           ui: "#deckContainer",
           msg: 'The "Deck" section contains your current deck.',
           actions: [clearHash, showDeck, clearFilters, hideFilters, hideCollection]
       },
       {
           ui: "#hash-container",
           msg: 'If you have a deck hash, you can paste it here to set the current deck.',
           actions: [clearHash]
       },
       {
           ui: "#deckContainer",
           msg: 'Manually modifying the deck hash will automatically update the deck.',
           actions: [setHash]
       },
       {
           ui: "#deckContainer",
           msg: 'Left-click on a card to remove it from your deck.',
           actions: [removeCard]
       },
       {
           ui: "#deckContainer",
           msg: 'Left-click on the commander will remove it and replace it with "Elaria Captain".',
           actions: [removeCommander]
       },
       {
           ui: "#deckContainer",
           msg: 'Pressing Ctrl-Z will undo the last change made to your deck.  (Ctrl-Y can be used to "redo" a change as well).',
           actions: [removeCard]
       },
       {
           ui: "#deckContainer",
           msg: 'Holding Ctrl and left-clicking on a card will add a copy of it to your deck.',
           actions: [setHash]
       },
       {
           ui: "#deckContainer",
           msg: 'You can drag-and-drop units in your deck to rearrange them (currently PC-only).',
           actions: [closeEditUnit, moveCard]
       },
       {
           ui: "#unitOptions",
           dialog: true,
           msg: 'Right-click on a card to bring up an edit dialog.',
           actions: [moveCard, editCard]
       },
       {
           ui: "#unitOptions",
           dialog: true,
           msg: 'Here, you can edit its level, fusion, and runes.',
           actions: [makeCardEdits]
       },
       {
           ui: "#deck .card:eq(1)",
           msg: 'Changes will made will be shown on the card, but will not be saved until you hit "OK".',
           actions: [editCard, makeCardEdits]
       },
       {
           ui: "#deckContainer",
           msg: 'Clicking "Cancel" will revert the unit back to its original stats.',
           actions: [closeEditUnit, moveCard]
       },
       {
           ui: "#link",
           msg: 'This link will load the DeckBuilder with your current deck to allow for easy sharing of decks.  It is automatically updated whenever you update the deck.'
       },
       {
           ui: "#resetDeck",
           msg: 'This will remove all cards from your deck and set the commander back to "Elaria Captain".',
           actions: [clearHash]
       },
       {
           ui: "#sortDeck",
           msg: 'This will sort all cards in your deck based on faction, rarity, and ID (the same way they are sorted in the game).'
       },
       {
           ui: "#saveDeck",
           msg: 'This will allow you to save a deck locally so that you can easily load it later.'
       },
       {
           ui: "#loadDeck",
           msg: 'If you have any saved decks, you can use this button to quickly load one of them into the DeckBuilder.',
           actions: [hideCollection, showDeck]
       },
       {
           ui: "#collection-container",
           msg: 'The "Cards" section contains all of the cards in the game.',
           actions: [hideDeck, showCollection]
       },
       {
           ui: "#collection-container",
           msg: 'Left-clicking on a card will add it to your deck.',
           actions: [closeDetails]
       },
       {
           ui: "#detailedView",
           dialog: true,
           msg: 'Right-clicking on a card will display a detailed view of the card.',
           actions: [showDetails, hideFilters]
       },
       /*
       {
           actions: [hideDeck, showDetails, hideFilters],
           msg: "Placeholder"
       },
       */
       {
           ui: "#filter-container",
           msg: 'The "Filters" section allows you to filter the cards in the collection.',
           actions: [closeDetails, showFilters]
       },
       {
           ui: "#filter-container",
           msg: 'Click on a filter to only show cards that match that filter.',
           actions: [clearFilters]
       },
       {
           ui: "[name=skill][data-filter=fervor]",
           msg: 'For instance, clicking the "Fervor" filter will only show units that have the skill "Fervor".',
           actions: [filter]
       },
       {
           ui: "#collection-container",
           msg: 'Now only units with "Fervor" are visible.',
           actions: [closeAdvancedFilters]
       },
       {
           ui: "#advancedFilters",
           dialog: true,
           msg: 'Right-clicking on a Skill filter will allow you to perform more advanced filtering.',
           actions: [advancedFilter]
       },
       {
           ui: "#advancedFilters",
           dialog: true,
           msg: 'Here you can specify specific Skill values to filter by.  Different skills have different advanced filters available.',
           actions: [filter, advancedFilter, setAdvancedFilter]
       },
       {
           ui: "[name=skill][data-filter=fervor]",
           dialog: true,
           msg: 'Clicking "OK" will apply the advanced filtering.',
           actions: [saveAdvancedFilters]
       },
       {
           ui: "#collection-container",
           msg: 'Now only units with at least "Fervor 4" are visible.'
       },
       {
           ui: "#filter-container",
           msg: 'Holding the "Alt" key while clicking on a filter while hide cards that match that filter (not supported by all filters).',
           actions: [removeExclusiveFilter]
       },
       {
           ui: "[name=skill][data-filter=enfeeble]",
           msg: 'For instance, holding "Alt" and clicking the "Hex" filter will hide all units that have the skill "Hex".',
           actions: [filterExclusive]
       },
       {
           ui: "#collection-container",
           msg: 'Now only units with no "Hex" and at least "Fervor 4" are visible.'
       },
       {
           ui: "#name-container",
           msg: 'You can also simply search for a unit by its name.',
           actions: [clearNameFilter]
       },
       {
           ui: "#name-container",
           msg: 'For instance, typing "hide" will filter down to just "Spikehide Dragon" and "Spearhide Dragon".',
           actions: [setNameFilter]
       },
       {
           ui: "#name-container",
           msg: 'Tip: If the collection is filtered down to a single card, pressing "Enter" while in the Name Filter will add that card to your deck.',
           actions: [setNameFilter, saveAdvancedFilters, filterExclusive]
       },
       {
           ui: "#clear-filters",
           msg: 'You can click the "Clear All" button to reset all filters.',
           actions: [clearFilters]
       },
       {
           msg: 'To view this tutorial again at any time, you can click the "Help" button.  (Note: this will reset the DeckBuilder.)'
       }
    ]);
    

    function showDeck() {
        $("#deck-container").accordion('option', 'active', 0);
    }

    function hideDeck() {
        $("#deck-container").accordion('option', 'active', null);
    }

    function showFilters() {
        $("#filter-container").accordion('option', 'active', 0);
    }

    function hideFilters() {
        $("#filter-container").accordion('option', 'active', null);
    }

    function showCollection() {
        $("#collection-container").accordion('option', 'active', 0);
    }

    function hideCollection() {
        $("#collection-container").accordion('option', 'active', null);
    }

    function showDetails() {
        $("#collection-container").find(".card").first().contextmenu();
    }

    function closeDetails() {
        detailsDialog.dialog('close');
    }

    function filter() {
        var fervor = $("[name=skill][data-filter=fervor]");
        while (!fervor.hasClass("selected")) {
            fervor.click();
        }
    }

    function filterExclusive() {
        var vengeance = $("[name=skill][data-filter=enfeeble]");
        var e = jQuery.Event("click");
        e.altKey = true;
        while (!vengeance.hasClass("excluded")) {
            vengeance.trigger(e);
        }
    }

    function removeExclusiveFilter() {
        var fervor = $("[name=skill][data-filter=enfeeble]");
        while (fervor.hasClass("excluded") || fervor.hasClass("selected")) {
            fervor.click();
        }
    }

    function advancedFilter() {
        $("[name=skill][data-filter=fervor]").contextmenu();
        resetFocus();
    }

    function setAdvancedFilter() {
        $("#amount-min").val(4);
        resetFocus();
    }

    function saveAdvancedFilters() {
        advancedFilters.dialog('option', 'buttons')["OK"].apply(advancedFilters);
        resetFocus();
    }

    function closeAdvancedFilters() {
        advancedFilters.dialog("close");
    }

    function setNameFilter() {
        $("#nameFilter").val("hide").trigger(jQuery.Event("keyup"));
    }

    function clearNameFilter() {
        $("#nameFilter").val("").trigger(jQuery.Event("keyup"));
    }

    function clearFilters() {
        $("#clear-filters").click();
    }

    function setHash() {
        updateHash("g~pAAQwrxIQWkpBglFpBglFpB4jrBC4jrBC4jrBC");
    }

    function removeCard() {
        updateHash("g~pAAQwrxIQWkpBglFpB4jrBC4jrBC4jrBC");
    }

    function removeCommander() {
        updateHash("QpLQAQwrxIQWkpBglFpB4jrBC4jrBC4jrBC");
    }

    function moveCard() {
        updateHash("g~pAAQwrxIglFpBQWkpBglFpB4jrBC4jrBC4jrBC");
    }

    function editCard() {
        $("#deck .card").eq(1).contextmenu();
        resetFocus();
    }

    function makeCardEdits() {
        $("#fusion").val(3);
        $("#runeChoices").val("5102").change();
        resetFocus();
    }

    function closeEditUnit() {
        //updateHash("g~pAAQwrxIglFpBQWkpBglFpB4jrBC4jrBC4jrBC");
        optionsDialog.dialog("close");
    }

    function clearHash() {
        updateHash("QpLQA");
    }

    function resetFocus() {
        $(".ui-dialog-buttonset .ui-button:visible").first().focus();
    }

    function updateHash(hash) {
        $("#hash").val(hash).change();
    }
});