// Replace the legacy root-scope PWA worker when the marketing site takes over
// fitforestapp.com, then unregister this cleanup worker as well.
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    self.registration.unregister().then(function () {
      return self.clients.matchAll({ type: 'window' }).then(function (clients) {
        clients.forEach(function (client) {
          client.navigate(client.url);
        });
      });
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
