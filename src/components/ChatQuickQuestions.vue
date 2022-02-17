<template>
  <div class="container">
    <div class="feature-section row justify-content-end">
      <div class="col-lg-9">
        <div v-for="n in rows" :key="n" class="row">
          <div
            v-for="feature of partOfArray(
              features,
              (n - 1) * columns + 1,
              columns
            )"
            :key="feature.id"
            class="feature col"
          >
            <b-button
              variant="outline-light"
              block
              href="#"
              @click="$emit('quick-question', feature.title)"
            >
              {{ feature.title }}
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatQuickQuestions",
  data() {
    return {
      columns: 6,
      features: [
        { id: 1, title: "Гранты", icon: "workspace_premium" },
        { id: 2, title: "Субсидии", icon: "volunteer_activism" },
        {
          id: 3,
          title: "Наука",
          icon: "science",
        },
        { id: 4, title: "Инновации", icon: "lightbulb" },
      ],
    };
  },
  computed: {
    rows() {
      return Math.ceil(this.features.length / this.columns);
    },
  },
  methods: {
    partOfArray(arr, startId, size) {
      return arr.filter(
        (item) => item.id >= startId && item.id < startId + size
      );
    },
  },
};
</script>
