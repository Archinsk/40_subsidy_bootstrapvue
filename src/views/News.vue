<template>
  <section class="news-page mb-2">
    <div class="news__wrapper container">
      <h4 class="news__header text-center py-2">
        Новости <span class="badge badge-primary">{{ itemsTotal }}</span>
      </h4>
      <NewsPreviewList
        :news-list="newsCardsList"
        :items-total="itemsTotal"
        :page="page"
        :page-size="pageSize"
        :items-per-page="itemsPerPage"
        :everythingLittle="false"
        @change-page-size="changePageSize($event)"
        @change-page="changePage"
      ></NewsPreviewList>
    </div>
  </section>
</template>

<script>
import NewsPreviewList from "@/components/NewsPreviewList";

export default {
  name: "News",

  components: {
    NewsPreviewList,
  },

  data() {
    return {
      url: "https://www.d-skills.ru/40_subsidy_bootstrapvue/news2.php",
      newsCardsList: [],
      xhrResponse: [],
      itemsTotal: 0,
      page: 1,
      pageSize: 10,
      itemsPerPage: [10, 25, 50],
      // newsItem: {
      //   id: "1",
      //   title:
      //     "ArchGlass 2021 - Международный форум индустрии архитектурного стекла",
      //   text: "Союз архитекторов России и Союз московских архитекторов приглашают на 3-й международный форум индустрии архитектурного стекла ArchGlass 2021.",
      //   image_path: "images/news/",
      //   image_file_name: "news1.jpg",
      //   link: "/newsinfo",
      //   importance: "1",
      //   publication_date: "10:15",
      //   source_logo_path: "images/news_source_logo/",
      //   source_logo_file_name: "rialogo.jpg",
      //   source_title: "РИА Новости",
      //   source_link: "https://ria.ru",
      //   content: "value-13",
      // },
    };
  },

  methods: {
    getNews(page, pageSize) {
      const xhr = new XMLHttpRequest();
      const request = this.url + "?page=" + page + "&pageSize=" + pageSize;
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Cписок новостей");
        console.log(xhr.response);
        this.newsCardsList = xhr.response;
        this.itemsTotal = xhr.response.totalElements;
      };
      xhr.send();
    },

    changePageSize(newPageInfo) {
      this.page = newPageInfo[0];
      this.pageSize = newPageInfo[1];
      this.getNews(this.page, this.pageSize);
    },

    changePage(page) {
      console.log(page);
      this.page = page;
      this.getNews(this.page, this.pageSize);
    },
  },

  mounted: function () {
    this.getNews(this.page, this.pageSize);
  },
};
</script>

<style lang="scss" scoped></style>
