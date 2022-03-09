<template>
  <div id="app">
    <component :is="layout" :theme="theme">
      <router-view :theme="theme"/>
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
      theme: "cherry"
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
};
</script>
