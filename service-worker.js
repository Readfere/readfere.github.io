if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const r=e=>a(e,c),b={module:{uri:c},exports:n,require:r};i[c]=Promise.all(d.map((e=>b[e]||r(e)))).then((e=>(s(...e),n)))}}define(["./workbox-422d7551"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/14/Obsidian_dataview_引用本地图片/index.html",revision:"b28a5bc1de07b48efd335ca65aa0ef9b"},{url:"2023/08/19/MemosSync插件同步问题解决/index.html",revision:"4797ba1bfc30b1b3ad374e3e566f2d86"},{url:"2023/08/25/Prism主题高亮样式通用CSS片段/index.html",revision:"f4e98c480e1bf65bdffb9d0453569982"},{url:"2023/08/27/iPhone导入自定义字体/index.html",revision:"132faa6ab436cb5ff182b7938508520c"},{url:"2023/11/07/影视下载和字幕站/index.html",revision:"fe65a54a9f9bde0fdfb3567c8633a8aa"},{url:"2023/11/08/YouTube第三方客户端&去广告方案/index.html",revision:"9f47a7f106cd901726913a621720a3ce"},{url:"2023/11/11/PT下载站大全/index.html",revision:"f10b3c885b8809a8c7c6d98a432fbfd6"},{url:"2023/11/11/图片API 接口网站/index.html",revision:"fbb33045fb402149b3c6338ae2e3dd66"},{url:"2023/11/11/洛雪音乐助手切换自定义音源/index.html",revision:"56aa72ac2d14e3b41da84ff0c062b2eb"},{url:"2023/11/21/好用的聚合搜索推荐/index.html",revision:"122d78302cc42949705a38359a8278a1"},{url:"2023/11/22/搭建hugo博客/index.html",revision:"63a55a55d40c2bd0a72f196ccc1cc1e2"},{url:"2023/11/23/电子书搜索网站推荐/index.html",revision:"d9fd0b293695365264e739851d8c7273"},{url:"2023/11/25/快速访问GitHub的方法/index.html",revision:"6e4544440e0b27934a6f9c6e36eebb02"},{url:"2023/11/26/第一次用英国giffgaff电话卡/index.html",revision:"3e449a4bb5bcd7b8a266a0b12148dbdc"},{url:"2023/11/27/如何找到优质博客/index.html",revision:"67cb332978bc13e3673eb21d4b113f97"},{url:"2023/11/30/创建hexo博客/index.html",revision:"50d9003b86d793ee06de1846c4dcf6b3"},{url:"2023/12/01/程序员身心灵成长指南/index.html",revision:"238bd4b1eb2c3ae80231ec2cfca38cfa"},{url:"404.html",revision:"b783b507a620c71d8a0c44e6d813ea80"},{url:"about/index.html",revision:"99ce631885488eca20be72e7588879b8"},{url:"archives/2023/07/index.html",revision:"5f71f443f13298953371e635b3092cdd"},{url:"archives/2023/08/index.html",revision:"506049483add080677446bb751359624"},{url:"archives/2023/11/index.html",revision:"7fa9d821e2df2abc7e400fa73146e7ed"},{url:"archives/2023/11/page/2/index.html",revision:"67794275ac07fb34dfad9e524b83640b"},{url:"archives/2023/12/index.html",revision:"ddbf7c379ceb144da11b046ae96d4f82"},{url:"archives/2023/index.html",revision:"70cf3922e0bc5d0701e3c425095ed4f4"},{url:"archives/2023/page/2/index.html",revision:"870807b13da56a2448a0d5793c5f1bf9"},{url:"archives/index.html",revision:"fb656adf57ee3b44176b4eed7be81ade"},{url:"archives/page/2/index.html",revision:"edcae02fbcfb3ca3ae1ffc2fb8bd6ba5"},{url:"books/index.html",revision:"43d253c23ed28796560f5263d82b2b86"},{url:"categories/APPS/index.html",revision:"ce6b291ecf2563c80af3303d415ddb5d"},{url:"categories/index.html",revision:"307d0139b66eb884ec9451ae4b65a347"},{url:"categories/折腾记/index.html",revision:"8dc760971fad136968ea92dd99e45018"},{url:"categories/趣站/index.html",revision:"87a11466061bac7f1edcdc28afa88576"},{url:"css/index.css",revision:"103cdfc27dfb92f510a56c92a2b766c7"},{url:"echart/index.html",revision:"2c321161f4605d16636fe9a3fa97b05a"},{url:"equipment/index.html",revision:"913a66390acc7da1af12e4c9f6bc472a"},{url:"essay/index.html",revision:"787b9346fa5e76dfa6f40cdb47116d9a"},{url:"games/index.html",revision:"0c0ca52bd4bbadf694d85f0894df4bce"},{url:"gulpfile.js",revision:"92fe22e32b15c2ac91ed94b1b7468c89"},{url:"img/default.png",revision:"53a9b93f28898ed8ed5e1a81ad25bbfc"},{url:"img/error_load.png",revision:"7189c3d51e8f00bb1b5caa62a269408d"},{url:"img/loading.gif",revision:"6633df187bfd65273d1abda8bd39bcac"},{url:"img/logo-horizontal_version.png",revision:"081baef376a1bdc1b5f052d9d866a6c2"},{url:"img/pwa/16.png",revision:"ddb3835ee1bcf08e723d3fbd393ba443"},{url:"img/pwa/180.png",revision:"cbcdbcdd06b11022dd7ee64b7c5ad42e"},{url:"img/pwa/192.png",revision:"1b56fd668fe357f1f559564ccc0d43ec"},{url:"img/pwa/32.png",revision:"b4ea3a7b4317c114cc7a788c8d2d1818"},{url:"img/pwa/512.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/logo.png",revision:"2d1914dc6f6a83030007e1a47a23eed7"},{url:"img/pwa/siteicon/splash-1125x2436.png",revision:"8588aa42c959effb52122830df001139"},{url:"img/pwa/siteicon/splash-1136x640.png",revision:"c6e7dfff7e03675450272a988d88bbd5"},{url:"img/pwa/siteicon/splash-1170x2532.png",revision:"7537dc90c2b020e5799243f8db15fb15"},{url:"img/pwa/siteicon/splash-1179x2556.png",revision:"95b7c681813d056bb82afc3ee40dbf65"},{url:"img/pwa/siteicon/splash-1242x2208.png",revision:"7b54bee76bcb542993fe37b5c3dca143"},{url:"img/pwa/siteicon/splash-1242x2688.png",revision:"44e2f80b4f7bf8e80ea924e194c95dd3"},{url:"img/pwa/siteicon/splash-1248x2778.png",revision:"ed6d81741840520df69ad3d0a013d5fc"},{url:"img/pwa/siteicon/splash-1290x2796.png",revision:"efd1f599a787ec8790af94d7e571aba6"},{url:"img/pwa/siteicon/splash-1334x750.png",revision:"17c5819ecc7bf4c2028c038de418663d"},{url:"img/pwa/siteicon/splash-1536x2048.png",revision:"03730257cdcce1355c5e6e4734c0c858"},{url:"img/pwa/siteicon/splash-1620x2160.png",revision:"16342e2cbda8c65fbe260ba4e750aa64"},{url:"img/pwa/siteicon/splash-1668x2224.png",revision:"4ce602955275f68c3eba1edf62f81d30"},{url:"img/pwa/siteicon/splash-1668x2388.png",revision:"c5a430812e9ea2950ba63287428eb992"},{url:"img/pwa/siteicon/splash-1792x828.png",revision:"3d4a95f34d6d74d56e533490bfaa47c8"},{url:"img/pwa/siteicon/splash-2048x1536.png",revision:"8ddafa70e1d6cf8ee2924bcf45302173"},{url:"img/pwa/siteicon/splash-2048x2732.png",revision:"c0ea6ebe0e1098a4dae817852c803ae6"},{url:"img/pwa/siteicon/splash-2160x1620.png",revision:"1d41de145b3ca27dbe3a548e949e0439"},{url:"img/pwa/siteicon/splash-2208x1242.png",revision:"88d1074ba45b89b06fea9df88f5bd8ab"},{url:"img/pwa/siteicon/splash-2224x1668.png",revision:"643a52a90f7200452913b778b08b1f05"},{url:"img/pwa/siteicon/splash-2388x1668.png",revision:"6f3e68bcc74ff804f06a71f3036301ec"},{url:"img/pwa/siteicon/splash-2436x1125.png",revision:"00ff28edc03de7e559056b43b24f31c9"},{url:"img/pwa/siteicon/splash-2532x1170.png",revision:"ee29b0f1ba8082c504bbed5d7bce3c70"},{url:"img/pwa/siteicon/splash-2556x1179.png",revision:"b8dabdbe8e293982a0382fb7945e4349"},{url:"img/pwa/siteicon/splash-2688x1242.png",revision:"7c2df97f148fdb071bfcc03d31ad8011"},{url:"img/pwa/siteicon/splash-2732x2048.png",revision:"afb652215c1c258629d13ce807822e18"},{url:"img/pwa/siteicon/splash-2778x1248.png",revision:"287da9c8df85042afc1ac81b1d75a7f1"},{url:"img/pwa/siteicon/splash-2796x1290.png",revision:"d198cb1155ef46d4a257594c2b9d05de"},{url:"img/pwa/siteicon/splash-640x1136.png",revision:"3a43ea9a06bdcbc9caf3d02c1aa66dab"},{url:"img/pwa/siteicon/splash-750x1334.png",revision:"9a3ac1859695ba48f70161ba80d14d4b"},{url:"img/pwa/siteicon/splash-828x1792.png",revision:"10d7e306e751fe67563d9f6aafda8e7c"},{url:"img/solitude-show.jpg",revision:"5f7c034d85d07a3cf63f5db4f675a5ff"},{url:"img/theme/avatar.png",revision:"ccfd669479d5d5ba603835bc82f41215"},{url:"index.html",revision:"5eb887019f44c5dc4af267195ebe342b"},{url:"js/commentBarrage.js",revision:"6d4fc0c935cd70a9b3623d32083975a1"},{url:"js/extend/comment/twikoo.js",revision:"96382ace6bff4eb5351a7e05f2359f03"},{url:"js/extend/comment/waline.js",revision:"469096baf344e30d42d8ab2fe34d439d"},{url:"js/extend/covercolor/local.js",revision:"7697c2774878f3aee788504ae848ee0a"},{url:"js/extend/search/algolia-search.js",revision:"18eb8d163d170ef76634e7eebb6386a1"},{url:"js/extend/search/local-search.js",revision:"c9f53147dd58880679b51c5b1b4a3e3e"},{url:"js/main.js",revision:"87bffdbb13089cc800e3e17a50f94613"},{url:"js/rightside.js",revision:"94c8a9b9f04c7f907cee581a4ab508bf"},{url:"js/txmap.js",revision:"fc5253f90426b9e6803de5803e102da7"},{url:"js/utils.js",revision:"0741dcf06e9522dbcff387a6f61f4e40"},{url:"lib/bundle.min.js",revision:"60da6c996da4a9b00363d174156c68dd"},{url:"lib/chuckle-post-ai.js",revision:"e7561560af2aca2f8b59568d6a702bf0"},{url:"lib/circle.min.js",revision:"f2e257446a4dddeba99164f9b0c34dcb"},{url:"lib/friends_post.js",revision:"111ce2275c7b0fef9c5a0f939a8e3c75"},{url:"lib/lazyload.min.js",revision:"125a484012c4c363a0d9af64265dffa8"},{url:"lib/snackbar.min.css",revision:"4220368aced9a5ce011f2ce9bd8b1035"},{url:"lib/snackbar.min.js",revision:"f3e3023ac2dfa26f15d08a1f99e25052"},{url:"lib/view-image.min.js",revision:"0ea64e6d978f83ce30fef57e9cbf696f"},{url:"lib/waterfall.min.js",revision:"aeba43213701fb1a09e15eb4ae8bce03"},{url:"links/index.html",revision:"79d42841ef75cca7743ff6a0d8d0d913"},{url:"moments/index.html",revision:"4075b96f1e12865d2f0dc0f865c7934f"},{url:"movies/index.html",revision:"7603a15718407c0ff288e9720ea898cf"},{url:"page/2/index.html",revision:"522a9dbc2f72c558c39c9aa498389f66"},{url:"rss/index.html",revision:"224c36911b07a9c55755a0e4bcd8cd83"},{url:"songs/index.html",revision:"90f3f4479c611d78301196f06625a584"},{url:"tags/index.html",revision:"df4833ffc8e82fdb9d8ddc813e6c1ebd"},{url:"tags/Obsidian/index.html",revision:"8cd230a6d4d9e63fb36b418b5a2778b1"},{url:"tags/YouTube/index.html",revision:"c867544bb095c009a23777e07b911ad5"},{url:"tlink/index.html",revision:"c44f05c4be42ae7591575e0eeea94664"},{url:"/",revision:"index-20231203081511265"}],{})}));
//# sourceMappingURL=service-worker.js.map
