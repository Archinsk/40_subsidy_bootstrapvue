<template>
    <div>
        <HeaderOffcavas/>

        <main class="content">

            <section class="news-page">
                <div class="news__wrapper container">
                    <h4 class="news__header text-center py-2">Новости</h4>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        <div class="news-important col col-sm-12 col-lg-8">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">ArchGlass 2021 - Международный форум индустрии
                                                архитектурного
                                                стекла</h5>
                                        </router-link>
                                        <p class="card-text">
                                            Союз архитекторов России и Союз московских архитекторов приглашают на
                                            3-й международный форум индустрии архитектурного стекла ArchGlass 2021.
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news1.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">

                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">Territorial development strategy</h5>
                                        </router-link>
                                        <p class="card-text">
                                            Конференция по Стратегии комплексного развития территорий соберет
                                            экспертное сообщество и реальные кейсы на примере которых будут
                                            рассмотрены
                                            вопросы
                                            территориального планирования, земельного администрирования,
                                            технического
                                            регулирования
                                            и деятельности по улучшению бизнес-климата
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news2.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                                            <a href="https://ria.ru" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">Цифровизация транспорта 2021. Процесс трансформации:
                                                оценка и
                                                перспективы</h5>
                                        </router-link>
                                        <p class="card-text">
                                            Лидеры отрасли уже реализуют свои собственные стратегии и внедряют
                                            новые бизнес-модели на основе цифровых технологий.
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news3.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">МАСТЕР - КЛАСС "ОСНОВЫ ИНВЕСТИЦИОННОЙ ГРАМОТНОСТИ В
                                                21
                                                ВЕКЕ" от
                                                Rocket University</h5>
                                        </router-link>
                                        <p class="card-text">
                                            Погружение в мир современных финансов. Инструменты инвестиций. Игра -
                                            симуляция
                                            работы
                                            инвестиционного аналитика
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news4.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">Digital Transformation Day 2021</h5>
                                        </router-link>
                                        <p class="card-text">
                                            В ходе конференции предлагается обсудить следующий круг вопросов:
                                            Цифровая трансформация бизнеса крупной компании как комплексный взгляд на
                                            сложную
                                            многоаспектную структуру деятельности.
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news5.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">ODSC APAC Virtual Conference 2021</h5>
                                        </router-link>
                                        <p class="card-text">
                                            ODSC APAC Virtual Conference 2021 is one of the largest applied data
                                            science conferences. Our speakers include core contributors to many open
                                            source
                                            libraries and languages.
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets//news/news6.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">ChipEXPO-2021</h5>
                                        </router-link>
                                        <p class="card-text">
                                            Выставка включена в план официальных выставочных мероприятий
                                            Министерства промышленности и торговли Российской Федерации.
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news7.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">Мастер-класс по личностному росту на тему: "Мотивация
                                                в
                                                работе с
                                                командой"</h5>
                                        </router-link>
                                        <p class="card-text">
                                            Обучающее мероприятие, направленное на разработку общественных
                                            инициатив участников проекта, посредством образовательной составляющей,
                                            подкрепленной
                                            ключевыми навыками и практическими приемами.
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news8.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt="" class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">Мастер-класс по личностному росту на тему:
                                                "Мотивация
                                                в
                                                работе с
                                                командой"</h5>
                                        </router-link>
                                        <p class="card-text">
                                            Обучающее мероприятие, направленное на разработку общественных
                                            инициатив участников проекта, посредством образовательной
                                            составляющей,
                                            подкрепленной
                                            ключевыми навыками и практическими приемами.
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news9.jpg" class="card__image" alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt=""
                                                 class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-text-block">
                                        <router-link to="/newsinfo" class="news-link stretched-link">
                                            <h5 class="card-title">Мастер-класс по личностному росту на тему:
                                                "Мотивация
                                                в
                                                работе с
                                                командой"</h5>
                                        </router-link>
                                        <p class="card-text">
                                            Обучающее мероприятие, направленное на разработку общественных
                                            инициатив участников проекта, посредством образовательной
                                            составляющей,
                                            подкрепленной
                                            ключевыми навыками и практическими приемами.
                                        </p>
                                    </div>
                                    <div class="card__image_full-width">
                                        <img src="@/assets/news/news10.jpg" class="card__image"
                                             alt="...">
                                    </div>
                                    <div class="card__footer">
                                        <div class="news-source">
                                            <img src="@/assets/rialogo.jpg" alt=""
                                                 class="news-source__logo">
                                            <a href="#" class="news-source__link">РИА Новости</a>
                                        </div>
                                        <span>10:15</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <NewsCard :news="singleNewsJson"></NewsCard>
                        </div>

                    </div>

                    <div class="measure__pagination">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </section>

        </main>

        <Footer/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import NewsCard from "@/components/NewsCard";
    import Footer from "@/components/Footer";

    export default {
        name: "News",

        components: {
            HeaderOffcavas,
            NewsCard,
            Footer,
        },

        data() {
            return {
                singleNewsJson: {
                    "title": "Заголовок компонента карточки",
                    "text": "Конференция по Стратегии комплексного развития территорий соберет экспертное сообщество и реальные кейсы на примере которых будут рассмотрены вопросы территориального планирования, земельного администрирования, технического регулирования и деятельности по улучшению бизнес-климата",
                    "image": {
                        "path": "@/assets/news/",
                        "file_name": "news2.jpg",
                    },
                    "link": "/newsinfo",
                    "importance": false,
                    "publication_date": "10:15",
                    "source": {
                        "logo": {
                            "path": "@/assets/",
                            "file_name": "rialogo.jpg",
                        },
                        "title": "РИА Новости",
                        "link": "https://ria.ru"
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $gap: 0.5rem;
    $text-color: #212529;
    $muted-color: #6c757d;

    .news-page {

        .row {
            margin-left: -$gap/2;
            margin-right: -$gap/2;

            & > * {
                padding-left: $gap/2;
                padding-right: $gap/2;
                margin-bottom: $gap;
            }

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

                            .card-title {

                            }
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
                            /*.news-link {

                                @media (min-width: 576px) {
                                    width: calc((100% - 2px - 3rem) / 2);
                                }

                                .card-title {

                                    @media (min-width: 576px) {
                                        width: calc((100% - 2px - 3rem) / 2);
                                    }
                                }
                            }*/

                            .card-text {

                                /*@media (min-width: 576px) {*/
                                /*    width: calc((100% - 2px - 3rem) / 2);*/
                                /*}*/
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
        }
    }
</style>
