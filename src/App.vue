<template>
  <div id="app">
    <component
      :is="layout"
      :theme="theme"
      @assign-user="assignUser($event)"
      :user="user"
    >
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";

export default {
  name: "App",
  data() {
    return {
      theme: "primary",
      user: {
        shortInfo: {
          userId: null,
          userName: "",
          typeAuth: "",
        },
        fullInfo: {
          roles: [],
        },
      },
    };
  },
  components: {
    MainLayout,
    EmptyLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },

  methods: {
    assignUser(user) {
      this.user = user;
    },
  },
};
</script>
