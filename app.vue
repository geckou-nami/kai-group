<script setup lang="ts">
import ProductGallery from './components/Section/ProductGallery.vue';

const articles = await fetch('/json/news.json').then(res => res.json())
</script>

<template>
  <!-- <LoadingPage /> -->
  <SectionHero />
  <SectionPromotion1 />
  <SectionPromotion2 />
  <SectionNews 
    :articles="articles"
  />
  <SectionSetupGuide />
  <ProductGallery />
  <SectionPromotion3 />
  <SectionQuestion />
  <SectionFooter />
</template>

<style lang = "scss" module>



</style>