self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('car-race-v1').then(function(cache) {
      return cache.addAll([
        'm.html',
        'player-car.png',
        'computer-car.png',
        'finish-line.png',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
