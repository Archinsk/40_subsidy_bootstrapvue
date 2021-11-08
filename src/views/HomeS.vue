<template>
    <main class="content">

        <section v-if="!chatIsActive" class="slider">
            <Slider></Slider>
        </section>

        <section class="bot py-3">
            <div class="container">
                <ChatBoard :isActive="chatIsActive" :messages="replicsList" @close-chat="closeChat"></ChatBoard>
                <SearchForm :quest="inputText" @focus-input="focusInput" @add-quest="addQuest($event)"></SearchForm>
                <AnswersBlock v-if="!chatIsActive" @quick-question="enterQuestion($event)"></AnswersBlock>
                <FeaturesBlock v-if="!chatIsActive"></FeaturesBlock>
            </div>
        </section>

        <section v-if="!chatIsActive" class="advantages">
            <div class="advantages__wrapper container">
                <h2 class="advantages__header text-center py-2">Наши преимущества</h2>

                <div class="row row-cols-2 row-cols-sm-2 row-cols-lg-4">
                    <div class="col">
                        <div class="h-100">
                            <img src="@/assets/default.jpg" class="advantage__image" alt="...">
                            <div class="advantage__comment text-center">
                                <h5 class="card-title">Контракты</h5>
                                <p class="card-text">
                                    Заключайте контракты с другими участниками прямо в личном кабинете
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100">
                            <img src="@/assets/default.jpg" class="advantage__image" alt="...">
                            <div class="advantage__comment text-center">
                                <h5 class="card-title">Партнеры</h5>
                                <p class="card-text">
                                    Находите партнеров из других отраслей
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100">
                            <img src="@/assets/default.jpg" class="advantage__image" alt="...">
                            <div class="advantage__comment text-center">
                                <h5 class="card-title">Поддержка</h5>
                                <p class="card-text">
                                    Получайте поддержку и консультации с консьерж-сервисом
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100">
                            <img src="@/assets/default.jpg" class="advantage__image" alt="...">
                            <div class="advantage__comment text-center">
                                <h5 class="card-title">Поиск</h5>
                                <p class="card-text">Открывайте новые возможности с помощью поиска на основе
                                    искусственного
                                    интеллекта</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section v-if="!chatIsActive" class="news mb-2">
            <div class="news__wrapper container">
                <h2 class="news__header text-center py-2">Новости</h2>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-2">
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/default.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">ArchGlass 2021 - Международный форум индустрии архитектурного
                                    стекла</h5>
                                <p class="card-text">
                                    Союз архитекторов России и Союз московских архитекторов приглашают на
                                    3-й международный форум индустрии архитектурного стекла ArchGlass 2021.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/default.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Territorial development strategy</h5>
                                <p class="card-text">
                                    Конференция по Стратегии комплексного развития территорий соберет
                                    экспертное сообщество и реальные кейсы на примере которых будут рассмотрены вопросы
                                    территориального планирования, земельного администрирования, технического
                                    регулирования
                                    и деятельности по улучшению бизнес-климата
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/default.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Цифровизация транспорта 2021. Процесс трансформации: оценка и
                                    перспективы</h5>
                                <p class="card-text">
                                    Лидеры отрасли уже реализуют свои собственные стратегии и внедряют
                                    новые бизнес-модели на основе цифровых технологий.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/default.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">МАСТЕР - КЛАСС "ОСНОВЫ ИНВЕСТИЦИОННОЙ ГРАМОТНОСТИ В 21 ВЕКЕ" от
                                    Rocket University</h5>
                                <p class="card-text">
                                    Погружение в мир современных финансов. Инструменты инвестиций. Игра - симуляция
                                    работы
                                    инвестиционного аналитика
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/default.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Digital Transformation Day 2021</h5>
                                <p class="card-text">
                                    В ходе конференции предлагается обсудить следующий круг вопросов:
                                    Цифровая трансформация бизнеса крупной компании как комплексный взгляд на сложную
                                    многоаспектную структуру деятельности.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/default.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">ODSC APAC Virtual Conference 2021</h5>
                                <p class="card-text">
                                    ODSC APAC Virtual Conference 2021 is one of the largest applied data
                                    science conferences. Our speakers include core contributors to many open source
                                    libraries and languages.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/default.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">ChipEXPO-2021</h5>
                                <p class="card-text">
                                    Выставка включена в план официальных выставочных мероприятий
                                    Министерства промышленности и торговли Российской Федерации.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/default.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Мастер-класс по личностному росту на тему: "Мотивация в работе с
                                    командой"</h5>
                                <p class="card-text">
                                    Обучающее мероприятие, направленное на разработку общественных
                                    инициатив участников проекта, посредством образовательной составляющей,
                                    подкрепленной
                                    ключевыми навыками и практическими приемами.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    </main>
</template>

<script>
    import Slider from "@/components/Slider";
    import ChatBoard from "@/components/ChatBoard";
    import SearchForm from "@/components/SearchForm";
    import AnswersBlock from "@/components/AnswersBlock";
    import FeaturesBlock from "@/components/FeaturesBlock";

    export default {
        name: "HomeS",
        components: {
            Slider,
            ChatBoard,
            SearchForm,
            AnswersBlock,
            FeaturesBlock,
        },
        data() {
            return {
                inputText: '',
                replics: [
                    {id: 1, author: "bot", content: "Я - робот Василий. Давайте я помогу Вам с поиском."},
                    // {id: 2, author: "user", content: "Найди слово охота"},
                    // {id: 3, author: "bot", content: "Вот что найдено по слову"},
                    // {id: 4, author: "user", content: "А теперь рыбалка",},
                    // {id: 5, author: "bot", content: "К сожалению, ничего не найдено",},
                ],
                faq: [
                    {
                        id: 1, keywords: ['covid', 'ковид', 'корона'], answers: [
                            {content: 'Запись на вакцинацию', link: 'https://google.com'},
                            {content: 'Сертификат вакцинированного', link: 'https://ya.ru'},
                            {content: 'Мои QR-коды', link: 'https://ya.ru'}
                        ]
                    },
                    {
                        id: 2, keywords: ['спорт'], answers: [
                            {content: 'Присвоение спортивных разрядов', link: 'https://google.com'},
                            {
                                content: 'Присвоение квалификационных категорий спортивных судей',
                                link: 'https://google.com'
                            },
                            {
                                content: 'Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации',
                                link: 'https://google.com'
                            },
                        ]
                    },
                    {
                        id: 3, keywords: ['грант'], answers: [
                            {content: 'Грант для ученых', link: 'https://google.com'},
                            {content: 'Грант для медиков', link: 'https://ya.ru'},
                            {content: 'Грант для бизнеса', link: 'https://ya.ru'}
                        ]
                    },

                ],
                chatIsActive: false
            }
        },
        computed: {
            replicsList: function () {
                if (this.chatIsActive) {
                    return this.replics;
                } else {
                    return this.replics.filter(item => item.id === 1)
                }
            }
        },

        methods: {
            focusInput() {
                this.chatIsActive = true
            },
            closeChat() {
                this.inputText = '';
                if (this.chatIsActive) {
                    this.chatIsActive = !this.chatIsActive
                }
            },
            enterQuestion(question) {
                this.inputText = question;
                this.chatIsActive = true;
            },
            addQuest(inputValue) {
                let quest = {
                    id: this.replics.length + 1, author: "user", content: inputValue
                };
                this.replics.push(quest);
                let answer;
                let answers;
                this.faq.forEach(function (item) {
                    item.keywords.forEach(function (i) {
                        if (inputValue.trim().toLowerCase() === i) {
                            answers = item.answers;
                        }
                    });
                });
                if (answers) {
                    let links = answers.map(function (someth) {
                        let ans = {link: someth.link, content: someth.content};
                        return ans;
                    });
                    answer = {
                        author: "bot", content: '', findedAnswers: links
                    };
                } else {
                    answer = {
                        author: "bot", content: 'Извините, я ничего не нашел'
                    };
                }
                answer.id = this.replics.length + 1;
                this.replics.push(answer);
            },
            chatActive() {
                return this.replics.length > 1 && this.chatIsActive
            },
        }
    }
</script>

<style lang="scss" scoped>


    .content {

        .bot {
            background-color: #b3c3e6;
        }

        .advantages {

            .advantage__image {
                padding: 1rem;
                width: 100%;
                border-radius: 50%;
            }

            .advantage__comment {
                padding: 1rem;
            }
        }

        .news {
            .row {
                margin: -0.5em -0.25em 0;
            }

            .row > * {
                margin-top: 0.5em;
                padding-left: 0.25em;
                padding-right: 0.25em;
            }
        }

        .news-page {

            .card {

                .card-body {
                    display: flex;
                    flex-direction: column;

                    .stretched-link {
                        text-decoration: none;
                        color: #212529;

                        .card-title {
                            text-decoration: none;
                            color: #212529;
                        }
                    }

                    .card-text {
                        flex: 1;
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
                        color: #6c757d;

                        .news-source {
                            display: flex;
                            align-items: center;

                            .news-source__logo {
                                height: 24px;
                                margin-right: 0.5rem;
                                border-radius: 0.125rem;
                            }

                            .news-source__link {
                                text-decoration: none;
                                color: #6c757d;
                            }
                        }
                    }
                }
            }

            .news-important {
                .card {
                    @media (min-width: 576px) {
                        max-height: 430px;
                    }

                    .card-body {

                        @media (min-width: 576px) {
                            height: 100%;
                            flex-wrap: wrap;
                            align-content: space-between;
                        }

                        .stretched-link {

                            @media (min-width: 576px) {
                                width: calc((100% - 2px - 2.5rem) / 2);
                            }
                        }

                        .card-text {
                            @media (min-width: 576px) {
                                width: calc((100% - 2px - 2.5rem) / 2);
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
                                width: calc((100% - 2px - 2.5rem) / 2);
                            }
                        }
                    }
                }
            }
        }

        .news-article {

            .news-article__author {
                height: 3rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem;
                color: #6c757d;

                .news-article-source {
                    height: 100%;

                    .news-source__logo {
                        height: 100%;
                        margin-right: 0.5rem;
                        border-radius: 0.25rem;
                    }

                    .news-source__link {
                        text-decoration: none;
                        color: #6c757d;
                    }
                }
            }

            .news-article__image_full-width {
                height: 15rem;
                display: flex;
                align-items: center;
                overflow: hidden;
                border-radius: 0.25rem;
                margin-bottom: 1rem;

                @media (min-width: 576px) {
                    height: 25rem;
                }

                @media (min-width: 768px) {
                    height: 25rem;
                }

                @media (min-width: 992px) {
                    height: 30rem;
                }

                @media (min-width: 1200px) {
                    height: 35rem;
                }

                @media (min-width: 1400px) {
                    height: 40rem;
                }

                .news-article__main-image {
                    width: 100%;
                }
            }

            .carousel {
                margin-bottom: 1rem;

                .carousel-inner {

                    .carousel-item {
                        height: 20rem;

                        img {
                            height: auto;
                            transform: translate(0, calc(-50% + 10rem));
                        }
                    }
                }
            }

            .news-article__tags {
                margin-bottom: 1rem;

                a {
                    margin-left: 1rem;
                }
            }

            .news-article__comments {
                margin-bottom: 1rem;
            }
        }


        .measures {

            .measure__card {

                .card-body {
                    display: flex;

                    .card-title {

                        a {
                            text-decoration: none;
                            color: #212529;
                        }
                    }
                }

                .card-footer {
                    display: flex;
                    justify-content: space-between;

                    .measure__owner__logo {
                        display: flex;
                        align-items: center;

                        .measure__owner__logo__image {
                            height: 38px;
                        }

                        .measure__owner__logo__text {
                            font-size: 0.75rem;
                        }
                    }

                    .measure__details {
                        display: flex;
                        align-items: center;

                        .measure__size {
                            font-size: 0.75rem;
                        }

                        .measure__web__accessibility {
                            height: 38px;
                        }

                        .btn {

                        }
                    }
                }
            }
        }

        .support {

            .support__header {

                .support__details {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .support__manual {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;

                        .support__manual__heading {

                        }
                    }
                }
            }

            .support__card {

                .support__card__header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .support__owner {

                        .support__owner__logo {
                            display: flex;
                            align-items: center;

                            img {
                                height: 38px;
                            }
                        }
                    }

                    .support__conditions {

                    }

                    .support__buttons {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;

                        img {
                            height: 38px;
                        }
                    }
                }

                .support__card__body {

                    .tab-content {
                        background-color: white;
                        border-radius: 0.25rem;
                    }
                }
            }

            .support__info__additional {
                ul {
                    background-color: white;
                    border-radius: 0.25rem;
                }
            }

            .support__contacts {

                .col-12 {
                    background-color: white;
                    border-radius: 0.25rem;
                }
            }

        }

        .profile {

            .profile__user__info {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;

                .profile__user__info__details {
                    display: flex;
                    align-items: center;

                    .profile__avatar {
                        height: 118px;
                        border-radius: 50%;
                    }
                }

            }

            .user__basic__info {

            }

            .term__block {
                display: flex;

                .term {
                    font-weight: bold;
                    width: 10rem;
                    overflow: hidden;

                    .dotted__line {
                        position: relative;

                        &::after {
                            content: "";
                            position: absolute;
                            bottom: 0.2rem;
                            margin-left: 0.5rem;
                            width: 100rem;
                            border-bottom: 0.1rem dotted rgba(0, 0, 0, 0.2);
                        }
                    }
                }
            }

            .request__card {

                .card-body {

                    a {
                        text-decoration: none;
                        color: #212529;
                    }
                }

                .request__card__footer {
                    align-items: center;
                    justify-content: space-between;
                    @media (min-width: 768px) {
                        display: flex;
                    }

                    p {
                        margin-bottom: 0;
                    }
                }
            }
        }



    }
</style>
