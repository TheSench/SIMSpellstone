self.addEventListener('message', ProcessMessage, false);

// Handles the following messages from GUI thread:
// * initializeWorker - initialize worker thread
// * initializeSims - initialize simulation loop
// * run_sims - Starts the first batch of simulations in a simulation loop
// * new_batch - Adds a new batch of simulations for an existing simulation loop
// * stopsim - Disables new_batch until run_sims is called again.  This prevents
//             a worker thread from continuing to process batches when simulations
//             have been stopped by the user.
function ProcessMessage(e) {
	var msg = e.data;
	switch (msg.cmd) {
		case 'new_batch':
			if (running) {
				var data = msg.data;
				sims_left = data[0];
				time_start_batch = data[1];
				run_sims();
			}
			break;

		case 'run_sims':
			var data = msg.data;
			if (data) {
				sims_left = data[0];
				time_start_batch = data[1];
			} else {
				sims_left = 1;
			}
			run_sims();
			running = true;
			break;

		case 'stopsim':
			stopsim();
			break;

		case 'initializeWorker':
			initializeWorker(msg.url, msg.use_transferables);
			break;

		case 'initializeSims':
			initializeSims(msg.data);
			break;
	};
}

// Initialize worker thread - runs once when worker thread is created
// This function loads cache.js and determines how the worker will report its
// results to the GUI thread (Transferable Objects or Structured Cloning).
function initializeWorker(url, use_transferables) {
	// Get the base URL of the GUI thread and load cache.js
	var index = url.indexOf('?');
	if (index != -1) {
		url = url.substring(0, index);
	}
	index = url.lastIndexOf('/');
	if (index != -1) {
		url = url.substring(0, index+1);
	}
	importScripts(url + 'cards/cache.js?');

	// Determine which results-reporting mechanism to use
	if (use_transferables) {
	    self.returnResults = returnResultsTransferableObjects;
	    self.returnStats = returnStatsTransferableObjects;
	} else {
	    self.returnResults = returnResultsStructuredCloning;
	    self.returnStats = returnStatsStructuredCloning;
	}
}

// Initialize simulation loop - runs once per simulation session
function initializeSims(params) {
	echo = '';
	cache_player_deck = params['cache_player_deck'];
	cache_cpu_deck = params['cache_cpu_deck'];
	getbattleground = params['getbattleground'];
	getordered = params['getordered'];
	getordered2 = params['getordered2'];
	getexactorder = params['getexactorder'];
	getexactorder2 = params['getexactorder2'];
	surge = params['surge'];
	debug = params['debug'];
	loss_debug = params['loss_debug'];
	win_debug = params['win_debug'];
	mass_debug = params['mass_debug'];
	user_controlled = params['user_controlled'];
	trackStats = params['trackStats'];
	card_cache = {};    // clear card cache to avoid memory bloat when simulating different decks

    // Set up battleground effects, if any
	battlegrounds = {
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

	cache_player_deck_cards = getDeckCards(cache_player_deck);
	cache_cpu_deck_cards = getDeckCards(cache_cpu_deck);
}

var RESULTS = 0;
var STATS = 1;
// Return results to the GUI thread using Transferable Objects
// (Transferable Objects are faster, but they are not supported
// by all browsers.)
function returnResultsTransferableObjects() {
	// Create results ArrayBuffer
	var length = 32;    // 4 bytes per int, 8 bytes per float
	if (debug) length += (echo.length*2) + 8; // 2 bytes for each char
	var buffer = new ArrayBuffer(length);
	var view = new Int32Array(buffer, 0, 6);
	view[0] = RESULTS
	view[1] = games;
	view[2] = wins;
	view[3] = draws;
	view[4] = losses;
	view[5] = total_turns;
	view = new DataView(buffer, 24, 8);
	view.setFloat64(0, time_start_batch);
	if (debug) {
		// Convert echo to bytes in the ArrayBuffer
		var bufView = new Uint16Array(buffer, 56);
		for (var i=0, len = echo.length; i < len; i++) {
			bufView[i] = echo.charCodeAt(i);
		}
	}

	// Send batch results back to main thread
	self.postMessage(buffer, [buffer]);
}

// Return results to the GUI thread using Structured Cloning
// (used when Transferable Objects are NOT supported by the browser)
function returnResultsStructuredCloning() {
	// Create results Array
	var resultsArray = [];
	resultsArray[0] = games;
	resultsArray[1] = wins;
	resultsArray[2] = draws;
	resultsArray[3] = losses;
	resultsArray[4] = total_turns;
	resultsArray[5] = time_start_batch;
	if (debug) resultsArray[6] = echo;

	// Send batch results back to main thread
	self.postMessage({"cmd":"return_results", "data":resultsArray});
}

// Return results to the GUI thread using Structured Cloning
// (used when Transferable Objects are NOT supported by the browser)
function returnStatsTransferableObjects() {
    // Create results ArrayBuffer
    var hashLength = 96;                // 16 cards - 3 characters each - 2 bytes per character
    var statLength = hashLength + 16;   // 4 ints @ 4 bytes per float
    var numKeys = 0;
    for (var key in orders) {
        numKeys++;
    }
    var offset = 4;
    var buffer = new ArrayBuffer(numKeys * statLength + offset); // Extra int for message type
    var view = new Int32Array(buffer, 0, 1);
    view[0] = STATS;
    var filler = ' '.charCodeAt(0);
    for (var hash in orders) {
        var stat = orders[hash];
        // Convert echo to bytes in the ArrayBuffer
        var bufView = new Int16Array(buffer, offset, 48);
        var i = 0;
        var len = hash.length;
        for (; i < len; i++) {
            bufView[i] = hash.charCodeAt(i);
        }
        for (; i < 48;) {
            bufView[i++] = filler;
            bufView[i++] = filler;
            bufView[i++] = filler;
        }
        var view = new Int32Array(buffer, offset + hashLength, 4);
        view[0] = stat.games;
        view[1] = stat.wins;
        view[2] = stat.draws;
        view[3] = stat.losses;

        offset += statLength;
    }

    // Send batch results back to main thread
    self.postMessage(buffer, [buffer]);
}

// Return results to the GUI thread using Structured Cloning
// (used when Transferable Objects are NOT supported by the browser)
function returnStatsStructuredCloning() {
    // Send batch results back to main thread
    self.postMessage({ "cmd": "order_stats", "data": orders });
}

// prevents new batches from starting until new simulation loop is started
function stopsim() {
	running = false;
}

// Initializes a single simulation - runs once before each individual simulation
// - needs to reset the decks and fields before each simulation
function run_sim() {

	simulation_turns = 0;

	// Reset battleground effect
	battleground = '';

	// Set up empty decks
	deck = new Array();
	deck['cpu'] = new Array();
	deck['cpu']['deck'] = new Array();
	deck['player'] = new Array();
	deck['player']['deck'] = new Array();
    
	// Set up empty field
	field = new Array();
	field['cpu'] = new Array();
	field['cpu']['assaults'] = new Array();
	field['player'] = new Array();
	field['player']['assaults'] = new Array();

	// Load player deck
	if (cache_player_deck) {
	    deck['player'] = copy_deck(cache_player_deck_cards);
	}

	// Load enemy deck
	if (cache_cpu_deck) {
	    deck['cpu'] = copy_deck(cache_cpu_deck_cards);
	}

	deck.player.cards = getDeckCards(deck.player);
	deck.cpu.cards = getDeckCards(deck.cpu);

	// Set up deck order priority reference
	if (getordered && !getexactorder) deck['player']['ordered'] = copy_card_list(deck.player.cards);
	if (getordered2 && !getexactorder2) deck['cpu']['ordered'] = copy_card_list(deck.cpu.cards);

	if (simulate()) {
	    processSimResult();
	    return true;
	} else {
	    return false;
	}
}

function processSimResult() {

    games++;
    // Increment total turn count
    total_turns += simulation_turns;

    var result;
    if (!field.player.commander.isAlive()) {
        result = false;
        losses++;
    }
    else if (!field.cpu.commander.isAlive()) {
        result = true;
        wins++;
    }
    else {
        result = 'draw';
        draws++;
    }

    if (trackStats) updateStats(result);

    if (debug) {
        if (!mass_debug && !loss_debug && !win_debug) {
            sims_left = 0;
            return;
        } else if (loss_debug) {
            if (result == 'draw') {
                // Draw found
                sims_left = 0;
                return;
            } else if (result) {
                if (!sims_left) {
                    // 'No losses found
                    return;
                } else {
                    echo = '';
                }
            } else {
                // Loss found
                sims_left = 0;
                return;
            }
        } else if (win_debug) {
            if (result && result != 'draw') {
                // Win found
                sims_left = 0;
                return;
            } else {
                if (!sims_left) {
                    // 'No wins found
                    return;
                } else {
                    echo = '';
                }
            }
        }
    }

    if (sims_left > 0) sims_left--;
}

// Initialize simulation loop - runs once per simulation batch
function run_sims() {
	total_turns = 0;
	echo = '';
	games = 0;
	wins = 0;
	losses = 0;
	max_turns = 50;
	draws = 0;
	orders = {};

	while (sims_left) {
	    run_sim();
	}
	if (trackStats) returnStats();
	returnResults();
}

// Global variables used by worker-threads to run simulations
var debug = false;
var loss_debug = false;
var win_debug = false;
var mass_debug = false;
var getordered = false;
var getordered2 = false;
var getexactorder = false;
var getexactorder2 = false;
var getmission = 0;
var getbattleground = 0;
var getsiege = 0;
var user_controlled = false;
var tower_level = 0;
var tower_type = 0;
var battleground = [];
var cache_player_deck = 0;
var cache_cpu_deck = 0;
var cache_player_deck_cards;
var cache_cpu_deck_cards;
var echo = '';
var surge = false;
var games = 0;
var wins = 0;
var losses = 0;
var draws = 0;
var total_turns = 0;
var max_turns = 50;
var sims_left = 0;
var running = false;

var simulator_thread = true;
var orders = {};

importScripts('simulator_base.js', 'shared.js', 'runes.js');