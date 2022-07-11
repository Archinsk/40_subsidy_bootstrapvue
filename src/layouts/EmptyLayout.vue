<template>
  <router-view
    :url="url"
    :user="user"
    :unread-messages="unreadMessages"
    :theme="theme"
    @assign-user="$emit('assign-user', $event)"
    @select-role="$emit('select-role', $event)"
  />
</template>

<script>
export default {
  name: "EmptyLayout",
  props: ["url", "user", "unreadMessages", "theme"],
};
</script>
