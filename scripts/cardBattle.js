(function () {
    "use strict";

    var cardUI = require('cardUI');
    var simController = require('simController');
    var ui = require('ui');

    simController.end_sims_callback = function () {
        ui.hide();   // Cheap hack to keep Setup hidden
        drawMatchEnd();
    };

    simController.stop_sims_callback = drawMatchEnd;

    function drawMatchEnd() {
        cardUI.draw_cards(SIMULATOR.field);   // Draw battlefield with no hand
    }
})();