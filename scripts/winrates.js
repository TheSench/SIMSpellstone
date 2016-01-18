var attackerKeys = [];
var defenderKeys = [];
var winrates = {};

var clearHash1 = true;
var clearList1 = true;
var clearHash2 = true;
var clearList2 = true;
var suppressOutput = true;
var extraCards = [];

function SimGuild() {
    DeckRetriever.retrieveGuildDecks(false, RunGuildSIMS);
}

function RunGuildSIMS() {
    // Remove previous winrate table
    document.getElementById("results_table").innerHTML = '';

    attackerKeys = [];
    defenderKeys = [];
    winrates = {};

    DeckRetriever.allDecks = {};
    for (var key in DeckRetriever.factionDecks) {
        DeckRetriever.allDecks[key] = DeckRetriever.factionDecks[key];
    }

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
        DeckRetriever.allDecks[key] = attacker;
    }
    if (defender) {
        var key = 'CustomDefenseDeck';
        defenderKeys.push(key);
        DeckRetriever.allDecks[key] = defender;
    }

    nextFight(0, -1);
}

function GenerateHashes(field) {
    var hash = field.value;
    var deck = hash_decode(hash);
    var commander = deck.commander;
    var cards = deck.deck;
    var len = cards.length;
    var decks = 0;
    for(var i1 = 0; i1 < len - 14; i1++){
        for(var i2 = i1+1; i2 < len - 13; i2++){
            for (var i3 = i2 + 1; i3 < len - 12; i3++) {
                for (var i4 = i3 + 1; i4 < len - 11; i4++) {
                    for (var i5 = i4 + 1; i5 < len - 10; i5++) {
                        for (var i6 = i5 + 1; i6 < len - 9; i6++) {
                            for (var i7 = i6 + 1; i7 < len - 8; i7++) {
                                for (var i8 = i7 + 1; i8 < len - 7; i8++) {
                                    for (var i9 = i8 + 1; i9 < len - 6; i9++) {
                                        for (var i10 = i9 + 1; i10 < len - 5; i10++) {
                                            for (var i11 = i10 + 1; i11 < len - 4; i11++) {
                                                for (var i12 = i11 + 1; i12 < len - 3; i12++) {
                                                    for (var i13 = i12 + 1; i13 < len - 2; i13++) {
                                                        for (var i14 = i13 + 1; i14 < len - 1; i14++) {
                                                            for (var i15 = i14 + 1; i15 < len; i15++) {
                                                                decks++;
                                                                /*
                                                                var deck = {
                                                                    commander: commander,
                                                                    deck: []
                                                                };
                                                                deck.deck.push(cards[i1]);
                                                                deck.deck.push(cards[i2]);
                                                                deck.deck.push(cards[i3]);
                                                                deck.deck.push(cards[i4]);
                                                                deck.deck.push(cards[i5]);
                                                                deck.deck.push(cards[i6]);
                                                                deck.deck.push(cards[i7]);
                                                                deck.deck.push(cards[i8]);
                                                                deck.deck.push(cards[i9]);
                                                                deck.deck.push(cards[i10]);
                                                                deck.deck.push(cards[i11]);
                                                                deck.deck.push(cards[i12]);
                                                                deck.deck.push(cards[i13]);
                                                                deck.deck.push(cards[i14]);
                                                                deck.deck.push(cards[i15]);
                                                                var key = hash_encode(deck);
                                                                attackerKeys.push(key);
                                                                DeckRetriever.allDecks[key] = deck;
                                                                */
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    alert(decks);
}

function GenerateHashes_2(field) {
    var hash = field.value;
    var deck = hash_decode(hash);
    var cards = deck.deck;
    var len = cards.length;
    for (var i = 0, len = cards.length; i < len; i++) {
        extraCards.push(cards[i]);
    }

    // Remove previous winrate table
    document.getElementById("results_table").innerHTML = '';

    attackerKeys = [];
    defenderKeys = [];
    winrates = {};

    DeckRetriever.allDecks = {};
    for (var key in DeckRetriever.factionDecks) {
        DeckRetriever.allDecks[key] = DeckRetriever.factionDecks[key];
    }

    var attacker = checkForSpecifiedAttacker();
    var attackDeck = attacker.deck;
    var key = 'Original';
    attackerKeys.push(key);
    DeckRetriever.allDecks[key] = attackDeck;

    for (var i = 0; i < attacker.deck.length; i++) {
        var newDeck = {
            commander: attacker.commander,
            deck: attackDeck.slice()
        }
        newDeck.deck[i] = extraCards[0];
        var key = hash_encode(newDeck);
        attackerKeys.push(key);
        DeckRetriever.allDecks[key] = newDeck;
    }

    var decks = DeckRetriever.factionDecks;
    for (var key in decks) {
        defenderKeys.push(key);
    }

    attackerKeys.sort(caselessCompare);
    defenderKeys.sort(caselessCompare);

    nextFight(0, -1);
}
function RunGuildSIMSs() {
    // Remove previous winrate table
    document.getElementById("results_table").innerHTML = '';

    attackerKeys = [];
    defenderKeys = [];
    winrates = {};

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
    }

    return deck;
}

function clearFields() {
    if (clearHash1) document.getElementById('deck').value = '';
    if (clearList1) document.getElementById('cardlist').value = '';
    if (clearHash2) getdeck2 = document.getElementById('deck2').value = '';
    if (clearList2) document.getElementById('cardlist2').value = '';
}

function nextFight(attackKey, defendKey) {
    if (defendKey >= 0) {
        var attacker = attackerKeys[attackKey];
        var defender = defenderKeys[defendKey];
        if (!winrates[attacker]) winrates[attacker] = {};
        winrates[attacker][defender] = (wins / games * 100);
    }

    defendKey++;
    /*
    if (attackerKeys[attackKey] == defenderKeys[defendKey]) {
        var attacker = attackerKeys[attackKey];
        var defender = defenderKeys[defendKey];
        if (!winrates[attacker]) winrates[attacker] = {};
        winrates[attacker][defender] = "-";
        defendKey++;
    }
    */
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

            end_sims_callback = function () {
                nextFight(attackKey, defendKey);
            }
            startsim();
            return;
        }
    }

    drawResults();
    clearFields();
    end_sims_callback = undefined;
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
        for (var defendKey = 0; ; defendKey++) {
            var defender = defenderKeys[defendKey];
            if (!defender) break;
            winrates[attacker][defender] = "100.00%";
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
    header.appendChild("AVERAGE");

    for (var attacker in attackerKeys) {
        attacker = attackerKeys[attacker];
        var row = document.createElement("tr");
        var name = document.createElement("th");
        name.innerHTML = attacker;
        row.appendChild(name);
        var hash = document.createElement("th");
        hash.innerHTML = hash_encode(DeckRetriever.allDecks[attacker]);
        row.appendChild(hash);
        var avg = 0;
        var count = 0;
        for (var defender in defenderKeys) {
            defender = defenderKeys[defender];
            var winrate = winrates[attacker][defender];
            var data = document.createElement("td");
            data.innerHTML = winrate.toFixed(1) + "%";
            row.appendChild(data);
            avg += winrate;
            count++;
        }
        avg /= count;
        var data = document.createElement("td");
        data.innerHTML = avg.toFixed(1) + "%";
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