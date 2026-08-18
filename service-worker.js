// Service Worker para el Nivelador de Lectura
const CACHE_NAME = 'nivelador-lectura-v1';

const urlsToCache = [
  './index.html',
  './icono.png',
  './logofirma.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});