"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[474],{8901:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var r=n(969),a=n(734),i=n(55),u=n(402),o="purchase",c=function(e,t){return(0,i.E7)("/".concat(o,"/").concat(e)+(t?"/comming-soon":""))},l=[{items:[{label:"Purchase Template",icon:"pi ml-3",template:c("purchasetemplate")},{label:"Purchase Order",icon:"pi ml-3",template:c("purchaseorder")},{label:"Material Received",icon:"pi ml-3",template:c(u.h)}]}],s=n(2723),d=n(6234),m=n(3953),p=n(7765),v=n(4756),f=n(8391),y=n(8079),h=n(6593),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},g="/transaction/purchase/template/",T=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseTemplate:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(g,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:h.pJ.PURCHASE_TEMPLATE,key:t}}))),[{type:h.pJ.PURCHASE_TEMPLATE,id:"LIST"}]):[{type:h.pJ.PURCHASE_TEMPLATE,id:"LIST"}]}}),addPurchaseTemplate:e.mutation({query:function(e){return{url:g,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.PURCHASE_TEMPLATE,id:"LIST"}]}),getPurchaseTemplate:e.query({query:function(e){return"".concat(g).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.PURCHASE_TEMPLATE,id:n}]}}),updatePurchaseTemplate:e.mutation({query:function(e){var t=e.key,n=E(e,["key"]);return{url:"".concat(g).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:h.pJ.PURCHASE_TEMPLATE,id:null===e||void 0===e?void 0:e.key}]}}),deletePurchaseTemplate:e.mutation({query:function(e){return{url:"".concat(g).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:h.pJ.PURCHASE_TEMPLATE,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),P=T.useAddPurchaseTemplateMutation,b=T.useDeletePurchaseTemplateMutation,_=T.useGetPurchaseTemplateQuery,O=T.useListPurchaseTemplateQuery,A=T.useUpdatePurchaseTemplateMutation,S=(T.useGetErrorProneQuery,T.endpoints.getPurchaseTemplate,n(6770)),w=n(8224),R=n(4576),L="/transaction/purchase/template/items/",x=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseTemplateItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(L,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:h.pJ.PURCHASE_TEMPLATE_ITEM,item_key:t}}))),[{type:h.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"}]):[{type:h.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"}]}}),addPurchaseTemplateItems:e.mutation({query:function(e){return{url:L,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"},{type:h.pJ.TRANSACTION,id:"LIST"}]}),deletePurchaseTemplateItems:e.mutation({query:function(e){var t=e.key,n=e.body;return{url:"".concat(L).concat(t),method:"DELETE",body:n}}}),getPurchaseTemplateItem:e.query({query:function(e){return"".concat(L).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.PURCHASE_TEMPLATE_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),k=x.useAddPurchaseTemplateItemsMutation,I=(x.useGetPurchaseTemplateItemQuery,x.useListPurchaseTemplateItemQuery,x.useDeletePurchaseTemplateItemsMutation),C=(x.useGetErrorProneQuery,x.endpoints.getPurchaseTemplateItem,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function o(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}c((r=r.apply(e,t||[])).next())}))}),N=(0,r.forwardRef)((function(e,t){var n=e.data,a=e.isLoading,u=(0,i.pm)(),o=u.showSuccess,c=(u.showError,(0,r.useState)([])),l=(0,d.Z)(c,2),m=l[0],p=l[1],v=k(),f=(0,d.Z)(v,2),y=f[0],E=f[1].isLoading,g=I(),T=(0,d.Z)(g,2),P=T[0],b=(T[1].isLoading,function(e){return P(e).unwrap()}),_=(0,r.useRef)(m),O=(0,r.useRef)([]),A=(0,r.useRef)([]),L=(0,h.Zp)({}),x=L.data,N=(L.isLoading,(0,h.DY)({})),j=N.data;N.isLoading;(0,r.useImperativeHandle)(t,(function(){return{saveItem:function(e){return C(this,void 0,void 0,(0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(Object.assign({},e)).unwrap();case 2:case"end":return t.stop()}}),t)})))},getItems:function(){return m}}})),(0,r.useEffect)((function(){p(n),_.current=n}),[n]),(0,r.useEffect)((function(){O.current=(null===x||void 0===x?void 0:x.results)||[],A.current=(null===j||void 0===j?void 0:j.results)||[]}),[x,j]);return x&&j?r.createElement(i.PS,{baseRoute:"/purchase/".concat("purchasetemplate"),description:"Purchase Template",isLoading:a||E,data:m,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,actionBodyTemplate:function(e){return r.createElement(S.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,R.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return t=e,C(void 0,void 0,void 0,(0,s.Z)().mark((function e(){var n,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=_.current.filter((function(e){return e!==t})),_.current=n,p(n),r={key:t.purtmpl_key,body:{items:[Object.assign({},t)]}},e.next=6,b(r);case 6:a=e.sent,o("Success",a);case 8:case"end":return e.stop()}}),e)})));var t},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:!function(e){if(0===e.length)return!0;var t=e[e.length-1];return(null===t||void 0===t?void 0:t.item_key)&&(null===t||void 0===t?void 0:t.itemuom_key)}(m),OnRowsChanged:function(e){p(e),_.current=e}}},r.createElement(i._P,{field:"item_key",header:"Item*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=O.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items)||void 0===r?void 0:r.descr}},editorType:function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(w.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:O.current,filter:!0,filterBy:"descr",onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"itemuom_key",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=A.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(w.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:A.current,filter:!0,filterBy:"descr",onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}})):null})),j=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getNextDocNo:e.query({query:function(e){return{url:(0,h.DS)("/transaction/doc/id/next?docid=".concat(e))}}}),getActivePurchaseTemplates:e.query({query:function(){return{url:"/transaction/purchase/template/all/active"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,y.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.PURCHASE_TEMPLATE,id:t}}))),[{type:h.pJ.PURCHASE_TEMPLATE,id:"LIST"}])}}),getActiveProjects:e.query({query:function(){return{url:"/project/project/all/active"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,y.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.PROJECT,id:t}}))),[{type:h.pJ.PROJECT,id:"LIST"}])}}),getModeOfPayments:e.query({query:function(){return{url:"/transaction/payment/mode/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,y.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.MODE_OF_PAYMENT,id:t}}))),[{type:h.pJ.MODE_OF_PAYMENT,id:"LIST"}])}}),getGRNNumbers:e.query({query:function(){return{url:"/transaction/goods/receipts/?only_grn_number=True"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,y.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.GRN_NUMBER,id:t}}))),[{type:h.pJ.GRN_NUMBER,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),q=(j.useGetErrorProneQuery,j.useGetNextDocNoQuery),M=j.useGetActiveProjectsQuery,U=j.useGetActivePurchaseTemplatesQuery,D=(j.useGetModeOfPaymentsQuery,j.useGetGRNNumbersQuery,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function o(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}c((r=r.apply(e,t||[])).next())}))}),Z=function(e){var t=(0,i.pm)(),n=t.showSuccess,u=t.showError,o=(0,r.useState)(!1),c=(0,d.Z)(o,2),l=c[0],y=c[1],E=(0,a.s0)(),g=(0,a.UO)().id,T=parseInt(g||""),b=isNaN(T)||T<=0,O=(0,r.useRef)(),S=_(T,{skip:b}),w=S.data,R=S.isLoading,L=S.refetch,x=q("PT",{skip:!b,refetchOnMountOrArgChange:b}),k=x.data,I=(x.error,P()),C=(0,d.Z)(I,2),j=C[0],M=C[1].isLoading,U=A(),Z=(0,d.Z)(U,2),H=Z[0],J=Z[1].isLoading;return r.createElement(r.Fragment,null,r.createElement(i.Rm,{baseRoute:"/purchase/purchasetemplate",description:"Purchase Template",id:T,data:w,isUpdating:M||J||l,isLoading:R,onSubmit:function(e){return D(void 0,void 0,void 0,(0,s.Z)().mark((function t(){var r,a,i,o,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o=(null===(r=O.current)||void 0===r?void 0:r.getItems())||[],!b){t.next=9;break}return c=Object.assign(Object.assign({},e),{docid:"PT",number:null===k||void 0===k?void 0:k.next_doc_id,purchs_template_items:o}),t.next=6,j(Object.assign(Object.assign(Object.assign({},c),h.Y$),{purchs_template_items:o})).unwrap();case 6:i=t.sent,t.next=12;break;case 9:return t.next=11,H(Object.assign(Object.assign(Object.assign({},e),h.Y$),{purchs_template_items:o})).unwrap();case 11:i=t.sent;case 12:return t.next=14,null===(a=O.current)||void 0===a?void 0:a.saveItem(Object.assign(Object.assign({p_template_id:i.data.key},h.Y$),{items:o}));case 14:L(),n("Success",i.detail),y(!0),setTimeout((function(){E("/purchase/purchasetemplate")}),h.P7),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),console.log(t.t0),u("An error occurred","We couldn't save your post, try again!");case 24:case"end":return t.stop()}}),t,null,[[0,20]])})))},renderForm:function(e,t,n){var a;return r.createElement("div",{className:"pl-6"},r.createElement("div",{className:"flex"},r.createElement("div",{className:"field col-6"},r.createElement("label",{htmlFor:"number",className:(0,v.AK)("col-4",{"p-error":n.number})},"Template No"),r.createElement(m.Qr,{defaultValue:null===k||void 0===k?void 0:k.next_doc_id,name:"number",control:e,rules:{},render:function(e){var t=e.field;e.fieldState;return r.createElement(p.o,Object.assign({disabled:!0,id:t.name},t,{value:(null===w||void 0===w?void 0:w.number)||(null===k||void 0===k?void 0:k.next_doc_id)}))}}))),r.createElement("div",{className:"flex"},r.createElement("div",{className:"field col-6"},r.createElement("label",{htmlFor:"name",className:(0,v.AK)("col-4",{"p-error":n.name})},"Template Name*"),r.createElement(m.Qr,{name:"name",control:e,rules:{required:"Template Description is required.",maxLength:{value:50,message:"max 50 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(p.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(a=null===n||void 0===n?void 0:n.name)||void 0===a?void 0:a.message)),r.createElement("div",{className:"field col-6",style:{padding:10}},r.createElement("label",{style:{margin:"auto"},htmlFor:"inactive",className:(0,v.AK)("col-4",{"p-error":n.inactive})},"Inactive"),r.createElement(m.Qr,{defaultValue:"N",name:"inactive",control:e,render:function(e){var t=e.field;e.fieldState;return r.createElement(f.X,Object.assign({checked:t.value,trueValue:"Y",falseValue:"N",id:t.name},t))}}))),r.createElement("div",{className:"col-6"},r.createElement(N,{data:(null===w||void 0===w?void 0:w.purchs_template_items)||[],isLoading:R,ref:O})))}}))},H=(n(6822),function(e){var t=O({}),n=t.data,a=t.isLoading,u=b(),o=(0,d.Z)(u,2),c=o[0],l=o[1].isLoading;return r.createElement(i.PS,{baseRoute:"/purchase/purchasetemplate",description:"Purchase Template",isLoading:a||l,newTable:!0,showHeader:!0,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()}},r.createElement(i._P,{field:"number",header:"Template",filteringType:"number"}),r.createElement(i._P,{field:"name",header:"Template Name",filteringType:"text"}),r.createElement(i._P,{field:"inactive",header:"Active Status",filteringType:"text",displayValueGetter:function(e){return"Y"===e.inactive?"Inactive":"Active"}}))}),J=r.createElement(a.AW,{path:"purchasetemplate"},r.createElement(a.AW,{path:"new",element:r.createElement(Z,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(Z,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(H,null)})),V=n(3127),F="/transaction/purchase/order/",Q=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseOrder:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(F,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:h.pJ.PURCHASE_ORDER,key:t}}))),[{type:h.pJ.PURCHASE_ORDER,id:"LIST"}]):[{type:h.pJ.PURCHASE_ORDER,id:"LIST"}]}}),addPurchaseOrder:e.mutation({query:function(e){return{url:F,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.PURCHASE_ORDER,id:"LIST"}]}),getPurchaseOrder:e.query({query:function(e){return"".concat(F).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.PURCHASE_ORDER,id:n}]}}),updatePurchaseOrder:e.mutation({query:function(e){var t=e;return{url:"".concat(F),method:"POST",body:t}},invalidatesTags:function(e){return[{type:h.pJ.PURCHASE_ORDER,id:null===e||void 0===e?void 0:e.key}]}}),deletePurchaseOrder:e.mutation({query:function(e){return{url:"".concat(F).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:h.pJ.PURCHASE_ORDER,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),G=Q.useAddPurchaseOrderMutation,W=Q.useDeletePurchaseOrderMutation,B=Q.useGetPurchaseOrderQuery,K=Q.useListPurchaseOrderQuery,z=Q.useUpdatePurchaseOrderMutation,Y=(Q.useGetErrorProneQuery,"/transaction/purchase/order/items/"),$=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseOrderItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(Y,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:h.pJ.PURCHASE_ORDER_ITEM,item_key:t}}))),[{type:h.pJ.PURCHASE_ORDER_ITEM,id:"LIST"}]):[{type:h.pJ.PURCHASE_ORDER_ITEM,id:"LIST"}]}}),addPurchaseOrderItems:e.mutation({query:function(e){return{url:Y,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.PURCHASE_ORDER_ITEM,id:"LIST"},{type:h.pJ.TRANSACTION,id:"LIST"}]}),getPurchaseOrderItem:e.query({query:function(e){return"".concat(Y).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.PURCHASE_ORDER_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),X=$.useAddPurchaseOrderItemsMutation,ee=($.useGetPurchaseOrderItemQuery,$.useListPurchaseOrderItemQuery,$.useGetErrorProneQuery,$.endpoints.getPurchaseOrderItem,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function o(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}c((r=r.apply(e,t||[])).next())}))}),te=(0,r.forwardRef)((function(e,t){var n=e.data,a=e.isLoading,u=e.disableTable,o=void 0!==u&&u,c=e.onChange,l=void 0===c?function(){}:c,m=(0,r.useState)([]),p=(0,d.Z)(m,2),v=p[0],f=p[1],y=X(),E=(0,d.Z)(y,2),g=E[0],T=E[1].isLoading,P=(0,r.useRef)(v),b=(0,r.useRef)([]),_=(0,r.useRef)([]),O=(0,h.Zp)({}),A=O.data,L=(O.isLoading,(0,h.DY)({})),x=L.data;L.isLoading;(0,r.useImperativeHandle)(t,(function(){return{saveItem:function(e){return ee(this,void 0,void 0,(0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(Object.assign(Object.assign({},e),{items:v})).unwrap();case 2:case"end":return t.stop()}}),t)})))},getItems:function(){return v}}})),(0,r.useEffect)((function(){f(n),P.current=n}),[n]),(0,r.useEffect)((function(){b.current=(null===A||void 0===A?void 0:A.results)||[],_.current=(null===x||void 0===x?void 0:x.results)||[]}),[A,x]);var k=function(e){return r.createElement(i.JK,{value:e||0})};return r.createElement(i.PS,{baseRoute:"/purchase/".concat("purchaseorder"),description:"Purchase Order",isLoading:a||T,data:v,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:o,actionBodyTemplate:function(e){return r.createElement(S.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,R.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return function(e){var t=P.current.filter((function(t){return t!==e}));P.current=t,f(t)}(e)},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:o||!(0,h.pH)(v),newRowDefaults:{netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){var t=e.map((function(e){return Object.assign(Object.assign({},e),{netamt:e.qty*e.unitprice,totalamt:e.qty*e.unitprice+e.taxamt})}));f(t),P.current=t,l(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(i._P,{field:"item_key",header:"Item*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=b.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items)||void 0===r?void 0:r.descr}},editorType:!o&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(w.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:b.current,onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"itemuom_key",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=_.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:!o&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(w.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:_.current,onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"qty",header:"Quantity",type:"number",editorType:!o&&"number"}),r.createElement(i._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:!o&&"number"}),r.createElement(i._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return k(null===t||void 0===t?void 0:t.netamt)}}),r.createElement(i._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,editorType:!o&&"currency",summaryFormatter:function(e){var t=e.row;return k(null===t||void 0===t?void 0:t.taxamt)}}),r.createElement(i._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return k(null===t||void 0===t?void 0:t.totalamt)}}))})),ne=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function o(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}c((r=r.apply(e,t||[])).next())}))},re=function(e){var t=(0,i.pm)(),n=t.showSuccess,u=t.showError,o=(0,r.useState)(!1),c=(0,d.Z)(o,2),l=c[0],f=c[1],y=(0,r.useState)(!1),E=(0,d.Z)(y,2),g=E[0],T=E[1],P=(0,r.useState)("S"),b=(0,d.Z)(P,2),_=b[0],O=b[1],A=(0,r.useState)("SAVE"),L=(0,d.Z)(A,2),x=L[0],k=L[1],I=(0,a.s0)(),C=(0,a.UO)().id,N=parseInt(C||""),j=isNaN(N)||N<=0,D=(0,r.useRef)(),Z=(0,r.useRef)(),H=B(N,{skip:j,refetchOnMountOrArgChange:!0}),J=H.data,F=H.isLoading,Q=(0,r.useState)(null),W=(0,d.Z)(Q,2),K=W[0],Y=W[1],$=(0,r.useState)([]),X=(0,d.Z)($,2),ee=X[0],re=X[1],ae=(0,h.eQ)({id:K},{skip:!K}),ie=ae.data,ue=(ae.isFetching,q("PO",{skip:!j,refetchOnMountOrArgChange:j})),oe=ue.data,ce=(ue.isFetching,U({})),le=ce.data,se=(ce.isLoading,(0,h.Wv)()),de=se.data,me=(se.isLoading,M({})),pe=me.data,ve=(me.isLoading,G()),fe=(0,d.Z)(ve,2),ye=fe[0],he=fe[1].isLoading,Ee=z(),ge=(0,d.Z)(Ee,2),Te=ge[0],Pe=ge[1].isLoading;(0,r.useEffect)((function(){if(ie)if(console.log(ie),j)re(ie);else{var e=null===J||void 0===J?void 0:J.purchs_odr_items.concat(ie);re(e)}}),[ie]),(0,r.useEffect)((function(){J&&re((null===J||void 0===J?void 0:J.purchs_odr_items)||[])}),[J]);var be=function(){return["U","R","C"].includes(null===J||void 0===J?void 0:J.docstatus)},_e=function(e,t){return ne(void 0,void 0,void 0,(0,s.Z)().mark((function n(){var r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(e);case 2:return n.next=4,k(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(i.Rm,{disableSaveBtn:be(),baseRoute:"/purchase/purchaseorder",description:"Purchase Order",id:N,data:J,isUpdating:he||Pe||l,ref:Z,isItemsTableChanged:g,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(S.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===J||void 0===J?void 0:J.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=Z.current)||void 0===t?void 0:t.getIsDirty())||g?(0,R.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return _e("U","SUBMIT_WITH_SAVE")},reject:function(){return _e("U","SUBMIT_WITHOUT_SAVE")}}):_e("U","SUBMIT_WITH_SAVE")}}),r.createElement(S.z,{label:"Cancel",disabled:j||["R","C"].includes(null===J||void 0===J?void 0:J.docstatus),className:"p-button-plain",onClick:function(e){return k("CANCEL"),O("C"),!0}})),isLoading:F,onSubmit:function(e){return ne(void 0,void 0,void 0,(0,s.Z)().mark((function t(){var r,a,i,o;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,i=null===(r=D.current)||void 0===r?void 0:r.getItems(),o=Object.assign(Object.assign({},e),{docid:"PO",number:j?null===oe||void 0===oe?void 0:oe.next_doc_id:null===J||void 0===J?void 0:J.number,date:(0,h.p6)(e.date,"yyyy-MM-dd"),loctyp:"PR",docstatus:_,action:x,purchs_odr_items:i}),console.log(o),!j){t.next=10;break}return t.next=7,ye(Object.assign(Object.assign({},o),h.Y$)).unwrap();case 7:a=t.sent,t.next=13;break;case 10:return t.next=12,Te(Object.assign(Object.assign(Object.assign({},o),h.Y$),{key:null===J||void 0===J?void 0:J.key})).unwrap();case 12:a=t.sent;case 13:n("Success",a.detail),f(!0),setTimeout((function(){I("/purchase/purchaseorder")}),h.P7),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),u("An error occurred","We couldn't save your post, try again!");case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))},renderForm:function(e,t,n){var a,u,o;return r.createElement("div",{className:"pl-6"},r.createElement("div",{className:"flex"},r.createElement("div",{className:"field col-6"},r.createElement("label",{htmlFor:"number",className:(0,v.AK)("col-3",{"p-error":n.number})},"PO Number"),r.createElement(m.Qr,{defaultValue:null===oe||void 0===oe?void 0:oe.next_doc_id,name:"number",control:e,rules:{},render:function(e){var t=e.field;e.fieldState;return r.createElement(p.o,Object.assign({disabled:!0,id:t.name},t,{value:(null===J||void 0===J?void 0:J.number)||(null===oe||void 0===oe?void 0:oe.next_doc_id)}))}}))),r.createElement("div",{className:"flex"},r.createElement("div",{className:"field col-6"},r.createElement("label",{htmlFor:"purtmpl_key",className:(0,v.AK)("col-3")},"PO Template"),r.createElement(m.Qr,{name:"purtmpl_key",control:e,rules:{},render:function(e){var t=e.field;e.fieldState;return r.createElement(w.L,Object.assign({id:t.name},t,{style:{width:"50%"},onChange:function(e){be()||Y(e.value),t.onChange(e.value)},optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:le}))}})),r.createElement("div",{className:"field col-6",style:{padding:10}},r.createElement("label",{htmlFor:"date",className:(0,v.AK)("col-4",{"p-error":n.date})},"PO Date*"),r.createElement(m.Qr,{defaultValue:j?new Date:new Date(null===J||void 0===J?void 0:J.date),name:"date",control:e,rules:{required:" This is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(V.f,Object.assign({id:t.name,showIcon:!0},t,{value:j?new Date(t.value):new Date(null===J||void 0===J?void 0:J.date),dateFormat:"dd-MM-yy",className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(a=null===n||void 0===n?void 0:n.date)||void 0===a?void 0:a.message))),r.createElement("div",{className:"flex"},r.createElement("div",{className:"field col-6"},r.createElement("label",{htmlFor:"vend_key",className:(0,v.AK)("col-3",{"p-error":n.vend_key})},"Vendor*"),r.createElement(m.Qr,{name:"vend_key",control:e,rules:{required:{value:!0,message:"Select a Vendor"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(w.L,Object.assign({id:t.name},t,{style:{width:"50%"},optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:de,className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(u=null===n||void 0===n?void 0:n.vend_key)||void 0===u?void 0:u.message)),r.createElement("div",{className:"field col-6",style:{padding:10}})),r.createElement("div",{className:"flex"},r.createElement("div",{className:"field col-6"},r.createElement("label",{htmlFor:"proj_key",className:(0,v.AK)("col-3",{"p-error":n.proj_key})},"Project*"),r.createElement(m.Qr,{name:"proj_key",control:e,rules:{required:{value:!0,message:"Select a Project"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(w.L,Object.assign({id:t.name},t,{style:{width:"50%"},optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:pe,className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(o=null===n||void 0===n?void 0:n.proj_key)||void 0===o?void 0:o.message))),r.createElement("div",{className:"col-12"},r.createElement(te,{data:ee,isLoading:F,ref:D,disableTable:be(),onChange:function(e){return!g&&T(e)}})))}}))},ae=function(e){var t=K({}),n=t.data,a=t.isLoading,u=W(),o=(0,d.Z)(u,2),c=o[0],l=o[1].isLoading;return r.createElement(i.PS,{baseRoute:"/purchase/purchaseorder",description:"Purchase Order",isLoading:a||l,data:null===n||void 0===n?void 0:n.results,newTable:!0,showHeader:!0,deleteAction:function(e){return c(e).unwrap()}},r.createElement(i._P,{field:"number",header:"PO Number",filteringType:"number"}),r.createElement(i._P,{field:"date",header:"PO Date",filteringType:"date"}),r.createElement(i._P,{field:"vendor.name",header:"Vendor",filteringType:"text"}),r.createElement(i._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(i._P,{field:"status.descr",header:"PO Status",filteringType:"text"}))},ie=r.createElement(a.AW,{path:"purchaseorder"},r.createElement(a.AW,{path:"new",element:r.createElement(re,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(re,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(ae,null)})),ue=function(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"/",element:r.createElement(i.SV,{navItems:l})},r.createElement(a.AW,{index:!0,element:r.createElement(a.Fg,{to:"purchasetemplate",replace:!0})}),J,ie,(0,u.Z)(o),r.createElement(a.AW,{path:":purchase/comming-soon",element:r.createElement(i.hg,null)}),r.createElement(a.AW,{path:"*",element:r.createElement(i.EN,{relative:!0})})))}}}]);
//# sourceMappingURL=474.8324c9f9.chunk.js.map