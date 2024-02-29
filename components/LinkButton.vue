<script setup lang="ts">

</script>

<template>
  <div :class="$style.button_container">
    <a :class="$style.more_button">
      <p>もっと見る</p>
      <img 
        src="assets/images/news-icon.svg"
        alt="+"
      >
    </a>
  </div>
</template>

<style lang = "scss" module>
.button_container {
  width           : 240px;
  height          : 60px;
  background-color: var(--white);
}

.more_button {
  width          : 100%;
  height         : 100%;
  color          : var(--black);
  font-size      : var( --fs-small);
  display        : flex;
  align-items    : center;
  justify-content: space-between;
  padding        : var(--sp-small) var(--sp-medium);
  box-shadow     : 0 4px 8px rgba(0,0,0,0.25);
}

img {
  color: var(--gray);
}
</style>