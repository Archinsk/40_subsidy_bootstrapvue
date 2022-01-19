<template>
  <div class="card request__card">
    <div class="card-body">
      <h5 class="card-title mb-0">
        <a href="subsidy.html">
          <span class="badge badge-primary mr-2">№{{application.id}}</span>
          {{ application ? application.servName : "Наименование меры поддержки"}}
        </a>
      </h5>
      <button class="btn btn-primary" @click="$emit('getappform')"> Получить заявку </button>
      <b-button v-b-modal.measure-application-form> Посмотреть заявку </b-button>
    </div>
    <div class="card-footer bg-transparent request__card__footer">
      <p>Текущий статус: {{ application.status }}</p>
      <p>Дата подачи: 01.01.2022</p>
      <p>Статус обновлен: 19.01.2022</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationsCardsListItem",

    props: ["application"],

  data() {
    return {};
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
$gap-req: 0.5rem;
$gap: 1rem;

.request__card {
  margin-bottom: $gap-req;

  .card-body {
    a {
      text-decoration: none;
      color: #212529;
    }
  }

  .request__card__footer {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    p {
      margin-bottom: 0;
    }
  }
}
</style>
