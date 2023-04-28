<template>
  <div class="page-wrapper">
    <Header
      :config="config"
      :url="url"
      :user="user"
      :unread-messages="unreadMessages"
      :theme="theme"
      @assign-user="$emit('assign-user', $event)"
      @select-role="$emit('select-role', $event)"
    />
    <main class="content">
      <slot></slot>
    </main>
    <Footer :theme="theme" :config="config" />
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
  props: ["url", "user", "unreadMessages", "theme", "config"],
};
</script>
