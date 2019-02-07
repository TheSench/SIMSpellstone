"use strict";

var deckPopupDialog;
var base64 = require('base64');
var urlHelpers = require('urlHelpers');
var loadDeck = require('loadDeck');
var debugLog = require('debugLog');

window.addEventListener('error', function (message, url, lineNumber) {
	var errorDescription = "JavaScript error:\n " + message + "\n on line " + lineNumber + "\n for " + url;

	window.sa('send', 'exception', {
		'exDescription': errorDescription,
		'exFatal': false
	});

	if (lineNumber === 0) {
		var msg = "<br><br><i>Error Message:</i><br><br>" +
			"<i>It appears you're having trouble loading SimSpellstone. " +
			"Thanks.</i><br><br>";
		if (outp) {
			outp(msg);
		} else {
			document.write(msg);
		}
		return 1;
	}

	errorDescription += "\n";
	errorDescription += "Browser CodeName: " + navigator.appCodeName + "\n";
	errorDescription += "Browser Name: " + navigator.appName + "\n";
	errorDescription += "Browser Version: " + navigator.appVersion + "\n";
	errorDescription += "Cookies Enabled: " + navigator.cookieEnabled + "\n";
	errorDescription += "Platform: " + navigator.platform + "\n";
	errorDescription += "User-agent header: " + navigator.userAgent + "\n";
	try {
	errorDescription += "URL: " + generate_link() + "\n";
	} catch (err) {
		// Swallow
	}

	outp("<br><br><i>Error Message:</i><br><textarea cols=50 rows=6 onclick=\"this.select()\"><blockquote>" + errorDescription + "</blockquote></textarea>");

	// Stop the recursion if any
	if (current_timeout) clearTimeout(current_timeout);
});

// When Page Loads...
function processQueryString() {

	$("#header").load("templates/header.html", function () {
		if (typeof showTutorial !== "undefined") {
			$("#help").click(showTutorial);
		}
	});
	$.holdReady(true);
	$("#footer").load("templates/footer.html", function () {
		$.holdReady(false);
	});

	var ui = document.getElementById('ui');
	if (!ui) return 0;

	var $scope = angular.element(document.getElementById('ui')).scope();

	$("#generate_link").on("click", display_generated_link);

	$("#btn_simulate").on("click", SIM_CONTROLLER.startsim);
	$("#btnStop").on("click", SIM_CONTROLLER.stopsim);

	$("#display_history").on("click", display_history);

	$('#deck1').val(urlHelpers.paramValue('deck1')).change();
	$('#deck2').val(urlHelpers.paramValue('deck2')).change();

	$('#surge').prop("checked", urlHelpers.paramDefined("surge"));
	$('#siege').prop("checked", urlHelpers.paramDefined("siege"));
	var tower_level = Math.min(Math.max(urlHelpers.paramValue('tower_level') || 18, 0), 18);
	$('#tower_level').val(tower_level);

	var tower_type = (urlHelpers.paramValue('tower_type') || 501);
	$("#tower_type").val(tower_type);

	$('#auto_mode').prop("checked", urlHelpers.paramDefined("auto_mode"));
	$('#tournament').prop("checked", urlHelpers.paramDefined("tournament"));
	$('#ordered').prop("checked", urlHelpers.paramDefined("ordered"));
	$('#exactorder').prop("checked", urlHelpers.paramDefined("exactorder"));

	$('#ordered2').prop("checked", urlHelpers.paramDefined("ordered2"));
	$('#exactorder2').prop("checked", urlHelpers.paramDefined("exactorder2"));
	if (urlHelpers.paramDefined("randomAI")) {
		pvpAI = false;
	}

	var locationID = urlHelpers.paramValue('location');
	var campaignID = urlHelpers.paramValue('campaign');
	var missionID = urlHelpers.paramValue('mission');
	var raidID = urlHelpers.paramValue('raid');
	if (locationID) $('#location').val(locationID).change();
	if (campaignID) {
		if (!locationID) {
			locationID = CAMPAIGNS[campaignID].location_id;
			$('#location').val(locationID).change();
		}
		$('#campaign').val(campaignID).change();
	}
	if (missionID) {
		$('#mission_level').val(urlHelpers.paramValue('mission_level') || 7);
		$('#mission').val(missionID).change();
	}
	if (raidID) {
		$('#raid_level').val(urlHelpers.paramValue('raid_level') || 25);
		$('#raid').val(raidID).change();
	}

	if (urlHelpers.paramDefined("bges")) {
		var bges = urlHelpers.paramValue('bges');
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64.toDecimal(bges.substring(i, i + 2));
			$("#battleground_" + bge).prop('checked', true);
		}
	} else {
		// Load current battlegrounds
		var bgCheckBoxes = document.getElementsByName("battleground");
		for (var i = 0; i < current_bges.length; i++) {
			$("#battleground_" + current_bges[i]).prop('checked', true);
		}
	}
	var bges = urlHelpers.paramValue('selfbges');
	if (bges) {
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64.toDecimal(bges.substring(i, i + 2)) + 10000;
			$("#self-battleground_" + bge).prop('checked', true);
		}
	}
	var bges = urlHelpers.paramValue('enemybges');
	if (bges) {
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64.toDecimal(bges.substring(i, i + 2)) + 10000;
			$("#enemy-battleground_" + bge).prop('checked', true);
		}
	}

	var mapBges = urlHelpers.paramValue("mapBges");
	if (mapBges) {
		setSelectedMapBattlegrounds(mapBges);
	}

	$("#battleground").change();

	$('#sims').val(urlHelpers.paramValue('sims') || 10000);

	if (urlHelpers.paramDefined("debug")) $('#debug').click();
	if (urlHelpers.paramDefined("mass_debug")) $('#mass_debug').click();
	if (urlHelpers.paramDefined("loss_debug")) $('#loss_debug').click();
	if (urlHelpers.paramDefined("win_debug")) $('#win_debug').click();
	if (urlHelpers.paramDefined("play_debug")) $('#play_debug').click();

	document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

	if (urlHelpers.paramDefined('autostart') && !urlHelpers.paramDefined("latestCards")) {
		SIM_CONTROLLER.startsim(1);
	} else if (urlHelpers.paramDefined('unit_tests')) {
		var body = document.getElementsByTagName("body")[0];
		var script = document.createElement("script");
		script.src = "scripts/unit_tests.js";
		body.appendChild(script);
		script.onload = function () {
			var script = document.createElement("script");
			script.src = "scripts/unit_test_runner.js";
			body.appendChild(script);
		};
	}

	if (document.getElementById("missionDeckDialog")) {
		deckPopupDialog = $("#missionDeckDialog").dialog({
			autoOpen: false,
			minWidth: 500,
			minHeight: 20,
			modal: true,
			resizable: false,
			draggable: false,
			buttons: {
				Close: function () {
					deckPopupDialog.dialog("close");
				}
			},
			open: function (event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); }
		});
	}
}

var style;
var u_black = false;
function toggle_u() {
	var append = false;
	if (typeof style === 'undefined') {
		append = true;
		style = document.createElement('style');
	} else {
		while (style.hasChildNodes()) {
			style.removeChild(style.firstChild);
		}
	}
	var head = document.getElementsByTagName('head')[0];
	var rules;
	if (!u_black) {
		u_black = true;
		rules = document.createTextNode(
			'u { text-decoration: none; font-style:normal; color: #000000; font-weight: normal; }'
		);
	} else {
		u_black = false;
		rules = document.createTextNode(
			'u { text-decoration: none; font-style:normal; color: #dddddd; font-weight: normal; }'
		);
	}

	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = rules.nodeValue;
	} else {
		style.appendChild(rules);
	}
	if (append === true) head.appendChild(style);
}

function toggleUI(display) {
	if (display) {
		$("#ui").show();
	} else {
		$("#ui").hide();
	}
}

function showUI() {
	// Show interface
	toggleUI(true);
	// Hide stop button
	document.getElementById('stop').style.display = 'none';
}

function hideUI() {
	$(".accordion").accordion('option', 'active', null);
	// Hide interface
	toggleUI(false);
	// Display stop button
	document.getElementById('stop').style.display = 'block';
}

function getSelectedBattlegrounds(prefix) {
	prefix = (prefix || "");
	var getbattleground = [];
	var bgCheckBoxes = document.getElementsByName(prefix + "battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		var checkbox = bgCheckBoxes[i];
		if (checkbox && checkbox.checked) {
			getbattleground.push(checkbox.value);
		}
	}
	getbattleground = getbattleground.join();
	return getbattleground;
}

function getSelectedMapBattlegrounds() {
	var getbattleground = [];
	var locationID = $("#location").val();
	var selects = document.getElementsByName("map-battleground");
	for (var i = 0; i < selects.length; i++) {
		var select = selects[i];
		if (select.value > 0) {
			getbattleground.push(locationID + "-" + i + "-" + select.value);
		}
	}
	getbattleground = getbattleground.join();
	return getbattleground;
}

function setSelectedMapBattlegrounds(mapBgeString) {
	var selects = document.getElementsByName("map-battleground");
	for (var i = 0; i < mapBgeString.length && i < selects.length; i++) {
		selects[i].value = mapBgeString[i];
	}
}

// Modify HTML to output simulation results
function outp(text) {
	$("#content").html(text);
}

function outputTurns() {
	var turnData = debugLog.getLog();
	if(!turnData) {
		return;
	}

	if (closeDiv) {
		turnData += "</div>";
		closeDiv = false;
	}
	turnData = "<input id='show-turns' type='button' value='Show All' /> <div id='turn-container'>Turn: <select id='turn-picker'></select></div> <div>" + turnData + "</div>";
	outp(turnData);
	var numTurns = $(".turn-info").hide().length;
	var options = [];
	for (var i = 0; i < numTurns; i++) {
		var turn = i + 1;
		options.push("<option value='" + i + "'>" + turn + "</option>");
	}
	var lastTurn = i - 1;
	if (lastTurn && closeDiv) lastTurn--;
	$("#turn-picker").append(options).change(function (event) {
		var turn = event.target.selectedIndex;
		$(".turn-info").hide().eq(turn).show();
	}).val(lastTurn).change();
	var hidden = true;
	$("#show-turns").click(function () {
		hidden = !hidden;
		if (hidden) {
			var turn = $("#turn-picker").val();
			$(".turn-info").hide().eq(turn).show();
			$("#turn-container").show();
			this.value = "Show All";
		} else {
			$(".turn-info").show();
			$("#turn-container").hide();
			this.value = "Show One";
		}
	});
}

// Return table of simulation results
function showWinrate() {

	if (suppressOutput) {
	} else if (debugLog.enabled || sims_left == 0) {
		// Generate links
		var links = '';
		links += '<br>' +
			'<br>' +
			'<i>Non-autostart link</i>' +
			'<br>' +
			'<a href="' + generate_link() + '">' + generate_link() + '</a>' +
			'<br>' +
			'<br>' +
			'<i>Autostart link</i>' +
			'<br>' +
			'<a href="' + generate_link(1) + '">' + generate_link(1) + '</a>' +
			'<br>' +
			'<br>';
		if (debugLog.enabled) return links;
	}
	// Win/Loss ratios
	var winPercent = wins / games;
	var winrate = (winPercent * 100).toFixed(2) + "%";
	$("#wins").html(wins);
	$("#winrate").html(winrate);

	var lossrate = losses / games * 100;
	lossrate = lossrate.toFixed(2) + "%";
	$("#losses").html(losses);
	$("#lossrate").html(lossrate);

	var drawrate = draws / games * 100;
	drawrate = drawrate.toFixed(2) + "%";
	$("#draws").html(draws);
	$("#drawrate").html(drawrate);

	var mErr = marginOfError(wins, games);
	$("#marginGames").html((mErr * games).toFixed(0));
	mErr = mErr.toFixed(2) + "%";
	$("#marginPercent").html(mErr);

	var totalSims = games + sims_left;
	var percentComplete = (games * 100 / totalSims).toFixed("2") + "%";
	$(".battleCount").html(games);
	$("#percentComplete").html(percentComplete);

	// Calculate Average length of battle
	$("#avgLength").html((total_turns / games).toFixed(1));

	$("#avgPoints").html((points / games).toFixed(2));

	$("#winrateTable").show();
	// Final output
	var full_table = "";
	if (sims_left == 0) {
		// Add generated links to final output
		full_table += links;

		// Append results to history

		var current_deck = '';
		var deck = [];
		var deck1Hash = document.getElementById('deck1').value;

		// Load player deck
		if (deck1Hash) {
			deck.player = base64.decodeHash(deck1Hash);
		}
		if (deck.player) {
			current_deck = base64.encodeHash(deck.player);
		}

		//battle_history += winrate + '% (+/- ' + stdDev + '%) &nbsp; &nbsp; ' + current_deck + '<br>';
		battle_history += winrate + ' (+/- ' + mErr + ') &nbsp; &nbsp; ' + current_deck + '<br>';
	}

	return full_table;
}

function hideTable() {
	$("#winrateTable").hide();
}

function setSimStatus(simStatusMsg, elapse, simsPerSec) {
	$("#simStatusMsg").html(simStatusMsg);
	if (elapse && simsPerSec) {
		var totalSims = games + sims_left;
		var percentComplete = (games * 100 / totalSims).toFixed("2") + "%";
		var progress = ('(' + games + '/' + totalSims + ') ' + percentComplete);
		$("#progress").html(progress);
		$("#speed").show();
		$("#elapsed").html(elapse);
		$("#simsPerSec").html(simsPerSec);
	} else {
		$("#progress").html("");
		$("#speed").hide();
	}
	$("#simulationStatus").show();
}

function winrateDev(wins, games) {
	if (games <= 1) return 1;

	var p = wins / games;
	var N = games;
	var dev = Math.sqrt(N * p * (1 - p));
	return dev;
}

// http://onlinestatbook.com/2/estimation/proportion_ci.html
function marginOfError(wins, games) {
	if (games <= 1) return 1;

	var p = wins / games;
	var N = games;
	var stdErr = Math.sqrt((p * (1 - p)) / N);
	var Z95 = 1.96;
	return ((stdErr * Z95) + 0.5 / N) * 100;
}

// Generate a link from current settings and input
function generate_link(autostart) {

	var d = 0;
	var deck = [];

	var url_base = document.URL;
	var index_of_query = url_base.indexOf('?');
	if (index_of_query > 0) {
		url_base = url_base.substring(0, index_of_query);
	}

	var parameters = [];
	addValueParam(parameters, "deck1");
	addValueParam(parameters, "deck2");

	addValueParam(parameters, "location");
	addValueParam(parameters, "campaign");
	addValueParam(parameters, "mission");
	addValueParam(parameters, "mission_level");
	addValueParam(parameters, "raid");
	addValueParam(parameters, "raid_level");
	var mapBges = $('select[name=map-battleground]').toArray().reduce(function (acc, val) { return acc + val.value; }, "");
	if (mapBges.length) {
		parameters.push('mapBges=' + mapBges);
	}

	addBoolParam(parameters, "surge");

	if (addBoolParam(parameters, "siege")) {
		addValueParam(parameters, "tower_level");
		addValueParam(parameters, "tower_type");
	}

	addBoolParam(parameters, "auto_mode");
	addBoolParam(parameters, "tournament");
	addBoolParam(parameters, "ordered");
	addBoolParam(parameters, "exactorder");
	addBoolParam(parameters, "ordered2");
	addBoolParam(parameters, "exactorder2");

	var bges = '';
	var bgCheckBoxes = document.getElementsByName("battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		d = bgCheckBoxes[i];
		if (d.checked) bges += base64.fromDecimal(d.value, 2);
	}
	parameters.push('bges=' + bges);

	var bges = '';
	var bgCheckBoxes = document.getElementsByName("self-battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		d = bgCheckBoxes[i];
		if (d.checked) bges += base64.fromDecimal(d.value - 10000, 2);
	}
	if (bges) {
		parameters.push('selfbges=' + bges);
	}

	var bges = '';
	var bgCheckBoxes = document.getElementsByName("enemy-battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		d = bgCheckBoxes[i];
		if (d.checked) bges += base64.fromDecimal(d.value - 10000, 2);
	}
	if (bges) {
		parameters.push('enemybges=' + bges);
	}


	addValueParam(parameters, "sims");

	addBoolParam(parameters, "debug");
	addBoolParam(parameters, "mass_debug");
	addBoolParam(parameters, "loss_debug");
	addBoolParam(parameters, "win_debug");
	addBoolParam(parameters, "play_debug");

	if (autostart) {
		parameters.push('autostart');
	}

	if (parameters.length > 0) {
		return url_base + '?' + parameters.join('&');
	} else {
		return url_base;
	}
}

function addValueParam(params, paramName, fieldName) {
	var value = $("#" + (fieldName || paramName)).val();
	if (value) {
		params.push(paramName + "=" + value);
		return true;
	} else {
		return false;
	}
}

function addBoolParam(params, paramName) {
	var checked = $("#" + paramName).is(":checked");
	if (checked) {
		params.push(paramName);
		return true;
	} else {
		return false;
	}
}

var deckBuilders = {};
function load_deck_builder(player) {
	if (player === 'player') {
		var getdeck = $('#deck1').val();
		var getmission;
		var missionlevel;
		var getraid;
		var raidlevel;
	} else {
		var getdeck = $('#deck2').val();
		var getmission = $('#mission').val();
		var missionlevel = $('#mission_level').val();
		var getraid = $('#raid').val();
		var raidlevel = $('#raid_level').val();
	}

	// Load player deck
	if (getdeck) {
		deck = base64.decodeHash(getdeck);
	} else if (getmission) {
		deck = loadDeck.mission(getmission, missionlevel);
	} else if (getraid) {
		deck = loadDeck.raid(getraid, raidlevel);
	} else {
		deck = loadDeck.defaultDeck();
	}
	var hash = base64.encodeHash(deck);

	var name = (player == 'player' ? 'Player Deck' : 'Enemy Deck');
	var deckHashField = (player ? $("#" + (player == 'player' ? 'deck1' : 'deck2')) : null);

	var currentDeckBuilder = deckBuilders[player];
	if (currentDeckBuilder == null || currentDeckBuilder.closed) {
		deckBuilders[player] = open_deck_builder(name, hash, null, deckHashField);
	}
	else {
		currentDeckBuilder.focus();
	}
}

function open_deck_builder(name, hash, inventory, deckHashField) {
	var parameters = ["nosort"];
	if (hash) {
		parameters.push("hash=" + hash);
	}
	if (inventory) {
		parameters.push("inventory=" + inventory);
	}

	if (name) {
		parameters.push("name=" + name);
	}
	if (urlHelpers.paramDefined("ajax")) {
		parameters.push("ajax");
	}
	parameters.push("fromSim");

	var url = "DeckBuilder.html?" + parameters.join('&');

	var width = Math.min(screen.width, 1000);
	var height = Math.min(screen.height, 700);
	var left = Number((screen.width - width) / 2);
	var top = Number((screen.height - height) / 2);

	var windowFeatures = 'scrollbars,left=' + left + 'top=' + top + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
	var win = window.open(url, '', windowFeatures);

	// Push values to window once it has loaded
	$(win).load((function (deckHashField) {
		return function () {
			// Tie deck-builder back to the hash field in the simulator.
			if (deckHashField) win.updateSimulator = function (hash) { deckHashField.val(hash).change(); };
		};
	})(deckHashField));

	return win;
}

function display_generated_link() {
	outp('' +
		'<br>' +
		'<i>Non-autostart link</i>' +
		'<br>' +
		'<a href="' + generate_link() + '">' + generate_link() + '</a>' +
		'<br>' +
		'<br>' +
		'<i>Autostart link</i>' +
		'<br>' +
		'<a href="' + generate_link(1) + '">' + generate_link(1) + '</a>' +
		'<br>' +
		'<br>' +
		'');
}

function clear_history() {
	battle_history = '';
	display_history();
}

function display_history() {
	outp('' +
		'<br>' +
		'<hr>' +
		(battle_history || 'No history available.') +
		'<hr>' +
		'<br>' +
		'<br>' +
		'<input type="button" value="Clear History" onclick="clear_history();" style="text-align: center; font-weight: normal;">' +
		'<br>' +
		'<br>' +
		'');
}

// Initialize global variables
var battle_history = '';
var max_turns = 100;
var mass_debug = false;
var loss_debug = false;
var win_debug = false;
var found_desired = false;
var play_debug = false;
var showAnimations = false;
var getdeck = '';
var getdeck2 = '';
var getcardlist = '';
var getcardlist2 = '';
var getordered = false;
var getordered2 = false;
var getexactorder = false;
var getexactorder2 = false;
var getcampaign = 0;
var getmission = 0;
var missionlevel = 0;
var getraid = false;
var raidlevel = 0;
var getbattleground = '';
var enemybges = '';
var selfbges = '';
var mapbges = '';
var getsiege = 0;
var tower_level = 0;
var tower_type = 0;
var pvpAI = true;
var closeDiv = false;
var wins = 0;
var losses = 0;
var draws = 0;
var games = 0;
var points = 0;
var num_sims = 0;
var last_games = [];
var sims_left = 0;
var current_timeout;
var surge = false;
var battleground = [];
var total_turns = 0;
var cache_player_deck;
var cache_cpu_deck;
var cache_player_deck_cards;
var cache_cpu_deck_cards;
var choice = undefined;
var auto_mode = false;
var tournament = false;
var suppressOutput = false;
var orders = {};
var cardStats = {};