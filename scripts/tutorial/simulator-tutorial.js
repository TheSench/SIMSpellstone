function getTutorialScript() {
    var tutorialParts = [
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Simulator.",
       },
       {
           ui: "#setup-container",
           msg: 'Here is where you set everything up for a simulation.',
           actions: [showSetup]
       },
       {
           ui: "#setup-container",
           msg: 'When you are done, you can click the "Setup" bar to hide this section.',
           actions: [hideSetup]
       },
       {
           ui: "#setup-container",
           msg: 'Clicking it again will open it back up.',
           actions: [showSetup]
       },
       {
           ui: "#attacker-container",
           msg: 'Use this section to set up the deck for the attacker.'
       },
       {
           ui: "#edit-player",
           msg: 'Click "Edit" to open the DeckBuilder and create a deck.'
       },
       {
           ui: "#load-player",
           msg: 'Click "Load" to choose a deck from the ones you have saved in the DeckBuilder.'
       },
       {
           ui: "#attacker-hash-container",
           msg: 'If you have a deck hash, you can simply paste it here as well.'
       },
       {
           ui: "#attacker-advanced",
           msg: 'This section contains some additional settings for the attacker that determine how their deck is played.',
       },
       {
           ui: "#auto-container",
           msg: 'Check this to have fights run on auto, rather than playing them yourself.',
           showFor: "battle"
       },
       {
           ui: "#auto-container",
           msg: 'Setting the attacker to "auto" also enables the "Ordered" and "Do Not Shuffle" options.',
           showFor: "battle"
       },
       {
           ui: "#ordered-container",
           msg: 'Check this to have the AI attempt to play the attacker\'s deck as close as possible to the order that the cards are listed.'
       },
       {
           ui: "#exactorder-container",
           msg: 'Check this to disable shuffling of the attacker\'s deck.'
       },
       {
           ui: "#defender-container",
           msg: 'Use this section to set up the deck for the defender.'
       },
       {
           ui: "#defender-hash-container",
           msg: 'You can manually create a deck for the defender here.'
       },
       {
           ui: "#pve-container",
           msg: 'Or you can choose a PvE deck to sim against.',
           actions: [clearCampaign]
       },
       {
           ui: "#campaign-container",
           msg: 'To choose a campaign mission, first pick a Campaign from the dropdown...',
           actions: [chooseCampaign]
       },
       {
           ui: "#mission-container",
           msg: '... then pick a Mission from the mission dropdown.',
           actions: [clearRaid, chooseCampaign, chooseMission]
       },
       {
           ui: "#raid-container",
           msg: 'To fight against a raid boss, pick the desired Raid from the dropdown',
           actions: [clearCampaign, chooseRaid]
       },
       {
           ui: "#defender-advanced",
           msg: 'This section contains some additional settings for the defender that determine how their deck is played.',
           actions: [clearRaid],
       },
       {
           ui: "#surge-container",
           msg: 'Check this to have the defender go first.',
           showFor: "battle"
       },
       {
           ui: "#tower-container",
           msg: 'Use these fields to set up a tower for the defender.'
       },
       {
           ui: "#siege-container",
           msg: 'Check this field to turn the tower on.'
       },
       {
           ui: "#tower_level",
           msg: 'This field determines the BR of the defender.  The tower\'s level is one less than the defender\'s BR.'
       },
       {
           ui: "#tower_type",
           msg: 'This field determines which type of tower the defender will have.'
       },
       {
           ui: "#bge-container",
           msg: 'Check/uncheck boxes here to set active battleground effects.',
           actions: [hideView, showSetup]
       },
       {
           ui: "#view-container",
           msg: 'Click "View" to display the currently set decks for the attacker and defender.',
           actions: [hideSetup, showView]
       },
       {
           ui: "#view-container",
           msg: 'Click it again to hide it.',
           actions: [hideView]
       },
       {
           ui: "#sims-container",
           msg: 'This field determines how many fights to run.',
           showFor: "titans"
       },
       {
           ui: "#btn_simulate",
           msg: 'Click "Simulate" to run a batch of fights.',
           showFor: "titans"
       },
       {
           ui: "#btn_simulate",
           msg: 'Click "Battle" to start a fight.',
           showFor: "battle"
       },
       {
           ui: "#generate_link",
           msg: 'Click "Generate Link" to create a link that will open this tool with all of the current settings.'
       },
       {
           msg: 'To view this tutorial again at any time, you can click the "Help" button.  (Note: this will reset the Simulator.)'
       }
    ];

    var currentPage = getCurrentPage();
    for (var i = 0; i < tutorialParts.length; i++) {
        var part = tutorialParts[i];
        if (part.showFor && part.showFor !== currentPage) {
            tutorialParts.splice(i--, 1);
        }
    }

    function hideSetup() {
        $("#setup-container").accordion('option', 'active', null);
    }

    function showSetup() {
        $("#setup-container").accordion('option', 'active', 0);
    }

    function hideView() {
        $("#view-container").accordion('option', 'active', null);
    }

    function showView() {
        $("#view-container").accordion('option', 'active', 0);
    }

    function chooseCampaign() {
        $('#campaign').val(1).change();
    }

    function chooseMission() {
        $('#mission').val(11).change();
    }

    function clearCampaign() {
        $('#campaign').val('').change();
    }

    function chooseRaid() {
        $('#raid').val(24005).change();
    }

    function clearRaid() {
        $('#raid').val('').change();
    }

    return tutorialParts;
}