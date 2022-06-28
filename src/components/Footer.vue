<template>
  <footer :class="'footer bg-' + theme">
    <div class="container">
      <div class="footer-content row row-cols-1 row-cols-md-3">
        <div class="info col">
          <SiteLogo />
        </div>
        <FooterContacts />
        <FooterNav />
      </div>
      <hr />
      <div class="footer-copyright text-center">
        &copy; Информационные системы и сервисы, 2022
      </div>
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
  props: ["theme"],
};
</script>
