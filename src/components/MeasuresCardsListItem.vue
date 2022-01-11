<template>
  <div class="card measure__card">
    <div class="card-body row">
      <router-link :to="'/subsidyinfotemp/' + measure.id" :subsidyId="measure.id" class="measure-link col-12 col-md-9 stretched-link">
        <h5 class="card-title">
          <span class="badge badge-primary">{{ measure.id }}</span>
          {{ measure.name }}
        </h5>
      </router-link>
      <div class="card-text col-12 col-md-3">
        Приём заявок<br />
        <b> {{ measurePeriod }} </b>
        <template v-if="!measure.active">
          <br />
          <i> {{ isActive }} </i>
        </template>
      </div>
    </div>
    <hr />
    <div class="card-footer bg-transparent measure__card__footer row">
      <div class="measure__owner__logo col-md-6 col-lg-5">
        <img
          :src="'images/initiators_logo/' + measure.initiator_logo"
          class="measure__owner__logo__image"
          alt="..."
        />
        <div class="measure__owner__logo__text">
          <div class="logo__header__comment">Инициатор</div>
          <div class="logo__name">
            {{ measure.initiator_title }}
          </div>
        </div>
      </div>
      <div class="measure__details col-md-6 col-lg-3">
        <div class="measure__size">
          <div class="measure__size__header">
            {{
              measure.measure_size === "нф"
                ? "Нефинансовая мера поддержки"
                : "Размер поддержки"
            }}
          </div>
          <div
            v-show="measure.measure_size !== 'нф'"
            class="measure__size__value"
          >
            до {{ measure.measure_size }}
            рублей
          </div>
        </div>
      </div>
      <div class="measure__buttons col">
        <img
          v-show="measure.electronic_form === '1'"
          class="measure__web__accessibility"
          src="@/assets/electronic.png"
          title="По данной мере поддержки есть возможность электронной подачи"
          alt=""
        />
        <a href="#" class="btn btn-outline-primary">Получить поддержку</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeasuresCardsListItem",

  props: ["measure"],

  data() {
    return {};
  },

  computed: {
    measurePeriod() {
      let period = "";
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };
      if (this.measure.startDate) {
        period +=
          "c " +
          new Intl.DateTimeFormat("ru-RU", options).format(
            new Date(this.measure.startDate)
          ) +
          " ";
      }
      if (this.measure.endDate) {
        period +=
          "по " +
          new Intl.DateTimeFormat("ru-RU", options).format(
            new Date(this.measure.endDate)
          );
      }
      if (!this.measure.startDate && !this.measure.endDate) {
        period = "даты не указаны";
      }
      return period;
    },
    isActive() {
      return this.measure.active ? "активна" : "не активна";
    },
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

    .measure-link {
      text-decoration: none;
      color: #212529;

      .card-title {
        a {
          span {
            margin-right: $gap/2;
          }
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
</style>
