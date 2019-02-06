define('debugLog', function() {
    var api = {
        enabled: false,
        write: write,
        writeLine: writeLine
    };

    function write(message) {
        echo += message;
    }

    function writeLine(message) {
        echo += message + '</br>';
    }

    return api;
});