import{H as zt}from"../chunks/control.f5b05b5f.js";import{r as Xt,g as Kt,f as rt,q as ae,w as be,y as ye,t as we,v as ve,h as Re,j as Gt,_ as Qt,C as Yt,A as je,S as Zt,D as de,E as Jt,F as en,H as tn,I as nn,J as on,K as rn,B as H,L as Fe}from"../chunks/firebaseConfig.0c3747e6.js";import{s as Ce,B as ue,v as st,r as it,C as G,D as ct,e as le,n as at,g as $,h as j,i as K,G as Ve,k as F,F as sn,u as ut,p as lt,q as ft,c as ee,d as te,P as cn,w as re}from"../chunks/scheduler.d05b783f.js";import{S as Oe,i as Ne,d as w,v as De,a as M,h as ne,t as b,c as oe,b as _,e as P,j as A,k as U,m as S,l as I,g as L,n as X}from"../chunks/index.cc061d23.js";import{t as an,o as un,b as ln,c as fn,m as dn,I as W,W as me}from"../chunks/wavesurfer.f7bc6d49.js";import{w as hn}from"../chunks/index.60452c41.js";import{p as pe}from"../chunks/stores.d73e76eb.js";function mn(t,...e){const n={};for(const o of Object.keys(t))e.includes(o)||(n[o]=t[o]);return n}const pn={defaultValue:0,max:100},{name:gn}=fn("progress"),_n=t=>{const e={...pn,...t},n=an(mn(e,"value")),{max:o}=n,r=e.value??hn(e.defaultValue),s=un(r,e==null?void 0:e.onValueChange);return{elements:{root:ln(gn(),{stores:[s,o],returned:([c,a])=>({value:c,max:a,role:"meter","aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":c,"data-value":c,"data-state":c===null?"indeterminate":c===a?"complete":"loading","data-max":a})})},states:{value:s},options:n}},He={set:bn};function bn(t){const e=_n(Xt(t));return{...e,updateOption:Kt(e.options)}}const yn="C:/Users/Guile/Desktop/veil/node_modules/bits-ui/dist/bits/progress/components/Progress.svelte",wn=t=>({builder:t&2}),qe=t=>({builder:t[11]}),vn=t=>({builder:t&2}),We=t=>({builder:t[1]});function Rn(t){const e=t.slice(),n=e[1];return e[11]=n,e}function dt(t){let e,n,o,r;const s=t[8].default,i=at(s,t,t[7],qe);let c=[t[11],t[3]],a={};for(let u=0;u<c.length;u+=1)a=G(a,c[u]);const l={c:function(){e=$("div"),i&&i.c(),this.h()},l:function(f){e=j(f,"DIV",{});var d=K(e);i&&i.l(d),d.forEach(P),this.h()},h:function(){Ve(e,a),F(e,yn,29,1,586)},m:function(f,d){M(f,e,d),i&&i.m(e,null),n=!0,o||(r=sn(t[11].action(e)),o=!0)},p:function(f,d){i&&i.p&&(!n||d&130)&&ut(i,s,f,f[7],n?ft(s,f[7],d,wn):lt(f[7]),qe),Ve(e,a=rt(c,[d&2&&f[11],d&8&&f[3]]))},i:function(f){n||(_(i,f),n=!0)},o:function(f){b(i,f),n=!1},d:function(f){f&&P(e),i&&i.d(f),o=!1,r()}};return w("SvelteRegisterBlock",{block:l,id:dt.name,type:"else",source:"(28:0) {:else}",ctx:t}),l}function ht(t){let e;const n=t[8].default,o=at(n,t,t[7],We),r={c:function(){o&&o.c()},l:function(i){o&&o.l(i)},m:function(i,c){o&&o.m(i,c),e=!0},p:function(i,c){o&&o.p&&(!e||c&130)&&ut(o,n,i,i[7],e?ft(n,i[7],c,vn):lt(i[7]),We)},i:function(i){e||(_(o,i),e=!0)},o:function(i){b(o,i),e=!1},d:function(i){o&&o.d(i)}};return w("SvelteRegisterBlock",{block:r,id:ht.name,type:"if",source:"(26:0) {#if asChild}",ctx:t}),r}function ke(t){let e,n,o,r;const s=[ht,dt],i=[];function c(u,f){return u[0]?0:1}function a(u,f){return f===1?Rn(u):u}e=c(t),n=i[e]=s[e](a(t,e));const l={c:function(){n.c(),o=le()},l:function(f){n.l(f),o=le()},m:function(f,d){i[e].m(f,d),M(f,o,d),r=!0},p:function(f,[d]){let m=e;e=c(f),e===m?i[e].p(a(f,e),d):(ne(),b(i[m],1,1,()=>{i[m]=null}),oe(),n=i[e],n?n.p(a(f,e),d):(n=i[e]=s[e](a(f,e)),n.c()),_(n,1),n.m(o.parentNode,o))},i:function(f){r||(_(n),r=!0)},o:function(f){b(n),r=!1},d:function(f){f&&P(o),i[e].d(f)}};return w("SvelteRegisterBlock",{block:l,id:ke.name,type:"component",source:"",ctx:t}),l}function kn(t,e,n){const o=["max","value","onValueChange","asChild"];let r=ue(e,o),s,{$$slots:i={},$$scope:c}=e;De("Progress",i,["default"]);let{max:a=void 0}=e,{value:l=void 0}=e,{onValueChange:u=void 0}=e,{asChild:f=!1}=e;const{elements:{root:d},states:{value:m},updateOption:p}=He.set({max:a,defaultValue:l,onValueChange:({next:h})=>(u==null||u(h),n(4,l=h),h)});return st(d,"root"),it(t,d,h=>n(1,s=h)),t.$$set=h=>{e=G(G({},e),ct(h)),n(3,r=ue(e,o)),"max"in h&&n(5,a=h.max),"value"in h&&n(4,l=h.value),"onValueChange"in h&&n(6,u=h.onValueChange),"asChild"in h&&n(0,f=h.asChild),"$$scope"in h&&n(7,c=h.$$scope)},t.$capture_state=()=>({melt:dn,ctx:He,max:a,value:l,onValueChange:u,asChild:f,root:d,localValue:m,updateOption:p,$root:s}),t.$inject_state=h=>{"max"in e&&n(5,a=h.max),"value"in e&&n(4,l=h.value),"onValueChange"in e&&n(6,u=h.onValueChange),"asChild"in e&&n(0,f=h.asChild)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&16&&l!==void 0&&m.set(l),t.$$.dirty&32&&p("max",a)},[f,s,d,r,l,a,u,c,i]}let Te=class extends Oe{constructor(e){super(e),Ne(this,e,kn,ke,Ce,{max:5,value:4,onValueChange:6,asChild:0}),w("SvelteRegisterComponent",{component:this,tagName:"Progress",options:e,id:ke.name})}get max(){throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set max(e){throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onValueChange(){throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onValueChange(e){throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get asChild(){throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set asChild(e){throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}};const Tn=Object.freeze(Object.defineProperty({__proto__:null,Progress:Te,Root:Te},Symbol.toStringTag,{value:"Module"}));function En(t,e){if(isNaN(t)||t<400||t>599)throw new Error(`HTTP error status codes must be between 400 and 599 — ${t} is invalid`);return new zt(t,e)}new TextEncoder;async function Pn({params:t}){const e=ae(ve,"users"),n=be(e,ye("username","==",t.username));if((await we(n)).empty)throw En(404,{message:"Oops! User does not exist."})}const or=Object.freeze(Object.defineProperty({__proto__:null,load:Pn},Symbol.toStringTag,{value:"Module"})),An="C:/Users/Guile/Desktop/veil/src/lib/components/ui/progress/progress.svelte";function mt(t){let e,n;const o={c:function(){e=$("div"),this.h()},l:function(s){e=j(s,"DIV",{class:!0,style:!0}),K(e).forEach(P),this.h()},h:function(){L(e,"class","h-full w-full flex-1 bg-primary transition-all"),L(e,"style",n=`transform: translateX(-${100-100*(t[2]??0)/(t[1]??1)}%)`),F(e,An,19,1,364)},m:function(s,i){M(s,e,i)},p:function(s,i){i&6&&n!==(n=`transform: translateX(-${100-100*(s[2]??0)/(s[1]??1)}%)`)&&L(e,"style",n)},d:function(s){s&&P(e)}};return w("SvelteRegisterBlock",{block:o,id:mt.name,type:"slot",source:'(9:0) <ProgressPrimitive.Root  class={cn(   \\"relative h-2 w-full overflow-hidden rounded-full bg-primary/20\\",   className  )}  {...$$restProps} >',ctx:t}),o}function Ee(t){let e,n;const o=[{class:Re("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",t[0])},t[3]];let r={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let i=0;i<o.length;i+=1)r=G(r,o[i]);e=new Te({props:r,$$inline:!0});const s={c:function(){A(e.$$.fragment)},l:function(c){U(e.$$.fragment,c)},m:function(c,a){S(e,c,a),n=!0},p:function(c,[a]){const l=a&9?rt(o,[a&1&&{class:Re("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",c[0])},a&8&&Gt(c[3])]):{};a&22&&(l.$$scope={dirty:a,ctx:c}),e.$set(l)},i:function(c){n||(_(e.$$.fragment,c),n=!0)},o:function(c){b(e.$$.fragment,c),n=!1},d:function(c){I(e,c)}};return w("SvelteRegisterBlock",{block:s,id:Ee.name,type:"component",source:"",ctx:t}),s}function Un(t,e,n){const o=["class","max","value"];let r=ue(e,o),{$$slots:s={},$$scope:i}=e;De("Progress",s,[]);let{class:c=void 0}=e,{max:a=100}=e,{value:l=void 0}=e;return t.$$set=u=>{e=G(G({},e),ct(u)),n(3,r=ue(e,o)),"class"in u&&n(0,c=u.class),"max"in u&&n(1,a=u.max),"value"in u&&n(2,l=u.value)},t.$capture_state=()=>({ProgressPrimitive:Tn,cn:Re,className:c,max:a,value:l}),t.$inject_state=u=>{"className"in e&&n(0,c=u.className),"max"in e&&n(1,a=u.max),"value"in e&&n(2,l=u.value)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,a,l,r]}class pt extends Oe{constructor(e){super(e),Ne(this,e,Un,Ee,Ce,{class:0,max:1,value:2}),w("SvelteRegisterComponent",{component:this,tagName:"Progress",options:e,id:Ee.name})}get class(){throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set class(e){throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get max(){throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set max(e){throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function ze(t,e,n,o){return new(n||(n=Promise))(function(r,s){function i(l){try{a(o.next(l))}catch(u){s(u)}}function c(l){try{a(o.throw(l))}catch(u){s(u)}}function a(l){var u;l.done?r(l.value):(u=l.value,u instanceof n?u:new n(function(f){f(u)})).then(i,c)}a((o=o.apply(t,e||[])).next())})}class Sn{constructor(){this.listeners={}}on(e,n){return this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(n),()=>this.un(e,n)}once(e,n){const o=this.on(e,n),r=this.on(e,()=>{o(),r()});return o}un(e,n){this.listeners[e]&&(n?this.listeners[e].delete(n):delete this.listeners[e])}unAll(){this.listeners={}}emit(e,...n){this.listeners[e]&&this.listeners[e].forEach(o=>o(...n))}}class In extends Sn{constructor(e){super(),this.subscriptions=[],this.options=e}onInit(){}init(e){this.wavesurfer=e,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(e=>e())}}const Cn=["audio/webm","audio/wav","audio/mpeg","audio/mp4","audio/mp3"];class fe extends In{constructor(e){var n;super(Object.assign(Object.assign({},e),{audioBitsPerSecond:(n=e.audioBitsPerSecond)!==null&&n!==void 0?n:128e3})),this.stream=null,this.mediaRecorder=null}static create(e){return new fe(e||{})}renderMicStream(e){const n=new AudioContext,o=n.createMediaStreamSource(e),r=n.createAnalyser();o.connect(r);const s=r.frequencyBinCount,i=new Float32Array(s),c=s/n.sampleRate;let a;const l=()=>{r.getFloatTimeDomainData(i),this.wavesurfer&&(this.wavesurfer.options.cursorWidth=0,this.wavesurfer.options.interact=!1,this.wavesurfer.load("",[i],c)),a=requestAnimationFrame(l)};return l(),()=>{cancelAnimationFrame(a),o==null||o.disconnect(),n==null||n.close()}}startMic(){return ze(this,void 0,void 0,function*(){let e;try{e=yield navigator.mediaDevices.getUserMedia({audio:!0})}catch(o){throw new Error("Error accessing the microphone: "+o.message)}const n=this.renderMicStream(e);return this.subscriptions.push(this.once("destroy",n)),this.stream=e,e})}stopMic(){this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null)}startRecording(){return ze(this,void 0,void 0,function*(){const e=this.stream||(yield this.startMic()),n=this.mediaRecorder||new MediaRecorder(e,{mimeType:this.options.mimeType||Cn.find(r=>MediaRecorder.isTypeSupported(r)),audioBitsPerSecond:this.options.audioBitsPerSecond});this.mediaRecorder=n,this.stopRecording();const o=[];n.ondataavailable=r=>{r.data.size>0&&o.push(r.data)},n.onstop=()=>{var r;const s=new Blob(o,{type:n.mimeType});this.emit("record-end",s),this.options.renderRecordedAudio!==!1&&((r=this.wavesurfer)===null||r===void 0||r.load(URL.createObjectURL(s)))},n.start(),this.emit("record-start")})}isRecording(){var e;return((e=this.mediaRecorder)===null||e===void 0?void 0:e.state)==="recording"}stopRecording(){var e;this.isRecording()&&((e=this.mediaRecorder)===null||e===void 0||e.stop())}destroy(){super.destroy(),this.stopRecording(),this.stopMic()}}/**
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
 */const gt="firebasestorage.googleapis.com",_t="storageBucket",On=2*60*1e3,Nn=10*60*1e3;/**
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
 */class v extends nn{constructor(e,n,o=0){super(ge(e),`Firebase Storage: ${n} (${ge(e)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,v.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ge(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var y;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(y||(y={}));function ge(t){return"storage/"+t}function Be(){const t="An unknown error occurred, please check the error payload for server response.";return new v(y.UNKNOWN,t)}function Dn(t){return new v(y.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Bn(t){return new v(y.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xn(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new v(y.UNAUTHENTICATED,t)}function Ln(){return new v(y.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Mn(t){return new v(y.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $n(){return new v(y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jn(){return new v(y.CANCELED,"User canceled the upload/download.")}function Fn(t){return new v(y.INVALID_URL,"Invalid URL '"+t+"'.")}function Vn(t){return new v(y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hn(){return new v(y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_t+"' property when initializing the app?")}function qn(){return new v(y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Wn(){return new v(y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zn(t){return new v(y.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pe(t){return new v(y.INVALID_ARGUMENT,t)}function bt(){return new v(y.APP_DELETED,"The Firebase app was deleted.")}function Xn(t){return new v(y.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Z(t,e){return new v(y.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Y(t){throw new v(y.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class D{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let o;try{o=D.makeFromUrl(e,n)}catch{return new D(e,"")}if(o.path==="")return o;throw Vn(e)}static makeFromUrl(e,n){let o=null;const r="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function l(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},h=n===gt?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",C=new RegExp(`^https?://${h}/${r}/${R}`,"i"),N=[{regex:c,indices:a,postModify:s},{regex:m,indices:p,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let k=0;k<N.length;k++){const z=N[k],g=z.regex.exec(e);if(g){const he=g[z.indices.bucket];let Q=g[z.indices.path];Q||(Q=""),o=new D(he,Q),z.postModify(o);break}}if(o==null)throw Fn(e);return o}}class Kn{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Gn(t,e,n){let o=1,r=null,s=null,i=!1,c=0;function a(){return c===2}let l=!1;function u(...R){l||(l=!0,e.apply(null,R))}function f(R){r=setTimeout(()=>{r=null,t(m,a())},R)}function d(){s&&clearTimeout(s)}function m(R,...C){if(l){d();return}if(R){d(),u.call(null,R,...C);return}if(a()||i){d(),u.call(null,R,...C);return}o<64&&(o*=2);let N;c===1?(c=2,N=0):N=(o+Math.random())*1e3,f(N)}let p=!1;function h(R){p||(p=!0,d(),!l&&(r!==null?(R||(c=2),clearTimeout(r),f(0)):R||(c=1)))}return f(0),s=setTimeout(()=>{i=!0,h(!0)},n),h}function Qn(t){t(!1)}/**
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
 */function Yn(t){return t!==void 0}function Zn(t){return typeof t=="object"&&!Array.isArray(t)}function xe(t){return typeof t=="string"||t instanceof String}function Xe(t){return Le()&&t instanceof Blob}function Le(){return typeof Blob<"u"&&!rn()}function Ke(t,e,n,o){if(o<e)throw Pe(`Invalid value for '${t}'. Expected ${e} or greater.`);if(o>n)throw Pe(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Me(t,e,n){let o=e;return n==null&&(o=`https://${e}`),`${n}://${o}/v0${t}`}function yt(t){const e=encodeURIComponent;let n="?";for(const o in t)if(t.hasOwnProperty(o)){const r=e(o)+"="+e(t[o]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var V;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(V||(V={}));/**
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
 */function Jn(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class eo{constructor(e,n,o,r,s,i,c,a,l,u,f,d=!0){this.url_=e,this.method_=n,this.headers_=o,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=f,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,p)=>{this.resolve_=m,this.reject_=p,this.start_()})}start_(){const e=(o,r)=>{if(r){o(!1,new se(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const i=c=>{const a=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,l)};this.progressCallback_!==null&&s.addUploadProgressListener(i),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(i),this.pendingConnection_=null;const c=s.getErrorCode()===V.NO_ERROR,a=s.getStatus();if(!c||Jn(a,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===V.ABORT;o(!1,new se(!1,null,u));return}const l=this.successCodes_.indexOf(a)!==-1;o(!0,new se(l,s))})},n=(o,r)=>{const s=this.resolve_,i=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());Yn(a)?s(a):s()}catch(a){i(a)}else if(c!==null){const a=Be();a.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,a)):i(a)}else if(r.canceled){const a=this.appDelete_?bt():jn();i(a)}else{const a=$n();i(a)}};this.canceled_?n(!1,new se(!1,null,!0)):this.backoffId_=Gn(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qn(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class se{constructor(e,n,o){this.wasSuccessCode=e,this.connection=n,this.canceled=!!o}}function to(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function no(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oo(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ro(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function so(t,e,n,o,r,s,i=!0){const c=yt(t.urlParams),a=t.url+c,l=Object.assign({},t.headers);return oo(l,e),to(l,n),no(l,s),ro(l,o),new eo(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
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
 */function io(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function co(...t){const e=io();if(e!==void 0){const n=new e;for(let o=0;o<t.length;o++)n.append(t[o]);return n.getBlob()}else{if(Le())return new Blob(t);throw new v(y.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ao(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function uo(t){if(typeof atob>"u")throw zn("base-64");return atob(t)}/**
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
 */const B={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _e{constructor(e,n){this.data=e,this.contentType=n||null}}function lo(t,e){switch(t){case B.RAW:return new _e(wt(e));case B.BASE64:case B.BASE64URL:return new _e(vt(t,e));case B.DATA_URL:return new _e(ho(e),mo(e))}throw Be()}function wt(t){const e=[];for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);if(o<=127)e.push(o);else if(o<=2047)e.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=o,i=t.charCodeAt(++n);o=65536|(s&1023)<<10|i&1023,e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?e.push(239,191,189):e.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(e)}function fo(t){let e;try{e=decodeURIComponent(t)}catch{throw Z(B.DATA_URL,"Malformed data URL.")}return wt(e)}function vt(t,e){switch(t){case B.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw Z(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case B.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw Z(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=uo(e)}catch(r){throw r.message.includes("polyfill")?r:Z(t,"Invalid character found")}const o=new Uint8Array(n.length);for(let r=0;r<n.length;r++)o[r]=n.charCodeAt(r);return o}class Rt{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Z(B.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=n[1]||null;o!=null&&(this.base64=po(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=e.substring(e.indexOf(",")+1)}}function ho(t){const e=new Rt(t);return e.base64?vt(B.BASE64,e.rest):fo(e.rest)}function mo(t){return new Rt(t).contentType}function po(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class x{constructor(e,n){let o=0,r="";Xe(e)?(this.data_=e,o=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),o=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),o=e.length),this.size_=o,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Xe(this.data_)){const o=this.data_,r=ao(o,e,n);return r===null?null:new x(r)}else{const o=new Uint8Array(this.data_.buffer,e,n-e);return new x(o,!0)}}static getBlob(...e){if(Le()){const n=e.map(o=>o instanceof x?o.data_:o);return new x(co.apply(null,n))}else{const n=e.map(i=>xe(i)?lo(B.RAW,i).data:i.data_);let o=0;n.forEach(i=>{o+=i.byteLength});const r=new Uint8Array(o);let s=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)r[s++]=i[c]}),new x(r,!0)}}uploadData(){return this.data_}}/**
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
 */function kt(t){let e;try{e=JSON.parse(t)}catch{return null}return Zn(e)?e:null}/**
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
 */function go(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _o(t,e){const n=e.split("/").filter(o=>o.length>0).join("/");return t.length===0?n:t+"/"+n}function Tt(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function bo(t,e){return e}class E{constructor(e,n,o,r){this.server=e,this.local=n||e,this.writable=!!o,this.xform=r||bo}}let ie=null;function yo(t){return!xe(t)||t.length<2?t:Tt(t)}function Et(){if(ie)return ie;const t=[];t.push(new E("bucket")),t.push(new E("generation")),t.push(new E("metageneration")),t.push(new E("name","fullPath",!0));function e(s,i){return yo(i)}const n=new E("name");n.xform=e,t.push(n);function o(s,i){return i!==void 0?Number(i):i}const r=new E("size");return r.xform=o,t.push(r),t.push(new E("timeCreated")),t.push(new E("updated")),t.push(new E("md5Hash",null,!0)),t.push(new E("cacheControl",null,!0)),t.push(new E("contentDisposition",null,!0)),t.push(new E("contentEncoding",null,!0)),t.push(new E("contentLanguage",null,!0)),t.push(new E("contentType",null,!0)),t.push(new E("metadata","customMetadata",!0)),ie=t,ie}function wo(t,e){function n(){const o=t.bucket,r=t.fullPath,s=new D(o,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function vo(t,e,n){const o={};o.type="file";const r=n.length;for(let s=0;s<r;s++){const i=n[s];o[i.local]=i.xform(o,e[i.server])}return wo(o,t),o}function Pt(t,e,n){const o=kt(e);return o===null?null:vo(t,o,n)}function Ro(t,e,n,o){const r=kt(e);if(r===null||!xe(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const i=encodeURIComponent;return s.split(",").map(l=>{const u=t.bucket,f=t.fullPath,d="/b/"+i(u)+"/o/"+i(f),m=Me(d,n,o),p=yt({alt:"media",token:l});return m+p})[0]}function ko(t,e){const n={},o=e.length;for(let r=0;r<o;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class At{constructor(e,n,o,r){this.url=e,this.method=n,this.handler=o,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ut(t){if(!t)throw Be()}function To(t,e){function n(o,r){const s=Pt(t,r,e);return Ut(s!==null),s}return n}function Eo(t,e){function n(o,r){const s=Pt(t,r,e);return Ut(s!==null),Ro(s,r,t.host,t._protocol)}return n}function St(t){function e(n,o){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Ln():r=xn():n.getStatus()===402?r=Bn(t.bucket):n.getStatus()===403?r=Mn(t.path):r=o,r.status=n.getStatus(),r.serverResponse=o.serverResponse,r}return e}function Po(t){const e=St(t);function n(o,r){let s=e(o,r);return o.getStatus()===404&&(s=Dn(t.path)),s.serverResponse=r.serverResponse,s}return n}function Ao(t,e,n){const o=e.fullServerUrl(),r=Me(o,t.host,t._protocol),s="GET",i=t.maxOperationRetryTime,c=new At(r,s,Eo(t,n),i);return c.errorHandler=Po(e),c}function Uo(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function So(t,e,n){const o=Object.assign({},n);return o.fullPath=t.path,o.size=e.size(),o.contentType||(o.contentType=Uo(null,e)),o}function Io(t,e,n,o,r){const s=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let N="";for(let k=0;k<2;k++)N=N+Math.random().toString().slice(2);return N}const a=c();i["Content-Type"]="multipart/related; boundary="+a;const l=So(e,o,r),u=ko(l,n),f="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+a+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+a+"--",m=x.getBlob(f,o,d);if(m===null)throw qn();const p={name:l.fullPath},h=Me(s,t.host,t._protocol),R="POST",C=t.maxUploadRetryTime,O=new At(h,R,To(t,n),C);return O.urlParams=p,O.headers=i,O.body=m.uploadData(),O.errorHandler=St(e),O}class Co{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=V.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=V.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=V.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,o,r){if(this.sent_)throw Y("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Y("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Y("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Y("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Y("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Oo extends Co{initXhr(){this.xhr_.responseType="text"}}function It(){return new Oo}/**
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
 */class q{constructor(e,n){this._service=e,n instanceof D?this._location=n:this._location=D.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new q(e,n)}get root(){const e=new D(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tt(this._location.path)}get storage(){return this._service}get parent(){const e=go(this._location.path);if(e===null)return null;const n=new D(this._location.bucket,e);return new q(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Xn(e)}}function No(t,e,n){t._throwIfRoot("uploadBytes");const o=Io(t.storage,t._location,Et(),new x(e,!0),n);return t.storage.makeRequestWithTokens(o,It).then(r=>({metadata:r,ref:t}))}function Do(t){t._throwIfRoot("getDownloadURL");const e=Ao(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,It).then(n=>{if(n===null)throw Wn();return n})}function Bo(t,e){const n=_o(t._location.path,e),o=new D(t._location.bucket,n);return new q(t.storage,o)}/**
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
 */function xo(t){return/^[A-Za-z]+:\/\//.test(t)}function Lo(t,e){return new q(t,e)}function Ct(t,e){if(t instanceof $e){const n=t;if(n._bucket==null)throw Hn();const o=new q(n,n._bucket);return e!=null?Ct(o,e):o}else return e!==void 0?Bo(t,e):t}function Mo(t,e){if(e&&xo(e)){if(t instanceof $e)return Lo(t,e);throw Pe("To use ref(service, url), the first argument must be a Storage instance.")}else return Ct(t,e)}function Ge(t,e){const n=e==null?void 0:e[_t];return n==null?null:D.makeFromBucketSpec(n,t)}function $o(t,e,n,o={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=o;r&&(t._overrideAuthToken=typeof r=="string"?r:on(r,t.app.options.projectId))}class $e{constructor(e,n,o,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=o,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=gt,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=On,this._maxUploadRetryTime=Nn,this._requests=new Set,r!=null?this._bucket=D.makeFromBucketSpec(r,this._host):this._bucket=Ge(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=D.makeFromBucketSpec(this._url,e):this._bucket=Ge(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ke("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ke("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new q(this,e)}_makeRequest(e,n,o,r,s=!0){if(this._deleted)return new Kn(bt());{const i=so(e,this._appId,o,r,n,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[o,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,o,r).getPromise()}}const Qe="@firebase/storage",Ye="0.11.2";/**
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
 */const Ot="storage";function Ze(t,e,n){return t=de(t),No(t,e,n)}function Je(t){return t=de(t),Do(t)}function et(t,e){return t=de(t),Mo(t,e)}function tt(t=tn(),e){t=de(t);const o=Jt(t,Ot).getImmediate({identifier:e}),r=en("storage");return r&&jo(o,...r),o}function jo(t,e,n,o={}){$o(t,e,n,o)}function Fo(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new $e(n,o,r,e,Zt)}function Vo(){Qt(new Yt(Ot,Fo,"PUBLIC").setMultipleInstances(!0)),je(Qe,Ye,""),je(Qe,Ye,"esm2017")}Vo();let ce;const Ho=new Uint8Array(16);function qo(){if(!ce&&(ce=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ce))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ce(Ho)}const T=[];for(let t=0;t<256;++t)T.push((t+256).toString(16).slice(1));function Wo(t,e=0){return T[t[e+0]]+T[t[e+1]]+T[t[e+2]]+T[t[e+3]]+"-"+T[t[e+4]]+T[t[e+5]]+"-"+T[t[e+6]]+T[t[e+7]]+"-"+T[t[e+8]]+T[t[e+9]]+"-"+T[t[e+10]]+T[t[e+11]]+T[t[e+12]]+T[t[e+13]]+T[t[e+14]]+T[t[e+15]]}const zo=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),nt={randomUUID:zo};function ot(t,e,n){if(nt.randomUUID&&!e&&!t)return nt.randomUUID();t=t||{};const o=t.random||(t.rng||qo)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=o[r];return e}return Wo(o)}const J="C:/Users/Guile/Desktop/veil/src/routes/send-vm/[username]/+page.svelte";function Ae(t){let e,n="Say something.";const o={c:function(){e=$("span"),e.textContent=n,this.h()},l:function(s){e=j(s,"SPAN",{class:!0,"data-svelte-h":!0}),cn(e)!=="svelte-1ts28hw"&&(e.textContent=n),this.h()},h:function(){L(e,"class","h-32 mx-auto text-2xl text-primary align-middle"),F(e,J,112,3,3068)},m:function(s,i){M(s,e,i)},d:function(s){s&&P(e)}};return w("SvelteRegisterBlock",{block:o,id:Ae.name,type:"if",source:"(112:2) {#if duration === 0 && isRecording === false}",ctx:t}),o}function Ue(t){let e,n,o,r,s,i,c,a;n=new H({props:{variant:"outline",class:"border-primary h-auto rounded-full",$$slots:{default:[Nt]},$$scope:{ctx:t}},$$inline:!0}),n.$on("click",t[10]);const l=[Bt,Dt],u=[];function f(m,p){return m[3]?1:0}r=f(t),s=u[r]=l[r](t),c=new H({props:{id:"send-vm-button",variant:"primary",class:"border-primary h-auto rounded-full",$$slots:{default:[Mt]},$$scope:{ctx:t}},$$inline:!0}),c.$on("click",t[11]);const d={c:function(){e=$("div"),A(n.$$.fragment),o=ee(),s.c(),i=ee(),A(c.$$.fragment),this.h()},l:function(p){e=j(p,"DIV",{class:!0});var h=K(e);U(n.$$.fragment,h),o=te(h),s.l(h),i=te(h),U(c.$$.fragment,h),h.forEach(P),this.h()},h:function(){L(e,"class","flex gap-4"),F(e,J,118,3,3268)},m:function(p,h){M(p,e,h),S(n,e,null),X(e,o),u[r].m(e,null),X(e,i),S(c,e,null),a=!0},p:function(p,h){const R={};h&65536&&(R.$$scope={dirty:h,ctx:p}),n.$set(R);let C=r;r=f(p),r===C?u[r].p(p,h):(ne(),b(u[C],1,1,()=>{u[C]=null}),oe(),s=u[r],s?s.p(p,h):(s=u[r]=l[r](p),s.c()),_(s,1),s.m(e,i));const O={};h&65568&&(O.$$scope={dirty:h,ctx:p}),c.$set(O)},i:function(p){a||(_(n.$$.fragment,p),_(s),_(c.$$.fragment,p),a=!0)},o:function(p){b(n.$$.fragment,p),b(s),b(c.$$.fragment,p),a=!1},d:function(p){p&&P(e),I(n),u[r].d(),I(c)}};return w("SvelteRegisterBlock",{block:d,id:Ue.name,type:"if",source:"(118:2) {#if waveSurfer !== undefined && duration > 0}",ctx:t}),d}function Nt(t){let e,n;e=new W({props:{class:"text-5xl text-primary",icon:"iconamoon:trash-fill"},$$inline:!0});const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:re,i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:Nt.name,type:"slot",source:'(120:4) <Button       variant=\\"outline\\"       class=\\"border-primary h-auto rounded-full\\"       on:click={deleteRecording}       >',ctx:t}),o}function Dt(t){let e,n;e=new H({props:{variant:"outline",class:"border-primary h-auto rounded-full",$$slots:{default:[xt]},$$scope:{ctx:t}},$$inline:!0}),e.$on("click",t[9]);const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:function(s,i){const c={};i&65536&&(c.$$scope={dirty:i,ctx:s}),e.$set(c)},i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:Dt.name,type:"else",source:"(134:4) {:else}",ctx:t}),o}function Bt(t){let e,n;e=new H({props:{variant:"outline",class:"border-primary h-auto rounded-full",$$slots:{default:[Lt]},$$scope:{ctx:t}},$$inline:!0}),e.$on("click",t[8]);const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:function(s,i){const c={};i&65536&&(c.$$scope={dirty:i,ctx:s}),e.$set(c)},i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:Bt.name,type:"if",source:"(127:4) {#if !isPlaying}",ctx:t}),o}function xt(t){let e,n;e=new W({props:{class:"text-5xl text-primary",icon:"carbon:pause-filled"},$$inline:!0});const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:re,i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:xt.name,type:"slot",source:'(135:5) <Button        variant=\\"outline\\"        class=\\"border-primary h-auto rounded-full\\"        on:click={pauseRecording}        >',ctx:t}),o}function Lt(t){let e,n;e=new W({props:{class:"text-5xl text-primary",icon:"mingcute:play-fill"},$$inline:!0});const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:re,i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:Lt.name,type:"slot",source:'(128:5) <Button        variant=\\"outline\\"        class=\\"border-primary h-auto rounded-full\\"        on:click={playRecording}        >',ctx:t}),o}function Mt(t){let e,n;e=new W({props:{id:"send-vm-icon",class:"text-5xl text-black",icon:t[5]},$$inline:!0});const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:function(s,i){const c={};i&32&&(c.icon=s[5]),e.$set(c)},i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:Mt.name,type:"slot",source:'(143:4) <Button       id=\\"send-vm-button\\"       variant=\\"primary\\"       class=\\"border-primary h-auto rounded-full\\"       on:click={sendVM}       >',ctx:t}),o}function Se(t){let e,n,o,r;const s=[jt,$t],i=[];function c(l,u){return l[0]?1:0}e=c(t),n=i[e]=s[e](t);const a={c:function(){n.c(),o=le()},l:function(u){n.l(u),o=le()},m:function(u,f){i[e].m(u,f),M(u,o,f),r=!0},p:function(u,f){let d=e;e=c(u),e===d?i[e].p(u,f):(ne(),b(i[d],1,1,()=>{i[d]=null}),oe(),n=i[e],n?n.p(u,f):(n=i[e]=s[e](u),n.c()),_(n,1),n.m(o.parentNode,o))},i:function(u){r||(_(n),r=!0)},o:function(u){b(n),r=!1},d:function(u){u&&P(o),i[e].d(u)}};return w("SvelteRegisterBlock",{block:a,id:Se.name,type:"if",source:"(153:2) {#if duration === 0}",ctx:t}),a}function $t(t){let e,n,o,r;e=new pt({props:{class:"w-5/6 mb-2",value:t[4]},$$inline:!0}),o=new H({props:{variant:"outline",class:"border-primary h-auto  w-20 rounded-full",$$slots:{default:[Ft]},$$scope:{ctx:t}},$$inline:!0}),o.$on("click",t[7]);const s={c:function(){A(e.$$.fragment),n=ee(),A(o.$$.fragment)},l:function(c){U(e.$$.fragment,c),n=te(c),U(o.$$.fragment,c)},m:function(c,a){S(e,c,a),M(c,n,a),S(o,c,a),r=!0},p:function(c,a){const l={};a&16&&(l.value=c[4]),e.$set(l);const u={};a&65536&&(u.$$scope={dirty:a,ctx:c}),o.$set(u)},i:function(c){r||(_(e.$$.fragment,c),_(o.$$.fragment,c),r=!0)},o:function(c){b(e.$$.fragment,c),b(o.$$.fragment,c),r=!1},d:function(c){c&&P(n),I(e,c),I(o,c)}};return w("SvelteRegisterBlock",{block:s,id:$t.name,type:"else",source:"(160:3) {:else}",ctx:t}),s}function jt(t){let e,n;e=new H({props:{variant:"outline",class:"border-primary h-auto w-20  rounded-full",$$slots:{default:[Vt]},$$scope:{ctx:t}},$$inline:!0}),e.$on("click",t[6]);const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:function(s,i){const c={};i&65536&&(c.$$scope={dirty:i,ctx:s}),e.$set(c)},i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:jt.name,type:"if",source:"(154:3) {#if !isRecording}",ctx:t}),o}function Ft(t){let e,n;e=new W({props:{class:"text-5xl text-primary",icon:"ion:stop"},$$inline:!0});const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:re,i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:Ft.name,type:"slot",source:'(162:4) <Button       variant=\\"outline\\"       class=\\"border-primary h-auto  w-20 rounded-full\\"       on:click={stopRecording}>',ctx:t}),o}function Vt(t){let e,n;e=new W({props:{class:"text-5xl text-primary",icon:"et:mic"},$$inline:!0});const o={c:function(){A(e.$$.fragment)},l:function(s){U(e.$$.fragment,s)},m:function(s,i){S(e,s,i),n=!0},p:re,i:function(s){n||(_(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){I(e,s)}};return w("SvelteRegisterBlock",{block:o,id:Vt.name,type:"slot",source:'(155:4) <Button       variant=\\"outline\\"       class=\\"border-primary h-auto w-20  rounded-full\\"       on:click={startRecording}>',ctx:t}),o}function Ie(t){let e,n,o,r,s,i,c=t[2]===0&&t[0]===!1&&Ae(t),a=t[1]!==void 0&&t[2]>0&&Ue(t),l=t[2]===0&&Se(t);const u={c:function(){e=$("main"),n=$("div"),c&&c.c(),o=ee(),r=$("div"),a&&a.c(),s=ee(),l&&l.c(),this.h()},l:function(d){e=j(d,"MAIN",{});var m=K(e);n=j(m,"DIV",{id:!0,class:!0});var p=K(n);c&&c.l(p),p.forEach(P),o=te(m),r=j(m,"DIV",{class:!0});var h=K(r);a&&a.l(h),s=te(h),l&&l.l(h),h.forEach(P),m.forEach(P),this.h()},h:function(){L(n,"id","waveform"),L(n,"class","grid h-auto p-2 m-5 rounded-sm border-2 border-primary-500"),F(n,J,110,1,2928),L(r,"class","grid justify-items-center"),F(r,J,116,1,3174),F(e,J,109,0,2919)},m:function(d,m){M(d,e,m),X(e,n),c&&c.m(n,null),X(e,o),X(e,r),a&&a.m(r,null),X(r,s),l&&l.m(r,null),i=!0},p:function(d,[m]){d[2]===0&&d[0]===!1?c||(c=Ae(d),c.c(),c.m(n,null)):c&&(c.d(1),c=null),d[1]!==void 0&&d[2]>0?a?(a.p(d,m),m&6&&_(a,1)):(a=Ue(d),a.c(),_(a,1),a.m(r,s)):a&&(ne(),b(a,1,1,()=>{a=null}),oe()),d[2]===0?l?(l.p(d,m),m&4&&_(l,1)):(l=Se(d),l.c(),_(l,1),l.m(r,null)):l&&(ne(),b(l,1,1,()=>{l=null}),oe())},i:function(d){i||(_(a),_(l),i=!0)},o:function(d){b(a),b(l),i=!1},d:function(d){d&&P(e),c&&c.d(),a&&a.d(),l&&l.d()}};return w("SvelteRegisterBlock",{block:u,id:Ie.name,type:"component",source:"",ctx:t}),u}function Xo(t,e,n){let o;st(pe,"page"),it(t,pe,g=>n(15,o=g));let{$$slots:r={},$$scope:s}=e;De("Page",r,[]);let i=!1,c,a,l=0,u=!1,f,d,m=0,p="mingcute:send-fill";async function h(){n(1,c=me.create({container:"#waveform",waveColor:"rgb(225 29 72)",progressColor:"purple"})),a=c.registerPlugin(fe.create()),a.on("record-end",g=>{c.destroy(),n(1,c=me.create({container:"#waveform",waveColor:"rgb(225 29 72)",progressColor:"rgb(216 91 118)",url:URL.createObjectURL(g)})),f=g}),n(0,i=!0),a.startMic(),a.startRecording(),d=setInterval(()=>{n(4,m+=1),m>=100&&R()},100)}function R(){a.isRecording()&&(a.stopRecording(),a.stopMic(),n(2,l=c.getDuration())),n(0,i=!1),clearInterval(d),n(4,m=0)}function C(){c.play(),n(3,u=!0)}function O(){c.pause(),n(3,u=!1)}function N(){c.destroy(),c.empty(),n(2,l=0),n(3,u=!1)}async function k(){const g=tt(),he=et(g,`${o.params.username}-${ot()}`);document.getElementById("send-vm-button").setAttribute("disabled",!0),n(5,p="eos-icons:three-dots-loading"),Ze(he,f).then(Q=>{document.getElementById("send-vm-button").setAttribute("disabled",!1),n(5,p="mingcute:send-fill"),Je(Q.ref).then(async Ht=>{const qt=be(ae(ve,"users"),ye("username","==",o.params.username));(await we(qt)).forEach(async Wt=>{await Fe(ae(Wt.ref,"messages"),{vmURL:Ht})})})})}const z=[];return Object.keys(e).forEach(g=>{!~z.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&console.warn(`<Page> was created with unknown prop '${g}'`)}),t.$capture_state=()=>({Button:H,Progress:pt,Icon:W,WaveSurfer:me,RecordPlugin:fe,page:pe,db:ve,addDoc:Fe,collection:ae,getDocs:we,query:be,where:ye,getDownloadURL:Je,getStorage:tt,ref:et,uploadBytes:Ze,uuidv4:ot,isRecording:i,waveSurfer:c,record:a,duration:l,isPlaying:u,audioBlob:f,timer:d,recordLimit:m,sendButtonIcon:p,startRecording:h,stopRecording:R,playRecording:C,pauseRecording:O,deleteRecording:N,sendVM:k,$page:o}),t.$inject_state=g=>{"isRecording"in g&&n(0,i=g.isRecording),"waveSurfer"in g&&n(1,c=g.waveSurfer),"record"in g&&(a=g.record),"duration"in g&&n(2,l=g.duration),"isPlaying"in g&&n(3,u=g.isPlaying),"audioBlob"in g&&(f=g.audioBlob),"timer"in g&&(d=g.timer),"recordLimit"in g&&n(4,m=g.recordLimit),"sendButtonIcon"in g&&n(5,p=g.sendButtonIcon)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[i,c,l,u,m,p,h,R,C,O,N,k]}class rr extends Oe{constructor(e){super(e),Ne(this,e,Xo,Ie,Ce,{}),w("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Ie.name})}}export{rr as component,or as universal};
