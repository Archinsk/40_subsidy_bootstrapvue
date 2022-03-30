<template>
  <b-sidebar
    id="sidebar"
    title="Меню"
    backdrop
    :bg-variant="theme"
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
        <b-button v-b-modal.auth :variant="theme"
        >Вход</b-button
        >
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

    <b-modal
            id="auth"
            title="Авторизация"
            size="md"
            hide-footer
            no-stacking
    >
      <div id="logAuth" class="form-label-group mb-3">
        <input type="text" id="inputLogin" class="form-control error" placeholder="Login" name="userLogin" value="" required="">
        <label for="inputLogin" id="inputLoginLabel">Введите логин</label>
      </div>
      <div class="form-label-group mb-0 position-relative" id="pasAuth">
        <input :type="passwordVisibility ? 'text' : 'password'" id="inputPassword" class="form-control" placeholder="Password" name="userPassword" value="" required="">
        <label for="inputPassword" id="inputPasswordLabel">Пароль</label>
        <button type="button" class="btn position-absolute" style="top: 0.375rem; right: 0.375rem; padding-left: 0.375rem; padding-right: 0.375rem;"
        @click="passwordVisibility = !passwordVisibility"
        ><span class="material-icons"> {{ passwordVisibility ? 'visibility_off' : 'visibility'}} </span></button>
      </div>
      <a href="#" class="d-block mb-3">Забыли пароль?</a>
      <button class="btn btn-primary">Войти</button>
      <hr/>
      <p class="mb-3">Авторизоваться через портал государственных услуг</p>
      <button class="btn btn-primary">
        <img src="../assets/gu_icon.svg" style="height: 1.5rem; padding: 0.125rem" class="mr-2" alt="">Войти с помощью ЕСИА</button>
    </b-modal>

  </b-sidebar>
</template>

<script>
export default {
  name: "HeaderNav",
  props: ["userType", "theme"],
  data() {
    return {
      isAuth: this.userType === "authUser" || this.userType === "admin",
      isAdmin: this.userType === "admin",
      navItems: [],
      passwordVisibility: false,
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
