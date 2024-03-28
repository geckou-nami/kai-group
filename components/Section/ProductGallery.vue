<!-- <script setup lang="ts">

</script> -->

<template>
  <div :class="$style.gallery_container">
    <div :class="$style.container">
      <div :class="$style.left">
        <img 
          src="assets/images/sld-1-pc-l.jpg"
          alt="製品画像"
        >
      </div>
      <div :class="$style.right">
        <img 
          src="assets/images/sld-2-pc-r.jpg"
          alt="製品画像"
        >
      </div>
    </div>
  </div>
</template>

<style lang = "scss" module>

.gallery_container {
  width   : 100%;
  position: relative;
}

.container {
  --container-width    : 100vw;
  --animate-duration   : 4s;
  display              : grid;
  grid-template-columns: 1fr 1fr;
  width                : var(--container-width);
  aspect-ratio         : 2 / 1;
}

.left {
  width           : 100%;
  height          : 100%;
  position        : relative;
  
  &::before {
    content         : '';
    display         : block;
    width           : 100%;
    background-image: url(assets/images/sld-2-pc-l.jpg);
    background-size : calc(var(--container-width) / 2) calc(var(--container-width) / 2);
    background-color: var(--blue);
    position        : absolute;
    left            : 0;
    animation       : slideToggleDown var(--animate-duration) infinite;
  }
}

.right {
  width           : 100%;
  height          : 100%;
  position        : relative;
  background-image: radial-gradient(circle, blue calc(100px / 2 - 1px), transparent calc(100px / 2));

  &::before {
    content         : '';
    display         : block;
    width           : 100%;
    background-image: url(assets/images/sld-1-pc-r.jpg);
    background-size : calc(var(--container-width) / 2) calc(var(--container-width) / 2);
    background-color: var(--blue);
    position        : absolute;
    left            : 0;
    animation-delay: calc(var(--animate-duration) / 2);
    animation       : slideToggleUp var(--animate-duration) infinite;
  }
}

@keyframes slideToggleDown {
  0% {
    height             : 0;
    top                : 0;
    background-position: top;
  }

  49% {
    height             : 100%;
    top                : 0;
    background-position: top;
  }

  50% {
    height             : 100%;
    top                : revert;
    bottom             : 0;
    background-position: bottom;
  }

  100% {
    height             : 0;
    bottom             : 0;
    background-position: bottom;
  }
}

@keyframes slideToggleUp {
  0% {
    height             : 100%;
    top                : 0;
    background-position: top;
  }

  49% {
    height             : 0;
    top                : 0;
    background-position: top;
  }

  50% {
    height             : 0;
    top                : revert;
    bottom             : 0;
    background-position: bottom;
  }

  100% {
    height             : 100%;
    bottom             : 0;
    background-position: bottom;
  }
}
</style>