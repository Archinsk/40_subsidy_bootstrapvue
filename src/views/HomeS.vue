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
                    <div class="d-flex justify-content-between align-items-center">
                        <h4 class="news__header text-center py-2">Новости</h4>
                        <router-link to="/news">Больше новостей</router-link>
                    </div>
                    <NewsCardsList :newsPack="singleNewsJson" count="3" :everythingLittle="true"></NewsCardsList>
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
    import Advantages from "@/components/Advantages";
    import NewsCardsList from "@/components/NewsCardsList";
    import Footer from "@/components/Footer";

    export default {

        name: "HomeS",

        components: {
            HeaderOffcavas,
            Slider,
            Chat,
            AnswersBlock2,
            Advantages,
            // FeaturesBlock,
            NewsCardsList,
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
                singleNewsJson: [
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
                ]
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

    .content {

        .bot {
            overflow: hidden;
            background-color: $back-color;
        }
    }
</style>
