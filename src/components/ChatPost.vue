<template>
  <b-alert v-bind:data-index="index" :variant="getAuthor(message.author)" show>
    <div v-if="message.findedAnswers">
      <div v-if="message.findedAnswers[0].link">Вот, что я нашел:</div>
      <div v-for="answ of message.findedAnswers" :key="answ.content">
        <AnswerLink
          v-if="answ.link"
          :link="answ.link"
          :text="answ.content"
        ></AnswerLink>
        <AnswerText v-if="!answ.link" :text="answ.content"></AnswerText>
      </div>
    </div>
    {{ message.content }}
  </b-alert>
</template>

<script>
import AnswerLink from "@/components/AnswerLink";
import AnswerText from "@/components/AnswerText";
import Velocity from "velocity-animate";

export default {
  name: "ChatPost",
  components: {
    AnswerLink,
    AnswerText,
  },
  props: ["message", "index"],
  methods: {
    getAuthor(author) {
      return author === "bot" ? "primary" : "danger";
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(el, { opacity: 1, height: "2.25em" }, { complete: done });
      }, delay);
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },
  },
};
</script>

<style lang="scss" scoped></style>
