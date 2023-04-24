"use strict";

var deckPopupDialog;

window.addEventListener('error', function (message, url, linenumber) {

	if (linenumber == 0) {
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
	var err_msg = "JavaScript error:\n " + message + "\n on line " + linenumber + "\n for " + url;

	err_msg += "\n";
	err_msg += "Browser CodeName: " + navigator.appCodeName + "\n";
	err_msg += "Browser Name: " + navigator.appName + "\n";
	err_msg += "Browser Version: " + navigator.appVersion + "\n";
	err_msg += "Cookies Enabled: " + navigator.cookieEnabled + "\n";
	err_msg += "Platform: " + navigator.platform + "\n";
	err_msg += "User-agent header: " + navigator.userAgent + "\n";
	err_msg += "SimSpellstone version: " + text_version + "\n";

	var simConfig = SIMULATOR.config;
	if (simConfig.playerDeck) err_msg += "Deck hash: " + simConfig.playerDeck + "\n";
	if (simConfig.playerOrdered) err_msg += "Ordered: Yes\n";
	if (simConfig.playerExactOrdered) err_msg += "Exact-order: Yes\n";
	if (simConfig.surge) err_msg += "Surge: Yes\n";
	if (simConfig.cpuDeck) err_msg += "Enemy deck hash: " + simConfig.cpuDeck + "\n";
	if (simConfig.cpuOrdered) err_msg += "Enemy Ordered: Yes\n";
	if (simConfig.cpuExactOrdered) err_msg += "Enemy Exact-order: Yes\n";
	if (simConfig.missionID) err_msg += "Mission ID: " + simConfig.missionID + "\n";
	if (simConfig.raidID) err_msg += "Raid ID: " + simConfig.raidID + "\n";
	if (simConfig.getbattleground) err_msg += "Battleground ID: " + simConfig.getbattleground + "\n";
	if (games) err_msg += "Sims run so far: " + games + "\n";
	try {
		err_msg += "Link to reproduce: " + generate_link() + "\n";
	} catch (_) {}

	outp("<br><br><i>Error Message:</i><br><textarea cols=50 rows=6 onclick=\"this.select()\"><blockquote>" + err_msg + "</blockquote></textarea>" + echo);

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

	$('#deck1').val(_GET('deck1')).change();
	$('#deck2').val(_GET('deck2')).change();

	$('#surge').prop("checked", _DEFINED("surge"));
	$('#siege').prop("checked", _DEFINED("siege"));
	var tower_level = Math.min(Math.max(_GET('tower_level') || 18, 0), 18);
	$('#tower_level').val(tower_level);

	var tower_type = (_GET('tower_type') || 501);
	$("#tower_type").val(tower_type);

	$('#auto_mode').prop("checked", _DEFINED("auto_mode"));
	$('#tournament').prop("checked", _DEFINED("tournament"));
	$('#ordered').prop("checked", _DEFINED("ordered"));
	$('#exactorder').prop("checked", _DEFINED("exactorder"));

	$('#ordered2').prop("checked", _DEFINED("ordered2"));
	$('#exactorder2').prop("checked", _DEFINED("exactorder2"));
	if (_DEFINED("randomAI")) {
		pvpAI = false;
	}

	var locationID = _GET('location');
	var campaignID = _GET('campaign');
	var missionID = _GET('mission');
	var raidID = _GET('raid');
	if (missionID) {
		if (!campaignID) {
			campaignID = Object.keys(CAMPAIGNS).filter(function isCampaign(campaignID) {
				return CAMPAIGNS[campaignID].missions.indexOf(missionID) >= 0;
			})[0];
		}
	}
	if (campaignID) {
		if (!locationID) {
			locationID = CAMPAIGNS[campaignID].location_id;
			$('#location').val(locationID).change();
		}
	}
	if (locationID) $('#location').val(locationID).change();
	if (campaignID) $('#campaign').val(campaignID).change();
	if (missionID) {
		$('#mission_level').val(_GET('mission_level') || 7);
		$('#mission').val(missionID).change();
	}
	if (raidID) {
		$('#raid_level').val(_GET('raid_level') || 25);
		$('#raid').val(raidID).change();
	}

	if (_DEFINED("bges")) {
		var bges = _GET('bges');
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64_to_decimal(bges.substring(i, i + 2));
			$("#battleground_" + bge).prop('checked', true);
		}
	} else {
		// Load current battlegrounds
		var bgCheckBoxes = document.getElementsByName("battleground");
		for (var i = 0; i < current_bges.length; i++) {
			$("#battleground_" + current_bges[i]).prop('checked', true);
		}
	}
	var bges = _GET('selfbges');
	if (bges) {
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64_to_decimal(bges.substring(i, i + 2)) + 10000;
			$("#self-battleground_" + bge).prop('checked', true);
		}
	}
	var bges = _GET('enemybges');
	if (bges) {
		// Each BGE is a 2-character ID in Base64
		for (var i = 0; i < bges.length; i += 2) {
			var bge = base64_to_decimal(bges.substring(i, i + 2)) + 10000;
			$("#enemy-battleground_" + bge).prop('checked', true);
		}
	}

	var mapBges = _GET("mapBges");
	if (mapBges) {
		setSelectedMapBattlegrounds(mapBges);
	}

	$("#battleground").change();

	$('#sims').val(_GET('sims') || 10000);

	if (_DEFINED("debug")) $('#debug').click();
	if (_DEFINED("mass_debug")) $('#mass_debug').click();
	if (_DEFINED("loss_debug")) $('#loss_debug').click();
	if (_DEFINED("win_debug")) $('#win_debug').click();
	if (_DEFINED("play_debug")) $('#play_debug').click();

	document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

	if (_DEFINED('autostart') && !_DEFINED("latestCards")) {
		SIM_CONTROLLER.startsim(1);
	} else if (_DEFINED('unit_tests')) {
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
	var selectedBattlegrounds = [];
	var bgCheckBoxes = document.getElementsByName(prefix + "battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		var checkbox = bgCheckBoxes[i];
		if (checkbox && checkbox.checked) {
			selectedBattlegrounds.push(checkbox.value);
		}
	}
	selectedBattlegrounds = selectedBattlegrounds.join();
	return selectedBattlegrounds;
}

function getSelectedMapBattlegrounds() {
	var selectedMapBattlegrounds = [];
	var locationID = $("#location").val();
	var selects = document.getElementsByName("map-battleground");
	for (var i = 0; i < selects.length; i++) {
		var select = selects[i];
		if (select.value > 0) {
			selectedMapBattlegrounds.push(locationID + "-" + i + "-" + select.value);
		}
	}
	selectedMapBattlegrounds = selectedMapBattlegrounds.join();
	return selectedMapBattlegrounds;
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

function outputTurns(turnData, showAll) {
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
	var showTurnsBtn = $("#show-turns").click(function () {
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
	if(showAll) showTurnsBtn.click();
}

// Return table of simulation results
function showWinrate() {

	if (suppressOutput) {
	} else if (debug || sims_left == 0) {
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
		if (debug) return links;
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
			deck.player = hash_decode(deck1Hash);
		}
		if (deck.player) {
			current_deck = hash_encode(deck.player);
		}

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
		if (d.checked) bges += decimal_to_base64(d.value, 2);
	}
	parameters.push('bges=' + bges);

	var bges = '';
	var bgCheckBoxes = document.getElementsByName("self-battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		d = bgCheckBoxes[i];
		if (d.checked) bges += decimal_to_base64(d.value - 10000, 2);
	}
	if (bges) {
		parameters.push('selfbges=' + bges);
	}

	var bges = '';
	var bgCheckBoxes = document.getElementsByName("enemy-battleground");
	for (var i = 0; i < bgCheckBoxes.length; i++) {
		d = bgCheckBoxes[i];
		if (d.checked) bges += decimal_to_base64(d.value - 10000, 2);
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
	if (player == 'player') {
		var playerDeck = $('#deck1').val();
		var missionID;
		var missionLevel;
		var raidID;
		var raidLevel;
	} else {
		var playerDeck = $('#deck2').val();
		var missionID = $('#mission').val();
		var missionLevel = $('#mission_level').val();
		var raidID = $('#raid').val();
		var raidLevel = $('#raid_level').val();
	}

	// Load player deck
	var deck = {
		commander: elariaCaptain,
		deck: []
	};
	if (playerDeck) {
		deck = hash_decode(playerDeck);
	} else if (missionID) {
		deck = load_deck_mission(missionID, missionLevel);
	} else if (raidID) {
		deck = load_deck_raid(raidID, raidLevel);
	}
	var hash;
	if (deck) {
		hash = hash_encode(deck);
	}

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
	if (_DEFINED("ajax")) {
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
	$(win).load((function (name, deckHashField) {
		return function () {
			// Tie deck-builder back to the hash field in the simulator.
			if (deckHashField) win.updateSimulator = function (hash) { deckHashField.val(hash).change(); };
		};
	})(name, deckHashField));

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
var debug = false;
var mass_debug = false;
var loss_debug = false;
var win_debug = false;
var found_desired = false;
var play_debug = false;
var showAnimations = false;
var pvpAI = true;
var echo = '';
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
var battleground = [];
var total_turns = 0;
var cache_player_deck;
var cache_cpu_deck;
var cache_player_deck_cards;
var cache_cpu_deck_cards;
var choice = undefined;
var tournament = false;
var suppressOutput = false;