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

    var api = {
        debugEnd: debugEnd,
        onDebugEnd: noop,

        onEndSims: noop,
        onStopSims: noop,
        setDebugLogger: setDebugLogger
    };

    function noop() {}

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debugEnd() {

        SIMULATOR.remainingSims = 0;
        matchTimer.stop();

        var result = api.processSimResult();
        var matchPoints;
        if (SIMULATOR.config.cpuHash) {
            matchPoints = SIMULATOR.calculatePoints();
        }

        api.onDebugEnd(result, matchPoints);

        api.onEndSims();
    }

    function setDebugLogger() {
        this.logger = (debugLog.enabled ? debugMessages : debugDisabled);
    }

    return api;
});