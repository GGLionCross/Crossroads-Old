<template>
  <q-card class="bg-drawer" flat>
    <q-btn-dropdown
      :label="currentUser.username"
      class="full-width"
      icon="account_circle"
      dropdown-icon="expand_more"
      auto-close
      flat
    >
      <q-list
        class="bg-drawer text-white no-shadow"
        bordered
      >
        <q-item clickable>
          <q-item-section>
            <q-item-label class="text-center">Settings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="userLogout">
          <q-item-section>
            <q-item-label class="text-center">Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-card>
</template>
<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const currentUser = computed(() => store.getters.getCurrentUser);
    const userLogout = () => store.dispatch("userLogout");

    return {
      currentUser,
      userLogout
    }
  }
})
</script>
