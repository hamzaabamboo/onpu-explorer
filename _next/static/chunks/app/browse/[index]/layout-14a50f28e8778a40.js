(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[907],{5413:function(e,t,n){var r=n(7315).Symbol;e.exports=r},402:function(e,t,n){var r=n(5413),i=n(8054),o=n(9311),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?i(e):o(e)}},6478:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},8054:function(e,t,n){var r=n(5413),i=Object.prototype,o=i.hasOwnProperty,l=i.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=l.call(e);return r&&(t?e[a]=n:delete e[a]),i}},9311:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},7315:function(e,t,n){var r=n(6478),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},8857:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},2461:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6637:function(e,t,n){var r=n(402),i=n(2461);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},109:function(e,t,n){Promise.resolve().then(n.bind(n,2404)),Promise.resolve().then(n.bind(n,6104)),Promise.resolve().then(n.bind(n,1982)),Promise.resolve().then(n.bind(n,3255))},2404:function(e,t,n){"use strict";n.r(t),n.d(t,{Layout:function(){return l}});var r=n(1264),i=n(8378),o=n(6899);let l=e=>{let{children:t}=e;return(0,r.jsx)(i.W,{maxWidth:["full",null,"80vw"],mx:"auto",children:(0,r.jsx)(o.K,{children:t})})}},4294:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(1264),i=n(7834),o=n(8121);function l(e){let{data:t,isSmall:n=!1,hideFurigana:l=!1,showAlternative:a=!1,fontWeight:c}=e,{kanji:s,reading:u}=t,f=c||(n?"normal":"bold");return(0,r.jsxs)(i.m.ruby,{fontSize:n?"lg":"3xl",textAlign:"center",fontFamily:"Minchou, Meiryou",children:[(0,r.jsx)(o.x,{as:"span",fontWeight:f,children:null==s?void 0:s.replace(/[\(\［](.*?)[\］\)]/g,"").split("・")[0]}),!l&&(0,r.jsx)(i.m.rt,{children:u}),a&&/[\(\［](.*?)[\］\)]/.test(null!=s?s:"")&&(0,r.jsx)(o.x,{as:"span",fontWeight:f,children:null==s?void 0:s.substring(1)})]})}},6104:function(e,t,n){"use strict";n.r(t),n.d(t,{Navigation:function(){return f}});var r=n(1264),i=n(5207),o=n(3427),l=n(4340),a=n(8967),c=n(1915),s=n(5670),u=n(7094);let f=()=>{let e=(0,u.usePathname)(),t="all"===e.split("/").slice(-1)[0],n=Number(e.split("/").slice(t?-2:-1)[0]);return(0,r.jsxs)(a.U,{w:"full",backgroundColor:"white",position:"sticky",top:0,py:2,zIndex:100,children:[(0,r.jsx)(c.r,{href:(0,o.D)(t?"/all":"/"),shadow:"md",textAlign:"center",py:"2",w:"full",fontSize:"xl",children:(0,r.jsx)(s.xu,{children:(0,r.jsx)(l.U,{"aria-label":"all"})})}),i.k.split("").map((e,i)=>(0,r.jsx)(c.r,{href:(0,o.D)("/browse/".concat(i).concat(t?"/all":"")),shadow:"md",bgColor:n===i?"gray.100":"white",textAlign:"center",py:"2",w:"full",fontSize:"xl",children:(0,r.jsx)(s.xu,{children:e})},e))]})}},1982:function(e,t,n){"use strict";n.r(t),n.d(t,{SearchBar:function(){return p}});var r=n(1264),i=n(5207),o=n(3427),l=n(5670),a=n(7455),c=n(8967),s=n(1915),u=n(1885),f=n.n(u),d=n(6141),h=n(9592),x=n(4294);let p=e=>{let{data:t}=e,[n,u]=(0,d.useState)(""),[p,g]=(0,d.useState)(""),m=(0,d.useCallback)(e=>f()(g,500)(e),[g]),v=(0,d.useMemo)(()=>p?t.flatMap(e=>(0,h.kd)(p)?e.pronunciation.includes((0,h.nw)(p))?e:{...e,kanjis:e.kanjis.filter(e=>e.reading&&(0,h.nw)(p)===(0,h.nw)(e.reading))}:{...e,kanjis:e.kanjis.filter(e=>p.split("").filter(t=>e.kanji.includes(t)).length>0)}).filter(e=>e.kanjis.length>0):[],[t,p]);return(0,d.useEffect)(()=>{m(n)},[n]),(0,r.jsxs)(l.xu,{position:"sticky",top:"62px",bgColor:"white",zIndex:"200",children:[(0,r.jsx)(a.I,{w:"full",value:n,fontSize:"xl",mb:2,onChange:e=>u(e.target.value)}),v.length>0&&(0,r.jsx)(l.xu,{position:"relative",children:(0,r.jsx)(c.U,{position:"absolute",alignItems:"flex-start",width:"full",p:2,backgroundColor:"white",shadow:"md",spacing:6,mb:6,flexWrap:"wrap",maxHeight:256,overflow:"auto",children:v.filter(e=>{var t;return null===(t=e.part[0])||void 0===t?void 0:t.kanji}).slice(0,30).map((e,t)=>(0,r.jsx)(s.r,{boxSize:16,p:2,display:"flex",justifyContent:"center",alignItems:"center",href:(0,o.D)("/browse/".concat(i.c.findIndex(t=>{var n;return t.includes(null===(n=e.pronunciation)||void 0===n?void 0:n[0])}),"#").concat(e.part[0].kanji)),children:(0,r.jsx)(x.I,{data:e.part[0]})},e.part[0].kanji))})})]})}},3255:function(e,t,n){"use strict";n.r(t),n.d(t,{HomeIntro:function(){return u}});var r=n(1264),i=n(3427),o=n(6899),l=n(1094),a=n(1915),c=n(8121),s=n(7382);let u=()=>(0,r.jsxs)(o.K,{children:[(0,r.jsx)(l.X,{children:(0,r.jsx)(a.r,{href:(0,i.D)("/"),children:"Kanji Phonetic Components (音符) explorer"})}),(0,r.jsxs)(c.x,{children:["Collection of kanji phonetic components (音符), data extracted from"," ",(0,r.jsx)(a.r,{href:"https://blog.goo.ne.jp/ishiseiji/e/d54e5260be574ccd22051faf92b4d3bc",color:"blue.400",target:"__blank",children:"漢字の音符, 石沢誠司"}),", Kanji Meanings from"," ",(0,r.jsx)(a.r,{href:"http://nihongo.monash.edu/kanjidic2/index.html",color:"blue.400",target:"__blank",children:"Kanjidic2"})]}),(0,r.jsx)(c.x,{children:"How to use: Search by Kanji/Reading, Browse ; Some glyph may not be properly displayed. Bugs are expected"}),(0,r.jsxs)(o.K,{spacing:"xs",children:[(0,r.jsx)(c.x,{children:"Related Links"}),(0,r.jsxs)(s.aV,{children:[(0,r.jsx)(s.HC,{children:(0,r.jsx)(a.r,{href:"https://thekanjicode.com/list-of-phonetic-components/",target:"__blank",color:"blue.400",children:"What are phonetic components ?"})}),(0,r.jsx)(s.HC,{children:(0,r.jsx)(a.r,{href:"https://kanjialive.com/214-traditional-kanji-radicals/",target:"__blank",color:"blue.400",children:'Kanji radicals /"Meaning" part of a kanji'})})]})]})]})},5207:function(e,t,n){"use strict";n.d(t,{c:function(){return i},k:function(){return r}});let r="アカサタナハマヤラワ",i=["アイウエオ","カガキギクグケゲコゴ","サザシジスズセゼソゾ","タダチヂツヅテデトド","ナニヌネノ","ハバパヒビピフブプヘベペホボポ","マミムメモ","ヤユヨ","ラリルレロ","ワン"]},3427:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var r=n(8675);let i=e=>(0,r.join)("/onpu-explorer",e)},8675:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,o=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else if(47===n)break;else n=47;if(47===n){if(o===a-1||1===l);else if(o!==a-1&&2===l){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",i=0):i=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),o=a,l=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=a,l=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(o+1,a):r=e.slice(o+1,a),i=a-o-1;o=a,l=0}else 46===n&&-1!==l?++l:l=-1}return r}var r={resolve:function(){for(var e,r,i="",o=!1,l=arguments.length-1;l>=-1&&!o;l--)l>=0?r=arguments[l]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(i=r+"/"+i,o=47===r.charCodeAt(0));return(i=n(i,!o),o)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,l=o-i,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var c=n.length-a,s=l<c?l:c,u=-1,f=0;f<=s;++f){if(f===s){if(c>s){if(47===n.charCodeAt(a+f))return n.slice(a+f+1);if(0===f)return n.slice(a+f)}else l>s&&(47===e.charCodeAt(i+f)?u=f:0===f&&(u=0));break}var d=e.charCodeAt(i+f);if(d!==n.charCodeAt(a+f))break;47===d&&(u=f)}var h="";for(f=i+u+1;f<=o;++f)(f===o||47===e.charCodeAt(f))&&(0===h.length?h+="..":h+="/..");return h.length>0?h+n.slice(a+u):(a+=u,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,o=!0,l=e.length-1;l>=1;--l)if(47===(n=e.charCodeAt(l))){if(!o){i=l;break}}else o=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,o=-1,l=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,c=-1;for(r=e.length-1;r>=0;--r){var s=e.charCodeAt(r);if(47===s){if(!l){i=r+1;break}}else -1===c&&(l=!1,c=r+1),a>=0&&(s===n.charCodeAt(a)?-1==--a&&(o=r):(a=-1,o=c))}return i===o?o=c:-1===o&&(o=e.length),e.slice(i,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!l){i=r+1;break}}else -1===o&&(l=!1,o=r+1);return -1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,o=!0,l=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47===c){if(!o){r=a+1;break}continue}-1===i&&(o=!1,i=a+1),46===c?-1===n?n=a:1!==l&&(l=1):-1!==n&&(l=-1)}return -1===n||-1===i||0===l||1===l&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var l=-1,a=0,c=-1,s=!0,u=e.length-1,f=0;u>=n;--u){if(47===(i=e.charCodeAt(u))){if(!s){a=u+1;break}continue}-1===c&&(s=!1,c=u+1),46===i?-1===l?l=u:1!==f&&(f=1):-1!==l&&(f=-1)}return -1===l||-1===c||0===f||1===f&&l===c-1&&l===a+1?-1!==c&&(0===a&&o?r.base=r.name=e.slice(1,c):r.base=r.name=e.slice(a,c)):(0===a&&o?(r.name=e.slice(1,l),r.base=e.slice(1,c)):(r.name=e.slice(a,l),r.base=e.slice(a,c)),r.ext=e.slice(l,c)),a>0?r.dir=e.slice(0,a-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},l=!0;try{t[e](o,o.exports,r),l=!1}finally{l&&delete n[e]}return o.exports}r.ab="//";var i=r(114);e.exports=i}()},6107:function(e,t,n){"use strict";n.d(t,{XQ:function(){return i}});var r=n(7212);function i(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,r.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},5670:function(e,t,n){"use strict";n.d(t,{xu:function(){return l}});var r=n(7834),i=n(9337),o=n(1264),l=(0,r.m)("div");l.displayName="Box";var a=(0,i.G)(function(e,t){let{size:n,centerContent:r=!0,...i}=e;return(0,o.jsx)(l,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});a.displayName="Square",(0,i.G)(function(e,t){let{size:n,...r}=e;return(0,o.jsx)(a,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},1094:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(9337),i=n(7819),o=n(3173),l=n(7834),a=n(7212),c=n(1264),s=(0,r.G)(function(e,t){let n=(0,i.mq)("Heading",e),{className:r,...s}=(0,o.Lr)(e);return(0,c.jsx)(l.m.h2,{ref:t,className:(0,a.cx)("chakra-heading",e.className),...s,__css:n})});s.displayName="Heading"},8967:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var r=n(6899),i=n(9337),o=n(1264),l=(0,i.G)((e,t)=>(0,o.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));l.displayName="HStack"},8121:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(9337),i=n(7819),o=n(3173),l=n(7834),a=n(7212),c=n(9506),s=n(1264),u=(0,r.G)(function(e,t){let n=(0,i.mq)("Text",e),{className:r,align:u,decoration:f,casing:d,...h}=(0,o.Lr)(e),x=(0,c.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,s.jsx)(l.m.p,{ref:t,className:(0,a.cx)("chakra-text",e.className),...x,...h,__css:n})});u.displayName="Text"},6899:function(e,t,n){"use strict";n.d(t,{K:function(){return f}});var r=n(7834),i=n(1264),o=e=>(0,i.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});o.displayName="StackItem";var l=n(6107),a=n(2443),c=n(7212),s=n(9337),u=n(6141),f=(0,s.G)((e,t)=>{let{isInline:n,direction:s,align:f,justify:d,spacing:h="0.5rem",wrap:x,children:p,divider:g,className:m,shouldWrapChildren:v,...b}=e,j=n?"row":null!=s?s:"column",y=(0,u.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,l.XQ)(n,e=>r[e])}})({spacing:h,direction:j}),[h,j]),k=!!g,C=!v&&!k,w=(0,u.useMemo)(()=>{let e=(0,a.W)(p);return C?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,l=n+1===e.length,a=(0,i.jsx)(o,{children:t},r),c=v?a:t;if(!k)return c;let s=(0,u.cloneElement)(g,{__css:y});return(0,i.jsxs)(u.Fragment,{children:[c,l?null:s]},r)})},[g,y,k,C,v,p]),_=(0,c.cx)("chakra-stack",m);return(0,i.jsx)(r.m.div,{ref:t,display:"flex",alignItems:f,justifyContent:d,flexDirection:j,flexWrap:x,gap:k?void 0:h,className:_,...b,children:w})});f.displayName="Stack"},1915:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(9337),i=n(7819),o=n(3173),l=n(7834),a=n(7212),c=n(1264),s=(0,r.G)(function(e,t){let n=(0,i.mq)("Link",e),{className:r,isExternal:s,...u}=(0,o.Lr)(e);return(0,c.jsx)(l.m.a,{target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,a.cx)("chakra-link",r),...u,__css:n})});s.displayName="Link"},9506:function(e,t,n){"use strict";function r(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}n.d(t,{o:function(){return r}})},2443:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(6141);function i(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}}},function(e){e.O(0,[835,724,774,597,744],function(){return e(e.s=109)}),_N_E=e.O()}]);