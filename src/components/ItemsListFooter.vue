<template>
    <div class="row justify-content-between">
        <ItemsPerPage @change-pageSize="$emit('change-pageSize', $event)"/>
        <PaginatorB @change-page="$emit('change-page', $event)"/>
    </div>
</template>

<script>
    import ItemsPerPage from "@/components/ItemsPerPage";
    import PaginatorB from "@/components/PaginatorB";

    export default {
        name: "ItemsListFooter",

        components: {
            ItemsPerPage,
            PaginatorB
        }
    }
</script>

<style scoped>

</style>
