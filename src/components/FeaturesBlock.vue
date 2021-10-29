<template>
    <div class="feature-section row justify-content-end">
        <div class="col-10">
            <div class="features-title">Я только учусь, но могу предложить</div>
            <div v-for="n in rows" :key="n" class="row mb-2">
                <div v-for="feature of partOfArray(features, (n-1)*columns+1, columns)" :key="feature.id" class="feature col">
                    <b-button block :href="feature.link">
                        <b-icon :icon="feature.icon" aria-hidden="true"></b-icon>
                        {{ feature.title }}
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FeaturesBlock",
        data() {
            return {
                columns: 3,
                features: [
                    {id:1, title:"Паспорт", icon:"alarm", link:"https://www.gosuslugi.ru/600102/1/form"},
                    {id:2, title:"Загранпаспорт", icon:"flower1", link:"https://www.gosuslugi.ru/600101/1/form"},
                    {id:3, title:"Справка о судимости", icon:"briefcase", link:"https://www.gosuslugi.ru/600103/1/form"},
                    {id:4, title:"Брак", icon:"bug", link:"https://www.gosuslugi.ru/600105/1/form"},
                    {id:5, title:"Развод", icon:"gem", link:"https://www.gosuslugi.ru/600106/1/form"},
                    {id:6, title:"Решаем вместе", icon:"globe", link:"https://www.gosuslugi.ru/help/obratitsya_v_pos"},
                ],
            }
        },
        computed: {
            rows() {
                return Math.ceil(this.features.length/this.columns)
            },
        },
        methods: {
            partOfArray(arr, startId, size) {
                return arr.filter(item => item.id >= startId && item.id < startId + size);
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
