<template>
  <router-link to="/" class="footer__brend">
    <img src="@/assets/iss_logo_white.svg" alt="" class="footer__brend__logo" />
    <div class="footer__brend__name">Информационные системы и сервисы</div>
  </router-link>
</template>

<script>
export default {
  name: "SiteLogo",
};
</script>

<style lang="scss" scoped>
$gap: 1rem;
$active-color: #fff;

.footer__brend {
  display: flex;
  align-items: center;
  text-decoration: none;

  .footer__brend__logo {
    height: 1.875rem;
    margin-right: $gap/2;
  }

  .footer__brend__name {
    font-size: 1rem;
    font-weight: bold;
    color: $active-color;
  }
}
</style>
