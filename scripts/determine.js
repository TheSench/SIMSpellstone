"use strict";

(function () {
    var use_workers = false;
    if (typeof (_GET('maxworkers')) === 'undefined') {
        // Explicitly using the single-threaded version
    } else if (typeof (Worker) === "undefined") {
        // The browser doesn't support Workers (IE9 and before)
    } else if (typeof (window.URL) === "undefined") {
        // The browser does support workers, but doesn't support Blob URLs (Opera, pre-6.0 Safari)
    } else if (navigator.userAgent.indexOf("MSIE 10") != -1) {
        // The browser is IE 10, doesn't support multi-core
    } else {
        use_workers = true;
    }

    var docHead = $(document.head);
    if (use_workers) {
        docHead.append('<script src="scripts/multi_threaded.js"></script>');
        docHead.append('<script id="worker_script" type="text/worker" src="scripts/worker.js"></script>');
    } else {
        docHead.append('<script src="scripts/simulator_base.js"></script>');
        docHead.append('<script src="scripts/single_threaded.js"></script>');
    }
})();