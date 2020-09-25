(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),o=a.n(r),s=(a(24),a(25),a(3)),c=a(2),i=a(14),m=a(15),u=a(18),h=a(17);a(26);var d=function(){return l.a.createElement("div",{id:"pageHeader"},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("h3",null,"Hello... It is you I'm looking for..."))};a(27);var p=function(e){return l.a.createElement("form",{className:"employeeSearch"},l.a.createElement("label",{className:"employeeSearch"},"Search for your colleague:\xa0"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"name",type:"text",className:"employeeSearch",placeholder:"Name Here"}),l.a.createElement("button",{className:"employeeSearch",onClick:e.handleFormSubmit},"Submit"))};a(28);var f=function(e){return console.log("The props inside Table = ",e),console.log("The props.sort inside table = ",e.sort),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Face to a Name"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name \xa0\xa0","ascend"===e.sort?l.a.createElement("i",{className:"fas fa-arrow-circle-down",onClick:e.handleSort}):l.a.createElement("i",{className:"fas fa-arrow-circle-up",onClick:e.handleSort})),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Phone Number"),l.a.createElement("th",null,"Address")),e.name?e.results.filter((function(t){return t.name.first.toLowerCase().startsWith(e.name)||t.name.last.toLowerCase().startsWith(e.name)})).map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("div",{id:"photoDiv",width:"50px"},l.a.createElement("img",{src:e.picture.large,alt:"{result.name.first + ' ' + result.name.last}",width:"50px"}))),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.location.street.number+" "+e.location.street.name,l.a.createElement("br",null),e.location.city+", "+e.location.state+" "+e.location.postcode))})):e.results.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("div",{id:"photoDiv",width:"50px"},l.a.createElement("img",{src:e.picture.large,alt:"{result.name.first + ' ' + result.name.last}",width:"50px"}))),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.location.street.number+" "+e.location.street.name,l.a.createElement("br",null),e.location.city+", "+e.location.state+" "+e.location.postcode))}))))},E=a(16),g=a.n(E),b=function(){return g.a.get("https://randomuser.me/api/?nat=us&inc=name,location,phone,email,picture&results=50")},v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",results:[],sort:"ascend"},e.generateUsers=function(){b().then((function(t){var a=t.data.results.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}));e.setState({results:a})})).catch((function(e){return console.log(e)}))},e.sortToggle=function(){"ascend"===e.state.sort?e.setState(Object(c.a)(Object(c.a)({},e.state),{},{sort:"descend"})):e.setState(Object(c.a)(Object(c.a)({},e.state),{},{sort:"ascend"}))},e.ascendSort=function(){var t=e.state.results.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}));e.setState(Object(c.a)(Object(c.a)({},e.state),{},{results:t}))},e.descendSort=function(){var t=e.state.results.sort((function(e,t){return t.name.last<e.name.last?-1:t.name.last>e.name.last?1:0}));e.setState(Object(c.a)(Object(c.a)({},e.state),{},{results:t}))},e.employeeSort=function(){"ascend"===e.state.sort?e.ascendSort():e.descendSort()},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value.trim().toLowerCase();e.setState(Object(s.a)({},a,n)),console.log("this.state after handleInputChange = ",e.state)},e.handleFormSubmit=function(t){t.preventDefault(),e.refineResults(e.state.name),console.log("The state after handleFormSubmit = ",e.state)},e.handleSort=function(t){t.preventDefault(),e.sortToggle().then((function(){return e.employeeSort()}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.generateUsers()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(p,{name:this.state.name,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),l.a.createElement(f,{name:this.state.name,results:this.state.results,sort:this.state.sort,handleSort:this.handleSort}),console.log("The state inside the render return is ",this.state))}}]),a}(l.a.Component);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b34ae80e.chunk.js.map