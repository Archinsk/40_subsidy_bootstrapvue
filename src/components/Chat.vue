<template>
  <div class="chat">
    <ChatHeader
      v-show="isActive"
      @close-chat="$emit('close-chat')"
    ></ChatHeader>
    <div class="container">
      <ChatBoard
        :isActive="isActive"
        :isFlyingUp="isFlyingUp"
        :isFlyingDown="isFlyingDown"
        :messages="messages"
      ></ChatBoard>
      <ChatForm
        :isActive="isActive"
        :isFlyingUp="isFlyingUp"
        :isFlyingDown="isFlyingDown"
        :quest="quest"
        @add-quest="$emit('add-quest', $event)"
        @focus-input="$emit('focus-input')"
      ></ChatForm>
    </div>
  </div>
</template>

<script>
import ChatHeader from "@/components/ChatHeader";
import ChatBoard from "@/components/ChatBoard";
import ChatForm from "@/components/ChatForm";

export default {
  name: "Chat",
  components: {
    ChatHeader,
    ChatBoard,
    ChatForm,
  },
  props: ["isActive", "isFlyingUp", "isFlyingDown", "messages", "quest"],
  methods: {},
  data() {
    return {};
  },
};
</script>
