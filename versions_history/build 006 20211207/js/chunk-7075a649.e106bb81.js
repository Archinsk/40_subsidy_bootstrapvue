(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7075a649"],{"0923":function(t,e,s){t.exports=s.p+"img/robot_avatar.715b5b87.png"},"0b42":function(t,e,s){var i=s("da84"),a=s("e8b5"),n=s("68ee"),o=s("861d"),r=s("b622"),c=r("species"),l=i.Array;t.exports=function(t){var e;return a(t)&&(e=t.constructor,n(e)&&(e===l||a(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?l:e}},"0ce3":function(t,e,s){"use strict";s("5d39")},"0d7b":function(t,e,s){"use strict";s("5a50")},"159b":function(t,e,s){var i=s("da84"),a=s("fdbc"),n=s("785a"),o=s("17c2"),r=s("9112"),c=function(t){if(t&&t.forEach!==o)try{r(t,"forEach",o)}catch(e){t.forEach=o}};for(var l in a)a[l]&&c(i[l]&&i[l].prototype);c(n)},"15d3":function(t,e,s){},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,a=s("a640"),n=a("forEach");t.exports=n?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1b2a":function(t,e,s){t.exports=s.p+"img/banner_24.9aa398f9.jpg"},"1dde":function(t,e,s){var i=s("d039"),a=s("b622"),n=s("2d00"),o=a("species");t.exports=function(t){return n>=51||!i((function(){var e=[],s=e.constructor={};return s[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2ae4":function(t,e,s){t.exports=s.p+"img/adv21.f99a28c8.jpg"},"2fa8":function(t,e,s){"use strict";s("d0a1")},3005:function(t,e,s){t.exports=s.p+"img/adv24.60178386.jpg"},"498a":function(t,e,s){"use strict";var i=s("23e7"),a=s("58a8").trim,n=s("c8d2");i({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},"4aa3":function(t,e,s){t.exports=s.p+"img/iss_logo_white.31b3d54a.svg"},"4c15":function(t,e,s){t.exports=s.p+"img/banner_23.c52885df.jpg"},"4de4":function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").filter,n=s("1dde"),o=n("filter");i({target:"Array",proto:!0,forced:!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"4de48":function(t,e,s){"use strict";s("77b6")},"53ce":function(t,e,s){"use strict";s("da01")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("e330"),a=s("1d80"),n=s("577e"),o=s("5899"),r=i("".replace),c="["+o+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t){return function(e){var s=n(a(e));return 1&t&&(s=r(s,l,"")),2&t&&(s=r(s,u,"")),s}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5a50":function(t,e,s){},"5d39":function(t,e,s){},"5fd8":function(t,e,s){"use strict";s("c5d9")},"65f0":function(t,e,s){var i=s("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"6afe":function(t,e,s){"use strict";s("76fa")},"76fa":function(t,e,s){},"77b6":function(t,e,s){},"790e":function(t,e,s){},"835b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HeaderOffcavas",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}]}),s("main",{staticClass:"content"},[s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"slider"},[s("Slider")],1),s("section",{staticClass:"bot"},[s("Chat",{attrs:{isActive:t.chatIsActive,isFlyingUp:t.flyingRobotUp,isFlyingDown:t.flyingRobotDown,messages:t.replicsList,quest:t.inputText},on:{"close-chat":t.closeChat,"focus-input":t.focusInput,"add-quest":function(e){return t.addQuest(e)}}}),s("AnswersBlock2",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],on:{"quick-question":function(e){return t.enterQuestion(e)}}})],1),s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"advantages"},[s("Advantages")],1),s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"news mb-2"},[s("div",{staticClass:"news__wrapper container"},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("h4",{staticClass:"news__header text-center py-2"},[t._v("Новости")]),s("router-link",{attrs:{to:"/news"}},[t._v("Больше новостей")])],1),s("NewsCardsList",{attrs:{newsPack:t.singleNewsJson,count:"3",everythingLittle:!0}})],1)])]),s("Footer",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}]})],1)},a=[],n=(s("4de4"),s("159b"),s("498a"),s("d81d"),s("9911"),s("99b2")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:0,controls:"",indicators:"",background:"var(--primary)","img-height":"400"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[i("b-carousel-slide",{attrs:{caption:"Поддержка физических лиц",text:"С помощью нашего ресурса вы сможете подобрать необходимую меру поддержки"},scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{attrs:{src:s("871e"),alt:"слот изображения"}})]},proxy:!0}])}),i("b-carousel-slide",{attrs:{caption:"Калькулятор мер поддержки",text:"Рассчитайте размер доступной субсидии с помощью нашего онлайн-калькулятора"},scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{attrs:{src:s("1b2a"),alt:"слот изображения"}})]},proxy:!0}])}),i("b-carousel-slide",{attrs:{caption:"Поддержка юридических лиц",text:"Субъекты малого и среднего бизнеса смогут подобрать субсидию на развитие своего дела с помощью навигатора мер поддержки"},scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{attrs:{src:s("4c15"),alt:"слот изображения"}})]},proxy:!0}])})],1)},r=[],c={name:"Slider",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},l=c,u=(s("6afe"),s("2877")),d=Object(u["a"])(l,o,r,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat"},[s("ChatHeader",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],on:{"close-chat":function(e){return t.$emit("close-chat")}}}),s("div",{staticClass:"container"},[s("ChatBoard",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,messages:t.messages}}),s("SearchForm",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,quest:t.quest},on:{"add-quest":function(e){return t.$emit("add-quest",e)},"focus-input":function(e){return t.$emit("focus-input")}}})],1)],1)},m=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shadow"},[i("div",{staticClass:"container"},[i("div",{staticClass:"chat-header"},[i("img",{staticClass:"chatHeaderAvatar rounded-circle d-lg-none",attrs:{src:s("0923"),alt:""}}),i("div",{staticClass:"chatHeaderTitle d-lg-none"},[t._v("Робот Василий")]),i("b-button",{staticClass:"closeBtn rounded-circle",on:{click:function(e){return t.$emit("close-chat")}}},[i("span",{staticClass:"material-icons"},[t._v("close")])])],1)])])},h=[],g={name:"ChatHeader"},_=g,w=(s("0ce3"),Object(u["a"])(_,v,h,!1,null,"85d1a8ca",null)),b=w.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chat-section row"},[i("div",{staticClass:"col-3 d-none d-lg-block"},[i("img",{staticClass:"position-absolute",class:{active:t.isActive},attrs:{id:"botWaiting",src:s("a67c"),alt:""}})]),i("div",{class:"chatField col-lg-9 "+t.chatFieldClass()},t._l(t.messages,(function(e){return i("b-alert",{key:e.id,attrs:{variant:t.getAuthor(e.author),show:""}},[e.findedAnswers?i("div",[i("div",[t._v("Вот, что я нашел:")]),t._l(e.findedAnswers,(function(t){return i("AnswerLink",{key:t.content,attrs:{link:t.link,text:t.content}})}))],2):t._e(),t._v(" "+t._s(e.content)+" ")])})),1)])},k=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"answer-link btn btn-primary",attrs:{to:this.link}},[t._v(t._s(this.text))])},y=[],A={name:"AnswerLink",props:["link","text"]},j=A,F=(s("5fd8"),Object(u["a"])(j,x,y,!1,null,"3edc4efc",null)),E=F.exports,$={name:"ChatBoard",components:{AnswerLink:E},data:function(){return{linked:"https://ya.ru",texted:"Грант для ученых"}},props:["isActive","isFlyingUp","isFlyingDown","messages"],computed:{},methods:{getAuthor:function(t){return"bot"===t?"primary":"danger"},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}}},I=$,O=(s("aab1"),Object(u["a"])(I,C,k,!1,null,"323bd563",null)),S=O.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-section row justify-content-end"},[s("div",{class:"searchBlock col-lg-9 "+t.chatFieldClass()},[s("b-form",{class:t.textInField,on:{submit:t.onSubmit}},[s("b-form-group",{attrs:{id:"inputGroupQuestion",label:"","label-for":"inputGroupQuestion"}},[s("b-form-input",{class:t.roundedPill,attrs:{id:"inputQuestion",type:"text",placeholder:"Просто напишите то, что ищете...",autocomplete:"off",required:""},on:{focus:function(e){return t.$emit("focus-input")}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),s("b-button",{staticClass:"rounded-circle",attrs:{type:"submit",tabindex:"-1"}},[s("span",{staticClass:"material-icons"},[t._v("send")])])],1)],1)])},D=[],N={name:"SearchForm",props:["quest","isActive","isFlyingUp","isFlyingDown"],data:function(){return{inputValue:"",roundedPill:"rounded-pill",textInField:""}},computed:{},methods:{onSubmit:function(t){t.preventDefault(),this.inputValue.trim()&&(this.$emit("add-quest",this.inputValue),this.inputValue="")},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}},watch:{inputValue:function(){this.inputValue.trim()?(console.log("Работает"),this.textInField="isActive"):(console.log("В поле пусто"),this.textInField="")},quest:function(){this.inputValue=this.quest}}},R=N,U=(s("efb7"),Object(u["a"])(R,q,D,!1,null,null,null)),P=U.exports,L={name:"Chat",components:{ChatHeader:b,ChatBoard:S,SearchForm:P},props:["isActive","isFlyingUp","isFlyingDown","messages","quest"],methods:{},data:function(){return{}}},T=L,V=Object(u["a"])(T,p,m,!1,null,"d295267e",null),H=V.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"feature-section row justify-content-end"},[s("div",{staticClass:"col-lg-9"},[s("h4",{staticClass:"features-title"},[t._v("Я только учусь, но уже могу предложить:")]),t._l(t.rows,(function(e){return s("div",{key:e,staticClass:"row"},t._l(t.partOfArray(t.features,(e-1)*t.columns+1,t.columns),(function(e){return s("div",{key:e.id,staticClass:"feature col"},[s("b-button",{attrs:{variant:"outline-light",block:"",href:"#"},on:{click:function(s){return t.$emit("quick-question",e.title)}}},[s("span",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("br"),t._v(" "+t._s(e.title)+" ")])],1)})),0)}))],2)])])},Q=[],M={name:"AnswersBlock2",data:function(){return{columns:6,features:[{id:1,title:"Гранты",icon:"workspace_premium"},{id:2,title:"Субсидии",icon:"volunteer_activism"},{id:3,title:"Наука",icon:"science"},{id:4,title:"Инновации",icon:"lightbulb"}]}},computed:{rows:function(){return Math.ceil(this.features.length/this.columns)}},methods:{partOfArray:function(t,e,s){return t.filter((function(t){return t.id>=e&&t.id<e+s}))}}},G=M,J=(s("2fa8"),Object(u["a"])(G,B,Q,!1,null,"6af259fe",null)),W=J.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"advantages__wrapper container"},[i("h4",{staticClass:"advantages__header text-center py-2"},[t._v("Наши преимущества")]),i("div",{staticClass:"row row-cols-2 row-cols-sm-2 row-cols-lg-4"},[i("div",{staticClass:"col"},[i("div",{staticClass:"h-100"},[i("img",{staticClass:"advantage__image",attrs:{src:s("2ae4"),alt:"..."}}),i("div",{staticClass:"advantage__comment text-center"},[i("h5",{staticClass:"card-title"},[t._v("Контракты")]),i("p",{staticClass:"card-text"},[t._v(" Заключайте контракты с другими участниками прямо в личном кабинете ")])])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"h-100"},[i("img",{staticClass:"advantage__image",attrs:{src:s("9043"),alt:"..."}}),i("div",{staticClass:"advantage__comment text-center"},[i("h5",{staticClass:"card-title"},[t._v("Партнеры")]),i("p",{staticClass:"card-text"},[t._v(" Находите партнеров из других отраслей ")])])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"h-100"},[i("img",{staticClass:"advantage__image",attrs:{src:s("a329"),alt:"..."}}),i("div",{staticClass:"advantage__comment text-center"},[i("h5",{staticClass:"card-title"},[t._v("Поддержка")]),i("p",{staticClass:"card-text"},[t._v(" Получайте поддержку и консультации с консьерж-сервисом ")])])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"h-100"},[i("img",{staticClass:"advantage__image",attrs:{src:s("3005"),alt:"..."}}),i("div",{staticClass:"advantage__comment text-center"},[i("h5",{staticClass:"card-title"},[t._v("Поиск")]),i("p",{staticClass:"card-text"},[t._v("Открывайте новые возможности с помощью поиска на основе искусственного интеллекта")])])])])])])}],K={name:"Advantages",data:function(){return{imgurl:"../assets/advantages/adv1.jpg"}}},Y=K,Z=(s("c369"),Object(u["a"])(Y,X,z,!1,null,"e04cf2a0",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3"},t._l(t.cuttedNewsPack,(function(t){return s("div",{key:t.id,class:t.importance?"news-important col col-sm-12 col-lg-8":"col"},[s("NewsCard",{attrs:{news:t}})],1)})),0)},st=[],it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-text-block"},[s("router-link",{staticClass:"news-link stretched-link",attrs:{to:t.news.link}},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.news.title))])]),s("p",{staticClass:"card-text"},[t._v(t._s(t.news.text))])],1),s("div",{staticClass:"card__image_full-width"},[s("img",{staticClass:"card__image",attrs:{src:t.news.image.path+t.news.image.file_name,alt:"..."}})]),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"news-source"},[s("img",{staticClass:"news-source__logo",attrs:{src:t.news.source.logo.path+t.news.source.logo.file_name,alt:"Логотип новостного источника"}}),s("a",{staticClass:"news-source__link",attrs:{href:t.news.source.link}},[t._v(t._s(t.news.source.title))])]),s("span",[t._v(t._s(t.news.publication_date))])])])])},at=[],nt={name:"NewsCard",props:["news"],data:function(){return{}},computed:{}},ot=nt,rt=(s("4de48"),Object(u["a"])(ot,it,at,!1,null,"28e36b1b",null)),ct=rt.exports,lt={name:"NewsCardsList",components:{NewsCard:ct},props:["newsPack","count","everythingLittle"],computed:{cuttedNewsPack:function(){var t=this;if(this.count&&this.count<this.newsPack.length){var e=this.newsPack.filter((function(e,s){return s<t.count}));return this.everythingLittle&&e.forEach((function(t){return t.importance=!1})),e}return this.newsPack}}},ut=lt,dt=(s("53ce"),Object(u["a"])(ut,et,st,!1,null,"f75a2770",null)),ft=dt.exports,pt=s("fd2d"),mt={name:"HomeS",components:{HeaderOffcavas:n["a"],Slider:f,Chat:H,AnswersBlock2:W,Advantages:tt,NewsCardsList:ft,Footer:pt["a"]},data:function(){return{inputText:"",replics:[{id:1,author:"bot",content:"Я - робот Василий. Давайте я помогу Вам с поиском."}],faq:[{id:1,keywords:["covid","ковид","корона"],answers:[{content:"Запись на вакцинацию",link:"https://google.com"},{content:"Сертификат вакцинированного",link:"https://ya.ru"},{content:"Мои QR-коды",link:"https://ya.ru"}]},{id:2,keywords:["спорт"],answers:[{content:"Присвоение спортивных разрядов",link:"https://google.com"},{content:"Присвоение квалификационных категорий спортивных судей",link:"https://google.com"},{content:"Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации",link:"https://google.com"}]},{id:3,keywords:["грант","гранты"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"},{content:"Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных сферах экономики",link:"./subsidyinfo3"}]},{id:4,keywords:["субсидия","субсидии"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:5,keywords:["инновация","инновации"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:6,keywords:["наука"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"}]}],chatIsActive:!1,flyingRobotUp:!1,flyingRobotDown:!1,singleNewsJson:[{id:1,title:"ArchGlass 2021 - Международный форум индустрии архитектурного стекла",text:"Союз архитекторов России и Союз московских архитекторов приглашают на 3-й международный форум индустрии архитектурного стекла ArchGlass 2021.",image:{path:"images/news/",file_name:"news1.jpg"},link:"/newsinfo",importance:!0,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:2,title:"Territorial development strategy",text:"Конференция по Стратегии комплексного развития территорий соберет экспертное сообщество и реальные кейсы на примере которых будут рассмотрены вопросы территориального планирования, земельного администрирования, технического регулирования и деятельности по улучшению бизнес-климата",image:{path:"images/news/",file_name:"news2.jpg"},link:"/newsinfo",importance:!1,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:3,title:"Цифровизация транспорта 2021. Процесс трансформации: оценка и перспективы",text:"Лидеры отрасли уже реализуют свои собственные стратегии и внедряют новые бизнес-модели на основе цифровых технологий.",image:{path:"images/news/",file_name:"news3.jpg"},link:"/newsinfo",importance:!1,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:4,title:'МАСТЕР - КЛАСС "ОСНОВЫ ИНВЕСТИЦИОННОЙ ГРАМОТНОСТИ В 21 ВЕКЕ" от Rocket University',text:"Погружение в мир современных финансов. Инструменты инвестиций. Игра - симуляция работы инвестиционного аналитика",image:{path:"images/news/",file_name:"news4.jpg"},link:"/newsinfo",importance:!0,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:5,title:"Digital Transformation Day 2021",text:"В ходе конференции предлагается обсудить следующий круг вопросов: Цифровая трансформация бизнеса крупной компании как комплексный взгляд на сложную многоаспектную структуру деятельности.",image:{path:"images/news/",file_name:"news5.jpg"},link:"/newsinfo",importance:!1,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:6,title:"ODSC APAC Virtual Conference 2021",text:"ODSC APAC Virtual Conference 2021 is one of the largest applied data science conferences. Our speakers include core contributors to many open source libraries and languages.",image:{path:"images/news/",file_name:"news6.jpg"},link:"/newsinfo",importance:!1,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:7,title:"ChipEXPO-2021",text:"Выставка включена в план официальных выставочных мероприятий Министерства промышленности и торговли Российской Федерации.",image:{path:"images/news/",file_name:"news7.jpg"},link:"/newsinfo",importance:!1,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:8,title:'Мастер-класс по личностному росту на тему: "Мотивация в работе с командой"',text:"Обучающее мероприятие, направленное на разработку общественных инициатив участников проекта, посредством образовательной составляющей, подкрепленной ключевыми навыками и практическими приемами.",image:{path:"images/news/",file_name:"news8.jpg"},link:"/newsinfo",importance:!1,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:9,title:'Мастер-класс по личностному росту на тему: "Мотивация в работе с командой"',text:"Обучающее мероприятие, направленное на разработку общественных инициатив участников проекта, посредством образовательной составляющей, подкрепленной ключевыми навыками и практическими приемами.",image:{path:"images/news/",file_name:"news9.jpg"},link:"/newsinfo",importance:!1,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}},{id:10,title:'Мастер-класс по личностному росту на тему: "Мотивация в работе с командой"',text:"Обучающее мероприятие, направленное на разработку общественных инициатив участников проекта, посредством образовательной составляющей, подкрепленной ключевыми навыками и практическими приемами.",image:{path:"images/news/",file_name:"news10.jpg"},link:"/newsinfo",importance:!1,publication_date:"10:15",source:{logo:{path:"images/news_source_logo/",file_name:"rialogo.jpg"},title:"РИА Новости",link:"https://ria.ru"}}]}},computed:{replicsList:function(){return this.chatIsActive?this.replics:this.replics.filter((function(t){return 1===t.id}))}},methods:{focusInput:function(){this.chatIsActive=!0,setTimeout(this.fly,1e3)},fly:function(){this.flyingRobotUp=!1,this.flyingRobotDown=!0},dontfly:function(){this.flyingRobotUp=!1,this.chatIsActive=!this.chatIsActive},closeChat:function(){this.inputText="",this.chatIsActive&&(this.flyingRobotUp=!0,this.flyingRobotDown=!1,setTimeout(this.dontfly,1e3))},enterQuestion:function(t){this.inputText=t,this.chatIsActive=!0,setTimeout(this.fly,1e3)},addQuest:function(t){var e,s,i={id:this.replics.length+1,author:"user",content:t};if(this.replics.push(i),this.faq.forEach((function(e){e.keywords.forEach((function(i){t.trim().toLowerCase()===i&&(s=e.answers)}))})),s){var a=s.map((function(t){var e={link:t.link,content:t.content};return e}));e={author:"bot",content:"",findedAnswers:a}}else e={author:"bot",content:"Извините, я ничего не нашёл."};e.id=this.replics.length+1,this.replics.push(e)},chatActive:function(){return this.replics.length>1&&this.chatIsActive}}},vt=mt,ht=(s("cce7"),Object(u["a"])(vt,i,a,!1,null,"51f0649f",null));e["default"]=ht.exports},"857a":function(t,e,s){var i=s("e330"),a=s("1d80"),n=s("577e"),o=/"/g,r=i("".replace);t.exports=function(t,e,s,i){var c=n(a(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+r(n(i),o,"&quot;")+'"'),l+">"+c+"</"+e+">"}},"871e":function(t,e,s){t.exports=s.p+"img/banner_21.fd91fe20.jpg"},"8a94":function(t,e,s){},9043:function(t,e,s){t.exports=s.p+"img/adv22.7bb49f04.jpg"},9911:function(t,e,s){"use strict";var i=s("23e7"),a=s("857a"),n=s("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(t){return a(this,"a","href",t)}})},"99b2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header sticky-top shadow"},[i("div",{staticClass:"header__wrapper container"},[i("b-navbar",{attrs:{type:"dark"}},[i("b-navbar-brand",{attrs:{to:"/"}},[i("img",{staticClass:"d-inline-block align-top logo__image",attrs:{src:s("4aa3"),alt:"logo"}}),t._v(" Навигатор мер поддержки ")]),i("OffcanvasMenu"),i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],staticClass:"d-lg-none"},[i("span",{staticClass:"material-icons"},[t._v("menu")])])],1)],1)])},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-sidebar",{attrs:{id:"sidebar",title:"Меню",backdrop:"","bg-variant":"primary","text-variant":"light",shadow:""}},[s("b-collapse",{attrs:{"is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/news","active-class":"active"}},[t._v(" Новости ")]),s("b-nav-item-dropdown",{attrs:{"active-class":"active",text:"Меры поддержки"}},[s("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Все меры поддержки ")]),s("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Юридическим лицам ")]),s("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Индивидуальным предпринимателям ")]),s("b-dropdown-item",{attrs:{to:"/measures"}},[t._v(" Физическим лицам ")])],1),s("b-nav-item",{attrs:{to:"/accountinfo","active-class":"active"}},[t._v(" Личный кабинет ")])],1)],1)],1)},o=[],r={name:"OffcanvasMenu"},c=r,l=(s("d1d3"),s("2877")),u=Object(l["a"])(c,n,o,!1,null,null,null),d=u.exports,f={name:"HeaderOffcavas",components:{OffcanvasMenu:d}},p=f,m=(s("eba1"),Object(l["a"])(p,i,a,!1,null,null,null));e["a"]=m.exports},a329:function(t,e,s){t.exports=s.p+"img/adv23.650bee3d.jpg"},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},a67c:function(t,e,s){t.exports=s.p+"img/robot.1049893b.png"},aab1:function(t,e,s){"use strict";s("c3a6")},af03:function(t,e,s){var i=s("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b727:function(t,e,s){var i=s("0366"),a=s("e330"),n=s("44ad"),o=s("7b0b"),r=s("07fa"),c=s("65f0"),l=a([].push),u=function(t){var e=1==t,s=2==t,a=3==t,u=4==t,d=6==t,f=7==t,p=5==t||d;return function(m,v,h,g){for(var _,w,b=o(m),C=n(b),k=i(v,h),x=r(C),y=0,A=g||c,j=e?A(m,x):s||f?A(m,0):void 0;x>y;y++)if((p||y in C)&&(_=C[y],w=k(_,y,b),t))if(e)j[y]=w;else if(w)switch(t){case 3:return!0;case 5:return _;case 6:return y;case 2:l(j,_)}else switch(t){case 4:return!1;case 7:l(j,_)}return d?-1:a||u?u:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c369:function(t,e,s){"use strict";s("790e")},c3a6:function(t,e,s){},c5d9:function(t,e,s){},c8d2:function(t,e,s){var i=s("5e77").PROPER,a=s("d039"),n=s("5899"),o="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||o[t]()!==o||i&&n[t].name!==t}))}},cce7:function(t,e,s){"use strict";s("f8e1")},d003:function(t,e,s){},d0a1:function(t,e,s){},d1d3:function(t,e,s){"use strict";s("15d3")},d81d:function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").map,n=s("1dde"),o=n("map");i({target:"Array",proto:!0,forced:!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},da01:function(t,e,s){},e8b5:function(t,e,s){var i=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},eba1:function(t,e,s){"use strict";s("8a94")},efb7:function(t,e,s){"use strict";s("d003")},f8e1:function(t,e,s){},fd2d:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"footer__wrapper container"},[i("div",{staticClass:"footer__main row row-cols-1 row-cols-md-3"},[i("div",{staticClass:"footer__info col"},[i("router-link",{staticClass:"footer__brend",attrs:{to:"/"}},[i("img",{staticClass:"footer__brend__logo",attrs:{src:s("4aa3"),alt:""}}),i("div",{staticClass:"footer__brend__name"},[t._v("Навигатор мер поддержки")])]),t._m(0)],1),i("ul",{staticClass:"footer__contacts col-md-3"},[t._m(1),t._m(2),t._m(3),i("li",[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{href:"#",variant:"link"}},[t._v("Техническая поддержка")])],1)]),i("ul",{staticClass:"footer__links col-md-5"},[i("li",[i("router-link",{attrs:{to:"/news"}},[t._v("Новости")])],1),i("li",[i("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка юридических лиц")])],1),i("li",[i("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка индивидуальных предпринимателей")])],1),i("li",[i("router-link",{attrs:{to:"/measures"}},[t._v("Поддержка физических лиц")])],1)])]),i("hr"),i("div",{staticClass:"footer__copyright"},[t._v(" Все права защищены ")]),i("b-modal",{attrs:{id:"modal-1",title:"Обратная связь","hide-footer":""}},[i("SupportRequestForm")],1)],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer__social"},[s("a",{staticClass:"footer__social__link",attrs:{href:"https://www.facebook.com",target:"_blank"}},[s("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/fb.svg",alt:""}})]),s("a",{staticClass:"footer__social__link",attrs:{href:"https://www.instagram.com",target:"_blank"}},[s("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/instagram.svg",alt:""}})]),s("a",{staticClass:"footer__social__link",attrs:{href:"https://www.youtube.com/",target:"_blank"}},[s("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/youtube.svg",alt:""}})]),s("a",{staticClass:"footer__social__link",attrs:{href:"https://vk.com/",target:"_blank"}},[s("img",{staticClass:"footer__social__logo",attrs:{src:"https://novosibirsk.rus-buket.ru/images/socials/alt/vk.svg",alt:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"footer__phone",attrs:{href:"tel:+78007751986"}},[t._v("8-800-775-1986")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"footer__phone",attrs:{href:"tel:+73833541011"}},[t._v("8-383-354-1011")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"footer__mail",attrs:{href:"mailto:info@isands.ru"}},[t._v("info@isands.ru")])])}],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[t._m(0),t._m(1),t._m(2),s("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){return t.$bvModal.hide("modal-1")}}},[t._v("Отправить")])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Адрес электронной почты")]),s("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:"mgp-nsk@yandex.ru",disabled:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Тема обращения")]),s("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[s("option",[t._v("Личный кабинет, регистрация, авторизация")]),s("option",[t._v("Проблемы с обработкой заявки")]),s("option",[t._v("Технические неполадки")]),s("option",[t._v("Прочее")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Текст сообщения")]),s("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"}})])}],r={name:"SupportRequestForm"},c=r,l=s("2877"),u=Object(l["a"])(c,n,o,!1,null,"256438d9",null),d=u.exports,f={name:"Footer",components:{SupportRequestForm:d}},p=f,m=(s("0d7b"),Object(l["a"])(p,i,a,!1,null,"7247ab76",null));e["a"]=m.exports}}]);
//# sourceMappingURL=chunk-7075a649.e106bb81.js.map