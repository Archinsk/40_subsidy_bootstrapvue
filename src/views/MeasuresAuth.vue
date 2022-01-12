<template>
  <div>
    <section v-show="!chatIsActive" class="measures">
      <div class="measures__wrapper">
        <h4 class="measures__heading text-center">
          Меры поддержки
          <span class="badge badge-primary">{{ itemsTotal }}</span>
        </h4>
        <div class="row justify-content-center mb-3">
          <div class="col-2">
            <MeasuresFilter :fd="filters"></MeasuresFilter>
          </div>
          <div class="col-6">
            <!--                        <MeasuresCardsListExample :measuresPack="xhrResponse" count="10"></MeasuresCardsListExample>-->
            <MeasuresCardsList
              :measures-cards-list="measuresCardsList"
              :items-total="itemsTotal"
              :page="page"
              :page-size="pageSize"
              :items-per-page="itemsPerPage"
            ></MeasuresCardsList>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import MeasuresCardsListExample from "@/components/MeasuresCardsListExample";
import MeasuresCardsList from "@/components/MeasuresCardsList";
import MeasuresFilter from "@/components/MeasuresFilter";

export default {
  name: "Measures",

  components: {
    // MeasuresCardsListExample,
    MeasuresCardsList,
    MeasuresFilter,
  },

  data() {
    return {
      measuresCardsList: [],
      itemsTotal: 0,
      page: 1,
      pageSize: 10,
      itemsPerPage: [3, 5, 10, 20],
      // scenario: 0,
      filters: [
        {
          title: "Отрасль экономики:",
          selected: [], // Must be an array reference!
          options: [
            { text: "Промышленность", value: "1" },
            { text: "Сельское хозяйство", value: "2" },
            { text: "Строительство", value: "3" },
            { text: "Транспорт", value: "4" },
            { text: "Связь", value: "5" },
            { text: "Торговля и общественное питание", value: "6" },
            { text: "Культура и искусство", value: "7" },
            { text: "Информационно-вычислительное обслуживание", value: "8" },
            { text: "Наука и научное обслуживание", value: "9" },
          ],
        },
        {
          title: "Форма/вид поддержки:",
          selected: [], // Must be an array reference!
          options: [
            { text: "Финансовая", value: "1" },
            { text: "Информационная", value: "2" },
            { text: "Образовательная", value: "3" },
            { text: "Консультационная", value: "4" },
            { text: "Имущественная", value: "5" },
            { text: "Инновационная", value: "6" },
          ],
        },
        {
          title: "Вид получателя:",
          selected: [], // Must be an array reference!
          options: [
            { text: "ИП", value: "1" },
            { text: "ЮЛ", value: "2" },
          ],
        },
        {
          title: "Размер поддержки:",
          selected: [], // Must be an array reference!
          options: [
            { text: "до 100 т.р.", value: "1" },
            { text: "от 500 т.р. до 1 млн.р.", value: "2" },
            { text: "от 1 млн.руб до 10 млн.р.", value: "3" },
            { text: "от 10 млн.руб до 20 млн.р.", value: "4" },
          ],
        },
        {
          title: "Срок оказания поддержки:",
          selected: [], // Must be an array reference!
          options: [
            { text: "до 1 месяца", value: "1" },
            { text: "от 1 до 3 месяцев", value: "2" },
            { text: "от 3 до 6 месяцев", value: "3" },
            { text: "от 6 месяцев до 1 года", value: "4" },
            { text: "от 1 года до 3 лет", value: "5" },
          ],
        },
        {
          title: "Категория получателя:",
          selected: [], // Must be an array reference!
          options: [
            { text: "микро", value: "1" },
            { text: "малые", value: "2" },
            { text: "средние", value: "3" },
          ],
        },
      ],
    };
  },

  methods: {
    getMeasuresCardslist(pageNum, pageSize, sortCol = "id", sortDesc = false) {
      const xhr = new XMLHttpRequest();
      const url =
        "http://192.168.18.171:8080/open-core/api/serv/get-services?pageNum=" +
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
        console.log(
          "Страницей MeasuresAuth получен список с услугами (getMeasuresCardslist) с open-template"
        );
        console.log(xhr.response);
        this.measuresCardsList = xhr.response.listEntity;
        this.itemsTotal = xhr.response.count;
      };
      xhr.send();
    },
    changePageSize(itemsPerPage) {
      console.log(itemsPerPage);
      this.pageSize = itemsPerPage;
      this.changeItemsCount();
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
    selectEsia() {
      console.log("Начинаю поиск на основе ЕСИА");
      this.filters[0].selected.push(2);
      this.filters[2].selected.push(2);
      this.filters[5].selected.push(3);
      this.scenario = 2;
    },
    scenarioFilter() {
      console.log("Начинаю фильтрацию по сценарию " + this.scenario);
      const xhr = new XMLHttpRequest();
      let request =
        "https://www.d-skills.ru/40_subsidy_bootstrapvue/scenario.php?scenario=" +
        this.scenario;
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log(xhr.response);
        this.xhrResponse = xhr.response;
        this.totalItems = 2;
      };
      xhr.send();
    },
    clearFilter() {
      this.filters.forEach(function (item) {
        item.selected = [];
      });
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
        this.totalItems = 160;
      };
      xhr.send();
    },
  },

  mounted: function () {
    this.getMeasuresCardslist(this.page, this.pageSize);
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
