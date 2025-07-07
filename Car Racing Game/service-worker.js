const CACHE_NAME = 'car-race-v1';
const ASSETS = [
  'm.html',
  'manifest.json',
  'service-worker.js',
  'player-car.png',
  'computer-car.png',
  'finish-line.png',
  'icon-192.png',
  'icon-512.png'
];

// Install: Cache all required files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: Remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// Fetch: Serve from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => 
      response || fetch(event.request)
    )
  );
});
