"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[729],{9361:function(n,t,e){e.d(t,{a:function(){return p}});var r,a,i=e(168),o=e(6444),u=o.ZP.ul(r||(r=(0,i.Z)(["\n  font-family: ",";\n  margin-top: 8px;\n  margin-bottom: 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.fonts.body})),c=o.ZP.li(a||(a=(0,i.Z)(["\n  padding: 4px 4px 4px 0;\n  /* margin-left: 8px; */\n"]))),s=e(184),f=function(n){var t=n.item,e=n.setItemContent;return(0,s.jsx)(c,{children:e(t)})},p=function(n){var t=n.items,e=n.setItemContent;return(0,s.jsx)(u,{children:t.map((function(n){return(0,s.jsx)(f,{item:n,setItemContent:e},n.id)}))})}},4290:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(5243),a=e(184),i=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#07c",ariaLabel:"three-dots-loading",wrapperStyle:{height:"34px",paddingTop:"16px",paddingBottom:"32px"},wrapperClassName:"",visible:!0})}},5034:function(n,t,e){e.d(t,{j:function(){return c}});var r,a=e(168),i=e(1087),o=e(6444),u=e(407),c=(0,o.ZP)(i.rU)(r||(r=(0,a.Z)(["\n  display: inline-block;\n  font-size: ",";\n  color: ",";\n\n  font-weight: ",";\n  text-decoration: underline;\n\n  transition: color var(--animation);\n  ","\n  ","\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.bold}),u.cp,u.Dh,(function(n){return n.theme.colors.primary}))},9625:function(n,t,e){e.d(t,{A8:function(){return f},im:function(){return l},lG:function(){return p},rg:function(){return m}});var r,a,i,o,u=e(168),c=e(6444),s=e(407),f=c.ZP.h1(r||(r=(0,u.Z)(["\n  font-size: ",";\n  text-transform: uppercase;\n  color: ",";\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n  ","\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),s.cp),p=c.ZP.h2(a||(a=(0,u.Z)(["\n  font-size: ",";\n  /* text-transform: capitalize; */\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n  ","\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),s.cp),m=c.ZP.h3(i||(i=(0,u.Z)(["\n  font-size: ",";\n  /* text-transform: capitalize; */\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n  ","\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),s.cp),l=c.ZP.p(o||(o=(0,u.Z)(["\n  font-size: ",";\n  color: ",";\n  /* font-weight: ","; */\n  margin: 0;\n  ","\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.bold}),s.cp)},2638:function(n,t,e){e.d(t,{Q:function(){return r}});var r={idle:"idle",loading:"loading",success:"success",error:"error"}},729:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r=e(9055),a=e(9198),i=e(9361),o=e(4290),u=e(5034),c=e(9625),s=e(2638),f=e(5861),p=e(9439),m=e(7757),l=e.n(m),d=e(2791),h=e(7596),v=e(2945),x=e(7689),g=e(184),Z=function(){var n=function(){var n=(0,d.useState)(),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(s.Q.idle),i=(0,p.Z)(a,2),o=i[0],u=i[1];return(0,d.useEffect)((function(){var n=function(){var n=(0,f.Z)(l().mark((function n(){var t,e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(s.Q.loading),n.prev=1,n.next=4,(0,v.Df)();case 4:if(t=n.sent){n.next=7;break}return n.abrupt("return");case 7:if(console.log("data ",t),e=t.results,t.total_results){n.next=13;break}return h.Am.warn("Sorry, we couldn't find any matches. Please try again."),u(s.Q.success),n.abrupt("return");case 13:r(e.map((function(n){return{id:n.id,title:n.title}}))),u(s.Q.success),n.next=21;break;case 17:n.prev=17,n.t0=n.catch(1),h.Am.error("Oops! Something went wrong. Please try again."),u(s.Q.error);case 21:case"end":return n.stop()}}),n,null,[[1,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),{movies:e,status:o}}(),t=n.movies,e=n.status,m=(0,x.TH)();return(0,g.jsx)(r.x,{as:"section",children:(0,g.jsxs)(a.Z,{children:[(0,g.jsx)(c.A8,{children:"Trending today"}),t&&(0,g.jsx)(i.a,{items:t,setItemContent:function(n){var t=n.id,e=n.title;return(0,g.jsx)(u.j,{to:"movies/"+String(t),state:{from:m},children:e})}}),e===s.Q.loading&&(0,g.jsx)(o.a,{})]})})}},2945:function(n,t,e){e.d(t,{Df:function(){return c},TP:function(){return f},tx:function(){return m},z1:function(){return s},zv:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),o=e(3263),u="e0e51fe83e5367383559a53110fae0e8";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(i().mark((function n(){var t,e,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,(0,o.Z)("trending/movie/day",{params:{api_key:u,page:t}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,(0,o.Z)("search/movie",{params:{api_key:u,query:t,page:e}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t),{params:{api_key:u}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t,"/credits"),{params:{api_key:u}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t,"/reviews"),{params:{api_key:u}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=729.a6e357fa.chunk.js.map