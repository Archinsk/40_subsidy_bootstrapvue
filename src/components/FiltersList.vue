<template>
    <div>
        <FilterCheckboxesGroup v-for="oneFilter of fd" :key="oneFilter.title" :filterData="oneFilter"/>
    </div>
</template>

<script>
    import FilterCheckboxesGroup from "@/components/FilterCheckboxesGroup";

    export default {
        name: "FiltersList",
        props: [
            'fd'
        ],
        components: {
            FilterCheckboxesGroup,
        }
    }
</script>

<style scoped>

</style>
