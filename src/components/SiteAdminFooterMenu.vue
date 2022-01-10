<template>
  <div>

    <div v-for="(footerMenuItem, index) of footerMenu" :key="footerMenuItem.id">
      <SiteAdminFooterMenuItem
        :item="footerMenuItem"
        :index="index"
        @add-to-change-list="addToChangeList($event)"
        @remove-from-change-list="removeFromChangeList($event)"
        @delete-item="deleteFooterMenuItem(footerMenuItem.id)"
      />
    </div>

    <div class="form-row">
      <div class="form-group col-2">
        <button
          @click="addFooterMenuItem"
          class="btn btn-outline-primary btn-block"
        >
          Добавить
        </button>
      </div>
      <div class="form-group col-2">
        <button @click="resetChanges" class="btn btn-outline-primary btn-block">
          Отмена
        </button>
      </div>
      <div class="form-group col-2">
        <button
          @click="applyChangesFooterMenu"
          class="btn btn-primary btn-block"
        >
          Применить
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import SiteAdminFooterMenuItem from "@/components/SiteAdminFooterMenuItem";

export default {
  name: "SiteAdminFooterMenu",
  components: {
    SiteAdminFooterMenuItem,
  },
  data() {
    return {
      footerMenu: [],
      footerMenuNewItem: {
        title: [
          {
            localeCode: "ru",
            text: "Новый пункт",
          },
        ],
        type: 2,
        cssIcon: "bi-icon",
        childs: [],
        parentId: 0,
        order: 0,
        admin: false,
        guest: true,
      },
      changedFooterMenuItemsId: [],
      changedFooterMenu: [],
    };
  },
  methods: {
    getFooterMenu() {
      const xhr = new XMLHttpRequest();
      const url =
        "https://open-newtemplate.isands.ru/open-core/api/site-data/get-footer";
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        console.log("Ответ на запрос меню футера из админки футера:");
        console.log(xhr.response);
        this.footerMenu = xhr.response;
      };
      xhr.send();
    },
    addFooterMenuItem() {
      const xhr = new XMLHttpRequest();
      const url =
        "http://192.168.18.171:8080/open-core/api/site-data/set-footer";
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.getFooterMenu();
        }
      };
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(this.footerMenuNewItem));
      /*fetch('http://192.168.18.171:8080/open-core/api/site-data/set-footer', {
                    method: "POST",
                    body: JSON.stringify(this.footerMenuNewItem),
                    headers: {
                        "Content-type": "application/json"
                    },
                }
                ).then(response => {
                    console.log(response)
                })*/
    },
    addToChangeList(changedItem) {
      if (!this.changedFooterMenuItemsId.includes(changedItem.id)) {
        this.changedFooterMenuItemsId.push(changedItem.id);
      }
      this.footerMenu.forEach((item) => {
        if (item.id === changedItem.id) {
          item.changed = true;
          item.title[0].text = changedItem.newValue;
        }
      });
    },
    removeFromChangeList(changedItem) {
      this.changedFooterMenuItemsId = this.changedFooterMenuItemsId.filter(
        (value) => value !== changedItem.id
      );
      this.footerMenu.forEach((item) => {
        if (item.id === changedItem.id) {
          delete item.changed;
          item.title[0].text = changedItem.oldValue;
        }
      });
      console.log(
        "удаление из массива иземенений: " + this.changedFooterMenuItemsId
      );
    },
    resetChanges() {
      if (this.changedFooterMenuItemsId.length > 0) {
        this.footerMenu.forEach((item) => {
          item.changed = false;
        });
        console.log("Не пуст");
      } else {
        console.log("Изменений нет");
      }
    },
    applyChangesFooterMenu() {
      const qwer = this.changedFooterMenuItemsId;
      console.log("При применении изменений");
      console.log(this.footerMenu);
      console.log(qwer);
      let changedItems = this.footerMenu.filter((item) =>
        qwer.includes(item.id)
      );
      changedItems.forEach((item) => {
        delete item.changed;
        item.childs = [];
      });
      console.log("Изменяемый пункт");
      console.log(changedItems[0]);
      const xhr = new XMLHttpRequest();
      const url =
        "http://192.168.18.171:8080/open-core/api/site-data/set-footer";
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.getFooterMenu();
        }
      };
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      console.log(JSON.stringify(changedItems));
      xhr.send(JSON.stringify(changedItems[0]));
    },

    deleteFooterMenuItem(itemId) {
      const xhr = new XMLHttpRequest();
      const url =
        "http://192.168.18.171:8080/open-core/api/site-data/delete-item?id=" +
        itemId;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this.getFooterMenu();
        }
      };
      xhr.open("DELETE", url, true);
      xhr.send();
    },
  },
  mounted: function () {
    this.getFooterMenu();
  },
};
</script>

<style scoped></style>
