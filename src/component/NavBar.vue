<template>
  <div class="navbar">
    <my-button :style="getButtonStyle('/')" @click="handleClick('/')"
      >Main</my-button
    >
    <my-button
      :style="getButtonStyle('/WeatherPage')"
      @click="handleClick('/WeatherPage')"
      >Weather</my-button
    >
    <my-button
      :style="getButtonStyle('/CalculatorPage')"
      @click="handleClick('/CalculatorPage')"
      >Crypto</my-button
    >
    <my-button
      :style="getButtonStyle('/DnDPage')"
      @click="handleClick('/DnDPage')"
      >DnD</my-button
    >
  </div>
</template>

<script setup>
//весь скрипт со стилями написал chatGPT потому что я лох позорный ;(

import { ref } from "vue";
import { useRouter } from "vue-router";
import MyButton from "@/component/UI/MyButton.vue";

const activeRoute = ref("/");
const router = useRouter();

const handleClick = (route) => {
  activeRoute.value = route;
  router.push(route);
};

const getButtonStyle = (route) => {
  return {
    backgroundColor: activeRoute.value === route ? "black" : "#e3bc4b",
    color: activeRoute.value === route ? "#e3bc4b" : "black",
  };
};
</script>

<style>
.navbar {
  width: auto;
  height: 50px;
  background-color: lightcyan;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
my-button {
  margin: 0 5px;
}
</style>
