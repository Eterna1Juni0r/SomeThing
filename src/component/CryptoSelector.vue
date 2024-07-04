<template>
  <ul>
    <li @click="selectItem('BTC')" :style="getButtonStyle('BTC')">Bitcoin</li>
    <li @click="selectItem('ETH')" :style="getButtonStyle('ETH')">ETH</li>
    <li @click="selectItem('USDT')" :style="getButtonStyle('USDT')">USDT</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  setCrypto: {
    type: Function,
    required: true,
  },
});

const current = ref("");

function selectItem(val) {
  props.setCrypto(val);
  current.value = val;
}

const getButtonStyle = (val) => {
  return { backgroundColor: current.value === val ? "#24043e" : "#1a032d" };
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  width: 200px;
  padding: 0;
  border-radius: 3px;
  border: 3px solid #000;
}

li {
  display: block;
  background: #1a032d;
  color: #fff;
  padding: 20px 0;
}

li :hover,
li :active {
  background: #24043e;
  cursor: pointer;
}
</style>
