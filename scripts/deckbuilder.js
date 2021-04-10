﻿"use strict";

// TODO: Add function for re-checking filters
var delayTutorial = true;

var fromInventory = false;
var deck = [];
deck.commander = elariaCaptain;
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
var form;

var $deck;
/** @type {HTMLDivElement} */
var cardSpace
/** @type {HTMLDivElement} */
var deckSpace;

var initDeckBuilder = function () {
	if (!_DEFINED("fromSim")) {
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

	cardSpace = document.getElementById('cardSpace');
	deckSpace = document.getElementById('deck');

	setupPopups();

	stopPropagation("hash");

	$("body").addClass("loading");

	addDeckEventHandlers(deckSpace);
	addLibraryEventHandlers(cardSpace);

	$(window).resize(onResize);

	window.onwheel = changePage;
	window.oncontextmenu = hideContext;

	$("#rows").val(storageAPI.getField("deckBuilder", "rows", 3));
	$("#rows").bind("change", function () {
		storageAPI.setField("deckBuilder", "rows", $("#rows").val());
	});

	document.getElementById('nameFilter').onkeydown = function (event) {
		if (event.key === 'Enter') {
			if (unitsFiltered.length == 1) {
				addUnitToDeck(unitsFiltered[0], cardSpace.children[0]);
			}
			event.preventDefault();
		}
	};

	var dhtml = $("#deck").sortable({
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

	inventory = (_GET('inventory') || inventory);

	$("[name=rarity]").click(function (event) {
		onClickFilter(event, filterRarity, event.altKey);
	});
	$("[name=faction]").click(function (event) {
		onClickFilter(event, filterFaction, event.altKey);
	});
	$("[name=subfaction]").click(function (event) {
		onClickFilter(event, filterSubfaction, event.altKey);
	});
	$("[name=delay]").click(function (event) {
		onClickFilter(event, filterDelay, event.altKey);
	});
	$("[name=set]").click(function (event) {
		onClickFilter(event, filterSet, event.altKey);
	});
	$("#dualfaction").click(function (event) {
		onClickFilter(event, filterDualFaction, event.altKey);
	});

	if (_DEFINED("spoilers") || _DEFINED("latestCards")) {
		$("#loadingSplash").html("Checking for New Cards...");
		updateGameData();
	} else {
		loadCardCache();
		setTimeout(loadCards, 1);
	}

	if (_DEFINED("unlimited")) {
		$deck = $("#deck");
		toggleInventoryMode();
	}

	$("#graph-accordion").click(updateGraphs);
}

function updateGameData() {
	setTimeout(DATA_UPDATER.updateData, 1, loadCards, true);
}

var loadCards = function () {
	allCards = CARDS;
	$("#loadingSplash").html("Loading...");
	drawAllCards();
	$("body").removeClass("loading");
	checkTutorial();
}

var setupPopups = function () {

	stopPropagation("advancedFilters");
	stopPropagation("unitOptions");

	$(".accordion").accordion({
		collapsible: true,
		heightStyle: "content",
	});

	$(".start-closed").accordion('option', 'active', false).show();

	if (_DEFINED("spoilers")) {
		$("#deck-container, #filter-container").accordion('option', 'active', false).show();
	}

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
		modal: true,
		resizable: false,
		buttons: {
			Delete: function () {
				var name = $("#loadDeckName").val();
				var newHash = storageAPI.deleteDeck(name);
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

var closeDialogOnOverlayClick = function closeDialogOnOverlayClick() {
	var targetDialog = $(this);
	jQuery('.ui-widget-overlay')
		.bind('click contextmenu', function onClickOverlay(event) {
			targetDialog.dialog('close');
			event.preventDefault();
		});
};

var drawAllCards = function () {
	drawCardList();
	drawDeck();
}

var drawDeck = function () {

	var hash = _GET('hash') || $("#hash").val();
	if (hash) {
		hash_changed(hash);
	}

	var name = _GET('name');
	if (name) {
		setDeckName(name);
	}
	doDrawDeck();
}

function doDrawDeck() {
	$deck = CARD_GUI.draw_deck(deck, inventoryMode);
	updateHash();
};

function addDeckEventHandlers(deckSpace) {
	addCardEvent(deckSpace, "mousedown", duplicate);
	addCardEvent(deckSpace, "mouseover", highlight);
	addCardEvent(deckSpace, "click", deckOnClick);
	addCardEvent(deckSpace, "contextmenu", showCardOptions);
}

function addLibraryEventHandlers(cardSpace) {
	addCardEvent(cardSpace, "click", addToDeck);
	addCardEvent(cardSpace, "contextmenu", showDetails);
}

/**
 * @param {HTMLDivElement} collection
 * @param {string} eventName
 * @param {function} callback
 */
function addCardEvent(collection, eventName, callback) {
	if (callback) {
		collection.addEventListener(eventName, function (event) {
			/** @type {HTMLDivElement} */
			var htmlCard = event.target.closest('.card');
			if (htmlCard && !htmlCard.classList.contains('blank')) {
				var i = htmlCard.attributes['data-i'];
				return callback(event, htmlCard, i);
			}
		});
	}
}

var showDetails = function (event, htmlCard) {
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
		deck.deck.splice(index, 0, makeUnitInfo(unit.id, unit.level, unit.runes || []));
		updateHash();
	}
}

function deckOnClick(event, htmlCard) {
	if (!event.ctrlKey) {
		removeFromDeck(htmlCard);
	}
}

var drawCardList = function () {
	units = [];
	unitsShown = [];
	if (inventory) {
		fromInventory = true;
		inventory = hash_decode(inventory);
		var commander = inventory.commander;
		inventory = inventory.deck;
		if (commander && !areEqual(commander, elariaCaptain)) {
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
		if (_DEFINED('spoilers')) {
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

	sortCards(document.getElementById("sortField"));

	applyFilters();
}

var page = 0;
var pages = 0;
function doDrawCardList(cardList, resetPage) {

	var detailedSkills = document.getElementById("skillDetails").checked;

	if (resetPage) {
		page = 0;
	}

	var width = cardSpace.offsetWidth;
	var rows = parseInt(document.getElementById("rows").value);
	var cards = ~~(width / 90); // Each card is 84 pixels wide and has 2 pixels of padding and 1 pixel of border
	cards *= rows;
	var lastUnit = null;
	var unique = 0;
	for (var i = 0, len = cardList.length; i < len; i++) {
		var unit = cardList[i];
		if (!areEqual(unit, lastUnit)) unique++;
		lastUnit = unit;
	}
	pages = Math.max(Math.ceil(unique / cards), 1);
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
	cardSpace = document.getElementById('cardSpace');
	var foundCards = cardSpace.querySelectorAll(".card");
	if (foundCards.length) {
		var card = foundCards[0];
		/** @type {CSSStyleDeclaration} */
		var style = card.currentStyle || window.getComputedStyle(card);
		var minHeight = (card.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom)) * rows;
		cardSpace.style.minHeight = minHeight + 'px';
	}
}

var onResize = (function () {
	applyFilters(true);
}).debounce(50);

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
	} else {
		applyFilters(true);
	}
}

function pageDown() {
	page++;
	if (page >= pages) {
		page--;
	} else {
		applyFilters(true);
	}
}

var redrawCardList = function (keepPaging) {
	sortCards(document.getElementById("sortField"));
	applyFilters(keepPaging);
}

var addInventoryUnit = function (unit) {
	units.push(unit);
	unitsShown.push(unit);
}

var addUnit = function (id, spoilers) {
	addUnitLevels(id);
	if (spoilers) {
		if (spoilers["1" + id]) addUnitLevels("1" + id);
		if (spoilers["2" + id]) addUnitLevels("2" + id);
	} else if (id > 999) {
		addUnitLevels("1" + id);
		addUnitLevels("2" + id);
	}
}

var addUnitLevels = function (id) {
	var card = allCards[id];
	if (card) {
		for (var level = 1; level <= card.maxLevel; level++) {
			var unit = makeUnitInfo(id, level);
			units.push(unit);
			if (showUpgrades || level == card.maxLevel) unitsShown.push(unit);
		}
	}
}

var resetDeck = function () {
	hash_changed('oZ0IB');
}

var disableTracking = false;
var hash_changed = function (hash) {
	if (fromInventory) {
		if (!areEqual(deck.commander, elariaCaptain)) unitsShown.push(deck.commander);
		unitsShown.push.apply(unitsShown, deck.deck);
		redrawCardList(true);
	}
	if (hash === undefined) hash = document.getElementById("hash").value.trim();
	setHash(hash);

	updateSimulator(hash);

	deck = hash_decode(hash);

	if (!hash) deck.commander = null;

	if (fromInventory) {
		if (!areEqual(deck.commander, elariaCaptain)) removeFromInventory(deck.commander);
		for (var i = 0; i < deck.deck.length; i++) {
			removeFromInventory(deck.deck[i]);
		}
		applyFilters();
	}

	doDrawDeck();

	generateLink();
}

var setHash = function (hash) {
	$("#hash").val(hash);
	generateLink();
}

var sortDeck = function () {
	deck.deck.sort(function (unitA, unitB) {
		var cardA = getCardByID(unitA);
		var cardB = getCardByID(unitB);
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

var addToDeck = function (event, htmlCard) {
	var unit = getUnitFromCard(htmlCard);
	addUnitToDeck(unit, htmlCard);
}

var addUnitToDeck = function (unit, htmlCard) {
	var $htmlCard = $(htmlCard).clone().find(".multiplier").remove().end();

	if (!inventoryMode) {
		unit = Object.assign({}, unit);
	}

	var $deck = $("#deck");
	if (is_commander(unit.id)) {
		if (areEqual(deck.commander, unit)) return;
		deck.commander = unit;
		replaceCard($deck.find(".card").first(), $htmlCard);
	} else {
		if (!inventoryMode && deck.deck.length == 15) return;
		deck.deck.push(unit);
		var emptySpaces = $deck.find(".blank");
		if (emptySpaces.length) {
			replaceCard(emptySpaces.first(), $htmlCard);
		} else {
			$deck.append($htmlCard)
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
};

function replaceCard(oldCard, newCard) {
	var speed = (oldCard.hasClass("blank") ? 1000 : 600);
	$(oldCard).replaceWith(newCard);
	newCard.children().stop().hide().fadeIn(speed).promise();
}


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

var removeFromDeck = function (htmlCard) {
	var unit;
	var $htmlCard = $(htmlCard);
	var index = $htmlCard.index();
	if (index == 0) {
		unit = deck.commander;
		if (areEqual(unit, elariaCaptain)) return;
		deck.commander = elariaCaptain;
		var card = getCardByID(elariaCaptain);
		var captain = $(CARD_GUI.create_card_html(card));
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
};

var highlight = function (event, htmlCard) {
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
	$(hash_highlighter).width($(hash_highlighted).width())
}

var updateHash = function () {
	var deckHash = hash_encode(deck);
	setHash(deckHash);

	updateHighlights();

	addChange(deckHash);

	updateSimulator(deckHash);

	updateGraphs();
}

var updateSimulator = function (deckHash) {
	// Placeholder function - set by Simulator
}

var updateGraphs = function () {
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
		var card = getCardByID(unit);
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


	var attackStats = [];
	var healthStats = [];
	var delayStats = [];
	var types = {};
	var sub_types = {};
	for (var i = 0; i < deck.deck.length; i++) {
		var unit = deck.deck[i];
		var card = getCardByID(unit);
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

	var totalHealth = getCardByID(deck.commander).health + healthStats.reduce(function (prev, curr) { return prev + curr }, 0);
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
			{ name: 'Health Lost', className: 'ct-series-attack', data: healthNeeded },
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
		/** @type {HTMLInputElement} */
		var hashInput = document.getElementById("hash");
		hashInput.addEventListener("focus", preventFocus);

		disableTracking = true

		currentChange--;
		var hash = changeTracking[currentChange];
		setHash(hash);
		deck = hash_decode(hash);
		doDrawDeck();

		hashInput.removeEventListener("focus", preventFocus);
		disableTracking = false;
	}
}

function redo() {
	if (currentChange < changeTracking.length - 1) {
		/** @type {HTMLInputElement} */
		var hashInput = document.getElementById("hash");
		hashInput.addEventListener("focus", preventFocus);

		disableTracking = true;

		currentChange++;
		var hash = changeTracking[currentChange];
		setHash(hash);
		deck = hash_decode(hash);
		doDrawDeck();

		hashInput.removeEventListener("focus", preventFocus);
		disableTracking = false;
	}
}

var preventFocus = function (event) {
	this.blur();
	event.stopPropagation();
}

var onClickFilter = function (event, filterFunction, altKey) {
	var button = event.target;
	var filter = button.getAttribute("data-filter");
	filterFunction(button, filter, altKey);
}

var onContextMenu = function (event) {
	event.preventDefault();

	var button = event.target;
	var skill = button.getAttribute("data-filter");
	showAdvancedFilters(skill);
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

var filterSkill = function (button, skill, exclude) {
	if (button.classList.contains("selected")) {
		button.classList.remove("selected");
		skillFilters.splice(skillFilters.indexOf(skill), 1);
	} else if (button.classList.contains("excluded")) {
		button.classList.remove("excluded");
		skillExclusions.splice(skillFilters.indexOf(skill), 1);
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
	} else if (exclude) {
		button.classList.add("excluded");
		skillExclusions.push(skill);
	} else {
		button.classList.add("selected");
		skillFilters.push(skill);
	}

	checkBasicSkillFilters();

	applyFilters();
};

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
};

var filterName = (function (field) {
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
				var card = get_slim_card_by_id(unit, true);
				if (!card.name || card.name.toLowerCase().indexOf(filter) == -1) {
					nameHidden[makeUnitKey(unit)] = true;
				}
			}
		}
	}
	applyFilters(false, false, true);
}).throttle(250);

var filterSubfaction = function (button, faction, exclude) {

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

var filterDualFaction = function (button, faction, exclude) {

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

var filterDelay = function (button, delay, exclude) {
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
	} else if (button.classList.contains("excluded")) {
		button.classList.remove("excluded");
		button.checked = false;
		for (var i = 0; i < delayExclusions.length; i++) {
			if (delayExclusions[i] == delay) {
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

	hide("label[for=all]");
	hide("div#amount");
	hide("div#faction");
	hide("div#skill");
	hide("div#timer");

	setValue("#amount-min", 0);
	setValue("#amount-max", 99);
	setValue("#timer-min", 0);
	setValue("#timer-max", 99);
	setValue("select#faction", '');
	setValue("select#skill", '');
	setValue("select#all", -1);
	for (var i = 0; i < skillFiltersAdv.length; i++) {
		var skillInfo = skillFiltersAdv[i];
		if (skillInfo.id == skill) {
			if (skillInfo.x) {
				setValue("#amount-min", skillInfo.x.min);
				setValue("#amount-max", skillInfo.x.max);
			}
			if (skillInfo.c) {
				setValue("#timer-min", skillInfo.c.min);
				setValue("#timer-max", skillInfo.c.max);
			}
			if (skillInfo.y) {
				if (skillInfo.y == -1)
					setValue("select#faction", "Generic");
			}
			if (skillInfo.s) setValue("select#skill", skillInfo.s);
			if (skillInfo.all) setValue("select#all", skillInfo.all);
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
			show("div#amount");
			break;

		// x="1" y="1" all="0" c="0" s="0"
		case 'silence':
			show("div#amount");
			show("div#faction");
			break;

		// x="1" y="1" all="0" c="0" s="0"
		case 'fervor':
		case 'legion':
		case 'reanimate':
		case 'resurrect':
			show("div#amount");
			show("div#faction");
			show("div#timer");
			break;

		// x="1" y="1" all="1" c="1" s="0"
		case 'enrage':
		case 'heal':
		case 'protect':
		case 'protect_ice':
		case 'rally':
			show("div#amount");
			show("label[for=all]");
			show("div#faction");
			break;

		// x="1" y="0" all="1" c="0" s="0"
		case 'enfeeble':
		case 'poisonstrike':
		case 'strike':
		case 'weaken':
		case 'weakenself':
			show("div#amount");
			show("label[for=all]");
			break;
		// x="1" y="1" all="1" c="1" s="1"
		case 'enhance':
		case 'imbue':
			show("div#amount");
			show("label[for=all]");
			show("div#faction");
			show("div#skill");
			show("div#timer");
			break;

		// x="0" y="0" all="1" c="1" s="0"
		case 'jam':
			show("label[for=all]");
			show("div#timer");
			break;

		// x="0" y="0" all="0" c="1" s="0"
		case 'flurry':
			show("div#timer");
			break;
		default:
			return null;
	}
	advancedFilters.dialog("option", "position", { mw: "center", at: "center", of: document.querySelector("[data-filter=" + skill + "]") });;
	advancedFilters.dialog("open");
	advancedFilters.skill = skill;

	return false;
}

function hide(selector) {
	document.querySelectorAll(selector).forEach(function hide(element) { element.style.display = "none"; });
}

function show(selector) {
	document.querySelectorAll(selector).forEach(function show(element) { element.style.display = ""; });
}

function setValue(selector, newValue) {
	document.querySelector(selector).value = newValue;
}

var showCardOptions = function (event, htmlCard) {
	event.preventDefault();

	var show = false;
	var index = $(htmlCard).index() - 1;
	if (index < 0) {
		var unit = deck.commander;
	} else {
		var unit = deck.deck[index];
	}
	optionsDialog.index = index;
	var card = getCardByID(unit);

	hide("#upgradeDiv");
	var upgradeLevel = document.getElementById("upgrade");
	upgradeLevel.max = card.maxLevel;
	upgradeLevel.value = card.level;
	if (card.maxLevel > 1) {
		show("#upgradeDiv");
		show = true;
	}

	var fusionField = document.getElementById("fusion");
	fusionField.value = 0;
	hide("#fusionDiv");
	if (!card.isCommander()) {
		var fusion = 1;
		var baseID = card.id.toString();
		if (baseID.length > 4) {
			var fusion = parseInt(baseID[0]) + 1;
			var baseID = baseID.substring(1);
		}
		if (FUSIONS[baseID]) {
			fusionField.value = fusion;
			show("#fusionDiv");
			show = true;
		}
	}

	var elements = document.querySelectorAll('#upgradeDiv, #fusionDiv');
	if ($("#upgradeDiv").css('display') == "none" || $("#fusionDiv").css('display') == "none") {
		elements.forEach(function toggle(element) { element.classList.remove('split'); });
	} else {
		elements.forEach(function toggle(element) { element.classList.add('split'); });
	}

	if (showRunePicker(card)) {
		show = true;
	}

	if (show) {
		disableTracking = true;
		optionsDialog.dialog("option", "position", { my: "left", at: "right", of: htmlCard });;
		optionsDialog.dialog("open");
		optionsDialog.unit = unit;
		optionsDialog.originalUnit = Object.assign({}, unit);
	}

	return false;
}

function hideContext(event) {
	event.preventDefault();
	return false;
}

var showRunePicker = function (card) {
	var select = document.getElementById("runeChoices");
	select.innerHTML = '<option value=""></option>';

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
	var card = getCardByID(unit);
	showRunePicker(card);
	setCard(optionsDialog.index, unit);
	setHash(hash_encode(deck));
}

var resetCard = function (optionsDialog) {
	setCard(optionsDialog.index, optionsDialog.originalUnit);
	setHash(hash_encode(deck));
}

var setCard = function (index, unit) {
	if (index < 0) {
		deck.commander = unit;
	} else {
		deck.deck[index] = unit;
	}
	var htmlCard = CARD_GUI.create_card_html(getCardByID(unit), false, false);
	$deck.find(".card").eq(index + 1).replaceWith(htmlCard);
}

var filterSet = function (button, sets, exclude) {
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

var applyFilters = function (keepPage, skipDraw, skipRebuildList) {
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
		} else {
			unitsFiltered.push(unit);
			if (!skipRebuildList) {
				var card = getCardByID(unit);
				if (!addedNames[card.name]) {
					names.push(card.name);
					addedNames[card.name] = true;
				}
			}
		}
	}

	if (!skipRebuildList) {
		var dataList = document.getElementById('names');
		CARD_GUI.removeAllChildren(dataList);
		CARD_GUI.appendChildren(
			dataList,
			names.map(function createOption(name) {
				var option = document.createElement('option');
				option.value = name;
				return option;
			})
		);
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

var isInFaction = function (unit, faction) {
	var factionID = factions.IDs[faction];
	var card = get_slim_card_by_id(unit, true);
	return (card.type == factionID);
}

var isInSubfaction = function (unit, faction) {
	var factionID = factions.IDs[faction];
	var card = get_slim_card_by_id(unit, true);
	if (typeof factionID === "undefined") {
		return (card.sub_type.length === 0);
	} else {
		return (card.sub_type.indexOf(factionID.toString()) >= 0);
	}
}

var isDualFaction = function (unit) {
	var card = get_slim_card_by_id(unit, true);
	return (card.sub_type.length > 1);
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
	applyFilters(true);
}

var toggleUpgrades = function (checkbox) {
	showUpgrades = checkbox.checked;
	$("body").addClass("loading");
	setTimeout(function () {
		drawCardList();
		$("body").removeClass("loading");
		applyFilters(false);
	}, 1);
}

function sortAndDraw(select) {
	doSort(select);
	applyFilters();
}

var sortCards = function (select) {
	doSort(select);
}

function doSort(select) {
	var sortField = select.value;
	unitsShown.sort(function (unitA, unitB) {
		// Always sort by commander/unit first
		var comparison = is_commander(unitB.id) - is_commander(unitA.id);
		if (comparison != 0) return comparison;

		if (sortField === 'id') {
			return compareByID(unitA, unitB);
		} else {
			var cardA = getCardByID(unitA);
			var cardB = getCardByID(unitB);
			if (sortField === 'sub_type') {
				comparison = compareBySubfactions(cardA, cardB);
			} else {
				comparison = (cardA[sortField] || 0) - (cardB[sortField] || 0);
			}
			if (comparison != 0) return comparison;
			// Fall back on sorting by ID
			return compareByID(unitA, unitB);
		}
	});
}

// TODO: Remove recursion (causes stack overflow in JavaScript)
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

	var keyA = (unitIDA % 10000);
	var keyB = (unitIDB % 10000);
	var comparison = keyA - keyB;
	if (comparison != 0) return comparison;

	var comparison = unitIDA - unitIDB;
	if (comparison != 0) return comparison;

	var comparison = unitA.level - unitB.level;
	if (comparison != 0) return comparison;

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
	if (comparison != 0) return comparison;
	if (!unitA.runes.length) return 0;
	return unitA.runes[0].id - unitB.runes[0].id;
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
	lbl.innerText += " " + name;
}

function saveDeck() {
	var hash = $("#hash").val();
	$("#saveDeckName").val("");
	var savedDecks = storageAPI.getSavedDecks();
	for (var name in savedDecks) {
		var existing = savedDecks[name];
		if (hash == existing) {
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
	var name = _GET('name');
	var hash = $("#hash").val();
	if (name) {
		params.push("name=" + name);
	}
	if (hash) {
		params.push("hash=" + hash);
	}
	if (inventory) {
		params.push("inventory=" + hash_encode({ commander: elariaCaptain, deck: inventory }));
	}
	if (inventoryMode) {
		params.push("unlimited");
	}
	if (_DEFINED("spoilers")) {
		params.push("spoilers");
	}
	var link = "http://thesench.github.io/SIMSpellstone/DeckBuilder.html";
	if (params.length) {
		link += "?" + params.join("&");
	}
	$("#link").attr("href", link).text(link);
}

function externalData(hash, inventoryHash) {
	setHash(hash);
	inventory = inventoryHash;
}