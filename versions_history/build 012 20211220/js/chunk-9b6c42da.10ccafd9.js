(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b6c42da"],{"0923":function(t,e,s){t.exports=s.p+"img/robot_avatar.715b5b87.png"},"0b42":function(t,e,s){var a=s("da84"),n=s("e8b5"),r=s("68ee"),i=s("861d"),o=s("b622"),c=o("species"),l=a.Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,r(e)&&(e===l||n(e.prototype))?e=void 0:i(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?l:e}},"0ce3":function(t,e,s){"use strict";s("5d39")},"159b":function(t,e,s){var a=s("da84"),n=s("fdbc"),r=s("785a"),i=s("17c2"),o=s("9112"),c=function(t){if(t&&t.forEach!==i)try{o(t,"forEach",i)}catch(e){t.forEach=i}};for(var l in n)n[l]&&c(a[l]&&a[l].prototype);c(r)},"15d3":function(t,e,s){},"17c2":function(t,e,s){"use strict";var a=s("b727").forEach,n=s("a640"),r=n("forEach");t.exports=r?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,s){var a=s("d039"),n=s("b622"),r=s("2d00"),i=n("species");t.exports=function(t){return r>=51||!a((function(){var e=[],s=e.constructor={};return s[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"498a":function(t,e,s){"use strict";var a=s("23e7"),n=s("58a8").trim,r=s("c8d2");a({target:"String",proto:!0,forced:r("trim")},{trim:function(){return n(this)}})},"4aa3":function(t,e,s){t.exports=s.p+"img/iss_logo_white.31b3d54a.svg"},"4de4":function(t,e,s){"use strict";var a=s("23e7"),n=s("b727").filter,r=s("1dde"),i=r("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("e330"),n=s("1d80"),r=s("577e"),i=s("5899"),o=a("".replace),c="["+i+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t){return function(e){var s=r(n(e));return 1&t&&(s=o(s,l,"")),2&t&&(s=o(s,u,"")),s}};t.exports={start:f(1),end:f(2),trim:f(3)}},"5d39":function(t,e,s){},"5fd8":function(t,e,s){"use strict";s("c5d9")},"65f0":function(t,e,s){var a=s("0b42");t.exports=function(t,e){return new(a(t))(0===e?0:e)}},"7ab7":function(t,e,s){},"857a":function(t,e,s){var a=s("e330"),n=s("1d80"),r=s("577e"),i=/"/g,o=a("".replace);t.exports=function(t,e,s,a){var c=r(n(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+o(r(a),i,"&quot;")+'"'),l+">"+c+"</"+e+">"}},8588:function(t,e,s){"use strict";s("b69e")},"8a94":function(t,e,s){},9911:function(t,e,s){"use strict";var a=s("23e7"),n=s("857a"),r=s("af03");a({target:"String",proto:!0,forced:r("link")},{link:function(t){return n(this,"a","href",t)}})},"99b2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header sticky-top shadow"},[a("div",{staticClass:"header__wrapper container"},[a("b-navbar",{attrs:{type:"dark"}},[a("b-navbar-brand",{attrs:{to:"/"}},[a("img",{staticClass:"d-inline-block align-top logo__image",attrs:{src:s("4aa3"),alt:"logo"}}),t._v(" Информационные системы и сервисы ")]),a("OffcanvasMenu",{attrs:{type:t.auth}}),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],staticClass:"d-lg-none"},[a("span",{staticClass:"material-icons"},[t._v("menu")])])],1)],1)])},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-sidebar",{attrs:{id:"sidebar",title:"Меню",backdrop:"","bg-variant":"primary","text-variant":"light",shadow:""}},[s("b-collapse",{attrs:{"is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/news","active-class":"active"}},[t._v(" Новости ")]),s("b-nav-item-dropdown",{attrs:{"active-class":"active",text:"Меры поддержки"}},[s("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Все меры поддержки ")]),s("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Юридическим лицам ")]),s("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Индивидуальным предпринимателям ")]),s("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Физическим лицам ")])],1),s("b-nav-item",{attrs:{to:"true"===t.type?"/accountinfo":"/authPage","active-class":"active"}},[t._v(" "+t._s("true"===t.type?"Личный кабинет":"Войти")+" ")]),s("b-nav-item",{attrs:{to:"/siteAdmin"}},[s("span",{staticClass:"material-icons"},[t._v("settings")])])],1)],1)],1)},i=[],o={name:"OffcanvasMenu",props:["type"]},c=o,l=(s("d1d3"),s("2877")),u=Object(l["a"])(c,r,i,!1,null,null,null),f=u.exports,d={name:"HeaderOffcavas",components:{OffcanvasMenu:f},props:["auth"]},v=d,p=(s("eba1"),Object(l["a"])(v,a,n,!1,null,null,null));e["a"]=p.exports},a640:function(t,e,s){"use strict";var a=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&a((function(){s.call(null,e||function(){throw 1},1)}))}},a67c:function(t,e,s){t.exports=s.p+"img/robot.1049893b.png"},af03:function(t,e,s){var a=s("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b66c:function(t,e,s){},b69e:function(t,e,s){},b727:function(t,e,s){var a=s("0366"),n=s("e330"),r=s("44ad"),i=s("7b0b"),o=s("07fa"),c=s("65f0"),l=n([].push),u=function(t){var e=1==t,s=2==t,n=3==t,u=4==t,f=6==t,d=7==t,v=5==t||f;return function(p,m,_,b){for(var h,g,w=i(p),C=r(w),x=a(m,_),k=o(C),y=0,F=b||c,A=e?F(p,k):s||d?F(p,0):void 0;k>y;y++)if((v||y in C)&&(h=C[y],g=x(h,y,w),t))if(e)A[y]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return y;case 2:l(A,h)}else switch(t){case 4:return!1;case 7:l(A,h)}return f?-1:n||u?u:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b9be:function(t,e,s){"use strict";s("b66c")},c5d9:function(t,e,s){},c8d2:function(t,e,s){var a=s("5e77").PROPER,n=s("d039"),r=s("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||i[t]()!==i||a&&r[t].name!==t}))}},d003:function(t,e,s){},d1d3:function(t,e,s){"use strict";s("15d3")},d81d:function(t,e,s){"use strict";var a=s("23e7"),n=s("b727").map,r=s("1dde"),i=r("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e6b0:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat"},[s("ChatHeader",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],on:{"close-chat":function(e){return t.$emit("close-chat")}}}),s("div",{staticClass:"container"},[s("ChatBoard",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,messages:t.messages}}),s("SearchForm",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,quest:t.quest},on:{"add-quest":function(e){return t.$emit("add-quest",e)},"focus-input":function(e){return t.$emit("focus-input")}}})],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow"},[a("div",{staticClass:"container"},[a("div",{staticClass:"chat-header"},[a("img",{staticClass:"chatHeaderAvatar rounded-circle d-lg-none",attrs:{src:s("0923"),alt:""}}),a("div",{staticClass:"chatHeaderTitle d-lg-none"},[t._v("Робот Василий")]),a("b-button",{staticClass:"closeBtn rounded-circle",on:{click:function(e){return t.$emit("close-chat")}}},[a("span",{staticClass:"material-icons"},[t._v("close")])])],1)])])},i=[],o={name:"ChatHeader"},c=o,l=(s("0ce3"),s("2877")),u=Object(l["a"])(c,r,i,!1,null,"85d1a8ca",null),f=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat-section row"},[a("div",{staticClass:"col-3 d-none d-lg-block"},[a("img",{staticClass:"position-absolute",class:{active:t.isActive},attrs:{id:"botWaiting",src:s("a67c"),alt:""}})]),a("div",{class:"chatField col-lg-9 "+t.chatFieldClass()},t._l(t.messages,(function(e){return a("b-alert",{key:e.id,attrs:{variant:t.getAuthor(e.author),show:""}},[e.findedAnswers?a("div",[e.findedAnswers[0].link?a("div",[t._v("Вот, что я нашел:")]):t._e(),t._l(e.findedAnswers,(function(e){return a("div",{key:e.content},[e.link?a("AnswerLink",{attrs:{link:e.link,text:e.content}}):t._e(),e.link?t._e():a("AnswerText",{attrs:{text:e.content}})],1)}))],2):t._e(),t._v(" "+t._s(e.content)+" ")])})),1)])},v=[],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"answer-link btn btn-primary",attrs:{to:this.link}},[t._v(t._s(this.text))])},m=[],_={name:"AnswerLink",props:["link","text"]},b=_,h=(s("5fd8"),Object(l["a"])(b,p,m,!1,null,"3edc4efc",null)),g=h.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"answer-text"},[t._v(t._s(this.text))])},C=[],x={name:"AnswerLink",props:["text"]},k=x,y=(s("f0b5"),Object(l["a"])(k,w,C,!1,null,"67cb92b6",null)),F=y.exports,A={name:"ChatBoard",components:{AnswerLink:g,AnswerText:F},data:function(){return{linked:"https://ya.ru",texted:"Грант для ученых"}},props:["isActive","isFlyingUp","isFlyingDown","messages"],computed:{},methods:{getAuthor:function(t){return"bot"===t?"primary":"danger"},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}}},E=A,$=(s("8588"),Object(l["a"])(E,d,v,!1,null,"79730996",null)),O=$.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-section row justify-content-end"},[s("div",{class:"searchBlock col-lg-9 "+t.chatFieldClass()},[s("b-form",{class:t.textInField,on:{submit:t.onSubmit}},[s("b-form-group",{attrs:{id:"inputGroupQuestion",label:"","label-for":"inputGroupQuestion"}},[s("b-form-input",{class:t.roundedPill,attrs:{id:"inputQuestion",type:"text",placeholder:"Просто напишите то, что ищете...",autocomplete:"off",required:""},on:{focus:function(e){return t.$emit("focus-input")}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),s("b-button",{staticClass:"rounded-circle",attrs:{type:"submit",tabindex:"-1"}},[s("span",{staticClass:"material-icons"},[t._v("send")])])],1)],1)])},j=[],D=(s("498a"),{name:"SearchForm",props:["quest","isActive","isFlyingUp","isFlyingDown"],data:function(){return{inputValue:"",roundedPill:"rounded-pill",textInField:""}},computed:{},methods:{onSubmit:function(t){t.preventDefault(),this.inputValue.trim()&&(this.$emit("add-quest",this.inputValue),this.inputValue="")},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}},watch:{inputValue:function(){this.inputValue.trim()?(console.log("Работает"),this.textInField="isActive"):(console.log("В поле пусто"),this.textInField="")},quest:function(){this.inputValue=this.quest}}}),S=D,U=(s("efb7"),Object(l["a"])(S,q,j,!1,null,null,null)),V=U.exports,R={name:"Chat",components:{ChatHeader:f,ChatBoard:O,SearchForm:V},props:["isActive","isFlyingUp","isFlyingDown","messages","quest"],methods:{},data:function(){return{}}},H=R,I=Object(l["a"])(H,a,n,!1,null,"7e2aaa76",null);e["a"]=I.exports},e8b5:function(t,e,s){var a=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},eba1:function(t,e,s){"use strict";s("8a94")},efb7:function(t,e,s){"use strict";s("d003")},f0b5:function(t,e,s){"use strict";s("7ab7")},fd2d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__wrapper container"},[a("div",{staticClass:"footer__main row row-cols-1 row-cols-md-3"},[a("div",{staticClass:"footer__info col"},[a("router-link",{staticClass:"footer__brend",attrs:{to:"/"}},[a("img",{staticClass:"footer__brend__logo",attrs:{src:s("4aa3"),alt:""}}),a("div",{staticClass:"footer__brend__name"},[t._v("Информационные системы и сервисы")])]),t._m(0)],1),a("ul",{staticClass:"footer__contacts col-md-3"},[t._m(1),t._m(2),t._m(3),a("li",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{href:"#",variant:"link"}},[t._v("Техническая поддержка")])],1)]),a("ul",{staticClass:"footer__links col-md-5"},[a("li",[a("router-link",{attrs:{to:"/news"}},[t._v("Новости")])],1),a("li",[a("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка юридических лиц")])],1),a("li",[a("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка индивидуальных предпринимателей")])],1),a("li",[a("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка физических лиц")])],1)])]),a("hr"),a("div",{staticClass:"footer__copyright"},[t._v(" Все права защищены ")]),a("b-modal",{attrs:{id:"modal-1",title:"Обратная связь","hide-footer":""}},[a("SupportRequestForm")],1)],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer__social"},[s("a",{staticClass:"footer__social__link",attrs:{href:"https://www.facebook.com",target:"_blank"}},[s("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/fb.svg",alt:""}})]),s("a",{staticClass:"footer__social__link",attrs:{href:"https://www.instagram.com",target:"_blank"}},[s("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/instagram.svg",alt:""}})]),s("a",{staticClass:"footer__social__link",attrs:{href:"https://www.youtube.com/",target:"_blank"}},[s("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/youtube.svg",alt:""}})]),s("a",{staticClass:"footer__social__link",attrs:{href:"https://vk.com/",target:"_blank"}},[s("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/vk.svg",alt:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"footer__phone",attrs:{href:"tel:+78007751986"}},[t._v("8-800-775-1986")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"footer__phone",attrs:{href:"tel:+73833541011"}},[t._v("8-383-354-1011")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"footer__mail",attrs:{href:"mailto:info@is-n-s.ru"}},[t._v("info@is-n-s.ru")])])}],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[t._m(0),t._m(1),t._m(2),s("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){return t.$bvModal.hide("modal-1")}}},[t._v("Отправить")])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Адрес электронной почты")]),s("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:"mgp-nsk@yandex.ru",disabled:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Тема обращения")]),s("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[s("option",[t._v("Личный кабинет, регистрация, авторизация")]),s("option",[t._v("Проблемы с обработкой заявки")]),s("option",[t._v("Технические неполадки")]),s("option",[t._v("Прочее")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Текст сообщения")]),s("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"}})])}],o={name:"SupportRequestForm"},c=o,l=s("2877"),u=Object(l["a"])(c,r,i,!1,null,"256438d9",null),f=u.exports,d={name:"Footer",components:{SupportRequestForm:f}},v=d,p=(s("b9be"),Object(l["a"])(v,a,n,!1,null,"2a5f2b34",null));e["a"]=p.exports}}]);
//# sourceMappingURL=chunk-9b6c42da.10ccafd9.js.map