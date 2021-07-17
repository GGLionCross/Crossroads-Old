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
      :columns="columns"
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
      <template v-slot:body-cell-preview="props">
        <q-td :props="props">
          <q-btn
            color="info"
            icon="open_in_new"
            text-color="negative"
            glossy
            round
            @click="previewCard(props.row)"
          ></q-btn>
        </q-td>
      </template>
    </q-table>
    <q-dialog v-model="previewVisible" @hide="clearCardToPreview">
      <div class="preview-ctn absolute overflow-hidden">
        <crossroads-card
          :info="cardToPreview"
          preview
          @close-preview="closePreview"
        />
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import CrossroadsCard from "./CrossroadsCard.vue";

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
    field: "name",
    align: "center"
  }
];

export default defineComponent({
  props: {
    category: {
      type: String,
      required: true
    }
  },
  components: {
    CrossroadsCard
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

    const previewVisible = ref(false);
    const cardToPreview = ref({});
    const previewCard = (card) => {
      cardToPreview.value = card;
      previewVisible.value = true;
    };
    const clearCardToPreview = () => cardToPreview.value = {};
    const closePreview = () => previewVisible.value = false;

    return {
      columns,
      tableVisible,
      toggleTableVisible,
      rowCount,
      pagination,
      filter,
      isInFilter,
      toggleFilter,
      previewVisible,
      cardToPreview,
      previewCard,
      clearCardToPreview,
      closePreview
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
$card-width: 90vw;
.preview-ctn {
  width: $card-width;
  max-height: 80vh;
  aspect-ratio: 2.5 / 3.5;
}
</style>
