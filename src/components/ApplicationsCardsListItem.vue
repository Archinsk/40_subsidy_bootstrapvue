<template>
  <div class="card request-card">
    <div class="card-body d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">
        <span :class="'badge badge-' + theme + ' mr-2'"
          >№{{ application.id }}</span
        >
        {{ application ? application.servName : "Наименование меры поддержки" }}
      </h5>
      <router-link
              :to="appLink"
              :class="'btn btn-outline-' + theme"

              role="button"
      >Открыть</router-link
      >
<!--      <b-button-->
<!--        v-b-modal.edit-app-->
<!--        @click="$emit('get-app-form')"-->
<!--        :variant="'outline-' + theme"-->
<!--      >-->
<!--        Открыть-->
<!--      </b-button>-->
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

  props: ["application", "index", "theme"],

  data() {
    return {};
  },

  computed: {
    appLink: function () {
      return "/application_completed_view/" + this.application.id + "/model/" + this.application.servId;
    },
  },
};
</script>
