(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),r=n.n(c),i=n(10),s=n.n(i),j=n(32),o=n.n(j),l=n(36),d=n(25),h=n(102),b=n(114),m=n(107),u=n(110),O=n(109),x=n(108),p=n(98),g=n(106),f=n(103),v=n(55),y=n(112),N=n(104),C=n(113),S=n(111),k=n(105),B=n(115),w=Object(y.a)((function(e){return{heroContent:{padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},progress:{marginLeft:e.spacing(2),display:"flex",justifyContent:"center"}}})),W=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),j=Object(d.a)(s,2),y=j[0],W=j[1],z=Object(c.useState)(""),G=Object(d.a)(z,2),M=G[0],T=G[1],L=Object(c.useState)(!1),A=Object(d.a)(L,2),E=A[0],J=A[1],P=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.length>0&&fetch("/".concat(M)).then((function(e){return e.json()})).then((function(e){e&&(i(e.amazon),W(e.ebay))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=w();return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(p.a,{}),Object(a.jsx)(h.a,{position:"relative",children:Object(a.jsx)(f.a,{children:Object(a.jsx)(v.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Give me ebay and Amazone"})})}),Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:q.heroContent,children:Object(a.jsxs)(N.a,{maxWidth:"sm",children:[Object(a.jsx)(C.a,{fullWidth:!0,value:M,id:"search",label:"Search for items...",variant:"outlined",placeholder:"Search",onChange:function(e){return T(e.target.value)},required:!0}),Object(a.jsx)(b.a,{fullWidth:!0,type:"submit",variant:"contained",size:"large",color:"primary",style:{marginTop:10},onClick:function(){i([]),W([]),T(""),P(),J(M.length>0)},children:"Search"})]})}),n.length||y.length||!E?Object(a.jsxs)(N.a,{className:q.cardGrid,maxWidth:"md",children:[Object(a.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Amazone"}),Object(a.jsx)(g.a,{container:!0,spacing:4,children:n.length>1?n.map((function(e){return Object(a.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsxs)(m.a,{className:q.card,children:[Object(a.jsx)(x.a,{className:q.cardMedia,image:e.img,title:e.name}),Object(a.jsxs)(O.a,{className:q.cardContent,children:[Object(a.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.price}),Object(a.jsx)(v.a,{children:e.name})]}),Object(a.jsx)(u.a,{children:Object(a.jsx)(S.a,{href:e.url,target:"_blank",children:"Link"})})]})},Object(B.a)())})):null}),Object(a.jsx)("hr",{}),Object(a.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Ebay"}),Object(a.jsx)(g.a,{container:!0,spacing:4,children:y.length>1?y.map((function(e){return Object(a.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsxs)(m.a,{className:q.card,children:[Object(a.jsx)(x.a,{className:q.cardMedia,image:e.img,title:e.name}),Object(a.jsxs)(O.a,{className:q.cardContent,children:[Object(a.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.price}),Object(a.jsx)(v.a,{children:e.name})]}),Object(a.jsx)(u.a,{children:Object(a.jsx)(S.a,{href:e.url,children:"Link"})})]})},Object(B.a)())})):null})]}):Object(a.jsx)("div",{className:q.progress,children:Object(a.jsx)(k.a,{})})]})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.14e76d67.chunk.js.map