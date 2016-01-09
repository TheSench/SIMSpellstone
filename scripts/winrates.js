var attackerKeys = [];
var defenderKeys = [];
var winrates = {};

function SimGuild() {
    DeckRetriever.retrieveGuildDecks();
    RunGuildSIMS();
}

function RunGuildSIMS() {
    // Remove previous winrate table
    document.getElementById("winrates").innerHTML = '';

    attackerKeys = [];
    defenderKeys = [];
    winrates = {};

    delete (DeckRetriever.factionDecks['CustomAttackDeck']);
    delete (DeckRetriever.factionDecks['CustomDefenseDeck']);

    var attacker = checkForSpecifiedAttacker();
    var defender = checkForSpecifiedDefender();

    var decks = DeckRetriever.factionDecks;
    for(var key in decks)
    {
        if (!attacker) attackerKeys.push(key);
        if (!defender) defenderKeys.push(key);
    }

    attackerKeys.sort();
    defenderKeys.sort();

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

function checkForSpecifiedAttacker() {

    var getdeck = document.getElementById('deck').value;
    var getcardlist = document.getElementById('cardlist').value;

    // Load deck
    var deck;
    if (getdeck) {
        deck = hash_decode(getdeck);
    } else if (getcardlist) {
        deck = load_deck_from_cardlist(getcardlist);
    }

    return deck;
}

function checkForSpecifiedDefender() {

    var getdeck2 = document.getElementById('deck2').value;
    var getcardlist2 = document.getElementById('cardlist2').value;
    var getmission = document.getElementById('mission').value;
    
    // Load deck
    var deck;
    if (getdeck2) {
        deck = hash_decode(getdeck2);
    } else if (getcardlist2) {
        deck = load_deck_from_cardlist(getcardlist2);
    } else if (getmission) {
        deck = load_deck_mission(getmission);
    }

    return deck;
}

function nextFight(attackKey, defendKey) {
    if (sims_left) {
        setTimeout(nextFight, 250, attackKey, defendKey);
    } else {
        if (defendKey >= 0) {
            var attacker = attackerKeys[attackKey];
            var defender = defenderKeys[defendKey];
            if (!winrates[attacker]) winrates[attacker] = {};
            winrates[attacker][defender] = (wins / games * 100).toFixed(1);;
        }

        defendKey++;
        if (attackerKeys[attackKey] == defenderKeys[defendKey]) {
            var attacker = attackerKeys[attackKey];
            var defender = defenderKeys[defendKey];
            if (!winrates[attacker]) winrates[attacker] = {};
            winrates[attacker][defender] = "-";
            defendKey++;
        }
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
                attacker = DeckRetriever.factionDecks[attacker];
                defender = DeckRetriever.factionDecks[defender];
                document.getElementById('deck').value = hash_encode(attacker);
                document.getElementById('deck2').value = hash_encode(defender);
                var tblDiv = document.getElementById("remaining");
                tblDiv.style.display = "block";
                tblDiv.innerHTML = getCurrentMatch(attackKey, defendKey);
                startsim();
            }
            setTimeout(nextFight, 1000, attackKey, defendKey);
        } else {
            drawResults();
        }
    }
}

function getCurrentMatch(attackKey, defendKey) {
    var attacker = attackerKeys[attackKey] + " (" + attackKey + "/" + attackerKeys.length + ")";
    var defender = defenderKeys[defendKey] + " (" + defendKey + "/" + defenderKeys.length + ")";
    var battlesRemaining = ((attackerKeys.length - attackKey) * defenderKeys.length - defendKey);
    var output = attacker + " vs. " + defender + " - " + battlesRemaining + " battles remaining";

    return output;
}

function testTable() {
    for (var attackKey = 0; ; attackKey++) {
        var attacker = attackerKeys[attackKey];
        if (!attacker) break;
        winrates[attacker] = {};
        for (var defendKey = 0; ; defendKey++) {
            var defender = defenderKeys[defendKey];
            if (!defender) break;
            winrates[attacker][defender] = "100.00%";
        }
    }
    drawResults();
}

function drawResults() {
    document.getElementById("winrates").innerHTML = '';
    var table = document.createElement('table');
    var header = document.createElement("tr");
    var corner = document.createElement("th");
    corner.classList.add("diagonal-line");
    header.appendChild(corner);
    table.appendChild(header);
    for (var defender in defenderKeys) {
        var name = document.createElement("th");
        name.innerHTML = defenderKeys[defender];
        header.appendChild(name);
    }

    for (var attacker in attackerKeys) {
        attacker = attackerKeys[attacker];
        var row = document.createElement("tr");
        var name = document.createElement("th");
        name.innerHTML = attacker;
        row.appendChild(name);
        for (var defender in defenderKeys) {
            defender = defenderKeys[defender];
            var winrate = winrates[attacker][defender];
            var data = document.createElement("td");
            data.innerHTML = winrate + "%";
            row.appendChild(data);
        }
        table.appendChild(row);
    }

    var tblDiv = document.getElementById("winrates");
    tblDiv.style.width = document.getElementsByTagName("body")[0].offsetWidth + 'px';
    tblDiv.appendChild(table);
    tblDiv.appendChild(document.createElement('br'));
    document.getElementById("remaining").style.display = "none";
    scroll_to_end();
}