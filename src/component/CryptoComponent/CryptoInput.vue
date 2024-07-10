<template>
  <input
    min="0"
    type="number"
    placeholder="Введите число"
    @input="changeAmount($event.target.value)"
  />
  <br />
  <my-button @click="convert()">Конвертировать</my-button>
  <my-button @click="favorite()">В избранное</my-button>
</template>

<script setup>
import MyButton from "@/component/UI/MyButton.vue";

const props = defineProps({
  changeAmount: {
    type: Function,
    required: true,
  },
  convert: {
    type: Function,
    required: true,
  },
  favorite: {
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
