<template>
  <div id="messages-list">
    <ul class="list-group">
      <MessagesListItem v-for="i of 10" :key="i" />
    </ul>
  </div>
</template>

<script>
import MessagesListItem from "@/components/MessagesListItem";
export default {
  name: "MessagesList",
  components: { MessagesListItem },
};
</script>
