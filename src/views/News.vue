<template>
    <div>
        <HeaderOffcavas/>
        <main class="content">
            <section class="news-page mb-2">
                <div class="news__wrapper container">
                    <h4 class="news__header text-center py-2">Новости</h4>
                    <NewsPreviewList
                            count="10"
                            :everythingLittle="false"
                            :target-url="newsTargetUrl"
                            :pagination="true"
                    ></NewsPreviewList>
<!--                    <ItemsListFooter @change-pageSize="changePageSize($event)" @change-page="changePage($event)"></ItemsListFooter>-->
                </div>
            </section>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import NewsPreviewList from "@/components/NewsPreviewList";
    // import ItemsListFooter from "@/components/ItemsListFooter";
    import Footer from "@/components/Footer";

    export default {
        name: "News",

        components: {
            HeaderOffcavas,
            NewsPreviewList,
            // ItemsListFooter,
            Footer,
        },

        data() {
            return {
                newsTargetUrl: 'https://www.d-skills.ru/40_subsidy_bootstrapvue/news.php',
                xhrResponse: [],
                page: 1,
                pageSize: 10,
                newsItem:{
                    "id": "1",
                    "title": "ArchGlass 2021 - Международный форум индустрии архитектурного стекла",
                    "text": "Союз архитекторов России и Союз московских архитекторов приглашают на 3-й международный форум индустрии архитектурного стекла ArchGlass 2021.",
                    "image_path": "images/news/",
                    "image_file_name": "news1.jpg",
                    "link": "/newsinfo",
                    "importance": "1",
                    "publication_date": "10:15",
                    "source_logo_path": "images/news_source_logo/",
                    "source_logo_file_name": "rialogo.jpg",
                    "source_title": "РИА Новости",
                    "source_link": "https://ria.ru",
                    "content": "value-13"
                }
            }
        },

        methods: {
            // changePageSize(itemsPerPage) {
            //     console.log(itemsPerPage);
            //     this.pageSize = itemsPerPage;
            //     this.changeItemsCount();
            // },
            // changePage(page) {
            //     console.log(page);
            //     this.page = page;
            //     this.changeItemsCount();
            // },
            // changeItemsCount () {
            //     console.log('Апдейт');
            //     const xhr = new XMLHttpRequest();
            //     let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/news.php?page=" + this.page + "&pageSize=" + this.pageSize;
            //     xhr.open("GET", request);
            //     xhr.responseType = 'json';
            //     xhr.onload = () => {
            //         console.log(xhr.response);
            //         this.xhrResponse = xhr.response;
            //     };
            //     xhr.send();
            // }
        },


    }
</script>

<style lang="scss" scoped>

</style>
