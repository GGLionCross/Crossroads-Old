<template>
  <q-card class="crossroads-card card-front">
    <q-card-section>
      
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CrossroadsCard'
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