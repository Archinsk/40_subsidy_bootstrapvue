<template>
  <div class="d-flex justify-content-between align-items-center">
    <PaginationItemsPerPage
      :items-per-page="itemsPerPage"
      :page-size="pageSize"
      @change-page-size="changePageSize($event)"
    />
    <div class="block">
      {{ pageSize * (page - 1) + 1 }} - {{ pageSize * page }} из
      {{ itemsTotal }}
    </div>
    <PaginationPageSelector
      v-if="itemsTotal > pageSize"
      :pages="pages"
      :active-page="page"
      @change-page="$emit('change-page', $event)"
    />
  </div>
</template>

<script>
import PaginationItemsPerPage from "./PaginationItemsPerPage";
import PaginationPageSelector from "./PaginationPageSelector";

export default {
  name: "Pagination",

  components: {
    PaginationItemsPerPage,
    PaginationPageSelector,
  },

  props: ["itemsTotal", "page", "pageSize", "itemsPerPage"],

  methods: {
    changePageSize(newPageSize) {
      const currentItemOnTopOfPage = this.countFirstItemNumberOnPage(
        this.pageSize,
        this.page
      );
      const newPage = this.countNewPage(currentItemOnTopOfPage, newPageSize);
      let pageInfo = [];
      pageInfo.push(newPage);
      pageInfo.push(newPageSize);
      this.$emit("change-page-size", pageInfo);
    },

    countFirstItemNumberOnPage(pageSize, page) {
      return pageSize * (page - 1) + 1;
    },

    countNewPage(oldFirstItemNumberOnPage, newPageSize) {
      return Math.ceil(oldFirstItemNumberOnPage / newPageSize);
    },
  },

  computed: {
    pages: function () {
      return Math.ceil(this.itemsTotal / this.pageSize);
    },
  },
};
</script>
