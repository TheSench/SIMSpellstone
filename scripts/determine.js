"use strict";

var use_workers = false;
var one_worker = false;
var simulator_thread = true;
var max_workers = 0;

// If the browser doesn't support Workers (IE9 and before)
if (typeof(Worker) === "undefined") {
// If the browser does support workers, but doesn't support Blob URLs (Opera, pre-6.0 Safari)
} else if (typeof(window.URL) === "undefined") {
// If the browser is IE 10, doesn't support multi-core
} else if (navigator.userAgent.indexOf("MSIE 10") != -1) {
// If only using one worker
} else if (_GET('maxworkers') === '1') {
    one_worker = true;
    use_workers = true;
} else if (typeof(_GET('maxworkers')) === 'undefined') {
	one_worker = true;
} else {
	simulator_thread = false;	// Main thread is NOT the simulator thread
	use_workers = true;
}

var docHead = $(document.head);
var controller = document.createElement('script');

if (use_workers) {
    controller.setAttribute("src", "scripts/multi_threaded.js");
    docHead.append('<script id="worker_script" type="text/worker" src="scripts/worker.js"></script>');
} else {
    controller.setAttribute("src", "scripts/single_threaded.js");
}
docHead.append(controller);