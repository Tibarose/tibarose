'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0ee4534d43e20736af559675e45e71c5",
".git/config": "4ff086f6ab46ba70fe4792e446c4ebf1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ee6fa4191ddf00c1f70c979c0f02cb88",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "11d3e26a44324c97f45a51610bdeb863",
".git/logs/refs/heads/gh-pages": "11d3e26a44324c97f45a51610bdeb863",
".git/logs/refs/remotes/origin/gh-pages": "0162c7ecfad5e5c6211c7c6a1a7f3b17",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/11/bc6c76b1c72a4cdf6484b114bc808d30920a5b": "dbab1e182dbf9073f22b3610424b5208",
".git/objects/15/f37f9a92bb2ba461860c90e7330752c26a6c92": "2a61727f1bea9c8c356d44fc03e9f405",
".git/objects/17/20adb313cf1c69f50d3faaefed54cd7673cba1": "6c2218f51e33a0fdb0d056fd334e7b66",
".git/objects/17/56b92bb0862e6503e833d7dac3f7a0b3e34e55": "636c009d60042418f8d78a4796c96e0a",
".git/objects/18/f92b9b5701f8e50c5c39ece03de725186a71d3": "0874b8c194ee1e0b10f6bf1558c4c669",
".git/objects/1b/2e9705fa17dc8694ba126a84ae89da13a07bdc": "84d435720a047ae26c0b9f6873ea7008",
".git/objects/1e/9231986d76c5181b38c70df6f6e1855145e65b": "3738bd176972772bb7dd1122807f9964",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/10a214c6dfce6afa5580ee0fe7f3ee47c705aa": "a05adb475863604093a6e80f6e103d42",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/38861ff905324562f50d1943259cca6858a86c": "eaae7efed0305afc442c0b1b6f84c63d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/9048ca39fe803fce9867445bc010f7f04efb4d": "12507bd29339b97d66c78e1bff308a2f",
".git/objects/41/a23fce9c57d6b6b1879e98393fe056e6b239e4": "42cbe184750bed9993790b49041d134c",
".git/objects/41/ec6aa3500374cd3f04532d1496491bf9030c8b": "78e5b00f15c7d379ae93f3613138781a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8f6fe33154cbbf6302d739315fb6fc320a44b7": "e9c2eb92135c2028114e9d548b6b5c08",
".git/objects/4a/5199de62c29b81c9c1fc3206625c704b5a2906": "d9dd21119f207ee1ceb4a31520d4173a",
".git/objects/50/4c6601b958de88a225d4674fea27560a345795": "f6990e4138b88b3e4734de92df074b67",
".git/objects/59/3f0db32c0e12623b068f6d5a7248513ea98b1c": "5996f0bea3f5a9196221d87f03a3539a",
".git/objects/5c/37b0f52311d4bc8d971a71c56f0827f1ca5c4e": "acef10a1e51a74b2231e84cb528622c3",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6c/3b7ae972c704d6696238b625a862f50009e903": "0e836585fc06e0e3a17bfaeca3c40624",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/d3e54b31b67656220288027f2e121ce9a30931": "1d24587d277017bff64f6a67ee6e502e",
".git/objects/70/eb7eaad08091f5ffab3ea788e4daccde7e16f4": "090096835373b8b9b15618b83daa0053",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/29a28ffb2a6b2ad23f3fd86f8e09c1f2c91c95": "39a5bc2655adf1b3c6b12d7c970e5efc",
".git/objects/81/4401252a52e00b735c395cc29b7a933f65a770": "143583ce6c16fc8c42b37cdc3d004172",
".git/objects/85/00c2d2c53dd0ddceeec18e717e2c0687728d07": "1c0818382afaadf31443ea0335146238",
".git/objects/85/5d133899295891087fe38faf4c6e745150d219": "7bd391c8eeb892725320be0c2f1cbbf1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/6c0d982f45ce77419fbe61171dbe1bcab6e5cf": "a341b0ee94b59a258aff1854438fba3d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/c29a9c27c86d5762dcd0c0aaa3cb2634047b37": "09a04256ec0cb592af340e8b1c52d42d",
".git/objects/a8/0e7b7771e5fea4cba24e53f686b7695501f738": "712763795a377801626dd2cefce4745c",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/daf17f1d5c9c73daf97ead1e397ecad820e184": "1dc7032402419fca5d4495bac0894ff8",
".git/objects/c3/5f64f9dbe48f3304a1d014831668e3fc47a1d7": "98c42e39ef1390a753393666f7c0d525",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/09b4695425e59f9efd653decb086c72473a4ba": "e6f3f2d1df9647850fa6893be405d485",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/cb804b662c071bef2ebdc0330461190e1d884a": "fb2350c9ae33aa59b4be4d586c484dcb",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ea/fb4859622b5ffa9b5b4be93883f121f14ff4e8": "5cabea9fd6651aedde046795c4afeb6f",
".git/objects/ec/17573e67aa165474e96e27cfac24b036f79bf6": "36128e48507cfb3ea44ba7eedec05b75",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/be6edc3c5d8da17b77d4f6e1fcb9818c4023df": "58a4497bfb8bb1dededb416d8d577d38",
".git/objects/fa/db6cba97bac98490ee0daac4f2a1d0f106c08b": "7ff63f3081a0d05cde57c8d2800cc3be",
".git/objects/fd/e1d163affbd0c1c94f4adf9f9e5bc295c589ae": "992a9712efeb8f568d9bbf91911b4b58",
".git/refs/heads/gh-pages": "caf2a6e5df846e18232140c569b9e0b9",
".git/refs/remotes/origin/gh-pages": "caf2a6e5df846e18232140c569b9e0b9",
"assets/AssetManifest.bin": "eccfbc799288020c88867882a7018eff",
"assets/AssetManifest.bin.json": "cf558313b108ac595afc614f0b7ffab3",
"assets/AssetManifest.json": "b1b171f98d8476a93e84e34b1ebc6bf3",
"assets/assets/images/3.jpg": "957cfbe2fb7f33c0ad1db889aaab4cb4",
"assets/assets/images/b1.jpg": "605cc06e14ee6fd23dcaad0e7873c4f8",
"assets/assets/images/b2.jpg": "14823bdbe5d6a5538f6a9d4c1e835e93",
"assets/assets/images/b3.jpg": "372e7696a9f81db14747dc3843e5dcd4",
"assets/assets/images/b4.jpg": "f1e640ce39f80d23c4571ca86b3b6a52",
"assets/assets/images/b5.jpg": "9ab21f94c16c2758f7b337789e5e909c",
"assets/assets/images/b6.jpg": "09a0abd8b43c9759368a525c929bcb41",
"assets/assets/images/g1.jpg": "e703235776b10742ad3718a363341727",
"assets/assets/images/g2.jpg": "b51c4618eb84eae6f70cf04e1df73294",
"assets/assets/images/g4.jpg": "70cbe1b82401af85abbf48f5dc250815",
"assets/assets/images/g5.jpg": "8974613a92a94f0e3d95e25ef8032746",
"assets/assets/images/m1.jpg": "4c8a05c5e2783290a1dbb28277043abf",
"assets/assets/images/m2.jpg": "060fcca42edc905d54d8291d00cee66e",
"assets/assets/images/oo.jpg": "04cb4603bf88c99bae050d51fca89053",
"assets/assets/images/t1.jpg": "eff44bc46227e95f97057c5b91f54972",
"assets/assets/images/t2.jpg": "eff44bc46227e95f97057c5b91f54972",
"assets/assets/images/t3.jpg": "2d12d00063aff4a77e469fe4992a7420",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b9a1eb8d8e8ee81d44cc9df20d50f4a3",
"assets/NOTICES": "744289bbe7995674c982c0142efe4ae4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "66ad8a09836eeac4f2c8bb32cfea30d1",
"icons/Icon-192.png": "28d419343b871cce35f76793bf7e5a2b",
"icons/Icon-512.png": "446c4be429da932d9b16e7ba0ef529ef",
"icons/Icon-maskable-192.png": "28d419343b871cce35f76793bf7e5a2b",
"icons/Icon-maskable-512.png": "446c4be429da932d9b16e7ba0ef529ef",
"index.html": "1b607bbe585c43aa8689713e68e46e4a",
"/": "1b607bbe585c43aa8689713e68e46e4a",
"main.dart.js": "3e8c7c0714e8317f5f8a6b9ecc2bde03",
"manifest.json": "15b626cd4fbfbcfe360d47c95f6a22dd",
"version.json": "bbe2d7d3df6c64fb742890d21d83b84d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
