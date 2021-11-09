<template>
    <header class="header">
        <div class="header__wrapper container">
            <b-navbar toggleable="md" type="dark">
                <b-navbar-brand href="#">
                    <router-link to="/">
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

            </b-navbar>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderOffcavas"
    }
</script>

<style lang="scss" scoped>
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

            .navbar-collapse {
                justify-content: flex-end;

                .navbar-nav {
                    /*background-color: yellow;*/

                    .nav-item {

                        a {
                            text-decoration: none;
                            color: $passive-color;

                            &:hover {
                                color: $active-color;
                            }
                        }

                        .dropdown-menu {
                            /*Здесь и далее не работает*/
                            background-color: #b3c3e6;

                            li {
                                .dropdown-item {
                                }
                            }
                        }
                    }

                }
            }
        }
    }
</style>
