/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~15.5.2, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/TZO":function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r,o=n("VkAN"),a=n.n(o),s=n("UYTu"),i=Object(s.a)(r||(r=a()(["\n    fragment CustomerAddressBookAddressFragment on CustomerAddress {\n        __typename\n        id\n        city\n        country_code\n        default_billing\n        default_shipping\n        firstname\n        lastname\n        region{\n            region\n            region_code\n            region_id\n        }\n        district{\n            id\n            code\n            name\n        }\n        postcode\n        street\n        telephone\n    }\n"])))},"6+lO":function(e,t,n){"use strict"
n.d(t,"a",function(){return T})
var r,a,s,d,c=n("lSNA"),u=n.n(c),l=n("yXPU"),p=n.n(l),b=n("J4zp"),g=n.n(b),y=n("q1tI"),O=n("+TN3"),j=n("pZLH"),m=n("OlZo"),v=n("znku"),_=n("J3e4"),h=n("dDsW"),C=n("y1Xp"),A=n("VkAN"),w=n.n(A),D=n("UYTu"),S=n("/TZO"),k=Object(D.a)(r||(r=w()(["\n    query GetCustomerAddressesForAddressBook {\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        customer {\n            addresses {\n                id\n                ...CustomerAddressBookAddressFragment\n            }\n        }\n        countries {\n            id\n            full_name_locale\n        }\n    }\n    ","\n"])),S.a),P=Object(D.a)(a||(a=w()(["\n    mutation AddNewCustomerAddressToAddressBook(\n        $address: CustomerAddressInput!\n    ) {\n        createCustomerAddress(input: $address) {\n            # We don't manually write to the cache to update the collection\n            # after adding a new address so there's no need to query for a bunch\n            # of address fields here. We use refetchQueries to refresh the list.\n            id\n        }\n    }\n"]))),E=Object(D.a)(s||(s=w()(["\n    mutation UpdateCustomerAddressInAddressBook(\n        $addressId: Int!\n        $updated_address: CustomerAddressInput!\n    ) {\n        updateCustomerAddress(id: $addressId, input: $updated_address) {\n            id\n            ...CustomerAddressBookAddressFragment\n        }\n    }\n    ","\n"])),S.a),I={createCustomerAddressMutation:P,deleteCustomerAddressMutation:Object(D.a)(d||(d=w()(["\n    mutation DeleteCustomerAddressFromAddressBook($addressId: Int!) {\n        deleteCustomerAddress(id: $addressId)\n    }\n"]))),getCustomerAddressesQuery:k,updateCustomerAddressMutation:E},R=n("Cess")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){u()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _regenerator(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.toStringTag||"@@toStringTag"
function i(n,r,o,s){var i=r&&r.prototype instanceof Generator?r:Generator,d=Object.create(i.prototype)
return _regeneratorDefine2(d,"_invoke",function(n,r,o){var s,i,c,u=0,l=o||[],f=!1,p={p:0,n:0,v:e,a:d,f:d.bind(e,4),d:function d(t,n){return s=t,i=0,c=e,p.n=n,a}}
function d(n,r){for(i=n,c=r,t=0;!f&&u&&!o&&t<l.length;t++){var o,s=l[t],d=p.p,b=s[2]
n>3?(o=b===r)&&(c=s[(i=s[4])?5:(i=3,3)],s[4]=s[5]=e):s[0]<=d&&((o=n<2&&d<s[1])?(i=0,p.v=r,p.n=s[1]):d<b&&(o=n<3||s[0]>r||r>b)&&(s[4]=n,s[5]=r,p.n=b,i=0))}if(o||n>1)return a
throw f=!0,r}return function(o,l,b){if(u>1)throw TypeError("Generator is already running")
for(f&&1===l&&d(l,b),i=l,c=b;(t=i<2?e:c)||!f;){s||(i?i<3?(i>1&&(p.n=-1),d(i,c)):p.n=c:p.v=c)
try{if(u=2,s){if(i||(o="next"),t=s[o]){if(!(t=t.call(s,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,i<2&&(i=0)}else 1===i&&(t=s.return)&&t.call(s),i<2&&(c=TypeError("The iterator does not provide a '"+o+"' method"),i=1)
s=e}else if((t=(f=p.n<0)?c:n.call(r,p))!==a)break}catch(t){s=e,i=1,c=t}finally{u=1}}return{value:t,done:f}}}(n,o,s),!0),d}var a={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(_regeneratorDefine2(t={},r,function(){return this}),t),c=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s)
function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(e,o,"GeneratorFunction")),e.prototype=Object.create(c),e}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(c,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,o,"GeneratorFunction"),_regeneratorDefine2(c),_regeneratorDefine2(c,o,"Generator"),_regeneratorDefine2(c,r,function(){return this}),_regeneratorDefine2(c,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:f}})()}function _regeneratorDefine2(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}(_regeneratorDefine2=function _regeneratorDefine(e,t,n,r){function o(t,n){_regeneratorDefine2(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))})(e,t,n,r)}var T=function useAddressBookPage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.setDeleteAddress,n=Object(C.a)(I,e.operations),r=n.createCustomerAddressMutation,o=n.deleteCustomerAddressMutation,a=n.getCustomerAddressesQuery,s=n.updateCustomerAddressMutation,i=Object(_.a)(),d=g()(i,2)[1].addToast,c=Object(h.a)().formatMessage,u=Object(m.b)(),l=g()(u,2)[1].actions.setPageLoading,f=Object(v.b)(),b=g()(f,1)[0],A=b.isSignedIn,w=b.currentUser,D=Object(R.b)(),S=g()(D,2)[1].dispatch,k=Object(O.a)(a,{fetchPolicy:"cache-and-network",skip:!A}),P=k.data,E=k.loading,T=Object(j.a)(o),F=g()(T,2),G=F[0],M=F[1].loading,q=Object(y.useState)(),K=g()(q,2),V=K[0],Q=K[1],L=!!P&&E,U=P&&P.customer&&P.customer.addresses||[],N=Object(j.a)(r),B=g()(N,2),$=B[0],J=B[1],z=J.data,x=J.error,Z=J.loading,H=Object(j.a)(s),W=g()(H,2),X=W[0],Y=W[1],ee=Y.data,te=Y.error,ne=Y.loading,re=Object(y.useState)(!1),oe=g()(re,2),ae=oe[0],se=oe[1],ie=Object(y.useState)(!1),de=g()(ie,2),ce=de[0],ue=de[1],le=Object(y.useState)({country_code:"HK"}),fe=g()(le,2),pe=fe[0],be=fe[1],ge=Object(y.useState)(!1),ye=g()(ge,2),Oe=ye[0],je=ye[1]
Object(y.useEffect)(function(){l(L)},[L,l])
var me=Object(y.useCallback)(function(){je(!1),ue(!1),be({country_code:"HK"}),se(!0)},[]),ve=Object(y.useCallback)(function(e){Q(e)},[]),_e=Object(y.useCallback)(function(){Q(null)},[]),he=Object(y.useCallback)(p()(_regenerator().m(function _callee(){var e,n
return _regenerator().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,!(e=U.find(function(e){return e.id===V}))||!e.default_shipping){r.n=2
break}return n={default_shipping:!1},r.n=1,X({variables:{addressId:V,updated_address:n,loading:!0}})
case 1:S({type:"USER_ADDRESS_EDIT",payload:{id:V,address:n,user:w}})
case 2:return r.n=3,G({variables:{addressId:V,loading:!0},context:{shouldErrorHandler:!0},refetchQueries:[{query:a}],awaitRefetchQueries:!0})
case 3:"function"==typeof t&&t(V),S({type:"USER_ADDRESS_DELETE",payload:{addressId:V,user:w}}),d({type:"success",message:c({id:"addressBook.AddressRemovedSuccess",defaultMessage:"Address removed successfully"}),timeout:5e3}),Q(null),r.n=5
break
case 4:return r.p=4,r.v,r.a(2)
case 5:return r.a(2)}},_callee,null,[[0,4]])})),[t,V,U,G,X,a,S,w]),Ce=Object(y.useCallback)(function(e,t){if(je(!1),ue(!0),void 0!==t){var n=U.find(function(e){return e.id==t})
if((n=_objectSpread({},n)).telephone){var r,o,a=n.telephone.match(/(\+86|\+852|\+853)(\d+)/)
if(a){var s=g()(a,3),i=(s[0],s[1]),d=s[2]
n.area_code=i,n.telephone=d}n.region_id=null===(r=n.region)||void 0===r?void 0:r.region_id,n.district_id=null===(o=n.district)||void 0===o?void 0:o.id}be(n)}else be(e)
se(!0)},[U]),Ae=Object(y.useCallback)(function(){se(!1)},[]),we=Object(y.useCallback)(function(){var e=p()(_regenerator().m(function _callee2(e){var t,n
return _regenerator().w(function(r){for(;;)switch(r.p=r.n){case 0:if(!ce){r.n=5
break}return r.p=1,t=_objectSpread(_objectSpread({},e),{},{street:e.street.filter(function(e){return e})}),r.n=2,X({variables:{addressId:pe.id,updated_address:t,loading:!0},refetchQueries:[{query:a}],awaitRefetchQueries:!0})
case 2:S({type:"USER_ADDRESS_EDIT",payload:{id:pe.id,address:t,user:w,loading:!0}}),se(!1),r.n=4
break
case 3:return r.p=3,r.v,je(!0),r.a(2)
case 4:r.n=8
break
case 5:return r.p=5,n=_objectSpread(_objectSpread({},e),{},{street:e.street.filter(function(e){return e})}),r.n=6,$({variables:{address:n,loading:!0},refetchQueries:[{query:a}],awaitRefetchQueries:!0})
case 6:S({type:"USER_ADDRESS_CREATE",payload:{address:n,user:w}}),se(!1),r.n=8
break
case 7:return r.p=7,r.v,je(!0),r.a(2)
case 8:return r.a(2)}},_callee2,null,[[5,7],[1,3]])}))
return function(t){return e.apply(this,arguments)}}(),[$,pe,a,ce,X,S,w]),De=Object(y.useCallback)(function(){var e=p()(_regenerator().m(function _callee3(e){var t
return _regenerator().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,t={default_shipping:!0},n.n=1,X({variables:{addressId:e,updated_address:t,loading:!0},refetchQueries:[{query:a}],awaitRefetchQueries:!0})
case 1:S({type:"USER_ADDRESS_EDIT",payload:{id:e,address,user:w}}),n.n=3
break
case 2:return n.p=2,n.v,je(!0),n.a(2)
case 3:return n.a(2)}},_callee3,null,[[0,2]])}))
return function(t){return e.apply(this,arguments)}}(),[U,X,a])
Object(y.useEffect)(function(){ee&&d({type:"success",message:c({id:"addressBook.updateDefaultAddress",defaultMessage:"Your default address was updated."}),timeout:3e3})},[ee]),Object(y.useEffect)(function(){z&&d({type:"success",message:c({id:"addressBook.createAddressSuccess",defaultMessage:"Create address successfully"}),timeout:3e3})},[z])
var Se=Object(y.useMemo)(function(){return Oe?new Map([["createCustomerAddressMutation",x],["updateCustomerAddressMutation",te]]):new Map},[x,Oe,te]),ke=Object(y.useMemo)(function(){var e=new Map
P&&P.countries.forEach(function(t){e.set(t.id,t.full_name_locale)})
return e},[P])
return{confirmDeleteAddressId:V,countryDisplayNameMap:ke,customerAddresses:U,formErrors:Se,formAddress:pe,handleAddAddress:me,handleCancelDeleteAddress:_e,handleCancelDialog:Ae,handleConfirmDeleteAddress:he,handleConfirmDialog:we,handleDeleteAddress:ve,handleEditAddress:Ce,handleUpdateDefaultAddress:De,isDeletingCustomerAddress:M,isDialogBusy:Z||ne,isDialogEditMode:ce,isDialogOpen:ae,isLoading:!P&&E}}},PTz9:function(e,t,n){"use strict"
var r=n("JPst"),o=n.n(r)()(function(e){return e[1]})
o.push([e.i,".region-root-aGR {\n    grid-area: state;\n}\n",""]),o.locals={root:"region-root-aGR"},t.a=o},ZPDq:function(e,t,n){"use strict"
var r,o=n("pVnL"),a=n.n(o),s=n("lSNA"),i=n.n(s),d=n("QILm"),c=n.n(d),u=n("q1tI"),l=n.n(u),f=n("dDsW"),p=n("17x9"),b=n("i6bm"),g=n("y1Xp"),y=n("z8z7"),O=n("1Aku"),j=n("ZLnw"),m=n("LboF"),v=n.n(m),_=n("PTz9"),h={injectType:"singletonStyleTag",insert:"head",singleton:!0},C=(v()(_.a,h),_.a.locals||{}),A=n("VkAN"),w=n.n(A),D=n("UYTu"),S=Object(D.a)(r||(r=w()(["\n    query GetRegions($countryCode: String!) {\n        country(id: $countryCode) {\n            id\n            available_regions {\n                code\n                id\n                name\n                available_districts{\n                    code\n                    id\n                    name\n                }\n            }\n        }\n    }\n"]))),k=["classes","regionError","countryCodeField","fieldInput","fieldSelect","label","translationId","optionValueKey","onChange"]
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var P=function Region(e){var t=e.classes,n=e.regionError,r=e.countryCodeField,o=e.fieldInput,s=e.fieldSelect,d=e.label,u=e.translationId,p=e.optionValueKey,m=e.onChange,v=c()(e,k),_=Object(f.a)().formatMessage,h=Object(b.a)({countryCodeField:r,fieldInput:o,fieldSelect:s,optionValueKey:p,queries:{getRegionsQuery:S}}),A=h.loading,w=h.regions,D=Object(g.a)(C,t),P=function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({classes:D,disabled:A,onChange:function _onChange(e){var t=e.target.value,n=w.find(function(e){return e.key==t}),r=[]
n&&(r=n.districts.map(function(e){return{label:e.name,value:e.id}})),m(n,r)}},v),E=w.length||A?l.a.createElement(O.a,a()({regionError:n},P,{field:s,id:D.root,items:w})):l.a.createElement(j.a,a()({},P,{field:o,id:D.root,regionError:n}))
return l.a.createElement(y.a,{id:D.root,label:_({id:u,defaultMessage:d}),classes:{root:D.root}},E)}
P.defaultProps={countryCodeField:"country",fieldInput:"region",fieldSelect:"region",label:"Region",translationId:"global.region",optionValueKey:"code"},P.propTypes={classes:Object(p.shape)({root:p.string}),countryCodeField:p.string,fieldInput:p.string,fieldSelect:p.string,label:p.string,translationId:p.string,optionValueKey:p.string,validate:p.func,initialValue:Object(p.oneOfType)([p.number,p.string]),onChange:p.func.isRequired}
t.a=P},e2hk:function(e,t,n){"use strict"
var r=n("JPst"),o=n.n(r)()(function(e){return e[1]})
o.push([e.i,".country-root-e8L {\n    grid-area: country;\n}\n",""]),o.locals={root:"country-root-e8L"},t.a=o},fZ0X:function(e,t,n){"use strict"
var r=n("pVnL"),o=n.n(r),a=n("lSNA"),s=n.n(a),i=n("J4zp"),d=n.n(i),c=n("QILm"),u=n.n(c),l=n("q1tI"),f=n.n(l),p=n("dDsW"),b=n("17x9"),g=n("y1Xp"),y=n("z8z7"),O=n("1Aku"),j=n("LboF"),m=n.n(j),v=n("e2hk"),_={injectType:"singletonStyleTag",insert:"head",singleton:!0},h=(m()(v.a,_),v.a.locals||{}),C=n("+TN3"),A=n("jJCy"),w=["classes","field","label","translationId","onChange"]
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var D=function Country(e){var t=e.classes,n=e.field,r=e.label,a=e.translationId,i=e.onChange,c=u()(e,w),b=Object(C.a)(A.a),j=b.data,m=(b.loading,Object(p.a)().formatMessage),v=f.a.useState([]),_=d()(v,2),D=_[0],S=_[1]
Object(l.useEffect)(function(){if(j){var e=j.countries.filter(function(e){return"HK"===e.id}).map(function(e){return{label:e.full_name_english||e.two_letter_abbreviation,value:e.two_letter_abbreviation}})
S(e)}},[j])
var k=Object(g.a)(h,t),P=function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({classes:k,field:n,items:D||[],onChange:i},c)
return f.a.createElement(y.a,{id:k.root,label:m({id:a,defaultMessage:r}),classes:{root:k.root}},f.a.createElement(O.a,o()({},P,{id:k.root})))}
D.defaultProps={field:"country",label:"Country / Region",translationId:"global.countryRegion"},D.propTypes={classes:Object(b.shape)({root:b.string}),field:b.string,label:b.string,translationId:b.string,validate:b.func,initialValue:b.string,onChange:b.func.isRequired}
t.a=D},i6bm:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r=n("q1tI"),o=n("+TN3"),a=n("8UhI"),s=n("c3RJ"),i=function useRegion(e){var t=e.countryCodeField,n=void 0===t?"country":t,i=e.fieldInput,d=void 0===i?"region":i,c=e.fieldSelect,u=void 0===c?"region":c,l=e.optionValueKey,f=void 0===l?"code":l,p=e.queries.getRegionsQuery,b=Object(r.useRef)(!1),g=Object(s.a)(n).value,y=Object(a.i)(d),O=Object(a.i)(u),j=Object(o.a)(p,{variables:{countryCode:g},skip:!g}),m=j.data,v=j.loading
Object(r.useEffect)(function(){g&&!v&&(b.current?(y.exists()&&y.setValue(),O.exists()&&O.setValue()):b.current=!0)},[g,y,O,v])
var _=[{label:"Loading Regions...",value:""}]
if(m){var h=m.country.available_regions
h?(_=h.map(function(e){return{key:e.id,label:e.name,value:e[f],districts:e.available_districts}})).unshift({disabled:!0,hidden:!0,label:"",value:""}):_=[]}return{loading:v,regions:_}}},jJCy:function(e,t,n){"use strict"
n.d(t,"a",function(){return d}),n.d(t,"b",function(){return c})
var r,o,a=n("VkAN"),s=n.n(a),i=n("UYTu"),d=Object(i.a)(r||(r=s()(["\n    query GetCountries {\n        countries {\n            id\n            full_name_english\n            full_name_locale\n            two_letter_abbreviation\n        }\n    }\n"]))),c=Object(i.a)(o||(o=s()(["\n    query GetRegions($countryCode: String!) {\n        country(id: $countryCode) {\n            id\n            available_regions {\n                code\n                id\n                name\n                available_districts {\n                    code\n                    id\n                    name\n                }\n            }\n        }\n    }\n"])))}}])
