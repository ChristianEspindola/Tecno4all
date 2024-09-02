import{r as R,a as kh,R as Mh,b as Zt}from"./vendor-eb403da2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Pl={exports:{}},Zr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh=R,Fh=Symbol.for("react.element"),Lh=Symbol.for("react.fragment"),jh=Object.prototype.hasOwnProperty,Uh=Oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bh={key:!0,ref:!0,__self:!0,__source:!0};function Sl(e,t,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)jh.call(t,r)&&!Bh.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Fh,type:e,key:i,ref:o,props:s,_owner:Uh.current}}Zr.Fragment=Lh;Zr.jsx=Sl;Zr.jsxs=Sl;Pl.exports=Zr;var m=Pl.exports,ri={},sa=kh;ri.createRoot=sa.createRoot,ri.hydrateRoot=sa.hydrateRoot;function $h({children:e}){return m.jsxs("div",{children:[m.jsx("header",{children:e}),m.jsx("main",{})]})}/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dn.apply(this,arguments)}var ce;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ce||(ce={}));const ia="popstate";function qh(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:o,hash:a}=r.location;return si("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:xr(s)}return Hh(t,n,null,e)}function lt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ui(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zh(){return Math.random().toString(36).substr(2,8)}function oa(e,t){return{usr:e.state,key:e.key,idx:t}}function si(e,t,n,r){return n===void 0&&(n=null),Dn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?on(t):t,{state:n,key:t&&t.key||r||zh()})}function xr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function on(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hh(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=ce.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Dn({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=ce.Pop;let T=u(),O=T==null?null:T-c;c=T,l&&l({action:a,location:C.location,delta:O})}function f(T,O){a=ce.Push;let w=si(C.location,T,O);n&&n(w,T),c=u()+1;let j=oa(w,c),z=C.createHref(w);try{o.pushState(j,"",z)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;s.location.assign(z)}i&&l&&l({action:a,location:C.location,delta:1})}function g(T,O){a=ce.Replace;let w=si(C.location,T,O);n&&n(w,T),c=u();let j=oa(w,c),z=C.createHref(w);o.replaceState(j,"",z),i&&l&&l({action:a,location:C.location,delta:0})}function I(T){let O=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof T=="string"?T:xr(T);return lt(O,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,O)}let C={get action(){return a},get location(){return e(s,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(ia,h),l=T,()=>{s.removeEventListener(ia,h),l=null}},createHref(T){return t(s,T)},createURL:I,encodeLocation(T){let O=I(T);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:f,replace:g,go(T){return o.go(T)}};return C}var aa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(aa||(aa={}));function Wh(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?on(t):t,s=Bi(r.pathname||"/",n);if(s==null)return null;let i=Vl(e);Kh(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=nd(i[a],id(s));return o}function Vl(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(lt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=de([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(lt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Vl(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:td(c,i.index),routesMeta:u})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of xl(i.path))s(i,o,l)}),t}function xl(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=xl(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Kh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ed(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gh=/^:\w+$/,Qh=3,Yh=2,Xh=1,Jh=10,Zh=-2,la=e=>e==="*";function td(e,t){let n=e.split("/"),r=n.length;return n.some(la)&&(r+=Zh),t&&(r+=Yh),n.filter(s=>!la(s)).reduce((s,i)=>s+(Gh.test(i)?Qh:i===""?Xh:Jh),r)}function ed(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function nd(e,t){let{routesMeta:n}=e,r={},s="/",i=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=s==="/"?t:t.slice(s.length)||"/",u=rd({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let h=a.route;i.push({params:r,pathname:de([s,u.pathname]),pathnameBase:cd(de([s,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(s=de([s,u.pathnameBase]))}return i}function rd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=sd(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,u,h)=>{if(u==="*"){let f=a[h]||"";o=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=od(a[h]||"",u),c},{}),pathname:i,pathnameBase:o,pattern:e}}function sd(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ui(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function id(e){try{return decodeURI(e)}catch(t){return Ui(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function od(e,t){try{return decodeURIComponent(e)}catch(n){return Ui(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Bi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ad(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?on(e):e;return{pathname:n?n.startsWith("/")?n:ld(n,t):t,search:ud(r),hash:hd(s)}}function ld(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function ks(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bl(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dl(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=on(e):(s=Dn({},e),lt(!s.pathname||!s.pathname.includes("?"),ks("?","pathname","search",s)),lt(!s.pathname||!s.pathname.includes("#"),ks("#","pathname","hash",s)),lt(!s.search||!s.search.includes("#"),ks("#","search","hash",s)));let i=e===""||s.pathname==="",o=i?"/":s.pathname,a;if(r||o==null)a=n;else{let h=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;s.pathname=f.join("/")}a=h>=0?t[h]:"/"}let l=ad(s,a),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const de=e=>e.join("/").replace(/\/\/+/g,"/"),cd=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ud=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hd=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dd(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nl=["post","put","patch","delete"];new Set(Nl);const fd=["get",...Nl];new Set(fd);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},br.apply(this,arguments)}const $i=R.createContext(null),md=R.createContext(null),an=R.createContext(null),ts=R.createContext(null),ve=R.createContext({outlet:null,matches:[],isDataRoute:!1}),kl=R.createContext(null);function pd(e,t){let{relative:n}=t===void 0?{}:t;Yn()||lt(!1);let{basename:r,navigator:s}=R.useContext(an),{hash:i,pathname:o,search:a}=Ll(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:de([r,o])),s.createHref({pathname:l,search:a,hash:i})}function Yn(){return R.useContext(ts)!=null}function es(){return Yn()||lt(!1),R.useContext(ts).location}function Ml(e){R.useContext(an).static||R.useLayoutEffect(e)}function Ol(){let{isDataRoute:e}=R.useContext(ve);return e?Sd():gd()}function gd(){Yn()||lt(!1);let e=R.useContext($i),{basename:t,navigator:n}=R.useContext(an),{matches:r}=R.useContext(ve),{pathname:s}=es(),i=JSON.stringify(bl(r).map(l=>l.pathnameBase)),o=R.useRef(!1);return Ml(()=>{o.current=!0}),R.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=Dl(l,JSON.parse(i),s,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:de([t,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,i,s,e])}function Fl(){let{matches:e}=R.useContext(ve),t=e[e.length-1];return t?t.params:{}}function Ll(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=R.useContext(ve),{pathname:s}=es(),i=JSON.stringify(bl(r).map(o=>o.pathnameBase));return R.useMemo(()=>Dl(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function _d(e,t){return yd(e,t)}function yd(e,t,n){Yn()||lt(!1);let{navigator:r}=R.useContext(an),{matches:s}=R.useContext(ve),i=s[s.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let l=es(),c;if(t){var u;let C=typeof t=="string"?on(t):t;a==="/"||(u=C.pathname)!=null&&u.startsWith(a)||lt(!1),c=C}else c=l;let h=c.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",g=Wh(e,{pathname:f}),I=wd(g&&g.map(C=>Object.assign({},C,{params:Object.assign({},o,C.params),pathname:de([a,r.encodeLocation?r.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:de([a,r.encodeLocation?r.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n);return t&&I?R.createElement(ts.Provider,{value:{location:br({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ce.Pop}},I):I}function vd(){let e=Pd(),t=dd(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:s},n):null,i)}const Ed=R.createElement(vd,null);class Td extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?R.createElement(ve.Provider,{value:this.props.routeContext},R.createElement(kl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Id(e){let{routeContext:t,match:n,children:r}=e,s=R.useContext($i);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(ve.Provider,{value:t},r)}function wd(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=i.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||lt(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,l,c)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Ed);let f=t.concat(i.slice(0,c+1)),g=()=>{let I;return u?I=h:l.route.Component?I=R.createElement(l.route.Component,null):l.route.element?I=l.route.element:I=a,R.createElement(Id,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:I})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?R.createElement(Td,{location:n.location,revalidation:n.revalidation,component:h,error:u,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var ii;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(ii||(ii={}));var Nn;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Nn||(Nn={}));function Ad(e){let t=R.useContext($i);return t||lt(!1),t}function Rd(e){let t=R.useContext(md);return t||lt(!1),t}function Cd(e){let t=R.useContext(ve);return t||lt(!1),t}function jl(e){let t=Cd(),n=t.matches[t.matches.length-1];return n.route.id||lt(!1),n.route.id}function Pd(){var e;let t=R.useContext(kl),n=Rd(Nn.UseRouteError),r=jl(Nn.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Sd(){let{router:e}=Ad(ii.UseNavigateStable),t=jl(Nn.UseNavigateStable),n=R.useRef(!1);return Ml(()=>{n.current=!0}),R.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,br({fromRouteId:t},i)))},[e,t])}function ae(e){lt(!1)}function Vd(e){let{basename:t="/",children:n=null,location:r,navigationType:s=ce.Pop,navigator:i,static:o=!1}=e;Yn()&&lt(!1);let a=t.replace(/^\/*/,"/"),l=R.useMemo(()=>({basename:a,navigator:i,static:o}),[a,i,o]);typeof r=="string"&&(r=on(r));let{pathname:c="/",search:u="",hash:h="",state:f=null,key:g="default"}=r,I=R.useMemo(()=>{let C=Bi(c,a);return C==null?null:{location:{pathname:C,search:u,hash:h,state:f,key:g},navigationType:s}},[a,c,u,h,f,g,s]);return I==null?null:R.createElement(an.Provider,{value:l},R.createElement(ts.Provider,{children:n,value:I}))}function xd(e){let{children:t,location:n}=e;return _d(oi(t),n)}var ca;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ca||(ca={}));new Promise(()=>{});function oi(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,s)=>{if(!R.isValidElement(r))return;let i=[...t,s];if(r.type===R.Fragment){n.push.apply(n,oi(r.props.children,i));return}r.type!==ae&&lt(!1),!r.props.index||!r.props.children||lt(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=oi(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(this,arguments)}function bd(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function Dd(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Nd(e,t){return e.button===0&&(!t||t==="_self")&&!Dd(e)}const kd=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Md="startTransition",ua=Mh[Md];function Od(e){let{basename:t,children:n,future:r,window:s}=e,i=R.useRef();i.current==null&&(i.current=qh({window:s,v5Compat:!0}));let o=i.current,[a,l]=R.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=R.useCallback(h=>{c&&ua?ua(()=>l(h)):l(h)},[l,c]);return R.useLayoutEffect(()=>o.listen(u),[o,u]),R.createElement(Vd,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Fd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ld=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dt=R.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:c,preventScrollReset:u}=t,h=bd(t,kd),{basename:f}=R.useContext(an),g,I=!1;if(typeof c=="string"&&Ld.test(c)&&(g=c,Fd))try{let w=new URL(window.location.href),j=c.startsWith("//")?new URL(w.protocol+c):new URL(c),z=Bi(j.pathname,f);j.origin===w.origin&&z!=null?c=z+j.search+j.hash:I=!0}catch{}let C=pd(c,{relative:s}),T=jd(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:s});function O(w){r&&r(w),w.defaultPrevented||T(w)}return R.createElement("a",ai({},h,{href:g||C,onClick:I||i?r:O,ref:n,target:l}))});var ha;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ha||(ha={}));var da;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(da||(da={}));function jd(e,t){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o}=t===void 0?{}:t,a=Ol(),l=es(),c=Ll(e,{relative:o});return R.useCallback(u=>{if(Nd(u,n)){u.preventDefault();let h=r!==void 0?r:xr(l)===xr(c);a(e,{replace:h,state:s,preventScrollReset:i,relative:o})}},[l,a,c,r,s,n,e,i,o])}const Xn=R.createContext(),Ud=JSON.parse(localStorage.getItem("carrito"))||[],Bd=({children:e})=>{const[t,n]=R.useState(Ud),r=(l,c)=>{const u={...l,cantidad:c},h=t.find(g=>g.id===u.id),f=[...t];h?h.cantidad+=c:f.push(u),n(f)},s=l=>{n(c=>c.filter(u=>u.id!==l))},i=()=>t.reduce((l,c)=>l+c.cantidad,0),o=()=>{n([])},a=()=>t.reduce((l,c)=>l+c.precio*c.cantidad,0);return R.useEffect(()=>{localStorage.setItem("carrito",JSON.stringify(t))},[t]),m.jsx(Xn.Provider,{value:{carrito:t,Agregar:r,eliminarProducto:s,cantidadEnElcarrito:i,vaciarCarrito:o,calcularPrecioTotal:a},children:e})},$d=()=>{const{cantidadEnElcarrito:e}=R.useContext(Xn);return m.jsx("div",{children:m.jsxs(Dt,{className:"nav-link numero",to:"/carrito",children:[m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cart4",viewBox:"0 0 16 16",children:m.jsx("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})}),m.jsxs("span",{className:"numero",children:[" ",e()]})]})})};function qd(){return m.jsx("nav",{className:"navbar navbar-expand-lg bg-body-tertiary",children:m.jsxs("div",{className:"container-fluid",children:[m.jsx(Dt,{className:"navbar-brand",to:"/",children:"Tecno4All"}),m.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:m.jsx("span",{className:"navbar-toggler-icon"})}),m.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:m.jsxs("ul",{className:"navbar-nav",children:[m.jsx("li",{className:"nav-item",children:m.jsx(Dt,{className:"nav-link active","aria-current":"page",to:"/",children:"Inicio"})}),m.jsx("li",{className:"nav-item",children:m.jsx(Dt,{className:"nav-link",to:"/productos",children:"productos"})}),m.jsx("li",{className:"nav-item",children:m.jsx(Dt,{className:"nav-link",to:"/productos/apple",children:"Iphone"})}),m.jsx("li",{className:"nav-item",children:m.jsx(Dt,{className:"nav-link",to:"/productos/samsung",children:"Samsung"})}),m.jsx("li",{className:"nav-item",children:m.jsx(Dt,{className:"nav-link",to:"/productos/xiaomi",children:"Xiaomi"})}),m.jsx("li",{className:"nav-item",children:m.jsx(Dt,{className:"nav-link",to:"/nosotros",children:"Nosotros"})}),m.jsx("li",{children:m.jsx($d,{})})]})})]})})}function zd(){return m.jsxs("footer",{className:"footer",children:[m.jsxs("div",{className:"footer-content",children:[m.jsxs("div",{className:"footer-section",children:[m.jsx("h3",{children:"Contacto"}),m.jsx("p",{children:"Estamos aquí para ayudarte. ¡Contáctanos para cualquier consulta!"}),m.jsx("p",{children:"Email: tecno4all@gmail.com"}),m.jsx("p",{children:"Teléfono: 1130314111"})]}),m.jsxs("div",{className:"footer-section",children:[m.jsx("h3",{children:"Enlaces Rápidos"}),m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx(Dt,{"aria-current":"page",to:"/",children:"Inicio"})}),m.jsx("li",{children:m.jsx(Dt,{to:"/productos",children:"productos"})}),m.jsx("li",{children:m.jsx(Dt,{to:"/nosotros",children:"Nosotros"})})]})]}),m.jsxs("div",{className:"footer-section",children:[m.jsx("h3",{children:"Síguenos en las Redes Sociales"}),m.jsxs("div",{className:"social-icons",children:[m.jsx("a",{href:"#",className:"social-icon",children:m.jsx("i",{className:"fab fa-facebook"})}),m.jsx("a",{href:"#",className:"social-icon",children:m.jsx("i",{className:"fab fa-twitter"})}),m.jsx("a",{href:"#",className:"social-icon",children:m.jsx("i",{className:"fab fa-instagram"})})]})]})]}),m.jsx("div",{className:"footer-bottom",children:m.jsx("p",{children:"© 2023 Tecno4all. Todos los derechos reservados."})})]})}const Hd=({producto:e})=>m.jsx("section",{children:m.jsxs("div",{className:"producto",children:[m.jsx("br",{}),m.jsx("img",{className:"imagen",src:e.imagen}),m.jsxs("h4",{className:"nombre",children:[" ",e.nombre," "]}),m.jsxs("h4",{className:"precio",children:["Precio: ",e.precio," USDT "]}),m.jsxs(Dt,{className:"detalles",to:`/item/${e.id}`,children:[" ","Ver mas"," "]})]})}),Wd=({productos:e,titulo:t})=>m.jsxs("div",{children:[m.jsx("h2",{className:"productos",children:t}),m.jsx("div",{children:e.map(n=>m.jsx(Hd,{producto:n},n.id))})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Kd=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ul(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Kd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new Gd;const f=i<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const I=c<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qd=function(e){const t=Ul(e);return Bl.encodeByteArray(t,!0)},Dr=function(e){return Qd(e).replace(/\./g,"")},Yd=function(e){try{return Bl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=()=>Xd().__FIREBASE_DEFAULTS__,Zd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},tf=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yd(e[1]);return t&&JSON.parse(t)},$l=()=>{try{return Jd()||Zd()||tf()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ef=e=>{var t,n;return(n=(t=$l())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},nf=e=>{const t=ef(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ql=()=>{var e;return(e=$l())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Dr(JSON.stringify(n)),Dr(JSON.stringify(o)),a].join(".")}function of(){try{return typeof indexedDB=="object"}catch{return!1}}function af(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="FirebaseError";class ln extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=lf,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zl.prototype.create)}}class zl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?cf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,r)}}function cf(e,t){return e.replace(uf,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const uf=/\{\$([^}]+)}/g;function li(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(fa(i)&&fa(o)){if(!li(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fa(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e){return e&&e._delegate?e._delegate:e}class kn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new rf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ff(t))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=we){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=we){return this.instances.has(t)}getOptions(t=we){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:df(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=we){return this.component?this.component.multipleInstances?t:we:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function df(e){return e===we?void 0:e}function ff(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const pf={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},gf=K.INFO,_f={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},yf=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=_f[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hl{constructor(t){this.name=t,this._logLevel=gf,this._logHandler=yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const vf=(e,t)=>t.some(n=>e instanceof n);let ma,pa;function Ef(){return ma||(ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tf(){return pa||(pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,ci=new WeakMap,Kl=new WeakMap,Ms=new WeakMap,qi=new WeakMap;function If(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(fe(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wl.set(n,e)}).catch(()=>{}),qi.set(t,e),t}function wf(e){if(ci.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ci.set(e,t)}let ui={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ci.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Af(e){ui=e(ui)}function Rf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Os(this),t,...n);return Kl.set(r,t.sort?t.sort():[t]),fe(r)}:Tf().includes(e)?function(...t){return e.apply(Os(this),t),fe(Wl.get(this))}:function(...t){return fe(e.apply(Os(this),t))}}function Cf(e){return typeof e=="function"?Rf(e):(e instanceof IDBTransaction&&wf(e),vf(e,Ef())?new Proxy(e,ui):e)}function fe(e){if(e instanceof IDBRequest)return If(e);if(Ms.has(e))return Ms.get(e);const t=Cf(e);return t!==e&&(Ms.set(e,t),qi.set(t,e)),t}const Os=e=>qi.get(e);function Pf(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=fe(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fe(o.result),l.oldVersion,l.newVersion,fe(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sf=["get","getKey","getAll","getAllKeys","count"],Vf=["put","add","delete","clear"],Fs=new Map;function ga(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Fs.get(t))return Fs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Vf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sf.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Fs.set(t,i),i}Af(e=>({...e,get:(t,n,r)=>ga(t,n)||e.get(t,n,r),has:(t,n)=>!!ga(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bf(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const hi="@firebase/app",_a="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Hl("@firebase/app"),Df="@firebase/app-compat",Nf="@firebase/analytics-compat",kf="@firebase/analytics",Mf="@firebase/app-check-compat",Of="@firebase/app-check",Ff="@firebase/auth",Lf="@firebase/auth-compat",jf="@firebase/database",Uf="@firebase/database-compat",Bf="@firebase/functions",$f="@firebase/functions-compat",qf="@firebase/installations",zf="@firebase/installations-compat",Hf="@firebase/messaging",Wf="@firebase/messaging-compat",Kf="@firebase/performance",Gf="@firebase/performance-compat",Qf="@firebase/remote-config",Yf="@firebase/remote-config-compat",Xf="@firebase/storage",Jf="@firebase/storage-compat",Zf="@firebase/firestore",tm="@firebase/firestore-compat",em="firebase",nm="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]",rm={[hi]:"fire-core",[Df]:"fire-core-compat",[kf]:"fire-analytics",[Nf]:"fire-analytics-compat",[Of]:"fire-app-check",[Mf]:"fire-app-check-compat",[Ff]:"fire-auth",[Lf]:"fire-auth-compat",[jf]:"fire-rtdb",[Uf]:"fire-rtdb-compat",[Bf]:"fire-fn",[$f]:"fire-fn-compat",[qf]:"fire-iid",[zf]:"fire-iid-compat",[Hf]:"fire-fcm",[Wf]:"fire-fcm-compat",[Kf]:"fire-perf",[Gf]:"fire-perf-compat",[Qf]:"fire-rc",[Yf]:"fire-rc-compat",[Xf]:"fire-gcs",[Jf]:"fire-gcs-compat",[Zf]:"fire-fst",[tm]:"fire-fst-compat","fire-js":"fire-js",[em]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Map,fi=new Map;function sm(e,t){try{e.container.addComponent(t)}catch(n){Ve.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function kr(e){const t=e.name;if(fi.has(t))return Ve.debug(`There were multiple attempts to register component ${t}.`),!1;fi.set(t,e);for(const n of Nr.values())sm(n,e);return!0}function im(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new zl("app","Firebase",om);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=nm;function Gl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:di,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw me.create("bad-app-name",{appName:String(s)});if(n||(n=ql()),!n)throw me.create("no-options");const i=Nr.get(s);if(i){if(li(n,i.options)&&li(r,i.config))return i;throw me.create("duplicate-app",{appName:s})}const o=new mf(s);for(const l of fi.values())o.addComponent(l);const a=new am(n,r,o);return Nr.set(s,a),a}function cm(e=di){const t=Nr.get(e);if(!t&&e===di&&ql())return Gl();if(!t)throw me.create("no-app",{appName:e});return t}function ze(e,t,n){var r;let s=(r=rm[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ve.warn(a.join(" "));return}kr(new kn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="firebase-heartbeat-database",hm=1,Mn="firebase-heartbeat-store";let Ls=null;function Ql(){return Ls||(Ls=Pf(um,hm,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Mn)}}}).catch(e=>{throw me.create("idb-open",{originalErrorMessage:e.message})})),Ls}async function dm(e){try{return await(await Ql()).transaction(Mn).objectStore(Mn).get(Yl(e))}catch(t){if(t instanceof ln)Ve.warn(t.message);else{const n=me.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ve.warn(n.message)}}}async function ya(e,t){try{const r=(await Ql()).transaction(Mn,"readwrite");await r.objectStore(Mn).put(t,Yl(e)),await r.done}catch(n){if(n instanceof ln)Ve.warn(n.message);else{const r=me.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ve.warn(r.message)}}}function Yl(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=1024,mm=30*24*60*60*1e3;class pm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _m(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=va();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=mm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=va(),{heartbeatsToSend:n,unsentEntries:r}=gm(this._heartbeatsCache.heartbeats),s=Dr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function va(){return new Date().toISOString().substring(0,10)}function gm(e,t=fm){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ea(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ea(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _m{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return of()?af().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ya(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ya(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ea(e){return Dr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(e){kr(new kn("platform-logger",t=>new xf(t),"PRIVATE")),kr(new kn("heartbeat",t=>new pm(t),"PRIVATE")),ze(hi,_a,e),ze(hi,_a,"esm2017"),ze("fire-js","")}ym("");var vm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,zi=zi||{},M=vm||self;function ns(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Jn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Em(e){return Object.prototype.hasOwnProperty.call(e,js)&&e[js]||(e[js]=++Tm)}var js="closure_uid_"+(1e9*Math.random()>>>0),Tm=0;function Im(e,t,n){return e.call.apply(e.bind,arguments)}function wm(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function At(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=Im:At=wm,At.apply(null,arguments)}function gr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ft(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ee(){this.s=this.s,this.o=this.o}var Am=0;Ee.prototype.s=!1;Ee.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Am!=0)&&Em(this)};Ee.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xl=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Hi(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ta(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ns(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Rt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Rt.prototype.h=function(){this.defaultPrevented=!0};var Rm=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{M.addEventListener("test",()=>{},t),M.removeEventListener("test",()=>{},t)}catch{}return e}();function On(e){return/^[\s\xa0]*$/.test(e)}function rs(){var e=M.navigator;return e&&(e=e.userAgent)?e:""}function Ht(e){return rs().indexOf(e)!=-1}function Wi(e){return Wi[" "](e),e}Wi[" "]=function(){};function Cm(e,t){var n=yp;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Pm=Ht("Opera"),Ye=Ht("Trident")||Ht("MSIE"),Jl=Ht("Edge"),mi=Jl||Ye,Zl=Ht("Gecko")&&!(rs().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),Sm=rs().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function tc(){var e=M.document;return e?e.documentMode:void 0}var pi;t:{var Us="",Bs=function(){var e=rs();if(Zl)return/rv:([^\);]+)(\)|;)/.exec(e);if(Jl)return/Edge\/([\d\.]+)/.exec(e);if(Ye)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Sm)return/WebKit\/(\S+)/.exec(e);if(Pm)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Bs&&(Us=Bs?Bs[1]:""),Ye){var $s=tc();if($s!=null&&$s>parseFloat(Us)){pi=String($s);break t}}pi=Us}var gi;if(M.document&&Ye){var Ia=tc();gi=Ia||parseInt(pi,10)||void 0}else gi=void 0;var Vm=gi;function Fn(e,t){if(Rt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Zl){t:{try{Wi(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:xm[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Fn.$.h.call(this)}}ft(Fn,Rt);var xm={2:"touch",3:"pen",4:"mouse"};Fn.prototype.h=function(){Fn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zn="closure_listenable_"+(1e6*Math.random()|0),bm=0;function Dm(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++bm,this.fa=this.ia=!1}function ss(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ki(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Nm(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ec(e){const t={};for(const n in e)t[n]=e[n];return t}const wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nc(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<wa.length;i++)n=wa[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function is(e){this.src=e,this.g={},this.h=0}is.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=yi(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Dm(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function _i(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Xl(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ss(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function yi(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Gi="closure_lm_"+(1e6*Math.random()|0),qs={};function rc(e,t,n,r,s){if(r&&r.once)return ic(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)rc(e,t[i],n,r,s);return null}return n=Xi(n),e&&e[Zn]?e.O(t,n,Jn(r)?!!r.capture:!!r,s):sc(e,t,n,!1,r,s)}function sc(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Jn(s)?!!s.capture:!!s,a=Yi(e);if(a||(e[Gi]=a=new is(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=km(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Rm||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ac(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function km(){function e(n){return t.call(e.src,e.listener,n)}const t=Mm;return e}function ic(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ic(e,t[i],n,r,s);return null}return n=Xi(n),e&&e[Zn]?e.P(t,n,Jn(r)?!!r.capture:!!r,s):sc(e,t,n,!0,r,s)}function oc(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)oc(e,t[i],n,r,s);else r=Jn(r)?!!r.capture:!!r,n=Xi(n),e&&e[Zn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=yi(i,n,r,s),-1<n&&(ss(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Yi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=yi(t,n,r,s)),(n=-1<e?t[e]:null)&&Qi(n))}function Qi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Zn])_i(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ac(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Yi(t))?(_i(n,e),n.h==0&&(n.src=null,t[Gi]=null)):ss(e)}}}function ac(e){return e in qs?qs[e]:qs[e]="on"+e}function Mm(e,t){if(e.fa)e=!0;else{t=new Fn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Qi(e),e=n.call(r,t)}return e}function Yi(e){return e=e[Gi],e instanceof is?e:null}var zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xi(e){return typeof e=="function"?e:(e[zs]||(e[zs]=function(t){return e.handleEvent(t)}),e[zs])}function dt(){Ee.call(this),this.i=new is(this),this.S=this,this.J=null}ft(dt,Ee);dt.prototype[Zn]=!0;dt.prototype.removeEventListener=function(e,t,n,r){oc(this,e,t,n,r)};function _t(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Rt(t,e);else if(t instanceof Rt)t.target=t.target||e;else{var s=t;t=new Rt(r,e),nc(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=_r(o,r,!0,t)&&s}if(o=t.g=e,s=_r(o,r,!0,t)&&s,s=_r(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=_r(o,r,!1,t)&&s}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ss(n[r]);delete e.g[t],e.h--}}this.J=null};dt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};dt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function _r(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_i(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ji=M.JSON.stringify;class Om{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Fm(){var e=Zi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Lm{constructor(){this.h=this.g=null}add(t,n){const r=lc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lc=new Om(()=>new jm,e=>e.reset());class jm{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Um(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Bm(e){M.setTimeout(()=>{throw e},0)}let Ln,jn=!1,Zi=new Lm,cc=()=>{const e=M.Promise.resolve(void 0);Ln=()=>{e.then($m)}};var $m=()=>{for(var e;e=Fm();){try{e.h.call(e.g)}catch(n){Bm(n)}var t=lc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}jn=!1};function os(e,t){dt.call(this),this.h=e||1,this.g=t||M,this.j=At(this.qb,this),this.l=Date.now()}ft(os,dt);A=os.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_t(this,"tick"),this.ga&&(to(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function to(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}A.N=function(){os.$.N.call(this),to(this),delete this.g};function eo(e,t,n){if(typeof e=="function")n&&(e=At(e,n));else if(e&&typeof e.handleEvent=="function")e=At(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:M.setTimeout(e,t||0)}function uc(e){e.g=eo(()=>{e.g=null,e.i&&(e.i=!1,uc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class qm extends Ee{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:uc(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(e){Ee.call(this),this.h=e,this.g={}}ft(Un,Ee);var Aa=[];function hc(e,t,n,r){Array.isArray(n)||(n&&(Aa[0]=n.toString()),n=Aa);for(var s=0;s<n.length;s++){var i=rc(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function dc(e){Ki(e.g,function(t,n){this.g.hasOwnProperty(n)&&Qi(t)},e),e.g={}}Un.prototype.N=function(){Un.$.N.call(this),dc(this)};Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function as(){this.g=!0}as.prototype.Ea=function(){this.g=!1};function zm(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Hm(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function $e(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Km(e,n)+(r?" "+r:"")})}function Wm(e,t){e.info(function(){return"TIMEOUT: "+t})}as.prototype.info=function(){};function Km(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ji(n)}catch{return t}}var Ne={},Ra=null;function ls(){return Ra=Ra||new dt}Ne.Ta="serverreachability";function fc(e){Rt.call(this,Ne.Ta,e)}ft(fc,Rt);function Bn(e){const t=ls();_t(t,new fc(t))}Ne.STAT_EVENT="statevent";function mc(e,t){Rt.call(this,Ne.STAT_EVENT,e),this.stat=t}ft(mc,Rt);function Vt(e){const t=ls();_t(t,new mc(t,e))}Ne.Ua="timingevent";function pc(e,t){Rt.call(this,Ne.Ua,e),this.size=t}ft(pc,Rt);function tr(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){e()},t)}var cs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},gc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function no(){}no.prototype.h=null;function Ca(e){return e.h||(e.h=e.i())}function _c(){}var er={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ro(){Rt.call(this,"d")}ft(ro,Rt);function so(){Rt.call(this,"c")}ft(so,Rt);var vi;function us(){}ft(us,no);us.prototype.g=function(){return new XMLHttpRequest};us.prototype.i=function(){return{}};vi=new us;function nr(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Un(this),this.P=Gm,e=mi?125:void 0,this.V=new os(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yc}function yc(){this.i=null,this.g="",this.h=!1}var Gm=45e3,Ei={},Mr={};A=nr.prototype;A.setTimeout=function(e){this.P=e};function Ti(e,t,n){e.L=1,e.v=ds(re(t)),e.s=n,e.S=!0,vc(e,null)}function vc(e,t){e.G=Date.now(),rr(e),e.A=re(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Pc(n.i,"t",r),e.C=0,n=e.l.J,e.h=new yc,e.g=Gc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new qm(At(e.Pa,e,e.g),e.O)),hc(e.U,e.g,"readystatechange",e.nb),t=e.I?ec(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Bn(),zm(e.j,e.u,e.A,e.m,e.W,e.s)}A.nb=function(e){e=e.target;const t=this.M;t&&Wt(e)==3?t.l():this.Pa(e)};A.Pa=function(e){try{if(e==this.g)t:{const u=Wt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||mi||this.g&&(this.h.h||this.g.ja()||xa(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Bn(3):Bn(2)),hs(this);var n=this.g.da();this.ca=n;e:if(Ec(this)){var r=xa(this.g);e="";var s=r.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ae(this),Cn(this);var o="";break e}this.h.i=new M.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Hm(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!On(a)){var c=a;break e}}c=null}if(n=c)$e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ii(this,n);else{this.i=!1,this.o=3,Vt(12),Ae(this),Cn(this);break t}}this.S?(Tc(this,u,o),mi&&this.i&&u==3&&(hc(this.U,this.V,"tick",this.mb),this.V.start())):($e(this.j,this.m,o,null),Ii(this,o)),u==4&&Ae(this),this.i&&!this.J&&(u==4?zc(this.l,this):(this.i=!1,rr(this)))}else pp(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Vt(12)):(this.o=0,Vt(13)),Ae(this),Cn(this)}}}catch{}finally{}};function Ec(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Tc(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=Qm(e,n),s==Mr){t==4&&(e.o=4,Vt(14),r=!1),$e(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Ei){e.o=4,Vt(15),$e(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else $e(e.j,e.m,s,null),Ii(e,s);Ec(e)&&s!=Mr&&s!=Ei&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Vt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),uo(t),t.M=!0,Vt(11))):($e(e.j,e.m,n,"[Invalid Chunked Response]"),Ae(e),Cn(e))}A.mb=function(){if(this.g){var e=Wt(this.g),t=this.g.ja();this.C<t.length&&(hs(this),Tc(this,e,t),this.i&&e!=4&&rr(this))}};function Qm(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Mr:(n=Number(t.substring(n,r)),isNaN(n)?Ei:(r+=1,r+n>t.length?Mr:(t=t.slice(r,r+n),e.C=r+n,t)))}A.cancel=function(){this.J=!0,Ae(this)};function rr(e){e.Y=Date.now()+e.P,Ic(e,e.P)}function Ic(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=tr(At(e.lb,e),t)}function hs(e){e.B&&(M.clearTimeout(e.B),e.B=null)}A.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Wm(this.j,this.A),this.L!=2&&(Bn(),Vt(17)),Ae(this),this.o=2,Cn(this)):Ic(this,this.Y-e)};function Cn(e){e.l.H==0||e.J||zc(e.l,e)}function Ae(e){hs(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,to(e.V),dc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ii(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||wi(n.i,e))){if(!e.K&&wi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Lr(n),ps(n);else break t;co(n),Vt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=tr(At(n.ib,n),6e3));if(1>=xc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Re(n,11)}else if((e.K||n.g==e)&&Lr(n),!On(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const I=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=r.i;i.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(io(i,i.h),i.h=null))}if(r.F){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.Da=C,Q(r.I,r.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Kc(r,r.J?r.pa:null,r.Y),o.K){bc(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(hs(a),rr(a)),r.g=o}else $c(r);0<n.j.length&&gs(n)}else c[0]!="stop"&&c[0]!="close"||Re(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Re(n,7):lo(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Bn(4)}catch{}}function Ym(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ns(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Xm(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ns(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function wc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ns(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Xm(e),r=Ym(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jm(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Se(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Se){this.h=e.h,Or(this,e.j),this.s=e.s,this.g=e.g,Fr(this,e.m),this.l=e.l;var t=e.i,n=new $n;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Pa(this,n),this.o=e.o}else e&&(t=String(e).match(Ac))?(this.h=!1,Or(this,t[1]||"",!0),this.s=Tn(t[2]||""),this.g=Tn(t[3]||"",!0),Fr(this,t[4]),this.l=Tn(t[5]||"",!0),Pa(this,t[6]||"",!0),this.o=Tn(t[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}Se.prototype.toString=function(){var e=[],t=this.j;t&&e.push(In(t,Sa,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(In(t,Sa,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(In(n,n.charAt(0)=="/"?ep:tp,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",In(n,rp)),e.join("")};function re(e){return new Se(e)}function Or(e,t,n){e.j=n?Tn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Fr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Pa(e,t,n){t instanceof $n?(e.i=t,sp(e.i,e.h)):(n||(t=In(t,np)),e.i=new $n(t,e.h))}function Q(e,t,n){e.i.set(t,n)}function ds(e){return Q(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Tn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function In(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Zm),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Zm(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Sa=/[#\/\?@]/g,tp=/[#\?:]/g,ep=/[#\?]/g,np=/[#\?@]/g,rp=/#/g;function $n(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Te(e){e.g||(e.g=new Map,e.h=0,e.i&&Jm(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}A=$n.prototype;A.add=function(e,t){Te(this),this.i=null,e=cn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Rc(e,t){Te(e),t=cn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Cc(e,t){return Te(e),t=cn(e,t),e.g.has(t)}A.forEach=function(e,t){Te(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};A.ta=function(){Te(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};A.Z=function(e){Te(this);let t=[];if(typeof e=="string")Cc(this,e)&&(t=t.concat(this.g.get(cn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};A.set=function(e,t){return Te(this),this.i=null,e=cn(this,e),Cc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};A.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Pc(e,t,n){Rc(e,t),0<n.length&&(e.i=null,e.g.set(cn(e,t),Hi(n)),e.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function cn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function sp(e,t){t&&!e.j&&(Te(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Rc(this,r),Pc(this,s,n))},e)),e.j=t}var ip=class{constructor(e,t){this.g=e,this.map=t}};function Sc(e){this.l=e||op,M.PerformanceNavigationTiming?(e=M.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var op=10;function Vc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function xc(e){return e.h?1:e.g?e.g.size:0}function wi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function io(e,t){e.g?e.g.add(t):e.h=t}function bc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Sc.prototype.cancel=function(){if(this.i=Dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Dc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Hi(e.i)}var ap=class{stringify(e){return M.JSON.stringify(e,void 0)}parse(e){return M.JSON.parse(e,void 0)}};function lp(){this.g=new ap}function cp(e,t,n){const r=n||"";try{wc(e,function(s,i){let o=s;Jn(s)&&(o=Ji(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function up(e,t){const n=new as;if(M.Image){const r=new Image;r.onload=gr(yr,n,r,"TestLoadImage: loaded",!0,t),r.onerror=gr(yr,n,r,"TestLoadImage: error",!1,t),r.onabort=gr(yr,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=gr(yr,n,r,"TestLoadImage: timeout",!1,t),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function yr(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function sr(e){this.l=e.fc||null,this.j=e.ob||!1}ft(sr,no);sr.prototype.g=function(){return new fs(this.l,this.j)};sr.prototype.i=function(e){return function(){return e}}({});function fs(e,t){dt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=oo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(fs,dt);var oo=0;A=fs.prototype;A.open=function(e,t){if(this.readyState!=oo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,qn(this)};A.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||M).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=oo};A.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Nc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}A.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ir(this):qn(this),this.readyState==3&&Nc(this)}};A.Za=function(e){this.g&&(this.response=this.responseText=e,ir(this))};A.Ya=function(e){this.g&&(this.response=e,ir(this))};A.ka=function(){this.g&&ir(this)};function ir(e){e.readyState=4,e.l=null,e.j=null,e.A=null,qn(e)}A.setRequestHeader=function(e,t){this.v.append(e,t)};A.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function qn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var hp=M.JSON.parse;function et(e){dt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=kc,this.L=this.M=!1}ft(et,dt);var kc="",dp=/^https?$/i,fp=["POST","PUT"];A=et.prototype;A.Oa=function(e){this.M=e};A.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vi.g(),this.C=this.u?Ca(this.u):Ca(vi),this.g.onreadystatechange=At(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Va(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=M.FormData&&e instanceof M.FormData,!(0<=Xl(fp,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fc(this),0<this.B&&((this.L=mp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.ua,this)):this.A=eo(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Va(this,i)}};function mp(e){return Ye&&typeof e.timeout=="number"&&e.ontimeout!==void 0}A.ua=function(){typeof zi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function Va(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mc(e),ms(e)}function Mc(e){e.F||(e.F=!0,_t(e,"complete"),_t(e,"error"))}A.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_t(this,"complete"),_t(this,"abort"),ms(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ms(this,!0)),et.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?Oc(this):this.kb())};A.kb=function(){Oc(this)};function Oc(e){if(e.h&&typeof zi<"u"&&(!e.C[1]||Wt(e)!=4||e.da()!=2)){if(e.v&&Wt(e)==4)eo(e.La,0,e);else if(_t(e,"readystatechange"),Wt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Ac)[1]||null;!s&&M.self&&M.self.location&&(s=M.self.location.protocol.slice(0,-1)),r=!dp.test(s?s.toLowerCase():"")}n=r}if(n)_t(e,"complete"),_t(e,"success");else{e.m=6;try{var i=2<Wt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Mc(e)}}finally{ms(e)}}}}function ms(e,t){if(e.g){Fc(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||_t(e,"ready");try{n.onreadystatechange=r}catch{}}}function Fc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(M.clearTimeout(e.A),e.A=null)}A.isActive=function(){return!!this.g};function Wt(e){return e.g?e.g.readyState:0}A.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),hp(t)}};function xa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case kc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function pp(e){const t={};e=(e.g&&2<=Wt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(On(e[r]))continue;var n=Um(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Nm(t,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lc(e){let t="";return Ki(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ao(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Lc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Q(e,t,n))}function yn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function jc(e){this.Ga=0,this.j=[],this.l=new as,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=yn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=yn("baseRetryDelayMs",5e3,e),this.hb=yn("retryDelaySeedMs",1e4,e),this.eb=yn("forwardChannelMaxRetries",2,e),this.xa=yn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Sc(e&&e.concurrentRequestLimit),this.Ja=new lp,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=jc.prototype;A.ra=8;A.H=1;function lo(e){if(Uc(e),e.H==3){var t=e.W++,n=re(e.I);if(Q(n,"SID",e.K),Q(n,"RID",t),Q(n,"TYPE","terminate"),or(e,n),t=new nr(e,e.l,t),t.L=2,t.v=ds(re(n)),n=!1,M.navigator&&M.navigator.sendBeacon)try{n=M.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&M.Image&&(new Image().src=t.v,n=!0),n||(t.g=Gc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),rr(t)}Wc(e)}function ps(e){e.g&&(uo(e),e.g.cancel(),e.g=null)}function Uc(e){ps(e),e.u&&(M.clearTimeout(e.u),e.u=null),Lr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&M.clearTimeout(e.m),e.m=null)}function gs(e){if(!Vc(e.i)&&!e.m){e.m=!0;var t=e.Na;Ln||cc(),jn||(Ln(),jn=!0),Zi.add(t,e),e.C=0}}function gp(e,t){return xc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=tr(At(e.Na,e,t),Hc(e,e.C)),e.C++,!0)}A.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new nr(this,this.l,e);let i=this.s;if(this.U&&(i?(i=ec(i),nc(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Bc(this,s,t),n=re(this.I),Q(n,"RID",e),Q(n,"CVER",22),this.F&&Q(n,"X-HTTP-Session-Id",this.F),or(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Lc(i)))+"&"+t:this.o&&ao(n,this.o,i)),io(this.i,s),this.bb&&Q(n,"TYPE","init"),this.P?(Q(n,"$req",t),Q(n,"SID","null"),s.aa=!0,Ti(s,n,null)):Ti(s,n,t),this.H=2}}else this.H==3&&(e?ba(this,e):this.j.length==0||Vc(this.i)||ba(this))};function ba(e,t){var n;t?n=t.m:n=e.W++;const r=re(e.I);Q(r,"SID",e.K),Q(r,"RID",n),Q(r,"AID",e.V),or(e,r),e.o&&e.s&&ao(r,e.o,e.s),n=new nr(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Bc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),io(e.i,n),Ti(n,r,t)}function or(e,t){e.na&&Ki(e.na,function(n,r){Q(t,r,n)}),e.h&&wc({},function(n,r){Q(t,r,n)})}function Bc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?At(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{cp(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function $c(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ln||cc(),jn||(Ln(),jn=!0),Zi.add(t,e),e.A=0}}function co(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=tr(At(e.Ma,e),Hc(e,e.A)),e.A++,!0)}A.Ma=function(){if(this.u=null,qc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=tr(At(this.jb,this),e)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Vt(10),ps(this),qc(this))};function uo(e){e.B!=null&&(M.clearTimeout(e.B),e.B=null)}function qc(e){e.g=new nr(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=re(e.wa);Q(t,"RID","rpc"),Q(t,"SID",e.K),Q(t,"AID",e.V),Q(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Q(t,"TO",e.qa),Q(t,"TYPE","xmlhttp"),or(e,t),e.o&&e.s&&ao(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ds(re(t)),n.s=null,n.S=!0,vc(n,e)}A.ib=function(){this.v!=null&&(this.v=null,ps(this),co(this),Vt(19))};function Lr(e){e.v!=null&&(M.clearTimeout(e.v),e.v=null)}function zc(e,t){var n=null;if(e.g==t){Lr(e),uo(e),e.g=null;var r=2}else if(wi(e.i,t))n=t.F,bc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=ls(),_t(r,new pc(r,n)),gs(e)}else $c(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&gp(e,t)||r==2&&co(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Re(e,5);break;case 4:Re(e,10);break;case 3:Re(e,6);break;default:Re(e,2)}}}function Hc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Re(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=At(e.pb,e);n||(n=new Se("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Or(n,"https"),ds(n)),up(n.toString(),r)}else Vt(2);e.H=0,e.h&&e.h.za(t),Wc(e),Uc(e)}A.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Vt(2)):(this.l.info("Failed to ping google.com"),Vt(1))};function Wc(e){if(e.H=0,e.ma=[],e.h){const t=Dc(e.i);(t.length!=0||e.j.length!=0)&&(Ta(e.ma,t),Ta(e.ma,e.j),e.i.i.length=0,Hi(e.j),e.j.length=0),e.h.ya()}}function Kc(e,t,n){var r=n instanceof Se?re(n):new Se(n);if(r.g!="")t&&(r.g=t+"."+r.g),Fr(r,r.m);else{var s=M.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Se(null);r&&Or(i,r),t&&(i.g=t),s&&Fr(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&Q(r,n,t),Q(r,"VER",e.ra),or(e,r),r}function Gc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new et(new sr({ob:!0})):new et(e.va),t.Oa(e.J),t}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qc(){}A=Qc.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function jr(){if(Ye&&!(10<=Number(Vm)))throw Error("Environmental error: no available transport.")}jr.prototype.g=function(e,t){return new kt(e,t)};function kt(e,t){dt.call(this),this.g=new jc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!On(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!On(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new un(this)}ft(kt,dt);kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Vt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Kc(e,null,e.Y),gs(e)};kt.prototype.close=function(){lo(this.g)};kt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ji(e),e=n);t.j.push(new ip(t.fb++,e)),t.H==3&&gs(t)};kt.prototype.N=function(){this.g.h=null,delete this.j,lo(this.g),delete this.g,kt.$.N.call(this)};function Yc(e){ro.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ft(Yc,ro);function Xc(){so.call(this),this.status=1}ft(Xc,so);function un(e){this.g=e}ft(un,Qc);un.prototype.Ba=function(){_t(this.g,"a")};un.prototype.Aa=function(e){_t(this.g,new Yc(e))};un.prototype.za=function(e){_t(this.g,new Xc)};un.prototype.ya=function(){_t(this.g,"b")};function _p(){this.blockSize=-1}function Bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ft(Bt,_p);Bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hs(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Bt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Hs(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Hs(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Hs(this,r),s=0;break}}this.h=s,this.i+=t};Bt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function G(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var yp={};function ho(e){return-128<=e&&128>e?Cm(e,function(t){return new G([t|0],0>t?-1:0)}):new G([e|0],0>e?-1:0)}function Kt(e){if(isNaN(e)||!isFinite(e))return He;if(0>e)return gt(Kt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ai;return new G(t,0)}function Jc(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return gt(Jc(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Kt(Math.pow(t,8)),r=He,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=Kt(Math.pow(t,i)),r=r.R(i).add(Kt(o))):(r=r.R(n),r=r.add(Kt(o)))}return r}var Ai=4294967296,He=ho(0),Ri=ho(1),Da=ho(16777216);A=G.prototype;A.ea=function(){if(Ft(this))return-gt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ai+r)*t,t*=Ai}return e};A.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(te(this))return"0";if(Ft(this))return"-"+gt(this).toString(e);for(var t=Kt(Math.pow(e,6)),n=this,r="";;){var s=Br(n,t).g;n=Ur(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,te(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};A.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function te(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ft(e){return e.h==-1}A.X=function(e){return e=Ur(this,e),Ft(e)?-1:te(e)?0:1};function gt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new G(n,~e.h).add(Ri)}A.abs=function(){return Ft(this)?gt(this):this};A.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new G(n,n[n.length-1]&-2147483648?-1:0)};function Ur(e,t){return e.add(gt(t))}A.R=function(e){if(te(this)||te(e))return He;if(Ft(this))return Ft(e)?gt(this).R(gt(e)):gt(gt(this).R(e));if(Ft(e))return gt(this.R(gt(e)));if(0>this.X(Da)&&0>e.X(Da))return Kt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,vr(n,2*r+2*s),n[2*r+2*s+1]+=i*l,vr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,vr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,vr(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new G(n,0)};function vr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function vn(e,t){this.g=e,this.h=t}function Br(e,t){if(te(t))throw Error("division by zero");if(te(e))return new vn(He,He);if(Ft(e))return t=Br(gt(e),t),new vn(gt(t.g),gt(t.h));if(Ft(t))return t=Br(e,gt(t)),new vn(gt(t.g),t.h);if(30<e.g.length){if(Ft(e)||Ft(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ri,r=t;0>=r.X(e);)n=Na(n),r=Na(r);var s=Le(n,1),i=Le(r,1);for(r=Le(r,2),n=Le(n,2);!te(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Le(r,1),n=Le(n,1)}return t=Ur(e,s.R(t)),new vn(s,t)}for(s=He;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Kt(n),o=i.R(t);Ft(o)||0<o.X(e);)n-=r,i=Kt(n),o=i.R(t);te(i)&&(i=Ri),s=s.add(i),e=Ur(e,o)}return new vn(s,e)}A.gb=function(e){return Br(this,e).h};A.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new G(n,this.h&e.h)};A.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new G(n,this.h|e.h)};A.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new G(n,this.h^e.h)};function Na(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new G(n,e.h)}function Le(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new G(s,e.h)}jr.prototype.createWebChannel=jr.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;cs.NO_ERROR=0;cs.TIMEOUT=8;cs.HTTP_ERROR=6;gc.COMPLETE="complete";_c.EventType=er;er.OPEN="a";er.CLOSE="b";er.ERROR="c";er.MESSAGE="d";dt.prototype.listen=dt.prototype.O;et.prototype.listenOnce=et.prototype.P;et.prototype.getLastError=et.prototype.Sa;et.prototype.getLastErrorCode=et.prototype.Ia;et.prototype.getStatus=et.prototype.da;et.prototype.getResponseJson=et.prototype.Wa;et.prototype.getResponseText=et.prototype.ja;et.prototype.send=et.prototype.ha;et.prototype.setWithCredentials=et.prototype.Oa;Bt.prototype.digest=Bt.prototype.l;Bt.prototype.reset=Bt.prototype.reset;Bt.prototype.update=Bt.prototype.j;G.prototype.add=G.prototype.add;G.prototype.multiply=G.prototype.R;G.prototype.modulo=G.prototype.gb;G.prototype.compare=G.prototype.X;G.prototype.toNumber=G.prototype.ea;G.prototype.toString=G.prototype.toString;G.prototype.getBits=G.prototype.D;G.fromNumber=Kt;G.fromString=Jc;var vp=function(){return new jr},Ep=function(){return ls()},Ws=cs,Tp=gc,Ip=Ne,ka={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wp=sr,Er=_c,Ap=et,Rp=Bt,We=G;const Ma="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new Hl("@firebase/firestore");function Oa(){return xe.logLevel}function x(e,...t){if(xe.logLevel<=K.DEBUG){const n=t.map(fo);xe.debug(`Firestore (${hn}): ${e}`,...n)}}function se(e,...t){if(xe.logLevel<=K.ERROR){const n=t.map(fo);xe.error(`Firestore (${hn}): ${e}`,...n)}}function Xe(e,...t){if(xe.logLevel<=K.WARN){const n=t.map(fo);xe.warn(`Firestore (${hn}): ${e}`,...n)}}function fo(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e="Unexpected state"){const t=`FIRESTORE (${hn}) INTERNAL ASSERTION FAILED: `+e;throw se(t),new Error(t)}function X(e,t){e||k()}function L(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends ln{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class Pp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sp{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ee,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ee)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new Zc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new Tt(t)}}class Vp{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xp{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Vp(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dp{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(X(typeof n.token=="string"),this.R=n.token,new bp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Np(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function H(e,t){return e<t?-1:e>t?1:0}function Je(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new S(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new S(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new S(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new ct(0,0))}static max(){return new F(new ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,n,r){n===void 0?n=0:n>t.length&&k(),r===void 0?r=t.length-n:r>t.length-n&&k(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return zn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof zn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Y extends zn{construct(t,n,r){return new Y(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new S(y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const kp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends zn{construct(t,n,r){return new wt(t,n,r)}static isValidIdentifier(t){return kp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new S(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new S(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new S(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new S(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.path=t}static fromPath(t){return new D(Y.fromString(t))}static fromName(t){return new D(Y.fromString(t).popFirst(5))}static empty(){return new D(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Y.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new D(new Y(t.slice()))}}function Mp(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new ge(s,D.empty(),t)}function Op(e){return new ge(e.readTime,e.key,-1)}class ge{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new ge(F.min(),D.empty(),-1)}static max(){return new ge(F.max(),D.empty(),-1)}}function Fp(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=D.comparator(e.documentKey,t.documentKey),n!==0?n:H(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e){if(e.code!==y.FAILED_PRECONDITION||e.message!==Lp)throw e;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new v((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):v.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):v.reject(n)}static resolve(t){return new v((n,r)=>{n(t)})}static reject(t){return new v((n,r)=>{r(t)})}static waitFor(t){return new v((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=v.resolve(!1);for(const r of t)n=n.next(s=>s?v.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new v((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new v((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function lr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}mo.ae=-1;function _s(e){return e==null}function $r(e){return e===0&&1/e==-1/0}function Up(e){return typeof e=="number"&&Number.isInteger(e)&&!$r(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function dn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){this.comparator=t,this.root=n||pt.EMPTY}insert(t,n){return new Z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tr(this.root,t,this.comparator,!0)}}class Tr{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new pt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const t=this.left.check();if(t!==this.right.check())throw k();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(t,n,r,s,i){return this}insert(t,n,r){return new pt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new La(this.data.getIterator())}getIteratorFrom(t){return new La(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ct)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ct(this.comparator);return n.data=t,n}}class La{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.fields=t,t.sort(wt.comparator)}static empty(){return new Ut([])}unionWith(t){let n=new Ct(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Je(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nu("Invalid base64 string: "+i):i}}(t);return new Pt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Pt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const Bp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _e(e){if(X(!!e),typeof e=="string"){let t=0;const n=Bp.exec(e);if(X(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(e.seconds),nanos:it(e.nanos)}}function it(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function be(e){return typeof e=="string"?Pt.fromBase64String(e):Pt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function go(e){const t=e.mapValue.fields.__previous_value__;return po(t)?go(t):t}function Hn(e){const t=_e(e.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t,n,r,s,i,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Wn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Wn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Wn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function De(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?po(e)?4:qp(e)?9007199254740991:10:k()}function Yt(e,t){if(e===t)return!0;const n=De(e);if(n!==De(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hn(e).isEqual(Hn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_e(s.timestampValue),a=_e(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return be(s.bytesValue).isEqual(be(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=it(s.doubleValue),a=it(i.doubleValue);return o===a?$r(o)===$r(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Je(e.arrayValue.values||[],t.arrayValue.values||[],Yt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Fa(o)!==Fa(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Yt(o[l],a[l])))return!1;return!0}(e,t);default:return k()}}function Kn(e,t){return(e.values||[]).find(n=>Yt(n,t))!==void 0}function Ze(e,t){if(e===t)return 0;const n=De(e),r=De(t);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=it(i.integerValue||i.doubleValue),l=it(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return ja(e.timestampValue,t.timestampValue);case 4:return ja(Hn(e),Hn(t));case 5:return H(e.stringValue,t.stringValue);case 6:return function(i,o){const a=be(i),l=be(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=H(a[c],l[c]);if(u!==0)return u}return H(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=H(it(i.latitude),it(o.latitude));return a!==0?a:H(it(i.longitude),it(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Ze(a[c],l[c]);if(u)return u}return H(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Ir.mapValue&&o===Ir.mapValue)return 0;if(i===Ir.mapValue)return 1;if(o===Ir.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=H(l[h],u[h]);if(f!==0)return f;const g=Ze(a[l[h]],c[u[h]]);if(g!==0)return g}return H(l.length,u.length)}(e.mapValue,t.mapValue);default:throw k()}}function ja(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return H(e,t);const n=_e(e),r=_e(t),s=H(n.seconds,r.seconds);return s!==0?s:H(n.nanos,r.nanos)}function tn(e){return Ci(e)}function Ci(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=_e(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return be(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return D.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ci(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ci(n.fields[o])}`;return s+"}"}(e.mapValue):k()}function Ua(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Pi(e){return!!e&&"integerValue"in e}function _o(e){return!!e&&"arrayValue"in e}function Ba(e){return!!e&&"nullValue"in e}function $a(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Rr(e){return!!e&&"mapValue"in e}function Pn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return dn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Pn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Pn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function qp(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Rr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pn(n)}setAll(t){let n=wt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Pn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){dn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Lt(Pn(this.value))}}function ru(e){const t=[];return dn(e.fields,(n,r)=>{const s=new wt([n]);if(Rr(r)){const i=ru(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new It(t,0,F.min(),F.min(),F.min(),Lt.empty(),0)}static newFoundDocument(t,n,r,s){return new It(t,1,n,F.min(),r,s,0)}static newNoDocument(t,n){return new It(t,2,n,F.min(),F.min(),Lt.empty(),0)}static newUnknownDocument(t,n){return new It(t,3,n,F.min(),F.min(),Lt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,n){this.position=t,this.inclusive=n}}function qa(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=Ze(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function za(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,n="asc"){this.field=t,this.dir=n}}function zp(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{}class at extends su{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Wp(t,n,r):n==="array-contains"?new Qp(t,r):n==="in"?new Yp(t,r):n==="not-in"?new Xp(t,r):n==="array-contains-any"?new Jp(t,r):new at(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Kp(t,r):new Gp(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ze(n,this.value)):n!==null&&De(this.value)===De(n)&&this.matchesComparison(Ze(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $t extends su{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new $t(t,n)}matches(t){return iu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function iu(e){return e.op==="and"}function ou(e){return Hp(e)&&iu(e)}function Hp(e){for(const t of e.filters)if(t instanceof $t)return!1;return!0}function Si(e){if(e instanceof at)return e.field.canonicalString()+e.op.toString()+tn(e.value);if(ou(e))return e.filters.map(t=>Si(t)).join(",");{const t=e.filters.map(n=>Si(n)).join(",");return`${e.op}(${t})`}}function au(e,t){return e instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&Yt(r.value,s.value)}(e,t):e instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&au(o,s.filters[a]),!0):!1}(e,t):void k()}function lu(e){return e instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${tn(n.value)}`}(e):e instanceof $t?function(n){return n.op.toString()+" {"+n.getFilters().map(lu).join(" ,")+"}"}(e):"Filter"}class Wp extends at{constructor(t,n,r){super(t,n,r),this.key=D.fromName(r.referenceValue)}matches(t){const n=D.comparator(t.key,this.key);return this.matchesComparison(n)}}class Kp extends at{constructor(t,n){super(t,"in",n),this.keys=cu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Gp extends at{constructor(t,n){super(t,"not-in",n),this.keys=cu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function cu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class Qp extends at{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return _o(n)&&Kn(n.arrayValue,this.value)}}class Yp extends at{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Kn(this.value.arrayValue,n)}}class Xp extends at{constructor(t,n){super(t,"not-in",n)}matches(t){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Kn(this.value.arrayValue,n)}}class Jp extends at{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!_o(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Ha(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Zp(e,t,n,r,s,i,o)}function yo(e){const t=L(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Si(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_s(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>tn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>tn(r)).join(",")),t.he=n}return t.he}function vo(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zp(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!au(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!za(e.startAt,t.startAt)&&za(e.endAt,t.endAt)}function Vi(e){return D.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function tg(e,t,n,r,s,i,o,a){return new cr(e,t,n,r,s,i,o,a)}function Eo(e){return new cr(e)}function Wa(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function uu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function To(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function hu(e){return e.collectionGroup!==null}function Vn(e){const t=L(e);if(t.Pe===null){t.Pe=[];const n=To(t),r=uu(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Sn(n)),t.Pe.push(new Sn(wt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Sn(wt.keyField(),i))}}}return t.Pe}function ie(e){const t=L(e);return t.Ie||(t.Ie=eg(t,Vn(e))),t.Ie}function eg(e,t){if(e.limitType==="F")return Ha(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Sn(s.field,i)});const n=e.endAt?new qr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qr(e.startAt.position,e.startAt.inclusive):null;return Ha(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function xi(e,t){t.getFirstInequalityField(),To(e);const n=e.filters.concat([t]);return new cr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function bi(e,t,n){return new cr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ys(e,t){return vo(ie(e),ie(t))&&e.limitType===t.limitType}function du(e){return`${yo(ie(e))}|lt:${e.limitType}`}function Di(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>lu(s)).join(", ")}]`),_s(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>tn(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>tn(s)).join(",")),`Target(${r})`}(ie(e))}; limitType=${e.limitType})`}function vs(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):D.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Vn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=qa(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Vn(r),s)||r.endAt&&!function(o,a,l){const c=qa(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Vn(r),s))}(e,t)}function ng(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function fu(e){return(t,n)=>{let r=!1;for(const s of Vn(e)){const i=rg(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function rg(e,t,n){const r=e.field.isKeyField()?D.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Ze(l,c):k()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return k()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){dn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return eu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Z(D.comparator);function oe(){return sg}const mu=new Z(D.comparator);function wn(...e){let t=mu;for(const n of e)t=t.insert(n.key,n);return t}function pu(e){let t=mu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ce(){return xn()}function gu(){return xn()}function xn(){return new fn(e=>e.toString(),(e,t)=>e.isEqual(t))}const ig=new Z(D.comparator),og=new Ct(D.comparator);function U(...e){let t=og;for(const n of e)t=t.add(n);return t}const ag=new Ct(H);function lg(){return ag}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$r(t)?"-0":t}}function yu(e){return{integerValue:""+e}}function cg(e,t){return Up(t)?yu(t):_u(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this._=void 0}}function ug(e,t,n){return e instanceof zr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&po(i)&&(i=go(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Gn?Eu(e,t):e instanceof Qn?Tu(e,t):function(s,i){const o=vu(s,i),a=Ka(o)+Ka(s.Ee);return Pi(o)&&Pi(s.Ee)?yu(a):_u(s.serializer,a)}(e,t)}function hg(e,t,n){return e instanceof Gn?Eu(e,t):e instanceof Qn?Tu(e,t):n}function vu(e,t){return e instanceof Hr?function(r){return Pi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class zr extends Es{}class Gn extends Es{constructor(t){super(),this.elements=t}}function Eu(e,t){const n=Iu(t);for(const r of e.elements)n.some(s=>Yt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Qn extends Es{constructor(t){super(),this.elements=t}}function Tu(e,t){let n=Iu(t);for(const r of e.elements)n=n.filter(s=>!Yt(s,r));return{arrayValue:{values:n}}}class Hr extends Es{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function Ka(e){return it(e.integerValue||e.doubleValue)}function Iu(e){return _o(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dg(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Gn&&s instanceof Gn||r instanceof Qn&&s instanceof Qn?Je(r.elements,s.elements,Yt):r instanceof Hr&&s instanceof Hr?Yt(r.Ee,s.Ee):r instanceof zr&&s instanceof zr}(e.transform,t.transform)}class fg{constructor(t,n){this.version=t,this.transformResults=n}}class ne{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ne}static exists(t){return new ne(void 0,t)}static updateTime(t){return new ne(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ts{}function wu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ru(e.key,ne.none()):new ur(e.key,e.data,ne.none());{const n=e.data,r=Lt.empty();let s=new Ct(wt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ke(e.key,r,new Ut(s.toArray()),ne.none())}}function mg(e,t,n){e instanceof ur?function(s,i,o){const a=s.value.clone(),l=Qa(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ke?function(s,i,o){if(!Cr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Qa(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Au(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function bn(e,t,n,r){return e instanceof ur?function(i,o,a,l){if(!Cr(i.precondition,o))return a;const c=i.value.clone(),u=Ya(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof ke?function(i,o,a,l){if(!Cr(i.precondition,o))return a;const c=Ya(i.fieldTransforms,l,o),u=o.data;return u.setAll(Au(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return Cr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function pg(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=vu(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function Ga(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Je(r,s,(i,o)=>dg(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ur extends Ts{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ke extends Ts{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Au(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Qa(e,t,n){const r=new Map;X(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,hg(o,a,n[s]))}return r}function Ya(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ug(i,o,t))}return r}class Ru extends Ts{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gg extends Ts{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&mg(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=bn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=bn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=gu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=wu(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),U())}isEqual(t){return this.batchId===t.batchId&&Je(this.mutations,t.mutations,(n,r)=>Ga(n,r))&&Je(this.baseMutations,t.baseMutations,(n,r)=>Ga(n,r))}}class Io{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){X(t.mutations.length===r.length);let s=function(){return ig}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Io(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,$;function Eg(e){switch(e){default:return k();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Cu(e){if(e===void 0)return se("GRPC error has no .code"),y.UNKNOWN;switch(e){case st.OK:return y.OK;case st.CANCELLED:return y.CANCELLED;case st.UNKNOWN:return y.UNKNOWN;case st.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case st.INTERNAL:return y.INTERNAL;case st.UNAVAILABLE:return y.UNAVAILABLE;case st.UNAUTHENTICATED:return y.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case st.NOT_FOUND:return y.NOT_FOUND;case st.ALREADY_EXISTS:return y.ALREADY_EXISTS;case st.PERMISSION_DENIED:return y.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case st.ABORTED:return y.ABORTED;case st.OUT_OF_RANGE:return y.OUT_OF_RANGE;case st.UNIMPLEMENTED:return y.UNIMPLEMENTED;case st.DATA_LOSS:return y.DATA_LOSS;default:return k()}}($=st||(st={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wr}static getOrCreateInstance(){return wr===null&&(wr=new wo),wr}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let wr=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new We([4294967295,4294967295],0);function Xa(e){const t=Tg().encode(e),n=new Rp;return n.update(t),new Uint8Array(n.digest())}function Ja(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new We([n,r],0),new We([s,i],0)]}class Ao{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new An(`Invalid padding: ${n}`);if(r<0)throw new An(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new An(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new An(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=We.fromNumber(this.Ae)}Ve(t,n,r){let s=t.add(n.multiply(We.fromNumber(r)));return s.compare(Ig)===1&&(s=new We([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=Xa(t),[r,s]=Ja(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Ao(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=Xa(t),[r,s]=Ja(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class An extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,hr.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Is(F.min(),s,new Z(H),oe(),U())}}class hr{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new hr(r,n,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n,r,s){this.ge=t,this.removedTargetIds=n,this.key=r,this.pe=s}}class Pu{constructor(t,n){this.targetId=t,this.ye=n}}class Su{constructor(t,n,r=Pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Za{constructor(){this.we=0,this.Se=el(),this.be=Pt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=U(),n=U(),r=U();return this.Se.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:k()}}),new hr(this.be,this.De,t,n,r)}Oe(){this.ve=!1,this.Se=el()}Ne(t,n){this.ve=!0,this.Se=this.Se.insert(t,n)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class wg{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=oe(),this.Ue=tl(),this.We=new Z(H)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const r=this.Je(n);switch(t.state){case 0:this.Ye(n)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(t.resumeToken));break;default:k()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(t){var n;const r=t.targetId,s=t.ye.count,i=this.et(r);if(i){const o=i.target;if(Vi(o))if(s===0){const a=new D(o.path);this.je(r,a,It.newNoDocument(a,F.min()))}else X(s===1);else{const a=this.tt(r);if(a!==s){const l=this.nt(t),c=l?this.rt(l,t,a):1;if(c!==0){this.Ze(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(r,u)}(n=wo.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,g,I,C){var T,O,w,j,z,q;const xt={localCacheCount:h,existenceFilterCount:f.count,databaseId:g.database,projectId:g.projectId},yt=f.unchangedNames;return yt&&(xt.bloomFilter={applied:C===0,hashCount:(T=yt==null?void 0:yt.hashCount)!==null&&T!==void 0?T:0,bitmapLength:(j=(w=(O=yt==null?void 0:yt.bits)===null||O===void 0?void 0:O.bitmap)===null||w===void 0?void 0:w.length)!==null&&j!==void 0?j:0,padding:(q=(z=yt==null?void 0:yt.bits)===null||z===void 0?void 0:z.padding)!==null&&q!==void 0?q:0,mightContain:Oe=>{var vt;return(vt=I==null?void 0:I.mightContain(Oe))!==null&&vt!==void 0&&vt}}),xt}(a,t.ye,this.Qe.it(),l,c))}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=be(r).toUint8Array()}catch(l){if(l instanceof nu)return Xe("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ao(o,s,i)}catch(l){return Xe(l instanceof An?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(t,n,r){return n.ye.count===r-this.st(t,n.targetId)?0:2}st(t,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.je(n,i,null),s++)}),s}ot(t){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Vi(a.target)){const l=new D(a.target.path);this.$e.get(l)!==null||this._t(o,l)||this.je(o,l,It.newNoDocument(l,t))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=U();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(t));const s=new Is(t,n,this.We,this.$e,r);return this.$e=oe(),this.Ue=tl(),this.We=new Z(H),s}ze(t,n){if(!this.Ye(t))return;const r=this._t(t,n.key)?2:0;this.Je(t).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ut(n.key).add(t))}je(t,n,r){if(!this.Ye(t))return;const s=this.Je(t);this._t(t,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ut(n).delete(t)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new Za,this.Ke.set(t,n)),n}ut(t){let n=this.Ue.get(t);return n||(n=new Ct(H),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||x("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.Ce?null:this.Qe.ct(t)}Ze(t){this.Ke.set(t,new Za),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}_t(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function tl(){return new Z(D.comparator)}function el(){return new Z(D.comparator)}const Ag=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Cg=(()=>({and:"AND",or:"OR"}))();class Pg{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ni(e,t){return e.useProto3Json||_s(t)?t:{value:t}}function Wr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Sg(e,t){return Wr(e,t.toTimestamp())}function Qt(e){return X(!!e),F.fromTimestamp(function(n){const r=_e(n);return new ct(r.seconds,r.nanos)}(e))}function Ro(e,t){return function(r){return new Y(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function xu(e){const t=Y.fromString(e);return X(ku(t)),t}function ki(e,t){return Ro(e.databaseId,t.path)}function Ks(e,t){const n=xu(t);if(n.get(1)!==e.databaseId.projectId)throw new S(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new D(bu(n))}function Mi(e,t){return Ro(e.databaseId,t)}function Vg(e){const t=xu(e);return t.length===4?Y.emptyPath():bu(t)}function Oi(e){return new Y(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function bu(e){return X(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function nl(e,t,n){return{name:ki(e,t),fields:n.value.mapValue.fields}}function xg(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:k()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(X(u===void 0||typeof u=="string"),Pt.fromBase64String(u||"")):(X(u===void 0||u instanceof Uint8Array),Pt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:Cu(c.code);return new S(u,c.message||"")}(o);n=new Su(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ks(e,r.document.name),i=Qt(r.document.updateTime),o=r.document.createTime?Qt(r.document.createTime):F.min(),a=new Lt({mapValue:{fields:r.document.fields}}),l=It.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Pr(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ks(e,r.document),i=r.readTime?Qt(r.readTime):F.min(),o=It.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Pr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ks(e,r.document),i=r.removedTargetIds||[];n=new Pr([],i,s,null)}else{if(!("filter"in t))return k();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new vg(s,i),a=r.targetId;n=new Pu(a,o)}}return n}function bg(e,t){let n;if(t instanceof ur)n={update:nl(e,t.key,t.value)};else if(t instanceof Ru)n={delete:ki(e,t.key)};else if(t instanceof ke)n={update:nl(e,t.key,t.data),updateMask:Ug(t.fieldMask)};else{if(!(t instanceof gg))return k();n={verify:ki(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof zr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Hr)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw k()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:k()}(e,t.precondition)),n}function Dg(e,t){return e&&e.length>0?(X(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Qt(s.updateTime):Qt(i);return o.isEqual(F.min())&&(o=Qt(i)),new fg(o,s.transformResults||[])}(n,t))):[]}function Ng(e,t){return{documents:[Mi(e,t.path)]}}function kg(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Mi(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Mi(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return Nu($t.create(l,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ue(h.field),direction:Fg(h.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ni(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function Mg(e){let t=Vg(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){X(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Du(h);return f instanceof $t&&ou(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(I){return new Sn(Be(I.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,_s(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,g=h.values||[];return new qr(g,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,g=h.values||[];return new qr(g,f)}(n.endAt)),tg(t,s,o,i,a,"F",l,c)}function Og(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Du(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Be(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Be(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Be(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Be(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(e):e.fieldFilter!==void 0?function(n){return at.create(Be(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return $t.create(n.compositeFilter.filters.map(r=>Du(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return k()}}(n.compositeFilter.op))}(e):k()}function Fg(e){return Ag[e]}function Lg(e){return Rg[e]}function jg(e){return Cg[e]}function Ue(e){return{fieldPath:e.canonicalString()}}function Be(e){return wt.fromServerFormat(e.fieldPath)}function Nu(e){return e instanceof at?function(n){if(n.op==="=="){if($a(n.value))return{unaryFilter:{field:Ue(n.field),op:"IS_NAN"}};if(Ba(n.value))return{unaryFilter:{field:Ue(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($a(n.value))return{unaryFilter:{field:Ue(n.field),op:"IS_NOT_NAN"}};if(Ba(n.value))return{unaryFilter:{field:Ue(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ue(n.field),op:Lg(n.op),value:n.value}}}(e):e instanceof $t?function(n){const r=n.getFilters().map(s=>Nu(s));return r.length===1?r[0]:{compositeFilter:{op:jg(n.op),filters:r}}}(e):k()}function Ug(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ku(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,n,r,s,i=F.min(),o=F.min(),a=Pt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new ue(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t){this.lt=t}}function $g(e){const t=Mg({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?bi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.on=new zg}addToCollectionParentIndex(t,n){return this.on.add(n),v.resolve()}getCollectionParents(t,n){return v.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return v.resolve()}deleteFieldIndex(t,n){return v.resolve()}getDocumentsMatchingTarget(t,n){return v.resolve(null)}getIndexType(t,n){return v.resolve(0)}getFieldIndexes(t,n){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,n){return v.resolve(ge.min())}getMinOffsetFromCollectionGroup(t,n){return v.resolve(ge.min())}updateCollectionGroup(t,n,r){return v.resolve()}updateIndexEntries(t,n){return v.resolve()}}class zg{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ct(Y.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ct(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new en(0)}static Nn(){return new en(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.changes=new fn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&bn(r.mutation,s,Ut.empty(),ct.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,n,r=U()){const s=Ce();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=wn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ce();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,U()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=oe();const o=xn(),a=function(){return xn()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ke)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),bn(u.mutation,c,u.mutation.getFieldMask(),ct.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Wg(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=xn();let s=new Z((o,a)=>o-a),i=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ut.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||U()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=gu();u.forEach(f=>{if(!i.has(f)){const g=wu(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):hu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):v.resolve(Ce());let a=-1,l=i;return o.next(c=>v.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?v.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,U())).next(u=>({batchId:a,changes:pu(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new D(n)).next(r=>{let s=wn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=wn();return this.indexManager.getCollectionParents(t,s).next(o=>v.forEach(o,a=>{const l=function(u,h){return new cr(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,It.newInvalidDocument(c)))});let o=wn();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&bn(c.mutation,l,Ut.empty(),ct.now()),vs(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return v.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}}(n)),v.resolve()}getNamedQuery(t,n){return v.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:$g(s.bundledQuery),readTime:Qt(s.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.overlays=new Z(D.comparator),this.lr=new Map}getOverlay(t,n){return v.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ce();return v.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Pt(t,n,i)}),v.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),v.resolve()}getOverlaysForCollection(t,n,r){const s=Ce(),i=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return v.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Z((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Ce(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ce(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return v.resolve(a)}Pt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yg(n,r));let i=this.lr.get(n);i===void 0&&(i=U(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.hr=new Ct(ht.Pr),this.Ir=new Ct(ht.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new ht(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new ht(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new D(new Y([])),r=new ht(n,t),s=new ht(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new D(new Y([])),r=new ht(n,t),s=new ht(n,t+1);let i=U();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new ht(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ht{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return D.comparator(t.key,n.key)||H(t.gr,n.gr)}static Tr(t,n){return H(t.gr,n.gr)||D.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ct(ht.Pr)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _g(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(t,n){return v.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ct(H);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),v.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;D.isDocumentKey(i)||(i=i.child(""));const o=new ht(new D(i),0);let a=new Ct(H);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),v.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){X(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return v.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new ht(n,0),s=this.yr.firstAfterOrEqual(r);return v.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(t){this.vr=t,this.docs=function(){return new Z(D.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(t,n){let r=oe();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():It.newInvalidDocument(s))}),v.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=oe();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Fp(Op(u),r)<=0||(s.has(u.key)||vs(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(t,n,r,s){k()}Cr(t,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Jg(this)}getSize(t){return v.resolve(this.size)}}class Jg extends Hg{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),v.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t){this.persistence=t,this.Fr=new fn(n=>yo(n),vo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Co,this.targetCount=0,this.Nr=en.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),v.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new en(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,v.resolve()}updateTargetData(t,n){return this.kn(n),v.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return v.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),v.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),v.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return v.resolve(r)}containsKey(t,n){return v.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(t,n){this.Br={},this.overlays={},this.Lr=new mo(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Zg(this),this.indexManager=new qg,this.remoteDocumentCache=function(s){return new Xg(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Bg(n),this.Kr=new Gg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Qg,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Yg(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){x("MemoryPersistence","Starting transaction:",t);const s=new e_(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return v.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class e_ extends jp{constructor(t){super(),this.currentSequenceNumber=t}}class Po{constructor(t){this.persistence=t,this.Gr=new Co,this.zr=null}static jr(t){return new Po(t)}get Hr(){if(this.zr)return this.zr;throw k()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),v.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),v.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Hr,r=>{const s=D.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,F.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return v.or([()=>v.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=U(),s=U();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new So(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.Ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){return this.Ui(t,n).next(i=>i||this.Wi(t,n,s,r)).next(i=>i||this.Gi(t,n))}Ui(t,n){if(Wa(n))return v.resolve(null);let r=ie(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bi(n,null,"F"),r=ie(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=U(...i);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.zi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(t,bi(n,null,"F")):this.Hi(t,c,n,l)}))})))}Wi(t,n,r,s){return Wa(n)||s.isEqual(F.min())?this.Gi(t,n):this.$i.getDocuments(t,r).next(i=>{const o=this.zi(n,i);return this.ji(n,o,r,s)?this.Gi(t,n):(Oa()<=K.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Di(n)),this.Hi(t,o,n,Mp(s,-1)))})}zi(t,n){let r=new Ct(fu(t));return n.forEach((s,i)=>{vs(t,i)&&(r=r.add(i))}),r}ji(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Gi(t,n){return Oa()<=K.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Di(n)),this.$i.getDocumentsMatchingQuery(t,n,ge.min())}Hi(t,n,r,s){return this.$i.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(t,n,r,s){this.persistence=t,this.Ji=n,this.serializer=s,this.Yi=new Z(H),this.Zi=new fn(i=>yo(i),vo),this.Xi=new Map,this.es=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.ts(r)}ts(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kg(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Yi))}}function s_(e,t,n,r){return new r_(e,t,n,r)}async function Mu(e,t){const n=L(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ts(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=U();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ns:c,removedBatchIds:o,addedBatchIds:a}))})})}function i_(e,t){const n=L(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.es.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let g=v.resolve();return f.forEach(I=>{g=g.next(()=>u.getEntry(l,I)).next(C=>{const T=c.docVersions.get(I);X(T!==null),C.version.compareTo(T)<0&&(h.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),u.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=U();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ou(e){const t=L(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function o_(e,t){const n=L(e),r=t.snapshotVersion;let s=n.Yi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.es.newChangeBuffer({trackRemovals:!0});s=n.Yi;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Pt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(C,T,O){return C.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(f,g,u)&&a.push(n.qr.updateTargetData(i,g))});let l=oe(),c=U();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(a_(i,o,t.documentUpdates).next(u=>{l=u.rs,c=u.ss})),!r.isEqual(F.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Yi=s,i))}function a_(e,t,n){let r=U(),s=U();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=oe();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{rs:o,ss:s}})}function l_(e,t){const n=L(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function c_(e,t){const n=L(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,v.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new ue(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Yi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Yi=n.Yi.insert(r.targetId,r),n.Zi.set(t,r.targetId)),r})}async function Fi(e,t,n){const r=L(e),s=r.Yi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!lr(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Yi=r.Yi.remove(t),r.Zi.delete(s.target)}function rl(e,t,n){const r=L(e);let s=F.min(),i=U();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=L(l),f=h.Zi.get(u);return f!==void 0?v.resolve(h.Yi.get(f)):h.qr.getTargetData(c,u)}(r,o,ie(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Ji.getDocumentsMatchingQuery(o,t,n?s:F.min(),n?i:U())).next(a=>(u_(r,ng(t),a),{documents:a,os:i})))}function u_(e,t,n){let r=e.Xi.get(t)||F.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Xi.set(t,r)}class sl{constructor(){this.activeTargetIds=lg()}Ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}Is(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class h_{constructor(){this.Js=new sl,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Js.Ps(t),this.Ys[t]||"not-current"}updateQueryState(t,n,r){this.Ys[t]=n}removeLocalQueryTarget(t){this.Js.Is(t)}isLocalQueryTarget(t){return this.Js.activeTargetIds.has(t)}clearQueryState(t){delete this.Ys[t]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(t){return this.Js.activeTargetIds.has(t)}start(){return this.Js=new sl,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{Zs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(t){this.io.push(t)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.io)t(0)}ro(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.io)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar=null;function Gs(){return Ar===null?Ar=function(){return 268435456+Math.round(2147483648*Math.random())}():Ar++,"0x"+Ar.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t){this.oo=t.oo,this._o=t._o}ao(t){this.uo=t}co(t){this.lo=t}onMessage(t){this.ho=t}close(){this._o()}send(t){this.oo(t)}Po(){this.uo()}Io(t){this.lo(t)}To(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class p_ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${s}/databases/${i}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Vo(){return!1}mo(n,r,s,i,o){const a=Gs(),l=this.fo(n,r);x("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(c,i,o),this.yo(n,l,c,s).then(u=>(x("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Xe("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}wo(n,r,s,i,o,a){return this.mo(n,r,s,i,o)}po(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}fo(n,r){const s=f_[n];return`${this.Eo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}yo(t,n,r,s){const i=Gs();return new Promise((o,a)=>{const l=new Ap;l.setWithCredentials(!0),l.listenOnce(Tp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ws.NO_ERROR:const u=l.getResponseJson();x(Et,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ws.TIMEOUT:x(Et,`RPC '${t}' ${i} timed out`),a(new S(y.DEADLINE_EXCEEDED,"Request time out"));break;case Ws.HTTP_ERROR:const h=l.getStatus();if(x(Et,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const I=function(T){const O=T.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(O)>=0?O:y.UNKNOWN}(g.status);a(new S(I,g.message))}else a(new S(y.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new S(y.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{x(Et,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);x(Et,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}So(t,n,r){const s=Gs(),i=[this.Eo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=vp(),a=Ep(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new wp({})),this.po(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");x(Et,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,g=!1;const I=new m_({oo:T=>{g?x(Et,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(f||(x(Et,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),x(Et,`RPC '${t}' stream ${s} sending:`,T),h.send(T))},_o:()=>h.close()}),C=(T,O,w)=>{T.listen(O,j=>{try{w(j)}catch(z){setTimeout(()=>{throw z},0)}})};return C(h,Er.EventType.OPEN,()=>{g||x(Et,`RPC '${t}' stream ${s} transport opened.`)}),C(h,Er.EventType.CLOSE,()=>{g||(g=!0,x(Et,`RPC '${t}' stream ${s} transport closed`),I.Io())}),C(h,Er.EventType.ERROR,T=>{g||(g=!0,Xe(Et,`RPC '${t}' stream ${s} transport errored:`,T),I.Io(new S(y.UNAVAILABLE,"The operation could not be completed")))}),C(h,Er.EventType.MESSAGE,T=>{var O;if(!g){const w=T.data[0];X(!!w);const j=w,z=j.error||((O=j[0])===null||O===void 0?void 0:O.error);if(z){x(Et,`RPC '${t}' stream ${s} received error:`,z);const q=z.status;let xt=function(vt){const qt=st[vt];if(qt!==void 0)return Cu(qt)}(q),yt=z.message;xt===void 0&&(xt=y.INTERNAL,yt="Unknown error status: "+q+" with message "+z.message),g=!0,I.Io(new S(xt,yt)),h.close()}else x(Et,`RPC '${t}' stream ${s} received:`,w),I.To(w)}}),C(a,Ip.STAT_EVENT,T=>{T.stat===ka.PROXY?x(Et,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===ka.NOPROXY&&x(Et,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.Po()},0),I}}function Qs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(e){return new Pg(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.bo=r,this.Do=s,this.vo=i,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(t){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),s=Math.max(0,n-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Mo=Date.now(),t())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,n,r,s,i,o,a,l){this.si=t,this.Lo=r,this.ko=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new Fu(t,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(t){this.Yo(),this.stream.send(t)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(t,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,t!==4?this.$o.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(se(n.toString()),se("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Xo(){}auth(){this.state=1;const t=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.qo===n&&this.t_(r,s)},r=>{t(()=>{const s=new S(y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(s)})})}t_(t,n){const r=this.e_(this.qo);this.stream=this.r_(t,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(s=>{r(()=>this.n_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}e_(t){return n=>{this.si.enqueueAndForget(()=>this.qo===t?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class g_ extends Lu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}r_(t,n){return this.connection.So("Listen",t,n)}onMessage(t){this.$o.reset();const n=xg(this.serializer,t),r=function(i){if(!("targetChange"in i))return F.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?Qt(o.readTime):F.min()}(t);return this.listener.i_(n,r)}s_(t){const n={};n.database=Oi(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Vi(l)?{documents:Ng(i,l)}:{query:kg(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vu(i,o.resumeToken);const c=Ni(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=Wr(i,o.snapshotVersion.toTimestamp());const c=Ni(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=Og(this.serializer,t);r&&(n.labels=r),this.Jo(n)}o_(t){const n={};n.database=Oi(this.serializer),n.removeTarget=t,this.Jo(n)}}class __ extends Lu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(t,n){return this.connection.So("Write",t,n)}onMessage(t){if(X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.__){this.$o.reset();const n=Dg(t.writeResults,t.commitTime),r=Qt(t.commitTime);return this.listener.c_(r,n)}return X(!t.writeResults||t.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const t={};t.database=Oi(this.serializer),this.Jo(t)}u_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>bg(this.serializer,r))};this.Jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_ extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.P_=!1}I_(){if(this.P_)throw new S(y.FAILED_PRECONDITION,"The client has already been terminated.")}mo(t,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.mo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(y.UNKNOWN,s.toString())})}wo(t,n,r,s){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(y.UNKNOWN,i.toString())})}terminate(){this.P_=!0}}class v_{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(t){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.V_("Offline")))}set(t){this.g_(),this.E_=0,t==="Online"&&(this.A_=!1),this.V_(t)}V_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}m_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(se(n),this.A_=!1):x("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=i,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{Me(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=L(l);c.w_.add(4),await dr(c),c.D_.set("Unknown"),c.w_.delete(4),await As(c)}(this))})}),this.D_=new v_(r,s)}}async function As(e){if(Me(e))for(const t of e.S_)await t(!0)}async function dr(e){for(const t of e.S_)await t(!1)}function ju(e,t){const n=L(e);n.y_.has(t.targetId)||(n.y_.set(t.targetId,t),bo(n)?xo(n):mn(n).Wo()&&Vo(n,t))}function Uu(e,t){const n=L(e),r=mn(n);n.y_.delete(t),r.Wo()&&Bu(n,t),n.y_.size===0&&(r.Wo()?r.jo():Me(n)&&n.D_.set("Unknown"))}function Vo(e,t){if(e.v_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}mn(e).s_(t)}function Bu(e,t){e.v_.Le(t),mn(e).o_(t)}function xo(e){e.v_=new wg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ct:t=>e.y_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),mn(e).start(),e.D_.R_()}function bo(e){return Me(e)&&!mn(e).Uo()&&e.y_.size>0}function Me(e){return L(e).w_.size===0}function $u(e){e.v_=void 0}async function T_(e){e.y_.forEach((t,n)=>{Vo(e,t)})}async function I_(e,t){$u(e),bo(e)?(e.D_.f_(t),xo(e)):e.D_.set("Unknown")}async function w_(e,t,n){if(e.D_.set("Online"),t instanceof Su&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.y_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.y_.delete(a),s.v_.removeTarget(a))}(e,t)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Kr(e,r)}else if(t instanceof Pr?e.v_.Ge(t):t instanceof Pu?e.v_.Xe(t):e.v_.He(t),!n.isEqual(F.min()))try{const r=await Ou(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.v_.ot(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.y_.get(c);u&&i.y_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.y_.get(l);if(!u)return;i.y_.set(l,u.withResumeToken(Pt.EMPTY_BYTE_STRING,u.snapshotVersion)),Bu(i,l);const h=new ue(u.target,l,c,u.sequenceNumber);Vo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Kr(e,r)}}async function Kr(e,t,n){if(!lr(t))throw t;e.w_.add(1),await dr(e),e.D_.set("Offline"),n||(n=()=>Ou(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),e.w_.delete(1),await As(e)})}function qu(e,t){return t().catch(n=>Kr(e,n,t))}async function Rs(e){const t=L(e),n=ye(t);let r=t.p_.length>0?t.p_[t.p_.length-1].batchId:-1;for(;A_(t);)try{const s=await l_(t.localStore,r);if(s===null){t.p_.length===0&&n.jo();break}r=s.batchId,R_(t,s)}catch(s){await Kr(t,s)}zu(t)&&Hu(t)}function A_(e){return Me(e)&&e.p_.length<10}function R_(e,t){e.p_.push(t);const n=ye(e);n.Wo()&&n.a_&&n.u_(t.mutations)}function zu(e){return Me(e)&&!ye(e).Uo()&&e.p_.length>0}function Hu(e){ye(e).start()}async function C_(e){ye(e).h_()}async function P_(e){const t=ye(e);for(const n of e.p_)t.u_(n.mutations)}async function S_(e,t,n){const r=e.p_.shift(),s=Io.from(r,t,n);await qu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Rs(e)}async function V_(e,t){t&&ye(e).a_&&await async function(r,s){if(function(o){return Eg(o)&&o!==y.ABORTED}(s.code)){const i=r.p_.shift();ye(r).zo(),await qu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Rs(r)}}(e,t),zu(e)&&Hu(e)}async function ol(e,t){const n=L(e);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Me(n);n.w_.add(3),await dr(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.w_.delete(3),await As(n)}async function x_(e,t){const n=L(e);t?(n.w_.delete(2),await As(n)):t||(n.w_.add(2),await dr(n),n.D_.set("Unknown"))}function mn(e){return e.C_||(e.C_=function(n,r,s){const i=L(n);return i.I_(),new g_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ao:T_.bind(null,e),co:I_.bind(null,e),i_:w_.bind(null,e)}),e.S_.push(async t=>{t?(e.C_.zo(),bo(e)?xo(e):e.D_.set("Unknown")):(await e.C_.stop(),$u(e))})),e.C_}function ye(e){return e.F_||(e.F_=function(n,r,s){const i=L(n);return i.I_(),new __(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ao:C_.bind(null,e),co:V_.bind(null,e),l_:P_.bind(null,e),c_:S_.bind(null,e)}),e.S_.push(async t=>{t?(e.F_.zo(),await Rs(e)):(await e.F_.stop(),e.p_.length>0&&(x("RemoteStore",`Stopping write stream with ${e.p_.length} pending writes`),e.p_=[]))})),e.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Do(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function No(e,t){if(se("AsyncQueue",`${t}: ${e}`),lr(e))return new S(y.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.comparator=t?(n,r)=>t(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=wn(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new Ke(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ke)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ke;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.M_=new Z(D.comparator)}track(t){const n=t.doc.key,r=this.M_.get(n);r?t.type!==0&&r.type===3?this.M_=this.M_.insert(n,t):t.type===3&&r.type!==1?this.M_=this.M_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.M_=this.M_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.M_=this.M_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.M_=this.M_.remove(n):t.type===1&&r.type===2?this.M_=this.M_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.M_=this.M_.insert(n,{type:2,doc:t.doc}):k():this.M_=this.M_.insert(n,t)}x_(){const t=[];return this.M_.inorderTraversal((n,r)=>{t.push(r)}),t}}class nn{constructor(t,n,r,s,i,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new nn(t,n,Ke.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ys(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.O_=void 0,this.listeners=[]}}class D_{constructor(){this.queries=new fn(t=>du(t),ys),this.onlineState="Unknown",this.N_=new Set}}async function Wu(e,t){const n=L(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new b_),s)try{i.O_=await n.onListen(r)}catch(o){const a=No(o,`Initialization of query '${Di(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.B_(n.onlineState),i.O_&&t.L_(i.O_)&&ko(n)}async function Ku(e,t){const n=L(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function N_(e,t){const n=L(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.L_(s)&&(r=!0);o.O_=s}}r&&ko(n)}function k_(e,t,n){const r=L(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function ko(e){e.N_.forEach(t=>{t.next()})}class Gu{constructor(t,n,r){this.query=t,this.k_=n,this.q_=!1,this.Q_=null,this.onlineState="Unknown",this.options=r||{}}L_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new nn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.q_?this.K_(t)&&(this.k_.next(t),n=!0):this.U_(t,this.onlineState)&&(this.W_(t),n=!0),this.Q_=t,n}onError(t){this.k_.error(t)}B_(t){this.onlineState=t;let n=!1;return this.Q_&&!this.q_&&this.U_(this.Q_,t)&&(this.W_(this.Q_),n=!0),n}U_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.G_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}K_(t){if(t.docChanges.length>0)return!0;const n=this.Q_&&this.Q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}W_(t){t=nn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.q_=!0,this.k_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t){this.key=t}}class Yu{constructor(t){this.key=t}}class M_{constructor(t,n){this.query=t,this.ea=n,this.ta=null,this.hasCachedResults=!1,this.current=!1,this.na=U(),this.mutatedKeys=U(),this.ra=fu(t),this.ia=new Ke(this.ra)}get sa(){return this.ea}oa(t,n){const r=n?n._a:new al,s=n?n.ia:this.ia;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),g=vs(this.query,h)?h:null,I=!!f&&this.mutatedKeys.has(f.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?I!==C&&(r.track({type:3,doc:g}),T=!0):this.aa(f,g)||(r.track({type:2,doc:g}),T=!0,(l&&this.ra(g,l)>0||c&&this.ra(g,c)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(l||c)&&(a=!0)),T&&(g?(o=o.add(g),i=C?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ia:o,_a:r,ji:a,mutatedKeys:i}}aa(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.ia;this.ia=t.ia,this.mutatedKeys=t.mutatedKeys;const i=t._a.x_();i.sort((c,u)=>function(f,g){const I=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return I(f)-I(g)}(c.type,u.type)||this.ra(c.doc,u.doc)),this.ua(r);const o=n?this.ca():[],a=this.na.size===0&&this.current?1:0,l=a!==this.ta;return this.ta=a,i.length!==0||l?{snapshot:new nn(this.query,t.ia,s,i,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),la:o}:{la:o}}B_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ia:this.ia,_a:new al,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{la:[]}}ha(t){return!this.ea.has(t)&&!!this.ia.has(t)&&!this.ia.get(t).hasLocalMutations}ua(t){t&&(t.addedDocuments.forEach(n=>this.ea=this.ea.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ea=this.ea.delete(n)),this.current=t.current)}ca(){if(!this.current)return[];const t=this.na;this.na=U(),this.ia.forEach(r=>{this.ha(r.key)&&(this.na=this.na.add(r.key))});const n=[];return t.forEach(r=>{this.na.has(r)||n.push(new Yu(r))}),this.na.forEach(r=>{t.has(r)||n.push(new Qu(r))}),n}Pa(t){this.ea=t.os,this.na=U();const n=this.oa(t.documents);return this.applyChanges(n,!0)}Ia(){return nn.fromInitialDocuments(this.query,this.ia,this.mutatedKeys,this.ta===0,this.hasCachedResults)}}class O_{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class F_{constructor(t){this.key=t,this.Ta=!1}}class L_{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new fn(a=>du(a),ys),this.Aa=new Map,this.Ra=new Set,this.Va=new Z(D.comparator),this.ma=new Map,this.fa=new Co,this.ga={},this.pa=new Map,this.ya=en.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function j_(e,t){const n=Q_(e);let r,s;const i=n.da.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ia();else{const o=await c_(n.localStore,ie(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await U_(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&ju(n.remoteStore,o)}return s}async function U_(e,t,n,r,s){e.Sa=(h,f,g)=>async function(C,T,O,w){let j=T.view.oa(O);j.ji&&(j=await rl(C.localStore,T.query,!1).then(({documents:xt})=>T.view.oa(xt,j)));const z=w&&w.targetChanges.get(T.targetId),q=T.view.applyChanges(j,C.isPrimaryClient,z);return cl(C,T.targetId,q.la),q.snapshot}(e,h,f,g);const i=await rl(e.localStore,t,!0),o=new M_(t,i.os),a=o.oa(i.documents),l=hr.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,l);cl(e,n,c.la);const u=new O_(t,n,o);return e.da.set(t,u),e.Aa.has(n)?e.Aa.get(n).push(t):e.Aa.set(n,[t]),c.snapshot}async function B_(e,t){const n=L(e),r=n.da.get(t),s=n.Aa.get(r.targetId);if(s.length>1)return n.Aa.set(r.targetId,s.filter(i=>!ys(i,t))),void n.da.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Uu(n.remoteStore,r.targetId),Li(n,r.targetId)}).catch(ar)):(Li(n,r.targetId),await Fi(n.localStore,r.targetId,!0))}async function $_(e,t,n){const r=Y_(e);try{const s=await function(o,a){const l=L(o),c=ct.now(),u=a.reduce((g,I)=>g.add(I.key),U());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=oe(),C=U();return l.es.getEntries(g,u).next(T=>{I=T,I.forEach((O,w)=>{w.isValidDocument()||(C=C.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,I)).next(T=>{h=T;const O=[];for(const w of a){const j=pg(w,h.get(w.key).overlayedDocument);j!=null&&O.push(new ke(w.key,j,ru(j.value.mapValue),ne.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,O,a)}).next(T=>{f=T;const O=T.applyToLocalDocumentSet(h,C);return l.documentOverlayCache.saveOverlays(g,T.batchId,O)})}).then(()=>({batchId:f.batchId,changes:pu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.ga[o.currentUser.toKey()];c||(c=new Z(H)),c=c.insert(a,l),o.ga[o.currentUser.toKey()]=c}(r,s.batchId,n),await fr(r,s.changes),await Rs(r.remoteStore)}catch(s){const i=No(s,"Failed to persist write");n.reject(i)}}async function Xu(e,t){const n=L(e);try{const r=await o_(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ma.get(i);o&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ta=!0:s.modifiedDocuments.size>0?X(o.Ta):s.removedDocuments.size>0&&(X(o.Ta),o.Ta=!1))}),await fr(n,r,t)}catch(r){await ar(r)}}function ll(e,t,n){const r=L(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.da.forEach((i,o)=>{const a=o.view.B_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=L(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.B_(a)&&(c=!0)}),c&&ko(l)}(r.eventManager,t),s.length&&r.Ea.i_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function q_(e,t,n){const r=L(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ma.get(t),i=s&&s.key;if(i){let o=new Z(D.comparator);o=o.insert(i,It.newNoDocument(i,F.min()));const a=U().add(i),l=new Is(F.min(),new Map,new Z(H),o,a);await Xu(r,l),r.Va=r.Va.remove(i),r.ma.delete(t),Mo(r)}else await Fi(r.localStore,t,!1).then(()=>Li(r,t,n)).catch(ar)}async function z_(e,t){const n=L(e),r=t.batch.batchId;try{const s=await i_(n.localStore,t);Zu(n,r,null),Ju(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fr(n,s)}catch(s){await ar(s)}}async function H_(e,t,n){const r=L(e);try{const s=await function(o,a){const l=L(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(X(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Zu(r,t,n),Ju(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await fr(r,s)}catch(s){await ar(s)}}function Ju(e,t){(e.pa.get(t)||[]).forEach(n=>{n.resolve()}),e.pa.delete(t)}function Zu(e,t,n){const r=L(e);let s=r.ga[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.ga[r.currentUser.toKey()]=s}}function Li(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Aa.get(t))e.da.delete(r),n&&e.Ea.ba(r,n);e.Aa.delete(t),e.isPrimaryClient&&e.fa.Rr(t).forEach(r=>{e.fa.containsKey(r)||th(e,r)})}function th(e,t){e.Ra.delete(t.path.canonicalString());const n=e.Va.get(t);n!==null&&(Uu(e.remoteStore,n),e.Va=e.Va.remove(t),e.ma.delete(n),Mo(e))}function cl(e,t,n){for(const r of n)r instanceof Qu?(e.fa.addReference(r.key,t),W_(e,r)):r instanceof Yu?(x("SyncEngine","Document no longer in limbo: "+r.key),e.fa.removeReference(r.key,t),e.fa.containsKey(r.key)||th(e,r.key)):k()}function W_(e,t){const n=t.key,r=n.path.canonicalString();e.Va.get(n)||e.Ra.has(r)||(x("SyncEngine","New document in limbo: "+n),e.Ra.add(r),Mo(e))}function Mo(e){for(;e.Ra.size>0&&e.Va.size<e.maxConcurrentLimboResolutions;){const t=e.Ra.values().next().value;e.Ra.delete(t);const n=new D(Y.fromString(t)),r=e.ya.next();e.ma.set(r,new F_(n)),e.Va=e.Va.insert(n,r),ju(e.remoteStore,new ue(ie(Eo(n.path)),r,"TargetPurposeLimboResolution",mo.ae))}}async function fr(e,t,n){const r=L(e),s=[],i=[],o=[];r.da.isEmpty()||(r.da.forEach((a,l)=>{o.push(r.Sa(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=So.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Ea.i_(s),await async function(l,c){const u=L(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(c,f=>v.forEach(f.ki,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>v.forEach(f.qi,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!lr(h))throw h;x("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const g=u.Yi.get(f),I=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(I);u.Yi=u.Yi.insert(f,C)}}}(r.localStore,i))}async function K_(e,t){const n=L(e);if(!n.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const r=await Mu(n.localStore,t);n.currentUser=t,function(i,o){i.pa.forEach(a=>{a.forEach(l=>{l.reject(new S(y.CANCELLED,o))})}),i.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await fr(n,r.ns)}}function G_(e,t){const n=L(e),r=n.ma.get(t);if(r&&r.Ta)return U().add(r.key);{let s=U();const i=n.Aa.get(t);if(!i)return s;for(const o of i){const a=n.da.get(o);s=s.unionWith(a.view.sa)}return s}}function Q_(e){const t=L(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=G_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=q_.bind(null,t),t.Ea.i_=N_.bind(null,t.eventManager),t.Ea.ba=k_.bind(null,t.eventManager),t}function Y_(e){const t=L(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=z_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=H_.bind(null,t),t}class ul{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ws(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return s_(this.persistence,new n_,t.initialUser,this.serializer)}createPersistence(t){return new t_(Po.jr,this.serializer)}createSharedClientState(t){return new h_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class X_{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ll(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=K_.bind(null,this.syncEngine),await x_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new D_}()}createDatastore(t){const n=ws(t.databaseInfo.databaseId),r=function(i){return new p_(i)}(t.databaseInfo);return function(i,o,a,l){return new y_(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new E_(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ll(this.syncEngine,n,0),function(){return il.v()?new il:new d_}())}createSyncEngine(t,n){return function(s,i,o,a,l,c,u){const h=new L_(s,i,o,a,l,c);return u&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=L(n);x("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await dr(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ca(this.observer.next,t)}error(t){this.observer.error?this.Ca(this.observer.error,t):se("Uncaught Error in snapshot listener:",t.toString())}Fa(){this.muted=!0}Ca(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=tu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=No(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ys(e,t){e.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function hl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ty(e);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>ol(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>ol(t.remoteStore,i)),e._onlineComponents=t}function Z_(e){return e.name==="FirebaseError"?e.code===y.FAILED_PRECONDITION||e.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function ty(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ys(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Z_(n))throw n;Xe("Error using user provided cache. Falling back to memory cache: "+n),await Ys(e,new ul)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Ys(e,new ul);return e._offlineComponents}async function nh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await hl(e,e._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await hl(e,new X_))),e._onlineComponents}function ey(e){return nh(e).then(t=>t.syncEngine)}async function rh(e){const t=await nh(e),n=t.eventManager;return n.onListen=j_.bind(null,t.syncEngine),n.onUnlisten=B_.bind(null,t.syncEngine),n}function ny(e,t,n={}){const r=new ee;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new eh({next:f=>{o.enqueueAndForget(()=>Ku(i,h));const g=f.docs.has(a);!g&&f.fromCache?c.reject(new S(y.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&l&&l.source==="server"?c.reject(new S(y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Gu(Eo(a.path),u,{includeMetadataChanges:!0,G_:!0});return Wu(i,h)}(await rh(e),e.asyncQueue,t,n,r)),r.promise}function ry(e,t,n={}){const r=new ee;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new eh({next:f=>{o.enqueueAndForget(()=>Ku(i,h)),f.fromCache&&l.source==="server"?c.reject(new S(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Gu(a,u,{includeMetadataChanges:!0,G_:!0});return Wu(i,h)}(await rh(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e,t,n){if(!n)throw new S(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sy(e,t,n,r){if(t===!0&&r===!0)throw new S(y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function fl(e){if(!D.isDocumentKey(e))throw new S(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ml(e){if(D.isDocumentKey(e))throw new S(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Cs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":k()}function rn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cs(e);throw new S(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new S(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new S(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}sy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new S(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new S(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new S(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ps{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new S(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cp;switch(r.type){case"firstParty":return new xp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dl.get(n);r&&(x("ComponentProvider","Removing Datastore"),dl.delete(n),r.terminate())}(this),Promise.resolve()}}function iy(e,t,n,r={}){var s;const i=(e=rn(e,Ps))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Xe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Tt.MOCK_USER;else{a=sf(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new S(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Tt(c)}e._authCredentials=new Pp(new Zc(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new pn(this.firestore,t,this._query)}}class Nt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class pe extends pn{constructor(t,n,r){super(t,n,Eo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new D(t))}withConverter(t){return new pe(this.firestore,t,this._path)}}function oh(e,t,...n){if(e=Qe(e),ih("collection","path",t),e instanceof Ps){const r=Y.fromString(t,...n);return ml(r),new pe(e,null,r)}{if(!(e instanceof Nt||e instanceof pe))throw new S(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Y.fromString(t,...n));return ml(r),new pe(e.firestore,null,r)}}function ah(e,t,...n){if(e=Qe(e),arguments.length===1&&(t=tu.V()),ih("doc","path",t),e instanceof Ps){const r=Y.fromString(t,...n);return fl(r),new Nt(e,null,new D(r))}{if(!(e instanceof Nt||e instanceof pe))throw new S(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Y.fromString(t,...n));return fl(r),new Nt(e.firestore,e instanceof pe?e.converter:null,new D(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new Fu(this,"async_queue_retry"),this.eu=()=>{const n=Qs();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const t=Qs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.tu(),this.nu(t)}enterRestrictedMode(t){if(!this.ja){this.ja=!0,this.Za=t||!1;const n=Qs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(t){if(this.tu(),this.ja)return new Promise(()=>{});const n=new ee;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.za.push(t),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(t){if(!lr(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(t){const n=this.Ga.then(()=>(this.Ya=!0,t().catch(r=>{this.Ja=r,this.Ya=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw se("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(t,n,r){this.tu(),this.Xa.indexOf(t)>-1&&(n=0);const s=Do.createAndSchedule(this,t,n,r,i=>this.iu(i));return this.Ha.push(s),s}tu(){this.Ja&&k()}verifyOperationInProgress(){}async su(){let t;do t=this.Ga,await t;while(t!==this.Ga)}ou(t){for(const n of this.Ha)if(n.timerId===t)return!0;return!1}_u(t){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.su()})}au(t){this.Xa.push(t)}iu(t){const n=this.Ha.indexOf(t);this.Ha.splice(n,1)}}class Ss extends Ps{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new oy}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lh(this),this._firestoreClient.terminate()}}function ay(e,t){const n=typeof e=="object"?e:cm(),r=typeof e=="string"?e:t||"(default)",s=im(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nf("firestore");i&&iy(s,...i)}return s}function Oo(e){return e._firestoreClient||lh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lh(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,c,u){return new $p(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,sh(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new J_(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new sn(Pt.fromBase64String(t))}catch(n){throw new S(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new sn(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new S(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new S(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new S(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=/^__.*__$/;class cy{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ke(t,this.data,this.fieldMask,n,this.fieldTransforms):new ur(t,this.data,n,this.fieldTransforms)}}function uh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class jo{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.uu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(t){return new jo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.lu({path:r,Pu:!1});return s.Iu(t),s}Tu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.lu({path:r,Pu:!1});return s.uu(),s}Eu(t){return this.lu({path:void 0,Pu:!0})}du(t){return Gr(t,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Iu(this.path.get(t))}Iu(t){if(t.length===0)throw this.du("Document fields must not be empty");if(uh(this.cu)&&ly.test(t))throw this.du('Document fields cannot begin and end with "__"')}}class uy{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ws(t)}Vu(t,n,r,s=!1){return new jo({cu:t,methodName:n,Ru:r,path:wt.emptyPath(),Pu:!1,Au:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hh(e){const t=e._freezeSettings(),n=ws(e._databaseId);return new uy(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hy(e,t,n,r,s,i={}){const o=e.Vu(i.merge||i.mergeFields?2:0,t,n,s);mh("Data must be an object, but it was:",o,r);const a=dh(r,o);let l,c;if(i.merge)l=new Ut(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=fy(t,h,n);if(!o.contains(f))throw new S(y.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);py(u,f)||u.push(f)}l=new Ut(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new cy(new Lt(a),l,c)}function dy(e,t,n,r=!1){return Uo(n,e.Vu(r?4:3,t))}function Uo(e,t){if(fh(e=Qe(e)))return mh("Unsupported field value:",t,e),dh(e,t);if(e instanceof ch)return function(r,s){if(!uh(s.cu))throw s.du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Pu&&t.cu!==4)throw t.du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Uo(a,s.Eu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:Wr(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wr(s.serializer,i)}}if(r instanceof Lo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:Vu(s.serializer,r._byteString)};if(r instanceof Nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ro(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.du(`Unsupported field value: ${Cs(r)}`)}(e,t)}function dh(e,t){const n={};return eu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dn(e,(r,s)=>{const i=Uo(s,t.hu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fh(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ct||e instanceof Lo||e instanceof sn||e instanceof Nt||e instanceof ch)}function mh(e,t,n){if(!fh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Cs(n);throw r==="an object"?t.du(e+" a custom object"):t.du(e+" "+r)}}function fy(e,t,n){if((t=Qe(t))instanceof Fo)return t._internalPath;if(typeof t=="string")return ph(e,t);throw Gr("Field path arguments must be of type string or ",e,!1,void 0,n)}const my=new RegExp("[~\\*/\\[\\]]");function ph(e,t,n){if(t.search(my)>=0)throw Gr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Fo(...t.split("."))._internalPath}catch{throw Gr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gr(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new S(y.INVALID_ARGUMENT,a+e+l)}function py(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Bo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gy extends gh{data(){return super.data()}}function Bo(e,t){return typeof t=="string"?ph(e,t):t instanceof Fo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new S(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $o{}class yy extends $o{}function vy(e,t,...n){let r=[];t instanceof $o&&r.push(t),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof qo).length,a=i.filter(l=>l instanceof Vs).length;if(o>1||o>0&&a>0)throw new S(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Vs extends yy{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Vs(t,n,r)}_apply(t){const n=this._parse(t);return _h(t._query,n),new pn(t.firestore,t.converter,xi(t._query,n))}_parse(t){const n=hh(t.firestore);return function(i,o,a,l,c,u,h){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new S(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){_l(h,u);const g=[];for(const I of h)g.push(gl(l,i,I));f={arrayValue:{values:g}}}else f=gl(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||_l(h,u),f=dy(a,o,h,u==="in"||u==="not-in");return at.create(c,u,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Ey(e,t,n){const r=t,s=Bo("where",e);return Vs._create(s,r,n)}class qo extends $o{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new qo(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)_h(o,l),o=xi(o,l)}(t._query,n),new pn(t.firestore,t.converter,xi(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gl(e,t,n){if(typeof(n=Qe(n))=="string"){if(n==="")throw new S(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hu(t)&&n.indexOf("/")!==-1)throw new S(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Y.fromString(n));if(!D.isDocumentKey(r))throw new S(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ua(e,new D(r))}if(n instanceof Nt)return Ua(e,n._key);throw new S(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cs(n)}.`)}function _l(e,t){if(!Array.isArray(e)||e.length===0)throw new S(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function _h(e,t){if(t.isInequality()){const r=To(e),s=t.field;if(r!==null&&!r.isEqual(s))throw new S(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=uu(e);i!==null&&Ty(e,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new S(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Ty(e,t,n){if(!n.isEqual(t))throw new S(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Iy{convertValue(t,n="none"){switch(De(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(be(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw k()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return dn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Lo(it(t.latitude),it(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=go(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hn(t));default:return null}}convertTimestamp(t){const n=_e(t);return new ct(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Y.fromString(t);X(ku(r));const s=new Wn(r.get(1),r.get(3)),i=new D(r.popFirst(5));return s.isEqual(n)||se(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class yh extends gh{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Bo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sr extends yh{data(t={}){return super.data(t)}}class Ay{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Rn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Sr(this._firestore,this._userDataWriter,r.key,r,new Rn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Sr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Rn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Sr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Rn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Ry(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ry(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(e){e=rn(e,Nt);const t=rn(e.firestore,Ss);return ny(Oo(t),e._key).then(n=>xy(t,e,n))}class vh extends Iy{constructor(t){super(),this.firestore=t}convertBytes(t){return new sn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Py(e){e=rn(e,pn);const t=rn(e.firestore,Ss),n=Oo(t),r=new vh(t);return _y(e._query),ry(n,e._query).then(s=>new Ay(t,r,e,s))}function Sy(e,t){const n=rn(e.firestore,Ss),r=ah(e),s=wy(e.converter,t);return Vy(n,[hy(hh(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,ne.exists(!1))]).then(()=>r)}function Vy(e,t){return function(r,s){const i=new ee;return r.asyncQueue.enqueueAndForget(async()=>$_(await ey(r),s,i)),i.promise}(Oo(e),t)}function xy(e,t,n){const r=n.docs.get(t._key),s=new vh(e);return new yh(e,s,t._key,r,new Rn(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){hn=s})(lm),kr(new kn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ss(new Sp(r.getProvider("auth-internal")),new Dp(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new S(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wn(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ze(Ma,"4.1.1",t),ze(Ma,"4.1.1","esm2017")})();var by="firebase",Dy="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(by,Dy,"app");const Ny={apiKey:"AIzaSyDoxlSLy5-q5pTfqYgkURMANYfF1Z9Xh8w",authDomain:"tecno4all-cc7e8.firebaseapp.com",projectId:"tecno4all-cc7e8",storageBucket:"tecno4all-cc7e8.appspot.com",messagingSenderId:"649600460730",appId:"1:649600460730:web:161986e8dd6cf72dac9f83"},ky=Gl(Ny),zo=ay(ky),Xs=()=>{const[e,t]=R.useState([]),[n,r]=R.useState(!0),[s,i]=R.useState("productos"),o=Fl().marca;return R.useEffect(()=>{const a=oh(zo,"productos"),l=o?vy(a,Ey("marca","==",o)):a;Py(l).then(c=>{t(c.docs.map(u=>({id:u.id,...u.data()})))}).finally(()=>{r(!1)})},[o]),m.jsx("div",{children:n?m.jsx("div",{className:"containerPelotitas",children:m.jsxs("div",{className:"cargando",children:[m.jsx("div",{className:"pelotas"}),m.jsx("div",{className:"pelotas"}),m.jsx("div",{className:"pelotas"}),m.jsx("span",{className:"texto-cargando",children:"Cargando..."})]})}):m.jsx(Wd,{productos:e,titulo:s})})},My=({cantidad:e,RestarCantidad:t,SumarCantidad:n,Agregar:r})=>m.jsxs("div",{className:"container-item-count",children:[m.jsxs("div",{className:"item-count",children:[m.jsx("button",{onClick:t,children:m.jsx("i",{className:"bi bi-patch-minus"})}),m.jsx("p",{children:e}),m.jsxs("button",{onClick:n,children:[" ",m.jsx("i",{className:"bi bi-patch-plus"})]})]}),m.jsxs("button",{className:"add-carrito",onClick:r,children:[" ","Agregar al carrito"]})]}),Oy=({item:e})=>{const{carrito:t,Agregar:n}=R.useContext(Xn);console.log(t);const[r,s]=R.useState(1),i=()=>{r>1&&s(r-1)},o=()=>{r<e.stock&&s(r+1)};return m.jsx("div",{className:"Container",children:m.jsxs("div",{className:"detalleProducto",children:[m.jsx("img",{className:"imagen",src:e.imagen,alt:e.nombre}),m.jsxs("div",{children:[m.jsx("h3",{className:"Titulo",children:e.nombre}),m.jsxs("p",{className:"categoria",children:["Sistema Operativo: ",e.SistemaOperativo]}),m.jsx("p",{className:"descripcion",children:e.descripcion}),m.jsxs("p",{className:"precio",children:[" $",e.precio]}),m.jsx(My,{cantidad:r,RestarCantidad:i,SumarCantidad:o,Agregar:()=>{n(e,r)}})]})]})})},Fy=()=>{const[e,t]=R.useState(null),n=Fl().id;return R.useEffect(()=>{const r=ah(zo,"productos",n);Cy(r).then(s=>{t({...s.data(),id:s.id})})},[n]),m.jsx("div",{children:e&&m.jsx(Oy,{item:e})})},Ly=()=>m.jsxs("div",{children:[m.jsx("h1",{children:"Nosotros"}),m.jsxs("section",{children:[m.jsx("h2",{children:"¡Conoce Nuestra Historia Tecnológica!"}),m.jsx("p",{children:'En la sección de "Nosotros" de nuestra página, te invitamos a sumergirte en el emocionante viaje que nos ha llevado a convertirnos en tu destino preferido para adquirir los últimos y más innovadores celulares nuevos. Nuestra pasión por la tecnología y nuestro compromiso con la excelencia nos impulsaron a iniciar este emocionante emprendimiento. Desde nuestros humildes comienzos, hemos estado dedicados a ofrecer a nuestros clientes una experiencia única en la compra de dispositivos móviles de vanguardia. Nuestra visión siempre ha sido clara: no solo vender celulares, sino también construir conexiones duraderas con cada persona que elige confiar en nosotros. Nos enorgullecemos de estar a la vanguardia de las últimas tendencias y avances tecnológicos. Nuestro equipo de expertos cura cuidadosamente una selección diversa de celulares nuevos que se adaptan a las necesidades y deseos de cada individuo. Creemos que la tecnología no solo es una herramienta, sino una forma de expresión personal y empoderamiento. En cada paso de nuestro camino, desde la selección de productos hasta la atención al cliente y el servicio postventa, nos esforzamos por superar expectativas. Creemos en la transparencia, la confiabilidad y la autenticidad en todo lo que hacemos. Tu satisfacción es nuestra máxima prioridad, y cada dispositivo que vendemos es un testimonio de nuestro compromiso con la calidad. Te invitamos a unirte a nosotros en este emocionante viaje tecnológico. Explora nuestra página de "Nosotros" para descubrir más sobre nuestra pasión, valores y dedicación a brindarte los celulares nuevos más increíbles. ¡Gracias por ser parte de nuestra historia y por elegirnos como tu destino confiable para todas tus necesidades de tecnología móvil!'})]})]}),jy=()=>{const{carrito:e,vaciarCarrito:t,calcularPrecioTotal:n,eliminarProducto:r}=R.useContext(Xn),s=()=>{t()},i=o=>{r(o)};return m.jsxs("div",{className:"container",children:[m.jsx("h1",{children:"Carrito"}),m.jsx("hr",{}),e.map((o,a)=>m.jsxs("div",{className:"ProductoCarrito",children:[m.jsx("img",{className:"ImagenCarrito",src:o.imagen,alt:o.nombre}),m.jsxs("div",{className:"InfoProducto",children:[m.jsx("h3",{children:o.nombre}),m.jsxs("h4",{children:["Precio: ",o.precio,"usdt"]}),m.jsxs("h4",{children:["Cantidad: ",o.cantidad]}),m.jsxs("h4",{children:["Precio total: ",o.precio*o.cantidad,"usdt"]}),m.jsx("button",{className:"eliminarproducto",onClick:()=>i(o.id),children:"Eliminar"})]})]},a)),e.length>0?m.jsxs(m.Fragment,{children:[m.jsxs("h2",{children:["Precio Total: ",n(),"usdt"]}),m.jsx("button",{onClick:s,className:"vaciar",children:"Vaciar Carrito"}),m.jsxs("button",{className:"finalizarCompra",children:[" ",m.jsx(Dt,{to:"/checkout",children:"Finalizar compra"})]})]}):m.jsx("h2",{children:"El carrito se encuentra vacio"})]})};var mr=e=>e.type==="checkbox",qe=e=>e instanceof Date,St=e=>e==null;const Eh=e=>typeof e=="object";var ut=e=>!St(e)&&!Array.isArray(e)&&Eh(e)&&!qe(e),Uy=e=>ut(e)&&e.target?mr(e.target)?e.target.checked:e.target.value:e,By=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,$y=(e,t)=>e.has(By(t)),qy=e=>{const t=e.constructor&&e.constructor.prototype;return ut(t)&&t.hasOwnProperty("isPrototypeOf")},Ho=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function le(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Ho&&(e instanceof Blob||e instanceof FileList))&&(n||ut(e)))if(t=n?[]:{},!n&&!qy(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=le(e[r]));else return e;return t}var pr=e=>Array.isArray(e)?e.filter(Boolean):[],ot=e=>e===void 0,V=(e,t,n)=>{if(!t||!ut(e))return n;const r=pr(t.split(/[,[\].]+?/)).reduce((s,i)=>St(s)?s:s[i],e);return ot(r)||r===e?ot(e[t])?n:e[t]:r};const yl={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},jt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Jt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Zt.createContext(null);var zy=(e,t,n,r=!0)=>{const s={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(s,i,{get:()=>{const o=i;return t._proxyFormState[o]!==jt.all&&(t._proxyFormState[o]=!r||jt.all),n&&(n[o]=!0),e[o]}});return s},Ot=e=>ut(e)&&!Object.keys(e).length,Hy=(e,t,n,r)=>{n(e);const{name:s,...i}=e;return Ot(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(o=>t[o]===(!r||jt.all))},Js=e=>Array.isArray(e)?e:[e];function Wy(e){const t=Zt.useRef(e);t.current=e,Zt.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Gt=e=>typeof e=="string",Ky=(e,t,n,r,s)=>Gt(e)?(r&&t.watch.add(e),V(n,e,s)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),V(n,i))):(r&&(t.watchAll=!0),n),Wo=e=>/^\w*$/.test(e),Th=e=>pr(e.replace(/["|']|\]/g,"").split(/\.|\[/));function J(e,t,n){let r=-1;const s=Wo(t)?[t]:Th(t),i=s.length,o=i-1;for(;++r<i;){const a=s[r];let l=n;if(r!==o){const c=e[a];l=ut(c)||Array.isArray(c)?c:isNaN(+s[r+1])?{}:[]}e[a]=l,e=e[a]}return e}var Gy=(e,t,n,r,s)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:s||!0}}:{};const ji=(e,t,n)=>{for(const r of n||Object.keys(e)){const s=V(e,r);if(s){const{_f:i,...o}=s;if(i&&t(i.name)){if(i.ref.focus){i.ref.focus();break}else if(i.refs&&i.refs[0].focus){i.refs[0].focus();break}}else ut(o)&&ji(o,t)}}};var vl=e=>({isOnSubmit:!e||e===jt.onSubmit,isOnBlur:e===jt.onBlur,isOnChange:e===jt.onChange,isOnAll:e===jt.all,isOnTouch:e===jt.onTouched}),El=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Qy=(e,t,n)=>{const r=pr(V(e,n));return J(r,"root",t[n]),J(e,n,r),e},Ge=e=>typeof e=="boolean",Ko=e=>e.type==="file",he=e=>typeof e=="function",Qr=e=>{if(!Ho)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Vr=e=>Gt(e),Go=e=>e.type==="radio",Yr=e=>e instanceof RegExp;const Tl={value:!1,isValid:!1},Il={value:!0,isValid:!0};var Ih=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ot(e[0].attributes.value)?ot(e[0].value)||e[0].value===""?Il:{value:e[0].value,isValid:!0}:Il:Tl}return Tl};const wl={isValid:!1,value:null};var wh=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,wl):wl;function Al(e,t,n="validate"){if(Vr(e)||Array.isArray(e)&&e.every(Vr)||Ge(e)&&!e)return{type:n,message:Vr(e)?e:"",ref:t}}var je=e=>ut(e)&&!Yr(e)?e:{value:e,message:""},Rl=async(e,t,n,r,s)=>{const{ref:i,refs:o,required:a,maxLength:l,minLength:c,min:u,max:h,pattern:f,validate:g,name:I,valueAsNumber:C,mount:T,disabled:O}=e._f,w=V(t,I);if(!T||O)return{};const j=o?o[0]:i,z=W=>{r&&j.reportValidity&&(j.setCustomValidity(Ge(W)?"":W||""),j.reportValidity())},q={},xt=Go(i),yt=mr(i),Oe=xt||yt,vt=(C||Ko(i))&&ot(i.value)&&ot(w)||Qr(i)&&i.value===""||w===""||Array.isArray(w)&&!w.length,qt=Gy.bind(null,I,n,q),Xt=(W,B,nt,bt=Jt.maxLength,Mt=Jt.minLength)=>{const zt=W?B:nt;q[I]={type:W?bt:Mt,message:zt,ref:i,...qt(W?bt:Mt,zt)}};if(s?!Array.isArray(w)||!w.length:a&&(!Oe&&(vt||St(w))||Ge(w)&&!w||yt&&!Ih(o).isValid||xt&&!wh(o).isValid)){const{value:W,message:B}=Vr(a)?{value:!!a,message:a}:je(a);if(W&&(q[I]={type:Jt.required,message:B,ref:j,...qt(Jt.required,B)},!n))return z(B),q}if(!vt&&(!St(u)||!St(h))){let W,B;const nt=je(h),bt=je(u);if(!St(w)&&!isNaN(w)){const Mt=i.valueAsNumber||w&&+w;St(nt.value)||(W=Mt>nt.value),St(bt.value)||(B=Mt<bt.value)}else{const Mt=i.valueAsDate||new Date(w),zt=_n=>new Date(new Date().toDateString()+" "+_n),Ie=i.type=="time",gn=i.type=="week";Gt(nt.value)&&w&&(W=Ie?zt(w)>zt(nt.value):gn?w>nt.value:Mt>new Date(nt.value)),Gt(bt.value)&&w&&(B=Ie?zt(w)<zt(bt.value):gn?w<bt.value:Mt<new Date(bt.value))}if((W||B)&&(Xt(!!W,nt.message,bt.message,Jt.max,Jt.min),!n))return z(q[I].message),q}if((l||c)&&!vt&&(Gt(w)||s&&Array.isArray(w))){const W=je(l),B=je(c),nt=!St(W.value)&&w.length>+W.value,bt=!St(B.value)&&w.length<+B.value;if((nt||bt)&&(Xt(nt,W.message,B.message),!n))return z(q[I].message),q}if(f&&!vt&&Gt(w)){const{value:W,message:B}=je(f);if(Yr(W)&&!w.match(W)&&(q[I]={type:Jt.pattern,message:B,ref:i,...qt(Jt.pattern,B)},!n))return z(B),q}if(g){if(he(g)){const W=await g(w,t),B=Al(W,j);if(B&&(q[I]={...B,...qt(Jt.validate,B.message)},!n))return z(B.message),q}else if(ut(g)){let W={};for(const B in g){if(!Ot(W)&&!n)break;const nt=Al(await g[B](w,t),j,B);nt&&(W={...nt,...qt(B,nt.message)},z(nt.message),n&&(q[I]=W))}if(!Ot(W)&&(q[I]={ref:j,...W},!n))return q}}return z(!0),q};function Yy(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=ot(e)?r++:e[t[r++]];return e}function Xy(e){for(const t in e)if(e.hasOwnProperty(t)&&!ot(e[t]))return!1;return!0}function mt(e,t){const n=Array.isArray(t)?t:Wo(t)?[t]:Th(t),r=n.length===1?e:Yy(e,n),s=n.length-1,i=n[s];return r&&delete r[i],s!==0&&(ut(r)&&Ot(r)||Array.isArray(r)&&Xy(r))&&mt(e,n.slice(0,-1)),e}function Zs(){let e=[];return{get observers(){return e},next:s=>{for(const i of e)i.next&&i.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(i=>i!==s)}}),unsubscribe:()=>{e=[]}}}var Xr=e=>St(e)||!Eh(e);function Pe(e,t){if(Xr(e)||Xr(t))return e===t;if(qe(e)&&qe(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const s of n){const i=e[s];if(!r.includes(s))return!1;if(s!=="ref"){const o=t[s];if(qe(i)&&qe(o)||ut(i)&&ut(o)||Array.isArray(i)&&Array.isArray(o)?!Pe(i,o):i!==o)return!1}}return!0}var Ah=e=>e.type==="select-multiple",Jy=e=>Go(e)||mr(e),ti=e=>Qr(e)&&e.isConnected,Rh=e=>{for(const t in e)if(he(e[t]))return!0;return!1};function Jr(e,t={}){const n=Array.isArray(e);if(ut(e)||n)for(const r in e)Array.isArray(e[r])||ut(e[r])&&!Rh(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Jr(e[r],t[r])):St(e[r])||(t[r]=!0);return t}function Ch(e,t,n){const r=Array.isArray(e);if(ut(e)||r)for(const s in e)Array.isArray(e[s])||ut(e[s])&&!Rh(e[s])?ot(t)||Xr(n[s])?n[s]=Array.isArray(e[s])?Jr(e[s],[]):{...Jr(e[s])}:Ch(e[s],St(t)?{}:t[s],n[s]):n[s]=!Pe(e[s],t[s]);return n}var ei=(e,t)=>Ch(e,t,Jr(t)),Ph=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ot(e)?e:t?e===""?NaN:e&&+e:n&&Gt(e)?new Date(e):r?r(e):e;function ni(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Ko(t)?t.files:Go(t)?wh(e.refs).value:Ah(t)?[...t.selectedOptions].map(({value:n})=>n):mr(t)?Ih(e.refs).value:Ph(ot(t.value)?e.ref.value:t.value,e)}var Zy=(e,t,n,r)=>{const s={};for(const i of e){const o=V(t,i);o&&J(s,i,o._f)}return{criteriaMode:n,names:[...e],fields:s,shouldUseNativeValidation:r}},En=e=>ot(e)?e:Yr(e)?e.source:ut(e)?Yr(e.value)?e.value.source:e.value:e,tv=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Cl(e,t,n){const r=V(e,n);if(r||Wo(n))return{error:r,name:n};const s=n.split(".");for(;s.length;){const i=s.join("."),o=V(t,i),a=V(e,i);if(o&&!Array.isArray(o)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};s.pop()}return{name:n}}var ev=(e,t,n,r,s)=>s.isOnAll?!1:!n&&s.isOnTouch?!(t||e):(n?r.isOnBlur:s.isOnBlur)?!e:(n?r.isOnChange:s.isOnChange)?e:!0,nv=(e,t)=>!pr(V(e,t)).length&&mt(e,t);const rv={mode:jt.onSubmit,reValidateMode:jt.onChange,shouldFocusError:!0};function sv(e={},t){let n={...rv,...e},r={submitCount:0,isDirty:!1,isLoading:he(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},s={},i=ut(n.defaultValues)||ut(n.values)?le(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:le(i),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,u=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Zs(),array:Zs(),state:Zs()},g=e.resetOptions&&e.resetOptions.keepDirtyValues,I=vl(n.mode),C=vl(n.reValidateMode),T=n.criteriaMode===jt.all,O=d=>p=>{clearTimeout(u),u=setTimeout(d,p)},w=async d=>{if(h.isValid||d){const p=n.resolver?Ot((await vt()).errors):await Xt(s,!0);p!==r.isValid&&f.state.next({isValid:p})}},j=d=>h.isValidating&&f.state.next({isValidating:d}),z=(d,p=[],_,b,P=!0,E=!0)=>{if(b&&_){if(a.action=!0,E&&Array.isArray(V(s,d))){const N=_(V(s,d),b.argA,b.argB);P&&J(s,d,N)}if(E&&Array.isArray(V(r.errors,d))){const N=_(V(r.errors,d),b.argA,b.argB);P&&J(r.errors,d,N),nv(r.errors,d)}if(h.touchedFields&&E&&Array.isArray(V(r.touchedFields,d))){const N=_(V(r.touchedFields,d),b.argA,b.argB);P&&J(r.touchedFields,d,N)}h.dirtyFields&&(r.dirtyFields=ei(i,o)),f.state.next({name:d,isDirty:B(d,p),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else J(o,d,p)},q=(d,p)=>{J(r.errors,d,p),f.state.next({errors:r.errors})},xt=(d,p,_,b)=>{const P=V(s,d);if(P){const E=V(o,d,ot(_)?V(i,d):_);ot(E)||b&&b.defaultChecked||p?J(o,d,p?E:ni(P._f)):Mt(d,E),a.mount&&w()}},yt=(d,p,_,b,P)=>{let E=!1,N=!1;const tt={name:d};if(!_||b){h.isDirty&&(N=r.isDirty,r.isDirty=tt.isDirty=B(),E=N!==tt.isDirty);const rt=Pe(V(i,d),p);N=V(r.dirtyFields,d),rt?mt(r.dirtyFields,d):J(r.dirtyFields,d,!0),tt.dirtyFields=r.dirtyFields,E=E||h.dirtyFields&&N!==!rt}if(_){const rt=V(r.touchedFields,d);rt||(J(r.touchedFields,d,_),tt.touchedFields=r.touchedFields,E=E||h.touchedFields&&rt!==_)}return E&&P&&f.state.next(tt),E?tt:{}},Oe=(d,p,_,b)=>{const P=V(r.errors,d),E=h.isValid&&Ge(p)&&r.isValid!==p;if(e.delayError&&_?(c=O(()=>q(d,_)),c(e.delayError)):(clearTimeout(u),c=null,_?J(r.errors,d,_):mt(r.errors,d)),(_?!Pe(P,_):P)||!Ot(b)||E){const N={...b,...E&&Ge(p)?{isValid:p}:{},errors:r.errors,name:d};r={...r,...N},f.state.next(N)}j(!1)},vt=async d=>n.resolver(o,n.context,Zy(d||l.mount,s,n.criteriaMode,n.shouldUseNativeValidation)),qt=async d=>{const{errors:p}=await vt();if(d)for(const _ of d){const b=V(p,_);b?J(r.errors,_,b):mt(r.errors,_)}else r.errors=p;return p},Xt=async(d,p,_={valid:!0})=>{for(const b in d){const P=d[b];if(P){const{_f:E,...N}=P;if(E){const tt=l.array.has(E.name),rt=await Rl(P,o,T,n.shouldUseNativeValidation&&!p,tt);if(rt[E.name]&&(_.valid=!1,p))break;!p&&(V(rt,E.name)?tt?Qy(r.errors,rt,E.name):J(r.errors,E.name,rt[E.name]):mt(r.errors,E.name))}N&&await Xt(N,p,_)}}return _.valid},W=()=>{for(const d of l.unMount){const p=V(s,d);p&&(p._f.refs?p._f.refs.every(_=>!ti(_)):!ti(p._f.ref))&&xs(d)}l.unMount=new Set},B=(d,p)=>(d&&p&&J(o,d,p),!Pe(Qo(),i)),nt=(d,p,_)=>Ky(d,l,{...a.mount?o:ot(p)?i:Gt(d)?{[d]:p}:p},_,p),bt=d=>pr(V(a.mount?o:i,d,e.shouldUnregister?V(i,d,[]):[])),Mt=(d,p,_={})=>{const b=V(s,d);let P=p;if(b){const E=b._f;E&&(!E.disabled&&J(o,d,Ph(p,E)),P=Qr(E.ref)&&St(p)?"":p,Ah(E.ref)?[...E.ref.options].forEach(N=>N.selected=P.includes(N.value)):E.refs?mr(E.ref)?E.refs.length>1?E.refs.forEach(N=>(!N.defaultChecked||!N.disabled)&&(N.checked=Array.isArray(P)?!!P.find(tt=>tt===N.value):P===N.value)):E.refs[0]&&(E.refs[0].checked=!!P):E.refs.forEach(N=>N.checked=N.value===P):Ko(E.ref)?E.ref.value="":(E.ref.value=P,E.ref.type||f.values.next({name:d,values:{...o}})))}(_.shouldDirty||_.shouldTouch)&&yt(d,P,_.shouldTouch,_.shouldDirty,!0),_.shouldValidate&&_n(d)},zt=(d,p,_)=>{for(const b in p){const P=p[b],E=`${d}.${b}`,N=V(s,E);(l.array.has(d)||!Xr(P)||N&&!N._f)&&!qe(P)?zt(E,P,_):Mt(E,P,_)}},Ie=(d,p,_={})=>{const b=V(s,d),P=l.array.has(d),E=le(p);J(o,d,E),P?(f.array.next({name:d,values:{...o}}),(h.isDirty||h.dirtyFields)&&_.shouldDirty&&f.state.next({name:d,dirtyFields:ei(i,o),isDirty:B(d,E)})):b&&!b._f&&!St(E)?zt(d,E,_):Mt(d,E,_),El(d,l)&&f.state.next({...r}),f.values.next({name:d,values:{...o}}),!a.mount&&t()},gn=async d=>{const p=d.target;let _=p.name,b=!0;const P=V(s,_),E=()=>p.type?ni(P._f):Uy(d);if(P){let N,tt;const rt=E(),Fe=d.type===yl.BLUR||d.type===yl.FOCUS_OUT,bh=!tv(P._f)&&!n.resolver&&!V(r.errors,_)&&!P._f.deps||ev(Fe,V(r.touchedFields,_),r.isSubmitted,C,I),Ds=El(_,l,Fe);J(o,_,rt),Fe?(P._f.onBlur&&P._f.onBlur(d),c&&c(0)):P._f.onChange&&P._f.onChange(d);const Ns=yt(_,rt,Fe,!1),Dh=!Ot(Ns)||Ds;if(!Fe&&f.values.next({name:_,type:d.type,values:{...o}}),bh)return h.isValid&&w(),Dh&&f.state.next({name:_,...Ds?{}:Ns});if(!Fe&&Ds&&f.state.next({...r}),j(!0),n.resolver){const{errors:na}=await vt([_]),Nh=Cl(r.errors,s,_),ra=Cl(na,s,Nh.name||_);N=ra.error,_=ra.name,tt=Ot(na)}else N=(await Rl(P,o,T,n.shouldUseNativeValidation))[_],b=isNaN(rt)||rt===V(o,_,rt),b&&(N?tt=!1:h.isValid&&(tt=await Xt(s,!0)));b&&(P._f.deps&&_n(P._f.deps),Oe(_,tt,N,Ns))}},_n=async(d,p={})=>{let _,b;const P=Js(d);if(j(!0),n.resolver){const E=await qt(ot(d)?d:P);_=Ot(E),b=d?!P.some(N=>V(E,N)):_}else d?(b=(await Promise.all(P.map(async E=>{const N=V(s,E);return await Xt(N&&N._f?{[E]:N}:N)}))).every(Boolean),!(!b&&!r.isValid)&&w()):b=_=await Xt(s);return f.state.next({...!Gt(d)||h.isValid&&_!==r.isValid?{}:{name:d},...n.resolver||!d?{isValid:_}:{},errors:r.errors,isValidating:!1}),p.shouldFocus&&!b&&ji(s,E=>E&&V(r.errors,E),d?P:l.mount),b},Qo=d=>{const p={...i,...a.mount?o:{}};return ot(d)?p:Gt(d)?V(p,d):d.map(_=>V(p,_))},Yo=(d,p)=>({invalid:!!V((p||r).errors,d),isDirty:!!V((p||r).dirtyFields,d),isTouched:!!V((p||r).touchedFields,d),error:V((p||r).errors,d)}),Sh=d=>{d&&Js(d).forEach(p=>mt(r.errors,p)),f.state.next({errors:d?r.errors:{}})},Xo=(d,p,_)=>{const b=(V(s,d,{_f:{}})._f||{}).ref;J(r.errors,d,{...p,ref:b}),f.state.next({name:d,errors:r.errors,isValid:!1}),_&&_.shouldFocus&&b&&b.focus&&b.focus()},Vh=(d,p)=>he(d)?f.values.subscribe({next:_=>d(nt(void 0,p),_)}):nt(d,p,!0),xs=(d,p={})=>{for(const _ of d?Js(d):l.mount)l.mount.delete(_),l.array.delete(_),p.keepValue||(mt(s,_),mt(o,_)),!p.keepError&&mt(r.errors,_),!p.keepDirty&&mt(r.dirtyFields,_),!p.keepTouched&&mt(r.touchedFields,_),!n.shouldUnregister&&!p.keepDefaultValue&&mt(i,_);f.values.next({values:{...o}}),f.state.next({...r,...p.keepDirty?{isDirty:B()}:{}}),!p.keepIsValid&&w()},bs=(d,p={})=>{let _=V(s,d);const b=Ge(p.disabled);return J(s,d,{..._||{},_f:{..._&&_._f?_._f:{ref:{name:d}},name:d,mount:!0,...p}}),l.mount.add(d),_?b&&J(o,d,p.disabled?void 0:V(o,d,ni(_._f))):xt(d,!0,p.value),{...b?{disabled:p.disabled}:{},...n.progressive?{required:!!p.required,min:En(p.min),max:En(p.max),minLength:En(p.minLength),maxLength:En(p.maxLength),pattern:En(p.pattern)}:{},name:d,onChange:gn,onBlur:gn,ref:P=>{if(P){bs(d,p),_=V(s,d);const E=ot(P.value)&&P.querySelectorAll&&P.querySelectorAll("input,select,textarea")[0]||P,N=Jy(E),tt=_._f.refs||[];if(N?tt.find(rt=>rt===E):E===_._f.ref)return;J(s,d,{_f:{..._._f,...N?{refs:[...tt.filter(ti),E,...Array.isArray(V(i,d))?[{}]:[]],ref:{type:E.type,name:d}}:{ref:E}}}),xt(d,!1,void 0,E)}else _=V(s,d,{}),_._f&&(_._f.mount=!1),(n.shouldUnregister||p.shouldUnregister)&&!($y(l.array,d)&&a.action)&&l.unMount.add(d)}}},Jo=()=>n.shouldFocusError&&ji(s,d=>d&&V(r.errors,d),l.mount),Zo=(d,p)=>async _=>{_&&(_.preventDefault&&_.preventDefault(),_.persist&&_.persist());let b=le(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:P,values:E}=await vt();r.errors=P,b=E}else await Xt(s);mt(r.errors,"root"),Ot(r.errors)?(f.state.next({errors:{}}),await d(b,_)):(p&&await p({...r.errors},_),Jo(),setTimeout(Jo)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ot(r.errors),submitCount:r.submitCount+1,errors:r.errors})},xh=(d,p={})=>{V(s,d)&&(ot(p.defaultValue)?Ie(d,V(i,d)):(Ie(d,p.defaultValue),J(i,d,p.defaultValue)),p.keepTouched||mt(r.touchedFields,d),p.keepDirty||(mt(r.dirtyFields,d),r.isDirty=p.defaultValue?B(d,V(i,d)):B()),p.keepError||(mt(r.errors,d),h.isValid&&w()),f.state.next({...r}))},ta=(d,p={})=>{const _=d||i,b=le(_),P=d&&!Ot(d)?b:i;if(p.keepDefaultValues||(i=_),!p.keepValues){if(p.keepDirtyValues||g)for(const E of l.mount)V(r.dirtyFields,E)?J(P,E,V(o,E)):Ie(E,V(P,E));else{if(Ho&&ot(d))for(const E of l.mount){const N=V(s,E);if(N&&N._f){const tt=Array.isArray(N._f.refs)?N._f.refs[0]:N._f.ref;if(Qr(tt)){const rt=tt.closest("form");if(rt){rt.reset();break}}}}s={}}o=e.shouldUnregister?p.keepDefaultValues?le(i):{}:le(P),f.array.next({values:{...P}}),f.values.next({values:{...P}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&t(),a.mount=!h.isValid||!!p.keepIsValid,a.watch=!!e.shouldUnregister,f.state.next({submitCount:p.keepSubmitCount?r.submitCount:0,isDirty:p.keepDirty?r.isDirty:!!(p.keepDefaultValues&&!Pe(d,i)),isSubmitted:p.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:p.keepDirtyValues?r.dirtyFields:p.keepDefaultValues&&d?ei(i,d):{},touchedFields:p.keepTouched?r.touchedFields:{},errors:p.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},ea=(d,p)=>ta(he(d)?d(o):d,p);return{control:{register:bs,unregister:xs,getFieldState:Yo,handleSubmit:Zo,setError:Xo,_executeSchema:vt,_getWatch:nt,_getDirty:B,_updateValid:w,_removeUnmounted:W,_updateFieldArray:z,_getFieldArray:bt,_reset:ta,_resetDefaultValues:()=>he(n.defaultValues)&&n.defaultValues().then(d=>{ea(d,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:d=>{r={...r,...d}},_subjects:f,_proxyFormState:h,get _fields(){return s},get _formValues(){return o},get _state(){return a},set _state(d){a=d},get _defaultValues(){return i},get _names(){return l},set _names(d){l=d},get _formState(){return r},set _formState(d){r=d},get _options(){return n},set _options(d){n={...n,...d}}},trigger:_n,register:bs,handleSubmit:Zo,watch:Vh,setValue:Ie,getValues:Qo,reset:ea,resetField:xh,clearErrors:Sh,unregister:xs,setError:Xo,setFocus:(d,p={})=>{const _=V(s,d),b=_&&_._f;if(b){const P=b.refs?b.refs[0]:b.ref;P.focus&&(P.focus(),p.shouldSelect&&P.select())}},getFieldState:Yo}}function iv(e={}){const t=Zt.useRef(),n=Zt.useRef(),[r,s]=Zt.useState({isDirty:!1,isValidating:!1,isLoading:he(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:he(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...sv(e,()=>s(o=>({...o}))),formState:r});const i=t.current.control;return i._options=e,Wy({subject:i._subjects.state,next:o=>{Hy(o,i._proxyFormState,i._updateFormState,!0)&&s({...i._formState})}}),Zt.useEffect(()=>{e.values&&!Pe(e.values,n.current)?(i._reset(e.values,i._options.resetOptions),n.current=e.values):i._resetDefaultValues()},[e.values,i]),Zt.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=zy(r,i),t.current}function ov(){var u,h;const{carrito:e,vaciarCarrito:t,calcularPrecioTotal:n}=R.useContext(Xn),r=Ol(),{register:s,handleSubmit:i,formState:{errors:o},getValues:a}=iv(),l=async f=>{const g={cliente:f,productos:e,total:n()};console.log(g);const I=oh(zo,"pedidos");try{const C=await Sy(I,g);Swal.fire({icon:"success",title:`¡Gracias por tu compra, ${f.nombre}!`,text:`Tu pedido ha sido registrado exitosamente, id:${C.id} `}),t(),setTimeout(()=>{r("/productos")},5e3)}catch(C){console.error("Error al agregar el pedido:",C),Swal.fire({icon:"error",title:"Error",text:"Hubo un problema al registrar tu pedido."})}},c=f=>{const g=a("email");return f===g||"Los correos electrónicos no coinciden"};return m.jsxs("div",{className:"containerForm",children:[m.jsx("h2",{children:"Finalizar Compra"}),m.jsxs("form",{className:"formulario",onSubmit:i(l),children:[m.jsx("input",{type:"text",placeholder:"Ingresá tu nombre",...s("nombre",{required:!0})}),o.nombre&&m.jsx("p",{children:"El nombre es requerido"}),m.jsx("input",{type:"email",placeholder:"Ingresá tu e-mail",...s("email",{required:!0})}),o.email&&m.jsx("p",{children:"El correo es requerido"}),m.jsx("input",{type:"email",placeholder:"Repetir e-mail",...s("emailRepeat",{required:!0,validate:c})}),o.emailRepeat&&m.jsx("p",{children:o.emailRepeat.message}),m.jsx("input",{type:"tel",placeholder:"Ingresá tu Celular",...s("telefono",{pattern:/^\d+$/,minLength:8}),inputMode:"numeric"}),((u=o.telefono)==null?void 0:u.type)==="pattern"?m.jsx("p",{children:"Ingrese solo números"}):((h=o.telefono)==null?void 0:h.type)==="minLength"?m.jsx("p",{children:"Ingresar número de teléfono/celular completo"}):null,m.jsx("button",{className:"buttonCarrito",children:m.jsxs(Dt,{className:"nav-link",to:"/carrito",children:[m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cart4",viewBox:"0 0 16 16",children:m.jsx("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})})," ","volver al carrito"]})}),m.jsx("button",{className:"comprar",type:"submit",children:"Comprar"})]})]})}function av(){return m.jsx("div",{children:m.jsx(Bd,{children:m.jsx(Od,{children:m.jsxs($h,{children:[m.jsx(qd,{}),m.jsxs(xd,{children:[m.jsx(ae,{path:"/",element:m.jsx(Xs,{})}),m.jsx(ae,{path:"/item/:id",element:m.jsx(Fy,{})}),m.jsx(ae,{path:"/productos",element:m.jsx(Xs,{})}),m.jsx(ae,{path:"/productos/:marca",element:m.jsx(Xs,{})}),m.jsx(ae,{path:"/nosotros",element:m.jsx(Ly,{})}),m.jsx(ae,{path:"/carrito",element:m.jsx(jy,{})}),m.jsx(ae,{path:"/checkout",element:m.jsx(ov,{})})]}),m.jsx(zd,{})]})})})})}ri.createRoot(document.getElementById("root")).render(m.jsx(Zt.StrictMode,{children:m.jsx(av,{})}));
