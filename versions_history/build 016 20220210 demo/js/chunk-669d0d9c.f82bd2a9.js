(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-669d0d9c"],{"0923":function(t,e,s){t.exports=s.p+"img/robot_avatar.715b5b87.png"},"0ce3":function(t,e,s){"use strict";s("5d39")},"3a32":function(t,e,s){"use strict";s("aada")},"485c":function(t,e,s){},"498a":function(t,e,s){"use strict";var i=s("23e7"),n=s("58a8").trim,a=s("c8d2");i({target:"String",proto:!0,forced:a("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("e330"),n=s("1d80"),a=s("577e"),r=s("5899"),o=i("".replace),c="["+r+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t){return function(e){var s=a(n(e));return 1&t&&(s=o(s,l,"")),2&t&&(s=o(s,u,"")),s}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5d39":function(t,e,s){},"5fd8":function(t,e,s){"use strict";s("c5d9")},"7ab7":function(t,e,s){},"7e5f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"measures"},[s("div",{staticClass:"measures__wrapper"},[s("h4",{staticClass:"measures__heading text-center"},[t._v(" Меры поддержки "),s("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.totalItems))])]),s("div",{staticClass:"row justify-content-center mb-3"},[s("div",{staticClass:"col-2"},[s("MeasuresFilter",{attrs:{fd:t.filters}})],1),s("div",{staticClass:"col-6"},[s("MeasuresCardsListExample",{attrs:{measuresPack:t.xhrResponse,count:"10"}})],1)])])]),s("section",{directives:[{name:"show",rawName:"v-show",value:t.chatIsActive,expression:"chatIsActive"}],staticClass:"bot"},[s("Chat",{attrs:{isActive:"true",isFlyingDown:"true",messages:t.replicsList,quest:t.inputText},on:{"close-chat":t.chatDisactivation,"focus-input":t.focusInput,"add-quest":function(e){return t.addQuest(e)}}})],1)])},n=[],a=(s("4de4"),s("159b"),s("498a"),s("d81d"),s("9911"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row row-cols-1"},t._l(t.cuttedMeasuresPack,(function(t){return s("div",{key:t.id,staticClass:"col"},[s("MeasuresCardsListExampleItem",{attrs:{measure:t}})],1)})),0)}),r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card measure__card"},[i("div",{staticClass:"card-body row"},[i("router-link",{staticClass:"measure-link col-12 col-md-9 stretched-link",attrs:{to:t.measure.measure_link}},[i("h5",{staticClass:"card-title"},[i("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.measure.subsidy_number))]),t._v(" "+t._s(t.measure.title)+" ")])]),i("div",{staticClass:"card-text col-12 col-md-3"},[t._v(" Приём заявок"),i("br"),i("b",[t._v("с "+t._s(t.measure.open_date)+" по "+t._s(t.measure.close_date))])])],1),i("hr"),i("div",{staticClass:"card-footer bg-transparent measure__card__footer row"},[i("div",{staticClass:"measure__owner__logo col-md-6 col-lg-5"},[i("img",{staticClass:"measure__owner__logo__image",attrs:{src:"images/initiators_logo/"+t.measure.initiator_logo,alt:"..."}}),i("div",{staticClass:"measure__owner__logo__text"},[i("div",{staticClass:"logo__header__comment"},[t._v("Инициатор")]),i("div",{staticClass:"logo__name"},[t._v(" "+t._s(t.measure.initiator_title)+" ")])])]),i("div",{staticClass:"measure__details col-md-6 col-lg-3"},[i("div",{staticClass:"measure__size"},[i("div",{staticClass:"measure__size__header"},[t._v(t._s("нф"===t.measure.measure_size?"Нефинансовая мера поддержки":"Размер поддержки")+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"нф"!==t.measure.measure_size,expression:"measure.measure_size!=='нф'"}],staticClass:"measure__size__value"},[t._v("до "+t._s(t.measure.measure_size)+" рублей ")])])]),i("div",{staticClass:"measure__buttons col"},[i("img",{directives:[{name:"show",rawName:"v-show",value:"1"===t.measure.electronic_form,expression:"measure.electronic_form === '1'"}],staticClass:"measure__web__accessibility",attrs:{src:s("d61c"),title:"По данной мере поддержки есть возможность электронной подачи",alt:""}}),i("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#"}},[t._v("Получить поддержку")])])])])},c=[],l={name:"MeasuresCardsListExampleItem",props:["measure"]},u=l,d=(s("8486"),s("2877")),p=Object(d["a"])(u,o,c,!1,null,"79842b36",null),v=p.exports,f={name:"MeasuresCardsListExample",components:{MeasuresCardsListExampleItem:v},props:["measuresPack","count"],data:function(){return{measuresCardsList:[]}},methods:{getMeasuresCardslist:function(){var t=this,e=new XMLHttpRequest,s="http://192.168.18.171:8080/open-core/api/serv/get-services?pageNum=0&pageSize=10";e.open("GET",s),e.responseType="json",e.onload=function(){console.log("Получен список с услугами"),console.log(e.response.listEntity),t.measuresCardsList=e.response.listEntity},e.send()}},computed:{cuttedMeasuresPack:function(){var t=this;if(this.count&&this.count<this.measuresPack.length){var e=this.measuresPack.filter((function(e,s){return s<t.count}));return e}return this.measuresPack}},mounted:function(){this.getMeasuresCardslist()}},m=f,h=(s("3a32"),Object(d["a"])(m,a,r,!1,null,"3afa6b41",null)),_=h.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"btn btn-outline-primary col-12 mb-2",on:{click:function(e){return t.$emit("select-esia")}}},[t._v(" Подобрать с учетом ЕСИА ")]),s("div",{staticClass:"btn btn-outline-primary col-12 mb-2",on:{click:function(e){return t.$emit("chat-activation")}}},[t._v(" Подобрать с помощью чат-бота ")])]),t._l(t.fd,(function(t){return s("MeasuresFilterExampleCheckboxesGroup",{key:t.title,attrs:{filterData:t}})})),s("div",{staticClass:"row"},[s("div",{staticClass:"col mb-3"},[s("div",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return t.$emit("scenario-filter")}}},[t._v(" Применить ")])]),s("div",{staticClass:"col mb-3"},[s("div",{staticClass:"btn btn-outline-primary btn-block",on:{click:function(e){return t.$emit("clear-filter")}}},[t._v(" Очистить ")])])])],2)},g=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-form-group",{attrs:{label:t.filterData.title},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[s("b-form-checkbox-group",{attrs:{options:t.filterData.options,"aria-describedby":i,name:"flavour-2a",stacked:""},model:{value:t.filterData.selected,callback:function(e){t.$set(t.filterData,"selected",e)},expression:"filterData.selected"}})]}}])})],1)},w=[],C={name:"MeasuresFilterExampleCheckboxesGroup",props:["filterData"],data:function(){return{selected:[],options:[{text:"Лесоводство и лесозаготовки",value:"1"},{text:"Добыча угля",value:"2"},{text:"Производство одежды",value:"3"},{text:"Строительство зданий",value:"4"},{text:"Научные исследования и разработки",value:"5"},{text:"Деятельность общественных организаций",value:"6"},{text:"Производство мебели",value:"7"},{text:"Деятельность профессиональная научная и техническая прочая",value:"8"},{text:"Деятельность в области спорта, отдыха и развлечений",value:"9"},{text:"10 – тип поддержки, который нам в итоге нужно найти",value:"10"}]}}},k=C,y=Object(d["a"])(k,x,w,!1,null,"437dd2c3",null),A=y.exports,F={name:"MeasuresFilterExample",props:["fd"],components:{MeasuresFilterExampleCheckboxesGroup:A}},E=F,D=Object(d["a"])(E,b,g,!1,null,"6b99b5f8",null),$=D.exports,M=s("e6b0"),I={name:"Measures",components:{MeasuresCardsListExample:_,MeasuresFilter:$,Chat:M["a"]},data:function(){return{xhrResponse:[],page:1,pageSize:10,totalItems:160,scenario:1,chatIsActive:!1,inputText:"",replics:[{id:1,author:"bot",content:"Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки."},{id:2,author:"bot",content:"Укажите, какой объем денежных средств вам требуется?"}],faq:[{id:1,keywords:["covid","ковид","корона"],answers:[{content:"Запись на вакцинацию",link:"https://google.com"},{content:"Сертификат вакцинированного",link:"https://ya.ru"},{content:"Мои QR-коды",link:"https://ya.ru"}]},{id:2,keywords:["спорт"],answers:[{content:"Присвоение спортивных разрядов",link:"https://google.com"},{content:"Присвоение квалификационных категорий спортивных судей",link:"https://google.com"},{content:"Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации",link:"https://google.com"}]},{id:3,keywords:["грант","гранты"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"},{content:"Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных сферах экономики",link:"./subsidyinfo3"}]},{id:4,keywords:["субсидия","субсидии"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:5,keywords:["инновация","инновации"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:6,keywords:["наука"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"}]},{id:7,keywords:["20000000","20000000 руб","20 000 000","20 000 000 руб"],answers:[{content:"Укажите срок оказания поддержки в формате «ДД.ММ.ГГГГ - ДД.ММ.ГГГГ»",link:""}]},{id:7,keywords:["01.01.2022-31.12.2022"],answers:[{content:"Субсидия на возмещение части затрат, направленных на проведение комплекса агротехнологических работ, повышение уровня экологической безопасности сельскохозяйственного производства, а также на повышение плодородия и качества почв",link:"./subsidyinfo5"},{content:"Субсидия на возмещение затрат, понесенных в текущем финансовом году, связанных с закупкой сельскохозяйственной техники",link:"./subsidyinfo5"}]}],filters:[{title:"Отрасль экономики:",selected:[],options:[{text:"Промышленность",value:"1"},{text:"Сельское хозяйство",value:"2"},{text:"Строительство",value:"3"},{text:"Транспорт",value:"4"},{text:"Связь",value:"5"},{text:"Торговля и общественное питание",value:"6"},{text:"Культура и искусство",value:"7"},{text:"Информационно-вычислительное обслуживание",value:"8"},{text:"Наука и научное обслуживание",value:"9"}]},{title:"Форма/вид поддержки:",selected:[],options:[{text:"Финансовая",value:"1"},{text:"Информационная",value:"2"},{text:"Образовательная",value:"3"},{text:"Консультационная",value:"4"},{text:"Имущественная",value:"5"},{text:"Инновационная",value:"6"}]},{title:"Вид получателя:",selected:[],options:[{text:"ИП",value:"1"},{text:"ЮЛ",value:"2"}]},{title:"Размер поддержки:",selected:[],options:[{text:"до 100 т.р.",value:"1"},{text:"от 500 т.р. до 1 млн.р.",value:"2"},{text:"от 1 млн.руб до 10 млн.р.",value:"3"},{text:"от 10 млн.руб до 20 млн.р.",value:"4"}]},{title:"Срок оказания поддержки:",selected:[],options:[{text:"до 1 месяца",value:"1"},{text:"от 1 до 3 месяцев",value:"2"},{text:"от 3 до 6 месяцев",value:"3"},{text:"от 6 месяцев до 1 года",value:"4"},{text:"от 1 года до 3 лет",value:"5"}]},{title:"Категория получателя:",selected:[],options:[{text:"микро",value:"1"},{text:"малые",value:"2"},{text:"средние",value:"3"}]}]}},computed:{replicsList:function(){return this.chatIsActive?this.replics:this.replics.filter((function(t){return 1===t.id}))}},methods:{chatActivation:function(){this.chatIsActive=!0},chatDisactivation:function(){this.chatIsActive=!1},addQuest:function(t){var e,s,i={id:this.replics.length+1,author:"user",content:t};if(this.replics.push(i),this.faq.forEach((function(e){e.keywords.forEach((function(i){t.trim().toLowerCase()===i&&(s=e.answers)}))})),s){var n=s.map((function(t){var e={link:t.link,content:t.content};return e}));e={author:"bot",content:"",findedAnswers:n}}else e={author:"bot",content:"Извините, я ничего не нашёл."};e.id=this.replics.length+1,this.replics.push(e)}},mounted:function(){var t=this;console.log("Смонтирована страница MeasuresAuth");var e=new XMLHttpRequest,s="https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page="+this.page+"&pageSize="+this.pageSize;e.open("GET",s),e.responseType="json",e.onload=function(){console.log(e.response),console.log("Получен список с услугами c d-skills"),t.xhrResponse=e.response},e.send()}},L=I,q=(s("a3bc"),Object(d["a"])(L,i,n,!1,null,"06dc4f63",null));e["default"]=q.exports},8486:function(t,e,s){"use strict";s("ef0c")},"857a":function(t,e,s){var i=s("e330"),n=s("1d80"),a=s("577e"),r=/"/g,o=i("".replace);t.exports=function(t,e,s,i){var c=a(n(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+o(a(i),r,"&quot;")+'"'),l+">"+c+"</"+e+">"}},8602:function(t,e,s){"use strict";s("485c")},"8a53":function(t,e,s){},9911:function(t,e,s){"use strict";var i=s("23e7"),n=s("857a"),a=s("af03");i({target:"String",proto:!0,forced:a("link")},{link:function(t){return n(this,"a","href",t)}})},a3bc:function(t,e,s){"use strict";s("8a53")},a67c:function(t,e,s){t.exports=s.p+"img/robot.1049893b.png"},aada:function(t,e,s){},af03:function(t,e,s){var i=s("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},c5d9:function(t,e,s){},c8d2:function(t,e,s){var i=s("5e77").PROPER,n=s("d039"),a=s("5899"),r="​᠎";t.exports=function(t){return n((function(){return!!a[t]()||r[t]()!==r||i&&a[t].name!==t}))}},d003:function(t,e,s){},d61c:function(t,e,s){t.exports=s.p+"img/electronic.60f02341.png"},d81d:function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").map,a=s("1dde"),r=a("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e6b0:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat"},[s("ChatHeader",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],on:{"close-chat":function(e){return t.$emit("close-chat")}}}),s("div",{staticClass:"container"},[s("ChatBoard",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,messages:t.messages}}),s("SearchForm",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,quest:t.quest},on:{"add-quest":function(e){return t.$emit("add-quest",e)},"focus-input":function(e){return t.$emit("focus-input")}}})],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shadow"},[i("div",{staticClass:"container"},[i("div",{staticClass:"chat-header"},[i("img",{staticClass:"chatHeaderAvatar rounded-circle d-lg-none",attrs:{src:s("0923"),alt:""}}),i("div",{staticClass:"chatHeaderTitle d-lg-none"},[t._v("Робот Василий")]),i("b-button",{staticClass:"closeBtn rounded-circle",on:{click:function(e){return t.$emit("close-chat")}}},[i("span",{staticClass:"material-icons"},[t._v("close")])])],1)])])},r=[],o={name:"ChatHeader"},c=o,l=(s("0ce3"),s("2877")),u=Object(l["a"])(c,a,r,!1,null,"85d1a8ca",null),d=u.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chat-section row"},[i("div",{staticClass:"col-3 d-none d-lg-block"},[i("img",{staticClass:"position-absolute",class:{active:t.isActive},attrs:{id:"botWaiting",src:s("a67c"),alt:""}})]),i("div",{class:"chatField col-lg-9 "+t.chatFieldClass()},t._l(t.messages,(function(e){return i("b-alert",{key:e.id,attrs:{variant:t.getAuthor(e.author),show:""}},[e.findedAnswers?i("div",[e.findedAnswers[0].link?i("div",[t._v("Вот, что я нашел:")]):t._e(),t._l(e.findedAnswers,(function(e){return i("div",{key:e.content},[e.link?i("AnswerLink",{attrs:{link:e.link,text:e.content}}):t._e(),e.link?t._e():i("AnswerText",{attrs:{text:e.content}})],1)}))],2):t._e(),t._v(" "+t._s(e.content)+" ")])})),1)])},v=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"answer-link btn btn-primary",attrs:{to:this.link}},[t._v(t._s(this.text))])},m=[],h={name:"AnswerLink",props:["link","text"]},_=h,b=(s("5fd8"),Object(l["a"])(_,f,m,!1,null,"3edc4efc",null)),g=b.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"answer-text"},[t._v(t._s(this.text))])},w=[],C={name:"AnswerLink",props:["text"]},k=C,y=(s("f0b5"),Object(l["a"])(k,x,w,!1,null,"67cb92b6",null)),A=y.exports,F={name:"ChatBoard",components:{AnswerLink:g,AnswerText:A},data:function(){return{linked:"https://ya.ru",texted:"Грант для ученых"}},props:["isActive","isFlyingUp","isFlyingDown","messages"],computed:{},methods:{getAuthor:function(t){return"bot"===t?"primary":"danger"},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}}},E=F,D=(s("8602"),Object(l["a"])(E,p,v,!1,null,"7fb5d71c",null)),$=D.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-section row justify-content-end"},[s("div",{class:"searchBlock col-lg-9 "+t.chatFieldClass()},[s("b-form",{class:t.textInField,on:{submit:t.onSubmit}},[s("b-form-group",{attrs:{id:"inputGroupQuestion",label:"","label-for":"inputGroupQuestion"}},[s("b-form-input",{class:t.roundedPill,attrs:{id:"inputQuestion",type:"text",placeholder:"Просто напишите то, что ищете...",autocomplete:"off",required:""},on:{focus:function(e){return t.$emit("focus-input")}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),s("b-button",{staticClass:"rounded-circle",attrs:{type:"submit",tabindex:"-1"}},[s("span",{staticClass:"material-icons"},[t._v("send")])])],1)],1)])},I=[],L=(s("498a"),{name:"SearchForm",props:["quest","isActive","isFlyingUp","isFlyingDown"],data:function(){return{inputValue:"",roundedPill:"rounded-pill",textInField:""}},computed:{},methods:{onSubmit:function(t){t.preventDefault(),this.inputValue.trim()&&(this.$emit("add-quest",this.inputValue),this.inputValue="")},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}},watch:{inputValue:function(){this.inputValue.trim()?(console.log("Работает"),this.textInField="isActive"):(console.log("В поле пусто"),this.textInField="")},quest:function(){this.inputValue=this.quest}}}),q=L,j=(s("efb7"),Object(l["a"])(q,M,I,!1,null,null,null)),O=j.exports,S={name:"Chat",components:{ChatHeader:d,ChatBoard:$,SearchForm:O},props:["isActive","isFlyingUp","isFlyingDown","messages","quest"],methods:{},data:function(){return{}}},z=S,P=Object(l["a"])(z,i,n,!1,null,"7e2aaa76",null);e["a"]=P.exports},ef0c:function(t,e,s){},efb7:function(t,e,s){"use strict";s("d003")},f0b5:function(t,e,s){"use strict";s("7ab7")}}]);
//# sourceMappingURL=chunk-669d0d9c.f82bd2a9.js.map