<template>
  <q-item v-bind="$attrs" clickable>
    <q-item-section avatar>
      <q-icon :name="icon"></q-icon>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    }
  }
});
</script>
