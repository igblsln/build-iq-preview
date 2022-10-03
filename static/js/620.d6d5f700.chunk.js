"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[620],{3620:function(e,t,n){n.r(t),n.d(t,{default:function(){return Qe}});var r=n(969),a=n(3026),i=n(8822),l="inventory",o=function(e,t){return(0,i.E7)("/".concat(l,"/").concat(e)+(t?"/comming-soon":""))},s=[{label:"Transctions",items:[{label:"Material Purchase",icon:"pi ml-3",template:o("materialpurchase",!0)},{label:"Miscellaneous Purchase",icon:"pi ml-3",template:o("miscpurchase",!0)},{label:"Material Transfer",icon:"pi ml-3",template:o("materialtarnsfer",!0)},{label:"Material Over/Short",icon:"pi ml-3",template:o("materialos",!0)},{label:"Beginning Balance",icon:"pi ml-3",template:o("beginningbal",!0)}]},{label:"Configuration",items:[{label:"Item",icon:"pi ml-3",template:o("items")},{label:"Unit on Measure",icon:"pi ml-3",template:o("uoms")},{label:"Item Type",icon:"pi ml-3",template:o("itemtypes")},{label:"Manufacturer",icon:"pi ml-3",template:o("manufacturers")},{label:"Warehouse",icon:"pi ml-3",template:o("warehouses")}]}],c=n(3668),u=n(2867),d=n(4225),m=n(7765),p=n(8224),v=n(4756),f=n(8252),y=n(8777),E=n(6076),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},h="/inventory/item/",b=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listItems:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(h,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:E.pJ.INVENTORY_ITEM,id:t}}))),[{type:E.pJ.INVENTORY_ITEM,id:"LIST"}]):[{type:E.pJ.INVENTORY_ITEM,id:"LIST"}]}}),addItems:e.mutation({query:function(e){return{url:h,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.INVENTORY_ITEM,id:"LIST"}]}),getItems:e.query({query:function(e){return"".concat(h).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.INVENTORY_ITEM,id:n}]}}),updateItems:e.mutation({query:function(e){var t=e.key,n=g(e,["key"]);return{url:"".concat(h).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:E.pJ.INVENTORY_ITEM,id:null===e||void 0===e?void 0:e.id}]}}),deleteItems:e.mutation({query:function(e){return{url:"".concat(h).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.INVENTORY_ITEM,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),O=b.useAddItemsMutation,T=b.useDeleteItemsMutation,N=b.useGetItemsQuery,I=b.useListItemsQuery,S=b.useUpdateItemsMutation,w=(b.useGetErrorProneQuery,b.endpoints.getItems,"items"),A="Item",M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},L="/inventory/item_type/",q=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listItemTypes:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(L,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:E.pJ.INVENTORY_ITEMTYPE,id:t}}))),[{type:E.pJ.INVENTORY_ITEMTYPE,id:"LIST"}]):[{type:E.pJ.INVENTORY_ITEMTYPE,id:"LIST"}]}}),addItemTypes:e.mutation({query:function(e){return{url:L,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.INVENTORY_ITEMTYPE,id:"LIST"}]}),getItemTypes:e.query({query:function(e){return"".concat(L).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.INVENTORY_ITEMTYPE,id:n}]}}),updateItemTypes:e.mutation({query:function(e){var t=e.key,n=M(e,["key"]);return{url:"".concat(L).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:E.pJ.INVENTORY_ITEMTYPE,id:null===e||void 0===e?void 0:e.id}]}}),deleteItemTypes:e.mutation({query:function(e){return{url:"".concat(L).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.INVENTORY_ITEMTYPE,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),x=q.useAddItemTypesMutation,k=q.useDeleteItemTypesMutation,_=q.useGetItemTypesQuery,j=q.useListItemTypesQuery,R=q.useUpdateItemTypesMutation,W=(q.useGetErrorProneQuery,q.endpoints.getItemTypes,function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}),P="/inventory/item_uom/",U=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listUOMs:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(P,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:E.pJ.UOM,id:t}}))),[{type:E.pJ.UOM,id:"LIST"}]):[{type:E.pJ.UOM,id:"LIST"}]}}),addUOMs:e.mutation({query:function(e){return{url:P,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.UOM,id:"LIST"}]}),getUOMs:e.query({query:function(e){return"".concat(P).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.UOM,id:n}]}}),updateUOMs:e.mutation({query:function(e){var t=e.key,n=W(e,["key"]);return{url:"".concat(P).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:E.pJ.UOM,id:null===e||void 0===e?void 0:e.id}]}}),deleteUOMs:e.mutation({query:function(e){return{url:"".concat(P).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.UOM,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),K=U.useAddUOMsMutation,D=U.useDeleteUOMsMutation,F=U.useGetUOMsQuery,J=U.useListUOMsQuery,Z=U.useUpdateUOMsMutation,Q=(U.useGetErrorProneQuery,U.endpoints.getUOMs,function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}),V="/inventory/manufacturer/",Y=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listManufacturers:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(V,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:E.pJ.INVENTORY_MFGR,id:t}}))),[{type:E.pJ.INVENTORY_MFGR,id:"LIST"}]):[{type:E.pJ.INVENTORY_MFGR,id:"LIST"}]}}),addManufacturers:e.mutation({query:function(e){return{url:V,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.INVENTORY_MFGR,id:"LIST"}]}),getManufacturers:e.query({query:function(e){return"".concat(V).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.INVENTORY_MFGR,id:n}]}}),updateManufacturers:e.mutation({query:function(e){var t=e.key,n=Q(e,["key"]);return{url:"".concat(V).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:E.pJ.INVENTORY_MFGR,id:null===e||void 0===e?void 0:e.id}]}}),deleteManufacturers:e.mutation({query:function(e){return{url:"".concat(V).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.INVENTORY_MFGR,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),H=Y.useAddManufacturersMutation,C=Y.useDeleteManufacturersMutation,G=Y.useGetManufacturersQuery,z=Y.useListManufacturersQuery,B=Y.useUpdateManufacturersMutation,X=(Y.useGetErrorProneQuery,Y.endpoints.getManufacturers,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{s(r.next(e))}catch(t){i(t)}}function o(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))}),$={client_id:"1001",company:"TEST"},ee=function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(!1),o=(0,u.Z)(n,2),s=o[0],y=o[1],g=(0,a.s0)(),h=(0,a.UO)().id,b=parseInt(h||""),T=isNaN(b)||b<=0,I=N(b,{skip:T}),M=I.data,L=I.isLoading,q=O(),x=(0,u.Z)(q,2),k=x[0],_=x[1].isLoading,R=S(),W=(0,u.Z)(R,2),P=W[0],U=W[1].isLoading,K=j({}).data,D=J({}).data,F=z({}).data,Z=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"success",summary:e,detail:n,life:3e3})},Q=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"error",summary:e,detail:n,life:3e3})};return r.createElement(r.Fragment,null,r.createElement(f.F,{ref:t}),r.createElement(i.Rm,{baseRoute:"/".concat(l,"/").concat(w),description:A,id:b,data:M,isUpdating:_||U||s,isLoading:L,onSubmit:function(e){return X(void 0,void 0,void 0,(0,c.Z)().mark((function t(){var n;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!T){t.next=7;break}return t.next=4,k(Object.assign(Object.assign({},e),$)).unwrap();case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,P(Object.assign(Object.assign({},e),$)).unwrap();case 9:n=t.sent;case 10:Z("Success",n.detail),y(!0),setTimeout((function(){g("/".concat(l,"/").concat(w))}),E.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),Q("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){var a,l,o,s,c,u;return r.createElement("div",{className:"pl-8"},r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"id",className:(0,v.AK)("col-2",{"p-error":n.id})},"Item ID*"),r.createElement(d.Qr,{name:"id",control:e,rules:{required:"Item ID is required.",maxLength:{value:25,message:"max 25 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({disabled:!T,id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(a=null===n||void 0===n?void 0:n.id)||void 0===a?void 0:a.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"descr",className:(0,v.AK)("col-2",{"p-error":n.descr})},"Item Description*"),r.createElement(d.Qr,{name:"descr",control:e,rules:{required:"Item Description is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(l=null===n||void 0===n?void 0:n.descr)||void 0===l?void 0:l.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"stocktype",className:(0,v.AK)("col-2",{"p-error":n.stocktype})},"Stock Type*"),r.createElement(d.Qr,{name:"stocktype",control:e,rules:{required:"Stock Type is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(p.L,Object.assign({id:t.name},t,{style:{width:"25%"},className:(0,v.AK)({"p-invalid":n.invalid}),optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:null===K||void 0===K?void 0:K.results}))}}),(0,i.Hb)(null===(o=null===n||void 0===n?void 0:n.stocktype)||void 0===o?void 0:o.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"itemtyp_key",className:(0,v.AK)("col-2",{"p-error":n.itemtyp_key})},"Item Type*"),r.createElement(d.Qr,{name:"itemtyp_key",control:e,rules:{required:"Item Type is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(p.L,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,v.AK)({"p-invalid":n.invalid}),optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:null===K||void 0===K?void 0:K.results}))}}),(0,i.Hb)(null===(s=null===n||void 0===n?void 0:n.itemtyp_key)||void 0===s?void 0:s.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"itemuom_key",className:(0,v.AK)("col-2",{"p-error":n.itemuom_key})},"Item UOM*"),r.createElement(d.Qr,{name:"itemuom_key",control:e,rules:{required:"Item UOM is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(p.L,Object.assign({id:t.name},t,{style:{width:"25%"},className:(0,v.AK)({"p-invalid":n.invalid}),optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:null===D||void 0===D?void 0:D.results}))}}),(0,i.Hb)(null===(c=null===n||void 0===n?void 0:n.itemuom_key)||void 0===c?void 0:c.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"mfr_key",className:(0,v.AK)("col-2",{"p-error":n.mfr_key})},"Manufacturer"),r.createElement(d.Qr,{name:"mfr_key",control:e,rules:{},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(p.L,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,v.AK)({"p-invalid":n.invalid}),optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:null===F||void 0===F?void 0:F.results}))}}),(0,i.Hb)(null===(u=null===n||void 0===n?void 0:n.mfr_key)||void 0===u?void 0:u.message)))}}))},te=n(4401),ne=n(7624),re=function(e){var t=I({}),n=t.data,a=t.isLoading,o=T(),s=(0,u.Z)(o,2),c=s[0],d=s[1].isLoading;return r.createElement(i.PS,{baseRoute:"/".concat(l,"/").concat(w),description:A,isLoading:a||d,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()}},r.createElement(te.s,{headerStyle:ne.iR,field:"id",header:"Item ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),r.createElement(te.s,{headerStyle:ne.iR,field:"descr",header:"Item Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}),r.createElement(te.s,{headerStyle:ne.iR,field:"stocktype",header:"Stock Type",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))},ae=r.createElement(a.AW,{path:"items"},r.createElement(a.AW,{path:"new",element:r.createElement(ee,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(ee,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(re,null)})),ie=n(6770),le=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},oe="/inventory/warehouse/",se=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listWarehouses:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(oe,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,y.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:E.pJ.WAREHOUSE,id:t}}))),[{type:E.pJ.WAREHOUSE,id:"LIST"}]):[{type:E.pJ.WAREHOUSE,id:"LIST"}]}}),addWarehouses:e.mutation({query:function(e){return{url:oe,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.WAREHOUSE,id:"LIST"}]}),getWarehouses:e.query({query:function(e){return"".concat(oe).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.WAREHOUSE,id:n}]}}),updateWarehouses:e.mutation({query:function(e){var t=e.key,n=le(e,["key"]);return{url:"".concat(oe).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:E.pJ.WAREHOUSE,id:null===e||void 0===e?void 0:e.id}]}}),deleteWarehouses:e.mutation({query:function(e){return{url:"".concat(oe).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.WAREHOUSE,id:null===e||void 0===e?void 0:e.id}]}}),getStates:e.query({query:function(){return{url:"/geo/state/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,y.Z)(e.map((function(e){var t=e.state_key;return{type:E.pJ.STATES,id:t}}))),[{type:E.pJ.STATES,id:"LIST"}])}}),getCities:e.query({query:function(){return{url:"/geo/city/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,y.Z)(e.map((function(e){var t=e.city_key;return{type:E.pJ.CITIES,id:t}}))),[{type:E.pJ.CITIES,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),ce=se.useAddWarehousesMutation,ue=se.useDeleteWarehousesMutation,de=se.useGetWarehousesQuery,me=se.useListWarehousesQuery,pe=se.useUpdateWarehousesMutation,ve=(se.useGetErrorProneQuery,se.useGetCitiesQuery),fe=se.useGetStatesQuery,ye=(se.endpoints.getWarehouses,"warehouses"),Ee="Warehouse",ge=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{s(r.next(e))}catch(t){i(t)}}function o(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))},he={client_id:"1001",company:"TEST"},be=function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(!1),o=(0,u.Z)(n,2),s=o[0],y=o[1],g=(0,a.s0)(),h=(0,a.UO)().id,b=parseInt(h||""),O=isNaN(b)||b<=0,T=fe().data,N=ve().data,I=de(b,{skip:O}),S=I.data,w=I.isLoading,A=ce(),M=(0,u.Z)(A,2),L=M[0],q=M[1].isLoading,x=pe(),k=(0,u.Z)(x,2),_=k[0],j=k[1].isLoading,R=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"success",summary:e,detail:n,life:3e3})},W=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"error",summary:e,detail:n,life:3e3})};return r.createElement(r.Fragment,null,r.createElement(f.F,{ref:t}),r.createElement(i.Rm,{baseRoute:"/".concat(l,"/").concat(ye),description:Ee,id:b,data:S,isUpdating:q||j||s,isLoading:w,onSubmit:function(e){return ge(void 0,void 0,void 0,(0,c.Z)().mark((function t(){var n;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!O){t.next=7;break}return t.next=4,L(Object.assign(Object.assign({},e),he)).unwrap();case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,_(Object.assign(Object.assign({},e),he)).unwrap();case 9:n=t.sent;case 10:R("Success",n.detail),y(!0),setTimeout((function(){g("/".concat(l,"/").concat(ye))}),E.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),W("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){var a,l,o,s;return r.createElement("div",{className:"flex"},r.createElement("div",{className:"pl-8 col-10"},r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"id",className:(0,v.AK)("col-3",{"p-error":n.id})},"Warehouse ID*"),r.createElement(d.Qr,{name:"id",control:e,rules:{required:"Warehouse ID is required.",maxLength:{value:25,message:"max 25 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({disabled:!O,id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(a=null===n||void 0===n?void 0:n.id)||void 0===a?void 0:a.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"name",className:(0,v.AK)("col-3",{"p-error":n.name})},"Warehouse Name*"),r.createElement(d.Qr,{name:"name",control:e,rules:{required:"Warehouse Description is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({style:{width:"50%"},id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(l=null===n||void 0===n?void 0:n.name)||void 0===l?void 0:l.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"addr1",className:(0,v.AK)("col-3",{"p-error":n.addr1})}," Address Line 1"),r.createElement(d.Qr,{name:"addr1",control:e,rules:{maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,v.AK)({"p-invalid":n.invalid})}))}})),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"addr2",className:(0,v.AK)("col-3",{"p-error":n.addr2})}," Address Line 2"),r.createElement(d.Qr,{name:"addr2",control:e,rules:{maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({id:t.name},t,{style:{width:"50%"},className:(0,v.AK)({"p-invalid":n.invalid})}))}})),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"state_key",className:(0,v.AK)("col-3",{"p-error":n.state_key})},"State*"),r.createElement(d.Qr,{name:"state_key",control:e,rules:{required:"State is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(p.L,Object.assign({id:t.name},t,{style:{width:"30%"},className:(0,v.AK)({"p-invalid":n.invalid}),optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:T}))}}),(0,i.Hb)(null===(o=null===n||void 0===n?void 0:n.state_key)||void 0===o?void 0:o.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"city_key",className:(0,v.AK)("col-3",{"p-error":n.city_key})},"City*"),r.createElement(d.Qr,{name:"city_key",control:e,rules:{required:"City is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(p.L,Object.assign({id:t.name},t,{style:{width:"30%"},className:(0,v.AK)({"p-invalid":n.invalid}),optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:N}))}}),(0,i.Hb)(null===(s=null===n||void 0===n?void 0:n.city_key)||void 0===s?void 0:s.message))),r.createElement("div",{className:"col-2",style:{marginTop:25}},r.createElement("div",null,r.createElement(ie.z,{onClick:function(e){return e.preventDefault()},label:"Contact",className:"project-page-tags",style:{width:"100%"}}))))}}))},Oe=function(e){var t=me({}),n=t.data,a=t.isLoading,o=ue(),s=(0,u.Z)(o,2),c=s[0],d=s[1].isLoading;return r.createElement(i.PS,{baseRoute:"/".concat(l,"/").concat(ye),description:Ee,isLoading:a||d,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()}},r.createElement(te.s,{headerStyle:ne.iR,field:"id",header:"Warehouse ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),r.createElement(te.s,{headerStyle:ne.iR,field:"name",header:"Warehouse Name",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))},Te=r.createElement(a.AW,{path:"warehouses"},r.createElement(a.AW,{path:"new",element:r.createElement(be,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(be,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(Oe,null)})),Ne="manufacturers",Ie="Manufacturer",Se=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{s(r.next(e))}catch(t){i(t)}}function o(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))},we={client_id:"1001",company:"TEST"},Ae=function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(!1),o=(0,u.Z)(n,2),s=o[0],p=o[1],y=(0,a.s0)(),g=(0,a.UO)().id,h=parseInt(g||""),b=isNaN(h)||h<=0,O=G(h,{skip:b}),T=O.data,N=O.isLoading,I=H(),S=(0,u.Z)(I,2),w=S[0],A=S[1].isLoading,M=B(),L=(0,u.Z)(M,2),q=L[0],x=L[1].isLoading,k=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"success",summary:e,detail:n,life:3e3})},_=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"error",summary:e,detail:n,life:3e3})};return r.createElement(r.Fragment,null,r.createElement(f.F,{ref:t}),r.createElement(i.Rm,{baseRoute:"/".concat(l,"/").concat(Ne),description:Ie,id:h,data:T,isUpdating:A||x||s,isLoading:N,onSubmit:function(e){return Se(void 0,void 0,void 0,(0,c.Z)().mark((function t(){var n;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!b){t.next=7;break}return t.next=4,w(Object.assign(Object.assign({},e),we)).unwrap();case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,q(Object.assign(Object.assign({},e),we)).unwrap();case 9:n=t.sent;case 10:k("Success",n.detail),p(!0),setTimeout((function(){y("/".concat(l,"/").concat(Ne))}),E.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),_("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){var a,l;return r.createElement("div",{className:"pl-8"},r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"id",className:(0,v.AK)("col-3",{"p-error":n.id})},"Manufacturer ID*"),r.createElement(d.Qr,{name:"id",control:e,rules:{required:"Manufacturer ID is required.",maxLength:{value:25,message:"max 25 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({disabled:!b,id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(a=null===n||void 0===n?void 0:n.id)||void 0===a?void 0:a.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"name",className:(0,v.AK)("col-3",{"p-error":n.name})},"Manufacturer Name*"),r.createElement(d.Qr,{name:"name",control:e,rules:{required:"Manufacturer Name is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(l=null===n||void 0===n?void 0:n.name)||void 0===l?void 0:l.message)))}}))},Me=function(e){var t=z({}),n=t.data,a=t.isLoading,o=C(),s=(0,u.Z)(o,2),c=s[0],d=s[1].isLoading;return r.createElement(i.PS,{baseRoute:"/".concat(l,"/").concat(Ne),description:Ie,isLoading:a||d,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()}},r.createElement(te.s,{headerStyle:ne.iR,field:"id",header:"Manufacturer ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),r.createElement(te.s,{headerStyle:ne.iR,field:"name",header:"Manufacturer Name",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))},Le=r.createElement(a.AW,{path:"manufacturers"},r.createElement(a.AW,{path:"new",element:r.createElement(Ae,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(Ae,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(Me,null)})),qe=n(8356),xe="uoms",ke=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{s(r.next(e))}catch(t){i(t)}}function o(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))},_e={client_id:"1001",company:"TEST"},je=function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(!1),o=(0,u.Z)(n,2),s=o[0],y=o[1],g=(0,a.s0)(),h=(0,a.UO)().id,b=parseInt(h||""),O=isNaN(b)||b<=0,T=F(b,{skip:O}),N=T.data,I=T.isLoading,S=K(),w=(0,u.Z)(S,2),A=w[0],M=w[1].isLoading,L=Z(),q=(0,u.Z)(L,2),x=q[0],k=q[1].isLoading,_=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"success",summary:e,detail:n,life:3e3})},j=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"error",summary:e,detail:n,life:3e3})};return r.createElement(r.Fragment,null,r.createElement(f.F,{ref:t}),r.createElement(i.Rm,{baseRoute:"/".concat(l,"/").concat(xe),description:"UOM",id:b,data:N,isUpdating:M||k||s,isLoading:I,onSubmit:function(e){return ke(void 0,void 0,void 0,(0,c.Z)().mark((function t(){var n;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!O){t.next=7;break}return t.next=4,A(Object.assign(Object.assign({},e),_e)).unwrap();case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,x(Object.assign(Object.assign({},e),_e)).unwrap();case 9:n=t.sent;case 10:_("Success",n.detail),y(!0),setTimeout((function(){g("/".concat(l,"/").concat(xe))}),E.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),j("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){var a,l,o,s;return r.createElement("div",{className:"pl-8"},r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"id",className:(0,v.AK)("col-2",{"p-error":n.id})},"UOM ID*"),r.createElement(d.Qr,{name:"id",control:e,rules:{required:"UOM ID is required.",maxLength:{value:25,message:"max 25 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({disabled:!O,id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(a=null===n||void 0===n?void 0:n.id)||void 0===a?void 0:a.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"descr",className:(0,v.AK)("col-2",{"p-error":n.descr})},"UOM Description*"),r.createElement(d.Qr,{name:"descr",control:e,rules:{required:"UOM Description is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(l=null===n||void 0===n?void 0:n.descr)||void 0===l?void 0:l.message)),r.createElement(qe.i,{layout:"horizontal"}),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"std_uom",className:(0,v.AK)("col-3",{"p-error":n.std_uom})},"When Standard UOM"),r.createElement(d.Qr,{defaultValue:"KG",name:"std_uom",control:e,rules:{required:"This field is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(p.L,Object.assign({id:t.name,style:{width:"30%"}},t,{className:(0,v.AK)({"p-invalid":n.invalid}),options:["KG","G"]}))}}),(0,i.Hb)(null===(o=null===n||void 0===n?void 0:n.std_uom)||void 0===o?void 0:o.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"uom_mul",className:(0,v.AK)("col-2",{"p-error":n.uom_mul})},"is multiplied by this"),r.createElement(d.Qr,{defaultValue:"1000",name:"uom_mul",control:e,rules:{required:"This field is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),r.createElement("label",{className:(0,v.AK)("col-4")},"the result will equal the New UOM"),(0,i.Hb)(null===(s=null===n||void 0===n?void 0:n.uom_mul)||void 0===s?void 0:s.message)))}}))},Re=function(e){var t=J({}),n=t.data,a=t.isLoading,o=D(),s=(0,u.Z)(o,2),c=s[0],d=s[1].isLoading;return r.createElement(i.PS,{baseRoute:"/".concat(l,"/").concat(xe),description:"UOM",isLoading:a||d,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()}},r.createElement(te.s,{headerStyle:ne.iR,field:"id",header:"UOM ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),r.createElement(te.s,{headerStyle:ne.iR,field:"descr",header:"UOM Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))},We=r.createElement(a.AW,{path:"uoms"},r.createElement(a.AW,{path:"new",element:r.createElement(je,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(je,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(Re,null)})),Pe="itemtypes",Ue="Item Type",Ke=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{s(r.next(e))}catch(t){i(t)}}function o(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))},De={client_id:"1001",company:"TEST"},Fe=function(e){var t=(0,r.useRef)(null),n=(0,r.useState)(!1),o=(0,u.Z)(n,2),s=o[0],p=o[1],y=(0,a.s0)(),g=(0,a.UO)().id,h=parseInt(g||""),b=isNaN(h)||h<=0,O=_(h,{skip:b}),T=O.data,N=O.isLoading,I=x(),S=(0,u.Z)(I,2),w=S[0],A=S[1].isLoading,M=R(),L=(0,u.Z)(M,2),q=L[0],k=L[1].isLoading,j=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"success",summary:e,detail:n,life:3e3})},W=function(e,n){var r;null===(r=null===t||void 0===t?void 0:t.current)||void 0===r||r.show({severity:"error",summary:e,detail:n,life:3e3})};return r.createElement(r.Fragment,null,r.createElement(f.F,{ref:t}),r.createElement(i.Rm,{baseRoute:"/".concat(l,"/").concat(Pe),description:Ue,id:h,data:T,isUpdating:A||k||s,isLoading:N,onSubmit:function(e){return Ke(void 0,void 0,void 0,(0,c.Z)().mark((function t(){var n;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!b){t.next=7;break}return t.next=4,w(Object.assign(Object.assign({},e),De)).unwrap();case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,q(Object.assign(Object.assign({},e),De)).unwrap();case 9:n=t.sent;case 10:j("Success",n.detail),p(!0),setTimeout((function(){y("/".concat(l,"/").concat(Pe))}),E.P7),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),W("An error occurred","We couldn't save your post, try again!");case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))},renderForm:function(e,t,n){var a,l;return r.createElement("div",{className:"pl-8"},r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"id",className:(0,v.AK)("col-2",{"p-error":n.id})},"Type ID*"),r.createElement(d.Qr,{name:"id",control:e,rules:{required:"ItemType ID is required.",maxLength:{value:25,message:"max 25 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({disabled:!b,id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(a=null===n||void 0===n?void 0:n.id)||void 0===a?void 0:a.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"descr",className:(0,v.AK)("col-2",{"p-error":n.descr})},"Type Description*"),r.createElement(d.Qr,{name:"descr",control:e,rules:{required:"ItemType Description is required.",maxLength:{value:100,message:"max 100 Char"}},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(m.o,Object.assign({style:{width:"40%"},id:t.name},t,{className:(0,v.AK)({"p-invalid":n.invalid})}))}}),(0,i.Hb)(null===(l=null===n||void 0===n?void 0:n.descr)||void 0===l?void 0:l.message)))}}))},Je=function(e){var t=j({}),n=t.data,a=t.isLoading,o=k(),s=(0,u.Z)(o,2),c=s[0],d=s[1].isLoading;return r.createElement(i.PS,{baseRoute:"/".concat(l,"/").concat(Pe),description:Ue,isLoading:a||d,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()}},r.createElement(te.s,{headerStyle:ne.iR,field:"id",header:"ItemType ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),r.createElement(te.s,{headerStyle:ne.iR,field:"descr",header:"ItemType Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))},Ze=r.createElement(a.AW,{path:"itemtypes"},r.createElement(a.AW,{path:"new",element:r.createElement(Fe,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(Fe,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(Je,null)})),Qe=function(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"/",element:r.createElement(i.SV,{navItems:s})},r.createElement(a.AW,{index:!0,element:r.createElement(a.Fg,{to:"items",replace:!0})}),ae,Te,Le,We,Ze,r.createElement(a.AW,{path:":page/comming-soon",element:r.createElement(i.hg,null)}),r.createElement(a.AW,{path:"*",element:r.createElement(i.EN,{relative:!0})})))}},8356:function(e,t,n){n.d(t,{i:function(){return l}});var r=n(969),a=n(4756);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var l=r.forwardRef((function(e,t){var n="horizontal"===e.layout,o="vertical"===e.layout,s=a.gb.findDiffKeys(e,l.defaultProps),c=(0,a.AK)("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":n&&(!e.align||"left"===e.align),"p-divider-right":n&&"right"===e.align,"p-divider-center":n&&"center"===e.align||o&&(!e.align||"center"===e.align),"p-divider-top":o&&"top"===e.align,"p-divider-bottom":o&&"bottom"===e.align},e.className);return r.createElement("div",i({className:c,style:e.style,role:"separator"},s),r.createElement("div",{className:"p-divider-content"},e.children))}));l.displayName="Divider",l.defaultProps={__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null}}}]);
//# sourceMappingURL=620.d6d5f700.chunk.js.map