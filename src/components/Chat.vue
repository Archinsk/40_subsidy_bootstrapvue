<template>
    <div class="chat">
        <ChatHeader v-show="isActive" @close-chat="$emit('close-chat')"></ChatHeader>
        <div class="container">
            <ChatBoard :isActive="isActive" :isFlyingUp="isFlyingUp" :isFlyingDown="isFlyingDown" :messages="messages"></ChatBoard>
            <SearchForm :isActive="isActive" :isFlyingUp="isFlyingUp" :isFlyingDown="isFlyingDown" :quest="quest" @add-quest="$emit('add-quest', $event)"
                        @focus-input="$emit('focus-input')"></SearchForm>
        </div>
    </div>
</template>

<script>
    import ChatHeader from "@/components/ChatHeader";
    import ChatBoard from "@/components/ChatBoard";
    import SearchForm from "@/components/SearchForm";

    export default {
        name: "Chat",
        components: {
            ChatHeader,
            ChatBoard,
            SearchForm,
        },
        props: [
            'isActive',
            'isFlyingUp',
            'isFlyingDown',
            'messages',
            'quest',
        ],
        methods: {},
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>
