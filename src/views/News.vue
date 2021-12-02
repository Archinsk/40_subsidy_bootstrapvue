<template>
    <div>
        <HeaderOffcavas/>

        <main class="content">

            <section class="news-page">
                <div class="news__wrapper container">
                    <h4 class="news__header text-center py-2">Новости</h4>

<!--                    <NewsCardsList :newsPack="singleNewsJson"></NewsCardsList>-->
                    <NewsCardsList2 :newsPack="xhrResponse" count="10" :everythingLittle="false"></NewsCardsList2>
                    <ItemsListFooter @change-pageSize="changePageSize($event)" @change-page="changePage($event)"></ItemsListFooter>

                </div>
            </section>

        </main>

        <Footer/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    // import NewsCardsList from "@/components/NewsCardsList";
    import NewsCardsList2 from "@/components/NewsCardsList2";
    import ItemsListFooter from "@/components/ItemsListFooter";
    import Footer from "@/components/Footer";

    export default {
        name: "News",

        components: {
            HeaderOffcavas,
            // NewsCardsList,
            NewsCardsList2,
            ItemsListFooter,
            Footer,
        },

        data() {
            return {
                /*singleNewsJson: [
                    {
                        "id": 1,
                        "title": "ArchGlass 2021 - Международный форум индустрии архитектурного стекла",
                        "text": "Союз архитекторов России и Союз московских архитекторов приглашают на 3-й международный форум индустрии архитектурного стекла ArchGlass 2021.",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news1.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": true,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 2,
                        "title": "Territorial development strategy",
                        "text": "Конференция по Стратегии комплексного развития территорий соберет экспертное сообщество и реальные кейсы на примере которых будут рассмотрены вопросы территориального планирования, земельного администрирования, технического регулирования и деятельности по улучшению бизнес-климата",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news2.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": false,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 3,
                        "title": "Цифровизация транспорта 2021. Процесс трансформации: оценка и перспективы",
                        "text": "Лидеры отрасли уже реализуют свои собственные стратегии и внедряют новые бизнес-модели на основе цифровых технологий.",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news3.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": false,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 4,
                        "title": "МАСТЕР - КЛАСС \"ОСНОВЫ ИНВЕСТИЦИОННОЙ ГРАМОТНОСТИ В 21 ВЕКЕ\" от Rocket University",
                        "text": "Погружение в мир современных финансов. Инструменты инвестиций. Игра - симуляция работы инвестиционного аналитика",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news4.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": true,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 5,
                        "title": "Digital Transformation Day 2021",
                        "text": "В ходе конференции предлагается обсудить следующий круг вопросов: Цифровая трансформация бизнеса крупной компании как комплексный взгляд на сложную многоаспектную структуру деятельности.",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news5.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": false,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 6,
                        "title": "ODSC APAC Virtual Conference 2021",
                        "text": "ODSC APAC Virtual Conference 2021 is one of the largest applied data science conferences. Our speakers include core contributors to many open source libraries and languages.",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news6.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": false,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 7,
                        "title": "ChipEXPO-2021",
                        "text": "Выставка включена в план официальных выставочных мероприятий Министерства промышленности и торговли Российской Федерации.",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news7.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": false,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 8,
                        "title": "Мастер-класс по личностному росту на тему: \"Мотивация в работе с командой\"",
                        "text": "Обучающее мероприятие, направленное на разработку общественных инициатив участников проекта, посредством образовательной составляющей, подкрепленной ключевыми навыками и практическими приемами.",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news8.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": false,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 9,
                        "title": "Мастер-класс по личностному росту на тему: \"Мотивация в работе с командой\"",
                        "text": "Обучающее мероприятие, направленное на разработку общественных инициатив участников проекта, посредством образовательной составляющей, подкрепленной ключевыми навыками и практическими приемами.",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news9.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": false,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                    {
                        "id": 10,
                        "title": "Мастер-класс по личностному росту на тему: \"Мотивация в работе с командой\"",
                        "text": "Обучающее мероприятие, направленное на разработку общественных инициатив участников проекта, посредством образовательной составляющей, подкрепленной ключевыми навыками и практическими приемами.",
                        "image": {
                            "path": "images/news/",
                            "file_name": "news10.jpg",
                        },
                        "link": "/newsinfo",
                        "importance": false,
                        "publication_date": "10:15",
                        "source": {
                            "logo": {
                                "path": "images/news_source_logo/",
                                "file_name": "rialogo.jpg",
                            },
                            "title": "РИА Новости",
                            "link": "https://ria.ru"
                        }
                    },
                ],*/
                xhrResponse: [],
                page: 1,
                pageSize: 10,
            }
        },

        methods: {
            changePageSize(itemsPerPage) {
                console.log(itemsPerPage);
                this.pageSize = itemsPerPage;
            },
            changePage(page) {
                console.log(page);
                this.page = page;
            },
        },
        mounted: function () {
            console.log('Смонтировано');
            const xhr = new XMLHttpRequest();
            let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/news.php?page=" + this.page + "&pageSize=" + this.pageSize;
            xhr.open("GET", request);
            xhr.responseType = 'json';
            xhr.onload = () => {
                console.log(xhr.response);
                this.xhrResponse = xhr.response;
            }
            xhr.send();
        },
        updated: function () {
            console.log('Смонтировано');
            const xhr = new XMLHttpRequest();
            let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/news.php?page=" + this.page + "&pageSize=" + this.pageSize;
            xhr.open("GET", request);
            xhr.responseType = 'json';
            xhr.onload = () => {
                console.log(xhr.response);
                this.xhrResponse = xhr.response;
            }
            xhr.send();
        },
    }
</script>

<style lang="scss" scoped>

</style>
