<template>
  <div class="page-wrapper">
    <section class="support">
      <div class="container">
        <div class="support-header">
          <h4 class="support-name text-center py-2">
            {{ measure.name }}
          </h4>
          <div class="support-details">
            <div class="support-date">
              <template v-if="measure.startDate && measure.endDate">
                Приём заявок<br />
                <b>{{ measurePeriod() }}</b>
              </template>
            </div>
            <b-button v-b-modal.how-to-send-app :variant="'outline-' + theme"
              >Как подать заявку?</b-button
            >
          </div>
        </div>
        <hr />
        <div class="support-card">
          <div class="support-card-header row">
            <div class="support-owner col-md-6 col-xl-4">
              <div class="support-owner-header">Инициатор</div>
              <div class="support-owner-logo">
                <img
                  class="support-owner-logo-image"
                  src="images/initiators_logo/mshlogo.png"
                  alt=""
                />
                <div class="support-owner-name">
                  Министерство сельского хозяйства
                </div>
              </div>
            </div>
            <div class="support-conditions col-12 col-md-6 col-xl-5">
              <div class="support-conditions-header">Размер поддержки</div>
              <div class="support-size">до 20 000 000 рублей</div>
              <div class="support-size-info"></div>
            </div>
            <div class="support-buttons col">
              <!--              <router-link-->
              <!--                v-if="-->
              <!--                  user.shortInfo.userId &&-->
              <!--                  measure.active &&-->
              <!--                  isValidPeriod() &&-->
              <!--                  availabilityByRole-->
              <!--                "-->
              <!--                :to="appLink"-->
              <!--                :class="'btn btn-' + theme"-->
              <!--                role="button"-->
              <!--                >Подать заявку</router-link-->
              <!--              >-->
              <router-link
                v-if="
                  user.shortInfo.userId &&
                  measure.available &&
                  availabilityByRole
                "
                :to="appLink"
                :class="'btn btn-' + theme"
                role="button"
                >Подать заявку</router-link
              >
              <div
                v-else-if="
                  user.shortInfo.userId && measure.active && isValidPeriod()
                "
              >
                Вы не подходите под категорию лиц, для которых доступна подача
                обращения
              </div>
              <!--              Кнопка открытия заявки в модальном окне-->
              <!--              <b-button-->
              <!--                v-if="user.shortInfo.userId && measure.active && isValidPeriod"-->
              <!--                v-b-modal.new-app-->
              <!--                :variant="theme"-->
              <!--                @click="getStartForm"-->
              <!--                >Подать заявку</b-button-->
              <!--              >-->
            </div>
          </div>
          <hr />
          <b-card no-body>
            <b-tabs pills card vertical nav-wrapper-class="col-12 col-md-4">
              <b-tab title="Описание" active>
                <b-card-text>
                  <h3>Описание</h3>
                  <p>{{ measure.description }}</p>
                  <hr />
                  <p>
                    Субсидии в сельском хозяйстве на возмещение части затрат
                    предоставляются министерством сельского хозяйства, до
                    которого в соответствии с бюджетным законодательством
                    Российской Федерации как до получателя бюджетных средств
                    доведены в установленном порядке лимиты бюджетных
                    обязательств на предоставление субсидий на соответствующий
                    финансовый год и плановый период на компенсацию части
                    затрат, понесенных в текущем финансовом году (возмещение
                    части затрат на закупку сельскохозяйственной продукции, с
                    целью развития на сельских территориях региона сельского
                    хозяйства.
                  </p>
                  <p>Субсидия предоставляется при соблюдении условий:</p>
                  <ul>
                    <li>
                      получатели субсидий - юридические лица не находится в
                      процессе реорганизации, ликвидации, в отношении него не
                      введена процедура банкротства, деятельность получателя не
                      приостановлена;
                    </li>
                    <li>
                      получатели субсидий – индивидуальные предприниматели не
                      прекратили деятельность в качестве индивидуального
                      предпринимателя, а также в отношении их не введена
                      процедура банкротства;
                    </li>
                    <li>
                      государственной регистрации или постановки на учет в
                      налоговом органе получателей субсидий;
                    </li>
                    <li>
                      отсутствии у получателей субсидий неисполненной
                      обязанности по уплате налогов, сборов, страховых взносов,
                      пеней, штрафов, процентов, подлежащих уплате в
                      соответствии с законодательством Российской Федерации о
                      налогах и сборах;
                    </li>
                    <li>
                      отсутствия просроченной задолженности по возврату в
                      областной бюджет субсидий, бюджетных инвестиций и иной
                      просроченной (неурегулированной) задолженности по денежным
                      обязательствам;
                    </li>
                    <li>
                      получатели субсидий не являются иностранными юридическими
                      лицами, а также российскими юридическими лицами, в
                      уставном (складочном) капитале которых доля участия
                      иностранных юридических лиц, местом регистрации которых
                      является государство или территория, включенные в
                      утверждаемый Министерством финансов Российской Федерации
                      перечень государств и территорий, предоставляющих льготный
                      налоговый режим налогообложения и (или) не
                      предусматривающих раскрытия и предоставления информации
                      при проведении финансовых операций (офшорные зоны) в
                      отношении таких юридических лиц, в совокупности превышает
                      50 процентов.
                    </li>
                  </ul>
                </b-card-text>
              </b-tab>
              <b-tab title="Требования к заявителю">
                <b-card-text
                  ><h3>Требования к заявителю</h3>
                  <p>
                    Получателями грантов являются физические лица, занимающиеся
                    научной (научно-исследовательской), научно-технической или
                    инновационной деятельностью научных организациях,
                    образовательных организациях высшего образования, иных
                    организациях, один из видов осуществляемой деятельности
                    которых относится к классу 72 «Научные исследования и
                    разработки» раздела M «Деятельность профессиональная,
                    научная и техническая» Общероссийского классификатора видов
                    экономической деятельности ОК 029-2014 (КДЕС Ред. 2),
                    принятого приказом Федерального агентства по техническому
                    регулированию и метрологии от 31.01.2014 № 14-ст, за
                    исключением государственных (муниципальных) учреждений
                    (далее — организации, осуществляющие научные исследования и
                    разработки), отвечающие требованиям, предусмотренным пунктом
                    2.4 Порядка, и являющиеся на дату подачи заявки на
                    предоставление гранта (далее — заявка):
                  </p>
                  <ul>
                    <li>
                      студентами (курсантами) — лицами, осваивающими
                      образовательные программы бакалавриата, специалитета,
                      магистратуры в возрасте до 30 лет включительно;
                    </li>
                    <li>
                      аспирантами, научными работниками, педагогическими
                      работниками, специалистами (инженерно-техническими
                      работниками) образовательных организаций высшего
                      образования или научных организаций без ученой степени в
                      возрасте до 30 лет включительно;
                    </li>
                    <li>
                      научными работниками, педагогическими работниками,
                      имеющими ученую степень кандидата наук в возрасте до 35
                      лет включительно либо имеющими ученую степень доктора наук
                      в возрасте до 40 лет включительно;
                    </li>
                    <li>
                      специалистами либо руководителями организаций,
                      осуществляющих научные исследования и разработки, в
                      возрасте до 35 лет включительно.
                    </li>
                  </ul>
                  <p>
                    Получатели грантов должны соответствовать на первое число
                    месяца, в котором объявлен конкурс на предоставление гранта,
                    следующим требованиям:
                  </p>
                  <ul>
                    <li>
                      не должны являться получателями средств из бюджета города
                      на цели предоставления гранта, указанные в пункте 1.3
                      Порядка, в течение двух предшествующих лет;
                    </li>
                    <li>
                      не должны иметь просроченную задолженность по возврату в
                      бюджет города субсидий, бюджетных инвестиций, и иную
                      просроченную задолженность перед бюджетом города;
                    </li>
                    <li>
                      не должны иметь неисполненную обязанность по уплате
                      налогов, сборов, страховых взносов, пеней, штрафов и
                      процентов, подлежащих уплате в соответствии с
                      законодательством Российской Федерации о налогах и сборах.
                    </li>
                  </ul>
                </b-card-text>
              </b-tab>
              <b-tab
                title="Необходимые документы для предоставления меры поддержки"
              >
                <b-card-text>
                  <h3>
                    Необходимые документы для предоставления меры поддержки
                  </h3>
                  <p>
                    Для участия в конкурсе соискатель гранта вносит данные о
                    себе в предусмотренные для заполнения поля в Системе и
                    размещает в ней электронные образы следующей конкурсной
                    документации, полученной в результате сканирования
                    документов на бумажных носителях:
                  </p>
                  <ul>
                    <li>
                      заявки по форме согласно приложению 1 к Порядку,
                      согласованной руководителем организации, в которой учится
                      или работает соискатель гранта, и печатью данной
                      организации (при наличии);
                    </li>
                    <li>
                      нотариально заверенного перевода документа,
                      удостоверяющего личность соискателя гранта (в случае если
                      соискатель гранта является иностранным гражданином);
                    </li>
                    <li>
                      ходатайства ученого совета научной или образовательной
                      организации высшего образования, руководителя организации,
                      осуществляющей научные исследования или разработки, в
                      которой учится или работает соискатель гранта, о
                      предоставлении гранта соискателю гранта, включающего в
                      себя описание значимости результатов, полученных в рамках
                      научного проекта, личного вклада соискателя гранта в
                      достижение полученных результатов и согласие на
                      предоставление соискателю гранта условий для выполнения
                      научного проекта по теме гранта;
                    </li>
                    <li>
                      диплома о присуждении соискателю гранта ученой степени
                      либо приказа министерства науки и высшего образования
                      Российской Федерации о выдаче диплома (при наличии);
                    </li>
                    <li>
                      финансовых документов, подтверждающих осуществление
                      затрат, предусмотренных пунктом 1.3 Порядка (в случае
                      подачи заявки в целях возмещения затрат, понесенных в
                      течение 12 месяцев, предшествующих дате подачи заявки);
                    </li>
                    <li>
                      свидетельства о постановке соискателя гранта на учет в
                      налоговом органе;
                    </li>
                    <li>
                      документа, подтверждающего регистрацию в системе
                      индивидуального (персонифицированного) учета, в том числе
                      в форме электронного документа;
                    </li>
                    <li>
                      согласия соискателя гранта на публикацию (размещение) в
                      информационно-телекоммуникационной сети «Интернет»
                      информации о соискателе гранта, информации, содержащейся в
                      заявке соискателя гранта и иной информации, связанной с
                      участием в конкурсе;
                    </li>
                    <li>
                      согласия соискателя гранта и лиц, являющихся поставщиками
                      (подрядчиками, исполнителями) по договорам, заключенным в
                      целях исполнения обязательств по договорам о
                      предоставлении грантов на финансовое обеспечение затрат в
                      связи с производством (реализацией) товаров, выполнением
                      работ, оказанием услуг (за исключением государственных
                      (муниципальных) унитарных предприятий, хозяйственных
                      товариществ и обществ с участием публично-правовых
                      образований в их уставных (складочных) капиталах, а также
                      коммерческих организаций с участием таких товариществ и
                      обществ в их уставных (складочных) капиталах), на
                      осуществление департаментом и органами муниципального
                      финансового контроля проверок соблюдения условий, целей и
                      порядка предоставления гранта;
                    </li>
                    <li>
                      согласия соискателя гранта на обработку департаментом его
                      персональных данных в соответствии с Федеральным законом
                      от 27.07.2006 № 152-ФЗ «О персональных данных».
                    </li>
                  </ul>
                </b-card-text>
              </b-tab>
              <b-tab title="Порядок рассмотрения заявок участников">
                <b-card-text>
                  <h3>Порядок рассмотрения заявок участников</h3>
                  <p>
                    Департамент в течение срока приема заявок осуществляет
                    предварительный анализ заявок соискателей и документов на
                    предмет правильности и полноты их представления и, в случае
                    необходимости уточнения информации, осуществляет подготовку
                    письменного уведомления, направляет его соискателю гранта
                    посредством Системы на адрес электронной почты, указанный в
                    заявке.
                  </p>
                  <p>
                    Предварительный анализ осуществляется только в случае подачи
                    соискателем гранта заявки не позднее чем за 10 дней до даты
                    окончания срока приема заявок (включительно).
                  </p>
                  <p>
                    Соискатель гранта вправе представить скорректированную
                    (уточненную) заявку до даты окончания срока приема заявок
                    (включительно). Непредставление соискателем гранта
                    скорректированной (уточненной) заявки в указанный срок
                    расценивается как отказ от участия в конкурсе.
                  </p>
                  <p>
                    Департамент в течение 15 дней со дня окончания срока приема
                    заявок принимает решение о признании соискателя гранта
                    участником конкурса при отсутствии оснований,
                    предусмотренных пунктом 2.9 Порядка, направляет письма о
                    назначении экспертов.
                  </p>
                  <p>
                    Экспертиза поданных на участие в конкурсе заявок и
                    подготовка экспертного заключения осуществляется экспертами
                    в Системе в течение 14 дней со дня назначения им заявок.
                  </p>
                  <p>
                    Оценка заявок участников конкурса экспертами осуществляется
                    по шкале от 0 до 10 баллов с последующим суммированием
                    баллов по критериям. Итоговое количество баллов определяется
                    как средняя арифметическая сумма баллов, присвоенных каждым
                    экспертом по всем критериям оценки (с округлением до
                    тысячных).
                  </p>
                  <p>
                    Заявка участника конкурса не допускается к рассмотрению на
                    заседании координационного совета при наличии хотя бы одного
                    заключения о несоответствии научного проекта.
                  </p>
                  <p>
                    Департамент в течение пяти дней со дня завершения оценки
                    экспертами последней заявки формирует общий рейтинг
                    участников конкурса.
                  </p>
                  <p>
                    Координационный совет не позднее 20 дней со дня получения
                    доступа к просмотру заявок участников конкурса, экспертным
                    заключениям и общему рейтингу участников рассматривает
                    заявки и принимает решение о признании участников конкурса
                    победителями с указанием размера грантов.
                  </p>
                  <p>
                    Победителями конкурса признаются участники, набравшие
                    наибольшее количество баллов и имеющие наиболее высокие
                    позиции в общем рейтинге. Победителем конкурса не может быть
                    признан участник, заявка которого набрала менее 3 баллов.
                  </p>
                  <p>
                    Координационный совет имеет право принять решение, отличное
                    от мнения экспертов в части количества баллов, набранных
                    участником конкурса, с последующим изменением общего
                    рейтинга, обосновав свое решение в соответствии с критериями
                    оценки, и занесением соответствующей информации в протокол
                    заседания.
                  </p>
                  <p>
                    Протокол заседания координационного совета, содержащий
                    информацию об общем рейтинге участников и победителях
                    конкурса, подписывается председателем и секретарем
                    координационного совета в течение 10 дней с даты проведения
                    заседания координационного совета и направляется в
                    департамент.
                  </p>
                </b-card-text>
              </b-tab>
              <b-tab title="Администратор меры">
                <b-card-text>
                  <h3>Администратор меры</h3>
                  <p>Территориальный уровень меры поддержки: Региональный</p>
                  <p>
                    Название организации: Департамент промышленности, инноваций
                    и предпринимательства
                  </p>
                  <p>
                    Ссылка на сайт администратора меры поддержки:
                    <a href="https://dep.test.ru" :class="'text-' + theme"
                      >https://dep.test.ru/</a
                    >
                  </p>
                  <p>
                    Контактная информация: 200-00-00, e-mail:
                    <a href="mailto:test@test.ru" :class="'text-' + theme"
                      >test@test.ru</a
                    >
                  </p>
                </b-card-text>
              </b-tab>
              <b-tab title="Нормативная правовая база">
                <b-card-text>
                  <h3>Нормативно-правовая база</h3>
                  <p>
                    Конкурс проводится в соответствии с Порядком предоставления
                    грантов в форме субсидий в сфере научной и инновационной
                    деятельности, утвержденным постановлением от 01.01.2021 №
                    200.
                  </p>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    <b-modal
      id="new-app"
      :title="appForm.form.name"
      size="xl"
      hide-footer
      no-stacking
      @close="cleanAppForm"
    >
      <template v-if="isResponse">
        <!--        <div v-if="isAlertVisible" class="alert alert-success" role="alert">-->
        <!--          {{ successComment }}-->
        <!--        </div>-->
        <div class="row">
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
                  @click="invokeAction(action.id, true)"
                >
                  {{ action.name }}
                </button>
                <button
                  v-else
                  :key="action.id"
                  type="button"
                  class="btn btn-block btn-primary"
                  @click="invokeAction(action.id)"
                >
                  {{ action.name }}
                </button>
              </template>
            </template>
          </div>
        </div>
      </template>

      <template v-else-if="isLoading">
        <div class="card">
          <div class="card-body text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div>{{ loadingComment }}</div>
          </div>
        </div>
      </template>
    </b-modal>

    <b-modal
      id="how-to-send-app"
      title="Как подать заявку"
      size="lg"
      hide-footer
      no-stacking
      @close="cleanAppForm"
    >
      <b>Для того, чтобы подать заявку на получение поддержки необходимо:</b>
      <ul>
        <li>
          Осуществить вход на сайт, используя учетную запись портала
          государственных услуг
        </li>
        <li>
          На странице "Меры поддержки" подобрать необходимую вам меру поддержки,
          используя фильтрацию, поиск и элементы навигации
        </li>
        <li>
          Открыть карточку с описанием выбранной меры поддерки и ознакомиться с
          требованиями для получения поддержки
        </li>
        <li>
          Нажатием на кнопку "Подать заявку" открыть форму заявления на
          предоставление меры поддержки
        </li>
        <li>
          Заполнить поля формы заявления, прикрепить файлы документов,
          необходимых для получения поддержки. Отправить заполненную форму
          заявления
        </li>
        <li>Отслеживать ход обработки заявления</li>
        <li>
          При необходимости дополнять заявления недостающими документами по
          запросу сотрудника, обрабатывающего заявление
        </li>
        <li>
          Получить в личном кабинете решение о предоставлении поддержки или
          мотивированный отказ на ее предоставление
        </li>
      </ul>
    </b-modal>
  </div>
</template>

<script>
import { Form } from "vue-formio";
import axios from "axios";

export default {
  name: "SubsidyInfo",

  components: {
    Form,
  },

  props: ["url", "theme", "user"],

  data() {
    return {
      measure: {},
      measureForms: [
        {
          actions: [],
          id: 0,
          modelId: 0,
          name: "Заявление",
          scheme: {},
        },
      ],
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
            "Drop files to attach, or browse":
              "Перетащите файл сюда, или выберите с диска",
          },
        },
      },
      isLoading: false,
      loadingComment: "Загрузка формы заявления",
      successComment: "Форма заявления успешно загружена!",
      isResponse: false,
      isAlertVisible: false,
      isValidFormData: false,
      isFirstLoad: true,
    };
  },

  computed: {
    appLink: function () {
      // return "/application_view/" + this.$route.params.subId;
      return (
        "/application_view/model/" +
        this.$route.params.modelId +
        "/app/0"
      );
    },
    availabilityByRole: function () {
      if (!this.measure.id) {
        return false;
      } else {
        for (let i = 0; i < this.measure.roles.length; i++) {
          if (this.user.selectedRole.id === this.measure.roles[i].id) {
            return true;
          }
        }
        return false;
      }
    },
  },

  methods: {
    // Информация о мере поддержки
    getMeasure() {
      axios
        .get(this.url + "serv/get-model?id=" + this.$route.params.modelId)
        .then((response) => {
          console.log("Детальная информация по мере поддержки (getMeasure)");
          console.log(response);
          this.measure = response.data;
        });
    },

    // Стартовая форма заявления
    getStartForm() {
      this.isResponse = false;
      this.isLoading = true;
      this.loadingComment = "Загрузка формы заявления";
      setTimeout(this.getForm, 1000);
    },
    getForm() {
      axios
        .get(this.url + "serv/get-appData?id=" + this.$route.params.modelId)
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

    invokeAction(actionId, isBackAction = false) {
      console.log("Выполнение действия");
      this.isFirstLoad = false;
      this.isValidFormData = this.validateForm();
      console.log("Валидность формы:" + this.isValidFormData);
      if (this.isValidFormData) {
        this.loadingComment = "Отправка данных заявления";
        this.isResponse = false;
        this.isLoading = true;
        setTimeout(this.invoke, 1000, actionId, isBackAction);
      } else {
        this.$refs.vueForm.formio.submit();
      }
    },
    invoke(actionId, isBackAction = false) {
      const request = {
        actionId: actionId,
        userId: 13,
        appId: this.appForm.id,
        data: JSON.stringify(this.appForm.data),
      };
      axios
        .post(this.url + "app/action-invoke", request)
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
              this.cleanAppForm();
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
      this.$bvModal.hide("new-app");
      this.isLoading = false;
      this.loadingComment = "Загрузка формы заявления";
      this.successComment = "Форма заявления успешно загружена!";
      this.isResponse = true;
      this.isAlertVisible = true;
      this.isValidFormData = false;
      this.isFirstLoad = true;
    },

    measurePeriod() {
      let period = "";
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };
      if (this.measure.startDate) {
        period +=
          "c " +
          new Intl.DateTimeFormat("ru-RU", options).format(
            new Date(this.measure.startDate)
          ) +
          " ";
      }
      if (this.measure.endDate) {
        period +=
          "по " +
          new Intl.DateTimeFormat("ru-RU", options).format(
            new Date(this.measure.endDate)
          );
      }
      if (!this.measure.startDate && !this.measure.endDate) {
        period = "даты не указаны";
      }
      return period;
    },

    isValidPeriod() {
      let now = new Date();
      let measureStartDate, measureFinishDate;
      if (this.measure.startDate) {
        measureStartDate = new Date(this.measure.startDate);
      }
      if (this.measure.endDate) {
        measureFinishDate = new Date(this.measure.endDate);
        measureFinishDate.setDate(measureFinishDate.getDate() + 1);
      }
      if (measureStartDate && measureFinishDate) {
        return now >= measureStartDate && now <= measureFinishDate;
      } else if (measureStartDate && !measureFinishDate) {
        return now >= measureStartDate;
      } else if (!measureStartDate && measureFinishDate) {
        return now <= measureFinishDate;
      } else if (!measureStartDate && !measureFinishDate) {
        return true;
      }
    },
  },

  mounted: function () {
    this.getMeasure();
  },
};
</script>

<style lang="scss">
.btn {
  word-wrap: break-word;
}
</style>
