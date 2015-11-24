var load_tests = (function () {
    // Saved decks
    var deck1 = 'Urs(5), Smelted S(4)x3, Fire Devil(4)x3, Swiftfoot(4), Duoshot(4)x2, Outrunner(4)x2, Lightsworn(5), Swell(5)x2, Mega G(5)';
    var deck2 = 'Groc(6), Smelted S(4)x2, Duoshot(4), Outrunner(4)x3, Leaper(5), Castlerock(5)x2, Wayfarer(5), Chaos T(5)x2, Bedlam(5), Invisible(5), Clawkin E(5)';

    return function () {
        // Set up starting decks
        document.getElementById('cardlist').value = deck1;
        document.getElementById('cardlist2').value = deck2;
        // Turn on debug mode
        document.getElementById('debug').checked = false;
        // Setup current battlegrounds
        document.getElementById('battleground_0').checked = true;
        document.getElementById('battleground_2').checked = true;
    }
})();