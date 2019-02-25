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
        setDebugLogger: setDebugLogger,
        getLogFunction: getLogFunction
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

    function getLogFunction() {
        if(debugLog.enabled) {
            var logger = this.logger;
            return function logMessage(messageType) {
                var logArgs = [].slice.call(arguments, 1);
                logger[messageType].apply(logger, logArgs);
            };
        } else {
            return noop;
        }
    }

    return api;
});