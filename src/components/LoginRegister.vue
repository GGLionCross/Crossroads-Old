<template>
  <q-card class="bg-drawer" flat>
    <q-tabs v-model="tab" class="col-grow">
      <q-tab name="login" label="Login" />
      <q-tab name="register" label="Register" />
    </q-tabs>
    <q-tab-panels v-if="!isClosed" v-model="tab" animated class="bg-drawer">
      <q-tab-panel name="login" class="q-gutter-y-sm">
        <base-input
          v-model="v$.loginInfo.email.$model"
          :error="v$.loginInfo.email.$error"
          :error-message="getErrorMessage(v$.loginInfo.email.$errors)"
          label="Email"
        ></base-input>
        <base-input
          v-model="v$.loginInfo.password.$model"
          :error="v$.loginInfo.password.$error"
          :error-message="getErrorMessage(v$.loginInfo.password.$errors)"
          label="Password"
          type="password"
        ></base-input>
        <div class="row justify-end">
          <q-btn
            color="negative"
            icon="arrow_forward"
            size="1em"
            flat
            @click="userLogin"
          ></q-btn>
        </div>
      </q-tab-panel>
      <q-tab-panel name="register" class="q-gutter-y-sm">
        <base-input
          v-model="v$.registerInfo.email.$model"
          :error="v$.registerInfo.email.$error"
          :error-message="getErrorMessage(v$.registerInfo.email.$errors)"
          label="Email"
        ></base-input>
        <base-input
          v-model.lazy="v$.registerInfo.username.$model"
          :error="v$.registerInfo.username.$error"
          :error-message="getErrorMessage(v$.registerInfo.username.$errors)"
          label="Username"
        ></base-input>
        <base-input
          v-model="v$.registerInfo.password.$model"
          :error="v$.registerInfo.password.$error"
          :error-message="getErrorMessage(v$.registerInfo.password.$errors)"
          label="Password"
          type="password"
        ></base-input>
        <base-input
          v-model="registerInfo.confirm"
          :rules="[value => passwordsMatch || 'Passwords don\'t match']"
          label="Confirm Password"
          type="password"
        ></base-input>
        <div class="row justify-end">
          <q-btn
            color="negative"
            icon="arrow_forward"
            size="1em"
            flat
            @click="userRegister"
          ></q-btn>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import {
  getErrorMessage,
  vRequired,
  vEmail,
  vUsername,
  vPassword
} from "src/utils/validators.js";
import BaseInput from "components/BaseComponents/BaseInput.vue";

export default defineComponent({
  components: { BaseInput },
  setup() {
    /* tab can either be "", "login", "register"
     * tab = "" represents the "closed" state
     */
    const tab = ref("login");
    const isClosed = computed(() => tab.value === "");
    const closeLoginRegister = () => { tab.value = "" };

    const loginInfo = ref({
      email: "",
      password: ""
    });
    const registerInfo = ref({
      email: "",
      username: "",
      password: "",
      confirm: ""
    });
    const passwordsMatch = computed(() =>
      registerInfo.value.password === registerInfo.value.confirm);

    const store = useStore();

    const rules = {
      loginInfo: {
        email: { vRequired, vEmail },
        password: { vRequired, vPassword }
      },
      registerInfo: {
        email: { vRequired, vEmail },
        username: { vRequired, vUsername },
        password: { vRequired, vPassword }
      }
    }
    const v$ = useVuelidate(rules, {
      loginInfo,
      registerInfo
    });

    const userLogin = () => {
      v$.value.loginInfo.$touch();
      if (!v$.value.loginInfo.$invalid) {
        store.dispatch("userLogin", loginInfo.value);
      }
    };
    const userRegister = () => {
      v$.value.registerInfo.$touch();
      if (!v$.value.registerInfo.$invalid && passwordsMatch) {
        store.dispatch("userRegister", registerInfo.value);
      }
    };

    return {
      v$,
      getErrorMessage,
      tab,
      isClosed,
      registerInfo,
      passwordsMatch,
      closeLoginRegister,
      userLogin,
      userRegister
    }
  }
});
</script>