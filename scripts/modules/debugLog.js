define('debugLog', [], function() {
    var api = {
        enabled: false,
        getLog: getLog,
        clear: clear,
        prepend: prepend,
        prependLines: prependLines,
        append: append,
        appendLines: appendLines
    };

    var content = '';

    function clear() {
        content = '';
    }

    function getLog() {
        return content;
    }

    function prepend(message) {
        content = message + content;
    }

    function prependLines() {
        for(var i = 0; i < arguments.length; i++) {
            prepend(arguments[i] + '</br>');
        }
    }

    function append(message) {
        content += message;
    }

    function appendLines() {
        for(var i = 0; i < arguments.length; i++) {
            append(arguments[i] + '</br>');
        }
    }

    return api;
});