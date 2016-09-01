"use strict";

(function () {

    // Initialize simulation loop - runs once per simulation session
    SIM_CONTROLLER.startsim = function () {
        card_cache = {};    // clear card cache to avoid memory bloat when simulating different decks
        total_turns = 0;
        time_start = new Date();
        time_stop = 0;
        echo = '';
        games = 0;
        run_sims_batch = 0;
        sims_left = $('#sims').val() || 1;

        SIMULATOR.user_controlled = $('#user_controlled').is(':checked');

        debug = $('#debug').is(':checked');
        mass_debug = $('#mass_debug').is(':checked');
        loss_debug = $('#loss_debug').is(':checked');
        win_debug = $('#win_debug').is(':checked');

        auto_mode = $('#auto_mode').is(':checked');
        getdeck = $('#deck').val();
        getcardlist = $('#cardlist').val();
        getordered = $('#ordered').is(':checked');
        getexactorder = $('#exactorder').is(':checked');
        getordered2 = $('#ordered2').is(':checked');
        getexactorder2 = $('#exactorder2').is(':checked');
        getdeck2 = $('#deck2').val();
        getcardlist2 = $('#cardlist2').val();
        getordered2 = $('#ordered2').is(':checked');
        getexactorder2 = $('#exactorder2').is(':checked');
        getmission = $('#mission').val();
        getraid = $('#raid').val();
        raidlevel = $('#raid_level').val();
        getsiege = $('#siege').is(':checked');
        surge = $('#surge').is(':checked');
        tower_level = $('#tower_level').val();
        tower_type = $('#tower_type').val();
        if (!getdeck2) {
            if (getmission) {
                getdeck2 = TITANS[getmission].hash;
            } else if (getraid) {
                getdeck2 = hash_encode(load_deck_raid(getraid, raidlevel));
            }
        }
        if (BATTLEGROUNDS) {
            getbattleground = getSelectedBattlegrounds();
        }

        // Set up battleground effects, if any
        SIMULATOR.battlegrounds = getBattlegrounds(getbattleground, getraid);

        // Hide interface
        toggleUI(false);

        // Display stop button
        document.getElementById('stop').style.display = 'block';

        SIMULATOR.setupDecks();

        wins = 0;
        losses = 0;
        draws = 0;

        outp(""); // Clear display
        hideTable();
        setSimStatus("Initializing simulations...");

        current_timeout = setTimeout(run_sims, 1);

        return false;
    }

    // Interrupt simulations
    SIM_CONTROLLER.stopsim = function () {
        time_stop = new Date();
        var elapse = time_elapsed();
        var simpersec = games / elapse;
        simpersec = simpersec.toFixed(2);

        // Stop the recursion
        if (current_timeout) clearTimeout(current_timeout);

        setSimStatus("Simulations interrupted.", elapse, simpersec);
        showWinrate();

        // Show interface
        toggleUI(true);

        // Hide stop button
        document.getElementById('stop').style.display = 'none';

        if (SIM_CONTROLLER.stop_sims_callback) SIM_CONTROLLER.stop_sims_callback()
    }

    function run_sims() {

        if (debug && !mass_debug && !loss_debug && !win_debug) {
            run_sim(true);
            debug_end();
        } else if (SIMULATOR.user_controlled) {
            run_sim(true);
            debug_end();
        } else if (sims_left > 0) {
            // Interval output - speeds up simulations
            if (run_sims_count >= run_sims_batch) {
                var simpersecbatch = 0;
                if (run_sims_batch > 0) { // Use run_sims_batch == 0 to imply a fresh set of simulations
                    run_sims_count = 0;
                    var temp = games / (games + sims_left) * 100;
                    temp = temp.toFixed(2);

                    var elapse = time_elapsed();

                    var batch_elapse = batch_time_elapsed();
                    if (batch_elapse == 0) {
                        simpersecbatch = 0;
                    } else {
                        simpersecbatch = run_sims_batch / batch_elapse;
                    }

                    setSimStatus("Running simulations...", elapse, simpersecbatch.toFixed(1));
                    showWinrate();
                }
                run_sims_batch = 1;
                if (simpersecbatch > run_sims_batch) // If we can run more at one time, then let's try to
                    run_sims_batch = Math.ceil(simpersecbatch / 8);
                if (run_sims_batch > sims_left) // Also limit by how many sims are left
                    run_sims_batch = sims_left;

                // Batch messes up mass debug and loss debug! Let's disable batch!
                if (debug && mass_debug) run_sims_batch = 1;
                if (debug && (loss_debug || win_debug)) run_sims_batch = 1;

                time_start_batch = new Date();
                current_timeout = setTimeout(run_sims, 1);
                for (var i = 0; i < run_sims_batch; i++) {  // Start a new batch
                    run_sim();
                }
            }

        } else {
            run_sims_count = 0;
            run_sims_batch = 0;
            time_stop = new Date();

            var elapse = time_elapsed();
            var simpersec = games / elapse;
            simpersec = simpersec.toFixed(2);
            
            if (echo) {
                outp(echo);
            }
            setSimStatus("Simulations complete.", elapse, simpersec);
            showWinrate();

            // Show interface
            toggleUI(true);

            // Hide stop button
            document.getElementById('stop').style.display = 'none';

            if (SIM_CONTROLLER.end_sims_callback) SIM_CONTROLLER.end_sims_callback();
        }
    }

    // Initializes a single simulation - runs once before each individual simulation
    // - needs to reset the decks and fields before each simulation
    function run_sim(skipResults) {
        doSetup();
        if (!SIMULATOR.simulate()) return false;
        if (!skipResults) processSimResult();
    }

    function doSetup() {

        SIMULATOR.simulation_turns = 0;

        // Reset battleground effect
        battleground = '';

        // Set up empty decks
        var deck = {
            cpu: {
                deck: []
            },
            player: {
                deck: []
            }
        }
        SIMULATOR.deck = deck;

        // Set up empty field
        var field = {
            cpu: {
                assaults: []
            },
            player: {
                assaults: []
            }
        };
        SIMULATOR.field = field;

        // Load player deck
        if (cache_player_deck_cards) {
            deck['player'] = copy_deck(cache_player_deck_cards);
        }

        // Load enemy deck
        if (cache_cpu_deck_cards) {
            deck['cpu'] = copy_deck(cache_cpu_deck_cards);
        }

        // Set up deck order priority reference
        if (getordered && !getexactorder) deck.player.ordered = copy_card_list(deck.player.deck);
        if (getordered2 && !getexactorder2) deck.cpu.ordered = copy_card_list(deck.cpu.deck);

        // Output decks for first simulation
        if (debug && (loss_debug || win_debug)) {
        } else if (suppressOutput) {
        } else if (echo == '') {
            debug_dump_decks();
        }
    }

    function processSimResult() {

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
            wins++;;
        } else {
            losses++;
        }
        games++;

        // Increment total turn count
        total_turns += SIMULATOR.simulation_turns;

        if (debug) {
            if (loss_debug) {
                if (result == 'draw') {
                    echo = 'Draw found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>DRAW</h1><br>';
                    sims_left = 0;
                } else if (result) {
                    if (!sims_left) {
                        echo = 'No losses found after ' + games + ' games. No debug output to display.<br><br>';
                        sims_left = 0;
                    } else {
                        echo = '';
                    }
                } else {
                    echo = 'Loss found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>LOSS</h1><br>';
                    sims_left = 0;
                }
            } else if (win_debug) {
                if (result && result != 'draw') {
                    echo = 'Win found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>WIN</h1><br>';
                    sims_left = 0;
                } else {
                    if (!sims_left) {
                        echo = 'No wins found after ' + games + ' games. No debug output to display.<br><br>';
                        sims_left = 0;
                    } else {
                        echo = '';
                    }
                }
            } else if (mass_debug) {
                if (result == 'draw') {
                    echo += '<br><h1>DRAW</h1><br>';
                } else if (result) {
                    echo += '<br><h1>WIN</h1><br>';
                } else {
                    echo += '<br><h1>LOSS</h1><br>';
                }
            }
        }

        if (debug && mass_debug && sims_left) echo += '<br><hr>NEW BATTLE BEGINS<hr><br>';

        return result;
    }

    // Global variables used by single-threaded simulator
    var run_sims_count = 0;
    var run_sims_batch = 0;
})();