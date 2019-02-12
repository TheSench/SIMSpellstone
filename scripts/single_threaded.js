(function () {
    "use strict";

    var bgeApi = require('bgeApi');
    var matchTimer = require('matchTimer');
    var urlHelpers = require('urlHelpers');
    var debugLog = require('debugLog');
    var simController = require('simController');
    var ui = require('ui');
    var matchStats = require('matchStats');

    // Initialize simulation loop - runs once per simulation session
    simController.startsim = function () {
        matchStats.totalTurns = 0;
        matchTimer.reset();
        debugLog.clear();
        matchStats.matchesPlayed = 0;
        run_sims_batch = 0;

        var config = ui.getConfiguration();
        SIMULATOR.battlegrounds = bgeApi.getBattlegrounds(config.getbattleground, config.selfbges, config.enemybges, config.mapbges, config.selectedCampaign, config.missionLevel, config.selectedRaid, config.raidLevel);

        ui.hide();

        SIMULATOR.remainingSims = config.simsToRun;
        SIMULATOR.setupDecks(config);

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
        current_timeout = setTimeout(runSims, 0, config);

        return false;
    };

    // Interrupt simulations
    simController.stopsim = function () {
        matchTimer.stop();
        var elapse = matchTimer.elapsed();
        var simpersec = matchStats.matchesPlayed / elapse;
        simpersec = simpersec.toFixed(2);
        SIMULATOR.simulating = false;

        // Stop the recursion
        if (current_timeout) clearTimeout(current_timeout);
        if (!SIMULATOR.user_controlled) {
            ui.setSimStatus("Simulations interrupted.", elapse, simpersec);
            ui.showWinrate();
        }
        ui.show();

        if (simController.stop_sims_callback) simController.stop_sims_callback();
    };

    function runSims(config) {
        if (SIMULATOR.user_controlled) {
            if (runSim(config, true)) {
                simController.debug_end();
            }
        } else if ((debugLog.enabled || debugLog.cardsPlayedOnly) && !debugLog.massDebug && !debugLog.firstLoss && !debugLog.firstWin) {
            runSim(config, true);
            simController.debug_end();
        } else if (SIMULATOR.remainingSims > 0) {
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
                if (run_sims_batch > SIMULATOR.remainingSims) // Also limit by how many sims are left
                    run_sims_batch = SIMULATOR.remainingSims;

                // Batch messes up mass debug and loss debug! var's disable batch!
                if ((debugLog.enabled || debugLog.cardsPlayedOnly) && (debugLog.massDebug || debugLog.firstLoss || debugLog.firstWin)) run_sims_batch = 1;

                matchTimer.startBatch();
                current_timeout = setTimeout(runSims, 1, config);
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
    var seedtest = (urlHelpers.paramValue("seedtest") || 0);
    function runSim(config, skipResults) {
        if (seedtest) {
            Math.seedrandom(seedtest++);
        }
        if (!SIMULATOR.simulate(config)) return false;
        if (!skipResults) simController.processSimResult();
    }

    simController.processSimResult = function () {

        var result;
        if (!SIMULATOR.field.player.commander.isAlive()) {
            result = false;
        }
        else if (!SIMULATOR.field.cpu.commander.isAlive()) {
            result = true;
        }
        else {
            result = 'draw';
        }

        if (run_sims_batch > 0) {
            if (SIMULATOR.remainingSims > 0) SIMULATOR.remainingSims--;
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
        matchStats.totalPoints += SIMULATOR.calculatePoints();
        matchStats.matchesPlayed++;

        // Increment total turn count
        matchStats.totalTurns += SIMULATOR.simulation_turns;

        if (debugLog.enabled || debugLog.cardsPlayedOnly) {
            if (debugLog.firstLoss) {
                if (result === 'draw') {
                    debugLog.prependLines('Draw found after ' + matchStats.matchesPlayed + ' games. Displaying debug output...', '');
                    debugLog.appendLines('', '<h1>DRAW</h1>');
                    SIMULATOR.remainingSims = 0;
                } else if (result) {
                    debugLog.clear();
                    if (!SIMULATOR.remainingSims) {
                        debugLog.appendLines('No losses found after ' + matchStats.matchesPlayed + ' games. No debug output to display.');
                    }
                } else {
                    debugLog.prependLines('Loss found after ' + matchStats.matchesPlayed + ' games. Displaying debug output...', '');
                    debugLog.appendLines('', '<h1>LOSS</h1>');
                    SIMULATOR.remainingSims = 0;
                }
            } else if (debugLog.firstWin) {
                if (result && result !== 'draw') {
                    debugLog.prependLines('Win found after ' + matchStats.matchesPlayed + ' games. Displaying debug output...', '');
                    debugLog.appendLines('', '<h1>WIN</h1>');
                    SIMULATOR.remainingSims = 0;
                } else {
                    debugLog.clear();
                    if (!SIMULATOR.remainingSims) {
                        debugLog.appendLines('No wins found after ' + matchStats.matchesPlayed + ' games. No debug output to display.');
                    }
                }
            } else if (debugLog.massDebug) {
                debugLog.appendLines('');
                if (result === 'draw') {
                    debugLog.appendLines('<h1>DRAW</h1>');
                } else if (result) {
                    debugLog.appendLines('<h1>WIN</h1>');
                } else {
                    debugLog.appendLines('<h1>LOSS</h1>');
                }
            }

            if (debugLog.massDebug && SIMULATOR.remainingSims) {
                debugLog.appendLines('', '<hr>NEW BATTLE BEGINS<hr>');
            }
        }

        return result;
    };

    // Global variables used by single-threaded simulator
    var run_sims_count = 0;
    var run_sims_batch = 0;
})();