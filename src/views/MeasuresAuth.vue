<template>
    <div>
        <section v-show="!chatIsActive" class="measures">
            <div class="measures__wrapper">
                <h4 class="measures__heading text-center">Меры поддержки <span class="badge badge-primary">{{ totalItems }}</span>
                </h4>
                <div class="row justify-content-center mb-3">
                    <div class="col-2">
                        <div class="row">
                            <div class="btn btn-outline-primary col-12 mb-2" @click="selectEsia">Подобрать с учетом
                                ЕСИА
                            </div>
                            <div class="btn btn-outline-primary col-12 mb-2"
                                 @click="chatActivation"
                            >Подобрать с помощью чат-бота
                            </div>
                        </div>
                        <FiltersList :fd="filters"></FiltersList>
                        <div class="row">
                            <div class="col mb-3">
                                <div class="btn btn-primary btn-block" @click="scenarioFilter">Применить</div>
                            </div>
                            <div class="col mb-3">
                                <div class="btn btn-outline-primary btn-block" @click="clearFilter">Очистить</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
<!--                        <MeasuresCardsListExample :measuresPack="xhrResponse" count="10"></MeasuresCardsListExample>-->
                        <MeasuresCardsList :measuresPack="xhrResponse" count="10"></MeasuresCardsList>
                        <ItemsListFooter
                                v-show="totalItems>pageSize"
                                @change-pageSize="changePageSize($event)"
                                @change-page="changePage($event)"></ItemsListFooter>
                    </div>
                </div>
            </div>
        </section>

<!--        <section v-show="chatIsActive" class="bot">-->
<!--            <Chat isActive="true"-->
<!--                  isFlyingDown="true"-->
<!--                  :messages="replicsList"-->
<!--                  :quest="inputText"-->
<!--                  @close-chat="chatDisactivation"-->
<!--                  @focus-input="focusInput"-->
<!--                  @add-quest="addQuest($event)"-->
<!--            ></Chat>-->
<!--        </section>-->
    </div>
</template>

<script>
    // import MeasuresCardsListExample from "@/components/MeasuresCardsListExample";
    import MeasuresCardsList from "@/components/MeasuresCardsList";
    import FiltersList from "@/components/FiltersList";
    import ItemsListFooter from "@/components/ItemsListFooter";
    // import Chat from "@/components/Chat";

    export default {
        name: "Measures",

        components: {
            // MeasuresCardsListExample,
            MeasuresCardsList,
            FiltersList,
            ItemsListFooter,
            // Chat,
        },

        data() {
            return {
                xhrResponse: [],
                page: 1,
                pageSize: 10,
                totalItems: 160,
                scenario: 0,
                chatIsActive: false,
                inputText: '',
                replics: [
                    {id: 1, author: "bot", content: "Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки."},
                    {id: 2, author: "bot", content: "Укажите, какой объем денежных средств вам требуется?"},
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
                    {
                        id: 7, keywords: ['20000000', '20000000 руб', '20 000 000', '20 000 000 руб',], answers: [
                            {
                                content: 'Укажите срок оказания поддержки в формате «ДД.ММ.ГГГГ - ДД.ММ.ГГГГ»',
                                link: ''
                            },
                        ]
                    },
                    {
                        id: 7, keywords: ['01.01.2022-31.12.2022'], answers: [
                            {
                                content: 'Субсидия на возмещение части затрат, направленных на проведение комплекса агротехнологических работ, повышение уровня экологической безопасности сельскохозяйственного производства, а также на повышение плодородия и качества почв',
                                link: './subsidyinfo5'
                            },
                            {
                                content: 'Субсидия на возмещение затрат, понесенных в текущем финансовом году, связанных с закупкой сельскохозяйственной техники',
                                link: './subsidyinfo5'
                            },
                        ]
                    },
                ],
                filters: [
                    {
                        title: 'Отрасль экономики:',
                        selected: [], // Must be an array reference!
                        options: [
                            {text: 'Промышленность', value: '1'},
                            {text: 'Сельское хозяйство', value: '2'},
                            {text: 'Строительство', value: '3'},
                            {text: 'Транспорт', value: '4'},
                            {text: 'Связь', value: '5'},
                            {text: 'Торговля и общественное питание', value: '6'},
                            {text: 'Культура и искусство', value: '7'},
                            {text: 'Информационно-вычислительное обслуживание', value: '8'},
                            {text: 'Наука и научное обслуживание', value: '9'},
                        ]
                    },
                    {
                        title: 'Форма/вид поддержки:',
                        selected: [], // Must be an array reference!
                        options: [
                            {text: 'Финансовая', value: '1'},
                            {text: 'Информационная', value: '2'},
                            {text: 'Образовательная', value: '3'},
                            {text: 'Консультационная', value: '4'},
                            {text: 'Имущественная', value: '5'},
                            {text: 'Инновационная', value: '6'},
                        ]
                    },
                    {
                        title: 'Вид получателя:',
                        selected: [], // Must be an array reference!
                        options: [
                            {text: 'ИП', value: '1'},
                            {text: 'ЮЛ', value: '2'},
                        ]
                    },
                    {
                        title: 'Размер поддержки:',
                        selected: [], // Must be an array reference!
                        options: [
                            {text: 'до 100 т.р.', value: '1'},
                            {text: 'от 500 т.р. до 1 млн.р.', value: '2'},
                            {text: 'от 1 млн.руб до 10 млн.р.', value: '3'},
                            {text: 'от 10 млн.руб до 20 млн.р.', value: '4'},
                        ]
                    },
                    {
                        title: 'Срок оказания поддержки:',
                        selected: [], // Must be an array reference!
                        options: [
                            {text: 'до 1 месяца', value: '1'},
                            {text: 'от 1 до 3 месяцев', value: '2'},
                            {text: 'от 3 до 6 месяцев', value: '3'},
                            {text: 'от 6 месяцев до 1 года', value: '4'},
                            {text: 'от 1 года до 3 лет', value: '5'},
                        ]
                    },
                    {
                        title: 'Категория получателя:',
                        selected: [], // Must be an array reference!
                        options: [
                            {text: 'микро', value: '1'},
                            {text: 'малые', value: '2'},
                            {text: 'средние', value: '3'},
                        ]
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
            changePageSize(itemsPerPage) {
                console.log(itemsPerPage);
                this.pageSize = itemsPerPage;
                this.changeItemsCount();
            },
            changePage(page) {
                console.log(page);
                this.page = page;
                this.changeItemsCount();
            },
            changeItemsCount() {
                console.log('Апдейт');
                const xhr = new XMLHttpRequest();
                let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page=" + this.page + "&pageSize=" + this.pageSize;
                xhr.open("GET", request);
                xhr.responseType = 'json';
                xhr.onload = () => {
                    console.log(xhr.response);
                    this.xhrResponse = xhr.response;
                };
                xhr.send();
            },
            selectEsia() {
                console.log('Начинаю поиск на основе ЕСИА');
                this.filters[0].selected.push(2);
                this.filters[2].selected.push(2);
                this.filters[5].selected.push(3);
                this.scenario = 2;
            },
            scenarioFilter() {
                console.log('Начинаю фильтрацию по сценарию ' + this.scenario);
                const xhr = new XMLHttpRequest();
                let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/scenario.php?scenario=" + this.scenario;
                xhr.open("GET", request);
                xhr.responseType = 'json';
                xhr.onload = () => {
                    console.log(xhr.response);
                    this.xhrResponse = xhr.response;
                    this.totalItems = 2;
                };
                xhr.send();
            },
            clearFilter() {
                this.filters.forEach(function (item) {
                    item.selected = [];
                });
                const xhr = new XMLHttpRequest();
                let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page=" + this.page + "&pageSize=" + this.pageSize;
                xhr.open("GET", request);
                xhr.responseType = 'json';
                xhr.onload = () => {
                    console.log(xhr.response);
                    this.xhrResponse = xhr.response;
                    this.totalItems = 160;
                };
                xhr.send();
            },
            chatActivation() {
                this.chatIsActive = true;
            },
            chatDisactivation() {
                this.chatIsActive = false;
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
        },

        mounted: function () {
            console.log('Смонтирована страница MeasuresAuth');
            const xhr = new XMLHttpRequest();
            let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page=" + this.page + "&pageSize=" + this.pageSize;
            xhr.open("GET", request);
            xhr.responseType = 'json';
            xhr.onload = () => {
                console.log("Получен список с услугами c d-skills");
                console.log(xhr.response);
                this.xhrResponse = xhr.response;
            };
            xhr.send();
        },

        /*updated: function () {
            console.log('Апдейт');
            const xhr = new XMLHttpRequest();
            let request = "https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page=" + this.page + "&pageSize=" + this.pageSize;
            xhr.open("GET", request);
            xhr.responseType = 'json';
            xhr.onload = () => {
                console.log(xhr.response);
                this.xhrResponse = xhr.response;
            }
            xhr.send();
        },*/
    }

</script>

<style lang="scss" scoped>
    $gap: 1rem;
    $basic-color: var(--primary);
    $text-color: #212529;
    $support-color: grey;
    $passive-color: #e4e4e4;
    $active-color: #fff;
    $back-color: #6688CC;

    .content {

        .bot {
            overflow: hidden;
            background-color: $back-color;
        }
    }

    .measures {

        .measures__heading {
            margin: $gap 0;
        }

        a {
            text-decoration: none;
        }

        .measure__card {
            padding: $gap 0 0;
            margin-bottom: $gap;

            &:hover {
                box-shadow: 0 4px 20px rgb(0 46 69 / 10%);
            }

            .card-body {
                justify-content: space-between;
                margin: 0;
                padding: 0;

                & > * {
                    margin-bottom: $gap;
                }

                .card-title {

                    a {
                        text-decoration: none;
                        color: #212529;

                        span {
                            margin-right: $gap/2;
                        }
                    }
                }

                .card-text {
                    color: $support-color;
                    text-align: left;

                    @media (min-width: 768px) {
                        text-align: right;
                    }

                    b {
                        color: $text-color;
                    }
                }
            }

            hr {
                margin-top: 0;
            }

            .card-footer {
                justify-content: space-between;
                margin: 0;
                padding: 0;
                border: none;

                & > * {
                    margin-bottom: $gap;
                }

                .measure__owner__logo {
                    display: flex;

                    .measure__owner__logo__image {
                        height: 38px;
                        margin-right: $gap/2;
                        margin-top: $gap/2;
                    }

                    .measure__owner__logo__text {

                        .logo__header__comment {
                            color: $support-color;
                        }

                        .logo__name {
                            color: $text-color;
                            font-weight: bolder;
                        }
                    }
                }

                .measure__details {

                    .measure__size {
                        text-align: left;

                        @media (min-width: 768px) {
                            text-align: right;
                        }

                        .measure__size__header {
                            color: $support-color;
                        }

                        .measure__size__value {
                            color: $text-color;
                            font-weight: bolder;
                        }
                    }


                }

                .measure__buttons {
                    display: flex;
                    align-items: start;

                    @media (min-width: 992px) {
                        justify-content: flex-end;
                    }

                    .measure__web__accessibility {
                        height: 38px;
                        border: 1px solid $basic-color;
                        border-radius: 0.25rem;
                        margin-right: $gap/2;
                    }
                }
            }
        }
    }

</style>
