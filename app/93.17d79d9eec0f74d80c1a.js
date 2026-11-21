/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{fSmq:function(e,r,t){"use strict"
t.r(r),t.d(r,"initFirebase",function(){return O}),t.d(r,"app",function(){return g}),t.d(r,"analytics",function(){return m}),t.d(r,"remoteConfig",function(){return d})
var n=t("lSNA"),a=t.n(n),c=t("yXPU"),u=t.n(c),p=t("vHuw"),s=t("GQJ4"),b=t("aKMV"),l=t("l/qV"),y=t("P2qJ")
function _regenerator(){var e,r,t="function"==typeof Symbol?Symbol:{},n=t.iterator||"@@iterator",o=t.toStringTag||"@@toStringTag"
function i(t,n,o,i){var c=n&&n.prototype instanceof Generator?n:Generator,u=Object.create(c.prototype)
return _regeneratorDefine2(u,"_invoke",function(t,n,o){var i,c,u,p=0,f=o||[],s=!1,b={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(r,t){return i=r,c=0,u=e,b.n=t,a}}
function d(t,n){for(c=t,u=n,r=0;!s&&p&&!o&&r<f.length;r++){var o,i=f[r],l=b.p,y=i[2]
t>3?(o=y===n)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=l&&((o=t<2&&l<i[1])?(c=0,b.v=n,b.n=i[1]):l<y&&(o=t<3||i[0]>n||n>y)&&(i[4]=t,i[5]=n,b.n=y,c=0))}if(o||t>1)return a
throw s=!0,n}return function(o,f,l){if(p>1)throw TypeError("Generator is already running")
for(s&&1===f&&d(f,l),c=f,u=l;(r=c<2?e:u)||!s;){i||(c?c<3?(c>1&&(b.n=-1),d(c,u)):b.n=u:b.v=u)
try{if(p=2,i){if(c||(o="next"),r=i[o]){if(!(r=r.call(i,u)))throw TypeError("iterator result is not an object")
if(!r.done)return r
u=r.value,c<2&&(c=0)}else 1===c&&(r=i.return)&&r.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1)
i=e}else if((r=(s=b.n<0)?u:t.call(n,b))!==a)break}catch(r){i=e,c=1,u=r}finally{p=1}}return{value:r,done:s}}}(t,o,i),!0),u}var a={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}r=Object.getPrototypeOf
var c=[][n]?r(r([][n]())):(_regeneratorDefine2(r={},n,function(){return this}),r),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,n,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,r,t,n){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}(_regeneratorDefine2=function _regeneratorDefine(e,r,t,n){function o(r,t){_regeneratorDefine2(e,r,function(e){return this._invoke(r,t,e)})}r?a?a(e,r,{value:t,enumerable:!n,configurable:!n,writable:!n}):e[r]=t:(o("next",0),o("throw",1),o("return",2))})(e,r,t,n)}var g=Object(p.a)({apiKey:"AIzaSyC2Mz9vg9Zl4FIIp88YbQHglKnNHFzIilo",authDomain:"manning-pro.firebaseapp.com",projectId:"manning-pro",storageBucket:"manning-pro.firebasestorage.app",messagingSenderId:"352624069462",appId:"1:352624069462:web:8bf659346131c4ff9064f7",measurementId:"G-81R3H884C6"}),m=null,d=null,O=function(){var e=u()(_regenerator().m(function _callee(){var e,r,t
return _regenerator().w(function(n){for(;;)switch(n.p=n.n){case 0:if(m){n.n=4
break}return n.p=1,n.n=2,Object(s.b)()
case 2:n.v&&(m=Object(s.a)(g)),n.n=4
break
case 3:n.p=3,n.v
case 4:return n.p=4,d||((d=Object(b.b)(g)).settings={minimumFetchIntervalMillis:6e4},d.defaultConfig=a()(a()({},"search_experiment","vertex"),"recommend_experiment","appier")),n.n=5,Object(b.a)(d)
case 5:e=Object(b.c)(d,"search_experiment").asString(),r=Object(b.c)(d,"recommend_experiment").asString(),Object(y.f)(e),Object(y.e)(r),n.n=7
break
case 6:n.p=6,n.v,Object(y.e)("APPIER")
case 7:return n.p=7,t=Object(y.a)(),Object(l.a)({experiment_name:"recommendation_experiment",experiment_variant:"VERTEX"===t?"VERTEX":"CONTROL"}),n.f(7)
case 8:return n.a(2,{app:g,analytics:m,remoteConfig:d,searchAbVariant:Object(y.b)(),recommendationAbVariant:Object(y.a)()})}},_callee,null,[[4,6,7,8],[1,3]])}))
return function initFirebase(){return e.apply(this,arguments)}}()},"l/qV":function(e,r,t){"use strict"
t.d(r,"a",function(){return c})
var n=t("lSNA"),o=t.n(n),a=t("2Us3")
function ownKeys(e,r){var t=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{}
r%2?ownKeys(Object(t),!0).forEach(function(r){o()(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var i=!1,c=function trackGetExperiment(e){var r=e.experiment_name,t=e.experiment_variant
if(!i&&"undefined"!=typeof window){i=!0
var n=Object(a.n)()
window.dataLayer=window.dataLayer||[],window.dataLayer.push(_objectSpread(_objectSpread({event:"get_expriment"},n),{},{experiment_name:r,experiment_variant:t}))}}}}])
