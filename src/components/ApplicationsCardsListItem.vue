<template>
  <div class="card request-card">
    <div class="card-body d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">
        <span class="badge badge-primary mr-2">№{{ application.id }}</span>
        {{ application ? application.servName : "Наименование меры поддержки" }}
      </h5>
      <b-button v-b-modal.edit-app @click="$emit('get-app-form')" variant="outline-primary">
        Посмотреть заявку
      </b-button>
    </div>
    <div class="card-footer bg-transparent">
      <p>Текущий статус: {{ application.status }}</p>
      <p>Дата подачи: 01.01.2022</p>
      <p>Статус обновлен: 19.01.2022</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationsCardsListItem",

  props: ["application", "index"],

  data() {
    return {};
  },

  computed: {},
};
</script>
