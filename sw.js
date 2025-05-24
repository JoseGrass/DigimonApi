self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('Digimonapp-v1').then(cache => {
      return cache.addAll([
        '/DigimonApi/',
        '/DigimonApi/index.html',
        '/DigimonApi/css/styles.css',
        '/DigimonApi/js/api.js',
        '/DigimonApi/js/buscador.js',
        '/DigimonApi/js/filtro.js',
        '/DigimonApi/js/favorito.js',  // revisa que se llame así exactamente
        '/DigimonApi/js/informacion.js',
        '/DigimonApi/js/lista.js',
        '/DigimonApi/js/original.js',
        '/DigimonApi/icons/logo_Digi.png',
        '/DigimonApi/icons/DigimonLogo.png'
      ]);
    }).catch(err => {
      console.error('Error en cache.addAll:', err);
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
