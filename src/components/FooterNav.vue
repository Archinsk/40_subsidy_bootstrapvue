<template>
  <ul class="footer__links col-md-5">
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
      <router-link to="/measures">Поддержка индивидуальных предпринимателей</router-link>
    </li>
    <li>
      <router-link to="/measures">Поддержка физических лиц</router-link>
    </li>
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

<style lang="scss" scoped>
$gap: 1rem;
$passive-color: #e4e4e4;
$active-color: #fff;

.footer__links {
  list-style: none;
  padding-left: 15px;
  margin-bottom: $gap;

  a {
    text-decoration: none;
    color: $passive-color;

    &:hover {
      color: $active-color;
    }
  }
}
</style>
