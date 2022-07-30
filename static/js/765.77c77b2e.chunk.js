"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[765],{4271:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(969),r=a(4225),i=a(7765),n=a(6770),s=a(8224),c=a(5103),d=a(4756),o=a(4755),m=a(3829),p=a(3026),u=[{name:"projectId",label:"Project ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"projectName",label:"Project Name",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"projectType",label:"Project Type",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:["Stilt+1","Stilt+2"]},{name:"addressLine1",label:"Address Line 1",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"addressLine2",label:"Address Line 2",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"state",label:"State",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:["Andra","Kerala","Delhi"]},{name:"city",label:"City",inputType:"dropdown",width:"50%",error_message:"This Field is required",dropdownOption:[{label:"Create",items:[{label:"Chennai",value:"Chennai"},{label:"Delhi",value:"Delhi"},{label:"Kovai",value:"Kovai"}]}],createOption:!0,navigatePath:"/projects/city"},{name:"posessionBy",label:"Posession By",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"totalLandArea",label:"Total Land Area",error_message:"This Field is required",double_field:!0,width1:"30px",width2:"10px",dropdownOption:["SqFt","Inches"]},{name:"noOfUnits",label:"No Of Units",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"projectStatus",label:"Project Status",inputType:"dropdown",width:"60%",error_message:"This Field is required",dropdownOption:["Pending","Completed"]},{name:"salePrice",label:"Sale Price",error_message:"This Field is required",double_field:!0,width1:"30px",width2:"10px",dropdownOption:["SqFt","Inches"]}],h=function(){var e=(0,p.s0)(),t=(0,r.cI)(),a=t.control,h=t.formState.errors,g=t.handleSubmit;t.reset;return l.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},l.createElement(m.s,{headerTemplate:l.createElement(o.o,{style:{backgroundColor:"white",width:"100%"},left:l.createElement("h2",null," New Project"),right:l.createElement(l.Fragment,null,l.createElement(n.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),l.createElement(n.z,{label:"Discard",className:"p-button-plain",onClick:function(){return e("/projects")}}))})},l.createElement("div",{className:"flex"},l.createElement("div",{className:"col-7"},l.createElement("div",{className:"card",style:{width:"100%"}},l.createElement("div",{className:"flex justify-content-center",style:{width:"inherit"}},l.createElement("form",{onSubmit:g((function(e){console.log(e)})),style:{width:"inherit",maxHeight:"600px",overflowY:"auto",overflowX:"hidden"}},u.map((function(t){return l.createElement("div",{className:"flex"},l.createElement("div",{className:"col-4"},l.createElement("label",{htmlFor:t.name,style:{fontSize:16,marginTop:20},className:(0,d.AK)({"p-error":h[t.name]})},t.label)),l.createElement("div",{className:"col-8"},l.createElement("span",{className:"p-float-label"},"textField"===t.inputType&&l.createElement(r.Qr,{name:t.name,control:a,rules:{required:t.error_message},render:function(e){var a=e.field,r=e.fieldState;return l.createElement(i.o,Object.assign({id:a[t.name]},a,{style:{width:t.width||"100%"},className:(0,d.AK)({"p-invalid":r.invalid})}))}}),"dropdown"===t.inputType&&l.createElement(r.Qr,{name:t.name,control:a,rules:{required:"This field is required"},render:function(a){var r=a.field,i=a.fieldState;return t.createOption?l.createElement(s.L,{optionGroupTemplate:l.createElement("div",{style:{cursor:"pointer",textAlign:"center",backgroundColor:"lightgray"},onClick:function(){return e(t.navigatePath)}},"--Create And Edit--"),id:r[t.name],value:r.value,style:{width:t.width||"100%"},onChange:function(e){return r.onChange(e.value)},optionGroupLabel:"label",optionLabel:"label",optionGroupChildren:"items",options:t.dropdownOption}):l.createElement(s.L,{id:r[t.name],value:r.value,style:{width:t.width||"100%"},onChange:function(e){return r.onChange(e.value)},options:t.dropdownOption,className:(0,d.AK)({"p-invalid":i.invalid})})}}),t.double_field&&l.createElement("div",{className:"p-inputgroup"},l.createElement(r.Qr,{name:t.name,control:a,rules:{required:t.error_message},render:function(e){var a=e.field,r=e.fieldState;return l.createElement(i.o,Object.assign({id:a[t.name]},a,{style:{width:t.width1||"50%"},className:(0,d.AK)({"p-invalid":r.invalid})}))}}),l.createElement(r.Qr,{name:t.name,control:a,rules:{required:"This field is required"},render:function(e){var a=e.field,r=e.fieldState;return l.createElement(s.L,{id:a[t.name],value:a.value,style:{width:t.width2||"50%"},onChange:function(e){return a.onChange(e.value)},options:t.dropdownOption,className:(0,d.AK)({"p-invalid":r.invalid})})}}))),(n=t.name,h[n]&&l.createElement("small",{className:"p-error"},h[n].message))));var n})),l.createElement(n.z,{id:"form-submit",style:{display:"none"},type:"submit",label:"Submit"}))))),l.createElement("div",{className:"col-5"},l.createElement("div",{className:"flex"},l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Stage/Tasks",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Payment",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Estimates",className:"project-page-tags",style:{width:"100%"}}))),l.createElement("div",{className:"flex"},l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Floor/Units",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Material Specs",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Bill of Qty",className:"project-page-tags",style:{width:"100%"}}))),l.createElement("div",{className:"flex"},l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Availability",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Proximity",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Approvals",className:"project-page-tags",style:{width:"100%"}}))),l.createElement("div",{className:"flex"},l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Change Status",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Amenities",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Addl Desc",className:"project-page-tags",style:{width:"100%"}}))),l.createElement("div",{className:"flex"},l.createElement("div",{className:"col-4"},l.createElement(n.z,{label:"Change Price",className:"project-page-tags",style:{width:"100%"}}),l.createElement(n.z,{label:"Contacts",className:"project-page-tags",style:{width:"100%"}})),l.createElement("div",{className:"col-8"},l.createElement(c.E,{preview:!0,width:"100%",style:{padding:30,marginTop:"auto"},src:"https://www.primefaces.org/primereact/images/galleria/galleria7.jpg",alt:"Image Text"}),l.createElement(n.z,{className:"p-button-warning mr-3",style:{width:"100%"},label:"Add Image"})))))))}}}]);
//# sourceMappingURL=765.77c77b2e.chunk.js.map