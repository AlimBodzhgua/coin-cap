(self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[]).push([[792],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),preview_api_dist=__webpack_require__("./node_modules/@storybook/preview-api/dist/index.mjs"),channels_dist=__webpack_require__("./node_modules/@storybook/channels/dist/index.mjs");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,channels_dist.u9)({page:"preview"});preview_api_dist.MC.setChannel(channel),"DEVELOPMENT"===dist.S.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new preview_api_dist.tt((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,preview_api_dist.SX)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./config/storybook/preview.tsx")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,":root{--navbar-height: 60px;--sidebar-width: 220px;--sidebar-width-collapsed: 85px;--navbar-bg-color: #191919;--sidebar-bg-color: #24484E;--page-bg-color: #252525;--table-bg-color: #191919;--table-border-color: #080808;--orange-color: #FD4648}*{margin:0;padding:0;box-sizing:border-box}#root{font-family:Lato,sans-serif;font-size:16px;color:#fff}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray}::-webkit-scrollbar-thumb{background:#929292;border-radius:10px;transition:background .4s linear}::-webkit-scrollbar-thumb:hover{background:#797979}","",{version:3,sources:["webpack://./src/styles/variables/global.scss","webpack://./src/styles/index.scss"],names:[],mappings:"AAAA,MACC,qBAAA,CACA,sBAAA,CACA,+BAAA,CAEA,0BAAA,CACA,2BAAA,CACA,wBAAA,CACA,yBAAA,CACA,6BAAA,CAEA,uBAAA,CCND,EACC,QAAA,CACA,SAAA,CACA,qBAAA,CAGD,MACC,2BAAA,CACA,cAAA,CACA,UAAA,CAGD,oBACI,SAAA,CACA,UAAA,CAIJ,0BACI,6BAAA,CAIJ,0BACI,kBAAA,CACA,kBAAA,CACH,gCAAA,CAID,gCAEI,kBAAA",sourcesContent:[":root {\r\n\t--navbar-height: 60px;\r\n\t--sidebar-width: 220px;\r\n\t--sidebar-width-collapsed: 85px;\r\n\r\n\t--navbar-bg-color: #191919;\r\n\t--sidebar-bg-color: #24484E;\r\n\t--page-bg-color: #252525;\r\n\t--table-bg-color: #191919;\r\n\t--table-border-color: #080808;\r\n\r\n\t--orange-color: #FD4648;\r\n}","@use \"sass:color\";\r\n@import 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap';\r\n@import 'variables/global';\r\n\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n#root {\r\n\tfont-family: Lato, sans-serif;\r\n\tfont-size: 16px;\r\n\tcolor: #fff;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 6px;\r\n    height: 6px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n}\r\n \r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: #929292; \r\n    border-radius: 10px;\r\n\ttransition: background .4s linear;\r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n    // background: darken(#929292, 10%); \r\n    background: color.adjust(#929292, $lightness: -10%); \r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./config/storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>storybook_preview});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),BrowserDecorator=function(Story){return react.createElement(dist.Kd,null,react.createElement(Story,null))};BrowserDecorator.__docgenInfo={description:"",methods:[],displayName:"BrowserDecorator"};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;var StyleDecorator=function(Story){return react.createElement(Story,null)};StyleDecorator.__docgenInfo={description:"",methods:[],displayName:"StyleDecorator"};var react_redux=__webpack_require__("./node_modules/react-redux/dist/react-redux.mjs"),redux_toolkit_modern=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs"),currencySlice=__webpack_require__("./src/redux/slices/currencySlice.ts"),axios=__webpack_require__("./node_modules/axios/lib/axios.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var coinHeaders={"Content-Type":"application/json","x-access-token":"coinranking2eb56d200a0d6048867e2e0f8fd62263c88205177c531252"},fetchCoins=(0,redux_toolkit_modern.zD)("fetchCoins",_async_to_generator((function(){var limit,rejectWithValue,response,e,_arguments=arguments;return _ts_generator(this,(function(_state){switch(_state.label){case 0:limit=_arguments.length>0&&void 0!==_arguments[0]?_arguments[0]:14,rejectWithValue=(_arguments.length>1?_arguments[1]:void 0).rejectWithValue,_state.label=1;case 1:return _state.trys.push([1,3,,4]),[4,axios.A.get("https://api.coinranking.com/v2/coins",{headers:coinHeaders,params:{limit}})];case 2:return response=_state.sent(),console.log("fetch coins"),[2,response.data.data.coins];case 3:return e=_state.sent(),[2,rejectWithValue(JSON.stringify(e))];case 4:return[2]}}))})));function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var initialState={isLoading:!1,error:void 0,coins:[]},coinsSlice=(0,redux_toolkit_modern.Z0)({name:"coinSlice",initialState,reducers:{setCoins:function(state,action){state.coins=action.payload},changeCoinsCurrency:function(state,action){if("USD"===action.payload.currentCurrency){var currency="EUR"===action.payload.targetCurrency?"EUR":"RUB",currencyPrice=action.payload.kurs[currency];state.coins=state.coins.map((function(coin){return _object_spread_props(_object_spread({},coin),{price:String(Number(coin.price)*currencyPrice),marketCap:String(Number(coin.marketCap)*currencyPrice),"24hVolume":String(Number(coin["24hVolume"])*currencyPrice)})}))}else if("EUR"!==action.payload.currentCurrency&&"RUB"!==action.payload.currentCurrency||"EUR"!==action.payload.targetCurrency&&"RUB"!==action.payload.targetCurrency){var currency2=action.payload.currentCurrency,currencyPrice2=action.payload.kurs[currency2];state.coins=state.coins.map((function(coin){return _object_spread_props(_object_spread({},coin),{price:String(Number(coin.price)/currencyPrice2),marketCap:String(Number(coin.marketCap)/currencyPrice2),"24hVolume":String(Number(coin["24hVolume"])/currencyPrice2)})}))}else{var currency1=action.payload.currentCurrency,currencyPrice1=action.payload.kurs[currency1];state.coins=state.coins.map((function(coin){return _object_spread_props(_object_spread({},coin),{price:String(Number(coin.price)/currencyPrice1),marketCap:String(Number(coin.marketCap)/currencyPrice1),"24hVolume":String(Number(coin["24hVolume"])/currencyPrice1)})})),currency1="EUR"===action.payload.targetCurrency?"EUR":"RUB",currencyPrice1=action.payload.kurs[currency1],state.coins=state.coins.map((function(coin){return _object_spread_props(_object_spread({},coin),{price:String(Number(coin.price)*currencyPrice1),marketCap:String(Number(coin.marketCap)*currencyPrice1),"24hVolume":String(Number(coin["24hVolume"])*currencyPrice1)})}))}}},extraReducers:function(builder){builder.addCase(fetchCoins.pending,(function(state){state.isLoading=!0})).addCase(fetchCoins.rejected,(function(state,action){state.isLoading=!1,state.error=action.payload})).addCase(fetchCoins.fulfilled,(function(state,action){state.isLoading=!1,state.coins=action.payload}))}}),coinsReducer=coinsSlice.reducer,es=(coinsSlice.actions,__webpack_require__("./node_modules/react-i18next/dist/es/index.js")),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),esm=__webpack_require__("./node_modules/i18next-http-backend/esm/index.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");i18next.Ay.use(esm.A).use(i18nextBrowserLanguageDetector.A).use(es.r9).init({fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});const i18n=i18next.Ay;var I18nDecorator=function(Story,_ref){var locale=_ref.globals.locale;return(0,react.useEffect)((function(){i18n.changeLanguage(locale)}),[locale]),react.createElement(react.Suspense,{fallback:react.createElement("div",null,"loading translations...")},react.createElement(es.xC,{i18n},react.createElement(Story,null)))};I18nDecorator.__docgenInfo={description:"",methods:[],displayName:"I18nDecorator"};var state,store,preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},globalTypes:{locale:{name:"locale",description:"Internationalization locale",toolbar:{icon:"globe",items:[{value:"en",title:"English"},{value:"ru",title:"Russian"}],showName:!0}}},decorators:[BrowserDecorator,StyleDecorator,I18nDecorator,(state={coins:[],currency:{}},store=function(initialState){var rootReducer={coins:coinsReducer,currency:currencySlice.w8};return(0,redux_toolkit_modern.U1)({reducer:rootReducer,preloadedState:initialState})}(state),function(Story){return react.createElement(react_redux.Kq,{store},react.createElement(Story,null))})]};const storybook_preview=preview},"./src/redux/slices/currencySlice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fu:()=>currencyActions,w8:()=>currencyReducer});var redux_toolkit_modern=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs"),axios=__webpack_require__("./node_modules/axios/lib/axios.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var _ref,fetchCurrency=(0,redux_toolkit_modern.zD)("fetchCurrency",(_ref=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(_,_ref){var rejectWithValue,e;return _ts_generator(this,(function(_state){switch(_state.label){case 0:rejectWithValue=_ref.rejectWithValue,_state.label=1;case 1:return _state.trys.push([1,3,,4]),[4,axios.A.get("\n                https://api.freecurrencyapi.com/v1/latest?apikey=".concat("fca_live_mBkK5XbwtEFQPOyU8ZjvC30vvTAN953iW2rv48JD","&currencies=EUR%2CRUB\n            "))];case 2:return[2,_state.sent().data.data];case 3:return e=_state.sent(),rejectWithValue(JSON.stringify(e)),[3,4];case 4:return[2]}}))})),function(_,_ref1){return _ref.apply(this,arguments)})),initialState={currentCurrency:"USD",targetCurrency:void 0,kurs:void 0,error:void 0,isLoading:!1},currencySlice=(0,redux_toolkit_modern.Z0)({name:"currency",initialState,reducers:{setTargetCurrency:function(state,action){state.targetCurrency=action.payload},resetCurrentCurrency:function(state){state.targetCurrency&&(state.currentCurrency=state.targetCurrency,state.targetCurrency=void 0)}},extraReducers:function(builder){builder.addCase(fetchCurrency.pending,(function(state,action){state.isLoading=!0})).addCase(fetchCurrency.fulfilled,(function(state,action){state.kurs=action.payload,state.isLoading=!1})).addCase(fetchCurrency.rejected,(function(state,action){state.error=action.payload,state.isLoading=!1}))}}),currencyReducer=currencySlice.reducer,currencyActions=currencySlice.actions},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Auth/AuthForms/LoginForm/LoginForm.stories":["./src/components/Auth/AuthForms/LoginForm/LoginForm.stories.tsx",714,228,10],"./components/Auth/AuthForms/LoginForm/LoginForm.stories.tsx":["./src/components/Auth/AuthForms/LoginForm/LoginForm.stories.tsx",714,228,10],"./components/Auth/AuthForms/RegisterForm/RegisterForm.stories":["./src/components/Auth/AuthForms/RegisterForm/RegisterForm.stories.tsx",714,228,694],"./components/Auth/AuthForms/RegisterForm/RegisterForm.stories.tsx":["./src/components/Auth/AuthForms/RegisterForm/RegisterForm.stories.tsx",714,228,694],"./components/CurrencySwitcher/CurrencySwitcher.stories":["./src/components/CurrencySwitcher/CurrencySwitcher.stories.tsx",269],"./components/CurrencySwitcher/CurrencySwitcher.stories.tsx":["./src/components/CurrencySwitcher/CurrencySwitcher.stories.tsx",269],"./components/LangSwitcher/LangSwitcher.stories":["./src/components/LangSwitcher/LangSwitcher.stories.tsx",575],"./components/LangSwitcher/LangSwitcher.stories.tsx":["./src/components/LangSwitcher/LangSwitcher.stories.tsx",575],"./components/UI/AppLink/AppLink.stories":["./src/components/UI/AppLink/AppLink.stories.tsx",686],"./components/UI/AppLink/AppLink.stories.tsx":["./src/components/UI/AppLink/AppLink.stories.tsx",686],"./components/UI/Button/Button.stories":["./src/components/UI/Button/Button.stories.tsx",76],"./components/UI/Button/Button.stories.tsx":["./src/components/UI/Button/Button.stories.tsx",76],"./components/UI/Input/Input.stories":["./src/components/UI/Input/Input.stories.tsx",654],"./components/UI/Input/Input.stories.tsx":["./src/components/UI/Input/Input.stories.tsx",654],"./components/UI/Modal/Modal.stories":["./src/components/UI/Modal/Modal.stories.tsx",818],"./components/UI/Modal/Modal.stories.tsx":["./src/components/UI/Modal/Modal.stories.tsx",818],"./components/UI/Skeleton/Skeleton.stories":["./src/components/UI/Skeleton/Skeleton.stories.tsx",338],"./components/UI/Skeleton/Skeleton.stories.tsx":["./src/components/UI/Skeleton/Skeleton.stories.tsx",338],"./stories/Button.stories":["./src/stories/Button.stories.ts",1,791],"./stories/Button.stories.ts":["./src/stories/Button.stories.ts",1,791],"./stories/Header.stories":["./src/stories/Header.stories.ts",1,512],"./stories/Header.stories.ts":["./src/stories/Header.stories.ts",1,512],"./stories/Page.stories":["./src/stories/Page.stories.ts",1,290],"./stories/Page.stories.ts":["./src/stories/Page.stories.ts",1,290]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"react-dom/client":module=>{"use strict";module.exports=react-dom/client},"?4f7e":()=>{}},__webpack_require__=>{__webpack_require__.O(0,[106],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);