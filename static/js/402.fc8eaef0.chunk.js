"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[402],{402:function(e,t,n){n.d(t,{h:function(){return x},Z:function(){return L}});var r=n(969),a=n(734),o=n(2723),i=n(6234),u=n(7765),c=n(8301),l=n(8224),s=n(3127),d=n(6770),m=n(4576),p=n(2035),f=n(1495),v=n(8079),g="/transaction/goods/receipts/",y=f.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listTransaction:e.query({query:function(e){var t=e.page,n=e.size,r=e.grn;return{url:r?(0,f.DS)(g,"?page=".concat(t||1,"&page_size=").concat(n||f.IV,"&docid=").concat(r)):(0,f.DS)(g,"?page=".concat(t||1,"&page_size=").concat(n||f.IV))}},providesTags:function(e){var t;return e?[].concat((0,v.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:f.pJ.TRANSACTION,key:t}}))),[{type:f.pJ.TRANSACTION,id:"LIST"}]):[{type:f.pJ.TRANSACTION,id:"LIST"}]}}),addTransaction:e.mutation({query:function(e){return{url:"".concat(g),method:"POST",body:e}},invalidatesTags:[{type:f.pJ.TRANSACTION,id:"LIST"}]}),getTransaction:e.query({query:function(e){return"".concat(g).concat(e)},providesTags:function(e,t,n){return[{type:f.pJ.TRANSACTION,id:n}]}}),getTransactionNextDocId:e.query({query:function(e){return"".concat("/transaction/doc/id/","next?docid=").concat(e)},providesTags:function(e,t){return[]}}),updateTransaction:e.mutation({query:function(e){var t=e;return{url:"".concat(g),method:"POST",body:t}},invalidatesTags:function(e){var t;return[{type:f.pJ.TRANSACTION,id:null===(t=null===e||void 0===e?void 0:e.data)||void 0===t?void 0:t.key}]}}),deleteTransaction:e.mutation({query:function(e){return{url:"".concat(g).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:f.pJ.TRANSACTION,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),h=y.useAddTransactionMutation,b=y.useDeleteTransactionMutation,T=y.useGetTransactionQuery,E=y.useListTransactionQuery,S=y.useUpdateTransactionMutation,N=(y.useGetErrorProneQuery,y.useGetTransactionNextDocIdQuery),x=(y.endpoints.getTransaction,"materialpurchase"),I="Material Received",w={purchase:"GR2",inventory:"GR3",projects:"GR1"},k=(0,r.forwardRef)((function(e,t){var n,a=e.moduleName,o=e.data,u=e.isLoading,c=e.disableTable,s=void 0!==c&&c,m=e.onChange,v=void 0===m?function(){}:m,g=(0,r.useState)([]),y=(0,i.Z)(g,2),h=y[0],b=y[1],T=(0,f.nq)("admin").data,E=T&&(null===(n=T[0])||void 0===n?void 0:n.user),S=(0,r.useRef)(h),N=(0,r.useRef)([]),w=(0,r.useRef)([]),k=(0,f.gg)({}).data,_=(0,f.K)({}).data;(0,r.useImperativeHandle)(t,(function(){return{getItems:function(){return h}}})),(0,r.useEffect)((function(){b(o),S.current=o}),[o]),(0,r.useEffect)((function(){N.current=k||[],w.current=_||[]}),[k,_]);var C=function(e){return r.createElement(p.JK,{value:e||0})},R=function(){return"projects"!==a||3===E};return r.createElement(p.PS,{baseRoute:"/".concat(a,"/").concat(x),description:I,isLoading:u,data:h,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:s,actionBodyTemplate:function(e){return r.createElement(d.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=S.current.filter((function(t){return t!==e}));S.current=t,b(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:s||!(0,f.pH)(h),newRowDefaults:{qty:0,netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){var t=e.map((function(e){var t,n=0,r=null,a=null===(t=N.current)||void 0===t?void 0:t.filter((function(t){return t.key===e.item_key}));a.length&&(n=parseInt(a[0].gst),r=a[0]);var o=e.totalamt,i=parseFloat((o/(1+.01*n)).toFixed(2)),u=parseFloat((i*(.01*n)).toFixed(2));return Object.assign(Object.assign({},e),{netamt:i,taxamt:u,selectedItem:r})}));b(t),S.current=t,v(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(p._P,{field:"item_key",width:"25%",header:"Item*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=N.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items)||void 0===r?void 0:r.descr}},editorType:!s&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(l.L,{autoFocus:!0,className:"p-inputtext-sm editor-dropdown-style",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:N.current,onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,r.items=w.current.find((function(t){return t.key===e.value})),a(r,!0)},tabIndex:-1})}}),r.createElement(p._P,{field:"itemuom_key",width:"20%",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=w.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:!s&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(l.L,{autoFocus:!0,className:"p-inputtext-sm editor-dropdown-style",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:w.current.filter((function(e){var n,r;return null===(r=null===(n=null===t||void 0===t?void 0:t.selectedItem)||void 0===n?void 0:n.itemuom_list)||void 0===r?void 0:r.includes(e.key)})),onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,r.items_uoms=w.current.find((function(t){return t.key===e.value})),a(r,!0)},tabIndex:-1})}}),r.createElement(p._P,{field:"qty",header:"Quantity",type:"number",editorType:!s&&"number"}),R()&&r.createElement(p._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.netamt)}}),R()&&r.createElement(p._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.taxamt)}}),R()&&r.createElement(p._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,editorType:!s&&"currency",summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.totalamt)}}))})),_=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},C=function(e,t){return e?t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()):new Date(e):e},R=function(e){var t=e.moduleName,n=(0,p.pm)(),v=n.showSuccess,g=n.showError,y=(0,r.useState)(!1),b=(0,i.Z)(y,2),E=b[0],R=b[1],A=(0,r.useState)({}),L=(0,i.Z)(A,2),P=L[0],O=L[1],j=(0,a.UO)().id,V=parseInt(j||""),F=isNaN(V)||V<=0,Z=(0,r.useState)(!1),q=(0,i.Z)(Z,2),W=q[0],D=q[1],G=(0,r.useState)("S"),U=(0,i.Z)(G,2),B=U[0],M=U[1],z=(0,r.useState)("SAVE"),J=(0,i.Z)(z,2),H=J[0],Q=J[1],K=(0,r.useState)(null),Y=(0,i.Z)(K,2),X=Y[0],$=Y[1],ee=(0,r.useState)(null),te=(0,i.Z)(ee,2),ne=te[0],re=te[1],ae=(0,r.useRef)(),oe=(0,r.useRef)(),ie=(0,f.ft)(),ue=T(V,{skip:F}),ce=ue.data,le=ue.isLoading,se=ue.refetch,de=N(w[t],{skip:!F}),me=de.data,pe=de.isLoading,fe=(0,a.s0)(),ve=(0,f.JB)(),ge=ve.data,ye=ve.isLoading,he=(0,f.Wv)(),be=he.data,Te=he.isLoading,Ee=(0,f.es)({vendor:X,project:ne},{skip:!ne||!X}),Se=Ee.data,Ne=Ee.isFetching,xe=S(),Ie=(0,i.Z)(xe,2),we=Ie[0],ke=Ie[1].isLoading,_e=h(),Ce=(0,i.Z)(_e,2),Re=Ce[0],Ae=Ce[1].isLoading;(0,r.useEffect)((function(){O(ce||Object.assign(Object.assign({},ie),{date:C(new Date,!0),docid:w[t],number:null===me||void 0===me?void 0:me.next_doc_id,loctyp:"projects"===t?"PR":"inventory"===t?"WH":""})),ce&&(re(ce.proj_key),$(ce.vend_key))}),[ce,me]);var Le=(0,r.useState)(null),Pe=(0,i.Z)(Le,2),Oe=Pe[0],je=Pe[1],Ve=(0,r.useState)([]),Fe=(0,i.Z)(Ve,2),Ze=Fe[0],qe=Fe[1],We=(0,f.dV)({id:Oe},{skip:!Oe}),De=We.data;We.isFetching;(0,r.useEffect)((function(){if(De)if(F)qe(De);else{var e=(null===ce||void 0===ce?void 0:ce.grn_items.concat(De))||[];qe(e)}}),[De]),(0,r.useEffect)((function(){ce&&qe((null===ce||void 0===ce?void 0:ce.grn_items)||[])}),[ce]);var Ge=function(){return["U","R","I","C"].includes(null===ce||void 0===ce?void 0:ce.docstatus)},Ue=function(e,t){return _(void 0,void 0,void 0,(0,o.Z)().mark((function n(){var r;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M(e);case 2:return n.next=4,Q(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(p.Rm,{baseRoute:"/".concat(t,"/").concat(x),description:I,id:V,data:P,isItemsTableChanged:W,ref:oe,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(d.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===ce||void 0===ce?void 0:ce.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=oe.current)||void 0===t?void 0:t.getIsDirty())||W?(0,m.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return Ue("U","SUBMIT_WITH_SAVE")},reject:function(){return Ue("U","SUBMIT_WITHOUT_SAVE")}}):Ue("U","SUBMIT_WITH_SAVE")}}),r.createElement(d.z,{label:"Cancel",disabled:F||["R","I","C"].includes(null===ce||void 0===ce?void 0:ce.docstatus),className:"p-button-plain",onClick:function(e){return Q("CANCEL"),M("C"),!0}})),isUpdating:Ae||ke||E,isLoading:le,onSubmit:function(e){return _(void 0,void 0,void 0,(0,o.Z)().mark((function n(){var r,a,i,u;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=null===(r=ae.current)||void 0===r?void 0:r.getItems(),n.prev=1,!F){n.next=8;break}return n.next=5,Re(Object.assign(Object.assign(Object.assign({},e),{action:H,loctyp:"PR",docstatus:B,grn_items:null===i||void 0===i?void 0:i.map((function(e){return Object.assign(Object.assign({},e),ie)}))}),ie)).unwrap();case 5:u=n.sent,n.next=11;break;case 8:return n.next=10,we(Object.assign(Object.assign(Object.assign({},e),{action:H,docstatus:B,grn_items:null===i||void 0===i?void 0:i.map((function(e){return Object.assign(Object.assign({},e),ie)}))}),ie)).unwrap();case 10:u=n.sent;case 11:se(),v("Success",u.detail),R(!0),setTimeout((function(){fe("/".concat(t,"/").concat(x))}),f.P7),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(1),g("An error occurred",(null===(a=null===n.t0||void 0===n.t0?void 0:n.t0.data)||void 0===a?void 0:a.detail)||"We couldn't save your post, try again!");case 20:case"end":return n.stop()}}),n,null,[[1,17]])})))},renderForm:function(e,n,a){var o;return r.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},r.createElement(p.Wi,{label:"GRN Number",name:"number",isLoading:pe,className:"col-12 md:col-6",control:e,errors:a,leftSpan:4,rightSpan:6,formItem:{component:c.R,componentProps:{useGrouping:!1,disabled:!0}}}),r.createElement(p.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:a,required:"Select a Project",isLoading:ye,leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){re(e.value)},formItem:{component:l.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:ge}}}),r.createElement(p.Wi,{label:"GRN Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:a,leftSpan:4,rightSpan:6,convertValue:C,formItem:{component:s.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(p.Wi,{label:"Vendor",name:"vend_key",className:"col-12 md:col-6",control:e,errors:a,isLoading:Te,required:"Select a Vendor",leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){$(e.value)},formItem:{component:l.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:be}}}),r.createElement(p.Wi,{label:"PO Number",name:"pono",className:"col-12 md:col-6",control:e,errors:a,leftSpan:4,rightSpan:6,isLoading:Ne,useExplicit:!0,onChange:function(e){Ge()||je(e.value)},formItem:{component:l.L,componentProps:{showClear:!0,optionLabel:"number",optionValue:"key",options:Se}}}),r.createElement(p.Wi,{label:"Vendor RefNo",name:"vendrefno",className:"col-12 md:col-6",leftSpan:4,rightSpan:6,required:"Enter Ref No",control:e,errors:a,formItem:{component:u.o,componentProps:{maxLength:25}}}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(k,{data:Ze||(null===(o=ae.current)||void 0===o?void 0:o.getItems())||[],isLoading:le,moduleName:t,ref:ae,disableTable:Ge(),onChange:function(e){return!W&&D(e)}})))}}))},A=function(e){var t=e.moduleName,n=(0,r.useState)(1),a=(0,i.Z)(n,2),o=a[0],u=a[1],c=(0,r.useState)(f.IV),l=(0,i.Z)(c,2),s=l[0],d=l[1],m=E("purchase"!==t?{grn:w[t],page:o,size:s}:{page:o,size:s},{refetchOnMountOrArgChange:!0}),v=m.data,g=m.isFetching,y=b(),h=(0,i.Z)(y,2),T=h[0],S=h[1].isLoading;return r.createElement(p.PS,{pagination:{pageSize:s,loading:g,currentPage:o,total:null===v||void 0===v?void 0:v.count,onChange:function(e,t){u(e),d(t)}},baseRoute:"/".concat(t,"/").concat(x),description:I,isLoading:g||S,newTable:!0,showHeader:!0,data:null===v||void 0===v?void 0:v.results,deleteAction:function(e){return T(e).unwrap()}},r.createElement(p._P,{field:"number",header:"GRN Number",filteringType:"number"}),r.createElement(p._P,{field:"date",header:"GRN Date",filteringType:"text"}),r.createElement(p._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(p._P,{field:"vendor.name",header:"Vendor",filteringType:"text"}),r.createElement(p._P,{field:"vendrefno",header:"Vendor RefNo",filteringType:"text"}),r.createElement(p._P,{field:"status.descr",header:"GRN Status",filteringType:"text"}))},L=function(e){return r.createElement(a.AW,{path:x},r.createElement(a.AW,{path:"new",element:r.createElement(R,{moduleName:e})}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(R,{moduleName:e})}),r.createElement(a.AW,{index:!0,element:r.createElement(A,{moduleName:e})}))}}}]);
//# sourceMappingURL=402.fc8eaef0.chunk.js.map