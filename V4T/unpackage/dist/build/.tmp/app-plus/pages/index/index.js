(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"29f0":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{swipterData:null}},onLoad:function(){var n=this;e.request({url:this.resourceUrl+"json/news.json",method:"GET",dataType:"json",success:function(e){n.swipterData=e.data}})},onReady:function(){this.getServerUserTime()},onShow:function(){},methods:{openWeb:function(n){0!=n?plus.runtime.openWeb(n):e.showToast({title:"这个卡片还未开放哦~",icon:"none"})},goto:function(n){e.navigateTo({url:n,success:function(e){},fail:function(){e.showToast({title:"打开失败！请检查网络是否良好！",icon:"none",mask:!1,duration:1500})}})},getServerUserTime:function(){var n;return e.request({url:this.websiteUrl+"/user/time",method:"GET",header:{Cookie:e.getStorageSync("Cookie")},dataType:"json",success:function(t){if(n=t.data.data,null!=e.getStorageSync("localuser")){var o=e.getStorageSync("localtime");n!=o&&(e.removeStorageSync("localuser",null),e.showToast({title:"服务器更新，请重新登录！",icon:"none"}))}},fail:function(n){e.showToast({title:"服务器可能睡着了……",icon:"none"}),e.removeStorageSync("localuser",null)}}),n}}};n.default=t}).call(this,t("6e42")["default"])},"501c":function(e,n,t){"use strict";t.r(n);var o=t("839b"),a=t("9ab2");for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);t("a891");var r=t("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"839b":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},"9ab2":function(e,n,t){"use strict";t.r(n);var o=t("29f0"),a=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=a.a},a891:function(e,n,t){"use strict";var o=t("ed3d"),a=t.n(o);a.a},ed3d:function(e,n,t){}},[["ff15","common/runtime","common/vendor"]]]);