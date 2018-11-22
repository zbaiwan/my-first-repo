 'use strict';

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");
toolbox.precache(["index.html","main.css","youhun.jpg"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
