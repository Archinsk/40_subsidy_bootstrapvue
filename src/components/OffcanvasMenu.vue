<template>
    <b-sidebar id="sidebar" title="Меню" backdrop bg-variant="primary" text-variant="light" shadow="lg">
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
</template>

<script>
    export default {
        name: "OffcanvasMenu"
    }
</script>

<style lang="scss">
    $gap: 1rem;
    $basic-color: #003399;
    $passive-color: #e4e4e4;
    $active-color: #fff;

    /*Боковая выпадашка с навигационным меню сайта*/
    .b-sidebar-outer {

        @media (min-width: 992px) {
            position: static;
            height: 2.5rem;
        }

        /*Выезжающая панель*/
        .b-sidebar {

            @media (min-width: 992px) {
                display: block !important;
                background-color: transparent !important;
                box-shadow: none !important;
                position: static;
                width: auto;
            }

            /*Шапка выезжающей панели*/
            .b-sidebar-header {
                border-bottom: 1px solid $active-color;

                @media (min-width: 992px) {
                    display: none;
                }
            }

            /*Тело выезжающей панели*/
            .b-sidebar-body {
                overflow: visible;

                /*Навигационное меню*/
                .navbar-collapse {

                    /*Список пунктов меню*/
                    .navbar-nav {
                        width: 100%;
                        flex-direction: column;
                        justify-content: start;

                        @media (min-width: 992px) {
                            flex-direction: row;
                        }

                        /*Пункт меню*/
                        .nav-item {
                            border-bottom: 1px solid $active-color;

                            @media (min-width: 992px) {
                                border-bottom: none;
                            }

                            /*Пункт меню с выпадашкой*/
                            &.dropdown {

                                /*Кнопка со стрелкой*/
                                .dropdown-toggle {
                                    color: $active-color;
                                }

                                /*Выпадающая часть*/
                                .dropdown-menu {
                                    position: relative;
                                    padding: 0;
                                    margin: 0;
                                    border-radius: 0;
                                    border: none;
                                    background-color: rgba(255, 255, 255, 0.2);

                                    @media (min-width: 992px) {
                                        position: absolute;
                                        padding: 0.5rem 0;
                                        margin: 0.125rem 0 0;
                                        border-radius: 0.25rem;
                                        border: 1px solid rgba(0, 0, 0, 0.15);
                                        background-color: #fff;
                                    }

                                    li {
                                        border-top: 1px solid $active-color;

                                        @media (min-width: 992px) {
                                            border-top: none;
                                        }

                                        .dropdown-item {
                                            padding: 0.5rem 1rem;

                                            @media (min-width: 992px) {
                                                padding: 0.25rem 1.5rem;
                                            }

                                            a {
                                                text-decoration: none;
                                                color: $passive-color;

                                                @media (min-width: 992px) {
                                                    color: $basic-color;
                                                }
                                            }

                                            &:active {

                                                @media (min-width: 992px) {
                                                    background-color: $basic-color;
                                                    color: $active-color;
                                                }

                                                a {

                                                    @media (min-width: 992px) {
                                                        color: $active-color;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }

                            .nav-link {
                                padding-left: 1rem;
                                padding-right: 1rem;

                                a {
                                    text-decoration: none;
                                    color: $passive-color;

                                    @media (min-width: 992px) {
                                        color: $active-color;
                                    }
                                }

                                @media (min-width: 992px) {
                                    padding-left: 0.5rem;
                                    padding-right: 0.5rem;
                                }

                                &:hover {
                                    color: $active-color;
                                }
                            }
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
</style>
