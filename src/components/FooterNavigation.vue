<template>
    <ul class="footer__links col-md-5">
<!--        Пункты меню футера получаемые с сервера-->
        <li
                v-for="item of footerLinksList"
                :key="item.title[0].text"
        >
            <router-link to="/news">{{ item.title[0].text }}</router-link>
        </li>
        <li>
            <router-link to="/news">Новости</router-link>
        </li>
        <li>
            <router-link to="/measures">Поддержка юридических лиц</router-link>
        </li>
        <li>
            <router-link to="/measures">Поддержка индивидуальных предпринимателей</router-link>
        </li>
        <li>
            <router-link to="/measures">Поддержка физических лиц</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "FooterNavigation",

        data() {
            return {
                footerLinksList: []
            }
        },

        methods: {
            getFooterMenu() {
                const xhr = new XMLHttpRequest();
                const url = 'https://open-newtemplate.isands.ru/open-core/api/site-data/get-footer';
                xhr.open('GET', url);
                xhr.responseType = 'json';
                xhr.onload = () => {
                    console.log('Запрос футером своих пунктов');
                    console.log(xhr.response);
                    this.footerLinksList =  xhr.response
                };
                xhr.send();
            },
        },

        mounted: function () {
            this.getFooterMenu();
        }
    }
</script>

<style lang="scss" scoped>
    $gap: 1rem;
    $passive-color: #e4e4e4;
    $active-color: #fff;

    .footer__links {
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
    }
</style>
