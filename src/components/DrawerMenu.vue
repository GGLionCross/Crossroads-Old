<template>
  <div>
    <q-drawer
      v-bind="$attrs"
      class="bg-drawer column justify-between no-wrap"
      side="right"
      dark
    >
      <div class="row justify-center q-pa-sm">
        <sign-in-with-google v-if="!isUserLoggedIn" />
        <user-card v-else />
      </div>
      <q-list>
        <drawer-menu-item v-close-popup label="Shuffle" icon="shuffle" @click="shuffleCrossroads" />
        <drawer-menu-item label="Filter" icon="filter_alt" @click="showDrawerFilter" />
        <q-separator dark />
        <drawer-menu-item label="Close" icon="close" @click="hideDrawer" />
      </q-list>
    </q-drawer>
    <drawer-filter v-model="filtersVisible" />
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import DrawerFilter from "./DrawerFilter.vue";
import DrawerMenuItem from "./DrawerMenuItem.vue";
import SignInWithGoogle from "./SignInWithGoogle.vue";
import UserCard from "./UserCard.vue";

export default defineComponent({
  components: {
    DrawerMenuItem,
    UserCard,
    DrawerFilter,
    SignInWithGoogle
  },
  setup(props, { emit }) {
    const hideDrawer = () => emit("update:modelValue", false);

    const store = useStore();
    const isUserLoggedIn = computed(() => store.getters.isUserLoggedIn);
    const shuffleCrossroads = () => {
      store.dispatch('shuffleCrossroads');
      hideDrawer();
    }
    const filtersVisible = ref(false);
    const showDrawerFilter = () => {
      filtersVisible.value = true;
    }
    return {
      hideDrawer,
      isUserLoggedIn,
      shuffleCrossroads,
      filtersVisible,
      showDrawerFilter
    };
  }
})
</script>