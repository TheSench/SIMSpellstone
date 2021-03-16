importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

workbox.googleAnalytics.initialize();

if (workbox) {
    const HTML_FILES = /.*\.html/;
    const CSS_FILES = /.*\.css/;
    const DATA_FILE = /\/dist\/data\.min\.js/;
    const SCRIPT_FILES = /^.*\/((?!(data\.min)).)*\.js/;
    const IMAGE_FILES = /.*\.png/;
    const SPRITESHEETS = /\/sprites\/.*\.jpg/;

    function baseFilePath(url) {
        return url.split('?')[0];
    }
    const cacheKeyWillBeUsed = async ({request, mode}) => {
        console.log("request", request);
        console.log("mode", mode);
        return baseFilePath(request.url);
    };

    const cleanOldCaches = async ({request, response, event}) => {
        // Return `response`, a different Response object or null
        var requestedFile = baseFilePath(request.url);
        caches.open('js-cache').then(cache => {
            cache.keys().then(keys => {
                keys.filter(key => baseFilePath(key.url) === requestedFile && key.url != request.url)
                    .forEach(key => cache.delete(key));
            });
        });
        return response;
    };

    workbox.routing.registerRoute(
        HTML_FILES,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'html-cache',
            plugins: [
                {cacheKeyWillBeUsed}
            ]
        })
    );
    workbox.routing.registerRoute(
        DATA_FILE,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'data-cache'
        })
    );
    workbox.routing.registerRoute(
        SCRIPT_FILES,
        new workbox.strategies.NetworkFirst({
            cacheName: 'js-cache',
            plugins: [
                {cacheWillUpdate: cleanOldCaches}
            ]
        })
    );
    workbox.routing.registerRoute(
        CSS_FILES,
        new workbox.strategies.CacheFirst({
            cacheName: 'css-cache'
        })
    );
    workbox.routing.registerRoute(
        IMAGE_FILES,
        new workbox.strategies.CacheFirst({
            cacheName: 'image-cache'
        })
    );
    workbox.routing.registerRoute(
        SPRITESHEETS,
        new workbox.strategies.CacheFirst({
            cacheName: 'sprite-cache'
        })
    );
}