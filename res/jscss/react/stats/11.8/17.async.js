(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"0evu":function(e,t,n){e.exports={main:"antd-pro\\pages\\-account\\-settings\\-info-main",leftmenu:"antd-pro\\pages\\-account\\-settings\\-info-leftmenu",right:"antd-pro\\pages\\-account\\-settings\\-info-right",title:"antd-pro\\pages\\-account\\-settings\\-info-title"}},"N01/":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("mZ4U"),_interopRequireWildcard=__webpack_require__("fbTi");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("enMo");var _input=_interopRequireDefault(__webpack_require__("1HgO"));__webpack_require__("ESh5");var _modal=_interopRequireDefault(__webpack_require__("CtjU"));__webpack_require__("VIk5");var _button=_interopRequireDefault(__webpack_require__("X+Ft"));__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("avCb");var _spin=_interopRequireDefault(__webpack_require__("dbpm"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_defineProperty2=_interopRequireDefault(__webpack_require__("3CjV")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("qk0a");var _menu=_interopRequireDefault(__webpack_require__("G4Sq"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_dva=__webpack_require__("LneV"),_router=_interopRequireDefault(__webpack_require__("dBLl")),_locale=__webpack_require__("TJP2"),_GridContent=_interopRequireDefault(__webpack_require__("v99g")),_Info=_interopRequireDefault(__webpack_require__("0evu")),_dec,_class,_temp,Title=_typography.default.Title,Text=_typography.default.Text,redirect,Item=_menu.default.Item;function getQueryVariable(e){for(var t=window.location.search.substring(1),n=t.split("&"),a=0;a<n.length;a++){var i=n[a].split("=");if(i[0]==e)return i[1]}return!1}function \u4f7f\u7528\u5bc6\u7801\u767b\u5f55(){window.Fthis.setState({services:{Done:(new Date).getTime()}});var e=Base64.encode(document.getElementById("Vemail").value+":"+document.getElementById("Vpasscode").value),t=new XMLHttpRequest;t.open("POST","https://r6sground.cn/user/connect/ubisoftconnect.php",!0),t.withCredentials=!0,t.send('{"APP_ID": "UBIConnect", "Authorization": "'+e+'"}'),window.LOGGINtypeLoading=!0,t.onreadystatechange=function(){if(4==t.readyState){if(window.LOGGINtypeLoading=!1,window.LOGGINtype=!1,window.Fthis.setState({services:{Done:(new Date).getTime()}}),t.status>=200&&t.status<300){var e;try{e=JSON.parse(t.responseText)}catch(e){return void window.pageOnNotie("\u767b\u5f55\u5931\u8d25","\u672a\u77e5\u7684\u9519\u8bef","info")}if(e.error)return e.message=e.message.replace("ubisoft says","\u80b2\u78a7\u8bf4"),e.message=e.message.replace("Invalid credentials","\u90ae\u7bb1\u6216\u5bc6\u7801\u9519\u8bef"),e.message=e.message.replace("Email format is invalid","\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef"),void window.pageOnNotie("\u767b\u5f55\u5931\u8d25",e.message,"info");if("success"==e.state){var n=redirect;if(-1!=navigator.userAgent.indexOf("Electron"))return void(document.location.href="/App/R6BOX/setup");window.ShopOpened=!0,playerinfoFresh(n)}if("oms"==e.state){for(var a in window.LOGGINmodalList=[],e.selection)window.LOGGINmodalList.push([e.selection[a],a]);window.LOGGINmodal=!0}}window.Fthis.setState({services:{Done:(new Date).getTime()}})}}}function \u6307\u5b9a\u8d44\u6599\u6863\u6848(e){window.Fthis.setState({services:{Done:(new Date).getTime()}});var t=Base64.encode(document.getElementById("Vemail").value+":"+document.getElementById("Vpasscode").value),n=new XMLHttpRequest;n.open("POST","https://r6sground.cn/user/connect/ubisoftconnect.php",!0),n.withCredentials=!0,n.send('{"selectProfileId": "'+e+'", "Authorization": "'+t+'"}'),window.\u7528\u6237\u8d44\u6599\u6863\u6848\u9009\u62e9buttonLoading=!0,window.Fthis.setState({services:{Done:(new Date).getTime()}}),n.onreadystatechange=function(){if(4==n.readyState){if(window.LOGGINtypeLoading=!1,window.LOGGINtype=!1,window.Fthis.setState({services:{Done:(new Date).getTime()}}),n.status>=200&&n.status<300){var e=JSON.parse(n.responseText);if(e.error)return e.message=e.message.replace("ubisoft says","\u80b2\u78a7\u8bf4"),e.message=e.message.replace("Invalid credentials","\u90ae\u7bb1\u6216\u5bc6\u7801\u9519\u8bef"),e.message=e.message.replace("Email format is invalid","\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef"),void window.pageOnNotie("\u767b\u5f55\u5931\u8d25",e.message,"info");if("success"==e.state){var t=redirect;if(-1!=navigator.userAgent.indexOf("Electron"))return void(document.location.href="/App/R6BOX/setup");window.ShopOpened=!0,playerinfoFresh(t)}if("oms"==e.state){for(var a in window.LOGGINmodalList=[],e.selection)window.LOGGINmodalList.push([e.selection[a],a]);window.LOGGINmodal=!0}}window.Fthis.setState({services:{Done:(new Date).getTime()}})}}}"undefined"==typeof window.frameLoaded&&(window.frameLoaded=!1),"undefined"==typeof window.LOGGINmodal&&(window.LOGGINmodal=!1,window.LOGGINmodalList=[]),"undefined"==typeof window.LOGGINtype&&(window.LOGGINtype=!1),"undefined"==typeof window.LOGGINtypeLoading&&(window.LOGGINtypeLoading=!1),"undefined"==typeof window.\u7528\u6237\u8d44\u6599\u6863\u6848\u9009\u62e9buttonLoading&&(window.\u7528\u6237\u8d44\u6599\u6863\u6848\u9009\u62e9buttonLoading=!1),window.addEventListener("message",function(e){var topic=e.data.topic;if("INTEGRATOR_LOGGED_IN"==topic){window.frameLoaded=!0,window.Fthis.setState({services:{Done:(new Date).getTime()}});var payload=JSON.parse(e.data.payload);if("ok"==payload.getTicket.status){var data=JSON.stringify(payload.getTicket.payload),xhr=new XMLHttpRequest;xhr.open("POST","https://r6sground.cn/user/connect/ubisoftconnect.php",!0),xhr.withCredentials=!0,xhr.send(data),xhr.onreadystatechange=function(){if(4==xhr.readyState&&xhr.status>=200&&xhr.status<300){var reply=JSON.parse(xhr.responseText);if(reply.error)return reply.message=reply.message.replace("ubisoft says","\u80b2\u78a7\u8bf4"),reply.message=reply.message.replace("Invalid credentials","\u90ae\u7bb1\u6216\u5bc6\u7801\u9519\u8bef"),reply.message=reply.message.replace("Email format is invalid","\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef"),void window.pageOnNotie("\u767b\u5f55\u5931\u8d25",reply.message,"info");"success"==reply.state?(delete window.userinfo,eval(window.needjs),window.Fthis.props.history.replace(redirect)):window.frameLoaded="fail"}}}else window.UBI={},window.UBI.payload=!1}},!1),window.ButtonFUNCTION=function(){this.onChanged=function(e){var t=new XMLHttpRequest;t.open("POST","https://r6sground.cn/user/switchb/?id="+e,!0),t.withCredentials=!0,t.send(),window.ONButtonSwitched.getLoading(e,1),t.onreadystatechange=function(){if(4==t.readyState)if(t.status>=200&&t.status<300){var n;try{n=JSON.parse(window.userinfo.settings),console.log(n)}catch(e){return void console.log(e)}"on"==t.responseText?(n[e]=1,window.ONButtonSwitched.getLoading(e,0)):"off"==t.responseText?(n[e]=0,window.ONButtonSwitched.getLoading(e,0)):window.ONButtonSwitched.getLoading(e,2),console.log("settings"),console.log(n),window.userinfo.settings=JSON.stringify(n),delete window.userinfo,Function('"use strict";try {'+window.needjs+"} catch (error) { console.error(error) };;")()}else window.ONButtonSwitched.getLoading(e,2)}},this.getLoading=function(e,t){if("undefined"==typeof window.sittingWaittingList&&(window.sittingWaittingList={}),"undefined"==typeof t)return 1==window.sittingWaittingList[e];window.sittingWaittingList[e]=t},this.getDisabled=function(e){return 2==window.sittingWaittingList[e]},this.getState=function(e){var t;try{return t=JSON.parse(window.userinfo.settings),1==t[e]}catch(e){return!1}}},window.ONButtonSwitched=new ButtonFUNCTION;var Info=(_dec=(0,_dva.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}}),_dec((_temp=function(_Component){function Info(e){var t;(0,_classCallCheck2.default)(this,Info),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Info).call(this,e)),t.getmenu=function(){var e=t.state.menuMap;return Object.keys(e).map(function(t){return _react.default.createElement(Item,{key:t},e[t])})},t.getRightTitle=function(){var e=t.state,n=e.selectKey,a=e.menuMap;return a[n]},t.selectKey=function(e){var n=e.key;_router.default.push("/account/settings/".concat(n)),t.setState({selectKey:n})},t.resize=function(){t.main&&requestAnimationFrame(function(){try{var e="inline",n=t.main.offsetWidth;t.main.offsetWidth<641&&n>400&&(e="horizontal"),window.innerWidth<768&&n>400&&(e="horizontal"),t.setState({mode:e})}catch(e){}})},t.state={services:[{}],view:"type_a"},t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Info).call(this,e)),t.getmenu=function(){var e=t.state.menuMap;return Object.keys(e).map(function(t){return _react.default.createElement(Item,{key:t},e[t])})},t.getRightTitle=function(){var e=t.state,n=e.selectKey,a=e.menuMap;return a[n]},t.selectKey=function(e){var n=e.key;_router.default.push("/account/settings/".concat(n)),t.setState({selectKey:n})},t.resize=function(){t.main&&requestAnimationFrame(function(){try{var e="inline",n=t.main.offsetWidth;t.main.offsetWidth<641&&n>400&&(e="horizontal"),window.innerWidth<768&&n>400&&(e="horizontal"),t.setState({mode:e})}catch(e){}})};var n=e.match,a=e.location,i={base:"\u8d26\u6237\u8d44\u6599",Prime:"Prime\u8ba2\u9605",uplay:"Uplay\u7ed1\u5b9a",alipay:"\u5b9e\u540d\u8ba4\u8bc1",orders_old:"\u8ba2\u5355",Active:"\u5bc6\u94a5\u5151\u6362",Develop:"\u5f00\u53d1\u8005\u9009\u9879",logout:"\u9000\u51fa\u767b\u5f55"},r=a.pathname.replace("".concat(n.path,"/"),"");return t.state=(0,_defineProperty2.default)({mode:"inline",menuMap:i,selectKey:i[r]?r:"base"},"selectKey",i[r]?r:"uplay"),t}return(0,_inherits2.default)(Info,_Component),(0,_createClass2.default)(Info,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.addEventListener("resize",this.resize),this.resize(),"undefined"!=typeof window.needjs)eval(window.needjs),this.setState({services:{Done:(new Date).getTime()}});else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+window.selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),_this2.setState({services:{Done:(new Date).getTime()}}))}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this;window.Fthis=this;_react.default.createElement(_icon.default,{type:"loading"});var t="https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/logo-large.png",n=_react.default.createElement(_icon.default,{type:"loading",style:{fontSize:24},spin:!0});if("undefined"==typeof this.state.services||"undefined"==typeof this.state.services.Done)return _react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:25}},_react.default.createElement(_spin.default,{indicator:n})));var a=this.props,i=a.children,r=(a.currentUser,this.state),o=r.mode,s=r.selectKey;redirect=0!=getQueryVariable("goback")?getQueryVariable("goback"):"/account",console.log(redirect);var d=function(){return _react.default.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1000 1000"},_react.default.createElement("path",{fill:"#fff",id:"path3049",d:"m472.0782,5.000004c-309.95181,0 -443.739778,275.890154 -443.739778,275.890154l39.381843,28.191329c0,0 -49.557736,94.244479 -48.186337,215.125866c0,246.762817 196.431438,479.217662 485.593749,479.217662c262.694003,0 479.695184,-213.815304 479.695184,-478.611242c0,-345.353704 -267.809752,-519.813769 -512.744661,-519.813769zm2.688991,84.184744c242.164982,0 430.077646,195.145037 430.077646,422.010358c0,240.492382 -180.875585,407.741356 -391.649932,407.741356c-155.12353,0 -295.06032,-118.131815 -295.06032,-280.097023c0,-93.54813 49.721196,-158.76734 105.437616,-193.525719l8.153919,8.847645c-15.248177,11.930853 -58.725797,81.770156 -58.725797,150.414454c0,127.432401 99.93291,215.688821 225.838424,215.688821c160.382222,0 267.34548,-136.792939 267.34548,-295.62338c0,-184.798129 -163.120868,-341.685808 -359.424413,-341.685808c-108.576641,0 -200.730949,46.694628 -253.683332,87.91529l-8.240655,-7.459444c69.277367,-106.815175 189.246397,-174.22655 329.931365,-174.22655zm-72.257877,176.784874c125.269928,0 247.573989,82.874032 278.101968,200.509439l-11.103359,4.206869c-54.813999,-72.384137 -144.629484,-132.37144 -250.690667,-132.37144c-195.165106,0 -297.659457,177.344681 -282.612496,325.463852l-11.49362,4.207469c0,0 -21.555977,-47.56334 -21.555977,-103.963233c0,-163.32643 134.126565,-298.052956 299.354151,-298.052956zm82.797292,204.976053c59.30915,0 106.738781,48.070688 106.738781,105.134406c0,47.22281 -30.31714,75.207452 -30.31714,75.207452l35.912,25.112466c0,0 -35.611069,55.907084 -108.299975,55.907084c-69.53257,0 -131.02708,-56.122313 -131.02708,-131.591458c0,-77.764577 66.890477,-129.76995 126.993413,-129.76995z"}))};return"undefined"==typeof window.userinfo?_react.default.createElement("div",{id:"main",style:{width:"100%",maxWidth:1850,maxHeight:window.innerHeight-64,overflow:"auto",margin:25}},_react.default.createElement(_spin.default,{indicator:_react.default.createElement(_icon.default,{type:"loading",style:{fontSize:24},spin:!0})})):"undefined"==typeof window.userinfo||"undefined"==typeof window.userinfo.user_ID||""==window.userinfo.user_ID||"0"==window.userinfo.user_ID?_react.default.createElement("div",{id:"main",style:{width:"100%",maxWidth:1850,maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(_row.default,{style:{margin:20}},_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("div",{id:"logo",style:{backgroundImage:"url("+t+")",height:150,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}))),_react.default.createElement(_row.default,{style:{margin:20}},_react.default.createElement(_col.default,{span:24,md:24,lg:24},_react.default.createElement("div",{style:{textAlign:"center"}},_react.default.createElement("div",null,_react.default.createElement(Title,{level:2},"\u6211\u4eec\u9700\u8981\u9a8c\u660e\u60a8\u7684\u8eab\u4efd"),_react.default.createElement("div",{style:{marginTop:10}},_react.default.createElement(_button.default,{type:"primary",onClick:function(){window.LOGGINtype=!0,window.Fthis.setState({services:{Done:(new Date).getTime()}})}},_react.default.createElement(_icon.default,{component:d}),"\u767b\u5f55 Uplay"),_react.default.createElement(_modal.default,{title:"\u8be5\u8d26\u6237\u4e0b\u7ed1\u5b9a\u6709\u591a\u4e2a\u6e38\u620f\u8d44\u6599\u6863\u6848",visible:window.LOGGINmodal,footer:null,closable:!0,maskClosable:!1,onCancel:function(){window.LOGGINmodal=!1,window.Fthis.setState({services:{Done:(new Date).getTime()}})}},Array.from(window.LOGGINmodalList).map(function(e,t){return"psn"==e[0]?_react.default.createElement("div",{style:{margin:10}},_react.default.createElement(_button.default,{type:"primary",block:!0,style:{background:"#108ee9",borderColor:"#108ee9"},onClick:function(){\u6307\u5b9a\u8d44\u6599\u6863\u6848(e[1])},loading:window.\u7528\u6237\u8d44\u6599\u6863\u6848\u9009\u62e9buttonLoading},"\u9009\u62e9 PSN \u7684\u6863\u6848")):"xbl"==e[0]?_react.default.createElement("div",{style:{margin:10}},_react.default.createElement(_button.default,{type:"primary",block:!0,style:{background:"#87d068",borderColor:"#87d068"},onClick:function(){\u6307\u5b9a\u8d44\u6599\u6863\u6848(e[1])},loading:window.\u7528\u6237\u8d44\u6599\u6863\u6848\u9009\u62e9buttonLoading},"\u9009\u62e9 XBOX \u7684\u6863\u6848")):"uplay"==e[0]?_react.default.createElement("div",{style:{margin:10}},_react.default.createElement(_button.default,{type:"primary",block:!0,style:{background:"#2db7f5",borderColor:"#2db7f5"},onClick:function(){\u6307\u5b9a\u8d44\u6599\u6863\u6848(e[1])},loading:window.\u7528\u6237\u8d44\u6599\u6863\u6848\u9009\u62e9buttonLoading},"\u9009\u62e9 PC \u7684\u6863\u6848")):void 0})),_react.default.createElement(_modal.default,{title:"\u767b\u5f55\u5230 Ubisoft",visible:window.LOGGINtype,footer:null,closable:!0,onCancel:function(){window.LOGGINtype=!1,window.Fthis.setState({services:{Done:(new Date).getTime()}})}},_react.default.createElement("div",{style:{margin:10}},_react.default.createElement(_input.default,{id:"Vemail",placeholder:"UPLAY\u767b\u5f55\u90ae\u7bb1"})),_react.default.createElement("div",{style:{margin:10}},_react.default.createElement(_input.default.Password,{id:"Vpasscode",placeholder:"\u5bc6\u7801",onPressEnter:function(){\u4f7f\u7528\u5bc6\u7801\u767b\u5f55()}})),_react.default.createElement("div",{style:{margin:10}},_react.default.createElement(_button.default,{type:"primary",block:!0,loading:window.LOGGINtypeLoading,onClick:function(){\u4f7f\u7528\u5bc6\u7801\u767b\u5f55()}},"\u767b\u5f55")))),_react.default.createElement("div",{style:{margin:5}},_react.default.createElement(_button.default,{type:"primary",href:"https://r6sground.cn/promotion/tencent/Connect2.1/plug/oauth/index.php?redirect="+redirect,disabled:!0},_react.default.createElement(_icon.default,{type:"qq"}),"QQ\u4e92\u8054")),_react.default.createElement("div",{style:{margin:"0 auto",maxWidth:370}},"\u7531\u4e8e\u5b89\u5168\u95ee\u9898\uff0cQQ\u4e92\u8054\u529f\u80fd\u5df2\u7ecf\u4e0b\u7ebf\u3002\u6240\u6709QQ\u4e92\u8054\u8d26\u6237\u5df2\u6e05\u7a7a\uff0c\u8bf7\u4f7f\u7528Uplay\u767b\u5f55\u529f\u80fd\u91cd\u65b0\u8ba4\u9886\u4f60\u7684\u8d26\u6237\u3002",_react.default.createElement("br",null),"Due to a security issue, Tencent connect is no longer available. Please use Uplay login to re-certify your account.",_react.default.createElement("br",null))))))):_react.default.createElement("div",{id:"main"},_react.default.createElement("div",{className:_Info.default.main,ref:function(t){e.main=t}},_react.default.createElement("div",{className:_Info.default.leftmenu},_react.default.createElement(_menu.default,{mode2:o,mode:"inline",selectedKeys:[s],onClick:this.selectKey},this.getmenu())),_react.default.createElement("div",{className:_Info.default.right},_react.default.createElement("div",{className:_Info.default.title},this.getRightTitle()),i)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.match,a=e.location,i=a.pathname.replace("".concat(n.path,"/"),"");return i=t.menuMap[i]?i:"base",i=t.menuMap[i]?i:"uplay",i!==t.selectKey?{selectKey:i}:null}}]),Info}(_react.Component),_class=_temp))||_class),_default=Info;exports.default=_default}}]);