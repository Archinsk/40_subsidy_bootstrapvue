<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div
                v-for="newsItem of newsPack"
                :key="newsItem.id"
                :class="newsItem.importance>0 && everythingLittle==='false' ? 'news-important col col-sm-12 col-lg-8' : 'col'"
        >
            <NewsPreviewListItem
                    :news-link="newsItem.link"
                    :news-title="newsItem.title"
                    :news-text="newsItem.text"
                    :news-image-file="newsItem.image_path + newsItem.image_file_name"
                    :news-source-logo-file="newsItem.source_logo_path + newsItem.source_logo_file_name"
                    :news-source-link="newsItem.source_link"
                    :news-source-name="newsItem.source_title"
                    :news-publication-date="newsItem.publication_date"
                    :news-importance="newsItem.importance"
            />
        </div>
    </div>
</template>

<script>
    import NewsPreviewListItem from "@/components/NewsPreviewListItem";

    export default {
        name: "NewsPreviewList",
        components: {
            NewsPreviewListItem
        },
        props: [
            'count',
            'everythingLittle',
        ],
        data() {
            return {
                page: 1,
                pageSize: 10,
                newsPack: [],
            }
        },
        computed: {
            newsItemTotal: function () {
                return this.count ? this.count : this.pageSize;
            },
        },
        mounted: function () {
            console.log('Смонтировано');
            const xhr = new XMLHttpRequest();
            let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/news.php?page=" + this.page + "&pageSize=" + this.newsItemTotal;
            xhr.open("GET", request);
            xhr.responseType = 'json';
            xhr.onload = () => {
                console.log(xhr.response);
                this.newsPack = xhr.response;
            };
            xhr.send();
        },
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
