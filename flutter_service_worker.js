'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "37af7bb060c37e4255c398c5f33d1284",
"main.dart.js_24.part.js": "a102f5ba993ba8f091c356600e27c15f",
"version.json": "009c9e65172e010890f7f65fde438006",
"main.dart.js_7.part.js": "9bc24cd7d9ce5d963d42b980806952de",
"main.dart.js_12.part.js": "efae2689fe7090575fa9e978e847f53d",
"main.dart.js_6.part.js": "29e0a7af2b0f90e352200e77dfe5918a",
"index.html": "ce9be0fa4105201e3830636e66d011e5",
"/": "ce9be0fa4105201e3830636e66d011e5",
"main.dart.js_13.part.js": "a553cda9c2d7beaf50038d9872b9f615",
"main.dart.js_35.part.js": "ecf2e51e41524737cff95bc72cdd056d",
"main.dart.js_25.part.js": "18711009e4b407cc9f87da4d4e65af2b",
"main.dart.js_11.part.js": "ee893febd0be6486d86ca426dd334f59",
"main.dart.js_4.part.js": "6dc33df559bf252b04c20e4c4c31d17f",
"main.dart.js": "9d3cd9c71a0714c681aee307da5d170e",
"main.dart.js_18.part.js": "087066ac580537cd27c32b31a87b77f6",
"main.dart.js_37.part.js": "265b2504ef1b487fdd110cde4bb30768",
"main.dart.js_19.part.js": "d0efcdcfa4120bf558735c41b2ed2b77",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_36.part.js": "6282df9333689e67ad96877778709f59",
"main.dart.js_26.part.js": "f548ae06515513fa825a6ff8f2dc4fe8",
"main.dart.js_10.part.js": "e408d3a6808e318f41a56d17265c2bce",
"main.dart.js_15.part.js": "b8d8cdffae1a33a82638311160b2f0cb",
"favicon.png": "f69e74a42b055c0d9cecf8bafddea347",
"main.dart.mjs": "eca5a77c82d125f9ea51bef329d10e9a",
"main.dart.js_23.part.js": "fdf2b4ed745a05d1097b80a5da710769",
"main.dart.js_33.part.js": "0aa5ebeb6f620ac3b61760a9318e322a",
"main.dart.js_9.part.js": "bb6758511f0d736345a1d88133377a53",
"main.dart.js_32.part.js": "5e3e245e3ee7db6605a47091655fe130",
"main.dart.js_8.part.js": "ed303d5d45498beae96e0ebd67833c24",
"icons/Icon-192.png": "b8f3248664458787e48f5fd94d98fb29",
"icons/Icon-maskable-192.png": "b8f3248664458787e48f5fd94d98fb29",
"icons/Icon-maskable-512.png": "1797f844bcc8843b16732eae98af4f13",
"icons/Icon-512.png": "1797f844bcc8843b16732eae98af4f13",
"manifest.json": "5a94031aaf746570310ee0684a562d40",
"main.dart.js_14.part.js": "d685be38773b8c1c80936989afb40c9b",
"sitemap.xml": "6a6f116c69029d999526a69031540efd",
"main.dart.js_1.part.js": "d9b75bd820d42e098eee67efd634e4da",
"main.dart.js_30.part.js": "80380971bfe517e6057d3279e0ff5602",
"main.dart.wasm": "3c344898bf1e5702008c60bf55d306ab",
"robots.txt": "b6cd68752cf913797535e4afd42c310a",
"main.dart.js_29.part.js": "537075c822aad467f776fa31c8314f54",
"main.dart.js_3.part.js": "9a7ec4fe579649bd5c3d9c131c72c999",
"main.dart.js_16.part.js": "3a84eda464c58cb4ada8559f57c88a28",
"assets/NOTICES": "d05b42ef9a2ab3a86380f9f1451d786a",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/AssetManifest.bin.json": "4836f07dfe7ceff7e31ae7e4dee83984",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "4f04c4f205df675d540aa8e5e5e5658d",
"assets/fonts/MaterialIcons-Regular.otf": "8f775d2fbb70f8d37014e5033b73640c",
"assets/assets/images/skill/android.png": "98f2f47cbd749211c156d73f9162d40a",
"assets/assets/images/skill/luffy.png": "f77015ce4904d178d3070b45b50b1d3f",
"assets/assets/images/skill/web.png": "2c9e359173b8948de84f7a089b11ff3e",
"assets/assets/images/skill/ml.png": "b13bea064ce0bee1fae91ca068e6b676",
"assets/assets/images/skill/backend.png": "cea1c7bd5c6b4f605b3807d78cf96a88",
"assets/assets/images/avatar.png": "c32cc9c15f9a0a6b1f0c6829305c4b05",
"assets/assets/images/logo.png": "ce0b7c619b8cd2378de79ade20ade281",
"assets/assets/icons/git.png": "35a8e7942a17dded45467100cc9d2589",
"assets/assets/icons/python.png": "692e0e241a52eab20c5518ff0da87821",
"assets/assets/icons/flutter.png": "5b26614dbdbcf4b3ecb80bed00ad3702",
"assets/assets/icons/firebase.png": "8972ba7d2323ec59f52437545b060c70",
"assets/assets/icons/mongo.png": "638b450b5ed171a02a642618375e88f5",
"assets/assets/icons/django.png": "372b39ecdd10da9847e19c990c691fa2",
"assets/assets/icons/react.png": "659d08c39f0185f269ca979cca050d5e",
"assets/assets/icons/kotlin.png": "d2f61fef33fabb9c087a4590804def63",
"main.dart.js_28.part.js": "8a1d2d5ee8ff78a7ca875b0862bdbd1a",
"main.dart.js_2.part.js": "402d5253a1d5e85af7d5476b491c7f1f",
"main.dart.js_17.part.js": "5ee4900adf6f1f86b88aa96cb7123b41",
"main.dart.js_31.part.js": "daa2ad55b1084a0207f2ec5f5993e2b7",
"main.dart.js_21.part.js": "779d059e55916a449217772ed9a8b12f",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
