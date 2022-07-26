<template>
  <div id="app">
    <component
      :is="layout"
      :url="url"
      :user="user"
      :unread-messages="unreadMessages"
      :theme="theme"
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
          v-for="message of messagesList"
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
          receiptDate:
            "Mon Jul 11 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 2,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 18 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: true,
          deleted: false,
        },
        {
          id: 3,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 04 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 4,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Sun Jul 10 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 5,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Sun Jul 17 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: true,
          deleted: false,
        },
        {
          id: 6,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Sun Jul 03 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 7,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Sat Jul 09 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 8,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Sat Jul 02 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 9,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Sat Jul 16 2022 10:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 10,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 19:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 11,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 18:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 12,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 13:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 13,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 15:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 14,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 14:31:33 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 15,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 21:00:25 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 16,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 21:45:45 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 17,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 22:05:15 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: false,
          deleted: false,
        },
        {
          id: 18,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 07:35:25 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: true,
          deleted: false,
        },
        {
          id: 19,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 20:05:50 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: true,
          deleted: false,
        },
        {
          id: 20,
          messageTitle: "Заголовок уведомления #",
          messageText:
            "Статус заявления обновлен. Подробная информация направлена на вашу электронную почту.",
          receiptDate:
            "Mon Jul 11 2022 14:33:55 GMT+0700 (Новосибирск, стандартное время)",
          wasRead: true,
          deleted: false,
        },
      ],
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
