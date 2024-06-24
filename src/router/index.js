import { createRouter, createMemoryHistory } from "vue-router";
import WeatherPage from "@/pages/WeatherPage.vue";
import MainPage from "@/pages/MainPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/WeatherPage",
    component: WeatherPage,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
