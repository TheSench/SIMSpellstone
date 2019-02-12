(function () {
    "use strict";

    var simController = require('simController');
    var matchStats = require('matchStats');
    var ui = require('ui');

    ui.getConfiguration = function getConfiguration() {
        return {
            userControlled: false,
            cpuExactOrder: false,
            cpuHash: "QpLQAQcHQBA3KQBAiYQBgsRQBQHVQBIC!wAoJJQB",
            cpuOrdered: false,
            enemybges: "",
            mapbges: "",
            missionLevel: "7",
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
            towerType: "501"
        };
    };

    simController.startsim();

    simController.endSimsCallback = function() {
        console.log(matchStats.matchesWon / matchStats.matchesPlayed);
    };
})();