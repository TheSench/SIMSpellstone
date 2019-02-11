(function () {
    "use strict";

    var simController = require('simController');
    var matchStats = require('matchStats');

    simController.getConfiguration = function getConfiguration() {
        return {
            auto_mode: undefined,
            cpuExactOrder: false,
            cpuHash: "QpLQAQcHQBA3KQBAiYQBgsRQBQHVQBIC!wAoJJQB",
            cpuOrdered: false,
            enemybges: "",
            loss_debug: false,
            mapbges: "",
            mass_debug: false,
            missionLevel: "7",
            play_debug: false,
            playerExactOrder: false,
            playerHash: "QpLQAQcHQBA3KQBAiYQBgsRQBQHVQBIC!wAoJJQB",
            playerOrdered: false,
            raidLevel: "25",
            selectedBges: "121,122",
            selectedCampaign: "",
            selectedMission: "",
            selectedRaid: "",
            selfbges: "",
            siegeMode: false,
            simsToRun: "10000",
            surgeMode: false,
            tournamentMode: false,
            towerLevel: "18",
            towerType: "501",
            win_debug: false
        };
    };

    simController.startsim();

    simController.endSimsCallback = function() {
        console.log(matchStats.matchesWon / matchStats.matchesPlayed);
    };
})();