/*! For license information please see components-PageError-PageError-stories.dbcf0c21.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[]).push([[287],{"./src/components/PageError/PageError.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PageError_stories});__webpack_require__("./node_modules/react/index.js");var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PageError_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PageError/PageError.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PageError_module.A,options);const PageError_PageError_module=PageError_module.A&&PageError_module.A.locals?PageError_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PageError=function(props){var className=props.className,t=(0,es.Bd)().t;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(PageError_PageError_module.PageError,className),children:[(0,jsx_runtime.jsx)("p",{className:PageError_PageError_module.title,children:t("An unexpected error occured")}),(0,jsx_runtime.jsx)("button",{className:PageError_PageError_module.reload,onClick:function(){return location.reload()},children:t("Reload the page")})]})};PageError.__docgenInfo={description:"",methods:[],displayName:"PageError",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const PageError_stories={title:"Components/PageError",component:PageError,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Primary={args:{}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PageError/PageError.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-PageError-PageError-module__PageError--wxbcn{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.src-components-PageError-PageError-module__title--Fr2gr{margin-bottom:12px;font-size:18px;font-weight:800;color:#000}.src-components-PageError-PageError-module__reload--H7vg9{border:none;padding:5px;cursor:pointer}","",{version:3,sources:["webpack://./src/components/PageError/PageError.module.scss"],names:[],mappings:"AAAA,6DACC,YAAA,CAEA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CAGD,yDACC,kBAAA,CAEA,cAAA,CACA,eAAA,CACA,UAAA,CAGD,0DACC,WAAA,CACA,WAAA,CAEA,cAAA",sourcesContent:[".PageError {\r\n\theight: 100vh;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.title {\r\n\tmargin-bottom: 12px;\r\n\r\n\tfont-size: 18px;\r\n\tfont-weight: 800;\r\n\tcolor: #000;\r\n}\r\n\r\n.reload {\r\n\tborder: none;\r\n\tpadding: 5px;\r\n\r\n\tcursor: pointer;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={PageError:"src-components-PageError-PageError-module__PageError--wxbcn",title:"src-components-PageError-PageError-module__title--Fr2gr",reload:"src-components-PageError-PageError-module__reload--H7vg9"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);