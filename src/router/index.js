import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/homes",
    name: "Homes",
    component: () =>
      import("../views/HomeS"),
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import("../views/News"),
  },
  {
    path: "/newsinfo",
    name: "NewsInfo",
    component: () =>
      import("../views/NewsInfo"),
  },
  {
    path: "/measures",
    name: "Measures",
    component: () =>
      import("../views/Measures"),
  },
  {
    path: "/subsidyinfo",
    name: "SubsidyInfo",
    component: () =>
      import("../views/SubsidyInfo"),
  },
  {
    path: "/accountinfo",
    name: "AccountInfo",
    component: () =>
      import("../views/AccountInfo"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
