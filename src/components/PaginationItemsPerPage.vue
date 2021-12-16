<template>
    <div class="pagination-items-per-page">
        <button v-for="count of itemsCount" :key="count" type="button" class="btn btn-primary"
             @click="$emit('change-pageSize', count)"
        >
            {{ count }}
        </button>
    </div>
</template>

<script>
    export default {
        name: "PaginationItemsPerPage",
        data() {
            return {
                itemsCount: [3, 5, 10]
            }
        }
    }
</script>

<style lang="scss" scoped>
    $gap: 1rem;

    .pagination-items-per-page {
        /*padding-left: 0;*/
        margin-bottom: 0;

        .btn:not(:last-child) {
            margin-right: $gap/2;
        }
    }
</style>
