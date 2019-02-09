define('matchTimer', [], function() {
    var api = {
        elapsed: elapsed,
        batchElapsed: batchElapsed,
        startBatch: startBatch,
        stop: stopTimer,
        reset: resetTimer
    };

    function elapsedSeconds(start, end) {
        return ((end - start) / 1000).toFixed(3);
    }

    function timeSince(start) {
        return elapsedSeconds(start, Date.now());
    }

    function elapsed() {
        var end = (this.timeStop || Date.now());
        return elapsedSeconds(this.timeStart, end);
    }

    function batchElapsed(start) {
        return timeSince(start || this.batchStarted);
    }

    function startBatch() {
        this.batchStarted = Date.now();
    }

    function stopTimer() {
        this.timeStop = Date.now();
    }

    function resetTimer() {
        this.timeStart = Date.now();
        this.timeStop = 0;
    }

    return api;
});