(this["webpackJsonppain-scale"]=this["webpackJsonppain-scale"]||[]).push([[0],{23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),s=(t(28),t(20)),i=t(15),m=t(16),u=t(21),o=t(17),d=t(22),p=t(5),E=t(6),b=function(){return l.a.createElement("div",{className:"banners"},l.a.createElement("i",{className:"banner-1"}),l.a.createElement("i",{className:"banner-2"}),l.a.createElement("i",{className:"banner-3"}),l.a.createElement("i",{className:"banner-4"}),l.a.createElement("i",{className:"banner-5"}))},v=function(e,a){return e==a?"active":""},f=function(e){var a=e.title,t=e.description,n=e.number,r=e.scaleNum,c=e.buttonHandler,s=e.reactKey,i=e.fieldValue;return l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-content"},l.a.createElement("h4",{className:"field-title"},n,". ",a),l.a.createElement("p",{className:"field-description"},t),l.a.createElement("i",{className:"word-break"}),function(e,a,t,n){switch(console.log(n),e){case 1:return l.a.createElement("div",{className:"scale-info","data-id":t},l.a.createElement("a",{className:"button ".concat(v(0,n)),onClick:a,"data-value":"0",href:"#"},"Inte alls=0"),l.a.createElement("a",{className:"button ".concat(v(1,n)),onClick:a,"data-value":"1",href:"#"},"S\xe4llan=1"),l.a.createElement("a",{className:"button ".concat(v(2,n)),onClick:a,"data-value":"2",href:"#"},"Ibland=2"),l.a.createElement("a",{className:"button ".concat(v(3,n)),onClick:a,"data-value":"3",href:"#"},"Ofta=3"));case 2:return l.a.createElement("div",{className:"scale-info","data-id":t},l.a.createElement("a",{className:"button ".concat(v(0,n)),onClick:a,"data-value":"0",href:"#"},"Inte alls=0"),l.a.createElement("a",{className:"button ".concat(v(1,n)),onClick:a,"data-value":"1",href:"#"},"Lite=1"),l.a.createElement("a",{className:"button ".concat(v(2,n)),onClick:a,"data-value":"2",href:"#"},"M\xe5ttligt=2"),l.a.createElement("a",{className:"button ".concat(v(3,n)),onClick:a,"data-value":"3",href:"#"},"Mycket=3"));default:return l.a.createElement(l.a.Fragment,null)}}(r,c,s,i)))},k=function(e){var a=e.state,t=e.buttonHandler;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"pain-scale"},l.a.createElement("h1",{className:"title"},"Bed\xf6mning"),l.a.createElement("p",{className:"intro"},"Observera personen och bed\xf6m graden av p\xe5verkan med skalan ",l.a.createElement("b",null,"0 till 3")," i punkt 1 till 6 nedan!"),function(e,a){return e.fields.map((function(e,t){return l.a.createElement(f,{title:e.title,description:e.description,number:t+1,key:t,reactKey:t,scaleNum:e.scaleNum,buttonHandler:a,fieldValue:e.fieldValue})}))}(a,t),l.a.createElement(p.b,{className:"link link-results",to:"/results"},"Se resultat >")))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"landing"},l.a.createElement("h3",null,"Abbey pain scale"),l.a.createElement("br",null),l.a.createElement("p",null,"Ett verktyg f\xf6r bed\xf6mning av sm\xe4rta hos personer med demenssjukdom, som har sv\xe5rt att beskriva sin sm\xe4rta i tal.",l.a.createElement("br",null),l.a.createElement("br",null),"Observera personen och bed\xf6m graden av p\xe5verkan med skalan ",l.a.createElement("b",null,"0 till 3")," i punkt ",l.a.createElement("b",null,"1 till 6"),"."),l.a.createElement(p.b,{className:"link",to:"/pain-scale"},"B\xf6rja"),l.a.createElement("img",{src:"./logo.svg",alt:"Helsingborgs Stadsvapen",className:"logo"})))},N=function(e,a,t){var n=t.painPoints;return n>=e&&n<=a?"":"inactive"},h=function(e){var a=e.state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"result"},l.a.createElement("h3",null,"Resultat"),l.a.createElement("i",{className:"word-break"}),l.a.createElement("p",null,"Dina observation tyder p\xe5 att personens antagna sm\xe4rtniv\xe5 \xe4r:"),l.a.createElement("div",{className:"result-content"},l.a.createElement("div",{className:"result-scale"},l.a.createElement("span",{className:"none ".concat(N(0,2,a))},"Ingen (0-2)"),l.a.createElement("span",{className:"mild ".concat(N(3,7,a))},"Mild (3-7)"),l.a.createElement("span",{className:"moderate ".concat(N(8,13,a))},"M\xe5ttlig (8-13)"),l.a.createElement("span",{className:"accute ".concat(N(14,18,a))},"Sv\xe5r (14+)"),l.a.createElement("input",{className:"result-input",type:"text",name:"result-input",maxLength:"2",value:a.painPoints,readOnly:!0})),l.a.createElement("form",{className:"result-form"},l.a.createElement("span",null,l.a.createElement("b",null,"Typ av sm\xe4rta")),l.a.createElement("br",null),l.a.createElement("span",null,"Ange typ av sm\xe4rta nedan"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"checkboxes"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"long-lasting"},"L\xe5ngvarig"),l.a.createElement("label",{htmlFor:"long-lasting"},"Akut"),l.a.createElement("label",{htmlFor:"long-lasting"},"Blandad")),l.a.createElement("div",null,l.a.createElement("input",{className:"input-checkbox",type:"checkbox",name:"long-lasting"}),l.a.createElement("input",{className:"input-checkbox",type:"checkbox",name:"accute"}),l.a.createElement("input",{className:"input-checkbox",type:"checkbox",name:"mixed"}))),l.a.createElement("label",{htmlFor:"patient-name"},"Namn p\xe5 patient"),l.a.createElement("input",{type:"text",name:"name"}),l.a.createElement("label",{htmlFor:"your-name"},"Ditt namn"),l.a.createElement("input",{type:"text",name:"your-name"})),l.a.createElement(p.b,{to:"pain-scale",className:"previous"},"< F\xf6reg\xe5ende"),l.a.createElement("a",{href:"#",className:"link"},"Skicka"))))},y=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(u.a)(this,Object(o.a)(a).call(this))).buttonHandler=function(a){a.preventDefault(),a.persist();var t=a.target.parentNode,n=t.getAttribute("data-id"),l=t.querySelectorAll(".button"),r=t.querySelector(".active").getAttribute("data-value"),c=a.target.getAttribute("data-value"),i=parseInt(c)-parseInt(r),m=Object(s.a)(e.state.fields);if(m[n].fieldValue=c,-1===Array.from(a.target.classList).indexOf("active")){var u=!0,o=!1,d=void 0;try{for(var p,E=l[Symbol.iterator]();!(u=(p=E.next()).done);u=!0){p.value.classList.remove("active")}}catch(b){o=!0,d=b}finally{try{u||null==E.return||E.return()}finally{if(o)throw d}}a.target.classList.add("active"),e.setState({painPoints:e.state.painPoints+i,fields:m},(function(){return console.log(e.state)}))}},e.state={painPoints:0,fields:[{title:"R\xf6stuttryck/ljud",description:"Tex om personen gnyr, j\xe4mrar sig eller l\xe5ter",scaleNum:1,fieldValue:0},{title:"Ansiktsuttryck",description:"Tex sp\xe4nd, rynkar n\xe4san, grimaserar eller ser r\xe4dd ut",scaleNum:1,fieldValue:0},{title:"F\xf6r\xe4ndrat kroppsspr\xe5k",description:"Tex rastl\xf6s, vaggar, skyddar en kroppsdel eller ihopkrupen",scaleNum:2,fieldValue:0},{title:"F\xf6r\xe4ndrat beteende",description:"Tex \xf6kad f\xf6rvirring, matv\xe4gran, \xf6kad eller minskad kroppsaktivitet",scaleNum:2,fieldValue:0},{title:"Fysiologisk f\xf6r\xe4ndring",description:"Tex f\xf6r\xe4ndrad kroppstemperatur, puls eller blodtryck, svettningar, rodnad eller blekhet i hyn",scaleNum:2,fieldValue:0},{title:"Kroppsliga f\xf6r\xe4ndringar",description:"Tex rivet skinn, tryckskador, kontrakturer eller andra skador",scaleNum:2,fieldValue:0}]},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement("div",{className:"page-content"},l.a.createElement(p.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:g}),l.a.createElement(E.a,{exact:!0,path:"/pain-scale",render:function(a){return l.a.createElement(k,Object.assign({},a,{state:e.state,buttonHandler:e.buttonHandler}))}}),l.a.createElement(E.a,{exact:!0,path:"/results",render:function(a){return l.a.createElement(h,Object.assign({},a,{state:e.state}))}}))))}}]),a}(n.Component);c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.97b497df.chunk.js.map