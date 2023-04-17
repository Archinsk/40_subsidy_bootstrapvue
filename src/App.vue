<template>
  <div id="app">
    <component
      :is="layout"
      :url="url"
      :user="user"
      :unread-messages="unreadMessages"
      :theme="theme"
      :config="config"
      @assign-user="assignUser($event)"
      @select-role="user.selectedRole = $event"
      @change-user-short-info="user.shortInfo = $event"
    >
      <router-view />
    </component>
    <b-modal
      scrollable
      id="messages"
      ref="modal-messages"
      title="Уведомления"
      hide-footer
      no-stacking
    >
      <transition-group
        name="fade-out-group"
        tag="div"
        class="accordion"
        id="accordionMessages"
      >
        <MessagesAccordionItem
          v-for="message of sortedMessagesList"
          :key="message.id"
          :message="message"
          @read-message="readMessage(message.id)"
          @delete-message="deleteMessage(message.id)"
        />
      </transition-group>
      <div
        v-if="messagesList.length === 0"
        class="alert alert-secondary"
        role="alert"
      >
        У вас отсутствуют уведомления!
      </div>
    </b-modal>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";
import MessagesAccordionItem from "@/components/MessagesAccordionItem";

export default {
  name: "App",
  data() {
    return {
      url: "https://open-newtemplate.isands.ru/api/",
      // url: "https://open-demo.isands.ru/api/",
      user: {
        shortInfo: {
          userId: null,
          userName: "",
          typeAuth: "",
        },
        fullInfo: {
          roles: [],
        },
        selectedRole: {
          id: null,
          key: "",
          label: "",
        },
      },
      theme: "primary",
      messagesList: [
        {
          id: 1,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T10:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 2,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-18T10:31:33.750+00:00",
          wasRead: true,
          deleted: false,
        },
        {
          id: 3,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-04T10:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 4,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-10T10:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 5,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-17T10:31:33.750+00:00",
          wasRead: true,
          deleted: false,
        },
        {
          id: 6,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-03T10:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 7,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-09T10:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 8,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-12T10:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 9,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-16T10:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 10,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T19:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 11,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T18:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 12,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T13:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 13,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T15:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 14,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T14:31:33.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 15,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T21:00:25.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 16,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T21:45:45.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 17,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T22:05:15.750+00:00",
          wasRead: false,
          deleted: false,
        },
        {
          id: 18,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T07:35:25.750+00:00",
          wasRead: true,
          deleted: false,
        },
        {
          id: 19,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T20:05:50.750+00:00",
          wasRead: true,
          deleted: false,
        },
        {
          id: 20,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate: "2022-07-11T14:33:55.750+00:00",
          wasRead: true,
          deleted: false,
        },
      ],
      config: {
        adminSettings: {
          notification: {
            form: {
              title: "Настройки уведомления",
              horizontal: true,
              horizontalWidth: {
                label: {
                  width: 4,
                  responsive: "col-sm-5",
                },
                field: {
                  width: 8,
                  responsive: "col-sm-7",
                },
              },
              fields: [
                {
                  id: "notification-need",
                  label: "Разместить уведомление",
                  type: "checkbox",
                  width: 12,
                  responsive: "",
                  required: false,
                  defaultValueLabel: "Выберите",
                  horizontal: false,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: false,
                },
                {
                  id: "notification-start-immediately",
                  label: "Начало публикации сразу после сохранения",
                  type: "checkbox",
                  width: 12,
                  responsive: "",
                  required: false,
                  disabled: true,
                  defaultValueLabel: "Выберите",
                  horizontal: false,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: true,
                },
                {
                  id: "notification-start-date",
                  label: "Дата публикации уведомления",
                  type: "input",
                  subtype: "datetime-local",
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "notification-finish-manual",
                  label: "Снятие с публикации вручную",
                  type: "checkbox",
                  width: 12,
                  responsive: "",
                  required: false,
                  disabled: true,
                  defaultValueLabel: "Выберите",
                  horizontal: false,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: true,
                },
                {
                  id: "notification-finish-date",
                  label: "Дата снятия уведомления с публикации",
                  type: "input",
                  subtype: "datetime-local",
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "notification-text",
                  label: "Текст уведомления",
                  type: "textarea",
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: "",
                },
                {
                  id: "notification-font-size",
                  label: "Размер",
                  type: "select",
                  itemsList: [
                    { id: 1, value: 1, label: "Нормальный" },
                    { id: 2, value: 2, label: "Укрупненный" },
                    { id: 3, value: 3, label: "Огромный" },
                  ],
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  defaultValueLabel: "Выберите размер",
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  values: [1],
                },
                {
                  id: "notification-color",
                  label: "Цвет уведомления",
                  type: "select",
                  itemsList: [
                    { id: 1, value: 1, label: "Синий" },
                    { id: 2, value: 2, label: "Серый" },
                    { id: 3, value: 3, label: "Зелёный" },
                    { id: 4, value: 4, label: "Красный" },
                    { id: 5, value: 5, label: "Жёлтый" },
                    { id: 6, value: 6, label: "Голубой" },
                    { id: 7, value: 7, label: "Светлый" },
                    { id: 8, value: 8, label: "Тёмный" },
                  ],
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  defaultValueLabel: "Выберите цвет",
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  values: [4],
                },
              ],
            },
          },
          server: {
            form: {
              title: "Настройки уведомления",
              horizontal: true,
              horizontalWidth: {
                label: {
                  width: 4,
                  responsive: "col-sm-5",
                },
                field: {
                  width: 8,
                  responsive: "col-sm-7",
                },
              },
              fields: [
                {
                  id: "server-internal",
                  label:
                    "Интерфейс и серверная часть находятся на одном домене",
                  type: "checkbox",
                  width: 12,
                  responsive: "",
                  required: false,
                  defaultValueLabel: "Выберите",
                  horizontal: false,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: true,
                },
                {
                  id: "server-external-address",
                  label: "Адрес сервера открытого контура",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
              ],
            },
          },
          logo: {
            form: {
              title: "Настройки уведомления",
              horizontal: true,
              horizontalWidth: {
                label: {
                  width: 4,
                  responsive: "col-sm-5",
                },
                field: {
                  width: 8,
                  responsive: "col-sm-7",
                },
              },
              fields: [
                {
                  id: "logo-image-file",
                  label: "Прикрепленные документы",
                  type: "input",
                  subtype: "file",
                  comment:
                    "Вы можете прикрепить скан-копию документа (но это не обязательно)",
                  button: {
                    text: "Добавить документ",
                    icon: {
                      url: "/icons/paperclip.svg",
                    },
                  },
                  file: {
                    name: "",
                    type: "",
                    base64: "",
                  },
                  width: 12,
                  responsive: "",
                  required: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: "",
                },
                {
                  id: "logo-brand",
                  label: "Наименование структуры/организации",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: false,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
              ],
            },
          },
          footer: {
            form: {
              title: "Настройки футера",
              horizontal: true,
              horizontalWidth: {
                label: {
                  width: 4,
                  responsive: "col-sm-5",
                },
                field: {
                  width: 8,
                  responsive: "col-sm-7",
                },
              },
              fields: [
                {
                  id: "footer-phone",
                  label: "Номер телефона",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: false,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "footer-email",
                  label: "Адрес электронной почты",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "footer-link-01-name",
                  label: "Наименование ссылки №1",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: false,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "footer-link-01-url",
                  label: "Адрес ссылки №1",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "footer-link-02-name",
                  label: "Наименование ссылки №2",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: false,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "footer-link-02-url",
                  label: "Наименование структуры/организации",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "footer-link-03-name",
                  label: "Наименование ссылки №3",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: false,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "footer-link-03-url",
                  label: "Адрес ссылки №3",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: true,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: null,
                },
                {
                  id: "footer-copyright-need",
                  label: "Отображать копирайт",
                  type: "checkbox",
                  width: 12,
                  responsive: "",
                  required: false,
                  defaultValueLabel: "Выберите",
                  horizontal: false,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: true,
                },
                {
                  id: "footer-copyright-text",
                  label: "Текст копирайта",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: true,
                  disabled: false,
                  horizontal: true,
                  horizontalWidth: {
                    label: {
                      width: 4,
                      responsive: "col-sm-5",
                    },
                    field: {
                      width: 8,
                      responsive: "col-sm-7",
                    },
                  },
                  value: "© Информационные системы и сервисы, 2022",
                },
              ],
            },
          },
        },
      },
    };
  },
  components: {
    MainLayout,
    EmptyLayout,
    MessagesAccordionItem,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },

    unreadMessages: function () {
      return this.messagesList.filter((item) => !item.wasRead).length;
    },

    sortedMessagesList: function () {
      let sortedMessages = [];
      this.messagesList.forEach(function (item) {
        sortedMessages.push(item);
      });
      sortedMessages.sort(function (a, b) {
        if (a.receiptDate > b.receiptDate) return 1; // если первое значение больше второго
        if (a.receiptDate == b.receiptDate) return 0; // если равны
        if (a.receiptDate < b.receiptDate) return -1; // если первое значение меньше второго
      });
      return sortedMessages.reverse();
    },
  },

  methods: {
    assignUser(user) {
      this.user = user;
    },

    readMessage(messageId) {
      console.log(messageId);
      let message = this.messagesList.find((item) => item.id === messageId);
      if (!message.wasRead) {
        message.wasRead = true;
      }
      message.wasRead = true;
    },

    deleteMessage(messageId) {
      console.log(messageId);
      let messageIndex = this.messagesList.findIndex(
        (item) => item.id === messageId
      );
      this.messagesList.splice(messageIndex, 1);
    },

    deleteMessage2(messageId) {
      console.log(messageId);
      let messageIndex = this.messagesList.findIndex(
        (item) => item.id === messageId
      );
      this.messagesList.splice(messageIndex, 1);
    },
  },
};
</script>
