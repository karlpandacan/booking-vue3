<template>
  <div id="login" class="login">
    <form @submit.prevent="submit">
      <div class="form-control">
        <label>Username</label>
        <input type="text" v-model="form.username" />
      </div>
      <div class="form-control">
        <label>Password</label>
        <input type="password" v-model="form.password" label="Password" />
      </div>
      <button class="btn btn--primary mt-10 py-16 block" type="submit">LOGIN</button>
      <div class="clearfix"></div>
    </form>
  </div>
  <Modal v-if="showModal" :disable-close="false" @close="showModal = false">
    <!-- <template v-slot:header>Yeah</template> -->
    <!-- <template v-slot:body>Yeah</template> -->
    <!-- <template v-slot:footer>Yeah</template> -->
  </Modal>
</template>

<script>
import { ref, inject } from "vue";
import Modal from "@/components/Widgets/Modal.vue";
export default {
  name: "login",
  components: { Modal },
  setup() {
    const store = inject("store");

    const form = ref({
      username: "",
      password: "",
    });

    const showModal = ref(false);

    function submit() {
      store.dispatch("users/login", form.value);
    }

    return {
      form,
      showModal,
      submit,
    };
  },
};
</script>
