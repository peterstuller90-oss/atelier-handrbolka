// Atelier Handrbolka – offline cache. Pri zmene apky zvýš VERZIA.
const VERZIA = 'atelier-v1';
const ZAKLAD = [
  './', 'index.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  'https://cdn.jsdelivr.net/npm/mp4-muxer@5.1.3/build/mp4-muxer.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERZIA).then(c => c.addAll(ZAKLAD)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== VERZIA).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  const cdn = u.hostname === 'cdnjs.cloudflare.com' || u.hostname === 'cdn.jsdelivr.net';
  if (u.origin !== location.origin && !cdn) return; // Supabase a iné idú vždy na sieť
  // najprv sieť (aby sa nová verzia hneď ukázala), bez internetu z cache
  e.respondWith(
    fetch(e.request).then(r => {
      if (r && r.ok) { const k = r.clone(); caches.open(VERZIA).then(c => c.put(e.request, k)); }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
