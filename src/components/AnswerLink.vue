<template>
        <router-link :to="this.link" class="answer-link btn btn-primary">{{this.text}}</router-link>
</template>

<script>
    export default {
        name: "AnswerLink",
        props: [
            'link',
            'text'
        ],
    }
</script>

<style lang="scss" scoped>
    .answer-link {
        display: inline-block;
        padding: 0.25em 0.5em;
        margin-right: 0.25em;
        margin-bottom: 0.25em;
        border: 1px solid #6688cc;
    }
</style>
