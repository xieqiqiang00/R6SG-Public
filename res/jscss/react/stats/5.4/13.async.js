(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{QNhl:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("CKcX"),_interopRequireDefault=__webpack_require__("u+rM");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("SP8m");var _skeleton=_interopRequireDefault(__webpack_require__("NgSL")),_defineProperty2=_interopRequireDefault(__webpack_require__("ukVl"));__webpack_require__("XaRz");var _row=_interopRequireDefault(__webpack_require__("QuCd"));__webpack_require__("9Off");var _col=_interopRequireDefault(__webpack_require__("BczQ")),_classCallCheck2=_interopRequireDefault(__webpack_require__("Pjwa")),_createClass2=_interopRequireDefault(__webpack_require__("2cji")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("sp3j")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("vZkh")),_inherits2=_interopRequireDefault(__webpack_require__("+KCP"));__webpack_require__("fJBB");var _typography=_interopRequireDefault(__webpack_require__("rTB7")),_react=_interopRequireWildcard(__webpack_require__("uqIC")),_reactDom=_interopRequireDefault(__webpack_require__("jCnN")),_home=_interopRequireDefault(__webpack_require__("s9Q6")),_DescriptionList=_interopRequireDefault(__webpack_require__("+kNj")),_PageHeaderWrapper=_interopRequireDefault(__webpack_require__("zHco")),_reactAdsense=_interopRequireDefault(__webpack_require__("9L8s")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text;function widthLimit(e){return e=e.replace(/<img/g,'<img style="max-width:100%;"'),e}function ADOMReadyer(e){try{window.article=JSON.parse(e)}catch(e){return window.articleContent="error",void window.Fthis.setState({services:{Done:(new Date).getTime()}})}window.articleContent=window.article.post_content,window.Fthis.setState({services:{Done:"artdone"}}),document.title=window.article.post_title+" | \u6e38\u620f\u8d44\u8baf | \u5f69\u8679\u516d\u53f7\u6218\u573a"}function urlFetch(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=new XMLHttpRequest;if(t)a.open("GET",e,!0),a.send(),a.onreadystatechange=function(){a.readyState==XMLHttpRequest.DONE&&a.status>=200&&a.status<=300&&ADOMReadyer(a.responseText)};else if(a.open("GET",e,!1),a.send(),a.readyState==XMLHttpRequest.DONE&&a.status>=200&&a.status<=300)return void ADOMReadyer(a.responseText)}function getarticle(e){if("undefined"!=typeof window.rootSentArtPostID&&e==window.rootSentArtPostID&&"undefined"!=typeof window.rootSentArtPostDate&&"undefined"!=typeof window.rootSentArtTitle&&"undefined"!=typeof window.rootSentArtContent){console.log("\u6587\u7ae0HIT,id:"+window.rootSentArtPostID),document.title=window.rootSentArtTitle+" | \u6e38\u620f\u8d44\u8baf | \u5f69\u8679\u516d\u53f7\u6218\u573a";var t={};t.post_content=window.rootSentArtContent,t.post_title=window.rootSentArtTitle,t.post_id=window.rootSentArtPostID,t.modified=window.rootSentArtPostDate,ADOMReadyer(JSON.stringify(t))}else if(-1!=window.location.pathname.indexOf(".html")){var a="https://r6sground.cn/r6sg-app/api/article/?pid="+e;urlFetch(a)}else ADOMReadyer(xhr.responseText)}var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this,timestamp=(new Date).getTime(),requestProfileId;if(window.LastPage=window.location.pathname.substring(1),window.LastPage2="news","undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.articleContent&&window.article.post_id==window.articleID?(console.log("hitM"),this.setState({services:{Done:(new Date).getTime()}})):getarticle(window.articleID);else{var _xhr=new XMLHttpRequest;_xhr.open("GET","https://r6sground.cn/r6sg-app/res/need.js/",!0),_xhr.send(),_xhr.onreadystatechange=function(){_xhr.readyState==XMLHttpRequest.DONE&&200==_xhr.status&&(window.needjs=_xhr.responseText,eval(_xhr.responseText),"undefined"!=typeof window.articleContent&&window.article.post_id==window.articleID?(console.log("hitM"),_this2.setState({services:{Done:(new Date).getTime()}})):getarticle(window.articleID))}}window.onpopstate=function(e){if("undefined"!=typeof window.articleContent&&"undefined"!=typeof window.articleContent.articleURL){requestProfileId=window.resulted.profile_id;var t="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,t)}}}},{key:"render",value:function(){if(window.Fthis=this,window.articleID=window.location.pathname.substring(window.location.pathname.lastIndexOf("/",window.location.pathname.lastIndexOf(".html"))+1,window.location.pathname.lastIndexOf(".html")),window.PaperMarginResize=function(e){if(console.log("RC"),document.body.offsetWidth>1e3?document.body.offsetWidth>1200?window.PaperMargin="10px "+(document.body.offsetWidth-1200)/2+"px":window.PaperMargin="10px 50px":window.PaperMargin=20,e){var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})}},window.onresize=function(){window.PaperMarginResize(!0)},window.PaperMarginResize(),"undefined"!=typeof window.feedcontent&&"undefined"!=typeof window.feedcontent.posts)for(var e in window.feedcontent.posts)if(window.articleID==window.feedcontent.posts[e].id)return document.title=window.feedcontent.posts[e].title+" | \u6e38\u620f\u8d44\u8baf | \u5f69\u8679\u516d\u53f7\u6218\u573a",_react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement("div",{style:{margin:window.PaperMargin,background:"white",boxShadow:"5px 5px 2px #E5E5E5",padding:10}},_react.default.createElement(Title,{level:2,style:{margin:"20px 10px"}},window.feedcontent.posts[e].title),_react.default.createElement(Title,{level:4,style:{margin:"20px 10px",fontSize:14}},window.feedcontent.posts[e].modified),_react.default.createElement("div",{style:{margin:"10px 10px"},dangerouslySetInnerHTML:{__html:widthLimit(window.feedcontent.posts[e].content)}}),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:24,md:24},_react.default.createElement(_reactLoadScript.default,{url:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",onLoad:console.log(4)}),_react.default.createElement(_reactAdsense.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"})))));var t;if("undefined"!=typeof this.state.services.Done&&window.article.post_id==window.articleID)return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement("div",{style:{margin:window.PaperMargin,background:"white",boxShadow:"5px 5px 2px #E5E5E5",padding:10,maxWidth:1024}},_react.default.createElement(Title,{level:2,style:{margin:"20px 10px"}},window.article.post_title),_react.default.createElement(Title,{level:4,style:{margin:"20px 10px",fontSize:14}},window.article.modified),_react.default.createElement("div",(t={style:{margin:"10px 10px"},class:"widthLimit"},(0,_defineProperty2.default)(t,"class","markdown"),(0,_defineProperty2.default)(t,"dangerouslySetInnerHTML",{__html:widthLimit(window.articleContent)}),t)),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:24,md:24},_react.default.createElement(_reactLoadScript.default,{url:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",onLoad:console.log(4)}),_react.default.createElement(_reactAdsense.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"})))));if("undefined"==typeof window.titleFromPHP)var a="\u7a0d\u5b89\u52ff\u8e81";else a=window.titleFromPHP;return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_react.default.createElement("div",{style:{margin:window.PaperMargin,background:"white",boxShadow:"5px 5px 2px #E5E5E5",padding:10}},_react.default.createElement(Title,{level:2,style:{margin:"20px 10px"}},a),_react.default.createElement(Title,{level:4,style:{margin:"20px 10px",fontSize:14}},"Loading"),_react.default.createElement("div",{style:{margin:"10px 10px"}},_react.default.createElement(_skeleton.default,{active:!0,title:!0}),_react.default.createElement(_skeleton.default,{active:!0,title:!1}),_react.default.createElement(_skeleton.default,{active:!0,title:!1}),_react.default.createElement(_skeleton.default,{active:!0,title:!1}),_react.default.createElement(_skeleton.default,{active:!0,title:!0}),_react.default.createElement(_skeleton.default,{active:!0,title:!1}),_react.default.createElement(_skeleton.default,{active:!0,title:!1}),_react.default.createElement(_skeleton.default,{active:!0,title:!0}),_react.default.createElement(_skeleton.default,{active:!0,title:!1})),_react.default.createElement(_row.default,null,_react.default.createElement(_col.default,{span:24,lg:24,md:24},_react.default.createElement(_reactLoadScript.default,{url:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",onLoad:console.log(4)}),_react.default.createElement(_reactAdsense.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"})))))}},{key:"componentDidUpdate",value:function(){}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default},s9Q6:function(e,t,a){e.exports={img:"antd-pro\\pages\\article\\home-img"}}}]);