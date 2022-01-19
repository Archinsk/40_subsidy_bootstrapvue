<template>
  <div class="row row-cols-1">
    <div
      v-for="appsItem of appsCardsList.content"
      :key="appsItem.id"
      class="col"
    >
      <ApplicationsCardsListItem :application="appsItem" @getappform="$emit('getappform2', appsItem.id)"/>
    </div>

    <Pagination
      v-show="itemsTotal > pageSize"
      @changepagesize2="$emit('changepagesize3', $event)"
      @change-page="changePage($event)"
      :items-total="itemsTotal"
      :page="page"
      :page-size="pageSize"
      :items-per-page="itemsPerPage"
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
  data() {
    return {
      applicationItem: {
        title: "Заявка для открытого контура",
      },
    };
  },
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
