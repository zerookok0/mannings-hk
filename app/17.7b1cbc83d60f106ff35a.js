/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Wxvo:function(e,t,n){"use strict"
n.r(t),n.d(t,"QRCodeCanvas",function(){return QRCodeCanvas}),n.d(t,"QRCodeSVG",function(){return QRCodeSVG}),n.d(t,"default",function(){return v})
var r,s=n("q1tI"),o=n.n(s),i=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n])
if(a)for(var n of a(t))h.call(t,n)&&u(e,n,t[n])
return e},d=(e,t)=>{var n={}
for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r])
return n};(e=>{const t=class{constructor(e,n,r,s){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range")
if(s<-1||s>7)throw new RangeError("Mask value out of range")
this.size=4*e+17
let o=[]
for(let e=0;e<this.size;e++)o.push(!1)
for(let e=0;e<this.size;e++)this.modules.push(o.slice()),this.isFunction.push(o.slice())
this.drawFunctionPatterns()
const i=this.addEccAndInterleave(r)
if(this.drawCodewords(i),-1==s){let e=1e9
for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t)
const n=this.getPenaltyScore()
n<e&&(s=t,e=n),this.applyMask(t)}}assert(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}static encodeText(n,r){const s=e.QrSegment.makeSegments(n)
return t.encodeSegments(s,r)}static encodeBinary(n,r){const s=e.QrSegment.makeBytes(n)
return t.encodeSegments([s],r)}static encodeSegments(e,n,r=1,o=40,i=-1,a=!0){if(!(t.MIN_VERSION<=r&&r<=o&&o<=t.MAX_VERSION)||i<-1||i>7)throw new RangeError("Invalid value")
let l,h
for(l=r;;l++){const r=8*t.getNumDataCodewords(l,n),i=s.getTotalBits(e,l)
if(i<=r){h=i
break}if(l>=o)throw new RangeError("Data too long")}for(const e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])a&&h<=8*t.getNumDataCodewords(l,e)&&(n=e)
let u=[]
for(const t of e){appendBits(t.mode.modeBits,4,u),appendBits(t.numChars,t.mode.numCharCountBits(l),u)
for(const e of t.getData())u.push(e)}assert(u.length==h)
const c=8*t.getNumDataCodewords(l,n)
assert(u.length<=c),appendBits(0,Math.min(4,c-u.length),u),appendBits(0,(8-u.length%8)%8,u),assert(u.length%8==0)
for(let e=236;u.length<c;e^=253)appendBits(e,8,u)
let d=[]
for(;8*d.length<u.length;)d.push(0)
return u.forEach((e,t)=>d[t>>>3]|=e<<7-(7&t)),new t(l,n,d,i)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0)
this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4)
const e=this.getAlignmentPatternPositions(),t=e.length
for(let n=0;n<t;n++)for(let r=0;r<t;r++)0==n&&0==r||0==n&&r==t-1||n==t-1&&0==r||this.drawAlignmentPattern(e[n],e[r])
this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e
let n=t
for(let e=0;e<10;e++)n=n<<1^1335*(n>>>9)
const r=21522^(t<<10|n)
assert(r>>>15==0)
for(let e=0;e<=5;e++)this.setFunctionModule(8,e,getBit(r,e))
this.setFunctionModule(8,7,getBit(r,6)),this.setFunctionModule(8,8,getBit(r,7)),this.setFunctionModule(7,8,getBit(r,8))
for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,getBit(r,e))
for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,getBit(r,e))
for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,getBit(r,e))
this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return
let e=this.version
for(let t=0;t<12;t++)e=e<<1^7973*(e>>>11)
const t=this.version<<12|e
assert(t>>>18==0)
for(let e=0;e<18;e++){const n=getBit(t,e),r=this.size-11+e%3,s=Math.floor(e/3)
this.setFunctionModule(r,s,n),this.setFunctionModule(s,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const s=Math.max(Math.abs(r),Math.abs(n)),o=e+r,i=t+n
0<=o&&o<this.size&&0<=i&&i<this.size&&this.setFunctionModule(o,i,2!=s&&4!=s)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,1!=Math.max(Math.abs(r),Math.abs(n)))}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const n=this.version,r=this.errorCorrectionLevel
if(e.length!=t.getNumDataCodewords(n,r))throw new RangeError("Invalid argument")
const s=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],i=Math.floor(t.getNumRawDataModules(n)/8),a=s-i%s,l=Math.floor(i/s)
let h=[]
const u=t.reedSolomonComputeDivisor(o)
for(let n=0,r=0;n<s;n++){let s=e.slice(r,r+l-o+(n<a?0:1))
r+=s.length
const i=t.reedSolomonComputeRemainder(s,u)
n<a&&s.push(0),h.push(s.concat(i))}let c=[]
for(let e=0;e<h[0].length;e++)h.forEach((t,n)=>{(e!=l-o||n>=a)&&c.push(t[e])})
return assert(c.length==i),c}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument")
let n=0
for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5)
for(let r=0;r<this.size;r++)for(let s=0;s<2;s++){const o=t-s,i=0==(t+1&2)?this.size-1-r:r
!this.isFunction[i][o]&&n<8*e.length&&(this.modules[i][o]=getBit(e[n>>>3],7-(7&n)),n++)}}assert(n==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range")
for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r
switch(e){case 0:r=(n+t)%2==0
break
case 1:r=t%2==0
break
case 2:r=n%3==0
break
case 3:r=(n+t)%3==0
break
case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0
break
case 5:r=n*t%2+n*t%3==0
break
case 6:r=(n*t%2+n*t%3)%2==0
break
case 7:r=((n+t)%2+n*t%3)%2==0
break
default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0
for(let n=0;n<this.size;n++){let r=!1,s=0,o=[0,0,0,0,0,0,0]
for(let i=0;i<this.size;i++)this.modules[n][i]==r?5==++s?e+=t.PENALTY_N1:s>5&&e++:(this.finderPenaltyAddHistory(s,o),r||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),r=this.modules[n][i],s=1)
e+=this.finderPenaltyTerminateAndCount(r,s,o)*t.PENALTY_N3}for(let n=0;n<this.size;n++){let r=!1,s=0,o=[0,0,0,0,0,0,0]
for(let i=0;i<this.size;i++)this.modules[i][n]==r?5==++s?e+=t.PENALTY_N1:s>5&&e++:(this.finderPenaltyAddHistory(s,o),r||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),r=this.modules[i][n],s=1)
e+=this.finderPenaltyTerminateAndCount(r,s,o)*t.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let r=0;r<this.size-1;r++){const s=this.modules[n][r]
s==this.modules[n][r+1]&&s==this.modules[n+1][r]&&s==this.modules[n+1][r+1]&&(e+=t.PENALTY_N2)}let n=0
for(const e of this.modules)n=e.reduce((e,t)=>e+(t?1:0),n)
const r=this.size*this.size,s=Math.ceil(Math.abs(20*n-10*r)/r)-1
return assert(0<=s&&s<=9),assert(0<=(e+=s*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[]
{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2))
let n=[6]
for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r)
return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range")
let n=(16*e+128)*e+64
if(e>=2){const t=Math.floor(e/7)+2
n-=(25*t-10)*t-55,e>=7&&(n-=36)}return assert(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range")
let n=[]
for(let t=0;t<e-1;t++)n.push(0)
n.push(1)
let r=1
for(let s=0;s<e;s++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1])
r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map(e=>0)
for(const s of e){const e=s^r.shift()
r.push(0),n.forEach((n,s)=>r[s]^=t.reedSolomonMultiply(n,e))}return r}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range")
let n=0
for(let r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(t>>>r&1)*e
return assert(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1]
assert(t<=3*this.size)
const n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t
return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}}
let n=t
function appendBits(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range")
for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function getBit(e,t){return 0!=(e>>>t&1)}function assert(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n
const r=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument")
this.bitData=n.slice()}static makeBytes(e){let t=[]
for(const n of e)appendBits(n,8,t)
return new r(r.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!r.isNumeric(e))throw new RangeError("String contains non-numeric characters")
let t=[]
for(let n=0;n<e.length;){const r=Math.min(e.length-n,3)
appendBits(parseInt(e.substr(n,r),10),3*r+1,t),n+=r}return new r(r.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!r.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode")
let t,n=[]
for(t=0;t+2<=e.length;t+=2){let s=45*r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))
appendBits(s+=r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),11,n)}return t<e.length&&appendBits(r.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new r(r.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:r.isNumeric(e)?[r.makeNumeric(e)]:r.isAlphanumeric(e)?[r.makeAlphanumeric(e)]:[r.makeBytes(r.toUtf8ByteArray(e))]}static makeEci(e){let t=[]
if(e<0)throw new RangeError("ECI assignment value out of range")
if(e<128)appendBits(e,8,t)
else if(e<16384)appendBits(2,2,t),appendBits(e,14,t)
else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range")
appendBits(6,3,t),appendBits(e,21,t)}return new r(r.Mode.ECI,0,t)}static isNumeric(e){return r.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return r.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0
for(const r of e){const e=r.mode.numCharCountBits(t)
if(r.numChars>=1<<e)return 1/0
n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e)
let t=[]
for(let n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2)
return t}}
let s=r
s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=s})(r||(r={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}}
let n=t
n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n})(t=e.QrCode||(e.QrCode={}))})(r||(r={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}
let n=t
n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n})(t=e.QrSegment||(e.QrSegment={}))})(r||(r={}))
var f=r,g={L:f.QrCode.Ecc.LOW,M:f.QrCode.Ecc.MEDIUM,Q:f.QrCode.Ecc.QUARTILE,H:f.QrCode.Ecc.HIGH},m=128,E="L",C="#FFFFFF",M="#000000",w=!1,p=4,R=.1
function generatePath(e,t=0){const n=[]
return e.forEach(function(e,r){let s=null
e.forEach(function(o,i){if(!o&&null!==s)return n.push(`M${s+t} ${r+t}h${i-s}v1H${s+t}z`),void(s=null)
if(i!==e.length-1)o&&null===s&&(s=i)
else{if(!o)return
null===s?n.push(`M${i+t},${r+t} h1v1H${i+t}z`):n.push(`M${s+t},${r+t} h${i+1-s}v1H${s+t}z`)}})}),n.join("")}function excavateModules(e,t){return e.slice().map((e,n)=>n<t.y||n>=t.y+t.h?e:e.map((e,n)=>(n<t.x||n>=t.x+t.w)&&e))}function getImageSettings(e,t,n,r){if(null==r)return null
const s=n?p:0,o=e.length+2*s,i=Math.floor(t*R),a=o/t,l=(r.width||i)*a,h=(r.height||i)*a,u=null==r.x?e.length/2-l/2:r.x*a,c=null==r.y?e.length/2-h/2:r.y*a
let d=null
if(r.excavate){let e=Math.floor(u),t=Math.floor(c)
d={x:e,y:t,w:Math.ceil(l+u-e),h:Math.ceil(h+c-t)}}return{x:u,y:c,h,w:l,excavation:d}}var A=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}()
function QRCodeCanvas(e){const t=e,{value:n,size:r=m,level:s=E,bgColor:i=C,fgColor:a=M,includeMargin:l=w,style:h,imageSettings:u}=t,R=d(t,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),v=null==u?void 0:u.src,N=o.a.useRef(null),P=o.a.useRef(null),[y,B]=o.a.useState(!1)
o.a.useEffect(()=>{if(null!=N.current){const e=N.current,t=e.getContext("2d")
if(!t)return
let o=f.QrCode.encodeText(n,g[s]).getModules()
const h=l?p:0,c=o.length+2*h,d=getImageSettings(o,r,l,u),m=P.current,E=null!=d&&null!==m&&m.complete&&0!==m.naturalHeight&&0!==m.naturalWidth
E&&null!=d.excavation&&(o=excavateModules(o,d.excavation))
const C=window.devicePixelRatio||1
e.height=e.width=r*C
const M=r/c*C
t.scale(M,M),t.fillStyle=i,t.fillRect(0,0,c,c),t.fillStyle=a,A?t.fill(new Path2D(generatePath(o,h))):o.forEach(function(e,n){e.forEach(function(e,r){e&&t.fillRect(r+h,n+h,1,1)})}),E&&t.drawImage(m,d.x+h,d.y+h,d.w,d.h)}}),o.a.useEffect(()=>{B(!1)},[v])
const I=c({height:r,width:r},h)
let S=null
return null!=v&&(S=o.a.createElement("img",{src:v,key:v,style:{display:"none"},onLoad:()=>{B(!0)},ref:P})),o.a.createElement(o.a.Fragment,null,o.a.createElement("canvas",c({style:I,height:r,width:r,ref:N},R)),S)}function QRCodeSVG(e){const t=e,{value:n,size:r=m,level:s=E,bgColor:i=C,fgColor:a=M,includeMargin:l=w,imageSettings:h}=t,u=d(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"])
let R=f.QrCode.encodeText(n,g[s]).getModules()
const A=l?p:0,v=R.length+2*A,N=getImageSettings(R,r,l,h)
let P=null
null!=h&&null!=N&&(null!=N.excavation&&(R=excavateModules(R,N.excavation)),P=o.a.createElement("image",{xlinkHref:h.src,height:N.h,width:N.w,x:N.x+A,y:N.y+A,preserveAspectRatio:"none"}))
const y=generatePath(R,A)
return o.a.createElement("svg",c({height:r,width:r,viewBox:`0 0 ${v} ${v}`},u),o.a.createElement("path",{fill:i,d:`M0,0 h${v}v${v}H0z`,shapeRendering:"crispEdges"}),o.a.createElement("path",{fill:a,d:y,shapeRendering:"crispEdges"}),P)}var v=e=>{const t=e,{renderAs:n}=t,r=d(t,["renderAs"])
return"svg"===n?o.a.createElement(QRCodeSVG,c({},r)):o.a.createElement(QRCodeCanvas,c({},r))}}}])
