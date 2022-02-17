<template>
  <div>
    <div class="profile__wrapper container">
      <article class="profile">
        <h4 class="profile__title text-center">Личный кабинет</h4>

        <section class="profile__user__info">
          <div class="profile__user__info__details">
            <img
              class="profile__avatar mr-2"
              src="@/assets/avatar.jpg"
              alt=""
            />
            <div class="profile__text">
              <div class="profile__user__name">Сергеев Иван Петрович</div>
              <div class="profile__user__snils">СНИЛС: 073-976-837 25</div>
            </div>
          </div>
          <button
            type="button"
            class="profile-user-edit btn btn-outline-primary"
            data-toggle="modal"
            href="#profileEdit"
          >
            Редактировать
          </button>
        </section>

        <b-tabs>
          <b-tab title="Личные данные" active>
            <section class="user__basic__info">
              <h4 class="text-center">Личные данные</h4>
              <h5 class="user__basic__info__title">Основная информация</h5>
              <div class="user__basic__info__body">
                <div class="user__about term__block">
                  <div class="user__about__term term">
                    Обо мне:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="user__about__details">
                    Биография. Дополнительная информация
                  </div>
                </div>
                <div class="user__phone term__block">
                  <div class="user__phone__term term">
                    Телефон:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="user__phone__details">8-903-903-9039</div>
                </div>
                <div class="user__mail term__block">
                  <div class="user__mail__term term">
                    E-mail:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="user__mail__details">sergeev@yandex.ru</div>
                </div>
                <div class="user__social term__block">
                  <div class="user__social__term term">
                    Соцсети:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="user__social__details">vk.ru, ok.ru</div>
                </div>
              </div>
            </section>

            <section class="user__competencies">
              <h5 class="user__competencies__title">Компетенции</h5>
              <div class="user__competencies__body">
                <span class="badge badge-primary mr-2"
                  >Информационные технологии</span
                >
                <span class="badge badge-primary mr-2">Инженерия</span>
                <span class="badge badge-primary mr-2">Архитектура</span>
                <button class="user__competence btn btn-outline-primary">
                  + Добавить
                </button>
              </div>
            </section>

            <section class="experience">
              <h5 class="experience__title">Опыт работы</h5>
              <div class="experience__body">
                <div class="experience__company term__block">
                  <div class="experience__company__term term">
                    Компания:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="experience__company__details">
                    Информационные системы и сервисы
                  </div>
                </div>
                <div class="experience__position term__block">
                  <div class="experience__position__term term">
                    Должность:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="experience__position__details">Аналитик</div>
                </div>
                <div class="experience__start__date term__block">
                  <div class="experience__start__date__term term">
                    Дата начала:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="experience__start__date__details">14.02.2018</div>
                </div>
                <div class="experience__finish__date term__block">
                  <div class="experience__finish__date__term term">
                    Дата окончания:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="experience__finish__date__details">
                    14.02.2022
                  </div>
                </div>
                <div class="experience__info term__block">
                  <div class="experience__info__term term">
                    Описание:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="experience__info__details">
                    Общение с заказчиком. Подготовка технических документов
                  </div>
                </div>
              </div>
            </section>
            <section class="education">
              <h5 class="education__title">Образование</h5>
              <div class="education__body">
                <div class="education__institution term__block">
                  <div class="education__institution__term term">
                    Учебное заведение:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="education__institution__details">НГАХА</div>
                </div>
                <div class="education__specialization term__block">
                  <div class="education__specialization__term term">
                    Специальность:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="education__specialization__details">
                    Архитектор
                  </div>
                </div>
                <div class="education__grade term__block">
                  <div class="education__grade__term term">
                    Степень:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="education__grade__details">Специалитет</div>
                </div>
                <div class="education__start__date term__block">
                  <div class="education__start__date__term term">
                    Год начала:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="education__start__date__details">1997</div>
                </div>
                <div class="education__finish__date term__block">
                  <div class="education__finish__date__term term">
                    Год окончания:
                    <span class="dotted__line"></span>
                  </div>
                  <div class="education__finish__date__details">2003</div>
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

    <div
      class="modal fade"
      id="profileEdit"
      tabindex="-1"
      aria-labelledby="profileEditLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="profileEditLabel">
              Редактирование профиля
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="mb-3">
                <label for="aboutMeProfileEdit" class="form-label"
                  >Обо мне</label
                >
                <textarea class="form-control" id="aboutMeProfileEdit" rows="3">
Биография. Дополнительная информация</textarea
                >
              </div>

              <h3>Контактные данные</h3>
              <div class="mb-3">
                <label for="emailProfileEdit" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailProfileEdit"
                  value="sergeev@yandex.ru"
                />
              </div>
              <button class="btn btn-outline-primary">+ Добавить</button>
              <div class="mb-3">
                <label for="phoneProfileEdit" class="form-label">Телефон</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phoneProfileEdit"
                  value="+7(903)903-9039"
                />
              </div>
              <button class="btn btn-outline-primary">+ Добавить</button>
              <div class="mb-3">
                <label for="socialProfileEdit" class="form-label"
                  >Социальные сети</label
                >
                <input
                  type="url"
                  class="form-control"
                  id="socialProfileEdit"
                  value="+7(903)903-9039"
                />
              </div>
              <button class="btn btn-outline-primary">+ Добавить</button>

              <h3>Опыт работы</h3>
              <div class="mb-3">
                <label for="emailProfileEdit2" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailProfileEdit2"
                  value="sergeev@yandex.ru"
                />
              </div>

              <h3>Образование</h3>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Отменить
            </button>
            <button type="button" class="btn btn-primary">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
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
