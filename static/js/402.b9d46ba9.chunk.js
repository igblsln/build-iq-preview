"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[402],{402:function(e,t,n){n.d(t,{h:function(){return I},Z:function(){return A}});var r=n(969),a=n(3026),o=n(3668),i=n(6234),c=n(7765),u=n(8301),l=n(8224),s=n(4756),d=n(3127),m=n(6770),p=n(4576),f=n(7993),v=n(7978),g=n(8079),y="/transaction/goods/receipts/",b=v.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listTransaction:e.query({query:function(e){var t=e.page,n=e.size,r=e.grn;return{url:r?(0,v.DS)(y,"?page=".concat(t||1,"&page_size=").concat(n||v.IV,"&docid=").concat(r)):(0,v.DS)(y,"?page=".concat(t||1,"&page_size=").concat(n||v.IV))}},providesTags:function(e){var t;return e?[].concat((0,g.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:v.pJ.TRANSACTION,key:t}}))),[{type:v.pJ.TRANSACTION,id:"LIST"}]):[{type:v.pJ.TRANSACTION,id:"LIST"}]}}),addTransaction:e.mutation({query:function(e){return{url:"".concat(y),method:"POST",body:e}},invalidatesTags:[{type:v.pJ.TRANSACTION,id:"LIST"}]}),getTransaction:e.query({query:function(e){return"".concat(y).concat(e)},providesTags:function(e,t,n){return[{type:v.pJ.TRANSACTION,id:n}]}}),getTransactionNextDocId:e.query({query:function(e){return"".concat("/transaction/doc/id/","next?docid=").concat(e)},providesTags:function(e,t){return[]}}),updateTransaction:e.mutation({query:function(e){var t=e;return{url:"".concat(y),method:"POST",body:t}},invalidatesTags:function(e){var t;return[{type:v.pJ.TRANSACTION,id:null===(t=null===e||void 0===e?void 0:e.data)||void 0===t?void 0:t.key}]}}),deleteTransaction:e.mutation({query:function(e){return{url:"".concat(y).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:v.pJ.TRANSACTION,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),h=b.useAddTransactionMutation,T=b.useDeleteTransactionMutation,E=b.useGetTransactionQuery,S=b.useListTransactionQuery,N=b.useUpdateTransactionMutation,x=(b.useGetErrorProneQuery,b.useGetTransactionNextDocIdQuery),I=(b.endpoints.getTransaction,"materialpurchase"),w="Material Purchase",L={purchase:"GR2",inventory:"GR3",projects:"GR1"},P=(0,r.forwardRef)((function(e,t){var n,a=e.moduleName,o=e.data,c=e.isLoading,u=e.disableTable,s=void 0!==u&&u,d=e.onChange,p=void 0===d?function(){}:d,g=(0,r.useState)([]),y=(0,i.Z)(g,2),b=y[0],h=y[1],T=(0,v.nq)("admin"),E=T.data,S=(T.isLoading,E&&(null===(n=E[0])||void 0===n?void 0:n.user)),N=(0,r.useRef)(b),x=(0,r.useRef)([]),L=(0,r.useRef)([]),P=(0,v.Zp)({}),R=P.data,_=(P.isLoading,(0,v.DY)({})),k=_.data;_.isLoading;(0,r.useImperativeHandle)(t,(function(){return{getItems:function(){return b}}})),(0,r.useEffect)((function(){h(o),N.current=o}),[o]),(0,r.useEffect)((function(){x.current=(null===R||void 0===R?void 0:R.results)||[],L.current=(null===k||void 0===k?void 0:k.results)||[]}),[R,k]);var C=function(e){return r.createElement(f.JK,{value:e||0})},A=function(){return"projects"!==a||3===S};return r.createElement(f.PS,{baseRoute:"/".concat(a,"/").concat(I),description:w,isLoading:c,data:b,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:s,actionBodyTemplate:function(e){return r.createElement(m.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=N.current.filter((function(t){return t!==e}));N.current=t,h(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!s,newRowDefaults:{netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){h(e),N.current=e,p(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(f._P,{field:"item_key",header:"Item",editorType:!s&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(l.L,{autoFocus:!0,className:"p-inputtext-sm editor-dropdown-style",value:t[n.key],optionLabel:"descr",optionValue:"key",options:x.current,onChange:function(e){t[n.key]=e.value,t.items=x.current.find((function(t){return t.key===e.value})),a(t,!0)},tabIndex:-1})}}),r.createElement(f._P,{field:"itemuom_key",header:"UOM",editorType:!s&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(l.L,{autoFocus:!0,className:"p-inputtext-sm editor-dropdown-style",value:t[n.key],optionLabel:"descr",optionValue:"key",options:L.current,onChange:function(e){t[n.key]=e.value,t.items_uoms=L.current.find((function(t){return t.key===e.value})),a(t,!0)},tabIndex:-1})}}),r.createElement(f._P,{field:"qty",header:"Quantiy",type:"number",editorType:!s&&"number"}),A()&&r.createElement(f._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:!s&&"number"}),A()&&r.createElement(f._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,editorType:!s&&"currency",summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.netamt)}}),A()&&r.createElement(f._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,editorType:!s&&"currency",summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.taxamt)}}),A()&&r.createElement(f._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,editorType:!s&&"currency",summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.totalamt)}}))})),R=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},_=function(e,t){return e?t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()):new Date(e):e},k=function(e){var t=e.moduleName,n=(0,f.pm)(),g=n.showSuccess,y=n.showError,b=(0,r.useState)(!1),T=(0,i.Z)(b,2),S=T[0],k=T[1],C=(0,r.useState)({}),A=(0,i.Z)(C,2),O=A[0],j=A[1],V=(0,a.UO)().id,D=parseInt(V||""),q=isNaN(D)||D<=0,Z=(0,r.useState)(!1),W=(0,i.Z)(Z,2),F=W[0],U=W[1],G=(0,r.useState)("S"),M=(0,i.Z)(G,2),B=M[0],J=M[1],H=(0,r.useState)("SAVE"),Y=(0,i.Z)(H,2),z=Y[0],Q=Y[1],$=(0,r.useState)(null),K=(0,i.Z)($,2),X=K[0],ee=K[1],te=(0,r.useState)(null),ne=(0,i.Z)(te,2),re=ne[0],ae=ne[1],oe=(0,r.useRef)(),ie=(0,r.useRef)(),ce=E(D,{skip:q}),ue=ce.data,le=ce.isLoading,se=ce.refetch,de=x(L[t],{skip:!q}),me=de.data,pe=de.isLoading,fe=(0,a.s0)(),ve=(0,v.JB)(),ge=ve.data,ye=ve.isLoading,be=(0,v.Wv)(),he=be.data,Te=be.isLoading,Ee=(0,v.es)({vendor:X,project:re},{skip:!re||!X}),Se=Ee.data,Ne=Ee.isFetching,xe=N(),Ie=(0,i.Z)(xe,2),we=Ie[0],Le=Ie[1].isLoading,Pe=h(),Re=(0,i.Z)(Pe,2),_e=Re[0],ke=Re[1].isLoading;(0,r.useEffect)((function(){j(ue||Object.assign(Object.assign({},v.Y$),{date:_(new Date,!0),docid:L[t],number:null===me||void 0===me?void 0:me.next_doc_id,loctyp:"projects"===t?"PR":"inventory"===t?"WH":""})),ue&&(ae(ue.proj_key),ee(ue.vend_key))}),[ue,me]);var Ce=function(){return["U","R","I","C"].includes(null===ue||void 0===ue?void 0:ue.docstatus)},Ae=function(e,t){return R(void 0,void 0,void 0,(0,o.Z)().mark((function n(){var r;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,J(e);case 2:return n.next=4,Q(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(f.Rm,{baseRoute:"/".concat(t,"/").concat(I),description:w,id:D,data:O,isItemsTableChanged:F,ref:ie,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(m.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===ue||void 0===ue?void 0:ue.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=ie.current)||void 0===t?void 0:t.getIsDirty())||F?(0,p.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return Ae("U","SUBMIT_WITH_SAVE")},reject:function(){return Ae("U","SUBMIT_WITHOUT_SAVE")}}):Ae("U","SUBMIT_WITH_SAVE")}}),r.createElement(m.z,{label:"Cancel",disabled:q||["R","I","C"].includes(null===ue||void 0===ue?void 0:ue.docstatus),className:"p-button-plain",onClick:function(e){return Q("CANCEL"),J("C"),!0}})),isUpdating:ke||Le||S,isLoading:le,onSubmit:function(e){return R(void 0,void 0,void 0,(0,o.Z)().mark((function n(){var r,a,i;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=null===(r=oe.current)||void 0===r?void 0:r.getItems(),console.log("submit",e,a),n.prev=2,!q){n.next=9;break}return n.next=6,_e(Object.assign(Object.assign(Object.assign({},e),{action:z,loctyp:"PR",docstatus:B,grn_items:null===a||void 0===a?void 0:a.map((function(e){return Object.assign(Object.assign({},e),v.Y$)}))}),v.Y$)).unwrap();case 6:i=n.sent,n.next=12;break;case 9:return n.next=11,we(Object.assign(Object.assign(Object.assign({},e),{action:z,docstatus:B,grn_items:null===a||void 0===a?void 0:a.map((function(e){return Object.assign(Object.assign({},e),v.Y$)}))}),v.Y$)).unwrap();case 11:i=n.sent;case 12:console.log("submit resp",i),se(),g("Success",i.detail),k(!0),setTimeout((function(){fe("/".concat(t,"/").concat(I))}),v.P7),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),y("An error occurred","We couldn't save your post, try again!");case 22:case"end":return n.stop()}}),n,null,[[2,19]])})))},renderForm:function(e,n,a){var o;return r.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},r.createElement("div",{className:"col-12 md:col-6 grid grid-nogutter p-fluid",style:{alignContent:"flex-start"}},r.createElement(f.Wi,{label:"Doc ID",name:"docid",className:(0,s.AK)("col-12 md:col-6"),control:e,errors:a,formItem:{component:c.o,componentProps:{disabled:!0}}}),!1),r.createElement(f.Wi,{label:"GRN Number",name:"number",isLoading:pe,className:"col-12 md:col-6",control:e,errors:a,leftSpan:4,rightSpan:6,formItem:{component:u.R,componentProps:{useGrouping:!1,disabled:!0}}}),r.createElement(f.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:a,required:"Select a Project",isLoading:ye,leftSpan:3,rightSpan:9,useExplicit:!0,onChange:function(e){ae(e.value)},formItem:{component:l.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:ge}}}),r.createElement(f.Wi,{label:"GRN Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:a,leftSpan:4,rightSpan:6,convertValue:_,formItem:{component:d.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(f.Wi,{label:"Vendor",name:"vend_key",className:"col-12 md:col-6",control:e,errors:a,isLoading:Te,required:"Select a Vendor",leftSpan:3,rightSpan:9,useExplicit:!0,onChange:function(e){ee(e.value)},formItem:{component:l.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:he}}}),r.createElement(f.Wi,{label:"PO Number",name:"pono",className:"col-12 md:col-6",control:e,errors:a,leftSpan:4,rightSpan:6,isLoading:Ne,formItem:{component:l.L,componentProps:{optionLabel:"number",optionValue:"number",options:Se}}}),r.createElement("div",{className:"col-12 md:col-6"}),r.createElement(f.Wi,{label:"Vendor RefNo",name:"vendrefno",className:"col-12 md:col-6",leftSpan:4,rightSpan:6,required:"Enter Ref No",control:e,errors:a,formItem:{component:c.o,componentProps:{maxLength:25}}}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(P,{data:(null===ue||void 0===ue?void 0:ue.grn_items)||(null===(o=oe.current)||void 0===o?void 0:o.getItems())||[],isLoading:le,moduleName:t,ref:oe,disableTable:Ce(),onChange:function(e){return!F&&U(e)}})))}}))},C=function(e){var t=e.moduleName,n=S("purchase"!==t?{grn:L[t]}:{},{refetchOnMountOrArgChange:!0}),a=n.data,o=n.isLoading,c=T(),u=(0,i.Z)(c,2),l=u[0],s=u[1].isLoading;return r.createElement(f.PS,{baseRoute:"/".concat(t,"/").concat(I),description:w,isLoading:o||s,newTable:!0,showHeader:!0,data:null===a||void 0===a?void 0:a.results,deleteAction:function(e){return l(e).unwrap()}},"purchase"===t&&r.createElement(f._P,{field:"docid",header:"Doc ID",filteringType:"text"}),r.createElement(f._P,{field:"number",header:"GRN Number",filteringType:"number"}),r.createElement(f._P,{field:"date",header:"GRN Date",filteringType:"text"}),r.createElement(f._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(f._P,{field:"vendor.name",header:"Vendor",filteringType:"text"}),r.createElement(f._P,{field:"vendrefno",header:"Vendor RefNo",filteringType:"text"}),r.createElement(f._P,{field:"status.descr",header:"GRN Status",filteringType:"text"}))},A=function(e){return r.createElement(a.AW,{path:I},r.createElement(a.AW,{path:"new",element:r.createElement(k,{moduleName:e})}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(k,{moduleName:e})}),r.createElement(a.AW,{index:!0,element:r.createElement(C,{moduleName:e})}))}}}]);
//# sourceMappingURL=402.b9d46ba9.chunk.js.map