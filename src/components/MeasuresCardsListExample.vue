<template>
  <div class="card-list row row-cols-1">
    <div
      v-for="measuresItem of cuttedMeasuresPack"
      :key="measuresItem.id"
      class="col"
    >
      <MeasuresCardsListExampleItem :measure="measuresItem" :theme="theme"/>
    </div>
  </div>
</template>

<script>
import MeasuresCardsListExampleItem from "@/components/MeasuresCardsListExampleItem";

export default {
  name: "MeasuresCardsListExample",
  components: {
    MeasuresCardsListExampleItem,
  },
  props: ["measuresPack", "count", "theme"],
  data() {
    return {
      measuresCardsList: [],
    };
  },
  methods: {
    getMeasuresCardslist() {
      const xhr = new XMLHttpRequest();
      const url =
        "http://192.168.18.171:8080/open-core/api/serv/get-services?pageNum=0&pageSize=10";
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Получен список с услугами");
        console.log(xhr.response.listEntity);
        this.measuresCardsList = xhr.response.listEntity;
      };
      xhr.send();
    },
  },
  computed: {
    cuttedMeasuresPack: function () {
      if (this.count && this.count < this.measuresPack.length) {
        let cuttedPack = this.measuresPack.filter(
          (item, index) => index < this.count
        );
        return cuttedPack;
      } else {
        return this.measuresPack;
      }
    },
  },
  mounted: function () {
    this.getMeasuresCardslist();
  },
};
</script>
