import{s as r,n as f,u as p,p as _,q as m}from"../chunks/scheduler.d05b783f.js";import{S as d,i as $,d as c,v as g,b as v,t as h}from"../chunks/index.cc061d23.js";function u(s){let n;const a=s[1].default,e=f(a,s,s[0],null),i={c:function(){e&&e.c()},l:function(t){e&&e.l(t)},m:function(t,l){e&&e.m(t,l),n=!0},p:function(t,[l]){e&&e.p&&(!n||l&1)&&p(e,a,t,t[0],n?m(a,t[0],l,null):_(t[0]),null)},i:function(t){n||(v(e,t),n=!0)},o:function(t){h(e,t),n=!1},d:function(t){e&&e.d(t)}};return c("SvelteRegisterBlock",{block:i,id:u.name,type:"component",source:"",ctx:s}),i}function b(s,n,a){let{$$slots:e={},$$scope:i}=n;g("Layout",e,["default"]);const o=[];return Object.keys(n).forEach(t=>{!~o.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Layout> was created with unknown prop '${t}'`)}),s.$$set=t=>{"$$scope"in t&&a(0,i=t.$$scope)},[i,e]}class L extends d{constructor(n){super(n),$(this,n,b,u,r,{}),c("SvelteRegisterComponent",{component:this,tagName:"Layout",options:n,id:u.name})}}export{L as component};
