(this["webpackJsonppain-scale"]=this["webpackJsonppain-scale"]||[]).push([[0],{26:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),s=(t(31),t(22)),i=t(17),m=t(18),o=t(24),u=t(19),d=t(25),p=t(7),b=t(5),E=function(){return l.a.createElement("div",{className:"banners"},l.a.createElement("i",{className:"banner-1"}),l.a.createElement("i",{className:"banner-2"}),l.a.createElement("i",{className:"banner-3"}),l.a.createElement("i",{className:"banner-4"}),l.a.createElement("i",{className:"banner-5"}))},v=function(e,a){return e===a?"active":""},f=function(e){var a=e.title,t=e.description,n=e.number,r=e.scaleNum,c=e.buttonHandler,s=e.reactKey,i=e.fieldValue;return l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"field-content"},l.a.createElement("h4",{className:"field-title"},n,". ",a),l.a.createElement("p",{className:"field-description"},t),l.a.createElement("i",{className:"word-break"}),function(e,a,t,n){switch(e){case 1:return l.a.createElement("div",{className:"scale-info","data-id":t},l.a.createElement("a",{href:"# ",className:"button ".concat(v(0,n)),onClick:a,"data-value":"0"},"Inte alls=0"),l.a.createElement("a",{href:"# ",className:"button ".concat(v(1,n)),onClick:a,"data-value":"1"},"S\xe4llan=1"),l.a.createElement("a",{href:"# ",className:"button ".concat(v(2,n)),onClick:a,"data-value":"2"},"Ibland=2"),l.a.createElement("a",{href:"# ",className:"button ".concat(v(3,n)),onClick:a,"data-value":"3"},"Ofta=3"));case 2:return l.a.createElement("div",{className:"scale-info","data-id":t},l.a.createElement("a",{href:"# ",className:"button ".concat(v(0,n)),onClick:a,"data-value":"0"},"Inte alls=0"),l.a.createElement("a",{href:"# ",className:"button ".concat(v(1,n)),onClick:a,"data-value":"1"},"Lite=1"),l.a.createElement("a",{href:"# ",className:"button ".concat(v(2,n)),onClick:a,"data-value":"2"},"M\xe5ttligt=2"),l.a.createElement("a",{href:"# ",className:"button ".concat(v(3,n)),onClick:a,"data-value":"3"},"Mycket=3"));default:return l.a.createElement(l.a.Fragment,null)}}(r,c,s,i)))},g=function(e){var a=e.state,t=e.buttonHandler;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"pain-scale"},l.a.createElement("h1",{className:"title"},"Bed\xf6mning"),l.a.createElement("p",{className:"intro"},"Observera personen och bed\xf6m graden av p\xe5verkan med skalan ",l.a.createElement("b",null,"0 till 3")," i punkt 1 till 6 nedan!"),function(e,a){return e.fields.map((function(e,t){return l.a.createElement(f,{title:e.title,description:e.description,number:t+1,key:t,reactKey:t,scaleNum:e.scaleNum,buttonHandler:a,fieldValue:e.fieldValue})}))}(a,t),l.a.createElement(p.b,{className:"link link-results",to:"/results"},"Se resultat >")))},N=t(9),k=t(13),h=t(23),y=function(e){var a=e.state,t=l.a.useState({longLasting:!1,accute:!1,mixed:!1,patientName:"",yourName:"",sent:"",spinner:!1}),n=Object(h.a)(t,2),r=n[0],c=n[1],s=function(e,t){var n=a.painPoints;return n>=e&&n<=t?"":"inactive"},i=function(e){e.persist();var a=e.target.value,t=e.target.name,n=e.target.type,l=e.target.checked;c("checkbox"==n?Object(k.a)({},r,Object(N.a)({},t,l)):Object(k.a)({},r,Object(N.a)({},t,a)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"result"},l.a.createElement("h3",null,"Resultat"),l.a.createElement("i",{className:"word-break"}),l.a.createElement("p",null,"Dina observation tyder p\xe5 att personens antagna sm\xe4rtniv\xe5 \xe4r:"),l.a.createElement("div",{className:"result-content"},l.a.createElement("div",{className:"result-scale"},l.a.createElement("span",{className:"none ".concat(s(0,2))},"Ingen (0-2)"),l.a.createElement("span",{className:"mild ".concat(s(3,7))},"Mild (3-7)"),l.a.createElement("span",{className:"moderate ".concat(s(8,13))},"M\xe5ttlig (8-13)"),l.a.createElement("span",{className:"accute ".concat(s(14,18))},"Sv\xe5r (14+)"),l.a.createElement("input",{className:"result-input",type:"text",name:"result-input",maxLength:"2",value:a.painPoints,readOnly:!0})),l.a.createElement("form",{className:"result-form",onSubmit:function(e){e.preventDefault(),e.persist(),c({spinner:!0});var t="\n        <ul>\n          ".concat(a.fields.map((function(e,a){return"<li>\n                <span>".concat(a+1,". ").concat(e.title,": </span>\n                <b>").concat(e.fieldValue,"</b>\n              </li>")})).join(""),"\n        </ul>\n\n        <span><b>Total: </b>").concat(a.painPoints,"</span>\n\n        <br></br>\n\n        <span><b>Sm\xe4rtniv\xe5: </b></span>\n        ").concat("inactive"==s(0,2)?"":"<span>Ingen (0-2)</span>","\n        ").concat("inactive"==s(3,7)?"":"<span>Mild (3-7)</span>","\n        ").concat("inactive"==s(8,13)?"":"<span>M\xe5ttlig (8-13)</span>","\n        ").concat("inactive"==s(14,18)?"":"<span>Sv\xe5r (14-18)</span>","\n\n        <br></br>\n        <br></br>\n\n        <span>Typ av sm\xe4rta</span>\n        <ul>\n          <li>\n            <b>L\xe5ngvarig: </b>").concat(r.lasting?"Ja":"Nej","\n          </li>\n          <li>\n            <b>Akut: </b>").concat(r.accute?"Ja":"Nej","\n          </li>\n          <li>\n            <b>Blandad: </b>").concat(r.mixed?"Ja":"Nej","\n          </li>\n        </ul>\n\n        <span><b>Namn p\xe5 patient: </b>").concat(r.patientName,"</span>\n        <br></br>\n        <span><b>Ditt namn: </b>").concat(r.yourName,"</span>\n      "),n={to_email:"Tommy.Boije@helsingborg.se",from_name:"Pain Scale App",from_email:"max.frederiksen@ecsolutions.se",reply_to:"max.frederiksen@ecsolutions.se",to_name:r.yourName,message_html:t};window.emailjs.send("gmail","template_BxjtD38x",n).then((function(e){c({sent:"Bed\xf6mning skickad!",spinner:!1})})).catch((function(e){return console.log(e)}))}},l.a.createElement("span",null,l.a.createElement("b",null,"Typ av sm\xe4rta")),l.a.createElement("br",null),l.a.createElement("span",null,"Ange typ av sm\xe4rta nedan"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"checkboxes"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"long-lasting"},"L\xe5ngvarig"),l.a.createElement("label",{htmlFor:"long-lasting"},"Akut"),l.a.createElement("label",{htmlFor:"long-lasting"},"Blandad")),l.a.createElement("div",null,l.a.createElement("input",{className:"input-checkbox",type:"checkbox",name:"lasting",checked:r.lasting,onChange:i}),l.a.createElement("input",{className:"input-checkbox",type:"checkbox",name:"accute",checked:r.accute,onChange:i}),l.a.createElement("input",{className:"input-checkbox",type:"checkbox",name:"mixed",checked:r.mixed,onChange:i}))),l.a.createElement("label",{htmlFor:"patient-name"},"Namn p\xe5 patient"),l.a.createElement("input",{className:"input-text",type:"text",name:"patientName",value:r.patientName,onChange:i}),l.a.createElement("label",{htmlFor:"your-name"},"Ditt namn"),l.a.createElement("input",{className:"input-text",type:"text",name:"yourName",value:r.yourName,onChange:i}),l.a.createElement("div",null,l.a.createElement(p.b,{to:"pain-scale",className:"previous"},"< F\xf6reg\xe5ende"),l.a.createElement("button",{type:"submit",className:"link"},"Skicka"),l.a.createElement("span",null,l.a.createElement("div",{class:"spinner ".concat(r.spinner?"":"hidden")},l.a.createElement("div",{class:"bounce1"}),l.a.createElement("div",{class:"bounce2"}),l.a.createElement("div",{class:"bounce3"})))),l.a.createElement("span",{class:"sent"},r.sent)))))},x=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(u.a)(a).call(this))).buttonHandler=function(a){a.preventDefault(),a.persist();var t=a.target.parentNode,n=t.getAttribute("data-id"),l=t.querySelectorAll(".button"),r=t.querySelector(".active").getAttribute("data-value"),c=a.target.getAttribute("data-value"),i=parseInt(c)-parseInt(r),m=Object(s.a)(e.state.fields);if(m[n].fieldValue=c,-1===Array.from(a.target.classList).indexOf("active")){var o=!0,u=!1,d=void 0;try{for(var p,b=l[Symbol.iterator]();!(o=(p=b.next()).done);o=!0){p.value.classList.remove("active")}}catch(E){u=!0,d=E}finally{try{o||null==b.return||b.return()}finally{if(u)throw d}}a.target.classList.add("active"),e.setState({painPoints:e.state.painPoints+i,fields:m},(function(){return console.log(e.state)}))}},e.state={painPoints:0,fields:[{title:"R\xf6stuttryck/ljud",description:"Tex om personen gnyr, j\xe4mrar sig eller l\xe5ter",scaleNum:1,fieldValue:0},{title:"Ansiktsuttryck",description:"Tex sp\xe4nd, rynkar n\xe4san, grimaserar eller ser r\xe4dd ut",scaleNum:1,fieldValue:0},{title:"F\xf6r\xe4ndrat kroppsspr\xe5k",description:"Tex rastl\xf6s, vaggar, skyddar en kroppsdel eller ihopkrupen",scaleNum:2,fieldValue:0},{title:"F\xf6r\xe4ndrat beteende",description:"Tex \xf6kad f\xf6rvirring, matv\xe4gran, \xf6kad eller minskad kroppsaktivitet",scaleNum:2,fieldValue:0},{title:"Fysiologisk f\xf6r\xe4ndring",description:"Tex f\xf6r\xe4ndrad kroppstemperatur, puls eller blodtryck, svettningar, rodnad eller blekhet i hyn",scaleNum:2,fieldValue:0},{title:"Kroppsliga f\xf6r\xe4ndringar",description:"Tex rivet skinn, tryckskador, kontrakturer eller andra skador",scaleNum:2,fieldValue:0}]},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement("div",{className:"page-content"},l.a.createElement(p.a,null,l.a.createElement(b.a,{exact:!0,path:"/",render:function(a){return l.a.createElement(g,Object.assign({},a,{state:e.state,buttonHandler:e.buttonHandler}))}}),l.a.createElement(b.a,{exact:!0,path:"/pain-scale",render:function(a){return l.a.createElement(g,Object.assign({},a,{state:e.state,buttonHandler:e.buttonHandler}))}}),l.a.createElement(b.a,{exact:!0,path:"/results",render:function(a){return l.a.createElement(y,Object.assign({},a,{state:e.state}))}}))))}}]),a}(n.Component);c.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.86ebe7d8.chunk.js.map