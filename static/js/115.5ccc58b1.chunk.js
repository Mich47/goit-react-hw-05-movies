"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{9361:function(n,t,e){e.d(t,{a:function(){return f}});var r,a,i=e(168),u=e(6444),c=u.ZP.ul(r||(r=(0,i.Z)(["\n  font-family: ",";\n  margin-top: 8px;\n  margin-bottom: 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.fonts.body})),o=u.ZP.li(a||(a=(0,i.Z)(["\n  padding: 4px 4px 4px 0;\n  /* margin-left: 8px; */\n"]))),s=e(184),p=function(n){var t=n.item,e=n.setItemContent;return(0,s.jsx)(o,{children:e(t)})},f=function(n){var t=n.items,e=n.setItemContent;return(0,s.jsx)(c,{children:t.map((function(n){return(0,s.jsx)(p,{item:n,setItemContent:e},n.id)}))})}},4290:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(5243),a=e(184),i=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#07c",ariaLabel:"three-dots-loading",wrapperStyle:{height:"34px",paddingTop:"16px",paddingBottom:"32px"},wrapperClassName:"",visible:!0})}},9625:function(n,t,e){e.d(t,{A8:function(){return p},im:function(){return h},lG:function(){return f},rg:function(){return m}});var r,a,i,u,c=e(168),o=e(6444),s=e(407),p=o.ZP.h1(r||(r=(0,c.Z)(["\n  font-size: ",";\n  text-transform: uppercase;\n  color: ",";\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n  ","\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),s.cp),f=o.ZP.h2(a||(a=(0,c.Z)(["\n  font-size: ",";\n  /* text-transform: capitalize; */\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n  ","\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),s.cp),m=o.ZP.h3(i||(i=(0,c.Z)(["\n  font-size: ",";\n  /* text-transform: capitalize; */\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n  ","\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),s.cp),h=o.ZP.p(u||(u=(0,c.Z)(["\n  font-size: ",";\n  color: ",";\n  /* font-weight: ","; */\n  margin: 0;\n  ","\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.bold}),s.cp)},2638:function(n,t,e){e.d(t,{Q:function(){return r}});var r={idle:"idle",loading:"loading",success:"success",error:"error"}},5115:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),i=e(7757),u=e.n(i),c=e(9055),o=e(9361),s=e(4290),p=e(9625),f=e(2638),m=e(2791),h=e(7689),d=e(7596),l=e(2945),x=e(7917),g=e(184);t.default=function(){var n=(0,m.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1],v=(0,m.useState)(f.Q.idle),w=(0,a.Z)(v,2),b=w[0],Z=w[1],y=(0,h.UO)().movieId,k=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Z(f.Q.loading),n.prev=1,n.next=4,(0,l.zv)(t);case 4:if(e=n.sent){n.next=7;break}return n.abrupt("return");case 7:if((r=e.cast).length){n.next=12;break}return Z(f.Q.success),d.Am.warn("Sorry, we couldn't find any cast."),n.abrupt("return");case 12:i(r.map((function(n){return{id:n.id,name:n.name,character:n.character,profile_path:n.profile_path}}))),Z(f.Q.success),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(1),d.Am.error("Oops! Something went wrong. Please try again."),Z(f.Q.error);case 20:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(t){return n.apply(this,arguments)}}();(0,m.useEffect)((function(){k(y)}),[y]);return(0,g.jsxs)(g.Fragment,{children:[b===f.Q.success&&(e.length?(0,g.jsx)(o.a,{items:e,setItemContent:function(n){var t=n.name,e=n.character,r=n.profile_path,a=r?"https://image.tmdb.org/t/p/w500".concat(r):x;return(0,g.jsxs)(c.x,{py:4,children:[(0,g.jsx)("img",{src:a,alt:t,width:"180",height:"auto"}),(0,g.jsx)(p.im,{fontWeight:"bold",children:t}),(0,g.jsxs)(p.im,{children:["Character: ",e]})]})}}):(0,g.jsx)(p.im,{fontWeight:"bold",children:"Cast not found."})),b===f.Q.loading&&(0,g.jsx)(s.a,{})]})}},2945:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return p},tx:function(){return m},z1:function(){return s},zv:function(){return f}});var r=e(5861),a=e(7757),i=e.n(a),u=e(3263),c="e0e51fe83e5367383559a53110fae0e8";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(i().mark((function n(){var t,e,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,(0,u.Z)("trending/movie/day",{params:{api_key:c,page:t}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:1,n.next=3,(0,u.Z)("search/movie",{params:{api_key:c,query:t,page:e}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t),{params:{api_key:c}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Z)("movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7917:function(n,t,e){n.exports=e.p+"static/media/no_profile_picture.2700faeeda5979e25151.jpg"}}]);
//# sourceMappingURL=115.5ccc58b1.chunk.js.map