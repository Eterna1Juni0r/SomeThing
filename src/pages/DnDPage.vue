<template>
  <div class="btn-place">
    <Cube v-for="dCube in dCubes" :dCube="dCube" />
  </div>
</template>

<script setup>
import Cube from "@/component/Cube.vue";
import { ref } from "vue";

const dCubes = ref([
  {
    name: "1d4",
    maxMeaning: 4,
    value: 0,
  },
  {
    name: "1d6",
    maxMeaning: 6,
    value: 0,
  },
  {
    name: "1d8",
    maxMeaning: 8,
    value: 0,
  },
  {
    name: "1d10",
    maxMeaning: 10,
    value: 0,
  },
  {
    name: "1d12",
    maxMeaning: 12,
    value: 0,
  },
  {
    name: "1d20",
    maxMeaning: 20,
    value: 0,
  },
  {
    name: "1d100",
    maxMeaning: 100,
    value: 0,
  },
]);
</script>

<style lang="scss" scoped>
.btn-place {
  display: flex;
  flex-wrap: wrap;
}
</style>
