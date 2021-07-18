<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="mobile-only bg-header-footer">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Crossroads
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <drawer-menu v-model="leftDrawerOpen" />
    
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
