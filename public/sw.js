/* =========================================
   ARI'S ETERNAL FLOWERS — Service Worker
   Estrategia: stale-while-revalidate
   ========================================= */

const CACHE_NAME = "aris-eternal-flowers-v1";

const PRECACHE_URLS = [
  "/",
  "/manifest.json",
  "/favicon.ico",
  "/favicon-96x96.png",
  "/favicon.svg",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
  "/apple-touch-icon.png",
  "/og-image.jpg",
];

/* ---------- INSTALL ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

/* ---------- ACTIVATE ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

/* ---------- FETCH ---------- */
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignorar métodos no GET
  if (request.method !== "GET") return;

  // Ignorar requests externos (WhatsApp, Analytics, etc)
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Ignorar rutas de desarrollo de Next.js
  if (url.pathname.startsWith("/_next/")) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      // stale-while-revalidate: devolvemos caché primero, actualizamos en background
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    }),
  );
});
