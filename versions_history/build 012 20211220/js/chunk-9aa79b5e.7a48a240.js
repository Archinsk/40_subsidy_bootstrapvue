(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9aa79b5e"],{"15d3":function(t,e,o){},"4aa3":function(t,e,o){t.exports=o.p+"img/iss_logo_white.31b3d54a.svg"},"7a2b":function(t,e,o){},"8a94":function(t,e,o){},"99b2":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header sticky-top shadow"},[a("div",{staticClass:"header__wrapper container"},[a("b-navbar",{attrs:{type:"dark"}},[a("b-navbar-brand",{attrs:{to:"/"}},[a("img",{staticClass:"d-inline-block align-top logo__image",attrs:{src:o("4aa3"),alt:"logo"}}),t._v(" Информационные системы и сервисы ")]),a("OffcanvasMenu",{attrs:{type:t.auth}}),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],staticClass:"d-lg-none"},[a("span",{staticClass:"material-icons"},[t._v("menu")])])],1)],1)])},s=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-sidebar",{attrs:{id:"sidebar",title:"Меню",backdrop:"","bg-variant":"primary","text-variant":"light",shadow:""}},[o("b-collapse",{attrs:{"is-nav":""}},[o("b-navbar-nav",[o("b-nav-item",{attrs:{to:"/news","active-class":"active"}},[t._v(" Новости ")]),o("b-nav-item-dropdown",{attrs:{"active-class":"active",text:"Меры поддержки"}},[o("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Все меры поддержки ")]),o("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Юридическим лицам ")]),o("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Индивидуальным предпринимателям ")]),o("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Физическим лицам ")])],1),o("b-nav-item",{attrs:{to:"true"===t.type?"/accountinfo":"/authPage","active-class":"active"}},[t._v(" "+t._s("true"===t.type?"Личный кабинет":"Войти")+" ")]),o("b-nav-item",{attrs:{to:"/siteAdmin"}},[o("span",{staticClass:"material-icons"},[t._v("settings")])])],1)],1)],1)},n=[],i={name:"OffcanvasMenu",props:["type"]},l=i,m=(o("d1d3"),o("2877")),u=Object(m["a"])(l,r,n,!1,null,null,null),c=u.exports,d={name:"HeaderOffcavas",components:{OffcanvasMenu:c},props:["auth"]},p=d,f=(o("eba1"),Object(m["a"])(p,a,s,!1,null,null,null));e["a"]=f.exports},a518:function(t,e,o){"use strict";o("7a2b")},b66c:function(t,e,o){},b9be:function(t,e,o){"use strict";o("b66c")},d016:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-wrapper"},[o("HeaderOffcavas",{attrs:{auth:"true"}}),o("main",{staticClass:"content"},[o("section",{staticClass:"container"},[o("form",[o("h4",[t._v("Данные сайта")]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input1"}},[t._v("Имя файла фавиконки")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.faviconFileName,expression:"faviconFileName"}],staticClass:"form-control",attrs:{type:"text",id:"input1"},domProps:{value:t.faviconFileName},on:{input:function(e){e.target.composing||(t.faviconFileName=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input2"}},[t._v("Идентификатор фавиконки")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.faviconId,expression:"faviconId"}],staticClass:"form-control",attrs:{type:"text",id:"input2"},domProps:{value:t.faviconId},on:{input:function(e){e.target.composing||(t.faviconId=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input3"}},[t._v("Имя файла логотипа")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logoFileName,expression:"logoFileName"}],staticClass:"form-control",attrs:{type:"text",id:"input3"},domProps:{value:t.logoFileName},on:{input:function(e){e.target.composing||(t.logoFileName=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input4"}},[t._v("Идентификатор логотипа")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.logoId,expression:"logoId"}],staticClass:"form-control",attrs:{type:"text",id:"input4"},domProps:{value:t.logoId},on:{input:function(e){e.target.composing||(t.logoId=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input5"}},[t._v("Язык хэдера")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.headerLocaleCode,expression:"headerLocaleCode"}],staticClass:"form-control",attrs:{type:"text",id:"input5"},domProps:{value:t.headerLocaleCode},on:{input:function(e){e.target.composing||(t.headerLocaleCode=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input6"}},[t._v("Наименование организации")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.headerText,expression:"headerText"}],staticClass:"form-control",attrs:{type:"text",id:"input6"},domProps:{value:t.headerText},on:{input:function(e){e.target.composing||(t.headerText=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input7"}},[t._v("Язык заголовка сайта")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleLocaleCode,expression:"titleLocaleCode"}],staticClass:"form-control",attrs:{type:"text",id:"input7"},domProps:{value:t.titleLocaleCode},on:{input:function(e){e.target.composing||(t.titleLocaleCode=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input8"}},[t._v("Заголовок сайта")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],staticClass:"form-control",attrs:{type:"text",id:"input8"},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}})])]),o("h4",[t._v("Данные меню")]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input9"}},[t._v("Идентификатор пункта")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemId,expression:"menuItemId"}],staticClass:"form-control",attrs:{type:"text",id:"input9"},domProps:{value:t.menuItemId},on:{input:function(e){e.target.composing||(t.menuItemId=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input10"}},[t._v("Тип пункта")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemType,expression:"menuItemType"}],staticClass:"form-control",attrs:{type:"text",id:"input10"},domProps:{value:t.menuItemType},on:{input:function(e){e.target.composing||(t.menuItemType=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input11"}},[t._v("Язык")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemLocale,expression:"menuItemLocale"}],staticClass:"form-control",attrs:{type:"text",id:"input11"},domProps:{value:t.menuItemLocale},on:{input:function(e){e.target.composing||(t.menuItemLocale=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input12"}},[t._v("Наименование")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemText,expression:"menuItemText"}],staticClass:"form-control",attrs:{type:"text",id:"input12"},domProps:{value:t.menuItemText},on:{input:function(e){e.target.composing||(t.menuItemText=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input13"}},[t._v("Файл иконки")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemIcon,expression:"menuItemIcon"}],staticClass:"form-control",attrs:{type:"text",id:"input13"},domProps:{value:t.menuItemIcon},on:{input:function(e){e.target.composing||(t.menuItemIcon=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input14"}},[t._v("Дочерние элементы")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemChilds,expression:"menuItemChilds"}],staticClass:"form-control",attrs:{type:"text",id:"input14"},domProps:{value:t.menuItemChilds},on:{input:function(e){e.target.composing||(t.menuItemChilds=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input15"}},[t._v("Идентификатор родителя")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemParentId,expression:"menuItemParentId"}],staticClass:"form-control",attrs:{type:"text",id:"input15"},domProps:{value:t.menuItemParentId},on:{input:function(e){e.target.composing||(t.menuItemParentId=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input16"}},[t._v("Порядок")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemOrder,expression:"menuItemOrder"}],staticClass:"form-control",attrs:{type:"text",id:"input16"},domProps:{value:t.menuItemOrder},on:{input:function(e){e.target.composing||(t.menuItemOrder=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input17"}},[t._v("Админ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemAdmin,expression:"menuItemAdmin"}],staticClass:"form-control",attrs:{type:"text",id:"input17"},domProps:{value:t.menuItemAdmin},on:{input:function(e){e.target.composing||(t.menuItemAdmin=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input18"}},[t._v("Гость")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.menuItemGuest,expression:"menuItemGuest"}],staticClass:"form-control",attrs:{type:"text",id:"input18"},domProps:{value:t.menuItemGuest},on:{input:function(e){e.target.composing||(t.menuItemGuest=e.target.value)}}})])]),o("h4",[t._v("Ссылки футера")]),o("SiteAdminFooterMenu"),o("h4",[t._v("Контакты")]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input29"}},[t._v("Идентификатор пункта меню")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerContactsItemId,expression:"footerContactsItemId"}],staticClass:"form-control",attrs:{type:"text",id:"input29"},domProps:{value:t.footerContactsItemId},on:{input:function(e){e.target.composing||(t.footerContactsItemId=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input30"}},[t._v("Иконка")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerContactsItemIcon,expression:"footerContactsItemIcon"}],staticClass:"form-control",attrs:{type:"text",id:"input30"},domProps:{value:t.footerContactsItemIcon},on:{input:function(e){e.target.composing||(t.footerContactsItemIcon=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input31"}},[t._v("Порядок")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerContactsItemOrder,expression:"footerContactsItemOrder"}],staticClass:"form-control",attrs:{type:"text",id:"input31"},domProps:{value:t.footerContactsItemOrder},on:{input:function(e){e.target.composing||(t.footerContactsItemOrder=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input32"}},[t._v("Имя файла лого")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerContactsLogoFileName,expression:"footerContactsLogoFileName"}],staticClass:"form-control",attrs:{type:"text",id:"input32"},domProps:{value:t.footerContactsLogoFileName},on:{input:function(e){e.target.composing||(t.footerContactsLogoFileName=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input33"}},[t._v("Идентификатор лого")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerContactsItemLogoId,expression:"footerContactsItemLogoId"}],staticClass:"form-control",attrs:{type:"text",id:"input33"},domProps:{value:t.footerContactsItemLogoId},on:{input:function(e){e.target.composing||(t.footerContactsItemLogoId=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input34"}},[t._v("Язык")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerContactsItemLocale,expression:"footerContactsItemLocale"}],staticClass:"form-control",attrs:{type:"text",id:"input34"},domProps:{value:t.footerContactsItemLocale},on:{input:function(e){e.target.composing||(t.footerContactsItemLocale=e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input35"}},[t._v("Наименование")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerContactsItemText,expression:"footerContactsItemText"}],staticClass:"form-control",attrs:{type:"text",id:"input35"},domProps:{value:t.footerContactsItemText},on:{input:function(e){e.target.composing||(t.footerContactsItemText=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input36"}},[t._v("Адрес ссылки")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerContactsItemUrl,expression:"footerContactsItemUrl"}],staticClass:"form-control",attrs:{type:"text",id:"input36"},domProps:{value:t.footerContactsItemUrl},on:{input:function(e){e.target.composing||(t.footerContactsItemUrl=e.target.value)}}})])]),o("h4",[t._v("Что-то ещё")]),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input100"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleLocaleCode,expression:"titleLocaleCode"}],staticClass:"form-control",attrs:{type:"text",id:"input100"},domProps:{value:t.titleLocaleCode},on:{input:function(e){e.target.composing||(t.titleLocaleCode=e.target.value)}}})]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"input101"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],staticClass:"form-control",attrs:{type:"text",id:"input101"},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}})])]),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sign in")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sign in")])],1)])]),o("Footer")],1)},s=[],r=o("99b2"),n=o("fd2d"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._l(t.footerMenu,(function(t,e){return o("div",{key:t.id},[o("SiteAdminFooterMenuItem",{attrs:{item:t,index:e}})],1)})),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-2"},[o("button",{staticClass:"btn btn-outline-primary btn-block",on:{click:t.addFooterMenuItem}},[t._v("Добавить ")])]),t._m(0),t._m(1)])],2)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group col-2"},[o("button",{staticClass:"btn btn-outline-primary btn-block"},[t._v("Отмена")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group col-2"},[o("button",{staticClass:"btn btn-primary btn-block"},[t._v("Применить")])])}],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input19"}},[t._v("Id")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemId,expression:"footerMenuItemId"}],staticClass:"form-control",attrs:{type:"text",id:"input19"},domProps:{value:t.footerMenuItemId},on:{input:function(e){e.target.composing||(t.footerMenuItemId=e.target.value)}}})]),o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input20"}},[t._v("Тип")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemType,expression:"footerMenuItemType"}],staticClass:"form-control",attrs:{type:"text",id:"input20"},domProps:{value:t.footerMenuItemType},on:{input:function(e){e.target.composing||(t.footerMenuItemType=e.target.value)}}})]),o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input21"}},[t._v("Язык")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemLocale,expression:"footerMenuItemLocale"}],staticClass:"form-control",attrs:{type:"text",id:"input21"},domProps:{value:t.footerMenuItemLocale},on:{input:function(e){e.target.composing||(t.footerMenuItemLocale=e.target.value)}}})]),o("div",{staticClass:"form-group col-3"},[0===t.index?o("label",{attrs:{for:"input22"}},[t._v("Имя")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemText,expression:"footerMenuItemText"}],staticClass:"form-control",attrs:{type:"text",id:"input22"},domProps:{value:t.footerMenuItemText},on:{input:function(e){e.target.composing||(t.footerMenuItemText=e.target.value)}}})]),o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input23"}},[t._v("Иконка")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemIcon,expression:"footerMenuItemIcon"}],staticClass:"form-control",attrs:{type:"text",id:"input23"},domProps:{value:t.footerMenuItemIcon},on:{input:function(e){e.target.composing||(t.footerMenuItemIcon=e.target.value)}}})]),o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input24"}},[t._v("Пункты")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemChilds,expression:"footerMenuItemChilds"}],staticClass:"form-control",attrs:{type:"text",id:"input24"},domProps:{value:t.footerMenuItemChilds},on:{input:function(e){e.target.composing||(t.footerMenuItemChilds=e.target.value)}}})]),o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input25"}},[t._v("IdPar")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemParentId,expression:"footerMenuItemParentId"}],staticClass:"form-control",attrs:{type:"text",id:"input25"},domProps:{value:t.footerMenuItemParentId},on:{input:function(e){e.target.composing||(t.footerMenuItemParentId=e.target.value)}}})]),o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input26"}},[t._v("Порядок")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemOrder,expression:"footerMenuItemOrder"}],staticClass:"form-control",attrs:{type:"text",id:"input26"},domProps:{value:t.footerMenuItemOrder},on:{input:function(e){e.target.composing||(t.footerMenuItemOrder=e.target.value)}}})]),o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input27"}},[t._v("Админ")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemAdmin,expression:"footerMenuItemAdmin"}],staticClass:"form-control",attrs:{type:"text",id:"input27"},domProps:{value:t.footerMenuItemAdmin},on:{input:function(e){e.target.composing||(t.footerMenuItemAdmin=e.target.value)}}})]),o("div",{staticClass:"form-group col-1"},[0===t.index?o("label",{attrs:{for:"input28"}},[t._v("Гость")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.footerMenuItemGuest,expression:"footerMenuItemGuest"}],staticClass:"form-control",attrs:{type:"text",id:"input28"},domProps:{value:t.footerMenuItemGuest},on:{input:function(e){e.target.composing||(t.footerMenuItemGuest=e.target.value)}}})])])},u=[],c={name:"FooterMenuItem",props:["item","index"],data:function(){return{footerMenuItemId:this.item?this.item.id:"19",footerMenuItemLocale:this.item?this.item.title[0].localeCode:"20",footerMenuItemText:this.item?this.item.title[0].text:"21",footerMenuItemType:this.item?this.item.type:"22",footerMenuItemIcon:this.item?this.item.cssIcon:"23",footerMenuItemChilds:this.item?this.item.childs:"24",footerMenuItemParentId:this.item?this.item.parentId:"25",footerMenuItemOrder:this.item?this.item.order:"26",footerMenuItemAdmin:this.item?this.item.admin:"27",footerMenuItemGuest:this.item?this.item.guest:"28"}}},d=c,p=o("2877"),f=Object(p["a"])(d,m,u,!1,null,"7ef6e0ce",null),v=f.exports,g={name:"SiteAdminFooterMenu",components:{SiteAdminFooterMenuItem:v},data:function(){return{footerMenu:[],footerMenuNewItem:{title:[{localeCode:"ru",text:"Новый пункт"}],type:2,cssIcon:"bi-icon",childs:[],parentId:0,order:0,admin:!1,guest:!0}}},methods:{getFooterMenu:function(){var t=this,e=new XMLHttpRequest,o="https://open-newtemplate.isands.ru/open-core/api/site-data/get-footer";e.open("GET",o),e.responseType="json",e.onload=function(){console.log("Ответ на запрос меню футера из админки футера:"),console.log(e.response),t.footerMenu=e.response},e.send()},addFooterMenuItem:function(){var t=new XMLHttpRequest,e="https://open-newtemplate.isands.ru/open-core/api/site-data/set-footer";t.open("POST",e,!0),t.setRequestHeader("Content-type","application/json"),t.send(JSON.stringify(this.footerMenuNewItem))}},mounted:function(){this.getFooterMenu()}},I=g,C=Object(p["a"])(I,i,l,!1,null,"6e9f39ff",null),_=C.exports,b={name:"SiteAdmin",components:{HeaderOffcavas:r["a"],Footer:n["a"],SiteAdminFooterMenu:_},data:function(){return{faviconFileName:"1",faviconId:"2",logoFileName:"3",logoId:"4",headerLocaleCode:"5",headerText:"6",titleLocaleCode:"7",titleText:"8",menuItemId:"9",menuItemLocale:"10",menuItemText:"11",menuItemType:"12",menuItemIcon:"13",menuItemChilds:"14",menuItemParentId:"15",menuItemOrder:"16",menuItemAdmin:"17",menuItemGuest:"18",footerContactsItemId:"29",footerContactsItemIcon:"30",footerContactsItemOrder:"31",footerContactsLogoFileName:"32",footerContactsItemLogoId:"33",footerContactsItemLocale:"34",footerContactsItemText:"35",footerContactsItemUrl:"36"}},methods:{getSiteInfo:function(){var t=this,e=new XMLHttpRequest,o="https://open-newtemplate.isands.ru/open-core/api/site-data/get-main";e.open("GET",o),e.responseType="json",e.onload=function(){console.log("Ответ на запрос данных сайта:"),console.log(e.response),t.faviconFileName=e.response.favicon,t.faviconId=e.response.faviconId,t.logoFileName=e.response.logo,t.logoId=e.response.logoId,t.headerLocaleCode=e.response.header[0].localeCode,t.headerText=e.response.header[0].text,t.titleLocaleCode=e.response.title[0].localeCode,t.titleText=e.response.title[0].text},e.send()},getMainMenu:function(){var t=this,e=new XMLHttpRequest,o="https://open-newtemplate.isands.ru/open-core/api/site-data/get-header";e.open("GET",o),e.responseType="json",e.onload=function(){console.log("Ответ на запроc меню хедера:"),console.log(e.response),t.menuItemId=e.response[0].id,t.menuItemLocale=e.response[0].title[0].localeCode,t.menuItemText=e.response[0].title[0].text,t.menuItemType=e.response[0].type,t.menuItemIcon=e.response[0].cssIcon,t.menuItemChilds=e.response[0].childs,t.menuItemParentId=e.response[0].parentId,t.menuItemOrder=e.response[0].order,t.menuItemAdmin=e.response[0].admin,t.menuItemGuest=e.response[0].guest},e.send()},getFooterContacts:function(){var t=this,e=new XMLHttpRequest,o="https://open-newtemplate.isands.ru/open-core/api/site-data/get-footer";e.open("GET",o),e.responseType="json",e.onload=function(){console.log("Ответ на запроc контактов футера:"),console.log(e.response),t.footerContactsItemId=e.response[0].id,t.footerContactsItemIcon=e.response[0].cssIcon,t.footerContactsItemOrder=e.response[0].order,t.footerContactsLogoFileName=e.response[0].logo,t.footerContactsItemLogoId=e.response[0].logoId,t.footerContactsItemLocale=e.response[0].title[0].localeCode,t.footerContactsItemText=e.response[0].title[0].text,t.footerContactsItemUrl=e.response[0].url},e.send()}},mounted:function(){this.getSiteInfo(),this.getMainMenu(),this.getFooterContacts()}},x=b,h=(o("a518"),Object(p["a"])(x,a,s,!1,null,"923f18cc",null));e["default"]=h.exports},d1d3:function(t,e,o){"use strict";o("15d3")},eba1:function(t,e,o){"use strict";o("8a94")},fd2d:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__wrapper container"},[a("div",{staticClass:"footer__main row row-cols-1 row-cols-md-3"},[a("div",{staticClass:"footer__info col"},[a("router-link",{staticClass:"footer__brend",attrs:{to:"/"}},[a("img",{staticClass:"footer__brend__logo",attrs:{src:o("4aa3"),alt:""}}),a("div",{staticClass:"footer__brend__name"},[t._v("Информационные системы и сервисы")])]),t._m(0)],1),a("ul",{staticClass:"footer__contacts col-md-3"},[t._m(1),t._m(2),t._m(3),a("li",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{href:"#",variant:"link"}},[t._v("Техническая поддержка")])],1)]),a("ul",{staticClass:"footer__links col-md-5"},[a("li",[a("router-link",{attrs:{to:"/news"}},[t._v("Новости")])],1),a("li",[a("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка юридических лиц")])],1),a("li",[a("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка индивидуальных предпринимателей")])],1),a("li",[a("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка физических лиц")])],1)])]),a("hr"),a("div",{staticClass:"footer__copyright"},[t._v(" Все права защищены ")]),a("b-modal",{attrs:{id:"modal-1",title:"Обратная связь","hide-footer":""}},[a("SupportRequestForm")],1)],1)])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer__social"},[o("a",{staticClass:"footer__social__link",attrs:{href:"https://www.facebook.com",target:"_blank"}},[o("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/fb.svg",alt:""}})]),o("a",{staticClass:"footer__social__link",attrs:{href:"https://www.instagram.com",target:"_blank"}},[o("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/instagram.svg",alt:""}})]),o("a",{staticClass:"footer__social__link",attrs:{href:"https://www.youtube.com/",target:"_blank"}},[o("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/youtube.svg",alt:""}})]),o("a",{staticClass:"footer__social__link",attrs:{href:"https://vk.com/",target:"_blank"}},[o("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/vk.svg",alt:""}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("a",{staticClass:"footer__phone",attrs:{href:"tel:+78007751986"}},[t._v("8-800-775-1986")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("a",{staticClass:"footer__phone",attrs:{href:"tel:+73833541011"}},[t._v("8-383-354-1011")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("a",{staticClass:"footer__mail",attrs:{href:"mailto:info@is-n-s.ru"}},[t._v("info@is-n-s.ru")])])}],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[t._m(0),t._m(1),t._m(2),o("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){return t.$bvModal.hide("modal-1")}}},[t._v("Отправить")])],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Адрес электронной почты")]),o("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:"mgp-nsk@yandex.ru",disabled:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Тема обращения")]),o("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[o("option",[t._v("Личный кабинет, регистрация, авторизация")]),o("option",[t._v("Проблемы с обработкой заявки")]),o("option",[t._v("Технические неполадки")]),o("option",[t._v("Прочее")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Текст сообщения")]),o("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"}})])}],i={name:"SupportRequestForm"},l=i,m=o("2877"),u=Object(m["a"])(l,r,n,!1,null,"256438d9",null),c=u.exports,d={name:"Footer",components:{SupportRequestForm:c}},p=d,f=(o("b9be"),Object(m["a"])(p,a,s,!1,null,"2a5f2b34",null));e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-9aa79b5e.7a48a240.js.map