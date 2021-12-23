<template>
  <div>
    <HeaderOffcavas v-show="!chatIsActive" />
    <main class="content">
      <router-view />
    </main>
    <Footer v-show="!chatIsActive" />
  </div>
</template>

<script>
import HeaderOffcavas from "@/components/HeaderOffcavas";
import Footer from "@/components/Footer";

export default {
  name: "MainLayout",
  components: {
    HeaderOffcavas,
    Footer,
  },
  data() {
    return {
      chatIsActive: false,
    };
  },
};
</script>

<style scoped></style>
