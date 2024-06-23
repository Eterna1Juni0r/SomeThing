<template>
  <div class="wrapper">
    <h1>Погодное приложение</h1>
    <p>
      Узнать погоду в {{ city === "" ? "вашем городе" : cityName }} (Писать на
      англ.)
    </p>

    <input placeholder="Введите город" v-model="city" />

    <button v-if="city !== ''" @click="getWeather()">Получить погоду</button>
    <button disabled v-else>Введите город</button>
    <p class="error">{{ error }}</p>

    <div v-if="info !== null">
      <p>{{ showTemp }}</p>
      <p>{{ showFeelsLike }}</p>
      <p>{{ showMinTemp }}</p>
      <p>{{ showMaxTemp }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      city: "",
      error: "",
      info: null,
    };
  },
  computed: {
    cityName() {
      return '"' + this.city + '"';
    },
    showTemp() {
      return "Температура: " + this.info.temp;
    },
    showFeelsLike() {
      return "Ощущается как: " + this.info.feels_like;
    },
    showMinTemp() {
      return "Минимальная температура: " + this.info.temp_min;
    },
    showMaxTemp() {
      return "Максимальная температура: " + this.info.temp_max;
    },
  },
  methods: {
    getWeather() {
      if (this.city.trim().length < 2) {
        this.error = "Нужно название более одного символа";
        return false;
      }
      this.error = "";

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=8039526facb48f668a7cfe66be09c374`
        )
        .then((res) => (this.info = res.data.main));
    },
  },
};
</script>
