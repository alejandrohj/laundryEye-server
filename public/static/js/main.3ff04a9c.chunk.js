(this["webpackJsonplaundryeye-client"]=this["webpackJsonplaundryeye-client"]||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),c=t(24),o=t.n(c),i=(t(80),t(63)),m=t(64),s=t(73),u=t(71),d=t(10),E=(t(81),t(6)),g=t.n(E),p=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"https://laundryeye.herokuapp.com/api",f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PUBLIC_URL||"https://laundryeye.herokuapp.com/",b=t(7),y=t(118),v=t(120),h=t(117),C=t(66);function x(e){var a=Object(n.useState)(null),t=Object(b.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){g.a.get("".concat(p,"/user"),{withCredentials:!0}).then((function(e){o(e.data)}))}),[]),l.a.createElement(y.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top"},l.a.createElement(y.a.Brand,{href:"/"},l.a.createElement("img",{src:"".concat(f,"/mogan-horizontal_blanco_MODIFICACI\xd3N.png"),alt:"logo",height:"50"})),l.a.createElement(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(y.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(v.a,{className:"mr-auto"},l.a.createElement(h.a,{title:"Maquinaria",id:"collasible-nav-dropdown"},l.a.createElement(h.a.Item,{href:"/"},"Planchas"),l.a.createElement(h.a.Item,{href:"/cageswasher"},"Lavadora de Jaulas"),l.a.createElement(h.a.Divider,null),l.a.createElement(h.a.Item,{href:"#action/3.4"},"A")),l.a.createElement(v.a.Link,{href:"/gmao"},"Gesti\xf3n de mantenimiento")),c?l.a.createElement(v.a,null,l.a.createElement(v.a,null,l.a.createElement(C.a,{onClick:e.handleLogOut},"LogOut "))):l.a.createElement(v.a,null,l.a.createElement(v.a,null,l.a.createElement(r.b,{to:"/signin"}," ",l.a.createElement(C.a,null,"Registrarse"))))))}function O(e){var a,t,n=e.LAL1Data,r=n[n.length-1];return n?(function(e){switch(e){case"operating":a="Operando",t="#4287f5";break;case"non-operating":a="No operando",t="#4a576b";break;case"waiting":a="Esperando",t="#d65600";break;case"emergency":a="Emergencia",t="#e30400";break;case"off":a="Apagada",t="#787778";break;default:a="No definido",t="#787778"}}(r.status),l.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},l.a.createElement("h4",null,"Linea de acabado liso N\xba1"),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{className:"lalImg",src:"".concat(f,"/PlanoPlantaLAL.jpg"),alt:"LAL1"}),l.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},l.a.createElement("p",null,"Estado:",l.a.createElement("b",{style:{color:t}},a)),"off"!==r.status?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Programa: ",l.a.createElement("b",null,r.productivity.program)),l.a.createElement("p",null,"Velocidad: ",l.a.createElement("b",null,r.productivity.speed,"%")),l.a.createElement("p",null,"Temperatura: ",l.a.createElement("b",null,r.productivity.temperature,"\xbaC"))):"")))):l.a.createElement("p",null,"Loading...")}function S(e){var a,t,n=e.LAL2Data,r=n[n.length-1];return n?(function(e){switch(e){case"operating":a="Operando",t="#4287f5";break;case"non-operating":a="No operando",t="#4a576b";break;case"waiting":a="Esperando",t="#d65600";break;case"emergency":a="Emergencia",t="#e30400";break;case"off":a="Apagada",t="#787778";break;default:a="No definido",t="#787778"}}(r.status),l.a.createElement("div",{style:{margin:"40px",width:"500px",textAlign:"center"}},l.a.createElement("h4",null,"Linea de acabado liso N\xba2"),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{className:"lalImg",src:"".concat(f,"/PlanoPlantaLAL.jpg"),alt:"LAL1"}),l.a.createElement("div",{style:{border:"1px solid gray",padding:"10px",alignSelf:"flex-start",marginTop:"10px",textAlign:"left"}},l.a.createElement("p",null,"Estado:",l.a.createElement("b",{style:{color:t}},a)),"off"!==r.status?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Programa: ",l.a.createElement("b",null,r.productivity.program)),l.a.createElement("p",null,"Velocidad: ",l.a.createElement("b",null,r.productivity.speed,"%")),l.a.createElement("p",null,"Temperatura: ",l.a.createElement("b",null,r.productivity.temperature,"\xbaC"))):"")))):l.a.createElement("p",null,"Loading...")}var k=t(112);function w(){return l.a.createElement(y.a,{fixed:"bottom",expand:"lg",variant:"dark",bg:"dark"},l.a.createElement(k.a,null,l.a.createElement(y.a.Brand,{href:"#"},"Version Alpha")))}function N(){var e=Object(n.useState)(null),a=Object(b.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(null),c=Object(b.a)(r,2),o=c[0],i=c[1],m=Object(n.useState)(null),s=Object(b.a)(m,2),u=s[0],d=s[1];Object(n.useEffect)((function(){g.a.get("".concat(p,"/ironsdata")).then((function(e){t(e.data);var a=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));i(a),d(n),setInterval(E,2e3)})).catch((function(){setInterval(E,2e3)}))}),[]);var E=function(){g.a.get("".concat(p,"/ironsdata")).then((function(e){t(e.data);var a=e.data.filter((function(e){return 1===e.iron})),n=e.data.filter((function(e){return 2===e.iron}));i(a),d(n)}))};return o&&u?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement(O,{LAL1Data:o}),l.a.createElement(S,{LAL2Data:u})),l.a.createElement(w,null)):l.a.createElement("p",null,"Loading...")}var L=t(115),j=t(116);function T(e){var a=Object(n.useState)(!1),t=Object(b.a)(a,2),r=t[0],c=t[1];return console.log(e.RTData),e.RTData&&void 0!==e.RTData?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"create-laundryitem-btn"},l.a.createElement(C.a,{onClick:function(){return c(!0)},className:"general-btn createbtn"},"Modificar")),l.a.createElement(L.a,{centered:!0,show:r,onHide:function(){return c(!1)}},l.a.createElement(L.a.Header,{closeButton:!0},l.a.createElement(L.a.Title,{className:"admin-card-title"},"Modificar tiempos")),l.a.createElement(L.a.Body,null,l.a.createElement(j.a,{onSubmit:e.onModify},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Tiempo de Lavado"),l.a.createElement(j.a.Control,{name:"timeToWash",type:"number",defaultValue:e.RTData.timeToWash})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Tiempo de secado"),l.a.createElement(j.a.Control,{name:"timeToDry",type:"number",defaultValue:e.RTData.timeToDry})),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(C.a,{className:"general-btn",variant:"primary",type:"submit"},"Modificar")))))):l.a.createElement("p",null,"Loading...")}function I(){var e=Object(n.useState)(null),a=Object(b.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(!1),c=Object(b.a)(r,2),o=c[0],i=c[1],m=Object(n.useState)(null),s=Object(b.a)(m,2),u=s[0],E=s[1];Object(n.useEffect)((function(){g.a.get("".concat(p,"/user"),{withCredentials:!0}).then((function(e){console.log(e.data),t(e.data)})).catch((function(){i(!0)})),g.a.get("".concat(p,"/tlc"),{withCredentials:!0}).then((function(e){console.log(e.data),E(e.data),setInterval(y,2e3)}))}),[]);var y=function(){g.a.get("".concat(p,"/tlc"),{withCredentials:!0}).then((function(e){E(e.data)}))};if(o)return l.a.createElement(d.a,{to:"/signin"});if(!u)return l.a.createElement("p",null,"Loading...");var v=u[u.length-1];return l.a.createElement("div",{style:{margin:"30px"}},l.a.createElement("h1",null,"Tunel de lavado de jaulas"),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement("div",null,l.a.createElement("img",{src:"".concat(f,"/tunelLavJaulas.jpg"),alt:"img_lavJaulas",width:"300px"})),l.a.createElement("div",{style:{margin:"40px"}},l.a.createElement("h5",null,"Estado:",v.status),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",border:"1px solid",padding:"15px",margin:"10px 0px"}},l.a.createElement("div",{style:{marginRight:"20px"}},l.a.createElement("p",null,l.a.createElement("b",null,"Tiempo lavado: "),v.timeWashing,"/",v.timeToWash," min"),l.a.createElement("p",null,l.a.createElement("b",null,"Tiempo secado: "),v.timeDrying,"/",v.timeToDry," min")),l.a.createElement(T,{RTData:v,onModify:function(e){e.preventDefault();var a=v.status,t=v.orders,n=e.currentTarget,l=n.timeToWash,r=n.timeToDry;console.log(l,r),g.a.post("".concat(p,"/tlc/add"),{status:a,orders:t,timeToWashRemoteModifiyed:l.value,timeToDryRemoteModifiyed:r.value},{withCredentials:!0}).then((function(e){console.log(e.data),v.timeToWash=e.data.timeToWashRemoteModifiyed,v.timeToDry=e.data.timeToDryRemoteModifiyed}))}})),l.a.createElement("h6",null,"Control remoto"),l.a.createElement(C.a,{variant:"success",onClick:function(){g.a.post("".concat(p,"/tlc/add"),{status:v.status,orders:"start"},{withCredentials:!0}).then((function(e){console.log(e.data)}))}},"Marcha"),l.a.createElement(C.a,{variant:"danger",style:{marginLeft:"10px"},onClick:function(){g.a.post("".concat(p,"/tlc/add"),{status:v.status,orders:"stop"},{withCredentials:!0}).then((function(e){console.log(e.data)}))}},"Paro"))))}function A(e){var a=Object(n.useState)(null),t=Object(b.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){g.a.get("".concat(p,"/user"),{withCredentials:!0}).then((function(e){c(e.data)}))}),[e.loggedInUser]),console.log(r),r&&"admin"===r.userType?l.a.createElement(d.a,{to:"/"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"signin"},l.a.createElement("p",{style:{textAlign:"center",padding:"30px",marginLeft:"5%",marginRight:"5%",color:"#036C9C",fontWeight:"600",fontSize:"25px"}},l.a.createElement("em",null,"Ordena y organiza tu lencer\xeda con myLinen")),l.a.createElement(j.a,{noValidate:!0,className:"admin-signinform",onSubmit:e.onSignIn,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},l.a.createElement(j.a.Group,{style:{width:"50%"},controlId:"formBasicEmail"},l.a.createElement(j.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Direcci\xf3n de correo"),l.a.createElement(j.a.Control,{name:"email",type:"email",placeholder:"Enter email"}),l.a.createElement(j.a.Text,{className:"text-muted"},"Tu email")),l.a.createElement(j.a.Group,{style:{width:"50%"},controlId:"formBasicPassword"},l.a.createElement(j.a.Label,{style:{color:"#036C9C",fontWeight:"600"}},"Contrase\xf1a"),l.a.createElement(j.a.Control,{name:"password",type:"password",placeholder:"Password"}),l.a.createElement(j.a.Text,{className:"text-muted"},"Si no recuerdas tu contrase\xf1a, llamanos")),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement(C.a,{style:{fontSize:"20px"},className:"general-btn",variant:"primary",type:"submit"},"Registrarse"))))}function D(e){return e.loggedInUser?l.a.createElement("div",{className:"sticky-top"},l.a.createElement(y.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",sticky:"top"},l.a.createElement(y.a.Brand,{href:"/gmao"},"GMAO"),l.a.createElement(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(y.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(v.a,{className:"mr-auto"},l.a.createElement(v.a.Link,{href:"/gamo/maintenance"},"Mantenimiento"),l.a.createElement(v.a.Link,{href:"/gmao/stock"},"Stock")),l.a.createElement(v.a,{style:{margin:"0px 20px 0px 0px",fontSize:"20px"}},l.a.createElement("p",{style:{margin:"0px"}},e.loggedInUser.userName))))):l.a.createElement("p",null,"Loading...")}function _(){var e=Object(n.useState)(null),a=Object(b.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(b.a)(c,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){g.a.get("".concat(p,"/user"),{withCredentials:!0}).then((function(e){console.log(e.data),r(e.data)})).catch((function(){m(!0)}))}),[]),i?l.a.createElement(d.a,{to:"/signin"}):t?l.a.createElement("div",null,l.a.createElement(D,{loggedInUser:t}),l.a.createElement("p",{style:{margin:"50px",fontSize:"20px",textAlign:"center"}},"Esta es la zona de gestion del mantenimiento de Lavander\xeda Mog\xe1n, debe gestionar el stock(piezas, repuestos, almacenes,etc) desde stock. Para gestionar el mantenimiento de la maquinaria de la f\xe1brica(reparaciones, cambios de piezas, etc) debe ir a mantenimiento.")):l.a.createElement("p",null,"Loading...")}var U=t(121),M=t(119),P=t(114),F=t(113),G=t(69);function B(e){var a=Object(n.useState)(!1),t=Object(b.a)(a,2),r=t[0],c=t[1],o=function(){return c(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{textAlign:"center"},className:"create-laundryitem-btn"},l.a.createElement(C.a,{onClick:function(){return c(!0)},className:"general-btn createbtn"},"Crear un nuevo art\xedculo")),l.a.createElement("hr",null),l.a.createElement(L.a,{centered:!0,show:r,onHide:o},l.a.createElement(L.a.Header,{closeButton:!0},l.a.createElement(L.a.Title,{className:"admin-card-title"},"Crear un nuevo item")),l.a.createElement(L.a.Body,null,l.a.createElement(j.a,{onSubmit:e.onCreate},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(j.a.Control,{name:"name",type:"text",placeholder:"p.e. almac\xe9n de repuestos"})),l.a.createElement(F.a,null,l.a.createElement(G.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Categor\xeda"),l.a.createElement(j.a.Control,{name:"category",as:"select"},l.a.createElement("option",null,"Elige una categor\xeda"),["repuesto","consumible"].map((function(e,a){return l.a.createElement("option",{key:"category"+a,value:e},e)}))))),l.a.createElement(G.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"SubCategor\xeda"),l.a.createElement(j.a.Control,{name:"subcategory",as:"select"},l.a.createElement("option",null,"Elige una subcategor\xeda"),["electrico","mecanico","correa","protecci\xf3n","filtro"].map((function(e,a){return l.a.createElement("option",{key:"subcategory"+a,value:e},e)})))))),l.a.createElement(F.a,null,l.a.createElement(G.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Marca y modelo"),l.a.createElement(j.a.Control,{name:"branch",type:"text",placeholder:"Marca y modelo"}))),l.a.createElement(G.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Referencia"),l.a.createElement(j.a.Control,{name:"ref",type:"text",placeholder:"referencia"})))),l.a.createElement(F.a,null,l.a.createElement(G.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Unidad de medida"),l.a.createElement(j.a.Control,{name:"unit",as:"select"},l.a.createElement("option",null,"Unidad de medida"),["metros","unidades","litros","kilos"].map((function(e,a){return l.a.createElement("option",{key:"unit"+a,value:e},e)}))))),l.a.createElement(G.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Precio"),l.a.createElement(j.a.Control,{name:"price",type:"number",placeholder:"Precio"})))),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Descripci\xf3n"),l.a.createElement(j.a.Control,{name:"commentary",type:"text",placeholder:"Comentario"})),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(C.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Crear"),e.createSucces?l.a.createElement(C.a,{className:"general-btn",onClick:o},"Volvera listas"):l.a.createElement(l.a.Fragment,null))))))}function R(e){var a=Object(n.useState)(null),t=Object(b.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),m=i[0],s=i[1],u=function(){return s(!1)};return Object(n.useEffect)((function(){g.a.get("".concat(p,"/gmao/items"),{withCredentials:!0}).then((function(e){console.log(e.data),c(e.data)}))}),[]),r?l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"center"},className:"create-laundryitem-btn"},l.a.createElement(C.a,{id:"createBtn",onClick:function(){return s(!0)},className:"general-btn createbtn"},"A\xf1adir nuevo art\xedculo")),l.a.createElement(L.a,{centered:!0,show:m,onHide:u},l.a.createElement(L.a.Header,{closeButton:!0},l.a.createElement(L.a.Title,{className:"admin-card-title"},"A\xf1adir nuevo art\xedculo")),l.a.createElement(L.a.Body,null,l.a.createElement(j.a,{onSubmit:e.onCreate},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Art\xedculo"),l.a.createElement(j.a.Control,{name:"item",as:"select"},l.a.createElement("option",null,"Elige el art\xedculo"),r.map((function(e,a){return l.a.createElement("option",{key:"itemoption"+a,value:e._id},e.name,"  ",e.brach,"  ",e.ref," ",e.commentary)})))),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(C.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"A\xf1adir"),e.createSucces?l.a.createElement(C.a,{className:"general-btn",onClick:u},"Volvera listas"):l.a.createElement(l.a.Fragment,null)))),l.a.createElement("p",{style:{textAlign:"center"}},"Tambien puedes crear uno nuevo:"),l.a.createElement(B,{onCreate:e.onCreateNewItem}))):l.a.createElement("p",null,"Loging...")}function W(e){var a=Object(n.useState)(e.warehouse),t=Object(b.a)(a,2),r=t[0],c=t[1],o=function(e,a){var t=JSON.parse(JSON.stringify(r.stock)).map((function(t){return t.itemId.name===a?(console.log(t.name),"more"===e?t.quantity++:t.quantity--,t):t})),n=r;n.stock=t,console.log(n),g.a.post("".concat(p,"/gmao/warehouse/").concat(r._id,"/update"),{stock:t},{withCredentials:!0}).then((function(e){c(e.data),c(n)}))};return r?(console.log(r),l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",null,"STOCK"),l.a.createElement(P.a,{style:{marginTop:"10px"},id:"StocksTable",striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nombre/Marca-Modelo,ref"),l.a.createElement("th",null,"Categor\xedas"),l.a.createElement("th",null,"Cantidad"))),r.stock.map((function(e,a){return l.a.createElement("tbody",{key:a+"item"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(v.a.Link,{style:{color:"white"},href:"/gamo/item/".concat(e.itemId._id,"/details")},l.a.createElement("b",null,e.itemId.name),"/ ",e.itemId.branch," - ",e.itemId.ref)," "),l.a.createElement("td",null,l.a.createElement("b",null,e.itemId.category)," ",l.a.createElement("small",null,e.itemId.subcategory)),l.a.createElement("td",{style:{}},0===e.quantity?l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{id:"quitItemBtn",onClick:function(a){return function(e){var a=r.stock.filter((function(a){return a.itemId._id!==e})),t=r;t.stock=a,g.a.post("".concat(p,"/gmao/warehouse/").concat(r._id,"/update"),{stock:a},{withCredentials:!0}).then((function(e){c(e.data),c(t)}))}(e.itemId._id)}}," Quitar"),l.a.createElement(C.a,{disabled:!0,className:"lbtn",onClick:function(){return o("less",e.itemId.name)},variant:"danger"},"-")):l.a.createElement(C.a,{className:"lbtn",onClick:function(){return o("less",e.itemId.name)},variant:"danger"},"-"),l.a.createElement("label",{style:{border:"none",margin:"0px 8px"}},e.quantity),l.a.createElement(C.a,{className:"general-btn lbtn",onClick:function(){return o("more",e.itemId.name)}},"+"))))}))),l.a.createElement(R,{onCreate:function(e){e.preventDefault();var a=e.currentTarget.item,t=r._id,n=r.stock,l=[];console.log(n);var c={itemId:a.value,quantity:1};if(0!==n.length){var o=JSON.parse(JSON.stringify(n));console.log(o),o.push(c),l=o,console.log(o),console.log("if")}else l=[c];console.log(l),g.a.post("".concat(p,"/gmao/warehouse/").concat(t,"/update"),{stock:l},{withCredentials:!0}).then((function(e){window.location.reload(!1)}))},onCreateNewItem:function(e){e.preventDefault();var a=e.currentTarget,t=a.name,n=a.branch,l=a.ref,c=a.category,o=a.subcategory,i=a.unit,m=a.commentary,s=a.price;console.log(t.value,n.value,l.value,c.value,o.value,i.value,m.value,s.value),g.a.post("".concat(p,"/gmao/item/create"),{name:t.value,branch:n.value,ref:l.value,category:c.value,subcategory:o.value,unit:i.value,commentary:m.value,price:s.value},{withCredentials:!0}).then((function(e){var a=e.data,t=r._id,n=r.stock,l=[];console.log(a);var c={itemId:a,quantity:1};if(0!==n.length){var o=JSON.parse(JSON.stringify(n));console.log(o),o.push(c),l=o,console.log(o),console.log("if")}else l=[c];console.log(l),g.a.post("".concat(p,"/gmao/warehouse/").concat(t,"/update"),{stock:l},{withCredentials:!0}).then((function(e){}))}))}}))):l.a.createElement("p",null,"Loging...")}function V(e){var a=Object(n.useState)(e.warehouses),t=Object(b.a)(a,2),r=t[0],c=(t[1],Object(n.useState)(!1)),o=Object(b.a)(c,2),i=o[0],m=o[1],s=function(){return m(!1)};return l.a.createElement("div",null,l.a.createElement("p",{id:"wareousesTitle",style:{textAlign:"center",color:"#328CB6",fontWeight:"600"}},"Almacenes"),l.a.createElement("div",{style:{textAlign:"center"},className:"create-laundryitem-btn"},l.a.createElement(C.a,{id:"createBtn",onClick:function(){return m(!0)},className:"general-btn createbtn"},"Crear nuevo almacen")),l.a.createElement("hr",null),r?r.map((function(e,a){return l.a.createElement(U.a,{id:"itemsCard",bg:"light",border:"dark",key:a+"warehouses",style:{textAlign:"center"}},l.a.createElement(U.a.Body,{style:{padding:"0px"}},l.a.createElement(U.a.Title,null,e.name),l.a.createElement(U.a.Text,null,l.a.createElement("p",null,"Localizaci\xf3n: ",e.floor)),l.a.createElement(M.a,{defaultActiveKey:"0"},l.a.createElement(M.a.Toggle,{as:C.a,variant:"link",eventKey:"1"},"Desplegar"),l.a.createElement(M.a.Collapse,{eventKey:"1"},l.a.createElement(U.a.Body,{id:"stockView"},l.a.createElement(W,{id:"warehouseItemsComponent",warehouse:e}))))))})):"",l.a.createElement(L.a,{centered:!0,show:i,onHide:s},l.a.createElement(L.a.Header,{closeButton:!0},l.a.createElement(L.a.Title,{className:"admin-card-title"},"Create a new item")),l.a.createElement(L.a.Body,null,l.a.createElement(j.a,{onSubmit:e.onCreate},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(j.a.Control,{name:"name",type:"text",placeholder:"p.e. almac\xe9n de repuestos"})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Zona"),l.a.createElement(j.a.Control,{name:"floor",type:"text",placeholder:"p.e. planta alta"})),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(C.a,{onClick:e.handleError,className:"general-btn",variant:"primary",type:"submit"},"Crear almacen"),e.createSucces?l.a.createElement(C.a,{className:"general-btn",onClick:s},"Volvera listas"):l.a.createElement(l.a.Fragment,null))))))}function H(e){var a=Object(n.useState)(null),t=Object(b.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),m=i[0],s=i[1],u=Object(n.useState)(null),E=Object(b.a)(u,2),f=E[0],y=E[1];Object(n.useEffect)((function(){g.a.get("".concat(p,"/user"),{withCredentials:!0}).then((function(e){c(e.data)})).catch((function(){s(!0)})),g.a.get("".concat(p,"/gmao/warehouses")).then((function(e){console.log(e.data),y(e.data)}))}),[]);return m?l.a.createElement(d.a,{to:"/signin"}):r&&f?l.a.createElement("div",null,l.a.createElement(D,{loggedInUser:r}),l.a.createElement(V,{warehouses:f,onCreate:function(e){e.preventDefault();var a=e.currentTarget,t=a.name,n=a.floor;console.log("creating"),g.a.post("".concat(p,"/gmao/warehouses/create"),{name:t.value,floor:n.value},{withCredentials:!0}).then((function(e){window.location.reload(!1)}))}})):l.a.createElement("p",null,"Loading...")}function z(e){var a=e.match.params.id,t=Object(n.useState)(null),r=Object(b.a)(t,2),c=r[0],o=r[1],i=Object(n.useState)(null),m=Object(b.a)(i,2),s=m[0],u=m[1],E=Object(n.useState)(null),f=Object(b.a)(E,2),y=f[0],h=f[1];Object(n.useEffect)((function(){g.a.get("".concat(p,"/user"),{withCredentials:!0}).then((function(e){u(e.data)})).catch((function(){h(!0)})),g.a.get("".concat(p,"/gmao/item/").concat(a)).then((function(e){o(e.data),console.log(e.data)}))}),[]);return y?l.a.createElement(d.a,{to:"/signin"}):c?l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{loggedInUser:s}),l.a.createElement(j.a,{onSubmit:function(e){e.preventDefault(),console.log(e.currentTarget);var t=e.currentTarget,n=t.name,l=t.branch,r=t.ref,c=t.category,o=t.subcategory,i=t.unit,m=t.commentary,s=t.price;console.log(n.value,l.value,r.value,c.value,o.value,i.value,m.value,s.value),g.a.post("".concat(p,"/gmao/item/").concat(a,"/update"),{name:n.value,branch:l.value,ref:r.value,category:c.value,subcategory:o.value,unit:i.value,commentary:m.value,price:s.value},{withCredentials:!0}).then((function(e){console.log(e.data)}))},style:{margin:"5px"}},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Nombre"),l.a.createElement(j.a.Control,{name:"name",type:"text",defaultValue:c.name})),l.a.createElement(F.a,null,l.a.createElement(G.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Categor\xeda"),l.a.createElement(j.a.Control,{name:"category",as:"select",defaultValue:c.category},l.a.createElement("option",null),["repuesto","consumible"].map((function(e,a){return l.a.createElement("option",{key:"category"+a,value:e},e)}))))),l.a.createElement(G.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"SubCategor\xeda"),l.a.createElement(j.a.Control,{name:"subcategory",as:"select",defaultValue:c.subcategory},l.a.createElement("option",null),["electrico","mecanico","correa","protecci\xf3n","filtro"].map((function(e,a){return l.a.createElement("option",{key:"subcategory"+a,value:e},e)})))))),l.a.createElement(F.a,null,l.a.createElement(G.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Marca y modelo"),l.a.createElement(j.a.Control,{name:"branch",type:"text",defaultValue:c.branch}))),l.a.createElement(G.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Referencia"),l.a.createElement(j.a.Control,{name:"ref",type:"text",defaultValue:c.ref})))),l.a.createElement(F.a,null,l.a.createElement(G.a,null,l.a.createElement(j.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(j.a.Label,{className:"admin-card-title"},"Unidad de medida"),l.a.createElement(j.a.Control,{name:"unit",as:"select",defaultValue:c.unit},l.a.createElement("option",null,"Unidad de medida"),["metros","unidades","litros","kilos"].map((function(e,a){return l.a.createElement("option",{key:"unit"+a,value:e},e)}))))),l.a.createElement(G.a,null,l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Precio"),l.a.createElement(j.a.Control,{name:"price",type:"number",defaultValue:c.price})))),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,{className:"admin-card-title"},"Descripci\xf3n"),l.a.createElement(j.a.Control,{name:"commentary",type:"text",defaultValue:c.commentary})),e.err?l.a.createElement("p",{style:{color:"#036C9C"}},e.errorMessage):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(C.a,{className:"general-btn",variant:"primary",type:"submit"},"Actualizar"))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}},l.a.createElement(v.a.Link,{href:"/gmao/stock"},l.a.createElement(C.a,{className:"general-btn",variant:"primary"},"Volver a Stocks")))):l.a.createElement("p",null,"Loading..")}var J=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={IronsData:[],loggedInUser:null},e.handleSignIn=function(a){a.preventDefault();var t=a.currentTarget,n=t.email,l=t.password;g.a.post("".concat(p,"/signin"),{email:n.value,password:l.value},{withCredentials:!0}).then((function(a){e.setState({loggedInUser:a.data}),window.location.reload(!1)}))},e.handleLogOut=function(){console.log("loggingOut"),g.a.post("".concat(p,"/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e.componentDidMount=function(){e.loggedInUser||g.a.get("".concat(p,"/user"),{withCredentials:!0}).then((function(a){e.setState({loggedInUser:a.data})}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{handleLogOut:this.handleLogOut,loggedInUser:this.loggedInUser}),l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",render:function(){return l.a.createElement(N,null)}}),l.a.createElement(d.b,{path:"/signin",render:function(){return l.a.createElement(A,{loggedInUser:e.loggedInUser,onSignIn:e.handleSignIn})}}),l.a.createElement(d.b,{path:"/cageswasher",render:function(){return l.a.createElement(I,null)}}),l.a.createElement(d.b,{exact:!0,path:"/gmao",render:function(){return l.a.createElement(_,null)}}),l.a.createElement(d.b,{path:"/gmao/stock",render:function(){return l.a.createElement(H,null)}}),l.a.createElement(d.b,{path:"/gamo/item/:id/details",render:function(a){return l.a.createElement(z,Object.assign({},a,{loggedInUser:e.loggedInUser}))}})))}}]),t}(n.Component),K=Object(d.g)(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(106);o.a.render(l.a.createElement(r.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,a,t){e.exports=t(107)},80:function(e,a,t){},81:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.3ff04a9c.chunk.js.map