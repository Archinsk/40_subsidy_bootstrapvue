(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-421fab42"],{"2d71":function(e,t,s){},"3a32":function(e,t,s){"use strict";s("aada")},"3d3b":function(e,t,s){},"419d":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"btn btn-outline-primary col-12 mb-2",on:{click:function(t){return e.$emit("select-esia")}}},[e._v(" Подобрать с учетом ЕСИА ")]),s("div",{staticClass:"btn btn-outline-primary col-12 mb-2",on:{click:function(t){return e.$emit("chat-activation")}}},[e._v(" Подобрать с помощью чат-бота ")])]),e._l(e.fd,(function(e){return s("FilterCheckboxesGroup",{key:e.title,attrs:{filterData:e}})})),s("div",{staticClass:"row"},[s("div",{staticClass:"col mb-3"},[s("div",{staticClass:"btn btn-primary btn-block",on:{click:function(t){return e.$emit("scenario-filter")}}},[e._v(" Применить ")])]),s("div",{staticClass:"col mb-3"},[s("div",{staticClass:"btn btn-outline-primary btn-block",on:{click:function(t){return e.$emit("clear-filter")}}},[e._v(" Очистить ")])])])],2)},i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-form-group",{attrs:{label:e.filterData.title},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[s("b-form-checkbox-group",{attrs:{options:e.filterData.options,"aria-describedby":a,name:"flavour-2a",stacked:""},model:{value:e.filterData.selected,callback:function(t){e.$set(e.filterData,"selected",t)},expression:"filterData.selected"}})]}}])})],1)},n=[],o={name:"FilterCheckboxesGroup",props:["filterData"],data:function(){return{selected:[],options:[{text:"Лесоводство и лесозаготовки",value:"1"},{text:"Добыча угля",value:"2"},{text:"Производство одежды",value:"3"},{text:"Строительство зданий",value:"4"},{text:"Научные исследования и разработки",value:"5"},{text:"Деятельность общественных организаций",value:"6"},{text:"Производство мебели",value:"7"},{text:"Деятельность профессиональная научная и техническая прочая",value:"8"},{text:"Деятельность в области спорта, отдыха и развлечений",value:"9"},{text:"10 – тип поддержки, который нам в итоге нужно найти",value:"10"}]}}},c=o,l=s("2877"),u=Object(l["a"])(c,r,n,!1,null,"5fdc2ed3",null),d=u.exports,m={name:"MeasuresFiltersList",props:["fd"],components:{FilterCheckboxesGroup:d}},p=m,_=Object(l["a"])(p,a,i,!1,null,"3af07466",null);t["a"]=_.exports},"616b":function(e,t,s){"use strict";s("89ce")},"7baf":function(e,t,s){"use strict";s("2d71")},"7e5f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("section",{directives:[{name:"show",rawName:"v-show",value:!e.chatIsActive,expression:"!chatIsActive"}],staticClass:"measures"},[s("div",{staticClass:"measures__wrapper"},[s("h4",{staticClass:"measures__heading text-center"},[e._v(" Меры поддержки "),s("span",{staticClass:"badge badge-primary"},[e._v(e._s(e.totalItems))])]),s("div",{staticClass:"row justify-content-center mb-3"},[s("div",{staticClass:"col-2"},[s("MeasuresFilter",{attrs:{fd:e.filters}})],1),s("div",{staticClass:"col-6"},[s("MeasuresCardsListExample",{attrs:{measuresPack:e.xhrResponse,count:"10"}}),s("hr"),s("MeasuresCardsList",{attrs:{measuresPack:e.xhrResponse,count:"10"}})],1)])])]),s("section",{directives:[{name:"show",rawName:"v-show",value:e.chatIsActive,expression:"chatIsActive"}],staticClass:"bot"},[s("Chat",{attrs:{isActive:"true",isFlyingDown:"true",messages:e.replicsList,quest:e.inputText},on:{"close-chat":e.chatDisactivation,"focus-input":e.focusInput,"add-quest":function(t){return e.addQuest(t)}}})],1)])},i=[],r=(s("4de4"),s("159b"),s("498a"),s("d81d"),s("9911"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row row-cols-1"},e._l(e.cuttedMeasuresPack,(function(e){return s("div",{key:e.id,staticClass:"col"},[s("MeasuresCardsListExampleItem",{attrs:{measure:e}})],1)})),0)}),n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card measure__card"},[a("div",{staticClass:"card-body row"},[a("router-link",{staticClass:"measure-link col-12 col-md-9 stretched-link",attrs:{to:e.measure.measure_link}},[a("h5",{staticClass:"card-title"},[a("span",{staticClass:"badge badge-primary"},[e._v(e._s(e.measure.subsidy_number))]),e._v(" "+e._s(e.measure.title)+" ")])]),a("div",{staticClass:"card-text col-12 col-md-3"},[e._v(" Приём заявок"),a("br"),a("b",[e._v("с "+e._s(e.measure.open_date)+" по "+e._s(e.measure.close_date))])])],1),a("hr"),a("div",{staticClass:"card-footer bg-transparent measure__card__footer row"},[a("div",{staticClass:"measure__owner__logo col-md-6 col-lg-5"},[a("img",{staticClass:"measure__owner__logo__image",attrs:{src:"images/initiators_logo/"+e.measure.initiator_logo,alt:"..."}}),a("div",{staticClass:"measure__owner__logo__text"},[a("div",{staticClass:"logo__header__comment"},[e._v("Инициатор")]),a("div",{staticClass:"logo__name"},[e._v(" "+e._s(e.measure.initiator_title)+" ")])])]),a("div",{staticClass:"measure__details col-md-6 col-lg-3"},[a("div",{staticClass:"measure__size"},[a("div",{staticClass:"measure__size__header"},[e._v(e._s("нф"===e.measure.measure_size?"Нефинансовая мера поддержки":"Размер поддержки")+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:"нф"!==e.measure.measure_size,expression:"measure.measure_size!=='нф'"}],staticClass:"measure__size__value"},[e._v("до "+e._s(e.measure.measure_size)+" рублей ")])])]),a("div",{staticClass:"measure__buttons col"},[a("img",{directives:[{name:"show",rawName:"v-show",value:"1"===e.measure.electronic_form,expression:"measure.electronic_form === '1'"}],staticClass:"measure__web__accessibility",attrs:{src:s("d61c"),title:"По данной мере поддержки есть возможность электронной подачи",alt:""}}),a("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#"}},[e._v("Получить поддержку")])])])])},c=[],l={name:"MeasuresCardsListExampleItem",props:["measure"]},u=l,d=(s("8486"),s("2877")),m=Object(d["a"])(u,o,c,!1,null,"79842b36",null),p=m.exports,_={name:"MeasuresCardsListExample",components:{MeasuresCardsListExampleItem:p},props:["measuresPack","count"],data:function(){return{measuresCardsList:[]}},methods:{getMeasuresCardslist:function(){var e=this,t=new XMLHttpRequest,s="http://192.168.18.171:8080/open-core/api/serv/get-services?pageNum=0&pageSize=10";t.open("GET",s),t.responseType="json",t.onload=function(){console.log("Получен список с услугами"),console.log(t.response.listEntity),e.measuresCardsList=t.response.listEntity},t.send()}},computed:{cuttedMeasuresPack:function(){var e=this;if(this.count&&this.count<this.measuresPack.length){var t=this.measuresPack.filter((function(t,s){return s<e.count}));return t}return this.measuresPack}},mounted:function(){this.getMeasuresCardslist()}},v=_,h=(s("3a32"),Object(d["a"])(v,r,n,!1,null,"3afa6b41",null)),f=h.exports,g=s("a5f3"),b=s("419d"),w=s("e6b0"),C={name:"Measures",components:{MeasuresCardsListExample:f,MeasuresCardsList:g["a"],MeasuresFilter:b["a"],Chat:w["a"]},data:function(){return{xhrResponse:[],page:1,pageSize:10,totalItems:160,scenario:1,chatIsActive:!1,inputText:"",replics:[{id:1,author:"bot",content:"Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки."},{id:2,author:"bot",content:"Укажите, какой объем денежных средств вам требуется?"}],faq:[{id:1,keywords:["covid","ковид","корона"],answers:[{content:"Запись на вакцинацию",link:"https://google.com"},{content:"Сертификат вакцинированного",link:"https://ya.ru"},{content:"Мои QR-коды",link:"https://ya.ru"}]},{id:2,keywords:["спорт"],answers:[{content:"Присвоение спортивных разрядов",link:"https://google.com"},{content:"Присвоение квалификационных категорий спортивных судей",link:"https://google.com"},{content:"Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации",link:"https://google.com"}]},{id:3,keywords:["грант","гранты"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"},{content:"Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных сферах экономики",link:"./subsidyinfo3"}]},{id:4,keywords:["субсидия","субсидии"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:5,keywords:["инновация","инновации"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:6,keywords:["наука"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"}]},{id:7,keywords:["20000000","20000000 руб","20 000 000","20 000 000 руб"],answers:[{content:"Укажите срок оказания поддержки в формате «ДД.ММ.ГГГГ - ДД.ММ.ГГГГ»",link:""}]},{id:7,keywords:["01.01.2022-31.12.2022"],answers:[{content:"Субсидия на возмещение части затрат, направленных на проведение комплекса агротехнологических работ, повышение уровня экологической безопасности сельскохозяйственного производства, а также на повышение плодородия и качества почв",link:"./subsidyinfo5"},{content:"Субсидия на возмещение затрат, понесенных в текущем финансовом году, связанных с закупкой сельскохозяйственной техники",link:"./subsidyinfo5"}]}],filters:[{title:"Отрасль экономики:",selected:[],options:[{text:"Промышленность",value:"1"},{text:"Сельское хозяйство",value:"2"},{text:"Строительство",value:"3"},{text:"Транспорт",value:"4"},{text:"Связь",value:"5"},{text:"Торговля и общественное питание",value:"6"},{text:"Культура и искусство",value:"7"},{text:"Информационно-вычислительное обслуживание",value:"8"},{text:"Наука и научное обслуживание",value:"9"}]},{title:"Форма/вид поддержки:",selected:[],options:[{text:"Финансовая",value:"1"},{text:"Информационная",value:"2"},{text:"Образовательная",value:"3"},{text:"Консультационная",value:"4"},{text:"Имущественная",value:"5"},{text:"Инновационная",value:"6"}]},{title:"Вид получателя:",selected:[],options:[{text:"ИП",value:"1"},{text:"ЮЛ",value:"2"}]},{title:"Размер поддержки:",selected:[],options:[{text:"до 100 т.р.",value:"1"},{text:"от 500 т.р. до 1 млн.р.",value:"2"},{text:"от 1 млн.руб до 10 млн.р.",value:"3"},{text:"от 10 млн.руб до 20 млн.р.",value:"4"}]},{title:"Срок оказания поддержки:",selected:[],options:[{text:"до 1 месяца",value:"1"},{text:"от 1 до 3 месяцев",value:"2"},{text:"от 3 до 6 месяцев",value:"3"},{text:"от 6 месяцев до 1 года",value:"4"},{text:"от 1 года до 3 лет",value:"5"}]},{title:"Категория получателя:",selected:[],options:[{text:"микро",value:"1"},{text:"малые",value:"2"},{text:"средние",value:"3"}]}]}},computed:{replicsList:function(){return this.chatIsActive?this.replics:this.replics.filter((function(e){return 1===e.id}))}},methods:{changePageSize:function(e){console.log(e),this.pageSize=e,this.changeItemsCount()},changePage:function(e){console.log(e),this.page=e,this.changeItemsCount()},changeItemsCount:function(){var e=this;console.log("Апдейт");var t=new XMLHttpRequest,s="https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page="+this.page+"&pageSize="+this.pageSize;t.open("GET",s),t.responseType="json",t.onload=function(){console.log(t.response),e.xhrResponse=t.response},t.send()},scenarioFilter:function(){var e=this;console.log("Начинаю фильтрацию по сценарию "+this.scenario);var t=new XMLHttpRequest,s="https://www.d-skills.ru/40_subsidy_bootstrapvue/scenario.php?scenario="+this.scenario;t.open("GET",s),t.responseType="json",t.onload=function(){console.log(t.response),e.xhrResponse=t.response,e.totalItems=2},t.send()},clearFilter:function(){var e=this;this.filters.forEach((function(e){e.selected=[]}));var t=new XMLHttpRequest,s="https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page="+this.page+"&pageSize="+this.pageSize;t.open("GET",s),t.responseType="json",t.onload=function(){console.log(t.response),e.xhrResponse=t.response,e.totalItems=160},t.send()},chatActivation:function(){this.chatIsActive=!0},chatDisactivation:function(){this.chatIsActive=!1},addQuest:function(e){var t,s,a={id:this.replics.length+1,author:"user",content:e};if(this.replics.push(a),this.faq.forEach((function(t){t.keywords.forEach((function(a){e.trim().toLowerCase()===a&&(s=t.answers)}))})),s){var i=s.map((function(e){var t={link:e.link,content:e.content};return t}));t={author:"bot",content:"",findedAnswers:i}}else t={author:"bot",content:"Извините, я ничего не нашёл."};t.id=this.replics.length+1,this.replics.push(t)}},mounted:function(){var e=this;console.log("Смонтирована страница MeasuresAuth");var t=new XMLHttpRequest,s="https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page="+this.page+"&pageSize="+this.pageSize;t.open("GET",s),t.responseType="json",t.onload=function(){console.log(t.response),console.log("Получен список с услугами c d-skills"),e.xhrResponse=t.response},t.send()}},x=C,k=(s("7baf"),Object(d["a"])(x,a,i,!1,null,"1ce38337",null));t["default"]=k.exports},8486:function(e,t,s){"use strict";s("ef0c")},"89ce":function(e,t,s){},a5f3:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row row-cols-1"},[e._l(e.measuresCardsList.content,(function(t){return s("div",{key:t.id,staticClass:"col"},[e.filteredMeasures.includes(t.id)?s("MeasuresCardsListItem",{attrs:{measure:t}}):e._e()],1)})),s("Pagination",{directives:[{name:"show",rawName:"v-show",value:e.itemsTotal>e.pageSize,expression:"itemsTotal > pageSize"}],attrs:{"items-total":e.itemsTotal,page:e.page,"page-size":e.pageSize,"items-per-page":e.itemsPerPage},on:{changepagesize2:function(t){return e.$emit("changepagesize3",t)},"change-page":function(t){return e.changePage(t)}}})],2)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card measure__card"},[a("div",{staticClass:"card-body row"},[a("router-link",{staticClass:"measure-link col-12 col-md-9 stretched-link",attrs:{to:"/subsidyinfotemp/"+e.measure.id}},[a("h5",{staticClass:"card-title"},[a("span",{staticClass:"badge badge-primary"},[e._v(e._s(e.measure.id))]),e._v(" "+e._s(e.measure.name)+" ")])]),a("div",{staticClass:"card-text col-12 col-md-3"},[e._v(" Приём заявок"),a("br"),a("b",[e._v(" "+e._s(e.measurePeriod)+" ")]),e.measure.active?e._e():[a("br"),a("i",[e._v(" "+e._s(e.isActive)+" ")])]],2)],1),a("hr"),a("div",{staticClass:"card-footer bg-transparent measure__card__footer row"},[e._m(0),a("div",{staticClass:"measure__details col-md-6 col-lg-3"},[a("div",{staticClass:"measure__size"},[a("div",{staticClass:"measure__size__header"},[e._v(" "+e._s("нф"===e.measure.measure_size?"Нефинансовая мера поддержки":"Размер поддержки")+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:"нф"!==e.measure.measure_size,expression:"measure.measure_size !== 'нф'"}],staticClass:"measure__size__value"},[e._v(" до "+e._s(e.measure.measure_size)+" рублей ")])])]),a("div",{staticClass:"measure__buttons col"},[a("img",{directives:[{name:"show",rawName:"v-show",value:"1"===e.measure.electronic_form,expression:"measure.electronic_form === '1'"}],staticClass:"measure__web__accessibility",attrs:{src:s("d61c"),title:"По данной мере поддержки есть возможность электронной подачи",alt:""}}),a("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#"}},[e._v("Получить поддержку")])])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"measure__owner__logo col-md-6 col-lg-5"},[s("img",{staticClass:"measure__owner__logo__image",attrs:{src:"images/initiators_logo/mineco_logo.png",alt:"..."}}),s("div",{staticClass:"measure__owner__logo__text"},[s("div",{staticClass:"logo__header__comment"},[e._v("Инициатор")]),s("div",{staticClass:"logo__name"},[e._v(" Министерство экономического развития ")])])])}],o={name:"MeasuresCardsListItem",props:["measure"],data:function(){return{}},computed:{measurePeriod:function(){var e="",t={day:"2-digit",month:"2-digit",year:"numeric"};return this.measure.startDate&&(e+="c "+new Intl.DateTimeFormat("ru-RU",t).format(new Date(this.measure.startDate))+" "),this.measure.endDate&&(e+="по "+new Intl.DateTimeFormat("ru-RU",t).format(new Date(this.measure.endDate))),this.measure.startDate||this.measure.endDate||(e="даты не указаны"),e},isActive:function(){return this.measure.active?"активна":"не активна"}}},c=o,l=(s("cac3"),s("2877")),u=Object(l["a"])(c,r,n,!1,null,"e3579140",null),d=u.exports,m=s("cbb7"),p={name:"MeasuresCardsList",components:{MeasuresCardsListItem:d,Pagination:m["a"]},props:["measuresCardsList","filteredMeasures","itemsTotal","page","pageSize","itemsPerPage"]},_=p,v=(s("616b"),Object(l["a"])(_,a,i,!1,null,"1c1f2f14",null));t["a"]=v.exports},aada:function(e,t,s){},cac3:function(e,t,s){"use strict";s("3d3b")},d61c:function(e,t,s){e.exports=s.p+"img/electronic.60f02341.png"},ef0c:function(e,t,s){}}]);
//# sourceMappingURL=chunk-421fab42.85388133.js.map