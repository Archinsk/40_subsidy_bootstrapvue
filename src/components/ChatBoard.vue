<template>
  <div class="chat-section row">
    <div class="col-3 d-none d-lg-block">
      <img
        id="botWaiting"
        class="position-absolute"
        :class="{ active: isActive }"
        src="@/assets/robot.png"
        alt=""
      />
    </div>
    <div :class="'chatField col-lg-9 ' + chatFieldClass()">
      <b-alert
        v-for="message of messages"
        :key="message.id"
        :variant="getAuthor(message.author)"
        show
      >
        <div v-if="message.findedAnswers">
          <div v-if="message.findedAnswers[0].link">Вот, что я нашел:</div>
          <div v-for="answ of message.findedAnswers" :key="answ.content">
            <router-link
              v-if="answ.link"
              :to="answ.link"
              class="answer-link btn btn-primary"
              >{{ answ.content }}</router-link
            >
            <div v-else class="answer-text">{{ answ.content }}</div>
          </div>
        </div>
        {{ message.content }}
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBoard",
  data() {
    return {
      linked: "https://ya.ru",
      texted: "Грант для ученых",
    };
  },
  props: ["isActive", "isFlyingUp", "isFlyingDown", "messages"],
  methods: {
    getAuthor(author) {
      return author === "bot" ? "primary" : "danger";
    },
    chatFieldClass() {
      let act = this.isActive;
      let flyUp = this.isFlyingUp;
      let flyDown = this.isFlyingDown;

      if (act) {
        if (!flyUp && !flyDown) {
          return "active";
        }
        if (flyUp) {
          return "active flyingUp";
        }
        if (flyDown) {
          return "active flyingDown";
        }
      } else {
        return "";
      }
    },
  },
};
</script>
