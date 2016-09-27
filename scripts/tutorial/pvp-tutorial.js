function getTutorialScript() {
    var tutorialParts = [
       {
           msg: "Welcome to SIM Spellstone!  This is a brief tutorial of how to use the Live PvP functions.",
       },
       {
           ui: "#attacker-container",
           msg: 'First, set up your deck.',
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
           ui: "#battlefield-container",
           msg: 'If you want to be the attacker, set up the battlefield.',
           actions: [clickStop, showSetup]
       },
       {
           ui: "#tournament-container",
           msg: 'If you want the attacker\'s first card to not tick down right away, you can check this box.',
           actions: [showSetup]
       },
       {
           ui: "#enemyPeerID",
           msg: 'Then, paste your opponent\'s ID into the ID field.',
           actions: [hideSetup]
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

    return tutorialParts;
}