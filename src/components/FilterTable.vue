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
      <div class="text-uppercase">Original</div>
      <q-icon
        name="expand_more"
        size="xs"
        class="icon-dropdown"
        :class="{ 'rotate-180': tableVisible }"
      />
    </div>
    <q-table
      v-bind="$attrs"
      class="bg-drawer"
      dark
    ></q-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const tableVisible = ref(false);
    const toggleTableVisible = () => {
      tableVisible.value = !tableVisible.value;
    }

    return {
      tableVisible,
      toggleTableVisible
    };
  }
})
</script>

<style lang="scss" scoped>
.icon-dropdown {
  transition: transform .3s;
}
</style>
