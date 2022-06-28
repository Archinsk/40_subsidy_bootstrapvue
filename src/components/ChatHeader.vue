<template>
  <div class="chat-header-full">
    <div class="container">
      <div class="chat-header">
        <img
          src="@/assets/robot_avatar.png"
          alt=""
          class="chat-header__avatar rounded-circle d-lg-none"
        />
        <div class="chat-header__title d-lg-none text-primary">
          Робот Василий
        </div>
        <b-button
          @click="$emit('close-chat')"
          variant="primary"
          class="close-button rounded-circle"
        >
          <span class="material-icons">close</span>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
};
</script>
