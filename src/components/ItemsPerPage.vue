<template>
    <ul class="col">
        <div v-for="count of itemsCount" :key="count" class="btn btn-primary"
             @click="$emit('change-pageSize', count)"
        >
            {{ count }}
        </div>
    </ul>
</template>

<script>
    export default {
        name: "ItemsPerPage",
        data() {
            return {
                itemsCount: [3, 5, 10]
            }
        }
    }
</script>

<style lang="scss" scoped>
    $gap: 1rem;

    ul {
        /*padding-left: 0;*/
        margin-bottom: 0;

        .btn {
            margin-right: $gap/2;
        }
    }
</style>
