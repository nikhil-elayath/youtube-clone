(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(21),s=n.n(r),o=(n(66),n(16)),a=n.n(o),d=n(22),l=n(17),j=n(26),h=n.n(j),u="SEARCH_RESULTS",b="VIDEO_DETAILS_BY_ID",O=n(24),x=n.n(O),v=x.a.url;console.log("url",v);var p=function(e){return function(){var t=Object(d.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",h.a.post("https://youtube-clone-node.herokuapp.com/api/search/search",e).then((function(e){return console.log("response from actons",e.data.data),n({type:u,payload:e.data.data})})).catch((function(e){console.log("err from search action",e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=n(11),g=n(43),m=n.n(g),C=n(4),y=n(1);function _(e){var t=Object(C.f)(),n=Object(f.b)(),i=Object(f.c)((function(e){return e}));console.log("printing store",i);var r=c.a.useState(""),s=Object(l.a)(r,2),o=s[0],j=s[1],h=function(){var e=Object(d.a)(a.a.mark((function e(i){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("An essay was submitted: ",o),i.preventDefault(),c={searchQuery:o},e.next=5,n(p(c));case 5:t.push({pathname:"/search"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{children:Object(y.jsx)("form",{onSubmit:h,children:Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",border:"1px solid #CCCDCD"},children:[Object(y.jsx)("input",{type:"text",name:"search",placeholder:"Search",onChange:function(e){j(e.target.value)},style:{width:"250%",height:"30px",flex:1,alignItems:"center",border:"none",paddingLeft:"10px"}}),Object(y.jsx)("div",{id:"searchIcon",onClick:h,children:Object(y.jsx)(m.a,{})})]})})})}n(92);var w=n(19),k=(n(93),n(44)),I=n.n(k),S=n(45),R=n.n(S),E=n(46),D=n.n(E),V=n(47),A=n.n(V),T=n(48),Y=n.n(T);function L(){var e=Object(C.f)();return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{id:"headerMainContainer",children:[Object(y.jsxs)("div",{id:"header__left",children:[Object(y.jsx)(I.a,{}),Object(y.jsx)("img",{id:"header__logo",onClick:function(){return console.log("onYoutubeLogoClick"),void e.push({pathname:"/"})},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"})]}),Object(y.jsx)("div",{id:"header__center",children:Object(y.jsx)(_,{})}),Object(y.jsxs)("div",{id:"header__rightContainer",children:[Object(y.jsx)("div",{id:"header__rightContainerIcon",children:Object(y.jsx)(R.a,{})}),Object(y.jsx)("div",{id:"header__rightContainerIcon",children:Object(y.jsx)(D.a,{})}),Object(y.jsx)("div",{id:"header__rightContainerIcon",children:Object(y.jsx)(A.a,{})}),Object(y.jsx)("div",{id:"header__rightContainerIcon",children:Object(y.jsx)(Y.a,{})})]})]})})}n(94);var H=n(49),M=n.n(H),P=n(51),N=n.n(P),z=n(52),B=n.n(z),F=n(53),U=n.n(F),X=n(54),G=n.n(X),K=n(50),W=n.n(K);function J(){var e=c.a.useState(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=c.a.useState(!1),s=Object(l.a)(r,2),o=s[0],a=s[1],d=c.a.useState(!1),j=Object(l.a)(d,2),h=j[0],u=j[1],b=c.a.useState(!1),O=Object(l.a)(b,2),x=O[0],v=O[1],p=c.a.useState(!1),f=Object(l.a)(p,2),g=f[0],m=f[1],_=c.a.useState(!1),w=Object(l.a)(_,2),k=w[0],I=w[1],S=Object(C.f)(),R=function(){u(!1),a(!1),i(!0),m(!1),v(!1),I(!1),console.log(n,a),S.push({pathname:"/"})};return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{id:"mainContainer",children:[Object(y.jsxs)("div",{id:1==n?"selectedHomeContainer":"homeContainer",onClick:R,children:[Object(y.jsx)("div",{id:1==n?"selectedHomeIcon":"homeIcon",children:Object(y.jsx)(M.a,{})}),Object(y.jsx)("div",{children:"Home"})]}),Object(y.jsxs)("div",{id:1==o?"selectedTrendingContainer":"trendingContainer",onClick:function(e){console.log("onHomeContainerClick",R),u(!1),a(!0),i(!1),m(!1),v(!1),I(!1)},children:[Object(y.jsx)("div",{id:1==o?"selectedTrendingIcon":"trendingIcon",children:Object(y.jsx)(W.a,{})}),Object(y.jsx)("div",{children:"Explore"})]}),Object(y.jsxs)("div",{id:1==h?"selectedSubscriptionContainer":"subscriptionContainer",onClick:function(){console.log("onHomeContainerClick",R),u(!0),a(!1),i(!1),m(!1),v(!1),I(!1)},children:[Object(y.jsx)("div",{id:1==h?"selectedSubscriptionIcon":"subscriptionIcon",children:Object(y.jsx)(N.a,{})}),Object(y.jsx)("div",{children:"Subscriptions"})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("div",{id:1==x?"selectedlibraryContainer":"libraryContainer",onClick:function(){console.log("onHomeContainerClick",R),u(!1),a(!1),i(!1),m(!1),v(!0),I(!1)},children:[Object(y.jsx)("div",{id:1==x?"selectedLibraryIcon":"libraryIcon",children:Object(y.jsx)(B.a,{})}),Object(y.jsx)("div",{children:"Library"})]}),Object(y.jsxs)("div",{id:1==g?"selectedHistoryContainer":"historyContainer",onClick:function(){console.log("onHomeContainerClick",R),u(!1),a(!1),i(!1),m(!0),v(!1),I(!1)},children:[Object(y.jsx)("div",{id:1==g?"selectedHistoryIcon":"historyIcon",children:Object(y.jsx)(U.a,{})}),Object(y.jsx)("div",{children:"History"})]}),Object(y.jsxs)("div",{id:1==k?"selectedYourVideosContainer":"yourVideosContainer",onClick:function(){u(!1),a(!1),i(!1),m(!1),v(!1),I(!0)},children:[Object(y.jsx)("div",{id:1==k?"selectedYourVideosIcon":"yourVideosIcon",children:Object(y.jsx)(G.a,{})}),Object(y.jsx)("div",{children:"Your videos"})]})]})})}n(95);var Q=n(28);function q(){return Object(y.jsxs)("div",{style:{backgroundColor:"#f9f9f9",height:"100px",padding:"10px"},children:[Object(y.jsx)("h1",{children:"A YouTube clone created from scratch by Nikhil Elayath "}),Object(y.jsx)("p",{children:"Working Features"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Search--Integrated with Youtube's endpoint APIS it provides the almost the same search results that th OG Youtube will provide for the same search keyword. Go try if you want ;) "}),Object(y.jsx)("li",{children:"Play Videos--You can also play the search videos and all the data like views, likes etc are all dynamic) "})]}),Object(y.jsx)("p",{children:" May the code be with you https://github.com/nikhil-elayath/youtube-clone"})]})}n(107);var Z=x.a.url,$=x.a.youtubeAPIKey;console.log("youtubeAPIKey",$),console.log("url",Z);n(108);var ee=n(57),te=n.n(ee),ne=n(58),ie=n.n(ne);function ce(e){return console.log("props",e),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{id:"mainContainerO",children:[Object(y.jsx)("div",{id:"viewsAndDateMainContaiener",children:Object(y.jsxs)("div",{children:[e.viewCount," views ."]})}),Object(y.jsxs)("div",{id:"likesAndDislikesMainContaiener",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(te.a,{})," ",e.likes]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(ie.a,{})," ",e.dislikes]})]})]})})}var re=function(e){var t=Object(f.b)(),n=Object(f.c)((function(e){return e.VideoReducer}));console.log("nanan",n),Object(i.useEffect)((function(){var e={videoId:c.pathname.split("/")[2]};t(function(e){return function(){var t=Object(d.a)(a.a.mark((function t(n){var i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.videoId,console.log("from VIDEO_DETAILS_BY_ID action",i),t.abrupt("return",h.a.get("https://www.googleapis.com/youtube/v3/videos?id="+i+"&key=AIzaSyDwOxM66btmflpeUkt6Q6Ahg3beRz4CBY4&part=snippet,contentDetails,statistics,status").then((function(e){return console.log("response from actons",e),n({type:b,payload:e.data})})).catch((function(e){console.log("err from search action",e)})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]);var c=Object(C.g)();return c.pathname.split("/")[2],console.log("location",c),Object(y.jsx)(y.Fragment,{children:n&&0!=n.specificVideoResults.length?n.specificVideoResults&&n.specificVideoResults.items.map((function(e,t){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{id:"videoSpecificContainer",children:[Object(y.jsx)(Q.a,{videoId:c.pathname.split("/")[2],opts:{width:"70%"}}),Object(y.jsx)("div",{id:"videoTitle",children:Object(y.jsx)("p",{})}),Object(y.jsx)(ce,{likes:e.statistics.likeCount,dislikes:e.statistics.dislikeCount,viewCount:e.statistics.viewCount})]}),Object(y.jsx)("div",{style:{width:"70%"},children:Object(y.jsx)("hr",{})})]})})):null})};n(109);function se(e){var t=Object(C.g)();console.log("location",t);var n=Object(f.c)((function(e){return e.searchReducer})),i=Object(C.f)();Object(f.b)();console.log("from card",n.searchResults);return Object(y.jsx)(y.Fragment,{children:n&&0!=n.searchResults.length?n.searchResults&&n.searchResults.items.map((function(e,t){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{id:"searchResultCardContainer",onClick:function(){var t,n,c,r,s;t=e.id.videoId,n=e.snippet.title,console.log("navigateToSpecificVideo",c),i.push({pathname:"/play-video/"+t},{videoTitle:n,likes:c,dislikes:r,viewCount:s})},children:[Object(y.jsx)("div",{id:"imageContainer",children:Object(y.jsx)("img",{id:"image",src:e.snippet.thumbnails.high.url})}),Object(y.jsxs)("div",{id:"detailsContainer",children:[e.snippet.channelTitle,Object(y.jsx)("div",{children:Object(y.jsxs)("p",{children:["Views . ",e.snippet.publishedAt," "]})}),Object(y.jsxs)("div",{id:"channelLogoAndName",children:[Object(y.jsx)("div",{children:" Logo"}),Object(y.jsx)("div",{children:" Name"})]}),Object(y.jsx)("div",{id:"description",children:"description"})]})]})})})):Object(y.jsx)("div",{children:"no result"})})}function oe(){return Object(y.jsx)("div",{id:"searchResultsPage",children:Object(y.jsx)(se,{})})}n(110);var ae=n(18),de=n(59),le=n(23),je={searchResults:[]},he={specificVideoResults:[]},ue=Object(ae.c)({searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return console.log("from reducer",t.payload),Object(le.a)(Object(le.a)({},e),{},{searchResults:t.payload});default:return e}},VideoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return console.log("from VIDEO_DETAILS_BY_ID REDUCER",t.payload),Object(le.a)(Object(le.a)({},e),{},{specificVideoResults:t.payload});default:return e}}}),be=[de.a],Oe=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):ae.d)(ae.a.apply(void 0,be)),xe=Object(ae.e)(ue,{},Oe);function ve(e){return console.log("from app",e),Object(y.jsx)(f.a,{store:xe,children:Object(y.jsx)(w.a,{children:Object(y.jsxs)(C.c,{children:[Object(y.jsx)(C.a,{exact:!0,path:"/",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{id:"header",children:Object(y.jsx)(L,{})}),Object(y.jsxs)("div",{id:"appMainContainer",children:[Object(y.jsx)("div",{children:Object(y.jsx)(J,{})}),Object(y.jsx)("div",{children:Object(y.jsx)(q,{})})]})]})}),Object(y.jsx)(C.a,{exact:!0,path:"/search",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{id:"header",children:Object(y.jsx)(L,{})}),Object(y.jsxs)("div",{id:"appMainContainer",children:[Object(y.jsx)("div",{children:Object(y.jsx)(J,{})}),Object(y.jsx)("div",{children:Object(y.jsx)(oe,{})})]})]})}),Object(y.jsx)(C.a,{exact:!0,path:"/play-video/:id",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{id:"header",children:Object(y.jsx)(L,{})}),Object(y.jsxs)("div",{id:"appMainContainer",children:[Object(y.jsx)("div",{children:Object(y.jsx)(J,{})}),Object(y.jsx)("div",{children:Object(y.jsx)(re,{})})]})]})})]})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=function(e){return Object(y.jsxs)(f.a,{store:xe,children:[" ",e.children]})},fe=n(131),ge=n(60);fe.a.locale(ge),s.a.render(Object(y.jsx)(pe,{children:Object(y.jsx)(ve,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t){e.exports={url:"http://localhost:5010/api/",youtubeApiKey:"AIzaSyCjb5t9GnRvzzStRzrdrTA_gZc_YVYoqPg"}},66:function(e,t,n){},92:function(e,t){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.517b9fb4.chunk.js.map