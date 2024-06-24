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
import { computed, ref } from "vue";
import Indicators from "@/component/Indicators.vue";
import HeaderWeather from "@/component/HeaderWeather.vue";

const info = ref(null);
const city = ref("");
const error = ref("");
const cityName = computed(() => '"' + city.value + '"');
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

<style>
.wrapper {
  width: auto;
  height: auto;
  background: #1f0f24;
  border-radius: 50px;
  padding: 20px;
  text-align: center;
  color: white;
}
.error {
  color: red;
}
.wrapper h1 {
  margin-top: 50px;
}

.wrapper p {
  margin-top: 20px;
}
.wrapper input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #110813;
  color: #fcfcfc;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}

.wrapper input:focus {
  border-bottom-color: #6e2d7d;
}

.wrapper button:disabled {
  background: #796427;
  cursor: not-allowed;
}

.wrapper button {
  background: #e3bc4b;
  color: #fff;
  border-radius: 10spx;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}

.wrapper button:hover {
  transform: scale(1.1) translateY(-5px);
}
</style>
