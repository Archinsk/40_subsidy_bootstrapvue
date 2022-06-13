<template>
  <div class="page-wrapper">
    <Header
      :theme="theme"
      :user="user"
      @assign-user="$emit('assign-user', $event)"
      @select-role="$emit('select-role', $event)"
    />
    <main class="content">
      <router-view :theme="theme" :user="user" />
    </main>
    <Footer :theme="theme" />
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
  props: ["theme", "user"],
};
</script>
