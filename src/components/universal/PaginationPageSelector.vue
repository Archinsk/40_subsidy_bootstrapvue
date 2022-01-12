<template>
  <div class="measure__pagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page of pages" :key="page" class="page-item">
          <a class="page-link" href="#" @click="$emit('change-page', page)">{{
            page
          }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PaginationPageSelector",

  props: ["itemsTotal", "page", "pageSize"],

  computed: {
    pages() {
      return Math.ceil(this.itemsTotal / this.pageSize);
    },
  },
};
</script>
