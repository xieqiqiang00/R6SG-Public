(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{DpBC:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("mqVB");var _divider=_interopRequireDefault(__webpack_require__("J2No"));__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er"));__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz"));__webpack_require__("I4dy");var _datePicker=_interopRequireDefault(__webpack_require__("+qVy")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_locale=__webpack_require__("TJP2"),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),MonthPicker=_datePicker.default.MonthPicker,RangePicker=_datePicker.default.RangePicker,WeekPicker=_datePicker.default.WeekPicker,Meta=_card.default.Meta,Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text;"undefined"==typeof window.promatchs&&(window.promatchs={});var defaultCardPic="https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/R6PIC/blob/master/rainbow6/news/original_1558493667.jpg",ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var Fthis=this;if(eval(needjs),"undefined"==typeof window.competition){var xhr=new XMLHttpRequest;xhr.open("GET","https://promotion.r6sground.cn/promatchs/indexs/",!0),xhr.send(),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<300)try{promatchs.indexs=JSON.parse(xhr.responseText),Fthis.setState({services:{Done:(new Date).getTime()}})}catch(e){console.log(e),console.log(xhr.responseText),pageOnNotie("\u804c\u4e1a\u8054\u8d5b\u76ee\u5f55\u62c9\u53d6\u5931\u8d25","\u670d\u52a1\u5668\u51fa\u9519")}else pageOnNotie("\u804c\u4e1a\u8054\u8d5b\u76ee\u5f55\u62c9\u53d6\u5931\u8d25","\u8bf7\u7a0d\u540e\u91cd\u8bd5")}}}},{key:"render",value:function(){window.Fthis=this;_react.default.createElement(_icon.default,{type:"loading"});var e=35;if(window.screen.width<385?(e=15,window.screen.width-2*(e+3)):window.screen.width<570&&(e=15,(window.screen.width-2*(e+6))/2),"undefined"==typeof this.state.services||"undefined"==typeof this.state.services.Done||"undefined"==typeof promatchs.indexs)return _react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:35}},_react.default.createElement(_row.default,{gutter:16},_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{alt:"example",src:defaultCardPic}),loading:!0},_react.default.createElement(Meta,{title:"example",description:"example.com"}))),_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{alt:"example",src:defaultCardPic}),loading:!0},_react.default.createElement(Meta,{title:"example",description:"example.com"}))),_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{alt:"example",src:defaultCardPic}),loading:!0},_react.default.createElement(Meta,{title:"example",description:"example.com"}))),_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{alt:"example",src:defaultCardPic}),loading:!0},_react.default.createElement(Meta,{title:"example",description:"example.com"}))))));var t=0;return _react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:e}},_react.default.createElement(Title,null,(0,_locale.formatMessage)({id:"\u8fd1\u671f\u804c\u4e1a\u8054\u8d5b\u8d5b\u7a0b"})),_react.default.createElement(_row.default,{gutter:16},Array.from(promatchs.indexs).map(function(e,a){var r="/ProMatchs/"+e.matchId.toString(36),l="",i=time(new Date(e.dateTime).valueOf()).split(" "),n=i[0],c=i[1].substring(0,i[1].lastIndexOf(":"));return t==n?l="none":t=n,_react.default.createElement("div",null,function(){if((3==a||12==a||24==a||30==a)&&(!window.userinfo||!window.userinfo.prime))return _react.default.createElement(_row.default,null,_react.default.createElement(_reactAdsense.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"}))}(),_react.default.createElement(_row.default,null,_react.default.createElement(_divider.default,{orientation:"left",style:{display:l}},n),_react.default.createElement(_col.default,{className:"gutter-row",span:24,style:{background:"white",marginBottom:15,fontFamily:"Calistoga"},onClick:function(){window.Fthis.props.history.push(r)}},_react.default.createElement(_row.default,{gutter:0,style:{paddingLeft:5}},_react.default.createElement(_col.default,{className:"gutter-row",span:0,md:0,lg:3,xxl:2},_react.default.createElement("div",{style:{overflow:"visible",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"left",fontSize:24,lineHeight:"50px"}},c),_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"left",fontSize:16,lineHeight:"25px"}},e.league),_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"left",fontSize:16,lineHeight:"25px"}},e.region)),_react.default.createElement(_col.default,{className:"gutter-row",span:24,md:24,lg:0,xxl:0},_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"left",fontSize:24,lineHeight:"50px",width:"40%",display:"inline-block"}},c),_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"left",fontSize:16,lineHeight:"50px",width:"40%",display:"inline-block"}},e.league),_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"left",fontSize:16,lineHeight:"50px",width:"20%",display:"inline-block"}},e.region)),_react.default.createElement(_col.default,{className:"gutter-row",span:4,md:2,lg:0,xxl:0,style:{fontSize:28,height:"100px",paddingLeft:5,paddingRight:5}},_react.default.createElement("div",{style:{background:"url("+e.teamALogo+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100px",filter:"drop-shadow(rgb(100,100,100) 0px 0px 2px)"}})),_react.default.createElement(_col.default,{className:"gutter-row",span:18,md:20,lg:0,xxl:0,style:{fontSize:28,lineHeight:"100px"}},_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"left"}},e.teamAName)),_react.default.createElement(_col.default,{className:"gutter-row",span:0,md:0,lg:7,xxl:8,style:{fontSize:28,lineHeight:"100px"}},_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"right"}},e.teamAName)),_react.default.createElement(_col.default,{className:"gutter-row",span:0,md:0,lg:2,xxl:1,style:{fontSize:28,height:"100px",paddingLeft:5,paddingRight:5}},_react.default.createElement("div",{style:{background:"url("+e.teamALogo+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100px",filter:"drop-shadow(rgb(100,100,100) 0px 0px 2px)"}})),_react.default.createElement(_col.default,{className:"gutter-row",span:2,md:2,lg:1,xxl:1,style:{fontSize:28,lineHeight:"100px"}},_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"center"}},e.teamAScore)),_react.default.createElement(_col.default,{className:"gutter-row",span:0,md:0,lg:1,xxl:1,style:{fontSize:28,lineHeight:"100px"}},_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"center"}},"VS")),_react.default.createElement(_col.default,{className:"gutter-row",span:0,md:0,lg:1,xxl:1,style:{fontSize:28,lineHeight:"100px"}},_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"center"}},e.teamBScore)),_react.default.createElement(_col.default,{className:"gutter-row",span:4,md:2,lg:2,xxl:1,style:{fontSize:28,height:"100px",paddingLeft:5,paddingRight:5}},_react.default.createElement("div",{style:{background:"url("+e.teamBLogo+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100px",filter:"drop-shadow(rgb(100,100,100) 0px 0px 2px)"}})),_react.default.createElement(_col.default,{className:"gutter-row",span:18,md:20,lg:7,xxl:9,style:{fontSize:28,lineHeight:"100px"}},_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"left"}},e.teamBName)),_react.default.createElement(_col.default,{className:"gutter-row",span:2,md:2,lg:0,xxl:0,style:{fontSize:28,lineHeight:"100px"}},_react.default.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",textAlign:"center"}},e.teamBScore))))))}),_react.default.createElement(_divider.default,null,"\u6211\u662f\u6709\u5e95\u7ebf\u54d2\uff01"))))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);