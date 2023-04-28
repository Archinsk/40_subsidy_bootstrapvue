<template>
  <router-link to="/" class="logo">
    <!--    <img src="@/assets/iss_logo_white.svg" alt="" class="logo__image" />-->
    <!--    <div class="logo__text">Информационные системы и сервисы</div>-->
    <img
      :src="'data:' + logo.image.type + ';base64,' + logo.image.file"
      alt=""
      class="logo__image"
    />
    <div class="logo__text">{{ logo.logoBrand }}</div>
  </router-link>
</template>

<script>
export default {
  name: "SiteLogo",
  props: ["logo"],
};
</script>
