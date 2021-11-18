<template>
    <div class="search-section row justify-content-end">

        <div :class="'searchBlock col-lg-9 ' + chatFieldClass()">
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
                    <span class="material-icons">send</span>
                </b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {

        name: "SearchForm",

        props: [
            'quest',
            'isActive',
            'isFlyingUp',
            'isFlyingDown',
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
            chatFieldClass() {
                let act = this.isActive;
                let flyUp = this.isFlyingUp;
                let flyDown = this.isFlyingDown;

                if (act) {
                    if (!flyUp && !flyDown) {
                        return "active"
                    }
                    if (flyUp) {
                        return "active flyingUp"
                    }
                    if (flyDown) {
                        return "active flyingDown"
                    }
                } else {
                    return ''
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
            },
            quest: function () {
                this.inputValue = this.quest;
            }
        },

    }
</script>

<style lang="scss">
    $form-gap: 0.3125rem;
    $chat-color: #6688CC;

    .search-section {
        background-color: $chat-color;

        .searchBlock {
            overflow: hidden;

            padding-bottom: 0;

            &.active {
                padding-bottom: calc(100vh - 29rem);

                &.flyingDown {
                    transition: all 1s;
                    padding-bottom: 0;
                }

                &.flyingUp {
                    transition: all 1s;
                    padding-bottom: calc(100vh - 29rem);
                }
            }

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

                        @media (min-width: 992px) {
                            border-radius: 0.25rem !important;
                        }

                        &:focus {
                            box-shadow: none;
                            border-color: #ced4da;
                        }
                    }
                }

                &.isActive {
                    #inputGroupQuestion {
                        margin-right: $form-gap*2;
                        flex-grow: 1;

                        & > div {
                            flex-grow: 1;
                        }
                    }
                }

                /*.btn {
                    border-color: $passive-color;
                    padding: $gap/16*6;
                    display: flex;
                }*/

                .btn {
                    display: flex;
                    align-items: center;
                    padding-left: 0.625rem;
                    padding-right: 0.625rem;
                    margin-right: -4.4375rem;
                    transition: margin-right 1s;

                    @media (min-width: 992px) {
                        border-radius: 0.25rem !important;
                    }
                }

                &.isActive {
                    .btn {
                        margin-right: 0;
                    }
                }
            }
        }
    }

</style>
