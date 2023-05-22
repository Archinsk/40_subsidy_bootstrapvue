<template>
  <div id="app">
    <component
      :is="layout"
      :url="dynamicUrl"
      :dynamic-url="dynamicUrl"
      :user="user"
      :unread-messages="unreadMessages"
      :theme="theme"
      :config="config"
      @assign-user="assignUser($event)"
      @select-role="user.selectedRole = $event"
      @change-user-short-info="user.shortInfo = $event"
      @sign-in-esia="signInEsia"
      @sign-in-local="signInLocal"
      @sign-out="signOut"
    >
      <router-view
        :url="dynamicUrl"
        :dynamic-url="dynamicUrl"
        :user="user"
        :theme="theme"
        :config="config"
        :settings-form="settingsForm"
        @select-role="user.selectedRole = $event"
        @change-user-short-info="user.shortInfo = $event"
        @change-settings-form-part1="
          changeFormWithValidate(
            settingsForm.notification.form,
            $event,
            'changeSettingsNotification'
          )
        "
        @change-settings-form-part2="
          changeFormWithValidate(
            settingsForm.server.form,
            $event,
            'changeSettingsServer'
          )
        "
        @change-settings-form-part3="changeForm(settingsForm.logo.form, $event)"
        @change-settings-form-part4="
          changeFormWithValidate(
            settingsForm.footer.form,
            $event,
            'changeSettingsFooter'
          )
        "
        @set-config="setConfig"
        @sign-out="signOut"
        @change-user-current-profile="
          changeUserCurrentProfile($event.orgSelector, $event.roleId)
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

    <b-modal
      id="auth"
      ref="modal-auth"
      :title="user.auth ? 'Выбор роли' : 'Авторизация'"
      size="sm"
      hide-footer
      no-stacking
      :hide-header-close="user.auth"
      :no-close-on-backdrop="user.auth"
      :no-close-on-esc="user.auth"
    >
      <template v-if="!user.auth">
        <form @submit.prevent>
          <div id="logAuth" class="form-label-group mb-0">
            <input
              autocomplete="on"
              v-model.trim="authForm.login"
              type="text"
              id="inputLogin"
              class="form-control"
              placeholder="Login"
            />
            <label for="inputLogin" id="inputLoginLabel">Введите логин</label>
          </div>
          <small
            v-if="authForm.authError.type === 'login'"
            class="form-text text-danger"
            >{{ authForm.authError.text }}</small
          >
          <div
            class="form-label-group mt-3 mb-0 position-relative"
            id="pasAuth"
          >
            <input
              autocomplete="off"
              v-model.trim="authForm.password"
              :type="authForm.passwordVisibility ? 'text' : 'password'"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
            />
            <label for="inputPassword" id="inputPasswordLabel">Пароль</label>
            <button
              type="button"
              class="btn position-absolute"
              style="
                top: 0.375rem;
                right: 0.375rem;
                padding-left: 0.375rem;
                padding-right: 0.375rem;
              "
              @click="
                authForm.passwordVisibility = !authForm.passwordVisibility
              "
            >
              <span class="material-icons">
                {{
                  authForm.passwordVisibility ? "visibility_off" : "visibility"
                }}
              </span>
            </button>
          </div>
          <small
            v-if="authForm.authError.type === 'password'"
            class="form-text text-danger"
            >{{ authForm.authError.text }}</small
          >
          <a href="#" class="d-block mt-2 mb-3">Забыли пароль?</a>
          <div class="row">
            <div class="col">
              <button
                class="btn btn-primary btn-block"
                :disabled="!authForm.login || !authForm.password"
                @click="signInLocal"
              >
                Войти
              </button>
            </div>
            <div class="col">
              <button class="btn btn-outline-primary btn-block">Отмена</button>
            </div>
          </div>
          <hr />
          <p class="mb-3">Авторизоваться через портал государственных услуг</p>
          <button class="btn btn-primary btn-block" @click="signInEsia">
            <img
              src="assets/gu_icon.svg"
              style="height: 1.5rem; padding: 0.125rem"
              class="mr-2"
              alt=""
            />Войти с помощью ЕСИА
          </button>
        </form>
      </template>
      <template v-else-if="user.fullInfo.roles.length > 1">
        <button
          v-for="role in user.fullInfo.roles"
          :key="role.id"
          class="btn btn-outline-primary btn-block"
          @click="changeUserCurrentProfile(role, true)"
        >
          {{ role.label }}
        </button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";
import MessagesAccordionItem from "@/components/MessagesAccordionItem";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      url: "https://open-newtemplate.isands.ru/api/",
      // url: "https://open-demo.isands.ru/api/",
      staticUrl: "https://open-newtemplate.isands.ru/api/",
      esiaSignInUrl: "",
      user: {
        auth: false,
        shortInfo: {
          userId: null,
          orgId: null,
          roleId: null,
          userName: "",
          typeAuth: "",
          redirectUrl: "",
        },
        fullInfo: {
          userId: null,
          shortUserName: "",
          roles: [],
          userOrganizations: [],
          userData: {},
          contacts: [],
          addresses: null,
          esiaDocuments: null,
          other: {},
        },
        selectedRole: {
          id: null,
          key: "",
          label: "",
        },
        selectedOrg: {
          id: null,
          key: "",
          label: "",
        },
        roleSelector: {
          id: "userRoleSelector",
          label: "",
          type: "select",
          itemsList: [],
          width: 4,
          responsive: "col-sm-3 col-md-2 mb-0 p-0",
          defaultValueLabel: "Выберите роль",
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
          values: [],
        },
        orgSelector: {
          id: "orgRoleSelector",
          label: "",
          type: "select",
          itemsList: [
            { id: 1, value: 1, label: "Свидетельство о браке" },
            { id: 2, value: 2, label: "Водительское удостоверение" },
          ],
          width: 12,
          responsive: "col-sm-9 col-md-6 mb-0 p-0",
          defaultValueLabel: "Выберите организацию",
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
          values: [],
        },
      },
      authForm: {
        login: "",
        password: "",
        passwordVisibility: false,
        authError: {
          type: "",
          text: "",
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
            publishNeed: false,
            publicationImmediately: true,
            publicationStartDate: "",
            publicationFinishManual: true,
            publicationFinishDate: "",
            notificationText: "",
            notificationFontSize: 1,
            notificationColor: 4,
          },
          server: {
            ownServer: true,
            externalServerUrl: "",
          },
          logo: {
            image: {
              file: "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",
              fileName: "iss_logo_white.png",
            },
            logoBrand: "Информационные системы и сервисы",
          },
          footer: {
            contacts: {
              phone: "8-383-354-1011",
              email: "info@isands.ru",
            },
            links: [
              {
                name: "Новости",
                url: "/news",
              },
              {
                name: "Поддержка юридических лиц",
                url: "/measures",
              },
              {
                name: "Поддержка физических лиц",
                url: "/measures",
              },
            ],
            copyright: {
              publication: true,
              text: "© Информационные системы и сервисы, 2022",
            },
          },
        },
      },
      configResponse: {
        notification: {
          publishNeed: true,
          publicationImmediately: false,
          publicationStartDate: "2023-05-20T15:00",
          publicationFinishManual: false,
          publicationFinishDate: "2023-05-20T18:00",
          notificationText:
            "Внимание. В системе будут проводится технические работы 20 мая с 15:00 до 18:00. Просьба не проводить работы в указанное время",
          notificationFontSize: 1,
          notificationColor: 4,
        },
        server: {
          ownServer: false,
          externalServerUri: "https://opensport.isands.ru/",
        },
        logo: {
          image: {
            file: "/9j/4QR...eFz/2Q==",
            fileName: "Line_Screen.jpg",
          },
          logoBrand: "Информационные системы и сервисы",
        },
        footer: {
          contacts: {
            phone: "8-383-354-1011",
            email: "info@isands.ru",
          },
          links: [
            {
              name: "Новости",
              url: "/news",
            },
            {
              name: "Поддержка юридических лиц",
              url: "/measures",
            },
            {
              name: "Поддержка физических лиц",
              url: "/measures",
            },
          ],
          copyright: {
            publication: true,
            text: "© Информационные системы и сервисы, 2022",
          },
        },
      },
      settingsForm: {
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
                value: false,
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
                value: "",
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
                value: false,
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
                value: "",
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
                values: [],
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
                values: [],
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
                label: "Интерфейс и серверная часть находятся на одном домене",
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
                value: "",
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
                comment: "Файл логотипа",
                button: {
                  text: "Добавить документ",
                  icon: {
                    url: "/icons/paperclip.svg",
                  },
                },
                file: {
                  name: "",
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
                value: "",
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
                value: "",
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
                value: "",
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
                value: "",
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
                value: "",
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
                value: "",
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
                value: "",
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
                value: "",
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
                value: "",
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
                value: false,
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
                value: "",
              },
            ],
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

    setConfigRequest: function () {
      let setConfigRequest = {
        notification: {
          publishNeed: false,
          publicationImmediately: true,
          publicationStartDate: "",
          publicationFinishManual: true,
          publicationFinishDate: "",
          notificationText: "",
          notificationFontSize: 1,
          notificationColor: 4,
        },
        server: {
          ownServer: true,
          externalServerUrl: "",
        },
        logo: {
          image: {
            file: "/9j/4QR...eFz/2Q==",
            type: "image/jpeg",
            fileName: "Line_Screen.jpg",
          },
          logoBrand: "Информационные системы и сервисы",
        },
        footer: {
          contacts: {
            phone: "8-383-354-1011",
            email: "info@isands.ru",
          },
          links: [
            {
              name: "Новости",
              url: "/news",
            },
            {
              name: "Поддержка юридических лиц",
              url: "/measures",
            },
            {
              name: "Поддержка физических лиц",
              url: "/measures",
            },
          ],
          copyright: {
            publication: true,
            text: "© Информационные системы и сервисы, 2022",
          },
        },
      };
      if (this.settingsForm.notification.form.fields[0].value) {
        setConfigRequest.notification.publishNeed = true;
        if (this.settingsForm.notification.form.fields[1].value) {
          // Заменить на получение текущей даты
          setConfigRequest.notification.publicationStartDate =
            this.convertDateToInputDateTime(new Date());
        } else {
          setConfigRequest.notification.publicationImmediately = false;
          setConfigRequest.notification.publicationStartDate =
            this.settingsForm.notification.form.fields[2].value;
        }
        if (!this.settingsForm.notification.form.fields[3].value) {
          setConfigRequest.notification.publicationFinishManual = false;
          setConfigRequest.notification.publicationFinishDate =
            this.settingsForm.notification.form.fields[4].value;
        }
        setConfigRequest.notification.notificationText =
          this.settingsForm.notification.form.fields[5].value;
        setConfigRequest.notification.notificationFontSize =
          this.settingsForm.notification.form.fields[6].values[0];
        setConfigRequest.notification.notificationColor =
          this.settingsForm.notification.form.fields[7].values[0];
      }

      setConfigRequest.server = {
        ownServer: this.settingsForm.server.form.fields[0].value,
        externalServerUrl: this.settingsForm.server.form.fields[1].value,
      };
      setConfigRequest.logo = {
        image: {
          file: this.settingsForm.logo.form.fields[0].file.base64,
          type: this.settingsForm.logo.form.fields[0].file.type,
          fileName: this.settingsForm.logo.form.fields[0].file.name,
        },
        logoBrand: this.settingsForm.logo.form.fields[1].value,
      };

      setConfigRequest.footer = {
        contacts: {
          phone: this.settingsForm.footer.form.fields[0].value,
          email: this.settingsForm.footer.form.fields[1].value,
        },
        links: [
          {
            name: this.settingsForm.footer.form.fields[2].value,
            url: this.settingsForm.footer.form.fields[3].value,
          },
          {
            name: this.settingsForm.footer.form.fields[4].value,
            url: this.settingsForm.footer.form.fields[5].value,
          },
          {
            name: this.settingsForm.footer.form.fields[6].value,
            url: this.settingsForm.footer.form.fields[7].value,
          },
        ],
        copyright: {
          publication: this.settingsForm.footer.form.fields[8].value,
          text: this.settingsForm.footer.form.fields[9].value,
        },
      };
      return setConfigRequest;
    },

    dynamicUrl: function () {
      let dynamicUrl;
      if (this.config.adminSettings.server.ownServer) {
        dynamicUrl = this.staticUrl;
      } else {
        dynamicUrl =
          this.config.adminSettings.server.externalServerUrl + "/api/";
      }
      return dynamicUrl;
    },
  },

  methods: {
    // Чтение админки
    async getAppConfig() {
      await axios.get(this.staticUrl + "config/").then((response) => {
        this.parseConfig(response.data);
        console.groupCollapsed("Конфигурация системы");
        console.log(response.data);
        console.groupEnd();
      });
    },
    parseConfig(configData) {
      // Уведомление
      const now = new Date();
      // const notificationStartDate = new Date(
      //   configData.notification.publicationStartDate
      // );
      let notificationFinishDate;
      if (configData.notification.publicationFinishDate) {
        notificationFinishDate = new Date(
          configData.notification.publicationFinishDate
        );
      }
      const validDate =
        notificationFinishDate > now ||
        (!configData.notification.publicationFinishDate &&
          configData.notification.publicationFinishManual);
      // const notificationActive =
      //   notificationStartDate < now && notificationFinishDate > now;
      const notificationPublishing =
        configData.notification.publishNeed && validDate;
      if (notificationPublishing) {
        this.config.adminSettings.notification.publishNeed = true;
        this.settingsForm.notification.form.fields[0].value = true;
        this.settingsForm.notification.form.fields[1].visibility = false;
        this.settingsForm.notification.form.fields[2].visibility = true;
        this.settingsForm.notification.form.fields[3].visibility = true;
        this.settingsForm.notification.form.fields[5].visibility = true;
        this.settingsForm.notification.form.fields[6].visibility = true;
        this.settingsForm.notification.form.fields[7].visibility = true;
      } else {
        this.config.adminSettings.notification.publishNeed = false;
        this.settingsForm.notification.form.fields[0].value = false;
        this.settingsForm.notification.form.fields[1].visibility = false;
        this.settingsForm.notification.form.fields[2].visibility = false;
        this.settingsForm.notification.form.fields[3].visibility = false;
        this.settingsForm.notification.form.fields[5].visibility = false;
        this.settingsForm.notification.form.fields[6].visibility = false;
        this.settingsForm.notification.form.fields[7].visibility = false;
      }
      this.config.adminSettings.notification.publicationImmediately =
        configData.notification.publicationImmediately;
      this.settingsForm.notification.form.fields[1].value =
        configData.notification.publicationImmediately;
      if (notificationPublishing) {
        this.config.adminSettings.notification.publicationStartDate =
          configData.notification.publicationStartDate;
        this.settingsForm.notification.form.fields[2].value =
          configData.notification.publicationStartDate;
      } else {
        this.config.adminSettings.notification.publicationStartDate = "";
        this.settingsForm.notification.form.fields[2].value = "";
      }
      this.config.adminSettings.notification.publicationFinishManual =
        configData.notification.publicationFinishManual;
      this.settingsForm.notification.form.fields[3].value =
        configData.notification.publicationFinishManual;
      if (
        notificationPublishing &&
        !configData.notification.publicationFinishManual
      ) {
        this.config.adminSettings.notification.publicationFinishDate =
          configData.notification.publicationFinishDate;
        this.settingsForm.notification.form.fields[4].value =
          configData.notification.publicationFinishDate;
        this.settingsForm.notification.form.fields[4].visibility = true;
      } else {
        this.config.adminSettings.notification.publicationFinishDate = "";
        this.settingsForm.notification.form.fields[4].value = "";
        this.settingsForm.notification.form.fields[4].visibility = false;
      }
      if (notificationPublishing) {
        this.config.adminSettings.notification.notificationText =
          configData.notification.notificationText;
        this.settingsForm.notification.form.fields[5].value =
          configData.notification.notificationText;
      } else {
        this.config.adminSettings.notification.notificationText = "";
        this.settingsForm.notification.form.fields[5].value = "";
      }
      this.config.adminSettings.notification.notificationFontSize =
        configData.notification.notificationFontSize;
      this.settingsForm.notification.form.fields[6].values[0] =
        configData.notification.notificationFontSize;
      this.config.adminSettings.notification.notificationColor =
        configData.notification.notificationColor;
      this.settingsForm.notification.form.fields[7].values[0] =
        configData.notification.notificationColor;
      this.validateForm(this.settingsForm.notification.form);

      // Сервер
      this.config.adminSettings.server.ownServer = configData.server.ownServer;
      this.settingsForm.server.form.fields[0].value =
        configData.server.ownServer;
      if (!configData.server.ownServer) {
        this.settingsForm.server.form.fields[1].visibility = true;
      } else {
        this.settingsForm.server.form.fields[1].visibility = false;
      }
      this.config.adminSettings.server.externalServerUrl =
        configData.server.externalServerUrl;
      this.settingsForm.server.form.fields[1].value =
        configData.server.externalServerUrl;
      this.validateForm(this.settingsForm.server.form);

      // Лого
      this.config.adminSettings.logo.image.file = configData.logo.image.file;
      this.settingsForm.logo.form.fields[0].file.base64 =
        configData.logo.image.file;
      this.config.adminSettings.logo.image.fileName =
        configData.logo.image.fileName;
      this.settingsForm.logo.form.fields[0].file.name =
        configData.logo.image.fileName;
      this.config.adminSettings.logo.logoBrand = configData.logo.logoBrand;
      this.settingsForm.logo.form.fields[1].value = configData.logo.logoBrand;
      this.validateForm(this.settingsForm.logo.form);

      // Футер
      this.config.adminSettings.footer.contacts.phone =
        configData.footer.contacts.phone;
      this.settingsForm.footer.form.fields[0].value =
        configData.footer.contacts.phone;
      this.config.adminSettings.footer.contacts.email =
        configData.footer.contacts.email;
      this.settingsForm.footer.form.fields[1].value =
        configData.footer.contacts.email;
      if (configData.footer.links.length > 0) {
        if (
          configData.footer.links[0] &&
          configData.footer.links[0].name &&
          configData.footer.links[0].url
        ) {
          this.config.adminSettings.footer.links[0].name =
            configData.footer.links[0].name;
          this.settingsForm.footer.form.fields[2].value =
            configData.footer.links[0].name;
          this.config.adminSettings.footer.links[0].url =
            configData.footer.links[0].url;
          this.settingsForm.footer.form.fields[3].value =
            configData.footer.links[0].url;
          this.settingsForm.footer.form.fields[3].visibility = true;
        } else {
          this.config.adminSettings.footer.links[0].name = "";
          this.settingsForm.footer.form.fields[2].value = "";
          this.config.adminSettings.footer.links[0].url = "";
          this.settingsForm.footer.form.fields[3].value = "";
          this.settingsForm.footer.form.fields[3].visibility = false;
        }
        if (
          configData.footer.links[1] &&
          configData.footer.links[1].name &&
          configData.footer.links[1].url
        ) {
          this.config.adminSettings.footer.links[1].name =
            configData.footer.links[1].name;
          this.settingsForm.footer.form.fields[4].value =
            configData.footer.links[1].name;
          this.config.adminSettings.footer.links[1].url =
            configData.footer.links[1].url;
          this.settingsForm.footer.form.fields[5].value =
            configData.footer.links[1].url;
          this.settingsForm.footer.form.fields[5].visibility = true;
        } else {
          this.config.adminSettings.footer.links[1].name = "";
          this.settingsForm.footer.form.fields[4].value = "";
          this.config.adminSettings.footer.links[1].url = "";
          this.settingsForm.footer.form.fields[5].value = "";
          this.settingsForm.footer.form.fields[5].visibility = false;
        }
        if (
          configData.footer.links[2] &&
          configData.footer.links[2].name &&
          configData.footer.links[2].url
        ) {
          this.config.adminSettings.footer.links[2].name =
            configData.footer.links[2].name;
          this.settingsForm.footer.form.fields[6].value =
            configData.footer.links[2].name;
          this.config.adminSettings.footer.links[2].url =
            configData.footer.links[2].url;
          this.settingsForm.footer.form.fields[7].value =
            configData.footer.links[2].url;
          this.settingsForm.footer.form.fields[7].visibility = true;
        } else {
          this.config.adminSettings.footer.links[2].name = "";
          this.settingsForm.footer.form.fields[6].value = "";
          this.config.adminSettings.footer.links[2].url = "";
          this.settingsForm.footer.form.fields[7].value = "";
          this.settingsForm.footer.form.fields[7].visibility = false;
        }
      }
      this.config.adminSettings.footer.copyright.publication =
        configData.footer.copyright.publication;
      this.settingsForm.footer.form.fields[8].value =
        configData.footer.copyright.publication;
      if (configData.footer.copyright.publication) {
        this.config.adminSettings.footer.copyright.text =
          configData.footer.copyright.text;
        this.settingsForm.footer.form.fields[9].value =
          configData.footer.copyright.text;
        this.settingsForm.footer.form.fields[9].visibility = true;
      } else {
        this.config.adminSettings.footer.copyright.text = "";
        this.settingsForm.footer.form.fields[9].value = "";
        this.settingsForm.footer.form.fields[9].visibility = false;
      }
      this.validateForm(this.settingsForm.footer.form);
    },

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
      console.log("Поле с новым значением");
      console.log(newFormData);
      console.groupEnd();
      // Редактирование поля формы кастомным или базовым методом
      if (customChangeFormMethodName) {
        console.groupCollapsed(
          `Кастомная обработка изменения формы методом ${customChangeFormMethodName}`
        );
        this[customChangeFormMethodName](formData, newFormData);
        console.groupEnd();
      } else {
        this.changeForm(formData, newFormData);
      }
      // Поиск редактируемого поля формы
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
    validateForm(formData) {
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
      if (invalidField) {
        console.log(
          `Форма «${formData.title}» не валидна, так как не валидно поле ${invalidField.id}`
        );
        formData.validity = false;
      } else {
        console.log(`Форма «${formData.title}» валидна`);
        formData.validity = true;
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
      // Дополнительные условия (переключение видимости/значений связанных полей)
      if (formField.id === "notification-need") {
        if (newFormData.value) {
          this.changeFieldsVisibility(formData, [
            { id: "notification-start-immediately", visibility: true },
            { id: "notification-finish-manual", visibility: true },
            { id: "notification-text", visibility: true },
            { id: "notification-font-size", visibility: true },
            { id: "notification-color", visibility: true },
          ]);
          this.settingsForm.notification.form.fields[1].value = true;
          this.settingsForm.notification.form.fields[3].value = true;
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
      }
      // Стандартное изменение значения поля
      this.changeForm(formData, newFormData);
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
      }
      this.changeForm(formData, newFormData);
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
      }
      this.changeForm(formData, newFormData);
    },

    // Запись конфигурации админки
    setConfig() {
      console.log("Запись конфигурации");
      console.log(this.setConfigRequest);
      axios
        .post(this.staticUrl + "config/", this.setConfigRequest, {
          withCredentials: true,
        })
        .then(() => {
          this.getAppConfig();
          console.log("Настройки системы изменены");
        });
    },

    // Преобразование даты к формату инпута datetime
    convertDateToInputDateTime(date) {
      console.log("convertDateToInputDateTime");
      console.log(date);
      // Thu Apr 27 2023 10:54:16 GMT+0700 (Новосибирск, стандартное время)
      // 2000-01-02T00:00
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const inputDateTime =
        year + "-" + month + "-" + day + "T" + hours + ":" + minutes;
      return inputDateTime;
    },

    //---Здесь-начинается-рефакторинг-методов-с-динамическим-эндпоинтом-----------

    // Базовые методы
    convertArrayToSelectOptions(sourceArray, targetSelect, valueProp = "key") {
      let itemsList = [];
      console.log("convertArrayToSelectOptions");
      console.log(sourceArray);
      console.log(targetSelect);
      sourceArray.forEach(function (arrayItem) {
        let item = {};
        item.id = arrayItem.id;
        item.value = arrayItem[valueProp];
        item.label = arrayItem.label;
        itemsList.push(item);
      });
      console.log(itemsList);
      targetSelect.itemsList = itemsList;
    },

    // Авторизация
    async checkUserAuth() {
      await axios(this.dynamicUrl + "auth/get-login", {
        withCredentials: true,
      })
        .then((response) => {
          console.groupCollapsed(
            "Пользователь не авторизован. Получена ссылка на авторизацию ЕСИА"
          );
          console.log(response.data);
          console.groupEnd();
          this.user.auth = false;
          this.config.esiaSignInUrl = response.data.url;
        })
        .catch((error) => {
          if (error.response && error.response.status === 406) {
            console.log("Пользователь уже авторизован");
            this.user.auth = true;
          } else {
            console.log("Непредвиденная ошибка при проверке авторизации");
            this.user.auth = false;
          }
        });
    },
    async getUserShortInfo() {
      await axios(this.dynamicUrl + "auth/get-user", {
        withCredentials: true,
      })
        .then((response) => {
          console.groupCollapsed("Сокращённые данные пользователя");
          console.log(response.data);
          console.groupEnd();
          this.user.shortInfo = response.data;
          if (response.data.roleId || response.data.orgId) {
            this.user.roleSelector.values = [response.data.roleId];
            this.user.orgSelector.values = [response.data.orgId];
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            console.log("Сокращенные данные пользователя не найдены");
          } else {
            console.log(
              "Непредвиденная ошибка при запросе сокращенных данных пользователя"
            );
          }
        });
    },
    async getUserFullInfo() {
      await axios(this.dynamicUrl + "core/get-user", {
        withCredentials: true,
      })
        .then((response) => {
          console.groupCollapsed("Полные данные пользователя");
          console.log(response.data);
          console.groupEnd();
          this.user.fullInfo = response.data;
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            console.log(
              "Ошибка при получении полных данных пользователя с закрытой части"
            );
          } else if (error.response && error.response.status === 401) {
            console.log(
              "Ошибка запроса полной данных пользователя неавторизованным пользователем"
            );
          } else {
            console.log(
              "Непредвиденная ошибка при запросе полных данных пользователя"
            );
          }
        });
    },

    async changeUserCurrentProfile(orgId = 0, roleId = 0) {
      axios
        .put(
          this.dynamicUrl +
            "core/put-metadata?orgId=" +
            orgId +
            "&roleId=" +
            roleId,
          "",
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          this.user.shortInfo = response.data;
          // this.user.selectedRole = role;
          // if (hideModal) {
          //   this.$refs["modal-auth"].hide();
          // }
          // this.cleanSignInForm();
          // console.log('Пользователь авторизован с ролью "' + role.label + '"');
          console.log("Пользователь авторизован с какой-то ролью");
        });
    },

    async signInLocal() {
      console.log("Локальный вход");
      const request = {
        login: this.authForm.login,
        password: this.authForm.password,
      };
      await axios
        .post(this.dynamicUrl + "auth/local-login", request, {
          withCredentials: true,
        })
        .then(() => {
          location.href = "/";
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.authForm.authError.type = "password";
            this.authForm.authError.text = "Неверно указан пароль!";
          }
          if (error.response.status === 404) {
            this.authForm.authError.type = "login";
            this.authForm.authError.text =
              "Пользователь с указанным логином не зарегистрирован!";
          }
        });
    },
    async signInEsia() {
      await this.checkUserAuth();
      if (this.config.esiaSignInUrl) {
        location.href = this.config.esiaSignInUrl;
      }
    },
    signOut() {
      console.log("Выхожу");
      if (this.user.shortInfo.typeAuth === "local") {
        console.log("Выхожу локально");
        this.signOutLocal();
      }
      if (this.user.shortInfo.typeAuth === "esia") {
        console.log("Выхожу через ЕСИА");
        this.signOutEsia();
      }
    },
    signOutLocal() {
      axios(this.dynamicUrl + "auth/local-logout", {
        withCredentials: true,
      })
        .then((response) => {
          if (response.status === 200) {
            console.log("Локальный выход пользователя из системы");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.log(
              "Ошибка запроса локального выхода при поиске авторизованного пользователя"
            );
          } else {
            console.log("Непредвиденная ошибка запроса локального выхода");
          }
        })
        .then(() => {
          location.href = "/";
        });
    },
    signOutEsia() {
      axios(this.dynamicUrl + "auth/get-logout", {
        withCredentials: true,
      })
        .then((response) => {
          console.groupCollapsed("Получена ссылка на выход ЕСИА");
          console.log(response.data);
          console.groupEnd();
          location.href = response.data.url;
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.log(
              "Ошибка запроса на получение ссылки выхода ЕСИА при поиске авторизованного пользователя"
            );
          } else if (error.response && error.response.status === 404) {
            console.log(
              "Ошибка запроса на получение ссылки выхода ЕСИА при составлении ссылки со стороны закрытой части"
            );
          } else if (error.response && error.response.status === 500) {
            console.log(
              "Ошибка запроса на получение ссылки выхода ЕСИА со стороны открытой части при отправке запроса на закрытую часть"
            );
          } else {
            console.log("Ошибка запроса на получение ссылки выхода ЕСИА");
          }
          location.href = this.config.url;
        });
    },
  },

  created() {
    console.log("Создан компонент App");
  },

  mounted: async function () {
    console.log("Смонтирован компонент App");
    await this.getAppConfig();
    await this.checkUserAuth();
    if (this.user.auth) {
      Promise.all([this.getUserShortInfo(), this.getUserFullInfo()]).then(
        () => {
          // Заполнение пунктов селектора организаций
          if (this.user.fullInfo.userOrganizations.length > 0) {
            this.convertArrayToSelectOptions(
              this.user.fullInfo.userOrganizations,
              this.user.orgSelector,
              "id"
            );
          }
          // Заполнение пунктов селектора ролей
          if (this.user.fullInfo.roles.length > 0) {
            this.convertArrayToSelectOptions(
              this.user.fullInfo.roles,
              this.user.roleSelector,
              "id"
            );
          }
        }
      );
    }
  },
};
</script>
