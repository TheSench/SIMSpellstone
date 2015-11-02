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
//	alert(err_msg);

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

var u_black = false;
function toggle_u() {
	if(typeof style == 'undefined') {
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
	if(style.styleSheet) {
		style.styleSheet.cssText = rules.nodeValue;
	} else {
		style.appendChild(rules);
	}
	if(append === true) head.appendChild(style);
}

// Known issues:
// - sometimes assault card's array key doesn't match card's ['key'] value (['key'] value appears more accurate)

// When Page Loads...
// Set up user interface
function onpageload() {
    var startingPlayerDeck = "Urs(5), Hotiron(4) x2, Smelted Skeleton(4) x2, Swiftfoot(4), Outrunner(4)x2, Matriarch(5), Executioner(4), Purging(5), Mighty Clawkin(4), Chaos Storm(5) x2, Lilypad(4), Lightsworn(5)";
    var startingEnemyDeck = "Groc(6), Fire D(4), Executioner(4), Heroic(5), Chaos T(5), Tsunamari(5), Spearhunter(5), Bolt Ele(4), Poison(3), Lightsworn(5), Discordant(5), Blood(5), Blood(6), Glass T(4), Titan of S(5), Storm D(5)";
    var zDeck = "Groc(6), Heroic(5)x2; Fowl Swarm(5), Wind Spirit(5), Swell(5)x2, Garg(5)x2, Rock T(5), Sapling(5), Tsunamari(5), Honeycomb(5), Avenging(6), Blazekin(6), Nixfire(4)";
    var drypDeck = "Samael(6), Rhino Beast(6), Life Dragon(6), Rust Goliath(6)x2, Blazekin Dragon(6), Retribution Angel(6), Radiance(6), Royal Guardian(6), Darkness Elemental(5), Mentor(5), Mega(5), titan of s(5), Gravity Bender(5), Glass Titan(5)";
	var htmltext = '';
	htmltext +=
	'<form><div><b>Deck Hash:</b></div><input id="deck" type="text" value="" size="50" maxlength="200"><br>' +
	'<div>&nbsp;</div><font color="#666"><strong>Hash example:</strong> QVD1+jJeKPK6gKgQ</font><br>'+
	'<br>' +
	'<div><b>Card List:</b></div><input id="cardlist" type="text" value="' + startingPlayerDeck + '" size="100" maxlength="500"><br>' +
	'<div>&nbsp;</div><font color="#666"><strong>Card list example:</strong> Drac: AE(3); Razor*, 2xEMP, (2)Raider Hawkeye[507]; [2101]x2</font><br>'+
	'<br>' +
	'<div>Ordered Deck:</div><input type="checkbox" id="ordered"> ' +
	'<div><u>Exact Order (ignore 3-card hand rule):</u></div><input type="checkbox" id="exactorder"><br>' +
	'<div>Surge Mode:</div><input type="checkbox" id="surge"><br>' +
	'<div>Tournament Mode:</div><input type="checkbox" id="tournament"><br>' +
	'<br>' +
	'<hr>' +
	'<br>' +
	'<div><i>Enemy Deck Hash:</i></div><input type="text" id="deck2" value="" size="50" maxlength="200"><br>' +
	'<div>&nbsp;</div><font color="#666"><strong>Hash example:</strong> QVD1+jJeKPK6gKgQ</font><br>'+
	'<br>' +
	'<div><i>Enemy Card List:</i></div><input id="cardlist2" type="text" value="' + zDeck + '" size="100" maxlength="500"><br>' +
	'<div>&nbsp;</div><font color="#666"><strong>Card list example:</strong> Drac: AE(3); Razor*, 2xEMP, (2)Raider Hawkeye[507]; [2101]x2</font><br>'+
	'<br>' +
	'<div>Ordered Enemy Deck:</div><input type="checkbox" id="ordered2"> ' +
	'<div><u>Exact Order (ignore 3-card hand rule):</u></div><input type="checkbox" id="exactorder2"><br>';

	// Check if missions are found
	if (missions && missions['root'] && missions['root']['mission']) {

		htmltext +=
		'<br>' +
		'<div><i>Mission:</i></div><select id="mission">'+
		'<option value=""></option>';

		// Mission drop down
		var missions_text = '';
		var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		for (var a = 0; a < 26; a++) {
			for (var key in missions['root']['mission']) {
				var current_mission = missions['root']['mission'][key];
				var current_missions_text = '';
				if (current_mission['name'].substr(0, 7) == 'Mission') continue;
				if (current_mission['name'].substr(0, 1) != alpha.substr(25-a,1)) continue;
				current_missions_text += '<option value="';
				current_missions_text += current_mission['id'];
				current_missions_text += '">';
				current_missions_text += current_mission['name'];
				current_missions_text += '</option>';
				missions_text = current_missions_text + missions_text;
			}
		}
		for (var key in missions['root']['mission']) {
			var current_mission = missions['root']['mission'][key];
			var current_missions_text = '';
			if (current_mission['name'].substr(0, 7) != 'Mission') continue;
			current_missions_text += '<option value="';
			current_missions_text += current_mission['id'];
			current_missions_text += '">';
			current_missions_text += current_mission['name'];
			current_missions_text += '</option>';
			missions_text = current_missions_text + missions_text;
		}

		htmltext += missions_text;
		htmltext +=
		'</select><br>';
	}

	// Check if battlegrounds are found
	if (quests && quests['root'] && quests['root']['battleground']) {
		htmltext +=
		'<br>' +
		'<div><i>Battleground:</i></div><select id="battleground">'+
		'<option value=""></option>';

		// Battleground drop down
		var battleground_text = '';
		for (var key in quests['root']['battleground']) {
			var current_battleground = quests['root']['battleground'][key];
			var current_battleground_text = '';
			var name = current_battleground['name'];
			current_battleground_text += '<option value="';
			current_battleground_text += current_battleground['id'];
			current_battleground_text += '">';
			current_battleground_text += name;
			current_battleground_text += '</option>';
			battleground_text += current_battleground_text;
		}

		htmltext += battleground_text;
		htmltext +=
		'</select><br>';
	}

	htmltext +=
	'<br>' +
	'<hr>' +
	'<br>' +
	'<div>Number of Simulations:</div><input type="text" id="sims" value="100" size="10"><br>' +
	'<br>' +
	'<div>Debug Mode:</div><input type="checkbox" id="debug"><br>' +
	'<div>Mass Debug Mode (causes slowdown):</div><input type="checkbox" id="mass_debug"><br>' +
	'<div>Debug Loss Mode (output first loss):</div><input type="checkbox" id="loss_debug"><br>' +
	'<br>' +
	'<div>&nbsp;</div><input id="btn_simulate" type="button" value="Simulate" onclick="return startsim();" style="text-align: center; font-weight: bold;"> <input type="button" value="Generate Link" onclick="return display_generated_link();" style="text-align: center; font-weight: normal;"> <input type="button" value="History" onclick="return display_history();" style="text-align: center; font-weight: normal;"></form>';

	var c = document.getElementById('ui');
	if (!c) return 0;
	c.innerHTML = htmltext;

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

	if (_GET('tournament')) {
		var d = document.getElementById('tournament');
		d.checked = true;
	}

	if (_GET('ordered')) {
		var d = document.getElementById('ordered');
		d.checked = true;
	}

	if (_GET('exactorder')) {
		var d = document.getElementById('exactorder');
		d.checked = true;
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

	if (_GET('quest')) {
		var d = document.getElementById('quest');
		d.value = _GET('quest');
	}

	if (_GET('battleground')) {
		var d = document.getElementById('battleground');
		d.value = _GET('battleground');
	}

	if (_GET('sims')) {
		var d = document.getElementById('sims');
		d.value = _GET('sims');
	}

	if (_GET('debug')) {
		var d = document.getElementById('debug');
		d.checked = true;
	}

	if (_GET('mass_debug')) {
		var d = document.getElementById('mass_debug');
		d.checked = true;
	}

	if (_GET('loss_debug')) {
		var d = document.getElementById('loss_debug');
		d.checked = true;
	}

	document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

	var version_label = document.getElementById('version_label');
	if (use_workers) {
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
		'<a href="'+generate_link()+'">'+generate_link()+'</a>' +
		'<br>' +
		'<br>' +
		'<i>Autostart link</i>' +
		'<br>' +
		'<a href="'+generate_link(1)+'">'+generate_link(1)+'</a>' +
		'<br>' +
		'<br>' +
		'<i>Copy/paste these results into Fansite as a comment</i>' +
		'<br>' +
		'<textarea onclick="this.select()">'+generate_fansite_results()+'</textarea>' +
		'<br>' +
		'<br>';
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
	var avg_length = (total_turns/games).toFixed(3);
	table3 += avg_length;

	table3 += '</td>';
	table3 += '</tr>';

	if (debug) return links;
	var full_table = '<table cellspacing=0 cellpadding=0 border=0><tr><td>'+table+'</td><td>&nbsp;</td><td>'+table3+'</td></tr></table>';

	// Final output
	if (sims_left == 0) {
		// Add generated links to final output
		full_table = full_table + links;

		// Append results to history

		var current_deck = '';
		var deck = [];
		var getdeck = document.getElementById('deck').value;
		var getcardlist = document.getElementById('cardlist').value;
		if (!getdeck && !getcardlist) getdeck = 'Po';

		// Load player deck
		/*if (getdeck) {
			deck['player'] = hash_decode(getdeck);
		} else*/ if (getcardlist) {
			deck['player'] = load_deck_from_cardlist(getcardlist);
		}
		if (deck['player']) {
			current_deck = hash_encode(deck['player']);
		}

		history += winrate + '% &nbsp; &nbsp; ' + current_deck + '<br>';
	}

	return full_table;
}

// Time elapsed
function time_elapsed() {
	var t = new Date().getTime();
	if (time_stop) t = time_stop;
	var v = (t - time_start)/1000;
	v = v.toFixed(3);
	return v;
}

// Time elapsed for one batch
function batch_time_elapsed(time_started) {
	var t = new Date().getTime();
	if (!time_started) time_started = time_start_batch;
	var v = (t - time_started)/1000;
	v = v.toFixed(3);
	return v;
}

// Generate formatted results for Fansite
function generate_fansite_results() {
	var text = '';
	var d = 0;
	var deck = [];

	var getdeck = document.getElementById('deck').value;
	var getcardlist = document.getElementById('cardlist').value;

	// Load player deck
	/*if (getdeck) {
		deck['player'] = hash_decode(getdeck);
	} else*/ if (getcardlist) {
		deck['player'] = load_deck_from_cardlist(getcardlist);
	}

	text += '[b]';

	var temp = wins / games * 100;
	temp = temp.toFixed(1);
	var winrate = temp;
	text += temp;
	text += '%';

	d = document.getElementById('ordered');
	if (d.checked) {
		text += ' Ordered';
	} else {
		text += ' Auto';
	}

	text += ' Winrate[/b] ';
	text += '[url=';
	text += generate_link();
	text += ']';

	d = document.getElementById('sims');
	if (d.value) {
		temp = d.value / 1;
		if (temp.toFixed(0) >= 1000) {
			temp = d.value / 1000;
			temp = temp.toFixed(0);
			text += temp + 'k';
		} else {
			text += temp.toFixed(0);
		}
	}
	text += ' trials';

	text += ' - SimSpellstone ' + text_version;
	text += '[/url]';

	return text;
}

// Generate a link from current settings and input
function generate_link(autostart, autolink) {

	var query = '?';
	var d = 0;
	var deck = [];

	var url_base = document.URL
	var index_of_query = url_base.indexOf(query);
	if(index_of_query>0) {
		url_base = url_base.substring(0, index_of_query)
	}

	var getdeck = document.getElementById('deck').value;
	var getcardlist = document.getElementById('cardlist').value;
	if (!getdeck && !getcardlist) getdeck = 'Po';
	var getdeck2 = document.getElementById('deck2').value;
	var getcardlist2 = document.getElementById('cardlist2').value;
	//var getmission = document.getElementById('mission').value;
	//var getbattleground = document.getElementById('battleground').value;

	// Load player deck
	/*if (getdeck) {
		deck['player'] = hash_decode(getdeck);
	} else*/ if (getcardlist) {
		deck['player'] = load_deck_from_cardlist(getcardlist);
	}

	// Load enemy deck
	if (getcardlist2) {
		deck['cpu'] = load_deck_from_cardlist(getcardlist2);
	}/* else if (getdeck2) {
		deck['cpu'] = hash_decode(getdeck2);
	} else if (getmission) {
		deck['cpu'] = 0;
	}*/

	if (deck['player']) {
		d = hash_encode(deck['player']);
		if (d) {
			query += 'deck1=' + d + '&';
		}
	}

	if (deck['cpu']) {
		d = hash_encode(deck['cpu']);
		if (d) {
			query += 'deck2=' + d + '&';
		}
	}

	d = document.getElementById('surge');
	if (d.checked) {
		query += 'surge=1&';
	}

	d = document.getElementById('tournament');
	if (d.checked) {
		query += 'tournament=1&';
	}

	d = document.getElementById('ordered');
	if (d.checked) {
		query += 'ordered=1&';
	}

	d = document.getElementById('exactorder');
	if (d.checked) {
		query += 'exactorder=1&';
	}

	d = document.getElementById('ordered2');
	if (d.checked) {
		query += 'ordered2=1&';
	}

	d = document.getElementById('exactorder2');
	if (d.checked) {
		query += 'exactorder2=1&';
	}
    /*
	d = document.getElementById('mission');
	if (d.value) {
		query += 'mission=' + d.value + '&';
	}

	d = document.getElementById('battleground');
	if (d.value) {
		query += 'battleground=' + d.value + '&';
	}
    */
	d = document.getElementById('sims');
	if (d.value) {
		query += 'sims=' + d.value + '&';
	}

	d = document.getElementById('debug');
	if (d.checked) {
		query += 'debug=1&';
	}

	d = document.getElementById('mass_debug');
	if (d.checked) {
		query += 'mass_debug=1&';
	}

	d = document.getElementById('loss_debug');
	if (d.checked) {
		query += 'loss_debug=1&';
	}

	if (autostart) {
		query += 'autostart=1&';
	}

	if (autolink) {
		query += 'autolink=1&';
	}

	if (use_workers && max_workers) {
		query += 'maxworkers=' + max_workers + '&';
	}

	query = query.substr(0, query.length - 1);

	return url_base + query;
}

function display_generated_link() {
	outp('' +
	'<br>' +
	'<i>Non-autostart link</i>' +
	'<br>' +
	'<a href="'+generate_link()+'">'+generate_link()+'</a>' +
	'<br>' +
	'<br>' +
	'<i>Autostart link</i>' +
	'<br>' +
	'<a href="'+generate_link(1)+'">'+generate_link(1)+'</a>' +
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

// Initialize global variables
var history = '';
var turn = false;
var max_turns = 50;
var debug = false;
var mass_debug = false;
var loss_debug = false;
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
var battleground = '';
var total_turns = 0;
var cache_player_deck = false;
var cache_cpu_deck = false;

// Global arrays
var factions = [];
factions[1] = 'Aether';
factions[2] = 'Chaos';
factions[3] = 'Wyld';
factions[4] = 'Frog';
factions[5] = 'Elemental';
factions[6] = 'Angel';
factions[7] = 'Undead';
factions[8] = 'Void';
factions[9] = 'Dragon';
var factionIDs = {
    Aether: 1,
    Chaos: 2,
    Wyld: 3,
    Frog: 4,
    Elemental: 5,
    Angel: 6,
    Undead: 7,
    Void: 8,
    Dragon: 9
};
var types = [];
types['2'] = 'assault';
var rarities = [];
rarities['1'] = 'common';
rarities['2'] = 'uncommon';
rarities['3'] = 'rare';
rarities['4'] = 'legendary';

