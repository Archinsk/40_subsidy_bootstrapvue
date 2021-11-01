<template>
    <div class="chat-section row">
        <div class="col-2 position-relative">
            <img id="botWaiting" class="position-absolute" src="@/assets/default.jpg" alt="">
        </div>
        <div class="chatField col-10 position-relative" :class="{active: isActive}">
            <b-button v-if="chatActive" @click="$emit('close-chat')">
                <b-icon
                        icon="x-circle"
                        aria-hidden="true"
                ></b-icon>
            </b-button>
            <b-alert v-for="message of messages" :key="message.id" :variant="getAuthor(message.author)" show>{{
                message.content }}
            </b-alert>
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
        computed: {

        },
        props: [
            'isActive',
            'messages'
        ],
        methods: {
            getAuthor(author) {
                return author === 'bot' ? 'success' : 'warning'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat-section {
        #botWaiting {
            width: 150px;
            bottom: 0;
            left: 0;
        }

        .chatField {
            background-color: lightskyblue;
            height: 150px;
            transition: height 2.0s;
            overflow: scroll;

            &.active {
                height: 500px;
            }
        }
    }
</style>
