(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2011258c"],{"0923":function(t,e,s){t.exports=s.p+"img/robot_avatar.715b5b87.png"},"0ce3":function(t,e,s){"use strict";s("5d39")},"1b2a":function(t,e,s){t.exports=s.p+"img/banner_24.9aa398f9.jpg"},"2ae4":function(t,e,s){t.exports=s.p+"img/adv21.f99a28c8.jpg"},"2fa8":function(t,e,s){"use strict";s("d0a1")},3005:function(t,e,s){t.exports=s.p+"img/adv24.60178386.jpg"},"485c":function(t,e,s){},"498a":function(t,e,s){"use strict";var i=s("23e7"),n=s("58a8").trim,a=s("c8d2");i({target:"String",proto:!0,forced:a("trim")},{trim:function(){return n(this)}})},"4c15":function(t,e,s){t.exports=s.p+"img/banner_23.c52885df.jpg"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("e330"),n=s("1d80"),a=s("577e"),c=s("5899"),r=i("".replace),o="["+c+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t){return function(e){var s=a(n(e));return 1&t&&(s=r(s,l,"")),2&t&&(s=r(s,u,"")),s}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5d39":function(t,e,s){},"5fd8":function(t,e,s){"use strict";s("c5d9")},"6afe":function(t,e,s){"use strict";s("76fa")},"76fa":function(t,e,s){},"790e":function(t,e,s){},"7ab7":function(t,e,s){},"857a":function(t,e,s){var i=s("e330"),n=s("1d80"),a=s("577e"),c=/"/g,r=i("".replace);t.exports=function(t,e,s,i){var o=a(n(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+r(a(i),c,"&quot;")+'"'),l+">"+o+"</"+e+">"}},8602:function(t,e,s){"use strict";s("485c")},"871e":function(t,e,s){t.exports=s.p+"img/banner_21.fd91fe20.jpg"},90432:function(t,e,s){t.exports=s.p+"img/adv22.7bb49f04.jpg"},9911:function(t,e,s){"use strict";var i=s("23e7"),n=s("857a"),a=s("af03");i({target:"String",proto:!0,forced:a("link")},{link:function(t){return n(this,"a","href",t)}})},a071:function(t,e,s){"use strict";s("b947")},a14b:function(t,e,s){},a329:function(t,e,s){t.exports=s.p+"img/adv23.650bee3d.jpg"},a67c:function(t,e,s){t.exports=s.p+"img/robot.1049893b.png"},af03:function(t,e,s){var i=s("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b947:function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"slider"},[s("Slider")],1),s("section",{staticClass:"bot"},[s("Chat",{attrs:{isActive:t.chatIsActive,isFlyingUp:t.flyingRobotUp,isFlyingDown:t.flyingRobotDown,messages:t.replicsList,quest:t.inputText},on:{"close-chat":t.closeChat,"focus-input":t.focusInput,"add-quest":function(e){return t.addQuest(e)}}}),s("AnswersBlock2",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],on:{"quick-question":function(e){return t.enterQuestion(e)}}})],1),s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"advantages"},[s("Advantages")],1),s("section",{directives:[{name:"show",rawName:"v-show",value:!t.chatIsActive,expression:"!chatIsActive"}],staticClass:"news mb-2"},[s("div",{staticClass:"news__wrapper container"},[s("h4",{staticClass:"news__header text-center py-2"},[t._v("Новости")]),s("NewsPreviewList",{attrs:{newsList:t.newsCardsList,everythingLittle:!0,isPagination:!1}})],1)])])},n=[],a=(s("4de4"),s("159b"),s("498a"),s("d81d"),s("9911"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:0,controls:"",indicators:"",background:"var(--primary)","img-height":"400"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[i("b-carousel-slide",{attrs:{caption:"Поддержка физических лиц",text:"С помощью нашего ресурса вы сможете подобрать необходимую меру поддержки"},scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{attrs:{src:s("871e"),alt:"слот изображения"}})]},proxy:!0}])}),i("b-carousel-slide",{attrs:{caption:"Калькулятор мер поддержки",text:"Рассчитайте размер доступной субсидии с помощью нашего онлайн-калькулятора"},scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{attrs:{src:s("1b2a"),alt:"слот изображения"}})]},proxy:!0}])}),i("b-carousel-slide",{attrs:{caption:"Поддержка юридических лиц",text:"Субъекты малого и среднего бизнеса смогут подобрать субсидию на развитие своего дела с помощью навигатора мер поддержки"},scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{attrs:{src:s("4c15"),alt:"слот изображения"}})]},proxy:!0}])})],1)}),c=[],r={name:"Slider",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},o=r,l=(s("6afe"),s("2877")),u=Object(l["a"])(o,a,c,!1,null,null,null),d=u.exports,p=s("e6b0"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"feature-section row justify-content-end"},[s("div",{staticClass:"col-lg-9"},[s("h4",{staticClass:"features-title"},[t._v("Я только учусь, но уже могу предложить:")]),t._l(t.rows,(function(e){return s("div",{key:e,staticClass:"row"},t._l(t.partOfArray(t.features,(e-1)*t.columns+1,t.columns),(function(e){return s("div",{key:e.id,staticClass:"feature col"},[s("b-button",{attrs:{variant:"outline-light",block:"",href:"#"},on:{click:function(s){return t.$emit("quick-question",e.title)}}},[s("span",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("br"),t._v(" "+t._s(e.title)+" ")])],1)})),0)}))],2)])])},f=[],v={name:"AnswersBlock2",data:function(){return{columns:6,features:[{id:1,title:"Гранты",icon:"workspace_premium"},{id:2,title:"Субсидии",icon:"volunteer_activism"},{id:3,title:"Наука",icon:"science"},{id:4,title:"Инновации",icon:"lightbulb"}]}},computed:{rows:function(){return Math.ceil(this.features.length/this.columns)}},methods:{partOfArray:function(t,e,s){return t.filter((function(t){return t.id>=e&&t.id<e+s}))}}},h=v,m=(s("2fa8"),Object(l["a"])(h,g,f,!1,null,"6af259fe",null)),_=m.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"advantages__wrapper container"},[i("h4",{staticClass:"advantages__header text-center py-2"},[t._v("Наши преимущества")]),i("div",{staticClass:"row row-cols-2 row-cols-sm-2 row-cols-lg-4"},[i("div",{staticClass:"col"},[i("div",{staticClass:"h-100"},[i("img",{staticClass:"advantage__image",attrs:{src:s("2ae4"),alt:"..."}}),i("div",{staticClass:"advantage__comment text-center"},[i("h5",{staticClass:"card-title"},[t._v("Контракты")]),i("p",{staticClass:"card-text"},[t._v(" Заключайте контракты с другими участниками прямо в личном кабинете ")])])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"h-100"},[i("img",{staticClass:"advantage__image",attrs:{src:s("90432"),alt:"..."}}),i("div",{staticClass:"advantage__comment text-center"},[i("h5",{staticClass:"card-title"},[t._v("Партнеры")]),i("p",{staticClass:"card-text"},[t._v(" Находите партнеров из других отраслей ")])])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"h-100"},[i("img",{staticClass:"advantage__image",attrs:{src:s("a329"),alt:"..."}}),i("div",{staticClass:"advantage__comment text-center"},[i("h5",{staticClass:"card-title"},[t._v("Поддержка")]),i("p",{staticClass:"card-text"},[t._v(" Получайте поддержку и консультации с консьерж-сервисом ")])])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"h-100"},[i("img",{staticClass:"advantage__image",attrs:{src:s("3005"),alt:"..."}}),i("div",{staticClass:"advantage__comment text-center"},[i("h5",{staticClass:"card-title"},[t._v("Поиск")]),i("p",{staticClass:"card-text"},[t._v("Открывайте новые возможности с помощью поиска на основе искусственного интеллекта")])])])])])])}],C={name:"Advantages",data:function(){return{imgurl:"../assets/advantages/adv1.jpg"}}},k=C,y=(s("c369"),Object(l["a"])(k,w,b,!1,null,"e04cf2a0",null)),x=y.exports,P=s("ef99"),A={name:"Home",components:{Slider:d,Chat:p["a"],AnswersBlock2:_,Advantages:x,NewsPreviewList:P["a"]},data:function(){return{url:"https://www.d-skills.ru/40_subsidy_bootstrapvue/news2.php",newsCardsList:[],page:1,pageSize:3,inputText:"",replics:[{id:1,author:"bot",content:"Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки."}],faq:[{id:1,keywords:["covid","ковид","корона"],answers:[{content:"Запись на вакцинацию",link:"https://google.com"},{content:"Сертификат вакцинированного",link:"https://ya.ru"},{content:"Мои QR-коды",link:"https://ya.ru"}]},{id:2,keywords:["спорт"],answers:[{content:"Присвоение спортивных разрядов",link:"https://google.com"},{content:"Присвоение квалификационных категорий спортивных судей",link:"https://google.com"},{content:"Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации",link:"https://google.com"}]},{id:3,keywords:["грант","гранты"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"},{content:"Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных сферах экономики",link:"./subsidyinfo3"}]},{id:4,keywords:["субсидия","субсидии"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:5,keywords:["инновация","инновации"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"},{content:"Гранты в форме субсидии на развитие инновационного проекта",link:"./subsidyinfo2"}]},{id:6,keywords:["наука"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"}]},{id:7,keywords:["20000000","20000000 руб","20 000 000","20 000 000 руб"],answers:[{content:"Гранты в форме субсидий в сфере научной и инновационной деятельности",link:"./subsidyinfo1"}]}],chatIsActive:!1,flyingRobotUp:!1,flyingRobotDown:!1}},computed:{replicsList:function(){return this.chatIsActive?this.replics:this.replics.filter((function(t){return 1===t.id}))}},methods:{focusInput:function(){this.chatIsActive=!0,setTimeout(this.fly,300)},fly:function(){this.flyingRobotUp=!1,this.flyingRobotDown=!0},dontfly:function(){this.flyingRobotUp=!1,this.chatIsActive=!this.chatIsActive},closeChat:function(){this.inputText="",this.chatIsActive&&(this.flyingRobotUp=!0,this.flyingRobotDown=!1,setTimeout(this.dontfly,1e3))},enterQuestion:function(t){this.inputText=t,this.chatIsActive=!0,setTimeout(this.fly,1e3)},addQuest:function(t){var e,s,i={id:this.replics.length+1,author:"user",content:t};if(this.replics.push(i),this.faq.forEach((function(e){e.keywords.forEach((function(i){t.trim().toLowerCase()===i&&(s=e.answers)}))})),s){var n=s.map((function(t){var e={link:t.link,content:t.content};return e}));e={author:"bot",content:"",findedAnswers:n}}else e={author:"bot",content:"Извините, я ничего не нашёл."};e.id=this.replics.length+1,this.replics.push(e)},chatActive:function(){return this.replics.length>1&&this.chatIsActive},getNews:function(t,e){var s=this,i=new XMLHttpRequest,n=this.url+"?page="+t+"&pageSize="+e;i.open("GET",n),i.responseType="json",i.onload=function(){console.log("Cписок новостей"),console.log(i.response),s.newsCardsList=i.response},i.send()}},mounted:function(){this.getNews(this.page,this.pageSize)}},I=A,S=(s("a071"),Object(l["a"])(I,i,n,!1,null,"9fce7d94",null));e["default"]=S.exports},c369:function(t,e,s){"use strict";s("790e")},c5d9:function(t,e,s){},c8d2:function(t,e,s){var i=s("5e77").PROPER,n=s("d039"),a=s("5899"),c="​᠎";t.exports=function(t){return n((function(){return!!a[t]()||c[t]()!==c||i&&a[t].name!==t}))}},cbb7:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("PaginationItemsPerPage",{attrs:{"items-per-page":t.itemsPerPage,"page-size":t.pageSize},on:{"change-page-size":function(e){return t.changePageSize(e)}}}),s("div",{staticClass:"block"},[t._v(" "+t._s(t.pageSize*(t.page-1)+1)+" - "+t._s(t.page===t.pages?t.itemsTotal:t.pageSize*t.page)+" из "+t._s(t.itemsTotal)+" ")]),t.itemsTotal>t.pageSize?s("PaginationPageSelector",{attrs:{pages:t.pages,"active-page":t.page},on:{"change-page":function(e){return t.$emit("change-page",e)}}}):t._e()],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination-items-per-page d-none d-lg-block"},t._l(t.itemsPerPage,(function(e){return s("button",{key:e,staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return t.$emit("change-page-size",e)}}},[t._v(" "+t._s(e)+" ")])})),0)},c=[],r={name:"PaginationItemsPerPage",props:["itemsPerPage","pageSize"]},o=r,l=s("2877"),u=Object(l["a"])(o,a,c,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"measure__pagination"},[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination justify-content-center"},[t.activePage>1?s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Предыдущая"},on:{click:function(e){return e.preventDefault(),t.$emit("change-page",--t.activePage)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t.activePage>2?s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("change-page",1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("1")])])]):t._e(),t.activePage>3?[t.activePage>4?s("li",{staticClass:"page-item disabled"},[t._m(0)]):s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("change-page",2)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("2")])])])]:t._e(),t._l(t.pages,(function(e){return[e>=t.activePage-1&&e<=t.activePage+1?s("li",{key:e,staticClass:"page-item",class:{active:e===t.activePage}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.$emit("change-page",e)}}},[t._v(t._s(e))])]):t._e()]})),t.activePage<t.pages-2?[t.activePage<t.pages-3?s("li",{staticClass:"page-item disabled"},[t._m(1)]):s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("change-page",t.pages-1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v(t._s(t.pages-1))])])])]:t._e(),t.activePage<t.pages-1?s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("change-page",t.pages)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v(t._s(t.pages))])])]):t._e(),t.activePage<t.pages?s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Следующая"},on:{click:function(e){return e.preventDefault(),t.$emit("change-page",++t.activePage)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])]):t._e()],2)])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("…")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"page-link",attrs:{href:"#"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("…")])])}],f={name:"PaginationPageSelector",props:["pages","activePage"]},v=f,h=Object(l["a"])(v,p,g,!1,null,null,null),m=h.exports,_={name:"Pagination",components:{PaginationItemsPerPage:d,PaginationPageSelector:m},props:["itemsTotal","page","pageSize","itemsPerPage"],methods:{changePageSize:function(t){var e=this.countFirstItemNumberOnPage(this.pageSize,this.page),s=this.countNewPage(e,t),i=[];i.push(s),i.push(t),this.$emit("change-page-size",i)},countFirstItemNumberOnPage:function(t,e){return t*(e-1)+1},countNewPage:function(t,e){return Math.ceil(t/e)}},computed:{pages:function(){return Math.ceil(this.itemsTotal/this.pageSize)}}},w=_,b=Object(l["a"])(w,i,n,!1,null,null,null);e["a"]=b.exports},cde4:function(t,e,s){},d003:function(t,e,s){},d0a1:function(t,e,s){},d81d:function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").map,a=s("1dde"),c=a("map");i({target:"Array",proto:!0,forced:!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e6b0:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat"},[s("ChatHeader",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],on:{"close-chat":function(e){return t.$emit("close-chat")}}}),s("div",{staticClass:"container"},[s("ChatBoard",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,messages:t.messages}}),s("SearchForm",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,quest:t.quest},on:{"add-quest":function(e){return t.$emit("add-quest",e)},"focus-input":function(e){return t.$emit("focus-input")}}})],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shadow"},[i("div",{staticClass:"container"},[i("div",{staticClass:"chat-header"},[i("img",{staticClass:"chatHeaderAvatar rounded-circle d-lg-none",attrs:{src:s("0923"),alt:""}}),i("div",{staticClass:"chatHeaderTitle d-lg-none"},[t._v("Робот Василий")]),i("b-button",{staticClass:"closeBtn rounded-circle",on:{click:function(e){return t.$emit("close-chat")}}},[i("span",{staticClass:"material-icons"},[t._v("close")])])],1)])])},c=[],r={name:"ChatHeader"},o=r,l=(s("0ce3"),s("2877")),u=Object(l["a"])(o,a,c,!1,null,"85d1a8ca",null),d=u.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chat-section row"},[i("div",{staticClass:"col-3 d-none d-lg-block"},[i("img",{staticClass:"position-absolute",class:{active:t.isActive},attrs:{id:"botWaiting",src:s("a67c"),alt:""}})]),i("div",{class:"chatField col-lg-9 "+t.chatFieldClass()},t._l(t.messages,(function(e){return i("b-alert",{key:e.id,attrs:{variant:t.getAuthor(e.author),show:""}},[e.findedAnswers?i("div",[e.findedAnswers[0].link?i("div",[t._v("Вот, что я нашел:")]):t._e(),t._l(e.findedAnswers,(function(e){return i("div",{key:e.content},[e.link?i("AnswerLink",{attrs:{link:e.link,text:e.content}}):t._e(),e.link?t._e():i("AnswerText",{attrs:{text:e.content}})],1)}))],2):t._e(),t._v(" "+t._s(e.content)+" ")])})),1)])},g=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"answer-link btn btn-primary",attrs:{to:this.link}},[t._v(t._s(this.text))])},v=[],h={name:"AnswerLink",props:["link","text"]},m=h,_=(s("5fd8"),Object(l["a"])(m,f,v,!1,null,"3edc4efc",null)),w=_.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"answer-text"},[t._v(t._s(this.text))])},C=[],k={name:"AnswerLink",props:["text"]},y=k,x=(s("f0b5"),Object(l["a"])(y,b,C,!1,null,"67cb92b6",null)),P=x.exports,A={name:"ChatBoard",components:{AnswerLink:w,AnswerText:P},data:function(){return{linked:"https://ya.ru",texted:"Грант для ученых"}},props:["isActive","isFlyingUp","isFlyingDown","messages"],computed:{},methods:{getAuthor:function(t){return"bot"===t?"primary":"danger"},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}}},I=A,S=(s("8602"),Object(l["a"])(I,p,g,!1,null,"7fb5d71c",null)),$=S.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-section row justify-content-end"},[s("div",{class:"searchBlock col-lg-9 "+t.chatFieldClass()},[s("b-form",{class:t.textInField,on:{submit:t.onSubmit}},[s("b-form-group",{attrs:{id:"inputGroupQuestion",label:"","label-for":"inputGroupQuestion"}},[s("b-form-input",{class:t.roundedPill,attrs:{id:"inputQuestion",type:"text",placeholder:"Просто напишите то, что ищете...",autocomplete:"off",required:""},on:{focus:function(e){return t.$emit("focus-input")}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),s("b-button",{staticClass:"rounded-circle",attrs:{type:"submit",tabindex:"-1"}},[s("span",{staticClass:"material-icons"},[t._v("send")])])],1)],1)])},j=[],E=(s("498a"),{name:"SearchForm",props:["quest","isActive","isFlyingUp","isFlyingDown"],data:function(){return{inputValue:"",roundedPill:"rounded-pill",textInField:""}},computed:{},methods:{onSubmit:function(t){t.preventDefault(),this.inputValue.trim()&&(this.$emit("add-quest",this.inputValue),this.inputValue="")},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}},watch:{inputValue:function(){this.inputValue.trim()?(console.log("Работает"),this.textInField="isActive"):(console.log("В поле пусто"),this.textInField="")},quest:function(){this.inputValue=this.quest}}}),D=E,L=(s("efb7"),Object(l["a"])(D,F,j,!1,null,null,null)),z=L.exports,q={name:"Chat",components:{ChatHeader:d,ChatBoard:$,SearchForm:z},props:["isActive","isFlyingUp","isFlyingDown","messages","quest"],methods:{},data:function(){return{}}},O=q,T=Object(l["a"])(O,i,n,!1,null,"7e2aaa76",null);e["a"]=T.exports},ef99:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3"},[t._l(t.newsList.content,(function(e){return s("div",{key:e.id,class:e.importance>0&&!t.everythingLittle?"news-important col col-sm-12 col-lg-8":"col"},[s("NewsPreviewListItem",{attrs:{"news-item":e}})],1)})),s("div",{staticClass:"col-sm-12 col-lg-12 mb-0"},[t.isPagination&&t.itemsTotal>t.pageSize?s("Pagination",{attrs:{"items-total":t.itemsTotal,page:t.page,"page-size":t.pageSize,"items-per-page":t.itemsPerPage},on:{"change-page-size":function(e){return t.$emit("change-page-size",e)},"change-page":function(e){return t.$emit("change-page",e)}}}):t._e()],1)],2)])},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-text-block"},[s("router-link",{staticClass:"news-link stretched-link",attrs:{to:t.newsItem.link}},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.newsItem.title))])]),s("p",{staticClass:"card-text"},[t._v(t._s(t.newsItem.text))])],1),s("div",{staticClass:"card__image_full-width"},[s("img",{staticClass:"card__image",attrs:{alt:"Изображение анонса новости",src:t.newsItem.image_path+t.newsItem.image_file_name}})]),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"news-source"},[s("img",{staticClass:"news-source__logo",attrs:{alt:"Логотип новостного источника",src:t.newsItem.source_logo_path+t.newsItem.source_logo_file_name}}),s("a",{staticClass:"news-source__link",attrs:{href:t.newsItem.source_link}},[t._v(t._s(t.newsItem.source_title))])]),s("span",[t._v(t._s(t.newsItem.publication_date))])])])])},c=[],r={name:"NewsPreviewListItem",props:["newsItem"]},o=r,l=(s("fc22"),s("2877")),u=Object(l["a"])(o,a,c,!1,null,"24fc4892",null),d=u.exports,p=s("cbb7"),g={name:"NewsPreviewList",components:{NewsPreviewListItem:d,Pagination:p["a"]},props:["newsList","itemsTotal","page","pageSize","itemsPerPage","everythingLittle","isPagination"]},f=g,v=(s("f829"),Object(l["a"])(f,i,n,!1,null,"f4fce41e",null));e["a"]=v.exports},efb7:function(t,e,s){"use strict";s("d003")},f0b5:function(t,e,s){"use strict";s("7ab7")},f829:function(t,e,s){"use strict";s("a14b")},fc22:function(t,e,s){"use strict";s("cde4")}}]);
//# sourceMappingURL=chunk-2011258c.d5f6493b.js.map