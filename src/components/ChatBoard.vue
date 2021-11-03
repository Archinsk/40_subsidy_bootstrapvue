<template>
    <div class="chat-section row mb-3">
        <div class="col-3 position-relative">
            <img id="botWaiting" class="position-absolute" :class="{active: isActive}" src="@/assets/robot.png" alt="">
        </div>
        <div class="chatField col-6 position-relative" :class="{active: isActive}">
            <b-button v-if="chatActive" @click="$emit('close-chat')" class="closeBtn mt-3">
                <b-icon
                        icon="x-circle"
                        aria-hidden="true"
                ></b-icon>
            </b-button>
            <div class="position-absolute replics-list">
                <b-alert v-for="message of messages" :key="message.id" :variant="getAuthor(message.author)" show>{{
                    message.content }}
                </b-alert>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatBoard",
        data() {
            return {
                chatActive: false,
            }
        },
        watch: {
            isActive: function () {
                this.chatActive = this.isActive
            }
        },
        computed: {},
        props: [
            'isActive',
            'messages'
        ],
        methods: {
            getAuthor(author) {
                return author === 'bot' ? 'primary' : 'danger'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat-section {
        #botWaiting {
            width: 60%;
            bottom: -100%;
            left: 20%;
            margin: auto;

            &.active {
                bottom: -10%;
            }
        }

        .chatField {
            background-color: #6688cc;
            height: 100px;
            transition: height 2.0s;
            overflow-y: auto;

            &.active {
                background-color: #003399;
                height: 600px;
            }

            .replics-list {
                bottom: 0;
                width: 95%;
                margin-top: auto;

                .alert-primary {
                    width: 75%;
                    border-bottom-left-radius: 0;
                }

                .alert-danger {
                    width: 75%;
                    margin-left: auto;
                    border-bottom-right-radius: 0;
                }
            }

            .closeBtn {
                margin-left: auto;
            }
        }
    }
</style>
