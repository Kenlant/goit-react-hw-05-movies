"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[7],{713:function(e,t,n){n.d(t,{Hg:function(){return a},TP:function(){return o},tx:function(){return l},yC:function(){return s},zv:function(){return c}});var i=n(388),r=i.Z.create({baseURL:"https://api.themoviedb.org/3",timeout:1e3,params:{api_key:"1bb8f29c02a9512893fb765ccd284a77"}}),a=function(){return r.get("/trending/movie/day").then((function(e){return e.data.results})).then((function(e){return e.map((function(e){return{id:e.id,original_title:e.original_title}}))}))},s=function(e){return r.get("/search/movie?query=".concat(e)).then((function(e){return e.data.results})).then((function(e){return e.map((function(e){return{id:e.id,original_title:e.original_title}}))}))},o=function(e){return r.get("/movie/".concat(e)).then((function(e){return e.data})).then((function(e){return{vote_average:e.vote_average,genres:e.genres,title:e.title,overview:e.overview,poster_path:"https://image.tmdb.org/t/p/w342"+e.poster_path}}))},c=function(e){return r.get("/movie/".concat(e,"/credits")).then((function(e){return e.data.cast})).then((function(e){return e.map((function(e){return{id:e.id,name:e.name,character:e.character,profile_path:"https://image.tmdb.org/t/p/w185"+e.profile_path}}))}))},l=function(e){return r.get("/movie/".concat(e,"/reviews")).then((function(e){return e.data.results})).then((function(e){return e.map((function(e){return{id:e.id,author:e.author,content:e.content}}))}))}},7:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i,r=n(791),a=n(87),s=n(739),o=n(885),c=n(168),l=n(444).ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding-bottom: 20px;\n"]))),u=n(713),d=n(184);function h(e){var t=e.id,n=(0,r.useState)({}),i=(0,o.Z)(n,2),a=i[0],s=i[1],c=a.vote_average,h=a.genres,m=a.title,v=a.overview,f=a.poster_path,_=Math.round(10*c),p=null===h||void 0===h?void 0:h.map((function(e){return e.name})).join(" ");return(0,r.useEffect)((function(){(0,u.TP)(t).then(s)}),[t]),(0,d.jsxs)(l,{className:"movie-details",children:[(0,d.jsx)("img",{className:"movie-details__img",src:f,alt:m}),(0,d.jsxs)("div",{className:"movie-details__info",children:[(0,d.jsx)("h2",{className:"movie-details__title",children:m}),(0,d.jsxs)("span",{className:"movie-details__score",children:["User Score: ",_,"%"]}),(0,d.jsx)("h3",{className:"movie-details__overview-title",children:"Overview"}),(0,d.jsx)("p",{className:"movie-details__overview",children:v}),(0,d.jsx)("h4",{className:"movie-details__genres-title",children:"Genres"}),(0,d.jsx)("p",{className:"movie-details__genres",children:p})]})]})}var m=(0,r.lazy)((function(){return n.e(661).then(n.bind(n,661))})),v=(0,r.lazy)((function(){return n.e(43).then(n.bind(n,43))}));function f(){var e=(0,s.UO)().id;return(0,d.jsxs)("section",{className:"movie",children:[(0,d.jsx)("h1",{hidden:!0,children:"Movie"}),(0,d.jsx)(h,{id:e}),(0,d.jsxs)("div",{className:"movie__additional-info",children:[(0,d.jsx)("h2",{children:"Additional Information"}),(0,d.jsxs)("ul",{className:"movie__additional-info-list",children:[(0,d.jsx)("li",{className:"movie__additional-info-list-item",children:(0,d.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{className:"movie__additional-info-list-item",children:(0,d.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsxs)(s.Z5,{children:[(0,d.jsx)(s.AW,{path:"cast",element:(0,d.jsx)(m,{id:e})}),(0,d.jsx)(s.AW,{path:"reviews",element:(0,d.jsx)(v,{id:e})})]})]})}}}]);
//# sourceMappingURL=7.88463f6d.chunk.js.map