"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[37],{8037:function(e,t,r){r.r(t),r.d(t,{default:function(){return ee}});var n=r(969),l=r(3026),a=r(999),o=r(4716),i=r(4756),s=function(e){var t=e.to,r=e.item,a=e.options,s=(0,l.WU)(t),c=(0,l.bS)({path:s.pathname,end:!1});return n.createElement(o.rU,{style:{textDecoration:"none"},to:t,className:(0,i.AK)(a.className,c?"p-menuitem-active":""),target:r.target},n.createElement("span",{className:(0,i.AK)(a.iconClassName)}),n.createElement("span",{className:a.labelClassName},r.label))},c=function(e){return function(t,r){return n.createElement(s,{item:t,options:r,to:e})}},d=[{label:"Vendors",items:[{label:"Purchase Receipts",icon:"pi ml-3"}]},{label:"Materials",items:[{label:"Material Issues",icon:"pi ml-3"},{label:"Material Returns",icon:"pi ml-3"}]},{label:"Configuration",items:[{label:"Projects",icon:"pi ml-3",template:c("/projects/project")},{label:"Tasks",icon:"pi ml-3"},{label:"Cost Codes",icon:"pi ml-3",template:c("/projects/costcode")},{label:"Cost Category",icon:"pi ml-3",template:c("/projects/costcategory")},{label:"Material Brands",icon:"pi ml-3"},{label:"Amenities",icon:"pi ml-3"},{label:"Project Types",icon:"pi ml-3",template:c("/projects/projecttype")},{label:"Approvals",icon:"pi ml-3"},{label:"Bill of Quantity",icon:"pi ml-3"}]}],m=r(4225),u=r(6770),p=r(5103),y=r(4755),h=r(3829),g=[{name:"projectId",label:"Project ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"projectName",label:"Project Name",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"projectType",label:"Project Type",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:["Stilt+1","Stilt+2"]},{name:"addressLine1",label:"Address Line 1",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"addressLine2",label:"Address Line 2",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"state",label:"State",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:["Andra","Kerala","Delhi"]},{name:"city",label:"City",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:[{label:"Create",items:[{label:"Chennai",value:"Chennai"},{label:"Delhi",value:"Delhi"},{label:"Kovai",value:"Kovai"}]}],createOption:!0,navigatePath:"/projects/city"},{name:"posessionBy",label:"Posession By",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"totalLandArea",label:"Total Land Area",error_message:"This Field is required",double_field:!0,width1:"30px",width2:"10px",dropdownOption:["SqFt","Inches"]},{name:"noOfUnits",label:"No Of Units",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"projectStatus",label:"Project Status",inputType:"dropdown",width:"60%",error_message:"This Field is required",dropdownOption:["Pending","Completed"]},{name:"salePrice",label:"Sale Price",error_message:"This Field is required",double_field:!0,width1:"30px",width2:"10px",dropdownOption:["SqFt","Inches"]}],E=function(){var e=(0,l.s0)(),t=(0,m.cI)(),r=t.control,o=t.formState.errors,i=t.handleSubmit,s=t.reset;return n.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},n.createElement(h.s,{headerTemplate:n.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:n.createElement("h3",null,"Project/New"),right:n.createElement(n.Fragment,null,n.createElement(u.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),n.createElement(u.z,{label:"Discard",className:"p-button-plain",onClick:function(){return e("/projects")}}))})},n.createElement("div",{className:"flex"},n.createElement("div",{className:"col-7"},n.createElement("div",{className:"card",style:{width:"100%"}},n.createElement("div",{className:"flex justify-content-center",style:{width:"inherit"}},n.createElement(a.yV,{handleSubmit:i,onSubmit:function(e){console.log(e)},control:r,errors:o,formFields:g,reset:s})))),n.createElement("div",{className:"col-5"},n.createElement("div",{className:"flex"},n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Stage/Tasks",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Payment",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Estimates",className:"project-page-tags",style:{width:"100%"}}))),n.createElement("div",{className:"flex"},n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Floor/Units",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Material Specs",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Bill of Qty",className:"project-page-tags",style:{width:"100%"}}))),n.createElement("div",{className:"flex"},n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Availability",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Proximity",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Approvals",className:"project-page-tags",style:{width:"100%"}}))),n.createElement("div",{className:"flex"},n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Change Status",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Amenities",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Addl Desc",className:"project-page-tags",style:{width:"100%"}}))),n.createElement("div",{className:"flex"},n.createElement("div",{className:"col-4"},n.createElement(u.z,{label:"Change Price",className:"project-page-tags",style:{width:"100%"}}),n.createElement(u.z,{label:"Contacts",className:"project-page-tags",style:{width:"100%"}})),n.createElement("div",{className:"col-8"},n.createElement(p.E,{preview:!0,width:"100%",style:{padding:30,marginTop:"auto"},src:"https://www.primefaces.org/primereact/images/galleria/galleria7.jpg",alt:"Image Text"}),n.createElement(u.z,{className:"p-button-warning mr-3",style:{width:"100%"},label:"Add Image"})))))))},b=r(4401),f=r(8301),v=r(7723),C=r(8777),w=r(4267),j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]])}return r},T=w.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getProjects:e.query({query:function(){return console.log("projects.json"),{url:"projects.json"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){return{type:"Projects",id:e.id}}))),[{type:"Projects",id:"LIST"}])}}),addProject:e.mutation({query:function(e){return{url:"",method:"POST",body:e}},invalidatesTags:[{type:"Projects",id:"LIST"}]}),getProject:e.query({query:function(e){return"projects/".concat(e)},providesTags:function(e,t,r){return[{type:"Projects",id:r}]}}),updateProject:e.mutation({query:function(e){var t=e.id,r=j(e,["id"]);return{url:"projects/".concat(t),method:"PUT",body:r}},invalidatesTags:function(e){return[{type:"Projects",id:null===e||void 0===e?void 0:e.id}]}}),deleteProject:e.mutation({query:function(e){return{url:"projects/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:"Projects",id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),N=(T.useAddProjectMutation,T.useDeleteProjectMutation,T.useGetProjectQuery,T.useGetProjectsQuery),S=(T.useUpdateProjectMutation,T.useGetErrorProneQuery,T.endpoints.getProject,function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]])}return r}),x=w.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getCostCategories:e.query({query:function(){return console.log("costCategories.json"),{url:"costCategories.json"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){return{type:"CostCategories",id:e.id}}))),[{type:"CostCategories",id:"LIST"}])}}),addCostCategory:e.mutation({query:function(e){return{url:"",method:"POST",body:e}},invalidatesTags:[{type:"CostCategories",id:"LIST"}]}),getCostCategory:e.query({query:function(e){return"costCategories/".concat(e)},providesTags:function(e,t,r){return[{type:"CostCategories",id:r}]}}),updateCostCategory:e.mutation({query:function(e){var t=e.id,r=S(e,["id"]);return{url:"costCategories/".concat(t),method:"PUT",body:r}},invalidatesTags:function(e){return[{type:"CostCategories",id:null===e||void 0===e?void 0:e.id}]}}),deleteCostCategory:e.mutation({query:function(e){return{url:"costCategories/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:"CostCategories",id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),P=(x.useAddCostCategoryMutation,x.useDeleteCostCategoryMutation,x.useGetCostCategoryQuery,x.useGetCostCategoriesQuery),q=(x.useUpdateCostCategoryMutation,x.endpoints.getCostCategory,function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]])}return r}),O=w.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getCostCodes:e.query({query:function(){return console.log("costCodes.json"),{url:"costCodes.json"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){return{type:"CostCodes",id:e.id}}))),[{type:"CostCodes",id:"LIST"}])}}),addCostCode:e.mutation({query:function(e){return{url:"",method:"POST",body:e}},invalidatesTags:[{type:"CostCodes",id:"LIST"}]}),getCostCode:e.query({query:function(e){return"costCodes/".concat(e)},providesTags:function(e,t,r){return[{type:"CostCodes",id:r}]}}),updateCostCode:e.mutation({query:function(e){var t=e.id,r=q(e,["id"]);return{url:"costCodes/".concat(t),method:"PUT",body:r}},invalidatesTags:function(e){return[{type:"CostCodes",id:null===e||void 0===e?void 0:e.id}]}}),deleteCostCode:e.mutation({query:function(e){return{url:"costCodes/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:"CostCodes",id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),A=(O.useAddCostCodeMutation,O.useDeleteCostCodeMutation,O.useGetCostCodeQuery,O.useGetCostCodesQuery),F=(O.useUpdateCostCodeMutation,O.endpoints.getCostCode,function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]])}return r}),k=w.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getProjectTypes:e.query({query:function(){return console.log("projectTypes.json"),{url:"projectTypes.json"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,C.Z)(e.map((function(e){return{type:"ProjectTypes",id:e.id}}))),[{type:"ProjectTypes",id:"LIST"}])}}),addProjectType:e.mutation({query:function(e){return{url:"",method:"POST",body:e}},invalidatesTags:[{type:"ProjectTypes",id:"LIST"}]}),getProjectType:e.query({query:function(e){return"projectTypes/".concat(e)},providesTags:function(e,t,r){return[{type:"ProjectTypes",id:r}]}}),updateProjectType:e.mutation({query:function(e){var t=e.id,r=F(e,["id"]);return{url:"projectTypes/".concat(t),method:"PUT",body:r}},invalidatesTags:function(e){return[{type:"ProjectTypes",id:null===e||void 0===e?void 0:e.id}]}}),deleteProjectType:e.mutation({query:function(e){return{url:"projectTypes/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:"ProjectTypes",id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),D=(k.useAddProjectTypeMutation,k.useDeleteProjectTypeMutation,k.useGetProjectTypeQuery,k.useGetProjectTypesQuery),I=(k.useUpdateProjectTypeMutation,k.endpoints.getProjectType,r(8356)),W=function(e){var t=e.data;return n.createElement(h.s,{header:t.name,icons:n.createElement(u.z,{className:"p-button-rounded p-button-help p-button-text","aria-label":"Favorite",icon:"pi pi-eye"})},n.createElement("div",{className:"flex"},n.createElement("div",{className:"grid"},n.createElement("div",{className:"col-6"},"State/City"),n.createElement("div",{className:"col-6"},t.state,"/",t.city),n.createElement("div",{className:"col-6"},"Project Type"),n.createElement("div",{className:"col-6"},t.type),n.createElement("div",{className:"col-6"},"Total Units"),n.createElement("div",{className:"col-6"},t.totalUnits),n.createElement("div",{className:"col-6"},"Price/",t.priceUnit),n.createElement("div",{className:"col-6"},t.price),n.createElement("div",{className:"col-6"},"Status"),n.createElement("div",{className:"col-6"},t.status),n.createElement("div",{className:"col-6"},"Possesion By"),n.createElement("div",{className:"col-6"},t.possession)),n.createElement(I.i,{layout:"vertical"}),n.createElement(p.E,{src:"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:"Image",width:"125"})))},z=function(){var e=N(),t=e.data;if(e.isLoading)return n.createElement("div",null,"Loading");if(!t)return n.createElement("div",null,"No projects :(");return n.createElement(a.Si,{data:t,itemTemplate:function(e){if(e)return n.createElement("div",{className:"col-12 md:col-6 p-1"},n.createElement(W,{data:e}))},header:n.createElement("div",{className:"flex"},n.createElement("h3",{className:(0,i.AK)("m-0 my-auto","projectClass")},"Project"),n.createElement(o.rU,{to:"/projects/project/new",style:{textDecoration:"none"}},n.createElement(u.z,{label:"Create",className:"ml-3"})))},n.createElement(b.s,{headerStyle:{textAlign:"center"},style:{minWidth:"50px"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return n.createElement(u.z,{icon:"pi pi-eye",className:"p-button-rounded p-button-text"})}}),n.createElement(b.s,{field:"name",header:"Project Name",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"180px"}}),n.createElement(b.s,{header:"State/City",sortable:!0,filterMenuStyle:{width:"14rem"},style:{minWidth:"100px"},body:function(e){return"".concat(e.state,"/").concat(e.city)}}),n.createElement(b.s,{field:"type",header:"Project Type",sortable:!0,filterMenuStyle:{width:"14rem"},style:{minWidth:"150px"}}),n.createElement(b.s,{field:"totalUnits",header:"Total Units",bodyStyle:{textAlign:"center"},sortable:!0,dataType:"numeric",style:{minWidth:"80px"}}),n.createElement(b.s,{field:"price",header:"Price/sqft",bodyStyle:{textAlign:"center"},sortable:!0,dataType:"numeric",style:{minWidth:"200px"},body:function(e){return null===(t=e.price)||void 0===t?void 0:t.toLocaleString("en-US",{style:"currency",currency:"INR"});var t},filter:!0,filterElement:function(e){return n.createElement(f.R,{value:e.value,onChange:function(t){return e.filterCallback(t.value,e.index)},mode:"currency",currency:"USD",locale:"en-US"})}}),n.createElement(b.s,{field:"status",header:"Status",sortable:!0,showFilterMatchModes:!1,style:{minWidth:"200px"}}),n.createElement(b.s,{field:"possession",header:"Possesion By",sortable:!0,showFilterMatchModes:!1,style:{minWidth:"200px"},body:function(e){return"".concat((0,v.Z)(new Date(e.possession),"MM/dd/yyyy"))}}))},M=n.createElement(l.AW,{path:"project"},n.createElement(l.AW,{path:"new",element:n.createElement(E,null)}),n.createElement(l.AW,{path:":projectId/edit",element:n.createElement(E,null)}),n.createElement(l.AW,{index:!0,element:n.createElement(z,null)})),L=[{name:"costId",label:"Cost ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"costDesc",label:"Cost Description",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"costCategory",label:"Cost Category",inputType:"dropdown",width:"100%",error_message:"This Field is required",dropdownOption:["Sand","Cement","Fittings"]}],_=function(){var e=(0,l.s0)(),t=(0,m.cI)(),r=t.control,o=t.formState,i=o.errors,s=o.isDirty,c=t.handleSubmit,d=t.reset;return n.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},n.createElement(h.s,{headerTemplate:n.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:n.createElement("h3",null,"Cost Code/New"),right:n.createElement(n.Fragment,null,n.createElement(u.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),n.createElement(u.z,{label:"Discard",className:"p-button-plain",onClick:function(){s?window.confirm("Are You Sure to Discard ?")&&e("/projects/costcode"):e("/projects/costcode")}}))})},n.createElement("div",{className:"card"},n.createElement(a.yV,{handleSubmit:c,onSubmit:function(e){console.log(e)},control:r,errors:i,formFields:L,reset:d,style:{width:"50%"}}))))},U=r(2867),R=r(3729),B=r(7765),Q=function(){var e=A(),t=e.data,r=e.isLoading,a=(0,n.useState)(null),o=(0,U.Z)(a,2),i=o[0],s=o[1],c=(0,l.s0)(),d={width:"4rem",textAlign:"center",backgroundColor:"#f15a29",color:"white"},m=Object.assign(Object.assign({},d),{width:"1em"});return r?n.createElement("div",null,"Loading"):t?n.createElement("div",null,n.createElement(h.s,{style:{},headerTemplate:n.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:n.createElement(n.Fragment,null,n.createElement("h3",null," Cost Codes"),n.createElement(u.z,{label:"Create",className:"ml-3",onClick:function(){return c("/projects/costcode/new")}})),right:n.createElement("span",{className:"p-input-icon-right"},n.createElement("i",{className:"pi pi-search"}),n.createElement(B.o,{style:{borderRadius:20},placeholder:"Search",className:"p-inputtext-sm block "}))})},n.createElement("div",{style:{display:"flex"},className:"card custom justify-content-center align-item-center"},n.createElement(R.w,{size:"small",style:{width:"50rem"},stripedRows:!0,selection:i,onSelectionChange:function(e){return s(e.value)},selectionMode:"checkbox",value:t,sortMode:"multiple",responsiveLayout:"scroll"},n.createElement(b.s,{headerStyle:m,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return n.createElement(u.z,{style:{backgroundColor:"transparent",color:"black",borderColor:"transparent",padding:0},icon:"pi pi-eye"})}}),n.createElement(b.s,{headerStyle:m,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return n.createElement(u.z,{style:{height:"20px",width:"20px",borderRadius:50},icon:"p-button-sm pi pi-times"})}}),n.createElement(b.s,{headerStyle:d,field:"id",header:"Cost ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),n.createElement(b.s,{headerStyle:d,field:"cost_description",header:"Cost Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}),n.createElement(b.s,{headerStyle:d,field:"category_description",header:"Category Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))))):n.createElement("div",null,"No Cost Codes :(")},G=n.createElement(l.AW,{path:"costcode"},n.createElement(l.AW,{path:"new",element:n.createElement(_,null)}),n.createElement(l.AW,{path:":costCodeId/edit",element:n.createElement(_,null)}),n.createElement(l.AW,{index:!0,element:n.createElement(Q,null)})),Z=[{name:"categoryId",label:"Category ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"categoryDesc",label:"Category Description",inputType:"textField",width:"100%",error_message:"This Field is required"}],K=function(){var e=(0,l.s0)(),t=(0,m.cI)(),r=t.control,o=t.formState,i=o.errors,s=o.isDirty,c=t.handleSubmit,d=t.reset;return n.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},n.createElement(h.s,{headerTemplate:n.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:n.createElement("h3",null,"Cost Category/New"),right:n.createElement(n.Fragment,null,n.createElement(u.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),n.createElement(u.z,{label:"Discard",className:"p-button-plain",onClick:function(){s?window.confirm("Are You Sure to Discard ?")&&e("/projects/costcategory"):e("/projects/costcategory")}}))})},n.createElement("div",{className:"card"},n.createElement(a.yV,{handleSubmit:c,onSubmit:function(e){console.log(e)},control:r,errors:i,formFields:Z,reset:d,style:{width:"50%"}}))))},V=function(){var e=P(),t=e.data,r=e.isLoading,a=(0,n.useState)(null),o=(0,U.Z)(a,2),i=o[0],s=o[1],c=(0,l.s0)(),d={width:"4rem",textAlign:"center",backgroundColor:"#f15a29",color:"white"},m=Object.assign(Object.assign({},d),{width:"1em"});return r?n.createElement("div",null,"Loading"):t?n.createElement("div",null,n.createElement(h.s,{style:{},headerTemplate:n.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:n.createElement(n.Fragment,null,n.createElement("h3",null," Cost Categories"),n.createElement(u.z,{label:"Create",className:"ml-3",onClick:function(){return c("/projects/costcategory/new")}})),right:n.createElement("span",{className:"p-input-icon-right"},n.createElement("i",{className:"pi pi-search"}),n.createElement(B.o,{style:{borderRadius:20},placeholder:"Search",className:"p-inputtext-sm block "}))})},n.createElement("div",{style:{display:"flex"},className:"card custom justify-content-center align-item-center"},n.createElement(R.w,{size:"small",style:{width:"50rem"},stripedRows:!0,selection:i,onSelectionChange:function(e){return s(e.value)},selectionMode:"checkbox",value:t,sortMode:"multiple",responsiveLayout:"scroll"},n.createElement(b.s,{headerStyle:m,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return n.createElement(u.z,{style:{backgroundColor:"transparent",color:"black",borderColor:"transparent",padding:0},icon:"pi pi-eye"})}}),n.createElement(b.s,{headerStyle:m,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return n.createElement(u.z,{style:{height:"20px",width:"20px",borderRadius:50},icon:"p-button-sm pi pi-times"})}}),n.createElement(b.s,{headerStyle:d,field:"id",header:"Category ID",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),n.createElement(b.s,{headerStyle:d,field:"description",header:"Category Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))))):n.createElement("div",null,"No Cost Categories :(")},H=n.createElement(l.AW,{path:"costcategory"},n.createElement(l.AW,{path:"new",element:n.createElement(K,null)}),n.createElement(l.AW,{path:":costCategoryId/edit",element:n.createElement(K,null)}),n.createElement(l.AW,{index:!0,element:n.createElement(V,null)})),Y=[{name:"typeId",label:"Type ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"typeDesc",label:"Type Description",inputType:"textField",width:"100%",error_message:"This Field is required"}],J=function(){var e=(0,l.s0)(),t=(0,m.cI)(),r=t.control,o=t.formState,i=o.errors,s=o.isDirty,c=t.handleSubmit,d=t.reset;return n.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},n.createElement(h.s,{headerTemplate:n.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:n.createElement("h3",null,"Project Type/New"),right:n.createElement(n.Fragment,null,n.createElement(u.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),n.createElement(u.z,{label:"Discard",className:"p-button-plain",onClick:function(){s?window.confirm("Are You Sure to Discard ?")&&e("/projects/projecttype"):e("/projects/projecttype")}}))})},n.createElement("div",{className:"card"},n.createElement(a.yV,{handleSubmit:c,onSubmit:function(e){console.log(e)},control:r,errors:i,formFields:Y,reset:d,style:{width:"50%"}}))))},X=function(){var e=D(),t=e.data,r=e.isLoading,a=(0,n.useState)(null),o=(0,U.Z)(a,2),i=o[0],s=o[1],c=(0,l.s0)(),d={width:"4rem",textAlign:"center",backgroundColor:"#f15a29",color:"white"},m=Object.assign(Object.assign({},d),{width:"1em"});return r?n.createElement("div",null,"Loading"):t?n.createElement("div",null,n.createElement(h.s,{style:{},headerTemplate:n.createElement(y.o,{style:{backgroundColor:"white",width:"100%"},left:n.createElement(n.Fragment,null,n.createElement("h2",null," Project Types"),n.createElement(u.z,{label:"Create",className:"ml-3",onClick:function(){return c("/projects/projecttype/new")}})),right:n.createElement("span",{className:"p-input-icon-right"},n.createElement("i",{className:"pi pi-search"}),n.createElement(B.o,{style:{borderRadius:20},placeholder:"Search",className:"p-inputtext-sm block "}))})},n.createElement("div",{style:{display:"flex"},className:"card custom justify-content-center align-item-center"},n.createElement(R.w,{size:"small",style:{width:"50rem"},stripedRows:!0,selection:i,onSelectionChange:function(e){return s(e.value)},selectionMode:"checkbox",value:t,sortMode:"multiple",responsiveLayout:"scroll"},n.createElement(b.s,{headerStyle:m,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return n.createElement(u.z,{style:{backgroundColor:"transparent",color:"black",borderColor:"transparent",padding:0},icon:"pi pi-eye"})}}),n.createElement(b.s,{headerStyle:m,style:{minWidth:"1rem"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return n.createElement(u.z,{style:{height:"20px",width:"20px",borderRadius:50},icon:"p-button-sm pi pi-times"})}}),n.createElement(b.s,{headerStyle:d,field:"projectType",header:"Project Type",sortable:!0,filter:!0,style:{minWidth:"12rem"}}),n.createElement(b.s,{headerStyle:d,field:"description",header:"Description",sortable:!0,filter:!0,style:{minWidth:"12rem"}}))))):n.createElement("div",null,"No Project Types :(")},$=n.createElement(l.AW,{path:"projecttype"},n.createElement(l.AW,{path:"new",element:n.createElement(J,null)}),n.createElement(l.AW,{path:":projectTypeId/edit",element:n.createElement(J,null)}),n.createElement(l.AW,{index:!0,element:n.createElement(X,null)})),ee=function(){return n.createElement(l.Z5,null,n.createElement(l.AW,{path:"/",element:n.createElement(a.SV,{navItems:d})},n.createElement(l.AW,{index:!0,element:n.createElement(l.Fg,{to:"project",replace:!0})}),M,G,H,$))}}}]);
//# sourceMappingURL=37.d6e88c4e.chunk.js.map