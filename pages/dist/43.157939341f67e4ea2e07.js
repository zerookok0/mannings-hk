/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{CRYq:function(e,t,r){"use strict"
r.d(t,"a",function(){return n})
var n=function getDefaultsFromPostinstall(){}},GQJ4:function(e,t,r){"use strict"
r.d(t,"a",function(){return getAnalytics}),r.d(t,"b",function(){return isSupported})
var n,a=r("TuP9"),s=r("hCgk"),c=r("qOnz"),u=r("Sy3o")
r("HLBe")
function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,i,s=[],c=!0,u=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
c=!1}else for(;!(c=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return s}}(e,t)||_unsupportedIterableToArray(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _regeneratorValues(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length))return{next:function next(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(_typeof(e)+" is not iterable")}function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return u=e.done,e},e:function e(t){l=!0,c=t},f:function f(){try{u||null==a.return||a.return()}finally{if(l)throw c}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _regenerator(){var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",a=r.toStringTag||"@@toStringTag"
function i(r,n,a,i){var s=n&&n.prototype instanceof Generator?n:Generator,c=Object.create(s.prototype)
return _regeneratorDefine2(c,"_invoke",function(r,n,a){var i,s,c,u=0,l=a||[],f=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,s=0,c=e,p.n=r,o}}
function d(r,n){for(s=r,c=n,t=0;!f&&u&&!a&&t<l.length;t++){var a,i=l[t],h=p.p,d=i[2]
r>3?(a=d===n)&&(c=i[(s=i[4])?5:(s=3,3)],i[4]=i[5]=e):i[0]<=h&&((a=r<2&&h<i[1])?(s=0,p.v=n,p.n=i[1]):h<d&&(a=r<3||i[0]>n||n>d)&&(i[4]=r,i[5]=n,p.n=d,s=0))}if(a||r>1)return o
throw f=!0,n}return function(a,l,h){if(u>1)throw TypeError("Generator is already running")
for(f&&1===l&&d(l,h),s=l,c=h;(t=s<2?e:c)||!f;){i||(s?s<3?(s>1&&(p.n=-1),d(s,c)):p.n=c:p.v=c)
try{if(u=2,i){if(s||(a="next"),t=i[a]){if(!(t=t.call(i,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,s<2&&(s=0)}else 1===s&&(t=i.return)&&t.call(i),s<2&&(c=TypeError("The iterator does not provide a '"+a+"' method"),s=1)
i=e}else if((t=(f=p.n<0)?c:r.call(n,p))!==o)break}catch(t){i=e,s=1,c=t}finally{u=1}}return{value:t,done:f}}}(r,a,i),!0),c}var o={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf
var s=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),c=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,a,"GeneratorFunction")),e.prototype=Object.create(c),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(c,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(c),_regeneratorDefine2(c,a,"Generator"),_regeneratorDefine2(c,n,function(){return this}),_regeneratorDefine2(c,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,t,r,n){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}(_regeneratorDefine2=function _regeneratorDefine(e,t,r,n){function o(t,r){_regeneratorDefine2(e,t,function(e){return this._invoke(t,r,e)})}t?a?a(e,t,{value:r,enumerable:!n,configurable:!n,writable:!n}):e[t]=r:(o("next",0),o("throw",1),o("return",2))})(e,t,r,n)}function asyncGeneratorStep(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise(function(n,a){var o=e.apply(t,r)
function _next(e){asyncGeneratorStep(o,n,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,a,_next,_throw,"throw",e)}_next(void 0)})}}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==_typeof(t)?t:t+""}var l="analytics",p="firebase_id",h="origin",d=6e4,g="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",y="https://www.googletagmanager.com/gtag/js",v=new s.b("@firebase/analytics"),m=(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(n={},"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance."),"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),_defineProperty(_defineProperty(n,"no-client-id",'The "client_id" field is empty.'),"invalid-gtag-resource","Trusted Types detected an invalid gtag resource: {$gtagURL}.")),_=new c.b("analytics","Analytics",m)
function createGtagTrustedTypesScriptURL(e){if(!e.startsWith(y)){var t=_.create("invalid-gtag-resource",{gtagURL:e})
return v.warn(t.message),""}return e}function promiseAllSettled(e){return Promise.all(e.map(function(e){return e.catch(function(e){return e})}))}function insertScriptTag(e,t){var r=function createTrustedTypesPolicy(e,t){var r
return window.trustedTypes&&(r=window.trustedTypes.createPolicy(e,t)),r}("firebase-js-sdk-policy",{createScriptURL:createGtagTrustedTypesScriptURL}),n=document.createElement("script"),a="".concat(y,"?l=").concat(e,"&id=").concat(t)
n.src=r?null==r?void 0:r.createScriptURL(a):a,n.async=!0,document.head.appendChild(n)}function gtagOnConfig(e,t,r,n,a,o){return _gtagOnConfig.apply(this,arguments)}function _gtagOnConfig(){return(_gtagOnConfig=_asyncToGenerator(_regenerator().m(function _callee2(e,t,r,n,a,o){var i,s,c,u
return _regenerator().w(function(l){for(;;)switch(l.p=l.n){case 0:if(i=n[a],l.p=1,!i){l.n=3
break}return l.n=2,t[i]
case 2:l.n=5
break
case 3:return l.n=4,promiseAllSettled(r)
case 4:if(s=l.v,!(c=s.find(function(e){return e.measurementId===a}))){l.n=5
break}return l.n=5,t[c.appId]
case 5:l.n=7
break
case 6:l.p=6,u=l.v,v.error(u)
case 7:e("config",a,o)
case 8:return l.a(2)}},_callee2,null,[[1,6]])}))).apply(this,arguments)}function gtagOnEvent(e,t,r,n,a){return _gtagOnEvent.apply(this,arguments)}function _gtagOnEvent(){return(_gtagOnEvent=_asyncToGenerator(_regenerator().m(function _callee3(e,t,r,n,a){var o,i,s,c,u,l,f,p
return _regenerator().w(function(h){for(;;)switch(h.p=h.n){case 0:if(h.p=0,o=[],!a||!a.send_to){h.n=9
break}return i=a.send_to,Array.isArray(i)||(i=[i]),h.n=1,promiseAllSettled(r)
case 1:s=h.v,c=_createForOfIteratorHelper(i),h.p=2,l=_regenerator().m(function _loop(){var e,r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:if(e=u.value,r=s.find(function(t){return t.measurementId===e}),!(n=r&&t[r.appId])){a.n=1
break}o.push(n),a.n=2
break
case 1:return o=[],a.a(2,1)
case 2:return a.a(2)}},_loop)}),c.s()
case 3:if((u=c.n()).done){h.n=6
break}return h.d(_regeneratorValues(l()),4)
case 4:if(!h.v){h.n=5
break}return h.a(3,6)
case 5:h.n=3
break
case 6:h.n=8
break
case 7:h.p=7,f=h.v,c.e(f)
case 8:return h.p=8,c.f(),h.f(8)
case 9:return 0===o.length&&(o=Object.values(t)),h.n=10,Promise.all(o)
case 10:e("event",n,a||{}),h.n=12
break
case 11:h.p=11,p=h.v,v.error(p)
case 12:return h.a(2)}},_callee3,null,[[2,7,8,9],[0,11]])}))).apply(this,arguments)}function wrapOrCreateGtag(e,t,r,n,a){var o=function gtagCore(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
window[n].push(arguments)}
return window[a]&&"function"==typeof window[a]&&(o=window[a]),window[a]=function wrapGtag(e,t,r,n){function _gtagWrapper(){return(_gtagWrapper=_asyncToGenerator(_regenerator().m(function _callee(a){var o,i,s,c,u,l,f,p,h,d,g,y,m,_,b=arguments
return _regenerator().w(function(w){for(;;)switch(w.p=w.n){case 0:for(w.p=0,o=b.length,i=new Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=b[s]
if("event"!==a){w.n=2
break}return c=i[0],u=i[1],w.n=1,gtagOnEvent(e,t,r,c,u)
case 1:w.n=5
break
case 2:if("config"!==a){w.n=4
break}return l=i[0],f=i[1],w.n=3,gtagOnConfig(e,t,r,n,l,f)
case 3:w.n=5
break
case 4:"consent"===a?(p=i[0],h=i[1],e("consent",p,h)):"get"===a?(d=i[0],g=i[1],y=i[2],e("get",d,g,y)):"set"===a?(m=i[0],e("set",m)):e.apply(void 0,[a].concat(i))
case 5:w.n=7
break
case 6:w.p=6,_=w.v,v.error(_)
case 7:return w.a(2)}},_callee,null,[[0,6]])}))).apply(this,arguments)}return function gtagWrapper(e){return _gtagWrapper.apply(this,arguments)}}(o,e,t,r),{gtagCore:o,wrappedGtag:window[a]}}function findGtagScriptOnPage(e){for(var t=window.document.getElementsByTagName("script"),r=0,n=Object.values(t);r<n.length;r++){var a=n[r]
if(a.src&&a.src.includes(y)&&a.src.includes(e))return a}return null}var b=30,w=1e3,k=new(function(){return _createClass(function RetryData(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w
_classCallCheck(this,RetryData),this.throttleMetadata=e,this.intervalMillis=t},[{key:"getThrottleMetadata",value:function getThrottleMetadata(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function setThrottleMetadata(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}])}())
function getHeaders(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function fetchDynamicConfig(e){return _fetchDynamicConfig.apply(this,arguments)}function _fetchDynamicConfig(){return(_fetchDynamicConfig=_asyncToGenerator(_regenerator().m(function _callee4(e){var t,r,n,a,o,i,s,c
return _regenerator().w(function(u){for(;;)switch(u.p=u.n){case 0:return t=e.appId,r=e.apiKey,n={method:"GET",headers:getHeaders(r)},a=g.replace("{app-id}",t),u.n=1,fetch(a,n)
case 1:if(200===(o=u.v).status||304===o.status){u.n=6
break}return i="",u.p=2,u.n=3,o.json()
case 3:c=u.v,null!==(s=c.error)&&void 0!==s&&s.message&&(i=c.error.message),u.n=5
break
case 4:u.p=4,u.v
case 5:throw _.create("config-fetch-failed",{httpStatus:o.status,responseMessage:i})
case 6:return u.a(2,o.json())}},_callee4,null,[[2,4]])}))).apply(this,arguments)}function fetchDynamicConfigWithRetry(e){return _fetchDynamicConfigWithRetry.apply(this,arguments)}function _fetchDynamicConfigWithRetry(){return(_fetchDynamicConfigWithRetry=_asyncToGenerator(_regenerator().m(function _callee6(e){var t,r,n,a,o,i,s,c,u=arguments
return _regenerator().w(function(l){for(;;)switch(l.n){case 0:if(t=u.length>1&&void 0!==u[1]?u[1]:k,r=u.length>2?u[2]:void 0,n=e.options,a=n.appId,o=n.apiKey,i=n.measurementId,a){l.n=1
break}throw _.create("no-app-id")
case 1:if(o){l.n=3
break}if(!i){l.n=2
break}return l.a(2,{measurementId:i,appId:a})
case 2:throw _.create("no-api-key")
case 3:return s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new T,setTimeout(_asyncToGenerator(_regenerator().m(function _callee5(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:c.abort()
case 1:return e.a(2)}},_callee5)})),void 0!==r?r:d),l.a(2,attemptFetchDynamicConfigWithRetry({appId:a,apiKey:o,measurementId:i},s,c,t))}},_callee6)}))).apply(this,arguments)}function attemptFetchDynamicConfigWithRetry(e,t,r){return _attemptFetchDynamicConfigWithRetry.apply(this,arguments)}function _attemptFetchDynamicConfigWithRetry(){return(_attemptFetchDynamicConfigWithRetry=_asyncToGenerator(_regenerator().m(function _callee7(e,t,r){var n,a,o,i,s,u,l,f,p,h,d,g,y=arguments
return _regenerator().w(function(m){for(;;)switch(m.p=m.n){case 0:return n=t.throttleEndTimeMillis,a=t.backoffCount,o=y.length>3&&void 0!==y[3]?y[3]:k,i=e.appId,s=e.measurementId,m.p=1,m.n=2,setAbortableTimeout(r,n)
case 2:m.n=5
break
case 3:if(m.p=3,d=m.v,!s){m.n=4
break}return v.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(s)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==d?void 0:d.message,"]")),m.a(2,{appId:i,measurementId:s})
case 4:throw d
case 5:return m.p=5,m.n=6,fetchDynamicConfig(e)
case 6:return u=m.v,o.deleteThrottleMetadata(i),m.a(2,u)
case 7:if(m.p=7,g=m.v,isRetriableError(f=g)){m.n=9
break}if(o.deleteThrottleMetadata(i),!s){m.n=8
break}return v.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(s)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==f?void 0:f.message,"]")),m.a(2,{appId:i,measurementId:s})
case 8:throw g
case 9:return p=503===Number(null==f?void 0:null===(l=f.customData)||void 0===l?void 0:l.httpStatus)?Object(c.h)(a,o.intervalMillis,b):Object(c.h)(a,o.intervalMillis),h={throttleEndTimeMillis:Date.now()+p,backoffCount:a+1},o.setThrottleMetadata(i,h),v.debug("Calling attemptFetch again in ".concat(p," millis")),m.a(2,attemptFetchDynamicConfigWithRetry(e,h,r,o))}},_callee7,null,[[5,7],[1,3]])}))).apply(this,arguments)}function setAbortableTimeout(e,t){return new Promise(function(r,n){var a=Math.max(t-Date.now(),0),o=setTimeout(r,a)
e.addEventListener(function(){clearTimeout(o),n(_.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function isRetriableError(e){if(!(e instanceof c.c&&e.customData))return!1
var t=Number(e.customData.httpStatus)
return 429===t||500===t||503===t||504===t}var C,S,T=function(){return _createClass(function AnalyticsAbortSignal(){_classCallCheck(this,AnalyticsAbortSignal),this.listeners=[]},[{key:"addEventListener",value:function addEventListener(e){this.listeners.push(e)}},{key:"abort",value:function abort(){this.listeners.forEach(function(e){return e()})}}])}()
function _logEvent$(){return(_logEvent$=_asyncToGenerator(_regenerator().m(function _callee8(e,t,r,n,a){var o,i
return _regenerator().w(function(s){for(;;)switch(s.n){case 0:if(!a||!a.global){s.n=1
break}return e("event",r,n),s.a(2)
case 1:return s.n=2,t
case 2:o=s.v,i=_objectSpread(_objectSpread({},n),{},{send_to:o}),e("event",r,i)
case 3:return s.a(2)}},_callee8)}))).apply(this,arguments)}function _setUserProperties$(){return(_setUserProperties$=_asyncToGenerator(_regenerator().m(function _callee1(e,t,r,n){var a,o,i,s,c
return _regenerator().w(function(u){for(;;)switch(u.n){case 0:if(!n||!n.global){u.n=1
break}for(a={},o=0,i=Object.keys(r);o<i.length;o++)s=i[o],a["user_properties.".concat(s)]=r[s]
return e("set",a),u.a(2,Promise.resolve())
case 1:return u.n=2,t
case 2:c=u.v,e("config",c,{update:!0,user_properties:r})
case 3:return u.a(2)}},_callee1)}))).apply(this,arguments)}function _setConsentDefaultForInit(e){S=e}function _setDefaultEventParametersForInit(e){C=e}function validateIndexedDB(){return _validateIndexedDB.apply(this,arguments)}function _validateIndexedDB(){return(_validateIndexedDB=_asyncToGenerator(_regenerator().m(function _callee12(){var e
return _regenerator().w(function(t){for(;;)switch(t.p=t.n){case 0:if(Object(c.n)()){t.n=1
break}return v.warn(_.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),t.a(2,!1)
case 1:return t.p=1,t.n=2,Object(c.p)()
case 2:t.n=4
break
case 3:return t.p=3,e=t.v,v.warn(_.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),t.a(2,!1)
case 4:return t.a(2,!0)}},_callee12,null,[[1,3]])}))).apply(this,arguments)}function _initializeAnalytics2(){return(_initializeAnalytics2=_asyncToGenerator(_regenerator().m(function _callee13(e,t,r,n,a,o,i){var s,c,u,l,f,d,g,y
return _regenerator().w(function(m){for(;;)switch(m.n){case 0:return(c=fetchDynamicConfigWithRetry(e)).then(function(t){r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&v.warn("The measurement ID in the local Firebase config (".concat(e.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(t.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(function(e){return v.error(e)}),t.push(c),u=validateIndexedDB().then(function(e){return e?n.getId():void 0}),m.n=1,Promise.all([c,u])
case 1:return l=m.v,f=_slicedToArray(l,2),d=f[0],g=f[1],findGtagScriptOnPage(o)||insertScriptTag(o,d.measurementId),S&&(a("consent","default",S),_setConsentDefaultForInit(void 0)),a("js",new Date),(y=null!==(s=null==i?void 0:i.config)&&void 0!==s?s:{})[h]="firebase",y.update=!0,null!=g&&(y[p]=g),a("config",d.measurementId,y),C&&(a("set",C),_setDefaultEventParametersForInit(void 0)),m.a(2,d.measurementId)}},_callee13)}))).apply(this,arguments)}var I,P,E=function(){return _createClass(function AnalyticsService(e){_classCallCheck(this,AnalyticsService),this.app=e},[{key:"_delete",value:function _delete(){return delete O[this.app.options.appId],Promise.resolve()}}])}(),O={},A=[],D={},F="dataLayer",j="gtag",R=!1
function factory(e,t,r){!function warnOnBrowserContextMismatch(){var e=[]
if(Object(c.m)()&&e.push("This is a browser extension environment."),Object(c.d)()||e.push("Cookies are not available."),e.length>0){var t=e.map(function(e,t){return"(".concat(t+1,") ").concat(e)}).join(" "),r=_.create("invalid-analytics-context",{errorInfo:t})
v.warn(r.message)}}()
var n=e.options.appId
if(!n)throw _.create("no-app-id")
if(!e.options.apiKey){if(!e.options.measurementId)throw _.create("no-api-key")
v.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=O[n])throw _.create("already-exists",{id:n})
if(!R){!function getOrCreateDataLayer(e){var t=[]
return Array.isArray(window[e])?t=window[e]:window[e]=t,t}(F)
var a=wrapOrCreateGtag(O,A,D,F,j),o=a.wrappedGtag,i=a.gtagCore
P=o,I=i,R=!0}return O[n]=function _initializeAnalytics(e,t,r,n,a,o,i){return _initializeAnalytics2.apply(this,arguments)}(e,A,D,t,I,F,r),new E(e)}function getAnalytics(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(a.d)()
e=Object(c.k)(e)
var t=Object(a.b)(e,l)
return t.isInitialized()?t.getImmediate():function initializeAnalytics(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(a.b)(e,l)
if(r.isInitialized()){var n=r.getImmediate()
if(Object(c.i)(t,r.getOptions()))return n
throw _.create("already-initialized")}return r.initialize({options:t})}(e)}function isSupported(){return _isSupported.apply(this,arguments)}function _isSupported(){return(_isSupported=_asyncToGenerator(_regenerator().m(function _callee14(){var e
return _regenerator().w(function(t){for(;;)switch(t.p=t.n){case 0:if(!Object(c.m)()){t.n=1
break}return t.a(2,!1)
case 1:if(Object(c.d)()){t.n=2
break}return t.a(2,!1)
case 2:if(Object(c.n)()){t.n=3
break}return t.a(2,!1)
case 3:return t.p=3,t.n=4,Object(c.p)()
case 4:return e=t.v,t.a(2,e)
case 5:return t.p=5,t.v,t.a(2,!1)}},_callee14,null,[[3,5]])}))).apply(this,arguments)}function _setUserProperties(e,t,r){e=Object(c.k)(e),function setUserProperties$1(e,t,r,n){return _setUserProperties$.apply(this,arguments)}(P,O[e.app.options.appId],t,r).catch(function(e){return v.error(e)})}function _logEvent(e,t,r,n){e=Object(c.k)(e),function logEvent$1(e,t,r,n,a){return _logEvent$.apply(this,arguments)}(P,O[e.app.options.appId],t,r,n).catch(function(e){return v.error(e)})}var G="@firebase/analytics",M="0.10.21"
!function registerAnalytics(){Object(a.c)(new u.a(l,function(e,t){var r=t.options
return factory(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),r)},"PUBLIC")),Object(a.c)(new u.a("analytics-internal",function internalFactory(e){try{var t=e.getProvider(l).getImmediate()
return{logEvent:function logEvent(e,r,n){return _logEvent(t,e,r,n)},setUserProperties:function setUserProperties(e,r){return _setUserProperties(t,e,r)}}}catch(e){throw _.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),Object(a.f)(G,M),Object(a.f)(G,M,"esm2020")}()},HLBe:function(e,t,r){"use strict"
var n=r("TuP9"),a=r("Sy3o"),s=r("qOnz"),c=r("HSUl")
function _regenerator(){var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",a=r.toStringTag||"@@toStringTag"
function i(r,n,a,i){var s=n&&n.prototype instanceof Generator?n:Generator,c=Object.create(s.prototype)
return _regeneratorDefine2(c,"_invoke",function(r,n,a){var i,s,c,u=0,l=a||[],f=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,s=0,c=e,p.n=r,o}}
function d(r,n){for(s=r,c=n,t=0;!f&&u&&!a&&t<l.length;t++){var a,i=l[t],h=p.p,d=i[2]
r>3?(a=d===n)&&(c=i[(s=i[4])?5:(s=3,3)],i[4]=i[5]=e):i[0]<=h&&((a=r<2&&h<i[1])?(s=0,p.v=n,p.n=i[1]):h<d&&(a=r<3||i[0]>n||n>d)&&(i[4]=r,i[5]=n,p.n=d,s=0))}if(a||r>1)return o
throw f=!0,n}return function(a,l,h){if(u>1)throw TypeError("Generator is already running")
for(f&&1===l&&d(l,h),s=l,c=h;(t=s<2?e:c)||!f;){i||(s?s<3?(s>1&&(p.n=-1),d(s,c)):p.n=c:p.v=c)
try{if(u=2,i){if(s||(a="next"),t=i[a]){if(!(t=t.call(i,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,s<2&&(s=0)}else 1===s&&(t=i.return)&&t.call(i),s<2&&(c=TypeError("The iterator does not provide a '"+a+"' method"),s=1)
i=e}else if((t=(f=p.n<0)?c:r.call(n,p))!==o)break}catch(t){i=e,s=1,c=t}finally{u=1}}return{value:t,done:f}}}(r,a,i),!0),c}var o={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf
var s=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),c=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,a,"GeneratorFunction")),e.prototype=Object.create(c),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(c,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(c),_regeneratorDefine2(c,a,"Generator"),_regeneratorDefine2(c,n,function(){return this}),_regeneratorDefine2(c,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,t,r,n){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}(_regeneratorDefine2=function _regeneratorDefine(e,t,r,n){function o(t,r){_regeneratorDefine2(e,t,function(e){return this._invoke(t,r,e)})}t?a?a(e,t,{value:r,enumerable:!n,configurable:!n,writable:!n}):e[t]=r:(o("next",0),o("throw",1),o("return",2))})(e,t,r,n)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_unsupportedIterableToArray(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function asyncGeneratorStep(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise(function(n,a){var o=e.apply(t,r)
function _next(e){asyncGeneratorStep(o,n,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,a,_next,_throw,"throw",e)}_next(void 0)})}}function _defineProperty(e,t,r){return(t=function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==_typeof(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u="@firebase/installations",l=1e4,p="w:".concat("0.6.21"),h="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",g=36e5,y=_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),"not-registered","Firebase Installation is not registered."),"installation-not-found","Firebase Installation not found."),"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),"app-offline","Could not process request. Application offline."),"delete-pending-registration","Can't delete installation while there is a pending registration request."),v=new s.b("installations","Installations",y)
function isServerError(e){return e instanceof s.c&&e.code.includes("request-failed")}function getInstallationsEndpoint(e){var t=e.projectId
return"".concat(d,"/projects/").concat(t,"/installations")}function extractAuthTokenInfoFromResponse(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()}
var t}function getErrorFromResponse(e,t){return _getErrorFromResponse.apply(this,arguments)}function _getErrorFromResponse(){return(_getErrorFromResponse=_asyncToGenerator(_regenerator().m(function _callee(e,t){var r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,t.json()
case 1:return r=a.v,n=r.error,a.a(2,v.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status}))}},_callee)}))).apply(this,arguments)}function getHeaders(e){var t=e.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function getHeadersWithAuth(e,t){var r=t.refreshToken,n=getHeaders(e)
return n.append("Authorization",function getAuthorizationHeader(e){return"".concat(h," ").concat(e)}(r)),n}function retryIfServerError(e){return _retryIfServerError.apply(this,arguments)}function _retryIfServerError(){return(_retryIfServerError=_asyncToGenerator(_regenerator().m(function _callee2(e){var t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,e()
case 1:if(!((t=r.v).status>=500&&t.status<600)){r.n=2
break}return r.a(2,e())
case 2:return r.a(2,t)}},_callee2)}))).apply(this,arguments)}function createInstallationRequest(e,t){return _createInstallationRequest.apply(this,arguments)}function _createInstallationRequest(){return(_createInstallationRequest=_asyncToGenerator(_regenerator().m(function _callee3(e,t){var r,n,a,o,i,s,c,u,l,f,d,g
return _regenerator().w(function(y){for(;;)switch(y.n){case 0:if(r=e.appConfig,n=e.heartbeatServiceProvider,a=t.fid,o=getInstallationsEndpoint(r),i=getHeaders(r),!(s=n.getImmediate({optional:!0}))){y.n=2
break}return y.n=1,s.getHeartbeatsHeader()
case 1:(c=y.v)&&i.append("x-firebase-client",c)
case 2:return u={fid:a,authVersion:h,appId:r.appId,sdkVersion:p},l={method:"POST",headers:i,body:JSON.stringify(u)},y.n=3,retryIfServerError(function(){return fetch(o,l)})
case 3:if(!(f=y.v).ok){y.n=5
break}return y.n=4,f.json()
case 4:return d=y.v,g={fid:d.fid||a,registrationStatus:2,refreshToken:d.refreshToken,authToken:extractAuthTokenInfoFromResponse(d.authToken)},y.a(2,g)
case 5:return y.n=6,getErrorFromResponse("Create Installation",f)
case 6:throw y.v
case 7:return y.a(2)}},_callee3)}))).apply(this,arguments)}function sleep(e){return new Promise(function(t){setTimeout(t,e)})}var m=/^[cdef][\w-]{21}$/,_=""
function generateFid(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16
var t=function encode(e){return function bufferToBase64UrlSafe(e){return btoa(String.fromCharCode.apply(String,_toConsumableArray(e))).replace(/\+/g,"-").replace(/\//g,"_")}(e).substr(0,22)}(e)
return m.test(t)?t:_}catch(e){return _}}function getKey(e){return"".concat(e.appName,"!").concat(e.appId)}var b=new Map
function fidChanged(e,t){var r=getKey(e)
callFidChangeCallbacks(r,t),function broadcastFidChange(e,t){var r=getBroadcastChannel()
r&&r.postMessage({key:e,fid:t})
closeBroadcastChannel()}(r,t)}function callFidChangeCallbacks(e,t){var r=b.get(e)
if(r){var n,a=function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return u=e.done,e},e:function e(t){l=!0,c=t},f:function f(){try{u||null==a.return||a.return()}finally{if(l)throw c}}}}(r)
try{for(a.s();!(n=a.n()).done;){(0,n.value)(t)}}catch(e){a.e(e)}finally{a.f()}}}var w=null
function getBroadcastChannel(){return!w&&"BroadcastChannel"in self&&((w=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){callFidChangeCallbacks(e.data.key,e.data.fid)}),w}function closeBroadcastChannel(){0===b.size&&w&&(w.close(),w=null)}var k="firebase-installations-database",C=1,S="firebase-installations-store",T=null
function getDbPromise(){return T||(T=Object(c.a)(k,C,{upgrade:function upgrade(e,t){switch(t){case 0:e.createObjectStore(S)}}})),T}function set(e,t){return _set.apply(this,arguments)}function _set(){return(_set=_asyncToGenerator(_regenerator().m(function _callee4(e,t){var r,n,a,o,i
return _regenerator().w(function(s){for(;;)switch(s.n){case 0:return r=getKey(e),s.n=1,getDbPromise()
case 1:return n=s.v,a=n.transaction(S,"readwrite"),o=a.objectStore(S),s.n=2,o.get(r)
case 2:return i=s.v,s.n=3,o.put(t,r)
case 3:return s.n=4,a.done
case 4:return i&&i.fid===t.fid||fidChanged(e,t.fid),s.a(2,t)}},_callee4)}))).apply(this,arguments)}function remove(e){return _remove.apply(this,arguments)}function _remove(){return(_remove=_asyncToGenerator(_regenerator().m(function _callee5(e){var t,r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return t=getKey(e),a.n=1,getDbPromise()
case 1:return r=a.v,n=r.transaction(S,"readwrite"),a.n=2,n.objectStore(S).delete(t)
case 2:return a.n=3,n.done
case 3:return a.a(2)}},_callee5)}))).apply(this,arguments)}function update(e,t){return _update.apply(this,arguments)}function _update(){return(_update=_asyncToGenerator(_regenerator().m(function _callee6(e,t){var r,n,a,o,i,s
return _regenerator().w(function(c){for(;;)switch(c.n){case 0:return r=getKey(e),c.n=1,getDbPromise()
case 1:return n=c.v,a=n.transaction(S,"readwrite"),o=a.objectStore(S),c.n=2,o.get(r)
case 2:if(i=c.v,void 0!==(s=t(i))){c.n=4
break}return c.n=3,o.delete(r)
case 3:c.n=5
break
case 4:return c.n=5,o.put(s,r)
case 5:return c.n=6,a.done
case 6:return!s||i&&i.fid===s.fid||fidChanged(e,s.fid),c.a(2,s)}},_callee6)}))).apply(this,arguments)}function getInstallationEntry(e){return _getInstallationEntry.apply(this,arguments)}function _getInstallationEntry(){return(_getInstallationEntry=_asyncToGenerator(_regenerator().m(function _callee7(e){var t,r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,update(e.appConfig,function(r){var n=updateOrCreateInstallationEntry(r),a=triggerRegistrationIfNecessary(e,n)
return t=a.registrationPromise,a.installationEntry})
case 1:if((r=a.v).fid!==_){a.n=3
break}return a.n=2,t
case 2:return n=a.v,a.a(2,{installationEntry:n})
case 3:return a.a(2,{installationEntry:r,registrationPromise:t})}},_callee7)}))).apply(this,arguments)}function updateOrCreateInstallationEntry(e){return clearTimedOutRequest(e||{fid:generateFid(),registrationStatus:0})}function triggerRegistrationIfNecessary(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(v.create("app-offline"))}
var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()}
return{installationEntry:r,registrationPromise:function registerInstallation(e,t){return _registerInstallation.apply(this,arguments)}(e,r)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:waitUntilFidRegistration(e)}:{installationEntry:t}}function _registerInstallation(){return(_registerInstallation=_asyncToGenerator(_regenerator().m(function _callee8(e,t){var r,n
return _regenerator().w(function(a){for(;;)switch(a.p=a.n){case 0:return a.p=0,a.n=1,createInstallationRequest(e,t)
case 1:return r=a.v,a.a(2,set(e.appConfig,r))
case 2:if(a.p=2,!isServerError(n=a.v)||409!==n.customData.serverCode){a.n=4
break}return a.n=3,remove(e.appConfig)
case 3:a.n=5
break
case 4:return a.n=5,set(e.appConfig,{fid:t.fid,registrationStatus:0})
case 5:throw n
case 6:return a.a(2)}},_callee8,null,[[0,2]])}))).apply(this,arguments)}function waitUntilFidRegistration(e){return _waitUntilFidRegistration.apply(this,arguments)}function _waitUntilFidRegistration(){return(_waitUntilFidRegistration=_asyncToGenerator(_regenerator().m(function _callee9(e){var t,r,n,a
return _regenerator().w(function(o){for(;;)switch(o.n){case 0:return o.n=1,updateInstallationRequest(e.appConfig)
case 1:t=o.v
case 2:if(1!==t.registrationStatus){o.n=5
break}return o.n=3,sleep(100)
case 3:return o.n=4,updateInstallationRequest(e.appConfig)
case 4:t=o.v,o.n=2
break
case 5:if(0!==t.registrationStatus){o.n=8
break}return o.n=6,getInstallationEntry(e)
case 6:if(r=o.v,n=r.installationEntry,!(a=r.registrationPromise)){o.n=7
break}return o.a(2,a)
case 7:return o.a(2,n)
case 8:return o.a(2,t)}},_callee9)}))).apply(this,arguments)}function updateInstallationRequest(e){return update(e,function(e){if(!e)throw v.create("installation-not-found")
return clearTimedOutRequest(e)})}function clearTimedOutRequest(e){return function hasInstallationRequestTimedOut(e){return 1===e.registrationStatus&&e.registrationTime+l<Date.now()}(e)?{fid:e.fid,registrationStatus:0}:e}function generateAuthTokenRequest(e,t){return _generateAuthTokenRequest.apply(this,arguments)}function _generateAuthTokenRequest(){return(_generateAuthTokenRequest=_asyncToGenerator(_regenerator().m(function _callee0(e,t){var r,n,a,o,i,s,c,u,l,f,h
return _regenerator().w(function(d){for(;;)switch(d.n){case 0:if(r=e.appConfig,n=e.heartbeatServiceProvider,a=getGenerateAuthTokenEndpoint(r,t),o=getHeadersWithAuth(r,t),!(i=n.getImmediate({optional:!0}))){d.n=2
break}return d.n=1,i.getHeartbeatsHeader()
case 1:(s=d.v)&&o.append("x-firebase-client",s)
case 2:return c={installation:{sdkVersion:p,appId:r.appId}},u={method:"POST",headers:o,body:JSON.stringify(c)},d.n=3,retryIfServerError(function(){return fetch(a,u)})
case 3:if(!(l=d.v).ok){d.n=5
break}return d.n=4,l.json()
case 4:return f=d.v,h=extractAuthTokenInfoFromResponse(f),d.a(2,h)
case 5:return d.n=6,getErrorFromResponse("Generate Auth Token",l)
case 6:throw d.v
case 7:return d.a(2)}},_callee0)}))).apply(this,arguments)}function getGenerateAuthTokenEndpoint(e,t){var r=t.fid
return"".concat(getInstallationsEndpoint(e),"/").concat(r,"/authTokens:generate")}function refreshAuthToken(e){return _refreshAuthToken.apply(this,arguments)}function _refreshAuthToken(){return(_refreshAuthToken=_asyncToGenerator(_regenerator().m(function _callee1(e){var t,r,n,a,o,i=arguments
return _regenerator().w(function(s){for(;;)switch(s.n){case 0:return t=i.length>1&&void 0!==i[1]&&i[1],s.n=1,update(e.appConfig,function(n){if(!isEntryRegistered(n))throw v.create("not-registered")
var a,o=n.authToken
if(t||2!==(a=o).requestStatus||function isAuthTokenExpired(e){var t=Date.now()
return t<e.creationTime||e.creationTime+e.expiresIn<t+g}(a)){if(1===o.requestStatus)return r=waitUntilAuthTokenRequest(e,t),n
if(!navigator.onLine)throw v.create("app-offline")
var i=makeAuthTokenRequestInProgressEntry(n)
return r=fetchAuthTokenFromServer(e,i),i}return n})
case 1:if(n=s.v,!r){s.n=3
break}return s.n=2,r
case 2:o=s.v,s.n=4
break
case 3:o=n.authToken
case 4:return a=o,s.a(2,a)}},_callee1)}))).apply(this,arguments)}function waitUntilAuthTokenRequest(e,t){return _waitUntilAuthTokenRequest.apply(this,arguments)}function _waitUntilAuthTokenRequest(){return(_waitUntilAuthTokenRequest=_asyncToGenerator(_regenerator().m(function _callee10(e,t){var r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,updateAuthTokenRequest(e.appConfig)
case 1:r=a.v
case 2:if(1!==r.authToken.requestStatus){a.n=5
break}return a.n=3,sleep(100)
case 3:return a.n=4,updateAuthTokenRequest(e.appConfig)
case 4:r=a.v,a.n=2
break
case 5:if(0!==(n=r.authToken).requestStatus){a.n=6
break}return a.a(2,refreshAuthToken(e,t))
case 6:return a.a(2,n)
case 7:return a.a(2)}},_callee10)}))).apply(this,arguments)}function updateAuthTokenRequest(e){return update(e,function(e){if(!isEntryRegistered(e))throw v.create("not-registered")
return function hasAuthTokenRequestTimedOut(e){return 1===e.requestStatus&&e.requestTime+l<Date.now()}(e.authToken)?_objectSpread(_objectSpread({},e),{},{authToken:{requestStatus:0}}):e})}function fetchAuthTokenFromServer(e,t){return _fetchAuthTokenFromServer.apply(this,arguments)}function _fetchAuthTokenFromServer(){return(_fetchAuthTokenFromServer=_asyncToGenerator(_regenerator().m(function _callee11(e,t){var r,n,a,o
return _regenerator().w(function(i){for(;;)switch(i.p=i.n){case 0:return i.p=0,i.n=1,generateAuthTokenRequest(e,t)
case 1:return r=i.v,n=_objectSpread(_objectSpread({},t),{},{authToken:r}),i.n=2,set(e.appConfig,n)
case 2:return i.a(2,r)
case 3:if(i.p=3,!isServerError(o=i.v)||401!==o.customData.serverCode&&404!==o.customData.serverCode){i.n=5
break}return i.n=4,remove(e.appConfig)
case 4:i.n=6
break
case 5:return a=_objectSpread(_objectSpread({},t),{},{authToken:{requestStatus:0}}),i.n=6,set(e.appConfig,a)
case 6:throw o
case 7:return i.a(2)}},_callee11,null,[[0,3]])}))).apply(this,arguments)}function isEntryRegistered(e){return void 0!==e&&2===e.registrationStatus}function makeAuthTokenRequestInProgressEntry(e){var t={requestStatus:1,requestTime:Date.now()}
return _objectSpread(_objectSpread({},e),{},{authToken:t})}function _getId(){return(_getId=_asyncToGenerator(_regenerator().m(function _callee12(e){var t,r,n,a
return _regenerator().w(function(o){for(;;)switch(o.n){case 0:return t=e,o.n=1,getInstallationEntry(t)
case 1:return r=o.v,n=r.installationEntry,(a=r.registrationPromise)?a.catch(console.error):refreshAuthToken(t).catch(console.error),o.a(2,n.fid)}},_callee12)}))).apply(this,arguments)}function _getToken(){return(_getToken=_asyncToGenerator(_regenerator().m(function _callee13(e){var t,r,n,a=arguments
return _regenerator().w(function(o){for(;;)switch(o.n){case 0:return t=a.length>1&&void 0!==a[1]&&a[1],r=e,o.n=1,completeInstallationRegistration(r)
case 1:return o.n=2,refreshAuthToken(r,t)
case 2:return n=o.v,o.a(2,n.token)}},_callee13)}))).apply(this,arguments)}function completeInstallationRegistration(e){return _completeInstallationRegistration.apply(this,arguments)}function _completeInstallationRegistration(){return(_completeInstallationRegistration=_asyncToGenerator(_regenerator().m(function _callee14(e){var t,r
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,getInstallationEntry(e)
case 1:if(t=n.v,!(r=t.registrationPromise)){n.n=2
break}return n.n=2,r
case 2:return n.a(2)}},_callee14)}))).apply(this,arguments)}function getMissingValueError(e){return v.create("missing-app-config-values",{valueName:e})}var I="installations",P="installations-internal",E=function publicFactory(e){var t=e.getProvider("app").getImmediate()
return{app:t,appConfig:function extractAppConfig(e){if(!e||!e.options)throw getMissingValueError("App Configuration")
if(!e.name)throw getMissingValueError("App Name")
for(var t=0,r=["projectId","apiKey","appId"];t<r.length;t++){var n=r[t]
if(!e.options[n])throw getMissingValueError(n)}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),heartbeatServiceProvider:Object(n.b)(t,"heartbeat"),_delete:function _delete(){return Promise.resolve()}}},O=function internalFactory(e){var t=e.getProvider("app").getImmediate(),r=Object(n.b)(t,I).getImmediate()
return{getId:function getId(){return function _getId2(e){return _getId.apply(this,arguments)}(r)},getToken:function getToken(e){return function _getToken2(e){return _getToken.apply(this,arguments)}(r,e)}}}
!function registerInstallations(){Object(n.c)(new a.a(I,E,"PUBLIC")),Object(n.c)(new a.a(P,O,"PRIVATE"))}(),Object(n.f)(u,"0.6.21"),Object(n.f)(u,"0.6.21","esm2020")},HSUl:function(e,t,r){"use strict"
r.d(t,"a",function(){return openDB})
const n=(e,t)=>t.some(t=>e instanceof t)
let a,o
const i=new WeakMap,s=new WeakMap,c=new WeakMap,u=new WeakMap,l=new WeakMap
let f={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return s.get(e)
if("objectStoreNames"===t)return e.objectStoreNames||c.get(e)
if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wrap(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function wrapFunction(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?function getCursorAdvanceMethods(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}().includes(e)?function(...t){return e.apply(p(this),t),wrap(i.get(this))}:function(...t){return wrap(e.apply(p(this),t))}:function(t,...r){const n=e.call(p(this),t,...r)
return c.set(n,t.sort?t.sort():[t]),wrap(n)}}function transformCachableValue(e){return"function"==typeof e?wrapFunction(e):(e instanceof IDBTransaction&&function cacheDonePromiseForTransaction(e){if(s.has(e))return
const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()}
e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)})
s.set(e,t)}(e),n(e,function getIdbProxyableTypes(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}())?new Proxy(e,f):e)}function wrap(e){if(e instanceof IDBRequest)return function promisifyRequest(e){const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{t(wrap(e.result)),n()},o=()=>{r(e.error),n()}
e.addEventListener("success",a),e.addEventListener("error",o)})
return t.then(t=>{t instanceof IDBCursor&&i.set(t,e)}).catch(()=>{}),l.set(t,e),t}(e)
if(u.has(e))return u.get(e)
const t=transformCachableValue(e)
return t!==e&&(u.set(e,t),l.set(t,e)),t}const p=e=>l.get(e)
function openDB(e,t,{blocked:r,upgrade:n,blocking:a,terminated:o}={}){const i=indexedDB.open(e,t),s=wrap(i)
return n&&i.addEventListener("upgradeneeded",e=>{n(wrap(i.result),e.oldVersion,e.newVersion,wrap(i.transaction),e)}),r&&i.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),s.then(e=>{o&&e.addEventListener("close",()=>o()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}const h=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],g=new Map
function getMethod(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(g.get(t))return g.get(t)
const r=t.replace(/FromIndex$/,""),n=t!==r,a=d.includes(r)
if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!h.includes(r))return
const o=async function(e,...t){const o=this.transaction(e,a?"readwrite":"readonly")
let i=o.store
return n&&(i=i.index(t.shift())),(await Promise.all([i[r](...t),a&&o.done]))[0]}
return g.set(t,o),o}!function replaceTraps(e){f=e(f)}(e=>({...e,get:(t,r,n)=>getMethod(t,r)||e.get(t,r,n),has:(t,r)=>!!getMethod(t,r)||e.has(t,r)}))},Sy3o:function(e,t,r){"use strict"
r.d(t,"a",function(){return a}),r.d(t,"b",function(){return u})
var n=r("qOnz")
function _regenerator(){var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",a=r.toStringTag||"@@toStringTag"
function i(r,n,a,i){var s=n&&n.prototype instanceof Generator?n:Generator,c=Object.create(s.prototype)
return _regeneratorDefine2(c,"_invoke",function(r,n,a){var i,s,c,u=0,l=a||[],f=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,s=0,c=e,p.n=r,o}}
function d(r,n){for(s=r,c=n,t=0;!f&&u&&!a&&t<l.length;t++){var a,i=l[t],h=p.p,d=i[2]
r>3?(a=d===n)&&(c=i[(s=i[4])?5:(s=3,3)],i[4]=i[5]=e):i[0]<=h&&((a=r<2&&h<i[1])?(s=0,p.v=n,p.n=i[1]):h<d&&(a=r<3||i[0]>n||n>d)&&(i[4]=r,i[5]=n,p.n=d,s=0))}if(a||r>1)return o
throw f=!0,n}return function(a,l,h){if(u>1)throw TypeError("Generator is already running")
for(f&&1===l&&d(l,h),s=l,c=h;(t=s<2?e:c)||!f;){i||(s?s<3?(s>1&&(p.n=-1),d(s,c)):p.n=c:p.v=c)
try{if(u=2,i){if(s||(a="next"),t=i[a]){if(!(t=t.call(i,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,s<2&&(s=0)}else 1===s&&(t=i.return)&&t.call(i),s<2&&(c=TypeError("The iterator does not provide a '"+a+"' method"),s=1)
i=e}else if((t=(f=p.n<0)?c:r.call(n,p))!==o)break}catch(t){i=e,s=1,c=t}finally{u=1}}return{value:t,done:f}}}(r,a,i),!0),c}var o={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf
var s=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),c=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,a,"GeneratorFunction")),e.prototype=Object.create(c),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(c,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(c),_regeneratorDefine2(c,a,"Generator"),_regeneratorDefine2(c,n,function(){return this}),_regeneratorDefine2(c,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,t,r,n){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}(_regeneratorDefine2=function _regeneratorDefine(e,t,r,n){function o(t,r){_regeneratorDefine2(e,t,function(e){return this._invoke(t,r,e)})}t?a?a(e,t,{value:r,enumerable:!n,configurable:!n,writable:!n}):e[t]=r:(o("next",0),o("throw",1),o("return",2))})(e,t,r,n)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_unsupportedIterableToArray(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function asyncGeneratorStep(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,i,s=[],c=!0,u=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
c=!1}else for(;!(c=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return s}}(e,t)||_unsupportedIterableToArray(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return u=e.done,e},e:function e(t){l=!0,c=t},f:function f(){try{u||null==a.return||a.return()}finally{if(l)throw c}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==_typeof(t)?t:t+""}var a=function(){return _createClass(function Component(e,t,r){_classCallCheck(this,Component),this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null},[{key:"setInstantiationMode",value:function setInstantiationMode(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function setMultipleInstances(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function setServiceProps(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}])}(),s="[DEFAULT]",c=function(){return _createClass(function Provider(e,t){_classCallCheck(this,Provider),this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map},[{key:"get",value:function get(e){var t=this.normalizeInstanceIdentifier(e)
if(!this.instancesDeferred.has(t)){var r=new n.a
if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var a=this.getOrInitializeService({instanceIdentifier:t})
a&&r.resolve(a)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function getImmediate(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t
if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null
throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null
throw e}}},{key:"getComponent",value:function getComponent(){return this.component}},{key:"setComponent",value:function setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."))
if(this.component)throw Error("Component for ".concat(this.name," has already been provided"))
if(this.component=e,this.shouldAutoInitialize()){if(function isComponentEager(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}var t,r=_createForOfIteratorHelper(this.instancesDeferred.entries())
try{for(r.s();!(t=r.n()).done;){var n=_slicedToArray(t.value,2),a=n[0],o=n[1],i=this.normalizeInstanceIdentifier(a)
try{var c=this.getOrInitializeService({instanceIdentifier:i})
o.resolve(c)}catch(e){}}}catch(e){r.e(e)}finally{r.f()}}}},{key:"clearInstance",value:function clearInstance(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s
this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise(function(n,a){var o=e.apply(t,r)
function _next(e){asyncGeneratorStep(o,n,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,a,_next,_throw,"throw",e)}_next(void 0)})}}(_regenerator().m(function _callee(){var e
return _regenerator().w(function(t){for(;;)switch(t.n){case 0:return e=Array.from(this.instances.values()),t.n=1,Promise.all([].concat(_toConsumableArray(e.filter(function(e){return"INTERNAL"in e}).map(function(e){return e.INTERNAL.delete()})),_toConsumableArray(e.filter(function(e){return"_delete"in e}).map(function(e){return e._delete()}))))
case 1:return t.a(2)}},_callee,this)}))
return function _delete(){return e.apply(this,arguments)}}()},{key:"isComponentSet",value:function isComponentSet(){return null!=this.component}},{key:"isInitialized",value:function isInitialized(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s
return this.instances.has(e)}},{key:"getOptions",value:function getOptions(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s
return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function initialize(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,n=this.normalizeInstanceIdentifier(e.instanceIdentifier)
if(this.isInitialized(n))throw Error("".concat(this.name,"(").concat(n,") has already been initialized"))
if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"))
var a,o=this.getOrInitializeService({instanceIdentifier:n,options:r}),i=_createForOfIteratorHelper(this.instancesDeferred.entries())
try{for(i.s();!(a=i.n()).done;){var s=_slicedToArray(a.value,2),c=s[0],u=s[1]
n===this.normalizeInstanceIdentifier(c)&&u.resolve(o)}}catch(e){i.e(e)}finally{i.f()}return o}},{key:"onInit",value:function onInit(e,t){var r,n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set
a.add(e),this.onInitCallbacks.set(n,a)
var o=this.instances.get(n)
return o&&e(o,n),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function invokeOnInitCallbacks(e,t){var r=this.onInitCallbacks.get(t)
if(r){var n,a=_createForOfIteratorHelper(r)
try{for(a.s();!(n=a.n()).done;){var o=n.value
try{o(e,t)}catch(e){}}}catch(e){a.e(e)}finally{a.f()}}}},{key:"getOrInitializeService",value:function getOrInitializeService(e){var t,r=e.instanceIdentifier,n=e.options,a=void 0===n?{}:n,o=this.instances.get(r)
if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===s?void 0:t),options:a}),this.instances.set(r,o),this.instancesOptions.set(r,a),this.invokeOnInitCallbacks(o,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function normalizeInstanceIdentifier(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s
return this.component?this.component.multipleInstances?e:s:e}},{key:"shouldAutoInitialize",value:function shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}])}()
var u=function(){return _createClass(function ComponentContainer(e){_classCallCheck(this,ComponentContainer),this.name=e,this.providers=new Map},[{key:"addComponent",value:function addComponent(e){var t=this.getProvider(e.name)
if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name))
t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function getProvider(e){if(this.providers.has(e))return this.providers.get(e)
var t=new c(e,this)
return this.providers.set(e,t),t}},{key:"getProviders",value:function getProviders(){return Array.from(this.providers.values())}}])}()},TuP9:function(e,t,r){"use strict"
r.d(t,"a",function(){return S}),r.d(t,"b",function(){return _getProvider}),r.d(t,"c",function(){return _registerComponent}),r.d(t,"d",function(){return getApp}),r.d(t,"e",function(){return initializeApp}),r.d(t,"f",function(){return registerVersion})
var n,a,s=r("Sy3o"),c=r("hCgk"),u=r("qOnz"),l=r("HSUl")
function _regenerator(){var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",a=r.toStringTag||"@@toStringTag"
function i(r,n,a,i){var s=n&&n.prototype instanceof Generator?n:Generator,c=Object.create(s.prototype)
return _regeneratorDefine2(c,"_invoke",function(r,n,a){var i,s,c,u=0,l=a||[],f=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,s=0,c=e,p.n=r,o}}
function d(r,n){for(s=r,c=n,t=0;!f&&u&&!a&&t<l.length;t++){var a,i=l[t],h=p.p,d=i[2]
r>3?(a=d===n)&&(c=i[(s=i[4])?5:(s=3,3)],i[4]=i[5]=e):i[0]<=h&&((a=r<2&&h<i[1])?(s=0,p.v=n,p.n=i[1]):h<d&&(a=r<3||i[0]>n||n>d)&&(i[4]=r,i[5]=n,p.n=d,s=0))}if(a||r>1)return o
throw f=!0,n}return function(a,l,h){if(u>1)throw TypeError("Generator is already running")
for(f&&1===l&&d(l,h),s=l,c=h;(t=s<2?e:c)||!f;){i||(s?s<3?(s>1&&(p.n=-1),d(s,c)):p.n=c:p.v=c)
try{if(u=2,i){if(s||(a="next"),t=i[a]){if(!(t=t.call(i,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,s<2&&(s=0)}else 1===s&&(t=i.return)&&t.call(i),s<2&&(c=TypeError("The iterator does not provide a '"+a+"' method"),s=1)
i=e}else if((t=(f=p.n<0)?c:r.call(n,p))!==o)break}catch(t){i=e,s=1,c=t}finally{u=1}}return{value:t,done:f}}}(r,a,i),!0),c}var o={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf
var s=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),c=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,a,"GeneratorFunction")),e.prototype=Object.create(c),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(c,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(c),_regeneratorDefine2(c,a,"Generator"),_regeneratorDefine2(c,n,function(){return this}),_regeneratorDefine2(c,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,t,r,n){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}(_regeneratorDefine2=function _regeneratorDefine(e,t,r,n){function o(t,r){_regeneratorDefine2(e,t,function(e){return this._invoke(t,r,e)})}t?a?a(e,t,{value:r,enumerable:!n,configurable:!n,writable:!n}):e[t]=r:(o("next",0),o("throw",1),o("return",2))})(e,t,r,n)}function asyncGeneratorStep(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise(function(n,a){var o=e.apply(t,r)
function _next(e){asyncGeneratorStep(o,n,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,a,_next,_throw,"throw",e)}_next(void 0)})}}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_unsupportedIterableToArray(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return u=e.done,e},e:function e(t){l=!0,c=t},f:function f(){try{u||null==a.return||a.return()}finally{if(l)throw c}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==_typeof(t)?t:t+""}var p=function(){return _createClass(function PlatformLoggerServiceImpl(e){_classCallCheck(this,PlatformLoggerServiceImpl),this.container=e},[{key:"getPlatformInfoString",value:function getPlatformInfoString(){return this.container.getProviders().map(function(e){if(function isVersionServiceProvider(e){var t=e.getComponent()
return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate()
return"".concat(t.library,"/").concat(t.version)}return null}).filter(function(e){return e}).join(" ")}}])}()
var h="@firebase/app",d="0.14.11",g=new c.b("@firebase/app"),y="[DEFAULT]",v=(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(n={},h,"fire-core"),"@firebase/app-compat","fire-core-compat"),"@firebase/analytics","fire-analytics"),"@firebase/analytics-compat","fire-analytics-compat"),"@firebase/app-check","fire-app-check"),"@firebase/app-check-compat","fire-app-check-compat"),"@firebase/auth","fire-auth"),"@firebase/auth-compat","fire-auth-compat"),"@firebase/database","fire-rtdb"),"@firebase/data-connect","fire-data-connect"),_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(n,"@firebase/database-compat","fire-rtdb-compat"),"@firebase/functions","fire-fn"),"@firebase/functions-compat","fire-fn-compat"),"@firebase/installations","fire-iid"),"@firebase/installations-compat","fire-iid-compat"),"@firebase/messaging","fire-fcm"),"@firebase/messaging-compat","fire-fcm-compat"),"@firebase/performance","fire-perf"),"@firebase/performance-compat","fire-perf-compat"),"@firebase/remote-config","fire-rc"),_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(n,"@firebase/remote-config-compat","fire-rc-compat"),"@firebase/storage","fire-gcs"),"@firebase/storage-compat","fire-gcs-compat"),"@firebase/firestore","fire-fst"),"@firebase/firestore-compat","fire-fst-compat"),"@firebase/ai","fire-vertex"),"fire-js","fire-js"),"firebase","fire-js-all")),m=new Map,_=new Map,b=new Map
function _addComponent(e,t){try{e.container.addComponent(t)}catch(r){g.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function _registerComponent(e){var t=e.name
if(b.has(t))return g.debug("There were multiple attempts to register component ".concat(t,".")),!1
b.set(t,e)
var r,n=_createForOfIteratorHelper(m.values())
try{for(n.s();!(r=n.n()).done;){_addComponent(r.value,e)}}catch(e){n.e(e)}finally{n.f()}var a,o=_createForOfIteratorHelper(_.values())
try{for(o.s();!(a=o.n()).done;){_addComponent(a.value,e)}}catch(e){o.e(e)}finally{o.f()}return!0}function _getProvider(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0})
return r&&r.triggerHeartbeat(),e.container.getProvider(t)}var w=(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(a={},"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),"bad-app-name","Illegal App name: '{$appName}'"),"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),"app-deleted","Firebase App named '{$appName}' already deleted"),"server-app-deleted","Firebase Server App has been deleted"),"no-options","Need to provide options, when not being deployed to hosting via source."),"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),"invalid-log-argument","First argument to `onLog` must be null or a function."),"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),_defineProperty(_defineProperty(_defineProperty(_defineProperty(a,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),"finalization-registry-not-supported","FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry."),"invalid-server-app-environment","FirebaseServerApp is not for use in browser environments.")),k=new u.b("app","Firebase",w),C=function(){return _createClass(function FirebaseAppImpl(e,t,r){var n=this
_classCallCheck(this,FirebaseAppImpl),this._isDeleted=!1,this._options=_objectSpread({},e),this._config=_objectSpread({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new s.a("app",function(){return n},"PUBLIC"))},[{key:"automaticDataCollectionEnabled",get:function get(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function set(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function get(){return this.checkDestroyed(),this._name}},{key:"options",get:function get(){return this.checkDestroyed(),this._options}},{key:"config",get:function get(){return this.checkDestroyed(),this._config}},{key:"container",get:function get(){return this._container}},{key:"isDeleted",get:function get(){return this._isDeleted},set:function set(e){this._isDeleted=e}},{key:"checkDestroyed",value:function checkDestroyed(){if(this.isDeleted)throw k.create("app-deleted",{appName:this._name})}}])}()
var S="12.12.0"
function initializeApp(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e
"object"!==_typeof(t)&&(t={name:t})
var n=_objectSpread({name:y,automaticDataCollectionEnabled:!0},t),a=n.name
if("string"!=typeof a||!a)throw k.create("bad-app-name",{appName:String(a)})
if(r||(r=Object(u.j)()),!r)throw k.create("no-options")
var o=m.get(a)
if(o){if(Object(u.i)(r,o.options)&&Object(u.i)(n,o.config))return o
throw k.create("duplicate-app",{appName:a})}var i,c=new s.b(a),l=_createForOfIteratorHelper(b.values())
try{for(l.s();!(i=l.n()).done;){var f=i.value
c.addComponent(f)}}catch(e){l.e(e)}finally{l.f()}var p=new C(r,n,c)
return m.set(a,p),p}function getApp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=m.get(e)
if(!t&&e===y&&Object(u.j)())return initializeApp()
if(!t)throw k.create("no-app",{appName:e})
return t}function registerVersion(e,t,r){var n,a=null!==(n=v[e])&&void 0!==n?n:e
r&&(a+="-".concat(r))
var o=a.match(/\s|\//),i=t.match(/\s|\//)
if(o||i){var c=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')]
return o&&c.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),o&&i&&c.push("and"),i&&c.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void g.warn(c.join(" "))}_registerComponent(new s.a("".concat(a,"-version"),function(){return{library:a,version:t}},"VERSION"))}var T="firebase-heartbeat-database",I=1,P="firebase-heartbeat-store",E=null
function getDbPromise(){return E||(E=Object(l.a)(T,I,{upgrade:function upgrade(e,t){switch(t){case 0:try{e.createObjectStore(P)}catch(e){}}}}).catch(function(e){throw k.create("idb-open",{originalErrorMessage:e.message})})),E}function readHeartbeatsFromIndexedDB(e){return _readHeartbeatsFromIndexedDB.apply(this,arguments)}function _readHeartbeatsFromIndexedDB(){return(_readHeartbeatsFromIndexedDB=_asyncToGenerator(_regenerator().m(function _callee8(e){var t,r,n,a,o
return _regenerator().w(function(i){for(;;)switch(i.p=i.n){case 0:return i.p=0,i.n=1,getDbPromise()
case 1:return t=i.v,r=t.transaction(P),i.n=2,r.objectStore(P).get(computeKey(e))
case 2:return n=i.v,i.n=3,r.done
case 3:return i.a(2,n)
case 4:i.p=4,(o=i.v)instanceof u.c?g.warn(o.message):(a=k.create("idb-get",{originalErrorMessage:null==o?void 0:o.message}),g.warn(a.message))
case 5:return i.a(2)}},_callee8,null,[[0,4]])}))).apply(this,arguments)}function writeHeartbeatsToIndexedDB(e,t){return _writeHeartbeatsToIndexedDB.apply(this,arguments)}function _writeHeartbeatsToIndexedDB(){return(_writeHeartbeatsToIndexedDB=_asyncToGenerator(_regenerator().m(function _callee9(e,t){var r,n,a,o,i
return _regenerator().w(function(s){for(;;)switch(s.p=s.n){case 0:return s.p=0,s.n=1,getDbPromise()
case 1:return r=s.v,n=r.transaction(P,"readwrite"),a=n.objectStore(P),s.n=2,a.put(t,computeKey(e))
case 2:return s.n=3,n.done
case 3:s.n=5
break
case 4:s.p=4,(i=s.v)instanceof u.c?g.warn(i.message):(o=k.create("idb-set",{originalErrorMessage:null==i?void 0:i.message}),g.warn(o.message))
case 5:return s.a(2)}},_callee9,null,[[0,4]])}))).apply(this,arguments)}function computeKey(e){return"".concat(e.name,"!").concat(e.options.appId)}var O=1024,A=function(){return _createClass(function HeartbeatServiceImpl(e){var t=this
_classCallCheck(this,HeartbeatServiceImpl),this.container=e,this._heartbeatsCache=null
var r=this.container.getProvider("app").getImmediate()
this._storage=new D(r),this._heartbeatsCachePromise=this._storage.read().then(function(e){return t._heartbeatsCache=e,e})},[{key:"triggerHeartbeat",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee(){var e,t,r,n,a,o,i
return _regenerator().w(function(s){for(;;)switch(s.p=s.n){case 0:if(s.p=0,t=this.container.getProvider("platform-logger").getImmediate(),r=t.getPlatformInfoString(),n=getUTCDateString(),null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)){s.n=2
break}return s.n=1,this._heartbeatsCachePromise
case 1:if(this._heartbeatsCache=s.v,null!=(null===(a=this._heartbeatsCache)||void 0===a?void 0:a.heartbeats)){s.n=2
break}return s.a(2)
case 2:if(this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(function(e){return e.date===n})){s.n=3
break}return s.a(2)
case 3:this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>30&&(o=getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats),this._heartbeatsCache.heartbeats.splice(o,1))
case 4:return s.a(2,this._storage.overwrite(this._heartbeatsCache))
case 5:s.p=5,i=s.v,g.warn(i)
case 6:return s.a(2)}},_callee,this,[[0,5]])}))
return function triggerHeartbeat(){return e.apply(this,arguments)}}()},{key:"getHeartbeatsHeader",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee2(){var e,t,r,n,a,o,i
return _regenerator().w(function(s){for(;;)switch(s.p=s.n){case 0:if(s.p=0,null!==this._heartbeatsCache){s.n=1
break}return s.n=1,this._heartbeatsCachePromise
case 1:if(null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&0!==this._heartbeatsCache.heartbeats.length){s.n=2
break}return s.a(2,"")
case 2:if(t=getUTCDateString(),r=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),n=r.heartbeatsToSend,a=r.unsentEntries,o=Object(u.g)(JSON.stringify({version:2,heartbeats:n})),this._heartbeatsCache.lastSentHeartbeatDate=t,!(a.length>0)){s.n=4
break}return this._heartbeatsCache.heartbeats=a,s.n=3,this._storage.overwrite(this._heartbeatsCache)
case 3:s.n=5
break
case 4:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)
case 5:return s.a(2,o)
case 6:return s.p=6,i=s.v,g.warn(i),s.a(2,"")}},_callee2,this,[[0,6]])}))
return function getHeartbeatsHeader(){return e.apply(this,arguments)}}()}])}()
function getUTCDateString(){return(new Date).toISOString().substring(0,10)}function extractHeartbeatsForHeader(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O,n=[],a=e.slice(),o=_createForOfIteratorHelper(e)
try{var i=function _loop(){var e=t.value,o=n.find(function(t){return t.agent===e.agent})
if(o){if(o.dates.push(e.date),countBytes(n)>r)return o.dates.pop(),0}else if(n.push({agent:e.agent,dates:[e.date]}),countBytes(n)>r)return n.pop(),0
a=a.slice(1)}
for(o.s();!(t=o.n()).done&&0!==i(););}catch(e){o.e(e)}finally{o.f()}return{heartbeatsToSend:n,unsentEntries:a}}var D=function(){return _createClass(function HeartbeatStorageImpl(e){_classCallCheck(this,HeartbeatStorageImpl),this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()},[{key:"runIndexedDBEnvironmentCheck",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee3(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:if(Object(u.n)()){e.n=1
break}return e.a(2,!1)
case 1:return e.a(2,Object(u.p)().then(function(){return!0}).catch(function(){return!1}))
case 2:return e.a(2)}},_callee3)}))
return function runIndexedDBEnvironmentCheck(){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee4(){var e
return _regenerator().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,this._canUseIndexedDBPromise
case 1:if(t.v){t.n=2
break}return t.a(2,{heartbeats:[]})
case 2:return t.n=3,readHeartbeatsFromIndexedDB(this.app)
case 3:if(null==(e=t.v)||!e.heartbeats){t.n=4
break}return t.a(2,e)
case 4:return t.a(2,{heartbeats:[]})
case 5:return t.a(2)}},_callee4,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"overwrite",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee5(e){var t,r
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,this._canUseIndexedDBPromise
case 1:if(n.v){n.n=2
break}return n.a(2)
case 2:return n.n=3,this.read()
case 3:return r=n.v,n.a(2,writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats}))
case 4:return n.a(2)}},_callee5,this)}))
return function overwrite(t){return e.apply(this,arguments)}}()},{key:"add",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee6(e){var t,r
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,this._canUseIndexedDBPromise
case 1:if(n.v){n.n=2
break}return n.a(2)
case 2:return n.n=3,this.read()
case 3:return r=n.v,n.a(2,writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[].concat(_toConsumableArray(r.heartbeats),_toConsumableArray(e.heartbeats))}))
case 4:return n.a(2)}},_callee6,this)}))
return function add(t){return e.apply(this,arguments)}}()}])}()
function countBytes(e){return Object(u.g)(JSON.stringify({version:2,heartbeats:e})).length}function getEarliestHeartbeatIdx(e){if(0===e.length)return-1
for(var t=0,r=e[0].date,n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n)
return t}!function registerCoreComponents(e){_registerComponent(new s.a("platform-logger",function(e){return new p(e)},"PRIVATE")),_registerComponent(new s.a("heartbeat",function(e){return new A(e)},"PRIVATE")),registerVersion(h,d,e),registerVersion(h,d,"esm2020"),registerVersion("fire-js","")}("")},aKMV:function(e,t,r){"use strict"
r.d(t,"a",function(){return fetchAndActivate}),r.d(t,"b",function(){return getRemoteConfig}),r.d(t,"c",function(){return getValue})
var n,a=r("TuP9"),s=r("qOnz"),c=r("Sy3o"),u=r("hCgk")
r("HLBe")
function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_unsupportedIterableToArray(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _callSuper(e,t,r){return t=_getPrototypeOf(t),function _possibleConstructorReturn(e,t){if(t&&("object"==_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(e,function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return function _isNativeReflectConstruct(){return!!e}()}()?Reflect.construct(t,r||[],_getPrototypeOf(e).constructor):t.apply(e,r))}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,i,s=[],c=!0,u=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
c=!1}else for(;!(c=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return s}}(e,t)||_unsupportedIterableToArray(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return u=e.done,e},e:function e(t){l=!0,c=t},f:function f(){try{u||null==a.return||a.return()}finally{if(l)throw c}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function _regenerator(){var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",a=r.toStringTag||"@@toStringTag"
function i(r,n,a,i){var s=n&&n.prototype instanceof Generator?n:Generator,c=Object.create(s.prototype)
return _regeneratorDefine2(c,"_invoke",function(r,n,a){var i,s,c,u=0,l=a||[],f=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,s=0,c=e,p.n=r,o}}
function d(r,n){for(s=r,c=n,t=0;!f&&u&&!a&&t<l.length;t++){var a,i=l[t],h=p.p,d=i[2]
r>3?(a=d===n)&&(c=i[(s=i[4])?5:(s=3,3)],i[4]=i[5]=e):i[0]<=h&&((a=r<2&&h<i[1])?(s=0,p.v=n,p.n=i[1]):h<d&&(a=r<3||i[0]>n||n>d)&&(i[4]=r,i[5]=n,p.n=d,s=0))}if(a||r>1)return o
throw f=!0,n}return function(a,l,h){if(u>1)throw TypeError("Generator is already running")
for(f&&1===l&&d(l,h),s=l,c=h;(t=s<2?e:c)||!f;){i||(s?s<3?(s>1&&(p.n=-1),d(s,c)):p.n=c:p.v=c)
try{if(u=2,i){if(s||(a="next"),t=i[a]){if(!(t=t.call(i,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,s<2&&(s=0)}else 1===s&&(t=i.return)&&t.call(i),s<2&&(c=TypeError("The iterator does not provide a '"+a+"' method"),s=1)
i=e}else if((t=(f=p.n<0)?c:r.call(n,p))!==o)break}catch(t){i=e,s=1,c=t}finally{u=1}}return{value:t,done:f}}}(r,a,i),!0),c}var o={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf
var s=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),c=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,a,"GeneratorFunction")),e.prototype=Object.create(c),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(c,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(c),_regeneratorDefine2(c,a,"Generator"),_regeneratorDefine2(c,n,function(){return this}),_regeneratorDefine2(c,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,t,r,n){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}(_regeneratorDefine2=function _regeneratorDefine(e,t,r,n){function o(t,r){_regeneratorDefine2(e,t,function(e){return this._invoke(t,r,e)})}t?a?a(e,t,{value:r,enumerable:!n,configurable:!n,writable:!n}):e[t]=r:(o("next",0),o("throw",1),o("return",2))})(e,t,r,n)}function asyncGeneratorStep(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise(function(n,a){var o=e.apply(t,r)
function _next(e){asyncGeneratorStep(o,n,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,a,_next,_throw,"throw",e)}_next(void 0)})}}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==_typeof(t)?t:t+""}var l="@firebase/remote-config",p="0.8.2",h=function(){return _createClass(function RemoteConfigAbortSignal(){_classCallCheck(this,RemoteConfigAbortSignal),this.listeners=[]},[{key:"addEventListener",value:function addEventListener(e){this.listeners.push(e)}},{key:"abort",value:function abort(){this.listeners.forEach(function(e){return e()})}}])}(),d="remote-config",g=100,y=(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(n={},"already-initialized","Remote Config already initialized"),"registration-window","Undefined window object. This SDK only supports usage in a browser environment."),"registration-project-id","Undefined project identifier. Check Firebase app initialization."),"registration-api-key","Undefined API key. Check Firebase app initialization."),"registration-app-id","Undefined app identifier. Check Firebase app initialization."),"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),"fetch-client-network","Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}."),_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(n,"fetch-timeout",'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.'),"fetch-throttle",'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.'),"fetch-client-parse","Fetch client could not parse response. Original error: {$originalErrorMessage}."),"fetch-status","Fetch server returned an HTTP error status. HTTP status: {$httpStatus}."),"indexed-db-unavailable","Indexed DB is not supported by current browser"),"custom-signal-max-allowed-signals","Setting more than {$maxSignals} custom signals is not supported."),"stream-error","The stream was not able to connect to the backend: {$originalErrorMessage}."),"realtime-unavailable","The Realtime service is unavailable: {$originalErrorMessage}"),"update-message-invalid","The stream invalidation message was unparsable: {$originalErrorMessage}"),"update-not-fetched","Unable to fetch the latest config: {$originalErrorMessage}"),_defineProperty(n,"analytics-unavailable","Connection to Firebase Analytics failed: {$originalErrorMessage}")),v=new s.b("remoteconfig","Remote Config",y)
var m="",_=["1","true","t","yes","y","on"],b=function(){return _createClass(function Value(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m
_classCallCheck(this,Value),this._source=e,this._value=t},[{key:"asString",value:function asString(){return this._value}},{key:"asBoolean",value:function asBoolean(){return"static"!==this._source&&_.indexOf(this._value.toLowerCase())>=0}},{key:"asNumber",value:function asNumber(){if("static"===this._source)return 0
var e=Number(this._value)
return isNaN(e)&&(e=0),e}},{key:"getSource",value:function getSource(){return this._source}}])}(),w=function(){return _createClass(function Experiment(e){_classCallCheck(this,Experiment),this.storage=e._storage,this.logger=e._logger,this.analyticsProvider=e._analyticsProvider},[{key:"updateActiveExperiments",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee(e){var t,r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,this.storage.getActiveExperiments()
case 1:if(n=a.v){a.n=2
break}n=new Set
case 2:return t=n,r=this.createExperimentInfoMap(e),this.addActiveExperiments(r),this.removeInactiveExperiments(t,r),a.a(2,this.storage.setActiveExperiments(new Set(r.keys())))}},_callee,this)}))
return function updateActiveExperiments(t){return e.apply(this,arguments)}}()},{key:"createExperimentInfoMap",value:function createExperimentInfoMap(e){var t,r=new Map,n=_createForOfIteratorHelper(e)
try{for(n.s();!(t=n.n()).done;){var a=t.value
r.set(a.experimentId,a)}}catch(e){n.e(e)}finally{n.f()}return r}},{key:"addActiveExperiments",value:function addActiveExperiments(e){var t,r={},n=_createForOfIteratorHelper(e.entries())
try{for(n.s();!(t=n.n()).done;){var a=_slicedToArray(t.value,2),o=a[0],i=a[1]
r["firebase".concat(o)]=i.variantId}}catch(e){n.e(e)}finally{n.f()}this.addExperimentToAnalytics(r)}},{key:"removeInactiveExperiments",value:function removeInactiveExperiments(e,t){var r,n={},a=_createForOfIteratorHelper(e)
try{for(a.s();!(r=a.n()).done;){var o=r.value
t.has(o)||(n["firebase".concat(o)]=null)}}catch(e){a.e(e)}finally{a.f()}this.addExperimentToAnalytics(n)}},{key:"addExperimentToAnalytics",value:function addExperimentToAnalytics(e){if(0!==Object.keys(e).length)try{var t=this.analyticsProvider.getImmediate({optional:!0})
t?(t.setUserProperties(e),t.logEvent("set_firebase_experiment_state")):this.logger.warn("Analytics import failed. Verify if you have imported Firebase Analytics in your app code.")}catch(e){throw v.create("analytics-unavailable",{originalErrorMessage:null==e?void 0:e.message})}}}])}()
function getRemoteConfig(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(a.d)(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
e=Object(s.k)(e)
var r=Object(a.b)(e,d)
if(r.isInitialized()){var n=r.getOptions()
if(Object(s.i)(n,t))return r.getImmediate()
throw v.create("already-initialized")}r.initialize({options:t})
var o,i,c=r.getImmediate()
t.initialFetchResponse&&(c._initializePromise=Promise.all([c._storage.setLastSuccessfulFetchResponse(t.initialFetchResponse),c._storage.setActiveConfigEtag((null===(o=t.initialFetchResponse)||void 0===o?void 0:o.eTag)||""),c._storage.setActiveConfigTemplateVersion(t.initialFetchResponse.templateVersion||0),c._storageCache.setLastSuccessfulFetchTimestampMillis(Date.now()),c._storageCache.setLastFetchStatus("success"),c._storageCache.setActiveConfig((null===(i=t.initialFetchResponse)||void 0===i?void 0:i.config)||{})]).then(),c._isInitializationComplete=!0)
return c}function activate(e){return _activate.apply(this,arguments)}function _activate(){return(_activate=_asyncToGenerator(_regenerator().m(function _callee32(e){var t,r,n,a,o,i,c
return _regenerator().w(function(u){for(;;)switch(u.n){case 0:return t=Object(s.k)(e),u.n=1,Promise.all([t._storage.getLastSuccessfulFetchResponse(),t._storage.getActiveConfigEtag()])
case 1:if(r=u.v,n=_slicedToArray(r,2),a=n[0],o=n[1],a&&a.config&&a.eTag&&a.templateVersion&&a.eTag!==o){u.n=2
break}return u.a(2,!1)
case 2:return i=new w(t),c=a.experiments?i.updateActiveExperiments(a.experiments):Promise.resolve(),u.n=3,Promise.all([t._storageCache.setActiveConfig(a.config),t._storage.setActiveConfigEtag(a.eTag),t._storage.setActiveConfigTemplateVersion(a.templateVersion),c])
case 3:return u.a(2,!0)}},_callee32)}))).apply(this,arguments)}function fetchConfig(e){return _fetchConfig.apply(this,arguments)}function _fetchConfig(){return(_fetchConfig=_asyncToGenerator(_regenerator().m(function _callee34(e){var t,r,n,a,o
return _regenerator().w(function(i){for(;;)switch(i.p=i.n){case 0:return t=Object(s.k)(e),r=new h,setTimeout(_asyncToGenerator(_regenerator().m(function _callee33(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:r.abort()
case 1:return e.a(2)}},_callee33)})),t.settings.fetchTimeoutMillis),(n=t._storageCache.getCustomSignals())&&t._logger.debug("Fetching config with custom signals: ".concat(JSON.stringify(n))),i.p=1,i.n=2,t._client.fetch({cacheMaxAgeMillis:t.settings.minimumFetchIntervalMillis,signal:r,customSignals:n})
case 2:return i.n=3,t._storageCache.setLastFetchStatus("success")
case 3:i.n=6
break
case 4:return i.p=4,o=i.v,u="fetch-throttle",a=(c=o)instanceof s.c&&-1!==c.code.indexOf(u)?"throttle":"failure",i.n=5,t._storageCache.setLastFetchStatus(a)
case 5:throw o
case 6:return i.a(2)}var c,u},_callee34,null,[[1,4]])}))).apply(this,arguments)}function getValue(e,t){var r=Object(s.k)(e)
r._isInitializationComplete||r._logger.debug('A value was requested for key "'.concat(t,'" before SDK initialization completed.')+" Await on ensureInitialized if the intent was to get a previously activated value.")
var n=r._storageCache.getActiveConfig()
return n&&void 0!==n[t]?new b("remote",n[t]):r.defaultConfig&&void 0!==r.defaultConfig[t]?new b("default",String(r.defaultConfig[t])):(r._logger.debug('Returning static value for key "'.concat(t,'".')+" Define a default or remote value if this is unintentional."),new b("static"))}var k=function(){return _createClass(function CachingClient(e,t,r,n){_classCallCheck(this,CachingClient),this.client=e,this.storage=t,this.storageCache=r,this.logger=n},[{key:"isCachedDataFresh",value:function isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1
var r=Date.now()-t,isCachedDataFresh=r<=e
return this.logger.debug("Config fetch cache check."+" Cache age millis: ".concat(r,".")+" Cache max age millis (minimumFetchIntervalMillis setting): ".concat(e,".")+" Is cache hit: ".concat(isCachedDataFresh,".")),isCachedDataFresh}},{key:"fetch",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee2(e){var t,r,n,a,o,i
return _regenerator().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])
case 1:if(t=s.v,r=_slicedToArray(t,2),n=r[0],!(a=r[1])||!this.isCachedDataFresh(e.cacheMaxAgeMillis,n)){s.n=2
break}return s.a(2,a)
case 2:return e.eTag=a&&a.eTag,s.n=3,this.client.fetch(e)
case 3:return o=s.v,i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===o.status&&i.push(this.storage.setLastSuccessfulFetchResponse(o)),s.n=4,Promise.all(i)
case 4:return s.a(2,o)}},_callee2,this)}))
return function fetch(t){return e.apply(this,arguments)}}()}])}()
function getUserLanguage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator
return e.languages&&e.languages[0]||e.language}var C=function(){return _createClass(function RestClient(e,t,r,n,a,o){_classCallCheck(this,RestClient),this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=r,this.projectId=n,this.apiKey=a,this.appId=o},[{key:"fetch",value:function(e){function fetch(t){return e.apply(this,arguments)}return fetch.toString=function(){return e.toString()},fetch}(function(){var e=_asyncToGenerator(_regenerator().m(function _callee3(e){var t,r,n,a,o,i,s,c,u,l,f,p,h,d,g,y,m,_,b,w,k,C
return _regenerator().w(function(S){for(;;)switch(S.p=S.n){case 0:return S.n=1,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])
case 1:return t=S.v,r=_slicedToArray(t,2),n=r[0],a=r[1],o=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",i="".concat(o,"/v1/projects/").concat(this.projectId,"/namespaces/").concat(this.namespace,":fetch?key=").concat(this.apiKey),s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:a,app_id:this.appId,language_code:getUserLanguage(),custom_signals:e.customSignals},u={method:"POST",headers:s,body:JSON.stringify(c)},l=fetch(i,u),f=new Promise(function(t,r){e.signal.addEventListener(function(){var e=new Error("The operation was aborted.")
e.name="AbortError",r(e)})}),S.p=2,S.n=3,Promise.race([l,f])
case 3:return S.n=4,l
case 4:p=S.v,S.n=6
break
case 5:throw S.p=5,k=S.v,h="fetch-client-network","AbortError"===(null==k?void 0:k.name)&&(h="fetch-timeout"),v.create(h,{originalErrorMessage:null==k?void 0:k.message})
case 6:if(d=p.status,g=p.headers.get("ETag")||void 0,200!==p.status){S.n=11
break}return S.p=7,S.n=8,p.json()
case 8:w=S.v,S.n=10
break
case 9:throw S.p=9,C=S.v,v.create("fetch-client-parse",{originalErrorMessage:null==C?void 0:C.message})
case 10:y=w.entries,m=w.state,_=w.templateVersion,b=w.experimentDescriptions
case 11:if("INSTANCE_STATE_UNSPECIFIED"===m?d=500:"NO_CHANGE"===m?d=304:"NO_TEMPLATE"!==m&&"EMPTY_CONFIG"!==m||(y={},b=[]),304===d||200===d){S.n=12
break}throw v.create("fetch-status",{httpStatus:d})
case 12:return S.a(2,{status:d,eTag:g,config:y,templateVersion:_,experiments:b})}},_callee3,this,[[7,9],[2,5]])}))
return function(t){return e.apply(this,arguments)}}())}])}()
function setAbortableTimeout(e,t){return new Promise(function(r,n){var a=Math.max(t-Date.now(),0),o=setTimeout(r,a)
e.addEventListener(function(){clearTimeout(o),n(v.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function isRetriableError(e){if(!(e instanceof s.c&&e.customData))return!1
var t=Number(e.customData.httpStatus)
return 429===t||500===t||503===t||504===t}var S=function(){return _createClass(function RetryingClient(e,t){_classCallCheck(this,RetryingClient),this.client=e,this.storage=t},[{key:"fetch",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee4(e){var t,r
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,this.storage.getThrottleMetadata()
case 1:if(r=n.v){n.n=2
break}r={backoffCount:0,throttleEndTimeMillis:Date.now()}
case 2:return t=r,n.a(2,this.attemptFetch(e,t))}},_callee4,this)}))
return function fetch(t){return e.apply(this,arguments)}}()},{key:"attemptFetch",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee5(e,t){var r,n,a,o,i
return _regenerator().w(function(c){for(;;)switch(c.p=c.n){case 0:return r=t.throttleEndTimeMillis,n=t.backoffCount,c.n=1,setAbortableTimeout(e.signal,r)
case 1:return c.p=1,c.n=2,this.client.fetch(e)
case 2:return a=c.v,c.n=3,this.storage.deleteThrottleMetadata()
case 3:return c.a(2,a)
case 4:if(c.p=4,isRetriableError(i=c.v)){c.n=5
break}throw i
case 5:return o={throttleEndTimeMillis:Date.now()+Object(s.h)(n),backoffCount:n+1},c.n=6,this.storage.setThrottleMetadata(o)
case 6:return c.a(2,this.attemptFetch(e,o))}},_callee5,this,[[1,4]])}))
return function attemptFetch(t,r){return e.apply(this,arguments)}}()}])}(),T=6e4,I=432e5,P=function(){return _createClass(function RemoteConfig(e,t,r,n,a,o,i){_classCallCheck(this,RemoteConfig),this.app=e,this._client=t,this._storageCache=r,this._storage=n,this._logger=a,this._realtimeHandler=o,this._analyticsProvider=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:T,minimumFetchIntervalMillis:I},this.defaultConfig={}},[{key:"fetchTimeMillis",get:function get(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}},{key:"lastFetchStatus",get:function get(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}])}()
function toFirebaseError(e,t){var r=e.target.error||void 0
return v.create(t,{originalErrorMessage:r&&(null==r?void 0:r.message)})}var E="app_namespace_store",O="firebase_remote_config",A=1
var D=function(){return _createClass(function Storage(){_classCallCheck(this,Storage)},[{key:"getLastFetchStatus",value:function getLastFetchStatus(){return this.get("last_fetch_status")}},{key:"setLastFetchStatus",value:function setLastFetchStatus(e){return this.set("last_fetch_status",e)}},{key:"getLastSuccessfulFetchTimestampMillis",value:function getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}},{key:"setLastSuccessfulFetchTimestampMillis",value:function setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}},{key:"getLastSuccessfulFetchResponse",value:function getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}},{key:"setLastSuccessfulFetchResponse",value:function setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}},{key:"getActiveConfig",value:function getActiveConfig(){return this.get("active_config")}},{key:"setActiveConfig",value:function setActiveConfig(e){return this.set("active_config",e)}},{key:"getActiveConfigEtag",value:function getActiveConfigEtag(){return this.get("active_config_etag")}},{key:"setActiveConfigEtag",value:function setActiveConfigEtag(e){return this.set("active_config_etag",e)}},{key:"getActiveExperiments",value:function getActiveExperiments(){return this.get("active_experiments")}},{key:"setActiveExperiments",value:function setActiveExperiments(e){return this.set("active_experiments",e)}},{key:"getThrottleMetadata",value:function getThrottleMetadata(){return this.get("throttle_metadata")}},{key:"setThrottleMetadata",value:function setThrottleMetadata(e){return this.set("throttle_metadata",e)}},{key:"deleteThrottleMetadata",value:function deleteThrottleMetadata(){return this.delete("throttle_metadata")}},{key:"getCustomSignals",value:function getCustomSignals(){return this.get("custom_signals")}},{key:"getRealtimeBackoffMetadata",value:function getRealtimeBackoffMetadata(){return this.get("realtime_backoff_metadata")}},{key:"setRealtimeBackoffMetadata",value:function setRealtimeBackoffMetadata(e){return this.set("realtime_backoff_metadata",e)}},{key:"getActiveConfigTemplateVersion",value:function getActiveConfigTemplateVersion(){return this.get("last_known_template_version")}},{key:"setActiveConfigTemplateVersion",value:function setActiveConfigTemplateVersion(e){return this.set("last_known_template_version",e)}}])}(),F=function(e){function IndexedDbStorage(e,t,r){var n,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function openDatabase(){return new Promise(function(e,t){try{var r=indexedDB.open(O,A)
r.onerror=function(e){t(toFirebaseError(e,"storage-open"))},r.onsuccess=function(t){e(t.target.result)},r.onupgradeneeded=function(e){var t=e.target.result
switch(e.oldVersion){case 0:t.createObjectStore(E,{keyPath:"compositeKey"})}}}catch(e){t(v.create("storage-open",{originalErrorMessage:null==e?void 0:e.message}))}})}()
return _classCallCheck(this,IndexedDbStorage),(n=_callSuper(this,IndexedDbStorage)).appId=e,n.appName=t,n.namespace=r,n.openDbPromise=a,n}return _inherits(IndexedDbStorage,D),_createClass(IndexedDbStorage,[{key:"setCustomSignals",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee6(e){var t,r,n,a
return _regenerator().w(function(o){for(;;)switch(o.n){case 0:return o.n=1,this.openDbPromise
case 1:return t=o.v,r=t.transaction([E],"readwrite"),o.n=2,this.getWithTransaction("custom_signals",r)
case 2:return n=o.v,a=mergeCustomSignals(e,n||{}),o.n=3,this.setWithTransaction("custom_signals",a,r)
case 3:return o.a(2,a)}},_callee6,this)}))
return function setCustomSignals(t){return e.apply(this,arguments)}}()},{key:"getWithTransaction",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee7(e,t){var r=this
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:return n.a(2,new Promise(function(n,a){var o=t.objectStore(E),i=r.createCompositeKey(e)
try{var s=o.get(i)
s.onerror=function(e){a(toFirebaseError(e,"storage-get"))},s.onsuccess=function(e){var t=e.target.result
n(t?t.value:void 0)}}catch(e){a(v.create("storage-get",{originalErrorMessage:null==e?void 0:e.message}))}}))}},_callee7)}))
return function getWithTransaction(t,r){return e.apply(this,arguments)}}()},{key:"setWithTransaction",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee8(e,t,r){var n=this
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.a(2,new Promise(function(a,o){var i=r.objectStore(E),s=n.createCompositeKey(e)
try{var c=i.put({compositeKey:s,value:t})
c.onerror=function(e){o(toFirebaseError(e,"storage-set"))},c.onsuccess=function(){a()}}catch(e){o(v.create("storage-set",{originalErrorMessage:null==e?void 0:e.message}))}}))}},_callee8)}))
return function setWithTransaction(t,r,n){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee9(e){var t,r
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,this.openDbPromise
case 1:return t=n.v,r=t.transaction([E],"readonly"),n.a(2,this.getWithTransaction(e,r))}},_callee9,this)}))
return function get(t){return e.apply(this,arguments)}}()},{key:"set",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee0(e,t){var r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,this.openDbPromise
case 1:return r=a.v,n=r.transaction([E],"readwrite"),a.a(2,this.setWithTransaction(e,t,n))}},_callee0,this)}))
return function set(t,r){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee1(e){var t,r=this
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,this.openDbPromise
case 1:return t=n.v,n.a(2,new Promise(function(n,a){var o=t.transaction([E],"readwrite").objectStore(E),i=r.createCompositeKey(e)
try{var s=o.delete(i)
s.onerror=function(e){a(toFirebaseError(e,"storage-delete"))},s.onsuccess=function(){n()}}catch(e){a(v.create("storage-delete",{originalErrorMessage:null==e?void 0:e.message}))}}))}},_callee1,this)}))
return function _delete(t){return e.apply(this,arguments)}}()},{key:"createCompositeKey",value:function createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}])}(),j=function(e){function InMemoryStorage(){var e
return _classCallCheck(this,InMemoryStorage),(e=_callSuper(this,InMemoryStorage,arguments)).storage={},e}return _inherits(InMemoryStorage,D),_createClass(InMemoryStorage,[{key:"get",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee10(e){return _regenerator().w(function(t){for(;;)switch(t.n){case 0:return t.a(2,Promise.resolve(this.storage[e]))}},_callee10,this)}))
return function get(t){return e.apply(this,arguments)}}()},{key:"set",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee11(e,t){return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return this.storage[e]=t,r.a(2,Promise.resolve(void 0))}},_callee11,this)}))
return function set(t,r){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee12(e){return _regenerator().w(function(t){for(;;)switch(t.n){case 0:return this.storage[e]=void 0,t.a(2,Promise.resolve())}},_callee12,this)}))
return function _delete(t){return e.apply(this,arguments)}}()},{key:"setCustomSignals",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee13(e){var t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return t=this.storage.custom_signals||{},this.storage.custom_signals=mergeCustomSignals(e,t),r.a(2,Promise.resolve(this.storage.custom_signals))}},_callee13,this)}))
return function setCustomSignals(t){return e.apply(this,arguments)}}()}])}()
function mergeCustomSignals(e,t){var r=_objectSpread(_objectSpread({},t),e),n=Object.fromEntries(Object.entries(r).filter(function(e){var t=_slicedToArray(e,2)
t[0]
return null!==t[1]}).map(function(e){var t=_slicedToArray(e,2),r=t[0],n=t[1]
return"number"==typeof n?[r,n.toString()]:[r,n]}))
if(Object.keys(n).length>g)throw v.create("custom-signal-max-allowed-signals",{maxSignals:g})
return n}var R=function(){return _createClass(function StorageCache(e){_classCallCheck(this,StorageCache),this.storage=e},[{key:"getLastFetchStatus",value:function getLastFetchStatus(){return this.lastFetchStatus}},{key:"getLastSuccessfulFetchTimestampMillis",value:function getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}},{key:"getActiveConfig",value:function getActiveConfig(){return this.activeConfig}},{key:"getCustomSignals",value:function getCustomSignals(){return this.customSignals}},{key:"loadFromStorage",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee14(){var e,t,r,n,a,o,i,s
return _regenerator().w(function(c){for(;;)switch(c.n){case 0:return e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),n=this.storage.getCustomSignals(),c.n=1,e
case 1:return(a=c.v)&&(this.lastFetchStatus=a),c.n=2,t
case 2:return(o=c.v)&&(this.lastSuccessfulFetchTimestampMillis=o),c.n=3,r
case 3:return(i=c.v)&&(this.activeConfig=i),c.n=4,n
case 4:(s=c.v)&&(this.customSignals=s)
case 5:return c.a(2)}},_callee14,this)}))
return function loadFromStorage(){return e.apply(this,arguments)}}()},{key:"setLastFetchStatus",value:function setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}},{key:"setLastSuccessfulFetchTimestampMillis",value:function setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}},{key:"setActiveConfig",value:function setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}},{key:"setCustomSignals",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee15(e){return _regenerator().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,this.storage.setCustomSignals(e)
case 1:this.customSignals=t.v
case 2:return t.a(2)}},_callee15,this)}))
return function setCustomSignals(t){return e.apply(this,arguments)}}()}])}(),G=function(){return _createClass(function EventEmitter(e){_classCallCheck(this,EventEmitter),this.allowedEvents_=e,this.listeners_={},Object(s.e)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")},[{key:"trigger",value:function trigger(e){if(Array.isArray(this.listeners_[e])){for(var t=_toConsumableArray(this.listeners_[e]),r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a]
for(var o=0;o<t.length;o++)t[o].callback.apply(t[o].context,n)}}},{key:"on",value:function on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r})
var n=this.getInitialEvent(e)
n&&t.apply(r,n)}},{key:"off",value:function off(e,t,r){this.validateEventType_(e)
for(var n=this.listeners_[e]||[],a=0;a<n.length;a++)if(n[a].callback===t&&(!r||r===n[a].context))return void n.splice(a,1)}},{key:"validateEventType_",value:function validateEventType_(e){Object(s.e)(this.allowedEvents_.find(function(t){return t===e}),"Unknown event: "+e)}}])}(),M=function(e){function VisibilityMonitor(){var e,t,r
return _classCallCheck(this,VisibilityMonitor),e=_callSuper(this,VisibilityMonitor,[["visible"]]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(r="visibilitychange",t="hidden"):void 0!==document.mozHidden?(r="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(r="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(r="webkitvisibilitychange",t="webkitHidden")),e.visible_=!0,r&&document.addEventListener(r,function(){var r=!document[t]
r!==e.visible_&&(e.visible_=r,e.trigger("visible",r))},!1),e}return _inherits(VisibilityMonitor,G),_createClass(VisibilityMonitor,[{key:"getInitialEvent",value:function getInitialEvent(e){return Object(s.e)("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function getInstance(){return new VisibilityMonitor}}])}(),x=8,L=function(){return _createClass(function RealtimeHandler(e,t,r,n,a,o,i,s,c,u){var l=this
_classCallCheck(this,RealtimeHandler),this.firebaseInstallations=e,this.storage=t,this.sdkVersion=r,this.namespace=n,this.projectId=a,this.apiKey=o,this.appId=i,this.logger=s,this.storageCache=c,this.cachingClient=u,this.observers=new Set,this.isConnectionActive=!1,this.isRealtimeDisabled=!1,this.httpRetriesRemaining=x,this.isInBackground=!1,this.decoder=new TextDecoder("utf-8"),this.isClosingConnection=!1,this.propagateError=function(e){return l.observers.forEach(function(t){var r
return null===(r=t.error)||void 0===r?void 0:r.call(t,e)})},this.isStatusCodeRetryable=function(e){return!e||[408,429,502,503,504].includes(e)},this.setRetriesRemaining(),M.getInstance().on("visible",this.onVisibilityChange,this)},[{key:"setRetriesRemaining",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee16(){var e,t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,this.storage.getRealtimeBackoffMetadata()
case 1:e=r.v,t=(null==e?void 0:e.numFailedStreams)||0,this.httpRetriesRemaining=Math.max(x-t,1)
case 2:return r.a(2)}},_callee16,this)}))
return function setRetriesRemaining(){return e.apply(this,arguments)}}()},{key:"updateBackoffMetadataWithLastFailedStreamConnectionTime",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee17(e){var t,r,n,a,o,i,c
return _regenerator().w(function(u){for(;;)switch(u.n){case 0:return u.n=1,this.storage.getRealtimeBackoffMetadata()
case 1:if(i=t=u.v,o=null===i){u.n=2
break}o=void 0===t
case 2:if(!o){u.n=3
break}c=void 0,u.n=4
break
case 3:c=t.numFailedStreams
case 4:if(a=c){u.n=5
break}a=0
case 5:return r=a+1,n=Object(s.h)(r,6e4,2),u.n=6,this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(e.getTime()+n),numFailedStreams:r})
case 6:return u.a(2)}},_callee17,this)}))
return function updateBackoffMetadataWithLastFailedStreamConnectionTime(t){return e.apply(this,arguments)}}()},{key:"updateBackoffMetadataWithRetryInterval",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee18(e){var t,r
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:return t=Date.now(),r=new Date(t+1e3*e),0,n.n=1,this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:r,numFailedStreams:0})
case 1:return n.n=2,this.retryHttpConnectionWhenBackoffEnds()
case 2:return n.a(2)}},_callee18,this)}))
return function updateBackoffMetadataWithRetryInterval(t){return e.apply(this,arguments)}}()},{key:"closeRealtimeHttpConnection",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee19(){return _regenerator().w(function(e){for(;;)switch(e.p=e.n){case 0:if(!this.isClosingConnection){e.n=1
break}return e.a(2)
case 1:if(this.isClosingConnection=!0,e.p=2,!this.reader){e.n=3
break}return e.n=3,this.reader.cancel()
case 3:e.n=5
break
case 4:e.p=4,e.v,this.logger.debug("Failed to cancel the reader, connection was lost.")
case 5:return e.p=5,this.reader=void 0,e.f(5)
case 6:if(!this.controller){e.n=8
break}return e.n=7,this.controller.abort()
case 7:this.controller=void 0
case 8:this.isClosingConnection=!1
case 9:return e.a(2)}},_callee19,this,[[2,4,5,6]])}))
return function closeRealtimeHttpConnection(){return e.apply(this,arguments)}}()},{key:"resetRealtimeBackoff",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee20(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(-1),numFailedStreams:0})
case 1:return e.a(2)}},_callee20,this)}))
return function resetRealtimeBackoff(){return e.apply(this,arguments)}}()},{key:"resetRetryCount",value:function resetRetryCount(){this.httpRetriesRemaining=x}},{key:"establishRealtimeConnection",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee21(e,t,r,n){var a,o,i,s,c
return _regenerator().w(function(u){for(;;)switch(u.n){case 0:return u.n=1,this.storage.getActiveConfigEtag()
case 1:return a=u.v,u.n=2,this.storage.getActiveConfigTemplateVersion()
case 2:return o=u.v,i=_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},"X-Goog-Api-Key",this.apiKey),"X-Goog-Firebase-Installations-Auth",r),"Content-Type","application/json"),"Accept","application/json"),"If-None-Match",a||"*"),"Content-Encoding","gzip"),s={project:this.projectId,namespace:this.namespace,lastKnownVersionNumber:o,appId:this.appId,sdkVersion:this.sdkVersion,appInstanceId:t},u.n=3,fetch(e,{method:"POST",headers:i,body:JSON.stringify(s),signal:n})
case 3:return c=u.v,u.a(2,c)}},_callee21,this)}))
return function establishRealtimeConnection(t,r,n,a){return e.apply(this,arguments)}}()},{key:"getRealtimeUrl",value:function getRealtimeUrl(){var e=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfigrealtime.googleapis.com",t="".concat(e,"/v1/projects/").concat(this.projectId,"/namespaces/").concat(this.namespace,":streamFetchInvalidations?key=").concat(this.apiKey)
return new URL(t)}},{key:"createRealtimeConnection",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee22(){var e,t,r,n,a,o
return _regenerator().w(function(i){for(;;)switch(i.n){case 0:return i.n=1,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken(!1)])
case 1:return e=i.v,t=_slicedToArray(e,2),r=t[0],n=t[1],this.controller=new AbortController,a=this.getRealtimeUrl(),i.n=2,this.establishRealtimeConnection(a,r,n,this.controller.signal)
case 2:return o=i.v,i.a(2,o)}},_callee22,this)}))
return function createRealtimeConnection(){return e.apply(this,arguments)}}()},{key:"retryHttpConnectionWhenBackoffEnds",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee23(){var e,t,r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,this.storage.getRealtimeBackoffMetadata()
case 1:return(e=a.v)||(e={backoffEndTimeMillis:new Date(-1),numFailedStreams:0}),t=new Date(e.backoffEndTimeMillis).getTime(),r=Date.now(),n=Math.max(0,t-r),a.n=2,this.makeRealtimeHttpConnection(n)
case 2:return a.a(2)}},_callee23,this)}))
return function retryHttpConnectionWhenBackoffEnds(){return e.apply(this,arguments)}}()},{key:"setIsHttpConnectionRunning",value:function setIsHttpConnectionRunning(e){this.isConnectionActive=e}},{key:"checkAndSetHttpConnectionFlagIfNotRunning",value:function checkAndSetHttpConnectionFlagIfNotRunning(){var e=this.canEstablishStreamConnection()
return e&&this.setIsHttpConnectionRunning(!0),e}},{key:"fetchResponseIsUpToDate",value:function fetchResponseIsUpToDate(e,t){return null!=e.config&&e.templateVersion?e.templateVersion>=t:"success"===this.storageCache.getLastFetchStatus()}},{key:"parseAndValidateConfigUpdateMessage",value:function parseAndValidateConfigUpdateMessage(e){var t=e.indexOf("{"),r=e.indexOf("}",t)
return t<0||r<0?"":t>=r?"":e.substring(t,r+1)}},{key:"isEventListenersEmpty",value:function isEventListenersEmpty(){return 0===this.observers.size}},{key:"getRandomInt",value:function getRandomInt(e){return Math.floor(Math.random()*e)}},{key:"executeAllListenerCallbacks",value:function executeAllListenerCallbacks(e){this.observers.forEach(function(t){return t.next(e)})}},{key:"getChangedParams",value:function getChangedParams(e,t){var r,n=new Set,a=new Set(Object.keys(e||{})),o=new Set(Object.keys(t||{})),i=_createForOfIteratorHelper(a)
try{for(i.s();!(r=i.n()).done;){var s=r.value
o.has(s)&&e[s]===t[s]||n.add(s)}}catch(e){i.e(e)}finally{i.f()}var c,u=_createForOfIteratorHelper(o)
try{for(u.s();!(c=u.n()).done;){var l=c.value
a.has(l)||n.add(l)}}catch(e){u.e(e)}finally{u.f()}return n}},{key:"fetchLatestConfig",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee24(e,t){var r,n,a,o,i,s,c,u,l,f,p,d
return _regenerator().w(function(g){for(;;)switch(g.p=g.n){case 0:return n=3-(r=e-1),(a=this.storageCache.getCustomSignals())&&this.logger.debug("Fetching config with custom signals: ".concat(JSON.stringify(a))),o=new h,g.p=1,i={cacheMaxAgeMillis:0,signal:o,customSignals:a,fetchType:"REALTIME",fetchAttempt:n},g.n=2,this.cachingClient.fetch(i)
case 2:return s=g.v,g.n=3,this.storage.getActiveConfig()
case 3:if(c=g.v,this.fetchResponseIsUpToDate(s,t)){g.n=5
break}return this.logger.debug("Fetched template version is the same as SDK's current version. Retrying fetch."),g.n=4,this.autoFetch(r,t)
case 4:return g.a(2)
case 5:if(null!=s.config){g.n=6
break}return this.logger.debug("The fetch succeeded, but the backend had no updates."),g.a(2)
case 6:if(null==c&&(c={}),0!==(u=this.getChangedParams(s.config,c)).size){g.n=7
break}return this.logger.debug("Config was fetched, but no params changed."),g.a(2)
case 7:l={getUpdatedKeys:function getUpdatedKeys(){return new Set(u)}},this.executeAllListenerCallbacks(l),g.n=9
break
case 8:g.p=8,d=g.v,f=d instanceof Error?d.message:String(d),p=v.create("update-not-fetched",{originalErrorMessage:"Failed to auto-fetch config update: ".concat(f)}),this.propagateError(p)
case 9:return g.a(2)}},_callee24,this,[[1,8]])}))
return function fetchLatestConfig(t,r){return e.apply(this,arguments)}}()},{key:"autoFetch",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee25(e,t){var r,n,a
return _regenerator().w(function(o){for(;;)switch(o.n){case 0:if(0!==e){o.n=1
break}return r=v.create("update-not-fetched",{originalErrorMessage:"Unable to fetch the latest version of the template."}),this.propagateError(r),o.a(2)
case 1:return n=this.getRandomInt(4),a=1e3*n,o.n=2,new Promise(function(e){return setTimeout(e,a)})
case 2:return o.n=3,this.fetchLatestConfig(e,t)
case 3:return o.a(2)}},_callee25,this)}))
return function autoFetch(t,r){return e.apply(this,arguments)}}()},{key:"handleNotifications",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee26(e){var t,r,n,a,o,i,s,c,u,l,f,p
return _regenerator().w(function(h){for(;;)switch(h.p=h.n){case 0:r=""
case 1:return h.n=2,e.read()
case 2:if(n=h.v,a=n.done,o=n.value,!a){h.n=3
break}return h.a(3,13)
case 3:if(t=this.decoder.decode(o,{stream:!0}),r+=t,!t.includes("}")){h.n=12
break}if(0!==(r=this.parseAndValidateConfigUpdateMessage(r)).length){h.n=4
break}return h.a(3,1)
case 4:if(h.p=4,i=JSON.parse(r),!this.isEventListenersEmpty()){h.n=5
break}return h.a(3,13)
case 5:if(!("featureDisabled"in i&&!0===i.featureDisabled)){h.n=6
break}return s=v.create("realtime-unavailable",{originalErrorMessage:"The server is temporarily unavailable. Try again in a few minutes."}),this.propagateError(s),h.a(3,13)
case 6:if(!("latestTemplateVersionNumber"in i)){h.n=8
break}return h.n=7,this.storage.getActiveConfigTemplateVersion()
case 7:if(c=h.v,u=Number(i.latestTemplateVersionNumber),!(c&&u>c)){h.n=8
break}return h.n=8,this.autoFetch(3,u)
case 8:if(!("retryIntervalSeconds"in i)){h.n=9
break}return l=Number(i.retryIntervalSeconds),h.n=9,this.updateBackoffMetadataWithRetryInterval(l)
case 9:h.n=11
break
case 10:h.p=10,p=h.v,this.logger.debug("Unable to parse latest config update message.",p),f=p instanceof Error?p.message:String(p),this.propagateError(v.create("update-message-invalid",{originalErrorMessage:f}))
case 11:r=""
case 12:h.n=1
break
case 13:return h.a(2)}},_callee26,this,[[4,10]])}))
return function handleNotifications(t){return e.apply(this,arguments)}}()},{key:"listenForNotifications",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee27(e){return _regenerator().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,this.handleNotifications(e)
case 1:t.n=3
break
case 2:t.p=2,t.v,this.isInBackground||this.logger.debug("Real-time connection was closed due to an exception.")
case 3:return t.a(2)}},_callee27,this,[[0,2]])}))
return function listenForNotifications(t){return e.apply(this,arguments)}}()},{key:"prepareAndBeginRealtimeHttpStream",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee28(){var e,t,r,n,a,o,i,s,c,u
return _regenerator().w(function(l){for(;;)switch(l.p=l.n){case 0:if(this.checkAndSetHttpConnectionFlagIfNotRunning()){l.n=1
break}return l.a(2)
case 1:return l.n=2,this.storage.getRealtimeBackoffMetadata()
case 2:if((e=l.v)||(e={backoffEndTimeMillis:new Date(-1),numFailedStreams:0}),t=e.backoffEndTimeMillis.getTime(),!(Date.now()<t)){l.n=4
break}return l.n=3,this.retryHttpConnectionWhenBackoffEnds()
case 3:return l.a(2)
case 4:return l.p=4,l.n=5,this.createRealtimeConnection()
case 5:if(r=l.v,n=r.status,!r.ok||!r.body){l.n=7
break}return this.resetRetryCount(),l.n=6,this.resetRealtimeBackoff()
case 6:return a=r.body.getReader(),this.reader=a,l.n=7,this.listenForNotifications(a)
case 7:l.n=9
break
case 8:l.p=8,u=l.v,this.isInBackground?this.resetRetryCount():this.logger.debug("Exception connecting to real-time RC backend. Retrying the connection...:",u)
case 9:return l.p=9,l.n=10,this.closeRealtimeHttpConnection()
case 10:if(this.setIsHttpConnectionRunning(!1),!(i=!this.isInBackground&&(void 0===n||this.isStatusCodeRetryable(n)))){l.n=11
break}return l.n=11,this.updateBackoffMetadataWithLastFailedStreamConnectionTime(new Date)
case 11:if(!(i||null!==(o=r)&&void 0!==o&&o.ok)){l.n=13
break}return l.n=12,this.retryHttpConnectionWhenBackoffEnds()
case 12:l.n=14
break
case 13:s="Unable to connect to the server. HTTP status code: ".concat(n),c=v.create("stream-error",{originalErrorMessage:s}),this.propagateError(c)
case 14:return l.f(9)
case 15:return l.a(2)}},_callee28,this,[[4,8,9,15]])}))
return function prepareAndBeginRealtimeHttpStream(){return e.apply(this,arguments)}}()},{key:"canEstablishStreamConnection",value:function canEstablishStreamConnection(){var e=this.observers.size>0,t=!this.isRealtimeDisabled,r=!this.isConnectionActive,n=!this.isInBackground
return e&&t&&r&&n}},{key:"makeRealtimeHttpConnection",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee29(e){var t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:if(this.canEstablishStreamConnection()){r.n=1
break}return r.a(2)
case 1:if(!(this.httpRetriesRemaining>0)){r.n=3
break}return this.httpRetriesRemaining--,r.n=2,new Promise(function(t){return setTimeout(t,e)})
case 2:this.prepareAndBeginRealtimeHttpStream(),r.n=4
break
case 3:this.isInBackground||(t=v.create("stream-error",{originalErrorMessage:"Unable to connect to the server. Check your connection and try again."}),this.propagateError(t))
case 4:return r.a(2)}},_callee29,this)}))
return function makeRealtimeHttpConnection(t){return e.apply(this,arguments)}}()},{key:"beginRealtime",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee30(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:if(!(this.observers.size>0)){e.n=1
break}return e.n=1,this.makeRealtimeHttpConnection(0)
case 1:return e.a(2)}},_callee30,this)}))
return function beginRealtime(){return e.apply(this,arguments)}}()},{key:"addObserver",value:function addObserver(e){this.observers.add(e),this.beginRealtime()}},{key:"removeObserver",value:function removeObserver(e){this.observers.has(e)&&this.observers.delete(e)}},{key:"onVisibilityChange",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee31(e){return _regenerator().w(function(t){for(;;)switch(t.n){case 0:if(this.isInBackground=!e,e){t.n=2
break}return t.n=1,this.closeRealtimeHttpConnection()
case 1:t.n=3
break
case 2:if(!e){t.n=3
break}return t.n=3,this.beginRealtime()
case 3:return t.a(2)}},_callee31,this)}))
return function onVisibilityChange(t){return e.apply(this,arguments)}}()}])}()
function fetchAndActivate(e){return _fetchAndActivate.apply(this,arguments)}function _fetchAndActivate(){return(_fetchAndActivate=_asyncToGenerator(_regenerator().m(function _callee36(e){return _regenerator().w(function(t){for(;;)switch(t.n){case 0:return e=Object(s.k)(e),t.n=1,fetchConfig(e)
case 1:return t.a(2,activate(e))}},_callee36)}))).apply(this,arguments)}!function registerRemoteConfig(){Object(a.c)(new c.a(d,function remoteConfigFactory(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate(),i=e.getProvider("analytics-internal"),c=n.options,f=c.projectId,p=c.apiKey,h=c.appId
if(!f)throw v.create("registration-project-id")
if(!p)throw v.create("registration-api-key")
if(!h)throw v.create("registration-app-id")
var d=(null==r?void 0:r.templateId)||"firebase",g=Object(s.n)()?new F(h,n.name,d):new j,y=new R(g),m=new u.b(l)
m.logLevel=u.a.ERROR
var _=new C(o,a.a,d,f,p,h),b=new S(_,g),w=new k(b,g,y,m),T=new L(o,g,a.a,d,f,p,h,m,y,w),I=new P(n,w,y,g,m,T,i)
return function ensureInitialized(e){var t=Object(s.k)(e)
return t._initializePromise||(t._initializePromise=t._storageCache.loadFromStorage().then(function(){t._isInitializationComplete=!0})),t._initializePromise}(I),I},"PUBLIC").setMultipleInstances(!0)),Object(a.f)(l,p),Object(a.f)(l,p,"esm2020")}()},hCgk:function(e,t,r){"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return u=e.done,e},e:function e(t){l=!0,c=t},f:function f(){try{u||null==a.return||a.return()}finally{if(l)throw c}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==_typeof(t)?t:t+""}r.d(t,"a",function(){return n}),r.d(t,"b",function(){return u}),r.d(t,"c",function(){return setLogLevel}),r.d(t,"d",function(){return setUserLogHandler})
var n,a=[]
!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(n||(n={}))
var o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},i=n.INFO,s=_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},n.DEBUG,"log"),n.VERBOSE,"log"),n.INFO,"info"),n.WARN,"warn"),n.ERROR,"error"),c=function defaultLogHandler(e,t){if(!(t<e.logLevel)){var r=(new Date).toISOString(),n=s[t]
if(!n)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))
for(var a,o=arguments.length,i=new Array(o>2?o-2:0),c=2;c<o;c++)i[c-2]=arguments[c];(a=console)[n].apply(a,["[".concat(r,"]  ").concat(e.name,":")].concat(i))}},u=function(){return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(function Logger(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Logger),this.name=e,this._logLevel=i,this._logHandler=c,this._userLogHandler=null,a.push(this)},[{key:"logLevel",get:function get(){return this._logLevel},set:function set(e){if(!(e in n))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'))
this._logLevel=e}},{key:"setLogLevel",value:function setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}},{key:"logHandler",get:function get(){return this._logHandler},set:function set(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function")
this._logHandler=e}},{key:"userLogHandler",get:function get(){return this._userLogHandler},set:function set(e){this._userLogHandler=e}},{key:"debug",value:function debug(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
this._userLogHandler&&this._userLogHandler.apply(this,[this,n.DEBUG].concat(t)),this._logHandler.apply(this,[this,n.DEBUG].concat(t))}},{key:"log",value:function log(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
this._userLogHandler&&this._userLogHandler.apply(this,[this,n.VERBOSE].concat(t)),this._logHandler.apply(this,[this,n.VERBOSE].concat(t))}},{key:"info",value:function info(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
this._userLogHandler&&this._userLogHandler.apply(this,[this,n.INFO].concat(t)),this._logHandler.apply(this,[this,n.INFO].concat(t))}},{key:"warn",value:function warn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
this._userLogHandler&&this._userLogHandler.apply(this,[this,n.WARN].concat(t)),this._logHandler.apply(this,[this,n.WARN].concat(t))}},{key:"error",value:function error(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
this._userLogHandler&&this._userLogHandler.apply(this,[this,n.ERROR].concat(t)),this._logHandler.apply(this,[this,n.ERROR].concat(t))}}])}()
function setLogLevel(e){a.forEach(function(t){t.setLogLevel(e)})}function setUserLogHandler(e,t){var r,i=_createForOfIteratorHelper(a)
try{var s=function _loop(){var a=r.value,i=null
t&&t.level&&(i=o[t.level]),a.userLogHandler=null===e?null:function(t,r){for(var a,o=arguments.length,s=new Array(o>2?o-2:0),c=2;c<o;c++)s[c-2]=arguments[c]
var u=s.map(function(e){if(null==e)return null
if("string"==typeof e)return e
if("number"==typeof e||"boolean"==typeof e)return e.toString()
if(e instanceof Error)return e.message
try{return JSON.stringify(e)}catch(e){return null}}).filter(function(e){return e}).join(" ")
r>=(null!==(a=i)&&void 0!==a?a:t.logLevel)&&e({level:n[r].toLowerCase(),message:u,args:s,type:t.name})}}
for(i.s();!(r=i.n()).done;)s()}catch(e){i.e(e)}finally{i.f()}}},qOnz:function(e,t,r){"use strict";(function(e,n){r.d(t,"a",function(){return y}),r.d(t,"b",function(){return _}),r.d(t,"c",function(){return m}),r.d(t,"d",function(){return areCookiesEnabled}),r.d(t,"e",function(){return i}),r.d(t,"f",function(){return p}),r.d(t,"g",function(){return f}),r.d(t,"h",function(){return calculateBackoffMillis}),r.d(t,"i",function(){return deepEqual}),r.d(t,"j",function(){return g}),r.d(t,"k",function(){return getModularInstance}),r.d(t,"l",function(){return isBrowser}),r.d(t,"m",function(){return isBrowserExtension}),r.d(t,"n",function(){return isIndexedDBAvailable}),r.d(t,"o",function(){return isWebWorker}),r.d(t,"p",function(){return validateIndexedDBOpenable})
var a=r("CRYq")
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==_typeof(t)?t:t+""}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _callSuper(e,t,r){return t=_getPrototypeOf(t),function _possibleConstructorReturn(e,t){if(t&&("object"==_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(e,_isNativeReflectConstruct()?Reflect.construct(t,r||[],_getPrototypeOf(e).constructor):t.apply(e,r))}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0
return(_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e
if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function")
if(void 0!==t){if(t.has(e))return t.get(e)
t.set(e,Wrapper)}function Wrapper(){return function _construct(e,t,r){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments)
var n=[null]
n.push.apply(n,t)
var a=new(e.bind.apply(e,n))
return r&&_setPrototypeOf(a,r.prototype),a}(e,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,e)})(e)}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!e})()}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function assert(e,t){if(!e)throw s(t)},s=function assertionError(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},c=function stringToByteArray$1(e){for(var t=[],r=0,n=0;n<e.length;n++){var a=e.charCodeAt(n)
a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter")
this.init_()
for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],a=0;a<e.length;a+=3){var o=e[a],i=a+1<e.length,s=i?e[a+1]:0,c=a+2<e.length,u=c?e[a+2]:0,l=o>>2,f=(3&o)<<4|s>>4,p=(15&s)<<2|u>>6,h=63&u
c||(h=64,i||(p=64)),n.push(r[l],r[f],r[p],r[h])}return n.join("")},encodeString:function encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString:function decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function byteArrayToString(e){for(var t=[],r=0,n=0;r<e.length;){var a=e[r++]
if(a<128)t[n++]=String.fromCharCode(a)
else if(a>191&&a<224){var o=e[r++]
t[n++]=String.fromCharCode((31&a)<<6|63&o)}else if(a>239&&a<365){var i=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536
t[n++]=String.fromCharCode(55296+(i>>10)),t[n++]=String.fromCharCode(56320+(1023&i))}else{var s=e[r++],c=e[r++]
t[n++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&c)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function decodeStringToByteArray(e,t){this.init_()
for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],a=0;a<e.length;){var o=r[e.charAt(a++)],i=a<e.length?r[e.charAt(a)]:0,s=++a<e.length?r[e.charAt(a)]:64,c=++a<e.length?r[e.charAt(a)]:64
if(++a,null==o||null==i||null==s||null==c)throw new l
var u=o<<2|i>>4
if(n.push(u),64!==s){var f=i<<4&240|s>>2
if(n.push(f),64!==c){var p=s<<6&192|c
n.push(p)}}}return n},init_:function init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={}
for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){function DecodeBase64StringError(){var e
return _classCallCheck(this,DecodeBase64StringError),(e=_callSuper(this,DecodeBase64StringError,arguments)).name="DecodeBase64StringError",e}return _inherits(DecodeBase64StringError,_wrapNativeSuper(Error)),_createClass(DecodeBase64StringError)}(),f=function base64urlEncodeWithoutPadding(e){return function base64Encode(e){var t=c(e)
return u.encodeByteArray(t,!0)}(e).replace(/\./g,"")},p=function base64Decode(e){try{return u.decodeString(e,!0)}catch(e){}return null}
var h=function getDefaultsFromGlobal(){return function getGlobal(){if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==e)return e
throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},d=function getDefaults(){try{return Object(a.a)()||h()||function getDefaultsFromEnvVariable(){if(void 0!==n&&void 0!==n.env){var e=n.env.__FIREBASE_DEFAULTS__
return e?JSON.parse(e):void 0}}()||function getDefaultsFromCookie(){if("undefined"!=typeof document){var e
try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&p(e[1])
return t&&JSON.parse(t)}}()}catch(e){return}},g=function getDefaultAppConfig(){var e
return null===(e=d())||void 0===e?void 0:e.config},y=function(){return _createClass(function Deferred(){var e=this
_classCallCheck(this,Deferred),this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(t,r){e.resolve=t,e.reject=r})},[{key:"wrapCallback",value:function wrapCallback(e){var t=this
return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch(function(){}),1===e.length?e(r):e(r,n))}}}])}()
function isBrowser(){return"undefined"!=typeof window||isWebWorker()}function isWebWorker(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function isBrowserExtension(){var e="object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))?chrome.runtime:"object"===("undefined"==typeof browser?"undefined":_typeof(browser))?browser.runtime:void 0
return"object"===_typeof(e)&&void 0!==e.id}function isIndexedDBAvailable(){try{return"object"===("undefined"==typeof indexedDB?"undefined":_typeof(indexedDB))}catch(e){return!1}}function validateIndexedDBOpenable(){return new Promise(function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n)
a.onsuccess=function(){a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=function(){r=!1},a.onerror=function(){var e
t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function areCookiesEnabled(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}var v="FirebaseError",m=function(e){function FirebaseError(e,t,r){var n
return _classCallCheck(this,FirebaseError),(n=_callSuper(this,FirebaseError,[t])).code=e,n.customData=r,n.name=v,Object.setPrototypeOf(n,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,_.prototype.create),n}return _inherits(FirebaseError,_wrapNativeSuper(Error)),_createClass(FirebaseError)}(),_=function(){return _createClass(function ErrorFactory(e,t,r){_classCallCheck(this,ErrorFactory),this.service=e,this.serviceName=t,this.errors=r},[{key:"create",value:function create(e){var t=(arguments.length<=1?void 0:arguments[1])||{},r="".concat(this.service,"/").concat(e),n=this.errors[e],a=n?function replaceTemplate(e,t){return e.replace(b,function(e,r){var n=t[r]
return null!=n?String(n):"<".concat(r,"?>")})}(n,t):"Error",o="".concat(this.serviceName,": ").concat(a," (").concat(r,").")
return new m(r,o,t)}}])}()
var b=/\{\$([^}]+)}/g
function deepEqual(e,t){if(e===t)return!0
for(var r=Object.keys(e),n=Object.keys(t),a=0,o=r;a<o.length;a++){var i=o[a]
if(!n.includes(i))return!1
var s=e[i],c=t[i]
if(isObject(s)&&isObject(c)){if(!deepEqual(s,c))return!1}else if(s!==c)return!1}for(var u=0,l=n;u<l.length;u++){var f=l[u]
if(!r.includes(f))return!1}return!0}function isObject(e){return null!==e&&"object"===_typeof(e)}var w=1e3,k=2,C=144e5,S=.5
function calculateBackoffMillis(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k,n=t*Math.pow(r,e),a=Math.round(S*n*(Math.random()-.5)*2)
return Math.min(C,n+a)}function getModularInstance(e){return e&&e._delegate?e._delegate:e}}).call(this,r("yLpj"),r("8oxB"))},vHuw:function(e,t,r){"use strict"
var n=r("TuP9")
r.d(t,"a",function(){return n.e})
Object(n.f)("firebase","12.12.0","app")}}])
