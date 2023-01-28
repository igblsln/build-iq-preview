"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[673],{3673:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(969),a=n(734),i=n(55),l=n(8121),o="customers",c="Customer",s=function(e,t){return(0,i.E7)("/".concat(l.o,"/").concat(e)+(t?"/comming-soon":""))},u=[{label:"Transctions",items:[{label:"Sales Booking",icon:"pi ml-3",template:s("salesbooking",!0)},{label:"Cancel Booking",icon:"pi ml-3",template:s("cancelbooking",!0)},{label:"Invoice",icon:"pi ml-3",template:s("invoice",!0)},{label:"Receipt",icon:"pi ml-3",template:s("receipt",!0)},{label:"Receipt Allocation",icon:"pi ml-3",template:s("receiptalloc",!0)}]},{label:"Configuration",items:[{label:"Customer",icon:"pi ml-3",template:s(o)}]}],d=n(2723),m=n(6234),p=n(3953),v=n(7765),f=n(4756),y=n(1387),g=n(8224),E=n(8079),b=n(2504),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},C="/sale/customer/",S=b.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listCustomer:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,b.DS)(C,"?page=".concat(t||1,"&page_size=").concat(n||b.IV))}},providesTags:function(e){var t;return e?[].concat((0,E.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:b.pJ.CUSTOMER,id:t}}))),[{type:b.pJ.CUSTOMER,id:"LIST"}]):[{type:b.pJ.CUSTOMER,id:"LIST"}]}}),addCustomer:e.mutation({query:function(e){return{url:C,method:"POST",body:e}},invalidatesTags:[{type:b.pJ.CUSTOMER,id:"LIST"}]}),getCustomer:e.query({query:function(e){return"".concat(C).concat(e)},providesTags:function(e,t,n){return[{type:b.pJ.CUSTOMER,id:n}]}}),updateCustomer:e.mutation({query:function(e){var t=e.key,n=h(e,["key"]);return{url:"".concat(C).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:b.pJ.CUSTOMER,id:null===e||void 0===e?void 0:e.id}]}}),getStates:e.query({query:function(){return{url:"/geo/state/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,E.Z)(e.map((function(e){var t=e.state_key;return{type:b.pJ.STATES,id:t}}))),[{type:b.pJ.STATES,id:"LIST"}])}}),getCities:e.query({query:function(e){return{url:"/geo/city/?state=".concat(e)}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,E.Z)(e.map((function(e){var t=e.city_key;return{type:b.pJ.CITIES,id:t}}))),[{type:b.pJ.CITIES,id:"LIST"}])}}),deleteCustomer:e.mutation({query:function(e){return{url:"".concat(C).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:b.pJ.CUSTOMER,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),T=S.useAddCustomerMutation,A=S.useDeleteCustomerMutation,k=S.useGetCustomerQuery,O=S.useListCustomerQuery,L=S.useUpdateCustomerMutation,N=(S.useGetErrorProneQuery,S.useGetCitiesQuery),q=S.useGetStatesQuery,w=(S.endpoints.getCustomer,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{c(r.next(e))}catch(t){i(t)}}function o(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}c((r=r.apply(e,t||[])).next())}))}),x=function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(!1),s=(0,m.Z)(n,2),u=s[0],E=s[1],h=(0,a.s0)(),C=(0,a.UO)().id,S=parseInt(C||""),A=isNaN(S)||S<=0,O=(0,r.useState)(""),x=(0,m.Z)(O,2),j=x[0],I=x[1],_=(0,b.ft)(),R=k(S,{skip:A}),K=R.data,P=R.isLoading,J=q().data,Q=N(j).data,U=T(),Z=(0,m.Z)(U,2),F=Z[0],M=Z[1].isLoading,W=L(),G=(0,m.Z)(W,2),H=G[0],D=G[1].isLoading,V=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"success",summary:e,detail:n,life:3e3})},B=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"error",summary:e,detail:n,life:3e3})},z=[{label:"Add",items:Q||[]}];return r.createElement(r.Fragment,null,r.createElement(y.F,{ref:t}),r.createElement(i.Rm,{baseRoute:"/".concat(l.o,"/").concat(o),description:c,id:S,data:K,isUpdating:M||D||u,isLoading:P,onSubmit:function(e){return w(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var n;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!A){t.next=7;break}return t.next=4,F(Object.assign(Object.assign({},e),_)).unwrap();case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,H(Object.assign(Object.assign({},e),_)).unwrap();case 9:n=t.sent;case 10:V("Success",n.detail),E(!0),setTimeout((function(){h("/".concat(l.o,"/").concat(o))}),b.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),B("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){var a,l,o,c;return r.createElement("div",{className:"pl-8"},r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"id",className:(0,f.AK)("col-2",{"p-error":n.id})},"Customer Code*"),r.createElement(p.Qr,{name:"id",control:e,rules:{required:"Item Code is required.",maxLength:{value:25,message:"max 25 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(v.o,Object.assign({disabled:!A,id:t.name},t,{className:(0,f.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(a=null===n||void 0===n?void 0:n.id)||void 0===a?void 0:a.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"name",className:(0,f.AK)("col-2",{"p-error":n.name})},"Customer Name*"),r.createElement(p.Qr,{name:"name",control:e,rules:{required:"Item Description is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,f.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(l=null===n||void 0===n?void 0:n.name)||void 0===l?void 0:l.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"addr1",className:(0,f.AK)("col-2",{"p-error":n.addr1})}," Address Line 1"),r.createElement(p.Qr,{name:"addr1",control:e,rules:{maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(v.o,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,f.AK)({"p-invalid":n.invalid})}))}})),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"addr2",className:(0,f.AK)("col-2",{"p-error":n.addr2})}," Address Line 2"),r.createElement(p.Qr,{name:"addr2",control:e,rules:{maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(v.o,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,f.AK)({"p-invalid":n.invalid})}))}})),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"state_key",className:(0,f.AK)("col-2",{"p-error":n.state_key})},"State*"),r.createElement(p.Qr,{name:"state_key",control:e,rules:{required:"State is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(g.L,Object.assign({id:t.name},t,{style:{width:"30%"},className:(0,f.AK)({"p-invalid":n.invalid}),onChange:function(e){I(e.value),t.onChange(e.value)},optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:J}))}}),(0,i.Hb)(null===(o=null===n||void 0===n?void 0:n.state_key)||void 0===o?void 0:o.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"city_key",className:(0,f.AK)("col-2",{"p-error":n.descr})},"City*"),r.createElement(p.Qr,{name:"city_key",control:e,rules:{required:"City is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(g.L,Object.assign({optionGroupTemplate:r.createElement("div",{style:{cursor:"pointer",textAlign:"center",backgroundColor:"lightgray"},onClick:function(){return h("/projects/city")}},"--Add And Edit--"),id:t.name},t,{style:{width:"30%"},className:(0,f.AK)({"p-invalid":n.invalid}),optionValue:"key",optionGroupLabel:"label",optionLabel:"name",optionGroupChildren:"items",options:z}))}}),(0,i.Hb)(null===(c=null===n||void 0===n?void 0:n.city_key)||void 0===c?void 0:c.message)))}}))},j=function(e){var t=O({}),n=t.data,a=t.isLoading,s=A(),u=(0,m.Z)(s,2),d=u[0],p=u[1].isLoading;return r.createElement(i.PS,{baseRoute:"/".concat(l.o,"/").concat(o),description:c,isLoading:a||p,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return d(e).unwrap()},newTable:!0,showHeader:!0},r.createElement(i._P,{field:"id",header:"Customer Code",filteringType:"number"}),r.createElement(i._P,{field:"name",header:"Customer Name",filteringType:"text"}))},I=r.createElement(a.AW,{path:o},r.createElement(a.AW,{path:"new",element:r.createElement(x,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(x,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(j,null)})),_=function(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"/",element:r.createElement(i.SV,{navItems:u})},r.createElement(a.AW,{index:!0,element:r.createElement(a.Fg,{to:o,replace:!0})}),I,r.createElement(a.AW,{path:":page/comming-soon",element:r.createElement(i.hg,null)}),r.createElement(a.AW,{path:"*",element:r.createElement(i.EN,{relative:!0})})))}}}]);
//# sourceMappingURL=673.cd2cdf44.chunk.js.map