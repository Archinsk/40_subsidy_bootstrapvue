<template>
  <div class="card measure-card">
    <div class="card-body row">
      <router-link :to="'/subsidy_info/' + measure.id" class="measure-title col-12 col-md-9 stretched-link">
        <h5 class="card-title"><span :class="'badge badge-' + theme">{{ measure.id }}</span>{{measure.name}}</h5>
      </router-link>
      <div class="measure-period col-12 col-md-3">
        Приём заявок<br />
        <b> {{ measurePeriod }} </b>
        <template v-if="!measure.active">
          <br />
          <i> {{ isActive }} </i>
        </template>
      </div>
    </div>
    <div class="card-footer bg-transparent row">
      <div class="measure-owner-logo col-md-6 col-lg-5">
        <img
          src="images/initiators_logo/mineco_logo.png"
          class="measure-owner-logo-image"
          alt="..."
        />
        <div class="measure-owner-logo-text">
          <div class="measure-owner-logo-text__comment">Инициатор</div>
          <div class="measure-owner-logo-text__name">
            Министерство экономического развития
          </div>
        </div>
      </div>
      <div class="measure-details col-md-6 col-lg-3">
        <div class="measure-size">
          <div class="measure-size__header">
            {{
              measure.measure_size === "нф"
                ? "Нефинансовая мера поддержки"
                : "Размер поддержки"
            }}
          </div>
          <div
            v-show="measure.measure_size !== 'нф'"
            class="measure-size__value"
          >
            до {{ measure.measure_size }}
            рублей
          </div>
        </div>
      </div>
      <div class="measure-buttons col">
        <button type="button" :class="'btn btn-outline-' + theme + ' btn-icon-only_square measure-web-accessibility'" title="По данной мере поддержки есть возможность электронной подачи">
          <span class="material-icons">laptop</span>
        </button>
        <router-link :to="'/subsidy_info/' + measure.id" :class="'btn btn-outline-' + theme" role="button">Получить поддержку</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeasuresCardsListItem",

  props: ["measure", "theme"],

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
