import { createRouter, createWebHistory } from "vue-router";
import VLogin from "@/views/VLogin";
import VForget from "@/views/VForget";
// import VMail from "@/views/VMail";
import VDashboard from "@/views/VDashboard";
import AppEmailBody from "@/components/AppEmailBody";
import NotFound from "@/views/NotFound";

const VMail = () => import("@/views/VMail");

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: VLogin, alias: "/" },
    { path: "/forget", component: VForget },
    {
      path: "/mail",
      component: VMail,
      name: "email",
      children: [{ path: ":mailId?", component: AppEmailBody, props: true }],
    },
    { path: "/dashboard", component: VDashboard },
    { path: "/:hotFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
