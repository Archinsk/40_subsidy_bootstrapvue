<template>
    <div class="container">
        <div class="answer-section row justify-content-end">
            <div class="answers-list col-lg-9">
                <b-button variant="primary"
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
                    {id: 1, question: "Гранты"},
                    {id: 2, question: "Субсидии"},
                    {id: 3, question: "Наука"},
                    {id: 4, question: "Инновации"},
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    $gap: 1rem;

    .answers-list {
        display: flex;
        flex-wrap: wrap;
        padding-top: 0.1875rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;

        > * {
            padding: 0.25em 0.5em;
            flex-grow: 1;
            margin-left: $gap/4;
            margin-right: $gap/4;
            margin-bottom: $gap/2;
        }
    }

</style>
