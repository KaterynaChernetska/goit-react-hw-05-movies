"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[414],{370:function(t,n,e){e.d(n,{e:function(){return i}});var r=e(87),a=e(689),u=e(184),c=function(t){var n=t.moviesList,e=(0,a.TH)();return(0,u.jsx)(u.Fragment,{children:null===n||void 0===n?void 0:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})},i=function(t){var n=t.moviesList;return(0,u.jsx)("ul",{children:(0,u.jsx)(c,{moviesList:n})})}},414:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(791),o=e(87),s=e(184),f=function(t){var n=t.handleFormSubmit,e=(0,o.lr)(),r=(0,a.Z)(e,1)[0].get("title"),u=(0,i.useState)(null!==r&&void 0!==r?r:""),c=(0,a.Z)(u,2),f=c[0],p=c[1];return(0,s.jsxs)("div",{children:[" ",(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(f)},children:[(0,s.jsx)("input",{type:"text",placeholder:"Enter movie name",name:"title",value:f,onChange:function(t){p(t.target.value)}}),(0,s.jsx)("button",{children:"Search"})]})]})},p=e(370),v=e(390),l=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],u=n[1],l=(0,o.lr)(),d=(0,a.Z)(l,2),m=d[0],h=d[1],x=m.get("title");(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.z8)(x);case 3:n=t.sent,e=n.results,r=e.map((function(t){return{title:t.title,id:t.id}})),u(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[x]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(f,{handleFormSubmit:function(t){h({title:t})}}),(0,s.jsx)(p.e,{moviesList:e})]})}},390:function(t,n,e){e.d(n,{Jh:function(){return l},Ov:function(){return v},Qd:function(){return s},t2:function(){return p},z8:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(912),i="https://api.themoviedb.org/3/",o="a40e5d81f1df224d1622e425c6565c72",s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i).concat("trending/movie/day"),{params:{api_key:o}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i).concat("search/movie"),{params:{query:n,api_key:o}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(n),{params:{api_key:o}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(n,"/credits"),{params:{api_key:o}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(n,"/reviews"),{params:{api_key:o}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=414.e1987b3e.chunk.js.map