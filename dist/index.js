(()=>{"use strict";var e,r,n={534:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),r.push(s))}},r}},759:e=>{e.exports=function(e){return e[1]}},723:(e,r,n)=>{n(607),document.write('<div class="color-text">hellowebpack</div>')},762:(e,r,n)=>{n.r(r),n.d(r,{default:()=>c});var t=n(759),o=n.n(t),i=n(534),a=n.n(i)()(o());a.push([e.id,".color-text {\n  font-size: 20px;\n  color: red;\n}\n",""]);const c=a},607:(e,r,n)=>{var t=n(624),o=n.n(t),i=n(990),a=n.n(i),c=n(892),d=n.n(c),u=n(359),s=n.n(u),l=n(716),f=n.n(l),p=n(230),h=n.n(p),v=n(762),m={};m.styleTagTransform=h(),m.setAttributes=s(),m.insert=d().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f();var y=o()(v.default,m);if(!v.default.locals||e.hot.invalidate){var g=!v.default.locals,b=g?v:v.default.locals;e.hot.accept(762,(r=>{v=n(762),function(e,r,n){if(!e&&r||e&&!r)return!1;var t;for(t in e)if((!n||"default"!==t)&&e[t]!==r[t])return!1;for(t in r)if(!(n&&"default"===t||e[t]))return!1;return!0}(b,g?v:v.default.locals,g)?(b=g?v:v.default.locals,y(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){y()})),v.default&&v.default.locals&&v.default.locals},624:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],u=t.base?d[0]+t.base:d[0],s=i[u]||0,l="".concat(u," ").concat(s);i[u]=s+1;var f=n(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)r[f].references++,r[f].updater(p);else{var h=o(p,t);t.byIndex=c,r.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);r[c].references--}for(var d=t(e,o),u=0;u<i.length;u++){var s=n(i[u]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}i=d}}},892:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},716:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},359:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},990:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},230:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},t={};function o(e){var r=t[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var i=t[e]={id:e,exports:{}};try{var a={id:e,module:i,factory:n[e],require:o};o.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}o.m=n,o.c=t,o.i=[],o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"index."+o.h()+".hot-update.json",o.h=()=>"bce550678346bb5afbee",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="webpack-first:",o.l=(n,t,i,a)=>{if(e[n])e[n].push(t);else{var c,d;if(void 0!==i)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+i){c=l;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+i),c.src=n),e[n]=[t];var f=(r,t)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),d&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t={},i=o.c,a=[],c=[],d="idle",u=0,s=[];function l(e){d=e;for(var r=[],n=0;n<c.length;n++)r[n]=c[n].call(null,e);return Promise.all(r)}function f(){0==--u&&l("ready").then((function(){if(0===u){var e=s;s=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return l("check").then(o.hmrM).then((function(n){return n?l("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,i){return o.hmrC[i](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):l("ready").then((function(){return t}))},0===u?r():new Promise((function(e){s.push((function(){e(r())}))}));var r}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,c=l("apply"),d=function(e){a||(a=e)},u=[];return t.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)u.push(r[n])}})),Promise.all([i,c]).then((function(){return a?l("fail").then((function(){throw a})):n?v(e).then((function(e){return u.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return u}))}))}function m(){if(n)return r||(r=[]),Object.keys(o.hmrI).forEach((function(e){n.forEach((function(n){o.hmrI[e](n,r)}))})),n=void 0,!0}o.hmrD=t,o.i.push((function(s){var v,m,y,g,b=s.module,w=function(r,n){var t=i[n];if(!t)return r;var o=function(o){if(t.hot.active){if(i[o]){var c=i[o].parents;-1===c.indexOf(n)&&c.push(n)}else a=[n],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+n),a=[];return r(o)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&"e"!==s&&Object.defineProperty(o,s,c(s));return o.e=function(e){return function(e){switch(d){case"ready":l("prepare");case"prepare":return u++,e.then(f,f),e;default:return e}}(r.e(e))},o}(s.require,s.id);b.hot=(v=s.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){a=m.parents.slice(),e=y?void 0:v,o(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,r)})),l("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:t[v]},e=void 0,g),b.parents=a,b.children=[],a=[],s.require=w})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e,r,n,t,i,a=o.hmrS_jsonp=o.hmrS_jsonp||{826:0},c={};function d(r,n){return e=n,new Promise(((e,n)=>{c[r]=e;var t=o.p+o.hu(r),i=new Error;o.l(t,(e=>{if(c[r]){c[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+r+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function u(e){function c(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),a=i.id,c=i.chain,u=o.c[a];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(u.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var s=0;s<u.parents.length;s++){var l=u.parents[s],f=o.c[l];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([l]),moduleId:a,parentId:l};-1===r.indexOf(l)&&(f.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),d(n[l],[a])):(delete n[l],r.push(l),t.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,r=void 0;var u={},s=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(o.o(n,p)){var h,v=n[p],m=!1,y=!1,g=!1,b="";switch((h=v?c(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in l[p]=v,d(s,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(u[p]||(u[p]=[]),d(u[p],h.outdatedDependencies[p]));g&&(d(s,[h.moduleId]),l[p]=f)}n=void 0;for(var w,E=[],_=0;_<s.length;_++){var I=s[_],x=o.c[I];x&&(x.hot._selfAccepted||x.hot._main)&&l[I]!==f&&!x.hot._selfInvalidated&&E.push({module:I,require:x.hot._requireSelf,errorHandler:x.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete a[e]})),t=void 0;for(var r,n=s.slice();n.length>0;){var i=n.pop(),c=o.c[i];if(c){var d={},l=c.hot._disposeHandlers;for(_=0;_<l.length;_++)l[_].call(null,d);for(o.hmrD[i]=d,c.hot.active=!1,delete o.c[i],delete u[i],_=0;_<c.children.length;_++){var f=o.c[c.children[_]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in u)if(o.o(u,p)&&(c=o.c[p]))for(w=u[p],_=0;_<w.length;_++)r=w[_],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(r){for(var n in l)o.o(l,n)&&(o.m[n]=l[n]);for(var t=0;t<i.length;t++)i[t](o);for(var a in u)if(o.o(u,a)){var c=o.c[a];if(c){w=u[a];for(var d=[],f=[],p=[],h=0;h<w.length;h++){var v=w[h],m=c.hot._acceptedDependencies[v],y=c.hot._acceptedErrorHandlers[v];if(m){if(-1!==d.indexOf(m))continue;d.push(m),f.push(y),p.push(v)}}for(var g=0;g<d.length;g++)try{d[g].call(null,w)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:a,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:a,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<E.length;b++){var _=E[b],I=_.module;try{_.require(I)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n,{moduleId:I,module:o.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return s}}}self.webpackHotUpdatewebpack_first=(r,t,a)=>{for(var d in t)o.o(t,d)&&(n[d]=t[d],e&&e.push(d));a&&i.push(a),c[r]&&(c[r](),c[r]=void 0)},o.hmrI.jsonp=function(e,r){n||(n={},i=[],t=[],r.push(u)),o.o(n,e)||(n[e]=o.m[e])},o.hmrC.jsonp=function(e,c,s,l,f,p){f.push(u),r={},t=c,n=s.reduce((function(e,r){return e[r]=!1,e}),{}),i=[],e.forEach((function(e){o.o(a,e)&&void 0!==a[e]?(l.push(d(e,p)),r[e]=!0):r[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,n){r&&o.o(r,e)&&!r[e]&&(n.push(d(e)),r[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o.nc=void 0,o(723)})();