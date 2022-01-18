<template>
  <div class="row justify-content-between">
    <PaginationItemsPerPage
      :items-per-page="itemsPerPage"
      :page-size="pageSize"
      @changepagesize1="$emit('changepagesize2', $event)"
    />
    <div class="block">1-{{ pageSize }} из {{ itemsTotal }}</div>

    <PaginationPageSelector
            v-if="itemsTotal"
            :items-total="itemsTotal"
            :page-size="pageSize"
            :page="pageSize"
            @change-page="$emit('change-page', $event)" />
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

  props: [
    "itemsTotal",
    "page",
    "pageSize",
    "itemsPerPage",
  ],
};
</script>
