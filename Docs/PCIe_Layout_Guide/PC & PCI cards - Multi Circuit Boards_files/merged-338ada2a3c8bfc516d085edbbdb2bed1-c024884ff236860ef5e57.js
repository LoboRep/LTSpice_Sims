!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,i,s;for(var c in w)if(w.hasOwnProperty(c)){if(e=[],t=w[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),C.push((a?"":"no-")+s.join("-"))}}function o(e){var t=E.className,n=Modernizr._config.classPrefix||"";if(k&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),k?E.className.baseVal=t:E.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):k?t.createElementNS.call(t,
"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function c(){var e=t.body;return e||(e=i(k?"svg":"body"),e.fake=!0),e}function l(e,n,r,a){var o,s,l,d,u="modernizr",f=i("div"),p=c();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=a?a[r]:u+(r+1),f.appendChild(l);return o=i("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",d=E.style.overflow,E.style.overflow="hidden",E.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),E.style.overflow=d,E.offsetHeight):f.parentNode.removeChild(f),!!s}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,n,r){var a;if("getComputedStyle"in e){a=getComputedStyle.call(e,t,n);var o=e.console;if(null!==a)r&&(a=a.getPropertyValue(r));else if(o){var i=o.
error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else a=!n&&t.currentStyle&&t.currentStyle[r];return a}function f(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(d(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+d(t[a])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==u(e,null,"position")})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,a,o){function c(){d&&(delete $.style,delete $.modElem)}if(o=r(o,"undefined")?!1:o,!r(a,"undefined")){var l=f(e,a);if(!r(l,"undefined"))return l}for(var d,u,m,g,h,v=["modernizr","tspan","samp"];!$.style&&v.length;)d=!0,$.modElem=i(v.shift()),$.style=$.modElem.style;for(m=e.length,u=0;m>u;u++)if(g=e[u],h=$.style[g],s(g,"-")&&(g=p(g)),$.style[g]!==n){if(o||r(
a,"undefined"))return c(),"pfx"==t?g:!0;try{$.style[g]=a}catch(y){}if($.style[g]!=h)return c(),"pfx"==t?g:!0}return c(),!1}function g(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var a;for(var o in e)if(e[o]in t)return n===!1?e[o]:(a=t[e[o]],r(a,"function")?g(a,n||t):a);return!1}function v(e,t,n,a,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+A.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?m(s,t,a,o):(s=(e+" "+P.join(i+" ")+i).split(" "),h(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}function b(e,t){if("object"==typeof e)for(var n in e)B(e,n)&&b(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),a=Modernizr[r[0]];if(2==r.length&&(a=a[r[1]]),"undefined"!=typeof a)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr
}function x(e,t){var n=e.deleteDatabase(t);n.onsuccess=function(){b("indexeddb.deletedatabase",!0)},n.onerror=function(){b("indexeddb.deletedatabase",!1)}}function T(e,t){return e-1===t||e===t||e+1===t}var w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var C=[],E=t.documentElement,k="svg"===E.nodeName.toLowerCase(),_="Moz O ms Webkit",P=S._config.usePrefixes?_.toLowerCase().split(" "):[];S._domPrefixes=P;var N=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=N;var z=function(){function e(e,t){var a;return e?(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,a=e in t,!a&&r&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),a="function"==typeof t[e],t[e]!==n&&(t[e
]=n),t.removeAttribute(e)),a):!1}var r=!("onblur"in t.documentElement);return e}();S.hasEvent=z;var A=S._config.usePrefixes?_.split(" "):[];S._cssomPrefixes=A;var R={elem:i("modernizr")};Modernizr._q.push(function(){delete R.elem});var $={style:R.elem.style};Modernizr._q.unshift(function(){delete $.style}),S.testAllProps=v,S.testAllProps=y;var O=S.testProp=function(e,t,r){return m([e],n,t,r)},I=S.testStyles=l;k||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,l(t)}function o(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():g.
test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)a.createElement(s[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function l(e){e||(e=t);var r=o(e);return!b.shivCSS||d||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var d,u,f="3.7.3",
p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:a};e.html5=b,l(t),"object"==typeof module&&module.exports&&(module.
exports=b)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("audio",function(){var e=i("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof i("canvas").getContext("2d").fillText}),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("hashchange",function(){return z("hashchange",e)===!1?!1:t.
documentMode===n||t.documentMode>7}),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1});var L=function(t){var r,a=N.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var i=0;a>i;i++){var s=N[i],c=s.toUpperCase()+"_"+r;if(c in o)return"@-"+s.toLowerCase()+"-"+t}return!1};S.atRule=L;var B,j=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=p(e)),t?v(e,t,n):v(e,"pfx"))};!function(){var e={}.hasOwnProperty;B=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),S._l={},S.on=function(e,t){this._l[e]||(this._l[e]=[]),this.
_l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=b}),Modernizr.addAsyncTest(function(){var t;try{t=j("indexedDB",e)}catch(n){}if(t){var r="modernizr-"+Math.random(),a=t.open(r);a.onerror=function(){a.error&&"InvalidStateError"===a.error.name?b("indexeddb",!1):(b("indexeddb",!0),x(t,r))},a.onsuccess=function(){b("indexeddb",!0),x(t,r)}}else b("indexeddb",!1)});var M=i("input"),F="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),D={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)D[t[n]]=!!(t[n]in M);return D.list&&(D.list=!(!i("datalist")||!e.HTMLDataListElement)),D}(F);var V="search tel url email datetime date month week time datetime-local number range color".split(" "),W={};Modernizr.inputtypes
=function(e){for(var r,a,o,i=e.length,s="1)",c=0;i>c;c++)M.setAttribute("type",r=e[c]),o="text"!==M.type&&"style"in M,o&&(M.value=s,M.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&M.style.WebkitAppearance!==n?(E.appendChild(M),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(M,null).WebkitAppearance&&0!==M.offsetHeight,E.removeChild(M)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?M.checkValidity&&M.checkValidity()===!1:M.value!=s)),W[e[c]]=!!o;return W}(V),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("video",function(){var e=i("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(
/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=i("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var q=!1;try{q="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(H){}Modernizr.addTest("websockets",q),Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule",
"RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0));var U=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();U?Modernizr.addTest("fontface",!1):I('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),I('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",
e.offsetHeight>=6)}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",a=0,o=N.length-1;o>a;a++)e=0===a?"to ":"",r+=t+N[a]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=i("a"),c=s.style;return c.cssText=r,(""+c.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("hsla",function(){var e=i("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",s(e.backgroundColor,"rgba")||s(e.backgroundColor,"hsla")}),Modernizr.addTest("multiplebgs",function(){var e=i("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=N.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("rgba",function(){var e=i("a").style;
return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("textshadow",O("textShadow","1px 1px")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)});var G="CSS"in e&&"supports"in e.CSS,J="supportsCSS"in e;Modernizr.addTest("supports",G||J),Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)}),Modernizr.addTest("csstransitions",y("transition","all",!0)),I("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(u(t,null,"height"),10);Modernizr.addTest("cssvhunit",T(r,n))}),I("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(u(t,null,"width"),10);Modernizr.addTest("cssvwunit",T(r,n))}),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest(
"sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e);var Z={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(Z.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(Z.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),Modernizr.addTest("webworkers","Worker"in e),a(),o(C),delete S.addTest,delete S.addAsyncTest;for(var K=0;K<Modernizr._q.length;K++)Modernizr._q[K]();e.Modernizr=Modernizr}(window,document);!function(){if("-ms-user-select"in document.documentElement.style&&navigator.userAgent.match(
/IEMobile\/10\.0/)){var e=document.createElement("style");e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.getElementsByTagName("head")[0].appendChild(e)}}();