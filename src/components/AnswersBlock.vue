<template>
    <div class="answer-section row justify-content-end mb-3">
        <div class="col col-lg-9">
            <b-button class="mr-2" variant="outline-secondary"
                      v-for="item of faq"
                      :key="item.id"
                      @click="$emit('quick-question', item.question)"
            >
                {{ item.question }}
            </b-button>
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
                    {id: 5, question: "Как зарегистрироваться"},
                    {id: 6, question: "Как зарегистрироваться"},
                    {id: 7, question: "Как зарегистрироваться"},
                    {id: 8, question: "Как зарегистрироваться"},
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
