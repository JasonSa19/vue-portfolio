import { createRouter, createWebHistory } from "vue-router";
import Imprint from "../components/sites/Imprint.vue";
import Home from "../components/sites/Home.vue"; // Replace with your actual Home component path

const routes = [
  { path: "/", component: Home },
  { path: "/impressum", component: Imprint },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
