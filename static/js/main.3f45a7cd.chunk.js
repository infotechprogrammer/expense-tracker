(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=n(1),s=(n(14),n(5)),i=n(2),r=n(7),u=(n(15),n(0)),j=function(e){var t=Object(l.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(l.useState)(""),r=Object(i.a)(s,2),j=r[0],o=r[1],d=Object(l.useState)(""),b=Object(i.a)(d,2),x=b[0],O=b[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),c(""),o(""),O("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{type:"date",min:"2019-01-01",max:"2024-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},o=(n(17),function(e){var t=Object(l.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(u.jsxs)("div",{className:"new-expense",children:[!a&&Object(u.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(u.jsx)(j,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})}),d=(n(18),function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})}),b=(n(19),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=(n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(u.jsxs)("div",{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__day",children:n}),Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__year",children:a})]})}),O=(n(21),function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(d,{className:"expense-item",children:[Object(u.jsx)(x,{date:e.date}),Object(u.jsx)("div",{className:"expense-item__description",children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})})}),v=(n(22),function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:" No expenses Found "}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(O,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),h=n(9),m=(n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),p=(n(24),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),f=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(u.jsx)(p,{dataPoints:n})},N=(n(25),function(e){var t=Object(l.useState)("2020"),n=Object(i.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(u.jsx)("div",{children:Object(u.jsxs)(d,{className:"expenses",children:[Object(u.jsx)(b,{selected:a,onChangeFilter:function(e){c(e)}}),Object(u.jsx)(f,{expenses:s}),Object(u.jsx)(v,{items:s})]})})}),_=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],g=function(){var e=Object(l.useState)(_),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(o,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(u.jsx)(N,{items:n})]})};c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.3f45a7cd.chunk.js.map