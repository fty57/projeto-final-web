import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView/HomeView.vue"),
    },
    {
      path: "/movies",
      name: "movie",
      component: () => import("../views/MovieView/MovieView.vue"),
    },
  ],
});

export default router;
