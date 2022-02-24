<template>
  <div>
    <div class="row">
      <div class="input-group mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Поиск..."
          aria-label="Поиск по наименованию меры поддержки"
          aria-describedby="button-addon2"
          v-model="searchMeasures"
        />
        <div class="input-group-append">
          <button
            class="btn btn-primary btn-icon-only_square"
            type="button"
            @click="$emit('search-measures', searchMeasures)"
          >
            <span class="material-icons">search</span>
          </button>
        </div>
      </div>
    </div>

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

    <MeasuresFilterCheckboxesGroup
      title="Теги:"
      :items="tags"
      :selected-items="selectedItems"
      @filter-changed="$emit('filter-changed', $event)"
    />

    <div class="row">
      <div class="col mb-3">
        <div class="btn btn-primary btn-block" @click="$emit('filter')">
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

    <button type="button" class="btn btn-outline-primary btn-icon-only_square">
      <span class="material-icons">search</span>
    </button>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary"><span class="material-icons">search</span>Primary</button>
    <p>Проверка иконки <span class="material-icons">favorite</span> идущей внутри текста</p>
    <p>Проверка иконки идущей внутри текста</p>
  </div>
</template>

<script>
import MeasuresFilterCheckboxesGroup from "@/components/MeasuresFilterCheckboxesGroup";

export default {
  name: "MeasuresFilter",
  props: ["tags", "selectedItems"],
  components: {
    MeasuresFilterCheckboxesGroup,
  },
  data() {
    return {
      searchMeasures: "",
    }
  }
};
</script>
