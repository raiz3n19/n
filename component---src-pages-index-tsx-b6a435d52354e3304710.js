(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("wEEd"),l=a("9eSz"),r=a.n(l),c=a("vOnD"),d=a("gf6R"),m=a("rB5o"),s=a("eZYV"),b=a("l8SF"),p=c.b.div.withConfig({displayName:"Intro__Root",componentId:"cfqcda-0"})(['display:flex;flex-direction:column;align-items:center;&:after{margin:40px 0;content:"";width:100%;border-bottom:1px solid #ccc;display:block;}@media ',"{align-items:inherit;}"],b.b.tablet),g=c.b.section.withConfig({displayName:"Intro__HeadingContainer",componentId:"cfqcda-1"})(["display:grid;grid-template-rows:150px auto;@media ","{grid-template-columns:repeat(2,50%);grid-template-rows:none;margin-top:",";}"],b.b.tablet,Object(m.a)(1.25)),f=c.b.div.withConfig({displayName:"Intro__PitchContainer",componentId:"cfqcda-2"})(["display:flex;flex-direction:column;align-items:center;@media ","{display:block;grid-row:1;}"],b.b.tablet),u=c.b.h1.withConfig({displayName:"Intro__Greeting",componentId:"cfqcda-3"})(["margin:"," 0;margin-bottom:0;"," @media ","{","}"],Object(m.a)(1/4),Object(m.b)(.25),b.b.tablet,Object(m.b)(1)),h=c.b.h4.withConfig({displayName:"Intro__SubTitle",componentId:"cfqcda-4"})(["",";margin-top:0;@media ","{margin-top:",";",';&:after{margin:20px 0;content:"";width:50px;border-bottom:1px solid #ccc;display:block;}}'],Object(m.b)(-.15),b.b.tablet,Object(m.a)(1/4),Object(m.b)(.25)),w=c.b.p.withConfig({displayName:"Intro__Description",componentId:"cfqcda-5"})(["",";text-align:center;@media ","{",";text-align:inherit;}"],Object(m.b)(-.3),b.b.tablet,Object(m.b)(0)),j=Object(c.b)(r.a).withConfig({displayName:"Intro__StyledImage",componentId:"cfqcda-6"})(["margin-bottom:0;justify-self:center;min-width:150px;min-height:150px;border-radius:50%;@media ","{grid-row:auto;justify-self:flex-end;}"],b.b.tablet),y=function(){var e=Object(s.c)().author,t=Object(s.a)({width:150,height:150});return i.a.createElement(p,null,i.a.createElement(g,null,i.a.createElement(j,{fixed:t.childImageSharp.fixed,alt:e.name}),i.a.createElement(f,null,i.a.createElement(u,null,"Hi, I'm ",e.firstname," 👋"),i.a.createElement(h,null,e.title),i.a.createElement(w,null,e.descriptions.intro))),i.a.createElement(d.a,null))},_=a("Wbzz"),C=c.b.section.withConfig({displayName:"ShowcasedPostCard__Root",componentId:"qt3ejw-0"})(["margin-bottom:",";transition:transform 0.5s ease;&:hover{transform:scale(1.03);}a{box-shadow:none;}@media ","{margin-bottom:",";}"],Object(m.a)(.5),b.b.tablet,Object(m.a)(1)),E=c.b.h4.withConfig({displayName:"ShowcasedPostCard__Title",componentId:"qt3ejw-1"})(["margin:"," 0 ",";color:",";@media ","{height:",";margin:"," 0 ",";}"],Object(m.a)(.4),Object(m.a)(.4),(function(e){return e.theme.colors.accent}),b.b.tablet,Object(m.a)(2),Object(m.a)(1.25),Object(m.a)(.1)),I=c.b.span.withConfig({displayName:"ShowcasedPostCard__ContentInfo",componentId:"qt3ejw-2"})(["font-style:italic;font-size:",";display:block;"],Object(m.a)(.55)),O=c.b.p.withConfig({displayName:"ShowcasedPostCard__Content",componentId:"qt3ejw-3"})(["margin:"," 0;@media ","{max-height:",";}"],Object(m.a)(2/6),b.b.tablet,Object(m.a)(5)),x=Object(c.b)(r.a).withConfig({displayName:"ShowcasedPostCard__Cover",componentId:"qt3ejw-4"})(["width:100% !important;height:150px !important;@media ","{height:100px !important;display:block !important;margin-bottom:2px;}"],b.b.tablet),v=function(e){var t=e.title,a=e.slug,n=e.cover,o=e.description,l=e.date,r=e.timeToRead,c=e.location;return i.a.createElement(C,null,i.a.createElement(_.Link,{"aria-label":"Continue reading: "+t,to:"/blog"+a,state:{prevPath:c.pathname}},i.a.createElement(E,null,t),i.a.createElement(x,{fixed:n})),i.a.createElement(I,null,l," · ",r," min read"),i.a.createElement(O,{dangerouslySetInnerHTML:{__html:o.slice(0,160)}}))},N=c.b.section.withConfig({displayName:"ShowcasedPostsContainer__Root",componentId:"sc-13guh1c-0"})(["display:flex;flex-direction:column;margin-bottom:",";@media ","{}"],Object(m.a)(1),b.b.tablet),S=c.b.h2.withConfig({displayName:"ShowcasedPostsContainer__Title",componentId:"sc-13guh1c-1"})(["margin:0;margin:"," 0;@media ","{margin:0;}"],Object(m.a)(.5),b.b.tablet),k=c.b.div.withConfig({displayName:"ShowcasedPostsContainer__PostsContainer",componentId:"sc-13guh1c-2"})(["display:grid;grid-template-columns:100%;grid-template-rows:none;justify-content:center;@media ","{grid-template-rows:minmax(100px,100%);grid-template-columns:repeat(3,31%);grid-gap:3.5%;}"],b.b.tablet),q=function(e){var t=e.location,a=e.title,n=e.posts;return i.a.createElement(N,null,i.a.createElement(S,{"aria-label":a+" posts section"},a),i.a.createElement(k,null,n.map((function(e){return i.a.createElement(v,{key:e.node.fields.slug,title:e.node.frontmatter.title,description:e.node.frontmatter.description,date:e.node.frontmatter.date,slug:e.node.fields.slug,cover:e.node.frontmatter.cover.childImageSharp.fixed,timeToRead:e.node.timeToRead,location:t})}))))},P=function(e){var t=e.location,a=Object(_.useStaticQuery)("254806626").allMarkdownRemark,n=a.edges.slice(0,3),o=a.edges.filter((function(e){return!n.find((function(t){return t.node.fields.slug===e.node.fields.slug}))})).filter((function(e){return e.node.frontmatter.featured})).slice(0,3);return i.a.createElement(i.a.Fragment,null,i.a.createElement(q,{location:t,posts:n,title:"Latest ⌛️"}),o.length>0&&i.a.createElement(q,{location:t,posts:o,title:"Featured ✨"}))},R=function(e){var t=e.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null),i.a.createElement(P,{location:t}))},T=a("Ng2+"),z=a("hizP");t.default=function(e){var t=e.location,a=Object(s.c)().title,n=Object(s.b)({config:o.b.gentle,translateX:-100,location:t});return i.a.createElement(T.a,{location:t,title:a},i.a.createElement(z.a,{title:"Home"}),n.map((function(e){var a=e.props,n=e.key;return i.a.createElement(o.a.div,{key:n,style:a},i.a.createElement(R,{location:t}))})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b6a435d52354e3304710.js.map