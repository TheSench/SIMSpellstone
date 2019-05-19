importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

workbox.googleAnalytics.initialize();

if (workbox) {
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
        /.*\.html/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'html-cache',
            plugins: [
                {cacheKeyWillBeUsed}
            ]
        })
    );
    workbox.routing.registerRoute(
        /\/dist\/data\.min\.js/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'data-cache'
        })
    );
    workbox.routing.registerRoute(
        /^.*\/((?!(data\.min)).)*\.js/,
        new workbox.strategies.NetworkFirst({
            cacheName: 'js-cache',
            plugins: [
                {cacheWillUpdate: cleanOldCaches}
            ]
        })
    );
    workbox.routing.registerRoute(
        /.*\.css/,
        new workbox.strategies.CacheFirst({
            cacheName: 'css-cache'
        })
    );
    workbox.routing.registerRoute(
        /.*\.png/,
      new workbox.strategies.CacheFirst({
        cacheName: 'image-cache'
      })
    );
    workbox.routing.registerRoute(
        /\/sprites\/.*\.jpg/,
      new workbox.strategies.CacheFirst({
        cacheName: 'sprite-cache'
      })
    );
}