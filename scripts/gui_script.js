"use strict";

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
window.onload = function () {

    // Check if missions are found
    if (MISSIONS) {
        // Mission drop down
        var select = document.getElementById('mission');
        var IDs = [];
        for (var key in MISSIONS) {
            IDs.push(key);
        }
        for (var i = 0; i < IDs.length; i++)
        {
            var key = IDs[i];
            var mission = MISSIONS[key];
            var option = document.createElement('option');
            option.appendChild(document.createTextNode(mission.name));
            option.value = mission.id;
            select.appendChild(option);
        }
    }

    // Check if raids are found
    if (RAIDS) {
        // Mission drop down
        var select = document.getElementById('raid');
        var IDs = [];
        for (var key in RAIDS) {
            IDs.push(key);
        }
        for (var i = 0; i < IDs.length; i++) {
            var key = IDs[i];
            var raid = RAIDS[key];
            var option = document.createElement('option');
            option.appendChild(document.createTextNode(raid.name));
            option.value = raid.id;
            select.appendChild(option);
        }
    }


    // Check if battlegrounds are found
    if (BATTLEGROUNDS) {
        // Battleground drop down
        var select = document.getElementById('battleground');
        for (var key in BATTLEGROUNDS) {
            var battleground = BATTLEGROUNDS[key];
            if (battleground.enemy_only) continue;
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

    if (_DEFINED('surge')) {
        var d = document.getElementById('surge');
        d.checked = true;
    }

    if (_DEFINED('siege')) {
        var d = document.getElementById('siege');
        d.checked = true;
    }

    if (_GET('tower_level')) {
        var d = document.getElementById('tower_level');
        var tower_level = _GET('tower_level');
        tower_level = Math.min(Math.max(tower_level, 0), 18);
        d.value = tower_level;
    }

    if (_GET('tower_type')) {
        var d = document.getElementById('tower_type');
        var tower_type = _GET('tower_type');
        tower_type = Math.min(Math.max(tower_type, 0), 15);
        d.value = tower_type;
    }

    if (_DEFINED('tournament')) {
        var d = document.getElementById('tournament');
        d.checked = true;
    }

    if (_DEFINED('ordered')) {
        var d = document.getElementById('ordered');
        if (d) {
            d.checked = true;
        }
    }

    if (_DEFINED("randomAI")) {
        smartAI = false;
    }

    if (_DEFINED('exactorder')) {
        var d = document.getElementById('exactorder');
        if (d) {
            d.checked = true;
        }
    }

    if (_DEFINED('ordered2')) {
        var d = document.getElementById('ordered2');
        d.checked = true;
    }

    if (_DEFINED('exactorder2')) {
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

    if (_DEFINED('battleground')) {
        var bgIndexes = _GET('battleground');
        var bgCheckBoxes = document.getElementsByName("battleground");
        for (var i = 0; i < bgIndexes.length; i++) {
            var d = bgCheckBoxes[bgIndexes[i]];
            d.checked = true;
        }
    } else {
        // Load current battlegrounds
        var bgCheckBoxes = document.getElementsByName("battleground");
        bgCheckBoxes[4].checked = true;
        bgCheckBoxes[5].checked = true;
    }

    if (_GET('sims')) {
        var d = document.getElementById('sims');
        if (d) {
            d.value = _GET('sims');
        }
    }

    if (_DEFINED('debug')) {
        var d = document.getElementById('debug');
        d.checked = true;
    }

    if (_DEFINED('auto_mode')) {
        var d = document.getElementById('auto_mode');
        if (d) {
            d.checked = true;
        }
    }

    if (_DEFINED('mass_debug')) {
        var d = document.getElementById('mass_debug');
        if (d) {
            d.checked = true;
        }
    }

    if (_DEFINED('loss_debug')) {
        var d = document.getElementById('loss_debug');
        if (d) {
            d.checked = true;
        }
    }

    if (_DEFINED('win_debug')) {
        var d = document.getElementById('win_debug');
        if (d) {
            d.checked = true;
        }
    }

    if (_DEFINED('user_controlled')) {
        var d = document.getElementById('user_controlled');
        if (d) {
            d.checked = true;
        }
    }

    document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

    var version_label = document.getElementById('version_label');
    if (battle_sim) { }
    else if (use_workers) {
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
    } else {
        version_label.innerHTML += " " + text_version + " - Single-Threaded";
        if (!one_worker) {
            var version_label2 = document.getElementById('version_label2');
            version_label2.innerHTML += "(Multi-core not supported by your browser)";
        }
    }

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
}

// Modify HTML to output simulation results
function outp(text) {
    var c = document.getElementById('content');
    if (!c) return 0;
    c.innerHTML = text;
}

// Return table of simulation results
function gettable() {

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

    // Average points
    table3 += '<tr>';
    table3 += '<td>';
    table3 += 'Avg. Points';
    table3 += '</td>';
    table3 += '<td>';
    // Calculate Average length of battle
    var avg_points = (total_points / games).toFixed(3);
    table3 += avg_points;
    table3 += '</td>';
    table3 += '</tr>';

    table3 += '</table>';

    var full_table = '<table cellspacing=0 cellpadding=0 border=0><tr><td>' + table + '</td><td>&nbsp;</td><td>' + table3 + '</td></tr></table>';

    // Final output
    if (sims_left == 0) {
        // Add generated links to final output
        full_table += links;

        // Append results to history

        var current_deck = '';
        var deck = [];
        var deck1Hash = document.getElementById('deck').value;
        var deck1List = document.getElementById('cardlist').value;

        // Load player deck
        if (deck1Hash) {
            deck.player = hash_decode(deck1Hash);
        } else if (deck1List) {
            deck.player = load_deck_from_cardlist(deck1List);
        }
        if (deck.player) {
            current_deck = hash_encode(deck.player);
        }

        battle_history += winrate + '% &nbsp; &nbsp; ' + current_deck + '<br>';
    }

    return full_table;
}

function getOrderStatsTable() {

    if (!trackStats) return '';

    var winrateKeys = [];
    cardStats = {
        keys: []
    };
    for (var key in orders) {
        var stats = orders[key];
        stats.winrate = (stats.wins / stats.games);
        CalculatePlayStats(key, cardStats)
    }
    var statsTable = '<br><table cellspacing=0 cellpadding=5 style="border: 1px solid #000000;">';
    var lastColumn = 0;
    statsTable += getStatsRows(cardStats);
    statsTable += '</table>';

    return statsTable;
}

function sortByAvgPoints(stats, keys) {
    keys.sort(function (a, b) {
        var statsA = stats[a];
        var statsB = stats[b];
        var compare = statsB.avgPoints - statsA.avgPoints;
        if (compare != 0) return compare;
        compare = statsA.games - statsB.games;
        if (compare != 0) return compare;
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
}

function getStatsRows(stats) {
    var aryHTML = [];
    addChildRows(stats, stats.keys, aryHTML, true);
    return '<tr>' + aryHTML.join('</tr><tr>') + '</tr>';
}

function addChildRows(stats, keys, aryHTML, isPlayer) {
    sortByAvgPoints(stats, keys);
    for (var i = 0; i < keys.length; i++) {
        var stat = stats[keys[i]];
        addRowData(stats, stat, aryHTML, isPlayer);
    }
}

function addRowData(stats, stat, aryHTML, isPlayer) {
    var aryChildren = [];
    addChildRows(stats, stat.children, aryChildren, !isPlayer);

    var rowSpan = Math.max(aryChildren.length, 1);

    var matches = (stat.wins + "/" + stat.games);
    htmlEntry += makeTD(rowSpan, matches, isPlayer);

    var winrate = (stat.winrate * 100).toFixed(2) + '%';
    var htmlEntry = makeTD(rowSpan, winrate, isPlayer);

    htmlEntry += makeTD(rowSpan, stat.avgPoints.toFixed(2), isPlayer);

    htmlEntry += makeTD(rowSpan, stat.card, isPlayer);
    if (aryChildren.length) {
        htmlEntry += aryChildren[0];
    }

    aryHTML.push(htmlEntry);
    for (var i = 1; i < aryChildren.length; i++) {
        aryHTML.push(aryChildren[i]);
    }
}

function makeTD(rowSpan, contents, isPlayer) {
    var formatStart = '<' + (isPlayer ? 'i' : 'b') + '>';
    var formatEnd = formatStart.replace('<', '</');
    var td = '<td rowSpan=' + rowSpan + '" style="border: 1px solid #000000;">' + formatStart  + contents + formatEnd + '</td>';
    return td;
}

function CalculatePlayStats(hash, cardStats) {
    var cards = hash_decode(hash).deck;
    var stats = orders[hash];
    var parentKey = null;
    for (var i = 0; i < cards.length; i++) {
        var play = { deck: cards.slice(0, i+1) };
        var playKey = hash_encode(play);
        var playStats = cardStats[playKey];
        if (!playStats) {
            var card = get_card_by_id(cards[i]);
            var card_name = card.name + "(" + card.level + ")";
            if (card.runes.length) card_name += "*";
            playStats = {
                card: card_name,
                wins: 0,
                games: 0,
                points: 0,
                children: []
            };
            cardStats[playKey] = playStats;
            if (parentKey) {
                if (!_DEFINED("succinct")) {
                    cardStats[parentKey].children.push(playKey);
                }
            } else {
                cardStats.keys.push(playKey);
            }
        }
        playStats.wins += stats.wins;
        playStats.games += stats.games;
        playStats.points += stats.points;
        playStats.winrate = (playStats.wins / playStats.games);
        playStats.avgPoints = (playStats.points / playStats.games);
        parentKey = playKey;
    }
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
    var getraid = document.getElementById('raid').value;
    var raidlevel = document.getElementById('raid_level').value;

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
    } else if (getraid) {
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
        parameters.push('surge');
    }

    d = document.getElementById('siege');
    if (d.checked) {
        parameters.push('siege');
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
        parameters.push('ordered');
    }

    d = document.getElementById('exactorder');
    if (d && d.checked) {
        parameters.push('exactorder');
    }

    d = document.getElementById('ordered2');
    if (d.checked) {
        parameters.push('ordered2');
    }

    d = document.getElementById('exactorder2');
    if (d.checked) {
        parameters.push('exactorder2');
    }

    d = document.getElementById('mission');
    if (d.value) {
        parameters.push('mission=' + d.value);
    }

    d = document.getElementById('raid');
    if (d.value) {
        parameters.push('raid=' + d.value);
    }

    var battlegrounds = '';
    var bgCheckBoxes = document.getElementsByName("battleground");
    for (var i = 0; i < bgCheckBoxes.length; i++) {
        d = bgCheckBoxes[i];
        if (d.checked) battlegrounds += i;
    }
    parameters.push('battleground=' + battlegrounds);

    d = document.getElementById('sims');
    if (d && d.value) {
        parameters.push('sims=' + d.value);
    }

    d = document.getElementById('user_controlled');
    if (d && d.checked) {
        parameters.push('user_controlled');
    }

    d = document.getElementById('debug');
    if (d.checked) {
        parameters.push('debug');
    }

    d = document.getElementById('auto_mode');
    if (d && d.checked) {
        parameters.push('auto_mode');
    }

    d = document.getElementById('mass_debug');
    if (d && d.checked) {
        parameters.push('mass_debug');
    }

    d = document.getElementById('loss_debug');
    if (d && d.checked) {
        parameters.push('loss_debug');
    }

    d = document.getElementById('win_debug');
    if (d && d.checked) {
        parameters.push('win_debug');
    }

    if (autostart) {
        parameters.push('autostart');
    }

    if (autolink) {
        parameters.push('autolink');
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

function load_deck_builder_for_field(fieldID) {
    var field = document.getElementById(fieldID);
    var deck = {
        commander: elariaCaptain,
        deck: [],
    };
    var hash = field.value;
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
        var getdeck = document.getElementById('deck').value;
        var getcardlist = document.getElementById('cardlist').value;
        var getmission;
        var getraid;
        var raidlevel;
    } else {
        var getdeck = document.getElementById('deck2').value;
        var getcardlist = document.getElementById('cardlist2').value;
        var getmission = document.getElementById('mission').value;
        var getraid = document.getElementById('raid').value;
        var raidlevel = document.getElementById('raid_level').value;
    }

    // Load player deck
    var deck = {
        commander: elariaCaptain,
        deck: [],
    };
    if (getdeck) {
        deck = hash_decode(getdeck);
    } else if (getcardlist) {
        deck = load_deck_from_cardlist(getcardlist);
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
    var deckHashField = (player ? document.getElementById(player == 'player' ? 'deck' : 'deck2') : null);
    open_deck_builder(name, hash, null, deckHashField);
}

function open_deck_builder(name, hash, inventory, deckHashField) {
    var url = (inventory ? "DeckUpdater.html" : "DeckBuilder.html");
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
    if (parameters.length > 0) {
        url += '?' + parameters.join('&');
    }

    var baseRequest = (typeof DeckRetriever !== 'undefined' ? DeckRetriever.baseRequest : null);

    var width = Math.min(screen.width, 1000);
    var height = Math.min(screen.height, 700);
    var left = Number((screen.width - width) / 2);
    var top = Number((screen.height - height) / 2);

    var windowFeatures = 'location=0,menubar=0,resizable=0,scrollbars=0,status=0,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
    var win = window.open(url, '', windowFeatures);
    win.moveTo(left, top);
    // Push values to window once it has loaded
    win.onload = (function (name, deckHashField, baseRequest) {
        return function () {
            // Tie deck-builder back to the hash field in the simulator.
            if (deckHashField) this.simulatorDeckHashField = deckHashField;
            // Link deckbuilder to base request data.
            if (inventory) $.extend(this.DeckRetriever.baseRequest, baseRequest);
        }
    })(name, deckHashField, baseRequest);
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
    var h = battle_history;
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

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

// Initialize global variables
var battle_history = '';
var max_turns = 50;
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
var trackStats = false;
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
var total_points = 0;
var cache_player_deck;
var cache_cpu_deck;
var cache_player_deck_cards;
var cache_cpu_deck_cards;
var choice = undefined;
var auto_mode = false;
var suppressOutput = false;
var orders = {};
var cardStats = {};