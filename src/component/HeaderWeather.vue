<template>
  <h1>Погодное приложение</h1>
  <p>
    Узнать погоду в {{ city === "" ? "вашем городе" : cityName }} (Писать на
    англ.)
  </p>

  <input
    placeholder="Введите город"
    v-model.trim="city"
    @keyup.enter="$emit('gWeather', city)"
  />

  <my-button v-if="city !== ''" @click="$emit('gWeather', city)">
    Получить погоду
  </my-button>
  <my-button disabled v-else>Введите город</my-button>
</template>

<script setup>
import { ref, computed } from "vue";
import MyButton from "./UI/MyButton.vue";
const city = ref("");
const cityName = computed(() => `"${city.value}"`);
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 50px;
}

p {
  margin-top: 20px;
}
input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #110813;
  color: #fcfcfc;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}

input:focus {
  border-bottom-color: #6e2d7d;
}
</style>
