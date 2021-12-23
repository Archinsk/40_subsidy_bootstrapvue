<template>
    <footer class="footer">
        <div class="footer__wrapper container">
            <div class="footer__main row row-cols-1 row-cols-md-3">
                <div class="footer__info col">
                    <SiteLogo/>
                    <FooterSocial/>
                </div>
                <FooterContacts/>
                <FooterNavigation/>
            </div>
            <hr>
            <div class="footer__copyright">
                Все права защищены
            </div>
            <b-modal id="modal-1" title="Обратная связь" hide-footer>
                <SupportRequestForm/>
            </b-modal>

        </div>
    </footer>
</template>

<script>
    import SiteLogo from "@/components/universal/SiteLogo";
    import FooterSocial from "@/components/FooterSocial";
    import FooterContacts from "@/components/FooterContacts";
    import FooterNavigation from "@/components/FooterNavigation";
    import SupportRequestForm from "@/components/SupportRequestForm";

    export default {
        name: "Footer",

        components: {
            SupportRequestForm, SiteLogo, FooterContacts, FooterNavigation, FooterSocial,
        }
    }
</script>

<style lang="scss" scoped>
    $gap: 1rem;
    $basic-color: #325DE9;
    $passive-color: #e4e4e4;

    .footer {
        padding-top: $gap;
        padding-bottom: $gap;
        background-color: $basic-color;
        color: $passive-color;

        .footer__main {

            .footer__info {
                & > * {
                    margin-bottom: $gap;
                }
            }
        }

        hr {
            border-top-color: $passive-color;
            margin-top: 0;
            margin-bottom: $gap;
        }

    }
</style>
