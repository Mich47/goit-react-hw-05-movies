"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[714],{9361:function(n,t,e){e.d(t,{a:function(){return d}});var r,o,i,u=e(168),a=e(6444),c=e(407),s=(a.ZP.button(r||(r=(0,u.Z)(["\n  font-size: ",";\n  color: ",";\n  background-color: ",";\n  font-weight: ",";\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  border: none;\n  border-radius: ",";\n  cursor: pointer;\n  ","\n  ","\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.normal}),c.cp,c.Dh,(function(n){return n.theme.colors.secondary})),a.ZP.ul(o||(o=(0,u.Z)(["\n  font-family: ",";\n  margin-top: 8px;\n  margin-bottom: 0;\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.fonts.body}))),f=a.ZP.li(i||(i=(0,u.Z)(["\n  padding: 4px 4px 4px 0;\n  /* margin-left: 8px; */\n"]))),p=e(184),l=function(n){var t=n.item,e=n.setItemContent;return(0,p.jsx)(f,{children:e(t)})},d=function(n){var t=n.items,e=n.setItemContent;return(0,p.jsx)(s,{children:t.map((function(n){return(0,p.jsx)(l,{item:n,setItemContent:e},n.id)}))})}},4290:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(5243),o=e(184),i=function(){return(0,o.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#07c",ariaLabel:"three-dots-loading",wrapperStyle:{height:"34px",paddingTop:"16px",paddingBottom:"32px"},wrapperClassName:"",visible:!0})}},2638:function(n,t,e){e.d(t,{Q:function(){return r}});var r={idle:"idle",loading:"loading",success:"success",error:"error"}},7398:function(n,t,e){e.d(t,{i:function(){return c},l:function(){return a}});var r,o,i=e(168),u=e(6444),a=u.ZP.h1(r||(r=(0,i.Z)(["\n  font-size: ",";\n  /* text-transform: capitalize; */\n  /* text-align: center; */\n  margin: ","px;\n  /* margin-bottom: ","px; */\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]})),c=u.ZP.p(o||(o=(0,i.Z)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n  margin: 0;\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.bold}))},714:function(n,t,e){e.r(t),e.d(t,{default:function(){return Q}});var r=e(5861),o=e(9439),i=e(7757),u=e.n(i),a=e(9198),c=e(9361),s=e(4290),f=e(2638),p=e(2791),l=e(4768);var d,h,m,g,v=e(168),x=e(6444),b=e(407),y=x.ZP.button(d||(d=(0,v.Z)(["\n  position: absolute;\n  top: ","px;\n  padding: ","px;\n  width: ","px;\n  height: 100%;\n  border: ",";\n  background-color: transparent;\n  cursor: pointer;\n  color: ",";\n  transition: color var(--animation);\n\n  ","\n  ","\n  ","\n  \n  &:hover, &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.darkGray}),b.cp,b.Dh,b.FK,(function(n){return n.theme.colors.gray})),Z=x.ZP.form(h||(h=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  /* margin: 0 auto; */\n  width: ","px;\n  height: ","px;\n"])),(function(n){return n.theme.space[9]}),(function(n){return n.theme.space[5]})),w=(x.ZP.label(m||(m=(0,v.Z)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.bold})),x.ZP.input(g||(g=(0,v.Z)(["\n  padding: 7px 36px;\n  width: 100%;\n  font-size: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.large}))),k=e(184),j=function(n){var t=n.onSubmitForm,e=n.status,r=void 0===e?f.Q.success:e,i=n.value,u=void 0===i?"":i,a=(0,p.useState)(u),c=(0,o.Z)(a,2),s=c[0],d=c[1];u||(console.log("search ",s),console.log("value ",u));return(0,k.jsxs)(Z,{onSubmit:function(n){n.preventDefault();var e=s.split(" ").filter((function(n){return""!==n})).join(" ");d(e),t(e)},children:[(0,k.jsx)(y,{type:"submit",left:0,disabled:r===f.Q.loading,children:(0,k.jsx)(l.uFR,{})}),(0,k.jsx)(w,{name:"search",value:s,type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies...",onChange:function(n){var t=n.target.value;d(t)}}),(0,k.jsx)(y,{type:"button",right:0,onClick:function(){d("")},children:(0,k.jsx)(l.IOM,{})})]})},S=e(1087),z=e(7689),_=e(7596),P=e(2945),C=e(7398),Q=function(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],i=t[1],l=(0,S.lr)(),d=(0,o.Z)(l,2),h=d[0],m=d[1],g=h.get("query"),v=(0,z.TH)();console.log("location ",v);var x=(0,p.useState)(f.Q.idle),b=(0,o.Z)(x,2),y=b[0],Z=b[1];(0,p.useEffect)((function(){if(g){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Z(f.Q.loading),n.prev=1,n.next=4,(0,P.z1)(g);case 4:if(t=n.sent,console.log("data ",t),t){n.next=8;break}return n.abrupt("return");case 8:if(console.log("data ",t),e=t.results,t.total_results){n.next=14;break}return Z(f.Q.success),_.Am.warn("Sorry, we couldn't find any matches. Please try again."),n.abrupt("return");case 14:i(e.map((function(n){return{id:n.id,title:n.title}}))),Z(f.Q.success),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(1),_.Am.error("Oops! Something went wrong. Please try again."),Z(f.Q.error);case 22:case"end":return n.stop()}}),n,null,[[1,18]])})));return function(){return n.apply(this,arguments)}}();n()}else i([])}),[g]);return(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(j,{onSubmitForm:function(n){m(n?{query:n}:{})},status:y,value:g}),e&&(0,k.jsx)(c.a,{items:e,setItemContent:function(n){var t=n.id,e=n.title;return(0,k.jsx)(S.rU,{to:String(t),state:{from:v},children:(0,k.jsx)(C.i,{children:e})})}}),y===f.Q.loading&&(0,k.jsx)(s.a,{})]})}},2945:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return p},tx:function(){return d},z1:function(){return f},zv:function(){return l}});var r=e(5861),o=e(7757),i=e.n(o),u=e(3263),a="e0e51fe83e5367383559a53110fae0e8",c=!1,s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a,"&page=").concat(n);return h(t)},f=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(n,"&page=").concat(t);return h(e)},p=function(n){return h("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(a))},l=function(n){return h("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(a))},d=function(n){return h("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(a))};function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!c){n.next=2;break}return n.abrupt("return");case 2:return c=!0,n.next=5,u.Z.get(t);case 5:return e=n.sent,r=e.data,c=!1,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=714.782d012a.chunk.js.map