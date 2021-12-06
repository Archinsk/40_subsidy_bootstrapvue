<template>
    <div>
        <HeaderOffcavas/>

    <main class="content">

        <section class="measures">
            <div class="measures__wrapper container">
                <h4 class="measures__heading">Меры поддержки <span class="badge badge-primary">160</span></h4>
                <MeasuresCardsList :measuresPack="xhrResponse" count="10"></MeasuresCardsList>
                <ItemsListFooter @change-pageSize="changePageSize($event)" @change-page="changePage($event)"></ItemsListFooter>
            </div>
        </section>


    </main>

        <Footer/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import MeasuresCardsList from "@/components/MeasuresCardsList";
    import ItemsListFooter from "@/components/ItemsListFooter";
    import Footer from "@/components/Footer";

    export default {
        name: "Measures",

        components: {
            HeaderOffcavas,
            MeasuresCardsList,
            ItemsListFooter,
            Footer,
        },

        data() {
            return {
                xhrResponse: [],
                page: 1,
                pageSize: 10,
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
            changeItemsCount () {
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
