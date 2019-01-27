if (navigator && navigator.serviceWorker) {
    window.addEventListener('load', function loadServiceWorker() {
        navigator.serviceWorker.register('service-worker.js');
    });
}