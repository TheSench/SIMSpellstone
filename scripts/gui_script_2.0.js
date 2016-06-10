$(function () {
    $("#deck").change(function () {
        deckChanged("attack_deck", hash_decode(this.value));
    }).change();

    $("#deck2").change(function () {
        deckChanged("defend_deck", hash_decode(this.value));
    });

    function deckChanged(deckID, newDeck) {
        var $deck = $("#" + deckID);
        $deck.children().remove();
        $deck.append(CARD_GUI.makeDeckHTML(newDeck));
    }

    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
    });

    $("#raid").change(function () {
        var newDeck;
        if (this.value) {
            var raidlevel = document.getElementById('raid_level').value;
            newDeck = load_deck_raid(this.value, raidlevel);
        } else {
            newDeck = hash_decode('');
        }
        deckChanged("defend_deck", newDeck);
    });

    $("#campaign").change(function () {
        $("#mission").change();
    });

    $("#mission").change(function () {
        var newDeck;
        if (this.value) {
            var missionLevel = document.getElementById('mission_level').value;
            newDeck = load_deck_mission(this.value, missionLevel);
        } else {
            newDeck = hash_decode('');
        }
        deckChanged("defend_deck", newDeck);
    });

});