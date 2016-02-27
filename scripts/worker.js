"use strict";

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
            stopsim();
            break;

		case 'initializeWorker':
			initializeWorker(msg.url, msg.use_transferables);
			break;

		case 'initializeSims':
			initializeSims(msg.data);
			break;
            
	    case 'setupField':
	        doSetupField(msg.data);
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
    var cachedField = JSON.parse(jsonText);

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
        setDeckCache('player');
        setDeckCache('cpu');
    }

    var setDeckCache = function(p) {
        var deck_cache = {
            commander: null,
            deck: []
        };
        var assaults = cachedField.uids;
        for (var key in assaults) {
            var card = assaults[key];
            if (card.owner != p || card.played) continue;
            if (card.isCommander()) {
                deck_cache.commander = card;
            } else {
                deck_cache.deck.push(card);
            }
        }
        if (p == 'player') {
            cache_player_deck_cards = deck_cache;
        } else {
            cache_cpu_deck_cards = deck_cache;
        }
    }

    SIMULATOR.setupField = function (copy_field) {
        copy_field.cpu = { assaults: [] };
        copy_field.player = { assaults: [] };
        copy_field.uids = {};

        var cachedUids = cachedField.uids;
        for (var i in cachedUids) {
            var cachedInfo = cachedUids[i];
            if (i < 0 || cachedInfo.played) {
                if (cachedInfo.health_left) {
                    var unit = makeUnitInfo(cachedInfo.id, cachedInfo.level, cachedInfo.runes);
                    var newCard = get_card_apply_battlegrounds(unit);
                    setStatuses(newCard, cachedInfo.statuses);
                    copy_field.uids[i] = newCard;
                } else {
                    copy_field.uids[i] = cachedInfo;
                }
            }
        }
        copy_field.cpu.commander = copy_field.uids[-2];
        copy_field.player.commander = copy_field.uids[-1];

        var uids = copy_field.uids;
        var originalAssaults = cachedField.player.assaults;
        var copyAssaults = copy_field.player.assaults;
        for (var i = 0; i < originalAssaults.length; i++) {
            var card = uids[originalAssaults[i].uid];
            card.key = i;
            copyAssaults.push(card);
        }

        var originalAssaults = cachedField.cpu.assaults;
        var copyAssaults = copy_field.cpu.assaults;
        for (var i = 0; i < originalAssaults.length; i++) {
            var card = uids[originalAssaults[i].uid];
            card.key = i;
            copyAssaults.push(card);
        }
    };

    calculateTotalDeckHealth = function ()
    {
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

    cachedField = (function () {
        var copy_field = {
            cpu: { assaults: [] },
            player: { assaults: [] },
            uids: {},
            statuses: {}
        };

        for (var i in cachedField.uids) {
            var cached = cachedField.uids[i];
            var copy = copyCard(cached);
            copy_field.uids[i] = copy;
            var statuses = {};
            copy.statuses = statuses;
            copyStatuses(cached, statuses);
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

        return copy_field;
    })();
}

function setStatuses(card, statuses)
{
    var statusEffects = statuses.statusEffects;
    for (var i = 0, len = statusEffects.length; i < len; i++)
    {
        var statusEffect = statusEffects[i];
        card[statusEffect.key] = statusEffect.value;
    }

    if (statuses.flurry_timer) {
        card.flurry.countdown = statuses.flurry_timer;
    }
    if(statuses.skillTimers)
    {
        setSkillTimers(card.skill, statuses.skillTimers);
    }
    if (statuses.empowerSkillTimers) {
        setSkillTimers(card.empowerSkills, statuses.empowerSkillTimers);
    }
}

function setSkillTimers(skills, skillTimers)
{
    for(var key in skillTimers)
    {
        skills[key].countdown = skillTimers[key];
    }
}

function copyStatuses(card, statuses) {
    var statusEffects = [];
    if (card.health_left !== undefined) statusEffects.push({ key: "health_left", value: card.health_left });
    if (card.timer !== undefined) statusEffects.push({ key: "timer", value: card.timer });
    if (card.owner !== undefined) statusEffects.push({ key: "owner", value: card.owner });
    if (card.played !== undefined) statusEffects.push({ key: "played", value: card.played });

    if (card.attack_rally) statusEffects.push({ key: "attack_rally", value: card.attack_rally });
    if (card.attack_weaken) statusEffects.push({ key: "attack_weaken", value: card.attack_weaken });
    if (card.attack_berserk) statusEffects.push({ key: "attack_berserk", value: card.attack_berserk });
    if (card.poisoned) statusEffects.push({ key: "poisoned", value: card.poisoned });
    if (card.scorched) statusEffects.push({ key: "scorched", value: card.scorched });
    if (card.enfeebled) statusEffects.push({ key: "enfeebled", value: card.enfeebled });
    if (card.protected) statusEffects.push({ key: "protected", value: card.protected });
    if (card.barrier_ice) statusEffects.push({ key: "barrier_ice", value: card.barrier_ice });
    if (card.enhanced) statusEffects.push({ key: "enhanced", value: card.enhanced });
    if (card.jammed) statusEffects.push({ key: "jammed", value: card.jammed });
    if (card.evade) statusEffects.push({ key: "evade", value: card.evade });
    if (card.invisible) statusEffects.push({ key: "invisible", value: card.invisible });
    statuses.statusEffects = statusEffects;

    if (card.flurry) {
        statuses.flurry_timer = card.flurry.c;
    }
    // Other skills
    if (!card.reusableSkills) {
        var skillTimers = [];
        if (copySkillTimers(card.skill, skillTimers))
        {
            statuses.skillTimers = skillTimers;
        }
        var skillTimers = [];
        if (copySkillTimers(card.empowerSkills, skillTimers)) {
            statuses.empowerSkillTimers = skillTimers;
        }
    }
}

function copySkillTimers(skills, skillTimers)
{
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
	importScripts(url + 'scripts/data/cache.js?');

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
	getmission = params['getmission'];
	getraid = params['getraid'];
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
	user_controlled = params['user_controlled'];
	trackStats = params['trackStats'];
	card_cache = {};    // clear card cache to avoid memory bloat when simulating different decks

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
	if (getraid) {
	    var bge_id = RAIDS[getraid].bge;
	    if (bge_id) {
	        var battleground;
	        for (var i = 0; i < BATTLEGROUNDS.length; i++) {
	            var battleground = BATTLEGROUNDS[i];
	            if (battleground.id == bge_id) {
	                break;
	            } else {
	                battleground = null;
	            }
	        }
	        if (battleground && raidlevel >= battleground.starting_level) {
	            var enemy_only = battleground.enemy_only;
	            if (battleground.effect.skill) {
	                if (battleground.scale_with_level) {
	                    var mult = battleground.scale_with_level * (raidlevel - battleground.starting_level + 1);
	                } else {
	                    mult = 1;
	                }
	                var battleground = MakeBattleground(battleground.name, battleground.effect.skill, mult);
	                battleground.enemy_only = enemy_only;
	                battlegrounds.onTurn.push(battleground);
	            } else if (battleground.effect.evolve_skill || battleground.effect.add_skill) {
	                var battleground = MakeSkillModifier(battleground.name, battleground.effect);
	                battleground.enemy_only = enemy_only;
	                battlegrounds.onTurn.push(battleground);
	            }
	        }
	    }
	}
	SIMULATOR.battlegrounds = battlegrounds;

	setDeckCaches();

	calculateTotalDeckHealth();
}

var RESULTS = 0;
var STATS = 1;
// Return results to the GUI thread using Transferable Objects
// (Transferable Objects are faster, but they are not supported
// by all browsers.)
function returnResultsTransferableObjects() {
	// Create results ArrayBuffer
	var length = 36;    // 4 bytes per int, 8 bytes per float
	if (debug) length += (echo.length*2); // 2 bytes for each char
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
	resultsArray[6] = total_points;
	if (debug) resultsArray[7] = echo;

	// Send batch results back to main thread
	self.postMessage({"cmd":"return_results", "data":resultsArray});
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
	SIMULATOR.field = {
	    cpu: {
            assaults: []
	    },
	    player: {
            assaults: []
	    }
	};

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
	if (getordered && !getexactorder) deck['player']['ordered'] = copy_card_list(deck.player.deck);
	if (getordered2 && !getexactorder2) deck['cpu']['ordered'] = copy_card_list(deck.cpu.deck);

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
    }
    else if (!SIMULATOR.field.cpu.commander.isAlive()) {
        result = true;
        wins++;
    }
    else {
        result = 'draw';
        draws++;
    }

    if (trackStats) SIMULATOR.updateStats(result, points);

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
        returnResults();
        i++;
    }
    if (running && total_remaining) setTimeout(runBatches, 0, total_remaining);
}

// Initialize simulation loop - runs once per simulation batch
function run_sims() {
    total_turns = 0;
    total_points = 0;
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
var getraid = 0;
var raidlevel = 0;
var trackStats = false;
var getbattleground = 0;
var getsiege = 0;
var user_controlled = false;
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
var max_turns = 50;
var sims_left = 0;
var running = false;

var simulator_thread = true;
var orders = {};

importScripts('simulator_base.js', 'shared.js', 'data/runes.js', 'data/raids.js');