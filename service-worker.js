if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const r=e=>a(e,s),f={module:{uri:s},exports:n,require:r};i[s]=Promise.all(d.map((e=>f[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-422d7551"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/14/Obsidian_dataview_引用本地图片/index.html",revision:"fb6e987dbc91e32316471e5f061b0d39"},{url:"2023/08/19/MemosSync插件同步问题解决/index.html",revision:"31d1d25d8676ffbdcfa5226ac84ace09"},{url:"2023/08/25/Prism主题高亮样式通用CSS片段/index.html",revision:"5e5822c963d12bbfe84ad7e53aea7f5f"},{url:"2023/08/27/iPhone导入自定义字体/index.html",revision:"fa3ce47ba52bdcad663ebff9db81db34"},{url:"2023/11/07/影视下载和字幕站/index.html",revision:"962d54bc3b8f413aa710952f6d47bed9"},{url:"2023/11/08/YouTube第三方客户端&去广告方案/index.html",revision:"dbc9d15e986f5a28fe16b56f551afa29"},{url:"2023/11/11/PT下载站大全/index.html",revision:"1b397083d4395651f2dad017f8a9d236"},{url:"2023/11/11/图片API 接口网站/index.html",revision:"475328dbc14e8a508f18bc7b67be25ad"},{url:"2023/11/11/洛雪音乐助手切换自定义音源/index.html",revision:"18ca1ab71d0debeea6dc2694e16e6919"},{url:"2023/11/21/好用的聚合搜索推荐/index.html",revision:"a727d2caea598e880e2f97ff27790a36"},{url:"2023/11/22/搭建hugo博客/index.html",revision:"4fbfb21594520118820b7ac074b46a43"},{url:"2023/11/23/电子书搜索网站推荐/index.html",revision:"b2d7c174236e2bbb26f9b6cc8832c064"},{url:"2023/11/25/快速访问GitHub的方法/index.html",revision:"9f86ad0d7fd724e48d12debf86cbdd4a"},{url:"2023/11/26/第一次用英国giffgaff电话卡/index.html",revision:"aa517a3014e39193d9fd52cb98e30e23"},{url:"2023/11/27/如何找到优质博客/index.html",revision:"6dd67bcb03e0cc1ba5abf6631e925371"},{url:"2023/11/30/创建hexo博客/index.html",revision:"0f349f240c6e1250efcc438514428561"},{url:"2023/12/01/程序员身心灵成长指南/index.html",revision:"2da2b4eecf0554978286a9680f13a6c6"},{url:"404.html",revision:"f3a86e3106ef816f6670f154d5417dc2"},{url:"about/index.html",revision:"f5c0b1e4222f6452d295789bb5c65126"},{url:"archives/2023/07/index.html",revision:"cceddf76d3f420962940ce9feab48111"},{url:"archives/2023/08/index.html",revision:"a16ecd1f59090afc02ca158b53b73eb4"},{url:"archives/2023/11/index.html",revision:"651cfb7107d41dfc95449d28bbf6c890"},{url:"archives/2023/11/page/2/index.html",revision:"796cac49cc323a71f30ca5ca0c4a8bd4"},{url:"archives/2023/12/index.html",revision:"a02a7419f1a8334670d54d660047ca57"},{url:"archives/2023/index.html",revision:"818c7768c31f7cbcfe7fe9c5a75812b3"},{url:"archives/2023/page/2/index.html",revision:"cf3ea9ed06a4ed21478baf2d491f6108"},{url:"archives/index.html",revision:"adb7bcaa20238a06684f22826c1a3a6c"},{url:"archives/page/2/index.html",revision:"1b96f20687e4f9f44541269dbddba7ef"},{url:"books/index.html",revision:"f49dec166d584d99ddfb864c2e7231aa"},{url:"categories/APPS/index.html",revision:"02dd77dcb18b2736fa240adafab1f402"},{url:"categories/index.html",revision:"93277701d260300e091a45d4caad2db0"},{url:"categories/折腾记/index.html",revision:"74e8712ad4d05513c2bb3c95422b48c3"},{url:"categories/趣站/index.html",revision:"d9e47f37c3fd09891abd580b5b7e6330"},{url:"css/index.css",revision:"103cdfc27dfb92f510a56c92a2b766c7"},{url:"echart/index.html",revision:"5e50669f04334c9bec2dd5ff0bc240ad"},{url:"equipment/index.html",revision:"d395f37a17297e14b795281adf783f11"},{url:"essay/index.html",revision:"930fd005103c89ac072223af298e24e5"},{url:"games/index.html",revision:"f747843512d69a949c19976e301e27c1"},{url:"gulpfile.js",revision:"92fe22e32b15c2ac91ed94b1b7468c89"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"5e712575544287686c80a4f26a1a7d9b"},{url:"js/commentBarrage.js",revision:"6d4fc0c935cd70a9b3623d32083975a1"},{url:"js/extend/comment/twikoo.js",revision:"96382ace6bff4eb5351a7e05f2359f03"},{url:"js/extend/comment/waline.js",revision:"469096baf344e30d42d8ab2fe34d439d"},{url:"js/extend/covercolor/local.js",revision:"7697c2774878f3aee788504ae848ee0a"},{url:"js/extend/search/algolia-search.js",revision:"18eb8d163d170ef76634e7eebb6386a1"},{url:"js/extend/search/local-search.js",revision:"c9f53147dd58880679b51c5b1b4a3e3e"},{url:"js/main.js",revision:"87bffdbb13089cc800e3e17a50f94613"},{url:"js/rightside.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/utils.js",revision:"0741dcf06e9522dbcff387a6f61f4e40"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"e7561560af2aca2f8b59568d6a702bf0"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"a52a46e698111391412bace8401ff5cc"},{url:"moments/index.html",revision:"c4847154f407d362eb7ddf38149e1201"},{url:"movies/index.html",revision:"5ce43695bb1d4feafade499aaf271aeb"},{url:"page/2/index.html",revision:"a0f596f6a77406822c63fd988c09652b"},{url:"rss/index.html",revision:"1efb0b4282b806ea0e9ae18e5b656292"},{url:"songs/index.html",revision:"fa8bc9ce9669cd8253fc046c738bcae6"},{url:"tags/index.html",revision:"5a95dd1204b0f75e243b85f037cc9f59"},{url:"tags/Obsidian/index.html",revision:"ddcd296b21b75c5c7b167caa9eafd736"},{url:"tags/YouTube/index.html",revision:"c3202905135d00c0da10ccfc7649750e"},{url:"tlink/index.html",revision:"a394b6a532dfadc06dc6b5426e4bba1c"},{url:"/",revision:"index-20231203045924857"}],{})}));
//# sourceMappingURL=service-worker.js.map
