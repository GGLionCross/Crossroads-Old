<template>
  <q-drawer v-bind="$attrs">
    <q-list>
      <q-item
        v-for="item in DRAWER_MENU"
        :key="item.name"
        clickable
      >
        <q-item-section avatar>
          <q-icon :name="item.icon"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { DRAWER_MENU } from 'src/config/drawer-menu.js';

export default defineComponent({
  name: "DrawerMenu",
  setup() {
    return {
      DRAWER_MENU
    };
  }
})
</script>

