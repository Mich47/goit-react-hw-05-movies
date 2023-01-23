"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{9361:function(n,t,e){e.d(t,{a:function(){return d}});var r,i,o,a=e(168),c=e(6444),u=e(407),s=(c.ZP.button(r||(r=(0,a.Z)(["\n  font-size: ",";\n  color: ",";\n  background-color: ",";\n  font-weight: ",";\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  border: none;\n  border-radius: ",";\n  cursor: pointer;\n  ","\n  ","\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal}),u.cp,u.Dh,(function(n){return n.theme.colors.secondary})),c.ZP.ul(i||(i=(0,a.Z)(["\n  font-family: ",";\n  margin-top: 8px;\n  margin-bottom: 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.fonts.body}))),p=c.ZP.li(o||(o=(0,a.Z)(["\n  padding: 4px 4px 4px 0;\n  /* margin-left: 8px; */\n"]))),f=e(184),h=function(n){var t=n.item,e=n.setItemContent;return(0,f.jsx)(p,{children:e(t)})},d=function(n){var t=n.items,e=n.setItemContent;return(0,f.jsx)(s,{children:t.map((function(n){return(0,f.jsx)(h,{item:n,setItemContent:e},n.id)}))})}},4290:function(n,t,e){e.d(t,{a:function(){return o}});var r=e(5243),i=e(184),o=function(){return(0,i.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#07c",ariaLabel:"three-dots-loading",wrapperStyle:{height:"34px",paddingTop:"16px",paddingBottom:"32px"},wrapperClassName:"",visible:!0})}},2638:function(n,t,e){e.d(t,{Q:function(){return r}});var r={idle:"idle",loading:"loading",success:"success",error:"error"}},5115:function(n,t,e){e.r(t);var r=e(5861),i=e(9439),o=e(7757),a=e.n(o),c=e(9361),u=e(4290),s=e(2638),p=e(7398),f=e(2791),h=e(7689),d=e(7596),m=e(2945),l=e(7917),g=e(184);t.default=function(){var n=(0,f.useState)([]),t=(0,i.Z)(n,2),e=t[0],o=t[1],x=(0,f.useState)(s.Q.idle),v=(0,i.Z)(x,2),b=v[0],w=v[1],y=(0,h.UO)().movieId,k=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(s.Q.loading),n.prev=1,n.next=4,(0,m.zv)(t);case 4:if(e=n.sent){n.next=7;break}return n.abrupt("return");case 7:if((r=e.cast).length){n.next=12;break}return w(s.Q.success),d.Am.warn("Sorry, we couldn't find any cast."),n.abrupt("return");case 12:o(r.map((function(n){return{id:n.id,name:n.name,character:n.character,profile_path:n.profile_path}}))),w(s.Q.success),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(1),d.Am.error("Oops! Something went wrong. Please try again."),w(s.Q.error);case 20:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(t){return n.apply(this,arguments)}}();(0,f.useEffect)((function(){k(y)}),[y]);return(0,g.jsxs)(g.Fragment,{children:[b===s.Q.success&&(e.length?(0,g.jsx)(c.a,{items:e,setItemContent:function(n){var t=n.name,e=n.character,r=n.profile_path,i=r?"https://image.tmdb.org/t/p/w500".concat(r):l;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("img",{src:i,alt:t,width:"120",height:"auto"}),(0,g.jsx)(p.i,{children:t}),(0,g.jsxs)(p.i,{children:["Character: ",e]})]})}}):(0,g.jsx)(p.i,{children:"Cast not found."})),b===s.Q.loading&&(0,g.jsx)(u.a,{})]})}},7398:function(n,t,e){e.d(t,{i:function(){return u},l:function(){return c}});var r,i,o=e(168),a=e(6444),c=a.ZP.h1(r||(r=(0,o.Z)(["\n  font-size: ",";\n  /* text-transform: capitalize; */\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]})),u=a.ZP.p(i||(i=(0,o.Z)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n  margin: 0;\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.bold}))},2945:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return f},tx:function(){return d},z1:function(){return p},zv:function(){return h}});var r=e(5861),i=e(7757),o=e.n(i),a=e(3263),c="e0e51fe83e5367383559a53110fae0e8",u=!1,s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c,"&page=").concat(n);return m(t)},p=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(n,"&page=").concat(t);return m(e)},f=function(n){return m("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(c))},h=function(n){return m("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(c))},d=function(n){return m("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(c))};function m(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!u){n.next=2;break}return n.abrupt("return");case 2:return u=!0,n.next=5,a.Z.get(t);case 5:return e=n.sent,r=e.data,u=!1,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7917:function(n,t,e){n.exports=e.p+"static/media/no_profile_picture.2700faeeda5979e25151.jpg"}}]);
//# sourceMappingURL=115.a32acdbe.chunk.js.map