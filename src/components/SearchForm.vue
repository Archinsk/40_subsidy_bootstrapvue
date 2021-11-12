<template>
    <div class="search-section row justify-content-end">

        <div class="col-lg-9">
            <b-form :class="textInField" @submit="onSubmit">
                <b-form-group id="inputGroupQuestion" label="" label-for="inputGroupQuestion">
                    <b-form-input
                            id="inputQuestion"
                            v-model="inputValue"
                            type="text"
                            placeholder="Просто напишите то, что ищете..."
                            autocomplete="off"
                            required
                            :class="roundedPill"
                            @focus="$emit('focus-input')"
                    ></b-form-input>

                </b-form-group>
                <b-button type="submit" class="rounded-circle">
                    <b-icon icon="arrow-right-short" aria-hidden="true"></b-icon>
                </b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {

        name: "SearchForm",

        props: [
            'quest'
        ],

        data() {
            return {
                inputValue: '',
                roundedPill: "rounded-pill",
                textInField: '',
            }
        },

        computed: {},

        methods: {
            onSubmit(event) {
                event.preventDefault();
                if (this.inputValue.trim()) {
                    this.$emit('add-quest', this.inputValue);
                    this.inputValue = '';
                }
            },
        },

        watch: {
            inputValue: function () {
                if (this.inputValue.trim()) {
                    console.log('Работает');
                    this.textInField = "isActive"
                } else {
                    console.log('В поле пусто')
                    this.textInField = ""
                }
            }
        },

        mounted() {
            this.inputValue = this.quest;
        }
    }
</script>

<style lang="scss">
    $form-gap: 0.3125rem;

    .search-section {
        background-color: #6688CC;
        overflow: hidden;

        form {
            display: flex;
            padding: $form-gap 0;

            #inputGroupQuestion {
                margin-bottom: 0;
                margin-right: 1.5625rem;
                transition: margin-right 1s;
                flex-grow: 1;

                #inputQuestion {
                    height: 2.875rem;
                    width: 100%;
                }
            }

            &.isActive {
                #inputGroupQuestion {
                    margin-right: $form-gap;
                    flex-grow: 1;

                    &>div {
                        flex-grow: 1;
                    }
                }
            }

            .btn {
                padding-top: 0.625rem;
                padding-bottom: 0.625rem;
                margin-right: -4.4375rem;
                transition: margin-right 1s;
            }

            &.isActive {
                .btn {
                    margin-right: 0;
                }

            }
        }
    }

</style>
