<template>
  <div>
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
      :rows-per-page-options="[0]"
      dark
      hide-pagination
      virtual-scroll
    ></q-table>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    category: {
      type: String,
      required: true
    }
  },
  setup(props, { attrs }) {
    const tableVisible = ref(false);
    const toggleTableVisible = () => {
      tableVisible.value = !tableVisible.value;
    }
    const rowCount = computed(() => attrs.rows.length);

    return {
      tableVisible,
      toggleTableVisible,
      rowCount
    };
  }
})
</script>

<style lang="scss" scoped>
.icon-dropdown {
  transition: transform .3s;
}
</style>
