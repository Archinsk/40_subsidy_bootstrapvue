<template>
  <header :class="'header sticky-top shadow bg-' + theme">
    <div class="container">
      <b-navbar type="dark" :variant="theme">
        <b-navbar-brand class="logo" to="/">
          <img
            src="@/assets/iss_logo_white.svg"
            class="d-inline-block align-top logo__image"
            alt="logo"
          />
          Информационные системы и сервисы
        </b-navbar-brand>

        <HeaderNav
          :url="url"
          :user="user"
          :theme="theme"
          @assign-user="$emit('assign-user', $event)"
          @select-role="$emit('select-role', $event)"
        ></HeaderNav>

        <b-button
          v-b-modal.messages
          variant="outline-light"
          class="btn-icon-only_square mr-2"
        >
          <span class="material-icons">mail</span>
        </b-button>

        <b-button
          variant="outline-light"
          class="d-lg-none btn-icon-only_square"
          v-b-toggle.sidebar
        >
          <span class="material-icons">menu</span>
        </b-button>
      </b-navbar>

      <b-modal
        scrollable
        id="messages"
        ref="modal-messages"
        title="Уведомления"
        hide-footer
        no-stacking
      >
        <div class="accordion" id="accordionMessages">
          <MessagesAccordionItem v-for="i of 20" :key="i" :temp-id="i" />
        </div>
        <hr />
        <div class="accordion" id="accordionMessages2">
          <transition-group name="list" tag="div">
            <MessagesAccordionItem2 v-for="i of messagesList" :key="i" :temp-id="i" class="list-item" @delete-message="messagesList.splice(i, 1)"/>
          </transition-group>
        </div>
        <hr />
        <div class="accordion" id="accordionMessages3">
          <transition-group name="list-complete" tag="div">
            <MessagesAccordionItem2 v-for="i of messagesList" :key="i" :temp-id="i"  class="list-complete-item" @delete-message="messagesList.splice(i, 1)"/>
          </transition-group>
        </div>
      </b-modal>
    </div>
  </header>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import MessagesAccordionItem from "@/components/MessagesAccordionItem";
import MessagesAccordionItem2 from "@/components/MessagesAccordionItem2";

export default {
  name: "Header",
  components: {
    MessagesAccordionItem2,
    MessagesAccordionItem,
    HeaderNav,
  },
  props: ["url", "user", "theme"],

  data() {
    return {
      messagesList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
  },
};
</script>
