<template>
    <div class="form-row">
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input19">Id</label>
            <input v-model="footerMenuItemId" type="text" class="form-control form-control-sm form-control-plaintext"
                   id="input19">
        </div>
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input20">Тип</label>
            <input v-model="footerMenuItemType" type="text" class="form-control form-control-sm form-control-plaintext"
                   id="input20">
        </div>
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input21">Язык</label>
            <input v-model="footerMenuItemLocale" type="text"
                   class="form-control form-control-sm form-control-plaintext" id="input21">
        </div>
        <div class="form-group mb-0 col-3">
            <label v-if="index === 0" for="input22">Имя</label>
            <input
                    v-model="footerMenuItemText"
                    type="text"
                    class="form-control
                    form-control-sm"
                    id="input22"
            >
        </div>
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input23">Иконка</label>
            <input v-model="footerMenuItemIcon" type="text" class="form-control form-control-sm form-control-plaintext"
                   id="input23">
        </div>
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input24">Пункты</label>
            <input v-model="footerMenuItemChilds" type="text"
                   class="form-control form-control-sm form-control-plaintext" id="input24">
        </div>
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input25">IdPar</label>
            <input v-model="footerMenuItemParentId" type="text"
                   class="form-control form-control-sm form-control-plaintext" id="input25">
        </div>
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input26">Порядок</label>
            <input v-model="footerMenuItemOrder" type="text" class="form-control form-control-sm form-control-plaintext"
                   id="input26">
        </div>
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input27">Админ</label>
            <input v-model="footerMenuItemAdmin" type="text" class="form-control form-control-sm form-control-plaintext"
                   id="input27">
        </div>
        <div class="form-group mb-0 col-1">
            <label v-if="index === 0" for="input28">Гость</label>
            <input v-model="footerMenuItemGuest" type="text" class="form-control form-control-sm form-control-plaintext"
                   id="input28">
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterMenuItem",
        props: [
            'item',
            'index',
        ],
        data() {
            return {
                footerMenuItemId: this.item ? this.item.id : '19',
                footerMenuItemLocale: this.item ? this.item.title[0].localeCode : '20',
                footerMenuItemText: this.item ? this.item.title[0].text : '21',
                footerMenuItemType: this.item ? this.item.type : '22',
                footerMenuItemIcon: this.item ? this.item.cssIcon : '23',
                footerMenuItemChilds: this.item ? this.item.childs : '24',
                footerMenuItemParentId: this.item ? this.item.parentId : '25',
                footerMenuItemOrder: this.item ? this.item.order : '26',
                footerMenuItemAdmin: this.item ? this.item.admin : '27',
                footerMenuItemGuest: this.item ? this.item.guest : '28',
                changed: false,
            }
        },
        watch: {
            footerMenuItemText() {
                let changedItem = {
                    id: this.footerMenuItemId
                };
                if (this.footerMenuItemText !== this.item.title[0].text) {
                    changedItem.newValue = this.footerMenuItemText;
                    this.$emit('add-to-change-list', changedItem);
                } else {
                    changedItem.oldValue = this.this.item.title[0].text;
                    this.$emit('remove-from-change-list', changedItem);
                }
            },
        }
    }
</script>

<style scoped>

</style>
