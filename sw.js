// sw.js

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('Digimonapp-v1').then(cache => {
      return cache.addAll([
        '.',                    // Página principal (index.html)
        'index.html',
        'css/styles.css',
        'js/api.js',
        'icons/logo_Digi.png',
        'icons/DigimonLogo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
