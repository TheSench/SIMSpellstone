(function () {
    "use strict";

    var simController = require('simController');
    var matchStats = require('matchStats');
    var base64 = require('base64');
    var ui = require('ui');
    var matchTimer = require('matchTimer');
    var urlHelper = require('urlHelper');

    ui.getConfiguration = function getConfiguration() {
        return {
            playerHash: urlHelper.paramValue('deck1'),
            playerOrdered: urlHelper.paramDefined("ordered"),
            playerExactOrder: urlHelper.paramDefined("exactorder"),

            cpuHash: urlHelper.paramValue('deck2'),
            cpuOrdered: urlHelper.paramDefined("ordered2"),
            cpuExactOrder: urlHelper.paramDefined("exactorder2"),

            userControlled: false,
            selectedBges: getBgesFromHash('bges'),
            selfbges: getBgesFromHash('selfbges'),
            enemybges: getBgesFromHash('enemybges'),
            mapbges: getBgesFromHash('mapBges'),

            selectedCampaign: urlHelper.paramValue('campaign'),
            selectedMission: urlHelper.paramValue('mission'),
            missionLevel: (urlHelper.paramValue('mission_level') || '7'),
            selectedRaid: urlHelper.paramValue('raid'),
            raidLevel: (urlHelper.paramValue('raid_level') || '25'),
            simsToRun: (urlHelper.paramValue('sims') || "10000"),

            surgeMode: urlHelper.paramDefined("surge"),
            tournamentMode: urlHelper.paramDefined("tournament"),

            siegeMode: urlHelper.paramDefined("siege"),
            towerLevel: Math.min(Math.max(urlHelper.paramValue('tower_level') || 18, 0), 18),
            towerType: (urlHelper.paramValue('tower_type') || 501)
        };
    };

    function getBgesFromHash(paramName) {
        var hashedBges = urlHelper.paramValue(paramName);
        var bges = [];
		if (hashedBges) {
			// Each BGE is a 2-character ID in Base64
			for (var i = 0; i < hashedBges.length; i += 2) {
                bges.push(base64.toDecimal(hashedBges.substring(i, i + 2)));
            }
        }
        return bges.join(',');
    }

    simController.startsim();

    simController.endSimsCallback = function() {
        
        var elapse = matchTimer.elapsed();
        var simpersec = (matchStats.matchesPlayed / elapse).toFixed(2);
        console.log("Sims per second:", simpersec);

        var winrate = (matchStats.matchesWon / matchStats.matchesPlayed * 100).toFixed(2);
        console.log("Winrate:", winrate);
    };
})();