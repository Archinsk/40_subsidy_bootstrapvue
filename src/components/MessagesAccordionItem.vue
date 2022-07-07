<template>
  <transition name="fade">
    <div v-if="!deleted" class="card">
      <div class="card-header" :id="'heading-' + tempId">
        <h2 class="mb-0">
          <div class="d-flex">
            <button
              class="btn btn-link btn-block pl-0 text-left"
              type="button"
              data-toggle="collapse"
              :data-target="'#collapse-' + tempId"
              aria-expanded="true"
              :aria-controls="'collapse-' + tempId"
              @click="readMessage"
            >
              Заголовок уведомления #{{ tempId }}
            </button>
            <div v-if="!wasRead" class="btn btn-icon-only_square">
              <span class="material-icons mr-2 text-muted">mail</span>
            </div>
            <button class="btn btn-icon-only_square" @click="deleteMessage">
              <span class="material-icons">close</span>
            </button>
          </div>
        </h2>
        <div class="small text-muted">Получено 07.07.2022 в 16:30</div>
      </div>

      <div
        :id="'collapse-' + tempId"
        class="collapse"
        :aria-labelledby="'heading-' + tempId"
        data-parent="#accordionMessages"
      >
        <div class="card-body">
          Статус заявления №{{ tempId }} обновлен. Подробная информация
          направлена на вашу электронную почту.
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MessagesAccordionItem",
  props: ["tempId"],

  data() {
    return {
      wasRead: false,
      deleted: false,
    };
  },

  methods: {
    readMessage() {
      this.wasRead = true;
    },
    deleteMessage() {
      this.deleted = true;
    },
  },
};
</script>
