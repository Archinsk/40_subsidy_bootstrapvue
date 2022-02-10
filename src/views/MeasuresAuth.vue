<template>
  <div>
    <section v-show="!chatIsActive" class="measures">
      <div class="measures__wrapper container">
        <h4 class="measures__heading text-center">
          Меры поддержки
          <span class="badge badge-primary">{{ itemsTotal }}</span>
        </h4>
        <div class="row justify-content-center mb-3">
          <div class="col-3">
            <!--            <MeasuresFilterExample-->
            <!--              :fd="filters"-->
            <!--              @select-esia="selectEsia"-->
            <!--              @chat-activation="chatActivation"-->
            <!--              @clear-filter="clearFilter"-->
            <!--              @scenario-filter="scenarioFilter"-->
            <!--            ></MeasuresFilterExample>-->
            <MeasuresFilter
              :tags="tags"
              :selected-items="selectedFilters"
              @filter-changed="selectedFilters = $event"
              @filter="filterByTags"
              @clear-filter="clearFilter"
              @select-esia="selectEsia"
              @chat-activation="chatActivation"
            ></MeasuresFilter>
          </div>
          <div class="col-9">
            <!--                        <MeasuresCardsListExample :measuresPack="xhrResponse" count="10"></MeasuresCardsListExample>-->
            <MeasuresCardsList
              :measures-cards-list="measuresCardsList"
              :filtered-measures="filtredEsiaMeasures"
              :items-total="itemsTotal"
              :page="page"
              :page-size="pageSize"
              :items-per-page="itemsPerPage"
              @change-page-size="changePageSize($event)"
              @change-page="changePage"
            ></MeasuresCardsList>
          </div>
        </div>
      </div>
    </section>

    <section v-show="chatIsActive" class="bot">
      <Chat
        isActive="true"
        isFlyingDown="true"
        :messages="replicsList"
        :quest="inputText"
        @close-chat="chatDisactivation"
        @add-quest="addQuest($event)"
      ></Chat>
    </section>
  </div>
</template>

<script>
// import MeasuresFilterExample from "@/components/MeasuresFilterExample";
import MeasuresFilter from "@/components/MeasuresFilter";
import MeasuresCardsList from "@/components/MeasuresCardsList";
import Chat from "@/components/Chat";
import axios from "axios";

export default {
  name: "Measures",

  components: {
    // MeasuresCardsListExample,
    MeasuresCardsList,
    // MeasuresFilterExample,
    MeasuresFilter,
    Chat,
  },

  data() {
    return {
      url: "http://192.168.18.171:8080/api/",
      // url: "https://open-demo.isands.ru/api/",
      measuresCardsList: [],
      itemsTotal: 0,
      page: 1,
      pageSize: 10,
      itemsPerPage: [10, 25, 50],
      scenario: 0,
      chatIsActive: false,
      inputText: "",
      replics: [
        {
          id: 1,
          author: "bot",
          content:
            "Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки.",
        },
        {
          id: 2,
          author: "bot",
          content: "Укажите, какой объем денежных средств вам требуется?",
        },
        // {id: 3, author: "bot", content: "Вот что найдено по слову"},
        // {id: 4, author: "user", content: "А теперь рыбалка",},
        // {id: 5, author: "bot", content: "К сожалению, ничего не найдено",},
      ],
      faq: [
        {
          id: 1,
          keywords: ["covid", "ковид", "корона"],
          answers: [
            { content: "Запись на вакцинацию", link: "https://google.com" },
            { content: "Сертификат вакцинированного", link: "https://ya.ru" },
            { content: "Мои QR-коды", link: "https://ya.ru" },
          ],
        },
        {
          id: 2,
          keywords: ["спорт"],
          answers: [
            {
              content: "Присвоение спортивных разрядов",
              link: "https://google.com",
            },
            {
              content: "Присвоение квалификационных категорий спортивных судей",
              link: "https://google.com",
            },
            {
              content:
                "Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации",
              link: "https://google.com",
            },
          ],
        },
        {
          id: 3,
          keywords: ["грант", "гранты"],
          answers: [
            {
              content:
                "Гранты в форме субсидий в сфере научной и инновационной деятельности",
              link: "./subsidyinfo1",
            },
            {
              content:
                "Гранты в форме субсидии на развитие инновационного проекта",
              link: "./subsidyinfo2",
            },
            {
              content:
                "Гранты субъектам малого и среднего предпринимательства на реализацию проектов в приоритетных сферах экономики",
              link: "./subsidyinfo3",
            },
          ],
        },
        {
          id: 4,
          keywords: ["субсидия", "субсидии"],
          answers: [
            {
              content:
                "Гранты в форме субсидий в сфере научной и инновационной деятельности",
              link: "./subsidyinfo1",
            },
            {
              content:
                "Гранты в форме субсидии на развитие инновационного проекта",
              link: "./subsidyinfo2",
            },
          ],
        },
        {
          id: 5,
          keywords: ["инновация", "инновации"],
          answers: [
            {
              content:
                "Гранты в форме субсидий в сфере научной и инновационной деятельности",
              link: "./subsidyinfo1",
            },
            {
              content:
                "Гранты в форме субсидии на развитие инновационного проекта",
              link: "./subsidyinfo2",
            },
          ],
        },
        {
          id: 6,
          keywords: ["наука"],
          answers: [
            {
              content:
                "Гранты в форме субсидий в сфере научной и инновационной деятельности",
              link: "./subsidyinfo1",
            },
          ],
        },
        {
          id: 7,
          keywords: [
            "20000000",
            "20000000 руб",
            "20 000 000",
            "20 000 000 руб",
          ],
          answers: [
            {
              content:
                "Укажите срок оказания поддержки в формате «ДД.ММ.ГГГГ - ДД.ММ.ГГГГ»",
              link: "",
            },
          ],
        },
        {
          id: 7,
          keywords: ["01.01.2022-31.12.2022"],
          answers: [
            {
              content:
                "Субсидия на возмещение части затрат, направленных на проведение комплекса агротехнологических работ, повышение уровня экологической безопасности сельскохозяйственного производства, а также на повышение плодородия и качества почв",
              link: "./subsidyinfo5",
            },
            {
              content:
                "Субсидия на возмещение затрат, понесенных в текущем финансовом году, связанных с закупкой сельскохозяйственной техники",
              link: "./subsidyinfo5",
            },
          ],
        },
      ],
      tags: [],
      selectedFilters: [],
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
      filtredEsiaMeasures: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100,
      ],
    };
  },

  computed: {
    replicsList: function () {
      if (this.chatIsActive) {
        return this.replics;
      } else {
        return this.replics.filter((item) => item.id === 1);
      }
    },
  },

  methods: {
    getMeasuresCardslist(page, pageSize, sortCol = "id", sortDesc = false) {
      const xhr = new XMLHttpRequest();
      let url =
        this.url +
        "serv/get-services?pageNum=" +
        (page - 1) +
        "&pageSize=" +
        pageSize +
        "&sortCol=" +
        sortCol +
        "&sortDesc=" +
        sortDesc +
        "&active=true";
      if (this.selectedFilters.length) {
        this.selectedFilters.forEach((tag) => {
          url += "&tags=" + tag
        })
      }
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Список мер");
        console.log(xhr.response);
        this.measuresCardsList = xhr.response;
        this.itemsTotal = xhr.response.totalElements;
      };
      xhr.send();
    },

    getTags() {
      console.log("Получение тегов");
      axios.get(this.url + "serv/get-tags").then((response) => {
        console.log(response);
        this.tags = response.data.content;
      });
    },

    changePageSize(newPageInfo) {
      this.page = newPageInfo[0];
      this.pageSize = newPageInfo[1];
      this.getMeasuresCardslist(this.page, this.pageSize);
    },

    changePage(page) {
      console.log(page);
      this.page = page;
      this.getMeasuresCardslist(this.page, this.pageSize);
    },

    selectEsia() {
      console.log("Поиск на основе ЕСИА");
      this.filters[0].selected.push(2);
      this.filters[2].selected.push(2);
      this.filters[5].selected.push(3);
      this.scenario = 2;
    },
    scenarioFilter() {
      console.log("Фильтрация по сценарию " + this.scenario);
      if (this.scenario === 2) {
        this.filtredEsiaMeasures = [1, 3];
      } else {
        this.scenarioRandomFilter();
      }
    },
    scenarioRandomFilter() {
      let resultArray = [];
      this.filtredEsiaMeasures.forEach((item) => {
        if (Math.round(Math.random())) {
          resultArray.push(item);
        }
      });
      this.filtredEsiaMeasures = resultArray;
    },
    filterByTags() {
      console.log(this.selectedFilters);
      this.getMeasuresCardslist(this.page, this.pageSize);
    },
    clearFilter() {
      console.log("Очистка фильтра");
      this.filters.forEach(function (item) {
        item.selected = [];
      });
      this.filtredEsiaMeasures = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      ];
      this.scenario = 0;

      this.selectedFilters.splice(0, this.selectedFilters.length);
      this.getMeasuresCardslist(this.page, this.pageSize);
    },

    chatActivation() {
      this.chatIsActive = true;
    },
    chatDisactivation() {
      this.chatIsActive = false;
    },
    addQuest(inputValue) {
      let quest = {
        id: this.replics.length + 1,
        author: "user",
        content: inputValue,
      };
      this.replics.push(quest);
      let answer;
      let answers;
      this.faq.forEach(function (item) {
        item.keywords.forEach(function (i) {
          if (inputValue.trim().toLowerCase() === i) {
            answers = item.answers;
          }
        });
      });
      if (answers) {
        let links = answers.map(function (someth) {
          let ans = { link: someth.link, content: someth.content };
          return ans;
        });
        answer = {
          author: "bot",
          content: "",
          findedAnswers: links,
        };
      } else {
        answer = {
          author: "bot",
          content: "Извините, я ничего не нашёл.",
        };
      }
      answer.id = this.replics.length + 1;
      this.replics.push(answer);
    },
  },

  mounted: async function () {
    this.getMeasuresCardslist(this.page, this.pageSize);
    this.getTags();
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
