(this["webpackJsonplaundryeye-client"]=this["webpackJsonplaundryeye-client"]||[]).push([[0],{61:function(e,a,t){e.exports=t(94)},66:function(e,a,t){},67:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(33),o=t(16),c=t.n(o),i=(t(66),t(46)),m=t(47),u=t(58),s=t(56),d=t(6),E=(t(67),t(48)),p=t.n(E),v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"https://laundryeye.herokuapp.com/api",h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URL||"https://laundryeye.herokuapp.com/";function g(e){console.log(e);var a=e.IronsData.find((function(e){return e.iron=1}));if(!a)return r.a.createElement("p",null,"Loading...");console.log(a);a[a.length];return r.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},r.a.createElement("h4",null,"Linea de acabado liso N\xba1"),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:"".concat(h,"/PlanoPlantaLAL.jpg"),height:"400",alt:"LAL1"}),r.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},r.a.createElement("p",null,"Programa: ",r.a.createElement("b",null,a.productivity.program)),r.a.createElement("p",null,"Velocidad: ",r.a.createElement("b",null,a.productivity.speed,"%")),r.a.createElement("p",null,"Temperatura: ",r.a.createElement("b",null,a.productivity.temperature,"\xbaC")))))}var f=t(101),_=t(102),y=t(100);function b(){return r.a.createElement("div",null,r.a.createElement(f.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(f.a.Brand,{href:"#home"},r.a.createElement("img",{src:"".concat(h,"/mogan-horizontal_blanco_MODIFICACI\xd3N.png"),alt:"logo",height:"50"})),r.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(_.a,{className:"mr-auto"},r.a.createElement(_.a.Link,{href:"#features"},"Vista General"),r.a.createElement(y.a,{title:"Dropdown",id:"collasible-nav-dropdown"},r.a.createElement(y.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(y.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(y.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(y.a.Divider,null),r.a.createElement(y.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(_.a,null,r.a.createElement(_.a.Link,{href:"#deets"},"More deets"),r.a.createElement(_.a.Link,{eventKey:2,href:"#memes"},"Dank memes")))))}var D=t(99);function I(){return r.a.createElement(f.a,{fixed:"bottom",expand:"lg",variant:"dark",bg:"dark"},r.a.createElement(D.a,null,r.a.createElement(f.a.Brand,{href:"#"},"Navbar")))}function O(e){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(g,{IronsData:e.IronsData}),r.a.createElement(I,null))}var S=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={IronsData:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(v,"urlis"),p.a.get("".concat(v,"/ironsdata")).then((function(a){e.setState({IronsData:a.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{IronsData:e.state.IronsData})}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(93);c.a.render(r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.70f63e42.chunk.js.map