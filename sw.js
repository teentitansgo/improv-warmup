const APP_VERSION = '0.0.1';

self.addEventListener('message', (event) => {
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: APP_VERSION });
  }
});

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', () => {
  // no-op is fine for installability; real offline support needs actual caching logic
});