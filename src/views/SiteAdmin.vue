<template>
  <section class="container">
    <form>
      <section class="site-meta">
        <h4>Данные сайта</h4>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input1">Имя файла фавиконки</label>
            <input
              v-model="faviconFileName"
              type="text"
              class="form-control"
              id="input1"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input2">Идентификатор фавиконки</label>
            <input
              v-model="faviconId"
              type="text"
              class="form-control"
              id="input2"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input3">Имя файла логотипа</label>
            <input
              v-model="logoFileName"
              type="text"
              class="form-control"
              id="input3"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input4">Идентификатор логотипа</label>
            <input
              v-model="logoId"
              type="text"
              class="form-control"
              id="input4"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input5">Язык хэдера</label>
            <input
              v-model="headerLocaleCode"
              type="text"
              class="form-control"
              id="input5"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input6">Наименование организации</label>
            <input
              v-model="headerText"
              type="text"
              class="form-control"
              id="input6"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input7">Язык заголовка сайта</label>
            <input
              v-model="titleLocaleCode"
              type="text"
              class="form-control"
              id="input7"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input8">Заголовок сайта</label>
            <input
              v-model="titleText"
              type="text"
              class="form-control"
              id="input8"
            />
          </div>
        </div>
      </section>
      <section class="main-menu">
        <h4>Данные меню</h4>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input9">Идентификатор пункта</label>
            <input
              v-model="menuItemId"
              type="text"
              class="form-control"
              id="input9"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input10">Тип пункта</label>
            <input
              v-model="menuItemType"
              type="text"
              class="form-control"
              id="input10"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input11">Язык</label>
            <input
              v-model="menuItemLocale"
              type="text"
              class="form-control"
              id="input11"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input12">Наименование</label>
            <input
              v-model="menuItemText"
              type="text"
              class="form-control"
              id="input12"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input13">Файл иконки</label>
            <input
              v-model="menuItemIcon"
              type="text"
              class="form-control"
              id="input13"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input14">Дочерние элементы</label>
            <input
              v-model="menuItemChilds"
              type="text"
              class="form-control"
              id="input14"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input15">Идентификатор родителя</label>
            <input
              v-model="menuItemParentId"
              type="text"
              class="form-control"
              id="input15"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input16">Порядок</label>
            <input
              v-model="menuItemOrder"
              type="text"
              class="form-control"
              id="input16"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input17">Админ</label>
            <input
              v-model="menuItemAdmin"
              type="text"
              class="form-control"
              id="input17"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input18">Гость</label>
            <input
              v-model="menuItemGuest"
              type="text"
              class="form-control"
              id="input18"
            />
          </div>
        </div>
      </section>

      <h4>Ссылки футера</h4>
      <SiteAdminFooterMenu />

      <section class="contacts">
        <h4>Контакты</h4>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input29">Идентификатор пункта меню</label>
            <input
              v-model="footerContactsItemId"
              type="text"
              class="form-control"
              id="input29"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input30">Иконка</label>
            <input
              v-model="footerContactsItemIcon"
              type="text"
              class="form-control"
              id="input30"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input31">Порядок</label>
            <input
              v-model="footerContactsItemOrder"
              type="text"
              class="form-control"
              id="input31"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input32">Имя файла лого</label>
            <input
              v-model="footerContactsLogoFileName"
              type="text"
              class="form-control"
              id="input32"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input33">Идентификатор лого</label>
            <input
              v-model="footerContactsItemLogoId"
              type="text"
              class="form-control"
              id="input33"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input34">Язык</label>
            <input
              v-model="footerContactsItemLocale"
              type="text"
              class="form-control"
              id="input34"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input35">Наименование</label>
            <input
              v-model="footerContactsItemText"
              type="text"
              class="form-control"
              id="input35"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input36">Адрес ссылки</label>
            <input
              v-model="footerContactsItemUrl"
              type="text"
              class="form-control"
              id="input36"
            />
          </div>
        </div>
      </section>

      <section class="something">
        <h4>Что-то ещё</h4>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input100"></label>
            <input
              v-model="titleLocaleCode"
              type="text"
              class="form-control"
              id="input100"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input101"></label>
            <input
              v-model="titleText"
              type="text"
              class="form-control"
              id="input101"
            />
          </div>
        </div>
      </section>

      <button type="submit" class="btn btn-primary">Sign in</button>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </section>
</template>

<script>
import SiteAdminFooterMenu from "@/components/SiteAdminFooterMenu";

export default {
  name: "SiteAdmin",
  components: {
    SiteAdminFooterMenu,
  },
  data() {
    return {
      faviconFileName: "1",
      faviconId: "2",
      logoFileName: "3",
      logoId: "4",
      headerLocaleCode: "5",
      headerText: "6",
      titleLocaleCode: "7",
      titleText: "8",

      menuItemId: "9",
      menuItemLocale: "10",
      menuItemText: "11",
      menuItemType: "12",
      menuItemIcon: "13",
      menuItemChilds: "14",
      menuItemParentId: "15",
      menuItemOrder: "16",
      menuItemAdmin: "17",
      menuItemGuest: "18",

      footerContactsItemId: "29",
      footerContactsItemIcon: "30",
      footerContactsItemOrder: "31",
      footerContactsLogoFileName: "32",
      footerContactsItemLogoId: "33",
      footerContactsItemLocale: "34",
      footerContactsItemText: "35",
      footerContactsItemUrl: "36",
    };
  },
  methods: {
    getSiteInfo() {
      const xhr = new XMLHttpRequest();
      const request =
        "https://open-newtemplate.isands.ru/open-core/api/site-data/get-main";
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Ответ на запрос данных сайта:");
        console.log(xhr.response);
        this.faviconFileName = xhr.response.favicon;
        this.faviconId = xhr.response.faviconId;
        this.logoFileName = xhr.response.logo;
        this.logoId = xhr.response.logoId;
        this.headerLocaleCode = xhr.response.header[0].localeCode;
        this.headerText = xhr.response.header[0].text;
        this.titleLocaleCode = xhr.response.title[0].localeCode;
        this.titleText = xhr.response.title[0].text;
      };
      xhr.send();
    },

    getMainMenu() {
      const xhr = new XMLHttpRequest();
      const request =
        "https://open-newtemplate.isands.ru/open-core/api/site-data/get-header";
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Ответ на запроc меню хедера:");
        console.log(xhr.response);
        this.menuItemId = xhr.response[0].id;
        this.menuItemLocale = xhr.response[0].title[0].localeCode;
        this.menuItemText = xhr.response[0].title[0].text;
        this.menuItemType = xhr.response[0].type;
        this.menuItemIcon = xhr.response[0].cssIcon;
        this.menuItemChilds = xhr.response[0].childs;
        this.menuItemParentId = xhr.response[0].parentId;
        this.menuItemOrder = xhr.response[0].order;
        this.menuItemAdmin = xhr.response[0].admin;
        this.menuItemGuest = xhr.response[0].guest;
      };
      xhr.send();
    },

    getFooterContacts() {
      const xhr = new XMLHttpRequest();
      const request =
        "https://open-newtemplate.isands.ru/open-core/api/site-data/get-footer";
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Ответ на запроc контактов футера:");
        console.log(xhr.response);
        this.footerContactsItemId = xhr.response[0].id;
        this.footerContactsItemIcon = xhr.response[0].cssIcon;
        this.footerContactsItemOrder = xhr.response[0].order;
        this.footerContactsLogoFileName = xhr.response[0].logo;
        this.footerContactsItemLogoId = xhr.response[0].logoId;
        this.footerContactsItemLocale = xhr.response[0].title[0].localeCode;
        this.footerContactsItemText = xhr.response[0].title[0].text;
        this.footerContactsItemUrl = xhr.response[0].url;
      };
      xhr.send();
    },
  },
  mounted: function () {
    this.getSiteInfo();
    this.getMainMenu();
    this.getFooterContacts();
  },
};
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
