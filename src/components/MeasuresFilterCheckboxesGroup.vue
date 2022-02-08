<template>
  <div>
    <b-form-group :label="title" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="check-group"
        stacked
        @change="$emit('filter-changed', selected)"
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "MeasuresFilterCheckboxesGroup",

  props: ["title", "items", "selectedItems"],

  data() {
    return {
      selected: this.selectedItems, // Must be an array reference!
    };
  },

  computed: {
    options() {
      return this.items.map((item) => ({
        text: item.title,
        value: item.id,
      }));
    },
  },
};
</script>

<style scoped></style>
