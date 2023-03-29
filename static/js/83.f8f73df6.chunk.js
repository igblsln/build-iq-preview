"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[83],{6083:function(e,t,n){n.r(t),n.d(t,{default:function(){return ve}});var a=n(969),r=n(734),o=n(1930),i=n(8121),l="customers",c="Customer",u=function(e,t){return(0,o.E7)("/".concat(i.o,"/").concat(e)+(t?"/comming-soon":""))},s=[{label:"Transctions",items:[{label:"Sale Booking",icon:"pi ml-3",template:u("salebooking")},{label:"Sale Agreement",icon:"pi ml-3",template:u("saleagreement")}]},{label:"Configuration",items:[{label:"Customer",icon:"pi ml-3",template:u(l)}]}],d=n(2723),m=n(6234),p=n(3953),v=n(7765),f=n(4756),g=n(1387),y=n(8224),E=n(8391),h=n(8079),S=n(690),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},A="/sale/customer/",L=S.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listCustomer:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,S.DS)(A,"?page=".concat(t||1,"&page_size=").concat(n||S.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:S.pJ.CUSTOMER,id:t}}))),[{type:S.pJ.CUSTOMER,id:"LIST"}]):[{type:S.pJ.CUSTOMER,id:"LIST"}]}}),addCustomer:e.mutation({query:function(e){return{url:A,method:"POST",body:e}},invalidatesTags:[{type:S.pJ.CUSTOMER,id:"LIST"}]}),getCustomer:e.query({query:function(e){return"".concat(A).concat(e)},providesTags:function(e,t,n){return[{type:S.pJ.CUSTOMER,id:n}]}}),updateCustomer:e.mutation({query:function(e){var t=e.key,n=b(e,["key"]);return{url:"".concat(A).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:S.pJ.CUSTOMER,id:null===e||void 0===e?void 0:e.id}]}}),getStates:e.query({query:function(){return{url:"/geo/state/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,h.Z)(e.map((function(e){var t=e.state_key;return{type:S.pJ.STATES,id:t}}))),[{type:S.pJ.STATES,id:"LIST"}])}}),getCities:e.query({query:function(e){return{url:"/geo/city/?state=".concat(e)}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,h.Z)(e.map((function(e){var t=e.city_key;return{type:S.pJ.CITIES,id:t}}))),[{type:S.pJ.CITIES,id:"LIST"}])}}),deleteCustomer:e.mutation({query:function(e){return{url:"".concat(A).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:S.pJ.CUSTOMER,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),T=L.useAddCustomerMutation,k=L.useDeleteCustomerMutation,N=L.useGetCustomerQuery,I=L.useListCustomerQuery,w=L.useUpdateCustomerMutation,x=(L.useGetErrorProneQuery,L.useGetCitiesQuery),C=L.useGetStatesQuery,O=(L.endpoints.getCustomer,function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))}),_=function(e){var t=(0,a.useRef)(null),n=(0,a.useState)(!1),u=(0,m.Z)(n,2),s=u[0],h=u[1],b=(0,r.s0)(),A=(0,r.UO)().id,L=parseInt(A||""),k=isNaN(L)||L<=0,I=(0,a.useState)(""),_=(0,m.Z)(I,2),P=_[0],q=_[1],j=(0,S.ft)(),R=N(L,{skip:k}),M=R.data,Z=R.isLoading,B=C().data,W=x(P).data,G=T(),D=(0,m.Z)(G,2),U=D[0],V=D[1].isLoading,J=w(),F=(0,m.Z)(J,2),K=F[0],Q=F[1].isLoading,H=function(e,n){var a;null===(a=null===t||void 0===t?void 0:t.current)||void 0===a||a.show({severity:"success",summary:e,detail:n,life:3e3})},z=function(e,n){var a;null===(a=null===t||void 0===t?void 0:t.current)||void 0===a||a.show({severity:"error",summary:e,detail:n,life:3e3})},Y=[{label:"Add",items:W||[]}];return a.createElement(a.Fragment,null,a.createElement(g.F,{ref:t}),a.createElement(o.Rm,{baseRoute:"/".concat(i.o,"/").concat(l),description:c,id:L,data:M,isUpdating:V||Q||s,isLoading:Z,onSubmit:function(e){return O(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var n,a;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!k){t.next=7;break}return t.next=4,U(Object.assign(Object.assign({},e),j)).unwrap();case 4:a=t.sent,t.next=10;break;case 7:return t.next=9,K(Object.assign(Object.assign({},e),j)).unwrap();case 9:a=t.sent;case 10:H("Success",a.detail),h(!0),setTimeout((function(){b("/".concat(i.o,"/").concat(l))}),S.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),z("An error occurred",(null===(n=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===n?void 0:n.detail)||"We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){var r,i,l;return a.createElement("div",{className:"pl-8"},a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"name",className:(0,f.AK)("col-2",{"p-error":n.name})},"Customer Name*"),a.createElement(p.Qr,{name:"name",control:e,rules:{required:"Item Description is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,f.AK)({"p-invalid":n.invalid})}))}}),(0,o.Hb)(null===(r=null===n||void 0===n?void 0:n.name)||void 0===r?void 0:r.message)),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"addr1",className:(0,f.AK)("col-2",{"p-error":n.addr1})}," Address Line 1"),a.createElement(p.Qr,{name:"addr1",control:e,rules:{maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,f.AK)({"p-invalid":n.invalid})}))}})),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"addr2",className:(0,f.AK)("col-2",{"p-error":n.addr2})}," Address Line 2"),a.createElement(p.Qr,{name:"addr2",control:e,rules:{maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,f.AK)({"p-invalid":n.invalid})}))}})),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"state_key",className:(0,f.AK)("col-2",{"p-error":n.state_key})},"State*"),a.createElement(p.Qr,{name:"state_key",control:e,rules:{required:"State is required."},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(y.L,Object.assign({id:t.name},t,{style:{width:"30%"},className:(0,f.AK)({"p-invalid":n.invalid}),onChange:function(e){q(e.value),t.onChange(e.value)},optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:B}))}}),(0,o.Hb)(null===(i=null===n||void 0===n?void 0:n.state_key)||void 0===i?void 0:i.message)),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"city_key",className:(0,f.AK)("col-2",{"p-error":n.descr})},"City*"),a.createElement(p.Qr,{name:"city_key",control:e,rules:{required:"City is required."},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(y.L,Object.assign({optionGroupTemplate:a.createElement("div",{style:{cursor:"pointer",textAlign:"center",backgroundColor:"lightgray"},onClick:function(){return b("/projects/city")}},"--Add And Edit--"),id:t.name},t,{style:{width:"30%"},className:(0,f.AK)({"p-invalid":n.invalid}),optionValue:"key",optionGroupLabel:"label",optionLabel:"name",optionGroupChildren:"items",options:Y}))}}),(0,o.Hb)(null===(l=null===n||void 0===n?void 0:n.city_key)||void 0===l?void 0:l.message)),a.createElement("div",{className:"field"},a.createElement("label",{style:{margin:"auto"},htmlFor:"inactive",className:(0,f.AK)("col-2",{"p-error":n.inactive})},"Inactive"),a.createElement(p.Qr,{defaultValue:"N",name:"inactive",control:e,render:function(e){var t=e.field;e.fieldState;return a.createElement(E.X,Object.assign({checked:t.value,trueValue:"Y",falseValue:"N",id:t.name},t))}})))}}))},P=function(e){var t=I({}),n=t.data,r=t.isLoading,u=k(),s=(0,m.Z)(u,2),d=s[0],p=s[1].isLoading;return a.createElement(o.PS,{baseRoute:"/".concat(i.o,"/").concat(l),description:c,isLoading:r||p,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return d(e).unwrap()},newTable:!0,showHeader:!0},a.createElement(o._P,{field:"id",header:"Customer Code",filteringType:"number"}),a.createElement(o._P,{field:"name",header:"Customer Name",filteringType:"text"}),a.createElement(o._P,{field:"inactive",header:"Status",filteringType:"text",displayValueGetter:function(e){return"Y"===e.inactive?"Inactive":"Active"}}))},q=a.createElement(r.AW,{path:l},a.createElement(r.AW,{path:"new",element:a.createElement(_,null)}),a.createElement(r.AW,{path:":id/edit",element:a.createElement(_,null)}),a.createElement(r.AW,{index:!0,element:a.createElement(P,null)})),j=n(4576),R=n(3127),M=n(6770),Z=n(8356),B=n(6098),W=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},G="/sale/booking/",D=S.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listSaleBooking:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,S.DS)(G,"?page=".concat(t||1,"&page_size=").concat(n||S.IV))}},providesTags:function(e){return e?[].concat((0,h.Z)(null===e||void 0===e?void 0:e.results.map((function(e){var t=e.key;return{type:S.pJ.SALE_BOOKING,key:t}}))),[{type:S.pJ.SALE_BOOKING,id:"LIST"}]):[{type:S.pJ.SALE_BOOKING,id:"LIST"}]}}),addSaleBooking:e.mutation({query:function(e){return{url:G,method:"POST",body:e}},invalidatesTags:[{type:S.pJ.SALE_BOOKING,id:"LIST"}]}),getSaleBooking:e.query({query:function(e){return"".concat(G).concat(e)},providesTags:function(e,t,n){return[{type:S.pJ.SALE_BOOKING,id:n}]}}),updateSaleBooking:e.mutation({query:function(e){var t=e.key,n=W(e,["key"]);return{url:"".concat(G).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:S.pJ.SALE_BOOKING,id:null===e||void 0===e?void 0:e.key}]}}),deleteSaleBooking:e.mutation({query:function(e){return{url:"".concat(G).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:S.pJ.SALE_BOOKING,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),U=D.useAddSaleBookingMutation,V=D.useDeleteSaleBookingMutation,J=D.useGetSaleBookingQuery,F=D.useListSaleBookingQuery,K=D.useUpdateSaleBookingMutation,Q=(D.useGetErrorProneQuery,function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))}),H=function(e){var t=(0,o.pm)(),n=t.showSuccess,i=t.showError,l=(0,a.useState)(!1),c=(0,m.Z)(l,2),u=c[0],s=c[1],g=(0,a.useState)("S"),E=(0,m.Z)(g,2),h=E[0],b=E[1],A=(0,a.useState)("SAVE"),L=(0,m.Z)(A,2),T=L[0],k=L[1],N=(0,r.s0)(),I=(0,r.UO)().id,w=parseInt(I||""),x=isNaN(w)||w<=0,C=(0,a.useRef)(),O=(0,S.ft)(),_=(0,a.useState)({}),P=(0,m.Z)(_,2),q=P[0],W=P[1],G=(0,a.useState)(""),D=(0,m.Z)(G,2),V=(D[0],D[1],(0,a.useState)(null)),F=(0,m.Z)(V,2),H=F[0],z=F[1],Y=J(w,{skip:x,refetchOnMountOrArgChange:!0}),X=Y.data,$=Y.isLoading,ee=(0,a.useState)(x?new Date:new Date(null===X||void 0===X?void 0:X.date)),te=(0,m.Z)(ee,2),ne=te[0],ae=te[1],re=(0,a.useState)(new Date),oe=(0,m.Z)(re,2),ie=oe[0],le=oe[1],ce=(0,S.Gt)("SLB",{skip:!x,refetchOnMountOrArgChange:x}),ue=ce.data,se=(ce.error,ce.isFetching,(0,S.JB)()),de=se.data,me=se.isLoading,pe=(0,S.Nn)(),ve=pe.data,fe=pe.isLoading,ge=(0,S.FS)({id:H},{skip:!H}),ye=ge.data,Ee=ge.isLoading,he=(0,S.Ii)({}),Se=he.data,be=(he.isLoading,U()),Ae=(0,m.Z)(be,2),Le=Ae[0],Te=Ae[1].isLoading,ke=K(),Ne=(0,m.Z)(ke,2),Ie=Ne[0],we=Ne[1].isLoading;(0,a.useEffect)((function(){W(X||Object.assign(Object.assign({},O),{date:(0,S.Hh)(new Date,!0),docid:"SLB",number:null===ue||void 0===ue?void 0:ue.next_doc_id,loctyp:"PR"})),X&&(ae(X.date),z(X.proj_key))}),[X,ue]),(0,a.useEffect)((function(){var e=new Date(ne);e.setDate(e.getDate()+30),le(e)}),[ne]);var xe=function(e,t){return Q(void 0,void 0,void 0,(0,d.Z)().mark((function n(){var a;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(e);case 2:return n.next=4,k(t);case 4:null===(a=document.getElementById("submit"))||void 0===a||a.click();case 5:case"end":return n.stop()}}),n)})))};return a.createElement(a.Fragment,null,a.createElement(o.Rm,{disableSaveBtn:["U","R","I","C"].includes(null===X||void 0===X?void 0:X.docstatus),baseRoute:"/sales/salebooking",description:"Sale Booking",id:w,data:q,ref:C,isUpdating:Te||we||u,moreSubmitItems:a.createElement(a.Fragment,null,a.createElement(M.z,{label:"Submit",disabled:"S"!==(null===X||void 0===X?void 0:X.docstatus),style:{paddingRight:20},className:"p-button-plain ml-3 mr-3",onClick:function(e){var t;e.preventDefault(),(null===(t=C.current)||void 0===t?void 0:t.getIsDirty())?(0,j.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return xe("U","SUBMIT_WITH_SAVE")},reject:function(){return xe("U","SUBMIT_WITHOUT_SAVE")}}):xe("U","SUBMIT_WITH_SAVE")}}),a.createElement(M.z,{label:"Cancel",disabled:x||["R","I","C"].includes(null===X||void 0===X?void 0:X.docstatus),className:"p-button-plain",onClick:function(e){return b("C"),k("CANCEL"),!0}})),isLoading:$,onSubmit:function(e){return Q(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var a,r,o;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=Object.assign(Object.assign({},e),{number:x?null===ue||void 0===ue?void 0:ue.next_doc_id:null===X||void 0===X?void 0:X.number,date:(0,S.p6)(ne,"yyyy-MM-dd"),validtodate:(0,S.p6)(ie,"yyyy-MM-dd"),docstatus:h,docid:"SLB",chqdate:e.chqdate&&(0,S.p6)(e.chqdate,"yyyy-MM-dd"),action:T}),!x){t.next=8;break}return t.next=5,Le(Object.assign(Object.assign({},r),O)).unwrap();case 5:o=t.sent,t.next=11;break;case 8:return t.next=10,Ie(Object.assign(Object.assign({},r),O)).unwrap();case 10:o=t.sent;case 11:n("Success",o.detail),s(!0),setTimeout((function(){N("/sales/salebooking")}),S.P7),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),i("An error occurred",(null===(a=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===a?void 0:a.detail)||"We couldn't save your post, try again!");case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))},renderForm:function(e,t,n){var r,i;return a.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},a.createElement(o.Wi,{label:"Booking Number",name:"number",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:v.o,componentProps:{useGrouping:!1,disabled:!0,value:(null===X||void 0===X?void 0:X.number)||(null===ue||void 0===ue?void 0:ue.next_doc_id)}}}),a.createElement(o.Wi,{label:"Booking Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:n,required:!0,leftSpan:4,rightSpan:6,convertValue:S.Hh,onChange:function(e){ae(e.value)},formItem:{component:R.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),a.createElement(o.Wi,{label:"Customer",name:"cust_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:fe,required:!0,leftSpan:4,rightSpan:6,formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:null===ve||void 0===ve?void 0:ve.results}}}),a.createElement(o.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:me,required:"Select a Project",leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){z(e.value)},formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:de}}}),a.createElement(o.Wi,{label:"Valid Until*",name:"validtodate",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:n,leftSpan:4,rightSpan:6,convertValue:S.Hh,onChange:function(e){le(e.value)},formItem:{component:R.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd",value:ie}}}),a.createElement(o.Wi,{label:"Unit",name:"projunit_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:Ee,required:!0,leftSpan:4,rightSpan:6,formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:null===ye||void 0===ye?void 0:ye.results}}}),a.createElement(Z.i,{layout:"horizontal",style:{height:2,backgroundColor:"gray"}}),a.createElement("div",{className:"flex col-12"},a.createElement("div",{className:"field grid grid-nogutter p-fluid col-9",style:{paddingLeft:24}},a.createElement("label",{htmlFor:"saleamt",style:{marginRight:3},className:(0,f.AK)("col-4",{"p-error":n.saleamt})},"Sale Amount*"),a.createElement("div",{className:"input-field"},a.createElement(p.Qr,{name:"saleamt",control:e,rules:{required:{value:!0,message:"Enter Sale Amount"}},render:function(e){var t=e.field;return a.createElement(B.h3,Object.assign({id:t.name,maxLength:12,thousandSeparator:!0},t,{style:{width:"100%",textAlign:"right"},onValueChange:function(e){console.log(e),t.onChange(parseInt(e.value))},className:(0,f.AK)("p-inputtext p-component")}))}}),(0,o.Hb)(null===(r=null===n||void 0===n?void 0:n.saleamt)||void 0===r?void 0:r.message)))),a.createElement("div",{className:"flex col-12"},a.createElement("div",{className:"field grid grid-nogutter p-fluid col-9",style:{paddingLeft:24}},a.createElement("label",{htmlFor:"bookingamt",style:{marginRight:3},className:(0,f.AK)("col-4",{"p-error":n.bookingamt})},"Booking Amount*"),a.createElement("div",{className:"input-field"},a.createElement(p.Qr,{name:"bookingamt",control:e,rules:{required:{value:!0,message:"Enter Booking Amount"}},render:function(e){var t=e.field;return a.createElement(B.h3,Object.assign({id:t.name,maxLength:12,thousandSeparator:!0},t,{style:{width:"100%",textAlign:"right"},onValueChange:function(e){console.log(e),t.onChange(parseInt(e.value))},className:(0,f.AK)("p-inputtext p-component")}))}}),(0,o.Hb)(null===(i=null===n||void 0===n?void 0:n.bookingamt)||void 0===i?void 0:i.message)))),a.createElement(o.Wi,{label:"Mode Of Payment",required:!0,name:"modeofpay",control:e,errors:n,leftSpan:3,rightSpan:3,className:"pl-5 col-12",formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"descr",optionValue:"modeofpay",options:Se}}}),a.createElement(o.Wi,{label:"Bank Name",name:"bankname",leftSpan:3,rightSpan:4,className:"pl-5 col-12",control:e,errors:n,formItem:{component:v.o,componentProps:{maxLength:25}}}),a.createElement(o.Wi,{label:"Cheque No",name:"chqno",leftSpan:3,rightSpan:3,className:"pl-5 col-12",control:e,errors:n,formItem:{component:v.o,componentProps:{maxLength:25}}}),a.createElement(o.Wi,{label:"Cheque Date",name:"chqdate",useExplicit:!0,control:e,errors:n,leftSpan:3,rightSpan:3,className:"pl-5 col-12",convertValue:S.Hh,formItem:{component:R.f,componentProps:{showIcon:!0,dateFormat:"dd-mm-yy"}}}),a.createElement(o.Wi,{label:"Notes",name:"notes",leftSpan:3,rightSpan:8,className:"pl-5 pb-3 col-12",control:e,errors:n,formItem:{component:v.o,componentProps:{maxLength:25}}}))}}))},z=function(e){var t=F({}),n=t.data,r=t.isLoading,i=V(),l=(0,m.Z)(i,2),c=l[0],u=l[1].isLoading;return a.createElement(o.PS,{baseRoute:"/sales/salebooking",description:"Sale Booking",isLoading:r||u,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()},showHeader:!0,newTable:!0},a.createElement(o._P,{field:"number",header:"Booking No",filteringType:"number"}),a.createElement(o._P,{field:"date",header:"Booking Date",filteringType:"date"}),a.createElement(o._P,{field:"customer.name",header:"Customer",filteringType:"text"}),a.createElement(o._P,{field:"project.name",header:"Project",filteringType:"text"}),a.createElement(o._P,{field:"unit.descr",header:"Unit",filteringType:"number"}),a.createElement(o._P,{field:"status.descr",header:"Status",filteringType:"text"}))},Y=a.createElement(r.AW,{path:"salebooking"},a.createElement(r.AW,{path:"new",element:a.createElement(H,null)}),a.createElement(r.AW,{path:":id/edit",element:a.createElement(H,null)}),a.createElement(r.AW,{index:!0,element:a.createElement(z,null)})),X="/sale/agreement/",$=S.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listSaleAgreement:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,S.DS)(X,"?page=".concat(t||1,"&page_size=").concat(n||S.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:S.pJ.SALE_AGREEMENT,key:t}}))),[{type:S.pJ.SALE_AGREEMENT,id:"LIST"}]):[{type:S.pJ.SALE_AGREEMENT,id:"LIST"}]}}),addSaleAgreement:e.mutation({query:function(e){return{url:X,method:"POST",body:e}},invalidatesTags:[{type:S.pJ.SALE_AGREEMENT,id:"LIST"}]}),getSaleAgreement:e.query({query:function(e){return"".concat(X).concat(e)},providesTags:function(e,t,n){return[{type:S.pJ.SALE_AGREEMENT,id:n}]}}),updateSaleAgreement:e.mutation({query:function(e){var t=e;return{url:"".concat(X),method:"POST",body:t}},invalidatesTags:function(e){return[{type:S.pJ.SALE_AGREEMENT,id:null===e||void 0===e?void 0:e.key}]}}),deleteSaleAgreement:e.mutation({query:function(e){return{url:"".concat(X).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:S.pJ.SALE_AGREEMENT,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),ee=$.useAddSaleAgreementMutation,te=$.useDeleteSaleAgreementMutation,ne=$.useGetSaleAgreementQuery,ae=$.useListSaleAgreementQuery,re=$.useUpdateSaleAgreementMutation,oe=($.useGetErrorProneQuery,"/sale/agreement/items/"),ie=S.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listSaleAgreementItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,S.DS)(oe,"?page=".concat(t||1,"&page_size=").concat(n||S.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:S.pJ.SALE_AGREEMENT_ITEM,item_key:t}}))),[{type:S.pJ.SALE_AGREEMENT_ITEM,id:"LIST"}]):[{type:S.pJ.SALE_AGREEMENT_ITEM,id:"LIST"}]}}),addSaleAgreementItems:e.mutation({query:function(e){return{url:oe,method:"POST",body:e}},invalidatesTags:[{type:S.pJ.SALE_AGREEMENT_ITEM,id:"LIST"},{type:S.pJ.TRANSACTION,id:"LIST"}]}),getSaleAgreementItem:e.query({query:function(e){return"".concat(oe).concat(e)},providesTags:function(e,t,n){return[{type:S.pJ.SALE_AGREEMENT_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),le=ie.useAddSaleAgreementItemsMutation,ce=(ie.useGetSaleAgreementItemQuery,ie.useListSaleAgreementItemQuery,ie.useGetErrorProneQuery,function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))}),ue=(0,a.forwardRef)((function(e,t){var n=e.data,r=e.isLoading,i=e.disableTable,l=void 0!==i&&i,c=e.onChange,u=void 0===c?function(){}:c,s=(0,a.useState)([]),p=(0,m.Z)(s,2),v=p[0],f=p[1],g=le(),y=(0,m.Z)(g,2),E=y[0],h=y[1].isLoading,b=(0,a.useRef)(v),A=(0,a.useRef)([]),L=(0,a.useRef)([]),T=(0,S.Zp)({}),k=T.data,N=(T.isLoading,(0,S.DY)({})),I=N.data;N.isLoading;(0,a.useImperativeHandle)(t,(function(){return{saveItem:function(e){return ce(this,void 0,void 0,(0,d.Z)().mark((function t(){return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(Object.assign(Object.assign({},e),{items:v})).unwrap();case 2:case"end":return t.stop()}}),t)})))},getItems:function(){return v}}})),(0,a.useEffect)((function(){f(n),b.current=n}),[n]),(0,a.useEffect)((function(){A.current=(null===k||void 0===k?void 0:k.results)||[],L.current=(null===I||void 0===I?void 0:I.results)||[]}),[k,I]);return a.createElement(o.PS,{baseRoute:"/sales/".concat("saleagreement"),description:"Sale Agreement",isLoading:r||h,data:v,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:l,actionBodyTemplate:function(e){return a.createElement(M.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,j.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return function(e){var t=b.current.filter((function(t){return t!==e}));b.current=t,f(t)}(e)},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:l||!function(e){if(0===e.length)return!0;var t=e[e.length-1];return null===t||void 0===t?void 0:t.item_descr}(v),newRowDefaults:{netamt:0},OnRowsChanged:function(e){f(e),b.current=e,u(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},a.createElement(o._P,{field:"item_descr",width:"70%",header:"Payment Stages*",editorType:!l&&"text"}),a.createElement(o._P,{field:"netamt",header:"Total Amt",type:"currency",defaultValue:0,editorType:!l&&"currency",summaryFormatter:function(e){var t,n=e.row;return t=null===n||void 0===n?void 0:n.netamt,a.createElement(o.JK,{value:t||0})}}))})),se=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))},de=function(e){var t=(0,o.pm)(),n=t.showSuccess,i=t.showError,l=(0,a.useState)(!1),c=(0,m.Z)(l,2),u=c[0],s=c[1],g=(0,a.useState)(!1),E=(0,m.Z)(g,2),h=E[0],b=E[1],A=(0,a.useState)("S"),L=(0,m.Z)(A,2),T=L[0],k=L[1],N=(0,a.useState)("SAVE"),I=(0,m.Z)(N,2),w=I[0],x=I[1],C=(0,r.s0)(),O=(0,r.UO)().id,_=parseInt(O||""),P=isNaN(_)||_<=0,q=(0,a.useRef)(),j=(0,a.useRef)(),Z=(0,S.ft)(),W=ne(_,{skip:P,refetchOnMountOrArgChange:!0}),G=W.data,D=W.isLoading,U=(0,a.useState)(null),V=(0,m.Z)(U,2),J=V[0],K=V[1],Q=(0,a.useState)(null),H=(0,m.Z)(Q,2),z=H[0],Y=H[1],X=(0,a.useState)([]),$=(0,m.Z)(X,2),te=$[0],ae=$[1],oe=(0,a.useState)({}),ie=(0,m.Z)(oe,2),le=ie[0],ce=ie[1],de=(0,S.Gt)("SLA",{skip:!P,refetchOnMountOrArgChange:P}),me=de.data,pe=(de.isFetching,(0,S.Nn)()),ve=pe.data,fe=pe.isLoading,ge=F({}),ye=ge.data,Ee=ge.isLoading,he=ee(),Se=(0,m.Z)(he,2),be=Se[0],Ae=Se[1].isLoading,Le=re(),Te=(0,m.Z)(Le,2),ke=Te[0],Ne=Te[1].isLoading;(0,a.useEffect)((function(){var e,t,n,a;ce(G||Object.assign(Object.assign({},Z),{agreementdate:(0,S.Hh)(new Date,!0),docid:"SLA",agreementno:null===me||void 0===me?void 0:me.next_doc_id,loctyp:"PR"})),G&&(ae((null===G||void 0===G?void 0:G.stages)||[]),K(null===(t=null===(e=null===G||void 0===G?void 0:G.booking)||void 0===e?void 0:e.project)||void 0===t?void 0:t.name),Y(null===(a=null===(n=null===G||void 0===G?void 0:G.booking)||void 0===n?void 0:n.unit)||void 0===a?void 0:a.descr))}),[G]);var Ie=function(){return["U","R","C"].includes(null===G||void 0===G?void 0:G.docstatus)};return a.createElement(a.Fragment,null,a.createElement(o.Rm,{disableSaveBtn:Ie(),baseRoute:"/sales/saleagreement",description:"Sale Agreement",id:_,data:le,isUpdating:Ae||Ne||u,ref:j,isItemsTableChanged:h,moreSubmitItems:a.createElement(a.Fragment,null,a.createElement(M.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===G||void 0===G?void 0:G.docstatus),onClick:function(e){e.preventDefault(),function(e,t){se(void 0,void 0,void 0,(0,d.Z)().mark((function n(){var a;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(e);case 2:return n.next=4,x(t);case 4:null===(a=document.getElementById("submit"))||void 0===a||a.click();case 5:case"end":return n.stop()}}),n)})))}("U","SUBMIT_WITH_SAVE")}}),a.createElement(M.z,{label:"Cancel",disabled:P||["R","C"].includes(null===G||void 0===G?void 0:G.docstatus),className:"p-button-plain",onClick:function(e){return x("CANCEL"),k("C"),!0}})),isLoading:D,onSubmit:function(e){return se(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var a,r,o,l,c;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,l=null===(a=q.current)||void 0===a?void 0:a.getItems(),c=Object.assign(Object.assign({},e),{docid:"SLA",agreementno:P?null===me||void 0===me?void 0:me.next_doc_id:null===G||void 0===G?void 0:G.agreementno,agreementdate:(0,S.p6)(e.agreementdate,"yyyy-MM-dd"),loctyp:"PR",docstatus:T,action:w,stages:l}),console.log(c),!P){t.next=10;break}return t.next=7,be(Object.assign(Object.assign({},c),Z)).unwrap();case 7:o=t.sent,t.next=13;break;case 10:return t.next=12,ke(Object.assign(Object.assign(Object.assign({},c),Z),{key:null===G||void 0===G?void 0:G.key})).unwrap();case 12:o=t.sent;case 13:n("Success",o.detail),s(!0),setTimeout((function(){C("/sales/saleagreement")}),S.P7),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),i("An error occurred",(null===(r=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===r?void 0:r.detail)||"We couldn't save your post, try again!");case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))},renderForm:function(e,t,n,r){var i;return a.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},a.createElement(o.Wi,{label:"Agreement No",name:"number",className:"col-12",control:e,errors:n,leftSpan:2,rightSpan:3,formItem:{component:v.o,componentProps:{useGrouping:!1,disabled:!0,value:(null===G||void 0===G?void 0:G.agreementno)||(null===me||void 0===me?void 0:me.next_doc_id)}}}),a.createElement(o.Wi,{label:"Customer",name:"cust_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:fe,required:!0,leftSpan:4,rightSpan:6,formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:null===ve||void 0===ve?void 0:ve.results}}}),a.createElement(o.Wi,{label:"Agreement Date",name:"agreementdate",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:n,required:!0,leftSpan:4,rightSpan:6,convertValue:S.Hh,formItem:{component:R.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),a.createElement(o.Wi,{label:"Booking No",name:"salbk_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:Ee,required:!0,leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){var t,n,a,r=null===(t=null===ye||void 0===ye?void 0:ye.results)||void 0===t?void 0:t.filter((function(t){return t.key===e.value}))[0];console.log(r),K(null===(n=null===r||void 0===r?void 0:r.project)||void 0===n?void 0:n.name),Y(null===(a=null===r||void 0===r?void 0:r.unit)||void 0===a?void 0:a.descr)},formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"number",optionValue:"key",filter:!0,filterBy:"number",options:null===ye||void 0===ye?void 0:ye.results}}}),a.createElement("div",{className:"field grid grid-nogutter p-fluid col-12 md:col-6"},a.createElement("label",{htmlFor:"saleamt",style:{marginRight:3},className:(0,f.AK)("col-4",{"p-error":n.saleamt})},"Sale Amount*"),a.createElement("div",{className:"input-field",style:{width:"49%"}},a.createElement(p.Qr,{name:"saleamt",control:e,rules:{required:{value:!0,message:"Enter Sale Amount"}},render:function(e){var t=e.field;return a.createElement(B.h3,Object.assign({id:t.name,maxLength:12,thousandSeparator:!0},t,{style:{width:"100%",textAlign:"right"},onValueChange:function(e){console.log(e),t.onChange(parseInt(e.value))},className:(0,f.AK)("p-inputtext p-component")}))}}),(0,o.Hb)(null===(i=null===n||void 0===n?void 0:n.saleamt)||void 0===i?void 0:i.message))),a.createElement(o.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:v.o,componentProps:{disabled:!0,value:J}}}),a.createElement(o.Wi,{label:"Unit",name:"projunit_key",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:v.o,componentProps:{disabled:!0,value:z}}}),a.createElement(o.Wi,{label:"Notes",name:"notes",leftSpan:2,rightSpan:8,className:"pb-3 col-12",control:e,errors:n,formItem:{component:v.o,componentProps:{maxLength:25}}}),a.createElement("div",{className:"col-12"},a.createElement(ue,{data:te,isLoading:D,ref:q,disableTable:Ie(),onChange:function(e){return!h&&b(e)}})))}}))},me=function(e){var t=ae({}),n=t.data,r=t.isLoading,i=te(),l=(0,m.Z)(i,2),c=l[0],u=l[1].isLoading;return a.createElement(o.PS,{baseRoute:"/sales/saleagreement",description:"Sale Agreement",isLoading:r||u,data:null===n||void 0===n?void 0:n.results,newTable:!0,showHeader:!0,deleteAction:function(e){return c(e).unwrap()}},a.createElement(o._P,{field:"agreementno",header:"Agreement No",filteringType:"number"}),a.createElement(o._P,{field:"agreementdate",header:"Agreement Date",filteringType:"date"}),a.createElement(o._P,{field:"customer.name",header:"Customer",filteringType:"text"}),a.createElement(o._P,{field:"booking.project.name",header:"Project",filteringType:"text"}),a.createElement(o._P,{field:"booking.unit.descr",header:"Unit",filteringType:"text"}),a.createElement(o._P,{field:"status.descr",header:"Status",filteringType:"text"}))},pe=a.createElement(r.AW,{path:"saleagreement"},a.createElement(r.AW,{path:"new",element:a.createElement(de,null)}),a.createElement(r.AW,{path:":id/edit",element:a.createElement(de,null)}),a.createElement(r.AW,{index:!0,element:a.createElement(me,null)})),ve=function(){return a.createElement(r.Z5,null,a.createElement(r.AW,{path:"/",element:a.createElement(o.SV,{navItems:s})},a.createElement(r.AW,{index:!0,element:a.createElement(r.Fg,{to:l,replace:!0})}),q,Y,pe,a.createElement(r.AW,{path:":page/comming-soon",element:a.createElement(o.hg,null)}),a.createElement(r.AW,{path:"*",element:a.createElement(o.EN,{relative:!0})})))}},8356:function(e,t,n){n.d(t,{i:function(){return i}});var a=n(969),r=n(4756);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=a.forwardRef((function(e,t){var n="horizontal"===e.layout,l="vertical"===e.layout,c=r.gb.findDiffKeys(e,i.defaultProps),u=(0,r.AK)("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":n&&(!e.align||"left"===e.align),"p-divider-right":n&&"right"===e.align,"p-divider-center":n&&"center"===e.align||l&&(!e.align||"center"===e.align),"p-divider-top":l&&"top"===e.align,"p-divider-bottom":l&&"bottom"===e.align},e.className);return a.createElement("div",o({className:u,style:e.style,role:"separator"},c),a.createElement("div",{className:"p-divider-content"},e.children))}));i.displayName="Divider",i.defaultProps={__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null}}}]);
//# sourceMappingURL=83.f8f73df6.chunk.js.map