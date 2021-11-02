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
            Footer,
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

<style lang="scss">
    body {
        background-color: grey;
    }

    .container {
        @media (min-width: 1400px) {
            max-width: 1320px;
        }
    }
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*color: #2c3e50;*/
        background-color: Lavender;
    }
</style>
