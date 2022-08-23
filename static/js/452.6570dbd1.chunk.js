"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[452],{7452:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(969),i=n(3026),a=n(6080),o=function(e){return function(t,n){return r.createElement(a.OL,{item:t,options:n,to:e})}},l=[{label:"Transctions",items:[{label:"Material Purchase",icon:"pi ml-3",template:o("/purchase/materialpurchase/comming-soon")},{label:"Miscellaneous Purchase",icon:"pi ml-3",template:o("/purchase/miscpurchase/comming-soon")},{label:"Invoice",icon:"pi ml-3",template:o("/purchase/invoice/comming-soon")},{label:"Payment",icon:"pi ml-3",template:o("/purchase/payment/comming-soon")},{label:"Payment Allocation",icon:"pi ml-3",template:o("/purchase/paymentalloc/comming-soon")}]},{label:"Configuration",items:[{label:"Vendors",icon:"pi ml-3",template:o("/purchase/vendors/comming-soon")},{label:"Vendor Group",icon:"pi ml-3",template:o("/purchase/vendorgroup/comming-soon")},{label:"Vendor Type",icon:"pi ml-3",template:o("/purchase/vendortype")},{label:"AP Terms",icon:"pi ml-3",template:o("/purchase/apterms/comming-soon")}]}],c=n(4225),u=n(7765),d=n(4756),s=n(8777),p=n(6076),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},y="/project/project/",v=p.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listVendorType:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,p.DS)(y,"?page=".concat(t||1,"&page_size=").concat(n||p.IV))}},providesTags:function(e){var t;return e?[].concat((0,s.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:p.pJ.VENDOR_TYPE,id:t}}))),[{type:p.pJ.VENDOR_TYPE,id:"PARTIAL-LIST"}]):[{type:p.pJ.VENDOR_TYPE,id:"PARTIAL-LIST"}]}}),addVendorType:e.mutation({query:function(e){return{url:y,method:"POST",body:e}},invalidatesTags:[{type:p.pJ.VENDOR_TYPE,id:"LIST"}]}),getVendorType:e.query({query:function(e){return"".concat(y).concat(e)},providesTags:function(e,t,n){return[{type:p.pJ.VENDOR_TYPE,id:n}]}}),updateVendorType:e.mutation({query:function(e){var t=e.key,n=m(e,["key"]);return{url:"".concat(y).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:p.pJ.VENDOR_TYPE,id:null===e||void 0===e?void 0:e.id}]}}),deleteVendorType:e.mutation({query:function(e){return{url:"".concat(y).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:p.pJ.VENDOR_TYPE,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),E=(v.useAddVendorTypeMutation,v.useDeleteVendorTypeMutation),f=v.useGetVendorTypeQuery,T=v.useListVendorTypeQuery,h=(v.useUpdateVendorTypeMutation,v.useGetErrorProneQuery,v.endpoints.getVendorType,function(e){var t=(0,i.UO)().id,n=parseInt(t||""),o=f(n,{skip:isNaN(n)||n<=0}),l=(o.data,o.isLoading),s=function(e){return e&&r.createElement("small",{className:"p-error"},e)};return r.createElement(a.Rm,{baseRoute:"/purchase/vendortype",description:"Vendor Type",id:n,isLoading:l,onSubmit:function(e){console.log(e)},renderForm:function(e,t){var n,i;return r.createElement("div",{className:"pl-8"},r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"id",className:(0,d.AK)("col-2",{"p-error":t.id})},"Type ID*"),r.createElement(c.Qr,{name:"id",control:e,rules:{required:"Type ID is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(u.o,Object.assign({id:t.name},t,{autoFocus:!0,className:(0,d.AK)({"p-invalid":n.invalid})}))}}),s(null===(n=null===t||void 0===t?void 0:t.id)||void 0===n?void 0:n.message)),r.createElement("div",{className:"field"},r.createElement("label",{htmlFor:"desc",className:(0,d.AK)("col-2",{"p-error":t.desc})},"Type Description*"),r.createElement(c.Qr,{name:"desc",control:e,rules:{required:"Type Description is required."},render:function(e){var t=e.field,n=e.fieldState;return r.createElement(u.o,Object.assign({id:t.name},t,{autoFocus:!0,className:(0,d.AK)({"p-invalid":n.invalid})}))}}),s(null===(i=null===t||void 0===t?void 0:t.desc)||void 0===i?void 0:i.message)))}})}),g=n(2867),b=n(4401),V=n(7624),P=function(e){var t=T({}),n=t.data,i=t.isLoading,o=E(),l=(0,g.Z)(o,2),c=l[0],u=l[1].isLoading;return r.createElement(a.PS,{baseRoute:"/purchase/vendortype",description:"Vendor Type",isLoading:i||u,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()}},r.createElement(b.s,{headerStyle:V.iR,field:"id",header:"Type ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),r.createElement(b.s,{headerStyle:V.iR,field:"descr",header:"Type Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))},O=r.createElement(i.AW,{path:"vendortype"},r.createElement(i.AW,{path:"new",element:r.createElement(h,null)}),r.createElement(i.AW,{path:":id/edit",element:r.createElement(h,null)}),r.createElement(i.AW,{index:!0,element:r.createElement(P,null)})),A=function(){return r.createElement(i.Z5,null,r.createElement(i.AW,{path:"/",element:r.createElement(a.SV,{navItems:l})},r.createElement(i.AW,{index:!0,element:r.createElement(i.Fg,{to:"vendortype",replace:!0})}),O,r.createElement(i.AW,{path:":purchase/comming-soon",element:r.createElement(a.hg,null)}),r.createElement(i.AW,{path:"*",element:r.createElement(a.EN,{relative:!0})})))}}}]);
//# sourceMappingURL=452.6570dbd1.chunk.js.map