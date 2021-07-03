<template>
  <q-card class="crossroads-card card-front">
    <q-card-section class="full-height">
      <q-scroll-area class="full-height">
        <div class="text-center text-h6">{{ name }}</div>
        <div class="text-italic">{{ trigger }}</div>
      </q-scroll-area>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CrossroadsCard',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      name: props.info.name,
      trigger: props.info.trigger
    }
  }
})
</script>

<style lang="scss" scoped>
$card-height: 70vh;
.crossroads-card {
  /* 2.5in x 3.5in */
  width: calc(#{$card-height} * 2.5 / 3.5);
  height: $card-height;
  background-size: cover;
}
.card-back {
  background-image: url('assets/backgrounds/crossroads-back.jpg');
}
.card-front {
  background-image: url('assets/backgrounds/crossroads-front.jpg');
}
</style>