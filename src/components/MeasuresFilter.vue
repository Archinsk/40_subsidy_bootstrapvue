<template>
  <div>
    <div class="row">
      <div
        class="btn btn-outline-primary col-12 mb-2"
        @click="$emit('select-esia')"
      >
        Подобрать с учетом ЕСИА
      </div>
      <div
        class="btn btn-outline-primary col-12 mb-2"
        @click="$emit('chat-activation')"
      >
        Подобрать с помощью чат-бота
      </div>
    </div>

    <MeasuresFilterCheckboxesGroup title="Теги:" :items="tags" :selected-items="selectedItems" @filter-changed="$emit('filter-changed', $event)"/>

    <div class="row">
      <div class="col mb-3">
        <div
          class="btn btn-primary btn-block"
          @click="$emit('filter')"
        >
          Применить
        </div>
      </div>
      <div class="col mb-3">
        <div
          class="btn btn-outline-primary btn-block"
          @click="$emit('clear-filter')"
        >
          Очистить
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MeasuresFilterCheckboxesGroup from "@/components/MeasuresFilterCheckboxesGroup";

export default {
  name: "MeasuresFilterExample",
  props: ["tags", "selectedItems"],
  components: {
    // FilterCheckboxesGroup,
    MeasuresFilterCheckboxesGroup,
  },
};
</script>

<style scoped></style>
