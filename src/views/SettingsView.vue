<template>
  <div id="settings-view">
    <section class="mb-3">
      <div class="container">
        <h4 class="title-primary text-center">Настройки</h4>

        <div class="accordion" id="settingsAccordion">
          <div class="card-list row">
            <div class="col-12">
              <Card class="shadow-sm">
                <template v-slot:card-body>
                  <div class="collapse-btn-container">
                    <CollapseButton
                      target-id="notificationCollapse"
                      @click="selectAccordionItem(0)"
                    >
                      <div class="collapse-title">Уведомление</div>
                      <div
                        :class="[
                          'marker-container',
                          { active: selectedItem === 0 },
                        ]"
                      >
                        <img src="/icons/arrowdown.svg" class="down-icon" />
                      </div>
                    </CollapseButton>
                  </div>
                  <Collapse
                    id="notificationCollapse"
                    parent-id="settingsAccordion"
                  >
                    <div>
                      <Form
                        :form-data="config.adminSettings.notification.form"
                        @change-form="$emit('change-form-part1', $event)"
                      />
                    </div>
                  </Collapse>
                </template>
              </Card>
            </div>
            <div class="col-12">
              <Card class="shadow-sm">
                <template v-slot:card-body>
                  <div class="collapse-btn-container">
                    <CollapseButton
                      target-id="serverCollapse"
                      @click="selectAccordionItem(1)"
                    >
                      <div class="collapse-title">Сервер</div>
                      <div
                        :class="[
                          'marker-container',
                          { active: selectedItem === 1 },
                        ]"
                      >
                        <img src="/icons/arrowdown.svg" class="down-icon" />
                      </div>
                    </CollapseButton>
                  </div>
                  <Collapse id="serverCollapse" parent-id="settingsAccordion">
                    <div>
                      <Form
                        :form-data="config.adminSettings.server.form"
                        @change-form="$emit('change-form-part2', $event)"
                      />
                    </div>
                  </Collapse>
                </template>
              </Card>
            </div>
            <div class="col-12">
              <Card class="shadow-sm">
                <template v-slot:card-body>
                  <div class="collapse-btn-container">
                    <CollapseButton
                      target-id="logoCollapse"
                      @click="selectAccordionItem(2)"
                    >
                      <div class="collapse-title">Логотип</div>
                      <div
                        :class="[
                          'marker-container',
                          { active: selectedItem === 2 },
                        ]"
                      >
                        <img src="/icons/arrowdown.svg" class="down-icon" />
                      </div>
                    </CollapseButton>
                  </div>
                  <Collapse id="logoCollapse" parent-id="settingsAccordion">
                    <div>
                      <Form
                        :form-data="config.adminSettings.logo.form"
                        @change-form="$emit('change-form-part3', $event)"
                      />
                    </div>
                  </Collapse>
                </template>
              </Card>
            </div>
            <div class="col-12">
              <Card class="shadow-sm">
                <template v-slot:card-body>
                  <div class="collapse-btn-container">
                    <CollapseButton
                      target-id="footerCollapse"
                      @click="selectAccordionItem(3)"
                    >
                      <div class="collapse-title">Футер</div>
                      <div
                        :class="[
                          'marker-container',
                          { active: selectedItem === 3 },
                        ]"
                      >
                        <img src="/icons/arrowdown.svg" class="down-icon" />
                      </div>
                    </CollapseButton>
                  </div>
                  <Collapse id="footerCollapse" parent-id="settingsAccordion">
                    <div>
                      <Form
                        :form-data="config.adminSettings.footer.form"
                        @change-form="$emit('change-form-part4', $event)"
                      />
                    </div>
                  </Collapse>
                </template>
              </Card>
            </div>
            <div class="col-12">
              <div class="d-flex justify-content-end">
                <button class="btn btn-outline-secondary">
                  Отменить изменения
                </button>
                <button class="btn btn-primary ml-3">
                  Сохранить изменения
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "../components/universal/BS46Card";
import CollapseButton from "../components/universal/BS46CollapseButton";
import Collapse from "../components/universal/BS46Collapse";
import Form from "../components/universal/BS46Form";
export default {
  name: "SettingsView",
  components: { Form, Collapse, CollapseButton, Card },
  props: ["config"],
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    selectAccordionItem(index) {
      if (index === this.selectedItem) {
        this.selectedItem = null;
      } else {
        this.selectedItem = index;
      }
    },
    // changeForm(item) {
    //   console.log(item);
    // },
  },
};
</script>
