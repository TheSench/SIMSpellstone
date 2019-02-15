define('debugDisabled', [
    'debugMessages'
], function (
    debugMessages
) {
    'use strict';

    var api = {};

    Object.keys(debugMessages).forEach(function makeFake(methodName) {
        api[methodName] = function () { };
    });

    api.logCardPlayed = debugMessages.logCardPlayed;

    return api;
});