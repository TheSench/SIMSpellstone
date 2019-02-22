define('simController', [
    'matchTimer',
    'debugLog',
    'debugMessages',
    'debugDisabled'
], function (
    matchTimer,
    debugLog,
    debugMessages,
    debugDisabled
) {
    'use strict';

    var SIM_CONTROLLER = {
        debugEnd: debugEnd,
        onDebugEnd: noop,

        endSimsCallback: null,
        stop_sims_callback: null,
        setDebugLogger: setDebugLogger
    };

    function noop() {}

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debugEnd() {

        SIMULATOR.remainingSims = 0;
        matchTimer.stop();

        var result = SIM_CONTROLLER.processSimResult();
        var matchPoints;
        if (SIMULATOR.config.cpuHash) {
            matchPoints = SIMULATOR.calculatePoints();
        }

        SIM_CONTROLLER.onDebugEnd(result, matchPoints);

        if (SIM_CONTROLLER.endSimsCallback) SIM_CONTROLLER.endSimsCallback();
    }

    function setDebugLogger() {
        this.logger = (debugLog.enabled ? debugMessages : debugDisabled);
    }

    // temporary stop-gap so HTML files can reference this module
    window.SIM_CONTROLLER = SIM_CONTROLLER;

    return SIM_CONTROLLER;
});