"use strict";

var SIM_CONTROLLER = (function () {

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end() {
        if (SIMULATOR.simulating) {
            return;
        }

        sims_left = 0;
        time_stop = new Date();

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

        if (SIM_CONTROLLER.end_sims_callback) SIM_CONTROLLER.end_sims_callback();
    }

    function draw_match_end() {

        if (SIMULATOR.user_controlled) {
            CARD_GUI.draw_cards(SIMULATOR.field);   // Draw battlefield with no hand
        }

        // Show interface
        toggleUI(true);

        // Hide stop button
        document.getElementById('stop').style.display = 'none';
    }

    return {
        debug_end: debug_end,

        end_sims_callback: null,
        stop_sims_callback: null
    };
})();