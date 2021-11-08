<template>
    <div id="app">
        <HeaderOffcavas></HeaderOffcavas>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import Footer from "@/components/Footer";

    export default {
        name: 'App',
        data() {
            return {

            }
        },
        computed: {},
        components: {
            HeaderOffcavas,
            Footer,
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*color: #2c3e50;*/
    }
</style>
