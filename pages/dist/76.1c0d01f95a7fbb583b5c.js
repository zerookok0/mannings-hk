/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{Q84e:function(e,n,t){"use strict"
var a=t("q1tI"),o=t.n(a),c=t("y1Xp"),s=t("LboF"),r=t.n(s),i=t("Z1Wd"),l={injectType:"singletonStyleTag",insert:"head",singleton:!0},u=(r()(i.a,l),i.a.locals||{})
n.a=function PageContent(e){var n=e.children,t=Object(c.a)(u,e.classes)
return o.a.createElement("div",{className:t.root},n)}},Z1Wd:function(e,n,t){"use strict"
var a=t("JPst"),o=t.n(a)()(function(e){return e[1]})
o.push([e.i,".PageContent-root-MwL {\n}\n\n\n",""]),o.locals={root:"PageContent-root-MwL max-w-site mx-auto"},n.a=o},aJU8:function(e,n,t){"use strict"
t.r(n)
var a=t("q1tI"),o=t.n(a),c=t("Q84e"),s=t("4cjH"),r=t("Ty5D")
n.default=function DownloadAppRedirect(){var e=Object(r.h)(),n=new URLSearchParams(e.search).get("type")
return Object(a.useEffect)(function(){var e
"eCoupons"===n?e="eCoupons/activeRange=0":"myCoupons"===n?e="my-account/my-coupons":"wellnessProfile"===n&&(e="wellness-profile"),Object(s.a)(e)},[n]),o.a.createElement(c.a,null,o.a.createElement("div",null,"Redirecting..."))}}}])
