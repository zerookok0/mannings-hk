/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){},5:function(e,n){},6:function(e,n){},EI1F:function(e,n,r){"use strict"
r.r(n)
var t=r("yXPU"),a=r.n(t),c=r("J4zp"),u=r.n(c),l=r("q1tI"),s=r.n(l),d=r("17x9"),p=r.n(d),v=r("dDsW"),g=r("kriW"),b=r("Ty5D"),m=r("iD5t"),y=r("gW/u"),h=r("cgcT"),w=r("sEfC"),P=r.n(w),F=r("+TN3"),D=r("znku"),_=r("SvTQ"),k=r("uyCd"),O=r("J3e4"),G=r("jWy2"),T=r("X5qW"),j=r("dgmk"),E=(r("G8bt"),r("/tn/"),{queries:{getInvoicePdfQuery:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetInvoicePdf"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"invoiceId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getInvoicePdfUrl"},arguments:[{kind:"Argument",name:{kind:"Name",value:"invoiceId"},value:{kind:"Variable",name:{kind:"Name",value:"invoiceId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pdf_url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:124,source:{body:"\nquery GetInvoicePdf($invoiceId: Int!) {\n  getInvoicePdfUrl(invoiceId: $invoiceId) {\n    code\n    message\n    pdf_url\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}}}}),S=r("LboF"),x=r.n(S),I=r("dOb9"),N={injectType:"singletonStyleTag",insert:"head",singleton:!0},M=(x()(I.a,N),I.a.locals||{})
function _createForOfIteratorHelper(r,t){var o="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]
if(!o){if(Array.isArray(r)||(o=function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,n):void 0}}(r))||t&&r&&"number"==typeof r.length){o&&(r=o)
var i=0,a=function F(){}
return{s:a,n:function n(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function e(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,l=!1
return{s:function s(){o=o.call(r)},n:function n(){var e=o.next()
return u=e.done,e},e:function e(n){l=!0,c=n},f:function f(){try{u||null==o.return||o.return()}finally{if(l)throw c}}}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length)
for(var r=0,t=Array(n);r<n;r++)t[r]=e[r]
return t}var L=function useMutationObserver(e,n){Object(l.useEffect)(function(){if(e&&n){var r=document.querySelector(e)
if(r){var t=new MutationObserver(function(e){var r,t=_createForOfIteratorHelper(e)
try{for(t.s();!(r=t.n()).done;)if("childList"===r.value.type){var o=document.querySelector("".concat(n))
o&&(o.style.display="none")}}catch(e){t.e(e)}finally{t.f()}})
return t.observe(r,{childList:!0,subtree:!0}),function(){t.disconnect()}}}},[e,n])},W=r("4NdK"),A=r("mKdt")
function _regenerator(){var e,n,r="function"==typeof Symbol?Symbol:{},t=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag"
function i(r,t,o,i){var c=t&&t.prototype instanceof Generator?t:Generator,u=Object.create(c.prototype)
return _regeneratorDefine2(u,"_invoke",function(r,t,o){var i,c,u,l=0,f=o||[],s=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(n,r){return i=n,c=0,u=e,p.n=r,a}}
function d(r,t){for(c=r,u=t,n=0;!s&&l&&!o&&n<f.length;n++){var o,i=f[n],d=p.p,v=i[2]
r>3?(o=v===t)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,p.v=t,p.n=i[1]):d<v&&(o=r<3||i[0]>t||t>v)&&(i[4]=r,i[5]=t,p.n=v,c=0))}if(o||r>1)return a
throw s=!0,t}return function(o,f,v){if(l>1)throw TypeError("Generator is already running")
for(s&&1===f&&d(f,v),c=f,u=v;(n=c<2?e:u)||!s;){i||(c?c<3?(c>1&&(p.n=-1),d(c,u)):p.n=u:p.v=u)
try{if(l=2,i){if(c||(o="next"),n=i[o]){if(!(n=n.call(i,u)))throw TypeError("iterator result is not an object")
if(!n.done)return n
u=n.value,c<2&&(c=0)}else 1===c&&(n=i.return)&&n.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1)
i=e}else if((n=(s=p.n<0)?u:r.call(t,p))!==a)break}catch(n){i=e,c=1,u=n}finally{l=1}}return{value:n,done:s}}}(r,o,i),!0),u}var a={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}n=Object.getPrototypeOf
var c=[][t]?n(n([][t]())):(_regeneratorDefine2(n={},t,function(){return this}),n),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(u),_regeneratorDefine2(u,o,"Generator"),_regeneratorDefine2(u,t,function(){return this}),_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,n,r,t){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}(_regeneratorDefine2=function _regeneratorDefine(e,n,r,t){function o(n,r){_regeneratorDefine2(e,n,function(e){return this._invoke(n,r,e)})}n?i?i(e,n,{value:r,enumerable:!t,configurable:!t,writable:!t}):e[n]=r:(o("next",0),o("throw",1),o("return",2))})(e,n,r,t)}var C=navigator.userAgent.includes("Mannings App"),U=.6,z=3,J=function downloadPcMobileFile(e){var n,r=e.blob,t=e.linkUrl,o=e.filename,i=e.type,a=void 0===i?"":i,c=document.createElement("a")
c.style.display="none",c.download=o,"mobile"!==a?(n=URL.createObjectURL(r),c.href=n):c.href=t,document.body.appendChild(c),c.click(),document.body.removeChild(c),"mobile"!==a&&URL.revokeObjectURL(n)},q=function(){var e=a()(_regenerator().m(function _callee(e,n){var r,t
return _regenerator().w(function(o){for(;;)switch(o.n){case 0:if(!W.a.isMobile()){o.n=1
break}try{A.b?window.location=e:J({linkUrl:e,filename:n,type:"mobile"})}catch(n){window.open(e)}o.n=4
break
case 1:return o.n=2,fetch(e)
case 2:return r=o.v,o.n=3,r.blob()
case 3:t=o.v,J({blob:t,filename:n})
case 4:return o.a(2)}},_callee)}))
return function handleDownloadFile(n,r){return e.apply(this,arguments)}}(),R=function(){var e=a()(_regenerator().m(function _callee2(e,n){var r,t,o,i
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:r=e.url,t=e.filename,o=navigator.userAgent.includes("Mannings App")
try{o?((i=document.createElement("a")).style.display="none",i.href=r,i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i),null==n||n()):q(r,t)}catch(e){window.open(r)}case 1:return a.a(2)}},_callee2)}))
return function downloadPDF(n,r){return e.apply(this,arguments)}}(),B=function getPdfFileName(e){var n=e.match(/([^/]+)(?=\.pdf$)/)
return n?n[1]:Date.now().toString()},Q=function isMobileInPC(){var e=navigator.userAgent.toLowerCase(),n=/mobile|android|iphone|ipad|ipod|windows phone|blackberry|iemobile|kindle/i.test(e),r=window.innerWidth<=768&&window.innerHeight<=1024,t="maxTouchPoints"in navigator&&navigator.maxTouchPoints>0
return n&&r&&t}
function previewPDF_regenerator(){var e,n,r="function"==typeof Symbol?Symbol:{},t=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag"
function i(r,t,o,i){var c=t&&t.prototype instanceof Generator?t:Generator,u=Object.create(c.prototype)
return previewPDF_regeneratorDefine2(u,"_invoke",function(r,t,o){var i,c,u,l=0,f=o||[],s=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(n,r){return i=n,c=0,u=e,p.n=r,a}}
function d(r,t){for(c=r,u=t,n=0;!s&&l&&!o&&n<f.length;n++){var o,i=f[n],d=p.p,v=i[2]
r>3?(o=v===t)&&(u=i[(c=i[4])?5:(c=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(c=0,p.v=t,p.n=i[1]):d<v&&(o=r<3||i[0]>t||t>v)&&(i[4]=r,i[5]=t,p.n=v,c=0))}if(o||r>1)return a
throw s=!0,t}return function(o,f,v){if(l>1)throw TypeError("Generator is already running")
for(s&&1===f&&d(f,v),c=f,u=v;(n=c<2?e:u)||!s;){i||(c?c<3?(c>1&&(p.n=-1),d(c,u)):p.n=u:p.v=u)
try{if(l=2,i){if(c||(o="next"),n=i[o]){if(!(n=n.call(i,u)))throw TypeError("iterator result is not an object")
if(!n.done)return n
u=n.value,c<2&&(c=0)}else 1===c&&(n=i.return)&&n.call(i),c<2&&(u=TypeError("The iterator does not provide a '"+o+"' method"),c=1)
i=e}else if((n=(s=p.n<0)?u:r.call(t,p))!==a)break}catch(n){i=e,c=1,u=n}finally{l=1}}return{value:n,done:s}}}(r,o,i),!0),u}var a={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}n=Object.getPrototypeOf
var c=[][t]?n(n([][t]())):(previewPDF_regeneratorDefine2(n={},t,function(){return this}),n),u=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(c)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,previewPDF_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(u),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,previewPDF_regeneratorDefine2(u,"constructor",GeneratorFunctionPrototype),previewPDF_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",previewPDF_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),previewPDF_regeneratorDefine2(u),previewPDF_regeneratorDefine2(u,o,"Generator"),previewPDF_regeneratorDefine2(u,t,function(){return this}),previewPDF_regeneratorDefine2(u,"toString",function(){return"[object Generator]"}),(previewPDF_regenerator=function _regenerator(){return{w:i,m:f}})()}function previewPDF_regeneratorDefine2(e,n,r,t){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}(previewPDF_regeneratorDefine2=function _regeneratorDefine(e,n,r,t){function o(n,r){previewPDF_regeneratorDefine2(e,n,function(e){return this._invoke(n,r,e)})}n?i?i(e,n,{value:r,enumerable:!t,configurable:!t,writable:!t}):e[n]=r:(o("next",0),o("throw",1),o("return",2))})(e,n,r,t)}var H=function PreviewPDF(e){var n=e.title,r=void 0===n?"invoice":n,t=Object(v.a)(),o=t.locale,i=(t.formatMessage,Object(O.a)()),c=u()(i,2)[1].addToast,f=Object(D.b)(),d=u()(f,1)[0].isSignedIn,p=Object(b.g)(),w=new URLSearchParams(location.search).get("invoiceFlag"),S=Object(l.useState)(window.innerWidth<750),x=u()(S,2),I=x[0],N=x[1],W=Object(l.useState)(""),A=u()(W,2),q=A[0],H=A[1],K=Object(l.useState)(!1),Z=u()(K,2),V=Z[0],$=Z[1],X=Object(l.useState)(I?"PageWidth":1.3),Y=u()(X,2),ee=Y[0],ne=Y[1],re=E.queries.getInvoicePdfQuery
L("body","#easychat-floating-button")
var te=Object(F.a)(re,{variables:{invoiceId:w},fetchPolicy:"cache-and-network"}),oe=te.data,ie=te.error,ae=te.loading,ce=(oe||{}).getInvoicePdfUrl
Object(l.useEffect)(function(){d||p.push("/login"),ue(r)},[d]),Object(l.useEffect)(function(){"200"===(null==ce?void 0:ce.code)&&null!=ce&&ce.pdf_url&&H(function toRelativeUrl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
try{var n=new URL(e,window.location.origin),r=n.origin,t=n.pathname,o=n.search
return window.location.origin===r?e:"".concat(t).concat(o)}catch(n){return e}}(ce.pdf_url))},[ce])
var ue=function setDocumentTitle(e){document.title="zh-HK"===o?"收據":e},le=P()(function(e){se(e)},500),fe=function showToastMsg(){$(!1)
var e="zh-HK"===o?"收據已自動下載完成":"The receipt has been downloaded automatically."
setTimeout(function(){c({type:"info",message:e,timeout:5e3})},600)},se=function(){var e=a()(previewPDF_regenerator().m(function _callee(){var e,n,r,t,o,i=arguments
return previewPDF_regenerator().w(function(a){for(;;)switch(a.p=a.n){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:""){a.n=1
break}return a.a(2)
case 1:return $(!0),n=B(e),a.p=2,a.n=3,fetch(e)
case 3:return r=a.v,a.n=4,r.blob()
case 4:if(t=a.v,o=new File([t],"".concat(n,".pdf"),{type:"application/pdf"}),!navigator.canShare||!navigator.canShare({files:[o]})){a.n=6
break}return a.n=5,de({file:o,filename:n,linkUrl:e,blob:t})
case 5:a.n=7
break
case 6:R({url:e,filename:n},fe())
case 7:a.n=9
break
case 8:a.p=8,a.v,R({url:e,filename:n},fe())
case 9:return a.p=9,$(!1),a.f(9)
case 10:return a.a(2)}},_callee,null,[[2,8,9,10]])}))
return function handleSharePDF(){return e.apply(this,arguments)}}(),de=function(){var e=a()(previewPDF_regenerator().m(function _callee2(e){var n,r,t,o
return previewPDF_regenerator().w(function(i){for(;;)switch(i.p=i.n){case 0:return r=(n=e||{}).file,t=n.filename,o=n.blob,i.p=1,i.n=2,navigator.share({files:[r],title:t})
case 2:i.n=4
break
case 3:i.p=3,i.v,Q()&&J({blob:o,filename:t})
case 4:return i.a(2)}},_callee2,null,[[1,3]])}))
return function shareFile(n){return e.apply(this,arguments)}}()
Object(l.useEffect)(function(){var e=P()(function(){N(window.innerWidth<750)},600)
return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[])
var pe=Object(y.defaultLayoutPlugin)({setInitialTab:function(){var e=a()(previewPDF_regenerator().m(function _callee3(e){return previewPDF_regenerator().w(function(e){for(;;)switch(e.n){case 0:return e.a(2,0)}},_callee3)}))
return function setInitialTab(n){return e.apply(this,arguments)}}(),sidebarTabs:function sidebarTabs(e){return[e[0]]}}),ve=Object(y.defaultLayoutPlugin)({sidebarTabs:function sidebarTabs(){return[]},renderToolbar:function renderToolbar(e){return s.a.createElement(e,null,function(e){var n=e.ZoomIn,r=e.ZoomOut
return s.a.createElement("div",{className:M.invoiceMobilePreview},s.a.createElement("div",{className:M.scaleWrapper},s.a.createElement(r,{renderTooltip:function renderTooltip(){return null}}),s.a.createElement("div",{style:{width:"35px"}}),s.a.createElement(n,{renderTooltip:function renderTooltip(){return null}})),s.a.createElement("div",{style:{cursor:"pointer"},onClick:function onClick(e){e.stopPropagation(),le(q)}},s.a.createElement(j.a,{src:_.a,size:21,attrs:{color:"#979797"}})))})}}),ge=Object(l.useMemo)(function(){return I?[ve]:[pe]},[I,q])
if(ae)return k.a
return s.a.createElement("div",{className:M.root},I&&!C&&s.a.createElement("div",{className:M.headerWrapper},s.a.createElement("button",{className:M.backButton,onClick:function onClick(){return p.goBack()}},s.a.createElement(h.a,null)),s.a.createElement("div",{className:M.title},"zh-HK"===o?"收據":r)),q&&!ie?s.a.createElement(m.Worker,{workerUrl:"/venia-static-assets/js/pdfJs/pdf.worker.min.js"},s.a.createElement(m.Viewer,{enableSmoothScroll:!0,key:ee,fileUrl:q,plugins:ge,defaultScale:ee,style:{height:"100%",width:"100%"},onZoom:function handleZoom(e){var n=e.scale
if(n<U||n>z){var r=function getZoomRate(e,n){var r=Math.max(U,Math.min(z,n))
if(r===e){if(n>r)return Math.max(U,e-.01)
if(n<r)return Math.min(z,e+.01)}return r}(ee,n)
ne(r)}}}),V&&k.a):function renderError(){var e=(ce||{}).message,n=void 0===e?"Data Fetch Error":e
return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:M.fetchError},n),s.a.createElement(T.a,{priority:"high",onClick:function onClick(){return p.goBack()}},s.a.createElement(g.a,{id:"global.back",defaultMessage:"Back​"})))}(),s.a.createElement(G.a,null))}
H.propTypes={title:p.a.string}
n.default=H},cgcT:function(e,n,r){"use strict"
var t,o=r("q1tI")
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]
for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(null,arguments)}n.a=function SvgArrowLeft(e){return o.createElement("svg",_extends({width:40,height:40,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),t||(t=o.createElement("path",{d:"M13.379 18.754l9.375-9.317c.527-.585 1.406-.585 1.992 0a1.38 1.38 0 010 1.934L16.31 19.75l8.378 8.438a1.283 1.283 0 010 1.933 1.283 1.283 0 01-1.933 0l-9.375-9.375c-.586-.527-.586-1.406 0-1.992z",fill:"#212121"})))}},dOb9:function(e,n,r){"use strict"
var t=r("JPst"),o=r.n(t)()(function(e){return e[1]})
o.push([e.i,".rpv-core__tooltip-body {\n    width: 90px;\n}\n\n.previewPDF-root-Qdp .rpv-default-layout__container {\n    border: none;\n}\n\n.previewPDF-root-Qdp {\n    height: 100vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background: #f5f5f5;\n}\n.previewPDF-headerWrapper-Jxl {\n    position: relative;\n    height: 40px;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 8px;\n    background: #fff;\n}\n.previewPDF-headerWrapper-Jxl .previewPDF-backButton-DCo {\n    position: absolute;\n    left: 2px;\n    top: 50%;\n    transform: translate(0, -50%) scale(0.9);\n}\n\n.previewPDF-headerWrapper-Jxl .previewPDF-title-qRi {\n    line-height: 40px;\n    font-size: 16px;\n    font-weight: 500;\n}\n.previewPDF-fetchError-lgw {\n    margin: 160px auto 20px auto;\n}\n\n.previewPDF-invoiceMobilePreview-Jzu {\n    position: relative;\n    width: 100%;\n    padding: 4px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.previewPDF-invoiceMobilePreview-Jzu .previewPDF-scaleWrapper-YcS {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    display: flex;\n    transform: translate(-50%, -50%);\n}\n",""]),o.locals={root:"previewPDF-root-Qdp flex flex-col items-center",headerWrapper:"previewPDF-headerWrapper-Jxl",backButton:"previewPDF-backButton-DCo",title:"previewPDF-title-qRi",fetchError:"previewPDF-fetchError-lgw",invoiceMobilePreview:"previewPDF-invoiceMobilePreview-Jzu",scaleWrapper:"previewPDF-scaleWrapper-YcS"},n.a=o}}])
