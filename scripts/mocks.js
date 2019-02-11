(function () {
    var noop = function () { };

    window.ga = noop;

    define('animations', [], function () {
        return {};
    });

    define('debugLog', [], function () {
        return {
            enabled: false,
            getLog: function () { return ''; },
            clear: noop,
            prepend: noop,
            prependLines: noop,
            append: noop,
            appendLines: noop
        };
    });

    define('log', [], function () {
        return {};
    });

    define('ui', [], function () {
        return {
            show: noop,
            hide: noop,
            getSelectedBattlegrounds: noop,
            getSelectedMapBattlegrounds: noop,
            generateLink: noop,
            displayText: noop,
            displayTurns: noop,
            showWinrate: noop,
            hideTable: noop,
            setSimStatus: noop,
            loadDeckBuilder: noop,
            updateGameData: noop,
            loadSavedDeck: noop,
            toggleTheme: noop
        };
    });
})();