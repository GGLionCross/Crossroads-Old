<template>
  <q-drawer
    v-bind="$attrs"
    class="bg-drawer column justify-between no-wrap"
    side="right"
    ref="drawer"
  >
    <login-register v-if="!isUserLoggedIn" />
    <user-card v-else />
    <q-list>
      <drawer-menu-item v-close-popup label="Shuffle" icon="shuffle" @click="shuffleCrossroads" />
      <drawer-menu-item label="Filter" icon="filter_alt" />
    </q-list>
  </q-drawer>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
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

    const drawer = ref(null);
    const shuffleCrossroads = () => {
      store.dispatch('shuffleCrossroads');
      drawer.value.hide();
    }
    return {
      isUserLoggedIn,
      drawer,
      shuffleCrossroads
    };
  }
})
</script>

