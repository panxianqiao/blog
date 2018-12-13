/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3550ce174b989c97eae5b5a5eab89bdb"
  },
  {
    "url": "assets/css/0.styles.2ed0d9a4.css",
    "revision": "93ae233ad2b862873ab9094ae06c7468"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.6faa983a.js",
    "revision": "fb50ee2b2bd0b64ac4c64218e76ba354"
  },
  {
    "url": "assets/js/3.70c64893.js",
    "revision": "e235609558e896a95b51200a40639530"
  },
  {
    "url": "assets/js/4.89ddb804.js",
    "revision": "48fa36f3e3e46fa5e38dd01f3dc43e28"
  },
  {
    "url": "assets/js/5.a61ccf67.js",
    "revision": "b709713f1d207937567c1f422fb4ae63"
  },
  {
    "url": "assets/js/6.a306c135.js",
    "revision": "1900f53575efd1933fb5842f026356fa"
  },
  {
    "url": "assets/js/7.9ca671ea.js",
    "revision": "fafdcf6e0c3bd211efc3a06fea9d9a9c"
  },
  {
    "url": "assets/js/8.323cc77b.js",
    "revision": "6e4dad44c4596823790f0b8e55e686c9"
  },
  {
    "url": "assets/js/9.fbdcda32.js",
    "revision": "ce1a7c47df897e85b7c3c613e2e8e2e5"
  },
  {
    "url": "assets/js/app.5cf16cce.js",
    "revision": "6b6eb694fb25ba3af8e481ad4d411b3f"
  },
  {
    "url": "css/index.html",
    "revision": "158bd88ebd14e02231f939362814b7a9"
  },
  {
    "url": "es6/index.html",
    "revision": "c04558dc078d32912943667cec71a830"
  },
  {
    "url": "html/index.html",
    "revision": "a462ce9cfefd2837249605936c77b994"
  },
  {
    "url": "img.png",
    "revision": "cc184934740912c85c580733fe8e43b3"
  },
  {
    "url": "index.html",
    "revision": "f37fb6918889b69783c3ff3176706c50"
  },
  {
    "url": "javascript/index.html",
    "revision": "d47b32d8e8ea9b9cb157abc14a5ed3fe"
  },
  {
    "url": "vue/index.html",
    "revision": "16ed8e0fab791c8162e3ef586ba1c03b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
