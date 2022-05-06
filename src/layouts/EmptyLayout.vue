<template>
  <router-view
    :theme="theme"
    :user="user"
    @assign-user="$emit('assign-user', $event)"
  />
</template>

<script>
export default {
  name: "EmptyLayout",
  props: ["theme", "user"],
};
</script>
