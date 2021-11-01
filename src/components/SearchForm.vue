<template>
    <div class="search-section row justify-content-end">
        <div class="col-10">
            <b-form @submit="onSubmit">
                <div class="row">
                    <div class="col">
                        <b-form-group id="input-group-2" label="" label-for="input-2">
                            <b-form-input
                                    id="input-1"
                                    v-model="inputValue"
                                    type="text"
                                    placeholder="Просто напишите то, что ищете..."
                                    required
                                    @focus="$emit('focus-input')"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-2">
                        <b-button block type="submit">Отправить</b-button>
                    </div>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        watch: {
            quest: function () {
                this.inputValue = this.quest
            }
        },
        name: "SearchForm",
        props: [
            'quest'
        ],
        data() {
            return {
                inputValue: '',
            }
        },
        computed: {

        },
        methods: {
            inputText (event) {
                this.inputValue = event
            },
            onSubmit(event) {
                event.preventDefault();
                if (this.inputValue.trim()) {
                    this.$emit('add-quest', this.inputValue);
                    this.inputValue = '';
                }
            },

        }
    }
</script>

<style lang="scss" scoped>

</style>
