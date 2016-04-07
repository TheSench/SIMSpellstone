"use strict";

var SIM_CONTROLLER;

(function () {
    SIM_CONTROLLER = {};

    /*
    var uids = {};
    SIMULATOR.setupField = (function () {
        var setupField = SIMULATOR.setupField;

        return function (field, deck) {
            setupField(field, deck);

            uids = {};
            var commander = field.player.commander;
            commander.uid = -1;
            uids[-1] = commander;
            var cards = deck.player.deck;
            for (var i = 0, len = cards.length; i < len; i++) {
                var card = cards[i];
                var uid = i + 1;
                card.uid = uid;
                uids[uid] = card;
            }

            var commander = field.cpu.commander;
            commander.uid = -2;
            uids[-2] = commander;
            var cards = deck.cpu.deck;
            for (var i = 0, len = cards.length; i < len; i++) {
                var card = cards[i];
                var uid = i + 101;
                card.uid = uid;
                uids[uid] = card;
            }
            field.uids = uids;
        };
    })();
    */

    // Initialize simulation loop - runs once per simulation session
    SIM_CONTROLLER.startsim = function (autostart) {
        orders = {};

        if (_DEFINED('autolink') && !autostart) {
            window.location.href = generate_link(1, 1);
            return false;
        }

        CARD_GUI.clearCardSpace();

        card_cache = {};    // clear card cache to avoid memory bloat when simulating different decks
        total_turns = 0;
        total_points = 0;
        time_start = new Date();
        time_stop = 0;
        echo = '';
        games = 0;
        run_sims_batch = 0;
        sims_left = document.getElementById('sims').value;
        if (!sims_left) sims_left = 1;
        var d = document.getElementById('user_controlled');
        if (d) {
            SIMULATOR.user_controlled = d.checked;
        }
        debug = document.getElementById('debug').checked;
        var d = document.getElementById('auto_mode');
        if (d) {
            auto_mode = d.checked;
        }
        mass_debug = document.getElementById('mass_debug').checked;
        loss_debug = document.getElementById('loss_debug').checked;
        win_debug = document.getElementById('win_debug').checked;
        if ((loss_debug || win_debug) && mass_debug) mass_debug = false;
        getdeck = document.getElementById('deck').value;
        getcardlist = document.getElementById('cardlist').value;
        getordered = document.getElementById('ordered').checked;
        getexactorder = document.getElementById('exactorder').checked;
        getmission = document.getElementById('mission').value;
        getdeck2 = TITANS[getmission];
        if (getdeck2) getdeck2 = getdeck2.hash;
        if (BATTLEGROUNDS) {
            getbattleground = [];
            var bgCheckBoxes = document.getElementsByName("battleground");
            for (var i = 0; i < bgCheckBoxes.length; i++) {
                var checkbox = bgCheckBoxes[i];
                if (checkbox && checkbox.checked) {
                    getbattleground.push(i);
                }
            }
            getbattleground = getbattleground.join();
        }
        surge = document.getElementById('surge').checked;

        // Set up battleground effects, if any
        var battlegrounds = {
            onCreate: [],
            onTurn: [],
        };
        if (getbattleground) {
            var selected = getbattleground.split(",");
            for (i = 0; i < selected.length; i++) {
                var id = selected[i];
                var battleground = BATTLEGROUNDS[id];
                if (battleground.effect.skill) {
                    battlegrounds.onTurn.push(MakeBattleground(battleground.name, battleground.effect.skill));
                } else if (battleground.effect.evolve_skill || battleground.effect.add_skill) {
                    battlegrounds.onCreate.push(MakeSkillModifier(battleground.name, battleground.effect));
                }
            }
        }

        SIMULATOR.battlegrounds = battlegrounds;

        // Hide interface
        document.getElementById('ui').style.display = 'none';

        // Display stop button
        document.getElementById('stop').style.display = 'block';

        SIMULATOR.setupDecks();

        max_turns = 50;

        wins = 0;
        losses = 0;
        draws = 0;

        outp('<strong>Initializing simulations...</strong>');

        current_timeout = setTimeout(run_sims, 1);

        return false;
    }

    // Interrupt simulations
    SIM_CONTROLLER.stopsim = function () {
        time_stop = new Date();
        var elapse = time_elapsed();
        var simpersec = games / elapse;
        simpersec = simpersec.toFixed(1);

        // Stop the recursion
        if (current_timeout) clearTimeout(current_timeout);

        outp(echo + '<strong>Simulations interrupted.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable());
        if (SIMULATOR.user_controlled) {
            CARD_GUI.draw_cards(SIMULATOR.field);
        }
        // Show interface
        document.getElementById('ui').style.display = 'block';

        // Hide stop button
        document.getElementById('stop').style.display = 'none';
    }

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end() {
        if (SIMULATOR.simulating) {
            return;
        }

        var result = processSimResult();

        time_stop = new Date();

        if (result == 'draw') {
            outp(echo + '<br><h1>DRAW</h1><br>' + gettable());
        } else if (result) {
            outp(echo + '<br><h1>WIN</h1><br>' + gettable());
        } else {
            outp(echo + '<br><h1>LOSS</h1><br>' + gettable());
        }
        CARD_GUI.draw_cards(SIMULATOR.field);

        // Show interface
        document.getElementById('ui').style.display = 'block';

        // Hide stop button
        document.getElementById('stop').style.display = 'none';

        if (SIMULATOR.user_controlled) {
            scroll_to_end();
        }
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
                    temp = temp.toFixed(1);

                    var elapse = time_elapsed();

                    var batch_elapse = batch_time_elapsed();
                    if (batch_elapse == 0) {
                        simpersecbatch = 0;
                    } else {
                        simpersecbatch = run_sims_batch / batch_elapse;
                    }

                    outp(echo + '<strong>Running simulations...</strong> (' + games + '/' + (games + sims_left) + ') ' + temp + '%<br>' + elapse + ' seconds<br>' + simpersecbatch.toFixed(1) + ' simulations per second<br>' + gettable());
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
            simpersec = simpersec.toFixed(1);

            outp(echo + '<br><strong>Simulations complete.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable() + getOrderStatsTable());

            // Show interface
            document.getElementById('ui').style.display = 'block';

            // Hide stop button
            document.getElementById('stop').style.display = 'none';

            scroll_to_end();
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

        var points = SIMULATOR.CalculatePoints();
        if (trackStats) SIMULATOR.updateStats(result, points);

        // Increment total turn count
        total_turns += SIMULATOR.simulation_turns;
        total_points += points;

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
    SIM_CONTROLLER.end_sims_callback = false;
    SIM_CONTROLLER.debug_end = debug_end;
})();