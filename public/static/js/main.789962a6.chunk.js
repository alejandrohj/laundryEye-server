(this["webpackJsonplaundryeye-client"]=this["webpackJsonplaundryeye-client"]||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(33),o=t(21),c=t.n(o),i=(t(76),t(60)),s=t(61),m=t(69),d=t(67),u=t(7),g=(t(77),t(10)),p=t.n(g),E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"https://laundryeye.herokuapp.com/api",f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URL||"https://laundryeye.herokuapp.com/",h=t(112),v=t(113),y=t(111),b=t(63);function x(e){return l.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top"},l.a.createElement(h.a.Brand,{href:"#home"},l.a.createElement("img",{src:"".concat(f,"/mogan-horizontal_blanco_MODIFICACI\xd3N.png"),alt:"logo",height:"50"})),l.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(v.a,{className:"mr-auto"},l.a.createElement(v.a.Link,{href:"/"},"Vista General"),l.a.createElement(y.a,{title:"Sistemas",id:"collasible-nav-dropdown"},l.a.createElement(y.a.Item,{href:"/cageswasher"},"Lavadora de Jaulas"),l.a.createElement(y.a.Item,{href:"#action/3.2"},"Another action"),l.a.createElement(y.a.Item,{href:"#action/3.3"},"Something"),l.a.createElement(y.a.Divider,null),l.a.createElement(y.a.Item,{href:"#action/3.4"},"A"))),e.loggedInUser?l.a.createElement(v.a,null,l.a.createElement(v.a,null,l.a.createElement(b.a,{onClick:e.handleLogOut},"LogOut "))):""))}var O=t(15);function C(e){var a,t,n=e.LAL1Data,r=n[n.length-1];return n?(function(e){switch(e){case"operating":a="Operando",t="#4287f5";break;case"non-operating":a="No operando",t="#4a576b";break;case"waiting":a="Esperando",t="#d65600";break;case"emergency":a="Emergencia",t="#e30400";break;case"off":a="Apagada",t="#787778";break;default:a="No definido",t="#787778"}}(r.status),l.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},l.a.createElement("h4",null,"Linea de acabado liso N\xba1"),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{className:"lalImg",src:"".concat(f,"/PlanoPlantaLAL.jpg"),alt:"LAL1"}),l.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},l.a.createElement("p",null,"Estado:",l.a.createElement("b",{style:{color:t}},a)),"off"!==r.status?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Programa: ",l.a.createElement("b",null,r.productivity.program)),l.a.createElement("p",null,"Velocidad: ",l.a.createElement("b",null,r.productivity.speed,"%")),l.a.createElement("p",null,"Temperatura: ",l.a.createElement("b",null,r.productivity.temperature,"\xbaC"))):"")))):l.a.createElement("p",null,"Loading...")}function T(e){var a,t,n=e.LAL2Data,r=n[n.length-1];return n?(function(e){switch(e){case"operating":a="Operando",t="#4287f5";break;case"non-operating":a="No operando",t="#4a576b";break;case"waiting":a="Esperando",t="#d65600";break;case"emergency":a="Emergencia",t="#e30400";break;case"off":a="Apagada",t="#787778";break;default:a="No definido",t="#787778"}}(r.status),l.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},l.a.createElement("h4",null,"Linea de acabado liso N\xba2"),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{className:"lalImg",src:"".concat(f,"/PlanoPlantaLAL.jpg"),alt:"LAL1"}),l.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},l.a.createElement("p",null,"Estado:",l.a.createElement("b",{style:{color:t}},a)),"off"!==r.status?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Programa: ",l.a.createElement("b",null,r.productivity.program)),l.a.createElement("p",null,"Velocidad: ",l.a.createElement("b",null,r.productivity.speed,"%")),l.a.createElement("p",null,"Temperatura: ",l.a.createElement("b",null,r.productivity.temperature,"\xbaC"))):"")))):l.a.createElement("p",null,"Loading...")}var L=t(108);function w(){return l.a.createElement(h.a,{fixed:"bottom",expand:"lg",variant:"dark",bg:"dark"},l.a.createElement(L.a,null,l.a.createElement(h.a.Brand,{href:"#"},"Version Alpha")))}function S(){var e=Object(n.useState)(null),a=Object(O.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(null),o=Object(O.a)(r,2),c=o[0],i=o[1],s=Object(n.useState)(null),m=Object(O.a)(s,2),d=m[0],u=m[1];Object(n.useEffect)((function(){p.a.get("".concat(E,"/ironsdata")).then((function(e){t(e.data);var a=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));i(a),u(n),setInterval(g,2e3)}))}),[]);var g=function(){p.a.get("".concat(E,"/ironsdata")).then((function(e){t(e.data);var a=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));i(a),u(n)}))};return c&&d?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement(C,{LAL1Data:c}),l.a.createElement(T,{LAL2Data:d})),l.a.createElement(w,null)):l.a.createElement("p",null,"Loading...")}var I=t(109),j=t(110);function D(e){var a=Object(n.useState)(!1),t=Object(O.a)(a,2),r=t[0],o=t[1];return console.log(e.RTData),e.RTData&&void 0!==e.RTData?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"create-laundryitem-btn"},l.a.createElement(b.a,{onClick:function(){return o(!0)},className:"general-btn createbtn"},"Modificar")),l.a.createElement(I.a,{centered:!0,show:r,onHide:function(){return o(!1)}},l.a.createElement(I.a.Header,{closeButton:!0},l.a.createElement(I.a.Title,{className:"admin-card-title"},"Modificar tiempos")),l.a.createElement(I.a.Body,null,l.a.createElement(j.a,{onSubmit:e.onModify},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Tiempo de Lavado"),l.a.createElement(j.a.Control,{name:"timeToWash",type:"number",defaultValue:e.RTData.timeToWash})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Tiempo de secado"),l.a.createElement(j.a.Control,{name:"timeToDry",type:"number",defaultValue:e.RTData.timeToDry})),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(b.a,{className:"general-btn",variant:"primary",type:"submit"},"Modificar")))))):l.a.createElement("p",null,"Loading...")}function A(){var e=Object(n.useState)(null),a=Object(O.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(!1),o=Object(O.a)(r,2),c=o[0],i=o[1],s=Object(n.useState)(null),m=Object(O.a)(s,2),d=m[0],g=m[1];Object(n.useEffect)((function(){p.a.get("".concat(E,"/user"),{withCredentials:!0}).then((function(e){console.log(e.data),t(e.data)})).catch((function(){i(!0)})),p.a.get("".concat(E,"/tlc"),{withCredentials:!0}).then((function(e){console.log(e.data),g(e.data),setInterval(h,2e3)}))}),[]);var h=function(){p.a.get("".concat(E,"/tlc"),{withCredentials:!0}).then((function(e){g(e.data)}))};if(c)return l.a.createElement(u.a,{to:"/signin"});if(!d)return l.a.createElement("p",null,"Loading...");var v=d[d.length-1];return l.a.createElement("div",{style:{margin:"30px"}},l.a.createElement("h1",null,"Tunel de lavado de jaulas"),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement("div",null,l.a.createElement("img",{src:"".concat(f,"/tunelLavJaulas.jpg"),alt:"img_lavJaulas",width:"300px"})),l.a.createElement("div",{style:{margin:"40px"}},l.a.createElement("h5",null,"Estado:",v.status),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",border:"1px solid",padding:"15px",margin:"10px 0px"}},l.a.createElement("div",{style:{marginRight:"20px"}},l.a.createElement("p",null,l.a.createElement("b",null,"Tiempo lavado: "),v.timeWashing,"/",v.timeToWash," min"),l.a.createElement("p",null,l.a.createElement("b",null,"Tiempo secado: "),v.timeDrying,"/",v.timeToDry," min")),l.a.createElement(D,{RTData:v,onModify:function(e){e.preventDefault();var a=v.status,t=v.orders,n=e.currentTarget,l=n.timeToWash,r=n.timeToDry;p.a.post("".concat(E,"/tlc/add"),{status:a,orders:t,timeToWashRemoteModifiyed:l.value,timeToDryRemoteModifiyed:r.value},{withCredentials:!0}).then((function(e){console.log(e.data),window.location.reload(!1)}))}})),l.a.createElement("h6",null,"Control remoto"),l.a.createElement(b.a,{variant:"success",onClick:function(){p.a.post("".concat(E,"/tlc/add"),{status:v.status,orders:"start"},{withCredentials:!0}).then((function(e){console.log(e.data)}))}},"Marcha"),l.a.createElement(b.a,{variant:"danger",style:{marginLeft:"10px"},onClick:function(){p.a.post("".concat(E,"/tlc/add"),{status:v.status,orders:"stop"},{withCredentials:!0}).then((function(e){console.log(e.data)}))}},"Paro"))))}function k(e){var a=Object(n.useState)(null),t=Object(O.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){p.a.get("".concat(E,"/user"),{withCredentials:!0}).then((function(e){o(e.data)}))}),[e.loggedInUser]),console.log(r),r&&"admin"===r.userType?l.a.createElement(u.a,{to:"/"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"signin"},l.a.createElement("p",{style:{textAlign:"center",padding:"30px",marginLeft:"5%",marginRight:"5%",color:"#036C9C",fontWeight:"600",fontSize:"25px"}},l.a.createElement("em",null,"Ordena y organiza tu lencer\xeda con myLinen")),l.a.createElement(j.a,{noValidate:!0,className:"admin-signinform",onSubmit:e.onSignIn,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},l.a.createElement(j.a.Group,{style:{width:"50%"},controlId:"formBasicEmail"},l.a.createElement(j.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Direcci\xf3n de correo"),l.a.createElement(j.a.Control,{name:"email",type:"email",placeholder:"Enter email"}),l.a.createElement(j.a.Text,{className:"text-muted"},"Tu email")),l.a.createElement(j.a.Group,{style:{width:"50%"},controlId:"formBasicPassword"},l.a.createElement(j.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Contrase\xf1a"),l.a.createElement(j.a.Control,{name:"password",type:"password",placeholder:"Password"}),l.a.createElement(j.a.Text,{className:"text-muted"},"Si no recuerdas tu contrase\xf1a, llamanos")),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement(b.a,{style:{fontSize:"20px"},className:"general-btn",variant:"primary",type:"submit"},"Registrarse"))))}var N=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={IronsData:[],loggedInUser:null},e.componentDidMount=function(){e.loggedInUser||p.a.get("".concat(E,"/user"),{withCredentials:!0}).then((function(a){e.setState({loggedInUser:a.data})}))},e.handleSignIn=function(a){a.preventDefault();var t=a.currentTarget,n=t.email,l=t.password;p.a.post("".concat(E,"/signin"),{email:n.value,password:l.value},{withCredentials:!0}).then((function(a){e.setState({loggedInUser:a.data}),window.location.reload(!1)}))},e.handleLogOut=function(){console.log("loggingOut"),p.a.post("".concat(E,"/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{handleLogOut:this.handleLogOut,loggedInUser:this.loggedInUser}),l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/",render:function(){return l.a.createElement(S,null)}}),l.a.createElement(u.b,{path:"/signin",render:function(){return l.a.createElement(k,{loggedInUser:e.loggedInUser,onSignIn:e.handleSignIn})}}),l.a.createElement(u.b,{path:"/cageswasher",render:function(){return l.a.createElement(A,null)}})))}}]),t}(n.Component),_=Object(u.g)(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(102);c.a.render(l.a.createElement(r.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,a,t){e.exports=t(103)},76:function(e,a,t){},77:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.789962a6.chunk.js.map