<template>
  <q-drawer v-bind="$attrs">
    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="loop"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Reset</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="filter_alt"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Filter</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: "DrawerMenu",
  setup() {
    return {};
  }
})
</script>

