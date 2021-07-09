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
        <q-tab-panel name="login">
          <q-input
            v-model="vv.loginInfo.username.$model"
            :error="vv.loginInfo.username.$error"
            label="Username"
            color="yellow-14"
            dark
            dense
            outlined
          ></q-input>
          <q-input
            v-model="vv.loginInfo.password.$model"
            :error="vv.loginInfo.password.$error"
            label="Password"
            color="yellow-14"
            dark dense
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
        <q-tab-panel name="register">
          <q-input
            v-model="vv.registerInfo.username.$model"
            :error="vv.registerInfo.username.$error"
            label="Username"
            color="yellow-14"
            dark
            dense
            outlined
          ></q-input>
          <q-input
            v-model="vv.registerInfo.password.$model"
            :error="vv.registerInfo.password.$error"
            label="Password"
            color="yellow-14"
            dark
            dense
            outlined
          ></q-input>
          <q-input
            v-model="vv.registerInfo.confirm.$model"
            :error="vv.registerInfo.confirm.$error"
            label="Confirm Password"
            color="yellow-14"
            dark
            dense
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
import { required } from "@vuelidate/validators";

export default defineComponent({
  setup() {
    /* tab can either be '', 'login', 'register'
     * tab = '' represents the 'closed' state
     */
    const tab = ref('');;
    const isClosed = computed(() => tab.value === '');
    const closeLoginRegister = () => { tab.value = '' };

    const loginInfo = ref({
      username: '',
      password: ''
    });
    const registerInfo = ref({
      username: '',
      password: '',
      confirm: ''
    });

    const store = useStore();
    const registerUser = () => { store.dispatch('registerUser') };

    const rules = {
      loginInfo: {
        username: { required },
        password: { required }
      },
      registerInfo: {
        username: { required },
        password: { required },
        confirm: { required }
      }
    }
    const vv = useVuelidate(rules, {
      loginInfo,
      registerInfo
    });

    console.error("vv:", vv.value);

    return {
      tab,
      isClosed,
      closeLoginRegister,
      registerUser,
      loginInfo,
      registerInfo,
      vv
    }
  }
});
</script>