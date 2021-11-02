<template>
    <header class="header bg-light">
        <div class="header__wrapper container">
            <div>
                <b-navbar toggleable="lg" type="dark" variant="info">
                    <b-navbar-brand href="#">
                        <router-link to="/homes">
                            <img src="@/assets/iss_logo.png" class="d-inline-block align-top logo__image" alt="logo">
                            Навигатор мер поддержки
                        </router-link>
                    </b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>

                            <b-nav-item href="#">
                                <router-link to="/news">Новости</router-link>
                            </b-nav-item>
                            <b-nav-item-dropdown text="Меры поддержки" right>
                                <b-dropdown-item href="#">
                                    <router-link to="/measures">Все меры поддержки</router-link>
                                </b-dropdown-item>
                                <b-dropdown-item href="#">
                                    <router-link to="/measures">Юридическим лицам</router-link>
                                </b-dropdown-item>
                                <b-dropdown-item href="#">
                                    <router-link to="/measures">Индивидуальным предпринимателям</router-link>
                                </b-dropdown-item>
                                <b-dropdown-item href="#">
                                    <router-link to="/measures">Физическим лицам</router-link>
                                </b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item href="#">
                                <router-link to="/accountinfo">Личный кабинет</router-link>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>

<!--                    <div class="d-flex gap-2">-->
<!--                        <b-button v-b-toggle.sidebar>-->
<!--                            <b-icon icon="list" aria-hidden="true"></b-icon>-->
<!--                        </b-button>-->
<!--                        <b-sidebar id="sidebar" title="Меню" shadow>-->
<!--                            <b-nav vertical>-->
<!--                                <b-nav-item active>Программы</b-nav-item>-->
<!--                                <b-nav-item href="#link-1">Новости</b-nav-item>-->
<!--                                <b-nav-item-dropdown text="Меры поддержки" right>-->
<!--                                    <b-dropdown-item href="#">Все меры поддержки</b-dropdown-item>-->
<!--                                    <b-dropdown-item href="#">Юридическим лицам</b-dropdown-item>-->
<!--                                    <b-dropdown-item href="#">Индивидуальным предпринимателям</b-dropdown-item>-->
<!--                                    <b-dropdown-item href="#">Физическим лицам</b-dropdown-item>-->
<!--                                </b-nav-item-dropdown>-->
<!--                            </b-nav>-->
<!--                        </b-sidebar>-->
<!--                        <b-nav-form>-->
<!--                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Поиск</b-button>-->
<!--                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Вход</b-button>-->
<!--                        </b-nav-form>-->
<!--                    </div>-->

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
