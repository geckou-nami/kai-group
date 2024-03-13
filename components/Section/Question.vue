<script setup lang="ts">
const questions = [
  {
    question: '紙カミソリ®は顔、ボディに使えますか？',
    answer  : 'ヒゲおよびボディにもご使用いただけます。',
  },
  {
    question: '紙カミソリ®は何もつけずに剃っても良いですか？',
    answer  : '剃る部分にシェービングフォームなどをつけて使用してください。カミソリを持つ手がすべらないように注意してください。',
  },
  {
    question: '紙カミソリ®はどれくらいの頻度で使えますか？',
    answer  : '紙カミソリ®1個につき、使い切りとなります。',
  },
  {
    question: '紙カミソリ®はどのように廃棄したら良いですか？',
    answer  : 'お使いになられましたらパッケージに入れ、分解せずに各自治体指定の捨て方に従って廃棄してください。また、開封後はなるべく早く使用してください。',
  },
  {
    question: '紙カミソリ®は水に濡らしても大丈夫ですか？',
    answer  : '1回の使用に耐えられる耐水性はございます。浸水させたり、約40度のお湯は紙が変質する可能性があるため入れないでください。',
  },
  {
    question: '紙カミソリ®はどこで購入できますか？',
    answer  : 'この商品は、2022年3月22日より全国のローソン店舗（「ローソンストア100 」を除く）で先行発売いたします。',
  },
]

// インデックス署名を持つオブジェクトの型を指定
const isActive: Record<number, boolean> = reactive(questions.reduce<Record<number, boolean>>((acc, question, index) => {
  acc[index] = false;
  return acc;
}, {}));

// 特定の質問の表示状態を切り替える
const toggleMenu = (index: number) => {
  isActive[index] = !isActive[index];
}
</script>

<template>
  <SectionContainer
    :heading="'06  FAQ'"
  >
    <div :class="$style.question_container">
      <div :class="$style.question_contents">
        <h3 :class="$style.heading_jp">
          よくあるご質問
        </h3>
        <div :class="$style.question_content">
          <dl
            v-for="(question, index) in questions"
            :key="question.question"
            :class="$style.question_list"
          >
            <div 
              :class="$style.question_header"
              @click="() => toggleMenu(index)"
            >
              <dt>{{ question.question }}</dt>
              <span :class="$style.open_button">
                <img 
                  src="~assets/images/qa-icon-plus.png" 
                  alt="click"
                  :class="[$style.open, isActive[index] ? $style.active : '']"
                >
                <img 
                  src="~assets/images/qa-icon-minus.png"
                  alt="click"
                  :class="[$style.close, isActive[index] ? $style.active : '']"
                >
              </span>
            </div>
            <dd 
              :class="isActive[index] ? $style.active : ''"
            >
              {{ question.answer }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang = "scss" module>
.question_container {
  width           : 100%;
  height          : 100vh;
  background-color: var(--white);
  padding         : calc(var(--sp-large) * 4) 0;
}

.question_contents {
  max-width       : 830px;
  margin          : 0 auto;
}

.heading_jp {
  font-size     : var(--fs-heading-jp);
  letter-spacing: var(--letter-spacing-normal);
  line-height   : var(--line-height-narrow);
  color         : var( --darkgray);
  text-align    : center;
}

.question_content {
  width     : 100%;
  margin-top: calc(var(--sp-large) * 3);
}
.question_header {
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  cursor         : pointer;

  dt {
    font-weight: bold;
  }
}

.question_list {
  color     : var(--darkgray);
  font-size : var(--fs-small );
  margin-top: var(--sp-large);

  dd {
    max-height: 0;
    overflow  : hidden;
    transition: max-height 0.5s ease-in-out;
    margin-top: var(--sp-medium);

      &.active {
        max-height: 20px;
    }
  }
}

.open_button {
  background-color: var(--darkgray);
  width           : 24px;
  aspect-ratio    : 1;
  border-radius   : 50px;
}

.open {
  display: block;

  &.active {
    display: none;
  }
}

.close {
  display: none;

  &.active {
    display: block;
  }
}
</style>