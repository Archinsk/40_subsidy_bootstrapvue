<template>
  <div class="container">
    <template v-if="isResponse">
      <div class="row pt-2">
        <div class="col-12">
          <h4 class="text-center py-2">
            {{ measure.name + ": " + appForm.form.name }}
          </h4>
        </div>
        <div class="col-10">
          <Form
            :form="appForm.form.scheme"
            :submission="appForm"
            language="ru"
            :options="{
              readOnly: !appForm.active,
              i18n: formOptions.i18n,
            }"
            ref="vueForm"
          />
        </div>
        <div
          v-if="appForm.form.actions && appForm.form.actions.length > 0"
          class="col-2"
        >
          <template v-for="action of appForm.form.actions">
            <template v-if="appForm.active || action.alwaysActive">
              <button
                v-if="action.backAction"
                :key="action.id"
                type="button"
                class="btn btn-block btn-primary"
                @click="invokeAction(action, true)"
              >
                {{ action.name }}
              </button>
              <button
                v-else
                :key="action.id"
                type="button"
                class="btn btn-block btn-primary"
                @click="invokeAction(action)"
              >
                {{ action.name }}
              </button>
            </template>
          </template>
        </div>
      </div>
    </template>

    <template v-else-if="isLoading">
      <div class="card pt-2">
        <div class="card-body text-center">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div>{{ loadingComment }}</div>
        </div>
      </div>
    </template>

    <b-modal
      id="signature"
      ref="modal-signature"
      title="Подпись файла"
      size="xl"
      cancel-title="Отмена"
      ok-title="Подписать"
      @ok="signAction"
    >
      <label for="CertListBox">Выберите сертификат</label>
      <select name="CertListBox" id="CertListBox" class="form-control">
        <!--        <option disabled value="" selected>Выбор сертификата</option>-->
      </select>
      <div class="row">
        <div class="col-6" id="cryptoProStatusDiv" style="margin-top: 1rem">
          <h2>Информация о программном обеспечении</h2>
          <div id="info_msg">
            <span id="ExtensionEnabledTxt">Расширение не загружено</span>
            <img
              src="Img/red_dot.png"
              width="10"
              height="10"
              alt="Расширение не загружено"
              id="ExtensionEnabledImg"
            />
            <br />
            <span id="PlugInEnabledTxt"
              >Плагин: ожидание загрузки расширения</span
            >
            <img
              src="Img/grey_dot.png"
              width="10"
              height="10"
              alt="Плагин не загружен"
              id="PluginEnabledImg"
            />
            <br />
            <span id="CspEnabledTxt"
              >Криптопровайдер: ожидание загрузки плагина</span
            >
            <img
              src="Img/grey_dot.png"
              width="10"
              height="10"
              alt="КриптоПро CSP не загружен"
              id="CspEnabledImg"
            />
            <br />
            <span id="PlugInVersionTxt" lang="ru"></span>
            <span id="CSPVersionTxt" lang="ru"></span>
            <br />
            <span id="CSPNameTxt" lang="ru"></span>
          </div>

          <div id="boxdiv" style="display: none">
            <span id="errorarea">
              У вас отсутствуют личные сертификаты. Вы можете
              <a
                href="#"
                onClick="Common_RetrieveCertificate();"
                style="color: #0837ff"
              >
                получить</a
              >
              сертификат от тестового УЦ, предварительно установив
              <a
                href="https://testca.cryptopro.ru/certsrv/certnew.cer?ReqID=CACert&Renewal=1&Enc=bin"
                style="color: #0837ff"
                >корневой сертификат тестового УЦ</a
              >
              в доверенные.
            </span>
          </div>
        </div>
        <div class="col-6" id="cert_info" name="CertInfo" style="display: none">
          <h2>Информация о сертификате</h2>
          <p class="info_field" id="subject"></p>
          <p class="info_field" id="issuer"></p>
          <p class="info_field" id="from"></p>
          <p class="info_field" id="till"></p>
          <p class="info_field" id="provname"></p>
          <p class="info_field" id="privateKeyLink"></p>
          <p class="info_field" id="algorithm"></p>
          <p class="info_field" id="status"></p>
          <p class="info_field" id="location"></p>
        </div>
      </div>

      <template #modal-footer="">
        <b-button size="sm" variant="outline-secondary" @click="signAction">
          Подписать
        </b-button>
        <b-button
          size="sm"
          variant="outline-secondary"
          @click="requestSignAction"
        >
          Отправить
        </b-button>
      </template>
    </b-modal>

    <div style="display: none">
      <p>Подписанные данные:</p>
      <textarea
        id="SignatureTxtBox"
        readonly
        style="
          font-size: 9pt;
          height: 100px;
          width: 100%;
          resize: none;
          border: 0;
        "
      ></textarea>
    </div>
  </div>
</template>

<script>
import { Form } from "vue-formio";
import axios from "axios";

export default {
  name: "ApplicationCompletedView",

  components: {
    Form,
  },

  props: ["url", "theme"],

  data() {
    return {
      measure: {},
      isResponse: false,
      isLoading: false,
      isFirstLoad: true,
      loadingComment: "Загрузка заявления",
      successComment: "Заявление успешно загружено!",
      isAlertVisible: false,
      appForm: {
        active: false,
        data: {},
        form: {
          actions: [],
          id: 0,
          modelId: 0,
          scheme: {},
        },
        id: 0,
        orderId: "",
        status: "",
      },
      formOptions: {
        i18n: {
          ru: {
            Name: "Имя",
            "Last name": "Фамилия",
            dict: "Тип заявителя",
            "Type to search": "Поиск...",
            "Last name is required": "Фамилия - это обязательное поле",
            "No results found": "Поиск не дал результатов",
            "is required": "обязательное поле",
            Number: "Число",
            Submit: "Подтвердить",
            Layout: "Расположение",
            "Drag and Drop a form component": "Переместите компонент сюда",
            "No Matches Found": "Ничего не найдено",
            "Text Field": "Текстовое поле",
            Email: "Электронная почта",
            "Text Area": "Текстовая область",
            "Phone Number": "Номер телефона",
            Checkbox: "Флажок",
            Select: "Выпадающий список",
            Radio: "Радио кнопка",
            Url: "Ссылка",
            "Data Map": "Ключ - Значение",
            "Data Grid": "Динамический список",
            "Edit Grid": "Сетка данных",
            Table: "Таблица",
            "Date / Time": "Дата / Время",
            Day: "День",
            Time: "Время",
            File: "Файл",
            Signature: "Подпись",
            Content: "Контент",
            Columns: "Столбцы",
            "Field Set": "Набор полей",
            Panel: "Панель",
            Tabs: "Вкладки",
            Well: "Лист",
            Label: "Название",
            "Please fix the following errors before submitting":
              "Пожалуйста исправьте ошибки перед теп как продолжить",
            "Email: Email must be a valid email.": "Не правильный e-mail",
            Placeholder: "Заполнитель",
            Description: "Описание",
            Tooltip: "Подсказка",
            "To add a tooltip to this field,enter text here.":
              "Введите подсказку здесь",
            "Input Mask": "Маска ввода",
            Hidden: "Скрытый",
            "Hide Label": "Скрыть название",
            Save: "Сохранить",
            Cancel: "Отмена",
            Remove: "Удалить",
            Preview: "Предварительный просмотр",
            Disabled: "Отключен",
            Validation: "Проверка",
            Data: "Данные",
            "Property Name": "Имя переменной",
            Display: "Отображение",
            Widget: "Тип компонента",
            required: "обязательно для заполнения",
            pattern: "не соответствует маске!",
            error: "Пожалуйста исправьте ошибки прежде чем продолжить.",
            submitError:
              "Пожалуйста исправьте все ошибки прежде чем продолжить.",
            invalid_regex: "не соответствует маске!",
            mask: "{{field}} не соответствует маске.",
            valueIsNotAvailable: "неправильное значение.",
            Edit: "Редактировать",
            "Label Position": "Расположение",
            "Label Width": "Ширина",
            "Label Margin": "Отступ",
            Prefix: "Прификс",
            Suffix: "Суффикс",
            "Custom CSS Class": "CSS класс",
            "Show Word Counter": "Показать счетчик слов",
            "Show Character Counter": "Показать счетчик символов",
            "Hide Input": "Скрыть ввод",
            "Initial Focus": "Начальный фокус",
            "Allow Spellcheck": "Проверка орфографии",
            "Modal Edit": "Показать во всплывающем окне",
            "Tab Index": "Индекс вкладки",
            Autocomplete: "Автозавершение",
            month: "Месяц",
            day: "День",
            year: "Год",
            january: "Январь",
            february: "Февраль",
            march: "Март",
            april: "Апрель",
            may: "Май",
            june: "Июнь",
            july: "Июль",
            august: "Август",
            september: "Сентябрь",
            october: "Октябрь",
            november: "Ноябрь",
            december: "Декабрь",
            next: "Далее",
            previous: "Назад",
            cancel: "Отмена",
            submit: "Отправить",
            "File Name": "Имя файла",
            Size: "Размер",
            "Add Another": "Добавить",
          },
        },
      },
      isValidFormData: false,
      hashToSign: "",
      signedFileName: "",
    };
  },

  methods: {
    // Информация о мере поддержки
    getMeasure() {
      axios
        .get(this.url + "serv/get-model?id=" + this.$route.params.modelId)
        .then((response) => {
          console.log("getMeasure");
          console.log(response);
          this.measure = response.data;
        });
    },

    // Стартовая форма заявления
    getStartForm(id) {
      this.isResponse = false;
      this.isLoading = true;
      this.loadingComment = "Загрузка формы заявления";
      setTimeout(this.getForm, 1000, id);
    },
    getForm(id) {
      axios
        .get(this.url + "app/get-appData?id=" + id, {
          withCredentials: true,
        })
        .then((response) => {
          console.log("Стартовая форма");
          console.log(response);
          const newForm = response.data.applicationDTO;
          newForm.data = JSON.parse(newForm.data);
          newForm.form.scheme = JSON.parse(newForm.form.scheme);
          this.appForm = newForm;
        })
        .then(() => {
          this.isResponse = true;
          this.isLoading = false;
          this.isAlertVisible = true;
          setTimeout(this.hideAlert, 3000);
        });
    },

    hideAlert() {
      this.isAlertVisible = false;
    },

    validateForm() {
      return this.$refs.vueForm.formio.checkValidity(
        this.$refs.vueForm.formio.submission.data
      );
    },

    invokeAction(action, isBackAction = false) {
      console.log("Выполнение действия " + action.id);
      this.isFirstLoad = false;
      this.isValidFormData = this.validateForm();
      // Действие "Без проверки" или форма заполнена верно
      if (this.isValidFormData || action.notRequiredAction) {
        if (action.notRequiredAction) {
          console.log("Выполняется действие без проверки");
        } else {
          console.log("Форма валидна");
        }
        this.loadingComment = "Отправка данных заявления";
        this.isResponse = false;
        this.isLoading = true;
        setTimeout(this.invoke, 1000, action, isBackAction);
      } else {
        this.$refs.vueForm.formio.submit();
      }
    },
    invoke(action, isBackAction = false) {
      if (action.signAction) {
        this.openModalSignature();
        this.isResponse = true;
        this.isLoading = false;
        this.isAlertVisible = true;
        this.isFirstLoad = true;
        setTimeout(this.hideAlert, 3000);
        return;
      }
      const request = {
        actionId: action.id,
        userId: 0,
        roleId: 0,
        orgId: 0,
        appId: this.appForm.id,
        data: JSON.stringify(this.appForm.data),
      };
      console.log("Тело запроса Action-invoke");
      console.log(request);
      axios
        .post(this.url + "app/action-invoke", request, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          console.log("Ответ на экшн");
          console.log(response);
          if (response.data.responseObject) {
            let fileApp = JSON.parse(response.data.responseObject);
            console.log("Объект файла");
            console.log(fileApp);
            let link = document.createElement("a");
            link.setAttribute("download", fileApp.fileName);
            link.setAttribute(
              "href",
              "data:application/octet-stream;base64," + fileApp.fileData
            );
            link.click();
          } else {
            if (isBackAction) {
              this.$router.go(-1);
              // this.cleanAppForm();
            } else {
              this.getNextForm(response);
            }
          }
        })
        .then(() => {
          this.isResponse = true;
          this.isLoading = false;
          this.isAlertVisible = true;
          this.isFirstLoad = true;
          setTimeout(this.hideAlert, 3000);
        });
    },

    // Переход к следующей форме (стандартное дейтвие)
    getNextForm(response) {
      console.log("Следующая форма");
      console.log(response);
      let nextForm = response.data.applicationDTO;
      nextForm.data = JSON.parse(nextForm.data);
      nextForm.form.scheme = JSON.parse(nextForm.form.scheme);
      this.appForm = nextForm;
      this.successComment = "Заявление отправлено!";
    },

    cleanAppForm() {
      this.$bvModal.hide("edit-app");
      this.isLoading = false;
      this.loadingComment = "Загрузка формы заявления";
      this.successComment = "Форма заявления успешно загружена!";
      this.isResponse = true;
      this.isAlertVisible = true;
      this.isValidFormData = false;
      this.isFirstLoad = true;
    },

    openModalSignature() {
      console.log("---Точка 4");
      console.log("Открытие модального окна");
      this.$refs["modal-signature"].show();
      window.checkExtension(true);
    },

    // Загрузка скриптов КриптоПро
    loadCrypto() {
      var file1 = document.createElement("script");
      file1.setAttribute("type", "text/javascript");
      file1.setAttribute("src", "extensionLoading.js");
      document.getElementsByTagName("head")[0].appendChild(file1);
      var file2 = document.createElement("script");
      file2.setAttribute("type", "text/javascript");
      file2.setAttribute("src", "cadesplugin_api.js");
      document.getElementsByTagName("head")[0].appendChild(file2);
      var file3 = document.createElement("script");
      file3.setAttribute("type", "text/javascript");
      file3.setAttribute("src", "Code.js");
      document.getElementsByTagName("head")[0].appendChild(file3);
      var file4 = document.createElement("script");
      file4.setAttribute("type", "text/javascript");
      file4.setAttribute("src", "pluginLoading.js");
      document.getElementsByTagName("body")[0].appendChild(file4);
    },

    // Подпись файла
    signAction() {
      // window.Common_SignCadesBES('CertListBox');
      // alert("Привет от BV");
      const request = {
        certificate: {
          thumbprint: window.dataToSign.thumbprint,
          subject: window.dataToSign.subject,
          from: window.dataToSign.from,
          validDue: window.dataToSign.validDue,
        },
        actionPayloadDTO: {
          actionId: 54516,
          userId: 0,
          roleId: 0,
          orgId: 0,
          appId: this.appForm.id,
          data: JSON.stringify(this.appForm.data),
        },
      };
      console.log(request);
      axios
        .post(this.url + "app/action-pdfstamp", request, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          console.log("Ответ на экшн");
          console.log(response);
          console.log("Содержимое data.applicationDTO.data");
          console.log(JSON.parse(response.data.applicationDTO.data));
          console.log("Содержимое data.responseObject");
          console.log(JSON.parse(response.data.responseObject));
          console.log("Содержимое hashToSign");
          console.log(JSON.parse(response.data.responseObject).hashToSign);
          this.hashToSign = JSON.parse(response.data.responseObject).hashToSign;
          console.log(this.hashToSign);
          this.signedFileName = JSON.parse(
            response.data.responseObject
          ).fileName;
          console.log(this.signedFileName);
          window.Common_SignCadesBES("CertListBox");
          // let hashField = document.getElementById("DataToSignTxtBox");
          // console.log(hashField);
          // hashField.textContent = JSON.parse(response.data.responseObject).hashToSign
        });
    },

    requestSignAction() {
      console.log(window.dataToSign);
      const request = {
        applicationId: this.appForm.id,
        signature: window.dataToSign.signature,
        hashToSign: this.hashToSign,
        filename: this.signedFileName,
      };
      console.log("Данные отправляемые для подписанного файла");
      console.log(request);
      axios
        .post(this.url + "app/action-insert-signdata", request, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },

  mounted: function () {
    this.getMeasure();
    this.getStartForm(this.$route.params.subId);
    setTimeout(this.loadCrypto, 3000);
  },
};
</script>
