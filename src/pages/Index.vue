<template>
  <q-page class="flex flex-center">
    <crossroads-card :info="cards[0]"></crossroads-card>
  </q-page>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import CrossroadsCard from 'components/CrossroadsCard.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    CrossroadsCard
  },
  setup() {
    const store = useStore();
    const cards = computed(() => store.getters.getCards);

    return {
      cards
    }
  }
})
</script>
