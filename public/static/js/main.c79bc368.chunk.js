(this["webpackJsonplaundryeye-client"]=this["webpackJsonplaundryeye-client"]||[]).push([[0],{62:function(e,t,a){e.exports=a(95)},67:function(e,t,a){},68:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a(16),o=a.n(c),i=(a(67),a(48)),u=a(49),m=a(59),d=a(57),s=a(6),E=(a(68),a(25)),p=a.n(E),g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"https://laundryeye.herokuapp.com/api",f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URL||"https://laundryeye.herokuapp.com/",v=a(32);function h(e){var t=e.LAL1Data,a=t[t.length-1];return console.log(a),t?r.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},r.a.createElement("h4",null,"Linea de acabado liso N\xba1"),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:"".concat(f,"/PlanoPlantaLAL.jpg"),height:"400",alt:"LAL1"}),r.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},r.a.createElement("p",null,"Estado:",r.a.createElement("b",null,a.status)),"off"!==a.status?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Programa: ",r.a.createElement("b",null,a.productivity.program)),r.a.createElement("p",null,"Velocidad: ",r.a.createElement("b",null,a.productivity.speed,"%")),r.a.createElement("p",null,"Temperatura: ",r.a.createElement("b",null,a.productivity.temperature,"\xbaC"))):""))):r.a.createElement("p",null,"Loading...")}function b(e){var t=e.LAL2Data,a=t[t.length-1];return console.log(a),t?r.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},r.a.createElement("h4",null,"Linea de acabado liso N\xba2"),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:"".concat(f,"/PlanoPlantaLAL.jpg"),height:"400",alt:"LAL1"}),r.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},r.a.createElement("p",null,"Estado:",r.a.createElement("b",null,a.status)),"off"!==a.status?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Programa: ",r.a.createElement("b",null,a.productivity.program)),r.a.createElement("p",null,"Velocidad: ",r.a.createElement("b",null,a.productivity.speed,"%")),r.a.createElement("p",null,"Temperatura: ",r.a.createElement("b",null,a.productivity.temperature,"\xbaC"))):""))):r.a.createElement("p",null,"Loading...")}var y=a(102),L=a(103),O=a(101);function _(){return r.a.createElement("div",null,r.a.createElement(y.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(y.a.Brand,{href:"#home"},r.a.createElement("img",{src:"".concat(f,"/mogan-horizontal_blanco_MODIFICACI\xd3N.png"),alt:"logo",height:"50"})),r.a.createElement(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(y.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(L.a,{className:"mr-auto"},r.a.createElement(L.a.Link,{href:"#features"},"Vista General"),r.a.createElement(O.a,{title:"Dropdown",id:"collasible-nav-dropdown"},r.a.createElement(O.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(O.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(O.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(O.a.Divider,null),r.a.createElement(O.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(L.a,null,r.a.createElement(L.a.Link,{href:"#deets"},"More deets"),r.a.createElement(L.a.Link,{eventKey:2,href:"#memes"},"Dank memes")))))}var x=a(100);function A(){return r.a.createElement(y.a,{fixed:"bottom",expand:"lg",variant:"dark",bg:"dark"},r.a.createElement(x.a,null,r.a.createElement(y.a.Brand,{href:"#"},"Navbar")))}function S(){var e=Object(n.useState)(null),t=Object(v.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)(null),c=Object(v.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(null),m=Object(v.a)(u,2),d=m[0],s=m[1];Object(n.useEffect)((function(){p.a.get("".concat(g,"/ironsdata")).then((function(e){a(e.data);var t=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));i(t),s(n),setInterval(E,2e3)}))}),[]);var E=function(){p.a.get("".concat(g,"/ironsdata")).then((function(e){a(e.data);var t=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));i(t),s(n)}))};return o&&d?r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(h,{LAL1Data:o}),r.a.createElement(b,{LAL2Data:d}),r.a.createElement(A,null)):r.a.createElement("p",null,"Loading...")}var T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={IronsData:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(){return r.a.createElement(S,null)}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(94);o.a.render(r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.c79bc368.chunk.js.map