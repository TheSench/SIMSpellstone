(function () {
    'use strict';

    var cardUI = require('cardUI');
    var simController = require('simController');
    var ui = require('ui');

    simController.onEndSims = function () {
        ui.hide();   // Cheap hack to keep Setup hidden
        displayMatchEnd();
    };

    simController.onStopSims = displayMatchEnd;

    function displayMatchEnd() {
        cardUI.displayCards(SIMULATOR.field);   // Draw battlefield with no hand
    }
})();