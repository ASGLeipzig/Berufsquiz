
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('berufsquiz').then(function(cache) {
      return cache.addAll([
        'berufsquiz_einzeldatei_funktionierend.html',
        'manifest.json',
        'firmenlogo.png',
        'icon-192.png',
        'icon-512.png'
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
