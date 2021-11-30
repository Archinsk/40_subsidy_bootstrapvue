<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div v-for="newsItem of cuttedNewsPack" :key="newsItem.id" :class="newsItem.importance ? 'news-important col col-sm-12 col-lg-8' : 'col'">
            <NewsCard :news="newsItem"></NewsCard>
        </div>
    </div>
</template>

<script>
    import NewsCard from "@/components/NewsCard";

    export default {
        name: "NewsCardsList",
        components: {
            NewsCard
        },
        props: [
            'newsPack',
            'count',
            'everythingLittle',
        ],
        computed: {
            cuttedNewsPack: function() {
                if (this.count && this.count < this.newsPack.length) {
                    let cuttedPack = this.newsPack.filter((item, index) => index < this.count);
                    if (this.everythingLittle) {
                        cuttedPack.forEach(news => news.importance = false)
                    }
                    return cuttedPack
                } else {
                    return this.newsPack
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
