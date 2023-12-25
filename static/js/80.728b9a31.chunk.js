"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[80],{80:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(969),i=n(734),r=n(2035),o=n(2711),l="companies",c="Company",u=function(e,t){return(0,r.E7)("/".concat(o.o,"/").concat(e)+(t?"/comming-soon":""))},s=[{items:[{label:"Client",icon:"pi ml-3",template:u("client"),altUrls:"/clients/company"},{label:"Company",icon:"pi ml-3",template:u(l),altUrls:"/clients/company"}]}],d=n(2723),p=n(6234),m=n(7765),f=n(8224),v=n(6770),y=n(9459),g=n(8079),E=n(1495),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},b="/client/company/",C=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listCompany:e.query({query:function(e){var t=e.page,n=e.size;return{url:"".concat(b,"?page=").concat(t||1,"&page_size=").concat(n||E.IV)}},providesTags:function(e){return e?[].concat((0,g.Z)(null===e||void 0===e?void 0:e.map((function(e){var t=e.id;return{type:E.pJ.COMPANIES,id:t}}))),[{type:E.pJ.COMPANIES,id:"LIST"}]):[{type:E.pJ.COMPANIES,id:"LIST"}]}}),addCompany:e.mutation({query:function(e){return{url:b,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.COMPANIES,id:"LIST"}]}),getCompany:e.query({query:function(e){return"".concat(b).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.COMPANIES,id:n}]}}),updateCompany:e.mutation({query:function(e){var t=e.id,n=h(e,["id"]);return{url:"".concat(b).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:E.pJ.COMPANIES,id:null===e||void 0===e?void 0:e.id}]}}),deleteCompany:e.mutation({query:function(e){return{url:"".concat(b).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.COMPANIES,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),S=C.useAddCompanyMutation,w=C.useDeleteCompanyMutation,O=C.useGetCompanyQuery,T=C.useListCompanyQuery,P=C.useUpdateCompanyMutation,x=(C.useGetErrorProneQuery,function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}),L="/client/client/",A=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listClient:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(L,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){return e?[].concat((0,g.Z)(null===e||void 0===e?void 0:e.map((function(e){var t=e.id;return{type:E.pJ.CLIENTS,id:t}}))),[{type:E.pJ.CLIENTS,id:"LIST"}]):[{type:E.pJ.CLIENTS,id:"LIST"}]}}),addClient:e.mutation({query:function(e){return{url:L,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.CLIENTS,id:"LIST"}]}),getClient:e.query({query:function(e){return"".concat(L).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.CLIENTS,id:n}]}}),updateClient:e.mutation({query:function(e){var t=e.id,n=x(e,["id"]);return{url:"".concat(L).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:E.pJ.CLIENTS,id:null===e||void 0===e?void 0:e.id}]}}),deleteClient:e.mutation({query:function(e){return console.log(e),{url:"".concat(L).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.CLIENTS,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),N=A.useAddClientMutation,I=A.useDeleteClientMutation,j=(A.useGetClientQuery,A.useListClientQuery),k=A.useUpdateClientMutation,Z=(A.useGetErrorProneQuery,A.endpoints.getClient,function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(t){r(t)}}function l(e){try{c(a.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))}),q=[{value:!0,descr:"Active"},{value:!1,descr:"Inactive"}],_=function(e){var t=(0,r.pm)(),n=t.showSuccess,u=t.showError,s=(0,a.useState)(!1),g=(0,p.Z)(s,2),h=g[0],b=g[1],C=(0,i.s0)(),w=(0,i.UO)().id||"",T=!w,x=(0,a.useRef)([]),L=(0,E.ft)(),A=O(w,{skip:T}),N=A.data,I=A.isLoading,k=j({}),_=k.data,W=k.isLoading,M=S(),z=(0,p.Z)(M,2),J=z[0],V=z[1].isLoading,R=P(),F=(0,p.Z)(R,2),D=F[0],U=F[1].isLoading,G=(0,a.useState)([]),Q=(0,p.Z)(G,2),B=Q[0],H=Q[1];(0,a.useEffect)((function(){N&&(null===N||void 0===N?void 0:N.project_status)&&H(N.project_status)}),[N]);var K=function(e){if(0===e.length)return!0;var t=e[e.length-1];return null===t||void 0===t?void 0:t.descr},Y=function(e){return a.createElement(v.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){console.log(e);var t=x.current.filter((function(t){return t.descr!==e.descr}));H(t),console.log(t),x.current=t},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},X=function(e){var t=e.row,n=e.column,i=e.onRowChange;e.onClose;return a.createElement(f.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"value",options:q,onChange:function(e){var a=Object.assign({},t);a[n.key]=e.value,i(a,!0)},tabIndex:-1})};return a.createElement(a.Fragment,null,a.createElement(r.Rm,{baseRoute:"/".concat(o.o,"/").concat(l),description:c,id:w,data:N,isUpdating:V||U||h,isLoading:I,onSubmit:function(e){return Z(void 0,void 0,void 0,(0,d.Z)().mark((function t(){var a,i,r;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,console.log(x.current),r=Object.assign(Object.assign({},e),{project_status:x.current}),!T){t.next=9;break}return t.next=6,J(Object.assign(Object.assign({},r),L)).unwrap();case 6:i=t.sent,t.next=12;break;case 9:return t.next=11,D(Object.assign(Object.assign({},r),L)).unwrap();case 11:i=t.sent;case 12:n("Success",i.detail),b(!0),setTimeout((function(){C("/".concat(o.o,"/").concat(l))}),E.P7),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),u("An error occurred",(null===(a=null===t.t0||void 0===t.t0?void 0:t.t0.data)||void 0===a?void 0:a.detail)||"We couldn't save your post, try again!");case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))},renderForm:function(e,t,n){return a.createElement("div",{className:"pl-8 pt-4 pb-3 grid p-fluid"},a.createElement(r.Wi,{label:"Company Name",name:"name",className:"col-12",control:e,errors:n,required:"Enter Company Name",leftSpan:2,rightSpan:3,formItem:{component:m.o,componentProps:{maxLength:100}}}),a.createElement(y.u,{mouseTrack:!0,mouseTrackLeft:10,target:"#company-client",position:"top",content:"Can't Be Modified Once Added",className:"my-tooltip"}),a.createElement(r.Wi,{label:"Client",name:"client",className:"col-12",control:e,errors:n,isLoading:W,required:!0,leftSpan:2,rightSpan:3,useExplicit:!0,formItem:{component:f.L,componentProps:{showClear:!0,optionLabel:"name",optionValue:"id",filter:!0,id:"company-client",disabled:!T,filterBy:"name",options:_}}}),a.createElement("div",{className:"row flex",style:{width:"90%"}},a.createElement("div",{className:"col-7"},a.createElement("div",{style:{width:"80%",marginRight:50}},a.createElement(r.PS,{baseRoute:"/".concat(o.o,"/").concat(l),description:c,isLoading:I,data:B,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,actionBodyTemplate:Y,gridProps:{allowAdd:!0,disableAdd:!K(B),OnRowsChanged:function(e){H(e),x.current=e},newRowDefaults:{is_active:!0,key:null}}},a.createElement(r._P,{field:"descr",header:"Project Status",editorType:"text"}),a.createElement(r._P,{field:"is_active",header:"Active",displayValueGetter:function(e){return e.is_active?"Active":"Inactive"},editorType:X}))))))}}))},W=function(e){var t=(0,a.useState)(1),n=(0,p.Z)(t,2),i=n[0],u=n[1],s=(0,a.useState)(E.IV),d=(0,p.Z)(s,2),m=d[0],f=d[1],v=T({page:i,size:m},{refetchOnMountOrArgChange:!0}),y=v.data,g=v.isFetching,h=w(),b=(0,p.Z)(h,2),C=b[0],S=b[1].isLoading;return a.createElement(r.PS,{pagination:{pageSize:m,loading:g,currentPage:i,total:null===y||void 0===y?void 0:y.length,onChange:function(e,t){u(e),f(t)}},baseRoute:"/".concat(o.o,"/").concat(l),description:c,isLoading:g||S,data:y,deleteAction:function(e){return C(e).unwrap()},newTable:!0,showHeader:!0,navKey:"id",delKey:"id"},a.createElement(r._P,{field:"id",header:"Company Code",filteringType:"number"}),a.createElement(r._P,{field:"name",header:"Company Name",filteringType:"text"}),a.createElement(r._P,{field:"client",header:"Client",filteringType:"text",displayValueGetter:function(e){return null===e||void 0===e?void 0:e.name}}),a.createElement(r._P,{field:"project_status",header:"Project Statuses",displayValueGetter:function(e){var t;return null===(t=null===e||void 0===e?void 0:e.project_status)||void 0===t?void 0:t.map((function(e){return e.descr})).join(",")},filteringType:"text"}))},M=a.createElement(i.AW,{path:l},a.createElement(i.AW,{path:"new",element:a.createElement(_,null)}),a.createElement(i.AW,{path:":id/edit",element:a.createElement(_,null)}),a.createElement(i.AW,{index:!0,element:a.createElement(W,null)})),z=n(9002),J=function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(t){r(t)}}function l(e){try{c(a.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))},V=function(e){var t=(0,r.pm)(),n=t.showSuccess,i=t.showError,o=(0,a.useState)(1),l=(0,p.Z)(o,2),c=l[0],u=l[1],s=(0,a.useState)(E.IV),f=(0,p.Z)(s,2),y=f[0],g=f[1],h=(0,a.useState)(!1),b=(0,p.Z)(h,2),C=b[0],S=b[1],w=(0,a.useState)(!1),O=(0,p.Z)(w,2),T=O[0],P=O[1],x=(0,a.useState)({}),L=(0,p.Z)(x,2),A=L[0],Z=L[1],q=(0,a.useState)(!0),_=(0,p.Z)(q,2),W=_[0],M=_[1],V=(0,E.ft)(),R=j({page:c,size:y}),F=R.data,D=R.isFetching,U=N(),G=(0,p.Z)(U,2),Q=G[0],B=G[1].isLoading,H=k(),K=(0,p.Z)(H,2),Y=K[0],X=K[1].isLoading,$=I(),ee=(0,p.Z)($,2),te=ee[0],ne=ee[1].isLoading,ae=a.createElement(v.z,{className:"ml-3",label:"Add",onClick:function(){M(!0),Z({}),S(!0)}});return a.createElement(a.Fragment,null,a.createElement(r.PS,{pagination:{pageSize:y,loading:D,currentPage:c,total:null===F||void 0===F?void 0:F.length,onChange:function(e,t){u(e),g(t)}},hideAddButton:!0,customEditOnClick:function(e){M(!1),Z(e),S(!0)},customAddBtn:ae,baseRoute:"/clients/client",description:"Clients",isLoading:D||ne,data:F,newTable:!0,showHeader:!0,delKey:"id",deleteAction:function(e){return console.log(e),te(e).unwrap()}},a.createElement(r._P,{filteringType:"text",field:"id",header:"Client Code",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),a.createElement(r._P,{filteringType:"text",field:"name",header:"Client Name",sortable:!0,filter:!0,style:{minWidth:"12rem"}})),a.createElement(z.V,{header:"".concat(W?"Add":"Edit"," Client"),visible:C,footer:function(){return a.createElement("div",null,a.createElement(v.z,{label:"Save",loading:B||X,className:"p-button-warning mr-3",onClick:function(){return J(void 0,void 0,void 0,(0,d.Z)().mark((function e(){var t,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null===A||void 0===A?void 0:A.name){e.next=4;break}return i("Name Field is Empty","Please Enter a Name"),e.abrupt("return");case 4:if(!W){e.next=10;break}return e.next=7,Q(Object.assign(Object.assign({},A),V)).unwrap();case 7:a=e.sent,e.next=13;break;case 10:return e.next=12,Y(Object.assign(Object.assign({},A),V)).unwrap();case 12:a=e.sent;case 13:n("Success",a.detail),setTimeout((function(){P(!1),S(!1)}),E.P7),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),i("An error occurred",(null===(t=null===e.t0||void 0===e.t0?void 0:e.t0.data)||void 0===t?void 0:t.detail)||"We couldn't save your post, try again!");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))}}),a.createElement(v.z,{label:"Discard",loading:B||X,className:"p-button-plain",onClick:function(){T?confirm("Are You Sure to Discard?")&&S(!1):S(!1)}}))},position:"center",modal:!0,style:{width:"50vw"},onHide:function(){return S(!1)},draggable:!1,resizable:!1,closable:!1},a.createElement("div",{style:{padding:15}},a.createElement("div",{className:"field"},a.createElement("label",{style:{fontSize:18},className:"col-2"},"Name*"),a.createElement(m.o,{style:{width:"30%"},defaultValue:null===A||void 0===A?void 0:A.name,onChange:function(e){!T&&P(!0),Z(Object.assign(Object.assign({},A),{name:e.target.value}))}})))))},R=a.createElement(i.AW,{path:"client"},a.createElement(i.AW,{index:!0,element:a.createElement(V,null)})),F=function(){var e,t,n,o,l,c,u=(0,E.aC)();null===(n=null===(t=null===(e=u.user)||void 0===e?void 0:e.role[0])||void 0===t?void 0:t.access)||void 0===n||n.map((function(e){return e.name}));return a.createElement(i.Z5,null,(null===(c=null===(l=null===(o=u.user)||void 0===o?void 0:o.role[0])||void 0===l?void 0:l.name)||void 0===c?void 0:c.toLowerCase().includes("admin"))?a.createElement(i.AW,{path:"/",element:a.createElement(r.SV,{navItems:s})},a.createElement(i.AW,{index:!0,element:a.createElement(i.Fg,{to:"client",replace:!0})}),M,R,a.createElement(i.AW,{path:":page/comming-soon",element:a.createElement(r.hg,null)}),a.createElement(i.AW,{path:"*",element:a.createElement(r.EN,{relative:!0})})):a.createElement(i.AW,{path:"/",element:a.createElement(r.SV,{navItems:s})},a.createElement(i.AW,{path:"*",element:a.createElement(r.Sd,{relative:!0})})))}}}]);
//# sourceMappingURL=80.728b9a31.chunk.js.map