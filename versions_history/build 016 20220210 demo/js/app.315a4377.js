(function(t){function e(e){for(var a,o,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-0e5f32f0":"e7fc8042","chunk-1baa570c":"c7499573","chunk-2011258c":"d5f6493b","chunk-23b34f86":"ff6eaaa4","chunk-42d54c98":"86b937d5","chunk-46f2b470":"9451f8d0","chunk-1e9c2f86":"d2ba6669","chunk-46334574":"dedef187","chunk-7f0cb0b8":"891bea99","chunk-7397b0b4":"fa30ae44","chunk-46fcd697":"b3bedd4b","chunk-6412001c":"212c29a0","chunk-669d0d9c":"f82bd2a9","chunk-6f6b1c02":"5d334067","chunk-72bf46ea":"3607464d","chunk-738da0c2":"a3f7c77b","chunk-7656dfa0":"1b0ba2b7","chunk-78a5c37d":"8a00e4f2","chunk-edcbfa88":"a2200ac4"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-0e5f32f0":1,"chunk-1baa570c":1,"chunk-2011258c":1,"chunk-23b34f86":1,"chunk-42d54c98":1,"chunk-46334574":1,"chunk-7f0cb0b8":1,"chunk-7397b0b4":1,"chunk-46fcd697":1,"chunk-6412001c":1,"chunk-669d0d9c":1,"chunk-6f6b1c02":1,"chunk-72bf46ea":1,"chunk-738da0c2":1,"chunk-7656dfa0":1,"chunk-78a5c37d":1,"chunk-edcbfa88":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0e5f32f0":"f00c3994","chunk-1baa570c":"f00c3994","chunk-2011258c":"45f2e00b","chunk-23b34f86":"0bf9f016","chunk-42d54c98":"611e8543","chunk-46f2b470":"31d6cfe0","chunk-1e9c2f86":"31d6cfe0","chunk-46334574":"3d2da785","chunk-7f0cb0b8":"e18709ba","chunk-7397b0b4":"c77eff56","chunk-46fcd697":"ec521871","chunk-6412001c":"297049bf","chunk-669d0d9c":"16c6b01e","chunk-6f6b1c02":"302ef8c2","chunk-72bf46ea":"a3410002","chunk-738da0c2":"f00c3994","chunk-7656dfa0":"f00c3994","chunk-78a5c37d":"04e57dc5","chunk-edcbfa88":"e18709ba"}[t]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===a||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03b9":function(t,e,n){"use strict";n("bf1e")},"2c3a":function(t,e,n){},"2e7c":function(t,e,n){"use strict";n("e31b")},3400:function(t,e,n){t.exports=n.p+"img/vk.02b6a688.svg"},"39c9":function(t,e,n){t.exports=n.p+"img/fb.54abe28e.svg"},"404b":function(t,e,n){"use strict";n("2c3a")},4108:function(t,e,n){"use strict";n("80a7")},"49f8":function(t,e,n){var a={"./ru.json":"7704"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="49f8"},"4aa3":function(t,e,n){t.exports=n.p+"img/iss_logo_white.31b3d54a.svg"},5452:function(t,e,n){"use strict";n("af35")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var a=n("2b0e"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["default"].use(o["a"]);var r=[{path:"/",name:"Home",meta:{layout:"main-layout"},component:function(){return n.e("chunk-2011258c").then(n.bind(null,"bb51"))}},{path:"/news",name:"News",meta:{layout:"main-layout"},component:function(){return n.e("chunk-23b34f86").then(n.bind(null,"a2f9"))}},{path:"/newsinfo",name:"NewsInfo",meta:{layout:"main-layout"},component:function(){return n.e("chunk-42d54c98").then(n.bind(null,"0871"))}},{path:"/measures",name:"Measures",meta:{layout:"main-layout"},component:function(){return n.e("chunk-669d0d9c").then(n.bind(null,"7e5f"))}},{path:"/measuresAuth",name:"MeasuresAuth",meta:{layout:"main-layout"},component:function(){return Promise.all([n.e("chunk-46f2b470"),n.e("chunk-7397b0b4")]).then(n.bind(null,"cca1"))}},{path:"/subsidyinfo1",name:"SubsidyInfo1",meta:{layout:"main-layout"},component:function(){return n.e("chunk-738da0c2").then(n.bind(null,"1af8"))}},{path:"/subsidyinfo2",name:"SubsidyInfo2",meta:{layout:"main-layout"},component:function(){return n.e("chunk-7656dfa0").then(n.bind(null,"204c"))}},{path:"/subsidyinfo3",name:"SubsidyInfo3",meta:{layout:"main-layout"},component:function(){return n.e("chunk-0e5f32f0").then(n.bind(null,"f2c9"))}},{path:"/subsidyinfo4",name:"SubsidyInfo4",meta:{layout:"main-layout"},component:function(){return n.e("chunk-1baa570c").then(n.bind(null,"9d01"))}},{path:"/subsidyinfo5",name:"SubsidyInfo5",meta:{layout:"main-layout"},component:function(){return n.e("chunk-edcbfa88").then(n.bind(null,"791b"))}},{path:"/subsidyinfo6",name:"SubsidyInfo6",meta:{layout:"main-layout"},component:function(){return n.e("chunk-78a5c37d").then(n.bind(null,"518e"))}},{path:"/subsidyinfotemp/:subId",name:"SubsidyInfoTemp",meta:{layout:"main-layout"},component:function(){return Promise.all([n.e("chunk-46f2b470"),n.e("chunk-1e9c2f86"),n.e("chunk-7f0cb0b8")]).then(n.bind(null,"6a13"))}},{path:"/accountinfo",name:"AccountInfo",meta:{layout:"main-layout"},component:function(){return n.e("chunk-6f6b1c02").then(n.bind(null,"572b"))}},{path:"/applications",name:"Applications",meta:{layout:"main-layout"},component:function(){return Promise.all([n.e("chunk-46f2b470"),n.e("chunk-1e9c2f86"),n.e("chunk-46334574")]).then(n.bind(null,"8f8b"))}},{path:"/authPage",name:"AuthPage",meta:{layout:"empty-layout"},component:function(){return n.e("chunk-72bf46ea").then(n.bind(null,"8345"))}},{path:"/selectUser",name:"SelectUser",meta:{layout:"empty-layout"},component:function(){return n.e("chunk-6412001c").then(n.bind(null,"a3b4"))}},{path:"/siteAdmin",name:"SiteAdmin",meta:{layout:"main-layout"},component:function(){return n.e("chunk-46fcd697").then(n.bind(null,"d016"))}}],i=new o["a"]({routes:r}),c=i,u=n("5f5b"),s=n("b1e0");n("caad"),n("2532");function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date";console.log(t);var n={};return e.includes("date")&&(n.day="2-digit",n.month="2-digit",n.year="numeric"),e.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit"),new Intl.DateTimeFormat("ru-RU",n).format(new Date(t))}var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},d=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("main",{staticClass:"content"},[n("router-view")],1),n("Footer")],1)},h=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header sticky-top shadow"},[a("div",{staticClass:"header__wrapper container"},[a("b-navbar",{attrs:{type:"dark"}},[a("b-navbar-brand",{attrs:{to:"/"}},[a("img",{staticClass:"d-inline-block align-top logo__image",attrs:{src:n("4aa3"),alt:"logo"}}),t._v(" Информационные системы и сервисы ")]),a("HeaderNav",{attrs:{"user-type":"admin"}}),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],staticClass:"d-lg-none"},[a("span",{staticClass:"material-icons"},[t._v("menu")])])],1)],1)])},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-sidebar",{attrs:{id:"sidebar",title:"Меню",backdrop:"","bg-variant":"primary","text-variant":"light",shadow:""}},[n("b-collapse",{attrs:{"is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/news","active-class":"active"}},[t._v(" Новости ")]),n("b-nav-item",{attrs:{to:"/measuresauth","active-class":"active"}},[t._v(" Меры поддержки ")]),n("b-nav-item",{attrs:{to:"/accountinfo","active-class":"active"}},[t._v(" Личный кабинет ")]),t.isAdmin?n("b-nav-item",{attrs:{to:"/applications"}},[t._v(" Заявления ")]):t._e()],1)],1)],1)},_=[],k={name:"HeaderNav",props:["userType"],data:function(){return{isAuth:"authUser"===this.userType||"admin"===this.userType,isAdmin:"admin"===this.userType,navItems:[]}},methods:{getHeaderNav:function(){var t=this,e=new XMLHttpRequest,n="http://192.168.18.171:8080/api/site-data/get-header";e.open("GET",n),e.responseType="json",e.onload=function(){t.navItems=e.response},e.send()}},mounted:function(){this.getHeaderNav()}},y=k,g=(n("404b"),n("2877")),C=Object(g["a"])(y,v,_,!1,null,null,null),w=C.exports,x={name:"Header",components:{HeaderNav:w},props:["auth"]},E=x,S=(n("5452"),Object(g["a"])(E,b,p,!1,null,null,null)),T=S.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__wrapper container"},[n("div",{staticClass:"footer__main row row-cols-1 row-cols-md-3"},[n("div",{staticClass:"footer__info col"},[n("SiteLogo"),n("FooterSocial")],1),n("FooterContacts"),n("FooterNav")],1),n("hr"),n("div",{staticClass:"footer__copyright"},[t._v("Все права защищены")]),n("b-modal",{attrs:{id:"modal-1",title:"Обратная связь","hide-footer":""}},[n("SupportRequestForm")],1)],1)])},O=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"footer__brend",attrs:{to:"/"}},[a("img",{staticClass:"footer__brend__logo",attrs:{src:n("4aa3"),alt:""}}),a("div",{staticClass:"footer__brend__name"},[t._v("Информационные системы и сервисы")])])},L=[],N={name:"SiteLogo"},P=N,A=Object(g["a"])(P,j,L,!1,null,null,null),I=A.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer__social"},[a("a",{staticClass:"footer__social__link",attrs:{href:"https://www.facebook.com",target:"_blank"}},[a("img",{staticClass:"footer__social__logo",attrs:{src:n("39c9"),alt:""}})]),a("a",{staticClass:"footer__social__link",attrs:{href:"https://www.instagram.com",target:"_blank"}},[a("img",{staticClass:"footer__social__logo",attrs:{src:n("89b4"),alt:""}})]),a("a",{staticClass:"footer__social__link",attrs:{href:"https://www.youtube.com/",target:"_blank"}},[a("img",{staticClass:"footer__social__logo",attrs:{src:n("8f2e"),alt:""}})]),a("a",{staticClass:"footer__social__link",attrs:{href:"https://vk.com/",target:"_blank"}},[a("img",{staticClass:"footer__social__logo",attrs:{src:n("3400"),alt:""}})])])}],D={name:"FooterSocial"},H=D,q=(n("03b9"),Object(g["a"])(H,$,M,!1,null,"77a29f4e",null)),R=q.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"footer__contacts col-md-3"},[t._m(0),t._m(1),t._m(2),n("li",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{href:"#",variant:"link"}},[t._v("Техническая поддержка")])],1)])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"footer__phone",attrs:{href:"tel:+78007751986"}},[t._v("8-800-775-1986")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"footer__phone",attrs:{href:"tel:+73833541011"}},[t._v("8-383-354-1011")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"footer__mail",attrs:{href:"mailto:info@is-n-s.ru"}},[t._v("info@is-n-s.ru")])])}],W={name:"FooterContacts"},B=W,J=(n("fb21"),Object(g["a"])(B,U,G,!1,null,"0576afd2",null)),X=J.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"footer__links col-md-5"},[n("li",[n("router-link",{attrs:{to:"/news"}},[t._v("Новости")])],1),n("li",[n("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка юридических лиц")])],1),n("li",[n("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка индивидуальных предпринимателей")])],1),n("li",[n("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка физических лиц")])],1)])},K=[],V={name:"FooterNav",data:function(){return{footerLinksList:[]}},methods:{getFooterMenu:function(){var t=this,e=new XMLHttpRequest,n="http://192.168.18.171:8080/api/site-data/get-footer";e.open("GET",n),e.responseType="json",e.onload=function(){t.footerLinksList=e.response},e.send()}},mounted:function(){this.getFooterMenu()}},Z=V,Q=(n("2e7c"),Object(g["a"])(Z,z,K,!1,null,"67f97f42",null)),Y=Q.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[t._m(0),t._m(1),t._m(2),n("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){return t.$bvModal.hide("modal-1")}}},[t._v("Отправить")])],1)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Адрес электронной почты")]),n("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:"mgp-nsk@yandex.ru",disabled:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Тема обращения")]),n("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[n("option",[t._v("Личный кабинет, регистрация, авторизация")]),n("option",[t._v("Проблемы с обработкой заявки")]),n("option",[t._v("Технические неполадки")]),n("option",[t._v("Прочее")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Текст сообщения")]),n("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"}})])}],nt={name:"SupportRequestForm"},at=nt,ot=Object(g["a"])(at,tt,et,!1,null,"256438d9",null),rt=ot.exports,it={name:"Footer",components:{SupportRequestForm:rt,SiteLogo:I,FooterContacts:X,FooterNav:Y,FooterSocial:R}},ct=it,ut=(n("4108"),Object(g["a"])(ct,F,O,!1,null,"2d0b8783",null)),st=ut.exports,lt={name:"MainLayout",components:{Header:T,Footer:st}},ft=lt,dt=Object(g["a"])(ft,m,h,!1,null,null,null),mt=dt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},bt=[],pt={name:"EmptyLayout"},vt=pt,_t=Object(g["a"])(vt,ht,bt,!1,null,null,null),kt=_t.exports,yt={name:"App",data:function(){return{}},components:{MainLayout:mt,EmptyLayout:kt},computed:{layout:function(){return this.$route.meta.layout}}},gt=yt,Ct=(n("5c0b"),Object(g["a"])(gt,f,d,!1,null,null,null)),wt=Ct.exports,xt=(n("f669"),n("aa27"),n("159b"),n("ac1f"),n("466d"),n("a925"));function Et(){var t=n("49f8"),e={};return t.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var o=a[1];e[o]=t(n)}})),e}a["default"].use(xt["a"]);var St=new xt["a"]({locale:"ru",fallbackLocale:"en",messages:Et()});a["default"].config.productionTip=!1,a["default"].use(u["a"]),a["default"].use(s["a"]),a["default"].filter("date",l),new a["default"]({router:c,i18n:St,render:function(t){return t(wt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7704:function(t){t.exports=JSON.parse('{"message":"hello i18n !!","Number":"Число","Submit":"Подтвердить","Layout":"Расположение","Drag and Drop a form component":"Переместите компонент сюда","No Matches Found":"Ничего не найдено","Text Field":"Текстовое поле","Email":"Электронная почта","Text Area":"Текстовая область","Phone Number":"Номер телефона","Checkbox":"Флажок","Select":"Выпадающий список","Radio":"Радио кнопка","Url":"Ссылка","Data Map":"Ключ - Значение","Data Grid":"Динамический список","Edit Grid":"Сетка данных","Table":"Таблица","Date / Time":"Дата / Время","Day":"День","Time":"Время","File":"Файл","Signature":"Подпись","Content":"Контент","Columns":"Столбцы","Field Set":"Набор полей","Panel":"Панель","Tabs":"Вкладки","Well":"Лист","Label":"Название","Please fix the following errors before submitting":"Пожалуйста исправьте ошибки перед теп как продолжить","Email: Email must be a valid email.":"Не правильный e-mail","Placeholder":"Заполнитель","Description":"Описание","Tooltip":"Подсказка","To add a tooltip to this field,enter text here.":"Введите подсказку здесь","Input Mask":"Маска ввода","Hidden":"Скрытый","Hide Label":"Скрыть название","Save":"Сохранить","Cancel":"Отмена","Remove":"Удалить","Preview":"Предварительный просмотр","Disabled":"Отключен","Validation":"Проверка","Data":"Данные","Property Name":"Имя переменной","Display":"Отображение","Widget":"Тип компонента","required":"{{field}} обязательно для заполнения","pattern":"{{field}} не соответствует маске! {{pattern}}","error":"Пожалуйста исправьте ошибки прежде чем продолжить.","submitError":"Пожалуйста исправьте все ошибки прежде чем продолжить.","invalid_regex":"{{field}} не соответствует маске! {{regex}}.","mask":"{{field}} не соответствует маске.","valueIsNotAvailable":"{{ field }} неправильное значение.","Edit":"Редактировать","Label Position":"Расположение","Label Width":"Ширина","Label Margin":"Отступ","Prefix":"Прификс","Suffix":"Суффикс","Custom CSS Class":"CSS класс","Show Word Counter":"Показать счетчик слов","Show Character Counter":"Показать счетчик символов","Hide Input":"Скрыть ввод","Initial Focus":"Начальный фокус","Allow Spellcheck":"Проверка орфографии","Modal Edit":"Показать во всплывающем окне","Tab Index":"Индекс вкладки","Autocomplete":"Автозавершение"}')},"80a7":function(t,e,n){},"89b4":function(t,e,n){t.exports=n.p+"img/instagram.b1c58ee1.svg"},"8f2e":function(t,e,n){t.exports=n.p+"img/youtube.7731b02b.svg"},"9c0c":function(t,e,n){},aa27:function(t,e,n){},af35:function(t,e,n){},bf1e:function(t,e,n){},e31b:function(t,e,n){},e751:function(t,e,n){},f669:function(t,e,n){},fb21:function(t,e,n){"use strict";n("e751")}});
//# sourceMappingURL=app.315a4377.js.map