window.onerror = function (message, url, linenumber) {
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
    if (gettournament) err_msg += "Tournament Mode: Yes\n";
    if (surge) err_msg += "Surge: Yes\n";
    if (getdeck2) err_msg += "Enemy deck hash: " + getdeck2 + "\n";
    if (getcardlist2) err_msg += "Enemy Card list: " + getcardlist2 + "\n";
    if (getordered2) err_msg += "Enemy Ordered: Yes\n";
    if (getexactorder2) err_msg += "Enemy Exact-order: Yes\n";
    if (getmission) err_msg += "Mission ID: " + getmission + "\n";
    if (getbattleground) err_msg += "Battleground ID: " + getbattleground + "\n";
    if (games) err_msg += "Sims run so far: " + games + "\n";

    outp("<br><br><i>Error Message:</i><br><textarea cols=50 rows=6 onclick=\"this.select()\"><blockquote>" + err_msg + "</blockquote></textarea>" + echo);

    // Stop the recursion if any
    if (current_timeout) clearTimeout(current_timeout);
}

var style;

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
              ? args[number]
              : match
            ;
        });
    };
}

var u_black = false;
function toggle_u() {
    if (typeof style == 'undefined') {
        var append = true;
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

// Known issues:
// - sometimes assault card's array key doesn't match card's .key value (.key value appears more accurate)

// When Page Loads...
// Set up user interface
function onpageload() {

    // Check if missions are found
    if (missions && missions.root && missions.root.mission) {
        // Mission drop down
        var select = document.getElementById('mission');
        for (var key in missions.root.mission) {
            var mission = missions.root.mission[key];
            var option = document.createElement('option');
            option.appendChild(document.createTextNode(mission.name));
            option.value = mission.id;
            select.appendChild(option);
        }
    }

    // Check if battlegrounds are found
    if (quests && quests.root && quests.root.battleground) {
        // Battleground drop down
        var select = document.getElementById('battleground');
        for (var key in quests.root.battleground) {
            var battleground = quests.root.battleground[key];
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "battleground";
            checkbox.id = "battleground_" + battleground.id;
            checkbox.value = battleground.id;
            select.appendChild(checkbox);
            select.appendChild(document.createTextNode(battleground.name));
            select.appendChild(document.createElement('br'));
        }
    }
    var select = document.getElementById('tower_type');
    var towerTypes = ["Castle Tower", "Cannon Tower"];
    for (var i = 0; i < towerTypes.length; i++) {
        var towerType = towerTypes[i];
        var option = document.createElement('option');
        option.appendChild(document.createTextNode(towerType));
        option.value = i;
        select.appendChild(option);
    }

    var c = document.getElementById('ui');
    if (!c) return 0;
    //c.innerHTML = htmltext;

    if (_GET('deck1')) {
        var d = document.getElementById('deck');
        d.value = _GET('deck1');
    }

    if (_GET('deck2')) {
        var d = document.getElementById('deck2');
        d.value = _GET('deck2');
    }

    if (_GET('list1')) {
        var d = document.getElementById('cardlist');
        d.value = _GET('list1');
    }

    if (_GET('list2')) {
        var d = document.getElementById('cardlist2');
        d.value = _GET('list2');
    }

    if (_GET('surge')) {
        var d = document.getElementById('surge');
        d.checked = true;
    }

    if (_GET('siege')) {
        var d = document.getElementById('siege');
        d.checked = true;
    }

    if (_GET('tower_level')) {
        var d = document.getElementById('tower_level');
        var tower_level = _GET('tower_level');
        tower_level = Math.min(Math.max(tower_level, 0), 15);
        d.value = tower_level;
    }

    if (_GET('tower_type')) {
        var d = document.getElementById('tower_type');
        var tower_type = _GET('tower_type');
        tower_type = Math.min(Math.max(tower_type, 0), 15);
        d.value = tower_type;
    }

    if (_GET('tournament')) {
        var d = document.getElementById('tournament');
        d.checked = true;
    }

    if (_GET('ordered')) {
        var d = document.getElementById('ordered');
        if (d) {
            d.checked = true;
        }
    }

    if (_GET('exactorder')) {
        var d = document.getElementById('exactorder');
        if (d) {
            d.checked = true;
        }
    }

    if (_GET('ordered2')) {
        var d = document.getElementById('ordered2');
        d.checked = true;
    }

    if (_GET('exactorder2')) {
        var d = document.getElementById('exactorder2');
        d.checked = true;
    }

    if (_GET('mission')) {
        var d = document.getElementById('mission');
        d.value = _GET('mission');
    }

    if (_GET('raid')) {
        var d = document.getElementById('raid');
        d.value = _GET('raid');
    }

    if (_GET('battleground')) {
        var bgIndexes = _GET('battleground');
        for (var i = 0; i < bgIndexes.length; i++) {
            var id = "battleground_" + bgIndexes[i];
            var d = document.getElementById(id);
            d.checked = true;
        }
    } else {
        // Load current battlegrounds
        var d = document.getElementById("battleground_0").checked = true;
        var d = document.getElementById("battleground_2").checked = true;
    }

    if (_GET('sims')) {
        var d = document.getElementById('sims');
        if (d) {
            d.value = _GET('sims');
        }
    }

    if (_GET('debug')) {
        var d = document.getElementById('debug');
        d.checked = true;
    }
    
    if (_GET('auto_mode')) {
        var d = document.getElementById('auto_mode');
        if (d) {
            d.checked = true;
        }
    }

    if (_GET('mass_debug')) {
        var d = document.getElementById('mass_debug');
        if (d) {
            d.checked = true;
        }
    }

    if (_GET('loss_debug')) {
        var d = document.getElementById('loss_debug');
        if (d) {
            d.checked = true;
        }
    }

    if (_GET('win_debug')) {
        var d = document.getElementById('win_debug');
        if (d) {
            d.checked = true;
        }
    }

    if (_GET('user_controlled')) {
        var d = document.getElementById('user_controlled');
        if (d) {
            d.checked = true;
        }
    }

    document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

    var version_label = document.getElementById('version_label');
    if (battle_sim) { }
    else if (use_workers) {
        document.getElementById("user_controlled").style.visibility = "hidden";
        document.getElementById("unavailable").style.visibility = "visible";

        version_label.innerHTML += " " + text_version;
        // Initialize workers
        var param_maxworkers = _GET('maxworkers');
        if (param_maxworkers) {
            max_workers = parseInt(param_maxworkers);
        }

        if (max_workers == 1) version_label.innerHTML += " - Single core";
        else if (max_workers == 2) version_label.innerHTML += " - Dual-core";
        else if (max_workers == 4) version_label.innerHTML += " - Quad-core";
        else if (max_workers == 6) version_label.innerHTML += " - Hexa-core";
        else if (max_workers == 8) version_label.innerHTML += " - Octo-core";
        else version_label.innerHTML += " - Multi-core";

        for (var i = 0; i < max_workers; i++) {
            workers[i] = createWorker(i);
        }
    } else {
        version_label.innerHTML += " " + text_version + " - Single-Threaded";
        if (!one_worker) {
            var version_label2 = document.getElementById('version_label2');
            version_label2.innerHTML += "(Multi-core not supported by your browser)";
        }
    }

    if (_GET('autostart')) {
        startsim(1);
    }
}

// Modify HTML to output simulation results
function outp(text) {
    var c = document.getElementById('content');
    if (!c) return 0;
    c.innerHTML = text;
}

// Return table of simulation results
function gettable() {

    if (debug || sims_left == 0) {
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

    // Win/Loss ratio
    var table = '';
    table += '<table cellspacing=0 cellpadding=5 style="border: 1px solid #000000;">';
    table += '<tr>';
    table += '<td>';
    table += 'Wins';
    table += '</td>';
    table += '<td>';
    table += wins;
    table += '</td>';
    table += '<td>';
    var temp = wins / games * 100;
    temp = temp.toFixed(1);
    var winrate = temp;
    table += temp;
    table += '%</td>';
    table += '</tr>';
    table += '<tr style="background-color: #eee;">';
    table += '<td style="background-color: #eee;">';
    table += 'Losses';
    table += '</td>';
    table += '<td style="background-color: #eee;">';
    table += losses;
    table += '</td>';
    table += '<td style="background-color: #eee;">';
    temp = losses / games * 100;
    temp = temp.toFixed(1);
    table += temp;
    table += '%</td>';
    table += '</tr>';
    table += '<tr>';
    table += '<td>';
    table += 'Draws';
    table += '</td>';
    table += '<td>';
    table += draws;
    table += '</td>';
    table += '<td>';
    temp = draws / games * 100;
    temp = temp.toFixed(1);
    table += temp;
    table += '%</td>';
    table += '</tr>';
    table += '<tr style="background-color: #000; color: #fff;">';
    table += '<td style="background-color: #000; color: #fff;">';
    table += 'Battles';
    table += '</td>';
    table += '<td style="background-color: #000; color: #fff;">';
    table += games;
    table += '</td>';
    table += '<td style="background-color: #000; color: #fff;">';
    table += '100.0';
    table += '%</td>';
    table += '</tr>';
    table += '</table>';

    var table3 = '<table cellspacing=0 cellpadding=5 style="border: 1px solid #000000;">';

    // Average length of battle
    table3 += '<tr>';
    table3 += '<td>';
    table3 += 'Avg. Battle Length';
    table3 += '</td>';
    table3 += '<td>';

    // Calculate Average length of battle
    var avg_length = (total_turns / games).toFixed(3);
    table3 += avg_length;

    table3 += '</td>';
    table3 += '</tr>';

    var full_table = '<table cellspacing=0 cellpadding=0 border=0><tr><td>' + table + '</td><td>&nbsp;</td><td>' + table3 + '</td></tr></table>';

    // Final output
    if (sims_left == 0) {
        // Add generated links to final output
        full_table = full_table + links;

        // Append results to history

        var current_deck = '';
        var deck = [];
        var getdeck = document.getElementById('deck').value;
        var getcardlist = document.getElementById('cardlist').value;

        // Load player deck
        if (getdeck) {
            deck.player = hash_decode(getdeck);
        } else if (getcardlist) {
            deck.player = load_deck_from_cardlist(getcardlist);
        }
        if (deck.player) {
            current_deck = hash_encode(deck.player);
        }

        history += winrate + '% &nbsp; &nbsp; ' + current_deck + '<br>';
    }

    return full_table;
}

// Time elapsed
function time_elapsed() {
    var t = new Date().getTime();
    if (time_stop) t = time_stop;
    var v = (t - time_start) / 1000;
    v = v.toFixed(3);
    return v;
}

// Time elapsed for one batch
function batch_time_elapsed(time_started) {
    var t = new Date().getTime();
    if (!time_started) time_started = time_start_batch;
    var v = (t - time_started) / 1000;
    v = v.toFixed(3);
    return v;
}

// Generate a link from current settings and input
function generate_link(autostart, autolink) {

    var d = 0;
    var deck = [];

    var url_base = document.URL
    var index_of_query = url_base.indexOf('?');
    if (index_of_query > 0) {
        url_base = url_base.substring(0, index_of_query)
    }

    var getdeck = document.getElementById('deck').value;
    var getcardlist = document.getElementById('cardlist').value;
    var getdeck2 = document.getElementById('deck2').value;
    var getcardlist2 = document.getElementById('cardlist2').value;
    var getmission = document.getElementById('mission').value;
    //var getbattleground = document.getElementById('battleground').value;

    // Load player deck
    if (getdeck) {
        deck.player = hash_decode(getdeck);
    } else if (getcardlist) {
        deck.player = load_deck_from_cardlist(getcardlist);
    }

    // Load enemy deck
    if (getdeck2) {
        deck.cpu = hash_decode(getdeck2);
    } else if (getcardlist2) {
        deck.cpu = load_deck_from_cardlist(getcardlist2);
    } else if (getmission) {
        deck.cpu = 0;
    }

    var parameters = [];
    if (deck.player) {
        d = hash_encode(deck.player);
        if (d) {
            parameters.push('deck1=' + d);
        }
    }

    if (deck.cpu) {
        d = hash_encode(deck.cpu);
        if (d) {
            parameters.push('deck2=' + d);
        }
    }

    d = document.getElementById('surge');
    if (d.checked) {
        parameters.push('surge=1');
    }

    d = document.getElementById('siege');
    if (d.checked) {
        parameters.push('siege=1');
        d = document.getElementById('tower_level');
        parameters.push('tower_level=' + d.value);
        d = document.getElementById('tower_type');
        parameters.push('tower_type=' + d.value);
    }

    /*
	d = document.getElementById('tournament');
	if (d.checked) {
	    parameters.push('tournament=1&');
	}
    */
    d = document.getElementById('ordered');
    if (d && d.checked) {
        parameters.push('ordered=1');
    }

    d = document.getElementById('exactorder');
    if (d && d.checked) {
        parameters.push('exactorder=1');
    }

    d = document.getElementById('ordered2');
    if (d.checked) {
        parameters.push('ordered2=1');
    }

    d = document.getElementById('exactorder2');
    if (d.checked) {
        parameters.push('exactorder2=1');
    }

    d = document.getElementById('mission');
    if (d.value) {
        parameters.push('mission=' + d.value);
    }

    var battlegrounds = '';
    for (var i = 0; ; i++) {
        d = document.getElementById('battleground_' + i);
        if (d) {
            if (d.checked) battlegrounds += d.value;
        } else {
            if (battlegrounds) {
                parameters.push('battleground=' + battlegrounds);
            }
            break;
        }
    }
    d = document.getElementById('sims');
    if (d && d.value) {
        parameters.push('sims=' + d.value);
    }

    d = document.getElementById('user_controlled');
    if (d && d.checked) {
        parameters.push('user_controlled=1');
    }

    d = document.getElementById('debug');
    if (d.checked) {
        parameters.push('debug=1');
    }

    d = document.getElementById('auto_mode');
    if (d && d.checked) {
        parameters.push('auto_mode=1');
    }

    d = document.getElementById('mass_debug');
    if (d && d.checked) {
        parameters.push('mass_debug=1');
    }

    d = document.getElementById('loss_debug');
    if (d && d.checked) {
        parameters.push('loss_debug=1');
    }

    d = document.getElementById('win_debug');
    if (d && d.checked) {
        parameters.push('win_debug=1');
    }

    if (autostart) {
        parameters.push('autostart=1');
    }

    if (autolink) {
        parameters.push('autolink=1');
    }

    if (use_workers && max_workers) {
        parameters.push('maxworkers=' + max_workers);
    }
    if (parameters.length > 0) {
        return url_base + '?' + parameters.join('&');
    } else {
        return url_base;
    }
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
    history = '';
    display_history();
}

function display_history() {
    var h = history;
    if (h == '') {
        h = 'No history available.';
    }
    outp('' +
	'<br>' +
	'<hr>' +
	h +
	'<hr>' +
	'<br>' +
	'<br>' +
	'<input type="button" value="Clear History" onclick="clear_history();" style="text-align: center; font-weight: normal;">' +
	'<br>' +
	'<br>' +
	'');
}

function scroll_to_end() {
    // Scroll to bottom of page
    window.scrollTo(0, document.body.scrollHeight);
}

function toggleRadio(radio) {
    var value = eval(radio.id);
    if (radio.checked == value) {
        radio.checked = false;
        eval(radio.id + "=false;");
    } else {
        switch (radio.id) {
            case "mass_debug":
                mass_debug = true;
                loss_debug = false;
                win_debug = false;
                break;
            case "loss_debug":
                mass_debug = false;
                loss_debug = true;
                win_debug = false;
                break;
            case "win_debug":
                mass_debug = false;
                loss_debug = false;;
                win_debug = true;
                break;
        }
    }
}

// Initialize global variables
var history = '';
var turn = false;
var max_turns = 50;
var debug = false;
var mass_debug = false;
var loss_debug = false;
var win_debug = false;
var found_loss = false;
var gettournament = false;
var getdeck = '';
var getdeck2 = '';
var getcardlist = '';
var getcardlist2 = '';
var getordered = false;
var getordered2 = false;
var getexactorder = false;
var getexactorder2 = false;
var getmission = false;
var getbattleground = 0;
var getsiege = 0;
var tower_level = 0;
var tower_type = 0;
var echo = '';
var wins = 0;
var losses = 0;
var draws = 0;
var games = 0;
var num_sims = 0;
var last_games = [];
var last_start_times = [];
var sims_left = false;
var sims_to_process = 0;
var current_timeout = false;
var time_start = false;
var time_stop = 0;
var time_start_batch = 0;
var time_end = 0;	// TODO: Use this
var surge = false;
var battleground = [];
var total_turns = 0;
var cache_player_deck = false;
var cache_cpu_deck = false;
var choice = undefined;
var auto_mode = false;

// Global arrays
var factions = {
    names: [
        undefined,
        'Aether',
        'Chaos',
        'Wyld',
        'Frog',
        'Elemental',
        'Angel',
        'Undead',
        'Void',
        'Dragon',
    ],
    IDs: {
        Aether: 1,
        Chaos: 2,
        Wyld: 3,
        Frog: 4,
        Elemental: 5,
        Angel: 6,
        Undead: 7,
        Void: 8,
        Dragon: 9
    }
};

