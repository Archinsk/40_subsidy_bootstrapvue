(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-749780ce"],{"0f2c":function(e,t,s){"use strict";s("44ef")},"44ef":function(e,t,s){},a2f9:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"news-page mb-2"},[s("div",{staticClass:"news__wrapper container"},[s("h4",{staticClass:"news__header text-center py-2"},[e._v("Новости")]),s("NewsPreviewList",{attrs:{count:"10",everythingLittle:!1,"target-url":e.newsTargetUrl,pagination:!0}})],1)])},n=[],i=s("ef99"),o={name:"News",components:{NewsPreviewList:i["a"]},data:function(){return{newsTargetUrl:"https://www.d-skills.ru/40_subsidy_bootstrapvue/news.php",xhrResponse:[],page:1,pageSize:10,newsItem:{id:"1",title:"ArchGlass 2021 - Международный форум индустрии архитектурного стекла",text:"Союз архитекторов России и Союз московских архитекторов приглашают на 3-й международный форум индустрии архитектурного стекла ArchGlass 2021.",image_path:"images/news/",image_file_name:"news1.jpg",link:"/newsinfo",importance:"1",publication_date:"10:15",source_logo_path:"images/news_source_logo/",source_logo_file_name:"rialogo.jpg",source_title:"РИА Новости",source_link:"https://ria.ru",content:"value-13"}}},methods:{}},r=o,c=s("2877"),l=Object(c["a"])(r,a,n,!1,null,"5a80cc42",null);t["default"]=l.exports},b15f:function(e,t,s){"use strict";s("fae3")},b64b:function(e,t,s){var a=s("23e7"),n=s("7b0b"),i=s("df75"),o=s("d039"),r=o((function(){i(1)}));a({target:"Object",stat:!0,forced:r},{keys:function(e){return i(n(e))}})},cbb7:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-between"},[s("PaginationItemsPerPage",{attrs:{"items-per-page":e.itemsPerPage,"page-size":e.pageSize},on:{changepagesize1:function(t){return e.$emit("changepagesize2",t)}}}),s("div",{staticClass:"block"},[e._v("1-"+e._s(e.pageSize)+" из "+e._s(e.itemsTotal))]),e.itemsTotal?s("PaginationPageSelector",{attrs:{"items-total":e.itemsTotal,"page-size":e.pageSize,page:e.pageSize},on:{"change-page":function(t){return e.$emit("change-page",t)}}}):e._e()],1)},n=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pagination-items-per-page"},e._l(e.itemsPerPage,(function(t){return s("button",{key:t,staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return e.$emit("changepagesize1",t)}}},[e._v(" "+e._s(t)+" ")])})),0)},o=[],r={name:"PaginationItemsPerPage",props:["itemsPerPage","pageSize"]},c=r,l=s("2877"),u=Object(l["a"])(c,i,o,!1,null,null,null),g=u.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"measure__pagination"},[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination justify-content-center"},[e._m(0),e._l(e.pages,(function(t){return s("li",{key:t,staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return e.$emit("change-page",t)}}},[e._v(e._s(t))])])})),e._m(1)],2)])])},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])])}],w={name:"PaginationPageSelector",props:["itemsTotal","page","pageSize"],computed:{pages:function(){return Math.ceil(this.itemsTotal/this.pageSize)}}},_=w,f=Object(l["a"])(_,p,m,!1,null,null,null),h=f.exports,d={name:"Pagination",components:{PaginationItemsPerPage:g,PaginationPageSelector:h},props:["itemsTotal","page","pageSize","itemsPerPage"]},v=d,b=Object(l["a"])(v,a,n,!1,null,null,null);t["a"]=b.exports},ef99:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3"},[e._l(e.newsPack,(function(t){return s("div",{key:t.id,class:t.importance>0&&!e.everythingLittle?"news-important col col-sm-12 col-lg-8":"col"},[s("NewsPreviewListItem",{attrs:{"news-link":t.link,"news-title":t.title,"news-text":t.text,"news-image-file":t.image_path+t.image_file_name,"news-source-logo-file":t.source_logo_path+t.source_logo_file_name,"news-source-link":t.source_link,"news-source-name":t.source_title,"news-publication-date":t.publication_date,"news-importance":t.importance}})],1)})),e.pagination?s("div",{staticClass:"col-sm-12 col-lg-12 mb-0"},[s("Pagination",{staticClass:"d-flex justify-content-between align-items-center",attrs:{"items-total":e.totalItems}})],1):e._e()],2)])},n=[],i=(s("b64b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-text-block"},[s("router-link",{staticClass:"news-link stretched-link",attrs:{to:e.newsLink}},[s("h5",{staticClass:"card-title"},[e._v(e._s(e.newsTitle))])]),s("p",{staticClass:"card-text"},[e._v(e._s(e.newsText))])],1),s("div",{staticClass:"card__image_full-width"},[s("img",{staticClass:"card__image",attrs:{alt:"Изображение анонса новости",src:e.newsImageFile}})]),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"news-source"},[s("img",{staticClass:"news-source__logo",attrs:{alt:"Логотип новостного источника",src:e.newsSourceLogoFile}}),s("a",{staticClass:"news-source__link",attrs:{href:e.newsSourceLink}},[e._v(e._s(e.newsSourceName))])]),s("span",[e._v(e._s(e.newsPublicationDate))])])])])}),o=[],r={name:"NewsPreviewListItem",props:["newsLink","newsTitle","newsText","newsImageFile","newsSourceLogoFile","newsSourceLink","newsSourceName","newsPublicationDate","newsImportance"]},c=r,l=(s("0f2c"),s("2877")),u=Object(l["a"])(c,i,o,!1,null,"c3f6f31a",null),g=u.exports,p=s("cbb7"),m={name:"NewsPreviewList",components:{NewsPreviewListItem:g,Pagination:p["a"]},props:["count","everythingLittle","targetUrl","pagination"],data:function(){return{page:1,pageSize:10,newsPack:[],totalItems:0}},computed:{newsItemTotal:function(){return this.count?this.count:this.pageSize}},methods:{getNews:function(){var e=this,t=new XMLHttpRequest,s=this.targetUrl+"?page="+this.page+"&pageSize="+this.newsItemTotal;t.open("GET",s),t.responseType="json",t.onload=function(){console.log("Запрашиваю список новостей"),console.log(t.response),e.newsPack=t.response},t.send()},getNewsCount:function(){var e=this,t=new XMLHttpRequest,s=this.targetUrl+"?req=count";t.open("GET",s),t.responseType="json",t.onload=function(){console.log("Запрашиваю общее количество"),console.log(t.response),e.totalItems=Object.keys(t.response).length},t.send()}},mounted:function(){this.getNewsCount(),this.getNews()}},w=m,_=(s("b15f"),Object(l["a"])(w,a,n,!1,null,"b2f87bc4",null));t["a"]=_.exports},fae3:function(e,t,s){}}]);
//# sourceMappingURL=chunk-749780ce.80f956de.js.map