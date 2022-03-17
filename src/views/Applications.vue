<template>
  <div>
    <section class="applications">
      <div class="measures__wrapper">
        <h4 class="primary-title text-center">
          Заявления
          <span :class="'badge badge-' + theme">{{ apps.totalElements }}</span>
        </h4>
        <ApplicationsCardsList
          :apps-cards-list="apps"
          :items-total="itemsTotal"
          :page="page"
          :page-size="pageSize"
          :items-per-page="itemsPerPage"
          :theme="theme"
          @change-page-size="changePageSize($event)"
          @change-page="changePage"
          @get-app-form="getAppForm($event)"
        ></ApplicationsCardsList>
      </div>
    </section>

    <b-modal
      id="edit-app"
      title="Редактирование заявления"
      size="xl"
      hide-footer
      no-stacking
      @close="cleanAppForm"
    >
      <template v-if="isLoadedStartForm && !isRequested">
        <Form
          ref="formInstanse"
          :form="appForm.form.scheme"
          :submission="appForm"
          :options="{ readOnly: !appForm.active }"
          @change="validateForm()"
        />
        <template v-for="action of appForm.form.actions">
          <b-button
            v-if="appForm.active || action.alwaysActive"
            :key="action.id"
            @click="invokeAction(action.id)"
            class="app-action-button"
            >{{ action.name }}</b-button
          >
        </template>
      </template>

      <template v-else>
        <template v-if="!isResponsed">
          <b-spinner variant="primary" label="Spinning"></b-spinner>
          <p>Заявление отправляется...</p>
        </template>
        <p v-else>Изменения сохранены!</p>
        <b-button @click="cleanAppForm">OK</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import ApplicationsCardsList from "@/components/ApplicationsCardsList";
import { Form } from "vue-formio";
import axios from "axios";

export default {
  name: "Applications",

  components: {
    ApplicationsCardsList,
    Form,
  },

  props: ["theme"],

  data() {
    return {
      // url: "http://192.168.18.171:8080/api/",
      // url: "https://open-demo.isands.ru/api/",
      url: "https://open-newtemplate.isands.ru/api/",
      apps: [],
      itemsTotal: 0,
      page: 1,
      pageSize: 10,
      itemsPerPage: [10, 25, 50],
      appForm: {
        active: false,
        data: {},
        form: {
          actions: [],
          id: 0,
          modelId: 0,
          scheme: {},
        },
        id: 0,
        orderId: "",
        status: "",
      },
      submitValidation: false,
      isDataValid: false,
      isFirstLoad: true,
      isLoadedStartForm: false,
      isRequested: false,
      isResponsed: false,
    };
  },

  methods: {
    getApps(page, pageSize, sortCol = "id", sortDesc = true, active = true) {
      axios
        .get(
          this.url +
            "app/get-apps?pageNum=" +
            (page - 1) +
            "&pageSize=" +
            pageSize +
            "&sortCol=" +
            sortCol +
            "&sortDesc=" +
            sortDesc +
            "&active=" +
            active
        )
        .then((response) => {
          this.apps = response.data;
          this.itemsTotal = response.data.totalElements;
        })
        .then(() => {
          console.log("Ответ распарсен");
          console.log(this.apps);
          this.isLoadedStartForm = true;
        });
    },

    getAppForm(id) {
      this.isLoadedStartForm = false;
      this.isRequested = false;
      this.isResponsed = false;
      axios
        .get(this.url + "app/get-appData?id=" + id)
        .then((response) => {
          console.log("Отправлен запрос");
          console.log(response);
          const newForm = response.data;
          newForm.data = JSON.parse(newForm.data);
          newForm.form.scheme = JSON.parse(newForm.form.scheme);
          this.appForm = newForm;
        })
        .then(() => {
          console.log("Ответ распарсен");
          console.log(this.appForm);
          this.isLoadedStartForm = true;
        });
    },

    validateForm() {
      console.log("qweqwe");
      // let myData = this.appForm;
      // let isDataValid = this.appForm.isValid;
      if (this.isFirstLoad) {
        console.log(this.$refs);
        //   this.isDataValid = form.checkValidity(form.submission.data);
        //   this.isFirstLoad = false;
      }
      // try {
      //   if (submission.changed) {
      //     updateFormDependableElements(formInstance, submission.changed);
      //   }
      // } catch (e) {
      //   console.error("updateFormDependableElements");
      // }
    },

    invokeAction(actionId) {
      console.log(this);
      this.isRequested = true;
      const request = {
        actionId: actionId,
        userId: 13,
        appId: this.appForm.id,
        data: JSON.stringify(this.appForm.data),
      };
      axios
        .post(this.url + "app/action-invoke", request)
        .then((response) => {
          console.log("Отправлен запрос");
          console.log(response);

          this.appForm = response.data.applicationDTO;
        })
        .then(() => {
          console.log("Записан ответ");
          this.appForm.data = JSON.parse(this.appForm.data);
          this.appForm.form.scheme = JSON.parse(this.appForm.form.scheme);
        })
        .then(() => {
          console.log("Распарсена форма и ее заполнение");
          this.isResponsed = true;
          this.appForm = {};
        });
    },

    cleanAppForm() {
      this.$bvModal.hide("edit-app");
      this.isRequested = false;
      this.isResponsed = false;
    },

    changePageSize(newPageInfo) {
      this.page = newPageInfo[0];
      this.pageSize = newPageInfo[1];
      this.getApps(this.page, this.pageSize);
      this.scrollToTop();
    },

    changePage(page) {
      this.page = page;
      this.getApps(this.page, this.pageSize);
      this.scrollToTop();
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted: function () {
    this.getApps(this.page, this.pageSize);
  },
};
</script>
