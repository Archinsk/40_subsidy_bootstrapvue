<template>
    <b-modal
            :id="id"
    >
        Привет из модала!
    </b-modal>
</template>

<script>
    export default {
        name: "BvModal",
        props: ["id"],
    }
</script>

<style scoped>

</style>
