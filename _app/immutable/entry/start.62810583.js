import{o as me,t as we}from"../chunks/scheduler.7c83698d.js";import{S as Ge,a as Ke,I as M,g as Ce,f as De,b as _e,c as le,s as te,i as ye,d as B,e as q,o as Fe,P as Me,h as Ze}from"../chunks/singletons.1611a677.js";import{R as Ve,H as ne,N as Qe}from"../chunks/control.c2cf8273.js";function et(t,r){return t==="/"||r==="ignore"?t:r==="never"?t.endsWith("/")?t.slice(0,-1):t:r==="always"&&!t.endsWith("/")?t+"/":t}function tt(t){return t.split("%25").map(decodeURI).join("%25")}function nt(t){for(const r in t)t[r]=decodeURIComponent(t[r]);return t}const at=["href","pathname","search","searchParams","toString","toJSON"];function rt(t,r){const u=new URL(t);for(const i of at)Object.defineProperty(u,i,{get(){return r(),t[i]},enumerable:!0,configurable:!0});return ot(u),u}function ot(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const it="/__data.json";function st(t){return t.replace(/\/$/,"")+it}function ct(...t){let r=5381;for(const u of t)if(typeof u=="string"){let i=u.length;for(;i;)r=r*33^u.charCodeAt(--i)}else if(ArrayBuffer.isView(u)){const i=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let p=i.length;for(;p;)r=r*33^i[--p]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}const ze=window.fetch;window.fetch=(t,r)=>((t instanceof Request?t.method:(r==null?void 0:r.method)||"GET")!=="GET"&&ae.delete(ke(t)),ze(t,r));const ae=new Map;function lt(t){const r=atob(t),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++)u[i]=r.charCodeAt(i);return u.buffer}function ft(t,r){const u=ke(t,r),i=document.querySelector(u);if(i!=null&&i.textContent){let{body:p,...f}=JSON.parse(i.textContent);const E=i.getAttribute("data-ttl");return E&&ae.set(u,{body:p,init:f,ttl:1e3*Number(E)}),i.getAttribute("data-b64")!==null&&(p=lt(p)),Promise.resolve(new Response(p,f))}return window.fetch(t,r)}function ut(t,r,u){if(ae.size>0){const i=ke(t,u),p=ae.get(i);if(p){if(performance.now()<p.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(p.body,p.init);ae.delete(i)}}return window.fetch(r,u)}function ke(t,r){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(r!=null&&r.headers||r!=null&&r.body){const p=[];r.headers&&p.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&p.push(r.body),i+=`[data-hash="${ct(...p)}"]`}return i}const dt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function pt(t){const r=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${gt(t).map(i=>{const p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(p)return r.push({name:p[1],matcher:p[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return r.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const E=i.split(/\[(.+?)\](?!\])/);return"/"+E.map((g,m)=>{if(m%2){if(g.startsWith("x+"))return ve(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ve(String.fromCharCode(...g.slice(2).split("-").map(x=>parseInt(x,16))));const d=dt.exec(g);if(!d)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,$,R,D]=d;return r.push({name:R,matcher:D,optional:!!N,rest:!!$,chained:$?m===1&&E[0]==="":!1}),$?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return ve(g)}).join("")}).join("")}/?$`),params:r}}function ht(t){return!/^\([^)]+\)$/.test(t)}function gt(t){return t.slice(1).split("/").filter(ht)}function mt(t,r,u){const i={},p=t.slice(1),f=p.filter(l=>l!==void 0);let E=0;for(let l=0;l<r.length;l+=1){const g=r[l];let m=p[l-E];if(g.chained&&g.rest&&E&&(m=p.slice(l-E,l+1).filter(d=>d).join("/"),E=0),m===void 0){g.rest&&(i[g.name]="");continue}if(!g.matcher||u[g.matcher](m)){i[g.name]=m;const d=r[l+1],N=p[l+1];d&&!d.rest&&d.optional&&N&&g.chained&&(E=0),!d&&!N&&Object.keys(i).length===f.length&&(E=0);continue}if(g.optional&&g.chained){E++;continue}return}if(!E)return i}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function wt({nodes:t,server_loads:r,dictionary:u,matchers:i}){const p=new Set(r);return Object.entries(u).map(([l,[g,m,d]])=>{const{pattern:N,params:$}=pt(l),R={id:l,exec:D=>{const x=N.exec(D);if(x)return mt(x,$,i)},errors:[1,...d||[]].map(D=>t[D]),layouts:[0,...m||[]].map(E),leaf:f(g)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function f(l){const g=l<0;return g&&(l=~l),[g,t[l]]}function E(l){return l===void 0?l:[p.has(l),t[l]]}}function Je(t){try{return JSON.parse(sessionStorage[t])}catch{}}function qe(t,r){const u=JSON.stringify(r);try{sessionStorage[t]=u}catch{}}const _t=-1,yt=-2,vt=-3,bt=-4,Et=-5,kt=-6;function St(t,r){if(typeof t=="number")return p(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const u=t,i=Array(u.length);function p(f,E=!1){if(f===_t)return;if(f===vt)return NaN;if(f===bt)return 1/0;if(f===Et)return-1/0;if(f===kt)return-0;if(E)throw new Error("Invalid input");if(f in i)return i[f];const l=u[f];if(!l||typeof l!="object")i[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],m=r==null?void 0:r[g];if(m)return i[f]=m(p(l[1]));switch(g){case"Date":i[f]=new Date(l[1]);break;case"Set":const d=new Set;i[f]=d;for(let R=1;R<l.length;R+=1)d.add(p(l[R]));break;case"Map":const N=new Map;i[f]=N;for(let R=1;R<l.length;R+=2)N.set(p(l[R]),p(l[R+1]));break;case"RegExp":i[f]=new RegExp(l[1],l[2]);break;case"Object":i[f]=Object(l[1]);break;case"BigInt":i[f]=BigInt(l[1]);break;case"null":const $=Object.create(null);i[f]=$;for(let R=1;R<l.length;R+=2)$[l[R]]=p(l[R+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);i[f]=g;for(let m=0;m<l.length;m+=1){const d=l[m];d!==yt&&(g[m]=p(d))}}else{const g={};i[f]=g;for(const m in l){const d=l[m];g[m]=p(d)}}return i[f]}return p(0)}function Rt(t){return t.filter(r=>r!=null)}const We=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...We];const At=new Set([...We]);[...At];async function It(t,r){var u;for(const i in t)if(typeof((u=t[i])==null?void 0:u.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([p,f])=>[p,await f])));return t}const Lt="x-sveltekit-invalidated",Pt="x-sveltekit-trailing-slash",K=Je(Ge)??{},ee=Je(Ke)??{};function be(t){K[t]=te()}function z(t){return location.href=t.href,new Promise(()=>{})}function Ot(t,r){var je;const u=wt(t),i=t.nodes[0],p=t.nodes[1];i(),p();const f=document.documentElement,E=[],l=[];let g=null;const m={before_navigate:[],on_navigate:[],after_navigate:[]};let d={branch:[],error:null,url:null},N=!1,$=!1,R=!0,D=!1,x=!1,C=!1,J=!1,V,U=(je=history.state)==null?void 0:je[M];U||(U=Date.now(),history.replaceState({...history.state,[M]:U},"",location.href));const fe=K[U];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let H,W,Y;async function Se(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const e=new URL(location.href),s=Z(e,!0);g=null;const n=W={},o=s&&await pe(s);if(n===W&&o){if(o.type==="redirect")return re(new URL(o.location,e).href,{},1,n);o.props.page!==void 0&&(H=o.props.page),V.$set(o.props)}}function Re(e){l.some(s=>s==null?void 0:s.snapshot)&&(ee[e]=l.map(s=>{var n;return(n=s==null?void 0:s.snapshot)==null?void 0:n.capture()}))}function Ae(e){var s;(s=ee[e])==null||s.forEach((n,o)=>{var a,c;(c=(a=l[o])==null?void 0:a.snapshot)==null||c.restore(n)})}function Ie(){be(U),qe(Ge,K),Re(U),qe(Ke,ee)}async function re(e,{noScroll:s=!1,replaceState:n=!1,keepFocus:o=!1,state:a={},invalidateAll:c=!1},h,y){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:s?te():null,keepfocus:o,redirect_count:h,details:{state:a,replaceState:n},nav_token:y,accepted:()=>{c&&(J=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return g={id:e.id,promise:pe(e).then(s=>(s.type==="loaded"&&s.state.error&&(g=null),s))},g.promise}async function oe(...e){const n=u.filter(o=>e.some(a=>o.exec(a))).map(o=>Promise.all([...o.layouts,o.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(n)}function Pe(e){var o;d=e.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),H=e.props.page,V=new t.root({target:r,props:{...e.props,stores:B,components:l},hydrate:!0}),Ae(U);const n={from:null,to:{params:d.params,route:{id:((o=d.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};m.after_navigate.forEach(a=>a(n)),$=!0}async function X({url:e,params:s,branch:n,status:o,error:a,route:c,form:h}){let y="never";for(const _ of n)(_==null?void 0:_.slash)!==void 0&&(y=_.slash);e.pathname=et(e.pathname,y),e.search=e.search;const b={type:"loaded",state:{url:e,params:s,branch:n,error:a,route:c},props:{constructors:Rt(n).map(_=>_.node.component)}};h!==void 0&&(b.props.form=h);let v={},L=!H,A=0;for(let _=0;_<Math.max(n.length,d.branch.length);_+=1){const w=n[_],O=d.branch[_];(w==null?void 0:w.data)!==(O==null?void 0:O.data)&&(L=!0),w&&(v={...v,...w.data},L&&(b.props[`data_${A}`]=v),A+=1)}return(!d.url||e.href!==d.url.href||d.error!==a||h!==void 0&&h!==H.form||L)&&(b.props.page={error:a,params:s,route:{id:(c==null?void 0:c.id)??null},status:o,url:new URL(e),form:h??null,data:L?v:H.data}),b}async function ue({loader:e,parent:s,url:n,params:o,route:a,server_data_node:c}){var v,L,A;let h=null;const y={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((v=b.universal)!=null&&v.load){let P=function(...w){for(const O of w){const{href:j}=new URL(O,n);y.dependencies.add(j)}};const _={route:new Proxy(a,{get:(w,O)=>(y.route=!0,w[O])}),params:new Proxy(o,{get:(w,O)=>(y.params.add(O),w[O])}),data:(c==null?void 0:c.data)??null,url:rt(n,()=>{y.url=!0}),async fetch(w,O){let j;w instanceof Request?(j=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O}):j=w;const F=new URL(j,n);return P(F.href),F.origin===n.origin&&(j=F.href.slice(n.origin.length)),$?ut(j,F.href,O):ft(j,O)},setHeaders:()=>{},depends:P,parent(){return y.parent=!0,s()}};h=await b.universal.load.call(null,_)??null,h=h?await It(h,a.id):null}return{node:b,loader:e,server:c,universal:(L=b.universal)!=null&&L.load?{type:"data",data:h,uses:y}:null,data:h??(c==null?void 0:c.data)??null,slash:n.pathname===q||n.pathname===q+"/"?"always":((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Oe(e,s,n,o,a){if(J)return!0;if(!o)return!1;if(o.parent&&e||o.route&&s||o.url&&n)return!0;for(const c of o.params)if(a[c]!==d.params[c])return!0;for(const c of o.dependencies)if(E.some(h=>h(new URL(c))))return!0;return!1}function de(e,s){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?s??null:null}async function pe({id:e,invalidating:s,url:n,params:o,route:a}){if((g==null?void 0:g.id)===e)return g.promise;const{errors:c,layouts:h,leaf:y}=a,b=[...h,y];c.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let v=null;const L=d.url?e!==d.url.pathname+d.url.search:!1,A=d.route?a.id!==d.route.id:!1;let P=!1;const _=b.map((k,I)=>{var G;const S=d.branch[I],T=!!(k!=null&&k[0])&&((S==null?void 0:S.loader)!==k[1]||Oe(P,A,L,(G=S.server)==null?void 0:G.uses,o));return T&&(P=!0),T});if(_.some(Boolean)){try{v=await He(n,_)}catch(k){return ie({status:k instanceof ne?k.status:500,error:await Q(k,{url:n,params:o,route:{id:a.id}}),url:n,route:a})}if(v.type==="redirect")return v}const w=v==null?void 0:v.nodes;let O=!1;const j=b.map(async(k,I)=>{var he;if(!k)return;const S=d.branch[I],T=w==null?void 0:w[I];if((!T||T.type==="skip")&&k[1]===(S==null?void 0:S.loader)&&!Oe(O,A,L,(he=S.universal)==null?void 0:he.uses,o))return S;if(O=!0,(T==null?void 0:T.type)==="error")throw T;return ue({loader:k[1],url:n,params:o,route:a,parent:async()=>{var $e;const Te={};for(let ge=0;ge<I;ge+=1)Object.assign(Te,($e=await j[ge])==null?void 0:$e.data);return Te},server_data_node:de(T===void 0&&k[0]?{type:"skip"}:T??null,k[0]?S==null?void 0:S.server:void 0)})});for(const k of j)k.catch(()=>{});const F=[];for(let k=0;k<b.length;k+=1)if(b[k])try{F.push(await j[k])}catch(I){if(I instanceof Ve)return{type:"redirect",location:I.location};let S=500,T;if(w!=null&&w.includes(I))S=I.status??S,T=I.error;else if(I instanceof ne)S=I.status,T=I.body;else{if(await B.updated.check())return await z(n);T=await Q(I,{params:o,url:n,route:{id:a.id}})}const G=await Ue(k,F,c);return G?await X({url:n,params:o,branch:F.slice(0,G.idx).concat(G.node),status:S,error:T,route:a}):await Ne(n,{id:a.id},T,S)}else F.push(void 0);return await X({url:n,params:o,branch:F,status:200,error:null,route:a,form:s?void 0:null})}async function Ue(e,s,n){for(;e--;)if(n[e]){let o=e;for(;!s[o];)o-=1;try{return{idx:o+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:s,url:n,route:o}){const a={};let c=null;if(t.server_loads[0]===0)try{const v=await He(n,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;c=v.nodes[0]??null}catch{(n.origin!==Fe||n.pathname!==location.pathname||N)&&await z(n)}const y=await ue({loader:i,url:n,params:a,route:o,parent:()=>Promise.resolve({}),server_data_node:de(c)}),b={node:await p(),loader:p,universal:null,server:null,data:null};return await X({url:n,params:a,branch:[y,b],status:e,error:s,route:null})}function Z(e,s){if(ye(e,q))return;const n=se(e);for(const o of u){const a=o.exec(n);if(a)return{id:e.pathname+e.search,invalidating:s,route:o,params:nt(a),url:e}}}function se(e){return tt(e.pathname.slice(q.length)||"/")}function xe({url:e,type:s,intent:n,delta:o}){let a=!1;const c=Be(d,n,e,s);o!==void 0&&(c.navigation.delta=o);const h={...c.navigation,cancel:()=>{a=!0,c.reject(new Error("navigation was cancelled"))}};return x||m.before_navigate.forEach(y=>y(h)),a?null:c}async function ce({url:e,scroll:s,keepfocus:n,redirect_count:o,details:a,type:c,delta:h,nav_token:y={},accepted:b,blocked:v}){var j,F,k;const L=Z(e,!1),A=xe({url:e,type:c,delta:h,intent:L});if(!A){v();return}const P=U;b(),x=!0,$&&B.navigating.set(A.navigation),W=y;let _=L&&await pe(L);if(!_){if(ye(e,q))return await z(e);_=await Ne(e,{id:null},await Q(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(L==null?void 0:L.url)||e,W!==y)return A.reject(new Error("navigation was aborted")),!1;if(_.type==="redirect")if(o>=20)_=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(_.location,e).href,{},o+1,y),!1;else((j=_.props.page)==null?void 0:j.status)>=400&&await B.updated.check()&&await z(e);if(E.length=0,J=!1,D=!0,be(P),Re(P),(F=_.props.page)!=null&&F.url&&_.props.page.url.pathname!==e.pathname&&(e.pathname=(k=_.props.page)==null?void 0:k.url.pathname),a){const I=a.replaceState?0:1;if(a.state[M]=U+=I,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let S=U+1;for(;ee[S]||K[S];)delete ee[S],delete K[S],S+=1}}if(g=null,$){d=_.state,_.props.page&&(_.props.page.url=e);const I=(await Promise.all(m.on_navigate.map(S=>S(A.navigation)))).filter(S=>typeof S=="function");if(I.length>0){let S=function(){m.after_navigate=m.after_navigate.filter(T=>!I.includes(T))};I.push(S),m.after_navigate.push(...I)}V.$set(_.props)}else Pe(_);const{activeElement:w}=document;if(await we(),R){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));s?scrollTo(s.x,s.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==w&&document.activeElement!==document.body;!n&&!O&&Ee(),R=!0,_.props.page&&(H=_.props.page),x=!1,c==="popstate"&&Ae(U),A.fulfil(void 0),m.after_navigate.forEach(I=>I(A.navigation)),B.navigating.set(null),D=!1}async function Ne(e,s,n,o){return e.origin===Fe&&e.pathname===location.pathname&&!N?await ie({status:o,error:n,url:e,route:s}):await z(e)}function Xe(){let e;f.addEventListener("mousemove",c=>{const h=c.target;clearTimeout(e),e=setTimeout(()=>{o(h,2)},20)});function s(c){o(c.composedPath()[0],1)}f.addEventListener("mousedown",s),f.addEventListener("touchstart",s,{passive:!0});const n=new IntersectionObserver(c=>{for(const h of c)h.isIntersecting&&(oe(se(new URL(h.target.href))),n.unobserve(h.target))},{threshold:0});function o(c,h){const y=De(c,f);if(!y)return;const{url:b,external:v,download:L}=_e(y,q);if(v||L)return;const A=le(y);if(!A.reload)if(h<=A.preload_data){const P=Z(b,!1);P&&Le(P)}else h<=A.preload_code&&oe(se(b))}function a(){n.disconnect();for(const c of f.querySelectorAll("a")){const{url:h,external:y,download:b}=_e(c,q);if(y||b)continue;const v=le(c);v.reload||(v.preload_code===Me.viewport&&n.observe(c),v.preload_code===Me.eager&&oe(se(h)))}}m.after_navigate.push(a),a()}function Q(e,s){return e instanceof ne?e.body:t.hooks.handleError({error:e,event:s})??{message:s.route.id===null&&e instanceof Qe?"Not Found":"Internal Error"}}return{after_navigate:e=>{me(()=>(m.after_navigate.push(e),()=>{const s=m.after_navigate.indexOf(e);m.after_navigate.splice(s,1)}))},before_navigate:e=>{me(()=>(m.before_navigate.push(e),()=>{const s=m.before_navigate.indexOf(e);m.before_navigate.splice(s,1)}))},on_navigate:e=>{me(()=>(m.on_navigate.push(e),()=>{const s=m.on_navigate.indexOf(e);m.on_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(D||!$)&&(R=!1)},goto:(e,s={})=>re(e,s,0),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:s}=new URL(e,location.href);E.push(n=>n.href===s)}return Se()},invalidate_all:()=>(J=!0,Se()),preload_data:async e=>{const s=new URL(e,Ce(document)),n=Z(s,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);await Le(n)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const s=new URL(location.href),{branch:n,route:o}=d;if(!o)return;const a=await Ue(d.branch.length,n,o.errors);if(a){const c=await X({url:s,params:d.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:o});d=c.state,V.$set(c.props),we().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},0):(V.$set({form:null,page:{...H,form:e.data,status:e.status}}),await we(),V.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let o=!1;if(Ie(),!x){const a=Be(d,void 0,null,"leave"),c={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation was cancelled"))}};m.before_navigate.forEach(h=>h(c))}o?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(s=navigator.connection)!=null&&s.saveData||Xe(),f.addEventListener("click",n=>{var P;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const o=De(n.composedPath()[0],f);if(!o)return;const{url:a,external:c,target:h,download:y}=_e(o,q);if(!a)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const b=le(o);if(!(o instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||y)return;if(c||b.reload){xe({url:a,type:"link"})?x=!0:n.preventDefault();return}const[L,A]=a.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(d.url.hash===a.hash){n.preventDefault(),(P=o.ownerDocument.getElementById(A))==null||P.scrollIntoView();return}if(C=!0,be(U),e(a),!b.replace_state)return;C=!1,n.preventDefault()}ce({url:a,scroll:b.noscroll?te():null,keepfocus:b.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),f.addEventListener("submit",n=>{if(n.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||o.method)!=="get")return;const h=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||o.action);if(ye(h,q))return;const y=n.target,{keep_focus:b,noscroll:v,reload:L,replace_state:A}=le(y);if(L)return;n.preventDefault(),n.stopPropagation();const P=new FormData(y),_=a==null?void 0:a.getAttribute("name");_&&P.append(_,(a==null?void 0:a.getAttribute("value"))??""),h.search=new URLSearchParams(P).toString(),ce({url:h,scroll:v?te():null,keepfocus:b??!1,redirect_count:0,details:{state:{},replaceState:A??h.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var o,a;if(W={},(o=n.state)!=null&&o[M]){if(n.state[M]===U)return;const c=K[n.state[M]],h=new URL(location.href);if(((a=d.url)==null?void 0:a.href.split("#")[0])===location.href.split("#")[0]){e(h),K[U]=te(),U=n.state[M],scrollTo(c.x,c.y);return}const y=n.state[M]-U;await ce({url:h,scroll:c,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{U=n.state[M]},blocked:()=>{history.go(-y)},type:"popstate",delta:y,nav_token:W})}else if(!C){const c=new URL(location.href);e(c)}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[M]:++U},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&B.navigating.set(null)});function e(n){d.url=n,B.page.set({...H,url:n}),B.page.notify()}},_hydrate:async({status:e=200,error:s,node_ids:n,params:o,route:a,data:c,form:h})=>{N=!0;const y=new URL(location.href);({params:o={},route:a={id:null}}=Z(y,!1)||{});let b;try{const v=n.map(async(P,_)=>{const w=c[_];return w!=null&&w.uses&&(w.uses=Ye(w.uses)),ue({loader:t.nodes[P],url:y,params:o,route:a,parent:async()=>{const O={};for(let j=0;j<_;j+=1)Object.assign(O,(await v[j]).data);return O},server_data_node:de(w)})}),L=await Promise.all(v),A=u.find(({id:P})=>P===a.id);if(A){const P=A.layouts;for(let _=0;_<P.length;_++)P[_]||L.splice(_,0,void 0)}b=await X({url:y,params:o,branch:L,status:e,error:s,form:h,route:A??null})}catch(v){if(v instanceof Ve){await z(new URL(v.location,location.href));return}b=await ie({status:v instanceof ne?v.status:500,error:await Q(v,{url:y,params:o,route:a}),url:y,route:a})}Pe(b)}}}async function He(t,r){var p;const u=new URL(t);u.pathname=st(t.pathname),t.pathname.endsWith("/")&&u.searchParams.append(Pt,"1"),u.searchParams.append(Lt,r.map(f=>f?"1":"0").join(""));const i=await ze(u.href);if((p=i.headers.get("content-type"))!=null&&p.includes("text/html")&&await z(t),!i.ok)throw new ne(i.status,await i.json());return new Promise(async f=>{var N;const E=new Map,l=i.body.getReader(),g=new TextDecoder;function m($){return St($,{Promise:R=>new Promise((D,x)=>{E.set(R,{fulfil:D,reject:x})})})}let d="";for(;;){const{done:$,value:R}=await l.read();if($&&!d)break;for(d+=!R&&d?`
`:g.decode(R);;){const D=d.indexOf(`
`);if(D===-1)break;const x=JSON.parse(d.slice(0,D));if(d=d.slice(D+1),x.type==="redirect")return f(x);if(x.type==="data")(N=x.nodes)==null||N.forEach(C=>{(C==null?void 0:C.type)==="data"&&(C.uses=Ye(C.uses),C.data=m(C.data))}),f(x);else if(x.type==="chunk"){const{id:C,data:J,error:V}=x,U=E.get(C);E.delete(C),V?U.reject(m(V)):U.fulfil(m(J))}}}})}function Ye(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const r=document.body,u=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),u!==null?r.setAttribute("tabindex",u):r.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const p=[];for(let f=0;f<i.rangeCount;f+=1)p.push(i.getRangeAt(f));setTimeout(()=>{if(i.rangeCount===p.length){for(let f=0;f<i.rangeCount;f+=1){const E=p[f],l=i.getRangeAt(f);if(E.commonAncestorContainer!==l.commonAncestorContainer||E.startContainer!==l.startContainer||E.endContainer!==l.endContainer||E.startOffset!==l.startOffset||E.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}function Be(t,r,u,i){var g,m;let p,f;const E=new Promise((d,N)=>{p=d,f=N});return E.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((g=t.route)==null?void 0:g.id)??null},url:t.url},to:u&&{params:(r==null?void 0:r.params)??null,route:{id:((m=r==null?void 0:r.route)==null?void 0:m.id)??null},url:u},willUnload:!r,type:i,complete:E},fulfil:p,reject:f}}async function jt(t,r,u){const i=Ot(t,r);Ze({client:i}),u?await i._hydrate(u):i.goto(location.href,{replaceState:!0}),i._start_router()}export{jt as start};
