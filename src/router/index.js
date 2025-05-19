import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookingView from "../views/BookingView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/booking", component: BookingView },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
