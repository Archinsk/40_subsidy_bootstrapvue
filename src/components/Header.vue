<template>
  <header class="header sticky-top shadow">
    <div class="container">
      <b-navbar type="dark" variant="primary">
        <b-navbar-brand class="logo" to="/">
          <img
            src="@/assets/iss_logo_white.svg"
            class="d-inline-block align-top logo__image"
            alt="logo"
          />
          Информационные системы и сервисы
        </b-navbar-brand>

        <HeaderNav user-type="admin"></HeaderNav>

        <b-button variant="primary" class="d-lg-none btn-icon-only_square" v-b-toggle.sidebar>
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
  props: ["auth"],
};
</script>
