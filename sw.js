self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('Digimonapp-v1').then(cache => {
      return cache.addAll([
        '/', // la carpeta DigimonApi/
        '/index.html',
        '/css/styles.css',
        '/js/api.js',
        '/js/buscador.js',
        '/js/filtro.js',
        '/js/favorito.js',
        '/js/informacion.js',
        '/js/lista.js',
        '/js/original.js',
        '/icons/logo_Digi.png',
        '/icons/DigimonLogo.png'
      ]);
    }).catch(err => {
      console.error('Error en cache.addAll:', err);
    })
  );
});
