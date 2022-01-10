<template>
  <ul class="footer__contacts col-md-3">
    <li><a href="tel:+78007751986" class="footer__phone">8-800-775-1986</a></li>
    <li><a href="tel:+73833541011" class="footer__phone">8-383-354-1011</a></li>
    <li>
      <a href="mailto:info@is-n-s.ru" class="footer__mail">info@is-n-s.ru</a>
    </li>
    <li>
      <b-button href="#" variant="link" v-b-modal.modal-1
        >Техническая поддержка</b-button
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterContacts",
};
</script>

<style lang="scss" scoped>
$gap: 1rem;
$passive-color: #e4e4e4;
$active-color: #fff;

.footer__contacts {
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

  /*For modal Support Request Form*/
  .btn {
    vertical-align: initial;
    border: none;
    padding: 0;
  }
}
</style>
