/*! For license information please see pages-ProfilePage-ProfilePage-stories.b8483e25.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[]).push([[9573,7681],{"./src/pages/ProfilePage/ProfilePage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ProfilePage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/pages/ProfilePage/ProfilePage.tsx"),config_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/config/storybook/StoreDecorator.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"pages/ProfilePage",component:_ProfilePage__WEBPACK_IMPORTED_MODULE_0__.default,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Primary={args:{},decorators:(0,config_storybook_StoreDecorator__WEBPACK_IMPORTED_MODULE_1__.R)({user:{authData:{id:"12345",login:"userLogin",email:"user@mail.ru",imageUrl:"https://www.w3schools.com/howto/img_avatar.png",isEmailVerified:!1}}})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: StoreDecorator({\n    user: {\n      authData: authData\n    }\n  })\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Page/Page.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-UI-Page-Page-module__Page--qJvJo{height:calc(100vh - var(--navbar-height));width:100%;padding:25px 0;overflow-y:scroll;display:flex;flex-direction:column;background-color:var(--page-bg-color);color:#fff}","",{version:3,sources:["webpack://./src/components/UI/Page/Page.module.scss"],names:[],mappings:"AACA,iDACC,yCAAA,CACA,UAAA,CACA,cAAA,CAEA,iBAAA,CAEA,YAAA,CACA,qBAAA,CAEA,qCAAA,CACA,UAAA",sourcesContent:["\r\n.Page {\r\n\theight: calc(100vh - var(--navbar-height));\r\n\twidth: 100%;\r\n\tpadding: 25px 0;\r\n\r\n\toverflow-y: scroll;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\r\n\tbackground-color: var(--page-bg-color);\r\n\tcolor: #fff;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Page:"src-components-UI-Page-Page-module__Page--qJvJo"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-pages-ProfilePage-ProfilePage-module__ProfilePage--z1XFB{padding:35px 80px;padding-bottom:72px}.src-pages-ProfilePage-ProfilePage-module__header--Q_za2{margin-bottom:25px}","",{version:3,sources:["webpack://./src/pages/ProfilePage/ProfilePage.module.scss"],names:[],mappings:"AACA,8DACC,iBAAA,CACA,mBAAA,CAGD,yDACC,kBAAA",sourcesContent:["\r\n.ProfilePage {\r\n\tpadding: 35px 80px;\r\n\tpadding-bottom: 72px;\r\n}\r\n\r\n.header {\r\n\tmargin-bottom: 25px;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ProfilePage:"src-pages-ProfilePage-ProfilePage-module__ProfilePage--z1XFB",header:"src-pages-ProfilePage-ProfilePage-module__header--Q_za2"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/UI/Page/Page.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Page});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Page_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Page/Page.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Page_module.A,options);const Page_Page_module=Page_module.A&&Page_module.A.locals?Page_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Page=function(props){var children=props.children,className=props.className;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(Page_Page_module.Page,className),children})};Page.__docgenInfo={description:"",methods:[],displayName:"Page",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/pages/ProfilePage/ProfilePage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ProfilePage_ProfilePage});__webpack_require__("./node_modules/react/index.js");var ProfileCard=__webpack_require__("./src/components/ProfileCard/ProfileCard.tsx"),Page=__webpack_require__("./src/components/UI/Page/Page.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ProfilePage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ProfilePage_module.A,options);const ProfilePage_ProfilePage_module=ProfilePage_module.A&&ProfilePage_module.A.locals?ProfilePage_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProfilePage=function(_ref){var className=_ref.className;return(0,jsx_runtime.jsxs)(Page.Y,{className:classnames_default()(ProfilePage_ProfilePage_module.ProfilePage,className),children:[(0,jsx_runtime.jsx)("h1",{className:ProfilePage_ProfilePage_module.header,children:"Profile"}),(0,jsx_runtime.jsx)(ProfileCard.a,{})]})};const ProfilePage_ProfilePage=ProfilePage;ProfilePage.__docgenInfo={description:"",methods:[],displayName:"ProfilePage",props:{className:{required:!1,tsType:{name:"string"},description:""}}}}}]);