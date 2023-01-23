"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871],{9361:function(n,t,e){e.d(t,{a:function(){return h}});var r,o,i,a=e(168),c=e(6444),u=e(407),s=(c.ZP.button(r||(r=(0,a.Z)(["\n  font-size: ",";\n  color: ",";\n  background-color: ",";\n  font-weight: ",";\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  border: none;\n  border-radius: ",";\n  cursor: pointer;\n  ","\n  ","\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal}),u.cp,u.Dh,(function(n){return n.theme.colors.secondary})),c.ZP.ul(o||(o=(0,a.Z)(["\n  font-family: ",";\n  margin-top: 8px;\n  margin-bottom: 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.fonts.body}))),f=c.ZP.li(i||(i=(0,a.Z)(["\n  padding: 4px 4px 4px 0;\n  /* margin-left: 8px; */\n"]))),p=e(184),d=function(n){var t=n.item,e=n.setItemContent;return(0,p.jsx)(f,{children:e(t)})},h=function(n){var t=n.items,e=n.setItemContent;return(0,p.jsx)(s,{children:t.map((function(n){return(0,p.jsx)(d,{item:n,setItemContent:e},n.id)}))})}},4290:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(5243),o=e(184),i=function(){return(0,o.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#07c",ariaLabel:"three-dots-loading",wrapperStyle:{height:"34px",paddingTop:"16px",paddingBottom:"32px"},wrapperClassName:"",visible:!0})}},2638:function(n,t,e){e.d(t,{Q:function(){return r}});var r={idle:"idle",loading:"loading",success:"success",error:"error"}},7398:function(n,t,e){e.d(t,{i:function(){return u},l:function(){return c}});var r,o,i=e(168),a=e(6444),c=a.ZP.h1(r||(r=(0,i.Z)(["\n  font-size: ",";\n  /* text-transform: capitalize; */\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]})),u=a.ZP.p(o||(o=(0,i.Z)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n  margin: 0;\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.bold}))},8871:function(n,t,e){e.r(t);var r=e(5861),o=e(9439),i=e(7757),a=e.n(i),c=e(9361),u=e(4290),s=e(2638),f=e(7398),p=e(2791),d=e(7689),h=e(7596),m=e(2945),l=e(184);t.default=function(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],i=t[1],g=(0,p.useState)(s.Q.idle),x=(0,o.Z)(g,2),v=x[0],b=x[1],w=(0,d.UO)().movieId,y=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(s.Q.loading),n.prev=1,n.next=4,(0,m.tx)(t);case 4:if(e=n.sent){n.next=7;break}return n.abrupt("return");case 7:if((r=e.results).length){n.next=12;break}return h.Am.warn("Sorry, we couldn't find any reviews."),b(s.Q.success),n.abrupt("return");case 12:i(r.map((function(n){return{id:n.id,author:n.author,content:n.content,updated_at:n.updated_at}}))),b(s.Q.success),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(1),h.Am.error("Oops! Something went wrong. Please try again."),b(s.Q.error);case 20:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(t){return n.apply(this,arguments)}}();(0,p.useEffect)((function(){y(w)}),[w]);return(0,l.jsxs)(l.Fragment,{children:[v===s.Q.success&&(e.length?(0,l.jsx)(c.a,{items:e,setItemContent:function(n){var t=n.author,e=n.content,r=n.updated_at;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.i,{children:t}),(0,l.jsx)(f.i,{children:r}),(0,l.jsx)(f.i,{children:e})]})}}):(0,l.jsx)(f.i,{children:"Reviews not found."})),v===s.Q.loading&&(0,l.jsx)(u.a,{})]})}},2945:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return p},tx:function(){return h},z1:function(){return f},zv:function(){return d}});var r=e(5861),o=e(7757),i=e.n(o),a=e(3263),c="e0e51fe83e5367383559a53110fae0e8",u=!1,s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c,"&page=").concat(n);return m(t)},f=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(n,"&page=").concat(t);return m(e)},p=function(n){return m("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(c))},d=function(n){return m("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(c))},h=function(n){return m("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(c))};function m(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!u){n.next=2;break}return n.abrupt("return");case 2:return u=!0,n.next=5,a.Z.get(t);case 5:return e=n.sent,r=e.data,u=!1,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=871.b5dc140e.chunk.js.map