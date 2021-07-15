<template>
  <q-dialog
    v-bind="$attrs"
    class="drawer-filter"
    position="right"
    maximized
    persistent
  >
    <div class="full-width row">
      <q-scroll-area class="col-grow">
        <filter-table
          category="Basic"
          :rows="basicCards"
          :columns="columns"
        ></filter-table>
      </q-scroll-area>
      <div class="close-ctn column justify-end">
        <q-btn
          color="white"
          icon="close"
          size="1em"
          dark
          flat
          round
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

const columns = [
  {
    name: "name",
    label: "Name",
    field: "name",
    align: "center"
  },
  {
    name: "preview",
    label: "Preview",
    field: "name"
  }
];

export default defineComponent({
  components: { FilterTable },
  setup(props, { emit }) {
    const store = useStore();
    const allCards = computed(() => Object.values(store.getters.getCards));
    const basicCards = computed(() => allCards.value.filter(c => c.basic));

    const hideDrawerFilter = () => emit("update:modelValue", false);
    return {
      basicCards,
      columns,
      hideDrawerFilter
    }
  }
});
</script>

<style lang="scss">
.drawer-filter {
  .q-dialog__inner {
    width: 100%;
  }
  .q-dialog__backdrop {
    background: none;
    // bg-color same as bg-drawer in app.scss
    background-color: #404040;
  }
  .close-ctn {
    border-left: 1px solid rgba(255, 255, 255, 0.28);
  }
}
</style>
