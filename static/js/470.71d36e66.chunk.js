"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[470],{9470:function(e,t,n){n.r(t),n.d(t,{default:function(){return De}});var r=n(969),o=n(734),a=n(55),i=n(9367),c="contractor",u="Contractor",l=function(e,t){return(0,a.E7)("/".concat(i.o,"/").concat(e)+(t?"/comming-soon":""))},s=[{items:[{label:"Contractor",icon:"pi ml-3",template:l(c)},{label:"Contractor Type",icon:"pi ml-3",template:l("contractortype")},{label:"Contractor Group",icon:"pi ml-3",template:l("contractorgroup")},{label:"Contract",icon:"pi ml-3",template:l("contract")},{label:"AP Term",icon:"pi ml-3",template:l("apterm")}]}],d=n(2723),p=n(6234),m=n(3665),f=n(7765),y=n(6770),v=n(8301),g=n(8224),E=n(3127),T=n(4576),h=n(184),b=n(8079),P="/contract/contractor/",S=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listContract:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(P,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},providesTags:function(e){return e?[].concat((0,b.Z)(null===e||void 0===e?void 0:e.results.map((function(e){var t=e.key;return{type:h.pJ.CONTRACT,key:t}}))),[{type:h.pJ.CONTRACT,id:"LIST"}]):[{type:h.pJ.CONTRACT,id:"LIST"}]}}),addContract:e.mutation({query:function(e){return{url:P,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.CONTRACT,id:"LIST"}]}),getContract:e.query({query:function(e){return"".concat(P).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.CONTRACT,id:n}]}}),updateContract:e.mutation({query:function(e){var t=e;return{url:"".concat(P),method:"POST",body:t}},invalidatesTags:[{type:h.pJ.CONTRACT,id:"LIST"}]}),deleteContract:e.mutation({query:function(e){return{url:"".concat(P).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:h.pJ.CONTRACT,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),C=S.useAddContractMutation,O=S.useDeleteContractMutation,L=S.useGetContractQuery,w=S.useListContractQuery,x=S.useUpdateContractMutation,A=(S.useGetErrorProneQuery,S.endpoints.getContract,(0,r.forwardRef)((function(e,t){var n=e.data,o=e.isLoading,i=e.disableTable,l=void 0!==i&&i,s=e.onChange,d=void 0===s?function(){}:s,m=(0,r.useState)([]),f=(0,p.Z)(m,2),v=f[0],E=f[1],T=(0,r.useRef)(v),b=(0,r.useRef)([]),P=(0,h.DY)({}),S=P.data;P.isLoading;(0,r.useImperativeHandle)(t,(function(){return{getItems:function(){return v}}})),(0,r.useEffect)((function(){E(n),T.current=n}),[n]),(0,r.useEffect)((function(){b.current=(null===S||void 0===S?void 0:S.results)||[]}),[S]);return r.createElement(a.PS,{baseRoute:"/contract/".concat(c),description:u,isLoading:o,data:v,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:l,actionBodyTemplate:function(e){return r.createElement(y.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=T.current.filter((function(t){return t!==e}));T.current=t,E(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:l||!function(e){if(0===e.length)return!0;var t=e[e.length-1];return(null===t||void 0===t?void 0:t.item_descr)&&(null===t||void 0===t?void 0:t.itemuom_key)}(v),newRowDefaults:{netamt:0,qty:0,unitprice:0},OnRowsChanged:function(e){var t=e.map((function(e){return Object.assign(Object.assign({},e),{netamt:e.qty*e.unitprice})}));E(t),T.current=t,d(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(a._P,{field:"item_descr",header:"Calculation Method*",type:"text",editorType:!l&&"text"}),r.createElement(a._P,{field:"itemuom_key",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var o=null===(n=b.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return o.length?o[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:!l&&function(e){var t=e.row,n=e.column,o=e.onRowChange;e.onClose;return r.createElement(g.L,{autoFocus:!0,className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:b.current,filter:!0,filterBy:"descr",onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,o(r,!0)},tabIndex:-1})}}),r.createElement(a._P,{field:"qty",header:"Quantity",type:"number",editorType:!l&&"number"}),r.createElement(a._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:!l&&"number"}),r.createElement(a._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t,n=e.row;return t=null===n||void 0===n?void 0:n.netamt,r.createElement(a.JK,{value:t||0})}}))}))),_=(0,r.forwardRef)((function(e,t){var n=e.data,o=e.isLoading,i=e.disableTable,l=void 0!==i&&i,s=e.selectedProject,d=(0,r.useState)([]),m=(0,p.Z)(d,2),f=m[0],v=m[1],E=(0,r.useRef)(f),T=(0,r.useRef)([]),b=(0,h.aM)({id:s},{skip:!s}),P=b.data;b.isLoading;(0,r.useImperativeHandle)(t,(function(){return{getItems:function(){return f}}})),(0,r.useEffect)((function(){v(n),E.current=n}),[n]),(0,r.useEffect)((function(){T.current=(null===P||void 0===P?void 0:P.results)||[]}),[P]);return r.createElement(a.PS,{baseRoute:"/contract/".concat(c),description:u,isLoading:o,data:f,newTable:!0,tableLayoutClass:"h-full",hideActionColumn:l,allowFilters:!1,actionBodyTemplate:function(e){return r.createElement(y.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=E.current.filter((function(t){return t!==e}));E.current=t,v(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:l||!function(e){if(0===e.length)return!0;var t=e[e.length-1];return(null===t||void 0===t?void 0:t.item_descr)&&(null===t||void 0===t?void 0:t.netamt)}(f),newRowDefaults:{netamt:0},OnRowsChanged:function(e){v(e),E.current=e},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(a._P,{field:"item_descr",header:"Stagewise Payment*",editorType:!l&&function(e){var t=e.row,n=e.column,o=e.onRowChange;e.onClose;return r.createElement(g.L,{autoFocus:!0,className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"descr",options:T.current,filter:!0,filterBy:"descr",onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,o(r,!0)},tabIndex:-1})}}),r.createElement(a._P,{field:"netamt",header:"Net Amt*",type:"currency",defaultValue:0,editorType:!l&&"currency",summaryFormatter:function(e){var t,n=e.row;return t=null===n||void 0===n?void 0:n.netamt,r.createElement(a.JK,{value:t||0})}}))})),R=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getNextDocNo:e.query({query:function(e){return{url:(0,h.DS)("/transaction/doc/id/next?docid=".concat(e))}}}),getActivePurchaseTemplates:e.query({query:function(){return{url:"/transaction/purchase/template/all/active"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.PURCHASE_TEMPLATE,id:t}}))),[{type:h.pJ.PURCHASE_TEMPLATE,id:"LIST"}])}}),getActiveProjects:e.query({query:function(){return{url:"/project/project/all/active"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.PROJECT,id:t}}))),[{type:h.pJ.PROJECT,id:"LIST"}])}}),getActiveContractors:e.query({query:function(){return{url:"/vendor/vendor/all/active/contractor"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.VENDOR,id:t}}))),[{type:h.pJ.VENDOR,id:"LIST"}])}}),getModeOfPayments:e.query({query:function(){return{url:"/transaction/payment/mode/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.MODE_OF_PAYMENT,id:t}}))),[{type:h.pJ.MODE_OF_PAYMENT,id:"LIST"}])}}),getGRNNumbers:e.query({query:function(){return{url:"/transaction/goods/receipts/?only_grn_number=True"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.GRN_NUMBER,id:t}}))),[{type:h.pJ.GRN_NUMBER,id:"LIST"}])}}),listAPTerm:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)("/vendor/ap_term/","?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.AP_TERM,id:t}}))),[{type:h.pJ.AP_TERM,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),N=(R.useGetErrorProneQuery,R.useGetNextDocNoQuery),k=(R.useGetActiveProjectsQuery,R.useGetActivePurchaseTemplatesQuery,R.useGetActiveContractorsQuery,R.useGetModeOfPaymentsQuery,R.useListAPTermQuery,R.useGetGRNNumbersQuery,function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}),I=function(e,t){return e?t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()):new Date(e):e},q=function(e){(0,m.Z)(e);var t=(0,a.pm)(),n=t.showSuccess,i=t.showError,c=(0,r.useState)(!1),u=(0,p.Z)(c,2),l=u[0],s=u[1],b=(0,r.useState)({}),P=(0,p.Z)(b,2),S=P[0],O=P[1],w=(0,r.useState)(!1),R=(0,p.Z)(w,2),q=R[0],j=R[1],D=(0,r.useState)(!1),Z=(0,p.Z)(D,2),J=Z[0],V=(Z[1],(0,r.useState)("")),G=(0,p.Z)(V,2),W=G[0],M=G[1],U=(0,r.useState)("S"),Q=(0,p.Z)(U,2),F=Q[0],B=Q[1],z=(0,r.useState)("SAVE"),Y=(0,p.Z)(z,2),H=Y[0],K=Y[1],X=(0,o.UO)().id,$=parseInt(X||""),ee=isNaN($)||$<=0,te=(0,r.useRef)(),ne=(0,r.useRef)(),re=(0,r.useRef)(),oe=(0,h.ft)(),ae=(0,r.useState)(null),ie=(0,p.Z)(ae,2),ce=ie[0],ue=ie[1],le=L($,{skip:ee}),se=le.data,de=le.isLoading,pe=le.refetch,me=N("VCN",{skip:!ee}),fe=me.data,ye=me.isLoading,ve=(0,o.s0)(),ge=(0,h.JB)(),Ee=ge.data,Te=ge.isLoading,he=(0,h.rC)(),be=he.data,Pe=he.isLoading,Se=x(),Ce=(0,p.Z)(Se,2),Oe=Ce[0],Le=Ce[1].isLoading,we=C(),xe=(0,p.Z)(we,2),Ae=xe[0],_e=xe[1].isLoading;(0,r.useEffect)((function(){O(se||Object.assign(Object.assign({},oe),{contractdate:I(new Date,!0),docid:"VCN",contractno:null===fe||void 0===fe?void 0:fe.next_doc_id,loctyp:"PR"}))}),[se,fe]),(0,r.useEffect)((function(){var e,t;if(se&&be){var n=null===be||void 0===be?void 0:be.filter((function(e){return e.key===se.vend_key}));n&&M(null===(t=null===(e=n[0])||void 0===e?void 0:e.type)||void 0===t?void 0:t.id)}se&&ue(se.proj_key)}),[se,be]);var Re=function(){return["U","R","C"].includes(null===se||void 0===se?void 0:se.docstatus)},Ne=function(e,t){return k(void 0,void 0,void 0,(0,d.Z)().mark((function n(){var r;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B(e);case 2:return n.next=4,K(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(a.Rm,{ref:re,baseRoute:"/contract/contract",description:"Contract",id:$,data:S,disableSaveBtn:Re(),isItemsTableChanged:q||J,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(y.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===se||void 0===se?void 0:se.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=re.current)||void 0===t?void 0:t.getIsDirty())||q||J?(0,T.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return Ne("U","SUBMIT_WITH_SAVE")},reject:function(){return Ne("U","SUBMIT_WITHOUT_SAVE")}}):Ne("U","SUBMIT_WITH_SAVE")}}),r.createElement(y.z,{label:"Cancel",disabled:ee||["R","C"].includes(null===se||void 0===se?void 0:se.docstatus),className:"p-button-plain",onClick:function(e){return K("CANCEL"),B("C"),!0}})),isUpdating:_e||Le||l,isLoading:de,onSubmit:function(e){return k(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var r,o,a,c,u,l;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=null===(r=te.current)||void 0===r?void 0:r.getItems(),c=null===(o=ne.current)||void 0===o?void 0:o.getItems(),u=Object.assign(Object.assign({},e),{contractdate:(0,h.p6)(e.contractdate,"yyyy-MM-dd"),docstatus:F,action:H,vend_contract_tasks:a,vend_contract_stages:c}),console.log(u),t.prev=4,!ee){t.next=11;break}return t.next=8,Ae(Object.assign(Object.assign({},u),oe)).unwrap();case 8:l=t.sent,t.next=14;break;case 11:return t.next=13,Oe(Object.assign(Object.assign({},u),oe)).unwrap();case 13:l=t.sent;case 14:console.log("submit resp",l),pe(),n("Success",l.detail),s(!0),setTimeout((function(){ve("/contract/contract")}),h.P7),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(4),i("An error occurred","We couldn't save your post, try again!");case 24:case"end":return t.stop()}}),t,null,[[4,21]])})))},renderForm:function(e,t,n){var o,i;return r.createElement("div",{className:"pl-4 pt-4 pb-3 grid p-fluid h-full"},r.createElement(a.Wi,{label:"Contract Number",name:"contractno",isLoading:ye,className:"col-10 md:col-6",control:e,errors:n,formItem:{component:v.R,componentProps:{useGrouping:!1,disabled:!0}}}),r.createElement(a.Wi,{label:"Contractor",name:"vend_key",className:"col-10 md:col-6",control:e,errors:n,isLoading:Pe,required:"Select a Contractor",leftSpan:3,rightSpan:9,useExplicit:!0,onChange:function(e){var t,n,r=null===be||void 0===be?void 0:be.filter((function(t){return t.key===e.value}));r&&M(null===(n=null===(t=r[0])||void 0===t?void 0:t.type)||void 0===n?void 0:n.id)},formItem:{component:g.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:be}}}),r.createElement(a.Wi,{label:"Contract Date",name:"contractdate",className:"col-10 md:col-6",useExplicit:!0,control:e,errors:n,convertValue:I,required:"Select a Date",formItem:{component:E.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(a.Wi,{label:"Project",name:"proj_key",className:"col-10 md:col-6",control:e,errors:n,isLoading:Te,required:"Select a Project",leftSpan:3,rightSpan:9,useExplicit:!0,onChange:function(e){ue(e.value)},formItem:{component:g.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:Ee}}}),r.createElement(a.Wi,{label:"Contractor Type",name:"contractortype",className:"col-10 md:col-6",control:e,errors:n,formItem:{component:f.o,componentProps:{useGrouping:!1,disabled:!0,value:W}}}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(A,{data:(null===se||void 0===se?void 0:se.vend_contract_tasks)||(null===(o=te.current)||void 0===o?void 0:o.getItems())||[],isLoading:de,ref:te,disableTable:Re(),onChange:function(e){return!q&&j(e)}})),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(_,{data:(null===se||void 0===se?void 0:se.vend_contract_stages)||(null===(i=ne.current)||void 0===i?void 0:i.getItems())||[],isLoading:de,ref:ne,selectedProject:ce,disableTable:Re()})),r.createElement(a.Wi,{label:"Notes",name:"notes",className:"col-12",control:e,errors:n,leftSpan:2,rightSpan:10,formItem:{component:f.o,componentProps:{maxLength:255}}}))}}))},j=function(e){var t=w({},{refetchOnMountOrArgChange:!0}),n=t.data,o=t.isLoading,c=O(),u=(0,p.Z)(c,2),l=u[0],s=u[1].isLoading;return r.createElement(a.PS,{baseRoute:"/".concat(i.o,"/contract"),description:"Contracts",isLoading:o||s,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return l(e).unwrap()},newTable:!0,showHeader:!0},r.createElement(a._P,{field:"contractno",header:"Contract No",filteringType:"number"}),r.createElement(a._P,{field:"contractdate",header:"Contract Date",filteringType:"date"}),r.createElement(a._P,{field:"vendor.name",header:"Contractor",filteringType:"text"}),r.createElement(a._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(a._P,{field:"status.descr",header:"Status",filteringType:"text"}))},D=r.createElement(o.AW,{path:"contract"},r.createElement(o.AW,{path:"new",element:r.createElement(q,null)}),r.createElement(o.AW,{path:":id/edit",element:r.createElement(q,null)}),r.createElement(o.AW,{index:!0,element:r.createElement(j,null)})),Z=n(3953),J=n(4756),V=n(8391),G=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},W="/vendor/vendor/",M=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listContractor:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(W,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},transformResponse:function(e,t,n){return e.results=e.results.filter((function(e){var t;return"Y"===(null===(t=null===e||void 0===e?void 0:e.type)||void 0===t?void 0:t.contractor)})),e},providesTags:function(e){var t;return e?[].concat((0,b.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:h.pJ.VENDOR,id:t}}))),[{type:h.pJ.VENDOR,id:"LIST"}]):[{type:h.pJ.VENDOR,id:"LIST"}]}}),addContractor:e.mutation({query:function(e){return{url:W,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.VENDOR,id:"LIST"}]}),getContractor:e.query({query:function(e){return"".concat(W).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.VENDOR,id:n}]}}),updateContractor:e.mutation({query:function(e){var t=e.key,n=G(e,["key"]);return{url:"".concat(W).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:h.pJ.VENDOR,id:null===e||void 0===e?void 0:e.id}]}}),deleteContractor:e.mutation({query:function(e){return{url:"".concat(W).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:h.pJ.VENDOR,id:null===e||void 0===e?void 0:e.id}]}}),getStates:e.query({query:function(){return{url:(0,h.DS)("/geo/state/")}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.state_key;return{type:h.pJ.STATES,id:t}}))),[{type:h.pJ.STATES,id:"LIST"}])}}),getCities:e.query({query:function(e){return{url:"/geo/city/?state=".concat(e)}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.city_key;return{type:h.pJ.CITIES,id:t}}))),[{type:h.pJ.CITIES,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),U=M.useAddContractorMutation,Q=M.useDeleteContractorMutation,F=M.useGetContractorQuery,B=M.useListContractorQuery,z=M.useUpdateContractorMutation,Y=(M.useGetErrorProneQuery,M.useGetStatesQuery),H=M.useGetCitiesQuery,K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},X="/vendor/ap_term/",$=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listAPTerm:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(X,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,b.Z)(e.map((function(e){var t=e.key;return{type:h.pJ.AP_TERM,id:t}}))),[{type:h.pJ.AP_TERM,id:"LIST"}])}}),addAPTerm:e.mutation({query:function(e){return{url:X,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.AP_TERM,id:"LIST"}]}),getAPTerm:e.query({query:function(e){return"".concat(X).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.AP_TERM,id:n}]}}),updateAPTerm:e.mutation({query:function(e){var t=e.key,n=K(e,["key"]);return{url:"".concat(X).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:h.pJ.AP_TERM,id:null===e||void 0===e?void 0:e.id}]}}),deleteAPTerm:e.mutation({query:function(e){return{url:"".concat(X).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:h.pJ.AP_TERM,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),ee=$.useAddAPTermMutation,te=$.useDeleteAPTermMutation,ne=$.useGetAPTermQuery,re=$.useListAPTermQuery,oe=$.useUpdateAPTermMutation,ae=($.useGetErrorProneQuery,$.endpoints.getAPTerm,function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}),ie="/vendor/type/",ce=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listContractorType:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(ie,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},transformResponse:function(e,t,n){return e.results=e.results.filter((function(e){return"Y"===e.contractor})),e},providesTags:function(e){var t;return e?[].concat((0,b.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:h.pJ.VENDOR_TYPE,id:t}}))),[{type:h.pJ.VENDOR_TYPE,id:"LIST"}]):[{type:h.pJ.VENDOR_TYPE,id:"LIST"}]}}),addContractorType:e.mutation({query:function(e){return{url:ie,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.VENDOR_TYPE,id:"LIST"}]}),getContractorType:e.query({query:function(e){return"".concat(ie).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.VENDOR_TYPE,id:n}]}}),updateContractorType:e.mutation({query:function(e){var t=e.key,n=ae(e,["key"]);return{url:"".concat(ie).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:h.pJ.VENDOR_TYPE,id:null===e||void 0===e?void 0:e.id}]}}),deleteContractorType:e.mutation({query:function(e){return{url:"".concat(ie).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:h.pJ.VENDOR_TYPE,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),ue=ce.useAddContractorTypeMutation,le=ce.useDeleteContractorTypeMutation,se=ce.useGetContractorTypeQuery,de=ce.useListContractorTypeQuery,pe=ce.useUpdateContractorTypeMutation,me=(ce.useGetErrorProneQuery,ce.endpoints.getContractorType,function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}),fe="/vendor/group/",ye=h.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listContractorGroup:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,h.DS)(fe,"?page=".concat(t||1,"&page_size=").concat(n||h.IV))}},providesTags:function(e){var t;return e?[].concat((0,b.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:h.pJ.VENDOR_GROUP,id:t}}))),[{type:h.pJ.VENDOR_GROUP,id:"LIST"}]):[{type:h.pJ.VENDOR_GROUP,id:"LIST"}]}}),addContractorGroup:e.mutation({query:function(e){return{url:fe,method:"POST",body:e}},invalidatesTags:[{type:h.pJ.VENDOR_GROUP,id:"LIST"}]}),getContractorGroup:e.query({query:function(e){return"".concat(fe).concat(e)},providesTags:function(e,t,n){return[{type:h.pJ.VENDOR_GROUP,id:n}]}}),updateContractorGroup:e.mutation({query:function(e){var t=e.key,n=me(e,["key"]);return{url:"".concat(fe).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:h.pJ.VENDOR_GROUP,id:null===e||void 0===e?void 0:e.id}]}}),deleteContractorGroup:e.mutation({query:function(e){return{url:"".concat(fe).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:h.pJ.VENDOR_GROUP,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),ve=ye.useAddContractorGroupMutation,ge=ye.useDeleteContractorGroupMutation,Ee=ye.useGetContractorGroupQuery,Te=ye.useListContractorGroupQuery,he=ye.useUpdateContractorGroupMutation,be=(ye.useGetErrorProneQuery,function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}),Pe=function(e){var t=(0,a.pm)(),n=t.showSuccess,i=t.showError,c=(0,r.useState)(!1),u=(0,p.Z)(c,2),l=u[0],s=u[1],m=(0,o.UO)().id,v=parseInt(m||""),E=isNaN(v)||v<=0,T=(0,r.useState)(""),b=(0,p.Z)(T,2),P=b[0],S=b[1],C=F(v,{skip:E}),O=C.data,L=C.isLoading,w=(0,h.ft)(),x=(0,o.s0)(),A=re({}),_=A.data,R=(A.isLoading,de({})),N=R.data,k=(R.isLoading,Te({})),I=k.data,q=(k.isLoading,Y()),j=q.data,D=(q.isLoading,H(P)),G=D.data,W=(D.isLoading,(0,h.Ii)({})),M=W.data,Q=(W.isLoading,z()),B=(0,p.Z)(Q,2),K=B[0],X=B[1].isLoading,$=U(),ee=(0,p.Z)($,2),te=ee[0],ne=ee[1].isLoading;return r.createElement(r.Fragment,null,r.createElement(a.Rm,{baseRoute:"/contract/contractor",description:"Contractor",id:v,data:O,isUpdating:ne||X||l,isLoading:L,onSubmit:function(e){return be(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var r;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!E){t.next=7;break}return t.next=4,te(Object.assign(Object.assign({},e),w)).unwrap();case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,K(Object.assign(Object.assign({},e),w)).unwrap();case 9:r=t.sent;case 10:n("Success",r.detail),s(!0),setTimeout((function(){x("/contract/contractor")}),h.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),i("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"flex"},r.createElement("div",{className:"pl-8 col-10"},r.createElement(a.Wi,{label:"Contractor Name",name:"name",control:e,errors:n,required:!0,leftSpan:3,rightSpan:5,formItem:{component:f.o,componentProps:{maxLength:100}}}),r.createElement(a.Wi,{label:"Address Line 1",name:"addr1",control:e,errors:n,leftSpan:3,rightSpan:6,formItem:{component:f.o,componentProps:{maxLength:100}}}),r.createElement(a.Wi,{label:"Address Line 2",name:"addr2",control:e,errors:n,leftSpan:3,rightSpan:6,formItem:{component:f.o,componentProps:{maxLength:100}}}),r.createElement(a.Wi,{label:"State",name:"state_key",control:e,errors:n,required:!0,leftSpan:3,rightSpan:4,useExplicit:!0,onChange:function(e){S(e.value)},formItem:{component:g.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:j}}}),r.createElement(a.Wi,{label:"City",name:"city_key",control:e,errors:n,required:!0,leftSpan:3,rightSpan:4,formItem:{component:g.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:G}}}),r.createElement(a.Wi,{label:"Contractor Type",name:"vendtyp_key",control:e,errors:n,required:!0,leftSpan:3,rightSpan:5,formItem:{component:g.L,componentProps:{optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:null===N||void 0===N?void 0:N.results}}}),r.createElement(a.Wi,{label:"Contractor Group",name:"vendgrp_key",control:e,errors:n,required:!0,leftSpan:3,rightSpan:5,formItem:{component:g.L,componentProps:{optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:null===I||void 0===I?void 0:I.results}}}),r.createElement(a.Wi,{label:"AP Term",name:"apterm_key",control:e,errors:n,leftSpan:3,rightSpan:4,formItem:{component:g.L,componentProps:{optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:_}}}),r.createElement(a.Wi,{label:"Mode Of Payment",name:"modeofpay",control:e,errors:n,leftSpan:3,rightSpan:4,formItem:{component:g.L,componentProps:{optionLabel:"descr",optionValue:"modeofpay",options:M}}}),r.createElement(a.Wi,{label:"GST Number",name:"gstnumber",control:e,errors:n,required:!0,leftSpan:3,rightSpan:5,formItem:{component:f.o,componentProps:{maxLength:20}}}),r.createElement("div",{className:"field"},r.createElement("label",{style:{margin:"auto"},htmlFor:"inactive",className:(0,J.AK)("col-3",{"p-error":n.inactive})},"Inactive"),r.createElement(Z.Qr,{defaultValue:"N",name:"inactive",control:e,render:function(e){var t=e.field;e.fieldState;return r.createElement(V.X,Object.assign({checked:t.value,trueValue:"Y",falseValue:"N",id:t.name},t))}}))),r.createElement("div",{className:"col-2",style:{marginTop:25}},r.createElement("div",null,r.createElement(y.z,{label:"Contact",onClick:function(e){return e.preventDefault()},className:"project-page-tags",style:{width:"100%"}}))))}}))},Se=function(e){var t=B({}),n=t.data,o=t.isLoading,i=Q(),c=(0,p.Z)(i,2),u=c[0],l=c[1].isLoading;return r.createElement(a.PS,{baseRoute:"/contract/contractor",description:"Contractor",isLoading:o||l,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return u(e).unwrap()},newTable:!0,showHeader:!0},r.createElement(a._P,{field:"id",header:"Contractor Code",filteringType:"number"}),r.createElement(a._P,{field:"name",header:"Contractor Name",filteringType:"text"}),r.createElement(a._P,{field:"type.descr",header:"Contractor Type",filteringType:"text"}),r.createElement(a._P,{field:"group.descr",header:"Contractor Group",filteringType:"text"}))},Ce=r.createElement(o.AW,{path:c},r.createElement(o.AW,{path:"new",element:r.createElement(Pe,null)}),r.createElement(o.AW,{path:":id/edit",element:r.createElement(Pe,null)}),r.createElement(o.AW,{index:!0,element:r.createElement(Se,null)})),Oe=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},Le=function(e){var t=(0,a.pm)(),n=t.showSuccess,i=t.showError,c=(0,r.useState)(!1),u=(0,p.Z)(c,2),l=u[0],s=u[1],m=(0,o.s0)(),y=(0,o.UO)().id,v=parseInt(y||""),g=isNaN(v)||v<=0,E=(0,h.ft)(),T=se(v,{skip:g}),b=T.data,P=T.isLoading,S=ue(),C=(0,p.Z)(S,2),O=C[0],L=C[1].isLoading,w=pe(),x=(0,p.Z)(w,2),A=x[0],_=x[1].isLoading;return r.createElement(r.Fragment,null,r.createElement(a.Rm,{baseRoute:"/contract/contractortype",description:"Contractor Type",id:v,data:b,isUpdating:L||_||l,isLoading:P,onSubmit:function(e){return Oe(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var r;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!g){t.next=7;break}return t.next=4,O(Object.assign(Object.assign(Object.assign({},e),E),{contractor:"Y"})).unwrap();case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,A(Object.assign(Object.assign(Object.assign({},e),E),{contractor:"Y"})).unwrap();case 9:r=t.sent;case 10:n("Success",r.detail),s(!0),setTimeout((function(){m("/contract/contractortype")}),h.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),i("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"pl-8"},r.createElement(a.Wi,{label:"Type Description",name:"descr",control:e,errors:n,required:!0,leftSpan:2,rightSpan:5,formItem:{component:f.o,componentProps:{maxLength:100}}}))}}))},we=function(e){var t=de({}),n=t.data,o=t.isLoading,i=le(),c=(0,p.Z)(i,2),u=c[0],l=c[1].isLoading;return r.createElement(a.PS,{baseRoute:"/contract/contractortype",description:"Contractor Type",isLoading:o||l,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return u(e).unwrap()},newTable:!0,showHeader:!0},r.createElement(a._P,{field:"id",header:"Contractor Type",filteringType:"number"}),r.createElement(a._P,{field:"descr",header:"Contractor Type Description",filteringType:"text"}))},xe=r.createElement(o.AW,{path:"contractortype"},r.createElement(o.AW,{path:"new",element:r.createElement(Le,null)}),r.createElement(o.AW,{path:":id/edit",element:r.createElement(Le,null)}),r.createElement(o.AW,{index:!0,element:r.createElement(we,null)})),Ae=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},_e=function(e){var t=(0,a.pm)(),n=t.showSuccess,i=t.showError,c=(0,r.useState)(!1),u=(0,p.Z)(c,2),l=u[0],s=u[1],m=(0,o.s0)(),y=(0,o.UO)().id,v=parseInt(y||""),g=isNaN(v)||v<=0,E=(0,h.ft)(),T=Ee(v,{skip:g}),b=T.data,P=T.isLoading,S=ve(),C=(0,p.Z)(S,2),O=C[0],L=C[1].isLoading,w=he(),x=(0,p.Z)(w,2),A=x[0],_=x[1].isLoading;return r.createElement(r.Fragment,null,r.createElement(a.Rm,{baseRoute:"/contract/contractorgroup",description:"Contractor Group",id:v,data:b,isUpdating:L||_||l,isLoading:P,onSubmit:function(e){return Ae(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var r;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!g){t.next=7;break}return t.next=4,O(Object.assign(Object.assign({},e),E)).unwrap();case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,A(Object.assign(Object.assign({},e),E)).unwrap();case 9:r=t.sent;case 10:n("Success",r.detail),s(!0),setTimeout((function(){m("/contract/contractorgroup")}),h.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),i("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"pl-8"},r.createElement(a.Wi,{label:"Group Description",name:"descr",control:e,errors:n,required:!0,leftSpan:2,rightSpan:5,formItem:{component:f.o,componentProps:{maxLength:100}}}))}}))},Re=function(e){var t=Te({}),n=t.data,o=t.isLoading,i=ge(),c=(0,p.Z)(i,2),u=c[0],l=c[1].isLoading;return r.createElement(a.PS,{baseRoute:"/contract/contractorgroup",description:"Contractor Group",isLoading:o||l,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return u(e).unwrap()},newTable:!0,showHeader:!0},r.createElement(a._P,{field:"id",header:"Group Code",filteringType:"number"}),r.createElement(a._P,{field:"descr",header:"Group Description",filteringType:"text"}))},Ne=r.createElement(o.AW,{path:"contractorgroup"},r.createElement(o.AW,{path:"new",element:r.createElement(_e,null)}),r.createElement(o.AW,{path:":id/edit",element:r.createElement(_e,null)}),r.createElement(o.AW,{index:!0,element:r.createElement(Re,null)})),ke=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},Ie=function(e){var t=(0,a.pm)(),n=t.showSuccess,i=t.showError,c=(0,r.useState)(!1),u=(0,p.Z)(c,2),l=u[0],s=u[1],m=(0,o.s0)(),y=(0,o.UO)().id,v=parseInt(y||""),g=isNaN(v)||v<=0,E=(0,h.ft)(),T=ne(v,{skip:g}),b=T.data,P=T.isLoading,S=ee(),C=(0,p.Z)(S,2),O=C[0],L=C[1].isLoading,w=oe(),x=(0,p.Z)(w,2),A=x[0],_=x[1].isLoading;return r.createElement(r.Fragment,null,r.createElement(a.Rm,{baseRoute:"/contract/apterm",description:"AP Term",id:v,data:b,isUpdating:L||_||l,isLoading:P,onSubmit:function(e){return ke(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var r;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!g){t.next=7;break}return t.next=4,O(Object.assign(Object.assign({},e),E)).unwrap();case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,A(Object.assign(Object.assign({},e),E)).unwrap();case 9:r=t.sent;case 10:n("Success",r.detail),s(!0),setTimeout((function(){m("/contract/apterm")}),h.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),i("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"pl-8"},r.createElement(a.Wi,{label:"Term Description",name:"descr",control:e,errors:n,required:!0,leftSpan:2,rightSpan:5,formItem:{component:f.o,componentProps:{maxLength:100}}}),r.createElement(a.Wi,{label:"Term Days",name:"days",control:e,errors:n,required:!0,leftSpan:2,rightSpan:3,formItem:{component:f.o,componentProps:{type:"number",max:999}}}))}}))},qe=function(e){var t=re({}),n=t.data,o=t.isLoading,i=te(),c=(0,p.Z)(i,2),u=c[0],l=c[1].isLoading;return r.createElement(a.PS,{baseRoute:"/contract/apterm",description:"AP Term",isLoading:o||l,data:n,deleteAction:function(e){return u(e).unwrap()},newTable:!0,showHeader:!0},r.createElement(a._P,{field:"id",header:"Term Code",filteringType:"number"}),r.createElement(a._P,{field:"descr",header:"Term Description",filteringType:"text"}))},je=r.createElement(o.AW,{path:"apterm"},r.createElement(o.AW,{path:"new",element:r.createElement(Ie,null)}),r.createElement(o.AW,{path:":id/edit",element:r.createElement(Ie,null)}),r.createElement(o.AW,{index:!0,element:r.createElement(qe,null)})),De=function(){return r.createElement(o.Z5,null,r.createElement(o.AW,{path:"/",element:r.createElement(a.SV,{navItems:s})},r.createElement(o.AW,{index:!0,element:r.createElement(o.Fg,{to:c,replace:!0})}),D,Ce,xe,Ne,je,r.createElement(o.AW,{path:":page/comming-soon",element:r.createElement(a.hg,null)}),r.createElement(o.AW,{path:"*",element:r.createElement(a.EN,{relative:!0})})))}}}]);
//# sourceMappingURL=470.71d36e66.chunk.js.map