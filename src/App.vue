<template>
    <div id="app">
        <HeaderOffcavas></HeaderOffcavas>
        <div class="container">
            <ChatBoard :isActive="chatActive" @close-chat="closeChat"></ChatBoard>
            <SearchForm @focus-input="focusInput"></SearchForm>
            <AnswersBlock></AnswersBlock>
            <FeaturesBlock></FeaturesBlock>
        </div>
        <hr>
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import HeaderOffcavas from "@/components/HeaderOffcavas";
    import ChatBoard from "@/components/ChatBoard";
    import SearchForm from "@/components/SearchForm";
    import AnswersBlock from "@/components/AnswersBlock";
    import FeaturesBlock from "@/components/FeaturesBlock";

    export default {
        name: 'App',
        data() {
            return {
              chatActive: false
            }
        },
        components: {
            HeaderOffcavas,
            ChatBoard,
            SearchForm,
            AnswersBlock,
            FeaturesBlock,
        },
      methods: {
        focusInput() {
          this.chatActive = true
        },
          closeChat() {
              console.log(this.chatActive)

              if (this.chatActive) {
                  this.chatActive = !this.chatActive
              }
          }
      }
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
