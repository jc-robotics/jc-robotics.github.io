import{S as Ye,i as We,s as Xe,a as Ze,e as P,c as Qe,b as C,g as W,t as N,d as X,f as U,h as q,j as xe,o as Re,k as et,l as tt,m as nt,n as Ee,p as G,q as rt,r as at,u as ot,v as B,w as se,x as F,y as J,z as fe}from"./chunks/index-c1eee52a.js";import{g as Be,f as Fe,s as Y,a as Oe,b as st,i as it}from"./chunks/singletons-f2c89a2f.js";import{_ as K}from"./chunks/preload-helper-28b7b303.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){return r.split("%25").map(decodeURI).join("%25")}function ft(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function dt(r,e){const n=new URL(r);for(const o of ut){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return pt(n),n}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ht="/__data.json";function _t(r){return r.replace(/\/$/,"")+ht}function mt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:e?.method||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ae.delete(o)}return he(r,e)};const ae=new Map;function gt(r,e){const n=Me(r,e),o=document.querySelector(n);if(o?.textContent){const{body:a,...u}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ae.set(n,{body:a,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,u))}return he(r,e)}function wt(r,e,n){if(ae.size>0){const o=Me(r,n),a=ae.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);ae.delete(o)}}return he(e,n)}function Me(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e?.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${mt(e.body)}"]`),o}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(r){const e=[],n=[],o=[];let a=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Et(r).map((t,l,f)=>{const d=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(g)return e.push(g[1]),n.push(g[2]),o.push(!1),"(?:/(.*))?";const y=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(y)return e.push(y[1]),n.push(y[2]),o.push(!0),"(?:/([^/]+))?";const A=l===f.length-1;if(!d)return;const M=d.split(/\[(.+?)\](?!\])/).map((R,z)=>{if(z%2){const T=yt.exec(R);if(!T)throw new Error(`Invalid param: ${R}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,Z,ie,ee]=T;return e.push(ie),n.push(ee),o.push(!!x),Z?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return A&&R.includes(".")&&(a=!1),R.normalize().replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("");return"/"+M}).join("")}${a?"/?":""}$`),names:e,types:n,optional:o}}function vt(r){return!/^\([^)]+\)$/.test(r)}function Et(r){return r.slice(1).split("/").filter(vt)}function kt(r,{names:e,types:n,optional:o},a){const u={};for(let t=0;t<e.length;t+=1){const l=e[t],f=n[t];let d=r[t+1];if(d||!o[t]){if(f){const g=a[f];if(!g)throw new Error(`Missing "${f}" param matcher`);if(!g(d))return}u[l]=d??""}}return u}function $t(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([l,[f,d,g]])=>{const{pattern:y,names:A,types:$,optional:M}=bt(l),R={id:l,exec:z=>{const T=y.exec(z);if(T)return kt(T,{names:A,types:$,optional:M},o)},errors:[1,...g||[]].map(z=>r[z]),layouts:[0,...d||[]].map(t),leaf:u(f)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function u(l){const f=l<0;return f&&(l=~l),[f,r[l]]}function t(l){return l===void 0?l:[a.has(l),r[l]]}}function Rt(r){let e,n,o;var a=r[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=P()},l(t){e&&se(e.$$.fragment,t),n=P()},m(t,l){e&&F(e,t,l),C(t,n,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&2&&(f.form=t[1]),a!==(a=t[0][0])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{J(d,1)}),X()}a?(e=new a(u(t)),B(e.$$.fragment),U(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&U(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function Ot(r){let e,n,o;var a=r[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[jt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=P()},l(t){e&&se(e.$$.fragment,t),n=P()},m(t,l){e&&F(e,t,l),C(t,n,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&1051&&(f.$$scope={dirty:l,ctx:t}),a!==(a=t[0][0])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{J(d,1)}),X()}a?(e=new a(u(t)),B(e.$$.fragment),U(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&U(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function St(r){let e,n,o;var a=r[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=P()},l(t){e&&se(e.$$.fragment,t),n=P()},m(t,l){e&&F(e,t,l),C(t,n,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&2&&(f.form=t[1]),a!==(a=t[0][1])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{J(d,1)}),X()}a?(e=new a(u(t)),B(e.$$.fragment),U(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&U(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function It(r){let e,n,o;var a=r[0][1];function u(t){return{props:{data:t[3],$$slots:{default:[Lt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=P()},l(t){e&&se(e.$$.fragment,t),n=P()},m(t,l){e&&F(e,t,l),C(t,n,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&1043&&(f.$$scope={dirty:l,ctx:t}),a!==(a=t[0][1])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{J(d,1)}),X()}a?(e=new a(u(t)),B(e.$$.fragment),U(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&U(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function Lt(r){let e,n,o;var a=r[0][2];function u(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=new a(u(r))),{c(){e&&B(e.$$.fragment),n=P()},l(t){e&&se(e.$$.fragment,t),n=P()},m(t,l){e&&F(e,t,l),C(t,n,l),o=!0},p(t,l){const f={};if(l&16&&(f.data=t[4]),l&2&&(f.form=t[1]),a!==(a=t[0][2])){if(e){W();const d=e;N(d.$$.fragment,1,0,()=>{J(d,1)}),X()}a?(e=new a(u(t)),B(e.$$.fragment),U(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&U(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function jt(r){let e,n,o,a;const u=[It,St],t=[];function l(f,d){return f[0][2]?0:1}return e=l(r),n=t[e]=u[e](r),{c(){n.c(),o=P()},l(f){n.l(f),o=P()},m(f,d){t[e].m(f,d),C(f,o,d),a=!0},p(f,d){let g=e;e=l(f),e===g?t[e].p(f,d):(W(),N(t[g],1,1,()=>{t[g]=null}),X(),n=t[e],n?n.p(f,d):(n=t[e]=u[e](f),n.c()),U(n,1),n.m(o.parentNode,o))},i(f){a||(U(n),a=!0)},o(f){N(n),a=!1},d(f){t[e].d(f),f&&q(o)}}}function Je(r){let e,n=r[6]&&ze(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=nt(e);n&&n.l(a),a.forEach(q),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(o,a){C(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=ze(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&q(e),n&&n.d()}}}function ze(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,o){C(n,e,o)},p(n,o){o&128&&ot(e,n[7])},d(n){n&&q(e)}}}function At(r){let e,n,o,a,u;const t=[Ot,Rt],l=[];function f(g,y){return g[0][1]?0:1}e=f(r),n=l[e]=t[e](r);let d=r[5]&&Je(r);return{c(){n.c(),o=Ze(),d&&d.c(),a=P()},l(g){n.l(g),o=Qe(g),d&&d.l(g),a=P()},m(g,y){l[e].m(g,y),C(g,o,y),d&&d.m(g,y),C(g,a,y),u=!0},p(g,[y]){let A=e;e=f(g),e===A?l[e].p(g,y):(W(),N(l[A],1,1,()=>{l[A]=null}),X(),n=l[e],n?n.p(g,y):(n=l[e]=t[e](g),n.c()),U(n,1),n.m(o.parentNode,o)),g[5]?d?d.p(g,y):(d=Je(g),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(g){u||(U(n),u=!0)},o(g){N(n),u=!1},d(g){l[e].d(g),g&&q(o),d&&d.d(g),g&&q(a)}}}function Pt(r,e,n){let{stores:o}=e,{page:a}=e,{components:u}=e,{form:t}=e,{data_0:l=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;xe(o.page.notify);let g=!1,y=!1,A=null;return Re(()=>{const $=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,A=document.title||"untitled page"))});return n(5,g=!0),$}),r.$$set=$=>{"stores"in $&&n(8,o=$.stores),"page"in $&&n(9,a=$.page),"components"in $&&n(0,u=$.components),"form"in $&&n(1,t=$.form),"data_0"in $&&n(2,l=$.data_0),"data_1"in $&&n(3,f=$.data_1),"data_2"in $&&n(4,d=$.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[u,t,l,f,d,g,y,A,o,a]}class Nt extends Ye{constructor(e){super(),We(this,e,Pt,At,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ut={},_e=[()=>K(()=>import("./chunks/0-86a5179f.js"),["chunks/0-86a5179f.js","chunks/_layout-1daba58d.js","components/pages/_layout.svelte-196203be.js","assets/_layout-d0f5e456.css","chunks/index-c1eee52a.js","chunks/navigation-5bedff57.js","chunks/singletons-f2c89a2f.js"],import.meta.url),()=>K(()=>import("./chunks/1-99b7c54a.js"),["chunks/1-99b7c54a.js","components/error.svelte-93f98a23.js","chunks/index-c1eee52a.js","chunks/singletons-f2c89a2f.js"],import.meta.url),()=>K(()=>import("./chunks/2-fea427f7.js"),["chunks/2-fea427f7.js","components/pages/contact/_layout.svelte-ce0f2e46.js","assets/_layout-341d6943.css","chunks/index-c1eee52a.js"],import.meta.url),()=>K(()=>import("./chunks/3-062cafa8.js"),["chunks/3-062cafa8.js","chunks/_page-802cc2a3.js","components/pages/_page.svelte-94f6d0c1.js","assets/_page-1881f58b.css","chunks/index-c1eee52a.js","chunks/index-99558e9d.js"],import.meta.url),()=>K(()=>import("./chunks/4-c932b634.js"),["chunks/4-c932b634.js","chunks/_page-c8196999.js","components/pages/about/_page.svelte-54bb843e.js","chunks/index-c1eee52a.js","chunks/index-99558e9d.js"],import.meta.url),()=>K(()=>import("./chunks/5-96e6e03a.js"),["chunks/5-96e6e03a.js","chunks/_page-9ef87fc3.js","components/pages/contact/_page.svelte-b86cd59a.js","chunks/index-c1eee52a.js","chunks/navigation-5bedff57.js","chunks/singletons-f2c89a2f.js","chunks/index-6203779a.js"],import.meta.url),()=>K(()=>import("./chunks/6-4661c822.js"),["chunks/6-4661c822.js","components/pages/contact/thanks/_page.svelte-279ece5b.js","chunks/index-c1eee52a.js"],import.meta.url),()=>K(()=>import("./chunks/7-91e62c31.js"),["chunks/7-91e62c31.js","components/pages/resources/blog/_page.svelte-fb99cdb0.js","assets/_page-f7c21d3d.css","chunks/index-c1eee52a.js","chunks/index-6203779a.js","chunks/profiles-ea0b7403.js","chunks/preload-helper-28b7b303.js","chunks/index-99558e9d.js"],import.meta.url),()=>K(()=>import("./chunks/8-51fac9ff.js"),["chunks/8-51fac9ff.js","components/pages/resources/blog/_slug_/_page.svelte-63497105.js","assets/_page-c3d47a5f.css","chunks/index-c1eee52a.js","chunks/index-6203779a.js","chunks/profiles-ea0b7403.js","chunks/preload-helper-28b7b303.js"],import.meta.url)],Tt=[],Dt={"/":[3],"/about":[4],"/contact":[5,[2]],"/contact/thanks":[6,[2]],"/resources/blog":[-8],"/resources/blog/[slug]":[-9]},Vt={handleError:({error:r})=>{console.error(r)}};class Se{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ge{constructor(e,n){this.status=e,this.location=n}}async function qt(r){for(const e in r)if(typeof r[e]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([n,o])=>[n,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ct=-1,Bt=-2,Ft=-3,Jt=-4,zt=-5,Gt=-6;function Kt(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,u=!1){if(a===Ct)return;if(a===Ft)return NaN;if(a===Jt)return 1/0;if(a===zt)return-1/0;if(a===Gt)return-0;if(u)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const f=new Set;n[a]=f;for(let y=1;y<t.length;y+=1)f.add(o(t[y]));break;case"Map":const d=new Map;n[a]=d;for(let y=1;y<t.length;y+=2)d.set(o(t[y]),o(t[y+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=o(t[y+1]);break}else{const l=new Array(t.length);n[a]=l;for(let f=0;f<t.length;f+=1){const d=t[f];d!==Bt&&(l[f]=o(d))}}else{const l={};n[a]=l;for(const f in t){const d=t[f];l[f]=o(d)}}return n[a]}return o(0)}const He="sveltekit:scroll",H="sveltekit:index",ue=$t(_e,Tt,Dt,Ut),Ie=_e[0],Le=_e[1];Ie();Le();let oe={};try{oe=JSON.parse(sessionStorage[He])}catch{}function ke(r){oe[r]=Oe()}function Mt({target:r,base:e,trailing_slash:n}){const o=[];let a=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,f=!1,d=!0,g=!1,y=!1,A=!1,$=!1,M,R=history.state?.[H];R||(R=Date.now(),history.replaceState({...history.state,[H]:R},"",location.href));const z=oe[R];z&&(history.scrollRestoration="manual",scrollTo(z.x,z.y));let T,x,Z;async function ie(){Z=Z||Promise.resolve(),await Z,Z=null;const s=new URL(location.href),c=we(s,!0);a=null,await Ae(c,s,[])}async function ee(s,{noScroll:c=!1,replaceState:p=!1,keepFocus:i=!1,state:h={},invalidateAll:_=!1},m,w){return typeof s=="string"&&(s=new URL(s,Be(document))),ye({url:s,scroll:c?Oe():null,keepfocus:i,redirect_chain:m,details:{state:h,replaceState:p},nav_token:w,accepted:()=>{_&&($=!0)},blocked:()=>{},type:"goto"})}async function je(s){const c=we(s,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${s}`);return a={id:c.id,promise:Ue(c).then(p=>(p.type==="loaded"&&p.state.error&&(a=null),p))},a.promise}async function Ae(s,c,p,i,h={},_){x=h;let m=s&&await Ue(s);if(m||(m=await qe(c,{id:null},re(new Error(`Not found: ${c.pathname}`),{url:c,params:{},route:{id:null}}),404)),c=s?.url||c,x!==h)return!1;if(m.type==="redirect")if(p.length>10||p.includes(c.pathname))m=await le({status:500,error:re(new Error("Redirect loop"),{url:c,params:{},route:{id:null}}),url:c,route:{id:null}});else return ee(new URL(m.location,c).href,{},[...p,c.pathname],h),!1;else m.props?.page?.status>=400&&await Y.updated.check()&&await ce(c);if(o.length=0,$=!1,g=!0,i&&i.details){const{details:w}=i,E=w.replaceState?0:1;w.state[H]=R+=E,history[w.replaceState?"replaceState":"pushState"](w.state,"",c)}if(a=null,f){t=m.state,m.props.page&&(m.props.page.url=c);const w=pe();M.$set(m.props),w()}else Pe(m);if(i){const{scroll:w,keepfocus:E}=i;if(E||$e(),await fe(),d){const b=c.hash&&document.getElementById(c.hash.slice(1));w?scrollTo(w.x,w.y):b?b.scrollIntoView():scrollTo(0,0)}}else await fe();d=!0,m.props.page&&(T=m.props.page),_&&_(),g=!1}function Pe(s){t=s.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),T=s.props.page;const p=pe();M=new Nt({target:r,props:{...s.props,stores:Y},hydrate:!0}),p();const i={from:null,to:de("to",{params:t.params,route:{id:t.route?.id??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};u.after_navigate.forEach(h=>h(i)),f=!0}async function te({url:s,params:c,branch:p,status:i,error:h,route:_,form:m}){const w=p.filter(Boolean),E={type:"loaded",state:{url:s,params:c,branch:p,error:h,route:_},props:{components:w.map(k=>k.node.component)}};m!==void 0&&(E.props.form=m);let b={},O=!T;for(let k=0;k<w.length;k+=1){const I=w[k];b={...b,...I.data},(O||!t.branch.some(D=>D===I))&&(E.props[`data_${k}`]=b,O=O||Object.keys(I.data??{}).length>0)}if(O||(O=Object.keys(T.data).length!==Object.keys(b).length),!t.url||s.href!==t.url.href||t.error!==h||m!==void 0||O){E.props.page={error:h,params:c,route:_,status:i,url:s,form:m,data:O?b:T.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const k=(I,D)=>{Object.defineProperty(E.props.page,I,{get:()=>{throw new Error(`$page.${I} has been replaced by $page.url.${D}`)}})};k("origin","origin"),k("path","pathname"),k("query","searchParams")}return E}async function me({loader:s,parent:c,url:p,params:i,route:h,server_data_node:_}){let m=null;const w={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await s();if(E.shared?.load){let b=function(...v){for(const k of v){const{href:I}=new URL(k,p);w.dependencies.add(I)}};const O={route:{get id(){return w.route=!0,h.id}},params:new Proxy(i,{get:(v,k)=>(w.params.add(k),v[k])}),data:_?.data??null,url:dt(p,()=>{w.url=!0}),async fetch(v,k){let I;v instanceof Request?(I=v.url,k={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...k}):I=v;const D=new URL(I,p).href;return b(D),f?wt(I,D,k):gt(I,k)},setHeaders:()=>{},depends:b,parent(){return w.parent=!0,c()}};Object.defineProperties(O,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=await E.shared.load.call(null,O)??null,m=m?await qt(m):null}return{node:E,loader:s,server:_,shared:E.shared?.load?{type:"data",data:m,uses:w}:null,data:m??_?.data??null}}function Ne(s,c,p,i,h){if($)return!0;if(!i)return!1;if(i.parent&&s||i.route&&c||i.url&&p)return!0;for(const _ of i.params)if(h[_]!==t.params[_])return!0;for(const _ of i.dependencies)if(o.some(m=>m(new URL(_))))return!0;return!1}function ge(s,c){return s?.type==="data"?{type:"data",data:s.data,uses:{dependencies:new Set(s.uses.dependencies??[]),params:new Set(s.uses.params??[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url}}:s?.type==="skip"?c??null:null}async function Ue({id:s,invalidating:c,url:p,params:i,route:h}){if(a?.id===s)return a.promise;const{errors:_,layouts:m,leaf:w}=h,E=[...m,w];_.forEach(S=>S?.().catch(()=>{})),E.forEach(S=>S?.[1]().catch(()=>{}));let b=null;const O=t.url?s!==t.url.pathname+t.url.search:!1,v=t.route?s!==t.route.id:!1,k=E.reduce((S,L,V)=>{const j=t.branch[V],Q=!!L?.[0]&&(j?.loader!==L[1]||Ne(S.some(Boolean),v,O,j.server?.uses,i));return S.push(Q),S},[]);if(k.some(Boolean)){try{b=await Ke(p,k)}catch(S){return le({status:500,error:re(S,{url:p,params:i,route:{id:h.id}}),url:p,route:h})}if(b.type==="redirect")return b}const I=b?.nodes;let D=!1;const be=E.map(async(S,L)=>{if(!S)return;const V=t.branch[L],j=I?.[L];if((!j||j.type==="skip")&&S[1]===V?.loader&&!Ne(D,v,O,V.shared?.uses,i))return V;if(D=!0,j?.type==="error")throw j;return me({loader:S[1],url:p,params:i,route:h,parent:async()=>{const Ce={};for(let ve=0;ve<L;ve+=1)Object.assign(Ce,(await be[ve])?.data);return Ce},server_data_node:ge(j===void 0&&S[0]?{type:"skip"}:j??null,V?.server)})});for(const S of be)S.catch(()=>{});const ne=[];for(let S=0;S<E.length;S+=1)if(E[S])try{ne.push(await be[S])}catch(L){if(L instanceof Ge)return{type:"redirect",location:L.location};let V=500,j;I?.includes(L)?(V=L.status??V,j=L.error):L instanceof Se?(V=L.status,j=L.body):j=re(L,{params:i,url:p,route:{id:h.id}});const Q=await Te(S,ne,_);return Q?await te({url:p,params:i,branch:ne.slice(0,Q.idx).concat(Q.node),status:V,error:j,route:h}):await qe(p,{id:h.id},j,V)}else ne.push(void 0);return await te({url:p,params:i,branch:ne,status:200,error:null,route:h,form:c?void 0:null})}async function Te(s,c,p){for(;s--;)if(p[s]){let i=s;for(;!c[i];)i-=1;try{return{idx:i+1,node:{node:await p[s](),loader:p[s],data:{},server:null,shared:null}}}catch{continue}}}async function le({status:s,error:c,url:p,route:i}){const h={},_=await Ie();let m=null;if(_.server)try{const b=await Ke(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=b.nodes[0]??null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||l)&&await ce(p)}const w=await me({loader:Ie,url:p,params:h,route:i,parent:()=>Promise.resolve({}),server_data_node:ge(m)}),E={node:await Le(),loader:Le,shared:null,server:null,data:null};return await te({url:p,params:h,branch:[w,E],status:s,error:c,route:null})}function we(s,c){if(De(s))return;const p=ct(s.pathname.slice(e.length)||"/");for(const i of ue){const h=i.exec(p);if(h){const _=new URL(s.origin+lt(s.pathname,n)+s.search+s.hash);return{id:_.pathname+_.search,invalidating:c,route:i,params:ft(h),url:_}}}}function De(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}function Ve({url:s,type:c,intent:p,delta:i}){let h=!1;const _={from:de("from",{params:t.params,route:{id:t.route?.id??null},url:t.url}),to:de("to",{params:p?.params??null,route:{id:p?.route?.id??null},url:s}),willUnload:!p,type:c};i!==void 0&&(_.delta=i);const m={..._,cancel:()=>{h=!0}};return y||u.before_navigate.forEach(w=>w(m)),h?null:_}async function ye({url:s,scroll:c,keepfocus:p,redirect_chain:i,details:h,type:_,delta:m,nav_token:w,accepted:E,blocked:b}){const O=we(s,!1),v=Ve({url:s,type:_,delta:m,intent:O});if(!v){b();return}ke(R),E(),y=!0,f&&Y.navigating.set(v),await Ae(O,s,i,{scroll:c,keepfocus:p,details:h},w,()=>{y=!1,u.after_navigate.forEach(k=>k(v)),Y.navigating.set(null)})}async function qe(s,c,p,i){return s.origin===location.origin&&s.pathname===location.pathname&&!l?await le({status:i,error:p,url:s,route:c}):await ce(s)}function ce(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{Re(()=>(u.after_navigate.push(s),()=>{const c=u.after_navigate.indexOf(s);u.after_navigate.splice(c,1)}))},before_navigate:s=>{Re(()=>(u.before_navigate.push(s),()=>{const c=u.before_navigate.indexOf(s);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(s,c={})=>{if("keepfocus"in c)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in c)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ee(s,c,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:c}=new URL(s,location.href);o.push(p=>p.href===c)}return ie()},invalidateAll:()=>($=!0,ie()),prefetch:async s=>{const c=new URL(s,Be(document));await je(c)},prefetch_routes:async s=>{const p=(s?ue.filter(i=>s.some(h=>i.exec(h))):ue).map(i=>Promise.all([...i.layouts,i.leaf].map(h=>h?.[1]())));await Promise.all(p)},apply_action:async s=>{if(s.type==="error"){const c=new URL(location.href),{branch:p,route:i}=t;if(!i)return;const h=await Te(t.branch.length,p,i.errors);if(h){const _=await te({url:c,params:t.params,branch:p.slice(0,h.idx).concat(h.node),status:500,error:s.error,route:i});t=_.state;const m=pe();M.$set(_.props),m(),fe().then($e)}}else if(s.type==="redirect")ee(s.location,{invalidateAll:!0},[]);else{const c={form:s.data,page:{...T,form:s.data,status:s.status}},p=pe();M.$set(c),p(),s.type==="success"&&fe().then($e)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{let h=!1;if(!y){const _={from:de("from",{params:t.params,route:{id:t.route?.id??null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>h=!0};u.before_navigate.forEach(m=>m(_))}h?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(R);try{sessionStorage[He]=JSON.stringify(oe)}catch{}}});const s=i=>{const{url:h,options:_,has:m}=Fe(i);if(h&&_.prefetch&&!De(h)){if(_.reload||m.rel_external||m.target||m.download)return;je(h)}};let c;const p=i=>{clearTimeout(c),c=setTimeout(()=>{i.target?.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:h,url:_,options:m,has:w}=Fe(i);if(!h||!_||!(h instanceof SVGAElement)&&_.protocol!==location.protocol&&!(_.protocol==="https:"||_.protocol==="http:")||w.download)return;if(m.reload||w.rel_external||w.target){Ve({url:_,type:"link"})||i.preventDefault(),y=!0;return}const[b,O]=_.href.split("#");if(O!==void 0&&b===location.href.split("#")[0]){A=!0,ke(R),t.url=_,Y.page.set({...T,url:_}),Y.page.notify();return}ye({url:_,scroll:m.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[H]===R)return;const h=i.state[H]-R;ye({url:new URL(location.href),scroll:oe[i.state[H]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{R=i.state[H]},blocked:()=>{history.go(-h)},type:"popstate",delta:h})}}),addEventListener("hashchange",()=>{A&&(A=!1,history.replaceState({...history.state,[H]:++R},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Y.navigating.set(null)})},_hydrate:async({status:s,error:c,node_ids:p,params:i,route:h,data:_,form:m})=>{l=!0;const w=new URL(location.href);let E;try{const b=p.map(async(O,v)=>{const k=_[v];return me({loader:_e[O],url:w,params:i,route:h,parent:async()=>{const I={};for(let D=0;D<v;D+=1)Object.assign(I,(await b[D]).data);return I},server_data_node:ge(k)})});E=await te({url:w,params:i,branch:await Promise.all(b),status:s,error:c,form:m,route:ue.find(({id:O})=>O===h.id)??null})}catch(b){if(b instanceof Ge){await ce(new URL(b.location,location.href));return}E=await le({status:b instanceof Se?b.status:500,error:re(b,{url:w,params:i,route:h}),url:w,route:h})}Pe(E)}}}async function Ke(r,e){const n=new URL(r);n.pathname=_t(r.pathname);const o=await he(n.href,{headers:{"x-sveltekit-invalidated":e.map(u=>u?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return a.nodes?.forEach(u=>{u?.type==="data"&&(u.data=Kt(u.data),u.uses={dependencies:new Set(u.uses.dependencies??[]),params:new Set(u.uses.params??[]),parent:!!u.uses.parent,route:!!u.uses.route,url:!!u.uses.url})}),a}function re(r,e){return r instanceof Se?r.body:Vt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const Ht=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of Ht)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}function $e(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function Zt({env:r,hydrate:e,paths:n,target:o,trailing_slash:a}){st(n);const u=Mt({target:o,base:n.base,trailing_slash:a});it({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Zt as start};