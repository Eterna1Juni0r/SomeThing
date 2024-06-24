<template>
  <div class="wrapper">
    <h1>Погодное приложение</h1>
    <p>
      Узнать погоду в {{ city === "" ? "вашем городе" : cityName }} (Писать на
      англ.)
    </p>

    <input
      placeholder="Введите город"
      v-model="city"
      @keyup.enter="getWeather()"
    />

    <button v-if="city !== ''" @click="getWeather()">Получить погоду</button>
    <button disabled v-else>Введите город</button>
    <p class="error">{{ error }}</p>
    <Indicators :info="info"></Indicators>
  </div>
</template>

<script setup>
import axios from "axios";

const error = ref("");

function getWeather() {
  if (city.value.trim().length < 2) {
    error.value = "Нужно название более одного символа";
    return false;
  }
  error.value = "";

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=8039526facb48f668a7cfe66be09c374`
    )
    .then((res) => (info.value = res.data.main));
}
</script>

<style lang="scss" scoped></style>
