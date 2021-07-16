<template>
  <div class="filter-table">
    <div :class="[
        'row',
        'justify-between',
        'cursor-pointer',
        'bg-negative',
        'text-white',
        'q-pa-sm',
      ]"
      @click="toggleTableVisible"
    >
      <div class="text-uppercase">{{ category }} ({{rowCount}})</div>
      <q-icon
        name="expand_more"
        size="xs"
        class="icon-dropdown"
        :class="{ 'rotate-180': tableVisible }"
      />
    </div>
    <q-table
      v-if="tableVisible"
      v-bind="$attrs"
      class="bg-drawer"
      :pagination="pagination"
      selection="multiple"
      dark
      flat
      hide-pagination
      virtual-scroll
    >
      <template v-slot:body-selection="props">
        <q-checkbox
          :model-value="isInFilter(props.row.key)"
          color="negative"
          dark
          @update:model-value="toggleFilter($event, props.row.key)"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    category: {
      type: String,
      required: true
    }
  },
  setup(props, { attrs }) {
    const store = useStore();
    const tableVisible = ref(false);
    const toggleTableVisible = () => {
      tableVisible.value = !tableVisible.value;
    }
    const rowCount = computed(() => attrs.rows.length);
    const pagination = ref({
      sortBy: "name",
      descending: false,
      rowsPerPage: 0
    });
    const filter = computed(() => store.getters.getFilter);
    const isInFilter = (key) => filter.value.includes(key);
    const toggleFilter = (value, key) =>
      store.dispatch('toggleFilter', { value, key });

    return {
      tableVisible,
      toggleTableVisible,
      rowCount,
      pagination,
      filter,
      isInFilter,
      toggleFilter
    };
  }
})
</script>

<style lang="scss" scoped>
.filter-table {
  border-bottom: 1px solid rgba(255, 255, 255, 0.28);
}
.icon-dropdown {
  transition: transform .3s;
}
</style>
