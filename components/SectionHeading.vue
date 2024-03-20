<script setup lang="ts">
const props = defineProps <{
  heading : string
}>();

</script>

<template>
  <div :class="$style.section_heading">
    <h2>
      {{ heading }}
    </h2>
  </div>
</template>

<style lang = "scss" module>

.section_heading {
  z-index: var(--z-index-nav);

  h2 {
    font-size: var(--fs-smaller);
    color    : var(--darkgray);
    }
}
</style>