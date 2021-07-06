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

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
  </q-footer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'FooterControls',
  setup(props, { emit }) {
    const emitOpenMenu = () => {
      emit('openMenu');
    }
    return {
      emitOpenMenu
    };
  }
})
</script>

