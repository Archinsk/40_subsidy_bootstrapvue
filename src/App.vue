<template>
  <div id="app">
    <component :is="layout">
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
    return {};
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
};
</script>

<style lang="scss">
  #app>div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #app{
    main {
      flex-grow: 1;
    }
  }
</style>
