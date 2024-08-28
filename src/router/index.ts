import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: HomePage,
      meta: {
        layout: HomeView,
      },
    },
    {
      path: "/",
      redirect : "/home",
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
      meta: {
        layout: HomeView,
      },
    },
  ],
});

export default router;
