<template>
  <div>
    <section class="measures">
      <div class="measures__wrapper">
        <h4 class="measures__heading text-center">
          Заявления
          <span class="badge badge-primary">{{ apps.totalElements }}</span>
        </h4>
        <div class="row justify-content-center mb-3">
          <div class="col-6">
            <ApplicationsCardsList
              :apps-cards-list="apps"
              :items-total="itemsTotal"
              :page="page"
              :page-size="pageSize"
              :items-per-page="itemsPerPage"
              @get-app-form="getAppForm($event)"
              @changepagesize3="changePageSize($event)"
            ></ApplicationsCardsList>
          </div>
        </div>
      </div>
    </section>
    <MeasureApplicationForm :application-form="appForm" />
  </div>
</template>

<script>
import ApplicationsCardsList from "@/components/ApplicationsCardsList";
import MeasureApplicationForm from "../components/MeasureApplicationForm";

export default {
  name: "Applications",

  components: {
    ApplicationsCardsList,
    MeasureApplicationForm,
  },

  data() {
    return {
      apps: [],
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
      itemsTotal: 0,
      page: 1,
      pageSize: 10,
      itemsPerPage: [3, 5, 10, 20],
    };
  },

  methods: {
    getApps(pageNum, pageSize, sortCol = "id", sortDesc = false) {
      const xhr = new XMLHttpRequest();
      const url =
        // "http://192.168.18.171:8080/api/serv/get-services?pageNum=" +
        "http://192.168.18.171:8080/api/app/get-apps?pageNum=" +
        // "https://open-demo.isands.ru/api/app/get-apps?pageNum=" +
        (pageNum - 1) +
        "&pageSize=" +
        pageSize +
        "&sortCol=" +
        sortCol +
        "&sortDesc=" +
        sortDesc;
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Список заявок");
        console.log(xhr.response);
        this.apps = xhr.response;
        this.itemsTotal = xhr.response.totalElements;
      };
      xhr.send();
    },
    getAjaxRequest(service, id, responseTarget, log) {
      const xhr = new XMLHttpRequest();
      const url = "http://192.168.18.171:8080/api/" + service + "?id=" + id;
      // const url = "https://open-demo.isands.ru:8080/api/" + service + "?id=" + id;
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log(log);
        console.log(xhr.response);
        console.log(JSON.parse(xhr.response.data));
        this[responseTarget] = xhr.response;
        this[responseTarget].data = JSON.parse(xhr.response.data);
        this[responseTarget].form.scheme = JSON.parse(xhr.response.form.scheme);

      };
      xhr.send();
    },
    getAppForm(id) {
      this.getAjaxRequest(
        "app/get-appData",
        id,
        "appForm",
        "Заполненная заявка id = " + id
      );
    },
    changePageSize(itemsPerPage) {
      console.log(itemsPerPage);
      this.pageSize = itemsPerPage;
      // this.changeItemsCount();
    },
    changePage(page) {
      console.log(page);
      this.page = page;
      this.changeItemsCount();
    },
    changeItemsCount() {
      console.log("Апдейт");
      const xhr = new XMLHttpRequest();
      let request =
        "https://www.d-skills.ru/40_subsidy_bootstrapvue/measures.php?page=" +
        this.page +
        "&pageSize=" +
        this.pageSize;
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log(xhr.response);
        this.xhrResponse = xhr.response;
      };
      xhr.send();
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
