<template>
  <ul class="footer-nav col-md-5">
    <!-- Пункты меню футера получаемые с сервера -->
<!--    <li v-for="item of footerLinksList" :key="item.id">-->
<!--      <router-link to="/news">{{ item.title[0].text }}</router-link>-->
<!--    </li>-->
    <!-- Статические пункты меню футера -->
    <li>
      <router-link to="/news">Новости</router-link>
    </li>
    <li>
      <router-link to="/measures">Поддержка юридических лиц</router-link>
    </li>
    <li>
      <router-link to="/measures">Поддержка физических лиц</router-link>
    </li>
<!--    <li>-->
<!--      <router-link to="/measures_example">Пример верстки каталога мер</router-link>-->
<!--    </li>-->
  </ul>
</template>

<script>
export default {
  name: "FooterNav",

  data() {
    return {
      footerLinksList: [],
    };
  },

  methods: {
    getFooterMenu() {
      const xhr = new XMLHttpRequest();
      const url =
        "http://192.168.18.171:8080/api/site-data/get-footer";
        // "https://open-demo.isands.ru/api/site-data/get-footer";
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        this.footerLinksList = xhr.response;
      };
      xhr.send();
    },
  },

  mounted: function () {
    this.getFooterMenu();
  },
};
</script>
