<template>
  <div class="search-section row justify-content-end">
    <div
      :class="[
        'search-group col-lg-9',
        { active: isActive },
        { flyingDown: isFlyingDown },
        { flyingUp: isFlyingUp },
      ]"
    >
      <b-form :class="{ isActive: inputValue }" @submit="onSubmit">
        <b-form-group
          id="inputGroupQuestion"
          label=""
          label-for="inputGroupQuestion"
        >
          <b-form-input
            id="inputQuestion"
            v-model.trim="inputValue"
            type="text"
            placeholder="Просто напишите то, что ищете..."
            autocomplete="off"
            required
            class="rounded-pill"
            @focus="$emit('focus-input')"
          ></b-form-input>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
          class="rounded-circle"
          tabindex="-1"
        >
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
  },

  watch: {
    quest: function () {
      this.inputValue = this.quest;
    },
  },
};
</script>
