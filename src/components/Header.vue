<template>
  <header :class="'header sticky-top shadow bg-' + theme">
    <div class="container">
      <b-navbar type="dark" :variant="theme">
        <b-navbar-brand class="logo" to="/">
          <img
            src="@/assets/iss_logo_white.svg"
            class="d-inline-block align-top logo__image"
            alt="logo"
          />
          Информационные системы и сервисы
        </b-navbar-brand>

        <HeaderNav
          :theme="theme"
          :user="user"
          @assign-user="$emit('assign-user', $event)"
        ></HeaderNav>

        <b-button
          :variant="theme"
          class="d-lg-none btn-icon-only_square"
          v-b-toggle.sidebar
        >
          <span class="material-icons">menu</span>
        </b-button>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";

export default {
  name: "Header",
  components: {
    HeaderNav,
  },
  props: ["theme", "user"],
};
</script>
