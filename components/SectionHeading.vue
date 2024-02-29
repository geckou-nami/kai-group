<script setup lang="ts">
const headings = [
  {
    sectionName: 'PLASTIC TO PAPER', 
  },
  {
    sectionName: 'GENDER FREE DESIGN', 
  },
  {
    sectionName: 'NEWS', 
  },
  {
    sectionName: 'HOW TO SET UP', 
  },
  {
    sectionName: 'NEW CHOICES', 
  },
  {
    sectionName: 'FAQ', 
  },
]

</script>

<template>
  <div :class="$style.section_heading">
    <h2
      v-for="heading in headings"
      :key="heading.sectionName"
    >
      {{ heading.sectionName }}
    </h2>
  </div>
</template>

<style lang = "scss" module>

.section_heading {
  height:100%;
  width:100%;

  h2 {
  font-size: 22px;
  color:red;
}
}
</style>