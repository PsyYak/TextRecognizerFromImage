(this.webpackJsonpTextRecognizerFromImage=this.webpackJsonpTextRecognizerFromImage||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(21),s=n.n(i),r=(n(27),n(6)),o=(n(28),n(22)),u=n.n(o),j=n(0);var l=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),s=Object(r.a)(i,2),o=s[0],l=s[1],g=Object(c.useState)("eng"),b=Object(r.a)(g,2),p=b[0],h=b[1],O=Object(c.useState)(""),x=Object(r.a)(O,2),d=x[0],v=x[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("input",{type:"file",onChange:function(e){"jpg"!==e.target.type||"png"!==e.target.type||"jpeg"!==e.target.type?(alert("Wrong file extention"),e.target.value=null):a(e.target.files[0])},accept:"image/png, image/jpeg, image/jpg"}),Object(j.jsxs)("select",{value:p,onChange:function(e){return h(e.target.value)},children:[Object(j.jsx)("option",{value:"eng",children:"English"}),Object(j.jsx)("option",{value:"heb",children:"Hebrew"}),Object(j.jsx)("option",{value:"fra",children:"French"}),Object(j.jsx)("option",{value:"ara",children:"Arabic"}),Object(j.jsx)("option",{value:"rus",children:"Russian"}),Object(j.jsx)("option",{value:"spa",children:"Spanish"})]}),Object(j.jsx)("div",{className:"submitButton",children:Object(j.jsx)("input",{type:"button",value:"Submit",onClick:function(){""!==d&&(v(""),l(0)),u.a.recognize(n,p,{logger:function(e){"recognizing text"===e.status&&l(e.progress)}}).then((function(e){var t=e.data.text;v(t)}))}})}),Object(j.jsx)("div",{className:"progressBar",children:Object(j.jsx)("progress",{value:o,max:1})}),""!==d&&Object(j.jsxs)("div",{className:"textResult",children:["Result: ",d]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),g()}},[[61,1,2]]]);
//# sourceMappingURL=main.2c70f7d1.chunk.js.map