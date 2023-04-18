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
      <router-view
        :url="url"
        :user="user"
        :theme="theme"
        :config="config"
        @select-role="user.selectedRole = $event"
        @change-user-short-info="user.shortInfo = $event"
        @change-form-part1="
          changeFormWithValidate(
            config.adminSettings.notification.form,
            $event,
            'changeSettingsNotification'
          )
        "
        @change-form-part2="
          changeFormWithValidate(
            config.adminSettings.server.form,
            $event,
            'changeSettingsServer'
          )
        "
        @change-form-part3="changeForm(config.adminSettings.logo.form, $event)"
        @change-form-part4="
          changeFormWithValidate(
            config.adminSettings.footer.form,
            $event,
            'changeSettingsFooter'
          )
        "
      />
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
              validity: false,
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
                  visibility: true,
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
                  disabled: false,
                  visibility: false,
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
                  disabled: false,
                  visibility: false,
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
                  disabled: false,
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
                  disabled: false,
                  visibility: false,
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
                  disabled: false,
                  visibility: false,
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
                  disabled: false,
                  visibility: false,
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
                  disabled: false,
                  visibility: false,
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
              validity: false,
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
                  visibility: true,
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
                  disabled: false,
                  visibility: false,
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
              validity: false,
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
                  required: false,
                  visibility: true,
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
                  label: "Наименование организации",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: false,
                  visibility: true,
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
                  value: "Информационные системы и сервисы",
                },
              ],
            },
          },
          footer: {
            form: {
              title: "Настройки футера",
              validity: false,
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
                  visibility: true,
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
                  value: "8-383-354-1011",
                },
                {
                  id: "footer-email",
                  label: "Адрес электронной почты",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: false,
                  visibility: true,
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
                  value: "info@isands.ru",
                },
                {
                  id: "footer-link-01-name",
                  label: "Наименование ссылки №1",
                  type: "input",
                  subtype: "text",
                  width: 12,
                  responsive: "",
                  required: false,
                  visibility: true,
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
                  disabled: false,
                  visibility: false,
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
                  visibility: true,
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
                  disabled: false,
                  visibility: false,
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
                  visibility: true,
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
                  disabled: false,
                  visibility: false,
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
                  visibility: true,
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
                  visibility: true,
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

    // Изменения формы с валидацией и возможной кастомной обработкой
    changeFormWithValidate(formData, newFormData, customChangeFormMethodName) {
      console.groupCollapsed(
        `Изменение формы «${formData.title}» с валидацией`
      );
      console.groupCollapsed("Входные данные для изменения формы");
      console.log("Данные формы до внесения изменений");
      console.log(formData);
      console.log("Поле с обновленными значениями");
      console.log(newFormData);
      console.groupEnd();
      // Поиск редактируемого поля формы
      if (customChangeFormMethodName) {
        console.groupCollapsed(
          `Кастомная обработка изменения формы методом ${customChangeFormMethodName}`
        );
        this[customChangeFormMethodName](formData, newFormData);
        console.groupEnd();
      } else {
        this.changeForm(formData, newFormData);
      }
      let formField = this.findFieldInForm(formData, newFormData.id);
      if (formField.required) {
        this.validateForm(formData);
      }
      console.groupCollapsed("Форма после внесения изменений");
      console.log(formData);
      console.groupEnd();
      console.groupEnd();
    },
    // Изменения формы типовое
    changeForm(formData, newFormData) {
      console.log("Обработка изменения формы типовым методом changeForm");
      // Поиск редактируемого поля формы
      let formField = this.findFieldInForm(formData, newFormData.id);
      if (formField.type === "select") {
        formField.values = newFormData.values;
      } else if (formField.type === "range") {
        formField.itemsList[newFormData.index].value = newFormData.value;
      } else if (formField.type === "input" && formField.subtype === "file") {
        formField.file = newFormData.value;
      } else {
        formField.value = newFormData.value;
      }
    },
    // Проверка формы на заполненность обязательных видимых полей
    validateForm(formData, logFormValidity = true) {
      console.groupCollapsed(
        "Проверка формы на заполненность обязательных видимых полей"
      );
      let requiredFields = [];
      formData.fields.forEach((field) => {
        if (field.type === "select") {
          if (field.values.length === 0 && field.required && field.visibility) {
            requiredFields.push({ id: field.id, validity: false });
          } else {
            requiredFields.push({ id: field.id, validity: true });
          }
        } else if (
          field.type === "input" &&
          field.subtype === "file" &&
          field.visibility
        ) {
          if (!field.file.base64 && field.required) {
            requiredFields.push({ id: field.id, validity: false });
          } else {
            requiredFields.push({ id: field.id, validity: true });
          }
        } else {
          if (!field.value && field.required && field.visibility) {
            requiredFields.push({ id: field.id, validity: false });
          } else {
            requiredFields.push({ id: field.id, validity: true });
          }
        }
      });
      let invalidField = requiredFields.find(
        (fieldShortData) => !fieldShortData.validity
      );
      if (logFormValidity) {
        if (invalidField) {
          console.log(
            `Форма «${formData.title}» не валидна, так как не валидно поле ${invalidField.id}`
          );
        } else {
          console.log(`Форма «${formData.title}» валидна`);
        }
      }
      console.groupEnd();
    },
    // Поиск поля в форме по его идентификатору
    findFieldInForm(formData, formFieldId) {
      return formData.fields.find((formField) => formField.id === formFieldId);
    },
    // Установка полям формы видимости по идентификатору поля и значению видимости
    changeFieldsVisibility(formData, changedFieldsArray) {
      console.groupCollapsed("Поля с измененной видимостью");
      changedFieldsArray.forEach((fieldShortData) => {
        let changedField = this.findFieldInForm(formData, fieldShortData.id);
        changedField.visibility = fieldShortData.visibility;
        if (changedField.visibility) {
          console.log(`Показано поле ${changedField.id}`);
        } else {
          console.log(`Скрыто поле ${changedField.id}`);
        }
      });
      console.groupEnd();
    },

    // Нестандартная обработка форм
    changeSettingsNotification(formData, newFormData) {
      // Поиск редактируемого поля формы
      let formField = this.findFieldInForm(formData, newFormData.id);
      if (formField.id === "notification-need") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "notification-start-immediately", visibility: true },
            { id: "notification-finish-manual", visibility: true },
            { id: "notification-text", visibility: true },
            { id: "notification-font-size", visibility: true },
            { id: "notification-color", visibility: true },
          ]);
        } else {
          this.changeFieldsVisibility(formData, [
            { id: "notification-start-immediately", visibility: false },
            { id: "notification-start-date", visibility: false },
            { id: "notification-finish-manual", visibility: false },
            { id: "notification-finish-date", visibility: false },
            { id: "notification-text", visibility: false },
            { id: "notification-font-size", visibility: false },
            { id: "notification-color", visibility: false },
          ]);
        }
      } else if (formField.id === "notification-start-immediately") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "notification-start-date", visibility: false },
          ]);
        } else {
          this.changeFieldsVisibility(formData, [
            { id: "notification-start-date", visibility: true },
          ]);
        }
      } else if (formField.id === "notification-finish-manual") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "notification-finish-date", visibility: false },
          ]);
        } else {
          this.changeFieldsVisibility(formData, [
            { id: "notification-finish-date", visibility: true },
          ]);
        }
      } else {
        this.changeForm(formData, newFormData);
      }
    },
    changeSettingsServer(formData, newFormData) {
      // Поиск редактируемого поля формы
      let formField = this.findFieldInForm(formData, newFormData.id);
      if (formField.id === "server-internal") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "server-external-address", visibility: false },
          ]);
        } else {
          this.changeFieldsVisibility(formData, [
            { id: "server-external-address", visibility: true },
          ]);
        }
      } else {
        this.changeForm(formData, newFormData);
      }
    },
    changeSettingsFooter(formData, newFormData) {
      // Поиск редактируемого поля формы
      let formField = this.findFieldInForm(formData, newFormData.id);
      if (formField.id === "footer-link-01-name") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "footer-link-01-url", visibility: true },
          ]);
        } else {
          this.changeFieldsVisibility(formData, [
            { id: "footer-link-01-url", visibility: false },
          ]);
        }
      } else if (formField.id === "footer-link-02-name") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "footer-link-02-url", visibility: true },
          ]);
        } else {
          this.changeFieldsVisibility(formData, [
            { id: "footer-link-02-url", visibility: false },
          ]);
        }
      } else if (formField.id === "footer-link-03-name") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "footer-link-03-url", visibility: true },
          ]);
        } else {
          this.changeFieldsVisibility(formData, [
            { id: "footer-link-03-url", visibility: false },
          ]);
        }
      } else if (formField.id === "footer-copyright-need") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "footer-copyright-text", visibility: true },
          ]);
        } else {
          this.changeFieldsVisibility(formData, [
            { id: "footer-copyright-text", visibility: false },
          ]);
        }
      } else {
        this.changeForm(formData, newFormData);
      }
    },
  },
};
</script>
