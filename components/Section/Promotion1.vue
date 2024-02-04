<!-- <script setup lang="ts">

</script> -->

<template>
  <div :class="$style.promotion1_container">
    <div :class="$style.promotion1_img">
      <img 
        src="assets/images/sec1-img.jpg"
        alt="イメージ画像"
      >
    </div>
    <div :class="$style.section_contents">
      <h2 
        class="heading_en"
        :class="$style.heading_wrapper"
      >
        PLASTIC<br>TO<br>PAPER
      </h2>
      <div :class="$style.text_wrapper">
        <h2 class="heading_jp">
          プラスチックから<br>「紙」へシフト。
        </h2>
        <p class="lead_sentence">
          ・カミソリを脱プラスチックなアイテムへ<br>
          ・使い切りだからいつでも清潔で快適<br>
          ・本体薄さ3mmで薄くて軽いから、、手軽に持ち運びできます。
        </p>
        <div class="text_content">
          <p class="section_text">
            ハンドルに紙、刃体（ヘッド部含む）に金属を使用し、“脱プラスチック※”を実現。
            モノづくりを通してできるエコな取り組みのひとつとして、プラスチック排出量を
            減らすための一助になればと考えています。折り紙のように、一枚の紙を組み立て
            て使う約3mmの薄型の本体は、重さ約4gと超軽量。薄くて軽いから、バッグにサッ
            と入れて、手軽に持ち運べます。紙の材質には、耐水性と剃る時の安定感を兼ね備
            え、組み立てやすい程よい厚みのものを厳選しました。1回使い切りなので、細菌の
            繁殖やサビの心配がなく、いつでも清潔で快適に使用できます。
          </p>
        </div>
        <p class="info_text">
          ※ 当社製3枚刃カミソリとの比較で98%のプラスチック部分を削減
        </p>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" module>
.promotion1_container {
  width           : 100%;
  height: 100%;
  background-color: var(--lightgray);
  position        : relative;
  overflow: hidden;
}

.promotion1_img {
  position    : absolute;
  right       : 50%;
  margin-right: -232px;
  top         : -115px;
  width       : 1100px;

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
  position   : absolute;
  left       : 50%;
  margin-left: calc(var(--sp-large) * -4);
}

.text_wrapper {
  color         : var(--blue);
  position      : absolute;
  bottom        : 0;
  right         : 0;
  padding-bottom: calc(var(--sp-large) * 4);
  padding-right : calc(var(--sp-large) * 4);
}
</style>