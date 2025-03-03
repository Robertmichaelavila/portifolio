var staticCacheName = "pwa_dice_v1"; // Adicione uma versão ao nome do cache

const filesToCache = [
	'./index.html',
	'./css/style.css',
	'./css/mediaQueries.css',
  	'./js/script.js',
	'./img/image1-removebg-preview.png',
];

self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
			return cache.addAll(filesToCache);
		}).catch(function (error) {
			console.error("Erro ao adicionar arquivos ao cache:", error);
		})
	);
});

self.addEventListener("activate", function (e) {
	e.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheName !== staticCacheName) {
						return caches.delete(cacheName); // Remove caches antigos
					}
				})
			);
		})
	);
});

self.addEventListener("fetch", function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request).catch(function () {
				// Retorne uma página de fallback ou uma mensagem de erro
				return caches.match('./index.html'); // Fallback para a página inicial
			});
		})
	);
});