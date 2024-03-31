"use strict";(self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[]).push([[4029],{"./src/components/Auth/AuthModals/LoginModal/LoginModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,isLoading:()=>isLoading});var _LoginModal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Auth/AuthModals/LoginModal/LoginModal.tsx"),config_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/config/storybook/StoreDecorator.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"components/LoginModal",component:_LoginModal__WEBPACK_IMPORTED_MODULE_0__.z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Primary={args:{isOpen:!0,onClose:function(){return console.log("close window")}}},isLoading={args:{isOpen:!0,onClose:function(){return console.log("close window")}},decorators:(0,config_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.R)({user:{isLoading:!0}})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    onClose: () => console.log('close window')\n  }\n}",...Primary.parameters?.docs?.source}}},isLoading.parameters={...isLoading.parameters,docs:{...isLoading.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    onClose: () => console.log('close window')\n  },\n  decorators: StoreDecorator({\n    user: {\n      isLoading: true\n    }\n  })\n}",...isLoading.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","isLoading"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Auth/AuthModals/LoginModal/LoginModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-Auth-AuthModals-LoginModal-LoginModal-module__header--REXHa{margin-bottom:16px}","",{version:3,sources:["webpack://./src/components/Auth/AuthModals/LoginModal/LoginModal.module.scss"],names:[],mappings:"AACA,4EACC,kBAAA",sourcesContent:["\r\n.header {\r\n\tmargin-bottom: 16px;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={header:"src-components-Auth-AuthModals-LoginModal-LoginModal-module__header--REXHa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-UI-Modal-Modal-module__Modal--tab7V{position:absolute;top:0;left:0;height:100vh;width:100vw;background-color:rgba(0,0,0,.6);display:none;justify-content:center;align-items:center}.src-components-UI-Modal-Modal-module__opened--nfNda{display:flex}.src-components-UI-Modal-Modal-module__content--LzFUF{background-color:#252525;color:#fff;padding:25px;border-radius:6px;display:flex;flex-direction:column;align-items:center}","",{version:3,sources:["webpack://./src/components/UI/Modal/Modal.module.scss"],names:[],mappings:"AACA,oDACC,iBAAA,CACA,KAAA,CACA,MAAA,CAEA,YAAA,CACA,WAAA,CAEA,+BAAA,CAEA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,qDACC,YAAA,CAGD,sDACC,wBAAA,CACA,UAAA,CACA,YAAA,CACA,iBAAA,CAEA,YAAA,CACA,qBAAA,CACA,kBAAA",sourcesContent:["\r\n.Modal {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\r\n\tbackground-color: rgb(0 0 0 / 60%);\r\n\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.opened {\r\n\tdisplay: flex;\r\n}\r\n\r\n.content {\r\n\tbackground-color: #252525;\r\n\tcolor: #fff;\r\n\tpadding: 25px;\r\n\tborder-radius: 6px;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Modal:"src-components-UI-Modal-Modal-module__Modal--tab7V",opened:"src-components-UI-Modal-Modal-module__opened--nfNda",content:"src-components-UI-Modal-Modal-module__content--LzFUF"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Auth/AuthModals/LoginModal/LoginModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>LoginModal});var react=__webpack_require__("./node_modules/react/index.js"),Modal=__webpack_require__("./src/components/UI/Modal/Modal.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),LoginFormAsync=(0,react.lazy)((function(){return Promise.all([__webpack_require__.e(7286),__webpack_require__.e(972),__webpack_require__.e(7749)]).then(__webpack_require__.bind(__webpack_require__,"./src/components/Auth/AuthForms/LoginForm/LoginForm.tsx"))})),PasswordResetFormAsync=(0,react.lazy)((function(){return Promise.all([__webpack_require__.e(7286),__webpack_require__.e(972),__webpack_require__.e(894)]).then(__webpack_require__.bind(__webpack_require__,"./src/components/Auth/AuthForms/PasswordResetForm/PasswordResetForm.tsx"))})),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LoginModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Auth/AuthModals/LoginModal/LoginModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LoginModal_module.A,options);const LoginModal_LoginModal_module=LoginModal_module.A&&LoginModal_module.A.locals?LoginModal_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var LoginModal=function(props){var isOpen=props.isOpen,onClose=props.onClose,className=props.className,t=(0,es.Bd)().t,_useState=_sliced_to_array((0,react.useState)("loginForm"),2),activeForm=_useState[0],setAcitveForm=_useState[1],onForget=(0,react.useCallback)((function(){setAcitveForm("resetForm")}),[]),backToLoginForm=(0,react.useCallback)((function(){setAcitveForm("loginForm")}),[]),ActiveForms=(0,react.useMemo)((function(){return{loginForm:(0,jsx_runtime.jsx)(LoginFormAsync,{title:t("Login"),onSuccess:onClose,onForget}),resetForm:(0,jsx_runtime.jsx)(PasswordResetFormAsync,{title:"Forget Password",onSuccess:backToLoginForm,onCancel:backToLoginForm})}}),[onClose,onForget,backToLoginForm]);return(0,jsx_runtime.jsx)(Modal.a,{onClose,isOpen,className:classnames_default()(LoginModal_LoginModal_module.LoginModal,className),children:ActiveForms[activeForm]})};LoginModal.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/UI/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.A,options);const Modal_Modal_module=Modal_module.A&&Modal_module.A.locals?Modal_module.A.locals:void 0;var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Portal=function(props){var children=props.children,_props_element=props.element,element=void 0===_props_element?document.body:_props_element;return(0,react_dom.createPortal)(children,element)},dist_module=__webpack_require__("./node_modules/react-loader-spinner/dist/module.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Modal=function(props){var isOpen=props.isOpen,onClose=props.onClose,className=props.className,children=props.children,closeHandler=(0,react.useCallback)((function(){onClose&&onClose()}),[onClose]),onKeydown=(0,react.useCallback)((function(e){"Escape"===e.key&&closeHandler()}),[]);(0,react.useEffect)((function(){return isOpen&&window.addEventListener("keydown",onKeydown),function(){return window.removeEventListener("keydown",onKeydown)}}),[isOpen]);var obj,key,value;return(0,jsx_runtime.jsx)(Portal,{children:(0,jsx_runtime.jsx)("div",{className:classnames_default()(Modal_Modal_module.Modal,className,(obj={},key=Modal_Modal_module.opened,value=isOpen,key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj)),onClick:function(e){closeHandler()},role:"button",tabIndex:-1,children:(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.content,onClick:function(e){e.stopPropagation()},role:"button",tabIndex:0,children:(0,jsx_runtime.jsx)(react.Suspense,{fallback:(0,jsx_runtime.jsx)(dist_module.ul,{visible:!0,height:"80",width:"80",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#e6e6e6","#cccccc","#b3b3b3","#bfbfbf","#e6e6e6"]}),children})})})})};Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}}}]);