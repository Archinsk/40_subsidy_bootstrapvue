import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main-layout" },
    component: () => import("../views/Home"),
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
    path: "/measures_example",
    name: "MeasuresExample",
    meta: { layout: "main-layout" },
    component: () => import("../views/MeasuresExample"),
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
    path: "/subsidyinfotemp/:subId",
    name: "SubsidyInfoTemp",
    meta: { layout: "main-layout" },
    component: () => import("../views/SubsidyInfoTemp"),
  },
  {
    path: "/accountinfo",
    name: "AccountInfo",
    meta: { layout: "main-layout" },
    component: () => import("../views/AccountInfo"),
  },
  {
    path: "/applications",
    name: "Applications",
    meta: { layout: "main-layout" },
    component: () => import("../views/Applications"),
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
