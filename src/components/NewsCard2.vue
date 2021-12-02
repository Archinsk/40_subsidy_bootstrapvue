<template>
    <div class="card">
        <div class="card-body">
            <div class="card-text-block">
                <router-link :to="news.link" class="news-link stretched-link">
                    <h5 class="card-title">{{news.title}}</h5>
                </router-link>
                <p class="card-text">{{news.text}}</p>
            </div>
            <div class="card__image_full-width">
                <img :src="news.image_path + news.image_file_name" class="card__image" alt="...">
            </div>
            <div class="card__footer">
                <div class="news-source">
                    <img :src="news.source_logo_path + news.source_logo_file_name" alt="Логотип новостного источника" class="news-source__logo">
                    <a :href="news.source_link" class="news-source__link">{{news.source_title}}</a>
                </div>
                <span>{{news.publication_date}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsCard2",

        props: [
            'news',
        ],

        data() {
            return{

            }
        },

        computed: {

        },
    }
</script>

<style lang="scss" scoped>
    $gap: 0.5rem;
    $text-color: #212529;
    $muted-color: #6c757d;

    .card {

        @media (min-width: 576px) {
            height: 478px;
        }

        @media (min-width: 768px) {
            height: 404px;
        }

        @media (min-width: 992px) {
            height: 430px;
        }

        @media (min-width: 1200px) {
            height: 406px;
        }

        .card-body {
            display: flex;
            flex-direction: column;

            .card-text-block {
                display: flex;
                flex-direction: column;
                height: 100%;
                flex: 1;
                margin-bottom: 1.25rem;

                .news-link {
                    text-decoration: none;
                    color: $text-color;
                }

                .card-text {
                    flex: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;

                }
            }

            .card__image_full-width {
                height: 140px;
                overflow: hidden;
                display: flex;
                align-items: center;
                border-radius: 0.25rem;
                margin-bottom: 1rem;

                .card__image {
                    width: 100%;
                }
            }

            .card__footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: $muted-color;

                .news-source {
                    display: flex;
                    align-items: center;

                    .news-source__logo {
                        height: 1.5rem;
                        margin-right: 0.5rem;
                        border-radius: 0.125rem;
                    }

                    .news-source__link {
                        text-decoration: none;
                        color: $muted-color;
                        z-index: 1000;
                    }
                }
            }
        }
    }

    .news-important {
        .card {
            .card-body {
                height: 100%;

                @media (min-width: 576px) {
                    flex-wrap: wrap;
                    align-content: space-between;
                }

                .card-text-block {

                    @media (min-width: 576px) {
                        width: calc((100% - 2px - 3rem) / 2);
                    }
                }

                .card__image_full-width {

                    @media (min-width: 576px) {
                        order: -1;
                        height: 100%;
                        margin-bottom: 0;
                        justify-content: center;
                        width: calc(50% + 0.25rem + 1px);
                    }

                    .card__image {

                        @media (min-width: 576px) {
                            height: 100%;
                            width: auto;
                        }
                    }
                }

                .card__footer {

                    @media (min-width: 576px) {
                        width: calc((100% - 2px - 3rem) / 2);
                    }
                }
            }
        }
    }

</style>
