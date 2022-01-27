<template>
  <div class="row row-cols-1">
    <div
      v-for="(appsItem, index) of appsCardsList.content"
      :key="index ? appsItem.id + '-' + index : appsItem.id"
      class="col"
    >
      <ApplicationsCardsListItem
        :application="appsItem"
        :index="index"
        @get-app-form="$emit('get-app-form', appsItem.id)"
      />
    </div>

    <Pagination
      v-show="itemsTotal > pageSize"
      :items-total="itemsTotal"
      :page="page"
      :page-size="pageSize"
      :items-per-page="itemsPerPage"
      @change-page-size="$emit('change-page-size', $event)"
      @change-page="$emit('change-page', $event)"
    ></Pagination>
  </div>
</template>

<script>
import ApplicationsCardsListItem from "@/components/ApplicationsCardsListItem";
import Pagination from "./universal/Pagination";

export default {
  name: "ApplicationsCardsList",
  components: {
    ApplicationsCardsListItem,
    Pagination,
  },
  props: ["appsCardsList", "itemsTotal", "page", "pageSize", "itemsPerPage"],
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
