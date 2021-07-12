<template>
  <q-card class="bg-drawer overflow-hidden" flat>
    <div class="row">
      <q-tabs v-model="tab" class="col-grow">
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <q-btn
          v-if="!isClosed"
          icon="close"
          flat
          @click="closeLoginRegister"
        />
      </transition>
    </div>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <q-tab-panels v-if="!isClosed" v-model="tab" animated class="bg-drawer">
        <q-tab-panel name="login" class="q-gutter-y-sm">
          <q-input
            v-model="v$.loginInfo.username.$model"
            :error="v$.loginInfo.username.$error"
            :error-message="getErrorMessage(v$.loginInfo.username.$errors)"
            label="Username"
            color="yellow-14"
            dark
            dense
            hide-bottom-space
            outlined
          ></q-input>
          <q-input
            v-model="v$.loginInfo.password.$model"
            :error="v$.loginInfo.password.$error"
            :error-message="getErrorMessage(v$.loginInfo.password.$errors)"
            label="Password"
            color="yellow-14"
            dark
            dense
            hide-bottom-space
            outlined
          ></q-input>
          <div class="row justify-end">
            <q-btn
              color="red-10"
              icon="arrow_forward"
              size="1em"
              flat
            ></q-btn>
          </div>
        </q-tab-panel>
        <q-tab-panel name="register" class="q-gutter-y-sm">
          <q-input
            v-model="v$.registerInfo.email.$model"
            :error="v$.registerInfo.email.$error"
            :error-message="getErrorMessage(v$.registerInfo.email.$errors)"
            label="Email"
            color="yellow-14"
            dark
            dense
            hide-bottom-space
            outlined
          ></q-input>
          <q-input
            v-model="v$.registerInfo.username.$model"
            :error="v$.registerInfo.username.$error"
            :error-message="getErrorMessage(v$.registerInfo.username.$errors)"
            label="Username"
            color="yellow-14"
            dark
            dense
            hide-bottom-space
            outlined
          ></q-input>
          <q-input
            v-model="v$.registerInfo.password.$model"
            :error="v$.registerInfo.password.$error"
            :error-message="getErrorMessage(v$.registerInfo.password.$errors)"
            label="Password"
            color="yellow-14"
            dark
            dense
            hide-bottom-space
            outlined
          ></q-input>
          <q-input
            v-model="registerInfo.confirm"
            :rules="[value => passwordsMatch || 'Passwords don\'t match']"
            lazy-rules
            label="Confirm Password"
            color="yellow-14"
            dark
            dense
            hide-bottom-space
            outlined
          ></q-input>
          <div class="row justify-end">
            <q-btn
              color="red-10"
              icon="arrow_forward"
              size="1em"
              flat
              @click="registerUser"
            ></q-btn>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </transition>
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
  vPassword,
  vConfirm
} from "src/utils/validators.js";

export default defineComponent({
  setup() {
    /* tab can either be "", "login", "register"
     * tab = "" represents the "closed" state
     */
    const tab = ref("");;
    const isClosed = computed(() => tab.value === "");
    const closeLoginRegister = () => { tab.value = "" };

    const loginInfo = ref({
      username: "",
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
        username: { vRequired, vUsername },
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

    const loginUser = () => {
      v$.value.loginInfo.$touch();
      if (!v$.value.loginInfo.$invalid) {
        store.dispatch("loginUser", loginInfo.value);
      }
    };

    const registerUser = () => {
      v$.value.registerInfo.$touch();
      if (!v$.value.registerInfo.$invalid && passwordsMatch) {
        store.dispatch("registerUser", registerInfo.value);
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
      loginUser,
      registerUser
    }
  }
});
</script>