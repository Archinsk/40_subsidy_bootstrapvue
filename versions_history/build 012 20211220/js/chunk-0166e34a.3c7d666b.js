(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0166e34a"],{"0f2c":function(t,e,s){"use strict";s("44ef")},"1b2a":function(t,e,s){t.exports=s.p+"img/banner_24.9aa398f9.jpg"},"2ae4":function(t,e,s){t.exports=s.p+"img/adv21.f99a28c8.jpg"},"2dd9":function(t,e,s){"use strict";s("c304")},"2fa8":function(t,e,s){"use strict";s("d0a1")},3005:function(t,e,s){t.exports=s.p+"img/adv24.60178386.jpg"},"44ef":function(t,e,s){},4903:function(t,e,s){"use strict";s("d4d8")},"4c15":function(t,e,s){t.exports=s.p+"img/banner_23.c52885df.jpg"},"6afe":function(t,e,s){"use strict";s("76fa")},"76fa":function(t,e,s){},"790e":function(t,e,s){},"835b":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HeaderOffcavas",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}]}),s("main",{staticClass:"content"},[s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"slider"},[s("Slider")],1),s("section",{staticClass:"bot"},[s("Chat",{attrs:{isActive:t.chatIsActive,isFlyingUp:t.flyingRobotUp,isFlyingDown:t.flyingRobotDown,messages:t.replicsList,quest:t.inputText},on:{"close-chat":t.closeChat,"focus-input":t.focusInput,"add-quest":function(e){return t.addQuest(e)}}}),s("AnswersBlock2",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],on:{"quick-question":function(e){return t.enterQuestion(e)}}})],1),s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"advantages"},[s("Advantages")],1),s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"news mb-2"},[s("div",{staticClass:"news__wrapper container"},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("h4",{staticClass:"news__header text-center py-2"},[t._v("Новости")]),s("router-link",{attrs:{to:"/news"}},[t._v("Больше новостей")])],1),s("NewsPreviewList",{attrs:{count:"3",everythingLittle:!0,"target-url":t.newsTargetUrl,pagination:!1}})],1)])]),s("Footer",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}]})],1)},i=[],a=(s("4de4"),s("159b"),s("498a"),s("d81d"),s("9911"),s("99b2")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:0,controls:"",indicators:"",background:"var(--primary)","img-height":"400"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{attrs:{caption:"Поддержка физических лиц",text:"С помощью нашего ресурса вы сможете подобрать необходимую меру поддержки"},scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{attrs:{src:s("871e"),alt:"слот изображения"}})]},proxy:!0}])}),n("b-carousel-slide",{attrs:{caption:"Калькулятор мер поддержки",text:"Рассчитайте размер доступной субсидии с помощью нашего онлайн-калькулятора"},scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{attrs:{src:s("1b2a"),alt:"слот изображения"}})]},proxy:!0}])}),n("b-carousel-slide",{attrs:{caption:"Поддержка юридических лиц",text:"Субъекты малого и среднего бизнеса смогут подобрать субсидию на развитие своего дела с помощью навигатора мер поддержки"},scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{attrs:{src:s("4c15"),alt:"слот изображения"}})]},proxy:!0}])})],1)},o=[],r={name:"Slider",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},l=r,u=(s("6afe"),s("2877")),d=Object(u["a"])(l,c,o,!1,null,null,null),f=d.exports,p=s("e6b0"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"feature-section row justify-content-end"},[s("div",{staticClass:"col-lg-9"},[s("h4",{staticClass:"features-title"},[t._v("Я только учусь, но уже могу предложить:")]),t._l(t.rows,(function(e){return s("div",{key:e,staticClass:"row"},t._l(t.partOfArray(t.features,(e-1)*t.columns+1,t.columns),(function(e){return s("div",{key:e.id,staticClass:"feature col"},[s("b-button",{attrs:{variant:"outline-light",block:"",href:"#"},on:{click:function(s){return t.$emit("quick-question",e.title)}}},[s("span",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("br"),t._v(" "+t._s(e.title)+" ")])],1)})),0)}))],2)])])},v=[],h={name:"AnswersBlock2",data:function(){return{columns:6,features:[{id:1,title:"Гранты",icon:"workspace_premium"},{id:2,title:"Субсидии",icon:"volunteer_activism"},{id:3,title:"Наука",icon:"science"},{id:4,title:"Инновации",icon:"lightbulb"}]}},computed:{rows:function(){return Math.ceil(this.features.length/this.columns)}},methods:{partOfArray:function(t,e,s){return t.filter((function(t){return t.id>=e&&t.id<e+s}))}}},m=h,w=(s("2fa8"),Object(u["a"])(m,g,v,!1,null,"6af259fe",null)),_=w.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"advantages__wrapper container"},[n("h4",{staticClass:"advantages__header text-center py-2"},[t._v("Наши преимущества")]),n("div",{staticClass:"row row-cols-2 row-cols-sm-2 row-cols-lg-4"},[n("div",{staticClass:"col"},[n("div",{staticClass:"h-100"},[n("img",{staticClass:"advantage__image",attrs:{src:s("2ae4"),alt:"..."}}),n("div",{staticClass:"advantage__comment text-center"},[n("h5",{staticClass:"card-title"},[t._v("Контракты")]),n("p",{staticClass:"card-text"},[t._v(" Заключайте контракты с другими участниками прямо в личном кабинете ")])])])]),n("div",{staticClass:"col"},[n("div",{staticClass:"h-100"},[n("img",{staticClass:"advantage__image",attrs:{src:s("9043"),alt:"..."}}),n("div",{staticClass:"advantage__comment text-center"},[n("h5",{staticClass:"card-title"},[t._v("Партнеры")]),n("p",{staticClass:"card-text"},[t._v(" Находите партнеров из других отраслей ")])])])]),n("div",{staticClass:"col"},[n("div",{staticClass:"h-100"},[n("img",{staticClass:"advantage__image",attrs:{src:s("a329"),alt:"..."}}),n("div",{staticClass:"advantage__comment text-center"},[n("h5",{staticClass:"card-title"},[t._v("Поддержка")]),n("p",{staticClass:"card-text"},[t._v(" Получайте поддержку и консультации с консьерж-сервисом ")])])])]),n("div",{staticClass:"col"},[n("div",{staticClass:"h-100"},[n("img",{staticClass:"advantage__image",attrs:{src:s("3005"),alt:"..."}}),n("div",{staticClass:"advantage__comment text-center"},[n("h5",{staticClass:"card-title"},[t._v("Поиск")]),n("p",{staticClass:"card-text"},[t._v("Открывайте новые возможности с помощью поиска на основе искусственного интеллекта")])])])])])])}],k={name:"Advantages",data:function(){return{imgurl:"../assets/advantages/adv1.jpg"}}},y=k,x=(s("c369"),Object(u["a"])(y,b,C,!1,null,"e04cf2a0",null)),I=x.exports,A=s("ef99"),P=s("fd2d"),S={name:"HomeS",components:{HeaderOffcavas:a["a"],Slider:f,Chat:p["a"],AnswersBlock2:_,Advantages:I,NewsPreviewList:A["a"],Footer:P["a"]},data:function(){return{newsTargetUrl:"https://www.d-skills.ru/40_subsidy_bootstrapvue/news.php",inputText:"",replics:[{id:1,author:"bot",content:"Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки."}],faq:[{id:1,keywords:["covid","ковид","корона"],answers:[{content:"Запись на вакцинацию",link:"https://google.com"},{content:"Сертификат вакцинированного",link:"https://ya.ru"},{content:"Мои QR-коды",link:"https://ya.ru"}]},{id:2,keywords:["спорт"],answers:[{content:"Присвоение спортивных разрядов",link:"https://google.com"},{content:"Присвоение квалификационных категорий спортивных судей",link:"https://google.com"},{content:"Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации",link:"https://google.com"}]},{id:3,keywords:["грант","гранты"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"},{content:"Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных сферах экономики",link:"./subsidyinfo3"}]},{id:4,keywords:["субсидия","субсидии"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:5,keywords:["инновация","инновации"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:6,keywords:["наука"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"}]},{id:7,keywords:["20000000","20000000 руб","20 000 000","20 000 000 руб"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"}]}],chatIsActive:!1,flyingRobotUp:!1,flyingRobotDown:!1}},computed:{replicsList:function(){return this.chatIsActive?this.replics:this.replics.filter((function(t){return 1===t.id}))}},methods:{focusInput:function(){this.chatIsActive=!0,setTimeout(this.fly,1e3)},fly:function(){this.flyingRobotUp=!1,this.flyingRobotDown=!0},dontfly:function(){this.flyingRobotUp=!1,this.chatIsActive=!this.chatIsActive},closeChat:function(){this.inputText="",this.chatIsActive&&(this.flyingRobotUp=!0,this.flyingRobotDown=!1,setTimeout(this.dontfly,1e3))},enterQuestion:function(t){this.inputText=t,this.chatIsActive=!0,setTimeout(this.fly,1e3)},addQuest:function(t){var e,s,n={id:this.replics.length+1,author:"user",content:t};if(this.replics.push(n),this.faq.forEach((function(e){e.keywords.forEach((function(n){t.trim().toLowerCase()===n&&(s=e.answers)}))})),s){var i=s.map((function(t){var e={link:t.link,content:t.content};return e}));e={author:"bot",content:"",findedAnswers:i}}else e={author:"bot",content:"Извините, я ничего не нашёл."};e.id=this.replics.length+1,this.replics.push(e)},chatActive:function(){return this.replics.length>1&&this.chatIsActive}}},j=S,L=(s("4903"),Object(u["a"])(j,n,i,!1,null,"2f501606",null));e["default"]=L.exports},"871e":function(t,e,s){t.exports=s.p+"img/banner_21.fd91fe20.jpg"},9043:function(t,e,s){t.exports=s.p+"img/adv22.7bb49f04.jpg"},9776:function(t,e,s){},a329:function(t,e,s){t.exports=s.p+"img/adv23.650bee3d.jpg"},a857:function(t,e,s){"use strict";s("9776")},b64b:function(t,e,s){var n=s("23e7"),i=s("7b0b"),a=s("df75"),c=s("d039"),o=c((function(){a(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return a(i(t))}})},c304:function(t,e,s){},c369:function(t,e,s){"use strict";s("790e")},cb90:function(t,e,s){"use strict";s("fce8")},d0a1:function(t,e,s){},d4d8:function(t,e,s){},ef99:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3"},[t._l(t.newsPack,(function(e){return s("div",{key:e.id,class:e.importance>0&&!t.everythingLittle?"news-important col col-sm-12 col-lg-8":"col"},[s("NewsPreviewListItem",{attrs:{"news-link":e.link,"news-title":e.title,"news-text":e.text,"news-image-file":e.image_path+e.image_file_name,"news-source-logo-file":e.source_logo_path+e.source_logo_file_name,"news-source-link":e.source_link,"news-source-name":e.source_title,"news-publication-date":e.publication_date,"news-importance":e.importance}})],1)})),t.pagination?s("div",{staticClass:"col-sm-12 col-lg-12 mb-0"},[s("Pagination",{staticClass:"d-flex justify-content-between align-items-center",attrs:{"items-total":t.totalItems}})],1):t._e()],2)])},i=[],a=(s("b64b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-text-block"},[s("router-link",{staticClass:"news-link stretched-link",attrs:{to:t.newsLink}},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.newsTitle))])]),s("p",{staticClass:"card-text"},[t._v(t._s(t.newsText))])],1),s("div",{staticClass:"card__image_full-width"},[s("img",{staticClass:"card__image",attrs:{alt:"Изображение анонса новости",src:t.newsImageFile}})]),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"news-source"},[s("img",{staticClass:"news-source__logo",attrs:{alt:"Логотип новостного источника",src:t.newsSourceLogoFile}}),s("a",{staticClass:"news-source__link",attrs:{href:t.newsSourceLink}},[t._v(t._s(t.newsSourceName))])]),s("span",[t._v(t._s(t.newsPublicationDate))])])])])}),c=[],o={name:"NewsPreviewListItem",props:["newsLink","newsTitle","newsText","newsImageFile","newsSourceLogoFile","newsSourceLink","newsSourceName","newsPublicationDate","newsImportance"]},r=o,l=(s("0f2c"),s("2877")),u=Object(l["a"])(r,a,c,!1,null,"c3f6f31a",null),d=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("PaginationItemsPerPage",{on:{"change-pageSize":function(e){return t.$emit("change-pageSize",e)}}}),s("div",{staticClass:"block"},[t._v("1-10 из "+t._s(t.itemsTotal))]),s("PaginationPageSelector",{on:{"change-page":function(e){return t.$emit("change-page",e)}}})],1)},p=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination-items-per-page"},t._l(t.itemsCount,(function(e){return s("button",{key:e,staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return t.$emit("change-pageSize",e)}}},[t._v(" "+t._s(e)+" ")])})),0)},v=[],h={name:"PaginationItemsPerPage",data:function(){return{itemsCount:[3,5,10]}}},m=h,w=(s("a857"),Object(l["a"])(m,g,v,!1,null,"a96e5796",null)),_=w.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"measure__pagination"},[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination justify-content-center"},[t._m(0),t._l(t.pages,(function(e){return s("li",{key:e,staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return t.$emit("change-page",e)}}},[t._v(t._s(e))])])})),t._m(1)],2)])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])}],k={name:"PaginationPageSelector",data:function(){return{pages:[1,2,3]}}},y=k,x=(s("2dd9"),Object(l["a"])(y,b,C,!1,null,"8fe0ca3c",null)),I=x.exports,A={name:"ItemsListFooter",components:{PaginationItemsPerPage:_,PaginationPageSelector:I},props:["itemsTotal"]},P=A,S=Object(l["a"])(P,f,p,!1,null,"6cbbc026",null),j=S.exports,L={name:"NewsPreviewList",components:{NewsPreviewListItem:d,Pagination:j},props:["count","everythingLittle","targetUrl","pagination"],data:function(){return{page:1,pageSize:10,newsPack:[],totalItems:0}},computed:{newsItemTotal:function(){return this.count?this.count:this.pageSize}},methods:{getNews:function(){var t=this,e=new XMLHttpRequest,s=this.targetUrl+"?page="+this.page+"&pageSize="+this.newsItemTotal;e.open("GET",s),e.responseType="json",e.onload=function(){console.log("Запрашиваю список новостей"),console.log(e.response),t.newsPack=e.response},e.send()},getNewsCount:function(){var t=this,e=new XMLHttpRequest,s=this.targetUrl+"?req=count";e.open("GET",s),e.responseType="json",e.onload=function(){console.log("Запрашиваю общее количество"),console.log(e.response),t.totalItems=Object.keys(e.response).length},e.send()}},mounted:function(){this.getNewsCount(),this.getNews()}},T=L,N=(s("cb90"),Object(l["a"])(T,n,i,!1,null,"3f766299",null));e["a"]=N.exports},fce8:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0166e34a.3c7d666b.js.map