<template>
  <q-footer class="bg-header-footer">
    <q-toolbar>
      <div class="col-4">
        <q-toolbar-title class="mobile-hide">
          Crossroads
        </q-toolbar-title>
      </div>

      <div class="col-4 row justify-center items-center no-wrap">
        <q-btn
          :icon="disablePrevButton ? 'pan_tool' : 'chevron_left'"
          flat
          round
          :disable="disablePrevButton"
          @click="showPrevCard"
        >
        </q-btn>

        <div class="q-px-md text-no-wrap">
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
      </div>
        
      <div class="col-4 row justify-end">
        <q-btn
          flat
          dense
          round
          icon="settings"
          aria-label="Settings"
          @click="emitOpenMenu"
        />
      </div>
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
    const cardMax = computed(() => store.getters.getFilteredCards.length);
    const counter = computed(() => store.getters.getCounter);
    const disablePrevButton = computed(() => counter.value < 1);
    const showPrevCard = () => store.dispatch('showPrevCard');
    const disableNextButton = computed(() => counter.value >= cardMax.value - 1);
    const showNextCard = () => store.dispatch('showNextCard');
    const emitOpenMenu = () => {
      emit('openMenu');
    }
    return {
      cardMax,
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

