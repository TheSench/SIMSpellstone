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
})();