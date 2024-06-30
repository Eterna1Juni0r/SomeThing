<template>
  <div class="pole">
    <my-button @click="update(dCube.maxMeaning)">{{ dCube.name }}</my-button>
    <div class="meaning">{{ dCubeV }}</div>
  </div>
</template>

<script setup>
import MyButton from "@/component/UI/MyButton.vue";
import { computed } from "vue";

const props = defineProps({
  dCube: Object,
});

const dCubeV = computed(() => props.dCube.value);

const update = (meaning) => {
  props.dCube.value = Math.floor(Math.random() * (meaning - 1 + 1) + 1);
};
</script>

<style lang="scss" scoped>
.pole {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.meaning {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
