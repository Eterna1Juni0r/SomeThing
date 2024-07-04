<template>
  <h1 class="head">CRYPTO</h1>

  <div class="base">
    <h1>Почему-то не WORKaet SUKA BLYAT</h1>
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
const result = ref(1);

const setCryptoSecond = (val) => {
  cryptoSecond.value = val;
};

async function convert() {
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

  console.log(cryptoFirst.value);
  console.log(cryptoSecond.value);

  if (cryptoFirst.value == "BTC" && cryptoSecond.value == "ETH") {
    console.log("Да выполнено");
    result.value = converty.BTC.ETH(amount.value);
  } else if (cryptoFirst.value == "BTC" && cryptoSecond.value == "USDT") {
    result.value = converty.BTC.USDT(amount.value);
  } else if (cryptoFirst.value == "ETH" && cryptoSecond.value == "USDT") {
    result.value = converty.ETH.USDT(amount.value);
  } else if (cryptoFirst.value == "ETH" && cryptoSecond.value == "BTC") {
    result.value = converty.ETH.BTC(amount.value);
  } else if (cryptoFirst.value == "USDT" && cryptoSecond.value == "ETH") {
    result.value = converty.USDT.ETH(amount.value);
  } else if (cryptoFirst.value == "USDT" && cryptoSecond.value == "BTC") {
    result.value = converty.USDT.BTC(amount.value);
  }

  console.log(cryptoFirst.value);
  console.log(cryptoSecond.value);
}
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
