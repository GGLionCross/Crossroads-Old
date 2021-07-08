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
          <q-input label="Email" color="yellow-14" dark dense outlined></q-input>
          <q-input label="Password" color="yellow-14" dark dense outlined></q-input>
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
          <q-input label="Email" color="yellow-14" dark dense outlined></q-input>
          <q-input label="Name" color="yellow-14" dark dense outlined></q-input>
          <q-input label="Password" color="yellow-14" dark dense outlined></q-input>
          <q-input label="Confirm Password" color="yellow-14" dark dense outlined></q-input>
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

export default defineComponent({
  setup() {
    /* tab can either be '', 'login', 'register'
     * tab = '' represents the 'closed' state
     */
    const tab = ref('');;
    const isClosed = computed(() => tab.value === '');
    const closeLoginRegister = () => { tab.value = '' };

    const loginInfo = ref({
      email: '',
      password: ''
    });
    const registerInfo = ref({
      email: '',
      name: '',
      password: '',
      confirm: ''
    });

    const store = useStore();
    const registerUser = () => { store.dispatch('registerUser') };
    return {
      tab,
      isClosed,
      closeLoginRegister,
      registerUser
    }
  }
});
</script>