<script setup lang="ts">

</script>

<template>
  <div :class="$style.gallery_container">
    <div :class="$style.gallery_back">
      <div :class="$style.gallery_back_content">
        <img src="assets/images/sld-1-pc-l.jpg" alt="">
      </div>
      <div :class="$style.gallery_back_content">
        <img src="assets/images/sld-2-pc-r.jpg" alt="">
      </div>
    </div>
    <div :class="$style.image_wrap">
      <div :class="$style.image_left" />
      <div :class="$style.image_right" />
    </div>
  </div>
</template>

<style lang = "scss" module>

.gallery_container {
  width: 100%;
  height:100%;
  position: relative;
}

.gallery_back {
  width:100%;
  display: flex;
  position: relative;
}

.image_wrap {
  width:100%;
  height:100%;
  display: flex;
  position: absolute;
  top:0;
  left:0;
}

.image_left {
  width   : 100%;
  position: relative;

  &::after {
    animation       : img-down-1 4s infinite;
    background-image: url(assets/images/sld-2-pc-l.jpg);
    background-size : cover;
    content         : '';
    position        : absolute;
    left            : 0;
  }
}

.image_right {
  width   : 100%;
  position: relative;
    /* background-color: pink; */

  &::after {
    animation       : img-down-2 4s infinite;
    background-image: url(assets/images/sld-1-pc-r.jpg);
    background-size : cover;
    content         : '';
    position        : absolute;
    right           : 0;
  }
}

@keyframes img-down-1 {
  0% {
    height: 0%;
    width : 100%;
    top   : 0;
    bottom: auto;
  }
  33% {
    height: 100%;
    width : 100%;
    top   : 0;
    bottom: auto;
  }
  66% {
    height: 100%;
    width : 100%;
    bottom: 0;
    top   : auto;
  }
  100% {
    height: 0%;
    width : 100%;
    bottom: 0;
    top   : auto;
  }
}

@keyframes img-down-2 {
  0% {
    height: 100%;
    width : 100%;
    top   : 0;
    bottom: auto;
  }
  33% {
    height: 0%;
    width : 100%;
    top   : 0;
    bottom: auto;
  }
  66% {
    height: 0%;
    width : 100%;
    bottom: 0;
    top   : auto;
  }
  100% {
    height: 100%;
    width : 100%;
    bottom: 0;
    top   : auto;
  } 
}
</style>