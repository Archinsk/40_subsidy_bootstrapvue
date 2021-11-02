<template>
    <footer class="footer">
        <div class="footer__wrapper container">
            <div class="footer__main row">
                <div class="footer__info col-12 col-sm-6 col-lg-4 col-xxl-3 mt-2 px-1">
                    <div class="footer__brend mb-2">
                        <img src="@/assets/iss_logo.png" alt="" class="footer__brend__logo">
                        <div class="footer__brend__name pl-2">Агрегатор мер поддержки</div>
                    </div>
                    <div class="footer__social mb-2">
                        <a href="" class="footer__social__link">
                            <img src="@/assets/default.jpg" alt="" class="footer__social__logo">
                        </a>
                        <a href="" class="footer__social__link">
                            <img src="@/assets/default.jpg" alt="" class="footer__social__logo">
                        </a>
                        <a href="" class="footer__social__link">
                            <img src="@/assets/default.jpg" alt="" class="footer__social__logo">
                        </a>
                        <a href="" class="footer__social__link">
                            <img src="@/assets/default.jpg" alt="" class="footer__social__logo">
                        </a>
                    </div>
                    <div class="footer__contacts mb-2">
                        <div class="footer__phone">8-903-913-9239</div>
                        <div class="footer__mail">subsidy@yandex.ru</div>
                    </div>
                    <div class="footer__support">
                        Техническая поддержка
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-8 col-xxl-9 mt-2 px-1">
                    <ul class="footer__links">
                        <li><a href="#">О проекте</a></li>
                        <li><a href="#">Программы</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Поддержка юридических лиц</a></li>
                        <li><a href="#">Поддержка индивидуальных предпринимателей</a></li>
                        <li><a href="#">Поддержка физических лиц</a></li>
                        <li><a href="#">Технологии будущего</a></li>
                        <li><a href="#">Биржа патентов</a></li>
                        <li><a href="#">Участники</a></li>
                        <li><a href="#">Поиск партнеров</a></li>
                        <li><a href="#">Калькулятор мер поддержки</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="footer__copyright pb-3">
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
    .footer {
        background-color: white;

        .footer__main {
            margin-top: 0;

            .footer__info {

                .footer__brend {
                    display: flex;
                    align-items: center;

                    .footer__brend__logo {
                        height: 3rem;
                    }

                    .footer__brend__name {

                    }

                }

                .footer__contacts {

                }

                .footer__social {

                    .footer__social__link {

                        .footer__social__logo {
                            height: 2rem;
                            margin-right: 4px;
                        }
                    }
                }
            }

            .footer__links {
                list-style: none;
                padding-left: 0;
                display: flex;
                flex-flow: column wrap;
                @media (min-width: 992px) {
                    height: 150px;
                }

                a {
                    text-decoration: none;
                    color: #212529;
                }
            }
        }

    }
</style>
