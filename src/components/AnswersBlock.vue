<template>
    <div class="answer-section row justify-content-end">
        <div class="col-10">
            <div class="row">
                <b-button v-for="item of faq" :key="item.id" variant="outline-secondary" class="mr-2">{{ item.question }}</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnswersBlock",
        data() {
            return {
                faq: [
                    {id: 1, question: "COVID"},
                    {id: 2, question: "Перепись населения"},
                    {id: 3, question: "Пособия"},
                    {id: 4, question: "Как зарегистрироваться"},
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
