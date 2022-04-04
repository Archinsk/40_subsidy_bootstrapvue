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
        <b-nav-item to="/measures" active-class="active">
          Меры поддержки
        </b-nav-item>
        <!--        <b-nav-item v-if="!isAuth" to="/authPage" active-class="active">-->
        <!--          Войти-->
        <!--        </b-nav-item>-->
        <b-nav-item to="/account_info" active-class="active">
          Личный кабинет
        </b-nav-item>
        <b-button v-b-modal.auth :variant="theme">Вход</b-button>
        <b-button :variant="theme" @click="signOutLocal">Выход</b-button>
        <a :href="esiaLink" class="btn btn-primary">Вход ЕСИА</a>
        <a :href="esiaLogoutLink" class="btn btn-primary">Выход ЕСИА</a>
        <div class="my-auto">{{user.roleLabel}}</div>
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

    <b-modal id="auth" ref="modal-auth" title="Авторизация" size="sm" hide-footer no-stacking>
      <template v-if="!isAuthUser">
        <div id="logAuth" class="form-label-group mb-0">
          <input
                  v-model.trim="login"
                  type="text"
                  id="inputLogin"
                  class="form-control error"
                  placeholder="Login"
                  name="userLogin"
                  value=""
                  required=""
          />
          <label for="inputLogin" id="inputLoginLabel">Введите логин</label>
        </div>
        <small
                v-if="authError.type === 'login'"
                class="form-text text-danger"
        >{{ authError.text }}</small
        >
        <div class="form-label-group mt-3 mb-0 position-relative" id="pasAuth">
          <input
                  v-model.trim="password"
                  :type="passwordVisibility ? 'text' : 'password'"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  name="userPassword"
                  value=""
                  required=""
          />
          <label for="inputPassword" id="inputPasswordLabel">Пароль</label>
          <button
                  type="button"
                  class="btn position-absolute"
                  style="
            top: 0.375rem;
            right: 0.375rem;
            padding-left: 0.375rem;
            padding-right: 0.375rem;
          "
                  @click="passwordVisibility = !passwordVisibility"
          >
          <span class="material-icons">
            {{ passwordVisibility ? "visibility_off" : "visibility" }}
          </span>
          </button>
        </div>
        <small
                v-if="authError.type === 'password'"
                class="form-text text-danger"
        >{{ authError.text }}</small
        >
        <a href="#" class="d-block mt-2 mb-3">Забыли пароль?</a>
        <div class="row">
          <div class="col">
            <button :class="signInButtonClass" @click="signInLocal">Войти</button>
          </div>
          <div class="col">
            <button class="btn btn-outline-primary btn-block">Отмена</button>
          </div>
        </div>
        <hr />
        <p class="mb-3">Авторизоваться через портал государственных услуг</p>
        <button class="btn btn-primary btn-block">
          <img
                  src="../assets/gu_icon.svg"
                  style="height: 1.5rem; padding: 0.125rem"
                  class="mr-2"
                  alt=""
          />Войти с помощью ЕСИА
        </button>
      </template>
      <template v-else-if="user.fullInfo.roles.length > 0">
        <button v-for="role in user.fullInfo.roles"
                :key="role.id"
                class="btn btn-outline-primary btn-block"
                @click=signInWithRole(role.label)
        >
          {{role.label}}
        </button>
      </template>
    </b-modal>
  </b-sidebar>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderNav",
  props: ["userType", "theme"],
  data() {
    return {
      // url: "http://192.168.18.171:8080/api/",
      // url: "https://open-demo.isands.ru/api/",
      url: "https://open-newtemplate.isands.ru/api/",
      isAuth: this.userType === "authUser" || this.userType === "admin",
      isAdmin: this.userType === "admin",
      navItems: [],
      passwordVisibility: false,
      login: "",
      password: "",
      isAuthUser: false,
      authError: {
        type: "",
        text: "",
      },
      user: {
        roleLabel: "Гость",
        shortInfo: {},
        fullInfo: {},
      },
      esiaLink: "",
      esiaLogoutLink: "",
    };
  },

  computed: {
    isValidAuthData: function () {
      return this.login && this.password;
    },

    signInButtonClass: function () {
      return this.isValidAuthData
        ? "btn btn-primary btn-block"
        : "btn btn-primary btn-block disabled";
    },
  },

  methods: {
    getHeaderNav() {
      axios(this.url + "site-data/get-header").then( response => {
        this.navItems = response.data
      });
    },

    signInLocal() {
      const request = {
        login: this.login,
        password: this.password,
      };
      axios
        .post(this.url + "auth/local-login", request, {headers: {"accept": "*/*", "Content-Type": "application/json"}})
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.getUserId();
            this.getUserInfo();
            this.isAuthUser = true;
          }
        })
        .catch((error) => {
          if (error.toJSON().status === 401) {
            this.authError.type = "password";
            this.authError.text = "Неверно указан пароль!";
          }
          if (error.toJSON().status === 404) {
            this.authError.type = "login";
            this.authError.text =
              "Пользователь с указанным логином не зарегистрирован!";
          }
        });
    },

    signInWithRole(roleLabel) {
      this.$refs['modal-auth'].hide();
      this.user.roleLabel = roleLabel;
      this.login = "";
      this.password = "";
      this.authError.type = "";
      this.authError.text = "";
    },

    getUserId() {
      axios (this.url + "auth/get-user")
              .then((response) => {
                console.log(response);
                this.user.shortInfo = response.data
              })
    },

    getUserInfo() {
      axios (this.url + "core/get-user")
              .then((response) => {
                console.log(response);
                this.user.fullInfo = response.data
              })
    },

    signOutLocal() {
      axios
        .post(this.url + "auth/local-logout", "")
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.isAuthUser = false;
            this.user.roleLabel = "Гость";
            this.user.shortInfo = {};
            this.user.fullInfo = {};
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getLogin() {
      axios (this.url + "auth/get-login")
              .then((response) => {
                this.esiaLink = response.data.url;
              })
    },

    getLogout() {
      axios (this.url + "auth/get-logout")
              .then((response) => {
                this.esiaLogoutLink = response.data.url;
              })
    },

    goToEsia() {
      console.log("esiaLoginLink");
      console.log(this.esiaLink);
      axios (this.esiaLink)
              .then((response) => {
                console.log(response);
              })
    },

    goOutEsia() {
      console.log("esiaLogoutLink");
      console.log(this.esiaLogoutLink);
      axios (this.esiaLogoutLink)
              .then((response) => {
                console.log(response);
              })
    },
  },

  mounted: function () {
    // this.getHeaderNav();
    this.getLogin();
    this.getLogout();
  },
};
</script>
