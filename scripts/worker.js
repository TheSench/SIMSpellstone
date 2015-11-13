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
	} else {
		self.returnResults = returnResultsStructuredCloning;
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
	gettournament = params['gettournament'];
	getexactorder = params['getexactorder'];
	getexactorder2 = params['getexactorder2'];
	surge = params['surge'];
	debug = params['debug'];
	loss_debug = params['loss_debug'];
	mass_debug = params['mass_debug'];
}

// Return results to the GUI thread using Transferable Objects
// (Transferable Objects are faster, but they are not supported
// by all browsers.)
function returnResultsTransferableObjects() {
	// Create results ArrayBuffer
	var length = 72;
	if (debug) length += (echo.length*2) + 8; // 2 bytes for each char
	var buffer = new ArrayBuffer(length);
	var view = new Int32Array(buffer, 0, 8);
	view[0] = games;
	view[1] = wins;
	view[2] = draws;
	view[3] = losses;
	view[4] = total_turns;
	view = new Float64Array(buffer, 56, 1);
	view[0] = time_start_batch;
	if (debug) {
		// Convert echo to bytes in the ArrayBuffer
		var bufView = new Uint16Array(buffer, 80);
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
	resultsArray[8] = time_start_batch;
	if (debug) resultsArray[9] = echo;

	// Send batch results back to main thread
	self.postMessage({"cmd":"return_results", "data":resultsArray});
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

	// Initialize summon counter to track limit
	number_of_summons = new Array();
	number_of_summons['cpu'] = 0;
	number_of_summons['player'] = 0;

	// Set up empty field
	field = new Array();
	field['cpu'] = new Array();
	field['cpu']['assaults'] = new Array();
	field['player'] = new Array();
	field['player']['assaults'] = new Array();

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
	    var battlegrounds = getbattleground.split(",");
	    for (i = 0; i < battlegrounds.length; i++) {
	        var id = battlegrounds[i];
	        var battleground = quests['root']['battleground'][id];
	        battlegrounds.push(MakeBattleground(battleground.name, battleground.skill));
	    }
	}

	if (simulate()) {
	    processSimResult2();
	    return true;
	} else {
	    return false;
	}
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

	while (sims_left) {
		run_sim();
	}
	returnResults();
}

// Global variables used by worker-threads to run simulations
var turn = 0;
var debug = false;
var loss_debug = false;
var mass_debug = false;
var getordered = false;
var getordered2 = false;
var gettournament = false;
var getexactorder = false;
var getexactorder2 = false;
var getmission = 0;
var getbattleground = 0;
var gettowerSiege = 0;
var tower_level = 0;
var battleground = [];
var cache_player_deck = 0;
var cache_cpu_deck = 0;
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

importScripts('simulator_base.js', 'shared.js');