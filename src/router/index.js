import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "wuizes",
      component: () => import("../views/Quizes.vue"),
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import("../views/Quiz.vue"),
    },
  ],
});

export default router;
