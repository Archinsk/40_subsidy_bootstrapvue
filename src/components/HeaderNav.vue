<template>
  <b-sidebar
    id="sidebar"
    title="Меню"
    backdrop
    bg-variant="primary"
    text-variant="light"
    shadow
  >
    <b-collapse is-nav>
      <b-navbar-nav>
        <!-- Статические пункты меню -->
        <b-nav-item to="/news" active-class="active"> Новости </b-nav-item>
<!--        <b-nav-item-dropdown active-class="active" text="Фейковые меры поддержки">-->
<!--          <b-dropdown-item to="/measures"> Все меры поддержки </b-dropdown-item>-->
<!--          <b-dropdown-item to="/measures"> Юридическим лицам </b-dropdown-item>-->
<!--          <b-dropdown-item to="/measures">-->
<!--            Индивидуальным предпринимателям-->
<!--          </b-dropdown-item>-->
<!--          <b-dropdown-item to="/measures"> Физическим лицам </b-dropdown-item>-->
<!--        </b-nav-item-dropdown>-->
        <b-nav-item to="/measures" active-class="active"> Меры поддержки </b-nav-item>
<!--        <b-nav-item v-if="!isAuth" to="/authPage" active-class="active">-->
<!--          Войти-->
<!--        </b-nav-item>-->
        <b-nav-item to="/account_info" active-class="active">
          Личный кабинет
        </b-nav-item>
<!--        <b-nav-item v-if="isAdmin" to="/siteAdmin">-->
<!--          <span class="material-icons">settings</span>-->
<!--        </b-nav-item>-->
<!--        <b-nav-item v-if="isAdmin" to="/applications">-->
<!--          Заявления-->
<!--        </b-nav-item>-->
        <!-- Динамические пункты меню футера -->
<!--        <template v-for="item of navItems">-->
<!--          <b-nav-item-dropdown-->
<!--            v-if="item.childs"-->
<!--            :key="item.id"-->
<!--            active-class="active"-->
<!--            :text="item.title[0].text"-->
<!--          >-->
<!--            <b-dropdown-item-->
<!--              v-for="child of item.childs"-->
<!--              :key="child.id"-->
<!--              :to="child.url"-->
<!--            >-->
<!--              {{ child.title[0].text }}-->
<!--            </b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
<!--          <b-nav-item-->
<!--            v-else-->
<!--            :key="item.id"-->
<!--            :to="item.url"-->
<!--            active-class="active"-->
<!--            >{{ item.title[0].text }}</b-nav-item-->
<!--          >-->
<!--        </template>-->
      </b-navbar-nav>
    </b-collapse>
  </b-sidebar>
</template>

<script>
export default {
  name: "HeaderNav",
  props: ["userType"],
  data() {
    return {
      isAuth: this.userType === "authUser" || this.userType === "admin",
      isAdmin: this.userType === "admin",
      navItems: [],
    };
  },
  methods: {
    getHeaderNav() {
      const xhr = new XMLHttpRequest();
      const url =
        // "https://open-newtemplate.isands.ru/open-core/api/site-data/get-header";
        "http://192.168.18.171:8080/api/site-data/get-header";
        // "https://open-demo.isands.ru/api/site-data/get-header";
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        this.navItems = xhr.response;
      };
      xhr.send();
    },
  },
  mounted: function () {
    this.getHeaderNav();
  },
};
</script>
