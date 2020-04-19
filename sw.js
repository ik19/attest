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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.0fcebb82.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-512x512.ae40f73d.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-precomposed.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "certificate.84dda806.pdf",
    "revision": "343ac8bb3542a6578f2a4cbaf0f99679"
  },
  {
    "url": "certificate.983fb5f1.js",
    "revision": "9f212a035e80d68bfd6f3b0ee4d187d3"
  },
  {
    "url": "certificate.d7b5c10f.css",
    "revision": "01ebd6e761cad37b3ca124d3562e27d3"
  },
  {
    "url": "confidentialite.b0cc8632.js",
    "revision": "366286aa2ad14ea3e2193c8a9363bf21"
  },
  {
    "url": "confidentialite.d7b5c10f.css",
    "revision": "3c9d5484775181372944401688d5e6af"
  },
  {
    "url": "confidentialite.html",
    "revision": "0571e07a26353c7c5d508918f9d9f914"
  },
  {
    "url": "favicon-16x16.a4687270.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-32x32.623384d0.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "index.html",
    "revision": "65851b54512a36b6c15107b0d5b82a9c"
  },
  {
    "url": "logo_dnum.33077c95.svg",
    "revision": "8c6d2e72781d68600c3918f8d86f33a5"
  },
  {
    "url": "marianne-bold-webfont.1505950c.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-bold-webfont.7424dbde.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-regular-webfont.0a959359.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.daa94941.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "MIN_Interieur_RVB.4bbb1f3d.svg",
    "revision": "3a6aeb87b0f14000b00da95fc9687202"
  },
  {
    "url": "safari-pinned-tab.f0dd29aa.svg",
    "revision": "f91dc8a582afe85e08c30e60c9231d1a"
  },
  {
    "url": "./",
    "revision": "4ac22d039904552708f4f7ae1fea9310"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("${PUBLIC_URL:-/deplacement-covid-19}/index.html"));
