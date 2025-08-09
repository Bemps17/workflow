// Contenu pour ton fichier sw.js

const CACHE_NAME = 'chronorganizer-v1';
const URLS_TO_CACHE = [
  './index.html',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js'
  // Ajoute ici les icônes et autres assets si nécessaire
];

// Installation du Service Worker et mise en cache des assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Stratégie "Cache First"
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Pas de cache, on va sur le réseau
        return fetch(event.request);
      }
    )
  );
});