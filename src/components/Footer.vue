<template>
    <footer class="footer">
        <div class="footer__wrapper container">
            <div class="footer__main row">
                <div class="footer__info col-12 col-sm-4">
                    <div class="footer__brend">
                        <img src="@/assets/iss_logo.png" alt="" class="footer__brend__logo">
                        <div class="footer__brend__name">Навигатор мер поддержки</div>
                    </div>
                    <div class="footer__social">
                        <a href="" class="footer__social__link">
                            <img src="https://novosibirsk.rus-buket.ru/images/socials/alt/fb.svg" alt=""
                                 class="footer__social__logo">
                        </a>
                        <a href="" class="footer__social__link">
                            <img src="https://novosibirsk.rus-buket.ru/images/socials/instagram.svg" alt=""
                                 class="footer__social__logo">
                        </a>
                        <a href="" class="footer__social__link">
                            <img src="https://novosibirsk.rus-buket.ru/images/socials/alt/youtube.svg" alt=""
                                 class="footer__social__logo">
                        </a>
                        <a href="" class="footer__social__link">
                            <img src="https://novosibirsk.rus-buket.ru/images/socials/alt/vk.svg" alt=""
                                 class="footer__social__logo">
                        </a>
                    </div>
                    <div class="footer__contacts">
                        <div class="footer__phone">8-903-913-9239</div>
                        <div class="footer__mail">subsidy@yandex.ru</div>
                    </div>
                    <div class="footer__support">
                        Техническая поддержка
                    </div>
                </div>
                <div class="footer__links__wrapper col">
                    <ul class="footer__links row row-cols-1 row-cols-sm-2">
                        <div class="col">
                            <li><a href="#">О проекте</a></li>
                            <li><a href="#">Программы</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">Поддержка юридических лиц</a></li>
                            <li><a href="#">Поддержка индивидуальных предпринимателей</a></li>
                            <li><a href="#">Поддержка физических лиц</a></li>
                        </div>
                        <div class="col">
                            <li><a href="#">Технологии будущего</a></li>
                            <li><a href="#">Биржа патентов</a></li>
                            <li><a href="#">Участники</a></li>
                            <li><a href="#">Поиск партнеров</a></li>
                            <li><a href="#">Калькулятор мер поддержки</a></li>
                            <li><a href="#">Контакты</a></li>
                        </div>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="footer__copyright">
                Все права защищены
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    $gap: 1rem;
    $basic-color: #003399;
    $passive-color: #e4e4e4;
    $active-color: #fff;

    .footer {
        padding-top: $gap;
        padding-bottom: $gap;
        background-color: $basic-color;
        color: $passive-color;

        .footer__main {

            .footer__info {
                &>* {
                    margin-bottom: $gap;
                }

                .footer__brend {
                    display: flex;
                    align-items: center;

                    .footer__brend__logo {
                        height: 3.0rem;
                        margin-right: $gap/2;
                    }
                }

                .footer__social {
                    .footer__social__logo {
                        height: 2rem;
                        margin-right: $gap/2;
                        margin-bottom: $gap/2;
                    }
                    margin-bottom: $gap/2;
                }
            }

            .footer__links {
                list-style: none;
                padding-left: 0;
                margin-bottom: $gap;

                a {
                    text-decoration: none;
                    color: $passive-color;

                    &:hover {
                        color: $active-color;
                    }
                }
            }
        }

        hr {
            border-top-color: $passive-color;
            margin-top: 0;
            margin-bottom: $gap;
        }

    }
</style>
