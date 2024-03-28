"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[83],{6083:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var a=n(969),r=n(734),o=n(2035),i=n(8121),l="customers",c="Customer",s=function(e,t){return(0,o.E7)("/".concat(i.o,"/").concat(e)+(t?"/comming-soon":""))},u=[{label:"Transctions",items:[{label:"Sale Booking",icon:"pi ml-3",template:s("salebooking")}]},{label:"Configuration",items:[{label:"Customer",icon:"pi ml-3",template:s(l)}]}],d=n(2723),m=n(6234),p=n(3953),v=n(7765),g=n(4756),f=n(1387),E=n(8079),y=n(1495),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},S="/sale/customer/",b=y.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listCustomer:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,y.DS)(S,"?page=".concat(t||1,"&page_size=").concat(n||y.IV))}},providesTags:function(e){var t;return e?[].concat((0,E.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:y.pJ.CUSTOMER,id:t}}))),[{type:y.pJ.CUSTOMER,id:"LIST"}]):[{type:y.pJ.CUSTOMER,id:"LIST"}]}}),addCustomer:e.mutation({query:function(e){return{url:S,method:"POST",body:e}},invalidatesTags:[{type:y.pJ.CUSTOMER,id:"LIST"}]}),getCustomer:e.query({query:function(e){return"".concat(S).concat(e)},providesTags:function(e,t,n){return[{type:y.pJ.CUSTOMER,id:n}]}}),updateCustomer:e.mutation({query:function(e){var t=e.key,n=h(e,["key"]);return{url:"".concat(S).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:y.pJ.CUSTOMER,id:null===e||void 0===e?void 0:e.id}]}}),getStates:e.query({query:function(){return{url:"/geo/state/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,E.Z)(e.map((function(e){var t=e.state_key;return{type:y.pJ.STATES,id:t}}))),[{type:y.pJ.STATES,id:"LIST"}])}}),getCities:e.query({query:function(e){return{url:"/geo/city/?state=".concat(e)}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,E.Z)(e.map((function(e){var t=e.city_key;return{type:y.pJ.CITIES,id:t}}))),[{type:y.pJ.CITIES,id:"LIST"}])}}),deleteCustomer:e.mutation({query:function(e){return{url:"".concat(S).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:y.pJ.CUSTOMER,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),A=b.useAddCustomerMutation,N=b.useDeleteCustomerMutation,T=b.useGetCustomerQuery,L=b.useListCustomerQuery,x=b.useUpdateCustomerMutation,w=(b.useGetErrorProneQuery,b.useGetCitiesQuery),I=b.useGetStatesQuery,k=(b.endpoints.getCustomer,function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))}),C=function(e){var t=(0,a.useRef)(null),n=(0,a.useState)(!1),s=(0,m.Z)(n,2),u=s[0],E=s[1],h=(0,r.s0)(),S=(0,r.UO)().id,b=parseInt(S||""),N=isNaN(b)||b<=0,L=(0,a.useState)(""),C=(0,m.Z)(L,2),O=C[0],P=(C[1],(0,y.ft)()),_=T(b,{skip:N}),q=_.data,j=_.isLoading,Z=(I().data,w(O).data,A()),R=(0,m.Z)(Z,2),M=R[0],B=R[1].isLoading,W=x(),K=(0,m.Z)(W,2),F=K[0],G=K[1].isLoading,U=function(e,n){var a;null===(a=null===t||void 0===t?void 0:t.current)||void 0===a||a.show({severity:"success",summary:e,detail:n,life:3e3})},D=function(e,n){var a;null===(a=null===t||void 0===t?void 0:t.current)||void 0===a||a.show({severity:"error",summary:e,detail:n,life:3e3})};return a.createElement(a.Fragment,null,a.createElement(f.F,{ref:t}),a.createElement(o.Rm,{baseRoute:"/".concat(i.o,"/").concat(l),description:c,id:b,data:q,isUpdating:B||G||u,isLoading:j,onSubmit:function(e){return k(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var n,a;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!N){t.next=7;break}return t.next=4,M(Object.assign(Object.assign({},e),P)).unwrap();case 4:a=t.sent,t.next=10;break;case 7:return t.next=9,F(Object.assign(Object.assign({},e),P)).unwrap();case 9:a=t.sent;case 10:U("Success",a.detail),E(!0),setTimeout((function(){h("/".concat(i.o,"/").concat(l))}),y.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),D("An error occurred",(null===(n=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===n?void 0:n.detail)||"We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){var r,i,l,c,s,u,d;return a.createElement("div",{className:"pl-8"},a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"name",className:(0,g.AK)("col-2",{"p-error":n.name})},"Customer Name*"),a.createElement(p.Qr,{name:"name",control:e,rules:{required:"Age is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,g.AK)({"p-invalid":n.invalid})}))}}),(0,o.Hb)(null===(r=null===n||void 0===n?void 0:n.name)||void 0===r?void 0:r.message)),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"age",className:(0,g.AK)("col-2",{"p-error":n.name})},"Age*"),a.createElement(p.Qr,{name:"age",control:e,rules:{required:"Age is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,g.AK)({"p-invalid":n.invalid})}))}}),(0,o.Hb)(null===(i=null===n||void 0===n?void 0:n.age)||void 0===i?void 0:i.message)),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"sex",className:(0,g.AK)("col-2",{"p-error":n.name})},"Sex*"),a.createElement(p.Qr,{name:"sex",control:e,rules:{required:"Sex is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,g.AK)({"p-invalid":n.invalid})}))}}),(0,o.Hb)(null===(l=null===n||void 0===n?void 0:n.sex)||void 0===l?void 0:l.message)),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"panno",className:(0,g.AK)("col-2",{"p-error":n.name})},"PAN No*"),a.createElement(p.Qr,{name:"panno",control:e,rules:{required:"panno is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,g.AK)({"p-invalid":n.invalid})}))}}),(0,o.Hb)(null===(c=null===n||void 0===n?void 0:n.panno)||void 0===c?void 0:c.message)),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"aadhaar",className:(0,g.AK)("col-2",{"p-error":n.name})},"Aadhaar No*"),a.createElement(p.Qr,{name:"aadhaar",control:e,rules:{required:"aadhaar is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,g.AK)({"p-invalid":n.invalid})}))}}),(0,o.Hb)(null===(s=null===n||void 0===n?void 0:n.aadhaar)||void 0===s?void 0:s.message)),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"addr1",className:(0,g.AK)("col-2",{"p-error":n.addr1})}," Address Line 1"),a.createElement(p.Qr,{name:"addr1",control:e,rules:{maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,g.AK)({"p-invalid":n.invalid})}))}})),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"addr2",className:(0,g.AK)("col-2",{"p-error":n.addr2})}," Address Line 2"),a.createElement(p.Qr,{name:"addr2",control:e,rules:{maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,g.AK)({"p-invalid":n.invalid})}))}})),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"contact",className:(0,g.AK)("col-2",{"p-error":n.name})},"Contact No*"),a.createElement(p.Qr,{name:"contact",control:e,rules:{required:"contact is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,g.AK)({"p-invalid":n.invalid})}))}}),(0,o.Hb)(null===(u=null===n||void 0===n?void 0:n.contact)||void 0===u?void 0:u.message)),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"email",className:(0,g.AK)("col-2",{"p-error":n.name})},"Email ID*"),a.createElement(p.Qr,{name:"email",control:e,rules:{required:"email is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return a.createElement(v.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,g.AK)({"p-invalid":n.invalid})}))}}),(0,o.Hb)(null===(d=null===n||void 0===n?void 0:n.email)||void 0===d?void 0:d.message)))}}))},O=function(e){var t=(0,a.useState)(1),n=(0,m.Z)(t,2),r=n[0],s=n[1],u=(0,a.useState)(y.IV),d=(0,m.Z)(u,2),p=d[0],v=d[1],g=L({page:r,size:p}),f=g.data,E=g.isFetching,h=N(),S=(0,m.Z)(h,2),b=S[0],A=S[1].isLoading;return a.createElement(o.PS,{pagination:{pageSize:p,loading:E,currentPage:r,total:null===f||void 0===f?void 0:f.count,onChange:function(e,t){s(e),v(t)}},baseRoute:"/".concat(i.o,"/").concat(l),description:c,isLoading:E||A,data:null===f||void 0===f?void 0:f.results,deleteAction:function(e){return b(e).unwrap()},newTable:!0,showHeader:!0},a.createElement(o._P,{field:"id",header:"Customer Code",filteringType:"number"}),a.createElement(o._P,{field:"name",header:"Customer Name",filteringType:"text"}),a.createElement(o._P,{field:"inactive",header:"Status",filteringType:"text",displayValueGetter:function(e){return"Y"===e.inactive?"Inactive":"Active"}}))},P=a.createElement(r.AW,{path:l},a.createElement(r.AW,{path:"new",element:a.createElement(C,null)}),a.createElement(r.AW,{path:":id/edit",element:a.createElement(C,null)}),a.createElement(r.AW,{index:!0,element:a.createElement(O,null)})),_=n(4576),q=n(3127),j=n(6770),Z=n(8356),R=n(8224),M=n(6098),B=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},W="/sale/booking/",K=y.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listSaleBooking:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,y.DS)(W,"?page=".concat(t||1,"&page_size=").concat(n||y.IV))}},providesTags:function(e){return e?[].concat((0,E.Z)(null===e||void 0===e?void 0:e.results.map((function(e){var t=e.key;return{type:y.pJ.SALE_BOOKING,key:t}}))),[{type:y.pJ.SALE_BOOKING,id:"LIST"}]):[{type:y.pJ.SALE_BOOKING,id:"LIST"}]}}),addSaleBooking:e.mutation({query:function(e){return{url:W,method:"POST",body:e}},invalidatesTags:[{type:y.pJ.SALE_BOOKING,id:"LIST"}]}),getSaleBooking:e.query({query:function(e){return"".concat(W).concat(e)},providesTags:function(e,t,n){return[{type:y.pJ.SALE_BOOKING,id:n}]}}),updateSaleBooking:e.mutation({query:function(e){var t=e.key,n=B(e,["key"]);return{url:"".concat(W).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:y.pJ.SALE_BOOKING,id:null===e||void 0===e?void 0:e.key}]}}),deleteSaleBooking:e.mutation({query:function(e){return{url:"".concat(W).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:y.pJ.SALE_BOOKING,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),F=K.useAddSaleBookingMutation,G=K.useDeleteSaleBookingMutation,U=K.useGetSaleBookingQuery,D=K.useListSaleBookingQuery,J=K.useUpdateSaleBookingMutation,V=(K.useGetErrorProneQuery,function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))}),Q=function(e){var t=(0,o.pm)(),n=t.showSuccess,i=t.showError,l=(0,a.useState)(!1),c=(0,m.Z)(l,2),s=c[0],u=c[1],f=(0,a.useState)("S"),E=(0,m.Z)(f,2),h=E[0],S=E[1],b=(0,a.useState)("SAVE"),A=(0,m.Z)(b,2),N=A[0],T=A[1],L=(0,r.s0)(),x=(0,r.UO)().id,w=parseInt(x||""),I=isNaN(w)||w<=0,k=(0,a.useRef)(),C=(0,y.ft)(),O=(0,a.useState)({}),P=(0,m.Z)(O,2),B=P[0],W=P[1],K=(0,a.useState)(""),G=(0,m.Z)(K,2),D=(G[0],G[1],(0,a.useState)(null)),Q=(0,m.Z)(D,2),H=Q[0],z=Q[1],Y=U(w,{skip:I,refetchOnMountOrArgChange:!0}),X=Y.data,$=Y.isLoading,ee=(0,a.useState)(I?new Date:new Date(null===X||void 0===X?void 0:X.date)),te=(0,m.Z)(ee,2),ne=te[0],ae=te[1],re=(0,a.useState)(new Date),oe=(0,m.Z)(re,2),ie=oe[0],le=oe[1],ce=(0,y.Gt)("SLB",{skip:!I,refetchOnMountOrArgChange:I}).data,se=(0,y.JB)(),ue=se.data,de=se.isLoading,me=(0,y.Nn)(),pe=me.data,ve=me.isLoading,ge=(0,y.FS)({id:H},{skip:!H}),fe=ge.data,Ee=ge.isLoading,ye=(0,y.Ii)({}).data,he=F(),Se=(0,m.Z)(he,2),be=Se[0],Ae=Se[1].isLoading,Ne=J(),Te=(0,m.Z)(Ne,2),Le=Te[0],xe=Te[1].isLoading;(0,a.useEffect)((function(){W(X||Object.assign(Object.assign({},C),{date:(0,y.Hh)(new Date,!0),docid:"SLB",number:null===ce||void 0===ce?void 0:ce.next_doc_id,loctyp:"PR"})),X&&(ae(X.date),z(X.proj_key))}),[X,ce]),(0,a.useEffect)((function(){var e=new Date(ne);e.setDate(e.getDate()+30),le(e)}),[ne]);var we=function(e,t){return V(void 0,void 0,void 0,(0,d.Z)().mark((function n(){var a;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S(e);case 2:return n.next=4,T(t);case 4:null===(a=document.getElementById("submit"))||void 0===a||a.click();case 5:case"end":return n.stop()}}),n)})))};return a.createElement(a.Fragment,null,a.createElement(o.Rm,{disableSaveBtn:["U","R","I","C"].includes(null===X||void 0===X?void 0:X.docstatus),baseRoute:"/sales/salebooking",description:"Sale Booking",id:w,data:B,ref:k,isUpdating:Ae||xe||s,moreSubmitItems:a.createElement(a.Fragment,null,a.createElement(j.z,{label:"Submit",disabled:"S"!==(null===X||void 0===X?void 0:X.docstatus),style:{paddingRight:20},className:"p-button-plain ml-3 mr-3",onClick:function(e){var t;e.preventDefault(),(null===(t=k.current)||void 0===t?void 0:t.getIsDirty())?(0,_.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return we("U","SUBMIT_WITH_SAVE")},reject:function(){return we("U","SUBMIT_WITHOUT_SAVE")}}):we("U","SUBMIT_WITH_SAVE")}}),a.createElement(j.z,{label:"Cancel",disabled:I||["R","I","C"].includes(null===X||void 0===X?void 0:X.docstatus),className:"p-button-plain",onClick:function(e){return S("C"),T("CANCEL"),!0}})),isLoading:$,onSubmit:function(e){return V(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var a,r,o;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=Object.assign(Object.assign({},e),{number:I?null===ce||void 0===ce?void 0:ce.next_doc_id:null===X||void 0===X?void 0:X.number,date:(0,y.p6)(ne,"yyyy-MM-dd"),validtodate:(0,y.p6)(ie,"yyyy-MM-dd"),docstatus:h,docid:"SLB",chqdate:e.chqdate&&(0,y.p6)(e.chqdate,"yyyy-MM-dd"),action:N}),!I){t.next=8;break}return t.next=5,be(Object.assign(Object.assign({},r),C)).unwrap();case 5:o=t.sent,t.next=11;break;case 8:return t.next=10,Le(Object.assign(Object.assign({},r),C)).unwrap();case 10:o=t.sent;case 11:n("Success",o.detail),u(!0),setTimeout((function(){L("/sales/salebooking")}),y.P7),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),i("An error occurred",(null===(a=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===a?void 0:a.detail)||"We couldn't save your post, try again!");case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))},renderForm:function(e,t,n){var r,i;return a.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},a.createElement(o.Wi,{label:"Booking Number",name:"number",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:v.o,componentProps:{useGrouping:!1,disabled:!0,value:(null===X||void 0===X?void 0:X.number)||(null===ce||void 0===ce?void 0:ce.next_doc_id)}}}),a.createElement(o.Wi,{label:"Booking Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:n,required:!0,leftSpan:4,rightSpan:6,convertValue:y.Hh,onChange:function(e){ae(e.value)},formItem:{component:q.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),a.createElement(o.Wi,{label:"Customer",name:"cust_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:ve,required:!0,leftSpan:4,rightSpan:6,formItem:{component:R.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:pe}}}),a.createElement(o.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:de,required:"Select a Project",leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){z(e.value)},formItem:{component:R.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:ue}}}),a.createElement(o.Wi,{label:"Valid Until*",name:"validtodate",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:n,leftSpan:4,rightSpan:6,convertValue:y.Hh,onChange:function(e){le(e.value)},formItem:{component:q.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd",value:ie}}}),a.createElement(o.Wi,{label:"Unit",name:"projunit_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:Ee,required:!0,leftSpan:4,rightSpan:6,formItem:{component:R.L,componentProps:{showClear:!0,optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:fe}}}),a.createElement(Z.i,{layout:"horizontal",style:{height:2,backgroundColor:"gray"}}),a.createElement("div",{className:"flex col-12"},a.createElement("div",{className:"field grid grid-nogutter p-fluid col-9",style:{paddingLeft:24}},a.createElement("label",{htmlFor:"saleamt",style:{marginRight:3},className:(0,g.AK)("col-4",{"p-error":n.saleamt})},"Sale Amount*"),a.createElement("div",{className:"input-field"},a.createElement(p.Qr,{name:"saleamt",control:e,rules:{required:{value:!0,message:"Enter Sale Amount"}},render:function(e){var t=e.field;return a.createElement(M.h3,Object.assign({id:t.name,maxLength:12,thousandSeparator:!0},t,{style:{width:"100%",textAlign:"right"},onValueChange:function(e){t.onChange(parseInt(e.value))},className:(0,g.AK)("p-inputtext p-component")}))}}),(0,o.Hb)(null===(r=null===n||void 0===n?void 0:n.saleamt)||void 0===r?void 0:r.message)))),a.createElement("div",{className:"flex col-12"},a.createElement("div",{className:"field grid grid-nogutter p-fluid col-9",style:{paddingLeft:24}},a.createElement("label",{htmlFor:"bookingamt",style:{marginRight:3},className:(0,g.AK)("col-4",{"p-error":n.bookingamt})},"Booking Amount*"),a.createElement("div",{className:"input-field"},a.createElement(p.Qr,{name:"bookingamt",control:e,rules:{required:{value:!0,message:"Enter Booking Amount"}},render:function(e){var t=e.field;return a.createElement(M.h3,Object.assign({id:t.name,maxLength:12,thousandSeparator:!0},t,{style:{width:"100%",textAlign:"right"},onValueChange:function(e){t.onChange(parseInt(e.value))},className:(0,g.AK)("p-inputtext p-component")}))}}),(0,o.Hb)(null===(i=null===n||void 0===n?void 0:n.bookingamt)||void 0===i?void 0:i.message)))),a.createElement(o.Wi,{label:"Mode Of Payment",required:!0,name:"modeofpay",control:e,errors:n,leftSpan:3,rightSpan:3,className:"pl-5 col-12",formItem:{component:R.L,componentProps:{showClear:!0,optionLabel:"descr",optionValue:"modeofpay",options:ye}}}),a.createElement(o.Wi,{label:"Bank Name",name:"bankname",leftSpan:3,rightSpan:4,className:"pl-5 col-12",control:e,errors:n,formItem:{component:v.o,componentProps:{maxLength:25}}}),a.createElement(o.Wi,{label:"Cheque No",name:"chqno",leftSpan:3,rightSpan:3,className:"pl-5 col-12",control:e,errors:n,formItem:{component:v.o,componentProps:{maxLength:25}}}),a.createElement(o.Wi,{label:"Cheque Date",name:"chqdate",useExplicit:!0,control:e,errors:n,leftSpan:3,rightSpan:3,className:"pl-5 col-12",convertValue:y.Hh,formItem:{component:q.f,componentProps:{showIcon:!0,dateFormat:"dd-mm-yy"}}}),a.createElement(o.Wi,{label:"Notes",name:"notes",leftSpan:3,rightSpan:8,className:"pl-5 pb-3 col-12",control:e,errors:n,formItem:{component:v.o,componentProps:{maxLength:25}}}))}}))},H=function(e){var t=(0,a.useState)(1),n=(0,m.Z)(t,2),r=n[0],i=n[1],l=(0,a.useState)(y.IV),c=(0,m.Z)(l,2),s=c[0],u=c[1],d=D({page:r,size:s}),p=d.data,v=d.isFetching,g=G(),f=(0,m.Z)(g,2),E=f[0],h=f[1].isLoading;return a.createElement(o.PS,{pagination:{pageSize:s,loading:v,currentPage:r,total:null===p||void 0===p?void 0:p.count,onChange:function(e,t){i(e),u(t)}},baseRoute:"/sales/salebooking",description:"Sale Booking",isLoading:v||h,data:null===p||void 0===p?void 0:p.results,deleteAction:function(e){return E(e).unwrap()},showHeader:!0,newTable:!0},a.createElement(o._P,{field:"number",header:"Booking No",filteringType:"number"}),a.createElement(o._P,{field:"date",header:"Booking Date",filteringType:"date"}),a.createElement(o._P,{field:"customer.name",header:"Customer",filteringType:"text"}),a.createElement(o._P,{field:"project.name",header:"Project",filteringType:"text"}),a.createElement(o._P,{field:"unit.descr",header:"Unit",filteringType:"number"}),a.createElement(o._P,{field:"status.descr",header:"Status",filteringType:"text"}))},z=a.createElement(r.AW,{path:"salebooking"},a.createElement(r.AW,{path:"new",element:a.createElement(Q,null)}),a.createElement(r.AW,{path:":id/edit",element:a.createElement(Q,null)}),a.createElement(r.AW,{index:!0,element:a.createElement(H,null)})),Y="/sale/agreement/",X=y.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listSaleAgreement:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,y.DS)(Y,"?page=".concat(t||1,"&page_size=").concat(n||y.IV))}},providesTags:function(e){var t;return e?[].concat((0,E.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:y.pJ.SALE_AGREEMENT,key:t}}))),[{type:y.pJ.SALE_AGREEMENT,id:"LIST"}]):[{type:y.pJ.SALE_AGREEMENT,id:"LIST"}]}}),addSaleAgreement:e.mutation({query:function(e){return{url:Y,method:"POST",body:e}},invalidatesTags:[{type:y.pJ.SALE_AGREEMENT,id:"LIST"}]}),getSaleAgreement:e.query({query:function(e){return"".concat(Y).concat(e)},providesTags:function(e,t,n){return[{type:y.pJ.SALE_AGREEMENT,id:n}]}}),updateSaleAgreement:e.mutation({query:function(e){var t=e;return{url:"".concat(Y),method:"POST",body:t}},invalidatesTags:function(e){return[{type:y.pJ.SALE_AGREEMENT,id:null===e||void 0===e?void 0:e.key}]}}),deleteSaleAgreement:e.mutation({query:function(e){return{url:"".concat(Y).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:y.pJ.SALE_AGREEMENT,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),$=X.useAddSaleAgreementMutation,ee=X.useDeleteSaleAgreementMutation,te=X.useGetSaleAgreementQuery,ne=X.useListSaleAgreementQuery,ae=X.useUpdateSaleAgreementMutation,re=(X.useGetErrorProneQuery,"/sale/agreement/items/"),oe=y.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listSaleAgreementItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,y.DS)(re,"?page=".concat(t||1,"&page_size=").concat(n||y.IV))}},providesTags:function(e){var t;return e?[].concat((0,E.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:y.pJ.SALE_AGREEMENT_ITEM,item_key:t}}))),[{type:y.pJ.SALE_AGREEMENT_ITEM,id:"LIST"}]):[{type:y.pJ.SALE_AGREEMENT_ITEM,id:"LIST"}]}}),addSaleAgreementItems:e.mutation({query:function(e){return{url:re,method:"POST",body:e}},invalidatesTags:[{type:y.pJ.SALE_AGREEMENT_ITEM,id:"LIST"},{type:y.pJ.TRANSACTION,id:"LIST"}]}),getSaleAgreementItem:e.query({query:function(e){return"".concat(re).concat(e)},providesTags:function(e,t,n){return[{type:y.pJ.SALE_AGREEMENT_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),ie=oe.useAddSaleAgreementItemsMutation,le=(oe.useGetSaleAgreementItemQuery,oe.useListSaleAgreementItemQuery,oe.useGetErrorProneQuery,function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))}),ce=(0,a.forwardRef)((function(e,t){var n=e.data,r=e.isLoading,i=e.disableTable,l=void 0!==i&&i,c=e.onChange,s=void 0===c?function(){}:c,u=(0,a.useState)([]),p=(0,m.Z)(u,2),v=p[0],g=p[1],f=ie(),E=(0,m.Z)(f,2),h=E[0],S=E[1].isLoading,b=(0,a.useRef)(v),A=(0,a.useRef)([]),N=(0,a.useRef)([]),T=(0,y.gg)({}).data,L=(0,y.K)({}).data;(0,a.useImperativeHandle)(t,(function(){return{saveItem:function(e){return le(this,void 0,void 0,(0,d.Z)().mark((function t(){return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(Object.assign(Object.assign({},e),{items:v})).unwrap();case 2:case"end":return t.stop()}}),t)})))},getItems:function(){return v}}})),(0,a.useEffect)((function(){g(n),b.current=n}),[n]),(0,a.useEffect)((function(){A.current=T||[],N.current=L||[]}),[T,L]);return a.createElement(o.PS,{baseRoute:"/sales/".concat("saleagreement"),description:"Sale Agreement",isLoading:r||S,data:v,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:l,actionBodyTemplate:function(e){return a.createElement(j.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,_.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return function(e){var t=b.current.filter((function(t){return t!==e}));b.current=t,g(t)}(e)},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:l||!function(e){if(0===e.length)return!0;var t=e[e.length-1];return null===t||void 0===t?void 0:t.item_descr}(v),newRowDefaults:{netamt:0},OnRowsChanged:function(e){g(e),b.current=e,s(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},a.createElement(o._P,{field:"item_descr",width:"70%",header:"Payment Stages*",editorType:!l&&"text"}),a.createElement(o._P,{field:"netamt",header:"Total Amt",type:"currency",defaultValue:0,editorType:!l&&"currency",summaryFormatter:function(e){var t,n=e.row;return t=null===n||void 0===n?void 0:n.netamt,a.createElement(o.JK,{value:t||0})}}))})),se=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))},ue=function(e){var t=(0,o.pm)(),n=t.showSuccess,i=t.showError,l=(0,a.useState)(!1),c=(0,m.Z)(l,2),s=c[0],u=c[1],f=(0,a.useState)(!1),E=(0,m.Z)(f,2),h=E[0],S=E[1],b=(0,a.useState)("S"),A=(0,m.Z)(b,2),N=A[0],T=A[1],L=(0,a.useState)("SAVE"),x=(0,m.Z)(L,2),w=x[0],I=x[1],k=(0,r.s0)(),C=(0,r.UO)().id,O=parseInt(C||""),P=isNaN(O)||O<=0,_=(0,a.useRef)(),Z=(0,a.useRef)(),B=(0,y.ft)(),W=te(O,{skip:P,refetchOnMountOrArgChange:!0}),K=W.data,F=W.isLoading,G=(0,a.useState)(null),U=(0,m.Z)(G,2),D=U[0],J=U[1],V=(0,a.useState)(null),Q=(0,m.Z)(V,2),H=Q[0],z=Q[1],Y=(0,a.useState)([]),X=(0,m.Z)(Y,2),ee=X[0],ne=X[1],re=(0,a.useState)({}),oe=(0,m.Z)(re,2),ie=oe[0],le=oe[1],ue=(0,y.Gt)("SLA",{skip:!P,refetchOnMountOrArgChange:P}),de=ue.data,me=(ue.isFetching,(0,y.Nn)()),pe=me.data,ve=me.isLoading,ge=(0,y.Xj)(),fe=ge.data,Ee=ge.isLoading,ye=$(),he=(0,m.Z)(ye,2),Se=he[0],be=he[1].isLoading,Ae=ae(),Ne=(0,m.Z)(Ae,2),Te=Ne[0],Le=Ne[1].isLoading;(0,a.useEffect)((function(){var e,t,n,a;le(K||Object.assign(Object.assign({},B),{agreementdate:(0,y.Hh)(new Date,!0),docid:"SLA",agreementno:null===de||void 0===de?void 0:de.next_doc_id,loctyp:"PR"})),K&&(ne((null===K||void 0===K?void 0:K.stages)||[]),J(null===(t=null===(e=null===K||void 0===K?void 0:K.booking)||void 0===e?void 0:e.project)||void 0===t?void 0:t.name),z(null===(a=null===(n=null===K||void 0===K?void 0:K.booking)||void 0===n?void 0:n.unit)||void 0===a?void 0:a.descr))}),[K]);var xe=function(){return["U","R","C"].includes(null===K||void 0===K?void 0:K.docstatus)};return a.createElement(a.Fragment,null,a.createElement(o.Rm,{disableSaveBtn:xe(),baseRoute:"/sales/saleagreement",description:"Sale Agreement",id:O,data:ie,isUpdating:be||Le||s,ref:Z,isItemsTableChanged:h,moreSubmitItems:a.createElement(a.Fragment,null,a.createElement(j.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===K||void 0===K?void 0:K.docstatus),onClick:function(e){e.preventDefault(),function(e,t){se(void 0,void 0,void 0,(0,d.Z)().mark((function n(){var a;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e);case 2:return n.next=4,I(t);case 4:null===(a=document.getElementById("submit"))||void 0===a||a.click();case 5:case"end":return n.stop()}}),n)})))}("U","SUBMIT_WITH_SAVE")}}),a.createElement(j.z,{label:"Cancel",disabled:P||["R","C"].includes(null===K||void 0===K?void 0:K.docstatus),className:"p-button-plain",onClick:function(e){return I("CANCEL"),T("C"),!0}})),isLoading:F,onSubmit:function(e){return se(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var a,r,o,l,c;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,l=null===(a=_.current)||void 0===a?void 0:a.getItems(),c=Object.assign(Object.assign({},e),{docid:"SLA",agreementno:P?null===de||void 0===de?void 0:de.next_doc_id:null===K||void 0===K?void 0:K.agreementno,agreementdate:(0,y.p6)(e.agreementdate,"yyyy-MM-dd"),loctyp:"PR",docstatus:N,action:w,stages:l}),!P){t.next=9;break}return t.next=6,Se(Object.assign(Object.assign({},c),B)).unwrap();case 6:o=t.sent,t.next=12;break;case 9:return t.next=11,Te(Object.assign(Object.assign(Object.assign({},c),B),{key:null===K||void 0===K?void 0:K.key})).unwrap();case 11:o=t.sent;case 12:n("Success",o.detail),u(!0),setTimeout((function(){k("/sales/saleagreement")}),y.P7),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),i("An error occurred",(null===(r=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===r?void 0:r.detail)||"We couldn't save your post, try again!");case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))},renderForm:function(e,t,n,r){var i;return a.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},a.createElement(o.Wi,{label:"Agreement No",name:"number",className:"col-12",control:e,errors:n,leftSpan:2,rightSpan:3,formItem:{component:v.o,componentProps:{useGrouping:!1,disabled:!0,value:(null===K||void 0===K?void 0:K.agreementno)||(null===de||void 0===de?void 0:de.next_doc_id)}}}),a.createElement(o.Wi,{label:"Customer",name:"cust_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:ve,required:!0,leftSpan:4,rightSpan:6,formItem:{component:R.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:pe}}}),a.createElement(o.Wi,{label:"Agreement Date",name:"agreementdate",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:n,required:!0,leftSpan:4,rightSpan:6,convertValue:y.Hh,formItem:{component:q.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),a.createElement(o.Wi,{label:"Booking No",name:"salbk_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:Ee,required:!0,leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){var t,n,a=null===fe||void 0===fe?void 0:fe.filter((function(t){return t.key===e.value}))[0];J(null===(t=null===a||void 0===a?void 0:a.project)||void 0===t?void 0:t.name),z(null===(n=null===a||void 0===a?void 0:a.unit)||void 0===n?void 0:n.descr)},formItem:{component:R.L,componentProps:{showClear:!0,optionLabel:"number",optionValue:"key",filter:!0,filterBy:"number",options:fe}}}),a.createElement("div",{className:"field grid grid-nogutter p-fluid col-12 md:col-6"},a.createElement("label",{htmlFor:"saleamt",style:{marginRight:3},className:(0,g.AK)("col-4",{"p-error":n.saleamt})},"Sale Amount*"),a.createElement("div",{className:"input-field",style:{width:"49%"}},a.createElement(p.Qr,{name:"saleamt",control:e,rules:{required:{value:!0,message:"Enter Sale Amount"}},render:function(e){var t=e.field;return a.createElement(M.h3,Object.assign({id:t.name,maxLength:12,thousandSeparator:!0},t,{style:{width:"100%",textAlign:"right"},onValueChange:function(e){t.onChange(parseInt(e.value))},className:(0,g.AK)("p-inputtext p-component")}))}}),(0,o.Hb)(null===(i=null===n||void 0===n?void 0:n.saleamt)||void 0===i?void 0:i.message))),a.createElement(o.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:v.o,componentProps:{disabled:!0,value:D}}}),a.createElement(o.Wi,{label:"Unit",name:"projunit_key",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:v.o,componentProps:{disabled:!0,value:H}}}),a.createElement(o.Wi,{label:"Notes",name:"notes",leftSpan:2,rightSpan:8,className:"pb-3 col-12",control:e,errors:n,formItem:{component:v.o,componentProps:{maxLength:25}}}),a.createElement("div",{className:"col-12"},a.createElement(ce,{data:ee,isLoading:F,ref:_,disableTable:xe(),onChange:function(e){return!h&&S(e)}})))}}))},de=function(e){var t=(0,a.useState)(1),n=(0,m.Z)(t,2),r=n[0],i=n[1],l=(0,a.useState)(y.IV),c=(0,m.Z)(l,2),s=c[0],u=c[1],d=ne({page:r,size:s}),p=d.data,v=d.isFetching,g=ee(),f=(0,m.Z)(g,2),E=f[0],h=f[1].isLoading;return a.createElement(o.PS,{pagination:{pageSize:s,loading:v,currentPage:r,total:null===p||void 0===p?void 0:p.count,onChange:function(e,t){i(e),u(t)}},baseRoute:"/sales/saleagreement",description:"Sale Agreement",isLoading:v||h,data:null===p||void 0===p?void 0:p.results,newTable:!0,showHeader:!0,deleteAction:function(e){return E(e).unwrap()}},a.createElement(o._P,{field:"agreementno",header:"Agreement No",filteringType:"number"}),a.createElement(o._P,{field:"agreementdate",header:"Agreement Date",filteringType:"date"}),a.createElement(o._P,{field:"customer.name",header:"Customer",filteringType:"text"}),a.createElement(o._P,{field:"booking.project.name",header:"Project",filteringType:"text"}),a.createElement(o._P,{field:"booking.unit.descr",header:"Unit",filteringType:"text"}),a.createElement(o._P,{field:"status.descr",header:"Status",filteringType:"text"}))},me=a.createElement(r.AW,{path:"saleagreement"},a.createElement(r.AW,{path:"new",element:a.createElement(ue,null)}),a.createElement(r.AW,{path:":id/edit",element:a.createElement(ue,null)}),a.createElement(r.AW,{index:!0,element:a.createElement(de,null)})),pe=function(){var e,t,n,c=(null===(n=null===(t=null===(e=(0,y.aC)().user)||void 0===e?void 0:e.role[0])||void 0===t?void 0:t.access)||void 0===n?void 0:n.map((function(e){return e.name})))||[];return a.createElement(r.Z5,null,c.includes(i.a)?a.createElement(r.AW,{path:"/",element:a.createElement(o.SV,{navItems:u})},a.createElement(r.AW,{index:!0,element:a.createElement(r.Fg,{to:l,replace:!0})}),P,z,me,a.createElement(r.AW,{path:":page/comming-soon",element:a.createElement(o.hg,null)}),a.createElement(r.AW,{path:"*",element:a.createElement(o.EN,{relative:!0})})):a.createElement(r.AW,{path:"/",element:a.createElement(o.SV,{navItems:u})},a.createElement(r.AW,{path:"*",element:a.createElement(o.Sd,{relative:!0})})))}},8356:function(e,t,n){n.d(t,{i:function(){return i}});var a=n(969),r=n(4756);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=a.forwardRef((function(e,t){var n="horizontal"===e.layout,l="vertical"===e.layout,c=r.gb.findDiffKeys(e,i.defaultProps),s=(0,r.AK)("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":n&&(!e.align||"left"===e.align),"p-divider-right":n&&"right"===e.align,"p-divider-center":n&&"center"===e.align||l&&(!e.align||"center"===e.align),"p-divider-top":l&&"top"===e.align,"p-divider-bottom":l&&"bottom"===e.align},e.className);return a.createElement("div",o({className:s,style:e.style,role:"separator"},c),a.createElement("div",{className:"p-divider-content"},e.children))}));i.displayName="Divider",i.defaultProps={__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null}}}]);
//# sourceMappingURL=83.cd44a592.chunk.js.map