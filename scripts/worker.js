"use strict";

var SIM_CONTROLLER = {};

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
        case 'run_sims':
            var data = msg.data;
            if (data) {
                sims_left = data[0];
            } else {
                sims_left = 1;
            }
            running = true;
            runBatches(sims_left);
            break;

        case 'stopsim':
            SIM_CONTROLLER.stopsim();
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
// This function loads data files and determines how the worker will report its
// results to the GUI thread (Transferable Objects or Structured Cloning).
function initializeWorker(url, use_transferables) {
    // Get the base URL of the GUI thread and load data files
    var index = url.indexOf('?');
    if (index != -1) {
        url = url.substring(0, index);
    }
    index = url.lastIndexOf('/');
    if (index != -1) {
        url = url.substring(0, index + 1);
    }
    importScripts('data/cards.js', 'data/fusions.js', 'data/bges.js');

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
    getexactorder = params['getexactorder'];
    getexactorder2 = params['getexactorder2'];
    getmission = params['getmission'];
    missionlevel = params['missionlevel'];
    getraid = params['getraid'];
    getclash = params['getclash'];
    raidlevel = params['raidlevel'];
    getsiege = params['getsiege'];
    tower_level = params['tower_level'];
    tower_type = params['tower_type'];
    pvpAI = params['pvpAI'];
    surge = params['surge'];
    debug = params['debug'];
    loss_debug = params['loss_debug'];
    win_debug = params['win_debug'];
    mass_debug = params['mass_debug'];
    SIMULATOR.user_controlled = params['user_controlled'];
    trackStats = params['trackStats'];
    getCardStats = params['getCardStats'];
    sims_per_batch = params['sims_per_batch'];
    card_cache = {};    // clear card cache to avoid memory bloat when simulating different decks

    // Set up battleground effects, if any
    SIMULATOR.battlegrounds = getBattlegrounds(getbattleground, getraid);

    cache_player_deck_cards = false;
    cache_cpu_deck_cards = false;
}

var MSG_TYPE_RESULTS = 0;
// Return results to the GUI thread using Transferable Objects
// (Transferable Objects are faster, but they are not supported
// by all browsers.)
function returnResultsTransferableObjects() {
    // Create results ArrayBuffer
    var length = 24;    // 4 bytes per int
    if (debug) length += (echo.length * 2); // 2 bytes for each char
    var buffer = new ArrayBuffer(length);
    var view = new Int32Array(buffer, 0, 6);
    view[0] = MSG_TYPE_RESULTS
    view[1] = games;
    view[2] = wins;
    view[3] = draws;
    view[4] = losses;
    view[5] = total_turns;
    if (debug) {
        // Convert echo to bytes in the ArrayBuffer
        var bufView = new Uint16Array(buffer, 28);
        for (var i = 0, len = echo.length; i < len; i++) {
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
    if (debug) resultsArray[5] = echo;

    // Send batch results back to main thread
    self.postMessage({ "cmd": "return_results", "data": resultsArray });
}

// prevents new batches from starting until new simulation loop is started
SIM_CONTROLLER.stopsim = function () {
    running = false;
}

// Initializes a single simulation - runs once before each individual simulation
// - needs to reset the decks and fields before each simulation
function run_sim() {
    if (captureSeed) captureSeed = Math.seedrandom();
    SIMULATOR.simulation_turns = 0;

    doSetup();
    if (!SIMULATOR.simulate()) return false;
    if (!skipResults) processSimResult();
}

function processSimResult() {

    games++;
    // Increment total turn count
    total_turns += SIMULATOR.simulation_turns;

    var result;
    if (!SIMULATOR.field.player.commander.isAlive()) {
        result = false;
        losses++;
    } else if (!SIMULATOR.field.cpu.commander.isAlive()) {
        result = true;
        wins++;
    } else {
        result = 'draw';
        draws++;
    }
    
    if (debug || captureSeed) {
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
                    //echo = 'No losses found';
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
                    //echo = 'No wins found';
                    return;
                } else {
                    echo = '';
                }
            }
        }
    }

    if (sims_left > 0) sims_left--;
}

function runBatches(total_remaining) {

    var batch_size = 0;
    var elapsed;

    var i = 0;
    while (running && total_remaining && i < 5) {
        if (batch_size > 0) { // batch_size == 0 means a fresh set of simulations
            if (elapsed == 0) {
                batch_size = 1;
            } else {
                batch_size = Math.ceil(batch_size / elapsed);
            }
        } else {
            batch_size = 1;
        }
        if (batch_size > total_remaining) // Limit by how many sims are left
            batch_size = total_remaining;

        sims_left = batch_size;
        total_remaining -= batch_size;

        var time_start = new Date().getTime();
        run_sims();
        elapsed = (new Date().getTime() - time_start) / 1000;

        if (trackStats) returnStats();
        if (getCardStats) returnCardStats();
        returnResults();
        i++;
    }
    if (running && total_remaining) setTimeout(runBatches, 0, total_remaining);
}

function runAll(sims) {

    var batch_size = 0;
    var elapsed;

    sims_left = sims;

    var time_start = new Date().getTime();
    run_sims();
    elapsed = (new Date().getTime() - time_start) / 1000;

    if (trackStats) returnStats();
    returnResults();
}

// Initialize simulation loop - runs once per simulation batch
var captureSeed = false;
function run_sims() {
    total_turns = 0;
    echo = '';
    games = 0;
    wins = 0;
    losses = 0;
    draws = 0;

    if (debug && (win_debug || loss_debug)) {
        debug = false;
        captureSeed = true;
    }

    while (sims_left) {
        run_sim();
    }
    if (captureSeed) {
        if ((win_debug && wins) || (loss_debug && (losses || draws))) {
            debug = true;
            Math.seedrandom(captureSeed);
            captureSeed = false;
            run_sim();
        }
    }
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
var getraid = false;
var getclash = false;
var raidlevel = 0;
var trackStats = false;
var getCardStats = false;
var getbattleground = 0;
var getsiege = 0;
var tower_level = 0;
var tower_type = 0;
var pvpAI = true;
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
var max_turns = 100;
var sims_left = 0;
var sims_per_batch = 0;
var running = false;
var getCardStats = false;

importScripts('http://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.0/seedrandom.min.js');
importScripts('simulator_base.js', 'shared.js', 'data/runes.js', 'data/raids.js');