"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[61],{1061:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(9434),r=n(8097),s="ContactForm_contact-form__1+2ej",c="ContactForm_contact-form-label__Jn-Uy",l="ContactForm_contact-form-input__TVALc",o="ContactForm_contact-form-button__HJUUm",i=n(184),u=function(){var e=(0,a.I0)();return(0,i.jsxs)("form",{className:s,onSubmit:function(t){t.preventDefault();var n={name:t.currentTarget.elements.name.value,number:t.currentTarget.elements.number.value};e((0,r.uK)(n)),t.currentTarget.reset()},children:[(0,i.jsxs)("label",{className:c,children:["Name",(0,i.jsx)("input",{className:l,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,i.jsxs)("label",{className:c,children:["Number",(0,i.jsx)("input",{className:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,i.jsx)("button",{className:o,type:"submit",children:"Add contact"})]})},m=n(6351),d=n(2791),h=n(1247),_="ContactList_contact-list__GnW-D",f="ContactList_contact-list-item__lrLiS",p="ContactList_contact-list-button__X3OtI",x=function(){var e=(0,a.I0)(),t=(0,a.v9)(m.AD),n=(0,a.v9)(m.Af),s=(0,a.v9)(m.Cc),c=(0,a.v9)(m.Uv);(0,d.useEffect)((function(){e((0,r.ll)())}),[e]);var l=function(){var e=t.toLowerCase().trim();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),o=Array.isArray(n)&&n.length>0;return(0,i.jsxs)("ul",{className:_,children:[s&&(0,i.jsx)(h.Z,{}),c&&(0,i.jsx)("p",{children:c}),o&&l.map((function(t){var n=t.name,a=t.number,s=t.id;return(0,i.jsxs)("li",{className:f,children:[n,": ",a,(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:p,onClick:function(){return e((0,r.GK)(s))},children:"Delete"})})]},s)}))]})},v=n(6895),j="Filter_filter-input__dFgnI",b=function(){var e=(0,a.v9)(m.AD),t=(0,a.I0)();return(0,i.jsx)("input",{className:j,type:"text",placeholder:"Search by name",value:e,onChange:function(e){t((0,v.T)(e.target.value))}})},C=n(9599),N=function(){var e=(0,a.v9)(m.Cc);return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:C.Z.container,children:[(0,i.jsx)("h1",{className:C.Z.title,children:"Phonebook"}),(0,i.jsx)(u,{}),(0,i.jsx)("h2",{className:C.Z.title,children:"Contacts"}),(0,i.jsx)(b,{}),e&&(0,i.jsx)(h.Z,{})&&(0,i.jsx)("b",{children:"Request in progress..."}),(0,i.jsx)(x,{})]})})}}}]);
//# sourceMappingURL=61.c0cb92b5.chunk.js.map