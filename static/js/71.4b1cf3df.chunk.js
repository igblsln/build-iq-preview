"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[71],{8071:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(969),a=n(3026),l=n(7993),i=n(8173),o=function(e,t){return(0,l.E7)("/".concat(i.o,"/").concat(e)+(t?"/comming-soon":""))},c=[{label:"Inquiry",items:[{label:"Project Inquiry",icon:"pi ml-3",template:o("project")},{label:"Item Inquiry",icon:"pi ml-3",template:o("item",!0)},{label:"Item Price Inquiry",icon:"pi ml-3",template:o("item-price",!0)},{label:"Vendor Enquiry",icon:"pi ml-3",template:o("vendor",!0)},{label:"Customer Enquiry",icon:"pi ml-3",template:o("customer",!0)}]}],s=n(6234),u=n(4401),d=n(6770),m=n(7765),p=n(8356),f=n(8224),y=n(4756),b=n(7624),v=n(8904),h=n(3924);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){if(e){if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function C(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(){},j=r.forwardRef((function(e,t){var n=P(r.useState(e.id),2),a=n[0],l=n[1],i=P(r.useState(!0),2),o=i[0],c=i[1],s=P(r.useState(!1),2),u=s[0],d=s[1],m=P(r.useState([]),2),p=m[0],f=m[1],b=P(r.useState(e.activeIndex),2),g=b[0],N=b[1],w=r.useRef(null),O=r.useRef(null),T=r.useRef(null),_=r.useRef(null),A=r.useRef(null),x=r.useRef({}),W=e.onTabChange?e.activeIndex:g,k=function(e){return e===W},q=function(e,t){return e&&"TabPanel"===e.props.__TYPE&&p.every((function(e){return e!==t}))},D=function(t,n,r){n.props.disabled||(e.onTabChange?e.onTabChange({originalEvent:t,index:r}):N(r)),L(r),t&&t.preventDefault()},R=function(e,t,n){"Enter"===e.code&&D(e,t,n)},L=function(e){var t=x.current["tab_".concat(e)];t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest"})},G=function(t){e.scrollable&&function(){var e=w.current,t=e.scrollLeft,n=e.scrollWidth,r=y.p7.getWidth(w.current);c(0===t),d(t===n-r)}(),t.preventDefault()},K=function(){return[_.current,A.current].reduce((function(e,t){return t?e+y.p7.getWidth(t):e}),0)},J=function(){var e=y.p7.getWidth(w.current)-K(),t=w.current.scrollLeft-e;w.current.scrollLeft=t<=0?0:t},U=function(){var e=y.p7.getWidth(w.current)-K(),t=w.current.scrollLeft+e,n=w.current.scrollWidth-e;w.current.scrollLeft=t>=n?n:t},V=function(){c(!0),d(!1),f([]),e.onTabChange?e.onTabChange({index:W}):N(e.activeIndex)};r.useEffect((function(){!function(){var e=x.current["tab_".concat(W)];T.current.style.width=y.p7.getWidth(e)+"px",T.current.style.left=y.p7.getOffset(e).left-y.p7.getOffset(O.current).left+"px"}()})),(0,v.nw)((function(){a||l((0,y.Th)())})),(0,v.rf)((function(){if(y.gb.isNotEmpty(p)){var t=function(t){var n=r.Children.map(e.children,(function(e,t){if(q(e,t))return{tab:e,index:t}}));return n.find((function(e){var n=e.tab,r=e.index;return!n.props.disabled&&r>=t}))||n.reverse().find((function(e){var n=e.tab,r=e.index;return!n.props.disabled&&t>r}))}(p[p.length-1]);t&&D(null,t.tab,t.index)}}),[p]),(0,v.rf)((function(){L(e.activeIndex)}),[e.activeIndex]),r.useImperativeHandle(t,(function(){return{reset:V}}));var H=function(t,n){var l=k(n),i=t.props,o=i.headerStyle,c=i.headerClassName,s=i.style,u=i.className,d=i.disabled,m=i.leftIcon,b=i.rightIcon,v=i.header,E=i.headerTemplate,g=i.closable,N=S(S({},o||{}),s||{}),w=(0,y.AK)("p-unselectable-text",{"p-tabview-selected p-highlight":l,"p-disabled":d},c,u),P=a+"_header_"+n,O=a+"_content_"+n,I=d?null:0,j=m&&r.createElement("i",{className:m}),T=r.createElement("span",{className:"p-tabview-title"},v),_=b&&r.createElement("i",{className:b}),A=g&&r.createElement("i",{className:"p-tabview-close pi pi-times",onClick:function(t){return function(t,n){f([].concat(C(p),[n])),e.onTabClose&&e.onTabClose({originalEvent:t,index:n}),t.preventDefault()}(t,n)}}),W=r.createElement("a",{role:"tab",className:"p-tabview-nav-link",onClick:function(e){return D(e,t,n)},id:P,onKeyDown:function(e){return R(e,t,n)},"aria-controls":O,"aria-selected":l,tabIndex:I},j,T,_,A,r.createElement(h.H,null));if(E){var q={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:function(e){return D(e,t,n)},onKeyDown:function(e){return R(e,t,n)},leftIconElement:j,titleElement:T,rightIconElement:_,element:W,props:e,index:n,selected:l,ariaControls:O};W=y.gb.getJSXElement(E,q)}return r.createElement("li",{ref:function(e){return x.current["tab_".concat(n)]=e},className:w,style:N,role:"presentation"},W)},z=y.gb.findDiffKeys(e,j.defaultProps),Q=(0,y.AK)("p-tabview p-component",{"p-tabview-scrollable":e.scrollable},e.className),Y=function(){var t=r.Children.map(e.children,(function(e,t){if(q(e,t))return H(e,t)}));return r.createElement("div",{ref:w,id:a,className:"p-tabview-nav-content",style:e.style,onScroll:G},r.createElement("ul",{ref:O,className:"p-tabview-nav",role:"tablist"},t,r.createElement("li",{ref:T,className:"p-tabview-ink-bar"})))}(),Z=function(){var t=(0,y.AK)("p-tabview-panels",e.panelContainerClassName),n=r.Children.map(e.children,(function(t,n){if(q(t,n)&&(!e.renderActiveOnly||k(n))){var l=k(n),i=S(S({},t.props.contentStyle||{}),t.props.style||{}),o=(0,y.AK)(t.props.contentClassName,t.props.className,"p-tabview-panel",{"p-hidden":!l}),c=a+"_content_"+n,s=a+"_header_"+n,u=y.gb.findDiffKeys(t.props,I.defaultProps);return r.createElement("div",E({},u,{id:c,"aria-labelledby":s,"aria-hidden":!l,className:o,style:i,role:"tabpanel"}),e.renderActiveOnly?l&&t.props.children:t.props.children)}}));return r.createElement("div",{className:t,style:e.panelContainerStyle},n)}(),F=e.scrollable&&!o?r.createElement("button",{ref:_,className:"p-tabview-nav-prev p-tabview-nav-btn p-link",onClick:J,type:"button"},r.createElement("span",{className:"pi pi-chevron-left"}),r.createElement(h.H,null)):null,M=function(){if(e.scrollable&&!u)return r.createElement("button",{ref:A,className:"p-tabview-nav-next p-tabview-nav-btn p-link",onClick:U,type:"button"},r.createElement("span",{className:"pi pi-chevron-right"}),r.createElement(h.H,null))}();return r.createElement("div",E({className:Q},z),r.createElement("div",{className:"p-tabview-nav-container"},F,Y,M),Z)}));I.displayName="TabPanel",I.defaultProps={__TYPE:"TabPanel",header:null,headerTemplate:null,leftIcon:null,rightIcon:null,closable:!1,disabled:!1,style:null,className:null,headerStyle:null,headerClassName:null,contentStyle:null,contentClassName:null},j.displayName="TabView",j.defaultProps={__TYPE:"TabView",id:null,activeIndex:0,style:null,className:null,renderActiveOnly:!0,onTabChange:null,onTabClose:null,scrollable:!1,panelContainerStyle:null,panelContainerClassName:null};var T=n(4716),_=n(8079),A=n(7978),x=A.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listProjectPurchaseInquiry:e.query({query:function(e){e.page,e.size;var t=e.projectId;return{url:(0,A.DS)("/inquiry/purchase/","?project_id=".concat(t||""))}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,_.Z)(e.map((function(e){var t=e.key;return{type:A.pJ.PROJECT_PURCHASE_INQUIRY,id:t}}))),[{type:A.pJ.PROJECT_PURCHASE_INQUIRY,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}}),listProject:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,A.DS)("/project/project/","?page=".concat(t||1,"&page_size=").concat(n||A.IV))}},providesTags:function(e){var t;return e?[].concat((0,_.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:A.pJ.PROJECT,id:t}}))),[{type:A.pJ.PROJECT,id:"LIST"}]):[{type:A.pJ.PROJECT,id:"LIST"}]}})}}}),W=x.useListProjectPurchaseInquiryQuery,k=(x.useGetErrorProneQuery,x.useListProjectQuery),q="project",D=function(e){var t=k({}),n=t.data,a=(t.isLoading,(0,r.useState)("")),i=(0,s.Z)(a,2),o=i[0],c=i[1],v=(0,r.useState)(""),h=(0,s.Z)(v,2),E=h[0],g=h[1],N=W({projectId:E},{skip:!E}),w=N.data,C=N.isFetching;return r.createElement(r.Fragment,null,r.createElement("div",{className:"flex"},r.createElement("h3",{className:(0,y.AK)("m-0 my-auto")},"Project Inquiry"),r.createElement(T.rU,{to:"/projects",style:{textDecoration:"none",marginLeft:"auto"}},r.createElement(d.z,{label:"Back",className:"ml-3"}))),r.createElement(p.i,null),r.createElement("div",{className:"pl-5"},r.createElement("div",{className:"field"},r.createElement("label",{className:(0,y.AK)("col-2")},"Project ID"),r.createElement(f.L,{style:{width:"30%"},optionLabel:"id",optionValue:"key",value:E,onChange:function(e){var t=null===n||void 0===n?void 0:n.results.filter((function(t){return t.key===e.value}))[0].name;c(t),g(e.value)},options:null===n||void 0===n?void 0:n.results})),r.createElement("div",{className:"field"},r.createElement("label",{className:(0,y.AK)("col-2")},"Project Name"),r.createElement(m.o,{style:{width:"50%"},value:o,disabled:!0}))),r.createElement(p.i,null),r.createElement(j,{className:"custom-tabview"},r.createElement(I,{header:"Purchases"},r.createElement(l.Gn,{loading:C,emptyMessage:r.createElement("h3",{className:"text-center"},E?"No Purchase Inquiry For Selected Project":"Select a Project To View"),style:{height:100*((null===w||void 0===w?void 0:w.length)||1),minHeight:150,maxHeight:250,overflowX:"auto",border:"2px solid",padding:10,margin:10},value:w},r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"grn_no",field:"grn_number",header:"GRN No",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"grn_date",field:"grn_date",header:"GRN Date",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"vendor",field:"vendor",header:"Vendor",sortable:!0,filter:!0,style:{minWidth:"12rem"}}),r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"uom",field:"item_oum",header:"UOM",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"quantity",field:"qty",header:"Quantity",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"unit_price",field:"unitprice",header:"Unit Price",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"net_amount",field:"netamt",header:"Net Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"tax_amount",field:"taxamt",header:"Tax Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),r.createElement(u.s,{headerStyle:b.OG,bodyClassName:"total_amount",field:"totalamt",header:"Total Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}}))),r.createElement(I,{header:"Progress"},r.createElement("p",null,"Under Development")),r.createElement(I,{header:"Availability"},r.createElement("p",null,"Under Development"))))},R=r.createElement(a.AW,{path:q},r.createElement(a.AW,{index:!0,element:r.createElement(D,null)})),L=function(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"/",element:r.createElement(l.SV,{navItems:c})},r.createElement(a.AW,{index:!0,element:r.createElement(a.Fg,{to:q,replace:!0})}),R,r.createElement(a.AW,{path:":page/comming-soon",element:r.createElement(l.hg,null)}),r.createElement(a.AW,{path:"*",element:r.createElement(l.EN,{relative:!0})})))}},8356:function(e,t,n){n.d(t,{i:function(){return i}});var r=n(969),a=n(4756);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var i=r.forwardRef((function(e,t){var n="horizontal"===e.layout,o="vertical"===e.layout,c=a.gb.findDiffKeys(e,i.defaultProps),s=(0,a.AK)("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":n&&(!e.align||"left"===e.align),"p-divider-right":n&&"right"===e.align,"p-divider-center":n&&"center"===e.align||o&&(!e.align||"center"===e.align),"p-divider-top":o&&"top"===e.align,"p-divider-bottom":o&&"bottom"===e.align},e.className);return r.createElement("div",l({className:s,style:e.style,role:"separator"},c),r.createElement("div",{className:"p-divider-content"},e.children))}));i.displayName="Divider",i.defaultProps={__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null}}}]);
//# sourceMappingURL=71.4b1cf3df.chunk.js.map