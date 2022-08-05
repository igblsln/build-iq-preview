"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[552],{5552:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var a=r(969),l=r(3026),n=r(3225),i=r(4716),o=r(4756),s=function(e){var t=e.to,r=e.item,n=e.options,s=(0,l.WU)(t),c=(0,l.bS)({path:s.pathname,end:!1});return a.createElement(i.rU,{style:{textDecoration:"none"},to:t,className:(0,o.AK)(n.className,c?"p-menuitem-active":""),target:r.target},a.createElement("span",{className:(0,o.AK)(n.iconClassName)}),a.createElement("span",{className:n.labelClassName},r.label))},c=function(e){return function(t,r){return a.createElement(s,{item:t,options:r,to:e})}},d=[{label:"Vendors",items:[{label:"Purchase Receipts",icon:"pi ml-3"}]},{label:"Materials",items:[{label:"Material Issues",icon:"pi ml-3"},{label:"Material Returns",icon:"pi ml-3"}]},{label:"Configuration",items:[{label:"Projects",icon:"pi ml-3",template:c("/projects/project")},{label:"Tasks",icon:"pi ml-3"},{label:"Cost Codes",icon:"pi ml-3",template:c("/projects/costcode")},{label:"Cost Category",icon:"pi ml-3",template:c("/projects/costcategory")},{label:"Material Brands",icon:"pi ml-3"},{label:"Amenities",icon:"pi ml-3"},{label:"Project Types",icon:"pi ml-3"},{label:"Approvals",icon:"pi ml-3"},{label:"Bill of Quantity",icon:"pi ml-3"}]}],m=r(4225),u=r(6770),p=r(5103),y=r(4755),g=r(3829),h=[{name:"projectId",label:"Project ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"projectName",label:"Project Name",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"projectType",label:"Project Type",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:["Stilt+1","Stilt+2"]},{name:"addressLine1",label:"Address Line 1",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"addressLine2",label:"Address Line 2",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"state",label:"State",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:["Andra","Kerala","Delhi"]},{name:"city",label:"City",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:[{label:"Create",items:[{label:"Chennai",value:"Chennai"},{label:"Delhi",value:"Delhi"},{label:"Kovai",value:"Kovai"}]}],createOption:!0,navigatePath:"/projects/city"},{name:"posessionBy",label:"Posession By",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"totalLandArea",label:"Total Land Area (SqFt)",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"noOfUnits",label:"No Of Units",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"projectStatus",label:"Project Status",inputType:"dropdown",width:"60%",error_message:"This Field is required",dropdownOption:["Pending","Completed"]},{name:"salePrice",label:"Sale Price (SqFt)",inputType:"textField",width:"50%",error_message:"This Field is required"}],E=function(){var e=(0,l.s0)(),t=(0,m.cI)(),r=t.control,i=t.formState.errors,o=t.handleSubmit,s=t.reset;return a.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},a.createElement(g.s,{headerTemplate:a.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:a.createElement("h3",null,"Project/New"),right:a.createElement(a.Fragment,null,a.createElement(u.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),a.createElement(u.z,{label:"Discard",className:"p-button-plain",onClick:function(){return e("/projects")}}))})},a.createElement("div",{className:"flex"},a.createElement("div",{className:"col-7"},a.createElement("div",{className:"card",style:{width:"100%"}},a.createElement("div",{className:"flex justify-content-center",style:{width:"inherit"}},a.createElement(n.yV,{handleSubmit:o,onSubmit:function(e){console.log(e)},control:r,errors:i,formFields:h,reset:s})))),a.createElement("div",{className:"col-5"},a.createElement("div",{className:"flex"},a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Stage/Tasks",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Payment",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Estimates",className:"project-page-tags",style:{width:"100%"}}))),a.createElement("div",{className:"flex"},a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Floor/Units",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Material Specs",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Bill of Qty",className:"project-page-tags",style:{width:"100%"}}))),a.createElement("div",{className:"flex"},a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Availability",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Proximity",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Approvals",className:"project-page-tags",style:{width:"100%"}}))),a.createElement("div",{className:"flex"},a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Change Status",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Amenities",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Addl Desc",className:"project-page-tags",style:{width:"100%"}}))),a.createElement("div",{className:"flex"},a.createElement("div",{className:"col-4"},a.createElement(u.z,{label:"Change Price",className:"project-page-tags",style:{width:"100%"}}),a.createElement(u.z,{label:"Contacts",className:"project-page-tags",style:{width:"100%"}})),a.createElement("div",{className:"col-8"},a.createElement(p.E,{preview:!0,width:"100%",style:{padding:30,marginTop:"auto"},src:"https://www.primefaces.org/primereact/images/galleria/galleria7.jpg",alt:"Image Text"}),a.createElement(u.z,{className:"p-button-warning mr-3",style:{width:"100%"},label:"Add Image"})))))))},b=r(4401),f=r(8301),v=r(8777),C=r(4750),w=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]])}return r},j=C.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getProjects:e.query({query:function(){return console.log("projects.json"),{url:"projects.json"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,v.Z)(e.map((function(e){return{type:"Projects",id:e.id}}))),[{type:"Projects",id:"LIST"}])}}),addProject:e.mutation({query:function(e){return{url:"",method:"POST",body:e}},invalidatesTags:[{type:"Projects",id:"LIST"}]}),getProject:e.query({query:function(e){return"projects/".concat(e)},providesTags:function(e,t,r){return[{type:"Projects",id:r}]}}),updateProject:e.mutation({query:function(e){var t=e.id,r=w(e,["id"]);return{url:"projects/".concat(t),method:"PUT",body:r}},invalidatesTags:function(e){return[{type:"Projects",id:null===e||void 0===e?void 0:e.id}]}}),deleteProject:e.mutation({query:function(e){return{url:"projects/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:"Projects",id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),N=(j.useAddProjectMutation,j.useDeleteProjectMutation,j.useGetProjectQuery,j.useGetProjectsQuery),T=(j.useUpdateProjectMutation,j.useGetErrorProneQuery,j.endpoints.getProject,function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]])}return r}),S=C.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getCostCategories:e.query({query:function(){return console.log("costCategories.json"),{url:"costCategories.json"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,v.Z)(e.map((function(e){return{type:"CostCategories",id:e.id}}))),[{type:"CostCategories",id:"LIST"}])}}),addCostCategory:e.mutation({query:function(e){return{url:"",method:"POST",body:e}},invalidatesTags:[{type:"CostCategories",id:"LIST"}]}),getCostCategory:e.query({query:function(e){return"costCategories/".concat(e)},providesTags:function(e,t,r){return[{type:"CostCategories",id:r}]}}),updateCostCategory:e.mutation({query:function(e){var t=e.id,r=T(e,["id"]);return{url:"costCategories/".concat(t),method:"PUT",body:r}},invalidatesTags:function(e){return[{type:"CostCategories",id:null===e||void 0===e?void 0:e.id}]}}),deleteCostCategory:e.mutation({query:function(e){return{url:"costCategories/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:"CostCategories",id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),x=(S.useAddCostCategoryMutation,S.useDeleteCostCategoryMutation,S.useGetCostCategoryQuery,S.useGetCostCategoriesQuery),P=(S.useUpdateCostCategoryMutation,S.endpoints.getCostCategory,function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(r[a[l]]=e[a[l]])}return r}),q=C.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getCostCodes:e.query({query:function(){return console.log("costCodes.json"),{url:"costCodes.json"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,v.Z)(e.map((function(e){return{type:"CostCodes",id:e.id}}))),[{type:"CostCodes",id:"LIST"}])}}),addCostCode:e.mutation({query:function(e){return{url:"",method:"POST",body:e}},invalidatesTags:[{type:"CostCodes",id:"LIST"}]}),getCostCode:e.query({query:function(e){return"costCodes/".concat(e)},providesTags:function(e,t,r){return[{type:"CostCodes",id:r}]}}),updateCostCode:e.mutation({query:function(e){var t=e.id,r=P(e,["id"]);return{url:"costCodes/".concat(t),method:"PUT",body:r}},invalidatesTags:function(e){return[{type:"CostCodes",id:null===e||void 0===e?void 0:e.id}]}}),deleteCostCode:e.mutation({query:function(e){return{url:"costCodes/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:"CostCodes",id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),F=(q.useAddCostCodeMutation,q.useDeleteCostCodeMutation,q.useGetCostCodeQuery,q.useGetCostCodesQuery),A=(q.useUpdateCostCodeMutation,q.endpoints.getCostCode,r(8356)),O=r(7723),D=function(e){return null===e||void 0===e?void 0:e.toLocaleString("en-US",{style:"currency",currency:"INR"})},I=function(e,t){return"".concat((0,O.Z)(new Date(e),t||"dd-MM-yyyy"))},W={width:"4rem",textAlign:"center",color:"white"},z=Object.assign(Object.assign({},W),{width:"1em"}),k=function(e){var t=e.data;return a.createElement(g.s,{className:"project-grid",header:t.name,icons:a.createElement(u.z,{className:"p-button-rounded p-button-help p-button-text","aria-label":"Favorite",icon:"pi pi-eye"})},a.createElement("div",{className:"flex"},a.createElement("div",{className:"grid",style:{paddingTop:"5px"}},a.createElement("div",{className:"col-6"},"State/City"),a.createElement("div",{className:"col-6"},t.state,"/",t.city),a.createElement("div",{className:"col-6"},"Project Type"),a.createElement("div",{className:"col-6"},t.type),a.createElement("div",{className:"col-6"},"Total Units"),a.createElement("div",{className:"col-6"},t.totalUnits),a.createElement("div",{className:"col-6"},"Price/",t.priceUnit),a.createElement("div",{className:"col-6"},D(t.price)),a.createElement("div",{className:"col-6"},"Status"),a.createElement("div",{className:"col-6"},t.status),a.createElement("div",{className:"col-6"},"Possesion By"),a.createElement("div",{className:"col-6"},I(t.possession))),a.createElement(A.i,{layout:"vertical"}),a.createElement(p.E,{src:"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:"Image",width:"125"})))},_=function(){var e=N(),t=e.data;if(e.isLoading)return a.createElement("div",null,"Loading");if(!t)return a.createElement("div",null,"No projects :(");return a.createElement("div",{className:"dataview-demo"},a.createElement("div",{className:"card"},a.createElement(n.Si,{data:t,itemTemplate:function(e){if(e)return a.createElement("div",{className:"col-12 md:col-6 p-1"},a.createElement(k,{data:e}))},header:a.createElement("div",{className:"flex"},a.createElement("h3",{className:"m-0 my-auto"},"Project"),a.createElement(i.rU,{to:"/projects/project/new",style:{textDecoration:"none"}},a.createElement(u.z,{label:"Create",className:"ml-3"})))},a.createElement(b.s,{headerStyle:{width:"3rem",textAlign:"center"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return a.createElement(u.z,{icon:"pi pi-eye",className:"p-button-rounded p-button-text"})}}),a.createElement(b.s,{field:"name",header:"Project Name",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"10rem"}}),a.createElement(b.s,{header:"State/City",sortable:!0,filterMenuStyle:{width:"14rem"},style:{minWidth:"10rem"},body:function(e){return"".concat(e.state,"/").concat(e.city)}}),a.createElement(b.s,{field:"type",header:"Project Type",sortable:!0,filterMenuStyle:{width:"14rem"},style:{minWidth:"10rem"}}),a.createElement(b.s,{field:"totalUnits",header:"Total Units",bodyStyle:{textAlign:"center"},sortable:!0,dataType:"numeric",style:{minWidth:"8rem"}}),a.createElement(b.s,{field:"price",header:"Price/sqft",bodyStyle:{textAlign:"center"},sortable:!0,dataType:"numeric",style:{minWidth:"8rem"},body:function(e){return D(e.price)},filter:!0,filterElement:function(e){return a.createElement(f.R,{value:e.value,onChange:function(t){return e.filterCallback(t.value,e.index)},mode:"currency",currency:"USD",locale:"en-US"})}}),a.createElement(b.s,{field:"status",header:"Status",sortable:!0,showFilterMatchModes:!1,style:{minWidth:"10rem"}}),a.createElement(b.s,{field:"possession",header:"Possesion By",sortable:!0,showFilterMatchModes:!1,style:{minWidth:"10rem"},body:function(e){return I(e.possession)}}))))},L=a.createElement(l.AW,{path:"project"},a.createElement(l.AW,{path:"new",element:a.createElement(E,null)}),a.createElement(l.AW,{path:":projectId/edit",element:a.createElement(E,null)}),a.createElement(l.AW,{index:!0,element:a.createElement(_,null)})),M=[{name:"costId",label:"Cost ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"costDesc",label:"Cost Description",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"costCategory",label:"Cost Category",inputType:"dropdown",width:"100%",error_message:"This Field is required",dropdownOption:["Sand","Cement","Fittings"]}],U=function(){var e=(0,l.s0)(),t=(0,m.cI)(),r=t.control,i=t.formState,o=i.errors,s=i.isDirty,c=t.handleSubmit,d=t.reset;return a.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},a.createElement(g.s,{headerTemplate:a.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:a.createElement("h3",null,"Cost Code/New"),right:a.createElement(a.Fragment,null,a.createElement(u.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),a.createElement(u.z,{label:"Discard",className:"p-button-plain",onClick:function(){s?window.confirm("Are You Sure to Discard ?")&&e("/projects/costcode"):e("/projects/costcode")}}))})},a.createElement("div",{className:"card"},a.createElement(n.yV,{handleSubmit:c,onSubmit:function(e){console.log(e)},control:r,errors:o,formFields:M,reset:d,style:{width:"50%"}}))))},R=r(2867),B=r(7765),G=function(){var e=F(),t=e.data,r=e.isLoading,i=(0,a.useState)(null),o=(0,R.Z)(i,2),s=o[0],c=o[1],d=(0,l.s0)();return r?a.createElement("div",null,"Loading"):t?a.createElement("div",null,a.createElement(g.s,{style:{},headerTemplate:a.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:a.createElement(a.Fragment,null,a.createElement("h3",null," Cost Codes"),a.createElement(u.z,{label:"Create",className:"ml-3",onClick:function(){return d("/projects/costcode/new")}})),right:a.createElement("span",{className:"p-input-icon-right"},a.createElement("i",{className:"pi pi-search"}),a.createElement(B.o,{style:{borderRadius:20},placeholder:"Search",className:"p-inputtext-sm block "}))})},a.createElement("div",{style:{display:"flex"},className:"card custom justify-content-center align-item-center"},a.createElement(n.Gn,{style:{width:"50rem"},stripedRows:!0,selection:s,onSelectionChange:function(e){return c(e.value)},value:t},a.createElement(b.s,{headerStyle:z,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return a.createElement(u.z,{style:{backgroundColor:"transparent",color:"black",borderColor:"transparent",padding:0},icon:"pi pi-eye"})}}),a.createElement(b.s,{headerStyle:z,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return a.createElement(u.z,{style:{height:"20px",width:"20px",borderRadius:50},icon:"p-button-sm pi pi-times"})}}),a.createElement(b.s,{headerStyle:W,field:"id",header:"Cost ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),a.createElement(b.s,{headerStyle:W,field:"cost_description",header:"Cost Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}),a.createElement(b.s,{headerStyle:W,field:"category_description",header:"Category Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))))):a.createElement("div",null,"No Cost Codes :(")},Q=a.createElement(l.AW,{path:"costcode"},a.createElement(l.AW,{path:"new",element:a.createElement(U,null)}),a.createElement(l.AW,{path:":costCodeId/edit",element:a.createElement(U,null)}),a.createElement(l.AW,{index:!0,element:a.createElement(G,null)})),Z=[{name:"categoryId",label:"Category ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"categoryDesc",label:"Category Description",inputType:"textField",width:"100%",error_message:"This Field is required"}],K=function(){var e=(0,l.s0)(),t=(0,m.cI)(),r=t.control,i=t.formState,o=i.errors,s=i.isDirty,c=t.handleSubmit,d=t.reset;return a.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},a.createElement(g.s,{headerTemplate:a.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:a.createElement("h3",null,"Cost Category/New"),right:a.createElement(a.Fragment,null,a.createElement(u.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),a.createElement(u.z,{label:"Discard",className:"p-button-plain",onClick:function(){s?window.confirm("Are You Sure to Discard ?")&&e("/projects/costcategory"):e("/projects/costcategory")}}))})},a.createElement("div",{className:"card"},a.createElement(n.yV,{handleSubmit:c,onSubmit:function(e){console.log(e)},control:r,errors:o,formFields:Z,reset:d,style:{width:"50%"}}))))},V=function(){var e=x(),t=e.data,r=e.isLoading,i=(0,a.useState)(null),o=(0,R.Z)(i,2),s=o[0],c=o[1],d=(0,l.s0)();return r?a.createElement("div",null,"Loading"):t?a.createElement("div",null,a.createElement(g.s,{style:{},headerTemplate:a.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:a.createElement(a.Fragment,null,a.createElement("h3",null," Cost Categories"),a.createElement(u.z,{label:"Create",className:"ml-3",onClick:function(){return d("/projects/costcategory/new")}})),right:a.createElement("span",{className:"p-input-icon-right"},a.createElement("i",{className:"pi pi-search"}),a.createElement(B.o,{style:{borderRadius:20},placeholder:"Search",className:"p-inputtext-sm block "}))})},a.createElement("div",{style:{display:"flex"},className:"card custom justify-content-center align-item-center"},a.createElement(n.Gn,{style:{width:"50rem"},selection:s,onSelectionChange:function(e){return c(e.value)},value:t},a.createElement(b.s,{headerStyle:z,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return a.createElement(u.z,{style:{backgroundColor:"transparent",color:"black",borderColor:"transparent",padding:0},icon:"pi pi-eye"})}}),a.createElement(b.s,{headerStyle:z,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return a.createElement(u.z,{style:{height:"20px",width:"20px",borderRadius:50},icon:"p-button-sm pi pi-times"})}}),a.createElement(b.s,{headerStyle:W,field:"id",header:"Category ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),a.createElement(b.s,{headerStyle:W,field:"description",header:"Category Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))))):a.createElement("div",null,"No Cost Categories :(")},H=a.createElement(l.AW,{path:"costcategory"},a.createElement(l.AW,{path:"new",element:a.createElement(K,null)}),a.createElement(l.AW,{path:":costCategoryId/edit",element:a.createElement(K,null)}),a.createElement(l.AW,{index:!0,element:a.createElement(V,null)})),Y=function(){return a.createElement(l.Z5,null,a.createElement(l.AW,{path:"/",element:a.createElement(n.SV,{navItems:d})},a.createElement(l.AW,{index:!0,element:a.createElement(l.Fg,{to:"project",replace:!0})}),L,Q,H))}}}]);
//# sourceMappingURL=552.6e5d06b1.chunk.js.map