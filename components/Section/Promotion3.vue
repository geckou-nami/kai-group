<!-- <script setup lang="ts">

</script> -->

<template>
  <div :class="$style.promotion3_container">
    <div :class="$style.promotion3_img">
      <img 
        src="assets/images/sec4-img.jpg"
        alt="イメージ画像"
      >
    </div>
    <div :class="$style.section_contents">
      <h2 
        class="heading_en"
        :class="$style.heading_wrapper"
      >
        NEW<br>CHOICES
      </h2>
      <div :class="$style.text_wrapper">
        <p class="lead_sentence">
          より良い未来のためになる、<br>
          <span>
            紙カミソリという
          </span>
        </p>
        <h2 class="heading_jp">
          新しい選択を<br>提供したい
        </h2>
        <div class="text_content">
          <p class="section_text">
            今までにない“紙”で作るカミソリの開発は、すべてが手探り状態でした。
            紙の選定にはじまり、形状を決めるための試作は100個近くに。
            構想から約2年を費やしました。

            江戸時代に使っていた刀が今も残っているように、
            これからの時代を生きていくうえで外すことのできない、
            サステナブルという考え方を未来へつないでいけるよう、
            刃物メーカーとして地球に優しいものづくりを続けていきます。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" module>
.promotion3_container {
  width           : 100%;
  height          : 100%;
  position        : relative;
  overflow        : hidden;
  background-color: var(--gray);
}

.promotion3_img {
  position: absolute;
  left: 50%;
  margin-left: -260px;
  top: -115px;
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
  position   : absolute;
  margin-left: calc(var(--sp-large) * -2);
}

.text_wrapper {
  color         : var(--blue);
  position      : absolute;
  bottom        : 0;
  padding-bottom: calc(var(--sp-large) * 4);
  padding-right : calc(var(--sp-large) * 4);
}
</style>