<template>
  <q-page class="flex flex-center">
    <crossroads-card></crossroads-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useGetters } from 'vuex-composition-helpers';
import { GET_CARDS } from 'store/constants/getters';
import CrossroadsCard from 'components/CrossroadsCard.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    CrossroadsCard
  },
  setup() {
    const { cards } = useGetters({ cards: GET_CARDS });
  }
})
</script>
