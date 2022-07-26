"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[216],{216:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var l=n(969),r=n(770),a=n(401),o=n(5),i=n(301),c=n(926);var u=n(147);function s(e){return function(e){if(Array.isArray(e))return(0,c.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,u.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(954),p=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n},m=d.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getProjects:e.query({query:function(){return{url:""}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat(s(e.map((function(e){return{type:"Projects",id:e.id}}))),[{type:"Projects",id:"LIST"}])}}),addProject:e.mutation({query:function(e){return{url:"",method:"POST",body:e}},invalidatesTags:[{type:"Projects",id:"LIST"}]}),getProject:e.query({query:function(e){return"projects/".concat(e)},providesTags:function(e,t,n){return[{type:"Projects",id:n}]}}),updateProject:e.mutation({query:function(e){var t=e.id,n=p(e,["id"]);return{url:"projects/".concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:"Projects",id:null===e||void 0===e?void 0:e.id}]}}),deleteProject:e.mutation({query:function(e){return{url:"projects/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:"Projects",id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),f=(m.useAddProjectMutation,m.useDeleteProjectMutation,m.useGetProjectQuery,m.useGetProjectsQuery),y=(m.useUpdateProjectMutation,m.useGetErrorProneQuery,m.endpoints.getProject,n(670)),g=n(904),v=n(924),h=n(756);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},E.apply(this,arguments)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(a.push(l.value),!t||a.length!==t);o=!0);}catch(c){i=!0,r=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=l.forwardRef((function(e,t){var n=N(l.useState(e.id),2),r=n[0],a=n[1],o=N(l.useState(e.collapsed),2),i=o[0],c=o[1],u=l.useRef(t),s=l.useRef(null),d=!!e.toggleable&&(e.onToggle?e.collapsed:i),p=r+"_header",m=r+"_content",f=function(t){e.toggleable&&(d?b(t):C(t),e.onToggle&&e.onToggle({originalEvent:t,value:!d})),t.preventDefault()},b=function(t){e.onToggle||c(!1),e.onExpand&&e.onExpand(t)},C=function(t){e.onToggle||c(!0),e.onCollapse&&e.onCollapse(t)};l.useEffect((function(){h.gb.combinedRefs(u,t)}),[u,t]),(0,g.nw)((function(){r||a((0,h.Th)())}));var S=h.gb.findDiffKeys(e,w.defaultProps),P=(0,h.AK)("p-panel p-component",{"p-panel-toggleable":e.toggleable},e.className),j=function(){var t=h.gb.getJSXElement(e.header,e),n=h.gb.getJSXElement(e.icons,e),a=function(){if(e.toggleable){var t=r+"_label",n=d?e.expandIcon:e.collapseIcon;return l.createElement("button",{className:"p-panel-header-icon p-panel-toggler p-link",onClick:f,id:t,"aria-controls":m,"aria-expanded":!d,role:"tab"},h.Cz.getJSXIcon(n,void 0,{props:e,collapsed:d}),l.createElement(v.H,null))}return null}(),o=l.createElement("span",{className:"p-panel-title",id:p},t),i=l.createElement("div",{className:"p-panel-icons"},n,a),c=l.createElement("div",{className:"p-panel-header"},o,i);if(e.headerTemplate){var u={className:"p-panel-header",titleClassName:"p-panel-title",iconsClassName:"p-panel-icons",togglerClassName:"p-panel-header-icon p-panel-toggler p-link",togglerIconClassName:d?e.expandIcon:e.collapseIcon,onTogglerClick:f,titleElement:o,iconsElement:i,togglerElement:a,element:c,props:e,collapsed:d};return h.gb.getJSXElement(e.headerTemplate,u)}return e.header||e.toggleable?c:null}(),T=l.createElement(y.K,{nodeRef:s,classNames:"p-toggleable-content",timeout:{enter:1e3,exit:450},in:!d,unmountOnExit:!0,options:e.transitionOptions},l.createElement("div",{ref:s,className:"p-toggleable-content","aria-hidden":d,role:"region",id:m,"aria-labelledby":p},l.createElement("div",{className:"p-panel-content"},e.children)));return l.createElement("div",E({id:e.id,ref:u,className:P,style:e.style},S),j,T)}));function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},C.apply(this,arguments)}w.displayName="Panel",w.defaultProps={__TYPE:"Panel",id:null,header:null,headerTemplate:null,toggleable:null,style:null,className:null,collapsed:null,expandIcon:"pi pi-plus",collapseIcon:"pi pi-minus",icons:null,transitionOptions:null,onExpand:null,onCollapse:null,onToggle:null};var S=l.forwardRef((function(e,t){var n="horizontal"===e.layout,r="vertical"===e.layout,a=h.gb.findDiffKeys(e,S.defaultProps),o=(0,h.AK)("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":n&&(!e.align||"left"===e.align),"p-divider-right":n&&"right"===e.align,"p-divider-center":n&&"center"===e.align||r&&(!e.align||"center"===e.align),"p-divider-top":r&&"top"===e.align,"p-divider-bottom":r&&"bottom"===e.align},e.className);return l.createElement("div",C({className:o,style:e.style,role:"separator"},a),l.createElement("div",{className:"p-divider-content"},e.children))}));S.displayName="Divider",S.defaultProps={__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null};var P=n(489),j=n(940);function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},T.apply(this,arguments)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(a.push(l.value),!t||a.length!==t);o=!0);}catch(c){i=!0,r=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=l.memo(l.forwardRef((function(e,t){var n=O(l.useState(!1),2),r=n[0],a=n[1],o=O(l.useState(!1),2),i=o[0],c=o[1],u=O(l.useState(0),2),s=u[0],d=u[1],p=O(l.useState(1),2),m=p[0],f=p[1],v=l.useRef(null),E=l.useRef(null),b=l.useRef(null),N=l.useRef(!1),w=function(){e.preview&&(a(!0),setTimeout((function(){c(!0)}),25))},C=function(){N.current=!0},S=function(){N.current||(c(!1),d(0),f(1)),N.current=!1},x=function(){var t=e.alt,n=e.src;h.p7.saveAs({name:t,src:n}),N.current=!0},A=function(){d((function(e){return e+90})),N.current=!0},I=function(){d((function(e){return e-90})),N.current=!0},M=function(){f((function(e){return e+.1})),N.current=!0},F=function(){f((function(e){return e-.1})),N.current=!0},R=function(){h.P9.set("modal",E.current,P.ZP.autoZIndex,P.ZP.zIndex.modal)},_=function(){e.onShow&&e.onShow()},q=function(){h.p7.addClass(E.current,"p-component-overlay-leave")},z=function(){e.onHide&&e.onHide()},D=function(){h.P9.clear(E.current),a(!1)};(0,g.zq)((function(){E.current&&h.P9.clear(E.current)}));var U=e.src,K=e.alt,H=e.width,L=e.height,B=h.gb.findDiffKeys(e,k.defaultProps),J=(0,h.AK)("p-image p-component",e.className,{"p-image-preview-container":e.preview}),W=function(){var t=e.downloadable,n={transform:"rotate("+s+"deg) scale("+m+")"},r=m<=.5||m>=1.5;return l.createElement("div",{ref:E,className:"p-image-mask p-component-overlay p-component-overlay-enter",onClick:S},l.createElement("div",{className:"p-image-toolbar"},t&&l.createElement("button",{className:"p-image-action p-link",onClick:x,type:"button"},l.createElement("i",{className:"pi pi-download"})),l.createElement("button",{className:"p-image-action p-link",onClick:A,type:"button"},l.createElement("i",{className:"pi pi-refresh"})),l.createElement("button",{className:"p-image-action p-link",onClick:I,type:"button"},l.createElement("i",{className:"pi pi-undo"})),l.createElement("button",{className:"p-image-action p-link",onClick:F,type:"button",disabled:r},l.createElement("i",{className:"pi pi-search-minus"})),l.createElement("button",{className:"p-image-action p-link",onClick:M,type:"button",disabled:r},l.createElement("i",{className:"pi pi-search-plus"})),l.createElement("button",{className:"p-image-action p-link",type:"button"},l.createElement("i",{className:"pi pi-times"}))),l.createElement(y.K,{nodeRef:b,classNames:"p-image-preview",in:i,timeout:{enter:150,exit:150},unmountOnExit:!0,onEntering:R,onEntered:_,onExit:q,onExiting:z,onExited:D},l.createElement("div",{ref:b},l.createElement("img",{src:e.src,className:"p-image-preview",style:n,onClick:C,alt:e.alt}))))}(),X=e.template?h.gb.getJSXElement(e.template,e):l.createElement("i",{className:"p-image-preview-icon pi pi-eye"}),Z=e.preview?l.createElement("div",{className:"p-image-preview-indicator",onClick:w},X):null,G=l.createElement("img",{src:U,className:e.imageClassName,width:H,height:L,style:e.imageStyle,alt:K,onError:e.onError});return l.createElement("span",T({ref:v,className:J},B),G,Z,r&&l.createElement(j.h,{element:W,appendTo:document.body}))})));k.displayName="Image",k.defaultProps={__TYPE:"Image",preview:!1,className:null,downloadable:!1,imageStyle:null,imageClassName:null,template:null,src:null,alt:null,width:null,height:null,onError:null};var A=function(e){var t=e.data;return l.createElement(w,{header:t.name,icons:l.createElement(r.z,{className:"p-button-rounded p-button-help p-button-text","aria-label":"Favorite",icon:"pi pi-eye"})},l.createElement("div",{className:"flex"},l.createElement("div",{className:"grid"},l.createElement("div",{className:"col-6"},"State/City"),l.createElement("div",{className:"col-6"},t.state,"/",t.city),l.createElement("div",{className:"col-6"},"Project Type"),l.createElement("div",{className:"col-6"},t.type),l.createElement("div",{className:"col-6"},"Total Units"),l.createElement("div",{className:"col-6"},t.totalUnits),l.createElement("div",{className:"col-6"},"Price/",t.priceUnit),l.createElement("div",{className:"col-6"},t.price),l.createElement("div",{className:"col-6"},"Status"),l.createElement("div",{className:"col-6"},t.status),l.createElement("div",{className:"col-6"},"Possesion By"),l.createElement("div",{className:"col-6"},t.possession)),l.createElement(S,{layout:"vertical"}),l.createElement(k,{src:"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:"Image",width:"125"})))},I=function(){var e=f(),t=e.data;if(e.isLoading)return l.createElement("div",null,"Loading");if(!t)return l.createElement("div",null,"No projects :(");return l.createElement("div",{className:"dataview-demo"},l.createElement("div",{className:"card"},l.createElement(o.Si,{data:t,itemTemplate:function(e){if(e)return l.createElement("div",{className:"col-12 md:col-6 p-1"},l.createElement(A,{data:e}))},header:l.createElement("div",{className:"flex"},l.createElement("h3",{className:"m-0 my-auto"},"Project"),l.createElement(r.z,{label:"Create",className:"ml-3",onClick:function(){}}))},l.createElement(a.s,{headerStyle:{width:"4rem",textAlign:"center"},bodyStyle:{textAlign:"center",overflow:"visible"},body:function(){return l.createElement(r.z,{type:"button",icon:"pi pi-eye"})}}),l.createElement(a.s,{field:"name",header:"Name",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),l.createElement(a.s,{field:"price",header:"Price",sortable:!0,dataType:"numeric",style:{minWidth:"8rem"},body:function(e){return null===(t=e.price)||void 0===t?void 0:t.toLocaleString("en-US",{style:"currency",currency:"USD"});var t},filter:!0,filterElement:function(e){return l.createElement(i.R,{value:e.value,onChange:function(t){return e.filterCallback(t.value,e.index)},mode:"currency",currency:"USD",locale:"en-US"})}}),l.createElement(a.s,{field:"quantity",header:"quantity",sortable:!0,dataType:"numeric",style:{minWidth:"8rem"}}),l.createElement(a.s,{field:"category",header:"category",sortable:!0,filterMenuStyle:{width:"14rem"},style:{minWidth:"10rem"}}),l.createElement(a.s,{field:"description",header:"description",sortable:!0,showFilterMatchModes:!1,style:{minWidth:"10rem"}}))))}},401:function(e,t,n){n.d(t,{s:function(){return l}});var l=function(){};l.displayName="Column",l.defaultProps={__TYPE:"Column",columnKey:null,field:null,sortField:null,filterField:null,exportField:null,header:null,body:null,footer:null,sortable:!1,sortableDisabled:!1,sortFunction:null,dataType:"text",filter:!1,filterMatchMode:null,filterPlaceholder:null,filterType:"text",filterMaxLength:null,filterElement:null,filterFunction:null,filterHeaderStyle:null,filterHeaderClassName:null,showFilterMenu:!0,showFilterOperator:!0,showClearButton:!0,showApplyButton:!0,showFilterMatchModes:!0,showFilterMenuOptions:!0,showAddButton:!0,filterMatchModeOptions:null,maxConstraints:2,filterMenuClassName:null,filterMenuStyle:null,align:null,alignHeader:null,alignFrozen:"left",hidden:!1,onFilterClear:null,onFilterApplyClick:null,onFilterMatchModeChange:null,onFilterOperatorChange:null,onFilterConstraintAdd:null,onFilterConstraintRemove:null,filterClear:null,filterApply:null,filterHeader:null,filterFooter:null,style:null,className:null,headerStyle:null,headerClassName:null,bodyStyle:null,bodyClassName:null,footerStyle:null,footerClassName:null,expander:!1,frozen:!1,selectionMode:null,colSpan:null,rowSpan:null,editor:null,cellEditValidator:null,cellEditValidatorEvent:"click",onBeforeCellEditHide:null,onBeforeCellEditShow:null,onCellEditInit:null,onCellEditComplete:null,onCellEditCancel:null,excludeGlobalFilter:!1,rowReorder:!1,rowReorderIcon:"pi pi-bars",rowEditor:!1,exportable:!0,reorderable:!0,resizeable:!0}}}]);
//# sourceMappingURL=216.c12e43a1.chunk.js.map