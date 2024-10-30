const sidebarFn=()=>{const e=document.getElementById("toggle-menu"),t=document.getElementById("sidebar-menus"),o=document.getElementById("menu-mask"),n=document.body,s=e=>{utils.sidebarPaddingR(),n.style.overflow=e?"hidden":"",n.style.paddingRight="",utils[e?"fadeIn":"fadeOut"](o,.5),t.classList[e?"add":"remove"]("open")},i=()=>{t.classList.contains("open")&&s(!1)};e.addEventListener("click",(()=>s(!0))),o.addEventListener("click",i),window.addEventListener("resize",(()=>{utils.isHidden(e)&&t.classList.contains("open")&&i(),sco.refreshWaterFall()}))},scrollFn=()=>{window.innerHeight;let e=0;const t=document.getElementById("page-header"),o=utils.throttle((o=>{initThemeColor();const n=window.scrollY||document.documentElement.scrollTop,s=function(t){const o=t>e;return e=t,o}(n);n>0?(s?t.classList.contains("nav-visible")&&t.classList.remove("nav-visible"):t.classList.contains("nav-visible")||t.classList.add("nav-visible"),t.classList.add("nav-fixed")):t.classList.remove("nav-fixed","nav-visible")}),200);window.addEventListener("scroll",(e=>{o(e),0===window.scrollY&&t.classList.remove("nav-fixed","nav-visible")}))},percent=()=>{const e=document.documentElement,t=document.body,o=window.pageYOffset||e.scrollTop,n=Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)-e.clientHeight,s=Math.round(o/n*100),i=document.querySelector("#nav-totop"),c=document.querySelector("#percent"),l=window.scrollY+e.clientHeight>=(document.getElementById("post-comment")||document.getElementById("footer")).offsetTop;i.classList.toggle("long",l||s>90),c.textContent=l||s>90?GLOBAL_CONFIG.lang.backtop:s,document.querySelectorAll(".needEndHide").forEach((e=>e.classList.toggle("hide",n-o<100)))},showTodayCard=()=>{const e=document.getElementById("todayCard"),t=document.querySelector(".topGroup");t?.addEventListener("mouseleave",(()=>e?.classList.remove("hide")))},initObserver=()=>{const e=document.getElementById("post-comment"),t=document.getElementById("pagination"),o=document.querySelector(".comment-barrage");if(e&&t){new IntersectionObserver((e=>{e.forEach((e=>{const n=e.isIntersecting?"add":"remove";t.classList[n]("show-window"),GLOBAL_CONFIG.comment.commentBarrage&&(o.style.bottom=e.isIntersecting?"-200px":"0px")}))})).observe(e)}},addCopyright=()=>{if(!GLOBAL_CONFIG.copyright)return;const{limit:e,author:t,link:o,source:n,info:s}=GLOBAL_CONFIG.copyright;document.body.addEventListener("copy",(i=>{i.preventDefault();const c=window.getSelection().toString(),l=c.length>e?`${c}\n\n${t}\n${o}${window.location.href}\n${n}\n${s}`:c;i.clipboardData.setData("text",l)}))},asideStatus=()=>{const e=utils.saveToLocal.get("aside-status");document.documentElement.classList.toggle("hide-aside","hide"===e)};function initThemeColor(){const e=(window.scrollY||document.documentElement.scrollTop)>0?"--efu-card-bg":PAGE_CONFIG.is_post?"--efu-main":"--efu-background";applyThemeColor(getComputedStyle(document.documentElement).getPropertyValue(e))}function applyThemeColor(e){const t=document.querySelector('meta[name="theme-color"]'),o=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');t?.setAttribute("content",e),o?.setAttribute("content",e),window.matchMedia("(display-mode: standalone)").matches&&(document.body.style.backgroundColor=e)}const handleThemeChange=e=>{const t=window.globalFn?.themeChange||{};for(let o in t)t[o](e)},sco={lastSayHello:"",wasPageHidden:!1,musicPlaying:!1,hideCookie(){const e=document.getElementById("cookies-window");e&&setTimeout((()=>{e.classList.add("cw-hide"),setTimeout((()=>e.style.display="none"),1e3)}),3e3)},scrollTo(e){const t=document.getElementById(e);if(t){const e=t.getBoundingClientRect().top+window.pageYOffset-80;window.scroll({top:e,behavior:"smooth"})}},musicToggle(){const e=document.querySelector("#nav-music"),t=document.querySelector("meting-js"),o=document.getElementById("consoleMusic"),n=document.querySelector("#menu-music-toggle span"),s=document.querySelector("#menu-music-toggle i");this.musicPlaying=!this.musicPlaying,e.classList.toggle("playing",this.musicPlaying),o.classList.toggle("on",this.musicPlaying),this.musicPlaying?(t.aplayer.play(),rm?.menuItems.music[0]&&(n.textContent=GLOBAL_CONFIG.right_menu.music.stop)&&(s.className="solitude st-pause-fill")):(t.aplayer.pause(),rm?.menuItems.music[0]&&(n.textContent=GLOBAL_CONFIG.right_menu.music.start)&&(s.className="solitude st-play-fill"))},switchCommentBarrage(){let e=document.querySelector(".comment-barrage");if(!e)return;const t="flex"===window.getComputedStyle(e).display;e.style.display=t?"none":"flex",document.querySelector("#consoleCommentBarrage").classList.toggle("on",!t),utils.saveToLocal.set("commentBarrageSwitch",!t,.2),rm?.menuItems.barrage&&rm.barrage(t)},switchHideAside(){const e=document.documentElement.classList,t=document.querySelector("#consoleHideAside"),o=e.contains("hide-aside");utils.saveToLocal.set("aside-status",o?"show":"hide",1),e.toggle("hide-aside"),t.classList.toggle("on",!o)},switchKeyboard(){this.sco_keyboards=!this.sco_keyboards;const e=document.querySelector("#consoleKeyboard"),t=this.sco_keyboards?openKeyboard:closeKeyboard;e.classList.toggle("on",this.sco_keyboards),t(),localStorage.setItem("keyboard",this.sco_keyboards),document.getElementById("keyboard-tips")?.classList.remove("show")},initConsoleState(){document.querySelector("#consoleHideAside").classList.toggle("on",!document.documentElement.classList.contains("hide-aside"))},changeSayHelloText(){const e=GLOBAL_CONFIG.aside.sayhello2,t=document.getElementById("author-info__sayhi");let o;do{o=e[Math.floor(Math.random()*e.length)]}while(o===this.lastSayHello);t.textContent=o,this.lastSayHello=o},switchDarkMode(){const e="dark"===document.documentElement.getAttribute("data-theme"),t=e?"light":"dark";document.documentElement.setAttribute("data-theme",t),utils.saveToLocal.set("theme",t,.02),utils.snackbarShow(GLOBAL_CONFIG.lang.theme[t],!1,2e3),"object"==typeof rm&&rm.mode(!e)&&rm.hideRightMenu(),handleThemeChange(t)},hideTodayCard:()=>document.getElementById("todayCard").classList.add("hide"),toTop:()=>utils.scrollToDest(0),showConsole:()=>document.getElementById("console")?.classList.toggle("show",!0),hideConsole:()=>document.getElementById("console")?.classList.remove("show"),refreshWaterFall(){const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&setTimeout((()=>{waterfall(e.target)||e.target.classList.add("show")}),300)}))}));document.querySelectorAll(".waterfall").forEach((t=>e.observe(t)))},addRuntime(){let e=document.getElementById("runtimeshow");e&&GLOBAL_CONFIG.runtime&&(e.innerText=utils.timeDiff(new Date(GLOBAL_CONFIG.runtime),new Date)+GLOBAL_CONFIG.lang.day)},toTalk(e){["#wl-edit",".el-textarea__inner","#veditor",".atk-textarea"].forEach((t=>{const o=document.querySelector(t);o&&(o.dispatchEvent(new Event("input",{bubble:!0,cancelable:!0})),o.value="> "+e.replace(/\n/g,"\n> ")+"\n\n",utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300),o.focus(),o.setSelectionRange(-1,-1))})),utils.snackbarShow(GLOBAL_CONFIG.lang.totalk,!1,2e3)},initbbtalk(){document.querySelector("#bber-talk")&&new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,pauseOnMouseEnter:!0}})},addPhotoFigcaption(){document.querySelectorAll("#article-container img:not(.gallery-item img)").forEach((e=>{const t=e.getAttribute("alt");t&&e.insertAdjacentHTML("afterend",`<div class="img-alt is-center">${t}</div>`)}))},scrollToComment:()=>utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300),setTimeState(){const e=document.getElementById("author-info__sayhi");if(e){const t=(new Date).getHours(),o=GLOBAL_CONFIG.aside.sayhello,n=function(e){for(let t of e){const e=localStorage.getItem(t);if(e)return JSON.parse(e)}return null}(["twikoo","WALINE_USER_META","WALINE_USER","_v_Cache_Meta","ArtalkUser"]);const s=n?n.nick?n.nick:n.display_name:null;let i;this.wasPageHidden?(i=GLOBAL_CONFIG.aside.sayhello3.back+s,this.wasPageHidden=!1):i=GLOBAL_CONFIG.aside.sayhello3.prefix+s;const c=[{start:0,end:5,text:s?i:o.goodnight},{start:6,end:10,text:s?i:o.morning},{start:11,end:14,text:s?i:o.noon},{start:15,end:18,text:s?i:o.afternoon},{start:19,end:24,text:s?i:o.night}].find((e=>t>=e.start&&t<=e.end));e.innerText=c.text}},tagPageActive(){const e=decodeURIComponent(window.location.pathname);if(/\/tags\/.*?\//.test(e)){const t=e.split("/").slice(-2,-1)[0],o=document.getElementById(t);o&&(document.querySelectorAll("a.select").forEach((e=>{e.classList.remove("select")})),o.classList.add("select"))}},categoriesBarActive(){const e=document.querySelector("#category-bar"),t=decodeURIComponent(window.location.pathname),o=t===GLOBAL_CONFIG.root;if(e){e.querySelectorAll(".category-bar-item").forEach((e=>e.classList.remove("select")));const n=o?"category-bar-home":t.split("/").slice(-2,-1)[0],s=document.getElementById(n);s&&s.classList.add("select")}},scrollCategoryBarToRight(){const e=document.getElementById("category-bar-items"),t=document.getElementById("category-bar-next");if(e){const o=()=>e.scrollLeft+e.clientWidth>=e.scrollWidth-8,n=()=>{o()?e.scroll({left:0,behavior:"smooth"}):e.scrollBy({left:e.clientWidth,behavior:"smooth"})};e.addEventListener("scroll",(()=>{clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{t.style.transform=o()?"rotate(180deg)":""}),150)})),n()}},openAllTags(){document.querySelectorAll(".card-allinfo .card-tag-cloud").forEach((e=>e.classList.add("all-tags"))),document.getElementById("more-tags-btn")?.remove()},listenToPageInputPress(){const e=document.querySelector(".toPageGroup"),t=document.getElementById("toPageText");if(!t)return;const o=document.getElementById("toPageButton"),n=document.querySelectorAll(".page-number"),s=+n[n.length-1].textContent;t&&1!==s?(t.addEventListener("keydown",(e=>{13===e.keyCode&&(sco.toPage(),pjax.loadUrl(o.href))})),t.addEventListener("input",(()=>{o.classList.toggle("haveValue",""!==t.value&&"0"!==t.value),+t.value>s&&(t.value=s)}))):e.style.display="none"},addNavBackgroundInit(){0!==document.documentElement.scrollTop&&document.getElementById("page-header").classList.add("nav-fixed","nav-visible")},toPage(){const e=document.querySelectorAll(".page-number"),t=parseInt(e[e.length-1].innerHTML),o=document.getElementById("toPageText"),n=parseInt(o.value);document.getElementById("toPageButton").href=!isNaN(n)&&n<=t&&n>1?window.location.href.replace(/\/page\/\d+\/$/,"/")+"page/"+n+"/":"/"},owoBig(e){let t=document.getElementById("owo-big");t||(t=document.createElement("div"),t.id="owo-big",document.body.appendChild(t));const o=e=>{const o=e.getBoundingClientRect();t.style.left=o.left-t.offsetWidth/4+"px",t.style.top=`${o.top}px`};document.addEventListener("mouseover",(n=>{const s=n.target,i=s.closest(e.item);if(i&&s.closest(e.body)){const e=i.querySelector("img")?.src;e&&(t.innerHTML=`<img src="${e}" style="max-width: 100%; height: auto;">`,t.style.display="block",o(i))}})),document.addEventListener("mouseout",(o=>{o.target.closest(e.item)&&o.target.closest(e.body)&&(t.style.display="none")}))},changeTimeFormat(e){e.forEach((e=>{const t=e.getAttribute("datetime");e.textContent=utils.diffDate(t,!0),e.style.display="inline"}))},switchComments(){const e=document.getElementById("switch-btn");if(!e)return;let t=!1;const o=document.getElementById("post-comment");utils.addEventListenerPjax(e,"click",(()=>{o.classList.toggle("move"),t||"function"!=typeof loadTwoComment||(t=!0,loadTwoComment())}))}},addHighlight=()=>{const e=GLOBAL_CONFIG.highlight;if(!e)return;const{copy:t,expand:o,limit:n,syntax:s}=e,i="prismjs"===s,c=e.enable||t||o||n,l=!0==!o?"closed":"",a="highlight.js"===s?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!c&&!n||!a.length)return;const d=t?'<i class="solitude st-copy-fill copy-button"></i>':"<i></i>",r=n?'<i class="solitude st-show-line"></i>':"<i></i>",m=e=>{const t=e.parentNode;t.classList.add("copy-true");const o=window.getSelection(),n=document.createRange(),s=i?"pre code":"table .code pre";var c;n.selectNodeContents(t.querySelectorAll(`${s}`)[0]),o.removeAllRanges(),o.addRange(n),document.execCommand("copy"),e.lastChild,c=GLOBAL_CONFIG.lang.copy.success,utils.snackbarShow(c,!1,2e3),o.removeAllRanges(),t.classList.remove("copy-true")},u=function(){this.classList.toggle("expand-done")},g=function(e){const t=e.target.classList;t.contains("expand")?(e=>{e.classList.toggle("closed")})(this):t.contains("copy-button")&&m(this)},h=(e,t,o)=>{const s=document.createDocumentFragment();if(c){const t=document.createElement("div");t.className=`highlight-tools ${l}`,t.innerHTML='<i class="solitude st-arrow-down expand"></i>'+e+d,utils.addEventListenerPjax(t,"click",g),s.appendChild(t)}if(n&&t.offsetHeight>n+30){const e=document.createElement("div");e.className="code-expand-btn",e.innerHTML=r,utils.addEventListenerPjax(e,"click",u),s.appendChild(e)}"hl"===o?t.insertBefore(s,t.firstChild):t.parentNode.insertBefore(s,t)};i?a.forEach((e=>{const t=`<div class="code-lang">${e.getAttribute("data-language")||"Code"}</div>`;utils.wrap(e,"figure",{class:"highlight"}),h(t,e)})):a.forEach((e=>{let t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code");h(`<div class="code-lang">${t}</div>`,e,"hl")}))};class toc{static init(){const e=document.getElementById("card-toc");if(!e||!e.querySelector(".toc a"))return void(e.style.display="none");const t=document.querySelectorAll(".toc a");t.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),utils.scrollToDest(utils.getEleTop(document.getElementById(decodeURI(("toc-text"===e.target.className?e.target.parentNode.hash:e.target.hash).replace("#","")))),300)}))})),this.active(t)}static active(e){const t=document.getElementById("article-container"),o=document.getElementById("toc-content"),n=t.querySelectorAll("h1,h2,h3,h4,h5,h6");let s="";function i(t){if(0===t)return!1;let i="";if(n.forEach((function(e,o){t>utils.getEleTop(e)-80&&(i=o)})),s===i)return;s=i,document.querySelectorAll(".toc .active").forEach((e=>{e.classList.remove("active")}));const c=e[s];if(c){let t=e[s].parentNode;for(c.classList.add("active"),function(e){const t=e.getBoundingClientRect().top,n=o.scrollTop;t>document.documentElement.clientHeight-100&&(o.scrollTop=n+150),t<100&&(o.scrollTop=n-150)}(c);!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}window.tocScrollFn=utils.throttle((function(){i(window.scrollY||document.documentElement.scrollTop)}),100),window.addEventListener("scroll",tocScrollFn)}}class tabs{static init(){this.clickFnOfTabs(),this.backToTop()}static clickFnOfTabs(){document.querySelectorAll("#article-container .tab > button").forEach((e=>{e.addEventListener("click",(function(e){const t=this,o=t.parentNode;if(!o.classList.contains("active")){const e=o.parentNode.nextElementSibling,n=utils.siblings(o,".active")[0];n&&n.classList.remove("active"),o.classList.add("active");const s=t.getAttribute("data-href").replace("#","");[...e.children].forEach((e=>{e.id===s?e.classList.add("active"):e.classList.remove("active")}))}}))}))}static backToTop(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((e=>{e.addEventListener("click",(function(){utils.scrollToDest(utils.getEleTop(e.parentElement.parentElement.parentNode),300)}))}))}static lureAddListener(){if(!GLOBAL_CONFIG.lure)return;let e=document.title;document.addEventListener("visibilitychange",(()=>{const{lure:t}=GLOBAL_CONFIG;"hidden"===document.visibilityState?document.title=t.jump:"visible"===document.visibilityState&&(document.title=t.back,setTimeout((()=>{document.title=e}),2e3))}))}static expireAddListener(){const{expire:e}=GLOBAL_CONFIG;if(!e)return;const t=document.querySelector(".post-meta-date time");if(!t)return;const o=Math.ceil(((new Date).getTime()-new Date(t.getAttribute("datetime")).getTime())/1e3/60/60/24);if(e.time>o)return;const n=document.createElement("div");n.className="expire",n.innerHTML=`<i class="solitude st-circle-exclamation-solid"></i>${e.text_prev}${-(e.time-o)}${e.text_next}`;document.getElementById("article-container").insertAdjacentElement("top"===e.position?"afterbegin":"beforeend",n)}}window.refreshFn=()=>{const{is_home:e,is_page:t,page:o,is_post:n}=PAGE_CONFIG,{runtime:s,lazyload:i,lightbox:c,randomlink:l,covercolor:a,post_ai:d,lure:r,expire:m}=GLOBAL_CONFIG,u=(e||n?".post-meta-date time":".datatime")+", .webinfo-item time";document.body.setAttribute("data-type",o),sco.changeTimeFormat(document.querySelectorAll(u)),s&&sco.addRuntime(),[scrollFn,sidebarFn,sco.hideCookie,sco.addPhotoFigcaption,sco.setTimeState,sco.tagPageActive,sco.categoriesBarActive,sco.listenToPageInputPress,sco.addNavBackgroundInit,sco.refreshWaterFall].forEach((e=>e())),i.enable&&utils.lazyloadImg(),c&&utils.lightbox(document.querySelectorAll("#article-container img:not(.flink-avatar,.gallery-group img)")),l&&randomLinksList(),d&&n&&efu_ai.init(),sco.switchComments(),initObserver(),e&&(showTodayCard(),"function"==typeof updatePostsBasedOnComments&&updatePostsBasedOnComments()),(n||t)&&(addHighlight(),tabs.init()),n&&m&&tabs.expireAddListener(),a.enable&&coverColor(),PAGE_CONFIG.toc&&toc.init(),r&&tabs.lureAddListener()},document.addEventListener("DOMContentLoaded",(()=>{[addCopyright,sco.initConsoleState,window.refreshFn,asideStatus,()=>window.onscroll=percent].forEach((e=>e()))})),document.addEventListener("visibilitychange",(()=>{document.hidden&&(sco.wasPageHidden=!0)})),window.onkeydown=e=>{const{keyCode:t,ctrlKey:o,shiftKey:n}=e;(123===t||o&&n&&67===t)&&utils.snackbarShow(GLOBAL_CONFIG.lang.f12,!1,3e3),27===t&&sco.hideConsole()},document.addEventListener("copy",(()=>{utils.snackbarShow(GLOBAL_CONFIG.lang.copy.success,!1,3e3)}));