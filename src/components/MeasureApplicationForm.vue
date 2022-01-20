<template>
  <b-modal
    id="measure-application-form"
    size="xl"
    :title="applicationForm.form.name"
    cancel-title="Отмена"
    ok-title="Отправить"
  >
    <Form
      :form="JSON.parse(applicationForm.form.scheme)"
      :submission="JSON.parse(applicationForm.data)"
      language="ru"
      :options="opt"
    />
    <b-button
      v-for="action of applicationForm.form.actions"
      :key="action.id"
      @click="invokeAction(action.id)"
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

  data() {
    return {
      opt: {
        language: "ru",
        readOnly: !this.applicationForm.active,
      },
      invokeResponse: {},
    };
  },

  methods: {
    async invokeAction(actionId) {
      console.log("invoking action");
      let payload = {};
      payload.actionId = actionId;
      payload.userId = 1;
      payload.appId = 0;
      payload.data = this.applicationForm.data;
      const url = "http://192.168.18.171:8180/api/app/action-invoke";
      const request = JSON.stringify(payload);
      this.postAjaxRequest(url, request, "invokeResponse", "Ответ на событие");
      // let result = await axios.post("/o/prometheus/v1/action/invoke", payload, {headers: {'Content-Type': 'text/plain; charset=UTF-8'}});
      // console.debug(result);
      // if (result.data.errors.length === 0) {
      //   console.debug("no errors")
      //   await loadFromResponse(result.data.applicationDTO);
      // } else {
      //   console.error(result.data.errors)
      // }
    },
    postAjaxRequest(url, request, responseTarget, logHeader) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(logHeader);
          console.log(xhr.response);
          this[responseTarget] = xhr.response;
        }
      };
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(request);
    },
  },
};
</script>

<style scoped></style>
