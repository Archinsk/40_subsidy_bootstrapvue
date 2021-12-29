<template>
  <div class="row row-cols-1">
    <div
      v-for="measuresItem of cuttedMeasuresPack"
      :key="measuresItem.id"
      class="col"
    >
      <MeasuresCardsListItem :measure="measuresItem" />
    </div>
    <div
            v-for="measuresItem of measuresCardsList"
            :key="measuresItem.id"
            class="col"
    >
      <MeasuresCardsListItem2 :measure="measuresItem" />
    </div>
  </div>
</template>

<script>
import MeasuresCardsListItem from "@/components/MeasuresCardsListItem";
import MeasuresCardsListItem2 from "@/components/MeasuresCardsListItem2";

export default {
  name: "MeasuresCardsList",
  components: {
    MeasuresCardsListItem,
    MeasuresCardsListItem2,
  },
  props: ["measuresPack", "count"],
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

<style lang="scss" scoped>
$gap: 0.5rem;
$text-color: #212529;
$muted-color: #6c757d;

.row {
  margin-left: -$gap/2;
  margin-right: -$gap/2;

  & > * {
    padding-left: $gap/2;
    padding-right: $gap/2;
    /*margin-bottom: $gap;*/
  }
}
</style>
