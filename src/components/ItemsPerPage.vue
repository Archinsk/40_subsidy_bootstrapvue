<template>
    <ul>
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

<style scoped>

</style>
