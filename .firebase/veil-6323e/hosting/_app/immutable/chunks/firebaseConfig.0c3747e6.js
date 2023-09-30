import{y as rl,s as wi,B as Qr,C as Ot,D as il,e as on,J as Ae,n as ho,g as sl,h as ol,i as al,E as Yr,k as cl,u as fo,p as po,q as mo,H as ll,F as $d,T as Wd}from"./scheduler.d05b783f.js";import{S as ul,i as hl,d as nt,v as dl,a as or,h as Hd,t as yt,c as Kd,b as vt,e as Mt,o as Xr,p as Jr,q as Pe,j as Qd,k as Yd,m as Xd,l as Jd}from"./index.cc061d23.js";import{a as fl}from"./index.60452c41.js";function go(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Zd(t){return typeof t=="object"&&t!==null?t:{}}var ka=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Ie=t=>!t||typeof t!="object"||Object.keys(t).length===0,ef=(t,e)=>JSON.stringify(t)===JSON.stringify(e);function pl(t,e){t.forEach(function(n){Array.isArray(n)?pl(n,e):e.push(n)})}function ml(t){let e=[];return pl(t,e),e}var tf=(...t)=>ml(t).filter(Boolean),gl=(t,e)=>{let n={},r=Object.keys(t),i=Object.keys(e);for(let s of r)if(i.includes(s)){let o=t[s],a=e[s];typeof o=="object"&&typeof a=="object"?n[s]=gl(o,a):n[s]=a+" "+o}else n[s]=t[s];for(let s of i)r.includes(s)||(n[s]=e[s]);return n},Va=t=>!t||typeof t!="string"?t:t.replace(/\s+/g," ").trim();function nf(){for(var t=0,e,n,r="";t<arguments.length;)(e=arguments[t++])&&(n=_l(e))&&(r&&(r+=" "),r+=n);return r}function _l(t){if(typeof t=="string")return t;for(var e,n="",r=0;r<t.length;r++)t[r]&&(e=_l(t[r]))&&(n&&(n+=" "),n+=e);return n}var _o="-";function rf(t){var e=of(t),n=t.conflictingClassGroups,r=t.conflictingClassGroupModifiers,i=r===void 0?{}:r;function s(a){var c=a.split(_o);return c[0]===""&&c.length!==1&&c.shift(),yl(c,e)||sf(a)}function o(a,c){var l=n[a]||[];return c&&i[a]?[].concat(l,i[a]):l}return{getClassGroupId:s,getConflictingClassGroupIds:o}}function yl(t,e){var o;if(t.length===0)return e.classGroupId;var n=t[0],r=e.nextPart.get(n),i=r?yl(t.slice(1),r):void 0;if(i)return i;if(e.validators.length!==0){var s=t.join(_o);return(o=e.validators.find(function(a){var c=a.validator;return c(s)}))==null?void 0:o.classGroupId}}var Da=/^\[(.+)\]$/;function sf(t){if(Da.test(t)){var e=Da.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function of(t){var e=t.theme,n=t.prefix,r={nextPart:new Map,validators:[]},i=cf(Object.entries(t.classGroups),n);return i.forEach(function(s){var o=s[0],a=s[1];ws(a,r,o,e)}),r}function ws(t,e,n,r){t.forEach(function(i){if(typeof i=="string"){var s=i===""?e:Na(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(af(i)){ws(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(function(o){var a=o[0],c=o[1];ws(c,Na(e,a),n,r)})})}function Na(t,e){var n=t;return e.split(_o).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function af(t){return t.isThemeGetter}function cf(t,e){return e?t.map(function(n){var r=n[0],i=n[1],s=i.map(function(o){return typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(function(a){var c=a[0],l=a[1];return[e+c,l]})):o});return[r,s]}):t}function lf(t){if(t<1)return{get:function(){},set:function(){}};var e=0,n=new Map,r=new Map;function i(s,o){n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)}return{get:function(o){var a=n.get(o);if(a!==void 0)return a;if((a=r.get(o))!==void 0)return i(o,a),a},set:function(o,a){n.has(o)?n.set(o,a):i(o,a)}}}var vl="!";function uf(t){var e=t.separator||":",n=e.length===1,r=e[0],i=e.length;return function(o){for(var a=[],c=0,l=0,u,h=0;h<o.length;h++){var d=o[h];if(c===0){if(d===r&&(n||o.slice(h,h+i)===e)){a.push(o.slice(l,h)),l=h+i;continue}if(d==="/"){u=h;continue}}d==="["?c++:d==="]"&&c--}var f=a.length===0?o:o.substring(l),g=f.startsWith(vl),I=g?f.substring(1):f,_=u&&u>l?u-l:void 0;return{modifiers:a,hasImportantModifier:g,baseClassName:I,maybePostfixModifierPosition:_}}}function hf(t){if(t.length<=1)return t;var e=[],n=[];return t.forEach(function(r){var i=r[0]==="[";i?(e.push.apply(e,n.sort().concat([r])),n=[]):n.push(r)}),e.push.apply(e,n.sort()),e}function df(t){return{cache:lf(t.cacheSize),splitModifiers:uf(t),...rf(t)}}var ff=/\s+/;function pf(t,e){var n=e.splitModifiers,r=e.getClassGroupId,i=e.getConflictingClassGroupIds,s=new Set;return t.trim().split(ff).map(function(o){var a=n(o),c=a.modifiers,l=a.hasImportantModifier,u=a.baseClassName,h=a.maybePostfixModifierPosition,d=r(h?u.substring(0,h):u),f=!!h;if(!d){if(!h)return{isTailwindClass:!1,originalClassName:o};if(d=r(u),!d)return{isTailwindClass:!1,originalClassName:o};f=!1}var g=hf(c).join(":"),I=l?g+vl:g;return{isTailwindClass:!0,modifierId:I,classGroupId:d,originalClassName:o,hasPostfixModifier:f}}).reverse().filter(function(o){if(!o.isTailwindClass)return!0;var a=o.modifierId,c=o.classGroupId,l=o.hasPostfixModifier,u=a+c;return s.has(u)?!1:(s.add(u),i(c,l).forEach(function(h){return s.add(a+h)}),!0)}).reverse().map(function(o){return o.originalClassName}).join(" ")}function Ts(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r,i,s,o=a;function a(l){var u=e[0],h=e.slice(1),d=h.reduce(function(f,g){return g(f)},u());return r=df(d),i=r.cache.get,s=r.cache.set,o=c,c(l)}function c(l){var u=i(l);if(u)return u;var h=pf(l,r);return s(l,h),h}return function(){return o(nf.apply(null,arguments))}}function G(t){var e=function(r){return r[t]||[]};return e.isThemeGetter=!0,e}var El=/^\[(?:([a-z-]+):)?(.+)\]$/i,mf=/^\d+\/\d+$/,gf=new Set(["px","full","screen"]),_f=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vf=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function Ne(t){return Pt(t)||gf.has(t)||mf.test(t)||As(t)}function As(t){return zt(t,"length",bf)}function Ef(t){return zt(t,"size",Il)}function If(t){return zt(t,"position",Il)}function wf(t){return zt(t,"url",Rf)}function Cr(t){return zt(t,"number",Pt)}function Pt(t){return!Number.isNaN(Number(t))}function Tf(t){return t.endsWith("%")&&Pt(t.slice(0,-1))}function bn(t){return Oa(t)||zt(t,"number",Oa)}function N(t){return El.test(t)}function Rn(){return!0}function at(t){return _f.test(t)}function Af(t){return zt(t,"",Pf)}function zt(t,e,n){var r=El.exec(t);return r?r[1]?r[1]===e:n(r[2]):!1}function bf(t){return yf.test(t)}function Il(){return!1}function Rf(t){return t.startsWith("url(")}function Oa(t){return Number.isInteger(Number(t))}function Pf(t){return vf.test(t)}function bs(){var t=G("colors"),e=G("spacing"),n=G("blur"),r=G("brightness"),i=G("borderColor"),s=G("borderRadius"),o=G("borderSpacing"),a=G("borderWidth"),c=G("contrast"),l=G("grayscale"),u=G("hueRotate"),h=G("invert"),d=G("gap"),f=G("gradientColorStops"),g=G("gradientColorStopPositions"),I=G("inset"),_=G("margin"),V=G("opacity"),x=G("padding"),K=G("saturate"),X=G("scale"),he=G("sepia"),A=G("skew"),Ve=G("space"),it=G("translate"),De=function(){return["auto","contain","none"]},xe=function(){return["auto","hidden","clip","visible","scroll"]},k=function(){return["auto",N,e]},w=function(){return[N,e]},D=function(){return["",Ne]},F=function(){return["auto",Pt,N]},U=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},j=function(){return["solid","dashed","dotted","double","none"]},z=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},J=function(){return["start","end","center","between","around","evenly","stretch"]},Z=function(){return["","0",N]},st=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},Te=function(){return[Pt,Cr]},ot=function(){return[Pt,N]};return{cacheSize:500,theme:{colors:[Rn],spacing:[Ne],blur:["none","",at,N],brightness:Te(),borderColor:[t],borderRadius:["none","","full",at,N],borderSpacing:w(),borderWidth:D(),contrast:Te(),grayscale:Z(),hueRotate:ot(),invert:Z(),gap:w(),gradientColorStops:[t],gradientColorStopPositions:[Tf,As],inset:k(),margin:k(),opacity:Te(),padding:w(),saturate:Te(),scale:Te(),sepia:Z(),skew:ot(),space:w(),translate:w()},classGroups:{aspect:[{aspect:["auto","square","video",N]}],container:["container"],columns:[{columns:[at]}],"break-after":[{"break-after":st()}],"break-before":[{"break-before":st()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(U(),[N])}],overflow:[{overflow:xe()}],"overflow-x":[{"overflow-x":xe()}],"overflow-y":[{"overflow-y":xe()}],overscroll:[{overscroll:De()}],"overscroll-x":[{"overscroll-x":De()}],"overscroll-y":[{"overscroll-y":De()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[I]}],"inset-x":[{"inset-x":[I]}],"inset-y":[{"inset-y":[I]}],start:[{start:[I]}],end:[{end:[I]}],top:[{top:[I]}],right:[{right:[I]}],bottom:[{bottom:[I]}],left:[{left:[I]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",bn]}],basis:[{basis:k()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",N]}],grow:[{grow:Z()}],shrink:[{shrink:Z()}],order:[{order:["first","last","none",bn]}],"grid-cols":[{"grid-cols":[Rn]}],"col-start-end":[{col:["auto",{span:["full",bn]},N]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[Rn]}],"row-start-end":[{row:["auto",{span:[bn]},N]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",N]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",N]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal"].concat(J())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(J(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(J(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[_]}],mx:[{mx:[_]}],my:[{my:[_]}],ms:[{ms:[_]}],me:[{me:[_]}],mt:[{mt:[_]}],mr:[{mr:[_]}],mb:[{mb:[_]}],ml:[{ml:[_]}],"space-x":[{"space-x":[Ve]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Ve]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",N,e]}],"min-w":[{"min-w":["min","max","fit",N,Ne]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[at]},at,N]}],h:[{h:[N,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",N,Ne]}],"max-h":[{"max-h":[N,e,"min","max","fit"]}],"font-size":[{text:["base",at,As]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Cr]}],"font-family":[{font:[Rn]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",N]}],"line-clamp":[{"line-clamp":["none",Pt,Cr]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",N,Ne]}],"list-image":[{"list-image":["none",N]}],"list-style-type":[{list:["none","disc","decimal",N]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[V]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[V]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(j(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",Ne]}],"underline-offset":[{"underline-offset":["auto",N,Ne]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",N]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",N]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[V]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(U(),[If])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ef]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},wf]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[V]}],"border-style":[{border:[].concat(j(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[V]}],"divide-style":[{divide:j()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(j())}],"outline-offset":[{"outline-offset":[N,Ne]}],"outline-w":[{outline:[Ne]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[V]}],"ring-offset-w":[{"ring-offset":[Ne]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",at,Af]}],"shadow-color":[{shadow:[Rn]}],opacity:[{opacity:[V]}],"mix-blend":[{"mix-blend":z()}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",at,N]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[K]}],sepia:[{sepia:[he]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[V]}],"backdrop-saturate":[{"backdrop-saturate":[K]}],"backdrop-sepia":[{"backdrop-sepia":[he]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",N]}],duration:[{duration:ot()}],ease:[{ease:["linear","in","out","in-out",N]}],delay:[{delay:ot()}],animate:[{animate:["none","spin","ping","pulse","bounce",N]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[X]}],"scale-x":[{"scale-x":[X]}],"scale-y":[{"scale-y":[X]}],rotate:[{rotate:[bn,N]}],"translate-x":[{"translate-x":[it]}],"translate-y":[{"translate-y":[it]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",N]}],accent:[{accent:["auto",t]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",N]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",N]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ne,Cr]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function Sf(t,e){for(var n in e)wl(t,n,e[n]);return t}var Cf=Object.prototype.hasOwnProperty,kf=new Set(["string","number","boolean"]);function wl(t,e,n){if(!Cf.call(t,e)||kf.has(typeof n)||n===null){t[e]=n;return}if(Array.isArray(n)&&Array.isArray(t[e])){t[e]=t[e].concat(n);return}if(typeof n=="object"&&typeof t[e]=="object"){if(t[e]===null){t[e]=n;return}for(var r in n)wl(t[e],r,n[r])}}function Vf(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return typeof t=="function"?Ts.apply(void 0,[bs,t].concat(n)):Ts.apply(void 0,[function(){return Sf(bs(),t)}].concat(n))}var Tl=Ts(bs),Df={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Al=t=>t||void 0,Zr=(...t)=>Al(ml(t).filter(Boolean).join(" ")),ns=null,ei={},Rs=!1,Pn=(...t)=>e=>e.twMerge?((!ns||Rs)&&(Rs=!1,ns=Ie(ei)?Tl:Vf(ei)),Al(ns(Zr(t)))):Zr(t),Ma=(t,e)=>{for(let n in e)t.hasOwnProperty(n)?t[n]=Zr(t[n],e[n]):t[n]=e[n];return t},Nf=(t,e)=>{let{extend:n=null,slots:r={},variants:i={},compoundVariants:s=[],compoundSlots:o=[],defaultVariants:a={}}=t,c={...Df,...e},l=n!=null&&n.base?Zr(n.base,t==null?void 0:t.base):t==null?void 0:t.base,u=n!=null&&n.variants&&!Ie(n.variants)?gl(i,n.variants):i,h=n!=null&&n.defaultVariants&&!Ie(n.defaultVariants)?{...n.defaultVariants,...a}:a;!Ie(c.twMergeConfig)&&!ef(c.twMergeConfig,ei)&&(Rs=!0,ei=c.twMergeConfig);let d=Ie(r)?{}:{base:t==null?void 0:t.base,...r},f=Ie(n==null?void 0:n.slots)?d:Ma(n==null?void 0:n.slots,Ie(d)?{base:t==null?void 0:t.base}:d),g=_=>{if(Ie(u)&&Ie(r)&&Ie(n==null?void 0:n.slots))return Pn(l,_==null?void 0:_.class,_==null?void 0:_.className)(c);if(s&&!Array.isArray(s))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof s}`);if(o&&!Array.isArray(o))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof o}`);let V=(k,w,D=[],F)=>{let U=D;if(typeof w=="string")U=U.concat(Va(w).split(" ").map(j=>`${k}:${j}`));else if(Array.isArray(w))U=U.concat(w.reduce((j,z)=>j.concat(`${k}:${z}`),[]));else if(typeof w=="object"&&typeof F=="string"){for(let j in w)if(w.hasOwnProperty(j)&&j===F){let z=w[j];if(z&&typeof z=="string"){let J=Va(z);U[F]?U[F]=U[F].concat(J.split(" ").map(Z=>`${k}:${Z}`)):U[F]=J.split(" ").map(Z=>`${k}:${Z}`)}else Array.isArray(z)&&z.length>0&&(U[F]=z.reduce((J,Z)=>J.concat(`${k}:${Z}`),[]))}}return U},x=(k,w=u,D=null,F=null)=>{var U;let j=w[k];if(!j||Ie(j))return null;let z=(U=F==null?void 0:F[k])!=null?U:_==null?void 0:_[k];if(z===null)return null;let J=ka(z),Z=Array.isArray(c.responsiveVariants)&&c.responsiveVariants.length>0||c.responsiveVariants===!0,st=h==null?void 0:h[k],Te=[];if(typeof J=="object"&&Z)for(let[ae,Ca]of Object.entries(J)){let Gd=j[Ca];if(ae==="initial"){st=Ca;continue}Array.isArray(c.responsiveVariants)&&!c.responsiveVariants.includes(ae)||(Te=V(ae,Gd,Te,D))}let ot=j[J]||j[ka(st)];return typeof Te=="object"&&typeof D=="string"&&Te[D]?Ma(Te,ot):Te.length>0?(Te.push(ot),Te):ot},K=()=>u?Object.keys(u).map(k=>x(k,u)):null,X=(k,w)=>{if(!u||typeof u!="object")return null;let D=new Array;for(let F in u){let U=x(F,u,k,w),j=k==="base"&&typeof U=="string"?U:U&&U[k];j&&(D[D.length]=j)}return D},he={};for(let k in _)_[k]!==void 0&&(he[k]=_[k]);let A=(k,w)=>{var D;let F=typeof(_==null?void 0:_[k])=="object"?{[k]:(D=_[k])==null?void 0:D.initial}:{};return{...h,...he,...F,...w}},Ve=(k=[],w)=>{let D=[];for(let{class:F,className:U,...j}of k){let z=!0;for(let[J,Z]of Object.entries(j)){let st=A(J,w);if(Array.isArray(Z)){if(!Z.includes(st[J])){z=!1;break}}else if(st[J]!==Z){z=!1;break}}z&&(F&&D.push(F),U&&D.push(U))}return D},it=k=>{let w=Ve(s,k),D=Ve(n==null?void 0:n.compoundVariants,k);return tf(D,w)},De=k=>{let w=it(k);if(!Array.isArray(w))return w;let D={};for(let F of w)if(typeof F=="string"&&(D.base=Pn(D.base,F)(c)),typeof F=="object")for(let[U,j]of Object.entries(F))D[U]=Pn(D[U],j)(c);return D},xe=k=>{if(o.length<1)return null;let w={};for(let{slots:D=[],class:F,className:U,...j}of o){if(!Ie(j)){let z=!0;for(let J of Object.keys(j)){let Z=A(J,k)[J];if(Z===void 0||Z!==j[J]){z=!1;break}}if(!z)continue}for(let z of D)w[z]=w[z]||[],w[z].push([F,U])}return w};if(!Ie(r)||!Ie(n==null?void 0:n.slots)){let k={};if(typeof f=="object"&&!Ie(f))for(let w of Object.keys(f))k[w]=D=>{var F,U;return Pn(f[w],X(w,D),((F=De(D))!=null?F:[])[w],((U=xe(D))!=null?U:[])[w],D==null?void 0:D.class,D==null?void 0:D.className)(c)};return k}return Pn(l,K(),it(),_==null?void 0:_.class,_==null?void 0:_.className)(c)},I=()=>{if(!(!u||typeof u!="object"))return Object.keys(u)};return g.variantKeys=I(),g.extend=n,g.base=l,g.slots=f,g.variants=u,g.defaultVariants=h,g.compoundSlots=o,g.compoundVariants=s,g};const kI=typeof document<"u",bl=t=>typeof t=="function";function Rl(t){return t instanceof HTMLElement}function VI(...t){return(...e)=>{for(const n of t)typeof n=="function"&&n(...e)}}function DI(){}function Pl(t,e,n,r){const i=Array.isArray(e)?e:[e];return i.forEach(s=>t.addEventListener(s,n,r)),()=>{i.forEach(s=>t.removeEventListener(s,n,r))}}function NI(t,e,n,r){const i=Array.isArray(e)?e:[e];if(typeof n=="function"){const s=Mf(o=>n(o));return i.forEach(o=>t.addEventListener(o,s,r)),()=>{i.forEach(o=>t.removeEventListener(o,s,r))}}return()=>void 0}function Of(t){const e=t.currentTarget;if(!Rl(e))return null;const n=new CustomEvent(`m-${t.type}`,{detail:{originalEvent:t},cancelable:!0});return e.dispatchEvent(n),n}function Mf(t){return e=>{const n=Of(e);if(!(n!=null&&n.defaultPrevented))return t(e)}}const Lf={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control"},xf=fl(void 0,t=>{function e(r){t(r),t(void 0)}return Pl(document,"pointerdown",e,{passive:!1,capture:!0})}),OI=(t,e={})=>{let n={enabled:!0,...e};function r(){return typeof n.enabled=="boolean"?n.enabled:rl(n.enabled)}const i=xf.subscribe(s=>{var a;if(!r()||!s||s.target===t)return;const o=s.composedPath();if(!o.includes(t)){if(n.ignore){if(bl(n.ignore)){if(n.ignore(s))return}else if(Array.isArray(n.ignore)&&n.ignore.length>0&&n.ignore.some(c=>c&&(s.target===c||o.includes(c))))return}(a=n.handler)==null||a.call(n,s)}});return{update(s){n={...n,...s}},destroy(){i()}}},Ff=fl(void 0,t=>{function e(r){r&&r.key===Lf.ESCAPE&&t(r),t(void 0)}return Pl(document,"keydown",e,{passive:!1,capture:!0})}),MI=(t,e={})=>{t.dataset.escapee="";let n={enabled:!0,...e};function r(){return typeof n.enabled=="boolean"?n.enabled:rl(n.enabled)}const i=Ff.subscribe(s=>{var a;if(!s||!r())return;const o=s.target;if(!(!Rl(o)||o.closest("[data-escapee]")!==t)){if(n.ignore){if(bl(n.ignore)){if(n.ignore(s))return}else if(Array.isArray(n.ignore)&&n.ignore.length>0&&n.ignore.some(c=>c&&o===c))return}(a=n.handler)==null||a.call(n,s)}});return{update(s){n={...n,...s}},destroy(){t.removeAttribute("data-escapee"),i()}}},Uf=typeof document<"u";function LI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=r)}return e}function xI(t){return function(e,n){if(n===void 0)return;t[e].set(n)}}function Sl(t,e){const n=[];return e.builders.forEach(r=>{const i=r.action(t);i&&n.push(i)}),{destroy:()=>{n.forEach(r=>{r.destroy&&r.destroy()})}}}function Ps(t){const e={};return t.forEach(n=>{Object.keys(n).forEach(r=>{r!=="action"&&(e[r]=n[r])})}),e}function FI(t,e){if(!Uf)return;const{transition:n,transitionConfig:r,inTransition:i,inTransitionConfig:s,outTransition:o,outTransitionConfig:a}=e;if(n){if(r){const{delay:f,duration:g}=n(document.body,r),I=Ht(f,g);t.set({in:I,out:I});return}const{delay:u,duration:h}=n(document.body),d=Ht(u,h);t.set({in:d,out:d});return}let c=0,l=0;if(i)if(s){const{delay:u,duration:h}=i(document.body,s);c=Ht(u,h)}else{const{delay:u,duration:h}=i(document.body);c=Ht(u,h)}if(o)if(a){const{delay:u,duration:h}=o(document.body,a);l=Ht(u,h)}else{const{delay:u,duration:h}=o(document.body);l=Ht(u,h)}t.set({in:c,out:l})}function Ht(t,e){return(t??0)+(e??0)}const Cl="C:/Users/Guile/Desktop/veil/node_modules/bits-ui/dist/bits/button/components/Button.svelte";function kl(t){let e=t[0]?"a":"button",n,r;Xr(t[0]?"a":"button"),Jr(t[0]?"a":"button");let i=(t[0]?"a":"button")&&Ur(t);const s={c:function(){i&&i.c(),n=on()},l:function(a){i&&i.l(a),n=on()},m:function(a,c){i&&i.m(a,c),or(a,n,c),r=!0},p:function(a,c){a[0],e?wi(e,a[0]?"a":"button")?(i.d(1),Xr(a[0]?"a":"button"),Jr(a[0]?"a":"button"),i=Ur(a),e=a[0]?"a":"button",i.c(),i.m(n.parentNode,n)):i.p(a,c):(i=Ur(a),e=a[0]?"a":"button",i.c(),i.m(n.parentNode,n))},i:function(a){r||(vt(i,a),r=!0)},o:function(a){yt(i,a),r=!1},d:function(a){a&&Mt(n),i&&i.d(a)}};return nt("SvelteRegisterBlock",{block:s,id:kl.name,type:"else",source:"(26:0) {:else}",ctx:t}),s}function Vl(t){let e=t[0]?"a":"button",n,r;Xr(t[0]?"a":"button"),Jr(t[0]?"a":"button");let i=(t[0]?"a":"button")&&Br(t);const s={c:function(){i&&i.c(),n=on()},l:function(a){i&&i.l(a),n=on()},m:function(a,c){i&&i.m(a,c),or(a,n,c),r=!0},p:function(a,c){a[0],e?wi(e,a[0]?"a":"button")?(i.d(1),Xr(a[0]?"a":"button"),Jr(a[0]?"a":"button"),i=Br(a),e=a[0]?"a":"button",i.c(),i.m(n.parentNode,n)):i.p(a,c):(i=Br(a),e=a[0]?"a":"button",i.c(),i.m(n.parentNode,n))},i:function(a){r||(vt(i,a),r=!0)},o:function(a){yt(i,a),r=!1},d:function(a){a&&Mt(n),i&&i.d(a)}};return nt("SvelteRegisterBlock",{block:s,id:Vl.name,type:"if",source:"(7:0) {#if builders && builders.length}",ctx:t}),s}function Ur(t){let e,n,r,i,s;const o=t[5].default,a=ho(o,t,t[4],null);let c=[{type:n=t[0]?void 0:t[1]},{href:t[0]},{tabindex:"0"},t[3]],l={};for(let h=0;h<c.length;h+=1)l=Ot(l,c[h]);const u={c:function(){e=sl(t[0]?"a":"button"),a&&a.c(),this.h()},l:function(d){e=ol(d,((t[0]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,tabindex:!0});var f=al(e);a&&a.l(f),f.forEach(Mt),this.h()},h:function(){Yr(t[0]?"a":"button")(e,l),cl(e,Cl,27,1,629)},m:function(d,f){or(d,e,f),a&&a.m(e,null),r=!0,i||(s=[Pe(e,"click",t[12],!1,!1,!1,!1),Pe(e,"change",t[13],!1,!1,!1,!1),Pe(e,"keydown",t[14],!1,!1,!1,!1),Pe(e,"keyup",t[15],!1,!1,!1,!1),Pe(e,"mouseenter",t[16],!1,!1,!1,!1),Pe(e,"mouseleave",t[17],!1,!1,!1,!1)],i=!0)},p:function(d,f){a&&a.p&&(!r||f&16)&&fo(a,o,d,d[4],r?mo(o,d[4],f,null):po(d[4]),null),Yr(d[0]?"a":"button")(e,l=go(c,[(!r||f&3&&n!==(n=d[0]?void 0:d[1]))&&{type:n},(!r||f&1)&&{href:d[0]},{tabindex:"0"},f&8&&d[3]]))},i:function(d){r||(vt(a,d),r=!0)},o:function(d){yt(a,d),r=!1},d:function(d){d&&Mt(e),a&&a.d(d),i=!1,ll(s)}};return nt("SvelteRegisterBlock",{block:u,id:Ur.name,type:"child_dynamic_element",source:'(28:1) <svelte:element   this={href ? \\"a\\" : \\"button\\"}   type={href ? undefined : type}   {href}   on:click   on:change   on:keydown   on:keyup   on:mouseenter   on:mouseleave   tabindex=\\"0\\"   {...$$restProps}  >',ctx:t}),u}function Br(t){let e,n,r,i,s,o;const a=t[5].default,c=ho(a,t,t[4],null);let l=[{type:n=t[0]?void 0:t[1]},{href:t[0]},{tabindex:"0"},Ps(t[2]),t[3]],u={};for(let d=0;d<l.length;d+=1)u=Ot(u,l[d]);const h={c:function(){e=sl(t[0]?"a":"button"),c&&c.c(),this.h()},l:function(f){e=ol(f,((t[0]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,tabindex:!0});var g=al(e);c&&c.l(g),g.forEach(Mt),this.h()},h:function(){Yr(t[0]?"a":"button")(e,u),cl(e,Cl,8,1,263)},m:function(f,g){or(f,e,g),c&&c.m(e,null),i=!0,s||(o=[Pe(e,"click",t[6],!1,!1,!1,!1),Pe(e,"change",t[7],!1,!1,!1,!1),Pe(e,"keydown",t[8],!1,!1,!1,!1),Pe(e,"keyup",t[9],!1,!1,!1,!1),Pe(e,"mouseenter",t[10],!1,!1,!1,!1),Pe(e,"mouseleave",t[11],!1,!1,!1,!1),$d(r=Sl.call(null,e,{builders:t[2]}))],s=!0)},p:function(f,g){c&&c.p&&(!i||g&16)&&fo(c,a,f,f[4],i?mo(a,f[4],g,null):po(f[4]),null),Yr(f[0]?"a":"button")(e,u=go(l,[(!i||g&3&&n!==(n=f[0]?void 0:f[1]))&&{type:n},(!i||g&1)&&{href:f[0]},{tabindex:"0"},g&4&&Ps(f[2]),g&8&&f[3]])),r&&Wd(r.update)&&g&4&&r.update.call(null,{builders:f[2]})},i:function(f){i||(vt(c,f),i=!0)},o:function(f){yt(c,f),i=!1},d:function(f){f&&Mt(e),c&&c.d(f),s=!1,ll(o)}};return nt("SvelteRegisterBlock",{block:h,id:Br.name,type:"child_dynamic_element",source:'(9:1) <svelte:element   this={href ? \\"a\\" : \\"button\\"}   type={href ? undefined : type}   {href}   on:click   on:change   on:keydown   on:keyup   on:mouseenter   on:mouseleave   tabindex=\\"0\\"   use:builderActions={{ builders }}   {...getAttrs(builders)}   {...$$restProps}  >',ctx:t}),h}function Ss(t){let e,n,r,i;const s=[Vl,kl],o=[];function a(l,u){return l[2]&&l[2].length?0:1}e=a(t),n=o[e]=s[e](t);const c={c:function(){n.c(),r=on()},l:function(u){n.l(u),r=on()},m:function(u,h){o[e].m(u,h),or(u,r,h),i=!0},p:function(u,[h]){let d=e;e=a(u),e===d?o[e].p(u,h):(Hd(),yt(o[d],1,1,()=>{o[d]=null}),Kd(),n=o[e],n?n.p(u,h):(n=o[e]=s[e](u),n.c()),vt(n,1),n.m(r.parentNode,r))},i:function(u){i||(vt(n),i=!0)},o:function(u){yt(n),i=!1},d:function(u){u&&Mt(r),o[e].d(u)}};return nt("SvelteRegisterBlock",{block:c,id:Ss.name,type:"component",source:"",ctx:t}),c}function Bf(t,e,n){const r=["href","type","builders"];let i=Qr(e,r),{$$slots:s={},$$scope:o}=e;dl("Button",s,["default"]);let{href:a=void 0}=e,{type:c=void 0}=e,{builders:l=[]}=e;function u(A){Ae.call(this,t,A)}function h(A){Ae.call(this,t,A)}function d(A){Ae.call(this,t,A)}function f(A){Ae.call(this,t,A)}function g(A){Ae.call(this,t,A)}function I(A){Ae.call(this,t,A)}function _(A){Ae.call(this,t,A)}function V(A){Ae.call(this,t,A)}function x(A){Ae.call(this,t,A)}function K(A){Ae.call(this,t,A)}function X(A){Ae.call(this,t,A)}function he(A){Ae.call(this,t,A)}return t.$$set=A=>{e=Ot(Ot({},e),il(A)),n(3,i=Qr(e,r)),"href"in A&&n(0,a=A.href),"type"in A&&n(1,c=A.type),"builders"in A&&n(2,l=A.builders),"$$scope"in A&&n(4,o=A.$$scope)},t.$capture_state=()=>({builderActions:Sl,getAttrs:Ps,href:a,type:c,builders:l}),t.$inject_state=A=>{"href"in e&&n(0,a=A.href),"type"in e&&n(1,c=A.type),"builders"in e&&n(2,l=A.builders)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[a,c,l,i,o,s,u,h,d,f,g,I,_,V,x,K,X,he]}let Cs=class extends ul{constructor(e){super(e),hl(this,e,Bf,Ss,wi,{href:0,type:1,builders:2}),nt("SvelteRegisterComponent",{component:this,tagName:"Button",options:e,id:Ss.name})}get href(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set href(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get type(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set type(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get builders(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set builders(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}};const jf=Object.freeze(Object.defineProperty({__proto__:null,Button:Cs,Root:Cs},Symbol.toStringTag,{value:"Module"}));function Dl(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Dl(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function qf(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Dl(t))&&(r&&(r+=" "),r+=e);return r}function zf(t){const e=t-1;return e*e*e+1}function ks(...t){return Tl(qf(t))}const BI=(t,e={y:-8,x:0,start:.95,duration:150})=>{const n=getComputedStyle(t),r=n.transform==="none"?"":n.transform,i=(o,a,c)=>{const[l,u]=a,[h,d]=c;return(o-l)/(u-l)*(d-h)+h},s=o=>Object.keys(o).reduce((a,c)=>o[c]===void 0?a:a+`${c}:${o[c]};`,"");return{duration:e.duration??200,delay:0,css:o=>{const a=i(o,[0,1],[e.y??5,0]),c=i(o,[0,1],[e.x??0,0]),l=i(o,[0,1],[e.start??.95,1]);return s({transform:`${r} translate3d(${c}px, ${a}px, 0) scale(${l})`,opacity:o})},easing:zf}};function Nl(t){let e;const n=t[5].default,r=ho(n,t,t[8],null),i={c:function(){r&&r.c()},l:function(o){r&&r.l(o)},m:function(o,a){r&&r.m(o,a),e=!0},p:function(o,a){r&&r.p&&(!e||a&256)&&fo(r,n,o,o[8],e?mo(n,o[8],a,null):po(o[8]),null)},i:function(o){e||(vt(r,o),e=!0)},o:function(o){yt(r,o),e=!1},d:function(o){r&&r.d(o)}};return nt("SvelteRegisterBlock",{block:i,id:Nl.name,type:"slot",source:"(11:0) <ButtonPrimitive.Root  {builders}  class={cn(buttonVariants({ variant, size, className }))}  {...$$restProps}  on:click  on:keydown >",ctx:t}),i}function Vs(t){let e,n;const r=[{builders:t[3]},{class:ks(Ds({variant:t[1],size:t[2],className:t[0]}))},t[4]];let i={$$slots:{default:[Nl]},$$scope:{ctx:t}};for(let o=0;o<r.length;o+=1)i=Ot(i,r[o]);e=new Cs({props:i,$$inline:!0}),e.$on("click",t[6]),e.$on("keydown",t[7]);const s={c:function(){Qd(e.$$.fragment)},l:function(a){Yd(e.$$.fragment,a)},m:function(a,c){Xd(e,a,c),n=!0},p:function(a,[c]){const l=c&31?go(r,[c&8&&{builders:a[3]},c&7&&{class:ks(Ds({variant:a[1],size:a[2],className:a[0]}))},c&16&&Zd(a[4])]):{};c&256&&(l.$$scope={dirty:c,ctx:a}),e.$set(l)},i:function(a){n||(vt(e.$$.fragment,a),n=!0)},o:function(a){yt(e.$$.fragment,a),n=!1},d:function(a){Jd(e,a)}};return nt("SvelteRegisterBlock",{block:s,id:Vs.name,type:"component",source:"",ctx:t}),s}function Gf(t,e,n){const r=["class","variant","size","builders"];let i=Qr(e,r),{$$slots:s={},$$scope:o}=e;dl("Button",s,["default"]);let{class:a=void 0}=e,{variant:c="default"}=e,{size:l="default"}=e,{builders:u=[]}=e;function h(f){Ae.call(this,t,f)}function d(f){Ae.call(this,t,f)}return t.$$set=f=>{e=Ot(Ot({},e),il(f)),n(4,i=Qr(e,r)),"class"in f&&n(0,a=f.class),"variant"in f&&n(1,c=f.variant),"size"in f&&n(2,l=f.size),"builders"in f&&n(3,u=f.builders),"$$scope"in f&&n(8,o=f.$$scope)},t.$capture_state=()=>({ButtonPrimitive:jf,cn:ks,buttonVariants:Ds,className:a,variant:c,size:l,builders:u}),t.$inject_state=f=>{"className"in e&&n(0,a=f.className),"variant"in e&&n(1,c=f.variant),"size"in e&&n(2,l=f.size),"builders"in e&&n(3,u=f.builders)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[a,c,l,u,i,s,h,d,o]}class jI extends ul{constructor(e){super(e),hl(this,e,Gf,Vs,wi,{class:0,variant:1,size:2,builders:3}),nt("SvelteRegisterComponent",{component:this,tagName:"Button",options:e,id:Vs.name})}get class(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set class(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get variant(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set variant(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get size(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set size(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get builders(){throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set builders(e){throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Ds=Nf({base:"inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});/**
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
 */const Ol=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$f=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ol(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$f(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new Wf;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hf=function(t){const e=Ol(t);return Ml.encodeByteArray(e,!0)},ti=function(t){return Hf(t).replace(/\./g,"")},Ll=function(t){try{return Ml.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qf=()=>Kf().__FIREBASE_DEFAULTS__,Yf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ll(t[1]);return e&&JSON.parse(e)},Ti=()=>{try{return Qf()||Yf()||Xf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xl=t=>{var e,n;return(n=(e=Ti())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jf=t=>{const e=xl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fl=()=>{var t;return(t=Ti())===null||t===void 0?void 0:t.config},Ul=t=>{var e;return(e=Ti())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ep(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ti(JSON.stringify(n)),ti(JSON.stringify(o)),a].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function qI(){var t;const e=(t=Ti())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function np(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ip(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sp(){try{return typeof indexedDB=="object"}catch{return!1}}function op(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ap="FirebaseError";class rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ap,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cp(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rt(i,a,r)}}function cp(t,e){return t.replace(lp,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lp=/\{\$([^}]+)}/g;function up(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(La(s)&&La(o)){if(!ni(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function La(t){return t!==null&&typeof t=="object"}/**
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
 */function cr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hp(t,e){const n=new dp(t,e);return n.subscribe.bind(n)}class dp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fp(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rs),i.error===void 0&&(i.error=rs),i.complete===void 0&&(i.complete=rs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rs(){}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Lt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class pp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gp(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mp(t){return t===Rt?void 0:t}function gp(t){return t.instantiationMode==="EAGER"}/**
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
 */class _p{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var M;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(M||(M={}));const yp={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},vp=M.INFO,Ep={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Ip=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ep[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yo{constructor(e){this.name=e,this._logLevel=vp,this._logHandler=Ip,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const wp=(t,e)=>e.some(n=>t instanceof n);let xa,Fa;function Tp(){return xa||(xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ap(){return Fa||(Fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bl=new WeakMap,Ns=new WeakMap,jl=new WeakMap,is=new WeakMap,vo=new WeakMap;function bp(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bl.set(n,t)}).catch(()=>{}),vo.set(e,t),e}function Rp(t){if(Ns.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ns.set(t,e)}let Os={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ns.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pp(t){Os=t(Os)}function Sp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ss(this),e,...n);return jl.set(r,e.sort?e.sort():[e]),pt(r)}:Ap().includes(t)?function(...e){return t.apply(ss(this),e),pt(Bl.get(this))}:function(...e){return pt(t.apply(ss(this),e))}}function Cp(t){return typeof t=="function"?Sp(t):(t instanceof IDBTransaction&&Rp(t),wp(t,Tp())?new Proxy(t,Os):t)}function pt(t){if(t instanceof IDBRequest)return bp(t);if(is.has(t))return is.get(t);const e=Cp(t);return e!==t&&(is.set(t,e),vo.set(e,t)),e}const ss=t=>vo.get(t);function kp(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pt(o.result),c.oldVersion,c.newVersion,pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Vp=["get","getKey","getAll","getAllKeys","count"],Dp=["put","add","delete","clear"],os=new Map;function Ua(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(os.get(e))return os.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Dp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vp.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return os.set(e,s),s}Pp(t=>({...t,get:(e,n,r)=>Ua(e,n)||t.get(e,n,r),has:(e,n)=>!!Ua(e,n)||t.has(e,n)}));/**
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
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Op(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Op(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ms="@firebase/app",Ba="0.9.19";/**
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
 */const xt=new yo("@firebase/app"),Mp="@firebase/app-compat",Lp="@firebase/analytics-compat",xp="@firebase/analytics",Fp="@firebase/app-check-compat",Up="@firebase/app-check",Bp="@firebase/auth",jp="@firebase/auth-compat",qp="@firebase/database",zp="@firebase/database-compat",Gp="@firebase/functions",$p="@firebase/functions-compat",Wp="@firebase/installations",Hp="@firebase/installations-compat",Kp="@firebase/messaging",Qp="@firebase/messaging-compat",Yp="@firebase/performance",Xp="@firebase/performance-compat",Jp="@firebase/remote-config",Zp="@firebase/remote-config-compat",em="@firebase/storage",tm="@firebase/storage-compat",nm="@firebase/firestore",rm="@firebase/firestore-compat",im="firebase",sm="10.4.0";/**
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
 */const Ls="[DEFAULT]",om={[Ms]:"fire-core",[Mp]:"fire-core-compat",[xp]:"fire-analytics",[Lp]:"fire-analytics-compat",[Up]:"fire-app-check",[Fp]:"fire-app-check-compat",[Bp]:"fire-auth",[jp]:"fire-auth-compat",[qp]:"fire-rtdb",[zp]:"fire-rtdb-compat",[Gp]:"fire-fn",[$p]:"fire-fn-compat",[Wp]:"fire-iid",[Hp]:"fire-iid-compat",[Kp]:"fire-fcm",[Qp]:"fire-fcm-compat",[Yp]:"fire-perf",[Xp]:"fire-perf-compat",[Jp]:"fire-rc",[Zp]:"fire-rc-compat",[em]:"fire-gcs",[tm]:"fire-gcs-compat",[nm]:"fire-fst",[rm]:"fire-fst-compat","fire-js":"fire-js",[im]:"fire-js-all"};/**
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
 */const Ft=new Map,xs=new Map;function am(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(xs.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;xs.set(e,t);for(const n of Ft.values())am(n,t);return!0}function Eo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new ar("app","Firebase",cm);/**
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
 */class lm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const _n=sm;function Fs(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ls,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(n||(n=Fl()),!n)throw mt.create("no-options");const s=Ft.get(i);if(s){if(ni(n,s.options)&&ni(r,s.config))return s;throw mt.create("duplicate-app",{appName:i})}const o=new _p(i);for(const c of xs.values())o.addComponent(c);const a=new lm(n,r,o);return Ft.set(i,a),a}function Io(t=Ls){const e=Ft.get(t);if(!e&&t===Ls&&Fl())return Fs();if(!e)throw mt.create("no-app",{appName:t});return e}function um(){return Array.from(Ft.values())}async function hm(t){const e=t.name;Ft.has(e)&&(Ft.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function gt(t,e,n){var r;let i=(r=om[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}an(new Lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dm="firebase-heartbeat-database",fm=1,zn="firebase-heartbeat-store";let as=null;function ql(){return as||(as=kp(dm,fm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zn)}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),as}async function pm(t){try{return await(await ql()).transaction(zn).objectStore(zn).get(zl(t))}catch(e){if(e instanceof rt)xt.warn(e.message);else{const n=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function ja(t,e){try{const r=(await ql()).transaction(zn,"readwrite");await r.objectStore(zn).put(e,zl(t)),await r.done}catch(n){if(n instanceof rt)xt.warn(n.message);else{const r=mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(r.message)}}}function zl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mm=1024,gm=30*24*60*60*1e3;class _m{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=gm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qa(),{heartbeatsToSend:n,unsentEntries:r}=ym(this._heartbeatsCache.heartbeats),i=ti(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qa(){return new Date().toISOString().substring(0,10)}function ym(t,e=mm){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),za(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),za(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sp()?op().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ja(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ja(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function za(t){return ti(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Em(t){an(new Lt("platform-logger",e=>new Np(e),"PRIVATE")),an(new Lt("heartbeat",e=>new _m(e),"PRIVATE")),gt(Ms,Ba,t),gt(Ms,Ba,"esm2017"),gt("fire-js","")}Em("");var Im="firebase",wm="10.4.0";/**
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
 */gt(Im,wm,"app");var Tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,wo=wo||{},R=Tm||self;function Ai(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Am(t){return Object.prototype.hasOwnProperty.call(t,cs)&&t[cs]||(t[cs]=++bm)}var cs="closure_uid_"+(1e9*Math.random()>>>0),bm=0;function Rm(t,e,n){return t.call.apply(t.bind,arguments)}function Pm(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ge=Rm:ge=Pm,ge.apply(null,arguments)}function kr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function oe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function At(){this.s=this.s,this.o=this.o}var Sm=0;At.prototype.s=!1;At.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Sm!=0)&&Am(this)};At.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function To(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ga(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ai(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function _e(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Cm=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{R.addEventListener("test",()=>{},e),R.removeEventListener("test",()=>{},e)}catch{}return t}();function Gn(t){return/^[\s\xa0]*$/.test(t)}function bi(){var t=R.navigator;return t&&(t=t.userAgent)?t:""}function Fe(t){return bi().indexOf(t)!=-1}function Ao(t){return Ao[" "](t),t}Ao[" "]=function(){};function km(t,e){var n=wg;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Vm=Fe("Opera"),cn=Fe("Trident")||Fe("MSIE"),$l=Fe("Edge"),Us=$l||cn,Wl=Fe("Gecko")&&!(bi().toLowerCase().indexOf("webkit")!=-1&&!Fe("Edge"))&&!(Fe("Trident")||Fe("MSIE"))&&!Fe("Edge"),Dm=bi().toLowerCase().indexOf("webkit")!=-1&&!Fe("Edge");function Hl(){var t=R.document;return t?t.documentMode:void 0}var Bs;e:{var ls="",us=function(){var t=bi();if(Wl)return/rv:([^\);]+)(\)|;)/.exec(t);if($l)return/Edge\/([\d\.]+)/.exec(t);if(cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Dm)return/WebKit\/(\S+)/.exec(t);if(Vm)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(us&&(ls=us?us[1]:""),cn){var hs=Hl();if(hs!=null&&hs>parseFloat(ls)){Bs=String(hs);break e}}Bs=ls}var js;if(R.document&&cn){var $a=Hl();js=$a||parseInt(Bs,10)||void 0}else js=void 0;var Nm=js;function $n(t,e){if(_e.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wl){e:{try{Ao(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Om[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$n.$.h.call(this)}}oe($n,_e);var Om={2:"touch",3:"pen",4:"mouse"};$n.prototype.h=function(){$n.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ur="closure_listenable_"+(1e6*Math.random()|0),Mm=0;function Lm(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Mm,this.fa=this.ia=!1}function Ri(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bo(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xm(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Kl(t){const e={};for(const n in t)e[n]=t[n];return e}const Wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ql(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Wa.length;s++)n=Wa[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Pi(t){this.src=t,this.g={},this.h=0}Pi.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zs(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Lm(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function qs(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Gl(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ri(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zs(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ro="closure_lm_"+(1e6*Math.random()|0),ds={};function Yl(t,e,n,r,i){if(r&&r.once)return Jl(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yl(t,e[s],n,r,i);return null}return n=Co(n),t&&t[ur]?t.O(e,n,lr(r)?!!r.capture:!!r,i):Xl(t,e,n,!1,r,i)}function Xl(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=lr(i)?!!i.capture:!!i,a=So(t);if(a||(t[Ro]=a=new Pi(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Fm(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Cm||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(eu(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fm(){function t(n){return e.call(t.src,t.listener,n)}const e=Um;return t}function Jl(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jl(t,e[s],n,r,i);return null}return n=Co(n),t&&t[ur]?t.P(e,n,lr(r)?!!r.capture:!!r,i):Xl(t,e,n,!0,r,i)}function Zl(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zl(t,e[s],n,r,i);else r=lr(r)?!!r.capture:!!r,n=Co(n),t&&t[ur]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zs(s,n,r,i),-1<n&&(Ri(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=So(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zs(e,n,r,i)),(n=-1<t?e[t]:null)&&Po(n))}function Po(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ur])qs(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(eu(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=So(e))?(qs(n,t),n.h==0&&(n.src=null,e[Ro]=null)):Ri(t)}}}function eu(t){return t in ds?ds[t]:ds[t]="on"+t}function Um(t,e){if(t.fa)t=!0;else{e=new $n(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Po(t),t=n.call(r,e)}return t}function So(t){return t=t[Ro],t instanceof Pi?t:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Co(t){return typeof t=="function"?t:(t[fs]||(t[fs]=function(e){return t.handleEvent(e)}),t[fs])}function se(){At.call(this),this.i=new Pi(this),this.S=this,this.J=null}oe(se,At);se.prototype[ur]=!0;se.prototype.removeEventListener=function(t,e,n,r){Zl(this,t,e,n,r)};function ue(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new _e(e,t);else if(e instanceof _e)e.target=e.target||t;else{var i=e;e=new _e(r,t),Ql(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Vr(o,r,!0,e)&&i}if(o=e.g=t,i=Vr(o,r,!0,e)&&i,i=Vr(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Vr(o,r,!1,e)&&i}se.prototype.N=function(){if(se.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ri(n[r]);delete t.g[e],t.h--}}this.J=null};se.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};se.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Vr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&qs(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var ko=R.JSON.stringify;class Bm{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function jm(){var t=Vo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qm{constructor(){this.h=this.g=null}add(e,n){const r=tu.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tu=new Bm(()=>new zm,t=>t.reset());class zm{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gm(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $m(t){R.setTimeout(()=>{throw t},0)}let Wn,Hn=!1,Vo=new qm,nu=()=>{const t=R.Promise.resolve(void 0);Wn=()=>{t.then(Wm)}};var Wm=()=>{for(var t;t=jm();){try{t.h.call(t.g)}catch(n){$m(n)}var e=tu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hn=!1};function Si(t,e){se.call(this),this.h=t||1,this.g=e||R,this.j=ge(this.qb,this),this.l=Date.now()}oe(Si,se);y=Si.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ue(this,"tick"),this.ga&&(Do(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Do(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}y.N=function(){Si.$.N.call(this),Do(this),delete this.g};function No(t,e,n){if(typeof t=="function")n&&(t=ge(t,n));else if(t&&typeof t.handleEvent=="function")t=ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(t,e||0)}function ru(t){t.g=No(()=>{t.g=null,t.i&&(t.i=!1,ru(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Hm extends At{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ru(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(t){At.call(this),this.h=t,this.g={}}oe(Kn,At);var Ha=[];function iu(t,e,n,r){Array.isArray(n)||(n&&(Ha[0]=n.toString()),n=Ha);for(var i=0;i<n.length;i++){var s=Yl(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function su(t){bo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Po(e)},t),t.g={}}Kn.prototype.N=function(){Kn.$.N.call(this),su(this)};Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ci(){this.g=!0}Ci.prototype.Ea=function(){this.g=!1};function Km(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Qm(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Jt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Xm(t,n)+(r?" "+r:"")})}function Ym(t,e){t.info(function(){return"TIMEOUT: "+e})}Ci.prototype.info=function(){};function Xm(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ko(n)}catch{return e}}var Gt={},Ka=null;function ki(){return Ka=Ka||new se}Gt.Ta="serverreachability";function ou(t){_e.call(this,Gt.Ta,t)}oe(ou,_e);function Qn(t){const e=ki();ue(e,new ou(e))}Gt.STAT_EVENT="statevent";function au(t,e){_e.call(this,Gt.STAT_EVENT,t),this.stat=e}oe(au,_e);function we(t){const e=ki();ue(e,new au(e,t))}Gt.Ua="timingevent";function cu(t,e){_e.call(this,Gt.Ua,t),this.size=e}oe(cu,_e);function hr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){t()},e)}var Vi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Oo(){}Oo.prototype.h=null;function Qa(t){return t.h||(t.h=t.i())}function uu(){}var dr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mo(){_e.call(this,"d")}oe(Mo,_e);function Lo(){_e.call(this,"c")}oe(Lo,_e);var Gs;function Di(){}oe(Di,Oo);Di.prototype.g=function(){return new XMLHttpRequest};Di.prototype.i=function(){return{}};Gs=new Di;function fr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Kn(this),this.P=Jm,t=Us?125:void 0,this.V=new Si(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hu}function hu(){this.i=null,this.g="",this.h=!1}var Jm=45e3,$s={},ri={};y=fr.prototype;y.setTimeout=function(t){this.P=t};function Ws(t,e,n){t.L=1,t.v=Oi(Je(e)),t.s=n,t.S=!0,du(t,null)}function du(t,e){t.G=Date.now(),pr(t),t.A=Je(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Eu(n.i,"t",r),t.C=0,n=t.l.J,t.h=new hu,t.g=ju(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Hm(ge(t.Pa,t,t.g),t.O)),iu(t.U,t.g,"readystatechange",t.nb),e=t.I?Kl(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qn(),Km(t.j,t.u,t.A,t.m,t.W,t.s)}y.nb=function(t){t=t.target;const e=this.M;e&&Ue(t)==3?e.l():this.Pa(t)};y.Pa=function(t){try{if(t==this.g)e:{const u=Ue(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Us||this.g&&(this.h.h||this.g.ja()||Za(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Qn(3):Qn(2)),Ni(this);var n=this.g.da();this.ca=n;t:if(fu(this)){var r=Za(this.g);t="";var i=r.length,s=Ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){St(this),Ln(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Qm(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gn(a)){var l=a;break t}}l=null}if(n=l)Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hs(this,n);else{this.i=!1,this.o=3,we(12),St(this),Ln(this);break e}}this.S?(pu(this,u,o),Us&&this.i&&u==3&&(iu(this.U,this.V,"tick",this.mb),this.V.start())):(Jt(this.j,this.m,o,null),Hs(this,o)),u==4&&St(this),this.i&&!this.J&&(u==4?xu(this.l,this):(this.i=!1,pr(this)))}else vg(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),St(this),Ln(this)}}}catch{}finally{}};function fu(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function pu(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=Zm(t,n),i==ri){e==4&&(t.o=4,we(14),r=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==$s){t.o=4,we(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Jt(t.j,t.m,i,null),Hs(t,i);fu(t)&&i!=ri&&i!=$s&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,we(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),qo(e),e.M=!0,we(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),St(t),Ln(t))}y.mb=function(){if(this.g){var t=Ue(this.g),e=this.g.ja();this.C<e.length&&(Ni(this),pu(this,t,e),this.i&&t!=4&&pr(this))}};function Zm(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ri:(n=Number(e.substring(n,r)),isNaN(n)?$s:(r+=1,r+n>e.length?ri:(e=e.slice(r,r+n),t.C=r+n,e)))}y.cancel=function(){this.J=!0,St(this)};function pr(t){t.Y=Date.now()+t.P,mu(t,t.P)}function mu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hr(ge(t.lb,t),e)}function Ni(t){t.B&&(R.clearTimeout(t.B),t.B=null)}y.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ym(this.j,this.A),this.L!=2&&(Qn(),we(17)),St(this),this.o=2,Ln(this)):mu(this,this.Y-t)};function Ln(t){t.l.H==0||t.J||xu(t.l,t)}function St(t){Ni(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Do(t.V),su(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Hs(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ks(n.i,t))){if(!t.K&&Ks(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)oi(n),Fi(n);else break e;jo(n),we(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=hr(ge(n.ib,n),6e3));if(1>=Tu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ct(n,11)}else if((t.K||n.g==t)&&oi(n),!Gn(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xo(s,s.h),s.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,$(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Bu(r,r.J?r.pa:null,r.Y),o.K){Au(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ni(a),pr(a)),r.g=o}else Mu(r);0<n.j.length&&Ui(n)}else l[0]!="stop"&&l[0]!="close"||Ct(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ct(n,7):Bo(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Qn(4)}catch{}}function eg(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ai(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tg(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ai(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function gu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ai(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tg(t),r=eg(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var _u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ng(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Dt){this.h=t.h,ii(this,t.j),this.s=t.s,this.g=t.g,si(this,t.m),this.l=t.l;var e=t.i,n=new Yn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ya(this,n),this.o=t.o}else t&&(e=String(t).match(_u))?(this.h=!1,ii(this,e[1]||"",!0),this.s=Vn(e[2]||""),this.g=Vn(e[3]||"",!0),si(this,e[4]),this.l=Vn(e[5]||"",!0),Ya(this,e[6]||"",!0),this.o=Vn(e[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Dt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dn(e,Xa,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Dn(e,Xa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Dn(n,n.charAt(0)=="/"?sg:ig,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dn(n,ag)),t.join("")};function Je(t){return new Dt(t)}function ii(t,e,n){t.j=n?Vn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function si(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ya(t,e,n){e instanceof Yn?(t.i=e,cg(t.i,t.h)):(n||(e=Dn(e,og)),t.i=new Yn(e,t.h))}function $(t,e,n){t.i.set(e,n)}function Oi(t){return $(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xa=/[#\/\?@]/g,ig=/[#\?:]/g,sg=/[#\?]/g,og=/[#\?@]/g,ag=/#/g;function Yn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bt(t){t.g||(t.g=new Map,t.h=0,t.i&&ng(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=Yn.prototype;y.add=function(t,e){bt(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yu(t,e){bt(t),e=yn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vu(t,e){return bt(t),e=yn(t,e),t.g.has(e)}y.forEach=function(t,e){bt(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};y.ta=function(){bt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};y.Z=function(t){bt(this);let e=[];if(typeof t=="string")vu(this,t)&&(e=e.concat(this.g.get(yn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};y.set=function(t,e){return bt(this),this.i=null,t=yn(this,t),vu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Eu(t,e,n){yu(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),To(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cg(t,e){e&&!t.j&&(bt(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(yu(this,r),Eu(this,i,n))},t)),t.j=e}var lg=class{constructor(t,e){this.g=t,this.map=e}};function Iu(t){this.l=t||ug,R.PerformanceNavigationTiming?(t=R.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ug=10;function wu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Tu(t){return t.h?1:t.g?t.g.size:0}function Ks(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xo(t,e){t.g?t.g.add(e):t.h=e}function Au(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Iu.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bu(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return To(t.i)}var hg=class{stringify(t){return R.JSON.stringify(t,void 0)}parse(t){return R.JSON.parse(t,void 0)}};function dg(){this.g=new hg}function fg(t,e,n){const r=n||"";try{gu(t,function(i,s){let o=i;lr(i)&&(o=ko(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pg(t,e){const n=new Ci;if(R.Image){const r=new Image;r.onload=kr(Dr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=kr(Dr,n,r,"TestLoadImage: error",!1,e),r.onabort=kr(Dr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=kr(Dr,n,r,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Dr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Mi(t){this.l=t.ec||null,this.j=t.ob||!1}oe(Mi,Oo);Mi.prototype.g=function(){return new Li(this.l,this.j)};Mi.prototype.i=function(t){return function(){return t}}({});function Li(t,e){se.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(Li,se);var Fo=0;y=Li.prototype;y.open=function(t,e){if(this.readyState!=Fo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xn(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||R).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=Fo};y.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ru(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ru(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}y.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mr(this):Xn(this),this.readyState==3&&Ru(this)}};y.Za=function(t){this.g&&(this.response=this.responseText=t,mr(this))};y.Ya=function(t){this.g&&(this.response=t,mr(this))};y.ka=function(){this.g&&mr(this)};function mr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xn(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mg=R.JSON.parse;function Y(t){se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pu,this.L=this.M=!1}oe(Y,se);var Pu="",gg=/^https?$/i,_g=["POST","PUT"];y=Y.prototype;y.Oa=function(t){this.M=t};y.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gs.g(),this.C=this.u?Qa(this.u):Qa(Gs),this.g.onreadystatechange=ge(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ja(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=R.FormData&&t instanceof R.FormData,!(0<=Gl(_g,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ku(this),0<this.B&&((this.L=yg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ge(this.ua,this)):this.A=No(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ja(this,s)}};function yg(t){return cn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}y.ua=function(){typeof wo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ue(this,"timeout"),this.abort(8))};function Ja(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Su(t),xi(t)}function Su(t){t.F||(t.F=!0,ue(t,"complete"),ue(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ue(this,"complete"),ue(this,"abort"),xi(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),Y.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Cu(this):this.kb())};y.kb=function(){Cu(this)};function Cu(t){if(t.h&&typeof wo<"u"&&(!t.C[1]||Ue(t)!=4||t.da()!=2)){if(t.v&&Ue(t)==4)No(t.La,0,t);else if(ue(t,"readystatechange"),Ue(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(_u)[1]||null;!i&&R.self&&R.self.location&&(i=R.self.location.protocol.slice(0,-1)),r=!gg.test(i?i.toLowerCase():"")}n=r}if(n)ue(t,"complete"),ue(t,"success");else{t.m=6;try{var s=2<Ue(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Su(t)}}finally{xi(t)}}}}function xi(t,e){if(t.g){ku(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ue(t,"ready");try{n.onreadystatechange=r}catch{}}}function ku(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(R.clearTimeout(t.A),t.A=null)}y.isActive=function(){return!!this.g};function Ue(t){return t.g?t.g.readyState:0}y.da=function(){try{return 2<Ue(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mg(e)}};function Za(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Pu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function vg(t){const e={};t=(t.g&&2<=Ue(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Gn(t[r]))continue;var n=Gm(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}xm(e,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vu(t){let e="";return bo(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Uo(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Vu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$(t,e,n))}function Sn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Du(t){this.Ga=0,this.j=[],this.l=new Ci,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sn("baseRetryDelayMs",5e3,t),this.hb=Sn("retryDelaySeedMs",1e4,t),this.eb=Sn("forwardChannelMaxRetries",2,t),this.xa=Sn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Iu(t&&t.concurrentRequestLimit),this.Ja=new dg,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Du.prototype;y.ra=8;y.H=1;function Bo(t){if(Nu(t),t.H==3){var e=t.W++,n=Je(t.I);if($(n,"SID",t.K),$(n,"RID",e),$(n,"TYPE","terminate"),gr(t,n),e=new fr(t,t.l,e),e.L=2,e.v=Oi(Je(n)),n=!1,R.navigator&&R.navigator.sendBeacon)try{n=R.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&R.Image&&(new Image().src=e.v,n=!0),n||(e.g=ju(e.l,null),e.g.ha(e.v)),e.G=Date.now(),pr(e)}Uu(t)}function Fi(t){t.g&&(qo(t),t.g.cancel(),t.g=null)}function Nu(t){Fi(t),t.u&&(R.clearTimeout(t.u),t.u=null),oi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&R.clearTimeout(t.m),t.m=null)}function Ui(t){if(!wu(t.i)&&!t.m){t.m=!0;var e=t.Na;Wn||nu(),Hn||(Wn(),Hn=!0),Vo.add(e,t),t.C=0}}function Eg(t,e){return Tu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=hr(ge(t.Na,t,e),Fu(t,t.C)),t.C++,!0)}y.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new fr(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Kl(s),Ql(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ou(this,i,e),n=Je(this.I),$(n,"RID",t),$(n,"CVER",22),this.F&&$(n,"X-HTTP-Session-Id",this.F),gr(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Vu(s)))+"&"+e:this.o&&Uo(n,this.o,s)),xo(this.i,i),this.bb&&$(n,"TYPE","init"),this.P?($(n,"$req",e),$(n,"SID","null"),i.aa=!0,Ws(i,n,null)):Ws(i,n,e),this.H=2}}else this.H==3&&(t?ec(this,t):this.j.length==0||wu(this.i)||ec(this))};function ec(t,e){var n;e?n=e.m:n=t.W++;const r=Je(t.I);$(r,"SID",t.K),$(r,"RID",n),$(r,"AID",t.V),gr(t,r),t.o&&t.s&&Uo(r,t.o,t.s),n=new fr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ou(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xo(t.i,n),Ws(n,r,e)}function gr(t,e){t.na&&bo(t.na,function(n,r){$(e,r,n)}),t.h&&gu({},function(n,r){$(e,r,n)})}function Ou(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ge(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{fg(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Mu(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Wn||nu(),Hn||(Wn(),Hn=!0),Vo.add(e,t),t.A=0}}function jo(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=hr(ge(t.Ma,t),Fu(t,t.A)),t.A++,!0)}y.Ma=function(){if(this.u=null,Lu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=hr(ge(this.jb,this),t)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,we(10),Fi(this),Lu(this))};function qo(t){t.B!=null&&(R.clearTimeout(t.B),t.B=null)}function Lu(t){t.g=new fr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Je(t.wa);$(e,"RID","rpc"),$(e,"SID",t.K),$(e,"AID",t.V),$(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$(e,"TO",t.qa),$(e,"TYPE","xmlhttp"),gr(t,e),t.o&&t.s&&Uo(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Oi(Je(e)),n.s=null,n.S=!0,du(n,t)}y.ib=function(){this.v!=null&&(this.v=null,Fi(this),jo(this),we(19))};function oi(t){t.v!=null&&(R.clearTimeout(t.v),t.v=null)}function xu(t,e){var n=null;if(t.g==e){oi(t),qo(t),t.g=null;var r=2}else if(Ks(t.i,e))n=e.F,Au(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=ki(),ue(r,new cu(r,n)),Ui(t)}else Mu(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Eg(t,e)||r==2&&jo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ct(t,5);break;case 4:Ct(t,10);break;case 3:Ct(t,6);break;default:Ct(t,2)}}}function Fu(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ct(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ge(t.pb,t);n||(n=new Dt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||ii(n,"https"),Oi(n)),pg(n.toString(),r)}else we(2);t.H=0,t.h&&t.h.za(e),Uu(t),Nu(t)}y.pb=function(t){t?(this.l.info("Successfully pinged google.com"),we(2)):(this.l.info("Failed to ping google.com"),we(1))};function Uu(t){if(t.H=0,t.ma=[],t.h){const e=bu(t.i);(e.length!=0||t.j.length!=0)&&(Ga(t.ma,e),Ga(t.ma,t.j),t.i.i.length=0,To(t.j),t.j.length=0),t.h.ya()}}function Bu(t,e,n){var r=n instanceof Dt?Je(n):new Dt(n);if(r.g!="")e&&(r.g=e+"."+r.g),si(r,r.m);else{var i=R.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Dt(null);r&&ii(s,r),e&&(s.g=e),i&&si(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&$(r,n,e),$(r,"VER",t.ra),gr(t,r),r}function ju(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Y(new Mi({ob:!0})):new Y(t.va),e.Oa(t.J),e}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function qu(){}y=qu.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function ai(){if(cn&&!(10<=Number(Nm)))throw Error("Environmental error: no available transport.")}ai.prototype.g=function(t,e){return new Re(t,e)};function Re(t,e){se.call(this),this.g=new Du(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Gn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vn(this)}oe(Re,se);Re.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;we(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Bu(t,null,t.Y),Ui(t)};Re.prototype.close=function(){Bo(this.g)};Re.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ko(t),t=n);e.j.push(new lg(e.fb++,t)),e.H==3&&Ui(e)};Re.prototype.N=function(){this.g.h=null,delete this.j,Bo(this.g),delete this.g,Re.$.N.call(this)};function zu(t){Mo.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}oe(zu,Mo);function Gu(){Lo.call(this),this.status=1}oe(Gu,Lo);function vn(t){this.g=t}oe(vn,qu);vn.prototype.Ba=function(){ue(this.g,"a")};vn.prototype.Aa=function(t){ue(this.g,new zu(t))};vn.prototype.za=function(t){ue(this.g,new Gu)};vn.prototype.ya=function(){ue(this.g,"b")};function Ig(){this.blockSize=-1}function Me(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(Me,Ig);Me.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ps(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Me.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ps(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ps(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ps(this,r),i=0;break}}this.h=i,this.i+=e};Me.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function q(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var wg={};function zo(t){return-128<=t&&128>t?km(t,function(e){return new q([e|0],0>e?-1:0)}):new q([t|0],0>t?-1:0)}function Be(t){if(isNaN(t)||!isFinite(t))return en;if(0>t)return le(Be(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Qs;return new q(e,0)}function $u(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return le($u(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Be(Math.pow(e,8)),r=en,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Be(Math.pow(e,s)),r=r.R(s).add(Be(o))):(r=r.R(n),r=r.add(Be(o)))}return r}var Qs=4294967296,en=zo(0),Ys=zo(1),tc=zo(16777216);y=q.prototype;y.ea=function(){if(Se(this))return-le(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Qs+r)*e,e*=Qs}return t};y.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ke(this))return"0";if(Se(this))return"-"+le(this).toString(t);for(var e=Be(Math.pow(t,6)),n=this,r="";;){var i=li(n,e).g;n=ci(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ke(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};y.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ke(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Se(t){return t.h==-1}y.X=function(t){return t=ci(this,t),Se(t)?-1:Ke(t)?0:1};function le(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new q(n,~t.h).add(Ys)}y.abs=function(){return Se(this)?le(this):this};y.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new q(n,n[n.length-1]&-2147483648?-1:0)};function ci(t,e){return t.add(le(e))}y.R=function(t){if(Ke(this)||Ke(t))return en;if(Se(this))return Se(t)?le(this).R(le(t)):le(le(this).R(t));if(Se(t))return le(this.R(le(t)));if(0>this.X(tc)&&0>t.X(tc))return Be(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,Nr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Nr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Nr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Nr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new q(n,0)};function Nr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Cn(t,e){this.g=t,this.h=e}function li(t,e){if(Ke(e))throw Error("division by zero");if(Ke(t))return new Cn(en,en);if(Se(t))return e=li(le(t),e),new Cn(le(e.g),le(e.h));if(Se(e))return e=li(t,le(e)),new Cn(le(e.g),e.h);if(30<t.g.length){if(Se(t)||Se(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ys,r=e;0>=r.X(t);)n=nc(n),r=nc(r);var i=Kt(n,1),s=Kt(r,1);for(r=Kt(r,2),n=Kt(n,2);!Ke(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Kt(r,1),n=Kt(n,1)}return e=ci(t,i.R(e)),new Cn(i,e)}for(i=en;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Be(n),o=s.R(e);Se(o)||0<o.X(t);)n-=r,s=Be(n),o=s.R(e);Ke(s)&&(s=Ys),i=i.add(s),t=ci(t,o)}return new Cn(i,t)}y.gb=function(t){return li(this,t).h};y.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new q(n,this.h&t.h)};y.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new q(n,this.h|t.h)};y.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new q(n,this.h^t.h)};function nc(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new q(n,t.h)}function Kt(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new q(i,t.h)}ai.prototype.createWebChannel=ai.prototype.g;Re.prototype.send=Re.prototype.u;Re.prototype.open=Re.prototype.m;Re.prototype.close=Re.prototype.close;Vi.NO_ERROR=0;Vi.TIMEOUT=8;Vi.HTTP_ERROR=6;lu.COMPLETE="complete";uu.EventType=dr;dr.OPEN="a";dr.CLOSE="b";dr.ERROR="c";dr.MESSAGE="d";se.prototype.listen=se.prototype.O;Y.prototype.listenOnce=Y.prototype.P;Y.prototype.getLastError=Y.prototype.Sa;Y.prototype.getLastErrorCode=Y.prototype.Ia;Y.prototype.getStatus=Y.prototype.da;Y.prototype.getResponseJson=Y.prototype.Wa;Y.prototype.getResponseText=Y.prototype.ja;Y.prototype.send=Y.prototype.ha;Y.prototype.setWithCredentials=Y.prototype.Oa;Me.prototype.digest=Me.prototype.l;Me.prototype.reset=Me.prototype.reset;Me.prototype.update=Me.prototype.j;q.prototype.add=q.prototype.add;q.prototype.multiply=q.prototype.R;q.prototype.modulo=q.prototype.gb;q.prototype.compare=q.prototype.X;q.prototype.toNumber=q.prototype.ea;q.prototype.toString=q.prototype.toString;q.prototype.getBits=q.prototype.D;q.fromNumber=Be;q.fromString=$u;var Tg=function(){return new ai},Ag=function(){return ki()},ms=Vi,bg=lu,Rg=Gt,rc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Or=uu,Pg=Y,Sg=Me,tn=q;const ic="@firebase/firestore";/**
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
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
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
 */let En="10.4.0";/**
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
 */const Ut=new yo("@firebase/firestore");function kn(){return Ut.logLevel}function E(t,...e){if(Ut.logLevel<=M.DEBUG){const n=e.map(Go);Ut.debug(`Firestore (${En}): ${t}`,...n)}}function Ze(t,...e){if(Ut.logLevel<=M.ERROR){const n=e.map(Go);Ut.error(`Firestore (${En}): ${t}`,...n)}}function ln(t,...e){if(Ut.logLevel<=M.WARN){const n=e.map(Go);Ut.warn(`Firestore (${En}): ${t}`,...n)}}function Go(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${En}) INTERNAL ASSERTION FAILED: `+t;throw Ze(e),new Error(e)}function H(t,e){t||b()}function C(t,e){return t}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Wu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(fe.UNAUTHENTICATED))}shutdown(){}}class kg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vg{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new Wu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new fe(e)}}class Dg{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ng{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Dg(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string"),this.R=n.token,new Og(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Lg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Hu{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Lg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function B(t,e){return t<e?-1:t>e?1:0}function un(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new re(0,0))}static max(){return new P(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class W extends Jn{construct(e,n,r){return new W(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new v(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new W(n)}static emptyPath(){return new W([])}}const xg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Jn{construct(e,n,r){return new me(e,n,r)}static isValidIdentifier(e){return xg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new v(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new v(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new v(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(n)}static emptyPath(){return new me([])}}/**
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
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(W.fromString(e))}static fromName(e){return new T(W.fromString(e).popFirst(5))}static empty(){return new T(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&W.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return W.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new W(e.slice()))}}function Fg(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new re(n+1,0):new re(n,r));return new Et(i,T.empty(),e)}function Ug(t){return new Et(t.readTime,t.key,-1)}class Et{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Et(P.min(),T.empty(),-1)}static max(){return new Et(P.max(),T.empty(),-1)}}function Bg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=T.comparator(t.documentKey,e.documentKey),n!==0?n:B(t.largestBatchId,e.largestBatchId))}/**
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
 */const jg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _r(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==jg)throw t;E("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):m.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):m.reject(n)}static resolve(e){return new m((n,r)=>{n(e)})}static reject(e){return new m((n,r)=>{r(e)})}static waitFor(e){return new m((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=m.resolve(!1);for(const r of e)n=n.next(i=>i?m.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new m((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $o{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}$o.ae=-1;function Bi(t){return t==null}function ui(t){return t===0&&1/t==-1/0}function zg(t){return typeof t=="number"&&Number.isInteger(t)&&!ui(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function sc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function In(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ku(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Q{constructor(e,n){this.comparator=e,this.root=n||ce.EMPTY}insert(e,n){return new Q(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mr(this.root,e,this.comparator,!0)}}class Mr{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ce.RED,this.left=i??ce.EMPTY,this.right=s??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ce(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new oc(this.data.getIterator())}getIteratorFrom(e){return new oc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class oc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Oe{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new Oe([])}unionWith(e){let n=new ye(me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Oe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return un(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qu("Invalid base64 string: "+s):s}}(e);return new Ee(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ee(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const Gg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(t){if(H(!!t),typeof t=="string"){let e=0;const n=Gg.exec(t);if(H(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(t.seconds),nanos:te(t.nanos)}}function te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bt(t){return typeof t=="string"?Ee.fromBase64String(t):Ee.fromUint8Array(t)}/**
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
 */function Wo(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ho(t){const e=t.mapValue.fields.__previous_value__;return Wo(e)?Ho(e):e}function Zn(t){const e=It(t.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
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
 */class $g{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class er{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof er&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wo(t)?4:Wg(t)?9007199254740991:10:b()}function We(t,e){if(t===e)return!0;const n=jt(t);if(n!==jt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zn(t).isEqual(Zn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=It(i.timestampValue),a=It(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bt(i.bytesValue).isEqual(Bt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return te(i.geoPointValue.latitude)===te(s.geoPointValue.latitude)&&te(i.geoPointValue.longitude)===te(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return te(i.integerValue)===te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=te(i.doubleValue),a=te(s.doubleValue);return o===a?ui(o)===ui(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return un(t.arrayValue.values||[],e.arrayValue.values||[],We);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(sc(o)!==sc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!We(o[c],a[c])))return!1;return!0}(t,e);default:return b()}}function tr(t,e){return(t.values||[]).find(n=>We(n,e))!==void 0}function hn(t,e){if(t===e)return 0;const n=jt(t),r=jt(e);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=te(s.integerValue||s.doubleValue),c=te(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ac(t.timestampValue,e.timestampValue);case 4:return ac(Zn(t),Zn(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bt(s),c=Bt(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=B(a[l],c[l]);if(u!==0)return u}return B(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=B(te(s.latitude),te(o.latitude));return a!==0?a:B(te(s.longitude),te(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=hn(a[l],c[l]);if(u)return u}return B(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Lr.mapValue&&o===Lr.mapValue)return 0;if(s===Lr.mapValue)return 1;if(o===Lr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=B(c[h],u[h]);if(d!==0)return d;const f=hn(a[c[h]],l[u[h]]);if(f!==0)return f}return B(c.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function ac(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return B(t,e);const n=It(t),r=It(e),i=B(n.seconds,r.seconds);return i!==0?i:B(n.nanos,r.nanos)}function dn(t){return Xs(t)}function Xs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=It(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bt(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return T.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Xs(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Xs(n.fields[o])}`;return i+"}"}(t.mapValue):b()}function cc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Js(t){return!!t&&"integerValue"in t}function Ko(t){return!!t&&"arrayValue"in t}function lc(t){return!!t&&"nullValue"in t}function uc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jr(t){return!!t&&"mapValue"in t}function xn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return In(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Wg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xn(n)}setAll(e){let n=me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=xn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){In(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ce(xn(this.value))}}function Yu(t){const e=[];return In(t.fields,(n,r)=>{const i=new me([n]);if(jr(r)){const s=Yu(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Oe(e)}/**
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
 */class pe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pe(e,0,P.min(),P.min(),P.min(),Ce.empty(),0)}static newFoundDocument(e,n,r,i){return new pe(e,1,n,P.min(),r,i,0)}static newNoDocument(e,n){return new pe(e,2,n,P.min(),P.min(),Ce.empty(),0)}static newUnknownDocument(e,n){return new pe(e,3,n,P.min(),P.min(),Ce.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hi{constructor(e,n){this.position=e,this.inclusive=n}}function hc(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),n.key):r=hn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!We(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Hg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Xu{}class ne extends Xu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Qg(e,n,r):n==="array-contains"?new Jg(e,r):n==="in"?new Zg(e,r):n==="not-in"?new e_(e,r):n==="array-contains-any"?new t_(e,r):new ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Yg(e,r):new Xg(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hn(n,this.value)):n!==null&&jt(this.value)===jt(n)&&this.matchesComparison(hn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Le extends Xu{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Le(e,n)}matches(e){return Ju(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ju(t){return t.op==="and"}function Zu(t){return Kg(t)&&Ju(t)}function Kg(t){for(const e of t.filters)if(e instanceof Le)return!1;return!0}function Zs(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+dn(t.value);if(Zu(t))return t.filters.map(e=>Zs(e)).join(",");{const e=t.filters.map(n=>Zs(n)).join(",");return`${t.op}(${e})`}}function eh(t,e){return t instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.field.isEqual(i.field)&&We(r.value,i.value)}(t,e):t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&eh(o,i.filters[a]),!0):!1}(t,e):void b()}function th(t){return t instanceof ne?function(n){return`${n.field.canonicalString()} ${n.op} ${dn(n.value)}`}(t):t instanceof Le?function(n){return n.op.toString()+" {"+n.getFilters().map(th).join(" ,")+"}"}(t):"Filter"}class Qg extends ne{constructor(e,n,r){super(e,n,r),this.key=T.fromName(r.referenceValue)}matches(e){const n=T.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yg extends ne{constructor(e,n){super(e,"in",n),this.keys=nh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Xg extends ne{constructor(e,n){super(e,"not-in",n),this.keys=nh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>T.fromName(r.referenceValue))}class Jg extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ko(n)&&tr(n.arrayValue,this.value)}}class Zg extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tr(this.value.arrayValue,n)}}class e_ extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tr(this.value.arrayValue,n)}}class t_ extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ko(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tr(this.value.arrayValue,r))}}/**
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
 */class n_{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function fc(t,e=null,n=[],r=[],i=null,s=null,o=null){return new n_(t,e,n,r,i,s,o)}function Qo(t){const e=C(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zs(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>dn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>dn(r)).join(",")),e.he=n}return e.he}function Yo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Hg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dc(t.startAt,e.startAt)&&dc(t.endAt,e.endAt)}function eo(t){return T.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function r_(t,e,n,r,i,s,o,a){return new vr(t,e,n,r,i,s,o,a)}function Xo(t){return new vr(t)}function pc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ih(t){return t.collectionGroup!==null}function Un(t){const e=C(t);if(e.Pe===null){e.Pe=[];const n=Jo(e),r=rh(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Fn(n)),e.Pe.push(new Fn(me.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Fn(me.keyField(),s))}}}return e.Pe}function je(t){const e=C(t);return e.Ie||(e.Ie=i_(e,Un(t))),e.Ie}function i_(t,e){if(t.limitType==="F")return fc(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fn(i.field,s)});const n=t.endAt?new hi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hi(t.startAt.position,t.startAt.inclusive):null;return fc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function to(t,e){e.getFirstInequalityField(),Jo(t);const n=t.filters.concat([e]);return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function no(t,e,n){return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ji(t,e){return Yo(je(t),je(e))&&t.limitType===e.limitType}function sh(t){return`${Qo(je(t))}|lt:${t.limitType}`}function Qt(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>th(i)).join(", ")}]`),Bi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>dn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>dn(i)).join(",")),`Target(${r})`}(je(t))}; limitType=${t.limitType})`}function qi(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Un(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=hc(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Un(r),i)||r.endAt&&!function(o,a,c){const l=hc(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Un(r),i))}(t,e)}function s_(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oh(t){return(e,n)=>{let r=!1;for(const i of Un(t)){const s=o_(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function o_(t,e,n){const r=t.field.isKeyField()?T.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?hn(c,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class wn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){In(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ku(this.inner)}size(){return this.innerSize}}/**
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
 */const a_=new Q(T.comparator);function et(){return a_}const ah=new Q(T.comparator);function Nn(...t){let e=ah;for(const n of t)e=e.insert(n.key,n);return e}function ch(t){let e=ah;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kt(){return Bn()}function lh(){return Bn()}function Bn(){return new wn(t=>t.toString(),(t,e)=>t.isEqual(e))}const c_=new Q(T.comparator),l_=new ye(T.comparator);function O(...t){let e=l_;for(const n of t)e=e.add(n);return e}const u_=new ye(B);function h_(){return u_}/**
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
 */function uh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function hh(t){return{integerValue:""+t}}function d_(t,e){return zg(e)?hh(e):uh(t,e)}/**
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
 */class zi{constructor(){this._=void 0}}function f_(t,e,n){return t instanceof di?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wo(s)&&(s=Ho(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof nr?fh(t,e):t instanceof rr?ph(t,e):function(i,s){const o=dh(i,s),a=mc(o)+mc(i.Te);return Js(o)&&Js(i.Te)?hh(a):uh(i.serializer,a)}(t,e)}function p_(t,e,n){return t instanceof nr?fh(t,e):t instanceof rr?ph(t,e):n}function dh(t,e){return t instanceof fi?function(r){return Js(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class di extends zi{}class nr extends zi{constructor(e){super(),this.elements=e}}function fh(t,e){const n=mh(e);for(const r of t.elements)n.some(i=>We(i,r))||n.push(r);return{arrayValue:{values:n}}}class rr extends zi{constructor(e){super(),this.elements=e}}function ph(t,e){let n=mh(e);for(const r of t.elements)n=n.filter(i=>!We(i,r));return{arrayValue:{values:n}}}class fi extends zi{constructor(e,n){super(),this.serializer=e,this.Te=n}}function mc(t){return te(t.integerValue||t.doubleValue)}function mh(t){return Ko(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function m_(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof nr&&i instanceof nr||r instanceof rr&&i instanceof rr?un(r.elements,i.elements,We):r instanceof fi&&i instanceof fi?We(r.Te,i.Te):r instanceof di&&i instanceof di}(t.transform,e.transform)}class g_{constructor(e,n){this.version=e,this.transformResults=n}}class qe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gi{}function gh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yh(t.key,qe.none()):new Er(t.key,t.data,qe.none());{const n=t.data,r=Ce.empty();let i=new ye(me.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $t(t.key,r,new Oe(i.toArray()),qe.none())}}function __(t,e,n){t instanceof Er?function(i,s,o){const a=i.value.clone(),c=_c(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof $t?function(i,s,o){if(!qr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=_c(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(_h(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function jn(t,e,n,r){return t instanceof Er?function(s,o,a,c){if(!qr(s.precondition,o))return a;const l=s.value.clone(),u=yc(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof $t?function(s,o,a,c){if(!qr(s.precondition,o))return a;const l=yc(s.fieldTransforms,c,o),u=o.data;return u.setAll(_h(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return qr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function y_(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dh(r.transform,i||null);s!=null&&(n===null&&(n=Ce.empty()),n.set(r.field,s))}return n||null}function gc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&un(r,i,(s,o)=>m_(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Er extends Gi{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $t extends Gi{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _h(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _c(t,e,n){const r=new Map;H(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,p_(o,a,n[i]))}return r}function yc(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,f_(s,o,e))}return r}class yh extends Gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v_ extends Gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class E_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&__(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jn(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jn(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lh();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=gh(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),O())}isEqual(e){return this.batchId===e.batchId&&un(this.mutations,e.mutations,(n,r)=>gc(n,r))&&un(this.baseMutations,e.baseMutations,(n,r)=>gc(n,r))}}class Zo{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){H(e.mutations.length===r.length);let i=function(){return c_}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zo(e,n,r,i)}}/**
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
 */class I_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w_{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ee,L;function T_(t){switch(t){default:return b();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function vh(t){if(t===void 0)return Ze("GRPC error has no .code"),p.UNKNOWN;switch(t){case ee.OK:return p.OK;case ee.CANCELLED:return p.CANCELLED;case ee.UNKNOWN:return p.UNKNOWN;case ee.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case ee.INTERNAL:return p.INTERNAL;case ee.UNAVAILABLE:return p.UNAVAILABLE;case ee.UNAUTHENTICATED:return p.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case ee.NOT_FOUND:return p.NOT_FOUND;case ee.ALREADY_EXISTS:return p.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return p.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case ee.ABORTED:return p.ABORTED;case ee.OUT_OF_RANGE:return p.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return p.UNIMPLEMENTED;case ee.DATA_LOSS:return p.DATA_LOSS;default:return b()}}(L=ee||(ee={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function A_(){return new TextEncoder}/**
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
 */const b_=new tn([4294967295,4294967295],0);function vc(t){const e=A_().encode(t),n=new Sg;return n.update(e),new Uint8Array(n.digest())}function Ec(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new tn([n,r],0),new tn([i,s],0)]}class ea{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new On(`Invalid padding: ${n}`);if(r<0)throw new On(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new On(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new On(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=tn.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(tn.fromNumber(r)));return i.compare(b_)===1&&(i=new tn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=vc(e),[r,i]=Ec(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ea(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=vc(e),[r,i]=Ec(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class On extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $i{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ir.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $i(P.min(),i,new Q(B),et(),O())}}class Ir{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ir(r,n,O(),O(),O())}}/**
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
 */class zr{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class Eh{constructor(e,n){this.targetId=e,this.ye=n}}class Ih{constructor(e,n,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ic{constructor(){this.we=0,this.Se=Tc(),this.be=Ee.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=O(),n=O(),r=O();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Ir(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Tc()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class R_{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=et(),this.Ue=wc(),this.We=new Q(B)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(eo(s))if(r===0){const o=new T(s.path);this.je(n,o,pe.newNoDocument(o,P.min()))}else H(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Bt(r).toUint8Array()}catch(c){if(c instanceof Qu)return ln("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ea(o,i,s)}catch(c){return ln(c instanceof On?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&eo(a.target)){const c=new T(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,pe.newNoDocument(c,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=O();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new $i(e,n,this.We,this.$e,r);return this.$e=et(),this.Ue=wc(),this.We=new Q(B),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Ic,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ye(B),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||E("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Ic),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function wc(){return new Q(T.comparator)}function Tc(){return new Q(T.comparator)}const P_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),S_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),C_=(()=>({and:"AND",or:"OR"}))();class k_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ro(t,e){return t.useProto3Json||Bi(e)?e:{value:e}}function pi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wh(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V_(t,e){return pi(t,e.toTimestamp())}function ze(t){return H(!!t),P.fromTimestamp(function(n){const r=It(n);return new re(r.seconds,r.nanos)}(t))}function ta(t,e){return function(r){return new W(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Th(t){const e=W.fromString(t);return H(Ph(e)),e}function io(t,e){return ta(t.databaseId,e.path)}function gs(t,e){const n=Th(e);if(n.get(1)!==t.databaseId.projectId)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new T(Ah(n))}function so(t,e){return ta(t.databaseId,e)}function D_(t){const e=Th(t);return e.length===4?W.emptyPath():Ah(e)}function oo(t){return new W(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ah(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ac(t,e,n){return{name:io(t,e),fields:n.value.mapValue.fields}}function N_(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(H(u===void 0||typeof u=="string"),Ee.fromBase64String(u||"")):(H(u===void 0||u instanceof Uint8Array),Ee.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?p.UNKNOWN:vh(l.code);return new v(u,l.message||"")}(o);n=new Ih(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gs(t,r.document.name),s=ze(r.document.updateTime),o=r.document.createTime?ze(r.document.createTime):P.min(),a=new Ce({mapValue:{fields:r.document.fields}}),c=pe.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new zr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gs(t,r.document),s=r.readTime?ze(r.readTime):P.min(),o=pe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gs(t,r.document),s=r.removedTargetIds||[];n=new zr([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new w_(i,s),a=r.targetId;n=new Eh(a,o)}}return n}function O_(t,e){let n;if(e instanceof Er)n={update:Ac(t,e.key,e.value)};else if(e instanceof yh)n={delete:io(t,e.key)};else if(e instanceof $t)n={update:Ac(t,e.key,e.data),updateMask:z_(e.fieldMask)};else{if(!(e instanceof v_))return b();n={verify:io(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof nr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof rr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fi)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(t,e.precondition)),n}function M_(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ze(i.updateTime):ze(s);return o.isEqual(P.min())&&(o=ze(s)),new g_(o,i.transformResults||[])}(n,e))):[]}function L_(t,e){return{documents:[so(t,e.path)]}}function x_(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=so(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=so(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Rh(Le.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Yt(h.field),direction:B_(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ro(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function F_(t){let e=D_(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=bh(h);return d instanceof Le&&Zu(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Fn(Xt(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Bi(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new hi(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new hi(f,d)}(n.endAt)),r_(e,i,o,s,a,"F",c,l)}function U_(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bh(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xt(n.unaryFilter.field);return ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xt(n.unaryFilter.field);return ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xt(n.unaryFilter.field);return ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xt(n.unaryFilter.field);return ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(n){return ne.create(Xt(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Le.create(n.compositeFilter.filters.map(r=>bh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(t):b()}function B_(t){return P_[t]}function j_(t){return S_[t]}function q_(t){return C_[t]}function Yt(t){return{fieldPath:t.canonicalString()}}function Xt(t){return me.fromServerFormat(t.fieldPath)}function Rh(t){return t instanceof ne?function(n){if(n.op==="=="){if(uc(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NAN"}};if(lc(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uc(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NOT_NAN"}};if(lc(n.value))return{unaryFilter:{field:Yt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(n.field),op:j_(n.op),value:n.value}}}(t):t instanceof Le?function(n){const r=n.getFilters().map(i=>Rh(i));return r.length===1?r[0]:{compositeFilter:{op:q_(n.op),filters:r}}}(t):b()}function z_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ph(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ft{constructor(e,n,r,i,s=P.min(),o=P.min(),a=Ee.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class G_{constructor(e){this.ht=e}}function $_(t){const e=F_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?no(e,e.limit,"L"):e}/**
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
 */class W_{constructor(){this.an=new H_}addToCollectionParentIndex(e,n){return this.an.add(n),m.resolve()}getCollectionParents(e,n){return m.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return m.resolve()}deleteFieldIndex(e,n){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,n){return m.resolve()}getDocumentsMatchingTarget(e,n){return m.resolve(null)}getIndexType(e,n){return m.resolve(0)}getFieldIndexes(e,n){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,n){return m.resolve(Et.min())}getMinOffsetFromCollectionGroup(e,n){return m.resolve(Et.min())}updateCollectionGroup(e,n,r){return m.resolve()}updateIndexEntries(e,n){return m.resolve()}}class H_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ye(W.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ye(W.comparator)).toArray()}}/**
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
 */class fn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new fn(0)}static Ln(){return new fn(-1)}}/**
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
 */class K_{constructor(){this.changes=new wn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Q_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Y_{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&jn(r.mutation,i,Oe.empty(),re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,O()).next(()=>r))}getLocalViewOfDocuments(e,n,r=O()){const i=kt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Nn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,O()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=et();const o=Bn(),a=function(){return Bn()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof $t)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),jn(u.mutation,l,u.mutation.getFieldMask(),re.now())):o.set(l.key,Oe.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Q_(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bn();let i=new Q((o,a)=>o-a),s=O();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Oe.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||O()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=lh();u.forEach(d=>{if(!s.has(d)){const f=gh(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return T.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ih(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):m.resolve(kt());let a=-1,c=s;return o.next(l=>m.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?m.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,O())).next(u=>({batchId:a,changes:ch(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new T(n)).next(r=>{let i=Nn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Nn();return this.indexManager.getCollectionParents(e,s).next(a=>m.forEach(a,c=>{const l=function(h,d){return new vr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,pe.newInvalidDocument(u)))});let a=Nn();return o.forEach((c,l)=>{const u=s.get(c);u!==void 0&&jn(u.mutation,l,Oe.empty(),re.now()),qi(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class X_{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return m.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(n)),m.resolve()}getNamedQuery(e,n){return m.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:$_(i.bundledQuery),readTime:ze(i.readTime)}}(n)),m.resolve()}}/**
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
 */class J_{constructor(){this.overlays=new Q(T.comparator),this.Pr=new Map}getOverlay(e,n){return m.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kt();return m.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),m.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),m.resolve()}getOverlaysForCollection(e,n,r){const i=kt(),s=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Q((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=kt(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=kt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return m.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new I_(n,r));let s=this.Pr.get(n);s===void 0&&(s=O(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class na{constructor(){this.Ir=new ye(ie.dr),this.Tr=new ye(ie.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new ie(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new ie(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new T(new W([])),r=new ie(n,e),i=new ie(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new T(new W([])),r=new ie(n,e),i=new ie(n,e+1);let s=O();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ie(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ie{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return T.comparator(e.key,n.key)||B(e.yr,n.yr)}static Er(e,n){return B(e.yr,n.yr)||T.comparator(e.key,n.key)}}/**
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
 */class Z_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ye(ie.dr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new E_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,n){return m.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ie(n,0),i=new ie(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(B);return n.forEach(i=>{const s=new ie(i,0),o=new ie(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),m.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new ie(new T(s),0);let a=new ye(B);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.yr)),!0)},o),m.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){H(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return m.forEach(n.mutations,i=>{const s=new ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new ie(n,0),i=this.Sr.firstAfterOrEqual(r);return m.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ey{constructor(e){this.Fr=e,this.docs=function(){return new Q(T.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return m.resolve(r?r.document.mutableCopy():pe.newInvalidDocument(n))}getEntries(e,n){let r=et();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pe.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=et();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Bg(Ug(u),r)<=0||(i.has(u.key)||qi(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Mr(e,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ty(this)}getSize(e){return m.resolve(this.size)}}class ty extends K_{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),m.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class ny{constructor(e){this.persistence=e,this.Or=new wn(n=>Qo(n),Yo),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Nr=0,this.Br=new na,this.targetCount=0,this.Lr=fn.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),m.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new fn(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,m.resolve()}updateTargetData(e,n){return this.Qn(n),m.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return m.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),m.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),m.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return m.resolve(r)}containsKey(e,n){return m.resolve(this.Br.containsKey(n))}}/**
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
 */class ry{constructor(e,n){this.kr={},this.overlays={},this.qr=new $o(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new ny(this),this.indexManager=new W_,this.remoteDocumentCache=function(i){return new ey(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new G_(n),this.Ur=new X_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new J_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new Z_(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){E("MemoryPersistence","Starting transaction:",e);const i=new iy(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return m.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class iy extends qg{constructor(e){super(),this.currentSequenceNumber=e}}class ra{constructor(e){this.persistence=e,this.jr=new na,this.Hr=null}static Jr(e){return new ra(e)}get Yr(){if(this.Hr)return this.Hr;throw b()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),m.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),m.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Yr,r=>{const i=T.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,P.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return m.or([()=>m.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class ia{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=O(),i=O();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ia(e,n.fromCache,r,i)}}/**
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
 */class sy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oy{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new sy;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(kn()<=M.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",Qt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),m.resolve()):(kn()<=M.DEBUG&&E("QueryEngine","Query:",Qt(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(kn()<=M.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",Qt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(n))):m.resolve())}Hi(e,n){if(pc(n))return m.resolve(null);let r=je(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=no(n,null,"F"),r=je(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=O(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,no(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,i){return pc(n)||i.isEqual(P.min())?m.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?m.resolve(null):(kn()<=M.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qt(n)),this.ts(e,o,n,Fg(i,-1)).next(a=>a))})}Xi(e,n){let r=new ye(oh(e));return n.forEach((i,s)=>{qi(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return kn()<=M.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Qt(n)),this.ji.getDocumentsMatchingQuery(e,n,Et.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ay{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new Q(B),this.ss=new wn(s=>Qo(s),Yo),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y_(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function cy(t,e,n,r){return new ay(t,e,n,r)}async function Sh(t,e){const n=C(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=O();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function ly(t,e){const n=C(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=m.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(c,g)).next(I=>{const _=l.docVersions.get(g);H(_!==null),I.version.compareTo(_)<0&&(h.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),u.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=O();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ch(t){const e=C(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function uy(t,e){const n=C(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ee.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(I,_,V){return I.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(d,f,u)&&a.push(n.Kr.updateTargetData(s,f))});let c=et(),l=O();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(hy(s,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(P.min())){const u=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.rs=i,s))}function hy(t,e,n){let r=O(),i=O();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=et();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:i}})}function dy(t,e){const n=C(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fy(t,e){const n=C(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new ft(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function ao(t,e,n){const r=C(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yr(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function bc(t,e,n){const r=C(t);let i=P.min(),s=O();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=C(c),d=h.ss.get(u);return d!==void 0?m.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,je(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:P.min(),n?s:O())).next(a=>(py(r,s_(e),a),{documents:a,Ps:s})))}function py(t,e,n){let r=t.os.get(e)||P.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class Rc{constructor(){this.activeTargetIds=h_()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class my{constructor(){this.ro=new Rc,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Rc,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gy{so(e){}shutdown(){}}/**
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
 */class Pc{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xr=null;function _s(){return xr===null?xr=function(){return 268435456+Math.round(2147483648*Math.random())}():xr++,"0x"+xr.toString(16)}/**
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
 */const _y={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yy{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const de="WebChannelConnection";class vy extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=_s(),c=this.Do(n,r);E("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,s,o),this.vo(n,c,l,i).then(u=>(E("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ln("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+En}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=_y[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=_s();return new Promise((o,a)=>{const c=new Pg;c.setWithCredentials(!0),c.listenOnce(bg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ms.NO_ERROR:const u=c.getResponseJson();E(de,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ms.TIMEOUT:E(de,`RPC '${e}' ${s} timed out`),a(new v(p.DEADLINE_EXCEEDED,"Request time out"));break;case ms.HTTP_ERROR:const h=c.getStatus();if(E(de,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(_){const V=_.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(V)>=0?V:p.UNKNOWN}(f.status);a(new v(g,f.message))}else a(new v(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new v(p.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{E(de,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);E(de,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const i=_s(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Tg(),a=Ag(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");E(de,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new yy({ho:_=>{f?E(de,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(E(de,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),E(de,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},Po:()=>h.close()}),I=(_,V,x)=>{_.listen(V,K=>{try{x(K)}catch(X){setTimeout(()=>{throw X},0)}})};return I(h,Or.EventType.OPEN,()=>{f||E(de,`RPC '${e}' stream ${i} transport opened.`)}),I(h,Or.EventType.CLOSE,()=>{f||(f=!0,E(de,`RPC '${e}' stream ${i} transport closed`),g.mo())}),I(h,Or.EventType.ERROR,_=>{f||(f=!0,ln(de,`RPC '${e}' stream ${i} transport errored:`,_),g.mo(new v(p.UNAVAILABLE,"The operation could not be completed")))}),I(h,Or.EventType.MESSAGE,_=>{var V;if(!f){const x=_.data[0];H(!!x);const K=x,X=K.error||((V=K[0])===null||V===void 0?void 0:V.error);if(X){E(de,`RPC '${e}' stream ${i} received error:`,X);const he=X.status;let A=function(De){const xe=ee[De];if(xe!==void 0)return vh(xe)}(he),Ve=X.message;A===void 0&&(A=p.INTERNAL,Ve="Unknown error status: "+he+" with message "+X.message),f=!0,g.mo(new v(A,Ve)),h.close()}else E(de,`RPC '${e}' stream ${i} received:`,x),g.fo(x)}}),I(a,Rg.STAT_EVENT,_=>{_.stat===rc.PROXY?E(de,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===rc.NOPROXY&&E(de,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Vo()},0),g}}function ys(){return typeof document<"u"?document:null}/**
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
 */function Wi(t){return new k_(t,!0)}/**
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
 */class kh{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Vh{constructor(e,n,r,i,s,o,a,c){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new kh(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Ze(n.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new v(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ey extends Vh{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=N_(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?ze(o.readTime):P.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=oo(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=eo(c)?{documents:L_(s,c)}:{query:x_(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wh(s,o.resumeToken);const l=ro(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=pi(s,o.snapshotVersion.toTimestamp());const l=ro(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=U_(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=oo(this.serializer),n.removeTarget=e,this.n_(n)}}class Iy extends Vh{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=M_(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.T_(r,n)}return H(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=oo(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>O_(this.serializer,r))};this.n_(n)}}/**
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
 */class wy extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(p.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new v(p.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class Ty{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Ze(n),this.p_=!1):E("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class Ay{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Wt(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=C(c);l.F_.add(4),await wr(l),l.O_.set("Unknown"),l.F_.delete(4),await Hi(l)}(this))})}),this.O_=new Ty(r,i)}}async function Hi(t){if(Wt(t))for(const e of t.M_)await e(!0)}async function wr(t){for(const e of t.M_)await e(!1)}function Dh(t,e){const n=C(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),aa(n)?oa(n):Tn(n).Yo()&&sa(n,e))}function Nh(t,e){const n=C(t),r=Tn(n);n.v_.delete(e),r.Yo()&&Oh(n,e),n.v_.size===0&&(r.Yo()?r.e_():Wt(n)&&n.O_.set("Unknown"))}function sa(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Tn(t).l_(e)}function Oh(t,e){t.N_.Le(e),Tn(t).h_(e)}function oa(t){t.N_=new R_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Tn(t).start(),t.O_.y_()}function aa(t){return Wt(t)&&!Tn(t).Jo()&&t.v_.size>0}function Wt(t){return C(t).F_.size===0}function Mh(t){t.N_=void 0}async function by(t){t.v_.forEach((e,n)=>{sa(t,e)})}async function Ry(t,e){Mh(t),aa(t)?(t.O_.b_(e),oa(t)):t.O_.set("Unknown")}async function Py(t,e,n){if(t.O_.set("Online"),e instanceof Ih&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mi(t,r)}else if(e instanceof zr?t.N_.Ge(e):e instanceof Eh?t.N_.Xe(e):t.N_.He(e),!n.isEqual(P.min()))try{const r=await Ch(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.v_.get(l);u&&s.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.v_.get(c);if(!u)return;s.v_.set(c,u.withResumeToken(Ee.EMPTY_BYTE_STRING,u.snapshotVersion)),Oh(s,c);const h=new ft(u.target,c,l,u.sequenceNumber);sa(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await mi(t,r)}}async function mi(t,e,n){if(!yr(e))throw e;t.F_.add(1),await wr(t),t.O_.set("Offline"),n||(n=()=>Ch(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Hi(t)})}function Lh(t,e){return e().catch(n=>mi(t,n,e))}async function Ki(t){const e=C(t),n=wt(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;Sy(e);)try{const i=await dy(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,Cy(e,i)}catch(i){await mi(e,i)}xh(e)&&Fh(e)}function Sy(t){return Wt(t)&&t.C_.length<10}function Cy(t,e){t.C_.push(e);const n=wt(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function xh(t){return Wt(t)&&!wt(t).Jo()&&t.C_.length>0}function Fh(t){wt(t).start()}async function ky(t){wt(t).A_()}async function Vy(t){const e=wt(t);for(const n of t.C_)e.d_(n.mutations)}async function Dy(t,e,n){const r=t.C_.shift(),i=Zo.from(r,e,n);await Lh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ki(t)}async function Ny(t,e){e&&wt(t).I_&&await async function(r,i){if(function(o){return T_(o)&&o!==p.ABORTED}(i.code)){const s=r.C_.shift();wt(r).Xo(),await Lh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ki(r)}}(t,e),xh(t)&&Fh(t)}async function Sc(t,e){const n=C(t);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=Wt(n);n.F_.add(3),await wr(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Hi(n)}async function Oy(t,e){const n=C(t);e?(n.F_.delete(2),await Hi(n)):e||(n.F_.add(2),await wr(n),n.O_.set("Unknown"))}function Tn(t){return t.B_||(t.B_=function(n,r,i){const s=C(n);return s.V_(),new Ey(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:by.bind(null,t),Eo:Ry.bind(null,t),c_:Py.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),aa(t)?oa(t):t.O_.set("Unknown")):(await t.B_.stop(),Mh(t))})),t.B_}function wt(t){return t.L_||(t.L_=function(n,r,i){const s=C(n);return s.V_(),new Iy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:ky.bind(null,t),Eo:Ny.bind(null,t),E_:Vy.bind(null,t),T_:Dy.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Ki(t)):(await t.L_.stop(),t.C_.length>0&&(E("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class ca{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ca(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(t,e){if(Ze("AsyncQueue",`${e}: ${t}`),yr(t))return new v(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class nn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||T.comparator(n.key,r.key):(n,r)=>T.comparator(n.key,r.key),this.keyedMap=Nn(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new nn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new nn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Cc{constructor(){this.k_=new Q(T.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):b():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class pn{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new pn(e,n,nn.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ji(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class My{constructor(){this.Q_=void 0,this.listeners=[]}}class Ly{constructor(){this.queries=new wn(e=>sh(e),ji),this.onlineState="Unknown",this.K_=new Set}}async function Uh(t,e){const n=C(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new My),i)try{s.Q_=await n.onListen(r)}catch(o){const a=la(o,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&ua(n)}async function Bh(t,e){const n=C(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xy(t,e){const n=C(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&ua(n)}function Fy(t,e,n){const r=C(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ua(t){t.K_.forEach(e=>{e.next()})}class jh{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class qh{constructor(e){this.key=e}}class zh{constructor(e){this.key=e}}class Uy{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=O(),this.mutatedKeys=O(),this.ua=oh(e),this.ca=new nn(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Cc,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=qi(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?g!==I&&(r.track({type:3,doc:f}),_=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.ua(f,c)>0||l&&this.ua(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),s=I?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((l,u)=>function(d,f){const g=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(d)-g(f)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,s.length!==0||c?{snapshot:new pn(this.query,e.ca,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Cc,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=O(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new zh(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new qh(r))}),n}Ra(e){this.oa=e.Ps,this.aa=O();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return pn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class By{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jy{constructor(e){this.key=e,this.ma=!1}}class qy{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new wn(a=>sh(a),ji),this.pa=new Map,this.ya=new Set,this.wa=new Q(T.comparator),this.Sa=new Map,this.ba=new na,this.Da={},this.Ca=new Map,this.va=fn.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function zy(t,e){const n=Zy(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await fy(n.localStore,je(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Gy(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Dh(n.remoteStore,o)}return i}async function Gy(t,e,n,r,i){t.Ma=(h,d,f)=>async function(I,_,V,x){let K=_.view.ha(V);K.es&&(K=await bc(I.localStore,_.query,!1).then(({documents:A})=>_.view.ha(A,K)));const X=x&&x.targetChanges.get(_.targetId),he=_.view.applyChanges(K,I.isPrimaryClient,X);return Vc(I,_.targetId,he.Ea),he.snapshot}(t,h,d,f);const s=await bc(t.localStore,e,!0),o=new Uy(e,s.Ps),a=o.ha(s.documents),c=Ir.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Vc(t,n,l.Ea);const u=new By(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function $y(t,e){const n=C(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!ji(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ao(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Nh(n.remoteStore,r.targetId),co(n,r.targetId)}).catch(_r)):(co(n,r.targetId),await ao(n.localStore,r.targetId,!0))}async function Wy(t,e,n){const r=ev(t);try{const i=await function(o,a){const c=C(o),l=re.now(),u=a.reduce((f,g)=>f.add(g.key),O());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=et(),I=O();return c._s.getEntries(f,u).next(_=>{g=_,g.forEach((V,x)=>{x.isValidDocument()||(I=I.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(_=>{h=_;const V=[];for(const x of a){const K=y_(x,h.get(x.key).overlayedDocument);K!=null&&V.push(new $t(x.key,K,Yu(K.value.mapValue),qe.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,V,a)}).next(_=>{d=_;const V=_.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,_.batchId,V)})}).then(()=>({batchId:d.batchId,changes:ch(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Q(B)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,i.batchId,n),await Tr(r,i.changes),await Ki(r.remoteStore)}catch(i){const s=la(i,"Failed to persist write");n.reject(s)}}async function Gh(t,e){const n=C(t);try{const r=await uy(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?H(o.ma):i.removedDocuments.size>0&&(H(o.ma),o.ma=!1))}),await Tr(n,r,e)}catch(r){await _r(r)}}function kc(t,e,n){const r=C(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=C(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&ua(c)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hy(t,e,n){const r=C(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new Q(T.comparator);o=o.insert(s,pe.newNoDocument(s,P.min()));const a=O().add(s),c=new $i(P.min(),new Map,new Q(B),o,a);await Gh(r,c),r.wa=r.wa.remove(s),r.Sa.delete(e),ha(r)}else await ao(r.localStore,e,!1).then(()=>co(r,e,n)).catch(_r)}async function Ky(t,e){const n=C(t),r=e.batch.batchId;try{const i=await ly(n.localStore,e);Wh(n,r,null),$h(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tr(n,i)}catch(i){await _r(i)}}async function Qy(t,e,n){const r=C(t);try{const i=await function(o,a){const c=C(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(H(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Wh(r,e,n),$h(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tr(r,i)}catch(i){await _r(i)}}function $h(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Wh(t,e,n){const r=C(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function co(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Hh(t,r)})}function Hh(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Nh(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),ha(t))}function Vc(t,e,n){for(const r of n)r instanceof qh?(t.ba.addReference(r.key,e),Yy(t,r)):r instanceof zh?(E("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Hh(t,r.key)):b()}function Yy(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(E("SyncEngine","New document in limbo: "+n),t.ya.add(r),ha(t))}function ha(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new T(W.fromString(e)),r=t.va.next();t.Sa.set(r,new jy(n)),t.wa=t.wa.insert(n,r),Dh(t.remoteStore,new ft(je(Xo(n.path)),r,"TargetPurposeLimboResolution",$o.ae))}}async function Tr(t,e,n){const r=C(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=ia.$i(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.fa.c_(i),await async function(c,l){const u=C(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(l,d=>m.forEach(d.Qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.Ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!yr(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.rs.get(d),g=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(g);u.rs=u.rs.insert(d,I)}}}(r.localStore,s))}async function Xy(t,e){const n=C(t);if(!n.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const r=await Sh(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new v(p.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tr(n,r.cs)}}function Jy(t,e){const n=C(t),r=n.Sa.get(e);if(r&&r.ma)return O().add(r.key);{let i=O();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Zy(t){const e=C(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hy.bind(null,e),e.fa.c_=xy.bind(null,e.eventManager),e.fa.xa=Fy.bind(null,e.eventManager),e}function ev(t){const e=C(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ky.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qy.bind(null,e),e}class Dc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cy(this.persistence,new oy,e.initialUser,this.serializer)}createPersistence(e){return new ry(ra.Jr,this.serializer)}createSharedClientState(e){return new my}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xy.bind(null,this.syncEngine),await Oy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ly}()}createDatastore(e){const n=Wi(e.databaseInfo.databaseId),r=function(s){return new vy(s)}(e.databaseInfo);return function(s,o,a,c){return new wy(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Ay(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>kc(this.syncEngine,n,0),function(){return Pc.C()?new Pc:new gy}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new qy(i,s,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=C(n);E("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await wr(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Kh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Ze("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class nv{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=Hu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{E("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(E("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=la(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vs(t,e){t.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Sh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iv(t);E("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Sc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Sc(e.remoteStore,s)),t._onlineComponents=e}function rv(t){return t.name==="FirebaseError"?t.code===p.FAILED_PRECONDITION||t.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await vs(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rv(n))throw n;ln("Error using user provided cache. Falling back to memory cache: "+n),await vs(t,new Dc)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await vs(t,new Dc);return t._offlineComponents}async function Qh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await Nc(t,t._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await Nc(t,new tv))),t._onlineComponents}function sv(t){return Qh(t).then(e=>e.syncEngine)}async function Yh(t){const e=await Qh(t),n=e.eventManager;return n.onListen=zy.bind(null,e.syncEngine),n.onUnlisten=$y.bind(null,e.syncEngine),n}function ov(t,e,n={}){const r=new Xe;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Kh({next:d=>{o.enqueueAndForget(()=>Bh(s,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new v(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new v(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new jh(Xo(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Uh(s,h)}(await Yh(t),t.asyncQueue,e,n,r)),r.promise}function av(t,e,n={}){const r=new Xe;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Kh({next:d=>{o.enqueueAndForget(()=>Bh(s,h)),d.fromCache&&c.source==="server"?l.reject(new v(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new jh(a,u,{includeMetadataChanges:!0,Z_:!0});return Uh(s,h)}(await Yh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Xh(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Oc=new Map;/**
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
 */function Jh(t,e,n){if(!n)throw new v(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cv(t,e,n,r){if(e===!0&&r===!0)throw new v(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mc(t){if(!T.isDocumentKey(t))throw new v(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lc(t){if(T.isDocumentKey(t))throw new v(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new v(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qi(t);throw new v(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class xc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new v(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yi{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cg;switch(r.type){case"firstParty":return new Ng(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new v(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oc.get(n);r&&(E("ComponentProvider","Removing Datastore"),Oc.delete(n),r.terminate())}(this),Promise.resolve()}}function lv(t,e,n,r={}){var i;const s=(t=Tt(t,Yi))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=fe.MOCK_USER;else{a=ep(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new v(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new fe(l)}t._authCredentials=new kg(new Wu(a,c))}}/**
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
 */class An{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}}class _t extends An{constructor(e,n,r){super(e,n,Xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new T(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function WI(t,e,...n){if(t=ke(t),Jh("collection","path",e),t instanceof Yi){const r=W.fromString(e,...n);return Lc(r),new _t(t,null,r)}{if(!(t instanceof be||t instanceof _t))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(W.fromString(e,...n));return Lc(r),new _t(t.firestore,null,r)}}function uv(t,e,...n){if(t=ke(t),arguments.length===1&&(e=Hu.V()),Jh("doc","path",e),t instanceof Yi){const r=W.fromString(e,...n);return Mc(r),new be(t,null,new T(r))}{if(!(t instanceof be||t instanceof _t))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(W.fromString(e,...n));return Mc(r),new be(t.firestore,t instanceof _t?t.converter:null,new T(r))}}/**
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
 */class hv{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new kh(this,"async_queue_retry"),this.ou=()=>{const n=ys();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=ys();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=ys();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Xe;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!yr(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=ca.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&b()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class Ar extends Yi{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new hv}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zh(this),this._firestoreClient.terminate()}}function dv(t,e){const n=typeof t=="object"?t:Io(),r=typeof t=="string"?t:e||"(default)",i=Eo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jf("firestore");s&&lv(i,...s)}return i}function da(t){return t._firestoreClient||Zh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zh(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new $g(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Xh(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new nv(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mn(Ee.fromBase64String(e))}catch(n){throw new v(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mn(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new v(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ed{constructor(e){this._methodName=e}}/**
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
 */class pa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new v(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new v(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
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
 */const fv=/^__.*__$/;class pv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,n,this.fieldTransforms):new Er(e,this.data,n,this.fieldTransforms)}}function td(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class ma{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new ma(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return gi(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(td(this.Tu)&&fv.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class mv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wi(e)}wu(e,n,r,i=!1){return new ma({Tu:e,methodName:n,yu:r,path:me.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ga(t){const e=t._freezeSettings(),n=Wi(t._databaseId);return new mv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nd(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);sd("Data must be an object, but it was:",o,r);const a=rd(r,o);let c,l;if(s.merge)c=new Oe(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=_v(e,h,n);if(!o.contains(d))throw new v(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vv(u,d)||u.push(d)}c=new Oe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new pv(new Ce(a),c,l)}function gv(t,e,n,r=!1){return _a(n,t.wu(r?4:3,e))}function _a(t,e){if(id(t=ke(t)))return sd("Unsupported field value:",e,t),rd(t,e);if(t instanceof ed)return function(r,i){if(!td(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=_a(a,i.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=re.fromDate(r);return{timestampValue:pi(i.serializer,s)}}if(r instanceof re){const s=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pi(i.serializer,s)}}if(r instanceof pa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mn)return{bytesValue:wh(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ta(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Qi(r)}`)}(t,e)}function rd(t,e){const n={};return Ku(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):In(t,(r,i)=>{const s=_a(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function id(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof re||t instanceof pa||t instanceof mn||t instanceof be||t instanceof ed)}function sd(t,e,n){if(!id(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Qi(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function _v(t,e,n){if((e=ke(e))instanceof fa)return e._internalPath;if(typeof e=="string")return od(t,e);throw gi("Field path arguments must be of type string or ",t,!1,void 0,n)}const yv=new RegExp("[~\\*/\\[\\]]");function od(t,e,n){if(e.search(yv)>=0)throw gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fa(...e.split("."))._internalPath}catch{throw gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gi(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new v(p.INVALID_ARGUMENT,a+t+c)}function vv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ad{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ev(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ya("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ev extends ad{data(){return super.data()}}function ya(t,e){return typeof e=="string"?od(t,e):e instanceof fa?e._internalPath:e._delegate._internalPath}/**
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
 */function Iv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new v(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class va{}class wv extends va{}function HI(t,e,...n){let r=[];e instanceof va&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Ea).length,a=s.filter(c=>c instanceof Xi).length;if(o>1||o>0&&a>0)throw new v(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Xi extends wv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xi(e,n,r)}_apply(e){const n=this._parse(e);return cd(e._query,n),new An(e.firestore,e.converter,to(e._query,n))}_parse(e){const n=ga(e.firestore);return function(s,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new v(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Uc(h,u);const f=[];for(const g of h)f.push(Fc(c,s,g));d={arrayValue:{values:f}}}else d=Fc(c,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Uc(h,u),d=gv(a,o,h,u==="in"||u==="not-in");return ne.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function KI(t,e,n){const r=e,i=ya("where",t);return Xi._create(i,r,n)}class Ea extends va{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ea(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Le.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)cd(o,c),o=to(o,c)}(e._query,n),new An(e.firestore,e.converter,to(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Fc(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new v(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ih(e)&&n.indexOf("/")!==-1)throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(W.fromString(n));if(!T.isDocumentKey(r))throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cc(t,new T(r))}if(n instanceof be)return cc(t,n._key);throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qi(n)}.`)}function Uc(t,e){if(!Array.isArray(t)||t.length===0)throw new v(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cd(t,e){if(e.isInequality()){const r=Jo(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new v(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=rh(t);s!==null&&Tv(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new v(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new v(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Tv(t,e,n){if(!n.isEqual(e))throw new v(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Av{convertValue(e,n="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return In(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new pa(te(e.latitude),te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ho(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zn(e));default:return null}}convertTimestamp(e){const n=It(e);return new re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=W.fromString(e);H(Ph(r));const i=new er(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(n)||Ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ld(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Mn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ud extends ad{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ya("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gr extends ud{data(e={}){return super.data(e)}}class bv{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Mn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gr(this._firestore,this._userDataWriter,r.key,r,new Mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Gr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Mn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Gr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Mn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Rv(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
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
 */function QI(t){t=Tt(t,be);const e=Tt(t.firestore,Ar);return ov(da(e),t._key).then(n=>Pv(e,t,n))}class hd extends Av{constructor(e){super(),this.firestore=e}convertBytes(e){return new mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function YI(t){t=Tt(t,An);const e=Tt(t.firestore,Ar),n=da(e),r=new hd(e);return Iv(t._query),av(n,t._query).then(i=>new bv(e,r,t,i))}function XI(t,e,n){t=Tt(t,be);const r=Tt(t.firestore,Ar),i=ld(t.converter,e,n);return dd(r,[nd(ga(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qe.none())])}function JI(t,e){const n=Tt(t.firestore,Ar),r=uv(t),i=ld(t.converter,e);return dd(n,[nd(ga(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then(()=>r)}function dd(t,e){return function(r,i){const s=new Xe;return r.asyncQueue.enqueueAndForget(async()=>Wy(await sv(r),i,s)),s.promise}(da(t),e)}function Pv(t,e,n){const r=n.docs.get(e._key),i=new hd(t);return new ud(t,i,e._key,r,new Mn(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){En=i})(_n),an(new Lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ar(new Vg(r.getProvider("auth-internal")),new Mg(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new v(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),gt(ic,"4.2.0",e),gt(ic,"4.2.0","esm2017")})();function Ia(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sv=fd,pd=new ar("auth","Firebase",fd());/**
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
 */const _i=new yo("@firebase/auth");function Cv(t,...e){_i.logLevel<=M.WARN&&_i.warn(`Auth (${_n}): ${t}`,...e)}function $r(t,...e){_i.logLevel<=M.ERROR&&_i.error(`Auth (${_n}): ${t}`,...e)}/**
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
 */function He(t,...e){throw wa(t,...e)}function Ge(t,...e){return wa(t,...e)}function md(t,e,n){const r=Object.assign(Object.assign({},Sv()),{[e]:n});return new ar("auth","Firebase",r).create(e,{appName:t.name})}function kv(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&He(t,"argument-error"),md(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wa(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pd.create(t,...e)}function S(t,e,...n){if(!t)throw wa(e,...n)}function Qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $r(e),new Error(e)}function tt(t,e){t||Qe(e)}/**
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
 */function lo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vv(){return Bc()==="http:"||Bc()==="https:"}function Bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Dv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vv()||np()||"connection"in navigator)?navigator.onLine:!0}function Nv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class br{constructor(e,n){this.shortDelay=e,this.longDelay=n,tt(n>e,"Short delay should be less than long delay!"),this.isMobile=tp()||rp()}get(){return Dv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ta(t,e){tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ov={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mv=new br(3e4,6e4);function _d(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rr(t,e,n,r,i={}){return yd(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=cr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gd.fetch()(vd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function yd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ov),e);try{const i=new xv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw md(t,u,l);He(t,u)}}catch(i){if(i instanceof rt)throw i;He(t,"network-request-failed",{message:String(i)})}}async function Lv(t,e,n,r,i={}){const s=await Rr(t,e,n,r,i);return"mfaPendingCredential"in s&&He(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vd(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ta(t.config,i):`${t.config.apiScheme}://${i}`}class xv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),Mv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Fv(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function Uv(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bv(t,e=!1){const n=ke(t),r=await n.getIdToken(e),i=Aa(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qn(Es(i.auth_time)),issuedAtTime:qn(Es(i.iat)),expirationTime:qn(Es(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Es(t){return Number(t)*1e3}function Aa(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $r("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ll(n);return i?JSON.parse(i):($r("Failed to decode base64 JWT payload"),null)}catch(i){return $r("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jv(t){const e=Aa(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ir(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rt&&qv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ir(t,Uv(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Wv(s.providerUserInfo):[],a=$v(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ed(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Gv(t){const e=ke(t);await yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $v(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wv(t){return t.map(e=>{var{providerId:n}=e,r=Ia(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Hv(t,e){const n=await yd(t,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vd(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Hv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new sr;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sr,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
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
 */function ct(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ia(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ed(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ir(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bv(this,e)}reload(){return Gv(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ir(this,Fv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:X,isAnonymous:he,providerData:A,stsTokenManager:Ve}=n;S(K&&Ve,e,"internal-error");const it=sr.fromJSON(this.name,Ve);S(typeof K=="string",e,"internal-error"),ct(h,e.name),ct(d,e.name),S(typeof X=="boolean",e,"internal-error"),S(typeof he=="boolean",e,"internal-error"),ct(f,e.name),ct(g,e.name),ct(I,e.name),ct(_,e.name),ct(V,e.name),ct(x,e.name);const De=new Nt({uid:K,auth:e,email:d,emailVerified:X,displayName:h,isAnonymous:he,photoURL:g,phoneNumber:f,tenantId:I,stsTokenManager:it,createdAt:V,lastLoginAt:x});return A&&Array.isArray(A)&&(De.providerData=A.map(xe=>Object.assign({},xe))),_&&(De._redirectEventId=_),De}static async _fromIdTokenResponse(e,n,r=!1){const i=new sr;i.updateFromServerResponse(n);const s=new Nt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yi(s),s}}/**
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
 */const jc=new Map;function Ye(t){tt(t instanceof Function,"Expected a class definition");let e=jc.get(t);return e?(tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jc.set(t,e),e)}/**
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
 */class Id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Id.type="NONE";const qc=Id;/**
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
 */function Wr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(Ye(qc),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ye(qc);const o=Wr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Nt._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new rn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new rn(s,e,r))}}/**
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
 */function zc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ad(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rd(e))return"Blackberry";if(Pd(e))return"Webos";if(ba(e))return"Safari";if((e.includes("chrome/")||Td(e))&&!e.includes("edge/"))return"Chrome";if(bd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wd(t=ve()){return/firefox\//i.test(t)}function ba(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Td(t=ve()){return/crios\//i.test(t)}function Ad(t=ve()){return/iemobile/i.test(t)}function bd(t=ve()){return/android/i.test(t)}function Rd(t=ve()){return/blackberry/i.test(t)}function Pd(t=ve()){return/webos/i.test(t)}function Ji(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kv(t=ve()){var e;return Ji(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qv(){return ip()&&document.documentMode===10}function Sd(t=ve()){return Ji(t)||bd(t)||Pd(t)||Rd(t)||/windows phone/i.test(t)||Ad(t)}function Yv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Cd(t,e=[]){let n;switch(t){case"Browser":n=zc(ve());break;case"Worker":n=`${zc(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_n}/${r}`}/**
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
 */class Xv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Jv(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",_d(t,e))}/**
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
 */const Zv=6;class eE{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Zv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class tE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gc(this),this.idTokenSubscription=new Gc(this),this.beforeStateQueue=new Xv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jv(this),n=new eE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Cv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zi(t){return ke(t)}class Gc{constructor(e){this.auth=e,this.observer=null,this.addObserver=hp(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function nE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ge("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nE().appendChild(r)})}function iE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sE(t,e){const n=Eo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ni(s,e??{}))return i;He(i,"already-initialized")}return n.initialize({options:e})}function oE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ye);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aE(t,e,n){const r=Zi(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kd(e),{host:o,port:a}=cE(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lE()}function kd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cE(t){const e=kd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$c(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$c(o)}}}function $c(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,n){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}/**
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
 */async function sn(t,e){return Lv(t,"POST","/v1/accounts:signInWithIdp",_d(t,e))}/**
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
 */const uE="http://localhost";class qt extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ia(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:uE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cr(n)}return e}}/**
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
 */class Ra{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pr extends Ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lt extends Pr{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
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
 */class ut extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class ht extends Pr{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
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
 */class dt extends Pr{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nt._fromIdTokenResponse(e,r,i),o=Wc(r);return new gn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wc(r);return new gn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vi extends rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vi(e,n,r,i)}}function Dd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vi._fromErrorAndOperation(t,s,e,r):s})}async function hE(t,e,n=!1){const r=await ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gn._forOperation(t,"link",r)}/**
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
 */async function dE(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ir(t,Dd(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=Aa(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),gn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&He(r,"user-mismatch"),s}}/**
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
 */async function fE(t,e,n=!1){const r="signIn",i=await Dd(t,r,e),s=await gn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function pE(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function mE(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}const Ei="__sak";/**
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
 */class Nd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ei,"1"),this.storage.removeItem(Ei),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gE(){const t=ve();return ba(t)||Ji(t)}const _E=1e3,yE=10;class Od extends Nd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gE()&&Yv(),this.fallbackToPolling=Sd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Qv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_E)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Od.type="LOCAL";const vE=Od;/**
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
 */class Md extends Nd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Md.type="SESSION";const Ld=Md;/**
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
 */function EE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new es(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await EE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}es.receivers=[];/**
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
 */function Pa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Pa("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $e(){return window}function wE(t){$e().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function xd(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function TE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bE(){return xd()?self:null}/**
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
 */const Fd="firebaseLocalStorageDb",RE=1,Ii="firebaseLocalStorage",Ud="fbase_key";class Sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ts(t,e){return t.transaction([Ii],e?"readwrite":"readonly").objectStore(Ii)}function PE(){const t=indexedDB.deleteDatabase(Fd);return new Sr(t).toPromise()}function uo(){const t=indexedDB.open(Fd,RE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ii,{keyPath:Ud})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ii)?e(r):(r.close(),await PE(),e(await uo()))})})}async function Hc(t,e,n){const r=ts(t,!0).put({[Ud]:e,value:n});return new Sr(r).toPromise()}async function SE(t,e){const n=ts(t,!1).get(e),r=await new Sr(n).toPromise();return r===void 0?null:r.value}function Kc(t,e){const n=ts(t,!0).delete(e);return new Sr(n).toPromise()}const CE=800,kE=3;class Bd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=es._getInstance(bE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TE(),!this.activeServiceWorker)return;this.sender=new IE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uo();return await Hc(e,Ei,"1"),await Kc(e,Ei),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ts(i,!1).getAll();return new Sr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bd.type="LOCAL";const VE=Bd;new br(3e4,6e4);/**
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
 */function jd(t,e){return e?Ye(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sa extends Vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DE(t){return fE(t.auth,new Sa(t),t.bypassAuthState)}function NE(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),dE(n,new Sa(t),t.bypassAuthState)}async function OE(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),hE(n,new Sa(t),t.bypassAuthState)}/**
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
 */class qd{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DE;case"linkViaPopup":case"linkViaRedirect":return OE;case"reauthViaPopup":case"reauthViaRedirect":return NE;default:He(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ME=new br(2e3,1e4);async function ZI(t,e,n){const r=Zi(t);kv(t,e,Ra);const i=jd(r,n);return new Vt(r,"signInViaPopup",e,i).executeNotNull()}class Vt extends qd{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ME.get())};e()}}Vt.currentPopupAction=null;/**
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
 */const LE="pendingRedirect",Hr=new Map;class xE extends qd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const r=await FE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FE(t,e){const n=jE(e),r=BE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UE(t,e){Hr.set(t._key(),e)}function BE(t){return Ye(t._redirectPersistence)}function jE(t){return Wr(LE,t.config.apiKey,t.name)}async function qE(t,e,n=!1){const r=Zi(t),i=jd(r,e),o=await new xE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zE=10*60*1e3;class GE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$E(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qc(e))}saveEventToCache(e){this.cachedEventUids.add(Qc(e)),this.lastProcessedEventTime=Date.now()}}function Qc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $E(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zd(t);default:return!1}}/**
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
 */async function WE(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
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
 */const HE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KE=/^https?/;async function QE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WE(t);for(const n of e)try{if(YE(n))return}catch{}He(t,"unauthorized-domain")}function YE(t){const e=lo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KE.test(n))return!1;if(HE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const XE=new br(3e4,6e4);function Yc(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JE(t){return new Promise((e,n)=>{var r,i,s;function o(){Yc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yc(),n(Ge(t,"network-request-failed"))},timeout:XE.get()})}if(!((i=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$e().gapi)===null||s===void 0)&&s.load)o();else{const a=iE("iframefcb");return $e()[a]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},rE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Kr=null,e})}let Kr=null;function ZE(t){return Kr=Kr||JE(t),Kr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const eI=new br(5e3,15e3),tI="__/auth/iframe",nI="emulator/auth/iframe",rI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sI(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ta(e,nI):`https://${t.config.authDomain}/${tI}`,r={apiKey:e.apiKey,appName:t.name,v:_n},i=iI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${cr(r).slice(1)}`}async function oI(t){const e=await ZE(t),n=$e().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:sI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),a=$e().setTimeout(()=>{s(o)},eI.get());function c(){$e().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const aI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cI=500,lI=600,uI="_blank",hI="http://localhost";class Xc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dI(t,e,n,r=cI,i=lI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},aI),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ve().toLowerCase();n&&(a=Td(l)?uI:n),wd(l)&&(e=e||hI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Kv(l)&&a!=="_self")return fI(e||"",a),new Xc(null);const h=window.open(e||"",a,u);S(h,t,"popup-blocked");try{h.focus()}catch{}return new Xc(h)}function fI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pI="__/auth/handler",mI="emulator/auth/handler",gI=encodeURIComponent("fac");async function Jc(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_n,eventId:i};if(e instanceof Ra){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",up(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Pr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${gI}=${encodeURIComponent(c)}`:"";return`${_I(t)}?${cr(a).slice(1)}${l}`}function _I({config:t}){return t.emulator?Ta(t,mI):`https://${t.authDomain}/${pI}`}/**
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
 */const Is="webStorageSupport";class yI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ld,this._completeRedirectFn=qE,this._overrideRedirectResult=UE}async _openPopup(e,n,r,i){var s;tt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jc(e,n,r,lo(),i);return dI(e,o,Pa())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jc(e,n,r,lo(),i);return wE(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oI(e),r=new GE(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Is,{type:Is},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Is];o!==void 0&&n(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sd()||ba()||Ji()}}const vI=yI;var Zc="@firebase/auth",el="1.3.0";/**
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
 */class EI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function II(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wI(t){an(new Lt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cd(t)},l=new tE(r,i,s,c);return oE(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new Lt("auth-internal",e=>{const n=Zi(e.getProvider("auth").getImmediate());return(r=>new EI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(Zc,el,II(t)),gt(Zc,el,"esm2017")}/**
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
 */const TI=5*60,AI=Ul("authIdTokenMaxAge")||TI;let tl=null;const bI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AI)return;const i=n==null?void 0:n.token;tl!==i&&(tl=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function RI(t=Io()){const e=Eo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sE(t,{popupRedirectResolver:vI,persistence:[VE,vE,Ld]}),r=Ul("authTokenSyncURL");if(r){const s=bI(r);mE(n,s,()=>s(n.currentUser)),pE(n,o=>s(o))}const i=xl("auth");return i&&aE(n,`http://${i}`),n}wI("Browser");const nl={apiKey:"AIzaSyAmAzwLY6aNWDz5YMqTmnmsxuID0-x_ndM",authDomain:"veil-6323e.firebaseapp.com",projectId:"veil-6323e",storageBucket:"veil-6323e.appspot.com",messagingSenderId:"946700939013",appId:"1:946700939013:web:557fa104bc89b16dbbd16c",measurementId:"G-0QJKZEPH09"};let Zt;um().length&&(Zt=Io(),hm(Zt)),Zt=Fs(nl);const ew=dv(Zt),tw=RI(Zt);export{gt as A,jI as B,Lt as C,ke as D,Eo as E,Jf as F,ut as G,Io as H,rt as I,ep as J,qI as K,JI as L,_n as S,an as _,kI as a,NI as b,OI as c,Uf as d,VI as e,go as f,xI as g,ks as h,Rl as i,Zd as j,Lf as k,BI as l,tw as m,DI as n,uv as o,QI as p,WI as q,LI as r,FI as s,YI as t,MI as u,ew as v,HI as w,XI as x,KI as y,ZI as z};
