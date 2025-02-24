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
".git/index": "03a16d815c7688342ec9f8a2b186f10e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00c3a0d3d1fd065dbcde8a3f54d057a1",
".git/logs/refs/heads/gh-pages": "00c3a0d3d1fd065dbcde8a3f54d057a1",
".git/logs/refs/remotes/origin/gh-pages": "7f992eb0030b74569c782d8719f3b3e6",
".git/objects/00/127cfbbb70e60b4bea4adff820468afe05b3b0": "6954d9d2e169f8feb5912766d3849f4d",
".git/objects/00/6440f3e1d899e4862dcd6528730153634f9cc3": "4fbf1af7ab769df8644a3531a3596a3c",
".git/objects/00/b45f901a4bdd78c77d0972fc3e97112b5695d5": "606fce68236a3db8808f2db0fac562c7",
".git/objects/01/29aacee6365b71951400520a551884c9bc7386": "1881341b30b5b5e2678999e9e73f61ff",
".git/objects/02/4fa0ba8d43bc77f5a92f68316ce839835db996": "db566a9430ef5201c15b4d746d12bac9",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/04/80bce162d8ea31ffa0b57f05136a270526af38": "0be96ae0d3f6555deb520e77cff8dc6e",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/4f5847fd0b8c1eb842f7fac14072df3584958e": "0dfac9308cb3640cf5c7a162aa121ec4",
".git/objects/07/c2ad8bb6923d26ebd84ba439c51f3504145c3a": "357fa38904d956ba61e8ea96e44a5c3b",
".git/objects/08/5825812440bb91a168d945ff9d968dbe9c84c2": "e4c5dfc472ad67dfe69705714a519efb",
".git/objects/0b/669622f9ebd732ce24d9d86cbbc2e82030a64e": "d674327f7833f00492a693dcb41a4fa5",
".git/objects/0d/60bd2fe342b207f4b07c26c088bc51fd8dccde": "7f3ed53de1d7eb07be260adcb396bbd9",
".git/objects/0d/7f4fa4f120737cd9073d984d1d9ad34eaa984c": "ff9c7bc15aafcabdbab4d3cfd38f3227",
".git/objects/0e/c8cce7947de9285cf1488a697c6d58cbccad3a": "d3c4e9abe6a2ea915a9f094759fc71fa",
".git/objects/0f/e110765c4772a744f254d33896a9b9410f89ef": "01106282cf65751562b6c60e5b087158",
".git/objects/11/bc6c76b1c72a4cdf6484b114bc808d30920a5b": "dbab1e182dbf9073f22b3610424b5208",
".git/objects/12/042395a1e99d5497d37d203e9c610c8310680d": "030748b77d0261b17278d10bef2a0094",
".git/objects/12/70dd6ec4dd4ed69c36210f5f41b41c1f8addf3": "4f023818c8c2afed984fd32ba12379a4",
".git/objects/13/73fef94fb71b5f31b5f8780a1cf82fa3d900fd": "167ba0cd737318894a0afc489a4e94bd",
".git/objects/15/f37f9a92bb2ba461860c90e7330752c26a6c92": "2a61727f1bea9c8c356d44fc03e9f405",
".git/objects/16/3e4cbf21e34dece383da4561c1f7e7676fc223": "a5a4bc12064ab613061a74c0e21fd541",
".git/objects/16/57218b17b5511713520d20a4c2ae788313503c": "4bba690b5a8c3c25638b56995fce2e0a",
".git/objects/17/20adb313cf1c69f50d3faaefed54cd7673cba1": "6c2218f51e33a0fdb0d056fd334e7b66",
".git/objects/17/56b92bb0862e6503e833d7dac3f7a0b3e34e55": "636c009d60042418f8d78a4796c96e0a",
".git/objects/17/d741d08d0391f2f268eda43b44f5516c9e22b1": "5a9df86c6a94c6776d7569123559847f",
".git/objects/18/f92b9b5701f8e50c5c39ece03de725186a71d3": "0874b8c194ee1e0b10f6bf1558c4c669",
".git/objects/19/a38f158d6dda5e8ab5a1f173b2bfef8cb0f9f2": "5dc7d968b045f1c07abd8df265f234bb",
".git/objects/1a/12e437805dca8fa6313680d5e8e7c6c8704c94": "0fc911664a098d85fd5ccbe7b19b8669",
".git/objects/1a/3e809a7baba5e8439bc61323141b86bcee6e93": "0829885ed2f0d45dc2dea3b2ced33e87",
".git/objects/1a/b5fb06389f58ebc31c921c1dcdb123a7bad193": "f4e664510b4f05b206b38ff894b3249a",
".git/objects/1a/bdb19cb3fb9cb8fb40d2f527664569a2921c44": "ca767507796be7e25a9689795fd64f6e",
".git/objects/1b/0b8e858764b20f29cb0606232613f3737daa85": "c839ca13d34977066020134e18c96481",
".git/objects/1b/2e9705fa17dc8694ba126a84ae89da13a07bdc": "84d435720a047ae26c0b9f6873ea7008",
".git/objects/1c/1f5d24f0e442116b5407037ee431ee5d2e6c69": "0e35a75dcf9412761e6052e50f338491",
".git/objects/1c/910fe86bb45b0485cf971f2ea8674d9546e07f": "3d8133a3ae6b48d46cf4bbc626ac97c2",
".git/objects/1d/28cfe63a8b9298b0ee5833e4cc0170b648ac9a": "054057e8464908ba92353f5f53b5815c",
".git/objects/1d/83d87980286adc8f1fca791a0daf5a078f07dc": "22df05aee2b514922e2e96d4972361aa",
".git/objects/1e/9231986d76c5181b38c70df6f6e1855145e65b": "3738bd176972772bb7dd1122807f9964",
".git/objects/1e/d70ce7737f6211a761cfe17b8202842bd9a58b": "b57f40455a21635456f6c45200eeaacc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/a829967de29d3d75b16af2ceef4a17a6f439be": "0e8c7eae55daed17e78000727a0ddb23",
".git/objects/20/a23c72445cf37a67ddd45b0ab824601cfdc32b": "b4378ccb3457ec46d9df0b50d16bcf7c",
".git/objects/23/f611ce857ac9c28820a474e4f9ab5d7b716513": "a3215b3fc4a77b4b42ae75966603d56c",
".git/objects/24/10a214c6dfce6afa5580ee0fe7f3ee47c705aa": "a05adb475863604093a6e80f6e103d42",
".git/objects/25/253ed60ec8a1cce44e23fc50ab0e756026df22": "54700d18fee367fafaa99a6ad23c3308",
".git/objects/25/8a328c7b223a18c4ca61c522a166e1d3285456": "82f915f749f588e885c964fb99bbd9d5",
".git/objects/25/dd0c138920cc86ab42d325e714a3fc9d6d3dff": "17f706f1487aa3d90a21072f462471ba",
".git/objects/25/e6795395b5aecefeb1c96b215405b5c9e42aa3": "f0dcef3b3970468f680609f52c9c2511",
".git/objects/26/d66144f6f404615032b81a9b2b8604317c944c": "ab7c8dd05742a15386a31a5ca28d11b6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/cb110d6a95088c0da30d73d40cbeadb5a40450": "3e36e24bfa35f4d6970f4937eb99eaf4",
".git/objects/28/37f329d35c3e00b990690d281103ff504ff2ae": "26315988c587157375162c728e80b7d4",
".git/objects/28/75340203068ecc8bb4d6a398d6ac22ca362464": "28fdd6e7ef57d38969493fb01400332b",
".git/objects/29/f1694d76ac7110cfd96998e119de8e18b57f2c": "0f0b62bb297f89fccf987ecc0667ef66",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/38861ff905324562f50d1943259cca6858a86c": "eaae7efed0305afc442c0b1b6f84c63d",
".git/objects/32/6faea260a526768fc490b7a66148377825b8ff": "0ab2922388df9ae7275ccdc1f42e7d77",
".git/objects/33/1d61cfb4736129a4806792f513aea132c3fdcf": "e93bcab14769f46a6204ad1a0fdd8d10",
".git/objects/34/b5021e34c01f17bd98282bf7fe0c3daa385473": "625c3ed34c7e26bf8b6e0b789eb267ef",
".git/objects/34/e35680a15a928dea0d74a159b882d004758974": "a113b1beb44fec15851e9f8a56c5c890",
".git/objects/3a/36f780ee8ee3b868eebdc0f391ae855659d90b": "094fee8fc74c473b58c1c176a98e63e8",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/9048ca39fe803fce9867445bc010f7f04efb4d": "12507bd29339b97d66c78e1bff308a2f",
".git/objects/3d/068660e5e5159b186eff65d75031b4b4c69bbf": "ba97ad93a46c9c78bce3487a2e599e4d",
".git/objects/3e/b73296f3d2f1e8faade88858c816c5c5d5f2c9": "165ef8badffb9bdd1034a1e7e873b81d",
".git/objects/3f/3a8984e7a9cf8f55a4f224d0af322d496dbc48": "67af8cebb4d796af89d6776e02b5433f",
".git/objects/40/4d745e26893ba85e97418bf8a97f09b46c3910": "62d2590f7418a90b1c5cc3899f8daf52",
".git/objects/41/a23fce9c57d6b6b1879e98393fe056e6b239e4": "42cbe184750bed9993790b49041d134c",
".git/objects/41/cef5d13a9753f3d236fe4088a003a6dc068944": "627b82280de6e1e458c5a18b0300a3a3",
".git/objects/41/ec6aa3500374cd3f04532d1496491bf9030c8b": "78e5b00f15c7d379ae93f3613138781a",
".git/objects/42/411b0f410c31dce7a04a4bcc964b9ca66f25e7": "ca6de13aa662ab02a7628e808fc570ee",
".git/objects/45/c924d6b3d3cd844983bed3005807151f36ea75": "518417f6d2af304416bc4706d626f6da",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8f6fe33154cbbf6302d739315fb6fc320a44b7": "e9c2eb92135c2028114e9d548b6b5c08",
".git/objects/46/c83c5bbf947fb7a61f3aa268987be2d24e3d1d": "53a22658b1ff8389005b52b04685f3af",
".git/objects/47/b8be111052c77f27168ec3a70707aed6d0a607": "d1ee9c034106f4f142f8c485839d27a3",
".git/objects/48/e15c46ea9aa3ef4f4e8014a0e94978b2dbae77": "1e9fcf7fa347f28937fbb40417283a62",
".git/objects/4a/5199de62c29b81c9c1fc3206625c704b5a2906": "d9dd21119f207ee1ceb4a31520d4173a",
".git/objects/4c/0fe3043751c7d56cfc3a502fd7f3f4ba5c27b7": "c4fb450cb55075952b678362c50f58d1",
".git/objects/4c/ca6c296d701aa0738213fb0b882dd36f29958c": "9bb4be9ccc4b1c6590287e90d02f83d1",
".git/objects/4e/a6528035fbf05e57df9de8d7b93085974aceb8": "cf23cb3185523c90d935b47b5efd2427",
".git/objects/50/4c6601b958de88a225d4674fea27560a345795": "f6990e4138b88b3e4734de92df074b67",
".git/objects/51/cdd8278658d213baff39f72de5e12ede7c3b48": "13408912bf7e92acfdf5426c92eaa04a",
".git/objects/56/3f1d4bb61d64c646faaaf0978625264ac444b6": "561f4019844afc0a825ee4fb59359848",
".git/objects/58/bb6f39df118b87fa261c121b9e7f5c60cb68b6": "12f60dc4e91cfa02bdc459f36426438a",
".git/objects/59/371828a368bf8977aa363d3938577b401e0b64": "c504d078b04d92c6a3ec740ac2468897",
".git/objects/59/3f0db32c0e12623b068f6d5a7248513ea98b1c": "5996f0bea3f5a9196221d87f03a3539a",
".git/objects/5a/893b25fcca6e69d4183167fd3b6f42f1d3986b": "d6024591ee9e054b2932ad631d93cdde",
".git/objects/5c/37b0f52311d4bc8d971a71c56f0827f1ca5c4e": "acef10a1e51a74b2231e84cb528622c3",
".git/objects/5c/72857b4eed1b8f388b467dbcfc64313ddd5e63": "64cceb134bc7656a3151c89b10baa631",
".git/objects/5c/cef0d4356ca73d1a2cdd1f209f8a572d80d74d": "9bca7d51b944ddc9cb2c9151a664db4c",
".git/objects/5d/6c86be2ab460f743f94df264c8bddaa8d27a20": "15a3705e644f0344833038e99e4efd3c",
".git/objects/5e/2cecfd5a0555f34f98e5daa3a36972c01ae0d4": "254c3f383f42f9e3f35382829c1e9fa7",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/c6f5ebeb5c029d380d7e7d346b0dc0d3007dec": "d70db9e4340279dcb3b7edebadccc183",
".git/objects/60/605f288ad19c3ede723fab20e2b60343f9d8f6": "2a019734de13c120721f44fc0ca05b76",
".git/objects/60/d2af8e2963708980cf9a11e92a3c317534e2b2": "fa3e24bb939579c5e961c55707cbe391",
".git/objects/61/6a7f158d47b6f99357ff30f32891701f68849f": "c615bb7248bcc95fefc5f55f23aaa536",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/df688fd79dff4307005f7476efd6351a962b4c": "cbe803514b6e731f87f9b9f5d154beb7",
".git/objects/66/68fefe37dbf575a4fcdcf59f0ad4c692b443c2": "5b067deae6d74e69018d356053a92f4b",
".git/objects/67/20e1d01aed555a9bfb4599e47f7a3b88d24221": "9875914b747b76f41abed492d58e367b",
".git/objects/68/c93d87ea7a1ebed953c7e533b290ef2548c2b4": "aa2415a6a979856a4ebde143ecb7be57",
".git/objects/6a/53cfd89bddbeebe67da6f1b01153ce86deb6c9": "fdd2f3f6e535c97ee01f85c54e80d149",
".git/objects/6b/b8f9c127a547a8f2cef7f03dff28f575bfc55a": "7b0933b1990c8da4f21ac70e09c3aff1",
".git/objects/6b/ed4876bef6fe29ca9bf8b3db2cbeb33c043d06": "ad8307b4ab94561dae29fc8cc15dfb92",
".git/objects/6c/3b7ae972c704d6696238b625a862f50009e903": "0e836585fc06e0e3a17bfaeca3c40624",
".git/objects/6c/a0d6197324ee7602bb4db023f1f0c2c9b7bd78": "38581899ff135a19a3287c7d46a28e5d",
".git/objects/6c/c02d073807eb4b839bc08225856562d8ca66e4": "d1157af06c0b532cb45055ff01971019",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/da1578fb71fefebe41415ebbdb75e2bb578d65": "f825320c7f122cf0ab23ddb986286996",
".git/objects/6f/d3e54b31b67656220288027f2e121ce9a30931": "1d24587d277017bff64f6a67ee6e502e",
".git/objects/70/eb7eaad08091f5ffab3ea788e4daccde7e16f4": "090096835373b8b9b15618b83daa0053",
".git/objects/72/d672c61e29f7b6bd865addd3af544b10a1cf25": "35d045fa0437408aa1a538d8a8ed084c",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/42e6ffc8004a2d32aa68a7fcab3b86db193d04": "578ed876e2eabba1b2fceab29a38947c",
".git/objects/76/29a28ffb2a6b2ad23f3fd86f8e09c1f2c91c95": "39a5bc2655adf1b3c6b12d7c970e5efc",
".git/objects/79/ea60ba90d353ed01f124f6d3d73a45d4627a41": "665fc7df885091633fb01d728d2c1705",
".git/objects/7b/e552b0b9907e6e48c49d72acc798acaaa04f36": "8dd6becd329ba903d319d381054206d8",
".git/objects/7c/f8c5fd648871a23275f0cddeb7bc671c414fab": "e9c448f3dff8a61d265ac6e527245e23",
".git/objects/7d/a22c4cb696290d5a2a2aa732da7a76800d20cb": "3064488fc6b2b6baa76dc2e8cc1a0288",
".git/objects/7e/f335167a01a7296e1d9ce0f68668cac1868249": "42e47709f1481f77a3960a77e971f110",
".git/objects/80/35abfc74989b08e17235c4b23c46a8706d2e1d": "e5c46d9e2b669e5cdef88a2a6611fe7f",
".git/objects/80/cd103db97b70307ee54bb98563733b94f792d6": "2f09dd67a333c2d84409fd8f66dcfcec",
".git/objects/81/4401252a52e00b735c395cc29b7a933f65a770": "143583ce6c16fc8c42b37cdc3d004172",
".git/objects/82/12318242b95e1ddde84961e735f0afd26f51de": "5aa7dd1fb494ca02b81aefe5b84f9234",
".git/objects/85/00c2d2c53dd0ddceeec18e717e2c0687728d07": "1c0818382afaadf31443ea0335146238",
".git/objects/85/5d133899295891087fe38faf4c6e745150d219": "7bd391c8eeb892725320be0c2f1cbbf1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/b2fa7808f4f6f0d27d2911d2f7e2f6727a5068": "b607f0cb3c77c9a8d0f3aab7368a21f2",
".git/objects/88/2915b1e8624ece0d5d10066f37ebd1e8700126": "8cee0e7894e5e162c85981d7744086d2",
".git/objects/88/b5d91eef757da41407b8c2614ed9b464ab2177": "a205bde08ce8a6ff69f00ad196686c4b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9c42c31250e50f43db6ea93ce140e52424fb4f": "ec5dc75d2c12570a1be3f1bc52610a0d",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/9516f0d88b64b5291114687b8e37c51fd93b4b": "0094cfb8af540988882bcd46b73d8588",
".git/objects/8d/6c0d982f45ce77419fbe61171dbe1bcab6e5cf": "a341b0ee94b59a258aff1854438fba3d",
".git/objects/8f/336ad2582308a3c00cafd37087c8e19bd21202": "370b337d125311dc1a92ae2122b78e93",
".git/objects/90/6b270efeef8805cd7c87709d5c104105f4fd50": "7a4493d262f47631137af5ce188e74d9",
".git/objects/90/aaf795a960f78088ea487b0daa04e4255fb152": "32b0020ba16735bf6f982fdd618e2674",
".git/objects/96/3f21605189397514c5044204206c413c23936c": "dce003628a56ecdc8f07e4109f1fa2c5",
".git/objects/97/34058b77726f741809ae617279d388e4933b0b": "0b32492c9036eeac714b7183b2a2c814",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/fde65493ef8b715d914d2102ed6376bca1a751": "69c52663805bac5b2627f700d9e9d59e",
".git/objects/99/4b67078c47bfeae56cea76277855bee2b9722b": "28b873cf028159a0bc2c9cd590682f04",
".git/objects/99/c29a9c27c86d5762dcd0c0aaa3cb2634047b37": "09a04256ec0cb592af340e8b1c52d42d",
".git/objects/9a/073bc703b5a0e481844b0d1638902357ae9a12": "f8bc9e2f49df487458bccedf58c324bc",
".git/objects/9e/a267e7ee1cd9f0cf07e2734a48038530c01e41": "4eab46800853316494adcf9c48d367dd",
".git/objects/a3/81e944c7733e38eacfa52a969af4690f9b1241": "2ed45a7762e8e524977c33dcbc3eb96e",
".git/objects/a4/db92ed2ad898976cab38ba4b4997f04f21ee6c": "055f52aedb3257948802ec729df9c57f",
".git/objects/a8/0e7b7771e5fea4cba24e53f686b7695501f738": "712763795a377801626dd2cefce4745c",
".git/objects/a8/ebae797237c0ff60c8d88b00374ec1f2f69868": "4155f44ea0b2f2c8fec64eeb44667a6a",
".git/objects/a9/0b1dc7209975a896ce34871d16f99ff7ab46e6": "997bc988dcc7835d30c3d36d7e0f6c87",
".git/objects/aa/867c167e51fd79ce8a7850c600f233f6bf5c9b": "2a253a9b7dc8c1f3ea285d806b8fc149",
".git/objects/ab/ec6cd38aa0325e7cb83d1802eb52e54013a0c2": "4a09226d3a9e8cf2e9e14e49d5e63ccb",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/a72fcb4c2589f107abf2f640a73c739da8686a": "a3e92e0c550c1c2503ede8879346b928",
".git/objects/b2/ee3c37e93203885e0283546230b2a40aa662ed": "4556ce20625a4f1a8c397844404eac32",
".git/objects/b3/064ebd6ad2936c554ca0a870fe94f151c45a0c": "ac3881a1540ad2bbdd930f7c9aa12df6",
".git/objects/b3/a6cc54ef2ff7fc32976b37472090a45eb78c88": "95da05a326a8043216589cc9193c3110",
".git/objects/b4/8c66849baedf8dceda3b7884205e7d68831592": "7305139b5572ea1404b280c3c7dcca7a",
".git/objects/b5/fafebe254d54c7c5100eb7d363e123885e3677": "ffaaa514d425d7e1cf16227619d95a88",
".git/objects/b6/12255c5199d9c6e40c32dc148c64d368398347": "5090eec1b6f851cba1c595d8d9593a64",
".git/objects/b7/14ca1abb3d29016ed734f8d1ecd86fcbd1a3d2": "15a779457812b6f231159a3d89f7c70d",
".git/objects/b7/b4b34d88a6e12a993ee095e869ab4693963fcf": "2faa6a113f29e8536b41862491c7dbaf",
".git/objects/b8/7fb5618fbc069049813f514d887845f02a72b1": "5b2b8fdd2e9f14ab388710aaab076b5d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/48bb6b684b5ab73e51b734e1ec1e2d001f81fb": "d7d2eccd51496c639c2ab710a98a1bd3",
".git/objects/bb/daf17f1d5c9c73daf97ead1e397ecad820e184": "1dc7032402419fca5d4495bac0894ff8",
".git/objects/bd/0058a53d69746dc6955f65068c0257071d4684": "2a9491d6b79252e3b63001ac25572ee2",
".git/objects/c3/5f64f9dbe48f3304a1d014831668e3fc47a1d7": "98c42e39ef1390a753393666f7c0d525",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/2fc36d1c2c02007b19c8f0e044870679b9f1d9": "d7d201f1dc49825fdf95b263693dca5a",
".git/objects/c5/09b4695425e59f9efd653decb086c72473a4ba": "e6f3f2d1df9647850fa6893be405d485",
".git/objects/c5/f1100da1ea118e22f6f49d78d8915233333756": "b12e5dbaaa7c436de7271fea23ce9d64",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/c2eac1865258155055c130d1e7531cba5eec2c": "e124ce3a4e761b69ddc4a08243151a8f",
".git/objects/c9/4f74b07908a0c67cc5af68008d057e79dad7d0": "35e5a9b01f6448f552b7edbb1b1c6d3b",
".git/objects/c9/cb804b662c071bef2ebdc0330461190e1d884a": "fb2350c9ae33aa59b4be4d586c484dcb",
".git/objects/ca/2309fed843a5855d97cbb6cf30ef4f4b905906": "2339603c7706305760dcecdf307dbfd9",
".git/objects/ca/e55dd0cf6a91966c49cc1eda79c199c136414d": "3b84ceea26e6e477a091e2cdb5e515c9",
".git/objects/cb/b21cbaed73de6fe8e08f76b8467f79d530371f": "5b962cc803e2ced58cd83fc6ced107fa",
".git/objects/cd/59ea8d68473ceac82fd4f32b34317544a35939": "d4936406d1e3cb7f29441b8fce61baec",
".git/objects/ce/6fe9b782dcc01cd2aa7c5021b51d5b1acd02bf": "f8b65b13e754a48441586e2fd7aa8f82",
".git/objects/ce/a58aa73d505bba7b483351cec92458d2ecff59": "913b8cba3d6e024adabaefce392e1278",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/cf/92a4cc1205532e87be6eb854c283a3c391982a": "1049b9cca09e86a0180070e22ea6d390",
".git/objects/d0/6621d38d3de47dc18b99822b2d7b52bbb837cc": "473f5567ac1b6350b68ff0fef88f673a",
".git/objects/d1/3491e87c2ef32f7e032b5b94edeb0c4ffd083c": "eaab95ce93086c1b6a4347a9f3b03e41",
".git/objects/d1/8a106b381fbb78503df4238c1df42f0db1acb6": "36aea1473e101c95110b5b733821d64f",
".git/objects/d1/8a6892a955cebfa76c5a3bcd69ee3758ecab92": "83b0f1e64c5e5d3ef02d3a432464e44d",
".git/objects/d2/521cdd66fe520956a5d4446449ac5ddf1773a1": "dba0b85b18b0f699634e7b6e46706141",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/ca0728f58c53abcac105bf8e2ffe5ad90536f4": "dd0a103037723ba8942a0f97837b535d",
".git/objects/d8/960946de546972c722460b08598ee60523bc58": "3169b003de2ba2b22bdae546c2cd4167",
".git/objects/d9/c1c5b26730a6450b4ad5ed59ee4a7659260543": "bdb503e8a242c655cc17d441003f65c2",
".git/objects/da/69c98e4a733d096b2f9560d768f6651ad9081a": "18e2fc2fe4fa6905d5d8688af9235f3f",
".git/objects/da/cf9b26e0938d6634726eaa0b74fc87679b6501": "9306970b34d376f4b82e30b9d4dc0b39",
".git/objects/df/19936ba030678941b3f5f4a7ddf96466fc0b3b": "96a68b0c7d90603567d270a2a6aebb23",
".git/objects/e5/122140f492bf6c58f38df635c398f1a10f94f4": "e4e110164610ed4b6ce2468a90edcfcd",
".git/objects/e5/3387fdfe5909c2eb38b9b0ffd428816be536fe": "94dd0ea5768b83569eac11527d53f6aa",
".git/objects/e5/3a2ad5b9e0555062b9c6f1701da68ef56672df": "f6d5e937f69c130aa3155fd4737753e4",
".git/objects/e9/d9c996d319c6d1494a7f10f67005868c12c65e": "03b11ddc1dcd7e0bd55ad93b88731edd",
".git/objects/ea/c76f5ede202f58921ae2da53f407a4dcb1ae70": "b3b4deddd90d50606bc56d346d4a2b8e",
".git/objects/ea/f89bfb0fff4bdc152c6fbb0b04fd0c34d4ff68": "9c9ce3fdf6ff968f73be1936a864ca7e",
".git/objects/ea/fb4859622b5ffa9b5b4be93883f121f14ff4e8": "5cabea9fd6651aedde046795c4afeb6f",
".git/objects/ec/17573e67aa165474e96e27cfac24b036f79bf6": "36128e48507cfb3ea44ba7eedec05b75",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/53162ecc9e96ce067b5e91f37c74326994e342": "bda4e98a82cd0f941f616706bb3e07f9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/37166a731586e2db45ad89ea9db8a0a28577fd": "4834a76ebcc9c63a11fe135844012a74",
".git/objects/f3/be6edc3c5d8da17b77d4f6e1fcb9818c4023df": "58a4497bfb8bb1dededb416d8d577d38",
".git/objects/f4/6e17ce2206569c3b6aeec9015828d691a18757": "885da34629d93fb6a7a3a773a9abf532",
".git/objects/fa/6d82ebf4130157cd014463ecb5c80a63f71d6c": "e3822677229a1f7da237a1633133ad9a",
".git/objects/fa/db6cba97bac98490ee0daac4f2a1d0f106c08b": "7ff63f3081a0d05cde57c8d2800cc3be",
".git/objects/fd/750922061953b47f76bd356a467c513878635e": "2993605c20d62ef2e243a99408494423",
".git/objects/fd/e1d163affbd0c1c94f4adf9f9e5bc295c589ae": "992a9712efeb8f568d9bbf91911b4b58",
".git/objects/ff/4d76e295fbfef864a745e23e0e9cffdf25db6e": "7ce5d1610e845cdaa44327073e312fb3",
".git/objects/ff/7462dcc4aa2386d11e7053d02885e2616cf289": "249a520eeda7218f846635e4dfb1cb71",
".git/refs/heads/gh-pages": "39ab412314192e6186085664ef5787ed",
".git/refs/remotes/origin/gh-pages": "39ab412314192e6186085664ef5787ed",
"assets/AssetManifest.bin": "f0e96f42c0ce888a6aba44e5cdbd9d42",
"assets/AssetManifest.bin.json": "98413b8ca813cc9d8304095939b2f6cf",
"assets/AssetManifest.json": "665075258c1e717da924a52bcb1b1adb",
"assets/assets/images/3.jpg": "957cfbe2fb7f33c0ad1db889aaab4cb4",
"assets/assets/images/b1.jpg": "605cc06e14ee6fd23dcaad0e7873c4f8",
"assets/assets/images/b2.jpg": "14823bdbe5d6a5538f6a9d4c1e835e93",
"assets/assets/images/b3.jpg": "372e7696a9f81db14747dc3843e5dcd4",
"assets/assets/images/b4.jpg": "f1e640ce39f80d23c4571ca86b3b6a52",
"assets/assets/images/b5.jpg": "9ab21f94c16c2758f7b337789e5e909c",
"assets/assets/images/b6.jpg": "09a0abd8b43c9759368a525c929bcb41",
"assets/assets/images/bansee.mp4": "d8b2308bd2591af3d61cd7165ea873f7",
"assets/assets/images/bansss1.jpg": "a6ba37cb07698c8bc3ab87aa8b3b4419",
"assets/assets/images/bansss2.jpg": "0aa0514e9575a7ea82c0c43bd14d05f4",
"assets/assets/images/bansss3.jpg": "87053f3bf338e8b8a8124ab611de590f",
"assets/assets/images/bansss4.jpg": "9b8e0aaacd5203c5597b8315e4616990",
"assets/assets/images/bansss5.jpg": "8da291814559f64a3631faba88d339a4",
"assets/assets/images/dar1.jpg": "fbd1f78e4e9c13e775e6e29d35428df6",
"assets/assets/images/dar2.jpg": "2f20d7f58dd2fbff0201ee5ae6d308ad",
"assets/assets/images/g1.jpg": "e703235776b10742ad3718a363341727",
"assets/assets/images/g2.jpg": "b51c4618eb84eae6f70cf04e1df73294",
"assets/assets/images/g4.jpg": "70cbe1b82401af85abbf48f5dc250815",
"assets/assets/images/g5.jpg": "8974613a92a94f0e3d95e25ef8032746",
"assets/assets/images/garden1.jpg": "b5fb3d8a7864b61ea9d9533bc8da8872",
"assets/assets/images/garden2.jpg": "c385c7004534e52eab4e2887cc99aaf4",
"assets/assets/images/garden3.jpg": "6f7b167fcc05217b18ee5f5246f6cb76",
"assets/assets/images/gardenvip.jpg": "826fc1a0c15970927f2c97180f96cb93",
"assets/assets/images/gardenvip2.jpg": "d12894fbcfb2694db0e87c419f815be7",
"assets/assets/images/gardenvip3.jpg": "0207985a805cf50ddd0080622bebad60",
"assets/assets/images/gardenvip4.jpg": "19cbe7bf2d2874e5b37c3286e6dc856e",
"assets/assets/images/grand1.jpg": "e5555b28b15e9b5fe5cd51cde5ffc85e",
"assets/assets/images/grand2.jpg": "b36536006365797160e345a41225b3e4",
"assets/assets/images/grandhotel.jpg": "c27d933e9cffbe8b0094925c36e70067",
"assets/assets/images/grandhotel1.jpg": "9292f6afae35b1b15aad440e872762ac",
"assets/assets/images/grandtibaprice.jpg": "fcb3862bb11d760c4915b1a7b607feeb",
"assets/assets/images/kamila.mp4": "834493fc683424c35118eda453cef4a1",
"assets/assets/images/m1.jpg": "4c8a05c5e2783290a1dbb28277043abf",
"assets/assets/images/m2.jpg": "060fcca42edc905d54d8291d00cee66e",
"assets/assets/images/oo.jpg": "04cb4603bf88c99bae050d51fca89053",
"assets/assets/images/orkeed.mp4": "112cafb005cad0b7e327cda73c416193",
"assets/assets/images/paradise.jpg": "9171d2c28855b04eb9839a9c78213ce2",
"assets/assets/images/paradise1.jpg": "7e265752c94e615b96fbbf6f6b19dbb8",
"assets/assets/images/paradise2.jpg": "cea57a0118aa9ea81bda2fd2ce889706",
"assets/assets/images/paradise3.jpg": "134eafe20abba79aaf0135579e66d59c",
"assets/assets/images/photosession.jpg": "222fd6a595bce1394a5e0fb9f466a415",
"assets/assets/images/photosession1.jpg": "c385c7004534e52eab4e2887cc99aaf4",
"assets/assets/images/pricee.jpg": "a5cc1ebedee5592007a3324f63814f0e",
"assets/assets/images/ramdan.png": "7e5ffaed9061f763a0933fc910d977cd",
"assets/assets/images/s1.jpg": "dc5942d607ccacee80428159c69ba4ce",
"assets/assets/images/s2.jpg": "951d152a72c1251b1f914399c57c86a4",
"assets/assets/images/s3.jpg": "aa04eb00ad0e38d74a97f292f2600f73",
"assets/assets/images/s4.jpg": "aca3738473620e72005d1b4a90181c94",
"assets/assets/images/s5.jpg": "90f52fa97555b56db4ac80bbb54355d1",
"assets/assets/images/s6.jpg": "2a02bed75abaa37c274042d3fdf0f326",
"assets/assets/images/s7.jpg": "ee269dfd6484f21759e5e46df2a92237",
"assets/assets/images/safina.jpg": "b8742e11a3fc40899436ba56720a8cb4",
"assets/assets/images/safina1.jpg": "6a44764978ff4911b09106c9190eb689",
"assets/assets/images/safina2.jpg": "97eb3b2c9ca7a996d59cfedbf07e1f05",
"assets/assets/images/subs.jpg": "27b5017fb3291f078028a3b5f8a29364",
"assets/assets/images/swimmingtibarose.jpg": "39d6ec23aa92ccc96380843f6c7b53a8",
"assets/assets/images/swimmingtibarose1.jpg": "be8dae7af7cdf6fc8a09864bbda01ca0",
"assets/assets/images/t1.jpg": "eff44bc46227e95f97057c5b91f54972",
"assets/assets/images/t2.jpg": "eff44bc46227e95f97057c5b91f54972",
"assets/assets/images/t3.jpg": "2d12d00063aff4a77e469fe4992a7420",
"assets/assets/images/take.jpg": "c88db1cdfca90e1bd9d87c455eaf5ba4",
"assets/assets/images/take1.jpg": "8c04a01a26b7ce7246e54845e06dea2d",
"assets/assets/images/take2.jpg": "f22b3160d2e127eebc033efbaad72ec3",
"assets/assets/images/take3.jpg": "1e5af7c8c7b462f7bcf43817482eb538",
"assets/assets/images/tiba1.jpg": "32aa79d9c7d01c7f3ff31c4ef5e344ae",
"assets/assets/images/tiba2.jpg": "b36536006365797160e345a41225b3e4",
"assets/assets/images/tiba3.jpg": "16a8666e65b8e1c9bc05b16dcedd1b56",
"assets/assets/images/tiba4.jpg": "64e487619f044843664f772f2ae84f45",
"assets/assets/images/tiba5.jpg": "1ba07872fc2d8e9e2458bc82afec88fd",
"assets/assets/images/tiba6.jpg": "6f7b167fcc05217b18ee5f5246f6cb76",
"assets/assets/images/tibarose1.jpg": "b323967d34d5856269310857089641bd",
"assets/assets/images/tibarose10.jpg": "ce67f3706ae82f85db26de8844abd9d1",
"assets/assets/images/tibarose11.jpg": "8bca9438c659820350dbecf392a5f9cf",
"assets/assets/images/tibarose2.jpg": "eb3f8e4d0686ebdd4042de9496a777bf",
"assets/assets/images/tibarose3.jpg": "222fd6a595bce1394a5e0fb9f466a415",
"assets/assets/images/tibarose4.jpg": "6f7b167fcc05217b18ee5f5246f6cb76",
"assets/assets/images/tibarose5.jpg": "cd433608877572cd32f57638e493447d",
"assets/assets/images/tibarose6.jpg": "2dfde197d612a2e0a08aebf62a77b388",
"assets/assets/images/tibarose7.jpg": "11de3fc547b40cf279d17540cb051cb1",
"assets/assets/images/tibarose8.jpg": "4f953436627f13af1c7f2983d5f41459",
"assets/assets/images/tibarose9.jpg": "72ab261166bed9b60a5fdc1d0ec58403",
"assets/assets/images/tibaroseprice.jpg": "ee7c48900f97d37fd509140f7a1d88ab",
"assets/assets/images/toleeb.mp4": "f686cbd6f097e09ead44bdcd294380f2",
"assets/assets/images/villarose.mp4": "0f7c7ca112ae17bf7a15fb78e5961505",
"assets/assets/images/vippp1.jpg": "b75b99964e43702a8cbb3c932b562cb4",
"assets/assets/images/vippp2.jpg": "ab6bee4f3e1ac6423be071e12fa2b90e",
"assets/assets/images/vippp3.jpg": "238f9211ca8e8714afcdef171835cffd",
"assets/assets/images/vippp4.jpg": "a8a87c7b00bf028f23354a930c6e1b2a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b9c7f8a2240b7a51c5b942fbc5505e67",
"assets/NOTICES": "0f6661ea61709ff0a97ad603e40c2824",
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
"flutter_bootstrap.js": "b7a727e1f5a1ae086b4dfe7cf6a3691e",
"icons/Icon-192.png": "28d419343b871cce35f76793bf7e5a2b",
"icons/Icon-512.png": "446c4be429da932d9b16e7ba0ef529ef",
"icons/Icon-maskable-192.png": "28d419343b871cce35f76793bf7e5a2b",
"icons/Icon-maskable-512.png": "446c4be429da932d9b16e7ba0ef529ef",
"index.html": "1b607bbe585c43aa8689713e68e46e4a",
"/": "1b607bbe585c43aa8689713e68e46e4a",
"main.dart.js": "d536f33c1fb91ed3952b54dbe5234f50",
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
