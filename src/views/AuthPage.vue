<template>
    <div _ngcontent-bkq-c50="" class="auth-container">

        <router-outlet _ngcontent-bkq-c50=""></router-outlet>
        <esia-idp _nghost-bkq-c62="">
            <esia-disclaimers _ngcontent-bkq-c62="" _nghost-bkq-c59="">
                <div _ngcontent-bkq-c59="" class="disclaimers mb-32 mb-md-0"><!----></div><!----></esia-disclaimers>
            <div _ngcontent-bkq-c62="" class="small-inner">
                <div _ngcontent-bkq-c62="" class="form-container mb-20 mb-md-40">
                    <esia-header _ngcontent-bkq-c62="" _nghost-bkq-c15="">
                        <header _ngcontent-bkq-c15="" class="mb-40">
                            <!--                            <a _ngcontent-bkq-c15="" class="logo" href="http://gosuslugi.ru">-->
                            <img src="@/assets/logo_gu.svg" alt="" class="gu-logo">
                            <div class="text-center">
                                Вход на сайт Единого института<br>
                                развития Тульской области
                            </div>
                            <!--                        </a>-->
                        </header>
                    </esia-header>
                    <form _ngcontent-bkq-c62="" class="ng-untouched ng-pristine ng-invalid"><!---->
                        <div _ngcontent-bkq-c62="" class="input-control mb-20">
                            <esia-input _ngcontent-bkq-c62="" formcontrolname="login" _nghost-bkq-c46=""
                                        class="ng-untouched ng-pristine ng-invalid">
                                <input _ngcontent-bkq-c46=""
                                       id="login"
                                       type="text"
                                       class="plain-input"
                                       autocomplete="off"
                                       required
                                >
                                <label
                                        _ngcontent-bkq-c46="" class="input-label" for="login">Телефон / Email /
                                    СНИЛС</label><!----></esia-input><!----></div><!---->
                        <div _ngcontent-bkq-c62="" class="input-control mb-8">
                            <esia-input-password _ngcontent-bkq-c62="" formcontrolname="password" _nghost-bkq-c53=""
                                                 class="ng-untouched ng-pristine ng-invalid">
                                <div _ngcontent-bkq-c53="" class="input-password"><!---->
                                    <input _ngcontent-bkq-c53=""
                                           id="password"
                                           required
                                           class="plain-input"
                                           type="password"
                                    ><label
                                            _ngcontent-bkq-c53="" class="input-label" for="password">Пароль</label>
                                    <!---->
                                    <!----><!----></div><!----></esia-input-password>
                        </div>
                        <div _ngcontent-bkq-c62="" class="flex-container justify-between mb-40"><a
                                _ngcontent-bkq-c62="">Восстановить</a></div><!---->
                        <div _ngcontent-bkq-c62="" class="mb-24">
                            <!--                            <button _ngcontent-bkq-c62=""
                                                                class="plain-button wide"
                                                                type="submit"
                                                        >Войти</button>
                            -->
                            <router-link to="/measuresAuth" class="plain-button wide auth-link">
                                Войти
                            </router-link>
                        </div>
                        <div _ngcontent-bkq-c62="" class="text-center mb-40"><a _ngcontent-bkq-c62="">Войти с
                            электронной подписью</a></div><!---->
                        <div _ngcontent-bkq-c62="" class="text-center"><a _ngcontent-bkq-c62="">Не удаётся войти?</a>
                        </div>
                    </form><!----><!----></div>
                <div _ngcontent-bkq-c62="" class="text-center mb-md-40"><a _ngcontent-bkq-c62="">Зарегистрироваться</a>
                </div>
                <esia-banner _ngcontent-bkq-c62="" _nghost-bkq-c60="">
                    <div _ngcontent-bkq-c60="" class="banners">
                        <div _ngcontent-bkq-c60="" class="banner"><!----><!---->
                            <div _ngcontent-bkq-c60="">
                                <div><img src="https://gu-st.ru/content/Banner/Esia_a1.svg"
                                          style="width: 48px;height: 48px;"></div>
                                <div style="width: 180px;margin: 16px 0 -1px;letter-spacing: -0.025em;"><a
                                        href="https://www.gosuslugi.ru/esia-help" target="_blank">Куда ещё можно войти с
                                    паролем от Госуслуг?</a></div>
                            </div>
                        </div><!----><!----></div>
                </esia-banner><!----><!----><!----></div><!----><!----><!----><!----></esia-idp><!----><!----><!---->
    </div>
</template>

<script>

    export default {
        name: "NewsInfo",

        components: {},
    }
</script>

<style lang="scss" scoped>

    .auth-container {
        padding-top: 64px;
        padding-bottom: 64px;
        background: #e4ecfd !important;

        .gu-logo {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 24px;
        }

        .auth-link {
            text-decoration: none;
        }
    }
</style>
