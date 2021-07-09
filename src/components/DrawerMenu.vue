<template>
  <q-drawer v-bind="$attrs" class="bg-drawer column justify-between no-wrap">
    <login-register />
    <q-list>
      <drawer-menu-item label="Reset" icon="loop" @click="resetCrossroads" />
      <drawer-menu-item label="Filter" icon="filter_alt" />
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import DrawerMenuItem from "./DrawerMenuItem.vue";
import LoginRegister from "./LoginRegister.vue";

export default defineComponent({
  components: {
    DrawerMenuItem,
    LoginRegister
  },
  setup() {
    const store = useStore();
    return {
      resetCrossroads: () => store.dispatch('resetCrossroads')
    };
  }
})
</script>

