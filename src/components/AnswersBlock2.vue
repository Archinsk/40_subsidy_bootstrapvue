<template>
    <div class="container">
        <div class="feature-section row justify-content-end">
            <div class="col-lg-9">
                <h4 class="features-title">Я только учусь, но уже могу предложить:</h4>
                <div v-for="n in rows" :key="n" class="row">
                    <div v-for="feature of partOfArray(features, (n-1)*columns+1, columns)" :key="feature.id"
                         class="feature col">
                        <b-button
                                variant="outline-light"
                                block
                                href="#"
                                @click="$emit('quick-question', feature.title)"
                        >
                            <span class="material-icons">{{ feature.icon }}</span>
                            <br>
                            {{ feature.title }}
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnswersBlock2",
        data() {
            return {
                columns: 6,
                features: [
                    {id: 1, title: "Гранты", icon: "workspace_premium"},
                    {id: 2, title: "Субсидии", icon: "volunteer_activism"},
                    {
                        id: 3,
                        title: "Наука",
                        icon: "science"
                    },
                    {id: 4, title: "Инновации", icon: "lightbulb"},
                ],
            }
        },
        computed: {
            rows() {
                return Math.ceil(this.features.length / this.columns)
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
    $basic-color: #325DE9;
    $col-gap: 0.5rem;

    .feature-section {
        padding-bottom: 0.5rem;

        .features-title {
            color: white;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        .row {
            margin-left: -$col-gap/2;
            margin-right: -$col-gap/2;


            .feature {
                padding-left: $col-gap/2;
                padding-right: $col-gap/2;
                margin-bottom: $col-gap;

                a {
                    height: 100%;
                    margin-top: auto;
                    margin-bottom: auto;
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;

                    .material-icons {
                        font-size: 2.5em;
                    }

                    &:hover {
                        color: $basic-color;
                    }
                }
            }
        }
    }

</style>
