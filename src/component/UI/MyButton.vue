<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="scss" scoped>
.btn {
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
.btn:hover {
  transform: scale(1.1) translateY(-2px);
}
button:disabled {
  background: #796427;
  cursor: not-allowed;
}
</style>
