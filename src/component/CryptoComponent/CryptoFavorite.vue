<template>
  <h2>Варианты в избранном</h2>
  <div @click="getFromFavs(index)" v-for="(el, index) in favs" :key="index">
    <span>{{ el.from }}</span>
    <span>{{ el.to }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  favs: {
    type: Array,
    required: true,
  },
  getFromFavs: {
    type: Function,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
h2 {
  color: #fff;
}

div {
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 0 auto;
  transition: all 500ms ease;
}

span {
  padding: 15px;
  background: #8c00ff;
  color: #fff;
}

div:hover {
  opacity: 0.7;
  transform: scale(1.1);
  cursor: pointer;
}
</style>
