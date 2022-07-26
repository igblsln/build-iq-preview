"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[223],{5223:function(e,t,a){a.r(t);var l=a(969),r=a(4163),n=a(5518),i=a(7765),s=a(6770),c=a(8224),m=a(5103),o=a(4756),d=a(4755),u=a(4716);t.default=function(){var e=(0,n.cI)({defaultValues:{}}),t=e.control,a=e.formState.errors,E=e.handleSubmit,p=(e.reset,function(e){return a[e]&&l.createElement("small",{className:"p-error"},a[e].message)}),g=function(e,s){return l.createElement(r.q,{className:"field"},l.createElement(r.E,{size:30,minSize:20,style:{marginTop:8}},l.createElement("label",{htmlFor:e,style:{fontSize:20,marginTop:20},className:(0,o.AK)({"p-error":a[e]})},s)),l.createElement(r.E,{size:70,minSize:40},l.createElement("span",{className:"p-float-label"},l.createElement(n.Qr,{name:e,control:t,rules:{required:"This field is required"},render:function(t){var a=t.field,r=t.fieldState;return l.createElement(i.o,Object.assign({id:a[e]},a,{style:{width:"90%"},className:(0,o.AK)({"p-invalid":r.invalid})}))}})),p(e)))},f=function(e,i){return l.createElement(r.q,{className:"field"},l.createElement(r.E,{size:30,minSize:20,style:{marginTop:8}},l.createElement("label",{htmlFor:e,style:{fontSize:20,marginTop:20},className:(0,o.AK)({"p-error":a[e]})},i)),l.createElement(r.E,{size:70,minSize:40},l.createElement("span",{className:"p-float-label flex"},l.createElement(n.Qr,{name:e,control:t,rules:{required:"This field is required"},render:function(t){var a=t.field;t.fieldState;return l.createElement(c.L,{id:a[e],value:a.value,style:{width:"90%"},onChange:function(e){return a.onChange(e.value)},options:["qa","ws"]})}})),p(e)))};return l.createElement(r.q,{style:{minHeight:"calc(100vh - 63px)"}},l.createElement(r.E,{size:80,minSize:50},l.createElement(r.q,{layout:"vertical"},l.createElement(r.E,null,l.createElement(d.o,{style:{backgroundColor:"white"},left:l.createElement("h2",null," New Project"),right:l.createElement(l.Fragment,null,l.createElement(s.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),l.createElement(u.rU,{to:"/projects"},l.createElement(s.z,{label:"Discard"})))})),l.createElement(r.E,{className:"card",style:{backgroundColor:"lightgray"}},l.createElement(r.q,null,l.createElement(r.E,null,l.createElement("div",{className:"card",style:{width:"100%"}},l.createElement("div",{className:"flex justify-content-center",style:{width:"inherit"}},l.createElement("form",{onSubmit:E((function(e){console.log(e)})),style:{width:"inherit",maxHeight:"600px",overflowY:"auto",overflowX:"hidden"}},g("projectId","Project ID"),g("projectName","Project Name"),f("projectType","Project Type"),g("address1","Address Line 1"),g("address2","Address Line 2"),f("state","State"),f("city","City"),g("posessionBy","Posession By"),l.createElement(r.q,{className:"field"},l.createElement(r.E,{size:30,minSize:20,style:{marginTop:8}},l.createElement("label",{htmlFor:"landArea",style:{fontSize:20,marginTop:20},className:(0,o.AK)({"p-error":a.landArea})},"Total Land Area")),l.createElement(r.E,{size:70,minSize:40},l.createElement("span",{className:"p-float-label flex"},l.createElement(n.Qr,{name:"landArea",control:t,rules:{required:"This field is required"},render:function(e){var t=e.field;e.fieldState;return l.createElement(c.L,{id:t.landArea,value:t.value,style:{width:"90%",marginRight:10},onChange:function(e){return t.onChange(e.value)},options:["qa","ws"]})}}),l.createElement(n.Qr,{name:"landArea",control:t,rules:{required:"This field is required"},render:function(e){var t=e.field;e.fieldState;return l.createElement(c.L,{id:t.landArea,value:t.value,style:{width:"90%",marginRight:10},onChange:function(e){return t.onChange(e.value)},options:["qa","ws"]})}})),p("landArea"))),g("noOfUnits","No of Units"),f("projectStatus","Project Status"),l.createElement(r.q,{className:"field"},l.createElement(r.E,{size:30,minSize:20,style:{marginTop:8}},l.createElement("label",{htmlFor:"salePrice",style:{fontSize:20,marginTop:20},className:(0,o.AK)({"p-error":a.salePrice})},"Sale Price")),l.createElement(r.E,{size:70,minSize:40},l.createElement("span",{className:"p-float-label flex"},l.createElement(n.Qr,{name:"salePrice",control:t,rules:{required:"This field is required"},render:function(e){var t=e.field;e.fieldState;return l.createElement(c.L,{id:t.salePrice,value:t.value,style:{width:"90%",marginRight:10},onChange:function(e){return t.onChange(e.value)},options:["qa","ws"]})}}),l.createElement(n.Qr,{name:"salePrice",control:t,rules:{required:"This field is required"},render:function(e){var t=e.field;e.fieldState;return l.createElement(c.L,{id:t.salePrice,value:t.value,style:{width:"90%",marginRight:10},onChange:function(e){return t.onChange(e.value)},options:["qa","ws"]})}})),p("salePrice"))),l.createElement(s.z,{id:"form-submit",style:{display:"none"},type:"submit",label:"Submit",className:"mt-2"}))))),l.createElement(r.E,null,l.createElement("div",{className:"card"},l.createElement(s.z,{label:"Stage/Tasks",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Payment",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Estimates",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Floor/Units",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Material Specs",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Bill of Qty",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Availability",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Proximity",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Approvals",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Change Status",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Amenities",className:"project-page-tags col-3"}),l.createElement(s.z,{label:"Addl Desc",className:"project-page-tags col-3"}),l.createElement(r.q,null,l.createElement(r.E,{className:"align-items-center justify-content-center",size:45,minSize:10},l.createElement(s.z,{style:{width:"55%"},label:"Addl Desc",className:"project-page-tags"}),l.createElement(s.z,{style:{width:"55%"},label:"Addl Desc",className:"project-page-tags"})),l.createElement(r.E,{size:45},l.createElement(m.E,{preview:!0,width:"100%",style:{padding:20,marginTop:"auto"},src:"https://www.primefaces.org/primereact/images/galleria/galleria7.jpg",alt:"Image Text"}),l.createElement(s.z,{className:"p-button-warning mr-3",style:{width:"100%"},label:"Add Image"})),l.createElement(r.E,{size:10})))))))))}}}]);
//# sourceMappingURL=223.f03eae68.chunk.js.map