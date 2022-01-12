<template>
  <div class="row row-cols-1">
    <div
      v-for="measuresItem of measuresCardsList"
      :key="measuresItem.id"
      class="col"
    >
      <MeasuresCardsListItem :measure="measuresItem" />
    </div>

    <Pagination
      v-show="itemsTotal > pageSize"
      @change-pageSize="changePageSize($event)"
      @change-page="changePage($event)"
      :items-total="itemsTotal"
      :page="page"
      :page-size="pageSize"
      :items-per-page="itemsPerPage"
    ></Pagination>
  </div>
</template>

<script>
import MeasuresCardsListItem from "@/components/MeasuresCardsListItem";
import Pagination from "./universal/Pagination";

export default {
  name: "MeasuresCardsList",
  components: {
    MeasuresCardsListItem,
    Pagination,
  },
  props: ["measuresCardsList", "itemsTotal", "page", "pageSize", "itemsPerPage"],
};
</script>

<style lang="scss" scoped>
$gap: 0.5rem;
$text-color: #212529;
$muted-color: #6c757d;

.row {
  margin-left: -$gap/2;
  margin-right: -$gap/2;

  & > * {
    padding-left: $gap/2;
    padding-right: $gap/2;
    /*margin-bottom: $gap;*/
  }
}
</style>
