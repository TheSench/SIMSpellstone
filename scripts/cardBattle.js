(function () {
    "use strict";

    var cardUI = require('cardUI');
    var simController = require('simController');

    simController.end_sims_callback = function () {
        hideUI();   // Cheap hack to keep Setup hidden
        drawMatchEnd();
    };

    simController.stop_sims_callback = drawMatchEnd;

    function drawMatchEnd() {
        cardUI.draw_cards(SIMULATOR.field);   // Draw battlefield with no hand
    }
})();