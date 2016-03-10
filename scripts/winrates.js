"use strict";

var attackerKeys = [];
var defenderKeys = [];
var winrates = {};
var avgPoints = {};

var clearHash1 = true;
var clearList1 = true;
var clearHash2 = true;
var clearList2 = true;
var suppressOutput = true;
var extraCards = [];
var evolutions = [];
var comparisonMethod;
var resultsMethod;

function LoadGuildDecks() {
    DeckRetriever.retrieveGuildDecks(false);
}

function clearSelection(chooser) {
    chooser.value = '';
}

function LoadFileDecks(fileChooser) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        //Retrieve the first (and only!) File from the FileList object
        var f = fileChooser.files[0];
        DeckRetriever.getDecksfromFile(f);
    } else {
        alert('The File APIs are not fully supported by your browser.');
    }
}

function LoadFileDecksAttackDef(fileChooser, isAttacker) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        //Retrieve the first (and only!) File from the FileList object
        var f = fileChooser.files[0];
        DeckRetriever.getDecksfromFile(f, false, (isAttacker ? setAttackDecks : setDefenseDecks));
    } else {
        alert('The File APIs are not fully supported by your browser.');
    }
}

function setAttackDecks() {
    DeckRetriever.attackDecks = DeckRetriever.allDecks;
    DeckRetriever.allDecks = {};
}

function setDefenseDecks() {
    DeckRetriever.defenseDecks = DeckRetriever.allDecks;
    DeckRetriever.allDecks = {};
}

function RunGuildSIMS() {
    // Remove previous winrate table
    document.getElementById("results_table").innerHTML = '';

    attackerKeys = [];
    defenderKeys = [];
    winrates = {};
    avgPoints = {};

    DeckRetriever.allDecks = {};
    for (var key in DeckRetriever.factionDecks) {
        DeckRetriever.allDecks[key] = DeckRetriever.factionDecks[key];
    }


    var attacker = checkForSpecifiedAttacker();
    if (!attacker) {
        for (var key in DeckRetriever.attackDecks) {
            DeckRetriever.allDecks[key] = DeckRetriever.attackDecks[key];
            attacker = true;
        }
    }

    var defender = checkForSpecifiedDefender();
    if (!defender) {
        for (var key in DeckRetriever.defenseDecks) {
            DeckRetriever.allDecks[key] = DeckRetriever.defenseDecks[key];
            defender = true;
        }
    }

    var decks = DeckRetriever.factionDecks;
    if(!attacker || !defender) for (var key in decks) {
        if (!attacker) attackerKeys.push(key);
        if (!defender) defenderKeys.push(key);
    }

    attackerKeys.sort(caselessCompare);
    defenderKeys.sort(caselessCompare);

    if (attacker === true) {
        for (var key in DeckRetriever.attackDecks) {
            attackerKeys.push(key);
        }
    } else if(attacker) {
        var key = 'CustomAttackDeck';
        attackerKeys.push(key);
        DeckRetriever.allDecks[key] = attacker;
    }
    if (defender === true) {
        for (var key in DeckRetriever.defenseDecks) {
            defenderKeys.push(key);
        }
    } else if (defender) {
        var key = 'CustomDefenseDeck';
        defenderKeys.push(key);
        DeckRetriever.allDecks[key] = defender;
    }

    nextFight(0, -1);
}

function Optimize(field) {
    var hash = document.getElementById("optimizer_cards").value;
    var deck = hash_decode(hash);
    var cards = deck.deck;
    var len = cards.length;
    for (var i = 0, len = cards.length; i < len; i++) {
        extraCards.push(cards[i]);
    }

    evolutions = [];
    nextEvolution(true);
}

function nextEvolution(isFirst) {
    if (!extraCards.length) {
        var button = document.getElementById("pauseResume").style.display = "none";
        return;
    }

    var best;
    if (!isFirst) {
        for (var key in attackerKeys) {
            var attacker = attackerKeys[key];
            if (!best) {
                best = attacker;
            } else {
                if (comparisonMethod(attacker) > comparisonMethod(best)) best = attacker;
            }
        }
        var attacker = DeckRetriever.allDecks[best];
    } else {
        var attacker = checkForSpecifiedAttacker();
    }
    var defender = checkForSpecifiedDefender();

    // Remove previous winrate table
    document.getElementById("results_table").innerHTML = '';

    attackerKeys = [];
    defenderKeys = [];
    winrates = {};
    avgPoints = {};

    DeckRetriever.allDecks = {};
    for (var key in DeckRetriever.factionDecks) {
        DeckRetriever.allDecks[key] = DeckRetriever.factionDecks[key];
    }

    var attackDeck = attacker.deck;
    var key = 'Original';
    attackerKeys.push(key);
    DeckRetriever.allDecks[key] = attacker;

    for (var i = 0; i < attackDeck.length; i++) {
        var newDeck = {
            commander: attacker.commander,
            deck: attackDeck.slice()
        }
        newDeck.deck[i] = extraCards[0];
        var key = hash_encode(newDeck);
        attackerKeys.push(key);
        DeckRetriever.allDecks[key] = newDeck;
    }

    extraCards.splice(0, 1);

    // Only set up defenders once
    if (defender) {
        var defenderKey = 'defender';
        defenderKeys.push(defenderKey);
        DeckRetriever.allDecks[defenderKey] = defender;
    } else {
        var decks = DeckRetriever.factionDecks;
        for (var key in decks) {
            defenderKeys.push(key);
        }
    }

    attackerKeys.sort(caselessCompare);
    defenderKeys.sort(caselessCompare);

    nextFight(0, -1, true);
}

var resultComparisons = (function () {
    function getAverageWinrate(attacker) {
        var avg = 0;
        var count = 0;;
        for (var defender in defenderKeys) {
            defender = defenderKeys[defender];
            var winrate = winrates[attacker][defender];
            avg += winrate;
            count++;
        }
        return avg / count;
    }
    function getWinrate(attacker, defender) {
        var winrate = winrates[attacker];
        if (winrate) winrate = winrate[defender];
        if (winrate !== undefined) {
            return winrate.toFixed(1) + "%";
        }
        return '-';
    }

    function getPoints (attacker, defender) {
        var points = avgPoints[attacker][defender];
        if (points) points = points[defender];
        if (points !== undefined) {
            return points.toFixed(1);
        }
        return '-';
    }

    function getAveragePoints(attacker) {
        var avg = 0;
        var count = 0;;
        for (var defender in defenderKeys) {
            defender = defenderKeys[defender];
            var points = avgPoints[attacker][defender];
            avg += points;
            count++;
        }
        return avg / count;
    }

    function byWinrate() {
        comparisonMethod = getAverageWinrate;
        resultsMethod = getWinrate;
    }
    function byPoints() {
        comparisonMethod = getAveragePoints;
        resultsMethod = getPoints;
    }

    return {
        byWinrate: byWinrate,
        byPoints: byPoints
    }
})();

function RunGuildSIMSs() {

    // Remove previous winrate table
    document.getElementById("results_table").innerHTML = '';

    attackerKeys = [];
    defenderKeys = [];
    winrates = {};
    avgPoints = {};

    delete (DeckRetriever.factionDecks['CustomAttackDeck']);
    delete (DeckRetriever.factionDecks['CustomDefenseDeck']);

    var attacker = checkForSpecifiedAttacker();
    var defender = checkForSpecifiedDefender();

    var decks = DeckRetriever.factionDecks;
    for (var key in decks) {
        if (!attacker) attackerKeys.push(key);
        if (!defender) defenderKeys.push(key);
    }

    attackerKeys.sort(caselessCompare);
    defenderKeys.sort(caselessCompare);

    if (attacker) {
        var key = 'CustomAttackDeck';
        attackerKeys.push(key);
        DeckRetriever.factionDecks[key] = attacker;
    }
    if (defender) {
        var key = 'CustomDefenseDeck';
        defenderKeys.push(key);
        DeckRetriever.factionDecks[key] = defender;
    }

    nextFight(0, -1);
}

function caselessCompare(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

function checkForSpecifiedAttacker() {

    clearHash1 = true;
    clearList1 = true;

    var getdeck = document.getElementById('deck').value;
    var getcardlist = document.getElementById('cardlist').value;

    // Load deck
    var deck;
    if (getdeck) {
        clearHash1 = false;
        deck = hash_decode(getdeck);
    } else if (getcardlist) {
        clearList1 = false;
        deck = load_deck_from_cardlist(getcardlist);
    }

    return deck;
}

function checkForSpecifiedDefender() {

    clearHash2 = true;
    clearList2 = true;

    var getdeck2 = document.getElementById('deck2').value;
    var getcardlist2 = document.getElementById('cardlist2').value;
    var getmission = document.getElementById('mission').value;
    var getraid = document.getElementById('raid').value;
    var raidlevel = document.getElementById('raid_level').value;;

    // Load deck
    var deck;
    if (getdeck2) {
        deck = hash_decode(getdeck2);
        clearHash2 = false;
    } else if (getcardlist2) {
        deck = load_deck_from_cardlist(getcardlist2);
        clearList2 = false;
    } else if (getmission) {
        deck = load_deck_mission(getmission);
    } else if (getraid) {
        deck = load_deck_raid(getraid, raidlevel);
    }

    return deck;
}

function clearFields() {
    if (clearHash1) document.getElementById('deck').value = '';
    if (clearList1) document.getElementById('cardlist').value = '';
    if (clearHash2) getdeck2 = document.getElementById('deck2').value = '';
    if (clearList2) document.getElementById('cardlist2').value = '';
}

var paused = false;
function nextFight(attackKey, defendKey, sortByWins) {
    var setOptimizationCriteria = document.getElementById("optimizationCriteria").value
    resultComparisons[setOptimizationCriteria]();

    if (paused) {
        setupResume(attackKey, defendKey, sortByWins);
        return;
    }

    if (defendKey >= 0) {
        var attacker = attackerKeys[attackKey];
        var defender = defenderKeys[defendKey];
        if (!winrates[attacker]) {
            winrates[attacker] = {};
            avgPoints[attacker] = {};
        }
        winrates[attacker][defender] = (wins / games * 100);
        avgPoints[attacker][defender] = (total_points / games);
    } else {
        var button = document.getElementById("pauseResume").style.display = "block";
    }

    defendKey++;
    var defender = defenderKeys[defendKey];
    if (!defender) {
        defendKey = 0;
        attackKey++;
        defender = defenderKeys[defendKey]
    }
    var attacker = attackerKeys[attackKey];
    if (attacker) {
        var attacker = attackerKeys[attackKey];

        if (attacker) {
            attacker = DeckRetriever.allDecks[attacker];
            defender = DeckRetriever.allDecks[defender];
            document.getElementById('deck').value = hash_encode(attacker);
            document.getElementById('deck2').value = hash_encode(defender);
            var tblDiv = document.getElementById("remaining");
            tblDiv.style.display = "block";
            tblDiv.innerHTML = getCurrentMatch(attackKey, defendKey);

            SIM_CONTROLLER.end_sims_callback = function () {
                nextFight(attackKey, defendKey, sortByWins);
            }
            SIM_CONTROLLER.startsim();
            return;
        }
    }


    if (extraCards.length) {
        var key = 'Original'
        var deck = DeckRetriever.allDecks[key];
        var winrate = winrates[key];
        var points = avgPoints[key];
        evolutions.push({
            deck: deck,
            winrate: winrate,
            avgPoints: points,
        });
    } else {
        // for final display, show all evolutions
        for (var i = 0; i < evolutions.length; i++) {
            var evolution = evolutions[i];
            var deck = evolution.deck;
            var attackerKey = (i > 0 ? "Evolution " + i : "Starting Deck");
            attackerKeys.push(attackerKey);
            DeckRetriever.allDecks[attackerKey] = deck;
            winrates[attackerKey] = evolution.winrate;
            avgPoints[attackerKey] = evolution.avgPoints;
        }
        if (sortByWins) {
            attackerKeys.sort(function (a, b) {
                return comparisonMethod(b) - comparisonMethod(a);
            });
        }
    }

    if (sortByWins) {
        attackerKeys.sort(function (a, b) {
            return comparisonMethod(b) - comparisonMethod(a);
        });
    }

    drawResults();
    clearFields();
    SIM_CONTROLLER.end_sims_callback = false;
    nextEvolution();
}

function setupResume(attackKey, defendKey, sortByWins) {
    var button = document.getElementById("pauseResume");
    button.value = "Resume";
    document.getElementById("ui").style.display = "none";
    button.onclick = function () {
        paused = false;
        nextFight(attackKey, defendKey, sortByWins);
        button.onclick = pauseFights;
        button.value = "Pause";
    }
}

function pauseFights() {
    paused = true;
}

function getCurrentMatch(attackKey, defendKey) {
    var attacker = attackerKeys[attackKey] + " (" + attackKey + "/" + attackerKeys.length + ")";
    var defender = defenderKeys[defendKey] + " (" + defendKey + "/" + defenderKeys.length + ")";
    var battlesRemaining = ((attackerKeys.length - attackKey) * defenderKeys.length - defendKey);
    var output = battlesRemaining + " battles remaining - " + attacker + " vs. " + defender;

    return output;
}

function testTable() {
    for (var attackKey = 0; ; attackKey++) {
        var attacker = attackerKeys[attackKey];
        if (!attacker) break;
        winrates[attacker] = {};
        avgPoints[attacker] = {};
        for (var defendKey = 0; ; defendKey++) {
            var defender = defenderKeys[defendKey];
            if (!defender) break;
            winrates[attacker][defender] = "100.00%";
            avgPoints[attacker][defender] = "130.00";
        }
    }
    drawResults();
}

function drawResults() {
    document.getElementById("results_table").innerHTML = '';
    var table = document.createElement('table');
    var header = document.createElement("tr");
    var corner = document.createElement("th");
    corner.classList.add("diagonal-line");
    header.appendChild(corner);
    table.appendChild(header);
    var hash = document.createElement("th");
    hash.innerHTML = 'Deck Hash';
    header.appendChild(hash);
    for (var defender in defenderKeys) {
        var name = document.createElement("th");
        name.innerHTML = defenderKeys[defender];
        header.appendChild(name);
    }
    var name = document.createElement("th");
    name.innerHTML = "AVERAGE";
    header.appendChild(name);
    for (var attacker in attackerKeys) {
        attacker = attackerKeys[attacker];
        var row = document.createElement("tr");
        var name = document.createElement("th");
        name.innerHTML = attacker;
        row.appendChild(name);
        var hash = document.createElement("th");
        hash.innerHTML = hash_encode(DeckRetriever.allDecks[attacker]);
        row.appendChild(hash);
        for (var defender in defenderKeys) {
            defender = defenderKeys[defender];
            var results = resultsMethod(attacker, defender);
            var data = document.createElement("td");
            data.innerHTML = results;
            row.appendChild(data);
        }
        var data = document.createElement("td");
        data.innerHTML = resultsMethod(attacker, defender);
        row.appendChild(data);
        table.appendChild(row);
    }

    var tblDiv = document.getElementById("results_table");
    tblDiv.style.width = document.getElementsByTagName("body")[0].offsetWidth + 'px';
    tblDiv.appendChild(table);
    tblDiv.appendChild(document.createElement('br'));
    document.getElementById("remaining").style.display = "none";
    scroll_to_end();
}