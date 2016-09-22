"use strict";

var deckPopupDialog;

window.onerror = function (message, url, linenumber) {
    // if (linenumber == 0) {
    //     var msg = "<br><br><i>Error Message:</i><br><br>" +
	// 		"<i>It appears you're having trouble loading SimSpellstone. " +
	// 		"Thanks.</i><br><br>";
    //     if (outp) {
    //         outp(msg);
    //     } else {
    //         document.write(msg);
    //     }
    //     return 1;
    // }
    var err_msg = "JavaScript error:\n " + message + "\n on line " + linenumber + "\n for " + url;
    var short_msg = err_msg;

    err_msg += "\n";
    err_msg += "Browser CodeName: " + navigator.appCodeName + "\n";
    err_msg += "Browser Name: " + navigator.appName + "\n";
    err_msg += "Browser Version: " + navigator.appVersion + "\n";
    err_msg += "Cookies Enabled: " + navigator.cookieEnabled + "\n";
    err_msg += "Platform: " + navigator.platform + "\n";
    err_msg += "User-agent header: " + navigator.userAgent + "\n";
    err_msg += "SimSpellstone version: " + text_version + "\n";

    if (getdeck) err_msg += "Deck hash: " + getdeck + "\n";
    if (getcardlist) err_msg += "Card list: " + getcardlist + "\n";
    if (getordered) err_msg += "Ordered: Yes\n";
    if (getexactorder) err_msg += "Exact-order: Yes\n";
    if (surge) err_msg += "Surge: Yes\n";
    if (getdeck2) err_msg += "Enemy deck hash: " + getdeck2 + "\n";
    if (getcardlist2) err_msg += "Enemy Card list: " + getcardlist2 + "\n";
    if (getordered2) err_msg += "Enemy Ordered: Yes\n";
    if (getexactorder2) err_msg += "Enemy Exact-order: Yes\n";
    if (getmission) err_msg += "Mission ID: " + getmission + "\n";
    if (getraid) err_msg += "Raid ID: " + getraid + "\n";
    if (getbattleground) err_msg += "Battleground ID: " + getbattleground + "\n";
    if (games) err_msg += "Sims run so far: " + games + "\n";

    outp("<br><br><i>Error Message:</i><br><textarea cols=50 rows=6 onclick=\"this.select()\"><blockquote>" + err_msg + "</blockquote></textarea>" + echo);

    // Stop the recursion if any
    if (current_timeout) clearTimeout(current_timeout);
}

// When Page Loads...
$(function () {

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

    var button = document.getElementById("generate_link");
    if (button) button.onclick = display_generated_link;

    var button = document.getElementById("btn_simulate");
    if (button) button.onclick = SIM_CONTROLLER.startsim;

    var button = document.getElementById("display_history");
    if (button) button.onclick = display_history;

    $('#deck1').val(_GET('deck1')).change();
    $('#deck2').val(_GET('deck2')).change();

    $('#surge').attr("checked", _DEFINED("surge"));
    $('#siege').attr("checked", _DEFINED("siege"));
    var tower_level = Math.min(Math.max(_GET('tower_level') || 18, 0), 18);
    $('#tower_level').val(tower_level);

    var tower_type = (_GET('tower_type') || 0);
    if (tower_type < 3) {
        // Handle legacy tower_type
        var options = $("#tower_type").children();
        tower_type = options[tower_type].value;
    }
    $("#tower_type").val(tower_type);

    $('#auto_mode').attr("checked", _DEFINED("auto_mode"));
    $('#ordered').attr("checked", _DEFINED("ordered"));
    $('#exactorder').attr("checked", _DEFINED("exactorder"));

    $('#ordered2').attr("checked", _DEFINED("ordered2"));
    $('#exactorder2').attr("checked", _DEFINED("exactorder2"));
    if (_DEFINED("randomAI")) {
        smartAI = false;
    }

    var campaignID = _GET('campaign');
    var missionID = _GET('mission');
    var raidID = _GET('raid');
    if (campaignID) $('#campaign').val(campaignID).change();
    if (missionID) $('#mission').val(missionID).change();
    if (raidID) $('#raid').val(raidID).change();

    var bges = _GET('bges');
    if (bges) {
        // Each BGE is a 2-character ID in Base64
        for (var i = 0; i < bges.length; i += 2) {
            var bge = base64_to_decimal(bges.substring(i, i + 2));
            $("#battleground_" + bge).prop('checked', true);
        }
    } else {
        // Load current battlegrounds
        var bgCheckBoxes = document.getElementsByName("battleground");
        for (var i = 0; i < current_bges.length; i++) {

            bgCheckBoxes[current_bges[i]].checked = true;
        }
    }

    $('#sims').val(_GET('sims') || 10000);

    $('#debug').attr("checked", _DEFINED("debug"));
    $('#mass_debug').attr("checked", _DEFINED("mass_debug"));
    $('#loss_debug').attr("checked", _DEFINED("loss_debug"));
    $('#win_debug').attr("checked", _DEFINED("win_debug"));
    
    document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

    if (_DEFINED('autostart')) {
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
});

var style;
var u_black = false;
function toggle_u() {
    var append = false;
    if (typeof style == 'undefined') {
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

function getSelectedBattlegrounds() {
    var getbattleground = [];
    var bgCheckBoxes = document.getElementsByName("battleground");
    for (var i = 0; i < bgCheckBoxes.length; i++) {
        var checkbox = bgCheckBoxes[i];
        if (checkbox && checkbox.checked) {
            getbattleground.push(checkbox.value);
        }
    }
    getbattleground = getbattleground.join();
    return getbattleground;
}

// Modify HTML to output simulation results
function outp(text) {
    $("#content").html(text);
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
    var avg_length = (total_turns / games).toFixed(3);
    $("#avgLength").html(avg_length);

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
        var deck1List = $('#cardlist').val();
        if(deck1List) deck1List = deck1List.value;

        // Load player deck
        if (deck1Hash) {
            deck.player = hash_decode(deck1Hash);
        } else if (deck1List) {
            deck.player = load_deck_from_cardlist(deck1List);
        }
        if (deck.player) {
            current_deck = hash_encode(deck.player);
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
    return ((stdErr * Z95)+0.5/N)*100;
}

// Generate a link from current settings and input
function generate_link(autostart) {

    var d = 0;
    var deck = [];

    var url_base = document.URL;
    var index_of_query = url_base.indexOf('?');
    if (index_of_query > 0) {
        url_base = url_base.substring(0, index_of_query)
    }

    var parameters = [];
    addValueParam(parameters, "deck1");
    addValueParam(parameters, "deck2");

    addValueParam(parameters, "campaign");
    addValueParam(parameters, "mission");
    addValueParam(parameters, "raid");

    addBoolParam(parameters, "surge");

    if (addBoolParam(parameters, "siege")) {
        addValueParam(parameters, "tower_level");
        addValueParam(parameters, "tower_type");
    }

    addBoolParam(parameters, "auto_mode");
    addBoolParam(parameters, "ordered");
    addBoolParam(parameters, "exactorder");
    addBoolParam(parameters, "exactorder");
    addBoolParam(parameters, "exactorder2");

    var bges = '';
    var bgCheckBoxes = document.getElementsByName("battleground");
    for (var i = 0; i < bgCheckBoxes.length; i++) {
        d = bgCheckBoxes[i];
        if (d.checked) bges += decimal_to_base64(d.value, 2);
    }
    parameters.push('bges=' + bges);
    

    addValueParam(parameters, "sims");

    addBoolParam(parameters, "debug");
    addBoolParam(parameters, "mass_debug");
    addBoolParam(parameters, "loss_debug");
    addBoolParam(parameters, "win_debug");

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

function load_deck_builder_for_field(fieldID) {
    var field = $("#"+fieldID);
    var deck = {
        commander: elariaCaptain,
        deck: [],
    };
    var hash = field.val();
    if (!hash) {
        hash = hash_encode({
            commander: elariaCaptain,
            deck: [],
        });
    }
    open_deck_builder("Card Hash", hash, null, field);
}

function load_deck_builder(player) {
    if (player == 'player') {
        var getdeck = $('#deck1').val();
        var getmission;
        var getraid;
        var raidlevel;
    } else {
        var getdeck = $('#deck2').val();
        var getmission = $('#mission').val();
        var getraid = $('#raid').val();
        var raidlevel = $('#raid_level').val();
    }

    // Load player deck
    var deck = {
        commander: elariaCaptain,
        deck: [],
    };
    if (getdeck) {
        deck = hash_decode(getdeck);
    } else if (getmission) {
        deck = load_deck_mission(getmission);
    } else if (getraid) {
        deck = load_deck_raid(getraid, raidlevel);
    }
    var hash;
    if (deck) {
        hash = hash_encode(deck);
    }

    var name = (player == 'player' ? 'Player Deck' : 'Enemy Deck');
    var deckHashField = (player ? $("#" + (player == 'player' ? 'deck1' : 'deck2')) : null);
    open_deck_builder(name, hash, null, deckHashField);
}

function open_mission_deck_builder() {
    var mission = TITANS[$("#mission").val()];
    if (!mission) {
        var raidID = $("#raid").val();
        if (raidID) {
            var raidlevel = $("#raid_level").val();
            mission = {
                name: RAIDS[raidID].name,
                hash: hash_encode(load_deck_raid(raidID, raidlevel))
            }
        }
    }
    if (mission) {
        var missionDeck = hash_decode(mission.hash);

        $("#deck_label").text(mission.name);
        $("#deck_display").children().remove().end().append(CARD_GUI.makeDeckHTML(missionDeck));
        $("#deck_hash").val(mission.hash);
        $("#hash_container").show();

        deckPopupDialog.dialog("open");
        deckPopupDialog.dialog("option", "position", { my: "center", at: "center", of: window });
    } else {
        $("#deck_label").text("No mission or raid selected!");
        $("#deck_display").children().remove();
        $("#hash_container").hide();

        deckPopupDialog.dialog("open");
        deckPopupDialog.dialog("option", "position", { my: "center", at: "center", of: window });
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

    var windowFeatures = 'location=0,menubar=0,resizable=0,scrollbars=0,status=0,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
    var win = window.open(url, '', windowFeatures);
    win.moveTo(left, top);
    // Push values to window once it has loaded
    $(win).load((function (name, deckHashField) {
        return function () {
            // Tie deck-builder back to the hash field in the simulator.
            if (deckHashField) win.updateSimulator = function (hash) { deckHashField.val(hash).change() };
        }
    })(name, deckHashField));
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

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

// Initialize global variables
var battle_history = '';
var max_turns = 100;
var debug = false;
var mass_debug = false;
var loss_debug = false;
var win_debug = false;
var found_loss = false;
var getdeck = '';
var getdeck2 = '';
var getcardlist = '';
var getcardlist2 = '';
var getordered = false;
var getordered2 = false;
var getexactorder = false;
var getexactorder2 = false;
var getmission = false;
var getraid = false;
var raidlevel = 0;
var getbattleground = 0;
var getsiege = 0;
var tower_level = 0;
var tower_type = 0;
var smartAI = true;
var echo = '';
var wins = 0;
var losses = 0;
var draws = 0;
var games = 0;
var num_sims = 0;
var last_games = [];
var sims_left = 0;
var current_timeout;
var time_start = 0;
var time_stop = 0;
var time_start_batch = 0;
var time_end = 0;	// TODO: Use this
var surge = false;
var battleground = [];
var total_turns = 0;
var cache_player_deck;
var cache_cpu_deck;
var cache_player_deck_cards;
var cache_cpu_deck_cards;
var choice = undefined;
var auto_mode = false;
var suppressOutput = false;
var orders = {};
var cardStats = {};