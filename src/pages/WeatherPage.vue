<template>
  <div class="wrapper">
    <HeaderWeather @gWeather="getWeather" />
    <p class="error">{{ error }}</p>
    <Indicators :info="info" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Indicators from "@/component/Indicators.vue";
import HeaderWeather from "@/component/HeaderWeather.vue";

const info = ref(null);
const error = ref("");
//как обработать тут ошибку чтобы в случае если города нет в базе (то бишь вбили 'уиуеиа'),
//он мне отправил данные на константу error, вооооот (Маским выручай)
const getWeather = (city) => {
  if (city.length < 2) {
    error.value = "Нужно название более одного символа";
    return;
  }

  error.value = "";
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8039526facb48f668a7cfe66be09c374`
    )
    .then((res) => (info.value = res.data));
};
</script>

<style>
.error {
  margin-top: 20px;
  color: red;
}
.wrapper {
  max-width: 500px;
  width: auto;
  height: auto;
  background: #1f0f24;
  border-radius: 50px;
  padding: 20px;
  text-align: center;
  color: white;
}
</style>
