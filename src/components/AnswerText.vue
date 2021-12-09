<template>
        <div class="answer-text">{{this.text}}</div>
</template>

<script>
    export default {
        name: "AnswerLink",
        props: [
            'text'
        ],
    }
</script>

<style lang="scss" scoped>
    .answer-text {

    }
</style>
