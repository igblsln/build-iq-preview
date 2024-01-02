"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[781],{8781:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,a,l=n(969),i=n(734),o=n(2035),c=n(8173),s=[{items:[{label:"Project Inquiry",icon:"pi ml-3",template:(r="project",(0,o.E7)("/".concat(c.o,"/").concat(r)+(a?"/comming-soon":"")))}]}],u=n(6234),d=n(4401),m=n(6770),f=n(7765),p=n(8356),v=n(8224),b=n(1495),y=n(4756),h=n(7624),E=n(4101),g=n(6822),N=n(8079),w=b.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listProjectPurchaseInquiry:e.query({query:function(e){var t=e.projectId;return{url:(0,b.DS)("/inquiry/purchase/","?project_id=".concat(t||""))}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,N.Z)(e.map((function(e){var t=e.key;return{type:b.pJ.PROJECT_PURCHASE_INQUIRY,id:t}}))),[{type:b.pJ.PROJECT_PURCHASE_INQUIRY,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),C=w.useListProjectPurchaseInquiryQuery,O=(w.useGetErrorProneQuery,"project"),P=function(e){var t=(0,b.JB)().data,n=(0,l.useState)(""),r=(0,u.Z)(n,2),a=r[0],i=r[1],c=(0,l.useState)(""),s=(0,u.Z)(c,2),N=s[0],w=s[1],O=C({projectId:N},{skip:!N}),P=O.data,S=O.isFetching;return l.createElement(l.Fragment,null,l.createElement("div",{className:"flex"},l.createElement("h3",{className:(0,y.AK)("m-0 my-auto")},"Project Inquiry"),l.createElement(g.rU,{to:"/projects",style:{textDecoration:"none",marginLeft:"auto"}},l.createElement(m.z,{label:"Back",className:"ml-3"}))),l.createElement(p.i,null),l.createElement("div",{className:"pl-5"},l.createElement("div",{className:"field"},l.createElement("label",{className:(0,y.AK)("col-2")},"Project Code"),l.createElement(v.L,{style:{width:"30%"},optionLabel:"id",optionValue:"key",value:N,filter:!0,filterBy:"id",onChange:function(e){var n=null===t||void 0===t?void 0:t.filter((function(t){return t.key===e.value}))[0].name;i(n),w(e.value)},options:t})),l.createElement("div",{className:"field"},l.createElement("label",{className:(0,y.AK)("col-2")},"Project Name"),l.createElement(f.o,{style:{width:"50%"},value:a,disabled:!0}))),l.createElement(p.i,null),l.createElement(E.f,{className:"custom-tabview"},l.createElement(E.x,{header:"Purchases"},l.createElement(o.Gn,{loading:S,emptyMessage:l.createElement("h3",{className:"text-center"},N?"No Purchase Inquiry For Selected Project":"Select a Project To View"),style:{height:100*((null===P||void 0===P?void 0:P.length)||1),minHeight:150,maxHeight:250,overflowX:"auto",border:"2px solid",padding:10,margin:10},value:P},l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"grn_no",field:"grn_number",header:"GRN No",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"grn_date",field:"grn_date",header:"GRN Date",sortable:!0,filter:!0,dataType:"numeric",style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"vendor",field:"vendor",header:"Vendor",sortable:!0,filter:!0,style:{minWidth:"12rem"}}),l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"uom",field:"item_oum",header:"UOM",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"quantity",field:"qty",header:"Quantity",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"unit_price",field:"unitprice",header:"Unit Price",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"net_amount",field:"netamt",header:"Net Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"tax_amount",field:"taxamt",header:"Tax Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}}),l.createElement(d.s,{headerStyle:h.OG,bodyClassName:"total_amount",field:"totalamt",header:"Total Amount",sortable:!0,filter:!0,style:{minWidth:"8rem"}})))))},S=l.createElement(i.AW,{path:O},l.createElement(i.AW,{index:!0,element:l.createElement(P,null)})),_=function(){var e,t,n,r=(null===(n=null===(t=null===(e=(0,b.aC)().user)||void 0===e?void 0:e.role[0])||void 0===t?void 0:t.access)||void 0===n?void 0:n.map((function(e){return e.name})))||[];return l.createElement(i.Z5,null,r.includes(c.a)?l.createElement(i.AW,{path:"/",element:l.createElement(o.SV,{navItems:s})},l.createElement(i.AW,{index:!0,element:l.createElement(i.Fg,{to:O,replace:!0})}),S,l.createElement(i.AW,{path:":page/comming-soon",element:l.createElement(o.hg,null)}),l.createElement(i.AW,{path:"*",element:l.createElement(o.EN,{relative:!0})})):l.createElement(i.AW,{path:"/",element:l.createElement(o.SV,{navItems:s})},l.createElement(i.AW,{path:"*",element:l.createElement(o.Sd,{relative:!0})})))}},8356:function(e,t,n){n.d(t,{i:function(){return i}});var r=n(969),a=n(4756);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var i=r.forwardRef((function(e,t){var n="horizontal"===e.layout,o="vertical"===e.layout,c=a.gb.findDiffKeys(e,i.defaultProps),s=(0,a.AK)("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":n&&(!e.align||"left"===e.align),"p-divider-right":n&&"right"===e.align,"p-divider-center":n&&"center"===e.align||o&&(!e.align||"center"===e.align),"p-divider-top":o&&"top"===e.align,"p-divider-bottom":o&&"bottom"===e.align},e.className);return r.createElement("div",l({className:s,style:e.style,role:"separator"},c),r.createElement("div",{className:"p-divider-content"},e.children))}));i.displayName="Divider",i.defaultProps={__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null}},4101:function(e,t,n){n.d(t,{f:function(){return b},x:function(){return v}});var r=n(969),a=n(8904),l=n(3924),i=n(4756);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function d(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){},b=r.forwardRef((function(e,t){var n=m(r.useState(e.id),2),c=n[0],s=n[1],u=m(r.useState(!0),2),f=u[0],y=u[1],h=m(r.useState(!1),2),E=h[0],g=h[1],N=m(r.useState([]),2),w=N[0],C=N[1],O=m(r.useState(e.activeIndex),2),P=O[0],S=O[1],_=r.useRef(null),j=r.useRef(null),I=r.useRef(null),x=r.useRef(null),A=r.useRef(null),T=r.useRef({}),W=e.onTabChange?e.activeIndex:P,k=function(e){return e===W},D=function(e,t){return e&&"TabPanel"===e.props.__TYPE&&w.every((function(e){return e!==t}))},R=function(t,n,r){n.props.disabled||(e.onTabChange?e.onTabChange({originalEvent:t,index:r}):S(r)),G(r),t&&t.preventDefault()},q=function(e,t,n){"Enter"===e.code&&R(e,t,n)},G=function(e){var t=T.current["tab_".concat(e)];t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest"})},K=function(t){e.scrollable&&function(){var e=_.current,t=e.scrollLeft,n=e.scrollWidth,r=i.p7.getWidth(_.current);y(0===t),g(t===n-r)}(),t.preventDefault()},L=function(){return[x.current,A.current].reduce((function(e,t){return t?e+i.p7.getWidth(t):e}),0)},V=function(){var e=i.p7.getWidth(_.current)-L(),t=_.current.scrollLeft-e;_.current.scrollLeft=t<=0?0:t},H=function(){var e=i.p7.getWidth(_.current)-L(),t=_.current.scrollLeft+e,n=_.current.scrollWidth-e;_.current.scrollLeft=t>=n?n:t},U=function(){y(!0),g(!1),C([]),e.onTabChange?e.onTabChange({index:W}):S(e.activeIndex)};r.useEffect((function(){!function(){var e=T.current["tab_".concat(W)];I.current.style.width=i.p7.getWidth(e)+"px",I.current.style.left=i.p7.getOffset(e).left-i.p7.getOffset(j.current).left+"px"}()})),(0,a.nw)((function(){c||s((0,i.Th)())})),(0,a.rf)((function(){if(i.gb.isNotEmpty(w)){var t=function(t){var n=r.Children.map(e.children,(function(e,t){if(D(e,t))return{tab:e,index:t}}));return n.find((function(e){var n=e.tab,r=e.index;return!n.props.disabled&&r>=t}))||n.reverse().find((function(e){var n=e.tab,r=e.index;return!n.props.disabled&&t>r}))}(w[w.length-1]);t&&R(null,t.tab,t.index)}}),[w]),(0,a.rf)((function(){G(e.activeIndex)}),[e.activeIndex]),r.useImperativeHandle(t,(function(){return{reset:U}}));var J=function(t,n){var a=k(n),o=t.props,s=o.headerStyle,u=o.headerClassName,m=o.style,f=o.className,v=o.disabled,b=o.leftIcon,y=o.rightIcon,h=o.header,E=o.headerTemplate,g=o.closable,N=p(p({},s||{}),m||{}),O=(0,i.AK)("p-unselectable-text",{"p-tabview-selected p-highlight":a,"p-disabled":v},u,f),P=c+"_header_"+n,S=c+"_content_"+n,_=v?null:0,j=b&&r.createElement("i",{className:b}),I=r.createElement("span",{className:"p-tabview-title"},h),x=y&&r.createElement("i",{className:y}),A=g&&r.createElement("i",{className:"p-tabview-close pi pi-times",onClick:function(t){return function(t,n){C([].concat(d(w),[n])),e.onTabClose&&e.onTabClose({originalEvent:t,index:n}),t.preventDefault()}(t,n)}}),W=r.createElement("a",{role:"tab",className:"p-tabview-nav-link",onClick:function(e){return R(e,t,n)},id:P,onKeyDown:function(e){return q(e,t,n)},"aria-controls":S,"aria-selected":a,tabIndex:_},j,I,x,A,r.createElement(l.H,null));if(E){var D={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:function(e){return R(e,t,n)},onKeyDown:function(e){return q(e,t,n)},leftIconElement:j,titleElement:I,rightIconElement:x,element:W,props:e,index:n,selected:a,ariaControls:S};W=i.gb.getJSXElement(E,D)}return r.createElement("li",{ref:function(e){return T.current["tab_".concat(n)]=e},className:O,style:N,role:"presentation"},W)},Y=i.gb.findDiffKeys(e,b.defaultProps),Q=(0,i.AK)("p-tabview p-component",{"p-tabview-scrollable":e.scrollable},e.className),F=function(){var t=r.Children.map(e.children,(function(e,t){if(D(e,t))return J(e,t)}));return r.createElement("div",{ref:_,id:c,className:"p-tabview-nav-content",style:e.style,onScroll:K},r.createElement("ul",{ref:j,className:"p-tabview-nav",role:"tablist"},t,r.createElement("li",{ref:I,className:"p-tabview-ink-bar"})))}(),Z=function(){var t=(0,i.AK)("p-tabview-panels",e.panelContainerClassName),n=r.Children.map(e.children,(function(t,n){if(D(t,n)&&(!e.renderActiveOnly||k(n))){var a=k(n),l=p(p({},t.props.contentStyle||{}),t.props.style||{}),s=(0,i.AK)(t.props.contentClassName,t.props.className,"p-tabview-panel",{"p-hidden":!a}),u=c+"_content_"+n,d=c+"_header_"+n,m=i.gb.findDiffKeys(t.props,v.defaultProps);return r.createElement("div",o({},m,{id:u,"aria-labelledby":d,"aria-hidden":!a,className:s,style:l,role:"tabpanel"}),e.renderActiveOnly?a&&t.props.children:t.props.children)}}));return r.createElement("div",{className:t,style:e.panelContainerStyle},n)}(),z=e.scrollable&&!f?r.createElement("button",{ref:x,className:"p-tabview-nav-prev p-tabview-nav-btn p-link",onClick:V,type:"button"},r.createElement("span",{className:"pi pi-chevron-left"}),r.createElement(l.H,null)):null,B=function(){if(e.scrollable&&!E)return r.createElement("button",{ref:A,className:"p-tabview-nav-next p-tabview-nav-btn p-link",onClick:H,type:"button"},r.createElement("span",{className:"pi pi-chevron-right"}),r.createElement(l.H,null))}();return r.createElement("div",o({className:Q},Y),r.createElement("div",{className:"p-tabview-nav-container"},z,F,B),Z)}));v.displayName="TabPanel",v.defaultProps={__TYPE:"TabPanel",header:null,headerTemplate:null,leftIcon:null,rightIcon:null,closable:!1,disabled:!1,style:null,className:null,headerStyle:null,headerClassName:null,contentStyle:null,contentClassName:null},b.displayName="TabView",b.defaultProps={__TYPE:"TabView",id:null,activeIndex:0,style:null,className:null,renderActiveOnly:!0,onTabChange:null,onTabClose:null,scrollable:!1,panelContainerStyle:null,panelContainerClassName:null}}}]);
//# sourceMappingURL=781.86e127d4.chunk.js.map