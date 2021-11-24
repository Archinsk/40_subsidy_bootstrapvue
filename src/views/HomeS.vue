<template>
    <div>
        <HeaderOffcavas v-show="!chatIsActive"/>

        <main class="content">

            <section v-show="!chatIsActive" class="slider">
                <Slider></Slider>
            </section>

            <section class="bot">
                <Chat :isActive="chatIsActive" :isFlyingUp="flyingRobotUp" :isFlyingDown="flyingRobotDown"
                      :messages="replicsList" @close-chat="closeChat" :quest="inputText"
                      @focus-input="focusInput" @add-quest="addQuest($event)"></Chat>
                <AnswersBlock2 v-show="!chatIsActive" @quick-question="enterQuestion($event)"></AnswersBlock2>
                <!--                <FeaturesBlock v-show="!chatIsActive"></FeaturesBlock>-->
            </section>

            <section v-show="!chatIsActive" class="advantages">
                <Advantages></Advantages>
            </section>

            <section v-show="!chatIsActive" class="news mb-2">
                <div class="news__wrapper container">
                    <h2 class="news__header text-center py-2">Новости</h2>

                    <div class="row row-news row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        <div class="col">
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
                    </div>

                </div>
            </section>

        </main>
        <Footer v-show="!chatIsActive"/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import Slider from "@/components/Slider";
    import Chat from "@/components/Chat";
    import AnswersBlock2 from "@/components/AnswersBlock2";
    // import FeaturesBlock from "@/components/FeaturesBlock";
    import Footer from "@/components/Footer";
    import Advantages from "@/components/Advantages";

    export default {

        name: "HomeS",

        components: {
            HeaderOffcavas,
            Slider,
            Chat,
            AnswersBlock2,
            Advantages,
            // FeaturesBlock,
            Footer,
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
                        id: 3, keywords: ['грант', 'гранты'], answers: [
                            {
                                content: 'Гранты в форме субсидий в сфере научной и инновационной деятельности',
                                link: './subsidyinfo1'
                            },
                            {
                                content: 'Гранты в форме субсидии на развитие инновационного проекта',
                                link: './subsidyinfo2'
                            },
                            {
                                content: 'Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных сферах экономики',
                                link: './subsidyinfo3'
                            }
                        ]
                    },
                    {
                        id: 4, keywords: ['субсидия', 'субсидии'], answers: [
                            {
                                content: 'Гранты в форме субсидий в сфере научной и инновационной деятельности',
                                link: './subsidyinfo1'
                            },
                            {
                                content: 'Гранты в форме субсидии на развитие инновационного проекта',
                                link: './subsidyinfo2'
                            },
                        ]
                    },
                    {
                        id: 5, keywords: ['инновация', 'инновации'], answers: [
                            {
                                content: 'Гранты в форме субсидий в сфере научной и инновационной деятельности',
                                link: './subsidyinfo1'
                            },
                            {
                                content: 'Гранты в форме субсидии на развитие инновационного проекта',
                                link: './subsidyinfo2'
                            },
                        ]
                    },
                    {
                        id: 6, keywords: ['наука'], answers: [
                            {
                                content: 'Гранты в форме субсидий в сфере научной и инновационной деятельности',
                                link: './subsidyinfo1'
                            },
                        ]
                    },

                ],
                chatIsActive: false,
                flyingRobotUp: false,
                flyingRobotDown: false,
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
                this.chatIsActive = true;
                setTimeout(this.fly, 1000);
            },
            fly() {
                this.flyingRobotUp = false;
                this.flyingRobotDown = true;
            },
            dontfly() {
                this.flyingRobotUp = false;
                this.chatIsActive = !this.chatIsActive
            },
            closeChat() {
                this.inputText = '';
                if (this.chatIsActive) {
                    this.flyingRobotUp = true;
                    this.flyingRobotDown = false;
                    setTimeout(this.dontfly, 1000);
                }
            },
            enterQuestion(question) {
                this.inputText = question;
                this.chatIsActive = true;
                setTimeout(this.fly, 1000);
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
                        author: "bot", content: 'Извините, я ничего не нашёл.'
                        // , я ничего не нашел
                    };
                }
                answer.id = this.replics.length + 1;
                this.replics.push(answer);
            },
            chatActive() {
                return this.replics.length > 1 && this.chatIsActive
            },
        },

    }
</script>

<style lang="scss" scoped>
    $back-color: #6688CC;
    $gap: 0.5rem;
    $text-color: #212529;
    $muted-color: #6c757d;

    .content {

        .bot {
            overflow: hidden;
            background-color: $back-color;
        }

        .advantages {


        }

        .row-news {
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

        /*.news {
            .row {
                margin: -0.5em -0.25em 0;
            }

            .row > * {
                margin-top: 0.5em;
                padding-left: 0.25em;
                padding-right: 0.25em;
            }
        }*/

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
