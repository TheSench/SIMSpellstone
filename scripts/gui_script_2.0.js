'use strict';

var loadDeckDialog;

$(function () {
    $("#deck").change(function () {
        deckChanged("attack_deck", hash_decode(this.value));
    });

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


    loadDeckDialog = $("#loadDeckDialog").dialog({
        autoOpen: false,
        /*
        width: 250,
        minHeight: 20,
        */
        modal: true,
        resizable: false,
        buttons: {
            Load: function () {
                var name = $("#loadDeckName").val();
                var newHash = storageAPI.loadDeck(name);
                onDeckLoaded(newHash, loadDeckDialog.hashField);
                loadDeckDialog.dialog("close");
            },
            Cancel: function () {
                loadDeckDialog.dialog("close");
            }
        },
    });

    deckChanged("attack_deck", hash_decode(''));
    deckChanged("defend_deck", hash_decode(''));

    // Disable this as we now draw the full deck
    debug_dump_decks = function () { };
});


function loadDeck(hashField) {
    var decks = storageAPI.getSavedDecks;
    $('label[for="loadDeckName"]').html('<strong>Deck:</strong>');
    loadDeckDialog.dialog("open");
    loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });

    loadDeckDialog.hashField = hashField;
}

function onDeckLoaded(newHash, hashField) {
    $(hashField).val(newHash).change();
}

var dark = false;
function toggleTheme() {
    if (dark) {
        $("#theme").attr("href", "styles/sass/themes/light.css")
        $("#toggleTheme").val("Dark Theme");
    } else {
        $("#theme").attr("href", "styles/sass/themes/dark.css")
        $("#toggleTheme").val("Light Theme");
    }
    dark = !dark;
}