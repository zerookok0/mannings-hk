/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Cbv":function(e,n,t){"use strict"
var r,o=new Uint8Array(16)
var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
for(var a=function validate(e){return"string"==typeof e&&i.test(e)},l=[],d=0;d<256;++d)l.push((d+256).toString(16).substr(1))
var s=function stringify(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(l[e[n+0]]+l[e[n+1]]+l[e[n+2]]+l[e[n+3]]+"-"+l[e[n+4]]+l[e[n+5]]+"-"+l[e[n+6]]+l[e[n+7]]+"-"+l[e[n+8]]+l[e[n+9]]+"-"+l[e[n+10]]+l[e[n+11]]+l[e[n+12]]+l[e[n+13]]+l[e[n+14]]+l[e[n+15]]).toLowerCase()
if(!a(t))throw TypeError("Stringified UUID is invalid")
return t}
n.a=function v4(e,n,t){var i=(e=e||{}).random||(e.rng||function rng(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")
return r(o)})()
if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){t=t||0
for(var a=0;a<16;++a)n[t+a]=i[a]
return n}return s(i)}},mLU8:function(e,n,t){"use strict";(function(e){var n,r=t("q1tI"),o=t.n(r)
const i=void 0!==e&&"true"===(null===(n=e.env)||void 0===n?void 0:n.REACT_APP_IDE_DEVMODE)
"undefined"!=typeof window&&(null===window||void 0===window||window.REACT_BUDDY_IDE_DEVMODE)
function styleInject(e,n){void 0===n&&(n={})
var t=n.insertAt
if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style")
o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}styleInject('.table-header {\n  border-color: #363636;\n  border-width: 1px 0;\n  border-style: solid;\n  font-weight: 800;\n  padding: 10px 20px 10px 10px;\n  display: flex;\n}\n.table-header:after {\n  content: "";\n}\n.table-header .table-header-item {\n  flex-basis: 22%;\n  color: #444;\n}\n.table-header .table-header-item-control {\n  flex-basis: 78%;\n  color: #444;\n}')
var a
!function(e){e.Checkbox="checkbox",e.Input="input",e.Radio="radio",e.Select="select",e.Textarea="textarea",e.JsonEditor="jsonEditor"}(a||(a={}))
styleInject(".radio-control {\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n}\n.radio-control label {\n  margin-right: 5px;\n}")
styleInject(".json-editor {\n  flex-direction: column;\n}\n.json-editor .json-editor-textarea {\n  align-self: start;\n  width: 100%;\n  min-height: 100px;\n  margin: 0 0 10px 0;\n}\n.json-editor .json-editor-apply-button {\n  align-self: start;\n}")
styleInject('.table-item-wrapper {\n  border-color: #363636;\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  padding: 10px;\n  display: flex;\n}\n.table-item-wrapper:after {\n  content: "";\n}\n.table-item-wrapper .table-item,\n.table-item-wrapper .table-item-control {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n.table-item-wrapper .table-item {\n  flex-basis: 22%;\n}\n.table-item-wrapper .table-item-control {\n  flex-basis: 78%;\n}')
styleInject('.table-items {\n  background-color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n.table-items:after {\n  content: "";\n}')
styleInject(".props-edit-table {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}")
styleInject(".tools-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #eeeeee;\n}\n.tools-panel .empty-props-message {\n  color: red;\n}")
styleInject(".previews-module_previewsMain__31L3F {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.previews-module_previewsContent__1aMUf {\n  flex-basis: 100%;\n  flex-grow: 1;\n  overflow-y: auto;\n}\n\n.previews-module_previewsToolsPanel__30jjI {\n  flex-basis: 295px;\n  min-height: 100px;\n}")
styleInject(".react-buddy-error-boundary-module_errorMessageContainer__1L848 {\n  width: 100%;\n  height: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #fff;\n}\n\n.react-buddy-error-boundary-module_errorMessageTitle__r4YnX {\n  color: #d32f2f;\n}\n\n.react-buddy-error-boundary-module_errorMessageStack__2XNRm {\n  color: #a9a9a9;\n  font-size: 0.8rem;\n  width: 100%;\n  overflow-x: scroll;\n}")
o.a.createContext({})
o.a.createContext({})
styleInject(".variant-module_fullWindow__1DkCI {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.variant-module_variantRouteCenter__ce423 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n}")
o.a.createContext({})}).call(this,t("8oxB"))}}])
