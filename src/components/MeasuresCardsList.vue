<template>
  <div class="row row-cols-1">
    <div
      v-for="measuresItem of measuresCardsList.content"
      :key="measuresItem.id"
      class="col"
    >
      <MeasuresCardsListItem
        v-if="filteredMeasures.includes(measuresItem.id)"
        :measure="measuresItem"
      />
    </div>
    <div class="col">
      <!--        @change-page="changePage($event)"-->
      <Pagination
        v-show="itemsTotal > pageSize"
        @change-page-size="$emit('change-page-size', $event)"
        @change-page="$emit('change-page', $event)"
        :items-total="itemsTotal"
        :page="page"
        :page-size="pageSize"
        :items-per-page="itemsPerPage"
      ></Pagination>
    </div>
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
  props: [
    "measuresCardsList",
    "filteredMeasures",
    "itemsTotal",
    "page",
    "pageSize",
    "itemsPerPage",
  ],
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
