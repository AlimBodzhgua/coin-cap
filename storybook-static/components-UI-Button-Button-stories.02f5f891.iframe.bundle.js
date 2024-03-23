/*! For license information please see components-UI-Button-Button-stories.02f5f891.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[]).push([[76],{"./src/components/UI/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Clear:()=>Clear,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/UI/Button/Button.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"UI-Kit/Button",component:_Button__WEBPACK_IMPORTED_MODULE_0__.$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Primary={args:{children:"button",theme:_Button__WEBPACK_IMPORTED_MODULE_0__.O.primary}},Clear={args:{children:"button",theme:_Button__WEBPACK_IMPORTED_MODULE_0__.O.clear}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'button',\n    theme: ButtonTheme.primary\n  }\n}",...Primary.parameters?.docs?.source}}},Clear.parameters={...Clear.parameters,docs:{...Clear.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'button',\n    theme: ButtonTheme.clear\n  }\n}",...Clear.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Clear"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-UI-Button-Button-module__Button--VCuxu{border:none;padding:4px;color:#fff;font-size:inherit;font-weight:600}.src-components-UI-Button-Button-module__Button--VCuxu:hover{cursor:pointer}.src-components-UI-Button-Button-module__primary--rzhky{color:#fff;background-color:#363636;padding:8px 34px;border-radius:8px;font-weight:600}.src-components-UI-Button-Button-module__clear--qBR77{border:none;padding:none;background:none}","",{version:3,sources:["webpack://./src/components/UI/Button/Button.module.scss"],names:[],mappings:"AACA,uDACC,WAAA,CACA,WAAA,CACA,UAAA,CAEA,iBAAA,CACA,eAAA,CAEA,6DACC,cAAA,CAKF,wDACC,UAAA,CACA,wBAAA,CAEA,gBAAA,CACA,iBAAA,CAEA,eAAA,CAGD,sDACC,WAAA,CACA,YAAA,CACA,eAAA",sourcesContent:["\r\n.Button {\r\n\tborder: none;\r\n\tpadding: 4px;\r\n\tcolor: #fff;\r\n\r\n\tfont-size: inherit;\r\n\tfont-weight: 600;\r\n\r\n\t&:hover {\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n\r\n\r\n.primary {\r\n\tcolor: #fff;\r\n\tbackground-color: #363636;\r\n\r\n\tpadding: 8px 34px;\r\n\tborder-radius: 8px;\r\n\r\n\tfont-weight: 600;\r\n}\r\n\r\n.clear {\r\n\tborder: none;\r\n\tpadding: none;\r\n\tbackground: none;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-components-UI-Button-Button-module__Button--VCuxu",primary:"src-components-UI-Button-Button-module__primary--rzhky",clear:"src-components-UI-Button-Button-module__clear--qBR77"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/UI/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button,O:()=>ButtonTheme});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0;function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function _extends(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ButtonTheme={primary:"primary",secondary:"secondary",clear:"clear"},Button=(0,react.memo)((function(props){var children=props.children,_props_theme=props.theme,theme=void 0===_props_theme?ButtonTheme.primary:_props_theme,className=props.className,otherProps=_object_without_properties(props,["children","theme","className"]);return react.createElement("button",_extends({className:classnames_default()(Button_Button_module.Button,className,Button_Button_module[theme])},otherProps),children)}));Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},theme:{required:!1,tsType:{name:"union",raw:"keyof typeof ButtonTheme",elements:[{name:"literal",value:"primary"},{name:"literal",value:"secondary"},{name:"literal",value:"clear"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes"]}}}]);