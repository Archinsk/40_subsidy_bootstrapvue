<!--Разобраться с относительными путями в img-src и их конвертацией без использования вложенного темплейта с картинкой-->
<template>
    <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            indicators
            background="#003399"
            img-width="1920"
            img-height="400"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
    >
        <b-carousel-slide
                caption="Поддержка физических лиц"
                text="С помощью нашего ресурса вы сможете подобрать необходимую меру поддержки"
        >
            <template #img>
                <img
                        class="d-block img-fluid w-100"
                        src="@/assets/banner11.jpg"
                        alt="слот изображения"
                >
            </template>
        </b-carousel-slide>
        <b-carousel-slide
                caption="Калькулятор мер поддержки"
                text="Рассчитайте размер доступной субсидии с помощью нашего онлайн-калькулятора"
        >
            <template #img>
                <img
                        class="d-block img-fluid w-100"
                        src="@/assets/banner22.jpg"
                        alt="слот изображения"
                >
            </template>
        </b-carousel-slide>
        <b-carousel-slide
                caption="Поддержка юридических лиц"
                text="Субъекты малого и среднего бизнеса смогут подобрать субсидию на развитие своего дела с помощью навигатора мер поддержки"
        >
            <template #img>
                <img
                        class="d-block img-fluid w-100"
                        src="@/assets/banner33.jpg"
                        alt="слот изображения"
                >
            </template>
        </b-carousel-slide>
    </b-carousel>
</template>

<script>
    export default {
        name: "Slider",
        data() {
            return {
                slide: 0,
                sliding: null,
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
