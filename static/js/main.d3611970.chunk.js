(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{24:function(e,t,a){e.exports=a(54)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),s=(a(29),a(30),a(4)),c=a(3),i=a(19),m=a(20),u=a(23),d=a(22);a(31);var h=function(){return r.a.createElement("div",{id:"pageHeader"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("h3",null,"Hello... It is you I'm looking for..."))};a(32);var p=function(e){return r.a.createElement("form",{className:"employeeSearch"},r.a.createElement("label",{className:"employeeSearch"},"Search for your colleague:\xa0"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"name",type:"text",className:"employeeSearch",placeholder:"Name Here"}),r.a.createElement("button",{className:"employeeSearch",onClick:e.handleFormSubmit},"Submit"))},E=a(6);a(37);function f(e){var t=e.sort,a=e.handleSort;return"ascend"===t?r.a.createElement(E.a,{icon:["fas","arrow-circle-down"],onClick:a}):r.a.createElement(E.a,{icon:["fas","arrow-circle-up"],onClick:a})}var g=function(e){return console.log("The props inside Table = ",e),console.log("The props.sort inside table = ",e.sort),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Face to a Name"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",{onClick:e.handleSort},"Last Name \xa0\xa0",r.a.createElement(f,{sort:e.sort,handleSort:e.handleSort})),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Phone Number"),r.a.createElement("th",null,"Address")),e.name?e.results.filter((function(t){return t.name.first.toLowerCase().startsWith(e.name)||t.name.last.toLowerCase().startsWith(e.name)})).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("div",{id:"photoDiv",width:"50px"},r.a.createElement("img",{src:e.picture.large,alt:"{result.name.first + ' ' + result.name.last}",width:"50px"}))),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.location.street.number+" "+e.location.street.name,r.a.createElement("br",null),e.location.city+", "+e.location.state+" "+e.location.postcode))})):e.results.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("div",{id:"photoDiv",width:"50px"},r.a.createElement("img",{src:e.picture.large,alt:"{result.name.first + ' ' + result.name.last}",width:"50px"}))),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.location.street.number+" "+e.location.street.name,r.a.createElement("br",null),e.location.city+", "+e.location.state+" "+e.location.postcode))}))))},b=a(21),v=a.n(b),S=function(){return v.a.get("https://randomuser.me/api/?nat=us&inc=name,location,phone,email,picture&results=50")},y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",results:[],sort:"ascend"},e.generateUsers=function(){S().then((function(t){var a=t.data.results.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}));e.setState({results:a})})).catch((function(e){return console.log(e)}))},e.sortToggle=function(){"ascend"===e.state.sort?(e.descendSort(),e.setState(Object(c.a)(Object(c.a)({},e.state),{},{sort:"descend"}))):(e.ascendSort(),e.setState(Object(c.a)(Object(c.a)({},e.state),{},{sort:"ascend"})))},e.ascendSort=function(){var t=e.state.results.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}));e.setState(Object(c.a)(Object(c.a)({},e.state),{},{results:t}))},e.descendSort=function(){var t=e.state.results.sort((function(e,t){return t.name.last<e.name.last?-1:t.name.last>e.name.last?1:0}));e.setState(Object(c.a)(Object(c.a)({},e.state),{},{results:t}))},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value.trim().toLowerCase();e.setState(Object(s.a)({},a,n)),console.log("this.state after handleInputChange = ",e.state)},e.handleSort=function(t){t.preventDefault(),console.log("Sort = ",e.state.sort),e.sortToggle(e.state.sort)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.generateUsers()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(p,{name:this.state.name,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),r.a.createElement(g,{name:this.state.name,results:this.state.results,sort:this.state.sort,handleSort:this.handleSort}),console.log("The state inside the render return is ",this.state))}}]),a}(r.a.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.d3611970.chunk.js.map