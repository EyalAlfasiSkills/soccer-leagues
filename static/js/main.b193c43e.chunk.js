(this["webpackJsonpsoccer-leagues"]=this["webpackJsonpsoccer-leagues"]||[]).push([[0],{21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(16),s=n.n(a),u=(n(21),n(3)),i=n.n(u),o=n(4),l=n(5),p=n(0),d=function(e){var t=e.leagues,n=e.onPickLeague,r=e.currentCountryId;return Object(p.jsx)("div",{className:"tabs-wrapper flex align-center",children:Object(p.jsx)("ul",{className:"flex",children:t&&t.map((function(e){return Object(p.jsx)("li",{onClick:function(){return n(e.id)},className:"tab ".concat(e.id===r?"active":""),children:e.name},e.id)}))})})},f=function(e){var t=e.team;return console.log(t),Object(p.jsxs)("div",{className:"team-preview-wrapper",children:[Object(p.jsx)("div",{className:"crest-container ",children:Object(p.jsx)("img",{src:t.crestUrl?t.crestUrl:"https://image.flaticon.com/icons/png/512/189/189665.png",alt:"team crest image"})}),Object(p.jsx)("div",{className:"content",children:Object(p.jsx)("h3",{className:"team-name",children:t.name})})]})},m=function(e){var t=e.teams;return Object(p.jsx)("div",{className:"teams-list-wrapper",children:t&&t.map((function(e){return Object(p.jsx)(f,{team:e},e.id)}))})},j=n(7),b=n.n(j),h="http://api.football-data.org/v2/competitions",v="7c2e877f828d407891fd9ed1a0b1cd01",O={queryLeagues:function(){return g.apply(this,arguments)},queryTeams:function(e){return x.apply(this,arguments)}};function g(){return(g=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[2e3,2001,2002,2003,2013].map((function(e){return b()({method:"GET",url:"".concat(h,"/").concat(e),headers:{"X-Auth-Token":v}})})),console.log(t),e.next=4,Promise.all(t);case 4:return n=e.sent,console.log(n),e.abrupt("return",n.map((function(e){var t=e.data;return{id:t.id,name:t.name}})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({method:"GET",url:"".concat(h,"/").concat(t,"/teams"),headers:{"X-Auth-Token":v}});case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data.teams.map((function(e){return{id:e.id,name:e.name,crestUrl:e.crestUrl}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(l.a)(a,2),u=s[0],f=s[1],j=Object(r.useState)(null),b=Object(l.a)(j,2),h=b[0],v=b[1],g=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.queryLeagues();case 2:t=e.sent,console.log(t),c(t),f(t[0].id);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){g()}),[]);var x=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.queryTeams(u);case 2:t=e.sent,console.log(t),v(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u&&x(u)}),[u]),Object(p.jsxs)("div",{className:"home-page-wrapper",children:[Object(p.jsx)(d,{leagues:n,onPickLeague:function(e){f(e)},currentCountryId:u}),Object(p.jsx)(m,{teams:h})]})};var y=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(w,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.b193c43e.chunk.js.map