<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <div class="footer__main row row-cols-1 row-cols-md-3">
        <div class="footer__info col">
          <SiteLogo />
          <FooterSocial />
        </div>
        <FooterContacts />
        <FooterNav />
      </div>
      <hr />
      <div class="footer__copyright">Все права защищены</div>
      <b-modal id="modal-1" title="Обратная связь" hide-footer>
        <SupportRequestForm />
      </b-modal>
    </div>
  </footer>
</template>

<script>
import SiteLogo from "@/components/universal/SiteLogo";
import FooterSocial from "@/components/FooterSocial";
import FooterContacts from "@/components/FooterContacts";
import FooterNav from "@/components/FooterNav";
import SupportRequestForm from "@/components/SupportRequestForm";

export default {
  name: "Footer",
  components: {
    SiteLogo,
    FooterSocial,
    FooterContacts,
    FooterNav,
    SupportRequestForm,
  },
};
</script>
