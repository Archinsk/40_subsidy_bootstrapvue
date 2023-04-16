import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "empty-layout" },
    component: () => import("../views/Home"),
  },
  {
    path: "/news",
    name: "News",
    meta: { layout: "main-layout" },
    component: () => import("../views/News"),
  },
  {
    path: "/news_info",
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
    path: "/subsidy_info/model/:modelId",
    name: "SubsidyInfo",
    meta: { layout: "main-layout" },
    component: () => import("../views/SubsidyInfo"),
  },
  {
    path: "/application_view/model/:modelId/app/:appId",
    name: "ApplicationView",
    meta: { layout: "main-layout" },
    component: () => import("../views/ApplicationView"),
  },
  {
    path: "/account_info",
    name: "AccountInfo",
    meta: { layout: "main-layout" },
    component: () => import("../views/AccountInfo"),
  },
  {
    path: "/applications",
    name: "Applications",
    meta: { layout: "main-layout" },
    component: () => import("../components/Applications"),
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
  {
    path: "/contacts",
    name: "ContactsView",
    meta: { layout: "main-layout" },
    component: () => import("../views/ContactsView"),
  },
  {
    path: "/signature",
    name: "DigitalSignature",
    meta: { layout: "main-layout" },
    component: () => import("../views/DigitalSignature"),
  },
  {
    path: "/settings",
    name: "SettingsView",
    meta: { layout: "main-layout" },
    component: () => import("../views/SettingsView"),
  },
];

const router = new VueRouter({
  routes,
  // mode: "history"
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
