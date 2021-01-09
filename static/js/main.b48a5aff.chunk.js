(this["webpackJsonpreact-household"]=this["webpackJsonpreact-household"]||[]).push([[0],{25:function(n,e,t){},26:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(2),c=t.n(o),i=t(14),a=t.n(i),u=(t(25),t(4)),l=(t(26),t(3));function d(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  width: 512px;\n  height: 768px;\n  margin: 96px auto 32px;\n\n  background-color: #faeef9;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);\n"]);return d=function(){return n},n}var s=l.d.div(d());var b=function(n){var e=n.children;return Object(r.jsx)(s,{children:e})},j=t(5),f=t(6),x=[{id:1,category:"meal",text:"\uc911\uad6d\uc9d1",amount:7e3},{id:2,category:"bmw",text:"\ubc84\uc2a4",amount:1e4},{id:3,category:"hospital",text:"\ubcd1\uc6d0\uac10",amount:9e3}];function h(n,e){switch(e.type){case"CREATE":return n.concat(e.household);case"EDIT":return console.log(x),n.map((function(n){return n.id===e.household.id?Object(f.a)(Object(f.a)({},n),{},{category:e.household.category,text:e.household.text,amount:e.household.amount}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled action type : ".concat(e.type))}}var p=Object(o.createContext)(),O=Object(o.createContext)(),g=Object(o.createContext)();function m(n){var e=n.children,t=Object(o.useReducer)(h,x),c=Object(j.a)(t,2),i=c[0],a=c[1],u=Object(o.useRef)(4);return Object(r.jsx)(p.Provider,{value:i,children:Object(r.jsx)(O.Provider,{value:a,children:Object(r.jsx)(g.Provider,{value:u,children:e})})})}function v(){var n=Object(o.useContext)(p);if(!n)throw new Error("Cannot find HouseholdStateContext");return n}function y(){var n=Object(o.useContext)(O);if(!n)throw new Error("Cannot find HouseholdDispatchContext");return n}function w(){var n=Object(u.a)(["\n  padding: 48px 32px 24px;\n  border-bottom: 1px solid #dedede;\n\n  h1 {\n    margin: 0;\n    font-size: 27px;\n    color: #35548e;\n  }\n  p {\n    font-size: 20px;\n    margin-top: 20px;\n  }\n  span {\n    font-size: 22px;\n    color: #f37b7b;\n  }\n  .total-expense {\n    margin-top: 20px;\n    font-size: 20px;\n    font-weight: bold;\n    color: #865487;\n  }\n"]);return w=function(){return n},n}var C=l.d.div(w());var k=function(){var n=v().reduce((function(n,e){return n+e.amount}),0);console.log(n);var e,t=(new Date).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"});return Object(r.jsxs)(C,{children:[Object(r.jsx)("h1",{children:"\uc624\ub298\uc758 \uc9c0\ucd9c"}),Object(r.jsx)("p",{children:t}),Object(r.jsxs)("div",{className:"total-expense",children:["\ucd1d \uc9c0\ucd9c : ",Object(r.jsxs)("span",{children:[(e=n,e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," "]}),"\uc6d0"]})]})},z=t(9),E=t(18),S=t(19),T=t(12);function D(){var n=Object(u.a)(["\n  /* \uacf5\ud1b5 \uc2a4\ud0c0\uc77c */\n  display: inline-block;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  padding-left: 1rem;\n  padding-right: 1rem;\n\n  /* \ud06c\uae30 */\n  ","\n\n  /* \uc0c9\uc0c1 */\n  ","\n  /* \uae30\ud0c0 */\n  //\ubd99\uc5b4\uc788\ub294 \uacbd\uc6b0 \ub9c8\uc9c4 \ub808\ud504\ub4dc 1\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return D=function(){return n},n}function R(){var n=Object(u.a)(["\n    height: ",";\n    font-size: ",";\n  "]);return R=function(){return n},n}function P(){var n=Object(u.a)(["\n  ","\n"]);return P=function(){return n},n}function B(){var n=Object(u.a)(["\n      background: ",";\n      &:hover {\n        background: ",";\n      }\n      &:active {\n        background: ",";\n      }\n    "]);return B=function(){return n},n}function F(){var n=Object(u.a)(["\n  ","\n"]);return F=function(){return n},n}var I=Object(l.c)(F(),(function(n){var e=n.theme,t=n.color,r=e.palette[t];return Object(l.c)(B(),r,Object(T.b)(.1,r),Object(T.a)(.1,r))})),K={large:{height:"3rem",fontSize:"1.25rem"},medium:{height:"2.25rem",fontSize:"1rem"},small:{height:"1.75rem",fontSize:"0.875rem"}},N=Object(l.c)(P(),(function(n){var e=n.size;return Object(l.c)(R(),K[e].height,K[e].fontSize)})),U=l.d.button(D(),N,I);var A=function(n){var e=n.children,t=n.color,o=void 0===t?"blue":t,c=n.size,i=void 0===c?"medium":c,a=Object(S.a)(n,["children","color","size"]);return Object(r.jsx)(U,Object(f.a)(Object(f.a)({color:o,size:i},a),{},{children:e}))};function H(){var n=Object(u.a)(["\n  margin-top: 10px;\n  display: flex;\n  justify-content: flex-end;\n"]);return H=function(){return n},n}function J(){var n=Object(u.a)(["\n  width: 320px;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 2px;\n\n  h3 {\n    margin: 0;\n    font-size: 1.25rem;\n  }\n\n  div {\n    margin-top: 10px;\n    font-size: 1.125rem;\n  }\n"]);return J=function(){return n},n}function M(){var n=Object(u.a)(["\n  position: fixed;\n  display: flex;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.75);\n"]);return M=function(){return n},n}var V=l.d.div(M()),W=l.d.div(J()),L=l.d.div(H());function $(n){var e=n.title,t=n.children,o=n.confirmText,c=n.cancelText,i=n.visible,a=n.onCancle;return i?Object(r.jsx)(V,{children:Object(r.jsxs)(W,{children:[Object(r.jsx)("h3",{children:e}),Object(r.jsx)("div",{children:t}),Object(r.jsxs)(L,{children:[Object(r.jsx)(A,{color:"blue",onClick:a,type:"button",children:c}),Object(r.jsx)(A,{color:"pink",type:"submit",children:o})]})]})}):null}$.defaultProps={cancelText:"\ucde8\uc18c",confirmText:"\ud655\uc778"};var q=$,G=t(8);var Q=function(n){var e=Object(o.useState)(n),t=Object(j.a)(e,2),r=t[0],c=t[1];return[r,c,function(n){var e=n.target,t=e.name,r=e.value;console.log(t,r),c((function(n){return Object(f.a)(Object(f.a)({},n),{},Object(G.a)({},t,r))}))},function(n){(n.keycode<48||n.which>57)&&(n.keycode<96||n.keycode>105)&&(n.preventDefault(),c({id:r.id,category:r.category,text:r.text,amount:0}),n.target.value="")}]};function X(){var n=Object(u.a)(["\n  ","\n"]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n  ","\n"]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 10px;\n  margin: 7px 0;\n  border: 1px solid #6b616e;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n  border-radius: 3px;\n"]);return Z=function(){return n},n}function _(){var n=Object(u.a)(["\n  ","\n  font-size: 20px;\n"]);return _=function(){return n},n}function nn(){var n=Object(u.a)(["\n  ","\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n  font-size: 18px;\n  padding: 5px 10px;\n  margin-right: 10px;\n  background-color: ",";\n  border-radius: 3px;\n  color: white;\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #c96a6a;\n  span {\n    font-size: 17px;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #495057;\n"]);return rn=function(){return n},n}function on(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  &:hover {\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  justify-content: center;\n  color: #727258;\n  font-size: 24px;\n  cursor: pointer;\n\n  &:hover {\n    color: #ff6b6b;\n  }\n"]);return cn=function(){return n},n}var an=Object(l.c)(cn()),un=l.d.div(on()),ln=l.d.div(rn()),dn=l.d.div(tn()),sn=l.d.div(en(),(function(n){return n.category})),bn=l.d.div(nn(),an),jn=l.d.div(_(),an),fn=Object(l.c)(Z()),xn=l.d.select(Y(),fn),hn=l.d.input(X(),fn),pn=function(n){switch(n){case"meal":return"#1376be";case"bmw":return"#1a6e3b";case"hospital":return"#a84c45";default:return"white"}};function On(n){var e,t=n.id,c=n.title,i=n.category,a=n.text,u=n.amount,l=Object(o.useState)(!1),d=Object(j.a)(l,2),s=d[0],b=d[1],f=Object(o.useState)(!1),x=Object(j.a)(f,2),h=x[0],p=x[1],O=Q({id:0,category:"meal",text:"",amount:0}),g=Object(j.a)(O,4),m=g[0],v=g[1],w=g[2],C=g[3],k=y(),S=function(){k({type:"REMOVE",id:t})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(un,{children:[Object(r.jsx)(sn,{category:pn(i),children:c}),Object(r.jsx)(ln,{children:a}),Object(r.jsxs)(dn,{children:[(e=u,e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ",Object(r.jsx)("span",{children:"\uc6d0"})]}),Object(r.jsx)(jn,{children:Object(r.jsx)(E.a,{onClick:function(){p(!0)}})}),Object(r.jsx)(bn,{children:Object(r.jsx)(z.b,{onClick:function(){b(!0)}})})]}),Object(r.jsx)(q,{title:"\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmText:"\uc0ad\uc81c",cancelText:"\ucde8\uc18c",visible:s,onConfirm:function(){S(),b(!1)},onCancle:function(){b(!1)},children:"\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c"}),Object(r.jsx)("form",{onSubmit:function(n){n.preventDefault(),console.log(m.category,m.text,m.amount),m.text&&m.amount?(k({type:"EDIT",household:{id:t,category:m.category,text:m.text,amount:Number(m.amount)}}),v({category:"meal"}),p(!1)):alert("\uac12\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.")},children:Object(r.jsxs)(q,{title:"\uc218\uc815\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmText:"\uc218\uc815",cancelText:"\ucde8\uc18c",visible:h,onCancle:function(){v({id:0,category:"meal",text:"",amount:0}),p(!1)},children:[Object(r.jsxs)(xn,{name:"category",onChange:w,children:[Object(r.jsx)("option",{value:"meal",children:"\uc2dd\uc0ac"}),Object(r.jsx)("option",{value:"bmw",children:"\uad50\ud1b5"}),Object(r.jsx)("option",{value:"hospital",children:"\ubcd1\uc6d0"})]}),Object(r.jsx)(hn,{type:"text",name:"text",placeholder:"\ub0b4\uc6a9",onChange:w}),Object(r.jsx)(hn,{type:"text",name:"amount",placeholder:"\uac00\uaca9",onChange:w,onKeyUp:C})]})})]})}var gn=c.a.memo(On);function mn(){var n=Object(u.a)(["\n  padding: 18px 32px;\n  border-bottom: 1px solid #dedede;\n\n  display: flex;\n  justify-content: flex-end;\n  p {\n    margin-right: 10px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n  select {\n  }\n"]);return mn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  flex: 1;\n  padding: 20px 32px 48px;\n  overflow-y: auto;\n  background-color: #f1e1e1d6;\n"]);return vn=function(){return n},n}var yn=l.d.div(vn()),wn=l.d.div(mn()),Cn=function(n){switch(n){case"meal":return"\uc2dd\uc0ac";case"bmw":return"\uad50\ud1b5";case"hospital":return"\ubcd1\uc6d0";default:return"\uc124\uc815\uc548\ub428"}};var kn=function(){var n=v(),e=Object(o.useState)("all"),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(wn,{children:[Object(r.jsx)("p",{children:"\uce74\ud14c\uace0\ub9ac"}),Object(r.jsxs)("select",{name:"Category",id:"Category",onChange:function(n){return n.preventDefault(),i(n.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"\uc804\uccb4"}),Object(r.jsx)("option",{value:"meal",children:"\uc2dd\uc0ac"}),Object(r.jsx)("option",{value:"bmw",children:"\uad50\ud1b5"}),Object(r.jsx)("option",{value:"hospital",children:"\uc758\ub8cc"})]})]}),Object(r.jsx)(yn,{children:n.filter((function(n){return"all"===c||n.category===c})).map((function(n){return Object(r.jsx)(gn,{id:n.id,title:Cn(n.category),category:n.category,text:n.text,amount:n.amount},n.id)}))})]})};function zn(){var n=Object(u.a)(["\n  ","\n"]);return zn=function(){return n},n}function En(){var n=Object(u.a)(["\n  ","\n"]);return En=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 10px;\n  margin: 7px 0;\n  border: 1px solid #6b616e;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n  border-radius: 3px;\n"]);return Sn=function(){return n},n}function Tn(){var n=Object(u.a)(["\n      background-color: #ff6b6b;\n      &:hover {\n        background-color: #ff8787;\n      }\n      &:active {\n        background-color: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "]);return Tn=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  display: flex;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  width: 80px;\n  height: 80px;\n  transform: translate(-50%, 50%);\n\n  font-size: 60px;\n  color: white;\n  border-radius: 40px;\n  border: none;\n  outline: none;\n\n  z-index: 5;\n  cursor: pointer;\n  background-color: #38d9a9;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: #63e6be;\n  }\n  &:active {\n    background-color: #20c997;\n  }\n\n  transition: all 0.3s;\n  ",";\n"]);return Dn=function(){return n},n}var Rn=l.d.button(Dn(),(function(n){return n.dialog&&Object(l.c)(Tn())})),Pn=Object(l.c)(Sn()),Bn=l.d.select(En(),Pn),Fn=l.d.input(zn(),Pn);var In=function(){var n=Object(o.useState)(!1),e=Object(j.a)(n,2),t=e[0],c=e[1],i=y(),a=function(){var n=Object(o.useContext)(g);if(!n)throw new Error("Cannot find TodoProvider");return n}(),u=Q({id:0,category:"meal",text:"",amount:0}),l=Object(j.a)(u,4),d=l[0],s=l[1],b=l[2],f=l[3],x=d.category,h=d.text,p=d.amount;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Rn,{onClick:function(){c(!t)},dialog:t,children:Object(r.jsx)(z.a,{})}),Object(r.jsx)("form",{onSubmit:function(n){n.preventDefault(),console.log(x,h,p),h&&p?(i({type:"CREATE",household:{id:a.current,category:x,text:h,amount:Number(p)}}),s({category:"meal"}),c(!1),a.current+=1):alert("\uac12\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.",h,p)},children:Object(r.jsxs)(q,{title:"\uc785\ub825 \ud6c4 \ud655\uc778\uc744 \ub204\ub974\uc138\uc694",visible:t,onCancle:function(){s({id:0,category:"meal",text:"",amount:0}),c(!1)},children:[Object(r.jsxs)(Bn,{name:"category",onChange:b,children:[Object(r.jsx)("option",{value:"meal",children:"\uc2dd\uc0ac"}),Object(r.jsx)("option",{value:"bmw",children:"\uad50\ud1b5"}),Object(r.jsx)("option",{value:"hospital",children:"\uc758\ub8cc"})]}),Object(r.jsx)(Fn,{type:"text",name:"text",placeholder:"\ub0b4\uc6a9",onChange:b}),Object(r.jsx)(Fn,{type:"number",name:"amount",placeholder:"\uac00\uaca9",onChange:b,onKeyUp:f})]})})]})};function Kn(){var n=Object(u.a)(["\n  body{\n    background-color:#b7b7b7;\n      }\n"]);return Kn=function(){return n},n}var Nn=Object(l.b)(Kn());var Un=function(){return Object(r.jsx)(l.a,{theme:{palette:{blue:"#228be6",pink:"#f06595"}},children:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(Nn,{}),Object(r.jsxs)(b,{children:[Object(r.jsx)(k,{}),Object(r.jsx)(kn,{}),Object(r.jsx)(In,{})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(r.jsx)(Un,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.b48a5aff.chunk.js.map