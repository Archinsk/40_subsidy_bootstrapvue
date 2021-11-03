<template>
    <div class="answer-section row justify-content-end mb-3">
        <div class="col-9">
            <div class="row">
                <b-button class="mr-2" variant="outline-secondary"
                        v-for="item of faq"
                        :key="item.id"
                        @click="$emit('quick-question', item.question)"
                        >
                    {{ item.question }}
                </b-button>
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
