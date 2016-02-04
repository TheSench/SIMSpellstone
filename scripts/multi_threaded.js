if (use_workers) {

    // Global variables needed by the GUI thread when workers are used
    var workers = [];
    var max_workers = 1;
    var smoothing_factor = 5;	// Used by the progress reporting logic, determines how many .1 second intervals back to go for sims/sec calculations
    var progress = false;

    // Create a new worker object and add a listener to handle messages from it.
    var createWorker = function (id) {
        var worker = new Worker('scripts/worker.js');
        worker.postMessage = worker.webkitPostMessage || worker.postMessage;
        worker.id = id;
        // Check if Transferable objects are supported: http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast
        // and add the appropriate message listener
        var ab = new ArrayBuffer(1);
        worker.postMessage(ab, [ab]);

        var use_transferables = !ab.byteLength; // If Transferable Objects are supported, ab will be cleared when postMessage is called (it gets "transferred" to the receiver)
        if (use_transferables) {
            // Transferable Objects are supported.
            worker.addEventListener('message', ProcessTransferableObjectsMessage, false);
        } else {
            // Transferable Objectss are NOT supported.
            worker.addEventListener('message', ProcessStructuredCloningMessage, false);
        }

        // Load cache script and determine which type of messaging to use
        worker.postMessage({ "cmd": "initializeWorker", "url": document.location.href, "use_transferables": use_transferables });
        return worker;
    }

    var RESULTS = 0;
    var STATS = 1;

    // Handle messages from the worker thread using Transferable Objects
    // (Transferable Objects are faster, but they are not supported
    // by all browsers.)
    var ProcessTransferableObjectsMessage = function (e) {
        if (sims_left) {
            progress = true;
            var msg = e.data;
            var view = new DataView(msg, 0, 4);
            switch (view.getInt32(0)) {
                case RESULTS:
                    view = new Int32Array(msg, 4, 6);
                    var num_games = view[0];
                    var num_wins = view[1];
                    var num_draws = view[2];
                    var num_losses = view[3];
                    var turns = view[4];
                    var points = view[5];
                    view = new DataView(msg, 28, 8);
                    var time_started = view.getFloat64(0);
                    // If a worker's echo is included in results...
                    if (msg.byteLength > 36) {
                        // ... convert it from a byte array to a string
                        var view = new Uint16Array(msg, 36);
                        var chararray = [];
                        for (var i = 0, len = view.length; i < len; i++) {
                            chararray.push(String.fromCharCode(view[i]));
                        }
                        // ... and append it to echo
                        echo += chararray.join("");
                    }

                    add_results(num_games, num_wins, num_draws, num_losses, turns, points);

                    if (debug && !mass_debug && !loss_debug && !win_debug) {
                        display_debug_results(num_wins, num_draws);
                    } else if (!sims_left) {
                        display_final_results();
                    }
                    break;
                case STATS:
                    var hashLength = 96;                // 16 cards - 3 characters each - 2 bytes per character
                    var statLength = hashLength + 16;   // 4 ints @ 4 bytes per float
                    var offset = 4, len = msg.byteLength;
                    while (offset < len) {
                        // Convert echo to bytes in the ArrayBuffer
                        var view = new DataView(msg);
                        var hashLen = view.getInt32(offset);
                        offset += 4;

                        var chararray = [];
                        for (var i = 0; i < hashLen; i++) {
                            var char = String.fromCharCode(view.getInt16(offset));
                            offset += 2;
                            chararray.push(char);
                        }

                        // ... and append it to echo
                        var hash = chararray.join("");
                        var stats = {
                            games: view.getInt32(offset),
                            wins: view.getInt32(offset+4),
                            draws: view.getInt32(offset+8),
                            losses: view.getInt32(offset + 12),
                            points: view.getInt32(offset + 16),
                        }
                        offset += 20;

                        updateStats(hash, stats);
                    }
                    break;
            }
        } else {
            sims_left = 0;
        }
        delete e;
    }

    var initializeCard = function (card, p, newKey) {
        card.owner = p;
        card.timer = card.cost;
        card.health_left = card.health;
        // Setup status effects
        card.attack_rally = 0;
        card.attack_weaken = 0;
        card.attack_berserk = 0;
        card.poisoned = 0;
        card.scorched = 0;
        card.enfeebled = 0;
        card.protected = 0;
        card.barrier_ice = 0;
        card.enhanced = 0;
        card.jammed = false;
        card.key = newKey;
        if (!card.reusableSkills) card.resetTimers();
    }

    // Handle messages from the worker thread using Structured Cloning
    // (used when Transferable Objects are NOT supported by the browser)
    var ProcessStructuredCloningMessage = function (e) {
        if (sims_left) {
            var msg = e.data;
            switch (msg.cmd) {
                case 'return_results':
                    progress = true;
                    var results = msg.data;
                    var num_games = results[0];
                    var num_wins = results[1];
                    var num_draws = results[2];
                    var num_losses = results[3];
                    var turns = results[4];
                    var points = results[5];
                    var time_started = results[6];
                    var worker_echo = results[7];
                    if (worker_echo) {
                        echo += worker_echo;
                    }

                    add_results(num_games, num_wins, num_draws, num_losses, turns, points);

                    if (debug && !mass_debug && !loss_debug && !win_debug) {
                        var result = (num_wins ? 1 : num_draws ? 'draw' : 0);
                        display_debug_results(result);
                    } else if (!sims_left) {
                        display_final_results();
                    }
                    break;
                case 'order_stats':
                    var updates = msg.data;
                    for (var hash in updates) {
                        updateStats(hash, updates[hash]);
                    }
                    break;
            }
        } else {
            sims_left = 0;
        }
    }

    var updateStats = function (hash, update) {
        var existing = orders[hash];
        if (!existing) {
            orders[hash] = update;
        } else {
            existing.wins += update.wins;
            existing.losses += update.losses;
            existing.draws += update.draws;
            existing.games += update.games;
            existing.points += update.points;
        }
    }

    // Update the GUI with the current status (sims/sec, % complete, etc...)
    var display_progress = function () {
        // If stopsims was called, don't display any more output
        if (sims_left > 0) {
            if (progress) {
                progress = false;
                var percent_complete = (games / (num_sims) * 100).toFixed(1);
                var elapse = time_elapsed();
                var batch_size = games - last_games[0];
                var batch_elapse = batch_time_elapsed(last_start_times[0]);
                var simpersecbatch = 0;
                if (batch_elapse == 0) {
                    simpersecbatch = 0;
                } else {
                    simpersecbatch = batch_size / batch_elapse;
                }
                simpersecbatch = simpersecbatch.toFixed(1);
                if (suppressOutput && end_sims_callback) {
                    outp(echo + '<strong>Running simulations...</strong> (' + games + '/' + (num_sims) + ') ' + percent_complete + '%<br>' + elapse + ' seconds<br>' + simpersecbatch + ' simulations per second<br>');
                } else {
                    outp(echo + '<strong>Running simulations...</strong> (' + games + '/' + (num_sims) + ') ' + percent_complete + '%<br>' + elapse + ' seconds<br>' + simpersecbatch + ' simulations per second<br>' + gettable());
                }

                // Smooth output by calcuating stats for the last few .1 second intervals, rather than the last one
                // This reduces the impact of this loop firing multiple times in between getting results from workers
                var i = 0;
                for (var len = smoothing_factor - 1; i < len; i++) {
                    last_games[i] = last_games[i + 1];
                    last_start_times[i] = last_start_times[i + 1];
                }
                last_games[i] = games;
                last_start_times[i] = new Date().getTime();
            }
            setTimeout(display_progress, 100);
        }
    }

    // Add results from a batch to the total results
    var add_results = function (num_games, num_wins, num_draws, num_losses, turns, points) {

        games += num_games;
        wins += num_wins;
        draws += num_draws;
        losses += num_losses;
        total_turns += turns;
        total_points += points;

        if (sims_left > 0) sims_left -= num_games;

        if (debug) {
            if (loss_debug && !found_loss) {
                if (num_draws > 0) {
                    echo = 'Draw found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><br>';
                    found_loss = true;
                    sims_left = 0;
                    stopsim(1);
                } else if (num_losses > 0) {
                    echo = 'Loss found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><br>';
                    found_loss = true;
                    sims_left = 0;
                    stopsim(1);
                } else {
                    if (sims_left <= num_games) {
                        echo = 'No losses found after ' + games + ' games. No debug output to display.<br><br>';
                        sims_left = 0;
                    } else {
                        echo = ' ';
                    }
                }
            } else if (loss_debug && !found_loss) {
                if (num_wins > 0) {
                    echo = 'Win found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><br>';
                    found_loss = true;
                    sims_left = 0;
                    stopsim(1);
                } else {
                    if (sims_left <= num_games) {
                        echo = 'No wins found after ' + games + ' games. No debug output to display.<br><br>';
                        sims_left = 0;
                    } else {
                        echo = ' ';
                    }
                }
            } else if (mass_debug && sims_left > 0) {
                echo += '<br><hr>NEW BATTLE BEGINS<hr><br>';
            }
        }
    }

    // Display the results of a regular debug simulation
    var display_debug_results = function (win, draw) {
        sims_left = 0;
        time_stop = new Date().getTime();

        if (win) {
            outp(echo + '<br><h1>WIN</h1><br>' + gettable());
        } else if (draw) {
            outp(echo + '<br><h1>DRAW</h1><br>' + gettable());
        } else {
            outp(echo + '<br><h1>LOSS</h1><br>' + gettable());
        }

        // Show interface
        document.getElementById('ui').style.display = 'block';

        // Hide stop button
        document.getElementById('stop').style.display = 'none';
    }

    // Display the final results after a simulation loop has completed
    var display_final_results = function () {
        for (var i = 0; i < max_workers; i++) {
            workers[i].terminate();
        }

        time_stop = new Date().getTime();

        var elapse = time_elapsed();
        var simpersec = games / elapse;
        simpersec = simpersec.toFixed(1);

        if (suppressOutput && end_sims_callback) {
            if (trackStats) {
                outp(echo + '<br><strong>Simulations complete.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable() + getOrderStatsTable());
            } else {
                outp(echo + '<br><strong>Simulations complete.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>');
            }
        } else {
            outp(echo + '<br><strong>Simulations complete.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable() + getOrderStatsTable());
        }

        // Show interface
        document.getElementById('ui').style.display = 'block';

        // Hide stop button
        document.getElementById('stop').style.display = 'none';

        scroll_to_end();
        if (end_sims_callback) end_sims_callback();
    }

    // Initialize simulation loop - runs once per simulation session
    var startsim = function (autostart) {
        for (var i = 0; i < max_workers; i++) {
            workers[i] = createWorker(i);
        }

        orders = {};

        if (typeof (Worker) === "undefined") {
            return false;
        }

        if (_DEFINED('autolink') && !autostart) {
            window.location.href = generate_link(1, 1);
            return false;
        }

        total_turns = 0;
        total_points = 0;
        time_start = new Date().getTime();
        time_stop = 0;
        echo = '';
        found_loss = 0;
        games = 0;
        last_games = [];
        last_start_times = [];
        for (var i = 0; i < smoothing_factor; i++) {
            last_games[i] = 0;
            last_start_times[i] = new Date().getTime();
        }
        num_sims = document.getElementById('sims').value;
        if (!num_sims) num_sims = 1;
        sims_left = num_sims;
        var d = document.getElementById('user_controlled');
        if (d) {
            user_controlled = d.checked;
        }
        /*if (user_controlled) debug = true;
        else*/ debug = document.getElementById('debug').checked;
        var d = document.getElementById('auto_mode');
        if (d) {
            auto_mode = d.checked;
        }
        mass_debug = document.getElementById('mass_debug').checked;
        loss_debug = document.getElementById('loss_debug').checked;
        win_debug = document.getElementById('win_debug').checked;
        if ((win_debug || loss_debug) && mass_debug) mass_debug = false;
        getdeck = document.getElementById('deck').value;
        getcardlist = document.getElementById('cardlist').value;
        getdeck2 = document.getElementById('deck2').value;
        getcardlist2 = document.getElementById('cardlist2').value;
        getordered = document.getElementById('ordered').checked;
        getordered2 = document.getElementById('ordered2').checked;
        gettournament = document.getElementById('tournament').checked;
        getexactorder = document.getElementById('exactorder').checked;
        getexactorder2 = document.getElementById('exactorder2').checked;
        getmission = document.getElementById('mission').value;
        getraid = document.getElementById('raid').value;
        getsiege = document.getElementById('siege').checked;
        tower_level = document.getElementById('tower_level').value;
        tower_type = document.getElementById('tower_type').value;
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

        // Hide interface
        document.getElementById('ui').style.display = 'none';

        // Display stop button
        document.getElementById('stop').style.display = 'block';

        // Cache decks where possible
        // Load player deck
        if (getdeck) {
            cache_player_deck = hash_decode(getdeck);
        } else if (getcardlist) {
            cache_player_deck = load_deck_from_cardlist(getcardlist);
        } else {
            cache_player_deck = load_deck_from_cardlist();
        }

        // Load enemy deck
        if (getdeck2) {
            cache_cpu_deck = hash_decode(getdeck2);
        } else if (getcardlist2) {
            cache_cpu_deck = load_deck_from_cardlist(getcardlist2);
        } else if (getmission) {
            cache_cpu_deck = load_deck_mission(getmission);
        } else if (getraid) {
            cache_cpu_deck = load_deck_raid(getraid);
        } else {
            cache_cpu_deck = load_deck_from_cardlist();
        }

        card_cache = {};

        wins = 0;
        losses = 0;
        draws = 0;

        outp('<strong>Initializing simulations...</strong>');

        var params = {};
        params['cache_player_deck'] = cache_player_deck;
        params['cache_cpu_deck'] = cache_cpu_deck;
        params['getbattleground'] = getbattleground;
        params['getordered'] = getordered;
        params['getordered2'] = getordered2;
        params['gettournament'] = gettournament;
        params['getexactorder'] = getexactorder;
        params['getexactorder2'] = getexactorder2;
        params['getsiege'] = getsiege;
        params['tower_level'] = tower_level;
        params['tower_type'] = tower_type;
        params['surge'] = surge;
        params['debug'] = debug;
        params['loss_debug'] = loss_debug;
        params['win_debug'] = loss_debug;
        params['mass_debug'] = mass_debug;
        params['user_controlled'] = user_controlled;
        params['trackStats'] = trackStats;
        for (var i = 0; i < max_workers; i++) {
            workers[i].postMessage({ 'cmd': 'initializeSims', 'data': params });
            setupWorkerField(workers[i]);
        }

        current_timeout = setTimeout(display_progress, 100);
        run_sims();

        // Output decks for first simulation
        if (debug && (loss_debug || win_debug)) {
        } else if (suppressOutput) {
        } else if (echo == '') {
            debug_dump_decks();
        }

        return false;
    }

    // Interrupt simulations
    var stopsim = function (supress_output) {

        sims_left = 0;
        time_stop = new Date().getTime();
        var elapse = time_elapsed();
        var simpersec = games / elapse;
        simpersec = simpersec.toFixed(1);

        for (var i = 0; i < max_workers; i++) {
            workers[i].terminate();
        }

        // Stop the recursion
        if (current_timeout) clearTimeout(current_timeout);

        if (!supress_output) {
            outp(echo + '<strong>Simulations interrupted.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable());
        }

        // Show interface
        document.getElementById('ui').style.display = 'block';

        // Hide stop button
        document.getElementById('stop').style.display = 'none';
    }

    var setupWorkerField = function () { };

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    var run_sims = function (worker_id, batch_size, time_started) {
        if (debug && !mass_debug && !loss_debug && !win_debug) {
            workers[0].postMessage({ 'cmd': 'run_sims' });
        } else {
            time_start_batch = new Date().getTime();

            var sims_per_worker = Math.floor(num_sims / max_workers);
            var remainingSims = num_sims - (sims_per_worker * max_workers);
            var worker_index = 0;
            for (; worker_index < remainingSims; worker_index++) {  // Start a new batch
                workers[worker_index].postMessage({ 'cmd': 'run_sims', 'data': [sims_per_worker + 1, time_start_batch] });
            }
            if (sims_per_worker) {
                for (; worker_index < max_workers; worker_index++) {  // Start a new batch
                    workers[worker_index].postMessage({ 'cmd': 'run_sims', 'data': [sims_per_worker, time_start_batch] });
                }
            }
        }
    }

    var last_start_times = [];
    var end_sims_callback;
    var orders = {};
}