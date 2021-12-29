import Vue from "vue";

import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import dateFilter from "./filters/date.filter";

import App from "./App.vue";
import "@/custom.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.filter("date", dateFilter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
