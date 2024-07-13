(()=>{"use strict";var e={7825:(e,t,r)=>{r(7280),r(5363),r(71);var o=r(8880),n=r(9592),s=r(3673);function a(e,t,r,o,n,a){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}var i=r(7874);const u=(0,s.aZ)({name:"App",mounted(){const e=(0,i.oR)();e.dispatch("handleAuthStateChanged")}});u.render=a;const l=u;var c=r(6852),d=r(7083),f=r(9582);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(17)]).then(r.bind(r,17)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(803)]).then(r.bind(r,1803))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],p=h,g=(0,d.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("")});return t}));async function m(e,t){const o="function"===typeof c.default?await(0,c.default)({}):c.default,{storeKey:s}=await Promise.resolve().then(r.bind(r,6852)),a="function"===typeof g?await g({store:o}):g;o.$router=a;const i=e(l);return i.use(n.Z,t),{app:i,store:o,storeKey:s,router:a}}var v=r(7760),b=r(6249),y=r(6417);const C={config:{},iconSet:v.Z,plugins:{Loading:b.Z,Notify:y.Z}},w="";async function A({app:e,router:t,store:r,storeKey:o},n){let s=!1;const a=e=>{s=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},i=window.location.href.replace(window.location.origin,"");for(let l=0;!1===s&&l<n.length;l++)try{await n[l]({app:e,router:t,store:r,ssrContext:null,redirect:a,urlPath:i,publicPath:w})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==s&&(e.use(t),e.use(r,o),e.mount("#q-app"))}m(o.ri,C).then((e=>Promise.all([Promise.resolve().then(r.bind(r,2490))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));A(e,r)}))))},2490:(e,t,r)=>{r.r(t),r.d(t,{firebaseAuth:()=>a,firebaseDb:()=>i,pGoogle:()=>u});var o=r(5720);r(8849),r(4479),r(7758);const n={apiKey:"AIzaSyDXlfHiMaX5BmCmfnHwS9E14_ohGvFmO3Q",authDomain:"crossroads-f170f.firebaseapp.com",databaseURL:"https://crossroads-f170f-default-rtdb.firebaseio.com",projectId:"crossroads-f170f",storageBucket:"crossroads-f170f.appspot.com",messagingSenderId:"818271246635",appId:"1:818271246635:web:b7e4b9f4e0d86b6977cd6e",measurementId:"G-KEFZLL5RPG"};let s=o.Z.initializeApp(n),a=s.auth(),i=s.database(),u=new o.Z.auth.GoogleAuthProvider},6852:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var o={};r.r(o),r.d(o,{getCards:()=>l,getCounter:()=>h,getCurrentUser:()=>p,getDefaultFilter:()=>c,getFilter:()=>d,getFilteredCards:()=>f,isUserLoggedIn:()=>g});var n={};r.r(n),r.d(n,{setCards:()=>m,setCounter:()=>v,setCurrentUser:()=>b,setFilter:()=>y});var s={};r.r(s),r.d(s,{filterAddAll:()=>O,handleAuthStateChanged:()=>P,retrieveCards:()=>j,showNextCard:()=>k,showPrevCard:()=>S,shuffleCrossroads:()=>E,toggleFilter:()=>x,userLogin:()=>U,userLogout:()=>D});var a=r(7083),i=r(7874);function u(){return{cards:{},counter:0,currentUser:{},filter:[]}}r(71);function l(e){return e.cards}function c(e){let t=[];for(const[r,o]of Object.entries(e.cards))o.default&&t.push(r);return t}function d(e){return e.filter}function f(e){let t=e.cards,r=e.filter,o=[];for(const n of r)o.push(t[n]);return o}function h(e){return e.counter}function p(e){return e.currentUser}function g(e){return!!e.currentUser.userId}function m(e,t){e.cards=t}function v(e,t){e.counter=t}function b(e,t){e.currentUser=t}function y(e,t){e.filter=t}var C=r(2490),w=r(6249),A=(r(6417),r(8719));function F(e){let t,r=e.length;while(0!==r)t=Math.floor(Math.random()*r),r--,[e[r],e[t]]=[e[t],e[r]];return e}function O({getters:e,commit:t}){const r=e.getCards;t("setFilter",Object.keys(r))}function P({commit:e,dispatch:t,getters:r}){t("retrieveCards"),C.firebaseAuth.onAuthStateChanged((t=>{if(t){const o=C.firebaseAuth.currentUser.uid;C.firebaseDb.ref("users/"+o).once("value",(n=>{let s=n.val();s?e("setFilter",s.filter):(C.firebaseDb.ref("users/"+o).set({email:t.email,filter:r.getDefaultFilter}),e("setFilter",r.getDefaultFilter)),e("setCurrentUser",{email:t.email,userId:o})}))}else e("setCurrentUser",{})}))}async function j({commit:e,dispatch:t,getters:r}){w.Z.show({spinner:A.Z}),await C.firebaseDb.ref("cards").once("value",(o=>{let n=o.val();e("setCards",n),e("setFilter",r.getDefaultFilter),t("shuffleCrossroads")})),w.Z.hide()}function k({getters:e,commit:t}){const r=e.getFilter.length-1,o=e.getCounter;o<r&&t("setCounter",o+1)}function S({getters:e,commit:t}){const r=e.getCounter;r>0&&t("setCounter",r-1)}function E({getters:e,commit:t}){const r=F([...e.getFilter]);t("setFilter",r),t("setCounter",0)}function x({getters:e,commit:t},{value:r,key:o}){let n=[...e.getFilter];const s=n.indexOf(o);r&&-1===s?n.push(o):r||-1===s||n.splice(s,1),t("setFilter",n);const a=e.getCurrentUser.userId;a&&C.firebaseDb.ref("users/"+a).update({filter:n})}function U({getters:e}){C.firebaseAuth.signInWithRedirect(C.pGoogle).then((()=>{C.firebaseAuth.getRedirectResult().then((e=>{console.error("result:",e)})).catch((e=>{console.error(e)}))}))}function D({},e){C.firebaseAuth.signOut()}const L=(0,a.h)((function(){const e=(0,i.MT)({modules:{},state:u(),getters:o,mutations:n,actions:s,strict:!1});return e}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,s)=>{if(!o){var a=1/0;for(l=0;l<e.length;l++){for(var[o,n,s]=e[l],i=!0,u=0;u<o.length;u++)(!1&s||a>=s)&&Object.keys(r.O).every((e=>r.O[e](o[u])))?o.splice(u--,1):(i=!1,s<a&&(a=s));i&&(e.splice(l--,1),t=n())}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[o,n,s]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{17:"806433cd",193:"0a7308e8",803:"a8f3eba0"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{17:"0bbf8a20",736:"0ab00590",803:"bfa45efa"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="crossroads:";r.l=(o,n,s,a)=>{if(e[o])e[o].push(n);else{var i,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+s),i.src=o),e[o]=[n];var f=(t,r)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=s=>{if(n.onerror=n.onload=null,"load"===s.type)r();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,n.parentNode.removeChild(n),o(u)}};return n.onerror=n.onload=s,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===t))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){n=a[o],s=n.getAttribute("data-href");if(s===e||s===t)return n}},o=o=>new Promise(((n,s)=>{var a=r.miniCssF(o),i=r.p+a;if(t(a,i))return n();e(o,i,n,s)})),n={143:0};r.f.miniCss=(e,t)=>{var r={17:1,803:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var s=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=s);var a=r.p+r.u(t),i=new Error,u=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,n[1](i)}};r.l(a,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,s,[a,i,u]=o,l=0;for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(u)var c=u(r);for(t&&t(o);l<a.length;l++)s=a[l],r.o(e,s)&&e[s]&&e[s][0](),e[a[l]]=0;return r.O(c)},o=self["webpackChunkcrossroads"]=self["webpackChunkcrossroads"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(7825)));o=r.O(o)})();