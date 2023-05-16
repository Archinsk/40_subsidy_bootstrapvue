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
        <b-nav-item v-if="user.auth" to="/account_info" active-class="active">
          Личный кабинет
        </b-nav-item>
        <b-nav-item to="/settings" active-class="active">
          Настройки
        </b-nav-item>
        <b-nav-item
          v-if="!user.auth"
          v-b-modal.auth
          class="active pr-md-5"
          id="signInButton"
        >
          Вход
        </b-nav-item>
        <b-nav-item
          v-else
          class="active pr-md-5"
          @click="$emit('sign-out')"
          id="signOutButton"
        >
          Выход
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-sidebar>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderNav",
  props: ["url", "theme", "user"],

  data() {
    return {};
  },

  methods: {
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

  created() {
    console.log("Создан компонент HeaderNav");
  },

  mounted() {
    console.log("Смонтирован компонент HeaderNav");
  },
};
</script>
