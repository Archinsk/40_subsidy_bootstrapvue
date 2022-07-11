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
          :url="url"
          :user="user"
          :theme="theme"
          @assign-user="$emit('assign-user', $event)"
          @select-role="$emit('select-role', $event)"
        ></HeaderNav>

        <button
          type="button"
          :class="[
            'btn btn-outline-light position-relative btn-icon-only_square',
            unreadMessages ? 'mr-4' : 'mr-0',
          ]"
          @click="$bvModal.show('messages')"
        >
          <span class="material-icons">mail</span>
          <span
            v-if="unreadMessages"
            class="badge badge-pill badge-danger position-absolute"
            >{{ unreadMessages }}</span
          >
        </button>

        <b-button
          variant="outline-light"
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
  props: ["url", "user", "unreadMessages", "theme"],
};
</script>
