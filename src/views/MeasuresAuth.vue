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
                        <MeasuresCardsList :measuresPack="xhrResponse" count="10"></MeasuresCardsList>
                        <ItemsListFooter
                                v-show="totalItems>pageSize"
                                @change-pageSize="changePageSize($event)"
                                @change-page="changePage($event)"></ItemsListFooter>
                    </div>
                </div>
            </div>
        </section>

        <section v-show="chatIsActive" class="bot">
            <Chat isActive="true"
                  isFlyingDown="true"
                  :messages="replicsList"
                  :quest="inputText"
                  @close-chat="chatDisactivation"
                  @focus-input="focusInput"
                  @add-quest="addQuest($event)"
            ></Chat>
        </section>
    </div>
</template>

<script>
    import MeasuresCardsList from "@/components/MeasuresCardsList";
    import FiltersList from "@/components/FiltersList";
    import ItemsListFooter from "@/components/ItemsListFooter";
    import Chat from "@/components/Chat";

    export default {
        name: "Measures",

        components: {
            MeasuresCardsList,
            FiltersList,
            ItemsListFooter,
            Chat,
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
            console.log('Смонтировано');
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

    /*a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Lato;src:url(https://esia.gosuslugi.ru/login/Lato-Regular.75614cfcfedd509b1f7a.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Lato;src:url(https://esia.gosuslugi.ru/login/Lato-Bold.39775d377afbc753c1d1.woff2) format("woff2");font-weight:600;font-style:normal;font-display:swap}.mt-0{margin-top:0}.mb-0{margin-bottom:0}.mt-4{margin-top:4px}.mb-4{margin-bottom:4px}.mt-8{margin-top:8px}.mb-8{margin-bottom:8px}.mt-12{margin-top:12px}.mb-12{margin-bottom:12px}.mt-16{margin-top:16px}.mb-16{margin-bottom:16px}.mt-20{margin-top:20px}.mb-20{margin-bottom:20px}.mt-24{margin-top:24px}.mb-24{margin-bottom:24px}.mt-28{margin-top:28px}.mb-28{margin-bottom:28px}.mt-32{margin-top:32px}.mb-32{margin-bottom:32px}.mt-36{margin-top:36px}.mb-36{margin-bottom:36px}.mt-40{margin-top:40px}.mb-40{margin-bottom:40px}.mt-44{margin-top:44px}.mb-44{margin-bottom:44px}.mt-48{margin-top:48px}.mb-48{margin-bottom:48px}.mt-52{margin-top:52px}.mb-52{margin-bottom:52px}.mt-56{margin-top:56px}.mb-56{margin-bottom:56px}.mt-60{margin-top:60px}.mb-60{margin-bottom:60px}.mt-64{margin-top:64px}.mb-64{margin-bottom:64px}.mt-68{margin-top:68px}.mb-68{margin-bottom:68px}.mt-72{margin-top:72px}.mb-72{margin-bottom:72px}.mt-76{margin-top:76px}.mb-76{margin-bottom:76px}.mt-80{margin-top:80px}.mb-80{margin-bottom:80px}@media (min-width:768px){.mt-md-0{margin-top:0}.mb-md-0{margin-bottom:0}.mt-md-4{margin-top:4px}.mb-md-4{margin-bottom:4px}.mt-md-8{margin-top:8px}.mb-md-8{margin-bottom:8px}.mt-md-12{margin-top:12px}.mb-md-12{margin-bottom:12px}.mt-md-16{margin-top:16px}.mb-md-16{margin-bottom:16px}.mt-md-20{margin-top:20px}.mb-md-20{margin-bottom:20px}.mt-md-24{margin-top:24px}.mb-md-24{margin-bottom:24px}.mt-md-28{margin-top:28px}.mb-md-28{margin-bottom:28px}.mt-md-32{margin-top:32px}.mb-md-32{margin-bottom:32px}.mt-md-36{margin-top:36px}.mb-md-36{margin-bottom:36px}.mt-md-40{margin-top:40px}.mb-md-40{margin-bottom:40px}.mt-md-44{margin-top:44px}.mb-md-44{margin-bottom:44px}.mt-md-48{margin-top:48px}.mb-md-48{margin-bottom:48px}.mt-md-52{margin-top:52px}.mb-md-52{margin-bottom:52px}.mt-md-56{margin-top:56px}.mb-md-56{margin-bottom:56px}.mt-md-60{margin-top:60px}.mb-md-60{margin-bottom:60px}.mt-md-64{margin-top:64px}.mb-md-64{margin-bottom:64px}.mt-md-68{margin-top:68px}.mb-md-68{margin-bottom:68px}.mt-md-72{margin-top:72px}.mb-md-72{margin-bottom:72px}.mt-md-76{margin-top:76px}.mb-md-76{margin-bottom:76px}.mt-md-80{margin-top:80px}.mb-md-80{margin-bottom:80px}}@media (min-width:1140px){.mt-lg-0{margin-top:0}.mb-lg-0{margin-bottom:0}.mt-lg-4{margin-top:4px}.mb-lg-4{margin-bottom:4px}.mt-lg-8{margin-top:8px}.mb-lg-8{margin-bottom:8px}.mt-lg-12{margin-top:12px}.mb-lg-12{margin-bottom:12px}.mt-lg-16{margin-top:16px}.mb-lg-16{margin-bottom:16px}.mt-lg-20{margin-top:20px}.mb-lg-20{margin-bottom:20px}.mt-lg-24{margin-top:24px}.mb-lg-24{margin-bottom:24px}.mt-lg-28{margin-top:28px}.mb-lg-28{margin-bottom:28px}.mt-lg-32{margin-top:32px}.mb-lg-32{margin-bottom:32px}.mt-lg-36{margin-top:36px}.mb-lg-36{margin-bottom:36px}.mt-lg-40{margin-top:40px}.mb-lg-40{margin-bottom:40px}.mt-lg-44{margin-top:44px}.mb-lg-44{margin-bottom:44px}.mt-lg-48{margin-top:48px}.mb-lg-48{margin-bottom:48px}.mt-lg-52{margin-top:52px}.mb-lg-52{margin-bottom:52px}.mt-lg-56{margin-top:56px}.mb-lg-56{margin-bottom:56px}.mt-lg-60{margin-top:60px}.mb-lg-60{margin-bottom:60px}.mt-lg-64{margin-top:64px}.mb-lg-64{margin-bottom:64px}.mt-lg-68{margin-top:68px}.mb-lg-68{margin-bottom:68px}.mt-lg-72{margin-top:72px}.mb-lg-72{margin-bottom:72px}.mt-lg-76{margin-top:76px}.mb-lg-76{margin-bottom:76px}.mt-lg-80{margin-top:80px}.mb-lg-80{margin-bottom:80px}}a{color:#0d4cd3;cursor:pointer}a:hover{color:#1d5deb}.small-inner{position:relative;max-width:384px;margin-left:auto;margin-right:auto}.plain-list li{position:relative;padding-left:20px}.plain-list li:before{content:"";position:absolute;top:8px;left:0;width:8px;height:8px;border-radius:50%;background:#0d4cd3}.error-sign{display:inline-block;width:80px;height:80px;background:url(https://roles.gosuslugi.ru/error-cross.2463f14448c6a58be51c.svg) no-repeat 50%;background-size:100%}.error-sign.exclamation{background:url(https://roles.gosuslugi.ru/error-exclamation.9d49d00ebebda6b0e17e.svg) no-repeat 50%;background-size:100%}.pointer{cursor:pointer}.hide{display:none}.block,.show{display:block}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.flex-container{display:flex}.flex-column{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.flex-order-last{order:1}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.align-items-center{align-items:center}.align-self-center{align-self:center}.align-self-end{align-self:end}.flex-1{flex:1}.flex-0{flex:0 0 auto}.flex-1-0{flex:1 0 auto}@media (min-width:768px){.hide-md{display:none}.block-md,.show-md{display:block}.text-center-md{text-align:center}.text-left-md{text-align:left}.text-right-md{text-align:right}.flex-container-md{display:flex}.flex-column-md{flex-direction:column}.flex-row-md{flex-direction:row}.flex-wrap-md{flex-wrap:wrap}.flex-order-last-md{order:1}.justify-end-md{justify-content:flex-end}.justify-start-md{justify-content:flex-start}.justify-center-md{justify-content:center}.justify-between-md{justify-content:space-between}.justify-around-md{justify-content:space-around}.align-items-center-md{align-items:center}.align-self-center-md{align-self:center}.align-self-end-md{align-self:end}.flex-1-md{flex:1}.flex-0-md{flex:0 0 auto}.flex-1-0-md{flex:1 0 auto}}@media (min-width:1140px){.hide-lg{display:none}.block-lg,.show-lg{display:block}.text-center-lg{text-align:center}.text-left-lg{text-align:left}.text-right-lg{text-align:right}.flex-container-lg{display:flex}.flex-column-lg{flex-direction:column}.flex-row-lg{flex-direction:row}.flex-wrap-lg{flex-wrap:wrap}.flex-order-last-lg{order:1}.justify-end-lg{justify-content:flex-end}.justify-start-lg{justify-content:flex-start}.justify-center-lg{justify-content:center}.justify-between-lg{justify-content:space-between}.justify-around-lg{justify-content:space-around}.align-items-center-lg{align-items:center}.align-self-center-lg{align-self:center}.align-self-end-lg{align-self:end}.flex-1-lg{flex:1}.flex-0-lg{flex:0 0 auto}.flex-1-0-lg{flex:1 0 auto}}html.modal-opened{overflow:hidden}.modal-overlay{position:fixed;top:0;left:0;min-width:100%;min-height:100%;background:rgba(11,31,51,.62);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:background .25s;z-index:2147473648}.popup-wrapper{position:fixed;z-index:2147473649;top:0;left:0;width:100%;height:100%;overflow-y:auto}.popup-scroll{width:100%;min-height:100%}.popup{position:relative;padding:32px 24px;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 12px 32px rgba(11,31,51,.18)}.popup .close{position:absolute;top:24px;right:24px;width:24px;height:24px}.popup .close:after,.popup .close:before{content:"";position:absolute;top:2px;left:11px;width:2px;height:20px;background:#0b40b3;transform:rotate(45deg)}.popup .close:before{transform:rotate(45deg)}.popup .close:after{transform:rotate(-45deg)}.popup .title{padding:0 40px 26px 0;border-bottom:1px solid #99b1e6}@media (min-width:768px){html.modal-opened{padding-right:17px}.popup-wrapper{overflow-x:hidden}.popup-wrapper.popup-wrapper-scroll{overflow-y:auto}.popup-scroll{position:absolute;overflow-y:visible;top:50%;left:50%;min-height:auto;max-height:100%;transform:translate3d(-50%,-50%,0)}.popup-scroll.active-scroll{top:0;max-height:none;transform:translate3d(-50%,0,0)}.popup{max-width:634px;padding:32px;margin:48px auto;border-radius:12px}.popup .close{top:36px;right:32px}}.form-container{padding:40px 24px;border-radius:12px;box-shadow:0 24px 48px rgba(230,235,245,.4);background:#fff}.form-container,.form-control,.input-control{position:relative}.input-control .input-label{position:absolute;top:14px;left:16px;font-size:16px;line-height:24px;color:#66727f;pointer-events:none}.input-control .plain-input.filled+.input-label,.input-control .plain-input:active+.input-label,.input-control .plain-input:focus+.input-label{top:5px;font-size:10px;line-height:18px}.input-control .plain-input:-webkit-autofill+.input-label{top:5px;font-size:10px;line-height:18px}#epgu-captcha input,.plain-input{width:100%;height:52px;padding:23px 16px 5px;border:0;border-radius:8px;font-size:18px;line-height:18px;background:#f5f7fa}#epgu-captcha input.no-label,.plain-input.no-label{padding:17px 16px}#epgu-captcha input:active,#epgu-captcha input:focus,.plain-input:active,.plain-input:focus{outline:none}#epgu-captcha input.invalid,.plain-input.invalid{border:1px solid #ee3f58}#epgu-captcha input::-ms-clear,#epgu-captcha input::-ms-reveal,.plain-input::-ms-clear,.plain-input::-ms-reveal{display:none}#epgu-captcha{background:#fff}#epgu-captcha input{padding:5px 16px}.plain-checkbox{position:absolute;top:0;left:0;opacity:0;width:0;height:0}.plain-checkbox+.checkbox-label{position:relative;display:inline-block;padding:0 0 0 36px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;line-height:24px}.plain-checkbox+.checkbox-label:before{content:"";position:absolute;top:0;left:0;width:20px;height:20px;border-radius:4px;border:2px solid #0d4cd3;background:#fff}.plain-checkbox+.checkbox-label:active:before,.plain-checkbox+.checkbox-label:focus:before,.plain-checkbox+.checkbox-label:hover:before{border:2px solid #1d5deb;background:#e5eaf5}.plain-checkbox:checked+.checkbox-label:before{background:#fff url(https://roles.gosuslugi.ru/checkbox.a8eaae3e09eb7d4662ed.svg) no-repeat 50%}.plain-checkbox:checked+.checkbox-label:active:before,.plain-checkbox:checked+.checkbox-label:focus:before,.plain-checkbox:checked+.checkbox-label:hover:before{background:#fff url(https://roles.gosuslugi.ru/checkbox-hover.2a46b8caaa6e3c8dbd38.svg) no-repeat 50%}.plain-radio{position:absolute;top:0;left:0;opacity:0;width:0;height:0}.plain-radio+.radio-label{position:relative;display:inline-block;padding:0 0 0 28px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;line-height:20px}.plain-radio+.radio-label:before{content:"";position:absolute;top:0;left:0;width:18px;height:18px;border-radius:50%;border:1px solid #0b40b3;background-color:#fff}.plain-radio+.radio-label:hover:before{background-color:#f5f8fa}.plain-radio+.radio-label:active:before,.plain-radio+.radio-label:focus:before{border-color:#002957}.plain-radio:checked+.radio-label:before{width:10px;height:10px;border-width:5px}.plain-button{display:inline-block;height:56px;border-radius:8px;border:none;padding:0 40px;font-size:16px;line-height:56px;color:#fff;background:#0d4cd3;cursor:pointer}.plain-button.no-padding{padding:0}.plain-button.small{height:52px;line-height:52px}.plain-button.wide{width:100%;text-align:center}.plain-button:focus,.plain-button:hover{color:#fff;background:#1d5deb;outline:none}.plain-button:active{color:#fff;background:#0b40b3;outline:none}.plain-button.white{border:2px solid #0d4cd3;color:#0d4cd3;background:#fff;line-height:52px}.plain-button.white:hover{border:2px solid #1d5deb;color:#1d5deb;background:#f5f7fa}.plain-button.white:active{border:2px solid #0b40b3;color:#0b40b3;background:#f5f7fa}.plain-button.white:disabled,.plain-button:disabled{border-color:transparent;color:#86909c;background-color:#e5eaf5;cursor:default}.error-label{margin-top:8px;font-size:14px;line-height:20px;color:#ee3f58}#epgu-captcha{display:flex;flex-direction:row-reverse;align-items:center}@media (min-width:768px){.form-container{padding:40px 32px}}.title-h1,.title-h2,.title-h3,.title-h4,.title-h5,.title-h6{font-family:Lato,Helvetica,Arial,sans-serif,-apple-system;font-weight:600;color:#0b1f33}.title-h1{font-size:28px;line-height:32px}.title-h2{font-size:26px;line-height:32px}.title-h3{font-size:24px;line-height:32px}.title-h4{font-size:20px;line-height:28px}.title-h5{font-size:18px;line-height:26px}.text-plain,.text-plain-small,.title-h6{font-size:16px;line-height:24px}.text-plain,.text-plain-small{font-family:Lato,Helvetica,Arial,sans-serif,-apple-system;color:#0b1f33}.text-plain-small{font-size:14px;line-height:20px}.text-helper{color:#66727f}.red{color:#ee3f58}.dark-blue{color:#16165f}.uppercase{text-transform:uppercase}*{box-sizing:border-box;font-family:Lato,Helvetica,Arial,sans-serif,-apple-system}html{height:100%;overflow-x:hidden;overflow-y:scroll}body{min-height:100%;margin-left:16px;margin-right:16px;color:#0b1f33;font-size:16px;line-height:24px;font-family:Lato,Helvetica,Arial,sans-serif,-apple-system;}a{text-decoration:none}b,strong{font-weight:700}@media (min-width:768px){body{margin-left:0;margin-right:0}}@media (min-width:1140px){body{position:relative}}

    .disclaimers[_ngcontent-bkq-c59]{margin-top:-48px}.disclaimer[_ngcontent-bkq-c59]{position:relative;max-width:384px;padding:16px 48px 16px 38px;margin-left:auto;margin-right:auto;border-radius:8px;background:#fff;box-shadow:0 6px 16px rgba(230,235,245,.8);word-wrap:break-word}.disclaimer[_ngcontent-bkq-c59]:before{content:"";position:absolute;top:16px;left:16px;width:6px;height:calc(100% - 32px);border-radius:8px;background:#fed13e}.disclaimer.warning[_ngcontent-bkq-c59]:before{background:#ff8a00}.disclaimer.error[_ngcontent-bkq-c59]:before{background:#ee3f58}.close[_ngcontent-bkq-c59]{position:absolute;top:16px;right:16px;width:16px;height:16px;background:url(https://roles.gosuslugi.ru/disclaimer-close.3450c89401d45530c672.svg) 100%;cursor:pointer}@media (min-width:1140px){.disclaimers[_ngcontent-bkq-c59]{position:fixed;z-index:4;bottom:24px;left:32px;margin-top:0}.disclaimer[_ngcontent-bkq-c59]{max-width:488px}}

    .logo[_ngcontent-bkq-c15]{display:block;width:193px;height:30px;margin:0 auto;font-size:0;background:url(https://roles.gosuslugi.ru/logo.d173a793363aa9157783.svg) no-repeat 0 0;background-size:100%}

    .banners[_ngcontent-bkq-c60]{margin:40px 0 0}.icon[_ngcontent-bkq-c60]{width:48px;height:48px}.banner[_ngcontent-bkq-c60]{position:relative;border-radius:12px;padding:24px;box-shadow:0 6px 16px rgba(230,235,245,.8);text-align:left;color:#3b3b3b;line-height:24px;background:#fff}.banner[_ngcontent-bkq-c60]   a[_ngcontent-bkq-c60]{letter-spacing:-.02em}.close[_ngcontent-bkq-c60]{position:absolute;right:16px;top:16px;width:20px;height:20px;background:url(https://roles.gosuslugi.ru/close.e02ea7ff7c33d6fb12e5.svg) 100% no-repeat;cursor:pointer}@media (min-width:1140px){.banners[_ngcontent-bkq-c60]{position:absolute;top:0;left:100%;width:280px;margin:0 0 0 40px}}

    .input-password[_ngcontent-fff-c53]{position:relative}.input-password[_ngcontent-fff-c53]   .toggle[_ngcontent-fff-c53]{position:absolute;top:14px;right:16px;width:24px;height:24px;cursor:pointer;background:url(https://roles.gosuslugi.ru/password-hidden.bba98513e4e34d6d5d48.svg) no-repeat 50%}.input-password[_ngcontent-fff-c53]   .toggle.show[_ngcontent-fff-c53]{background:url(https://roles.gosuslugi.ru/password-shown.0f2521147e93eae4d9da.svg) no-repeat 50%}.input-password[_ngcontent-fff-c53]   .plain-input[_ngcontent-fff-c53]{padding-right:56px}.tooltip[_ngcontent-fff-c53]{display:none}@media (min-width:1140px){.tooltip[_ngcontent-fff-c53]{display:block;position:absolute;z-index:1;top:0;left:100%;width:314px;padding:16px;margin:0 0 0 64px;border-left:4px solid #99b1e6;border-radius:4px 8px 8px 4px;box-shadow:0 24px 48px rgba(230,235,245,.4);background:#fff}.tooltip[_ngcontent-fff-c53]   .caption[_ngcontent-fff-c53]{font-size:16px;line-height:24px;color:#0b1f33;font-weight:600}.tooltip[_ngcontent-fff-c53]   .rule[_ngcontent-fff-c53]{font-size:14px;line-height:20px;color:#66727f}}*/
</style>
