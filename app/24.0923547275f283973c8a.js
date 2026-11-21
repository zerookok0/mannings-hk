/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{bxaO:function(e,n,r){"use strict"
r.r(n),r.d(n,"default",function(){return E}),r.d(n,"SliderShimmer",function(){return F.a})
var t=r("RIqP"),a=r.n(t),l=r("lSNA"),s=r.n(l),c=r("yXPU"),u=r.n(c),d=r("J4zp"),p=r.n(d),g=r("q1tI"),b=r.n(g),m=r("17x9"),v=r("+91f"),y=r("LboF"),h=r.n(y),O=r("OMXT"),j={injectType:"singletonStyleTag",insert:"head",singleton:!0},w=(h()(O.a,j),O.a.locals||{}),S=r("y1Xp"),_=r("qQMA"),k=r("znku"),P=r("OBO2"),D=r("JOgF"),T=r("iMth"),C=r("G0pX"),G=r("hrOP")
function ownKeys(e,n){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e)
n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(r),!0).forEach(function(n){s()(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _regenerator(){var e,n,r="function"==typeof Symbol?Symbol:{},t=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag"
function i(r,t,o,i){var l=t&&t.prototype instanceof Generator?t:Generator,s=Object.create(l.prototype)
return _regeneratorDefine2(s,"_invoke",function(r,t,o){var i,l,s,c=0,u=o||[],p=!1,f={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(n,r){return i=n,l=0,s=e,f.n=r,a}}
function d(r,t){for(l=r,s=t,n=0;!p&&c&&!o&&n<u.length;n++){var o,i=u[n],d=f.p,g=i[2]
r>3?(o=g===t)&&(s=i[(l=i[4])?5:(l=3,3)],i[4]=i[5]=e):i[0]<=d&&((o=r<2&&d<i[1])?(l=0,f.v=t,f.n=i[1]):d<g&&(o=r<3||i[0]>t||t>g)&&(i[4]=r,i[5]=t,f.n=g,l=0))}if(o||r>1)return a
throw p=!0,t}return function(o,u,g){if(c>1)throw TypeError("Generator is already running")
for(p&&1===u&&d(u,g),l=u,s=g;(n=l<2?e:s)||!p;){i||(l?l<3?(l>1&&(f.n=-1),d(l,s)):f.n=s:f.v=s)
try{if(c=2,i){if(l||(o="next"),n=i[o]){if(!(n=n.call(i,s)))throw TypeError("iterator result is not an object")
if(!n.done)return n
s=n.value,l<2&&(l=0)}else 1===l&&(n=i.return)&&n.call(i),l<2&&(s=TypeError("The iterator does not provide a '"+o+"' method"),l=1)
i=e}else if((n=(p=f.n<0)?s:r.call(t,f))!==a)break}catch(n){i=e,l=1,s=n}finally{c=1}}return{value:n,done:p}}}(r,o,i),!0),s}var a={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}n=Object.getPrototypeOf
var l=[][t]?n(n([][t]())):(_regeneratorDefine2(n={},t,function(){return this}),n),s=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(l)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(s),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(s,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(s),_regeneratorDefine2(s,o,"Generator"),_regeneratorDefine2(s,t,function(){return this}),_regeneratorDefine2(s,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,n,r,t){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}(_regeneratorDefine2=function _regeneratorDefine(e,n,r,t){function o(n,r){_regeneratorDefine2(e,n,function(e){return this._invoke(n,r,e)})}n?i?i(e,n,{value:r,enumerable:!t,configurable:!t,writable:!t}):e[n]=r:(o("next",0),o("throw",1),o("return",2))})(e,n,r,t)}var M=function Slider(e){var n,r=Object(S.a)(w,e.classes),t=Object(k.b)(),o=p()(t,1)[0].currentUser,i=Object(C.a)({currentUser:o}),l=i.cliUbid,s=i.customLabel1,c=e.minHeight,d=e.autoplay,f=e.autoplaySpeed,m=(e.fade,e.infinite),y=(e.showArrows,e.showDots,e.showSmallBanner),h=e.mode,O=void 0===h?4:h,j=e.behavior,M=void 0===j?"default":j,E=e.textAlign,F=e.border,R=e.borderColor,B=e.borderWidth,W=e.borderRadius,A=e.marginTop,I=e.marginRight,H=e.marginBottom,K=e.marginLeft,x=e.mediaQueries,L=e.paddingTop,N=e.paddingRight,U=e.paddingBottom,J=e.paddingLeft,z=e.cssClasses,Q=void 0===z?[]:z,X=e.children,q=(e.showPromotion,e.promotionId,e.promotionName,e.creativeName,e.creativeSlot,e.locationId),Y=Object(P.a)({mediaQueries:x}).styles,V=Object(g.useState)(1),Z=p()(V,2),$=Z[0],ee=Z[1],ne=Object(g.useState)([]),re=p()(ne,2),te=re[0],oe=re[1],ie=Object(g.useState)(""),ae=p()(ie,2),le=(ae[0],ae[1]),se=Object(g.useState)(!1),ce=p()(se,2),ue=ce[0],de=ce[1],pe=Object(_.b)().innerWidth<=767,fe={"sdk-onlines":["ManningsWebHomePageBanner1"],"sdk-onlines-health":["ManningsWebCategoryPageHealth"],"sdk-onlines-beauty":["ManningsWebCategoryPageBeauty"],"sdk-onlines-personalcare":["ManningsWebCategoryPagePersonalCare"],"sdk-onlines-haircare":["ManningsWebCategoryPageHairCare"],"sdk-onlines-infant":["ManningsWebCategoryPageMaternalChildCare"],"sdk-onlines-candy":["ManningsWebCategoryPageFood"],"sdk-onlines-doublebanner":["ManningsWebHomePageSecondBanner"]},ge=Object(g.useMemo)(function(){return Q.find(function(e){return fe[e]})},[Q.join(",")]),be=Object(g.useMemo)(function(){return!!ge&&fe[ge]},[ge]),me=Object(g.useContext)(T.a).data,ve=(null==me?void 0:null===(n=me.storeConfig)||void 0===n?void 0:n.store_code)||null
Object(g.useEffect)(function(){if(be){var e=function isSdkReady(e){return!(!e||"function"!=typeof e.fetchDisplayAds||"function"!=typeof e.registerAdImpressionEvent)},n=function(){var n=u()(_regenerator().m(function _callee(){var n,r,t
return _regenerator().w(function(o){for(;;)switch(o.p=o.n){case 0:if(!e(window.onlineSalesSDK)){o.n=1
break}return o.a(2,window.onlineSalesSDK)
case 1:if(!window.__onlineSalesReady||"function"!=typeof window.__onlineSalesReady.then){o.n=6
break}return o.p=2,o.n=3,window.__onlineSalesReady
case 3:o.n=5
break
case 4:o.p=4,o.v
case 5:if(!e(window.onlineSalesSDK)){o.n=6
break}return o.a(2,window.onlineSalesSDK)
case 6:n=30,r=100,t=0
case 7:if(!(t<n)){o.n=10
break}if(!e(window.onlineSalesSDK)){o.n=8
break}return o.a(2,window.onlineSalesSDK)
case 8:return o.n=9,new Promise(function(e){return setTimeout(e,r)})
case 9:t++,o.n=7
break
case 10:throw new Error("onlineSalesSDK not available after short wait")
case 11:return o.a(2)}},_callee,null,[[2,4]])}))
return function waitForSDK(){return n.apply(this,arguments)}}();(function(){var e=u()(_regenerator().m(function _callee2(){var e,r,t,o
return _regenerator().w(function(i){for(;;)switch(i.p=i.n){case 0:return i.p=0,i.n=1,n()
case 1:return e=i.v,i.n=2,e.fetchDisplayAds({cliUbid:l,"f.custom_label_1":s,pageType:Q.includes("sdk-onlines")||Q.includes("sdk-onlines-doublebanner")?"ManningsWebHomePage":"ManningsWebCategoryPage",adUnit:be,productCount:10})
case 2:r=i.v,t=[],be.forEach(function(n){var o,i=null==r?void 0:null===(o=r.ads)||void 0===o?void 0:o[n]
if(Array.isArray(i)&&i.length>0){var a=i.map(function(e){var n,r,t,o
return{imageEn:null==e?void 0:null===(n=e.elements)||void 0===n?void 0:n.imageEn,imageTc:null==e?void 0:null===(r=e.elements)||void 0===r?void 0:r.imageTc,urlEn:null==e?void 0:null===(t=e.elements)||void 0===t?void 0:t.urlEn,urlTc:null==e?void 0:null===(o=e.elements)||void 0===o?void 0:o.urlTc,uclid:null==e?void 0:e.uclid}})
if(a.length)a.map(function(n){return n.uclid&&e.registerAdImpressionEvent({cliUbid:l,"f.custom_label_1":s,uclid:n.uclid}).catch(function(e){}),{image:"zh_HK"==ve?n.imageTc:n.imageEn,uclid:n.uclid,link:"zh_HK"==ve?n.urlTc:n.urlEn}}).forEach(function(e){e.image&&t.push(e)})}}),t&&oe(t),de(!0),le(""),i.n=4
break
case 3:i.p=3,o=i.v,le((null==o?void 0:o.message)||JSON.stringify(o)),de(!0)
case 4:return i.a(2)}},_callee2,null,[[0,3]])}))
return function fetchAds(){return e.apply(this,arguments)}})()()}else de(!0)},[ge,ve,l,s])
var ye=Object(g.useMemo)(function(){if(te&&te.length>0){var e="sdk-onlines-doublebanner"===ge?5:6,n=X.map(function(e,n){var r,t
return null==(null==e?void 0:null===(r=e.props)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.desktopImage)?n:-1}).filter(function(e){return-1!==e}).slice(0,e),r=te.slice(0,e),t=X.slice()
return n.forEach(function(e,n){if(r[n]){var o=r[n],i=o.image,a=o.link,l=o.uclid,s=X[e],c=_objectSpread(_objectSpread({},s),{},{props:_objectSpread(_objectSpread({},s.props),{},{data:_objectSpread(_objectSpread({},s.props.data),{},{desktopImage:i,mobileImage:i,link:a,uclid:l})})})
t[e]=c}}),t.filter(function(e){var n,r
return null!=(null==e?void 0:null===(n=e.props)||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:r.desktopImage)})}return X.filter(function(e){var n,r
return null!=(null==e?void 0:null===(n=e.props)||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:r.desktopImage)})},[X,te,ge]),he=g.Children.count(ye),Oe=Q.includes("sdk-onlines"),je=y?Object(G.a)({children:X,isHomepageMainSlider:Oe,isMobile:pe}):void 0,we=_objectSpread(_objectSpread({},{minHeight:y?0:c,textAlign:E,border:F,borderColor:R,borderWidth:B,borderRadius:W,marginTop:A,marginRight:I,marginBottom:H,marginLeft:K,paddingTop:L,paddingRight:N,paddingBottom:U,paddingLeft:J}),Y)
y&&(we.minHeight=0,je&&(we.aspectRatio=je))
var Se={},_e=Object(g.useMemo)(function(){return y?!(!pe||1!==O||"options"!==M):pe}),ke=Object(g.useMemo)(function(){return!pe}),Pe=Object(g.useMemo)(function(){return y?!pe&&1===O&&"options"===M:!pe}),De={mode:y&&O||0,behavior:M,dots:_e,arrows:ke,autoplaySpeed:f,autoplay:d,infinite:m,onSlideChange:function onSlideChange(e){ee(e.realIndex+1),Object.keys(Se).map(function(e){Object(D.jarallax)(Se[e].element,"onScroll")})}},Te=g.Children.map(ye,function(e,n){return e.props&&e.props.data&&(e.props.data.showSmallBanner=y,e.props.data.smallBannerAspectRatio=je,e.props.data.classes={root:r.bannerRoot,link:r.bannerLink,wrapper:r.bannerWrapper,posterOverlay:r.bannerPosterOverlay},e.props.data.getParallax=function(e,r){Se[n]={element:e,options:r}},e.props.data.sliderIndex=n+1,e.props.data.locationId||(e.props.data.locationId=q)),e}),Ce=ue||y||we.minHeight?void 0:"56.25vw",Ge=Ce?_objectSpread(_objectSpread({},we),{},{minHeight:Ce}):we
return b.a.createElement("div",{"aria-live":"polite","aria-busy":!ue,className:[r.root,r.sliderBanner,y?r.sliderSmallBanner:""].concat(a()(Q)).join(" "),style:Ge},Te&&g.Children.count(Te)>0?b.a.createElement(v.a,De,Te):null,Pe&&he>0&&b.a.createElement("div",{className:r.pagination},$," / ",he))}
M.propTypes={classes:Object(m.shape)({root:m.string,bannerRoot:m.string,bannerLink:m.string,bannerWrapper:m.string,bannerPosterOverlay:m.string}),appearance:Object(m.oneOf)(["default"]),minHeight:m.string,autoplay:m.bool,autoplaySpeed:m.number,fade:m.bool,infinite:m.bool,showArrows:m.bool,showDots:m.bool,showSmallBanner:m.bool,mode:m.number,behavior:Object(m.oneOf)(["default","options"]),textAlign:m.string,border:m.string,borderColor:m.string,borderWidth:m.string,borderRadius:m.string,marginTop:m.string,marginRight:m.string,marginBottom:m.string,marginLeft:m.string,mediaQueries:Object(m.arrayOf)(Object(m.shape)({media:m.string,style:m.object})),paddingTop:m.string,paddingRight:m.string,paddingBottom:m.string,paddingLeft:m.string,cssClasses:Object(m.arrayOf)(m.string)}
var E=M,F=r("riTY")}}])
