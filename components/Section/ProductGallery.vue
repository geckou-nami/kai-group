<script setup lang="ts">

</script>

<template>
  <div :class="$style.gallery_container">
    <div :class="$style.image">
      <img src="assets/images/sld-1-pc-l.jpg" alt="gallery">
    </div>
    <div :class="$style.image">
      <img src="assets/images/sld-2-pc-l.jpg" alt="gallery">
    </div>
    
    <!-- <img src="assets/images/sld-1-pc-r.jpg" alt="gallery"> -->
    <!-- <img src="assets/images/sld-1-pc.jpg" alt="gallery">
    <img src="assets/images/sld-2-pc-l.jpg" alt="gallery">
    <img src="assets/images/sld-2-pc-r.jpg" alt="gallery"> -->
  </div>
</template>

<style lang = "scss" module>

.gallery_container {
  width: 100%;
  height:100vh;
  position: relative;
}

.image {
  width:50%;
  overflow: hidden;
  position:absolute;
  top:0;
  left:0;
  /* animation: img-wrap 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; */

  &::before {
    animation: img-wrap 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background-image: url(assets/images/sld-1-pc-l.jpg);
    /* background-size: contain; */
    content: '';
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }
}

@keyframes img-wrap {
  100% {
    transform: translateY(100%);
  }
}
</style>