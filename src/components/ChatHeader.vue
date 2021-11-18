<template>
    <div class="shadow">
        <div class="container">
            <div class="chat-header">
                <img src="@/assets/robot_avatar.png" alt="" class="chatHeaderAvatar rounded-circle d-lg-none">
                <div class="chatHeaderTitle d-lg-none">Робот Василий</div>
                <b-button @click="$emit('close-chat')" class="closeBtn rounded-circle">
                    <span class="material-icons">close</span>
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatHeader"
    }
</script>

<style lang="scss" scoped>
    $basic-color: #003399;
    $active-color: #fff;
    $gap: 1rem;

    .chat-header {
        height: 3.5rem;
        padding-top: $gap/16*5;
        padding-bottom: $gap/16*5;
        display: flex;
        align-items: center;

        .chatHeaderAvatar {
            background-color: $basic-color;
            height: 100%;

        }

        .chatHeaderTitle {
            margin-left: $gap/2;
            color: $active-color;
            font-weight: bolder;
        }

        .closeBtn {
            margin-left: auto;
            top: 0;
            right: 0;
            z-index: 100;
            padding: 0.625rem;
            display: flex;
            align-items: center;

            @media (min-width: 992px) {
                border-radius: 0.25rem !important;
            }
        }
    }


</style>
