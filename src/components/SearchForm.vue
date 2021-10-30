<template>
    <div class="search-section row justify-content-end">
        <div class="col-10">
            <b-form @submit="onSubmit" @reset="onReset">
                <div class="row">
                    <div class="col">
                        <b-form-group id="input-group-2" label="" label-for="input-2">
                            <b-form-input
                                    id="input-1"
                                    v-model="inputText"
                                    type="email"
                                    placeholder="Просто напишите то, что ищете..."
                                    required
                                    @focus="$emit('focus-input')"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-2">
                        <b-button block
                        @click="$emit('add-quest', )">Спросить</b-button>
                    </div>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchForm",
        data() {
            return {
                // inputText: this.quest,
            }
        },
        props: [
            'quest'
        ],
        computed: {
            inputText() {
                if (this.quest) {
                    this.$emit('focus-input');
                }
                return this.quest
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
