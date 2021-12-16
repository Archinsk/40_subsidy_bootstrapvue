<template>
    <div>
        <PaginationItemsPerPage @change-pageSize="$emit('change-pageSize', $event)"/>
        <div class="block">1-10 из {{ itemsTotal }}</div>
        <PaginationPageSelector @change-page="$emit('change-page', $event)"/>
    </div>
</template>

<script>
    import PaginationItemsPerPage from "@/components/PaginationItemsPerPage";
    import PaginationPageSelector from "@/components/PaginationPageSelector";

    export default {
        name: "ItemsListFooter",

        components: {
            PaginationItemsPerPage,
            PaginationPageSelector,
        },

        props: [
            'itemsTotal'
        ]
    }
</script>

<style scoped>

</style>
