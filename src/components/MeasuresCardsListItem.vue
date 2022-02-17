<template>
  <div class="card measure__card">
    <div class="card-body row">
      <router-link :to="'/subsidyinfotemp/' + measure.id" class="measure-link col-12 col-md-9 stretched-link">
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
          src="images/initiators_logo/mineco_logo.png"
          class="measure__owner__logo__image"
          alt="..."
        />
        <div class="measure__owner__logo__text">
          <div class="logo__header__comment">Инициатор</div>
          <div class="logo__name">
            Министерство экономического развития
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
        <router-link :to="'/subsidyinfotemp/' + measure.id" class="btn btn-outline-primary" role="button">Получить поддержку</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeasuresCardsListItem",

  props: ["measure"],

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
