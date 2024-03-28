<script setup lang="ts">

const props = defineProps<{
  articles: {
    image: string
    title: string
  }[];
  isActive: boolean
}>();

// 表示される記事の最大数を管理するリアクティブなプロパティ
const maxVisibleArticles = ref(3);

// LinkButton の表示状態を制御するためのプロパティ
const showButton = ref(true);

// すべての記事を表示し、ボタンを非表示にする関数
const showAllArticles = () => {
  maxVisibleArticles.value = props.articles.length;
  showButton.value = false; // ボタンを非表示に設定
};

const limitedArticles = computed(() => {
  return props.articles.slice(0, maxVisibleArticles.value);
});
</script>

<template>
  <SectionContainer
    :heading="'03  NEWS'"
  >
    <div :class="$style.news_container">
      <span :class="$style.anime_wrap">
        <h3 
          :class="[$style.heading_jp, isActive ? $style.active :'']"
        >
          ニュース
        </h3>
      </span>
      <div :class="$style.article_wrapper">
        <ul
          v-for="article in limitedArticles"
          :key="article.title"
        >
          <div :class="$style.article_img">
            <img 
              :src="`images/news/${article.image}`"
              :alt="article.title"
            >
          </div>
          <li>{{ article.title }}</li>
          <img 
            src="assets/images/wipo-icon.png"
            alt="link"
            :class="$style.link_icon"
          >
        </ul>
      </div>
      <LinkButton
        v-if="showButton"
        :class="$style.link_button"
        @click="showAllArticles"
      />
    </div>
  </SectionContainer>
</template>

<style lang = "scss" module>
.news_container {
  width           : 100%;
  height          : 100%;
  background-color: var(--lightgray);
  color           : var( --darkgray);
  padding         : calc(var(--sp-large) * 4) 70px;
  margin          : 0 auto;
  position: relative;
}

.heading_jp {
  font-size     : var(--fs-heading-jp);
  letter-spacing: var(--letter-spacing-normal);
  line-height   : var(--line-height-narrow);
  
  &.active {
    animation:text_anime 1s ease-out forwards;
  }
}

.anime_wrap {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.article_wrapper  {
  cursor : pointer;
  padding: calc(var(--sp-large) * 2) calc(var(--sp-large) * 4);
}

ul {
  display      : flex;
  align-items  : center;
  gap          : var(--sp-large);
  border-bottom: 1px solid var(--gray);
  padding      : var(--sp-medium) 0;
}

.article_img {
  width       : 80px;
  aspect-ratio: 1;
}

.link_icon {
  width           : 24px;
  aspect-ratio    : 1;
  border-radius   : 50px;
  background-color: var(--darkgray );
  margin-left: auto;
}

.link_button {
  margin: 0 auto;
}

@keyframes text_anime {
  0% {
    opacity:0;
    transform: translateY(100%);
  }
  100% {
    opacity:1;
    transform: translateY(0);
  }
}
</style>