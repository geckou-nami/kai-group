<script setup lang="ts">
const props = defineProps <{
  isActive: boolean
}>();

</script>

<template>
  <SectionContainer
    :heading="'04  HOW TO SET UP'"
  >
    <div :class="$style.setup_guide_container">
      <div :class="$style.setup_guid_contents">
        <h3 
          :class="[$style.heading_jp, isActive ? $style.active :'']"
        >
          紙カミソリの組み立て方
        </h3>
        <div :class="$style.setup_guide_content">
          <iframe 
            width="640" 
            height="360" 
            src="https://www.youtube.com/embed/rLRmlY7seko?si=UrfLjd9mxQWhDvB9" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen 
          />
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang = "scss" module>
.setup_guide_container {
  width           : 100%;
  height          : 100vh;
  background-color: var(--white);
  padding         : calc(var(--sp-large) * 4) 70px;
  position: relative;
}

.setup_guid_contents {
  max-width       : 830px;
  margin          : 0 auto;
}

.heading_jp {
font-size     : var(--fs-heading-jp);
letter-spacing: var(--letter-spacing-normal);
line-height   : var(--line-height-narrow);
color         : var( --darkgray);
text-align    : center;

  &.active {
    color:red;
  }
}

.setup_guide_content {
  width: 100%;
  margin-top: calc(var(--sp-large) * 3);

  iframe {
    margin: 0 auto;
  }
}
</style>