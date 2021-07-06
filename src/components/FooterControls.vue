<template>
  <q-footer>
    <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="settings"
          aria-label="Settings"
          @click="emitOpenMenu"
        />

        <q-toolbar-title>
          Crossroads
        </q-toolbar-title>
        
        <q-btn
          :icon="disablePrevButton ? 'pan_tool' : 'chevron_left'"
          flat
          round
          :disable="disablePrevButton"
          @click="showPrevCard"
        >
        </q-btn>

        <div class="q-px-md">
          {{ counter + 1 }} / {{ cardMax }}
        </div>

        <q-btn
          :icon="disableNextButton ? 'pan_tool' : 'chevron_right'"
          flat
          round
          :disable="disableNextButton"
          @click="showNextCard"
        >
        </q-btn>
      </q-toolbar>
  </q-footer>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'FooterControls',
  setup(props, { emit }) {
    const store = useStore();
    const cards = computed(() => store.getters.getFilteredCards);
    const counter = computed(() => store.getters.getCounter);
    const disablePrevButton = computed(() => counter.value < 1);
    const showPrevCard = () => {
      store.commit('setCounter', counter.value - 1);
    }
    const disableNextButton = computed(() => counter.value >= cards.value.length - 1);
    const showNextCard = () => {
      store.commit('setCounter', counter.value + 1);
    }
    const emitOpenMenu = () => {
      emit('openMenu');
    }
    return {
      cardMax: cards.value.length,
      counter,
      disablePrevButton,
      showPrevCard,
      disableNextButton,
      showNextCard,
      emitOpenMenu
    };
  }
})
</script>

