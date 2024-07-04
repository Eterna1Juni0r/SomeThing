<template>
  <h1 class="head">CRYPTO</h1>

  <div class="base">
    <h1>Почему-то не WORK SUKA BLYAT</h1>
    <CryptoInput :changeAmount="changeAmount" :convert="convert" />
    <p v-if="error">{{ error }}</p>
    <p v-if="result !== 0">{{ result }}</p>
    <div class="selector">
      <CryptoSelector :setCrypto="setCryptoFirst" style="margin: 10px" />
      <CryptoSelector :setCrypto="setCryptoSecond" style="margin: 10px" />
    </div>
  </div>
</template>

<script setup>
import CryptoSelector from "@/component/CryptoSelector.vue";
import CryptoInput from "@/component/CryptoInput.vue";
import CryptoConvert from "crypto-convert";
import { ref } from "vue";

const converty = new CryptoConvert();
const amount = ref(1);
const cryptoFirst = ref("");
const cryptoSecond = ref("");
const error = ref("");
const result = ref(0);

const setCryptoSecond = (val) => {
  cryptoSecond.value = val;
};

const convert = async () => {
  if (amount.value <= 0) {
    error.value = "Введите число больше 0";
    return;
  } else if (cryptoFirst.value === "" || cryptoSecond.value === "") {
    error.value = "Выберите валюту";
    return;
  } else if (cryptoFirst.value === cryptoSecond.value) {
    error.value = "Выберите другую валюту";
    return;
  }
  error.value = "";

  await converty.ready();

  if (cryptoFirst.value == "BTS" && cryptoSecond == "ETH") {
    result.value = converty.BTC.ETH(amount.value);
  } else if (cryptoFirst.value == "BTS" && cryptoSecond == "USDT") {
    result.value = converty.BTC.USDT(amount.value);
  } else if (cryptoFirst.value == "ETH" && cryptoSecond == "USDT") {
    result.value = converty.ETH.USDT(amount.value);
  } else if (cryptoFirst.value == "ETH" && cryptoSecond == "BTS") {
    result.value = converty.ETH.BTS(amount.value);
  } else if (cryptoFirst.value == "USDT" && cryptoSecond == "ETH") {
    result.value = converty.USDT.ETH(amount.value);
  } else if (cryptoFirst.value == "USDT" && cryptoSecond == "BTS") {
    result.value = converty.USDT.BTS(amount.value);
  }
};
const setCryptoFirst = (val) => {
  cryptoFirst.value = val;
};

const changeAmount = (val) => {
  amount.value = val;
};
</script>

<style lang="scss" scoped>
.head {
  text-align: center;
  font-size: 6em;
  margin-top: -10%;
}
.selector {
  display: flex;
}
.base {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
