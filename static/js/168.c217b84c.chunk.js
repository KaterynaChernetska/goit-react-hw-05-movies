"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(861),a=n(439),c=n(757),u=n.n(c),s=n(689),i=n(791),o=n(809),p=n(390),f="Reviews_reviewsItem__Su53A",v="Reviews_name__kx3f+",h=n(184),d=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),n=r[0],c=r[1],d=(0,i.useState)(null),m=(0,a.Z)(d,2),l=m[0],w=m[1],x=(0,i.useState)(!1),_=(0,a.Z)(x,2),k=_[0],Z=_[1],y=(0,s.UO)().movieId,g=Number(y);return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(u().mark((function e(){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,(0,p.Jh)(g);case 4:r=e.sent,n=r.results,c(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),w(e.t0.message);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,h.jsxs)("div",{children:[k&&(0,h.jsx)(o.a,{}),null!==l&&(0,h.jsxs)("p",{children:["Oops, some error occured... Message: ",l]}),(0,h.jsx)("ul",{children:n.length>0?n.map((function(e){return(0,h.jsxs)("li",{className:f,children:[(0,h.jsxs)("span",{className:v,children:["Author: ",e.author]}),(0,h.jsx)("span",{children:e.content})]},e.id)})):"There are no reviews"})]})}},390:function(e,r,n){n.d(r,{Jh:function(){return h},Ov:function(){return v},Qd:function(){return o},t2:function(){return f},z8:function(){return p}});var t=n(861),a=n(757),c=n.n(a),u=n(912),s="https://api.themoviedb.org/3/",i="a40e5d81f1df224d1622e425c6565c72",o=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s).concat("trending/movie/day"),{params:{api_key:i}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s).concat("search/movie"),{params:{query:r,api_key:i}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(r),{params:{api_key:i}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/credits"),{params:{api_key:i}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/reviews"),{params:{api_key:i}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.c217b84c.chunk.js.map