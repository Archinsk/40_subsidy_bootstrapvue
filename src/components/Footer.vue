<template>
    <footer class="footer">
        <div class="footer__wrapper container">
            <div class="footer__main row row-cols-1 row-cols-md-3">
                <div class="footer__info col">
                    <router-link to="/" class="footer__brend">
                        <img src="@/assets/iss_logo_white.svg" alt="" class="footer__brend__logo">
                        <div class="footer__brend__name">Единый институт развития Тульской области</div>
                    </router-link>
                    <div class="footer__social">
                        <a href="https://www.facebook.com" target="_blank" class="footer__social__link">
                            <img src="https://novosibirsk.rus-buket.ru/images/socials/alt/fb.svg" alt=""
                                 class="footer__social__logo">
                        </a>
                        <a href="https://www.instagram.com" target="_blank" class="footer__social__link">
                            <img src="https://novosibirsk.rus-buket.ru/images/socials/instagram.svg" alt=""
                                 class="footer__social__logo">
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" class="footer__social__link">
                            <img src="https://novosibirsk.rus-buket.ru/images/socials/alt/youtube.svg" alt=""
                                 class="footer__social__logo">
                        </a>
                        <a href="https://vk.com/" target="_blank" class="footer__social__link">
                            <img src="https://novosibirsk.rus-buket.ru/images/socials/alt/vk.svg" alt=""
                                 class="footer__social__logo">
                        </a>
                    </div>
                </div>
                <ul class="footer__contacts col-md-3">
                    <li><a href="tel:+78007751986" class="footer__phone">8-800-775-1986</a></li>
                    <li><a href="tel:+73833541011" class="footer__phone">8-383-354-1011</a></li>
                    <li><a href="mailto:info@isands.ru" class="footer__mail">info@isands.ru</a></li>
                    <li><b-button href="#" variant="link" v-b-modal.modal-1>Техническая поддержка</b-button></li>
                </ul>
                <ul class="footer__links col-md-5">
                    <li><router-link to="/news">Новости</router-link></li>
                    <li><router-link to="/measures">Поддержка юридических лиц</router-link></li>
                    <li><router-link to="/measures">Поддержка индивидуальных предпринимателей</router-link></li>
                    <li><router-link to="/measures">Поддержка физических лиц</router-link></li>
                </ul>
            </div>
            <hr>
            <div class="footer__copyright">
                Все права защищены
            </div>

            <b-modal id="modal-1" title="Обратная связь" hide-footer>
                <SupportRequestForm></SupportRequestForm>
            </b-modal>

        </div>
    </footer>
</template>

<script>
    import SupportRequestForm from "@/components/SupportRequestForm";
    export default {
        name: "Footer",

        components: {
            SupportRequestForm,
        }
    }
</script>

<style lang="scss" scoped>
    $gap: 1rem;
    /*$basic-color: #003399;*/
    $basic-color: #325DE9;
    $passive-color: #e4e4e4;
    $active-color: #fff;

    .footer {
        padding-top: $gap;
        padding-bottom: $gap;
        background-color: $basic-color;
        color: $passive-color;

        .footer__main {

            .footer__info {
                & > * {
                    margin-bottom: $gap;
                }

                .footer__brend {
                    display: flex;
                    align-items: center;
                    text-decoration: none;

                    .footer__brend__logo {
                        height: 1.875rem;
                        margin-right: $gap/2;
                    }

                    .footer__brend__name {
                        font-size: 1rem;
                        font-weight: bold;
                        color: $active-color;
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

            .footer__contacts, .footer__links {
                list-style: none;
                padding-left: 15px;
                margin-bottom: $gap;

                a {
                    text-decoration: none;
                    color: $passive-color;

                    &:hover {
                        color: $active-color;
                    }
                }

                /*For modal Support Request Form*/
                .btn {
                    vertical-align: initial;
                    border: none;
                    padding: 0;
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
