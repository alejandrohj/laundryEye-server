(this["webpackJsonplaundryeye-client"]=this["webpackJsonplaundryeye-client"]||[]).push([[0],{64:function(e,a,t){e.exports=t(96)},69:function(e,a,t){},70:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t(18),o=t.n(c),i=(t(69),t(50)),s=t(51),u=t(62),m=t(60),d=t(6),g=(t(70),t(10)),p=t.n(g),E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"https://laundryeye.herokuapp.com/api",f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URL||"https://laundryeye.herokuapp.com/",h=t(104),b=t(105),v=t(103),y=t(57);function O(e){return r.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top"},r.a.createElement(h.a.Brand,{href:"#home"},r.a.createElement("img",{src:"".concat(f,"/mogan-horizontal_blanco_MODIFICACI\xd3N.png"),alt:"logo",height:"50"})),r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{href:"/"},"Vista General"),r.a.createElement(v.a,{title:"Sistemas",id:"collasible-nav-dropdown"},r.a.createElement(v.a.Item,{href:"/cageswasher"},"Lavadora de Jaulas"),r.a.createElement(v.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(v.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(v.a.Divider,null),r.a.createElement(v.a.Item,{href:"#action/3.4"},"A"))),r.a.createElement(b.a,null,r.a.createElement(b.a,null,r.a.createElement(y.a,{onClick:e.handleLogOut},"LogOut ")))))}var C=t(15);function L(e){var a,t,n=e.LAL1Data,l=n[n.length-1];return n?(function(e){switch(e){case"operating":a="Operando",t="#4287f5";break;case"non-operating":a="No operando",t="#4a576b";break;case"waiting":a="Esperando",t="#d65600";break;case"emergency":a="Emergencia",t="#e30400";break;case"off":a="Apagada",t="#787778";break;default:a="No definido",t="#787778"}}(l.status),r.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},r.a.createElement("h4",null,"Linea de acabado liso N\xba1"),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{className:"lalImg",src:"".concat(f,"/PlanoPlantaLAL.jpg"),alt:"LAL1"}),r.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},r.a.createElement("p",null,"Estado:",r.a.createElement("b",{style:{color:t}},a)),"off"!==l.status?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Programa: ",r.a.createElement("b",null,l.productivity.program)),r.a.createElement("p",null,"Velocidad: ",r.a.createElement("b",null,l.productivity.speed,"%")),r.a.createElement("p",null,"Temperatura: ",r.a.createElement("b",null,l.productivity.temperature,"\xbaC"))):"")))):r.a.createElement("p",null,"Loading...")}function x(e){var a,t,n=e.LAL2Data,l=n[n.length-1];return n?(function(e){switch(e){case"operating":a="Operando",t="#4287f5";break;case"non-operating":a="No operando",t="#4a576b";break;case"waiting":a="Esperando",t="#d65600";break;case"emergency":a="Emergencia",t="#e30400";break;case"off":a="Apagada",t="#787778";break;default:a="No definido",t="#787778"}}(l.status),r.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},r.a.createElement("h4",null,"Linea de acabado liso N\xba2"),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{className:"lalImg",src:"".concat(f,"/PlanoPlantaLAL.jpg"),alt:"LAL1"}),r.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},r.a.createElement("p",null,"Estado:",r.a.createElement("b",{style:{color:t}},a)),"off"!==l.status?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Programa: ",r.a.createElement("b",null,l.productivity.program)),r.a.createElement("p",null,"Velocidad: ",r.a.createElement("b",null,l.productivity.speed,"%")),r.a.createElement("p",null,"Temperatura: ",r.a.createElement("b",null,l.productivity.temperature,"\xbaC"))):"")))):r.a.createElement("p",null,"Loading...")}var S=t(101);function w(){return r.a.createElement(h.a,{fixed:"bottom",expand:"lg",variant:"dark",bg:"dark"},r.a.createElement(S.a,null,r.a.createElement(h.a.Brand,{href:"#"},"Version Alpha")))}function I(){var e=Object(n.useState)(null),a=Object(C.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(null),c=Object(C.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(null),u=Object(C.a)(s,2),m=u[0],d=u[1];Object(n.useEffect)((function(){p.a.get("".concat(E,"/ironsdata")).then((function(e){t(e.data);var a=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));i(a),d(n),setInterval(g,2e3)}))}),[]);var g=function(){p.a.get("".concat(E,"/ironsdata")).then((function(e){t(e.data);var a=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));i(a),d(n)}))};return o&&m?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},r.a.createElement(L,{LAL1Data:o}),r.a.createElement(x,{LAL2Data:m})),r.a.createElement(w,null)):r.a.createElement("p",null,"Loading...")}function j(){var e=Object(n.useState)(null),a=Object(C.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(!1),c=Object(C.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(null),u=Object(C.a)(s,2),m=u[0],g=u[1];if(Object(n.useEffect)((function(){p.a.get("".concat(E,"/user"),{withCredentials:!0}).then((function(e){console.log(e.data),t(e.data)})).catch((function(){i(!0)})),p.a.get("".concat(E,"/tlc"),{withCredentials:!0}).then((function(e){console.log(e.data),g(e.data)}))}),[]),o)return r.a.createElement(d.a,{to:"/signin"});if(!m)return r.a.createElement("p",null,"Loading...");var f=m[m.length-1];return r.a.createElement("div",{style:{margin:"30px"}},r.a.createElement("h1",null,"Tunel de lavado de jaulas"),r.a.createElement("h5",null,"Estado:",f.status),r.a.createElement("div",null,r.a.createElement("h6",null,"Control remoto"),r.a.createElement(y.a,{variant:"success",onClick:function(){p.a.post("".concat(E,"/tlc/add"),{status:f.status,orders:"start"},{withCredentials:!0}).then((function(e){console.log(e.data)}))}},"Marcha"),r.a.createElement(y.a,{variant:"danger",style:{marginLeft:"10px"},onClick:function(){p.a.post("".concat(E,"/tlc/add"),{status:f.status,orders:"stop"},{withCredentials:!0}).then((function(e){console.log(e.data)}))}},"Paro")))}var A=t(102);function k(e){var a=Object(n.useState)(null),t=Object(C.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){p.a.get("".concat(E,"/user"),{withCredentials:!0}).then((function(e){c(e.data)}))}),[e.loggedInUser]),console.log(l),l&&"admin"===l.userType?r.a.createElement(d.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"signin"},r.a.createElement("p",{style:{textAlign:"center",padding:"30px",marginLeft:"5%",marginRight:"5%",color:"#036C9C",fontWeight:"600",fontSize:"25px"}},r.a.createElement("em",null,"Ordena y organiza tu lencer\xeda con myLinen")),r.a.createElement(A.a,{noValidate:!0,className:"admin-signinform",onSubmit:e.onSignIn,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},r.a.createElement(A.a.Group,{style:{width:"50%"},controlId:"formBasicEmail"},r.a.createElement(A.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Direcci\xf3n de correo"),r.a.createElement(A.a.Control,{name:"email",type:"email",placeholder:"Enter email"}),r.a.createElement(A.a.Text,{className:"text-muted"},"Tu email")),r.a.createElement(A.a.Group,{style:{width:"50%"},controlId:"formBasicPassword"},r.a.createElement(A.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Contrase\xf1a"),r.a.createElement(A.a.Control,{name:"password",type:"password",placeholder:"Password"}),r.a.createElement(A.a.Text,{className:"text-muted"},"Si no recuerdas tu contrase\xf1a, llamanos")),e.err?r.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):r.a.createElement(r.a.Fragment,null),r.a.createElement(y.a,{style:{fontSize:"20px"},className:"general-btn",variant:"primary",type:"submit"},"Registrarse"))))}var T=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={IronsData:[],loggedInUser:null},e.componentDidMount=function(){e.loggedInUser||p.a.get("".concat(E,"/user"),{withCredentials:!0}).then((function(a){e.setState({loggedInUser:a.data})}))},e.handleSignIn=function(a){a.preventDefault();var t=a.currentTarget,n=t.email,r=t.password;p.a.post("".concat(E,"/signin"),{email:n.value,password:r.value},{withCredentials:!0}).then((function(a){e.setState({loggedInUser:a.data}),window.location.reload(!1)}))},e.handleLogOut=function(){console.log("loggingOut"),p.a.post("".concat(E,"/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{handleLogOut:this.handleLogOut}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(d.b,{path:"/signin",render:function(){return r.a.createElement(k,{loggedInUser:e.loggedInUser,onSignIn:e.handleSignIn})}}),r.a.createElement(d.b,{path:"/cageswasher",render:function(){return r.a.createElement(j,null)}})))}}]),t}(n.Component),_=Object(d.g)(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(95);o.a.render(r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.814b7190.chunk.js.map