<template>
  <input
    min="0"
    type="number"
    placeholder="Введите число"
    @input="changeAmount($event.target.value)"
  />
  <br />
  <my-button @click="convert()">Конвертировать</my-button>
</template>

<script setup>
import MyButton from "./UI/MyButton.vue";

const props = defineProps({
  changeAmount: {
    type: Function,
    required: true,
  },
  convert: {
    type: Function,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
input {
  width: 500px;
  border-radius: 3px;
  border: 0;
  padding: 10px 15px;
  background: #fafafa;
  outline: none;
  color: #333;
}
</style>
