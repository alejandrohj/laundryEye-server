(this["webpackJsonplaundryeye-client"]=this["webpackJsonplaundryeye-client"]||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t(24),o=t.n(c),i=(t(76),t(6)),m=t(10),u=(t(77),t(7)),s=t.n(u),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"http://localhost:5000/api",E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URL||"http://localhost:3000/",p=t(115),g=t(117),f=t(114),b=t(64);function y(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){o(e.data)}))}),[]),l.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top"},l.a.createElement(p.a.Brand,{href:"/"},l.a.createElement("img",{src:"".concat(E,"/mogan-horizontal_blanco_MODIFICACI\xd3N.png"),alt:"logo",height:"50"})),l.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(f.a,{title:"Maquinaria",id:"collasible-nav-dropdown"},l.a.createElement(f.a.Item,{href:"/"},"Planchas"),l.a.createElement(f.a.Item,{href:"/cageswasher"},"Lavadora de Jaulas"),l.a.createElement(f.a.Divider,null),l.a.createElement(f.a.Item,{href:"#action/3.4"},"A")),l.a.createElement(g.a.Link,{href:"/gmao"},"Gesti\xf3n de mantenimiento"),c&&"admin"===c.userType?l.a.createElement(g.a.Link,{href:"/gmao/users"},"Users"):""),c?l.a.createElement(g.a,null,l.a.createElement(g.a,null,l.a.createElement(b.a,{onClick:e.handleLogOut},"LogOut "))):l.a.createElement(g.a,null,l.a.createElement(g.a,null,l.a.createElement(r.b,{to:"/signin"}," ",l.a.createElement(b.a,null,"Registrarse"))))))}function v(e){var a,t,n=e.LAL1Data,r=n[n.length-1];return n?(function(e){switch(e){case"operating":a="Operando",t="#4287f5";break;case"non-operating":a="No operando",t="#4a576b";break;case"waiting":a="Esperando",t="#d65600";break;case"emergency":a="Emergencia",t="#e30400";break;case"off":a="Apagada",t="#787778";break;default:a="No definido",t="#787778"}}(r.status),l.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},l.a.createElement("h4",null,"Linea de acabado liso N\xba1"),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{className:"lalImg",src:"".concat(E,"/PlanoPlantaLAL.jpg"),alt:"LAL1"}),l.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},l.a.createElement("p",null,"Estado:",l.a.createElement("b",{style:{color:t}},a)),"off"!==r.status?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Programa: ",l.a.createElement("b",null,r.productivity.program)),l.a.createElement("p",null,"Velocidad: ",l.a.createElement("b",null,r.productivity.speed,"%")),l.a.createElement("p",null,"Temperatura: ",l.a.createElement("b",null,r.productivity.temperature,"\xbaC"))):"")))):l.a.createElement("p",null,"Loading...")}function h(e){var a,t,n=e.LAL2Data,r=n[n.length-1];return n?(function(e){switch(e){case"operating":a="Operando",t="#4287f5";break;case"non-operating":a="No operando",t="#4a576b";break;case"waiting":a="Esperando",t="#d65600";break;case"emergency":a="Emergencia",t="#e30400";break;case"off":a="Apagada",t="#787778";break;default:a="No definido",t="#787778"}}(r.status),l.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},l.a.createElement("h4",null,"Linea de acabado liso N\xba2"),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{className:"lalImg",src:"".concat(E,"/PlanoPlantaLAL.jpg"),alt:"LAL1"}),l.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},l.a.createElement("p",null,"Estado:",l.a.createElement("b",{style:{color:t}},a)),"off"!==r.status?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Programa: ",l.a.createElement("b",null,r.productivity.program)),l.a.createElement("p",null,"Velocidad: ",l.a.createElement("b",null,r.productivity.speed,"%")),l.a.createElement("p",null,"Temperatura: ",l.a.createElement("b",null,r.productivity.temperature,"\xbaC"))):"")))):l.a.createElement("p",null,"Loading...")}var C=t(108);function O(){return l.a.createElement(p.a,{fixed:"bottom",expand:"lg",variant:"dark",bg:"dark"},l.a.createElement(C.a,{style:{display:"flex",marginLeft:"0px"}},l.a.createElement(p.a.Brand,{href:"#"},l.a.createElement("img",{src:"".concat(E,"/LaundryEye.ico"),alt:"logo",height:"50"})," LaundryEye")))}function x(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(null),c=Object(i.a)(r,2),o=c[0],m=c[1],u=Object(n.useState)(null),E=Object(i.a)(u,2),p=E[0],g=E[1];Object(n.useEffect)((function(){s.a.get("".concat(d,"/ironsdata")).then((function(e){t(e.data);var a=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));m(a),g(n),setInterval(f,2e3)})).catch((function(){setInterval(f,2e3)}))}),[]);var f=function(){s.a.get("".concat(d,"/ironsdata")).then((function(e){t(e.data);var a=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));m(a),g(n)}))};return o&&p?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement(v,{LAL1Data:o}),l.a.createElement(h,{LAL2Data:p})),l.a.createElement(O,null)):l.a.createElement("p",null,"Loading...")}var N=t(112),j=t(113);function w(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],c=t[1];return console.log(e.RTData),e.RTData&&void 0!==e.RTData?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"create-laundryitem-btn"},l.a.createElement(b.a,{onClick:function(){return c(!0)},className:"general-btn createbtn"},"Modificar")),l.a.createElement(N.a,{centered:!0,show:r,onHide:function(){return c(!1)}},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,{className:"admin-card-title"},"Modificar tiempos")),l.a.createElement(N.a.Body,null,l.a.createElement(j.a,{onSubmit:e.onModify},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Tiempo de Lavado"),l.a.createElement(j.a.Control,{name:"timeToWash",type:"number",defaultValue:e.RTData.timeToWash})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Tiempo de secado"),l.a.createElement(j.a.Control,{name:"timeToDry",type:"number",defaultValue:e.RTData.timeToDry})),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(b.a,{className:"general-btn",variant:"primary",type:"submit"},"Modificar")))))):l.a.createElement("p",null,"Loading...")}function S(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(!1),c=Object(i.a)(r,2),o=c[0],u=c[1],p=Object(n.useState)(null),g=Object(i.a)(p,2),f=g[0],y=g[1];Object(n.useEffect)((function(){s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){console.log(e.data),t(e.data)})).catch((function(){u(!0)})),s.a.get("".concat(d,"/tlc"),{withCredentials:!0}).then((function(e){console.log(e.data),y(e.data),setInterval(v,2e3)}))}),[]);var v=function(){s.a.get("".concat(d,"/tlc"),{withCredentials:!0}).then((function(e){y(e.data)}))};if(o)return l.a.createElement(m.a,{to:"/signin"});if(!f)return l.a.createElement("p",null,"Loading...");var h=f[f.length-1];return l.a.createElement("div",{style:{margin:"30px"}},l.a.createElement("h1",null,"Tunel de lavado de jaulas"),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement("div",null,l.a.createElement("img",{src:"".concat(E,"/tunelLavJaulas.jpg"),alt:"img_lavJaulas",width:"300px"})),l.a.createElement("div",{style:{margin:"40px"}},l.a.createElement("h5",null,"Estado:",h.status),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",border:"1px solid",padding:"15px",margin:"10px 0px"}},l.a.createElement("div",{style:{marginRight:"20px"}},l.a.createElement("p",null,l.a.createElement("b",null,"Tiempo lavado: "),h.timeWashing,"/",h.timeToWash," min"),l.a.createElement("p",null,l.a.createElement("b",null,"Tiempo secado: "),h.timeDrying,"/",h.timeToDry," min")),l.a.createElement(w,{RTData:h,onModify:function(e){e.preventDefault();var a=h.status,t=h.orders,n=e.currentTarget,l=n.timeToWash,r=n.timeToDry;console.log(l,r),s.a.post("".concat(d,"/tlc/add"),{status:a,orders:t,timeToWashRemoteModifiyed:l.value,timeToDryRemoteModifiyed:r.value},{withCredentials:!0}).then((function(e){console.log(e.data),h.timeToWash=e.data.timeToWashRemoteModifiyed,h.timeToDry=e.data.timeToDryRemoteModifiyed}))}})),l.a.createElement("h6",null,"Control remoto"),l.a.createElement(b.a,{variant:"success",onClick:function(){s.a.post("".concat(d,"/tlc/add"),{status:h.status,orders:"start"},{withCredentials:!0}).then((function(e){console.log(e.data)}))}},"Marcha"),l.a.createElement(b.a,{variant:"danger",style:{marginLeft:"10px"},onClick:function(){s.a.post("".concat(d,"/tlc/add"),{status:h.status,orders:"stop"},{withCredentials:!0}).then((function(e){console.log(e.data)}))}},"Paro"))))}var L=t(118);function T(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],c=t[1];if(Object(n.useEffect)((function(){s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){c(e.data)}))}),[e.loggedInUser]),console.log(r),r){if("admin"===r.userType)return l.a.createElement(m.a,{to:"/"});if("operator"===r.userType)return l.a.createElement(m.a,{to:"/"})}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"signin"},l.a.createElement("p",{style:{textAlign:"center",padding:"30px",marginLeft:"5%",marginRight:"5%",color:"#036C9C",fontWeight:"600",fontSize:"25px"}},l.a.createElement("em",null,"LaundryEye - Aplicaci\xf3n de gesti\xf3n de lavander\xedas")),l.a.createElement(L.a,{id:"siginCard",style:{backgroundColor:"#FEFEFE"}},l.a.createElement(j.a,{noValidate:!0,className:"admin-signinform",onSubmit:e.onSignIn,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},l.a.createElement(j.a.Group,{style:{width:"100%"},controlId:"formBasicEmail"},l.a.createElement(j.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Direcci\xf3n de correo"),l.a.createElement(j.a.Control,{style:{textAlign:"center"},name:"email",type:"email",placeholder:"mantenimiento@lavanderiamogan.com"}),l.a.createElement(j.a.Text,{className:"text-muted"},"Tu email")),l.a.createElement(j.a.Group,{style:{width:"80%"},controlId:"formBasicPassword"},l.a.createElement(j.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Contrase\xf1a"),l.a.createElement(j.a.Control,{style:{textAlign:"center"},name:"password",type:"password",placeholder:"Contrase\xf1a"}),l.a.createElement(j.a.Text,{className:"text-muted"})),e.err?l.a.createElement("p",{style:{color:"#ff2b2b"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement(b.a,{className:"general-btn",type:"submit"},"Acceder")))))}function k(e){return e.loggedInUser?l.a.createElement("div",{className:"sticky-top"},l.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",sticky:"top"},l.a.createElement(p.a.Brand,{href:"/gmao"},"GMAO"),l.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,{href:"/gamo/maintenance"},"Mantenimiento"),l.a.createElement(g.a.Link,{href:"/gmao/stock"},"Stock"),l.a.createElement(g.a.Link,{href:"/gmao/warehouses"},"Almacenes")),l.a.createElement(g.a,{style:{margin:"0px 20px 0px 0px",fontSize:"20px"}},l.a.createElement("p",{style:{margin:"0px"}},e.loggedInUser.userName))))):l.a.createElement("p",null,"Loading...")}function A(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],E=o[1];return Object(n.useEffect)((function(){s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){console.log(e.data),r(e.data)})).catch((function(){E(!0)}))}),[]),u?l.a.createElement(m.a,{to:"/signin"}):t?l.a.createElement("div",null,l.a.createElement(k,{loggedInUser:t}),l.a.createElement("p",{style:{margin:"50px",fontSize:"20px",textAlign:"center"}},"Esta es la zona de gestion del mantenimiento de Lavander\xeda Mog\xe1n, debe gestionar el stock(piezas, repuestos, almacenes,etc) desde stock. Para gestionar el mantenimiento de la maquinaria de la f\xe1brica(reparaciones, cambios de piezas, etc) debe ir a mantenimiento.")):l.a.createElement("p",null,"Loading...")}var I=t(110),D=t(109),_=t(67);function B(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],c=t[1],o=function(){return c(!1)},m=Object(n.useState)(null),u=Object(i.a)(m,2),E=u[0],p=u[1];return Object(n.useEffect)((function(){s.a.get("".concat(d,"/gmao/warehouses"),{withCredentials:!0}).then((function(e){p(e.data)}))}),[]),E?(console.log(E),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{textAlign:"center"},className:"create-laundryitem-btn"},l.a.createElement(b.a,{id:"createBtn",onClick:function(){return c(!0)},className:"general-btn createbtn"},"Crear un nuevo art\xedculo")),l.a.createElement("hr",null),l.a.createElement(N.a,{centered:!0,show:r,onHide:o},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,{className:"admin-card-title"},"Crear un nuevo item")),l.a.createElement(N.a.Body,null,l.a.createElement(j.a,{onSubmit:e.onCreate},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(j.a.Control,{name:"name",type:"text",placeholder:"p.e. almac\xe9n de repuestos"})),l.a.createElement(D.a,null,l.a.createElement(_.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Categor\xeda"),l.a.createElement(j.a.Control,{name:"category",as:"select"},l.a.createElement("option",null,"Elige una categor\xeda"),["repuesto","consumible"].map((function(e,a){return l.a.createElement("option",{key:"category"+a,value:e},e)}))))),l.a.createElement(_.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"SubCategor\xeda"),l.a.createElement(j.a.Control,{name:"subcategory",as:"select"},l.a.createElement("option",null,"Elige una subcategor\xeda"),["electrico","mecanico","correa","protecci\xf3n","filtro"].map((function(e,a){return l.a.createElement("option",{key:"subcategory"+a,value:e},e)})))))),l.a.createElement(D.a,null,l.a.createElement(_.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Marca y modelo"),l.a.createElement(j.a.Control,{name:"branch",type:"text",placeholder:"Marca y modelo"}))),l.a.createElement(_.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Referencia"),l.a.createElement(j.a.Control,{name:"ref",type:"text",placeholder:"referencia"})))),l.a.createElement(D.a,null,l.a.createElement(_.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Unidad de medida"),l.a.createElement(j.a.Control,{name:"unit",as:"select"},l.a.createElement("option",null,"Unidad de medida"),["metros","unidades","litros","kilos"].map((function(e,a){return l.a.createElement("option",{key:"unit"+a,value:e},e)}))))),l.a.createElement(_.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Precio"),l.a.createElement(j.a.Control,{name:"price",type:"number",step:"any",placeholder:"Precio"})))),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Descripci\xf3n"),l.a.createElement(j.a.Control,{name:"commentary",type:"text",placeholder:"Comentario"})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Almac\xe9n"),l.a.createElement(j.a.Control,{name:"warehouse",as:"select"},l.a.createElement("option",null,"Seleciona un almac\xe9n"),E.map((function(e,a){return l.a.createElement("option",{key:"warehouse"+a,value:e._id},e.name)})))),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(b.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Crear"),e.createSucces?l.a.createElement(b.a,{className:"general-btn",onClick:o},"Volvera listas"):l.a.createElement(l.a.Fragment,null))))))):l.a.createElement("p",null,"Loading...")}function G(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),u=m[0],E=m[1],p=Object(n.useState)(null),g=Object(i.a)(p,2),f=g[0],y=g[1],v=Object(n.useState)(!1),h=Object(i.a)(v,2),C=h[0],O=h[1],x=function(){return O(!1)};Object(n.useEffect)((function(){s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){c(e.data)})).catch((function(){E(!0)})),s.a.get("".concat(d,"/gmao/warehouses"),{withCredentials:!0}).then((function(e){y(e.data)}))}),[]);return u?l.a.createElement(n.Redirect,{to:"/signin"}):r&&f?l.a.createElement("div",null,l.a.createElement(k,{loggedInUser:r}),l.a.createElement("p",{id:"wareousesTitle",style:{textAlign:"center",color:"#328CB6",fontWeight:"600"}},"Almacenes"),l.a.createElement("div",{style:{textAlign:"center"},className:"create-laundryitem-btn"},l.a.createElement(b.a,{id:"createBtn",onClick:function(){return O(!0)},className:"general-btn createbtn"},"Crear nuevo almacen")),l.a.createElement("hr",null),f?f.map((function(e,a){return l.a.createElement(L.a,{id:"itemsCard",bg:"light",border:"dark",key:a+"warehouses",style:{textAlign:"center"}},l.a.createElement(L.a.Body,{style:{padding:"10px"}},l.a.createElement(L.a.Title,null,e.name),l.a.createElement(L.a.Text,null,l.a.createElement("p",null,"Localizaci\xf3n: ",e.floor)),l.a.createElement(b.a,{id:"createBtn",variant:"danger",onClick:function(){return a=e._id,void s.a.delete("".concat(d,"/gmao/").concat(a,"/warehouse/delete"),{withCredentials:!0}).then((function(){window.location.reload(!1)}));var a}},"Borrar")))})):"",l.a.createElement(N.a,{centered:!0,show:C,onHide:x},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,{className:"admin-card-title"},"Create a new item")),l.a.createElement(N.a.Body,null,l.a.createElement(j.a,{onSubmit:function(e){e.preventDefault();var a=e.currentTarget,t=a.name,n=a.floor;console.log("creating"),s.a.post("".concat(d,"/gmao/warehouses/create"),{name:t.value,floor:n.value},{withCredentials:!0}).then((function(e){window.location.reload(!1)}))}},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(j.a.Control,{name:"name",type:"text",placeholder:"p.e. almac\xe9n de repuestos"})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Zona"),l.a.createElement(j.a.Control,{name:"floor",type:"text",placeholder:"p.e. planta alta"})),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(b.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Crear almacen"),e.createSucces?l.a.createElement(b.a,{className:"general-btn",onClick:x},"Volvera listas"):l.a.createElement(l.a.Fragment,null)))))):l.a.createElement("p",null,"Loading...")}var F=t(116);function M(e){var a=Object(n.useState)(e.items),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(e.items),m=Object(i.a)(o,2),u=m[0],E=m[1],p=function(e,a){var t,n=JSON.parse(JSON.stringify(r)).map((function(n){return n._id===a?(console.log(n.name),"more"===e?n.quantity++:n.quantity--,t=n,n):n}));s.a.put("".concat(d,"/gmao/item/").concat(a,"/update/quantity"),{itemToUpdate:t},{withCredentials:!0}).then((function(e){c(n),E(n)})).catch((function(){}))};return r?(console.log(r),l.a.createElement("div",{id:"stocks"},l.a.createElement("h5",{style:{textAlign:"center",margin:"20px"}},"STOCK"),l.a.createElement("div",{id:"searchCard"},l.a.createElement(F.a,{defaultActiveKey:"0"},l.a.createElement(L.a,null,l.a.createElement(F.a.Toggle,{as:L.a.Header,eventKey:"1"},"Filtrar"),l.a.createElement(F.a.Collapse,{eventKey:"1"},l.a.createElement(L.a.Body,null,l.a.createElement("input",{onChange:function(e){var a=JSON.parse(JSON.stringify(r)).filter((function(a){return a.name.toUpperCase().includes(e.currentTarget.value.toUpperCase())}));E(a)}})))))),l.a.createElement(B,{onCreate:function(e){e.preventDefault();var a=e.currentTarget,t=a.name,n=a.branch,l=a.ref,o=a.category,i=a.subcategory,m=a.unit,u=a.commentary,E=a.price,p=a.warehouse;console.log(t.value,n.value,l.value,o.value,i.value,m.value,u.value,E.value),s.a.post("".concat(d,"/gmao/item/create"),{name:t.value,branch:n.value,ref:l.value,category:o.value,subcategory:i.value,unit:m.value,commentary:u.value,price:E.value,warehouse:p.value},{withCredentials:!0}).then((function(e){var a=JSON.parse(JSON.stringify(r));a.push(e.data),c(a)}))}}),l.a.createElement(I.a,{style:{marginTop:"10px"},id:"StocksTable",striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nombre/Marca Modelo - ref || Almacen"),l.a.createElement("th",null,"Categor\xedas"),l.a.createElement("th",null,"Cantidad"))),u.map((function(e,a){return l.a.createElement("tbody",{key:a+"item"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(g.a.Link,{id:"tbleItemName",style:{color:"white"},href:"/gamo/item/".concat(e._id,"/details")},l.a.createElement("b",null,e.name),"/ ",e.branch," - ",e.ref," || ",e.warehouse?e.warehouse.name:"")," "),l.a.createElement("td",null,l.a.createElement("b",null,e.category)," ",l.a.createElement("small",null,e.subcategory)),l.a.createElement("td",{id:"quitSumSubCell"},0===e.quantity?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(b.a,{id:"quitItemBtn",onClick:function(a){return t=e._id,void s.a.delete("".concat(d,"/gmao/item/").concat(t,"/delete"),{withCredentials:!0}).then((function(){var e=JSON.parse(JSON.stringify(r)).filter((function(e){return e._id!==t}));c(e),E(e)}));var t}}," Quitar")),l.a.createElement("div",null,l.a.createElement(b.a,{disabled:!0,className:"lbtn",onClick:function(){return p("less",e._id)},variant:"danger"},"-"),l.a.createElement("label",{style:{border:"none",margin:"0px 8px"}},e.quantity),l.a.createElement(b.a,{className:"general-btn lbtn",onClick:function(){return p("more",e._id)}},"+"))):l.a.createElement("div",null,l.a.createElement(b.a,{className:"lbtn",onClick:function(){return p("less",e._id)},variant:"danger"},"-"),l.a.createElement("label",{style:{border:"none",margin:"0px 8px"}},e.quantity),l.a.createElement(b.a,{className:"general-btn lbtn",onClick:function(){return p("more",e._id)}},"+")))))}))))):l.a.createElement("p",null,"Loading...")}function P(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),E=u[0],p=u[1],g=Object(n.useState)(null),f=Object(i.a)(g,2),b=f[0],y=f[1];return Object(n.useEffect)((function(){s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){c(e.data)})).catch((function(){p(!0)})),s.a.get("".concat(d,"/gmao/items")).then((function(e){console.log(e.data),y(e.data)}))}),[]),E?l.a.createElement(m.a,{to:"/signin"}):r&&b?(console.log(b),l.a.createElement("div",null,l.a.createElement(k,{loggedInUser:r}),l.a.createElement(M,{id:"warehouseItemsComponent",items:b}))):l.a.createElement("p",null,"Loading...")}var U=t(111);function R(e){var a=e.match.params.id,t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],o=r[1],u=Object(n.useState)(null),E=Object(i.a)(u,2),p=E[0],f=E[1],y=Object(n.useState)(!1),v=Object(i.a)(y,2),h=v[0],C=v[1],O=Object(n.useState)(null),x=Object(i.a)(O,2),N=x[0],w=x[1],S=Object(n.useState)(null),L=Object(i.a)(S,2),T=L[0],A=L[1];Object(n.useEffect)((function(){s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){f(e.data)})).catch((function(){w(!0)})),s.a.get("".concat(d,"/gmao/item/").concat(a)).then((function(e){o(e.data),console.log(e.data)})),s.a.get("".concat(d,"/gmao/warehouses"),{withCredentials:!0}).then((function(e){A(e.data)}))}),[]);return N?l.a.createElement(m.a,{to:"/signin"}):h?l.a.createElement(m.a,{to:"/gmao/stock"}):c&&T?l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{loggedInUser:p}),l.a.createElement(j.a,{onSubmit:function(e){e.preventDefault(),console.log(e.currentTarget);var t=e.currentTarget,n=t.name,l=t.branch,r=t.ref,c=t.category,o=t.subcategory,i=t.unit,m=t.commentary,u=t.price,E=t.warehouse;console.log(n.value,l.value,r.value,c.value,o.value,i.value,m.value,u.value),s.a.post("".concat(d,"/gmao/item/").concat(a,"/update"),{name:n.value,branch:l.value,ref:r.value,category:c.value,subcategory:o.value,unit:i.value,commentary:m.value,price:u.value,warehouse:E.value},{withCredentials:!0}).then((function(e){C(!0)}))},style:{margin:"10px"}},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(j.a.Control,{name:"name",type:"text",defaultValue:c.name})),l.a.createElement(D.a,null,l.a.createElement(_.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Categor\xeda"),l.a.createElement(j.a.Control,{name:"category",as:"select",defaultValue:c.category},l.a.createElement("option",null),["repuesto","consumible"].map((function(e,a){return l.a.createElement("option",{key:"category"+a,value:e},e)}))))),l.a.createElement(_.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"SubCategor\xeda"),l.a.createElement(j.a.Control,{name:"subcategory",as:"select",defaultValue:c.subcategory},l.a.createElement("option",null),["electrico","mecanico","correa","protecci\xf3n","filtro"].map((function(e,a){return l.a.createElement("option",{key:"subcategory"+a,value:e},e)})))))),l.a.createElement(D.a,null,l.a.createElement(_.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Marca y modelo"),l.a.createElement(j.a.Control,{name:"branch",type:"text",defaultValue:c.branch}))),l.a.createElement(_.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Referencia"),l.a.createElement(j.a.Control,{name:"ref",type:"text",defaultValue:c.ref})))),l.a.createElement(D.a,null,l.a.createElement(_.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Unidad de medida"),l.a.createElement(j.a.Control,{name:"unit",as:"select",defaultValue:c.unit},l.a.createElement("option",null,"Unidad de medida"),["metros","unidades","litros","kilos"].map((function(e,a){return l.a.createElement("option",{key:"unit"+a,value:e},e)}))))),l.a.createElement(_.a,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Precio"),l.a.createElement(U.a,{className:"mb-2"},l.a.createElement(U.a.Prepend,null,l.a.createElement(U.a.Text,null,"\u20ac")),l.a.createElement(j.a.Control,{id:"inlineFormInputGroup",name:"price",type:"number",step:"any",defaultValue:c.price})))),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Descripci\xf3n"),l.a.createElement(j.a.Control,{name:"commentary",type:"text",defaultValue:c.commentary})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Almac\xe9n"),l.a.createElement(j.a.Control,{name:"warehouse",as:"select"},l.a.createElement("option",null,c.warehouse?c.warehouse.name:"Seleciona un almac\xe9n"),T.map((function(e,a){return l.a.createElement("option",{key:"warehouse"+a,value:e._id},e.name)})))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},l.a.createElement("span",null,c.createBy?l.a.createElement("p",null,"Creado por: ",c.createBy.firstName):""),l.a.createElement("span",null,c.updatedBy?l.a.createElement("p",null,"Actualizado por: ",c.updatedBy.firstName):"")),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(b.a,{className:"general-btn",variant:"primary",type:"submit"},"Actualizar"))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}},l.a.createElement(g.a.Link,{href:"/gmao/stock"},l.a.createElement(b.a,{className:"general-btn",variant:"primary"},"Volver a Stocks")))):l.a.createElement("p",null,"Loading..")}function W(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),u=m[0],E=m[1];return Object(n.useEffect)((function(){s.a.get("".concat(d,"/gmao/items"),{withCredentials:!0}).then((function(e){console.log(e.data),c(e.data)}))}),[]),r?l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"center"},className:"create-laundryitem-btn"},l.a.createElement(b.a,{id:"createBtn",onClick:function(){return E(!0)},className:"general-btn createbtn"},"A\xf1adir nuevo usuario")),l.a.createElement(N.a,{centered:!0,show:u,onHide:function(){return E(!1)}},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,{className:"admin-card-title"},"A\xf1adir nuevo usuario")),l.a.createElement(N.a.Body,null,l.a.createElement(j.a,{onSubmit:e.onCreate},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(j.a.Control,{name:"firstName",type:"text",placeholder:"Alejandro"})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Apellidos"),l.a.createElement(j.a.Control,{name:"lastName",type:"text",placeholder:"Hern\xe1ndez Jorge"})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Nombre de usuario"),l.a.createElement(j.a.Control,{name:"userName",type:"text",placeholder:"Ale"})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Email"),l.a.createElement(j.a.Control,{name:"email",type:"email",placeholder:"user@laundryeye.com"})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Contrase\xf1a"),l.a.createElement(j.a.Control,{name:"password",type:"password",placeholder:"******"})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Acceso"),l.a.createElement(j.a.Control,{name:"userType",as:"select"},l.a.createElement("option",null,"operator"),l.a.createElement("option",null,"admin"))),l.a.createElement(b.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"A\xf1adir"))))):l.a.createElement("p",null,"Loging...")}function V(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),o=Object(i.a)(c,2),u=o[0],E=o[1],p=Object(n.useState)(!1),g=Object(i.a)(p,2),f=g[0],b=g[1],y=Object(n.useState)(!1),v=Object(i.a)(y,2);v[0],v[1];Object(n.useEffect)((function(){s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){r(e.data)})).catch((function(){b(!0)})),s.a.get("".concat(d,"/user/all"),{withCredentials:!0}).then((function(e){E(e.data)}))}),[]);return f?l.a.createElement(m.a,{to:"/signin"}):t&&u?l.a.createElement(l.a.Fragment,null,l.a.createElement(W,{loggedInUser:t,onCreate:function(e){e.preventDefault();var a=e.currentTarget,t=a.userName,n=a.firstName,l=a.lastName,r=a.email,c=a.password,o=a.userType;s.a.post("".concat(d,"/signup"),{userName:t.value,firstName:n.value,lastName:l.value,email:r.value,password:c.value,userType:o.value},{withCredentials:!0}).then((function(e){window.location.reload(!1)}))}}),l.a.createElement("div",null,u.map((function(e,a){return l.a.createElement(L.a,{style:{margin:"20px"}},l.a.createElement(L.a.Header,null,e.userName),l.a.createElement(L.a.Body,null,l.a.createElement("p",null,"Nombre: ",e.firstName),l.a.createElement("p",null,"Apellidos: ",e.lastName),l.a.createElement("p",null,"Email: ",e.email),l.a.createElement("p",null,"Acceso: ",e.userType)))})))):l.a.createElement("p",null,"Loading...")}var H=Object(m.g)((function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],E=o[1],p=Object(n.useState)(null),g=Object(i.a)(p,2),f=g[0],b=g[1],v=Object(n.useState)(null),h=Object(i.a)(v,2),C=(h[0],h[1],function(e){e.preventDefault();var a=e.currentTarget,t=a.email,n=a.password;s.a.post("".concat(d,"/signin"),{email:t.value,password:n.value},{withCredentials:!0}).then((function(e){r(e.data),window.location.reload(!1)})).catch((function(e){E(!0);var a=e.response.data.error;console.log(a),b(a)}))});return Object(n.useEffect)((function(){t||s.a.get("".concat(d,"/user"),{withCredentials:!0}).then((function(e){r(e.data)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{handleLogOut:function(){console.log("loggingOut"),s.a.post("".concat(d,"/logout"),{},{withCredentials:!0}).then((function(){r(null)})).then((function(){window.location.reload(!1)}))},loggedInUser:t}),l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",render:function(){return l.a.createElement(x,null)}}),l.a.createElement(m.b,{path:"/signin",render:function(){return l.a.createElement(T,{loggedInUser:t,onSignIn:C,err:u,errorMessage:f})}}),l.a.createElement(m.b,{path:"/cageswasher",render:function(){return l.a.createElement(S,null)}}),l.a.createElement(m.b,{exact:!0,path:"/gmao",render:function(){return l.a.createElement(A,null)}}),l.a.createElement(m.b,{path:"/gmao/stock",render:function(){return l.a.createElement(P,null)}}),l.a.createElement(m.b,{path:"/gmao/users",render:function(){return l.a.createElement(V,null)}}),l.a.createElement(m.b,{path:"/gamo/item/:id/details",render:function(e){return l.a.createElement(R,Object.assign({},e,{loggedInUser:t}))}}),l.a.createElement(m.b,{path:"/gmao/warehouses",render:function(){return l.a.createElement(G,null)}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(102);o.a.render(l.a.createElement(r.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,a,t){e.exports=t(103)},76:function(e,a,t){},77:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.1a916b87.chunk.js.map