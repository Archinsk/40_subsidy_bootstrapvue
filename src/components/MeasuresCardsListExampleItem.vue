<template>

    <div class="card measure-card">
        <div class="card-body row">
            <router-link :to="measure.measure_link" class="measure-title col-12 col-md-9 stretched-link">
                <h5 class="card-title">
                        <span class="badge badge-primary">{{ measure.subsidy_number }}</span>
                        {{ measure.title }}
                </h5>
            </router-link>
            <div class="measure-period col-12 col-md-3">
                Приём заявок<br>
                <b>с {{ measure.open_date }} по {{ measure.close_date }}</b>
            </div>
        </div>
        <div class="card-footer bg-transparent row">
            <div class="measure-owner-logo col-md-6 col-lg-5">
                <img :src=" 'images/initiators_logo/' + measure.initiator_logo" class="measure-owner-logo-image"
                     alt="...">
                <div class="measure-owner-logo-text">
                    <div class="measure-owner-logo-text__comment">Инициатор</div>
                    <div class="measure-owner-logo-text__name">
                        {{ measure.initiator_title }}
                    </div>
                </div>
            </div>
            <div class="measure-details col-md-6 col-lg-3">
                <div class="measure-size">
                    <div class="measure-size__header">{{ measure.measure_size==='нф' ? 'Нефинансовая мера поддержки' :
                        'Размер поддержки' }}
                    </div>
                    <div v-show="measure.measure_size!=='нф'" class="measure-size__value">до {{ measure.measure_size }}
                        рублей
                    </div>
                </div>
            </div>
            <div class="measure-buttons col">
                <img v-show="measure.electronic_form === '1'" class="measure-web-accessibility"
                     src="@/assets/electronic.png"
                     title="По данной мере поддержки есть возможность электронной подачи"
                     alt="">
                <a href="#" class="btn btn-outline-primary">Получить поддержку</a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "MeasuresCardsListExampleItem",

        props: [
            'measure',
        ],


    }
</script>
