<template>
  <footer :class="'footer bg-' + theme">
    <div class="container">
      <div class="footer-content row row-cols-1 row-cols-md-3">
        <div class="info col">
          <SiteLogo :logo="config.adminSettings.logo" />
        </div>
        <FooterContacts :contacts="config.adminSettings.footer.contacts" />
        <FooterNav :links="config.adminSettings.footer.links" />
      </div>
      <template
        v-if="
          config.adminSettings.footer.copyright.publication &&
          config.adminSettings.footer.copyright.text
        "
      >
        <hr />
        <div class="footer-copyright text-center">
          {{ config.adminSettings.footer.copyright.text }}
        </div>
      </template>
      <b-modal id="modal-1" title="Обратная связь" hide-footer> </b-modal>
    </div>
  </footer>
</template>

<script>
import SiteLogo from "@/components/universal/SiteLogo";
import FooterContacts from "@/components/FooterContacts";
import FooterNav from "@/components/FooterNav";

export default {
  name: "Footer",
  components: {
    SiteLogo,
    FooterContacts,
    FooterNav,
  },
  props: ["config", "theme"],
};
</script>
