if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const r=e=>a(e,c),f={module:{uri:c},exports:n,require:r};i[c]=Promise.all(d.map((e=>f[e]||r(e)))).then((e=>(s(...e),n)))}}define(["./workbox-422d7551"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/14/Obsidian_dataview_引用本地图片/index.html",revision:"17e86b82dd3baf9ce90772f744fc8661"},{url:"2023/08/19/MemosSync插件同步问题解决/index.html",revision:"634957dbb6445fd7603bf263bda7415d"},{url:"2023/08/25/Prism主题高亮样式通用CSS片段/index.html",revision:"870d6a1f3ac1d9e7f9460067ff1c4086"},{url:"2023/08/27/iPhone导入自定义字体/index.html",revision:"e59db71c02bc9cef9f200178a88c864d"},{url:"2023/11/07/影视下载和字幕站/index.html",revision:"1047f04c1a9babf7706ee068df7dfa4d"},{url:"2023/11/08/YouTube第三方客户端&去广告方案/index.html",revision:"30cc617528df3546e7c224d2dfeabd46"},{url:"2023/11/11/PT下载站大全/index.html",revision:"856300fb2e00d448fe08664069627b31"},{url:"2023/11/11/图片API 接口网站/index.html",revision:"f5db2c14ae3c1764f715496a8dd8d463"},{url:"2023/11/11/洛雪音乐助手切换自定义音源/index.html",revision:"5c13d51b2acfcded6423075406cbe638"},{url:"2023/11/21/好用的聚合搜索推荐/index.html",revision:"98a21e806e3cedf53a550b9cf00c439f"},{url:"2023/11/22/搭建hugo博客/index.html",revision:"0ccf8ef4180579dea93623ea4260f979"},{url:"2023/11/23/电子书搜索网站推荐/index.html",revision:"aac7078bb7e20e84559b4dc362345152"},{url:"2023/11/25/快速访问GitHub的方法/index.html",revision:"c17256952c7fa0b3d3b1f0e2a74c752e"},{url:"2023/11/26/第一次用英国giffgaff电话卡/index.html",revision:"69d09290eea53acf0a6c2cfe033f515c"},{url:"2023/11/27/如何找到优质博客/index.html",revision:"b31dcbb4da6642f1ac9d21ae52771e4f"},{url:"2023/11/30/创建hexo博客/index.html",revision:"717c26ca5e7bfdf88d710dad140d09ed"},{url:"404.html",revision:"f55f2bbae9e3f8b0a6d89fb4125b5537"},{url:"about/index.html",revision:"8847df4f30c8290e7c96e5d5c87f107a"},{url:"archives/2023/07/index.html",revision:"f771926b456835029038e077e86abd15"},{url:"archives/2023/08/index.html",revision:"0252a9aba880b5efa4ae7af64f105cd4"},{url:"archives/2023/11/index.html",revision:"b2a703044c48ab158f6e6ea2bbffc15c"},{url:"archives/2023/11/page/2/index.html",revision:"ff99d4ab02b3fb5965fca6987c6ea1e0"},{url:"archives/2023/index.html",revision:"cd30e3366f5186cfe081ed1e52538eef"},{url:"archives/2023/page/2/index.html",revision:"ac9364bcdbe2ca95af4105d8b84fe689"},{url:"archives/index.html",revision:"6f540d791592f2dbd9492550e7e63833"},{url:"archives/page/2/index.html",revision:"c614a8f8175eed37b644782ad9d33a0a"},{url:"books/index.html",revision:"c18db96a9269d92f7256c7d3a00e0c1c"},{url:"categories/APPS/index.html",revision:"dd82ef3b499b84e24372e53103fb3889"},{url:"categories/index.html",revision:"1f98dd923dc48ee88f651e5e930fcde2"},{url:"categories/折腾记/index.html",revision:"8684d83bb0dd8daa259ef30e61d2c1cc"},{url:"categories/趣站/index.html",revision:"c80db5f0ad5c0403bcad64e2d52eb46f"},{url:"css/index.css",revision:"89b9afd3feb40915fbc77cc4f680a24e"},{url:"echart/index.html",revision:"e5b196ab48acf2fba57bbfb7531011ae"},{url:"equipment/index.html",revision:"71b10dd2a0c84f5f9d8747e1bb11959f"},{url:"essay/index.html",revision:"3970debe38d43fa9730d0bb44e77a023"},{url:"games/index.html",revision:"1a7e075ef909843571ce3829f92b4dda"},{url:"gulpfile.js",revision:"92fe22e32b15c2ac91ed94b1b7468c89"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"ecc8ea8c8f27f32dced63f2123a58f5c"},{url:"js/commentBarrage.js",revision:"6d4fc0c935cd70a9b3623d32083975a1"},{url:"js/extend/comment/twikoo.js",revision:"96382ace6bff4eb5351a7e05f2359f03"},{url:"js/extend/comment/waline.js",revision:"469096baf344e30d42d8ab2fe34d439d"},{url:"js/extend/covercolor/local.js",revision:"7697c2774878f3aee788504ae848ee0a"},{url:"js/extend/search/algolia-search.js",revision:"18eb8d163d170ef76634e7eebb6386a1"},{url:"js/extend/search/local-search.js",revision:"c9f53147dd58880679b51c5b1b4a3e3e"},{url:"js/main.js",revision:"87bffdbb13089cc800e3e17a50f94613"},{url:"js/rightside.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/utils.js",revision:"0741dcf06e9522dbcff387a6f61f4e40"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"e7561560af2aca2f8b59568d6a702bf0"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"61c1b0082976681b208c72fbd4935b55"},{url:"moments/index.html",revision:"8580dc1f3fc3baa0108233137da5fa5a"},{url:"movies/index.html",revision:"555a1ea7209efe2693ca79c4b362d9f9"},{url:"page/2/index.html",revision:"c24c5e07defe9f8efc33a1877c9f46e7"},{url:"rss/index.html",revision:"6cf043f35697fc2b1730ab136341861c"},{url:"songs/index.html",revision:"15f9f56f3bd56db0808badc1e2ca5a05"},{url:"tags/index.html",revision:"434992d1ec3dcbfc6fdabde6c61a79a2"},{url:"tags/Obsidian/index.html",revision:"067d7c37e9effe30f751e07cb3364898"},{url:"tags/YouTube/index.html",revision:"3156d5555500ffc8edbc55b61dd25894"},{url:"tlink/index.html",revision:"5b3840086340ed4dcd82da465a2d57fa"},{url:"/",revision:"index-20231202012419142"}],{})}));
//# sourceMappingURL=service-worker.js.map
