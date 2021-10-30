<template>
    <div id="app">
        <HeaderOffcavas></HeaderOffcavas>
        <div class="container">
            <ChatBoard :isActive="chatActive()" @close-chat="closeChat" :messages="replics"></ChatBoard>
            <SearchForm @focus-input="focusInput" :quest="inputText"></SearchForm>
            <AnswersBlock @quick-question="enterQuestion($event)"></AnswersBlock>
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
                inputText: '',
                replics: [
                    {id: 1, author: "bot", content: "Поиск на пол-федора",},
                    {id: 2, author: "user", content: "Найди слово охота",},
                    {id: 3, author: "bot", content: "Вот что найдено по слову",},
                    {id: 4, author: "user", content: "А теперь рыбалка",},
                    {id: 5, author: "bot", content: "К сожалению, ничего не найдено",},
                ],
                chatIsActive: false
            }
        },
        computed: {

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
                this.chatIsActive = true
            },
            closeChat() {
                this.inputText = '';
                if (this.chatIsActive) {
                    this.chatIsActive = !this.chatIsActive
                }
            },
            enterQuestion(question) {
                // console.log(this.inputText);
                this.inputText = question;
                // console.log(this.inputText);

            },
            chatActive() {
                return this.replics.length > 1 && this.chatIsActive
            },
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
