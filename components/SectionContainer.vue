<script setup lang="ts">
const props = defineProps <{
  heading : string
}>()

</script>

<template>
  <div :class="$style.section_container">
    <SectionHeading 
      :heading="heading"
      :class="$style.section_heading"
    />
    <slot />
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.section_container {
  width           : 100%;
  position        : relative;
}

.section_heading {
  position: absolute;
  top     : 50px;
  left    : 65px;
  transform: rotate(90deg);
  transform-origin: left;

  @include mediaScreen('mobile') {
    color:red;
  }
}
</style>