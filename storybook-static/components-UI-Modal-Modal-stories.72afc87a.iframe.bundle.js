/*! For license information please see components-UI-Modal-Modal-stories.72afc87a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[]).push([[818],{"./src/components/UI/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.A,options);const Modal_Modal_module=Modal_module.A&&Modal_module.A.locals?Modal_module.A.locals:void 0;var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Portal=function(props){var children=props.children,_props_element=props.element,element=void 0===_props_element?document.body:_props_element;return(0,react_dom.createPortal)(children,element)};var Modal=function(props){var isOpen=props.isOpen,onClose=props.onClose,className=props.className,children=props.children,closeHandler=(0,react.useCallback)((function(){onClose&&onClose()}),[]),onKeydown=(0,react.useCallback)((function(e){"Escape"===e.key&&closeHandler()}),[]);(0,react.useEffect)((function(){return isOpen&&window.addEventListener("keydown",onKeydown),function(){return window.removeEventListener("keydown",onKeydown)}}),[isOpen]);var obj,key,value;return react.createElement(Portal,null,react.createElement("div",{className:classnames_default()(Modal_Modal_module.Modal,className,(obj={},key=Modal_Modal_module.opened,value=isOpen,key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj)),onClick:function(e){closeHandler()},role:"button",tabIndex:-1},react.createElement("div",{className:Modal_Modal_module.content,onClick:function(e){e.stopPropagation()},role:"button",tabIndex:0},children)))};Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Modal_stories={title:"UI-Kit/Modal",component:Modal,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Primary={args:{isOpen:!0,onClose:function(){return console.log("close window")},children:react.createElement("div",null,"Modal window")}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    onClose: () => console.log('close window'),\n    children: <div>Modal window</div>\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-UI-Modal-Modal-module__Modal--tab7V{position:absolute;top:0;left:0;height:100vh;width:100vw;background-color:rgba(0,0,0,.6);display:none;justify-content:center;align-items:center}.src-components-UI-Modal-Modal-module__opened--nfNda{display:flex}.src-components-UI-Modal-Modal-module__content--LzFUF{background-color:#252525;color:#fff;padding:25px;border-radius:6px;display:flex;flex-direction:column;align-items:center}","",{version:3,sources:["webpack://./src/components/UI/Modal/Modal.module.scss"],names:[],mappings:"AACA,oDACC,iBAAA,CACA,KAAA,CACA,MAAA,CAEA,YAAA,CACA,WAAA,CAEA,+BAAA,CAEA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,qDACC,YAAA,CAGD,sDACC,wBAAA,CACA,UAAA,CACA,YAAA,CACA,iBAAA,CAEA,YAAA,CACA,qBAAA,CACA,kBAAA",sourcesContent:["\r\n.Modal {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\r\n\tbackground-color: rgb(0 0 0 / 60%);\r\n\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.opened {\r\n\tdisplay: flex;\r\n}\r\n\r\n.content {\r\n\tbackground-color: #252525;\r\n\tcolor: #fff;\r\n\tpadding: 25px;\r\n\tborder-radius: 6px;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Modal:"src-components-UI-Modal-Modal-module__Modal--tab7V",opened:"src-components-UI-Modal-Modal-module__opened--nfNda",content:"src-components-UI-Modal-Modal-module__content--LzFUF"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);