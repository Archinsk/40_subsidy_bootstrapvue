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
    path: "/measuresAuth",
    name: "MeasuresAuth",
    component: () =>
      import("../views/MeasuresAuth"),
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
    path: "/subsidyinfo4",
    name: "SubsidyInfo4",
    component: () =>
      import("../views/SubsidyInfo4"),
  },
  {
    path: "/subsidyinfo5",
    name: "SubsidyInfo5",
    component: () =>
      import("../views/SubsidyInfo5"),
  },
{
    path: "/subsidyinfo6",
    name: "SubsidyInfo6",
    component: () =>
      import("../views/SubsidyInfo6"),
  },
  {
    path: "/accountinfo",
    name: "AccountInfo",
    component: () =>
      import("../views/AccountInfo"),
  },
  {
    path: "/authPage",
    name: "AuthPage",
    component: () =>
      import("../views/AuthPage"),
  },
  {
    path: "/selectUser",
    name: "SelectUser",
    component: () =>
      import("../views/SelectUser"),
  },
  {
    path: "/siteAdmin",
    name: "SiteAdmin",
    component: () =>
      import("../views/SiteAdmin"),
  },
];

const router = new VueRouter({
  routes,
  // mode: "history"
});

export default router;
