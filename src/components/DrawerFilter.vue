<template>
  <q-dialog
    v-bind="$attrs"
    class="drawer-filter"
    position="bottom"
    maximized
    persistent
  >
    <div class="column overflow-hidden">
      <q-scroll-area class="col-grow">
        <filter-table
          category="Basic"
          :rows="basicCards"
          basic
        ></filter-table>
        <filter-table
          category="Character Exclusive"
          :rows="characterCards"
        ></filter-table>
        <filter-table
          category="Traitor"
          :rows="traitorCards"
        ></filter-table>
        <filter-table
          category="Explicit"
          :rows="explicitCards"
        ></filter-table>
        <filter-table
          category="Raxxon"
          :rows="raxxonCards"
        ></filter-table>
        <filter-table
          category="Bandits"
          :rows="banditsCards"
        ></filter-table>
      </q-scroll-area>
      <div class="close-ctn row justify-center">
        <q-btn
          class="full-width"
          color="white"
          icon="close"
          dark
          flat
          @click="hideDrawerFilter"
        ></q-btn>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import FilterTable from "./FilterTable.vue";

export default defineComponent({
  components: { FilterTable },
  setup(props, { emit }) {
    const store = useStore();
    const allCards = computed(() => Object.values(store.getters.getCards));
    const basicCards = computed(() => allCards.value.filter(c => c.basic));
    const characterCards = computed(() => allCards.value.filter(c => c.character));
    const traitorCards = computed(() => allCards.value.filter(c => c.traitor));
    const explicitCards = computed(() => allCards.value.filter(c => c.explicit));
    const raxxonCards = computed(() => allCards.value.filter(c => c.raxxon));
    const banditsCards = computed(() => allCards.value.filter(c => c.bandits));

    const hideDrawerFilter = () => emit("update:modelValue", false);
    return {
      basicCards,
      characterCards,
      traitorCards,
      explicitCards,
      raxxonCards,
      banditsCards,
      hideDrawerFilter
    }
  }
});
</script>

<style lang="scss">
.drawer-filter {
  .q-dialog__inner {
    height: 100%;
  }
  .q-dialog__backdrop {
    background: none;
    // bg-color same as bg-drawer in app.scss
    background-color: #404040;
  }
  .close-ctn {
    border-top: 1px solid rgba(255, 255, 255, 0.28);
  }
}
</style>
