<template>
  <div class="search-section row justify-content-end">
    <div :class="'searchBlock col-lg-9 ' + chatFieldClass()">
      <b-form :class="textInField" @submit="onSubmit">
        <b-form-group
          id="inputGroupQuestion"
          label=""
          label-for="inputGroupQuestion"
        >
          <b-form-input
            id="inputQuestion"
            v-model="inputValue"
            type="text"
            placeholder="Просто напишите то, что ищете..."
            autocomplete="off"
            required
            :class="roundedPill"
            @focus="$emit('focus-input')"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" class="rounded-circle" tabindex="-1">
          <span class="material-icons">send</span>
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatForm",

  props: ["quest", "isActive", "isFlyingUp", "isFlyingDown"],

  data() {
    return {
      inputValue: "",
      roundedPill: "rounded-pill",
      textInField: "",
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.inputValue.trim()) {
        this.$emit("add-quest", this.inputValue);
        this.inputValue = "";
      }
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

  watch: {
    inputValue: function () {
      if (this.inputValue.trim()) {
        console.log("Работает");
        this.textInField = "isActive";
      } else {
        console.log("В поле пусто");
        this.textInField = "";
      }
    },
    quest: function () {
      this.inputValue = this.quest;
    },
  },
};
</script>
