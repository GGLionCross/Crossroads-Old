<template>
  <q-page class="flex flex-center">
    <q-carousel
      v-model="selected"
      class="cr-carousel full-height full-width"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
    >
      <q-carousel-slide
        v-for="card in cards"
        :key="card.name"
        :name="card.name"
        class="row justify-center"
      >
        <crossroads-card :info="card"></crossroads-card>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import CrossroadsCard from 'components/CrossroadsCard.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    CrossroadsCard
  },
  setup() {
    const store = useStore();
    store.dispatch('resetCrossroads');
    const cards = computed(() => store.getters.getFilteredCards);
    const selected = computed(() => cards.value[store.getters.getCounter].name);

    return {
      selected,
      cards
    }
  }
})
</script>

<style lang="scss" scoped>
.cr-carousel {
  background-color: inherit;
}
</style>
