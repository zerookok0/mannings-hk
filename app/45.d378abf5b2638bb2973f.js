/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"0nbu":function(e,t,n){"use strict"
n.d(t,"a",function(){return v})
var o=n("lSNA"),r=n.n(o),c=n("J4zp"),a=n.n(c),i=n("q1tI"),s=n("+TN3"),l=n("y1Xp"),u=n("OlZo"),m=n("Cess"),d=n("znku"),p=n("2MHK"),f=n("ygAv"),g=n("O++b")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=function useCmsPage(e){var t=e.identifier,n=Object(l.a)(g.b,e.operations).getCMSPageQuery,o=Object(m.b)(),r=a()(o,2)[1].dispatch,c=Object(d.b)(),v=a()(c,1)[0].isSignedIn,b=Object(p.a)().deliveryOption,h=Object(i.useMemo)(function(){var e=Object(f.getCacheParams)({isSignedIn:v,deliveryOption:b}),n=_objectSpread({identifier:t},e)
if("offers/one-day-special"==t){var o=Math.floor(Date.now()/1e3),r=1800*Math.floor(o/1800)
n=_objectSpread(_objectSpread({},n),{},{v:r})}return n},[t,v,b]),y=Object(s.a)(n,{variables:h,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),_=y.loading,O=y.data,P=Object(u.b)(),w=a()(P,2)[1].actions.setPageLoading
Object(i.useEffect)(function(){return function(){w(!1)}},[w]),Object(i.useEffect)(function(){w(_)},[_,w])
var j=_&&!O,M=O?O.cmsPage:null
return Object(i.useEffect)(function(){!_&&M&&r({type:"CMS_PAGE_VIEW",payload:{url_key:M.url_key,title:M.title}})},[_,M,r]),{cmsPage:M,shouldShowLoadingIndicator:j}}},D01v:function(e,t,n){"use strict"
var o=n("LboF"),r=n.n(o),c=n("QRMS"),a={injectType:"singletonStyleTag",insert:"head",singleton:!0}
r()(c.a,a)
t.a=c.a.locals||{}},F3Ii:function(e,t,n){"use strict"
var o=n("JPst"),r=n.n(o)()(function(e){return e[1]})
r.push([e.i,".wellnessProfilePage-content-Xo9 .downLoadApp,\n.wellnessProfilePage-content-Xo9 .downLoadApp *,\n.wellnessProfilePage-content-Xo9 .downLoadApp img,\n.wellnessProfilePage-content-Xo9 .downLoadApp a {\n    cursor: pointer !important;\n}\n",""]),r.locals={content:"wellnessProfilePage-content-Xo9"},t.a=r},"O++b":function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var o,r=n("VkAN"),c=n.n(r),a=n("UYTu"),i=Object(a.a)(o||(o=c()(["\n    query GetCmsPage($identifier: String!, $v: Int, $_storeId: String, $_deliveryOption: String) {\n        cmsPage(identifier: $identifier, v: $v) {\n            url_key\n            content\n            content_heading\n            title\n            page_layout\n            meta_title\n            meta_keywords\n            meta_description\n            meta_tags\n        }\n    }\n"])))
t.b={getCMSPageQuery:i}},O58U:function(e,t,n){"use strict"
n.r(t)
var o=n("q1tI"),r=n.n(o),c=n("dDsW"),a=n("kriW"),i=n("0nbu"),s=n("STDB"),l=n("BBzE"),u=n("r+l8"),m=n("Q84e"),d=n("4cjH"),p=n("y1Xp"),f=n("LboF"),g=n.n(f),v=n("F3Ii"),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},h=(g()(v.a,b),v.a.locals||{})
t.default=function WellnessProfilePageWrapper(){var e=Object(p.a)(h),t=Object(o.useRef)(null),n=Object(c.a)().formatMessage,f=Object(i.a)({identifier:"wellness-profile"}),g=f.cmsPage,v=f.shouldShowLoadingIndicator
Object(o.useEffect)(function(){var e=t.current
if(e){var n=function applyDownloadAppCursor(){e.querySelectorAll(".downLoadApp, .downLoadApp *").forEach(function(e){e.style.cursor="pointer"})},o=function handleDownloadAppClick(e){e.target.closest(".downLoadApp")&&(e.preventDefault(),Object(d.a)())}
n()
var r=requestAnimationFrame(n)
return e.addEventListener("click",o),function(){cancelAnimationFrame(r),e.removeEventListener("click",o)}}},[null==g?void 0:g.content])
var b=Object(o.useMemo)(function(){return[{text:n({id:"myaccount.title",defaultMessage:"My Account"}),path:"/my-account"},{text:(null==g?void 0:g.title)||n({id:"myaccount.wellnessProfile.title",defaultMessage:"Wellness Profile"})}]},[null==g?void 0:g.title,n])
return v?r.a.createElement(m.a,null,r.a.createElement(u.a,null)):g?r.a.createElement(m.a,null,r.a.createElement(l.a,{pathMap:b}),r.a.createElement("div",{ref:t,className:e.content},r.a.createElement(s.a,{html:g.content}))):r.a.createElement(m.a,null,r.a.createElement(a.a,{id:"global.error",defaultMessage:"Something went wrong."}))}},Q84e:function(e,t,n){"use strict"
var o=n("q1tI"),r=n.n(o),c=n("y1Xp"),a=n("LboF"),i=n.n(a),s=n("Z1Wd"),l={injectType:"singletonStyleTag",insert:"head",singleton:!0},u=(i()(s.a,l),s.a.locals||{})
t.a=function PageContent(e){var t=e.children,n=Object(c.a)(u,e.classes)
return r.a.createElement("div",{className:n.root},t)}},QRMS:function(e,t,n){"use strict"
var o=n("JPst"),r=n.n(o)()(function(e){return e[1]})
r.push([e.i,'.cms-root-uMv {\n}\n\n.cms-heading-Pmp {\n\n    /* Medium */\n}\n\n.cms-root_empty-OpB,\n.cms-root_1column-8kV,\n.cms-root_2columnsLeft-SUq,\n.cms-root_2columnsRight-CoT,\n.cms-root_3columns-vhD,\n.cms-root_cmsFullWidth-fvn,\n.cms-root_categoryFullWidth-7P5,\n.cms-root_productFullWidth-G7C {\n}\n\n.cms-rootWith1140-nuW {\n}\n\n@media (min-width: 768px) {\n    .cms-root-uMv [class^="breadcrumbs-root"] {\n        margin-left: 0;\n    }\n}\n\n',""]),r.locals={root:"cms-root-uMv md_px-10",heading:"cms-heading-Pmp mb-2 mt-4 text-center text-3xl md_mb-10 md_text-4xl",root_empty:"cms-root_empty-OpB cms-root-uMv md_px-10",root_1column:"cms-root_1column-8kV cms-root-uMv md_px-10",root_2columnsLeft:"cms-root_2columnsLeft-SUq cms-root-uMv md_px-10",root_2columnsRight:"cms-root_2columnsRight-CoT cms-root-uMv md_px-10",root_3columns:"cms-root_3columns-vhD cms-root-uMv md_px-10",root_cmsFullWidth:"cms-root_cmsFullWidth-fvn cms-root-uMv md_px-10",root_categoryFullWidth:"cms-root_categoryFullWidth-7P5 cms-root-uMv md_px-10",root_productFullWidth:"cms-root_productFullWidth-G7C cms-root-uMv md_px-10",rootWith1140:"cms-rootWith1140-nuW max-w-[1140px] m-auto"},t.a=r},Z1Wd:function(e,t,n){"use strict"
var o=n("JPst"),r=n.n(o)()(function(e){return e[1]})
r.push([e.i,".PageContent-root-MwL {\n}\n\n\n",""]),r.locals={root:"PageContent-root-MwL max-w-site mx-auto"},t.a=r},"r+l8":function(e,t,n){"use strict"
var o=n("q1tI"),r=n.n(o),c=n("zrp3"),a=n("y1Xp"),i=n("D01v")
t.a=function CMSPageShimmer(e){var t=Object(a.a)(i.a,e.classes)
return r.a.createElement("div",{className:t.root,"aria-live":"polite","aria-busy":"true"},r.a.createElement(c.a,{width:"100%",height:"880px",key:"banner"}))}}}])
