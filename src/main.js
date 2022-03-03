import Vue from "vue";

import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import dateFilter from "./filters/date.filter";

import App from "./App.vue";
import "./subsidy.scss"
import i18n from './i18n'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.filter("date", dateFilter);

new Vue({
  router,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
