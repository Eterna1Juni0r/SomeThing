<template>
  <div v-if="props.info !== null">
    <p>{{ showTemp }}</p>
    <p>{{ showFeelsLike }}</p>
    <p>{{ showMinTemp }}</p>
    <p>{{ showMaxTemp }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  info: Object,
});

const showTemp = computed(() => "Температура: " + props.info.temp);
const showFeelsLike = computed(() => "Ощущается как: " + props.info.feels_like);
const showMinTemp = computed(
  () => "Минимальная температура: " + props.info.temp_min
);
const showMaxTemp = computed(
  () => "Максимальная температура: " + props.info.temp_max
);
</script>

<style lang="scss" scoped></style>
