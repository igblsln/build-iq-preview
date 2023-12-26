"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[805],{158:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var r=n(969),a=n(734),i=n(2035),o=n(402),u="purchase",c=function(e,t){return(0,i.E7)("/".concat(u,"/").concat(e)+(t?"/comming-soon":""))},l=[{items:[{label:"PO",icon:"pi ml-3",template:c("purchaseorder")},{label:"Purchase Template",icon:"pi ml-3",template:c("purchasetemplate")},{label:"Material Received",icon:"pi ml-3",template:c(o.h)}]}],s=n(2723),d=n(6234),m=n(3953),p=n(7765),v=n(4756),f=n(8391),y=n(8224),h=n(8079),g=n(1495),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},b="/transaction/purchase/template/",P=g.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseTemplate:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,g.DS)(b,"?page=".concat(t||1,"&page_size=").concat(n||g.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:g.pJ.PURCHASE_TEMPLATE,key:t}}))),[{type:g.pJ.PURCHASE_TEMPLATE,id:"LIST"}]):[{type:g.pJ.PURCHASE_TEMPLATE,id:"LIST"}]}}),addPurchaseTemplate:e.mutation({query:function(e){return{url:b,method:"POST",body:e}},invalidatesTags:[{type:g.pJ.PURCHASE_TEMPLATE,id:"LIST"}]}),getPurchaseTemplate:e.query({query:function(e){return"".concat(b).concat(e)},providesTags:function(e,t,n){return[{type:g.pJ.PURCHASE_TEMPLATE,id:n}]}}),updatePurchaseTemplate:e.mutation({query:function(e){var t=e.key,n=E(e,["key"]);return{url:"".concat(b).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:g.pJ.PURCHASE_TEMPLATE,id:null===e||void 0===e?void 0:e.key}]}}),deletePurchaseTemplate:e.mutation({query:function(e){return{url:"".concat(b).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:g.pJ.PURCHASE_TEMPLATE,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),T=P.useAddPurchaseTemplateMutation,_=P.useDeletePurchaseTemplateMutation,S=P.useGetPurchaseTemplateQuery,O=P.useListPurchaseTemplateQuery,k=P.useUpdatePurchaseTemplateMutation,I=(P.useGetErrorProneQuery,P.endpoints.getPurchaseTemplate,n(6770)),A=n(4576),w="/transaction/purchase/template/items/",x=g.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseTemplateItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,g.DS)(w,"?page=".concat(t||1,"&page_size=").concat(n||g.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:g.pJ.PURCHASE_TEMPLATE_ITEM,item_key:t}}))),[{type:g.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"}]):[{type:g.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"}]}}),addPurchaseTemplateItems:e.mutation({query:function(e){return{url:w,method:"POST",body:e}},invalidatesTags:[{type:g.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"},{type:g.pJ.TRANSACTION,id:"LIST"}]}),deletePurchaseTemplateItems:e.mutation({query:function(e){var t=e.key,n=e.body;return{url:"".concat(w).concat(t),method:"DELETE",body:n}}}),getPurchaseTemplateItem:e.query({query:function(e){return"".concat(w).concat(e)},providesTags:function(e,t,n){return[{type:g.pJ.PURCHASE_TEMPLATE_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),L=x.useAddPurchaseTemplateItemsMutation,C=(x.useGetPurchaseTemplateItemQuery,x.useListPurchaseTemplateItemQuery,x.useDeletePurchaseTemplateItemsMutation),R=(x.useGetErrorProneQuery,x.endpoints.getPurchaseTemplateItem,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))}),j=(0,r.forwardRef)((function(e,t){var n=e.data,a=e.isLoading,o=e.selectedItemType,u=(0,i.pm)(),c=u.showSuccess,l=(u.showError,(0,r.useState)([])),m=(0,d.Z)(l,2),p=m[0],v=m[1],f=L(),h=(0,d.Z)(f,2),E=h[0],b=h[1].isLoading,P=C(),T=(0,d.Z)(P,1)[0],_=function(e){return T(e).unwrap()},S=(0,r.useRef)(p),O=(0,r.useRef)([]),k=(0,r.useRef)([]),w=(0,g.qu)(o,{skip:!o}).data,x=(0,g.U$)(o,{skip:!o}).data;(0,r.useImperativeHandle)(t,(function(){return{saveItem:function(e){return R(this,void 0,void 0,(0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(Object.assign({},e)).unwrap();case 2:case"end":return t.stop()}}),t)})))},getItems:function(){return p}}})),(0,r.useEffect)((function(){v(n),S.current=n}),[n]),(0,r.useEffect)((function(){O.current=w||[],k.current=x||[]}),[w,x]);return w&&x?r.createElement(i.PS,{baseRoute:"/purchase/".concat("purchasetemplate"),description:"Purchase Template",isLoading:a||b,data:p,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,actionBodyTemplate:function(e){return r.createElement(I.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,A.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return t=e,R(void 0,void 0,void 0,(0,s.Z)().mark((function e(){var n,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.current.filter((function(e){return e!==t})),S.current=n,v(n),r={key:t.purtmpl_key,body:{items:[Object.assign({},t)]}},e.next=6,_(r);case 6:a=e.sent,c("Success",a);case 8:case"end":return e.stop()}}),e)})));var t},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:!function(e){if(0===e.length)return!0;var t=e[e.length-1];return(null===t||void 0===t?void 0:t.item_key)&&(null===t||void 0===t?void 0:t.itemuom_key)}(p),OnRowsChanged:function(e){var t=e.map((function(e){var t,n=null,r=null===(t=O.current)||void 0===t?void 0:t.filter((function(t){return t.key===e.item_key}));return r.length&&(n=r[0]),Object.assign(Object.assign({},e),{selectedItem:n})}));v(t),S.current=t}}},r.createElement(i._P,{field:"item_key",width:"50%",header:"Item*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=O.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items)||void 0===r?void 0:r.descr}},editorType:function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(y.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:O.current,filter:!0,filterBy:"descr",onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"itemuom_key",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=k.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(y.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:k.current.filter((function(e){var n,r;return null===(r=null===(n=null===t||void 0===t?void 0:t.selectedItem)||void 0===n?void 0:n.itemuom_list)||void 0===r?void 0:r.includes(e.key)})),onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}})):null})),N=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))},V=function(e){var t=(0,i.pm)(),n=t.showSuccess,o=t.showError,u=(0,r.useState)(!1),c=(0,d.Z)(u,2),l=c[0],h=c[1],E=(0,a.s0)(),b=(0,a.UO)().id,P=parseInt(b||""),_=isNaN(P)||P<=0,O=(0,r.useRef)(),I=(0,g.ft)(),A=S(P,{skip:_}),w=A.data,x=A.isLoading,L=A.refetch,C=(0,r.useState)([]),R=(0,d.Z)(C,2),V=(R[0],R[1]),Z=(0,r.useState)(null),M=(0,d.Z)(Z,2),U=M[0],q=M[1],D=(0,g.Gt)("PT",{skip:!_,refetchOnMountOrArgChange:_}),H=D.data,F=(D.error,T()),J=(0,d.Z)(F,2),W=J[0],G=J[1].isLoading,z=k(),B=(0,d.Z)(z,2),Q=B[0],K=B[1].isLoading,Y=(0,g.DU)(),$=Y.data,X=Y.isFetching,ee=(0,g.qu)(U,{skip:!U}),te=ee.data;ee.isFetching;(0,r.useEffect)((function(){if(te)if(_){var e=te.map((function(e){return{item_key:e.key,itemuom_key:e.itemuom_key}}));V(e)}else{var t=null===w||void 0===w?void 0:w.purchs_template_items.concat(te.map((function(e){return{item_key:e.key,itemuom_key:e.itemuom_key}})));V(t)}}),[te]),(0,r.useEffect)((function(){!_&&w&&(V(w.purchs_template_items),q(w.itemtyp_key))}),[w]);return r.createElement(r.Fragment,null,r.createElement(i.Rm,{baseRoute:"/purchase/purchasetemplate",description:"Purchase Template",id:P,data:w,isUpdating:G||K||l,isLoading:x,onSubmit:function(e){return N(void 0,void 0,void 0,(0,s.Z)().mark((function t(){var r,a,i,u,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,u=(null===(r=O.current)||void 0===r?void 0:r.getItems())||[],!_){t.next=9;break}return c=Object.assign(Object.assign({},e),{docid:"PT",number:null===H||void 0===H?void 0:H.next_doc_id,purchs_template_items:u}),t.next=6,W(Object.assign(Object.assign(Object.assign({},c),I),{purchs_template_items:u})).unwrap();case 6:i=t.sent,t.next=12;break;case 9:return t.next=11,Q(Object.assign(Object.assign(Object.assign({},e),I),{purchs_template_items:u})).unwrap();case 11:i=t.sent;case 12:return t.next=14,null===(a=O.current)||void 0===a?void 0:a.saveItem(Object.assign(Object.assign({p_template_id:i.data.key},I),{items:u}));case 14:L(),n("Success",i.detail),h(!0),setTimeout((function(){E("/purchase/purchasetemplate")}),g.P7),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),o("An error occurred","We couldn't save your post, try again!");case 23:case"end":return t.stop()}}),t,null,[[0,20]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"pl-6"},r.createElement("div",{className:"flex"},r.createElement("div",{className:"field col-6"},r.createElement("label",{htmlFor:"number",className:(0,v.AK)("col-4",{"p-error":n.number})},"Template No"),r.createElement(m.Qr,{defaultValue:null===H||void 0===H?void 0:H.next_doc_id,name:"number",control:e,rules:{},render:function(e){var t=e.field;e.fieldState;return r.createElement(p.o,Object.assign({disabled:!0,id:t.name},t,{value:(null===w||void 0===w?void 0:w.number)||(null===H||void 0===H?void 0:H.next_doc_id)}))}}))),r.createElement("div",{className:"flex"},r.createElement(i.Wi,{label:"Template Name",name:"name",className:"field col-6",control:e,errors:n,required:!0,leftSpan:4,rightSpan:5,formItem:{component:p.o,componentProps:{maxLength:50}}}),r.createElement("div",{className:"field col-6",style:{padding:10}},r.createElement("label",{style:{margin:"auto"},htmlFor:"inactive",className:(0,v.AK)("col-4",{"p-error":n.inactive})},"Inactive"),r.createElement(m.Qr,{defaultValue:"N",name:"inactive",control:e,render:function(e){var t=e.field;e.fieldState;return r.createElement(f.X,Object.assign({checked:t.value,trueValue:"Y",falseValue:"N",id:t.name},t))}}))),r.createElement("div",{className:"field col-6"},r.createElement(i.Wi,{label:"Item Type",name:"itemtyp_key",control:e,errors:n,isLoading:X,required:!0,leftSpan:4,rightSpan:5,useExplicit:!0,onChange:function(e){q(e.value)},formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:$}}})),r.createElement("div",{className:"col-8",style:{minHeight:200,maxHeight:500}},r.createElement(j,{selectedItemType:U,data:(null===w||void 0===w?void 0:w.purchs_template_items)||[],isLoading:x,ref:O})))}}))},Z=function(e){var t=(0,r.useState)(1),n=(0,d.Z)(t,2),a=n[0],o=n[1],u=(0,r.useState)(g.IV),c=(0,d.Z)(u,2),l=c[0],s=c[1],m=O({page:a,size:l}),p=m.data,v=m.isFetching,f=_(),y=(0,d.Z)(f,2),h=y[0],E=y[1].isLoading;return r.createElement(i.PS,{pagination:{pageSize:l,loading:v,currentPage:a,total:null===p||void 0===p?void 0:p.count,onChange:function(e,t){o(e),s(t)}},baseRoute:"/purchase/purchasetemplate",description:"Purchase Template",isLoading:v||E,newTable:!0,showHeader:!0,data:null===p||void 0===p?void 0:p.results,deleteAction:function(e){return h(e).unwrap()}},r.createElement(i._P,{field:"number",header:"Template",filteringType:"number"}),r.createElement(i._P,{field:"name",header:"Template Name",filteringType:"text"}),r.createElement(i._P,{field:"itemtyp_key",header:"Item Type",filteringType:"text"}),r.createElement(i._P,{field:"inactive",header:"Active Status",filteringType:"text",displayValueGetter:function(e){return"Y"===e.inactive?"Inactive":"Active"}}))},M=r.createElement(a.AW,{path:"purchasetemplate"},r.createElement(a.AW,{path:"new",element:r.createElement(V,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(V,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(Z,null)})),U=n(3127),q="/transaction/purchase/order/",D=g.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseOrder:e.query({query:function(e){var t=e.page,n=e.size,r=e.project,a=e.status;return{url:(0,g.DS)(q,"?page=".concat(t||1,"&page_size=").concat(n||g.IV).concat(r?"&project=".concat(r):"").concat(a?"&status=".concat(a):""))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:g.pJ.PURCHASE_ORDER,key:t}}))),[{type:g.pJ.PURCHASE_ORDER,id:"LIST"}]):[{type:g.pJ.PURCHASE_ORDER,id:"LIST"}]}}),addPurchaseOrder:e.mutation({query:function(e){return{url:q,method:"POST",body:e}},invalidatesTags:[{type:g.pJ.PURCHASE_ORDER,id:"LIST"}]}),getPurchaseOrder:e.query({query:function(e){return"".concat(q).concat(e)},providesTags:function(e,t,n){return[{type:g.pJ.PURCHASE_ORDER,id:n}]}}),updatePurchaseOrder:e.mutation({query:function(e){var t=e;return{url:"".concat(q),method:"POST",body:t}},invalidatesTags:function(e){return[{type:g.pJ.PURCHASE_ORDER,id:null===e||void 0===e?void 0:e.key}]}}),deletePurchaseOrder:e.mutation({query:function(e){return{url:"".concat(q).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:g.pJ.PURCHASE_ORDER,id:null===e||void 0===e?void 0:e.id}]}}),addVendorInvoice:e.mutation({query:function(e){return{url:"/transaction/vendor/invoice/",method:"POST",body:e}},invalidatesTags:[{type:g.pJ.VENDOR_INVOICE,id:"LIST"}]}),addContractInvoice:e.mutation({query:function(e){return{url:"/contract/invoice/",method:"POST",body:e}},invalidatesTags:[{type:g.pJ.CONTRACT_INVOICE,id:"LIST"}]}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),H=D.useAddPurchaseOrderMutation,F=D.useDeletePurchaseOrderMutation,J=D.useGetPurchaseOrderQuery,W=D.useListPurchaseOrderQuery,G=D.useUpdatePurchaseOrderMutation,z=D.useAddVendorInvoiceMutation,B=D.useAddContractInvoiceMutation,Q=(D.useGetErrorProneQuery,"/transaction/purchase/order/items/"),K=g.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseOrderItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,g.DS)(Q,"?page=".concat(t||1,"&page_size=").concat(n||g.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:g.pJ.PURCHASE_ORDER_ITEM,item_key:t}}))),[{type:g.pJ.PURCHASE_ORDER_ITEM,id:"LIST"}]):[{type:g.pJ.PURCHASE_ORDER_ITEM,id:"LIST"}]}}),addPurchaseOrderItems:e.mutation({query:function(e){return{url:Q,method:"POST",body:e}},invalidatesTags:[{type:g.pJ.PURCHASE_ORDER_ITEM,id:"LIST"},{type:g.pJ.TRANSACTION,id:"LIST"}]}),getPurchaseOrderItem:e.query({query:function(e){return"".concat(Q).concat(e)},providesTags:function(e,t,n){return[{type:g.pJ.PURCHASE_ORDER_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),Y=K.useAddPurchaseOrderItemsMutation,$=(K.useGetPurchaseOrderItemQuery,K.useListPurchaseOrderItemQuery,K.useGetErrorProneQuery,K.endpoints.getPurchaseOrderItem,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))}),X=(0,r.forwardRef)((function(e,t){var n=e.data,a=e.isLoading,o=e.disableTable,u=void 0!==o&&o,c=e.selectedItemType,l=e.onChange,m=void 0===l?function(){}:l,p=(0,r.useState)([]),v=(0,d.Z)(p,2),f=v[0],h=v[1],E=Y(),b=(0,d.Z)(E,2),P=b[0],T=b[1].isLoading,_=(0,r.useRef)(f),S=(0,r.useRef)([]),O=(0,r.useRef)([]),k=(0,g.qu)(c,{skip:!c}).data,w=(0,g.U$)(c,{skip:!c}).data;(0,r.useImperativeHandle)(t,(function(){return{saveItem:function(e){return $(this,void 0,void 0,(0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(Object.assign(Object.assign({},e),{items:f})).unwrap();case 2:case"end":return t.stop()}}),t)})))},getItems:function(){return f}}})),(0,r.useEffect)((function(){h(n),_.current=n}),[n]),(0,r.useEffect)((function(){S.current=k||[],O.current=w||[]}),[k,w]);var x=function(e){return r.createElement(i.JK,{value:e||0})};return r.createElement(i.PS,{baseRoute:"/purchase/".concat("purchaseorder"),description:"Purchase Order",isLoading:a||T,data:f,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:u,actionBodyTemplate:function(e){return r.createElement(I.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,A.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return function(e){var t=_.current.filter((function(t){return t!==e}));_.current=t,h(t)}(e)},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:u||!(0,g.pH)(f),newRowDefaults:{qty:0,netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){var t=e.map((function(e){var t,n=0,r=null,a=null===(t=S.current)||void 0===t?void 0:t.filter((function(t){return t.key===e.item_key}));a.length&&(n=parseInt(a[0].gst),r=a[0]);var i=e.totalamt,o=parseFloat((i/(1+.01*n)).toFixed(2)),u=parseFloat((o*(.01*n)).toFixed(2));return Object.assign(Object.assign({},e),{netamt:o,taxamt:u,selectedItem:r})}));h(t),_.current=t,m(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(i._P,{field:"item_key",width:"25%",header:"Item*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=S.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items)||void 0===r?void 0:r.descr}},editorType:!u&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(y.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:S.current,onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"itemuom_key",width:"20%",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=O.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:!u&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(y.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:O.current.filter((function(e){var n,r;return null===(r=null===(n=null===t||void 0===t?void 0:t.selectedItem)||void 0===n?void 0:n.itemuom_list)||void 0===r?void 0:r.includes(e.key)})),onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"qty",header:"Quantity",type:"number",editorType:!u&&"number"}),r.createElement(i._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return x(null===t||void 0===t?void 0:t.netamt)}}),r.createElement(i._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return x(null===t||void 0===t?void 0:t.taxamt)}}),r.createElement(i._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,editorType:!u&&"currency",summaryFormatter:function(e){var t=e.row;return x(null===t||void 0===t?void 0:t.totalamt)}}))})),ee=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))},te=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ne=function(e){var t=(0,i.pm)(),n=t.showSuccess,o=t.showError,u=(0,r.useState)(!1),c=(0,d.Z)(u,2),l=c[0],m=c[1],v=(0,r.useState)({}),f=(0,d.Z)(v,2),h=f[0],E=f[1],b=(0,r.useState)("S"),P=(0,d.Z)(b,2),T=P[0],_=P[1],S=(0,r.useState)("SAVE"),O=(0,d.Z)(S,2),k=O[0],w=O[1],x=(0,a.s0)(),L=(0,a.UO)().id,C=parseInt(L||""),R=isNaN(C)||C<=0,j=(0,r.useRef)(),N=(0,r.useRef)(),V=(0,g.ft)(),Z=J(C,{skip:R,refetchOnMountOrArgChange:!0}),M=Z.data,q=Z.isLoading,D=(0,r.useState)(null),F=(0,d.Z)(D,2),W=F[0],Q=F[1],K=(0,r.useState)([]),Y=(0,d.Z)(K,2),$=Y[0],ne=Y[1],re=(0,r.useState)(null),ae=(0,d.Z)(re,2),ie=ae[0],oe=ae[1],ue=(0,r.useState)(null),ce=(0,d.Z)(ue,2),le=ce[0],se=ce[1],de=(0,g.eQ)({id:W},{skip:!W}),me=de.data,pe=(de.isFetching,z()),ve=(0,d.Z)(pe,2),fe=ve[0],ye=ve[1].isLoading,he=B(),ge=(0,d.Z)(he,2),Ee=ge[0],be=ge[1].isLoading,Pe=(0,g.Gt)("PO",{skip:!R,refetchOnMountOrArgChange:R}).data,Te=(0,g.Gt)("VIN",{skip:R,refetchOnMountOrArgChange:!R}).data,_e=(0,g.Gt)("VCI",{skip:R,refetchOnMountOrArgChange:!R}).data,Se=(0,g.eh)(ie,{skip:!ie}).data,Oe=(0,g.Wv)(),ke=Oe.data,Ie=Oe.isLoading,Ae=(0,g.lE)({}),we=Ae.data,xe=Ae.isLoading,Le=(0,g.u2)(le,{skip:!le}),Ce=Le.data,Re=Le.isFetching,je=H(),Ne=(0,d.Z)(je,2),Ve=Ne[0],Ze=Ne[1].isLoading,Me=G(),Ue=(0,d.Z)(Me,2),qe=Ue[0],De=Ue[1].isLoading;(0,r.useEffect)((function(){if(me)if(R)ne(me);else{var e=null===M||void 0===M?void 0:M.purchs_odr_items.concat(me);ne(e)}}),[me]),(0,r.useEffect)((function(){E(M||Object.assign(Object.assign({},V),{date:(0,g.Hh)(new Date,!0),docid:"PO",number:null===Pe||void 0===Pe?void 0:Pe.next_doc_id,loctyp:"PR"})),M&&(ne((null===M||void 0===M?void 0:M.purchs_odr_items)||[]),oe(M.itemtyp_key),se(M.vend_key))}),[M,Pe]),(0,r.useEffect)((function(){var e;Ce?(console.log(Ce),oe(null===(e=Ce[0])||void 0===e?void 0:e.key)):oe(null)}),[Ce]);var He=function(){return["U","R","C"].includes(null===M||void 0===M?void 0:M.docstatus)},Fe=function(e,t){return ee(void 0,void 0,void 0,(0,s.Z)().mark((function n(){var r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_(e);case 2:return n.next=4,w(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(i.Rm,{disableSaveBtn:He(),baseRoute:"/purchase/purchaseorder",description:"PO",id:C,data:h,isUpdating:Ze||De||ye||be,ref:N,isItemsTableChanged:l,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(I.z,{label:"Generate Invoice",style:{margin:"0 20px"},disabled:"S"!==(null===M||void 0===M?void 0:M.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=N.current)||void 0===t?void 0:t.getIsDirty())||l?(0,A.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return Fe("U","SUBMIT_WITH_SAVE")},reject:function(){return Fe("U","SUBMIT_WITHOUT_SAVE")}}):Fe("U","SUBMIT_WITH_SAVE")}}),r.createElement(I.z,{label:"Cancel",disabled:R||["R","C"].includes(null===M||void 0===M?void 0:M.docstatus),className:"p-button-plain",onClick:function(e){return w("CANCEL"),_("C"),!0}})),isLoading:q,onSubmit:function(e){return ee(void 0,void 0,void 0,(0,s.Z)().mark((function t(){var r,a,i,u,c,l,d,m,p,v,f,y,h,E,b,P,_,S;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,E=null===(r=j.current)||void 0===r?void 0:r.getItems(),b=Object.assign(Object.assign({},e),{docid:"PO",number:R?null===Pe||void 0===Pe?void 0:Pe.next_doc_id:null===M||void 0===M?void 0:M.number,date:(0,g.p6)(e.date,"yyyy-MM-dd"),loctyp:"PR",itemtyp_key:ie,docstatus:T,action:k,purchs_odr_items:E}),!R){t.next=9;break}return t.next=6,Ve(Object.assign(Object.assign({},b),V)).unwrap();case 6:h=t.sent,t.next=12;break;case 9:return t.next=11,qe(Object.assign(Object.assign(Object.assign({},b),V),{key:null===M||void 0===M?void 0:M.key})).unwrap();case 11:h=t.sent;case 12:if(n("Success",h.detail),"U"!==(null===(a=null===h||void 0===h?void 0:h.data)||void 0===a?void 0:a.docstatus)){t.next=36;break}if(t.prev=14,P=null===E||void 0===E?void 0:E.map((function(e){e.key;return te(e,["key"])})),_=new Date,S={invoicedate:"".concat(_.getFullYear(),"-").concat(_.getMonth()+1,"-").concat(_.getDate()),invoiceno:e.invoice_no||"INV".concat(null===(i=null===h||void 0===h?void 0:h.data)||void 0===i?void 0:i.number),apterm_key:null===(c=null===(u=null===h||void 0===h?void 0:h.data)||void 0===u?void 0:u.vendor)||void 0===c?void 0:c.apterm_key,invamt:(null===P||void 0===P?void 0:P.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0))||0,action:"SAVE",invoice_items:P,itemtype_key:null===(d=null===(l=null===h||void 0===h?void 0:h.data)||void 0===l?void 0:l.itemtype)||void 0===d?void 0:d.key},"Y"!==(null===(v=null===(p=null===(m=null===h||void 0===h?void 0:h.data)||void 0===m?void 0:m.vendor)||void 0===p?void 0:p.type)||void 0===v?void 0:v.contractor)){t.next=24;break}return t.next=21,Ee(Object.assign(Object.assign(Object.assign({},h.data),S),{vouchno:null===_e||void 0===_e?void 0:_e.next_doc_id})).unwrap();case 21:h=t.sent,t.next=27;break;case 24:return t.next=26,fe(Object.assign(Object.assign(Object.assign({},h.data),S),{vouchno:null===Te||void 0===Te?void 0:Te.next_doc_id})).unwrap();case 26:h=t.sent;case 27:n("Success",h.detail),setTimeout((function(){x("/purchase/purchaseorder")}),g.P7),t.next=34;break;case 31:t.prev=31,t.t0=t.catch(14),o("Couldn't Create Invoice",(null===(f=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===f?void 0:f.detail)||"We couldn't save your post, try again!");case 34:t.next=38;break;case 36:n("Success",h.detail),setTimeout((function(){x("/purchase/purchaseorder")}),g.P7);case 38:t.next=43;break;case 40:t.prev=40,t.t1=t.catch(0),o("An error occurred",(null===(y=null===t.t1||void 0===t.t1?void 0:t.t1.data)||void 0===y?void 0:y.detail)||"We couldn't save your post, try again!");case 43:case"end":return t.stop()}}),t,null,[[0,40],[14,31]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},r.createElement(i.Wi,{label:"PO Number",name:"number",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:p.o,componentProps:{useGrouping:!1,disabled:!0,value:(null===M||void 0===M?void 0:M.number)||(null===Pe||void 0===Pe?void 0:Pe.next_doc_id)}}}),r.createElement(i.Wi,{label:"PO Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:n,leftSpan:4,rightSpan:6,convertValue:g.Hh,formItem:{component:U.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(i.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:xe,leftSpan:4,rightSpan:6,formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:we}}}),r.createElement(i.Wi,{label:"Vendor",name:"vend_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:Ie,required:"Select a Vendor",leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){se(e.value)},formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:ke}}}),r.createElement(i.Wi,{label:"Item Type",name:"itemtyp_key",control:e,errors:n,isLoading:Re,className:"col-12 md:col-6",leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){oe(e.value)},formItem:{component:y.L,componentProps:{showClear:!0,optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:Ce,value:ie}}}),r.createElement(i.Wi,{label:"Vendor Invoice No",name:"invoice_no",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:p.o,componentProps:{maxLength:50}}}),r.createElement(i.Wi,{label:"Load From PO Template",name:"purtmpl_key",className:"col-12 md:col-6",control:e,errors:n,useExplicit:!0,onChange:function(e){He()||Q(e.value)},leftSpan:4,rightSpan:6,formItem:{component:y.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:Se}}}),r.createElement("div",{className:"col-12 md:col-6"}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(X,{selectedItemType:ie,data:$,isLoading:q,ref:j,disableTable:He(),onChange:function(e){return!l&&m(e)}})))}}))},re=n(8356),ae=function(e){var t=(0,r.useState)(1),n=(0,d.Z)(t,2),a=n[0],o=n[1],u=(0,r.useState)(g.IV),c=(0,d.Z)(u,2),l=c[0],s=c[1],m=(0,g.JB)().data,p=(0,r.useState)(null),v=(0,d.Z)(p,2),f=v[0],E=v[1],b=(0,r.useState)(null),P=(0,d.Z)(b,2),T=P[0],_=P[1],S=(0,r.useState)([]),O=(0,d.Z)(S,2),k=O[0],I=O[1],A=W({page:a,size:l,project:f,status:T}),w=A.data,x=A.isFetching,L=F(),C=(0,d.Z)(L,2),R=C[0],j=C[1].isLoading;return(0,r.useEffect)((function(){m&&I([{key:null,name:"All"}].concat((0,h.Z)(m)))}),[m]),r.createElement(r.Fragment,null,r.createElement(re.i,null),r.createElement("div",{style:{display:"flex"}},r.createElement("div",{className:"field col-6"},r.createElement("label",{className:"col-3"},"Project Name"),r.createElement(y.L,{style:{width:"30%"},optionLabel:"name",optionValue:"key",value:f,onChange:function(e){E(e.value)},options:k,placeholder:"All"})),r.createElement("div",{className:"field col-6"},r.createElement("div",{className:"field"},r.createElement("label",{className:"col-3"},"Status of PO"),r.createElement(y.L,{style:{width:"30%"},value:T,placeholder:"All",onChange:function(e){_(e.value)},optionLabel:"descr",optionValue:"key",options:[{key:null,descr:"All"},{key:"S",descr:"Saved"},{key:"U",descr:"Submitted"},{key:"C",descr:"Cancelled"}]})))),r.createElement(i.PS,{pagination:{pageSize:l,loading:x,currentPage:a,total:null===w||void 0===w?void 0:w.count,onChange:function(e,t){o(e),s(t)}},baseRoute:"/purchase/purchaseorder",description:"PO",isLoading:x||j,data:null===w||void 0===w?void 0:w.results,newTable:!0,showHeader:!0,deleteAction:function(e){return R(e).unwrap()}},r.createElement(i._P,{field:"number",header:"PO Number",filteringType:"number"}),r.createElement(i._P,{field:"date",header:"PO Date",filteringType:"date"}),r.createElement(i._P,{field:"vendor.name",header:"Vendor",filteringType:"text"}),r.createElement(i._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(i._P,{field:"status.descr",header:"PO Status",filteringType:"text"})))},ie=r.createElement(a.AW,{path:"purchaseorder"},r.createElement(a.AW,{path:"new",element:r.createElement(ne,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(ne,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(ae,null)})),oe=function(){var e,t,n,c=(null===(n=null===(t=null===(e=(0,g.aC)().user)||void 0===e?void 0:e.role[0])||void 0===t?void 0:t.access)||void 0===n?void 0:n.map((function(e){return e.name})))||[];return r.createElement(a.Z5,null,c.includes("Purchases")?r.createElement(a.AW,{path:"/",element:r.createElement(i.SV,{navItems:l})},r.createElement(a.AW,{index:!0,element:r.createElement(a.Fg,{to:"purchaseorder",replace:!0})}),M,ie,(0,o.Z)(u),r.createElement(a.AW,{path:":purchase/comming-soon",element:r.createElement(i.hg,null)}),r.createElement(a.AW,{path:"*",element:r.createElement(i.EN,{relative:!0})})):r.createElement(a.AW,{path:"/",element:r.createElement(i.SV,{navItems:l})},r.createElement(a.AW,{path:"*",element:r.createElement(i.Sd,{relative:!0})})))}},8356:function(e,t,n){n.d(t,{i:function(){return o}});var r=n(969),a=n(4756);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var o=r.forwardRef((function(e,t){var n="horizontal"===e.layout,u="vertical"===e.layout,c=a.gb.findDiffKeys(e,o.defaultProps),l=(0,a.AK)("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":n&&(!e.align||"left"===e.align),"p-divider-right":n&&"right"===e.align,"p-divider-center":n&&"center"===e.align||u&&(!e.align||"center"===e.align),"p-divider-top":u&&"top"===e.align,"p-divider-bottom":u&&"bottom"===e.align},e.className);return r.createElement("div",i({className:l,style:e.style,role:"separator"},c),r.createElement("div",{className:"p-divider-content"},e.children))}));o.displayName="Divider",o.defaultProps={__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null}}}]);
//# sourceMappingURL=805.d810aba3.chunk.js.map