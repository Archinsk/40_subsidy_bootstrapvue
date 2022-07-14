<template>
  <div class="loader-back">
    <div class="loader-isis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderIsis",
};
</script>

<style lang="scss" scoped>
.loader-back {
  background-color: grey;
  width: 80px;
  height: 80px;
  padding: 8px;

  .loader-isis {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;

    div {
      position: absolute;
      width: 16px;
      height: 16px;
      background: #fff;
      animation: fade 1.6s linear alternate infinite;

      &:nth-child(1) {
        top: 24px;
        left: 24px;
        animation-delay: 0s;
      }

      &:nth-child(2) {
        top: 0;
        left: 24px;
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        top: 0px;
        left: 48px;
        animation-delay: 0.4s;
      }

      &:nth-child(4) {
        top: 24px;
        left: 48px;
        animation-delay: 0.6s;
      }

      &:nth-child(5) {
        top: 24px;
        left: 24px;
        animation-delay: 0.8s;
      }

      &:nth-child(6) {
        top: 24px;
        left: 0px;
        animation-delay: 1s;
      }

      &:nth-child(7) {
        top: 48px;
        left: 0;
        animation-delay: 1.2s;
      }

      &:nth-child(8) {
        top: 48px;
        left: 24px;
        animation-delay: 1.4s;
      }
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
