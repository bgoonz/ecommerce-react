(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(0),a=n.n(s),c=n(16),u=n.n(c),i=n(10),o=n(4),j=n(6),d=n(3),b=n(7),l=n.n(b),p=n(12),O=n(25),h=n.n(O);function f(e){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(l.a.mark((function e(t){var n,r,s,a,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=c.length>1&&void 0!==c[1]?c[1]:{}).method=n.method||"GET",n.headers=n.headers||{},"GET"!==n.method.toUpperCase()&&("multipart/form-data"===n.headers["Content-Type"]?delete n.headers["Content-Type"]:n.headers["Content-Type"]=n.headers["Content-Type"]||"application/json",n.headers["XSRF-Token"]=h.a.get("XSRF-TOKEN")),e.next=6,window.fetch(t,n);case 6:if(r=e.sent,!(s=r.headers.get("content-type"))||!s.includes("application/json")){e.next=13;break}return e.next=11,r.json();case 11:a=e.sent,r.data=a;case 13:if(!(r.status>=400)){e.next=15;break}throw r;case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v="session/setUser",m="session/removeUser",g=function(e){return{type:v,payload:e}},w={user:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var n=Object.assign({},{user:t.payload});return n;case m:var r=Object.assign({},{user:null});return r;default:return e}};n(37);var S=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.session.user})),n=Object(s.useState)(""),a=Object(j.a)(n,2),c=a[0],u=a[1],i=Object(s.useState)(""),b=Object(j.a)(i,2),O=b[0],h=b[1],x=Object(s.useState)([]),v=Object(j.a)(x,2),m=v[0],w=v[1];return t?Object(r.jsx)(d.a,{to:"/"}):Object(r.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),w([]),e((n={credential:c,password:O},function(){var e=Object(p.a)(l.a.mark((function e(t){var r,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.credential,s=n.password,e.next=3,f("/api/session",{method:"POST",body:JSON.stringify({credential:r,password:s})});case 3:return a=e.sent,t(g(a.data.user)),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch((function(e){e.data&&e.data.errors&&w(e.data.errors)}));var n},children:[Object(r.jsx)("ul",{children:m.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))}),Object(r.jsxs)("label",{children:["Username or Email",Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(r.jsxs)("label",{children:["Password",Object(r.jsx)("input",{type:"password",value:O,onChange:function(e){return h(e.target.value)},required:!0})]}),Object(r.jsx)("button",{type:"submit",children:"Log In"})]})},C=(n(39),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.session.user})),n=Object(s.useState)(""),a=Object(j.a)(n,2),c=a[0],u=a[1],i=Object(s.useState)(""),b=Object(j.a)(i,2),O=b[0],h=b[1],x=Object(s.useState)(""),v=Object(j.a)(x,2),m=v[0],w=v[1],y=Object(s.useState)(""),S=Object(j.a)(y,2),C=S[0],k=S[1],E=Object(s.useState)([]),N=Object(j.a)(E,2),T=N[0],L=N[1];if(t)return Object(r.jsx)(d.a,{to:"/"});return Object(r.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),m===C?(L([]),e((n={email:O,username:c,password:m},function(){var e=Object(p.a)(l.a.mark((function e(t){var r,s,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.username,s=n.email,a=n.password,e.next=3,f("/api/users",{method:"POST",body:JSON.stringify({username:r,email:s,password:a})});case 3:return c=e.sent,t(g(c.data.user)),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch((function(e){e.data&&e.data.errors&&L(e.data.errors)}))):L(["Confirm Password field must be the same as the Password field"]);var n},children:[Object(r.jsx)("ul",{children:T.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))}),Object(r.jsxs)("label",{children:["Email",Object(r.jsx)("input",{type:"text",value:O,onChange:function(e){return h(e.target.value)},required:!0})]}),Object(r.jsxs)("label",{children:["Username",Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(r.jsxs)("label",{children:["Password",Object(r.jsx)("input",{type:"password",value:m,onChange:function(e){return w(e.target.value)},required:!0})]}),Object(r.jsxs)("label",{children:["Confirm Password",Object(r.jsx)("input",{type:"password",value:C,onChange:function(e){return k(e.target.value)},required:!0})]}),Object(r.jsx)("button",{type:"submit",children:"Sign Up"})]})});var k=function(e){var t=e.user,n=Object(o.b)(),a=Object(s.useState)(!1),c=Object(j.a)(a,2),u=c[0],i=c[1];return Object(s.useEffect)((function(){if(u){var e=function(){i(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[u]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){u||i(!0)},children:Object(r.jsx)("i",{className:"fas fa-user-circle"})}),u&&Object(r.jsxs)("ul",{className:"profile-dropdown",children:[Object(r.jsx)("li",{children:t.username}),Object(r.jsx)("li",{children:t.email}),Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),n(function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/api/session",{method:"DELETE"});case 2:return n=e.sent,t({type:m}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log Out"})})]})]})};var E,N=function(e){var t,n=e.isLoaded,s=Object(o.c)((function(e){return e.session.user}));return t=s?Object(r.jsx)(k,{user:s}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.b,{to:"/login",children:"Log in"}),Object(r.jsx)("p",{children:"I"}),Object(r.jsx)(i.b,{to:"/signup",children:"Sign up"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("nav",{className:"fixed bg-grey-600 shadow-md h-32 z-50 w-full px-5 py-2 flex justify-between items-center cursor-pointer",children:[Object(r.jsx)(i.b,{exact:!0,to:"/",className:"hover:underline",children:"Home"}),Object(r.jsx)(i.b,{to:"#",className:"hover:underline",children:"Clothing"}),Object(r.jsx)(i.b,{to:"#",className:"hover:underline",children:"Accessories"}),Object(r.jsx)(i.b,{to:"#",className:"hover:underline",children:"Gear"}),Object(r.jsx)("div",{className:"flex items-end space-x-3 p-1 hover:underline",children:n&&t})]})})},T=function(){var e=Object(o.b)(),t=Object(s.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){e(function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/api/session");case 2:return n=e.sent,t(g(n.data.user)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){return c(!0)}))}),[e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{isLoaded:a}),a&&Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/login",children:Object(r.jsx)(S,{})}),Object(r.jsx)(d.b,{path:"/signup",children:Object(r.jsx)(C,{})})]})]})},L=(n(40),n(14)),P=n(26),q=Object(L.c)({session:y});E=Object(L.a)(P.a);var U=function(e){return Object(L.d)(q,e,E)}();function F(){return Object(r.jsx)(o.a,{store:U,children:Object(r.jsx)(i.a,{children:Object(r.jsx)(T,{})})})}u.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.dcf57ddc.chunk.js.map