<template>
  <div :class="alertClass" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: String,
  },
  data() {
    return {
      bootstrapTypes: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
    };
  },
  computed: {
    alertClass: function () {
      let alertClass = "alert mb-0";
      if (this.bootstrapTypes.includes(this.type)) {
        alertClass += " alert-" + this.type;
      } else {
        alertClass += " alert-secondary";
      }
      return alertClass;
    },
  },
};
</script>
