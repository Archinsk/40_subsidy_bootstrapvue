<template>
    <header class="header sticky-top shadow">
        <div class="header__wrapper container">
            <b-navbar type="dark">

                <b-navbar-brand to="/">
                    <img src="@/assets/iss_logo_white.svg" class="d-inline-block align-top logo__image"
                         alt="logo">
                    Информационные системы и сервисы
                </b-navbar-brand>

                <OffcanvasMenu :type="auth"></OffcanvasMenu>

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
        },
        props: [
          'auth'
        ],
    }
</script>

<style lang="scss">
    $gap: 1rem;
    $basic-color: var(--primary);
    $active-color: #fff;

    .header {
        background-color: $basic-color;

        .navbar {
            justify-content: space-between;
            padding-left: 0;
            padding-right: 0;

            .navbar-brand {
                font-size: 1rem;
                font-weight: bold;
                display: flex;
                align-items: center;

                .logo__image {
                    height: 1.875rem;
                    margin-right: $gap/2;
                }
            }

            .btn {
                border-color: $active-color;
                opacity: 0.5;
                padding: $gap/1*6;
                display: flex;

                &:active {
                    opacity: 1;
                }
            }
        }
    }
</style>
