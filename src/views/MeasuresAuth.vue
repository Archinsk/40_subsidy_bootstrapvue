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
            <MeasuresFilter
              :tags="tags"
              :selected-items="selectedFilters"
              @search-measures="searchMeasures($event)"
              @filter-changed="selectedFilters = $event"
              @filter="getServises"
              @clear-filter="clearFilter"
              @select-esia="selectEsia"
              @chat-activation="chatActivation"
            ></MeasuresFilter>
          </div>
          <div class="col-9">
            <MeasuresCardsList
              :measures-cards-list="measuresCardsList"
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
import MeasuresFilter from "@/components/MeasuresFilter";
import MeasuresCardsList from "@/components/MeasuresCardsList";
import Chat from "@/components/Chat";
import axios from "axios";

export default {
  name: "Measures",

  components: {
    MeasuresCardsList,
    MeasuresFilter,
    Chat,
  },

  data() {
    return {
      // url: "http://192.168.18.171:8080/api/",
      // url: "https://open-demo.isands.ru/api/",
      url: "https://open-newtemplate.isands.ru/api/",
      searchText: "",
      tags: [],
      selectedFilters: [],
      measuresCardsList: [],
      itemsTotal: 0,
      page: 1,
      pageSize: 10,
      itemsPerPage: [10, 25, 50],
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
    };
  },

  methods: {
    // Фильтрация и поиск
    getTags() {
      axios.get(this.url + "serv/get-tags").then((response) => {
        this.tags = response.data.content;
      });
    },
    searchMeasures(text) {
      this.searchText = text;
      this.getServises();
      this.searchText = "";
    },
    // Фейковый метод (из-за отсутствия исходных данных), уставливает 2 статических флага в фильтре и осуществляет поиск по указанным тегам
    selectEsia() {
      this.selectedFilters.splice(0, this.selectedFilters.length, 4, 8);
      this.getServises();
    },
    clearFilter() {
      this.selectedFilters.splice(0, this.selectedFilters.length);
      this.getServises();
    },

    // Получение списка мер
    getServises() {
      axios
        .get(this.url + "serv/get-services" + this.queryParams)
        .then((response) => {
          this.measuresCardsList = response.data.content;
          this.itemsTotal = response.data.totalElements;
          window.scrollTo(0, 0);
        });
    },

    // Пагинация
    changePageSize(newPageInfo) {
      this.page = newPageInfo[0];
      this.pageSize = newPageInfo[1];
      this.getServises();
    },
    changePage(page) {
      console.log(page);
      this.page = page;
      this.getServises();
    },

    // Чат-бот
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

  computed: {
    queryParams: function () {
      let query =
        "?pageNum=" +
        (this.page - 1) +
        "&pageSize=" +
        this.pageSize +
        "&sortCol=id&sortDesc=false&active=true";
      if (this.selectedFilters.length) {
        this.selectedFilters.forEach((tag) => {
          query += "&tags=" + tag;
        });
      }
      if (this.searchText) {
        query += "&name=" + this.searchText;
      }
      return query;
    },
    replicsList: function () {
      if (this.chatIsActive) {
        return this.replics;
      } else {
        return this.replics.filter((item) => item.id === 1);
      }
    },
  },

  mounted: function () {
    this.getTags();
    this.getServises();
  },
};
</script>
