<template>
    <div id="app">
        <HeaderOffcavas></HeaderOffcavas>
        <div class="container">
            <ChatBoard :isActive="chatActive()" :messages="replics" @close-chat="closeChat"></ChatBoard>
            <SearchForm :quest="inputText" @focus-input="focusInput" @add-quest="addQuest($event)"></SearchForm>
            <AnswersBlock v-if="!chatIsActive" @quick-question="enterQuestion($event)"></AnswersBlock>
            <FeaturesBlock v-if="!chatIsActive"></FeaturesBlock>
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
                    {id: 1, author: "bot", content: "Напишите, то что ищете...",},
                    {id: 2, author: "user", content: "Найди слово охота",},
                    {id: 3, author: "bot", content: "Вот что найдено по слову",},
                    {id: 4, author: "user", content: "А теперь рыбалка",},
                    {id: 5, author: "bot", content: "К сожалению, ничего не найдено",},
                ],
                faq: [
                    {
                        id: 1, keywords: ['covid', 'ковид', 'корона'], answers: [
                            {content: 'Запись на вакцинацию', link: 'https://google.com'},
                            {content: 'Сертификат вакцинированного', link: 'https://ya.ru'},
                            {content: 'Мои QR-коды', link: 'https://ya.ru'}
                        ]
                    },
                    {
                        id: 2, keywords: ['спорт'], answers: [
                            {content: 'Присвоение спортивных разрядов', link: 'https://google.com'},
                            {
                                content: 'Присвоение квалификационных категорий спортивных судей',
                                link: 'https://google.com'
                            },
                            {
                                content: 'Государственная регистрация региональных общественных организаций или структурных подразделений (региональных отделений) общероссийской спортивной федерации',
                                link: 'https://google.com'
                            },
                        ]
                    },

                ],
                chatIsActive: false
            }
        },
        computed: {},
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
                this.inputText = question;
                console.log('eq ', this.inputText)
            },
            addQuest(inputValue) {
                let quest = {
                    id: this.replics.length + 1, author: "user", content: inputValue
                };
                this.replics.push(quest);
                let answer;
                this.faq.forEach(function (item) {
                    console.log('В первом цикле');
                    console.log(item.keywords);
                    // let id=item.id;
                    item.keywords.forEach(function (i) {
                        console.log('второй цикл i = ' + i);
                        console.log('this = ' + this);
                        if (inputValue.trim().toLowerCase() === i ) {
                            answer = {
                                author: "bot", content: 'Вот что я нашел по слову "' + inputValue +'":'
                            };
                        }
                    });
                });
                if (!answer) {
                    answer = {
                        author: "bot", content: 'Извините, я ничего не нашел'
                    };
                }
                answer.id = this.replics.length + 1;
                this.replics.push(answer);
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
