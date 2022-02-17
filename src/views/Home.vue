<template>
  <div>
    <section v-show="!chatIsActive" class="slider">
      <Slider></Slider>
    </section>

    <section class="bot">
      <Chat
        :isActive="chatIsActive"
        :isFlyingUp="flyingRobotUp"
        :isFlyingDown="flyingRobotDown"
        :messages="replicsList"
        @close-chat="closeChat"
        :quest="inputText"
        @focus-input="focusInput"
        @add-quest="addQuest($event)"
      ></Chat>
      <ChatQuickQuestions
        v-show="!chatIsActive"
        @quick-question="enterQuestion($event)"
      ></ChatQuickQuestions>
    </section>

    <section v-show="!chatIsActive" class="advantages">
      <Advantages></Advantages>
    </section>

    <section v-show="!chatIsActive" class="news mb-2">
      <div class="news__wrapper container">
        <h4 class="news__header text-center py-2">Новости</h4>
        <NewsPreviewList
          :newsList="newsCardsList"
          :everythingLittle="true"
          :isPagination="false"
        ></NewsPreviewList>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import Chat from "@/components/Chat";
import ChatQuickQuestions from "@/components/ChatQuickQuestions";
import Advantages from "@/components/Advantages";
import NewsPreviewList from "@/components/NewsPreviewList";

export default {
  name: "Home",

  components: {
    Slider,
    Chat,
    ChatQuickQuestions,
    Advantages,
    NewsPreviewList,
  },

  data() {
    return {
      url: "https://www.d-skills.ru/40_subsidy_bootstrapvue/news2.php",
      newsCardsList: [],
      page: 1,
      pageSize: 3,
      inputText: "",
      replics: [
        {
          id: 1,
          author: "bot",
          content:
            "Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки.",
        },
        // {id: 2, author: "user", content: "Найди слово охота"},
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
                "Гранты в форме субсидий в сфере научной и инновационной деятельности",
              link: "./subsidyinfo1",
            },
          ],
        },
      ],
      chatIsActive: false,
      flyingRobotUp: false,
      flyingRobotDown: false,
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
    focusInput() {
      this.chatIsActive = true;
      setTimeout(this.fly, 300);
    },
    fly() {
      this.flyingRobotUp = false;
      this.flyingRobotDown = true;
    },
    dontfly() {
      this.flyingRobotUp = false;
      this.chatIsActive = !this.chatIsActive;
    },
    closeChat() {
      this.inputText = "";
      if (this.chatIsActive) {
        this.flyingRobotUp = true;
        this.flyingRobotDown = false;
        setTimeout(this.dontfly, 1000);
      }
    },
    enterQuestion(question) {
      this.inputText = question;
      this.chatIsActive = true;
      setTimeout(this.fly, 1000);
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
    chatActive() {
      return this.replics.length > 1 && this.chatIsActive;
    },

    getNews(page, pageSize) {
      const xhr = new XMLHttpRequest();
      const request = this.url + "?page=" + page + "&pageSize=" + pageSize;
      xhr.open("GET", request);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Cписок новостей");
        console.log(xhr.response);
        this.newsCardsList = xhr.response;
      };
      xhr.send();
    },
  },

  mounted: function () {
    this.getNews(this.page, this.pageSize);
  },
};
</script>
