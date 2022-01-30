<template>
  <div class="pagination-items-per-page d-none d-lg-block">
    <button
      v-for="valuePerPage of itemsPerPage"
      :key="valuePerPage"
      type="button"
      class="btn btn-primary"
      @click="$emit('change-page-size', valuePerPage)"
    >
      {{ valuePerPage }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationItemsPerPage",
  props: ["itemsPerPage", "pageSize"],
};
</script>
