<template>
  <b-modal
    id="application-form"
    size="xl"
    title="Форма заявления"
    cancel-title="Отмена"
    ok-title="Отправить"
  >
    <Form :form="ApplicationForm" language="ru"/>
  </b-modal>
</template>

<script>
import { Form } from "vue-formio";

export default {
  name: "MeasureApplicationForm",

  components: {
    Form,
  },

  props: ["ApplicationForm"],
};
</script>

<style scoped></style>
