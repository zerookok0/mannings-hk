/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{skeU:function(n,e,t){"use strict"
t.r(e)
var l=t("J4zp"),a=t.n(l),o=t("q1tI"),i=t.n(o),r=t("DrT9"),c=t("Fvk+"),u=t("zAJy"),s=Object(u.a)(),d=(new c.a).getItem("store_view_code")||"en_US"
e.default=function MyGoogleMap(n){var e=n.locationList,t=n.pickLocation,l=n.currentPick,c=Object(o.useState)(null),u=a()(c,2),g=u[0],f=u[1],v=Object(o.useState)(!1),m=a()(v,2),p=m[0],h=m[1],b=Object(o.useState)(!1),k=a()(b,2),E=(k[0],k[1]),y=Object(o.useState)(null),O=a()(y,2),j=O[0],w=O[1],C=Object(o.useState)({lat:0,lng:0}),I=a()(C,2),M=I[0],_=I[1],F=Object(o.useRef)(null)
Object(o.useEffect)(function(){try{if(null==e||!e.length)return
var n=function panIfNeeded(n){var e,t,l
if(F.current){var a=null===(e=F.current)||void 0===e?void 0:e.getCenter(),o=null==a?void 0:null===(t=a.lat)||void 0===t?void 0:t.call(a),i=null==a?void 0:null===(l=a.lng)||void 0===l?void 0:l.call(a),r=Math.abs(o-n.lat)>1e-5,c=Math.abs(i-n.lng)>1e-5;(r||c)&&F.current.panTo(n)}}
if(l){var t,a=null==e?void 0:e.find(function(n){return n.key===l})
if(a&&0!==(null===(t=a.location)||void 0===t?void 0:t.lat)){var o=a.location,i={lat:o.lat,lng:o.lng}
f(i),_(i),w(l),E(!0),n(i)}}else if(e.length>0){var r,c=null===(r=e[0])||void 0===r?void 0:r.location
if(null!=c&&c.lat&&null!=c&&c.lng){var u={lat:c.lat,lng:c.lng}
g&&g.lat===u.lat&&g.lng===u.lng||f(u),w(null),E(!1),n(u)}}}catch(n){h(!0)}},[e,l])
var S=function onInfoWindowClose(){w(null),E(!1)}
return Object(o.useEffect)(function(){null===j&&E(!1)},[j]),p?i.a.createElement("div",{style:{height:400,padding:12,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"}},"⚠️ 地图加载失败，请稍后再试"):i.a.createElement("div",{id:"map",className:"map-container",style:{height:"400px"}},i.a.createElement(r.a,{apiKey:s,language:"zh_HK"===d?"zh-HK":"en",onError:function onError(n){h(!0)}},g&&i.a.createElement(r.e,{defaultZoom:10,defaultCenter:g,mapId:"DEMO_MAP_ID",onLoad:function onLoad(n){return F.current=n},options:{draggable:!0,zoomControl:!0,gestureHandling:"auto"},onError:function onError(){h(!0)}},null==e?void 0:e.map(function(n,e){try{var l=n.location||{},a=l.lat,c=l.lng
return Number.isFinite(a)&&Number.isFinite(c)?i.a.createElement(o.Fragment,{key:e},i.a.createElement(r.b,{position:n.location,anchorPoint:r.c.TOP_LEFT,onClick:function onClick(){return function onMarkerClick(n){try{w(n.key),E(!0),_({lat:n.location.lat,lng:n.location.lng}),F.current&&F.current.panTo({lat:n.location.lat,lng:n.location.lng}),t(n)}catch(n){}}(n)}},i.a.createElement("img",{src:"/venia-static-assets/images/storefinder/marker.png",width:20,height:20})),j===n.key&&i.a.createElement(r.d,{position:M,shouldFocus:!1,onCloseClick:S},i.a.createElement("div",null,n.key||""))):null}catch(n){return null}}))))}}}])
