if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const r=e=>a(e,c),b={module:{uri:c},exports:n,require:r};i[c]=Promise.all(d.map((e=>b[e]||r(e)))).then((e=>(s(...e),n)))}}define(["./workbox-422d7551"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/14/Obsidian_dataview_引用本地图片/index.html",revision:"71cffa30cb6d7aad124bbe023a617a87"},{url:"2023/08/19/MemosSync插件同步问题解决/index.html",revision:"fd8919e5c908e595fc363293a78f9a82"},{url:"2023/08/25/Prism主题高亮样式通用CSS片段/index.html",revision:"1285a372bb2f04af853fb2bf8cfababf"},{url:"2023/08/27/iPhone导入自定义字体/index.html",revision:"c5ddc3f38186d86adf2cac9ad2daee85"},{url:"2023/11/07/影视下载和字幕站/index.html",revision:"87e2aea4b2b28cb18ea458aae2f8f63a"},{url:"2023/11/08/YouTube第三方客户端&去广告方案/index.html",revision:"bf6fbb38cb63e741973be1023c2847e0"},{url:"2023/11/11/PT下载站大全/index.html",revision:"15643ee3bebc1e67b0c86ec05a911a54"},{url:"2023/11/11/图片API 接口网站/index.html",revision:"7e8e86873943b725f28c3a007facf6f8"},{url:"2023/11/11/洛雪音乐助手切换自定义音源/index.html",revision:"8af137d26851edf57dfc56d2c6dbbe47"},{url:"2023/11/21/好用的聚合搜索推荐/index.html",revision:"d7134b4a09989369f4c6cd6fa1fa51a4"},{url:"2023/11/22/搭建hugo博客/index.html",revision:"9a391da56b66f588cfdc44178cf4ad39"},{url:"2023/11/23/电子书搜索网站推荐/index.html",revision:"ec8edcc407a39788641ea8644cc96825"},{url:"2023/11/25/快速访问GitHub的方法/index.html",revision:"e9363db5f6128620a8a60ddcccb7e1b4"},{url:"2023/11/26/第一次用英国giffgaff电话卡/index.html",revision:"a69888104ef4c587e7e9b382270e50ad"},{url:"2023/11/27/如何找到优质博客/index.html",revision:"b38acf7df5a754b3b7e10f7d395070c5"},{url:"2023/11/30/创建hexo博客/index.html",revision:"a4fac5d92dc2000b77d0a9aaf0e2f511"},{url:"2023/12/01/程序员身心灵成长指南/index.html",revision:"7ded117ce3d002758d4954ef1d0eb2b9"},{url:"404.html",revision:"ad5e8b968461b34e5bbbc808fac639a4"},{url:"about/index.html",revision:"6efb22b3f5ebf5d65b07b2532fd8db70"},{url:"archives/2023/07/index.html",revision:"4f042825485ff8e151c678ee10201ea1"},{url:"archives/2023/08/index.html",revision:"0b6d5a466625a722825e083b33f847f7"},{url:"archives/2023/11/index.html",revision:"1b3f484e25fe9535ea6f28061ea0529a"},{url:"archives/2023/11/page/2/index.html",revision:"51a5ce142bd7aa366c6a7fe1e2f14d7f"},{url:"archives/2023/12/index.html",revision:"f962f8311c4ad9db71a144e6189d209e"},{url:"archives/2023/index.html",revision:"521d804bca05143d2db221217dcf3fbf"},{url:"archives/2023/page/2/index.html",revision:"97e1e41d313eb31bb5eab9d1901428fb"},{url:"archives/index.html",revision:"3abd1c715ca5c6d462015bb7fb8ee9d3"},{url:"archives/page/2/index.html",revision:"833562dd502dbea59d83c2c557dc7352"},{url:"books/index.html",revision:"76f25a1271ae16f3b1d3731a828e70f7"},{url:"categories/APPS/index.html",revision:"c158461f2ab7d0767c9c1ca009c03835"},{url:"categories/index.html",revision:"0588107acdbfe7b99a78edcedcd34b62"},{url:"categories/折腾记/index.html",revision:"7e4db41ab78ee6c006a51406a9e3f545"},{url:"categories/趣站/index.html",revision:"a5a012ca36db805d44502a4912863eed"},{url:"css/index.css",revision:"103cdfc27dfb92f510a56c92a2b766c7"},{url:"echart/index.html",revision:"d33c806fb42bce8aac5a64de6c2077f7"},{url:"equipment/index.html",revision:"f142a81b210f2250bcd46dfa875bcf47"},{url:"essay/index.html",revision:"4b87c6fd7a558040167fd491ec1bf1fa"},{url:"games/index.html",revision:"a278c9451f6f4670ccd50358fe708097"},{url:"gulpfile.js",revision:"92fe22e32b15c2ac91ed94b1b7468c89"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"fe93cc5760cd0d1440ab4ce87709595b"},{url:"js/commentBarrage.js",revision:"6d4fc0c935cd70a9b3623d32083975a1"},{url:"js/extend/comment/twikoo.js",revision:"96382ace6bff4eb5351a7e05f2359f03"},{url:"js/extend/comment/waline.js",revision:"469096baf344e30d42d8ab2fe34d439d"},{url:"js/extend/covercolor/local.js",revision:"7697c2774878f3aee788504ae848ee0a"},{url:"js/extend/search/algolia-search.js",revision:"18eb8d163d170ef76634e7eebb6386a1"},{url:"js/extend/search/local-search.js",revision:"c9f53147dd58880679b51c5b1b4a3e3e"},{url:"js/main.js",revision:"87bffdbb13089cc800e3e17a50f94613"},{url:"js/rightside.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/utils.js",revision:"0741dcf06e9522dbcff387a6f61f4e40"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"e7561560af2aca2f8b59568d6a702bf0"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"317405f6810b4780ed6d9be5b992284b"},{url:"moments/index.html",revision:"8752595079db068f80b5c37e34dc88ab"},{url:"movies/index.html",revision:"e496cf9e09b166b237fbba23452c1128"},{url:"page/2/index.html",revision:"9f6595335e3a01d790d39e0d7fb870c1"},{url:"rss/index.html",revision:"30929ce142df20282bd531f8ca59034d"},{url:"songs/index.html",revision:"9775729877cf732947407847aed694e8"},{url:"tags/index.html",revision:"a7299ad22b153ba2d70b9f3b964075ba"},{url:"tags/Obsidian/index.html",revision:"08ab41fa94dfa2591eb07ca24ec33ba7"},{url:"tags/YouTube/index.html",revision:"ca76104138ea0d7d429b7e1ab31cc45b"},{url:"tlink/index.html",revision:"2de5aea20fab943df3bb3c58dd3b43c9"},{url:"/",revision:"index-20231202064843549"}],{})}));
//# sourceMappingURL=service-worker.js.map
