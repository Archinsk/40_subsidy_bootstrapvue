(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46334574"],{"0e83":function(e,t,a){},1756:function(e,t,a){"use strict";a("551f")},1839:function(e,t,a){"use strict";a("ad8a")},"551f":function(e,t,a){},"596a":function(e,t,a){"use strict";a("0e83")},"8f8b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("section",{staticClass:"measures"},[a("div",{staticClass:"measures__wrapper"},[a("h4",{staticClass:"measures__heading text-center"},[e._v(" Заявления "),a("span",{staticClass:"badge badge-primary"},[e._v(e._s(e.apps.totalElements))])]),a("div",{staticClass:"row justify-content-center mb-3"},[a("div",{staticClass:"col"},[a("ApplicationsCardsList",{attrs:{"apps-cards-list":e.apps,"items-total":e.itemsTotal,page:e.page,"page-size":e.pageSize,"items-per-page":e.itemsPerPage},on:{"change-page-size":function(t){return e.changePageSize(t)},"change-page":e.changePage,"get-app-form":function(t){return e.getAppForm(t)}}})],1)])])]),a("b-modal",{attrs:{id:"edit-app",title:"Редактирование заявления",size:"xl","hide-footer":"","no-stacking":""},on:{close:e.cleanAppForm}},[e.isLoadedStartForm&&!e.isRequested?[a("Form",{attrs:{form:e.appForm.form.scheme,submission:e.appForm,options:{readOnly:!e.appForm.active}}}),e.appForm.active?e._l(e.appForm.form.actions,(function(t){return a("b-button",{key:t.id,on:{click:function(a){return e.invokeAction(t.id)}}},[e._v(e._s(t.name))])})):e._e()]:[e.isResponsed?a("p",[e._v("Изменения сохранены!")]):[a("b-spinner",{attrs:{variant:"primary",label:"Spinning"}}),a("p",[e._v("Заявление отправляется...")])],a("b-button",{on:{click:e.cleanAppForm}},[e._v("OK")])]],2)],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row row-cols-1"},[e._l(e.appsCardsList.content,(function(t,i){return a("div",{key:i?t.id+"-"+i:t.id,staticClass:"col"},[a("ApplicationsCardsListItem",{attrs:{application:t,index:i},on:{"get-app-form":function(a){return e.$emit("get-app-form",t.id)}}})],1)})),a("Pagination",{directives:[{name:"show",rawName:"v-show",value:e.itemsTotal>e.pageSize,expression:"itemsTotal > pageSize"}],attrs:{"items-total":e.itemsTotal,page:e.page,"page-size":e.pageSize,"items-per-page":e.itemsPerPage},on:{"change-page-size":function(t){return e.$emit("change-page-size",t)},"change-page":function(t){return e.$emit("change-page",t)}}})],2)},r=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card request__card"},[a("div",{staticClass:"card-body d-flex justify-content-between align-items-center"},[a("h5",{staticClass:"card-title mb-0"},[a("span",{staticClass:"badge badge-primary mr-2"},[e._v("№"+e._s(e.application.id))]),e._v(" "+e._s(e.application?e.application.servName:"Наименование меры поддержки")+" ")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.edit-app",modifiers:{"edit-app":!0}}],on:{click:function(t){return e.$emit("get-app-form")}}},[e._v(" Посмотреть заявку ")])],1),a("div",{staticClass:"card-footer bg-transparent request__card__footer"},[a("p",[e._v("Текущий статус: "+e._s(e.application.status))]),a("p",[e._v("Дата подачи: 01.01.2022")]),a("p",[e._v("Статус обновлен: 19.01.2022")])])])},o=[],c={name:"ApplicationsCardsListItem",props:["application","index"],data:function(){return{}},computed:{}},l=c,g=(a("596a"),a("2877")),u=Object(g["a"])(l,p,o,!1,null,"34041316",null),m=u.exports,d=a("cbb7"),h={name:"ApplicationsCardsList",components:{ApplicationsCardsListItem:m,Pagination:d["a"]},props:["appsCardsList","itemsTotal","page","pageSize","itemsPerPage"]},f=h,v=(a("1839"),Object(g["a"])(f,n,r,!1,null,"0cfce5fe",null)),_=v.exports,P=a("5b48"),b=a("bc3a"),C=a.n(b),S={name:"Applications",components:{ApplicationsCardsList:_,Form:P["Form"]},data:function(){return{url:"https://open-demo.isands.ru/api/",apps:[],itemsTotal:0,page:1,pageSize:10,itemsPerPage:[10,25,50],appForm:{active:!1,data:{},form:{actions:[],id:0,modelId:0,scheme:{}},id:0,orderId:"",status:""},isLoadedStartForm:!1,isRequested:!1,isResponsed:!1}},methods:{getApps:function(e,t){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];C.a.get(this.url+"app/get-apps?pageNum="+(e-1)+"&pageSize="+t+"&sortCol="+i+"&sortDesc="+s+"&active="+n).then((function(e){a.apps=e.data,a.itemsTotal=e.data.totalElements})).then((function(){console.log("Ответ распарсен"),console.log(a.appForm),a.isLoadedStartForm=!0}))},getAppForm:function(e){var t=this;this.isLoadedStartForm=!1,this.isRequested=!1,this.isResponsed=!1,C.a.get(this.url+"app/get-appData?id="+e).then((function(e){console.log("Отправлен запрос"),console.log(e);var a=e.data;a.data=JSON.parse(a.data),a.form.scheme=JSON.parse(a.form.scheme),t.appForm=a})).then((function(){console.log("Ответ распарсен"),console.log(t.appForm),t.isLoadedStartForm=!0}))},invokeAction:function(e){var t=this;this.isRequested=!0;var a={actionId:e,userId:13,appId:this.appForm.id,data:JSON.stringify(this.appForm.data)};C.a.post(this.url+"app/action-invoke",a).then((function(e){console.log("Отправлен запрос"),console.log(e),t.appForm=e.data.applicationDTO})).then((function(){console.log("Записан ответ"),t.appForm.data=JSON.parse(t.appForm.data),t.appForm.form.scheme=JSON.parse(t.appForm.form.scheme)})).then((function(){console.log("Распарсена форма и ее заполнение"),t.isResponsed=!0,t.appForm={}}))},cleanAppForm:function(){this.$bvModal.hide("edit-app"),this.isRequested=!1,this.isResponsed=!1},changePageSize:function(e){this.page=e[0],this.pageSize=e[1],this.getApps(this.page,this.pageSize)},changePage:function(e){this.page=e,this.getApps(this.page,this.pageSize)}},mounted:function(){this.getApps(this.page,this.pageSize)}},k=S,z=(a("1756"),Object(g["a"])(k,i,s,!1,null,"e75426b8",null));t["default"]=z.exports},ad8a:function(e,t,a){},cbb7:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("PaginationItemsPerPage",{attrs:{"items-per-page":e.itemsPerPage,"page-size":e.pageSize},on:{"change-page-size":function(t){return e.changePageSize(t)}}}),a("div",{staticClass:"block"},[e._v(" "+e._s(e.pageSize*(e.page-1)+1)+" - "+e._s(e.page===e.pages?e.itemsTotal:e.pageSize*e.page)+" из "+e._s(e.itemsTotal)+" ")]),e.itemsTotal>e.pageSize?a("PaginationPageSelector",{attrs:{pages:e.pages,"active-page":e.page},on:{"change-page":function(t){return e.$emit("change-page",t)}}}):e._e()],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-items-per-page d-none d-lg-block"},e._l(e.itemsPerPage,(function(t){return a("button",{key:t,staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return e.$emit("change-page-size",t)}}},[e._v(" "+e._s(t)+" ")])})),0)},r=[],p={name:"PaginationItemsPerPage",props:["itemsPerPage","pageSize"]},o=p,c=a("2877"),l=Object(c["a"])(o,n,r,!1,null,null,null),g=l.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"measure__pagination"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[e.activePage>1?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Предыдущая"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",--e.activePage)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]):e._e(),e.activePage>2?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("1")])])]):e._e(),e.activePage>3?[e.activePage>4?a("li",{staticClass:"page-item disabled"},[e._m(0)]):a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",2)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("2")])])])]:e._e(),e._l(e.pages,(function(t){return[t>=e.activePage-1&&t<=e.activePage+1?a("li",{key:t,staticClass:"page-item",class:{active:t===e.activePage}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.$emit("change-page",t)}}},[e._v(e._s(t))])]):e._e()]})),e.activePage<e.pages-2?[e.activePage<e.pages-3?a("li",{staticClass:"page-item disabled"},[e._m(1)]):a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",e.pages-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v(e._s(e.pages-1))])])])]:e._e(),e.activePage<e.pages-1?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",e.pages)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v(e._s(e.pages))])])]):e._e(),e.activePage<e.pages?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Следующая"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",++e.activePage)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])]):e._e()],2)])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("…")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"page-link",attrs:{href:"#"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("…")])])}],d={name:"PaginationPageSelector",props:["pages","activePage"]},h=d,f=Object(c["a"])(h,u,m,!1,null,null,null),v=f.exports,_={name:"Pagination",components:{PaginationItemsPerPage:g,PaginationPageSelector:v},props:["itemsTotal","page","pageSize","itemsPerPage"],methods:{changePageSize:function(e){var t=this.countFirstItemNumberOnPage(this.pageSize,this.page),a=this.countNewPage(t,e),i=[];i.push(a),i.push(e),this.$emit("change-page-size",i)},countFirstItemNumberOnPage:function(e,t){return e*(t-1)+1},countNewPage:function(e,t){return Math.ceil(e/t)}},computed:{pages:function(){return Math.ceil(this.itemsTotal/this.pageSize)}}},P=_,b=Object(c["a"])(P,i,s,!1,null,null,null);t["a"]=b.exports}}]);
//# sourceMappingURL=chunk-46334574.dedef187.js.map