(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03db84a9"],{"0923":function(t,e,s){t.exports=s.p+"img/robot_avatar.715b5b87.png"},"0ce3":function(t,e,s){"use strict";s("5d39")},"159b":function(t,e,s){var i=s("da84"),a=s("fdbc"),n=s("785a"),r=s("17c2"),c=s("9112"),o=function(t){if(t&&t.forEach!==r)try{c(t,"forEach",r)}catch(e){t.forEach=r}};for(var u in a)a[u]&&o(i[u]&&i[u].prototype);o(n)},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,a=s("a640"),n=a("forEach");t.exports=n?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"498a":function(t,e,s){"use strict";var i=s("23e7"),a=s("58a8").trim,n=s("c8d2");i({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},"4ffd":function(t,e,s){"use strict";s("f3d1")},5322:function(t,e,s){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("e330"),a=s("1d80"),n=s("577e"),r=s("5899"),c=i("".replace),o="["+r+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var s=n(a(e));return 1&t&&(s=c(s,u,"")),2&t&&(s=c(s,l,"")),s}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5d39":function(t,e,s){},"5fd8":function(t,e,s){"use strict";s("c5d9")},7334:function(t,e,s){"use strict";s("5322")},"7ab7":function(t,e,s){},"857a":function(t,e,s){var i=s("e330"),a=s("1d80"),n=s("577e"),r=/"/g,c=i("".replace);t.exports=function(t,e,s,i){var o=n(a(t)),u="<"+e;return""!==s&&(u+=" "+s+'="'+c(n(i),r,"&quot;")+'"'),u+">"+o+"</"+e+">"}},9911:function(t,e,s){"use strict";var i=s("23e7"),a=s("857a"),n=s("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(t){return a(this,"a","href",t)}})},a5f3:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row row-cols-1"},t._l(t.cuttedMeasuresPack,(function(t){return s("div",{key:t.id,staticClass:"col"},[s("MeasureCard",{attrs:{measure:t}})],1)})),0)},a=[],n=(s("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card measure__card"},[i("div",{staticClass:"card-body row"},[i("router-link",{staticClass:"measure-link col-12 col-md-9 stretched-link",attrs:{to:t.measure.measure_link}},[i("h5",{staticClass:"card-title"},[i("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.measure.subsidy_number))]),t._v(" "+t._s(t.measure.title)+" ")])]),i("div",{staticClass:"card-text col-12 col-md-3"},[t._v(" Приём заявок"),i("br"),i("b",[t._v("с "+t._s(t.measure.open_date)+" по "+t._s(t.measure.close_date))])])],1),i("hr"),i("div",{staticClass:"card-footer bg-transparent measure__card__footer row"},[i("div",{staticClass:"measure__owner__logo col-md-6 col-lg-5"},[i("img",{staticClass:"measure__owner__logo__image",attrs:{src:"images/initiators_logo/"+t.measure.initiator_logo,alt:"..."}}),i("div",{staticClass:"measure__owner__logo__text"},[i("div",{staticClass:"logo__header__comment"},[t._v("Инициатор")]),i("div",{staticClass:"logo__name"},[t._v(" "+t._s(t.measure.initiator_title)+" ")])])]),i("div",{staticClass:"measure__details col-md-6 col-lg-3"},[i("div",{staticClass:"measure__size"},[i("div",{staticClass:"measure__size__header"},[t._v(t._s("нф"===t.measure.measure_size?"Нефинансовая мера поддержки":"Размер поддержки")+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"нф"!==t.measure.measure_size,expression:"measure.measure_size!=='нф'"}],staticClass:"measure__size__value"},[t._v("до "+t._s(t.measure.measure_size)+" рублей ")])])]),i("div",{staticClass:"measure__buttons col"},[i("img",{directives:[{name:"show",rawName:"v-show",value:"1"===t.measure.electronic_form,expression:"measure.electronic_form === '1'"}],staticClass:"measure__web__accessibility",attrs:{src:s("d61c"),title:"По данной мере поддержки есть возможность электронной подачи",alt:""}}),i("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#"}},[t._v("Получить поддержку")])])])])}),r=[],c={name:"MeasureCard",props:["measure"]},o=c,u=(s("7334"),s("2877")),l=Object(u["a"])(o,n,r,!1,null,"d60c61a2",null),d=l.exports,f={name:"MeasuresCardsList",components:{MeasureCard:d},props:["measuresPack","count"],computed:{cuttedMeasuresPack:function(){var t=this;if(this.count&&this.count<this.measuresPack.length){var e=this.measuresPack.filter((function(e,s){return s<t.count}));return e}return this.measuresPack}}},m=f,v=(s("a82d"),Object(u["a"])(m,i,a,!1,null,"7dd54fa1",null));e["a"]=v.exports},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},a67c:function(t,e,s){t.exports=s.p+"img/robot.1049893b.png"},a82d:function(t,e,s){"use strict";s("f236")},af03:function(t,e,s){var i=s("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b9ba:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.fd,(function(t){return s("FilterCheckboxesGroup",{key:t.title,attrs:{filterData:t}})})),1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-form-group",{attrs:{label:t.filterData.title},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[s("b-form-checkbox-group",{attrs:{options:t.filterData.options,"aria-describedby":i,name:"flavour-2a",stacked:""},model:{value:t.filterData.selected,callback:function(e){t.$set(t.filterData,"selected",e)},expression:"filterData.selected"}})]}}])})],1)},r=[],c={name:"FilterCheckboxesGroup",props:["filterData"],data:function(){return{selected:[],options:[{text:"Лесоводство и лесозаготовки",value:"1"},{text:"Добыча угля",value:"2"},{text:"Производство одежды",value:"3"},{text:"Строительство зданий",value:"4"},{text:"Научные исследования и разработки",value:"5"},{text:"Деятельность общественных организаций",value:"6"},{text:"Производство мебели",value:"7"},{text:"Деятельность профессиональная научная и техническая прочая",value:"8"},{text:"Деятельность в области спорта, отдыха и развлечений",value:"9"},{text:"10 – тип поддержки, который нам в итоге нужно найти",value:"10"}]}}},o=c,u=s("2877"),l=Object(u["a"])(o,n,r,!1,null,"5fdc2ed3",null),d=l.exports,f={name:"FiltersList",props:["fd"],components:{FilterCheckboxesGroup:d}},m=f,v=Object(u["a"])(m,i,a,!1,null,"17ba884c",null);e["a"]=v.exports},c5d9:function(t,e,s){},c8d2:function(t,e,s){var i=s("5e77").PROPER,a=s("d039"),n=s("5899"),r="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||r[t]()!==r||i&&n[t].name!==t}))}},d003:function(t,e,s){},d61c:function(t,e,s){t.exports=s.p+"img/electronic.60f02341.png"},d81d:function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").map,n=s("1dde"),r=n("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e6b0:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat"},[s("ChatHeader",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],on:{"close-chat":function(e){return t.$emit("close-chat")}}}),s("div",{staticClass:"container"},[s("ChatBoard",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,messages:t.messages}}),s("SearchForm",{attrs:{isActive:t.isActive,isFlyingUp:t.isFlyingUp,isFlyingDown:t.isFlyingDown,quest:t.quest},on:{"add-quest":function(e){return t.$emit("add-quest",e)},"focus-input":function(e){return t.$emit("focus-input")}}})],1)],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shadow"},[i("div",{staticClass:"container"},[i("div",{staticClass:"chat-header"},[i("img",{staticClass:"chatHeaderAvatar rounded-circle d-lg-none",attrs:{src:s("0923"),alt:""}}),i("div",{staticClass:"chatHeaderTitle d-lg-none"},[t._v("Робот Василий")]),i("b-button",{staticClass:"closeBtn rounded-circle",on:{click:function(e){return t.$emit("close-chat")}}},[i("span",{staticClass:"material-icons"},[t._v("close")])])],1)])])},r=[],c={name:"ChatHeader"},o=c,u=(s("0ce3"),s("2877")),l=Object(u["a"])(o,n,r,!1,null,"85d1a8ca",null),d=l.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chat-section row"},[i("div",{staticClass:"col-3 d-none d-lg-block"},[i("img",{staticClass:"position-absolute",class:{active:t.isActive},attrs:{id:"botWaiting",src:s("a67c"),alt:""}})]),i("div",{class:"chatField col-lg-9 "+t.chatFieldClass()},t._l(t.messages,(function(e){return i("b-alert",{key:e.id,attrs:{variant:t.getAuthor(e.author),show:""}},[e.findedAnswers?i("div",[e.findedAnswers[0].link?i("div",[t._v("Вот, что я нашел:")]):t._e(),t._l(e.findedAnswers,(function(e){return i("div",{key:e.content},[e.link?i("AnswerLink",{attrs:{link:e.link,text:e.content}}):t._e(),e.link?t._e():i("AnswerText",{attrs:{text:e.content}})],1)}))],2):t._e(),t._v(" "+t._s(e.content)+" ")])})),1)])},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"answer-link btn btn-primary",attrs:{to:this.link}},[t._v(t._s(this.text))])},p=[],_={name:"AnswerLink",props:["link","text"]},h=_,b=(s("5fd8"),Object(u["a"])(h,v,p,!1,null,"3edc4efc",null)),g=b.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"answer-text"},[t._v(t._s(this.text))])},C=[],w={name:"AnswerLink",props:["text"]},k=w,y=(s("f0b5"),Object(u["a"])(k,x,C,!1,null,"67cb92b6",null)),F=y.exports,A={name:"ChatBoard",components:{AnswerLink:g,AnswerText:F},data:function(){return{linked:"https://ya.ru",texted:"Грант для ученых"}},props:["isActive","isFlyingUp","isFlyingDown","messages"],computed:{},methods:{getAuthor:function(t){return"bot"===t?"primary":"danger"},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}}},D=A,E=(s("4ffd"),Object(u["a"])(D,f,m,!1,null,"f52ffe9c",null)),$=E.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-section row justify-content-end"},[s("div",{class:"searchBlock col-lg-9 "+t.chatFieldClass()},[s("b-form",{class:t.textInField,on:{submit:t.onSubmit}},[s("b-form-group",{attrs:{id:"inputGroupQuestion",label:"","label-for":"inputGroupQuestion"}},[s("b-form-input",{class:t.roundedPill,attrs:{id:"inputQuestion",type:"text",placeholder:"Просто напишите то, что ищете...",autocomplete:"off",required:""},on:{focus:function(e){return t.$emit("focus-input")}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),s("b-button",{staticClass:"rounded-circle",attrs:{type:"submit",tabindex:"-1"}},[s("span",{staticClass:"material-icons"},[t._v("send")])])],1)],1)])},q=[],O=(s("498a"),{name:"SearchForm",props:["quest","isActive","isFlyingUp","isFlyingDown"],data:function(){return{inputValue:"",roundedPill:"rounded-pill",textInField:""}},computed:{},methods:{onSubmit:function(t){t.preventDefault(),this.inputValue.trim()&&(this.$emit("add-quest",this.inputValue),this.inputValue="")},chatFieldClass:function(){var t=this.isActive,e=this.isFlyingUp,s=this.isFlyingDown;return t?e||s?e?"active flyingUp":s?"active flyingDown":void 0:"active":""}},watch:{inputValue:function(){this.inputValue.trim()?(console.log("Работает"),this.textInField="isActive"):(console.log("В поле пусто"),this.textInField="")},quest:function(){this.inputValue=this.quest}}}),U=O,P=(s("efb7"),Object(u["a"])(U,j,q,!1,null,null,null)),V=P.exports,S={name:"Chat",components:{ChatHeader:d,ChatBoard:$,SearchForm:V},props:["isActive","isFlyingUp","isFlyingDown","messages","quest"],methods:{},data:function(){return{}}},z=S,L=Object(u["a"])(z,i,a,!1,null,"d295267e",null);e["a"]=L.exports},efb7:function(t,e,s){"use strict";s("d003")},f0b5:function(t,e,s){"use strict";s("7ab7")},f236:function(t,e,s){},f3d1:function(t,e,s){}}]);
//# sourceMappingURL=chunk-03db84a9.98af3b47.js.map