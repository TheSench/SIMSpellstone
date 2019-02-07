"use strict";

(function () {
    var cardUI = require('cardUI');
    var simController = require('simController');

    simController.end_sims_callback = function () {
        hideUI();   // Cheap hack to keep Setup hidden
        draw_match_end();
    };

    simController.stop_sims_callback = draw_match_end;

    function draw_match_end() {
        cardUI.draw_cards(SIMULATOR.field);   // Draw battlefield with no hand
    }
})();

var battle_sim = true;