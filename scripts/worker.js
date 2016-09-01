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

        case 'setupField':
            doSetupField_2(msg.data);
            break;

        case 'run_sims_2':
            doSetupField_2(msg.data, msg.swap);
            setDeckCaches();
            sims_left = sims_per_batch;
            running = true;
            runAll(sims_left);
            break;

        case 'run_sims_3':
            var data = msg.data;
            doSetupField_2(msg.data);
            calculateTotalDeckHealth();
            setDeckCaches();
            sims_left = sims_per_batch;
            running = true;
            runBatches(sims_left);
            break;
    };
}

var setDeckCaches = function () {
    cache_player_deck_cards = getDeckCards(cache_player_deck);
    cache_cpu_deck_cards = getDeckCards(cache_cpu_deck);
};

var calculateTotalDeckHealth = function () {
    var totalDeckHealth = 0;
    totalDeckHealth += cache_player_deck_cards.commander.health;
    for (var i = 0; i < cache_player_deck_cards.deck.length; i++) {
        totalDeckHealth += cache_player_deck_cards.deck[i].health;
    }
    SIMULATOR.totalDeckHealth = totalDeckHealth;

    var totalCpuDeckHealth = 0;
    totalCpuDeckHealth += cache_cpu_deck_cards.commander.health;
    for (var i = 0; i < cache_cpu_deck_cards.deck.length; i++) {
        totalCpuDeckHealth += cache_cpu_deck_cards.deck[i].health;
    }
    SIMULATOR.totalCpuDeckHealth = totalCpuDeckHealth;
}

function doSetupField(jsonText) {
    var cachedField = decode(jsonText);
    doSetupField_2(cachedField);
}

function doSetupField_2(cachedField, swapPlayers) {
    if (swapPlayers) {
        var player = cachedField.player;
        cachedField.player = cachedField.cpu;
        cachedField.cpu = player;
    }

    var copyPlayerField = function (original_field, copy_field, player) {
        var originalAssaults = original_field[player].assaults;
        var copyAssaults = copy_field[player].assaults;
        var uids = copy_field.uids;
        for (var i = 0; i < originalAssaults.length; i++) {
            var uid = originalAssaults[i].uid;
            var copy = uids[uid];
            copyAssaults.push(copy);
        }
    }

    setDeckCaches = function () {
        /*
        var caches = {
            'player': {
                commander: null,
                deck: []
            },
            'cpu': {
                commander: null,
                deck: []
            }
        };

        var uids = cachedField.uids;
        for (var key in uids) {
            var card = uids[key];
            if (!card.owner || card.played) continue;
            if (card.isCommander()) {
                caches[card.owner].commander = card;
            } else {
                caches[card.owner].deck.push(card);
            }
        }
        cache_player_deck_cards = caches.player;
        cache_cpu_deck_cards = caches.cpu;
        */
    }

    SIMULATOR.setupField = function (copy_field) {
        copy_field.cpu = { assaults: [] };
        copy_field.player = { assaults: [] };
        copy_field.uids = {};

        var cachedUids = cachedField.uids;
        for (var i in cachedUids) {
            var cachedInfo = cachedUids[i];
            cachedInfo.reset();
            copy_field.uids[i] = cachedInfo;
            if (cachedInfo.played && cachedInfo.isAlive()) {
                copy_field[cachedInfo.owner].assaults[cachedInfo.key] = cachedInfo;
            }
        }
        copy_field.cpu.commander = copy_field.uids[-2];
        copy_field.player.commander = copy_field.uids[-1];
    };

    calculateTotalDeckHealth = function () {
        var totalDeckHealth = 0;
        var totalCpuDeckHealth = 0;
        for (var i in cachedField.uids) {
            var card = cachedField.uids[i];
            if (i >= -1 && i <= 15) {
                totalDeckHealth += card.health;
            } else {
                totalCpuDeckHealth += card.health;
            }
        }
        SIMULATOR.totalDeckHealth = totalDeckHealth;
        SIMULATOR.totalCpuDeckHealth = totalCpuDeckHealth;
    }

    for (var i in cachedField.uids) {
        var cached = cachedField.uids[i];
        makeResetFunction(cached, i);
        cached.__proto__ = CardPrototype;
    }

    var caches = {
        'player': {
            commander: null,
            deck: []
        },
        'cpu': {
            commander: null,
            deck: []
        }
    };

    var uids = cachedField.uids;
    for (var key in uids) {
        var card = uids[key];
        if (!card.owner || card.played) continue;
        if (card.uid < 0) {
            caches[card.owner].commander = card;
        } else {
            caches[card.owner].deck.push(card);
        }
    }
    cache_player_deck_cards = caches.player;
    cache_cpu_deck_cards = caches.cpu;

    return;
    cachedField = (function () {
        var copy_field = {
            cpu: { assaults: [] },
            player: { assaults: [] },
            uids: {},
            statuses: {}
        };

        for (var i in cachedField.uids) {
            var cached = cachedField.uids[i];
            makeResetFunction(cached, i);
            /*
            var copy = copyCard(cached);
            copy_field.uids[i] = copy;
            makeResetFunction(copy, i);
            copy_field.uids[i] = copy;
            */

            //var copy = get_card_apply_battlegrounds(cached);
            //copy.reset = cached.reset();
            cached.__proto__ = CardPrototype;
            copy_field.uids[i] = cached;
        }
        copy_field.cpu.commander = copy_field.uids[-2];
        copy_field.player.commander = copy_field.uids[-1];

        var uids = copy_field.uids;

        var originalAssaults = cachedField.player.assaults;
        var copyAssaults = copy_field.player.assaults;
        for (var i = 0; i < originalAssaults.length; i++) {
            var uid = originalAssaults[i].uid;
            copyAssaults.push(uids[uid]);
        }

        var originalAssaults = cachedField.cpu.assaults;
        var copyAssaults = copy_field.cpu.assaults;
        for (var i = 0; i < originalAssaults.length; i++) {
            var uid = originalAssaults[i].uid;
            copyAssaults.push(uids[uid]);
        }


        var caches = {
            'player': {
                commander: null,
                deck: []
            },
            'cpu': {
                commander: null,
                deck: []
            }
        };

        var uids = cachedField.uids;
        for (var key in uids) {
            var card = uids[key];
            if (!card.owner || card.played) continue;
            if (card.uid < 0) {
                var copy = copyCard(card);
                caches[copy.owner].commander = copy;
            } else {
                var copy = copyCard(card);
                caches[copy.owner].deck.push(copy);
            }
        }
        cache_player_deck_cards = caches.player;
        cache_cpu_deck_cards = caches.cpu;

        return copy_field;
    })();
}

function makeResetFunction(card, uid) {
    var statusEffects = [];
    if (card.health_left !== undefined) statusEffects.push(makeSetter(card, "health_left"));
    if (card.owner !== undefined) statusEffects.push(makeSetterStr(card, "owner"));
    if (uid > 0) {
        if (card.timer !== undefined) statusEffects.push(makeSetter(card, "timer"));
        if (card.played === undefined) card.played = false;
        statusEffects.push(makeSetter(card, "played"));
        statusEffects.push(makeSetter(card, "key"));

        if (card.played) {
            statusEffects.push("this.attack_rally = 0;");
            statusEffects.push("this.enfeebled = 0;");
            if (uid <= 15) {
                statusEffects.push("this.protected = 0;");
                statusEffects.push("this.barrier_ice = 0;");
                statusEffects.push("this.invisible = 0;");
                statusEffects.push(makeSetter(card, "attack_weaken"));
                statusEffects.push(makeSetter(card, "jammed"));
            } else if (uid > 100) {
                statusEffects.push(makeSetter(card, "protected"));
                statusEffects.push(makeSetter(card, "barrier_ice"));
                statusEffects.push(makeSetter(card, "invisible"));
                statusEffects.push("this.attack_weaken = 0;");
                statusEffects.push("this.nullified = 0;");
                statusEffects.push("this.jammed = false;");
            }
            statusEffects.push(makeSetter(card, "attack_berserk"));
            statusEffects.push(makeSetter(card, "poisoned"));
            statusEffects.push(makeSetterObj(card, "scorched"));
            statusEffects.push(makeSetterObj(card, "enhanced"));
            if (card.imbued) {
                statusEffects.push(makeSetterObj(card, "imbued"));
                var imbue = card.imbued;
                for (var key in imbue) {
                    var imbuement = imbue[key];
                    if (key == "skill" || key == "empowerSkills") {
                        // TODO: Handle this
                    } else if (key == "flurry") {
                        // Handled below
                    } else {
                        // Reset imbued passive/triggered skills to their imbued values
                        statusEffects.push(makeSetter(card, key));
                    }
                }
            }

            if (card.flurry) {
                statusEffects.push("this.flurry.countdown = " + (card.flurry.countdown || 0) + ";");
            }
            // Other skills
            if (!card.reusableSkills) {
                statusEffects.push(makeSkillTimerSetter(card.skill, "skill"));
                statusEffects.push(makeSkillTimerSetter(card.empowerSkills, "empowerSkills"));
            }
        }
    } else {
        // Other skillscard.played = false;
        statusEffects.push("this.played = true;");
        if (!card.reusableSkills) {
            statusEffects.push(makeSkillTimerSetter(card.skill, "skill"));
            statusEffects.push(makeSkillTimerSetter(card.empowerSkills, "empowerSkills"));
        }
    }
    card.reset = new Function("card", statusEffects.join(" "));
}

function makeSetter(card, field) {
    return "this." + field + " = " + card[field] + ";";
}

function makeSetterStr(card, field) {
    return "this." + field + " = '" + card[field] + "';";
}

function makeSetterObj(card, field) {
    return "this." + field + " = " + JSON.stringify(card[field]) + ";";
}

function makeSkillTimerSetter(skills, skillField) {
    var skillTimers = [];
    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        if (skill.c) {
            skillTimers.push("skills[" + i + "].countdown = " + skill.countdown + ";");
        }
    }
    if (skillTimers.length > 0) {
        return "var skills = this." + skillField + ";" + skillTimers.join(" ");
    } else {
        return "";
    }
}

function copySkillTimers(skills, skillTimers) {
    var hasTimers = false;
    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        if (skill.countdown) {
            skillTimers[i] = skill.countdown;
            hasTimers = true;
        }
    }
    return hasTimers;
}

function copyCard(card) {
    var unit = makeUnitInfo(card.id, card.level, card.runes);
    var newCard = get_card_by_id(unit);
    extend(newCard, card)
    return newCard;
}

function extend(target, source) {
    for (var prop in source) {
        if (typeof source[prop] === 'object') {
            if (Array.isArray(source[prop])) {
                var targetArray = [];
                var sourceArray = source[prop];
                for (var i = 0, len = sourceArray.length; i < len; i++) {
                    targetArray.push(extend({}, sourceArray[i]));
                }
                target[prop] = targetArray;
            } else {
                var targetVal = (target[prop] || {});
                target[prop] = extend(targetVal, source[prop]);
            }
        } else {
            target[prop] = source[prop];
        }
    }
    return target;
}

function makyCopy(target, source) {

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
        self.returnStats = returnStatsTransferableObjects;
        self.returnCardStats = returnCardStatsTransferableObjects;
    } else {
        self.returnResults = returnResultsStructuredCloning;
        self.returnStats = returnStatsStructuredCloning;
        self.returnCardStats = returnCardStatsStructuredCloning;
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
    getraid = params['getraid'];
    getclash = params['getclash'];
    raidlevel = params['raidlevel'];
    getsiege = params['getsiege'];
    tower_level = params['tower_level'];
    tower_type = params['tower_type'];
    smartAI = params['smartAI'];
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

var RESULTS = 0;
var STATS = 1;
var CARD_STATS = 2;
// Return results to the GUI thread using Transferable Objects
// (Transferable Objects are faster, but they are not supported
// by all browsers.)
function returnResultsTransferableObjects() {
    // Create results ArrayBuffer
    var length = 28;    // 4 bytes per int
    if (debug) length += (echo.length * 2); // 2 bytes for each char
    var buffer = new ArrayBuffer(length);
    var view = new Int32Array(buffer, 0, 7);
    view[0] = RESULTS
    view[1] = games;
    view[2] = wins;
    view[3] = draws;
    view[4] = losses;
    view[5] = total_turns;
    view[6] = total_points;
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
    resultsArray[6] = total_points;
    if (debug) resultsArray[7] = echo;

    // Send batch results back to main thread
    self.postMessage({ "cmd": "return_results", "data": resultsArray });
}

// Return results to the GUI thread using Structured Cloning
// (used when Transferable Objects are NOT supported by the browser)
function returnStatsTransferableObjects() {
    // Create results ArrayBuffer
    var hashLength = 0;
    var statLength = 0;
    for (var key in orders) {
        statLength++;
        hashLength += key.length;
    }
    statLength *= 24;   // 6 ints @ 4 bytes each
    hashLength *= 2;    // 2 bytes per character
    var dataLength = statLength + hashLength;
    var offset = 4;
    var buffer = new ArrayBuffer(offset + dataLength); // Extra int for message type
    var view = new DataView(buffer);
    view.setInt32(0, STATS);
    for (var hash in orders) {
        var stat = orders[hash];

        // Length of hash
        var len = hash.length;
        view.setInt32(offset, len);
        offset += 4;

        // Convert hash to bytes in the ArrayBuffer
        var i = 0;
        for (; i < len; i++) {
            view.setInt16(offset, hash.charCodeAt(i));
            offset += 2;
        }

        view.setInt32(offset, stat.games);
        offset += 4;
        view.setInt32(offset, stat.wins);
        offset += 4;
        view.setInt32(offset, stat.draws);
        offset += 4;
        view.setInt32(offset, stat.losses);
        offset += 4;
        view.setInt32(offset, stat.points);
        offset += 4;
    }

    // Send batch results back to main thread
    self.postMessage(buffer, [buffer]);
}

function returnCardStatsTransferableObjects() {

    // Create results ArrayBuffer
    var dataLength = 0;
    for (var card in winratesByCard) {
        dataLength++;
    }
    dataLength *= 12;   // 3 ints @ 4 bytes each
    var offset = 4;
    var buffer = new ArrayBuffer(offset + dataLength); // Extra int for message type
    var view = new DataView(buffer);
    view.setInt32(0, CARD_STATS);
    for (var hash in winratesByCard) {
        var stat = winratesByCard[hash];

        // hash of card
        var dec = base64_to_decimal(hash);
        view.setInt32(offset, dec);
        offset += 4;

        view.setInt32(offset, stat.games);
        offset += 4;

        view.setInt32(offset, stat.wins);
        offset += 4;
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

function returnCardStatsStructuredCloning() {
    // Send batch results back to main thread
    self.postMessage({ "cmd": "card_stats", "data": winratesByCard });
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

    // Reset battleground effect
    battleground = '';

    if (!cache_player_deck_cards) {
        setDeckCaches();
        calculateTotalDeckHealth();
    }

    var deck = {
        cpu: copy_deck(cache_cpu_deck_cards),
        player: copy_deck(cache_player_deck_cards)
    }

    // Set up deck order priority reference
    if (getordered && !getexactorder) deck.player.ordered = copy_card_list(deck.player.deck);
    if (getordered2 && !getexactorder2) deck.cpu.ordered = copy_card_list(deck.cpu.deck);
    SIMULATOR.deck = deck;

    // Set up empty field
    SIMULATOR.field = {
        cpu: {
            assaults: []
        },
        player: {
            assaults: []
        }
    };

    /*
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
    */

    if (SIMULATOR.simulate()) {
        processSimResult();
        return true;
    } else {
        return false;
    }
}

function processSimResult() {

    games++;
    // Increment total turn count
    total_turns += SIMULATOR.simulation_turns;
    var points = SIMULATOR.CalculatePoints();
    total_points += points;

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

    if (trackStats) SIMULATOR.updateStats(result, points);
    if (getCardStats) SIMULATOR.updateCardStats(result);

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
    total_points = 0;
    echo = '';
    games = 0;
    wins = 0;
    losses = 0;
    draws = 0;
    orders = {};
    winratesByCard = {};

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
var smartAI = true;
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
var total_points = 0;
var max_turns = 100;
var sims_left = 0;
var sims_per_batch = 0;
var running = false;
var getCardStats = false;

var simulator_thread = true;
var orders = {};
var winratesByCard = {};

importScripts('http://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.0/seedrandom.min.js');
importScripts('simulator_base.js', 'shared.js', 'data/runes.js', 'data/raids.js');