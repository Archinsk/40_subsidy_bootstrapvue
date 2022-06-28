<template>
  <ul class="footer-nav col-md-5">
    <li>
      <router-link to="/news">Новости</router-link>
    </li>
    <li>
      <router-link to="/measures">Поддержка юридических лиц</router-link>
    </li>
    <li>
      <router-link to="/measures">Поддержка физических лиц</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterNav",
};
</script>
