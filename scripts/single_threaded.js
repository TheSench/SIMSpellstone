"use strict";

(function () {
    var bgeApi = require('bgeApi');
    var matchTimer = require('matchTimer');
    var urlHelpers = require('urlHelpers');
    var debugLog = require('debugLog');

    // Initialize simulation loop - runs once per simulation session
    SIM_CONTROLLER.startsim = function () {
        total_turns = 0;
        matchTimer.reset();
        debugLog.clear();
        games = 0;
        run_sims_batch = 0;

        SIM_CONTROLLER.getConfiguration();

        // Set up battleground effects, if any
        SIMULATOR.battlegrounds = bgeApi.getBattlegrounds(getbattleground, selfbges, enemybges, mapbges, getcampaign, missionlevel, getraid, raidlevel);

        hideUI();

        SIMULATOR.setupDecks();

        wins = 0;
        losses = 0;
        draws = 0;
        points = 0;

        outp(""); // Clear display
        if (!SIMULATOR.user_controlled) {
            hideTable();
            setSimStatus("Initializing simulations...");
        } else {
            setSimStatus("");
        }

        window.ga('send', 'event', 'simulation', 'start', 'single-threaded', sims_left);
        current_timeout = setTimeout(run_sims);

        return false;
    };

    // Interrupt simulations
    SIM_CONTROLLER.stopsim = function () {
        matchTimer.stop();
        var elapse = matchTimer.elapsed();
        var simpersec = games / elapse;
        simpersec = simpersec.toFixed(2);
        SIMULATOR.simulating = false;

        // Stop the recursion
        if (current_timeout) clearTimeout(current_timeout);
        if (!SIMULATOR.user_controlled) {
            setSimStatus("Simulations interrupted.", elapse, simpersec);
            showWinrate();
        }
        showUI();

        if (SIM_CONTROLLER.stop_sims_callback) SIM_CONTROLLER.stop_sims_callback();
    };

    function run_sims() {
        if (SIMULATOR.user_controlled) {
            if (run_sim(true)) {
                SIM_CONTROLLER.debug_end();
            }
        } else if ((debugLog.enabled || play_debug) && !mass_debug && !loss_debug && !win_debug) {
            run_sim(true);
            SIM_CONTROLLER.debug_end();
        } else if (sims_left > 0) {
            // Interval output - speeds up simulations
            if (run_sims_count >= run_sims_batch) {
                var simpersecbatch = 0;
                if (run_sims_batch > 0) { // Use run_sims_batch == 0 to imply a fresh set of simulations
                    run_sims_count = 0;
                    var temp = games / (games + sims_left) * 100;
                    temp = temp.toFixed(2);

                    var elapse = matchTimer.elapsed();

                    var batch_elapse = matchTimer.batchElapsed();
                    if (batch_elapse == 0) {
                        simpersecbatch = 0;
                    } else {
                        simpersecbatch = run_sims_batch / batch_elapse;
                    }

                    setSimStatus("Running simulations...", elapse, simpersecbatch.toFixed(1));
                    showWinrate();
                }
                run_sims_batch = 1;
                if (simpersecbatch > run_sims_batch) // If we can run more at one time, then var's try to
                    run_sims_batch = Math.ceil(simpersecbatch / 8);
                if (run_sims_batch > sims_left) // Also limit by how many sims are left
                    run_sims_batch = sims_left;

                // Batch messes up mass debug and loss debug! var's disable batch!
                if ((debugLog.enabled || play_debug) && (mass_debug || loss_debug || win_debug)) run_sims_batch = 1;

                matchTimer.startBatch();
                current_timeout = setTimeout(run_sims, 1);
                for (var i = 0; i < run_sims_batch; i++) {  // Start a new batch
                    run_sim();
                }
            }
        } else {
            run_sims_count = 0;
            run_sims_batch = 0;
            matchTimer.stop();

            var elapse = matchTimer.elapsed();
            var simpersec = games / elapse;
            simpersec = simpersec.toFixed(2);

            outp(debugLog.getLog());
            setSimStatus("Simulations complete.", elapse, simpersec);
            showWinrate();

            showUI();

            if (SIM_CONTROLLER.end_sims_callback) SIM_CONTROLLER.end_sims_callback();
        }
    }

    // Initializes a single simulation - runs once before each individual simulation
    // - needs to reset the decks and fields before each simulation
    var seedtest = (urlHelpers.paramValue("seedtest") || 0);
    function run_sim(skipResults) {
        if (seedtest) {
            Math.seedrandom(seedtest++);
        }
        if (!SIMULATOR.simulate()) return false;
        if (!skipResults) SIM_CONTROLLER.processSimResult();
    }

    SIM_CONTROLLER.processSimResult = function () {

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
            if (sims_left > 0) sims_left--;
            run_sims_count++;
        }

        // Increment wins/losses/games
        if (result == 'draw') {
            draws++;
        } else if (result) {
            wins++;
        } else {
            losses++;
        }
        points += SIMULATOR.calculatePoints();
        games++;

        // Increment total turn count
        total_turns += SIMULATOR.simulation_turns;

        if (debugLog.enabled || play_debug) {
            if (loss_debug) {
                if (result === 'draw') {
                    debugLog.prependLines('Draw found after ' + games + ' games. Displaying debug output...', '');
                    debugLog.appendLines('', '<h1>DRAW</h1>');
                    sims_left = 0;
                } else if (result) {
                    debugLog.clear();
                    if (!sims_left) {
                        debugLog.appendLines('No losses found after ' + games + ' games. No debug output to display.');
                    }
                } else {
                    debugLog.prependLines('Loss found after ' + games + ' games. Displaying debug output...', '');
                    debugLog.appendLines('', '<h1>LOSS</h1>');
                    sims_left = 0;
                }
            } else if (win_debug) {
                if (result && result !== 'draw') {
                    debugLog.prependLines('Win found after ' + games + ' games. Displaying debug output...', '');
                    debugLog.appendLines('', '<h1>WIN</h1>');
                    sims_left = 0;
                } else {
                    debugLog.clear();
                    if (!sims_left) {
                        debugLog.appendLines('No wins found after ' + games + ' games. No debug output to display.');
                    }
                }
            } else if (mass_debug) {
                debugLog.appendLines('');
                if (result === 'draw') {
                    debugLog.appendLines('<h1>DRAW</h1>');
                } else if (result) {
                    debugLog.appendLines('<h1>WIN</h1>');
                } else {
                    debugLog.appendLines('<h1>LOSS</h1>');
                }
            }

            if (mass_debug && sims_left) {
                debugLog.appendLines('', '<hr>NEW BATTLE BEGINS<hr>');
            }
        }

        return result;
    };

    // Global variables used by single-threaded simulator
    var run_sims_count = 0;
    var run_sims_batch = 0;
})();