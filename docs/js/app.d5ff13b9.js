(function(e){function n(n){for(var o,a,r=n[0],d=n[1],f=n[2],i=0,l=[];i<r.length;i++)a=r[i],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);h&&h(n);while(l.length)l.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,a=1;a<t.length;a++){var r=t[a];0!==c[r]&&(o=!1)}o&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var o={},a={app:0},c={app:0},u=[];function r(e){return d.p+"js/"+({"coming-soon.":"coming-soon.",landing:"landing","not-found":"not-found"}[e]||e)+"."+{"chunk-4352e687":"31edabea","chunk-7ef74b4e":"5c16477c","coming-soon.":"660dc1b2",landing:"d3dd6b0a","not-found":"13689728","chunk-2d0a404a":"a5cda77c","chunk-2d0aba7a":"ac1bc9c0","chunk-2d0b16de":"5125574a","chunk-2d0b6e9a":"c48691e7","chunk-2d0b72ca":"4293df8e","chunk-2d0ba4db":"06412cc8","chunk-2d0bd822":"6d534808","chunk-2d0c0dfa":"d759b771","chunk-2d0e59ce":"0d95d9f3","chunk-2d0e883d":"b31ab15e","chunk-2d0e9bc0":"5f9421f1","chunk-2d0e9d03":"e078cd0c","chunk-2d0f0fc4":"f3a61a06","chunk-2d0f0fff":"e614b47a","chunk-2d208ad8":"d62c7f8b","chunk-2d20f518":"e6744ec5","chunk-2d20fb25":"f2f56ccf","chunk-2d21404d":"bef94f68","chunk-2d21d868":"788d6f49"}[e]+".js"}function d(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-4352e687":1,"chunk-7ef74b4e":1,"coming-soon.":1,landing:1,"not-found":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({"coming-soon.":"coming-soon.",landing:"landing","not-found":"not-found"}[e]||e)+"."+{"chunk-4352e687":"40155f35","chunk-7ef74b4e":"40155f35","coming-soon.":"2967fbcb",landing:"a8361e6d","not-found":"898eaff3","chunk-2d0a404a":"31d6cfe0","chunk-2d0aba7a":"31d6cfe0","chunk-2d0b16de":"31d6cfe0","chunk-2d0b6e9a":"31d6cfe0","chunk-2d0b72ca":"31d6cfe0","chunk-2d0ba4db":"31d6cfe0","chunk-2d0bd822":"31d6cfe0","chunk-2d0c0dfa":"31d6cfe0","chunk-2d0e59ce":"31d6cfe0","chunk-2d0e883d":"31d6cfe0","chunk-2d0e9bc0":"31d6cfe0","chunk-2d0e9d03":"31d6cfe0","chunk-2d0f0fc4":"31d6cfe0","chunk-2d0f0fff":"31d6cfe0","chunk-2d208ad8":"31d6cfe0","chunk-2d20f518":"31d6cfe0","chunk-2d20fb25":"31d6cfe0","chunk-2d21404d":"31d6cfe0","chunk-2d21d868":"31d6cfe0"}[e]+".css",c=d.p+o,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var f=u[r],i=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(i===o||i===c))return n()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){f=l[r],i=f.getAttribute("data-href");if(i===o||i===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var o=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete a[e],h.parentNode.removeChild(h),t(u)},h.href=c;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var u=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=u);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=r(e);var l=new Error;f=function(n){i.onerror=i.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,t[1](l)}c[e]=void 0}};var h=setTimeout((function(){f({type:"timeout",target:i})}),12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=o,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)d.d(t,o,function(n){return e[n]}.bind(null,o));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var h=i;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),a=t("5f5b"),c=t("b1e0"),u=t("98c9"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t(e.activeLayout,{tag:"component"})],1)},d=[],f=t("5530"),i=(t("d3b7"),t("3ca3"),t("ddb0"),t("2f62")),l={name:"App",components:{TheBaseLayout:function(){return t.e("chunk-4352e687").then(t.bind(null,"f49f"))},TheNavLayout:function(){return t.e("chunk-7ef74b4e").then(t.bind(null,"8327"))}},computed:Object(f["a"])({},Object(i["b"])("app",["activeLayout"]))},h=l,s=t("2877"),p=Object(s["a"])(h,r,d,!1,null,null,null),b=p.exports,m=(t("f9e3"),t("2dd8"),t("d81d"),t("8c4f")),g={activeLayout:"",layouts:{theBaseLayout:"the-base-layout",theNavLayout:"the-nav-layout"}},k={setActiveLayout:function(e,n){e.activeLayout=n}},v={},y={namespaced:!0,state:g,mutations:k,actions:v};o["default"].use(i["a"]);var L=new i["a"].Store({modules:{app:y}}),w=L;o["default"].use(m["a"]);var O=[{path:"/",redirect:{name:"ComingSoon"}},{path:"/coming-soon",name:"ComingSoon",component:function(){return t.e("coming-soon.").then(t.bind(null,"7bb1"))},meta:{layout:"theBaseLayout"}},{path:"/landing",name:"Landing",component:function(){return t.e("landing").then(t.bind(null,"bede"))},meta:{layout:"theNavLayout"}},{path:"*",name:"NotFound",component:function(){return t.e("not-found").then(t.bind(null,"9703"))},meta:{layout:"theBaseLayout"}}],j=function(e,n,t){var o=w.state.app,a=o.activeLayout,c=o.layouts;e.matched.map((function(e){var n=e.meta,t=n.layout;return t&&a!==t&&w.commit("app/setActiveLayout",c[n.layout]),n})),t()},S=new m["a"]({mode:"history",routes:O,scrollBehavior:function(e){if(e.hash)return{selector:e.hash,offset:{x:0,y:60},behavior:"smooth"}}});S.beforeEach(j);var E=S;o["default"].config.productionTip=!1,o["default"].use(a["a"]),o["default"].use(c["a"]),o["default"].use(u["a"]),new o["default"]({router:E,store:w,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.d5ff13b9.js.map