self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', () => {
  // no-op is fine for installability; real offline support needs actual caching logic
});