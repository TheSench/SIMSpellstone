if (!use_workers) {

// Initialize simulation loop - runs once per simulation session
var startsim = function (autostart) {

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
	time_start = new Date();
	time_stop = 0;
	echo = '';
	games = 0;
	sims_left = document.getElementById('sims').value;
	if (!sims_left) sims_left = true;
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

	max_turns = 50;

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
		max_turns = 30;
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

	current_timeout = setTimeout(run_sims,1);

	return false;
}

// Interrupt simulations
var stopsim = function () {
	time_stop = new Date();
	var elapse = time_elapsed();
	var simpersec = games/elapse;
	simpersec = simpersec.toFixed(1);

	// Stop the recursion\
	if (current_timeout) clearTimeout(current_timeout);

	outp(echo + '<strong>Simulations interrupted.</strong><br>'+elapse+' seconds ('+simpersec+' simulations per second)<br>'+gettable());

	// Show interface
	document.getElementById('ui').style.display = 'block';

	// Hide stop button
	document.getElementById('stop').style.display = 'none';
}

// Loops through all simulations
// - keeps track of number of simulations and outputs status
var run_sims = function () {
	if (debug && !mass_debug && !loss_debug) {
		var result = run_sim();
		time_stop = new Date();

		if (result == 'draw') {
			outp(echo+'<br><h1>DRAW</h1><br>'+gettable());
		} else if (result) {
			outp(echo+'<br><h1>WIN</h1><br>'+gettable());
		} else {
			outp(echo+'<br><h1>LOSS</h1><br>'+gettable());
		}

		// Show interface
		document.getElementById('ui').style.display = 'block';

		// Hide stop button
		document.getElementById('stop').style.display = 'none';

	} else if (sims_left > 0) {
		// Interval output - speeds up simulations
		if (run_sims_count >= run_sims_batch) {
			var simpersecbatch = 0;
			if (run_sims_batch > 0) { // Use run_sims_batch == 0 to imply a fresh set of simulations
				run_sims_count = false;
				var temp = games / (games+sims_left) * 100;
				temp = temp.toFixed(1);

				var elapse = time_elapsed();

				var batch_elapse = batch_time_elapsed();
				if (batch_elapse == 0) {
					simpersecbatch = 0;
				} else {
					simpersecbatch = run_sims_batch / batch_elapse;
				}

				outp(echo + '<strong>Running simulations...</strong> ('+games+'/'+(games+sims_left)+') '+temp+'%<br>'+elapse+' seconds<br>'+simpersecbatch.toFixed(1)+' simulations per second<br>'+gettable());
			}
			run_sims_batch = 1;
			if (simpersecbatch > run_sims_batch) // If we can run more at one time, then let's try to
				run_sims_batch = Math.ceil(simpersecbatch/8);
			if (run_sims_batch > sims_left) // Also limit by how many sims are left
				run_sims_batch = sims_left;

			// Batch messes up mass debug and loss debug! Let's disable batch!
			if (debug && mass_debug) run_sims_batch = 1;
			if (debug && loss_debug) run_sims_batch = 1;

			time_start_batch = new Date();
			for (var i = 0; i < run_sims_batch; i++) {  // Start a new batch
				setTimeout(run_sim, 0);
			}
		}
		current_timeout = setTimeout(run_sims,1);

	} else {
		run_sims_count = false;
		run_sims_batch = 0;
		time_stop = new Date();

		var elapse = time_elapsed();
		var simpersec = games/elapse;
		simpersec = simpersec.toFixed(1);

		outp(echo + '<br><strong>Simulations complete.</strong><br>'+elapse+' seconds ('+simpersec+' simulations per second)<br>'+gettable());

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
//				var manual_anp = (total_points/games).toFixed(3);
//				url += '&anp=' + manual_anp;
				var auto_anp = (auto_total_points/games).toFixed(3);
				url += '&anp=' + auto_anp;
			}
			if (_GET('autonext')) url += '&autonext=1';
			if (_GET('sims')) url += '&sims=' + _GET('sims');
			if (_GET('maxworkers')) url += '&maxworkers=' + _GET('maxworkers');
			window.location.assign(url);
		}
	}
}

// Initializes a single simulation - runs once before each individual simulation
// - needs to reset the decks and fields before each simulation
var run_sim = function () {

	// Set up achievement counters
	achievement_skill = [];
	achievement_killed = [];
	achievement_played = [];
	achievement_turns = 0;
	achievement_damage = 0;
	achievement_maxdamage = 0;

	// ANP calculation
	points_since_last_decision = false;

	// Reset battleground effect
	battleground = '';

	// Set up empty decks
	deck = [];
	deck.cpu = [];
	deck.cpu.deck = [];
	deck.player = [];
	deck.player.deck = [];

	// Initialize summon counter to track limit
	number_of_summons = [];
	number_of_summons.cpu = 0;
	number_of_summons.player = 0;

	// Set up empty field
	field = [];
	field.cpu = [];
	field.cpu.assaults = [];
	field.cpu.structures = [];
	field.player = [];
	field.player.assaults = [];
	field.player.structures = [];

	// Load player deck
	if (cache_player_deck) {
		deck.player = copy_deck(cache_player_deck);
	}

	// Calculate turn of last decision
	turn_of_last_decision = ((deck.player.deck.length-1)*2)-1;
	if (surge) turn_of_last_decision++;
	if (turn_of_last_decision < 0) turn_of_last_decision = false;

	// Load enemy deck
	if (cache_cpu_deck) {
		deck.cpu = copy_deck(cache_cpu_deck);
	} else if (getraid) {
		deck.cpu = load_deck_raid(getraid);
	} else if (getquest) {
		deck.cpu = load_deck_quest(getquest);
	}

	// Set up deck order priority reference
	if (getordered && !getexactorder) deck.player.ordered = copy_card_list(deck.player.deck);
	if (getordered2 && !getexactorder2) deck.cpu.ordered = copy_card_list(deck.cpu.deck);

	// Load custom battleground if any
	if (getbattleground) battleground = quests.root.battleground[getbattleground]['effect'];

	// Output decks for first simulation
	if (debug && loss_debug) {
	} else if (echo == '') {
		debug_dump_decks();
	}

	var result = simulate();

	if (run_sims_batch > 0) {
	    if (sims_left > 0) sims_left--;
	    run_sims_count++;
	}

	if (debug && mass_debug && sims_left) echo += '<br><hr>NEW BATTLE BEGINS<hr><br>';

	// Increment wins/losses/games
	if (result == 'draw') {
		draws++;
	} else if (result) {
		wins++;;
	} else {
		losses++;
	}
	games++;

	// Increment Achievements
	tally_achievement(result);

	// Increment total turn count
	total_turns += achievement_turns;

	// Calculate ANP and increment total points
	var manual_anp = 0;
	manual_anp += 10;              // For the win
	if (surge) manual_anp += 20;   // For the surge

	if (debug) {
		if (loss_debug) {
			if (result == 'draw') {
				echo = 'Draw found. Displaying debug output... <br><br>'+echo;
				echo += '<br><br>';
				sims_left = false;
				return result;
			} else if (result) {
				if (!sims_left) {
					echo = 'No losses found. No debug output to display.<br><br>';
					sims_left = false;
					return result;
				} else {
					echo = '';
				}
			} else {
				echo = 'Loss found. Displaying debug output... <br><br>'+echo;
				echo += '<br><br>';
				sims_left = false;
				return result;
			}
		} else if (!mass_debug) {
			return result;
		}
	}

	// Win before last decision
	if (achievement_turns < turn_of_last_decision) {
		// For winning within 10 turns of last decision
		manual_anp += 5;
		if (points_this_turn > 10) {
			manual_anp += 10;
		} else {
			manual_anp += points_this_turn;
		}
	} else {
		// For winning within 10 turns of last decision
		if (achievement_turns < turn_of_last_decision + 10) manual_anp += 5;

		if (points_since_last_decision > 10) {
			manual_anp += 10;
		} else {
			manual_anp += points_since_last_decision;
		}
	}
	if (result != 1) manual_anp = 0;
	total_points += manual_anp;
	var auto_anp = 0;
	auto_anp += 10;              // For the win
	if (surge) auto_anp += 20;   // For the surge
	if (achievement_turns < 10) {
		auto_anp += 5;        // For winning within 10 turns of last decision
		if (achievement_damage > 10) {
			auto_anp += 10;
		} else {
			auto_anp += achievement_damage;
		}
	} else {
		if (achievement_damage > 10) {
			auto_anp += 10;
		} else {
			auto_anp += achievement_damage;
		}
	}
	if (getraid) {
		auto_anp = achievement_damage;
		if (auto_anp >= 200) {
			auto_anp = 250;
			boss_slay++;
		// Arctis Vanguard
		} else if (getraid == 1 && auto_anp >= 50) {
			auto_anp = 100;
			boss_slay++;
		}
	}
	if (result != 1) auto_anp = 0;
	auto_total_points += auto_anp;
}

// Global variables used by single-threaded simulator
var run_sims_count = false;
var run_sims_batch = 0;

}