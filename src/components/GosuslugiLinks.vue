<template>
  <div class="container">
    <div class="feature-section row justify-content-end">
      <div class="col-lg-9">
        <h4 class="features-title">Я только учусь, но уже могу предложить:</h4>
        <div v-for="i of rows" :key="i" class="row">
          <div
            v-for="feature of columnsOfRow(i)"
            :key="feature.id"
            class="feature col"
          >
            <b-button variant="outline-light" block :href="feature.link">
              <b-icon
                :icon="feature.icon"
                aria-hidden="true"
                style="width: 1.5em; height: 1.5em"
              ></b-icon>
              <br />
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
  name: "FeaturesBlock",
  props: ["columns"],
  data() {
    return {
      features: [
        {
          id: 1,
          title: "Гранты",
          icon: "alarm",
          link: "https://www.gosuslugi.ru/600102/1/form",
        },
        {
          id: 2,
          title: "Субсидии",
          icon: "flower1",
          link: "https://www.gosuslugi.ru/600101/1/form",
        },
        {
          id: 3,
          title: "Наука",
          icon: "briefcase",
          link: "https://www.gosuslugi.ru/600103/1/form",
        },
        {
          id: 4,
          title: "Инновации",
          icon: "bug",
          link: "https://www.gosuslugi.ru/600105/1/form",
        },
      ],
    };
  },
  computed: {
    rows() {
      return Math.ceil(this.features.length / this.columns);
    },
  },
  methods: {
    columnsOfRow(rowNumber) {
      const startIndex = this.columns * (rowNumber - 1);
      const finishIndex = startIndex + +this.columns;
      return this.features.slice(startIndex, finishIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
$col-gap: 0.5rem;

.feature-section {
  padding-bottom: 0.5rem;

  .features-title {
    color: white;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .row {
    margin-left: -$col-gap/2;
    margin-right: -$col-gap/2;

    .feature {
      padding-left: $col-gap/2;
      padding-right: $col-gap/2;
      margin-bottom: $col-gap;

      a {
        height: 100%;
        margin-top: auto;
        margin-bottom: auto;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }
    }
  }
}
</style>
