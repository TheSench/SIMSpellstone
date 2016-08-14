"use strict";

var SIM_CONTROLLER;

(function () {
    SIM_CONTROLLER = {};

    var inventaire;
    var original_hash;
    var step = 0;
    var best = original_hash;
    var best_value = 0;
    var orderDeckMode = true;

    // Initialize simulation loop - runs once per simulation session
    SIM_CONTROLLER.startsim = function (autostart) {
        orders = {};

        if (_DEFINED('autolink') && !autostart) {
            window.location.href = generate_link(1, 1);
            return false;
        }

        sims_left = document.getElementById('sims').value;
        if (!sims_left) sims_left = 1;
        var d = document.getElementById('user_controlled');
        if (d) {
            SIMULATOR.user_controlled = d.checked;
        }
        debug = document.getElementById('debug').checked;
        var d = document.getElementById('auto_mode');
        if (d) {
            auto_mode = d.checked;
        }
        mass_debug = document.getElementById('mass_debug').checked;
        loss_debug = document.getElementById('loss_debug').checked;
        win_debug = document.getElementById('win_debug').checked;
        if ((loss_debug || win_debug) && mass_debug) mass_debug = false;

        getdeck = document.getElementById('deck').value || "QXvAAA0JSBYrjDCYrjDCYrjDCQBbiCA0JSBYMZSBYMZSBocjSBwkoSBA~NCCwEfCCoZqiCQZIkCYMbkC";
        getcardlist = document.getElementById('cardlist').value;
        getordered = document.getElementById('ordered').checked;
        getexactorder = document.getElementById('exactorder').checked;
        getmission = document.getElementById('mission').value || "1503";
        getraid = document.getElementById('raid').value;
        inventaire = hash_decode(document.getElementById('inventory').value || "QXvAAAumrBoVXrBI8QkCwvsCConnCCgfiCCQPYCCIHTCCIlMjCYyvqBIilqBAagqB4RbqBwJWqBoBRqBg5LqBA0LkCwkoSBgUeSBQEUSBI8OSBA0JSBQjeDC");
        if (getmission) {
            getdeck2 = TITANS[getmission].hash;
        } else if (getraid) {
            getdeck2 = hash_encode(load_deck_raid(getraid, raidlevel));
        }
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
// 9216 9227 9252 9241
        SIMULATOR.battlegrounds = battlegrounds;

        // Hide interface
        document.getElementById('ui').style.display = 'none';

        // Display stop button
        document.getElementById('stop').style.display = 'block';

        step = -1;
        best = original_hash = getdeck;
        best_value = 0;
        orderDeckMode = document.getElementById("sim_order").checked;
        if (orderDeckMode) {
            getordered = orderDeckMode;
        }

        tryNewCard();
        return false;
    }

    var targetPosition = 0;
    var lastDeckHash = original_hash;

// Coût pour faire un double: 3*(5+15+30+75) = 375
// Coût pour faire un simple légendaire : 5+15+30+75+150 = 275

    function tryNewCard(){
        var progression = document.getElementById('progression');
        card_cache = {};    // clear card cache to avoid memory bloat when simulating different decks
        total_turns = 0;
        time_start = new Date();
        time_stop = 0;
        echo = '';
        games = 0;
        run_sims_batch = 0;
        sims_left = document.getElementById('sims').value;
        if (step >= 0) {
            var originalDeck = hash_decode(original_hash);
            var deckLength = originalDeck.deck.length;
            if (orderDeckMode) {
                if (targetPosition == 0) {
                    step++;
                    targetPosition = step - 1;
                    original_hash = best;

                    if (targetPosition == deckLength) {
                        return;
                    }
                }
                else {
                    targetPosition--;
                }
               progression.innerHTML = '<strong>Etape ' + step + '/' + (originalDeck.deck.length - 1) + " target=" + targetPosition + '</strong> == <strong>Best:</strong>' + best + ' (' + best_value + ' dernier=' + wins + ')';
                 var cards = originalDeck.deck.splice(step, 1);
                originalDeck.deck.splice(targetPosition, 0, cards[0]);
                getdeck = hash_encode(originalDeck);
            }
            else{
                var cardToTry = ~~(step / deckLength);
                var deckCardToReplace = step % deckLength;
                progression.innerHTML = '<strong>Etape ' + step + '/' + (originalDeck.deck.length * inventaire.deck.length) + '</strong> == <strong>Best:</strong>' + best + ' (' + best_value + ')';

                if (cardToTry >= inventaire.deck.length) {
                    return;
                }
                originalDeck.deck[deckCardToReplace] = inventaire.deck[cardToTry];
                getdeck = hash_encode(originalDeck);
                step++;
            }
        }
        else{
            step = 0;
            getdeck = original_hash;
        }   

        
        SIMULATOR.setupDecks();

        max_turns = 50;

        wins = 0;
        losses = 0;
        draws = 0;

        outp('<strong>Initializing simulations...</strong>');

        current_timeout = setTimeout(run_sims, 1);
    }

    // Interrupt simulations
    SIM_CONTROLLER.stopsim = function () {
        time_stop = new Date();
        var elapse = time_elapsed();
        var simpersec = games / elapse;
        simpersec = simpersec.toFixed(1);

        // Stop the recursion
        if (current_timeout) clearTimeout(current_timeout);

        outp(echo + '<strong>Simulations interrupted.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable());
        // Show interface
        document.getElementById('ui').style.display = 'block';

        // Hide stop button
        document.getElementById('stop').style.display = 'none';
    }

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end() {
        if (SIMULATOR.simulating) {
            return;
        }

        var result = processSimResult();

        time_stop = new Date();

        if (result == 'draw') {
            outp(echo + '<br><h1>DRAW</h1><br>' + gettable());
        } else if (result) {
            outp(echo + '<br><h1>WIN</h1><br>' + gettable());
        } else {
            outp(echo + '<br><h1>LOSS</h1><br>' + gettable());
        }

        // Show interface
        document.getElementById('ui').style.display = 'block';

        // Hide stop button
        document.getElementById('stop').style.display = 'none';

        if (SIMULATOR.user_controlled) {
            scroll_to_end();
        }
    }

    function run_sims() {

        if (debug && !mass_debug && !loss_debug && !win_debug) {
            run_sim(true);
            debug_end();
        } else if (SIMULATOR.user_controlled) {
            run_sim(true);
            debug_end();
        } else if (sims_left > 0) {
            // Interval output - speeds up simulations
            if (run_sims_count >= run_sims_batch) {
                var simpersecbatch = 0;
                if (run_sims_batch > 0) { // Use run_sims_batch == 0 to imply a fresh set of simulations
                    run_sims_count = 0;
                    var temp = games / (games + sims_left) * 100;
                    temp = temp.toFixed(1);

                    var elapse = time_elapsed();

                    var batch_elapse = batch_time_elapsed();
                    if (batch_elapse == 0) {
                        simpersecbatch = 0;
                    } else {
                        simpersecbatch = run_sims_batch / batch_elapse;
                    }

                    outp(echo + '<strong>Running simulations...</strong> (' + games + '/' + (games + sims_left) + ') ' + temp + '%<br>' + elapse + ' seconds<br>' + simpersecbatch.toFixed(1) + ' simulations per second<br>' + gettable());
                }
                run_sims_batch = 1;
                if (simpersecbatch > run_sims_batch) // If we can run more at one time, then let's try to
                    run_sims_batch = Math.ceil(simpersecbatch / 8);
                if (run_sims_batch > sims_left) // Also limit by how many sims are left
                    run_sims_batch = sims_left;

                // Batch messes up mass debug and loss debug! Let's disable batch!
                if (debug && mass_debug) run_sims_batch = 1;
                if (debug && (loss_debug || win_debug)) run_sims_batch = 1;

                time_start_batch = new Date();
                current_timeout = setTimeout(run_sims, 1);
                for (var i = 0; i < run_sims_batch; i++) {  // Start a new batch
                    run_sim();
                }
            }

        } else {
            run_sims_count = 0;
            run_sims_batch = 0;
            time_stop = new Date();

            var elapse = time_elapsed();
            var simpersec = games / elapse;
            simpersec = simpersec.toFixed(1);

            outp(echo + '<br><strong>Simulations complete.</strong><br>' + elapse + ' seconds (' + simpersec + ' simulations per second)<br>' + gettable());

            // Show interface
            document.getElementById('ui').style.display = 'block';

            // Hide stop button
            document.getElementById('stop').style.display = 'none';

           // scroll_to_end();
            if (SIM_CONTROLLER.end_sims_callback) SIM_CONTROLLER.end_sims_callback();

            if (wins > best_value){
                best_value = wins;
                best = getdeck;
            }

            setTimeout(tryNewCard, 100);
        }
    }

    // Initializes a single simulation - runs once before each individual simulation
    // - needs to reset the decks and fields before each simulation
    function run_sim(skipResults) {
        doSetup();
        if (!SIMULATOR.simulate()) return false;
        if (!skipResults) processSimResult();
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
        var field = {
            cpu: {
                assaults: []
            },
            player: {
                assaults: []
            }
        };
        SIMULATOR.field = field;

        // Load player deck
        if (cache_player_deck_cards) {
            deck['player'] = copy_deck(cache_player_deck_cards);
        }

        // Load enemy deck
        if (cache_cpu_deck_cards) {
            deck['cpu'] = copy_deck(cache_cpu_deck_cards);
        }

        // Set up deck order priority reference
        if (getordered && !getexactorder) deck.player.ordered = copy_card_list(deck.player.deck);
        if (getordered2 && !getexactorder2) deck.cpu.ordered = copy_card_list(deck.cpu.deck);

        // Output decks for first simulation
        if (debug && (loss_debug || win_debug)) {
        } else if (suppressOutput) {
        } else if (echo == '') {
            debug_dump_decks();
        }
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
        total_turns += SIMULATOR.simulation_turns;

        if (debug) {
            if (loss_debug) {
                if (result == 'draw') {
                    echo = 'Draw found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>DRAW</h1><br>';
                    sims_left = 0;
                } else if (result) {
                    if (!sims_left) {
                        echo = 'No losses found after ' + games + ' games. No debug output to display.<br><br>';
                        sims_left = 0;
                    } else {
                        echo = '';
                    }
                } else {
                    echo = 'Loss found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>LOSS</h1><br>';
                    sims_left = 0;
                }
            } else if (win_debug) {
                if (result && result != 'draw') {
                    echo = 'Win found after ' + games + ' games. Displaying debug output... <br><br>' + echo;
                    echo += '<br><h1>WIN</h1><br>';
                    sims_left = 0;
                } else {
                    if (!sims_left) {
                        echo = 'No wins found after ' + games + ' games. No debug output to display.<br><br>';
                        sims_left = 0;
                    } else {
                        echo = '';
                    }
                }
            } else if (mass_debug) {
                if (result == 'draw') {
                    echo += '<br><h1>DRAW</h1><br>';
                } else if (result) {
                    echo += '<br><h1>WIN</h1><br>';
                } else {
                    echo += '<br><h1>LOSS</h1><br>';
                }
            }
        }

        if (debug && mass_debug && sims_left) echo += '<br><hr>NEW BATTLE BEGINS<hr><br>';

        return result;
    }

    // Global variables used by single-threaded simulator
    var run_sims_count = 0;
    var run_sims_batch = 0;
    SIM_CONTROLLER.end_sims_callback = false;
    SIM_CONTROLLER.debug_end = debug_end;
})();