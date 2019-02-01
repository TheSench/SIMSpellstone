importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.googleAnalytics.initialize();

if (workbox) {
    workbox.routing.registerRoute(
        /.*\.html/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'html-cache'
        })
    );
    workbox.routing.registerRoute(
        /\/dist\/data\.min\.js/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'data-cache'
        })
    );
    workbox.routing.registerRoute(
        /^.*\/((?!(data\.min)).)*\.js/,
        workbox.strategies.networkFirst({
            cacheName: 'js-cache'
        })
    );
    workbox.routing.registerRoute(
        /.*\.css/,
        workbox.strategies.cacheFirst({
            cacheName: 'css-cache'
        })
    );
    workbox.routing.registerRoute(
        /.*\.png/,
      workbox.strategies.cacheFirst({
        cacheName: 'image-cache'
      })
    );
    workbox.routing.registerRoute(
        /\/sprites\/.*\.jpg/,
      workbox.strategies.cacheFirst({
        cacheName: 'sprite-cache'
      })
    );
}