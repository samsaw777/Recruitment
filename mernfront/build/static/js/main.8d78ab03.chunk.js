(this.webpackJsonpmernfront=this.webpackJsonpmernfront||[]).push([[0],{30:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(32),i=n.n(a),l=(n(38),n(39),n(14)),r=n(19),d=n(11),j=n(66),o=n(67),m=n(68),h=(n(40),n(18));var b=n(0),u={fullname:"",secondname:"",lastname:"",laneone:"",lanetwo:"",city:"",state:"",pincode:"",country:"",phonenumber:"",email:"",birthdate:"",education:"",skills:"",qualification:""};var x=function(){var e=Object(c.useState)(u),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)({}),i=Object(d.a)(a,2),x=i[0],O=i[1];console.log(x);var p=function(e){var t=e.target,c=t.name,a=t.value;s(Object(r.a)(Object(r.a)({},n),{},Object(l.a)({},c,a)))};return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:"headerDiv",children:[Object(b.jsx)("h1",{children:"RMS Connect"}),Object(b.jsx)("h3",{children:"Recruitment Application"}),Object(b.jsx)("h6",{children:"Resources are hired to give results, not resources!"})]}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(function(e,t,n){var c={};if(e.fullname&&e.secondname&&e.lastname&&e.laneone&&e.lanetwo&&e.city&&e.state&&e.pincode&&e.country&&e.phonenumber&&e.email&&e.birthdate&&e.education&&e.skills&&e.qualification)if(e.fullname)if(e.secondname)if(e.lastname)if(e.laneone)if(e.lanetwo)if(e.city)if(e.country)if(e.state)if(e.pincode)if(e.email)if(e.phonenumber)if(e.skills)if(e.qualification)if(e.education){var s=e.fullname+" "+e.secondname+" "+e.lastname;h.post("/",{fullname:s,streetone:e.laneone,streettwo:e.lanetwo,city:e.city,state:e.state,pincode:e.pincode,country:e.country,number:e.phonenumber,email:e.email,birthdate:e.birthdate,education:e.education,skills:e.skills,qualification:e.qualification}).then((function(e){console.log(e,"Signature added!"),t(n)})).catch((function(e){console.log(e.message,"Signature not added")}))}else c.education="Education required";else c.qualification="Qualification required";else c.skills="Skills required";else c.phonenumber="Phonenumber required";else c.email="Email required";else c.pincode="Pincode required";else c.state="State required";else c.country="Country required";else c.city="City required";else c.lanetwo="Address required";else c.laneone="Address required";else c.lastname="Last name required";else c.secondname="Second name required";else c.fullname="First name required";else c.fullname="First name required",c.lastname="Last name required",c.secondname="Second name required",c.laneone="Address required",c.lanetwo="Address required",c.city="City required",c.state="State required",c.country="Country required",c.phonenumber="Phone Number required",c.education="Education required",c.skills="Skills required",c.qualification="Qualification required",c.email="Email required",c.birthdate="Birthdate required",c.pincode="Pincode required";return c}(n,s,u))},children:[Object(b.jsxs)("div",{className:"partOne",children:[Object(b.jsx)("div",{className:"partHead",children:Object(b.jsx)("h4",{className:"phead",children:"Personal Information"})}),Object(b.jsx)("div",{className:"inputPart",children:Object(b.jsxs)(o.a,{className:"Row",children:[Object(b.jsx)(m.a,{lg:4,md:4,sm:12,children:Object(b.jsx)("label",{children:"FullName:"})}),Object(b.jsx)(m.a,{lg:8,md:8,sm:12,children:Object(b.jsxs)(o.a,{children:[Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"fullname",value:n.fullname,onChange:p,placeholder:"First Name"}),Object(b.jsx)("div",{style:{color:"red"},children:x.fullname})]}),Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"secondname",value:n.secondname,onChange:p,placeholder:"Second Name"}),Object(b.jsx)("div",{style:{color:"red"},children:x.secondname})]}),Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"lastname",value:n.lastname,onChange:p,placeholder:"Last Name"}),Object(b.jsx)("div",{style:{color:"red"},children:x.lastname})]})]})})]})}),Object(b.jsxs)("div",{className:"inputPart",children:[Object(b.jsxs)(o.a,{className:"Row",children:[Object(b.jsx)(m.a,{lg:4,md:4,sm:12,children:Object(b.jsx)("label",{children:"Address:"})}),Object(b.jsxs)(m.a,{lg:8,md:8,sm:12,children:[Object(b.jsx)(o.a,{children:Object(b.jsxs)(m.a,{lg:12,md:12,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"laneone",value:n.laneone,onChange:p,placeholder:"Street Address"}),Object(b.jsx)("div",{style:{color:"red"},children:x.laneone})]})}),Object(b.jsx)(o.a,{className:"row",children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)("input",{type:"text",name:"lanetwo",value:n.lanetwo,onChange:p,placeholder:"Street Address Line 1"}),Object(b.jsx)("div",{style:{color:"red"},children:x.lanetwo})]})}),Object(b.jsxs)(o.a,{className:"row",children:[Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"city",value:n.city,onChange:p,placeholder:"City"}),Object(b.jsx)("div",{style:{color:"red"},children:x.city})]}),Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"state",value:n.state,onChange:p,placeholder:"State"}),Object(b.jsx)("div",{style:{color:"red"},children:x.state})]})]}),Object(b.jsxs)(o.a,{className:"row",children:[Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"pincode",value:n.pincode,onChange:p,placeholder:"Pincode"}),Object(b.jsx)("div",{style:{color:"red"},children:x.pincode})]}),Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"country",value:n.country,onChange:p,placeholder:"Country"}),Object(b.jsx)("div",{style:{color:"red"},children:x.country})]})]})]})]}),Object(b.jsx)("div",{className:"inputPart",children:Object(b.jsxs)(o.a,{className:"Row",children:[Object(b.jsx)(m.a,{lg:4,md:4,sm:12,children:Object(b.jsx)("label",{children:"Phone Number:"})}),Object(b.jsx)(m.a,{lg:8,md:8,sm:12,children:Object(b.jsx)(o.a,{className:"row",children:Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"phonenumber",value:n.phonenumber,onChange:p,placeholder:"Phone Number"}),Object(b.jsx)("div",{style:{color:"red"},children:x.phonenumber})]})})})]})}),Object(b.jsx)("div",{className:"inputPart",children:Object(b.jsxs)(o.a,{className:"Row",children:[Object(b.jsx)(m.a,{lg:4,md:4,sm:12,children:Object(b.jsx)("label",{children:"Email:"})}),Object(b.jsx)(m.a,{lg:8,md:8,sm:12,children:Object(b.jsx)(o.a,{className:"row",children:Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"email",value:n.email,onChange:p,placeholder:"Eg: name@example.com"}),Object(b.jsx)("div",{style:{color:"red"},children:x.email})]})})})]})}),Object(b.jsx)("div",{className:"inputPart",children:Object(b.jsxs)(o.a,{className:"Row",children:[Object(b.jsx)(m.a,{lg:4,md:4,sm:12,children:Object(b.jsx)("label",{children:"Birthdate:"})}),Object(b.jsx)(m.a,{lg:8,md:8,sm:12,children:Object(b.jsx)(o.a,{className:"row",children:Object(b.jsxs)(m.a,{lg:4,md:4,sm:12,children:[Object(b.jsx)("input",{type:"text",name:"birthdate",value:n.birthdate,onChange:p,placeholder:"MM/DD/YY"}),Object(b.jsx)("div",{style:{color:"red"},children:x.birthday})]})})})]})})]})]}),Object(b.jsxs)("div",{className:"partTwo",children:[Object(b.jsx)("div",{className:"partHead",children:Object(b.jsx)("h4",{className:"phead",children:"Education"})}),Object(b.jsx)("div",{className:"inputPart",children:Object(b.jsxs)(o.a,{className:"Row",children:[Object(b.jsx)(m.a,{lg:4,md:4,sm:12,children:Object(b.jsx)("label",{children:"Write your education up to the date:"})}),Object(b.jsx)(m.a,{lg:8,md:8,sm:12,children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(m.a,{lg:6,md:6,sm:12,children:[Object(b.jsx)("textarea",{rows:"10",cols:"50",placeholder:"Education",name:"education",value:n.education,onChange:p}),Object(b.jsx)("div",{style:{color:"red"},children:x.education})]})})})]})})]}),Object(b.jsxs)("div",{className:"partTwo",children:[Object(b.jsx)("div",{className:"partHead",children:Object(b.jsx)("h4",{className:"phead",children:"Skills/Qualification"})}),Object(b.jsxs)("div",{className:"inputPart",children:[Object(b.jsxs)(o.a,{className:"Row",children:[Object(b.jsx)(m.a,{lg:4,md:4,sm:12,children:Object(b.jsx)("label",{children:"Skills:"})}),Object(b.jsx)(m.a,{lg:8,md:8,sm:12,children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(m.a,{lg:6,md:6,sm:12,children:[Object(b.jsx)("textarea",{rows:"10",cols:"50",placeholder:"Skills",name:"skills",value:n.skills,onChange:p}),Object(b.jsx)("div",{style:{color:"red"},children:x.skills})]})})})]}),Object(b.jsxs)(o.a,{className:"Row",children:[Object(b.jsx)(m.a,{lg:4,md:4,sm:12,children:Object(b.jsx)("label",{children:"Qualifications:"})}),Object(b.jsx)(m.a,{lg:8,md:8,sm:12,children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(m.a,{lg:6,md:6,sm:12,children:[Object(b.jsx)("textarea",{rows:"10",cols:"50",placeholder:"Education",name:"qualification",value:n.qualification,onChange:p}),Object(b.jsx)("div",{style:{color:"red"},children:x.qualification})]})})})]})]})]}),Object(b.jsxs)("div",{className:"partTwo",children:[Object(b.jsx)("div",{className:"partHead",children:Object(b.jsx)("h4",{className:"phead",children:"Skills/Qualification"})}),Object(b.jsxs)("div",{className:"inputPart",children:[Object(b.jsx)("p",{children:"By clicking the submit button below, I cerity that all of the information provided by me on this application is true and complete, and I understand that if any false information, ommissions, or misrepresentations are discovered, my application may be rejected and, if I am employed, my employement may be terminated at any time. "}),Object(b.jsx)("p",{children:"In consideration of my employment, I agree to conform to the company's rules and regulations, and I agree that my employment and compenstation can be terminated, with or without cause, and with or without notice, at any time, at either my or the company's option."}),Object(b.jsx)("p",{children:"I also understand and agree that the terms and conditions of my employment may be changed, with or without cause, and with or without notice, at any time by the company."}),Object(b.jsx)("button",{className:"button",children:"submit"})]})]})]})]})})},O=n(18),p=n.n(O).a.create({baseUrl:"http://localhost:9000"}),f=(n(30),n(12)),g=n(69);var y=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1];return console.log(n),Object(c.useEffect)((function(){p.get("/getusers").then((function(e){console.log(e.data),s(e.data)}))}),[]),Object(b.jsx)("div",{className:"maingetdiv",children:Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{className:"userdiv",children:n.map((function(e){return Object(b.jsxs)(g.a,{className:"userinfo",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Name:"})," ",e.fullname]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Education:"})," ",e.education?e.education:"Not Mentioned"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Qualification:"})," ",e.qualification?e.qualification:"Not Mentioned"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Skills:"})," ",e.skills?e.skills:"Not Mentioned"]}),Object(b.jsx)(f.b,{to:{pathname:"/userinfo/".concat(e._id)},children:Object(b.jsx)("p",{className:"seebtn",children:"See Information"})})]},e._id)}))})})})},v=n(3);var N=function(){var e=Object(v.f)().id,t=Object(c.useState)({}),n=Object(d.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){p.get("/userinnfo/".concat(e)).then((function(e){a(e.data)}))}),[]),Object(b.jsx)("div",{className:"displayfullmain",children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(g.a,{className:"userdetails",children:[Object(b.jsx)("div",{className:"userheader",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Candidate Full Name:"})," ",s.fullname]})}),Object(b.jsxs)("div",{className:"userinformation",children:[Object(b.jsxs)("div",{className:"usermaininfo",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Email:"})," ",s.email]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Phone Number:"})," ",s.number]})]}),Object(b.jsxs)("div",{className:"useradd",children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"Candidate Address:"})}),Object(b.jsxs)("div",{className:"streetaddress",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Lane One:"})," ",s.streetone]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Lane Two:"})," ",s.streettwo]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"City:"})," ",s.city," ",Object(b.jsx)("strong",{children:"PinCode:"})," ",s.pincode," ",Object(b.jsx)("strong",{children:"State:"})," ",s.state," ",Object(b.jsx)("strong",{children:"Country:"})," ",s.country,"."]})]})]})]}),Object(b.jsxs)("div",{className:"usermaininformation",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Skills: "}),s.skills]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Education: "}),s.education]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Qualifications: "}),s.qualification]})]}),Object(b.jsx)("div",{className:"sendmail",children:Object(b.jsx)("p",{className:"mailbtn",children:Object(b.jsx)("strong",{children:"Send Mail"})})})]})})})};var w=function(){return Object(b.jsx)(f.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/",component:x}),Object(b.jsx)(v.a,{exact:!0,path:"/userinfo",component:y}),Object(b.jsx)(v.a,{exact:!0,path:"/userinfo/:id",component:N})]})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),q()}},[[65,1,2]]]);
//# sourceMappingURL=main.8d78ab03.chunk.js.map