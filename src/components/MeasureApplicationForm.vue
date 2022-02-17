<template>
  <b-modal
    id="measure-application-form"
    size="xl"
    :title="titleModal"
    hide-footer
  >
    <Form
      :form="applicationForm.form.scheme"
      :submission="applicationForm"
      :options="{ readOnly: !applicationForm.active }"
    />
    <template v-if="applicationForm.active">
      <b-button
        v-for="action of applicationForm.form.actions"
        :key="action.id"
        @click="$emit('invoke-action', action.id)"
        >{{ action.name }}</b-button
      >
    </template>
  </b-modal>
</template>

<script>
import { Form } from "vue-formio";

export default {
  name: "MeasureApplicationForm",

  components: {
    Form,
  },

  props: ["applicationForm"],

  // updated: function () {
  //   console.log("При обновлении формы submission = ");
  //   console.log(this.applicationForm.data);
  // },

  computed: {
    titleModal: function () {
      let result = "Форма заявления";
      if (this.applicationForm.status) {
        result += " (" + this.applicationForm.status + ")";
      }
      result += ". Форма - " + this.applicationForm.form.name;
      return result;
    },
  },

  mounted: function () {
    console.log("При монтаже формы submission = ");
    console.log(this.applicationForm.data);
  },
};
</script>
