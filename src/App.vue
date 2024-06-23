<template>
  <div class="wrapper">
    <HeaderW></HeaderW>
  </div>
</template>

<script setup>
import HeaderW from "./component/HeaderW.vue";
</script>

<style scoped>
.error {
  color: red;
}

.wrapper {
  width: 900px;
  height: 500px;
  background: #1f0f24;
  border-radius: 50px;
  padding: 20px;
  text-align: center;
  color: white;
}
</style>
