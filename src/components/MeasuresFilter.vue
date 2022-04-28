<template>
  <div class="filter">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Поиск..."
        aria-label="Поиск по наименованию меры поддержки"
        aria-describedby="searchMeasureButton"
        v-model="searchText"
        @keyup.enter="searchMeasure"
      />
      <div class="input-group-append">
        <b-button
          type="button"
          v-b-toggle.measures-filters-small
          variant="outline-primary"
          class="btn-icon-only_square d-md-none"
        >
          <span class="material-icons">filter_list</span>
        </b-button>
        <button
          :class="'btn btn-' + theme + ' btn-icon-only_square'"
          type="button"
          id="searchMeasureButton"
          @click="searchMeasure"
        >
          <span class="material-icons">search</span>
        </button>
      </div>
    </div>

    <!--    <div-->
    <!--      :class="'btn btn-outline-' + theme + ' col-12'"-->
    <!--      @click="$emit('select-esia')"-->
    <!--    >-->
    <!--      Подобрать с учетом ЕСИА-->
    <!--    </div>-->
    <!--    <div-->
    <!--      :class="'btn btn-outline-' + theme + ' col-12'"-->
    <!--      @click="$emit('chat-activation')"-->
    <!--    >-->
    <!--      Подобрать с помощью чат-бота-->
    <!--    </div>-->

    <!--    Filters for small screens-->
    <b-collapse id="measures-filters-small" class="collapse">
      <div class="d-block d-md-none">
        <MeasuresFilterCheckboxesGroup
          title="Теги:"
          :items="tags"
          :selected-items="selectedItems"
          :theme="theme"
          @filter-changed="$emit('filter-changed', $event)"
        />

        <div class="row filter-actions">
          <div class="col">
            <div
              :class="'btn btn-' + theme + ' btn-block'"
              @click="$emit('filter')"
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
    </b-collapse>

    <!--    Filters for large screens-->
    <div class="d-none d-md-block">
      <MeasuresFilterCheckboxesGroup
        title="Теги:"
        :items="tags"
        :selected-items="selectedItems"
        :theme="theme"
        @filter-changed="$emit('filter-changed', $event)"
      />

      <div class="row filter-actions">
        <div class="col">
          <div
            :class="'btn btn-' + theme + ' btn-block'"
            @click="$emit('filter')"
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
  </div>
</template>

<script>
import MeasuresFilterCheckboxesGroup from "@/components/MeasuresFilterCheckboxesGroup";

export default {
  name: "MeasuresFilter",
  components: {
    MeasuresFilterCheckboxesGroup,
  },
  props: ["tags", "selectedItems", "theme"],
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchMeasure() {
      this.$emit("search-measures", this.searchText);
      this.searchText = "";
    },
  },
};
</script>
