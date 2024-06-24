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
  info: {
    type: Object,
    required: true,
  },
});

const showTemp = computed(() => "Температура: " + props.info.main.temp);
const showFeelsLike = computed(
  () => "Ощущается как: " + props.info.main.feels_like
);
const showMinTemp = computed(
  () => "Минимальная температура: " + props.info.main.temp_min
);
const showMaxTemp = computed(
  () => "Максимальная температура: " + props.info.main.temp_max
);
</script>

<style lang="scss" scoped></style>
