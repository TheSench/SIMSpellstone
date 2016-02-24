"use strict";

// Initialize simulation loop - runs once per simulation session
var startsim = function (autostart) {
    document.getElementById('ui').style.display = 'none';

    if (_DEFINED('autolink') && !autostart) {
        window.location.href = generate_link(1, 1);
        return false;
    }

    clearCardSpace();
    card_cache = {};

    total_turns = 0;
    time_start = new Date();
    time_stop = 0;
    echo = '';
    games = 0;
    sims_left = 1;
    user_controlled = true;
    debug = document.getElementById('debug').checked;
    var d = document.getElementById('auto_mode');
    if (d) {
        auto_mode = d.checked;
    }
    getdeck = document.getElementById('deck').value;
    getcardlist = document.getElementById('cardlist').value;
    getdeck2 = document.getElementById('deck2').value;
    getcardlist2 = document.getElementById('cardlist2').value;
    getordered2 = document.getElementById('ordered2').checked;
    getexactorder2 = document.getElementById('exactorder2').checked;
    getmission = document.getElementById('mission').value;
    getraid = document.getElementById('raid').value;
    raidlevel = document.getElementById('raid_level').value;
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
    cache_player_deck_cards = getDeckCards(cache_player_deck);

    max_turns = 50;

    // Load enemy deck
    smartAI = true;
    if (getdeck2) {
        cache_cpu_deck = hash_decode(getdeck2);
    } else if (getcardlist2) {
        cache_cpu_deck = load_deck_from_cardlist(getcardlist2);
    } else if (getmission) {
        cache_cpu_deck = load_deck_mission(getmission);
        smartAI = false;    // PvE decks do not use "Smart AI"
    } else if (getraid) {
        cache_cpu_deck = load_deck_raid(getraid, raidlevel);
        smartAI = false;    // PvE decks do not use "Smart AI"
    } else {
        cache_cpu_deck = load_deck_from_cardlist();
    }
    cache_cpu_deck_cards = getDeckCards(cache_cpu_deck);

    wins = 0;
    losses = 0;
    draws = 0;

    outp('<strong>Initializing simulations...</strong>');

    current_timeout = setTimeout(run_sims);

    return false;
}

// Interrupt simulations
var stopsim = function () {
    draw_match_end();
}

// Loops through all simulations
// - keeps track of number of simulations and outputs status
var debug_end = function () {
    if (simulating) {
        return;
    }

    var result = processSimResult();

    if (result == 'draw') {
        outp(echo + '<br><h1>DRAW</h1><br>');
    } else if (result) {
        outp(echo + '<br><h1>WIN</h1><br>');
    } else {
        outp(echo + '<br><h1>LOSS</h1><br>');
    }

    draw_match_end();
}

var draw_match_end = function () {
    document.getElementById('ui').style.display = 'block';

    draw_cards(field);   // Draw battlefield with no hand

    // Show interface
    document.getElementById('ui').style.display = 'block';

    // Hide stop button
    document.getElementById('stop').style.display = 'none';

    scroll_to_end();
}

var run_sims = function () {
    run_sim();
    debug_end();
}

// Initializes a single simulation - runs once before each individual simulation
// - needs to reset the decks and fields before each simulation
var run_sim = function () {
    doSetup();
    if (!simulate()) return false;
    processSimResult();
    debug_end();
}

function doSetup() {

    simulation_turns = 0;

    // Reset battleground effect
    battleground = '';

    // Set up empty decks
    deck = {
        cpu: {
            deck: []
        },
        player: {
            deck: []
        }
    }

    // Set up empty field
    field = {
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
    if (getordered && !getexactorder) deck.player.ordered = copy_card_list(deck.player.cards);
    if (getordered2 && !getexactorder2) deck.cpu.ordered = copy_card_list(deck.cpu.cards);

    debug_dump_decks();
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
        
    return result;
}

// Global variables used by single-threaded simulator
var run_sims_count = 0;
var run_sims_batch = 0;
var user_controlled = false;

var use_workers = false;
var one_worker = true;
var simulator_thread = true;
var battle_sim = true;