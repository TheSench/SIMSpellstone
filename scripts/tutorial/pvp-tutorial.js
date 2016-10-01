function getTutorialScript() {
    var tutorialParts = [
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Live PvP functions.",
           actions: [showSetup, clearID]
       },
       {
           ui: "#attacker-hash-container",
           msg: 'First, set up your deck.'
       },
       {
           ui: "#self-battleground",
           msg: 'Then add any personal BGEs (totems) you want to use.',
           actions: [showSetup]
       },
       {
           ui: "#btn_simulate",
           msg: 'If you wish to be the defender, you\'re almost done.  Click "Ready" to start waiting for a battle request.',
           actions: [clickReady, clickStop, hideSetup]
       },
       {
           ui: "#myPeerID",
           msg: 'Then copy your ID and send it to your opponent (they will need this to connect to you).',
           actions: [clickReady]
       },
       {
           ui: "#btnStop",
           msg: 'Click "Stop" at any time to stop waiting and edit your settings again.',
           actions: [clickReady, hideSetup]
       },
       {
           msg: 'If you want to be the attacker, you are in charge of choosing the match type(s) and battleground effects.',
           actions: [clickStop, showSetup]
       },
       {
           ui: "#first-player-advantage-container",
           msg: 'This section lets you pick various options for dealing with "First-Player Advantage".',
       },
       {
           ui: "#surge-container",
           msg: 'This setting makes the defender go first.',
       },
       {
           ui: "#tournament-container",
           msg: 'This setting causes the attacker\'s first card to not tick down right away.',
       },
       {
           ui: "#tower-container",
           msg: 'These settings will provide the defender with the specified tower.'
       },
       {
           ui: "#battlefield-container",
           msg: 'Configure the desired battleground effects for the match here.'
       },
       {
           msg: "When you configured have the desired match settings, it is time to start the match.",
           actions: [clearID, showSetup]
       },
       {
           ui: "#enemyPeerID",
           msg: 'Paste your opponent\'s ID into the ID field.',
           actions: [setID, hideSetup]
       },
       {
           ui: "#btn_simulate",
           msg: 'Finally, click "Connect!" to start the fight.'
       },
    ];

    var currentPage = getCurrentPage();
    for (var i = 0; i < tutorialParts.length; i++) {
        var part = tutorialParts[i];
        if (part.showFor && part.showFor !== currentPage) {
            tutorialParts.splice(i--, 1);
        }
    }
    
    function clickReady() {
        $("#btn_simulate").click();
    }

    function clickStop() {
        $("#btnStop").click();
    }

    function showSetup() {
        $("#setup-container").accordion('option', 'active', 0);
    }

    function hideSetup() {
        $("#setup-container").accordion('option', 'active', null);
    }

    function clearID() {
        $("#enemyPeerID").val("").change();
    }

    function setID() {
        var peerID = $("#myPeerID").val();
        peerID = peerID.split("").reverse().join("");
        $("#enemyPeerID").val(peerID).change();
    }

    return tutorialParts;
}