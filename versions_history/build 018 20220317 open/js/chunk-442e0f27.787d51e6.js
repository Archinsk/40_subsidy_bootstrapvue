(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-442e0f27"],{a2f9:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"news mb-2"},[a("div",{staticClass:"container"},[a("h4",{staticClass:"title-primary text-center"},[e._v(" Новости "),a("span",{class:"badge badge-"+e.theme},[e._v(e._s(e.itemsTotal))])]),a("NewsPreviewList",{attrs:{"news-list":e.newsCardsList,"items-total":e.itemsTotal,page:e.page,"page-size":e.pageSize,"items-per-page":e.itemsPerPage,everythingLittle:!1},on:{"change-page-size":function(t){return e.changePageSize(t)},"change-page":e.changePage}})],1)])},i=[],n=a("ef99"),r={name:"News",components:{NewsPreviewList:n["a"]},props:["theme"],data:function(){return{url:"https://www.d-skills.ru/40_subsidy_bootstrapvue/news2.php",newsCardsList:[],xhrResponse:[],itemsTotal:0,page:1,pageSize:10,itemsPerPage:[10,25,50]}},methods:{getNews:function(e,t){var a=this,s=new XMLHttpRequest,i=this.url+"?page="+e+"&pageSize="+t;s.open("GET",i),s.responseType="json",s.onload=function(){console.log("Cписок новостей"),console.log(s.response),a.newsCardsList=s.response,a.itemsTotal=s.response.totalElements},s.send()},changePageSize:function(e){this.page=e[0],this.pageSize=e[1],this.getNews(this.page,this.pageSize)},changePage:function(e){console.log(e),this.page=e,this.getNews(this.page,this.pageSize)}},mounted:function(){this.getNews(this.page,this.pageSize)}},c=r,l=a("2877"),g=Object(l["a"])(c,s,i,!1,null,null,null);t["default"]=g.exports},cbb7:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"paginator d-flex justify-content-between align-items-center"},[a("PaginationItemsPerPage",{attrs:{"items-per-page":e.itemsPerPage,"page-size":e.pageSize,theme:e.theme},on:{"change-page-size":function(t){return e.changePageSize(t)}}}),a("div",{staticClass:"paginator__items-of-total"},[e._v(" "+e._s(e.pageSize*(e.page-1)+1)+" - "+e._s(e.page===e.pages?e.itemsTotal:e.pageSize*e.page)+" из "+e._s(e.itemsTotal)+" ")]),e.itemsTotal>e.pageSize?a("PaginationPageSelector",{attrs:{pages:e.pages,"active-page":e.page,theme:e.theme},on:{"change-page":function(t){return e.$emit("change-page",t)}}}):e._e()],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"paginator__items-per-page d-none d-lg-block"},e._l(e.itemsPerPage,(function(t){return a("button",{key:t,class:"page-size btn btn-"+e.theme,attrs:{type:"button"},on:{click:function(a){return e.$emit("change-page-size",t)}}},[e._v(" "+e._s(t)+" ")])})),0)},r=[],c={name:"PaginationItemsPerPage",props:["itemsPerPage","pageSize","theme"]},l=c,g=a("2877"),o=Object(g["a"])(l,n,r,!1,null,null,null),p=o.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"paginator__page-selector"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[e.activePage>1?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Предыдущая"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",--e.activePage)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]):e._e(),e.activePage>2?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("1")])])]):e._e(),e.activePage>3?[e.activePage>4?a("li",{staticClass:"page-item disabled"},[e._m(0)]):a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",2)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("2")])])])]:e._e(),e._l(e.pages,(function(t){return[t>=e.activePage-1&&t<=e.activePage+1?a("li",{key:t,staticClass:"page-item",class:{active:t===e.activePage}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.$emit("change-page",t)}}},[e._v(e._s(t))])]):e._e()]})),e.activePage<e.pages-2?[e.activePage<e.pages-3?a("li",{staticClass:"page-item disabled"},[e._m(1)]):a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",e.pages-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v(e._s(e.pages-1))])])])]:e._e(),e.activePage<e.pages-1?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",e.pages)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v(e._s(e.pages))])])]):e._e(),e.activePage<e.pages?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Следующая"},on:{click:function(t){return t.preventDefault(),e.$emit("change-page",++e.activePage)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])]):e._e()],2)])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("…")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"page-link",attrs:{href:"#"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("…")])])}],h={name:"PaginationPageSelector",props:["pages","activePage","theme"]},_=h,v=Object(g["a"])(_,u,m,!1,null,null,null),f=v.exports,d={name:"Pagination",components:{PaginationItemsPerPage:p,PaginationPageSelector:f},props:["itemsTotal","page","pageSize","itemsPerPage","theme"],methods:{changePageSize:function(e){var t=this.countFirstItemNumberOnPage(this.pageSize,this.page),a=this.countNewPage(t,e),s=[];s.push(a),s.push(e),this.$emit("change-page-size",s)},countFirstItemNumberOnPage:function(e,t){return e*(t-1)+1},countNewPage:function(e,t){return Math.ceil(e/t)}},computed:{pages:function(){return Math.ceil(this.itemsTotal/this.pageSize)}}},P=d,w=Object(g["a"])(P,s,i,!1,null,null,null);t["a"]=w.exports},ef99:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3"},[e._l(e.newsList.content,(function(t){return a("div",{key:t.id,class:t.importance>0&&!e.everythingLittle?"news-important col col-sm-12 col-lg-8":"col"},[a("NewsPreviewListItem",{attrs:{"news-item":t}})],1)})),a("div",{staticClass:"col-sm-12 col-lg-12 mb-0"},[e.isPagination&&e.itemsTotal>e.pageSize?a("Pagination",{attrs:{"items-total":e.itemsTotal,page:e.page,"page-size":e.pageSize,"items-per-page":e.itemsPerPage},on:{"change-page-size":function(t){return e.$emit("change-page-size",t)},"change-page":function(t){return e.$emit("change-page",t)}}}):e._e()],1)],2)])},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-text-block"},[a("router-link",{staticClass:"news-link stretched-link",attrs:{to:e.newsItem.link}},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.newsItem.title))])]),a("p",{staticClass:"card-text"},[e._v(e._s(e.newsItem.text))])],1),a("div",{staticClass:"card-image"},[a("img",{staticClass:"card-image_full-width",attrs:{alt:"Изображение анонса новости",src:e.newsItem.image_path+e.newsItem.image_file_name}})]),a("div",{staticClass:"card__footer"},[a("div",{staticClass:"news-source"},[a("img",{staticClass:"news-source__logo",attrs:{alt:"Логотип новостного источника",src:e.newsItem.source_logo_path+e.newsItem.source_logo_file_name}}),a("a",{staticClass:"news-source__link",attrs:{href:e.newsItem.source_link}},[e._v(e._s(e.newsItem.source_title))])]),a("span",[e._v(e._s(e.newsItem.publication_date))])])])])},r=[],c={name:"NewsPreviewListItem",props:["newsItem"]},l=c,g=a("2877"),o=Object(g["a"])(l,n,r,!1,null,null,null),p=o.exports,u=a("cbb7"),m={name:"NewsPreviewList",components:{NewsPreviewListItem:p,Pagination:u["a"]},props:["newsList","itemsTotal","page","pageSize","itemsPerPage","everythingLittle","isPagination"]},h=m,_=Object(g["a"])(h,s,i,!1,null,null,null);t["a"]=_.exports}}]);
//# sourceMappingURL=chunk-442e0f27.787d51e6.js.map