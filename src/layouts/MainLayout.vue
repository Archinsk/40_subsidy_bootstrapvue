<template>
  <div class="page-wrapper">
    <Header
      :config="config"
      :url="url"
      :dynamic-url="dynamicUrl"
      :user="user"
      :unread-messages="unreadMessages"
      :theme="theme"
      @assign-user="$emit('assign-user', $event)"
      @sign-in-esia="$emit('sign-in-esia')"
      @sign-in-local="$emit('sign-in-local')"
      @sign-out="$emit('sign-out')"
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
  props: ["url", "dynamicUrl", "user", "unreadMessages", "theme", "config"],
};
</script>
