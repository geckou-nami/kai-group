<script setup lang="ts">
const heroTitle = ref<HTMLElement | null>(null);

onMounted(() => {
  if (heroTitle.value) {
    // ノードリストを取得するために、仮想のdivを作成してinnerHTMLに代入
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = heroTitle.value.innerHTML;
    const nodes = Array.from(tempDiv.childNodes);

    // ノードを処理して新しいHTMLを生成
    const newHTML = nodes.map((node, index) => {
      // テキストノードの場合
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        const characters = [...text]; // スプレッド構文で文字列を配列に変換
        return characters.map((char, charIndex) => {
          const delay = (index + charIndex) * 0.1; // 遅延を計算
          return `<span style="animation-delay: ${delay}s;">${char}</span>`;
        }).join('');
      } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'BR') {
        // <br>タグの場合はそのまま返す
        return node.outerHTML;
      }
    }).join('');

    // 新しいHTMLを元の要素にセット
    heroTitle.value.innerHTML = newHTML;
  }
});
</script>

<template>
  <div :class="$style.hero_container">
    <img 
      src="assets/images/ft-kai-logo.png"
      :class="$style.hero_logo"
    >
    <div :class="$style.hero_bg">
      <img 
        src="assets/images/introkv_05_fix.jpg"
        alt="背景"
      >
    </div>
    <div :class="$style.hero_title_wrapper">
      <h2 
        ref="heroTitle"
        :class="$style.hero_title"
      >
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
  max-width            : var(--hero-max-width);
  height               : 100%;
  padding              : 0 70px;
  margin               : 0 auto;
}

.hero_bg {
  width:100%;
  height:210%;
  position: relative;
  pointer-events: none;

  > img {
    position:fixed;
    /* width:100%; */
    width:2000px;
    top     : 0;
    left    : 0;
  }
}

.hero_logo {
  position:absolute;
  top:0;
  left:0;
  margin:var(--sp-large);
  width:60px;
}

.hero_title_wrapper {
  height               : 100vh;

  display        : flex;
  flex-direction : column;
  justify-content: center;
} 

.hero_text_wrapper {
  /* max-width            : 1054px;
  height               : 100%;
  margin               : 0 auto; */
  /* padding-left: 70px;
  padding-right: 70px; */
  padding-top   : calc(var(--sp-large) * 2);
  padding-bottom: calc(var(--sp-large) * 5);
}

.hero_title {
  font-size     : var(--fs-hero-title);
  font-weight   : 500;
  letter-spacing: var(--letter-spacing-normal);
  line-height   : var(--line-height-narrow);
  margin-bottom : var(--sp-larger);


  span {
    opacity: 0;
    animation:text_anime_on 1s ease-out forwards;
  }
}

@keyframes text_anime_on {
  0% {
    opacity:0;
    transform: translateY(100%);
  }
  100% {
    opacity:1;
    transform: translateY(0);
  }
}

.hero_lead_sentence {
  font-size  : var(--fs-hero-lead);
  font-weight: bold;
  animation:small_text_anime_on 1s ease-out forwards;
  animation-delay: 1s;
  opacity: 0;
}

.hero_heading {
  font-size    : var(--fs-hero-heading);
  font-weight  : bold;
  margin-bottom: var(--sp-medium);
  animation:small_text_anime_on 1s ease-out forwards;
  animation-delay: 1.2s;
  opacity: 0;
}

.hero_text {
  p {
    font-size    : var(--fs-hero-text);
    margin-bottom: var(--sp-medium);
    animation:small_text_anime_on 1s ease-out forwards;
    animation-delay: 1.5s;
    opacity: 0;
  }
}

@keyframes small_text_anime_on {
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