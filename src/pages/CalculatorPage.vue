<template>
  <h1 class="head">CRYPTO</h1>

  <div class="base">
    <h1>Почему-то не WORKaet SUKA BLYAT</h1>
    <CryptoInput
      :changeAmount="changeAmount"
      :convert="convert"
      :favorite="favorite"
    />

    <p v-if="error">{{ error }}</p>
    <p v-if="result !== 0">{{ result }}</p>

    <CryptoFavorite
      :favs="favs"
      v-if="favs.length > 0"
      :getFromFavs="getFromFavs"
    />

    <div class="selector">
      <CryptoSelector
        :setCrypto="setCryptoFirst"
        style="margin: 10px"
        :cryptoNum="cryptoFirst"
      />
      <CryptoSelector
        :setCrypto="setCryptoSecond"
        style="margin: 10px"
        :cryptoNum="cryptoSecond"
      />
    </div>
  </div>
</template>

<script setup>
// import {
//   CryptoFavorite,
//   CryptoSelector,
//   CryptoInput,
// } from "@/src/component/CryptoComponent";
import CryptoFavorite from "@/component/CryptoComponent/CryptoFavorite.vue";
import CryptoSelector from "@/component/CryptoComponent/CryptoSelector.vue";
import CryptoInput from "@/component/CryptoComponent/CryptoInput.vue";
import CryptoConvert from "crypto-convert";
import { ref } from "vue";
/* Странный баг, если нажать на шапке крипто потом другую кнопку и обратно крипто, сайт ломается. Я хз почему*/

const converty = new CryptoConvert();
const amount = ref(0);
const cryptoFirst = ref("");
const cryptoSecond = ref("");
const error = ref("");
const result = ref(0);
const favs = ref([]);

const getFromFavs = (index) => {
  cryptoFirst.value = favs.value[index].from;
  cryptoSecond.value = favs.value[index].to;
};

const favorite = () => {
  if (errorCheck(cryptoFirst, cryptoSecond)) {
    return;
  }
  error.value = "";

  favs.value.push({
    from: cryptoFirst.value,
    to: cryptoSecond.value,
  });
};

const setCryptoSecond = (val) => {
  cryptoSecond.value = val;
};

async function convert() {
  if (amount.value <= 0) {
    error.value = "Введите число больше 0";
    return;
  } else if (errorCheck(cryptoFirst, cryptoSecond)) {
    return;
  }
  error.value = "";

  await converty.ready();

  if (cryptoFirst.value == "BTC" && cryptoSecond.value == "ETH") {
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
}

const setCryptoFirst = (val) => {
  cryptoFirst.value = val;
};

const changeAmount = (val) => {
  amount.value = val;
};

const errorCheck = (cryptoFirst, cryptoSecond) => {
  if (cryptoFirst.value === "" || cryptoSecond.value === "") {
    error.value = "Выберите валюту";
    return true;
  } else if (cryptoFirst.value === cryptoSecond.value) {
    error.value = "Выберите другую валюту";
    return true;
  }
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
