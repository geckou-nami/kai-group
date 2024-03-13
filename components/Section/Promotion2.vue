<!-- <script setup lang="ts">

</script> -->

<template>
  <SectionContainer
    :heading="'02 GENDER FREE DESIGN'"
  >
    <div :class="$style.promotion2_container">
      <div :class="$style.section_contents">
        <div :class="$style.promotion2_img">
          <img 
            src="assets/images/sec2-img.jpg"
            alt="イメージ画像"
          >
        </div>
        <h2 
          class="heading_en"
          :class="$style.heading_wrapper"
        >
          GENDER<br>FREE<br>DESIGN
        </h2>
        <div :class="$style.text_wrapper">
          <h2 class="heading_jp">
            ジェンダーフリーな<br>デザイン。
          </h2>
          <p class="lead_sentence">
            ・シンプルで、手に取りやすい形。
          </p>
          <div class="text_content">
            <p class="section_text">
              すべての人に手に取ってほしいから、デザインは、とにかくシンプルに。
              カミソリらしいおなじみのT型のフォルムをベースに、シャープすぎず、
              柔らかすぎないフォルムで。紙の強度や厚み、持ち手の長さは、みんなに
              ちょうどいいサイズ感に。誰にでもすんなりと、違和感なく手に取ってい
              ただけます。パッと見て“紙”と分かるクラフト色、表面には発色の良いカ
              ラーをプリント。性別も年齢も限定しない、いつでもどこでも使える、ニ
              ュートラルな見た目と使い心地です。
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang = "scss" module>
.promotion2_container {
  width           : 100%;
  height          : 100%;
  position        : relative;
  overflow        : hidden;
  background-color: var(--lightblue);
  /* padding: 0 70px; */
}

.promotion2_img {
  position: absolute;
  left: 50%;
  margin-left: -230px;
  top: -117px;
  width: 1100px;

  > img {
    width: 100%;
  }
}

.section_contents {
  width     : 100%;
  min-height: 100vh;
  position  : relative;
  padding   : calc(var(--sp-large) * 4)  calc(var(--sp-large) * 4);
  margin    : 0 auto;
}

.heading_wrapper {
  opacity: 0.15;
  position   : absolute;
  margin-left: calc(var(--sp-large) * 2);
}

.text_wrapper {
  position      : absolute;
  bottom        : 0;
  padding-bottom: calc(var(--sp-large) * 4);
  padding-right : calc(var(--sp-large) * 4);
}

.section_heading {
  position: absolute;
  top     : 50px;
  left    : 10px;
}
</style>