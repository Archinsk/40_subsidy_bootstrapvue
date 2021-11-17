<template>
    <header class="header">
        <div class="header__wrapper container">
            <b-navbar type="dark">
                <div>
                    <b-button class="d-lg-none" v-b-toggle.sidebar>
                        <b-icon icon="list"></b-icon>
                    </b-button>

                    <b-navbar-brand href="#">
                        <router-link to="/">
                            <img src="@/assets/iss_logo_white.svg" class="d-inline-block align-top logo__image"
                                 alt="logo">
                            Навигатор мер поддержки
                        </router-link>
                    </b-navbar-brand>
                </div>
                <b-sidebar id="sidebar" title="Sidebar" backdrop bg-variant="primary" text-variant="light" shadow="lg">
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
                </b-sidebar>

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

            </b-navbar>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderOffcavas"
    }
</script>

<style lang="scss">
    $gap: 1rem;
    $basic-color: #003399;
    $passive-color: #e4e4e4;
    $active-color: #fff;

    .header {
        background-color: $basic-color;
        border-bottom: 1px solid $passive-color;

        .navbar {
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 0;

            & > * {
                margin-bottom: $gap/2;
            }

            .navbar-brand {

                a {
                    text-decoration: none;
                    color: $passive-color;

                    &:hover {
                        color: $active-color;
                    }

                    .logo__image {
                        height: 2rem;
                        margin-right: $gap/2;
                    }
                }
            }

            .navbar-toggler {
                border-color: $passive-color;
                padding: $gap/4;

                .navbar-toggler-icon {
                    /*Здесь не работает*/
                    /*background-color: orangered;*/
                }
            }

            /*Боковая выпадашка с навигационным меню сайта*/
            .b-sidebar-outer {
                background-color: greenyellow;

                @media (min-width: 992px) {
                    position: static;
                    width: 500px;
                    height: 100px;
                    z-index: 3000;
                }

                /*Выезжающая панель*/
                .b-sidebar {
                    background-color: yellow !important;
                    @media (min-width: 992px) {
                        display: block;
                        position: static;
                    }

                    .b-sidebar-header {
                        background-color: orangered;

                        @media (min-width: 992px) {
                            display: none;
                        }
                    }

                    .b-sidebar-body {
                        background-color: orange!important;

                        /*Навигационное меню*/
                        .navbar-collapse {
                            background-color: yellow;
                            justify-content: flex-end;

                            /*Список пунктов меню*/
                            .navbar-nav {


                                /*flex-direction: column;*/

                                /*.nav-item {*/
                                /**/
                                /*    a {*/
                                /*        text-decoration: none;*/
                                /*<!--        color: $passive-color;-->*/
                                        /**/
                                        /*&:hover {*/
                                        /*<!--    color: $active-color;-->*/
                                        /*}*/
                                    /*}*/
                                    /**/
                                    /*.dropdown-menu {*/
                                    /*    Здесь и далее не работает*/
                                        /*background-color: #b3c3e6;*/

                                        /*li {*/
                                        /*    .dropdown-item {*/
                                        /*    }*/
                                        /*}*/
                                    /*}*/
                                }


                        }
                    }
                }

                .b-sidebar-backdrop {
                    @media (min-width: 992px) {
                        display: none;
                    }
                }
            }


        }
    }
</style>
