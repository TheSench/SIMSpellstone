function getTutorialScript() {
    var tutorialParts = [
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Deck Builder.",
       },
       {
           ui: "#deckContainer",
           msg: 'The "Deck" section contains your current deck.',
           actions: [clearHash, showDeck, clearFilters, hideFilters, hideCollection]
       },
       {
           ui: "#hash-container",
           msg: 'If you have a deck hash, you can paste it here to set the current deck.',
           actions: [clearHash]
       },
       {
           ui: "#deckContainer",
           msg: 'Manually modifying the deck hash will automatically update the deck.',
           actions: [setHash]
       },
       {
           ui: "#deckContainer",
           msg: 'You can drag-and-drop units in your deck to rearrange them (currently PC-only).',
           actions: [moveCard]
       },
       {
           ui: "#unitOptions",
           dialog: true,
           msg: 'Right-click on a card to bring up an edit dialog.',
           actions: [moveCard, editCard]
       },
       {
           ui: "#unitOptions",
           dialog: true,
           msg: 'Here, you can edit its level, fusion, and runes.',
           actions: [makeCardEdits]
       },
       {
           ui: "#deck .card:eq(1)",
           msg: 'Changes will made will be shown on the card, but will not be saved until you hit "OK".',
           actions: [editCard, makeCardEdits]
       },
       {
           ui: "#deckContainer",
           msg: 'Clicking "Cancel" will revert the unit back to its original stats.',
           actions: [closeEditUnit]
       },
       {
           ui: "#link",
           msg: 'This link will load the DeckBuilder with your current deck to allow for easy sharing of decks.  It is automatically updated whenever you update the deck.'
       },
       {
           ui: "#resetDeck",
           msg: 'This will remove all cards from your deck and set the commander back to "Elaria Captain".',
           actions: [clearHash]
       },
       {
           ui: "#sortDeck",
           msg: 'This will sort all cards in your deck based on faction, rarity, and ID (the same way they are sorted in the game).'
       },
       {
           ui: "#saveDeck",
           msg: 'This will allow you to save a deck locally so that you can easily load it later.'
       },
       {
           ui: "#loadDeck",
           msg: 'If you have any saved decks, you can use this button to quickly load one of them into the DeckBuilder.',
           actions: [hideCollection, showDeck]
       },
       {
           ui: "#collection-container",
           msg: 'The "Cards" section contains all of the cards in the game.',
           actions: [hideDeck, showCollection]
       },
       {
           ui: "#collection-container",
           msg: 'Left-clicking on a card will add it to your deck.',
           actions: [closeDetails]
       },
       {
           ui: "#detailedView",
           dialog: true,
           msg: 'Right-clicking on a card will display a detailed view of the card.',
           actions: [showDetails, hideFilters]
       },
       {
           ui: "#filter-container",
           msg: 'The "Filters" section allows you to filter the cards in the collection.',
           actions: [closeDetails, showFilters]
       },
       {
           ui: "#filter-container",
           msg: 'Click on a filter to only show cards that match that filter.',
           actions: [clearFilters]
       },
       {
           ui: "#fervor",
           msg: 'For instance, clicking the "Fervor" filter will only show units that have the skill "Fervor".',
           actions: [filter]
       },
       {
           ui: "#collection-container",
           msg: 'Now only units with "Fervor" are visible.',
           actions: [closeAdvancedFilters]
       },
       {
           ui: "#advancedFilters",
           dialog: true,
           msg: 'Right-clicking on a Skill filter will allow you to perform more advanced filtering.',
           actions: [advancedFilter]
       },
       {
           ui: "#advancedFilters",
           dialog: true,
           msg: 'Here you can specify specific Skill values to filter by.  Different skills have different advanced filters available.',
           actions: [filter, advancedFilter, setAdvancedFilter]
       },
       {
           ui: "#fervor",
           dialog: true,
           msg: 'Clicking "OK" will apply the advanced filtering.',
           actions: [saveAdvancedFilters]
       },
       {
           ui: "#collection-container",
           msg: 'Now only units with at least "Fervor 4" are visible.'
       },
       {
           ui: "#name-container",
           msg: 'You can also simply search for a unit by its name.',
           actions: [clearNameFilter]
       },
       {
           ui: "#name-container",
           msg: 'For instance, typing "hide" will filter down to just "Spikehide Dragon" and "Spearhide Dragon".',
           actions: [setNameFilter]
       },
       {
           ui: "#clear-filters",
           msg: 'You can click the "Clear All" button to reset all filters.',
           actions: [clearFilters]
       },
       {
           msg: 'To view this tutorial again at any time, you can click the "Help" button.  (Note: this will reset the DeckBuilder.)'
       }
    ];

    var currentPage = getCurrentPage();
    for (var i = 0; i < tutorialParts.length; i++) {
        var part = tutorialParts[i];
        if (part.showFor && part.showFor !== currentPage) {
            tutorialParts.splice(i--, 1);
        }
    }

    function showDeck() {
        $("#deck-container").accordion('option', 'active', 0);
    }

    function hideDeck() {
        $("#deck-container").accordion('option', 'active', null);
    }

    function showFilters() {
        $("#filter-container").accordion('option', 'active', 0);
    }

    function hideFilters() {
        $("#filter-container").accordion('option', 'active', null);
    }

    function showCollection() {
        $("#collection-container").accordion('option', 'active', 0);
    }

    function hideCollection() {
        $("#collection-container").accordion('option', 'active', null);
    }

    function showDetails() {
        $("#collection-container").find(".card").first().contextmenu();
    }

    function closeDetails() {
        detailsDialog.dialog('close');
    }

    function filter() {
        var fervor = $("#fervor");
        while (fervor.hasClass("selected-advanced")) {
            fervor.click();
        }
        while (!fervor.hasClass("selected")) {
            fervor.click();
        }
    }

    function advancedFilter() {
        $("#fervor").contextmenu();
        resetFocus();
    }

    function setAdvancedFilter() {
        $("#amount-min").val(4);
        resetFocus();
    }

    function saveAdvancedFilters() {
        advancedFilters.dialog('option', 'buttons')["OK"].apply(advancedFilters);
        resetFocus();
    }

    function closeAdvancedFilters() {
        advancedFilters.dialog("close");
    }

    function setNameFilter() {
        $("#nameFilter").val("hide").trigger(jQuery.Event("keyup"));
    }

    function clearNameFilter() {
        $("#nameFilter").val("").trigger(jQuery.Event("keyup"));
    }

    function clearFilters() {
        $("#clear-filters").click();
    }

    function setHash() {
        $("#hash").val("g~pAAglFpBQwrxIQWkpBglFpB4jrBC4jrBC4jrBC").change();
    }

    function moveCard() {
        $("#hash").val("g~pAAQwrxIglFpBQWkpBglFpB4jrBC4jrBC4jrBC").change();
    }

    function editCard() {
        $("#deck .card").eq(1).contextmenu();
        resetFocus();
    }

    function makeCardEdits() {
        $("#fusion").val(3);
        $("#runeChoices").val("5102").change();
        resetFocus();
    }

    function closeEditUnit() {
        optionsDialog.dialog('option', 'buttons')["Cancel"].apply(optionsDialog);
    }

    function clearHash() {
        $("#hash").val("QpLQA").change();
    }

    function resetFocus() {
        $(".ui-dialog-buttonset .ui-button:visible").first().focus();
    }

    return tutorialParts;
}