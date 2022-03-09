<template>
  <div class="page-wrapper">
    <Header :theme="theme"/>
    <main class="content">
      <router-view :theme="theme"/>
    </main>
    <Footer :theme="theme"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },
  props: [
          "theme"
  ]
};
</script>
