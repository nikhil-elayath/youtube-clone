(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(21),r=n.n(o),a=(n(66),n(16)),s=n.n(a),d=n(22),l=n(17),j=n(26),u=n.n(j),h="SEARCH_RESULTS",b="VIDEO_DETAILS_BY_ID",O=n(24),x=n.n(O),p=x.a.url;console.log("url",p);var v=function(e){return function(){var t=Object(d.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.a.post("https://youtube-clone-node.herokuapp.com/api/search/search",e).then((function(e){return console.log("response from actons",e.data.data),n({type:h,payload:e.data.data})})).catch((function(e){console.log("err from search action",e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=n(11),g=n(43),y=n.n(g),C=n(4),m=n(1);function _(e){var t=Object(C.f)(),n=Object(f.b)(),c=Object(f.c)((function(e){return e}));console.log("printing store",c);var o=i.a.useState(""),r=Object(l.a)(o,2),a=r[0],j=r[1],u=function(){var e=Object(d.a)(s.a.mark((function e(c){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("An essay was submitted: ",a),c.preventDefault(),i={searchQuery:a},e.next=5,n(v(i));case 5:t.push({pathname:"/search"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsx)("form",{onSubmit:u,children:Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center",border:"1px solid #CCCDCD"},children:[Object(m.jsx)("input",{type:"text",name:"search",placeholder:"Search",onChange:function(e){j(e.target.value)},style:{width:"250%",height:"30px",flex:1,alignItems:"center",border:"none",paddingLeft:"10px"}}),Object(m.jsx)("div",{id:"searchIcon",onClick:u,children:Object(m.jsx)(y.a,{})})]})})})}n(92);var I=n(44),w=n.n(I),k=n(45),S=n.n(k),E=n(46),D=n.n(E),R=n(47),Y=n.n(R),T=n(48),V=n.n(T);function A(){var e=Object(C.f)();return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{id:"headerMainContainer",children:[Object(m.jsxs)("div",{id:"header__left",children:[Object(m.jsx)(w.a,{}),Object(m.jsx)("img",{id:"header__logo",onClick:function(){return console.log("onYoutubeLogoClick"),void e.push({pathname:"/"})},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"})]}),Object(m.jsx)("div",{id:"header__center",children:Object(m.jsx)(_,{})}),Object(m.jsxs)("div",{id:"header__rightContainer",children:[Object(m.jsx)("div",{id:"header__rightContainerIcon",children:Object(m.jsx)(S.a,{})}),Object(m.jsx)("div",{id:"header__rightContainerIcon",children:Object(m.jsx)(D.a,{})}),Object(m.jsx)("div",{id:"header__rightContainerIcon",children:Object(m.jsx)(Y.a,{})}),Object(m.jsx)("div",{id:"header__rightContainerIcon",children:Object(m.jsx)(V.a,{})})]})]})})}n(93);var H=n(49),L=n.n(H),P=n(51),M=n.n(P),N=n(52),z=n.n(N),B=n(53),U=n.n(B),X=n(54),G=n.n(X),K=n(50),W=n.n(K);function J(){var e=i.a.useState(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=i.a.useState(!1),r=Object(l.a)(o,2),a=r[0],s=r[1],d=i.a.useState(!1),j=Object(l.a)(d,2),u=j[0],h=j[1],b=i.a.useState(!1),O=Object(l.a)(b,2),x=O[0],p=O[1],v=i.a.useState(!1),f=Object(l.a)(v,2),g=f[0],y=f[1],_=i.a.useState(!1),I=Object(l.a)(_,2),w=I[0],k=I[1],S=Object(C.f)(),E=function(){h(!1),s(!1),c(!0),y(!1),p(!1),k(!1),console.log(n,s),S.push({pathname:"/"})};return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{id:"mainContainer",children:[Object(m.jsxs)("div",{id:1==n?"selectedHomeContainer":"homeContainer",onClick:E,children:[Object(m.jsx)("div",{id:1==n?"selectedHomeIcon":"homeIcon",children:Object(m.jsx)(L.a,{})}),Object(m.jsx)("div",{children:"Home"})]}),Object(m.jsxs)("div",{id:1==a?"selectedTrendingContainer":"trendingContainer",onClick:function(e){console.log("onHomeContainerClick",E),h(!1),s(!0),c(!1),y(!1),p(!1),k(!1)},children:[Object(m.jsx)("div",{id:1==a?"selectedTrendingIcon":"trendingIcon",children:Object(m.jsx)(W.a,{})}),Object(m.jsx)("div",{children:"Explore"})]}),Object(m.jsxs)("div",{id:1==u?"selectedSubscriptionContainer":"subscriptionContainer",onClick:function(){console.log("onHomeContainerClick",E),h(!0),s(!1),c(!1),y(!1),p(!1),k(!1)},children:[Object(m.jsx)("div",{id:1==u?"selectedSubscriptionIcon":"subscriptionIcon",children:Object(m.jsx)(M.a,{})}),Object(m.jsx)("div",{children:"Subscriptions"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{id:1==x?"selectedlibraryContainer":"libraryContainer",onClick:function(){console.log("onHomeContainerClick",E),h(!1),s(!1),c(!1),y(!1),p(!0),k(!1)},children:[Object(m.jsx)("div",{id:1==x?"selectedLibraryIcon":"libraryIcon",children:Object(m.jsx)(z.a,{})}),Object(m.jsx)("div",{children:"Library"})]}),Object(m.jsxs)("div",{id:1==g?"selectedHistoryContainer":"historyContainer",onClick:function(){console.log("onHomeContainerClick",E),h(!1),s(!1),c(!1),y(!0),p(!1),k(!1)},children:[Object(m.jsx)("div",{id:1==g?"selectedHistoryIcon":"historyIcon",children:Object(m.jsx)(U.a,{})}),Object(m.jsx)("div",{children:"History"})]}),Object(m.jsxs)("div",{id:1==w?"selectedYourVideosContainer":"yourVideosContainer",onClick:function(){h(!1),s(!1),c(!1),y(!1),p(!1),k(!0)},children:[Object(m.jsx)("div",{id:1==w?"selectedYourVideosIcon":"yourVideosIcon",children:Object(m.jsx)(G.a,{})}),Object(m.jsx)("div",{children:"Your videos"})]})]})})}n(94),n(28);function q(){return Object(m.jsxs)("div",{style:{backgroundColor:"#f9f9f9",height:"100px",padding:"10px"},children:[Object(m.jsx)("h1",{children:"A YouTube clone created from scratch by Nikhil Elayath "}),Object(m.jsx)("p",{children:"Working Features"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Search--Integrated with Youtube's endpoint APIS it provides the almost the same search results that th OG Youtube will provide for the same search keyword. Go try if you want ;) "}),Object(m.jsx)("li",{children:"Play Videos--You can also play the search videos and all the data like views, likes etc are all dynamic) "})]}),Object(m.jsx)("p",{children:" May the code be with you https://github.com/nikhil-elayath/youtube-clone"})]})}function F(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{id:"header",children:Object(m.jsx)(A,{})}),Object(m.jsxs)("div",{id:"appMainContainer",children:[Object(m.jsx)("div",{children:Object(m.jsx)(J,{})}),Object(m.jsx)("div",{children:Object(m.jsx)(q,{})})]})]})}var Q=n(19),Z=(n(106),x.a.url),$=x.a.youtubeAPIKey;console.log("youtubeAPIKey",$),console.log("url",Z);n(107),n(57),n(58);n(108);n(109);var ee=n(18),te=n(59),ne=n(23),ce={searchResults:[]},ie={specificVideoResults:[]},oe=Object(ee.c)({searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return console.log("from reducer",t.payload),Object(ne.a)(Object(ne.a)({},e),{},{searchResults:t.payload});default:return e}},VideoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return console.log("from VIDEO_DETAILS_BY_ID REDUCER",t.payload),Object(ne.a)(Object(ne.a)({},e),{},{specificVideoResults:t.payload});default:return e}}}),re=[te.a],ae=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):ee.d)(ee.a.apply(void 0,re)),se=Object(ee.e)(oe,{},ae);function de(e){return console.log("from app",e),Object(m.jsx)(f.a,{store:se,children:Object(m.jsx)(Q.a,{children:Object(m.jsx)(C.c,{children:Object(m.jsx)(C.a,{basename:"".concat("/youtube-clone","/"),exact:!0,path:"/",component:F})})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=function(e){return Object(m.jsxs)(f.a,{store:se,children:[" ",e.children]})},je=n(130),ue=n(60);je.a.locale(ue),r.a.render(Object(m.jsx)(le,{children:Object(m.jsx)(de,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t){e.exports={url:"http://localhost:5010/api/",youtubeApiKey:"AIzaSyCjb5t9GnRvzzStRzrdrTA_gZc_YVYoqPg"}},66:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.982f7d2d.chunk.js.map