(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46a9d72d"],{"0c2b":function(t,e,r){"use strict";r("1991")},1991:function(t,e,r){},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,s,a){try{var o=t[s](a),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,s){var a=t.apply(e,r);function o(t){n(a,i,s,o,c,"next",t)}function c(t){n(a,i,s,o,c,"throw",t)}o(void 0)}))}}},"3d3b":function(t,e,r){},"419d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"btn btn-outline-primary col-12 mb-2",on:{click:function(e){return t.$emit("select-esia")}}},[t._v(" Подобрать с учетом ЕСИА ")]),r("div",{staticClass:"btn btn-outline-primary col-12 mb-2",on:{click:function(e){return t.$emit("chat-activation")}}},[t._v(" Подобрать с помощью чат-бота ")])]),t._l(t.fd,(function(t){return r("FilterCheckboxesGroup",{key:t.title,attrs:{filterData:t}})})),r("div",{staticClass:"row"},[r("div",{staticClass:"col mb-3"},[r("div",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return t.$emit("scenario-filter")}}},[t._v(" Применить ")])]),r("div",{staticClass:"col mb-3"},[r("div",{staticClass:"btn btn-outline-primary btn-block",on:{click:function(e){return t.$emit("clear-filter")}}},[t._v(" Очистить ")])])])],2)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form-group",{attrs:{label:t.filterData.title},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.ariaDescribedby;return[r("b-form-checkbox-group",{attrs:{options:t.filterData.options,"aria-describedby":n,name:"flavour-2a",stacked:""},model:{value:t.filterData.selected,callback:function(e){t.$set(t.filterData,"selected",e)},expression:"filterData.selected"}})]}}])})],1)},a=[],o={name:"FilterCheckboxesGroup",props:["filterData"],data:function(){return{selected:[],options:[{text:"Лесоводство и лесозаготовки",value:"1"},{text:"Добыча угля",value:"2"},{text:"Производство одежды",value:"3"},{text:"Строительство зданий",value:"4"},{text:"Научные исследования и разработки",value:"5"},{text:"Деятельность общественных организаций",value:"6"},{text:"Производство мебели",value:"7"},{text:"Деятельность профессиональная научная и техническая прочая",value:"8"},{text:"Деятельность в области спорта, отдыха и развлечений",value:"9"},{text:"10 – тип поддержки, который нам в итоге нужно найти",value:"10"}]}}},c=o,u=r("2877"),l=Object(u["a"])(c,s,a,!1,null,"5fdc2ed3",null),h=l.exports,f={name:"MeasuresFiltersList",props:["fd"],components:{FilterCheckboxesGroup:h}},d=f,p=Object(u["a"])(d,n,i,!1,null,"3af07466",null);e["a"]=p.exports},"616b":function(t,e,r){"use strict";r("89ce")},"89ce":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,s=Object.create(i.prototype),a=new P(n||[]);return s._invoke=L(t,r,a),s}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function g(){}function y(){}var _={};c(_,s,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(D([])));b&&b!==r&&n.call(b,s)&&(_=b);var x=y.prototype=m.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(i,s,a,o){var c=l(t[i],t,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,o)}),(function(t){r("throw",t,a,o)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,o)}))}o(c.arg)}var i;function s(t,n){function s(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function L(t,e,r){var n=h;return function(i,s){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw s;return T()}r.method=i,r.arg=s;while(1){var a=r.delegate;if(a){var o=E(a,r);if(o){if(o===v)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var s=i.arg;return s?s.done?(r[t.resultName]=s.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function D(t){if(t){var r=t[s];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=y,c(x,"constructor",y),c(y,"constructor",g),g.displayName=c(y,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,o,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(C.prototype),c(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,i,s){void 0===s&&(s=Promise);var a=new C(u(e,r,n,i),s);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),c(x,o,"Generator"),c(x,s,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=D,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return o.type="throw",o.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],o=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=t,a.arg=e,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;M(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a5f3:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row row-cols-1"},[t._l(t.measuresCardsList.content,(function(e){return r("div",{key:e.id,staticClass:"col"},[t.filteredMeasures.includes(e.id)?r("MeasuresCardsListItem",{attrs:{measure:e}}):t._e()],1)})),r("Pagination",{directives:[{name:"show",rawName:"v-show",value:t.itemsTotal>t.pageSize,expression:"itemsTotal > pageSize"}],attrs:{"items-total":t.itemsTotal,page:t.page,"page-size":t.pageSize,"items-per-page":t.itemsPerPage},on:{changepagesize2:function(e){return t.$emit("changepagesize3",e)},"change-page":function(e){return t.changePage(e)}}})],2)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card measure__card"},[n("div",{staticClass:"card-body row"},[n("router-link",{staticClass:"measure-link col-12 col-md-9 stretched-link",attrs:{to:"/subsidyinfotemp/"+t.measure.id}},[n("h5",{staticClass:"card-title"},[n("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.measure.id))]),t._v(" "+t._s(t.measure.name)+" ")])]),n("div",{staticClass:"card-text col-12 col-md-3"},[t._v(" Приём заявок"),n("br"),n("b",[t._v(" "+t._s(t.measurePeriod)+" ")]),t.measure.active?t._e():[n("br"),n("i",[t._v(" "+t._s(t.isActive)+" ")])]],2)],1),n("hr"),n("div",{staticClass:"card-footer bg-transparent measure__card__footer row"},[t._m(0),n("div",{staticClass:"measure__details col-md-6 col-lg-3"},[n("div",{staticClass:"measure__size"},[n("div",{staticClass:"measure__size__header"},[t._v(" "+t._s("нф"===t.measure.measure_size?"Нефинансовая мера поддержки":"Размер поддержки")+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"нф"!==t.measure.measure_size,expression:"measure.measure_size !== 'нф'"}],staticClass:"measure__size__value"},[t._v(" до "+t._s(t.measure.measure_size)+" рублей ")])])]),n("div",{staticClass:"measure__buttons col"},[n("img",{directives:[{name:"show",rawName:"v-show",value:"1"===t.measure.electronic_form,expression:"measure.electronic_form === '1'"}],staticClass:"measure__web__accessibility",attrs:{src:r("d61c"),title:"По данной мере поддержки есть возможность электронной подачи",alt:""}}),n("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#"}},[t._v("Получить поддержку")])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"measure__owner__logo col-md-6 col-lg-5"},[r("img",{staticClass:"measure__owner__logo__image",attrs:{src:"images/initiators_logo/mineco_logo.png",alt:"..."}}),r("div",{staticClass:"measure__owner__logo__text"},[r("div",{staticClass:"logo__header__comment"},[t._v("Инициатор")]),r("div",{staticClass:"logo__name"},[t._v(" Министерство экономического развития ")])])])}],o={name:"MeasuresCardsListItem",props:["measure"],data:function(){return{}},computed:{measurePeriod:function(){var t="",e={day:"2-digit",month:"2-digit",year:"numeric"};return this.measure.startDate&&(t+="c "+new Intl.DateTimeFormat("ru-RU",e).format(new Date(this.measure.startDate))+" "),this.measure.endDate&&(t+="по "+new Intl.DateTimeFormat("ru-RU",e).format(new Date(this.measure.endDate))),this.measure.startDate||this.measure.endDate||(t="даты не указаны"),t},isActive:function(){return this.measure.active?"активна":"не активна"}}},c=o,u=(r("cac3"),r("2877")),l=Object(u["a"])(c,s,a,!1,null,"e3579140",null),h=l.exports,f=r("cbb7"),d={name:"MeasuresCardsList",components:{MeasuresCardsListItem:h,Pagination:f["a"]},props:["measuresCardsList","filteredMeasures","itemsTotal","page","pageSize","itemsPerPage"]},p=d,v=(r("616b"),Object(u["a"])(p,n,i,!1,null,"1c1f2f14",null));e["a"]=v.exports},cac3:function(t,e,r){"use strict";r("3d3b")},cca1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"measures"},[r("div",{staticClass:"measures__wrapper"},[r("h4",{staticClass:"measures__heading text-center"},[t._v(" Меры поддержки "),r("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.filtredEsiaMeasures.length))])]),r("div",{staticClass:"row justify-content-center mb-3"},[r("div",{staticClass:"col-2"},[r("MeasuresFilter",{attrs:{fd:t.filters},on:{"select-esia":t.selectEsia,"chat-activation":t.chatActivation,"clear-filter":t.clearFilter,"scenario-filter":t.scenarioFilter}})],1),r("div",{staticClass:"col-6"},[r("MeasuresCardsList",{attrs:{"measures-cards-list":t.measuresCardsList,"filtered-measures":t.filtredEsiaMeasures,"items-total":t.itemsTotal,page:t.page,"page-size":t.pageSize,"items-per-page":t.itemsPerPage},on:{changepagesize3:function(e){return t.changePageSize(e)}}})],1)])])]),r("section",{directives:[{name:"show",rawName:"v-show",value:t.chatIsActive,expression:"chatIsActive"}],staticClass:"bot"},[r("Chat",{attrs:{isActive:"true",isFlyingDown:"true",messages:t.replicsList,quest:t.inputText},on:{"close-chat":t.chatDisactivation,"focus-input":t.focusInput,"add-quest":function(e){return t.addQuest(e)}}})],1)])},i=[],s=r("1da1"),a=(r("96cf"),r("4de4"),r("159b"),r("498a"),r("d81d"),r("9911"),r("a5f3")),o=r("419d"),c=r("e6b0"),u={name:"Measures",components:{MeasuresCardsList:a["a"],MeasuresFilter:o["a"],Chat:c["a"]},data:function(){return{measuresCardsList:[],itemsTotal:0,page:1,pageSize:100,itemsPerPage:[3,5,10,20],scenario:0,chatIsActive:!1,inputText:"",replics:[{id:1,author:"bot",content:"Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки."},{id:2,author:"bot",content:"Укажите, какой объем денежных средств вам требуется?"}],faq:[{id:1,keywords:["covid","ковид","корона"],answers:[{content:"Запись на вакцинацию",link:"https://google.com"},{content:"Сертификат вакцинированного",link:"https://ya.ru"},{content:"Мои QR-коды",link:"https://ya.ru"}]},{id:2,keywords:["спорт"],answers:[{content:"Присвоение спортивных разрядов",link:"https://google.com"},{content:"Присвоение квалификационных категорий спортивных судей",link:"https://google.com"},{content:"Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации",link:"https://google.com"}]},{id:3,keywords:["грант","гранты"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"},{content:"Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных сферах экономики",link:"./subsidyinfo3"}]},{id:4,keywords:["субсидия","субсидии"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:5,keywords:["инновация","инновации"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:6,keywords:["наука"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"}]},{id:7,keywords:["20000000","20000000 руб","20 000 000","20 000 000 руб"],answers:[{content:"Укажите срок оказания поддержки в формате «ДД.ММ.ГГГГ - ДД.ММ.ГГГГ»",link:""}]},{id:7,keywords:["01.01.2022-31.12.2022"],answers:[{content:"Субсидия на возмещение части затрат, направленных на проведение комплекса агротехнологических работ, повышение уровня экологической безопасности сельскохозяйственного производства, а также на повышение плодородия и качества почв",link:"./subsidyinfo5"},{content:"Субсидия на возмещение затрат, понесенных в текущем финансовом году, связанных с закупкой сельскохозяйственной техники",link:"./subsidyinfo5"}]}],filters:[{title:"Отрасль экономики:",selected:[],options:[{text:"Промышленность",value:"1"},{text:"Сельское хозяйство",value:"2"},{text:"Строительство",value:"3"},{text:"Транспорт",value:"4"},{text:"Связь",value:"5"},{text:"Торговля и общественное питание",value:"6"},{text:"Культура и искусство",value:"7"},{text:"Информационно-вычислительное обслуживание",value:"8"},{text:"Наука и научное обслуживание",value:"9"}]},{title:"Форма/вид поддержки:",selected:[],options:[{text:"Финансовая",value:"1"},{text:"Информационная",value:"2"},{text:"Образовательная",value:"3"},{text:"Консультационная",value:"4"},{text:"Имущественная",value:"5"},{text:"Инновационная",value:"6"}]},{title:"Вид получателя:",selected:[],options:[{text:"ИП",value:"1"},{text:"ЮЛ",value:"2"}]},{title:"Размер поддержки:",selected:[],options:[{text:"до 100 т.р.",value:"1"},{text:"от 500 т.р. до 1 млн.р.",value:"2"},{text:"от 1 млн.руб до 10 млн.р.",value:"3"},{text:"от 10 млн.руб до 20 млн.р.",value:"4"}]},{title:"Срок оказания поддержки:",selected:[],options:[{text:"до 1 месяца",value:"1"},{text:"от 1 до 3 месяцев",value:"2"},{text:"от 3 до 6 месяцев",value:"3"},{text:"от 6 месяцев до 1 года",value:"4"},{text:"от 1 года до 3 лет",value:"5"}]},{title:"Категория получателя:",selected:[],options:[{text:"микро",value:"1"},{text:"малые",value:"2"},{text:"средние",value:"3"}]}],filtredEsiaMeasures:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52]}},computed:{replicsList:function(){return this.chatIsActive?this.replics:this.replics.filter((function(t){return 1===t.id}))}},methods:{getMeasuresCardslist:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=new XMLHttpRequest,a="https://open-demo.isands.ru/api/serv/get-services?pageNum="+(t-1)+"&pageSize="+e+"&sortCol="+n+"&sortDesc="+i;s.open("GET",a),s.responseType="json",s.onload=function(){console.log("Список мер"),console.log(s.response),r.measuresCardsList=s.response,r.itemsTotal=s.response.totalElements},s.send()},changePageSize:function(t){console.log(t),this.pageSize=t},changePage:function(t){console.log(t),this.page=t,this.changeItemsCount()},changeItemsCount:function(){var t=this;console.log("Апдейт");var e=new XMLHttpRequest,r="https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page="+this.page+"&pageSize="+this.pageSize;e.open("GET",r),e.responseType="json",e.onload=function(){console.log(e.response),t.xhrResponse=e.response},e.send()},selectEsia:function(){console.log("Поиск на основе ЕСИА"),this.filters[0].selected.push(2),this.filters[2].selected.push(2),this.filters[5].selected.push(3),this.scenario=2},scenarioFilter:function(){console.log("Фильтрация по сценарию "+this.scenario),2===this.scenario?this.filtredEsiaMeasures=[1,3]:this.scenarioRandomFilter()},scenarioRandomFilter:function(){var t=[];this.filtredEsiaMeasures.forEach((function(e){Math.round(Math.random())&&t.push(e)})),this.filtredEsiaMeasures=t},clearFilter:function(){console.log("Очистка фильтра"),this.filters.forEach((function(t){t.selected=[]})),this.filtredEsiaMeasures=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52],this.scenario=0},chatActivation:function(){this.chatIsActive=!0},chatDisactivation:function(){this.chatIsActive=!1},addQuest:function(t){var e,r,n={id:this.replics.length+1,author:"user",content:t};if(this.replics.push(n),this.faq.forEach((function(e){e.keywords.forEach((function(n){t.trim().toLowerCase()===n&&(r=e.answers)}))})),r){var i=r.map((function(t){var e={link:t.link,content:t.content};return e}));e={author:"bot",content:"",findedAnswers:i}}else e={author:"bot",content:"Извините, я ничего не нашёл."};e.id=this.replics.length+1,this.replics.push(e)}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getMeasuresCardslist(this.page,this.pageSize);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},l=u,h=(r("0c2b"),r("2877")),f=Object(h["a"])(l,n,i,!1,null,"06fc3af8",null);e["default"]=f.exports},d61c:function(t,e,r){t.exports=r.p+"img/electronic.60f02341.png"}}]);
//# sourceMappingURL=chunk-46a9d72d.1a81216d.js.map