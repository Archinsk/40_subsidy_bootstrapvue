<template>
  <b-modal
    id="measure-application-form"
    size="xl"
    title="Форма заявления"
    cancel-title="Отмена"
    ok-title="Отправить"
  >
    <Form
      :form="applicationForm.form.scheme"
      :submission="applicationForm"
      :options="{ readOnly: !applicationForm.active }"
    />
    <b-button
      v-for="action of applicationForm.form.actions"
      :key="action.id"
      @click="$emit('invoke-action', action.id)"
      >{{ action.name }}</b-button
    >
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

  updated: function () {
    console.log("При обновлении формы submission = ");
    console.log(this.applicationForm.data);
  },

  mounted: function () {
    console.log("При монтаже формы submission = ");
    console.log(this.applicationForm.data);
  },
};
</script>

<style scoped></style>
