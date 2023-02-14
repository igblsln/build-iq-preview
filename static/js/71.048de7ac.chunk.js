"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[71],{8071:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r,a,l=n(969),i=n(734),o=n(55),c=n(8173),s=[{items:[{label:"Project Inquiry",icon:"pi ml-3",template:(r="project",(0,o.E7)("/".concat(c.o,"/").concat(r)+(a?"/comming-soon":"")))}]}],u=n(6234),d=n(4401),m=n(6770),p=n(7765),f=n(8356),y=n(8224),v=n(4756),b=n(7624),h=n(8904),E=n(3924);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function P(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(){},_=l.forwardRef((function(e,t){var n=O(l.useState(e.id),2),r=n[0],a=n[1],i=O(l.useState(!0),2),o=i[0],c=i[1],s=O(l.useState(!1),2),u=s[0],d=s[1],m=O(l.useState([]),2),p=m[0],f=m[1],y=O(l.useState(e.activeIndex),2),b=y[0],N=y[1],w=l.useRef(null),C=l.useRef(null),S=l.useRef(null),I=l.useRef(null),x=l.useRef(null),A=l.useRef({}),W=e.onTabChange?e.activeIndex:b,k=function(e){return e===W},R=function(e,t){return e&&"TabPanel"===e.props.__TYPE&&p.every((function(e){return e!==t}))},D=function(t,n,r){n.props.disabled||(e.onTabChange?e.onTabChange({originalEvent:t,index:r}):N(r)),L(r),t&&t.preventDefault()},q=function(e,t,n){"Enter"===e.code&&D(e,t,n)},L=function(e){var t=A.current["tab_".concat(e)];t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest"})},G=function(t){e.scrollable&&function(){var e=w.current,t=e.scrollLeft,n=e.scrollWidth,r=v.p7.getWidth(w.current);c(0===t),d(t===n-r)}(),t.preventDefault()},K=function(){return[I.current,x.current].reduce((function(e,t){return t?e+v.p7.getWidth(t):e}),0)},J=function(){var e=v.p7.getWidth(w.current)-K(),t=w.current.scrollLeft-e;w.current.scrollLeft=t<=0?0:t},V=function(){var e=v.p7.getWidth(w.current)-K(),t=w.current.scrollLeft+e,n=w.current.scrollWidth-e;w.current.scrollLeft=t>=n?n:t},H=function(){c(!0),d(!1),f([]),e.onTabChange?e.onTabChange({index:W}):N(e.activeIndex)};l.useEffect((function(){!function(){var e=A.current["tab_".concat(W)];S.current.style.width=v.p7.getWidth(e)+"px",S.current.style.left=v.p7.getOffset(e).left-v.p7.getOffset(C.current).left+"px"}()})),(0,h.nw)((function(){r||a((0,v.Th)())})),(0,h.rf)((function(){if(v.gb.isNotEmpty(p)){var t=function(t){var n=l.Children.map(e.children,(function(e,t){if(R(e,t))return{tab:e,index:t}}));return n.find((function(e){var n=e.tab,r=e.index;return!n.props.disabled&&r>=t}))||n.reverse().find((function(e){var n=e.tab,r=e.index;return!n.props.disabled&&t>r}))}(p[p.length-1]);t&&D(null,t.tab,t.index)}}),[p]),(0,h.rf)((function(){L(e.activeIndex)}),[e.activeIndex]),l.useImperativeHandle(t,(function(){return{reset:H}}));var U=function(t,n){var a=k(n),i=t.props,o=i.headerStyle,c=i.headerClassName,s=i.style,u=i.className,d=i.disabled,m=i.leftIcon,y=i.rightIcon,b=i.header,h=i.headerTemplate,g=i.closable,N=j(j({},o||{}),s||{}),w=(0,v.AK)("p-unselectable-text",{"p-tabview-selected p-highlight":a,"p-disabled":d},c,u),C=r+"_header_"+n,O=r+"_content_"+n,S=d?null:0,T=m&&l.createElement("i",{className:m}),_=l.createElement("span",{className:"p-tabview-title"},b),I=y&&l.createElement("i",{className:y}),x=g&&l.createElement("i",{className:"p-tabview-close pi pi-times",onClick:function(t){return function(t,n){f([].concat(P(p),[n])),e.onTabClose&&e.onTabClose({originalEvent:t,index:n}),t.preventDefault()}(t,n)}}),W=l.createElement("a",{role:"tab",className:"p-tabview-nav-link",onClick:function(e){return D(e,t,n)},id:C,onKeyDown:function(e){return q(e,t,n)},"aria-controls":O,"aria-selected":a,tabIndex:S},T,_,I,x,l.createElement(E.H,null));if(h){var R={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:function(e){return D(e,t,n)},onKeyDown:function(e){return q(e,t,n)},leftIconElement:T,titleElement:_,rightIconElement:I,element:W,props:e,index:n,selected:a,ariaControls:O};W=v.gb.getJSXElement(h,R)}return l.createElement("li",{ref:function(e){return A.current["tab_".concat(n)]=e},className:w,style:N,role:"presentation"},W)},z=v.gb.findDiffKeys(e,_.defaultProps),Q=(0,v.AK)("p-tabview p-component",{"p-tabview-scrollable":e.scrollable},e.className),Y=function(){var t=l.Children.map(e.children,(function(e,t){if(R(e,t))return U(e,t)}));return l.createElement("div",{ref:w,id:r,className:"p-tabview-nav-content",style:e.style,onScroll:G},l.createElement("ul",{ref:C,className:"p-tabview-nav",role:"tablist"},t,l.createElement("li",{ref:S,className:"p-tabview-ink-bar"})))}(),Z=function(){var t=(0,v.AK)("p-tabview-panels",e.panelContainerClassName),n=l.Children.map(e.children,(function(t,n){if(R(t,n)&&(!e.renderActiveOnly||k(n))){var a=k(n),i=j(j({},t.props.contentStyle||{}),t.props.style||{}),o=(0,v.AK)(t.props.contentClassName,t.props.className,"p-tabview-panel",{"p-hidden":!a}),c=r+"_content_"+n,s=r+"_header_"+n,u=v.gb.findDiffKeys(t.props,T.defaultProps);return l.createElement("div",g({},u,{id:c,"aria-labelledby":s,"aria-hidden":!a,className:o,style:i,role:"tabpanel"}),e.renderActiveOnly?a&&t.props.children:t.props.children)}}));return l.createElement("div",{className:t,style:e.panelContainerStyle},n)}(),F=e.scrollable&&!o?l.createElement("button",{ref:I,className:"p-tabview-nav-prev p-tabview-nav-btn p-link",onClick:J,type:"button"},l.createElement("span",{className:"pi pi-chevron-left"}),l.createElement(E.H,null)):null,M=function(){if(e.scrollable&&!u)return l.createElement("button",{ref:x,className:"p-tabview-nav-next p-tabview-nav-btn p-link",onClick:V,type:"button"},l.createElement("span",{className:"pi pi-chevron-right"}),l.createElement(E.H,null))}();return l.createElement("div",g({className:Q},z),l.createElement("div",{className:"p-tabview-nav-container"},F,Y,M),Z)}));T.displayName="TabPanel",T.defaultProps={__TYPE:"TabPanel",header:null,headerTemplate:null,leftIcon:null,rightIcon:null,closable:!1,disabled:!1,style:null,className:null,headerStyle:null,headerClassName:null,contentStyle:null,contentClassName:null},_.displayName="TabView",_.defaultProps={__TYPE:"TabView",id:null,activeIndex:0,style:null,className:null,renderActiveOnly:!0,onTabChange:null,onTabClose:null,scrollable:!1,panelContainerStyle:null,panelContainerClassName:null};var I=n(6822),x=n(8079),A=n(2504),W=A.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listProjectPurchaseInquiry:e.query({query:function(e){e.page,e.size;var t=e.projectId;return{url:(0,A.DS)("/inquiry/purchase/","?project_id=".concat(t||""))}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,x.Z)(e.map((function(e){var t=e.key;return{type:A.pJ.PROJECT_PURCHASE_INQUIRY,id:t}}))),[{type:A.pJ.PROJECT_PURCHASE_INQUIRY,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}}),listProject:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,A.DS)("/project/project/","?page=".concat(t||1,"&page_size=").concat(n||A.IV))}},providesTags:function(e){var t;return e?[].concat((0,x.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.id;return{type:A.pJ.PROJECT,id:t}}))),[{type:A.pJ.PROJECT,id:"LIST"}]):[{type:A.pJ.PROJECT,id:"LIST"}]}})}}}),k=W.useListProjectPurchaseInquiryQuery,R=(W.useGetErrorProneQuery,W.useListProjectQuery),D="project",q=function(e){var t=R({}),n=t.data,r=(t.isLoading,(0,l.useState)("")),a=(0,u.Z)(r,2),i=a[0],c=a[1],s=(0,l.useState)(""),h=(0,u.Z)(s,2),E=h[0],g=h[1],N=k({projectId:E},{skip:!E}),w=N.data,C=N.isFetching;return l.createElement(l.Fragment,null,l.createElement("div",{className:"flex"},l.createElement("h3",{className:(0,v.AK)("m-0 my-auto")},"Project Inquiry"),l.createElement(I.rU,{to:"/projects",style:{textDecoration:"none",marginLeft:"auto"}},l.createElement(m.z,{label:"Back",className:"ml-3"}))),l.createElement(f.i,null),l.createElement("div",{className:"pl-5"},l.createElement("div",{className:"field"},l.createElement("label",{className:(0,v.AK)("col-2")},"Project Code"),l.createElement(y.L,{style:{width:"30%"},optionLabel:"id",optionValue:"key",value:E,filter:!0,filterBy:"id",onChange:function(e){var t=null===n||void 0===n?void 0:n.results.filter((function(t){return t.key===e.value}))[0].name;c(t),g(e.value)},options:null===n||void 0===n?void 0:n.results})),l.createElement("div",{className:"field"},l.createElement("label",{className:(0,v.AK)("col-2")},"Project Name"),l.createElement(p.o,{style:{width:"50%"},value:i,disabled:!0}))),l.createElement(f.i,null),l.createElement(_,{className:"custom-tabview"},l.createElement(T,{header:"Purchases"},l.createElement(o.Gn,{loading:C,emptyMessage:l.createElement("h3",{className:"text-center"},E?"No Purchase Inquiry For Selected Project":"Select a Project To View"),style:{height:100*((null===w||void 0===w?void 0:w.length)||1),minHeight:150,maxHeight:250,overflowX:"auto",border:"2px solid",padding:10,margin:10},value:w},l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"grn_no",field:"grn_number",header:"GRN No",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"grn_date",field:"grn_date",header:"GRN Date",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"vendor",field:"vendor",header:"Vendor",sortable:!0,filter:!0,style:{minWidth:"12rem"}}),l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"uom",field:"item_oum",header:"UOM",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"quantity",field:"qty",header:"Quantity",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"unit_price",field:"unitprice",header:"Unit Price",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"net_amount",field:"netamt",header:"Net Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"tax_amount",field:"taxamt",header:"Tax Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:b.OG,bodyClassName:"total_amount",field:"totalamt",header:"Total Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}})))))},L=l.createElement(i.AW,{path:D},l.createElement(i.AW,{index:!0,element:l.createElement(q,null)})),G=function(){return l.createElement(i.Z5,null,l.createElement(i.AW,{path:"/",element:l.createElement(o.SV,{navItems:s})},l.createElement(i.AW,{index:!0,element:l.createElement(i.Fg,{to:D,replace:!0})}),L,l.createElement(i.AW,{path:":page/comming-soon",element:l.createElement(o.hg,null)}),l.createElement(i.AW,{path:"*",element:l.createElement(o.EN,{relative:!0})})))}},8356:function(e,t,n){n.d(t,{i:function(){return i}});var r=n(969),a=n(4756);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var i=r.forwardRef((function(e,t){var n="horizontal"===e.layout,o="vertical"===e.layout,c=a.gb.findDiffKeys(e,i.defaultProps),s=(0,a.AK)("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":n&&(!e.align||"left"===e.align),"p-divider-right":n&&"right"===e.align,"p-divider-center":n&&"center"===e.align||o&&(!e.align||"center"===e.align),"p-divider-top":o&&"top"===e.align,"p-divider-bottom":o&&"bottom"===e.align},e.className);return r.createElement("div",l({className:s,style:e.style,role:"separator"},c),r.createElement("div",{className:"p-divider-content"},e.children))}));i.displayName="Divider",i.defaultProps={__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null}}}]);
//# sourceMappingURL=71.048de7ac.chunk.js.map