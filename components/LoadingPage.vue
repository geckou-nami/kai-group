<script setup lang="ts">

</script>

<template>
  <div :class="$style.loading_screen">
    ここにローディング画面の内容を書く
  </div>
</template>

<style lang = "scss" module>
.loading_screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
