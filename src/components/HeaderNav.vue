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
export default {
  name: "HeaderNav",
  props: ["theme", "user"],
};
</script>
