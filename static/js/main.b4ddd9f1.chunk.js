(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{115:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(20),r=n.n(i),s=(n(115),n(52)),o=n(26),l=n(39),d=n(32),j=n(143),b=n(145),u=n(106),O=n(149),p=n(42),m=n.n(p),x=n(141),f=n(109),g=n(146),h=n(10),v=function(e){var t=e.item,n=e.onDelete,c=e.onToggle;console.log("item",t);var a=[],i=[];return t.isCompleted&&(a.push("done"),i.push("active")),Object(h.jsxs)("li",{className:"ant-list-item",children:[Object(h.jsx)("span",{className:a.join(" "),children:t.title}),Object(h.jsxs)("div",{className:"app-wrap",children:[Object(h.jsx)(f.a,{className:i,onClick:function(){return c(t.id)}}),Object(h.jsx)(g.a,{onClick:function(){return n(t.id)}})]})]},t.id)},C=n(148),T={"\u0412\u0441\u0435":function(){return!0},"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435":function(e){return!e.isCompleted},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435":function(e){return e.isCompleted}},k=Object.keys(T),S=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle,i=e.onSort,r=Object(c.useState)("\u0412\u0441\u0435"),s=Object(d.a)(r,2),o=s[0],l=s[1],b=j.a.Text,O=k.map((function(e){return Object(h.jsx)(u.a,{"aria-pressed":"true",onClick:function(){return l(e)},children:e},e)}));return Object(h.jsx)(x.b,{size:"large",header:Object(h.jsxs)("div",{className:"app-wrap",children:[Object(h.jsxs)(b,{strong:!0,children:["\u041a\u043e\u043b-\u0432\u043e \u0437\u0430\u0434\u0430\u0447 ",t.length]}),Object(h.jsx)(C.a,{onClick:function(){return i()}})]}),footer:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"mr-2",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c: "}),O]}),bordered:!0,dataSource:t.filter(T[o]),renderItem:function(e){return Object(h.jsx)(v,{item:e,onDelete:n,onToggle:a},e.id)}})},I=n(87),D=n(142);var N=function(e){var t=e.onDelete,n=e.columnsFromBackend,a=Object(c.useState)(n),i=Object(d.a)(a,2),r=i[0],j=i[1];return Object(h.jsx)("div",{className:"app-wrap",children:Object(h.jsx)(I.a,{onDragEnd:function(e){return function(e,t,n){if(e.destination){var c=e.source,a=e.destination;if(c.droppableId!==a.droppableId){var i,r=t[c.droppableId],j=t[a.droppableId],b=Object(s.a)(r.items),u=Object(s.a)(j.items),O=b.splice(c.index,1),p=Object(d.a)(O,1)[0];u.splice(a.index,0,p),n(Object(o.a)(Object(o.a)({},t),{},(i={},Object(l.a)(i,c.droppableId,Object(o.a)(Object(o.a)({},r),{},{items:b})),Object(l.a)(i,a.droppableId,Object(o.a)(Object(o.a)({},j),{},{items:u})),i)))}else{var m=t[c.droppableId],x=Object(s.a)(m.items),f=x.splice(c.index,1),g=Object(d.a)(f,1)[0];x.splice(a.index,0,g),n(Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},c.droppableId,Object(o.a)(Object(o.a)({},m),{},{items:x}))))}}}(e,r,j)},children:Object.entries(r).map((function(e,n){var c=Object(d.a)(e,2),a=c[0],i=c[1];return Object(h.jsx)(D.a,{title:i.name,style:{width:400},children:Object(h.jsx)(I.c,{droppableId:a,children:function(e,n){return Object(h.jsxs)("div",Object(o.a)(Object(o.a)({className:"ant-card-body"},e.droppableProps),{},{ref:e.innerRef,style:{background:n.isDraggingOver?"#bae7ff":""},children:[i.items.map((function(e,n){return Object(h.jsx)(I.b,{draggableId:e.id,index:n,children:function(n,c){return Object(h.jsxs)("div",Object(o.a)(Object(o.a)(Object(o.a)({className:"todo-drag-item",ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{style:Object(o.a)({backgroundColor:c.isDragging?"#263B4A":""},n.draggableProps.style),children:[e.title,Object(h.jsx)(g.a,{onClick:function(){return t(e.id)}})]}))}},e.id)})),e.placeholder]}))}},a)},a)}))})})},y=n(144),F=n(110),A=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(d.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)(!1),o=Object(d.a)(s,2),l=o[0],j=o[1];return Object(h.jsxs)("form",{className:"app-flex",onSubmit:function(e){e.preventDefault(),i.trim()?(t({title:i,isCompleted:l}),r(""),j(!1)):alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a \u0437\u0430\u0434\u0430\u0447\u0435!")},children:[Object(h.jsx)(y.a,{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438...",value:i,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)(u.a,{type:"primary",htmlType:"submit",icon:Object(h.jsx)(F.a,{}),size:"large",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})};var L=function(){var e=j.a.Title,t=b.a.Header,n=b.a.Footer,a=b.a.Content,i=Object(c.useState)([{id:m()(),title:"Text5",isCompleted:!1},{id:m()(),title:"Lorem ipsum, quisque",isCompleted:!1},{id:m()(),title:"Lorem ipsum",isCompleted:!1},{id:m()(),title:"Text3 Text3 Text3",isCompleted:!1},{id:m()(),title:"Text4",isCompleted:!1}]),r=Object(d.a)(i,2),p=r[0],x=r[1],f=Object(c.useMemo)((function(){var e;return e={},Object(l.a)(e,m()(),{name:"Active",items:p}),Object(l.a)(e,m()(),{name:"Completed",items:[]}),e}),[p]),g=Object(c.useState)(!0),v=Object(d.a)(g,2),C=v[0],T=v[1],k=function(e){x(p.filter((function(t){return t.id!==e})))},I=function(e){x(p.map((function(t){return t.id===e&&(t.isCompleted=!t.isCompleted),t})))},D=function(){x(Object(s.a)(p).sort((function(e,t){return e.title.localeCompare(t.title)})))};return Object(h.jsxs)(b.a,{children:[Object(h.jsxs)(t,{children:[Object(h.jsx)(e,{children:"TO-DO"}),Object(h.jsxs)(e,{level:2,children:["Mode:"," ",Object(h.jsxs)(u.a,{ghost:!0,className:C?"app-btn-classic":"app-btn-drag",onClick:function(){return T(C=!C)},children:[C?"CLASSIC":"DRAGGABLE",Object(h.jsx)(O.a,{className:C?"mode":"not-mode"})]})]})]}),Object(h.jsxs)(a,{children:[Object(h.jsx)("div",{className:"app-background"}),Object(h.jsx)(A,{onAdd:function(e){var t=m()(),n=Object(o.a)({id:t},e);x([].concat(Object(s.a)(p),[n]))}}),C?Object(h.jsx)(S,{tasks:p,onDelete:k,onToggle:I,onSort:D}):Object(h.jsx)(N,{columnsFromBackend:f,onDelete:k,onToggle:I,onSort:D})]}),Object(h.jsx)(n,{children:Object(h.jsx)(e,{level:2,children:"LIST"})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),w()}},[[138,1,2]]]);
//# sourceMappingURL=main.b4ddd9f1.chunk.js.map