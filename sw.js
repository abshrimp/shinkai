self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});