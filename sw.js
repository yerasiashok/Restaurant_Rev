self.addEventListener('install', function (event) {
  // Perform install steps
});
const CACHE_NAME ='review5';
self.addEventListener('install', function(event) {
  event.waitUntil(
    
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        '/',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './restaurant.html?id=1',
  './restaurant.html?id=2',
  './restaurant.html?id=3',
  './restaurant.html?id=4',
  './restaurant.html?id=5',
  './restaurant.html?id=6',
  './restaurant.html?id=7',
  './restaurant.html?id=8',
  './restaurant.html?id=9',
  './restaurant.html?id=10'
      ]);
    })
  );
});



self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function (res) {//search the cache
    if (res !== undefined) {
      return res; //Got it from cache, return it immediatelly!
    } else {
      return fetch(event.request).then(function (res) { // not in cache, fetch it
        var responseClone = res.clone(); // clone the response
        caches.open(CACHE_NAME).then(function (cache) {//CACHE_NAME is the const i am mentioning on the upper most comment.
          cache.put(event.request, responseClone); // add it to cache
        });
        return res; // return it
      });
    }
  }));
});



