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
        <b-nav-item to="/news" active-class="active"> Новости </b-nav-item>
        <b-nav-item-dropdown active-class="active" text="Меры поддержки">
          <b-dropdown-item to="/measures"> Все меры поддержки </b-dropdown-item>
          <b-dropdown-item to="/measures"> Юридическим лицам </b-dropdown-item>
          <b-dropdown-item to="/measures">
            Индивидуальным предпринимателям
          </b-dropdown-item>
          <b-dropdown-item to="/measures"> Физическим лицам </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item
          :to="type === 'true' ? '/accountinfo' : '/authPage'"
          active-class="active"
        >
          {{ type === "true" ? "Личный кабинет" : "Войти" }}
        </b-nav-item>
        <b-nav-item to="/siteAdmin">
          <span class="material-icons">settings</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-sidebar>
</template>

<script>
export default {
  name: "OffcanvasMenu",
  props: ["type"],
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
