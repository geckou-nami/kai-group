<!-- <script setup lang="ts">

</script> -->

<template>
  <div :class="$style.footer_container">
    <div :class="$style.footer_img_wrapper">
      <img 
        src="assets/images/ft-bnr1.jpg"
        alt="Kai_group" 
        :class="$style.footer_img"
      >
      <img
        src="assets/images/ft-bnr2.jpg"
        alt="Kai_group"
        :class="$style.footer_img"
      >
      <img 
        src="assets/images/ft-bnr3.jpg"
        alt="Kai_group"
        :class="$style.footer_img"
      >
    </div>
    <img 
      src="assets/images/ft-kai-logo.png" 
      alt="Kai_group" 
      :class="$style.company_logo"
    >
    <p :class="$style.footer_copy">
      Copyright © kai corporation. and kai industries co., ltd.<br>
      All Rights Reserved.
    </p>
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.footer_container {
  background-color: var(--white);
  width           : 100%;
  padding         : calc(var(--sp-large) * 3) 0;
  display        : flex;
  flex-direction: column;
  align-items    : center;
  justify-content: center;
}

.footer_img_wrapper {
  max-width      : var(--section-max-width);
  display        : flex;
  justify-content: center;
  gap            : var(--sp-medium);

  @include mediaScreen('mobile') {
    background-color: pink;
    display       : flex;
    flex-direction: column;
    align-items   : center;
    gap           : var(--sp-large);
  }

  /* >img {
    width: 100%;
  } */
}

.company_logo {
  width     : 80px;
  margin    : 0 auto;
  margin-top: calc(var(--sp-large) * 2);
}

.footer_copy {
  color         : #222222;
  font-size     : var(--fs-smaller);
  letter-spacing: var(--letter-spacing-narrow);
  text-align    : center;
  margin-top    : calc(var(--sp-large) * .5)
}
</style>