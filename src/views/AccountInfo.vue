<template>
  <div class="container">
    <article class="profile">
      <h4 class="title-primary text-center">Личный кабинет</h4>
      <section class="user-info">
        <div class="user-info__details">
          <img class="user-avatar bg-primary border border-primary" src="@/assets/avatar.png" alt="" />
          <div class="user-text">
            <div class="user-text__name">Сергеев Иван Петрович</div>
            <div class="user-text__snils">СНИЛС: 073-976-837 25</div>
          </div>
        </div>
        <button
          type="button"
          class="user-info__edit-btn btn btn-outline-primary"
          data-toggle="modal"
          href="#profileEdit"
        >
          Редактировать
        </button>
      </section>

      <b-tabs>
        <b-tab title="Личные данные" active>
          <h4 class="text-center">Личные данные</h4>
          <section>
            <h5 class="secondary-title">Основная информация</h5>
            <div>
              <div class="term">
                <div class="term-title">
                  Обо мне:
                  <span class="dotted-line"></span>
                </div>
                <div>Биография. Дополнительная информация</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Телефон:
                  <span class="dotted-line"></span>
                </div>
                <div>8-903-903-9039</div>
              </div>
              <div class="term">
                <div class="term-title">
                  E-mail:
                  <span class="dotted-line"></span>
                </div>
                <div>sergeev@yandex.ru</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Соцсети:
                  <span class="dotted-line"></span>
                </div>
                <div>vk.ru, ok.ru</div>
              </div>
            </div>
          </section>
          <section class="user__competencies">
            <h5 class="secondary-title">Компетенции</h5>
            <div>
              <span class="badge badge-primary mr-2"
                >Информационные технологии</span
              >
              <span class="badge badge-primary mr-2">Инженерия</span>
              <span class="badge badge-primary mr-2">Архитектура</span>
              <button class="btn btn-outline-primary">+ Добавить</button>
            </div>
          </section>
          <section class="experience">
            <h5 class="secondary-title">Опыт работы</h5>
            <div>
              <div class="term">
                <div class="term-title">
                  Компания:
                  <span class="dotted-line"></span>
                </div>
                <div>Информационные системы и сервисы</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Должность:
                  <span class="dotted-line"></span>
                </div>
                <div>Аналитик</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Дата начала:
                  <span class="dotted-line"></span>
                </div>
                <div>14.02.2018</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Дата окончания:
                  <span class="dotted__line"></span>
                </div>
                <div>14.02.2022</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Описание:
                  <span class="dotted-line"></span>
                </div>
                <div>
                  Общение с заказчиком. Подготовка технических документов
                </div>
              </div>
            </div>
          </section>
          <section class="education">
            <h5 class="secondary-title">Образование</h5>
            <div>
              <div class="term">
                <div class="term-title">
                  Учебное заведение:
                  <span class="dotted-line"></span>
                </div>
                <div>НГАХА</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Специальность:
                  <span class="dotted-line"></span>
                </div>
                <div>Архитектор</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Степень:
                  <span class="dotted-line"></span>
                </div>
                <div>Специалитет</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Год начала:
                  <span class="dotted-line"></span>
                </div>
                <div>1997</div>
              </div>
              <div class="term">
                <div class="term-title">
                  Год окончания:
                  <span class="dotted-line"></span>
                </div>
                <div>2003</div>
              </div>
            </div>
          </section>
        </b-tab>
        <b-tab title="Заявления">
          <Applications />
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

  data() {
    return {
      xhrResponse: [],
      page: 1,
      pageSize: 10,
    };
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
