(this["webpackJsonptodo-list-api"]=this["webpackJsonptodo-list-api"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),r=n.n(l),o=(n(10),n(4)),i=n(1),m=function(e){var t=Object(a.useState)(e.title),n=Object(i.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)(!1),m=Object(i.a)(o,2),u=m[0],s=m[1],d=Object(a.useRef)(null),p=function(){s(!u)},f=function(){e.onDelete(d.current.id)},b=function(){e.onComplete(d.current.id)},E=function(){e.onUpdate(d.current.id,l),s(!1)};return c.a.createElement("div",{id:e.id,ref:d,className:"list-group-item list-group-item-action ".concat(e.completed?"list-group-item-secondary":"")},u?c.a.createElement("input",{autoFocus:!0,onChange:function(e){return r(e.target.value)},value:l,onBlur:E,className:"form-control"}):c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{onClick:b,className:"btn ".concat(e.completed?"btn-outline-dark":"btn-outline-primary")},"\u2713"),c.a.createElement("div",{onClick:p,className:"btn flex-fill text-left"},l),c.a.createElement("div",{onClick:f,className:"btn btn-outline-danger"},"X")))},u=function(e){var t=e.items.filter((function(e){return!0!==e.completed})),n=e.items.filter((function(e){return!0===e.completed}));return c.a.createElement("div",{className:"list"},c.a.createElement("div",{className:"list-group"},t.map((function(t){return c.a.createElement(m,{id:t.id,key:t.id,title:t.title,onUpdate:e.onUpdate,onDelete:e.onDelete,onComplete:e.onComplete})})),c.a.createElement("div",null,c.a.createElement("hr",null)),n.map((function(t){return c.a.createElement(m,{id:t.id,key:t.id,title:t.title,completed:!0,onUpdate:e.onUpdate,onDelete:e.onDelete,onComplete:e.onComplete})}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("p",null,"".concat(t.length," pending / ").concat(n.length," completed")))))},s=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],r=n[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l.length>0&&(e.onNewTodo(l),r(""))}},c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){return r(e.target.value)}}),c.a.createElement("span",{className:"input-group-btn"},c.a.createElement("button",{type:"submit",className:"btn btn-success"},"Add"))))};var d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1];return c.a.createElement("div",{id:"app",className:"mt-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card bg-gray"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null,"To-Dos"),c.a.createElement(s,{onNewTodo:function(e){l([].concat(Object(o.a)(n),[{userId:1,id:Date.now(),completed:!1,title:e}]))}}),c.a.createElement("br",null),c.a.createElement(u,{items:n,onUpdate:function(e,t){var a=n.map((function(n){return Number(n.id)===Number(e)&&(n.title=t),n}));l(a)},onDelete:function(e){var t=n.filter((function(t){return Number(t.id)!==Number(e)}));l(t)},onComplete:function(e){var t=n.map((function(t){return Number(t.id)===Number(e)&&(t.completed=!t.completed),t}));l(t)}})))))))};r.a.render(c.a.createElement(d,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.3d303504.chunk.js.map