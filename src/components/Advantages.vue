<template>
    <div class="advantages__wrapper container">
        <h2 class="advantages__header text-center py-2">Наши преимущества</h2>

        <div class="row row-cols-2 row-cols-sm-2 row-cols-lg-4">
            <div class="col">
                <div class="h-100">
                    <img src="@/assets/advantages/adv1.jpg" class="advantage__image" alt="...">
                    <div class="advantage__comment text-center">
                        <h5 class="card-title">Контракты</h5>
                        <p class="card-text">
                            Заключайте контракты с другими участниками прямо в личном кабинете
                        </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="h-100">
                    <img src="@/assets/advantages/adv2.jpg" class="advantage__image" alt="...">
                    <div class="advantage__comment text-center">
                        <h5 class="card-title">Партнеры</h5>
                        <p class="card-text">
                            Находите партнеров из других отраслей
                        </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="h-100">
                    <img src="@/assets/advantages/adv3.jpg" class="advantage__image" alt="...">
                    <div class="advantage__comment text-center">
                        <h5 class="card-title">Поддержка</h5>
                        <p class="card-text">
                            Получайте поддержку и консультации с консьерж-сервисом
                        </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="h-100">
                    <img src="@/assets/advantages/adv4.jpg" class="advantage__image" alt="...">
                    <div class="advantage__comment text-center">
                        <h5 class="card-title">Поиск</h5>
                        <p class="card-text">Открывайте новые возможности с помощью поиска на основе
                            искусственного
                            интеллекта</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Advantages",
        data() {
            return {
                imgurl: "../assets/advantages/adv1.jpg",

            }
        }
    }
</script>

<style scoped>
    .advantage__image {
        display: block!important;
        padding: 1rem;
        width: 100%;
        border-radius: 50%;
    }

    .advantage__comment {
        padding: 1rem;
    }
</style>
