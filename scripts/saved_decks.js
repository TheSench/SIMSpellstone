var load_tests = (function () {
    // Saved decks
    var deck1 = '';
    var deck2 = '';

    return function () {
        // Set up starting decks
        document.getElementById('cardlist').value = deck1;
        document.getElementById('cardlist2').value = deck2;
        // Turn on debug mode
        document.getElementById('debug').checked = true;
        // Setup current battlegrounds
        document.getElementById('battleground_0').checked = true;
        document.getElementById('battleground_2').checked = true;
    }
})();