import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/HomeView.vue";
import UserView from "@/pages/UserView.vue";

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/new",
      name: "Users",
      component: UserView,
    },
  ],
});
