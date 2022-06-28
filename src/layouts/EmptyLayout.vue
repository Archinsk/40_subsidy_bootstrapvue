<template>
  <router-view
    :url="url"
    :user="user"
    :theme="theme"
    @assign-user="$emit('assign-user', $event)"
    @select-role="$emit('select-role', $event)"
  />
</template>

<script>
export default {
  name: "EmptyLayout",
  props: ["url", "user", "theme"],
};
</script>
