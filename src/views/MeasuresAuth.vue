<template>
    <div>
        <HeaderOffcavas auth="true"/>

        <main class="content">

            <section class="measures">
                <div class="measures__wrapper">
                    <h4 class="measures__heading text-center">Меры поддержки <span class="badge badge-primary">160</span></h4>
                    <div class="row justify-content-center">
                        <div class="col-3">
                            <FiltersList :fd="filters"></FiltersList>
                        </div>
                        <div class="col-6">
                            <MeasuresCardsList :measuresPack="xhrResponse" count="10"></MeasuresCardsList>
                            <ItemsListFooter @change-pageSize="changePageSize($event)"
                                             @change-page="changePage($event)"></ItemsListFooter>
                        </div>
                    </div>
                </div>
            </section>


        </main>

        <Footer/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import MeasuresCardsList from "@/components/MeasuresCardsList";
    import FiltersList from "@/components/FiltersList";
    import ItemsListFooter from "@/components/ItemsListFooter";
    import Footer from "@/components/Footer";

    export default {
        name: "Measures",

        components: {
            HeaderOffcavas,
            MeasuresCardsList,
            FiltersList,
            ItemsListFooter,
            Footer,
        },

        data() {
            return {
                xhrResponse: [],
                page: 1,
                pageSize: 10,
                filters: [
                    {
                        title: 'Вид деятельности:',
                        selected: [1,2], // Must be an array reference!
                        options: [
                            {text: 'Лесоводство и лесозаготовки', value: '1'},
                            {text: 'Добыча угля', value: '2'},
                            {text: 'Производство одежды', value: '3'},
                            {text: 'Строительство зданий', value: '4'},
                            {text: 'Научные исследования и разработки', value: '5'},
                            {text: 'Деятельность общественных организаций', value: '6'},
                            {text: 'Производство мебели', value: '7'},
                            {text: 'Деятельность профессиональная научная и техническая прочая', value: '8'},
                            {text: 'Деятельность в области спорта, отдыха и развлечений', value: '9'},
                            {text: '10 – тип поддержки, который нам в итоге нужно найти', value: '10'}
                        ]
                    },
                    {
                        title: 'Форма/вид поддержки:',
                        selected: [4], // Must be an array reference!
                        options: [
                            {text: 'Финансовая поддержка', value: '1'},
                            {text: 'Информационная поддержка', value: '2'},
                            {text: 'Образовательная поддержка', value: '3'},
                            {text: 'Консультационная поддержка', value: '4'},
                            {text: 'Имущественная поддержка', value: '5'},
                            {text: 'Инновационная поддержка', value: '6'},
                        ]
                    },
                    {
                        title: 'Размер поддержки:',
                        selected: [2], // Must be an array reference!
                        options: [
                            {text: 'до 100 т.р.', value: '1'},
                            {text: 'от 100 т.р. до 500 т.р.', value: '2'},
                            {text: 'от 500 т.р. до 1 млн.р.', value: '3'},
                            {text: 'от 1 млн.руб до 3 млн.р.', value: '4'},
                            {text: 'от 3 млн.руб до 10 млн.р.', value: '5'},
                            {text: 'от 10 млн.руб до 50 млн.р.', value: '6'},
                            {text: 'от 50 млн.руб до 200 млн.р.', value: '7'},
                        ]
                    },
                    {
                        title: 'Срок оказания поддержки:',
                        selected: [2,3], // Must be an array reference!
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
                        selected: [2], // Must be an array reference!
                        options: [
                            {text: 'микро', value: '1'},
                            {text: 'малые', value: '2'},
                            {text: 'средние', value: '3'},
                        ]
                    },
                    {
                        title: 'Вид получателя:',
                        selected: [2], // Must be an array reference!
                        options: [
                            {text: 'ИП', value: '1'},
                            {text: 'ЮЛ', value: '2'},
                        ]
                    },
                ]
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
            }
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
