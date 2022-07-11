<template>
  <div class="page-wrapper">
    <Header
      :url="url"
      :user="user"
      :unread-messages="unreadMessages"
      :theme="theme"
      @assign-user="$emit('assign-user', $event)"
      @select-role="$emit('select-role', $event)"
    />
    <main class="content">
      <router-view
        :url="url"
        :user="user"
        :theme="theme"
        @select-role="$emit('select-role', $event)"
        @change-user-short-info="$emit('change-user-short-info', $event)"
      />
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
  props: ["url", "user", "unreadMessages", "theme"],
};
</script>
