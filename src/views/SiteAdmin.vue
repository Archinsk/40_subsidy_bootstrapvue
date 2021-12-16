<template>
    <div class="page-wrapper">
        <HeaderOffcavas v-show="!chatIsActive" auth="true"/>
        <main class="content">
            <section v-show="!chatIsActive" class="measures container">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="input1">Имя файла фавиконки</label>
                            <input v-model="faviconFileName" type="text" class="form-control" id="input1">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="input2">Идентификатор фавиконки</label>
                            <input v-model="faviconId" type="text" class="form-control" id="input2">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="input3">Имя файла логотипа</label>
                            <input v-model="logoFileName" type="text" class="form-control" id="input3">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="input4">Идентификатор логотипа</label>
                            <input v-model="logoId" type="text" class="form-control" id="input4">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="input5">Язык хэдера</label>
                            <input v-model="headerLocaleCode" type="text" class="form-control" id="input5">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="input6">Наименование организации</label>
                            <input v-model="headerText" type="text" class="form-control" id="input6">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="input7">Язык заголовка сайта</label>
                            <input v-model="titleLocaleCode" type="text" class="form-control" id="input7">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="input8">Заголовок сайта</label>
                            <input v-model="titleText" type="text" class="form-control" id="input8">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </section>
        </main>
        <Footer v-show="!chatIsActive"/>
    </div>

</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import Footer from "@/components/Footer";

    export default {
        name: "SiteAdmin",
        components: {
            HeaderOffcavas,
            Footer
        },
        data() {
            return {
                faviconFileName: '1',
                faviconId: '2',
                logoFileName: '3',
                logoId: '4',
                headerLocaleCode: '5',
                headerText: '6',
                titleLocaleCode: '7',
                titleText: '8',
            }
        },
        methods: {
            getSiteInfo() {
                const xhr = new XMLHttpRequest();
                const request = 'https://open-newtemplate.isands.ru/open-core/api/site-data/get-main';
                xhr.open("GET", request);
                xhr.responseType = 'json';
                xhr.onload = () => {
                    console.log('Пошел запрок Дмитрию')
                    console.log(xhr.response);
                    this.faviconFileName = xhr.response.favicon;
                    this.faviconId = xhr.response.faviconId;
                    this.logoFileName = xhr.response.logo;
                    this.logoId = xhr.response.logoId;
                    this.headerLocaleCode = xhr.response.header.localeCode;
                    this.headerText = xhr.response.header.text;
                    this.titleLocaleCode = xhr.response.title.localeCode;
                    this.titleText = xhr.response.title.text;
                };
                xhr.send();
            },
        },
        mounted: function () {
            this.getSiteInfo();
        }

    }
</script>

<style lang="scss" scoped>
    .page-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        .content {
            flex: 1;
        }
    }
</style>
