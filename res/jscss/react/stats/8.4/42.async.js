(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{X0Ww:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("Kbp9");var _skeleton=_interopRequireDefault(__webpack_require__("W92m"));__webpack_require__("VIk5");var _button=_interopRequireDefault(__webpack_require__("X+Ft"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH"));__webpack_require__("ye9w");var _notification2=_interopRequireDefault(__webpack_require__("ZnsJ")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("I4dy");var _datePicker=_interopRequireDefault(__webpack_require__("+qVy")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_locale=__webpack_require__("TJP2"),MonthPicker=_datePicker.default.MonthPicker,RangePicker=_datePicker.default.RangePicker,WeekPicker=_datePicker.default.WeekPicker,DOMsize;function reCalcDOM(){console.log("RC");var e=document.body.clientHeight;e>50||(e=1024);var t=document.body.clientWidth;t>50||(t=1024);var i={};i["main"]=e-64;var a=80;t>800&&e>600?(i["headPic"]=t>2600?e/5*2:t<1300?e/5*4:e/4*2,i["headLogoSize"]=60,i["mainPosition"]=i["headPic"]/9+"px 0px 0px 00px",i["headLogoPosition"]="30px 0px 0px "+a+"px",i["headTitleSize"]=80,i["headTitlePosition"]="10px 0px 0px "+a+"px",i["headTitleWidth"]=t-1*a,i["headDesSize"]=26,i["headDesPosition"]="00px 0px 0px "+a+"px",i["headDesSize2"]=22,i["headAPBPosition"]="25px 0px 0px "+a+"px"):(i["headLogoSize"]=40,i["headLogoPosition"]="20px 0px 0px 20px",e>900?(i["headPic"]=e/4*2,i["mainPosition"]=i["headPic"]/5+"px 0px 0px 00px"):e<500?(i["headPic"]=e/4*4,i["mainPosition"]=i["headPic"]/20+"px 0px 0px 00px"):(i["headPic"]=e/5*3,i["mainPosition"]=i["headPic"]/9+"px 0px 0px 00px"),i["headTitleSize"]=50,i["headTitlePosition"]="15px 0px 0px 20px",i["headTitleWidth"]=t-20,i["headDesSize"]=22,i["headDesPosition"]="00px 0px 0px 20px",i["headDesSize2"]=16,i["headAPBPosition"]="10px 0px 0px 20px"),i["headTitleColor"]="white",DOMsize=i,window.Fthis.setState({services:{Done:(new Date).getTime()}})}function joinComp(e){null!=typeof e.url&&""!=e.url?window.open(e.url):alert("undefined")}var thisCompetition=[],ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){if(window.onresize=function(){reCalcDOM()},window.requestCompetition,window.requestCompetition=window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1),reCalcDOM(),console.log(window.requestCompetition),"undefined"!=typeof window.needjs)eval(window.needjs),window.Fthis.setState({services:{Done:(new Date).getTime()}});else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+window.selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&(xhr.status>=200&&xhr.status<300?(window.needjs=xhr.responseText,eval(xhr.responseText),window.Fthis.setState({services:{Done:(new Date).getTime()}})):window.Fnotification["error"]({message:(0,_locale.formatMessage)({id:"\u4e0d\u80fd\u52a0\u8f7d\u5173\u952e\u8d44\u6e90"}),description:"need.js"}))}}var isIncludeInMainLib=-1;if("undefined"!=typeof window.competition)for(var key in window.competition)window.competition[key].id==window.requestCompetition&&(isIncludeInMainLib=key);if(-1==isIncludeInMainLib){var _xhr=new XMLHttpRequest;_xhr.open("GET","https://promotion.r6sground.cn/competition/"+window.requestCompetition+".txt",!0),_xhr.send(),_xhr.onreadystatechange=function(){if(_xhr.readyState==XMLHttpRequest.DONE)if(_xhr.status>=200&&_xhr.status<300)try{"{}"==_xhr.responseText&&window.Fthis.props.history.replace("/Stats/error?error="+(0,_locale.formatMessage)({id:"\u8be5\u8d5b\u4e8b\u4e0d\u5b58\u5728"})),thisCompetition[window.requestCompetition]=JSON.parse(_xhr.responseText)[0],window.Fthis.setState({services:{Done:(new Date).getTime()}})}catch(e){}else window.Fnotification["error"]({message:(0,_locale.formatMessage)({id:"\u4e0d\u80fd\u52a0\u8f7d\u5173\u952e\u8d44\u6e90"}),description:"competition.txt"})}}else thisCompetition[window.requestCompetition]=window.competition[isIncludeInMainLib],window.Fthis.setState({services:{Done:(new Date).getTime()}})}},{key:"render",value:function(){window.Fthis=this,window.Fnotification=_notification2.default;_react.default.createElement(_icon.default,{type:"loading"});if("undefined"!=typeof this.state.services&&"undefined"!=typeof this.state.services.Done&&"undefined"!=typeof window.requestCompetition&&"undefined"!=typeof thisCompetition&&"undefined"!=typeof thisCompetition[window.requestCompetition]){var e,t,i=thisCompetition[window.requestCompetition];console.log(i),console.log(i.logo),i.player.length<i.limits?(e=!1,t=i.teamRequire?(0,_locale.formatMessage)({id:"\u5e26\u9886\u6211\u7684\u961f\u4f0d\u53c2\u8d5b"}):(0,_locale.formatMessage)({id:"\u53c2\u52a0\u6bd4\u8d5b"})):(e=!0,t=(0,_locale.formatMessage)({id:"\u540d\u989d\u5df2\u6ee1"}));var a="";return new Date(i.time2).getTime()<(new Date).getTime()&&(a=(0,_locale.formatMessage)({id:"comp.\u5df2\u4e8e"})+" "+i.time2.substring(0,i.time2.length-3).replace(" 00:00","")+" "+(0,_locale.formatMessage)({id:"comp.\u7ed3\u675f"})),new Date(i.time2).getTime()>(new Date).getTime()&&(a=(0,_locale.formatMessage)({id:"comp.\u8fdb\u884c\u4e2d"})+" "+i.time2.substring(0,i.time2.length-3).replace(" 00:00","")+" "+(0,_locale.formatMessage)({id:"comp.\u7ed3\u675f"})),new Date(i.time1).getTime()>(new Date).getTime()&&(a=(0,_locale.formatMessage)({id:"comp.\u5c06\u4e8e"})+" "+i.time1.substring(0,i.time1.length-3).replace(" 00:00","")+" "+(0,_locale.formatMessage)({id:"comp.\u5f00\u59cb"})),new Date(i.regTime2).getTime()>(new Date).getTime()&&(a=(0,_locale.formatMessage)({id:"comp.\u62a5\u540d\u8fdb\u884c\u4e2d"})+" "+(0,_locale.formatMessage)({id:"comp.\u81f3"})+" "+i.regTime2.substring(0,i.regTime2.length-3).replace(" 00:00","")+(0,_locale.formatMessage)({id:"comp.\u622a\u6b62"})),new Date(i.regTime1).getTime()>(new Date).getTime()&&(a=(0,_locale.formatMessage)({id:"comp.\u5c06\u4e8e"})+" "+i.regTime1.substring(0,i.regTime1.length-3).replace(" 00:00","")+" "+(0,_locale.formatMessage)({id:"comp.\u5f00\u59cb\u62a5\u540d"})),_react.default.createElement("div",{style:{maxHeight:DOMsize.main}},_react.default.createElement("div",{style:{background:"white",backgroundImage:"url("+i.bgpic+")",height:DOMsize.headPic,backgroundSize:"cover",backgroundPosition:"center"}},_react.default.createElement("div",{style:{padding:DOMsize.mainPosition}},_react.default.createElement("div",{style:{padding:DOMsize.headLogoPosition,height:DOMsize.headLogoSize}},_react.default.createElement("img",{src:i.logo,style:{height:DOMsize.headLogoSize}})),_react.default.createElement("div",{style:{padding:DOMsize.headTitlePosition,fontSize:DOMsize.headTitleSize,color:DOMsize.headTitleColor,fontWeight:600,maxWidth:DOMsize.headTitleWidth,wordWrap:"break-word",textShadow:"3px 3px 10px #000"}},i.title),_react.default.createElement("div",{style:{padding:DOMsize.headDesPosition,fontSize:DOMsize.headDesSize,color:DOMsize.headTitleColor,fontWeight:600,maxWidth:DOMsize.headTitleWidth,wordWrap:"break-word",textShadow:"3px 3px 10px #000"}},i.des),_react.default.createElement("div",{style:{padding:DOMsize.headDesPosition,fontSize:DOMsize.headDesSize2,color:DOMsize.headTitleColor,fontWeight:600,maxWidth:DOMsize.headTitleWidth,wordWrap:"break-word",textShadow:"3px 3px 10px #000"}},a),_react.default.createElement("div",{style:{padding:DOMsize.headAPBPosition,fontSize:DOMsize.headDesSize2,color:DOMsize.headTitleColor,fontWeight:600,maxWidth:DOMsize.headTitleWidth,wordWrap:"break-word",textShadow:"3px 3px 10px #000"}},_react.default.createElement(_button.default,{type:"primary",block:!0,style:{maxWidth:400},disabled:e,onClick:function(){joinComp(i)}},t)),_react.default.createElement("div",{style:{padding:DOMsize.headDesPosition,fontSize:10,color:DOMsize.headTitleColor,fontWeight:400,maxWidth:DOMsize.headTitleWidth,wordWrap:"break-word",textShadow:"3px 3px 10px #000"}},"\u4e3b\u529e\u65b9\uff1a",i.organizer))),_react.default.createElement("div",{style:{padding:35,background:"white"}},_react.default.createElement("span",{dangerouslySetInnerHTML:{__html:i.content.replace(/<img/g,'<img style="max-width:100%;"')}})),_react.default.createElement("div",{style:{padding:35,background:"white"}},(0,_locale.formatMessage)({id:"1.\u7ade\u8d5b\u89c4\u5219\u6700\u7ec8\u89e3\u91ca\u6743\u5f52\u4e3b\u529e\u65b9\u6240\u6709\u3002"}),_react.default.createElement("br",null),(0,_locale.formatMessage)({id:"2.\u4ee5\u4e0a\u5185\u5bb9\u4ec5\u4ee3\u8868\u4e3b\u529e\u65b9\u89c2\u70b9\uff0c\u4e0d\u4ee3\u8868\u672c\u7ad9\u7acb\u573a\u3002"}),_react.default.createElement("br",null),(0,_locale.formatMessage)({id:"3.\u5982\u6709\u5bf9\u4e3b\u529e\u65b9\u6709\u4efb\u4f55\u610f\u89c1\u6216\u7591\u95ee\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u3002"}),_react.default.createElement("br",null),(0,_locale.formatMessage)({id:"4.\u62b5\u5236\u4e0d\u826f\u6e38\u620f\uff0c\u62d2\u7edd\u76d7\u7248\u6e38\u620f\u3002 \u6ce8\u610f\u81ea\u6211\u4fdd\u62a4\uff0c\u8c28\u9632\u53d7\u9a97\u4e0a\u5f53\u3002 \u9002\u5ea6\u6e38\u620f\u76ca\u8111\uff0c\u6c89\u8ff7\u6e38\u620f\u4f24\u8eab\u3002 \u5408\u7406\u5b89\u6392\u65f6\u95f4\uff0c\u4eab\u53d7\u5065\u5eb7\u751f\u6d3b\u3002"}),_react.default.createElement("br",null)))}return console.log(this.state.services),console.log(thisCompetition),console.log(thisCompetition[window.requestCompetition]),_react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:35,background:"white"}},_react.default.createElement(_skeleton.default,{active:!0}),_react.default.createElement(_skeleton.default,{active:!0}),_react.default.createElement(_skeleton.default,{active:!0})))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);