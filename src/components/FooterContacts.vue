<template>
  <ul class="contacts col-md-3">
    <li v-if="contacts.phone">
      <a :href="'tel:' + contacts.phone" class="contacts__phone">{{
        contacts.phone
      }}</a>
    </li>
    <li v-if="contacts.email">
      <a :href="'mailto:' + contacts.email" class="contacts__mail">{{
        contacts.email
      }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterContacts",
  props: ["contacts"],
};
</script>
