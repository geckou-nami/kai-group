<script setup lang="ts">
// const headings = [
//   {
//     sectionName: 'PLASTIC TO PAPER', 
//   },
//   {
//     sectionName: 'GENDER FREE DESIGN', 
//   },
//   {
//     sectionName: 'NEWS', 
//   },
//   {
//     sectionName: 'HOW TO SET UP', 
//   },
//   {
//     sectionName: 'NEW CHOICES', 
//   },
//   {
//     sectionName: 'FAQ', 
//   },
// ]

const props = defineProps <{
  heading : string
}>();

</script>

<template>
  <div :class="$style.section_heading">
    <!-- <h2
      v-for="heading in headings"
      :key="heading.sectionName"
    > -->
    <h2>
      {{ heading }}
    </h2>
  </div>
</template>

<style lang = "scss" module>

.section_heading {
  height:100%;
  width:100%;
  z-index: var(--z-index-nav);

  h2 {
  font-size: 22px;
  color:red;
  transform: rotate(90deg);
  }
}
</style>