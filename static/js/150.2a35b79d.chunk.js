"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[150],{2150:function(e,t,a){a.r(t);var n=a(969),r=a(7765),l=a(3026),i=a(4755),s=a(3829),o=a(6770),m=a(8224),c=a(4225),d=a(4756);t.default=function(){var e=(0,l.s0)(),t=(0,c.cI)(),a=t.control,u=t.formState.errors,p=t.handleSubmit;t.reset;return n.createElement("div",{style:{minHeight:"calc(100vh - 63px)"}},n.createElement(s.s,{headerTemplate:n.createElement(i.o,{style:{backgroundColor:"white",width:"100%"},left:n.createElement("h1",null,"New Cost Code"),right:n.createElement(n.Fragment,null,n.createElement(o.z,{label:"Save",onClick:function(){var e;return null===(e=document.getElementById("form-submit"))||void 0===e?void 0:e.click()},style:{paddingRight:20},className:"p-button-warning mr-3"}),n.createElement(o.z,{label:"Discard",className:"p-button-plain",onClick:function(){return e("/projects/cost_cost")}}))})},n.createElement("div",{className:"card"},n.createElement("form",{onSubmit:p((function(){})),style:{width:"50%",maxHeight:"600px",overflowY:"auto",overflowX:"hidden"}},[{name:"costId",label:"Cost ID",inputType:"textField",width:"50%",error_message:"This Field is required"},{name:"costDesc",label:"Cost Description",inputType:"textField",width:"100%",error_message:"This Field is required"},{name:"costCategory",label:"Cost Category",inputType:"dropdown",width:"100%",error_message:"This Field is required",dropdownOption:["Sand","Cement","Fittings"]}].map((function(e){return n.createElement("div",{className:"flex"},n.createElement("div",{className:"col-4"},n.createElement("label",{htmlFor:e.name,style:{fontSize:16,marginTop:20},className:(0,d.AK)({"p-error":u[e.name]})},e.label)),n.createElement("div",{className:"col-8"},n.createElement("span",{className:"p-float-label"},"textField"===e.inputType&&n.createElement(c.Qr,{name:e.name,control:a,rules:{required:e.error_message},render:function(t){var a=t.field,l=t.fieldState;return n.createElement(r.o,Object.assign({id:a[e.name]},a,{style:{width:e.width||"100%"},className:(0,d.AK)({"p-invalid":l.invalid})}))}}),"dropdown"===e.inputType&&n.createElement(c.Qr,{name:e.name,control:a,rules:{required:"This field is required"},render:function(t){var a=t.field,r=t.fieldState;return n.createElement(m.L,{id:a[e.name],value:a.value,style:{width:e.width||"100%"},onChange:function(e){return a.onChange(e.value)},options:e.dropdownOption,className:(0,d.AK)({"p-invalid":r.invalid})})}})),(t=e.name,u[t]&&n.createElement("small",{className:"p-error"},u[t].message))));var t})),n.createElement(o.z,{id:"form-submit",style:{display:"none"},type:"submit",label:"Submit"})))))}}}]);
//# sourceMappingURL=150.2a35b79d.chunk.js.map