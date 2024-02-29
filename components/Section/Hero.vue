<script setup lang="ts">

</script>

<template>
  <div :class="$style.hero_container">
    <div :class="$style.hero_title_wrapper">
      <h2 :class="$style.hero_title">
        剃るまえから、<br>心地いい。
      </h2>
      <p :class="$style.hero_lead_sentence">
        自分らしく、選べる自由。
      </p>
      <p :class="$style.hero_heading">
        貝印のカミソリ
      </p>
    </div>

    <div :class="$style.hero_text_wrapper">
      <p :class="$style.hero_heading">
        日々の暮らしを、もっと心地よく。<br>紙カミソリ®と作る、明日の私。
      </p>
      <div :class="$style.hero_text">
        <p>
          これまで主流だったプラスチック製カミソリとは一線を画す、<br>
          紙と金属でできた世界初の「紙カミソリ®」。
        </p>
        <p>
          1回使い切りで気持ちよく、日々にやさしく寄り添えるカミソリを作りたい…<br>
          そんな想いから生まれました。
        </p>
        <p>
          刃物を100年以上作り続けてきたからこそ、<br>
          今もこれからも、あなたのそばに。
        </p>
        <p>
          “当たり前”のその先に、紙カミソリ®という選択肢を。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" module>

.hero_container {
  width:100%;
  height:100%;
  background-image: url('assets/images/introkv_05_fix.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0 calc(var(--sp-large) * 8);
}

.hero_bg {
  position: fixed;
  top:0;
  left:0;
}

.hero_title_wrapper {
  width          : 100%;
  height         : 100vh;
  display        : flex;
  flex-direction : column;
  justify-content: center;
  /* position: absolute; */
} 

.hero_text_wrapper {
  padding-top: calc(var(--sp-large) * 2);
  padding-bottom : calc(var(--sp-large) * 5);
  /* position: absolute; */
}

.hero_title {
  font-size: var(--fs-hero-title);
  font-weight: 500;
  letter-spacing: var(--letter-spacing-normal);
  line-height   : var(--line-height-narrow);
  margin-bottom : var(--sp-larger);
}

.hero_lead_sentence {
  font-size: var(--fs-hero-lead);
  font-weight: bold;
}

.hero_heading {
  font-size: var(--fs-hero-heading);
  font-weight: bold;
  margin-bottom : var(--sp-medium);
}

.hero_text {

  p {
    font-size: var(--fs-hero-text);
    margin-bottom : var(--sp-medium);
  }
}

</style>