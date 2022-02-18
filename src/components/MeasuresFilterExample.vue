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

    <MeasuresFilterExampleCheckboxesGroup
      v-for="oneFilter of fd"
      :key="oneFilter.title"
      :filterData="oneFilter"
    />

    <div class="row">
      <div class="col mb-3">
        <div
          class="btn btn-primary btn-block"
          @click="$emit('scenario-filter')"
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
import MeasuresFilterExampleCheckboxesGroup from "@/components/MeasuresFilterExampleCheckboxesGroup";

export default {
  name: "MeasuresFilterExample",
  props: ["fd"],
  components: {
    MeasuresFilterExampleCheckboxesGroup,
  },
};
</script>
