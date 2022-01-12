<template>
  <div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
      <div
        v-for="newsItem of newsPack"
        :key="newsItem.id"
        :class="
          newsItem.importance > 0 && !everythingLittle
            ? 'news-important col col-sm-12 col-lg-8'
            : 'col'
        "
      >
        <NewsPreviewListItem
          :news-link="newsItem.link"
          :news-title="newsItem.title"
          :news-text="newsItem.text"
          :news-image-file="newsItem.image_path + newsItem.image_file_name"
          :news-source-logo-file="
            newsItem.source_logo_path + newsItem.source_logo_file_name
          "
          :news-source-link="newsItem.source_link"
          :news-source-name="newsItem.source_title"
          :news-publication-date="newsItem.publication_date"
          :news-importance="newsItem.importance"
        />
      </div>
      <div v-if="pagination" class="col-sm-12 col-lg-12 mb-0">
        <Pagination
          class="d-flex justify-content-between align-items-center"
          :items-total="totalItems"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewsPreviewListItem from "@/components/NewsPreviewListItem";
import Pagination from "./universal/Pagination";

export default {
  name: "NewsPreviewList",
  components: {
    NewsPreviewListItem,
    Pagination,
  },
  props: ["count", "everythingLittle", "targetUrl", "pagination"],
  data() {
    return {
      page: 1,
      pageSize: 10,
      newsPack: [],
      totalItems: 0,
    };
  },
  computed: {
    newsItemTotal: function () {
      return this.count ? this.count : this.pageSize;
    },
  },
  methods: {
    getNews() {
      const xhr = new XMLHttpRequest();
      const request =
        this.targetUrl +
        "?page=" +
        this.page +
        "&pageSize=" +
        this.newsItemTotal;
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Запрашиваю список новостей");
        console.log(xhr.response);
        this.newsPack = xhr.response;
      };
      xhr.send();
    },
    getNewsCount() {
      const xhr = new XMLHttpRequest();
      const request = this.targetUrl + "?req=count";
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Запрашиваю общее количество");
        console.log(xhr.response);
        this.totalItems = Object.keys(xhr.response).length;
      };
      xhr.send();
    },
  },
  mounted: function () {
    this.getNewsCount();
    this.getNews();
  },
};
</script>

<style lang="scss" scoped>
/*Styles need to be optimized*/
$gap: 0.5rem;
$text-color: #212529;
$muted-color: #6c757d;

.row {
  margin-left: -$gap/2;
  margin-right: -$gap/2;

  & > * {
    padding-left: $gap/2;
    padding-right: $gap/2;
    margin-bottom: $gap;
  }
}
</style>
