<template>
  <NavBar style="position: sticky; top: 0px; left: 0px" />
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
  flex-direction: column;
}
</style>
