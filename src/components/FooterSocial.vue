<template>
  <div class="footer__social">
    <a
      href="https://www.facebook.com"
      target="_blank"
      class="footer__social__link"
    >
      <img src="@/assets/social/fb.svg" alt="" class="footer__social__logo" />
    </a>
    <a
      href="https://www.instagram.com"
      target="_blank"
      class="footer__social__link"
    >
      <img
        src="@/assets/social/instagram.svg"
        alt=""
        class="footer__social__logo"
      />
    </a>
    <a
      href="https://www.youtube.com/"
      target="_blank"
      class="footer__social__link"
    >
      <img
        src="@/assets/social/youtube.svg"
        alt=""
        class="footer__social__logo"
      />
    </a>
    <a href="https://vk.com/" target="_blank" class="footer__social__link">
      <img src="@/assets/social/vk.svg" alt="" class="footer__social__logo" />
    </a>
  </div>
</template>

<script>
export default {
  name: "FooterSocial",
};
</script>

<style lang="scss" scoped>
$gap: 1rem;

.footer__social {
  .footer__social__logo {
    height: 2rem;
    margin-right: $gap/2;
    margin-bottom: $gap/2;
  }

  margin-bottom: $gap/2;
}
</style>
