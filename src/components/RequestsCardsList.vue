<template>
    <div class="request-cards">
        <RequestCard  v-for="requestItem of cuttedRequestsPack" :key="requestItem.id" :request="requestItem"/>
    </div>
</template>

<script>
    import RequestCard from "@/components/RequestCard";

    export default {
        name: "RequestsCardsList",
        components: {
            RequestCard,
        },
        props: [
            'requestsPack',
            'count'
        ],
        computed: {
            cuttedRequestsPack: function() {
                if (this.count && this.count < this.requestsPack.length) {
                    let cuttedPack = this.requestsPack.filter((item, index) => index < this.count);
                    return cuttedPack
                } else {
                    return this.requestsPack
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
