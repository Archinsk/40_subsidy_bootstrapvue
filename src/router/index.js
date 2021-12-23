import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homes",
    meta: { layout: "main-layout" },
    component: () => import("../views/HomeS"),
  },
  {
    path: "/news",
    name: "News",
    meta: { layout: "main-layout" },
    component: () => import("../views/News"),
  },
  {
    path: "/newsinfo",
    name: "NewsInfo",
    meta: { layout: "main-layout" },
    component: () => import("../views/NewsInfo"),
  },
  {
    path: "/measures",
    name: "Measures",
    meta: { layout: "main-layout" },
    component: () => import("../views/Measures"),
  },
  {
    path: "/measuresAuth",
    name: "MeasuresAuth",
    meta: { layout: "main-layout" },
    component: () => import("../views/MeasuresAuth"),
  },
  {
    path: "/subsidyinfo1",
    name: "SubsidyInfo1",
    meta: { layout: "main-layout" },
    component: () => import("../views/SubsidyInfo1"),
  },
  {
    path: "/subsidyinfo2",
    name: "SubsidyInfo2",
    meta: { layout: "main-layout" },
    component: () => import("../views/SubsidyInfo2"),
  },
  {
    path: "/subsidyinfo3",
    name: "SubsidyInfo3",
    meta: { layout: "main-layout" },
    component: () => import("../views/SubsidyInfo3"),
  },
  {
    path: "/subsidyinfo4",
    name: "SubsidyInfo4",
    meta: { layout: "main-layout" },
    component: () => import("../views/SubsidyInfo4"),
  },
  {
    path: "/subsidyinfo5",
    name: "SubsidyInfo5",
    meta: { layout: "main-layout" },
    component: () => import("../views/SubsidyInfo5"),
  },
  {
    path: "/subsidyinfo6",
    name: "SubsidyInfo6",
    meta: { layout: "main-layout" },
    component: () => import("../views/SubsidyInfo6"),
  },
  {
    path: "/accountinfo",
    name: "AccountInfo",
    meta: { layout: "main-layout" },
    component: () => import("../views/AccountInfo"),
  },
  {
    path: "/authPage",
    name: "AuthPage",
    meta: { layout: "empty-layout" },
    component: () => import("../views/AuthPage"),
  },
  {
    path: "/selectUser",
    name: "SelectUser",
    meta: { layout: "empty-layout" },
    component: () => import("../views/SelectUser"),
  },
  {
    path: "/siteAdmin",
    name: "SiteAdmin",
    meta: { layout: "main-layout" },
    component: () => import("../views/SiteAdmin"),
  },
];

const router = new VueRouter({
  routes,
  // mode: "history"
});

export default router;
