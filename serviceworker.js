var staticCacheName = "pwa";

const filesToCache = [
	'./index.html',
	'./style.css',
	'./mediaQueries.css',
  './script.js',
	'./image1-removebg-preview.png',
];

self.addEventListener("install", function (e) {
  e.waitUntil (
    caches.open(staticCacheName).then(function (cache){
      return cache.addAll(["/"]);
    })
  );
})

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response){
      return response ?? fetch(event.request);
    });
  );
});
