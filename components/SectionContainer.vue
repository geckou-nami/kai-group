<script setup lang="ts">

</script>

<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang = "scss" module>
.container {
  width:100%;
  padding: 0 70px;
  background-color: cadetblue;
}
</style>