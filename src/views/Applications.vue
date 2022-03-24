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
          @get-app-form="getStartForm($event)"
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
      <template v-if="isResponse">
        <div v-if="isAlertVisible" class="alert alert-success" role="alert">
          {{ successComment }}
        </div>
        <h4 class="text-center">{{ formLayout.form.name }}</h4>
        <div class="row">
          <div class="col-10">
            <Form
              ref="vueForm"
              :form="appForm.form.scheme"
              :submission="appForm"
              :options="{ readOnly: !appForm.active }"
            />
          </div>
          <div
            v-if="appForm.form.actions && formLayout.form.actions.length > 0"
            class="col-2"
          >
            <template v-for="action of appForm.form.actions">
              <template v-if="formLayout.active || action.alwaysActive">
                <b-button
                  v-if="action.backAction"
                  :key="action.id"
                  type="button"
                  class="btn btn-block btn-primary mb-2"
                  @click="invokeAction(action.id, true)"
                  >{{ action.name }}</b-button
                >
                <button
                  v-else
                  :key="action.id"
                  type="button"
                  class="btn btn-block btn-primary mb-2"
                  @click="invokeAction(action.id)"
                >
                  {{ action.name }}
                </button>
              </template>
            </template>
          </div>
        </div>
      </template>

      <template v-else-if="isLoading">
        <div class="card my-3">
          <div class="card-body text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div>{{ loadingComment }}</div>
          </div>
        </div>
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
      isLoading: false,
      loadingComment: "Загрузка формы заявления",
      successComment: "Форма заявления успешно загружена!",
      isResponse: false,
      isAlertVisible: false,
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
      isValidFormData: false,
      isFirstLoad: true,

      // isLoadedStartForm: false,
      // isRequested: false,
      // isResponsed: false,
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

    // Стартовая форма заявления
    getStartForm(id) {
      this.isResponse = false;
      this.isLoading = true;
      this.loadingComment = "Загрузка формы заявления";
      setTimeout(this.getForm(id), 1000);
    },
    getForm(id) {
      axios
        .get(this.url + "serv/get-appData?id=" + id)
        .then((response) => {
          console.log("Стартовая форма");
          console.log(response);
          const newForm = response.data.applicationDTO;
          newForm.data = JSON.parse(newForm.data);
          newForm.form.scheme = JSON.parse(newForm.form.scheme);
          this.appForm = newForm;
        })
        .then(() => {
          this.isResponse = true;
          this.isLoading = false;
          this.isAlertVisible = true;
          setTimeout(this.hideAlert, 3000);
        });
    },

    // getAppForm(id) {
    //   this.isLoadedStartForm = false;
    //   this.isRequested = false;
    //   this.isResponsed = false;
    //   axios
    //     .get(this.url + "app/get-appData?id=" + id)
    //     .then((response) => {
    //       console.log("Отправлен запрос");
    //       console.log(response);
    //       const newForm = response.data;
    //       newForm.data = JSON.parse(newForm.data);
    //       newForm.form.scheme = JSON.parse(newForm.form.scheme);
    //       this.appForm = newForm;
    //     })
    //     .then(() => {
    //       console.log("Ответ распарсен");
    //       console.log(this.appForm);
    //       this.isLoadedStartForm = true;
    //     });
    // },

    hideAlert() {
      this.isAlertVisible = false;
    },

    validateForm() {
      return this.$refs.vueForm.formio.checkValidity(
        this.$refs.vueForm.formio.submission.data
      );
    },

    // invokeAction(actionId) {
    //   console.log(this);
    //   this.isRequested = true;
    //   const request = {
    //     actionId: actionId,
    //     userId: 13,
    //     appId: this.appForm.id,
    //     data: JSON.stringify(this.appForm.data),
    //   };
    //   axios
    //     .post(this.url + "app/action-invoke", request)
    //     .then((response) => {
    //       console.log("Отправлен запрос");
    //       console.log(response);
    //
    //       this.appForm = response.data.applicationDTO;
    //     })
    //     .then(() => {
    //       console.log("Записан ответ");
    //       this.appForm.data = JSON.parse(this.appForm.data);
    //       this.appForm.form.scheme = JSON.parse(this.appForm.form.scheme);
    //     })
    //     .then(() => {
    //       console.log("Распарсена форма и ее заполнение");
    //       this.isResponsed = true;
    //       this.appForm = {};
    //     });
    // },

    // cleanAppForm() {
    //   this.$bvModal.hide("edit-app");
    //   this.isRequested = false;
    //   this.isResponsed = false;
    // },

    invokeAction(actionId, isBackAction = false) {
      console.log("Выполнение действия");
      this.isFirstLoad = false;
      this.isValidFormData = this.validateForm();
      console.log("Валидность формы:" + this.isValidFormData);
      if (this.isValidFormData) {
        this.loadingComment = "Отправка данных заявления";
        this.isResponse = false;
        this.isLoading = true;
        setTimeout(this.invoke, 1000, actionId, isBackAction);
      } else {
        this.$refs.vueForm.formio.submit();
      }
    },
    invoke(actionId, isBackAction = false) {
      const request = {
        actionId: actionId,
        userId: 13,
        appId: this.formLayout.id,
        data: JSON.stringify(this.formLayout.data),
      };
      axios
        .post(this.url + "app/action-invoke", request)
        .then((response) => {
          console.log("Ответ на экшн");
          console.log(response);
          if (response.data.responseObject) {
            let fileApp = JSON.parse(response.data.responseObject);
            console.log("Объект файла");
            console.log(fileApp);
            let link = document.createElement("a");
            link.setAttribute("download", fileApp.fileName);
            link.setAttribute(
              "href",
              "data:application/octet-stream;base64," + fileApp.fileData
            );
            link.click();
          } else {
            if (isBackAction) {
              this.$router.push("/registry");
            } else {
              this.getNextForm(response);
            }
          }
        })
        .then(() => {
          this.isResponse = true;
          this.isLoading = false;
          this.isAlertVisible = true;
          this.isFirstLoad = true;
          setTimeout(this.hideAlert, 3000);
        });
    },

    // Переход к следующей форме (стандартное дейтвие)
    getNextForm(response) {
      console.log("Следующая форма");
      console.log(response);
      let nextForm = response.data.applicationDTO;
      nextForm.data = JSON.parse(nextForm.data);
      nextForm.form.scheme = JSON.parse(nextForm.form.scheme);
      this.formLayout = nextForm;
      this.successComment = "Заявление отправлено!";
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
