<template>
    <header class="header bg-light">
        <div class="header__wrapper container">
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="logo logo_left navbar-brand" href="https://yandex.ru">
                            <img src="@/assets/default.jpg" alt="" class="logo__image">
                            Агрегатор мер поддержки
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="d-flex gap-2">
                            <button class="Button btn btn-outline-secondary Button_icon-only-square d-lg-none"
                                    type="button" data-bs-toggle="offcanvas" data-bs-target="#sideBar"
                                    aria-controls="sideBar"><span class="Icon material-icons">menu</span></button>
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="sideBar"
                                 aria-labelledby="sideBarLabel" style="visibility: hidden;" aria-hidden="true">
                                <div class="offcanvas-header"><h5 class="offcanvas-title" id="offcanvasExampleLabel">
                                    Меню</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav list-group list-group-flush">
                                        <li class="nav-item list-group-item"><a href="#"
                                                                                class=" nav-link list-group-item-action">Программы</a>
                                        </li>
                                        <li class="nav-item list-group-item"><a href="#"
                                                                                class=" nav-link list-group-item-action">Новости</a>
                                        </li>
                                        <li class="nav-item list-group-item">
                                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                                <div class="accordion-item">
                                                    <div class="accordion-header" id="flush-headingOne"><a
                                                            class="list-group-item-action nav-link accordion-button"
                                                            data-bs-toggle="collapse" href="#flush-collapseOne"
                                                            role="button" aria-expanded="true"
                                                            aria-controls="flush-collapseOne" style="">Меры
                                                        поддержки</a></div>
                                                    <div id="flush-collapseOne" class="accordion-collapse collapse show"
                                                         aria-labelledby="flush-headingOne"
                                                         data-bs-parent="#accordionFlushExample" style="">
                                                        <div class="accordion-body nav-link">
                                                            <ul class="list-group list-group-flush"><a href="#"
                                                                                                       class="list-group-item list-group-item-action">Все
                                                                меры поддержки</a><a href="#"
                                                                                     class="list-group-item list-group-item-action">Юридическим
                                                                лицам</a><a href="#"
                                                                            class="list-group-item list-group-item-action">Индивидуальным
                                                                предпринимателям</a><a href="#"
                                                                                       class="list-group-item list-group-item-action">Физическим
                                                                лицам</a></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button class="Button btn btn-outline-secondary Button_icon-only-square" type="button"><span
                                    class="Icon material-icons">login</span></button>
                            <button class="Button btn btn-outline-secondary Button_icon-only-square" type="submit"><span
                                    class="Icon material-icons">search</span></button>
                        </div>
                    </div>
                </nav>
            </div>

            <hr>

            <div>
                <b-navbar toggleable="lg" type="dark" variant="info">
                    <b-navbar-brand href="#">
                        <img src="@/assets/default.jpg" class="d-inline-block align-top logo__image" alt="logo">
                        Навигатор мер поддержки
                    </b-navbar-brand>
                    <div class="d-flex gap-2">
                        <b-button v-b-toggle.sidebar>
                            <b-icon icon="list" aria-hidden="true"></b-icon>
                        </b-button>

                        <b-sidebar id="sidebar" title="Меню" shadow>
                            <b-nav vertical>
                                <b-nav-item active>Программы</b-nav-item>
                                <b-nav-item href="#link-1">Новости</b-nav-item>
                                <b-nav-item-dropdown text="Меры поддержки" right>
                                    <b-dropdown-item href="#">Все меры поддержки</b-dropdown-item>
                                    <b-dropdown-item href="#">Юридическим лицам</b-dropdown-item>
                                    <b-dropdown-item href="#">Индивидуальным предпринимателям</b-dropdown-item>
                                    <b-dropdown-item href="#">Физическим лицам</b-dropdown-item>
                                </b-nav-item-dropdown>
                            </b-nav>
                        </b-sidebar>
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Поиск</b-button>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Вход</b-button>
                        </b-nav-form>

                    </div>
                </b-navbar>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderOffcavas"
    }
</script>

<style lang="scss" scoped>
    .navbar-expand-lg {
        .logo__image {
            height: 2rem;
        }

        button[data-bs-toggle="offcanvas"] {

            @media (min-width: 992px) {
                display: none;
            }
        }

        .offcanvas {
            display: inline-flex;

            @media (min-width: 992px) {
                transition: transform 0s;
                position: static;
                visibility: visible !important;
                flex-direction: row;
                width: auto;
                transform: none;
                border-right-width: 0;
            }

            .offcanvas-header {

                @media (min-width: 992px) {
                    display: none;
                }
            }

            .offcanvas-body {

                @media (min-width: 992px) {
                    overflow-y: visible;
                }

                .navbar-nav {

                    @media (min-width: 992px) {
                        flex-direction: row;
                    }

                    .nav-item {

                        @media (min-width: 992px) {
                            border-bottom-width: 0;
                        }
                    }

                    .accordion-item {

                        @media (min-width: 992px) {
                            position: relative;
                        }

                        //.accordion-body {

                        //.list-group {

                        @media (min-width: 992px) {
                            .accordion-body {
                                .list-group {
                                    position: absolute;
                                }
                            }
                        }
                        //}
                        //}
                    }
                }
            }
        }

        .modal-backdrop {

            @media (min-width: 992px) {
                display: none;
            }
        }
    }
</style>
