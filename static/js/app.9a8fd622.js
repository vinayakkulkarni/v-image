(function(e){function t(t){for(var n,o,c=t[0],l=t[1],u=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function c(e){return l.p+"static/js/"+({GithubIcon:"GithubIcon"}[e]||e)+"."+{GithubIcon:"bca86e5f"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={GithubIcon:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({GithubIcon:"GithubIcon"}[e]||e)+"."+{GithubIcon:"b8bfa79b"}[e]+".css",a=l.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===n||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],s=u.getAttribute("data-href");if(s===n||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full h-full relative"},[r("github-icon"),r("v-image",{attrs:{wrapper:"flex justify-center items-center content-center w-full h-full","place-holder":e.placeholder,uploaded:e.uploaded},on:{"load-image":e.localVariable,"remove-image":e.removeVariable}}),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"absolute bottom-0 right-0 pr-2"},[r("a",{staticClass:"gray-400",attrs:{href:"https://www.netlify.com","aria-label":"View source on GitHub",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://www.netlify.com/img/global/badges/netlify-color-accent.svg",alt:"Deploys by Netlify"}})])])}],i=(r("d3b7"),r("a045")),c={name:"VImageDemo",components:{vImage:i["a"],GithubIcon:function(){return r.e("GithubIcon").then(r.bind(null,"f017"))}},data:function(){return{placeholder:{image:"https://picsum.photos/1000/1000",alt:"Placeholder Image",imgClass:"block rounded object-contain object-center max-w-xs",btnClass:"block btn cursor-pointer text-center",wrapper:"p-4 max-w-xs w-full border border-gray-400 border-dotted",form:{name:"myImage",label:"Select an Image",accept:"image/jpg"}},uploaded:{wrapper:"p-4 max-w-xs w-full border border-gray-400 border-dotted",alt:"User uploaded dope image",imgClass:"block rounded object-contain object-center max-w-xs",btnClass:"block btn cursor-pointer text-center w-full",removeBtnText:"Remove image"},image:""}},methods:{localVariable:function(e){this.image=e},removeVariable:function(){this.image=null}}},l=c,u=(r("034f"),r("2877")),s=Object(u["a"])(l,o,a,!1,null,null,null),f=s.exports,d=r("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.9a8fd622.js.map