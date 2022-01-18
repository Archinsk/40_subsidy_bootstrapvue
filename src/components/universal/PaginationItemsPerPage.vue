<template>
  <div class="pagination-items-per-page">
    <button
      v-for="valuePerPage of itemsPerPage"
      :key="valuePerPage"
      type="button"
      class="btn btn-primary"
      @click="$emit('changepagesize1', valuePerPage)"
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
