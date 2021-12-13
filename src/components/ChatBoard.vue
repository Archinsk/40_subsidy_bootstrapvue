<template>
    <div class="chat-section row">
        <div class="col-3 d-none d-lg-block">
            <img id="botWaiting" class="position-absolute" :class="{active: isActive}" src="@/assets/robot.png" alt="">
        </div>
        <div :class="'chatField col-lg-9 ' + chatFieldClass()">
            <b-alert v-for="message of messages" :key="message.id" :variant="getAuthor(message.author)" show>
                <div v-if="message.findedAnswers">
                    <div v-if="message.findedAnswers[0].link">Вот, что я нашел:</div>
                    <div v-for="answ of message.findedAnswers" :key="answ.content" >
                        <AnswerLink  v-if="answ.link"
                                    :link="answ.link"
                                    :text="answ.content"></AnswerLink>
                        <AnswerText v-if="!answ.link"
                                    :text="answ.content"></AnswerText>
                    </div>
                </div>
                {{ message.content }}
            </b-alert>
        </div>
    </div>
</template>

<script>
    import AnswerLink from "@/components/AnswerLink";
    import AnswerText from "@/components/AnswerText";

    export default {
        name: "ChatBoard",
        components: {
            AnswerLink,
            AnswerText
        },
        data() {
            return {
                linked: "https://ya.ru",
                texted: "Грант для ученых",

            }
        },
        props: [
            'isActive',
            'isFlyingUp',
            'isFlyingDown',
            'messages',
        ],
        computed: {

        },
        methods: {
            getAuthor(author) {
                return author === 'bot' ? 'primary' : 'danger'
            },
            chatFieldClass() {
                let act = this.isActive;
                let flyUp = this.isFlyingUp;
                let flyDown = this.isFlyingDown;

                if(act) {
                    if(!flyUp && !flyDown) {
                        return "active"
                    }
                    if(flyUp) {
                        return "active flyingUp"
                    }
                    if(flyDown) {
                        return "active flyingDown"
                    }
                } else {
                    return ''
                }
            },
        },

    }
</script>

<style lang="scss" scoped>
    $back-color: #6688CC;
    $bot-color: #fff;
    $user-color: #ACC0E6;

    .chat-section {
        /*background-color: $back-color;*/
        .chat {
            height: 100vh;
        }

        .container {
            height: calc(100vh - 3.5rem);
        }

        #botWaiting {
            width: 60%;
            bottom: -270%;
            left: 20%;
            margin: auto;

            &.active {
                bottom: -10%;
            }
        }

        .chatField {
            height: 3.4375rem;
            display: flex;
            flex-direction: column;
            justify-content: end;
            overflow-y: auto;
            padding-top: 1rem;

            &.active {
                height: 31.4375rem;
                padding-top: 29rem;

                &.flyingDown {
                    transition: all 1s;
                    height: calc(100vh - 7rem);
                    padding-top: 0;
                }

                &.flyingUp {
                    transition: all 1s;
                    height: 31.4375rem;
                    padding-top: 29rem;
                }

            }

            .alert {
                display: inline-block;
                border: none;
                padding: 0.375rem 0.75rem;
                max-width: calc(100% - 3.5rem);
                margin-bottom: 0.5rem;

                &:last-child {
                    margin-bottom: 0.1875rem;
                }
            }

            .alert-primary {
                background-color: $bot-color;
                border-radius: 0 0.75rem 0.75rem;
                align-self: start;
            }

            .alert-danger {
                background-color: $user-color;
                border-radius: 0.75rem 0.75rem 0;
                align-self: end;
            }
        }
    }
</style>
