<template>
    <header class="header">
        <div class="header__wrapper container">
            <b-navbar type="dark">

                <b-navbar-brand href="#">
                    <router-link to="/">
                        <img src="@/assets/iss_logo_white.svg" class="d-inline-block align-top logo__image"
                             alt="logo">
                        Навигатор мер поддержки
                    </router-link>
                </b-navbar-brand>

                <OffcanvasMenu></OffcanvasMenu>

                <b-button class="d-lg-none" v-b-toggle.sidebar>
                    <span class="material-icons">menu</span>
                </b-button>

            </b-navbar>
        </div>
    </header>
</template>

<script>
    import OffcanvasMenu from "@/components/OffcanvasMenu";

    export default {
        name: "HeaderOffcavas",
        components: {
            OffcanvasMenu,
        }
    }
</script>

<style lang="scss">
    $gap: 1rem;
    $basic-color: var(--primary);
    $passive-color: #e4e4e4;
    $active-color: #fff;

    .header {
        background-color: $basic-color;
        /*border-bottom: 1px solid $passive-color;*/

        .navbar {
            justify-content: space-between;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 0;

            & > * {
                margin-bottom: $gap/2;
            }

            .navbar-brand {

                a {
                    font-size: 1rem;
                    font-weight: bold;
                    text-decoration: none;
                    color: $active-color;

                    &:hover {
                        color: $active-color;
                    }

                    .logo__image {
                        height: 1.875rem;
                        margin-right: $gap/2;
                    }
                }
            }

            .btn {
                border-color: $passive-color;
                padding: $gap/16*6;
                display: flex;
            }


        }
    }
</style>
