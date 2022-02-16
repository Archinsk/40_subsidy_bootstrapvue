<template>
  <div class="container">
    <section class="measures">
      <div class="measures__wrapper">
        <h4 class="measures__heading text-center">
          Заявления
          <span class="badge badge-primary">{{ apps.totalElements }}</span>
        </h4>
        <div class="row justify-content-center mb-3">
          <div class="col">
            <ApplicationsCardsList
              :apps-cards-list="apps"
              :items-total="itemsTotal"
              :page="page"
              :page-size="pageSize"
              :items-per-page="itemsPerPage"
              @change-page-size="changePageSize($event)"
              @change-page="changePage"
              @get-app-form="getAppForm($event)"
            ></ApplicationsCardsList>
          </div>
        </div>
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
          :form="appForm.form.scheme"
          :submission="appForm"
          :options="{ readOnly: !appForm.active }"
        />
        <template v-if="appForm.active">
          <b-button
            v-for="action of appForm.form.actions"
            :key="action.id"
            @click="invokeAction(action.id)"
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
// import MeasureApplicationForm from "../components/MeasureApplicationForm";
import { Form } from "vue-formio";
import axios from "axios";

export default {
  name: "Applications",

  components: {
    ApplicationsCardsList,
    // MeasureApplicationForm,
    Form,
  },

  data() {
    return {
      url: "http://192.168.18.171:8080/api/",
      // url: "https://open-demo.isands.ru/api/",
      // url: "https://open-newtemplate.isands.ru/api/",
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
          console.log(this.appForm);
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

    invokeAction(actionId) {
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

<style lang="scss" scoped>
$gap: 1rem;
$basic-color: var(--primary);
$text-color: #212529;
$support-color: grey;
$passive-color: #e4e4e4;
$active-color: #fff;
$back-color: #6688cc;

.content {
  .bot {
    overflow: hidden;
    background-color: $back-color;
  }
}

.measures {
  .measures__heading {
    margin: $gap 0;
  }

  a {
    text-decoration: none;
  }

  .measure__card {
    padding: $gap 0 0;
    margin-bottom: $gap;

    &:hover {
      box-shadow: 0 4px 20px rgb(0 46 69 / 10%);
    }

    .card-body {
      justify-content: space-between;
      margin: 0;
      padding: 0;

      & > * {
        margin-bottom: $gap;
      }

      .card-title {
        a {
          text-decoration: none;
          color: #212529;

          span {
            margin-right: $gap/2;
          }
        }
      }

      .card-text {
        color: $support-color;
        text-align: left;

        @media (min-width: 768px) {
          text-align: right;
        }

        b {
          color: $text-color;
        }
      }
    }

    hr {
      margin-top: 0;
    }

    .card-footer {
      justify-content: space-between;
      margin: 0;
      padding: 0;
      border: none;

      & > * {
        margin-bottom: $gap;
      }

      .measure__owner__logo {
        display: flex;

        .measure__owner__logo__image {
          height: 38px;
          margin-right: $gap/2;
          margin-top: $gap/2;
        }

        .measure__owner__logo__text {
          .logo__header__comment {
            color: $support-color;
          }

          .logo__name {
            color: $text-color;
            font-weight: bolder;
          }
        }
      }

      .measure__details {
        .measure__size {
          text-align: left;

          @media (min-width: 768px) {
            text-align: right;
          }

          .measure__size__header {
            color: $support-color;
          }

          .measure__size__value {
            color: $text-color;
            font-weight: bolder;
          }
        }
      }

      .measure__buttons {
        display: flex;
        align-items: start;

        @media (min-width: 992px) {
          justify-content: flex-end;
        }

        .measure__web__accessibility {
          height: 38px;
          border: 1px solid $basic-color;
          border-radius: 0.25rem;
          margin-right: $gap/2;
        }
      }
    }
  }
}
</style>