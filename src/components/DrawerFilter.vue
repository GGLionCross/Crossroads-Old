<template>
  <q-dialog
    v-bind="$attrs"
    class="drawer-filter"
    position="right"
    maximized
    persistent
  >
    <div class="full-width row">
      <div class="col-grow">
        <q-table
          :rows="cards"
          :columns="columns"
          class="bg-drawer"
          dark
        ></q-table>
      </div>
      <div class="column justify-end">
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
  setup(props, { emit }) {
    const store = useStore();
    const cards = computed(() => store.getters.getFilteredCards);
    const hideDrawerFilter = () => emit("update:modelValue", false);
    return {
      cards,
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
}
</style>
