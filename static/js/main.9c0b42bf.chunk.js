(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),o=n(21),r=n.n(o),s=(n(66),n(16)),a=n.n(s),d=n(22),l=n(17),j=n(25),u=n.n(j),h="SEARCH_RESULTS",b="VIDEO_DETAILS_BY_ID",O=n(26),p=n.n(O),x=p.a.url;console.log("url",x);var v=function(e){return function(){var t=Object(d.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.a.post("https://youtube-clone-node.herokuapp.com/api/search/search",e).then((function(e){return console.log("response from actons",e.data.data),n({type:h,payload:e.data.data})})).catch((function(e){console.log("err from search action",e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=n(11),g=n(43),m=n.n(g),y=n(4),C=n(1);function w(e){var t=Object(y.f)(),n=Object(f.b)(),i=Object(f.c)((function(e){return e}));console.log("printing store",i);var o=c.a.useState(""),r=Object(l.a)(o,2),s=r[0],j=r[1],u=function(){var e=Object(d.a)(a.a.mark((function e(i){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("An essay was submitted: ",s),i.preventDefault(),c={searchQuery:s},e.next=5,n(v(c));case 5:t.push({pathname:"/search"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)("div",{children:Object(C.jsx)("form",{onSubmit:u,children:Object(C.jsxs)("div",{style:{display:"flex",alignItems:"center",border:"1px solid #CCCDCD"},children:[Object(C.jsx)("input",{type:"text",name:"search",placeholder:"Search",onChange:function(e){j(e.target.value)},style:{width:"250%",height:"30px",flex:1,alignItems:"center",border:"none",paddingLeft:"10px"}}),Object(C.jsx)("div",{id:"searchIcon",onClick:u,children:Object(C.jsx)(m.a,{})})]})})})}n(92);var _=n(44),k=n.n(_),I=n(45),S=n.n(I),E=n(46),D=n.n(E),R=n(47),V=n.n(R),Y=n(48),A=n.n(Y);function T(){var e=Object(y.f)();return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{id:"headerMainContainer",children:[Object(C.jsxs)("div",{id:"header__left",children:[Object(C.jsx)(k.a,{}),Object(C.jsx)("img",{id:"header__logo",onClick:function(){return console.log("onYoutubeLogoClick"),void e.push({pathname:"/"})},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"})]}),Object(C.jsx)("div",{id:"header__center",children:Object(C.jsx)(w,{})}),Object(C.jsxs)("div",{id:"header__rightContainer",children:[Object(C.jsx)("div",{id:"header__rightContainerIcon",children:Object(C.jsx)(S.a,{})}),Object(C.jsx)("div",{id:"header__rightContainerIcon",children:Object(C.jsx)(D.a,{})}),Object(C.jsx)("div",{id:"header__rightContainerIcon",children:Object(C.jsx)(V.a,{})}),Object(C.jsx)("div",{id:"header__rightContainerIcon",children:Object(C.jsx)(A.a,{})})]})]})})}n(93);var L=n(49),H=n.n(L),M=n(51),B=n.n(M),U=n(52),N=n.n(U),z=n(53),P=n.n(z),X=n(54),F=n.n(X),Q=n(50),W=n.n(Q);function G(){var e=c.a.useState(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],o=c.a.useState(!1),r=Object(l.a)(o,2),s=r[0],a=r[1],d=c.a.useState(!1),j=Object(l.a)(d,2),u=j[0],h=j[1],b=c.a.useState(!1),O=Object(l.a)(b,2),p=O[0],x=O[1],v=c.a.useState(!1),f=Object(l.a)(v,2),g=f[0],m=f[1],w=c.a.useState(!1),_=Object(l.a)(w,2),k=_[0],I=_[1],S=Object(y.f)(),E=function(){h(!1),a(!1),i(!0),m(!1),x(!1),I(!1),console.log(n,a),S.push({pathname:"/"})};return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{id:"mainContainer",children:[Object(C.jsxs)("div",{id:1==n?"selectedHomeContainer":"homeContainer",onClick:E,children:[Object(C.jsx)("div",{id:1==n?"selectedHomeIcon":"homeIcon",children:Object(C.jsx)(H.a,{})}),Object(C.jsx)("div",{children:"Home"})]}),Object(C.jsxs)("div",{id:1==s?"selectedTrendingContainer":"trendingContainer",onClick:function(e){console.log("onHomeContainerClick",E),h(!1),a(!0),i(!1),m(!1),x(!1),I(!1)},children:[Object(C.jsx)("div",{id:1==s?"selectedTrendingIcon":"trendingIcon",children:Object(C.jsx)(W.a,{})}),Object(C.jsx)("div",{children:"Explore"})]}),Object(C.jsxs)("div",{id:1==u?"selectedSubscriptionContainer":"subscriptionContainer",onClick:function(){console.log("onHomeContainerClick",E),h(!0),a(!1),i(!1),m(!1),x(!1),I(!1)},children:[Object(C.jsx)("div",{id:1==u?"selectedSubscriptionIcon":"subscriptionIcon",children:Object(C.jsx)(B.a,{})}),Object(C.jsx)("div",{children:"Subscriptions"})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{id:1==p?"selectedlibraryContainer":"libraryContainer",onClick:function(){console.log("onHomeContainerClick",E),h(!1),a(!1),i(!1),m(!1),x(!0),I(!1)},children:[Object(C.jsx)("div",{id:1==p?"selectedLibraryIcon":"libraryIcon",children:Object(C.jsx)(N.a,{})}),Object(C.jsx)("div",{children:"Library"})]}),Object(C.jsxs)("div",{id:1==g?"selectedHistoryContainer":"historyContainer",onClick:function(){console.log("onHomeContainerClick",E),h(!1),a(!1),i(!1),m(!0),x(!1),I(!1)},children:[Object(C.jsx)("div",{id:1==g?"selectedHistoryIcon":"historyIcon",children:Object(C.jsx)(P.a,{})}),Object(C.jsx)("div",{children:"History"})]}),Object(C.jsxs)("div",{id:1==k?"selectedYourVideosContainer":"yourVideosContainer",onClick:function(){h(!1),a(!1),i(!1),m(!1),x(!1),I(!0)},children:[Object(C.jsx)("div",{id:1==k?"selectedYourVideosIcon":"yourVideosIcon",children:Object(C.jsx)(F.a,{})}),Object(C.jsx)("div",{children:"Your videos"})]})]})})}n(94);var J=n(28);function K(){return Object(C.jsxs)("div",{style:{backgroundColor:"#f9f9f9",height:"100px",padding:"10px"},children:[Object(C.jsx)("h1",{children:"A YouTube clone created from scratch by Nikhil Elayath "}),Object(C.jsx)("p",{children:"Working Features"}),Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:"Search--Integrated with Youtube's endpoint APIS it provides the almost the same search results that th OG Youtube will provide for the same search keyword. Go try if you want ;) "}),Object(C.jsx)("li",{children:"Play Videos--You can also play the search videos and all the data like views, likes etc are all dynamic) "})]}),Object(C.jsx)("p",{children:" May the code be with you https://github.com/nikhil-elayath/youtube-clone"})]})}var $=n(19),q=(n(106),p.a.url);console.log("url",q);n(107);var Z=n(57),ee=n.n(Z),te=n(58),ne=n.n(te);function ie(e){return console.log("props",e),Object(C.jsx)("div",{children:Object(C.jsxs)("div",{id:"mainContainerO",children:[Object(C.jsx)("div",{id:"viewsAndDateMainContaiener",children:Object(C.jsxs)("div",{children:[e.viewCount," views ."]})}),Object(C.jsxs)("div",{id:"likesAndDislikesMainContaiener",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(ee.a,{})," ",e.likes]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(ne.a,{})," ",e.dislikes]})]})]})})}var ce=function(e){var t=Object(f.b)(),n=Object(f.c)((function(e){return e.VideoReducer}));console.log("nanan",n),Object(i.useEffect)((function(){var e={videoId:c.pathname.split("/")[2]};t(function(e){return function(){var t=Object(d.a)(a.a.mark((function t(n){var i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.videoId,console.log("from VIDEO_DETAILS_BY_ID action",i),t.abrupt("return",u.a.get("https://www.googleapis.com/youtube/v3/videos?id="+i+"&key=AIzaSyDwOxM66btmflpeUkt6Q6Ahg3beRz4CBY4&part=snippet,contentDetails,statistics,status").then((function(e){return console.log("response from actons",e),n({type:b,payload:e.data})})).catch((function(e){console.log("err from search action",e)})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]);var c=Object(y.g)();return c.pathname.split("/")[2],console.log("location",c),Object(C.jsx)(C.Fragment,{children:n&&0!=n.specificVideoResults.length?n.specificVideoResults&&n.specificVideoResults.items.map((function(e,t){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{id:"videoSpecificContainer",children:[Object(C.jsx)(J.a,{videoId:c.pathname.split("/")[2],opts:{width:"70%"}}),Object(C.jsx)("div",{id:"videoTitle",children:Object(C.jsx)("p",{})}),Object(C.jsx)(ie,{likes:e.statistics.likeCount,dislikes:e.statistics.dislikeCount,viewCount:e.statistics.viewCount})]}),Object(C.jsx)("div",{style:{width:"70%"},children:Object(C.jsx)("hr",{})})]})})):null})};n(108);n(109);var oe=n(18),re=n(59),se=n(23),ae={searchResults:[]},de={specificVideoResults:[]},le=Object(oe.c)({searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return console.log("from reducer",t.payload),Object(se.a)(Object(se.a)({},e),{},{searchResults:t.payload});default:return e}},VideoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return console.log("from VIDEO_DETAILS_BY_ID REDUCER",t.payload),Object(se.a)(Object(se.a)({},e),{},{specificVideoResults:t.payload});default:return e}}}),je=[re.a],ue=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):oe.d)(oe.a.apply(void 0,je)),he=Object(oe.e)(le,{},ue);function be(e){return console.log("from app new","/youtube-clone"),Object(C.jsx)(f.a,{store:he,children:Object(C.jsx)($.a,{children:Object(C.jsxs)(y.c,{children:[Object(C.jsx)(y.a,{basename:window.location.pathname||"",exact:!0,path:"/",render:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{id:"header",children:Object(C.jsx)(T,{})}),Object(C.jsxs)("div",{id:"appMainContainer",children:[Object(C.jsx)("div",{children:Object(C.jsx)(G,{})}),Object(C.jsx)("div",{children:Object(C.jsx)(K,{})})]})]})}}),Object(C.jsx)(y.a,{basename:window.location.pathname||"",exact:!0,path:"/search",render:function(){}}),Object(C.jsx)(y.a,{basename:window.location.pathname||"",exact:!0,path:"/play-video/:id",children:Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{id:"header",children:Object(C.jsx)(T,{})}),Object(C.jsxs)("div",{id:"appMainContainer",children:[Object(C.jsx)("div",{children:Object(C.jsx)(G,{})}),Object(C.jsx)("div",{children:Object(C.jsx)(ce,{})})]})]})})]})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=function(e){return Object(C.jsxs)(f.a,{store:he,children:[" ",e.children]})},pe=n(130),xe=n(60);pe.a.locale(xe),r.a.render(Object(C.jsx)(Oe,{children:Object(C.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e,t){e.exports={url:"https://youtube-clone-node.herokuapp.com/api/",youtubeApiKey:"AIzaSyDwOxM66btmflpeUkt6Q6Ahg3beRz4CBY4"}},66:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.9c0b42bf.chunk.js.map