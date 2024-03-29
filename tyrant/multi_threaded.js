if (use_workers) {

	// Global variables needed by the GUI thread when workers are used
	var workers = [];
	var max_workers = 1;
	var smoothing_factor = 5;	// Used by the progress reporting logic, determines how many .1 second intervals back to go for sims/sec calculations

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

	// Handle messages from the worker thread using Transferable Objects
	// (Transferable Objects are faster, but they are not supported
	// by all browsers.)
	var ProcessTransferableObjectsMessage = function (e) {
		if (sims_left) {
			var msg = e.data;
			// Achievement hash is currently not being sent over as an ArrayBuffer
			if (msg.byteLength === undefined) {
				tally_achievements(msg);
			} else {
				var view = new Int32Array(msg, 0, 8);
				var num_games = view[0];
				var num_wins = view[1];
				var num_draws = view[2];
				var num_losses = view[3];
				var turns = view[4];
				var auto_anp = view[5];
				var manual_anp = view[6];
				var num_boss_slay = view[7];
				view = new Float64Array(msg, 56, 1);
				var time_started = view[0];
				// If a worker's echo is included in results...
				// Queue up next batch so that this worker isn't idle while we process the results
				if (sims_to_process > 0) {
					run_sims(this.id, num_games, time_started);
				}
				if (msg.byteLength > 72) {
					// ... convert it from a byte array to a string
					var view = new Uint16Array(msg, 80);
					var chararray = [];
					for (var i = false, len = view.length; i < len; i++) {
						chararray.push(String.fromCharCode(view[i]));
					}
					// ... and append it to echo
					echo += chararray.join("");
				}

				addResults(num_games, num_wins, num_draws, num_losses, turns, auto_anp, manual_anp, num_boss_slay);

				if (debug && !mass_debug && !loss_debug) {
					display_debug_results(num_wins, num_draws);
				} else if (!sims_left) {
					display_final_results();
				}
			}
		} else {
			sims_left = false;
		}
	}

	// Handle messages from the worker thread using Structured Cloning
	// (used when Transferable Objects are NOT supported by the browser)
	var ProcessStructuredCloningMessage = function (e) {
		if (sims_left) {
			var msg = e.data;
			switch (msg.cmd) {
				case 'tally_achievements':
					break;

				case 'return_results':
					var results = msg.data;
					var num_games = results[0];
					var num_wins = results[1];
					var num_draws = results[2];
					var num_losses = results[3];
					var turns = results[4];
					var auto_anp = results[5];
					var manual_anp = results[6];
					var num_boss_slay = results[7];
					var time_started = results[8];
					var achievement_results = results[9];
					var worker_echo = results[10];
					if (worker_echo) {
						echo += worker_echo;
					}

					// Queue up next batch
					if (sims_to_process > 0) {
						run_sims(this.id, num_games, time_started);
					}

					addResults(num_games, num_wins, num_draws, num_losses, turns, auto_anp, manual_anp, num_boss_slay);
					tally_achievements(achievement_results);

					if (debug && !mass_debug && !loss_debug) {
						var result = (num_wins ? 1 : num_draws ? 'draw' : 0);
						display_debug_results(result);
					} else if (!sims_left) {
						display_final_results();
					}
					break;
			}
		} else {
			sims_left = false;
		}
	}

	// Update the GUI with the current status (sims/sec, % complete, etc...)
	var display_progress = function () {
		// If stopsims was called, don't display any more output
		if (sims_to_process > 0) {
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
			outp(echo + '<strong>Running simulations...</strong> (' + games + '/' + (num_sims) + ') ' + percent_complete + '%<br>' + elapse + ' seconds<br>' + simpersecbatch + ' simulations per second<br>' + gettable());

			// Smooth output by calcuating stats for the last few .1 second intervals, rather than the last one
			// This reduces the impact of this loop firing multiple times in between getting results from workers
			var i = 0;
			for (var len = smoothing_factor - 1; i < len; i++) {
				last_games[i] = last_games[i + 1];
				last_start_times[i] = last_start_times[i + 1];
			}
			last_games[i] = games;
			last_start_times[i] = new Date().getTime();
			setTimeout(display_progress, 100);
		}
	}

	// Add achievement results from a batch to the total achievement results
	var tally_achievements = function (achievement_results) {
		// In order to get achievement, you must also win the mission!
		if (getachievement) {
			var real_key = 0;
			var achievement_success = true;
			var achievement = cache_achievement;
			for (var key in achievement.req) {
				var current_req = achievement.req[key];
				real_key = key;
				if (key == 'attr') {
					current_req = achievement.req;
					real_key = 0;
				}
				if (achievement_wins[real_key] == undefined) achievement_wins[real_key] = 0;
				if (current_req == undefined) continue;

				var times_achieved = achievement_results[real_key];
				if (times_achieved) {
					achievement_wins[real_key] += times_achieved;
				}
			}
			if (achievement_wins.all == undefined) achievement_wins.all = 0;

			var achievement_successes = achievement_results.all;
			if (achievement_successes) achievement_wins.all += achievement_successes;
		}
	}

	// Add results from a batch to the total results
	var addResults = function (num_games, num_wins, num_draws, num_losses, turns, auto_anp, manual_anp, num_boss_slay, achievement_wins) {

		games += num_games;
		wins += num_wins;
		draws += num_draws;
		losses += num_losses;
		total_turns += turns;
		auto_total_points += auto_anp;
		total_points += manual_anp;
		boss_slay += num_boss_slay;

		if (sims_left > 0) sims_left -= num_games;

		if (debug) {
			if (loss_debug && !found_loss) {
				if (num_draws > 0) {
					echo = 'Draw found. Displaying debug output... <br><br>' + echo;
					echo += '<br><br>';
					found_loss = true;
					sims_left = false;
					sims_to_process = 0;
					stopsim(1);
				} else if (num_losses > 0) {
					echo = 'Loss found. Displaying debug output... <br><br>' + echo;
					echo += '<br><br>';
					found_loss = true;
					sims_left = false;
					sims_to_process = 0;
					stopsim(1);
				} else {
					if (sims_left <= num_games) {
						echo = 'No losses found. No debug output to display.<br><br>';
						sims_left = false;
						sims_to_process = 0;
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
		sims_left = false;
		sims_to_process = 0;
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
		time_stop = new Date().getTime();

		var elapse = time_elapsed();
		var simpersec = games / elapse;
		simpersec = simpersec.toFixed(1);

		outp(echo + '<br><strong>Simulations complete.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable());

		// Show interface
		document.getElementById('ui').style.display = 'block';

		// Hide stop button
		document.getElementById('stop').style.display = 'none';

		// Scroll to bottom of page
		window.scrollTo(0, document.body.scrollHeight);

		// Submit simulation results to Fansite
		if (_GET('deck_id')) {
			var url = 'http://www.haileon.com/SimTyrantSubmit';
			if (_GET('testcase')) url = 'http://www.haileon.com/SimTyrantTest';
			url += '?deckId=' + _GET('deck_id');
			if (getachievement) {
				var req_amt = achievement_wins.all;
				if (req_amt == undefined) req_amt = false;
				url += '&battlesWon=' + req_amt;
			} else {
				url += '&battlesWon=' + wins;
			}
			url += '&battlesTotal=' + games;
			if (_GET('testcase')) url += '&battlesDraw=' + draws;
			url += '&timeTaken=' + Math.floor(elapse);
			if (getraid || _GET('testcase')) {
				//			var manual_anp = (total_points/games).toFixed(3);
				//			url += '&anp=' + manual_anp;
				var auto_anp = (auto_total_points / games).toFixed(3);
				url += '&anp=' + auto_anp;
			}
			if (_GET('autonext')) url += '&autonext=1';
			if (_GET('sims')) url += '&sims=' + _GET('sims');
			if (_GET('maxworkers')) url += '&maxworkers=' + _GET('maxworkers');
			window.location.assign(url);
		}
	}

	// Initialize simulation loop - runs once per simulation session
	var startsim = function (autostart) {

		if (typeof (Worker) === "undefined") {
			return false;
		}

		if (_GET('autolink') && !autostart) {
			window.location.href = generate_link(1, 1);
			return false;
		}

		total_turns = 0;
		boss_slay = 0;
		total_manual_anp = 0;
		total_auto_anp = 0;
		achievement_mission = false;
		achievement_boss = 0;
		achievement_wins = [];
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
		sims_to_process = num_sims;
		debug = document.getElementById('debug').checked;
		mass_debug = document.getElementById('mass_debug').checked;
		loss_debug = document.getElementById('loss_debug').checked;
		if (loss_debug && mass_debug) mass_debug = false;
		getdeck = document.getElementById('deck').value;
		getcardlist = document.getElementById('cardlist').value;
		if (!getdeck && !getcardlist) getdeck = 'Po';
		getdeck2 = document.getElementById('deck2').value;
		getcardlist2 = document.getElementById('cardlist2').value;
		getordered = document.getElementById('ordered').checked;
		getordered2 = document.getElementById('ordered2').checked;
		gettournament = document.getElementById('tournament').checked;
		getexactorder = document.getElementById('exactorder').checked;
		getexactorder2 = document.getElementById('exactorder2').checked;
		getmission = document.getElementById('mission').value;
		getachievement = document.getElementById('achievement').value;
		cache_achievement = get_achievement_by_id(getachievement);
		getraid = document.getElementById('raid').value;
		getquest = document.getElementById('quest').value;
		getbattleground = document.getElementById('battleground').value;
		if (!getdeck2 && !getmission && !getraid && !getquest && !getcardlist2) getdeck2 = 'Po';
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
			cache_player_deck = false;
		}

		// Load enemy deck
		if (getdeck2) {
			cache_cpu_deck = hash_decode(getdeck2);
		} else if (getcardlist2) {
			cache_cpu_deck = load_deck_from_cardlist(getcardlist2);
		} else if (getmission) {
			cache_cpu_deck = load_deck_mission(getmission);
			achievement_mission = getmission;
		} else if (getraid) {
			// Must randomize for each simulation
			cache_cpu_deck = false;
			achievement_boss = getraid;
		} else if (getquest) {
			// Must randomize for each simulation
			cache_cpu_deck = false;
		} else {
			cache_cpu_deck = false;
		}

		wins = 0;
		losses = 0;
		draws = 0;
		total_points = 0;
		auto_total_points = 0;

		outp('<strong>Initializing simulations...</strong>');

		var params = [];
		params.cache_player_deck = cache_player_deck;
		params.cache_cpu_deck = cache_cpu_deck;
		params.cache_achievement = cache_achievement;
		params.getraid = getraid;
		params.getquest = getquest;
		params.getbattleground = getbattleground;
		params.getordered = getordered;
		params.getordered2 = getordered2;
		params.gettournament = gettournament;
		params.getexactorder = getexactorder;
		params.getexactorder2 = getexactorder2;
		params.surge = surge;
		params.debug = debug;
		params.loss_debug = loss_debug;
		params.mass_debug = mass_debug;
		for (var i = 0; i < max_workers; i++) {
			workers[i].postMessage({ 'cmd': 'initializeSims', 'data': params });
		}

		current_timeout = setTimeout(display_progress, 100);
		run_sims();

		// Output decks for first simulation
		if (debug && loss_debug) {
		} else if (echo == '') {
			debug_dump_decks();
		}

		return false;
	}

	// Interrupt simulations
	var stopsim = function (supress_output) {
		sims_left = false;
		sims_to_process = 0;
		time_stop = new Date().getTime();
		var elapse = time_elapsed();
		var simpersec = games / elapse;
		simpersec = simpersec.toFixed(1);

		// Stop the recursion
		if (current_timeout) clearTimeout(current_timeout);

		for (var i = 0; i < max_workers; i++) {
			workers[i].postMessage({ 'cmd': 'stopsim' });
		}

		if (!supress_output) {
			outp(echo + '<strong>Simulations interrupted.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable());
		}

		// Show interface
		document.getElementById('ui').style.display = 'block';

		// Hide stop button
		document.getElementById('stop').style.display = 'none';
	}

	// Loops through all simulations
	// - keeps track of number of simulations and outputs status
	var run_sims = function (worker_id, batch_size, time_started) {
		if (debug && !mass_debug && !loss_debug) {
			workers[0].postMessage({ 'cmd': 'run_sims' });

		} else {
			var simpersecbatch = 0;
			if (batch_size > 0) { // batch_size == 0 means a fresh set of simulations
				var temp = games / (num_sims) * 100;
				temp = temp.toFixed(1);

				var elapse = time_elapsed();

				var batch_elapse = batch_time_elapsed(time_started);
				if (batch_elapse == 0) {
					simpersecbatch = 0;
				} else {
					simpersecbatch = batch_size / batch_elapse;
				}
			}
			var new_batch_size = (worker_id ? 1 : max_workers);
			if (simpersecbatch > new_batch_size) // If we can run more at one time, then let's try to
				new_batch_size = Math.ceil(simpersecbatch * max_workers / 10);
			if (new_batch_size > sims_to_process) // Also limit by how many sims are left
				new_batch_size = sims_to_process;

			time_start_batch = new Date().getTime();

			if (worker_id !== undefined) {
				workers[worker_id].postMessage({ 'cmd': 'new_batch', 'data': [new_batch_size, time_start_batch] });
			} else {
				var sims_per_worker = Math.floor(new_batch_size / max_workers);
				var remainingSims = new_batch_size - (sims_per_worker * max_workers);
				var worker_index = 0;
				for (; worker_index < remainingSims; worker_index++) {  // Start a new batch
					workers[worker_index].postMessage({ 'cmd': 'run_sims', 'data': [sims_per_worker + 1, time_start_batch] });
				}
				for (; worker_index < max_workers; worker_index++) {  // Start a new batch
					workers[worker_index].postMessage({ 'cmd': 'run_sims', 'data': [sims_per_worker, time_start_batch] });
				}
			}
			sims_to_process -= new_batch_size;
		}
	}

}