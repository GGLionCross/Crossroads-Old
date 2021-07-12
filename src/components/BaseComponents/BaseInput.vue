<template>
  <q-input
    v-bind="$attrs"
    color="yellow-14"
    dark
    dense
    hide-bottom-space
    outlined
  ></q-input>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    localV: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    console.error(props);
  }
})
</script>
