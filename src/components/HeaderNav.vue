<template>
  <b-sidebar
    id="sidebar"
    ref="nav-sidebar"
    title="Меню"
    backdrop
    :bg-variant="theme"
    text-variant="light"
    shadow
  >
    <b-collapse is-nav>
      <b-navbar-nav>
        <b-nav-item to="/news" active-class="active"> Новости </b-nav-item>
        <b-nav-item to="/measures" active-class="active">
          Меры поддержки
        </b-nav-item>
        <b-nav-item to="/contacts" active-class="active"> Контакты </b-nav-item>
        <b-nav-item v-if="isAuthUser" to="/account_info" active-class="active">
          Личный кабинет
        </b-nav-item>
        <b-nav-item to="/settings" active-class="active">
          Настройки
        </b-nav-item>
        <b-nav-item
          v-if="!isAuthUser"
          v-b-modal.auth
          class="active pr-md-5"
          id="signInButton"
        >
          Вход
        </b-nav-item>
        <b-nav-item
          v-else
          class="active pr-md-5"
          @click="signOut"
          id="signOutButton"
        >
          Выход
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-modal
      id="auth"
      ref="modal-auth"
      :title="!user.shortInfo.userId ? 'Авторизация' : 'Выбор роли'"
      size="sm"
      hide-footer
      no-stacking
      :hide-header-close="!!user.shortInfo.userId"
      :no-close-on-backdrop="!!user.shortInfo.userId"
      :no-close-on-esc="!!user.shortInfo.userId"
    >
      <template v-if="!isAuthUser">
        <form @submit.prevent>
          <div id="logAuth" class="form-label-group mb-0">
            <input
              autocomplete="on"
              v-model.trim="login"
              type="text"
              id="inputLogin"
              class="form-control"
              placeholder="Login"
            />
            <label for="inputLogin" id="inputLoginLabel">Введите логин</label>
          </div>
          <small
            v-if="authError.type === 'login'"
            class="form-text text-danger"
            >{{ authError.text }}</small
          >
          <div
            class="form-label-group mt-3 mb-0 position-relative"
            id="pasAuth"
          >
            <input
              autocomplete="off"
              v-model.trim="password"
              :type="passwordVisibility ? 'text' : 'password'"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
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
              <button
                class="btn btn-primary btn-block"
                :disabled="!login || !password"
                @click="signInLocal"
              >
                Войти
              </button>
            </div>
            <div class="col">
              <button class="btn btn-outline-primary btn-block">Отмена</button>
            </div>
          </div>
          <hr />
          <p class="mb-3">Авторизоваться через портал государственных услуг</p>
          <button class="btn btn-primary btn-block" @click="getLogin">
            <img
              src="../assets/gu_icon.svg"
              style="height: 1.5rem; padding: 0.125rem"
              class="mr-2"
              alt=""
            />Войти с помощью ЕСИА
          </button>
        </form>
      </template>
      <template v-else-if="userInfoFromResponse.fullInfo.roles.length > 1">
        <button
          v-for="role in user.fullInfo.roles"
          :key="role.id"
          class="btn btn-outline-primary btn-block"
          @click="signInWithRole(role, true)"
        >
          {{ role.label }}
        </button>
      </template>
    </b-modal>
  </b-sidebar>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderNav",
  props: ["url", "theme", "user"],

  data() {
    return {
      login: "",
      password: "",
      passwordVisibility: false,

      userInfoFromResponse: {
        shortInfo: {
          userId: null,
          userName: "",
          typeAuth: "",
        },
        fullInfo: {
          roles: [],
        },
        selectedRole: {},
      },

      authError: {
        type: "",
        text: "",
      },

      isFirstLoad: true,

      esiaLink: "",
      esiaLogoutLink: "",
    };
  },

  computed: {
    isAuthUser: function () {
      return !!this.user.shortInfo.userId;
    },

    isValidAuthData: function () {
      return !!(this.login && this.password);
    },
  },

  methods: {
    // Вход через ЕСИА
    getLogin() {
      axios(this.url + "auth/get-login", {
        withCredentials: true,
      })
        .then((response) => {
          if (this.isFirstLoad) {
            this.isFirstLoad = false;
            console.groupCollapsed("Ссылка на авторизацию ЕСИА");
            console.log(response.data);
            console.groupEnd();
          } else {
            console.log(response);
            location.href = response.data.url;
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 406) {
              console.log("Пользователь уже авторизован");
            }
          }
          this.getUserId();
          this.getUserInfo();
        });
    },

    // Вход по логину и паролю
    signInLocal() {
      const request = {
        login: this.login,
        password: this.password,
      };
      axios
        .post(this.url + "auth/local-login", request, {
          withCredentials: true,
        })
        .then(() => {
          this.getUserId();
          this.getUserInfo(false);
        })
        .then(() => {
          this.$emit("assign-user", this.userInfoFromResponse);
          this.$refs["nav-sidebar"].hide();
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.authError.type = "password";
            this.authError.text = "Неверно указан пароль!";
          }
          if (error.response.status === 404) {
            this.authError.type = "login";
            this.authError.text =
              "Пользователь с указанным логином не зарегистрирован!";
          }
        });
    },

    getUserId() {
      axios(this.url + "auth/get-user", {
        withCredentials: true,
      }).then((response) => {
        console.groupCollapsed("Идентификатор пользователя");
        console.log(response.data);
        console.groupEnd();
        this.userInfoFromResponse.shortInfo = response.data;
      });
    },

    getUserInfo(hideModal = true) {
      axios(this.url + "core/get-user", {
        withCredentials: true,
      }).then((response) => {
        console.groupCollapsed("Данные пользователя");
        console.log(response.data);
        console.groupEnd();
        this.userInfoFromResponse.fullInfo = response.data;
        this.$emit("assign-user", this.userInfoFromResponse);
        if (this.userInfoFromResponse.fullInfo.roles.length === 0) {
          this.$refs["modal-auth"].hide();
          console.log("У пользователя отсутствуют роли");
        } else if (this.userInfoFromResponse.fullInfo.roles.length === 1) {
          this.$refs["modal-auth"].hide();
          this.signInWithRole(this.userInfoFromResponse.fullInfo.roles[0]);
          console.groupCollapsed(
            "Пользователь авторизован с единственной имеющейся ролью"
          );
          console.log(this.userInfoFromResponse.fullInfo.roles[0]);
          console.groupEnd();
        } else {
          let currentRole = this.selectRoleById(
            response.data.roles,
            this.userInfoFromResponse.shortInfo.roleId
          );
          if (currentRole) {
            this.signInWithRole(currentRole, hideModal);
          }
        }
      });
    },

    selectRoleById(roles, roleId) {
      for (let i = 0; i < roles.length; i++) {
        if (roleId === roles[i].id) {
          console.groupCollapsed("Пользователь уже авторизован с ролью");
          console.log(roles[i]);
          console.groupEnd();
          return roles[i];
        }
      }
    },

    // Выбор роли пользователя при авторизации по логину/паролю
    signInWithRole(role, hideModal) {
      axios
        .put(this.url + "core/put-metadata?orgId=0&roleId=" + role.id, "", {
          withCredentials: true,
        })
        .then((response) => {
          this.userInfoFromResponse.shortInfo = response.data;
          this.userInfoFromResponse.selectedRole = role;
          if (hideModal) {
            this.$refs["modal-auth"].hide();
          }
          this.cleanSignInForm();
          console.log('Пользователь авторизован с ролью "' + role.label + '"');
        });
    },

    cleanSignInForm() {
      this.login = "";
      this.password = "";
      this.authError.type = "";
      this.authError.text = "";
    },

    signOut() {
      if (this.user.shortInfo.typeAuth === "local") {
        this.signOutLocal();
      }
      if (this.user.shortInfo.typeAuth === "esia") {
        this.getLogout();
      }
    },

    signOutLocal() {
      axios(this.url + "auth/local-logout", {
        withCredentials: true,
      })
        .then((response) => {
          if (response.status === 200) {
            const guestUser = {
              shortInfo: {
                userId: null,
                userName: "",
                typeAuth: "",
              },
              fullInfo: {
                roles: [],
              },
              selectedRole: {
                id: null,
                key: "",
                label: "",
              },
            };
            this.$emit("assign-user", guestUser);
            console.log("Выход пользователя из системы");
          }
        })
        .then(() => {
          this.$refs["nav-sidebar"].hide();
          if (this.$route.path !== "/") {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.log(
              "Попытка неавторизованного пользователя осуществить выход из системы"
            );
          }
        });
    },

    // Выход через ЕСИА
    getLogout() {
      axios(this.url + "auth/get-logout", {
        withCredentials: true,
      })
        .then((response) => {
          console.log("Ссылка на выход ЕСИА");
          console.log(response);
          // location.href = response.data.url;
          this.esiaLogoutLink = response.data.url;
          this.shortInfo = {
            userId: null,
            userName: "",
            typeAuth: "",
          };
          this.fullInfo = {
            roles: [],
          };
          this.signOutEsia();
        })
        .catch((error) => {
          console.log("Ошибка выхода есиа");
          console.log(error);
        })
        .then(() => {
          this.$router.push("/");
        });
    },
    signOutEsia() {
      axios(this.esiaLogoutLink, {
        withCredentials: true,
      }).then((response) => {
        this.$refs["nav-sidebar"].hide();
        console.log("Ответ на запрос о выходе из ЕСИА");
        console.log(response);
      });
    },
  },

  mounted: function () {
    this.getLogin();
  },
};
</script>
