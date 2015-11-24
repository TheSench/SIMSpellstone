if (!use_workers) {

// Initialize simulation loop - runs once per simulation session
var startsim = function (autostart) {

	if (_GET('autolink') && !autostart) {
		window.location.href = generate_link(1, 1);
		return false;
	}

	clearCardSpace();

	total_turns = 0;
	time_start = new Date();
	time_stop = 0;
	echo = '';
	games = 0;
	sims_left = document.getElementById('sims').value;
	if (!sims_left) sims_left = 1;
	user_controlled = document.getElementById('user_controlled').checked;
	/*if (user_controlled) debug = true;
	else*/ debug = document.getElementById('debug').checked;
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
	getsiege = document.getElementById('siege').checked;
	tower_level = document.getElementById('tower_level').value;
	if (quests && quests['root'] && quests['root']['battleground']) {
	    getbattleground = [];
	    for (var key in quests['root']['battleground']) {
	        var battleground = quests['root']['battleground'][key];
	        var checkbox = document.getElementById('battleground_' + battleground.id);
	        if (checkbox && checkbox.checked) {
	            getbattleground.push(battleground.id);
	        }
	    }
	    getbattleground = getbattleground.join();
	}
	if (!getdeck2 && !getmission && !getcardlist2) getdeck2 = 'Po';
	surge = document.getElementById('surge').checked;

	// Hide interface
	document.getElementById('ui').style.display = 'none';

	// Display stop button
	document.getElementById('stop').style.display = 'block';

	// Cache decks where possible
	// Load player deck
	/*if (getdeck) {
		cache_player_deck = hash_decode(getdeck);
	} else*/ if (getcardlist) {
	    cache_player_deck = load_deck_from_cardlist(getcardlist);
	} else {
	    cache_player_deck = load_deck_from_cardlist();
	}

	max_turns = 50;

	// Load enemy deck
	/*if (getdeck2) {
		cache_cpu_deck = hash_decode(getdeck2);
	} else*/ if (getcardlist2) {
		cache_cpu_deck = load_deck_from_cardlist(getcardlist2);
	} else if (getmission) {
		cache_cpu_deck = load_deck_mission(getmission);
	} else {
	    cache_cpu_deck = load_deck_from_cardlist();
	}

	card_cache = {};

	wins = 0;
	losses = 0;
	draws = 0;

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
	draw_cards();
	// Show interface
	document.getElementById('ui').style.display = 'block';

	// Hide stop button
	document.getElementById('stop').style.display = 'none';
}

// Loops through all simulations
// - keeps track of number of simulations and outputs status
var debug_end = function () {
    if (simulating) {
        return;
    }
    
    result = processSimResult();

    time_stop = new Date();

    if (result == 'draw') {
        outp(echo + '<br><h1>DRAW</h1><br>' + gettable());
    } else if (result) {
        outp(echo + '<br><h1>WIN</h1><br>' + gettable());
    } else {
        outp(echo + '<br><h1>LOSS</h1><br>' + gettable());
    }
    draw_cards();

    // Show interface
    document.getElementById('ui').style.display = 'block';

    // Hide stop button
    document.getElementById('stop').style.display = 'none';

    if (user_controlled) {
        scroll_to_end();
    }
}

var run_sims = function () {
    if (debug && !mass_debug && !loss_debug) {
        run_sim();
        debug_end();
    } else if (user_controlled) {
        run_sim();
        debug_end();
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

		scroll_to_end();
	}
}

// Initializes a single simulation - runs once before each individual simulation
// - needs to reset the decks and fields before each simulation
var run_sim = function () {
    doSetup();
    if (!simulate()) return false;
    processSimResult();
}

function doSetup() {

    simulation_turns = 0;

    // Reset battleground effect
    battleground = '';

    // Set up empty decks
    deck = [];
    deck['cpu'] = [];
    deck['cpu']['deck'] = [];
    deck['player'] = [];
    deck['player']['deck'] = [];

    // Initialize summon counter to track limit
    number_of_summons = [];
    number_of_summons['cpu'] = 0;
    number_of_summons['player'] = 0;

    // Set up empty field
    field = [];
    field['cpu'] = [];
    field['cpu']['assaults'] = [];
    field['player'] = [];
    field['player']['assaults'] = [];

    // Load player deck
    if (cache_player_deck) {
        deck['player'] = copy_deck(cache_player_deck);
    }

    // Load enemy deck
    if (cache_cpu_deck) {
        deck['cpu'] = copy_deck(cache_cpu_deck);
    }

    // Set up deck order priority reference
    if (getordered && !getexactorder) deck['player']['ordered'] = copy_card_list(deck['player']['deck']);
    if (getordered2 && !getexactorder2) deck['cpu']['ordered'] = copy_card_list(deck['cpu']['deck']);

    // Set up battleground effects, if any
    battlegrounds = [];
    if (getbattleground) {
        var selected = getbattleground.split(",");
        for (i = 0; i < selected.length; i++) {
            var id = selected[i];
            var battleground = quests['root']['battleground'][id];
            battlegrounds.push(MakeBattleground(battleground.name, battleground.skill));
        }
    }

    // Output decks for first simulation
    if (debug && loss_debug) {
    } else if (echo == '') {
        debug_dump_decks();
    }
}

function processSimResult() {

    var result;
    if (!field.player.commander.isAlive()) {
        result = false;
    }
    else if (!field.cpu.commander.isAlive()) {
        result = true;
    }
    else {
        result = 'draw';
    }

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

    // Increment total turn count
    total_turns += simulation_turns;

    if (debug) {
        if (loss_debug) {
            if (result == 'draw') {
                echo = 'Draw found. Displaying debug output... <br><br>' + echo;
                echo += '<br><h1>DRAW</h1><br>';
                sims_left = false;
            } else if (result) {
                if (!sims_left) {
                    echo = 'No losses found. No debug output to display.<br><br>';
                    sims_left = false;
                } else {
                    echo = '';
                }
            } else {
                echo = 'Loss found. Displaying debug output... <br><br>' + echo;
                echo += '<br><h1>LOSS</h1><br>';
                sims_left = false;
            }
        }
    }
    return result;
}

// Global variables used by single-threaded simulator
var run_sims_count = 0;
var run_sims_batch = 0;
var card_cache = {};
var user_controlled = false;

}