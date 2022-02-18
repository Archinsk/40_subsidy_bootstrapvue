<template>
  <div class="form-row">
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input19">Id</label>
      <input
        v-model="footerMenuItemId"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input19"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input20">Тип</label>
      <input
        v-model="footerMenuItemType"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input20"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input21">Язык</label>
      <input
        v-model="footerMenuItemLocale"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input21"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input22">Имя</label>
      <input
        v-model="footerMenuItemText"
        type="text"
        class="form-control form-control-sm"
        id="input22"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input23">Иконка</label>
      <input
        v-model="footerMenuItemIcon"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input23"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input24">Пункты</label>
      <input
        v-model="footerMenuItemChilds"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input24"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input25">IdPar</label>
      <input
        v-model="footerMenuItemParentId"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input25"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input26">Порядок</label>
      <input
        v-model="footerMenuItemOrder"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input26"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input27">Админ</label>
      <input
        v-model="footerMenuItemAdmin"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input27"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <label v-if="index === 0" for="input28">Гость</label>
      <input
        v-model="footerMenuItemGuest"
        type="text"
        class="form-control form-control-sm form-control-plaintext"
        id="input28"
      />
    </div>
    <div class="form-group mb-0 col-1">
      <button class="btn btn-outline-primary">ред</button>
    </div>
    <div class="form-group mb-0 col-1">
      <button @click="$emit('delete-item')" class="btn btn-danger">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMenuItem",
  props: ["item", "index"],
  data() {
    return {
      footerMenuItemId: this.item ? this.item.id : "",
      footerMenuItemLocale: this.item ? this.item.title[0].localeCode : "",
      footerMenuItemText: this.item ? this.item.title[0].text : "",
      footerMenuItemType: this.item ? this.item.type : "",
      footerMenuItemIcon: this.item ? this.item.cssIcon : "",
      footerMenuItemChilds: this.item ? this.item.childs : "",
      footerMenuItemParentId: this.item ? this.item.parentId : "",
      footerMenuItemOrder: this.item ? this.item.order : "",
      footerMenuItemAdmin: this.item ? this.item.admin : "",
      footerMenuItemGuest: this.item ? this.item.guest : "",
      changed: false,
    };
  },
  watch: {
    footerMenuItemText() {
      let changedItem = {
        id: this.footerMenuItemId,
      };
      if (this.footerMenuItemText !== this.item.title[0].text) {
        changedItem.newValue = this.footerMenuItemText;
        this.$emit("add-to-change-list", changedItem);
      } else {
        changedItem.oldValue = this.this.item.title[0].text;
        this.$emit("remove-from-change-list", changedItem);
      }
    },
  },
};
</script>
