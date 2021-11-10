import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
    path: "/subsidyinfo1",
    name: "SubsidyInfo1",
    component: () =>
      import("../views/SubsidyInfo1"),
  },
  {
    path: "/subsidyinfo2",
    name: "SubsidyInfo2",
    component: () =>
      import("../views/SubsidyInfo2"),
  },
  {
    path: "/subsidyinfo3",
    name: "SubsidyInfo3",
    component: () =>
      import("../views/SubsidyInfo3"),
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
