<template>
  <div>
    <b-form-group :label="title" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        :button-variant="theme"
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

  props: ["title", "items", "selectedItems", "theme"],

  data() {
    return {
      selected: this.selectedItems,
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
