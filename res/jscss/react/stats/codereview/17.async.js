(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"9NPa":function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("1hTB");var _table=_interopRequireDefault(__webpack_require__("KFXw"));__webpack_require__("avCb");var _spin=_interopRequireDefault(__webpack_require__("dbpm"));__webpack_require__("QKdE");var _list=_interopRequireDefault(__webpack_require__("2Vcd"));__webpack_require__("0NfI");var _tooltip=_interopRequireDefault(__webpack_require__("ZHzj")),_defineProperty2=_interopRequireDefault(__webpack_require__("3CjV"));__webpack_require__("dp+4");var _avatar=_interopRequireDefault(__webpack_require__("nA/W"));__webpack_require__("dMhr");var _tag=_interopRequireDefault(__webpack_require__("eJcY"));__webpack_require__("B40R");var _badge=_interopRequireDefault(__webpack_require__("43HQ"));__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("VIk5");var _button=_interopRequireDefault(__webpack_require__("X+Ft"));__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_locale=__webpack_require__("TJP2"),_Charts=__webpack_require__("KTCi"),_Trend=_interopRequireDefault(__webpack_require__("YR7N")),_NumberInfo=_interopRequireDefault(__webpack_require__("LOQS")),_numeral=_interopRequireDefault(__webpack_require__("BS6i")),_GridContent=_interopRequireDefault(__webpack_require__("v99g")),_Yuan=_interopRequireDefault(__webpack_require__("Umy/")),_utils=__webpack_require__("+n12"),_home=_interopRequireDefault(__webpack_require__("A+LV")),_util=__webpack_require__("SaUU"),Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text,OperatorList={"1:1":"recruit","1:2":"recruit","1:4":"recruit","1:5":"recruit","2:1":"SMOKE","2:2":"CASTLE","2:3":"DOC","2:4":"GLAZ","2:5":"BLITZ","2:6":"BUCK","2:7":"BLACKBEARD","2:8":"CAPITAO","2:9":"HIBANA","2:A":"JACKAL","2:B":"YING","2:C":"ELA","2:D":"DOKKAEBI","2:F":"MAESTRO","3:1":"MUTE","3:2":"ASH","3:3":"ROOK","3:4":"FUZE","3:5":"IQ","3:6":"FROST","3:7":"VALKYRIE","3:8":"CAVEIRA","3:9":"ECHO","3:A":"MIRA","3:B":"LESION","3:C":"ZOFIA","3:D":"VIGIL","3:E":"LION","3:F":"ALIBI","4:1":"SLEDGE","4:2":"PULSE","4:3":"TWITCH","4:4":"KAPKAN","4:5":"JAGER","4:E":"FINKA","5:1":"THATCHER","5:2":"THERMITE","5:3":"MONTAGNE","5:4":"TACHANKA","5:5":"BANDIT","2:10":"MAVERICK","3:10":"CLASH","3:11":"KAID","2:11":"NOMAD","2:12":"MOZZIE","3:12":"GRIDLOCK"},OperatorListF={SMOKE:"0",CASTLE:"0",DOC:"0",ELA:"0",MAESTRO:"0",MUTE:"0",ROOK:"0",FROST:"0",VALKYRIE:"0",CAVEIRA:"0",ECHO:"0",MIRA:"0",LESION:"0",VIGIL:"0",ALIBI:"0",PULSE:"0",KAPKAN:"0",JAGER:"0",TACHANKA:"0",BANDIT:"0",CLASH:"0",KAID:"0",MOZZIE:"0"};function opeidtoname(e){for(var t in OperatorList)if(t==e)return OperatorList[t]}function openametoid(e){for(var t in OperatorList)if(OperatorList[t]==e)return t}function TimesTOh(e){return parseInt(e/3600)}function FetchOpeInfo(e,t,a,r){for(var l in a)if(r){if(t+":"+e+":infinite"==l)return a[l]}else if(t+":"+e==l)return a[l]}window.onresize=function(){var e=(new Date).getTime();window.Fthis.setState({services:{Done:e}})};var requestProfileId="",ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Peek",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var a="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,a);var r=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6218\u7ee9"})+" "+document.title.replace(r,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:456781}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:45672}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6218\u7ee9"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){console.log("rendering"),window.Fthis=this;var e=_react.default.createElement(_icon.default,{type:"loading"}),t=[{title:(0,_locale.formatMessage)({id:"\u64c5\u957f"}),dataIndex:"name",key:"name"},{title:(0,_locale.formatMessage)({id:"\u65f6\u957f"}),dataIndex:"time",key:"age"},{title:(0,_locale.formatMessage)({id:"\u6218\u635f"}),dataIndex:"kd",key:"rtrwt"},{title:(0,_locale.formatMessage)({id:"\u80dc\u7387"}),dataIndex:"wl",key:"gegt"}],a={width:"25%",textAlign:"center",padding:0};function r(e){return"undefined"==typeof e.extra?_react.default.createElement(_card.default,{title:e.title,bordered:!1,hoverable:!0,style:{height:210,margin:5}},e.content):_react.default.createElement(_card.default,{title:e.title,style:{height:210,margin:5},bordered:!1,hoverable:!0,extra:_react.default.createElement("a",{href:e.extraURL},e.extra)},e.content)}if("undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done){var l,n,d,i,o;if("undefined"!=typeof window.resulted&&"undefined"!=typeof window.resulted.nicename&&""!=window.resulted.nicename&&null!=window.resulted.nicename&&"("+window.resulted.nicename+")","undefined"==typeof window.resulted||"undefined"==typeof window.resulted.userComp1||"undefined"==typeof window.resulted.userComp1.updatetime)l=_react.default.createElement("span",null,(0,_locale.formatMessage)({id:"\u6682\u65f6\u6ca1\u6709\u6bd4\u8d5b\u6570\u636e"})),n=_react.default.createElement("span",null,(0,_locale.formatMessage)({id:"\u8bf7\u6e38\u73a9\u4e00\u573a\u6bd4\u8d5b\u540e\u518d\u6765\u770b\u770b"}));else o="won"==window.resulted.userComp1.result?(0,_locale.formatMessage)({id:"\u80dc"}):"lose"==window.resulted.userComp1.result?(0,_locale.formatMessage)({id:"\u8d1f"}):(0,_locale.formatMessage)({id:"\u5f03\u8d5b"}),l=_react.default.createElement("div",null,_react.default.createElement("span",null,o," ",window.resulted.userComp1.operatorpvp_kills,"/",window.resulted.userComp1.operatorpvp_death,"/",window.resulted.userComp1.generalpvp_killassists)),n=_react.default.createElement("div",null,_react.default.createElement("span",{style:{paddingRight:15}},(0,_locale.formatMessage)({id:"\u5730\u56fe"}),":",(0,_locale.formatMessage)({id:mapIdToName(window.resulted.userComp1.map)})),_react.default.createElement("span",{style:{paddingRight:15}},(0,_locale.formatMessage)({id:"\u6bd4\u5206:"}),window.resulted.userComp1.operatorpvp_roundwon,"/",window.resulted.userComp1.operatorpvp_roundlost)),d=_react.default.createElement("div",null,(0,_locale.formatMessage)({id:"\u70b9\u51fb\u67e5\u770b\u672c\u573aRating\u7b49\u6570\u636e"}),_react.default.createElement("br",null),function(){return"undefined"!=typeof window.resulted.userComp1.LastTimePlayed&&window.resulted.userComp1.LastTimePlayed.length>8?(0,_locale.formatMessage)({id:window.getFriendlyTime(window.resulted.userComp1.LastTimePlayed)}):"undefined"!=typeof window.resulted.userComp1.lastTimePlayed&&window.resulted.userComp1.lastTimePlayed.length>8?(0,_locale.formatMessage)({id:window.getFriendlyTime(window.resulted.userComp1.lastTimePlayed)}):"TIME ERR"}());var u,c,s="";return s="PC"==window.resulted.GamePlatformType?"#2db7f5":"PlayStation"==window.resulted.GamePlatformType?"#108ee9":"Xbox"==window.resulted.GamePlatformType?"#87d068":"#f50",window.resulted.isUser&&(u=(0,_locale.formatMessage)({id:"\u8ba4\u8bc1\u7528\u6237"})),window.resulted.profile_id,window.userinfo.ProfileID,_react.default.createElement("div",{id:"main",style:{maxWidth:2500,maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(_row.default,{style:{margin:20}},function(){if(\u5e7f\u544a\u4f4d\u7f6e1)return _react.default.createElement(_col.default,{span:0,lg:0,md:0,xxl:24,onClick:function(){window.open("https://r6sg.club/")}},_react.default.createElement("div",{style:{width:"calc(100% - 430px)",display:"inline-block"}},_react.default.createElement(_badge.default,{count:"\u5e7f\u544a"},_react.default.createElement("div",{style:{overflow:"hidden",height:250}},_react.default.createElement("video",{src:"https://cdn.jsdelivr.net/gh/xieqiqiang00/r6sground.cn/res/assets/videos/night.mp4",autoplay:"autoplay",loop:"loop",muted:!0,style:{width:"100%",position:"relative",top:"-200px"}},"\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 video \u6807\u7b7e\u3002")))),_react.default.createElement("div",{style:{width:430,height:250,display:"inline-block",padding:20,position:"relative",top:"-30px"}},_react.default.createElement(_typography.default,null,_react.default.createElement(Title,null,"\u516d\u53f7\u6218\u573a\u4ff1\u4e50\u90e8"),_react.default.createElement(Paragraph,null,"\u516d\u53f7\u6218\u573a  ",_react.default.createElement(_tag.default,{color:"#f50"},"\u5e7f\u544a")),_react.default.createElement(Paragraph,null,"\u4e00\u4e2a\u4e3a R6 \u7231\u597d\u8005\u800c\u8bde\u751f\u7684\u89c6\u9891\u7f51\u7ad9"),_react.default.createElement(Paragraph,null,"SiegeGG\u3001BikiniBodhi\u7b49\u591a\u4f4d Youtuber \u7684\u89c6\u9891\u540c\u6b65\u66f4\u65b0")),_react.default.createElement("div",{style:{padding:5}},_react.default.createElement(_button.default,{type:"primary"},"\u4e86\u89e3\u66f4\u591a"))))}(),_react.default.createElement(_col.default,{span:0,lg:4,md:6,xxl:3},_react.default.createElement(_badge.default,{count:u},_react.default.createElement(_avatar.default,{shape:"square",style:{height:"100%",width:"100%",maxWidth:250,minHeight:100,background:"gray"},src:ProfileIdtoAvatarImg(window.resulted.uplayMainId,"full"),icon:"user"}))),_react.default.createElement(_col.default,{span:24,lg:0,md:0,xxl:0},_react.default.createElement(_badge.default,{count:u},_react.default.createElement(_avatar.default,{shape:"square",style:{height:"100%",width:"100%",maxWidth:200,minHeight:100,background:"gray"},src:ProfileIdtoAvatarImg(window.resulted.uplayMainId,"full"),icon:"user"}))),_react.default.createElement(_col.default,{span:0,lg:20,md:18,xxl:7},_react.default.createElement("span",null,_react.default.createElement("h1",{style:{marginLeft:20}},_react.default.createElement(Title,{level:2},window.resulted.UsernameOnPlatform)),_react.default.createElement("h3",{style:{marginLeft:20}},window.resulted.nicename),_react.default.createElement("h3",{style:{marginLeft:20}},window.resulted.mysign),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u7b49\u7ea7"},function(){return"zh-CN"!=(0,_locale.getLocale)()?(0,_locale.formatMessage)({id:"\u7b49\u7ea7"})+" "+window.resulted.level:window.resulted.level+(0,_locale.formatMessage)({id:"\u7ea7"})}()," ",_react.default.createElement(_tag.default,{color:s},window.resulted.GamePlatformType)),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u7528\u6237\u72b6\u6001"},function(){return"undefined"==typeof window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"loading"})," ",(0,_locale.formatMessage)({id:"\u68c0\u67e5\u5728\u7ebf\u72b6\u6001"})):-1==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,(t={type:"stop",theme:"filled"},(0,_defineProperty2.default)(t,"theme","twoTone"),(0,_defineProperty2.default)(t,"twoToneColor","#eb2f96"),t))," "+(0,_locale.formatMessage)({id:"\u9690\u8eab"})):0==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"clock-circle",theme:"twoTone",twoToneColor:"#eb2f96"})," "+(0,_locale.formatMessage)({id:"\u79bb\u7ebf"})):1==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"check-circle",theme:"twoTone"})," "+(0,_locale.formatMessage)({id:"\u5728\u7ebf"})):2==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"right-circle",theme:"twoTone"})," "+(0,_locale.formatMessage)({id:window.resulted.onlineGameName})+(0,_locale.formatMessage)({id:"xx\u4e2d"})):3==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"play-circle",theme:"twoTone"})," "+(0,_locale.formatMessage)({id:"\u5f69\u8679\u516d\u53f7\u4e2d"})):_react.default.createElement("span",null,_react.default.createElement(_icon.default,(e={type:"question-circle",theme:"filled"},(0,_defineProperty2.default)(e,"theme","twoTone"),(0,_defineProperty2.default)(e,"twoToneColor","#c20201"),e))," "+(0,_locale.formatMessage)({id:"\u672a\u77e5"}));var e,t}()),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u66f4\u65b0\u65f6\u95f4"},function(){if("undefined"!=typeof window.resulted.LastTimePlayed&&window.resulted.LastTimePlayed.length>8){window.resulted.LastTimePlayed;var e=(0,_locale.formatMessage)({id:"playedX\u5929\u524d"});return e+=window.getFriendlyTime(window.resulted.LastTimePlayed),e+=(0,_locale.formatMessage)({id:"\u73a9\u8fc7X\u5929\u524d"}),e}var t=(0,_locale.formatMessage)({id:"\u66f4\u65b0\u4e8e"});return t+=" ",t+=window.getFriendlyTime(window.resulted.Servertime),t}()),_react.default.createElement("h4",{style:{marginLeft:20},id:"\u80b2\u78a7\u8d26\u6237\u552f\u8bc6\u522b\u4e00ID"},window.resulted.profile_id))),_react.default.createElement(_col.default,(0,_defineProperty2.default)({span:0,lg:0,md:0,xxl:14},"xxl",0),_react.default.createElement("div",{style:{background:"white",height:175,overflow:"hidden"}},function(){\u5e7f\u544a\u4f4d\u7f6e3}())),function(){if(\u5e7f\u544a\u4f4d\u7f6e3)return _react.default.createElement(_col.default,{span:0,lg:0,md:0,xxl:14},_react.default.createElement("iframe",{id:"mapsframe",style:{width:"100%",height:175,overflow:"hidden"},onLoad:function(){},ref:"iframe",src:"https://r6sground.cn/r6sg-app/advertisement/",scrolling:"no",frameBorder:"0",allowfullscreen:"allowfullscreen"}))}(),_react.default.createElement(_col.default,{span:24,lg:0,md:0,xxl:0},_react.default.createElement("span",null,_react.default.createElement("h1",{style:{marginLeft:0}},_react.default.createElement(Title,{level:2},window.resulted.UsernameOnPlatform)),_react.default.createElement("h3",{style:{marginLeft:0}},window.resulted.nicename),_react.default.createElement("h3",{style:{marginLeft:0}},window.resulted.mysign),_react.default.createElement("h3",{style:{marginLeft:0},id:"\u88ab\u67e5\u7528\u6237\u7b49\u7ea7"},function(){return"zh-CN"!=(0,_locale.getLocale)()?(0,_locale.formatMessage)({id:"\u7b49\u7ea7"})+" "+window.resulted.level:window.resulted.level+(0,_locale.formatMessage)({id:"\u7ea7"})}()," ",_react.default.createElement(_tag.default,{color:s},window.resulted.GamePlatformType)),_react.default.createElement("h3",{style:{marginLeft:0},id:"\u7528\u6237\u72b6\u6001"},function(){return"undefined"==typeof window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"loading"}),"",(0,_locale.formatMessage)({id:"\u68c0\u67e5\u5728\u7ebf\u72b6\u6001"})):-1==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,(t={type:"stop",theme:"filled"},(0,_defineProperty2.default)(t,"theme","twoTone"),(0,_defineProperty2.default)(t,"twoToneColor","#eb2f96"),t))," "+(0,_locale.formatMessage)({id:"\u9690\u8eab"})):0==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"clock-circle",theme:"twoTone",twoToneColor:"#eb2f96"})," "+(0,_locale.formatMessage)({id:"\u79bb\u7ebf"})):1==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"check-circle",theme:"twoTone"})," "+(0,_locale.formatMessage)({id:"\u5728\u7ebf"})):2==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"right-circle",theme:"twoTone"})," "+(0,_locale.formatMessage)({id:window.resulted.onlineGameName})+(0,_locale.formatMessage)({id:"xx\u4e2d"})):3==window.resulted.onlineLevel?_react.default.createElement("span",null,_react.default.createElement(_icon.default,{type:"play-circle",theme:"twoTone"})," "+(0,_locale.formatMessage)({id:"\u5f69\u8679\u516d\u53f7\u4e2d"})):_react.default.createElement("span",null,_react.default.createElement(_icon.default,(e={type:"question-circle",theme:"filled"},(0,_defineProperty2.default)(e,"theme","twoTone"),(0,_defineProperty2.default)(e,"twoToneColor","#c20201"),e))," "+(0,_locale.formatMessage)({id:"\u672a\u77e5"}));var e,t}()),_react.default.createElement("h3",{style:{marginLeft:0},id:"\u88ab\u67e5\u7528\u6237\u66f4\u65b0\u65f6\u95f4"},function(){if("undefined"!=typeof window.resulted.LastTimePlayed&&window.resulted.LastTimePlayed.length>8){window.resulted.LastTimePlayed;var e=(0,_locale.formatMessage)({id:"playedX\u5929\u524d"});return e+=window.getFriendlyTime(window.resulted.LastTimePlayed),e+=(0,_locale.formatMessage)({id:"\u73a9\u8fc7X\u5929\u524d"}),e}var t=(0,_locale.formatMessage)({id:"\u66f4\u65b0\u4e8e"});return t+=" ",t+=window.getFriendlyTime(window.resulted.Servertime),t}()),_react.default.createElement("h4",{style:{marginLeft:0},id:"\u80b2\u78a7\u8d26\u6237\u552f\u8bc6\u522b\u4e00ID"},window.resulted.profile_id)))),c,_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,style:{display:i}},_react.default.createElement(_Charts.ChartCard,{id:"Card-0",style:{height:210,margin:5,background0:"rgba(255,255,255,0.5)"},bordered:!1,hoverable:!0,title:(0,_locale.formatMessage)({id:"\u6700\u8fd1\u7684\u6bd4\u8d5b\u8bb0\u5f55"}),action:function(){return 0!=window.isFreshing?_react.default.createElement(_tooltip.default,{title:(0,_locale.formatMessage)({id:"\u6b63\u5728\u68c0\u67e5\u5f53\u524d\u6570\u636e\u662f\u5426\u662f\u6700\u65b0\u7248\u672c"})},_react.default.createElement(_icon.default,{type:"loading"})):_react.default.createElement("span",null,(0,_locale.formatMessage)({id:"\u6700\u65b0\u6570\u636e"}))}(),total:l,footer:_react.default.createElement(_Charts.Field,{label:d}),contentHeight:46},n)),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6},_react.default.createElement(_Charts.ChartCard,{id:"Card-1",style:{height:210,margin:5,background0:"rgba(255,255,255,0.5)"},bordered:!1,hoverable:!0,title:(0,_locale.formatMessage)({id:"\u73a9\u5bb6Rating\u6c34\u5e73\uff08\u9690\u85cf\u5206\uff09"}),total:_react.default.createElement("span",null,function(){return"undefined"!=typeof window.resulted.generalpvp_rating?parseInt(window.resulted.generalpvp_rating):parseInt(window.resulted.operatorpvp_ug)}(),(0,_locale.formatMessage)({id:"\u5206"})),footer:_react.default.createElement("span",null,_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u8bc4\u4ef7\u6765\u81ea\u80b2\u78a7"})}),_react.default.createElement(Text,null,(0,_locale.formatMessage)({id:"100\u5206\u4ee5\u4e0a\u4e3a\u4f18\u79c0"})),_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u8be5\u5206\u6570\u53cd\u5e94\u4e86\u73a9\u5bb6\u7684\u771f\u5b9e\u5b9e\u529b"})})),contentHeight:46})),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,id:"Card-2"},_react.default.createElement(r,{content:_react.default.createElement(_list.default.Item,null,_react.default.createElement(_list.default.Item.Meta,{style:{margin:20,marginTop:20},avatar:_react.default.createElement(_avatar.default,{src:IconMMR(mmrtolevel(window.resulted.rankmmr,seasonidToRankVer()),seasonidToRankVer()),style:{height:70,width:70}}),title:_react.default.createElement("a",null,_react.default.createElement("h1",{style:{height:0}}," "),_react.default.createElement("h2",null,window.resulted.rankmmr," ",(0,_locale.formatMessage)({id:FrinendlyMMRPro(mmrtolevel(window.resulted.rankmmr,seasonidToRankVer()),seasonidToRankVer())}))),description:_react.default.createElement("a",null,(0,_locale.formatMessage)({id:"\u8d5b\u533a"}),":"," ",function(){try{return(0,_locale.formatMessage)({id:window.resulted.rankmmrarea})}catch(e){return"UNKNOW"}}())})),title:(0,_locale.formatMessage)({id:"\u6392\u4f4d\u6218\u7ee9"})})),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,style:{display:""}},_react.default.createElement(_Charts.ChartCard,{id:"Card-5",style:{height:210,margin:5,background0:"rgba(255,255,255,0.5)"},bordered:!1,hoverable:!0,title:(0,_locale.formatMessage)({id:"\u5e73\u5747\u5bf9\u5c40\u6c34\u5e73"}),total:_react.default.createElement(_spin.default,{tip:!1,spinning:function(){try{return window.resulted.metList.list,!1}catch(e){return!0}}()},_react.default.createElement("span",null,function(){try{window.resulted.metList.list}catch(e){return(0,_locale.formatMessage)({id:"\u51c6\u5907\u4e2d"})}try{var e=0,t=0;for(var a in window.resulted.metList.list){var r=window.resulted.metList.list[a].pid;e+=window.miniInfo[r].generalpvp_rating,t+=1}var l=e/t;return l>0?parseInt(l)+(0,_locale.formatMessage)({id:"\u5206"}):(0,_locale.formatMessage)({id:"\u4e0d\u53ef\u7528"})}catch(e){return _react.default.createElement("span",null,(0,_locale.formatMessage)({id:"\u7b49\u5f85\u670d\u52a1\u5668"})," ",_react.default.createElement(_icon.default,{type:"sync",spin:!0}))}return"undefined"!=typeof window.resulted.generalpvp_rating?parseInt(window.resulted.generalpvp_rating):parseInt(window.resulted.operatorpvp_ug)}())),footer:_react.default.createElement("span",null,_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u8be5\u73a9\u5bb6\u8fd1\u671f\u5e38\u4e0e\u8fd9\u4e00\u6c34\u5e73\u7684\u73a9\u5bb6\u8fdb\u884c\u5bf9\u5c40"})}),_react.default.createElement(Text,null,(0,_locale.formatMessage)({id:"\u8bc4\u5224\u6807\u51c6\u4e0eRating\u76f8\u540c"})),_react.default.createElement(_Charts.Field,{label:(0,_locale.formatMessage)({id:"\u8be5\u5206\u6570\u53cd\u5e94\u4e86\u73a9\u5bb6\u7684\u771f\u5b9e\u5b9e\u529b"})})),contentHeight:28},_react.default.createElement("span",null,function(){try{return window.resulted.metList.lastModified,(0,_locale.formatMessage)({id:"\u66f4\u65b0\u4e8e"})+" "+getFriendlyTime(window.resulted.metList.lastModified)}catch(e){return(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})}}()),_react.default.createElement("span",{className:_home.default.trendText}))),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,id:"Card-3"},_react.default.createElement(_card.default,{title:(0,_locale.formatMessage)({id:"\u7b80\u8981\u6570\u636e"}),style:{height:210,margin:5},bordered:!1,hoverable:!0},_react.default.createElement(_card.default.Grid,{style:a},(0,_locale.formatMessage)({id:"\u6218\u635f"}),_react.default.createElement("br",null),window.resulted.r6sgkd),_react.default.createElement(_card.default.Grid,{style:a},(0,_locale.formatMessage)({id:"\u80dc\u7387"}),_react.default.createElement("br",null),window.resulted.r6sgwl,"%"),_react.default.createElement(_card.default.Grid,{style:a},(0,_locale.formatMessage)({id:"\u6700\u7231"}),_react.default.createElement("br",null),(0,_locale.formatMessage)({id:window.resulted.r6sgfavmode})),_react.default.createElement(_card.default.Grid,{style:a},(0,_locale.formatMessage)({id:"\u65f6\u957f"}),_react.default.createElement("br",null),window.resulted.r6sgtp,(0,_locale.formatMessage)({id:"\u5c0f\u65f6"})),_react.default.createElement(_card.default.Grid,{style:a},(0,_locale.formatMessage)({id:"\u7206\u5934"}),_react.default.createElement("br",null),window.resulted.r6sghsv,"%"),_react.default.createElement(_card.default.Grid,{style:a},(0,_locale.formatMessage)({id:"\u5747\u8017"}),_react.default.createElement("br",null),window.resulted.r6sghbv),_react.default.createElement(_card.default.Grid,{style:a},(0,_locale.formatMessage)({id:"\u7b49\u7ea7"}),_react.default.createElement("br",null),window.resulted.level))),_react.default.createElement(_col.default,{span:24,lg:12,md:12,xxl:6,id:"Card-4"},_react.default.createElement("span",{className:"FullCard"},_react.default.createElement(_card.default,{title:(0,_locale.formatMessage)({id:"\u5e72\u5458\u60c5\u51b5"}),style:{height:210,margin:5,padding:0},bordered:!1,hoverable:!0},_react.default.createElement(_table.default,{pagination:!1,size:"small",dataSource:[{key:"1",name:opeidtoname(window.resulted.operatorpvp_timeplayed_theMOST_ID),time:TimesTOh(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_timeplayed",window.resulted,!0))+" "+(0,_locale.formatMessage)({id:"\u5c0f\u65f6"}),kd:(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_kills",window.resulted,!0)/FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_death",window.resulted,!0)).toFixed(3),wl:(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_roundwon",window.resulted,!0)/(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_roundwon",window.resulted,!0)+FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_ID,"operatorpvp_roundlost",window.resulted,!0))*100).toFixed(2)+"%"},{key:"2",name:opeidtoname(window.resulted.operatorpvp_timeplayed_theMOST_IDF),time:TimesTOh(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_timeplayed",window.resulted,!0))+" "+(0,_locale.formatMessage)({id:"\u5c0f\u65f6"}),kd:(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_kills",window.resulted,!0)/FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_death",window.resulted,!0)).toFixed(3),wl:(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_roundwon",window.resulted,!0)/(FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_roundwon",window.resulted,!0)+FetchOpeInfo(window.resulted.operatorpvp_timeplayed_theMOST_IDF,"operatorpvp_roundlost",window.resulted,!0))*100).toFixed(2)+"%"}],columns:t,bordered:!1,style:{padding:0,border:0}}))))),function(){if(\u5e7f\u544a\u4f4d\u7f6e2)return _react.default.createElement("div",{style:{height:90,overflow:"hidden"}})}())}return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:0,lg:4,md:6},_react.default.createElement(_badge.default,null,_react.default.createElement(_avatar.default,{shape:"square",style:{height:"100%",width:"100%"},src:"https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/res/DOM/user/empty-user-min.PNG"}))),_react.default.createElement(_col.default,{span:24,lg:0,md:0},_react.default.createElement(_avatar.default,{shape:"square",style:{height:"50%",width:"50%"},src:"https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/res/DOM/user/empty-user-min.PNG"})),_react.default.createElement(_col.default,{span:24,lg:20,md:18},_react.default.createElement("span",null,_react.default.createElement("div",{style:{marginLeft:20,height:25}}),_react.default.createElement("h1",{style:{marginLeft:20}},"...."),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u7b49\u7ea7"}),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u6b21\u6570"}),_react.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u66f4\u65b0\u65f6\u95f4"})))),_react.default.createElement("h1",{style:{height:20}}," "),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(r,{content:e,title:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"}),id:"test"})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(r,{content:e,title:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(r,{content:e,title:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})})),_react.default.createElement(_col.default,{span:24,lg:6,md:12},_react.default.createElement(r,{content:e,title:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})}))))}},{key:"componentDidUpdate",value:function(){window.Fthis=this;try{document.getElementById("Card-0").onclick=function(){window.Fthis.props.history.push("/Stats/Competition")}}catch(e){}try{document.getElementById("Card-1").onclick=function(){window.Fthis.props.history.push("/Stats/Main")}}catch(e){}try{document.getElementById("Card-2").onclick=function(){window.Fthis.props.history.push("/Stats/Rank")}}catch(e){}try{document.getElementById("Card-3").onclick=function(){window.Fthis.props.history.push("/Stats/Main")}}catch(e){}try{document.getElementById("Card-4").onclick=function(){window.Fthis.props.history.push("/Stats/Operator")}}catch(e){}try{document.getElementById("Card-5").onclick=function(){window.Fthis.props.history.push("/Stats/Met")}}catch(e){}}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default},"A+LV":function(e,t,a){}}]);