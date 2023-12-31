'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "23ce50551d1470e496abfbed292f2054",
"assets/AssetManifest.json": "bd0f1a072469c6b03ecd12c48a504ee7",
"assets/assets/fonts/koodak.ttf": "2be5d53bd9404008e505c403b2af6d9c",
"assets/assets/fonts/yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/images/AppleLogo%2520copy.svg": "fa9b8d7207dbc85477adcb8648543b00",
"assets/assets/images/AppleLogo.svg": "fa9b8d7207dbc85477adcb8648543b00",
"assets/assets/images/avatar.jpg": "33701d384e6ba190ce6ed63127c170de",
"assets/assets/images/bg.jpg": "cf19f12f8784b47b21cb770d6b35794b",
"assets/assets/images/bro.svg": "e482caf9be5d50afc10db05d6d52d811",
"assets/assets/images/download.svg": "21f42a07fefed25ddfdcf4c1b2dd0e32",
"assets/assets/images/dumptruck.png": "b0fc146f8b5eec8b435ae3de6ded0bf8",
"assets/assets/images/f1.svg": "1a724d316987f945d1aa7d8911c80e53",
"assets/assets/images/f2.png": "c0c4585a3c1f319d68539c95a94c73ea",
"assets/assets/images/f2.svg": "ac0b43184bb93208059b4672c704c1d1",
"assets/assets/images/f3.svg": "80da512599243f6ea63ced597c6bfa0d",
"assets/assets/images/f4.svg": "a7193a0de682c2485a5d86d7c68b36b4",
"assets/assets/images/f5.svg": "fb7de22e5e5b0181ea506b3c566e3bbd",
"assets/assets/images/FacebookLogo%2520copy.svg": "e09c979561821af0196cb3e3a526b52d",
"assets/assets/images/FacebookLogo.svg": "e09c979561821af0196cb3e3a526b52d",
"assets/assets/images/filter%25201.svg": "143f55d593c57941eac64a524fabb3c4",
"assets/assets/images/folder.svg": "7c7a920670e42b17978a45f07c63f4ca",
"assets/assets/images/GoogleLogo%2520copy.svg": "60f6375ad419fb3399d812cbd25fa8a9",
"assets/assets/images/GoogleLogo.svg": "60f6375ad419fb3399d812cbd25fa8a9",
"assets/assets/images/home.svg": "f3f52e25ef0dc3af9819f158319e1541",
"assets/assets/images/map.svg": "81fd0e19da30271510f60305010bda80",
"assets/assets/images/more-circle.svg": "ad0417745d3cb23026ab24c9b347e4d7",
"assets/assets/images/notification%25201.svg": "65fecf7d1085557d33b1fedac7cd6c1c",
"assets/assets/images/p3.jpg": "579d658dc0258a6e783499c41d377bb7",
"assets/assets/images/p3.png": "f2c63ef04c483b8332f882823f0aad33",
"assets/assets/images/play.svg": "5662c69f26befada29fb2472bf313a48",
"assets/assets/images/podcast.svg": "c23460ef844d66e00fba318f5739fc8e",
"assets/assets/images/profile.svg": "a49841b28f9afeb7118bd11515c38a8a",
"assets/assets/images/proj.png": "785f03ff60e6e636c50525c52158bcae",
"assets/assets/images/search.svg": "83b685602cab23708efeef8cbc494636",
"assets/FontManifest.json": "d9916892f085017aa84abe8cca6eebc4",
"assets/fonts/MaterialIcons-Regular.otf": "f73c58ce0ace7d409eb9572fb844f246",
"assets/NOTICES": "b7328f16bc9fb7793de10e4084d811c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd618647ae4a96f2b9cc00a027998e3e",
"/": "fd618647ae4a96f2b9cc00a027998e3e",
"main.dart.js": "027818a255eb80d48f2ca150392e74e4",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"version.json": "d9a38c0a1966b91f233828db582230cb",
"web1/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"web1/.git/config": "dcba88c252f9518400e2fbfc29710254",
"web1/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"web1/.git/FETCH_HEAD": "2da7b228c7460c56db97542cbb6d62c4",
"web1/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"web1/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"web1/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"web1/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"web1/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"web1/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"web1/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"web1/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"web1/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"web1/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"web1/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"web1/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"web1/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"web1/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"web1/.git/index": "ec1748c762f1b8294db8bbdabdfe39b3",
"web1/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"web1/.git/logs/HEAD": "b30d7cf4b2f04a14cc07a6bc9217a88e",
"web1/.git/logs/refs/heads/main": "b30d7cf4b2f04a14cc07a6bc9217a88e",
"web1/.git/logs/refs/remotes/origin/HEAD": "0ff24f1278350716ccbe903651bc72e4",
"web1/.git/logs/refs/remotes/origin/main": "ae119ba897889fcabae78cda4c794612",
"web1/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"web1/.git/objects/72/3b6c796fcbc6343985b319b34a5595a559b256": "d48c202445a06f8e58f5908dc4f24b30",
"web1/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"web1/.git/refs/heads/main": "7b7a65f1b5d26355147f02a021f17bf6",
"web1/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"web1/.git/refs/remotes/origin/main": "7b7a65f1b5d26355147f02a021f17bf6",
"WebTest/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"WebTest/.git/config": "d3256a013ea3e3e0458ef2126f41aaee",
"WebTest/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"WebTest/.git/FETCH_HEAD": "dfcac69bcdc6d477028a86381bed7ea4",
"WebTest/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"WebTest/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"WebTest/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"WebTest/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"WebTest/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"WebTest/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"WebTest/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"WebTest/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"WebTest/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"WebTest/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"WebTest/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"WebTest/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"WebTest/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"WebTest/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"WebTest/.git/index": "374b3fcc91b74500b87ea744107a35b5",
"WebTest/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"WebTest/.git/logs/HEAD": "21c43455978d2159be50cec79c953218",
"WebTest/.git/logs/refs/heads/main": "21c43455978d2159be50cec79c953218",
"WebTest/.git/logs/refs/remotes/origin/HEAD": "dbca560989de11441e27b48f42b90d36",
"WebTest/.git/logs/refs/remotes/origin/main": "bb32ba5ec26d4d4a0bd9bb9edb155b62",
"WebTest/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"WebTest/.git/objects/b6/ccdc47607e3cd2b1a899f72083fbcd5d08592c": "edd342115ff88dc84d42069879c3548a",
"WebTest/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"WebTest/.git/refs/heads/main": "adcad8a4249f86645f401021e5c1bfcd",
"WebTest/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"WebTest/.git/refs/remotes/origin/main": "adcad8a4249f86645f401021e5c1bfcd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
