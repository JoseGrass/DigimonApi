self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('Digimonapp-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './css/styles.css',
        './js/api.js',
        './js/buscador.js',
        './js/filtro.js',
        './js/favorito.js',
        './js/informacion.js',
        './js/lista.js',
        './js/original.js',
        './icons/logo_Digi.png',
        './icons/DigimonLogo.png'
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
