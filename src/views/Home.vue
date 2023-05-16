<template>
  <div class="page-wrapper">
    <Header
      :config="config"
      :url="url"
      :theme="theme"
      :unread-messages="unreadMessages"
      :user="user"
      @assign-user="$emit('assign-user', $event)"
      @select-role="$emit('select-role', $event)"
      @sign-in-esia="$emit('sign-in-esia')"
      @sign-in-local="$emit('sign-in-local')"
      @sign-out="$emit('sign-out')"
    />
    <!--    <LoaderIsis />-->
    <main class="content">
      <div class="home-page">
        <section v-if="notificationPublishing" id="notification" class="my-3">
          <div class="container">
            <Alert
              :type="alertType"
              class="font-weight-bold"
              :style="alertFontStyle"
              >{{ config.adminSettings.notification.notificationText }}</Alert
            >
          </div>
        </section>
        <section v-show="!chatIsActive" class="slider">
          <div class="container">
            <SliderNew></SliderNew>
          </div>
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

        <section v-show="!chatIsActive" class="news mb-2">
          <div class="container">
            <h4 class="title-primary text-center">Новости</h4>
            <NewsPreviewList
              :newsList="newsCardsList"
              :everythingLittle="true"
              :isPagination="false"
            ></NewsPreviewList>
          </div>
        </section>
      </div>
    </main>
    <Footer v-show="!chatIsActive" :theme="theme" :config="config" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import SliderNew from "@/components/SliderNew";
import Chat from "@/components/Chat";
import ChatQuickQuestions from "@/components/ChatQuickQuestions";
import NewsPreviewList from "@/components/NewsPreviewList";
import Footer from "@/components/Footer";
import axios from "axios";
import Alert from "../components/universal/BS46Alert";
// import LoaderIsis from "@/components/LoaderIsis";

export default {
  name: "Home",

  components: {
    Alert,
    // LoaderIsis,
    Header,
    SliderNew,
    Chat,
    ChatQuickQuestions,
    NewsPreviewList,
    Footer,
  },

  props: ["url", "user", "unreadMessages", "theme", "config"],

  data() {
    return {
      tempUrl: "https://www.d-skills.ru/40_subsidy_bootstrapvue/news2.php",
      newsCardsList: [],
      page: 1,
      pageSize: 6,
      inputText: "",
      replics: [
        {
          id: 1,
          author: "bot",
          content:
            "Я - чат-бот Василий. Я помогу Вам с поиском меры поддержки.",
        },
      ],
      faq: [
        {
          id: 1,
          keywords: ["субсидия", "субсидии"],
          answers: [
            {
              content:
                "Субсидии юридическим лицам на возмещение затрат, связанных с участием в выставочно-ярмарочных мероприятиях",
              link: "./subsidy_info/model/42",
            },
          ],
        },
        {
          id: 2,
          keywords: ["конкурс", "конкурсы"],
          answers: [
            {
              content: "Конкурс предоставления грантов для ученых",
              link: "./subsidy_info/model/28",
            },
          ],
        },
      ],
      chatIsActive: false,
      flyingRobotUp: false,
      flyingRobotDown: false,
      bootstrapThemeColors: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
      fontSizes: ["1rem", "1.5rem", "2rem"],
      notificationStartDate: null,
      notificationFinishDate: null,
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
    alertType: function () {
      return this.bootstrapThemeColors[
        this.config.adminSettings.notification.notificationColor - 1
      ];
    },
    alertFontStyle: function () {
      return {
        fontSize:
          this.fontSizes[
            this.config.adminSettings.notification.notificationFontSize - 1
          ],
      };
    },
    notificationPublishing: function () {
      const now = new Date();
      const validDate =
        (this.notificationStartDate < now &&
          this.notificationFinishDate > now) ||
        (this.notificationStartDate < now &&
          !this.notificationFinishDate &&
          this.config.adminSettings.notification.publicationFinishManual);
      return this.config.adminSettings.notification.publishNeed && validDate;
    },
  },

  methods: {
    focusInput() {
      this.chatIsActive = true;
      setTimeout(this.fly, 500);
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
        setTimeout(this.dontfly, 500);
      }
    },
    enterQuestion(question) {
      this.inputText = question;
      this.chatIsActive = true;
      setTimeout(this.fly, 500);
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
      axios(this.tempUrl + "?page=" + page + "&pageSize=" + pageSize).then(
        (response) => {
          console.groupCollapsed("Список новостей");
          console.log(response.data);
          console.groupEnd();
          this.newsCardsList = response.data;
        }
      );
    },

    scrollDown() {
      let cont = document.getElementById("chat-field-wrapper");
      cont.scrollTop = 0;
    },
  },

  created: function () {
    this.notificationStartDate = new Date(
      this.config.adminSettings.notification.publicationStartDate
    );
    if (this.config.adminSettings.notification.publicationFinishDate) {
      this.notificationFinishDate = new Date(
        this.config.adminSettings.notification.publicationFinishDate
      );
    }
  },

  updated: function () {
    this.scrollDown();
  },

  mounted: function () {
    this.getNews(this.page, this.pageSize);
  },
};
</script>
