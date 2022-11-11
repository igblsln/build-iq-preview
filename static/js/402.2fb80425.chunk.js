"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[402],{402:function(e,t,n){n.d(t,{h:function(){return P},Z:function(){return C}});var o=n(969),r=n(3026),a=n(3668),i=n(6234),c=n(7765),u=n(8301),l=n(8224),s=n(4756),d=n(3127),m=n(4320),p=n(7302),f=n(3363),y=n(8079),g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},v="/transaction/purchase/order/",b=f.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listTransaction:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,f.DS)(v,"?page=".concat(t||1,"&page_size=").concat(n||f.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:f.pJ.TRANSACTION,key:t}}))),[{type:f.pJ.TRANSACTION,id:"LIST"}]):[{type:f.pJ.TRANSACTION,id:"LIST"}]}}),addTransaction:e.mutation({query:function(e){return{url:"".concat(v),method:"POST",body:e}},invalidatesTags:[{type:f.pJ.TRANSACTION,id:"LIST"}]}),getTransaction:e.query({query:function(e){return"".concat(v).concat(e)},providesTags:function(e,t,n){return[{type:f.pJ.TRANSACTION,id:n}]}}),getTransactionNextDocId:e.query({query:function(e){return"".concat("/transaction/doc/id/","next?docid=").concat(e)},providesTags:function(e,t){return[]}}),updateTransaction:e.mutation({query:function(e){var t=e.key,n=g(e,["key"]);return{url:"".concat(v).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){var t;return[{type:f.pJ.TRANSACTION,id:null===(t=null===e||void 0===e?void 0:e.data)||void 0===t?void 0:t.key}]}}),deleteTransaction:e.mutation({query:function(e){return{url:"".concat(v).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:f.pJ.TRANSACTION,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),h=b.useAddTransactionMutation,T=b.useDeleteTransactionMutation,E=b.useGetTransactionQuery,N=b.useListTransactionQuery,w=b.useUpdateTransactionMutation,x=(b.useGetErrorProneQuery,b.useGetTransactionNextDocIdQuery),P=(b.endpoints.getTransaction,"materialpurchase"),L="Material Purchase",O={purchase:"GR2",inventory:"GR3",projects:"GR1"},R=n(6666),S=n(6770),_=(0,o.forwardRef)((function(e,t){var n=e.moduleName,r=e.data,a=e.isLoading,c=(0,o.useState)([]),u=(0,i.Z)(c,2),s=u[0],d=u[1],m=(0,o.useRef)(s),y=(0,o.useRef)([]),g=(0,o.useRef)([]),v=(0,f.Zp)({}),b=v.data,h=(v.isLoading,(0,f.DY)({})),T=h.data;h.isLoading;(0,o.useImperativeHandle)(t,(function(){return{getItems:function(){return s}}})),(0,o.useEffect)((function(){d(r),m.current=r}),[r]),(0,o.useEffect)((function(){y.current=(null===b||void 0===b?void 0:b.results)||[],g.current=(null===T||void 0===T?void 0:T.results)||[]}),[b,T]);var E=function(e){return o.createElement(p.JK,{value:e||0})};return o.createElement(p.PS,{baseRoute:"/".concat(n,"/").concat(P),description:L,isLoading:a,data:s,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,actionBodyTemplate:function(e){return o.createElement(S.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=m.current.filter((function(t){return t!==e}));m.current=t,d(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,newRowDefaults:{netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){d(e),m.current=e},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},o.createElement(p._P,{field:"item_key",displayField:"items.descr",header:"Item",editorType:function(e){var t=e.row,n=e.column,r=e.onRowChange;e.onClose;return o.createElement(l.L,{autoFocus:!0,className:"p-inputtext-sm editor-dropdown-style",value:t[n.key],optionLabel:"descr",optionValue:"key",options:y.current,onChange:function(e){console.log("getOptionsEditor-onChange",e,n,t),t[n.key]=e.value,t.items=y.current.find((function(t){return t.key===e.value})),r(t,!0)},tabIndex:-1})}}),o.createElement(p._P,{field:"itemuom_key",displayField:"items_uoms.descr",header:"UOM",editorType:function(e){var t=e.row,n=e.column,r=e.onRowChange;e.onClose;return o.createElement(l.L,{autoFocus:!0,className:"p-inputtext-sm editor-dropdown-style",value:t[n.key],optionLabel:"descr",optionValue:"key",options:g.current,onChange:function(e){console.log("getOptionsEditor-onChange",e,Object.assign(Object.assign({},t),(0,R.Z)({},n.key,e.value))),t[n.key]=e.value,t.items_uoms=g.current.find((function(t){return t.key===e.value})),r(t,!0)},tabIndex:-1})}}),o.createElement(p._P,{field:"qty",header:"Quantiy",type:"number",editorType:"number"}),o.createElement(p._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:"number"}),o.createElement(p._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,editorType:"currency",summaryFormatter:function(e){var t=e.row;return E(null===t||void 0===t?void 0:t.netamt)}}),o.createElement(p._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,editorType:"currency",summaryFormatter:function(e){var t=e.row;return E(null===t||void 0===t?void 0:t.taxamt)}}),o.createElement(p._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,editorType:"currency",summaryFormatter:function(e){var t=e.row;return E(null===t||void 0===t?void 0:t.totalamt)}}))})),k=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(t){a(t)}}function c(e){try{u(o.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((o=o.apply(e,t||[])).next())}))},I=function(e,t){return e?t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()):new Date(e):e},A=function(e){var t=e.moduleName,n=(0,p.pm)(),y=n.showSuccess,g=n.showError,v=(0,o.useState)(!1),b=(0,i.Z)(v,2),T=b[0],N=b[1],R=(0,o.useState)({}),S=(0,i.Z)(R,2),A=S[0],j=S[1],C=(0,r.UO)().id,F=parseInt(C||""),V=isNaN(F)||F<=0,W=(0,o.useRef)(),q=E(F,{skip:V}),D=q.data,G=q.isLoading,Z=q.refetch,J=x(O[t],{skip:!V}),Y=J.data,B=J.isLoading,M=(0,r.s0)(),U=(0,f.JB)(),H=U.data,Q=U.isLoading,$=(0,f.Wv)(),z=$.data,K=$.isLoading,X=w(),ee=(0,i.Z)(X,2),te=ee[0],ne=ee[1].isLoading,oe=h(),re=(0,i.Z)(oe,2),ae=re[0],ie=re[1].isLoading;(0,o.useEffect)((function(){j(D||Object.assign(Object.assign({},f.Y$),{date:I(new Date,!0),docid:O[t],number:null===Y||void 0===Y?void 0:Y.next_doc_id,loctyp:"projects"===t?"PR":"inventory"===t?"WH":""}))}),[D,Y]);var ce=[{label:"Save & Submit",icon:"pi pi-check",command:function(){console.log("Submit")}},{label:"Cancel",icon:"pi pi-times",command:function(){console.log("Cancel")}}];return o.createElement(o.Fragment,null,o.createElement(p.Rm,{baseRoute:"/".concat(t,"/").concat(P),description:L,id:F,data:A,saveButton:o.createElement(m.a,{label:"Save",style:{paddingRight:20},buttonProps:{type:"submit"},menuClassName:"save-menu-item",className:"p-button-warning mr-3",model:ce}),moreSubmitItems:o.createElement(o.Fragment,null),isUpdating:ie||ne||T,isLoading:G,onSubmit:function(e){return k(void 0,void 0,void 0,(0,a.Z)().mark((function n(){var o,r,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=null===(o=W.current)||void 0===o?void 0:o.getItems(),console.log("submit",e,r),n.prev=2,!V){n.next=9;break}return n.next=6,ae(Object.assign(Object.assign(Object.assign({action:"SAVE"},e),{purchs_odr_items:null===r||void 0===r?void 0:r.map((function(e){return Object.assign(Object.assign({},e),f.Y$)}))}),f.Y$)).unwrap();case 6:i=n.sent,n.next=12;break;case 9:return n.next=11,te(Object.assign(Object.assign(Object.assign({action:"SAVE"},e),{purchs_odr_items:null===r||void 0===r?void 0:r.map((function(e){return Object.assign(Object.assign({},e),f.Y$)}))}),f.Y$)).unwrap();case 11:i=n.sent;case 12:console.log("submit resp",i),Z(),y("Success",i.detail),N(!0),setTimeout((function(){M("/".concat(t,"/").concat(P))}),3e3),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),g("An error occurred","We couldn't save your post, try again!");case 22:case"end":return n.stop()}}),n,null,[[2,19]])})))},renderForm:function(e,n,r){return o.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},o.createElement("div",{className:"col-12 md:col-6 grid grid-nogutter p-fluid",style:{alignContent:"flex-start"}},o.createElement(p.Wi,{label:"Doc ID",name:"docid",className:(0,s.AK)("col-12 md:col-6"),control:e,errors:r,formItem:{component:c.o,componentProps:{disabled:!0}}}),"purchase"===t&&o.createElement(p.Wi,{label:"Type",name:"loctyp",className:"col-12 md:col-6",centerText:!0,control:e,errors:r,formItem:{component:l.L,componentProps:{optionLabel:"name",optionValue:"id",options:[{name:"Project",id:"PR"},{name:"Warehouse",id:"WH"}]}}})),o.createElement(p.Wi,{label:"GRN Number",name:"number",isLoading:B,className:"col-12 md:col-6",control:e,errors:r,formItem:{component:u.R,componentProps:{useGrouping:!1,disabled:!0}}}),o.createElement(p.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:r,isLoading:Q,leftSpan:3,rightSpan:9,formItem:{component:l.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:H}}}),o.createElement(p.Wi,{label:"GRN Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:r,convertValue:I,formItem:{component:d.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),o.createElement(p.Wi,{label:"Vendor",name:"vend_key",className:"col-12 md:col-6",control:e,errors:r,isLoading:K,leftSpan:3,rightSpan:9,formItem:{component:l.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:z}}}),o.createElement(p.Wi,{label:"Vendor RefNo",name:"vend_ref_no",className:"col-12 md:col-6",control:e,errors:r,formItem:{component:c.o,componentProps:{maxLength:25}}}),o.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},o.createElement(_,{data:(null===D||void 0===D?void 0:D.purchs_odr_items)||[],isLoading:G,moduleName:t,ref:W})))}}))},j=function(e){var t=e.moduleName,n=N({}),r=n.data,a=n.isLoading,c=T(),u=(0,i.Z)(c,2),l=u[0],s=u[1].isLoading;return o.createElement(p.PS,{baseRoute:"/".concat(t,"/").concat(P),description:L,isLoading:a||s,newTable:!0,showHeader:!0,data:null===r||void 0===r?void 0:r.results,deleteAction:function(e){return l(e).unwrap()}},o.createElement(p._P,{field:"number",header:"GRN Number",filteringType:"number"}),o.createElement(p._P,{field:"date",header:"GRN Date",filteringType:"text"}),o.createElement(p._P,{field:"project.name",header:"Project",filteringType:"text"}),o.createElement(p._P,{field:"vendor.name",header:"Vendor",filteringType:"text"}),o.createElement(p._P,{field:"vendtyp_key",header:"Vendor RefNo",filteringType:"text"}),o.createElement(p._P,{field:"docstatus",header:"GRN Status",filteringType:"text"}))},C=function(e){return o.createElement(r.AW,{path:P},o.createElement(r.AW,{path:"new",element:o.createElement(A,{moduleName:e})}),o.createElement(r.AW,{path:":id/edit",element:o.createElement(A,{moduleName:e})}),o.createElement(r.AW,{index:!0,element:o.createElement(j,{moduleName:e})}))}}}]);
//# sourceMappingURL=402.2fb80425.chunk.js.map