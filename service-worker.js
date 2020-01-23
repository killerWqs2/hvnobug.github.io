/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/about/index.html","4b8a6108fa459de4dbc2aedeebf4ed23"],["/album/2/index.html","4b6896b9f9b4d9cc23f9590c4826dc58"],["/album/3/index.html","a286879bc358b4247777603e7d3942d2"],["/album/4/index.html","18e3a6f4784417f8b5f23c177a1ea73e"],["/album/5/index.html","134aae511a76ef8ae7cbe55a86d2067d"],["/album/6/index.html","a18692ff0b478d2b309923ecec1a6917"],["/album/aikatsu/2/index.html","4228f7e7a850cb85bfe34fd19162e073"],["/album/aikatsu/3/index.html","695bf3cbcb8644049baed1a23e4b6975"],["/album/aikatsu/index.html","a69d1038ea0b3a05c50d6a5e09bb5c50"],["/album/akame-ga-kill/2/index.html","cf1c2545cd72a1e4be39b3d1f6d9fbb5"],["/album/akame-ga-kill/index.html","13b76d67794d562a9d80e7eafca70da7"],["/album/angel/2/index.html","c8df204a0056b3d29e9ed4db5db267d2"],["/album/angel/index.html","98b7bc0c99d8dbe9d7c650e266cea7a6"],["/album/anonym/index.html","720c3047485ce0f96f5245af93d8602c"],["/album/aquarian-age/index.html","8c1a364285357441fba91177cfbdb785"],["/album/arknights/2/index.html","1f410b7d1658e83d67eb33a91aedf0ee"],["/album/arknights/index.html","0969f1d071c70d5592750904aaddac49"],["/album/attack-on-titan/2/index.html","68272fed566aeecf6899a570bb67e49c"],["/album/attack-on-titan/3/index.html","099793ad88575580bb1e9dacd761fa25"],["/album/attack-on-titan/4/index.html","96b877be94379260d3aba13ae94c2248"],["/album/attack-on-titan/index.html","6073ad2a0acbf84a5579d335f86094ad"],["/album/binary/index.html","24191460b1556d1a0257e71dc86b61ab"],["/album/black-and-white-2/index.html","f1c2c9eecd1bedb2fb0c296031af6f22"],["/album/black-rock-shooter/2/index.html","12b658fe3bf78087c7387b59d1f2aea9"],["/album/black-rock-shooter/3/index.html","21a13210146cdd1f7a1f9abfd565f1b5"],["/album/black-rock-shooter/4/index.html","59abe8e0d38acfab1a88867953b7ee99"],["/album/black-rock-shooter/5/index.html","e6ea1b3aea4e49476cd25974056d613f"],["/album/black-rock-shooter/index.html","f65cc8cefff7769b569d6da1c5905de7"],["/album/bleach/2/index.html","876118d1abd02e4e348e8a5c73dd8829"],["/album/bleach/3/index.html","730f6ecf9593e35bff67e0494595b11a"],["/album/bleach/index.html","dc2afd348a46edd9f53bc4aa90541401"],["/album/boruto/2/index.html","f2453ea4b0108469d2e603c3ad53e3fb"],["/album/boruto/3/index.html","c79d959d6a051cf10e50ad6a5600105b"],["/album/boruto/4/index.html","15173f09219019199ba261cc249dd9f7"],["/album/boruto/5/index.html","15194846618bd21c1fa772b2ef5edb9f"],["/album/boruto/6/index.html","e774dab994161e01e41f6d906f61e295"],["/album/boruto/7/index.html","2170eadec38a917b5f1df8249f87a814"],["/album/boruto/8/index.html","f8457680f0ee20abad25edc276dc1e28"],["/album/boruto/index.html","1adadb616073114de5955d82dbcf1f13"],["/album/circuit/2/index.html","bd4f7ed91e66b129ffffd8ba98e51877"],["/album/circuit/index.html","5c685312ceea28c3ddfcb8202707119f"],["/album/crossover/2/index.html","27f2d64b2d8434c0f7eae2dfb2655019"],["/album/crossover/3/index.html","2cf7155818e3bf46b650e51c920ab1ae"],["/album/crossover/4/index.html","68b79e121876bf662f9fb419dc4620fb"],["/album/crossover/5/index.html","ca6ffe7e05fa548248990db2797ed1c9"],["/album/crossover/index.html","3ba259d9302d014a6b2c9bffe6612293"],["/album/darling-in-the-franXX/2/index.html","8e6ee9e9d211f3289edc51ff4b9e3805"],["/album/darling-in-the-franXX/3/index.html","519da09f1cfa882c7b548d621a636014"],["/album/darling-in-the-franXX/4/index.html","d64549941950a822ea9c078349d3eaa5"],["/album/darling-in-the-franXX/5/index.html","a26d03ab637f49862ea88eba01644467"],["/album/darling-in-the-franXX/6/index.html","91db326559f695093976e9034391e354"],["/album/darling-in-the-franXX/7/index.html","c86e99b7c6b8b9ba81c17d1153cf02ed"],["/album/darling-in-the-franXX/8/index.html","340397b3fefaa0fb5da2183bcf5a6f2e"],["/album/darling-in-the-franXX/index.html","41a411515081e7934c97dea540671125"],["/album/date-a-live/10/index.html","7e9432a8fe1100ee00f8ffed820a78dc"],["/album/date-a-live/11/index.html","c54809053aa8189adf0c539ace64e85d"],["/album/date-a-live/12/index.html","322e44b278d0ec0baca84a55f0345f1d"],["/album/date-a-live/2/index.html","4937841448a927b41f931e0c5e40fe10"],["/album/date-a-live/3/index.html","bedb07fa6921ae11350d4baf7be077ac"],["/album/date-a-live/4/index.html","004dff17179b28d27f74953ef538476a"],["/album/date-a-live/5/index.html","7bf8d831244de5810cec286af6817256"],["/album/date-a-live/6/index.html","b51dec316b3b0009d72433bcd0c5935e"],["/album/date-a-live/7/index.html","7f213e5110f5b0478f630b2fc149757a"],["/album/date-a-live/8/index.html","a7995fe94bde82482bd83cf790efbc67"],["/album/date-a-live/9/index.html","6726fbf78afad27a5497231a6dcd853e"],["/album/date-a-live/index.html","f3f68d8fd536e1383940aba5f2c8ac7d"],["/album/demon-slayer-kimetsu-no-yaiba/2/index.html","e66f17f5aefe61b652d25f2a078bab10"],["/album/demon-slayer-kimetsu-no-yaiba/3/index.html","2f6e15d7028f238cc1d8d9ff313842fd"],["/album/demon-slayer-kimetsu-no-yaiba/4/index.html","dcba64ea21b63510f774365e57cf65f5"],["/album/demon-slayer-kimetsu-no-yaiba/5/index.html","c0f7cdcbd8b9c474c6ae648a4d6a3dc0"],["/album/demon-slayer-kimetsu-no-yaiba/index.html","ef8e36f53f623a2211f9c851ecfd48b9"],["/album/dragon-ball-gif/2/index.html","23ef260ceec6f65c73c177f22058248d"],["/album/dragon-ball-gif/3/index.html","ebc44396e66bf81934b3c6d649aed2f1"],["/album/dragon-ball-gif/index.html","c68c7c004292772133e4080c45ca0f8a"],["/album/dragon-ball/2/index.html","912cf39a43cf89c669cacb03298ffb5d"],["/album/dragon-ball/index.html","360b7b244d78949e168f48a91022e358"],["/album/dungeon-fighter-online/index.html","b12990788b20bf8b9be27fac8b0c464d"],["/album/edens-zero/2/index.html","6a7eb53c94929b6506e5d7974dbe0ec4"],["/album/edens-zero/index.html","dd9c66a3676854ae0b502c57f65199cc"],["/album/fate-grand-order/10/index.html","8b38a7eaab40502d876ef22d988f367c"],["/album/fate-grand-order/11/index.html","079be695bb44bf42c3d54da586775c70"],["/album/fate-grand-order/12/index.html","5ccca056db84cc4c41f8bdf5bda2c44a"],["/album/fate-grand-order/13/index.html","2d9d3ab292b921edcc3c47e6b9c8f094"],["/album/fate-grand-order/14/index.html","143c5b0bd9761b4c75d2c352c223f056"],["/album/fate-grand-order/15/index.html","48bf7ea5dd2782d6b0ba61bf1e7873b3"],["/album/fate-grand-order/16/index.html","440d0561c090b2a5f6109aa598f9198d"],["/album/fate-grand-order/2/index.html","cc89d703de24c99669babfe5f068c4fb"],["/album/fate-grand-order/3/index.html","ac0f9d4ecc984557eb3fc2fa911a8a8e"],["/album/fate-grand-order/4/index.html","89adee83da78cd7515cc17721983bc0c"],["/album/fate-grand-order/5/index.html","7b6c80c68bcd49912e1c6fe43d5abc6c"],["/album/fate-grand-order/6/index.html","5e24842686b190b7196efa16835cf41b"],["/album/fate-grand-order/7/index.html","36c60ec0237d430ad14fb12595b52b65"],["/album/fate-grand-order/8/index.html","a5d852497a22653420d4b3b87983ca41"],["/album/fate-grand-order/9/index.html","f6d72e0f2d75d089267f0f9aec146092"],["/album/fate-grand-order/index.html","355c8a970dc8dc3f7427d6c65bc23662"],["/album/fire-emblem-heroes/2/index.html","4bac1c876d1de2aa039b6a28a682f715"],["/album/fire-emblem-heroes/index.html","1e814d64b9dc53448280f84f237ab4f3"],["/album/gintama/2/index.html","3334d92486c5b7f92e85477dd2d3656d"],["/album/gintama/3/index.html","6ebfe5cb67b790040f230ba0a60fec31"],["/album/gintama/4/index.html","19e4e031cc7a269f718ccfda1cce34be"],["/album/gintama/index.html","1b3eb7e3e611eb01b7ebbcf0d6594eef"],["/album/girl/10/index.html","10292668c422f9105e2af12e359585b2"],["/album/girl/11/index.html","da8f206839fcf35ea90c2222c87694af"],["/album/girl/2/index.html","ef3498d37e25570ee77f9c4f51495edd"],["/album/girl/3/index.html","01e24fcdcfb3be176f0823f63ca658b6"],["/album/girl/4/index.html","0bbb6ed1f991a8b78e53bf6d0cd0551d"],["/album/girl/5/index.html","d097eb8a0e7a76aeb58072d35771bdf8"],["/album/girl/6/index.html","7d39274b6a2a0df18782419a9f7126c5"],["/album/girl/7/index.html","e181337e6967aaf3509efbbdf769570a"],["/album/girl/8/index.html","25ddc877748c72df0b169a7b9347f667"],["/album/girl/9/index.html","2828809d34aab3a7d3704fb5d8885711"],["/album/girl/index.html","535587f47af51b0b68165d5301707e6e"],["/album/granblue-fantasy/2/index.html","e1770f5d0d457301ae6c3bc34c92fc5b"],["/album/granblue-fantasy/3/index.html","79a12430cf841737c106fb5bdbee5ea1"],["/album/granblue-fantasy/4/index.html","86b3359aa24841d5d4c0f32c98ccb5d3"],["/album/granblue-fantasy/index.html","598ee4c9b4f59d87fd07bcf7f1c89a90"],["/album/hacker/index.html","3d82b492b791bf47473c8a173147bc0f"],["/album/hunter-x-hunter/2/index.html","4b0de669b81850ecbbe593e13ab6360d"],["/album/hunter-x-hunter/index.html","618cb8e46ef872c20c65cc5f21149d39"],["/album/index.html","6f2645a7e4aecc67b52e17c08bd8840e"],["/album/jojo-de-bizarre-adventure/2/index.html","67ddcb3ad3503dc584f25eaf2699c9b9"],["/album/jojo-de-bizarre-adventure/3/index.html","453ab5112547c0de8eb47057c7b919d4"],["/album/jojo-de-bizarre-adventure/index.html","e90c02f96a2ad06f5a28975a657e379a"],["/album/kagerou-project/2/index.html","db462613e259a86ee1ddece33bd60133"],["/album/kagerou-project/3/index.html","fa547f6de6e3bf4750fda287de4cf807"],["/album/kagerou-project/index.html","a3e2ddfe54da75d298772f0b81497c6e"],["/album/kill-la-kill/2/index.html","14d6266356a2b5c6e441bcec6295f307"],["/album/kill-la-kill/3/index.html","1364031e99be05bde57f200c3076c1d8"],["/album/kill-la-kill/4/index.html","b4ecc797520df7babf1a5f25608c37ef"],["/album/kill-la-kill/5/index.html","f14d777f5025feaf3471ffe560d2f4a8"],["/album/kill-la-kill/6/index.html","e393ff5e07c72c57a55fc260ecf4ba0f"],["/album/kill-la-kill/index.html","088827075b463d7f37f4ec632d3e38a7"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/2/index.html","1799e4db198e333420e7ed4ddb85b918"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/3/index.html","d55b7272de991947728565856f06b54a"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/4/index.html","d6b9f24c0520bda6d45cde972392c0d6"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/5/index.html","0c703bbe82d87046092c80935814f346"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/6/index.html","110f2ba945636b43bc50be159dea88de"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/7/index.html","ea53750d1bf7e3324de6e064339d5605"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/8/index.html","47301e9b016635d4acba94d3f26ee02f"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/index.html","8eee7d979cf06c3bbb7b266defd0c1a8"],["/album/league-of-legends/2/index.html","92e336c8400cb2e2651875e28a9a148f"],["/album/league-of-legends/3/index.html","d8c4e011f670acf45bc0551502a46ae5"],["/album/league-of-legends/4/index.html","6eb9105bfc818416f838470bee7c455c"],["/album/league-of-legends/index.html","44b3616f3f679c8065ca99784ffbfe74"],["/album/linux/2/index.html","aad0f5a7f9dc934b855610420c5b378d"],["/album/linux/index.html","03ecdb5ae4fb01353b3dd8ca9790af05"],["/album/loading/index.html","43916ca58a62976d5d3bae126b6ad026"],["/album/mac/2/index.html","1396f8d1ad40ae9f782e431df474ce05"],["/album/mac/3/index.html","686fb42924b18e1826fb754a2f3e3f56"],["/album/mac/index.html","286ab9d3b046af69ea981cde42a206d1"],["/album/mirai-nikki/2/index.html","60278a14d241518b1378924a57b9e91b"],["/album/mirai-nikki/index.html","f70a638377d01c2bdd0a3bf470c988fc"],["/album/my-hero-academia/2/index.html","d79c0c360a1e9c3b54a868e05eb9f876"],["/album/my-hero-academia/3/index.html","27fbba9da9557d353cb486bc56cbb06e"],["/album/my-hero-academia/4/index.html","41762311a11d751d6c00bec6aa580098"],["/album/my-hero-academia/5/index.html","8896dd4e94d82366f4983089c6291cc9"],["/album/my-hero-academia/6/index.html","82615bd8dbf337afc2f2f81c866b8c03"],["/album/my-hero-academia/7/index.html","073e934ef87788c345203190334fe81f"],["/album/my-hero-academia/index.html","3535dbe4f4d7d7844f47f96febbcc798"],["/album/my-youth-romantic-comedy-is-wrong/2/index.html","c76c7f7a9fd9e7af04390f2678970273"],["/album/my-youth-romantic-comedy-is-wrong/index.html","c126e9cac3d8490acaa96e9201477a1b"],["/album/naruto/2/index.html","92c2e76967cb76358063e5a6b2f1d93f"],["/album/naruto/3/index.html","939e55d8f96d3c0d1c8fb6c1a7cd26aa"],["/album/naruto/4/index.html","69040fb05a86e612528bde962383c082"],["/album/naruto/5/index.html","460aa95749cf1c75dc6f8949a07ce3bf"],["/album/naruto/6/index.html","fc915984022bb839e9a1976c4f443fb3"],["/album/naruto/index.html","f25fd70709f3523a9697616962662b59"],["/album/neon-genesis-evangelion/2/index.html","36c8385dbff5708e4e6dfa56e886bcfb"],["/album/neon-genesis-evangelion/3/index.html","c1fba45a98496d9e42fcc628d13cc904"],["/album/neon-genesis-evangelion/index.html","6cfb3caeb9e00f0e699eada076f18705"],["/album/no-game-no-life/2/index.html","5ecd225f6a506eea1d9f05b3903ff04b"],["/album/no-game-no-life/3/index.html","fb17cf8227784ecfe59d119a2da2fa50"],["/album/no-game-no-life/4/index.html","6c2eca29580bb7eb9a786b1d6dcf1f9a"],["/album/no-game-no-life/index.html","db3420f1f276440b0b661dc77ffb96ce"],["/album/noragami/2/index.html","8a1abe0e1b07d7526a2868033a17a5bf"],["/album/noragami/index.html","bb9a6ad0230a2462274a226b6706b7b9"],["/album/one-piece/2/index.html","03b0a2ec839573d24abe734d48f4d0be"],["/album/one-piece/3/index.html","c296870715d66784f4d6cd1666c96916"],["/album/one-piece/index.html","606a8fbca039121f3932d9a9f9507aee"],["/album/original-anime/2/index.html","ed324acf30260b1f8fa6c53b64911752"],["/album/original-anime/3/index.html","7d7e70759df70050a6ef36c8f47079e2"],["/album/original-anime/4/index.html","0e34ec1586a4faa9dfc29f84661f5d5b"],["/album/original-anime/5/index.html","c41f35dec23439bd81d840540e110c6e"],["/album/original-anime/6/index.html","b7e383c1f87ef1856fefa5ddeffa7feb"],["/album/original-anime/7/index.html","354625f7832ff40c8730cb56d7cdd243"],["/album/original-anime/8/index.html","fa36db1571a7f429367e4ce5ba8420b9"],["/album/original-anime/index.html","f0aac227c3196249678f1aa819ddb665"],["/album/overlord/2/index.html","fab704c24f501e2a4b50088f3891f90e"],["/album/overlord/index.html","402409a390b373d0675b48449cf366d6"],["/album/overwatch/2/index.html","ef23f1ec2ea2355bd6f7620769664fd1"],["/album/overwatch/3/index.html","3eca36f1dbc8b33b88592223e1c66681"],["/album/overwatch/4/index.html","7dca902b7e3ddb308127d89440c53276"],["/album/overwatch/index.html","23bad49d23d576f0a64186c4eed1bd83"],["/album/panty-stocking-with-garterbelt/index.html","5e854f261dbcf904e9e501ab5042bd91"],["/album/persona-5/2/index.html","59cfb38f4b52e4cc51035dd329c609d4"],["/album/persona-5/3/index.html","e55a01c41cf9ffbb053c98509b2c922b"],["/album/persona-5/index.html","e5cd2674744296d64f3eac94b7f05e27"],["/album/physics-chemistry/index.html","34aa4226d0a69dd70532e2b0f3b2b207"],["/album/programme/2/index.html","228f2384d2fd819538f73eb36c8a05ed"],["/album/programme/index.html","2fcf7284f4e421b4bf31676d69cf610a"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/2/index.html","a8ffbcb1621119231c39bba9ea658600"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/3/index.html","dddd5ed183972ae6e727e5ce6922080a"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/index.html","71288cad25e90bc25403231f8f42d43d"],["/album/rosario+vampire/2/index.html","2f5c8353be702f0e43b32d4e307597f3"],["/album/rosario+vampire/index.html","71fa2304d88db5a11b260062bfec05de"],["/album/shakugan-no-shana/2/index.html","bad436c17f38c40c83d4280723ca7258"],["/album/shakugan-no-shana/3/index.html","917c63471897c9accc2e7201344eba00"],["/album/shakugan-no-shana/4/index.html","222513c56b68a601edcc717f5a0daa2e"],["/album/shakugan-no-shana/index.html","a1d017a5a2d3cd0b7e6743c726c40a09"],["/album/solo-leveling/index.html","48edfd3ca88932ec739cd83480f226c7"],["/album/sun-and-moon-wallpapers/index.html","efac9483185a88f9095843e952eaf576"],["/album/sword-and-shield/index.html","e37c911daf79a2bbe6a41a50e2b82fae"],["/album/sword-art-online/2/index.html","cd2610046444b3af52cbdbbbd6e8a708"],["/album/sword-art-online/3/index.html","afa321b305e3795d2c5f83e64abba848"],["/album/sword-art-online/4/index.html","26cc21783f72230f9e9fefe969e1b908"],["/album/sword-art-online/index.html","b8122740fb2e164a6ece0ddd1c2073ad"],["/album/that-time-i-got-reincarnated-as-a-slime/2/index.html","cfba1efbf8ac712bd760ff746fcd83b6"],["/album/that-time-i-got-reincarnated-as-a-slime/3/index.html","f5fe3cff0595b5b6c1bfeb0387b193c7"],["/album/that-time-i-got-reincarnated-as-a-slime/index.html","f2f0b0cf1f4d5dba07530d7e622b526c"],["/album/the-seven-deadly-sins/2/index.html","43bb9f89ec1b196d6df20577b597487a"],["/album/the-seven-deadly-sins/3/index.html","12ff6d97e8c26ed4a3ffb5e4678665bc"],["/album/the-seven-deadly-sins/4/index.html","794926b0cd1c2024fc3848709ffbb15c"],["/album/the-seven-deadly-sins/5/index.html","042035b1cc7299bbded1ac76efcb73ec"],["/album/the-seven-deadly-sins/index.html","2cdf1437760ac077f1f05ab75cb61d39"],["/album/tokyo-ghoul/2/index.html","74fa44800a94040c7d02627147dcc302"],["/album/tokyo-ghoul/3/index.html","e978950e245236d83b988da7646f69db"],["/album/tokyo-ghoul/4/index.html","d80e094d5665908ed568a0d24c045d42"],["/album/tokyo-ghoul/5/index.html","29a12b21c823865f953bdb19cbb03a74"],["/album/tokyo-ghoul/6/index.html","a76be770e66352a0a30a3c8714012126"],["/album/tokyo-ghoul/7/index.html","730cd85f1e34ec63e65ed8c8aac40e54"],["/album/tokyo-ghoul/index.html","0d7d33001c8cf39bb5e2670c097e20a1"],["/album/vocaloid/2/index.html","06a0a1d905464cf8902327f2db1f4d6f"],["/album/vocaloid/3/index.html","87d77a01e03c382a6337826c05384c54"],["/album/vocaloid/4/index.html","f0b07d20e8a5b3e5a9ebebea86cd013a"],["/album/vocaloid/5/index.html","b8163f2ce5e2bddd2e7c010dae39bcac"],["/album/vocaloid/index.html","39e6be0b65a81542fe75de392031b5d9"],["/album/your-lie-in-april/2/index.html","c766964d9cf52356beaf0fb7243d4c1f"],["/album/your-lie-in-april/3/index.html","44adb1b9892e88f0713f68e3df3463a9"],["/album/your-lie-in-april/index.html","8fa8dbb3146bf851f226d160a49c41d5"],["/album/your-name/10/index.html","c76c523e5747e9b1dcbdcd76e5549571"],["/album/your-name/2/index.html","62e93726e03d5d344ebd5759f16e69ec"],["/album/your-name/3/index.html","164d2b4eef95347616ff78ee959d6e28"],["/album/your-name/4/index.html","97dcb6c99c146c9334fc0ed5f9270a6d"],["/album/your-name/5/index.html","5659731927e2fd407bb96e7f3fc5f98b"],["/album/your-name/6/index.html","5a6255ac84320fb87ec7a951ae14a190"],["/album/your-name/7/index.html","b452414c883603c69679ae8b32e28579"],["/album/your-name/8/index.html","ced4af691fafa7f54bb3371f4a4a033f"],["/album/your-name/9/index.html","cf28fd7c85ca05fe2aa5a4052d6c6de6"],["/album/your-name/index.html","204391845ea284a4ea9f90b82344a4bc"],["/album/yuuki-yuuna-wa-yuusha-de-aru/2/index.html","a85ff3a5c9127fe677c9928a711f2563"],["/album/yuuki-yuuna-wa-yuusha-de-aru/3/index.html","08cbd43c76baedf32b36cf95105bc366"],["/album/yuuki-yuuna-wa-yuusha-de-aru/index.html","e39bef703a9946d17bc82e911d7af1f6"],["/album/zero-kara-hajimeru-isekai-seikatsu/2/index.html","02471b17dd1101992f65fedc08107842"],["/album/zero-kara-hajimeru-isekai-seikatsu/3/index.html","9d767be35afd9181c2e054c92844ba52"],["/album/zero-kara-hajimeru-isekai-seikatsu/index.html","8fa1a7f3ec31d4fb762125bd20eba763"],["/archives/2019/06/index.html","217539e57b5dfcbe4c5cd57d090276c3"],["/archives/2019/09/index.html","8d4e2defc25f70642a9a9e00215f4c1e"],["/archives/2019/10/index.html","75966d8c4817c530ceaaef4194c1dede"],["/archives/2019/12/index.html","bad3a29ceab14e9c8b331d93b41c5504"],["/archives/2019/12/page/2/index.html","146f852214e09d34ada4459bc2456ed7"],["/archives/2019/index.html","8a756815727e86effaa21d887e318115"],["/archives/2019/page/2/index.html","dc954abe1af4d8d82b77299d1f11819c"],["/archives/2019/page/3/index.html","d20ebe53081c5262ccfd4a85bfe15655"],["/archives/2020/01/index.html","39ea38268c90840abb3d3dde3dad4d86"],["/archives/2020/index.html","e8acdbfbf33443ea8a350573253cb292"],["/archives/index.html","61e5c93676767917db8107ffde836b54"],["/archives/page/2/index.html","37befde42f69bfaa7e9c7968b5131ea1"],["/archives/page/3/index.html","8eb720ed77f811e57269337f79edb653"],["/archives/page/4/index.html","9d189cf945172bcdb4caa39fecdc6755"],["/assets/aplayer.js","2ea27b52e269cb2eec896ef21f4701bc"],["/assets/lazyload-image.js","d927cb172bc4ae7e8af2e18f9a56fa52"],["/assets/loading-page.css","88cafd7cd6e60366949b1e18604c85fa"],["/assets/loading-page.js","8fa5719e75b7bb8027632843a096e4f3"],["/books/index.html","8d635a451a777adcefe6bd2b0b858f7d"],["/categories/docker/index.html","ef9b13326ee09bcb30388ed940a988de"],["/categories/github/index.html","7e956804d3a6fb624756773f956afc8f"],["/categories/hexo/index.html","88b6cc647019e7fa71da124f3a52f3fd"],["/categories/index.html","2004551065211a4bd4df796d4dc4d58f"],["/categories/java/index.html","b3e4bb46a138f3c733f549cbf56aaad0"],["/categories/javascript/index.html","980c78b2ea70ff27fe7ac55f3d1526a6"],["/categories/jdk源码/index.html","540a714480b28c692998359cd1877161"],["/categories/jdk源码/java/index.html","255928319bf0a48e2c47e60b602fb247"],["/categories/linux/index.html","7001f151907963b5cec441d911374171"],["/categories/mac/index.html","8a49c83376e36159f27c214e6e5158ff"],["/categories/nginx/index.html","88d0ae4aac92ec66a929e02a006a8491"],["/categories/other/index.html","72ee0a19ed6a140b8c071d81d7b9b79f"],["/categories/python/index.html","c450a223404a9d745de71858e0a08a4b"],["/categories/vuepress/index.html","c7695468c734a16f09dbe960334d1878"],["/categories/算法/index.html","8bdb74d1763b89e02b91854f113e8219"],["/categories/算法/java/index.html","36ffce6e63e74bf687d3f80c5be367e1"],["/categories/算法/数据结构/index.html","6ea6bc39c8a4d06dc72907a79c225fc2"],["/categories/算法/数据结构/java/index.html","64029cc46197ebfc54051b6e68737ab6"],["/css/index.css","ce68eec7a62367d898e16c21b182620a"],["/css/var.css","7f3dc11061a08bd40c67b62b76f44de8"],["/friends/index.html","d10ef990d3f1004f6b1276efe98382f1"],["/games/index.html","710790c4cb364fbc23be577096d8bd52"],["/go.html","4bd8d315c2bc41d0ce799fd4df4eca02"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","d910db0ad31e2afa494e6242311f6576"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","294deddd00f2ef714f15622cd3179def"],["/js/utils.js","6d10aec709df2aad14066b13074280a8"],["/movies/index.html","750b2d90408761de7ad8977111dc3d5e"],["/page/2/index.html","51c487635d1cd3ff37ebf652228adbd7"],["/page/3/index.html","8c231e6433efb70b1ce0eed65b473fe6"],["/page/4/index.html","d452eb218902d462f3f07561949b088d"],["/page/5/index.html","ee4e4b57a338a52392409fc57ec3b8bb"],["/post/12306-open-source.html","852cef0d106d698563c0005ae49e50b8"],["/post/about-document-encrypt.html","6de17305d774fcac781aada22d212b11"],["/post/awesome-java-github-project.html","fbc0993b37b29c228089f57975dee22a"],["/post/awesome-java-github-tool.html","8cff24474a80e880c3367059bbc53486"],["/post/bloom-filter-java.html","6c400b5a1031fde0bb0a36f3e0d67f17"],["/post/docker-remote-access.html","3ea3a26b40d04fcf7f8663fc72ab26cd"],["/post/es6-array.html","8c51984bea64bc64abafbaea44143c85"],["/post/es6-promise.html","0759cadd7f9bdc61a4cf466a3ad971e6"],["/post/github-accelerate.html","3fafda70c5565afb7ba5dc497550ef05"],["/post/github-learning.html","93b61f09c2695b96d502f3db03b0ead4"],["/post/heap-sort.html","414f1c5b224a9c55a6556b9453fc914d"],["/post/hexo-free.html","c7fc2795b73bef46b4fc900a2b26c8eb"],["/post/hexo-loading-page.html","e4564fca3f7d7f52ed8e836cb04f2a57"],["/post/hexo-no-referrer.html","1bb4a8d67806a4dae88524216815365c"],["/post/hexo-optimize.html","f73f2ea22fa0454d3210673de56bd486"],["/post/how-interesting-project-thefuck.html","c51e95a39f59889932034a0e694cc142"],["/post/java-reflect-type.html","f7d0039f4e0d8efe0e8b049d570fda24"],["/post/jdk-source-arraylist.html","be943890d6a9a06bf5e73e14ef277f93"],["/post/jdk-source-hashmap.html","376e37e5619021d1ad2dde69a51e8eb5"],["/post/jdk-source-hashset.html","7ea29567a8e0199504714573044b7cf0"],["/post/jdk-source-linkedlist.html","cb97a9ffeb68c62cacc4dc460a6df258"],["/post/jdk-source-stringbuilder.html","c6e44deed605ad3ea663d7f42f394357"],["/post/lru-java.html","6011c3f60d56bcb9558114a87931fc0b"],["/post/mac-terminal-iterm2.html","981163badfc4338e0f39100b9944ccc6"],["/post/nginx-variable.html","a9e4806c3c13246e5e29ef5cd44ac77e"],["/post/opencv-opensource.html","13af864eb839181de0d03354a029ed58"],["/post/spring-boot-email.html","3b28663c6a4bbed29797908f92914994"],["/post/spring-boot-jpa-multiple-datasource.html","a480052c84cbec1744c43fed9b19c760"],["/post/spring-boot-quartz.html","0e4aaec5f2f582e29d03ade704668425"],["/post/spring-boot-springapplication.html","2a5e984cf30794c37e82a7b0dfc2cbdc"],["/post/spring-security-redirect.html","ee7026e03a1895948dfecd2a92979e61"],["/post/ubuntu-nginx-certbot.html","9e37b43331b4cfff3c42b916783aee53"],["/post/vuepress-theme-dew.html","4840243847ecb9c20661ad5a99fd017b"],["/pwa/16.png","39dc06014f6226ef8fe0de4c2730c66b"],["/pwa/32.png","6c2412cdc9f38d6a87d1c99f447b1209"],["/pwa/apple-touch-icon.png","1a603ff1663748a6998fbe5a5f1e1857"],["/pwa/safari-pinned-tab.svg","d4f899581da7961a3c43f595637fd6c1"],["/tags/docker/index.html","730d457aa244021b9d27a7070f4607f6"],["/tags/druid/index.html","e0725e6aa984c656b10680a6e643b1c1"],["/tags/encrypt/index.html","0c5dbfc7a51e6b0065c56aa4bfe192f4"],["/tags/es6/index.html","f11ec7e220163b02784291ad44a6a8ca"],["/tags/github/index.html","edfdb9629eabcb2bd40c8f5f8e129bce"],["/tags/hexo/index.html","51223d0f0cf43cddbd2ad11496627cbb"],["/tags/https/index.html","cd31b6eba0689ad0ebaa02e1209ba451"],["/tags/index.html","b16fdd938ff1ea56d438511ec066c86e"],["/tags/java/index.html","5fb164803cbd3ca6d7c4af3712e898fa"],["/tags/java/page/2/index.html","33b197b6f1b5dc3f42892778c0c4b166"],["/tags/javascript/index.html","0c4196faca24c6ef6d501072f6880ed8"],["/tags/jdk源码/index.html","a2341bbaa6e3b4913e4e9ddb3406c8c3"],["/tags/js/index.html","1bd1a28fe0009d40bbfc7d6e37b341bf"],["/tags/mac/index.html","d1059f8bc2f117063e46accd1a36b17d"],["/tags/nginx/index.html","0fc060a2eeb4c2e43b76f0e20bfa28fa"],["/tags/opencv/index.html","210a1f3ae4227c121a9cfe89fef59305"],["/tags/python/index.html","8281e1da5258404502fc97c74392b47e"],["/tags/quartz/index.html","005bcbc18f8cd1b54f435892912854d6"],["/tags/spring-boot/index.html","63fcbcda13219a9eb6214db4a7a3412d"],["/tags/spring-security/index.html","5421ca538c3579276ea0c7d96f6c5b9e"],["/tags/ubuntu/index.html","dbf94efbd9fa93e1f43bf757362bb9e6"],["/tags/vuepress/index.html","f7dd94fb4f1b0648b7cfae5fa8cb9044"],["/tags/数据结构/index.html","ee480b8fba74bf0a109ddec9984c3407"],["/tags/算法/index.html","bc83a0247e483af871637f6b19e7d847"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"blog.hvnobug.com"});




