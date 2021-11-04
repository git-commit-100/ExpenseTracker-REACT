(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(8),i=a.n(l),s=(a(14),a(5)),r=a(2),u=a(9),o=(a(15),a(16),a(0)),d=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar-inner",children:Object(o.jsx)("div",{className:"chart-bar-fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar-label",children:e.label})]})},j=function(e){var t=e.dataPoints.map((function(e){return e.value})),a=Math.max.apply(Math,Object(s.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(d,{value:e.value,maxValue:a,label:e.label},e.label)}))})},b=(a(18),function(e){var t,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],n=Object(u.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var c=t.value;a[c.date.getMonth()].value+=c.amount}}catch(l){n.e(l)}finally{n.f()}return Object(o.jsx)("div",{className:"expense-chart",children:Object(o.jsx)(j,{dataPoints:a})})});a(19);var v=function(e){return Object(o.jsxs)("div",{className:"filter-date",children:[Object(o.jsx)("label",{children:"Filter By Year"}),Object(o.jsxs)("select",{value:e.selected,name:"filterDate",onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2019",children:"2019"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2022",children:"2022"})]})]})};a(20);var x=function(e){var t=e.date;return Object(o.jsxs)("div",{className:"date",children:[Object(o.jsx)("div",{className:"date_month",children:t.toLocaleDateString("en-US",{month:"long"})}),Object(o.jsx)("div",{className:"date_day",children:t.toLocaleDateString("en-US",{day:"2-digit"})}),Object(o.jsx)("div",{className:"date_year",children:t.toLocaleDateString("en-US",{year:"numeric"})})]})};a(21);var m=function(e){return Object(o.jsxs)("div",{className:"expenseItem",children:[Object(o.jsx)(x,{date:e.date}),Object(o.jsx)("div",{className:"hidden",children:e.id}),Object(o.jsx)("div",{className:"title",children:e.title}),Object(o.jsxs)("div",{className:"amount",children:["$",e.amount]})]})};a(22);var O=function(e){var t=Object(n.useState)("2021"),a=Object(r.a)(t,2),c=a[0],l=a[1],i=e.items.filter((function(e){var t=e.date.getFullYear().toString();return t===c&&t})),s=Object(o.jsx)("p",{className:"no-expenses",children:"Oops ! No Entry Found"});return i.length>0&&(s=i.map((function(e){return Object(o.jsx)(m,{title:e.title,amount:e.amount,date:e.date},e.id)}))),Object(o.jsxs)("div",{className:"expenses",children:[Object(o.jsx)(v,{selected:c,onChangeFilter:function(e){l(e)}}),Object(o.jsx)(b,{expenses:i}),s]})},p=a(7);a(23);var h=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),s=Object(r.a)(i,2),u=s[0],d=s[1],j=Object(n.useState)(""),b=Object(r.a)(j,2),v=b[0],x=b[1];return Object(o.jsx)("div",{className:"expense-form",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={title:c,amount:+u,date:new Date(v)};e.onSaveExpenseData(a),l(""),d(""),x("")},children:[Object(o.jsxs)("div",{className:"title-input-wrap",children:[Object(o.jsx)("label",{children:"Title : \xa0"}),Object(o.jsx)("input",{type:"text",id:"title-input",required:!0,value:c,autoComplete:"off",onChange:function(e){l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"amount-input-wrap",children:[Object(o.jsx)("label",{children:"Amount : \xa0"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",id:"amount-input",required:!0,value:u,autoComplete:"off",onChange:function(e){d(e.target.value)}})]}),Object(o.jsxs)("div",{className:"date-input-wrap",children:[Object(o.jsx)("label",{children:"Date : \xa0"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",id:"date-input",required:!0,value:v,autoComplete:"off",onChange:function(e){x(e.target.value)}})]}),Object(o.jsx)("button",{type:"button",className:"cancel",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",className:"add-expense-btn",children:"Add Expense"})]})})};a(24);var f=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),c=a[0],l=a[1];return Object(o.jsxs)("div",{className:"expense-input",children:[!1===c&&Object(o.jsx)("button",{className:"go-to-expense-form",onClick:function(){l(!0)},children:"Add Your Expense Here"}),!0===c&&Object(o.jsx)(h,{onSaveExpenseData:function(t){var a=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpenseData(a)},onCancel:function(){l(!1)}})]})},g=(a(25),[{id:"e1",title:"Car Insurance",date:new Date("2/28/19"),amount:"798.99"},{id:"e2",title:"House Rent",date:new Date("10/08/20"),amount:"399.99"},{id:"e3",title:"Laptop",date:new Date("5/24/21"),amount:"700.99"},{id:"e4",title:"Toilet Paper",date:new Date("9/21/21"),amount:"160.99"},{id:"e5",title:"Wooden Desk",date:new Date("2/21/21"),amount:"499.99"},{id:"e6",title:"Groceries",date:new Date("6/21/21"),amount:"200"},{id:"e7",title:"Repaired Mobile",date:new Date("11/21/21"),amount:"649.99"}]);var N=function(){var e=Object(n.useState)(g),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(f,{onAddExpenseData:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(o.jsx)(O,{items:a})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),l(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),D()}],[[26,1,2]]]);
//# sourceMappingURL=main.20a8771a.chunk.js.map