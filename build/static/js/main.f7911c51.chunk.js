(this["webpackJsonpapp-tarefas"]=this["webpackJsonpapp-tarefas"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),r=n.n(i),s=(n(12),n(6)),o=n(7),l=(n(13),n(0));var d=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(o.a)(i,2),d=r[0],f=r[1],u=function(e,t){var a=n.filter((function(n){return n.id==e&&(n.finalizada=t),n}));c(a),window.localStorage.setItem("tarefas",JSON.stringify(a))},j=function(){f(!d)},b=function(e){var t=n.filter((function(t){if(t.id!=e)return t}));c(t)};return Object(a.useEffect)((function(){void 0!=window.localStorage.getItem("tarefas")&&c(JSON.parse(window.localStorage.getItem("tarefas")))}),[]),Object(l.jsxs)("div",{className:"App",children:[d?Object(l.jsx)("div",{className:"modal",children:Object(l.jsxs)("div",{className:"modalContent",children:[Object(l.jsxs)("div",{className:"titulo",children:[Object(l.jsx)("h3",{children:"Adicionar sua tarefa"}),Object(l.jsx)("span",{onClick:function(){return j()},children:"X"})]}),Object(l.jsx)("input",{id:"content-tarefa",type:"text"}),Object(l.jsx)("button",{onClick:function(){return function(){var e=document.getElementById("content-tarefa");c([].concat(Object(s.a)(n),[{id:(new Date).getTime(),tarefa:e.value,finalizada:!1}])),window.localStorage.setItem("tarefas",JSON.stringify([].concat(Object(s.a)(n),[{id:(new Date).getTime(),tarefa:e.value,finalizada:!1}]))),f(!1)}()},children:"Salvar!"})]})}):Object(l.jsx)("div",{}),Object(l.jsx)("div",{onClick:function(){return j()},className:"addTarefa",children:"+"}),Object(l.jsxs)("div",{className:"boxTarefas",children:[Object(l.jsx)("h2",{children:"Minhas tarefas do dia!"}),n.map((function(e){return e.finalizada?Object(l.jsxs)("div",{className:"tarefaSingle",children:[Object(l.jsx)("p",{onClick:function(){return u(e.id,!1)},style:{textDecoration:"line-through"},children:e.tarefa}),Object(l.jsx)("span",{onClick:function(){return b(e.id)},style:{color:"red"},children:"X"})]}):Object(l.jsxs)("div",{className:"tarefaSingle",children:[Object(l.jsx)("p",{onClick:function(){return u(e.id,!0)},children:e.tarefa}),Object(l.jsx)("span",{onClick:function(){return b(e.id)},style:{color:"red"},children:"X"})]})}))]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.f7911c51.chunk.js.map