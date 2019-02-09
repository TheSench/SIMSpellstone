"use strict";

define('ui', [
	'base64',
	'urlHelpers',
	'loadDeck',
	'debugLog',
	'storageAPI',
	'dataUpdater',
	'matchStats'
], function (
	base64,
	urlHelpers,
	loadDeck,
	debugLog,
	storageAPI,
	dataUpdater,
	matchStats
) {
	var api = {
		show: showUI,
		hide: hideUI,
		getSelectedBattlegrounds: getSelectedBattlegrounds,
		getSelectedMapBattlegrounds: getSelectedMapBattlegrounds,
		generateLink: generateLink,
		displayText: displayText,
		displayTurns: displayTurns,
		showWinrate: showWinrate,
		hideTable: hideTable,
		setSimStatus: setSimStatus,
		loadDeckBuilder: loadDeckBuilder,
		updateGameData: updateGameData,
		loadSavedDeck: loadSavedDeck,
		toggleTheme: toggleTheme
	};

	var loadDeckDialog;

	window.addEventListener('error', function onUncaughtException(message, url, lineNumber) {
		var errorDescription = "JavaScript error:\n " + message + "\n on line " + lineNumber + "\n for " + url;

		window.sa('send', 'exception', {
			'exDescription': errorDescription,
			'exFatal': false
		});

		if (lineNumber === 0) {
			var msg = "<br><br><i>Error Message:</i><br><br>" +
				"<i>It appears you're having trouble loading SimSpellstone. " +
				"Thanks.</i><br><br>";
			if (displayText) {
				displayText(msg);
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
			errorDescription += "URL: " + generateLink() + "\n";
		} catch (err) {
			// Swallow
		}

		displayText("<br><br><i>Error Message:</i><br><textarea cols=50 rows=6 onclick=\"this.select()\"><blockquote>" + errorDescription + "</blockquote></textarea>");

		// Stop the recursion if any
		if (current_timeout) clearTimeout(current_timeout);
	});

	function _toggleUI(display) {
		if (display) {
			$("#ui").show();
		} else {
			$("#ui").hide();
		}
	}

	function showUI() {
		// Show interface
		_toggleUI(true);
		// Hide stop button
		document.getElementById('stop').style.display = 'none';
	}

	function hideUI() {
		$(".accordion").accordion('option', 'active', null);
		// Hide interface
		_toggleUI(false);
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

	// Modify HTML to output simulation results
	function displayText(text) {
		$("#content").html(text);
	}

	function displayTurns() {
		var turnData = debugLog.getLog();
		if (!turnData) {
			return;
		}

		if (closeDiv) {
			turnData += "</div>";
			closeDiv = false;
		}
		turnData = "<input id='show-turns' type='button' value='Show All' /> <div id='turn-container'>Turn: <select id='turn-picker'></select></div> <div>" + turnData + "</div>";
		displayText(turnData);
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

		if (debugLog.enabled || sims_left == 0) {
			// Generate links
			var links = '';
			links += '<br>' +
				'<br>' +
				'<i>Non-autostart link</i>' +
				'<br>' +
				'<a href="' + generateLink() + '">' + generateLink() + '</a>' +
				'<br>' +
				'<br>' +
				'<i>Autostart link</i>' +
				'<br>' +
				'<a href="' + generateLink(1) + '">' + generateLink(1) + '</a>' +
				'<br>' +
				'<br>';
			if (debugLog.enabled) return links;
		}
		// Win/Loss ratios
		var winPercent = matchStats.matchesWon / matchStats.matchesPlayed;
		var winrate = (winPercent * 100).toFixed(2) + "%";
		$("#wins").html(matchStats.matchesWon);
		$("#winrate").html(winrate);

		var lossrate = matchStats.matchesLost / matchStats.matchesPlayed * 100;
		lossrate = lossrate.toFixed(2) + "%";
		$("#losses").html(matchStats.matchesLost);
		$("#lossrate").html(lossrate);

		var drawrate = matchStats.matchesDrawn / matchStats.matchesPlayed * 100;
		drawrate = drawrate.toFixed(2) + "%";
		$("#draws").html(matchStats.matchesDrawn);
		$("#drawrate").html(drawrate);

		var mErr = _marginOfError(matchStats.matchesWon, matchStats.matchesPlayed);
		$("#marginGames").html((mErr * matchStats.matchesPlayed).toFixed(0));
		mErr = mErr.toFixed(2) + "%";
		$("#marginPercent").html(mErr);

		var totalSims = matchStats.matchesPlayed + sims_left;
		var percentComplete = (matchStats.matchesPlayed * 100 / totalSims).toFixed("2") + "%";
		$(".battleCount").html(matchStats.matchesPlayed);
		$("#percentComplete").html(percentComplete);

		// Calculate Average length of battle
		$("#avgLength").html((matchStats.totalTurns / matchStats.matchesPlayed).toFixed(1));

		$("#avgPoints").html((matchStats.totalPoints / matchStats.matchesPlayed).toFixed(2));

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
			var totalSims = matchStats.matchesPlayed + sims_left;
			var percentComplete = (matchStats.matchesPlayed * 100 / totalSims).toFixed("2") + "%";
			var progress = ('(' + matchStats.matchesPlayed + '/' + totalSims + ') ' + percentComplete);
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
	function _marginOfError(matchStats.matchesWon, matchStats.matchesPlayed) {
		if (matchStats.matchesPlayed <= 1) return 1;

		var p = matchStats.matchesWon / matchStats.matchesPlayed;
		var N = matchStats.matchesPlayed;
		var stdErr = Math.sqrt((p * (1 - p)) / N);
		var Z95 = 1.96;
		return ((stdErr * Z95) + 0.5 / N) * 100;
	}

	// Generate a link from current settings and input
	function generateLink(autostart) {

		var d = 0;
		var deck = [];

		var url_base = document.URL;
		var index_of_query = url_base.indexOf('?');
		if (index_of_query > 0) {
			url_base = url_base.substring(0, index_of_query);
		}

		var parameters = [];
		_addValueParam(parameters, "deck1");
		_addValueParam(parameters, "deck2");

		_addValueParam(parameters, "location");
		_addValueParam(parameters, "campaign");
		_addValueParam(parameters, "mission");
		_addValueParam(parameters, "mission_level");
		_addValueParam(parameters, "raid");
		_addValueParam(parameters, "raid_level");
		var mapBges = $('select[name=map-battleground]').toArray().reduce(function (acc, val) { return acc + val.value; }, "");
		if (mapBges.length) {
			parameters.push('mapBges=' + mapBges);
		}

		_addBoolParam(parameters, "surge");

		if (_addBoolParam(parameters, "siege")) {
			_addValueParam(parameters, "tower_level");
			_addValueParam(parameters, "tower_type");
		}

		_addBoolParam(parameters, "auto_mode");
		_addBoolParam(parameters, "tournament");
		_addBoolParam(parameters, "ordered");
		_addBoolParam(parameters, "exactorder");
		_addBoolParam(parameters, "ordered2");
		_addBoolParam(parameters, "exactorder2");

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


		_addValueParam(parameters, "sims");

		_addBoolParam(parameters, "debug");
		_addBoolParam(parameters, "mass_debug");
		_addBoolParam(parameters, "loss_debug");
		_addBoolParam(parameters, "win_debug");
		_addBoolParam(parameters, "play_debug");

		if (autostart) {
			parameters.push('autostart');
		}

		if (parameters.length > 0) {
			return url_base + '?' + parameters.join('&');
		} else {
			return url_base;
		}
	}

	function _addValueParam(params, paramName, fieldName) {
		var value = $("#" + (fieldName || paramName)).val();
		if (value) {
			params.push(paramName + "=" + value);
			return true;
		} else {
			return false;
		}
	}

	function _addBoolParam(params, paramName) {
		var checked = $("#" + paramName).is(":checked");
		if (checked) {
			params.push(paramName);
			return true;
		} else {
			return false;
		}
	}

	var deckBuilders = {};
	function loadDeckBuilder(player) {
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
			deckBuilders[player] = _openDeckBuilder(name, hash, null, deckHashField);
		}
		else {
			currentDeckBuilder.focus();
		}
	}

	function _openDeckBuilder(name, hash, inventory, deckHashField) {
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

	function _doneLoading() {
		$("body").removeClass("loading");
		checkTutorial();
	}

	function updateGameData(callback) {
		var done = _doneLoading;
		if (callback) {
			done = function () {
				_doneLoading();
				callback();
			};
		}
		dataUpdater.updateData(done, true);
	}

	function loadSavedDeck(hashField) {
		$('label[for="loadDeckName"]').html('<strong>Deck:</strong>');
		loadDeckDialog.dialog("open");
		loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });

		loadDeckDialog.hashField = hashField;
	}

	function _onDeckLoaded(newHash, hashField) {
		$(hashField).val(newHash).change();
	}

	var dark = false;
	function toggleTheme() {
		if (dark) {
			$("#theme").attr("href", "dist/light.min.css");
			$("#toggleTheme").val("Dark Theme");
		} else {
			$("#theme").attr("href", "dist/dark.min.css");
			$("#toggleTheme").val("Light Theme");
		}
		dark = !dark;
	}

	$(function () {
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
					var newHash = storageAPI.deleteDeck(name);
				},
				Load: function () {
					var name = $("#loadDeckName").val();
					var newHash = storageAPI.loadDeck(name);
					_onDeckLoaded(newHash, loadDeckDialog.hashField);
					loadDeckDialog.dialog("close");
				},
				Cancel: function () {
					loadDeckDialog.dialog("close");
				}
			}
		});
	});

	// Temporary fix for HTML access
	window.ui = api;

	return api;
});