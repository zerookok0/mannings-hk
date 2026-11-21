/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"5L+E":function(e,t,n){"use strict"
var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable
e.exports=function shouldUseNative(){try{if(!Object.assign)return!1
var e=new String("abc")
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n
if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1
var r={}
return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(u[s]=n[s])
if(r){a=r(n)
for(var f=0;f<a.length;f++)i.call(n,a[f])&&(u[a[f]]=n[a[f]])}}return u}},"6z5G":function(e,t,n){"use strict"
e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},C3mE:function(e,t,n){e.exports=n("j6K8")()},D02C:function(e,t,n){"use strict";(function(e){var t=n("cDf5"),r=n.n(t)
var o=n("q1tI"),i=function _interopDefault(e){return e&&"object"===r()(e)&&"default"in e?e.default:e}(o)
function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement)
e.exports=function withSideEffect(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.")
if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.")
if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.")
return function wrap(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.")
var u,c=[]
function emitChange(){u=e(c.map(function(e){return e.props})),s.canUseDOM?t(u):n&&(u=n(u))}var s=function(e){function SideEffect(){return e.apply(this,arguments)||this}!function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(SideEffect,e),SideEffect.peek=function peek(){return u},SideEffect.rewind=function rewind(){if(SideEffect.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.")
var e=u
return u=void 0,c=[],e}
var t=SideEffect.prototype
return t.UNSAFE_componentWillMount=function UNSAFE_componentWillMount(){c.push(this),emitChange()},t.componentDidUpdate=function componentDidUpdate(){emitChange()},t.componentWillUnmount=function componentWillUnmount(){var e=c.indexOf(this)
c.splice(e,1),emitChange()},t.render=function render(){return i.createElement(r,this.props)},SideEffect}(o.PureComponent)
return _defineProperty(s,"displayName","SideEffect("+function getDisplayName(e){return e.displayName||e.name||"Component"}(r)+")"),_defineProperty(s,"canUseDOM",a),s}}}).call(this,n("3UD+")(e))},EHpd:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=function debounce(e,t,n){var r
return function(){var o=this,i=arguments,a=n&&!r
window.clearTimeout(r),r=setTimeout(function deferredExecution(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}},t.insertScript=function insertScript(e,t,n){var r=window.document.createElement("script")
return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.isReactElement=isReactElement,t.removeResources=function removeResources(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(e){return e.remove()})},t.removeScript=function removeScript(e,t){var n=window.document.getElementById(e)
n&&t.removeChild(n)},t.shallowComparison=function shallowComparison(e,t){var n=new Set(Object.keys(e),Object.keys(t))
var r,o=function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}(t))){var r=0,o=function F(){}
return{s:o,n:function n(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function e(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a,u=!0,c=!1
return{s:function s(){i=t[Symbol.iterator]()},n:function n(){var e=i.next()
return u=e.done,e},e:function e(t){c=!0,a=t},f:function f(){try{u||null==i.return||i.return()}finally{if(c)throw a}}}}(n)
try{for(o.s();!(r=o.n()).done;){var i=r.value
if("object"===_typeof(e[i])){if(shallowComparison(e[i],t[i]))return!0}else if(e[i]!==t[i]&&!isReactElement(e[i]))return!0}}catch(e){o.e(e)}finally{o.f()}return!1}
var r=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("q1tI"))
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function isReactElement(e){return!!r.default.isValidElement(e)||!!Array.isArray(e)&&e.some(function(e){return r.default.isValidElement(e)})}},FkUZ:function(e,t,n){"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0
var r=_interopRequireDefault(n("q1tI")),o=_interopRequireDefault(n("C3mE")),i=n("EHpd"),a=n("sm91")
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,r,o={},i=Object.keys(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n])
return o}(e,t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,r=_getPrototypeOf(e)
if(t){var o=_getPrototypeOf(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,n)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(t.DiscussionEmbed=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(DiscussionEmbed,r["default"].Component)
var t=_createSuper(DiscussionEmbed)
function DiscussionEmbed(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DiscussionEmbed),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(DiscussionEmbed,[{key:"componentDidMount",value:function componentDidMount(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function componentDidUpdate(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.cleanInstance()}},{key:"loadInstance",value:function loadInstance(){var e=window.document
window&&window.DISQUS&&e.getElementById(a.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),a.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function cleanInstance(){var e=window.document;(0,i.removeScript)(a.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({})
try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById(a.THREAD_ID)
if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function getDisqusConfig(e){return function(){var t=this
this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.sso&&(this.sso=e.sso),e.language&&(this.language=e.language),a.CALLBACKS.forEach(function(n){t.callbacks[n]=[e[n]]})}}},{key:"render",value:function render(){var e=this.props,t=(e.shortname,e.config,_objectWithoutProperties(e,["shortname","config"]))
return r.default.createElement("div",_extends({},t,{id:a.THREAD_ID}))}}]),DiscussionEmbed}()).propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func,sso:o.default.shape({name:o.default.string,button:o.default.string,icon:o.default.string,url:o.default.string,logout:o.default.string,profile_url:o.default.string,width:o.default.string,height:o.default.string})}).isRequired}},R5n5:function(e,t,n){"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0
var r=_interopRequireDefault(n("q1tI")),o=_interopRequireDefault(n("C3mE")),i=n("EHpd"),a=n("sm91")
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,r,o={},i=Object.keys(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n])
return o}(e,t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,r=_getPrototypeOf(e)
if(t){var o=_getPrototypeOf(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,n)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);(t.CommentCount=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(CommentCount,r["default"].Component)
var t=_createSuper(CommentCount)
function CommentCount(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CommentCount),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(CommentCount,[{key:"componentDidMount",value:function componentDidMount(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function componentDidUpdate(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.cleanInstance()}},{key:"loadInstance",value:function loadInstance(){var e=window.document
e.getElementById(a.COMMENT_COUNT_SCRIPT_ID)?u():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),a.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function cleanInstance(){var e=window.document;(0,i.removeScript)(a.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function render(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,i=_objectWithoutProperties(e,["shortname","config","children","className"]),u=o?" ".concat(o):""
return r.default.createElement("span",_extends({},i,{className:"".concat(a.COMMENT_COUNT_CLASS).concat(u),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}]),CommentCount}()).propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},SdH0:function(e,t,n){"use strict";(function(e){var t=n("cDf5"),r=n.n(t),o="undefined"!=typeof Element,i="function"==typeof Map,a="function"==typeof Set,u="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView,c="function"==typeof DataView
e.exports=function isEqual(e,t){try{return function equal(e,t){if(e===t)return!0
if(e&&t&&"object"==r()(e)&&"object"==r()(t)){if(e.constructor!==t.constructor)return!1
var n,s,f,l
if(Array.isArray(e)){if((n=e.length)!=t.length)return!1
for(s=n;0!=s--;)if(!equal(e[s],t[s]))return!1
return!0}if(i&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1
for(l=e.entries();!(s=l.next()).done;)if(!t.has(s.value[0]))return!1
for(l=e.entries();!(s=l.next()).done;)if(!equal(s.value[1],t.get(s.value[0])))return!1
return!0}if(a&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1
for(l=e.entries();!(s=l.next()).done;)if(!t.has(s.value[0]))return!1
return!0}if(c&&e instanceof DataView&&t instanceof DataView){if((n=e.byteLength)!==t.byteLength)return!1
for(s=n;0!=s--;)if(e.getUint8(s)!==t.getUint8(s))return!1
return!0}if(u&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((n=e.length)!=t.length)return!1
for(s=n;0!=s--;)if(e[s]!==t[s])return!1
return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags
if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof t.valueOf)return e.valueOf()===t.valueOf()
if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof t.toString)return e.toString()===t.toString()
if((n=(f=Object.keys(e)).length)!==Object.keys(t).length)return!1
for(s=n;0!=s--;)if(!Object.prototype.hasOwnProperty.call(t,f[s]))return!1
if(o&&e instanceof Element)return!1
for(s=n;0!=s--;)if(("_owner"!==f[s]&&"__v"!==f[s]&&"__o"!==f[s]||!e.$$typeof)&&!equal(e[f[s]],t[f[s]]))return!1
return!0}return e!=e&&t!=t}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return!1
throw e}}}).call(this,n("3UD+")(e))},ZE1F:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function get(){return r.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function get(){return o.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function get(){return i.DiscussionEmbed}}),Object.defineProperty(t,"Recommendations",{enumerable:!0,get:function get(){return a.Recommendations}}),t.default=void 0
var r=n("R5n5"),o=n("bLxw"),i=n("FkUZ"),a=n("pqLw"),u={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed,Recommendations:a.Recommendations}
t.default=u},bLxw:function(e,t,n){"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0
var r=_interopRequireDefault(n("q1tI")),o=_interopRequireDefault(n("C3mE")),i=n("sm91")
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,r,o={},i=Object.keys(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n])
return o}(e,t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,r=_getPrototypeOf(e)
if(t){var o=_getPrototypeOf(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,n)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var a=t.CommentEmbed=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(CommentEmbed,r["default"].Component)
var t=_createSuper(CommentEmbed)
function CommentEmbed(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CommentEmbed),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(CommentEmbed,[{key:"getSrc",value:function getSrc(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0"
return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function render(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,_objectWithoutProperties(e,["width","height","commentId","showMedia","showParentComment"]))
return r.default.createElement("iframe",_extends({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}]),CommentEmbed}()
a.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},a.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},dw5B:function(e,t,n){"use strict"
n.d(t,"a",function(){return d})
var r=n("cDf5"),o=n.n(r),i=n("q1tI"),a=n.n(i),u=n("55Ip"),c=function __assign(){return(c=Object.assign||function __assign(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
var s="",f=null,l=null,p=null
function reset(){s="",null!==f&&f.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function isInteractiveElement(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function getElAndScroll(){var e=null
if("#"===s)e=document.body
else{var t=s.replace("#","")
null===(e=document.getElementById(t))&&"#top"===s&&(e=document.body)}if(null!==e){p(e)
var n=e.getAttribute("tabindex")
return null!==n||isInteractiveElement(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||isInteractiveElement(e)||(e.blur(),e.removeAttribute("tabindex")),reset(),!0}return!1}function genericHashLink(e){return a.a.forwardRef(function(t,n){var r=""
"string"==typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"===o()(t.to)&&"string"==typeof t.to.hash&&(r=t.to.hash)
var i={}
e===u.c&&(i.isActive=function(e,t){return e&&e.isExact&&t.hash===r})
var d=function __rest(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["scroll","smooth","timeout","elementId"])
return a.a.createElement(e,c({},i,d,{onClick:function handleClick(e){reset(),s=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===s||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(p=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},function hashLinkScroll(e){window.setTimeout(function(){!1===getElAndScroll()&&(null===f&&(f=new MutationObserver(getElAndScroll)),f.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout(function(){reset()},e||1e4))},0)}(t.timeout))},ref:n}),t.children)})}var d=genericHashLink(u.b)
genericHashLink(u.c)},j6K8:function(e,t,n){"use strict"
var r=n("6z5G")
function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim
var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction}
return e.PropTypes=e,e}},"ls/r":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return le})
var r,o=n("cDf5"),i=n.n(o),a=n("C3mE"),u=n.n(a),c=n("D02C"),s=n("SdH0"),f=n("q1tI"),l=n.n(f),p=n("5L+E"),d=n.n(p),m="bodyAttributes",y="htmlAttributes",h="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(b).map(function(e){return b[e]}),"charset"),_="cssText",v="href",O="http-equiv",C="innerHTML",w="itemprop",S="name",E="property",T="rel",P="src",I="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",R="defer",A="encodeSpecialCharacters",M="onChangeClientState",k="titleTemplate",N=Object.keys(j).reduce(function(e,t){return e[j[t]]=t,e},{}),q=[b.NOSCRIPT,b.SCRIPT,b.STYLE],x="function"==typeof Symbol&&"symbol"===i()(Symbol.iterator)?function(e){return i()(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i()(e)},L=function classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function objectWithoutProperties(e,t){var n={}
for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])
return n},B=function possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==i()(t)&&"function"!=typeof t?e:t},F=function encodeSpecialCharacters(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function getTitleFromPropsList(e){var t=G(e,b.TITLE),n=G(e,k)
if(n&&t)return n.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t})
var r=G(e,D)
return t||r||void 0},Q=function getOnChangeClientState(e){return G(e,M)||function(){}},z=function getAttributesFromPropsList(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return H({},e,t)},{})},Y=function getBaseTagFromPropsList(e,t){return t.filter(function(e){return void 0!==e[b.BASE]}).map(function(e){return e[b.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase()
if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t},[])},V=function getTagsFromPropsList(e,t,n){var r={}
return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ee("Helmet: "+e+' should be of type "Array". Instead found type "'+x(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={}
n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===T&&"canonical"===e[n].toLowerCase()||c===T&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==C&&u!==_&&u!==w||(n=u)}if(!n||!e[n])return!1
var s=e[n].toLowerCase()
return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)})
for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=d()({},r[u],o[u])
r[u]=c}return e},[]).reverse()},G=function getInnermostProperty(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n]
if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now()
t-r>16?(r=t,e(t)):setTimeout(function(){$(e)},0)}),Z=function cafPolyfill(e){return clearTimeout(e)},J="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,X="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:e.cancelAnimationFrame||Z,ee=function warn(e){return console&&"function"==typeof console.warn&&void 0},te=null,ne=function commitTagChanges(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes
ie(b.BODY,r),ie(b.HTML,o),oe(l,p)
var d={baseTag:ae(b.BASE,n),linkTags:ae(b.LINK,i),metaTags:ae(b.META,a),noscriptTags:ae(b.NOSCRIPT,u),scriptTags:ae(b.SCRIPT,s),styleTags:ae(b.STYLE,f)},m={},y={}
Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags
n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)}),t&&t(),c(e,m,y)},re=function flattenArray(e){return Array.isArray(e)?e.join(""):e},oe=function updateTitle(e,t){void 0!==e&&document.title!==e&&(document.title=re(e)),ie(b.TITLE,t)},ie=function updateAttributes(e,t){var n=document.getElementsByTagName(e)[0]
if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||""
n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c)
var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l])
o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ae=function updateTags(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0
return t&&t.length&&t.forEach(function(t){var n=document.createElement(e)
for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML
else if(r===_)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText))
else{var u=void 0===t[r]?"":t[r]
n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},ue=function generateElementAttributesAsString(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n
return t?t+" "+r:r},"")},ce=function convertElementAttributestoReactProps(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Object.keys(e).reduce(function(t,n){return t[j[n]||n]=e[n],t},t)},se=function getMethodsForTag(e,t,n){switch(e){case b.TITLE:return{toComponent:function toComponent(){return function generateTitleAsReactComponent(e,t,n){var r,o=((r={key:t})["data-react-helmet"]=!0,r),i=ce(n,o)
return[l.a.createElement(b.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function toString(){return function generateTitleAsString(e,t,n,r){var o=ue(n),i=re(t)
return o?"<"+e+' data-react-helmet="true" '+o+">"+F(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}}
case m:case y:return{toComponent:function toComponent(){return ce(t)},toString:function toString(){return ue(t)}}
default:return{toComponent:function toComponent(){return function generateTagsAsReactComponent(e,t){return t.map(function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r)
return Object.keys(t).forEach(function(e){var n=j[e]||e
if(n===C||n===_){var r=t.innerHTML||t.cssText
o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),l.a.createElement(e,o)})}(e,t)},toString:function toString(){return function generateTagsAsString(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===C||e===_)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+F(r[t],n)+'"'
return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===q.indexOf(e)
return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,n)}}}},fe=function mapStateOnServer(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes
return{base:se(b.BASE,t,r),bodyAttributes:se(m,n,r),htmlAttributes:se(y,o,r),link:se(b.LINK,i,r),meta:se(b.META,a,r),noscript:se(b.NOSCRIPT,u,r),script:se(b.SCRIPT,c,r),style:se(b.STYLE,s,r),title:se(b.TITLE,{title:l,titleAttributes:p},r)}},le=function Helmet(e){var t,n
return n=t=function(t){function HelmetWrapper(){return L(this,HelmetWrapper),B(this,t.apply(this,arguments))}return function inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+i()(t))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(HelmetWrapper,t),HelmetWrapper.prototype.shouldComponentUpdate=function shouldComponentUpdate(e){return!Object(s.default)(this.props,e)},HelmetWrapper.prototype.mapNestedChildrenToProps=function mapNestedChildrenToProps(e,t){if(!t)return null
switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t}
case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},HelmetWrapper.prototype.flattenArrayTypeChildren=function flattenArrayTypeChildren(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren
return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),t))},HelmetWrapper.prototype.mapObjectTypeChildren=function mapObjectTypeChildren(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren
switch(r.type){case b.TITLE:return H({},o,((t={})[r.type]=a,t.titleAttributes=H({},i),t))
case b.BODY:return H({},o,{bodyAttributes:H({},i)})
case b.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},HelmetWrapper.prototype.mapArrayTypeChildrenToProps=function mapArrayTypeChildrenToProps(e,t){var n=H({},t)
return Object.keys(e).forEach(function(t){var r
n=H({},n,((r={})[t]=e[t],r))}),n},HelmetWrapper.prototype.warnOnInvalidChildren=function warnOnInvalidChildren(e,t){return!0},HelmetWrapper.prototype.mapChildrenToProps=function mapChildrenToProps(e,t){var n=this,r={}
return l.a.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=function convertReactPropstoHtmlAttributes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Object.keys(e).reduce(function(t,n){return t[N[n]||n]=e[n],t},t)}(W(o,["children"]))
switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i})
break
default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},HelmetWrapper.prototype.render=function render(){var t=this.props,n=t.children,r=W(t,["children"]),o=H({},r)
return n&&(o=this.mapChildrenToProps(n,o)),l.a.createElement(e,o)},U(HelmetWrapper,null,[{key:"canUseDOM",set:function set$$1(t){e.canUseDOM=t}}]),HelmetWrapper}(l.a.Component),t.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind()
return t||(t=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(Object(c.default)(function reducePropsToState(e){return{baseTag:Y([v,I],e),bodyAttributes:z(m,e),defer:G(e,R),encode:G(e,A),htmlAttributes:z(y,e),linkTags:V(b.LINK,[T,v],e),metaTags:V(b.META,[S,g,O,E,w],e),noscriptTags:V(b.NOSCRIPT,[C],e),onChangeClientState:Q(e),scriptTags:V(b.SCRIPT,[P,C],e),styleTags:V(b.STYLE,[_],e),title:K(e),titleAttributes:z(h,e)}},function handleClientStateChange(e){te&&X(te),e.defer?te=J(function(){ne(e,function(){te=null})}):(ne(e),te=null)},fe)(function NullComponent(){return null}))
le.renderStatic=le.rewind}).call(this,n("yLpj"))},pqLw:function(e,t,n){"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0
var r=_interopRequireDefault(n("q1tI")),o=_interopRequireDefault(n("C3mE")),i=n("EHpd"),a=n("sm91")
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{}
var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,r,o={},i=Object.keys(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n])
return o}(e,t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()
return function(){var n,r=_getPrototypeOf(e)
if(t){var o=_getPrototypeOf(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,n)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(t.Recommendations=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Recommendations,r["default"].Component)
var t=_createSuper(Recommendations)
function Recommendations(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Recommendations),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Recommendations,[{key:"componentDidMount",value:function componentDidMount(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.loadInstance()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.cleanInstance()}},{key:"getDisqusConfig",value:function getDisqusConfig(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function loadInstance(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(a.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),a.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function reloadInstance(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function cleanInstance(){(0,i.removeScript)(a.RECOMMENDATIONS_SCRIPT_ID,window.document.body)
try{delete window.DISQUS_RECOMMENDATIONS}catch(e){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(a.RECOMMENDATIONS_ID)
if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"render",value:function render(){var e=this.props,t=(e.shortname,e.config,_objectWithoutProperties(e,["shortname","config"]))
return r.default.createElement("div",_extends({},t,{id:a.RECOMMENDATIONS_ID}))}}]),Recommendations}()).propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},sm91:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.THREAD_ID=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.EMBED_SCRIPT_ID=t.COMMENT_EMBED_WIDTH=t.COMMENT_EMBED_HEIGHT=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.CALLBACKS=void 0
t.THREAD_ID="disqus_thread",t.EMBED_SCRIPT_ID="dsq-embed-scr",t.COMMENT_COUNT_CLASS="disqus-comment-count",t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr",t.COMMENT_EMBED_WIDTH=420,t.COMMENT_EMBED_HEIGHT=320,t.RECOMMENDATIONS_ID="disqus_recommendations",t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr",t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]}}])
