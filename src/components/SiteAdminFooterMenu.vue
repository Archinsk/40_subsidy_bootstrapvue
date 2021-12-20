<template>
    <div>
        <div
                v-for="(footerMenuItem, index) of footerMenu"
                :key="footerMenuItem.id"
        >
            <SiteAdminFooterMenuItem :item="footerMenuItem" :index="index"/>
        </div>
        <div class="form-row">
            <div class="form-group col-2">
                <button
                        @click="addFooterMenuItem"
                        class="btn btn-outline-primary btn-block">Добавить
                </button>
            </div>
            <div class="form-group col-2">
                <button
                        @click="getFooterMenu"
                        class="btn btn-outline-primary btn-block">Отмена</button>
            </div>
            <div class="form-group col-2">
                <button
                        @click="editFooterMenuItem"
                        class="btn btn-primary btn-block">Применить</button>
            </div>
        </div>
    </div>
</template>

<script>
    import SiteAdminFooterMenuItem from "@/components/SiteAdminFooterMenuItem";

    export default {
        name: "SiteAdminFooterMenu",
        components: {
            SiteAdminFooterMenuItem
        },
        data() {
            return {
                footerMenu: [],
                footerMenuNewItem: {
                    "title": [
                        {
                            "localeCode": "ru",
                            "text": "Новый пункт"
                        }
                    ],
                    "type": 2,
                    "cssIcon": "bi-icon",
                    "childs": [],
                    "parentId": 0,
                    "order": 0,
                    "admin": false,
                    "guest": true
                }
            }
        },
        methods: {
            getFooterMenu() {
                const xhr = new XMLHttpRequest();
                const url = 'https://open-newtemplate.isands.ru/open-core/api/site-data/get-footer';
                xhr.open('GET', url);
                xhr.responseType = 'json';
                xhr.onload = () => {
                    console.log('Ответ на запрос меню футера из админки футера:')
                    console.log(xhr.response);
                    this.footerMenu = xhr.response;
                };
                xhr.send();
            },
            addFooterMenuItem() {
                const xhr = new XMLHttpRequest();
                const url = 'https://open-newtemplate.isands.ru/open-core/api/site-data/set-footer';
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        this.getFooterMenu();
                    }
                };
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.send(JSON.stringify(this.footerMenuNewItem));
            },
            editFooterMenuItem() {
                const xhr = new XMLHttpRequest();
                const url = 'https://open-newtemplate.isands.ru/open-core/api/site-data/set-footer';
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.send(JSON.stringify(this.footerMenu));
            }
        },
        mounted: function () {
            this.getFooterMenu();
        }
    }
</script>

<style scoped>

</style>
