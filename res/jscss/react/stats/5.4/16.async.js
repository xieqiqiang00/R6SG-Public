(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{YmWs:function(e,r,t){"use strict";var a=t("u+rM");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=a(t("NTxs")),u=a(t("k63P")),c={namespace:"error",state:{error:"",isloading:!1},effects:{query:n.default.mark(function e(r,t){var a,c,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.payload,c=t.call,o=t.put,e.next=4,c(u.default,a.code);case 4:return e.next=6,o({type:"trigger",payload:a.code});case 6:case"end":return e.stop()}},e)})},reducers:{trigger:function(e,r){return{error:r.payload}}}};r.default=c},k63P:function(e,r,t){"use strict";var a=t("u+rM");Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var n=a(t("NTxs")),u=a(t("o2MN")),c=a(t("t3Un"));function o(e){return s.apply(this,arguments)}function s(){return s=(0,u.default)(n.default.mark(function e(r){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/".concat(r)));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}}}]);