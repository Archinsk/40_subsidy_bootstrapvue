<template>
    <div class="chat-section row">
        <div class="col-2 position-relative">
            <img id="botWaiting" class="position-absolute" src="@/assets/default.jpg" alt="">
        </div>
        <div class="chatField col-10 position-relative" :class="{active: isActive}">
            <b-button @click="$emit('close-chat')">
                <b-icon
                        icon="x-circle"
                        aria-hidden="true"
                ></b-icon>
            </b-button>
            <b-alert show>Привет, я робот Фёдор! Напишите мне...</b-alert>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatBoard",
        data() {
            return {
                chatActive: false
            }
        },
        props: [
            'isActive'
        ],
        methods: {

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

            &.active {
                height: 500px;
            }
        }
    }
</style>
