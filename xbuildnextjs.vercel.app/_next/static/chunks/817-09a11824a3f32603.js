"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[817],{2817:function(e,s,a){a.d(s,{default:function(){return h}});var l=a(7437),i=a(6451),c=a(7138),n=a(9402),r=a(2116),d=a(6648);function h(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("header",{className:"header-section-2",children:(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsxs)("div",{className:"header-top-wrapper-2",children:[(0,l.jsxs)("ul",{className:"contact-list",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("i",{className:"far fa-envelope"}),(0,l.jsx)("a",{href:"mailto:info@example.com",children:"info@example.com"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("i",{className:"fa-sharp fa-solid fa-location-dot"}),"4648 Rocky, New York"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("i",{className:"fa-regular fa-phone"}),(0,l.jsx)("a",{href:"tel:2086660112",children:"+208-666-0112"})]})]}),(0,l.jsxs)("div",{className:"top-right",children:[(0,l.jsxs)("ul",{className:"text-list",children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.default,{href:"/contact",children:"Privacy Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.default,{href:"/contact",children:"Terms & Conditions"})})]}),(0,l.jsxs)("div",{className:"social-icon d-flex align-items-center",children:[(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-youtube"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]}),(0,l.jsx)("div",{id:"header-sticky",className:"header-2",children:(0,l.jsx)("div",{className:"mega-menu-wrapper",children:(0,l.jsxs)("div",{className:"header-main",children:[(0,l.jsx)("div",{className:"header-left",children:(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)(c.default,{href:"/",className:"header-logo",children:(0,l.jsx)(d.default,{src:"/assets/img/logo/black-logo.svg",alt:"logo-img",width:149,height:64})})})}),(0,l.jsxs)("div",{className:"header-right d-flex justify-content-end align-items-center",children:[(0,l.jsx)("div",{className:"mean__menu-wrapper",children:(0,l.jsx)("div",{className:"main-menu",children:(0,l.jsx)("nav",{id:"mobile-menu",children:(0,l.jsx)("ul",{children:(0,l.jsx)(i.Z,{})})})})}),(0,l.jsx)("div",{className:"header-button",children:(0,l.jsxs)(c.default,{href:"/contact",className:"theme-btn",children:["GAT A QUOTE ",(0,l.jsx)("i",{className:"fa-regular fa-arrow-right"})]})}),(0,l.jsxs)("div",{className:"search-item",children:[(0,l.jsx)("a",{onClick:()=>document.getElementById("searchWrap").classList.add("active"),className:"search-trigger search-icon",children:(0,l.jsx)("i",{className:"fal fa-search"})}),(0,l.jsx)("div",{className:"header__hamburger d-xl-block my-auto",children:(0,l.jsx)("div",{onClick:()=>(0,r.w)(),className:"sidebar__toggle",children:(0,l.jsx)("i",{className:"fas fa-bars"})})})]})]})]})})})]})})," ",(0,l.jsx)(n.Z,{children:(0,l.jsx)(i.Z,{})})]})}},6451:function(e,s,a){a.d(s,{Z:function(){return h}});var l=a(7437),i=a(7138),c=a(3643),n=a(2265),r=a(6648),d=a(6463);function h(){let[e,s]=(0,n.useState)(-1),[a,h]=(0,n.useState)(-1),t=(0,d.usePathname)(),m=function(){var e,s,a;let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.KD[0],i=!1;return(null===(e=l.href)||void 0===e?void 0:e.includes("/"))&&(null===(s=l.href)||void 0===s?void 0:s.split("/")[1])==t.split("/")[1]&&(i=!0),l.submenu&&(null===(a=l.submenu)||void 0===a||a.forEach(e=>{var s,a;(null===(s=e.href)||void 0===s?void 0:s.includes("/"))&&(null===(a=e.href)||void 0===a?void 0:a.split("/")[1])==t.split("/")[1]&&(i=!0),e.submenu&&e.submenu.forEach(e=>{e.href.split("/")[1]==t.split("/")[1]&&(i=!0)}),e.homeMenuItems&&e.homeMenuItems.forEach(e=>{e.buttons&&e.buttons.forEach(e=>{e.href==t&&(i=!0)})})})),i};return(0,l.jsx)(l.Fragment,{children:c.KD.map((c,n)=>(0,l.jsxs)("li",{className:c.className||"",children:[(0,l.jsxs)(i.default,{href:c.href,className:m(c)?"menuActive":"",onClick:()=>s(e=>e==n?-1:n),children:[c.label," ",c.iconClass&&(0,l.jsx)("i",{className:c.iconClass})," "]}),c.submenu&&(0,l.jsx)("ul",{className:"submenu ".concat("Home"==c.label?"has-homemenu":""," ").concat(e==n?"active":""," "),children:c.submenu.map((e,s)=>e.homeMenuItems?(0,l.jsx)("li",{children:(0,l.jsx)("div",{className:"homemenu-items",children:e.homeMenuItems.map((e,s)=>(0,l.jsxs)("div",{className:"homemenu",children:[(0,l.jsxs)("div",{className:"homemenu-thumb",children:[(0,l.jsx)(r.default,{src:e.imageSrc,width:240,height:300,alt:"img"}),(0,l.jsx)("div",{className:"demo-button",children:e.buttons.map((e,s)=>(0,l.jsx)(i.default,{href:e.href,className:"theme-btn",children:e.label},s))})]}),(0,l.jsx)("div",{className:"homemenu-content text-center",children:(0,l.jsx)("h4",{className:"homemenu-title",children:e.title})})]},s))})},s):(0,l.jsxs)("li",{className:e.className||"",children:[(0,l.jsxs)(i.default,{href:e.href,className:m(e)?"menuActive":"",onClick:()=>h(e=>e==s?-1:s),children:[e.label," ",e.iconClass&&(0,l.jsx)("i",{className:e.iconClass})]}),e.submenu&&(0,l.jsx)("ul",{className:"submenu  ".concat(a==s?"active":""," "),children:e.submenu.map((e,s)=>(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{className:m(e)?"menuActive":"",href:e.href,children:e.label})},s))})]},s))})]},n))})}}}]);