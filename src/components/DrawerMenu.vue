<template>
  <q-drawer v-bind="$attrs" class="bg-drawer column justify-between no-wrap">
    <login-register v-if="!isUserLoggedIn" />
    <user-card v-else />
    <q-list>
      <drawer-menu-item label="Reset" icon="loop" @click="resetCrossroads" />
      <drawer-menu-item label="Filter" icon="filter_alt" />
    </q-list>
  </q-drawer>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import DrawerMenuItem from "./DrawerMenuItem.vue";
import LoginRegister from "./LoginRegister.vue";
import UserCard from "./UserCard.vue";

export default defineComponent({
  components: {
    DrawerMenuItem,
    LoginRegister,
    UserCard
  },
  setup() {
    const store = useStore();
    const isUserLoggedIn = computed(() => store.getters.isUserLoggedIn);
    return {
      isUserLoggedIn,
      resetCrossroads: () => store.dispatch('resetCrossroads')
    };
  }
})
</script>

