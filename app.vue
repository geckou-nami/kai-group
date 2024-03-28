<script setup lang="ts">
import ProductGallery from './components/Section/ProductGallery.vue';
const articles = await fetch('/json/news.json').then(res => res.json())

const currentSectionId = ref('sectionHero')
const observerOptions = {
  root      : null,
  rootMargin: '0px',
  threshold : 0.6,
}

onMounted(() => {
 // observerインスタンスを作成
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentSectionId.value = entry.target.id;
        console.log('現在ビューポート内のセクション:', currentSectionId.value);
      }
    });
  }, observerOptions);

  // 監視対象のセクション要素を選択して監視する
  document.querySelectorAll('section > [id]').forEach(section => {
    observer.observe(section);
  });
});


</script>

<template>
  <!-- <LoadingPage /> -->
  <section>
    <!-- <SectionHero 
      id="sectionHero"
    /> -->
    <SectionPromotion1 
      id="sectionPromotion1"
      :isActive="currentSectionId === 'sectionPromotion1'"
    />
    <SectionPromotion2 
      id="sectionPromotion2"
      :isActive="currentSectionId === 'sectionPromotion2'"
    />
    <SectionNews 
      id="sectionNews"
      :articles="articles"
      :isActive="currentSectionId === 'sectionNews'"
    />
    <!-- <SectionSetupGuide 
      id="sectionSetupGuide"
      :isActive="currentSectionId === 'sectionSetupGuide'"
    /> -->
    <!-- <ProductGallery 
      id="productGallery"
    /> -->
    <SectionPromotion3 
      id="sectionPromotion3"
      :isActive="currentSectionId === 'sectionPromotion3'"
    />
    <SectionQuestion 
      id="SectionQuestion"
      :isActive="currentSectionId === 'SectionQuestion'"
    />
    <SectionFooter />
  </section>
</template>

<style lang = "scss" module>



</style>


