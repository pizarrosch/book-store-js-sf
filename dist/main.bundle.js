/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t={"./src/slider.js":(e,t,r)=>{r.r(t),r.d(t,{setSlider:()=>s});const n=[r("./assets/banner.png"),r("./assets/banner-2.png"),r("./assets/banner-3.png")];function s(){let e=document.querySelector(".banner"),t=document.querySelector(".dots-container");n.forEach(((t,r)=>{let s=`<div class="image n${r} ${0===r?"active":"inactive"}" style="background-image: url(${n[r]})" data-index='${r}'></div>`;e.innerHTML+=s})),console.log(e),n.forEach(((e,r)=>{let n=`<div class="dot n${r} ${0===r?"violet":""}" data-index='${r}'></div>`;t.innerHTML+=n})),t.querySelectorAll(".dot").forEach((r=>{r.addEventListener("click",(function(){var r;r=this.dataset.index,e.querySelector(".active").classList.add("inactive"),e.querySelector(".active").classList.remove("active"),e.querySelector(".n"+r).classList.add("active"),e.querySelector(".active").classList.remove("inactive"),t.querySelector(".violet").classList.remove("violet"),this.classList.add("violet")}))}))}},"./assets/banner-2.png":(e,t,r)=>{e.exports=r.p+"./assets/banner-2.png"},"./assets/banner-3.png":(e,t,r)=>{e.exports=r.p+"./assets/banner-3.png"},"./assets/banner.png":(e,t,r)=>{e.exports=r.p+"./assets/banner.png"}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"./"+e+".bundle.js",n.miniCssF=e=>e+".css",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},n.l=(t,r,s,a)=>{if(e[t])e[t].push(r);else{var o,i;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t){o=d;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=t),e[t]=[r];var u=(r,n)=>{o.onerror=o.onload=null,clearTimeout(p);var s=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((e=>e(n))),r)return r(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),i&&document.head.appendChild(o)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{if("undefined"!=typeof document){var e={main:0};n.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{src_index_scss:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var s=n.miniCssF(e),a=n.p+s;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var s=(o=r[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var o;if((s=(o=a[n]).getAttribute("data-href"))===e||s===t)return o}})(s,a))return t();((e,t,r,n,s)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,a.parentNode&&a.parentNode.removeChild(a),s(l)}},a.href=t,document.head.appendChild(a)})(e,a,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={main:0};n.f.j=(t,r)=>{var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var a=new Promise(((r,n)=>s=e[t]=[r,n]));r.push(s[2]=a);var o=n.p+n.u(t),i=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,s[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var s,a,[o,i,l]=r,c=0;if(o.some((t=>0!==e[t]))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);l&&l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s={};(()=>{n.r(s);var e=n("./src/slider.js");n.e("src_index_scss").then(n.bind(n,"./src/index.scss")),(0,e.setSlider)()})()})();
//# sourceMappingURL=main.bundle.js.map