var keys = [];
var winrates = {};

function SimGuild() {
    keys = [];
    winrates = {};

    DeckRetriever.retrieveGuildDecks();
    var decks = DeckRetriever.factionDecks;
    for(var attackKey in decks)
    {
        keys.push(attackKey);
    }
    nextFight(0, 0, true);
}

function nextFight(attackKey, defendKey, firstMatch) {
    if (sims_left) {
        setTimeout(nextFight, 250, attackKey, defendKey);
    } else {
        if (!firstMatch) {
            var attacker = keys[attackKey];
            var defender = keys[defendKey];
            if (!winrates[attacker]) winrates[attacker] = {};
            winrates[attacker][defender] = (wins / games * 100).toFixed(1);;
        } else {
            var attacker = keys[attackKey];
            var defender = keys[defendKey];
            winrates[attacker] = {};
            winrates[attacker][defender] = "-";
        }

        defendKey++;
        if (defendKey == attackKey) {
            var attacker = keys[attackKey];
            var defender = keys[defendKey];
            winrates[attacker][defender] = "-";
            defendKey++;
        }
        var defender = keys[defendKey];
        if (!defender) {
            defendKey = 0;
            attackKey++;
            defender = keys[defendKey]
        }
        var attacker = keys[attackKey];
        if (attacker) {
            var attacker = keys[attackKey];

            if (attacker) {
                attacker = DeckRetriever.factionDecks[attacker];
                defender = DeckRetriever.factionDecks[defender];
                document.getElementById('deck').value = hash_encode(attacker);
                document.getElementById('deck2').value = hash_encode(defender);
                startsim();
            }
            setTimeout(nextFight, 1000, attackKey, defendKey);
        } else {
            var table = document.createElement('table');
            table.style.width = "100%";
            var header = document.createElement("tr");
            header.appendChild(document.createElement("th"));
            table.appendChild(header);
            for (var attacker in winrates) {
                var name = document.createElement("th");
                name.innerHTML = attacker;
                header.appendChild(name);
                var row = document.createElement("tr");
                name = document.createElement("th");
                name.innerHTML = attacker;
                row.appendChild(name);
                for (var defender in winrates[attacker]) {
                    var winrate = winrates[attacker][defender];
                    var data = document.createElement("td");
                    data.innerHTML = winrate;
                    row.appendChild(data);
                }
                table.appendChild(row);
            }
            document.getElementById("winrates").innerHTML = '';
            document.getElementById("winrates").appendChild(table);
        }
    }
}