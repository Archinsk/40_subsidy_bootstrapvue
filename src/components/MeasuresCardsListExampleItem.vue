<template>

    <div class="card measure-card">
        <div class="card-body row">
            <router-link :to="measure.measure_link" class="measure-title col-12 col-md-9 stretched-link">
                <h5 class="card-title">
                        <span :class="'badge badge-' + theme">{{ measure.subsidy_number }}</span>
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
                <button type="button" :class="'btn btn-outline-' + theme + ' btn-icon-only_square measure-web-accessibility'" title="По данной мере поддержки есть возможность электронной подачи">
                    <span class="material-icons">laptop</span>
                </button>
                <a href="#" :class="'btn btn-outline-' + theme">Получить поддержку</a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "MeasuresCardsListExampleItem",

        props: [
            "measure", "theme",
        ],


    }
</script>
