import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/",
          name: "landing",
          component: () => import("../views/HomeView.vue")
        },
        {
          path: "/podcast/:id",
          name: "podcast",
          component: () => import("@/views/Podcast.vue")
        }
      ]
    }
  ]
});

export default router;
