<template>
  <div class="filter">
    <div
      :class="'btn btn-outline-' + theme + ' col-12'"
      @click="$emit('select-esia')"
    >
      Подобрать с учетом ЕСИА
    </div>
    <div
      :class="'btn btn-outline-' + theme + ' col-12'"
      @click="$emit('chat-activation')"
    >
      Подобрать с помощью чат-бота
    </div>

    <MeasuresFilterExampleCheckboxesGroup
      v-for="oneFilter of fd"
      :key="oneFilter.title"
      :filterData="oneFilter"
    />
    <div class="row filter-actions">
      <div class="col">
        <div
          :class="'btn btn-' + theme + ' btn-block'"
          @click="$emit('scenario-filter')"
        >
          Применить
        </div>
      </div>
      <div class="col">
        <div
          :class="'btn btn-outline-' + theme + ' btn-block'"
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
  props: ["fd", "theme"],
  components: {
    MeasuresFilterExampleCheckboxesGroup,
  },
};
</script>
