<template>
  <div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
      <div
        v-for="newsItem of newsList.content"
        :key="newsItem.id"
        :class="
          newsItem.importance > 0 && !everythingLittle
            ? 'news-important col col-sm-12 col-lg-8'
            : 'col'
        "
      >
        <NewsPreviewListItem :news-item="newsItem" />
      </div>
      <div class="col-sm-12 col-lg-12 mb-0">
        <Pagination
          v-if="isPagination && itemsTotal > pageSize"
          :items-total="itemsTotal"
          :page="page"
          :page-size="pageSize"
          :items-per-page="itemsPerPage"
          @change-page-size="$emit('change-page-size', $event)"
          @change-page="$emit('change-page', $event)"
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
  props: [
    "newsList",
    "itemsTotal",
    "page",
    "pageSize",
    "itemsPerPage",
    "everythingLittle",
    "isPagination",
  ],
};
</script>
