/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/tn/":function(e,t,r){"use strict"
var n=r("LboF"),a=r.n(n),o=r("92+K"),i={injectType:"singletonStyleTag",insert:"head",singleton:!0}
a()(o.a,i),o.a.locals},"0Mcr":function(e,t,r){"use strict"
e.exports=r("M5AO")},"1CmR":function(e,t,r){"use strict"
e.exports=r("iLni")},"1lPa":function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M5.5,11.5c-.275,0-.341.159-.146.354l6.292,6.293a.5.5,0,0,0,.709,0l6.311-6.275c.2-.193.13-.353-.145-.355L15.5,11.5V1.5a1,1,0,0,0-1-1h-5a1,1,0,0,0-1,1V11a.5.5,0,0,1-.5.5Z"}),o.createElement("path",{d:"M23.5,18.5v4a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1v-4"}))},s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},l={left:0,top:8},c=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=r&&r.download?r.download.download:"Download"
return o.createElement(a.Tooltip,{ariaControlsSuffix:"get-file",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:n,testId:"get-file__download-button",onClick:t},o.createElement(i,null)),content:function(){return n},offset:l})},u=function(e,t){var r=document.createElement("a")
r.style.display="none",r.href=e,r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)},d=function(e,t,r){var n=URL.createObjectURL(new Blob([e],{type:r}))
u(n,t),n&&URL.revokeObjectURL(n)},h=function(e,t){e.getData().then(function(e){/iphone|ipod|ipad/i.test(navigator.userAgent)&&!/CriOS/i.test(navigator.userAgent)?d(e,t,"application/octet-stream"):/iphone|ipod|ipad/i.test(navigator.userAgent)&&/CriOS/i.test(navigator.userAgent)?u("data:application/pdf;base64,".concat(function(e){return btoa(Array(e.length).fill("").map(function(t,r){return String.fromCharCode(e[r])}).join(""))}(e)),t):d(e,t,"application/pdf")})},p=function(e){var t=e.children,r=e.fileNameGenerator,n=e.store,a=o.useState(n.get("file")),i=a[0],s=a[1],l=o.useState(n.get("doc")),u=l[0],d=l[1],p=function(e){d(e)},f=function(e){s(e)}
return o.useEffect(function(){return n.subscribe("doc",p),n.subscribe("file",f),function(){n.subscribe("doc",p),n.unsubscribe("file",f)}},[]),(t||function(e){return o.createElement(c,{onClick:e.onClick})})({onClick:function(){u&&i&&h(u,r(i))}})},f=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=r&&r.download?r.download.download:"Download"
return o.createElement(a.MenuItem,{icon:o.createElement(i,null),testId:"get-file__download-menu",onClick:t},n)}
r.DownloadIcon=i,r.getFilePlugin=function(e){var t=o.useMemo(function(){return a.createStore({})},[]),r=function(e){return e.name?(r=(t=e.name).split("/").pop())?r.split("#")[0].split("?")[0]:t:"document.pdf"
var t,r},n=function(n){return o.createElement(p,s({},n,{fileNameGenerator:e&&e.fileNameGenerator||r,store:t}))}
return{onDocumentLoad:function(e){t.update("doc",e.doc),t.update("file",e.file)},Download:n,DownloadButton:function(){return o.createElement(n,null,function(e){return o.createElement(c,s({},e))})},DownloadMenuItem:function(e){return o.createElement(n,null,function(t){return o.createElement(f,{onClick:function(){t.onClick(),e.onClick()}})})}}}},"3CK9":function(e,r,a){"use strict"
var o=a("q1tI"),i=a("lRFz")
function n(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}var s,l=n(o),u=n(i)
r.AnnotationType=void 0,(s=r.AnnotationType||(r.AnnotationType={}))[s.Text=1]="Text",s[s.Link=2]="Link",s[s.FreeText=3]="FreeText",s[s.Line=4]="Line",s[s.Square=5]="Square",s[s.Circle=6]="Circle",s[s.Polygon=7]="Polygon",s[s.Polyline=8]="Polyline",s[s.Highlight=9]="Highlight",s[s.Underline=10]="Underline",s[s.Squiggly=11]="Squiggly",s[s.StrikeOut=12]="StrikeOut",s[s.Stamp=13]="Stamp",s[s.Caret=14]="Caret",s[s.Ink=15]="Ink",s[s.Popup=16]="Popup",s[s.FileAttachment=17]="FileAttachment"
var d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)}
function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var h,p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)}
r.TextDirection=void 0,(h=r.TextDirection||(r.TextDirection={})).RightToLeft="RTL",h.LeftToRight="LTR"
var f,v=l.createContext({currentTheme:"light",direction:r.TextDirection.LeftToRight,setCurrentTheme:function(){}}),m=function(e){var t=[]
return Object.keys(e).forEach(function(r){r&&e[r]&&t.push(r)}),t.join(" ")},g="undefined"!=typeof window?l.useLayoutEffect:l.useEffect,_=function(e){var t=l.useRef(null),r=e.once,n=e.threshold,a=e.onVisibilityChanged
return g(function(){var e=t.current
if(e){var o=new IntersectionObserver(function(t){t.forEach(function(t){var n=t.isIntersecting,i=t.intersectionRatio
a({isVisible:n,ratio:i}),n&&r&&(o.unobserve(e),o.disconnect())})},{threshold:n||0})
return o.observe(e),function(){o.unobserve(e),o.disconnect()}}},[]),t},b=function(e){var t=e.children,n=e.ignoreDirection,a=void 0!==n&&n,o=e.size,i=void 0===o?24:o,s=l.useContext(v).direction,c=!a&&s===r.TextDirection.RightToLeft,u="".concat(i||24,"px")
return l.createElement("svg",{"aria-hidden":"true",className:m({"rpv-core__icon":!0,"rpv-core__icon--rtl":c}),focusable:"false",height:u,viewBox:"0 0 24 24",width:u},t)},y=function(){return l.createElement(b,{size:16},l.createElement("path",{d:"M23.5,0.499l-16.5,23l-6.5-6.5"}))},k=function(e){var t=e.children,n=e.testId,a=e.onClick,o=l.useContext(v).direction===r.TextDirection.RightToLeft,i=n?{"data-testid":n}:{}
return l.createElement("button",p({className:m({"rpv-core__primary-button":!0,"rpv-core__primary-button--rtl":o}),type:"button",onClick:a},i),t)},S=function(e){var t=e.size,r=void 0===t?"4rem":t,n=e.testId,a=l.useState(!1),o=a[0],i=a[1],s=n?{"data-testid":n}:{},c=_({onVisibilityChanged:function(e){i(e.isVisible)}})
return l.createElement("div",p({},s,{className:m({"rpv-core__spinner":!0,"rpv-core__spinner--animating":o}),ref:c,style:{height:r,width:r}}))},C=function(e){var t=e.ariaLabel,n=void 0===t?"":t,a=e.autoFocus,o=void 0!==a&&a,i=e.placeholder,s=void 0===i?"":i,c=e.testId,u=e.type,d=void 0===u?"text":u,h=e.value,f=void 0===h?"":h,_=e.onChange,b=e.onKeyDown,y=void 0===b?function(){}:b,k=l.useContext(v).direction,S=l.useRef(),C=k===r.TextDirection.RightToLeft,P={ref:S,"data-testid":"","aria-label":n,className:m({"rpv-core__textbox":!0,"rpv-core__textbox--rtl":C}),placeholder:s,value:f,onChange:function(e){return _(e.target.value)},onKeyDown:y}
return c&&(P["data-testid"]=c),g(function(){if(o){var e=S.current
if(e){var t=window.scrollX,r=window.scrollY
e.focus(),window.scrollTo(t,r)}}},[]),"text"===d?l.createElement("input",p({type:"text"},P)):l.createElement("input",p({type:"password"},P))}
!function(e){e[e.ExitFullScreen=0]="ExitFullScreen",e[e.FullScreenChange=1]="FullScreenChange",e[e.FullScreenElement=2]="FullScreenElement",e[e.FullScreenEnabled=3]="FullScreenEnabled",e[e.RequestFullScreen=4]="RequestFullScreen"}(f||(f={}))
var P,E={ExitFullScreen:"exitFullscreen",FullScreenChange:"fullscreenchange",FullScreenElement:"fullscreenElement",FullScreenEnabled:"fullscreenEnabled",RequestFullScreen:"requestFullscreen"},x={ExitFullScreen:"webkitExitFullscreen",FullScreenChange:"webkitfullscreenchange",FullScreenElement:"webkitFullscreenElement",FullScreenEnabled:"webkitFullscreenEnabled",RequestFullScreen:"webkitRequestFullscreen"},w={ExitFullScreen:"msExitFullscreen",FullScreenChange:"msFullscreenChange",FullScreenElement:"msFullscreenElement",FullScreenEnabled:"msFullscreenEnabled",RequestFullScreen:"msRequestFullscreen"},A="undefined"!=typeof window,F=A&&(f.FullScreenEnabled in document&&E||x.FullScreenEnabled in document&&x||w.FullScreenEnabled in document&&w)||E,M=function(){return A&&F.FullScreenEnabled in document&&!0===document[F.FullScreenEnabled]},T=function(e){return A?e[F.ExitFullScreen]():Promise.resolve({})},R=function(){return A?document[F.FullScreenElement]:null},I=function(e,t){var r=l.useRef(),n=function(){r.current&&clearTimeout(r.current)}
return l.useEffect(function(){return function(){return n()}},[]),l.useCallback(function(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o]
n(),r.current=setTimeout(function(){e.apply(void 0,a)},t)},[e,t])},O=function(){var e=l.useRef(!1)
return l.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e},D=function(e){var t=l.useRef(e)
return l.useEffect(function(){t.current=e},[e]),t.current}
!function(e){e.NotRenderedYet="NotRenderedYet",e.Rendering="Rendering",e.Rendered="Rendered"}(P||(P={}))
var L,N=-9999,B=function(e){var t=e.doc,r=t.numPages,n=t.loadingTask.docId,a=l.useMemo(function(){return Array(r).fill(null).map(function(e,t){return{pageIndex:t,renderStatus:P.NotRenderedYet,visibility:N}})},[n]),o=l.useRef({currentRenderingPage:-1,startRange:0,endRange:r-1,visibilities:a}),i=function(e,t){o.current.visibilities[e].visibility=t}
return{getHighestPriorityPage:function(){var e=o.current.visibilities.slice(o.current.startRange,o.current.endRange+1).filter(function(e){return e.visibility>N})
if(!e.length)return-1
for(var t=e[0].pageIndex,n=e[e.length-1].pageIndex,a=e.length,i=0;i<a;i++){if(e[i].renderStatus===P.Rendering)return-1
if(e[i].renderStatus===P.NotRenderedYet)return e[i].pageIndex}return n+1<r&&o.current.visibilities[n+1].renderStatus!==P.Rendered?n+1:t-1>=0&&o.current.visibilities[t-1].renderStatus!==P.Rendered?t-1:-1},isInRange:function(e){return e>=o.current.startRange&&e<=o.current.endRange},markNotRendered:function(){for(var e=0;e<r;e++)o.current.visibilities[e].renderStatus=P.NotRenderedYet},markRendered:function(e){o.current.visibilities[e].renderStatus=P.Rendered},markRendering:function(e){-1!==o.current.currentRenderingPage&&o.current.currentRenderingPage!==e&&o.current.visibilities[o.current.currentRenderingPage].renderStatus===P.Rendering&&(o.current.visibilities[o.current.currentRenderingPage].renderStatus=P.NotRenderedYet),o.current.visibilities[e].renderStatus=P.Rendering,o.current.currentRenderingPage=e},setOutOfRange:function(e){i(e,N)},setRange:function(e,t){o.current.startRange=e,o.current.endRange=t
for(var n=0;n<r;n++)(n<e||n>t)&&(o.current.visibilities[n].visibility=N,o.current.visibilities[n].renderStatus=P.NotRenderedYet)},setVisibility:i}},j={core:{askingPassword:{requirePasswordToOpen:"This document requires a password to open",submit:"Submit"},wrongPassword:{tryAgain:"The password is wrong. Please try again"},pageLabel:"Page {{pageIndex}}"}},G=l.createContext({l10n:j,setL10n:function(){}}),z=0,H=function(){return z++},W=function(e,t,r){var n=function(e){var n=t.current
if(n){var a=e.target
if(a instanceof Element&&a.shadowRoot){var o=e.composedPath()
o.length>0&&!n.contains(o[0])&&r()}else n.contains(a)||r()}}
l.useEffect(function(){if(e){var t={capture:!0}
return document.addEventListener("click",n,t),function(){document.removeEventListener("click",n,t)}}},[])},V=function(e){var t=function(t){"Escape"===t.key&&e()}
l.useEffect(function(){return document.addEventListener("keyup",t),function(){document.removeEventListener("keyup",t)}},[])},U=function(e){var t=e.ariaControlsSuffix,n=e.children,a=e.closeOnClickOutside,o=e.closeOnEscape,i=e.onToggle,s=l.useRef(),c=l.useContext(v).direction===r.TextDirection.RightToLeft
return l.useEffect(function(){var e=window.getComputedStyle(document.body).overflow
return document.body.style.overflow="hidden",function(){document.body.style.overflow=e}},[]),V(function(){s.current&&o&&i()}),W(a,s,i),g(function(){var e=s.current
if(e){var t=.75*document.body.clientHeight
e.getBoundingClientRect().height>=t&&(e.style.overflow="auto",e.style.maxHeight="".concat(t,"px"))}},[]),l.createElement("div",{"aria-modal":"true",className:m({"rpv-core__modal-body":!0,"rpv-core__modal-body--rtl":c}),id:"rpv-core__modal-body-".concat(t),ref:s,role:"dialog",tabIndex:-1},n)},q=function(e){var t=e.children
return l.createElement("div",{className:"rpv-core__modal-overlay"},t)}
r.ToggleStatus=void 0,(L=r.ToggleStatus||(r.ToggleStatus={})).Close="Close",L.Open="Open",L.Toggle="Toggle"
var K,X=function(e){var t=l.useState(e),n=t[0],a=t[1]
return{opened:n,toggle:function(e){switch(e){case r.ToggleStatus.Close:a(!1)
break
case r.ToggleStatus.Open:a(!0)
break
case r.ToggleStatus.Toggle:default:a(function(e){return!e})}}}},Y=function(e){var t=e.content,r=e.isOpened,n=void 0!==r&&r,a=e.target,o=X(n),i=o.opened,s=o.toggle
return l.createElement(l.Fragment,null,a&&a(s,i),i&&t(s))}
r.Position=void 0,(K=r.Position||(r.Position={})).TopLeft="TOP_LEFT",K.TopCenter="TOP_CENTER",K.TopRight="TOP_RIGHT",K.RightTop="RIGHT_TOP",K.RightCenter="RIGHT_CENTER",K.RightBottom="RIGHT_BOTTOM",K.BottomLeft="BOTTOM_LEFT",K.BottomCenter="BOTTOM_CENTER",K.BottomRight="BOTTOM_RIGHT",K.LeftTop="LEFT_TOP",K.LeftCenter="LEFT_CENTER",K.LeftBottom="LEFT_BOTTOM"
var J,Z,Q,$,ee,te,re,ne,ae=function(e,t,n,a,o){g(function(){var i=t.current,s=e.current,l=n.current
if(s&&i&&l){var c=l.getBoundingClientRect(),u=function(e,t,n,a){var o=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=i.height,l=i.width,c=0,u=0
switch(n){case r.Position.TopLeft:c=o.top-s,u=o.left
break
case r.Position.TopCenter:c=o.top-s,u=o.left+o.width/2-l/2
break
case r.Position.TopRight:c=o.top-s,u=o.left+o.width-l
break
case r.Position.RightTop:c=o.top,u=o.left+o.width
break
case r.Position.RightCenter:c=o.top+o.height/2-s/2,u=o.left+o.width
break
case r.Position.RightBottom:c=o.top+o.height-s,u=o.left+o.width
break
case r.Position.BottomLeft:c=o.top+o.height,u=o.left
break
case r.Position.BottomCenter:c=o.top+o.height,u=o.left+o.width/2-l/2
break
case r.Position.BottomRight:c=o.top+o.height,u=o.left+o.width-l
break
case r.Position.LeftTop:c=o.top,u=o.left-l
break
case r.Position.LeftCenter:c=o.top+o.height/2-s/2,u=o.left-l
break
case r.Position.LeftBottom:c=o.top+o.height-s,u=o.left-l}return{left:u+(a.left||0),top:c+(a.top||0)}}(s,i,a,o),d=u.top,h=u.left
s.style.top="".concat(d-c.top,"px"),s.style.left="".concat(h-c.left,"px")}},[])},oe=function(e){var t,n=e.customClassName,a=e.position
return l.createElement("div",{className:m((t={"rpv-core__arrow":!0,"rpv-core__arrow--tl":a===r.Position.TopLeft,"rpv-core__arrow--tc":a===r.Position.TopCenter,"rpv-core__arrow--tr":a===r.Position.TopRight,"rpv-core__arrow--rt":a===r.Position.RightTop,"rpv-core__arrow--rc":a===r.Position.RightCenter,"rpv-core__arrow--rb":a===r.Position.RightBottom,"rpv-core__arrow--bl":a===r.Position.BottomLeft,"rpv-core__arrow--bc":a===r.Position.BottomCenter,"rpv-core__arrow--br":a===r.Position.BottomRight,"rpv-core__arrow--lt":a===r.Position.LeftTop,"rpv-core__arrow--lc":a===r.Position.LeftCenter,"rpv-core__arrow--lb":a===r.Position.LeftBottom},t["".concat(n)]=""!==n,t))})},ie=function(e){var t=e.ariaControlsSuffix,n=e.children,a=e.closeOnClickOutside,o=e.offset,i=e.position,s=e.targetRef,c=e.onClose,u=l.useRef(),d=l.useRef(),h=l.useRef(),p=l.useContext(v).direction===r.TextDirection.RightToLeft
W(a,u,c),ae(u,s,h,i,o),g(function(){var e=d.current
if(e){var t=.75*document.body.clientHeight
e.getBoundingClientRect().height>=t&&(e.style.overflow="auto",e.style.maxHeight="".concat(t,"px"))}},[])
var f="rpv-core__popover-body-inner-".concat(t)
return l.createElement(l.Fragment,null,l.createElement("div",{ref:h,style:{left:0,position:"absolute",top:0}}),l.createElement("div",{"aria-describedby":f,className:m({"rpv-core__popover-body":!0,"rpv-core__popover-body--rtl":p}),id:"rpv-core__popover-body-".concat(t),ref:u,role:"dialog",tabIndex:-1},l.createElement(oe,{customClassName:"rpv-core__popover-body-arrow",position:i}),l.createElement("div",{id:f,ref:d},n)))},se=function(e){var t=e.closeOnEscape,r=e.onClose,n=l.useRef()
return V(function(){n.current&&t&&r()}),l.createElement("div",{className:"rpv-core__popover-overlay",ref:n})},le=function(e){var t=e.ariaControlsSuffix,n=e.children,a=e.contentRef,o=e.offset,i=e.position,s=e.targetRef,c=l.useRef(),u=l.useContext(v).direction===r.TextDirection.RightToLeft
return ae(a,s,c,i,o),l.createElement(l.Fragment,null,l.createElement("div",{ref:c,style:{left:0,position:"absolute",top:0}}),l.createElement("div",{className:m({"rpv-core__tooltip-body":!0,"rpv-core__tooltip-body--rtl":u}),id:"rpv-core__tooltip-body-".concat(t),ref:a,role:"tooltip"},l.createElement(oe,{customClassName:"rpv-core__tooltip-body-arrow",position:i}),l.createElement("div",{className:"rpv-core__tooltip-body-content"},n)))}
r.FullScreenMode=void 0,(J=r.FullScreenMode||(r.FullScreenMode={})).Normal="Normal",J.Entering="Entering",J.Entered="Entered",J.EnteredCompletely="EnteredCompletely",J.Exitting="Exitting",J.Exited="Exited",r.LayerRenderStatus=void 0,(Z=r.LayerRenderStatus||(r.LayerRenderStatus={}))[Z.PreRender=0]="PreRender",Z[Z.DidRender=1]="DidRender",r.PageMode=void 0,(Q=r.PageMode||(r.PageMode={})).Attachments="UseAttachments",Q.Bookmarks="UseOutlines",Q.ContentGroup="UseOC",Q.Default="UserNone",Q.FullScreen="FullScreen",Q.Thumbnails="UseThumbs",r.PasswordStatus=void 0,($=r.PasswordStatus||(r.PasswordStatus={})).RequiredPassword="RequiredPassword",$.WrongPassword="WrongPassword",r.RotateDirection=void 0,(ee=r.RotateDirection||(r.RotateDirection={})).Backward="Backward",ee.Forward="Forward",r.ScrollMode=void 0,(te=r.ScrollMode||(r.ScrollMode={})).Page="Page",te.Horizontal="Horizontal",te.Vertical="Vertical",te.Wrapped="Wrapped",r.SpecialZoomLevel=void 0,(re=r.SpecialZoomLevel||(r.SpecialZoomLevel={})).ActualSize="ActualSize",re.PageFit="PageFit",re.PageWidth="PageWidth",r.ViewMode=void 0,(ne=r.ViewMode||(r.ViewMode={})).DualPage="DualPage",ne.DualPageWithCover="DualPageWithCover",ne.SinglePage="SinglePage"
var ce,ue=function(e,t){return e.reduce(function(e,r,n){return n%t?e[e.length-1].push(r):e.push([r]),e},[])},de=function(e,t){switch(t[1].name){case"XYZ":return{bottomOffset:function(e,r){return null===t[3]?r:t[3]},leftOffset:function(e,r){return null===t[2]?0:t[2]},pageIndex:e,scaleTo:t[4]}
case"Fit":case"FitB":return{bottomOffset:0,leftOffset:0,pageIndex:e,scaleTo:r.SpecialZoomLevel.PageFit}
case"FitH":case"FitBH":return{bottomOffset:t[2],leftOffset:0,pageIndex:e,scaleTo:r.SpecialZoomLevel.PageWidth}
default:return{bottomOffset:0,leftOffset:0,pageIndex:e,scaleTo:1}}},he=new Map,pe=new Map,fe=function(e,t){return"".concat(e.loadingTask.docId,"___").concat(t.num,"R").concat(0===t.gen?"":t.gen)},ve=function(e,t,r){he.set(fe(e,t),r)},me=function(e,t){if(!e)return Promise.reject("The document is not loaded yet")
var r="".concat(e.loadingTask.docId,"___").concat(t),n=pe.get(r)
return n?Promise.resolve(n):new Promise(function(n,a){e.getPage(t+1).then(function(a){pe.set(r,a),a.ref&&ve(e,a.ref,t),n(a)})})},ge=function(e,t){return new Promise(function(r){new Promise(function(r){"string"==typeof t?e.getDestination(t).then(function(e){r(e)}):r(t)}).then(function(n){if("object"==typeof n[0]&&null!==n[0]){var a=n[0],o=function(e,t){var r=fe(e,a)
return he.has(r)?he.get(r):null}(e)
null===o?e.getPageIndex(a).then(function(n){ve(e,a,n),ge(e,t).then(function(e){return r(e)})}):r(de(o,n))}else{var i=de(n[0],n)
r(i)}})})}
!function(e){e[e.Solid=1]="Solid",e[e.Dashed=2]="Dashed",e[e.Beveled=3]="Beveled",e[e.Inset=4]="Inset",e[e.Underline=5]="Underline"}(ce||(ce={}))
var _e,be=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"),ye=function(e,t,r,n){var a=parseInt(e,10)
return a>=t&&a<=r?a:n},ke=function(e){return e.contentsObj?e.contentsObj.str:e.contents||""},Se=function(e){return e.titleObj?e.titleObj.str:e.title||""},Ce=function(e){var t=e.annotation,n=l.useContext(v).direction,a=Se(t),o=ke(t),i=n===r.TextDirection.RightToLeft,s=l.useRef(),c=""
if(t.modificationDate){var u=function(e){var t=be.exec(e)
if(!t)return null
var r=parseInt(t[1],10),n=ye(t[2],1,12,1)-1,a=ye(t[3],1,31,1),o=ye(t[4],0,23,0),i=ye(t[5],0,59,0),s=ye(t[6],0,59,0),l=t[7]||"Z",c=ye(t[8],0,23,0),u=ye(t[9],0,59,0)
switch(l){case"-":o+=c,i+=u
break
case"+":o-=c,i-=u}return new Date(Date.UTC(r,n,a,o,i,s))}(t.modificationDate)
c=u?"".concat(u.toLocaleDateString(),", ").concat(u.toLocaleTimeString()):""}return l.useLayoutEffect(function(){if(s.current){var e=document.querySelector('[data-annotation-id="'.concat(t.id,'"]'))
if(e){var r=e
return r.style.zIndex+=1,function(){r.style.zIndex="".concat(parseInt(r.style.zIndex,10)-1)}}}},[]),l.createElement("div",{ref:s,className:m({"rpv-core__annotation-popup-wrapper":!0,"rpv-core__annotation-popup-wrapper--rtl":i}),style:{top:t.annotationType===r.AnnotationType.Popup?"":"100%"}},a&&l.createElement(l.Fragment,null,l.createElement("div",{className:m({"rpv-core__annotation-popup-title":!0,"rpv-core__annotation-popup-title--ltr":!i,"rpv-core__annotation-popup-title--rtl":i})},a),l.createElement("div",{className:"rpv-core__annotation-popup-date"},c)),o&&l.createElement("div",{className:"rpv-core__annotation-popup-content"},o.split("\n").map(function(e,t){return l.createElement(l.Fragment,{key:t},e,l.createElement("br",null))})))}
!function(e){e.Click="Click",e.Hover="Hover"}(_e||(_e={}))
var Pe,Ee=function(e){var t,n=e.annotation,a=e.children,o=e.ignoreBorder,i=e.hasPopup,s=e.isRenderable,c=e.page,u=e.viewport,d=n.rect,h=function(){var e=X(!1),t=e.opened,n=e.toggle,a=l.useState(_e.Hover),o=a[0],i=a[1]
return{opened:t,closeOnHover:function(){o===_e.Hover&&n(r.ToggleStatus.Close)},openOnHover:function(){o===_e.Hover&&n(r.ToggleStatus.Open)},toggleOnClick:function(){switch(o){case _e.Click:t&&i(_e.Hover),n(r.ToggleStatus.Toggle)
break
case _e.Hover:i(_e.Click),n(r.ToggleStatus.Open)}}}}(),p=h.closeOnHover,f=h.opened,v=h.openOnHover,m=h.toggleOnClick,g=(t=[d[0],c.view[3]+c.view[1]-d[1],d[2],c.view[3]+c.view[1]-d[3]],[Math.min(t[0],t[2]),Math.min(t[1],t[3]),Math.max(t[0],t[2]),Math.max(t[1],t[3])]),_=d[2]-d[0],b=d[3]-d[1],y={borderColor:"",borderRadius:"",borderStyle:"",borderWidth:""}
if(!o&&n.borderStyle.width>0){switch(n.borderStyle.style){case ce.Dashed:y.borderStyle="dashed"
break
case ce.Solid:y.borderStyle="solid"
break
case ce.Underline:y=Object.assign({borderBottomStyle:"solid"},y)
case ce.Beveled:case ce.Inset:}var k=n.borderStyle.width
y.borderWidth="".concat(k,"px"),n.borderStyle.style!==ce.Underline&&(_-=2*k,b-=2*k)
var S=n.borderStyle,C=S.horizontalCornerRadius,P=S.verticalCornerRadius;(C>0||P>0)&&(y.borderRadius="".concat(C,"px / ").concat(P,"px")),n.color?y.borderColor="rgb(".concat(0|n.color[0],", ").concat(0|n.color[1],", ").concat(0|n.color[2],")"):y.borderWidth="0"}return l.createElement(l.Fragment,null,s&&a({popup:{opened:f,closeOnHover:p,openOnHover:v,toggleOnClick:m},slot:{attrs:{style:Object.assign({height:"".concat(b,"px"),left:"".concat(g[0],"px"),top:"".concat(g[1],"px"),transform:"matrix(".concat(u.transform.join(","),")"),transformOrigin:"-".concat(g[0],"px -").concat(g[1],"px"),width:"".concat(_,"px")},y)},children:l.createElement(l.Fragment,null,i&&f&&l.createElement(Ce,{annotation:n}))}}))},xe=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i)
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--caret","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),e.slot.children)})},we=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i),c=t.rect,u=c[2]-c[0],d=c[3]-c[1],h=t.borderStyle.width
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--circle","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),l.createElement("svg",{height:"".concat(d,"px"),preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 ".concat(u," ").concat(d),width:"".concat(u,"px")},l.createElement("circle",{cy:d/2,fill:"none",rx:u/2-h/2,ry:d/2-h/2,stroke:"transparent",strokeWidth:h||1})),e.slot.children)})},Ae=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=Se(t),o=ke(t),i=!(!1!==t.hasPopup||!a&&!o),s=function(){var e,r,n,a,o=t.file
o&&(e=o.filename,n="string"==typeof(r=o.content)?"":URL.createObjectURL(new Blob([r],{type:""})),(a=document.createElement("a")).style.display="none",a.href=n||e,a.setAttribute("download",function(e){var t=e.split("/").pop()
return t?t.split("#")[0].split("?")[0]:e}(e)),document.body.appendChild(a),a.click(),document.body.removeChild(a),n&&URL.revokeObjectURL(n))}
return l.createElement(Ee,{annotation:t,hasPopup:i,ignoreBorder:!0,isRenderable:!0,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--file-attachment","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onDoubleClick:s,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),e.slot.children)})},Fe=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i)
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--free-text","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),e.slot.children)})},Me=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=Se(t),o=ke(t),i=!(!a&&!o),s=!t.parentType||-1!==["Circle","Ink","Line","Polygon","PolyLine","Square"].indexOf(t.parentType)
return g(function(){if(t.parentId){var e=document.querySelector('[data-annotation-id="'.concat(t.parentId,'"]')),r=document.querySelector('[data-annotation-id="'.concat(t.id,'"]'))
if(e&&r){var n=parseFloat(e.style.left),a=parseFloat(e.style.top)+parseFloat(e.style.height)
r.style.left="".concat(n,"px"),r.style.top="".concat(a,"px"),r.style.transformOrigin="-".concat(n,"px -").concat(a,"px")}}},[]),l.createElement(Ee,{annotation:t,hasPopup:s,ignoreBorder:!1,isRenderable:i,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--popup","data-annotation-id":t.id}),l.createElement(Ce,{annotation:t}))})},Te=function(e){var t=e.annotation,n=e.childAnnotation,a=e.page,o=e.viewport,i=!1===t.hasPopup,s=Se(t),c=ke(t),u=!!(t.hasPopup||s||c)
if(t.quadPoints&&t.quadPoints.length>0){var d=t.quadPoints.map(function(e){return Object.assign({},t,{rect:[e[2].x,e[2].y,e[1].x,e[1].y],quadPoints:[]})})
return l.createElement(l.Fragment,null,d.map(function(e,t){return l.createElement(Te,{key:t,annotation:e,childAnnotation:n,page:a,viewport:o})}))}return l.createElement(Ee,{annotation:t,hasPopup:i,ignoreBorder:!0,isRenderable:u,page:a,viewport:o},function(e){return l.createElement(l.Fragment,null,l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--highlight","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),e.slot.children),n&&n.annotationType===r.AnnotationType.Popup&&e.popup.opened&&l.createElement(Me,{annotation:n,page:a,viewport:o}))})},Re=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i),c=t.rect,u=c[2]-c[0],d=c[3]-c[1],h=t.borderStyle.width
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--ink","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),t.inkLists&&t.inkLists.length&&l.createElement("svg",{height:"".concat(d,"px"),preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 ".concat(u," ").concat(d),width:"".concat(u,"px")},t.inkLists.map(function(e,t){return l.createElement("polyline",{key:t,fill:"none",stroke:"transparent",strokeWidth:h||1,points:e.map(function(e){return"".concat(e.x-c[0],",").concat(c[3]-e.y)}).join(" ")})})),e.slot.children)})},Ie=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i),c=t.rect,u=c[2]-c[0],d=c[3]-c[1],h=t.borderStyle.width
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--line","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),l.createElement("svg",{height:"".concat(d,"px"),preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 ".concat(u," ").concat(d),width:"".concat(u,"px")},l.createElement("line",{stroke:"transparent",strokeWidth:h||1,x1:c[2]-t.lineCoordinates[0],x2:c[2]-t.lineCoordinates[2],y1:c[3]-t.lineCoordinates[1],y2:c[3]-t.lineCoordinates[3]})),e.slot.children)})},Oe=/^([^\w]*)(javascript|data|vbscript)/im,De=/&#(\w+)(^\w|;)?/g,Le=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,Ne=/^([^:]+):/gm,Be=function(e){var t,r=e.annotation,n=e.annotationContainerRef,a=e.doc,o=e.outlines,i=e.page,s=e.pageIndex,c=e.scale,u=e.viewport,d=e.onExecuteNamedAction,h=e.onJumpFromLinkAnnotation,f=e.onJumpToDest,v=l.useRef(),m=o&&o.length&&r.dest&&"string"==typeof r.dest?null===(t=o.find(function(e){return e.dest===r.dest}))||void 0===t?void 0:t.title:"",g=!!(r.url||r.dest||r.action||r.unsafeUrl),_={}
if(r.url||r.unsafeUrl){var b=function(e,t){void 0===t&&(t="about:blank")
var r,n=(r=e||"",r.replace(De,function(e,t){return String.fromCharCode(t)})).replace(Le,"").trim()
if(!n)return t
var a=n[0]
if("."===a||"/"===a)return n
var o=n.match(Ne)
if(!o)return n
var i=o[0]
return Oe.test(i)?t:n}(r.url||r.unsafeUrl,"")
b?_={"data-target":"external",href:b,rel:"noopener noreferrer nofollow",target:r.newWindow?"_blank":"",title:b}:g=!1}else _={href:"","data-annotation-link":r.id,onClick:function(e){e.preventDefault(),r.action?d(r.action):ge(a,r.dest).then(function(e){var t=v.current,r=n.current
if(t&&r){var a=t.getBoundingClientRect()
r.style.setProperty("height","100%"),r.style.setProperty("width","100%")
var o=r.getBoundingClientRect()
r.style.removeProperty("height"),r.style.removeProperty("width")
var i=(a.left-o.left)/c,l=(o.bottom-a.bottom+a.height)/c
h({bottomOffset:l,label:m,leftOffset:i,pageIndex:s})}f(e)})}}
return m&&(_=Object.assign({},_,{title:m,"aria-label":m})),l.createElement(Ee,{annotation:r,hasPopup:!1,ignoreBorder:!1,isRenderable:g,page:i,viewport:u},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--link","data-annotation-id":r.id,"data-testid":"core__annotation--link-".concat(r.id)}),l.createElement("a",p({ref:v},_)))})},je=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i),c=t.rect,u=c[2]-c[0],d=c[3]-c[1],h=t.borderStyle.width
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--polygon","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),t.vertices&&t.vertices.length&&l.createElement("svg",{height:"".concat(d,"px"),preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 ".concat(u," ").concat(d),width:"".concat(u,"px")},l.createElement("polygon",{fill:"none",stroke:"transparent",strokeWidth:h||1,points:t.vertices.map(function(e){return"".concat(e.x-c[0],",").concat(c[3]-e.y)}).join(" ")})),e.slot.children)})},Ge=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i),c=t.rect,u=c[2]-c[0],d=c[3]-c[1],h=t.borderStyle.width
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--polyline","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),t.vertices&&t.vertices.length&&l.createElement("svg",{height:"".concat(d,"px"),preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 ".concat(u," ").concat(d),width:"".concat(u,"px")},l.createElement("polyline",{fill:"none",stroke:"transparent",strokeWidth:h||1,points:t.vertices.map(function(e){return"".concat(e.x-c[0],",").concat(c[3]-e.y)}).join(" ")})),e.slot.children)})},ze=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i),c=t.rect,u=c[2]-c[0],d=c[3]-c[1],h=t.borderStyle.width
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--square","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),l.createElement("svg",{height:"".concat(d,"px"),preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 ".concat(u," ").concat(d),width:"".concat(u,"px")},l.createElement("rect",{height:d-h,fill:"none",stroke:"transparent",strokeWidth:h||1,x:h/2,y:h/2,width:u-h})),e.slot.children)})},He=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i)
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--squiggly","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),e.slot.children)})},We=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i)
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--stamp","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),e.slot.children)})},Ve=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i)
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--strike-out","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),e.slot.children)})},Ue=function(){return l.createElement(b,{size:16},l.createElement("path",{d:"M.5,16.5a1,1,0,0,0,1,1h2v4l4-4h15a1,1,0,0,0,1-1V3.5a1,1,0,0,0-1-1H1.5a1,1,0,0,0-1,1Z"}),l.createElement("path",{d:"M7.25,9.75A.25.25,0,1,1,7,10a.25.25,0,0,1,.25-.25"}),l.createElement("path",{d:"M12,9.75a.25.25,0,1,1-.25.25A.25.25,0,0,1,12,9.75"}),l.createElement("path",{d:"M16.75,9.75a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"}))},qe=function(){return l.createElement(b,{size:16},l.createElement("path",{d:"M0.500 12.001 A11.500 11.500 0 1 0 23.500 12.001 A11.500 11.500 0 1 0 0.500 12.001 Z"}),l.createElement("path",{d:"M6.000 12.001 A6.000 6.000 0 1 0 18.000 12.001 A6.000 6.000 0 1 0 6.000 12.001 Z"}),l.createElement("path",{d:"M21.423 5.406L17.415 9.414"}),l.createElement("path",{d:"M14.587 6.585L18.607 2.565"}),l.createElement("path",{d:"M5.405 21.424L9.413 17.416"}),l.createElement("path",{d:"M6.585 14.588L2.577 18.596"}),l.createElement("path",{d:"M18.602 21.419L14.595 17.412"}),l.createElement("path",{d:"M17.419 14.58L21.428 18.589"}),l.createElement("path",{d:"M2.582 5.399L6.588 9.406"}),l.createElement("path",{d:"M9.421 6.581L5.412 2.572"}))},Ke=function(){return l.createElement(b,{size:16},l.createElement("path",{d:"M4.000 18.500 A1.500 1.500 0 1 0 7.000 18.500 A1.500 1.500 0 1 0 4.000 18.500 Z"}),l.createElement("path",{d:"M20.5.5l-9.782,9.783a7,7,0,1,0,3,3L17,10h1.5V8.5L19,8h1.5V6.5L21,6h1.5V4.5l1-1V.5Z"}))},Xe=function(){return l.createElement(b,{size:16},l.createElement("path",{d:"M2.000 2.500 L22.000 2.500 L22.000 23.500 L2.000 23.500 Z"}),l.createElement("path",{d:"M6 4.5L6 0.5"}),l.createElement("path",{d:"M18 4.5L18 0.5"}),l.createElement("path",{d:"M10 4.5L10 0.5"}),l.createElement("path",{d:"M14 4.5L14 0.5"}))},Ye=function(){return l.createElement(b,{size:16},l.createElement("path",{d:"M17.5 0.498L17.5 23.498"}),l.createElement("path",{d:"M10.5 0.498L10.5 23.498"}),l.createElement("path",{d:"M23.5.5H6.5a6,6,0,0,0,0,12h4"}))},Je=function(){return l.createElement(b,{size:16},l.createElement("path",{d:"M2.5 22.995L12 6.005 21.5 22.995 2.5 22.995z"}))},Ze=function(e){var t=e.annotation,n=e.childAnnotation,a=e.page,o=e.viewport,i=!1===t.hasPopup,s=Se(t),c=ke(t),u=!!(t.hasPopup||s||c),d=t.name?t.name.toLowerCase():""
return l.createElement(Ee,{annotation:t,hasPopup:i,ignoreBorder:!1,isRenderable:u,page:a,viewport:o},function(e){return l.createElement(l.Fragment,null,l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--text","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),d&&l.createElement("div",{className:"rpv-core__annotation-text-icon"},"check"===d&&l.createElement(y,null),"comment"===d&&l.createElement(Ue,null),"help"===d&&l.createElement(qe,null),"insert"===d&&l.createElement(Je,null),"key"===d&&l.createElement(Ke,null),"note"===d&&l.createElement(Xe,null),("newparagraph"===d||"paragraph"===d)&&l.createElement(Ye,null)),e.slot.children),n&&n.annotationType===r.AnnotationType.Popup&&e.popup.opened&&l.createElement(Me,{annotation:n,page:a,viewport:o}))})},Qe=function(e){var t=e.annotation,r=e.page,n=e.viewport,a=!1===t.hasPopup,o=Se(t),i=ke(t),s=!!(t.hasPopup||o||i)
return l.createElement(Ee,{annotation:t,hasPopup:a,ignoreBorder:!0,isRenderable:s,page:r,viewport:n},function(e){return l.createElement("div",p({},e.slot.attrs,{className:"rpv-core__annotation rpv-core__annotation--underline","data-annotation-id":t.id,onClick:e.popup.toggleOnClick,onMouseEnter:e.popup.openOnHover,onMouseLeave:e.popup.closeOnHover}),e.slot.children)})},$e=function(e){var t=e.annotations,n=e.doc,a=e.outlines,o=e.page,i=e.pageIndex,s=e.plugins,c=e.rotation,u=e.scale,d=e.onExecuteNamedAction,h=e.onJumpFromLinkAnnotation,p=e.onJumpToDest,f=l.useRef(),v=o.getViewport({rotation:c,scale:u}).clone({dontFlip:!0}),m=t.filter(function(e){return!e.parentId})
return g(function(){var e=f.current
e&&s.forEach(function(t){t.onAnnotationLayerRender&&t.onAnnotationLayerRender({annotations:m,container:e,pageIndex:i,rotation:c,scale:u})})},[]),l.createElement("div",{ref:f,className:"rpv-core__annotation-layer","data-testid":"core__annotation-layer-".concat(i)},m.map(function(e){var s=t.find(function(t){return t.parentId===e.id})
switch(e.annotationType){case r.AnnotationType.Caret:return l.createElement(xe,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Circle:return l.createElement(we,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.FileAttachment:return l.createElement(Ae,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.FreeText:return l.createElement(Fe,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Highlight:return l.createElement(Te,{key:e.id,annotation:e,childAnnotation:s,page:o,viewport:v})
case r.AnnotationType.Ink:return l.createElement(Re,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Line:return l.createElement(Ie,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Link:return l.createElement(Be,{key:e.id,annotation:e,annotationContainerRef:f,doc:n,outlines:a,page:o,pageIndex:i,scale:u,viewport:v,onExecuteNamedAction:d,onJumpFromLinkAnnotation:h,onJumpToDest:p})
case r.AnnotationType.Polygon:return l.createElement(je,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Polyline:return l.createElement(Ge,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Popup:return l.createElement(Me,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Square:return l.createElement(ze,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Squiggly:return l.createElement(He,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Stamp:return l.createElement(We,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.StrikeOut:return l.createElement(Ve,{key:e.id,annotation:e,page:o,viewport:v})
case r.AnnotationType.Text:return l.createElement(Ze,{key:e.id,annotation:e,childAnnotation:s,page:o,viewport:v})
case r.AnnotationType.Underline:return l.createElement(Qe,{key:e.id,annotation:e,page:o,viewport:v})
default:return l.createElement(l.Fragment,{key:e.id})}}))},et=function(e){var t=e.page,r=e.renderAnnotations,n=O(),a=l.useState({loading:!0,annotations:[]}),o=a[0],i=a[1]
return l.useEffect(function(){t.getAnnotations({intent:"display"}).then(function(e){n.current&&i({loading:!1,annotations:e})})},[]),o.loading?l.createElement(l.Fragment,null):r(o.annotations)},tt=function(e){var t=e.doc,r=e.outlines,n=e.page,a=e.pageIndex,o=e.plugins,i=e.rotation,s=e.scale,c=e.onExecuteNamedAction,u=e.onJumpFromLinkAnnotation,d=e.onJumpToDest
return l.createElement(et,{page:n,renderAnnotations:function(e){return l.createElement($e,{annotations:e,doc:t,outlines:r,page:n,pageIndex:a,plugins:o,rotation:i,scale:s,onExecuteNamedAction:c,onJumpFromLinkAnnotation:u,onJumpToDest:d})}})},rt=function(e,t){var r=e%t
return 0===r?e:Math.floor(e-r)},nt=function(e){var t=e.canvasLayerRef,n=e.height,a=e.page,o=e.pageIndex,i=e.plugins,s=e.rotation,c=e.scale,u=e.width,d=e.onRenderCanvasCompleted,h=l.useRef()
return g(function(){var e=h.current
e&&e.cancel()
var n=t.current
n.removeAttribute("data-testid"),i.forEach(function(e){e.onCanvasLayerRender&&e.onCanvasLayerRender({ele:n,pageIndex:o,rotation:s,scale:c,status:r.LayerRenderStatus.PreRender})})
var l=a.getViewport({rotation:s,scale:c}),u=window.devicePixelRatio||1,p=Math.sqrt(16777216/(l.width*l.height)),f=u>p
f?n.style.transform="scale(1, 1)":n.style.removeProperty("transform")
var v=Math.min(p,u),m=function(e,t){var r,n
if(Math.floor(e)===e)return[e,1]
var a=1/e
if(a>8)return[1,8]
if(Math.floor(a)===a)return[1,a]
for(var o=e>1?a:e,i=0,s=1,l=1,c=1;;){var u=i+l,d=s+c
if(d>8)break
o<=u/d?(l=(r=[u,d])[0],c=r[1]):(i=(n=[u,d])[0],s=n[1])}return o<(i/s+l/c)/2?o===e?[i,s]:[s,i]:o===e?[l,c]:[c,l]}(v),g=m[0],_=m[1]
n.width=rt(l.width*v,g),n.height=rt(l.height*v,g),n.style.width="".concat(rt(l.width,_),"px"),n.style.height="".concat(rt(l.height,_),"px"),n.hidden=!0
var b=n.getContext("2d",{alpha:!1}),y=f||1!==u?[v,0,0,v,0,0]:null
return h.current=a.render({canvasContext:b,transform:y,viewport:l}),h.current.promise.then(function(){n.hidden=!1,n.setAttribute("data-testid","core__canvas-layer-".concat(o)),i.forEach(function(e){e.onCanvasLayerRender&&e.onCanvasLayerRender({ele:n,pageIndex:o,rotation:s,scale:c,status:r.LayerRenderStatus.DidRender})}),d()},function(){d()}),function(){n&&(n.width=0,n.height=0)}},[]),l.createElement("div",{className:"rpv-core__canvas-layer",style:{height:"".concat(n,"px"),width:"".concat(u,"px")}},l.createElement("canvas",{ref:t}))},at=function(e){var t=e.height,r=e.page,n=e.rotation,a=e.scale,o=e.width,i=l.useRef()
return g(function(){var e=i.current,s=r.getViewport({rotation:n,scale:a})
r.getOperatorList().then(function(n){!function(){var e=i.current
e&&(e.innerHTML="")}(),new u.SVGGraphics(r.commonObjs,r.objs).getSVG(n,s).then(function(r){r.style.height="".concat(t,"px"),r.style.width="".concat(o,"px"),e.appendChild(r)})})},[]),l.createElement("div",{className:"rpv-core__svg-layer",ref:i})},ot=function(e){var t=e.containerRef,n=e.page,a=e.pageIndex,o=e.plugins,i=e.rotation,s=e.scale,c=e.onRenderTextCompleted,d=l.useRef(),h=function(){var e=t.current
e&&([].slice.call(e.querySelectorAll(".rpv-core__text-layer-text")).forEach(function(t){return e.removeChild(t)}),[].slice.call(e.querySelectorAll('br[role="presentation"]')).forEach(function(t){return e.removeChild(t)}))}
return g(function(){var e=d.current
e&&e.cancel()
var l=t.current
if(l){l.removeAttribute("data-testid")
var p=n.getViewport({rotation:i,scale:s})
return o.forEach(function(e){e.onTextLayerRender&&e.onTextLayerRender({ele:l,pageIndex:a,scale:s,status:r.LayerRenderStatus.PreRender})}),n.getTextContent().then(function(e){h(),d.current=u.renderTextLayer({container:l,textContent:e,textContentSource:e,viewport:p}),d.current.promise.then(function(){l.setAttribute("data-testid","core__text-layer-".concat(a)),[].slice.call(l.children).forEach(function(e){e.classList.contains("rpv-core__text-layer-text--not")||e.classList.add("rpv-core__text-layer-text")}),o.forEach(function(e){e.onTextLayerRender&&e.onTextLayerRender({ele:l,pageIndex:a,scale:s,status:r.LayerRenderStatus.DidRender})}),c()},function(){l.removeAttribute("data-testid"),c()})}),function(){var e
h(),null===(e=d.current)||void 0===e||e.cancel()}}},[]),l.createElement("div",{className:"rpv-core__text-layer",ref:t})},it=function(e){var t=e.doc,n=e.measureRef,a=e.outlines,o=e.pageIndex,i=e.pageRotation,s=e.pageSize,c=e.plugins,u=e.renderPage,d=e.renderQueueKey,h=e.rotation,p=e.scale,f=e.shouldRender,v=e.viewMode,g=e.onExecuteNamedAction,_=e.onJumpFromLinkAnnotation,b=e.onJumpToDest,y=e.onRenderCompleted,k=e.onRotatePage,C=O(),P=l.useState(null),E=P[0],x=P[1],w=l.useState(!1),A=w[0],F=w[1],M=l.useState(!1),T=M[0],R=M[1],I=l.useRef(),D=l.useRef(),L=Math.abs(h+i)%180==0,N=s.pageWidth*p,B=s.pageHeight*p,j=L?N:B,G=L?B:N,z=(s.rotation+h+i)%360,H=l.useRef(0),W=u||function(e){return l.createElement(l.Fragment,null,e.canvasLayer.children,e.textLayer.children,e.annotationLayer.children)}
return l.useEffect(function(){x(null),F(!1),R(!1)},[i,h,p]),l.useEffect(function(){f&&C.current&&!E&&me(t,o).then(function(e){C.current&&(H.current=d,x(e))})},[f,E]),l.useEffect(function(){A&&T&&(d!==H.current?(x(null),F(!1),R(!1)):y(o))},[A,T]),l.createElement("div",{className:m({"rpv-core__page-layer":!0,"rpv-core__page-layer--dual":v===r.ViewMode.DualPage,"rpv-core__page-layer--dual-cover":v===r.ViewMode.DualPageWithCover,"rpv-core__page-layer--single":v===r.ViewMode.SinglePage}),"data-testid":"core__page-layer-".concat(o),ref:n,style:{height:"".concat(G,"px"),width:"".concat(j,"px")}},E?l.createElement(l.Fragment,null,W({annotationLayer:{attrs:{},children:l.createElement(tt,{doc:t,outlines:a,page:E,pageIndex:o,plugins:c,rotation:z,scale:p,onExecuteNamedAction:g,onJumpFromLinkAnnotation:_,onJumpToDest:b})},canvasLayer:{attrs:{},children:l.createElement(nt,{canvasLayerRef:I,height:G,page:E,pageIndex:o,plugins:c,rotation:z,scale:p,width:j,onRenderCanvasCompleted:function(){C.current&&F(!0)}})},canvasLayerRendered:A,doc:t,height:G,pageIndex:o,rotation:z,scale:p,svgLayer:{attrs:{},children:l.createElement(at,{height:G,page:E,rotation:z,scale:p,width:j})},textLayer:{attrs:{},children:l.createElement(ot,{containerRef:D,page:E,pageIndex:o,plugins:c,rotation:z,scale:p,onRenderTextCompleted:function(){C.current&&R(!0)}})},textLayerRendered:T,width:j,markRendered:y,onRotatePage:function(e){return k(o,e)}}),c.map(function(e,r){return e.renderPageLayer?l.createElement(l.Fragment,{key:r},e.renderPageLayer({canvasLayerRef:I,canvasLayerRendered:A,doc:t,height:G,pageIndex:o,rotation:z,scale:p,textLayerRef:D,textLayerRendered:T,width:j})):l.createElement(l.Fragment,{key:r})})):l.createElement(S,{testId:"core__page-layer-loading-".concat(o)}))},st=function(e,t){var r=t.rect
return e.height!==r.height||e.width!==r.width?r:e}
!function(e){e.Horizontal="Horizontal",e.Vertical="Vertical",e.Both="Both"}(Pe||(Pe={}))
var lt=function(e){return 1-Math.pow(1-e,4)},ct={left:0,top:0},ut={capture:!1,passive:!0},dt=function(e,t,r){return Math.max(e,Math.min(r,t))},ht=function(e,t){if(t!==r.ViewMode.DualPageWithCover)return 0
if(!function(e){var t=e.length
if(1===t)return!1
for(var r=1;r<t;r++)if(e[r].height!==e[0].height||e[r].width!==e[0].width)return!0
return!1}(e))return 2*e[0].width
var n=ue(e.slice(1),2).map(function(e){return 2===e.length?e[0].width+e[1].width:e[0].width}),a=[e[0].width].concat(n)
return Math.max.apply(Math,a)},pt={left:0,top:0},ft={left:0,top:0},vt={left:0,top:0},mt={left:0,top:0},gt={height:0,width:0},_t={left:0,top:0},bt="data-virtual-index",yt=[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],kt=function(e){var t=e.enableSmoothScroll,n=e.isRtl,a=e.numberOfItems,o=e.parentRef,i=e.setRenderRange,s=e.sizes,c=e.scrollMode,u=e.viewMode,d=l.useState(!1),h=d[0],f=d[1],v=l.useCallback(function(e){return f(e)},[]),m=l.useRef(c)
m.current=c
var _=l.useRef(u)
_.current=u
var b=c===r.ScrollMode.Wrapped||u===r.ViewMode.DualPageWithCover||u===r.ViewMode.DualPage?Pe.Both:c===r.ScrollMode.Horizontal?Pe.Horizontal:Pe.Vertical,y=function(e){var t=e.elementRef,r=e.enableSmoothScroll,n=e.isRtl,a=e.scrollDirection,o=e.onSmoothScroll,i=l.useState(ct),s=i[0],c=i[1],u=l.useState(t.current),d=u[0],h=u[1],p=n?-1:1,f=l.useRef(a)
f.current=a
var v=l.useRef(ct),m=l.useRef(!0),_=l.useCallback(function(){m.current=!0,r&&c(v.current),o(!1)},[]),b=l.useCallback(function(){if(d){switch(f.current){case Pe.Horizontal:v.current={left:p*d.scrollLeft,top:0}
break
case Pe.Both:v.current={left:p*d.scrollLeft,top:d.scrollTop}
break
case Pe.Vertical:default:v.current={left:0,top:d.scrollTop}}r&&!m.current||c(v.current)}},[d])
g(function(){h(t.current)}),g(function(){if(d)return d.addEventListener("scroll",b,ut),function(){d.removeEventListener("scroll",b,ut)}},[d])
var y=l.useCallback(function(e,r){var n=t.current
if(!n)return Promise.resolve()
var a={left:0,top:0}
switch(f.current){case Pe.Horizontal:a.left=p*e.left
break
case Pe.Both:a.left=p*e.left,a.top=e.top
break
case Pe.Vertical:default:a.top=e.top}return r?(m.current=!1,o(!0),new Promise(function(e,t){!function(e,t,r,n,a,o){void 0===a&&(a=function(e){return e}),void 0===o&&(o=function(){})
var i=0,s=0,l=!1
switch(t){case Pe.Horizontal:s=e.scrollLeft,i=0
case Pe.Both:s=e.scrollLeft,i=e.scrollTop
break
case Pe.Vertical:default:s=0,i=e.scrollTop}var c=function(){l||(l=!0,e.scrollLeft=r.left,e.scrollTop=r.top,o())}
if(Math.abs(i-r.top)<=1e-4&&t===Pe.Vertical)c()
else if(Math.abs(s-r.left)<=1e-4&&t===Pe.Horizontal)c()
else{var u,d=-1,h=s-r.left,p=i-r.top,f=function(n){-1===d&&(d=n)
var o=n-d,v=Math.min(o/400,1),m=a(v),g={left:s-h*m,top:i-p*m}
switch(t){case Pe.Horizontal:e.scrollLeft=g.left
break
case Pe.Both:e.scrollLeft=g.left,e.scrollTop=g.top
break
case Pe.Vertical:default:e.scrollTop=g.top}Math.abs(g.top-r.top)<=1e-4&&Math.abs(g.left-r.left)<=1e-4&&!l&&(window.cancelAnimationFrame(u),c()),o<400?u=window.requestAnimationFrame(f):window.cancelAnimationFrame(u)}
u=window.requestAnimationFrame(f)}}(n,f.current,a,0,lt,function(){_(),e()})})):new Promise(function(e,t){switch(f.current){case Pe.Horizontal:n.scrollLeft=a.left
break
case Pe.Both:n.scrollLeft=a.left,n.scrollTop=a.top
break
case Pe.Vertical:default:n.scrollTop=a.top}e()})},[t])
return{scrollOffset:s,scrollTo:y}}({elementRef:o,enableSmoothScroll:t,isRtl:n,scrollDirection:b,onSmoothScroll:v}),k=y.scrollOffset,S=y.scrollTo,C=function(e){var t=e.elementRef,r=l.useState(t.current),n=r[0],a=r[1],o=l.useRef(!1),i=l.useReducer(st,{height:0,width:0}),s=i[0],c=i[1]
return g(function(){t.current!==n&&a(t.current)}),g(function(){if(n&&!o.current){o.current=!0
var e=n.getBoundingClientRect(),t=e.height,r=e.width
c({rect:{height:t,width:r}})}},[n]),l.useEffect(function(){if(n){var e=new ResizeObserver(function(e,t){e.forEach(function(e){if(e.target===n){var t=e.contentRect,r=t.height,a=t.width
c({rect:{height:r,width:a}})}})})
return e.observe(n),function(){e.unobserve(n)}}},[n]),s}({elementRef:o}),P=l.useRef({scrollOffset:_t,measurements:[]})
P.current.scrollOffset=k
var E=l.useMemo(function(){return Array(a).fill(-1)},[]),x=l.useState(E),w=x[0],A=x[1],F=l.useMemo(function(){return new IntersectionObserver(function(e){e.forEach(function(e){var t=e.isIntersecting?e.intersectionRatio:-1,r=e.target.getAttribute(bt)
if(r){var n=parseInt(r,10)
0<=n&&n<a&&A(function(e){return e[n]=t,function(e,t,r){for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a])
return[].concat(n||Array.prototype.slice.call(t))}([],e,!0)})}})},{threshold:yt})},[]),M=l.useMemo(function(){return c===r.ScrollMode.Page&&u===r.ViewMode.SinglePage?function(e,t,r){for(var n=[],a=0;a<e;a++){var o={height:Math.max(t.height,r[a].height),width:Math.max(t.width,r[a].width)},i=0===a?mt:n[a-1].end,s={left:i.left+o.width,top:i.top+o.height}
n[a]={index:a,start:i,size:o,end:s,visibility:-1}}return n}(a,C,s):u===r.ViewMode.DualPageWithCover?function(e,t,n,a){for(var o=[],i=0,s=0,l=vt,c=0;c<e;c++){var u=0===c?{height:a===r.ScrollMode.Page?Math.max(t.height,n[c].height):n[c].height,width:a===r.ScrollMode.Page?Math.max(t.width,n[c].width):n[c].width}:{height:a===r.ScrollMode.Page?Math.max(t.height,n[c].height):n[c].height,width:Math.max(t.width/2,n[c].width)}
a===r.ScrollMode.Page?l=0===c?vt:{left:c%2==0?u.width:0,top:Math.floor((c-1)/2)*u.height+o[0].end.top}:0===c?(l=vt,i=n[0].height,s=0):c%2==1?(l={left:0,top:i+=s},s=c===e-1?n[c].height:Math.max(n[c].height,n[c+1].height)):l={left:o[c-1].end.left,top:i}
var d={left:l.left+u.width,top:l.top+u.height}
o[c]={index:c,start:l,size:u,end:d,visibility:-1}}return o}(a,C,s,c):u===r.ViewMode.DualPage?function(e,t,n,a){for(var o=[],i=0,s=0,l=ft,c=0;c<e;c++){var u={height:a===r.ScrollMode.Page?Math.max(t.height,n[c].height):n[c].height,width:Math.max(t.width/2,n[c].width)}
a===r.ScrollMode.Page?l={left:c%2==0?0:u.width,top:Math.floor(c/2)*u.height}:c%2==0?(l={left:0,top:i+=s},s=c===e-1?n[c].height:Math.max(n[c].height,n[c+1].height)):l={left:o[c-1].end.left,top:i}
var d={left:l.left+u.width,top:l.top+u.height}
o[c]={index:c,start:l,size:u,end:d,visibility:-1}}return o}(a,C,s,c):function(e,t,n,a){for(var o=[],i=0,s={left:0,top:0},l=0,c=pt,u=0;u<e;u++){var d=n[u]
if(0===u)i=d.width,s={left:0,top:0},l=d.height
else switch(a){case r.ScrollMode.Wrapped:(i+=d.width)<t.width?(c={left:o[u-1].end.left,top:s.top},l=Math.max(l,d.height)):(i=d.width,s={left:(c={left:s.left,top:s.top+l}).left,top:c.top},l=d.height)
break
case r.ScrollMode.Horizontal:case r.ScrollMode.Vertical:default:c=o[u-1].end}var h={left:c.left+d.width,top:c.top+d.height}
o[u]={index:u,start:c,size:d,end:h,visibility:-1}}return o}(a,C,s,c)},[c,s,u,C]),T=M[a-1]?{height:M[a-1].end.top,width:M[a-1].end.left}:gt
P.current.measurements=M
var R=l.useMemo(function(){var e=function(e,t,r,n){var a=0
switch(e){case Pe.Horizontal:a=n.left
break
case Pe.Vertical:default:a=n.top}var o=t.length-1,i=function(e,t,r,n){for(;e<=t;){var a=(e+t)/2|0,o=n(a)
if(o<r)e=a+1
else{if(!(o>r))return a
t=a-1}}return e>0?e-1:0}(0,o,a,function(r){switch(e){case Pe.Horizontal:return t[r].start.left
case Pe.Both:case Pe.Vertical:default:return t[r].start.top}})
if(e===Pe.Both)for(var s=t[i].start.top;i-1>=0&&t[i-1].start.top===s&&t[i-1].start.left>=n.left;)i--
for(var l=i;l<=o;){var c={top:t[l].start.top-n.top,left:t[l].start.left-n.left},u={height:r.height-c.top,width:r.width-c.left}
if(e===Pe.Horizontal&&u.width<0)break
if(e===Pe.Vertical&&u.height<0)break
if(e===Pe.Both&&(u.width<0||u.height<0))break
l++}return{start:i,end:l}}(b,M,C,k),t=e.start,n=e.end,o=t+w.slice(dt(0,a,t),dt(0,a,n)).reduce(function(e,t,r,n){return t>n[e]?r:e},0),s=o=dt(0,a-1,o),l=i({endPage:n,numPages:a,startPage:t}),c=l.startPage,d=l.endPage
switch(c=Math.max(c,0),d=Math.min(d,a-1),u){case r.ViewMode.DualPageWithCover:o>0&&(s=o%2==1?o:o-1),c=0===c?0:c%2==1?c:c-1,a-(d=d%2==1?d-1:d)<=2&&(d=a-1)
break
case r.ViewMode.DualPage:s=o%2==0?o:o-1,c=c%2==0?c:c-1,d=d%2==1?d:d-1
break
case r.ViewMode.SinglePage:default:s=o}return{startPage:c,endPage:d,maxVisbilityIndex:s}},[M,C,k,u,w]),I=R.startPage,O=R.endPage,D=R.maxVisbilityIndex,L=l.useMemo(function(){for(var e=[],t=function(t){var r=M[t],n=p(p({},r),{visibility:void 0!==w[t]?w[t]:-1,measureRef:function(e){e&&(e.setAttribute(bt,"".concat(t)),F.observe(e))}})
e.push(n)},r=I;r<=O;r++)t(r)
return e},[I,O,w,M]),N=l.useCallback(function(e,n){var o=P.current.measurements[dt(0,a-1,e)],i=m.current===r.ScrollMode.Page?_t:n
return o?S({left:i.left+o.start.left,top:i.top+o.start.top},t):Promise.resolve()},[S,t]),B=l.useCallback(function(e,t){var n=P.current.measurements,a=n[e].start,o=n.find(function(e){return e.start.top-a.top>1e-12})
if(!o)return Promise.resolve()
var i=o.index
switch(_.current){case r.ViewMode.DualPage:i=i%2==0?i:i+1
break
case r.ViewMode.DualPageWithCover:i=i%2==1?i:i+1}return N(i,t)},[]),j=l.useCallback(function(e,t){for(var n=P.current.measurements,o=n[e].start,i=e,s=!1,l=a-1;l>=0;l--)if(o.top-n[l].start.top>1e-12){s=!0,i=n[l].index
break}if(!s)return Promise.resolve()
switch(_.current){case r.ViewMode.DualPage:i=i%2==0?i:i-1
break
case r.ViewMode.DualPageWithCover:i=i%2==0?i-1:i}return i===e&&(i=e-1),N(i,t)},[]),G=l.useCallback(function(e,t){if(_.current===r.ViewMode.DualPageWithCover||_.current===r.ViewMode.DualPage)return B(e,t)
switch(m.current){case r.ScrollMode.Wrapped:return B(e,t)
case r.ScrollMode.Horizontal:case r.ScrollMode.Vertical:default:return N(e+1,t)}},[]),z=l.useCallback(function(e,t){if(_.current===r.ViewMode.DualPageWithCover||_.current===r.ViewMode.DualPage)return j(e,t)
switch(m.current){case r.ScrollMode.Wrapped:return j(e,t)
case r.ScrollMode.Horizontal:case r.ScrollMode.Vertical:default:return N(e-1,t)}},[]),H=l.useCallback(function(){return function(e,t){switch(m.current){case r.ScrollMode.Horizontal:return{position:"relative",height:"100%",width:"".concat(e.width,"px")}
case r.ScrollMode.Vertical:default:return{position:"relative",height:"".concat(e.height,"px"),width:"100%"}}}(T)},[T]),W=l.useCallback(function(e){return function(e,t,n){return m.current!==r.ScrollMode.Page?{}:{height:"".concat(t.height,"px"),width:"100%",position:"absolute",top:0,transform:"translateY(".concat(e.start.top,"px)")}}(e,C)},[C]),V=l.useCallback(function(e){return function(e,t,n,a,o){var i,s,l,c,u,d,h,p=t?"right":"left",f=t?-1:1,v=n.length,m=e.start.left*f,g=e.size,_=g.height,b=g.width
if(a===r.ViewMode.DualPageWithCover){var y=o===r.ScrollMode.Page?0:e.start.top
return 0===e.index||v%2==0&&e.index===v-1?((i={height:"".concat(_,"px"),minWidth:"".concat(ht(n,a),"px"),width:"100%"})[p]=0,i.position="absolute",i.top=0,i.transform="translate(".concat(m,"px, ").concat(y,"px)"),i):((s={height:"".concat(_,"px"),width:"".concat(b,"px")})[p]=0,s.position="absolute",s.top=0,s.transform="translate(".concat(m,"px, ").concat(y,"px)"),s)}if(a===r.ViewMode.DualPage)return(l={height:"".concat(_,"px"),width:"".concat(b,"px")})[p]=0,l.position="absolute",l.top=0,l.transform="translate(".concat(m,"px, ").concat(o===r.ScrollMode.Page?0:e.start.top,"px)"),l
switch(o){case r.ScrollMode.Horizontal:return(c={height:"100%",width:"".concat(b,"px")})[p]=0,c.position="absolute",c.top=0,c.transform="translateX(".concat(m,"px)"),c
case r.ScrollMode.Page:return(u={height:"".concat(_,"px"),width:"".concat(b,"px")})[p]=0,u.position="absolute",u.top=0,u
case r.ScrollMode.Wrapped:return(d={height:"".concat(_,"px"),width:"".concat(b,"px")})[p]=0,d.position="absolute",d.top=0,d.transform="translate(".concat(m,"px, ").concat(e.start.top,"px)"),d
case r.ScrollMode.Vertical:default:return(h={height:"".concat(_,"px"),width:"100%"})[p]=0,h.position="absolute",h.top=0,h.transform="translateY(".concat(e.start.top,"px)"),h}}(e,n,s,_.current,m.current)},[n,s]),U=l.useCallback(function(e,t){var n=P.current,o=n.measurements,i=n.scrollOffset,s=o[dt(0,a-1,t)]
if(s){var l=m.current===r.ScrollMode.Page?{left:s.start.left,top:s.start.top}:{left:i.left*e,top:i.top*e}
return S(l,!1)}return Promise.resolve()},[])
return l.useEffect(function(){return function(){F.disconnect()}},[]),{boundingClientRect:C,isSmoothScrolling:h,startPage:I,endPage:O,maxVisbilityIndex:D,virtualItems:L,getContainerStyles:H,getItemContainerStyles:W,getItemStyles:V,scrollToItem:N,scrollToNextItem:G,scrollToPreviousItem:z,zoom:U}},St=function(e,t,n,a,o,i){var s=n
switch(!0){case o===r.ViewMode.DualPageWithCover&&i>=3:case o===r.ViewMode.DualPage&&i>=3:s=2*n
break
default:s=n}switch(a){case r.SpecialZoomLevel.ActualSize:return 1
case r.SpecialZoomLevel.PageFit:return Math.min((e.clientWidth-17)/s,(e.clientHeight-16)/t)
case r.SpecialZoomLevel.PageWidth:return(e.clientWidth-17)/s}},Ct=function(e){var t=[]
return e.map(function(e){t=t.concat(e).concat(function(e){var t=[]
return e.items&&e.items.length>0&&(t=t.concat(Ct(e.items))),t}(e))}),t},Pt={capture:!1,passive:!0},Et={height:0,width:0},xt={height:0,width:0},wt=function(e){var t=e.getCurrentPage,n=e.getCurrentScrollMode,a=e.jumpToPage,o=e.targetRef,i=l.useState(r.FullScreenMode.Normal),s=i[0],c=i[1],u=function(){var e=l.useState(Et),t=e[0],r=e[1],n=I(function(){r({height:window.innerHeight,width:window.innerWidth})},100)
return g(function(){return window.addEventListener("resize",n,Pt),function(){window.removeEventListener("resize",n,Pt)}},[]),t}(),d=l.useState(xt),h=d[0],p=d[1],f=l.useRef(xt),v=l.useRef(t()),m=l.useRef(xt),_=l.useState(o.current),b=_[0],y=_[1],k=l.useRef()
g(function(){o.current!==b&&y(o.current)},[]),g(function(){if(b){var e=new ResizeObserver(function(e){e.forEach(function(e){var t=e.target.getBoundingClientRect(),r=t.height,n=t.width
p({height:r,width:n})})})
return e.observe(b),function(){e.unobserve(b),e.disconnect()}}},[b])
var S=l.useCallback(function(e){var t=R()
return t&&t!==e?(c(r.FullScreenMode.Normal),T(t)):Promise.resolve()},[]),C=l.useCallback(function(e){e&&M()&&(y(e),S(e).then(function(){k.current=e,c(r.FullScreenMode.Entering),function(e){A&&e[F.RequestFullScreen]()}(e)}))},[]),P=l.useCallback(function(){R()&&(c(r.FullScreenMode.Exitting),T(document))},[]),E=l.useCallback(function(){b&&R()!==b&&c(r.FullScreenMode.Exitting)},[b])
return l.useEffect(function(){switch(s){case r.FullScreenMode.Entering:k.current&&(k.current.style.backgroundColor="var(--rpv-core__full-screen-target-background-color)"),v.current=t(),f.current={height:window.innerHeight,width:window.innerWidth}
break
case r.FullScreenMode.Entered:n()===r.ScrollMode.Page?a(v.current).then(function(){c(r.FullScreenMode.EnteredCompletely)}):c(r.FullScreenMode.EnteredCompletely)
break
case r.FullScreenMode.Exitting:k.current&&(k.current.style.backgroundColor="",k.current=null),v.current=t()
break
case r.FullScreenMode.Exited:c(r.FullScreenMode.Normal),n()===r.ScrollMode.Page&&a(v.current)}},[s]),l.useEffect(function(){if(s!==r.FullScreenMode.Normal)return s===r.FullScreenMode.Entering&&u.height===h.height&&u.width===h.width&&u.height>0&&u.width>0&&(0===m.current.height||u.height==m.current.height)?(m.current={height:window.innerHeight,width:window.innerWidth},void c(r.FullScreenMode.Entered)):void(s===r.FullScreenMode.Exitting&&f.current.height===u.height&&f.current.width===u.width&&u.height>0&&u.width>0&&c(r.FullScreenMode.Exited))},[s,u,h]),l.useEffect(function(){var e
return e=E,A&&document.addEventListener(F.FullScreenChange,e),function(){var e
e=E,A&&document.removeEventListener(F.FullScreenChange,e)}},[b]),{enterFullScreenMode:C,exitFullScreenMode:P,fullScreenMode:s}},At={buildPageStyles:function(){return{}},transformSize:function(e){return e.size}},Ft={left:0,top:0},Mt=function(e){var t=e.currentFile,n=e.defaultScale,a=e.doc,o=e.enableSmoothScroll,i=e.initialPage,s=e.initialRotation,c=e.initialScale,u=e.pageLayout,d=e.pageSizes,h=e.plugins,f=e.renderPage,_=e.scrollMode,b=e.setRenderRange,y=e.viewMode,k=e.viewerState,S=e.onDocumentLoad,C=e.onOpenFile,P=e.onPageChange,E=e.onRotate,x=e.onRotatePage,w=e.onZoom,A=a.numPages,F=a.loadingTask.docId,M=l.useContext(G).l10n,T=l.useContext(v),R=T.direction===r.TextDirection.RightToLeft,L=l.useRef(),N=l.useRef(),j=l.useState(i),z=j[0],H=j[1],W=l.useRef(null),V=function(e){var t,r=e.getCurrentPage,n=(t=l.useRef([]),l.useEffect(function(){return function(){t.current=[]}},[]),{push:function(e){var r=t.current
r.length+1>50&&r.shift(),r.push(e),t.current=r},map:function(e){return t.current.map(function(t){return e(t)})},pop:function(){var e=t.current
if(0===e.length)return null
var r=e.pop()
return t.current=e,r}}),a=function(e){var t=l.useRef([])
return l.useEffect(function(){return function(){t.current=[]}},[]),{dequeue:function(){var e=t.current
if(0===e.length)return null
var r=e.shift()
return t.current=e,r||null},enqueue:function(e){var r=t.current
r.length+1>50&&r.pop(),t.current=[e].concat(r)},map:function(e){return t.current.map(function(t){return e(t)})}}}(),o=function(){var e=a.dequeue()
return e&&n.push(e),e&&e.pageIndex===r()?o():e},i=function(){var e=n.pop()
return e&&a.enqueue(e),e&&e.pageIndex===r()?i():e},s=l.useCallback(function(e){n.push(e)},[])
return{getNextDestination:o,getPreviousDestination:i,markVisitedDestination:s}}({getCurrentPage:function(){return _e.current.pageIndex}}),U=l.useState(s),q=U[0],K=U[1],X=D(q),Y=l.useState(!1),J=Y[0],Z=Y[1],Q=l.useState(new Map),$=Q[0],ee=Q[1],te=l.useState(_),re=te[0],ne=te[1],ae=D(re),oe=l.useState(y),ie=oe[0],se=oe[1],le=D(ie),ce=function(e){var t=O(),r=l.useState([]),n=r[0],a=r[1]
return l.useEffect(function(){e.getOutline().then(function(e){if(t.current&&null!==e){var r=Ct(e)
a(r)}})},[]),n}(a),de=l.useState(c),fe=de[0],ve=de[1],ge=D(fe),_e=l.useRef(k),be=l.useRef("string"==typeof n?n:null),ye=l.useRef(-1),ke=l.useRef(-1),Se=l.useRef(i),Ce=wt({getCurrentPage:function(){return _e.current.pageIndex},getCurrentScrollMode:function(){return _e.current.scrollMode},jumpToPage:function(e){return Ve(e)},targetRef:N}),Pe=l.useState(-1),Ee=Pe[0],xe=Pe[1],we=l.useState(0),Ae=we[0],Fe=we[1],Me=B({doc:a})
l.useEffect(function(){return function(){he.clear(),pe.clear()}},[F])
var Te=l.useMemo(function(){return Object.assign({},At,u)},[]),Re=l.useMemo(function(){return Array(A).fill(0).map(function(e,t){var r=[d[t].pageHeight,d[t].pageWidth],n=Math.abs(q)%180==0?{height:r[0],width:r[1]}:{height:r[1],width:r[0]},a={height:n.height*fe,width:n.width*fe}
return Te.transformSize({numPages:A,pageIndex:t,size:a})})},[q,fe]),Ie=kt({enableSmoothScroll:o,isRtl:R,numberOfItems:A,parentRef:N,scrollMode:re,setRenderRange:b,sizes:Re,viewMode:ie}),Oe=I(function(){!be.current||_e.current.fullScreenMode!==r.FullScreenMode.Normal||i>0&&Se.current===i||Ze(be.current)},200)
!function(e){var t=e.targetRef,r=e.onResize
g(function(){var e=new ResizeObserver(function(e){e.forEach(function(e){r(e.target)})}),n=t.current
if(n)return e.observe(n),function(){e.unobserve(n)}},[])}({targetRef:N,onResize:Oe})
var De=function(e){var t=e
h.forEach(function(e){e.onViewerStateChange&&(t=e.onViewerStateChange(t))}),_e.current=t},Le=function(){return N.current},Ne=function(){return _e.current},Be=l.useCallback(function(e){V.markVisitedDestination(e)},[]),je=l.useCallback(function(e){var t=e.pageIndex,n=e.bottomOffset,o=e.leftOffset,i=e.scaleTo,s=N.current,l=_e.current
return s&&l?new Promise(function(e,c){me(a,t).then(function(a){var c=a.getViewport({scale:1}),u=0,h=("function"==typeof n?n(c.width,c.height):n)||0,p=("function"==typeof o?o(c.width,c.height):o)||0,f=l.scale
switch(i){case r.SpecialZoomLevel.PageFit:u=0,p=0,Ze(r.SpecialZoomLevel.PageFit)
break
case r.SpecialZoomLevel.PageWidth:f=St(s,d[t].pageHeight,d[t].pageWidth,r.SpecialZoomLevel.PageWidth,y,A),u=(c.height-h)*f,p*=f,Ze(f)
break
default:u=(c.height-h)*f,p*=f}switch(l.scrollMode){case r.ScrollMode.Horizontal:Ie.scrollToItem(t,{left:p,top:0}).then(function(){e()})
break
case r.ScrollMode.Vertical:default:Ie.scrollToItem(t,{left:0,top:u}).then(function(){e()})}})}):Promise.resolve()},[]),Ge=l.useCallback(function(e){return V.markVisitedDestination(e),je(e)},[]),ze=l.useCallback(function(){var e=V.getNextDestination()
return e?je(e):Promise.resolve()},[]),He=l.useCallback(function(){var e=V.getPreviousDestination()
return e?je(e):Promise.resolve()},[]),We=l.useCallback(function(){return Ie.scrollToNextItem(_e.current.pageIndex,Ft)},[]),Ve=l.useCallback(function(e){return 0<=e&&e<A?Ie.scrollToItem(e,Ft):Promise.resolve()},[]),Ue=l.useCallback(function(){return Ie.scrollToPreviousItem(_e.current.pageIndex,Ft)},[]),qe=l.useCallback(function(e){var t,r
"pdf"===(t=e.name,r=t.split(/\./).pop(),r?r.toLowerCase():"").toLowerCase()&&new Promise(function(t){var r=new FileReader
r.readAsArrayBuffer(e),r.onload=function(){var e=new Uint8Array(r.result)
t(e)}}).then(function(t){C(e.name,t)})},[C]),Ke=l.useCallback(function(e){var t=e===r.RotateDirection.Backward?-90:90,n=_e.current.rotation,o=360===n||-360===n?t:n+t
Me.markNotRendered(),K(o),De(p(p({},_e.current),{rotation:o})),E({direction:e,doc:a,rotation:o})},[]),Xe=l.useCallback(function(e,t){var n=t===r.RotateDirection.Backward?-90:90,o=_e.current.pagesRotation,i=(o.has(e)?o.get(e):s)+n,l=o.set(e,i)
ee(l),Z(function(e){return!e}),De(p(p({},_e.current),{pagesRotation:l,rotatedPage:e})),x({direction:t,doc:a,pageIndex:e,rotation:i}),Me.markRendering(e),xe(e)},[]),Ye=l.useCallback(function(e){De(p(p({},_e.current),{scrollMode:e})),ne(e)},[]),Je=l.useCallback(function(e){De(p(p({},_e.current),{viewMode:e})),se(e)},[]),Ze=l.useCallback(function(e){var t=N.current,r=_e.current.pageIndex
if(!(r<0||r>=A)){var n=d[r].pageHeight,o=d[r].pageWidth,i=t?"string"==typeof e?St(t,n,o,e,_e.current.viewMode,A):e:1
be.current="string"==typeof e?e:null,i!==_e.current.scale&&(Fe(function(e){return e+1}),Me.markNotRendered(),ve(i),w({doc:a,scale:i}),De(p(p({},_e.current),{scale:i})))}},[]),Qe=l.useCallback(function(e){Ce.enterFullScreenMode(e)},[]),$e=l.useCallback(function(){Ce.exitFullScreenMode()},[])
l.useEffect(function(){De(p(p({},_e.current),{fullScreenMode:Ce.fullScreenMode}))},[Ce.fullScreenMode]),l.useEffect(function(){var e={enterFullScreenMode:Qe,exitFullScreenMode:$e,getPagesContainer:Le,getViewerState:Ne,jumpToDestination:Ge,jumpToNextDestination:ze,jumpToPreviousDestination:He,jumpToNextPage:We,jumpToPreviousPage:Ue,jumpToPage:Ve,openFile:qe,rotate:Ke,rotatePage:Xe,setViewerState:De,switchScrollMode:Ye,switchViewMode:Je,zoom:Ze}
return h.forEach(function(t){t.install&&t.install(e)}),function(){h.forEach(function(t){t.uninstall&&t.uninstall(e)})}},[F]),l.useEffect(function(){S({doc:a,file:t}),h.forEach(function(e){e.onDocumentLoad&&e.onDocumentLoad({doc:a,file:t})})},[F])
var et,tt,rt,nt=Ie.boundingClientRect
et=function(){i&&Ve(i)},tt=nt.height>0&&nt.width>0,rt=l.useRef(!1),g(function(){tt&&!rt.current&&(rt.current=!0,et())},[et,tt]),g(function(){var e=_e.current.pageIndex
e>-1&&ae!==re&&Ie.scrollToItem(e,Ft).then(function(){Ce.fullScreenMode===r.FullScreenMode.EnteredCompletely&&(o||Me.markNotRendered(),ye.current=-1)})},[re]),g(function(){var e=_e.current.pageIndex
e>-1&&X!==q&&Ie.scrollToItem(e,Ft)},[q]),g(function(){0!=ge&&ge!=_e.current.scale&&Ie.zoom(_e.current.scale/ge,_e.current.pageIndex).then(function(){Ce.fullScreenMode===r.FullScreenMode.EnteredCompletely&&(ke.current=-1)})},[fe]),g(function(){if(le!==_e.current.viewMode){var e=Ie.startPage,t=Ie.endPage,r=Ie.virtualItems
Me.markNotRendered(),Me.setRange(e,t)
for(var n=function(e){var t=r.find(function(t){return t.index===e})
t&&Me.setVisibility(e,t.visibility)},a=e;a<=t;a++)n(a)
ot()}},[ie]),g(function(){var e=_e.current.pageIndex
e>-1&&le!==ie&&Ie.scrollToItem(e,Ft)},[ie]),g(function(){var e=_e.current.pageIndex
e>0&&e===i&&Se.current===i&&be.current&&(Se.current=-1,Ze(be.current))},[z]),l.useEffect(function(){Ie.isSmoothScrolling||null!==W.current&&W.current===z||(W.current=z,P({currentPage:z,doc:a}))},[z,Ie.isSmoothScrolling]),l.useEffect(function(){Ce.fullScreenMode===r.FullScreenMode.Entering&&_e.current.scrollMode===r.ScrollMode.Page&&(ye.current=_e.current.pageIndex),Ce.fullScreenMode===r.FullScreenMode.EnteredCompletely&&_e.current.scrollMode===r.ScrollMode.Page&&o&&(ye.current=-1),Ce.fullScreenMode===r.FullScreenMode.EnteredCompletely&&be.current&&(ke.current=_e.current.pageIndex,Ze(be.current))},[Ce.fullScreenMode]),l.useEffect(function(){if(Ce.fullScreenMode!==r.FullScreenMode.Entering&&Ce.fullScreenMode!==r.FullScreenMode.Exitting&&!Ie.isSmoothScrolling){var e=Ie.startPage,t=Ie.endPage,n=Ie.maxVisbilityIndex,a=Ie.virtualItems,o=n,i=Ce.fullScreenMode===r.FullScreenMode.Entered||Ce.fullScreenMode===r.FullScreenMode.EnteredCompletely
if(!(i&&o!==ye.current&&ye.current>-1||i&&o!==ke.current&&ke.current>-1)){H(o),De(p(p({},_e.current),{pageIndex:o})),Me.setRange(e,t)
for(var s=function(e){var t=a.find(function(t){return t.index===e})
t&&Me.setVisibility(e,t.visibility)},l=e;l<=t;l++)s(l)
ot()}}},[Ie.startPage,Ie.endPage,Ie.isSmoothScrolling,Ie.maxVisbilityIndex,Ce.fullScreenMode,J,q,fe])
var at=l.useCallback(function(e){Me.markRendered(e),ot()},[Ae]),ot=function(){var e=Me.getHighestPriorityPage()
e>-1&&Me.isInRange(e)&&(Me.markRendering(e),xe(e))},st=function(e){var t=z-1,r=z+1
switch(e){case"FirstPage":Ve(0)
break
case"LastPage":Ve(A-1)
break
case"NextPage":r<A&&Ve(r)
break
case"PrevPage":t>=0&&Ve(t)}},lt=l.useCallback(function(){var e=Ie.virtualItems,t=[]
switch(ie){case r.ViewMode.DualPage:t=ue(e,2)
break
case r.ViewMode.DualPageWithCover:e.length&&(t=0===e[0].index?[[e[0]]].concat(ue(e.slice(1),2)):ue(e,2))
break
case r.ViewMode.SinglePage:default:t=ue(e,1)}var n=M&&M.core?M.core.pageLabel:"Page {{pageIndex}}",o={attrs:{className:"rpv-core__inner-container","data-testid":"core__inner-container",ref:L,style:{height:"100%"}},children:l.createElement(l.Fragment,null),subSlot:{attrs:{"data-testid":"core__inner-pages",className:m({"rpv-core__inner-pages":!0,"rpv-core__inner-pages--horizontal":re===r.ScrollMode.Horizontal,"rpv-core__inner-pages--rtl":R,"rpv-core__inner-pages--single":re===r.ScrollMode.Page,"rpv-core__inner-pages--vertical":re===r.ScrollMode.Vertical,"rpv-core__inner-pages--wrapped":re===r.ScrollMode.Wrapped}),ref:N,style:{height:"100%",position:"relative"}},children:l.createElement("div",{"data-testid":"core__inner-current-page-".concat(z),style:Object.assign({"--scale-factor":fe},Ie.getContainerStyles())},t.map(function(e){return l.createElement("div",{className:m({"rpv-core__inner-page-container":!0,"rpv-core__inner-page-container--single":re===r.ScrollMode.Page}),style:Ie.getItemContainerStyles(e[0]),key:"".concat(e[0].index,"-").concat(ie)},e.map(function(e){var t=ie===r.ViewMode.DualPageWithCover&&(0===e.index||A%2==0&&e.index===A-1)
return l.createElement("div",{"aria-label":n.replace("{{pageIndex}}","".concat(e.index+1)),className:m({"rpv-core__inner-page":!0,"rpv-core__inner-page--dual-even":ie===r.ViewMode.DualPage&&e.index%2==0,"rpv-core__inner-page--dual-odd":ie===r.ViewMode.DualPage&&e.index%2==1,"rpv-core__inner-page--dual-cover":t,"rpv-core__inner-page--dual-cover-even":ie===r.ViewMode.DualPageWithCover&&!t&&e.index%2==0,"rpv-core__inner-page--dual-cover-odd":ie===r.ViewMode.DualPageWithCover&&!t&&e.index%2==1,"rpv-core__inner-page--single":ie===r.ViewMode.SinglePage&&re===r.ScrollMode.Page}),role:"region",key:"".concat(e.index,"-").concat(ie),style:Object.assign({},Ie.getItemStyles(e),Te.buildPageStyles({numPages:A,pageIndex:e.index,scrollMode:re,viewMode:ie}))},l.createElement(it,{doc:a,measureRef:e.measureRef,outlines:ce,pageIndex:e.index,pageRotation:$.has(e.index)?$.get(e.index):0,pageSize:d[e.index],plugins:h,renderPage:f,renderQueueKey:Ae,rotation:q,scale:fe,shouldRender:Ee===e.index,viewMode:ie,onExecuteNamedAction:st,onJumpFromLinkAnnotation:Be,onJumpToDest:Ge,onRenderCompleted:at,onRotatePage:Xe}))}))}))}}
return h.forEach(function(e){e.renderViewer&&(o=e.renderViewer({containerRef:L,doc:a,pagesContainerRef:N,pagesRotation:$,pageSizes:d,rotation:q,slot:o,themeContext:T,jumpToPage:Ve,openFile:qe,rotate:Ke,rotatePage:Xe,switchScrollMode:Ye,switchViewMode:Je,zoom:Ze}))}),o},[h,Ie]),ct=l.useCallback(function(e){return l.createElement("div",p({},e.attrs,{style:e.attrs&&e.attrs.style?e.attrs.style:{}}),e.children,e.subSlot&&ct(e.subSlot))},[])
return ct(lt())},Tt=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.3,1.5,1.7,1.9,2.1,2.4,2.7,3,3.3,3.7,4.1,4.6,5.1,5.7,6.3,7,7.7,8.5,9.4,10],Rt=function(e){var t=e.defaultScale,n=e.doc,a=e.render,o=e.scrollMode,i=e.viewMode,s=l.useRef(),c=l.useState({pageSizes:[],scale:0}),u=c[0],d=c[1]
return l.useLayoutEffect(function(){var e=Array(n.numPages).fill(0).map(function(e,t){return new Promise(function(e,r){me(n,t).then(function(t){var r=t.getViewport({scale:1})
e({pageHeight:r.height,pageWidth:r.width,rotation:r.rotation})})})})
Promise.all(e).then(function(e){var a=s.current
if(a&&0!==e.length){var l=e[0].pageWidth,c=e[0].pageHeight,u=a.parentElement,h=(u.clientWidth-45)/l,p=(u.clientHeight-45)/c,f=h
switch(o){case r.ScrollMode.Horizontal:f=Math.min(h,p)
break
case r.ScrollMode.Vertical:default:f=h}var v,m,g=t?"string"==typeof t?St(u,c,l,t,i,n.numPages):t:(v=f,-1===(m=Tt.findIndex(function(e){return e>=v}))||0===m?v:Tt[m-1])
d({pageSizes:e,scale:g})}})},[n.loadingTask.docId]),0===u.pageSizes.length||0===u.scale?l.createElement("div",{className:"rpv-core__page-size-calculator","data-testid":"core__page-size-calculating",ref:s},l.createElement(S,null)):a(u.pageSizes,u.scale)},It=function(){},Ot=function(e){function t(t,r){var n=e.call(this)||this
return n.verifyPassword=t,n.passwordStatus=r,n}return c(t,e),t}(It),Dt=function(e){var t=e.passwordStatus,n=e.renderProtectedView,a=e.verifyPassword,o=e.onDocumentAskPassword,i=l.useContext(G).l10n,s=l.useState(""),c=s[0],u=s[1],d=l.useContext(v).direction===r.TextDirection.RightToLeft,h=function(){return a(c)}
return l.useEffect(function(){o&&o({verifyPassword:a})},[]),n?n({passwordStatus:t,verifyPassword:a}):l.createElement("div",{className:"rpv-core__asking-password-wrapper"},l.createElement("div",{className:m({"rpv-core__asking-password":!0,"rpv-core__asking-password--rtl":d})},l.createElement("div",{className:"rpv-core__asking-password-message"},t===r.PasswordStatus.RequiredPassword&&i.core.askingPassword.requirePasswordToOpen,t===r.PasswordStatus.WrongPassword&&i.core.wrongPassword.tryAgain),l.createElement("div",{className:"rpv-core__asking-password-body"},l.createElement("div",{className:m({"rpv-core__asking-password-input":!0,"rpv-core__asking-password-input--ltr":!d,"rpv-core__asking-password-input--rtl":d})},l.createElement(C,{testId:"core__asking-password-input",type:"password",value:c,onChange:u,onKeyDown:function(e){"Enter"===e.key&&h()}})),l.createElement(k,{onClick:h},i.core.askingPassword.submit))))},Lt=function(e){function t(t){var r=e.call(this)||this
return r.doc=t,r}return c(t,e),t}(It),Nt=function(e){function t(t){var r=e.call(this)||this
return r.error=t,r}return c(t,e),t}(It),Bt=function(e){function t(t){var r=e.call(this)||this
return r.percentages=t,r}return c(t,e),t}(It),jt=function(e){var t=e.characterMap,n=e.file,a=e.httpHeaders,o=e.render,i=e.renderError,s=e.renderLoader,c=e.renderProtectedView,d=e.transformGetDocumentParams,h=e.withCredentials,p=e.onDocumentAskPassword,f=l.useContext(v).direction===r.TextDirection.RightToLeft,g=l.useState(new Bt(0)),_=g[0],b=g[1],y=l.useRef(""),k=O()
return l.useEffect(function(){y.current="",b(new Bt(0))
var e=new u.PDFWorker({name:"PDFWorker_".concat(Date.now())}),o=Object.assign({httpHeaders:a,withCredentials:h,worker:e},"string"==typeof n?{url:n}:{data:n},t?{cMapUrl:t.url,cMapPacked:t.isCompressed}:{}),i=d?d(o):o,s=u.getDocument(i)
return s.onPassword=function(e,t){switch(t){case u.PasswordResponses.NEED_PASSWORD:k.current&&b(new Ot(e,r.PasswordStatus.RequiredPassword))
break
case u.PasswordResponses.INCORRECT_PASSWORD:k.current&&b(new Ot(e,r.PasswordStatus.WrongPassword))}},s.onProgress=function(e){var t=e.total>0?Math.min(100,100*e.loaded/e.total):100
k.current&&""===y.current&&b(new Bt(t))},s.promise.then(function(e){y.current=e.loadingTask.docId,k.current&&b(new Lt(e))},function(t){return k.current&&!e.destroyed&&b(new Nt({message:t.message||"Cannot load document",name:t.name}))}),function(){s.destroy(),e.destroy()}},[n]),_ instanceof Ot?l.createElement(Dt,{passwordStatus:_.passwordStatus,renderProtectedView:c,verifyPassword:_.verifyPassword,onDocumentAskPassword:p}):_ instanceof Lt?o(_.doc):_ instanceof Nt?i?i(_.error):l.createElement("div",{className:m({"rpv-core__doc-error":!0,"rpv-core__doc-error--rtl":f})},l.createElement("div",{className:"rpv-core__doc-error-text"},_.error.message)):l.createElement("div",{"data-testid":"core__doc-loading",className:m({"rpv-core__doc-loading":!0,"rpv-core__doc-loading--rtl":f})},s?s(_.percentages):l.createElement(S,null))},Gt=function(e){return{startPage:e.startPage-3,endPage:e.endPage+3}}
r.Button=function(e){var t=e.children,n=e.testId,a=e.onClick,o=l.useContext(v).direction===r.TextDirection.RightToLeft,i=n?{"data-testid":n}:{}
return l.createElement("button",p({className:m({"rpv-core__button":!0,"rpv-core__button--rtl":o}),type:"button",onClick:a},i),t)},r.Icon=b,r.LazyRender=function(e){var t=e.attrs,r=e.children,n=e.testId,a=l.useState(!1),o=a[0],i=a[1],s=n?p(p({},t),{"data-testid":n}):t,c=_({once:!0,onVisibilityChanged:function(e){e.isVisible&&i(!0)}})
return l.createElement("div",p({ref:c},s),o&&r)},r.LocalizationContext=G,r.Menu=function(e){var t=e.children,n=l.useRef(),a=l.useRef([]),o=l.useContext(v).direction===r.TextDirection.RightToLeft,i=function(e){if(n.current)switch(e.key){case"Tab":e.preventDefault()
break
case"ArrowDown":e.preventDefault(),s(function(e,t){return t+1})
break
case"ArrowUp":e.preventDefault(),s(function(e,t){return t-1})
break
case"End":e.preventDefault(),s(function(e,t){return e.length-1})
break
case"Home":e.preventDefault(),s(function(e,t){return 0})}},s=function(e){if(n.current){var t=a.current,r=t.findIndex(function(e){return"0"===e.getAttribute("tabindex")}),o=Math.min(t.length-1,Math.max(0,e(t,r)))
r>=0&&r<=t.length-1&&t[r].setAttribute("tabindex","-1"),t[o].setAttribute("tabindex","0"),t[o].focus()}}
return g(function(){var e=n.current
if(e){var t=function(e){var t=[]
return e.querySelectorAll('.rpv-core__menu-item[role="menuitem"]').forEach(function(r){if(r instanceof HTMLElement){var n=r.parentElement;(n===e||"none"!==window.getComputedStyle(n).display)&&t.push(r)}}),t}(e)
a.current=t}},[]),g(function(){return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}},[]),l.createElement("div",{ref:n,"aria-orientation":"vertical",className:m({"rpv-core__menu":!0,"rpv-core__menu--rtl":o}),role:"menu",tabIndex:0},t)},r.MenuDivider=function(){return l.createElement("div",{"aria-orientation":"horizontal",className:"rpv-core__menu-divider",role:"separator"})},r.MenuItem=function(e){var t=e.checked,n=void 0!==t&&t,a=e.children,o=e.icon,i=void 0===o?null:o,s=e.isDisabled,c=void 0!==s&&s,u=e.testId,d=e.onClick,h=l.useContext(v).direction===r.TextDirection.RightToLeft,f=u?{"data-testid":u}:{}
return l.createElement("button",p({className:m({"rpv-core__menu-item":!0,"rpv-core__menu-item--disabled":c,"rpv-core__menu-item--ltr":!h,"rpv-core__menu-item--rtl":h}),role:"menuitem",tabIndex:-1,type:"button",onClick:d},f),l.createElement("div",{className:m({"rpv-core__menu-item-icon":!0,"rpv-core__menu-item-icon--ltr":!h,"rpv-core__menu-item-icon--rtl":h})},i),l.createElement("div",{className:m({"rpv-core__menu-item-label":!0,"rpv-core__menu-item-label--ltr":!h,"rpv-core__menu-item-label--rtl":h})},a),l.createElement("div",{className:m({"rpv-core__menu-item-check":!0,"rpv-core__menu-item-check--ltr":!h,"rpv-core__menu-item-check--rtl":h})},n&&l.createElement(y,null)))},r.MinimalButton=function(e){var t=e.ariaLabel,n=void 0===t?"":t,a=e.ariaKeyShortcuts,o=void 0===a?"":a,i=e.children,s=e.isDisabled,c=void 0!==s&&s,u=e.isSelected,d=void 0!==u&&u,h=e.testId,f=e.onClick,g=l.useContext(v).direction===r.TextDirection.RightToLeft,_=h?{"data-testid":h}:{}
return l.createElement("button",p({"aria-label":n},o&&{"aria-keyshortcuts":o},c&&{"aria-disabled":!0},{className:m({"rpv-core__minimal-button":!0,"rpv-core__minimal-button--disabled":c,"rpv-core__minimal-button--rtl":g,"rpv-core__minimal-button--selected":d}),type:"button",onClick:f},_),i)},r.Modal=function(e){var t=e.ariaControlsSuffix,r=e.closeOnClickOutside,n=e.closeOnEscape,a=e.content,o=e.isOpened,i=void 0!==o&&o,s=e.target,c=t||"".concat(H())
return l.createElement(Y,{target:s?function(e,t){return l.createElement("div",{"aria-expanded":t?"true":"false","aria-haspopup":"dialog","aria-controls":"rpv-core__modal-body-".concat(c)},s(e,t))}:null,content:function(e){return l.createElement(q,null,l.createElement(U,{ariaControlsSuffix:c,closeOnClickOutside:r,closeOnEscape:n,onToggle:e},a(e)))},isOpened:i})},r.Popover=function(e){var t=e.ariaHasPopup,r=void 0===t?"dialog":t,n=e.ariaControlsSuffix,a=e.closeOnClickOutside,o=e.closeOnEscape,i=e.content,s=e.lockScroll,c=void 0===s||s,u=e.offset,d=e.position,h=e.target,p=X(!1),f=p.opened,v=p.toggle,m=l.useRef(),g=l.useMemo(function(){return n||"".concat(H())},[])
return l.createElement("div",{ref:m,"aria-expanded":f?"true":"false","aria-haspopup":r,"aria-controls":"rpv-core__popver-body-".concat(g)},h(v,f),f&&l.createElement(l.Fragment,null,c&&l.createElement(se,{closeOnEscape:o,onClose:v}),l.createElement(ie,{ariaControlsSuffix:g,closeOnClickOutside:a,offset:u,position:d,targetRef:m,onClose:v},i(v))))},r.PrimaryButton=k,r.ProgressBar=function(e){var t=e.progress,n=l.useContext(v).direction===r.TextDirection.RightToLeft
return l.createElement("div",{className:m({"rpv-core__progress-bar":!0,"rpv-core__progress-bar--rtl":n})},l.createElement("div",{className:"rpv-core__progress-bar-progress",style:{width:"".concat(t,"%")}},t,"%"))},r.Separator=function(){return l.createElement("div",{className:"rpv-core__separator"})},r.Spinner=S,r.Splitter=function(e){var t=e.constrain,n=l.useContext(v).direction===r.TextDirection.RightToLeft,a=l.useRef(),o=l.useRef(),i=l.useRef(),s=l.useRef(0),c=l.useRef(0),u=l.useRef(0),d=l.useRef(0),h={capture:!0},p=function(e){var r=a.current,l=o.current,c=i.current
if(r&&l&&c){var h=d.current,p=e.clientX-s.current,f=u.current+(n?-p:p),v=r.parentElement.getBoundingClientRect().width,m=100*f/v
if(r.classList.add("rpv-core__splitter--resizing"),t){var g=v-f-h
if(!t({firstHalfPercentage:m,firstHalfSize:f,secondHalfPercentage:100*g/v,secondHalfSize:g}))return}l.style.width="".concat(m,"%"),document.body.classList.add("rpv-core__splitter-body--resizing"),l.classList.add("rpv-core__splitter-sibling--resizing"),c.classList.add("rpv-core__splitter-sibling--resizing")}},f=function(e){var t=a.current,r=o.current,n=i.current
t&&r&&n&&(document.body.classList.remove("rpv-core__splitter-body--resizing"),t.classList.remove("rpv-core__splitter--resizing"),r.classList.remove("rpv-core__splitter-sibling--resizing"),n.classList.remove("rpv-core__splitter-sibling--resizing"),document.removeEventListener("mousemove",p,h),document.removeEventListener("mouseup",f,h))}
return l.useEffect(function(){var e=a.current
e&&(d.current=e.getBoundingClientRect().width,o.current=e.previousElementSibling,i.current=e.nextElementSibling)},[]),l.createElement("div",{ref:a,className:"rpv-core__splitter",onMouseDown:function(e){var t=o.current
t&&(s.current=e.clientX,c.current=e.clientY,u.current=t.getBoundingClientRect().width,document.addEventListener("mousemove",p,h),document.addEventListener("mouseup",f,h))}})},r.TextBox=C,r.ThemeContext=v,r.Tooltip=function(e){var t=e.ariaControlsSuffix,n=e.content,a=e.offset,o=e.position,i=e.target,s=X(!1),c=s.opened,u=s.toggle,d=l.useRef(),h=l.useRef(),p=l.useMemo(function(){return t||"".concat(H())},[])
V(function(){d.current&&document.activeElement&&d.current.contains(document.activeElement)&&v()})
var f=function(){u(r.ToggleStatus.Open)},v=function(){u(r.ToggleStatus.Close)}
return l.createElement(l.Fragment,null,l.createElement("div",{ref:d,"aria-describedby":"rpv-core__tooltip-body-".concat(p),onBlur:function(e){e.relatedTarget instanceof HTMLElement&&e.currentTarget.parentElement&&e.currentTarget.parentElement.contains(e.relatedTarget)?h.current&&(h.current.style.display="none"):v()},onFocus:f,onMouseEnter:f,onMouseLeave:v},i),c&&l.createElement(le,{ariaControlsSuffix:p,contentRef:h,offset:a,position:o,targetRef:d},n()))},r.Viewer=function(e){var t=e.characterMap,n=e.defaultScale,a=e.enableSmoothScroll,o=void 0===a||a,i=e.fileUrl,s=e.httpHeaders,c=void 0===s?{}:s,u=e.initialPage,d=void 0===u?0:u,h=e.pageLayout,p=e.initialRotation,f=void 0===p?0:p,m=e.localization,g=e.plugins,b=void 0===g?[]:g,y=e.renderError,k=e.renderLoader,S=e.renderPage,C=e.renderProtectedView,P=e.scrollMode,E=void 0===P?r.ScrollMode.Vertical:P,x=e.setRenderRange,w=void 0===x?Gt:x,A=e.transformGetDocumentParams,F=e.theme,M=void 0===F?{direction:r.TextDirection.LeftToRight,theme:"light"}:F,T=e.viewMode,R=void 0===T?r.ViewMode.SinglePage:T,I=e.withCredentials,O=void 0!==I&&I,L=e.onDocumentAskPassword,N=e.onDocumentLoad,B=void 0===N?function(){}:N,z=e.onPageChange,H=void 0===z?function(){}:z,W=e.onRotate,V=void 0===W?function(){}:W,U=e.onRotatePage,q=void 0===U?function(){}:U,K=e.onSwitchTheme,X=void 0===K?function(){}:K,Y=e.onZoom,J=void 0===Y?function(){}:Y,Z=l.useState({data:i,name:"string"==typeof i?i:"",shouldLoad:!1}),Q=Z[0],$=Z[1],ee=function(e,t){$({data:t,name:e,shouldLoad:!0})},te=l.useState(!1),re=te[0],ne=te[1],ae=D(Q)
l.useEffect(function(){var e,t,r,n
e=ae.data,n=typeof(t=i),"string"==(r=typeof e)&&"string"===n&&e===t||"object"===r&&"object"===n&&e.length===t.length&&e.every(function(e,r){return e===t[r]})||$({data:i,name:"string"==typeof i?i:"",shouldLoad:re})},[i,re])
var oe=_({onVisibilityChanged:function(e){ne(e.isVisible),e.isVisible&&$(function(e){return Object.assign({},e,{shouldLoad:!0})})}}),ie="string"==typeof M?{direction:r.TextDirection.LeftToRight,theme:M}:M,se=l.useState(m||j),le=se[0],ce=se[1],ue={l10n:le,setL10n:ce},de=Object.assign({},{direction:ie.direction},function(e,t){var r=l.useMemo(function(){return"auto"===e?"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e},[]),n=l.useState(r),a=n[0],o=n[1],i=D(a)
return l.useEffect(function(){if("auto"===e){var t=window.matchMedia("(prefers-color-scheme: dark)"),r=function(e){o(e.matches?"dark":"light")}
return t.addEventListener("change",r),function(){return t.removeEventListener("change",r)}}},[]),l.useEffect(function(){a!==i&&t&&t(a)},[a]),l.useEffect(function(){e!==a&&o(e)},[e]),{currentTheme:a,setCurrentTheme:o}}(ie.theme||"light",X))
return l.useEffect(function(){m&&ce(m)},[m]),l.createElement(G.Provider,{value:ue},l.createElement(v.Provider,{value:de},l.createElement("div",{ref:oe,className:"rpv-core__viewer rpv-core__viewer--".concat(de.currentTheme),"data-testid":"core__viewer",style:{height:"100%",width:"100%"}},Q.shouldLoad&&l.createElement(jt,{characterMap:t,file:Q.data,httpHeaders:c,render:function(e){return l.createElement(Rt,{defaultScale:n,doc:e,render:function(t,a){return l.createElement(Mt,{currentFile:{data:Q.data,name:Q.name},defaultScale:n,doc:e,enableSmoothScroll:o,initialPage:d,initialRotation:f,initialScale:a,pageLayout:h,pageSizes:t,plugins:b,renderPage:S,scrollMode:E,setRenderRange:w,viewMode:R,viewerState:{file:Q,fullScreenMode:r.FullScreenMode.Normal,pageIndex:-1,pageHeight:t[0].pageHeight,pageWidth:t[0].pageWidth,pagesRotation:new Map,rotation:f,scale:a,scrollMode:E,viewMode:R},onDocumentLoad:B,onOpenFile:ee,onPageChange:H,onRotate:V,onRotatePage:q,onZoom:J})},scrollMode:E,viewMode:R})},renderError:y,renderLoader:k,renderProtectedView:C,transformGetDocumentParams:A,withCredentials:O,onDocumentAskPassword:L}))))},r.Worker=function(e){var t=e.children,r=e.workerUrl
return u.GlobalWorkerOptions.workerSrc=r,l.createElement(l.Fragment,null,t)},r.chunk=ue,r.classNames=m,r.createStore=function(e){var t=e||{},r={},n=function(e,n){var a
t=p(p({},t),((a={})[e]=n,a)),(r[e]||[]).forEach(function(r){return r(t[e])})},a=function(e){return t[e]}
return{subscribe:function(e,t){r[e]=(r[e]||[]).concat(t)},unsubscribe:function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},update:function(e,t){n(e,t)},updateCurrentValue:function(e,t){var r=a(e)
void 0!==r&&n(e,t(r))},get:function(e){return a(e)}}},r.getDestination=ge,r.getPage=me,r.isFullScreenEnabled=M,r.isMac=function(){return"undefined"!=typeof window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)},r.useDebounceCallback=I,r.useIntersectionObserver=_,r.useIsMounted=O,r.useIsomorphicLayoutEffect=g,r.usePrevious=D,r.useRenderQueue=B},"3QvN":function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M18.5,7.5c.275,0,.341-.159.146-.354L12.354.854a.5.5,0,0,0-.708,0L5.354,7.147c-.2.195-.129.354.146.354h3v10a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V7.5Z"}),o.createElement("path",{d:"M23.5,18.5v4a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1v-4"}))},s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},l=function(e){var t=o.useRef(),r=function(){var r=t.current
r&&(r.click(),e.get("triggerOpenFile")&&e.update("triggerOpenFile",!1))},n=function(e){e&&r()}
return o.useEffect(function(){return e.subscribe("triggerOpenFile",n),function(){e.unsubscribe("triggerOpenFile",n)}},[]),{inputRef:t,openFile:r}},c={left:0,top:8},u=function(e){var t=e.enableShortcuts,r=e.store,n=e.onClick,s=o.useContext(a.LocalizationContext).l10n,u=s&&s.open?s.open.openFile:"Open file",d=l(r),h=d.inputRef,p=d.openFile,f=t?a.isMac()?"Meta+O":"Ctrl+O":""
return o.createElement(a.Tooltip,{ariaControlsSuffix:"open",position:a.Position.BottomCenter,target:o.createElement("div",{className:"rpv-open__input-wrapper"},o.createElement("input",{accept:".pdf",ref:h,className:"rpv-open__input",multiple:!1,tabIndex:-1,title:"",type:"file",onChange:n}),o.createElement(a.MinimalButton,{ariaKeyShortcuts:f,ariaLabel:u,testId:"open__button",onClick:p},o.createElement(i,null))),content:function(){return u},offset:c})},d=function(e){var t=e.children,r=e.enableShortcuts,n=e.store
return(t||function(e){return o.createElement(u,{enableShortcuts:r,store:n,onClick:e.onClick})})({onClick:function(e){var t=e.target.files
if(t&&t.length){var r=n.get("openFile")
r&&r(t[0])}}})},h=function(e){var t=e.store,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,s=n&&n.open?n.open.openFile:"Open file",c=l(t),u=c.inputRef,d=c.openFile
return o.createElement(a.MenuItem,{icon:o.createElement(i,null),testId:"open__menu",onClick:d},o.createElement("div",{className:"rpv-open__input-wrapper"},o.createElement("input",{accept:".pdf",ref:u,className:"rpv-open__input",multiple:!1,tabIndex:-1,title:"",type:"file",onChange:r}),s))},p=function(e){var t=e.containerRef,r=e.store,n=function(e){if(!e.shiftKey&&!e.altKey&&"o"===e.key&&(a.isMac()?e.metaKey:e.ctrlKey)){var n=t.current
n&&document.activeElement&&n.contains(document.activeElement)&&(e.preventDefault(),r.update("triggerOpenFile",!0))}}
return o.useEffect(function(){if(t.current)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}},[t.current]),o.createElement(o.Fragment,null)}
r.OpenFileIcon=i,r.openPlugin=function(e){var t=o.useMemo(function(){return Object.assign({},{enableShortcuts:!0},e)},[]),r=o.useMemo(function(){return a.createStore({})},[]),n=function(e){return o.createElement(d,s({enableShortcuts:t.enableShortcuts},e,{store:r}))}
return{install:function(e){r.update("openFile",e.openFile)},renderViewer:function(e){var n=e.slot,a={children:o.createElement(o.Fragment,null,t.enableShortcuts&&o.createElement(p,{containerRef:e.containerRef,store:r}),n.children)}
return s(s({},n),a)},Open:n,OpenButton:function(){return o.createElement(n,null)},OpenMenuItem:function(){return o.createElement(n,null,function(e){return o.createElement(h,{store:r,onClick:e.onClick})})}}}},"3vLG":function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{ignoreDirection:!0,size:16},o.createElement("path",{d:"M10.5,0.499c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.499,10.5,0.499z\n            M23.5,23.499\n            l-5.929-5.929\n            M5.5,10.499h10\n            M10.5,5.499v10"}))},s=function(){return o.createElement(a.Icon,{ignoreDirection:!0,size:16},o.createElement("path",{d:"M10.5,0.499c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.499,10.5,0.499z\n            M23.5,23.499\n            l-5.929-5.929\n            M5.5,10.499h10"}))},l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},c=function(e){var t=o.useState(e.get("scale")||0),r=t[0],n=t[1],a=function(e){n(e)}
return o.useEffect(function(){return e.subscribe("scale",a),function(){e.unsubscribe("scale",a)}},[]),{scale:r}},u=function(e){var t=e.children,r=e.store
return(t||function(e){return o.createElement(o.Fragment,null,"".concat(Math.round(100*e.scale),"%"))})({scale:c(r).scale})},d={passive:!1},h=null,p=function(e){var t=e.pagesContainerRef,r=e.store,n=a.useDebounceCallback(function(e){var t=r.get("zoom")
t&&t(e)},40),i=function(e){if(e.ctrlKey){e.preventDefault()
var t=e.target.getBoundingClientRect(),a=1-e.deltaY/100,o=e.clientX-t.left,i=e.clientY-t.top,s=r.get("scale"),l=(h||(h=document.createElementNS("http://www.w3.org/2000/svg","svg"))).createSVGMatrix().translate(o,i).scale(a).translate(-o,-i).scale(s)
n(l.a)}}
return a.useIsomorphicLayoutEffect(function(){var e=t.current
if(e)return e.addEventListener("wheel",i,d),function(){e.removeEventListener("wheel",i)}},[]),o.createElement(o.Fragment,null)},f=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.3,1.5,1.7,1.9,2.1,2.4,2.7,3,3.3,3.7,4.1,4.6,5.1,5.7,6.3,7,7.7,8.5,9.4,10],v=function(e){return f.find(function(t){return t>e})||e},m=function(e){var t=f.findIndex(function(t){return t>=e})
return-1===t||0===t?e:f[t-1]},g=function(e){var t=e.containerRef,r=e.store,n=function(e){if(!e.shiftKey&&!e.altKey&&(a.isMac()?e.metaKey:e.ctrlKey)){var n=t.current
if(n&&document.activeElement&&n.contains(document.activeElement)){var o=r.get("zoom")
if(o){var i=r.get("scale")||1,s=1
switch(e.key){case"-":s=m(i)
break
case"=":s=v(i)
break
case"0":s=1
break
default:s=i}s!==i&&(e.preventDefault(),o(s))}}}}
return o.useEffect(function(){if(t.current)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}},[t.current]),o.createElement(o.Fragment,null)},_=[.5,.75,1,1.25,1.5,2,3,4],b={left:0,top:8},y=function(e){var t=e.levels,r=void 0===t?_:t,n=e.scale,i=e.onZoom,s=o.useContext(a.LocalizationContext).l10n,l=o.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft,c=s&&s.zoom?s.zoom.zoomDocument:"Zoom document"
return o.createElement(a.Popover,{ariaControlsSuffix:"zoom",ariaHasPopup:"menu",position:a.Position.BottomCenter,target:function(e){return o.createElement(a.MinimalButton,{ariaLabel:c,testId:"zoom__popover-target",onClick:function(){e()}},o.createElement("span",{className:"rpv-zoom__popover-target"},o.createElement("span",{"data-testid":"zoom__popover-target-scale",className:a.classNames({"rpv-zoom__popover-target-scale":!0,"rpv-zoom__popover-target-scale--ltr":!l,"rpv-zoom__popover-target-scale--rtl":l})},Math.round(100*n),"%"),o.createElement("span",{className:"rpv-zoom__popover-target-arrow"})))},content:function(e){return o.createElement(a.Menu,null,Object.keys(a.SpecialZoomLevel).map(function(t){var r=t
return o.createElement(a.MenuItem,{key:r,onClick:function(){e(),i(r)}},function(e){switch(r){case a.SpecialZoomLevel.ActualSize:return s&&s.zoom?s.zoom.actualSize:"Actual size"
case a.SpecialZoomLevel.PageFit:return s&&s.zoom?s.zoom.pageFit:"Page fit"
case a.SpecialZoomLevel.PageWidth:return s&&s.zoom?s.zoom.pageWidth:"Page width"}}())}),o.createElement(a.MenuDivider,null),r.map(function(t){return o.createElement(a.MenuItem,{key:t,onClick:function(){e(),i(t)}},"".concat(Math.round(100*t),"%"))}))},offset:b,closeOnClickOutside:!0,closeOnEscape:!0})},k=function(e){var t=e.children,r=e.levels,n=e.store
return(t||function(e){return o.createElement(y,{levels:r,scale:e.scale,onZoom:e.onZoom})})({scale:c(n).scale,onZoom:function(e){var t=n.get("zoom")
t&&t(e)}})},S={left:0,top:8},C=function(e){var t=e.enableShortcuts,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,s=n&&n.zoom?n.zoom.zoomIn:"Zoom in",l=t?a.isMac()?"Meta+=":"Ctrl+=":""
return o.createElement(a.Tooltip,{ariaControlsSuffix:"zoom-in",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaKeyShortcuts:l,ariaLabel:s,testId:"zoom__in-button",onClick:r},o.createElement(i,null)),content:function(){return s},offset:S})},P=function(e){var t=e.children,r=e.enableShortcuts,n=e.store,a=c(n).scale
return(t||C)({enableShortcuts:r,onClick:function(){var e=n.get("zoom")
e&&e(v(a))}})},E=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=r&&r.zoom?r.zoom.zoomIn:"Zoom in"
return o.createElement(a.MenuItem,{icon:o.createElement(i,null),testId:"zoom__in-menu",onClick:t},n)},x={left:0,top:8},w=function(e){var t=e.enableShortcuts,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.zoom?n.zoom.zoomOut:"Zoom out",l=t?a.isMac()?"Meta+-":"Ctrl+-":""
return o.createElement(a.Tooltip,{ariaControlsSuffix:"zoom-out",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaKeyShortcuts:l,ariaLabel:i,testId:"zoom__out-button",onClick:r},o.createElement(s,null)),content:function(){return i},offset:x})},A=function(e){var t=e.children,r=e.enableShortcuts,n=e.store,a=c(n).scale
return(t||w)({enableShortcuts:r,onClick:function(){var e=n.get("zoom")
e&&e(m(a))}})},F=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=r&&r.zoom?r.zoom.zoomOut:"Zoom out"
return o.createElement(a.MenuItem,{icon:o.createElement(s,null),testId:"zoom__out-menu",onClick:t},n)}
r.ZoomInIcon=i,r.ZoomOutIcon=s,r.zoomPlugin=function(e){var t=o.useMemo(function(){return Object.assign({},{enableShortcuts:!0},e)},[]),r=o.useMemo(function(){return a.createStore({})},[]),n=function(e){return o.createElement(P,l({enableShortcuts:t.enableShortcuts},e,{store:r}))},i=function(e){return o.createElement(A,l({enableShortcuts:t.enableShortcuts},e,{store:r}))},s=function(e){return o.createElement(k,l({},e,{store:r}))}
return{renderViewer:function(e){var n=e.slot
if(!t.enableShortcuts)return n
var a={children:o.createElement(o.Fragment,null,o.createElement(g,{containerRef:e.containerRef,store:r}),o.createElement(p,{pagesContainerRef:e.pagesContainerRef,store:r}),n.children)}
return l(l({},n),a)},install:function(e){r.update("zoom",e.zoom)},onViewerStateChange:function(e){return r.update("scale",e.scale),e},zoomTo:function(e){var t=r.get("zoom")
t&&t(e)},CurrentScale:function(e){return o.createElement(u,l({},e,{store:r}))},ZoomIn:n,ZoomInButton:function(){return o.createElement(n,null,function(e){return o.createElement(C,l({},e))})},ZoomInMenuItem:function(e){return o.createElement(n,null,function(t){return o.createElement(E,{onClick:function(){t.onClick(),e.onClick()}})})},ZoomOut:i,ZoomOutButton:function(){return o.createElement(i,null,function(e){return o.createElement(w,l({},e))})},ZoomOutMenuItem:function(e){return o.createElement(i,null,function(t){return o.createElement(F,{onClick:function(){t.onClick(),e.onClick()}})})},Zoom:s,ZoomPopover:function(e){return o.createElement(s,null,function(t){return o.createElement(y,l({levels:null==e?void 0:e.levels},t))})}}}},"4nco":function(e,t,r){"use strict"
var n=r("iD5t"),a=r("q1tI"),o=r("kotU"),i=r("WYkr"),s=r("R0Eq"),c=r("0Mcr")
var u=function l(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(a),d=function(){return u.createElement(n.Icon,{size:16},u.createElement("path",{d:"M11.5,1.5h11c0.552,0,1,0.448,1,1v20c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h3\n            M11.5,10.5c0,0.55-0.3,0.661-0.659,0.248L8,7.5l-2.844,3.246c-0.363,0.414-0.659,0.3-0.659-0.247v-9c0-0.552,0.448-1,1-1h5\n            c0.552,0,1,0.448,1,1L11.5,10.5z\n            M14.5,6.499h6\n            M14.5,10.499h6\n            M3.5,14.499h17\n            M3.5,18.499h16.497"}))},h=function(){return(h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},p=function(){return u.createElement(n.Icon,{size:16},u.createElement("path",{d:"M7.618,15.345l8.666-8.666c0.78-0.812,2.071-0.838,2.883-0.058s0.838,2.071,0.058,2.883\n            c-0.019,0.02-0.038,0.039-0.058,0.058L7.461,21.305c-1.593,1.593-4.175,1.592-5.767,0s-1.592-4.175,0-5.767c0,0,0,0,0,0\n            L13.928,3.305c2.189-2.19,5.739-2.19,7.929-0.001s2.19,5.739,0,7.929l0,0L13.192,19.9"}))},f=function(){return u.createElement(n.Icon,{size:16},u.createElement("path",{d:"M10.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z\n            M23.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z\n            M10.5,22.5 c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z\n            M23.5,22.5c0,0.552-0.448,1-1,1 h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z"}))},v={left:8,top:0},m={left:-8,top:0},g=function(e){var t=e.attachmentTabContent,r=e.bookmarkTabContent,a=e.store,o=e.thumbnailTabContent,i=e.tabs,s=u.useRef(),l=u.useContext(n.LocalizationContext).l10n,c=u.useState(a.get("isCurrentTabOpened")||!1),h=c[0],g=c[1],_=u.useState(Math.max(a.get("currentTab")||0,0)),b=_[0],y=_[1],k=u.useContext(n.ThemeContext).direction===n.TextDirection.RightToLeft,S=[{content:o,icon:u.createElement(f,null),title:l&&l.defaultLayout?l.defaultLayout.thumbnail:"Thumbnail"},{content:r,icon:u.createElement(d,null),title:l&&l.defaultLayout?l.defaultLayout.bookmark:"Bookmark"},{content:t,icon:u.createElement(p,null),title:l&&l.defaultLayout?l.defaultLayout.attachment:"Attachment"}],C=i?i(S):S,P=function(e){e>=0&&e<=C.length-1&&(a.update("isCurrentTabOpened",!0),y(e))},E=function(e){g(e)}
return u.useEffect(function(){return a.subscribe("currentTab",P),a.subscribe("isCurrentTabOpened",E),function(){a.unsubscribe("currentTab",P),a.unsubscribe("isCurrentTabOpened",E)}},[]),0===C.length?u.createElement(u.Fragment,null):u.createElement(u.Fragment,null,u.createElement("div",{"data-testid":"default-layout__sidebar",className:n.classNames({"rpv-default-layout__sidebar":!0,"rpv-default-layout__sidebar--opened":h,"rpv-default-layout__sidebar--ltr":!k,"rpv-default-layout__sidebar--rtl":k}),ref:s},u.createElement("div",{className:"rpv-default-layout__sidebar-tabs"},u.createElement("div",{className:"rpv-default-layout__sidebar-headers",role:"tablist","aria-orientation":"vertical"},C.map(function(e,t){return u.createElement("div",{"aria-controls":"rpv-default-layout__sidebar-content","aria-selected":b===t,key:t,className:"rpv-default-layout__sidebar-header",id:"rpv-default-layout__sidebar-tab-".concat(t),role:"tab"},u.createElement(n.Tooltip,{ariaControlsSuffix:"default-layout-sidebar-tab-".concat(t),position:k?n.Position.LeftCenter:n.Position.RightCenter,target:u.createElement(n.MinimalButton,{ariaLabel:e.title,isSelected:b===t,onClick:function(){return function(e){if(b===e){a.update("isCurrentTabOpened",!a.get("isCurrentTabOpened"))
var t=s.current
t&&t.style.width&&t.style.removeProperty("width")}else a.update("currentTab",e)}(t)}},e.icon),content:function(){return e.title},offset:k?m:v}))})),u.createElement("div",{"aria-labelledby":"rpv-default-layout__sidebar-tab-".concat(b),id:"rpv-default-layout__sidebar-content",className:n.classNames({"rpv-default-layout__sidebar-content":!0,"rpv-default-layout__sidebar-content--opened":h,"rpv-default-layout__sidebar-content--ltr":!k,"rpv-default-layout__sidebar-content--rtl":k}),role:"tabpanel",tabIndex:-1},C[b].content))),h&&u.createElement(n.Splitter,{constrain:function(e){return e.firstHalfPercentage>=20&&e.firstHalfPercentage<=80}}))}
t.BookmarkIcon=d,t.FileIcon=p,t.ThumbnailIcon=f,t.defaultLayoutPlugin=function(e){var t=u.useMemo(function(){return n.createStore({isCurrentTabOpened:!1,currentTab:0})},[]),r=o.attachmentPlugin(),a=i.bookmarkPlugin(),l=s.thumbnailPlugin(e?e.thumbnailPlugin:{}),d=c.toolbarPlugin(e?e.toolbarPlugin:{}),p=r.Attachments,f=a.Bookmarks,v=l.Thumbnails,m=d.Toolbar,_=e?e.sidebarTabs:function(e){return e},b=[r,a,l,d]
return{attachmentPluginInstance:r,bookmarkPluginInstance:a,thumbnailPluginInstance:l,toolbarPluginInstance:d,activateTab:function(e){t.update("currentTab",e)},toggleTab:function(e){var r=t.get("currentTab")
t.update("isCurrentTabOpened",!t.get("isCurrentTabOpened")),r!==e&&t.update("currentTab",e)},install:function(e){b.forEach(function(t){t.install&&t.install(e)})},renderPageLayer:function(e){return u.createElement(u.Fragment,null,b.map(function(t,r){return t.renderPageLayer?u.createElement(u.Fragment,{key:r},t.renderPageLayer(e)):u.createElement(u.Fragment,{key:r},u.createElement(u.Fragment,null))}))},renderViewer:function(r){var a=r.slot
b.forEach(function(e){e.renderViewer&&(a=e.renderViewer(h(h({},r),{slot:a})))})
var o=a.subSlot&&a.subSlot.attrs?{className:a.subSlot.attrs.className,"data-testid":a.subSlot.attrs["data-testid"],ref:a.subSlot.attrs.ref,style:a.subSlot.attrs.style}:{}
return a.children=u.createElement("div",{className:"rpv-default-layout__container"},u.createElement("div",{"data-testid":"default-layout__main",className:n.classNames({"rpv-default-layout__main":!0,"rpv-default-layout__main--rtl":r.themeContext.direction===n.TextDirection.RightToLeft})},u.createElement(g,{attachmentTabContent:u.createElement(p,null),bookmarkTabContent:u.createElement(f,null),store:t,thumbnailTabContent:u.createElement(v,null),tabs:_}),u.createElement("div",{className:"rpv-default-layout__body","data-testid":"default-layout__body"},u.createElement("div",{className:"rpv-default-layout__toolbar"},e&&e.renderToolbar?e.renderToolbar(m):u.createElement(m,null)),u.createElement("div",h({},o),a.subSlot.children))),a.children),a.subSlot.attrs={},a.subSlot.children=u.createElement(u.Fragment,null),a},uninstall:function(e){b.forEach(function(t){t.uninstall&&t.uninstall(e)})},onDocumentLoad:function(r){b.forEach(function(e){e.onDocumentLoad&&e.onDocumentLoad(r)}),e&&e.setInitialTab&&e.setInitialTab(r.doc).then(function(e){t.update("currentTab",e),t.update("isCurrentTabOpened",!0)})},onAnnotationLayerRender:function(e){b.forEach(function(t){t.onAnnotationLayerRender&&t.onAnnotationLayerRender(e)})},onTextLayerRender:function(e){b.forEach(function(t){t.onTextLayerRender&&t.onTextLayerRender(e)})},onViewerStateChange:function(e){var t=e
return b.forEach(function(e){e.onViewerStateChange&&(t=e.onViewerStateChange(t))}),t}}},t.setInitialTabFromPageMode=function(e){return new Promise(function(t,r){e.getPageMode().then(function(e){if(e)switch(e){case n.PageMode.Attachments:t(2)
break
case n.PageMode.Bookmarks:t(1)
break
case n.PageMode.Thumbnails:t(0)
break
default:t(-1)}else t(-1)})})}},"92+K":function(e,t,r){"use strict"
var n=r("JPst"),a=r.n(n)()(function(e){return e[1]})
a.push([e.i,':root{--rpv-attachment__item--hover-background-color: rgba(0, 0, 0, 0.1);--rpv-attachment__item-color: #000}.rpv-core__viewer--dark{--rpv-attachment__item--hover-background-color: #2566e8;--rpv-attachment__item-color: #fff}.rpv-attachment__empty{height:100%;overflow:auto;padding:.5rem 0;text-align:center;width:100%}.rpv-attachment__empty--rtl{direction:rtl}.rpv-attachment__list{display:flex;height:100%;flex-direction:column;overflow:auto;padding:.5rem 0;width:100%}.rpv-attachment__list--rtl{direction:rtl}.rpv-attachment__item{align-items:center;background-color:rgba(0,0,0,0);border:none;color:var(--rpv-attachment__item-color);cursor:pointer;display:flex;padding:.5rem;text-align:left;width:100%}.rpv-attachment__item:focus{background-color:var(--rpv-attachment__item--hover-background-color);outline:0}.rpv-attachment__item:hover{background-color:var(--rpv-attachment__item--hover-background-color)}.rpv-attachment__loader{align-items:center;display:flex;justify-content:center;height:100%;width:100%}:root{--rpv-bookmark__item--hover-background-color: rgba(0, 0, 0, 0.1);--rpv-bookmark__item-color: #000}.rpv-core__viewer--dark{--rpv-bookmark__item--hover-background-color: #2566e8;--rpv-bookmark__item-color: #fff}.rpv-bookmark__item{align-items:center;color:var(--rpv-bookmark__item-color);cursor:pointer;display:flex;padding-bottom:.25rem;padding-right:.25rem;padding-top:.25rem}.rpv-bookmark__item:focus{background-color:var(--rpv-bookmark__item--hover-background-color);outline:0}.rpv-bookmark__item:hover{background-color:var(--rpv-bookmark__item--hover-background-color)}.rpv-bookmark__toggle{align-items:center;display:flex;height:1rem;margin-right:.25rem;width:1rem}.rpv-bookmark__title{flex-grow:1;flex-shrink:1;text-decoration:none}.rpv-bookmark__list{list-style-type:none;overflow:auto;margin:0;padding:0}.rpv-bookmark__loader{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.rpv-bookmark__empty{height:100%;overflow:auto;padding:.5rem 0;text-align:center;width:100%}.rpv-bookmark__empty--rtl{direction:rtl}.rpv-bookmark__container{height:100%;overflow:auto;padding:.5rem 0;width:100%}.rpv-bookmark__container--rtl{direction:rtl}:root{--rpv-core__annotation--link-hover-background-color: rgba(255, 255, 0, 0.2);--rpv-core__annotation-popup-wrapper-background-color: #faf089;--rpv-core__annotation-popup-wrapper-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--rpv-core__annotation-popup-content-border-top-color: #1a202c;--rpv-core__arrow-border-color: rgba(0, 0, 0, 0.3);--rpv-core__asking-password-color: #000;--rpv-core__asking-password-wrapper-background-color: #fff;--rpv-core__asking-password-wrapper-border-color: rgba(0, 0, 0, 0.3);--rpv-core__button-background-color: rgba(0, 0, 0, 0.3);--rpv-core__button-color: #000;--rpv-core__doc-error-background-color: #fff;--rpv-core__doc-error-text-background-color: #c02424;--rpv-core__doc-error-text-color: #fff;--rpv-core__doc-loading-background-color: #fff;--rpv-core__full-screen-target-background-color: #fff;--rpv-core__inner-page-background-color: #fff;--rpv-core__menu-divider-border-bottom-color: rgba(0, 0, 0, 0.3);--rpv-core__menu-item-color: #000;--rpv-core__menu-item--hover-background-color: rgba(0, 0, 0, 0.1);--rpv-core__menu-item--disabled-color: rgba(0, 0, 0, 0.3);--rpv-core__minimal-button-color: #000;--rpv-core__minimal-button--hover-background-color: rgba(0, 0, 0, 0.1);--rpv-core__minimal-button--disabled-color: rgba(0, 0, 0, 0.3);--rpv-core__minimal-button--selected-background-color: rgba(0, 0, 0, 0.1);--rpv-core__modal-body-background-color: #fff;--rpv-core__modal-body-border-color: rgba(0, 0, 0, 0.3);--rpv-core__modal-overlay-background-color: rgba(0, 0, 0, 0.5);--rpv-core__page-layer-box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);--rpv-core__popover-body-background-color: #fff;--rpv-core__popover-body-border-color: rgba(0, 0, 0, 0.3);--rpv-core__popover-body-color: #000;--rpv-core__primary-button-background-color: #2566e8;--rpv-core__primary-button-color: #fff;--rpv-core__progress-bar-background-color: rgba(0, 0, 0, 0.1);--rpv-core__progress-bar-progress-background-color: #2566e8;--rpv-core__progress-bar-progress-color: #fff;--rpv-core__separator-border-bottom-color: rgba(0, 0, 0, 0.3);--rpv-core__spinner-border-color: rgba(0, 0, 0, 0.4);--rpv-core__spinner-border-transparent-color: transparent;--rpv-core__splitter-background-color: transparent;--rpv-core__splitter--hover-background-color: rgba(0, 0, 0, 0.2);--rpv-core__text-layer-text--selection-background-color: rgb(0, 0, 255, 1);--rpv-core__text-layer-text--selection-color: transparent;--rpv-core__textbox-background-color: #fff;--rpv-core__textbox-border-color: rgba(0, 0, 0, 0.2);--rpv-core__textbox-color: #000;--rpv-core__tooltip-body-background-color: #000;--rpv-core__tooltip-body-color: #fff}.rpv-core__viewer--dark{--rpv-core__asking-password-background-color: #363636;--rpv-core__asking-password-color: #fff;--rpv-core__asking-password-wrapper-border-color: #191919;--rpv-core__asking-password-wrapper-background-color: #191919;--rpv-core__button-background-color: #171717;--rpv-core__button-color: #fff;--rpv-core__doc-error-background-color: #191919;--rpv-core__doc-error-text-background-color: #c02323;--rpv-core__doc-error-text-color: #fff;--rpv-core__doc-loading-background-color: #191919;--rpv-core__full-screen-target-background-color: #1a1a1a;--rpv-core__inner-page-background-color: #1a1a1a;--rpv-core__menu-divider-border-bottom-color: #000;--rpv-core__menu-item-color: #fff;--rpv-core__menu-item--hover-background-color: #2566e8;--rpv-core__menu-item--disabled-color: #5e5e5e;--rpv-core__minimal-button-color: #fff;--rpv-core__minimal-button--disabled-color: #5e5e5e;--rpv-core__minimal-button--hover-background-color: #191919;--rpv-core__minimal-button--selected-background-color: #1657bb;--rpv-core__modal-body-background-color: #363636;--rpv-core__primary-button-background-color: #2566e8;--rpv-core__popover-body-background-color: #363636;--rpv-core__popover-body-color: #fff;--rpv-core__progress-bar-background-color: #000;--rpv-core__separator-border-bottom-color: #000;--rpv-core__spinner-border-color: #fff;--rpv-core__splitter-background-color: #1a1a1a;--rpv-core__splitter--hover-background-color: #2566e8;--rpv-core__textbox-background-color: #121212;--rpv-core__textbox-border-color: #121212;--rpv-core__textbox-color: #fff;--rpv-core__tooltip-body-background-color: #414141;--rpv-core__tooltip-body-color: #fff}.rpv-core__annotation{position:absolute}.rpv-core__annotation-layer{z-index:1}.rpv-core__arrow{border-bottom:1px solid var(--rpv-core__arrow-border-color);border-left-color:var(--rpv-core__arrow-border-color);border-right:1px solid var(--rpv-core__arrow-border-color);border-top-color:var(--rpv-core__arrow-border-color);height:10px;position:absolute;width:10px;z-index:0}.rpv-core__arrow--tl{bottom:0;left:0;transform:translate(50%, 50%) rotate(45deg)}.rpv-core__arrow--tc{bottom:0;left:50%;transform:translate(-50%, 50%) rotate(45deg)}.rpv-core__arrow--tr{bottom:0;right:0;transform:translate(-50%, 50%) rotate(45deg)}.rpv-core__arrow--rt{left:0;top:0;transform:translate(-50%, 50%) rotate(135deg)}.rpv-core__arrow--rc{left:0;top:50%;transform:translate(-50%, -50%) rotate(135deg)}.rpv-core__arrow--rb{bottom:0;left:0;transform:translate(-50%, -50%) rotate(135deg)}.rpv-core__arrow--bl{left:0;top:0;transform:translate(50%, -50%) rotate(225deg)}.rpv-core__arrow--bc{left:50%;top:0;transform:translate(-50%, -50%) rotate(225deg)}.rpv-core__arrow--br{right:0;top:0;transform:translate(-50%, -50%) rotate(225deg)}.rpv-core__arrow--lt{right:0;top:0;transform:translate(50%, 50%) rotate(315deg)}.rpv-core__arrow--lc{right:0;top:50%;transform:translate(50%, -50%) rotate(315deg)}.rpv-core__arrow--lb{bottom:0;right:0;transform:translate(50%, -50%) rotate(315deg)}.rpv-core__asking-password{background-color:var(--rpv-core__asking-password-background-color);border-radius:.25rem;color:var(--rpv-core__asking-password-color);padding:2rem}.rpv-core__asking-password--rtl{direction:rtl}.rpv-core__asking-password-wrapper{align-items:center;background-color:var(--rpv-core__asking-password-wrapper-background-color);border:1px solid var(--rpv-core__asking-password-wrapper-border-color);display:flex;height:100%;justify-content:center;width:100%}.rpv-core__asking-password-message{margin:.5rem 0}.rpv-core__asking-password-body{align-items:center;display:flex;justify-content:center}.rpv-core__asking-password-input{width:15rem}.rpv-core__asking-password-input--ltr{margin-right:.5rem}.rpv-core__asking-password-input--rtl{margin-left:.5rem}.rpv-core__button{background-color:var(--rpv-core__button-background-color);border:none;border-radius:.25rem;color:var(--rpv-core__button-color);cursor:pointer;height:2rem;padding:0 1rem}.rpv-core__button--rtl{direction:rtl}.rpv-core__canvas-layer{direction:ltr;left:0;position:absolute;overflow:hidden;top:0}.rpv-core__doc-error{align-items:center;background-color:var(--rpv-core__doc-error-background-color);display:flex;justify-content:center;height:100%}.rpv-core__doc-error--rtl{direction:rtl}.rpv-core__doc-error-text{background-color:var(--rpv-core__doc-error-text-background-color);border-radius:.25rem;color:var(--rpv-core__doc-error-text-color);line-height:1.5;max-width:50%;padding:.5rem}.rpv-core__doc-loading{background-color:var(--rpv-core__doc-loading-background-color);align-items:center;display:flex;justify-content:center;height:100%;width:100%;min-height:inherit}.rpv-core__doc-loading--rtl{direction:rtl}.rpv-core__icon{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1;text-align:center}.rpv-core__icon--rtl{transform:scale(-1, 1)}.rpv-core__inner-container{min-height:inherit}.rpv-core__inner-pages{overflow:auto}.rpv-core__inner-pages--rtl{direction:rtl}.rpv-core__inner-pages--single{overflow:hidden}.rpv-core__inner-page-container--single{overflow:auto}.rpv-core__inner-page{background-color:var(--rpv-core__inner-page-background-color)}.rpv-core__inner-page--single{display:flex;align-items:center;justify-content:center}.rpv-core__inner-page--dual-even{display:flex;align-items:center;justify-content:flex-end}.rpv-core__inner-page--dual-odd{display:flex;align-items:center;justify-content:flex-start}.rpv-core__inner-page--dual-cover{display:flex;align-items:center;justify-content:center}.rpv-core__inner-page--dual-cover-odd{display:flex;align-items:center;justify-content:flex-end}.rpv-core__inner-page--dual-cover-even{display:flex;align-items:center;justify-content:flex-start}.rpv-core__annotation--link a{height:100%;left:0;position:absolute;top:0;width:100%}.rpv-core__annotation--link a:hover{background-color:var(--rpv-core__annotation--link-hover-background-color)}.rpv-core__menu{display:flex;flex-direction:column}.rpv-core__menu--rtl{direction:rtl;text-align:right}.rpv-core__menu-divider{border-bottom:1px solid var(--rpv-core__menu-divider-border-bottom-color);margin:.25rem 0}.rpv-core__menu-item{align-items:center;background-color:rgba(0,0,0,0);color:var(--rpv-core__menu-item-color);border:none;cursor:pointer;display:flex;justify-content:center;padding:.25rem 0;width:100%}.rpv-core__menu-item:focus{background-color:var(--rpv-core__menu-item--hover-background-color);outline:0}.rpv-core__menu-item:hover{background-color:var(--rpv-core__menu-item--hover-background-color)}.rpv-core__menu-item-icon{align-items:center;display:flex}.rpv-core__menu-item-icon--ltr{padding-left:1rem;padding-right:.5rem}.rpv-core__menu-item-icon--rtl{padding-left:.5rem;padding-right:1rem}.rpv-core__menu-item-label{flex-grow:1;flex-shrink:1;white-space:nowrap}.rpv-core__menu-item-label--ltr{padding-right:2rem}.rpv-core__menu-item-label--rtl{padding-left:2rem}.rpv-core__menu-item-check--ltr{padding-right:1rem}.rpv-core__menu-item-check--rtl{padding-left:1rem}.rpv-core__menu-item--disabled{color:var(--rpv-core__menu-item--disabled-color)}.rpv-core__menu-item--disabled:hover{background-color:rgba(0,0,0,0)}.rpv-core__menu-item--ltr{text-align:left}.rpv-core__menu-item--rtl{direction:rtl;text-align:right}.rpv-core__minimal-button{background-color:rgba(0,0,0,0);border:none;border-radius:.25rem;color:var(--rpv-core__minimal-button-color);cursor:pointer;height:2rem;padding:0 .5rem}.rpv-core__minimal-button:hover{background-color:var(--rpv-core__minimal-button--hover-background-color)}.rpv-core__minimal-button--disabled{color:var(--rpv-core__minimal-button--disabled-color)}.rpv-core__minimal-button--rtl{direction:rtl}.rpv-core__minimal-button--selected{background-color:var(--rpv-core__minimal-button--selected-background-color)}.rpv-core__modal-body{background-color:var(--rpv-core__modal-body-background-color);border:1px solid var(--rpv-core__modal-body-border-color);border-radius:.25rem;margin:1rem;max-width:32rem;overflow:auto}.rpv-core__modal-body--rtl{direction:rtl}.rpv-core__modal-overlay{background-color:var(--rpv-core__modal-overlay-background-color);bottom:0;left:0;position:fixed;right:0;top:0;z-index:9999;align-items:center;display:flex;justify-content:center}.rpv-core__page-layer{align-items:center;display:flex;justify-content:center;overflow:visible;position:relative}.rpv-core__page-layer::after{content:"";position:absolute;bottom:.25rem;left:.25rem;right:.25rem;top:.25rem;box-shadow:var(--rpv-core__page-layer-box-shadow)}.rpv-core__page-layer--single{margin:0 auto}.rpv-core__page-size-calculator{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.rpv-core__popover-body{background-color:var(--rpv-core__popover-body-background-color);border:1px solid var(--rpv-core__popover-body-border-color);border-radius:.25rem;color:var(--rpv-core__popover-body-color);left:0;padding:.5rem 0;position:absolute;top:-9999px;z-index:9999}.rpv-core__popover-body-arrow{background-color:var(--rpv-core__popover-body-background-color)}.rpv-core__popover-body--rtl{direction:rtl}.rpv-core__popover-overlay{bottom:0;left:0;position:fixed;right:0;top:0}.rpv-core__annotation-popup-wrapper{background-color:var(--rpv-core__annotation-popup-wrapper-background-color);box-shadow:var(--rpv-core__annotation-popup-wrapper-box-shadow);font-size:.75rem;padding:.25rem;word-break:break-word}.rpv-core__annotation-popup-wrapper--rtl{direction:rtl}.rpv-core__annotation-popup-title{font-weight:600;margin-bottom:.25rem}.rpv-core__annotation-popup-date{font-size:.5rem}.rpv-core__annotation-popup-content{border-top:1px solid var(--rpv-core__annotation-popup-content-border-top-color);padding:.25rem;max-height:16rem;overflow:auto}.rpv-core__primary-button{background-color:var(--rpv-core__primary-button-background-color);border:none;border-radius:.25rem;color:var(--rpv-core__primary-button-color);cursor:pointer;height:2rem;padding:0 1rem}.rpv-core__primary-button--rtl{direction:rtl}.rpv-core__progress-bar{background-color:var(--rpv-core__progress-bar-background-color);border-radius:9999px;padding:.125rem}.rpv-core__progress-bar--rtl{direction:rtl}.rpv-core__progress-bar-progress{align-items:center;background-color:var(--rpv-core__progress-bar-progress-background-color);border-radius:9999px;color:var(--rpv-core__progress-bar-progress-color);display:flex;font-size:.75rem;justify-content:center;height:.75rem}.rpv-core__separator{border-bottom:1px solid var(--rpv-core__separator-border-bottom-color)}.rpv-core__spinner{border-bottom:2px solid var(--rpv-core__spinner-border-transparent-color);border-left:2px solid var(--rpv-core__spinner-border-transparent-color);border-right:2px solid var(--rpv-core__spinner-border-color);border-top:2px solid var(--rpv-core__spinner-border-color);border-radius:9999px}.rpv-core__spinner--animating{animation-duration:.4s;animation-name:rpv-core__spinner-transform;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes rpv-core__spinner-transform{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.rpv-core__splitter{background-color:var(--rpv-core__splitter-background-color);cursor:ew-resize;height:100%;width:.25rem}.rpv-core__splitter:hover,.rpv-core__splitter--resizing{cursor:col-resize;background-color:var(--rpv-core__splitter--hover-background-color)}.rpv-core__splitter-body--resizing{cursor:col-resize}.rpv-core__splitter-sibling--resizing{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.rpv-core__textbox{background-color:var(--rpv-core__textbox-background-color);border:1px solid var(--rpv-core__textbox-border-color);box-sizing:border-box;border-radius:.25rem;color:var(--rpv-core__textbox-color);padding:0 .5rem;height:2rem;width:100%}.rpv-core__textbox--rtl{direction:rtl}.rpv-core__text-layer{left:0;position:absolute;top:0;height:100%;width:100%;opacity:.2;line-height:1;z-index:1}.rpv-core__text-layer span::-moz-selection{background-color:var(--rpv-core__text-layer-text--selection-background-color);color:var(--rpv-core__text-layer-text--selection-color)}.rpv-core__text-layer span::selection{background-color:var(--rpv-core__text-layer-text--selection-background-color);color:var(--rpv-core__text-layer-text--selection-color)}.rpv-core__text-layer br::-moz-selection{color:rgba(0,0,0,0)}.rpv-core__text-layer br::selection{color:rgba(0,0,0,0)}.rpv-core__text-layer-text{color:rgba(0,0,0,0);cursor:text;position:absolute;transform-origin:0% 0%;white-space:pre}.rpv-core__tooltip-body{background-color:var(--rpv-core__tooltip-body-background-color);border-radius:.25rem;color:var(--rpv-core__tooltip-body-color);left:0;max-width:20rem;position:absolute;text-align:center;top:-9999px;z-index:9999}.rpv-core__tooltip-body--rtl{direction:rtl}.rpv-core__tooltip-body-arrow{background-color:var(--rpv-core__tooltip-body-background-color)}.rpv-core__tooltip-body-content{padding:.5rem}.rpv-core__display--block{display:block}.rpv-core__display--hidden{display:none}@media(min-width: 640px){.rpv-core__display--hidden-small{display:none}.rpv-core__display--block-small{display:block}}@media(min-width: 768px){.rpv-core__display--hidden-medium{display:none}.rpv-core__display--block-medium{display:block}}@media(min-width: 1024px){.rpv-core__display--hidden-large{display:none}.rpv-core__display--block-large{display:block}}.rpv-core__viewer{min-height:inherit}:root{--rpv-thumbnail__container-background-color: #fff;--rpv-thumbnail__container-box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 8px 0px;--rpv-thumbnail__item--selected-background-color: rgba(0, 0, 0, 0.3)}.rpv-core__viewer--dark{--rpv-thumbnail__item--selected-background-color: #2566e8}.rpv-thumbnail__cover{align-items:center;display:flex;justify-content:center;height:100%;width:100%;min-height:inherit}.rpv-thumbnail__cover-inner{align-items:center;display:flex;justify-content:center;height:100%;width:100%;min-height:inherit}.rpv-thumbnail__cover-image{max-height:100%;max-width:100%}.rpv-thumbnail__cover-loader{align-items:center;display:flex;justify-content:center;height:100%;width:100%}.rpv-thumbnail__container{align-items:center;background:var(--rpv-thumbnail__container-background-color);box-shadow:var(--rpv-thumbnail__container-box-shadow);display:flex;justify-content:center;margin:0 auto;position:relative}.rpv-thumbnail__item{cursor:pointer}.rpv-thumbnail__item--single,.rpv-thumbnail__item--dual-cover{padding:.5rem}.rpv-thumbnail__item--dual-even,.rpv-thumbnail__item--dual-cover-odd{padding:.5rem 0 .5rem .5rem}.rpv-thumbnail__item--dual-odd,.rpv-thumbnail__item--dual-cover-even{padding:.5rem .5rem .5rem 0}.rpv-thumbnail__item--single:hover,.rpv-thumbnail__item--dual-cover:hover,.rpv-thumbnail__items--dual:hover .rpv-thumbnail__item,.rpv-thumbnail__items--dual-cover:hover .rpv-thumbnail__item{background-color:var(--rpv-thumbnail__item--selected-background-color)}.rpv-thumbnail__item:focus{outline:0}.rpv-thumbnail__label{font-size:.75em;text-align:center;padding:.25rem}.rpv-thumbnail__list{overflow:auto;padding:.5rem}.rpv-thumbnail__list--rtl{direction:rtl}.rpv-thumbnail__list--horizontal{align-items:center;display:flex;flex-direction:row;width:100%}.rpv-thumbnail__list--vertical{height:100%}.rpv-thumbnail__items{align-items:center;display:flex;justify-content:center}.rpv-thumbnail__items--selected .rpv-thumbnail__item{background-color:var(--rpv-thumbnail__item--selected-background-color)}.rpv-thumbnail__list-container{height:100%;width:100%}.rpv-thumbnail__loader{align-items:center;display:flex;height:100%;justify-content:center;width:100%}:root{--rpv-drop__area-background-color: #fff;--rpv-drop__area-body-border-color: rgba(0, 0, 0, 0.3);--rpv-drop__area-body-color: #000}.rpv-core__viewer--dark{--rpv-drop__area-background-color: #191919;--rpv-drop__area-body-border-color: #fff;--rpv-drop__area-body-color: #fff}.rpv-drop__area{background-color:var(--rpv-drop__area-background-color);bottom:0;left:0;position:absolute;right:0;top:0;padding:.5rem;z-index:9999}.rpv-drop__area-body{border:2px dashed var(--rpv-drop__area-body-border-color);color:var(--rpv-drop__area-body-color);font-size:1.5rem;align-items:center;display:flex;justify-content:center;height:100%}.rpv-drop__area-body--rtl{direction:rtl}:root{--rpv-full-screen__overlay-background-color: #fff}.rpv-core__viewer--dark{--rpv-full-screen__overlay-background-color: #1a1a1a}.rpv-full-screen__exit-button{bottom:0;padding:.5rem;position:fixed;z-index:2}.rpv-full-screen__exit-button--ltr{right:0}.rpv-full-screen__exit-button--rtl{left:0}.rpv-full-screen__overlay{position:fixed;top:0;left:0;height:100%;width:100%;align-items:center;display:flex;justify-content:center;background-color:var(--rpv-full-screen__overlay-background-color);z-index:1}.rpv-open__input-wrapper{position:relative}.rpv-open__input{display:none;bottom:0;cursor:pointer;height:100%;left:0;opacity:0;position:absolute;right:0;top:0;width:100%}.rpv-open__input::-webkit-file-upload-button{width:0}.rpv-page-navigation__current-page-input{margin:0 .25rem;text-align:right;width:3rem}:root{--rpv-print__progress-body-background-color: #fff;--rpv-print__progress-body-border-color: rgba(0, 0, 0, 0.3);--rpv-print__progress-body-color: #000}.rpv-core__viewer--dark{--rpv-print__progress-body-background-color: #363636;--rpv-print__progress-body-border-color: transparent;--rpv-print__progress-body-color: #fff}.rpv-print__permission-body{padding:1rem}.rpv-print__permission-footer{display:flex;justify-content:center;padding:0 1rem 1rem 0}.rpv-print__progress{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:9999}.rpv-print__progress-body{background-color:var(--rpv-print__progress-body-background-color);border:1px solid var(--rpv-print__progress-body-border-color);border-radius:.25rem;color:var(--rpv-print__progress-body-color);padding:1.5rem;text-align:center;width:15rem}.rpv-print__progress-body--rtl{direction:rtl}.rpv-print__progress-bar{margin-bottom:1rem}.rpv-print__progress-message{margin-bottom:.5rem}.rpv-print__zone{display:none}@media print{@page{margin:0}.rpv-print__html-printing{height:100%}.rpv-print__body-printing{height:100%;margin:0}.rpv-print__body-printing *{display:none}.rpv-print__zone{display:block;height:100%}.rpv-print__page{align-items:center;display:flex;flex-direction:column;justify-content:center;height:100%;width:100%;page-break-after:always;page-break-inside:avoid}.rpv-print__page img{display:block;max-height:100%;max-width:100%}}.rpv-properties__loader{text-align:center}.rpv-properties__modal{min-height:20rem;padding:.5rem 0}.rpv-properties__modal-section{padding:0 .5rem}.rpv-properties__modal-footer{display:flex;justify-content:center;margin-top:.5rem}.rpv-properties__item{align-items:flex-start;display:flex;margin:.5rem 0}.rpv-properties__item--rtl{direction:rtl}.rpv-properties__item-label{padding-right:.5rem;width:25%}.rpv-properties__item-value{flex:1}.rpv-search__highlights{left:0;position:absolute;top:0;height:100%;width:100%}.rpv-search__highlight{background-color:var(--rpv-search__highlight-background-color);border-radius:.25rem;position:absolute;z-index:1}.rpv-search__highlight--current{background-color:var(--rpv-search__highlight--current-background-color)}.rpv-search__popover{padding:0 .5rem}.rpv-search__popover-input-counter{align-items:center;display:flex;margin-bottom:.5rem;position:relative;width:12rem}.rpv-search__popover-counter{align-items:center;bottom:0;display:flex;position:absolute;top:0}.rpv-search__popover-counter--ltr{padding-right:.25rem;right:0}.rpv-search__popover-counter--rtl{left:0;padding-left:.25rem}.rpv-search__popover-label{align-items:center;cursor:pointer;display:flex;margin-bottom:.5rem}.rpv-search__popover-label-checkbox{cursor:pointer;margin-right:.25rem}.rpv-search__popover-footer{align-items:center;display:flex}.rpv-search__popover-footer-item{padding:0 .25rem}.rpv-search__popover-footer-button--ltr{margin-left:auto}.rpv-search__popover-footer-button--rtl{margin-right:auto}:root{--rpv-search__highlight-background-color: rgba(255, 255, 0, 0.4);--rpv-search__highlight--current-background-color: rgba(0, 128, 0, 0.4)}.rpv-selection-mode__grab{cursor:grab}.rpv-selection-mode__grab :not(input),.rpv-selection-mode__grab :not(select),.rpv-selection-mode__grab :not(textarea){cursor:grab !important}.rpv-selection-mode__grabbing{cursor:grabbing}.rpv-selection-mode__grabbing :not(input),.rpv-selection-mode__grabbing :not(select),.rpv-selection-mode__grabbing :not(textarea){cursor:grabbing !important}:root{--rpv-zoom__popover-target-arrow-border-color: rgba(0, 0, 0, 0.6)}.rpv-core__viewer--dark{--rpv-zoom__popover-target-arrow-border-color: #fff}.rpv-zoom__popover-target{align-items:center;color:var(--rpv-zoom__popover-target-color);display:flex}.rpv-zoom__popover-target-scale--ltr{margin-right:.25rem}.rpv-zoom__popover-target-scale--rtl{margin-left:.25rem}.rpv-zoom__popover-target-arrow{border-color:var(--rpv-zoom__popover-target-arrow-border-color) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:.5rem .25rem 0;height:0;width:0}:root{--rpv-toolbar__label--color: #000}.rpv-core__viewer--dark{--rpv-toolbar__label--color: #fff}.rpv-toolbar{align-items:center;display:flex;width:100%}.rpv-toolbar--rtl{direction:rtl}.rpv-toolbar__left{align-items:center;display:flex}.rpv-toolbar__center{align-items:center;display:flex;flex-grow:1;flex-shrink:1;justify-content:center}.rpv-toolbar__right{align-items:center;display:flex;margin-left:auto}.rpv-toolbar__item{align-items:center;display:flex;padding:0 .125rem}.rpv-toolbar__label{color:var(--rpv-toolbar__label--color)}:root{--rpv-default-layout__body-background-color: #fff;--rpv-default-layout__container-border-color: rgba(0, 0, 0, 0.3);--rpv-default-layout__toolbar-background-color: #eee;--rpv-default-layout__toolbar-border-bottom-color: rgba(0, 0, 0, 0.1);--rpv-default-layout__sidebar-border-color: rgba(0, 0, 0, 0.2);--rpv-default-layout__sidebar--opened-background-color: #fff;--rpv-default-layout__sidebar-headers-background-color: #eee;--rpv-default-layout__sidebar-content--opened-background-color: #fff;--rpv-default-layout__sidebar-content--opened-border-color: rgba(0, 0, 0, 0.2);--rpv-default-layout__sidebar-content--opened-color: #000}.rpv-core__viewer--dark{--rpv-default-layout__body-background-color: #1a1a1a;--rpv-default-layout__container-border-color: #454647;--rpv-default-layout__toolbar-background-color: #292929;--rpv-default-layout__toolbar-border-bottom-color: #000;--rpv-default-layout__sidebar-border-color: #000;--rpv-default-layout__sidebar--opened-background-color: #fff;--rpv-default-layout__sidebar-headers-background-color: #292929;--rpv-default-layout__sidebar-content--opened-background-color: #1a1a1a;--rpv-default-layout__sidebar-content--opened-border-color: #292929;--rpv-default-layout__sidebar-content--opened-color: #fff}.rpv-default-layout__container{border:1px solid var(--rpv-default-layout__container-border-color);box-sizing:border-box;height:100%;width:100%}.rpv-default-layout__toolbar{align-items:center;background-color:var(--rpv-default-layout__toolbar-background-color);border-bottom:1px solid var(--rpv-default-layout__toolbar-border-bottom-color);display:flex;left:0;position:absolute;top:0;height:2.5rem;width:100%;z-index:1}.rpv-default-layout__sidebar{display:flex;padding-top:2.5rem}.rpv-default-layout__sidebar--opened{bottom:0;left:0;position:absolute;top:0;width:12rem;background-color:var(--rpv-default-layout__sidebar--opened-background-color);z-index:1}.rpv-default-layout__sidebar--ltr{border-right:1px solid var(--rpv-default-layout__sidebar-border-color)}.rpv-default-layout__sidebar--rtl{border-left:1px solid var(--rpv-default-layout__sidebar-border-color)}.rpv-default-layout__main{display:flex;height:100%;position:relative}.rpv-default-layout__main--rtl{direction:rtl}.rpv-default-layout__body{background-color:var(--rpv-default-layout__body-background-color);flex:1;overflow:auto;padding-top:2.5rem}@media(min-width: 768px){.rpv-default-layout__sidebar--opened{width:16rem}}@media(min-width: 1024px){.rpv-default-layout__sidebar--opened{background:inherit;position:inherit;width:20rem;z-index:inherit}}.rpv-default-layout__sidebar-tabs{display:flex;height:100%;width:100%}.rpv-default-layout__sidebar-headers{background-color:var(--rpv-default-layout__sidebar-headers-background-color);padding:.25rem}.rpv-default-layout__sidebar-header{padding:.125rem}.rpv-default-layout__sidebar-content{display:none;flex-grow:1;flex-shrink:1}.rpv-default-layout__sidebar-content--opened{background-color:var(--rpv-default-layout__sidebar-content--opened-background-color);color:var(--rpv-default-layout__sidebar-content--opened-color);display:flex;overflow:hidden}.rpv-default-layout__sidebar-content--ltr{border-left:1px solid var(--rpv-default-layout__sidebar-content--opened-border-color)}.rpv-default-layout__sidebar-content--rtl{border-right:1px solid var(--rpv-default-layout__sidebar-content--opened-border-color)}\n',""]),t.a=a},"9dmg":function(e,t,r){"use strict"
e.exports=r("1lPa")},BHaz:function(e,t,r){"use strict"
e.exports=r("3QvN")},G2yI:function(t,r,n){"use strict"
var a=n("iD5t")
var o=function e(t){var r=Object.create(null)
return t&&Object.keys(t).forEach(function(e){if("default"!==e){var n=Object.getOwnPropertyDescriptor(t,e)
Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})}}),r.default=t,Object.freeze(r)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{ignoreDirection:!0,size:16},o.createElement("path",{d:"M3.434,10.537c0.141-0.438,0.316-0.864,0.523-1.274\n            M3.069,14.425C3.023,14.053,3,13.679,3,13.305 c0-0.291,0.014-0.579,0.041-0.863\n            M4.389,18.111c-0.341-0.539-0.623-1.112-0.843-1.711\n            M7.163,20.9 c-0.543-0.345-1.048-0.747-1.506-1.2\n            M10.98,22.248c-0.65-0.074-1.29-0.218-1.909-0.431\n            M10,4.25h2 c4.987,0.015,9.017,4.069,9.003,9.055c-0.013,4.581-3.456,8.426-8.008,8.945\n            M13.5,1.75L10,4.25l3.5,2.5"}))},s=function(){return o.createElement(a.Icon,{ignoreDirection:!0,size:16},o.createElement("path",{d:"M20.566,10.537c-0.141-0.438-0.316-0.864-0.523-1.274\n            M20.931,14.425C20.977,14.053,21,13.679,21,13.305 c0-0.291-0.014-0.579-0.041-0.863\n            M19.611,18.111c0.341-0.539,0.624-1.114,0.843-1.713\n            M16.837,20.9 c0.543-0.345,1.048-0.747,1.506-1.2\n            M13.02,22.248c0.65-0.074,1.29-0.218,1.909-0.431\n            M14,4.25h-2 c-4.987,0.015-9.017,4.069-9.003,9.055c0.013,4.581,3.456,8.426,8.008,8.945\n            M10.5,1.75l3.5,2.5l-3.5,2.5"}))},l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},c={left:0,top:8},u=function(e){var t=e.direction,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,l=n&&n.rotate?n.rotate.rotateBackward:"Rotate counterclockwise",u=n&&n.rotate?n.rotate.rotateForward:"Rotate clockwise",d=t===a.RotateDirection.Backward?l:u,h=t===a.RotateDirection.Backward?o.createElement(i,null):o.createElement(s,null)
return o.createElement(a.Tooltip,{ariaControlsSuffix:"rotate",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:d,testId:t===a.RotateDirection.Backward?"rotate__backward-button":"rotate__forward-button",onClick:r},h),content:function(){return d},offset:c})},d=function(e){var t=e.children,r=e.direction,n=e.store
return(t||function(e){return o.createElement(u,{direction:e.direction,onClick:e.onClick})})({direction:r,onClick:function(){var e=n.get("rotate")
e&&e(r)}})},h=function(e){var t=e.direction,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,l=n&&n.rotate?n.rotate.rotateBackward:"Rotate counterclockwise",c=n&&n.rotate?n.rotate.rotateForward:"Rotate clockwise",u=t===a.RotateDirection.Backward?l:c,d=t===a.RotateDirection.Backward?o.createElement(i,null):o.createElement(s,null)
return o.createElement(a.MenuItem,{icon:d,testId:t===a.RotateDirection.Backward?"rotate__backward-menu":"rotate__forward-menu",onClick:r},u)},p=function(e){var t=e.children,r=e.store
return t({onRotatePage:function(e,t){var n=r.get("rotatePage")
n&&n(e,t)}})}
r.RotateBackwardIcon=i,r.RotateForwardIcon=s,r.rotatePlugin=function(){var e=o.useMemo(function(){return a.createStore()},[]),t=function(t){return o.createElement(d,l({},t,{store:e}))}
return{install:function(t){e.update("rotate",t.rotate),e.update("rotatePage",t.rotatePage)},Rotate:t,RotateBackwardButton:function(){return o.createElement(t,{direction:a.RotateDirection.Backward},function(e){return o.createElement(u,l({},e))})},RotateBackwardMenuItem:function(e){return o.createElement(t,{direction:a.RotateDirection.Backward},function(t){return o.createElement(h,{direction:t.direction,onClick:function(){t.onClick(),e.onClick()}})})},RotateForwardButton:function(){return o.createElement(t,{direction:a.RotateDirection.Forward},function(e){return o.createElement(u,l({},e))})},RotateForwardMenuItem:function(e){return o.createElement(t,{direction:a.RotateDirection.Forward},function(t){return o.createElement(h,{direction:t.direction,onClick:function(){t.onClick(),e.onClick()}})})},RotatePage:function(t){return o.createElement(p,l({},t,{store:e}))}}}},G8bt:function(e,t,r){"use strict"
var n=r("LboF"),a=r.n(n),o=r("bU//"),i={injectType:"singletonStyleTag",insert:"head",singleton:!0}
a()(o.a,i),o.a.locals},LIuf:function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M19.5,15.106l2.4-2.4a1,1,0,0,0,0-1.414l-2.4-2.4V5.5a1,1,0,0,0-1-1H15.106l-2.4-2.4a1,1,0,0,0-1.414,0l-2.4,2.4H5.5a1,1,0,0,0-1,1V8.894l-2.4,2.4a1,1,0,0,0,0,1.414l2.4,2.4V18.5a1,1,0,0,0,1,1H8.894l2.4,2.4a1,1,0,0,0,1.414,0l2.4-2.4H18.5a1,1,0,0,0,1-1Z"}),o.createElement("path",{d:"M10,6.349a6,6,0,0,1,0,11.3,6,6,0,1,0,0-11.3Z"}))},s=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M19.491,15.106l2.4-2.4a1,1,0,0,0,0-1.414l-2.4-2.4V5.5a1,1,0,0,0-1-1H15.1L12.7,2.1a1,1,0,0,0-1.414,0l-2.4,2.4H5.491a1,1,0,0,0-1,1V8.894l-2.4,2.4a1,1,0,0,0,0,1.414l2.4,2.4V18.5a1,1,0,0,0,1,1H8.885l2.4,2.4a1,1,0,0,0,1.414,0l2.4-2.4h3.394a1,1,0,0,0,1-1Z"}),o.createElement("path",{d:"M11.491,6c4,0,6,2.686,6,6s-2,6-6,6Z"}))},l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},c={left:0,top:8},u=function(e){var t=e.onClick,r=o.useContext(a.ThemeContext),n=o.useContext(a.LocalizationContext).l10n,l="dark"===r.currentTheme,u=n&&n.theme?l?n.theme.switchLightTheme:n.theme.switchDarkTheme:l?"Switch to the light theme":"Switch to the dark theme"
return o.createElement(a.Tooltip,{ariaControlsSuffix:"theme-switch",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:u,testId:"theme__switch-button",onClick:t},l?o.createElement(s,null):o.createElement(i,null)),content:function(){return u},offset:c})},d=function(e){var t=e.children,r=o.useContext(a.ThemeContext)
return(t||function(e){return o.createElement(u,{onClick:e.onClick})})({onClick:function(){return r.setCurrentTheme("dark"===r.currentTheme?"light":"dark")}})},h=function(e){var t=e.onClick,r=o.useContext(a.ThemeContext),n=o.useContext(a.LocalizationContext).l10n,l="dark"===r.currentTheme,c=n&&n.theme?l?n.theme.switchLightTheme:n.theme.switchDarkTheme:l?"Switch to the light theme":"Switch to the dark theme"
return o.createElement(a.MenuItem,{icon:l?o.createElement(s,null):o.createElement(i,null),testId:"theme__switch-menu",onClick:t},c)}
r.DarkIcon=i,r.LightIcon=s,r.themePlugin=function(){var e=function(e){return o.createElement(d,l({},e))}
return{SwitchTheme:e,SwitchThemeButton:function(){return o.createElement(e,null,function(e){return o.createElement(u,l({},e))})},SwitchThemeMenuItem:function(t){return o.createElement(e,null,function(e){return o.createElement(h,{onClick:function(){e.onClick(),t.onClick()}})})}}}},M5AO:function(e,t,r){"use strict"
var n=r("iD5t"),a=r("ib0f"),o=r("q1tI"),i=r("hgie"),s=r("9dmg"),l=r("BHaz"),c=r("nbbA"),u=r("N3L9"),d=r("s2V/"),h=r("hsAc"),p=r("uX5q"),f=r("1CmR"),m=r("zORM"),g=r("ht9y")
var _=function v(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(o),b=function(){return _.createElement(n.Icon,{size:16},_.createElement("path",{d:"M12,0.5c1.381,0,2.5,1.119,2.5,2.5S13.381,5.5,12,5.5S9.5,4.381,9.5,3S10.619,0.5,12,0.5z\n            M12,9.5\n            c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5S9.5,13.381,9.5,12S10.619,9.5,12,9.5z\n            M12,18.5c1.381,0,2.5,1.119,2.5,2.5\n            s-1.119,2.5-2.5,2.5S9.5,22.381,9.5,21S10.619,18.5,12,18.5z"}))},y={left:0,top:8},k=function(e){var t=e.toolbarSlot,r=_.useContext(n.LocalizationContext).l10n,o=_.useContext(n.ThemeContext).direction===n.TextDirection.RightToLeft?n.Position.BottomLeft:n.Position.BottomRight,i=t.DownloadMenuItem,s=t.EnterFullScreenMenuItem,l=t.GoToFirstPageMenuItem,c=t.GoToLastPageMenuItem,u=t.GoToNextPageMenuItem,d=t.GoToPreviousPageMenuItem,h=t.OpenMenuItem,p=t.PrintMenuItem,f=t.RotateBackwardMenuItem,v=t.RotateForwardMenuItem,m=t.ShowPropertiesMenuItem,g=t.SwitchScrollModeMenuItem,k=t.SwitchSelectionModeMenuItem,S=t.SwitchViewModeMenuItem,C=t.SwitchThemeMenuItem
return _.createElement(n.Popover,{ariaControlsSuffix:"toolbar-more-actions",ariaHasPopup:"menu",position:o,target:function(e,t){var a=r&&r.toolbar?r.toolbar.moreActions:"More actions"
return _.createElement(n.Tooltip,{ariaControlsSuffix:"toolbar-more-actions",position:o,target:_.createElement(n.MinimalButton,{ariaLabel:a,isSelected:t,testId:"toolbar__more-actions-popover-target",onClick:e},_.createElement(b,null)),content:function(){return a},offset:y})},content:function(e){return _.createElement(n.Menu,null,_.createElement("div",{className:"rpv-core__display--block rpv-core__display--hidden-medium"},_.createElement(C,{onClick:e})),_.createElement("div",{className:"rpv-core__display--block rpv-core__display--hidden-medium"},_.createElement(s,{onClick:e})),_.createElement("div",{className:"rpv-core__display--block rpv-core__display--hidden-medium"},_.createElement(h,null)),_.createElement("div",{className:"rpv-core__display--block rpv-core__display--hidden-medium"},_.createElement(p,{onClick:e})),_.createElement("div",{className:"rpv-core__display--block rpv-core__display--hidden-medium"},_.createElement(i,{onClick:e})),_.createElement("div",{className:"rpv-core__display--block rpv-core__display--hidden-medium"},_.createElement(n.MenuDivider,null)),_.createElement(l,{onClick:e}),_.createElement("div",{className:"rpv-core__display--block rpv-core__display--hidden-medium"},_.createElement(d,{onClick:e})),_.createElement("div",{className:"rpv-core__display--block rpv-core__display--hidden-medium"},_.createElement(u,{onClick:e})),_.createElement(c,{onClick:e}),_.createElement(n.MenuDivider,null),_.createElement(v,{onClick:e}),_.createElement(f,{onClick:e}),_.createElement(n.MenuDivider,null),_.createElement(k,{mode:a.SelectionMode.Text,onClick:e}),_.createElement(k,{mode:a.SelectionMode.Hand,onClick:e}),_.createElement(n.MenuDivider,null),_.createElement(g,{mode:n.ScrollMode.Page,onClick:e}),_.createElement(g,{mode:n.ScrollMode.Vertical,onClick:e}),_.createElement(g,{mode:n.ScrollMode.Horizontal,onClick:e}),_.createElement(g,{mode:n.ScrollMode.Wrapped,onClick:e}),_.createElement(n.MenuDivider,null),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-small"},_.createElement(S,{mode:n.ViewMode.SinglePage,onClick:e})),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-small"},_.createElement(S,{mode:n.ViewMode.DualPage,onClick:e})),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-small"},_.createElement(S,{mode:n.ViewMode.DualPageWithCover,onClick:e})),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-small"},_.createElement(n.MenuDivider,null)),_.createElement(m,{onClick:e}))},offset:y,closeOnClickOutside:!0,closeOnEscape:!0})},S=function(){return(S=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},C=function(e){return function(t){var r=_.useMemo(function(){return e(t)},[]),a=_.useContext(n.ThemeContext).direction===n.TextDirection.RightToLeft,o=r.CurrentPageInput,i=r.Download,s=r.EnterFullScreen,l=r.GoToNextPage,c=r.GoToPreviousPage,u=r.NumberOfPages,d=r.Open,h=r.Print,p=r.ShowSearchPopover,f=r.SwitchTheme,v=r.Zoom,m=r.ZoomIn,g=r.ZoomOut
return _.createElement("div",{"data-testid":"toolbar",className:n.classNames({"rpv-toolbar":!0,"rpv-toolbar--rtl":a}),role:"toolbar","aria-orientation":"horizontal"},_.createElement("div",{className:"rpv-toolbar__left"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(p,null)),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-small"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(c,null))),_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(o,null),_.createElement("span",{className:"rpv-toolbar__label"},_.createElement(u,null))),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-small"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(l,null)))),_.createElement("div",{className:"rpv-toolbar__center"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(g,null)),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-small"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(v,null))),_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(m,null))),_.createElement("div",{className:"rpv-toolbar__right"},_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-medium"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(f,null))),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-medium"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(s,null))),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-medium"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(d,null))),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-medium"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(i,null))),_.createElement("div",{className:"rpv-core__display--hidden rpv-core__display--block-medium"},_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(h,null))),_.createElement("div",{className:"rpv-toolbar__item"},_.createElement(k,{toolbarSlot:r}))))}},P=function(e){var t=e.NumberOfPages
return Object.assign({},e,{NumberOfPages:function(){return _.createElement(_.Fragment,null,"/ ",_.createElement(t,null))}})},E=function(e){return(e.children||function(e){return C(P)(e)})(e.slot)}
t.MoreActionsPopover=k,t.MoreIcon=b,t.toolbarPlugin=function(e){var t=i.fullScreenPlugin(e?e.fullScreenPlugin:{}),r=s.getFilePlugin(e?e.getFilePlugin:{}),n=l.openPlugin(e?e.openPlugin:{}),o=c.pageNavigationPlugin(e?e.pageNavigationPlugin:{}),v=u.printPlugin(e?e.printPlugin:{}),b=d.propertiesPlugin(),y=h.rotatePlugin(),k=p.scrollModePlugin(),P=f.searchPlugin(e?e.searchPlugin:{}),x=a.selectionModePlugin(e?e.selectionModePlugin:{}),w=m.themePlugin(),A=g.zoomPlugin(e?e.zoomPlugin:{}),F=[t,r,n,o,v,b,y,k,P,x,w,A],M=_.useCallback(function(e){var a=t.EnterFullScreen,i=t.EnterFullScreenMenuItem,s=r.Download,l=r.DownloadMenuItem,c=n.Open,u=n.OpenMenuItem,d=o.CurrentPageInput,h=o.CurrentPageLabel,p=o.GoToFirstPage,f=o.GoToFirstPageMenuItem,m=o.GoToLastPage,g=o.GoToLastPageMenuItem,C=o.GoToNextPage,F=o.GoToNextPageMenuItem,M=o.GoToPreviousPage,T=o.GoToPreviousPageMenuItem,R=o.NumberOfPages,I=v.Print,O=v.PrintMenuItem,D=b.ShowProperties,L=b.ShowPropertiesMenuItem,N=y.Rotate,B=y.RotateBackwardMenuItem,j=y.RotateForwardMenuItem,G=k.SwitchScrollMode,z=k.SwitchScrollModeMenuItem,H=k.SwitchViewMode,W=k.SwitchViewModeMenuItem,V=P.Search,U=P.ShowSearchPopover,q=x.SwitchSelectionMode,K=x.SwitchSelectionModeMenuItem,X=w.SwitchTheme,Y=w.SwitchThemeMenuItem,J=A.CurrentScale,Z=A.Zoom,Q=A.ZoomIn,$=A.ZoomInMenuItem,ee=A.ZoomOut,te=A.ZoomOutMenuItem
return _.createElement(E,S({},e,{slot:{CurrentPageInput:d,CurrentPageLabel:h,CurrentScale:J,Download:s,DownloadMenuItem:l,EnterFullScreen:a,EnterFullScreenMenuItem:i,GoToFirstPage:p,GoToFirstPageMenuItem:f,GoToLastPage:m,GoToLastPageMenuItem:g,GoToNextPage:C,GoToNextPageMenuItem:F,GoToPreviousPage:M,GoToPreviousPageMenuItem:T,NumberOfPages:R,Open:c,OpenMenuItem:u,Print:I,PrintMenuItem:O,Rotate:N,RotateBackwardMenuItem:B,RotateForwardMenuItem:j,Search:V,ShowProperties:D,ShowPropertiesMenuItem:L,ShowSearchPopover:U,SwitchScrollMode:G,SwitchScrollModeMenuItem:z,SwitchSelectionMode:q,SwitchSelectionModeMenuItem:K,SwitchViewMode:H,SwitchViewModeMenuItem:W,SwitchTheme:X,SwitchThemeMenuItem:Y,Zoom:Z,ZoomIn:Q,ZoomInMenuItem:$,ZoomOut:ee,ZoomOutMenuItem:te}}))},[])
return{fullScreenPluginInstance:t,getFilePluginInstance:r,openPluginInstance:n,pageNavigationPluginInstance:o,printPluginInstance:v,propertiesPluginInstance:b,rotatePluginInstance:y,scrollModePluginInstance:k,searchPluginInstance:P,selectionModePluginInstance:x,themePluginInstance:w,zoomPluginInstance:A,install:function(e){F.forEach(function(t){t.install&&t.install(e)})},renderPageLayer:function(e){return _.createElement(_.Fragment,null,F.map(function(t,r){return t.renderPageLayer?_.createElement(_.Fragment,{key:r},t.renderPageLayer(e)):_.createElement(_.Fragment,{key:r})}))},renderViewer:function(e){var t=e.slot
return F.forEach(function(r){r.renderViewer&&(t=r.renderViewer(S(S({},e),{slot:t})))}),t},uninstall:function(e){F.forEach(function(t){t.uninstall&&t.uninstall(e)})},onDocumentLoad:function(e){F.forEach(function(t){t.onDocumentLoad&&t.onDocumentLoad(e)})},onAnnotationLayerRender:function(e){F.forEach(function(t){t.onAnnotationLayerRender&&t.onAnnotationLayerRender(e)})},onTextLayerRender:function(e){F.forEach(function(t){t.onTextLayerRender&&t.onTextLayerRender(e)})},onViewerStateChange:function(e){var t=e
return F.forEach(function(e){e.onViewerStateChange&&(t=e.onViewerStateChange(t))}),t},renderDefaultToolbar:C,Toolbar:M}}},MNFz:function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M12,1.001c6.075,0,11,4.925,11,11s-4.925,11-11,11s-11-4.925-11-11S5.925,1.001,12,1.001z\n            M14.5,17.005H13\n            c-0.552,0-1-0.448-1-1v-6.5c0-0.276-0.224-0.5-0.5-0.5H10\n            M11.745,6.504L11.745,6.504\n            M11.745,6.5c-0.138,0-0.25,0.112-0.25,0.25\n            S11.607,7,11.745,7s0.25-0.112,0.25-0.25S11.883,6.5,11.745,6.5"}))},s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},l=function(e){var t=e.doc,r=e.render,n=o.useState(),i=n[0],s=n[1]
return o.useEffect(function(){t.getMetadata().then(function(e){return Promise.resolve(e)}).then(function(e){return t.getDownloadInfo().then(function(t){return Promise.resolve({fileName:e.contentDispositionFilename||"",info:e.info,length:t.length})})}).then(function(e){s(e)})},[]),i?r(i):o.createElement("div",{className:"rpv-properties__loader"},o.createElement(a.Spinner,null))},c=function(e){var t=e.label,r=e.value,n=o.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft
return o.createElement("dl",{className:a.classNames({"rpv-properties__item":!0,"rpv-properties__item--rtl":n})},o.createElement("dt",{className:"rpv-properties__item-label"},t,":"),o.createElement("dd",{className:"rpv-properties__item-value"},r||"-"))},u=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"),d=function(e,t,r,n){var a=parseInt(e,10)
return a>=t&&a<=r?a:n},h=function(e){var t=e.doc,r=e.fileName,n=e.onToggle,i=o.useContext(a.LocalizationContext).l10n,s=function(e){var t=function(e){var t=u.exec(e)
if(!t)return null
var r=parseInt(t[1],10),n=d(t[2],1,12,1)-1,a=d(t[3],1,31,1),o=d(t[4],0,23,0),i=d(t[5],0,59,0),s=d(t[6],0,59,0),l=t[7]||"Z",c=d(t[8],0,23,0),h=d(t[9],0,59,0)
switch(l){case"-":o+=c,i+=h
break
case"+":o-=c,i-=h}return new Date(Date.UTC(r,n,a,o,i,s))}(e)
return t?"".concat(t.toLocaleDateString(),", ").concat(t.toLocaleTimeString()):""}
return o.createElement("div",{className:"rpv-properties__modal"},o.createElement(l,{doc:t,render:function(e){return o.createElement(o.Fragment,null,o.createElement("div",{className:"rpv-properties__modal-section"},o.createElement(c,{label:i&&i.properties?i.properties.fileName:"File name",value:e.fileName||(u=r,d=u.split("/").pop(),d?d.split("#")[0].split("?")[0]:u)}),o.createElement(c,{label:i&&i.properties?i.properties.fileSize:"File size",value:(n=e.length,l=Math.floor(Math.log(n)/Math.log(1024)),"".concat((n/Math.pow(1024,l)).toFixed(2)," ").concat(["B","kB","MB","GB","TB"][l]))})),o.createElement(a.Separator,null),o.createElement("div",{className:"rpv-properties__modal-section"},o.createElement(c,{label:i&&i.properties?i.properties.title:"Title",value:e.info.Title}),o.createElement(c,{label:i&&i.properties?i.properties.author:"Author",value:e.info.Author}),o.createElement(c,{label:i&&i.properties?i.properties.subject:"Subject",value:e.info.Subject}),o.createElement(c,{label:i&&i.properties?i.properties.keywords:"Keywords",value:e.info.Keywords}),o.createElement(c,{label:i&&i.properties?i.properties.creator:"Creator",value:e.info.Creator}),o.createElement(c,{label:i&&i.properties?i.properties.creationDate:"Creation date",value:s(e.info.CreationDate)}),o.createElement(c,{label:i&&i.properties?i.properties.modificationDate:"Modification date",value:s(e.info.ModDate)})),o.createElement(a.Separator,null),o.createElement("div",{className:"rpv-properties__modal-section"},o.createElement(c,{label:i&&i.properties?i.properties.pdfProducer:"PDF producer",value:e.info.Producer}),o.createElement(c,{label:i&&i.properties?i.properties.pdfVersion:"PDF version",value:e.info.PDFFormatVersion}),o.createElement(c,{label:i&&i.properties?i.properties.pageCount:"Page count",value:"".concat(t.numPages)})))
var n,l,u,d}}),o.createElement("div",{className:"rpv-properties__modal-footer"},o.createElement(a.Button,{onClick:n},i&&i.properties?i.properties.close:"Close")))},p={left:0,top:8},f=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=r&&r.properties?r.properties.showProperties:"Show properties"
return o.createElement(a.Tooltip,{ariaControlsSuffix:"properties",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:n,testId:"properties__button",onClick:t},o.createElement(i,null)),content:function(){return n},offset:p})},v=function(e){var t=e.children,r=e.store,n=function(e){var t=o.useState(e.get("doc")),r=t[0],n=t[1],a=function(e){n(e)}
return o.useEffect(function(){return e.subscribe("doc",a),function(){e.unsubscribe("doc",a)}},[]),{currentDoc:r}}(r).currentDoc,i=r.get("fileName")||"",l=t||function(e){return o.createElement(f,s({},e))}
return n?o.createElement(a.Modal,{ariaControlsSuffix:"properties",target:function(e){return l({onClick:e})},content:function(e){return o.createElement(h,{doc:n,fileName:i,onToggle:e})},closeOnClickOutside:!0,closeOnEscape:!0}):o.createElement(o.Fragment,null)},m=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=r&&r.properties?r.properties.showProperties:"Show properties"
return o.createElement(a.MenuItem,{icon:o.createElement(i,null),testId:"properties__menu",onClick:t},n)}
r.InfoIcon=i,r.propertiesPlugin=function(){var e=o.useMemo(function(){return a.createStore({fileName:""})},[]),t=function(t){return o.createElement(v,s({},t,{store:e}))}
return{onDocumentLoad:function(t){e.update("doc",t.doc)},onViewerStateChange:function(t){return e.update("fileName",t.file.name),t},ShowProperties:t,ShowPropertiesButton:function(){return o.createElement(v,{store:e})},ShowPropertiesMenuItem:function(e){return o.createElement(t,null,function(e){return o.createElement(m,s({},e))})}}}},N3L9:function(e,t,r){"use strict"
e.exports=r("fy7Q")},R0Eq:function(e,t,r){"use strict"
e.exports=r("rEcS")},SVB0:function(e,r,n){"use strict"
var a=n("iD5t")
var o,i=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},l=function(){return i.createElement(a.Icon,{size:16},i.createElement("path",{d:"M6.427,8.245A.5.5,0,0,1,6.862,7.5H17.138a.5.5,0,0,1,.435.749l-5.139,9a.5.5,0,0,1-.868,0Z"}))},c=function(){return i.createElement(a.Icon,{size:16},i.createElement("path",{d:"M9.248,17.572a.5.5,0,0,1-.748-.434V6.862a.5.5,0,0,1,.748-.434l8.992,5.138a.5.5,0,0,1,0,.868Z"}))},u=function(e){var t=e.bookmark,r=e.depth,n=e.doc,o=e.index,u=e.isBookmarkExpanded,h=e.numberOfSiblings,p=e.pathFromRoot,f=e.renderBookmarkItem,v=e.store,m=p?"".concat(p,".").concat(o):"".concat(o),g=i.useMemo(function(){return function(e){var t=e.count,r=e.items
if(t>=0)return!1
var n=r.length
if(0===n)return!1
for(var a=r.concat([]);a.length>0;){var o=a.shift(),i=o.items
o.count&&i&&o.count>0&&i.length>0&&(n+=i.length,a=a.concat(i))}return Math.abs(t)===n}(t)},[t]),_=v.get("bookmarkExpandedMap"),b=u?u({bookmark:t,doc:n,depth:r,index:o}):_.has(m)?_.get(m):!g,y=i.useState(b),k=y[0],S=y[1],C=t.items&&t.items.length>0,P=function(){var e=!k
v.updateCurrentValue("bookmarkExpandedMap",function(t){return t.set(m,e)}),S(e)},E=function(){var e=t.dest,r=v.get("jumpToDestination")
a.getDestination(n,e).then(function(e){r&&r(s({label:t.title},e))})},x=function(){C&&t.dest&&E()},w=function(){!C&&t.dest&&E()},A=function(e,t){return i.createElement("div",{className:"rpv-bookmark__item",style:{paddingLeft:"".concat(1.25*r,"rem")},onClick:e},t)},F=function(e,t){return C?i.createElement("span",{className:"rpv-bookmark__toggle","data-testid":"bookmark__toggle-".concat(r,"-").concat(o),onClick:P},k?e:t):i.createElement("span",{className:"rpv-bookmark__toggle"})},M=function(e){return t.url?i.createElement("a",{className:"rpv-bookmark__title",href:t.url,rel:"noopener noreferrer nofollow",target:t.newWindow?"_blank":""},t.title):i.createElement("div",{className:"rpv-bookmark__title","aria-label":t.title,onClick:e},t.title)}
return i.createElement("li",{"aria-expanded":k?"true":"false","aria-label":t.title,"aria-level":r+1,"aria-posinset":o+1,"aria-setsize":h,role:"treeitem",tabIndex:-1},f?f({bookmark:t,depth:r,hasSubItems:C,index:o,isExpanded:k,path:m,defaultRenderItem:A,defaultRenderTitle:M,defaultRenderToggle:F,onClickItem:w,onClickTitle:x,onToggleSubItems:P}):A(w,i.createElement(i.Fragment,null,F(i.createElement(l,null),i.createElement(c,null)),M(x))),C&&k&&i.createElement(d,{bookmarks:t.items,depth:r+1,doc:n,isBookmarkExpanded:u,isRoot:!1,pathFromRoot:m,renderBookmarkItem:f,store:v}))},d=function(e){var t=e.bookmarks,r=e.depth,n=void 0===r?0:r,a=e.doc,o=e.isBookmarkExpanded,s=e.isRoot,l=e.pathFromRoot,c=e.renderBookmarkItem,d=e.store
return i.createElement("ul",{className:"rpv-bookmark__list",role:s?"tree":"group",tabIndex:-1},t.map(function(e,r){return i.createElement(u,{bookmark:e,depth:n,doc:a,index:r,isBookmarkExpanded:o,key:r,numberOfSiblings:t.length,pathFromRoot:l,renderBookmarkItem:c,store:d})}))}
!function(e){e[e.Collapse=0]="Collapse",e[e.Expand=1]="Expand"}(o||(o={}))
var h=function(e){var t=e.bookmarks,r=e.doc,n=e.isBookmarkExpanded,a=e.renderBookmarkItem,s=e.store,l=i.useRef(),c=function(e){var t=l.current
if(t&&e.target instanceof HTMLElement&&t.contains(e.target))switch(e.key){case"ArrowDown":e.preventDefault(),h(function(e,t){return e.indexOf(t)+1})
break
case"ArrowLeft":e.preventDefault(),p(o.Collapse)
break
case"ArrowRight":e.preventDefault(),p(o.Expand)
break
case"ArrowUp":e.preventDefault,h(function(e,t){return e.indexOf(t)-1})
break
case"End":e.preventDefault(),h(function(e,t){return e.length-1})
break
case" ":case"Enter":case"Space":e.preventDefault(),u()
break
case"Home":e.preventDefault(),h(function(e,t){return 0})}},u=function(){var e=document.activeElement.closest(".rpv-bookmark__item").querySelector(".rpv-bookmark__title")
e&&e.click()},h=function(e){var t=l.current,r=[].slice.call(t.getElementsByClassName("rpv-bookmark__item"))
if(0!==r.length){var n=document.activeElement,a=r[Math.min(r.length-1,Math.max(0,e(r,n)))]
n.setAttribute("tabindex","-1"),a.setAttribute("tabindex","0"),a.focus()}},p=function(e){var t=l.current
if(0!==[].slice.call(t.getElementsByClassName("rpv-bookmark__item")).length){var r=document.activeElement.closest(".rpv-bookmark__item"),n=e===o.Collapse?"true":"false"
if(r&&r.parentElement.getAttribute("aria-expanded")===n){var a=r.querySelector(".rpv-bookmark__toggle")
a&&a.click()}}}
return i.useEffect(function(){return document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}},[]),i.useEffect(function(){var e=l.current
if(e){var t=[].slice.call(e.getElementsByClassName("rpv-bookmark__item"))
t.length>0&&(t[0].focus(),t[0].setAttribute("tabindex","0"))}},[]),i.createElement("div",{ref:l},i.createElement(d,{bookmarks:t,depth:0,doc:r,isBookmarkExpanded:n,isRoot:!0,pathFromRoot:"",renderBookmarkItem:a,store:s}))},p=function(e){var t=e.doc,r=e.isBookmarkExpanded,n=e.renderBookmarkItem,o=e.store,s=i.useContext(a.LocalizationContext).l10n,l=i.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft,c=i.useState({isLoaded:!1,items:[]}),u=c[0],d=c[1]
return i.useEffect(function(){d({isLoaded:!1,items:[]}),t.getOutline().then(function(e){d({isLoaded:!0,items:e||[]})})},[t]),u.isLoaded?0===u.items.length?i.createElement("div",{"data-testid":"bookmark__empty",className:a.classNames({"rpv-bookmark__empty":!0,"rpv-bookmark__empty--rtl":l})},s&&s.bookmark?s.bookmark.noBookmark:"There is no bookmark"):i.createElement("div",{"data-testid":"bookmark__container",className:a.classNames({"rpv-bookmark__container":!0,"rpv-bookmark__container--rtl":l})},i.createElement(h,{bookmarks:u.items,doc:t,isBookmarkExpanded:r,renderBookmarkItem:n,store:o})):i.createElement("div",{className:"rpv-bookmark__loader"},i.createElement(a.Spinner,null))},f=function(e){var t=e.isBookmarkExpanded,r=e.renderBookmarkItem,n=e.store,o=i.useState(n.get("doc")),s=o[0],l=o[1],c=function(e){l(e)}
return i.useEffect(function(){return n.subscribe("doc",c),function(){n.unsubscribe("doc",c)}},[]),s?i.createElement(p,{doc:s,isBookmarkExpanded:t,renderBookmarkItem:r,store:n}):i.createElement("div",{className:"rpv-bookmark__loader"},i.createElement(a.Spinner,null))}
r.DownArrowIcon=l,r.RightArrowIcon=c,r.bookmarkPlugin=function(){var e=i.useMemo(function(){return a.createStore({bookmarkExpandedMap:new Map})},[])
return{install:function(t){e.update("jumpToDestination",t.jumpToDestination)},onDocumentLoad:function(t){e.update("doc",t.doc)},Bookmarks:function(t){return i.createElement(f,{isBookmarkExpanded:null==t?void 0:t.isBookmarkExpanded,renderBookmarkItem:null==t?void 0:t.renderBookmarkItem,store:e})}}}},WYkr:function(e,t,r){"use strict"
e.exports=r("SVB0")},"bU//":function(e,t,r){"use strict"
var n=r("JPst"),a=r.n(n)()(function(e){return e[1]})
a.push([e.i,':root{--rpv-core__annotation--link-hover-background-color: rgba(255, 255, 0, 0.2);--rpv-core__annotation-popup-wrapper-background-color: #faf089;--rpv-core__annotation-popup-wrapper-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--rpv-core__annotation-popup-content-border-top-color: #1a202c;--rpv-core__arrow-border-color: rgba(0, 0, 0, 0.3);--rpv-core__asking-password-color: #000;--rpv-core__asking-password-wrapper-background-color: #fff;--rpv-core__asking-password-wrapper-border-color: rgba(0, 0, 0, 0.3);--rpv-core__button-background-color: rgba(0, 0, 0, 0.3);--rpv-core__button-color: #000;--rpv-core__doc-error-background-color: #fff;--rpv-core__doc-error-text-background-color: #c02424;--rpv-core__doc-error-text-color: #fff;--rpv-core__doc-loading-background-color: #fff;--rpv-core__full-screen-target-background-color: #fff;--rpv-core__inner-page-background-color: #fff;--rpv-core__menu-divider-border-bottom-color: rgba(0, 0, 0, 0.3);--rpv-core__menu-item-color: #000;--rpv-core__menu-item--hover-background-color: rgba(0, 0, 0, 0.1);--rpv-core__menu-item--disabled-color: rgba(0, 0, 0, 0.3);--rpv-core__minimal-button-color: #000;--rpv-core__minimal-button--hover-background-color: rgba(0, 0, 0, 0.1);--rpv-core__minimal-button--disabled-color: rgba(0, 0, 0, 0.3);--rpv-core__minimal-button--selected-background-color: rgba(0, 0, 0, 0.1);--rpv-core__modal-body-background-color: #fff;--rpv-core__modal-body-border-color: rgba(0, 0, 0, 0.3);--rpv-core__modal-overlay-background-color: rgba(0, 0, 0, 0.5);--rpv-core__page-layer-box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);--rpv-core__popover-body-background-color: #fff;--rpv-core__popover-body-border-color: rgba(0, 0, 0, 0.3);--rpv-core__popover-body-color: #000;--rpv-core__primary-button-background-color: #2566e8;--rpv-core__primary-button-color: #fff;--rpv-core__progress-bar-background-color: rgba(0, 0, 0, 0.1);--rpv-core__progress-bar-progress-background-color: #2566e8;--rpv-core__progress-bar-progress-color: #fff;--rpv-core__separator-border-bottom-color: rgba(0, 0, 0, 0.3);--rpv-core__spinner-border-color: rgba(0, 0, 0, 0.4);--rpv-core__spinner-border-transparent-color: transparent;--rpv-core__splitter-background-color: transparent;--rpv-core__splitter--hover-background-color: rgba(0, 0, 0, 0.2);--rpv-core__text-layer-text--selection-background-color: rgb(0, 0, 255, 1);--rpv-core__text-layer-text--selection-color: transparent;--rpv-core__textbox-background-color: #fff;--rpv-core__textbox-border-color: rgba(0, 0, 0, 0.2);--rpv-core__textbox-color: #000;--rpv-core__tooltip-body-background-color: #000;--rpv-core__tooltip-body-color: #fff}.rpv-core__viewer--dark{--rpv-core__asking-password-background-color: #363636;--rpv-core__asking-password-color: #fff;--rpv-core__asking-password-wrapper-border-color: #191919;--rpv-core__asking-password-wrapper-background-color: #191919;--rpv-core__button-background-color: #171717;--rpv-core__button-color: #fff;--rpv-core__doc-error-background-color: #191919;--rpv-core__doc-error-text-background-color: #c02323;--rpv-core__doc-error-text-color: #fff;--rpv-core__doc-loading-background-color: #191919;--rpv-core__full-screen-target-background-color: #1a1a1a;--rpv-core__inner-page-background-color: #1a1a1a;--rpv-core__menu-divider-border-bottom-color: #000;--rpv-core__menu-item-color: #fff;--rpv-core__menu-item--hover-background-color: #2566e8;--rpv-core__menu-item--disabled-color: #5e5e5e;--rpv-core__minimal-button-color: #fff;--rpv-core__minimal-button--disabled-color: #5e5e5e;--rpv-core__minimal-button--hover-background-color: #191919;--rpv-core__minimal-button--selected-background-color: #1657bb;--rpv-core__modal-body-background-color: #363636;--rpv-core__primary-button-background-color: #2566e8;--rpv-core__popover-body-background-color: #363636;--rpv-core__popover-body-color: #fff;--rpv-core__progress-bar-background-color: #000;--rpv-core__separator-border-bottom-color: #000;--rpv-core__spinner-border-color: #fff;--rpv-core__splitter-background-color: #1a1a1a;--rpv-core__splitter--hover-background-color: #2566e8;--rpv-core__textbox-background-color: #121212;--rpv-core__textbox-border-color: #121212;--rpv-core__textbox-color: #fff;--rpv-core__tooltip-body-background-color: #414141;--rpv-core__tooltip-body-color: #fff}.rpv-core__annotation{position:absolute}.rpv-core__annotation-layer{z-index:1}.rpv-core__arrow{border-bottom:1px solid var(--rpv-core__arrow-border-color);border-left-color:var(--rpv-core__arrow-border-color);border-right:1px solid var(--rpv-core__arrow-border-color);border-top-color:var(--rpv-core__arrow-border-color);height:10px;position:absolute;width:10px;z-index:0}.rpv-core__arrow--tl{bottom:0;left:0;transform:translate(50%, 50%) rotate(45deg)}.rpv-core__arrow--tc{bottom:0;left:50%;transform:translate(-50%, 50%) rotate(45deg)}.rpv-core__arrow--tr{bottom:0;right:0;transform:translate(-50%, 50%) rotate(45deg)}.rpv-core__arrow--rt{left:0;top:0;transform:translate(-50%, 50%) rotate(135deg)}.rpv-core__arrow--rc{left:0;top:50%;transform:translate(-50%, -50%) rotate(135deg)}.rpv-core__arrow--rb{bottom:0;left:0;transform:translate(-50%, -50%) rotate(135deg)}.rpv-core__arrow--bl{left:0;top:0;transform:translate(50%, -50%) rotate(225deg)}.rpv-core__arrow--bc{left:50%;top:0;transform:translate(-50%, -50%) rotate(225deg)}.rpv-core__arrow--br{right:0;top:0;transform:translate(-50%, -50%) rotate(225deg)}.rpv-core__arrow--lt{right:0;top:0;transform:translate(50%, 50%) rotate(315deg)}.rpv-core__arrow--lc{right:0;top:50%;transform:translate(50%, -50%) rotate(315deg)}.rpv-core__arrow--lb{bottom:0;right:0;transform:translate(50%, -50%) rotate(315deg)}.rpv-core__asking-password{background-color:var(--rpv-core__asking-password-background-color);border-radius:.25rem;color:var(--rpv-core__asking-password-color);padding:2rem}.rpv-core__asking-password--rtl{direction:rtl}.rpv-core__asking-password-wrapper{align-items:center;background-color:var(--rpv-core__asking-password-wrapper-background-color);border:1px solid var(--rpv-core__asking-password-wrapper-border-color);display:flex;height:100%;justify-content:center;width:100%}.rpv-core__asking-password-message{margin:.5rem 0}.rpv-core__asking-password-body{align-items:center;display:flex;justify-content:center}.rpv-core__asking-password-input{width:15rem}.rpv-core__asking-password-input--ltr{margin-right:.5rem}.rpv-core__asking-password-input--rtl{margin-left:.5rem}.rpv-core__button{background-color:var(--rpv-core__button-background-color);border:none;border-radius:.25rem;color:var(--rpv-core__button-color);cursor:pointer;height:2rem;padding:0 1rem}.rpv-core__button--rtl{direction:rtl}.rpv-core__canvas-layer{direction:ltr;left:0;position:absolute;overflow:hidden;top:0}.rpv-core__doc-error{align-items:center;background-color:var(--rpv-core__doc-error-background-color);display:flex;justify-content:center;height:100%}.rpv-core__doc-error--rtl{direction:rtl}.rpv-core__doc-error-text{background-color:var(--rpv-core__doc-error-text-background-color);border-radius:.25rem;color:var(--rpv-core__doc-error-text-color);line-height:1.5;max-width:50%;padding:.5rem}.rpv-core__doc-loading{background-color:var(--rpv-core__doc-loading-background-color);align-items:center;display:flex;justify-content:center;height:100%;width:100%;min-height:inherit}.rpv-core__doc-loading--rtl{direction:rtl}.rpv-core__icon{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1;text-align:center}.rpv-core__icon--rtl{transform:scale(-1, 1)}.rpv-core__inner-container{min-height:inherit}.rpv-core__inner-pages{overflow:auto}.rpv-core__inner-pages--rtl{direction:rtl}.rpv-core__inner-pages--single{overflow:hidden}.rpv-core__inner-page-container--single{overflow:auto}.rpv-core__inner-page{background-color:var(--rpv-core__inner-page-background-color)}.rpv-core__inner-page--single{display:flex;align-items:center;justify-content:center}.rpv-core__inner-page--dual-even{display:flex;align-items:center;justify-content:flex-end}.rpv-core__inner-page--dual-odd{display:flex;align-items:center;justify-content:flex-start}.rpv-core__inner-page--dual-cover{display:flex;align-items:center;justify-content:center}.rpv-core__inner-page--dual-cover-odd{display:flex;align-items:center;justify-content:flex-end}.rpv-core__inner-page--dual-cover-even{display:flex;align-items:center;justify-content:flex-start}.rpv-core__annotation--link a{height:100%;left:0;position:absolute;top:0;width:100%}.rpv-core__annotation--link a:hover{background-color:var(--rpv-core__annotation--link-hover-background-color)}.rpv-core__menu{display:flex;flex-direction:column}.rpv-core__menu--rtl{direction:rtl;text-align:right}.rpv-core__menu-divider{border-bottom:1px solid var(--rpv-core__menu-divider-border-bottom-color);margin:.25rem 0}.rpv-core__menu-item{align-items:center;background-color:rgba(0,0,0,0);color:var(--rpv-core__menu-item-color);border:none;cursor:pointer;display:flex;justify-content:center;padding:.25rem 0;width:100%}.rpv-core__menu-item:focus{background-color:var(--rpv-core__menu-item--hover-background-color);outline:0}.rpv-core__menu-item:hover{background-color:var(--rpv-core__menu-item--hover-background-color)}.rpv-core__menu-item-icon{align-items:center;display:flex}.rpv-core__menu-item-icon--ltr{padding-left:1rem;padding-right:.5rem}.rpv-core__menu-item-icon--rtl{padding-left:.5rem;padding-right:1rem}.rpv-core__menu-item-label{flex-grow:1;flex-shrink:1;white-space:nowrap}.rpv-core__menu-item-label--ltr{padding-right:2rem}.rpv-core__menu-item-label--rtl{padding-left:2rem}.rpv-core__menu-item-check--ltr{padding-right:1rem}.rpv-core__menu-item-check--rtl{padding-left:1rem}.rpv-core__menu-item--disabled{color:var(--rpv-core__menu-item--disabled-color)}.rpv-core__menu-item--disabled:hover{background-color:rgba(0,0,0,0)}.rpv-core__menu-item--ltr{text-align:left}.rpv-core__menu-item--rtl{direction:rtl;text-align:right}.rpv-core__minimal-button{background-color:rgba(0,0,0,0);border:none;border-radius:.25rem;color:var(--rpv-core__minimal-button-color);cursor:pointer;height:2rem;padding:0 .5rem}.rpv-core__minimal-button:hover{background-color:var(--rpv-core__minimal-button--hover-background-color)}.rpv-core__minimal-button--disabled{color:var(--rpv-core__minimal-button--disabled-color)}.rpv-core__minimal-button--rtl{direction:rtl}.rpv-core__minimal-button--selected{background-color:var(--rpv-core__minimal-button--selected-background-color)}.rpv-core__modal-body{background-color:var(--rpv-core__modal-body-background-color);border:1px solid var(--rpv-core__modal-body-border-color);border-radius:.25rem;margin:1rem;max-width:32rem;overflow:auto}.rpv-core__modal-body--rtl{direction:rtl}.rpv-core__modal-overlay{background-color:var(--rpv-core__modal-overlay-background-color);bottom:0;left:0;position:fixed;right:0;top:0;z-index:9999;align-items:center;display:flex;justify-content:center}.rpv-core__page-layer{align-items:center;display:flex;justify-content:center;overflow:visible;position:relative}.rpv-core__page-layer::after{content:"";position:absolute;bottom:.25rem;left:.25rem;right:.25rem;top:.25rem;box-shadow:var(--rpv-core__page-layer-box-shadow)}.rpv-core__page-layer--single{margin:0 auto}.rpv-core__page-size-calculator{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.rpv-core__popover-body{background-color:var(--rpv-core__popover-body-background-color);border:1px solid var(--rpv-core__popover-body-border-color);border-radius:.25rem;color:var(--rpv-core__popover-body-color);left:0;padding:.5rem 0;position:absolute;top:-9999px;z-index:9999}.rpv-core__popover-body-arrow{background-color:var(--rpv-core__popover-body-background-color)}.rpv-core__popover-body--rtl{direction:rtl}.rpv-core__popover-overlay{bottom:0;left:0;position:fixed;right:0;top:0}.rpv-core__annotation-popup-wrapper{background-color:var(--rpv-core__annotation-popup-wrapper-background-color);box-shadow:var(--rpv-core__annotation-popup-wrapper-box-shadow);font-size:.75rem;padding:.25rem;word-break:break-word}.rpv-core__annotation-popup-wrapper--rtl{direction:rtl}.rpv-core__annotation-popup-title{font-weight:600;margin-bottom:.25rem}.rpv-core__annotation-popup-date{font-size:.5rem}.rpv-core__annotation-popup-content{border-top:1px solid var(--rpv-core__annotation-popup-content-border-top-color);padding:.25rem;max-height:16rem;overflow:auto}.rpv-core__primary-button{background-color:var(--rpv-core__primary-button-background-color);border:none;border-radius:.25rem;color:var(--rpv-core__primary-button-color);cursor:pointer;height:2rem;padding:0 1rem}.rpv-core__primary-button--rtl{direction:rtl}.rpv-core__progress-bar{background-color:var(--rpv-core__progress-bar-background-color);border-radius:9999px;padding:.125rem}.rpv-core__progress-bar--rtl{direction:rtl}.rpv-core__progress-bar-progress{align-items:center;background-color:var(--rpv-core__progress-bar-progress-background-color);border-radius:9999px;color:var(--rpv-core__progress-bar-progress-color);display:flex;font-size:.75rem;justify-content:center;height:.75rem}.rpv-core__separator{border-bottom:1px solid var(--rpv-core__separator-border-bottom-color)}.rpv-core__spinner{border-bottom:2px solid var(--rpv-core__spinner-border-transparent-color);border-left:2px solid var(--rpv-core__spinner-border-transparent-color);border-right:2px solid var(--rpv-core__spinner-border-color);border-top:2px solid var(--rpv-core__spinner-border-color);border-radius:9999px}.rpv-core__spinner--animating{animation-duration:.4s;animation-name:rpv-core__spinner-transform;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes rpv-core__spinner-transform{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.rpv-core__splitter{background-color:var(--rpv-core__splitter-background-color);cursor:ew-resize;height:100%;width:.25rem}.rpv-core__splitter:hover,.rpv-core__splitter--resizing{cursor:col-resize;background-color:var(--rpv-core__splitter--hover-background-color)}.rpv-core__splitter-body--resizing{cursor:col-resize}.rpv-core__splitter-sibling--resizing{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.rpv-core__textbox{background-color:var(--rpv-core__textbox-background-color);border:1px solid var(--rpv-core__textbox-border-color);box-sizing:border-box;border-radius:.25rem;color:var(--rpv-core__textbox-color);padding:0 .5rem;height:2rem;width:100%}.rpv-core__textbox--rtl{direction:rtl}.rpv-core__text-layer{left:0;position:absolute;top:0;height:100%;width:100%;opacity:.2;line-height:1;z-index:1}.rpv-core__text-layer span::-moz-selection{background-color:var(--rpv-core__text-layer-text--selection-background-color);color:var(--rpv-core__text-layer-text--selection-color)}.rpv-core__text-layer span::selection{background-color:var(--rpv-core__text-layer-text--selection-background-color);color:var(--rpv-core__text-layer-text--selection-color)}.rpv-core__text-layer br::-moz-selection{color:rgba(0,0,0,0)}.rpv-core__text-layer br::selection{color:rgba(0,0,0,0)}.rpv-core__text-layer-text{color:rgba(0,0,0,0);cursor:text;position:absolute;transform-origin:0% 0%;white-space:pre}.rpv-core__tooltip-body{background-color:var(--rpv-core__tooltip-body-background-color);border-radius:.25rem;color:var(--rpv-core__tooltip-body-color);left:0;max-width:20rem;position:absolute;text-align:center;top:-9999px;z-index:9999}.rpv-core__tooltip-body--rtl{direction:rtl}.rpv-core__tooltip-body-arrow{background-color:var(--rpv-core__tooltip-body-background-color)}.rpv-core__tooltip-body-content{padding:.5rem}.rpv-core__display--block{display:block}.rpv-core__display--hidden{display:none}@media(min-width: 640px){.rpv-core__display--hidden-small{display:none}.rpv-core__display--block-small{display:block}}@media(min-width: 768px){.rpv-core__display--hidden-medium{display:none}.rpv-core__display--block-medium{display:block}}@media(min-width: 1024px){.rpv-core__display--hidden-large{display:none}.rpv-core__display--block-large{display:block}}.rpv-core__viewer{min-height:inherit}\n',""]),t.a=a},bacW:function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M2.32,2.966h19.452c0.552,0.001,1,0.449,0.999,1.001c0,0.182-0.05,0.36-0.144,0.516L12.9,20.552\n            c-0.286,0.472-0.901,0.624-1.373,0.338c-0.138-0.084-0.254-0.2-0.338-0.338L1.465,4.483C1.179,4.01,1.331,3.396,1.804,3.11\n            C1.96,3.016,2.138,2.966,2.32,2.966z"}))},s=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M0.541,5.627L11.666,18.2c0.183,0.207,0.499,0.226,0.706,0.043c0.015-0.014,0.03-0.028,0.043-0.043\n            L23.541,5.627"}))},l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},c=function(e){var t=o.useState(e.get("currentPage")||0),r=t[0],n=t[1],i=function(e){n(e)}
return a.useIsomorphicLayoutEffect(function(){return e.subscribe("currentPage",i),function(){e.unsubscribe("currentPage",i)}},[]),{currentPage:r}},u=function(e){var t=o.useState(e.get("numberOfPages")||0),r=t[0],n=t[1],a=function(e){n(e)}
return o.useEffect(function(){return e.subscribe("numberOfPages",a),function(){e.unsubscribe("numberOfPages",a)}},[]),{numberOfPages:r}},d=function(e){var t=e.store,r=o.useContext(a.LocalizationContext).l10n,n=o.useState("1"),i=n[0],s=n[1],l=c(t).currentPage,d=u(t).numberOfPages
o.useEffect(function(){return s("".concat(l+1))},[l])
var h=function(e){var r=t.get("jumpToPage")
r&&r(e)},p=r&&r.pageNavigation?r.pageNavigation.enterPageNumber:"Enter a page number"
return o.createElement("span",{className:"rpv-page-navigation__current-page-input"},o.createElement(a.TextBox,{ariaLabel:p,testId:"page-navigation__current-page-input",type:"text",value:i,onChange:s,onKeyDown:function(e){switch(e.key){case"ArrowUp":(n=l-1)>=0&&(s("".concat(n+1)),h(n))
break
case"ArrowDown":(r=l+1)<d&&(s("".concat(r+1)),h(r))
break
case"Enter":t=parseInt(i,10),""===i||t<1||t>d?s("".concat(l+1)):h(t-1)}var t,r,n}}))},h=function(e){var t=e.children,r=e.doc,n=a.useIsMounted(),i=o.useState({loading:!0,labels:[]}),s=i[0],l=i[1]
return o.useEffect(function(){r.getPageLabels().then(function(e){n.current&&l({loading:!1,labels:e||[]})})},[r.loadingTask.docId]),s.loading?o.createElement(o.Fragment,null):t(s.labels)},p=function(e){var t=e.children,r=e.store,n=function(e){var t=o.useState(e.get("doc")),r=t[0],n=t[1],a=function(e){n(e)}
return o.useEffect(function(){return e.subscribe("doc",a),function(){e.unsubscribe("doc",a)}},[]),r}(r),a=c(r).currentPage,i=u(r).numberOfPages,s=t||function(e){return o.createElement(o.Fragment,null,e.currentPage+1)}
return n?o.createElement(h,{doc:n},function(e){var t=e.length===i&&i>0?e[a]:""
return s({currentPage:a,numberOfPages:i,pageLabel:t})}):o.createElement(o.Fragment,null)},f=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M21.783,21.034H2.332c-0.552,0-1-0.448-1-1c0-0.182,0.05-0.361,0.144-0.517L11.2,3.448\n            c0.286-0.472,0.901-0.624,1.373-0.338c0.138,0.084,0.254,0.2,0.338,0.338l9.726,16.069c0.286,0.473,0.134,1.087-0.339,1.373\n            C22.143,20.984,21.965,21.034,21.783,21.034z"}))},v={left:0,top:8},m=function(e){var t=e.isDisabled,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.pageNavigation?n.pageNavigation.goToFirstPage:"First page"
return o.createElement(a.Tooltip,{ariaControlsSuffix:"page-navigation-first",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:i,isDisabled:t,testId:"page-navigation__first-button",onClick:r},o.createElement(f,null)),content:function(){return i},offset:v})},g=function(e){var t=e.children,r=e.store
return(t||function(e){return o.createElement(m,{isDisabled:e.isDisabled,onClick:e.onClick})})({isDisabled:0===c(r).currentPage,onClick:function(){var e=r.get("jumpToPage")
e&&e(0)}})},_=function(e){var t=e.isDisabled,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.pageNavigation?n.pageNavigation.goToFirstPage:"First page"
return o.createElement(a.MenuItem,{icon:o.createElement(f,null),isDisabled:t,testId:"page-navigation__first-menu",onClick:r},i)},b={left:0,top:8},y=function(e){var t=e.isDisabled,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,s=n&&n.pageNavigation?n.pageNavigation.goToLastPage:"Last page"
return o.createElement(a.Tooltip,{ariaControlsSuffix:"page-navigation-last",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:s,isDisabled:t,testId:"page-navigation__last-button",onClick:r},o.createElement(i,null)),content:function(){return s},offset:b})},k=function(e){var t=e.children,r=e.store,n=c(r).currentPage,a=u(r).numberOfPages
return(t||function(e){return o.createElement(y,{isDisabled:e.isDisabled,onClick:e.onClick})})({isDisabled:n+1>=a,onClick:function(){var e=r.get("jumpToPage")
e&&e(a-1)}})},S=function(e){var t=e.isDisabled,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,s=n&&n.pageNavigation?n.pageNavigation.goToLastPage:"Last page"
return o.createElement(a.MenuItem,{icon:o.createElement(i,null),isDisabled:t,testId:"page-navigation__last-menu",onClick:r},s)},C={left:0,top:8},P=function(e){var t=e.isDisabled,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.pageNavigation?n.pageNavigation.goToNextPage:"Next page"
return o.createElement(a.Tooltip,{ariaControlsSuffix:"page-navigation-next",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:i,isDisabled:t,testId:"page-navigation__next-button",onClick:r},o.createElement(s,null)),content:function(){return i},offset:C})},E=function(e){var t=e.children,r=e.store
return(t||function(e){return o.createElement(P,{onClick:e.onClick,isDisabled:e.isDisabled})})({isDisabled:c(r).currentPage+1>=u(r).numberOfPages,onClick:function(){var e=r.get("jumpToNextPage")
e&&e()}})},x=function(e){var t=e.isDisabled,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.pageNavigation?n.pageNavigation.goToNextPage:"Next page"
return o.createElement(a.MenuItem,{icon:o.createElement(s,null),isDisabled:t,testId:"page-navigation__next-menu",onClick:r},i)},w=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M23.535,18.373L12.409,5.8c-0.183-0.207-0.499-0.226-0.706-0.043C11.688,5.77,11.674,5.785,11.66,5.8\n            L0.535,18.373"}))},A={left:0,top:8},F=function(e){var t=e.isDisabled,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.pageNavigation?n.pageNavigation.goToPreviousPage:"Previous page"
return o.createElement(a.Tooltip,{ariaControlsSuffix:"page-navigation-previous",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:i,isDisabled:t,testId:"page-navigation__previous-button",onClick:r},o.createElement(w,null)),content:function(){return i},offset:A})},M=function(e){var t=e.store
return(e.children||function(e){return o.createElement(F,{isDisabled:e.isDisabled,onClick:e.onClick})})({isDisabled:c(t).currentPage<=0,onClick:function(){var e=t.get("jumpToPreviousPage")
e&&e()}})},T=function(e){var t=e.isDisabled,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.pageNavigation?n.pageNavigation.goToPreviousPage:"Previous page"
return o.createElement(a.MenuItem,{icon:o.createElement(w,null),isDisabled:t,testId:"page-navigation__previous-menu",onClick:r},i)},R=function(e){var t=e.children,r=e.store,n=u(r).numberOfPages
return t?t({numberOfPages:n}):o.createElement(o.Fragment,null,n)},I=function(e){var t=e.containerRef,r=e.numPages,n=e.store,i=c(n).currentPage,s=o.useRef(i)
s.current=i
var l=o.useRef(!1),u=function(){l.current=!0},d=function(){l.current=!1},h=function(e){var o=t.current,i=l.current||document.activeElement&&o.contains(document.activeElement)
if(o&&i){var c,u,d=e.altKey&&"ArrowDown"===e.key||!e.shiftKey&&!e.altKey&&"PageDown"===e.key,h=e.altKey&&"ArrowUp"===e.key||!e.shiftKey&&!e.altKey&&"PageUp"===e.key
if(d)return e.preventDefault(),c=n.get("jumpToPage"),u=s.current+1,void(c&&u<r&&c(u))
if(h)return e.preventDefault(),void function(){var e=n.get("jumpToPage"),t=s.current-1
e&&t>=0&&e(t)}()
if(a.isMac()?e.metaKey&&!e.ctrlKey:e.altKey)switch(e.key){case"ArrowLeft":e.preventDefault(),function(){var e=n.get("jumpToPreviousDestination")
e&&e()}()
break
case"ArrowRight":e.preventDefault(),function(){var e=n.get("jumpToNextDestination")
e&&e()}()}}}
return o.useEffect(function(){var e=t.current
if(e)return document.addEventListener("keydown",h),e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",d),function(){document.removeEventListener("keydown",h),e.removeEventListener("mouseenter",u),e.removeEventListener("mouseleave",d)}},[t.current]),o.createElement(o.Fragment,null)}
r.DownArrowIcon=i,r.NextIcon=s,r.PreviousIcon=w,r.UpArrowIcon=f,r.pageNavigationPlugin=function(e){var t=o.useMemo(function(){return Object.assign({},{enableShortcuts:!0},e)},[]),r=o.useMemo(function(){return a.createStore()},[]),n=function(e){return o.createElement(g,l({},e,{store:r}))},i=function(e){return o.createElement(k,l({},e,{store:r}))},s=function(e){return o.createElement(E,l({},e,{store:r}))},c=function(e){return o.createElement(M,l({},e,{store:r}))}
return{install:function(e){r.update("jumpToDestination",e.jumpToDestination),r.update("jumpToNextDestination",e.jumpToNextDestination),r.update("jumpToNextPage",e.jumpToNextPage),r.update("jumpToPage",e.jumpToPage),r.update("jumpToPreviousDestination",e.jumpToPreviousDestination),r.update("jumpToPreviousPage",e.jumpToPreviousPage)},renderViewer:function(e){var n=e.slot
if(!t.enableShortcuts)return n
var a={children:o.createElement(o.Fragment,null,o.createElement(I,{containerRef:e.containerRef,numPages:e.doc.numPages,store:r}),n.children)}
return l(l({},n),a)},onDocumentLoad:function(e){r.update("doc",e.doc),r.update("numberOfPages",e.doc.numPages)},onViewerStateChange:function(e){return r.update("currentPage",e.pageIndex),e},jumpToNextPage:function(){var e=r.get("jumpToNextPage")
e&&e()},jumpToPage:function(e){var t=r.get("jumpToPage")
t&&t(e)},jumpToPreviousPage:function(){var e=r.get("jumpToPreviousPage")
e&&e()},CurrentPageInput:function(){return o.createElement(d,{store:r})},CurrentPageLabel:function(e){return o.createElement(p,l({},e,{store:r}))},GoToFirstPage:n,GoToFirstPageButton:function(){return o.createElement(n,null,function(e){return o.createElement(m,l({},e))})},GoToFirstPageMenuItem:function(e){return o.createElement(n,null,function(t){return o.createElement(_,{isDisabled:t.isDisabled,onClick:function(){t.onClick(),e.onClick()}})})},GoToLastPage:i,GoToLastPageButton:function(){return o.createElement(i,null,function(e){return o.createElement(y,l({},e))})},GoToLastPageMenuItem:function(e){return o.createElement(i,null,function(t){return o.createElement(S,{isDisabled:t.isDisabled,onClick:function(){t.onClick(),e.onClick()}})})},GoToNextPage:s,GoToNextPageButton:function(){return o.createElement(s,null,function(e){return o.createElement(P,l({},e))})},GoToNextPageMenuItem:function(e){return o.createElement(s,null,function(t){return o.createElement(x,{isDisabled:t.isDisabled,onClick:function(){t.onClick(),e.onClick()}})})},GoToPreviousPage:c,GoToPreviousPageButton:function(){return o.createElement(c,null,function(e){return o.createElement(F,l({},e))})},GoToPreviousPageMenuItem:function(e){return o.createElement(c,null,function(t){return o.createElement(T,{isDisabled:t.isDisabled,onClick:function(){t.onClick(),e.onClick()}})})},NumberOfPages:function(e){return o.createElement(R,l({},e,{store:r}))}}}},epSw:function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M11.5 23.499L11.5 14.499"}),o.createElement("path",{d:"M7.5 18.499L11.5 14.499 15.5 18.499"}),o.createElement("path",{d:"M11.5 1.499L11.5 10.499"}),o.createElement("path",{d:"M7.5 6.499L11.5 10.499 15.5 6.499"}),o.createElement("path",{d:"M20.5 12.499L1.5 12.499"}))},s=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M0.5 12L23.5 12"}),o.createElement("path",{d:"M11.5 1L11.5 23"}),o.createElement("path",{d:"M8.5 4L11.5 1 14.5 4"}),o.createElement("path",{d:"M20.5 9L23.5 12 20.5 15"}),o.createElement("path",{d:"M3.5 15L0.5 12 3.5 9"}),o.createElement("path",{d:"M14.5 20L11.5 23 8.5 20"}))},l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},c={left:0,top:8},u=function(e){var t=e.enableShortcuts,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.fullScreen?n.fullScreen.enterFullScreen:"Full screen",l=t?a.isMac()?"Meta+Ctrl+F":"F11":""
return o.createElement(a.Tooltip,{ariaControlsSuffix:"full-screen-enter",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaKeyShortcuts:l,ariaLabel:i,isDisabled:!a.isFullScreenEnabled(),testId:"full-screen__enter-button",onClick:r},o.createElement(s,null)),content:function(){return i},offset:c})},d={left:0,top:8},h=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=r&&r.fullScreen?r.fullScreen.exitFullScreen:"Exit full screen"
return o.createElement(a.Tooltip,{ariaControlsSuffix:"full-screen-exit",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaKeyShortcuts:"Esc",ariaLabel:n,testId:"full-screen__exit-button-with-tooltip",onClick:t},o.createElement(i,null)),content:function(){return n},offset:d})},p=function(e,t){var r=o.useState(t.get("fullScreenMode")),n=r[0],i=r[1],s=o.useCallback(function(e){i(e)},[])
return o.useEffect(function(){return t.subscribe("fullScreenMode",s),function(){t.unsubscribe("fullScreenMode",s)}},[]),{enterFullScreen:function(){var r=t.get("getPagesContainer")
if(r){var n=e(r())
t.get("enterFullScreenMode")(n)}},exitFullScreen:function(){t.get("exitFullScreenMode")()},isFullScreen:n===a.FullScreenMode.Entering||n===a.FullScreenMode.EnteredCompletely}},f=function(e){var t=e.children,r=e.enableShortcuts,n=e.getFullScreenTarget,a=e.store,i=p(n,a),s=i.enterFullScreen,l=i.exitFullScreen,c=i.isFullScreen
return(t||function(e){return c?o.createElement(h,{onClick:e.onClick}):o.createElement(u,{enableShortcuts:r,onClick:e.onClick})})({onClick:c?l:s})},v=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=r&&r.fullScreen?r.fullScreen.enterFullScreen:"Full screen"
return o.createElement(a.MenuItem,{icon:o.createElement(s,null),isDisabled:!a.isFullScreenEnabled(),testId:"full-screen__enter-menu",onClick:t},n)},m=function(e){var t=e.onClick,r=o.useContext(a.LocalizationContext).l10n,n=o.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft,s=r&&r.fullScreen?r.fullScreen.exitFullScreen:"Exit full screen"
return o.createElement("div",{className:a.classNames({"rpv-full-screen__exit-button":!0,"rpv-full-screen__exit-button--ltr":!n,"rpv-full-screen__exit-button--rtl":n})},o.createElement(a.MinimalButton,{ariaLabel:s,testId:"full-screen__exit-button",onClick:t},o.createElement(i,null)))},g=function(e){var t=e.children,r=e.getFullScreenTarget,n=e.store,a=p(r,n),i=a.enterFullScreen,s=a.exitFullScreen,l=a.isFullScreen
return l&&(t||function(e){return o.createElement(m,{onClick:e.onClick})})({onClick:l?s:i})},_=function(e){var t=e.store,r=e.onEnterFullScreen,n=e.onExitFullScreen,i=o.useState(t.get("fullScreenMode")),s=i[0],l=i[1],c=o.useCallback(function(e){l(e)},[])
return o.useEffect(function(){switch(s){case a.FullScreenMode.EnteredCompletely:r(t.get("zoom"))
break
case a.FullScreenMode.Exited:n(t.get("zoom"))}},[s]),o.useEffect(function(){return t.subscribe("fullScreenMode",c),function(){t.unsubscribe("fullScreenMode",c)}},[]),(s===a.FullScreenMode.Entering||s===a.FullScreenMode.Entered)&&o.createElement("div",{className:"rpv-full-screen__overlay"},o.createElement(a.Spinner,null))},b=function(e){var t=e.containerRef,r=e.getFullScreenTarget,n=e.store,i=p(r,n).enterFullScreen,s=function(e){if(!e.shiftKey&&!e.altKey&&(a.isMac()?e.metaKey&&e.ctrlKey&&"f"===e.key:"F11"===e.key)){var r=t.current
r&&document.activeElement&&r.contains(document.activeElement)&&(e.preventDefault(),i())}}
return o.useEffect(function(){if(t.current)return document.addEventListener("keydown",s),function(){document.removeEventListener("keydown",s)}},[t.current]),o.createElement(o.Fragment,null)}
r.ExitFullScreenIcon=i,r.FullScreenIcon=s,r.fullScreenPlugin=function(e){var t=(null==e?void 0:e.getFullScreenTarget)||function(e){return e},r=o.useMemo(function(){return Object.assign({},{enableShortcuts:!0,onEnterFullScreen:function(){},onExitFullScreen:function(){}},e)},[]),n=o.useMemo(function(){return a.createStore({enterFullScreenMode:function(){},exitFullScreenMode:function(){},fullScreenMode:a.FullScreenMode.Normal,zoom:function(){}})},[]),i=function(e){return o.createElement(f,l({},e,{enableShortcuts:r.enableShortcuts,getFullScreenTarget:t,store:n}))},s=function(){return o.createElement(g,{getFullScreenTarget:t,store:n},null==e?void 0:e.renderExitFullScreenButton)}
return{install:function(e){n.update("enterFullScreenMode",e.enterFullScreenMode),n.update("exitFullScreenMode",e.exitFullScreenMode),n.update("getPagesContainer",e.getPagesContainer),n.update("zoom",e.zoom)},onViewerStateChange:function(e){return n.update("fullScreenMode",e.fullScreenMode),e},renderViewer:function(e){var a=e.slot
return a.subSlot&&(a.subSlot.children=o.createElement(o.Fragment,null,r.enableShortcuts&&o.createElement(b,{containerRef:e.containerRef,getFullScreenTarget:t,store:n}),o.createElement(_,{store:n,onEnterFullScreen:r.onEnterFullScreen,onExitFullScreen:r.onExitFullScreen}),o.createElement(s,null),a.subSlot.children)),a},EnterFullScreen:i,EnterFullScreenButton:function(){return o.createElement(i,null,function(e){return o.createElement(u,l({enableShortcuts:r.enableShortcuts},e))})},EnterFullScreenMenuItem:function(e){return o.createElement(i,null,function(t){return o.createElement(v,{onClick:function(){t.onClick(),e.onClick()}})})}}}},fy7Q:function(e,t,n){"use strict";(function(e){var a=n("iD5t"),o=n("q1tI"),i=n("i8i4")
var s,l=function r(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(o),c=function(){return l.createElement(a.Icon,{size:16},l.createElement("path",{d:"M7.5,19.499h9 M7.5,16.499h9 M5.5,16.5h-3c-1.103-0.003-1.997-0.897-2-2v-6c0.003-1.103,0.897-1.997,2-2h19\n            c1.103,0.003,1.997,0.897,2,2v6c-0.003,1.103-0.897,1.997-2,2h-3\n            M5.5,4.5v-4h9.586c0.265,0,0.52,0.105,0.707,0.293l2.414,2.414\n            C18.395,3.394,18.5,3.649,18.5,3.914V4.5\n            M18.5,22.5c0,0.552-0.448,1-1,1h-11c-0.552,0-1-0.448-1-1v-9h13V22.5z\n            M3.5,8.499\n            c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S2.948,8.499,3.5,8.499z\n            M14.5,0.499v4h4"}))},u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},d={left:0,top:8},h=function(e){var t=e.enableShortcuts,r=e.onClick,n=l.useContext(a.LocalizationContext).l10n,o=n&&n.print?n.print.print:"Print",i=t?a.isMac()?"Meta+P":"Ctrl+P":""
return l.createElement(a.Tooltip,{ariaControlsSuffix:"print",position:a.Position.BottomCenter,target:l.createElement(a.MinimalButton,{ariaKeyShortcuts:i,ariaLabel:o,testId:"print__button",onClick:r},l.createElement(c,null)),content:function(){return o},offset:d})}
!function(e){e.CheckingPermission="CheckingPermission",e.Inactive="Inactive",e.Preparing="Preparing",e.Cancelled="Cancelled",e.Ready="Ready"}(s||(s={}))
var p=function(e){var t=e.children,r=e.enableShortcuts,n=e.store
return(t||h)({enableShortcuts:r,onClick:function(){n.update("printStatus",s.CheckingPermission)}})},f=function(e){var t=e.doc,r=e.store,n=l.useContext(a.LocalizationContext).l10n,o=l.useState(!0),i=o[0],c=o[1]
return l.useEffect(function(){t.getPermissions().then(function(e){null===e||e.includes(4)||e.includes(2048)?r.update("printStatus",s.Preparing):c(!1)})},[]),i?l.createElement(l.Fragment,null):l.createElement(a.Modal,{ariaControlsSuffix:"print-permission",closeOnClickOutside:!1,closeOnEscape:!1,content:function(e){return l.createElement(l.Fragment,null,l.createElement("div",{className:"rpv-print__permission-body"},n&&n.print?n.print.disallowPrint:"The document does not allow to print"),l.createElement("div",{className:"rpv-print__permission-footer"},l.createElement(a.Button,{onClick:function(){e(),r.update("printStatus",s.Cancelled)}},n&&n.print?n.print.close:"Close")))},isOpened:!0})},v=function(e){var t=e.numLoadedPages,r=e.numPages,n=e.onCancel,o=l.useContext(a.LocalizationContext).l10n,i=l.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft,s=Math.floor(100*t/r)
return l.createElement("div",{className:"rpv-print__progress"},l.createElement("div",{className:a.classNames({"rpv-print__progress-body":!0,"rpv-print__progress-body--rtl":i})},l.createElement("div",{className:"rpv-print__progress-message"},o&&o.print?o.print.preparingDocument:"Preparing document ..."),l.createElement("div",{className:"rpv-print__progress-bar"},l.createElement(a.ProgressBar,{progress:s})),l.createElement(a.Button,{onClick:n},o&&o.print?o.print.cancel:"Cancel")))},m=function(t){var r=t.canvas,n=t.page,o=t.pageHeight,i=t.pageIndex,s=t.pageWidth,c=t.rotation,u=t.onLoad,d=a.useIsMounted(),h=l.useRef(),p=l.useState(""),f=p[0],v=p[1],m=l.useMemo(function(){return void 0!==e&&void 0!==e.env.JEST_WORKER_ID},[])
return l.useEffect(function(){var e=h.current
e&&e.cancel()
var t=150/72
r.height=Math.floor(o*t),r.width=Math.floor(s*t)
var a=r.getContext("2d")
a.save(),a.fillStyle="rgb(255, 255, 255)",a.fillRect(0,0,r.width,r.height),a.restore()
var i=n.getViewport({rotation:c,scale:1})
h.current=n.render({canvasContext:a,intent:"print",transform:[t,0,0,t,0,0],viewport:i}),h.current.promise.then(function(){"toBlob"in r&&"createObjectURL"in URL?r.toBlob(function(e){d.current&&v(URL.createObjectURL(e)),m&&u()}):(d.current&&v(r.toDataURL()),m&&u())},function(){})},[]),f&&l.createElement("div",{className:"rpv-print__page"},l.createElement("img",{"data-testid":"print__thumbnail-".concat(i),src:f,onLoad:function(){m||u()}}))},g=function(e){var t=e.canvas,r=e.doc,n=e.pageIndex,o=e.pageRotation,i=e.pageSize,s=e.rotation,c=e.shouldRender,u=e.onLoad,d=a.useIsMounted(),h=l.useState(null),p=h[0],f=h[1],v=Math.abs(s+o)%180==0
l.useEffect(function(){c&&a.getPage(r,n).then(function(e){d.current&&f(e)})},[c])
var g=(i.rotation+s+o)%360
return p&&l.createElement(m,{canvas:t,page:p,pageHeight:v?i.pageHeight:i.pageWidth,pageIndex:n,pageWidth:v?i.pageWidth:i.pageHeight,rotation:g,onLoad:u})},_=function(e){var t=e.doc,r=e.numLoadedPages,n=e.pagesRotation,a=e.pageSizes,o=e.printPages,c=e.printStatus,u=e.rotation,d=e.onCancel,h=e.onLoad,p=l.useMemo(function(){return document.createElement("canvas")},[]),f=l.useMemo(function(){var e=document.querySelector(".rpv-print__zone")
if(e)return e
var t=document.createElement("div")
return t.classList.add("rpv-print__zone"),t.setAttribute("data-testid","print__zone"),document.body.appendChild(t),t},[])
l.useEffect(function(){c===s.Ready&&(document.documentElement.classList.add("rpv-print__html-printing"),document.body.classList.add("rpv-print__body-printing"),window.print())
var e=function(){if(c===s.Ready){document.documentElement.classList.remove("rpv-print__html-printing"),document.body.classList.remove("rpv-print__body-printing")
var t=document.querySelectorAll(".rpv-print__zone")
t&&t.forEach(function(e){e.parentElement.removeChild(e)}),p.height=0,p.width=0,document.removeEventListener("mousemove",e),d()}}
return document.addEventListener("mousemove",e),function(){return document.removeEventListener("mousemove",e)}},[c])
var v=a[0].pageHeight,m=a[0].pageWidth
return i.createPortal(l.createElement(l.Fragment,null,o.map(function(e,o){return l.createElement(g,{key:e,canvas:p,doc:t,pageIndex:e,pageRotation:n.has(e)?n.get(e):0,pageSize:a[e],rotation:u,shouldRender:o===r,onLoad:h})}),l.createElement("style",{dangerouslySetInnerHTML:{__html:"@page { size: ".concat(m,"pt ").concat(v,"pt }")}})),f)},b=function(e){var t=e.doc,r=e.pagesRotation,n=e.pageSizes,a=e.renderProgressBar,o=e.rotation,i=e.setPages,c=e.store,u=l.useState(s.Inactive),d=u[0],h=u[1],p=l.useState(0),m=p[0],g=p[1],b=l.useMemo(function(){var e=t.numPages
return i(t).filter(function(t){return t>=0&&t<e})},[t,i]),y=b.length,k=function(){g(0),h(s.Inactive)},S=function(e){return h(e)}
return l.useEffect(function(){return c.subscribe("printStatus",S),function(){c.unsubscribe("printStatus",S)}},[]),l.createElement(l.Fragment,null,d===s.CheckingPermission&&l.createElement(f,{doc:t,store:c}),d===s.Preparing&&(a?a(m,y,k):l.createElement(v,{numLoadedPages:m,numPages:y,onCancel:k})),(d===s.Preparing||d===s.Ready)&&m<=y&&l.createElement(_,{doc:t,numLoadedPages:m,pagesRotation:r,pageSizes:n,printPages:b,printStatus:d,rotation:o,onCancel:k,onLoad:function(){var e=m+1
e<=y&&(g(e),e===y&&h(s.Ready))}}))},y=function(e){var t=e.onClick,r=l.useContext(a.LocalizationContext).l10n,n=r&&r.print?r.print.print:"Print"
return l.createElement(a.MenuItem,{icon:l.createElement(c,null),testId:"print__menu",onClick:t},n)},k=function(e){var t=e.containerRef,r=e.store,n=function(e){if(!e.shiftKey&&!e.altKey&&"p"===e.key&&(a.isMac()?e.metaKey:e.ctrlKey)){var n=t.current
n&&document.activeElement&&n.contains(document.activeElement)&&(e.preventDefault(),r.update("printStatus",s.Preparing))}}
return l.useEffect(function(){if(t.current)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}},[t.current]),l.createElement(l.Fragment,null)}
t.PrintIcon=c,t.getAllPagesNumbers=function(e){return Array(e.numPages).fill(0).map(function(e,t){return t})},t.getCustomPagesNumbers=function(e){return function(t){var r,n=[]
return e.replace(/\s+/g,"").split(",").forEach(function(e){var t,r,a=e.split("-").map(function(e){return parseInt(e,10)}).filter(function(e){return Number.isInteger(e)})
1===a.length?n.push(a[0]-1):2===a.length&&n.push.apply(n,(t=a[0]-1,r=a[1]-1,Array(r-t+1).fill(0).map(function(e,r){return t+r})))}),(r=n,r.filter(function(e){return r.indexOf(e)===r.lastIndexOf(e)})).filter(function(e){return e>=0&&e<t.numPages})}},t.getEvenPagesNumbers=function(e){return Array(e.numPages).fill(0).map(function(e,t){return t}).filter(function(e){return(e+1)%2==0})},t.getOddPagesNumbers=function(e){return Array(e.numPages).fill(0).map(function(e,t){return t}).filter(function(e){return(e+1)%2==1})},t.printPlugin=function(e){var t=l.useMemo(function(){return Object.assign({},{enableShortcuts:!0,setPages:function(e){return Array(e.numPages).fill(0).map(function(e,t){return t})}},e)},[]),r=l.useMemo(function(){return a.createStore({printStatus:s.Inactive})},[]),n=function(e){return l.createElement(p,u({enableShortcuts:t.enableShortcuts},e,{store:r}))}
return{print:function(){r.update("printStatus",s.CheckingPermission)},renderViewer:function(n){var a=n.slot,o={children:l.createElement(l.Fragment,null,t.enableShortcuts&&l.createElement(k,{containerRef:n.containerRef,store:r}),l.createElement(b,{doc:n.doc,pagesRotation:n.pagesRotation,pageSizes:n.pageSizes,renderProgressBar:null==e?void 0:e.renderProgressBar,rotation:n.rotation,setPages:t.setPages,store:r}),a.children)}
return u(u({},a),o)},Print:n,PrintButton:function(){return l.createElement(n,null,function(e){return l.createElement(h,u({},e))})},PrintMenuItem:function(e){return l.createElement(n,null,function(t){return l.createElement(y,{onClick:function(){t.onClick(),e.onClick()}})})},setPages:function(e){t.setPages=e}}}}).call(this,n("8oxB"))},"gIn+":function(e,t,r){"use strict"
var n=r("iD5t")
var a=function o(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(r("q1tI")),i=function(){return a.createElement(n.Icon,{size:16},a.createElement("rect",{x:"0.5",y:"0.497",width:"22",height:"22",rx:"1",ry:"1"}),a.createElement("line",{x1:"0.5",y1:"6.497",x2:"22.5",y2:"6.497"}),a.createElement("line",{x1:"11.5",y1:"6.497",x2:"11.5",y2:"22.497"}))},s=function(){return a.createElement(n.Icon,{size:16},a.createElement("rect",{x:"0.5",y:"0.497",width:"22",height:"22",rx:"1",ry:"1"}),a.createElement("line",{x1:"11.5",y1:"0.497",x2:"11.5",y2:"22.497"}))},l=function(){return a.createElement(n.Icon,{size:16},a.createElement("path",{d:"M6.5,21.5c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z\n            M14.5,21.5c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z\n            M22.5,21.5 c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z"}))},c=function(){return a.createElement(n.Icon,{size:16},a.createElement("rect",{x:"0.5",y:"0.497",width:"22",height:"22",rx:"1",ry:"1"}))},u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},d=function(e,t){e.get("switchScrollMode")(t)
var r=e.get("viewMode")
t!==n.ScrollMode.Horizontal&&t!==n.ScrollMode.Wrapped||r===n.ViewMode.SinglePage||e.get("switchViewMode")(n.ViewMode.SinglePage)},h=function(){return a.createElement(n.Icon,{size:16},a.createElement("path",{d:"M23.5,5.5c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V5.5z\n            M23.5,13.5c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V13.5z\n            M23.5,21.5 c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V21.5z"}))},p=function(){return a.createElement(n.Icon,{size:16},a.createElement("path",{d:"M10.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z\n            M23.5,9.5c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V9.5z\n            M10.5,22.5 c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z\n            M23.5,22.5c0,0.552-0.448,1-1,1 h-8c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1V22.5z"}))},f=function(e){var t=e.children,r=e.mode,o=e.onClick,i=a.useContext(n.LocalizationContext).l10n,s="",u=a.createElement(h,null)
switch(r){case n.ScrollMode.Horizontal:s=i&&i.scrollMode?i.scrollMode.horizontalScrolling:"Horizontal scrolling",u=a.createElement(l,null)
break
case n.ScrollMode.Page:s=i&&i.scrollMode?i.scrollMode.pageScrolling:"Page scrolling",u=a.createElement(c,null)
break
case n.ScrollMode.Wrapped:s=i&&i.scrollMode?i.scrollMode.wrappedScrolling:"Wrapped scrolling",u=a.createElement(p,null)
break
case n.ScrollMode.Vertical:default:s=i&&i.scrollMode?i.scrollMode.verticalScrolling:"Vertical scrolling",u=a.createElement(h,null)}return t({icon:u,label:s,onClick:o})},v={left:0,top:8},m=function(e){var t=e.isDisabled,r=e.isSelected,o=e.mode,i=e.onClick,s=""
switch(o){case n.ScrollMode.Horizontal:s="scroll-mode__horizontal-button"
break
case n.ScrollMode.Page:s="scroll-mode__page-button"
break
case n.ScrollMode.Wrapped:s="scroll-mode__wrapped-button"
break
case n.ScrollMode.Vertical:default:s="scroll-mode__vertical-button"}return a.createElement(f,{mode:o,onClick:i},function(e){return a.createElement(n.Tooltip,{ariaControlsSuffix:"scroll-mode-switch",position:n.Position.BottomCenter,target:a.createElement(n.MinimalButton,{ariaLabel:e.label,isDisabled:t,isSelected:r,testId:s,onClick:e.onClick},e.icon),content:function(){return e.label},offset:v})})},g=function(e){var t=a.useState(e.get("scrollMode")||n.ScrollMode.Vertical),r=t[0],o=t[1],i=function(e){o(e)}
return a.useEffect(function(){return e.subscribe("scrollMode",i),function(){e.unsubscribe("scrollMode",i)}},[]),{scrollMode:r}},_=function(e){var t=a.useState(e.get("viewMode")||n.ViewMode.SinglePage),r=t[0],o=t[1],i=function(e){o(e)}
return a.useEffect(function(){return e.subscribe("viewMode",i),function(){e.unsubscribe("viewMode",i)}},[]),{viewMode:r}},b=function(e){var t=e.children,r=e.mode,o=e.store,i=_(o).viewMode,s=g(o).scrollMode===r,l=(r===n.ScrollMode.Horizontal||r===n.ScrollMode.Wrapped)&&i!==n.ViewMode.SinglePage
return(t||function(e){return a.createElement(m,{isDisabled:l,isSelected:s,mode:e.mode,onClick:e.onClick})})({isDisabled:l,isSelected:s,mode:r,onClick:function(){d(o,r)}})},y=function(e){var t=e.isDisabled,r=e.isSelected,o=e.mode,i=e.onClick,s=""
switch(o){case n.ScrollMode.Horizontal:s="scroll-mode__horizontal-menu"
break
case n.ScrollMode.Page:s="scroll-mode__page-menu"
break
case n.ScrollMode.Wrapped:s="scroll-mode__wrapped-menu"
break
case n.ScrollMode.Vertical:default:s="scroll-mode__vertical-menu"}return a.createElement(f,{mode:o,onClick:i},function(e){return a.createElement(n.MenuItem,{checked:r,icon:e.icon,isDisabled:t,testId:s,onClick:e.onClick},e.label)})},k=function(e,t){e.get("switchViewMode")(t)
var r=e.get("scrollMode")
r!==n.ScrollMode.Horizontal&&r!==n.ScrollMode.Wrapped||t===n.ViewMode.SinglePage||e.get("switchScrollMode")(n.ScrollMode.Vertical)},S=function(e){var t=e.children,r=e.mode,o=e.onClick,l=a.useContext(n.LocalizationContext).l10n,u="",d=a.createElement(c,null)
switch(r){case n.ViewMode.DualPage:u=l&&l.scrollMode?l.scrollMode.dualPage:"Dual page",d=a.createElement(s,null)
break
case n.ViewMode.DualPageWithCover:u=l&&l.scrollMode?l.scrollMode.dualPageCover:"Dual page with cover",d=a.createElement(i,null)
break
case n.ViewMode.SinglePage:default:u=l&&l.scrollMode?l.scrollMode.singlePage:"Single page",d=a.createElement(c,null)}return t({icon:d,label:u,onClick:o})},C={left:0,top:8},P=function(e){var t=e.isDisabled,r=e.isSelected,o=e.mode,i=e.onClick,s=""
switch(o){case n.ViewMode.DualPage:s="view-mode__dual-button"
break
case n.ViewMode.DualPageWithCover:s="view-mode__dual-cover-button"
break
case n.ViewMode.SinglePage:default:s="view-mode__single-button"}return a.createElement(S,{mode:o,onClick:i},function(e){return a.createElement(n.Tooltip,{ariaControlsSuffix:"view-mode-switch",position:n.Position.BottomCenter,target:a.createElement(n.MinimalButton,{ariaLabel:e.label,isDisabled:t,isSelected:r,testId:s,onClick:e.onClick},e.icon),content:function(){return e.label},offset:C})})},E=function(e){var t=e.children,r=e.mode,o=e.store,i=_(o).viewMode,s=g(o).scrollMode,l=i===r,c=(s===n.ScrollMode.Horizontal||s===n.ScrollMode.Wrapped)&&r!==n.ViewMode.SinglePage
return(t||function(e){return a.createElement(P,{isDisabled:c,isSelected:l,mode:e.mode,onClick:e.onClick})})({isDisabled:c,isSelected:l,mode:r,onClick:function(){k(o,r)}})},x=function(e){var t=e.isDisabled,r=e.isSelected,o=e.mode,i=e.onClick,s=""
switch(o){case n.ViewMode.DualPage:s="view-mode__dual-menu"
break
case n.ViewMode.DualPageWithCover:s="view-mode__dual-cover-menu"
break
case n.ViewMode.SinglePage:default:s="view-mode__single-menu"}return a.createElement(S,{mode:o,onClick:i},function(e){return a.createElement(n.MenuItem,{checked:r,icon:e.icon,isDisabled:t,testId:s,onClick:e.onClick},e.label)})}
t.DualPageCoverViewModeIcon=i,t.DualPageViewModeIcon=s,t.HorizontalScrollingIcon=l,t.PageScrollingIcon=c,t.VerticalScrollingIcon=h,t.WrappedScrollingIcon=p,t.scrollModePlugin=function(){var e=a.useMemo(function(){return n.createStore({scrollMode:n.ScrollMode.Vertical,viewMode:n.ViewMode.SinglePage,switchScrollMode:function(){},switchViewMode:function(){}})},[]),t=function(t){return a.createElement(b,u({},t,{store:e}))},r=function(t){return a.createElement(E,u({},t,{store:e}))}
return{install:function(t){e.update("switchScrollMode",t.switchScrollMode),e.update("switchViewMode",t.switchViewMode)},onViewerStateChange:function(t){return e.update("scrollMode",t.scrollMode),e.update("viewMode",t.viewMode),t},switchScrollMode:function(t){d(e,t)},switchViewMode:function(t){k(e,t)},SwitchScrollMode:t,SwitchScrollModeButton:function(e){return a.createElement(t,{mode:e.mode},function(e){return a.createElement(m,{isDisabled:e.isDisabled,isSelected:e.isSelected,mode:e.mode,onClick:function(){e.onClick()}})})},SwitchScrollModeMenuItem:function(e){return a.createElement(t,{mode:e.mode},function(t){return a.createElement(y,{isDisabled:t.isDisabled,isSelected:t.isSelected,mode:t.mode,onClick:function(){t.onClick(),e.onClick()}})})},SwitchViewMode:r,SwitchViewModeButton:function(e){return a.createElement(r,{mode:e.mode},function(e){return a.createElement(P,{isDisabled:e.isDisabled,isSelected:e.isSelected,mode:e.mode,onClick:function(){e.onClick()}})})},SwitchViewModeMenuItem:function(e){return a.createElement(r,{mode:e.mode},function(t){return a.createElement(x,{isDisabled:t.isDisabled,isSelected:t.isSelected,mode:t.mode,onClick:function(){t.onClick(),e.onClick()}})})}}}},"gW/u":function(e,t,r){"use strict"
e.exports=r("4nco")},h7vu:function(e,r,n){"use strict"
var a=n("iD5t")
var o,i=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),s=function(){return i.createElement(a.Icon,{size:16},i.createElement("path",{d:"M11.5,5.5v-2C11.5,2.672,12.172,2,13,2s1.5,0.672,1.5,1.5v2 M14.5,11.5v-6C14.5,4.672,15.172,4,16,4\n            c0.828,0,1.5,0.672,1.5,1.5v3 M17.5,13V8.5C17.5,7.672,18.172,7,19,7s1.5,0.672,1.5,1.5v10c0,2.761-2.239,5-5,5h-3.335\n            c-1.712-0.001-3.305-0.876-4.223-2.321C6.22,18.467,4.083,14,4.083,14c-0.378-0.545-0.242-1.292,0.303-1.67\n            c0.446-0.309,1.044-0.281,1.458,0.07L8.5,15.5v-10C8.5,4.672,9.172,4,10,4s1.5,0.672,1.5,1.5v6"}))},l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)}
r.SelectionMode=void 0,(o=r.SelectionMode||(r.SelectionMode={})).Hand="Hand",o.Text="Text"
var c=function(){return i.createElement(a.Icon,{size:16},i.createElement("path",{d:"M13.675,11.671l2.941-2.941c0.195-0.196,0.195-0.512-0.001-0.707C16.563,7.971,16.5,7.931,16.43,7.906\n            L4.168,3.527C3.908,3.434,3.622,3.57,3.529,3.83c-0.039,0.109-0.039,0.228,0,0.336l4.379,12.262\n            c0.093,0.26,0.379,0.396,0.639,0.303c0.07-0.025,0.133-0.065,0.185-0.117l2.943-2.943l6.146,6.146c0.195,0.195,0.512,0.195,0.707,0\n            l1.293-1.293c0.195-0.195,0.195-0.512,0-0.707L13.675,11.671z"}))},u=function(e){var t=e.children,n=e.mode,o=e.onClick,l=i.useContext(a.LocalizationContext).l10n,u="",d=i.createElement(c,null)
switch(n){case r.SelectionMode.Hand:u=l&&l.selectionMode?l.selectionMode.handTool:"Hand tool",d=i.createElement(s,null)
break
case r.SelectionMode.Text:default:u=l&&l.selectionMode?l.selectionMode.textSelectionTool:"Text selection tool",d=i.createElement(c,null)}return t({icon:d,label:u,onClick:o})},d={left:0,top:8},h=function(e){var t=e.isSelected,n=e.mode,o=e.onClick,s=""
switch(n){case r.SelectionMode.Hand:s="selection-mode__hand-button"
break
case r.SelectionMode.Text:default:s="selection-mode__text-button"}return i.createElement(u,{mode:n,onClick:o},function(e){return i.createElement(a.Tooltip,{ariaControlsSuffix:"selection-mode-switch",position:a.Position.BottomCenter,target:i.createElement(a.MinimalButton,{ariaLabel:e.label,isSelected:t,testId:s,onClick:e.onClick},e.icon),content:function(){return e.label},offset:d})})},p=function(e){var t=e.children,r=e.mode,n=e.store,a=r===n.get("selectionMode")
return(t||function(e){return i.createElement(h,{isSelected:a,mode:e.mode,onClick:e.onClick})})({isSelected:a,mode:r,onClick:function(){return n.update("selectionMode",r)}})},f=function(e){var t=e.isSelected,n=e.mode,o=e.onClick,s=""
switch(n){case r.SelectionMode.Hand:s="selection-mode__hand-menu"
break
case r.SelectionMode.Text:default:s="selection-mode__text-menu"}return i.createElement(u,{mode:n,onClick:o},function(e){return i.createElement(a.MenuItem,{checked:t,icon:e.icon,testId:s,onClick:e.onClick},e.label)})},v=function(e){var t=e.store,n=i.useRef(null),a=i.useState(r.SelectionMode.Text),o=a[0],s=a[1],l=i.useRef({top:0,left:0,x:0,y:0}),c=function(e){var t=n.current
t&&(t.scrollTop=l.current.top-(e.clientY-l.current.y),t.scrollLeft=l.current.left-(e.clientX-l.current.x))},u=function(){var e=n.current
e&&(e.classList.add("rpv-selection-mode__grab"),e.classList.remove("rpv-selection-mode__grabbing"),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",u))},d=function(e){var t=n.current
t&&o!==r.SelectionMode.Text&&(t.classList.remove("rpv-selection-mode__grab"),t.classList.add("rpv-selection-mode__grabbing"),e.preventDefault(),e.stopPropagation(),l.current={left:t.scrollLeft,top:t.scrollTop,x:e.clientX,y:e.clientY},document.addEventListener("mousemove",c),document.addEventListener("mouseup",u))},h=function(e){n.current=e()},p=function(e){s(e)}
return i.useEffect(function(){var e=n.current
if(e)return o===r.SelectionMode.Hand?e.classList.add("rpv-selection-mode__grab"):e.classList.remove("rpv-selection-mode__grab"),e.addEventListener("mousedown",d),function(){e.removeEventListener("mousedown",d)}},[o]),i.useEffect(function(){return t.subscribe("getPagesContainer",h),t.subscribe("selectionMode",p),function(){t.unsubscribe("getPagesContainer",h),t.unsubscribe("selectionMode",p)}},[]),i.createElement(i.Fragment,null)}
r.HandToolIcon=s,r.TextSelectionIcon=c,r.selectionModePlugin=function(e){var t=i.useMemo(function(){return a.createStore()},[]),n=function(e){return i.createElement(p,l({},e,{store:t}))}
return{install:function(n){t.update("selectionMode",e&&e.selectionMode?e.selectionMode:r.SelectionMode.Text),t.update("getPagesContainer",n.getPagesContainer)},renderViewer:function(e){var r=e.slot
return r.subSlot&&r.subSlot.children&&(r.subSlot.children=i.createElement(i.Fragment,null,i.createElement(v,{store:t}),r.subSlot.children)),r},SwitchSelectionMode:n,SwitchSelectionModeButton:function(e){return i.createElement(n,{mode:e.mode},function(e){return i.createElement(h,{isSelected:e.isSelected,mode:e.mode,onClick:function(){e.onClick()}})})},SwitchSelectionModeMenuItem:function(e){return i.createElement(n,{mode:e.mode},function(t){return i.createElement(f,{isSelected:t.isSelected,mode:t.mode,onClick:function(){t.onClick(),e.onClick()}})})}}}},hgie:function(e,t,r){"use strict"
e.exports=r("epSw")},hsAc:function(e,t,r){"use strict"
e.exports=r("G2yI")},ht9y:function(e,t,r){"use strict"
e.exports=r("3vLG")},iD5t:function(e,t,r){"use strict"
e.exports=r("3CK9")},iLni:function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M0.541,5.627L11.666,18.2c0.183,0.207,0.499,0.226,0.706,0.043c0.015-0.014,0.03-0.028,0.043-0.043\n            L23.541,5.627"}))},s=function(){return o.createElement(a.Icon,{size:16},o.createElement("path",{d:"M23.535,18.373L12.409,5.8c-0.183-0.207-0.499-0.226-0.706-0.043C11.688,5.77,11.674,5.785,11.66,5.8\n            L0.535,18.373"}))},l=function(){return o.createElement(a.Icon,{ignoreDirection:!0,size:16},o.createElement("path",{d:"M10.5,0.5c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.5,10.5,0.5z\n            M23.5,23.5\n            l-5.929-5.929"}))},c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},u={keyword:"",regExp:new RegExp(" "),wholeWords:!1},d=function(e){return{left:"".concat(e.left,"%"),top:"".concat(e.top,"%"),height:"".concat(e.height,"%"),width:"".concat(e.width,"%")}},h=function(e){var t=e.index,r=e.area,n=e.onHighlightKeyword,i=o.useRef()
return a.useIsomorphicLayoutEffect(function(){var e=i.current
n&&e&&n({highlightEle:e,keyword:r.keyword})},[]),o.createElement("div",{className:"rpv-search__highlight","data-index":t,ref:i,style:d(r),title:r.keywordStr.trim()})},p=function(e){var t=e.parentNode
t&&t.removeChild(e)},f=function(e){var t=e.parentNode
if(t){var r=document.createRange()
r.selectNodeContents(e),function(e,t){p(e)
var r=t.parentNode
r&&r.insertBefore(e,t),p(t)}(r.extractContents(),e),t.normalize()}},v=function(e,t){return e.top<t.top?-1:e.top>t.top?1:e.left<t.left?-1:e.left>t.left?1:0},m=function(e){var t=e.numPages,r=e.pageIndex,n=e.renderHighlights,i=e.store,s=e.onHighlightKeyword,l=o.useRef(),c=o.useCallback(function(e){return o.createElement(o.Fragment,null,e.highlightAreas.map(function(e,t){return o.createElement(h,{index:t,key:t,area:e,onHighlightKeyword:s})}))},[]),p=n||c,m=o.useState(i.get("matchPosition")),g=m[0],_=m[1],b=o.useState(i.get("keyword")||[u]),y=b[0],k=b[1],S=o.useState({pageIndex:r,scale:1,status:a.LayerRenderStatus.PreRender}),C=S[0],P=S[1],E=o.useRef(null),x=o.useRef([]),w=o.useState([]),A=w[0],F=w[1],M=function(){return!0},T=o.useCallback(function(){return i.get("targetPageFilter")||M},[i.get("targetPageFilter")]),R=function(e){e&&e.length>0&&k(e)},I=function(e){return _(e)},O=function(e){if(e.has(r)){var t=e.get(r)
t&&P({ele:t.ele,pageIndex:r,scale:t.scale,status:t.status})}},D=function(){return 0===y.length||1===y.length&&""===y[0].keyword.trim()}
return o.useEffect(function(){if(!D()&&C.status===a.LayerRenderStatus.DidRender&&!x.current.length){var e=C.ele,t=[].slice.call(e.querySelectorAll(".rpv-core__text-layer-text")).map(function(e){return e.textContent}).reduce(function(e,t,r){return e.concat(t.split("").map(function(e,t){return{char:e,charIndexInSpan:t,spanIndex:r}}))},[{char:"",charIndexInSpan:0,spanIndex:0}]).slice(1)
x.current=t}},[y,C.status]),o.useEffect(function(){if(!D()&&C.ele&&C.status===a.LayerRenderStatus.DidRender&&T()({pageIndex:r,numPages:t})){var e=function(e){var n=x.current
if(0===n.length)return[]
var a=[],o=[].slice.call(e.querySelectorAll(".rpv-core__text-layer-text")),i=n.map(function(e){return e.char}).join("")
return y.forEach(function(s){var l=s.keyword
if(l.trim()){for(var c,u=-1===s.regExp.flags.indexOf("g")?new RegExp(s.regExp,"".concat(s.regExp.flags,"g")):s.regExp,d=[];null!==(c=u.exec(i));)d.push({keyword:u,startIndex:c.index,endIndex:u.lastIndex})
d.map(function(e){return{keyword:e.keyword,indexes:n.slice(e.startIndex,e.endIndex)}}).forEach(function(n){var i=n.indexes.reduce(function(e,t){return e[t.spanIndex]=(e[t.spanIndex]||[]).concat([t]),e},{})
Object.values(i).forEach(function(i){if(1!==i.length||""!==i[0].char.trim()){var c=s.wholeWords?i.slice(1,-1):i,u=function(e,n,a,o,i){var s=document.createRange(),l=o.firstChild
if(!l||l.nodeType!==Node.TEXT_NODE)return null
var c=l.textContent.length,u=i[0].charIndexInSpan,d=1===i.length?u:i[i.length-1].charIndexInSpan
if(u>c||d+1>c)return null
s.setStart(l,u),s.setEnd(l,d+1)
var h=document.createElement("span")
s.surroundContents(h)
var p=h.getBoundingClientRect(),v=a.getBoundingClientRect(),m=v.height,g=v.width,_=100*(p.left-v.left)/g,b=100*(p.top-v.top)/m,y=100*p.height/m,k=100*p.width/g
return f(h),{keyword:n,keywordStr:e,numPages:t,pageIndex:r,left:_,top:b,height:y,width:k,pageHeight:m,pageWidth:g}}(l,n.keyword,e,o[c[0].spanIndex],c)
u&&a.push(u)}})})}}),a.sort(v)}(C.ele)
F(e)}},[y,g,C.status,x.current]),o.useEffect(function(){D()&&C.ele&&C.status===a.LayerRenderStatus.DidRender&&F([])},[y,C.status]),o.useEffect(function(){if(0!==A.length){var e=l.current
if(g.pageIndex===r&&e&&C.status===a.LayerRenderStatus.DidRender){var t=e.querySelector('.rpv-search__highlight[data-index="'.concat(g.matchIndex,'"]'))
if(t){var n=function(e,t){for(var r=e.offsetTop,n=e.offsetLeft,a=e.parentElement;a&&a!==t;)r+=a.offsetTop,n+=a.offsetLeft,a=a.parentElement
return{left:n,top:r}}(t,e),o=n.left,s=n.top,c=i.get("jumpToDestination")
c&&(c({pageIndex:r,bottomOffset:(e.getBoundingClientRect().height-s)/C.scale,leftOffset:o/C.scale,scaleTo:C.scale}),E.current&&E.current.classList.remove("rpv-search__highlight--current"),E.current=t,t.classList.add("rpv-search__highlight--current"))}}}},[A,g]),o.useEffect(function(){return i.subscribe("keyword",R),i.subscribe("matchPosition",I),i.subscribe("renderStatus",O),function(){i.unsubscribe("keyword",R),i.unsubscribe("matchPosition",I),i.unsubscribe("renderStatus",O)}},[]),o.createElement("div",{className:"rpv-search__highlights","data-testid":"search__highlights-".concat(r),ref:l},p({getCssProperties:d,highlightAreas:A}))},g=function(e){var t,r=e.wholeWords?" ".concat(e.keyword," "):e.keyword,n=e.matchCase?"g":"gi"
return{keyword:e.keyword,regExp:new RegExp((t=r,t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),n),wholeWords:e.wholeWords||!1}},_=function(e,t,r){return e instanceof RegExp?{keyword:e.source,regExp:e,wholeWords:r||!1}:"string"==typeof e?""===e?u:g({keyword:e,matchCase:t||!1,wholeWords:r||!1}):(void 0!==t&&(e.matchCase=t),void 0!==r&&(e.wholeWords=r),g(e))},b=function(e){var t,r=e.get("initialKeyword"),n=o.useMemo(function(){if(r&&1===r.length){var e=_(r[0])
return{matchCase:-1===e.regExp.flags.indexOf("i"),wholeWords:e.wholeWords}}return{matchCase:!1,wholeWords:!1}},[]),i=function(e){var t=o.useRef(e.get("doc")),r=function(e){t.current=e}
return o.useEffect(function(){return e.subscribe("doc",r),function(){e.unsubscribe("doc",r)}},[]),t}(e),s=o.useState(r),l=s[0],c=s[1],d=o.useState([]),h=d[0],p=d[1],f=o.useState(0),v=f[0],m=f[1],g=o.useState(n.matchCase),b=g[0],y=g[1],k=o.useRef([]),S=o.useState(n.wholeWords),C=S[0],P=S[1],E=function(){return!0},x=o.useCallback(function(){return e.get("targetPageFilter")||E},[e.get("targetPageFilter")]),w=function(e){var t=h.length
if(0===l.length||0===t)return null
var r=e===t+1?1:Math.max(1,Math.min(t,e))
return m(r),F(h[r-1])},A=function(e){return c(""===e?[]:[e])},F=function(t){var r=e.get("jumpToPage")
return r&&r(t.pageIndex),e.update("matchPosition",{matchIndex:t.matchIndex,pageIndex:t.pageIndex}),t},M=function(t,r,n){var o=i.current
if(!o)return Promise.resolve([])
var s=o.numPages,l=t.map(function(e){return _(e,r,n)})
return e.update("keyword",l),m(0),p([]),new Promise(function(e,t){(0===k.current.length?function(){var e=i.current
if(!e)return Promise.resolve([])
var t=Array(e.numPages).fill(0).map(function(t,r){return a.getPage(e,r).then(function(e){return e.getTextContent()}).then(function(e){var t=e.items.map(function(e){return e.str||""}).join("")
return Promise.resolve({pageContent:t,pageIndex:r})})})
return Promise.all(t).then(function(e){return e.sort(function(e,t){return e.pageIndex-t.pageIndex}),Promise.resolve(e.map(function(e){return e.pageContent}))})}().then(function(e){return k.current=e,Promise.resolve(e)}):Promise.resolve(k.current)).then(function(t){var r=[]
t.forEach(function(e,t){x()({pageIndex:t,numPages:s})&&l.forEach(function(n){for(var a,o=0;null!==(a=n.regExp.exec(e));)r.push({keyword:n.regExp,matchIndex:o,pageIndex:t,pageText:e,startIndex:a.index,endIndex:n.regExp.lastIndex}),o++})}),p(r),r.length>0&&(m(1),F(r[0])),e(r)})})}
return o.useEffect(function(){k.current=[]},[i.current]),{clearKeyword:function(){e.update("keyword",[u]),A(""),m(0),p([]),y(!1),P(!1)},changeMatchCase:function(e){y(e),l.length>0&&M(l,e,C)},changeWholeWords:function(e){P(e),l.length>0&&M(l,b,e)},currentMatch:v,jumpToMatch:w,jumpToNextMatch:function(){return w(v+1)},jumpToPreviousMatch:function(){return w(v-1)},keywords:l,matchCase:b,numberOfMatches:h.length,wholeWords:C,search:function(){return M(l,b,C)},searchFor:M,setKeywords:c,keyword:0===l.length?"":(t=l[0],t instanceof RegExp?t.source:"string"==typeof t?t:t.keyword),setKeyword:A,setTargetPages:function(t){e.update("targetPageFilter",t)}}},y=function(e){var t=e.children,r=e.store,n=b(r),a=o.useState(!1),i=a[0],s=a[1],l=function(e){return s(!0)}
return o.useEffect(function(){return r.subscribe("doc",l),function(){r.unsubscribe("doc",l)}},[]),t(c(c({},n),{isDocumentLoaded:i}))},k=function(e){var t=e.containerRef,r=e.store,n=o.useRef(!1),i=function(){n.current=!0},s=function(){n.current=!1},l=function(e){var o=t.current
o&&(e.shiftKey||e.altKey||"f"!==e.key||(a.isMac()?e.metaKey&&!e.ctrlKey:e.ctrlKey)&&(n.current||document.activeElement&&o.contains(document.activeElement))&&(e.preventDefault(),r.update("areShortcutsPressed",!0)))}
return o.useEffect(function(){var e=t.current
if(e)return document.addEventListener("keydown",l),e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",s),function(){document.removeEventListener("keydown",l),e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",s)}},[t.current]),o.createElement(o.Fragment,null)},S={left:0,top:8},C=function(e){var t=e.store,r=e.onToggle,n=o.useContext(a.LocalizationContext).l10n,l=o.useContext(a.ThemeContext).direction,c=o.useState(!1),u=c[0],d=c[1],h=o.useState(!1),p=h[0],f=h[1],v=l===a.TextDirection.RightToLeft,m=b(t),g=m.clearKeyword,_=m.changeMatchCase,y=m.changeWholeWords,k=m.currentMatch,C=m.jumpToNextMatch,P=m.jumpToPreviousMatch,E=m.keyword,x=m.matchCase,w=m.numberOfMatches,A=m.wholeWords,F=m.search,M=m.setKeyword,T=function(e){d(!0),F().then(function(t){d(!1),f(!0),e&&e()})}
o.useEffect(function(){var e=t.get("initialKeyword")
e&&1===e.length&&E&&T(function(){t.update("initialKeyword",[])})},[])
var R=n&&n.search?n.search.enterToSearch:"Enter to search",I=n&&n.search?n.search.previousMatch:"Previous match",O=n&&n.search?n.search.nextMatch:"Next match",D=n&&n.search?n.search.close:"Close"
return o.createElement("div",{className:"rpv-search__popover"},o.createElement("div",{className:"rpv-search__popover-input-counter"},o.createElement(a.TextBox,{ariaLabel:R,autoFocus:!0,placeholder:R,type:"text",value:E,onChange:function(e){f(!1),M(e)},onKeyDown:function(e){"Enter"===e.key&&E&&(p?C():T())}}),o.createElement("div",{className:a.classNames({"rpv-search__popover-counter":!0,"rpv-search__popover-counter--ltr":!v,"rpv-search__popover-counter--rtl":v})},u&&o.createElement(a.Spinner,{testId:"search__popover-searching",size:"1rem"}),!u&&o.createElement("span",{"data-testid":"search__popover-num-matches"},k,"/",w))),o.createElement("label",{className:"rpv-search__popover-label"},o.createElement("input",{className:"rpv-search__popover-label-checkbox","data-testid":"search__popover-match-case",checked:x,type:"checkbox",onChange:function(e){f(!1),_(e.target.checked)}})," ",n&&n.search?n.search.matchCase:"Match case"),o.createElement("label",{className:"rpv-search__popover-label"},o.createElement("input",{className:"rpv-search__popover-label-checkbox",checked:A,"data-testid":"search__popover-whole-words",type:"checkbox",onChange:function(e){f(!1),y(e.target.checked)}})," ",n&&n.search?n.search.wholeWords:"Whole words"),o.createElement("div",{className:"rpv-search__popover-footer"},o.createElement("div",{className:"rpv-search__popover-footer-item"},o.createElement(a.Tooltip,{ariaControlsSuffix:"search-previous-match",position:v?a.Position.BottomRight:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:I,isDisabled:k<=1,onClick:P},o.createElement(s,null)),content:function(){return I},offset:S})),o.createElement("div",{className:"rpv-search__popover-footer-item"},o.createElement(a.Tooltip,{ariaControlsSuffix:"search-next-match",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaLabel:O,isDisabled:k>w-1,onClick:C},o.createElement(i,null)),content:function(){return O},offset:S})),o.createElement("div",{className:a.classNames({"rpv-search__popover-footer-button":!0,"rpv-search__popover-footer-button--ltr":!v,"rpv-search__popover-footer-button--rtl":v})},o.createElement(a.Button,{onClick:function(){r(),g()}},D))))},P=function(e){var t=e.children,r=e.onClick,n=o.useContext(a.LocalizationContext).l10n,i=n&&n.search?n.search.search:"Search"
return t({icon:o.createElement(l,null),label:i,onClick:r})},E={left:0,top:8},x=function(e){var t=e.enableShortcuts,r=e.store,n=e.onClick,i=t?a.isMac()?"Meta+F":"Ctrl+F":"",s=function(e){e&&n()}
return o.useEffect(function(){return r.subscribe("areShortcutsPressed",s),function(){r.unsubscribe("areShortcutsPressed",s)}},[]),o.createElement(P,{onClick:n},function(e){return o.createElement(a.Tooltip,{ariaControlsSuffix:"search-popover",position:a.Position.BottomCenter,target:o.createElement(a.MinimalButton,{ariaKeyShortcuts:i,ariaLabel:e.label,testId:"search__popover-button",onClick:n},e.icon),content:function(){return e.label},offset:E})})},w={left:0,top:8},A=function(e){var t=e.children,r=e.enableShortcuts,n=e.store,i=o.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft?a.Position.BottomRight:a.Position.BottomLeft,s=t||function(e){return o.createElement(x,c({enableShortcuts:r,store:n},e))}
return o.createElement(a.Popover,{ariaControlsSuffix:"search",lockScroll:!1,position:i,target:function(e){return s({onClick:e})},content:function(e){return o.createElement(C,{store:n,onToggle:e})},offset:w,closeOnClickOutside:!1,closeOnEscape:!0})},F=function(e){return Array.isArray(e)?e.map(function(e){return _(e)}):[_(e)]}
r.NextIcon=i,r.PreviousIcon=s,r.SearchIcon=l,r.searchPlugin=function(e){var t=o.useMemo(function(){return Object.assign({},{enableShortcuts:!0,onHighlightKeyword:function(){}},e)},[]),r=o.useMemo(function(){return a.createStore({initialKeyword:e&&e.keyword?Array.isArray(e.keyword)?e.keyword:[e.keyword]:[],keyword:e&&e.keyword?F(e.keyword):[u],matchPosition:{matchIndex:-1,pageIndex:-1},renderStatus:new Map})},[]),n=b(r),i=n.clearKeyword,s=n.jumpToMatch,l=n.jumpToNextMatch,d=n.jumpToPreviousMatch,h=n.searchFor,p=n.setKeywords,f=n.setTargetPages,v=function(e){return o.createElement(A,c({enableShortcuts:t.enableShortcuts},e,{store:r}))}
return{install:function(t){var n=e&&e.keyword?Array.isArray(e.keyword)?e.keyword:[e.keyword]:[],a=e&&e.keyword?F(e.keyword):[u]
r.update("initialKeyword",n),r.update("jumpToDestination",t.jumpToDestination),r.update("jumpToPage",t.jumpToPage),r.update("keyword",a)},renderPageLayer:function(n){return o.createElement(m,{key:n.pageIndex,numPages:n.doc.numPages,pageIndex:n.pageIndex,renderHighlights:null==e?void 0:e.renderHighlights,store:r,onHighlightKeyword:t.onHighlightKeyword})},renderViewer:function(e){var n=e.slot
return n.subSlot&&(n.subSlot.children=o.createElement(o.Fragment,null,t.enableShortcuts&&o.createElement(k,{containerRef:e.containerRef,store:r}),n.subSlot.children)),n},uninstall:function(e){var t=r.get("renderStatus")
t&&t.clear()},onDocumentLoad:function(e){r.update("doc",e.doc)},onTextLayerRender:function(e){var t=r.get("renderStatus")
t&&(t=t.set(e.pageIndex,e),r.update("renderStatus",t))},Search:function(e){return o.createElement(y,c({},e,{store:r}))},ShowSearchPopover:v,ShowSearchPopoverButton:function(){return o.createElement(v,null,function(e){return o.createElement(x,c({enableShortcuts:t.enableShortcuts,store:r},e))})},clearHighlights:function(){i()},highlight:function(e){var t=Array.isArray(e)?e:[e]
return p(t),h(t)},jumpToMatch:s,jumpToNextMatch:l,jumpToPreviousMatch:d,setTargetPages:f}}},ib0f:function(e,t,r){"use strict"
e.exports=r("h7vu")},kotU:function(e,t,r){"use strict"
e.exports=r("t5xF")},lRFz:function(module,exports,__webpack_require__){(function(process,Buffer,module){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__
function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _superPropGet(e,t,r,n){var a=_get(_getPrototypeOf(1&n?e.prototype:e),t,r)
return 2&n&&"function"==typeof a?function(e){return a.apply(r,e)}:a}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=_superPropBase(e,t)
if(n){var a=Object.getOwnPropertyDescriptor(n,t)
return a.get?a.get.call(arguments.length<3?e:r):a.value}}).apply(null,arguments)}function _superPropBase(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _readOnlyError(e){throw new TypeError('"'+e+'" is read-only')}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classPrivateMethodInitSpec(e,t){_checkPrivateRedeclaration(e,t),t.add(e)}function _classPrivateFieldInitSpec(e,t,r){_checkPrivateRedeclaration(e,t),t.set(e,r)}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldSet(e,t,r){return e.set(_assertClassBrand(e,t),r),r}function _classPrivateFieldGet(e,t){return e.get(_assertClassBrand(e,t))}function _assertClassBrand(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r
throw new TypeError("Private element is not present on this object")}function _regenerator(){var e,t,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",a=r.toStringTag||"@@toStringTag"
function i(r,n,a,i){var s=n&&n.prototype instanceof Generator?n:Generator,l=Object.create(s.prototype)
return _regeneratorDefine2(l,"_invoke",function(r,n,a){var i,s,l,c=0,u=a||[],h=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,r){return i=t,s=0,l=e,p.n=r,o}}
function d(r,n){for(s=r,l=n,t=0;!h&&c&&!a&&t<u.length;t++){var a,i=u[t],d=p.p,f=i[2]
r>3?(a=f===n)&&(l=i[(s=i[4])?5:(s=3,3)],i[4]=i[5]=e):i[0]<=d&&((a=r<2&&d<i[1])?(s=0,p.v=n,p.n=i[1]):d<f&&(a=r<3||i[0]>n||n>f)&&(i[4]=r,i[5]=n,p.n=f,s=0))}if(a||r>1)return o
throw h=!0,n}return function(a,u,f){if(c>1)throw TypeError("Generator is already running")
for(h&&1===u&&d(u,f),s=u,l=f;(t=s<2?e:l)||!h;){i||(s?s<3?(s>1&&(p.n=-1),d(s,l)):p.n=l:p.v=l)
try{if(c=2,i){if(s||(a="next"),t=i[a]){if(!(t=t.call(i,l)))throw TypeError("iterator result is not an object")
if(!t.done)return t
l=t.value,s<2&&(s=0)}else 1===s&&(t=i.return)&&t.call(i),s<2&&(l=TypeError("The iterator does not provide a '"+a+"' method"),s=1)
i=e}else if((t=(h=p.n<0)?l:r.call(n,p))!==o)break}catch(t){i=e,s=1,l=t}finally{c=1}}return{value:t,done:h}}}(r,a,i),!0),l}var o={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf
var s=[][n]?t(t([][n]())):(_regeneratorDefine2(t={},n,function(){return this}),t),l=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,a,"GeneratorFunction")),e.prototype=Object.create(l),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(l,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(l),_regeneratorDefine2(l,a,"Generator"),_regeneratorDefine2(l,n,function(){return this}),_regeneratorDefine2(l,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,t,r,n){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}(_regeneratorDefine2=function _regeneratorDefine(e,t,r,n){function o(t,r){_regeneratorDefine2(e,t,function(e){return this._invoke(t,r,e)})}t?a?a(e,t,{value:r,enumerable:!n,configurable:!n,writable:!n}):e[t]=r:(o("next",0),o("throw",1),o("return",2))})(e,t,r,n)}function asyncGeneratorStep(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise(function(n,a){var o=e.apply(t,r)
function _next(e){asyncGeneratorStep(o,n,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,a,_next,_throw,"throw",e)}_next(void 0)})}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,i,s=[],l=!0,c=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
l=!1}else for(;!(l=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return s}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var o=0,i=function F(){}
return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return c=e.done,e},e:function e(t){u=!0,l=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string")
return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _callSuper(e,t,r){return t=_getPrototypeOf(t),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(t,r||[],_getPrototypeOf(e).constructor):t.apply(e,r))}function _possibleConstructorReturn(e,t){if(t&&("object"==_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!e})()}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function webpackUniversalModuleDefinition(e,t){"object"===_typeof(exports)&&"object"===_typeof(module)?module.exports=t():(__WEBPACK_AMD_DEFINE_ARRAY__=[],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=t)?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}(globalThis,function(){return function(){"use strict"
var __webpack_modules__=[,function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.VerbosityLevel=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.UNSUPPORTED_FEATURES=t.TextRenderingMode=t.StreamType=t.RenderingIntentFlag=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.PageActionEventType=t.OPS=t.MissingPDFException=t.LINE_FACTOR=t.LINE_DESCENT_FACTOR=t.InvalidPDFException=t.ImageKind=t.IDENTITY_MATRIX=t.FormatError=t.FontType=t.FeatureTest=t.FONT_IDENTITY_MATRIX=t.DocumentActionEventType=t.CMapCompressionType=t.BaseException=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMode=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationEditorType=t.AnnotationEditorPrefix=t.AnnotationEditorParamsType=t.AnnotationBorderStyleType=t.AnnotationActionEventType=t.AbortException=void 0,t.arrayByteLength=arrayByteLength,t.arraysToBytes=function arraysToBytes(e){var t=e.length
if(1===t&&e[0]instanceof Uint8Array)return e[0]
for(var r=0,n=0;n<t;n++)r+=arrayByteLength(e[n])
for(var a=0,o=new Uint8Array(r),i=0;i<t;i++){var s=e[i]
s instanceof Uint8Array||(s="string"==typeof s?stringToBytes(s):new Uint8Array(s))
var l=s.byteLength
o.set(s,a),a+=l}return o},t.assert=function assert(e,t){e||unreachable(t)},t.bytesToString=function bytesToString(e){"object"===_typeof(e)&&null!==e&&void 0!==e.length||unreachable("Invalid argument for bytesToString")
var t=e.length
if(t<8192)return String.fromCharCode.apply(null,e)
for(var r=[],n=0;n<t;n+=8192){var a=Math.min(n+8192,t),o=e.subarray(n,a)
r.push(String.fromCharCode.apply(null,o))}return r.join("")},t.createPromiseCapability=function createPromiseCapability(){var e=Object.create(null),t=!1
return Object.defineProperty(e,"settled",{get:function get(){return t}}),e.promise=new Promise(function(r,n){e.resolve=function(e){t=!0,r(e)},e.reject=function(e){t=!0,n(e)}}),e},t.createValidAbsoluteUrl=function createValidAbsoluteUrl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(!e)return null
try{if(r&&"string"==typeof e){if(r.addDefaultProtocol&&e.startsWith("www.")){var n=e.match(/\./g)
n&&n.length>=2&&(e="http://".concat(e))}if(r.tryConvertEncoding)try{e=stringToUTF8String(e)}catch(e){}}var a=t?new URL(e,t):new URL(e)
if(function _isValidProtocol(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}(a))return a}catch(e){}return null},t.escapeString=function escapeString(e){return e.replace(/([()\\\n\r])/g,function(e){return"\n"===e?"\\n":"\r"===e?"\\r":"\\".concat(e)})},t.getModificationDate=function getModificationDate(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date
return[e.getUTCFullYear().toString(),(e.getUTCMonth()+1).toString().padStart(2,"0"),e.getUTCDate().toString().padStart(2,"0"),e.getUTCHours().toString().padStart(2,"0"),e.getUTCMinutes().toString().padStart(2,"0"),e.getUTCSeconds().toString().padStart(2,"0")].join("")},t.getVerbosityLevel=function getVerbosityLevel(){return a},t.info=function info(e){n.INFOS},t.isArrayBuffer=function isArrayBuffer(e){return"object"===_typeof(e)&&null!==e&&void 0!==e.byteLength},t.isArrayEqual=function isArrayEqual(e,t){if(e.length!==t.length)return!1
for(var r=0,n=e.length;r<n;r++)if(e[r]!==t[r])return!1
return!0},t.isAscii=function isAscii(e){return/^[\x00-\x7F]*$/.test(e)},t.objectFromMap=function objectFromMap(e){var t,r=Object.create(null),n=_createForOfIteratorHelper(e)
try{for(n.s();!(t=n.n()).done;){var a=_slicedToArray(t.value,2),o=a[0],i=a[1]
r[o]=i}}catch(e){n.e(e)}finally{n.f()}return r},t.objectSize=function objectSize(e){return Object.keys(e).length},t.setVerbosityLevel=function setVerbosityLevel(e){Number.isInteger(e)&&(a=e)},t.shadow=shadow,t.string32=function string32(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=stringToBytes,t.stringToPDFString=function stringToPDFString(e){if(e[0]>="ï"){var t
if("þ"===e[0]&&"ÿ"===e[1]?t="utf-16be":"ÿ"===e[0]&&"þ"===e[1]?t="utf-16le":"ï"===e[0]&&"»"===e[1]&&"¿"===e[2]&&(t="utf-8"),t)try{var r=new TextDecoder(t,{fatal:!0}),n=stringToBytes(e)
return r.decode(n)}catch(e){warn('stringToPDFString: "'.concat(e,'".'))}}for(var a=[],o=0,i=e.length;o<i;o++){var s=m[e.charCodeAt(o)]
a.push(s?String.fromCharCode(s):e.charAt(o))}return a.join("")},t.stringToUTF16BEString=function stringToUTF16BEString(e){for(var t=["þÿ"],r=0,n=e.length;r<n;r++){var a=e.charCodeAt(r)
t.push(String.fromCharCode(a>>8&255),String.fromCharCode(255&a))}return t.join("")},t.stringToUTF8String=stringToUTF8String,t.unreachable=unreachable,t.utf8StringToString=function utf8StringToString(e){return unescape(encodeURIComponent(e))},t.warn=warn,r(2)
t.IDENTITY_MATRIX=[1,0,0,1,0,0]
t.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0]
t.LINE_FACTOR=1.35
t.LINE_DESCENT_FACTOR=.35
t.RenderingIntentFlag={ANY:1,DISPLAY:2,PRINT:4,ANNOTATIONS_FORMS:16,ANNOTATIONS_STORAGE:32,ANNOTATIONS_DISABLE:64,OPLIST:256}
t.AnnotationMode={DISABLE:0,ENABLE:1,ENABLE_FORMS:2,ENABLE_STORAGE:3}
t.AnnotationEditorPrefix="pdfjs_internal_editor_"
t.AnnotationEditorType={DISABLE:-1,NONE:0,FREETEXT:3,INK:15}
t.AnnotationEditorParamsType={FREETEXT_SIZE:1,FREETEXT_COLOR:2,FREETEXT_OPACITY:3,INK_COLOR:11,INK_THICKNESS:12,INK_OPACITY:13}
t.PermissionFlag={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048}
t.TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4}
t.ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3}
t.AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26}
t.AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"}
t.AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"}
t.AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"}
t.AnnotationReplyType={GROUP:"Group",REPLY:"R"}
t.AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512}
t.AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864}
t.AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5}
t.AnnotationActionEventType={E:"Mouse Enter",X:"Mouse Exit",D:"Mouse Down",U:"Mouse Up",Fo:"Focus",Bl:"Blur",PO:"PageOpen",PC:"PageClose",PV:"PageVisible",PI:"PageInvisible",K:"Keystroke",F:"Format",V:"Validate",C:"Calculate"}
t.DocumentActionEventType={WC:"WillClose",WS:"WillSave",DS:"DidSave",WP:"WillPrint",DP:"DidPrint"}
t.PageActionEventType={O:"PageOpen",C:"PageClose"}
t.StreamType={UNKNOWN:"UNKNOWN",FLATE:"FLATE",LZW:"LZW",DCT:"DCT",JPX:"JPX",JBIG:"JBIG",A85:"A85",AHX:"AHX",CCF:"CCF",RLX:"RLX"}
t.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1STANDARD:"TYPE1STANDARD",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"}
var n={ERRORS:0,WARNINGS:1,INFOS:5}
t.VerbosityLevel=n
t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2}
t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",signatures:"signatures",smask:"smask",shadingPattern:"shadingPattern",font:"font",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontBuildPath:"errorFontBuildPath",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent",errorContentSubStream:"errorContentSubStream"}
t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2}
var a=n.WARNINGS
function warn(e){n.WARNINGS}function unreachable(e){throw new Error(e)}function shadow(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r}var o=function BaseExceptionClosure(){function BaseException(e,t){this.constructor===BaseException&&unreachable("Cannot initialize BaseException."),this.message=e,this.name=t}return BaseException.prototype=new Error,BaseException.constructor=BaseException,BaseException}()
t.BaseException=o
var i=function(e){function PasswordException(e,t){var r
return _classCallCheck(this,PasswordException),(r=_callSuper(this,PasswordException,[e,"PasswordException"])).code=t,r}return _inherits(PasswordException,o),_createClass(PasswordException)}()
t.PasswordException=i
var s=function(e){function UnknownErrorException(e,t){var r
return _classCallCheck(this,UnknownErrorException),(r=_callSuper(this,UnknownErrorException,[e,"UnknownErrorException"])).details=t,r}return _inherits(UnknownErrorException,o),_createClass(UnknownErrorException)}()
t.UnknownErrorException=s
var l=function(e){function InvalidPDFException(e){return _classCallCheck(this,InvalidPDFException),_callSuper(this,InvalidPDFException,[e,"InvalidPDFException"])}return _inherits(InvalidPDFException,o),_createClass(InvalidPDFException)}()
t.InvalidPDFException=l
var c=function(e){function MissingPDFException(e){return _classCallCheck(this,MissingPDFException),_callSuper(this,MissingPDFException,[e,"MissingPDFException"])}return _inherits(MissingPDFException,o),_createClass(MissingPDFException)}()
t.MissingPDFException=c
var u=function(e){function UnexpectedResponseException(e,t){var r
return _classCallCheck(this,UnexpectedResponseException),(r=_callSuper(this,UnexpectedResponseException,[e,"UnexpectedResponseException"])).status=t,r}return _inherits(UnexpectedResponseException,o),_createClass(UnexpectedResponseException)}()
t.UnexpectedResponseException=u
var d=function(e){function FormatError(e){return _classCallCheck(this,FormatError),_callSuper(this,FormatError,[e,"FormatError"])}return _inherits(FormatError,o),_createClass(FormatError)}()
t.FormatError=d
var h=function(e){function AbortException(e){return _classCallCheck(this,AbortException),_callSuper(this,AbortException,[e,"AbortException"])}return _inherits(AbortException,o),_createClass(AbortException)}()
function stringToBytes(e){"string"!=typeof e&&unreachable("Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n)
return r}function arrayByteLength(e){return void 0!==e.length?e.length:void 0!==e.byteLength?e.byteLength:void unreachable("Invalid argument for arrayByteLength")}t.AbortException=h
var p=function(){return _createClass(function FeatureTest(){_classCallCheck(this,FeatureTest)},null,[{key:"isLittleEndian",get:function get(){return shadow(this,"isLittleEndian",function isLittleEndian(){var e=new Uint8Array(4)
return e[0]=1,1===new Uint32Array(e.buffer,0,1)[0]}())}},{key:"isEvalSupported",get:function get(){return shadow(this,"isEvalSupported",function isEvalSupported(){try{return new Function(""),!0}catch(e){return!1}}())}},{key:"isOffscreenCanvasSupported",get:function get(){return shadow(this,"isOffscreenCanvasSupported","undefined"!=typeof OffscreenCanvas)}}])}()
t.FeatureTest=p
var f=_toConsumableArray(Array(256).keys()).map(function(e){return e.toString(16).padStart(2,"0")}),v=function(){function Util(){_classCallCheck(this,Util)}return _createClass(Util,null,[{key:"makeHexColor",value:function makeHexColor(e,t,r){return"#".concat(f[e]).concat(f[t]).concat(f[r])}},{key:"scaleMinMax",value:function scaleMinMax(e,t){var r
e[0]?(e[0]<0&&(r=t[0],t[0]=t[1],t[1]=r),t[0]*=e[0],t[1]*=e[0],e[3]<0&&(r=t[2],t[2]=t[3],t[3]=r),t[2]*=e[3],t[3]*=e[3]):(r=t[0],t[0]=t[2],t[2]=r,r=t[1],t[1]=t[3],t[3]=r,e[1]<0&&(r=t[2],t[2]=t[3],t[3]=r),t[2]*=e[1],t[3]*=e[1],e[2]<0&&(r=t[0],t[0]=t[1],t[1]=r),t[0]*=e[2],t[1]*=e[2]),t[0]+=e[4],t[1]+=e[4],t[2]+=e[5],t[3]+=e[5]}},{key:"transform",value:function transform(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function applyTransform(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function applyInverseTransform(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function getAxialAlignedBoundingBox(e,t){var r=Util.applyTransform(e,t),n=Util.applyTransform(e.slice(2,4),t),a=Util.applyTransform([e[0],e[3]],t),o=Util.applyTransform([e[2],e[1]],t)
return[Math.min(r[0],n[0],a[0],o[0]),Math.min(r[1],n[1],a[1],o[1]),Math.max(r[0],n[0],a[0],o[0]),Math.max(r[1],n[1],a[1],o[1])]}},{key:"inverseTransform",value:function inverseTransform(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function apply3dTransform(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function singularValueDecompose2dScale(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],a=e[2]*t[0]+e[3]*t[2],o=e[2]*t[1]+e[3]*t[3],i=(r+o)/2,s=Math.sqrt(Math.pow(r+o,2)-4*(r*o-a*n))/2,l=i+s||1,c=i-s||1
return[Math.sqrt(l),Math.sqrt(c)]}},{key:"normalizeRect",value:function normalizeRect(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}},{key:"intersect",value:function intersect(e,t){var r=Math.max(Math.min(e[0],e[2]),Math.min(t[0],t[2])),n=Math.min(Math.max(e[0],e[2]),Math.max(t[0],t[2]))
if(r>n)return null
var a=Math.max(Math.min(e[1],e[3]),Math.min(t[1],t[3])),o=Math.min(Math.max(e[1],e[3]),Math.max(t[1],t[3]))
return a>o?null:[r,a,n,o]}},{key:"bezierBoundingBox",value:function bezierBoundingBox(e,t,r,n,a,o,i,s){for(var l,c,u,d,h,p,f,v,m=[],g=[[],[]],_=0;_<2;++_)if(0===_?(c=6*e-12*r+6*a,l=-3*e+9*r-9*a+3*i,u=3*r-3*e):(c=6*t-12*n+6*o,l=-3*t+9*n-9*o+3*s,u=3*n-3*t),Math.abs(l)<1e-12){if(Math.abs(c)<1e-12)continue
0<(d=-u/c)&&d<1&&m.push(d)}else f=c*c-4*u*l,v=Math.sqrt(f),f<0||(0<(h=(-c+v)/(2*l))&&h<1&&m.push(h),0<(p=(-c-v)/(2*l))&&p<1&&m.push(p))
for(var b,y=m.length,k=y;y--;)b=1-(d=m[y]),g[0][y]=b*b*b*e+3*b*b*d*r+3*b*d*d*a+d*d*d*i,g[1][y]=b*b*b*t+3*b*b*d*n+3*b*d*d*o+d*d*d*s
return g[0][k]=e,g[1][k]=t,g[0][k+1]=i,g[1][k+1]=s,g[0].length=g[1].length=k+2,[Math.min.apply(Math,_toConsumableArray(g[0])),Math.min.apply(Math,_toConsumableArray(g[1])),Math.max.apply(Math,_toConsumableArray(g[0])),Math.max.apply(Math,_toConsumableArray(g[1]))]}}])}()
t.Util=v
var m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364]
function stringToUTF8String(e){return decodeURIComponent(escape(e))}},function(e,t,r){r(3)},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isNodeJS=void 0
var r=!("object"!==(void 0===process?"undefined":_typeof(process))||process+""!="[object process]"||process.versions.nw||process.versions.electron&&process.type&&"browser"!==process.type)
t.isNodeJS=r},function(__unused_webpack_module,exports,__w_pdfjs_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.build=exports.RenderTask=exports.PDFWorkerUtil=exports.PDFWorker=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFDocumentLoadingTask=exports.PDFDataRangeTransport=exports.LoopbackPort=exports.DefaultStandardFontDataFactory=exports.DefaultCanvasFactory=exports.DefaultCMapReaderFactory=void 0,exports.getDocument=getDocument,exports.setPDFNetworkStreamFactory=setPDFNetworkStreamFactory,exports.version=void 0
var _util=__w_pdfjs_require__(1),_annotation_storage=__w_pdfjs_require__(5),_display_utils=__w_pdfjs_require__(8),_font_loader=__w_pdfjs_require__(11),_canvas=__w_pdfjs_require__(12),_worker_options=__w_pdfjs_require__(15),_is_node=__w_pdfjs_require__(3),_message_handler=__w_pdfjs_require__(16),_metadata=__w_pdfjs_require__(17),_optional_content_config=__w_pdfjs_require__(18),_transport_stream=__w_pdfjs_require__(19),_xfa_text=__w_pdfjs_require__(20),DEFAULT_RANGE_CHUNK_SIZE=65536,RENDERING_CANCELLED_TIMEOUT=100,DefaultCanvasFactory=_display_utils.DOMCanvasFactory
exports.DefaultCanvasFactory=DefaultCanvasFactory
var DefaultCMapReaderFactory=_display_utils.DOMCMapReaderFactory
exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory
var DefaultStandardFontDataFactory=_display_utils.DOMStandardFontDataFactory,createPDFNetworkStream
if(exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory,_is_node.isNodeJS){var _w_pdfjs_require__=__w_pdfjs_require__(21),NodeCanvasFactory=_w_pdfjs_require__.NodeCanvasFactory,NodeCMapReaderFactory=_w_pdfjs_require__.NodeCMapReaderFactory,NodeStandardFontDataFactory=_w_pdfjs_require__.NodeStandardFontDataFactory
exports.DefaultCanvasFactory=DefaultCanvasFactory=NodeCanvasFactory,exports.DefaultCMapReaderFactory=DefaultCMapReaderFactory=NodeCMapReaderFactory,exports.DefaultStandardFontDataFactory=DefaultStandardFontDataFactory=NodeStandardFontDataFactory}function setPDFNetworkStreamFactory(e){createPDFNetworkStream=e}function getDocument(e){var t,r=new PDFDocumentLoadingTask
if("string"==typeof e||e instanceof URL)t={url:e}
else if((0,_util.isArrayBuffer)(e))t={data:e}
else if(e instanceof PDFDataRangeTransport)t={range:e}
else{if("object"!==_typeof(e))throw new Error("Invalid parameter in getDocument, need either string, URL, TypedArray, or parameter object.")
if(!e.url&&!e.data&&!e.range)throw new Error("Invalid parameter object: need either .data, .range or .url")
t=e}var n=Object.create(null),a=null,o=null
for(var i in t){var s=t[i]
switch(i){case"url":if("undefined"!=typeof window)try{n[i]=new URL(s,window.location).href
continue}catch(e){(0,_util.warn)('Cannot create valid URL: "'.concat(e,'".'))}else if("string"==typeof s||s instanceof URL){n[i]=s.toString()
continue}throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.")
case"range":a=s
continue
case"worker":o=s
continue
case"data":if(_is_node.isNodeJS&&void 0!==Buffer&&s instanceof Buffer)n[i]=new Uint8Array(s)
else{if(s instanceof Uint8Array)break
if("string"==typeof s)n[i]=(0,_util.stringToBytes)(s)
else if("object"!==_typeof(s)||null===s||isNaN(s.length)){if(!(0,_util.isArrayBuffer)(s))throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.")
n[i]=new Uint8Array(s)}else n[i]=new Uint8Array(s)}continue}n[i]=s}if(n.CMapReaderFactory=n.CMapReaderFactory||DefaultCMapReaderFactory,n.StandardFontDataFactory=n.StandardFontDataFactory||DefaultStandardFontDataFactory,n.ignoreErrors=!0!==n.stopAtErrors,n.fontExtraProperties=!0===n.fontExtraProperties,n.pdfBug=!0===n.pdfBug,n.enableXfa=!0===n.enableXfa,(!Number.isInteger(n.rangeChunkSize)||n.rangeChunkSize<1)&&(n.rangeChunkSize=DEFAULT_RANGE_CHUNK_SIZE),("string"!=typeof n.docBaseUrl||(0,_display_utils.isDataScheme)(n.docBaseUrl))&&(n.docBaseUrl=null),(!Number.isInteger(n.maxImageSize)||n.maxImageSize<-1)&&(n.maxImageSize=-1),"string"!=typeof n.cMapUrl&&(n.cMapUrl=null),"string"!=typeof n.standardFontDataUrl&&(n.standardFontDataUrl=null),"boolean"!=typeof n.useWorkerFetch&&(n.useWorkerFetch=n.CMapReaderFactory===_display_utils.DOMCMapReaderFactory&&n.StandardFontDataFactory===_display_utils.DOMStandardFontDataFactory),"boolean"!=typeof n.isEvalSupported&&(n.isEvalSupported=!0),"boolean"!=typeof n.disableFontFace&&(n.disableFontFace=_is_node.isNodeJS),"boolean"!=typeof n.useSystemFonts&&(n.useSystemFonts=!_is_node.isNodeJS&&!n.disableFontFace),"object"===_typeof(n.ownerDocument)&&null!==n.ownerDocument||(n.ownerDocument=globalThis.document),"boolean"!=typeof n.disableRange&&(n.disableRange=!1),"boolean"!=typeof n.disableStream&&(n.disableStream=!1),"boolean"!=typeof n.disableAutoFetch&&(n.disableAutoFetch=!1),(0,_util.setVerbosityLevel)(n.verbosity),!o){var l={verbosity:n.verbosity,port:_worker_options.GlobalWorkerOptions.workerPort}
o=l.port?PDFWorker.fromPort(l):new PDFWorker(l),r._worker=o}var c=r.docId
return o.promise.then(function(){if(r.destroyed)throw new Error("Loading aborted")
var e=_fetchDocument(o,n,a,c),t=new Promise(function(e){var t
a?t=new _transport_stream.PDFDataTransportStream({length:n.length,initialData:n.initialData,progressiveDone:n.progressiveDone,contentDispositionFilename:n.contentDispositionFilename,disableRange:n.disableRange,disableStream:n.disableStream},a):n.data||(t=createPDFNetworkStream({url:n.url,length:n.length,httpHeaders:n.httpHeaders,withCredentials:n.withCredentials,rangeChunkSize:n.rangeChunkSize,disableRange:n.disableRange,disableStream:n.disableStream})),e(t)})
return Promise.all([e,t]).then(function(e){var t=_slicedToArray(e,2),a=t[0],i=t[1]
if(r.destroyed)throw new Error("Loading aborted")
var s=new _message_handler.MessageHandler(c,a,o.port),l=new WorkerTransport(s,r,i,n)
r._transport=l,s.send("Ready",null)})}).catch(r._capability.reject),r}function _fetchDocument(e,t,r,n){return _fetchDocument2.apply(this,arguments)}function _fetchDocument2(){return(_fetchDocument2=_asyncToGenerator(_regenerator().m(function _callee7(e,t,r,n){var a
return _regenerator().w(function(o){for(;;)switch(o.n){case 0:if(!e.destroyed){o.n=1
break}throw new Error("Worker was destroyed")
case 1:return r&&(t.length=r.length,t.initialData=r.initialData,t.progressiveDone=r.progressiveDone,t.contentDispositionFilename=r.contentDispositionFilename),o.n=2,e.messageHandler.sendWithPromise("GetDocRequest",{docId:n,apiVersion:"2.16.105",source:{data:t.data,url:t.url,password:t.password,disableAutoFetch:t.disableAutoFetch,rangeChunkSize:t.rangeChunkSize,length:t.length},maxImageSize:t.maxImageSize,disableFontFace:t.disableFontFace,docBaseUrl:t.docBaseUrl,ignoreErrors:t.ignoreErrors,isEvalSupported:t.isEvalSupported,fontExtraProperties:t.fontExtraProperties,enableXfa:t.enableXfa,useSystemFonts:t.useSystemFonts,cMapUrl:t.useWorkerFetch?t.cMapUrl:null,standardFontDataUrl:t.useWorkerFetch?t.standardFontDataUrl:null})
case 2:if(a=o.v,t.data&&(t.data=null),!e.destroyed){o.n=3
break}throw new Error("Worker was destroyed")
case 3:return o.a(2,a)}},_callee7)}))).apply(this,arguments)}var PDFDocumentLoadingTask=function(){return _createClass(function PDFDocumentLoadingTask(){var e,t
_classCallCheck(this,PDFDocumentLoadingTask),this._capability=(0,_util.createPromiseCapability)(),this._transport=null,this._worker=null,this.docId="d".concat((_docId._=(e=_docId._,t=e++,e),t)),this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null},[{key:"promise",get:function get(){return this._capability.promise}},{key:"destroy",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee(){var e
return _regenerator().w(function(t){for(;;)switch(t.n){case 0:return this.destroyed=!0,t.n=1,null===(e=this._transport)||void 0===e?void 0:e.destroy()
case 1:this._transport=null,this._worker&&(this._worker.destroy(),this._worker=null)
case 2:return t.a(2)}},_callee,this)}))
return function destroy(){return e.apply(this,arguments)}}()}])}(),_docId={_:0}
exports.PDFDocumentLoadingTask=PDFDocumentLoadingTask
var PDFDataRangeTransport=function(){return _createClass(function PDFDataRangeTransport(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
_classCallCheck(this,PDFDataRangeTransport),this.length=e,this.initialData=t,this.progressiveDone=r,this.contentDispositionFilename=n,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._progressiveDoneListeners=[],this._readyCapability=(0,_util.createPromiseCapability)()},[{key:"addRangeListener",value:function addRangeListener(e){this._rangeListeners.push(e)}},{key:"addProgressListener",value:function addProgressListener(e){this._progressListeners.push(e)}},{key:"addProgressiveReadListener",value:function addProgressiveReadListener(e){this._progressiveReadListeners.push(e)}},{key:"addProgressiveDoneListener",value:function addProgressiveDoneListener(e){this._progressiveDoneListeners.push(e)}},{key:"onDataRange",value:function onDataRange(e,t){var r,n=_createForOfIteratorHelper(this._rangeListeners)
try{for(n.s();!(r=n.n()).done;){(0,r.value)(e,t)}}catch(e){n.e(e)}finally{n.f()}}},{key:"onDataProgress",value:function onDataProgress(e,t){var r=this
this._readyCapability.promise.then(function(){var n,a=_createForOfIteratorHelper(r._progressListeners)
try{for(a.s();!(n=a.n()).done;){(0,n.value)(e,t)}}catch(e){a.e(e)}finally{a.f()}})}},{key:"onDataProgressiveRead",value:function onDataProgressiveRead(e){var t=this
this._readyCapability.promise.then(function(){var r,n=_createForOfIteratorHelper(t._progressiveReadListeners)
try{for(n.s();!(r=n.n()).done;){(0,r.value)(e)}}catch(e){n.e(e)}finally{n.f()}})}},{key:"onDataProgressiveDone",value:function onDataProgressiveDone(){var e=this
this._readyCapability.promise.then(function(){var t,r=_createForOfIteratorHelper(e._progressiveDoneListeners)
try{for(r.s();!(t=r.n()).done;){(0,t.value)()}}catch(e){r.e(e)}finally{r.f()}})}},{key:"transportReady",value:function transportReady(){this._readyCapability.resolve()}},{key:"requestDataRange",value:function requestDataRange(e,t){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}},{key:"abort",value:function abort(){}}])}()
exports.PDFDataRangeTransport=PDFDataRangeTransport
var PDFDocumentProxy=function(){return _createClass(function PDFDocumentProxy(e,t){var r=this
_classCallCheck(this,PDFDocumentProxy),this._pdfInfo=e,this._transport=t,Object.defineProperty(this,"fingerprint",{get:function get(){return(0,_display_utils.deprecated)("`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead."),this.fingerprints[0]}}),Object.defineProperty(this,"getStats",{value:(n=_asyncToGenerator(_regenerator().m(function _callee2(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:return(0,_display_utils.deprecated)("`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead."),e.a(2,r.stats||{streamTypes:{},fontTypes:{}})}},_callee2)})),function value(){return n.apply(this,arguments)})})
var n},[{key:"annotationStorage",get:function get(){return this._transport.annotationStorage}},{key:"numPages",get:function get(){return this._pdfInfo.numPages}},{key:"fingerprints",get:function get(){return this._pdfInfo.fingerprints}},{key:"stats",get:function get(){return this._transport.stats}},{key:"isPureXfa",get:function get(){return!!this._transport._htmlForXfa}},{key:"allXfaHtml",get:function get(){return this._transport._htmlForXfa}},{key:"getPage",value:function getPage(e){return this._transport.getPage(e)}},{key:"getPageIndex",value:function getPageIndex(e){return this._transport.getPageIndex(e)}},{key:"getDestinations",value:function getDestinations(){return this._transport.getDestinations()}},{key:"getDestination",value:function getDestination(e){return this._transport.getDestination(e)}},{key:"getPageLabels",value:function getPageLabels(){return this._transport.getPageLabels()}},{key:"getPageLayout",value:function getPageLayout(){return this._transport.getPageLayout()}},{key:"getPageMode",value:function getPageMode(){return this._transport.getPageMode()}},{key:"getViewerPreferences",value:function getViewerPreferences(){return this._transport.getViewerPreferences()}},{key:"getOpenAction",value:function getOpenAction(){return this._transport.getOpenAction()}},{key:"getAttachments",value:function getAttachments(){return this._transport.getAttachments()}},{key:"getJavaScript",value:function getJavaScript(){return this._transport.getJavaScript()}},{key:"getJSActions",value:function getJSActions(){return this._transport.getDocJSActions()}},{key:"getOutline",value:function getOutline(){return this._transport.getOutline()}},{key:"getOptionalContentConfig",value:function getOptionalContentConfig(){return this._transport.getOptionalContentConfig()}},{key:"getPermissions",value:function getPermissions(){return this._transport.getPermissions()}},{key:"getMetadata",value:function getMetadata(){return this._transport.getMetadata()}},{key:"getMarkInfo",value:function getMarkInfo(){return this._transport.getMarkInfo()}},{key:"getData",value:function getData(){return this._transport.getData()}},{key:"getDownloadInfo",value:function getDownloadInfo(){return this._transport.downloadInfoCapability.promise}},{key:"cleanup",value:function cleanup(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return this._transport.startCleanup(e||this.isPureXfa)}},{key:"destroy",value:function destroy(){return this.loadingTask.destroy()}},{key:"loadingParams",get:function get(){return this._transport.loadingParams}},{key:"loadingTask",get:function get(){return this._transport.loadingTask}},{key:"saveDocument",value:function saveDocument(){return this._transport.annotationStorage.size<=0&&(0,_display_utils.deprecated)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."),this._transport.saveDocument()}},{key:"getFieldObjects",value:function getFieldObjects(){return this._transport.getFieldObjects()}},{key:"hasJSActions",value:function hasJSActions(){return this._transport.hasJSActions()}},{key:"getCalculationOrderIds",value:function getCalculationOrderIds(){return this._transport.getCalculationOrderIds()}}])}()
exports.PDFDocumentProxy=PDFDocumentProxy
var PDFPageProxy=function(){return _createClass(function PDFPageProxy(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
_classCallCheck(this,PDFPageProxy),this._pageIndex=e,this._pageInfo=t,this._ownerDocument=n,this._transport=r,this._stats=a?new _display_utils.StatTimer:null,this._pdfBug=a,this.commonObjs=r.commonObjs,this.objs=new PDFObjects,this._bitmaps=new Set,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this._intentStates=new Map,this._annotationPromises=new Map,this.destroyed=!1},[{key:"pageNumber",get:function get(){return this._pageIndex+1}},{key:"rotate",get:function get(){return this._pageInfo.rotate}},{key:"ref",get:function get(){return this._pageInfo.ref}},{key:"userUnit",get:function get(){return this._pageInfo.userUnit}},{key:"view",get:function get(){return this._pageInfo.view}},{key:"getViewport",value:function getViewport(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scale,r=e.rotation,n=void 0===r?this.rotate:r,a=e.offsetX,o=void 0===a?0:a,i=e.offsetY,s=void 0===i?0:i,l=e.dontFlip,c=void 0!==l&&l
return new _display_utils.PageViewport({viewBox:this.view,scale:t,rotation:n,offsetX:o,offsetY:s,dontFlip:c})}},{key:"getAnnotations",value:function getAnnotations(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).intent,t=void 0===e?"display":e,r=this._transport.getRenderingIntent(t),n=this._annotationPromises.get(r.cacheKey)
return n||(n=this._transport.getAnnotations(this._pageIndex,r.renderingIntent),this._annotationPromises.set(r.cacheKey,n),n=n.then(function(e){var t,r=_createForOfIteratorHelper(e)
try{var n=function _loop(){var e=t.value
void 0!==e.titleObj&&Object.defineProperty(e,"title",{get:function get(){return(0,_display_utils.deprecated)("`title`-property on annotation, please use `titleObj` instead."),e.titleObj.str}}),void 0!==e.contentsObj&&Object.defineProperty(e,"contents",{get:function get(){return(0,_display_utils.deprecated)("`contents`-property on annotation, please use `contentsObj` instead."),e.contentsObj.str}})}
for(r.s();!(t=r.n()).done;)n()}catch(e){r.e(e)}finally{r.f()}return e})),n}},{key:"getJSActions",value:function getJSActions(){return this._jsActionsPromise||(this._jsActionsPromise=this._transport.getPageJSActions(this._pageIndex))}},{key:"getXfa",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee3(){var e
return _regenerator().w(function(t){for(;;)switch(t.n){case 0:return t.a(2,(null===(e=this._transport._htmlForXfa)||void 0===e?void 0:e.children[this._pageIndex])||null)}},_callee3,this)}))
return function getXfa(){return e.apply(this,arguments)}}()},{key:"render",value:function render(e){var t,r,n,a=this,o=e.canvasContext,i=e.viewport,s=e.intent,l=void 0===s?"display":s,c=e.annotationMode,u=void 0===c?_util.AnnotationMode.ENABLE:c,d=e.transform,h=void 0===d?null:d,p=e.imageLayer,f=void 0===p?null:p,v=e.canvasFactory,m=void 0===v?null:v,g=e.background,_=void 0===g?null:g,b=e.optionalContentConfigPromise,y=void 0===b?null:b,k=e.annotationCanvasMap,S=void 0===k?null:k,C=e.pageColors,P=void 0===C?null:C,E=e.printAnnotationStorage,x=void 0===E?null:E
void 0!==(null===(t=arguments[0])||void 0===t?void 0:t.renderInteractiveForms)&&((0,_display_utils.deprecated)("render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead."),!0===arguments[0].renderInteractiveForms&&u===_util.AnnotationMode.ENABLE&&(u=_util.AnnotationMode.ENABLE_FORMS)),void 0!==(null===(r=arguments[0])||void 0===r?void 0:r.includeAnnotationStorage)&&((0,_display_utils.deprecated)("render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead."),!0===arguments[0].includeAnnotationStorage&&u===_util.AnnotationMode.ENABLE&&(u=_util.AnnotationMode.ENABLE_STORAGE)),this._stats&&this._stats.time("Overall")
var w=this._transport.getRenderingIntent(l,u,x)
this.pendingCleanup=!1,y||(y=this._transport.getOptionalContentConfig())
var A=this._intentStates.get(w.cacheKey)
A||(A=Object.create(null),this._intentStates.set(w.cacheKey,A)),A.streamReaderCancelTimeout&&(clearTimeout(A.streamReaderCancelTimeout),A.streamReaderCancelTimeout=null)
var F=m||new DefaultCanvasFactory({ownerDocument:this._ownerDocument}),M=!!(w.renderingIntent&_util.RenderingIntentFlag.PRINT)
A.displayReadyCapability||(A.displayReadyCapability=(0,_util.createPromiseCapability)(),A.operatorList={fnArray:[],argsArray:[],lastChunk:!1,separateAnnots:null},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList(w))
var T=function complete(e){A.renderTasks.delete(R),(a.cleanupAfterRender||M)&&(a.pendingCleanup=!0),a._tryCleanup(),e?(R.capability.reject(e),a._abortOperatorList({intentState:A,reason:e instanceof Error?e:new Error(e)})):R.capability.resolve(),a._stats&&(a._stats.timeEnd("Rendering"),a._stats.timeEnd("Overall"))},R=new InternalRenderTask({callback:T,params:{canvasContext:o,viewport:i,transform:h,imageLayer:f,background:_},objs:this.objs,commonObjs:this.commonObjs,annotationCanvasMap:S,operatorList:A.operatorList,pageIndex:this._pageIndex,canvasFactory:F,useRequestAnimationFrame:!M,pdfBug:this._pdfBug,pageColors:P});((n=A).renderTasks||(n.renderTasks=new Set)).add(R)
var I=R.task
return Promise.all([A.displayReadyCapability.promise,y]).then(function(e){var t=_slicedToArray(e,2),r=t[0],n=t[1]
a.pendingCleanup?T():(a._stats&&a._stats.time("Rendering"),R.initializeGraphics({transparency:r,optionalContentConfig:n}),R.operatorListChanged())}).catch(T),I}},{key:"getOperatorList",value:function getOperatorList(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.intent,r=void 0===t?"display":t,n=e.annotationMode,a=void 0===n?_util.AnnotationMode.ENABLE:n,o=e.printAnnotationStorage,i=void 0===o?null:o
var s,l,c=this._transport.getRenderingIntent(r,a,i,!0),u=this._intentStates.get(c.cacheKey);(u||(u=Object.create(null),this._intentStates.set(c.cacheKey,u)),u.opListReadCapability)||((s=Object.create(null)).operatorListChanged=function operatorListChanged(){u.operatorList.lastChunk&&(u.opListReadCapability.resolve(u.operatorList),u.renderTasks.delete(s))},u.opListReadCapability=(0,_util.createPromiseCapability)(),((l=u).renderTasks||(l.renderTasks=new Set)).add(s),u.operatorList={fnArray:[],argsArray:[],lastChunk:!1,separateAnnots:null},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList(c))
return u.opListReadCapability.promise}},{key:"streamTextContent",value:function streamTextContent(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disableCombineTextItems,r=void 0!==t&&t,n=e.includeMarkedContent,a=void 0!==n&&n
return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,combineTextItems:!0!==r,includeMarkedContent:!0===a},{highWaterMark:100,size:function size(e){return e.items.length}})}},{key:"getTextContent",value:function getTextContent(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(this._transport._htmlForXfa)return this.getXfa().then(function(e){return _xfa_text.XfaText.textContent(e)})
var t=this.streamTextContent(e)
return new Promise(function(e,r){var n=t.getReader(),a={items:[],styles:Object.create(null)}
!function pump(){n.read().then(function(t){var r,n=t.value
t.done?e(a):(Object.assign(a.styles,n.styles),(r=a.items).push.apply(r,_toConsumableArray(n.items)),pump())},r)}()})}},{key:"getStructTree",value:function getStructTree(){return this._structTreePromise||(this._structTreePromise=this._transport.getStructTree(this._pageIndex))}},{key:"_destroy",value:function _destroy(){this.destroyed=!0
var e,t=[],r=_createForOfIteratorHelper(this._intentStates.values())
try{for(r.s();!(e=r.n()).done;){var n=e.value
if(this._abortOperatorList({intentState:n,reason:new Error("Page was destroyed."),force:!0}),!n.opListReadCapability){var a,o=_createForOfIteratorHelper(n.renderTasks)
try{for(o.s();!(a=o.n()).done;){var i=a.value
t.push(i.completed),i.cancel()}}catch(e){o.e(e)}finally{o.f()}}}}catch(e){r.e(e)}finally{r.f()}this.objs.clear()
var s,l=_createForOfIteratorHelper(this._bitmaps)
try{for(l.s();!(s=l.n()).done;){s.value.close()}}catch(e){l.e(e)}finally{l.f()}return this._bitmaps.clear(),this._annotationPromises.clear(),this._jsActionsPromise=null,this._structTreePromise=null,this.pendingCleanup=!1,Promise.all(t)}},{key:"cleanup",value:function cleanup(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return this.pendingCleanup=!0,this._tryCleanup(e)}},{key:"_tryCleanup",value:function _tryCleanup(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.pendingCleanup)return!1
var t,r=_createForOfIteratorHelper(this._intentStates.values())
try{for(r.s();!(t=r.n()).done;){var n=t.value,a=n.renderTasks,o=n.operatorList
if(a.size>0||!o.lastChunk)return!1}}catch(e){r.e(e)}finally{r.f()}this._intentStates.clear(),this.objs.clear(),this._annotationPromises.clear(),this._jsActionsPromise=null,this._structTreePromise=null,e&&this._stats&&(this._stats=new _display_utils.StatTimer)
var i,s=_createForOfIteratorHelper(this._bitmaps)
try{for(s.s();!(i=s.n()).done;){i.value.close()}}catch(e){s.e(e)}finally{s.f()}return this._bitmaps.clear(),this.pendingCleanup=!1,!0}},{key:"_startRenderPage",value:function _startRenderPage(e,t){var r=this._intentStates.get(t)
r&&(this._stats&&this._stats.timeEnd("Page Request"),r.displayReadyCapability&&r.displayReadyCapability.resolve(e))}},{key:"_renderPageChunk",value:function _renderPageChunk(e,t){for(var r=0,n=e.length;r<n;r++)t.operatorList.fnArray.push(e.fnArray[r]),t.operatorList.argsArray.push(e.argsArray[r])
t.operatorList.lastChunk=e.lastChunk,t.operatorList.separateAnnots=e.separateAnnots
var a,o=_createForOfIteratorHelper(t.renderTasks)
try{for(o.s();!(a=o.n()).done;){a.value.operatorListChanged()}}catch(e){o.e(e)}finally{o.f()}e.lastChunk&&this._tryCleanup()}},{key:"_pumpOperatorList",value:function _pumpOperatorList(e){var t=this,r=e.renderingIntent,n=e.cacheKey,a=e.annotationStorageMap,o=this._transport.messageHandler.sendWithStream("GetOperatorList",{pageIndex:this._pageIndex,intent:r,cacheKey:n,annotationStorage:a}).getReader(),i=this._intentStates.get(n)
i.streamReader=o
var s=function pump(){o.read().then(function(e){var r=e.value
e.done?i.streamReader=null:t._transport.destroyed||(t._renderPageChunk(r,i),s())},function(e){if(i.streamReader=null,!t._transport.destroyed){if(i.operatorList){i.operatorList.lastChunk=!0
var r,n=_createForOfIteratorHelper(i.renderTasks)
try{for(n.s();!(r=n.n()).done;){r.value.operatorListChanged()}}catch(e){n.e(e)}finally{n.f()}t._tryCleanup()}if(i.displayReadyCapability)i.displayReadyCapability.reject(e)
else{if(!i.opListReadCapability)throw e
i.opListReadCapability.reject(e)}}})}
s()}},{key:"_abortOperatorList",value:function _abortOperatorList(e){var t=this,r=e.intentState,n=e.reason,a=e.force,o=void 0!==a&&a
if(r.streamReader){if(!o){if(r.renderTasks.size>0)return
if(n instanceof _display_utils.RenderingCancelledException)return void(r.streamReaderCancelTimeout=setTimeout(function(){t._abortOperatorList({intentState:r,reason:n,force:!0}),r.streamReaderCancelTimeout=null},RENDERING_CANCELLED_TIMEOUT))}if(r.streamReader.cancel(new _util.AbortException(n.message)).catch(function(){}),r.streamReader=null,!this._transport.destroyed){var i,s=_createForOfIteratorHelper(this._intentStates)
try{for(s.s();!(i=s.n()).done;){var l=_slicedToArray(i.value,2),c=l[0]
if(l[1]===r){this._intentStates.delete(c)
break}}}catch(e){s.e(e)}finally{s.f()}this.cleanup()}}}},{key:"stats",get:function get(){return this._stats}}])}()
exports.PDFPageProxy=PDFPageProxy
var LoopbackPort=function(){return _createClass(function LoopbackPort(){_classCallCheck(this,LoopbackPort),this._listeners=[],this._deferred=Promise.resolve()},[{key:"postMessage",value:function postMessage(e,t){var r=this,n={data:structuredClone(e,t)}
this._deferred.then(function(){var e,t=_createForOfIteratorHelper(r._listeners)
try{for(t.s();!(e=t.n()).done;){e.value.call(r,n)}}catch(e){t.e(e)}finally{t.f()}})}},{key:"addEventListener",value:function addEventListener(e,t){this._listeners.push(t)}},{key:"removeEventListener",value:function removeEventListener(e,t){var r=this._listeners.indexOf(t)
this._listeners.splice(r,1)}},{key:"terminate",value:function terminate(){this._listeners.length=0}}])}()
exports.LoopbackPort=LoopbackPort
var PDFWorkerUtil={isWorkerDisabled:!1,fallbackWorkerSrc:null,fakeWorkerId:0}
if(exports.PDFWorkerUtil=PDFWorkerUtil,_is_node.isNodeJS)PDFWorkerUtil.isWorkerDisabled=!0,PDFWorkerUtil.fallbackWorkerSrc="./pdf.worker.js"
else if("object"===("undefined"==typeof document?"undefined":_typeof(document))){var _document,_document$currentScri,pdfjsFilePath=null===(_document=document)||void 0===_document?void 0:null===(_document$currentScri=_document.currentScript)||void 0===_document$currentScri?void 0:_document$currentScri.src
pdfjsFilePath&&(PDFWorkerUtil.fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}PDFWorkerUtil.isSameOrigin=function(e,t){var r
try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(e){return!1}var n=new URL(t,r)
return r.origin===n.origin},PDFWorkerUtil.createCDNWrapper=function(e){var t='importScripts("'.concat(e,'");')
return URL.createObjectURL(new Blob([t]))}
var PDFWorker=function(){function PDFWorker(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=void 0===t?null:t,n=e.port,a=void 0===n?null:n,o=e.verbosity,i=void 0===o?(0,_util.getVerbosityLevel)():o
if(_classCallCheck(this,PDFWorker),a&&_workerPorts._.has(a))throw new Error("Cannot use more than one PDFWorker per port.")
if(this.name=r,this.destroyed=!1,this.verbosity=i,this._readyCapability=(0,_util.createPromiseCapability)(),this._port=null,this._webWorker=null,this._messageHandler=null,a)return _workerPorts._.set(a,this),void this._initializeFromPort(a)
this._initialize()}return _createClass(PDFWorker,[{key:"promise",get:function get(){return this._readyCapability.promise}},{key:"port",get:function get(){return this._port}},{key:"messageHandler",get:function get(){return this._messageHandler}},{key:"_initializeFromPort",value:function _initializeFromPort(e){this._port=e,this._messageHandler=new _message_handler.MessageHandler("main","worker",e),this._messageHandler.on("ready",function(){}),this._readyCapability.resolve()}},{key:"_initialize",value:function _initialize(){var e=this
if(!PDFWorkerUtil.isWorkerDisabled&&!PDFWorker._mainThreadWorkerMessageHandler){var t=PDFWorker.workerSrc
try{PDFWorkerUtil.isSameOrigin(window.location.href,t)||(t=PDFWorkerUtil.createCDNWrapper(new URL(t,window.location).href))
var r=new Worker(t),n=new _message_handler.MessageHandler("main","worker",r),a=function terminateEarly(){r.removeEventListener("error",o),n.destroy(),r.terminate(),e.destroyed?e._readyCapability.reject(new Error("Worker was destroyed")):e._setupFakeWorker()},o=function onWorkerError(){e._webWorker||a()}
r.addEventListener("error",o),n.on("test",function(t){r.removeEventListener("error",o),e.destroyed?a():t?(e._messageHandler=n,e._port=r,e._webWorker=r,e._readyCapability.resolve(),n.send("configure",{verbosity:e.verbosity})):(e._setupFakeWorker(),n.destroy(),r.terminate())}),n.on("ready",function(t){if(r.removeEventListener("error",o),e.destroyed)a()
else try{i()}catch(t){e._setupFakeWorker()}})
var i=function sendTest(){var e=new Uint8Array
n.send("test",e,[e.buffer])}
return void i()}catch(e){(0,_util.info)("The worker has been disabled.")}}this._setupFakeWorker()}},{key:"_setupFakeWorker",value:function _setupFakeWorker(){var e=this
PDFWorkerUtil.isWorkerDisabled||((0,_util.warn)("Setting up fake worker."),PDFWorkerUtil.isWorkerDisabled=!0),PDFWorker._setupFakeWorkerGlobal.then(function(t){if(e.destroyed)e._readyCapability.reject(new Error("Worker was destroyed"))
else{var r=new LoopbackPort
e._port=r
var n="fake".concat(PDFWorkerUtil.fakeWorkerId++),a=new _message_handler.MessageHandler(n+"_worker",n,r)
t.setup(a,r)
var o=new _message_handler.MessageHandler(n,n+"_worker",r)
e._messageHandler=o,e._readyCapability.resolve(),o.send("configure",{verbosity:e.verbosity})}}).catch(function(t){e._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(t.message,'".')))})}},{key:"destroy",value:function destroy(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),_workerPorts._.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}}],[{key:"fromPort",value:function fromPort(e){if(null==e||!e.port)throw new Error("PDFWorker.fromPort - invalid method signature.")
return _assertClassBrand(PDFWorker,this,_workerPorts)._.has(e.port)?_assertClassBrand(PDFWorker,this,_workerPorts)._.get(e.port):new PDFWorker(e)}},{key:"workerSrc",get:function get(){if(_worker_options.GlobalWorkerOptions.workerSrc)return _worker_options.GlobalWorkerOptions.workerSrc
if(null!==PDFWorkerUtil.fallbackWorkerSrc)return _is_node.isNodeJS||(0,_display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'),PDFWorkerUtil.fallbackWorkerSrc
throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}},{key:"_mainThreadWorkerMessageHandler",get:function get(){try{var e
return(null===(e=globalThis.pdfjsWorker)||void 0===e?void 0:e.WorkerMessageHandler)||null}catch(e){return null}}},{key:"_setupFakeWorkerGlobal",get:function get(){var _this12=this,loader=function(){var _ref13=_asyncToGenerator(_regenerator().m(function _callee4(){var mainWorkerMessageHandler,worker
return _regenerator().w(function(_context4){for(;;)switch(_context4.n){case 0:if(mainWorkerMessageHandler=_this12._mainThreadWorkerMessageHandler,!mainWorkerMessageHandler){_context4.n=1
break}return _context4.a(2,mainWorkerMessageHandler)
case 1:if(!_is_node.isNodeJS){_context4.n=2
break}return worker=eval("require")(_this12.workerSrc),_context4.a(2,worker.WorkerMessageHandler)
case 2:return _context4.n=3,(0,_display_utils.loadScript)(_this12.workerSrc)
case 3:return _context4.a(2,window.pdfjsWorker.WorkerMessageHandler)}},_callee4)}))
return function loader(){return _ref13.apply(this,arguments)}}()
return(0,_util.shadow)(this,"_setupFakeWorkerGlobal",loader())}}])}(),_workerPorts={_:new WeakMap}
exports.PDFWorker=PDFWorker,PDFWorker.getWorkerSrc=function(){return(0,_display_utils.deprecated)("`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead."),this.workerSrc}
var _docStats=new WeakMap,_pageCache=new WeakMap,_pagePromises=new WeakMap,_metadataPromise=new WeakMap,WorkerTransport=function(){return _createClass(function WorkerTransport(e,t,r,n){_classCallCheck(this,WorkerTransport),_classPrivateFieldInitSpec(this,_docStats,null),_classPrivateFieldInitSpec(this,_pageCache,new Map),_classPrivateFieldInitSpec(this,_pagePromises,new Map),_classPrivateFieldInitSpec(this,_metadataPromise,null),this.messageHandler=e,this.loadingTask=t,this.commonObjs=new PDFObjects,this.fontLoader=new _font_loader.FontLoader({docId:t.docId,onUnsupportedFeature:this._onUnsupportedFeature.bind(this),ownerDocument:n.ownerDocument,styleElement:n.styleElement}),this._params=n,n.useWorkerFetch||(this.CMapReaderFactory=new n.CMapReaderFactory({baseUrl:n.cMapUrl,isCompressed:n.cMapPacked}),this.StandardFontDataFactory=new n.StandardFontDataFactory({baseUrl:n.standardFontDataUrl})),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=r,this._fullReader=null,this._lastProgress=null,this.downloadInfoCapability=(0,_util.createPromiseCapability)(),this.setupMessageHandler()},[{key:"annotationStorage",get:function get(){return(0,_util.shadow)(this,"annotationStorage",new _annotation_storage.AnnotationStorage)}},{key:"stats",get:function get(){return _classPrivateFieldGet(_docStats,this)}},{key:"getRenderingIntent",value:function getRenderingIntent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_util.AnnotationMode.ENABLE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=_util.RenderingIntentFlag.DISPLAY,o=null
switch(e){case"any":a=_util.RenderingIntentFlag.ANY
break
case"display":break
case"print":a=_util.RenderingIntentFlag.PRINT
break
default:(0,_util.warn)("getRenderingIntent - invalid intent: ".concat(e))}switch(t){case _util.AnnotationMode.DISABLE:a+=_util.RenderingIntentFlag.ANNOTATIONS_DISABLE
break
case _util.AnnotationMode.ENABLE:break
case _util.AnnotationMode.ENABLE_FORMS:a+=_util.RenderingIntentFlag.ANNOTATIONS_FORMS
break
case _util.AnnotationMode.ENABLE_STORAGE:o=((a+=_util.RenderingIntentFlag.ANNOTATIONS_STORAGE)&_util.RenderingIntentFlag.PRINT&&r instanceof _annotation_storage.PrintAnnotationStorage?r:this.annotationStorage).serializable
break
default:(0,_util.warn)("getRenderingIntent - invalid annotationMode: ".concat(t))}return n&&(a+=_util.RenderingIntentFlag.OPLIST),{renderingIntent:a,cacheKey:"".concat(a,"_").concat(_annotation_storage.AnnotationStorage.getHash(o)),annotationStorageMap:o}}},{key:"destroy",value:function destroy(){var e=this
if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0,this.destroyCapability=(0,_util.createPromiseCapability)(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"))
var t,r=[],n=_createForOfIteratorHelper(_classPrivateFieldGet(_pageCache,this).values())
try{for(n.s();!(t=n.n()).done;){var a=t.value
r.push(a._destroy())}}catch(e){n.e(e)}finally{n.f()}_classPrivateFieldGet(_pageCache,this).clear(),_classPrivateFieldGet(_pagePromises,this).clear(),this.hasOwnProperty("annotationStorage")&&this.annotationStorage.resetModified()
var o=this.messageHandler.sendWithPromise("Terminate",null)
return r.push(o),Promise.all(r).then(function(){e.commonObjs.clear(),e.fontLoader.clear(),_classPrivateFieldSet(_metadataPromise,e,null),e._getFieldObjectsPromise=null,e._hasJSActionsPromise=null,e._networkStream&&e._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()},this.destroyCapability.reject),this.destroyCapability.promise}},{key:"setupMessageHandler",value:function setupMessageHandler(){var e=this,t=this.messageHandler,r=this.loadingTask
t.on("GetReader",function(t,r){(0,_util.assert)(e._networkStream,"GetReader - no `IPDFStream` instance available."),e._fullReader=e._networkStream.getFullReader(),e._fullReader.onProgress=function(t){e._lastProgress={loaded:t.loaded,total:t.total}},r.onPull=function(){e._fullReader.read().then(function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t),"GetReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(t),1,[t]))}).catch(function(e){r.error(e)})},r.onCancel=function(t){e._fullReader.cancel(t),r.ready.catch(function(t){if(!e.destroyed)throw t})}}),t.on("ReaderHeadersReady",function(t){var n=(0,_util.createPromiseCapability)(),a=e._fullReader
return a.headersReady.then(function(){if(!a.isStreamingSupported||!a.isRangeSupported){var t
if(e._lastProgress)null===(t=r.onProgress)||void 0===t||t.call(r,e._lastProgress)
a.onProgress=function(e){var t
null===(t=r.onProgress)||void 0===t||t.call(r,{loaded:e.loaded,total:e.total})}}n.resolve({isStreamingSupported:a.isStreamingSupported,isRangeSupported:a.isRangeSupported,contentLength:a.contentLength})},n.reject),n.promise}),t.on("GetRangeReader",function(t,r){(0,_util.assert)(e._networkStream,"GetRangeReader - no `IPDFStream` instance available.")
var n=e._networkStream.getRangeReader(t.begin,t.end)
n?(r.onPull=function(){n.read().then(function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t),"GetRangeReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(t),1,[t]))}).catch(function(e){r.error(e)})},r.onCancel=function(t){n.cancel(t),r.ready.catch(function(t){if(!e.destroyed)throw t})}):r.close()}),t.on("GetDoc",function(t){var n=t.pdfInfo
e._numPages=n.numPages,e._htmlForXfa=n.htmlForXfa,delete n.htmlForXfa,r._capability.resolve(new PDFDocumentProxy(n,e))}),t.on("DocException",function(e){var t
switch(e.name){case"PasswordException":t=new _util.PasswordException(e.message,e.code)
break
case"InvalidPDFException":t=new _util.InvalidPDFException(e.message)
break
case"MissingPDFException":t=new _util.MissingPDFException(e.message)
break
case"UnexpectedResponseException":t=new _util.UnexpectedResponseException(e.message,e.status)
break
case"UnknownErrorException":t=new _util.UnknownErrorException(e.message,e.details)
break
default:(0,_util.unreachable)("DocException - expected a valid Error.")}r._capability.reject(t)}),t.on("PasswordRequest",function(t){if(e._passwordCapability=(0,_util.createPromiseCapability)(),r.onPassword){try{r.onPassword(function updatePassword(t){t instanceof Error?e._passwordCapability.reject(t):e._passwordCapability.resolve({password:t})},t.code)}catch(t){e._passwordCapability.reject(t)}}else e._passwordCapability.reject(new _util.PasswordException(t.message,t.code))
return e._passwordCapability.promise}),t.on("DataLoaded",function(t){var n
null===(n=r.onProgress)||void 0===n||n.call(r,{loaded:t.length,total:t.length}),e.downloadInfoCapability.resolve(t)}),t.on("StartRenderPage",function(t){e.destroyed||_classPrivateFieldGet(_pageCache,e).get(t.pageIndex)._startRenderPage(t.transparency,t.cacheKey)}),t.on("commonobj",function(r){var n,a=_slicedToArray(r,3),o=a[0],i=a[1],s=a[2]
if(!e.destroyed&&!e.commonObjs.has(o))switch(i){case"Font":var l=e._params
if("error"in s){var c=s.error;(0,_util.warn)("Error during font loading: ".concat(c)),e.commonObjs.resolve(o,c)
break}var u=null
l.pdfBug&&null!==(n=globalThis.FontInspector)&&void 0!==n&&n.enabled&&(u={registerFont:function registerFont(e,t){globalThis.FontInspector.fontAdded(e,t)}})
var d=new _font_loader.FontFaceObject(s,{isEvalSupported:l.isEvalSupported,disableFontFace:l.disableFontFace,ignoreErrors:l.ignoreErrors,onUnsupportedFeature:e._onUnsupportedFeature.bind(e),fontRegistry:u})
e.fontLoader.bind(d).catch(function(e){return t.sendWithPromise("FontFallback",{id:o})}).finally(function(){!l.fontExtraProperties&&d.data&&(d.data=null),e.commonObjs.resolve(o,d)})
break
case"FontPath":case"Image":e.commonObjs.resolve(o,s)
break
default:throw new Error("Got unknown common object type ".concat(i))}}),t.on("obj",function(t){var r=_slicedToArray(t,4),n=r[0],a=r[1],o=r[2],i=r[3]
if(!e.destroyed){var s=_classPrivateFieldGet(_pageCache,e).get(a)
if(!s.objs.has(n))switch(o){case"Image":s.objs.resolve(n,i)
if(i){var l
if(i.bitmap){var c=i.bitmap
l=i.width*i.height*4,s._bitmaps.add(c)}else{var u
l=(null===(u=i.data)||void 0===u?void 0:u.length)||0}l>8e6&&(s.cleanupAfterRender=!0)}break
case"Pattern":s.objs.resolve(n,i)
break
default:throw new Error("Got unknown object type ".concat(o))}}}),t.on("DocProgress",function(t){var n
e.destroyed||null===(n=r.onProgress)||void 0===n||n.call(r,{loaded:t.loaded,total:t.total})}),t.on("DocStats",function(t){e.destroyed||_classPrivateFieldSet(_docStats,e,Object.freeze({streamTypes:Object.freeze(t.streamTypes),fontTypes:Object.freeze(t.fontTypes)}))}),t.on("UnsupportedFeature",this._onUnsupportedFeature.bind(this)),t.on("FetchBuiltInCMap",function(t){return e.destroyed?Promise.reject(new Error("Worker was destroyed.")):e.CMapReaderFactory?e.CMapReaderFactory.fetch(t):Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))}),t.on("FetchStandardFontData",function(t){return e.destroyed?Promise.reject(new Error("Worker was destroyed.")):e.StandardFontDataFactory?e.StandardFontDataFactory.fetch(t):Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."))})}},{key:"_onUnsupportedFeature",value:function _onUnsupportedFeature(e){var t,r,n=e.featureId
this.destroyed||null===(t=(r=this.loadingTask).onUnsupportedFeature)||void 0===t||t.call(r,n)}},{key:"getData",value:function getData(){return this.messageHandler.sendWithPromise("GetData",null)}},{key:"getPage",value:function getPage(e){var t=this
if(!Number.isInteger(e)||e<=0||e>this._numPages)return Promise.reject(new Error("Invalid page request."))
var r=e-1,n=_classPrivateFieldGet(_pagePromises,this).get(r)
if(n)return n
var a=this.messageHandler.sendWithPromise("GetPage",{pageIndex:r}).then(function(e){if(t.destroyed)throw new Error("Transport destroyed")
var n=new PDFPageProxy(r,e,t,t._params.ownerDocument,t._params.pdfBug)
return _classPrivateFieldGet(_pageCache,t).set(r,n),n})
return _classPrivateFieldGet(_pagePromises,this).set(r,a),a}},{key:"getPageIndex",value:function getPageIndex(e){return"object"!==_typeof(e)||null===e||!Number.isInteger(e.num)||e.num<0||!Number.isInteger(e.gen)||e.gen<0?Promise.reject(new Error("Invalid pageIndex request.")):this.messageHandler.sendWithPromise("GetPageIndex",{num:e.num,gen:e.gen})}},{key:"getAnnotations",value:function getAnnotations(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})}},{key:"saveDocument",value:function saveDocument(){var e,t,r=this
return this.messageHandler.sendWithPromise("SaveDocument",{isPureXfa:!!this._htmlForXfa,numPages:this._numPages,annotationStorage:this.annotationStorage.serializable,filename:null!==(e=null===(t=this._fullReader)||void 0===t?void 0:t.filename)&&void 0!==e?e:null}).finally(function(){r.annotationStorage.resetModified()})}},{key:"getFieldObjects",value:function getFieldObjects(){return this._getFieldObjectsPromise||(this._getFieldObjectsPromise=this.messageHandler.sendWithPromise("GetFieldObjects",null))}},{key:"hasJSActions",value:function hasJSActions(){return this._hasJSActionsPromise||(this._hasJSActionsPromise=this.messageHandler.sendWithPromise("HasJSActions",null))}},{key:"getCalculationOrderIds",value:function getCalculationOrderIds(){return this.messageHandler.sendWithPromise("GetCalculationOrderIds",null)}},{key:"getDestinations",value:function getDestinations(){return this.messageHandler.sendWithPromise("GetDestinations",null)}},{key:"getDestination",value:function getDestination(e){return"string"!=typeof e?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:e})}},{key:"getPageLabels",value:function getPageLabels(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}},{key:"getPageLayout",value:function getPageLayout(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}},{key:"getPageMode",value:function getPageMode(){return this.messageHandler.sendWithPromise("GetPageMode",null)}},{key:"getViewerPreferences",value:function getViewerPreferences(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}},{key:"getOpenAction",value:function getOpenAction(){return this.messageHandler.sendWithPromise("GetOpenAction",null)}},{key:"getAttachments",value:function getAttachments(){return this.messageHandler.sendWithPromise("GetAttachments",null)}},{key:"getJavaScript",value:function getJavaScript(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}},{key:"getDocJSActions",value:function getDocJSActions(){return this.messageHandler.sendWithPromise("GetDocJSActions",null)}},{key:"getPageJSActions",value:function getPageJSActions(e){return this.messageHandler.sendWithPromise("GetPageJSActions",{pageIndex:e})}},{key:"getStructTree",value:function getStructTree(e){return this.messageHandler.sendWithPromise("GetStructTree",{pageIndex:e})}},{key:"getOutline",value:function getOutline(){return this.messageHandler.sendWithPromise("GetOutline",null)}},{key:"getOptionalContentConfig",value:function getOptionalContentConfig(){return this.messageHandler.sendWithPromise("GetOptionalContentConfig",null).then(function(e){return new _optional_content_config.OptionalContentConfig(e)})}},{key:"getPermissions",value:function getPermissions(){return this.messageHandler.sendWithPromise("GetPermissions",null)}},{key:"getMetadata",value:function getMetadata(){var e=this
return _classPrivateFieldGet(_metadataPromise,this)||_classPrivateFieldSet(_metadataPromise,this,this.messageHandler.sendWithPromise("GetMetadata",null).then(function(t){var r,n,a,o
return{info:t[0],metadata:t[1]?new _metadata.Metadata(t[1]):null,contentDispositionFilename:null!==(r=null===(n=e._fullReader)||void 0===n?void 0:n.filename)&&void 0!==r?r:null,contentLength:null!==(a=null===(o=e._fullReader)||void 0===o?void 0:o.contentLength)&&void 0!==a?a:null}}))}},{key:"getMarkInfo",value:function getMarkInfo(){return this.messageHandler.sendWithPromise("GetMarkInfo",null)}},{key:"startCleanup",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee5(){var e,t,r,n,a,o=arguments
return _regenerator().w(function(i){for(;;)switch(i.p=i.n){case 0:return e=o.length>0&&void 0!==o[0]&&o[0],i.n=1,this.messageHandler.sendWithPromise("Cleanup",null)
case 1:if(!this.destroyed){i.n=2
break}return i.a(2)
case 2:t=_createForOfIteratorHelper(_classPrivateFieldGet(_pageCache,this).values()),i.p=3,t.s()
case 4:if((r=t.n()).done){i.n=6
break}if(n=r.value,n.cleanup()){i.n=5
break}throw new Error("startCleanup: Page ".concat(n.pageNumber," is currently rendering."))
case 5:i.n=4
break
case 6:i.n=8
break
case 7:i.p=7,a=i.v,t.e(a)
case 8:return i.p=8,t.f(),i.f(8)
case 9:this.commonObjs.clear(),e||this.fontLoader.clear(),_classPrivateFieldSet(_metadataPromise,this,null),this._getFieldObjectsPromise=null,this._hasJSActionsPromise=null
case 10:return i.a(2)}},_callee5,this,[[3,7,8,9]])}))
return function startCleanup(){return e.apply(this,arguments)}}()},{key:"loadingParams",get:function get(){var e=this._params
return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch:e.disableAutoFetch,enableXfa:e.enableXfa})}}])}(),_objs=new WeakMap,_PDFObjects_brand=new WeakSet,PDFObjects=function(){return _createClass(function PDFObjects(){_classCallCheck(this,PDFObjects),_classPrivateMethodInitSpec(this,_PDFObjects_brand),_classPrivateFieldInitSpec(this,_objs,Object.create(null))},[{key:"get",value:function get(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(t){var r=_assertClassBrand(_PDFObjects_brand,this,_ensureObj).call(this,e)
return r.capability.promise.then(function(){return t(r.data)}),null}var n=_classPrivateFieldGet(_objs,this)[e]
if(null==n||!n.capability.settled)throw new Error("Requesting object that isn't resolved yet ".concat(e,"."))
return n.data}},{key:"has",value:function has(e){var t=_classPrivateFieldGet(_objs,this)[e]
return(null==t?void 0:t.capability.settled)||!1}},{key:"resolve",value:function resolve(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=_assertClassBrand(_PDFObjects_brand,this,_ensureObj).call(this,e)
r.data=t,r.capability.resolve()}},{key:"clear",value:function clear(){_classPrivateFieldSet(_objs,this,Object.create(null))}}])}()
function _ensureObj(e){var t=_classPrivateFieldGet(_objs,this)[e]
return t||(_classPrivateFieldGet(_objs,this)[e]={capability:(0,_util.createPromiseCapability)(),data:null})}var _internalRenderTask=new WeakMap,RenderTask=function(){return _createClass(function RenderTask(e){_classCallCheck(this,RenderTask),_classPrivateFieldInitSpec(this,_internalRenderTask,null),_classPrivateFieldSet(_internalRenderTask,this,e),this.onContinue=null},[{key:"promise",get:function get(){return _classPrivateFieldGet(_internalRenderTask,this).capability.promise}},{key:"cancel",value:function cancel(){_classPrivateFieldGet(_internalRenderTask,this).cancel()}},{key:"separateAnnots",get:function get(){var e=_classPrivateFieldGet(_internalRenderTask,this).operatorList.separateAnnots
if(!e)return!1
var t=_classPrivateFieldGet(_internalRenderTask,this).annotationCanvasMap
return e.form||e.canvas&&(null==t?void 0:t.size)>0}}])}()
exports.RenderTask=RenderTask
var InternalRenderTask=function(){return _createClass(function InternalRenderTask(e){var t=e.callback,r=e.params,n=e.objs,a=e.commonObjs,o=e.annotationCanvasMap,i=e.operatorList,s=e.pageIndex,l=e.canvasFactory,c=e.useRequestAnimationFrame,u=void 0!==c&&c,d=e.pdfBug,h=void 0!==d&&d,p=e.pageColors,f=void 0===p?null:p
_classCallCheck(this,InternalRenderTask),this.callback=t,this.params=r,this.objs=n,this.commonObjs=a,this.annotationCanvasMap=o,this.operatorListIdx=null,this.operatorList=i,this._pageIndex=s,this.canvasFactory=l,this._pdfBug=h,this.pageColors=f,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this._useRequestAnimationFrame=!0===u&&"undefined"!=typeof window,this.cancelled=!1,this.capability=(0,_util.createPromiseCapability)(),this.task=new RenderTask(this),this._cancelBound=this.cancel.bind(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=r.canvasContext.canvas},[{key:"completed",get:function get(){return this.capability.promise.catch(function(){})}},{key:"initializeGraphics",value:function initializeGraphics(e){var t,r=e.transparency,n=void 0!==r&&r,a=e.optionalContentConfig
if(!this.cancelled){if(this._canvas){if(_canvasInUse._.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.")
_canvasInUse._.add(this._canvas)}this._pdfBug&&null!==(t=globalThis.StepperManager)&&void 0!==t&&t.enabled&&(this.stepper=globalThis.StepperManager.create(this._pageIndex),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint())
var o=this.params,i=o.canvasContext,s=o.viewport,l=o.transform,c=o.imageLayer,u=o.background
this.gfx=new _canvas.CanvasGraphics(i,this.commonObjs,this.objs,this.canvasFactory,c,a,this.annotationCanvasMap,this.pageColors),this.gfx.beginDrawing({transform:l,viewport:s,transparency:n,background:u}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}}},{key:"cancel",value:function cancel(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
this.running=!1,this.cancelled=!0,this.gfx&&this.gfx.endDrawing(),this._canvas&&_canvasInUse._.delete(this._canvas),this.callback(e||new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex+1),"canvas"))}},{key:"operatorListChanged",value:function operatorListChanged(){this.graphicsReady?(this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()):this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)}},{key:"_continue",value:function _continue(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}},{key:"_scheduleNext",value:function _scheduleNext(){var e=this
this._useRequestAnimationFrame?window.requestAnimationFrame(function(){e._nextBound().catch(e._cancelBound)}):Promise.resolve().then(this._nextBound).catch(this._cancelBound)}},{key:"_next",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee6(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:if(!this.cancelled){e.n=1
break}return e.a(2)
case 1:this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this._canvas&&_canvasInUse._.delete(this._canvas),this.callback()))
case 2:return e.a(2)}},_callee6,this)}))
return function _next(){return e.apply(this,arguments)}}()}])}(),_canvasInUse={_:new WeakSet},version="2.16.105"
exports.version=version
var build="172ccdbe5"
exports.build=build},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.PrintAnnotationStorage=t.AnnotationStorage=void 0
var n=r(1),a=r(6),o=r(10),i=new WeakSet,s=function(){return _createClass(function AnnotationStorage(){_classCallCheck(this,AnnotationStorage),_classPrivateMethodInitSpec(this,i),this._storage=new Map,this._modified=!1,this.onSetModified=null,this.onResetModified=null,this.onAnnotationEditor=null},[{key:"getValue",value:function getValue(e,t){var r=this._storage.get(e)
return void 0===r?t:Object.assign(t,r)}},{key:"getRawValue",value:function getRawValue(e){return this._storage.get(e)}},{key:"remove",value:function remove(e){if(this._storage.delete(e),0===this._storage.size&&this.resetModified(),"function"==typeof this.onAnnotationEditor){var t,r=_createForOfIteratorHelper(this._storage.values())
try{for(r.s();!(t=r.n()).done;){if(t.value instanceof a.AnnotationEditor)return}}catch(e){r.e(e)}finally{r.f()}this.onAnnotationEditor(null)}}},{key:"setValue",value:function setValue(e,t){var r=this._storage.get(e),n=!1
if(void 0!==r)for(var o=0,s=Object.entries(t);o<s.length;o++){var l=_slicedToArray(s[o],2),c=l[0],u=l[1]
r[c]!==u&&(n=!0,r[c]=u)}else n=!0,this._storage.set(e,t)
n&&_assertClassBrand(i,this,_setModified).call(this),t instanceof a.AnnotationEditor&&"function"==typeof this.onAnnotationEditor&&this.onAnnotationEditor(t.constructor._type)}},{key:"has",value:function has(e){return this._storage.has(e)}},{key:"getAll",value:function getAll(){return this._storage.size>0?(0,n.objectFromMap)(this._storage):null}},{key:"size",get:function get(){return this._storage.size}},{key:"resetModified",value:function resetModified(){this._modified&&(this._modified=!1,"function"==typeof this.onResetModified&&this.onResetModified())}},{key:"print",get:function get(){return new c(this)}},{key:"serializable",get:function get(){if(0===this._storage.size)return null
var e,t=new Map,r=_createForOfIteratorHelper(this._storage)
try{for(r.s();!(e=r.n()).done;){var n=_slicedToArray(e.value,2),o=n[0],i=n[1],s=i instanceof a.AnnotationEditor?i.serialize():i
s&&t.set(o,s)}}catch(e){r.e(e)}finally{r.f()}return t}}],[{key:"getHash",value:function getHash(e){if(!e)return""
var t,r=new o.MurmurHash3_64,n=_createForOfIteratorHelper(e)
try{for(n.s();!(t=n.n()).done;){var a=_slicedToArray(t.value,2),i=a[0],s=a[1]
r.update("".concat(i,":").concat(JSON.stringify(s)))}}catch(e){n.e(e)}finally{n.f()}return r.hexdigest()}}])}()
function _setModified(){this._modified||(this._modified=!0,"function"==typeof this.onSetModified&&this.onSetModified())}t.AnnotationStorage=s
var l=new WeakMap,c=function(e){function PrintAnnotationStorage(e){var t
return _classCallCheck(this,PrintAnnotationStorage),_classPrivateFieldInitSpec(t=_callSuper(this,PrintAnnotationStorage),l,null),_classPrivateFieldSet(l,t,structuredClone(e.serializable)),t}return _inherits(PrintAnnotationStorage,s),_createClass(PrintAnnotationStorage,[{key:"print",get:function get(){(0,n.unreachable)("Should not call PrintAnnotationStorage.print")}},{key:"serializable",get:function get(){return _classPrivateFieldGet(l,this)}}])}()
t.PrintAnnotationStorage=c},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationEditor=void 0
var n=r(7),a=r(1),o=new WeakMap,i=new WeakMap,s=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,d=function(){return _createClass(function AnnotationEditor(e){_classCallCheck(this,AnnotationEditor),_classPrivateFieldInitSpec(this,o,this.focusin.bind(this)),_classPrivateFieldInitSpec(this,i,this.focusout.bind(this)),_classPrivateFieldInitSpec(this,s,!1),_classPrivateFieldInitSpec(this,l,!1),_classPrivateFieldInitSpec(this,c,!1),_classPrivateFieldInitSpec(this,u,AnnotationEditor._zIndex++),this.constructor===AnnotationEditor&&(0,a.unreachable)("Cannot initialize AnnotationEditor."),this.parent=e.parent,this.id=e.id,this.width=this.height=null,this.pageIndex=e.parent.pageIndex,this.name=e.name,this.div=null
var t=_slicedToArray(this.parent.viewportBaseDimensions,2),r=t[0],n=t[1]
this.x=e.x/r,this.y=e.y/n,this.rotation=this.parent.viewport.rotation,this.isAttachedToDOM=!1},[{key:"setInBackground",value:function setInBackground(){this.div.style.zIndex=0}},{key:"setInForeground",value:function setInForeground(){this.div.style.zIndex=_classPrivateFieldGet(u,this)}},{key:"focusin",value:function focusin(e){_classPrivateFieldGet(s,this)?_classPrivateFieldSet(s,this,!1):this.parent.setSelected(this)}},{key:"focusout",value:function focusout(e){if(this.isAttachedToDOM){var t=e.relatedTarget
null!=t&&t.closest("#".concat(this.id))||(e.preventDefault(),this.parent.isMultipleSelection||this.commitOrRemove())}}},{key:"commitOrRemove",value:function commitOrRemove(){this.isEmpty()?this.remove():this.commit()}},{key:"commit",value:function commit(){this.parent.addToAnnotationStorage(this)}},{key:"dragstart",value:function dragstart(e){var t=this.parent.div.getBoundingClientRect()
this.startX=e.clientX-t.x,this.startY=e.clientY-t.y,e.dataTransfer.setData("text/plain",this.id),e.dataTransfer.effectAllowed="move"}},{key:"setAt",value:function setAt(e,t,r,n){var a=_slicedToArray(this.parent.viewportBaseDimensions,2),o=a[0],i=a[1],s=_slicedToArray(this.screenToPageTranslation(r,n),2)
r=s[0],n=s[1],this.x=(e+r)/o,this.y=(t+n)/i,this.div.style.left="".concat(100*this.x,"%"),this.div.style.top="".concat(100*this.y,"%")}},{key:"translate",value:function translate(e,t){var r=_slicedToArray(this.parent.viewportBaseDimensions,2),n=r[0],a=r[1],o=_slicedToArray(this.screenToPageTranslation(e,t),2)
e=o[0],t=o[1],this.x+=e/n,this.y+=t/a,this.div.style.left="".concat(100*this.x,"%"),this.div.style.top="".concat(100*this.y,"%")}},{key:"screenToPageTranslation",value:function screenToPageTranslation(e,t){switch(this.parent.viewport.rotation){case 90:return[t,-e]
case 180:return[-e,-t]
case 270:return[-t,e]
default:return[e,t]}}},{key:"setDims",value:function setDims(e,t){var r=_slicedToArray(this.parent.viewportBaseDimensions,2),n=r[0],a=r[1]
this.div.style.width="".concat(100*e/n,"%"),this.div.style.height="".concat(100*t/a,"%")}},{key:"getInitialTranslation",value:function getInitialTranslation(){return[0,0]}},{key:"render",value:function render(){this.div=document.createElement("div"),this.div.setAttribute("data-editor-rotation",(360-this.rotation)%360),this.div.className=this.name,this.div.setAttribute("id",this.id),this.div.setAttribute("tabIndex",0),this.setInForeground(),this.div.addEventListener("focusin",_classPrivateFieldGet(o,this)),this.div.addEventListener("focusout",_classPrivateFieldGet(i,this))
var e=_slicedToArray(this.getInitialTranslation(),2),t=e[0],r=e[1]
return this.translate(t,r),(0,n.bindEvents)(this,this.div,["dragstart","pointerdown"]),this.div}},{key:"pointerdown",value:function pointerdown(e){var t=n.KeyboardManager.platform.isMac
0!==e.button||e.ctrlKey&&t?e.preventDefault():(e.ctrlKey&&!t||e.shiftKey||e.metaKey&&t?this.parent.toggleSelected(this):this.parent.setSelected(this),_classPrivateFieldSet(s,this,!0))}},{key:"getRect",value:function getRect(e,t){var r=_slicedToArray(this.parent.viewportBaseDimensions,2),n=r[0],a=r[1],o=_slicedToArray(this.parent.pageDimensions,2),i=o[0],s=o[1],l=i*e/n,c=s*t/a,u=this.x*i,d=this.y*s,h=this.width*i,p=this.height*s
switch(this.rotation){case 0:return[u+l,s-d-c-p,u+l+h,s-d-c]
case 90:return[u+c,s-d+l,u+c+p,s-d+l+h]
case 180:return[u-l-h,s-d+c,u-l,s-d+c+p]
case 270:return[u-c-p,s-d-l-h,u-c,s-d-l]
default:throw new Error("Invalid rotation")}}},{key:"getRectInCurrentCoords",value:function getRectInCurrentCoords(e,t){var r=_slicedToArray(e,4),n=r[0],a=r[1],o=r[2],i=r[3],s=o-n,l=i-a
switch(this.rotation){case 0:return[n,t-i,s,l]
case 90:return[n,t-a,l,s]
case 180:return[o,t-a,s,l]
case 270:return[o,t-i,l,s]
default:throw new Error("Invalid rotation")}}},{key:"onceAdded",value:function onceAdded(){}},{key:"isEmpty",value:function isEmpty(){return!1}},{key:"enableEditMode",value:function enableEditMode(){_classPrivateFieldSet(c,this,!0)}},{key:"disableEditMode",value:function disableEditMode(){_classPrivateFieldSet(c,this,!1)}},{key:"isInEditMode",value:function isInEditMode(){return _classPrivateFieldGet(c,this)}},{key:"shouldGetKeyboardEvents",value:function shouldGetKeyboardEvents(){return!1}},{key:"needsToBeRebuilt",value:function needsToBeRebuilt(){return this.div&&!this.isAttachedToDOM}},{key:"rebuild",value:function rebuild(){var e
null===(e=this.div)||void 0===e||e.addEventListener("focusin",_classPrivateFieldGet(o,this))}},{key:"serialize",value:function serialize(){(0,a.unreachable)("An editor must be serializable")}},{key:"remove",value:function remove(){this.div.removeEventListener("focusin",_classPrivateFieldGet(o,this)),this.div.removeEventListener("focusout",_classPrivateFieldGet(i,this)),this.isEmpty()||this.commit(),this.parent.remove(this)}},{key:"select",value:function select(){var e
null===(e=this.div)||void 0===e||e.classList.add("selectedEditor")}},{key:"unselect",value:function unselect(){var e
null===(e=this.div)||void 0===e||e.classList.remove("selectedEditor")}},{key:"updateParams",value:function updateParams(e,t){}},{key:"disableEditing",value:function disableEditing(){}},{key:"enableEditing",value:function enableEditing(){}},{key:"propertiesToUpdate",get:function get(){return{}}},{key:"contentDiv",get:function get(){return this.div}},{key:"isEditing",get:function get(){return _classPrivateFieldGet(l,this)},set:function set(e){_classPrivateFieldSet(l,this,e),e?(this.parent.setSelected(this),this.parent.setActiveEditor(this)):this.parent.setActiveEditor(null)}}],[{key:"_defaultLineColor",get:function get(){return(0,a.shadow)(this,"_defaultLineColor",this._colorManager.getHexCode("CanvasText"))}},{key:"deserialize",value:function deserialize(e,t){var r=new this.prototype.constructor({parent:t,id:t.getNextId()})
r.rotation=e.rotation
var n=_slicedToArray(t.pageDimensions,2),a=n[0],o=n[1],i=_slicedToArray(r.getRectInCurrentCoords(e.rect,o),4),s=i[0],l=i[1],c=i[2],u=i[3]
return r.x=s/a,r.y=l/o,r.width=c/a,r.height=u/o,r}}])}()
_defineProperty(d,"_colorManager",new n.ColorManager),_defineProperty(d,"_zIndex",1),t.AnnotationEditor=d},function(e,t,r){var n
Object.defineProperty(t,"__esModule",{value:!0}),t.KeyboardManager=t.CommandManager=t.ColorManager=t.AnnotationEditorUIManager=void 0,t.bindEvents=function bindEvents(e,t,r){var n,a=_createForOfIteratorHelper(r)
try{for(a.s();!(n=a.n()).done;){var o=n.value
t.addEventListener(o,e[o].bind(e))}}catch(e){a.e(e)}finally{a.f()}},t.opacityToHex=function opacityToHex(e){return Math.round(Math.min(255,Math.max(1,255*e))).toString(16).padStart(2,"0")}
var a=r(1),o=r(8)
var i=new WeakMap,s=function(){return _createClass(function IdManager(){_classCallCheck(this,IdManager),_classPrivateFieldInitSpec(this,i,0)},[{key:"getId",value:function getId(){var e,t
return"".concat(a.AnnotationEditorPrefix).concat((_classPrivateFieldSet(i,this,(e=_classPrivateFieldGet(i,this),t=e++,e)),t))}}])}(),l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,h=function(){return _createClass(function CommandManager(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:128
_classCallCheck(this,CommandManager),_classPrivateFieldInitSpec(this,l,[]),_classPrivateFieldInitSpec(this,c,!1),_classPrivateFieldInitSpec(this,u,void 0),_classPrivateFieldInitSpec(this,d,-1),_classPrivateFieldSet(u,this,e)},[{key:"add",value:function add(e){var t=e.cmd,r=e.undo,n=e.mustExec,a=e.type,o=void 0===a?NaN:a,i=e.overwriteIfSameType,s=void 0!==i&&i,h=e.keepUndo,p=void 0!==h&&h
if(n&&t(),!_classPrivateFieldGet(c,this)){var f={cmd:t,undo:r,type:o}
if(-1===_classPrivateFieldGet(d,this))return _classPrivateFieldGet(l,this).length>0&&(_classPrivateFieldGet(l,this).length=0),_classPrivateFieldSet(d,this,0),void _classPrivateFieldGet(l,this).push(f)
if(s&&_classPrivateFieldGet(l,this)[_classPrivateFieldGet(d,this)].type===o)return p&&(f.undo=_classPrivateFieldGet(l,this)[_classPrivateFieldGet(d,this)].undo),void(_classPrivateFieldGet(l,this)[_classPrivateFieldGet(d,this)]=f)
var v=_classPrivateFieldGet(d,this)+1
v===_classPrivateFieldGet(u,this)?_classPrivateFieldGet(l,this).splice(0,1):(_classPrivateFieldSet(d,this,v),v<_classPrivateFieldGet(l,this).length&&_classPrivateFieldGet(l,this).splice(v)),_classPrivateFieldGet(l,this).push(f)}}},{key:"undo",value:function undo(){-1!==_classPrivateFieldGet(d,this)&&(_classPrivateFieldSet(c,this,!0),_classPrivateFieldGet(l,this)[_classPrivateFieldGet(d,this)].undo(),_classPrivateFieldSet(c,this,!1),_classPrivateFieldSet(d,this,_classPrivateFieldGet(d,this)-1))}},{key:"redo",value:function redo(){_classPrivateFieldGet(d,this)<_classPrivateFieldGet(l,this).length-1&&(_classPrivateFieldSet(d,this,_classPrivateFieldGet(d,this)+1),_classPrivateFieldSet(c,this,!0),_classPrivateFieldGet(l,this)[_classPrivateFieldGet(d,this)].cmd(),_classPrivateFieldSet(c,this,!1))}},{key:"hasSomethingToUndo",value:function hasSomethingToUndo(){return-1!==_classPrivateFieldGet(d,this)}},{key:"hasSomethingToRedo",value:function hasSomethingToRedo(){return _classPrivateFieldGet(d,this)<_classPrivateFieldGet(l,this).length-1}},{key:"destroy",value:function destroy(){_classPrivateFieldSet(l,this,null)}}])}()
t.CommandManager=h
var p=new WeakSet,f=function(){return _createClass(function KeyboardManager(e){_classCallCheck(this,KeyboardManager),_classPrivateMethodInitSpec(this,p),this.buffer=[],this.callbacks=new Map,this.allKeys=new Set
var t,r=KeyboardManager.platform.isMac,n=_createForOfIteratorHelper(e)
try{for(n.s();!(t=n.n()).done;){var a,o=_slicedToArray(t.value,2),i=o[0],s=o[1],l=_createForOfIteratorHelper(i)
try{for(l.s();!(a=l.n()).done;){var c=a.value,u=c.startsWith("mac+")
r&&u?(this.callbacks.set(c.slice(4),s),this.allKeys.add(c.split("+").at(-1))):r||u||(this.callbacks.set(c,s),this.allKeys.add(c.split("+").at(-1)))}}catch(e){l.e(e)}finally{l.f()}}}catch(e){n.e(e)}finally{n.f()}},[{key:"exec",value:function exec(e,t){if(this.allKeys.has(t.key)){var r=this.callbacks.get(_assertClassBrand(p,this,_serialize).call(this,t))
r&&(r.bind(e)(),t.stopPropagation(),t.preventDefault())}}}],[{key:"platform",get:function get(){var e="undefined"!=typeof navigator?navigator.platform:""
return(0,a.shadow)(this,"platform",{isWin:e.includes("Win"),isMac:e.includes("Mac")})}}])}()
function _serialize(e){e.altKey&&this.buffer.push("alt"),e.ctrlKey&&this.buffer.push("ctrl"),e.metaKey&&this.buffer.push("meta"),e.shiftKey&&this.buffer.push("shift"),this.buffer.push(e.key)
var t=this.buffer.join("+")
return this.buffer.length=0,t}t.KeyboardManager=f
var v=new WeakMap,m=function(){return _createClass(function ClipboardManager(){_classCallCheck(this,ClipboardManager),_classPrivateFieldInitSpec(this,v,null)},[{key:"copy",value:function copy(e){e&&(Array.isArray(e)?_classPrivateFieldSet(v,this,e.map(function(e){return e.serialize()})):_classPrivateFieldSet(v,this,[e.serialize()]),_classPrivateFieldSet(v,this,_classPrivateFieldGet(v,this).filter(function(e){return!!e})),0===_classPrivateFieldGet(v,this).length&&_classPrivateFieldSet(v,this,null))}},{key:"paste",value:function paste(){return _classPrivateFieldGet(v,this)}},{key:"isEmpty",value:function isEmpty(){return null===_classPrivateFieldGet(v,this)}},{key:"destroy",value:function destroy(){_classPrivateFieldSet(v,this,null)}}])}(),g=function(){function ColorManager(){_classCallCheck(this,ColorManager)}return _createClass(ColorManager,[{key:"_colors",get:function get(){var e=new Map([["CanvasText",null],["Canvas",null]])
return(0,o.getColorValues)(e),(0,a.shadow)(this,"_colors",e)}},{key:"convert",value:function convert(e){var t=(0,o.getRGB)(e)
if(!window.matchMedia("(forced-colors: active)").matches)return t
var r,n=_createForOfIteratorHelper(this._colors)
try{for(n.s();!(r=n.n()).done;){var a=_slicedToArray(r.value,2),i=a[0]
if(a[1].every(function(e,r){return e===t[r]}))return ColorManager._colorsMapping.get(i)}}catch(e){n.e(e)}finally{n.f()}return t}},{key:"getHexCode",value:function getHexCode(e){var t,r=this._colors.get(e)
return r?(t=a.Util).makeHexColor.apply(t,_toConsumableArray(r)):e}}])}()
_defineProperty(g,"_colorsMapping",new Map([["CanvasText",[0,0,0]],["Canvas",[255,255,255]]])),t.ColorManager=g
var _=new WeakMap,b=new WeakMap,y=new WeakMap,k=new WeakMap,S=new WeakMap,C=new WeakMap,P=new WeakMap,E=new WeakMap,x=new WeakMap,w=new WeakMap,A=new WeakMap,F=new WeakMap,M=new WeakMap,T=new WeakMap,R=new WeakMap,I=new WeakMap,O=new WeakMap,D=new WeakSet,L=function(){function AnnotationEditorUIManager(e,t){_classCallCheck(this,AnnotationEditorUIManager),_classPrivateMethodInitSpec(this,D),_classPrivateFieldInitSpec(this,_,null),_classPrivateFieldInitSpec(this,b,new Map),_classPrivateFieldInitSpec(this,y,new Map),_classPrivateFieldInitSpec(this,k,new m),_classPrivateFieldInitSpec(this,S,new h),_classPrivateFieldInitSpec(this,C,0),_classPrivateFieldInitSpec(this,P,null),_classPrivateFieldInitSpec(this,E,null),_classPrivateFieldInitSpec(this,x,new s),_classPrivateFieldInitSpec(this,w,!1),_classPrivateFieldInitSpec(this,A,a.AnnotationEditorType.NONE),_classPrivateFieldInitSpec(this,F,new Set),_classPrivateFieldInitSpec(this,M,this.keydown.bind(this)),_classPrivateFieldInitSpec(this,T,this.onEditingAction.bind(this)),_classPrivateFieldInitSpec(this,R,this.onPageChanging.bind(this)),_classPrivateFieldInitSpec(this,I,{isEditing:!1,isEmpty:!0,hasEmptyClipboard:!0,hasSomethingToUndo:!1,hasSomethingToRedo:!1,hasSelectedEditor:!1}),_classPrivateFieldInitSpec(this,O,null),_classPrivateFieldSet(O,this,e),_classPrivateFieldSet(E,this,t),_classPrivateFieldGet(E,this)._on("editingaction",_classPrivateFieldGet(T,this)),_classPrivateFieldGet(E,this)._on("pagechanging",_classPrivateFieldGet(R,this))}return _createClass(AnnotationEditorUIManager,[{key:"destroy",value:function destroy(){_assertClassBrand(D,this,_removeKeyboardManager).call(this),_classPrivateFieldGet(E,this)._off("editingaction",_classPrivateFieldGet(T,this)),_classPrivateFieldGet(E,this)._off("pagechanging",_classPrivateFieldGet(R,this))
var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(y,this).values())
try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(e){t.e(e)}finally{t.f()}_classPrivateFieldGet(y,this).clear(),_classPrivateFieldGet(b,this).clear(),_classPrivateFieldSet(_,this,null),_classPrivateFieldGet(F,this).clear(),_classPrivateFieldGet(k,this).destroy(),_classPrivateFieldGet(S,this).destroy()}},{key:"onPageChanging",value:function onPageChanging(e){var t=e.pageNumber
_classPrivateFieldSet(C,this,t-1)}},{key:"focusMainContainer",value:function focusMainContainer(){_classPrivateFieldGet(O,this).focus()}},{key:"keydown",value:function keydown(e){var t
null!==(t=this.getActive())&&void 0!==t&&t.shouldGetKeyboardEvents()||AnnotationEditorUIManager._keyboardManager.exec(this,e)}},{key:"onEditingAction",value:function onEditingAction(e){["undo","redo","cut","copy","paste","delete","selectAll"].includes(e.name)&&this[e.name]()}},{key:"setEditingState",value:function setEditingState(e){e?(_assertClassBrand(D,this,_addKeyboardManager).call(this),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{isEditing:_classPrivateFieldGet(A,this)!==a.AnnotationEditorType.NONE,isEmpty:_assertClassBrand(D,this,_isEmpty).call(this),hasSomethingToUndo:_classPrivateFieldGet(S,this).hasSomethingToUndo(),hasSomethingToRedo:_classPrivateFieldGet(S,this).hasSomethingToRedo(),hasSelectedEditor:!1,hasEmptyClipboard:_classPrivateFieldGet(k,this).isEmpty()})):(_assertClassBrand(D,this,_removeKeyboardManager).call(this),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{isEditing:!1}))}},{key:"registerEditorTypes",value:function registerEditorTypes(e){_classPrivateFieldSet(P,this,e)
var t,r=_createForOfIteratorHelper(_classPrivateFieldGet(P,this))
try{for(r.s();!(t=r.n()).done;){var n=t.value
_assertClassBrand(D,this,_dispatchUpdateUI).call(this,n.defaultPropertiesToUpdate)}}catch(e){r.e(e)}finally{r.f()}}},{key:"getId",value:function getId(){return _classPrivateFieldGet(x,this).getId()}},{key:"addLayer",value:function addLayer(e){_classPrivateFieldGet(y,this).set(e.pageIndex,e),_classPrivateFieldGet(w,this)?e.enable():e.disable()}},{key:"removeLayer",value:function removeLayer(e){_classPrivateFieldGet(y,this).delete(e.pageIndex)}},{key:"updateMode",value:function updateMode(e){if(_classPrivateFieldSet(A,this,e),e===a.AnnotationEditorType.NONE)this.setEditingState(!1),_assertClassBrand(D,this,_disableAll).call(this)
else{this.setEditingState(!0),_assertClassBrand(D,this,_enableAll).call(this)
var t,r=_createForOfIteratorHelper(_classPrivateFieldGet(y,this).values())
try{for(r.s();!(t=r.n()).done;){t.value.updateMode(e)}}catch(e){r.e(e)}finally{r.f()}}}},{key:"updateToolbar",value:function updateToolbar(e){e!==_classPrivateFieldGet(A,this)&&_classPrivateFieldGet(E,this).dispatch("switchannotationeditormode",{source:this,mode:e})}},{key:"updateParams",value:function updateParams(e,t){var r,n=_createForOfIteratorHelper(_classPrivateFieldGet(F,this))
try{for(n.s();!(r=n.n()).done;){r.value.updateParams(e,t)}}catch(e){n.e(e)}finally{n.f()}var a,o=_createForOfIteratorHelper(_classPrivateFieldGet(P,this))
try{for(o.s();!(a=o.n()).done;){a.value.updateDefaultParams(e,t)}}catch(e){o.e(e)}finally{o.f()}}},{key:"getEditors",value:function getEditors(e){var t,r=[],n=_createForOfIteratorHelper(_classPrivateFieldGet(b,this).values())
try{for(n.s();!(t=n.n()).done;){var a=t.value
a.pageIndex===e&&r.push(a)}}catch(e){n.e(e)}finally{n.f()}return r}},{key:"getEditor",value:function getEditor(e){return _classPrivateFieldGet(b,this).get(e)}},{key:"addEditor",value:function addEditor(e){_classPrivateFieldGet(b,this).set(e.id,e)}},{key:"removeEditor",value:function removeEditor(e){_classPrivateFieldGet(b,this).delete(e.id),this.unselect(e)}},{key:"setActiveEditor",value:function setActiveEditor(e){_classPrivateFieldGet(_,this)!==e&&(_classPrivateFieldSet(_,this,e),e&&_assertClassBrand(D,this,_dispatchUpdateUI).call(this,e.propertiesToUpdate))}},{key:"toggleSelected",value:function toggleSelected(e){if(_classPrivateFieldGet(F,this).has(e))return _classPrivateFieldGet(F,this).delete(e),e.unselect(),void _assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSelectedEditor:this.hasSelection})
_classPrivateFieldGet(F,this).add(e),e.select(),_assertClassBrand(D,this,_dispatchUpdateUI).call(this,e.propertiesToUpdate),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSelectedEditor:!0})}},{key:"setSelected",value:function setSelected(e){var t,r=_createForOfIteratorHelper(_classPrivateFieldGet(F,this))
try{for(r.s();!(t=r.n()).done;){var n=t.value
n!==e&&n.unselect()}}catch(e){r.e(e)}finally{r.f()}_classPrivateFieldGet(F,this).clear(),_classPrivateFieldGet(F,this).add(e),e.select(),_assertClassBrand(D,this,_dispatchUpdateUI).call(this,e.propertiesToUpdate),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSelectedEditor:!0})}},{key:"isSelected",value:function isSelected(e){return _classPrivateFieldGet(F,this).has(e)}},{key:"unselect",value:function unselect(e){e.unselect(),_classPrivateFieldGet(F,this).delete(e),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSelectedEditor:this.hasSelection})}},{key:"hasSelection",get:function get(){return 0!==_classPrivateFieldGet(F,this).size}},{key:"undo",value:function undo(){_classPrivateFieldGet(S,this).undo(),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSomethingToUndo:_classPrivateFieldGet(S,this).hasSomethingToUndo(),hasSomethingToRedo:!0,isEmpty:_assertClassBrand(D,this,_isEmpty).call(this)})}},{key:"redo",value:function redo(){_classPrivateFieldGet(S,this).redo(),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSomethingToUndo:!0,hasSomethingToRedo:_classPrivateFieldGet(S,this).hasSomethingToRedo(),isEmpty:_assertClassBrand(D,this,_isEmpty).call(this)})}},{key:"addCommands",value:function addCommands(e){_classPrivateFieldGet(S,this).add(e),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSomethingToUndo:!0,hasSomethingToRedo:!1,isEmpty:_assertClassBrand(D,this,_isEmpty).call(this)})}},{key:"delete",value:function _delete(){var e=this
if(_classPrivateFieldGet(_,this)&&_classPrivateFieldGet(_,this).commitOrRemove(),this.hasSelection){var t=_toConsumableArray(_classPrivateFieldGet(F,this))
this.addCommands({cmd:function cmd(){var e,r=_createForOfIteratorHelper(t)
try{for(r.s();!(e=r.n()).done;)e.value.remove()}catch(e){r.e(e)}finally{r.f()}},undo:function undo(){var r,n=_createForOfIteratorHelper(t)
try{for(n.s();!(r=n.n()).done;){var a=r.value
_assertClassBrand(D,e,_addEditorToLayer).call(e,a)}}catch(e){n.e(e)}finally{n.f()}},mustExec:!0})}}},{key:"copy",value:function copy(){if(_classPrivateFieldGet(_,this)&&_classPrivateFieldGet(_,this).commitOrRemove(),this.hasSelection){var e,t=[],r=_createForOfIteratorHelper(_classPrivateFieldGet(F,this))
try{for(r.s();!(e=r.n()).done;){var n=e.value
n.isEmpty()||t.push(n)}}catch(e){r.e(e)}finally{r.f()}if(0===t.length)return
_classPrivateFieldGet(k,this).copy(t),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasEmptyClipboard:!1})}}},{key:"cut",value:function cut(){this.copy(),this.delete()}},{key:"paste",value:function paste(){var e=this
if(!_classPrivateFieldGet(k,this).isEmpty()){this.unselectAll()
var t=_classPrivateFieldGet(y,this).get(_classPrivateFieldGet(C,this)),r=_classPrivateFieldGet(k,this).paste().map(function(e){return t.deserialize(e)})
this.addCommands({cmd:function cmd(){var t,n=_createForOfIteratorHelper(r)
try{for(n.s();!(t=n.n()).done;){var a=t.value
_assertClassBrand(D,e,_addEditorToLayer).call(e,a)}}catch(e){n.e(e)}finally{n.f()}_assertClassBrand(D,e,_selectEditors).call(e,r)},undo:function undo(){var e,t=_createForOfIteratorHelper(r)
try{for(t.s();!(e=t.n()).done;)e.value.remove()}catch(e){t.e(e)}finally{t.f()}},mustExec:!0})}}},{key:"selectAll",value:function selectAll(){var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(F,this))
try{for(t.s();!(e=t.n()).done;){e.value.commit()}}catch(e){t.e(e)}finally{t.f()}_assertClassBrand(D,this,_selectEditors).call(this,_classPrivateFieldGet(b,this).values())}},{key:"unselectAll",value:function unselectAll(){if(_classPrivateFieldGet(_,this))_classPrivateFieldGet(_,this).commitOrRemove()
else if(0!==_assertClassBrand(D,this,_selectEditors).size){var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(F,this))
try{for(t.s();!(e=t.n()).done;){e.value.unselect()}}catch(e){t.e(e)}finally{t.f()}_classPrivateFieldGet(F,this).clear(),_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSelectedEditor:!1})}}},{key:"isActive",value:function isActive(e){return _classPrivateFieldGet(_,this)===e}},{key:"getActive",value:function getActive(){return _classPrivateFieldGet(_,this)}},{key:"getMode",value:function getMode(){return _classPrivateFieldGet(A,this)}}])}()
function _addKeyboardManager(){_classPrivateFieldGet(O,this).addEventListener("keydown",_classPrivateFieldGet(M,this))}function _removeKeyboardManager(){_classPrivateFieldGet(O,this).removeEventListener("keydown",_classPrivateFieldGet(M,this))}function _dispatchUpdateStates(e){var t=this
Object.entries(e).some(function(e){var r=_slicedToArray(e,2),n=r[0],a=r[1]
return _classPrivateFieldGet(I,t)[n]!==a})&&_classPrivateFieldGet(E,this).dispatch("annotationeditorstateschanged",{source:this,details:Object.assign(_classPrivateFieldGet(I,this),e)})}function _dispatchUpdateUI(e){_classPrivateFieldGet(E,this).dispatch("annotationeditorparamschanged",{source:this,details:e})}function _enableAll(){if(!_classPrivateFieldGet(w,this)){_classPrivateFieldSet(w,this,!0)
var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(y,this).values())
try{for(t.s();!(e=t.n()).done;){e.value.enable()}}catch(e){t.e(e)}finally{t.f()}}}function _disableAll(){if(this.unselectAll(),_classPrivateFieldGet(w,this)){_classPrivateFieldSet(w,this,!1)
var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(y,this).values())
try{for(t.s();!(e=t.n()).done;){e.value.disable()}}catch(e){t.e(e)}finally{t.f()}}}function _addEditorToLayer(e){var t=_classPrivateFieldGet(y,this).get(e.pageIndex)
t?t.addOrRebuild(e):this.addEditor(e)}function _isEmpty(){if(0===_classPrivateFieldGet(b,this).size)return!0
if(1===_classPrivateFieldGet(b,this).size){var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(b,this).values())
try{for(t.s();!(e=t.n()).done;){return e.value.isEmpty()}}catch(e){t.e(e)}finally{t.f()}}return!1}function _selectEditors(e){_classPrivateFieldGet(F,this).clear()
var t,r=_createForOfIteratorHelper(e)
try{for(r.s();!(t=r.n()).done;){var n=t.value
n.isEmpty()||(_classPrivateFieldGet(F,this).add(n),n.select())}}catch(e){r.e(e)}finally{r.f()}_assertClassBrand(D,this,_dispatchUpdateStates).call(this,{hasSelectedEditor:!0})}_defineProperty(L,"_keyboardManager",new f([[["ctrl+a","mac+meta+a"],(n=L).prototype.selectAll],[["ctrl+c","mac+meta+c"],n.prototype.copy],[["ctrl+v","mac+meta+v"],n.prototype.paste],[["ctrl+x","mac+meta+x"],n.prototype.cut],[["ctrl+z","mac+meta+z"],n.prototype.undo],[["ctrl+y","ctrl+shift+Z","mac+meta+shift+Z"],n.prototype.redo],[["Backspace","alt+Backspace","ctrl+Backspace","shift+Backspace","mac+Backspace","mac+alt+Backspace","mac+ctrl+Backspace","Delete","ctrl+Delete","shift+Delete"],n.prototype.delete],[["Escape","mac+Escape"],n.prototype.unselectAll]])),t.AnnotationEditorUIManager=L},function(e,t,r){var n
Object.defineProperty(t,"__esModule",{value:!0}),t.StatTimer=t.RenderingCancelledException=t.PixelsPerInch=t.PageViewport=t.PDFDateString=t.DOMStandardFontDataFactory=t.DOMSVGFactory=t.DOMCanvasFactory=t.DOMCMapReaderFactory=t.AnnotationPrefix=void 0,t.deprecated=function deprecated(e){},t.getColorValues=function getColorValues(e){var t=document.createElement("span")
t.style.visibility="hidden",document.body.append(t)
var r,n=_createForOfIteratorHelper(e.keys())
try{for(n.s();!(r=n.n()).done;){var a=r.value
t.style.color=a
var o=window.getComputedStyle(t).color
e.set(a,getRGB(o))}}catch(e){n.e(e)}finally{n.f()}t.remove()},t.getCurrentTransform=function getCurrentTransform(e){var t=e.getTransform(),r=t.a,n=t.b,a=t.c,o=t.d,i=t.e,s=t.f
return[r,n,a,o,i,s]},t.getCurrentTransformInverse=function getCurrentTransformInverse(e){var t=e.getTransform().invertSelf(),r=t.a,n=t.b,a=t.c,o=t.d,i=t.e,s=t.f
return[r,n,a,o,i,s]},t.getFilenameFromUrl=function getFilenameFromUrl(e){var t=e.indexOf("#"),r=e.indexOf("?"),n=Math.min(t>0?t:e.length,r>0?r:e.length)
return e.substring(e.lastIndexOf("/",n)+1,n)},t.getPdfFilenameFromUrl=function getPdfFilenameFromUrl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"document.pdf"
if("string"!=typeof e)return t
if(isDataScheme(e))return(0,o.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'),t
var r=/[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,n=/^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(e),a=r.exec(n[1])||r.exec(n[2])||r.exec(n[3])
if(a&&(a=a[0]).includes("%"))try{a=r.exec(decodeURIComponent(a))[0]}catch(e){}return a||t},t.getRGB=getRGB,t.getXfaPageViewport=function getXfaPageViewport(e,t){var r=t.scale,n=void 0===r?1:r,a=t.rotation,o=void 0===a?0:a,i=e.attributes.style,s=i.width,l=i.height,c=[0,0,parseInt(s),parseInt(l)]
return new d({viewBox:c,scale:n,rotation:o})},t.isDataScheme=isDataScheme,t.isPdfFile=function isPdfFile(e){return"string"==typeof e&&/\.pdf$/i.test(e)},t.isValidFetchUrl=isValidFetchUrl,t.loadScript=function loadScript(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return new Promise(function(r,n){var a=document.createElement("script")
a.src=e,a.onload=function(e){t&&a.remove(),r(e)},a.onerror=function(){n(new Error("Cannot load script at: ".concat(a.src)))},(document.head||document.documentElement).append(a)})}
var a=r(9),o=r(1)
t.AnnotationPrefix="pdfjs_internal_id_"
var i=_createClass(function PixelsPerInch(){_classCallCheck(this,PixelsPerInch)})
n=i,_defineProperty(i,"CSS",96),_defineProperty(i,"PDF",72),_defineProperty(i,"PDF_TO_CSS_UNITS",n.CSS/n.PDF),t.PixelsPerInch=i
var s=function(e){function DOMCanvasFactory(){var e,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).ownerDocument,r=void 0===t?globalThis.document:t
return _classCallCheck(this,DOMCanvasFactory),(e=_callSuper(this,DOMCanvasFactory))._document=r,e}return _inherits(DOMCanvasFactory,a.BaseCanvasFactory),_createClass(DOMCanvasFactory,[{key:"_createCanvas",value:function _createCanvas(e,t){var r=this._document.createElement("canvas")
return r.width=e,r.height=t,r}}])}()
function fetchData(e){return _fetchData.apply(this,arguments)}function _fetchData(){return(_fetchData=_asyncToGenerator(_regenerator().m(function _callee8(e){var t,r,n,a,i,s,l=arguments
return _regenerator().w(function(c){for(;;)switch(c.n){case 0:if(t=l.length>1&&void 0!==l[1]&&l[1],!isValidFetchUrl(e,document.baseURI)){c.n=7
break}return c.n=1,fetch(e)
case 1:if((r=c.v).ok){c.n=2
break}throw new Error(r.statusText)
case 2:if(!t){c.n=4
break}return a=Uint8Array,c.n=3,r.arrayBuffer()
case 3:i=c.v,n=new a(i),c.n=6
break
case 4:return s=o.stringToBytes,c.n=5,r.text()
case 5:n=s(c.v)
case 6:return c.a(2,n)
case 7:return c.a(2,new Promise(function(r,n){var a=new XMLHttpRequest
a.open("GET",e,!0),t&&(a.responseType="arraybuffer"),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){var e
if(200===a.status||0===a.status)if(t&&a.response?e=new Uint8Array(a.response):!t&&a.responseText&&(e=(0,o.stringToBytes)(a.responseText)),e)return void r(e)
n(new Error(a.statusText))}},a.send(null)}))}},_callee8)}))).apply(this,arguments)}t.DOMCanvasFactory=s
var l=function(e){function DOMCMapReaderFactory(){return _classCallCheck(this,DOMCMapReaderFactory),_callSuper(this,DOMCMapReaderFactory,arguments)}return _inherits(DOMCMapReaderFactory,a.BaseCMapReaderFactory),_createClass(DOMCMapReaderFactory,[{key:"_fetchData",value:function _fetchData(e,t){return fetchData(e,this.isCompressed).then(function(e){return{cMapData:e,compressionType:t}})}}])}()
t.DOMCMapReaderFactory=l
var c=function(e){function DOMStandardFontDataFactory(){return _classCallCheck(this,DOMStandardFontDataFactory),_callSuper(this,DOMStandardFontDataFactory,arguments)}return _inherits(DOMStandardFontDataFactory,a.BaseStandardFontDataFactory),_createClass(DOMStandardFontDataFactory,[{key:"_fetchData",value:function _fetchData(e){return fetchData(e,!0)}}])}()
t.DOMStandardFontDataFactory=c
var u=function(e){function DOMSVGFactory(){return _classCallCheck(this,DOMSVGFactory),_callSuper(this,DOMSVGFactory,arguments)}return _inherits(DOMSVGFactory,a.BaseSVGFactory),_createClass(DOMSVGFactory,[{key:"_createSVG",value:function _createSVG(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}}])}()
t.DOMSVGFactory=u
var d=function(){function PageViewport(e){var t=e.viewBox,r=e.scale,n=e.rotation,a=e.offsetX,o=void 0===a?0:a,i=e.offsetY,s=void 0===i?0:i,l=e.dontFlip,c=void 0!==l&&l
_classCallCheck(this,PageViewport),this.viewBox=t,this.scale=r,this.rotation=n,this.offsetX=o,this.offsetY=s
var u,d,h,p,f,v,m,g,_=(t[2]+t[0])/2,b=(t[3]+t[1])/2
switch((n%=360)<0&&(n+=360),n){case 180:u=-1,d=0,h=0,p=1
break
case 90:u=0,d=1,h=1,p=0
break
case 270:u=0,d=-1,h=-1,p=0
break
case 0:u=1,d=0,h=0,p=-1
break
default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")}c&&(h=-h,p=-p),0===u?(f=Math.abs(b-t[1])*r+o,v=Math.abs(_-t[0])*r+s,m=Math.abs(t[3]-t[1])*r,g=Math.abs(t[2]-t[0])*r):(f=Math.abs(_-t[0])*r+o,v=Math.abs(b-t[1])*r+s,m=Math.abs(t[2]-t[0])*r,g=Math.abs(t[3]-t[1])*r),this.transform=[u*r,d*r,h*r,p*r,f-u*r*_-h*r*b,v-d*r*_-p*r*b],this.width=m,this.height=g}return _createClass(PageViewport,[{key:"clone",value:function clone(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scale,r=void 0===t?this.scale:t,n=e.rotation,a=void 0===n?this.rotation:n,o=e.offsetX,i=void 0===o?this.offsetX:o,s=e.offsetY,l=void 0===s?this.offsetY:s,c=e.dontFlip,u=void 0!==c&&c
return new PageViewport({viewBox:this.viewBox.slice(),scale:r,rotation:a,offsetX:i,offsetY:l,dontFlip:u})}},{key:"convertToViewportPoint",value:function convertToViewportPoint(e,t){return o.Util.applyTransform([e,t],this.transform)}},{key:"convertToViewportRectangle",value:function convertToViewportRectangle(e){var t=o.Util.applyTransform([e[0],e[1]],this.transform),r=o.Util.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],r[0],r[1]]}},{key:"convertToPdfPoint",value:function convertToPdfPoint(e,t){return o.Util.applyInverseTransform([e,t],this.transform)}}])}()
t.PageViewport=d
var h=function(e){function RenderingCancelledException(e,t){var r
return _classCallCheck(this,RenderingCancelledException),(r=_callSuper(this,RenderingCancelledException,[e,"RenderingCancelledException"])).type=t,r}return _inherits(RenderingCancelledException,o.BaseException),_createClass(RenderingCancelledException)}()
function isDataScheme(e){for(var t=e.length,r=0;r<t&&""===e[r].trim();)r++
return"data:"===e.substring(r,r+5).toLowerCase()}t.RenderingCancelledException=h
var p,f=function(){return _createClass(function StatTimer(){_classCallCheck(this,StatTimer),this.started=Object.create(null),this.times=[]},[{key:"time",value:function time(e){e in this.started&&(0,o.warn)("Timer is already running for ".concat(e)),this.started[e]=Date.now()}},{key:"timeEnd",value:function timeEnd(e){e in this.started||(0,o.warn)("Timer has not been started for ".concat(e)),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e]}},{key:"toString",value:function toString(){var e,t=[],r=0,n=_createForOfIteratorHelper(this.times)
try{for(n.s();!(e=n.n()).done;){var a=e.value.name
a.length>r&&(r=a.length)}}catch(e){n.e(e)}finally{n.f()}var o,i=_createForOfIteratorHelper(this.times)
try{for(i.s();!(o=i.n()).done;){var s=o.value,l=s.end-s.start
t.push("".concat(s.name.padEnd(r)," ").concat(l,"ms\n"))}}catch(e){i.e(e)}finally{i.f()}return t.join("")}}])}()
function isValidFetchUrl(e,t){try{var r=(t?new URL(e,t):new URL(e)).protocol
return"http:"===r||"https:"===r}catch(e){return!1}}t.StatTimer=f
var v=function(){return _createClass(function PDFDateString(){_classCallCheck(this,PDFDateString)},null,[{key:"toDateObject",value:function toDateObject(e){if(!e||"string"!=typeof e)return null
p||(p=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"))
var t=p.exec(e)
if(!t)return null
var r=parseInt(t[1],10),n=parseInt(t[2],10)
n=n>=1&&n<=12?n-1:0
var a=parseInt(t[3],10)
a=a>=1&&a<=31?a:1
var o=parseInt(t[4],10)
o=o>=0&&o<=23?o:0
var i=parseInt(t[5],10)
i=i>=0&&i<=59?i:0
var s=parseInt(t[6],10)
s=s>=0&&s<=59?s:0
var l=t[7]||"Z",c=parseInt(t[8],10)
c=c>=0&&c<=23?c:0
var u=parseInt(t[9],10)||0
return u=u>=0&&u<=59?u:0,"-"===l?(o+=c,i+=u):"+"===l&&(o-=c,i-=u),new Date(Date.UTC(r,n,a,o,i,s))}}])}()
function getRGB(e){if(e.startsWith("#")){var t=parseInt(e.slice(1),16)
return[(16711680&t)>>16,(65280&t)>>8,255&t]}return e.startsWith("rgb(")?e.slice(4,-1).split(",").map(function(e){return parseInt(e)}):e.startsWith("rgba(")?e.slice(5,-1).split(",").map(function(e){return parseInt(e)}).slice(0,3):((0,o.warn)('Not a valid color format: "'.concat(e,'"')),[0,0,0])}t.PDFDateString=v},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.BaseStandardFontDataFactory=t.BaseSVGFactory=t.BaseCanvasFactory=t.BaseCMapReaderFactory=void 0
var n=r(1),a=function(){return _createClass(function BaseCanvasFactory(){_classCallCheck(this,BaseCanvasFactory),this.constructor===BaseCanvasFactory&&(0,n.unreachable)("Cannot initialize BaseCanvasFactory.")},[{key:"create",value:function create(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size")
var r=this._createCanvas(e,t)
return{canvas:r,context:r.getContext("2d")}}},{key:"reset",value:function reset(e,t,r){if(!e.canvas)throw new Error("Canvas is not specified")
if(t<=0||r<=0)throw new Error("Invalid canvas size")
e.canvas.width=t,e.canvas.height=r}},{key:"destroy",value:function destroy(e){if(!e.canvas)throw new Error("Canvas is not specified")
e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}},{key:"_createCanvas",value:function _createCanvas(e,t){(0,n.unreachable)("Abstract method `_createCanvas` called.")}}])}()
t.BaseCanvasFactory=a
var o=function(){return _createClass(function BaseCMapReaderFactory(e){var t=e.baseUrl,r=void 0===t?null:t,a=e.isCompressed,o=void 0!==a&&a
_classCallCheck(this,BaseCMapReaderFactory),this.constructor===BaseCMapReaderFactory&&(0,n.unreachable)("Cannot initialize BaseCMapReaderFactory."),this.baseUrl=r,this.isCompressed=o},[{key:"fetch",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee9(e){var t,r,a,o=this
return _regenerator().w(function(i){for(;;)switch(i.n){case 0:if(t=e.name,this.baseUrl){i.n=1
break}throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.')
case 1:if(t){i.n=2
break}throw new Error("CMap name must be specified.")
case 2:return r=this.baseUrl+t+(this.isCompressed?".bcmap":""),a=this.isCompressed?n.CMapCompressionType.BINARY:n.CMapCompressionType.NONE,i.a(2,this._fetchData(r,a).catch(function(e){throw new Error("Unable to load ".concat(o.isCompressed?"binary ":"","CMap at: ").concat(r))}))}},_callee9,this)}))
return function fetch(t){return e.apply(this,arguments)}}()},{key:"_fetchData",value:function _fetchData(e,t){(0,n.unreachable)("Abstract method `_fetchData` called.")}}])}()
t.BaseCMapReaderFactory=o
var i=function(){return _createClass(function BaseStandardFontDataFactory(e){var t=e.baseUrl,r=void 0===t?null:t
_classCallCheck(this,BaseStandardFontDataFactory),this.constructor===BaseStandardFontDataFactory&&(0,n.unreachable)("Cannot initialize BaseStandardFontDataFactory."),this.baseUrl=r},[{key:"fetch",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee0(e){var t,r
return _regenerator().w(function(n){for(;;)switch(n.n){case 0:if(t=e.filename,this.baseUrl){n.n=1
break}throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.')
case 1:if(t){n.n=2
break}throw new Error("Font filename must be specified.")
case 2:return r="".concat(this.baseUrl).concat(t),n.a(2,this._fetchData(r).catch(function(e){throw new Error("Unable to load font data at: ".concat(r))}))}},_callee0,this)}))
return function fetch(t){return e.apply(this,arguments)}}()},{key:"_fetchData",value:function _fetchData(e){(0,n.unreachable)("Abstract method `_fetchData` called.")}}])}()
t.BaseStandardFontDataFactory=i
var s=function(){return _createClass(function BaseSVGFactory(){_classCallCheck(this,BaseSVGFactory),this.constructor===BaseSVGFactory&&(0,n.unreachable)("Cannot initialize BaseSVGFactory.")},[{key:"create",value:function create(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(e<=0||t<=0)throw new Error("Invalid SVG dimensions")
var n=this._createSVG("svg:svg")
return n.setAttribute("version","1.1"),r||(n.setAttribute("width","".concat(e,"px")),n.setAttribute("height","".concat(t,"px"))),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("viewBox","0 0 ".concat(e," ").concat(t)),n}},{key:"createElement",value:function createElement(e){if("string"!=typeof e)throw new Error("Invalid SVG element type")
return this._createSVG(e)}},{key:"_createSVG",value:function _createSVG(e){(0,n.unreachable)("Abstract method `_createSVG` called.")}}])}()
t.BaseSVGFactory=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.MurmurHash3_64=void 0
var n=r(1),a=3285377520,o=function(){return _createClass(function MurmurHash3_64(e){_classCallCheck(this,MurmurHash3_64),this.h1=e?4294967295&e:a,this.h2=e?4294967295&e:a},[{key:"update",value:function update(e){var t,r
if("string"==typeof e){t=new Uint8Array(2*e.length),r=0
for(var a=0,o=e.length;a<o;a++){var i=e.charCodeAt(a)
i<=255?t[r++]=i:(t[r++]=i>>>8,t[r++]=255&i)}}else{if(!(0,n.isArrayBuffer)(e))throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.")
r=(t=e.slice()).byteLength}for(var s=r>>2,l=r-4*s,c=new Uint32Array(t.buffer,0,s),u=0,d=0,h=this.h1,p=this.h2,f=3432918353,v=461845907,m=0;m<s;m++)1&m?h=5*(h=(h^=u=(u=(u=(u=c[m])*f&4294901760|11601*u&65535)<<15|u>>>17)*v&4294901760|13715*u&65535)<<13|h>>>19)+3864292196:p=5*(p=(p^=d=(d=(d=(d=c[m])*f&4294901760|11601*d&65535)<<15|d>>>17)*v&4294901760|13715*d&65535)<<13|p>>>19)+3864292196
switch(u=0,l){case 3:u^=t[4*s+2]<<16
case 2:u^=t[4*s+1]<<8
case 1:u=(u=(u=(u^=t[4*s])*f&4294901760|11601*u&65535)<<15|u>>>17)*v&4294901760|13715*u&65535,1&s?h^=u:p^=u}this.h1=h,this.h2=p}},{key:"hexdigest",value:function hexdigest(){var e=this.h1,t=this.h2
e=3981806797*(e^=t>>>1)&4294901760|36045*e&65535,e=444984403*(e^=(t=4283543511*t&4294901760|(2950163797*(t<<16|e>>>16)&4294901760)>>>16)>>>1)&4294901760|60499*e&65535
var r=((e^=(t=3301882366*t&4294901760|(3120437893*(t<<16|e>>>16)&4294901760)>>>16)>>>1)>>>0).toString(16),n=(t>>>0).toString(16)
return r.padStart(8,"0")+n.padStart(8,"0")}}])}()
t.MurmurHash3_64=o},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.FontLoader=t.FontFaceObject=void 0
var n,a=r(1),o=function(){return _createClass(function BaseFontLoader(e){var t=e.docId,r=e.onUnsupportedFeature,n=e.ownerDocument,o=void 0===n?globalThis.document:n
e.styleElement
_classCallCheck(this,BaseFontLoader),this.constructor===BaseFontLoader&&(0,a.unreachable)("Cannot initialize BaseFontLoader."),this.docId=t,this._onUnsupportedFeature=r,this._document=o,this.nativeFontFaces=[],this.styleElement=null},[{key:"addNativeFontFace",value:function addNativeFontFace(e){this.nativeFontFaces.push(e),this._document.fonts.add(e)}},{key:"insertRule",value:function insertRule(e){var t=this.styleElement
t||((t=this.styleElement=this._document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_".concat(this.docId),this._document.documentElement.getElementsByTagName("head")[0].append(t))
var r=t.sheet
r.insertRule(e,r.cssRules.length)}},{key:"clear",value:function clear(){var e,t=_createForOfIteratorHelper(this.nativeFontFaces)
try{for(t.s();!(e=t.n()).done;){var r=e.value
this._document.fonts.delete(r)}}catch(e){t.e(e)}finally{t.f()}this.nativeFontFaces.length=0,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}},{key:"bind",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee1(e){var t,r,n,o=this
return _regenerator().w(function(i){for(;;)switch(i.p=i.n){case 0:if(!e.attached&&!e.missingFile){i.n=1
break}return i.a(2)
case 1:if(e.attached=!0,!this.isFontLoadingAPISupported){i.n=6
break}if(!(t=e.createNativeFontFace())){i.n=5
break}return this.addNativeFontFace(t),i.p=2,i.n=3,t.loaded
case 3:i.n=5
break
case 4:throw i.p=4,n=i.v,this._onUnsupportedFeature({featureId:a.UNSUPPORTED_FEATURES.errorFontLoadNative}),(0,a.warn)("Failed to load font '".concat(t.family,"': '").concat(n,"'.")),e.disableFontFace=!0,n
case 5:return i.a(2)
case 6:if(!(r=e.createFontFaceRule())){i.n=8
break}if(this.insertRule(r),!this.isSyncFontLoadingSupported){i.n=7
break}return i.a(2)
case 7:return i.n=8,new Promise(function(t){var n=o._queueLoadingCallback(t)
o._prepareFontLoadEvent([r],[e],n)})
case 8:return i.a(2)}},_callee1,this,[[2,4]])}))
return function bind(t){return e.apply(this,arguments)}}()},{key:"_queueLoadingCallback",value:function _queueLoadingCallback(e){(0,a.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"isFontLoadingAPISupported",get:function get(){var e,t=!(null===(e=this._document)||void 0===e||!e.fonts)
return(0,a.shadow)(this,"isFontLoadingAPISupported",t)}},{key:"isSyncFontLoadingSupported",get:function get(){(0,a.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function get(){(0,a.unreachable)("Abstract method `_loadTestFont`.")}},{key:"_prepareFontLoadEvent",value:function _prepareFontLoadEvent(e,t,r){(0,a.unreachable)("Abstract method `_prepareFontLoadEvent`.")}}])}()
t.FontLoader=n,t.FontLoader=n=function(e){function GenericFontLoader(e){var t
return _classCallCheck(this,GenericFontLoader),(t=_callSuper(this,GenericFontLoader,[e])).loadingContext={requests:[],nextRequestId:0},t.loadTestFontId=0,t}return _inherits(GenericFontLoader,o),_createClass(GenericFontLoader,[{key:"isSyncFontLoadingSupported",get:function get(){var e=!1
if("undefined"==typeof navigator)e=!0
else{var t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);(null==t?void 0:t[1])>=14&&(e=!0)}return(0,a.shadow)(this,"isSyncFontLoadingSupported",e)}},{key:"_queueLoadingCallback",value:function _queueLoadingCallback(e){var t=this.loadingContext,r={id:"pdfjs-font-loading-".concat(t.nextRequestId++),done:!1,complete:function completeRequest(){for((0,a.assert)(!r.done,"completeRequest() cannot be called twice."),r.done=!0;t.requests.length>0&&t.requests[0].done;){var e=t.requests.shift()
setTimeout(e.callback,0)}},callback:e}
return t.requests.push(r),r}},{key:"_loadTestFont",get:function get(){return(0,a.shadow)(this,"_loadTestFont",function getLoadTestFont(){return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")}())}},{key:"_prepareFontLoadEvent",value:function _prepareFontLoadEvent(e,t,r){function int32(e,t){return e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|255&e.charCodeAt(t+3)}function spliceString(e,t,r,n){return e.substring(0,t)+n+e.substring(t+r)}var n,o,i=this._document.createElement("canvas")
i.width=1,i.height=1
var s=i.getContext("2d"),l=0
var c="lt".concat(Date.now()).concat(this.loadTestFontId++),u=this._loadTestFont,d=int32(u=spliceString(u,976,c.length,c),16)
for(n=0,o=c.length-3;n<o;n+=4)d=d-1482184792+int32(c,n)|0
n<c.length&&(d=d-1482184792+int32(c+"XXX",n)|0),u=spliceString(u,16,4,(0,a.string32)(d))
var h="url(data:font/opentype;base64,".concat(btoa(u),");"),p='@font-face {font-family:"'.concat(c,'";src:').concat(h,"}")
this.insertRule(p)
var f,v=[],m=_createForOfIteratorHelper(t)
try{for(m.s();!(f=m.n()).done;){var g=f.value
v.push(g.loadedName)}}catch(e){m.e(e)}finally{m.f()}v.push(c)
var _=this._document.createElement("div")
_.style.visibility="hidden",_.style.width=_.style.height="10px",_.style.position="absolute",_.style.top=_.style.left="0px"
for(var b=0,y=v;b<y.length;b++){var k=y[b],S=this._document.createElement("span")
S.textContent="Hi",S.style.fontFamily=k,_.append(S)}this._document.body.append(_),function isFontReady(e,t){if(++l>30)return(0,a.warn)("Load test font never loaded."),void t()
s.font="30px "+e,s.fillText(".",0,20),s.getImageData(0,0,1,1).data[3]>0?t():setTimeout(isFontReady.bind(null,e,t))}(c,function(){_.remove(),r.complete()})}}])}()
var i=function(){return _createClass(function FontFaceObject(e,t){var r=t.isEvalSupported,n=void 0===r||r,a=t.disableFontFace,o=void 0!==a&&a,i=t.ignoreErrors,s=void 0!==i&&i,l=t.onUnsupportedFeature,c=t.fontRegistry,u=void 0===c?null:c
for(var d in _classCallCheck(this,FontFaceObject),this.compiledGlyphs=Object.create(null),e)this[d]=e[d]
this.isEvalSupported=!1!==n,this.disableFontFace=!0===o,this.ignoreErrors=!0===s,this._onUnsupportedFeature=l,this.fontRegistry=u},[{key:"createNativeFontFace",value:function createNativeFontFace(){if(!this.data||this.disableFontFace)return null
var e
if(this.cssFontInfo){var t={weight:this.cssFontInfo.fontWeight}
this.cssFontInfo.italicAngle&&(t.style="oblique ".concat(this.cssFontInfo.italicAngle,"deg")),e=new FontFace(this.cssFontInfo.fontFamily,this.data,t)}else e=new FontFace(this.loadedName,this.data,{})
return this.fontRegistry&&this.fontRegistry.registerFont(this),e}},{key:"createFontFaceRule",value:function createFontFaceRule(){if(!this.data||this.disableFontFace)return null
var e,t=(0,a.bytesToString)(this.data),r="url(data:".concat(this.mimetype,";base64,").concat(btoa(t),");")
if(this.cssFontInfo){var n="font-weight: ".concat(this.cssFontInfo.fontWeight,";")
this.cssFontInfo.italicAngle&&(n+="font-style: oblique ".concat(this.cssFontInfo.italicAngle,"deg;")),e='@font-face {font-family:"'.concat(this.cssFontInfo.fontFamily,'";').concat(n,"src:").concat(r,"}")}else e='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(r,"}")
return this.fontRegistry&&this.fontRegistry.registerFont(this,r),e}},{key:"getPathGenerator",value:function getPathGenerator(e,t){if(void 0!==this.compiledGlyphs[t])return this.compiledGlyphs[t]
var r
try{r=e.get(this.loadedName+"_path_"+t)}catch(e){if(!this.ignoreErrors)throw e
return this._onUnsupportedFeature({featureId:a.UNSUPPORTED_FEATURES.errorFontGetPath}),(0,a.warn)('getPathGenerator - ignoring character: "'.concat(e,'".')),this.compiledGlyphs[t]=function(e,t){}}if(this.isEvalSupported&&a.FeatureTest.isEvalSupported){var n,o=[],i=_createForOfIteratorHelper(r)
try{for(i.s();!(n=i.n()).done;){var s=n.value,l=void 0!==s.args?s.args.join(","):""
o.push("c.",s.cmd,"(",l,");\n")}}catch(e){i.e(e)}finally{i.f()}return this.compiledGlyphs[t]=new Function("c","size",o.join(""))}return this.compiledGlyphs[t]=function(e,t){var n,a=_createForOfIteratorHelper(r)
try{for(a.s();!(n=a.n()).done;){var o=n.value
"scale"===o.cmd&&(o.args=[t,-t]),e[o.cmd].apply(e,o.args)}}catch(e){a.e(e)}finally{a.f()}}}}])}()
t.FontFaceObject=i},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasGraphics=void 0
var n=r(8),a=r(1),o=r(13),i=r(14),s=r(3),l=s.isNodeJS&&"undefined"==typeof Path2D?-1:1e3,c=16
var u=function(){return _createClass(function CachedCanvases(e){_classCallCheck(this,CachedCanvases),this.canvasFactory=e,this.cache=Object.create(null)},[{key:"getCanvas",value:function getCanvas(e,t,r){var n
return void 0!==this.cache[e]?(n=this.cache[e],this.canvasFactory.reset(n,t,r)):(n=this.canvasFactory.create(t,r),this.cache[e]=n),n}},{key:"delete",value:function _delete(e){delete this.cache[e]}},{key:"clear",value:function clear(){for(var e in this.cache){var t=this.cache[e]
this.canvasFactory.destroy(t),delete this.cache[e]}}}])}()
function drawImageAtIntegerCoords(e,t,r,a,o,i,s,l,c,u){var d=_slicedToArray((0,n.getCurrentTransform)(e),6),h=d[0],p=d[1],f=d[2],v=d[3],m=d[4],g=d[5]
if(0===p&&0===f){var _=s*h+m,b=Math.round(_),y=l*v+g,k=Math.round(y),S=(s+c)*h+m,C=Math.abs(Math.round(S)-b)||1,P=(l+u)*v+g,E=Math.abs(Math.round(P)-k)||1
return e.setTransform(Math.sign(h),0,0,Math.sign(v),b,k),e.drawImage(t,r,a,o,i,0,0,C,E),e.setTransform(h,p,f,v,m,g),[C,E]}if(0===h&&0===v){var x=l*f+m,w=Math.round(x),A=s*p+g,F=Math.round(A),M=(l+u)*f+m,T=Math.abs(Math.round(M)-w)||1,R=(s+c)*p+g,I=Math.abs(Math.round(R)-F)||1
return e.setTransform(0,Math.sign(p),Math.sign(f),0,w,F),e.drawImage(t,r,a,o,i,0,0,I,T),e.setTransform(h,p,f,v,m,g),[I,T]}return e.drawImage(t,r,a,o,i,s,l,c,u),[Math.hypot(h,p)*c,Math.hypot(f,v)*u]}var d=function(){return _createClass(function CanvasExtraState(e,t){_classCallCheck(this,CanvasExtraState),this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=a.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=a.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=a.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.transferMaps=null,this.startNewPathAndClipBox([0,0,e,t])},[{key:"clone",value:function clone(){var clone=Object.create(this)
return clone.clipBox=this.clipBox.slice(),clone}},{key:"setCurrentPoint",value:function setCurrentPoint(e,t){this.x=e,this.y=t}},{key:"updatePathMinMax",value:function updatePathMinMax(e,t,r){var n=_slicedToArray(a.Util.applyTransform([t,r],e),2)
t=n[0],r=n[1],this.minX=Math.min(this.minX,t),this.minY=Math.min(this.minY,r),this.maxX=Math.max(this.maxX,t),this.maxY=Math.max(this.maxY,r)}},{key:"updateRectMinMax",value:function updateRectMinMax(e,t){var r=a.Util.applyTransform(t,e),n=a.Util.applyTransform(t.slice(2),e)
this.minX=Math.min(this.minX,r[0],n[0]),this.minY=Math.min(this.minY,r[1],n[1]),this.maxX=Math.max(this.maxX,r[0],n[0]),this.maxY=Math.max(this.maxY,r[1],n[1])}},{key:"updateScalingPathMinMax",value:function updateScalingPathMinMax(e,t){a.Util.scaleMinMax(e,t),this.minX=Math.min(this.minX,t[0]),this.maxX=Math.max(this.maxX,t[1]),this.minY=Math.min(this.minY,t[2]),this.maxY=Math.max(this.maxY,t[3])}},{key:"updateCurvePathMinMax",value:function updateCurvePathMinMax(e,t,r,n,o,i,s,l,c,u){var d=a.Util.bezierBoundingBox(t,r,n,o,i,s,l,c)
if(u)return u[0]=Math.min(u[0],d[0],d[2]),u[1]=Math.max(u[1],d[0],d[2]),u[2]=Math.min(u[2],d[1],d[3]),void(u[3]=Math.max(u[3],d[1],d[3]))
this.updateRectMinMax(e,d)}},{key:"getPathBoundingBox",value:function getPathBoundingBox(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.PathType.FILL,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[this.minX,this.minY,this.maxX,this.maxY]
if(e===o.PathType.STROKE){t||(0,a.unreachable)("Stroke bounding box must include transform.")
var n=a.Util.singularValueDecompose2dScale(t),i=n[0]*this.lineWidth/2,s=n[1]*this.lineWidth/2
r[0]-=i,r[1]-=s,r[2]+=i,r[3]+=s}return r}},{key:"updateClipFromPath",value:function updateClipFromPath(){var e=a.Util.intersect(this.clipBox,this.getPathBoundingBox())
this.startNewPathAndClipBox(e||[0,0,0,0])}},{key:"isEmptyClip",value:function isEmptyClip(){return this.minX===1/0}},{key:"startNewPathAndClipBox",value:function startNewPathAndClipBox(e){this.clipBox=e,this.minX=1/0,this.minY=1/0,this.maxX=0,this.maxY=0}},{key:"getClippedPathBoundingBox",value:function getClippedPathBoundingBox(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.PathType.FILL,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return a.Util.intersect(this.clipBox,this.getPathBoundingBox(e,t))}}])}()
function putBinaryImageData(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if("undefined"!=typeof ImageData&&t instanceof ImageData)e.putImageData(t,0,0)
else{var n,o,i,s,l,u,d,h,p,f=t.height,v=t.width,m=f%c,g=(f-m)/c,_=0===m?g:g+1,b=e.createImageData(v,c),y=0,k=t.data,S=b.data
if(r)switch(r.length){case 1:u=r[0],d=r[0],h=r[0],p=r[0]
break
case 4:u=r[0],d=r[1],h=r[2],p=r[3]}if(t.kind===a.ImageKind.GRAYSCALE_1BPP){var C=k.byteLength,P=new Uint32Array(S.buffer,0,S.byteLength>>2),E=P.length,x=v+7>>3,w=4294967295,A=a.FeatureTest.isLittleEndian?4278190080:255
if(p&&255===p[0]&&0===p[255]){var F=[A,w]
w=F[0],A=F[1]}for(o=0;o<_;o++){for(s=o<g?c:m,n=0,i=0;i<s;i++){for(var M=C-y,T=0,R=M>x?v:8*M-7,I=-8&R,O=0,D=0;T<I;T+=8)D=k[y++],P[n++]=128&D?w:A,P[n++]=64&D?w:A,P[n++]=32&D?w:A,P[n++]=16&D?w:A,P[n++]=8&D?w:A,P[n++]=4&D?w:A,P[n++]=2&D?w:A,P[n++]=1&D?w:A
for(;T<R;T++)0===O&&(D=k[y++],O=128),P[n++]=D&O?w:A,O>>=1}for(;n<E;)P[n++]=0
e.putImageData(b,0,o*c)}}else if(t.kind===a.ImageKind.RGBA_32BPP){var L=!!(u||d||h)
for(i=0,l=v*c*4,o=0;o<g;o++){if(S.set(k.subarray(y,y+l)),y+=l,L)for(var N=0;N<l;N+=4)u&&(S[N+0]=u[S[N+0]]),d&&(S[N+1]=d[S[N+1]]),h&&(S[N+2]=h[S[N+2]])
e.putImageData(b,0,i),i+=c}if(o<_){if(l=v*m*4,S.set(k.subarray(y,y+l)),L)for(var B=0;B<l;B+=4)u&&(S[B+0]=u[S[B+0]]),d&&(S[B+1]=d[S[B+1]]),h&&(S[B+2]=h[S[B+2]])
e.putImageData(b,0,i)}}else{if(t.kind!==a.ImageKind.RGB_24BPP)throw new Error("bad image kind: ".concat(t.kind))
var j=!!(u||d||h)
for(l=v*(s=c),o=0;o<_;o++){for(o>=g&&(l=v*(s=m)),n=0,i=l;i--;)S[n++]=k[y++],S[n++]=k[y++],S[n++]=k[y++],S[n++]=255
if(j)for(var G=0;G<n;G+=4)u&&(S[G+0]=u[S[G+0]]),d&&(S[G+1]=d[S[G+1]]),h&&(S[G+2]=h[S[G+2]])
e.putImageData(b,0,o*c)}}}}function putBinaryImageMask(e,t){if(t.bitmap)e.drawImage(t.bitmap,0,0)
else for(var r=t.height,n=t.width,a=r%c,o=(r-a)/c,s=0===a?o:o+1,l=e.createImageData(n,c),u=0,d=t.data,h=l.data,p=0;p<s;p++){var f=p<o?c:a
u=(0,i.applyMaskImageData)({src:d,srcPos:u,dest:h,width:n,height:f}).srcPos,e.putImageData(l,0,p*c)}}function copyCtxState(e,t){for(var r=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],n=0,a=r.length;n<a;n++){var o=r[n]
void 0!==e[o]&&(t[o]=e[o])}void 0!==e.setLineDash&&(t.setLineDash(e.getLineDash()),t.lineDashOffset=e.lineDashOffset)}function resetCtxToDefault(e,t){e.strokeStyle=e.fillStyle=t||"#000000",e.fillRule="nonzero",e.globalAlpha=1,e.lineWidth=1,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=10,e.globalCompositeOperation="source-over",e.font="10px sans-serif",void 0!==e.setLineDash&&(e.setLineDash([]),e.lineDashOffset=0)}function composeSMaskBackdrop(e,t,r,n){for(var a=e.length,o=3;o<a;o+=4){var i=e[o]
if(0===i)e[o-3]=t,e[o-2]=r,e[o-1]=n
else if(i<255){var s=255-i
e[o-3]=e[o-3]*i+t*s>>8,e[o-2]=e[o-2]*i+r*s>>8,e[o-1]=e[o-1]*i+n*s>>8}}}function composeSMaskAlpha(e,t,r){for(var n=e.length,a=3;a<n;a+=4){var o=r?r[e[a]]:e[a]
t[a]=t[a]*o*(1/255)|0}}function composeSMaskLuminosity(e,t,r){for(var n=e.length,a=3;a<n;a+=4){var o=77*e[a-3]+152*e[a-2]+28*e[a-1]
t[a]=r?t[a]*r[o>>8]>>8:t[a]*o>>16}}function composeSMask(e,t,r,n){var a=n[0],o=n[1],i=n[2]-a,s=n[3]-o
0!==i&&0!==s&&(!function genericComposeSMask(e,t,r,n,a,o,i,s,l,c,u){var d,h=!!o,p=h?o[0]:0,f=h?o[1]:0,v=h?o[2]:0
d="Luminosity"===a?composeSMaskLuminosity:composeSMaskAlpha
for(var m=Math.min(n,Math.ceil(1048576/r)),g=0;g<n;g+=m){var _=Math.min(m,n-g),b=e.getImageData(s-c,g+(l-u),r,_),y=t.getImageData(s,g+l,r,_)
h&&composeSMaskBackdrop(b.data,p,f,v),d(b.data,y.data,i),t.putImageData(y,s,g+l)}}(t.context,r,i,s,t.subtype,t.backdrop,t.transferMap,a,o,t.offsetX,t.offsetY),e.save(),e.globalAlpha=1,e.globalCompositeOperation="source-over",e.setTransform(1,0,0,1,0,0),e.drawImage(r.canvas,0,0),e.restore())}function getImageSmoothingEnabled(e,t){var r=a.Util.singularValueDecompose2dScale(e)
r[0]=Math.fround(r[0]),r[1]=Math.fround(r[1])
var o=Math.fround((globalThis.devicePixelRatio||1)*n.PixelsPerInch.PDF_TO_CSS_UNITS)
return void 0!==t?t:r[0]<=o||r[1]<=o}var h=["butt","round","square"],p=["miter","round","bevel"],f={},v={},m=new WeakSet,g=function(){function CanvasGraphics(e,t,r,n,a,o,i,s){_classCallCheck(this,CanvasGraphics),_classPrivateMethodInitSpec(this,m),this.ctx=e,this.current=new d(this.ctx.canvas.width,this.ctx.canvas.height),this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=t,this.objs=r,this.canvasFactory=n,this.imageLayer=a,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.suspendedCtx=null,this.contentVisible=!0,this.markedContentStack=[],this.optionalContentConfig=o,this.cachedCanvases=new u(this.canvasFactory),this.cachedPatterns=new Map,this.annotationCanvasMap=i,this.viewportScale=1,this.outputScaleX=1,this.outputScaleY=1,this.backgroundColor=(null==s?void 0:s.background)||null,this.foregroundColor=(null==s?void 0:s.foreground)||null,this._cachedScaleForStroking=null,this._cachedGetSinglePixelWidth=null,this._cachedBitmapsMap=new Map}return _createClass(CanvasGraphics,[{key:"getObject",value:function getObject(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return"string"==typeof e?e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e):t}},{key:"beginDrawing",value:function beginDrawing(e){var t,r,a=e.transform,o=e.viewport,i=e.transparency,s=void 0!==i&&i,l=e.background,c=void 0===l?null:l,u=this.ctx.canvas.width,d=this.ctx.canvas.height,h=c||"#ffffff"
if(this.ctx.save(),this.foregroundColor&&this.backgroundColor){this.ctx.fillStyle=this.foregroundColor
var p=this.foregroundColor=this.ctx.fillStyle
this.ctx.fillStyle=this.backgroundColor
var f,v,m=this.backgroundColor=this.ctx.fillStyle
if(this.ctx.fillStyle=h,f="string"==typeof(v=this.ctx.fillStyle)&&/^#[0-9A-Fa-f]{6}$/.test(v),"#000000"===p&&"#ffffff"===m||p===m||!f)this.foregroundColor=this.backgroundColor=null
else{var g=_slicedToArray((0,n.getRGB)(v),3),_=g[0],b=g[1],y=g[2],k=function newComp(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)},S=Math.round(.2126*k(_)+.7152*k(b)+.0722*k(y))
this.selectColor=function(e,t,r){var n=.2126*k(e)+.7152*k(t)+.0722*k(r)
return Math.round(n)===S?m:p}}}if(this.ctx.fillStyle=this.backgroundColor||h,this.ctx.fillRect(0,0,u,d),this.ctx.restore(),s){var C,P=this.cachedCanvases.getCanvas("transparent",u,d)
this.compositeCtx=this.ctx,this.transparentCanvas=P.canvas,this.ctx=P.context,this.ctx.save(),(C=this.ctx).transform.apply(C,_toConsumableArray((0,n.getCurrentTransform)(this.compositeCtx)))}(this.ctx.save(),resetCtxToDefault(this.ctx,this.foregroundColor),a)&&((r=this.ctx).transform.apply(r,_toConsumableArray(a)),this.outputScaleX=a[0],this.outputScaleY=a[0]);(t=this.ctx).transform.apply(t,_toConsumableArray(o.transform)),this.viewportScale=o.scale,this.baseTransform=(0,n.getCurrentTransform)(this.ctx),this.imageLayer&&((0,n.deprecated)("The `imageLayer` functionality will be removed in the future."),this.imageLayer.beginLayout())}},{key:"executeOperatorList",value:function executeOperatorList(e,t,r,n){var o=e.argsArray,i=e.fnArray,s=t||0,l=o.length
if(l===s)return s
for(var c,u=l-s>10&&"function"==typeof r,d=u?Date.now()+15:0,h=0,p=this.commonObjs,f=this.objs;;){if(void 0!==n&&s===n.nextBreakPoint)return n.breakIt(s,r),s
if((c=i[s])!==a.OPS.dependency)this[c].apply(this,o[s])
else{var v,m=_createForOfIteratorHelper(o[s])
try{for(m.s();!(v=m.n()).done;){var g=v.value,_=g.startsWith("g_")?p:f
if(!_.has(g))return _.get(g,r),s}}catch(e){m.e(e)}finally{m.f()}}if(++s===l)return s
if(u&&++h>10){if(Date.now()>d)return r(),s
h=0}}}},{key:"endDrawing",value:function endDrawing(){_assertClassBrand(m,this,_restoreInitialState).call(this),this.cachedCanvases.clear(),this.cachedPatterns.clear()
var e,t=_createForOfIteratorHelper(this._cachedBitmapsMap.values())
try{for(t.s();!(e=t.n()).done;){var r,n=e.value,a=_createForOfIteratorHelper(n.values())
try{for(a.s();!(r=a.n()).done;){var o=r.value
"undefined"!=typeof HTMLCanvasElement&&o instanceof HTMLCanvasElement&&(o.width=o.height=0)}}catch(e){a.e(e)}finally{a.f()}n.clear()}}catch(e){t.e(e)}finally{t.f()}this._cachedBitmapsMap.clear(),this.imageLayer&&this.imageLayer.endLayout()}},{key:"_scaleImage",value:function _scaleImage(e,t){for(var r,n,a=e.width,o=e.height,i=Math.max(Math.hypot(t[0],t[1]),1),s=Math.max(Math.hypot(t[2],t[3]),1),l=a,c=o,u="prescale1";i>2&&l>1||s>2&&c>1;){var d=l,h=c
i>2&&l>1&&(i/=l/(d=Math.ceil(l/2))),s>2&&c>1&&(s/=c/(h=Math.ceil(c/2))),(n=(r=this.cachedCanvases.getCanvas(u,d,h)).context).clearRect(0,0,d,h),n.drawImage(e,0,0,l,c,0,0,d,h),e=r.canvas,l=d,c=h,u="prescale1"===u?"prescale2":"prescale1"}return{img:e,paintWidth:l,paintHeight:c}}},{key:"_createMaskCanvas",value:function _createMaskCanvas(e){var t,r,i,s,l=this.ctx,c=e.width,u=e.height,d=this.current.fillColor,h=this.current.patternFill,p=(0,n.getCurrentTransform)(l)
if((e.bitmap||e.data)&&e.count>1){var f=e.bitmap||e.data.buffer,v=p.slice(0,4)
r=JSON.stringify(h?v:[v,d]),(t=this._cachedBitmapsMap.get(f))||(t=new Map,this._cachedBitmapsMap.set(f,t))
var m=t.get(r)
if(m&&!h)return{canvas:m,offsetX:Math.round(Math.min(p[0],p[2])+p[4]),offsetY:Math.round(Math.min(p[1],p[3])+p[5])}
i=m}i||putBinaryImageMask((s=this.cachedCanvases.getCanvas("maskCanvas",c,u)).context,e)
var g=a.Util.transform(p,[1/c,0,0,-1/u,0,0])
g=a.Util.transform(g,[1,0,0,1,0,-u])
var _=a.Util.applyTransform([0,0],g),b=a.Util.applyTransform([c,u],g),y=a.Util.normalizeRect([_[0],_[1],b[0],b[1]]),k=Math.round(y[2]-y[0])||1,S=Math.round(y[3]-y[1])||1,C=this.cachedCanvases.getCanvas("fillCanvas",k,S),P=C.context,E=Math.min(_[0],b[0]),x=Math.min(_[1],b[1])
P.translate(-E,-x),P.transform.apply(P,_toConsumableArray(g)),i||(i=(i=this._scaleImage(s.canvas,(0,n.getCurrentTransformInverse)(P))).img,t&&h&&t.set(r,i)),P.imageSmoothingEnabled=getImageSmoothingEnabled((0,n.getCurrentTransform)(P),e.interpolate),drawImageAtIntegerCoords(P,i,0,0,i.width,i.height,0,0,c,u),P.globalCompositeOperation="source-in"
var w=a.Util.transform((0,n.getCurrentTransformInverse)(P),[1,0,0,1,-E,-x])
return P.fillStyle=h?d.getPattern(l,this,w,o.PathType.FILL):d,P.fillRect(0,0,c,u),t&&!h&&(this.cachedCanvases.delete("fillCanvas"),t.set(r,C.canvas)),{canvas:C.canvas,offsetX:Math.round(E),offsetY:Math.round(x)}}},{key:"setLineWidth",value:function setLineWidth(e){e!==this.current.lineWidth&&(this._cachedScaleForStroking=null),this.current.lineWidth=e,this.ctx.lineWidth=e}},{key:"setLineCap",value:function setLineCap(e){this.ctx.lineCap=h[e]}},{key:"setLineJoin",value:function setLineJoin(e){this.ctx.lineJoin=p[e]}},{key:"setMiterLimit",value:function setMiterLimit(e){this.ctx.miterLimit=e}},{key:"setDash",value:function setDash(e,t){var r=this.ctx
void 0!==r.setLineDash&&(r.setLineDash(e),r.lineDashOffset=t)}},{key:"setRenderingIntent",value:function setRenderingIntent(e){}},{key:"setFlatness",value:function setFlatness(e){}},{key:"setGState",value:function setGState(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],a=n[0],o=n[1]
switch(a){case"LW":this.setLineWidth(o)
break
case"LC":this.setLineCap(o)
break
case"LJ":this.setLineJoin(o)
break
case"ML":this.setMiterLimit(o)
break
case"D":this.setDash(o[0],o[1])
break
case"RI":this.setRenderingIntent(o)
break
case"FL":this.setFlatness(o)
break
case"Font":this.setFont(o[0],o[1])
break
case"CA":this.current.strokeAlpha=n[1]
break
case"ca":this.current.fillAlpha=n[1],this.ctx.globalAlpha=n[1]
break
case"BM":this.ctx.globalCompositeOperation=o
break
case"SMask":this.current.activeSMask=o?this.tempSMask:null,this.tempSMask=null,this.checkSMaskState()
break
case"TR":this.current.transferMaps=o}}}},{key:"inSMaskMode",get:function get(){return!!this.suspendedCtx}},{key:"checkSMaskState",value:function checkSMaskState(){var e=this.inSMaskMode
this.current.activeSMask&&!e?this.beginSMaskMode():!this.current.activeSMask&&e&&this.endSMaskMode()}},{key:"beginSMaskMode",value:function beginSMaskMode(){if(this.inSMaskMode)throw new Error("beginSMaskMode called while already in smask mode")
var e=this.ctx.canvas.width,t=this.ctx.canvas.height,r="smaskGroupAt"+this.groupLevel,a=this.cachedCanvases.getCanvas(r,e,t)
this.suspendedCtx=this.ctx,this.ctx=a.context
var o=this.ctx
o.setTransform.apply(o,_toConsumableArray((0,n.getCurrentTransform)(this.suspendedCtx))),copyCtxState(this.suspendedCtx,o),function mirrorContextOperations(e,t){if(e._removeMirroring)throw new Error("Context is already forwarding operations.")
e.__originalSave=e.save,e.__originalRestore=e.restore,e.__originalRotate=e.rotate,e.__originalScale=e.scale,e.__originalTranslate=e.translate,e.__originalTransform=e.transform,e.__originalSetTransform=e.setTransform,e.__originalResetTransform=e.resetTransform,e.__originalClip=e.clip,e.__originalMoveTo=e.moveTo,e.__originalLineTo=e.lineTo,e.__originalBezierCurveTo=e.bezierCurveTo,e.__originalRect=e.rect,e.__originalClosePath=e.closePath,e.__originalBeginPath=e.beginPath,e._removeMirroring=function(){e.save=e.__originalSave,e.restore=e.__originalRestore,e.rotate=e.__originalRotate,e.scale=e.__originalScale,e.translate=e.__originalTranslate,e.transform=e.__originalTransform,e.setTransform=e.__originalSetTransform,e.resetTransform=e.__originalResetTransform,e.clip=e.__originalClip,e.moveTo=e.__originalMoveTo,e.lineTo=e.__originalLineTo,e.bezierCurveTo=e.__originalBezierCurveTo,e.rect=e.__originalRect,e.closePath=e.__originalClosePath,e.beginPath=e.__originalBeginPath,delete e._removeMirroring},e.save=function ctxSave(){t.save(),this.__originalSave()},e.restore=function ctxRestore(){t.restore(),this.__originalRestore()},e.translate=function ctxTranslate(e,r){t.translate(e,r),this.__originalTranslate(e,r)},e.scale=function ctxScale(e,r){t.scale(e,r),this.__originalScale(e,r)},e.transform=function ctxTransform(e,r,n,a,o,i){t.transform(e,r,n,a,o,i),this.__originalTransform(e,r,n,a,o,i)},e.setTransform=function ctxSetTransform(e,r,n,a,o,i){t.setTransform(e,r,n,a,o,i),this.__originalSetTransform(e,r,n,a,o,i)},e.resetTransform=function ctxResetTransform(){t.resetTransform(),this.__originalResetTransform()},e.rotate=function ctxRotate(e){t.rotate(e),this.__originalRotate(e)},e.clip=function ctxRotate(e){t.clip(e),this.__originalClip(e)},e.moveTo=function(e,r){t.moveTo(e,r),this.__originalMoveTo(e,r)},e.lineTo=function(e,r){t.lineTo(e,r),this.__originalLineTo(e,r)},e.bezierCurveTo=function(e,r,n,a,o,i){t.bezierCurveTo(e,r,n,a,o,i),this.__originalBezierCurveTo(e,r,n,a,o,i)},e.rect=function(e,r,n,a){t.rect(e,r,n,a),this.__originalRect(e,r,n,a)},e.closePath=function(){t.closePath(),this.__originalClosePath()},e.beginPath=function(){t.beginPath(),this.__originalBeginPath()}}(o,this.suspendedCtx),this.setGState([["BM","source-over"],["ca",1],["CA",1]])}},{key:"endSMaskMode",value:function endSMaskMode(){if(!this.inSMaskMode)throw new Error("endSMaskMode called while not in smask mode")
this.ctx._removeMirroring(),copyCtxState(this.ctx,this.suspendedCtx),this.ctx=this.suspendedCtx,this.suspendedCtx=null}},{key:"compose",value:function compose(e){if(this.current.activeSMask){e?(e[0]=Math.floor(e[0]),e[1]=Math.floor(e[1]),e[2]=Math.ceil(e[2]),e[3]=Math.ceil(e[3])):e=[0,0,this.ctx.canvas.width,this.ctx.canvas.height]
var t=this.current.activeSMask
composeSMask(this.suspendedCtx,t,this.ctx,e),this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.restore()}}},{key:"save",value:function save(){this.inSMaskMode?(copyCtxState(this.ctx,this.suspendedCtx),this.suspendedCtx.save()):this.ctx.save()
var e=this.current
this.stateStack.push(e),this.current=e.clone()}},{key:"restore",value:function restore(){0===this.stateStack.length&&this.inSMaskMode&&this.endSMaskMode(),0!==this.stateStack.length&&(this.current=this.stateStack.pop(),this.inSMaskMode?(this.suspendedCtx.restore(),copyCtxState(this.suspendedCtx,this.ctx)):this.ctx.restore(),this.checkSMaskState(),this.pendingClip=null,this._cachedScaleForStroking=null,this._cachedGetSinglePixelWidth=null)}},{key:"transform",value:function transform(e,t,r,n,a,o){this.ctx.transform(e,t,r,n,a,o),this._cachedScaleForStroking=null,this._cachedGetSinglePixelWidth=null}},{key:"constructPath",value:function constructPath(e,t,r){for(var o,i,s=this.ctx,l=this.current,c=l.x,u=l.y,d=(0,n.getCurrentTransform)(s),h=0===d[0]&&0===d[3]||0===d[1]&&0===d[2],p=h?r.slice(0):null,f=0,v=0,m=e.length;f<m;f++)switch(0|e[f]){case a.OPS.rectangle:c=t[v++],u=t[v++]
var g=t[v++],_=t[v++],b=c+g,y=u+_
s.moveTo(c,u),0===g||0===_?s.lineTo(b,y):(s.lineTo(b,u),s.lineTo(b,y),s.lineTo(c,y)),h||l.updateRectMinMax(d,[c,u,b,y]),s.closePath()
break
case a.OPS.moveTo:c=t[v++],u=t[v++],s.moveTo(c,u),h||l.updatePathMinMax(d,c,u)
break
case a.OPS.lineTo:c=t[v++],u=t[v++],s.lineTo(c,u),h||l.updatePathMinMax(d,c,u)
break
case a.OPS.curveTo:o=c,i=u,c=t[v+4],u=t[v+5],s.bezierCurveTo(t[v],t[v+1],t[v+2],t[v+3],c,u),l.updateCurvePathMinMax(d,o,i,t[v],t[v+1],t[v+2],t[v+3],c,u,p),v+=6
break
case a.OPS.curveTo2:o=c,i=u,s.bezierCurveTo(c,u,t[v],t[v+1],t[v+2],t[v+3]),l.updateCurvePathMinMax(d,o,i,c,u,t[v],t[v+1],t[v+2],t[v+3],p),c=t[v+2],u=t[v+3],v+=4
break
case a.OPS.curveTo3:o=c,i=u,c=t[v+2],u=t[v+3],s.bezierCurveTo(t[v],t[v+1],c,u,c,u),l.updateCurvePathMinMax(d,o,i,t[v],t[v+1],c,u,c,u,p),v+=4
break
case a.OPS.closePath:s.closePath()}h&&l.updateScalingPathMinMax(d,p),l.setCurrentPoint(c,u)}},{key:"closePath",value:function closePath(){this.ctx.closePath()}},{key:"stroke",value:function stroke(e){e=void 0===e||e
var t=this.ctx,r=this.current.strokeColor
t.globalAlpha=this.current.strokeAlpha,this.contentVisible&&("object"===_typeof(r)&&null!=r&&r.getPattern?(t.save(),t.strokeStyle=r.getPattern(t,this,(0,n.getCurrentTransformInverse)(t),o.PathType.STROKE),this.rescaleAndStroke(!1),t.restore()):this.rescaleAndStroke(!0)),e&&this.consumePath(this.current.getClippedPathBoundingBox()),t.globalAlpha=this.current.fillAlpha}},{key:"closeStroke",value:function closeStroke(){this.closePath(),this.stroke()}},{key:"fill",value:function fill(e){e=void 0===e||e
var t=this.ctx,r=this.current.fillColor,a=!1
this.current.patternFill&&(t.save(),t.fillStyle=r.getPattern(t,this,(0,n.getCurrentTransformInverse)(t),o.PathType.FILL),a=!0)
var i=this.current.getClippedPathBoundingBox()
this.contentVisible&&null!==i&&(this.pendingEOFill?(t.fill("evenodd"),this.pendingEOFill=!1):t.fill()),a&&t.restore(),e&&this.consumePath(i)}},{key:"eoFill",value:function eoFill(){this.pendingEOFill=!0,this.fill()}},{key:"fillStroke",value:function fillStroke(){this.fill(!1),this.stroke(!1),this.consumePath()}},{key:"eoFillStroke",value:function eoFillStroke(){this.pendingEOFill=!0,this.fillStroke()}},{key:"closeFillStroke",value:function closeFillStroke(){this.closePath(),this.fillStroke()}},{key:"closeEOFillStroke",value:function closeEOFillStroke(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()}},{key:"endPath",value:function endPath(){this.consumePath()}},{key:"clip",value:function clip(){this.pendingClip=f}},{key:"eoClip",value:function eoClip(){this.pendingClip=v}},{key:"beginText",value:function beginText(){this.current.textMatrix=a.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0}},{key:"endText",value:function endText(){var e=this.pendingTextPaths,t=this.ctx
if(void 0!==e){t.save(),t.beginPath()
var r,n=_createForOfIteratorHelper(e)
try{for(n.s();!(r=n.n()).done;){var a=r.value
t.setTransform.apply(t,_toConsumableArray(a.transform)),t.translate(a.x,a.y),a.addToPath(t,a.fontSize)}}catch(e){n.e(e)}finally{n.f()}t.restore(),t.clip(),t.beginPath(),delete this.pendingTextPaths}else t.beginPath()}},{key:"setCharSpacing",value:function setCharSpacing(e){this.current.charSpacing=e}},{key:"setWordSpacing",value:function setWordSpacing(e){this.current.wordSpacing=e}},{key:"setHScale",value:function setHScale(e){this.current.textHScale=e/100}},{key:"setLeading",value:function setLeading(e){this.current.leading=-e}},{key:"setFont",value:function setFont(e,t){var r=this.commonObjs.get(e),n=this.current
if(!r)throw new Error("Can't find font for ".concat(e))
if(n.fontMatrix=r.fontMatrix||a.FONT_IDENTITY_MATRIX,0!==n.fontMatrix[0]&&0!==n.fontMatrix[3]||(0,a.warn)("Invalid font matrix for font "+e),t<0?(t=-t,n.fontDirection=-1):n.fontDirection=1,this.current.font=r,this.current.fontSize=t,!r.isType3Font){var o=r.loadedName||"sans-serif",i="normal"
r.black?i="900":r.bold&&(i="bold")
var s=r.italic?"italic":"normal",l='"'.concat(o,'", ').concat(r.fallbackName),c=t
t<16?c=16:t>100&&(c=100),this.current.fontSizeScale=t/c,this.ctx.font="".concat(s," ").concat(i," ").concat(c,"px ").concat(l)}}},{key:"setTextRenderingMode",value:function setTextRenderingMode(e){this.current.textRenderingMode=e}},{key:"setTextRise",value:function setTextRise(e){this.current.textRise=e}},{key:"moveText",value:function moveText(e,t){this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=t}},{key:"setLeadingMoveText",value:function setLeadingMoveText(e,t){this.setLeading(-t),this.moveText(e,t)}},{key:"setTextMatrix",value:function setTextMatrix(e,t,r,n,a,o){this.current.textMatrix=[e,t,r,n,a,o],this.current.textMatrixScale=Math.hypot(e,t),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0}},{key:"nextLine",value:function nextLine(){this.moveText(0,this.current.leading)}},{key:"paintChar",value:function paintChar(e,t,r,o){var i,s=this.ctx,l=this.current,c=l.font,u=l.textRenderingMode,d=l.fontSize/l.fontSizeScale,h=u&a.TextRenderingMode.FILL_STROKE_MASK,p=!!(u&a.TextRenderingMode.ADD_TO_PATH_FLAG),f=l.patternFill&&!c.missingFile;((c.disableFontFace||p||f)&&(i=c.getPathGenerator(this.commonObjs,e)),c.disableFontFace||f?(s.save(),s.translate(t,r),s.beginPath(),i(s,d),o&&s.setTransform.apply(s,_toConsumableArray(o)),h!==a.TextRenderingMode.FILL&&h!==a.TextRenderingMode.FILL_STROKE||s.fill(),h!==a.TextRenderingMode.STROKE&&h!==a.TextRenderingMode.FILL_STROKE||s.stroke(),s.restore()):(h!==a.TextRenderingMode.FILL&&h!==a.TextRenderingMode.FILL_STROKE||s.fillText(e,t,r),h!==a.TextRenderingMode.STROKE&&h!==a.TextRenderingMode.FILL_STROKE||s.strokeText(e,t,r)),p)&&(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:(0,n.getCurrentTransform)(s),x:t,y:r,fontSize:d,addToPath:i})}},{key:"isFontSubpixelAAEnabled",get:function get(){var e=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10).context
e.scale(1.5,1),e.fillText("I",0,10)
for(var t=e.getImageData(0,0,10,10).data,r=!1,n=3;n<t.length;n+=4)if(t[n]>0&&t[n]<255){r=!0
break}return(0,a.shadow)(this,"isFontSubpixelAAEnabled",r)}},{key:"showText",value:function showText(e){var t=this.current,r=t.font
if(r.isType3Font)return this.showType3Text(e)
var i=t.fontSize
if(0!==i){var s,l=this.ctx,c=t.fontSizeScale,u=t.charSpacing,d=t.wordSpacing,h=t.fontDirection,p=t.textHScale*h,f=e.length,v=r.vertical,m=v?1:-1,g=r.defaultVMetrics,_=i*t.fontMatrix[0],b=t.textRenderingMode===a.TextRenderingMode.FILL&&!r.disableFontFace&&!t.patternFill
if(l.save(),l.transform.apply(l,_toConsumableArray(t.textMatrix)),l.translate(t.x,t.y+t.textRise),h>0?l.scale(p,-1):l.scale(p,1),t.patternFill){l.save()
var y=t.fillColor.getPattern(l,this,(0,n.getCurrentTransformInverse)(l),o.PathType.FILL)
s=(0,n.getCurrentTransform)(l),l.restore(),l.fillStyle=y}var k=t.lineWidth,S=t.textMatrixScale
if(0===S||0===k){var C=t.textRenderingMode&a.TextRenderingMode.FILL_STROKE_MASK
C!==a.TextRenderingMode.STROKE&&C!==a.TextRenderingMode.FILL_STROKE||(k=this.getSinglePixelWidth())}else k/=S
1!==c&&(l.scale(c,c),k/=c),l.lineWidth=k
var P,E=0
for(P=0;P<f;++P){var x=e[P]
if("number"!=typeof x){var w=!1,A=(x.isSpace?d:0)+u,F=x.fontChar,M=x.accent,T=void 0,R=void 0,I=x.width
if(v){var O=x.vmetric||g,D=-(x.vmetric?O[1]:.5*I)*_,L=O[2]*_
I=O?-O[0]:I,T=D/c,R=(E+L)/c}else T=E/c,R=0
if(r.remeasure&&I>0){var N=1e3*l.measureText(F).width/i*c
if(I<N&&this.isFontSubpixelAAEnabled){var B=I/N
w=!0,l.save(),l.scale(B,1),T/=B}else I!==N&&(T+=(I-N)/2e3*i/c)}if(this.contentVisible&&(x.isInFont||r.missingFile))if(b&&!M)l.fillText(F,T,R)
else if(this.paintChar(F,T,R,s),M){var j=T+i*M.offset.x/c,G=R-i*M.offset.y/c
this.paintChar(M.fontChar,j,G,s)}E+=v?I*_-A*h:I*_+A*h,w&&l.restore()}else E+=m*x*i/1e3}v?t.y-=E:t.x+=E*p,l.restore(),this.compose()}}},{key:"showType3Text",value:function showType3Text(e){var t,r,n,o,i=this.ctx,s=this.current,l=s.font,c=s.fontSize,u=s.fontDirection,d=l.vertical?1:-1,h=s.charSpacing,p=s.wordSpacing,f=s.textHScale*u,v=s.fontMatrix||a.FONT_IDENTITY_MATRIX,m=e.length
if(!(s.textRenderingMode===a.TextRenderingMode.INVISIBLE)&&0!==c){for(this._cachedScaleForStroking=null,this._cachedGetSinglePixelWidth=null,i.save(),i.transform.apply(i,_toConsumableArray(s.textMatrix)),i.translate(s.x,s.y),i.scale(f,u),t=0;t<m;++t)if("number"!=typeof(r=e[t])){var g=(r.isSpace?p:0)+h,_=l.charProcOperatorList[r.operatorListId]
if(_)this.contentVisible&&(this.processingType3=r,this.save(),i.scale(c,c),i.transform.apply(i,_toConsumableArray(v)),this.executeOperatorList(_),this.restore()),n=a.Util.applyTransform([r.width,0],v)[0]*c+g,i.translate(n,0),s.x+=n*f
else(0,a.warn)('Type3 character "'.concat(r.operatorListId,'" is not available.'))}else o=d*r*c/1e3,this.ctx.translate(o,0),s.x+=o*f
i.restore(),this.processingType3=null}}},{key:"setCharWidth",value:function setCharWidth(e,t){}},{key:"setCharWidthAndBounds",value:function setCharWidthAndBounds(e,t,r,n,a,o){this.ctx.rect(r,n,a-r,o-n),this.ctx.clip(),this.endPath()}},{key:"getColorN_Pattern",value:function getColorN_Pattern(e){var t,r=this
if("TilingPattern"===e[0]){var a=e[1],i=this.baseTransform||(0,n.getCurrentTransform)(this.ctx),s={createCanvasGraphics:function createCanvasGraphics(e){return new CanvasGraphics(e,r.commonObjs,r.objs,r.canvasFactory)}}
t=new o.TilingPattern(e,a,this.ctx,s,i)}else t=this._getPattern(e[1],e[2])
return t}},{key:"setStrokeColorN",value:function setStrokeColorN(){this.current.strokeColor=this.getColorN_Pattern(arguments)}},{key:"setFillColorN",value:function setFillColorN(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0}},{key:"setStrokeRGBColor",value:function setStrokeRGBColor(e,t,r){var n,o=(null===(n=this.selectColor)||void 0===n?void 0:n.call(this,e,t,r))||a.Util.makeHexColor(e,t,r)
this.ctx.strokeStyle=o,this.current.strokeColor=o}},{key:"setFillRGBColor",value:function setFillRGBColor(e,t,r){var n,o=(null===(n=this.selectColor)||void 0===n?void 0:n.call(this,e,t,r))||a.Util.makeHexColor(e,t,r)
this.ctx.fillStyle=o,this.current.fillColor=o,this.current.patternFill=!1}},{key:"_getPattern",value:function _getPattern(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return this.cachedPatterns.has(e)?t=this.cachedPatterns.get(e):(t=(0,o.getShadingPattern)(this.objs.get(e)),this.cachedPatterns.set(e,t)),r&&(t.matrix=r),t}},{key:"shadingFill",value:function shadingFill(e){if(this.contentVisible){var t=this.ctx
this.save()
var r=this._getPattern(e)
t.fillStyle=r.getPattern(t,this,(0,n.getCurrentTransformInverse)(t),o.PathType.SHADING)
var i=(0,n.getCurrentTransformInverse)(t)
if(i){var s=t.canvas,l=s.width,c=s.height,u=a.Util.applyTransform([0,0],i),d=a.Util.applyTransform([0,c],i),h=a.Util.applyTransform([l,0],i),p=a.Util.applyTransform([l,c],i),f=Math.min(u[0],d[0],h[0],p[0]),v=Math.min(u[1],d[1],h[1],p[1]),m=Math.max(u[0],d[0],h[0],p[0]),g=Math.max(u[1],d[1],h[1],p[1])
this.ctx.fillRect(f,v,m-f,g-v)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.compose(this.current.getClippedPathBoundingBox()),this.restore()}}},{key:"beginInlineImage",value:function beginInlineImage(){(0,a.unreachable)("Should not call beginInlineImage")}},{key:"beginImageData",value:function beginImageData(){(0,a.unreachable)("Should not call beginImageData")}},{key:"paintFormXObjectBegin",value:function paintFormXObjectBegin(e,t){if(this.contentVisible&&(this.save(),this.baseTransformStack.push(this.baseTransform),Array.isArray(e)&&6===e.length&&this.transform.apply(this,_toConsumableArray(e)),this.baseTransform=(0,n.getCurrentTransform)(this.ctx),t)){var r=t[2]-t[0],a=t[3]-t[1]
this.ctx.rect(t[0],t[1],r,a),this.current.updateRectMinMax((0,n.getCurrentTransform)(this.ctx),t),this.clip(),this.endPath()}}},{key:"paintFormXObjectEnd",value:function paintFormXObjectEnd(){this.contentVisible&&(this.restore(),this.baseTransform=this.baseTransformStack.pop())}},{key:"beginGroup",value:function beginGroup(e){if(this.contentVisible){this.save(),this.inSMaskMode&&(this.endSMaskMode(),this.current.activeSMask=null)
var t=this.ctx
e.isolated||(0,a.info)("TODO: Support non-isolated groups."),e.knockout&&(0,a.warn)("Knockout groups not supported.")
var r=(0,n.getCurrentTransform)(t)
if(e.matrix&&t.transform.apply(t,_toConsumableArray(e.matrix)),!e.bbox)throw new Error("Bounding box is required.")
var o=a.Util.getAxialAlignedBoundingBox(e.bbox,(0,n.getCurrentTransform)(t)),i=[0,0,t.canvas.width,t.canvas.height]
o=a.Util.intersect(o,i)||[0,0,0,0]
var s=Math.floor(o[0]),l=Math.floor(o[1]),c=Math.max(Math.ceil(o[2])-s,1),u=Math.max(Math.ceil(o[3])-l,1),d=1,h=1
c>4096&&(d=c/4096,c=4096),u>4096&&(h=u/4096,u=4096),this.current.startNewPathAndClipBox([0,0,c,u])
var p="groupAt"+this.groupLevel
e.smask&&(p+="_smask_"+this.smaskCounter++%2)
var f=this.cachedCanvases.getCanvas(p,c,u),v=f.context
v.scale(1/d,1/h),v.translate(-s,-l),v.transform.apply(v,_toConsumableArray(r)),e.smask?this.smaskStack.push({canvas:f.canvas,context:v,offsetX:s,offsetY:l,scaleX:d,scaleY:h,subtype:e.smask.subtype,backdrop:e.smask.backdrop,transferMap:e.smask.transferMap||null,startTransformInverse:null}):(t.setTransform(1,0,0,1,0,0),t.translate(s,l),t.scale(d,h),t.save()),copyCtxState(t,v),this.ctx=v,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(t),this.groupLevel++}}},{key:"endGroup",value:function endGroup(e){if(this.contentVisible){this.groupLevel--
var t=this.ctx,r=this.groupStack.pop()
if(this.ctx=r,this.ctx.imageSmoothingEnabled=!1,e.smask)this.tempSMask=this.smaskStack.pop(),this.restore()
else{var o
this.ctx.restore()
var i=(0,n.getCurrentTransform)(this.ctx)
this.restore(),this.ctx.save(),(o=this.ctx).setTransform.apply(o,_toConsumableArray(i))
var s=a.Util.getAxialAlignedBoundingBox([0,0,t.canvas.width,t.canvas.height],i)
this.ctx.drawImage(t.canvas,0,0),this.ctx.restore(),this.compose(s)}}}},{key:"beginAnnotation",value:function beginAnnotation(e,t,r,o,i){var s;(_assertClassBrand(m,this,_restoreInitialState).call(this),resetCtxToDefault(this.ctx,this.foregroundColor),this.ctx.save(),this.save(),this.baseTransform)&&(s=this.ctx).setTransform.apply(s,_toConsumableArray(this.baseTransform))
if(Array.isArray(t)&&4===t.length){var l=t[2]-t[0],c=t[3]-t[1]
if(i&&this.annotationCanvasMap){(r=r.slice())[4]-=t[0],r[5]-=t[1],(t=t.slice())[0]=t[1]=0,t[2]=l,t[3]=c
var u=_slicedToArray(a.Util.singularValueDecompose2dScale((0,n.getCurrentTransform)(this.ctx)),2),h=u[0],p=u[1],f=this.viewportScale,v=Math.ceil(l*this.outputScaleX*f),g=Math.ceil(c*this.outputScaleY*f)
this.annotationCanvas=this.canvasFactory.create(v,g)
var _=this.annotationCanvas,b=_.canvas,y=_.context
this.annotationCanvasMap.set(e,b),this.annotationCanvas.savedCtx=this.ctx,this.ctx=y,this.ctx.setTransform(h,0,0,-p,0,c*p),resetCtxToDefault(this.ctx,this.foregroundColor)}else resetCtxToDefault(this.ctx,this.foregroundColor),this.ctx.rect(t[0],t[1],l,c),this.ctx.clip(),this.endPath()}this.current=new d(this.ctx.canvas.width,this.ctx.canvas.height),this.transform.apply(this,_toConsumableArray(r)),this.transform.apply(this,_toConsumableArray(o))}},{key:"endAnnotation",value:function endAnnotation(){this.annotationCanvas&&(this.ctx=this.annotationCanvas.savedCtx,delete this.annotationCanvas.savedCtx,delete this.annotationCanvas)}},{key:"paintImageMaskXObject",value:function paintImageMaskXObject(e){if(this.contentVisible){var t=e.count;(e=this.getObject(e.data,e)).count=t
var r=this.ctx,n=this.processingType3
if(n&&(void 0===n.compiled&&(n.compiled=function compileType3Glyph(e){var t=e.width,r=e.height
if(t>l||r>l)return null
var n,a,o,i,s=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),c=t+1,u=new Uint8Array(c*(r+1)),d=t+7&-8,h=new Uint8Array(d*r),p=0,f=_createForOfIteratorHelper(e.data)
try{for(f.s();!(i=f.n()).done;)for(var v=i.value,m=128;m>0;)h[p++]=v&m?0:255,m>>=1}catch(e){f.e(e)}finally{f.f()}var g=0
for(0!==h[p=0]&&(u[0]=1,++g),a=1;a<t;a++)h[p]!==h[p+1]&&(u[a]=h[p]?2:1,++g),p++
for(0!==h[p]&&(u[a]=2,++g),n=1;n<r;n++){o=n*c,h[(p=n*d)-d]!==h[p]&&(u[o]=h[p]?1:8,++g)
var _=(h[p]?4:0)+(h[p-d]?8:0)
for(a=1;a<t;a++)s[_=(_>>2)+(h[p+1]?4:0)+(h[p-d+1]?8:0)]&&(u[o+a]=s[_],++g),p++
if(h[p-d]!==h[p]&&(u[o+a]=h[p]?2:4,++g),g>1e3)return null}for(o=n*c,0!==h[p=d*(r-1)]&&(u[o]=8,++g),a=1;a<t;a++)h[p]!==h[p+1]&&(u[o+a]=h[p]?4:8,++g),p++
if(0!==h[p]&&(u[o+a]=4,++g),g>1e3)return null
var b=new Int32Array([0,c,-1,0,-c,0,0,0,1]),y=new Path2D
for(n=0;g&&n<=r;n++){for(var k=n*c,S=k+t;k<S&&!u[k];)k++
if(k!==S){y.moveTo(k%c,n)
var C=k,P=u[k]
do{var E=b[P]
do{k+=E}while(!u[k])
var x=u[k]
5!==x&&10!==x?(P=x,u[k]=0):(P=x&51*P>>4,u[k]&=P>>2|P<<2),y.lineTo(k%c,k/c|0),u[k]||--g}while(C!==k);--n}}return h=null,u=null,function drawOutline(e){e.save(),e.scale(1/t,-1/r),e.translate(0,-r),e.fill(y),e.beginPath(),e.restore()}}(e)),n.compiled))n.compiled(r)
else{var a=this._createMaskCanvas(e),o=a.canvas
r.save(),r.setTransform(1,0,0,1,0,0),r.drawImage(o,a.offsetX,a.offsetY),r.restore(),this.compose()}}}},{key:"paintImageMaskXObjectRepeat",value:function paintImageMaskXObjectRepeat(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0
if(this.contentVisible){e=this.getObject(e.data,e)
var l=this.ctx
l.save()
var c=(0,n.getCurrentTransform)(l)
l.transform(t,r,o,i,0,0)
var u=this._createMaskCanvas(e)
l.setTransform(1,0,0,1,0,0)
for(var d=0,h=s.length;d<h;d+=2){var p=a.Util.transform(c,[t,r,o,i,s[d],s[d+1]]),f=_slicedToArray(a.Util.applyTransform([0,0],p),2),v=f[0],m=f[1]
l.drawImage(u.canvas,v,m)}l.restore(),this.compose()}}},{key:"paintImageMaskXObjectGroup",value:function paintImageMaskXObjectGroup(e){if(this.contentVisible){var t,r=this.ctx,a=this.current.fillColor,i=this.current.patternFill,s=_createForOfIteratorHelper(e)
try{for(s.s();!(t=s.n()).done;){var l=t.value,c=l.data,u=l.width,d=l.height,h=l.transform,p=this.cachedCanvases.getCanvas("maskCanvas",u,d),f=p.context
f.save(),putBinaryImageMask(f,this.getObject(c,l)),f.globalCompositeOperation="source-in",f.fillStyle=i?a.getPattern(f,this,(0,n.getCurrentTransformInverse)(r),o.PathType.FILL):a,f.fillRect(0,0,u,d),f.restore(),r.save(),r.transform.apply(r,_toConsumableArray(h)),r.scale(1,-1),drawImageAtIntegerCoords(r,p.canvas,0,0,u,d,0,-1,1,1),r.restore()}}catch(e){s.e(e)}finally{s.f()}this.compose()}}},{key:"paintImageXObject",value:function paintImageXObject(e){if(this.contentVisible){var t=this.getObject(e)
t?this.paintInlineImageXObject(t):(0,a.warn)("Dependent image isn't ready yet")}}},{key:"paintImageXObjectRepeat",value:function paintImageXObjectRepeat(e,t,r,n){if(this.contentVisible){var o=this.getObject(e)
if(o){for(var i=o.width,s=o.height,l=[],c=0,u=n.length;c<u;c+=2)l.push({transform:[t,0,0,r,n[c],n[c+1]],x:0,y:0,w:i,h:s})
this.paintInlineImageXObjectGroup(o,l)}else(0,a.warn)("Dependent image isn't ready yet")}}},{key:"paintInlineImageXObject",value:function paintInlineImageXObject(e){if(this.contentVisible){var t,r=e.width,o=e.height,i=this.ctx
if(this.save(),i.scale(1/r,-1/o),"function"==typeof HTMLElement&&e instanceof HTMLElement||!e.data)t=e
else{var s=this.cachedCanvases.getCanvas("inlineImage",r,o)
putBinaryImageData(s.context,e,this.current.transferMaps),t=s.canvas}var l=this._scaleImage(t,(0,n.getCurrentTransformInverse)(i))
i.imageSmoothingEnabled=getImageSmoothingEnabled((0,n.getCurrentTransform)(i),e.interpolate)
var c=_slicedToArray(drawImageAtIntegerCoords(i,l.img,0,0,l.paintWidth,l.paintHeight,0,-o,r,o),2),u=c[0],d=c[1]
if(this.imageLayer){var h=_slicedToArray(a.Util.applyTransform([0,-o],(0,n.getCurrentTransform)(this.ctx)),2),p=h[0],f=h[1]
this.imageLayer.appendImage({imgData:e,left:p,top:f,width:u,height:d})}this.compose(),this.restore()}}},{key:"paintInlineImageXObjectGroup",value:function paintInlineImageXObjectGroup(e,t){if(this.contentVisible){var r=this.ctx,o=e.width,i=e.height,s=this.cachedCanvases.getCanvas("inlineImage",o,i)
putBinaryImageData(s.context,e,this.current.transferMaps)
var l,c=_createForOfIteratorHelper(t)
try{for(c.s();!(l=c.n()).done;){var u=l.value
if(r.save(),r.transform.apply(r,_toConsumableArray(u.transform)),r.scale(1,-1),drawImageAtIntegerCoords(r,s.canvas,u.x,u.y,u.w,u.h,0,-1,1,1),this.imageLayer){var d=_slicedToArray(a.Util.applyTransform([u.x,u.y],(0,n.getCurrentTransform)(this.ctx)),2),h=d[0],p=d[1]
this.imageLayer.appendImage({imgData:e,left:h,top:p,width:o,height:i})}r.restore()}}catch(e){c.e(e)}finally{c.f()}this.compose()}}},{key:"paintSolidColorImageMask",value:function paintSolidColorImageMask(){this.contentVisible&&(this.ctx.fillRect(0,0,1,1),this.compose())}},{key:"markPoint",value:function markPoint(e){}},{key:"markPointProps",value:function markPointProps(e,t){}},{key:"beginMarkedContent",value:function beginMarkedContent(e){this.markedContentStack.push({visible:!0})}},{key:"beginMarkedContentProps",value:function beginMarkedContentProps(e,t){"OC"===e?this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(t)}):this.markedContentStack.push({visible:!0}),this.contentVisible=this.isContentVisible()}},{key:"endMarkedContent",value:function endMarkedContent(){this.markedContentStack.pop(),this.contentVisible=this.isContentVisible()}},{key:"beginCompat",value:function beginCompat(){}},{key:"endCompat",value:function endCompat(){}},{key:"consumePath",value:function consumePath(e){var t=this.current.isEmptyClip()
this.pendingClip&&this.current.updateClipFromPath(),this.pendingClip||this.compose(e)
var r=this.ctx
this.pendingClip&&(t||(this.pendingClip===v?r.clip("evenodd"):r.clip()),this.pendingClip=null),this.current.startNewPathAndClipBox(this.current.clipBox),r.beginPath()}},{key:"getSinglePixelWidth",value:function getSinglePixelWidth(){if(!this._cachedGetSinglePixelWidth){var e=(0,n.getCurrentTransform)(this.ctx)
if(0===e[1]&&0===e[2])this._cachedGetSinglePixelWidth=1/Math.min(Math.abs(e[0]),Math.abs(e[3]))
else{var t=Math.abs(e[0]*e[3]-e[2]*e[1]),r=Math.hypot(e[0],e[2]),a=Math.hypot(e[1],e[3])
this._cachedGetSinglePixelWidth=Math.max(r,a)/t}}return this._cachedGetSinglePixelWidth}},{key:"getScaleForStroking",value:function getScaleForStroking(){if(!this._cachedScaleForStroking){var e,t,r=this.current.lineWidth,a=(0,n.getCurrentTransform)(this.ctx)
if(0===a[1]&&0===a[2]){var o=Math.abs(a[0]),i=Math.abs(a[3])
if(0===r)e=1/o,t=1/i
else{var s=o*r,l=i*r
e=s<1?1/s:1,t=l<1?1/l:1}}else{var c=Math.abs(a[0]*a[3]-a[2]*a[1]),u=Math.hypot(a[0],a[1]),d=Math.hypot(a[2],a[3])
if(0===r)e=d/c,t=u/c
else{var h=r*c
e=d>h?d/h:1,t=u>h?u/h:1}}this._cachedScaleForStroking=[e,t]}return this._cachedScaleForStroking}},{key:"rescaleAndStroke",value:function rescaleAndStroke(e){var t=this.ctx,r=this.current.lineWidth,a=_slicedToArray(this.getScaleForStroking(),2),o=a[0],i=a[1]
if(t.lineWidth=r||1,1!==o||1!==i){var s,l,c
e&&(s=(0,n.getCurrentTransform)(t),l=t.getLineDash().slice(),c=t.lineDashOffset),t.scale(o,i)
var u=Math.max(o,i)
t.setLineDash(t.getLineDash().map(function(e){return e/u})),t.lineDashOffset/=u,t.stroke(),e&&(t.setTransform.apply(t,_toConsumableArray(s)),t.setLineDash(l),t.lineDashOffset=c)}else t.stroke()}},{key:"isContentVisible",value:function isContentVisible(){for(var e=this.markedContentStack.length-1;e>=0;e--)if(!this.markedContentStack[e].visible)return!1
return!0}}])}()
function _restoreInitialState(){for(;this.stateStack.length||this.inSMaskMode;)this.restore()
this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null)}for(var _ in t.CanvasGraphics=g,a.OPS)void 0!==g.prototype[_]&&(g.prototype[a.OPS[_]]=g.prototype[_])},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.TilingPattern=t.PathType=void 0,t.getShadingPattern=function getShadingPattern(e){switch(e[0]){case"RadialAxial":return new l(e)
case"Mesh":return new c(e)
case"Dummy":return new u}throw new Error("Unknown IR type: ".concat(e[0]))}
var n=r(1),a=r(8),o=r(3),i={FILL:"Fill",STROKE:"Stroke",SHADING:"Shading"}
function applyBoundingBox(e,t){if(t&&!o.isNodeJS){var r=t[2]-t[0],n=t[3]-t[1],a=new Path2D
a.rect(t[0],t[1],r,n),e.clip(a)}}t.PathType=i
var s=function(){return _createClass(function BaseShadingPattern(){_classCallCheck(this,BaseShadingPattern),this.constructor===BaseShadingPattern&&(0,n.unreachable)("Cannot initialize BaseShadingPattern.")},[{key:"getPattern",value:function getPattern(){(0,n.unreachable)("Abstract method `getPattern` called.")}}])}(),l=function(e){function RadialAxialShadingPattern(e){var t
return _classCallCheck(this,RadialAxialShadingPattern),(t=_callSuper(this,RadialAxialShadingPattern))._type=e[1],t._bbox=e[2],t._colorStops=e[3],t._p0=e[4],t._p1=e[5],t._r0=e[6],t._r1=e[7],t.matrix=null,t}return _inherits(RadialAxialShadingPattern,s),_createClass(RadialAxialShadingPattern,[{key:"_createGradient",value:function _createGradient(e){var t
"axial"===this._type?t=e.createLinearGradient(this._p0[0],this._p0[1],this._p1[0],this._p1[1]):"radial"===this._type&&(t=e.createRadialGradient(this._p0[0],this._p0[1],this._r0,this._p1[0],this._p1[1],this._r1))
var r,n=_createForOfIteratorHelper(this._colorStops)
try{for(n.s();!(r=n.n()).done;){var a=r.value
t.addColorStop(a[0],a[1])}}catch(e){n.e(e)}finally{n.f()}return t}},{key:"getPattern",value:function getPattern(e,t,r,o){var s
if(o===i.STROKE||o===i.FILL){var l=t.current.getClippedPathBoundingBox(o,(0,a.getCurrentTransform)(e))||[0,0,0,0],c=Math.ceil(l[2]-l[0])||1,u=Math.ceil(l[3]-l[1])||1,d=t.cachedCanvases.getCanvas("pattern",c,u,!0),h=d.context
h.clearRect(0,0,h.canvas.width,h.canvas.height),h.beginPath(),h.rect(0,0,h.canvas.width,h.canvas.height),h.translate(-l[0],-l[1]),r=n.Util.transform(r,[1,0,0,1,l[0],l[1]]),h.transform.apply(h,_toConsumableArray(t.baseTransform)),this.matrix&&h.transform.apply(h,_toConsumableArray(this.matrix)),applyBoundingBox(h,this._bbox),h.fillStyle=this._createGradient(h),h.fill(),s=e.createPattern(d.canvas,"no-repeat")
var p=new DOMMatrix(r)
try{s.setTransform(p)}catch(e){(0,n.warn)('RadialAxialShadingPattern.getPattern: "'.concat(null==e?void 0:e.message,'".'))}}else applyBoundingBox(e,this._bbox),s=this._createGradient(e)
return s}}])}()
function drawTriangle(e,t,r,n,a,o,i,s){var l,c=t.coords,u=t.colors,d=e.data,h=4*e.width
c[r+1]>c[n+1]&&(l=r,r=n,n=l,l=o,o=i,i=l),c[n+1]>c[a+1]&&(l=n,n=a,a=l,l=i,i=s,s=l),c[r+1]>c[n+1]&&(l=r,r=n,n=l,l=o,o=i,i=l)
var p=(c[r]+t.offsetX)*t.scaleX,f=(c[r+1]+t.offsetY)*t.scaleY,v=(c[n]+t.offsetX)*t.scaleX,m=(c[n+1]+t.offsetY)*t.scaleY,g=(c[a]+t.offsetX)*t.scaleX,_=(c[a+1]+t.offsetY)*t.scaleY
if(!(f>=_))for(var b,y,k,S,C,P,E,x,w=u[o],A=u[o+1],F=u[o+2],M=u[i],T=u[i+1],R=u[i+2],I=u[s],O=u[s+1],D=u[s+2],L=Math.round(f),N=Math.round(_),B=L;B<=N;B++){if(B<m){var j=void 0
b=p-(p-v)*(j=B<f?0:(f-B)/(f-m)),y=w-(w-M)*j,k=A-(A-T)*j,S=F-(F-R)*j}else{var G=void 0
b=v-(v-g)*(G=B>_?1:m===_?0:(m-B)/(m-_)),y=M-(M-I)*G,k=T-(T-O)*G,S=R-(R-D)*G}var z=void 0
C=p-(p-g)*(z=B<f?0:B>_?1:(f-B)/(f-_)),P=w-(w-I)*z,E=A-(A-O)*z,x=F-(F-D)*z
for(var H=Math.round(Math.min(b,C)),W=Math.round(Math.max(b,C)),V=h*B+4*H,U=H;U<=W;U++)(z=(b-U)/(b-C))<0?z=0:z>1&&(z=1),d[V++]=y-(y-P)*z|0,d[V++]=k-(k-E)*z|0,d[V++]=S-(S-x)*z|0,d[V++]=255}}function drawFigure(e,t,r){var n,a,o=t.coords,i=t.colors
switch(t.type){case"lattice":var s=t.verticesPerRow,l=Math.floor(o.length/s)-1,c=s-1
for(n=0;n<l;n++)for(var u=n*s,d=0;d<c;d++,u++)drawTriangle(e,r,o[u],o[u+1],o[u+s],i[u],i[u+1],i[u+s]),drawTriangle(e,r,o[u+s+1],o[u+1],o[u+s],i[u+s+1],i[u+1],i[u+s])
break
case"triangles":for(n=0,a=o.length;n<a;n+=3)drawTriangle(e,r,o[n],o[n+1],o[n+2],i[n],i[n+1],i[n+2])
break
default:throw new Error("illegal figure")}}var c=function(e){function MeshShadingPattern(e){var t
return _classCallCheck(this,MeshShadingPattern),(t=_callSuper(this,MeshShadingPattern))._coords=e[2],t._colors=e[3],t._figures=e[4],t._bounds=e[5],t._bbox=e[7],t._background=e[8],t.matrix=null,t}return _inherits(MeshShadingPattern,s),_createClass(MeshShadingPattern,[{key:"_createMeshCanvas",value:function _createMeshCanvas(e,t,r){var n=Math.floor(this._bounds[0]),a=Math.floor(this._bounds[1]),o=Math.ceil(this._bounds[2])-n,i=Math.ceil(this._bounds[3])-a,s=Math.min(Math.ceil(Math.abs(o*e[0]*1.1)),3e3),l=Math.min(Math.ceil(Math.abs(i*e[1]*1.1)),3e3),c=o/s,u=i/l,d={coords:this._coords,colors:this._colors,offsetX:-n,offsetY:-a,scaleX:1/c,scaleY:1/u},h=s+4,p=l+4,f=r.getCanvas("mesh",h,p,!1),v=f.context,m=v.createImageData(s,l)
if(t)for(var g=m.data,_=0,b=g.length;_<b;_+=4)g[_]=t[0],g[_+1]=t[1],g[_+2]=t[2],g[_+3]=255
var y,k=_createForOfIteratorHelper(this._figures)
try{for(k.s();!(y=k.n()).done;){drawFigure(m,y.value,d)}}catch(e){k.e(e)}finally{k.f()}return v.putImageData(m,2,2),{canvas:f.canvas,offsetX:n-2*c,offsetY:a-2*u,scaleX:c,scaleY:u}}},{key:"getPattern",value:function getPattern(e,t,r,o){var s
if(applyBoundingBox(e,this._bbox),o===i.SHADING)s=n.Util.singularValueDecompose2dScale((0,a.getCurrentTransform)(e))
else if(s=n.Util.singularValueDecompose2dScale(t.baseTransform),this.matrix){var l=n.Util.singularValueDecompose2dScale(this.matrix)
s=[s[0]*l[0],s[1]*l[1]]}var c=this._createMeshCanvas(s,o===i.SHADING?null:this._background,t.cachedCanvases)
return o!==i.SHADING&&(e.setTransform.apply(e,_toConsumableArray(t.baseTransform)),this.matrix&&e.transform.apply(e,_toConsumableArray(this.matrix))),e.translate(c.offsetX,c.offsetY),e.scale(c.scaleX,c.scaleY),e.createPattern(c.canvas,"no-repeat")}}])}(),u=function(e){function DummyShadingPattern(){return _classCallCheck(this,DummyShadingPattern),_callSuper(this,DummyShadingPattern,arguments)}return _inherits(DummyShadingPattern,s),_createClass(DummyShadingPattern,[{key:"getPattern",value:function getPattern(){return"hotpink"}}])}()
var d=1,h=2,p=function(){function TilingPattern(e,t,r,n,a){_classCallCheck(this,TilingPattern),this.operatorList=e[2],this.matrix=e[3]||[1,0,0,1,0,0],this.bbox=e[4],this.xstep=e[5],this.ystep=e[6],this.paintType=e[7],this.tilingType=e[8],this.color=t,this.ctx=r,this.canvasGraphicsFactory=n,this.baseTransform=a}return _createClass(TilingPattern,[{key:"createPatternCanvas",value:function createPatternCanvas(e){var t=this.operatorList,r=this.bbox,o=this.xstep,i=this.ystep,s=this.paintType,l=this.tilingType,c=this.color,u=this.canvasGraphicsFactory;(0,n.info)("TilingType: "+l)
var d=r[0],h=r[1],p=r[2],f=r[3],v=n.Util.singularValueDecompose2dScale(this.matrix),m=n.Util.singularValueDecompose2dScale(this.baseTransform),g=[v[0]*m[0],v[1]*m[1]],_=this.getSizeAndScale(o,this.ctx.canvas.width,g[0]),b=this.getSizeAndScale(i,this.ctx.canvas.height,g[1]),y=e.cachedCanvases.getCanvas("pattern",_.size,b.size,!0),k=y.context,S=u.createCanvasGraphics(k)
S.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(S,s,c)
var C=d,P=h,E=p,x=f
return d<0&&(C=0,E+=Math.abs(d)),h<0&&(P=0,x+=Math.abs(h)),k.translate(-_.scale*C,-b.scale*P),S.transform(_.scale,0,0,b.scale,0,0),k.save(),this.clipBbox(S,C,P,E,x),S.baseTransform=(0,a.getCurrentTransform)(S.ctx),S.executeOperatorList(t),S.endDrawing(),{canvas:y.canvas,scaleX:_.scale,scaleY:b.scale,offsetX:C,offsetY:P}}},{key:"getSizeAndScale",value:function getSizeAndScale(e,t,r){e=Math.abs(e)
var n=Math.max(TilingPattern.MAX_PATTERN_SIZE,t),a=Math.ceil(e*r)
return a>=n?a=n:r=a/e,{scale:r,size:a}}},{key:"clipBbox",value:function clipBbox(e,t,r,n,o){var i=n-t,s=o-r
e.ctx.rect(t,r,i,s),e.current.updateRectMinMax((0,a.getCurrentTransform)(e.ctx),[t,r,n,o]),e.clip(),e.endPath()}},{key:"setFillAndStrokeStyleToContext",value:function setFillAndStrokeStyleToContext(e,t,r){var a=e.ctx,o=e.current
switch(t){case d:var i=this.ctx
a.fillStyle=i.fillStyle,a.strokeStyle=i.strokeStyle,o.fillColor=i.fillStyle,o.strokeColor=i.strokeStyle
break
case h:var s=n.Util.makeHexColor(r[0],r[1],r[2])
a.fillStyle=s,a.strokeStyle=s,o.fillColor=s,o.strokeColor=s
break
default:throw new n.FormatError("Unsupported paint type: ".concat(t))}}},{key:"getPattern",value:function getPattern(e,t,r,a){var o=r
a!==i.SHADING&&(o=n.Util.transform(o,t.baseTransform),this.matrix&&(o=n.Util.transform(o,this.matrix)))
var s=this.createPatternCanvas(t),l=new DOMMatrix(o)
l=(l=l.translate(s.offsetX,s.offsetY)).scale(1/s.scaleX,1/s.scaleY)
var c=e.createPattern(s.canvas,"repeat")
try{c.setTransform(l)}catch(e){(0,n.warn)('TilingPattern.getPattern: "'.concat(null==e?void 0:e.message,'".'))}return c}}],[{key:"MAX_PATTERN_SIZE",get:function get(){return(0,n.shadow)(this,"MAX_PATTERN_SIZE",3e3)}}])}()
t.TilingPattern=p},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.applyMaskImageData=function applyMaskImageData(e){var t=e.src,r=e.srcPos,a=void 0===r?0:r,o=e.dest,i=e.destPos,s=void 0===i?0:i,l=e.width,c=e.height,u=e.inverseDecode,d=void 0!==u&&u,h=n.FeatureTest.isLittleEndian?4278190080:255,p=_slicedToArray(d?[0,h]:[h,0],2),f=p[0],v=p[1],m=l>>3,g=7&l,_=t.length
o=new Uint32Array(o.buffer)
for(var b=0;b<c;b++){for(var y=a+m;a<y;a++){var k=a<_?t[a]:255
o[s++]=128&k?v:f,o[s++]=64&k?v:f,o[s++]=32&k?v:f,o[s++]=16&k?v:f,o[s++]=8&k?v:f,o[s++]=4&k?v:f,o[s++]=2&k?v:f,o[s++]=1&k?v:f}if(0!==g)for(var S=a<_?t[a++]:255,C=0;C<g;C++)o[s++]=S&1<<7-C?v:f}return{srcPos:a,destPos:s}}
var n=r(1)},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalWorkerOptions=void 0
var r=Object.create(null)
t.GlobalWorkerOptions=r,r.workerPort=void 0===r.workerPort?null:r.workerPort,r.workerSrc=void 0===r.workerSrc?"":r.workerSrc},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=void 0
var n=r(1),a={UNKNOWN:0,DATA:1,ERROR:2},o=1,i=2,s=3,l=4,c=5,u=6,d=7,h=8
function wrapReason(e){switch(e instanceof Error||"object"===_typeof(e)&&null!==e||(0,n.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'),e.name){case"AbortException":return new n.AbortException(e.message)
case"MissingPDFException":return new n.MissingPDFException(e.message)
case"PasswordException":return new n.PasswordException(e.message,e.code)
case"UnexpectedResponseException":return new n.UnexpectedResponseException(e.message,e.status)
case"UnknownErrorException":return new n.UnknownErrorException(e.message,e.details)
default:return new n.UnknownErrorException(e.message,e.toString())}}var p=function(){return _createClass(function MessageHandler(e,t,r){var n=this
_classCallCheck(this,MessageHandler),this.sourceName=e,this.targetName=t,this.comObj=r,this.callbackId=1,this.streamId=1,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null),this.callbackCapabilities=Object.create(null),this.actionHandler=Object.create(null),this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===n.sourceName)if(t.stream)n._processStreamMessage(t)
else if(t.callback){var o=t.callbackId,i=n.callbackCapabilities[o]
if(!i)throw new Error("Cannot resolve callback ".concat(o))
if(delete n.callbackCapabilities[o],t.callback===a.DATA)i.resolve(t.data)
else{if(t.callback!==a.ERROR)throw new Error("Unexpected callback case")
i.reject(wrapReason(t.reason))}}else{var s=n.actionHandler[t.action]
if(!s)throw new Error("Unknown action from worker: ".concat(t.action))
if(t.callbackId){var l=n.sourceName,c=t.sourceName
new Promise(function(e){e(s(t.data))}).then(function(e){r.postMessage({sourceName:l,targetName:c,callback:a.DATA,callbackId:t.callbackId,data:e})},function(e){r.postMessage({sourceName:l,targetName:c,callback:a.ERROR,callbackId:t.callbackId,reason:wrapReason(e)})})}else t.streamId?n._createStreamSink(t):s(t.data)}},r.addEventListener("message",this._onComObjOnMessage)},[{key:"on",value:function on(e,t){var r=this.actionHandler
if(r[e])throw new Error('There is already an actionName called "'.concat(e,'"'))
r[e]=t}},{key:"send",value:function send(e,t,r){this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,data:t},r)}},{key:"sendWithPromise",value:function sendWithPromise(e,t,r){var a=this.callbackId++,o=(0,n.createPromiseCapability)()
this.callbackCapabilities[a]=o
try{this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,callbackId:a,data:t},r)}catch(e){o.reject(e)}return o.promise}},{key:"sendWithStream",value:function sendWithStream(e,t,r,a){var i=this,s=this.streamId++,l=this.sourceName,c=this.targetName,d=this.comObj
return new ReadableStream({start:function start(r){var o=(0,n.createPromiseCapability)()
return i.streamControllers[s]={controller:r,startCall:o,pullCall:null,cancelCall:null,isClosed:!1},d.postMessage({sourceName:l,targetName:c,action:e,streamId:s,data:t,desiredSize:r.desiredSize},a),o.promise},pull:function pull(e){var t=(0,n.createPromiseCapability)()
return i.streamControllers[s].pullCall=t,d.postMessage({sourceName:l,targetName:c,stream:u,streamId:s,desiredSize:e.desiredSize}),t.promise},cancel:function cancel(e){(0,n.assert)(e instanceof Error,"cancel must have a valid reason")
var t=(0,n.createPromiseCapability)()
return i.streamControllers[s].cancelCall=t,i.streamControllers[s].isClosed=!0,d.postMessage({sourceName:l,targetName:c,stream:o,streamId:s,reason:wrapReason(e)}),t.promise}},r)}},{key:"_createStreamSink",value:function _createStreamSink(e){var t=e.streamId,r=this.sourceName,a=e.sourceName,o=this.comObj,i=this,u=this.actionHandler[e.action],d={enqueue:function enqueue(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2?arguments[2]:void 0
if(!this.isCancelled){var c=this.desiredSize
this.desiredSize-=i,c>0&&this.desiredSize<=0&&(this.sinkCapability=(0,n.createPromiseCapability)(),this.ready=this.sinkCapability.promise),o.postMessage({sourceName:r,targetName:a,stream:l,streamId:t,chunk:e},s)}},close:function close(){this.isCancelled||(this.isCancelled=!0,o.postMessage({sourceName:r,targetName:a,stream:s,streamId:t}),delete i.streamSinks[t])},error:function error(e){(0,n.assert)(e instanceof Error,"error must have a valid reason"),this.isCancelled||(this.isCancelled=!0,o.postMessage({sourceName:r,targetName:a,stream:c,streamId:t,reason:wrapReason(e)}))},sinkCapability:(0,n.createPromiseCapability)(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:e.desiredSize,ready:null}
d.sinkCapability.resolve(),d.ready=d.sinkCapability.promise,this.streamSinks[t]=d,new Promise(function(t){t(u(e.data,d))}).then(function(){o.postMessage({sourceName:r,targetName:a,stream:h,streamId:t,success:!0})},function(e){o.postMessage({sourceName:r,targetName:a,stream:h,streamId:t,reason:wrapReason(e)})})}},{key:"_processStreamMessage",value:function _processStreamMessage(e){var t=e.streamId,r=this.sourceName,a=e.sourceName,p=this.comObj,f=this.streamControllers[t],v=this.streamSinks[t]
switch(e.stream){case h:e.success?f.startCall.resolve():f.startCall.reject(wrapReason(e.reason))
break
case d:e.success?f.pullCall.resolve():f.pullCall.reject(wrapReason(e.reason))
break
case u:if(!v){p.postMessage({sourceName:r,targetName:a,stream:d,streamId:t,success:!0})
break}v.desiredSize<=0&&e.desiredSize>0&&v.sinkCapability.resolve(),v.desiredSize=e.desiredSize,new Promise(function(e){e(v.onPull&&v.onPull())}).then(function(){p.postMessage({sourceName:r,targetName:a,stream:d,streamId:t,success:!0})},function(e){p.postMessage({sourceName:r,targetName:a,stream:d,streamId:t,reason:wrapReason(e)})})
break
case l:if((0,n.assert)(f,"enqueue should have stream controller"),f.isClosed)break
f.controller.enqueue(e.chunk)
break
case s:if((0,n.assert)(f,"close should have stream controller"),f.isClosed)break
f.isClosed=!0,f.controller.close(),this._deleteStreamController(f,t)
break
case c:(0,n.assert)(f,"error should have stream controller"),f.controller.error(wrapReason(e.reason)),this._deleteStreamController(f,t)
break
case i:e.success?f.cancelCall.resolve():f.cancelCall.reject(wrapReason(e.reason)),this._deleteStreamController(f,t)
break
case o:if(!v)break
new Promise(function(t){t(v.onCancel&&v.onCancel(wrapReason(e.reason)))}).then(function(){p.postMessage({sourceName:r,targetName:a,stream:i,streamId:t,success:!0})},function(e){p.postMessage({sourceName:r,targetName:a,stream:i,streamId:t,reason:wrapReason(e)})}),v.sinkCapability.reject(wrapReason(e.reason)),v.isCancelled=!0,delete this.streamSinks[t]
break
default:throw new Error("Unexpected stream case")}}},{key:"_deleteStreamController",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee10(e,t){return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,Promise.allSettled([e.startCall&&e.startCall.promise,e.pullCall&&e.pullCall.promise,e.cancelCall&&e.cancelCall.promise])
case 1:delete this.streamControllers[t]
case 2:return r.a(2)}},_callee10,this)}))
return function _deleteStreamController(t,r){return e.apply(this,arguments)}}()},{key:"destroy",value:function destroy(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}])}()
t.MessageHandler=p},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0
var n=r(1),a=new WeakMap,o=new WeakMap,i=function(){return _createClass(function Metadata(e){var t=e.parsedData,r=e.rawData
_classCallCheck(this,Metadata),_classPrivateFieldInitSpec(this,a,void 0),_classPrivateFieldInitSpec(this,o,void 0),_classPrivateFieldSet(a,this,t),_classPrivateFieldSet(o,this,r)},[{key:"getRaw",value:function getRaw(){return _classPrivateFieldGet(o,this)}},{key:"get",value:function get(e){var t
return null!==(t=_classPrivateFieldGet(a,this).get(e))&&void 0!==t?t:null}},{key:"getAll",value:function getAll(){return(0,n.objectFromMap)(_classPrivateFieldGet(a,this))}},{key:"has",value:function has(e){return _classPrivateFieldGet(a,this).has(e)}}])}()
t.Metadata=i},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.OptionalContentConfig=void 0
var n=r(1),a=Symbol("INTERNAL"),o=new WeakMap,i=function(){return _createClass(function OptionalContentGroup(e,t){_classCallCheck(this,OptionalContentGroup),_classPrivateFieldInitSpec(this,o,!0),this.name=e,this.intent=t},[{key:"visible",get:function get(){return _classPrivateFieldGet(o,this)}},{key:"_setVisible",value:function _setVisible(e,t){e!==a&&(0,n.unreachable)("Internal method `_setVisible` called."),_classPrivateFieldSet(o,this,t)}}])}(),s=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakSet,h=function(){return _createClass(function OptionalContentConfig(e){if(_classCallCheck(this,OptionalContentConfig),_classPrivateMethodInitSpec(this,d),_classPrivateFieldInitSpec(this,s,!0),_classPrivateFieldInitSpec(this,l,new Map),_classPrivateFieldInitSpec(this,c,null),_classPrivateFieldInitSpec(this,u,null),this.name=null,this.creator=null,null!==e){this.name=e.name,this.creator=e.creator,_classPrivateFieldSet(u,this,e.order)
var t,r=_createForOfIteratorHelper(e.groups)
try{for(r.s();!(t=r.n()).done;){var n=t.value
_classPrivateFieldGet(l,this).set(n.id,new i(n.name,n.intent))}}catch(e){r.e(e)}finally{r.f()}if("OFF"===e.baseState){var o,h=_createForOfIteratorHelper(_classPrivateFieldGet(l,this).values())
try{for(h.s();!(o=h.n()).done;)o.value._setVisible(a,!1)}catch(e){h.e(e)}finally{h.f()}}var p,f=_createForOfIteratorHelper(e.on)
try{for(f.s();!(p=f.n()).done;){var v=p.value
_classPrivateFieldGet(l,this).get(v)._setVisible(a,!0)}}catch(e){f.e(e)}finally{f.f()}var m,g=_createForOfIteratorHelper(e.off)
try{for(g.s();!(m=g.n()).done;){var _=m.value
_classPrivateFieldGet(l,this).get(_)._setVisible(a,!1)}}catch(e){g.e(e)}finally{g.f()}_classPrivateFieldSet(c,this,new Map)
var b,y=_createForOfIteratorHelper(_classPrivateFieldGet(l,this))
try{for(y.s();!(b=y.n()).done;){var k=_slicedToArray(b.value,2),S=k[0],C=k[1]
_classPrivateFieldGet(c,this).set(S,C.visible)}}catch(e){y.e(e)}finally{y.f()}}},[{key:"isVisible",value:function isVisible(e){if(0===_classPrivateFieldGet(l,this).size)return!0
if(!e)return(0,n.warn)("Optional content group not defined."),!0
if("OCG"===e.type)return _classPrivateFieldGet(l,this).has(e.id)?_classPrivateFieldGet(l,this).get(e.id).visible:((0,n.warn)("Optional content group not found: ".concat(e.id)),!0)
if("OCMD"===e.type){if(e.expression)return _assertClassBrand(d,this,_evaluateVisibilityExpression).call(this,e.expression)
if(!e.policy||"AnyOn"===e.policy){var t,r=_createForOfIteratorHelper(e.ids)
try{for(r.s();!(t=r.n()).done;){var a=t.value
if(!_classPrivateFieldGet(l,this).has(a))return(0,n.warn)("Optional content group not found: ".concat(a)),!0
if(_classPrivateFieldGet(l,this).get(a).visible)return!0}}catch(e){r.e(e)}finally{r.f()}return!1}if("AllOn"===e.policy){var o,i=_createForOfIteratorHelper(e.ids)
try{for(i.s();!(o=i.n()).done;){var s=o.value
if(!_classPrivateFieldGet(l,this).has(s))return(0,n.warn)("Optional content group not found: ".concat(s)),!0
if(!_classPrivateFieldGet(l,this).get(s).visible)return!1}}catch(e){i.e(e)}finally{i.f()}return!0}if("AnyOff"===e.policy){var c,u=_createForOfIteratorHelper(e.ids)
try{for(u.s();!(c=u.n()).done;){var h=c.value
if(!_classPrivateFieldGet(l,this).has(h))return(0,n.warn)("Optional content group not found: ".concat(h)),!0
if(!_classPrivateFieldGet(l,this).get(h).visible)return!0}}catch(e){u.e(e)}finally{u.f()}return!1}if("AllOff"===e.policy){var p,f=_createForOfIteratorHelper(e.ids)
try{for(f.s();!(p=f.n()).done;){var v=p.value
if(!_classPrivateFieldGet(l,this).has(v))return(0,n.warn)("Optional content group not found: ".concat(v)),!0
if(_classPrivateFieldGet(l,this).get(v).visible)return!1}}catch(e){f.e(e)}finally{f.f()}return!0}return(0,n.warn)("Unknown optional content policy ".concat(e.policy,".")),!0}return(0,n.warn)("Unknown group type ".concat(e.type,".")),!0}},{key:"setVisibility",value:function setVisibility(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
_classPrivateFieldGet(l,this).has(e)?(_classPrivateFieldGet(l,this).get(e)._setVisible(a,!!t),_classPrivateFieldSet(s,this,null)):(0,n.warn)("Optional content group not found: ".concat(e))}},{key:"hasInitialVisibility",get:function get(){if(null!==_classPrivateFieldGet(s,this))return _classPrivateFieldGet(s,this)
var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(l,this))
try{for(t.s();!(e=t.n()).done;){var r=_slicedToArray(e.value,2),n=r[0],a=r[1],o=_classPrivateFieldGet(c,this).get(n)
if(a.visible!==o)return _classPrivateFieldSet(s,this,!1)}}catch(e){t.e(e)}finally{t.f()}return _classPrivateFieldSet(s,this,!0)}},{key:"getOrder",value:function getOrder(){return _classPrivateFieldGet(l,this).size?_classPrivateFieldGet(u,this)?_classPrivateFieldGet(u,this).slice():_toConsumableArray(_classPrivateFieldGet(l,this).keys()):null}},{key:"getGroups",value:function getGroups(){return _classPrivateFieldGet(l,this).size>0?(0,n.objectFromMap)(_classPrivateFieldGet(l,this)):null}},{key:"getGroup",value:function getGroup(e){return _classPrivateFieldGet(l,this).get(e)||null}}])}()
function _evaluateVisibilityExpression(e){var t=e.length
if(t<2)return!0
for(var r=e[0],a=1;a<t;a++){var o=e[a],i=void 0
if(Array.isArray(o))i=_assertClassBrand(d,this,_evaluateVisibilityExpression).call(this,o)
else{if(!_classPrivateFieldGet(l,this).has(o))return(0,n.warn)("Optional content group not found: ".concat(o)),!0
i=_classPrivateFieldGet(l,this).get(o).visible}switch(r){case"And":if(!i)return!1
break
case"Or":if(i)return!0
break
case"Not":return!i
default:return!0}}return"And"===r}t.OptionalContentConfig=h},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDataTransportStream=void 0
var n=r(1),a=r(8),o=function(){return _createClass(function PDFDataTransportStream(e,t){var r=this
_classCallCheck(this,PDFDataTransportStream),(0,n.assert)(t,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'),this._queuedChunks=[],this._progressiveDone=e.progressiveDone||!1,this._contentDispositionFilename=e.contentDispositionFilename||null
var a=e.initialData
if((null==a?void 0:a.length)>0){var o=new Uint8Array(a).buffer
this._queuedChunks.push(o)}this._pdfDataRangeTransport=t,this._isStreamingSupported=!e.disableStream,this._isRangeSupported=!e.disableRange,this._contentLength=e.length,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener(function(e,t){r._onReceiveData({begin:e,chunk:t})}),this._pdfDataRangeTransport.addProgressListener(function(e,t){r._onProgress({loaded:e,total:t})}),this._pdfDataRangeTransport.addProgressiveReadListener(function(e){r._onReceiveData({chunk:e})}),this._pdfDataRangeTransport.addProgressiveDoneListener(function(){r._onProgressiveDone()}),this._pdfDataRangeTransport.transportReady()},[{key:"_onReceiveData",value:function _onReceiveData(e){var t=new Uint8Array(e.chunk).buffer
if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(t):this._queuedChunks.push(t)
else{var r=this._rangeReaders.some(function(r){return r._begin===e.begin&&(r._enqueue(t),!0)});(0,n.assert)(r,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")}}},{key:"_progressiveDataLength",get:function get(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}},{key:"_onProgress",value:function _onProgress(e){if(void 0===e.total){var t=this._rangeReaders[0]
null!=t&&t.onProgress&&t.onProgress({loaded:e.loaded})}else{var r=this._fullRequestReader
null!=r&&r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}}},{key:"_onProgressiveDone",value:function _onProgressiveDone(){this._fullRequestReader&&this._fullRequestReader.progressiveDone(),this._progressiveDone=!0}},{key:"_removeRangeReader",value:function _removeRangeReader(e){var t=this._rangeReaders.indexOf(e)
t>=0&&this._rangeReaders.splice(t,1)}},{key:"getFullReader",value:function getFullReader(){(0,n.assert)(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.")
var e=this._queuedChunks
return this._queuedChunks=null,new i(this,e,this._progressiveDone,this._contentDispositionFilename)}},{key:"getRangeReader",value:function getRangeReader(e,t){if(t<=this._progressiveDataLength)return null
var r=new s(this,e,t)
return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(r),r}},{key:"cancelAllRequests",value:function cancelAllRequests(e){this._fullRequestReader&&this._fullRequestReader.cancel(e)
var t,r=_createForOfIteratorHelper(this._rangeReaders.slice(0))
try{for(r.s();!(t=r.n()).done;){t.value.cancel(e)}}catch(e){r.e(e)}finally{r.f()}this._pdfDataRangeTransport.abort()}}])}()
t.PDFDataTransportStream=o
var i=function(){return _createClass(function PDFDataTransportStreamReader(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
_classCallCheck(this,PDFDataTransportStreamReader),this._stream=e,this._done=r||!1,this._filename=(0,a.isPdfFile)(n)?n:null,this._queuedChunks=t||[],this._loaded=0
var o,i=_createForOfIteratorHelper(this._queuedChunks)
try{for(i.s();!(o=i.n()).done;){var s=o.value
this._loaded+=s.byteLength}}catch(e){i.e(e)}finally{i.f()}this._requests=[],this._headersReady=Promise.resolve(),e._fullRequestReader=this,this.onProgress=null},[{key:"_enqueue",value:function _enqueue(e){if(!this._done){if(this._requests.length>0)this._requests.shift().resolve({value:e,done:!1})
else this._queuedChunks.push(e)
this._loaded+=e.byteLength}}},{key:"headersReady",get:function get(){return this._headersReady}},{key:"filename",get:function get(){return this._filename}},{key:"isRangeSupported",get:function get(){return this._stream._isRangeSupported}},{key:"isStreamingSupported",get:function get(){return this._stream._isStreamingSupported}},{key:"contentLength",get:function get(){return this._stream._contentLength}},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee11(){var e,t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:if(!(this._queuedChunks.length>0)){r.n=1
break}return e=this._queuedChunks.shift(),r.a(2,{value:e,done:!1})
case 1:if(!this._done){r.n=2
break}return r.a(2,{value:void 0,done:!0})
case 2:return t=(0,n.createPromiseCapability)(),this._requests.push(t),r.a(2,t.promise)}},_callee11,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"cancel",value:function cancel(e){this._done=!0
var t,r=_createForOfIteratorHelper(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(e){r.e(e)}finally{r.f()}this._requests.length=0}},{key:"progressiveDone",value:function progressiveDone(){this._done||(this._done=!0)}}])}(),s=function(){return _createClass(function PDFDataTransportStreamRangeReader(e,t,r){_classCallCheck(this,PDFDataTransportStreamRangeReader),this._stream=e,this._begin=t,this._end=r,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null},[{key:"_enqueue",value:function _enqueue(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e
else{this._requests.shift().resolve({value:e,done:!1})
var t,r=_createForOfIteratorHelper(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(e){r.e(e)}finally{r.f()}this._requests.length=0}this._done=!0,this._stream._removeRangeReader(this)}}},{key:"isStreamingSupported",get:function get(){return!1}},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee12(){var e,t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:if(!this._queuedChunk){r.n=1
break}return e=this._queuedChunk,this._queuedChunk=null,r.a(2,{value:e,done:!1})
case 1:if(!this._done){r.n=2
break}return r.a(2,{value:void 0,done:!0})
case 2:return t=(0,n.createPromiseCapability)(),this._requests.push(t),r.a(2,t.promise)}},_callee12,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"cancel",value:function cancel(e){this._done=!0
var t,r=_createForOfIteratorHelper(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(e){r.e(e)}finally{r.f()}this._requests.length=0,this._stream._removeRangeReader(this)}}])}()},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.XfaText=void 0
var r=function(){function XfaText(){_classCallCheck(this,XfaText)}return _createClass(XfaText,null,[{key:"textContent",value:function textContent(e){var t=[],r={items:t,styles:Object.create(null)}
return function walk(e){var r
if(e){var n=null,a=e.name
if("#text"===a)n=e.value
else{if(!XfaText.shouldBuildText(a))return
null!=e&&null!==(r=e.attributes)&&void 0!==r&&r.textContent?n=e.attributes.textContent:e.value&&(n=e.value)}if(null!==n&&t.push({str:n}),e.children){var o,i=_createForOfIteratorHelper(e.children)
try{for(i.s();!(o=i.n()).done;)walk(o.value)}catch(e){i.e(e)}finally{i.f()}}}}(e),r}},{key:"shouldBuildText",value:function shouldBuildText(e){return!("textarea"===e||"input"===e||"option"===e||"select"===e)}}])}()
t.XfaText=r},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.NodeStandardFontDataFactory=t.NodeCanvasFactory=t.NodeCMapReaderFactory=void 0
var n=r(9),a=function fetchData(e){return new Promise(function(t,r){__webpack_require__(1).readFile(e,function(e,n){!e&&n?t(new Uint8Array(n)):r(new Error(e))})})},o=function(e){function NodeCanvasFactory(){return _classCallCheck(this,NodeCanvasFactory),_callSuper(this,NodeCanvasFactory,arguments)}return _inherits(NodeCanvasFactory,n.BaseCanvasFactory),_createClass(NodeCanvasFactory,[{key:"_createCanvas",value:function _createCanvas(e,t){return __webpack_require__(2).createCanvas(e,t)}}])}()
t.NodeCanvasFactory=o
var i=function(e){function NodeCMapReaderFactory(){return _classCallCheck(this,NodeCMapReaderFactory),_callSuper(this,NodeCMapReaderFactory,arguments)}return _inherits(NodeCMapReaderFactory,n.BaseCMapReaderFactory),_createClass(NodeCMapReaderFactory,[{key:"_fetchData",value:function _fetchData(e,t){return a(e).then(function(e){return{cMapData:e,compressionType:t}})}}])}()
t.NodeCMapReaderFactory=i
var s=function(e){function NodeStandardFontDataFactory(){return _classCallCheck(this,NodeStandardFontDataFactory),_callSuper(this,NodeStandardFontDataFactory,arguments)}return _inherits(NodeStandardFontDataFactory,n.BaseStandardFontDataFactory),_createClass(NodeStandardFontDataFactory,[{key:"_fetchData",value:function _fetchData(e){return a(e)}}])}()
t.NodeStandardFontDataFactory=s},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationEditorLayer=void 0
var n=r(7),a=r(1),o=r(23),i=r(24),s=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,v=new WeakSet,m=function(){return _createClass(function AnnotationEditorLayer(e){_classCallCheck(this,AnnotationEditorLayer),_classPrivateMethodInitSpec(this,v),_classPrivateFieldInitSpec(this,s,void 0),_classPrivateFieldInitSpec(this,l,!1),_classPrivateFieldInitSpec(this,c,this.pointerup.bind(this)),_classPrivateFieldInitSpec(this,u,this.pointerdown.bind(this)),_classPrivateFieldInitSpec(this,d,new Map),_classPrivateFieldInitSpec(this,h,!1),_classPrivateFieldInitSpec(this,p,!1),_classPrivateFieldInitSpec(this,f,void 0),AnnotationEditorLayer._initialized||(AnnotationEditorLayer._initialized=!0,o.FreeTextEditor.initialize(e.l10n),i.InkEditor.initialize(e.l10n),e.uiManager.registerEditorTypes([o.FreeTextEditor,i.InkEditor])),_classPrivateFieldSet(f,this,e.uiManager),this.annotationStorage=e.annotationStorage,this.pageIndex=e.pageIndex,this.div=e.div,_classPrivateFieldSet(s,this,e.accessibilityManager),_classPrivateFieldGet(f,this).addLayer(this)},[{key:"updateToolbar",value:function updateToolbar(e){_classPrivateFieldGet(f,this).updateToolbar(e)}},{key:"updateMode",value:function updateMode(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_classPrivateFieldGet(f,this).getMode()
_assertClassBrand(v,this,_cleanup).call(this),e===a.AnnotationEditorType.INK?(this.addInkEditorIfNeeded(!1),this.disableClick()):this.enableClick(),_classPrivateFieldGet(f,this).unselectAll()}},{key:"addInkEditorIfNeeded",value:function addInkEditorIfNeeded(e){if(e||_classPrivateFieldGet(f,this).getMode()===a.AnnotationEditorType.INK){if(!e){var t,r=_createForOfIteratorHelper(_classPrivateFieldGet(d,this).values())
try{for(r.s();!(t=r.n()).done;){var n=t.value
if(n.isEmpty())return void n.setInBackground()}}catch(e){r.e(e)}finally{r.f()}}_assertClassBrand(v,this,_createAndAddNewEditor).call(this,{offsetX:0,offsetY:0}).setInBackground()}}},{key:"setEditingState",value:function setEditingState(e){_classPrivateFieldGet(f,this).setEditingState(e)}},{key:"addCommands",value:function addCommands(e){_classPrivateFieldGet(f,this).addCommands(e)}},{key:"enable",value:function enable(){this.div.style.pointerEvents="auto"
var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(d,this).values())
try{for(t.s();!(e=t.n()).done;){e.value.enableEditing()}}catch(e){t.e(e)}finally{t.f()}}},{key:"disable",value:function disable(){this.div.style.pointerEvents="none"
var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(d,this).values())
try{for(t.s();!(e=t.n()).done;){e.value.disableEditing()}}catch(e){t.e(e)}finally{t.f()}}},{key:"setActiveEditor",value:function setActiveEditor(e){_classPrivateFieldGet(f,this).getActive()!==e&&_classPrivateFieldGet(f,this).setActiveEditor(e)}},{key:"enableClick",value:function enableClick(){this.div.addEventListener("pointerdown",_classPrivateFieldGet(u,this)),this.div.addEventListener("pointerup",_classPrivateFieldGet(c,this))}},{key:"disableClick",value:function disableClick(){this.div.removeEventListener("pointerdown",_classPrivateFieldGet(u,this)),this.div.removeEventListener("pointerup",_classPrivateFieldGet(c,this))}},{key:"attach",value:function attach(e){_classPrivateFieldGet(d,this).set(e.id,e)}},{key:"detach",value:function detach(e){var t
_classPrivateFieldGet(d,this).delete(e.id),null===(t=_classPrivateFieldGet(s,this))||void 0===t||t.removePointerInTextLayer(e.contentDiv)}},{key:"remove",value:function remove(e){var t=this
_classPrivateFieldGet(f,this).removeEditor(e),this.detach(e),this.annotationStorage.remove(e.id),e.div.style.display="none",setTimeout(function(){e.div.style.display="",e.div.remove(),e.isAttachedToDOM=!1,document.activeElement===document.body&&_classPrivateFieldGet(f,t).focusMainContainer()},0),_classPrivateFieldGet(p,this)||this.addInkEditorIfNeeded(!1)}},{key:"add",value:function add(e){if(_assertClassBrand(v,this,_changeParent).call(this,e),_classPrivateFieldGet(f,this).addEditor(e),this.attach(e),!e.isAttachedToDOM){var t=e.render()
this.div.append(t),e.isAttachedToDOM=!0}this.moveEditorInDOM(e),e.onceAdded(),this.addToAnnotationStorage(e)}},{key:"moveEditorInDOM",value:function moveEditorInDOM(e){var t
null===(t=_classPrivateFieldGet(s,this))||void 0===t||t.moveElementInDOM(this.div,e.div,e.contentDiv,!0)}},{key:"addToAnnotationStorage",value:function addToAnnotationStorage(e){e.isEmpty()||this.annotationStorage.has(e.id)||this.annotationStorage.setValue(e.id,e)}},{key:"addOrRebuild",value:function addOrRebuild(e){e.needsToBeRebuilt()?e.rebuild():this.add(e)}},{key:"addANewEditor",value:function addANewEditor(e){var t=this
this.addCommands({cmd:function cmd(){t.addOrRebuild(e)},undo:function undo(){e.remove()},mustExec:!0})}},{key:"addUndoableEditor",value:function addUndoableEditor(e){var t=this
this.addCommands({cmd:function cmd(){t.addOrRebuild(e)},undo:function undo(){e.remove()},mustExec:!1})}},{key:"getNextId",value:function getNextId(){return _classPrivateFieldGet(f,this).getId()}},{key:"deserialize",value:function deserialize(e){switch(e.annotationType){case a.AnnotationEditorType.FREETEXT:return o.FreeTextEditor.deserialize(e,this)
case a.AnnotationEditorType.INK:return i.InkEditor.deserialize(e,this)}return null}},{key:"setSelected",value:function setSelected(e){_classPrivateFieldGet(f,this).setSelected(e)}},{key:"toggleSelected",value:function toggleSelected(e){_classPrivateFieldGet(f,this).toggleSelected(e)}},{key:"isSelected",value:function isSelected(e){return _classPrivateFieldGet(f,this).isSelected(e)}},{key:"unselect",value:function unselect(e){_classPrivateFieldGet(f,this).unselect(e)}},{key:"pointerup",value:function pointerup(e){var t=n.KeyboardManager.platform.isMac
0!==e.button||e.ctrlKey&&t||e.target===this.div&&_classPrivateFieldGet(h,this)&&(_classPrivateFieldSet(h,this,!1),_classPrivateFieldGet(l,this)?_assertClassBrand(v,this,_createAndAddNewEditor).call(this,e):_classPrivateFieldSet(l,this,!0))}},{key:"pointerdown",value:function pointerdown(e){var t=n.KeyboardManager.platform.isMac
if(!(0!==e.button||e.ctrlKey&&t)&&e.target===this.div){_classPrivateFieldSet(h,this,!0)
var r=_classPrivateFieldGet(f,this).getActive()
_classPrivateFieldSet(l,this,!r||r.isEmpty())}}},{key:"drop",value:function drop(e){var t=e.dataTransfer.getData("text/plain"),r=_classPrivateFieldGet(f,this).getEditor(t)
if(r){e.preventDefault(),e.dataTransfer.dropEffect="move",_assertClassBrand(v,this,_changeParent).call(this,r)
var n=this.div.getBoundingClientRect(),a=e.clientX-n.x,o=e.clientY-n.y
r.translate(a-r.startX,o-r.startY),this.moveEditorInDOM(r),r.div.focus()}}},{key:"dragover",value:function dragover(e){e.preventDefault()}},{key:"destroy",value:function destroy(){var e;(null===(e=_classPrivateFieldGet(f,this).getActive())||void 0===e?void 0:e.parent)===this&&_classPrivateFieldGet(f,this).setActiveEditor(null)
var t,r=_createForOfIteratorHelper(_classPrivateFieldGet(d,this).values())
try{for(r.s();!(t=r.n()).done;){var n,a=t.value
null===(n=_classPrivateFieldGet(s,this))||void 0===n||n.removePointerInTextLayer(a.contentDiv),a.isAttachedToDOM=!1,a.div.remove(),a.parent=null}}catch(e){r.e(e)}finally{r.f()}this.div=null,_classPrivateFieldGet(d,this).clear(),_classPrivateFieldGet(f,this).removeLayer(this)}},{key:"render",value:function render(e){this.viewport=e.viewport,(0,n.bindEvents)(this,this.div,["dragover","drop"]),this.setDimensions()
var t,r=_createForOfIteratorHelper(_classPrivateFieldGet(f,this).getEditors(this.pageIndex))
try{for(r.s();!(t=r.n()).done;){var a=t.value
this.add(a)}}catch(e){r.e(e)}finally{r.f()}this.updateMode()}},{key:"update",value:function update(e){this.viewport=e.viewport,this.setDimensions(),this.updateMode()}},{key:"scaleFactor",get:function get(){return this.viewport.scale}},{key:"pageDimensions",get:function get(){var e=_slicedToArray(this.viewport.viewBox,4),t=e[0],r=e[1]
return[e[2]-t,e[3]-r]}},{key:"viewportBaseDimensions",get:function get(){var e=this.viewport,t=e.width,r=e.height
return e.rotation%180==0?[t,r]:[r,t]}},{key:"setDimensions",value:function setDimensions(){var e=this.viewport,t=e.width,r=e.height,n=e.rotation,a=n%180!=0,o=Math.floor(t)+"px",i=Math.floor(r)+"px"
this.div.style.width=a?i:o,this.div.style.height=a?o:i,this.div.setAttribute("data-main-rotation",n)}}])}()
function _changeParent(e){var t
e.parent!==this&&(this.attach(e),e.pageIndex=this.pageIndex,null===(t=e.parent)||void 0===t||t.detach(e),e.parent=this,e.div&&e.isAttachedToDOM&&(e.div.remove(),this.div.append(e.div)))}function _createNewEditor(e){switch(_classPrivateFieldGet(f,this).getMode()){case a.AnnotationEditorType.FREETEXT:return new o.FreeTextEditor(e)
case a.AnnotationEditorType.INK:return new i.InkEditor(e)}return null}function _createAndAddNewEditor(e){var t=this.getNextId(),r=_assertClassBrand(v,this,_createNewEditor).call(this,{parent:this,id:t,x:e.offsetX,y:e.offsetY})
return r&&this.add(r),r}function _cleanup(){_classPrivateFieldSet(p,this,!0)
var e,t=_createForOfIteratorHelper(_classPrivateFieldGet(d,this).values())
try{for(t.s();!(e=t.n()).done;){var r=e.value
r.isEmpty()&&r.remove()}}catch(e){t.e(e)}finally{t.f()}_classPrivateFieldSet(p,this,!1)}_defineProperty(m,"_initialized",!1),t.AnnotationEditorLayer=m},function(e,t,r){var n
Object.defineProperty(t,"__esModule",{value:!0}),t.FreeTextEditor=void 0
var a=r(1),o=r(7),i=r(6),s=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakSet,v=function(e){function FreeTextEditor(e){var t
return _classCallCheck(this,FreeTextEditor),_classPrivateMethodInitSpec(t=_callSuper(this,FreeTextEditor,[_objectSpread(_objectSpread({},e),{},{name:"freeTextEditor"})]),f),_classPrivateFieldInitSpec(t,s,t.editorDivBlur.bind(t)),_classPrivateFieldInitSpec(t,l,t.editorDivFocus.bind(t)),_classPrivateFieldInitSpec(t,c,t.editorDivKeydown.bind(t)),_classPrivateFieldInitSpec(t,u,void 0),_classPrivateFieldInitSpec(t,d,""),_classPrivateFieldInitSpec(t,h,!1),_classPrivateFieldInitSpec(t,p,void 0),_classPrivateFieldSet(u,t,e.color||FreeTextEditor._defaultColor||i.AnnotationEditor._defaultLineColor),_classPrivateFieldSet(p,t,e.fontSize||FreeTextEditor._defaultFontSize),t}return _inherits(FreeTextEditor,i.AnnotationEditor),_createClass(FreeTextEditor,[{key:"updateParams",value:function updateParams(e,t){switch(e){case a.AnnotationEditorParamsType.FREETEXT_SIZE:_assertClassBrand(f,this,_updateFontSize).call(this,t)
break
case a.AnnotationEditorParamsType.FREETEXT_COLOR:_assertClassBrand(f,this,_updateColor).call(this,t)}}},{key:"propertiesToUpdate",get:function get(){return[[a.AnnotationEditorParamsType.FREETEXT_SIZE,_classPrivateFieldGet(p,this)],[a.AnnotationEditorParamsType.FREETEXT_COLOR,_classPrivateFieldGet(u,this)]]}},{key:"getInitialTranslation",value:function getInitialTranslation(){return[-FreeTextEditor._internalPadding*this.parent.scaleFactor,-(FreeTextEditor._internalPadding+_classPrivateFieldGet(p,this))*this.parent.scaleFactor]}},{key:"rebuild",value:function rebuild(){_superPropGet(FreeTextEditor,"rebuild",this,3)([]),null!==this.div&&(this.isAttachedToDOM||this.parent.add(this))}},{key:"enableEditMode",value:function enableEditMode(){this.isInEditMode()||(this.parent.setEditingState(!1),this.parent.updateToolbar(a.AnnotationEditorType.FREETEXT),_superPropGet(FreeTextEditor,"enableEditMode",this,3)([]),this.enableEditing(),this.overlayDiv.classList.remove("enabled"),this.editorDiv.contentEditable=!0,this.div.draggable=!1,this.editorDiv.addEventListener("keydown",_classPrivateFieldGet(c,this)),this.editorDiv.addEventListener("focus",_classPrivateFieldGet(l,this)),this.editorDiv.addEventListener("blur",_classPrivateFieldGet(s,this)))}},{key:"disableEditMode",value:function disableEditMode(){this.isInEditMode()&&(this.parent.setEditingState(!0),_superPropGet(FreeTextEditor,"disableEditMode",this,3)([]),this.disableEditing(),this.overlayDiv.classList.add("enabled"),this.editorDiv.contentEditable=!1,this.div.draggable=!0,this.editorDiv.removeEventListener("keydown",_classPrivateFieldGet(c,this)),this.editorDiv.removeEventListener("focus",_classPrivateFieldGet(l,this)),this.editorDiv.removeEventListener("blur",_classPrivateFieldGet(s,this)),this.div.focus(),this.isEditing=!1)}},{key:"focusin",value:function focusin(e){_superPropGet(FreeTextEditor,"focusin",this,3)([e]),e.target!==this.editorDiv&&this.editorDiv.focus()}},{key:"onceAdded",value:function onceAdded(){this.width||(this.enableEditMode(),this.editorDiv.focus())}},{key:"isEmpty",value:function isEmpty(){return!this.editorDiv||""===this.editorDiv.innerText.trim()}},{key:"remove",value:function remove(){this.isEditing=!1,this.parent.setEditingState(!0),_superPropGet(FreeTextEditor,"remove",this,3)([])}},{key:"commit",value:function commit(){_superPropGet(FreeTextEditor,"commit",this,3)([]),_classPrivateFieldGet(h,this)||(_classPrivateFieldSet(h,this,!0),this.parent.addUndoableEditor(this)),this.disableEditMode(),_classPrivateFieldSet(d,this,_assertClassBrand(f,this,_extractText).call(this).trimEnd()),_assertClassBrand(f,this,_setEditorDimensions).call(this)}},{key:"shouldGetKeyboardEvents",value:function shouldGetKeyboardEvents(){return this.isInEditMode()}},{key:"dblclick",value:function dblclick(e){this.enableEditMode(),this.editorDiv.focus()}},{key:"keydown",value:function keydown(e){e.target===this.div&&"Enter"===e.key&&(this.enableEditMode(),this.editorDiv.focus())}},{key:"editorDivKeydown",value:function editorDivKeydown(e){FreeTextEditor._keyboardManager.exec(this,e)}},{key:"editorDivFocus",value:function editorDivFocus(e){this.isEditing=!0}},{key:"editorDivBlur",value:function editorDivBlur(e){this.isEditing=!1}},{key:"disableEditing",value:function disableEditing(){this.editorDiv.setAttribute("role","comment"),this.editorDiv.removeAttribute("aria-multiline")}},{key:"enableEditing",value:function enableEditing(){this.editorDiv.setAttribute("role","textbox"),this.editorDiv.setAttribute("aria-multiline",!0)}},{key:"render",value:function render(){var e,t,r=this
if(this.div)return this.div
this.width&&(e=this.x,t=this.y),_superPropGet(FreeTextEditor,"render",this,3)([]),this.editorDiv=document.createElement("div"),this.editorDiv.className="internal",this.editorDiv.setAttribute("id","".concat(this.id,"-editor")),this.enableEditing(),FreeTextEditor._l10nPromise.get("editor_free_text_aria_label").then(function(e){var t
return null===(t=r.editorDiv)||void 0===t?void 0:t.setAttribute("aria-label",e)}),FreeTextEditor._l10nPromise.get("free_text_default_content").then(function(e){var t
return null===(t=r.editorDiv)||void 0===t?void 0:t.setAttribute("default-content",e)}),this.editorDiv.contentEditable=!0
var n=this.editorDiv.style
if(n.fontSize="calc(".concat(_classPrivateFieldGet(p,this),"px * var(--scale-factor))"),n.color=_classPrivateFieldGet(u,this),this.div.append(this.editorDiv),this.overlayDiv=document.createElement("div"),this.overlayDiv.classList.add("overlay","enabled"),this.div.append(this.overlayDiv),(0,o.bindEvents)(this,this.div,["dblclick","keydown"]),this.width){var a=_slicedToArray(this.parent.viewportBaseDimensions,2),i=a[0],s=a[1]
this.setAt(e*i,t*s,this.width*i,this.height*s)
var l,c=_createForOfIteratorHelper(_classPrivateFieldGet(d,this).split("\n"))
try{for(c.s();!(l=c.n()).done;){var h=l.value,f=document.createElement("div")
f.append(h?document.createTextNode(h):document.createElement("br")),this.editorDiv.append(f)}}catch(e){c.e(e)}finally{c.f()}this.div.draggable=!0,this.editorDiv.contentEditable=!1}else this.div.draggable=!1,this.editorDiv.contentEditable=!0
return this.div}},{key:"contentDiv",get:function get(){return this.editorDiv}},{key:"serialize",value:function serialize(){if(this.isEmpty())return null
var e=FreeTextEditor._internalPadding*this.parent.scaleFactor,t=this.getRect(e,e),r=i.AnnotationEditor._colorManager.convert(getComputedStyle(this.editorDiv).color)
return{annotationType:a.AnnotationEditorType.FREETEXT,color:r,fontSize:_classPrivateFieldGet(p,this),value:_classPrivateFieldGet(d,this),pageIndex:this.parent.pageIndex,rect:t,rotation:this.rotation}}}],[{key:"initialize",value:function initialize(e){this._l10nPromise=new Map(["free_text_default_content","editor_free_text_aria_label"].map(function(t){return[t,e.get(t)]}))
var t=getComputedStyle(document.documentElement)
this._internalPadding=parseFloat(t.getPropertyValue("--freetext-padding"))}},{key:"updateDefaultParams",value:function updateDefaultParams(e,t){switch(e){case a.AnnotationEditorParamsType.FREETEXT_SIZE:FreeTextEditor._defaultFontSize=t
break
case a.AnnotationEditorParamsType.FREETEXT_COLOR:FreeTextEditor._defaultColor=t}}},{key:"defaultPropertiesToUpdate",get:function get(){return[[a.AnnotationEditorParamsType.FREETEXT_SIZE,FreeTextEditor._defaultFontSize],[a.AnnotationEditorParamsType.FREETEXT_COLOR,FreeTextEditor._defaultColor||i.AnnotationEditor._defaultLineColor]]}},{key:"deserialize",value:function deserialize(e,t){var r,n=_superPropGet(FreeTextEditor,"deserialize",this,2)([e,t])
return _classPrivateFieldSet(p,n,e.fontSize),_classPrivateFieldSet(u,n,(r=a.Util).makeHexColor.apply(r,_toConsumableArray(e.color))),_classPrivateFieldSet(d,n,e.value),n}}])}()
function _updateFontSize(e){var t=this,r=function setFontsize(e){t.editorDiv.style.fontSize="calc(".concat(e,"px * var(--scale-factor))"),t.translate(0,-(e-_classPrivateFieldGet(p,t))*t.parent.scaleFactor),_classPrivateFieldSet(p,t,e),_assertClassBrand(f,t,_setEditorDimensions).call(t)},n=_classPrivateFieldGet(p,this)
this.parent.addCommands({cmd:function cmd(){r(e)},undo:function undo(){r(n)},mustExec:!0,type:a.AnnotationEditorParamsType.FREETEXT_SIZE,overwriteIfSameType:!0,keepUndo:!0})}function _updateColor(e){var t=this,r=_classPrivateFieldGet(u,this)
this.parent.addCommands({cmd:function cmd(){_classPrivateFieldSet(u,t,e),t.editorDiv.style.color=e},undo:function undo(){_classPrivateFieldSet(u,t,r),t.editorDiv.style.color=r},mustExec:!0,type:a.AnnotationEditorParamsType.FREETEXT_COLOR,overwriteIfSameType:!0,keepUndo:!0})}function _extractText(){var e=this.editorDiv.getElementsByTagName("div")
if(0===e.length)return this.editorDiv.innerText
for(var t=[],r=0,n=e.length;r<n;r++){var a=e[r].firstChild
"#text"===(null==a?void 0:a.nodeName)?t.push(a.data):t.push("")}return t.join("\n")}function _setEditorDimensions(){var e=_slicedToArray(this.parent.viewportBaseDimensions,2),t=e[0],r=e[1],n=this.div.getBoundingClientRect()
this.width=n.width/t,this.height=n.height/r}n=v,_defineProperty(v,"_freeTextDefaultContent",""),_defineProperty(v,"_l10nPromise",void 0),_defineProperty(v,"_internalPadding",0),_defineProperty(v,"_defaultColor",null),_defineProperty(v,"_defaultFontSize",10),_defineProperty(v,"_keyboardManager",new o.KeyboardManager([[["ctrl+Enter","mac+meta+Enter","Escape","mac+Escape"],n.prototype.commitOrRemove]])),_defineProperty(v,"_type","freetext"),t.FreeTextEditor=v},function(e,t,r){var n
Object.defineProperty(t,"__esModule",{value:!0}),t.InkEditor=void 0,Object.defineProperty(t,"fitCurve",{enumerable:!0,get:function get(){return i.fitCurve}})
var a=r(1),o=r(6),i=r(25),s=r(7),l=16,c=new WeakMap,u=new WeakMap,d=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,v=new WeakMap,m=new WeakMap,g=new WeakMap,_=new WeakMap,b=new WeakMap,y=new WeakMap,k=new WeakMap,S=new WeakMap,C=new WeakSet,P=function(e){function InkEditor(e){var t
return _classCallCheck(this,InkEditor),_classPrivateMethodInitSpec(t=_callSuper(this,InkEditor,[_objectSpread(_objectSpread({},e),{},{name:"inkEditor"})]),C),_classPrivateFieldInitSpec(t,c,0),_classPrivateFieldInitSpec(t,u,0),_classPrivateFieldInitSpec(t,d,0),_classPrivateFieldInitSpec(t,h,t.canvasPointermove.bind(t)),_classPrivateFieldInitSpec(t,p,t.canvasPointerleave.bind(t)),_classPrivateFieldInitSpec(t,f,t.canvasPointerup.bind(t)),_classPrivateFieldInitSpec(t,v,t.canvasPointerdown.bind(t)),_classPrivateFieldInitSpec(t,m,!1),_classPrivateFieldInitSpec(t,g,!1),_classPrivateFieldInitSpec(t,_,null),_classPrivateFieldInitSpec(t,b,null),_classPrivateFieldInitSpec(t,y,0),_classPrivateFieldInitSpec(t,k,0),_classPrivateFieldInitSpec(t,S,null),t.color=e.color||null,t.thickness=e.thickness||null,t.opacity=e.opacity||null,t.paths=[],t.bezierPath2D=[],t.currentPath=[],t.scaleFactor=1,t.translationX=t.translationY=0,t.x=0,t.y=0,t}return _inherits(InkEditor,o.AnnotationEditor),_createClass(InkEditor,[{key:"updateParams",value:function updateParams(e,t){switch(e){case a.AnnotationEditorParamsType.INK_THICKNESS:_assertClassBrand(C,this,_updateThickness).call(this,t)
break
case a.AnnotationEditorParamsType.INK_COLOR:_assertClassBrand(C,this,_updateColor2).call(this,t)
break
case a.AnnotationEditorParamsType.INK_OPACITY:_assertClassBrand(C,this,_updateOpacity).call(this,t)}}},{key:"propertiesToUpdate",get:function get(){var e
return[[a.AnnotationEditorParamsType.INK_THICKNESS,this.thickness||InkEditor._defaultThickness],[a.AnnotationEditorParamsType.INK_COLOR,this.color||InkEditor._defaultColor||o.AnnotationEditor._defaultLineColor],[a.AnnotationEditorParamsType.INK_OPACITY,Math.round(100*(null!==(e=this.opacity)&&void 0!==e?e:InkEditor._defaultOpacity))]]}},{key:"rebuild",value:function rebuild(){_superPropGet(InkEditor,"rebuild",this,3)([]),null!==this.div&&(this.canvas||(_assertClassBrand(C,this,_createCanvas2).call(this),_assertClassBrand(C,this,_createObserver).call(this)),this.isAttachedToDOM||(this.parent.add(this),_assertClassBrand(C,this,_setCanvasDims).call(this)),_assertClassBrand(C,this,_fitToContent).call(this))}},{key:"remove",value:function remove(){null!==this.canvas&&(this.isEmpty()||this.commit(),this.canvas.width=this.canvas.height=0,this.canvas.remove(),this.canvas=null,_classPrivateFieldGet(b,this).disconnect(),_classPrivateFieldSet(b,this,null),_superPropGet(InkEditor,"remove",this,3)([]))}},{key:"enableEditMode",value:function enableEditMode(){_classPrivateFieldGet(m,this)||null===this.canvas||(_superPropGet(InkEditor,"enableEditMode",this,3)([]),this.div.draggable=!1,this.canvas.addEventListener("pointerdown",_classPrivateFieldGet(v,this)),this.canvas.addEventListener("pointerup",_classPrivateFieldGet(f,this)))}},{key:"disableEditMode",value:function disableEditMode(){this.isInEditMode()&&null!==this.canvas&&(_superPropGet(InkEditor,"disableEditMode",this,3)([]),this.div.draggable=!this.isEmpty(),this.div.classList.remove("editing"),this.canvas.removeEventListener("pointerdown",_classPrivateFieldGet(v,this)),this.canvas.removeEventListener("pointerup",_classPrivateFieldGet(f,this)))}},{key:"onceAdded",value:function onceAdded(){this.div.draggable=!this.isEmpty()}},{key:"isEmpty",value:function isEmpty(){return 0===this.paths.length||1===this.paths.length&&0===this.paths[0].length}},{key:"commit",value:function commit(){_classPrivateFieldGet(m,this)||(_superPropGet(InkEditor,"commit",this,3)([]),this.isEditing=!1,this.disableEditMode(),this.setInForeground(),_classPrivateFieldSet(m,this,!0),this.div.classList.add("disabled"),_assertClassBrand(C,this,_fitToContent).call(this,!0),this.parent.addInkEditorIfNeeded(!0),this.parent.moveEditorInDOM(this),this.div.focus())}},{key:"focusin",value:function focusin(e){_superPropGet(InkEditor,"focusin",this,3)([e]),this.enableEditMode()}},{key:"canvasPointerdown",value:function canvasPointerdown(e){0===e.button&&this.isInEditMode()&&!_classPrivateFieldGet(m,this)&&(this.setInForeground(),"mouse"!==e.type&&this.div.focus(),e.stopPropagation(),this.canvas.addEventListener("pointerleave",_classPrivateFieldGet(p,this)),this.canvas.addEventListener("pointermove",_classPrivateFieldGet(h,this)),_assertClassBrand(C,this,_startDrawing).call(this,e.offsetX,e.offsetY))}},{key:"canvasPointermove",value:function canvasPointermove(e){e.stopPropagation(),_assertClassBrand(C,this,_draw).call(this,e.offsetX,e.offsetY)}},{key:"canvasPointerup",value:function canvasPointerup(e){0===e.button&&this.isInEditMode()&&0!==this.currentPath.length&&(e.stopPropagation(),_assertClassBrand(C,this,_endDrawing).call(this,e),this.setInBackground())}},{key:"canvasPointerleave",value:function canvasPointerleave(e){_assertClassBrand(C,this,_endDrawing).call(this,e),this.setInBackground()}},{key:"render",value:function render(){var e,t,r=this
if(this.div)return this.div
this.width&&(e=this.x,t=this.y),_superPropGet(InkEditor,"render",this,3)([]),InkEditor._l10nPromise.get("editor_ink_aria_label").then(function(e){var t
return null===(t=r.div)||void 0===t?void 0:t.setAttribute("aria-label",e)})
var n=_slicedToArray(_assertClassBrand(C,this,_getInitialBBox).call(this),4),a=n[0],o=n[1],i=n[2],s=n[3]
if(this.setAt(a,o,0,0),this.setDims(i,s),_assertClassBrand(C,this,_createCanvas2).call(this),this.width){var l=_slicedToArray(this.parent.viewportBaseDimensions,2),c=l[0],u=l[1]
this.setAt(e*c,t*u,this.width*c,this.height*u),_classPrivateFieldSet(g,this,!0),_assertClassBrand(C,this,_setCanvasDims).call(this),this.setDims(this.width*c,this.height*u),_assertClassBrand(C,this,_redraw).call(this),_assertClassBrand(C,this,_setMinDims).call(this),this.div.classList.add("disabled")}else this.div.classList.add("editing"),this.enableEditMode()
return _assertClassBrand(C,this,_createObserver).call(this),this.div}},{key:"setDimensions",value:function setDimensions(e,t){var r=Math.round(e),n=Math.round(t)
if(_classPrivateFieldGet(y,this)!==r||_classPrivateFieldGet(k,this)!==n){_classPrivateFieldSet(y,this,r),_classPrivateFieldSet(k,this,n),this.canvas.style.visibility="hidden",_classPrivateFieldGet(c,this)&&Math.abs(_classPrivateFieldGet(c,this)-e/t)>.01&&(t=Math.ceil(e/_classPrivateFieldGet(c,this)),this.setDims(e,t))
var a=_slicedToArray(this.parent.viewportBaseDimensions,2),o=a[0],i=a[1]
this.width=e/o,this.height=t/i,_classPrivateFieldGet(m,this)&&_assertClassBrand(C,this,_setScaleFactor).call(this,e,t),_assertClassBrand(C,this,_setCanvasDims).call(this),_assertClassBrand(C,this,_redraw).call(this),this.canvas.style.visibility="visible"}}},{key:"serialize",value:function serialize(){if(this.isEmpty())return null
var e=this.getRect(0,0),t=this.rotation%180==0?e[3]-e[1]:e[2]-e[0],r=o.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle)
return{annotationType:a.AnnotationEditorType.INK,color:r,thickness:this.thickness,opacity:this.opacity,paths:_assertClassBrand(C,this,_serializePaths).call(this,this.scaleFactor/this.parent.scaleFactor,this.translationX,this.translationY,t),pageIndex:this.parent.pageIndex,rect:e,rotation:this.rotation}}}],[{key:"initialize",value:function initialize(e){this._l10nPromise=new Map(["editor_ink_canvas_aria_label","editor_ink_aria_label"].map(function(t){return[t,e.get(t)]}))}},{key:"updateDefaultParams",value:function updateDefaultParams(e,t){switch(e){case a.AnnotationEditorParamsType.INK_THICKNESS:InkEditor._defaultThickness=t
break
case a.AnnotationEditorParamsType.INK_COLOR:InkEditor._defaultColor=t
break
case a.AnnotationEditorParamsType.INK_OPACITY:InkEditor._defaultOpacity=t/100}}},{key:"defaultPropertiesToUpdate",get:function get(){return[[a.AnnotationEditorParamsType.INK_THICKNESS,InkEditor._defaultThickness],[a.AnnotationEditorParamsType.INK_COLOR,InkEditor._defaultColor||o.AnnotationEditor._defaultLineColor],[a.AnnotationEditorParamsType.INK_OPACITY,Math.round(100*InkEditor._defaultOpacity)]]}},{key:"deserialize",value:function deserialize(e,t){var r,n=_superPropGet(InkEditor,"deserialize",this,2)([e,t])
n.thickness=e.thickness,n.color=(r=a.Util).makeHexColor.apply(r,_toConsumableArray(e.color)),n.opacity=e.opacity
var o=_slicedToArray(t.pageDimensions,2),i=o[0],s=o[1],h=n.width*i,p=n.height*s,f=t.scaleFactor,v=e.thickness/2
_classPrivateFieldSet(c,n,h/p),_classPrivateFieldSet(m,n,!0),_classPrivateFieldSet(y,n,Math.round(h)),_classPrivateFieldSet(k,n,Math.round(p))
var g,_=_createForOfIteratorHelper(e.paths)
try{for(_.s();!(g=_.n()).done;){var b=g.value.bezier,S=[]
n.paths.push(S)
for(var P=f*(b[0]-v),E=f*(p-b[1]-v),x=2,w=b.length;x<w;x+=6){var A=f*(b[x]-v),F=f*(p-b[x+1]-v),M=f*(b[x+2]-v),T=f*(p-b[x+3]-v),R=f*(b[x+4]-v),I=f*(p-b[x+5]-v)
S.push([[P,E],[A,F],[M,T],[R,I]]),P=R,E=I}var O=_assertClassBrand(InkEditor,this,_buildPath2D).call(this,S)
n.bezierPath2D.push(O)}}catch(e){_.e(e)}finally{_.f()}var D=_assertClassBrand(C,n,_getBbox).call(n)
return _classPrivateFieldSet(d,n,Math.max(l,D[2]-D[0])),_classPrivateFieldSet(u,n,Math.max(l,D[3]-D[1])),_assertClassBrand(C,n,_setScaleFactor).call(n,h,p),n}}])}()
function _updateThickness(e){var t=this,r=this.thickness
this.parent.addCommands({cmd:function cmd(){t.thickness=e,_assertClassBrand(C,t,_fitToContent).call(t)},undo:function undo(){t.thickness=r,_assertClassBrand(C,t,_fitToContent).call(t)},mustExec:!0,type:a.AnnotationEditorParamsType.INK_THICKNESS,overwriteIfSameType:!0,keepUndo:!0})}function _updateColor2(e){var t=this,r=this.color
this.parent.addCommands({cmd:function cmd(){t.color=e,_assertClassBrand(C,t,_redraw).call(t)},undo:function undo(){t.color=r,_assertClassBrand(C,t,_redraw).call(t)},mustExec:!0,type:a.AnnotationEditorParamsType.INK_COLOR,overwriteIfSameType:!0,keepUndo:!0})}function _updateOpacity(e){var t=this
e/=100
var r=this.opacity
this.parent.addCommands({cmd:function cmd(){t.opacity=e,_assertClassBrand(C,t,_redraw).call(t)},undo:function undo(){t.opacity=r,_assertClassBrand(C,t,_redraw).call(t)},mustExec:!0,type:a.AnnotationEditorParamsType.INK_OPACITY,overwriteIfSameType:!0,keepUndo:!0})}function _getInitialBBox(){var e=this.parent.viewport,t=e.width,r=e.height
switch(e.rotation){case 90:return[0,t,t,r]
case 180:return[t,r,t,r]
case 270:return[r,0,t,r]
default:return[0,0,t,r]}}function _setStroke(){this.ctx.lineWidth=this.thickness*this.parent.scaleFactor/this.scaleFactor,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.miterLimit=10,this.ctx.strokeStyle="".concat(this.color).concat((0,s.opacityToHex)(this.opacity))}function _startDrawing(e,t){var r,a=this;(this.isEditing=!0,_classPrivateFieldGet(g,this))||(_classPrivateFieldSet(g,this,!0),_assertClassBrand(C,this,_setCanvasDims).call(this),this.thickness||(this.thickness=n._defaultThickness),this.color||(this.color=n._defaultColor||o.AnnotationEditor._defaultLineColor),null!==(r=this.opacity)&&void 0!==r||(this.opacity=n._defaultOpacity))
this.currentPath.push([e,t]),_classPrivateFieldSet(_,this,null),_assertClassBrand(C,this,_setStroke).call(this),this.ctx.beginPath(),this.ctx.moveTo(e,t),_classPrivateFieldSet(S,this,function(){if(_classPrivateFieldGet(S,a)){var e
if(_classPrivateFieldGet(_,a))a.isEmpty()?(a.ctx.setTransform(1,0,0,1,0,0),a.ctx.clearRect(0,0,a.canvas.width,a.canvas.height)):_assertClassBrand(C,a,_redraw).call(a),(e=a.ctx).lineTo.apply(e,_toConsumableArray(_classPrivateFieldGet(_,a))),_classPrivateFieldSet(_,a,null),a.ctx.stroke()
window.requestAnimationFrame(_classPrivateFieldGet(S,a))}}),window.requestAnimationFrame(_classPrivateFieldGet(S,this))}function _draw(e,t){var r=_slicedToArray(this.currentPath.at(-1),2),n=r[0],a=r[1]
e===n&&t===a||(this.currentPath.push([e,t]),_classPrivateFieldSet(_,this,[e,t]))}function _stopDrawing(e,t){var r=this
this.ctx.closePath(),_classPrivateFieldSet(S,this,null),e=Math.min(Math.max(e,0),this.canvas.width),t=Math.min(Math.max(t,0),this.canvas.height)
var a,o=_slicedToArray(this.currentPath.at(-1),2),s=o[0],l=o[1]
if(e===s&&t===l||this.currentPath.push([e,t]),1!==this.currentPath.length)a=(0,i.fitCurve)(this.currentPath,30,null)
else{var c=[e,t]
a=[[c,c.slice(),c.slice(),c]]}var u=_buildPath2D.call(n,a)
this.currentPath.length=0
this.parent.addCommands({cmd:function cmd(){r.paths.push(a),r.bezierPath2D.push(u),r.rebuild()},undo:function undo(){r.paths.pop(),r.bezierPath2D.pop(),0===r.paths.length?r.remove():(r.canvas||(_assertClassBrand(C,r,_createCanvas2).call(r),_assertClassBrand(C,r,_createObserver).call(r)),_assertClassBrand(C,r,_fitToContent).call(r))},mustExec:!0})}function _redraw(){if(this.isEmpty())_assertClassBrand(C,this,_updateTransform).call(this)
else{_assertClassBrand(C,this,_setStroke).call(this)
var e=this.canvas,t=this.ctx
t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.width,e.height),_assertClassBrand(C,this,_updateTransform).call(this)
var r,n=_createForOfIteratorHelper(this.bezierPath2D)
try{for(n.s();!(r=n.n()).done;){var a=r.value
t.stroke(a)}}catch(e){n.e(e)}finally{n.f()}}}function _endDrawing(e){_assertClassBrand(C,this,_stopDrawing).call(this,e.offsetX,e.offsetY),this.canvas.removeEventListener("pointerleave",_classPrivateFieldGet(p,this)),this.canvas.removeEventListener("pointermove",_classPrivateFieldGet(h,this)),this.parent.addToAnnotationStorage(this)}function _createCanvas2(){var e=this
this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=0,this.canvas.className="inkEditorCanvas",n._l10nPromise.get("editor_ink_canvas_aria_label").then(function(t){var r
return null===(r=e.canvas)||void 0===r?void 0:r.setAttribute("aria-label",t)}),this.div.append(this.canvas),this.ctx=this.canvas.getContext("2d")}function _createObserver(){var e=this
_classPrivateFieldSet(b,this,new ResizeObserver(function(t){var r=t[0].contentRect
r.width&&r.height&&e.setDimensions(r.width,r.height)})),_classPrivateFieldGet(b,this).observe(this.div)}function _setCanvasDims(){if(_classPrivateFieldGet(g,this)){var e=_slicedToArray(this.parent.viewportBaseDimensions,2),t=e[0],r=e[1]
this.canvas.width=Math.ceil(this.width*t),this.canvas.height=Math.ceil(this.height*r),_assertClassBrand(C,this,_updateTransform).call(this)}}function _setScaleFactor(e,t){var r=_assertClassBrand(C,this,_getPadding).call(this),n=(e-r)/_classPrivateFieldGet(d,this),a=(t-r)/_classPrivateFieldGet(u,this)
this.scaleFactor=Math.min(n,a)}function _updateTransform(){var e=_assertClassBrand(C,this,_getPadding).call(this)/2
this.ctx.setTransform(this.scaleFactor,0,0,this.scaleFactor,this.translationX*this.scaleFactor+e,this.translationY*this.scaleFactor+e)}function _buildPath2D(e){for(var t=new Path2D,r=0,n=e.length;r<n;r++){var a=_slicedToArray(e[r],4),o=a[0],i=a[1],s=a[2],l=a[3]
0===r&&t.moveTo.apply(t,_toConsumableArray(o)),t.bezierCurveTo(i[0],i[1],s[0],s[1],l[0],l[1])}return t}function _serializePaths(e,t,r,n){var a,o,i,s=[],l=this.thickness/2,c=_createForOfIteratorHelper(this.paths)
try{for(c.s();!(i=c.n()).done;){var u=i.value
a=[],o=[]
for(var d=0,h=u.length;d<h;d++){var p=_slicedToArray(u[d],4),f=p[0],v=p[1],m=p[2],g=p[3],_=e*(f[0]+t)+l,b=n-e*(f[1]+r)-l,y=e*(v[0]+t)+l,k=n-e*(v[1]+r)-l,S=e*(m[0]+t)+l,P=n-e*(m[1]+r)-l,E=e*(g[0]+t)+l,x=n-e*(g[1]+r)-l
0===d&&(a.push(_,b),o.push(_,b)),a.push(y,k,S,P,E,x),_assertClassBrand(C,this,_extractPointsOnBezier).call(this,_,b,y,k,S,P,E,x,4,o)}s.push({bezier:a,points:o})}}catch(e){c.e(e)}finally{c.f()}return s}function _extractPointsOnBezier(e,t,r,n,a,o,i,s,l,c){if(_assertClassBrand(C,this,_isAlmostFlat).call(this,e,t,r,n,a,o,i,s))c.push(i,s)
else{for(var u=1;u<l-1;u++){var d=u/l,h=1-d,p=d*e+h*r,f=d*t+h*n,v=d*r+h*a,m=d*n+h*o
p=d*(p=d*p+h*v)+h*(v=d*v+h*(d*a+h*i)),f=d*(f=d*f+h*m)+h*(m=d*m+h*(d*o+h*s)),c.push(p,f)}c.push(i,s)}}function _isAlmostFlat(e,t,r,n,a,o,i,s){var l=Math.pow(3*r-2*e-i,2),c=Math.pow(3*n-2*t-s,2),u=Math.pow(3*a-e-2*i,2),d=Math.pow(3*o-t-2*s,2)
return Math.max(l,u)+Math.max(c,d)<=10}function _getBbox(){var e,t=1/0,r=-1/0,n=1/0,o=-1/0,i=_createForOfIteratorHelper(this.paths)
try{for(i.s();!(e=i.n()).done;){var s,l=_createForOfIteratorHelper(e.value)
try{for(l.s();!(s=l.n()).done;){var c,u=_slicedToArray(s.value,4),d=u[0],h=u[1],p=u[2],f=u[3],v=(c=a.Util).bezierBoundingBox.apply(c,_toConsumableArray(d).concat(_toConsumableArray(h),_toConsumableArray(p),_toConsumableArray(f)))
t=Math.min(t,v[0]),n=Math.min(n,v[1]),r=Math.max(r,v[2]),o=Math.max(o,v[3])}}catch(e){l.e(e)}finally{l.f()}}}catch(e){i.e(e)}finally{i.f()}return[t,n,r,o]}function _getPadding(){return _classPrivateFieldGet(m,this)?Math.ceil(this.thickness*this.parent.scaleFactor):0}function _fitToContent(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.isEmpty())if(_classPrivateFieldGet(m,this)){var t=_assertClassBrand(C,this,_getBbox).call(this),r=_assertClassBrand(C,this,_getPadding).call(this)
_classPrivateFieldSet(d,this,Math.max(l,t[2]-t[0])),_classPrivateFieldSet(u,this,Math.max(l,t[3]-t[1]))
var n=Math.ceil(r+_classPrivateFieldGet(d,this)*this.scaleFactor),a=Math.ceil(r+_classPrivateFieldGet(u,this)*this.scaleFactor),o=_slicedToArray(this.parent.viewportBaseDimensions,2),i=o[0],s=o[1]
this.width=n/i,this.height=a/s,_classPrivateFieldSet(c,this,n/a),_assertClassBrand(C,this,_setMinDims).call(this)
var h=this.translationX,p=this.translationY
this.translationX=-t[0],this.translationY=-t[1],_assertClassBrand(C,this,_setCanvasDims).call(this),_assertClassBrand(C,this,_redraw).call(this),_classPrivateFieldSet(y,this,n),_classPrivateFieldSet(k,this,a),this.setDims(n,a)
var f=e?r/this.scaleFactor/2:0
this.translate(h-this.translationX-f,p-this.translationY-f)}else _assertClassBrand(C,this,_redraw).call(this)}function _setMinDims(){var e=this.div.style
_classPrivateFieldGet(c,this)>=1?(e.minHeight="".concat(l,"px"),e.minWidth="".concat(Math.round(_classPrivateFieldGet(c,this)*l),"px")):(e.minWidth="".concat(l,"px"),e.minHeight="".concat(Math.round(l/_classPrivateFieldGet(c,this)),"px"))}n=P,_defineProperty(P,"_defaultColor",null),_defineProperty(P,"_defaultOpacity",1),_defineProperty(P,"_defaultThickness",1),_defineProperty(P,"_l10nPromise",void 0),_defineProperty(P,"_type","ink"),t.InkEditor=P},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.fitCurve=void 0
var n=r(26)
t.fitCurve=n},function(e){function fitCubic(e,t,n,a,o){var i,s,l,c,u,d,h,p,f,v,m,g,_
if(2===e.length)return g=r.vectorLen(r.subtract(e[0],e[1]))/3,[i=[e[0],r.addArrays(e[0],r.mulItems(t,g)),r.addArrays(e[1],r.mulItems(n,g)),e[1]]]
s=function chordLengthParameterize(e){var t,n,a,o=[]
return e.forEach(function(e,i){t=i?n+r.vectorLen(r.subtract(e,a)):0,o.push(t),n=t,a=e}),o=o.map(function(e){return e/n})}(e)
var b=_slicedToArray(generateAndReport(e,s,s,t,n,o),3)
if(i=b[0],c=b[1],d=b[2],0===c||c<a)return[i]
if(c<a*a)for(l=s,u=c,h=d,_=0;_<20;_++){var y=_slicedToArray(generateAndReport(e,s,l=reparameterize(i,e,l),t,n,o),3)
if(i=y[0],c=y[1],d=y[2],c<a)return[i]
if(d===h){var k=c/u
if(k>.9999&&k<1.0001)break}u=c,h=d}if(m=[],(p=r.subtract(e[d-1],e[d+1])).every(function(e){return 0===e})){var S=[-(p=r.subtract(e[d-1],e[d]))[1],p[0]]
p[0]=S[0],p[1]=S[1]}return f=r.normalize(p),v=r.mulItems(f,-1),m=(m=m.concat(fitCubic(e.slice(0,d+1),t,f,a,o))).concat(fitCubic(e.slice(d),v,n,a,o))}function generateAndReport(e,a,o,i,s,l){var c,u,d,h=_slicedToArray(function computeMaxError(e,a,o){var i,s,l,c,u,d,h,p
s=0,l=Math.floor(e.length/2)
var f=t(a,10)
for(u=0,d=e.length;u<d;u++)h=e[u],p=find_t(a,o[u],f,10),c=r.subtract(n.q(a,p),h),(i=c[0]*c[0]+c[1]*c[1])>s&&(s=i,l=u)
return[s,l]}(e,c=function generateBezier(e,t,a,o){var i,s,l,c,u,d,h,p,f,v,m,g,_,b,y,k,S,C=e[0],P=e[e.length-1]
for(i=[C,null,null,P],s=r.zeros_Xx2x2(t.length),_=0,b=t.length;_<b;_++)k=t[_],S=1-k,(l=s[_])[0]=r.mulItems(a,3*k*(S*S)),l[1]=r.mulItems(o,3*S*(k*k))
for(c=[[0,0],[0,0]],u=[0,0],_=0,b=e.length;_<b;_++)k=t[_],l=s[_],c[0][0]+=r.dot(l[0],l[0]),c[0][1]+=r.dot(l[0],l[1]),c[1][0]+=r.dot(l[0],l[1]),c[1][1]+=r.dot(l[1],l[1]),y=r.subtract(e[_],n.q([C,C,P,P],k)),u[0]+=r.dot(l[0],y),u[1]+=r.dot(l[1],y)
d=c[0][0]*c[1][1]-c[1][0]*c[0][1],h=c[0][0]*u[1]-c[1][0]*u[0],p=u[0]*c[1][1]-u[1]*c[0][1],f=0===d?0:p/d,v=0===d?0:h/d,g=r.vectorLen(r.subtract(C,P)),f<(m=1e-6*g)||v<m?(i[1]=r.addArrays(C,r.mulItems(a,g/3)),i[2]=r.addArrays(P,r.mulItems(o,g/3))):(i[1]=r.addArrays(C,r.mulItems(a,f)),i[2]=r.addArrays(P,r.mulItems(o,v)))
return i}(e,o,i,s),a),2)
return u=h[0],d=h[1],l&&l({bez:c,points:e,params:a,maxErr:u,maxPoint:d}),[c,u,d]}function reparameterize(e,t,r){return r.map(function(r,n){return newtonRaphsonRootFind(e,t[n],r)})}function newtonRaphsonRootFind(e,t,a){var o=r.subtract(n.q(e,a),t),i=n.qprime(e,a),s=r.mulMatrix(o,i),l=r.sum(r.squareItems(i))+2*r.mulMatrix(o,n.qprimeprime(e,a))
return 0===l?a:a-s/l}var t=function mapTtoRelativeDistances(e,t){for(var a,o=[0],i=e[0],s=0,l=1;l<=t;l++)a=n.q(e,l/t),s+=r.vectorLen(r.subtract(a,i)),o.push(s),i=a
return o=o.map(function(e){return e/s})}
function find_t(e,t,r,n){if(t<0)return 0
if(t>1)return 1
for(var a,o,i,s,l=1;l<=n;l++)if(t<=r[l]){i=(l-1)/n,o=l/n,s=(t-(a=r[l-1]))/(r[l]-a)*(o-i)+i
break}return s}function createTangent(e,t){return r.normalize(r.subtract(e,t))}var r=function(){function maths(){_classCallCheck(this,maths)}return _createClass(maths,null,[{key:"zeros_Xx2x2",value:function zeros_Xx2x2(e){for(var t=[];e--;)t.push([0,0])
return t}},{key:"mulItems",value:function mulItems(e,t){return e.map(function(e){return e*t})}},{key:"mulMatrix",value:function mulMatrix(e,t){return e.reduce(function(e,r,n){return e+r*t[n]},0)}},{key:"subtract",value:function subtract(e,t){return e.map(function(e,r){return e-t[r]})}},{key:"addArrays",value:function addArrays(e,t){return e.map(function(e,r){return e+t[r]})}},{key:"addItems",value:function addItems(e,t){return e.map(function(e){return e+t})}},{key:"sum",value:function sum(e){return e.reduce(function(e,t){return e+t})}},{key:"dot",value:function dot(e,t){return maths.mulMatrix(e,t)}},{key:"vectorLen",value:function vectorLen(e){return Math.hypot.apply(Math,_toConsumableArray(e))}},{key:"divItems",value:function divItems(e,t){return e.map(function(e){return e/t})}},{key:"squareItems",value:function squareItems(e){return e.map(function(e){return e*e})}},{key:"normalize",value:function normalize(e){return this.divItems(e,this.vectorLen(e))}}])}(),n=function(){return _createClass(function bezier(){_classCallCheck(this,bezier)},null,[{key:"q",value:function q(e,t){var n=1-t,a=r.mulItems(e[0],n*n*n),o=r.mulItems(e[1],3*n*n*t),i=r.mulItems(e[2],3*n*t*t),s=r.mulItems(e[3],t*t*t)
return r.addArrays(r.addArrays(a,o),r.addArrays(i,s))}},{key:"qprime",value:function qprime(e,t){var n=1-t,a=r.mulItems(r.subtract(e[1],e[0]),3*n*n),o=r.mulItems(r.subtract(e[2],e[1]),6*n*t),i=r.mulItems(r.subtract(e[3],e[2]),3*t*t)
return r.addArrays(r.addArrays(a,o),i)}},{key:"qprimeprime",value:function qprimeprime(e,t){return r.addArrays(r.mulItems(r.addArrays(r.subtract(e[2],r.mulItems(e[1],2)),e[0]),6*(1-t)),r.mulItems(r.addArrays(r.subtract(e[3],r.mulItems(e[2],2)),e[1]),6*t))}}])}()
e.exports=function fitCurve(e,t,r){if(!Array.isArray(e))throw new TypeError("First argument should be an array")
if(e.forEach(function(t){if(!Array.isArray(t)||t.some(function(e){return"number"!=typeof e})||t.length!==e[0].length)throw Error("Each point should be an array of numbers. Each point should have the same amount of numbers.")}),(e=e.filter(function(t,r){return 0===r||!t.every(function(t,n){return t===e[r-1][n]})})).length<2)return[]
var n=e.length,a=createTangent(e[1],e[0]),o=createTangent(e[n-2],e[n-1])
return fitCubic(e,a,o,t,r)},e.exports.fitCubic=fitCubic,e.exports.createTangent=createTangent},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationLayer=void 0
var n=r(1),a=r(8),o=r(5),i=r(28),s=r(29),l=new WeakSet
function getRectDims(e){return{width:e[2]-e[0],height:e[3]-e[1]}}var c=function(){return _createClass(function AnnotationElementFactory(){_classCallCheck(this,AnnotationElementFactory)},null,[{key:"create",value:function create(e){switch(e.data.annotationType){case n.AnnotationType.LINK:return new d(e)
case n.AnnotationType.TEXT:return new h(e)
case n.AnnotationType.WIDGET:switch(e.data.fieldType){case"Tx":return new f(e)
case"Btn":return e.data.radioButton?new m(e):e.data.checkBox?new v(e):new g(e)
case"Ch":return new _(e)}return new p(e)
case n.AnnotationType.POPUP:return new b(e)
case n.AnnotationType.FREETEXT:return new k(e)
case n.AnnotationType.LINE:return new S(e)
case n.AnnotationType.SQUARE:return new C(e)
case n.AnnotationType.CIRCLE:return new P(e)
case n.AnnotationType.POLYLINE:return new E(e)
case n.AnnotationType.CARET:return new w(e)
case n.AnnotationType.INK:return new A(e)
case n.AnnotationType.POLYGON:return new x(e)
case n.AnnotationType.HIGHLIGHT:return new F(e)
case n.AnnotationType.UNDERLINE:return new M(e)
case n.AnnotationType.SQUIGGLY:return new T(e)
case n.AnnotationType.STRIKEOUT:return new R(e)
case n.AnnotationType.STAMP:return new I(e)
case n.AnnotationType.FILEATTACHMENT:return new O(e)
default:return new u(e)}}}])}(),u=function(){return _createClass(function AnnotationElement(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.isRenderable,n=void 0!==r&&r,a=t.ignoreBorder,o=void 0!==a&&a,i=t.createQuadrilaterals,s=void 0!==i&&i
_classCallCheck(this,AnnotationElement),this.isRenderable=n,this.data=e.data,this.layer=e.layer,this.page=e.page,this.viewport=e.viewport,this.linkService=e.linkService,this.downloadManager=e.downloadManager,this.imageResourcesPath=e.imageResourcesPath,this.renderForms=e.renderForms,this.svgFactory=e.svgFactory,this.annotationStorage=e.annotationStorage,this.enableScripting=e.enableScripting,this.hasJSActions=e.hasJSActions,this._fieldObjects=e.fieldObjects,this._mouseState=e.mouseState,n&&(this.container=this._createContainer(o)),s&&(this.quadrilaterals=this._createQuadrilaterals(o))},[{key:"_createContainer",value:function _createContainer(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.data,r=this.page,a=this.viewport,o=document.createElement("section"),i=getRectDims(t.rect),s=i.width,l=i.height,c=_slicedToArray(a.viewBox,4),u=c[0],d=c[1],h=c[2]-u,p=c[3]-d
o.setAttribute("data-annotation-id",t.id)
var f=n.Util.normalizeRect([t.rect[0],r.view[3]-t.rect[1]+r.view[1],t.rect[2],r.view[3]-t.rect[3]+r.view[1]])
if(!e&&t.borderStyle.width>0){o.style.borderWidth="".concat(t.borderStyle.width,"px")
var v=t.borderStyle.horizontalCornerRadius,g=t.borderStyle.verticalCornerRadius
if(v>0||g>0){var _="calc(".concat(v,"px * var(--scale-factor)) / calc(").concat(g,"px * var(--scale-factor))")
o.style.borderRadius=_}else if(this instanceof m){var b="calc(".concat(s,"px * var(--scale-factor)) / calc(").concat(l,"px * var(--scale-factor))")
o.style.borderRadius=b}switch(t.borderStyle.style){case n.AnnotationBorderStyleType.SOLID:o.style.borderStyle="solid"
break
case n.AnnotationBorderStyleType.DASHED:o.style.borderStyle="dashed"
break
case n.AnnotationBorderStyleType.BEVELED:(0,n.warn)("Unimplemented border style: beveled")
break
case n.AnnotationBorderStyleType.INSET:(0,n.warn)("Unimplemented border style: inset")
break
case n.AnnotationBorderStyleType.UNDERLINE:o.style.borderBottomStyle="solid"}var y=t.borderColor||null
y?o.style.borderColor=n.Util.makeHexColor(0|y[0],0|y[1],0|y[2]):o.style.borderWidth=0}o.style.left="".concat(100*(f[0]-u)/h,"%"),o.style.top="".concat(100*(f[1]-d)/p,"%")
var k=t.rotation
return t.hasOwnCanvas||0===k?(o.style.width="".concat(100*s/h,"%"),o.style.height="".concat(100*l/p,"%")):this.setRotation(k,o),o}},{key:"setRotation",value:function setRotation(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.container,a=_slicedToArray(this.viewport.viewBox,4),o=a[0],i=a[1],s=a[2]-o,l=a[3]-i,c=getRectDims(this.data.rect),u=c.width,d=c.height
e%180==0?(t=100*u/s,r=100*d/l):(t=100*d/s,r=100*u/l),n.style.width="".concat(t,"%"),n.style.height="".concat(r,"%"),n.setAttribute("data-main-rotation",(360-e)%360)}},{key:"_commonActions",get:function get(){var e=this,t=function setColor(e,t,r){var n=r.detail[e]
r.target.style[t]=i.ColorConverters["".concat(n[0],"_HTML")](n.slice(1))}
return(0,n.shadow)(this,"_commonActions",{display:function display(t){var r=t.detail.display%2==1
e.container.style.visibility=r?"hidden":"visible",e.annotationStorage.setValue(e.data.id,{hidden:r,print:0===t.detail.display||3===t.detail.display})},print:function print(t){e.annotationStorage.setValue(e.data.id,{print:t.detail.print})},hidden:function hidden(t){e.container.style.visibility=t.detail.hidden?"hidden":"visible",e.annotationStorage.setValue(e.data.id,{hidden:t.detail.hidden})},focus:function focus(e){setTimeout(function(){return e.target.focus({preventScroll:!1})},0)},userName:function userName(e){e.target.title=e.detail.userName},readonly:function readonly(e){e.detail.readonly?e.target.setAttribute("readonly",""):e.target.removeAttribute("readonly")},required:function required(t){e._setRequired(t.target,t.detail.required)},bgColor:function bgColor(e){t("bgColor","backgroundColor",e)},fillColor:function fillColor(e){t("fillColor","backgroundColor",e)},fgColor:function fgColor(e){t("fgColor","color",e)},textColor:function textColor(e){t("textColor","color",e)},borderColor:function borderColor(e){t("borderColor","borderColor",e)},strokeColor:function strokeColor(e){t("strokeColor","borderColor",e)},rotation:function rotation(t){var r=t.detail.rotation
e.setRotation(r),e.annotationStorage.setValue(e.data.id,{rotation:r})}})}},{key:"_dispatchEventFromSandbox",value:function _dispatchEventFromSandbox(e,t){for(var r=this._commonActions,n=0,a=Object.keys(t.detail);n<a.length;n++){var o=a[n],i=e[o]||r[o]
i&&i(t)}}},{key:"_setDefaultPropertiesFromJS",value:function _setDefaultPropertiesFromJS(e){if(this.enableScripting){var t=this.annotationStorage.getRawValue(this.data.id)
if(t)for(var r=this._commonActions,n=0,a=Object.entries(t);n<a.length;n++){var o=_slicedToArray(a[n],2),i=o[0],s=o[1],l=r[i]
if(l)l({detail:_defineProperty({},i,s),target:e}),delete t[i]}}}},{key:"_createQuadrilaterals",value:function _createQuadrilaterals(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.data.quadPoints)return null
var t,r=[],n=this.data.rect,a=_createForOfIteratorHelper(this.data.quadPoints)
try{for(a.s();!(t=a.n()).done;){var o=t.value
this.data.rect=[o[2].x,o[2].y,o[1].x,o[1].y],r.push(this._createContainer(e))}}catch(e){a.e(e)}finally{a.f()}return this.data.rect=n,r}},{key:"_createPopup",value:function _createPopup(e,t){var r=this.container
this.quadrilaterals&&(e=e||this.quadrilaterals,r=this.quadrilaterals[0]),e||((e=document.createElement("div")).className="popupTriggerArea",r.append(e))
var n=new y({container:r,trigger:e,color:t.color,titleObj:t.titleObj,modificationDate:t.modificationDate,contentsObj:t.contentsObj,richText:t.richText,hideWrapper:!0}).render()
n.style.left="100%",r.append(n)}},{key:"_renderQuadrilaterals",value:function _renderQuadrilaterals(e){var t,r=_createForOfIteratorHelper(this.quadrilaterals)
try{for(r.s();!(t=r.n()).done;){t.value.className=e}}catch(e){r.e(e)}finally{r.f()}return this.quadrilaterals}},{key:"render",value:function render(){(0,n.unreachable)("Abstract method `AnnotationElement.render` called")}},{key:"_getElementsByName",value:function _getElementsByName(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[]
if(this._fieldObjects){var a=this._fieldObjects[e]
if(a){var o,i=_createForOfIteratorHelper(a)
try{for(i.s();!(o=i.n()).done;){var s=o.value,c=s.page,u=s.id,d=s.exportValues
if(-1!==c&&u!==t){var h="string"==typeof d?d:null,p=document.querySelector('[data-element-id="'.concat(u,'"]'))
!p||l.has(p)?r.push({id:u,exportValue:h,domElement:p}):(0,n.warn)("_getElementsByName - element not allowed: ".concat(u))}}}catch(e){i.e(e)}finally{i.f()}}return r}var f,v=_createForOfIteratorHelper(document.getElementsByName(e))
try{for(v.s();!(f=v.n()).done;){var m=f.value,g=m.id,_=m.exportValue
g!==t&&(l.has(m)&&r.push({id:g,exportValue:_,domElement:m}))}}catch(e){v.e(e)}finally{v.f()}return r}}],[{key:"platform",get:function get(){var e="undefined"!=typeof navigator?navigator.platform:""
return(0,n.shadow)(this,"platform",{isWin:e.includes("Win"),isMac:e.includes("Mac")})}}])}(),d=function(e){function LinkAnnotationElement(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return _classCallCheck(this,LinkAnnotationElement),(t=_callSuper(this,LinkAnnotationElement,[e,{isRenderable:!0,ignoreBorder:!(null==r||!r.ignoreBorder),createQuadrilaterals:!0}])).isTooltipOnly=e.data.isTooltipOnly,t}return _inherits(LinkAnnotationElement,u),_createClass(LinkAnnotationElement,[{key:"render",value:function render(){var e=this.data,t=this.linkService,r=document.createElement("a")
r.setAttribute("data-element-id",e.id)
var n=!1
return e.url?(t.addLinkAttributes(r,e.url,e.newWindow),n=!0):e.action?(this._bindNamedAction(r,e.action),n=!0):e.dest?(this._bindLink(r,e.dest),n=!0):(e.actions&&(e.actions.Action||e.actions["Mouse Up"]||e.actions["Mouse Down"])&&this.enableScripting&&this.hasJSActions&&(this._bindJSAction(r,e),n=!0),e.resetForm?(this._bindResetFormAction(r,e.resetForm),n=!0):this.isTooltipOnly&&!n&&(this._bindLink(r,""),n=!0)),this.quadrilaterals?this._renderQuadrilaterals("linkAnnotation").map(function(e,t){var n=0===t?r:r.cloneNode()
return e.append(n),e}):(this.container.className="linkAnnotation",n&&this.container.append(r),this.container)}},{key:"_bindLink",value:function _bindLink(e,t){var r=this
e.href=this.linkService.getDestinationHash(t),e.onclick=function(){return t&&r.linkService.goToDestination(t),!1},(t||""===t)&&(e.className="internalLink")}},{key:"_bindNamedAction",value:function _bindNamedAction(e,t){var r=this
e.href=this.linkService.getAnchorUrl(""),e.onclick=function(){return r.linkService.executeNamedAction(t),!1},e.className="internalLink"}},{key:"_bindJSAction",value:function _bindJSAction(e,t){var r=this
e.href=this.linkService.getAnchorUrl("")
for(var n=new Map([["Action","onclick"],["Mouse Up","onmouseup"],["Mouse Down","onmousedown"]]),a=function _loop2(){var a=i[o],s=n.get(a)
if(!s)return 1
e[s]=function(){var e
return null===(e=r.linkService.eventBus)||void 0===e||e.dispatch("dispatcheventinsandbox",{source:r,detail:{id:t.id,name:a}}),!1}},o=0,i=Object.keys(t.actions);o<i.length;o++)a()
e.onclick||(e.onclick=function(){return!1}),e.className="internalLink"}},{key:"_bindResetFormAction",value:function _bindResetFormAction(e,t){var r=this,a=e.onclick
if(a||(e.href=this.linkService.getAnchorUrl("")),e.className="internalLink",!this._fieldObjects)return(0,n.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'),void(a||(e.onclick=function(){return!1}))
e.onclick=function(){a&&a()
var e=t.fields,o=t.refs,i=t.include,s=[]
if(0!==e.length||0!==o.length){var c,u=new Set(o),d=_createForOfIteratorHelper(e)
try{for(d.s();!(c=d.n()).done;){var h,p=c.value,f=_createForOfIteratorHelper(r._fieldObjects[p]||[])
try{for(f.s();!(h=f.n()).done;){var v=h.value.id
u.add(v)}}catch(e){f.e(e)}finally{f.f()}}}catch(e){d.e(e)}finally{d.f()}for(var m=0,g=Object.values(r._fieldObjects);m<g.length;m++){var _,b=_createForOfIteratorHelper(g[m])
try{for(b.s();!(_=b.n()).done;){var y=_.value
u.has(y.id)===i&&s.push(y)}}catch(e){b.e(e)}finally{b.f()}}}else for(var k=0,S=Object.values(r._fieldObjects);k<S.length;k++){var C=S[k]
s.push.apply(s,_toConsumableArray(C))}for(var P,E=r.annotationStorage,x=[],w=0,A=s;w<A.length;w++){var F=A[w],M=F.id
switch(x.push(M),F.type){case"text":var T=F.defaultValue||""
E.setValue(M,{value:T})
break
case"checkbox":case"radiobutton":var R=F.defaultValue===F.exportValues
E.setValue(M,{value:R})
break
case"combobox":case"listbox":var I=F.defaultValue||""
E.setValue(M,{value:I})
break
default:continue}var O=document.querySelector('[data-element-id="'.concat(M,'"]'))
O&&(l.has(O)?O.dispatchEvent(new Event("resetform")):(0,n.warn)("_bindResetFormAction - element not allowed: ".concat(M)))}r.enableScripting&&(null===(P=r.linkService.eventBus)||void 0===P||P.dispatch("dispatcheventinsandbox",{source:r,detail:{id:"app",ids:x,name:"ResetForm"}}))
return!1}}}])}(),h=function(e){function TextAnnotationElement(e){var t,r,n
return _classCallCheck(this,TextAnnotationElement),_callSuper(this,TextAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str)}])}return _inherits(TextAnnotationElement,u),_createClass(TextAnnotationElement,[{key:"render",value:function render(){this.container.className="textAnnotation"
var e=document.createElement("img")
return e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.alt="[{{type}} Annotation]",e.dataset.l10nId="text_annotation_type",e.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(e,this.data),this.container.append(e),this.container}}])}(),p=function(e){function WidgetAnnotationElement(){return _classCallCheck(this,WidgetAnnotationElement),_callSuper(this,WidgetAnnotationElement,arguments)}return _inherits(WidgetAnnotationElement,u),_createClass(WidgetAnnotationElement,[{key:"render",value:function render(){return this.data.alternativeText&&(this.container.title=this.data.alternativeText),this.container}},{key:"_getKeyModifier",value:function _getKeyModifier(e){var t=u.platform,r=t.isWin,n=t.isMac
return r&&e.ctrlKey||n&&e.metaKey}},{key:"_setEventListener",value:function _setEventListener(e,t,r,n){var a=this
t.includes("mouse")?e.addEventListener(t,function(e){var t
null===(t=a.linkService.eventBus)||void 0===t||t.dispatch("dispatcheventinsandbox",{source:a,detail:{id:a.data.id,name:r,value:n(e),shift:e.shiftKey,modifier:a._getKeyModifier(e)}})}):e.addEventListener(t,function(e){var t
null===(t=a.linkService.eventBus)||void 0===t||t.dispatch("dispatcheventinsandbox",{source:a,detail:{id:a.data.id,name:r,value:n(e)}})})}},{key:"_setEventListeners",value:function _setEventListeners(e,t,r){var n,a=_createForOfIteratorHelper(t)
try{for(a.s();!(n=a.n()).done;){var o,i=_slicedToArray(n.value,2),s=i[0],l=i[1];("Action"===l||null!==(o=this.data.actions)&&void 0!==o&&o[l])&&this._setEventListener(e,s,l,r)}}catch(e){a.e(e)}finally{a.f()}}},{key:"_setBackgroundColor",value:function _setBackgroundColor(e){var t=this.data.backgroundColor||null
e.style.backgroundColor=null===t?"transparent":n.Util.makeHexColor(t[0],t[1],t[2])}},{key:"_setTextStyle",value:function _setTextStyle(e){var t,r=this.data.defaultAppearanceData.fontColor,a=this.data.defaultAppearanceData.fontSize||9,o=e.style
if(this.data.multiLine){var i=Math.abs(this.data.rect[3]-this.data.rect[1]),s=i/(Math.round(i/(n.LINE_FACTOR*a))||1)
t=Math.min(a,Math.round(s/n.LINE_FACTOR))}else{var l=Math.abs(this.data.rect[3]-this.data.rect[1])
t=Math.min(a,Math.round(l/n.LINE_FACTOR))}o.fontSize="calc(".concat(t,"px * var(--scale-factor))"),o.color=n.Util.makeHexColor(r[0],r[1],r[2]),null!==this.data.textAlignment&&(o.textAlign=["left","center","right"][this.data.textAlignment])}},{key:"_setRequired",value:function _setRequired(e,t){t?e.setAttribute("required",!0):e.removeAttribute("required"),e.setAttribute("aria-required",t)}}])}(),f=function(e){function TextWidgetAnnotationElement(e){return _classCallCheck(this,TextWidgetAnnotationElement),_callSuper(this,TextWidgetAnnotationElement,[e,{isRenderable:e.renderForms||!e.data.hasAppearance&&!!e.data.fieldValue}])}return _inherits(TextWidgetAnnotationElement,p),_createClass(TextWidgetAnnotationElement,[{key:"setPropertyOnSiblings",value:function setPropertyOnSiblings(e,t,r,n){var a,o=this.annotationStorage,i=_createForOfIteratorHelper(this._getElementsByName(e.name,e.id))
try{for(i.s();!(a=i.n()).done;){var s=a.value
s.domElement&&(s.domElement[t]=r),o.setValue(s.id,_defineProperty({},n,r))}}catch(e){i.e(e)}finally{i.f()}}},{key:"render",value:function render(){var e=this,t=this.annotationStorage,r=this.data.id
this.container.className="textWidgetAnnotation"
var n=null
if(this.renderForms){var a=t.getValue(r,{value:this.data.fieldValue}),o=a.formattedValue||a.value||"",i=t.getValue(r,{charLimit:this.data.maxLen}).charLimit
i&&o.length>i&&(o=o.slice(0,i))
var s={userValue:o,formattedValue:null,valueOnFocus:""}
this.data.multiLine?((n=document.createElement("textarea")).textContent=o,this.data.doNotScroll&&(n.style.overflowY="hidden")):((n=document.createElement("input")).type="text",n.setAttribute("value",o),this.data.doNotScroll&&(n.style.overflowX="hidden")),l.add(n),n.setAttribute("data-element-id",r),n.disabled=this.data.readOnly,n.name=this.data.fieldName,n.tabIndex=1e3,this._setRequired(n,this.data.required),i&&(n.maxLength=i),n.addEventListener("input",function(a){t.setValue(r,{value:a.target.value}),e.setPropertyOnSiblings(n,"value",a.target.value,"value")}),n.addEventListener("resetform",function(t){var r,a=null!==(r=e.data.defaultFieldValue)&&void 0!==r?r:""
n.value=s.userValue=a,s.formattedValue=null})
var c=function blurListener(e){var t=s.formattedValue
null!=t&&(e.target.value=t),e.target.scrollLeft=0}
if(this.enableScripting&&this.hasJSActions){var u
n.addEventListener("focus",function(e){s.userValue&&(e.target.value=s.userValue),s.valueOnFocus=e.target.value}),n.addEventListener("updatefromsandbox",function(n){var a={value:function value(e){var n
s.userValue=null!==(n=e.detail.value)&&void 0!==n?n:"",t.setValue(r,{value:s.userValue.toString()}),e.target.value=s.userValue},formattedValue:function formattedValue(e){var formattedValue=e.detail.formattedValue
s.formattedValue=formattedValue,null!=formattedValue&&e.target!==document.activeElement&&(e.target.value=formattedValue),t.setValue(r,{formattedValue})},selRange:function selRange(e){var t;(t=e.target).setSelectionRange.apply(t,_toConsumableArray(e.detail.selRange))},charLimit:function charLimit(n){var a,charLimit=n.detail.charLimit,o=n.target
if(0!==charLimit){o.setAttribute("maxLength",charLimit)
var i=s.userValue
!i||i.length<=charLimit||(i=i.slice(0,charLimit),o.value=s.userValue=i,t.setValue(r,{value:i}),null===(a=e.linkService.eventBus)||void 0===a||a.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:i,willCommit:!0,commitKey:1,selStart:o.selectionStart,selEnd:o.selectionEnd}}))}else o.removeAttribute("maxLength")}}
e._dispatchEventFromSandbox(a,n)}),n.addEventListener("keydown",function(t){var n,a=-1
if("Escape"===t.key?a=0:"Enter"===t.key?a=2:"Tab"===t.key&&(a=3),-1!==a){var o=t.target.value
s.valueOnFocus!==o&&(s.userValue=o,null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:o,willCommit:!0,commitKey:a,selStart:t.target.selectionStart,selEnd:t.target.selectionEnd}}))}})
var d=c
c=null,n.addEventListener("blur",function(t){var n,a=t.target.value;(s.userValue=a,e._mouseState.isDown&&s.valueOnFocus!==a)&&(null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:a,willCommit:!0,commitKey:1,selStart:t.target.selectionStart,selEnd:t.target.selectionEnd}}))
d(t)}),null!==(u=this.data.actions)&&void 0!==u&&u.Keystroke&&n.addEventListener("beforeinput",function(t){var n,a=t.data,o=t.target,i=o.value,s=o.selectionStart,l=o.selectionEnd,c=s,u=l
switch(t.inputType){case"deleteWordBackward":var d=i.substring(0,s).match(/\w*[^\w]*$/)
d&&(c-=d[0].length)
break
case"deleteWordForward":var h=i.substring(s).match(/^[^\w]*\w*/)
h&&(u+=h[0].length)
break
case"deleteContentBackward":s===l&&(c-=1)
break
case"deleteContentForward":s===l&&(u+=1)}t.preventDefault(),null===(n=e.linkService.eventBus)||void 0===n||n.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:i,change:a||"",willCommit:!1,selStart:c,selEnd:u}})}),this._setEventListeners(n,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],function(e){return e.target.value})}if(c&&n.addEventListener("blur",c),this.data.comb){var h=(this.data.rect[2]-this.data.rect[0])/i
n.classList.add("comb"),n.style.letterSpacing="calc(".concat(h,"px * var(--scale-factor) - 1ch)")}}else(n=document.createElement("div")).textContent=this.data.fieldValue,n.style.verticalAlign="middle",n.style.display="table-cell"
return this._setTextStyle(n),this._setBackgroundColor(n),this._setDefaultPropertiesFromJS(n),this.container.append(n),this.container}}])}(),v=function(e){function CheckboxWidgetAnnotationElement(e){return _classCallCheck(this,CheckboxWidgetAnnotationElement),_callSuper(this,CheckboxWidgetAnnotationElement,[e,{isRenderable:e.renderForms}])}return _inherits(CheckboxWidgetAnnotationElement,p),_createClass(CheckboxWidgetAnnotationElement,[{key:"render",value:function render(){var e=this,t=this.annotationStorage,r=this.data,n=r.id,a=t.getValue(n,{value:r.exportValue===r.fieldValue}).value
"string"==typeof a&&(a="Off"!==a,t.setValue(n,{value:a})),this.container.className="buttonWidgetAnnotation checkBox"
var o=document.createElement("input")
return l.add(o),o.setAttribute("data-element-id",n),o.disabled=r.readOnly,this._setRequired(o,this.data.required),o.type="checkbox",o.name=r.fieldName,a&&o.setAttribute("checked",!0),o.setAttribute("exportValue",r.exportValue),o.tabIndex=1e3,o.addEventListener("change",function(a){var o,i=a.target,s=i.name,l=i.checked,c=_createForOfIteratorHelper(e._getElementsByName(s,n))
try{for(c.s();!(o=c.n()).done;){var u=o.value,d=l&&u.exportValue===r.exportValue
u.domElement&&(u.domElement.checked=d),t.setValue(u.id,{value:d})}}catch(e){c.e(e)}finally{c.f()}t.setValue(n,{value:l})}),o.addEventListener("resetform",function(e){var t=r.defaultFieldValue||"Off"
e.target.checked=t===r.exportValue}),this.enableScripting&&this.hasJSActions&&(o.addEventListener("updatefromsandbox",function(r){var a={value:function value(e){e.target.checked="Off"!==e.detail.value,t.setValue(n,{value:e.target.checked})}}
e._dispatchEventFromSandbox(a,r)}),this._setEventListeners(o,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],function(e){return e.target.checked})),this._setBackgroundColor(o),this._setDefaultPropertiesFromJS(o),this.container.append(o),this.container}}])}(),m=function(e){function RadioButtonWidgetAnnotationElement(e){return _classCallCheck(this,RadioButtonWidgetAnnotationElement),_callSuper(this,RadioButtonWidgetAnnotationElement,[e,{isRenderable:e.renderForms}])}return _inherits(RadioButtonWidgetAnnotationElement,p),_createClass(RadioButtonWidgetAnnotationElement,[{key:"render",value:function render(){var e=this
this.container.className="buttonWidgetAnnotation radioButton"
var t=this.annotationStorage,r=this.data,n=r.id,a=t.getValue(n,{value:r.fieldValue===r.buttonValue}).value
"string"==typeof a&&(a=a!==r.buttonValue,t.setValue(n,{value:a}))
var o=document.createElement("input")
if(l.add(o),o.setAttribute("data-element-id",n),o.disabled=r.readOnly,this._setRequired(o,this.data.required),o.type="radio",o.name=r.fieldName,a&&o.setAttribute("checked",!0),o.tabIndex=1e3,o.addEventListener("change",function(r){var a,o=r.target,i=o.name,s=o.checked,l=_createForOfIteratorHelper(e._getElementsByName(i,n))
try{for(l.s();!(a=l.n()).done;){var c=a.value
t.setValue(c.id,{value:!1})}}catch(e){l.e(e)}finally{l.f()}t.setValue(n,{value:s})}),o.addEventListener("resetform",function(e){var t=r.defaultFieldValue
e.target.checked=null!=t&&t===r.buttonValue}),this.enableScripting&&this.hasJSActions){var i=r.buttonValue
o.addEventListener("updatefromsandbox",function(r){var a={value:function value(r){var a,o=i===r.detail.value,s=_createForOfIteratorHelper(e._getElementsByName(r.target.name))
try{for(s.s();!(a=s.n()).done;){var l=a.value,c=o&&l.id===n
l.domElement&&(l.domElement.checked=c),t.setValue(l.id,{value:c})}}catch(e){s.e(e)}finally{s.f()}}}
e._dispatchEventFromSandbox(a,r)}),this._setEventListeners(o,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],function(e){return e.target.checked})}return this._setBackgroundColor(o),this._setDefaultPropertiesFromJS(o),this.container.append(o),this.container}}])}(),g=function(e){function PushButtonWidgetAnnotationElement(e){return _classCallCheck(this,PushButtonWidgetAnnotationElement),_callSuper(this,PushButtonWidgetAnnotationElement,[e,{ignoreBorder:e.data.hasAppearance}])}return _inherits(PushButtonWidgetAnnotationElement,d),_createClass(PushButtonWidgetAnnotationElement,[{key:"render",value:function render(){var e=this,t=_superPropGet(PushButtonWidgetAnnotationElement,"render",this,3)([])
t.className="buttonWidgetAnnotation pushButton",this.data.alternativeText&&(t.title=this.data.alternativeText)
var r=t.lastChild
return this.enableScripting&&this.hasJSActions&&r&&(this._setDefaultPropertiesFromJS(r),r.addEventListener("updatefromsandbox",function(t){e._dispatchEventFromSandbox({},t)})),t}}])}(),_=function(e){function ChoiceWidgetAnnotationElement(e){return _classCallCheck(this,ChoiceWidgetAnnotationElement),_callSuper(this,ChoiceWidgetAnnotationElement,[e,{isRenderable:e.renderForms}])}return _inherits(ChoiceWidgetAnnotationElement,p),_createClass(ChoiceWidgetAnnotationElement,[{key:"render",value:function render(){var e=this
this.container.className="choiceWidgetAnnotation"
var t=this.annotationStorage,r=this.data.id,n=t.getValue(r,{value:this.data.fieldValue}),a=document.createElement("select")
l.add(a),a.setAttribute("data-element-id",r),a.disabled=this.data.readOnly,this._setRequired(a,this.data.required),a.name=this.data.fieldName,a.tabIndex=1e3
var o=this.data.combo&&this.data.options.length>0
this.data.combo||(a.size=this.data.options.length,this.data.multiSelect&&(a.multiple=!0)),a.addEventListener("resetform",function(t){var r,n=e.data.defaultFieldValue,o=_createForOfIteratorHelper(a.options)
try{for(o.s();!(r=o.n()).done;){var i=r.value
i.selected=i.value===n}}catch(e){o.e(e)}finally{o.f()}})
var i,s=_createForOfIteratorHelper(this.data.options)
try{for(s.s();!(i=s.n()).done;){var c=i.value,u=document.createElement("option")
u.textContent=c.displayValue,u.value=c.exportValue,n.value.includes(c.exportValue)&&(u.setAttribute("selected",!0),o=!1),a.append(u)}}catch(e){s.e(e)}finally{s.f()}var d=null
if(o){var h=document.createElement("option")
h.value=" ",h.setAttribute("hidden",!0),h.setAttribute("selected",!0),a.prepend(h),d=function removeEmptyEntry(){h.remove(),a.removeEventListener("input",d),d=null},a.addEventListener("input",d)}var p=function getValue(e,t){var r=t?"value":"textContent",n=e.target.options
return e.target.multiple?Array.prototype.filter.call(n,function(e){return e.selected}).map(function(e){return e[r]}):-1===n.selectedIndex?null:n[n.selectedIndex][r]},f=function getItems(e){var t=e.target.options
return Array.prototype.map.call(t,function(e){return{displayValue:e.textContent,exportValue:e.value}})}
return this.enableScripting&&this.hasJSActions?(a.addEventListener("updatefromsandbox",function(n){var o={value:function value(e){var n
null===(n=d)||void 0===n||n()
var o,value=e.detail.value,i=new Set(Array.isArray(value)?value:[value]),s=_createForOfIteratorHelper(a.options)
try{for(s.s();!(o=s.n()).done;){var l=o.value
l.selected=i.has(l.value)}}catch(e){s.e(e)}finally{s.f()}t.setValue(r,{value:p(e,!0)})},multipleSelection:function multipleSelection(e){a.multiple=!0},remove:function remove(e){var n=a.options,o=e.detail.remove;(n[o].selected=!1,a.remove(o),n.length>0)&&(-1===Array.prototype.findIndex.call(n,function(e){return e.selected})&&(n[0].selected=!0))
t.setValue(r,{value:p(e,!0),items:f(e)})},clear:function clear(e){for(;0!==a.length;)a.remove(0)
t.setValue(r,{value:null,items:[]})},insert:function insert(e){var n=e.detail.insert,o=n.index,i=n.displayValue,s=n.exportValue,l=a.children[o],c=document.createElement("option")
c.textContent=i,c.value=s,l?l.before(c):a.append(c),t.setValue(r,{value:p(e,!0),items:f(e)})},items:function items(e){for(var items=e.detail.items;0!==a.length;)a.remove(0)
var n,o=_createForOfIteratorHelper(items)
try{for(o.s();!(n=o.n()).done;){var i=n.value,s=i.displayValue,l=i.exportValue,c=document.createElement("option")
c.textContent=s,c.value=l,a.append(c)}}catch(e){o.e(e)}finally{o.f()}a.options.length>0&&(a.options[0].selected=!0),t.setValue(r,{value:p(e,!0),items:f(e)})},indices:function indices(e){var n,indices=new Set(e.detail.indices),a=_createForOfIteratorHelper(e.target.options)
try{for(a.s();!(n=a.n()).done;){var o=n.value
o.selected=indices.has(o.index)}}catch(e){a.e(e)}finally{a.f()}t.setValue(r,{value:p(e,!0)})},editable:function editable(e){e.target.disabled=!e.detail.editable}}
e._dispatchEventFromSandbox(o,n)}),a.addEventListener("input",function(n){var a,o=p(n,!0),i=p(n,!1)
t.setValue(r,{value:o}),null===(a=e.linkService.eventBus)||void 0===a||a.dispatch("dispatcheventinsandbox",{source:e,detail:{id:r,name:"Keystroke",value:i,changeEx:o,willCommit:!0,commitKey:1,keyDown:!1}})}),this._setEventListeners(a,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"],["input","Action"]],function(e){return e.target.checked})):a.addEventListener("input",function(e){t.setValue(r,{value:p(e,!0)})}),this.data.combo&&this._setTextStyle(a),this._setBackgroundColor(a),this._setDefaultPropertiesFromJS(a),this.container.append(a),this.container}}])}(),b=function(e){function PopupAnnotationElement(e){var t,r,n
return _classCallCheck(this,PopupAnnotationElement),_callSuper(this,PopupAnnotationElement,[e,{isRenderable:!!(null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str)}])}return _inherits(PopupAnnotationElement,u),_createClass(PopupAnnotationElement,[{key:"render",value:function render(){if(this.container.className="popupAnnotation",["Line","Square","Circle","PolyLine","Polygon","Ink"].includes(this.data.parentType))return this.container
var e='[data-annotation-id="'.concat(this.data.parentId,'"]'),t=this.layer.querySelectorAll(e)
if(0===t.length)return this.container
var r=new y({container:this.container,trigger:Array.from(t),color:this.data.color,titleObj:this.data.titleObj,modificationDate:this.data.modificationDate,contentsObj:this.data.contentsObj,richText:this.data.richText}),a=this.page,o=n.Util.normalizeRect([this.data.parentRect[0],a.view[3]-this.data.parentRect[1]+a.view[1],this.data.parentRect[2],a.view[3]-this.data.parentRect[3]+a.view[1]]),i=o[0]+this.data.parentRect[2]-this.data.parentRect[0],s=o[1],l=_slicedToArray(this.viewport.viewBox,4),c=l[0],u=l[1],d=l[2]-c,h=l[3]-u
return this.container.style.left="".concat(100*(i-c)/d,"%"),this.container.style.top="".concat(100*(s-u)/h,"%"),this.container.append(r.render()),this.container}}])}(),y=function(){return _createClass(function PopupElement(e){_classCallCheck(this,PopupElement),this.container=e.container,this.trigger=e.trigger,this.color=e.color,this.titleObj=e.titleObj,this.modificationDate=e.modificationDate,this.contentsObj=e.contentsObj,this.richText=e.richText,this.hideWrapper=e.hideWrapper||!1,this.pinned=!1},[{key:"render",value:function render(){var e,t,r=document.createElement("div")
r.className="popupWrapper",this.hideElement=this.hideWrapper?r:this.container,this.hideElement.hidden=!0
var o=document.createElement("div")
o.className="popup"
var i=this.color
if(i){var l=.7*(255-i[0])+i[0],c=.7*(255-i[1])+i[1],u=.7*(255-i[2])+i[2]
o.style.backgroundColor=n.Util.makeHexColor(0|l,0|c,0|u)}var d=document.createElement("h1")
d.dir=this.titleObj.dir,d.textContent=this.titleObj.str,o.append(d)
var h=a.PDFDateString.toDateObject(this.modificationDate)
if(h){var p=document.createElement("span")
p.className="popupDate",p.textContent="{{date}}, {{time}}",p.dataset.l10nId="annotation_date_string",p.dataset.l10nArgs=JSON.stringify({date:h.toLocaleDateString(),time:h.toLocaleTimeString()}),o.append(p)}if(null===(e=this.richText)||void 0===e||!e.str||null!==(t=this.contentsObj)&&void 0!==t&&t.str&&this.contentsObj.str!==this.richText.str){var f=this._formatContents(this.contentsObj)
o.append(f)}else s.XfaLayer.render({xfaHtml:this.richText.html,intent:"richText",div:o}),o.lastChild.className="richText popupContent"
Array.isArray(this.trigger)||(this.trigger=[this.trigger])
var v,m=_createForOfIteratorHelper(this.trigger)
try{for(m.s();!(v=m.n()).done;){var g=v.value
g.addEventListener("click",this._toggle.bind(this)),g.addEventListener("mouseover",this._show.bind(this,!1)),g.addEventListener("mouseout",this._hide.bind(this,!1))}}catch(e){m.e(e)}finally{m.f()}return o.addEventListener("click",this._hide.bind(this,!0)),r.append(o),r}},{key:"_formatContents",value:function _formatContents(e){var t=e.str,r=e.dir,n=document.createElement("p")
n.className="popupContent",n.dir=r
for(var a=t.split(/(?:\r\n?|\n)/),o=0,i=a.length;o<i;++o){var s=a[o]
n.append(document.createTextNode(s)),o<i-1&&n.append(document.createElement("br"))}return n}},{key:"_toggle",value:function _toggle(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function _show(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(this.pinned=!0),this.hideElement.hidden&&(this.hideElement.hidden=!1,this.container.style.zIndex=parseInt(this.container.style.zIndex)+1e3)}},{key:"_hide",value:function _hide(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(this.pinned=!1),this.hideElement.hidden||this.pinned||(this.hideElement.hidden=!0,this.container.style.zIndex=parseInt(this.container.style.zIndex)-1e3)}}])}(),k=function(e){function FreeTextAnnotationElement(e){var t,r,n,a
return _classCallCheck(this,FreeTextAnnotationElement),(a=_callSuper(this,FreeTextAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0}])).textContent=e.data.textContent,a}return _inherits(FreeTextAnnotationElement,u),_createClass(FreeTextAnnotationElement,[{key:"render",value:function render(){if(this.container.className="freeTextAnnotation",this.textContent){var e=document.createElement("div")
e.className="annotationTextContent",e.setAttribute("role","comment")
var t,r=_createForOfIteratorHelper(this.textContent)
try{for(r.s();!(t=r.n()).done;){var n=t.value,a=document.createElement("span")
a.textContent=n,e.append(a)}}catch(e){r.e(e)}finally{r.f()}this.container.append(e)}return this.data.hasPopup||this._createPopup(null,this.data),this.container}}])}(),S=function(e){function LineAnnotationElement(e){var t,r,n
return _classCallCheck(this,LineAnnotationElement),_callSuper(this,LineAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0}])}return _inherits(LineAnnotationElement,u),_createClass(LineAnnotationElement,[{key:"render",value:function render(){this.container.className="lineAnnotation"
var e=this.data,t=getRectDims(e.rect),r=t.width,n=t.height,a=this.svgFactory.create(r,n,!0),o=this.svgFactory.createElement("svg:line")
return o.setAttribute("x1",e.rect[2]-e.lineCoordinates[0]),o.setAttribute("y1",e.rect[3]-e.lineCoordinates[1]),o.setAttribute("x2",e.rect[2]-e.lineCoordinates[2]),o.setAttribute("y2",e.rect[3]-e.lineCoordinates[3]),o.setAttribute("stroke-width",e.borderStyle.width||1),o.setAttribute("stroke","transparent"),o.setAttribute("fill","transparent"),a.append(o),this.container.append(a),this._createPopup(o,e),this.container}}])}(),C=function(e){function SquareAnnotationElement(e){var t,r,n
return _classCallCheck(this,SquareAnnotationElement),_callSuper(this,SquareAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0}])}return _inherits(SquareAnnotationElement,u),_createClass(SquareAnnotationElement,[{key:"render",value:function render(){this.container.className="squareAnnotation"
var e=this.data,t=getRectDims(e.rect),r=t.width,n=t.height,a=this.svgFactory.create(r,n,!0),o=e.borderStyle.width,i=this.svgFactory.createElement("svg:rect")
return i.setAttribute("x",o/2),i.setAttribute("y",o/2),i.setAttribute("width",r-o),i.setAttribute("height",n-o),i.setAttribute("stroke-width",o||1),i.setAttribute("stroke","transparent"),i.setAttribute("fill","transparent"),a.append(i),this.container.append(a),this._createPopup(i,e),this.container}}])}(),P=function(e){function CircleAnnotationElement(e){var t,r,n
return _classCallCheck(this,CircleAnnotationElement),_callSuper(this,CircleAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0}])}return _inherits(CircleAnnotationElement,u),_createClass(CircleAnnotationElement,[{key:"render",value:function render(){this.container.className="circleAnnotation"
var e=this.data,t=getRectDims(e.rect),r=t.width,n=t.height,a=this.svgFactory.create(r,n,!0),o=e.borderStyle.width,i=this.svgFactory.createElement("svg:ellipse")
return i.setAttribute("cx",r/2),i.setAttribute("cy",n/2),i.setAttribute("rx",r/2-o/2),i.setAttribute("ry",n/2-o/2),i.setAttribute("stroke-width",o||1),i.setAttribute("stroke","transparent"),i.setAttribute("fill","transparent"),a.append(i),this.container.append(a),this._createPopup(i,e),this.container}}])}(),E=function(e){function PolylineAnnotationElement(e){var t,r,n,a
return _classCallCheck(this,PolylineAnnotationElement),(a=_callSuper(this,PolylineAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0}])).containerClassName="polylineAnnotation",a.svgElementName="svg:polyline",a}return _inherits(PolylineAnnotationElement,u),_createClass(PolylineAnnotationElement,[{key:"render",value:function render(){this.container.className=this.containerClassName
var e,t=this.data,r=getRectDims(t.rect),n=r.width,a=r.height,o=this.svgFactory.create(n,a,!0),i=[],s=_createForOfIteratorHelper(t.vertices)
try{for(s.s();!(e=s.n()).done;){var l=e.value,c=l.x-t.rect[0],u=t.rect[3]-l.y
i.push(c+","+u)}}catch(e){s.e(e)}finally{s.f()}i=i.join(" ")
var d=this.svgFactory.createElement(this.svgElementName)
return d.setAttribute("points",i),d.setAttribute("stroke-width",t.borderStyle.width||1),d.setAttribute("stroke","transparent"),d.setAttribute("fill","transparent"),o.append(d),this.container.append(o),this._createPopup(d,t),this.container}}])}(),x=function(e){function PolygonAnnotationElement(e){var t
return _classCallCheck(this,PolygonAnnotationElement),(t=_callSuper(this,PolygonAnnotationElement,[e])).containerClassName="polygonAnnotation",t.svgElementName="svg:polygon",t}return _inherits(PolygonAnnotationElement,E),_createClass(PolygonAnnotationElement)}(),w=function(e){function CaretAnnotationElement(e){var t,r,n
return _classCallCheck(this,CaretAnnotationElement),_callSuper(this,CaretAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0}])}return _inherits(CaretAnnotationElement,u),_createClass(CaretAnnotationElement,[{key:"render",value:function render(){return this.container.className="caretAnnotation",this.data.hasPopup||this._createPopup(null,this.data),this.container}}])}(),A=function(e){function InkAnnotationElement(e){var t,r,n,a
return _classCallCheck(this,InkAnnotationElement),(a=_callSuper(this,InkAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0}])).containerClassName="inkAnnotation",a.svgElementName="svg:polyline",a}return _inherits(InkAnnotationElement,u),_createClass(InkAnnotationElement,[{key:"render",value:function render(){this.container.className=this.containerClassName
var e,t=this.data,r=getRectDims(t.rect),n=r.width,a=r.height,o=this.svgFactory.create(n,a,!0),i=_createForOfIteratorHelper(t.inkLists)
try{for(i.s();!(e=i.n()).done;){var s,l=e.value,c=[],u=_createForOfIteratorHelper(l)
try{for(u.s();!(s=u.n()).done;){var d=s.value,h=d.x-t.rect[0],p=t.rect[3]-d.y
c.push("".concat(h,",").concat(p))}}catch(e){u.e(e)}finally{u.f()}c=c.join(" ")
var f=this.svgFactory.createElement(this.svgElementName)
f.setAttribute("points",c),f.setAttribute("stroke-width",t.borderStyle.width||1),f.setAttribute("stroke","transparent"),f.setAttribute("fill","transparent"),this._createPopup(f,t),o.append(f)}}catch(e){i.e(e)}finally{i.f()}return this.container.append(o),this.container}}])}(),F=function(e){function HighlightAnnotationElement(e){var t,r,n
return _classCallCheck(this,HighlightAnnotationElement),_callSuper(this,HighlightAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0,createQuadrilaterals:!0}])}return _inherits(HighlightAnnotationElement,u),_createClass(HighlightAnnotationElement,[{key:"render",value:function render(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("highlightAnnotation"):(this.container.className="highlightAnnotation",this.container)}}])}(),M=function(e){function UnderlineAnnotationElement(e){var t,r,n
return _classCallCheck(this,UnderlineAnnotationElement),_callSuper(this,UnderlineAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0,createQuadrilaterals:!0}])}return _inherits(UnderlineAnnotationElement,u),_createClass(UnderlineAnnotationElement,[{key:"render",value:function render(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("underlineAnnotation"):(this.container.className="underlineAnnotation",this.container)}}])}(),T=function(e){function SquigglyAnnotationElement(e){var t,r,n
return _classCallCheck(this,SquigglyAnnotationElement),_callSuper(this,SquigglyAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0,createQuadrilaterals:!0}])}return _inherits(SquigglyAnnotationElement,u),_createClass(SquigglyAnnotationElement,[{key:"render",value:function render(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("squigglyAnnotation"):(this.container.className="squigglyAnnotation",this.container)}}])}(),R=function(e){function StrikeOutAnnotationElement(e){var t,r,n
return _classCallCheck(this,StrikeOutAnnotationElement),_callSuper(this,StrikeOutAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0,createQuadrilaterals:!0}])}return _inherits(StrikeOutAnnotationElement,u),_createClass(StrikeOutAnnotationElement,[{key:"render",value:function render(){return this.data.hasPopup||this._createPopup(null,this.data),this.quadrilaterals?this._renderQuadrilaterals("strikeoutAnnotation"):(this.container.className="strikeoutAnnotation",this.container)}}])}(),I=function(e){function StampAnnotationElement(e){var t,r,n
return _classCallCheck(this,StampAnnotationElement),_callSuper(this,StampAnnotationElement,[e,{isRenderable:!!(e.data.hasPopup||null!==(t=e.data.titleObj)&&void 0!==t&&t.str||null!==(r=e.data.contentsObj)&&void 0!==r&&r.str||null!==(n=e.data.richText)&&void 0!==n&&n.str),ignoreBorder:!0}])}return _inherits(StampAnnotationElement,u),_createClass(StampAnnotationElement,[{key:"render",value:function render(){return this.container.className="stampAnnotation",this.data.hasPopup||this._createPopup(null,this.data),this.container}}])}(),O=function(e){function FileAttachmentAnnotationElement(e){var t,r
_classCallCheck(this,FileAttachmentAnnotationElement)
var n=(r=_callSuper(this,FileAttachmentAnnotationElement,[e,{isRenderable:!0}])).data.file,o=n.filename,i=n.content
return r.filename=(0,a.getFilenameFromUrl)(o),r.content=i,null===(t=r.linkService.eventBus)||void 0===t||t.dispatch("fileattachmentannotation",{source:r,filename:o,content:i}),r}return _inherits(FileAttachmentAnnotationElement,u),_createClass(FileAttachmentAnnotationElement,[{key:"render",value:function render(){var e,t
this.container.className="fileAttachmentAnnotation"
var r=document.createElement("div")
return r.className="popupTriggerArea",r.addEventListener("dblclick",this._download.bind(this)),!this.data.hasPopup&&(null!==(e=this.data.titleObj)&&void 0!==e&&e.str||null!==(t=this.data.contentsObj)&&void 0!==t&&t.str||this.data.richText)&&this._createPopup(r,this.data),this.container.append(r),this.container}},{key:"_download",value:function _download(){var e
null===(e=this.downloadManager)||void 0===e||e.openOrDownloadData(this.container,this.content,this.filename)}}])}(),D=function(){function AnnotationLayer(){_classCallCheck(this,AnnotationLayer)}return _createClass(AnnotationLayer,null,[{key:"render",value:function render(e){var t=e.annotations,r=e.div,i=e.viewport,s=e.accessibilityManager
_assertClassBrand(AnnotationLayer,this,_setDimensions).call(this,r,i)
var l,u=0,d=_createForOfIteratorHelper(t)
try{for(d.s();!(l=d.n()).done;){var h=l.value
if(h.annotationType!==n.AnnotationType.POPUP){var p=getRectDims(h.rect),f=p.width,v=p.height
if(f<=0||v<=0)continue}var m=c.create({data:h,layer:r,page:e.page,viewport:i,linkService:e.linkService,downloadManager:e.downloadManager,imageResourcesPath:e.imageResourcesPath||"",renderForms:!1!==e.renderForms,svgFactory:new a.DOMSVGFactory,annotationStorage:e.annotationStorage||new o.AnnotationStorage,enableScripting:e.enableScripting,hasJSActions:e.hasJSActions,fieldObjects:e.fieldObjects,mouseState:e.mouseState||{isDown:!1}})
if(m.isRenderable){var g=m.render()
if(h.hidden&&(g.style.visibility="hidden"),Array.isArray(g)){var _,y=_createForOfIteratorHelper(g)
try{for(y.s();!(_=y.n()).done;){var k=_.value
k.style.zIndex=u++,_appendElement.call(AnnotationLayer,k,h.id,r,s)}}catch(e){y.e(e)}finally{y.f()}}else g.style.zIndex=u++,m instanceof b?r.prepend(g):_appendElement.call(AnnotationLayer,g,h.id,r,s)}}}catch(e){d.e(e)}finally{d.f()}_assertClassBrand(AnnotationLayer,this,_setAnnotationCanvasMap).call(this,r,e.annotationCanvasMap)}},{key:"update",value:function update(e){var t=e.annotationCanvasMap,r=e.div,n=e.viewport
_assertClassBrand(AnnotationLayer,this,_setDimensions).call(this,r,n),_assertClassBrand(AnnotationLayer,this,_setAnnotationCanvasMap).call(this,r,t),r.hidden=!1}}])}()
function _appendElement(e,t,r,n){var o=e.firstChild||e
o.id="".concat(a.AnnotationPrefix).concat(t),r.append(e),null==n||n.moveElementInDOM(r,e,o,!1)}function _setDimensions(e,t){var r=t.width,n=t.height,a=t.rotation,o=e.style,i=a%180!=0,s=Math.floor(r)+"px",l=Math.floor(n)+"px"
o.width=i?l:s,o.height=i?s:l,e.setAttribute("data-main-rotation",a)}function _setAnnotationCanvasMap(e,t){if(t){var r,n=_createForOfIteratorHelper(t)
try{for(n.s();!(r=n.n()).done;){var a=_slicedToArray(r.value,2),o=a[0],i=a[1],s=e.querySelector('[data-annotation-id="'.concat(o,'"]'))
if(s){var l=s.firstChild
l?"CANVAS"===l.nodeName?l.replaceWith(i):l.before(i):s.append(i)}}}catch(e){n.e(e)}finally{n.f()}t.clear()}}t.AnnotationLayer=D},function(e,t){function makeColorComp(e){return Math.floor(255*Math.max(0,Math.min(1,e))).toString(16).padStart(2,"0")}Object.defineProperty(t,"__esModule",{value:!0}),t.ColorConverters=void 0
var r=function(){return _createClass(function ColorConverters(){_classCallCheck(this,ColorConverters)},null,[{key:"CMYK_G",value:function CMYK_G(e){var t=_slicedToArray(e,4),r=t[0],n=t[1],a=t[2],o=t[3]
return["G",1-Math.min(1,.3*r+.59*a+.11*n+o)]}},{key:"G_CMYK",value:function G_CMYK(e){return["CMYK",0,0,0,1-_slicedToArray(e,1)[0]]}},{key:"G_RGB",value:function G_RGB(e){var t=_slicedToArray(e,1)[0]
return["RGB",t,t,t]}},{key:"G_HTML",value:function G_HTML(e){var t=makeColorComp(_slicedToArray(e,1)[0])
return"#".concat(t).concat(t).concat(t)}},{key:"RGB_G",value:function RGB_G(e){var t=_slicedToArray(e,3)
return["G",.3*t[0]+.59*t[1]+.11*t[2]]}},{key:"RGB_HTML",value:function RGB_HTML(e){var t=_slicedToArray(e,3),r=t[0],n=t[1],a=t[2],o=makeColorComp(r),i=makeColorComp(n),s=makeColorComp(a)
return"#".concat(o).concat(i).concat(s)}},{key:"T_HTML",value:function T_HTML(){return"#00000000"}},{key:"CMYK_RGB",value:function CMYK_RGB(e){var t=_slicedToArray(e,4),r=t[0],n=t[1],a=t[2],o=t[3]
return["RGB",1-Math.min(1,r+o),1-Math.min(1,a+o),1-Math.min(1,n+o)]}},{key:"CMYK_HTML",value:function CMYK_HTML(e){var t=this.CMYK_RGB(e).slice(1)
return this.RGB_HTML(t)}},{key:"RGB_CMYK",value:function RGB_CMYK(e){var t=_slicedToArray(e,3),r=1-t[0],n=1-t[1],a=1-t[2]
return["CMYK",r,n,a,Math.min(r,n,a)]}}])}()
t.ColorConverters=r},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.XfaLayer=void 0
var n=r(20),a=function(){return _createClass(function XfaLayer(){_classCallCheck(this,XfaLayer)},null,[{key:"setupStorage",value:function setupStorage(e,t,r,n,a){var o=n.getValue(t,{value:null})
switch(r.name){case"textarea":if(null!==o.value&&(e.textContent=o.value),"print"===a)break
e.addEventListener("input",function(e){n.setValue(t,{value:e.target.value})})
break
case"input":if("radio"===r.attributes.type||"checkbox"===r.attributes.type){if(o.value===r.attributes.xfaOn?e.setAttribute("checked",!0):o.value===r.attributes.xfaOff&&e.removeAttribute("checked"),"print"===a)break
e.addEventListener("change",function(e){n.setValue(t,{value:e.target.checked?e.target.getAttribute("xfaOn"):e.target.getAttribute("xfaOff")})})}else{if(null!==o.value&&e.setAttribute("value",o.value),"print"===a)break
e.addEventListener("input",function(e){n.setValue(t,{value:e.target.value})})}break
case"select":if(null!==o.value){var i,s=_createForOfIteratorHelper(r.children)
try{for(s.s();!(i=s.n()).done;){var l=i.value
l.attributes.value===o.value&&(l.attributes.selected=!0)}}catch(e){s.e(e)}finally{s.f()}}e.addEventListener("input",function(e){var r=e.target.options,a=-1===r.selectedIndex?"":r[r.selectedIndex].value
n.setValue(t,{value:a})})}}},{key:"setAttributes",value:function setAttributes(e){var t=e.html,r=e.element,n=e.storage,a=void 0===n?null:n,o=e.intent,i=e.linkService,s=r.attributes,l=t instanceof HTMLAnchorElement
"radio"===s.type&&(s.name="".concat(s.name,"-").concat(o))
for(var c=0,u=Object.entries(s);c<u.length;c++){var d=_slicedToArray(u[c],2),h=d[0],p=d[1]
if(null!=p)switch(h){case"class":p.length&&t.setAttribute(h,p.join(" "))
break
case"dataId":break
case"id":t.setAttribute("data-element-id",p)
break
case"style":Object.assign(t.style,p)
break
case"textContent":t.textContent=p
break
default:(!l||"href"!==h&&"newWindow"!==h)&&t.setAttribute(h,p)}}l&&i.addLinkAttributes(t,s.href,s.newWindow),a&&s.dataId&&this.setupStorage(t,s.dataId,r,a)}},{key:"render",value:function render(e){var t=e.annotationStorage,r=e.linkService,a=e.xfaHtml,o=e.intent||"display",i=document.createElement(a.name)
a.attributes&&this.setAttributes({html:i,element:a,intent:o,linkService:r})
var s=[[a,-1,i]],l=e.div
if(l.append(i),e.viewport){var c="matrix(".concat(e.viewport.transform.join(","),")")
l.style.transform=c}"richText"!==o&&l.setAttribute("class","xfaLayer xfaFont")
for(var u=[];s.length>0;){var d,h=_slicedToArray(s.at(-1),3),p=h[0],f=h[1],v=h[2]
if(f+1!==p.children.length){var m=p.children[++s.at(-1)[1]]
if(null!==m){var g=m.name
if("#text"!==g){var _=void 0
if(_=null!=m&&null!==(d=m.attributes)&&void 0!==d&&d.xmlns?document.createElementNS(m.attributes.xmlns,g):document.createElement(g),v.append(_),m.attributes&&this.setAttributes({html:_,element:m,storage:t,intent:o,linkService:r}),m.children&&m.children.length>0)s.push([m,-1,_])
else if(m.value){var b=document.createTextNode(m.value)
n.XfaText.shouldBuildText(g)&&u.push(b),_.append(b)}}else{var y=document.createTextNode(m.value)
u.push(y),v.append(y)}}}else s.pop()}var k,S=_createForOfIteratorHelper(l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
try{for(S.s();!(k=S.n()).done;){k.value.setAttribute("readOnly",!0)}}catch(e){S.e(e)}finally{S.f()}return{textDivs:u}}},{key:"update",value:function update(e){var t="matrix(".concat(e.viewport.transform.join(","),")")
e.div.style.transform=t,e.div.hidden=!1}}])}()
t.XfaLayer=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.TextLayerRenderTask=void 0,t.renderTextLayer=function renderTextLayer(e){var t=new u({textContent:e.textContent,textContentStream:e.textContentStream,container:e.container,viewport:e.viewport,textDivs:e.textDivs,textContentItemsStr:e.textContentItemsStr,enhanceTextSelection:e.enhanceTextSelection})
return t._render(e.timeout),t}
var n=r(1),a=r(8),o=1e5,i=30,s=.8,l=new Map,c=/^\s+$/g
function appendText(e,t,r,a){var o=document.createElement("span"),u=e._enhanceTextSelection?{angle:0,canvasWidth:0,hasText:""!==t.str,hasEOL:t.hasEOL,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1,fontSize:0}:{angle:0,canvasWidth:0,hasText:""!==t.str,hasEOL:t.hasEOL,fontSize:0}
e._textDivs.push(o)
var d=n.Util.transform(e._viewport.transform,t.transform),h=Math.atan2(d[1],d[0]),p=r[t.fontName]
p.vertical&&(h+=Math.PI/2)
var f,v,m=Math.hypot(d[2],d[3]),g=m*function getAscent(e,t){var r=l.get(e)
if(r)return r
t.save(),t.font="".concat(i,"px ").concat(e)
var n=t.measureText(""),a=n.fontBoundingBoxAscent,o=Math.abs(n.fontBoundingBoxDescent)
if(a){t.restore()
var c=a/(a+o)
return l.set(e,c),c}t.strokeStyle="red",t.clearRect(0,0,i,i),t.strokeText("g",0,0)
var u=t.getImageData(0,0,i,i).data
o=0
for(var d=u.length-1-3;d>=0;d-=4)if(u[d]>0){o=Math.ceil(d/4/i)
break}t.clearRect(0,0,i,i),t.strokeText("A",0,i),a=0
for(var h=0,p=(u=t.getImageData(0,0,i,i).data).length;h<p;h+=4)if(u[h]>0){a=i-Math.floor(h/4/i)
break}if(t.restore(),a){var f=a/(a+o)
return l.set(e,f),f}return l.set(e,s),s}(p.fontFamily,a)
0===h?(f=d[4],v=d[5]-g):(f=d[4]+g*Math.sin(h),v=d[5]-g*Math.cos(h)),o.style.left="".concat(f,"px"),o.style.top="".concat(v,"px"),o.style.fontSize="".concat(m,"px"),o.style.fontFamily=p.fontFamily,u.fontSize=m,o.setAttribute("role","presentation"),o.textContent=t.str,o.dir=t.dir,e._fontInspectorEnabled&&(o.dataset.fontName=t.fontName),0!==h&&(u.angle=h*(180/Math.PI))
var _=!1
if(t.str.length>1||e._enhanceTextSelection&&c.test(t.str))_=!0
else if(" "!==t.str&&t.transform[0]!==t.transform[3]){var b=Math.abs(t.transform[0]),y=Math.abs(t.transform[3])
b!==y&&Math.max(b,y)/Math.min(b,y)>1.5&&(_=!0)}if(_&&(p.vertical?u.canvasWidth=t.height*e._viewport.scale:u.canvasWidth=t.width*e._viewport.scale),e._textDivProperties.set(o,u),e._textContentStream&&e._layoutText(o),e._enhanceTextSelection&&u.hasText){var k=1,S=0
0!==h&&(k=Math.cos(h),S=Math.sin(h))
var C,P,E=(p.vertical?t.height:t.width)*e._viewport.scale,x=m
0!==h?(C=[k,S,-S,k,f,v],P=n.Util.getAxialAlignedBoundingBox([0,0,E,x],C)):P=[f,v,f+E,v+x],e._bounds.push({left:P[0],top:P[1],right:P[2],bottom:P[3],div:o,size:[E,x],m:C})}}function render(e){if(!e._canceled){var t=e._textDivs,r=e._capability,n=t.length
if(n>o)return e._renderingDone=!0,void r.resolve()
if(!e._textContentStream)for(var a=0;a<n;a++)e._layoutText(t[a])
e._renderingDone=!0,r.resolve()}}function findPositiveMin(e,t,r){for(var n=0,a=0;a<r;a++){var o=e[t++]
o>0&&(n=n?Math.min(o,n):o)}return n}function expand(e){for(var t=e._bounds,r=e._viewport,a=function expandBounds(e,t,r){var n=r.map(function(e,t){return{x1:e.left,y1:e.top,x2:e.right,y2:e.bottom,index:t,x1New:void 0,x2New:void 0}})
expandBoundsLTR(e,n)
var a,o=new Array(r.length),i=_createForOfIteratorHelper(n)
try{for(i.s();!(a=i.n()).done;){var s=a.value,l=s.index
o[l]={left:s.x1New,top:0,right:s.x2New,bottom:0}}}catch(e){i.e(e)}finally{i.f()}r.map(function(t,r){var a=o[r],i=n[r]
i.x1=t.top,i.y1=e-a.right,i.x2=t.bottom,i.y2=e-a.left,i.index=r,i.x1New=void 0,i.x2New=void 0}),expandBoundsLTR(t,n)
var c,u=_createForOfIteratorHelper(n)
try{for(u.s();!(c=u.n()).done;){var d=c.value,h=d.index
o[h].top=d.x1New,o[h].bottom=d.x2New}}catch(e){u.e(e)}finally{u.f()}return o}(r.width,r.height,t),o=0;o<a.length;o++){var i=t[o].div,s=e._textDivProperties.get(i)
if(0!==s.angle){for(var l=a[o],c=t[o],u=c.m,d=u[0],h=u[1],p=[[0,0],[0,c.size[1]],[c.size[0],0],c.size],f=new Float64Array(64),v=0,m=p.length;v<m;v++){var g=n.Util.applyTransform(p[v],u)
f[v+0]=d&&(l.left-g[0])/d,f[v+4]=h&&(l.top-g[1])/h,f[v+8]=d&&(l.right-g[0])/d,f[v+12]=h&&(l.bottom-g[1])/h,f[v+16]=h&&(l.left-g[0])/-h,f[v+20]=d&&(l.top-g[1])/d,f[v+24]=h&&(l.right-g[0])/-h,f[v+28]=d&&(l.bottom-g[1])/d,f[v+32]=d&&(l.left-g[0])/-d,f[v+36]=h&&(l.top-g[1])/-h,f[v+40]=d&&(l.right-g[0])/-d,f[v+44]=h&&(l.bottom-g[1])/-h,f[v+48]=h&&(l.left-g[0])/h,f[v+52]=d&&(l.top-g[1])/-d,f[v+56]=h&&(l.right-g[0])/h,f[v+60]=d&&(l.bottom-g[1])/-d}var _=1+Math.min(Math.abs(d),Math.abs(h))
s.paddingLeft=findPositiveMin(f,32,16)/_,s.paddingTop=findPositiveMin(f,48,16)/_,s.paddingRight=findPositiveMin(f,0,16)/_,s.paddingBottom=findPositiveMin(f,16,16)/_,e._textDivProperties.set(i,s)}else s.paddingLeft=t[o].left-a[o].left,s.paddingTop=t[o].top-a[o].top,s.paddingRight=a[o].right-t[o].right,s.paddingBottom=a[o].bottom-t[o].bottom,e._textDivProperties.set(i,s)}}function expandBoundsLTR(e,t){t.sort(function(e,t){return e.x1-t.x1||e.index-t.index})
var r,n=[{start:-1/0,end:1/0,boundary:{x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0}}],a=_createForOfIteratorHelper(t)
try{for(a.s();!(r=a.n()).done;){for(var o=r.value,i=0;i<n.length&&n[i].end<=o.y1;)i++
for(var s=n.length-1;s>=0&&n[s].start>=o.y2;)s--
var l=void 0,c=void 0,u=void 0,d=void 0,h=-1/0
for(u=i;u<=s;u++){c=(l=n[u]).boundary
var p=void 0;(p=c.x2>o.x1?c.index>o.index?c.x1New:o.x1:void 0===c.x2New?(c.x2+o.x1)/2:c.x2New)>h&&(h=p)}for(o.x1New=h,u=i;u<=s;u++)void 0===(c=(l=n[u]).boundary).x2New?c.x2>o.x1?c.index>o.index&&(c.x2New=c.x2):c.x2New=h:c.x2New>h&&(c.x2New=Math.max(h,c.x2))
var f=[],v=null
for(u=i;u<=s;u++){var m=(c=(l=n[u]).boundary).x2>o.x2?c:o
v===m?f.at(-1).end=l.end:(f.push({start:l.start,end:l.end,boundary:m}),v=m)}for(n[i].start<o.y1&&(f[0].start=o.y1,f.unshift({start:n[i].start,end:o.y1,boundary:n[i].boundary})),o.y2<n[s].end&&(f.at(-1).end=o.y2,f.push({start:o.y2,end:n[s].end,boundary:n[s].boundary})),u=i;u<=s;u++)if(void 0===(c=(l=n[u]).boundary).x2New){var g=!1
for(d=i-1;!g&&d>=0&&n[d].start>=c.y1;d--)g=n[d].boundary===c
for(d=s+1;!g&&d<n.length&&n[d].end<=c.y2;d++)g=n[d].boundary===c
for(d=0;!g&&d<f.length;d++)g=f[d].boundary===c
g||(c.x2New=h)}Array.prototype.splice.apply(n,[i,s-i+1].concat(f))}}catch(e){a.e(e)}finally{a.f()}for(var _=0,b=n;_<b.length;_++){var y=b[_].boundary
void 0===y.x2New&&(y.x2New=Math.max(e,y.x2))}}var u=function(){return _createClass(function TextLayerRenderTask(e){var t,r=this,o=e.textContent,i=e.textContentStream,s=e.container,l=e.viewport,c=e.textDivs,u=e.textContentItemsStr,d=e.enhanceTextSelection
_classCallCheck(this,TextLayerRenderTask),d&&(0,a.deprecated)("The `enhanceTextSelection` functionality will be removed in the future."),this._textContent=o,this._textContentStream=i,this._container=s,this._document=s.ownerDocument,this._viewport=l,this._textDivs=c||[],this._textContentItemsStr=u||[],this._enhanceTextSelection=!!d,this._fontInspectorEnabled=!(null===(t=globalThis.FontInspector)||void 0===t||!t.enabled),this._reader=null,this._layoutTextLastFontSize=null,this._layoutTextLastFontFamily=null,this._layoutTextCtx=null,this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=(0,n.createPromiseCapability)(),this._renderTimer=null,this._bounds=[],this._devicePixelRatio=globalThis.devicePixelRatio||1,this._capability.promise.finally(function(){r._enhanceTextSelection||(r._textDivProperties=null),r._layoutTextCtx&&(r._layoutTextCtx.canvas.width=0,r._layoutTextCtx.canvas.height=0,r._layoutTextCtx=null)}).catch(function(){})},[{key:"promise",get:function get(){return this._capability.promise}},{key:"cancel",value:function cancel(){this._canceled=!0,this._reader&&(this._reader.cancel(new n.AbortException("TextLayer task cancelled.")).catch(function(){}),this._reader=null),null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject(new Error("TextLayer task cancelled."))}},{key:"_processItems",value:function _processItems(e,t){for(var r=0,n=e.length;r<n;r++)if(void 0!==e[r].str)this._textContentItemsStr.push(e[r].str),appendText(this,e[r],t,this._layoutTextCtx)
else if("beginMarkedContentProps"===e[r].type||"beginMarkedContent"===e[r].type){var a=this._container
this._container=document.createElement("span"),this._container.classList.add("markedContent"),null!==e[r].id&&this._container.setAttribute("id","".concat(e[r].id)),a.append(this._container)}else"endMarkedContent"===e[r].type&&(this._container=this._container.parentNode)}},{key:"_layoutText",value:function _layoutText(e){var t=this._textDivProperties.get(e),r=""
if(0!==t.canvasWidth&&t.hasText){var n=e.style.fontFamily,a=t.fontSize
a===this._layoutTextLastFontSize&&n===this._layoutTextLastFontFamily||(this._layoutTextCtx.font="".concat(a*this._devicePixelRatio,"px ").concat(n),this._layoutTextLastFontSize=a,this._layoutTextLastFontFamily=n)
var o=this._layoutTextCtx.measureText(e.textContent).width
if(o>0){var i=this._devicePixelRatio*t.canvasWidth/o
this._enhanceTextSelection&&(t.scale=i),r="scaleX(".concat(i,")")}}if(0!==t.angle&&(r="rotate(".concat(t.angle,"deg) ").concat(r)),r.length>0&&(this._enhanceTextSelection&&(t.originalTransform=r),e.style.transform=r),t.hasText&&this._container.append(e),t.hasEOL){var s=document.createElement("br")
s.setAttribute("role","presentation"),this._container.append(s)}}},{key:"_render",value:function _render(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=(0,n.createPromiseCapability)(),a=Object.create(null),o=this._document.createElement("canvas")
if(o.height=o.width=i,this._layoutTextCtx=o.getContext("2d",{alpha:!1}),this._textContent){var s=this._textContent.items,l=this._textContent.styles
this._processItems(s,l),r.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.')
var c=function pump(){e._reader.read().then(function(t){var n=t.value
t.done?r.resolve():(Object.assign(a,n.styles),e._processItems(n.items,a),c())},r.reject)}
this._reader=this._textContentStream.getReader(),c()}r.promise.then(function(){a=null,t?e._renderTimer=setTimeout(function(){render(e),e._renderTimer=null},t):render(e)},this._capability.reject)}},{key:"expandTextDivs",value:function expandTextDivs(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(expand(this),this._bounds=null)
for(var t=[],r=[],n=0,a=this._textDivs.length;n<a;n++){var o=this._textDivs[n],i=this._textDivProperties.get(o)
i.hasText&&(e?(t.length=0,r.length=0,i.originalTransform&&t.push(i.originalTransform),i.paddingTop>0?(r.push("".concat(i.paddingTop,"px")),t.push("translateY(".concat(-i.paddingTop,"px)"))):r.push(0),i.paddingRight>0?r.push("".concat(i.paddingRight/i.scale,"px")):r.push(0),i.paddingBottom>0?r.push("".concat(i.paddingBottom,"px")):r.push(0),i.paddingLeft>0?(r.push("".concat(i.paddingLeft/i.scale,"px")),t.push("translateX(".concat(-i.paddingLeft/i.scale,"px)"))):r.push(0),o.style.padding=r.join(" "),t.length&&(o.style.transform=t.join(" "))):(o.style.padding=null,o.style.transform=i.originalTransform))}}}}])}()
t.TextLayerRenderTask=u},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.SVGGraphics=void 0
var n=r(8),a=r(1),o=r(3),i=_createClass(function SVGGraphics(){_classCallCheck(this,SVGGraphics),(0,a.unreachable)("Not implemented: SVGGraphics")})
t.SVGGraphics=i
var s=function pf(e){if(Number.isInteger(e))return e.toString()
var t=e.toFixed(10),r=t.length-1
if("0"!==t[r])return t
do{r--}while("0"===t[r])
return t.substring(0,"."===t[r]?r:r+1)},l=function pm(e){if(0===e[4]&&0===e[5]){if(0===e[1]&&0===e[2])return 1===e[0]&&1===e[3]?"":"scale(".concat(s(e[0])," ").concat(s(e[3]),")")
if(e[0]===e[3]&&e[1]===-e[2]){var t=180*Math.acos(e[0])/Math.PI
return"rotate(".concat(s(t),")")}}else if(1===e[0]&&0===e[1]&&0===e[2]&&1===e[3])return"translate(".concat(s(e[4])," ").concat(s(e[5]),")")
return"matrix(".concat(s(e[0])," ").concat(s(e[1])," ").concat(s(e[2])," ").concat(s(e[3])," ").concat(s(e[4])," ")+"".concat(s(e[5]),")")},c={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},u=["butt","round","square"],d=["miter","round","bevel"],h=function createObjectURL(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(URL.createObjectURL&&"undefined"!=typeof Blob&&!r)return URL.createObjectURL(new Blob([e],{type:t}))
for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a="data:".concat(t,";base64,"),o=0,i=e.length;o<i;o+=3){var s=255&e[o],l=255&e[o+1],c=255&e[o+2]
a+=n[s>>2]+n[(3&s)<<4|l>>4]+n[o+1<i?(15&l)<<2|c>>6:64]+n[o+2<i?63&c:64]}return a},p=function(){for(var e=new Uint8Array([137,80,78,71,13,10,26,10]),t=12,r=new Int32Array(256),n=0;n<256;n++){for(var i=n,s=0;s<8;s++)i=1&i?3988292384^i>>1&2147483647:i>>1&2147483647
r[n]=i}function writePngChunk(e,t,n,a){var o=a,i=t.length
n[o]=i>>24&255,n[o+1]=i>>16&255,n[o+2]=i>>8&255,n[o+3]=255&i,n[o+=4]=255&e.charCodeAt(0),n[o+1]=255&e.charCodeAt(1),n[o+2]=255&e.charCodeAt(2),n[o+3]=255&e.charCodeAt(3),o+=4,n.set(t,o)
var s=function crc32(e,t,n){for(var a=-1,o=t;o<n;o++){var i=255&(a^e[o])
a=a>>>8^r[i]}return-1^a}(n,a+4,o+=t.length)
n[o]=s>>24&255,n[o+1]=s>>16&255,n[o+2]=s>>8&255,n[o+3]=255&s}function deflateSyncUncompressed(e){var t=e.length,r=Math.ceil(t/65535),n=new Uint8Array(2+t+5*r+4),a=0
n[a++]=120,n[a++]=156
for(var o=0;t>65535;)n[a++]=0,n[a++]=255,n[a++]=255,n[a++]=0,n[a++]=0,n.set(e.subarray(o,o+65535),a),a+=65535,o+=65535,t-=65535
n[a++]=1,n[a++]=255&t,n[a++]=t>>8&255,n[a++]=255&~t,n[a++]=(65535&~t)>>8&255,n.set(e.subarray(o),a),a+=e.length-o
var i=function adler32(e,t,r){for(var n=1,a=0,o=t;o<r;++o)a=(a+(n=(n+(255&e[o]))%65521))%65521
return a<<16|n}(e,0,e.length)
return n[a++]=i>>24&255,n[a++]=i>>16&255,n[a++]=i>>8&255,n[a++]=255&i,n}function encode(r,n,i,s){var l,c,u,d=r.width,p=r.height,f=r.data
switch(n){case a.ImageKind.GRAYSCALE_1BPP:c=0,l=1,u=d+7>>3
break
case a.ImageKind.RGB_24BPP:c=2,l=8,u=3*d
break
case a.ImageKind.RGBA_32BPP:c=6,l=8,u=4*d
break
default:throw new Error("invalid format")}for(var v=new Uint8Array((1+u)*p),m=0,g=0,_=0;_<p;++_)v[m++]=0,v.set(f.subarray(g,g+u),m),g+=u,m+=u
if(n===a.ImageKind.GRAYSCALE_1BPP&&s){m=0
for(var b=0;b<p;b++){m++
for(var y=0;y<u;y++)v[m++]^=255}}var k=new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,p>>24&255,p>>16&255,p>>8&255,255&p,l,c,0,0,0]),S=function deflateSync(e){if(!o.isNodeJS)return deflateSyncUncompressed(e)
try{var t
t=parseInt(process.versions.node)>=8?e:Buffer.from(e)
var r=__webpack_require__(3).deflateSync(t,{level:9})
return r instanceof Uint8Array?r:new Uint8Array(r)}catch(e){(0,a.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+e)}return deflateSyncUncompressed(e)}(v),C=e.length+3*t+k.length+S.length,P=new Uint8Array(C),E=0
return P.set(e,E),writePngChunk("IHDR",k,P,E+=e.length),writePngChunk("IDATA",S,P,E+=t+k.length),E+=t+S.length,writePngChunk("IEND",new Uint8Array(0),P,E),h(P,"image/png",i)}return function convertImgDataToPng(e,t,r){return encode(e,void 0===e.kind?a.ImageKind.GRAYSCALE_1BPP:e.kind,t,r)}}(),f=function(){return _createClass(function SVGExtraState(){_classCallCheck(this,SVGExtraState),this.fontSizeScale=1,this.fontWeight=c.fontWeight,this.fontSize=0,this.textMatrix=a.IDENTITY_MATRIX,this.fontMatrix=a.FONT_IDENTITY_MATRIX,this.leading=0,this.textRenderingMode=a.TextRenderingMode.FILL,this.textMatrixScale=1,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=c.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null,this.maskId=""},[{key:"clone",value:function clone(){return Object.create(this)}},{key:"setCurrentPoint",value:function setCurrentPoint(e,t){this.x=e,this.y=t}}])}(),v=0,m=0,g=0
t.SVGGraphics=i=function(){return _createClass(function SVGGraphics(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
for(var o in _classCallCheck(this,SVGGraphics),(0,n.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."),this.svgFactory=new n.DOMSVGFactory,this.current=new f,this.transformMatrix=a.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=e,this.objs=t,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!r,this._operatorIdMapping=[],a.OPS)this._operatorIdMapping[a.OPS[o]]=o},[{key:"save",value:function save(){this.transformStack.push(this.transformMatrix)
var e=this.current
this.extraStack.push(e),this.current=e.clone()}},{key:"restore",value:function restore(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null}},{key:"group",value:function group(e){this.save(),this.executeOpTree(e),this.restore()}},{key:"loadDependencies",value:function loadDependencies(e){for(var t=this,r=e.fnArray,n=e.argsArray,o=0,i=r.length;o<i;o++)if(r[o]===a.OPS.dependency){var s,l=_createForOfIteratorHelper(n[o])
try{var c=function _loop3(){var e=s.value,r=e.startsWith("g_")?t.commonObjs:t.objs,n=new Promise(function(t){r.get(e,t)})
t.current.dependencies.push(n)}
for(l.s();!(s=l.n()).done;)c()}catch(e){l.e(e)}finally{l.f()}}return Promise.all(this.current.dependencies)}},{key:"transform",value:function transform(e,t,r,n,o,i){var s=[e,t,r,n,o,i]
this.transformMatrix=a.Util.transform(this.transformMatrix,s),this.tgrp=null}},{key:"getSVG",value:function getSVG(e,t){var r=this
this.viewport=t
var n=this._initialize(t)
return this.loadDependencies(e).then(function(){return r.transformMatrix=a.IDENTITY_MATRIX,r.executeOpTree(r.convertOpList(e)),n})}},{key:"convertOpList",value:function convertOpList(e){for(var t=this._operatorIdMapping,r=e.argsArray,n=e.fnArray,a=[],o=0,i=n.length;o<i;o++){var s=n[o]
a.push({fnId:s,fn:t[s],args:r[o]})}return function opListToTree(e){var t,r=[],n=[],a=_createForOfIteratorHelper(e)
try{for(a.s();!(t=a.n()).done;){var o=t.value
"save"!==o.fn?"restore"===o.fn?r=n.pop():r.push(o):(r.push({fnId:92,fn:"group",items:[]}),n.push(r),r=r.at(-1).items)}}catch(e){a.e(e)}finally{a.f()}return r}(a)}},{key:"executeOpTree",value:function executeOpTree(e){var t,r=_createForOfIteratorHelper(e)
try{for(r.s();!(t=r.n()).done;){var n=t.value,o=n.fn,i=n.fnId,s=n.args
switch(0|i){case a.OPS.beginText:this.beginText()
break
case a.OPS.dependency:break
case a.OPS.setLeading:this.setLeading(s)
break
case a.OPS.setLeadingMoveText:this.setLeadingMoveText(s[0],s[1])
break
case a.OPS.setFont:this.setFont(s)
break
case a.OPS.showText:case a.OPS.showSpacedText:this.showText(s[0])
break
case a.OPS.endText:this.endText()
break
case a.OPS.moveText:this.moveText(s[0],s[1])
break
case a.OPS.setCharSpacing:this.setCharSpacing(s[0])
break
case a.OPS.setWordSpacing:this.setWordSpacing(s[0])
break
case a.OPS.setHScale:this.setHScale(s[0])
break
case a.OPS.setTextMatrix:this.setTextMatrix(s[0],s[1],s[2],s[3],s[4],s[5])
break
case a.OPS.setTextRise:this.setTextRise(s[0])
break
case a.OPS.setTextRenderingMode:this.setTextRenderingMode(s[0])
break
case a.OPS.setLineWidth:this.setLineWidth(s[0])
break
case a.OPS.setLineJoin:this.setLineJoin(s[0])
break
case a.OPS.setLineCap:this.setLineCap(s[0])
break
case a.OPS.setMiterLimit:this.setMiterLimit(s[0])
break
case a.OPS.setFillRGBColor:this.setFillRGBColor(s[0],s[1],s[2])
break
case a.OPS.setStrokeRGBColor:this.setStrokeRGBColor(s[0],s[1],s[2])
break
case a.OPS.setStrokeColorN:this.setStrokeColorN(s)
break
case a.OPS.setFillColorN:this.setFillColorN(s)
break
case a.OPS.shadingFill:this.shadingFill(s[0])
break
case a.OPS.setDash:this.setDash(s[0],s[1])
break
case a.OPS.setRenderingIntent:this.setRenderingIntent(s[0])
break
case a.OPS.setFlatness:this.setFlatness(s[0])
break
case a.OPS.setGState:this.setGState(s[0])
break
case a.OPS.fill:this.fill()
break
case a.OPS.eoFill:this.eoFill()
break
case a.OPS.stroke:this.stroke()
break
case a.OPS.fillStroke:this.fillStroke()
break
case a.OPS.eoFillStroke:this.eoFillStroke()
break
case a.OPS.clip:this.clip("nonzero")
break
case a.OPS.eoClip:this.clip("evenodd")
break
case a.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask()
break
case a.OPS.paintImageXObject:this.paintImageXObject(s[0])
break
case a.OPS.paintInlineImageXObject:this.paintInlineImageXObject(s[0])
break
case a.OPS.paintImageMaskXObject:this.paintImageMaskXObject(s[0])
break
case a.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(s[0],s[1])
break
case a.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd()
break
case a.OPS.closePath:this.closePath()
break
case a.OPS.closeStroke:this.closeStroke()
break
case a.OPS.closeFillStroke:this.closeFillStroke()
break
case a.OPS.closeEOFillStroke:this.closeEOFillStroke()
break
case a.OPS.nextLine:this.nextLine()
break
case a.OPS.transform:this.transform(s[0],s[1],s[2],s[3],s[4],s[5])
break
case a.OPS.constructPath:this.constructPath(s[0],s[1])
break
case a.OPS.endPath:this.endPath()
break
case 92:this.group(n.items)
break
default:(0,a.warn)("Unimplemented operator ".concat(o))}}}catch(e){r.e(e)}finally{r.f()}}},{key:"setWordSpacing",value:function setWordSpacing(e){this.current.wordSpacing=e}},{key:"setCharSpacing",value:function setCharSpacing(e){this.current.charSpacing=e}},{key:"nextLine",value:function nextLine(){this.moveText(0,this.current.leading)}},{key:"setTextMatrix",value:function setTextMatrix(e,t,r,n,a,o){var i=this.current
i.textMatrix=i.lineMatrix=[e,t,r,n,a,o],i.textMatrixScale=Math.hypot(e,t),i.x=i.lineX=0,i.y=i.lineY=0,i.xcoords=[],i.ycoords=[],i.tspan=this.svgFactory.createElement("svg:tspan"),i.tspan.setAttributeNS(null,"font-family",i.fontFamily),i.tspan.setAttributeNS(null,"font-size","".concat(s(i.fontSize),"px")),i.tspan.setAttributeNS(null,"y",s(-i.y)),i.txtElement=this.svgFactory.createElement("svg:text"),i.txtElement.append(i.tspan)}},{key:"beginText",value:function beginText(){var e=this.current
e.x=e.lineX=0,e.y=e.lineY=0,e.textMatrix=a.IDENTITY_MATRIX,e.lineMatrix=a.IDENTITY_MATRIX,e.textMatrixScale=1,e.tspan=this.svgFactory.createElement("svg:tspan"),e.txtElement=this.svgFactory.createElement("svg:text"),e.txtgrp=this.svgFactory.createElement("svg:g"),e.xcoords=[],e.ycoords=[]}},{key:"moveText",value:function moveText(e,t){var r=this.current
r.x=r.lineX+=e,r.y=r.lineY+=t,r.xcoords=[],r.ycoords=[],r.tspan=this.svgFactory.createElement("svg:tspan"),r.tspan.setAttributeNS(null,"font-family",r.fontFamily),r.tspan.setAttributeNS(null,"font-size","".concat(s(r.fontSize),"px")),r.tspan.setAttributeNS(null,"y",s(-r.y))}},{key:"showText",value:function showText(e){var t=this.current,r=t.font,n=t.fontSize
if(0!==n){var o,i=t.fontSizeScale,u=t.charSpacing,d=t.wordSpacing,h=t.fontDirection,p=t.textHScale*h,f=r.vertical,v=f?1:-1,m=r.defaultVMetrics,g=n*t.fontMatrix[0],_=0,b=_createForOfIteratorHelper(e)
try{for(b.s();!(o=b.n()).done;){var y=o.value
if(null!==y)if("number"!=typeof y){var k=(y.isSpace?d:0)+u,S=y.fontChar,C=void 0,P=void 0,E=y.width
if(f){var x=void 0,w=y.vmetric||m
x=-(x=y.vmetric?w[1]:.5*E)*g
var A=w[2]*g
E=w?-w[0]:E,C=x/i,P=(_+A)/i}else C=_/i,P=0;(y.isInFont||r.missingFile)&&(t.xcoords.push(t.x+C),f&&t.ycoords.push(-t.y+P),t.tspan.textContent+=S)
_+=f?E*g-k*h:E*g+k*h}else _+=v*y*n/1e3
else _+=h*d}}catch(e){b.e(e)}finally{b.f()}t.tspan.setAttributeNS(null,"x",t.xcoords.map(s).join(" ")),f?t.tspan.setAttributeNS(null,"y",t.ycoords.map(s).join(" ")):t.tspan.setAttributeNS(null,"y",s(-t.y)),f?t.y-=_:t.x+=_*p,t.tspan.setAttributeNS(null,"font-family",t.fontFamily),t.tspan.setAttributeNS(null,"font-size","".concat(s(t.fontSize),"px")),t.fontStyle!==c.fontStyle&&t.tspan.setAttributeNS(null,"font-style",t.fontStyle),t.fontWeight!==c.fontWeight&&t.tspan.setAttributeNS(null,"font-weight",t.fontWeight)
var F=t.textRenderingMode&a.TextRenderingMode.FILL_STROKE_MASK
if(F===a.TextRenderingMode.FILL||F===a.TextRenderingMode.FILL_STROKE?(t.fillColor!==c.fillColor&&t.tspan.setAttributeNS(null,"fill",t.fillColor),t.fillAlpha<1&&t.tspan.setAttributeNS(null,"fill-opacity",t.fillAlpha)):t.textRenderingMode===a.TextRenderingMode.ADD_TO_PATH?t.tspan.setAttributeNS(null,"fill","transparent"):t.tspan.setAttributeNS(null,"fill","none"),F===a.TextRenderingMode.STROKE||F===a.TextRenderingMode.FILL_STROKE){var M=1/(t.textMatrixScale||1)
this._setStrokeAttributes(t.tspan,M)}var T=t.textMatrix
0!==t.textRise&&((T=T.slice())[5]+=t.textRise),t.txtElement.setAttributeNS(null,"transform","".concat(l(T)," scale(").concat(s(p),", -1)")),t.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.txtElement.append(t.tspan),t.txtgrp.append(t.txtElement),this._ensureTransformGroup().append(t.txtElement)}}},{key:"setLeadingMoveText",value:function setLeadingMoveText(e,t){this.setLeading(-t),this.moveText(e,t)}},{key:"addFontStyle",value:function addFontStyle(e){if(!e.data)throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.')
this.cssStyle||(this.cssStyle=this.svgFactory.createElement("svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.append(this.cssStyle))
var t=h(e.data,e.mimetype,this.forceDataSchema)
this.cssStyle.textContent+='@font-face { font-family: "'.concat(e.loadedName,'";')+" src: url(".concat(t,"); }\n")}},{key:"setFont",value:function setFont(e){var t=this.current,r=this.commonObjs.get(e[0]),n=e[1]
t.font=r,!this.embedFonts||r.missingFile||this.embeddedFonts[r.loadedName]||(this.addFontStyle(r),this.embeddedFonts[r.loadedName]=r),t.fontMatrix=r.fontMatrix||a.FONT_IDENTITY_MATRIX
var o="normal"
r.black?o="900":r.bold&&(o="bold")
var i=r.italic?"italic":"normal"
n<0?(n=-n,t.fontDirection=-1):t.fontDirection=1,t.fontSize=n,t.fontFamily=r.loadedName,t.fontWeight=o,t.fontStyle=i,t.tspan=this.svgFactory.createElement("svg:tspan"),t.tspan.setAttributeNS(null,"y",s(-t.y)),t.xcoords=[],t.ycoords=[]}},{key:"endText",value:function endText(){var e,t=this.current
t.textRenderingMode&a.TextRenderingMode.ADD_TO_PATH_FLAG&&null!==(e=t.txtElement)&&void 0!==e&&e.hasChildNodes()&&(t.element=t.txtElement,this.clip("nonzero"),this.endPath())}},{key:"setLineWidth",value:function setLineWidth(e){e>0&&(this.current.lineWidth=e)}},{key:"setLineCap",value:function setLineCap(e){this.current.lineCap=u[e]}},{key:"setLineJoin",value:function setLineJoin(e){this.current.lineJoin=d[e]}},{key:"setMiterLimit",value:function setMiterLimit(e){this.current.miterLimit=e}},{key:"setStrokeAlpha",value:function setStrokeAlpha(e){this.current.strokeAlpha=e}},{key:"setStrokeRGBColor",value:function setStrokeRGBColor(e,t,r){this.current.strokeColor=a.Util.makeHexColor(e,t,r)}},{key:"setFillAlpha",value:function setFillAlpha(e){this.current.fillAlpha=e}},{key:"setFillRGBColor",value:function setFillRGBColor(e,t,r){this.current.fillColor=a.Util.makeHexColor(e,t,r),this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.xcoords=[],this.current.ycoords=[]}},{key:"setStrokeColorN",value:function setStrokeColorN(e){this.current.strokeColor=this._makeColorN_Pattern(e)}},{key:"setFillColorN",value:function setFillColorN(e){this.current.fillColor=this._makeColorN_Pattern(e)}},{key:"shadingFill",value:function shadingFill(e){var t=this.viewport.width,r=this.viewport.height,n=a.Util.inverseTransform(this.transformMatrix),o=a.Util.applyTransform([0,0],n),i=a.Util.applyTransform([0,r],n),s=a.Util.applyTransform([t,0],n),l=a.Util.applyTransform([t,r],n),c=Math.min(o[0],i[0],s[0],l[0]),u=Math.min(o[1],i[1],s[1],l[1]),d=Math.max(o[0],i[0],s[0],l[0]),h=Math.max(o[1],i[1],s[1],l[1]),p=this.svgFactory.createElement("svg:rect")
p.setAttributeNS(null,"x",c),p.setAttributeNS(null,"y",u),p.setAttributeNS(null,"width",d-c),p.setAttributeNS(null,"height",h-u),p.setAttributeNS(null,"fill",this._makeShadingPattern(e)),this.current.fillAlpha<1&&p.setAttributeNS(null,"fill-opacity",this.current.fillAlpha),this._ensureTransformGroup().append(p)}},{key:"_makeColorN_Pattern",value:function _makeColorN_Pattern(e){return"TilingPattern"===e[0]?this._makeTilingPattern(e):this._makeShadingPattern(e)}},{key:"_makeTilingPattern",value:function _makeTilingPattern(e){var t=e[1],r=e[2],n=e[3]||a.IDENTITY_MATRIX,o=_slicedToArray(e[4],4),i=o[0],s=o[1],l=o[2],c=o[3],u=e[5],d=e[6],h=e[7],p="shading".concat(g++),f=_slicedToArray(a.Util.normalizeRect([].concat(_toConsumableArray(a.Util.applyTransform([i,s],n)),_toConsumableArray(a.Util.applyTransform([l,c],n)))),4),v=f[0],m=f[1],_=f[2],b=f[3],y=_slicedToArray(a.Util.singularValueDecompose2dScale(n),2),k=u*y[0],S=d*y[1],C=this.svgFactory.createElement("svg:pattern")
C.setAttributeNS(null,"id",p),C.setAttributeNS(null,"patternUnits","userSpaceOnUse"),C.setAttributeNS(null,"width",k),C.setAttributeNS(null,"height",S),C.setAttributeNS(null,"x","".concat(v)),C.setAttributeNS(null,"y","".concat(m))
var P=this.svg,E=this.transformMatrix,x=this.current.fillColor,w=this.current.strokeColor,A=this.svgFactory.create(_-v,b-m)
if(this.svg=A,this.transformMatrix=n,2===h){var F,M=(F=a.Util).makeHexColor.apply(F,_toConsumableArray(t))
this.current.fillColor=M,this.current.strokeColor=M}return this.executeOpTree(this.convertOpList(r)),this.svg=P,this.transformMatrix=E,this.current.fillColor=x,this.current.strokeColor=w,C.append(A.childNodes[0]),this.defs.append(C),"url(#".concat(p,")")}},{key:"_makeShadingPattern",value:function _makeShadingPattern(e){switch("string"==typeof e&&(e=this.objs.get(e)),e[0]){case"RadialAxial":var t,r="shading".concat(g++),n=e[3]
switch(e[1]){case"axial":var o=e[4],i=e[5];(t=this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"x1",o[0]),t.setAttributeNS(null,"y1",o[1]),t.setAttributeNS(null,"x2",i[0]),t.setAttributeNS(null,"y2",i[1])
break
case"radial":var s=e[4],l=e[5],c=e[6],u=e[7];(t=this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"cx",l[0]),t.setAttributeNS(null,"cy",l[1]),t.setAttributeNS(null,"r",u),t.setAttributeNS(null,"fx",s[0]),t.setAttributeNS(null,"fy",s[1]),t.setAttributeNS(null,"fr",c)
break
default:throw new Error("Unknown RadialAxial type: ".concat(e[1]))}var d,h=_createForOfIteratorHelper(n)
try{for(h.s();!(d=h.n()).done;){var p=d.value,f=this.svgFactory.createElement("svg:stop")
f.setAttributeNS(null,"offset",p[0]),f.setAttributeNS(null,"stop-color",p[1]),t.append(f)}}catch(e){h.e(e)}finally{h.f()}return this.defs.append(t),"url(#".concat(r,")")
case"Mesh":return(0,a.warn)("Unimplemented pattern Mesh"),null
case"Dummy":return"hotpink"
default:throw new Error("Unknown IR type: ".concat(e[0]))}}},{key:"setDash",value:function setDash(e,t){this.current.dashArray=e,this.current.dashPhase=t}},{key:"constructPath",value:function constructPath(e,t){var r,n=this.current,o=n.x,i=n.y,l=[],c=0,u=_createForOfIteratorHelper(e)
try{for(u.s();!(r=u.n()).done;){switch(0|r.value){case a.OPS.rectangle:o=t[c++],i=t[c++]
var d=t[c++],h=t[c++],p=o+d,f=i+h
l.push("M",s(o),s(i),"L",s(p),s(i),"L",s(p),s(f),"L",s(o),s(f),"Z")
break
case a.OPS.moveTo:o=t[c++],i=t[c++],l.push("M",s(o),s(i))
break
case a.OPS.lineTo:o=t[c++],i=t[c++],l.push("L",s(o),s(i))
break
case a.OPS.curveTo:o=t[c+4],i=t[c+5],l.push("C",s(t[c]),s(t[c+1]),s(t[c+2]),s(t[c+3]),s(o),s(i)),c+=6
break
case a.OPS.curveTo2:l.push("C",s(o),s(i),s(t[c]),s(t[c+1]),s(t[c+2]),s(t[c+3])),o=t[c+2],i=t[c+3],c+=4
break
case a.OPS.curveTo3:o=t[c+2],i=t[c+3],l.push("C",s(t[c]),s(t[c+1]),s(o),s(i),s(o),s(i)),c+=4
break
case a.OPS.closePath:l.push("Z")}}}catch(e){u.e(e)}finally{u.f()}l=l.join(" "),n.path&&e.length>0&&e[0]!==a.OPS.rectangle&&e[0]!==a.OPS.moveTo?l=n.path.getAttributeNS(null,"d")+l:(n.path=this.svgFactory.createElement("svg:path"),this._ensureTransformGroup().append(n.path)),n.path.setAttributeNS(null,"d",l),n.path.setAttributeNS(null,"fill","none"),n.element=n.path,n.setCurrentPoint(o,i)}},{key:"endPath",value:function endPath(){var e=this.current
if(e.path=null,this.pendingClip)if(e.element){var t="clippath".concat(v++),r=this.svgFactory.createElement("svg:clipPath")
r.setAttributeNS(null,"id",t),r.setAttributeNS(null,"transform",l(this.transformMatrix))
var n=e.element.cloneNode(!0)
if("evenodd"===this.pendingClip?n.setAttributeNS(null,"clip-rule","evenodd"):n.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,r.append(n),this.defs.append(r),e.activeClipUrl){e.clipGroup=null
var a,o=_createForOfIteratorHelper(this.extraStack)
try{for(o.s();!(a=o.n()).done;){a.value.clipGroup=null}}catch(e){o.e(e)}finally{o.f()}r.setAttributeNS(null,"clip-path",e.activeClipUrl)}e.activeClipUrl="url(#".concat(t,")"),this.tgrp=null}else this.pendingClip=null}},{key:"clip",value:function clip(e){this.pendingClip=e}},{key:"closePath",value:function closePath(){var e=this.current
if(e.path){var t="".concat(e.path.getAttributeNS(null,"d"),"Z")
e.path.setAttributeNS(null,"d",t)}}},{key:"setLeading",value:function setLeading(e){this.current.leading=-e}},{key:"setTextRise",value:function setTextRise(e){this.current.textRise=e}},{key:"setTextRenderingMode",value:function setTextRenderingMode(e){this.current.textRenderingMode=e}},{key:"setHScale",value:function setHScale(e){this.current.textHScale=e/100}},{key:"setRenderingIntent",value:function setRenderingIntent(e){}},{key:"setFlatness",value:function setFlatness(e){}},{key:"setGState",value:function setGState(e){var t,r=_createForOfIteratorHelper(e)
try{for(r.s();!(t=r.n()).done;){var n=_slicedToArray(t.value,2),o=n[0],i=n[1]
switch(o){case"LW":this.setLineWidth(i)
break
case"LC":this.setLineCap(i)
break
case"LJ":this.setLineJoin(i)
break
case"ML":this.setMiterLimit(i)
break
case"D":this.setDash(i[0],i[1])
break
case"RI":this.setRenderingIntent(i)
break
case"FL":this.setFlatness(i)
break
case"Font":this.setFont(i)
break
case"CA":this.setStrokeAlpha(i)
break
case"ca":this.setFillAlpha(i)
break
default:(0,a.warn)("Unimplemented graphic state operator ".concat(o))}}}catch(e){r.e(e)}finally{r.f()}}},{key:"fill",value:function fill(){var e=this.current
e.element&&(e.element.setAttributeNS(null,"fill",e.fillColor),e.element.setAttributeNS(null,"fill-opacity",e.fillAlpha),this.endPath())}},{key:"stroke",value:function stroke(){var e=this.current
e.element&&(this._setStrokeAttributes(e.element),e.element.setAttributeNS(null,"fill","none"),this.endPath())}},{key:"_setStrokeAttributes",value:function _setStrokeAttributes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.current,n=r.dashArray
1!==t&&n.length>0&&(n=n.map(function(e){return t*e})),e.setAttributeNS(null,"stroke",r.strokeColor),e.setAttributeNS(null,"stroke-opacity",r.strokeAlpha),e.setAttributeNS(null,"stroke-miterlimit",s(r.miterLimit)),e.setAttributeNS(null,"stroke-linecap",r.lineCap),e.setAttributeNS(null,"stroke-linejoin",r.lineJoin),e.setAttributeNS(null,"stroke-width",s(t*r.lineWidth)+"px"),e.setAttributeNS(null,"stroke-dasharray",n.map(s).join(" ")),e.setAttributeNS(null,"stroke-dashoffset",s(t*r.dashPhase)+"px")}},{key:"eoFill",value:function eoFill(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fill()}},{key:"fillStroke",value:function fillStroke(){this.stroke(),this.fill()}},{key:"eoFillStroke",value:function eoFillStroke(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()}},{key:"closeStroke",value:function closeStroke(){this.closePath(),this.stroke()}},{key:"closeFillStroke",value:function closeFillStroke(){this.closePath(),this.fillStroke()}},{key:"closeEOFillStroke",value:function closeEOFillStroke(){this.closePath(),this.eoFillStroke()}},{key:"paintSolidColorImageMask",value:function paintSolidColorImageMask(){var e=this.svgFactory.createElement("svg:rect")
e.setAttributeNS(null,"x","0"),e.setAttributeNS(null,"y","0"),e.setAttributeNS(null,"width","1px"),e.setAttributeNS(null,"height","1px"),e.setAttributeNS(null,"fill",this.current.fillColor),this._ensureTransformGroup().append(e)}},{key:"paintImageXObject",value:function paintImageXObject(e){var t=e.startsWith("g_")?this.commonObjs.get(e):this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,a.warn)("Dependent image with object ID ".concat(e," is not ready yet"))}},{key:"paintInlineImageXObject",value:function paintInlineImageXObject(e,t){var r=e.width,n=e.height,a=p(e,this.forceDataSchema,!!t),o=this.svgFactory.createElement("svg:rect")
o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",s(r)),o.setAttributeNS(null,"height",s(n)),this.current.element=o,this.clip("nonzero")
var i=this.svgFactory.createElement("svg:image")
i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),i.setAttributeNS(null,"x","0"),i.setAttributeNS(null,"y",s(-n)),i.setAttributeNS(null,"width",s(r)+"px"),i.setAttributeNS(null,"height",s(n)+"px"),i.setAttributeNS(null,"transform","scale(".concat(s(1/r)," ").concat(s(-1/n),")")),t?t.append(i):this._ensureTransformGroup().append(i)}},{key:"paintImageMaskXObject",value:function paintImageMaskXObject(e){var t=this.current,r=e.width,n=e.height,a=t.fillColor
t.maskId="mask".concat(m++)
var o=this.svgFactory.createElement("svg:mask")
o.setAttributeNS(null,"id",t.maskId)
var i=this.svgFactory.createElement("svg:rect")
i.setAttributeNS(null,"x","0"),i.setAttributeNS(null,"y","0"),i.setAttributeNS(null,"width",s(r)),i.setAttributeNS(null,"height",s(n)),i.setAttributeNS(null,"fill",a),i.setAttributeNS(null,"mask","url(#".concat(t.maskId,")")),this.defs.append(o),this._ensureTransformGroup().append(i),this.paintInlineImageXObject(e,o)}},{key:"paintFormXObjectBegin",value:function paintFormXObjectBegin(e,t){if(Array.isArray(e)&&6===e.length&&this.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t){var r=t[2]-t[0],n=t[3]-t[1],a=this.svgFactory.createElement("svg:rect")
a.setAttributeNS(null,"x",t[0]),a.setAttributeNS(null,"y",t[1]),a.setAttributeNS(null,"width",s(r)),a.setAttributeNS(null,"height",s(n)),this.current.element=a,this.clip("nonzero"),this.endPath()}}},{key:"paintFormXObjectEnd",value:function paintFormXObjectEnd(){}},{key:"_initialize",value:function _initialize(e){var t=this.svgFactory.create(e.width,e.height),r=this.svgFactory.createElement("svg:defs")
t.append(r),this.defs=r
var n=this.svgFactory.createElement("svg:g")
return n.setAttributeNS(null,"transform",l(e.transform)),t.append(n),this.svg=n,t}},{key:"_ensureClipGroup",value:function _ensureClipGroup(){if(!this.current.clipGroup){var e=this.svgFactory.createElement("svg:g")
e.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.append(e),this.current.clipGroup=e}return this.current.clipGroup}},{key:"_ensureTransformGroup",value:function _ensureTransformGroup(){return this.tgrp||(this.tgrp=this.svgFactory.createElement("svg:g"),this.tgrp.setAttributeNS(null,"transform",l(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().append(this.tgrp):this.svg.append(this.tgrp)),this.tgrp}}])}()},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNodeStream=void 0
var n=r(1),a=r(33),o=__webpack_require__(1),i=__webpack_require__(4),s=__webpack_require__(5),l=__webpack_require__(6),c=/^file:\/\/\/[a-zA-Z]:\//
var u=function(){return _createClass(function PDFNodeStream(e){_classCallCheck(this,PDFNodeStream),this.source=e,this.url=function parseUrl(e){var t=l.parse(e)
return"file:"===t.protocol||t.host?t:/^[a-z]:[/\\]/i.test(e)?l.parse("file:///".concat(e)):(t.host||(t.protocol="file:"),t)}(e.url),this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol,this.isFsUrl="file:"===this.url.protocol,this.httpHeaders=this.isHttp&&e.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]},[{key:"_progressiveDataLength",get:function get(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}},{key:"getFullReader",value:function getFullReader(){return(0,n.assert)(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once."),this._fullRequestReader=this.isFsUrl?new v(this):new p(this),this._fullRequestReader}},{key:"getRangeReader",value:function getRangeReader(e,t){if(t<=this._progressiveDataLength)return null
var r=this.isFsUrl?new m(this,e,t):new f(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function cancelAllRequests(e){this._fullRequestReader&&this._fullRequestReader.cancel(e)
var t,r=_createForOfIteratorHelper(this._rangeRequestReaders.slice(0))
try{for(r.s();!(t=r.n()).done;){t.value.cancel(e)}}catch(e){r.e(e)}finally{r.f()}}}])}()
t.PDFNodeStream=u
var d=function(){return _createClass(function BaseFullReader(e){_classCallCheck(this,BaseFullReader),this._url=e.url,this._done=!1,this._storedError=null,this.onProgress=null
var t=e.source
this._contentLength=t.length,this._loaded=0,this._filename=null,this._disableRange=t.disableRange||!1,this._rangeChunkSize=t.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange,this._readableStream=null,this._readCapability=(0,n.createPromiseCapability)(),this._headersCapability=(0,n.createPromiseCapability)()},[{key:"headersReady",get:function get(){return this._headersCapability.promise}},{key:"filename",get:function get(){return this._filename}},{key:"contentLength",get:function get(){return this._contentLength}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee13(){var e,t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,this._readCapability.promise
case 1:if(!this._done){r.n=2
break}return r.a(2,{value:void 0,done:!0})
case 2:if(!this._storedError){r.n=3
break}throw this._storedError
case 3:if(null!==(e=this._readableStream.read())){r.n=4
break}return this._readCapability=(0,n.createPromiseCapability)(),r.a(2,this.read())
case 4:return this._loaded+=e.length,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),t=new Uint8Array(e).buffer,r.a(2,{value:t,done:!1})}},_callee13,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"cancel",value:function cancel(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function _error(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function _setReadableStream(e){var t=this
this._readableStream=e,e.on("readable",function(){t._readCapability.resolve()}),e.on("end",function(){e.destroy(),t._done=!0,t._readCapability.resolve()}),e.on("error",function(e){t._error(e)}),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new n.AbortException("streaming is disabled")),this._storedError&&this._readableStream.destroy(this._storedError)}}])}(),h=function(){return _createClass(function BaseRangeReader(e){_classCallCheck(this,BaseRangeReader),this._url=e.url,this._done=!1,this._storedError=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=(0,n.createPromiseCapability)()
var t=e.source
this._isStreamingSupported=!t.disableStream},[{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee14(){var e,t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,this._readCapability.promise
case 1:if(!this._done){r.n=2
break}return r.a(2,{value:void 0,done:!0})
case 2:if(!this._storedError){r.n=3
break}throw this._storedError
case 3:if(null!==(e=this._readableStream.read())){r.n=4
break}return this._readCapability=(0,n.createPromiseCapability)(),r.a(2,this.read())
case 4:return this._loaded+=e.length,this.onProgress&&this.onProgress({loaded:this._loaded}),t=new Uint8Array(e).buffer,r.a(2,{value:t,done:!1})}},_callee14,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"cancel",value:function cancel(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function _error(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function _setReadableStream(e){var t=this
this._readableStream=e,e.on("readable",function(){t._readCapability.resolve()}),e.on("end",function(){e.destroy(),t._done=!0,t._readCapability.resolve()}),e.on("error",function(e){t._error(e)}),this._storedError&&this._readableStream.destroy(this._storedError)}}])}()
function createRequestOptions(e,t){return{protocol:e.protocol,auth:e.auth,host:e.hostname,port:e.port,path:e.path,method:"GET",headers:t}}var p=function(e){function PDFNodeStreamFullReader(e){var t
_classCallCheck(this,PDFNodeStreamFullReader)
var r=function handleResponse(r){if(404===r.statusCode){var o=new n.MissingPDFException('Missing PDF "'.concat(t._url,'".'))
return t._storedError=o,void t._headersCapability.reject(o)}t._headersCapability.resolve(),t._setReadableStream(r)
var i=function getResponseHeader(e){return t._readableStream.headers[e.toLowerCase()]},s=(0,a.validateRangeRequestCapabilities)({getResponseHeader:i,isHttp:e.isHttp,rangeChunkSize:t._rangeChunkSize,disableRange:t._disableRange}),l=s.allowRangeRequests,c=s.suggestedLength
t._isRangeSupported=l,t._contentLength=c||t._contentLength,t._filename=(0,a.extractFilenameFromHeader)(i)}
return(t=_callSuper(this,PDFNodeStreamFullReader,[e]))._request=null,"http:"===t._url.protocol?t._request=i.request(createRequestOptions(t._url,e.httpHeaders),r):t._request=s.request(createRequestOptions(t._url,e.httpHeaders),r),t._request.on("error",function(e){t._storedError=e,t._headersCapability.reject(e)}),t._request.end(),t}return _inherits(PDFNodeStreamFullReader,d),_createClass(PDFNodeStreamFullReader)}(),f=function(e){function PDFNodeStreamRangeReader(e,t,r){var a
for(var o in _classCallCheck(this,PDFNodeStreamRangeReader),(a=_callSuper(this,PDFNodeStreamRangeReader,[e]))._httpHeaders={},e.httpHeaders){var l=e.httpHeaders[o]
void 0!==l&&(a._httpHeaders[o]=l)}a._httpHeaders.Range="bytes=".concat(t,"-").concat(r-1)
var c=function handleResponse(e){if(404!==e.statusCode)a._setReadableStream(e)
else{var t=new n.MissingPDFException('Missing PDF "'.concat(a._url,'".'))
a._storedError=t}}
return a._request=null,"http:"===a._url.protocol?a._request=i.request(createRequestOptions(a._url,a._httpHeaders),c):a._request=s.request(createRequestOptions(a._url,a._httpHeaders),c),a._request.on("error",function(e){a._storedError=e}),a._request.end(),a}return _inherits(PDFNodeStreamRangeReader,h),_createClass(PDFNodeStreamRangeReader)}(),v=function(e){function PDFNodeStreamFsFullReader(e){var t
_classCallCheck(this,PDFNodeStreamFsFullReader),t=_callSuper(this,PDFNodeStreamFsFullReader,[e])
var r=decodeURIComponent(t._url.path)
return c.test(t._url.href)&&(r=r.replace(/^\//,"")),o.lstat(r,function(e,a){if(e)return"ENOENT"===e.code&&(e=new n.MissingPDFException('Missing PDF "'.concat(r,'".'))),t._storedError=e,void t._headersCapability.reject(e)
t._contentLength=a.size,t._setReadableStream(o.createReadStream(r)),t._headersCapability.resolve()}),t}return _inherits(PDFNodeStreamFsFullReader,d),_createClass(PDFNodeStreamFsFullReader)}(),m=function(e){function PDFNodeStreamFsRangeReader(e,t,r){var n
_classCallCheck(this,PDFNodeStreamFsRangeReader),n=_callSuper(this,PDFNodeStreamFsRangeReader,[e])
var a=decodeURIComponent(n._url.path)
return c.test(n._url.href)&&(a=a.replace(/^\//,"")),n._setReadableStream(o.createReadStream(a,{start:t,end:r-1})),n}return _inherits(PDFNodeStreamFsRangeReader,h),_createClass(PDFNodeStreamFsRangeReader)}()},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.createResponseStatusError=function createResponseStatusError(e,t){if(404===e||0===e&&t.startsWith("file:"))return new n.MissingPDFException('Missing PDF "'+t+'".')
return new n.UnexpectedResponseException("Unexpected server response (".concat(e,') while retrieving PDF "').concat(t,'".'),e)},t.extractFilenameFromHeader=function extractFilenameFromHeader(e){var t=e("Content-Disposition")
if(t){var r=(0,a.getFilenameFromContentDispositionHeader)(t)
if(r.includes("%"))try{r=decodeURIComponent(r)}catch(e){}if((0,o.isPdfFile)(r))return r}return null},t.validateRangeRequestCapabilities=function validateRangeRequestCapabilities(e){var t=e.getResponseHeader,r=e.isHttp,n=e.rangeChunkSize,a=e.disableRange,o={allowRangeRequests:!1,suggestedLength:void 0},i=parseInt(t("Content-Length"),10)
if(!Number.isInteger(i))return o
if(o.suggestedLength=i,i<=2*n)return o
if(a||!r)return o
if("bytes"!==t("Accept-Ranges"))return o
if("identity"!==(t("Content-Encoding")||"identity"))return o
return o.allowRangeRequests=!0,o},t.validateResponseStatus=function validateResponseStatus(e){return 200===e||206===e}
var n=r(1),a=r(34),o=r(8)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getFilenameFromContentDispositionHeader=function getFilenameFromContentDispositionHeader(e){var t=!0,r=toParamRegExp("filename\\*","i").exec(e)
if(r){var a=rfc2616unquote(r=r[1])
return fixupEncoding(a=rfc2047decode(a=rfc5987decode(a=unescape(a))))}if(r=function rfc2231getparam(e){for(var t,r=[],n=toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)","ig");null!==(t=n.exec(e));){var a=t,o=_slicedToArray(a,4),i=o[1],s=o[2],l=o[3]
if((i=parseInt(i,10))in r){if(0===i)break}else r[i]=[s,l]}for(var c=[],u=0;u<r.length&&u in r;++u){var d=_slicedToArray(r[u],2),h=d[0],p=d[1]
p=rfc2616unquote(p),h&&(p=unescape(p),0===u&&(p=rfc5987decode(p))),c.push(p)}return c.join("")}(e)){var o=rfc2047decode(r)
return fixupEncoding(o)}if(r=toParamRegExp("filename","i").exec(e)){var i=rfc2616unquote(r=r[1])
return fixupEncoding(i=rfc2047decode(i))}function toParamRegExp(e,t){return new RegExp("(?:^|;)\\s*"+e+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',t)}function textdecode(e,r){if(e){if(!/^[\x00-\xFF]+$/.test(r))return r
try{var a=new TextDecoder(e,{fatal:!0}),o=(0,n.stringToBytes)(r)
r=a.decode(o),t=!1}catch(e){}}return r}function fixupEncoding(e){return t&&/[\x80-\xff]/.test(e)&&(e=textdecode("utf-8",e),t&&(e=textdecode("iso-8859-1",e))),e}function rfc2616unquote(e){if(e.startsWith('"')){for(var t=e.slice(1).split('\\"'),r=0;r<t.length;++r){var n=t[r].indexOf('"');-1!==n&&(t[r]=t[r].slice(0,n),t.length=r+1),t[r]=t[r].replace(/\\(.)/g,"$1")}e=t.join('"')}return e}function rfc5987decode(e){var t=e.indexOf("'")
if(-1===t)return e
var r=e.slice(0,t),n=e.slice(t+1),a=n.replace(/^[^']*'/,"")
return textdecode(r,a)}function rfc2047decode(e){return!e.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(e)?e:e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,function(e,t,r,n){if("q"===r||"Q"===r)return n=(n=n.replace(/_/g," ")).replace(/=([0-9a-fA-F]{2})/g,function(e,t){return String.fromCharCode(parseInt(t,16))}),textdecode(t,n)
try{n=atob(n)}catch(e){}return textdecode(t,n)})}return""}
var n=r(1)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNetworkStream=void 0
var n=r(1),a=r(33)
var o=function(){return _createClass(function NetworkManager(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
_classCallCheck(this,NetworkManager),this.url=e,this.isHttp=/^https?:/i.test(e),this.httpHeaders=this.isHttp&&t.httpHeaders||Object.create(null),this.withCredentials=t.withCredentials||!1,this.getXhr=t.getXhr||function NetworkManager_getXhr(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null)},[{key:"requestRange",value:function requestRange(e,t,r){var n={begin:e,end:t}
for(var a in r)n[a]=r[a]
return this.request(n)}},{key:"requestFull",value:function requestFull(e){return this.request(e)}},{key:"request",value:function request(e){var t=this.getXhr(),r=this.currXhrId++,n=this.pendingRequests[r]={xhr:t}
for(var a in t.open("GET",this.url),t.withCredentials=this.withCredentials,this.httpHeaders){var o=this.httpHeaders[a]
void 0!==o&&t.setRequestHeader(a,o)}return this.isHttp&&"begin"in e&&"end"in e?(t.setRequestHeader("Range","bytes=".concat(e.begin,"-").concat(e.end-1)),n.expectedStatus=206):n.expectedStatus=200,t.responseType="arraybuffer",e.onError&&(t.onerror=function(r){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,r),t.onprogress=this.onProgress.bind(this,r),n.onHeadersReceived=e.onHeadersReceived,n.onDone=e.onDone,n.onError=e.onError,n.onProgress=e.onProgress,t.send(null),r}},{key:"onProgress",value:function onProgress(e,t){var r,n=this.pendingRequests[e]
n&&(null===(r=n.onProgress)||void 0===r||r.call(n,t))}},{key:"onStateChange",value:function onStateChange(e,t){var r=this.pendingRequests[e]
if(r){var a=r.xhr
if(a.readyState>=2&&r.onHeadersReceived&&(r.onHeadersReceived(),delete r.onHeadersReceived),4===a.readyState&&e in this.pendingRequests)if(delete this.pendingRequests[e],0===a.status&&this.isHttp){var o
null===(o=r.onError)||void 0===o||o.call(r,a.status)}else{var i=a.status||200
if(200===i&&206===r.expectedStatus||i===r.expectedStatus){var s=function getArrayBuffer(e){var t=e.response
return"string"!=typeof t?t:(0,n.stringToBytes)(t).buffer}(a)
if(206===i){var l=a.getResponseHeader("Content-Range"),c=/bytes (\d+)-(\d+)\/(\d+)/.exec(l)
r.onDone({begin:parseInt(c[1],10),chunk:s})}else if(s)r.onDone({begin:0,chunk:s})
else{var u
null===(u=r.onError)||void 0===u||u.call(r,a.status)}}else{var d
null===(d=r.onError)||void 0===d||d.call(r,a.status)}}}}},{key:"getRequestXhr",value:function getRequestXhr(e){return this.pendingRequests[e].xhr}},{key:"isPendingRequest",value:function isPendingRequest(e){return e in this.pendingRequests}},{key:"abortRequest",value:function abortRequest(e){var t=this.pendingRequests[e].xhr
delete this.pendingRequests[e],t.abort()}}])}(),i=function(){return _createClass(function PDFNetworkStream(e){_classCallCheck(this,PDFNetworkStream),this._source=e,this._manager=new o(e.url,{httpHeaders:e.httpHeaders,withCredentials:e.withCredentials}),this._rangeChunkSize=e.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]},[{key:"_onRangeRequestReaderClosed",value:function _onRangeRequestReaderClosed(e){var t=this._rangeRequestReaders.indexOf(e)
t>=0&&this._rangeRequestReaders.splice(t,1)}},{key:"getFullReader",value:function getFullReader(){return(0,n.assert)(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once."),this._fullRequestReader=new s(this._manager,this._source),this._fullRequestReader}},{key:"getRangeReader",value:function getRangeReader(e,t){var r=new l(this._manager,e,t)
return r.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function cancelAllRequests(e){var t
null===(t=this._fullRequestReader)||void 0===t||t.cancel(e)
var r,n=_createForOfIteratorHelper(this._rangeRequestReaders.slice(0))
try{for(n.s();!(r=n.n()).done;){r.value.cancel(e)}}catch(e){n.e(e)}finally{n.f()}}}])}()
t.PDFNetworkStream=i
var s=function(){return _createClass(function PDFNetworkStreamFullRequestReader(e,t){_classCallCheck(this,PDFNetworkStreamFullRequestReader),this._manager=e
var r={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=t.url,this._fullRequestId=e.requestFull(r),this._headersReceivedCapability=(0,n.createPromiseCapability)(),this._disableRange=t.disableRange||!1,this._contentLength=t.length,this._rangeChunkSize=t.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this._filename=null,this.onProgress=null},[{key:"_onHeadersReceived",value:function _onHeadersReceived(){var e=this._fullRequestId,t=this._manager.getRequestXhr(e),r=function getResponseHeader(e){return t.getResponseHeader(e)},n=(0,a.validateRangeRequestCapabilities)({getResponseHeader:r,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),o=n.allowRangeRequests,i=n.suggestedLength
o&&(this._isRangeSupported=!0),this._contentLength=i||this._contentLength,this._filename=(0,a.extractFilenameFromHeader)(r),this._isRangeSupported&&this._manager.abortRequest(e),this._headersReceivedCapability.resolve()}},{key:"_onDone",value:function _onDone(e){e&&(this._requests.length>0?this._requests.shift().resolve({value:e.chunk,done:!1}):this._cachedChunks.push(e.chunk))
if(this._done=!0,!(this._cachedChunks.length>0)){var t,r=_createForOfIteratorHelper(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(e){r.e(e)}finally{r.f()}this._requests.length=0}}},{key:"_onError",value:function _onError(e){this._storedError=(0,a.createResponseStatusError)(e,this._url),this._headersReceivedCapability.reject(this._storedError)
var t,r=_createForOfIteratorHelper(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.reject(this._storedError)}}catch(e){r.e(e)}finally{r.f()}this._requests.length=0,this._cachedChunks.length=0}},{key:"_onProgress",value:function _onProgress(e){var t
null===(t=this.onProgress)||void 0===t||t.call(this,{loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})}},{key:"filename",get:function get(){return this._filename}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}},{key:"contentLength",get:function get(){return this._contentLength}},{key:"headersReady",get:function get(){return this._headersReceivedCapability.promise}},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee15(){var e,t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:if(!this._storedError){r.n=1
break}throw this._storedError
case 1:if(!(this._cachedChunks.length>0)){r.n=2
break}return e=this._cachedChunks.shift(),r.a(2,{value:e,done:!1})
case 2:if(!this._done){r.n=3
break}return r.a(2,{value:void 0,done:!0})
case 3:return t=(0,n.createPromiseCapability)(),this._requests.push(t),r.a(2,t.promise)}},_callee15,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"cancel",value:function cancel(e){this._done=!0,this._headersReceivedCapability.reject(e)
var t,r=_createForOfIteratorHelper(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(e){r.e(e)}finally{r.f()}this._requests.length=0,this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}}])}(),l=function(){return _createClass(function PDFNetworkStreamRangeRequestReader(e,t,r){_classCallCheck(this,PDFNetworkStreamRangeRequestReader),this._manager=e
var n={onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=e.url,this._requestId=e.requestRange(t,r,n),this._requests=[],this._queuedChunk=null,this._done=!1,this._storedError=void 0,this.onProgress=null,this.onClosed=null},[{key:"_close",value:function _close(){var e
null===(e=this.onClosed)||void 0===e||e.call(this,this)}},{key:"_onDone",value:function _onDone(e){var t=e.chunk
this._requests.length>0?this._requests.shift().resolve({value:t,done:!1}):this._queuedChunk=t
this._done=!0
var r,n=_createForOfIteratorHelper(this._requests)
try{for(n.s();!(r=n.n()).done;){r.value.resolve({value:void 0,done:!0})}}catch(e){n.e(e)}finally{n.f()}this._requests.length=0,this._close()}},{key:"_onError",value:function _onError(e){this._storedError=(0,a.createResponseStatusError)(e,this._url)
var t,r=_createForOfIteratorHelper(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.reject(this._storedError)}}catch(e){r.e(e)}finally{r.f()}this._requests.length=0,this._queuedChunk=null}},{key:"_onProgress",value:function _onProgress(e){var t
this.isStreamingSupported||(null===(t=this.onProgress)||void 0===t||t.call(this,{loaded:e.loaded}))}},{key:"isStreamingSupported",get:function get(){return!1}},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee16(){var e,t
return _regenerator().w(function(r){for(;;)switch(r.n){case 0:if(!this._storedError){r.n=1
break}throw this._storedError
case 1:if(null===this._queuedChunk){r.n=2
break}return e=this._queuedChunk,this._queuedChunk=null,r.a(2,{value:e,done:!1})
case 2:if(!this._done){r.n=3
break}return r.a(2,{value:void 0,done:!0})
case 3:return t=(0,n.createPromiseCapability)(),this._requests.push(t),r.a(2,t.promise)}},_callee16,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"cancel",value:function cancel(e){this._done=!0
var t,r=_createForOfIteratorHelper(this._requests)
try{for(r.s();!(t=r.n()).done;){t.value.resolve({value:void 0,done:!0})}}catch(e){r.e(e)}finally{r.f()}this._requests.length=0,this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}}])}()},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFetchStream=void 0
var n=r(1),a=r(33)
function createFetchOptions(e,t,r){return{method:"GET",headers:e,signal:r.signal,mode:"cors",credentials:t?"include":"same-origin",redirect:"follow"}}function createHeaders(e){var t=new Headers
for(var r in e){var n=e[r]
void 0!==n&&t.append(r,n)}return t}var o=function(){return _createClass(function PDFFetchStream(e){_classCallCheck(this,PDFFetchStream),this.source=e,this.isHttp=/^https?:/i.test(e.url),this.httpHeaders=this.isHttp&&e.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]},[{key:"_progressiveDataLength",get:function get(){var e,t
return null!==(e=null===(t=this._fullRequestReader)||void 0===t?void 0:t._loaded)&&void 0!==e?e:0}},{key:"getFullReader",value:function getFullReader(){return(0,n.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once."),this._fullRequestReader=new i(this),this._fullRequestReader}},{key:"getRangeReader",value:function getRangeReader(e,t){if(t<=this._progressiveDataLength)return null
var r=new s(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function cancelAllRequests(e){this._fullRequestReader&&this._fullRequestReader.cancel(e)
var t,r=_createForOfIteratorHelper(this._rangeRequestReaders.slice(0))
try{for(r.s();!(t=r.n()).done;){t.value.cancel(e)}}catch(e){r.e(e)}finally{r.f()}}}])}()
t.PDFFetchStream=o
var i=function(){return _createClass(function PDFFetchStreamReader(e){var t=this
_classCallCheck(this,PDFFetchStreamReader),this._stream=e,this._reader=null,this._loaded=0,this._filename=null
var r=e.source
this._withCredentials=r.withCredentials||!1,this._contentLength=r.length,this._headersCapability=(0,n.createPromiseCapability)(),this._disableRange=r.disableRange||!1,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._abortController=new AbortController,this._isStreamingSupported=!r.disableStream,this._isRangeSupported=!r.disableRange,this._headers=createHeaders(this._stream.httpHeaders)
var o=r.url
fetch(o,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(function(e){if(!(0,a.validateResponseStatus)(e.status))throw(0,a.createResponseStatusError)(e.status,o)
t._reader=e.body.getReader(),t._headersCapability.resolve()
var r=function getResponseHeader(t){return e.headers.get(t)},i=(0,a.validateRangeRequestCapabilities)({getResponseHeader:r,isHttp:t._stream.isHttp,rangeChunkSize:t._rangeChunkSize,disableRange:t._disableRange}),s=i.allowRangeRequests,l=i.suggestedLength
t._isRangeSupported=s,t._contentLength=l||t._contentLength,t._filename=(0,a.extractFilenameFromHeader)(r),!t._isStreamingSupported&&t._isRangeSupported&&t.cancel(new n.AbortException("Streaming is disabled."))}).catch(this._headersCapability.reject),this.onProgress=null},[{key:"headersReady",get:function get(){return this._headersCapability.promise}},{key:"filename",get:function get(){return this._filename}},{key:"contentLength",get:function get(){return this._contentLength}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee17(){var e,t,r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,this._headersCapability.promise
case 1:return a.n=2,this._reader.read()
case 2:if(e=a.v,t=e.value,!(r=e.done)){a.n=3
break}return a.a(2,{value:t,done:r})
case 3:return this._loaded+=t.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),n=new Uint8Array(t).buffer,a.a(2,{value:n,done:!1})}},_callee17,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"cancel",value:function cancel(e){this._reader&&this._reader.cancel(e),this._abortController.abort()}}])}(),s=function(){return _createClass(function PDFFetchStreamRangeReader(e,t,r){var o=this
_classCallCheck(this,PDFFetchStreamRangeReader),this._stream=e,this._reader=null,this._loaded=0
var i=e.source
this._withCredentials=i.withCredentials||!1,this._readCapability=(0,n.createPromiseCapability)(),this._isStreamingSupported=!i.disableStream,this._abortController=new AbortController,this._headers=createHeaders(this._stream.httpHeaders),this._headers.append("Range","bytes=".concat(t,"-").concat(r-1))
var s=i.url
fetch(s,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then(function(e){if(!(0,a.validateResponseStatus)(e.status))throw(0,a.createResponseStatusError)(e.status,s)
o._readCapability.resolve(),o._reader=e.body.getReader()}).catch(this._readCapability.reject),this.onProgress=null},[{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}},{key:"read",value:function(){var e=_asyncToGenerator(_regenerator().m(function _callee18(){var e,t,r,n
return _regenerator().w(function(a){for(;;)switch(a.n){case 0:return a.n=1,this._readCapability.promise
case 1:return a.n=2,this._reader.read()
case 2:if(e=a.v,t=e.value,!(r=e.done)){a.n=3
break}return a.a(2,{value:t,done:r})
case 3:return this._loaded+=t.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded}),n=new Uint8Array(t).buffer,a.a(2,{value:n,done:!1})}},_callee18,this)}))
return function read(){return e.apply(this,arguments)}}()},{key:"cancel",value:function cancel(e){this._reader&&this._reader.cancel(e),this._abortController.abort()}}])}()}],__webpack_module_cache__={}
function __w_pdfjs_require__(e){var t=__webpack_module_cache__[e]
if(void 0!==t)return t.exports
var r=__webpack_module_cache__[e]={exports:{}}
return __webpack_modules__[e](r,r.exports,__w_pdfjs_require__),r.exports}var __webpack_exports__={}
return function(){var e=__webpack_exports__
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AnnotationEditorLayer",{enumerable:!0,get:function get(){return a.AnnotationEditorLayer}}),Object.defineProperty(e,"AnnotationEditorParamsType",{enumerable:!0,get:function get(){return t.AnnotationEditorParamsType}}),Object.defineProperty(e,"AnnotationEditorType",{enumerable:!0,get:function get(){return t.AnnotationEditorType}}),Object.defineProperty(e,"AnnotationEditorUIManager",{enumerable:!0,get:function get(){return o.AnnotationEditorUIManager}}),Object.defineProperty(e,"AnnotationLayer",{enumerable:!0,get:function get(){return i.AnnotationLayer}}),Object.defineProperty(e,"AnnotationMode",{enumerable:!0,get:function get(){return t.AnnotationMode}}),Object.defineProperty(e,"CMapCompressionType",{enumerable:!0,get:function get(){return t.CMapCompressionType}}),Object.defineProperty(e,"GlobalWorkerOptions",{enumerable:!0,get:function get(){return s.GlobalWorkerOptions}}),Object.defineProperty(e,"InvalidPDFException",{enumerable:!0,get:function get(){return t.InvalidPDFException}}),Object.defineProperty(e,"LoopbackPort",{enumerable:!0,get:function get(){return r.LoopbackPort}}),Object.defineProperty(e,"MissingPDFException",{enumerable:!0,get:function get(){return t.MissingPDFException}}),Object.defineProperty(e,"OPS",{enumerable:!0,get:function get(){return t.OPS}}),Object.defineProperty(e,"PDFDataRangeTransport",{enumerable:!0,get:function get(){return r.PDFDataRangeTransport}}),Object.defineProperty(e,"PDFDateString",{enumerable:!0,get:function get(){return n.PDFDateString}}),Object.defineProperty(e,"PDFWorker",{enumerable:!0,get:function get(){return r.PDFWorker}}),Object.defineProperty(e,"PasswordResponses",{enumerable:!0,get:function get(){return t.PasswordResponses}}),Object.defineProperty(e,"PermissionFlag",{enumerable:!0,get:function get(){return t.PermissionFlag}}),Object.defineProperty(e,"PixelsPerInch",{enumerable:!0,get:function get(){return n.PixelsPerInch}}),Object.defineProperty(e,"RenderingCancelledException",{enumerable:!0,get:function get(){return n.RenderingCancelledException}}),Object.defineProperty(e,"SVGGraphics",{enumerable:!0,get:function get(){return u.SVGGraphics}}),Object.defineProperty(e,"UNSUPPORTED_FEATURES",{enumerable:!0,get:function get(){return t.UNSUPPORTED_FEATURES}}),Object.defineProperty(e,"UnexpectedResponseException",{enumerable:!0,get:function get(){return t.UnexpectedResponseException}}),Object.defineProperty(e,"Util",{enumerable:!0,get:function get(){return t.Util}}),Object.defineProperty(e,"VerbosityLevel",{enumerable:!0,get:function get(){return t.VerbosityLevel}}),Object.defineProperty(e,"XfaLayer",{enumerable:!0,get:function get(){return d.XfaLayer}}),Object.defineProperty(e,"build",{enumerable:!0,get:function get(){return r.build}}),Object.defineProperty(e,"createPromiseCapability",{enumerable:!0,get:function get(){return t.createPromiseCapability}}),Object.defineProperty(e,"createValidAbsoluteUrl",{enumerable:!0,get:function get(){return t.createValidAbsoluteUrl}}),Object.defineProperty(e,"getDocument",{enumerable:!0,get:function get(){return r.getDocument}}),Object.defineProperty(e,"getFilenameFromUrl",{enumerable:!0,get:function get(){return n.getFilenameFromUrl}}),Object.defineProperty(e,"getPdfFilenameFromUrl",{enumerable:!0,get:function get(){return n.getPdfFilenameFromUrl}}),Object.defineProperty(e,"getXfaPageViewport",{enumerable:!0,get:function get(){return n.getXfaPageViewport}}),Object.defineProperty(e,"isPdfFile",{enumerable:!0,get:function get(){return n.isPdfFile}}),Object.defineProperty(e,"loadScript",{enumerable:!0,get:function get(){return n.loadScript}}),Object.defineProperty(e,"renderTextLayer",{enumerable:!0,get:function get(){return c.renderTextLayer}}),Object.defineProperty(e,"shadow",{enumerable:!0,get:function get(){return t.shadow}}),Object.defineProperty(e,"version",{enumerable:!0,get:function get(){return r.version}})
var t=__w_pdfjs_require__(1),r=__w_pdfjs_require__(4),n=__w_pdfjs_require__(8),a=__w_pdfjs_require__(22),o=__w_pdfjs_require__(7),i=__w_pdfjs_require__(27),s=__w_pdfjs_require__(15),l=__w_pdfjs_require__(3),c=__w_pdfjs_require__(30),u=__w_pdfjs_require__(31),d=__w_pdfjs_require__(29)
if(l.isNodeJS){var h=__w_pdfjs_require__(32).PDFNodeStream;(0,r.setPDFNetworkStreamFactory)(function(e){return new h(e)})}else{var p=__w_pdfjs_require__(35).PDFNetworkStream,f=__w_pdfjs_require__(36).PDFFetchStream;(0,r.setPDFNetworkStreamFactory)(function(e){return(0,n.isValidFetchUrl)(e.url)?new f(e):new p(e)})}}(),__webpack_exports__}()})}).call(this,__webpack_require__("8oxB"),__webpack_require__("HDXh").Buffer,__webpack_require__("YuTi")(module))},nbbA:function(e,t,r){"use strict"
e.exports=r("bacW")},rEcS:function(e,r,n){"use strict"
var a=n("iD5t")
var o,i=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI"))
r.ThumbnailDirection=void 0,(o=r.ThumbnailDirection||(r.ThumbnailDirection={})).Horizontal="Horizontal",o.Vertical="Vertical"
var s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},l=function(e){var t=e.doc,r=e.getPageIndex,n=e.renderSpinner,o=e.store,s=e.width,l=t.numPages,c=r?r({numPages:l}):0,u=Math.max(0,Math.min(c,l-1)),d=o.get("pagesRotation")||new Map,h=d.has(u)?d.get(u):0,p=i.useState(""),f=p[0],v=p[1],m=a.useIsMounted(),g=i.useRef(),_=i.useState(o.get("rotation")||0),b=_[0],y=_[1],k=i.useState(h),S=k[0],C=k[1],P=i.useState(!1),E=P[0],x=P[1],w=function(e){var t=e.has(u)?e.get(u):0
C(t)},A=function(e){y(e)},F=a.useIntersectionObserver({onVisibilityChanged:function(e){x(e.isVisible)}})
return i.useEffect(function(){if(E){var e=F.current
e&&(v(""),a.getPage(t,u).then(function(t){var r=t.getViewport({scale:1}),n=(r.rotation+b+S)%360,a=Math.abs(b+S)%180==0,o=a?r.width:r.height,i=a?r.height:r.width,l=document.createElement("canvas"),c=l.getContext("2d",{alpha:!1}),u=e.clientWidth,d=e.clientHeight,h=s?s/o:Math.min(u/o,d/i),p=h*o,f=h*i
l.height=f,l.width=p,l.style.opacity="0"
var _=t.getViewport({rotation:n,scale:h})
g.current=t.render({canvasContext:c,viewport:_}),g.current.promise.then(function(){m.current&&v(l.toDataURL()),l.width=0,l.height=0},function(){})}))}},[S,E]),i.useEffect(function(){return o.subscribe("pagesRotation",w),o.subscribe("rotation",A),function(){o.unsubscribe("pagesRotation",w),o.unsubscribe("rotation",A)}},[]),i.useEffect(function(){return function(){var e
null===(e=g.current)||void 0===e||e.cancel()}},[]),i.createElement("div",{ref:F,className:"rpv-thumbnail__cover-inner","data-testid":"thumbnail__cover-inner"},f?i.createElement("img",{className:"rpv-thumbnail__cover-image","data-testid":"thumbnail__cover-image",src:f}):i.createElement("div",{className:"rpv-thumbnail__cover-loader","data-testid":"thumbnail__cover-loader"},n?n():i.createElement(a.Spinner,null)))},c=function(e){var t=e.getPageIndex,r=e.renderSpinner,n=e.store,o=e.width,s=i.useState(n.get("doc")),c=s[0],u=s[1],d=function(e){u(e)}
return i.useEffect(function(){return n.subscribe("doc",d),function(){n.unsubscribe("doc",d)}},[]),i.createElement("div",{className:"rpv-thumbnail__cover"},c?i.createElement(l,{doc:c,getPageIndex:t,renderSpinner:r,store:n,width:o}):i.createElement("div",{className:"rpv-thumbnail__cover-loader"},r?r():i.createElement(a.Spinner,null)))},u=function(){return i.createElement(a.Spinner,null)},d=i.createContext({renderSpinner:u}),h=function(e){var t=e.children,r=e.doc,n=a.useIsMounted(),o=i.useState({loading:!0,labels:[]}),s=o[0],l=o[1]
return i.useEffect(function(){r.getPageLabels().then(function(e){n.current&&l({loading:!1,labels:e||[]})})},[r.loadingTask.docId]),s.loading?i.createElement(i.Fragment,null):t(s.labels)},p=function(e){var t=e.page,r=e.pageHeight,n=e.pageIndex,o=e.pageWidth,s=e.rotation,l=e.thumbnailHeight,c=e.thumbnailWidth,u=e.onRenderCompleted,h=i.useContext(a.LocalizationContext).l10n,p=i.useRef(),f=i.useState(""),v=f[0],m=f[1],g=h&&h.thumbnail?h.thumbnail.thumbnailLabel:"Thumbnail of page {{pageIndex}}"
return i.useEffect(function(){var e=p.current
e&&e.cancel()
var a=document.createElement("canvas"),i=a.getContext("2d",{alpha:!1}),l=c,d=l/(o/r),h=l/o
a.height=d,a.width=l,a.style.height="".concat(d,"px"),a.style.width="".concat(l,"px")
var f=t.getViewport({rotation:s,scale:h})
return p.current=t.render({canvasContext:i,viewport:f}),p.current.promise.then(function(){m(a.toDataURL()),u(n)},function(){u(n)}),function(){var e
null===(e=p.current)||void 0===e||e.cancel()}},[s]),v?i.createElement("img",{"aria-label":g.replace("{{pageIndex}}","".concat(n+1)),src:v,height:"".concat(l,"px"),width:"".concat(c,"px")}):i.useContext(d).renderSpinner()},f=function(e){var t=e.doc,r=e.pageHeight,n=e.pageIndex,o=e.pageRotation,s=e.pageWidth,l=e.rotation,c=e.shouldRender,u=e.thumbnailWidth,h=e.onRenderCompleted,f=e.onVisibilityChanged,v=a.useIsMounted(),m=i.useState({height:r,page:null,viewportRotation:0,width:s}),g=m[0],_=m[1],b=g.page,y=g.height,k=g.width,S=k/y,C=Math.abs(l+o)%180==0,P=C?u:u/S,E=C?u/S:u
i.useEffect(function(){c&&a.getPage(t,n).then(function(e){var t=e.getViewport({scale:1})
v.current&&_({height:t.height,page:e,viewportRotation:t.rotation,width:t.width})})},[c])
var x=(g.viewportRotation+l+o)%360,w=a.useIntersectionObserver({onVisibilityChanged:function(e){f(n,e)}})
return i.createElement("div",{className:"rpv-thumbnail__container","data-testid":"thumbnail__container-".concat(n),ref:w,style:{height:"".concat(E,"px"),width:"".concat(P,"px")}},b?i.createElement(p,{page:b,pageHeight:C?y:k,pageIndex:n,pageWidth:C?k:y,rotation:x,thumbnailHeight:E,thumbnailWidth:P,onRenderCompleted:h}):i.useContext(d).renderSpinner())},v=function(e){var t=e.currentPage,n=e.doc,o=e.labels,s=e.pagesRotation,l=e.pageHeight,c=e.pageWidth,u=e.renderCurrentPageLabel,d=e.renderThumbnailItem,h=e.rotatedPage,p=e.rotation,v=e.thumbnailDirection,m=e.thumbnailWidth,g=e.viewMode,_=e.onJumpToPage,b=e.onRotatePage,y=n.numPages,k=n.loadingTask.docId,S=i.useRef(null),C=i.useRef([]),P=i.useState(t),E=P[0],x=P[1],w=i.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft,A=i.useState(-1),F=A[0],M=A[1],T=a.useIsMounted(),R=a.usePrevious(g),I=i.useRef(!1),O=a.useRenderQueue({doc:n}),D=i.useMemo(function(){return Array(y).fill(0).map(function(e,t){return t})},[k]),L=i.useMemo(function(){switch(g){case a.ViewMode.DualPage:return a.chunk(D,2)
case a.ViewMode.DualPageWithCover:return[[D[0]]].concat(a.chunk(D.slice(1),2))
case a.ViewMode.SinglePage:default:return a.chunk(D,1)}},[k,g])
a.useIsomorphicLayoutEffect(function(){var e=S.current
e&&(C.current=Array.from(e.querySelectorAll(".rpv-thumbnail__item")))},[g]),i.useEffect(function(){var e=C.current
if(!(0===e.length||E<0||E>e.length)){var t=e[E]
t.setAttribute("tabindex","0"),t.focus()}},[E]),a.useIsomorphicLayoutEffect(function(){var e=S.current,n=C.current
if(!(!e||0===n.length||t<0||t>n.length)){var a=n[t].closest(".rpv-thumbnail__items")
a&&(v===r.ThumbnailDirection.Vertical?function(e,t){var r=e.getBoundingClientRect().top-t.getBoundingClientRect().top,n=e.clientHeight,a=t.clientHeight
r<0?t.scrollTop+=r:r+n<=a||(t.scrollTop+=r+n-a)}(a,e):function(e,t){var r=e.getBoundingClientRect().left-t.getBoundingClientRect().left,n=e.clientWidth,a=t.clientWidth
r<0?t.scrollLeft+=r:r+n<=a||(t.scrollLeft+=r+n-a)}(a,e))}},[t,v])
var N=i.useCallback(function(e){T.current&&(O.markRendered(e),I.current=!1,j())},[k]),B=i.useCallback(function(e,t){t.isVisible?O.setVisibility(e,t.ratio):O.setOutOfRange(e),j()},[k]),j=i.useCallback(function(){if(!I.current){var e=O.getHighestPriorityPage()
e>-1&&(O.markRendering(e),I.current=!0,M(e))}},[k])
return i.useEffect(function(){h>=0&&(O.markRendering(h),I.current=!0,M(h))},[k,h]),a.useIsomorphicLayoutEffect(function(){R!==g&&(O.markNotRendered(),j())},[g]),i.createElement("div",{ref:S,"data-testid":"thumbnail__list",className:a.classNames({"rpv-thumbnail__list":!0,"rpv-thumbnail__list--horizontal":v===r.ThumbnailDirection.Horizontal,"rpv-thumbnail__list--rtl":w,"rpv-thumbnail__list--vertical":v===r.ThumbnailDirection.Vertical}),onKeyDown:function(e){switch(e.key){case"ArrowDown":!function(){if(S.current){var e=C.current,t=E+1
t<e.length&&(E>=0&&e[E].setAttribute("tabindex","-1"),x(t))}}()
break
case"ArrowUp":!function(){if(S.current){var e=C.current,t=E-1
t>=0&&(E>=0&&e[E].setAttribute("tabindex","-1"),x(t))}}()
break
case"Enter":E>=0&&E<y&&_(E)}}},L.map(function(e,r){var h=!1
switch(g){case a.ViewMode.DualPage:h=t===2*r||t===2*r+1
break
case a.ViewMode.DualPageWithCover:h=0===t&&0===r||r>0&&t===2*r-1||r>0&&t===2*r
break
case a.ViewMode.SinglePage:default:h=t===r}return i.createElement("div",{className:a.classNames({"rpv-thumbnail__items":!0,"rpv-thumbnail__items--dual":g===a.ViewMode.DualPage,"rpv-thumbnail__items--dual-cover":g===a.ViewMode.DualPageWithCover,"rpv-thumbnail__items--single":g===a.ViewMode.SinglePage,"rpv-thumbnail__items--selected":h}),key:"".concat(r,"___").concat(g)},e.map(function(e){return function(e){var r=g===a.ViewMode.DualPageWithCover&&(0===e||y%2==0&&e===y-1),h="".concat(n.loadingTask.docId,"___").concat(e),v=o.length===y?o[e]:"".concat(e+1),k=u?u({currentPage:t,pageIndex:e,numPages:y,pageLabel:v}):v,S=s.has(e)?s.get(e):0,C=i.createElement(f,{doc:n,pageHeight:l,pageIndex:e,pageRotation:S,pageWidth:c,rotation:p,shouldRender:F===e,thumbnailWidth:m,onRenderCompleted:N,onVisibilityChanged:B})
return d?d({currentPage:t,key:h,numPages:y,pageIndex:e,renderPageLabel:i.createElement(i.Fragment,null,k),renderPageThumbnail:C,onJumpToPage:function(){return _(e)},onRotatePage:function(t){return b(e,t)}}):i.createElement("div",{key:h},i.createElement("div",{className:a.classNames({"rpv-thumbnail__item":!0,"rpv-thumbnail__item--dual-even":g===a.ViewMode.DualPage&&e%2==0,"rpv-thumbnail__item--dual-odd":g===a.ViewMode.DualPage&&e%2==1,"rpv-thumbnail__item--dual-cover":r,"rpv-thumbnail__item--dual-cover-even":g===a.ViewMode.DualPageWithCover&&!r&&e%2==0,"rpv-thumbnail__item--dual-cover-odd":g===a.ViewMode.DualPageWithCover&&!r&&e%2==1,"rpv-thumbnail__item--single":g===a.ViewMode.SinglePage,"rpv-thumbnail__item--selected":t===e}),role:"button",tabIndex:t===e?0:-1,onClick:function(){return _(e)}},C),i.createElement("div",{"data-testid":"thumbnail__label-".concat(e),className:"rpv-thumbnail__label"},k))}(e)}))}))},m=function(e){var t=e.renderCurrentPageLabel,r=e.renderThumbnailItem,n=e.store,o=e.thumbnailDirection,s=e.thumbnailWidth,l=i.useState(n.get("doc")),c=l[0],u=l[1],p=i.useState(n.get("currentPage")||0),f=p[0],m=p[1],g=i.useState(n.get("pageHeight")||0),_=g[0],b=g[1],y=i.useState(n.get("pageWidth")||0),k=y[0],S=y[1],C=i.useState(n.get("rotation")||0),P=C[0],E=C[1],x=i.useState(n.get("pagesRotation")||new Map),w=x[0],A=x[1],F=i.useState(n.get("rotatedPage")||-1),M=F[0],T=F[1],R=i.useState(n.get("viewMode")),I=R[0],O=R[1],D=function(e){m(e)},L=function(e){u(e)},N=function(e){b(e)},B=function(e){S(e)},j=function(e){E(e)},G=function(e){A(e)},z=function(e){T(e)},H=function(e){O(e)},W=function(e){var t=n.get("jumpToPage")
t&&t(e)},V=function(e,t){n.get("rotatePage")(e,t)}
return i.useEffect(function(){return n.subscribe("doc",L),n.subscribe("pageHeight",N),n.subscribe("pageWidth",B),n.subscribe("rotatedPage",z),n.subscribe("rotation",j),n.subscribe("pagesRotation",G),n.subscribe("viewMode",H),function(){n.unsubscribe("doc",L),n.unsubscribe("pageHeight",N),n.unsubscribe("pageWidth",B),n.unsubscribe("rotatedPage",z),n.unsubscribe("rotation",j),n.unsubscribe("pagesRotation",G),n.unsubscribe("viewMode",H)}},[]),a.useIsomorphicLayoutEffect(function(){return n.subscribe("currentPage",D),function(){n.unsubscribe("currentPage",D)}},[]),c?i.createElement(a.LazyRender,{testId:"thumbnail__list-container",attrs:{className:"rpv-thumbnail__list-container"}},i.createElement(h,{doc:c},function(e){return i.createElement(v,{currentPage:f,doc:c,labels:e,pagesRotation:w,pageHeight:_,pageWidth:k,renderCurrentPageLabel:t,renderThumbnailItem:r,rotatedPage:M,rotation:P,thumbnailDirection:o,thumbnailWidth:s,viewMode:I,onJumpToPage:W,onRotatePage:V})})):i.createElement("div",{"data-testid":"thumbnail-list__loader",className:"rpv-thumbnail__loader"},i.useContext(d).renderSpinner())}
r.thumbnailPlugin=function(e){var t=i.useMemo(function(){return a.createStore({rotatePage:function(){},viewMode:a.ViewMode.SinglePage})},[]),n=i.useState(""),o=n[0],l=n[1]
return{install:function(e){t.update("jumpToPage",e.jumpToPage),t.update("rotatePage",e.rotatePage)},onDocumentLoad:function(e){l(e.doc.loadingTask.docId),t.update("doc",e.doc)},onViewerStateChange:function(e){return t.update("currentPage",e.pageIndex),t.update("pagesRotation",e.pagesRotation),t.update("pageHeight",e.pageHeight),t.update("pageWidth",e.pageWidth),t.update("rotation",e.rotation),t.update("rotatedPage",e.rotatedPage),t.update("viewMode",e.viewMode),e},Cover:function(r){return i.createElement(c,s({},r,{renderSpinner:null==e?void 0:e.renderSpinner,store:t}))},Thumbnails:i.useCallback(function(n){return i.createElement(d.Provider,{value:{renderSpinner:(null==e?void 0:e.renderSpinner)||u}},i.createElement(m,{renderCurrentPageLabel:null==e?void 0:e.renderCurrentPageLabel,renderThumbnailItem:null==n?void 0:n.renderThumbnailItem,store:t,thumbnailDirection:(null==n?void 0:n.thumbnailDirection)||r.ThumbnailDirection.Vertical,thumbnailWidth:(null==e?void 0:e.thumbnailWidth)||100}))},[o])}}},"s2V/":function(e,t,r){"use strict"
e.exports=r("MNFz")},t5xF:function(e,r,n){"use strict"
var a=n("iD5t")
var o=function t(e){var t=Object.create(null)
return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r)
Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}(n("q1tI")),i=function(e){var t=e.files,r=o.useRef(),n=o.useContext(a.LocalizationContext).l10n,i=o.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft,s=o.useRef([]),l=n&&n.attachment?n.attachment.clickToDownload:"Click to download",c=function(e){var t=r.current,n=[].slice.call(t.getElementsByClassName("rpv-attachment__item"))
if(0!==n.length){n.forEach(function(e){return e.setAttribute("tabindex","-1")})
var a=document.activeElement,o=n[Math.min(n.length-1,Math.max(0,e(n,a)))]
o.setAttribute("tabindex","0"),o.focus()}}
return a.useIsomorphicLayoutEffect(function(){var e=r.current
if(e){var t=[].slice.call(e.getElementsByClassName("rpv-attachment__item"))
if(s.current=t,t.length>0){var n=t[0]
n.focus(),n.setAttribute("tabindex","0")}}},[]),o.createElement("div",{"data-testid":"attachment__list",className:a.classNames({"rpv-attachment__list":!0,"rpv-attachment__list--rtl":i}),ref:r,tabIndex:-1,onKeyDown:function(e){switch(e.key){case"ArrowDown":e.preventDefault(),c(function(e,t){return e.indexOf(t)+1})
break
case"ArrowUp":e.preventDefault(),c(function(e,t){return e.indexOf(t)-1})
break
case"End":e.preventDefault(),c(function(e,t){return e.length-1})
break
case"Home":e.preventDefault(),c(function(e,t){return 0})}}},t.map(function(e){return o.createElement("button",{className:"rpv-attachment__item",key:e.fileName,tabIndex:-1,title:l,type:"button",onClick:function(){return t=e.fileName,n="string"==typeof(r=e.data)?"":URL.createObjectURL(new Blob([r],{type:""})),(a=document.createElement("a")).style.display="none",a.href=n||t,a.setAttribute("download",function(e){var t=e.split("/").pop()
return t?t.split("#")[0].split("?")[0]:e}(t)),document.body.appendChild(a),a.click(),document.body.removeChild(a),void(n&&URL.revokeObjectURL(n))
var t,r,n,a}},e.fileName)}))},s=function(e){var t=e.doc,r=o.useContext(a.LocalizationContext).l10n,n=o.useContext(a.ThemeContext).direction===a.TextDirection.RightToLeft,s=r&&r.attachment?r.attachment.noAttachment:"There is no attachment",l=o.useState({files:[],isLoaded:!1}),c=l[0],u=l[1]
return o.useEffect(function(){t.getAttachments().then(function(e){var t=e?Object.keys(e).map(function(t){return{data:e[t].content,fileName:e[t].filename}}):[]
u({files:t,isLoaded:!0})})},[t]),c.isLoaded?0===c.files.length?o.createElement("div",{"data-testid":"attachment__empty",className:a.classNames({"rpv-attachment__empty":!0,"rpv-attachment__empty--rtl":n})},s):o.createElement(i,{files:c.files}):o.createElement(a.Spinner,null)},l=function(e){var t=e.store,r=o.useState(t.get("doc")),n=r[0],i=r[1],l=function(e){i(e)}
return o.useEffect(function(){return t.subscribe("doc",l),function(){t.unsubscribe("doc",l)}},[]),n?o.createElement(s,{doc:n}):o.createElement("div",{className:"rpv-attachment__loader"},o.createElement(a.Spinner,null))}
r.attachmentPlugin=function(){var e=o.useMemo(function(){return a.createStore({})},[])
return{onDocumentLoad:function(t){e.update("doc",t.doc)},Attachments:function(){return o.createElement(l,{store:e})}}}},uX5q:function(e,t,r){"use strict"
e.exports=r("gIn+")},zORM:function(e,t,r){"use strict"
e.exports=r("LIuf")}}])
