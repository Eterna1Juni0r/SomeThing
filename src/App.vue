<template>
  <NavBar />
  <div class="element">
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "./component/NavBar.vue";
</script>

<style scoped>
.element {
  margin-top: 15%;
  display: flex;
  justify-content: center;
}
</style>
