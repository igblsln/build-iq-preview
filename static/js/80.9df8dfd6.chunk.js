"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[80],{80:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(969),i=n(734),r=n(2035),o=n(2711),l="companies",c="Company",u=function(e,t){return(0,r.E7)("/".concat(o.o,"/").concat(e)+(t?"/comming-soon":""))},s=[{items:[{label:"Client",icon:"pi ml-3",template:u("client"),altUrls:"/clients/company"},{label:"Company",icon:"pi ml-3",template:u(l),altUrls:"/clients/company"}]}],d=n(2723),p=n(6234),m=n(7765),f=n(8224),v=n(6770),y=n(8079),g=n(1495),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},h="/client/company/",b=g.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listCompany:e.query({query:function(e){var t=e.page,n=e.size;return{url:"".concat(h,"?page=").concat(t||1,"&page_size=").concat(n||g.IV)}},providesTags:function(e){return e?[].concat((0,y.Z)(null===e||void 0===e?void 0:e.map((function(e){var t=e.id;return{type:g.pJ.COMPANIES,id:t}}))),[{type:g.pJ.COMPANIES,id:"LIST"}]):[{type:g.pJ.COMPANIES,id:"LIST"}]}}),addCompany:e.mutation({query:function(e){return{url:h,method:"POST",body:e}},invalidatesTags:[{type:g.pJ.COMPANIES,id:"LIST"}]}),getCompany:e.query({query:function(e){return"".concat(h).concat(e)},providesTags:function(e,t,n){return[{type:g.pJ.COMPANIES,id:n}]}}),updateCompany:e.mutation({query:function(e){var t=e.id,n=E(e,["id"]);return{url:"".concat(h).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:g.pJ.COMPANIES,id:null===e||void 0===e?void 0:e.id}]}}),deleteCompany:e.mutation({query:function(e){return{url:"".concat(h).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:g.pJ.COMPANIES,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),C=b.useAddCompanyMutation,S=b.useDeleteCompanyMutation,w=b.useGetCompanyQuery,O=b.useListCompanyQuery,P=b.useUpdateCompanyMutation,T=(b.useGetErrorProneQuery,function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}),x="/client/client/",L=g.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listClient:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,g.DS)(x,"?page=".concat(t||1,"&page_size=").concat(n||g.IV))}},providesTags:function(e){return e?[].concat((0,y.Z)(null===e||void 0===e?void 0:e.map((function(e){var t=e.id;return{type:g.pJ.CLIENTS,id:t}}))),[{type:g.pJ.CLIENTS,id:"LIST"}]):[{type:g.pJ.CLIENTS,id:"LIST"}]}}),addClient:e.mutation({query:function(e){return{url:x,method:"POST",body:e}},invalidatesTags:[{type:g.pJ.CLIENTS,id:"LIST"}]}),getClient:e.query({query:function(e){return"".concat(x).concat(e)},providesTags:function(e,t,n){return[{type:g.pJ.CLIENTS,id:n}]}}),updateClient:e.mutation({query:function(e){var t=e.id,n=T(e,["id"]);return{url:"".concat(x).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:g.pJ.CLIENTS,id:null===e||void 0===e?void 0:e.id}]}}),deleteClient:e.mutation({query:function(e){return console.log(e),{url:"".concat(x).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:g.pJ.CLIENTS,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),A=L.useAddClientMutation,N=L.useDeleteClientMutation,I=(L.useGetClientQuery,L.useListClientQuery),j=L.useUpdateClientMutation,Z=(L.useGetErrorProneQuery,L.endpoints.getClient,function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(t){r(t)}}function l(e){try{c(a.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))}),k=[{value:!0,descr:"Active"},{value:!1,descr:"Inactive"}],q=function(e){var t=(0,r.pm)(),n=t.showSuccess,u=t.showError,s=(0,a.useState)(!1),y=(0,p.Z)(s,2),E=y[0],h=y[1],b=(0,i.s0)(),S=(0,i.UO)().id||"",O=!S,T=(0,a.useRef)([]),x=(0,g.ft)(),L=w(S,{skip:O}),A=L.data,N=L.isLoading,j=I({}),q=j.data,_=j.isLoading,W=C(),z=(0,p.Z)(W,2),J=z[0],M=z[1].isLoading,V=P(),R=(0,p.Z)(V,2),F=R[0],D=R[1].isLoading,U=(0,a.useState)([]),G=(0,p.Z)(U,2),Q=G[0],B=G[1];(0,a.useEffect)((function(){A&&(null===A||void 0===A?void 0:A.project_status)&&B(A.project_status)}),[A]);var H=function(e){if(0===e.length)return!0;var t=e[e.length-1];return null===t||void 0===t?void 0:t.descr},K=function(e){return a.createElement(v.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){var t=T.current.filter((function(t){return t.descr!==e.descr}));B(t),T.current=t},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},Y=function(e){var t=e.row,n=e.column,i=e.onRowChange;e.onClose;return a.createElement(f.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"value",options:k,onChange:function(e){var a=Object.assign({},t);a[n.key]=e.value,i(a,!0)},tabIndex:-1})};return a.createElement(a.Fragment,null,a.createElement(r.Rm,{baseRoute:"/".concat(o.o,"/").concat(l),description:c,id:S,data:A,isUpdating:M||D||E,isLoading:N,onSubmit:function(e){return Z(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var a,i,r;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,console.log(T.current),r=Object.assign(Object.assign({},e),{project_status:T.current}),!O){t.next=9;break}return t.next=6,J(Object.assign(Object.assign({},r),x)).unwrap();case 6:i=t.sent,t.next=12;break;case 9:return t.next=11,F(Object.assign(Object.assign({},r),x)).unwrap();case 11:i=t.sent;case 12:n("Success",i.detail),h(!0),setTimeout((function(){b("/".concat(o.o,"/").concat(l))}),g.P7),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),u("An error occurred",(null===(a=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===a?void 0:a.detail)||"We couldn't save your post, try again!");case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))},renderForm:function(e,t,n){return a.createElement("div",{className:"pl-8 pt-4 pb-3 grid p-fluid"},a.createElement(r.Wi,{label:"Company Name",name:"name",className:"col-12",control:e,errors:n,required:"Enter Company Name",leftSpan:2,rightSpan:3,formItem:{component:m.o,componentProps:{maxLength:100}}}),a.createElement(r.Wi,{label:"Client",name:"client",className:"col-12",control:e,errors:n,isLoading:_,required:!0,leftSpan:2,rightSpan:3,useExplicit:!0,formItem:{component:f.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"id",filter:!0,disabled:!O,filterBy:"name",options:q,title:"Can't be Changed Once Added"}}}),a.createElement("div",{className:"row flex",style:{width:"90%"}},a.createElement("div",{className:"col-7"},a.createElement("div",{style:{width:"80%",marginRight:50}},a.createElement(r.PS,{baseRoute:"/".concat(o.o,"/").concat(l),description:c,isLoading:N,data:Q,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,actionBodyTemplate:K,gridProps:{allowAdd:!0,disableAdd:!H(Q),OnRowsChanged:function(e){B(e),T.current=e},newRowDefaults:{is_active:!0,key:null}}},a.createElement(r._P,{field:"descr",header:"Project Status",editorType:"text"}),a.createElement(r._P,{field:"is_active",header:"Active",displayValueGetter:function(e){return e.is_active?"Active":"Inactive"},editorType:Y}))))))}}))},_=function(e){var t=(0,a.useState)(1),n=(0,p.Z)(t,2),i=n[0],u=n[1],s=(0,a.useState)(g.IV),d=(0,p.Z)(s,2),m=d[0],f=d[1],v=O({page:i,size:m},{refetchOnMountOrArgChange:!0}),y=v.data,E=v.isFetching,h=S(),b=(0,p.Z)(h,2),C=b[0],w=b[1].isLoading;return a.createElement(r.PS,{pagination:{pageSize:m,loading:E,currentPage:i,total:null===y||void 0===y?void 0:y.length,onChange:function(e,t){u(e),f(t)}},baseRoute:"/".concat(o.o,"/").concat(l),description:c,isLoading:E||w,data:y,deleteAction:function(e){return C(e).unwrap()},newTable:!0,showHeader:!0,navKey:"id",delKey:"id"},a.createElement(r._P,{field:"id",header:"Company Code",filteringType:"number"}),a.createElement(r._P,{field:"name",header:"Company Name",filteringType:"text"}),a.createElement(r._P,{field:"client",header:"Client",filteringType:"text",displayValueGetter:function(e){return null===e||void 0===e?void 0:e.name}}),a.createElement(r._P,{field:"project_status",header:"Project Statuses",displayValueGetter:function(e){var t;return null===(t=null===e||void 0===e?void 0:e.project_status)||void 0===t?void 0:t.map((function(e){return e.descr})).join(",")},filteringType:"text"}))},W=a.createElement(i.AW,{path:l},a.createElement(i.AW,{path:"new",element:a.createElement(q,null)}),a.createElement(i.AW,{path:":id/edit",element:a.createElement(q,null)}),a.createElement(i.AW,{index:!0,element:a.createElement(_,null)})),z=n(9002),J=function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(t){r(t)}}function l(e){try{c(a.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},M=function(e){var t=(0,r.pm)(),n=t.showSuccess,i=t.showError,o=(0,a.useState)(1),l=(0,p.Z)(o,2),c=l[0],u=l[1],s=(0,a.useState)(g.IV),f=(0,p.Z)(s,2),y=f[0],E=f[1],h=(0,a.useState)(!1),b=(0,p.Z)(h,2),C=b[0],S=b[1],w=(0,a.useState)(!1),O=(0,p.Z)(w,2),P=O[0],T=O[1],x=(0,a.useState)({}),L=(0,p.Z)(x,2),Z=L[0],k=L[1],q=(0,a.useState)(!0),_=(0,p.Z)(q,2),W=_[0],M=_[1],V=(0,g.ft)(),R=I({page:c,size:y}),F=R.data,D=R.isFetching,U=A(),G=(0,p.Z)(U,2),Q=G[0],B=G[1].isLoading,H=j(),K=(0,p.Z)(H,2),Y=K[0],X=K[1].isLoading,$=N(),ee=(0,p.Z)($,2),te=ee[0],ne=ee[1].isLoading,ae=a.createElement(v.z,{className:"ml-3",label:"Add",onClick:function(){M(!0),k({}),S(!0)}});return a.createElement(a.Fragment,null,a.createElement(r.PS,{pagination:{pageSize:y,loading:D,currentPage:c,total:null===F||void 0===F?void 0:F.length,onChange:function(e,t){u(e),E(t)}},hideAddButton:!0,customEditOnClick:function(e){M(!1),k(e),S(!0)},customAddBtn:ae,baseRoute:"/clients/client",description:"Clients",isLoading:D||ne,data:F,newTable:!0,showHeader:!0,delKey:"id",deleteAction:function(e){return console.log(e),te(e).unwrap()}},a.createElement(r._P,{filteringType:"text",field:"id",header:"Client Code",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),a.createElement(r._P,{filteringType:"text",field:"name",header:"Client Name",sortable:!0,filter:!0,style:{minWidth:"12rem"}})),a.createElement(z.V,{header:"".concat(W?"Add":"Edit"," Client"),visible:C,footer:function(){return a.createElement("div",null,a.createElement(v.z,{label:"Save",loading:B||X,className:"p-button-warning mr-3",onClick:function(){return J(void 0,void 0,void 0,(0,d.Z)().mark((function e(){var t,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null===Z||void 0===Z?void 0:Z.name){e.next=4;break}return i("Name Field is Empty","Please Enter a Name"),e.abrupt("return");case 4:if(!W){e.next=10;break}return e.next=7,Q(Object.assign(Object.assign({},Z),V)).unwrap();case 7:a=e.sent,e.next=13;break;case 10:return e.next=12,Y(Object.assign(Object.assign({},Z),V)).unwrap();case 12:a=e.sent;case 13:n("Success",a.detail),setTimeout((function(){T(!1),S(!1)}),g.P7),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),i("An error occurred",(null===(t=null===e.t0||void 0===e.t0?void 0:e.t0.data)||void 0===t?void 0:t.detail)||"We couldn't save your post, try again!");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))}}),a.createElement(v.z,{label:"Discard",loading:B||X,className:"p-button-plain",onClick:function(){P?confirm("Are You Sure to Discard?")&&S(!1):S(!1)}}))},position:"center",modal:!0,style:{width:"50vw"},onHide:function(){return S(!1)},draggable:!1,resizable:!1,closable:!1},a.createElement("div",{style:{padding:15}},a.createElement("div",{className:"field"},a.createElement("label",{style:{fontSize:18},className:"col-2"},"Name*"),a.createElement(m.o,{style:{width:"30%"},defaultValue:null===Z||void 0===Z?void 0:Z.name,onChange:function(e){!P&&T(!0),k(Object.assign(Object.assign({},Z),{name:e.target.value}))}})))))},V=a.createElement(i.AW,{path:"client"},a.createElement(i.AW,{index:!0,element:a.createElement(M,null)})),R=function(){var e,t,n,o,l,c,u=(0,g.aC)();null===(n=null===(t=null===(e=u.user)||void 0===e?void 0:e.role[0])||void 0===t?void 0:t.access)||void 0===n||n.map((function(e){return e.name}));return a.createElement(i.Z5,null,(null===(c=null===(l=null===(o=u.user)||void 0===o?void 0:o.role[0])||void 0===l?void 0:l.name)||void 0===c?void 0:c.toLowerCase().includes("admin"))?a.createElement(i.AW,{path:"/",element:a.createElement(r.SV,{navItems:s})},a.createElement(i.AW,{index:!0,element:a.createElement(i.Fg,{to:"client",replace:!0})}),W,V,a.createElement(i.AW,{path:":page/comming-soon",element:a.createElement(r.hg,null)}),a.createElement(i.AW,{path:"*",element:a.createElement(r.EN,{relative:!0})})):a.createElement(i.AW,{path:"/",element:a.createElement(r.SV,{navItems:s})},a.createElement(i.AW,{path:"*",element:a.createElement(r.Sd,{relative:!0})})))}}}]);
//# sourceMappingURL=80.9df8dfd6.chunk.js.map