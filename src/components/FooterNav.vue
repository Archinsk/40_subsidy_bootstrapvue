<template>
  <ul v-if="links.length > 0" class="footer-nav col-md-5">
    <template v-for="(link, index) of links">
      <li v-if="link.name && link.url" :key="index">
        <router-link :to="link.url">{{ link.name }}</router-link>
      </li>
    </template>
    <!--    <li>-->
    <!--      <router-link to="/measures">Поддержка юридических лиц</router-link>-->
    <!--    </li>-->
    <!--    <li>-->
    <!--      <router-link to="/measures">Поддержка физических лиц</router-link>-->
    <!--    </li>-->
  </ul>
</template>

<script>
export default {
  name: "FooterNav",
  props: ["links"],
};
</script>
