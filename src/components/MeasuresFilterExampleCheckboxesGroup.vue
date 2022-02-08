<template>
    <div>
        <b-form-group
                :label="filterData.title"
                v-slot="{ ariaDescribedby }"
        >
            <b-form-checkbox-group
                    v-model="filterData.selected"
                    :options="filterData.options"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-2a"
                    stacked
            ></b-form-checkbox-group>
        </b-form-group>

    </div>
</template>

<script>
    export default {
        name: "MeasuresFilterExampleCheckboxesGroup",

        props: [
            'filterData'
        ],

        data() {
            return {
                selected: [], // Must be an array reference!
                options: [
                    { text: 'Лесоводство и лесозаготовки', value: '1' },
                    { text: 'Добыча угля', value: '2' },
                    { text: 'Производство одежды', value: '3' },
                    { text: 'Строительство зданий', value: '4' },
                    { text: 'Научные исследования и разработки', value: '5' },
                    { text: 'Деятельность общественных организаций', value: '6' },
                    { text: 'Производство мебели', value: '7' },
                    { text: 'Деятельность профессиональная научная и техническая прочая', value: '8' },
                    { text: 'Деятельность в области спорта, отдыха и развлечений', value: '9' },
                    { text: '10 – тип поддержки, который нам в итоге нужно найти', value: '10' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
