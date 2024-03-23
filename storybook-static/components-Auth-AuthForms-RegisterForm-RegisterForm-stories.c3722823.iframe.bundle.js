"use strict";(self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[]).push([[694],{"./src/components/Auth/AuthForms/RegisterForm/RegisterForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RegisterForm_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Input=__webpack_require__("./src/components/UI/Input/Input.tsx"),Button=__webpack_require__("./src/components/UI/Button/Button.tsx"),icons_email=__webpack_require__("./src/assets/icons/email.svg"),icons_password=__webpack_require__("./src/assets/icons/password.svg"),eye=__webpack_require__("./src/assets/icons/eye.svg"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),RegisterForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Auth/AuthForms/RegisterForm/RegisterForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(RegisterForm_module.A,options);const RegisterForm_RegisterForm_module=RegisterForm_module.A&&RegisterForm_module.A.locals?RegisterForm_module.A.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _extends(){return _extends=Object.assign?Object.assign.bind():function _extends(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var RegisterForm=(0,react.memo)((function(_ref){var className=_ref.className,t=(0,es.Bd)().t,_useState=_sliced_to_array((0,react.useState)(""),2),email=_useState[0],setEmail=_useState[1],_useState1=_sliced_to_array((0,react.useState)(""),2),password=_useState1[0],setPassword=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(!1),2),showPassword=_useState2[0],setShowPassword=_useState2[1],_useForm=(0,index_esm.mN)({mode:"onSubmit"}),register=_useForm.register,handleSubmit=_useForm.handleSubmit,errors=_useForm.formState.errors;return React.createElement("form",{action:"",onSubmit:handleSubmit((function(e){console.log(e)})),className:classnames_default()(RegisterForm_RegisterForm_module.RegisterForm,className)},React.createElement(Input.p,_extends({addonBefore:React.createElement(icons_email.A,{className:RegisterForm_RegisterForm_module.icon}),placeholder:t("Enter email..."),value:email,className:RegisterForm_RegisterForm_module.inputField},register("email",{required:{value:!0,message:t("Please enter your email.")}}),{onChange:function(e){setEmail(e.target.value)}})),errors.email&&React.createElement("div",{className:RegisterForm_RegisterForm_module.message},errors.email.message),React.createElement(Input.p,_extends({addonBefore:React.createElement(icons_password.A,{className:RegisterForm_RegisterForm_module.icon}),addonAfter:React.createElement(eye.A,{className:RegisterForm_RegisterForm_module.iconRight,onClick:function(){setShowPassword((function(prev){return!prev}))}}),placeholder:t("Enter password..."),type:showPassword?"text":"password",value:password,className:RegisterForm_RegisterForm_module.inputField},register("password",{required:{value:!0,message:t("Please enter your password.")},minLength:{value:8,message:t("Passwrod should contain at least 8 scharacters")}}),{onChange:function(e){setPassword(e.target.value)}})),errors.password&&React.createElement("div",{className:RegisterForm_RegisterForm_module.message},errors.password.message),React.createElement(Button.$,{className:RegisterForm_RegisterForm_module.button,type:"submit"},t("Register")),React.createElement("div",null,"Already have an account? Sign in"))}));RegisterForm.__docgenInfo={description:"",methods:[],displayName:"RegisterForm",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const RegisterForm_stories={title:"Components/RegisterForm",component:RegisterForm,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};var Primary={args:{}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Auth/AuthForms/RegisterForm/RegisterForm.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__RegisterForm--KeAVB{width:400px;display:flex;flex-direction:column;align-items:center;margin:5px 0}.src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__inputField--Vas1W{margin-bottom:10px;width:100%}.src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__icon--Q7gYJ{width:20px;height:20px;margin-right:5px}.src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__iconRight--jLprY{width:22px;height:22px;align-self:flex-end;margin-left:5px}.src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__iconRight--jLprY:hover{cursor:pointer}.src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__button--G5Vjo{margin:12px 0;background-color:var(--orange-color)}.src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__message--uNf71{color:var(--orange-color);align-self:flex-start;padding-left:12px}","",{version:3,sources:["webpack://./src/components/Auth/AuthForms/RegisterForm/RegisterForm.module.scss"],names:[],mappings:"AACA,qFACC,WAAA,CAEA,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,YAAA,CAGD,mFACC,kBAAA,CACA,UAAA,CAGD,6EACC,UAAA,CACA,WAAA,CACA,gBAAA,CAGD,kFACC,UAAA,CACA,WAAA,CAEA,mBAAA,CACA,eAAA,CAEA,wFACC,cAAA,CAKF,+EACC,aAAA,CACA,oCAAA,CAGD,gFACC,yBAAA,CACA,qBAAA,CAEA,iBAAA",sourcesContent:["\r\n.RegisterForm {\r\n\twidth: 400px;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\r\n\tmargin: 5px 0;\r\n}\r\n\r\n.inputField {\r\n\tmargin-bottom: 10px;\r\n\twidth: 100%;\r\n}\r\n\r\n.icon {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.iconRight {\r\n\twidth: 22px;\r\n\theight: 22px;\r\n\r\n\talign-self: flex-end;\r\n\tmargin-left: 5px;\r\n\r\n\t&:hover {\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n\r\n\r\n.button {\r\n\tmargin: 12px 0;\r\n\tbackground-color: var(--orange-color);\r\n}\r\n\r\n.message {\r\n\tcolor: var(--orange-color);\r\n\talign-self: flex-start;\r\n\r\n\tpadding-left: 12px;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={RegisterForm:"src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__RegisterForm--KeAVB",inputField:"src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__inputField--Vas1W",icon:"src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__icon--Q7gYJ",iconRight:"src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__iconRight--jLprY",button:"src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__button--G5Vjo",message:"src-components-Auth-AuthForms-RegisterForm-RegisterForm-module__message--uNf71"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);