
define('singleThreaded', [
    'bgeApi',
    'matchTimer',
    'urlHelper',
    'debugLog',
    'simController',
    'simulatorBase',
    'ui',
    'matchStats'
], function (
    bgeApi,
    matchTimer,
    urlHelper,
    debugLog,
    simController,
    simulator,
    ui,
    matchStats
) {
    'use strict';

    // Initialize simulation loop - runs once per simulation session
    simController.startsim = function () {
        matchStats.totalTurns = 0;
        matchTimer.reset();
        debugLog.clear();
        matchStats.matchesPlayed = 0;

        var config = ui.getConfiguration();
        simController.setDebugLogger();
        simulator.battlegrounds = bgeApi.getBattlegrounds(config.getbattleground, config.selfbges, config.enemybges, config.mapbges, config.selectedCampaign, config.missionLevel, config.selectedRaid, config.raidLevel);

        ui.hide();

        simulator.remainingSims = config.simsToRun;
        simulator.setupDecks(config);

        matchStats.matchesWon = 0;
        matchStats.matchesLost = 0;
        matchStats.matchesDrawn = 0;
        matchStats.totalPoints = 0;

        ui.displayText(""); // Clear display
        if (!config.userControlled) {
            ui.hideTable();
            ui.setSimStatus("Initializing simulations...");
        } else {
            ui.setSimStatus("");
        }

        window.ga('send', 'event', 'simulation', 'start', 'single-threaded', config.simsToRun);
        simController.statusTimeout = setTimeout(runSims, 0, config, 0);

        return false;
    };

    // Interrupt simulations
    simController.stopsim = function () {
        matchTimer.stop();
        var elapse = matchTimer.elapsed();
        var simpersec = matchStats.matchesPlayed / elapse;
        simpersec = simpersec.toFixed(2);
        simulator.simulating = false;

        if (!simulator.user_controlled) {
            ui.setSimStatus("Simulations interrupted.", elapse, simpersec);
            ui.showWinrate();
        }
        ui.show();

        simController.onStopSims();
    };

    simController.clearStatusTimeout = function clearStatusTimeout() {
        if (simController.statusTimeout) {
            clearTimeout(simController.statusTimeout);
        }
        simController.statusTimeout = null;
    };

    function runSims(config, simsPerBatch) {
        if (simulator.user_controlled) {
            runUserControlledSim(config);
        } else if ((debugLog.enabled || debugLog.cardsPlayedOnly) && !debugLog.massDebug && !debugLog.firstLoss && !debugLog.firstWin) {
            runSim(config, true);
            simController.debugEnd();
        } else if (simulator.remainingSims > 0) {
            runSimBatch(config, simsPerBatch);
        } else {
            finishedSims();
        }
    }

    function runUserControlledSim(config) {
        if (runSim(config, true)) {
            simController.debugEnd();
        }
    }

    function runSimBatch(config, simsPerBatch) {
        // Interval output - speeds up simulations
        var simsPerSecondLastBatch = 0;
        if (simsPerBatch > 0) { // Use simsPerBatch == 0 to imply a fresh set of simulations
            simsPerSecondLastBatch = simsPerBatch / matchTimer.batchElapsed();

            ui.setSimStatus("Running simulations...", matchTimer.elapsed(), simsPerSecondLastBatch.toFixed(1));
            ui.showWinrate();
        }

        simsPerBatch = 1;
        if ((debugLog.enabled || debugLog.cardsPlayedOnly) && (debugLog.massDebug || debugLog.firstLoss || debugLog.firstWin)) {
            // Batch messes up mass debug and loss debug! let's disable batch!
        } else {
            // If we can run more at one time, then let's try to
            if (simsPerSecondLastBatch > simsPerBatch)  {
                simsPerBatch = Math.ceil(simsPerSecondLastBatch / 8);
            }
            // Also limit by how many sims are left
            if (simsPerBatch > simulator.remainingSims) {   
                simsPerBatch = simulator.remainingSims;
            }
        }

        matchTimer.startBatch();
        simController.statusTimeout = setTimeout(runSims, 1, config, simsPerBatch);
        for (var i = 0; i < simsPerBatch; i++) {  // Start a new batch
            runSim(config);
        }
    }

    function finishedSims() {
        matchTimer.stop();

        var elapse = matchTimer.elapsed();
        var simpersec = matchStats.matchesPlayed / elapse;
        simpersec = simpersec.toFixed(2);

        ui.displayText(debugLog.getLog());
        ui.setSimStatus("Simulations complete.", elapse, simpersec);
        ui.showWinrate();

        ui.show();

        simController.onEndSims();
    }

    // Initializes a single simulation - runs once before each individual simulation
    // - needs to reset the decks and fields before each simulation
    var seedtest = (urlHelper.paramValue("seedtest") || 0);
    function runSim(config, skipResults) {
        if (seedtest) {
            Math.seedrandom(seedtest++);
        }
        if (!simulator.simulate(config)) return false;
        if (!skipResults) simController.processSimResult();
    }

    simController.processSimResult = function () {

        var result;
        if (!simulator.field.player.commander.isAlive()) {
            result = false;
        } else if (!simulator.field.cpu.commander.isAlive()) {
            result = true;
        } else {
            result = 'draw';
        }

        simulator.remainingSims--;

        matchStats.processMatch(simulator, result);

        if (debugLog.enabled || debugLog.cardsPlayedOnly) {
            if (debugLog.firstLoss) {
                if (result === 'draw' || !result) {
                    simulator.remainingSims = 0;
                }
            } else if (debugLog.firstWin) {
                if (result && result !== 'draw') {
                    simulator.remainingSims = 0;
                }
            }
            simController.logger.logOutcome(result, matchStats.matchesPlayed, SIMULATOR.remainingSims);
            simController.logger.logStartBattle(simulator.remainingSims);
        }

        return result;
    };
});