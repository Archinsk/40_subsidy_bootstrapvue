<template>
    <div class="search-section row justify-content-end">
        <div class="col col-lg-9">
            <b-form inline @submit="onSubmit">
                <div class="row">
                    <div class="col">
                        <b-form-group id="input-group-2" label="" label-for="input-2">
                            <b-form-input
                                    id="input-1"
                                    v-model="inputValue"
                                    type="text"
                                    placeholder="Просто напишите то, что ищете..."
                                    autocomplete="off"
                                    required
                                    @focus="$emit('focus-input')"
                            ></b-form-input>
                            <b-button type="submit">Отправить</b-button>
                        </b-form-group>
                    </div>
                </div>
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
            }
        },

        computed: {

        },

        methods: {
            onSubmit(event) {
                event.preventDefault();
                if (this.inputValue.trim()) {
                    this.$emit('add-quest', this.inputValue);
                    this.inputValue = '';
                }
            },
        },

        mounted() {
            this.inputValue = this.quest;
        }
    }
</script>

<style lang="scss" scoped>

</style>
