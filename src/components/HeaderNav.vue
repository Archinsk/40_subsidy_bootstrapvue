<template>
  <b-sidebar
    id="sidebar"
    title="Меню"
    backdrop
    bg-variant="primary"
    text-variant="light"
    shadow
  >
    <b-collapse is-nav>
      <b-navbar-nav>
        <!-- Статические пункты меню -->
        <b-nav-item to="/news" active-class="active"> Новости </b-nav-item>
        <b-nav-item-dropdown active-class="active" text="Фейковые меры поддержки">
          <b-dropdown-item to="/measures"> Все меры поддержки </b-dropdown-item>
          <b-dropdown-item to="/measures"> Юридическим лицам </b-dropdown-item>
          <b-dropdown-item to="/measures">
            Индивидуальным предпринимателям
          </b-dropdown-item>
          <b-dropdown-item to="/measures"> Физическим лицам </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/measuresauth" active-class="active"> Меры с сервера </b-nav-item>
        <b-nav-item v-if="!isAuth" to="/authPage" active-class="active">
          Войти
        </b-nav-item>
        <b-nav-item v-else to="/accountinfo" active-class="active">
          Личный кабинет
        </b-nav-item>
        <b-nav-item v-if="isAdmin" to="/siteAdmin">
          <span class="material-icons">settings</span>
        </b-nav-item>
        <b-nav-item v-if="isAdmin" to="/applications">
          Заявки
        </b-nav-item>
        <!-- Динамические пункты меню футера -->
        <template v-for="item of navItems">
          <b-nav-item-dropdown
            v-if="item.childs"
            :key="item.id"
            active-class="active"
            :text="item.title[0].text"
          >
            <b-dropdown-item
              v-for="child of item.childs"
              :key="child.id"
              :to="child.url"
            >
              {{ child.title[0].text }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item
            v-else
            :key="item.id"
            :to="item.url"
            active-class="active"
            >{{ item.title[0].text }}</b-nav-item
          >
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-sidebar>
</template>

<script>
export default {
  name: "HeaderNav",
  props: ["userType"],
  data() {
    return {
      isAuth: this.userType === "authUser" || this.userType === "admin",
      isAdmin: this.userType === "admin",
      navItems: [],
    };
  },
  methods: {
    getHeaderNav() {
      const xhr = new XMLHttpRequest();
      const url =
        // "https://open-newtemplate.isands.ru/open-core/api/site-data/get-header";
        "http://192.168.18.171:8080/api/site-data/get-header";
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        this.navItems = xhr.response;
      };
      xhr.send();
    },
  },
  mounted: function () {
    this.getHeaderNav();
  },
};
</script>

<style lang="scss">
$gap: 1rem;
$basic-color: #003399;
$active-color: #fff;

.navbar {
  /*Боковая выпадашка с навигационным меню сайта*/
  .b-sidebar-outer {
    @media (min-width: 992px) {
      position: static;
      height: 2.5rem;
    }

    /*Выезжающая панель*/
    .b-sidebar {
      @media (min-width: 992px) {
        display: block !important;
        background-color: transparent !important;
        box-shadow: none !important;
        position: static;
        width: auto;
      }

      /*Шапка выезжающей панели*/
      .b-sidebar-header {
        border-bottom: 1px solid $active-color;

        @media (min-width: 992px) {
          display: none;
        }
      }

      /*Тело выезжающей панели*/
      .b-sidebar-body {
        overflow: visible;

        /*Навигационное меню*/
        .navbar-collapse {
          /*Список пунктов меню*/
          .navbar-nav {
            width: 100%;

            @media (max-width: 991.98px) {
              flex-direction: column;
            }

            /*Пункт меню*/
            .nav-item {
              @media (max-width: 991.98px) {
                border-bottom: 1px solid $active-color;
              }

              /*Ссылка внутри пункта меню*/
              .nav-link {
              }

              /*Пункт меню с выпадашкой*/
              &.dropdown {
                /*Выпадающая часть*/
                .dropdown-menu {
                  @media (max-width: 991.98px) {
                    position: relative;
                    padding: 0;
                    margin: 0;
                    border-radius: 0;
                    border: none;
                    background-color: rgba(255, 255, 255, 0.2);
                  }

                  /*Пункт выпадающей части*/
                  li {
                    @media (max-width: 991.98px) {
                      border-top: 1px solid $active-color;
                    }

                    .dropdown-item {
                      @media (max-width: 991.98px) {
                        padding: 0.5rem 1rem;
                        color: $active-color;
                        opacity: 0.5;
                      }

                      &:active {
                        @media (max-width: 991.98px) {
                          background-color: $active-color;
                          color: $basic-color;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    /*Задний затемняющий фон*/
    .b-sidebar-backdrop {
      @media (min-width: 992px) {
        display: none;
      }
    }
  }
}
</style>
