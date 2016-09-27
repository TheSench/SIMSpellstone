"use strict";

(function () {

    SIM_CONTROLLER.end_sims_callback = function () {
        hideUI();   // Cheap hack to keep Setup hidden
        draw_match_end();
    }

    SIM_CONTROLLER.stop_sims_callback = draw_match_end;

    function draw_match_end() {
        CARD_GUI.draw_cards(SIMULATOR.field);   // Draw battlefield with no hand
    }

    function run_sims() {
        run_sim();
    }

    // Initializes a single simulation - runs once before each individual simulation
    // - needs to reset the decks and fields before each simulation
    function run_sim() {
        if (!SIMULATOR.simulate()) return false;
        SIM_CONTROLLER.debug_end();
    }
})();

var battle_sim = true;