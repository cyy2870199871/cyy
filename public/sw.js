self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // A basic fetch handler is required to trigger the PWA install prompt in Chromium.
  // This minimal implementation simply allows the browser to handle the request normally.
});
