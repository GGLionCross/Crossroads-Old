<template>
  <q-layout view="lHh Lpr lFf">
    <drawer-menu
      v-model="leftDrawerOpen"
      bordered
      dark
      class="text-white"
    >
    </drawer-menu>
    
    <footer-controls @openMenu="toggleLeftDrawer"></footer-controls>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import DrawerMenu from 'components/DrawerMenu.vue';
import FooterControls from 'components/FooterControls.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    DrawerMenu,
    FooterControls
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
