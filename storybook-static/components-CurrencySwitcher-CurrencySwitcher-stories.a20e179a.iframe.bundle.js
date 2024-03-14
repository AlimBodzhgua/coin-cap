/*! For license information please see components-CurrencySwitcher-CurrencySwitcher-stories.a20e179a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[]).push([[269],{"./src/components/CurrencySwitcher/CurrencySwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CurrencySwitcher_stories});var react=__webpack_require__("./node_modules/react/index.js"),react_redux=__webpack_require__("./node_modules/react-redux/dist/react-redux.mjs"),Currencies_USD="USD",Currencies_RUB="RUB",Currencies_EUR="EUR",currencySlice=__webpack_require__("./src/redux/slices/currencySlice.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CurrencySwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CurrencySwitcher/CurrencySwitcher.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CurrencySwitcher_module.A,options);const CurrencySwitcher_CurrencySwitcher_module=CurrencySwitcher_module.A&&CurrencySwitcher_module.A.locals?CurrencySwitcher_module.A.locals:void 0;var CurrencySwitcher=(0,react.memo)((function(props){var className=props.className,dispatch=(0,react_redux.wA)(),onCurrencySelect=(0,react.useCallback)((function(e){var targetCurrency=e.target.value;dispatch(currencySlice.Fu.setTargetCurrency(targetCurrency))}),[dispatch]);return react.createElement("select",{className:classnames_default()(CurrencySwitcher_CurrencySwitcher_module.CurrencySwitcher,className),onChange:onCurrencySelect},react.createElement("option",{value:Currencies_USD,className:CurrencySwitcher_CurrencySwitcher_module.CurrencyOption},"USD"),react.createElement("option",{value:Currencies_EUR,className:CurrencySwitcher_CurrencySwitcher_module.CurrencyOption},"EUR"),react.createElement("option",{value:Currencies_RUB,className:CurrencySwitcher_CurrencySwitcher_module.CurrencyOption},"RUB"))}));CurrencySwitcher.__docgenInfo={description:"",methods:[],displayName:"CurrencySwitcher",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const CurrencySwitcher_stories={title:"Components/CurrencySwitcher",component:CurrencySwitcher,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Primary={args:{}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CurrencySwitcher/CurrencySwitcher.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-CurrencySwitcher-CurrencySwitcher-module__CurrencySwitcher--n44o9{background-color:#454545;font-family:inherit;font-weight:600;color:#fff;padding:4px;margin:0 3px;border-radius:4px;border:none}.src-components-CurrencySwitcher-CurrencySwitcher-module__CurrencySwitcher--n44o9:focus{outline:none}.src-components-CurrencySwitcher-CurrencySwitcher-module__CurrencySwitcher--n44o9:hover{cursor:pointer}.src-components-CurrencySwitcher-CurrencySwitcher-module__CurrencyOption--TqMwK{border-bottom:1px solid gray;padding:4px 0}","",{version:3,sources:["webpack://./src/components/CurrencySwitcher/CurrencySwitcher.module.scss"],names:[],mappings:"AACA,kFACC,wBAAA,CAEA,mBAAA,CACA,eAAA,CACA,UAAA,CAEA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,WAAA,CAEA,wFACC,YAAA,CAGD,wFACC,cAAA,CAIF,gFACC,4BAAA,CACA,aAAA",sourcesContent:["\r\n.CurrencySwitcher {\r\n\tbackground-color: #454545;\r\n\r\n\tfont-family: inherit;\r\n\tfont-weight: 600;\r\n\tcolor: #fff;\r\n\r\n\tpadding: 4px;\r\n\tmargin: 0 3px;\r\n\tborder-radius: 4px;\r\n\tborder: none;\r\n\r\n\t&:focus {\r\n\t\toutline: none;\r\n\t}\r\n\r\n\t&:hover {\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n\r\n.CurrencyOption {\r\n\tborder-bottom: 1px solid grey;\r\n\tpadding: 4px 0;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={CurrencySwitcher:"src-components-CurrencySwitcher-CurrencySwitcher-module__CurrencySwitcher--n44o9",CurrencyOption:"src-components-CurrencySwitcher-CurrencySwitcher-module__CurrencyOption--TqMwK"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);