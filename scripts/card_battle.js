"use strict";

var SIM_CONTROLLER;

(function () {
    SIM_CONTROLLER = {};

    // Initialize simulation loop - runs once per simulation session
    SIM_CONTROLLER.startsim = function (autostart) {
        toggleUI(false);

        if (_DEFINED('autolink') && !autostart) {
            window.location.href = generate_link(1, 1);
            return false;
        }

        CARD_GUI.clearCardSpace();
        card_cache = {};

        total_turns = 0;
        time_start = new Date();
        time_stop = 0;
        echo = '';
        games = 0;
        sims_left = 1;
        SIMULATOR.user_controlled = true;
        debug = $('#debug').is(':checked');
        auto_mode = $('#auto_mode').is(':checked');
        getdeck = $('#deck').val();
        getcardlist = $('#cardlist').val();
        getdeck2 = $('#deck2').val();
        getcardlist2 = $('#cardlist2').val();
        getordered = $('#ordered').is(':checked');
        getexactorder = $('#exactorder').is(':checked');
        getordered2 = $('#ordered2').is(':checked');
        getexactorder2 = $('#exactorder2').is(':checked');
        getmission = $('#mission').val();
        getraid = $('#raid').val();
        raidlevel = $('#raid_level').val();
        getsiege = $('#siege').is(':checked');
        tower_level = $('#tower_level').val();
        tower_type = $('#tower_type').val();
        if (BATTLEGROUNDS) {
            getbattleground = [];
            var bgCheckBoxes = document.getElementsByName("battleground");
            for (var i = 0; i < bgCheckBoxes.length; i++) {
                var checkbox = bgCheckBoxes[i];
                if (checkbox && checkbox.checked) {
                    getbattleground.push(checkbox.value);
                }
            }
            getbattleground = getbattleground.join();
        }
        surge = $('#surge').is(':checked');

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
                for (var j = 0; j < battleground.effect.length; j++) {
                    var effect = battleground.effect[j];
                    var effect_type = effect.effect_type;
                    if (effect_type === "skill") {
                        battlegrounds.onTurn.push(MakeBattleground(battleground.name, effect));
                    } else if (effect_type === "evolve_skill" || effect_type === "add_skill") {
                        battlegrounds.onCreate.push(MakeSkillModifier(battleground.name, effect));
                    }
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

                    for (var j = 0; j < battleground.effect.length; j++) {
                        var effect = battleground.effect[j];
                        var effect_type = effect.effect_type;
                        if (effect_type === "skill") {
                            if (battleground.scale_with_level) {
                                var mult = battleground.scale_with_level * (raidlevel - battleground.starting_level + 1);
                            } else {
                                var mult = 1;
                            }
                            var bge = MakeBattleground(battleground.name, effect, mult);
                            bge.enemy_only = enemy_only;
                            battlegrounds.onTurn.push(bge);
                        } else if (effect_type === "evolve_skill" || effect_type === "add_skill") {
                            var bge = MakeSkillModifier(battleground.name, effect);
                            bge.enemy_only = enemy_only;
                            battlegrounds.onCreate.push(bge);
                        }
                    }
                }
            }
        }
        SIMULATOR.battlegrounds = battlegrounds;

        // Hide interface
        toggleUI(false);

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

        setSimStatus("Initializing simulations...");

        current_timeout = setTimeout(run_sims);

        return false;
    }

    // Interrupt simulations
    SIM_CONTROLLER.stopsim = function () {
    draw_match_end();
}

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end() {
        if (SIMULATOR.simulating) {
            return;
        }

        var result = processSimResult();

        var msg;
        if (result == 'draw') {
            msg = '<br><h1>DRAW</h1><br>';
        } else if (result) {
            msg = '<br><h1>WIN</h1><br>';
        } else {
            msg = '<br><h1>LOSS</h1><br>';
        }
        if (echo) {
            outp(echo);
        }
        setSimStatus(msg);

        draw_match_end();
    }

    function draw_match_end() {

        CARD_GUI.draw_cards(SIMULATOR.field);   // Draw battlefield with no hand

        // Show interface
        toggleUI(true);

        // Hide stop button
        document.getElementById('stop').style.display = 'none';

        scroll_to_end();
    }

    function run_sims() {
        run_sim();
        debug_end();
    }

    // Initializes a single simulation - runs once before each individual simulation
    // - needs to reset the decks and fields before each simulation
    function run_sim() {
        doSetup();
        if (!SIMULATOR.simulate()) return false;
        processSimResult();
        debug_end();
    }

    function doSetup() {

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
        if (getordered && !getexactorder) deck.player.ordered = copy_card_list(deck.player.cards);
        if (getordered2 && !getexactorder2) deck.cpu.ordered = copy_card_list(deck.cpu.cards);

        debug_dump_decks();
    }

    function processSimResult() {

        var result;
        if (!SIMULATOR.field.player.commander.isAlive()) {
            result = false;
        }
        else if (!SIMULATOR.field.cpu.commander.isAlive()) {
            result = true;
        }
        else {
            result = 'draw';
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
        total_turns += SIMULATOR.simulation_turns;

        return result;
    }

    SIM_CONTROLLER.debug_end = debug_end;
})();

var battle_sim = true;