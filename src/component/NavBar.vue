<template>
  <div class="navbar">
    <button @click="$router.push('/')">Main</button>
    <button @click="$router.push('/WeatherPage')">Weather</button>
  </div>
</template>

<script></script>

<style>
.navbar {
  width: auto;
  height: 50px;
  background-color: lightcyan;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.navbar button {
  background: #e3bc4b;
  color: #fff;
  border-radius: 10spx;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
  margin: 0 10px;
}
.navbar button:hover {
  transform: scale(1.1) translateY(-2px);
}
</style>
