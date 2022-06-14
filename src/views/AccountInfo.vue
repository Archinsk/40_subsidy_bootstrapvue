<template>
  <div class="container">
    <article class="profile">
      <h4 class="title-primary text-center">Личный кабинет</h4>
      <section class="user-info">
        <div class="user-info__details">
          <img
            :class="'user-avatar bg-' + theme + ' border border-' + theme"
            src="@/assets/avatar.png"
            alt=""
          />
          <div class="user-text">
            <div class="user-text__name">
              {{ userFullName ? userFullName : "ФИО не указаны" }}
            </div>
            <div class="user-text__snils">
              {{
                user.fullInfo.userData && user.fullInfo.userData.snils
                  ? "СНИЛС: " + user.fullInfo.userData.snils
                  : "СНИЛС не указан"
              }}
            </div>
          </div>
        </div>
      </section>

      <b-tabs>
        <b-tab title="Заявления" active>
          <Applications :theme="theme" />
        </b-tab>
        <b-tab title="Личные данные">
          <h4 class="text-center">Личные данные</h4>
          <section>
            <h5 class="secondary-title">Основная информация</h5>
            <div>
              <div class="term">
                <div class="term-title">
                  Телефон:
                  <span class="dotted-line"></span>
                </div>
                <div>не указан</div>
              </div>
              <div class="term">
                <div class="term-title">
                  E-mail:
                  <span class="dotted-line"></span>
                </div>
                <div>
                  {{
                    user.fullInfo.contacts && user.fullInfo.contacts[0].value
                      ? user.fullInfo.contacts[0].value
                      : "не указан"
                  }}
                </div>
              </div>
              <div class="term">
                <label class="term-title" for="exampleFormControlSelect1">
                  Текущая роль:
                </label>
                <select v-model="selectedUserRole" class="form-control" id="exampleFormControlSelect1">
                  <option v-for="role of user.fullInfo.roles" :key="role.id">
                    {{ role.label }}
                  </option>
                </select>
              </div>
            </div>
          </section>
        </b-tab>
      </b-tabs>
    </article>
  </div>
</template>

<script>
import Applications from "@/views/Applications";

export default {
  name: "AccountInfo",

  components: {
    Applications,
  },

  props: ["theme", "user"],

  data() {
    return {
      xhrResponse: [],
      page: 1,
      pageSize: 10,
      selectedUserRole: "",
    };
  },

  computed: {
    userFullName: function () {
      let fullName = "";
      if (this.user.fullInfo.userData && this.user.fullInfo.userData.lastName) {
        fullName += this.user.fullInfo.userData.lastName;
      }
      if (
        this.user.fullInfo.userData &&
        this.user.fullInfo.userData.firstName
      ) {
        fullName += " " + this.user.fullInfo.userData.firstName;
      }
      if (
        this.user.fullInfo.userData &&
        this.user.fullInfo.userData.middleName
      ) {
        fullName += " " + this.user.fullInfo.userData.middleName;
      }
      return fullName;
    },
  },

  methods: {
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
        "https://www.d-skills.ru/40_subsidy_bootstrapvue/requests.php?page=" +
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
  getMeasuresCardslist(pageNum, pageSize, sortCol = "id", sortDesc = false) {
    const xhr = new XMLHttpRequest();
    const url =
      // "https://open-newtemplate.isands.ru/open-core/api/serv/get-services?pageNum=" +
      // "http://192.168.18.171:8080/open-core/api/serv/get-services?pageNum=" +
      // "http://192.168.18.171:8180/api/serv/get-services?pageNum=" +
      "http://192.168.18.171:8080/api/serv/get-services?pageNum=" +
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
      console.log("Список мер");
      console.log(xhr.response);
      this.measuresCardsList = xhr.response;
      this.itemsTotal = xhr.response.totalElements;
    };
    xhr.send();
  },

  mounted: function () {
    console.log("Смонтировано");
    const xhr = new XMLHttpRequest();
    let request =
      "https://www.d-skills.ru/40_subsidy_bootstrapvue/requests.php?page=" +
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
};
</script>
