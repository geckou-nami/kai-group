<script setup lang="ts">
const props = defineProps <{
  heading : string
}>()

</script>

<template>
  <div :class="$style.container">
    <slot />
    <SectionHeading 
      :heading="heading"
      :class="$style.section_heading"
    />
  </div>
</template>

<style lang = "scss" module>
.container {
  width           : 100%;
  padding         : 0 70px;
  background-color: pink;
  position        : relative;
}

.section_heading {
  position: absolute;
  top     : 80px;
  left    : 0px;
}
</style>