<template>
    <div class="chat-section row">
        <div class="col-3 d-none d-lg-block">
            <img id="botWaiting" class="position-absolute" :class="{active: isActive}" src="@/assets/robot.png" alt="">
        </div>
        <div :class="'chatField col-lg-9 ' + chatFieldClass()">
            <b-alert v-for="message of messages" :key="message.id" :variant="getAuthor(message.author)" show>
                <div v-if="message.findedAnswers">
                    <div>Вот, что я нашел:</div>
                    <AnswerLink v-for="answ of message.findedAnswers" :key="answ.content" :link="answ.link"
                                :text="answ.content"></AnswerLink>
                </div>
                {{ message.content }}
            </b-alert>
        </div>
    </div>
</template>

<script>
    import AnswerLink from "@/components/AnswerLink";

    export default {
        name: "ChatBoard",
        components: {
            AnswerLink,
        },
        data() {
            return {
                linked: "https://ya.ru",
                texted: "Грант для ученых",

            }
        },
        props: [
            'isActive',
            'isFlying',
            'messages',
        ],
        computed: {

        },
        methods: {
            getAuthor(author) {
                return author === 'bot' ? 'primary' : 'danger'
            },
            // flyingBot() {
            //     console.log('isActive = ', this.isActive);
            //     if (this.isActive) {
            //         setTimeout(function () {return true}, 2000)
            //     } else {
            //         setTimeout(function () {return false}, 2000)
            //         }
            // }
            chatFieldClass() {
                let act = this.isActive;
                let fly = this.isFlying;
                console.log('act - ' + act + ', fly - ' + fly) + fly;
                if (act && fly) {
                    return "active flying"
                } else if (!act && !fly) {
                    return ''
                } else if (act && !fly){
                    return 'active'
                } else if (!act && fly) {
                    return 'flying'
                }
            }
        },

    }
</script>

<style lang="scss" scoped>
    $back-color: #6688CC;
    $bot-color: #fff;
    $user-color: #ACC0E6;

    .chat-section {
        background-color: $back-color;

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
            transition: height 1.0s;
            overflow-y: auto;
            padding-top: 1rem;

            &.active {
                background-color: #6688CC;
                height: calc(100vh - 7rem);
                padding-top: 0;
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
