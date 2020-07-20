function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,t,o){return t&&_defineProperties(n.prototype,t),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Yj9t:function(n,t,o){"use strict";o.r(t),o.d(t,"AuthModule",(function(){return w}));var e,r,i,c,g,a=o("ofXK"),p=o("3Pt+"),l=o("bNXi"),d=o("qAZ0"),_=o("tyNb"),s=o("kt0X"),m=o("aTs3"),C=o("Umrk"),f=o("fXoL"),O=o("s6k+"),P=o("qo03"),M=function(){return["../register"]},x=((e=function(){function n(t,o,e,r,i){_classCallCheck(this,n),this.notifiCationService=t,this.authService=o,this.store=e,this.formBuilder=r,this.notification=i,this.isLoginSuccess$=this.store.pipe(Object(s.q)(m.b)),this.status$=this.store.pipe(Object(s.q)(m.d)),this.loginForm=this.formBuilder.group({email:["",p.o.required],password:["",p.o.required]}),this.initLoginForm=this.loginForm.value}return _createClass(n,[{key:"onSubmitForm",value:function(n){var t=this;this.store.dispatch(new C.g(n));var o=this.isLoginSuccess$.subscribe((function(n){!0===n?(o.unsubscribe(),t.notifiCationService.create("Login success","Congratulations, welcome back"),t.authService.login()):!1===n&&(o.unsubscribe(),t.notifiCationService.create("Login fail","Sorry, your infomation some thing wrong, you can relogin again"))}))}}]),n}()).\u0275fac=function(n){return new(n||e)(f.Rb(O.a),f.Rb(P.a),f.Rb(s.h),f.Rb(p.c),f.Rb(l.b))},e.\u0275cmp=f.Lb({type:e,selectors:[["app-login"]],decls:19,vars:6,consts:[[3,"nzSpinning"],[1,"form","light-dark-bg-color","p-3","d-flex","flex-column",3,"formGroup","ngSubmit"],[1,"form_header","d-flex","justify-content-center","align-items-center","fs-22","primary-txt-color","fw-bold"],[1,"form__body"],[1,"form__field"],[1,"form_label","fs-11","ff-secondary","gray-txt-color"],["placeholder","email@sample.com","name","email","id","email","formControlName","email",1,"w-100","form__input","ff-secondary","dark-txt-color"],[1,"form__field","mt-3"],["type","password","placeholder","enter password","name","password","id","password","formControlName","password",1,"w-100","form__input","ff-secondary","dark-txt-color"],[1,"form__footer","d-flex","flex-column","justify-content-center","align-items-start","mt-sm-2"],["type","submit",1,"btn","cursor-pointer","btn--full","mt-1","d-flex","light-dark-bg-color","align-items-center","justify-content-center","txt-decoration-none","primary-txt-color","ff-secondary","primary-bd-color"],[1,"fs-13","form__text","fw-600","light-txt-color","p-0","mt-2","w-100","txt-align-center","txt-decoration-none",3,"routerLink"]],template:function(n,t){1&n&&(f.Wb(0,"nz-spin",0),f.ic(1,"async"),f.Wb(2,"form",1),f.ec("ngSubmit",(function(){return t.onSubmitForm(t.loginForm.value)})),f.Wb(3,"div",2),f.Fc(4," Log in "),f.Vb(),f.Wb(5,"div",3),f.Wb(6,"div",4),f.Wb(7,"p",5),f.Fc(8," EMAIL "),f.Vb(),f.Sb(9,"input",6),f.Vb(),f.Wb(10,"div",7),f.Wb(11,"p",5),f.Fc(12," PASSWORD "),f.Vb(),f.Sb(13,"input",8),f.Vb(),f.Vb(),f.Wb(14,"div",9),f.Wb(15,"button",10),f.Fc(16," Log In "),f.Vb(),f.Wb(17,"a",11),f.Fc(18,"Creat new account now!"),f.Vb(),f.Vb(),f.Vb(),f.Vb()),2&n&&(f.oc("nzSpinning","loading"===f.jc(1,3,t.status$)),f.Cb(2),f.oc("formGroup",t.loginForm),f.Cb(15),f.oc("routerLink",f.rc(5,M)))},directives:[d.a,p.p,p.l,p.g,p.b,p.k,p.f,_.j],pipes:[a.b],styles:[".form[_ngcontent-%COMP%]{width:380px;height:460px}.form_header[_ngcontent-%COMP%]{height:80px}.form__body[_ngcontent-%COMP%]{flex-grow:2}.form__input[_ngcontent-%COMP%]{box-sizing:border-box;padding:0 10px;height:48px;border:none;outline:none;font-size:14px}.form__footer[_ngcontent-%COMP%]{height:112px;box-sizing:border-box}.form__text[_ngcontent-%COMP%]:hover{color:#0aeeb9;text-decoration:underline}","[_ngcontent-%COMP%]:root{--primary-color:#0aeeb9;--secondary-color:#0a192f;--light-dark-color:#172a45;--medium-dark-color:#152338;--dark-color:#020c1b;--dark-green-color:#145c4b;--gray-color:#ccd6f6;--light-color:#fefefe;--dark-gray-color:#8892b0}.primary-bg-color[_ngcontent-%COMP%]{background-color:#0aeeb9}.secondary-bg-color[_ngcontent-%COMP%]{background-color:#0a192f}.light-dark-bg-color[_ngcontent-%COMP%]{background-color:#172a45}.dark-bg-color[_ngcontent-%COMP%]{background-color:#020c1b}.light-bg-color[_ngcontent-%COMP%]{background-color:#fefefe}.medium-dark-bg-color[_ngcontent-%COMP%]{background-color:#152338}.gray-bg-color[_ngcontent-%COMP%]{background-color:#ccd6f6}.primary-txt-color[_ngcontent-%COMP%]{color:#0aeeb9}.gray-txt-color[_ngcontent-%COMP%]{color:#ccd6f6}.light-txt-color[_ngcontent-%COMP%]{color:#fefefe}.dark-gray-txt-color[_ngcontent-%COMP%]{color:#8892b0}.dark-txt-color[_ngcontent-%COMP%]{color:#020c1b}.dark-gray-bd-color[_ngcontent-%COMP%]{border-color:#8892b0}.primary-bd-color[_ngcontent-%COMP%]{border-color:#0aeeb9}","[_ngcontent-%COMP%]:root{--spacing--0:0;--spacing--1:10px;--spacing--2:20px;--spacing--3:30px;--spacing--4:40px;--spacing--5:50px}.m-0[_ngcontent-%COMP%]{margin:0}.m-1[_ngcontent-%COMP%]{margin:10px}.m-2[_ngcontent-%COMP%]{margin:20px}.m-3[_ngcontent-%COMP%]{margin:30px}.m-4[_ngcontent-%COMP%]{margin:40px}.m-5[_ngcontent-%COMP%]{margin:50px}.mt-0[_ngcontent-%COMP%]{margin-top:0}.mt-1[_ngcontent-%COMP%]{margin-top:10px}.mt-2[_ngcontent-%COMP%]{margin-top:20px}.mt-3[_ngcontent-%COMP%]{margin-top:30px}.mt-4[_ngcontent-%COMP%]{margin-top:40px}.mt-5[_ngcontent-%COMP%]{margin-top:50px}.mt-primary[_ngcontent-%COMP%]{margin-top:300px}.mt-secondary[_ngcontent-%COMP%]{margin-top:60px}.mt-100[_ngcontent-%COMP%]{margin-top:100px}.mt-150[_ngcontent-%COMP%]{margin-top:150px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mb-0[_ngcontent-%COMP%]{margin-bottom:0}.mb-1[_ngcontent-%COMP%]{margin-bottom:10px}.mb-2[_ngcontent-%COMP%]{margin-bottom:20px}.mb-3[_ngcontent-%COMP%]{margin-bottom:30px}.mb-4[_ngcontent-%COMP%]{margin-bottom:40px}.mb-5[_ngcontent-%COMP%]{margin-bottom:50px}.mb-primary[_ngcontent-%COMP%]{margin-bottom:300px}.ml-0[_ngcontent-%COMP%]{margin-left:0}.ml-1[_ngcontent-%COMP%]{margin-left:10px}.ml-2[_ngcontent-%COMP%]{margin-left:20px}.ml-3[_ngcontent-%COMP%]{margin-left:30px}.ml-4[_ngcontent-%COMP%]{margin-left:40px}.ml-5[_ngcontent-%COMP%]{margin-left:50px}.ml-7[_ngcontent-%COMP%]{margin-left:7px}.ml-17[_ngcontent-%COMP%]{margin-left:17px}.mr-0[_ngcontent-%COMP%]{margin-right:0}.mr-1[_ngcontent-%COMP%]{margin-right:10px}.mr-2[_ngcontent-%COMP%]{margin-right:20px}.mr-3[_ngcontent-%COMP%]{margin-right:30px}.mr-4[_ngcontent-%COMP%]{margin-right:40px}.mr-5[_ngcontent-%COMP%]{margin-right:50px}.p-0[_ngcontent-%COMP%]{padding:0}.p-1[_ngcontent-%COMP%]{padding:10px}.p-2[_ngcontent-%COMP%]{padding:20px}.p-3[_ngcontent-%COMP%]{padding:30px}.p-4[_ngcontent-%COMP%]{padding:40px}.p-5[_ngcontent-%COMP%]{padding:50px}.pl-0[_ngcontent-%COMP%]{padding-left:0}.pl-1[_ngcontent-%COMP%]{padding-left:10px}.pl-2[_ngcontent-%COMP%]{padding-left:20px}.pl-3[_ngcontent-%COMP%]{padding-left:30px}.pl-4[_ngcontent-%COMP%]{padding-left:40px}.pl-5[_ngcontent-%COMP%]{padding-left:50px}.pr-0[_ngcontent-%COMP%]{padding-right:0}.pr-1[_ngcontent-%COMP%]{padding-right:10px}.pr-2[_ngcontent-%COMP%]{padding-right:20px}.pr-3[_ngcontent-%COMP%]{padding-right:30px}.pr-4[_ngcontent-%COMP%]{padding-right:40px}.pr-5[_ngcontent-%COMP%]{padding-right:50px}.pt-0[_ngcontent-%COMP%]{padding-top:0}.pt-1[_ngcontent-%COMP%]{padding-top:10px}.pt-2[_ngcontent-%COMP%]{padding-top:20px}.pt-3[_ngcontent-%COMP%]{padding-top:30px}.pt-4[_ngcontent-%COMP%]{padding-top:40px}.pt-5[_ngcontent-%COMP%]{padding-top:50px}.plr-primary[_ngcontent-%COMP%]{padding:0 20%}",".d-flex[_ngcontent-%COMP%]{display:flex}.d-grid[_ngcontent-%COMP%]{display:grid}.d-block[_ngcontent-%COMP%]{display:block}.d-none[_ngcontent-%COMP%]{display:none}.d-inline-block[_ngcontent-%COMP%]{display:inline-block}",".flex-row[_ngcontent-%COMP%]{flex-direction:row}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.justify-content-start[_ngcontent-%COMP%]{justify-content:flex-start}.justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-content-center[_ngcontent-%COMP%]{justify-content:center}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between}.align-items-start[_ngcontent-%COMP%]{align-items:flex-start}.align-items-end[_ngcontent-%COMP%]{align-items:flex-end}.align-items-center[_ngcontent-%COMP%]{align-items:center}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline}",".position-fixed[_ngcontent-%COMP%]{position:fixed}.position-relative[_ngcontent-%COMP%]{position:relative}.position-absolute[_ngcontent-%COMP%]{position:absolute}.position-sticky[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky}.bottom-0[_ngcontent-%COMP%]{bottom:0}.top-0[_ngcontent-%COMP%]{top:0}.right-0[_ngcontent-%COMP%]{right:0}.left-0[_ngcontent-%COMP%]{left:0}.left-50[_ngcontent-%COMP%]{left:50%}.left-100[_ngcontent-%COMP%]{left:100%}","[_ngcontent-%COMP%]:root{--zindex--0:0;--zindex--1:1;--zindex--2:2;--zindex--3:3;--zindex--4:4;--zindex--5:5}.z-index-0[_ngcontent-%COMP%]{z-index:0}.z-index-1[_ngcontent-%COMP%]{z-index:1}.z-index-2[_ngcontent-%COMP%]{z-index:2}.z-index-3[_ngcontent-%COMP%]{z-index:3}.z-index-4[_ngcontent-%COMP%]{z-index:4}.z-index-5[_ngcontent-%COMP%]{z-index:5}",".txt-decoration-none[_ngcontent-%COMP%]{text-decoration:none}.txt-align-center[_ngcontent-%COMP%]{text-align:center}.txt-align-left[_ngcontent-%COMP%]{text-align:left}.txt-align-right[_ngcontent-%COMP%]{text-align:right}",".fs-primary[_ngcontent-%COMP%]{font-size:14px}.fs-secondary[_ngcontent-%COMP%]{font-size:15px}.fs-11[_ngcontent-%COMP%]{font-size:11px}.fs-13[_ngcontent-%COMP%]{font-size:13px}.fs-16[_ngcontent-%COMP%]{font-size:16px}.fs-22[_ngcontent-%COMP%]{font-size:22px}.fs-20[_ngcontent-%COMP%]{font-size:20px}.ff-secondary[_ngcontent-%COMP%]{font-family:Fira Code,monospace}.ff-primary[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.fw-600[_ngcontent-%COMP%]{font-weight:600}",".transform-translate-X--50[_ngcontent-%COMP%]{transform:translateX(-50)}.transform-translate-X-50[_ngcontent-%COMP%]{transform:translateX(50)}.transform-rotate-90[_ngcontent-%COMP%]{transform:rotate(90deg)}",".cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}",".w-0[_ngcontent-%COMP%]{width:0}.w-25[_ngcontent-%COMP%]{width:25%}.w-50[_ngcontent-%COMP%]{width:50%}.w-60[_ngcontent-%COMP%]{width:60%}.w-75[_ngcontent-%COMP%]{width:75%}.w-100[_ngcontent-%COMP%]{width:100%}.h-0[_ngcontent-%COMP%]{height:0}.h-25[_ngcontent-%COMP%]{height:25%}.h-50[_ngcontent-%COMP%]{height:50%}.h-75[_ngcontent-%COMP%]{height:75%}.h-100[_ngcontent-%COMP%]{height:100%}.h-primary[_ngcontent-%COMP%]{height:100px}",".border-round[_ngcontent-%COMP%]{border-radius:3px}.border-0[_ngcontent-%COMP%]{border:none}",".float-left[_ngcontent-%COMP%]{float:left}.float-right[_ngcontent-%COMP%]{float:right}",".grid-col-2[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.grid-col-3[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}.grid-col-4[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr 1fr}.grid-gap-2[_ngcontent-%COMP%]{grid-gap:20px}.grid-gap-1[_ngcontent-%COMP%]{grid-gap:10px}",".header[_ngcontent-%COMP%]{padding:0 5%;box-sizing:border-box}.header__logo[_ngcontent-%COMP%]{width:50px;height:50px}.header__list[_ngcontent-%COMP%]{flex-grow:2;list-style:none}.header__item[_ngcontent-%COMP%]{margin:0 10px;font-size:13px}.header__link[_ngcontent-%COMP%]:hover{color:var(--primary-color)}",".btn[_ngcontent-%COMP%]{border:1px solid}.btn[_ngcontent-%COMP%]:hover{background-color:#145c4b}.btn--big[_ngcontent-%COMP%]{font-size:17px;width:140px;padding:18px}.btn--full[_ngcontent-%COMP%]{font-size:17px;width:100%;height:48px;align-content:center}.btn--small[_ngcontent-%COMP%]{font-size:13px;width:100px;padding:12px 16px}"]}),e),b=function(){return["../login"]},h=((r=function(){function n(t,o,e){_classCallCheck(this,n),this.store=t,this.formBuilder=o,this.notificationService=e,this.isCreateSuccess$=this.store.pipe(Object(s.q)(m.a)),this.status$=this.store.pipe(Object(s.q)(m.d)),this.createUserForm=this.formBuilder.group({fullName:["",p.o.required],email:["",p.o.required],password:["",p.o.required]}),this.initCreateUserForm=this.createUserForm.value}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onSubmitForm",value:function(n){var t=this;JSON.stringify(n)===JSON.stringify(this.initCreateUserForm)?this.notificationService.create("Please input infomation","Warning,  You have not filled in the information, please check again, thanks"):this.store.dispatch(new C.a(n));var o=this.isCreateSuccess$.subscribe((function(n){!0===n?(o.unsubscribe(),t.notificationService.create("Create success","Congratulations,  your new account was created, you can login in route /login"),t.resetForm()):!1===n&&(o.unsubscribe(),t.notificationService.create("Create fail","Sorry, your new account was not created, some thing wrong, you can recreated again"))}))}},{key:"resetForm",value:function(){this.createUserForm.reset(this.initCreateUserForm)}}]),n}()).\u0275fac=function(n){return new(n||r)(f.Rb(s.h),f.Rb(p.c),f.Rb(O.a))},r.\u0275cmp=f.Lb({type:r,selectors:[["app-register"]],decls:30,vars:6,consts:[[3,"nzSpinning"],[1,"form","form--big","light-dark-bg-color","p-3","d-flex","flex-column",3,"formGroup","ngSubmit"],[1,"form_header","d-flex","justify-content-center","align-items-center","fs-22","primary-txt-color","fw-bold"],[1,"form__body"],[1,"form__field"],[1,"form_label","fs-11","ff-secondary","gray-txt-color"],["placeholder","enter full name","name","full name","id","fullName","formControlName","fullName",1,"w-100","form__input","ff-secondary","dark-txt-color"],[1,"form__field","mt-3"],["placeholder","email@sample.com","name","email","id","email","formControlName","email",1,"w-100","form__input","ff-secondary","dark-txt-color"],["type","password","placeholder","enter password","name","password","id","password","formControlName","password",1,"w-100","form__input","ff-secondary","dark-txt-color"],[1,"form__footer","d-flex","flex-column","justify-content-center","align-items-start"],[1,"pl-4","pr-4","m-0","gray-txt-color","fs-13","txt-align-center"],[1,"fs-13","form__text","fw-600","primary-txt-color","p-0","txt-decoration-none"],["target","_blank","type","submit",1,"btn","cursor-pointer","mt-2","btn--full","light-dark-bg-color","d-flex","align-items-center","justify-content-center","txt-decoration-none","primary-txt-color","ff-secondary","primary-bd-color"],[1,"fs-13","form__text","fw-600","light-txt-color","p-0","mt-2","w-100","txt-align-center","txt-decoration-none",3,"routerLink"]],template:function(n,t){1&n&&(f.Wb(0,"nz-spin",0),f.ic(1,"async"),f.Wb(2,"form",1),f.ec("ngSubmit",(function(){return t.onSubmitForm(t.createUserForm.value)})),f.Wb(3,"div",2),f.Fc(4," Register "),f.Vb(),f.Wb(5,"div",3),f.Wb(6,"div",4),f.Wb(7,"p",5),f.Fc(8," FULL NAME "),f.Vb(),f.Sb(9,"input",6),f.Vb(),f.Wb(10,"div",7),f.Wb(11,"p",5),f.Fc(12," EMAIL "),f.Vb(),f.Sb(13,"input",8),f.Vb(),f.Wb(14,"div",7),f.Wb(15,"p",5),f.Fc(16," PASSWORD "),f.Vb(),f.Sb(17,"input",9),f.Vb(),f.Vb(),f.Wb(18,"div",10),f.Wb(19,"p",11),f.Fc(20,"By creating an account you agree to the "),f.Wb(21,"a",12),f.Fc(22," Terms of Service "),f.Vb(),f.Fc(23," and "),f.Wb(24,"a",12),f.Fc(25,"Privacy Policy"),f.Vb(),f.Vb(),f.Wb(26,"button",13),f.Fc(27," Creating now "),f.Vb(),f.Wb(28,"a",14),f.Fc(29,"Login now!"),f.Vb(),f.Vb(),f.Vb(),f.Vb()),2&n&&(f.oc("nzSpinning","loading"===f.jc(1,3,t.status$)),f.Cb(2),f.oc("formGroup",t.createUserForm),f.Cb(26),f.oc("routerLink",f.rc(5,b)))},directives:[d.a,p.p,p.l,p.g,p.b,p.k,p.f,_.j],pipes:[a.b],styles:[".form[_ngcontent-%COMP%]{width:380px;height:424px}.form--big[_ngcontent-%COMP%]{height:630px}.form_header[_ngcontent-%COMP%]{height:80px}.form__body[_ngcontent-%COMP%]{flex-grow:2}.form__input[_ngcontent-%COMP%]{box-sizing:border-box;padding:0 10px;height:48px;border:none;outline:none;font-size:14px}.form__footer[_ngcontent-%COMP%]{height:170px}.form__text[_ngcontent-%COMP%]:hover{color:#0aeeb9;text-decoration:underline}","[_ngcontent-%COMP%]:root{--primary-color:#0aeeb9;--secondary-color:#0a192f;--light-dark-color:#172a45;--medium-dark-color:#152338;--dark-color:#020c1b;--dark-green-color:#145c4b;--gray-color:#ccd6f6;--light-color:#fefefe;--dark-gray-color:#8892b0}.primary-bg-color[_ngcontent-%COMP%]{background-color:#0aeeb9}.secondary-bg-color[_ngcontent-%COMP%]{background-color:#0a192f}.light-dark-bg-color[_ngcontent-%COMP%]{background-color:#172a45}.dark-bg-color[_ngcontent-%COMP%]{background-color:#020c1b}.light-bg-color[_ngcontent-%COMP%]{background-color:#fefefe}.medium-dark-bg-color[_ngcontent-%COMP%]{background-color:#152338}.gray-bg-color[_ngcontent-%COMP%]{background-color:#ccd6f6}.primary-txt-color[_ngcontent-%COMP%]{color:#0aeeb9}.gray-txt-color[_ngcontent-%COMP%]{color:#ccd6f6}.light-txt-color[_ngcontent-%COMP%]{color:#fefefe}.dark-gray-txt-color[_ngcontent-%COMP%]{color:#8892b0}.dark-txt-color[_ngcontent-%COMP%]{color:#020c1b}.dark-gray-bd-color[_ngcontent-%COMP%]{border-color:#8892b0}.primary-bd-color[_ngcontent-%COMP%]{border-color:#0aeeb9}","[_ngcontent-%COMP%]:root{--spacing--0:0;--spacing--1:10px;--spacing--2:20px;--spacing--3:30px;--spacing--4:40px;--spacing--5:50px}.m-0[_ngcontent-%COMP%]{margin:0}.m-1[_ngcontent-%COMP%]{margin:10px}.m-2[_ngcontent-%COMP%]{margin:20px}.m-3[_ngcontent-%COMP%]{margin:30px}.m-4[_ngcontent-%COMP%]{margin:40px}.m-5[_ngcontent-%COMP%]{margin:50px}.mt-0[_ngcontent-%COMP%]{margin-top:0}.mt-1[_ngcontent-%COMP%]{margin-top:10px}.mt-2[_ngcontent-%COMP%]{margin-top:20px}.mt-3[_ngcontent-%COMP%]{margin-top:30px}.mt-4[_ngcontent-%COMP%]{margin-top:40px}.mt-5[_ngcontent-%COMP%]{margin-top:50px}.mt-primary[_ngcontent-%COMP%]{margin-top:300px}.mt-secondary[_ngcontent-%COMP%]{margin-top:60px}.mt-100[_ngcontent-%COMP%]{margin-top:100px}.mt-150[_ngcontent-%COMP%]{margin-top:150px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mb-0[_ngcontent-%COMP%]{margin-bottom:0}.mb-1[_ngcontent-%COMP%]{margin-bottom:10px}.mb-2[_ngcontent-%COMP%]{margin-bottom:20px}.mb-3[_ngcontent-%COMP%]{margin-bottom:30px}.mb-4[_ngcontent-%COMP%]{margin-bottom:40px}.mb-5[_ngcontent-%COMP%]{margin-bottom:50px}.mb-primary[_ngcontent-%COMP%]{margin-bottom:300px}.ml-0[_ngcontent-%COMP%]{margin-left:0}.ml-1[_ngcontent-%COMP%]{margin-left:10px}.ml-2[_ngcontent-%COMP%]{margin-left:20px}.ml-3[_ngcontent-%COMP%]{margin-left:30px}.ml-4[_ngcontent-%COMP%]{margin-left:40px}.ml-5[_ngcontent-%COMP%]{margin-left:50px}.ml-7[_ngcontent-%COMP%]{margin-left:7px}.ml-17[_ngcontent-%COMP%]{margin-left:17px}.mr-0[_ngcontent-%COMP%]{margin-right:0}.mr-1[_ngcontent-%COMP%]{margin-right:10px}.mr-2[_ngcontent-%COMP%]{margin-right:20px}.mr-3[_ngcontent-%COMP%]{margin-right:30px}.mr-4[_ngcontent-%COMP%]{margin-right:40px}.mr-5[_ngcontent-%COMP%]{margin-right:50px}.p-0[_ngcontent-%COMP%]{padding:0}.p-1[_ngcontent-%COMP%]{padding:10px}.p-2[_ngcontent-%COMP%]{padding:20px}.p-3[_ngcontent-%COMP%]{padding:30px}.p-4[_ngcontent-%COMP%]{padding:40px}.p-5[_ngcontent-%COMP%]{padding:50px}.pl-0[_ngcontent-%COMP%]{padding-left:0}.pl-1[_ngcontent-%COMP%]{padding-left:10px}.pl-2[_ngcontent-%COMP%]{padding-left:20px}.pl-3[_ngcontent-%COMP%]{padding-left:30px}.pl-4[_ngcontent-%COMP%]{padding-left:40px}.pl-5[_ngcontent-%COMP%]{padding-left:50px}.pr-0[_ngcontent-%COMP%]{padding-right:0}.pr-1[_ngcontent-%COMP%]{padding-right:10px}.pr-2[_ngcontent-%COMP%]{padding-right:20px}.pr-3[_ngcontent-%COMP%]{padding-right:30px}.pr-4[_ngcontent-%COMP%]{padding-right:40px}.pr-5[_ngcontent-%COMP%]{padding-right:50px}.pt-0[_ngcontent-%COMP%]{padding-top:0}.pt-1[_ngcontent-%COMP%]{padding-top:10px}.pt-2[_ngcontent-%COMP%]{padding-top:20px}.pt-3[_ngcontent-%COMP%]{padding-top:30px}.pt-4[_ngcontent-%COMP%]{padding-top:40px}.pt-5[_ngcontent-%COMP%]{padding-top:50px}.plr-primary[_ngcontent-%COMP%]{padding:0 20%}",".d-flex[_ngcontent-%COMP%]{display:flex}.d-grid[_ngcontent-%COMP%]{display:grid}.d-block[_ngcontent-%COMP%]{display:block}.d-none[_ngcontent-%COMP%]{display:none}.d-inline-block[_ngcontent-%COMP%]{display:inline-block}",".flex-row[_ngcontent-%COMP%]{flex-direction:row}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.justify-content-start[_ngcontent-%COMP%]{justify-content:flex-start}.justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-content-center[_ngcontent-%COMP%]{justify-content:center}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between}.align-items-start[_ngcontent-%COMP%]{align-items:flex-start}.align-items-end[_ngcontent-%COMP%]{align-items:flex-end}.align-items-center[_ngcontent-%COMP%]{align-items:center}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline}",".position-fixed[_ngcontent-%COMP%]{position:fixed}.position-relative[_ngcontent-%COMP%]{position:relative}.position-absolute[_ngcontent-%COMP%]{position:absolute}.position-sticky[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky}.bottom-0[_ngcontent-%COMP%]{bottom:0}.top-0[_ngcontent-%COMP%]{top:0}.right-0[_ngcontent-%COMP%]{right:0}.left-0[_ngcontent-%COMP%]{left:0}.left-50[_ngcontent-%COMP%]{left:50%}.left-100[_ngcontent-%COMP%]{left:100%}","[_ngcontent-%COMP%]:root{--zindex--0:0;--zindex--1:1;--zindex--2:2;--zindex--3:3;--zindex--4:4;--zindex--5:5}.z-index-0[_ngcontent-%COMP%]{z-index:0}.z-index-1[_ngcontent-%COMP%]{z-index:1}.z-index-2[_ngcontent-%COMP%]{z-index:2}.z-index-3[_ngcontent-%COMP%]{z-index:3}.z-index-4[_ngcontent-%COMP%]{z-index:4}.z-index-5[_ngcontent-%COMP%]{z-index:5}",".txt-decoration-none[_ngcontent-%COMP%]{text-decoration:none}.txt-align-center[_ngcontent-%COMP%]{text-align:center}.txt-align-left[_ngcontent-%COMP%]{text-align:left}.txt-align-right[_ngcontent-%COMP%]{text-align:right}",".fs-primary[_ngcontent-%COMP%]{font-size:14px}.fs-secondary[_ngcontent-%COMP%]{font-size:15px}.fs-11[_ngcontent-%COMP%]{font-size:11px}.fs-13[_ngcontent-%COMP%]{font-size:13px}.fs-16[_ngcontent-%COMP%]{font-size:16px}.fs-22[_ngcontent-%COMP%]{font-size:22px}.fs-20[_ngcontent-%COMP%]{font-size:20px}.ff-secondary[_ngcontent-%COMP%]{font-family:Fira Code,monospace}.ff-primary[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.fw-600[_ngcontent-%COMP%]{font-weight:600}",".transform-translate-X--50[_ngcontent-%COMP%]{transform:translateX(-50)}.transform-translate-X-50[_ngcontent-%COMP%]{transform:translateX(50)}.transform-rotate-90[_ngcontent-%COMP%]{transform:rotate(90deg)}",".cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}",".w-0[_ngcontent-%COMP%]{width:0}.w-25[_ngcontent-%COMP%]{width:25%}.w-50[_ngcontent-%COMP%]{width:50%}.w-60[_ngcontent-%COMP%]{width:60%}.w-75[_ngcontent-%COMP%]{width:75%}.w-100[_ngcontent-%COMP%]{width:100%}.h-0[_ngcontent-%COMP%]{height:0}.h-25[_ngcontent-%COMP%]{height:25%}.h-50[_ngcontent-%COMP%]{height:50%}.h-75[_ngcontent-%COMP%]{height:75%}.h-100[_ngcontent-%COMP%]{height:100%}.h-primary[_ngcontent-%COMP%]{height:100px}",".border-round[_ngcontent-%COMP%]{border-radius:3px}.border-0[_ngcontent-%COMP%]{border:none}",".float-left[_ngcontent-%COMP%]{float:left}.float-right[_ngcontent-%COMP%]{float:right}",".grid-col-2[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.grid-col-3[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}.grid-col-4[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr 1fr}.grid-gap-2[_ngcontent-%COMP%]{grid-gap:20px}.grid-gap-1[_ngcontent-%COMP%]{grid-gap:10px}",".header[_ngcontent-%COMP%]{padding:0 5%;box-sizing:border-box}.header__logo[_ngcontent-%COMP%]{width:50px;height:50px}.header__list[_ngcontent-%COMP%]{flex-grow:2;list-style:none}.header__item[_ngcontent-%COMP%]{margin:0 10px;font-size:13px}.header__link[_ngcontent-%COMP%]:hover{color:var(--primary-color)}",".btn[_ngcontent-%COMP%]{border:1px solid}.btn[_ngcontent-%COMP%]:hover{background-color:#145c4b}.btn--big[_ngcontent-%COMP%]{font-size:17px;width:140px;padding:18px}.btn--full[_ngcontent-%COMP%]{font-size:17px;width:100%;height:48px;align-content:center}.btn--small[_ngcontent-%COMP%]{font-size:13px;width:100px;padding:12px 16px}"]}),r),u=[{path:"",component:(i=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=f.Lb({type:i,selectors:[["app-auth"]],decls:4,vars:0,consts:[[1,"container-form","w-100","h-100","secondary-bg-color","d-flex","flex-column","justify-content-center","align-items-center","position-relative"],["routerLink","",1,"my-logo","position-absolute"],["src","https://www.nashtechglobal.com/wp-content/themes/nashtech/library/images/NashTech-logo-new.svg","alt","",1,"header__logo"]],template:function(n,t){1&n&&(f.Wb(0,"div",0),f.Wb(1,"a",1),f.Sb(2,"img",2),f.Vb(),f.Sb(3,"router-outlet"),f.Vb())},directives:[_.j,_.l],styles:[".my-logo[_ngcontent-%COMP%]{width:50px;height:50px;left:3%;top:5%}","[_ngcontent-%COMP%]:root{--primary-color:#0aeeb9;--secondary-color:#0a192f;--light-dark-color:#172a45;--medium-dark-color:#152338;--dark-color:#020c1b;--dark-green-color:#145c4b;--gray-color:#ccd6f6;--light-color:#fefefe;--dark-gray-color:#8892b0}.primary-bg-color[_ngcontent-%COMP%]{background-color:#0aeeb9}.secondary-bg-color[_ngcontent-%COMP%]{background-color:#0a192f}.light-dark-bg-color[_ngcontent-%COMP%]{background-color:#172a45}.dark-bg-color[_ngcontent-%COMP%]{background-color:#020c1b}.light-bg-color[_ngcontent-%COMP%]{background-color:#fefefe}.medium-dark-bg-color[_ngcontent-%COMP%]{background-color:#152338}.gray-bg-color[_ngcontent-%COMP%]{background-color:#ccd6f6}.primary-txt-color[_ngcontent-%COMP%]{color:#0aeeb9}.gray-txt-color[_ngcontent-%COMP%]{color:#ccd6f6}.light-txt-color[_ngcontent-%COMP%]{color:#fefefe}.dark-gray-txt-color[_ngcontent-%COMP%]{color:#8892b0}.dark-txt-color[_ngcontent-%COMP%]{color:#020c1b}.dark-gray-bd-color[_ngcontent-%COMP%]{border-color:#8892b0}.primary-bd-color[_ngcontent-%COMP%]{border-color:#0aeeb9}","[_ngcontent-%COMP%]:root{--spacing--0:0;--spacing--1:10px;--spacing--2:20px;--spacing--3:30px;--spacing--4:40px;--spacing--5:50px}.m-0[_ngcontent-%COMP%]{margin:0}.m-1[_ngcontent-%COMP%]{margin:10px}.m-2[_ngcontent-%COMP%]{margin:20px}.m-3[_ngcontent-%COMP%]{margin:30px}.m-4[_ngcontent-%COMP%]{margin:40px}.m-5[_ngcontent-%COMP%]{margin:50px}.mt-0[_ngcontent-%COMP%]{margin-top:0}.mt-1[_ngcontent-%COMP%]{margin-top:10px}.mt-2[_ngcontent-%COMP%]{margin-top:20px}.mt-3[_ngcontent-%COMP%]{margin-top:30px}.mt-4[_ngcontent-%COMP%]{margin-top:40px}.mt-5[_ngcontent-%COMP%]{margin-top:50px}.mt-primary[_ngcontent-%COMP%]{margin-top:300px}.mt-secondary[_ngcontent-%COMP%]{margin-top:60px}.mt-100[_ngcontent-%COMP%]{margin-top:100px}.mt-150[_ngcontent-%COMP%]{margin-top:150px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mb-0[_ngcontent-%COMP%]{margin-bottom:0}.mb-1[_ngcontent-%COMP%]{margin-bottom:10px}.mb-2[_ngcontent-%COMP%]{margin-bottom:20px}.mb-3[_ngcontent-%COMP%]{margin-bottom:30px}.mb-4[_ngcontent-%COMP%]{margin-bottom:40px}.mb-5[_ngcontent-%COMP%]{margin-bottom:50px}.mb-primary[_ngcontent-%COMP%]{margin-bottom:300px}.ml-0[_ngcontent-%COMP%]{margin-left:0}.ml-1[_ngcontent-%COMP%]{margin-left:10px}.ml-2[_ngcontent-%COMP%]{margin-left:20px}.ml-3[_ngcontent-%COMP%]{margin-left:30px}.ml-4[_ngcontent-%COMP%]{margin-left:40px}.ml-5[_ngcontent-%COMP%]{margin-left:50px}.ml-7[_ngcontent-%COMP%]{margin-left:7px}.ml-17[_ngcontent-%COMP%]{margin-left:17px}.mr-0[_ngcontent-%COMP%]{margin-right:0}.mr-1[_ngcontent-%COMP%]{margin-right:10px}.mr-2[_ngcontent-%COMP%]{margin-right:20px}.mr-3[_ngcontent-%COMP%]{margin-right:30px}.mr-4[_ngcontent-%COMP%]{margin-right:40px}.mr-5[_ngcontent-%COMP%]{margin-right:50px}.p-0[_ngcontent-%COMP%]{padding:0}.p-1[_ngcontent-%COMP%]{padding:10px}.p-2[_ngcontent-%COMP%]{padding:20px}.p-3[_ngcontent-%COMP%]{padding:30px}.p-4[_ngcontent-%COMP%]{padding:40px}.p-5[_ngcontent-%COMP%]{padding:50px}.pl-0[_ngcontent-%COMP%]{padding-left:0}.pl-1[_ngcontent-%COMP%]{padding-left:10px}.pl-2[_ngcontent-%COMP%]{padding-left:20px}.pl-3[_ngcontent-%COMP%]{padding-left:30px}.pl-4[_ngcontent-%COMP%]{padding-left:40px}.pl-5[_ngcontent-%COMP%]{padding-left:50px}.pr-0[_ngcontent-%COMP%]{padding-right:0}.pr-1[_ngcontent-%COMP%]{padding-right:10px}.pr-2[_ngcontent-%COMP%]{padding-right:20px}.pr-3[_ngcontent-%COMP%]{padding-right:30px}.pr-4[_ngcontent-%COMP%]{padding-right:40px}.pr-5[_ngcontent-%COMP%]{padding-right:50px}.pt-0[_ngcontent-%COMP%]{padding-top:0}.pt-1[_ngcontent-%COMP%]{padding-top:10px}.pt-2[_ngcontent-%COMP%]{padding-top:20px}.pt-3[_ngcontent-%COMP%]{padding-top:30px}.pt-4[_ngcontent-%COMP%]{padding-top:40px}.pt-5[_ngcontent-%COMP%]{padding-top:50px}.plr-primary[_ngcontent-%COMP%]{padding:0 20%}",".d-flex[_ngcontent-%COMP%]{display:flex}.d-grid[_ngcontent-%COMP%]{display:grid}.d-block[_ngcontent-%COMP%]{display:block}.d-none[_ngcontent-%COMP%]{display:none}.d-inline-block[_ngcontent-%COMP%]{display:inline-block}",".flex-row[_ngcontent-%COMP%]{flex-direction:row}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.justify-content-start[_ngcontent-%COMP%]{justify-content:flex-start}.justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-content-center[_ngcontent-%COMP%]{justify-content:center}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between}.align-items-start[_ngcontent-%COMP%]{align-items:flex-start}.align-items-end[_ngcontent-%COMP%]{align-items:flex-end}.align-items-center[_ngcontent-%COMP%]{align-items:center}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline}",".position-fixed[_ngcontent-%COMP%]{position:fixed}.position-relative[_ngcontent-%COMP%]{position:relative}.position-absolute[_ngcontent-%COMP%]{position:absolute}.position-sticky[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky}.bottom-0[_ngcontent-%COMP%]{bottom:0}.top-0[_ngcontent-%COMP%]{top:0}.right-0[_ngcontent-%COMP%]{right:0}.left-0[_ngcontent-%COMP%]{left:0}.left-50[_ngcontent-%COMP%]{left:50%}.left-100[_ngcontent-%COMP%]{left:100%}","[_ngcontent-%COMP%]:root{--zindex--0:0;--zindex--1:1;--zindex--2:2;--zindex--3:3;--zindex--4:4;--zindex--5:5}.z-index-0[_ngcontent-%COMP%]{z-index:0}.z-index-1[_ngcontent-%COMP%]{z-index:1}.z-index-2[_ngcontent-%COMP%]{z-index:2}.z-index-3[_ngcontent-%COMP%]{z-index:3}.z-index-4[_ngcontent-%COMP%]{z-index:4}.z-index-5[_ngcontent-%COMP%]{z-index:5}",".txt-decoration-none[_ngcontent-%COMP%]{text-decoration:none}.txt-align-center[_ngcontent-%COMP%]{text-align:center}.txt-align-left[_ngcontent-%COMP%]{text-align:left}.txt-align-right[_ngcontent-%COMP%]{text-align:right}",".fs-primary[_ngcontent-%COMP%]{font-size:14px}.fs-secondary[_ngcontent-%COMP%]{font-size:15px}.fs-11[_ngcontent-%COMP%]{font-size:11px}.fs-13[_ngcontent-%COMP%]{font-size:13px}.fs-16[_ngcontent-%COMP%]{font-size:16px}.fs-22[_ngcontent-%COMP%]{font-size:22px}.fs-20[_ngcontent-%COMP%]{font-size:20px}.ff-secondary[_ngcontent-%COMP%]{font-family:Fira Code,monospace}.ff-primary[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.fw-600[_ngcontent-%COMP%]{font-weight:600}",".transform-translate-X--50[_ngcontent-%COMP%]{transform:translateX(-50)}.transform-translate-X-50[_ngcontent-%COMP%]{transform:translateX(50)}.transform-rotate-90[_ngcontent-%COMP%]{transform:rotate(90deg)}",".cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}",".w-0[_ngcontent-%COMP%]{width:0}.w-25[_ngcontent-%COMP%]{width:25%}.w-50[_ngcontent-%COMP%]{width:50%}.w-60[_ngcontent-%COMP%]{width:60%}.w-75[_ngcontent-%COMP%]{width:75%}.w-100[_ngcontent-%COMP%]{width:100%}.h-0[_ngcontent-%COMP%]{height:0}.h-25[_ngcontent-%COMP%]{height:25%}.h-50[_ngcontent-%COMP%]{height:50%}.h-75[_ngcontent-%COMP%]{height:75%}.h-100[_ngcontent-%COMP%]{height:100%}.h-primary[_ngcontent-%COMP%]{height:100px}",".border-round[_ngcontent-%COMP%]{border-radius:3px}.border-0[_ngcontent-%COMP%]{border:none}",".float-left[_ngcontent-%COMP%]{float:left}.float-right[_ngcontent-%COMP%]{float:right}",".grid-col-2[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.grid-col-3[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}.grid-col-4[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr 1fr}.grid-gap-2[_ngcontent-%COMP%]{grid-gap:20px}.grid-gap-1[_ngcontent-%COMP%]{grid-gap:10px}"]}),i),children:[{path:"login",component:x},{path:"register",component:h}]}],y=((g=function n(){_classCallCheck(this,n)}).\u0275mod=f.Pb({type:g}),g.\u0275inj=f.Ob({factory:function(n){return new(n||g)},imports:[[_.k.forChild(u)],_.k]}),g),w=((c=function n(){_classCallCheck(this,n)}).\u0275mod=f.Pb({type:c}),c.\u0275inj=f.Ob({factory:function(n){return new(n||c)},imports:[[a.c,p.h,p.n,y,l.a,d.b]]}),c)}}]);