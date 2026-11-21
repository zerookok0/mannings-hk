/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{DrT9:function(e,t,n){"use strict"
n.d(t,"a",function(){return g}),n.d(t,"b",function(){return S}),n.d(t,"c",function(){return w}),n.d(t,"d",function(){return k}),n.d(t,"e",function(){return E}),n.d(t,"f",function(){return C})
var o=n("q1tI"),r=n.n(o),a=n("i8i4"),s=n("aUsF"),i=n.n(s)
function __rest(e,t){var n={}
for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0
for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}function __awaiter(e,t,n,o){return new(n||(n=Promise))(function(r,a){function fulfilled(e){try{step(o.next(e))}catch(e){a(e)}}function rejected(e){try{step(o.throw(e))}catch(e){a(e)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(fulfilled,rejected)}step((o=o.apply(e,t||[])).next())})}"function"==typeof SuppressedError&&SuppressedError
const l={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},c="https://maps.googleapis.com/maps/api/js"
class GoogleMapsApiLoader{static load(e,t){return __awaiter(this,void 0,void 0,function*(){var n,o
const r=e.libraries?e.libraries.split(","):[],a=this.serializeParams(e)
this.listeners.push(t),(null===(o=null===(n=window.google)||void 0===n?void 0:n.maps)||void 0===o?void 0:o.importLibrary)?(this.serializedApiParams||(this.loadingStatus=l.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=a,this.initImportLibrary(e)),this.serializedApiParams&&this.serializedApiParams
const s=["maps",...r]
yield Promise.all(s.map(e=>google.maps.importLibrary(e)))})}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary)return
let t=null
const n=()=>t||(t=new Promise((t,n)=>{var o
const r=document.createElement("script"),a=new URLSearchParams
for(const[t,n]of Object.entries(e)){const e=t.replace(/[A-Z]/g,e=>"_"+e[0].toLowerCase())
a.set(e,String(n))}a.set("loading","async"),a.set("callback","__googleMapsCallback__"),r.async=!0,r.src=c+"?"+a.toString(),r.nonce=(null===(o=document.querySelector("script[nonce]"))||void 0===o?void 0:o.nonce)||"",r.onerror=(()=>{this.loadingStatus=l.FAILED,this.notifyLoadingStatusListeners(),n(new Error("The Google Maps JavaScript API could not load."))}),window.__googleMapsCallback__=(()=>{this.loadingStatus=l.LOADED,this.notifyLoadingStatusListeners(),t()}),window.gm_authFailure=(()=>{this.loadingStatus=l.AUTH_FAILURE,this.notifyLoadingStatusListeners()}),this.loadingStatus=l.LOADING,this.notifyLoadingStatusListeners(),document.head.append(r)}))
google.maps.importLibrary=(e=>n().then(()=>google.maps.importLibrary(e)))}static notifyLoadingStatusListeners(){for(const e of this.listeners)e(this.loadingStatus)}}GoogleMapsApiLoader.loadingStatus=l.NOT_LOADED,GoogleMapsApiLoader.listeners=[]
const u="GMP_visgl_rgmlibrary_v1_default",d=["gmp_visgl_reactgooglemaps_v1.7.1"],p=r.a.createContext(null)
const g=e=>{const{children:t}=e,n=__rest(e,["children"]),{mapInstances:a,addMapInstance:s,removeMapInstance:i,clearMapInstances:l}=function useMapInstances(){const[e,t]=Object(o.useState)({})
return{mapInstances:e,addMapInstance:(e,n="default")=>{t(t=>Object.assign(Object.assign({},t),{[n]:e}))},removeMapInstance:(e="default")=>{t(t=>{var n=e
return t[n],__rest(t,["symbol"==typeof n?n:n+""])})},clearMapInstances:()=>{t({})}}}(),{status:c,loadedLibraries:g,importLibrary:m}=function useGoogleMapsApiLoader(e){const{onLoad:t,onError:n,apiKey:r,version:a,libraries:s=[]}=e,i=__rest(e,["onLoad","onError","apiKey","version","libraries"]),[l,c]=Object(o.useState)(GoogleMapsApiLoader.loadingStatus),[d,p]=Object(o.useReducer)((e,t)=>e[t.name]?e:Object.assign(Object.assign({},e),{[t.name]:t.value}),{}),g=Object(o.useMemo)(()=>null==s?void 0:s.join(","),[s]),m=Object(o.useMemo)(()=>JSON.stringify(Object.assign({apiKey:r,version:a},i)),[r,a,i]),f=Object(o.useCallback)(e=>__awaiter(this,void 0,void 0,function*(){var t
if(d[e])return d[e]
if(!(null===(t=null===google||void 0===google?void 0:google.maps)||void 0===t?void 0:t.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.")
const n=yield window.google.maps.importLibrary(e)
return p({name:e,value:n}),n}),[d])
return Object(o.useEffect)(()=>{(()=>__awaiter(this,void 0,void 0,function*(){try{const e=Object.assign({key:r},i)
a&&(e.v=a),(null==g?void 0:g.length)>0&&(e.libraries=g),(void 0===e.channel||e.channel<0||e.channel>999)&&delete e.channel,void 0===e.solutionChannel?e.solutionChannel=u:""===e.solutionChannel&&delete e.solutionChannel,yield GoogleMapsApiLoader.load(e,e=>c(e))
for(const e of["core","maps",...s])yield f(e)
t&&t()}catch(e){n&&n(e)}}))()},[r,g,m]),{status:l,loadedLibraries:d,importLibrary:f}}(n),f=function useInternalUsageAttributionIds(e){return Object(o.useMemo)(()=>e.disableUsageAttribution?null:d,[e.disableUsageAttribution])}(n),h=Object(o.useMemo)(()=>({mapInstances:a,addMapInstance:s,removeMapInstance:i,clearMapInstances:l,status:c,loadedLibraries:g,importLibrary:m,internalUsageAttributionIds:f}),[a,s,i,l,c,g,m,f])
return r.a.createElement(p.Provider,{value:h},t)}
function createMapEvent(e,t,n){var o
const r={type:e,map:t,detail:{},stoppable:!1,stop:()=>{}}
if(f.includes(e)){const e=r,n=t.getCenter(),o=t.getZoom(),a=t.getHeading()||0,s=t.getTilt()||0,i=t.getBounds()
return!n||!i||Number.isFinite(o),e.detail={center:(null==n?void 0:n.toJSON())||{lat:0,lng:0},zoom:o||0,heading:a,tilt:s,bounds:(null==i?void 0:i.toJSON())||{north:90,east:180,south:-90,west:-180}},e}if(h.includes(e)){if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent")
const e=r
return e.domEvent=n.domEvent,e.stoppable=!0,e.stop=(()=>n.stop()),e.detail={latLng:(null===(o=n.latLng)||void 0===o?void 0:o.toJSON())||null,placeId:n.placeId},e}return r}const m={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},f=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],h=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],b=Object.keys(m)
function useMemoized(e,t){const n=function usePrevious(e){const t=Object(o.useRef)(void 0)
return Object(o.useEffect)(()=>{t.current=e}),t.current}(e)
return Object(o.useMemo)(()=>n&&t(n,e)?n:e,[e,n,t])}function useDeepCompareEffect(e,t){!function useCustomCompareEffect(e,t,n){Object(o.useEffect)(e,[useMemoized(t,n)])}(e,t,i.a)}const v=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","headingInteractionEnabled","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","tiltInteractionEnabled","zoomControl","zoomControlOptions"])
function useApiLoadingStatus(){var e
return(null===(e=Object(o.useContext)(p))||void 0===e?void 0:e.status)||l.NOT_LOADED}function toLatLngLiteral(e){return function isLatLngLiteral(e){return!(!e||"object"!=typeof e)&&"lat"in e&&"lng"in e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng)}(e)?e:e.toJSON()}const O=()=>{return r.a.createElement("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"}},r.a.createElement("h2",null,"Error: AuthFailure"),r.a.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",r.a.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))}
function useApiIsLoaded(){return useApiLoadingStatus()===l.LOADED}function useTrackedCameraStateRef(e){const t=function useForceUpdate(){const[,e]=Object(o.useReducer)(e=>e+1,0)
return e}(),n=Object(o.useRef)({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0})
return Object(o.useEffect)(()=>{if(!e)return
const o=google.maps.event.addListener(e,"bounds_changed",()=>{!function handleBoundsChange(e,t){const n=e.getCenter(),o=e.getZoom(),r=e.getHeading()||0,a=e.getTilt()||0,s=e.getBounds()
!n||!s||Number.isFinite(o),Object.assign(t.current,{center:(null==n?void 0:n.toJSON())||{lat:0,lng:0},zoom:o||0,heading:r,tilt:a})}(e,n),t()})
return()=>o.remove()},[e,t]),n}class CachedMapStack{static has(e){return this.entries[e]&&this.entries[e].length>0}static pop(e){return this.entries[e]&&this.entries[e].pop()||null}static push(e,t){this.entries[e]||(this.entries[e]=[]),this.entries[e].push(t)}}function useMapInstance(e,t){const n=useApiIsLoaded(),[r,a]=Object(o.useState)(null),[s,i]=function useCallbackRef(){const[e,t]=Object(o.useState)(null)
return[e,Object(o.useCallback)(e=>t(e),[t])]}(),l=useTrackedCameraStateRef(r),{id:c,defaultBounds:u,defaultCenter:d,defaultZoom:p,defaultHeading:g,defaultTilt:m,reuseMaps:f,renderingType:h,colorScheme:b}=e,v=__rest(e,["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps","renderingType","colorScheme"]),O=void 0!==e.zoom||void 0!==e.defaultZoom,y=void 0!==e.center||void 0!==e.defaultCenter
!v.center&&d&&(v.center=d),!v.zoom&&Number.isFinite(p)&&(v.zoom=p),!v.heading&&Number.isFinite(g)&&(v.heading=g),!v.tilt&&Number.isFinite(m)&&(v.tilt=m)
const E=v.internalUsageAttributionIds
v.internalUsageAttributionIds=null==E?t.internalUsageAttributionIds:[...t.internalUsageAttributionIds||[],...E]
for(const e of Object.keys(v))void 0===v[e]&&delete v[e]
const L=Object(o.useRef)(void 0)
return Object(o.useEffect)(()=>{if(!s||!n)return
const{addMapInstance:o,removeMapInstance:r}=t,{mapId:i}=e,d=`${i||"default"}:${h||"default"}:${b||"LIGHT"}`
let p,g
if(f&&CachedMapStack.has(d)?(g=CachedMapStack.pop(d),p=g.getDiv(),s.appendChild(p),g.setOptions(v),setTimeout(()=>g.setCenter(g.getCenter()),0)):((p=document.createElement("div")).style.height="100%",s.appendChild(p),g=new google.maps.Map(p,Object.assign(Object.assign(Object.assign({},v),h?{renderingType:h}:{}),b?{colorScheme:b}:{}))),a(g),o(g,c),u){const{padding:e}=u,t=__rest(u,["padding"])
g.fitBounds(t,e)}else O&&y||g.fitBounds({east:180,west:-180,south:-90,north:90})
if(L.current){const{mapId:e,cameraState:t}=L.current
e!==i&&g.setOptions(t)}return()=>{L.current={mapId:i,cameraState:l.current},p.remove(),f?CachedMapStack.push(d,g):google.maps.event.clearInstanceListeners(g),a(null),r(c)}},[s,n,c,e.mapId,e.renderingType,e.colorScheme]),[r,i,l]}CachedMapStack.entries={}
const y=r.a.createContext(null),E=e=>{const{children:t,id:n,className:a,style:s}=e,i=Object(o.useContext)(p),c=useApiLoadingStatus()
if(!i)throw new Error("<Map> can only be used inside an <ApiProvider> component.")
const[u,d,g]=useMapInstance(e,i)
!function useMapCameraParams(e,t,n){const r=n.center?toLatLngLiteral(n.center):null
let a=null,s=null
r&&Number.isFinite(r.lat)&&Number.isFinite(r.lng)&&(a=r.lat,s=r.lng)
const i=Number.isFinite(n.zoom)?n.zoom:null,l=Number.isFinite(n.heading)?n.heading:null,c=Number.isFinite(n.tilt)?n.tilt:null
Object(o.useLayoutEffect)(()=>{if(!e)return
const n={}
let o=!1
null===a||null===s||t.current.center.lat===a&&t.current.center.lng===s||(n.center={lat:a,lng:s},o=!0),null!==i&&t.current.zoom!==i&&(n.zoom=i,o=!0),null!==l&&t.current.heading!==l&&(n.heading=l,o=!0),null!==c&&t.current.tilt!==c&&(n.tilt=c,o=!0),o&&e.moveCamera(n)})}(u,g,e),function useMapEvents(e,t){for(const n of b){const r=t[n],a=m[n]
Object(o.useEffect)(()=>{if(!e)return
if(!r)return
const t=google.maps.event.addListener(e,a,t=>{r(createMapEvent(a,e,t))})
return()=>t.remove()},[e,a,r])}}(u,e),function useMapOptions(e,t){const n={},o=Object.keys(t)
for(const e of o)v.has(e)&&(n[e]=t[e])
useDeepCompareEffect(()=>{e&&e.setOptions(n)},[n])}(u,e)
const f=function useDeckGLCameraUpdate(e,t){const{viewport:n,viewState:r}=t,a=!!n
return Object(o.useLayoutEffect)(()=>{if(!e||!r)return
const{latitude:t,longitude:n,bearing:o,pitch:a,zoom:s}=r
e.moveCamera({center:{lat:t,lng:n},heading:o,tilt:a,zoom:s+1})},[e,r]),a}(u,e),h=!!e.controlled
Object(o.useEffect)(()=>{if(u)return f&&u.setOptions({disableDefaultUI:!0}),(f||h)&&u.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{u.setOptions({gestureHandling:e.gestureHandling,keyboardShortcuts:e.keyboardShortcuts})}},[u,f,h,e.gestureHandling,e.keyboardShortcuts])
const E=e.center?toLatLngLiteral(e.center):null
let L=null,C=null
E&&Number.isFinite(E.lat)&&Number.isFinite(E.lng)&&(L=E.lat,C=E.lng)
const j=Object(o.useMemo)(()=>{var t,n,o
return{center:{lat:null!=L?L:0,lng:null!=C?C:0},zoom:null!==(t=e.zoom)&&void 0!==t?t:0,heading:null!==(n=e.heading)&&void 0!==n?n:0,tilt:null!==(o=e.tilt)&&void 0!==o?o:0}},[L,C,e.zoom,e.heading,e.tilt])
Object(o.useLayoutEffect)(()=>{if(!u||!h)return
u.moveCamera(j)
const e=u.addListener("bounds_changed",()=>{u.moveCamera(j)})
return()=>e.remove()},[u,h,j])
const M=Object(o.useMemo)(()=>Object.assign({width:"100%",height:"100%",position:"relative",zIndex:f?-1:0},s),[s,f]),w=Object(o.useMemo)(()=>({map:u}),[u])
return c===l.AUTH_FAILURE?r.a.createElement("div",{style:Object.assign({position:"relative"},a?{}:M),className:a},r.a.createElement(O,null)):r.a.createElement("div",Object.assign({ref:d,"data-testid":"map",style:a?void 0:M,className:a},n?{id:n}:{}),u?r.a.createElement(y.Provider,{value:w},t):null)}
E.deckGLViewProps=!0
const L=new Set
function logErrorOnce(...e){const t=JSON.stringify(e)
L.has(t)||L.add(t)}const C=(e=null)=>{const t=Object(o.useContext)(p),{map:n}=Object(o.useContext)(y)||{}
if(null===t)return logErrorOnce("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null
const{mapInstances:r}=t
return null!==e?r[e]||null:n||(r.default||null)}
function useMapsLibrary(e){const t=useApiIsLoaded(),n=Object(o.useContext)(p)
return Object(o.useEffect)(()=>{t&&n&&n.importLibrary(e)},[t,n,e]),(null==n?void 0:n.loadedLibraries[e])||null}function useMapsEventListener(e,t,n){Object(o.useEffect)(()=>{if(!e||!t||!n)return
const o=google.maps.event.addListener(e,t,n)
return()=>o.remove()},[e,t,n])}function usePropBinding(e,t,n){Object(o.useEffect)(()=>{e&&(e[t]=n)},[e,t,n])}function useDomEventListener(e,t,n){Object(o.useEffect)(()=>{if(e&&t&&n)return e.addEventListener(t,n),()=>e.removeEventListener(t,n)},[e,t,n])}const j=new class GlobalStyleManager{constructor(){this.renderedStyles=new Set,this.styleElement=null}getStyleElement(){return this.styleElement||(this.styleElement=document.createElement("style"),this.styleElement.setAttribute("data-rgm-anchor-styles",""),document.head.appendChild(this.styleElement)),this.styleElement}addAdvancedMarkerPointerEventsOverwrite(){this.renderedStyles.has("marker-pointer-events")||(this.getStyleElement().textContent+="\n      gmp-advanced-marker[data-origin='rgm'] {\n        pointer-events: none !important;\n      }\n    ",this.renderedStyles.add("marker-pointer-events"))}cleanup(){this.styleElement&&(this.styleElement.remove(),this.styleElement=null,this.renderedStyles.clear())}}
const M=r.a.createContext(null),w={TOP_LEFT:["0%","0%"],TOP_CENTER:["50%","0%"],TOP:["50%","0%"],TOP_RIGHT:["100%","0%"],LEFT_CENTER:["0%","50%"],LEFT_TOP:["0%","0%"],LEFT:["0%","50%"],LEFT_BOTTOM:["0%","100%"],RIGHT_TOP:["100%","0%"],RIGHT:["100%","50%"],RIGHT_CENTER:["100%","50%"],RIGHT_BOTTOM:["100%","100%"],BOTTOM_LEFT:["0%","100%"],BOTTOM_CENTER:["50%","100%"],BOTTOM:["50%","100%"],BOTTOM_RIGHT:["100%","100%"],CENTER:["50%","50%"]},S=Object(o.forwardRef)((e,t)=>{const{children:n,style:s,className:i,anchorPoint:l}=e,[c,u]=function useAdvancedMarker(e){const[t,n]=Object(o.useState)(null),[r,a]=Object(o.useState)(null),s=C(),i=useMapsLibrary("marker"),{children:l,onClick:c,className:u,onMouseEnter:d,onMouseLeave:p,onDrag:g,onDragStart:m,onDragEnd:f,collisionBehavior:h,clickable:b,draggable:v,position:O,title:y,zIndex:E,anchorPoint:L,anchorLeft:M,anchorTop:S}=e,I=o.Children.count(l)
return Object(o.useEffect)(()=>{if(!s||!i)return
const e=new i.AdvancedMarkerElement
e.map=s,n(e)
let t=null
return I>0&&(t=document.createElement("div"),e.content=t,a(t)),()=>{e.map=null,null==t||t.remove(),n(null),a(null)}},[s,i,I]),Object(o.useEffect)(()=>{(null==t?void 0:t.content)&&isElementNode(t.content)&&!(I>0)&&(t.content.className=null!=u?u:"")},[t,u,I]),function useAdvancedMarkerAnchoring(e,t,n,r,a){Object(o.useEffect)(()=>{if(!e||!a)return
const o=function isVersionGreaterEqual(e,t){var n
if(!(null===(n=null===google||void 0===google?void 0:google.maps)||void 0===n?void 0:n.version))return
const o=google.maps.version.split("."),r=parseInt(o[0],10),a=parseInt(o[1],10)
return r>e||r===e&&a>=t}(3,62),s=e.content
if(s&&isElementNode(s)){if(void 0!==n||void 0!==r)return e.anchorLeft=n,void(e.anchorTop=r)
if(void 0!==t){const[n,r]=null!=t?t:w.BOTTOM,a=`calc(-1 * ${n})`,i=`calc(-1 * ${r})`
o?(e.anchorLeft=a,e.anchorTop=i,s.style.transform=""):(s.style.transform=`translate(50%, 100%) translate(${a}, ${i})`,e.dataset.origin="rgm",j.addAdvancedMarkerPointerEventsOverwrite())}}},[e,t,n,r,a])}(t,L,M,S,I>0),usePropBinding(t,"position",O),usePropBinding(t,"title",null!=y?y:""),usePropBinding(t,"zIndex",E),usePropBinding(t,"collisionBehavior",h),Object(o.useEffect)(()=>{t&&(t.gmpDraggable=void 0!==v?v:!!(g||m||f))},[t,v,g,f,m]),Object(o.useEffect)(()=>{if(!t)return
const e=void 0!==b||Boolean(c)||Boolean(d)||Boolean(p)
t.gmpClickable=e,e&&(null==t?void 0:t.content)&&isElementNode(t.content)&&(t.content.style.pointerEvents="all",c&&(t.content.style.cursor="pointer"))},[t,b,c,d,p]),useMapsEventListener(t,"click",c),useMapsEventListener(t,"drag",g),useMapsEventListener(t,"dragstart",m),useMapsEventListener(t,"dragend",f),useDomEventListener(null==t?void 0:t.element,"mouseenter",d),useDomEventListener(null==t?void 0:t.element,"mouseleave",p),[t,r]}(e),d=Object(o.useMemo)(()=>c?{marker:c}:null,[c])
return Object(o.useImperativeHandle)(t,()=>c,[c]),u?r.a.createElement(M.Provider,{value:d},Object(a.createPortal)(r.a.createElement(I,{anchorPoint:l,styles:s,className:i},n),u)):null})
function isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}S.displayName="AdvancedMarker"
const I=({children:e,styles:t,className:n})=>r.a.createElement("div",{className:n,style:t},e)
function setValueForStyle(e,t,n){const o=0===t.indexOf("--")
null==n||"boolean"==typeof n||""===n?o?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":o?e.setProperty(t,n):"number"!=typeof n||0===n||function isUnitlessNumber(e){return _.has(e)}(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}const _=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridArea","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"])
const k=e=>{const{children:t,headerContent:n,style:s,className:l,pixelOffset:c,anchor:u,shouldFocus:d,onClose:p,onCloseClick:g}=e,m=__rest(e,["children","headerContent","style","className","pixelOffset","anchor","shouldFocus","onClose","onCloseClick"]),f=useMapsLibrary("maps"),[h,b]=Object(o.useState)(null),v=Object(o.useRef)(null),O=Object(o.useRef)(null),y=useMemoized(m,i.a)
Object(o.useEffect)(()=>{if(!f)return
v.current=document.createElement("div"),O.current=document.createElement("div")
const e=y
c&&(e.pixelOffset=new google.maps.Size(c[0],c[1])),n&&(e.headerContent="string"==typeof n?n:O.current)
const t=new google.maps.InfoWindow(y)
return t.setContent(v.current),b(t),()=>{var e,n
t.setContent(null),null===(e=v.current)||void 0===e||e.remove(),null===(n=O.current)||void 0===n||n.remove(),v.current=null,O.current=null,b(null)}},[f])
const E=Object(o.useRef)(null)
Object(o.useEffect)(()=>{h&&v.current&&(!function setValueForStyles(e,t,n){if(null!=t&&"object"!=typeof t)throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")
const o=e.style
if(null!=n){for(const e in n)!n.hasOwnProperty(e)||null!=t&&t.hasOwnProperty(e)||(0===e.indexOf("--")?o.setProperty(e,""):"float"===e?o.cssFloat="":o[e]="")
if(null!=t)for(const e in t){const r=t[e]
t.hasOwnProperty(e)&&n[e]!==r&&setValueForStyle(o,e,r)}}else{if(null==t)return
for(const e in t)t.hasOwnProperty(e)&&setValueForStyle(o,e,t[e])}}(v.current,s||null,E.current),E.current=s||null,l!==v.current.className&&(v.current.className=l||""))},[h,l,s]),Object(o.useEffect)(()=>{if(!h)return
const e=y
e.pixelOffset=c?new google.maps.Size(c[0],c[1]):null,e.headerContent=n?"string"==typeof n?n:O.current:null,h.setOptions(y)},[y,c,n]),useMapsEventListener(h,"close",p),useMapsEventListener(h,"closeclick",g)
const L=C()
return Object(o.useEffect)(()=>{var e
if(!L||!h||null===u)return
const t=!!u,n={map:L}
if(u&&(n.anchor=u,function isAdvancedMarker(e){return void 0!==e.content}(u)&&u.content instanceof Element)){const t=null==u?void 0:u.getBoundingClientRect()
if(t&&"rgm"===u.dataset.origin){const n=null===(e=u.content.firstElementChild)||void 0===e?void 0:e.firstElementChild,o=null==n?void 0:n.getBoundingClientRect(),r=o.x-t.x+(o.width-t.width)/2,a=o.y-t.y,s=y
s.pixelOffset=new google.maps.Size(c?c[0]+r:r,c?c[1]+a:a),h.setOptions(s)}}return void 0!==d&&(n.shouldFocus=d),h.open(n),()=>{t&&h.set("anchor",null),h.close()}},[h,u,L,d,y,c]),r.a.createElement(r.a.Fragment,null,v.current&&Object(a.createPortal)(t,v.current),null!==O.current&&Object(a.createPortal)(n,O.current))}
Object(o.forwardRef)((e,t)=>{const n=function useMarker(e){const[t,n]=Object(o.useState)(null),r=C(),{onClick:a,onDrag:s,onDragStart:i,onDragEnd:l,onMouseOver:c,onMouseOut:u}=e,d=__rest(e,["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"]),{position:p,draggable:g}=d
return Object(o.useEffect)(()=>{if(!r)return
const e=new google.maps.Marker(d)
return e.setMap(r),n(e),()=>{e.setMap(null),n(null)}},[r]),Object(o.useEffect)(()=>{if(!t)return
const e=t,n=google.maps.event
return a&&n.addListener(e,"click",a),s&&n.addListener(e,"drag",s),i&&n.addListener(e,"dragstart",i),l&&n.addListener(e,"dragend",l),c&&n.addListener(e,"mouseover",c),u&&n.addListener(e,"mouseout",u),t.setDraggable(Boolean(g)),()=>{n.clearInstanceListeners(e)}},[t,g,a,s,i,l,c,u]),Object(o.useEffect)(()=>{t&&d&&t.setOptions(d)},[t,d]),Object(o.useEffect)(()=>{!g&&p&&t&&t.setPosition(p)},[g,p,t]),t}(e)
return Object(o.useImperativeHandle)(t,()=>n,[n]),r.a.createElement(r.a.Fragment,null)}).displayName="Marker"}}])
