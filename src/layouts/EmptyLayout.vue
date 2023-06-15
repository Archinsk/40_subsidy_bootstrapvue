<template>
  <router-view
    :url="url"
    :dynamic-url="dynamicUrl"
    :user="user"
    :unread-messages="unreadMessages"
    :theme="theme"
    :config="config"
    @assign-user="$emit('assign-user', $event)"
    @sign-out="$emit('sign-out')"
  />
</template>

<script>
export default {
  name: "EmptyLayout",
  props: ["url", "dynamicUrl", "user", "unreadMessages", "theme", "config"],
};
</script>
