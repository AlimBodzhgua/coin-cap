(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({10:"components-Auth-AuthForms-LoginForm-LoginForm-stories",179:"components-PageRequireAuth-PageRequireAuth-stories",597:"components-TagsSelector-TagsSelector-stories",636:"components-Converter-Converter-Converter-stories",1196:"components-History-HistoryList-HistoryList-stories",1275:"components-Auth-AuthModals-RegisterModal-RegisterModal-stories",1583:"components-ProfileCard-ProfileCard-stories",1604:"components-History-HistoryItem-HistoryItem-stories",1694:"components-Auth-AuthForms-RegisterForm-RegisterForm-stories",1985:"components-WatchList-WatchListItemModal-WatchListItemModal-stories",2146:"components-UI-Message-Message-stories",2654:"components-UI-Input-Input-stories",2985:"pages-ConverterPage-ConverterPage-stories",3076:"components-UI-Button-Button-stories",3379:"components-CoinsSearchBar-CoinsSearchBar-stories",3575:"components-LangSwitcher-LangSwitcher-stories",4029:"components-Auth-AuthModals-LoginModal-LoginModal-stories",5287:"components-PageError-PageError-stories",5517:"components-WatchList-WatchListItemOverview-WatchListItemOverview-stories",5686:"components-UI-AppLink-AppLink-stories",5865:"components-CoinTable-CoinTable-CoinTable-stories",6058:"components-GlobalStats-GlobalStats-GlobalStats-stories",6096:"components-Sidebar-SidebarItem-SidebarItem-stories",6133:"pages-WatchListPage-WatchListPage-stories",6259:"components-Chart-Chart-stories",6281:"pages-CoinsPage-CoinsPage-stories",6338:"components-UI-Skeleton-Skeleton-stories",6874:"components-WatchList-WatchListItem-WathListItem-stories",7067:"components-CoinTable-CoinItem-CoinItem-stories",7228:"components-History-HistoryModal-HistoryModal-stories",7454:"components-Auth-AuthActionsMenu-AuthActionsMenu-stories",7729:"components-WatchList-WatchList-WatchList-stories",7818:"components-UI-Modal-Modal-stories",8070:"components-Auth-AuthForms-PasswordResetForm-PasswordResetForm-stories",8446:"components-UI-LoaderRing-LoaderRing-stories",8713:"components-Navbar-Navbar-stories",8751:"pages-NotFoundPage-NotFoundPage-stories",8935:"pages-MainPage-MainPage-stories",8960:"components-Sidebar-Sidebar-Sidebar-stories",9067:"components-PriceNotationSelector-PriceNotationSelector-stories",9269:"components-CurrencySwitcher-CurrencySwitcher-stories",9573:"pages-ProfilePage-ProfilePage-stories"}[chunkId]||chunkId)+"."+{10:"af45cf23",179:"fc5ffa99",260:"ac94c61a",381:"a169ca65",414:"0369192d",597:"d98dd7fc",636:"a016eaa6",894:"f0e42bcb",1196:"b2bd1ce1",1275:"c79d5434",1583:"07746b0d",1604:"75c6044d",1694:"efa328a8",1985:"3f692131",2146:"217943a5",2433:"c926c876",2555:"a83aa986",2586:"b6255da2",2654:"7daf18a3",2739:"0952c938",2985:"0aeefbc4",3062:"afd5049b",3076:"53d27eb8",3228:"ff94d9f0",3281:"8948d0e1",3379:"3c8680dc",3424:"8cd2ff35",3575:"dc470a63",3589:"9c01a6b2",3659:"cb466aaa",3981:"908de02e",3994:"741a151f",4029:"1de0bfe4",4333:"04077e26",4487:"77b38aa2",4855:"ee5b1dcd",5030:"396ad24d",5069:"f2367177",5287:"ffbadcfb",5497:"0da0fc69",5517:"d7b19413",5686:"4ff80ab2",5865:"e7ac8b63",6058:"ee99903f",6096:"9d6ca62e",6133:"afc6febf",6259:"673f5391",6281:"605f3f51",6338:"b53cfb56",6530:"188dce94",6692:"0a60d33f",6874:"16a3d09c",7067:"9bf06d71",7228:"bd13df20",7286:"8ae0b9d0",7454:"1afdd6ba",7648:"8e668855",7681:"aea0c4eb",7729:"df662829",7749:"ea3d090d",7818:"cbf18c11",8070:"e9510a89",8446:"a313c670",8690:"80ff2530",8713:"4ff81491",8751:"43691885",8935:"985d1e34",8960:"63328492",9067:"fffac9ab",9269:"f961ee7b",9573:"dafc924f",9693:"fc705cb7",9982:"3f710f15"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="coin-cap:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","coin-cap:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkcoin_cap=self.webpackChunkcoin_cap||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();