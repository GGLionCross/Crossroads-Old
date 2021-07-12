import { createApp } from "vue";
import BaseInput from "src/components/BaseComponents/BaseInput.vue";

// Called within .quasar/app.js
export function initializeGlobalComponents(app) {
  app.component("base-input", BaseInput);
}