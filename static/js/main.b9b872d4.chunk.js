(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},44:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(27),r=c.n(i),j=(c(37),c(6)),o=c(7),l=c(9),b=c(8),d=c(10),u=c(2),O=(c(38),function(){return Object(n.jsxs)("div",{className:"navi",children:[Object(n.jsx)(d.b,{className:"lnk",to:"/",children:"HOME"}),Object(n.jsx)(d.b,{className:"lnk",to:"/about",children:"ABOUT"})]})});c(44);var h=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Download YTS YLFY movies: HD smallest size"}),Object(n.jsx)("p",{children:"Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents."}),Object(n.jsx)("strong",{children:Object(n.jsx)("a",{href:"#",children:"IMPORTANT - YTS.MX is the only new official domain for YIFY Movies"})})]})},m=c(17),x=c.n(m),p=c(29),v=c(30),f=c.n(v);c(63);var g=function(e){var t=e.year,c=e.title,s=e.summary,a=e.poster,i=e.genres;return Object(n.jsx)(d.b,{to:{pathname:"/detail",state:{poster:a,year:t,title:c,summary:s,genres:i}},children:Object(n.jsxs)("div",{className:"movies",children:[Object(n.jsx)("img",{src:a,alt:c}),Object(n.jsxs)("div",{className:"movies_data",children:[Object(n.jsx)("h3",{className:"movies_title",children:c.slice(0,10)}),Object(n.jsx)("h5",{className:"movies_year",children:t}),Object(n.jsx)("ul",{children:i.map((function(e,t){return Object(n.jsxs)("li",{children:[" / ",e]},t)}))}),Object(n.jsxs)("p",{className:"movies_summary",children:[s.slice(0,50),"..."]})]})]})})},y=(c(64),c(31)),N=function(){return Object(n.jsx)("div",{className:"loadWrap",children:Object(n.jsx)(y.a,{size:"50",color:"#fff"})})},w=(c(65),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={kim:[],isLoading:!0},e.getMovies=Object(p.a)(x.a.mark((function t(){var c,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts.mx/api/v2/list_movies.json");case 2:c=t.sent,n=c.data.data.movies,e.setState({kim:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),500),this.getMovies()}},{key:"render",value:function(){var e=this.state.isLoading,t=this.state.kim;return Object(n.jsx)(n.Fragment,{children:e?Object(n.jsx)(N,{}):Object(n.jsx)("section",{className:"container cf",children:t.map((function(e){return Object(n.jsx)(g,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),c}(s.Component));c(66);var T=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsxs)("p",{className:"p1",children:["YTS \xa9 2011 - 2020 - ",Object(n.jsx)("a",{children:"Blog"})," - ",Object(n.jsx)("a",{children:"DMCA"})," - ",Object(n.jsx)("a",{children:"API"})," - ",Object(n.jsx)("a",{children:"RSS"})," - ",Object(n.jsx)("a",{children:"Contact"})," - ",Object(n.jsx)("a",{children:"Browse Movies"})," - ",Object(n.jsx)("a",{children:"Requests"})," - ",Object(n.jsx)("a",{children:"Login"})]}),Object(n.jsxs)("p",{className:"p2",children:[Object(n.jsx)("a",{children:"EZTV"})," - ",Object(n.jsx)("a",{children:"YTS VPN"})]}),Object(n.jsxs)("p",{className:"p3",children:["By using this site you agree to and accept our ",Object(n.jsx)("a",{children:"User Agreement"}),", which can be read ",Object(n.jsx)("a",{children:"here"}),"."]})]})},k=(c(67),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"wrap",children:[Object(n.jsx)(h,{}),Object(n.jsx)(w,{className:"wrap"}),Object(n.jsx)(T,{})]})}}]),c}(s.Component)),M=(c(68),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"wrap",children:[Object(n.jsx)(h,{}),Object(n.jsx)("div",{className:"about",children:Object(n.jsx)("p",{children:"This is About page."})}),Object(n.jsx)(T,{})]})}}]),c}(s.Component)),S=(c(69),function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.location;return console.log(e),Object(n.jsxs)("div",{className:"wrap",children:[Object(n.jsx)(h,{}),Object(n.jsx)("div",{className:"Detail cf",children:Object(n.jsxs)("div",{className:"Detail_align",children:[Object(n.jsx)("div",{className:"detail_img",children:Object(n.jsx)("img",{src:e.state.poster,alt:""})}),Object(n.jsxs)("div",{className:"detail_about",children:[Object(n.jsx)("p",{children:e.state.title}),Object(n.jsx)("p",{children:e.state.year}),Object(n.jsx)("p",{children:e.state.genres}),Object(n.jsx)("p",{children:e.state.summary})]})]})}),Object(n.jsx)(T,{})]})}}]),c}(s.Component)),Y=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(u.a,{path:"/",exact:!0,component:k}),Object(n.jsx)(u.a,{path:"/about",component:M}),Object(n.jsx)(u.a,{path:"/detail",component:S})]})})}}]),c}(s.Component),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root")),C()}},[[70,1,2]]]);
//# sourceMappingURL=main.b9b872d4.chunk.js.map