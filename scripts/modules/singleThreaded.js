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
        run_sims_batch = 0;

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
        simController.statusTimeout = setTimeout(runSims, 0, config);

        return false;
    };

    // Interrupt simulations
    simController.stopsim = function () {
        matchTimer.stop();
        var elapse = matchTimer.elapsed();
        var simpersec = matchStats.matchesPlayed / elapse;
        simpersec = simpersec.toFixed(2);
        simulator.simulating = false;

        // Stop the recursion
        if (!simulator.user_controlled) {
            ui.setSimStatus("Simulations interrupted.", elapse, simpersec);
            ui.showWinrate();
        }
        ui.show();

        if (simController.stop_sims_callback) simController.stop_sims_callback();
    };

    simController.clearStatusTimeout = function clearStatusTimeout() {
        if (simController.statusTimeout) {
            clearTimeout(simController.statusTimeout);
        }
        simController.statusTimeout = null;
    };

    function runSims(config) {
        if (simulator.user_controlled) {
            if (runSim(config, true)) {
                simController.debugEnd();
            }
        } else if ((debugLog.enabled || debugLog.cardsPlayedOnly) && !debugLog.massDebug && !debugLog.firstLoss && !debugLog.firstWin) {
            runSim(config, true);
            simController.debugEnd();
        } else if (simulator.remainingSims > 0) {
            // Interval output - speeds up simulations
            if (run_sims_count >= run_sims_batch) {
                var simpersecbatch = 0;
                if (run_sims_batch > 0) { // Use run_sims_batch == 0 to imply a fresh set of simulations
                    run_sims_count = 0;
                    var elapse = matchTimer.elapsed();

                    var batch_elapse = matchTimer.batchElapsed();
                    if (batch_elapse === 0) {
                        simpersecbatch = 0;
                    } else {
                        simpersecbatch = run_sims_batch / batch_elapse;
                    }

                    ui.setSimStatus("Running simulations...", elapse, simpersecbatch.toFixed(1));
                    ui.showWinrate();
                }
                run_sims_batch = 1;
                if (simpersecbatch > run_sims_batch) // If we can run more at one time, then var's try to
                    run_sims_batch = Math.ceil(simpersecbatch / 8);
                if (run_sims_batch > simulator.remainingSims) // Also limit by how many sims are left
                    run_sims_batch = simulator.remainingSims;

                // Batch messes up mass debug and loss debug! var's disable batch!
                if ((debugLog.enabled || debugLog.cardsPlayedOnly) && (debugLog.massDebug || debugLog.firstLoss || debugLog.firstWin)) {
                    run_sims_batch = 1;
                }

                matchTimer.startBatch();
                simController.statusTimeout = setTimeout(runSims, 1, config);
                for (var i = 0; i < run_sims_batch; i++) {  // Start a new batch
                    runSim(config);
                }
            }
        } else {
            run_sims_count = 0;
            run_sims_batch = 0;
            matchTimer.stop();

            var elapse = matchTimer.elapsed();
            var simpersec = matchStats.matchesPlayed / elapse;
            simpersec = simpersec.toFixed(2);

            ui.displayText(debugLog.getLog());
            ui.setSimStatus("Simulations complete.", elapse, simpersec);
            ui.showWinrate();

            ui.show();

            if (simController.endSimsCallback) simController.endSimsCallback();
        }
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
        }
        else if (!simulator.field.cpu.commander.isAlive()) {
            result = true;
        }
        else {
            result = 'draw';
        }

        if (run_sims_batch > 0) {
            if (simulator.remainingSims > 0) simulator.remainingSims--;
            run_sims_count++;
        }

        // Increment wins/losses/games
        if (result === 'draw') {
            matchStats.matchesDrawn++;
        } else if (result) {
            matchStats.matchesWon++;
        } else {
            matchStats.matchesLost++;
        }
        matchStats.totalPoints += simulator.calculatePoints();
        matchStats.matchesPlayed++;

        // Increment total turn count
        matchStats.totalTurns += simulator.simulation_turns;

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

    // Global variables used by single-threaded simulator
    var run_sims_count = 0;
    var run_sims_batch = 0;
});