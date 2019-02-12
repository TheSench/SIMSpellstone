define('simController', [
    'matchTimer',
    'ui'
], function (
    matchTimer,
    ui
) {
    "use strict";

    var SIM_CONTROLLER = {
        debug_end: debug_end,

        endSimsCallback: null,
        stop_sims_callback: null
    };

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end(result) {

        var result = SIM_CONTROLLER.processSimResult();

        SIMULATOR.remainingSims = 0;
        matchTimer.stop();

        var msg;
        var matchPoints = "";
        if (SIMULATOR.config.cpuHash) {
            matchPoints = " (" + SIMULATOR.calculatePoints() + " points)";
        }
        if (result === 'draw') {
            msg = '<br><h1>DRAW' + matchPoints + '</h1><br>';
        } else if (result) {
            msg = '<br><h1>WIN' + matchPoints + '</h1><br>';
        } else {
            msg = '<br><h1>LOSS' + matchPoints + '</h1><br>';
        }

        ui.displayTurns();
        ui.setSimStatus(msg);

        ui.show();

        if (SIMULATOR.sendBattleUpdate) SIMULATOR.sendBattleUpdate(SIMULATOR.simulation_turns);

        if (SIM_CONTROLLER.endSimsCallback) SIM_CONTROLLER.endSimsCallback();
    }

    // temporary stop-gap so HTML files can reference this module
    window.SIM_CONTROLLER = SIM_CONTROLLER;

    return SIM_CONTROLLER;
});