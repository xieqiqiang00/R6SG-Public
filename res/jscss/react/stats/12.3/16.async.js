(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"9NPa":function(e,t,a){"use strict";var l=a("fbTi"),r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("B40R");var n=r(a("43HQ"));a("dp+4");var d=r(a("nA/W"));a("ESh5");var i=r(a("CtjU")),o=r(a("3CjV"));a("dMhr");var s=r(a("eJcY"));a("0NfI");var u=r(a("ZHzj"));a("VIk5");r(a("X+Ft"));a("Q1Fi");var f=r(a("7NCv"));a("aYrR");var c=r(a("UNxR"));a("Hq/V");var m=r(a("fAnr"));a("jDyY");var p=r(a("q6Oz"));a("5hX3");var w=r(a("wjJH")),g=r(a("43Yg")),h=r(a("/tCh")),v=r(a("scpF")),E=r(a("O/V9")),y=r(a("8aBX"));a("08VQ");var C=r(a("5+Er"));a("ZHPb");var M=r(a("I/5B"));a("I4dy");var k=r(a("+qVy")),_=l(a("FQm9")),b=(r(a("syOM")),r(a("zsfv"))),x=a("TJP2"),T=(r(a("pUXw")),a("KTCi"));r(a("YR7N")),r(a("LOQS")),r(a("BS6i")),r(a("v99g")),r(a("Umy/")),a("+n12"),r(a("A+LV")),a("SaUU"),a("EH+i"),k.default.MonthPicker,k.default.RangePicker,k.default.WeekPicker,M.default.Panel,C.default.Title,C.default.Paragraph,C.default.Text;window.onresize=function(){window.Fthis.setState({services:{Done:(new Date).getTime()}})};var F="",S=function(e){function t(e){var a;return(0,g.default)(this,t),a=(0,v.default)(this,(0,E.default)(t).call(this,e)),a.state={statePageTag:"Peek",services:[{}],view:"type_a"},a}return(0,y.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){window.Fthis=this,window.LastPage="Stats/Peek",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";F=window.location.pathname.substring(t,t+36)}catch(e){F=0}if("undefined"!=typeof window.resulted&&"undefined"!=typeof window.resulted.profile_id&&(0!=String(F).length&&0!=String(F)||(F=window.resulted.profile_id),e=window.resulted.profile_id),F==e){F=window.resulted.profile_id;var a="/"+window.LastPage+"/"+F;history.replaceState(null,null,a);var l=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,x.formatMessage)({id:"\u7684\u6e38\u620f\u6570\u636e"})+" "+document.title.replace(l,"")}else 36!=F.length&&(F=0)},window.urlFix(),"undefined"!=typeof window.resulted&&window.resulted.profile_id==F?this.setState({services:{Done:(new Date).valueOf()}}):window.Fthis.props.history.replace("/search/?profileid="+F),window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==F){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,x.formatMessage)({id:"\u7684\u6218\u7ee9"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+F)},this.reCalcMainHeight=function(){var e=document.getElementsByTagName("body")[0].offsetHeight,t=e-64;Fthis.state.mainHeight!=t&&Fthis.setState({mainHeight:t})}}},{key:"componentDidUpdate",value:function(){this.reCalcMainHeight()}},{key:"render",value:function(){var e=this;window.Fthis=this;var t=_.default.createElement(w.default,{type:"loading"});(0,x.formatMessage)({id:"\u64c5\u957f"}),(0,x.formatMessage)({id:"\u65f6\u957f"}),(0,x.formatMessage)({id:"\u6218\u635f"}),(0,x.formatMessage)({id:"\u80dc\u7387"});function a(e){return"undefined"==typeof e.extra?_.default.createElement(p.default,{title:e.title,bordered:!1,hoverable:!0,style:{height:210,margin:5}},e.content):_.default.createElement(p.default,{title:e.title,style:{height:210,margin:5},bordered:!1,hoverable:!0,extra:_.default.createElement("a",{href:e.extraURL},e.extra)},e.content)}if("undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done){if("object"!=typeof window.resulted||"undefined"==typeof window.resulted.profile_id){try{window.Fthis.props.history.replace("/search/?profileid="+F)}catch(e){window.Fthis.props.history.replace("/search/?profileid=")}return""}var l;if("undefined"!=typeof window.resulted&&"undefined"!=typeof window.resulted.nicename&&""!=window.resulted.nicename&&null!=window.resulted.nicename&&"("+window.resulted.nicename+")","undefined"==typeof window.resulted||"undefined"==typeof window.resulted.userComp1||"undefined"==typeof window.resulted.userComp1.updatetime)_.default.createElement("span",null,(0,x.formatMessage)({id:"\u6682\u65f6\u6ca1\u6709\u6bd4\u8d5b\u6570\u636e"})),_.default.createElement("span",null,(0,x.formatMessage)({id:"\u8bf7\u6e38\u73a9\u4e00\u573a\u6bd4\u8d5b\u540e\u518d\u6765\u770b\u770b"}));else{window.resulted.userComp1.generalpvp_matchplayed>1?(window.resulted.userComp1.operatorpvp_roundlost>0||(window.resulted.userComp1.operatorpvp_roundlost=0),window.resulted.userComp1.operatorpvp_roundwon>0||(window.resulted.userComp1.operatorpvp_roundwon=0),window.resulted.userComp1.operatorpvp_roundwon>window.resulted.userComp1.operatorpvp_roundlost?(0,x.formatMessage)({id:"\u591a\u80dc"}):window.resulted.userComp1.operatorpvp_roundlost>window.resulted.userComp1.operatorpvp_roundwon?(0,x.formatMessage)({id:"\u591a\u8d25"}):(0,x.formatMessage)({id:"\u5e73"})):"won"==window.resulted.userComp1.result?(0,x.formatMessage)({id:"\u80dc"}):"lose"==window.resulted.userComp1.result?(0,x.formatMessage)({id:"\u8d1f"}):(0,x.formatMessage)({id:"\u5f03\u8d5b"});var r="?",g=0;try{window.resulted.userComp1.secureareapvp_matchplayed>0&&(r=(0,x.formatMessage)({id:"\u4fdd\u5168"}),g=window.resulted.userComp1.secureareapvp_matchplayed),window.resulted.userComp1.rescuehostagepvp_matchplayed>0&&(r=(0,x.formatMessage)({id:"\u4eba\u8d28"}),g=window.resulted.userComp1.rescuehostagepvp_matchplayed),window.resulted.userComp1.plantbombpvp_matchplayed>0&&(r=(0,x.formatMessage)({id:"\u70b8\u5f39"}),g=window.resulted.userComp1.plantbombpvp_matchplayed),g>Math.max(window.resulted.userComp1.secureareapvp_matchplayed,window.resulted.userComp1.rescuehostagepvp_matchplayed,window.resulted.userComp1.plantbombpvp_matchplayed)&&(r=(0,x.formatMessage)({id:"\u591a\u79cd"}))}catch(e){console.error(e)}(0,x.formatMessage)({id:"\u5426"});var h=0;try{0!=window.resulted.userComp1.rank_apac_mmr&&(h+=window.resulted.userComp1.rank_apac_mmr),0!=window.resulted.userComp1.rank_emea_mmr&&(h+=window.resulted.userComp1.rank_emea_mmr),0!=window.resulted.userComp1.rank_ncsa_mmr&&(h+=window.resulted.userComp1.rank_ncsa_mmr),0!=h&&(h>0?"+"+String(h):String(h))}catch(e){console.error(e)}l=r,_.default.createElement("div",null,_.default.createElement(f.default,null,_.default.createElement(m.default,{span:12,md:8,lg:8},"\u6700\u65b0\u4e00\u6761\u8bb0\u5f55"),_.default.createElement(m.default,{span:0,md:8,lg:8,style:{textAlign:"center"}},"\u66f4\u65b0\u4e8e"),_.default.createElement(m.default,{span:12,md:8,lg:8,style:{textAlign:"right"}},"YOUX"),_.default.createElement(m.default,{span:12,md:6,lg:4},_.default.createElement(c.default,{title:"K/D/A",value:function(){try{return window.resulted.userComp1.operatorpvp_kills+"/"+window.resulted.userComp1.operatorpvp_death+"/"+window.resulted.userComp1.generalpvp_killassists}catch(e){console.error(e)}}()})),_.default.createElement(m.default,{span:12,md:6,lg:4},_.default.createElement(c.default,{title:"Rating",value:function(){try{if("object"==typeof window.resulted.userComp1&&"undefined"!=typeof window.resulted.userComp1.operatorpvp_ug&&window.resulted.userComp1.operatorpvp_ug>0&&"undefined"!=typeof window.resulted.userComp1.operatorpvp_roundwon&&"undefined"!=typeof window.resulted.userComp1.operatorpvp_roundlost&&window.resulted.userComp1.operatorpvp_roundlost+window.resulted.userComp1.operatorpvp_roundwon>0)return parseInt(window.resulted.userComp1.operatorpvp_ug/(window.resulted.userComp1.operatorpvp_roundwon+window.resulted.userComp1.operatorpvp_roundlost))}catch(e){console.error(e)}}()})),_.default.createElement(m.default,{span:12,md:6,lg:4},_.default.createElement(c.default,{title:"\u6a21\u5f0f",value:r})),_.default.createElement(m.default,{span:12,md:6,lg:4},_.default.createElement(c.default,{title:"\u6e38\u620f\u603b\u6bd4\u5206",value:function(){try{return window.resulted.userComp1.operatorpvp_roundwon+"/"+window.resulted.userComp1.operatorpvp_roundlost}catch(e){console.error(e)}}()})),_.default.createElement(m.default,{span:24,md:12,lg:8},_.default.createElement(c.default,{title:"\u5730\u56fe",value:function(){try{return(0,x.formatMessage)({id:mapIdToName(window.resulted.userComp1.map)})}catch(e){console.error(e)}}()})))),_.default.createElement("div",null,_.default.createElement(f.default,null,_.default.createElement(m.default,{span:16},"\u8bb0\u5f55\u4e8e ",function(){try{return"undefined"!=typeof window.resulted.userComp1.LastTimePlayedV2?window.getFriendlyTime(window.resulted.userComp1.LastTimePlayedV2):window.getFriendlyTime(window.resulted.userComp1.updatetime)}catch(e){console.error(e)}}()),_.default.createElement(m.default,{span:8},"\u7531 3\u6b21 \u6bd4\u8d5b\u5408\u5e76"))),_.default.createElement("div",null,(0,x.formatMessage)({id:"\u70b9\u51fb\u67e5\u770b\u672c\u573aRating\u7b49\u6570\u636e"}),_.default.createElement("br",null),function(){try{return"undefined"!=typeof window.resulted.userComp1.LastTimePlayedV2?window.getFriendlyTime(window.resulted.userComp1.LastTimePlayedV2):window.getFriendlyTime(window.resulted.userComp1.updatetime)}catch(e){console.error(e)}}())}var v="";v="PC"==window.resulted.GamePlatformType?"#2db7f5":"PlayStation"==window.resulted.GamePlatformType?"#108ee9":"Xbox"==window.resulted.GamePlatformType?"#87d068":"#f50",window.resulted.profile_id,window.userinfo.ProfileID;var E="";try{0!=window.isFreshing?E=_.default.createElement(u.default,{title:(0,x.formatMessage)({id:"\u6b63\u5728\u68c0\u67e5\u5f53\u524d\u6570\u636e\u662f\u5426\u662f\u6700\u65b0\u7248\u672c"})},_.default.createElement(w.default,{type:"loading"})):(E=(0,x.formatMessage)({id:"\u6700\u65b0"}),"object"==typeof window.resulted.userComp1&&("number"==typeof window.resulted.userComp1.LastTimePlayedV2&&window.resulted.userComp1.LastTimePlayedV2>0?E=window.getFriendlyTime(new Date(window.resulted.userComp1.LastTimePlayedV2).toISOString()):"string"==typeof window.resulted.userComp1.updatetime&&(E=window.getFriendlyTime(window.resulted.userComp1.updatetime))))}catch(e){E=""}var y=window.r6sgFunction.wideView(),C=y[1],M=y[0];return _.default.createElement("div",{id:"new_main",style:{maxWidth:1850,height:Fthis.state.mainHeight||window.innerHeight-64,overflow:"auto"}},function(){try{if("object"!=typeof window.resulted)return"";var e="loading-3-quarters",t="",a=!0,l="\u4e0b\u8f7d\u6570\u636e\u4e2d",r=9,n=0;try{window.resulted.receiveCounterBaseDataCounter>0&&(n+=window.resulted.receiveCounterBaseDataCounter),window.resulted.receiveCounterSecondaryDataCounter>0&&(n+=window.resulted.receiveCounterSecondaryDataCounter),window.resulted.receiveCounterFreshCounter>0&&(n+=window.resulted.receiveCounterFreshCounter)}catch(e){}var d="("+n+"/"+r+")";return window.resulted.receiveCounterERROR>0?(l="\u52a0\u8f7d\u51fa\u9519\uff0c\u53ef\u80fd\u662f\u4e0e\u516d\u53f7\u6218\u573a\u4e0e\u80b2\u78a7\u7684\u7f51\u7edc\u8fde\u63a5\u51fa\u73b0\u95ee\u9898\uff0c\u5237\u65b0\u53ef\u80fd\u4f1a\u89e3\u51b3\u8be5\u95ee\u9898\u3002",e="close-circle",a=!1,t="red"):"undefined"==typeof window.resulted.receiveCounterBaseDataCounter||window.resulted.receiveCounterBaseDataCounter<4?l="\u4e0b\u8f7d\u57fa\u672c\u6570\u636e\u548c\u6bd4\u8d5b\u8bb0\u5f55"+d:"undefined"==typeof window.resulted.receiveCounterFreshCounter||window.resulted.receiveCounterFreshCounter<1?(l="\u68c0\u67e5\u73a9\u5bb6\u6570\u636e\u662f\u5426\u4e3a\u6700\u65b0"+d,e="sync"):window.resulted.stateUpdated?(l="\u53d1\u73b0\u6570\u636e\u53d8\u52a8\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u4ee5\u67e5\u770b\u6700\u65b0\u7684\u6570\u636e\u3002",e="info-circle",a=!1):window.resulted.stateNeed2BeUpdate?(l="\u6570\u636e\u9700\u8981\u66f4\u65b0\uff0c\u8be5\u8d26\u6237\u9700\u8981\u5148\u6e38\u73a9\u4e00\u573a\u6bd4\u8d5b\uff0c\u7136\u540e\u518d\u6b21\u5237\u65b0\u6b64\u9875\u9762\u4ee5\u67e5\u770b\u5b8c\u6574\u6570\u636e\u3002",e="warning",a=!1,t="red"):(e="check-circle",l="\u6570\u636e\u5df2\u7ecf\u662f\u6700\u65b0",a=!1,t="#52c41a"),_.default.createElement("div",{style:{position:"relative",minHeight:48,background:"#FFFBE6",lineHeight:"48px",paddingLeft:64,paddingRight:14}},_.default.createElement("div",{style:{position:"absolute",left:14,top:6}},_.default.createElement(w.default,{type:e,style:{marginRight:5,lineHeight2:"38px",fontSize:32,color:t},spin:a})),_.default.createElement("div",{style:{textAlign:"left",width:"100%",display:"inline-block"}},l))}catch(e){console.error("PEEK_2",e)}}(),_.default.createElement(T.ChartCard,{style:{margin:0,cursor:"auto",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.09)"},bordered:!1,hoverable:!1,title:_.default.createElement("div",null,_.default.createElement("div",{style:{height:96,width:"100%",fontSize:function(){var e=window.resulted.UsernameOnPlatform.length,t=144+C;window.innerWidth<480&&(t=48);var a=t/window.innerWidth*100,l=((100-a)/(e+0)).toFixed(2);return window.innerWidth/100*l>40&&(l*=40/(window.innerWidth/100*l)),l+"vw"}(),color:"black",lineHeight:"96px"}},_.default.createElement("div",{style:{fontSize:12,position:"absolute",lineHeight:"22px",height:22,overflow:"hidden",top:2,zIndex:100,paddingRight:4,filter:r6sgF.invert()}},_.default.createElement(s.default,{className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}(),color:v},window.resulted.GamePlatformType),_.default.createElement(s.default,{className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}(),color:"blue"},function(){return"undefined"==typeof window.resulted.onlineLevel?_.default.createElement("span",null,_.default.createElement(w.default,{type:"loading"})," ",(0,x.formatMessage)({id:"\u68c0\u67e5\u5728\u7ebf\u72b6\u6001"})):-2==window.resulted.onlineLevel?_.default.createElement("span",null,(0,x.formatMessage)({id:"\u5728\u7ebf\u72b6\u6001\uff1a"}),_.default.createElement(u.default,{title:(0,x.formatMessage)({id:"\u8ba2\u9605Prime\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u5176\u4ed6\u73a9\u5bb6\u662f\u5426\u5728\u7ebf\u4ee5\u53ca\u662f\u5426\u6b63\u5728\u6e38\u620f"})},_.default.createElement("span",null," ",_.default.createElement(w.default,(t={type:"stop",theme:"filled"},(0,o.default)(t,"theme","twoTone"),(0,o.default)(t,"twoToneColor","#eb2f96"),t))," "+(0,x.formatMessage)({id:"\u9700\u8981\u8ba2\u9605"})))):-1==window.resulted.onlineLevel?_.default.createElement("span",null,_.default.createElement(w.default,(a={type:"stop",theme:"filled"},(0,o.default)(a,"theme","twoTone"),(0,o.default)(a,"twoToneColor","#eb2f96"),a))," "+(0,x.formatMessage)({id:"\u9690\u8eab"})):0==window.resulted.onlineLevel?_.default.createElement("span",null,_.default.createElement(w.default,{type:"clock-circle",theme:"twoTone",twoToneColor:"#eb2f96"})," "+(0,x.formatMessage)({id:"\u79bb\u7ebf"})):1==window.resulted.onlineLevel?_.default.createElement("span",null,_.default.createElement(w.default,{type:"check-circle",theme:"twoTone"})," "+(0,x.formatMessage)({id:"\u5728\u7ebf"})):2==window.resulted.onlineLevel?_.default.createElement("span",null,_.default.createElement(w.default,{type:"right-circle",theme:"twoTone"})," "+(0,x.formatMessage)({id:window.resulted.onlineGameName})+(0,x.formatMessage)({id:"xx\u4e2d"})):3==window.resulted.onlineLevel?_.default.createElement("span",null,_.default.createElement(w.default,{type:"play-circle",theme:"twoTone"})," "+(0,x.formatMessage)({id:"\u5f69\u8679\u516d\u53f7\u4e2d"})):4==window.resulted.onlineLevel?_.default.createElement("span",null,_.default.createElement(w.default,{type:"play-circle",theme:"twoTone"})," "+(0,x.formatMessage)({id:"UPLAY\u5728\u7ebf\u6216\u6b63\u5728\u6e38\u620f\u4e2d"})):5==window.resulted.onlineLevel?_.default.createElement("span",null,_.default.createElement(w.default,{type:"play-circle",theme:"twoTone"})," "+(0,x.formatMessage)({id:"\u6302\u673a"})):_.default.createElement("span",null,_.default.createElement(w.default,(e={type:"question-circle",theme:"filled"},(0,o.default)(e,"theme","twoTone"),(0,o.default)(e,"twoToneColor","#c20201"),e))," "+(0,x.formatMessage)({id:"\u672a\u77e5"}));var e,t,a}()),function(){if(window.resulted.isR6SGUser)return window.resulted.isPrime?_.default.createElement(s.default,{className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover-tag"}(),color:"green"},_.default.createElement(w.default,{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"})," ",(0,x.formatMessage)({id:"\u4e13\u4e1a\u73a9\u5bb6"})):_.default.createElement(s.default,{className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover-tag"}()},_.default.createElement(w.default,{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"})," ",(0,x.formatMessage)({id:"\u5df2\u8ba4\u8bc1"}))}()),_.default.createElement("span",{className:function(){return 1==resulted.shakeEffectError?"r6sg-transition-1-5 doudong anime-face":1==resulted.shakeEffectTactical?"r6sg-transition-1-5 anime-face":"r6sg-transition-1-5"}(),style:{filter:r6sgF.invert()}},window.resulted.UsernameOnPlatform))),avatar:_.default.createElement("div",null,_.default.createElement(i.default,{title:null,visible:this.state.viewAvatar,className:"card-padding-0 PeekAvatar",width:null,closable:!1,style:{width:"80vw",maxWidth:512,height:"80vw",maxHeight:512,textAlign:"center"},footer:null,maskClosable:!0,onCancel:function(){e.setState({viewAvatar:!1})}},_.default.createElement("img",{style:{width:"80vw",maxWidth:512,height:"80vw",maxHeight:512},src:ProfileIdtoAvatarImg(window.resulted.uplayMainId,"full"),onClick:function(){e.setState({viewAvatar:!1})}})),_.default.createElement(d.default,{className:function(){try{return 1==resulted.shakeEffectTactical?"r6sg-transition-1-5 anime-face":"r6sg-transition-1-5"}catch(e){}}(),size:function(){return 0==M?64:96}(),shape:"square",style:{marginBottom:10},src:ProfileIdtoAvatarImg(window.resulted.uplayMainId,"full"),onClick:function(){Fthis.setState({viewAvatar:!0})}})),footer:_.default.createElement("div",{className:"card-float-width-15"},_.default.createElement(f.default,{style:function(){return"undefined"==typeof window.resulted||"undefined"==typeof window.resulted.userComp1||"undefined"==typeof window.resulted.userComp1.updatetime?{display:"none"}:{}}(),onClick:function(){window.Fthis.props.history.push("/Stats/Competition/"+window.resulted.profile_id+"/"+window.resulted.userComp1.reportId)}},_.default.createElement(m.default,{span:24},_.default.createElement(p.default,{bordered:!1,hoverable:!0,contentHeight:32},_.default.createElement(f.default,null,_.default.createElement(m.default,{span:12,md:8,lg:8},(0,x.formatMessage)({id:"\u6700\u65b0\u4e00\u6761\u8bb0\u5f55"})),_.default.createElement(m.default,{span:0,md:8,lg:8,style:{textAlign:"center"}}),_.default.createElement(m.default,{span:12,md:8,lg:8,style:{textAlign:"right"}},E),_.default.createElement(m.default,{span:12,md:6,lg:4},_.default.createElement(c.default,{title:"Rating",value:function(){try{if("object"==typeof window.resulted.userComp1){var e=parseInt(window.resulted.userComp1.operatorpvp_ug/(window.resulted.userComp1.operatorpvp_roundwon+window.resulted.userComp1.operatorpvp_roundlost));if(e>0)return e}return"\u672a\u77e5"}catch(e){console.error(e)}}()})),_.default.createElement(m.default,{span:12,md:6,lg:4},_.default.createElement(c.default,{title:"K/D/A",value:function(){try{return window.resulted.userComp1.operatorpvp_kills+"/"+window.resulted.userComp1.operatorpvp_death+"/"+window.resulted.userComp1.generalpvp_killassists}catch(e){return console.error(e),"/"}}()})),_.default.createElement(m.default,{span:12,md:6,lg:4},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u6a21\u5f0f"}),value:l})),_.default.createElement(m.default,{span:12,md:6,lg:4},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u6e38\u620f\u603b\u6bd4\u5206"}),value:function(){try{return window.resulted.userComp1.operatorpvp_roundwon+"/"+window.resulted.userComp1.operatorpvp_roundlost}catch(e){console.error(e)}}()})),_.default.createElement(m.default,{span:24,md:12,lg:8},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u5730\u56fe"}),value:function(){try{return(0,x.formatMessage)({id:mapIdToName(window.resulted.userComp1.map)})}catch(e){console.error(e)}}()})))))),_.default.createElement(f.default,{style:function(){return"undefined"==typeof window.resulted||"undefined"==typeof window.resulted.userComp1||"undefined"==typeof window.resulted.userComp1.updatetime?{}:{display:"none"}}()},_.default.createElement(m.default,{span:24},_.default.createElement(p.default,{bordered:!1,hoverable:!0,contentHeight:32},_.default.createElement(f.default,null,_.default.createElement(m.default,{span:12,md:8,lg:8},(0,x.formatMessage)({id:"\u6700\u65b0\u4e00\u6761\u8bb0\u5f55"})),_.default.createElement(m.default,{span:0,md:8,lg:8,style:{textAlign:"center"}}),_.default.createElement(m.default,{span:12,md:8,lg:8,style:{textAlign:"right"}},E),_.default.createElement(m.default,{span:24,md:24,lg:24},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u8bf7\u6e38\u73a9\u4e00\u573a\u6bd4\u8d5b\u540e\u518d\u6765\u770b\u770b"}),value:(0,x.formatMessage)({id:"\u6682\u65f6\u6ca1\u6709\u6bd4\u8d5b\u6570\u636e"})})))))),function(){if(!window.userinfo||!window.userinfo.prime)return _.default.createElement(f.default,{style:{marginTop:10,marginBottom:10,overflowX:"hidden",boxShadow:"0px 0px 8px rgba(136, 136, 136, 0.18)",borderRadius:2,minHeight:100}},_.default.createElement(m.default,{span:24,style:{textAlign:"center"}},_.default.createElement("div",null,_.default.createElement("div",{style:{position:"absolute",width:"100%"}},"\u5e7f\u544a\u4f4d\u62db\u79df - \u5e7f\u544a\u4f4d\u62db\u79df - \u5e7f\u544a\u4f4d\u62db\u79df - \u5e7f\u544a\u4f4d\u62db\u79df - \u5e7f\u544a\u4f4d\u62db\u79df - \u5e7f\u544a\u4f4d\u62db\u79df - \u5e7f\u544a\u4f4d\u62db\u79df - \u5e7f\u544a\u4f4d\u62db\u79df"),_.default.createElement(b.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"}))))}(),_.default.createElement(f.default,{className:"r6sg-transition-1-5",style:function(){var e={};return window.r6sgFunction.toggle.props.collapsed?(e.overflow="hidden",e.paddingTop=10,e.paddingBottom=10,e.marginLeft=-20,e.marginRight=-20,e.paddingLeft=20,e.paddingRight=20,e.opacity=1,e.maxHeight=M>=4?"220px":M>=3?"320px":M>=2?"420px":"820px"):(e.overflow="hidden",e.marginLeft=0,e.marginRight=0,e.paddingLeft=100,e.paddingRight=100,e.opacity=0,e.maxHeight="0px"),e}()},_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6,className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}()},_.default.createElement(p.default,{onClick:function(){window.Fthis.props.history.push("/Stats/Perspect")},style:{margin:2},bordered:!0,hoverable:!0},_.default.createElement(p.default.Meta,{avatar:_.default.createElement(w.default,{type:"radar-chart",style:{fontSize:32,color:"#1890ff"}}),title:(0,x.formatMessage)({id:"\u80fd\u529b\u900f\u89c6"}),description:_.default.createElement("div",{className:"r6sg-textOverflowHidden"},(0,x.formatMessage)({id:"\u4ee5\u56fe\u8868\u5f62\u5f0f\u67e5\u770b\u73a9\u5bb6\u7684\u6570\u636e"}))}))),_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6,className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}()},_.default.createElement(p.default,{onClick:function(){window.Fthis.props.history.push("/Stats/Main")},style:{margin:2},bordered:!0,hoverable:!0},_.default.createElement(p.default.Meta,{avatar:_.default.createElement(w.default,{type:"ordered-list",style:{fontSize:32,color:"#1890ff"}}),title:(0,x.formatMessage)({id:"\u7efc\u5408\u6570\u636e"}),description:_.default.createElement("div",{className:"r6sg-textOverflowHidden"},(0,x.formatMessage)({id:"\u8be6\u7ec6\u6570\u636e\u5c55\u793a"}))}))),_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6,className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}()},_.default.createElement(p.default,{onClick:function(){window.Fthis.props.history.push("/Stats/Operator")},style:{margin:2},bordered:!0,hoverable:!0},_.default.createElement(p.default.Meta,{avatar:_.default.createElement(w.default,{type:"team",style:{fontSize:32,color:"#1890ff"}}),title:(0,x.formatMessage)({id:"\u5e72\u5458\u6570\u636e"}),description:_.default.createElement("div",{className:"r6sg-textOverflowHidden"},(0,x.formatMessage)({id:"\u67e5\u770b\u6bcf\u4e00\u4e2a\u5e72\u5458\u7684\u8be6\u7ec6\u6570\u636e"}))}))),_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6,className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}()},_.default.createElement(p.default,{onClick:function(){window.Fthis.props.history.push("/Stats/Rank")},style:{margin:2},bordered:!0,hoverable:!0},_.default.createElement(p.default.Meta,{avatar:_.default.createElement(w.default,{type:"trophy",style:{fontSize:32,color:"#1890ff"}}),title:(0,x.formatMessage)({id:"\u6392\u4f4d\u6570\u636e"}),description:_.default.createElement("div",{className:"r6sg-textOverflowHidden"},(0,x.formatMessage)({id:"\u67e5\u770b\u73b0\u5728\u548c\u5386\u53f2\u8d5b\u5b63\u7684\u6392\u4f4d\u6570\u636e"}))}))),_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6,className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}()},_.default.createElement(p.default,{onClick:function(){window.Fthis.props.history.push("/Stats/Weapon")},style:{margin:2},bordered:!0,hoverable:!0},_.default.createElement(p.default.Meta,{avatar:_.default.createElement(w.default,{type:"table",style:{fontSize:32,color:"#1890ff"}}),title:(0,x.formatMessage)({id:"\u6b66\u5668\u6570\u636e"}),description:_.default.createElement("div",{className:"r6sg-textOverflowHidden"},(0,x.formatMessage)({id:"\u67e5\u770b\u6bcf\u4e00\u6b3e\u6b66\u5668\u7684\u8be6\u7ec6\u6570\u636e"}))}))),_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6,className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}()},_.default.createElement(p.default,{onClick:function(){window.Fthis.props.history.push("/Stats/Met")},style:{margin:2},bordered:!0,hoverable:!0},_.default.createElement(p.default.Meta,{avatar:_.default.createElement(w.default,{type:"smile",style:{fontSize:32,color:"#1890ff"}}),title:(0,x.formatMessage)({id:"\u9047\u5230\u7684\u73a9\u5bb6"}),description:_.default.createElement("div",{className:"r6sg-textOverflowHidden"},(0,x.formatMessage)({id:"\u66fe\u7ecf\u5728\u6e38\u620f\u4e2d\u9047\u5230\u7684\u73a9\u5bb6"}))}))),_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6,className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}()},_.default.createElement(p.default,{onClick:function(){window.Fthis.props.history.push("/Stats/Competition")},style:{margin:2},bordered:!0,hoverable:!0},_.default.createElement(p.default.Meta,{avatar:_.default.createElement(w.default,{type:"schedule",style:{fontSize:32,color:"#1890ff"}}),title:(0,x.formatMessage)({id:"\u6bd4\u8d5b\u8bb0\u5f55"}),description:_.default.createElement("div",{className:"r6sg-textOverflowHidden"},(0,x.formatMessage)({id:"\u67e5\u770b\u8be6\u5c3d\u7684\u6bd4\u8d5b\u62a5\u544a"}))}))),_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6,className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}()},_.default.createElement(p.default,{onClick:function(){window.Fthis.props.history.push("/Stats/Account")},style:{margin:2},bordered:!0,hoverable:!0},_.default.createElement(p.default.Meta,{avatar:_.default.createElement(w.default,{type:"solution",style:{fontSize:32,color:"#1890ff"}}),title:(0,x.formatMessage)({id:"\u8d26\u6237\u8d44\u6599"}),description:_.default.createElement("div",{className:"r6sg-textOverflowHidden"},(0,x.formatMessage)({id:"\u5173\u8054\u7684Steam\u8d26\u6237\u7b49\u4fe1\u606f"}))})))))},_.default.createElement("div",null,_.default.createElement(f.default,null,_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u51fb\u6740\u6570\u4e0e\u6b7b\u4ea1\u6570\u7684\u6bd4\u503c"})},_.default.createElement(m.default,{span:12,md:6,lg:3},_.default.createElement(c.default,{title:"\u603bK/D",value:window.resulted.r6sgkd}))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u80dc\u5229\u56de\u5408\u4e0e\u5931\u8d25\u56de\u5408\u7684\u6bd4\u503c"})},_.default.createElement(m.default,{span:12,md:6,lg:3},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u603b\u80dc\u7387"}),value:function(){try{return(window.resulted["generalpvp_matchwon:infinite"]/(window.resulted["generalpvp_matchwon:infinite"]+window.resulted["generalpvp_matchlost:infinite"])*100).toFixed(2)}catch(e){return"ERR"}}()}))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u5f53\u524d\u8d5b\u5b63\u5728\u6392\u4f4d\u6218\u4e2d\u51fb\u6740\u6570\u4e0e\u6b7b\u4ea1\u6570\u7684\u6bd4\u503c"})},_.default.createElement(m.default,{span:12,md:6,lg:3},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u6392\u4f4dK/D"}),value:function(){try{var e=Number((window.resulted["rank_apac_kills"]/window.resulted["rank_apac_deaths"]).toFixed(2));return e+1>e?(console.log("\u6392\u4f4dK/D",typeof e,e,e+1,e+1>e),e):"\u4e0d\u53ef\u7528"}catch(e){return"ERR"}}()}))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u5f53\u524d\u8d5b\u5b63\u5728\u6392\u4f4d\u6218\u4e2d\u80dc\u5229\u56de\u5408\u4e0e\u5931\u8d25\u56de\u5408\u7684\u6bd4\u503c"})},_.default.createElement(m.default,{span:12,md:6,lg:3},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u6392\u4f4d\u80dc\u7387"}),value:function(){try{var e=Number((window.resulted["rank_apac_wins"]/(window.resulted["rank_apac_wins"]+window.resulted["rank_apac_losses"])*100).toFixed(2));return e+1>e?e:"\u4e0d\u53ef\u7528"}catch(e){return"ERR"}}()}))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u5e73\u5747\u6bcf\u4e00\u5c40\u7684\u8d21\u732e\u503c"})},_.default.createElement(m.default,{span:12,md:6,lg:3},_.default.createElement(c.default,{title:"Rating",value:window.resulted.operatorpvp_ug,precision:0}))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u6e38\u73a9\u8fc7\u7684\u56de\u5408\u6570\uff0c\u4e00\u573a\u6bd4\u8d5b\u5305\u62ec\u591a\u4e2a\u56de\u5408"})},_.default.createElement(m.default,{span:12,md:6,lg:3},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u603b\u56de\u5408\u6570"}),value:window.resulted.operatorpvp_roundwon+window.resulted.operatorpvp_roundlost}))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u6e38\u620f\u5185\u7b49\u7ea7"})},_.default.createElement(m.default,{span:12,md:6,lg:3},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u7b49\u7ea7"}),value:window.resulted.level}))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u7206\u5934\u51fb\u6740\u6570\u548c\u4e0e\u603b\u51fb\u6740\u6570\u7684\u767e\u5206\u6bd4\u503c"})},_.default.createElement(m.default,{span:12,md:6,lg:3},_.default.createElement(c.default,{title:(0,x.formatMessage)({id:"\u7206\u5934\u7387"}),value:window.resulted.r6sghsv}))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u8d5b\u5b63\u6392\u4f4d\u5206"})},_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6},_.default.createElement("div",{className:"ant-statistic"},_.default.createElement("div",{className:"ant-statistic-title"},(0,x.formatMessage)({id:"\u8d5b\u5b63\u6392\u4f4d\u5206"})),_.default.createElement("div",{className:"ant-statistic-content"},_.default.createElement("span",{className:"ant-statistic-content-value"},Array.from(function(){var e=[];try{e.push([IconMMR(mmrtolevel(window.resulted.rank_apac_mmr,seasonidToRankVer()),seasonidToRankVer()),"apac",FrinendlyMMRPro(mmrtolevel(window.resulted.rank_apac_mmr,seasonidToRankVer()),seasonidToRankVer()),window.resulted.rank_apac_mmr])}catch(e){console.error(e)}return e}()).map(function(e,t){return _.default.createElement("div",{onClick:function(){window.Fthis.props.history.push("/Stats/Rank/")},className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}(),style:{width:192,height:76,filter:r6sgF.invert(),cursor:"pointer"}},_.default.createElement("div",{style:{width:64,height:76,backgroundImage:"url("+e[0]+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"initial",display:"inline-block",verticalAlign:"top"}}),_.default.createElement("div",{style:{width:128,height:76,display:"inline-block",textAlign:"center",lineHeight:"76px",fontSize:32,verticalAlign:"top",filter:r6sgF.invert(),paddingTop:10}},_.default.createElement(c.default,{title:e[3],value:(0,x.formatMessage)({id:e[2]})})))})))))),_.default.createElement(u.default,{placement:"topLeft",title:(0,x.formatMessage)({id:"\u8d5b\u5b63\u4f11\u95f2\u5206"})},_.default.createElement(m.default,{span:24,md:12,lg:8,xl:6},_.default.createElement("div",{className:"ant-statistic"},_.default.createElement("div",{className:"ant-statistic-title"},(0,x.formatMessage)({id:"\u8d5b\u5b63\u4f11\u95f2\u5206(\u9690\u85cf\u5206)"})),_.default.createElement("div",{className:"ant-statistic-content"},_.default.createElement("span",{className:"ant-statistic-content-value"},Array.from(function(){var e=[];try{e.push([IconMMR(mmrtolevel(window.resulted.pvp_casual_skill_mean,seasonidToRankVer()),seasonidToRankVer()),"apac",window.resulted.pvp_casual_skill_mean?FrinendlyMMRPro(mmrtolevel(window.resulted.pvp_casual_skill_mean,seasonidToRankVer()),seasonidToRankVer()):"\u9700\u8981\u66f4\u65b0",window.resulted.pvp_casual_skill_mean||"\u65e0\u6570\u636e"])}catch(e){console.error(e)}return e}()).map(function(e,t){return _.default.createElement("div",{onClick:function(){window.Fthis.props.history.push("/Stats/Main/")},className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}(),style:{width:192,height:76,filter:r6sgF.invert(),cursor:"pointer"}},_.default.createElement("div",{style:{width:64,height:76,backgroundImage:"url("+e[0]+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"initial",display:"inline-block",verticalAlign:"top"}}),_.default.createElement("div",{style:{width:128,height:76,display:"inline-block",textAlign:"center",lineHeight:"76px",fontSize:32,verticalAlign:"top",filter:r6sgF.invert(),paddingTop:10}},_.default.createElement(c.default,{title:e[3],value:(0,x.formatMessage)({id:e[2]})})))})))))),_.default.createElement(m.default,{span:24,md:24,lg:8,xl:12},_.default.createElement("div",{className:"ant-statistic"},_.default.createElement("div",{className:"ant-statistic-title"},(0,x.formatMessage)({id:"\u5e38\u7528\u7684\u5e72\u5458"})),_.default.createElement("div",{className:"ant-statistic-content"},_.default.createElement("span",{className:"ant-statistic-content-value"},Array.from(function(){var e=[];try{for(var t in window.resulted.generalpvp_playthemost)e.push(openametoicon(opeidtoname(window.resulted.generalpvp_playthemost[t].id)))}catch(e){}return e}()).map(function(e,t){return _.default.createElement("div",{className:function(){if(1==resulted.shakeEffectTactical)return"anime-face-hover"}(),onClick:function(){window.Fthis.props.history.push("Stats/Operator/")},style:{width:64,height:64,backgroundImage:"url("+e+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",display:"inline-block",filter:r6sgF.invert(),cursor:"pointer"}})})))))))))}return _.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto"}},_.default.createElement(f.default,null,_.default.createElement(m.default,{span:0,lg:4,md:6},_.default.createElement(n.default,null,_.default.createElement(d.default,{shape:"square",style:{height:"100%",width:"100%"},src:"https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/res/DOM/user/empty-user-min.PNG"}))),_.default.createElement(m.default,{span:24,lg:0,md:0},_.default.createElement(d.default,{shape:"square",style:{height:"50%",width:"50%"},src:"https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/r6sground.cn/blob/master/res/DOM/user/empty-user-min.PNG"})),_.default.createElement(m.default,{span:24,lg:20,md:18},_.default.createElement("span",null,_.default.createElement("div",{style:{marginLeft:20,height:25}}),_.default.createElement("h1",{style:{marginLeft:20}},"...."),_.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u7b49\u7ea7"}),_.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u6b21\u6570"}),_.default.createElement("h3",{style:{marginLeft:20},id:"\u88ab\u67e5\u7528\u6237\u66f4\u65b0\u65f6\u95f4"})))),_.default.createElement("h1",{style:{height:20}}," "),_.default.createElement(f.default,null,_.default.createElement(m.default,{span:24,lg:6,md:12},_.default.createElement(a,{content:t,title:(0,x.formatMessage)({id:"\u52a0\u8f7d\u4e2d"}),id:"test"})),_.default.createElement(m.default,{span:24,lg:6,md:12},_.default.createElement(a,{content:t,title:(0,x.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})})),_.default.createElement(m.default,{span:24,lg:6,md:12},_.default.createElement(a,{content:t,title:(0,x.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})})),_.default.createElement(m.default,{span:24,lg:6,md:12},_.default.createElement(a,{content:t,title:(0,x.formatMessage)({id:"\u52a0\u8f7d\u4e2d"})}))))}},{key:"componentDidUpdate",value:function(){window.Fthis=this;try{document.getElementById("Card-0").onclick=function(){window.Fthis.props.history.push("/Stats/Competition")}}catch(e){}try{document.getElementById("Card-1").onclick=function(){window.Fthis.props.history.push("/Stats/Main")}}catch(e){}try{document.getElementById("Card-2").onclick=function(){window.Fthis.props.history.push("/Stats/Rank")}}catch(e){}try{document.getElementById("Card-3").onclick=function(){window.Fthis.props.history.push("/Stats/Main")}}catch(e){}try{document.getElementById("Card-4").onclick=function(){window.Fthis.props.history.push("/Stats/Operator")}}catch(e){}try{document.getElementById("Card-5").onclick=function(){window.Fthis.props.history.push("/Stats/Met")}}catch(e){}}}]),t}(_.PureComponent),N=S;t.default=N},"A+LV":function(e,t,a){},hJYk:function(e,t,a){e.exports={avatarList:"antd-pro\\components\\-avatar-list\\index-avatarList",avatarItem:"antd-pro\\components\\-avatar-list\\index-avatarItem",avatarItemLarge:"antd-pro\\components\\-avatar-list\\index-avatarItemLarge",avatarItemSmall:"antd-pro\\components\\-avatar-list\\index-avatarItemSmall",avatarItemMini:"antd-pro\\components\\-avatar-list\\index-avatarItemMini"}},pUXw:function(e,t,a){"use strict";var l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("0NfI");var r=l(a("ZHzj"));a("dp+4");var n=l(a("nA/W")),d=l(a("3CjV")),i=l(a("zAuD")),o=l(a("BG4o")),s=l(a("FQm9")),u=l(a("iczh")),f=l(a("hJYk")),c=function(e){var t=e.children,a=e.size,l=(0,o.default)(e,["children","size"]),r=s.default.Children.map(t,function(e){return s.default.cloneElement(e,{size:a})});return s.default.createElement("div",(0,i.default)({},l,{className:f.default.avatarList}),s.default.createElement("ul",null," ",r," "))},m=function(e){var t,a=e.src,l=e.size,i=e.tips,o=e.onClick,c=void 0===o?function(){}:o,m=(0,u.default)(f.default.avatarItem,(t={},(0,d.default)(t,f.default.avatarItemLarge,"large"===l),(0,d.default)(t,f.default.avatarItemSmall,"small"===l),(0,d.default)(t,f.default.avatarItemMini,"mini"===l),t));return s.default.createElement("li",{className:m,onClick:c},i?s.default.createElement(r.default,{title:i},s.default.createElement(n.default,{src:a,size:l,style:{cursor:"pointer"}})):s.default.createElement(n.default,{src:a,size:l}))};c.Item=m;var p=c;t.default=p}}]);