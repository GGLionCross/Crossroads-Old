<template>
  <div class="card row justify-center">
    <q-card
      class="card side-back absolute column justify-end items-center"
      :class="{ 'card-rotate': isVisible }"
    >
      <q-btn
        color="green-10"
        icon="play_circle_filled"
        size="3.5em"
        flat
        round
        @click="showCard"
      ></q-btn>
    </q-card>
    <q-card
      class="card side-front absolute"
      :class="{ 'card-rotate': !isVisible }"
    >
      <q-card-section class="full-height column">
        <div v-if="isTriggered" class="text-center text-uppercase text-h6">{{ name }}</div>
        <q-scroll-area class="col-grow">
          <transition-group
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div
              key="trigger"
              v-if="!isTriggered"
              class="full-height absolute"
            >
              <div class="text-italic">{{ trigger }}</div>
              <div class="row justify-around">
                <q-btn
                  color="grey-14"
                  icon="close"
                  size="1.5em"
                  flat
                  round
                ></q-btn>
                <q-btn
                  color="grey-14"
                  icon="undo"
                  size="1.5em"
                  flat
                  round
                  @click="hideCard"
                ></q-btn>
                <q-btn
                  color="red-10"
                  icon="arrow_forward"
                  size="1.5em"
                  flat
                  round
                  @click="showCardInfo"
                ></q-btn>
              </div>
            </div>
            <div key="options" v-else-if="!isShowingResult" class="absolute">
              <div>{{ intro }}</div>
              <q-separator color="grey-10" spaced></q-separator>
              <div v-for="op in options" :key="op.label">
                <div class="option-label text-center text-uppercase text-subtitle2">
                  {{ op.label }}
                </div>
                <div
                  class="cursor-pointer border-blink q-pa-xs"
                  @click="showResult(op.result)"
                >
                  <div>{{ op.subtext }}</div>
                </div>
              </div>
              <div class="row justify-center">
                <q-btn
                  color="grey-14"
                  icon="undo"
                  size="1.5em"
                  flat
                  round
                  @click="hideCardInfo"
                ></q-btn>
              </div>
            </div>
            <div key="result" v-else class="column absolute">
              <div>{{ result }}</div>
              <div class="row justify-around">
                <q-btn
                  color="grey-14"
                  icon="undo"
                  size="1.5em"
                  flat
                  round
                  @click="hideResult"
                ></q-btn>
                <q-btn
                  color="red-10"
                  icon="arrow_forward"
                  size="1.5em"
                  flat
                  round
                  @click="showCardInfo"
                ></q-btn>
              </div>
            </div>
          </transition-group>
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CrossroadsCard',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const isVisible = ref(false);
    const showCard = () => {
      isVisible.value = true;
    }
    const hideCard = () => {
      isVisible.value = false;
    }
    const isTriggered = ref(false);
    const showCardInfo = () => {
      isTriggered.value = true;
    }
    const hideCardInfo = () => {
      isTriggered.value = false;
    }
    const result = ref('Result');
    const isShowingResult = ref(false);
    const showResult = (r) => {
      result.value = r;
      isShowingResult.value = true;
    }
    const hideResult = () => {
      result.value = '';
      isShowingResult.value = false;
    }
    return {
      isVisible,
      showCard,
      hideCard,
      isTriggered,
      showCardInfo,
      hideCardInfo,
      result,
      isShowingResult,
      showResult,
      hideResult,
      trigger: props.info.trigger,
      name: props.info.name,
      intro: props.info.intro,
      options: props.info.options
    }
  }
})
</script>

<style lang="scss" scoped>
$card-width: 90vw;
.card {
  width: $card-width;
  max-height: 80vh;
  aspect-ratio: 2.5 / 3.5;
  background-size: cover;
  backface-visibility: hidden;
  transition: transform 1s ease-in-out;
}
.side-back {
  background-image: url('assets/backgrounds/crossroads-back.jpg');
}
.side-front {
  background-image: url('assets/backgrounds/crossroads-front.jpg');
}
.card-rotate {
  transform: rotateY(180deg);
}
.option-label {
  font-weight: bold;
}
@keyframes border-blink {
  0% { border: 2px solid rgba(255, 255, 255, 1); }
  50% { border: 2px solid rgba(255, 255, 255, 0.5); }
  100% { border: 2px solid rgba(255, 255, 255, 1); }
}
.border-blink {
  animation: border-blink normal 1.5s infinite ease-in-out;
}
</style>