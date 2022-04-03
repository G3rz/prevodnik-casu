const jmenoCache = 'prevodnik';
const souboryDoCache = [
    'index.html',
    'css/style.css',
    'js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(jmenoCache).then(function(cache) {
            return cache.addAll(souboryDoCache);
        })
    );
    self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});