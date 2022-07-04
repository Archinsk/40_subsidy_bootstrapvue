<template>
  <div id="app">
    <component
      :is="layout"
      :url="url"
      :user="user"
      :theme="theme"
      @assign-user="assignUser($event)"
      @select-role="user.selectedRole = $event"
      @change-user-short-info="user.shortInfo = $event"
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
      url: "https://open-newtemplate.isands.ru/api/",
      // url: "https://open-demo.isands.ru/api/",
      user: {
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
      },
      theme: "primary",
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
