"use strict";

(function () {

    SIM_CONTROLLER.end_sims_callback = function () {
        hideUI();   // Cheap hack to keep Setup hidden
        draw_match_end();
    };

    SIM_CONTROLLER.stop_sims_callback = draw_match_end;

    function draw_match_end() {
        CARD_GUI.draw_cards(SIMULATOR.field);   // Draw battlefield with no hand
    }
})();

var battle_sim = true;