<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div v-for="measuresItem of cuttedMeasuresPack" :key="measuresItem.id">
            <NewsCard2 :news="newsItem"></NewsCard2>
            <MeasureCard :measures="measuresItem"/>
        </div>
    </div>
</template>

<script>
    import MeasureCard from "@/components/MeasureCard";

    export default {
        name: "MeasuresCardsList",
        components: {
            MeasureCard
        },
        props: [
            'measuresPack',
            'count',
        ],
        computed: {
            cuttedMeasuresPack: function() {
                if (this.count && this.count < this.measuresPack.length) {
                    let cuttedPack = this.measuresPack.filter((item, index) => index < this.count);
                    return cuttedPack
                } else {
                    return this.measuresPack
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $gap: 0.5rem;
    $text-color: #212529;
    $muted-color: #6c757d;

        .row {
            margin-left: -$gap/2;
            margin-right: -$gap/2;

            & > * {
                padding-left: $gap/2;
                padding-right: $gap/2;
                margin-bottom: $gap;
            }
        }
</style>
