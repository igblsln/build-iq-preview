"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[592],{592:function(e,t,n){n.d(t,{h:function(){return x},Z:function(){return W}});var r=n(969),o=n(3026),a=n(3668),i=n(6234),c=n(7765),u=n(8301),s=n(8224),l=n(4756),d=n(3127),m=n(7993),p=n(3363),f=n(8079),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v="/transaction/purchase/order/",g=p.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listTransaction:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,p.DS)(v,"?page=".concat(t||1,"&page_size=").concat(n||p.IV))}},providesTags:function(e){var t;return e?[].concat((0,f.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:p.pJ.TRANSACTION,key:t}}))),[{type:p.pJ.TRANSACTION,id:"LIST"}]):[{type:p.pJ.TRANSACTION,id:"LIST"}]}}),addTransaction:e.mutation({query:function(e){return{url:v,method:"POST",body:e}},invalidatesTags:[{type:p.pJ.TRANSACTION,id:"LIST"}]}),getTransaction:e.query({query:function(e){return"".concat(v).concat(e)},providesTags:function(e,t,n){return[{type:p.pJ.TRANSACTION,id:n}]}}),getTransactionNextDocId:e.query({query:function(e){return"".concat("/transaction/doc/id/","next?docid=").concat(e)},providesTags:function(e,t){return[]}}),updateTransaction:e.mutation({query:function(e){var t=e.key,n=y(e,["key"]);return{url:"".concat(v).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){var t;return[{type:p.pJ.TRANSACTION,id:null===(t=null===e||void 0===e?void 0:e.data)||void 0===t?void 0:t.key}]}}),deleteTransaction:e.mutation({query:function(e){return{url:"".concat(v).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:p.pJ.TRANSACTION,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),T=g.useAddTransactionMutation,h=g.useDeleteTransactionMutation,b=g.useGetTransactionQuery,E=g.useListTransactionQuery,N=g.useUpdateTransactionMutation,I=(g.useGetErrorProneQuery,g.useGetTransactionNextDocIdQuery),x=(g.endpoints.getTransaction,"materialpurchase"),w="Material Purchase",O={purchase:"GR2",inventory:"GR3",projects:"GR1"},L=n(6666),P=n(6770),S="/transaction/purchase/order/items/",R=p.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listTransactionItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,p.DS)(S,"?page=".concat(t||1,"&page_size=").concat(n||p.IV))}},providesTags:function(e){var t;return e?[].concat((0,f.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:p.pJ.TRANSACTION_ITEM,item_key:t}}))),[{type:p.pJ.TRANSACTION_ITEM,id:"LIST"}]):[{type:p.pJ.TRANSACTION_ITEM,id:"LIST"}]}}),addTransactionItems:e.mutation({query:function(e){return{url:S,method:"POST",body:e}},invalidatesTags:[{type:p.pJ.TRANSACTION_ITEM,id:"LIST"},{type:p.pJ.TRANSACTION,id:"LIST"}]}),getTransactionItem:e.query({query:function(e){return"".concat(S).concat(e)},providesTags:function(e,t,n){return[{type:p.pJ.TRANSACTION_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),A=R.useAddTransactionItemsMutation,_=(R.useGetTransactionItemQuery,R.useListTransactionItemQuery,R.useGetErrorProneQuery,R.endpoints.getTransactionItem,function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}),k=(0,r.forwardRef)((function(e,t){var n=e.moduleName,o=e.data,c=e.isLoading,u=(0,r.useState)([]),l=(0,i.Z)(u,2),d=l[0],f=l[1],y=A(),v=(0,i.Z)(y,2),g=v[0],T=v[1].isLoading,h=(0,r.useRef)(d),b=(0,r.useRef)([]),E=(0,r.useRef)([]),N=(0,p.Zp)({}),I=N.data,O=(N.isLoading,(0,p.DY)({})),S=O.data;O.isLoading;(0,r.useImperativeHandle)(t,(function(){return{saveItem:function(e){return _(this,void 0,void 0,(0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(Object.assign(Object.assign({},e),{items:d})).unwrap();case 2:case"end":return t.stop()}}),t)})))}}})),(0,r.useEffect)((function(){f(o),h.current=o}),[o]),(0,r.useEffect)((function(){b.current=(null===I||void 0===I?void 0:I.results)||[],E.current=(null===S||void 0===S?void 0:S.results)||[]}),[I,S]);var R=function(e){return r.createElement(m.JK,{value:e||0})};return r.createElement(m.PS,{baseRoute:"/".concat(n,"/").concat(x),description:w,isLoading:c||T,data:d,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,actionBodyTemplate:function(e){return r.createElement(P.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=h.current.filter((function(t){return t!==e}));h.current=t,f(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,newRowDefaults:{netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){f(e),h.current=e},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(m._P,{field:"item_key",header:"Item",editorType:function(e){var t=e.row,n=e.column,o=e.onRowChange;e.onClose;return r.createElement(s.L,{autoFocus:!0,className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:b.current,onChange:function(e){console.log("getOptionsEditor-onChange",e,Object.assign(Object.assign({},t),(0,L.Z)({},n.key,e.value))),t[n.key]=e.value,o(t,!0)},tabIndex:-1})}}),r.createElement(m._P,{field:"itemuom_key",header:"UOM",editorType:function(e){var t=e.row,n=e.column,o=e.onRowChange;e.onClose;return r.createElement(s.L,{autoFocus:!0,className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:E.current,onChange:function(e){console.log("getOptionsEditor-onChange",e,Object.assign(Object.assign({},t),(0,L.Z)({},n.key,e.value))),t[n.key]=e.value,o(t,!0)},tabIndex:-1})}}),r.createElement(m._P,{field:"qty",header:"Quantiy",type:"number",editorType:"number"}),r.createElement(m._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:"number"}),r.createElement(m._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,editorType:"currency",summaryFormatter:function(e){var t=e.row;return R(null===t||void 0===t?void 0:t.netamt)}}),r.createElement(m._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,editorType:"currency",summaryFormatter:function(e){var t=e.row;return R(null===t||void 0===t?void 0:t.taxamt)}}),r.createElement(m._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,editorType:"currency",summaryFormatter:function(e){var t=e.row;return R(null===t||void 0===t?void 0:t.totalamt)}}))})),j=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},C=function(e,t){return e?t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()):new Date(e):e},q=function(e){var t=e.moduleName,n=(0,m.pm)(),f=n.showSuccess,y=n.showError,v=(0,r.useState)(!1),g=(0,i.Z)(v,2),h=g[0],E=g[1],L=(0,r.useState)({}),P=(0,i.Z)(L,2),S=P[0],R=P[1],A=(0,o.UO)().id,_=parseInt(A||""),q=isNaN(_)||_<=0,Z=(0,r.useRef)(),W=b(_,{skip:q}),D=W.data,J=W.isLoading,V=W.refetch,F=I(O[t],{skip:!q}),G=F.data,M=F.isLoading,Q=(0,o.s0)(),U=(0,p.JB)(),Y=U.data,z=U.isLoading,B=(0,p.Wv)(),H=B.data,$=B.isLoading,K=N(),X=(0,i.Z)(K,2),ee=X[0],te=X[1].isLoading,ne=T(),re=(0,i.Z)(ne,2),oe=re[0],ae=re[1].isLoading;(0,r.useEffect)((function(){R(D||Object.assign(Object.assign({},p.Y$),{date:C(new Date,!0),docid:O[t],number:null===G||void 0===G?void 0:G.next_doc_id,loctyp:"projects"===t?"PR":"inventory"===t?"WH":""}))}),[D,G]);return r.createElement(r.Fragment,null,r.createElement(m.Rm,{baseRoute:"/".concat(t,"/").concat(x),description:w,id:_,data:S,moreSubmitItems:r.createElement(r.Fragment,null),isUpdating:ae||te||h,isLoading:J,onSubmit:function(e){return j(void 0,void 0,void 0,(0,a.Z)().mark((function n(){var r,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("submit",e),n.prev=1,!q){n.next=8;break}return n.next=5,oe(Object.assign(Object.assign({},e),p.Y$)).unwrap();case 5:o=n.sent,n.next=11;break;case 8:return n.next=10,ee(Object.assign(Object.assign({},e),p.Y$)).unwrap();case 10:o=n.sent;case 11:return console.log("submit resp",o),n.next=14,null===(r=Z.current)||void 0===r?void 0:r.saveItem(Object.assign(Object.assign({purchase_order_id:o.data.key},p.Y$),{items:[]}));case 14:V(),f("Success",o.detail),E(!0),setTimeout((function(){Q("/".concat(t,"/").concat(x))}),3e3),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(1),y("An error occurred","We couldn't save your post, try again!");case 23:case"end":return n.stop()}}),n,null,[[1,20]])})))},renderForm:function(e,n,o){return r.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},r.createElement("div",{className:"col-12 md:col-6 grid grid-nogutter p-fluid",style:{alignContent:"flex-start"}},r.createElement(m.Wi,{label:"Doc ID",name:"docid",className:(0,l.AK)("col-12 md:col-6"),control:e,errors:o,formItem:{component:c.o,componentProps:{disabled:!0}}}),"purchase"===t&&r.createElement(m.Wi,{label:"Type",name:"loctyp",className:"col-12 md:col-6",centerText:!0,control:e,errors:o,formItem:{component:s.L,componentProps:{optionLabel:"name",optionValue:"id",options:[{name:"Project",id:"PR"},{name:"Warehouse",id:"WH"}]}}})),r.createElement(m.Wi,{label:"GRN Number",name:"number",isLoading:M,className:"col-12 md:col-6",control:e,errors:o,formItem:{component:u.R,componentProps:{useGrouping:!1,disabled:!0}}}),r.createElement(m.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:o,isLoading:z,leftSpan:3,rightSpan:9,formItem:{component:s.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:Y}}}),r.createElement(m.Wi,{label:"GRN Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:o,convertValue:C,formItem:{component:d.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(m.Wi,{label:"Vendor",name:"vend_key",className:"col-12 md:col-6",control:e,errors:o,isLoading:$,leftSpan:3,rightSpan:9,formItem:{component:s.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:H}}}),r.createElement(m.Wi,{label:"Vendor RefNo",name:"vendor_refno",className:"col-12 md:col-6",control:e,errors:o,formItem:{component:c.o,componentProps:{maxLength:25}}}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(k,{data:(null===D||void 0===D?void 0:D.purchs_odr_items)||[],isLoading:J,moduleName:t,ref:Z})))}}))},Z=function(e){var t=e.moduleName,n=E({}),o=n.data,a=n.isLoading,c=h(),u=(0,i.Z)(c,2),s=u[0],l=u[1].isLoading;return r.createElement(m.PS,{baseRoute:"/".concat(t,"/").concat(x),description:w,isLoading:a||l,newTable:!0,showHeader:!0,data:null===o||void 0===o?void 0:o.results,deleteAction:function(e){return s(e).unwrap()}},r.createElement(m._P,{field:"number",header:"GRN Number",filteringType:"number"}),r.createElement(m._P,{field:"date",header:"GRN Date",filteringType:"text"}),r.createElement(m._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(m._P,{field:"vendor.name",header:"Vendor",filteringType:"text"}),r.createElement(m._P,{field:"vendtyp_key",header:"Vendor RefNo",filteringType:"text"}),r.createElement(m._P,{field:"docstatus",header:"GRN Status",filteringType:"text"}))},W=function(e){return r.createElement(o.AW,{path:x},r.createElement(o.AW,{path:"new",element:r.createElement(q,{moduleName:e})}),r.createElement(o.AW,{path:":id/edit",element:r.createElement(q,{moduleName:e})}),r.createElement(o.AW,{index:!0,element:r.createElement(Z,{moduleName:e})}))}}}]);
//# sourceMappingURL=592.52099b39.chunk.js.map