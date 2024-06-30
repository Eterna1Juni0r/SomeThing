import { createRouter, createMemoryHistory } from "vue-router";
import WeatherPage from "@/pages/WeatherPage.vue";
import MainPage from "@/pages/MainPage.vue";
import CalculatorPage from "@/pages/CalculatorPage.vue";
import DnDPage from "@/pages/DnDPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/WeatherPage",
    component: WeatherPage,
  },
  {
    path: "/CalculatorPage",
    component: CalculatorPage,
  },
  {
    path: "/DnDPage",
    component: DnDPage,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
